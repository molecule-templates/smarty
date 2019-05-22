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
compile_tpl_path=chroot/home/work/odp/template/molecules/{{name}}/view


cd $compile_tpl_path
for file in `ls .`;
do
    tpl_file=$file;
    cd $code_dir
    $PHP_PATH $BASE_DIR/bin/tpl_compile.php $tpl_file
    cd -
done

echo "compile finished"

cd $BASE_DIR

rm -rf output
mkdir -p output
cp -r chroot/home/work/odp/tmp output/
chmod -R 755 output/tmp
cd output
mkdir -p template/molecules/{{name}}
cp -r $BASE_DIR/dist/* template/molecules/{{name}}/
tar -cjf ./template.bz2 ./template ./tmp

rm -rf template
rm -rf tmp

cd ..
