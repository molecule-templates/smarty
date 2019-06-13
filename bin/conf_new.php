<?php
    $smarty_dir_new ="/home/work/search/view-ui/php/phplib/ext/smarty/";
    $odp_root_path_new="/home/work/search/view-ui/";
    $fileInfo = pathinfo(__FILE__);
    $project_root_path=realpath($fileInfo['dirname'].'/../');
    $compile_path = 'tmp/odp/smarty/molecules/toptip';
    $compile_dir_new = "/home/work/search/view-ui/tmp/odp/smarty/molecules/toptip/";
    $template_dir_new = "/home/work/search/view-ui/template/molecules/toptip/view";
    $vim_root_path = $project_root_path.'/chroot';
    $vim_odp_path_new = $vim_root_path.$odp_root_path_new;
    $smarty_path = 'php/phplib/ext/smarty';
    $code_path = '/dist/view';
    $plugins_dir_new = $smarty_dir_new."baiduplugins/";