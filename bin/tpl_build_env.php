<?php
    require_once("./conf.php");
    function RecursiveCopy ($source, $dest, $diffDir = '') {
        $sourceHandle = opendir($source);
        if(!$diffDir) {
           $diffDir = $source;
        }   
	mkdir($dest . '/' . $diffDir,0777,$recursive=true);
        while($res = readdir($sourceHandle)){
                if($res == '.' || $res == '..') {
                    continue;
                }
                if(is_dir($source . '/' . $res)){
                    RecursiveCopy($source . '/' . $res, $dest, $diffDir . '/' . $res);
                }
                else
                {
                    copy($source . '/' . $res, $dest . '/' . $diffDir . '/' . $res);
                }
        }
        closedir($sourceHandle);
    }
    function rrmdir($dir) {
        if (is_dir($dir)) {
            $objects = scandir($dir);
            foreach ($objects as $object) {
                if ($object != "." && $object != "..") {
                    if (filetype($dir."/".$object) == "dir") {
                        rrmdir($dir."/".$object);
                    } else {
                        unlink($dir."/".$object);   
                    }
                }
            }
            reset($objects);
            rmdir($dir);
        }
    }

   function make_virtual_new () {
        global $odp_root_path,$compile_dir,$smarty_path,$compile_path,$vim_odp_path,$smarty_path,$vim_root_path,$project_root_path,$template_dir,$code_path;
        rrmdir($vim_root_path);
        mkdir($vim_odp_path.$compile_path,0777,$recursive=true);
        RecursiveCopy($project_root_path.$code_path,$vim_root_path,$template_dir);
        RecursiveCopy($odp_root_path.$smarty_path,$vim_root_path);
    }
    make_virtual_new();
