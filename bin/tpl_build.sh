#!/bin/sh

set -ex

start_time=$(date +%s)

pwd
BASE_DIR=$(pwd)
PHP_PATH=/home/work/odp/php/bin/php
code_dir=$BASE_DIR/bin

cd ./bin

echo "compile start"

$PHP_PATH tpl_build_env.php
cd -
compile_tpl_path=chroot/home/work/odp/template/molecules/toptip/view


cd $compile_tpl_path
for file in `ls .`;
do
    tpl_file=$file;
    cd $code_dir
    $PHP_PATH $BASE_DIR/bin/tpl_compile.php $tpl_file
    $PHP_PATH $BASE_DIR/bin/tpl_compile_new.php $tpl_file
    cd -
done

echo "compile finished"

cd $BASE_DIR

rm -rf output
mkdir -p output
# 打包老路径代码
cp -r chroot/home/work/odp/tmp output/
chmod -R 755 output/tmp
cd output
mkdir -p template/molecules/toptip
cp -r $BASE_DIR/dist/* template/molecules/toptip/
tar -cjf ./template.bz2 ./template ./tmp
rm -rf tmp

# 打包新路径代码
cp -r ../chroot/home/work/search/view-ui/tmp .
chmod -R 755 tmp
tar -cjf ./template2.bz2 ./template ./tmp

rm -rf tmp
rm -rf template

cd ..

# 拷贝上线脚本
cp -r spec output/
cp -r noahdes output/