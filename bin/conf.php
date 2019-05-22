<?php
    $smarty_dir ="/home/work/odp/php/phplib/ext/smarty/";
    $odp_root_path="/home/work/odp/";
    $fileInfo = pathinfo(__FILE__);
    $project_root_path=realpath($fileInfo['dirname'].'/../');
    $compile_path = 'tmp/odp/smarty/molecules/{{name}}';
    $compile_dir = "/home/work/odp/tmp/odp/smarty/molecules/{{name}}/";
    $template_dir = "/home/work/odp/template/molecules/{{name}}/view";
    $smarty_dir ="/home/work/odp/php/phplib/ext/smarty/";
    $vim_root_path = $project_root_path.'/chroot';
    $vim_odp_path = $vim_root_path.$odp_root_path;
    $smarty_path = 'php/phplib/ext/smarty';
    $code_path = '/dist/view';
    $plugins_dir = $smarty_dir."baiduplugins/";
