<?php
    require_once("./conf.php");
    require_once($smarty_dir."Smarty.class.php");
    $smartyConf=array(
         "template_dir" => $template_dir,
         "plugins_dir"=>$plugins_dir,
         "compile_dir"=>$compile_dir
     );
     if(!chroot($vim_root_path)){
         echo "chroot faile, need root privilege;\nneed do 'chmod u+s php;chmod g+s php;chown root php' on compile environment";
         exit(1);
    }

     function getSmarty($conf){
         $smarty = new Smarty();
         $smarty->setTemplateDir($conf['template_dir']);
         $smarty->setCompileDir($conf['compile_dir']);
         $smarty->caching = 0;
         $smarty->cache_lifetime = 0;
         $smarty->addPluginsDir($conf['plugins_dir']);
         $smarty->compile_check = true;
         $smarty->force_compile = true;
         $smarty->use_sub_dirs = true;
         $smarty->left_delimiter  =  "{%";
         $smarty->right_delimiter =  "%}";
         $smarty->debugging = false;
         $smarty->loadFilter('output','trimall');
         $smarty->_file_perms = 0644;
         $smarty->_dir_perms = 0755;
         return $smarty;
     }

     function compileTpl($tpl_file,$smartyConf){
         $_dir = $smartyConf['template_dir'];
         $_template_file = $tpl_file;
         echo 'compiling ', $_template_file, '...';
         $_start_time = microtime(true);
         $_smarty=getSmarty($smartyConf);
         $_tpl = $_smarty->createTemplate($_template_file,null,null,null,false);
         $_tpl->compileTemplateSource();
         echo ' compiled in ', microtime(true) - $_start_time, " seconds";
     }
     compileTpl($argv[1],$smartyConf);