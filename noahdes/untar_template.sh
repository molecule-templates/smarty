#!/bin/bash
if [ -e ../template.bz2 ];then
    echo "==== now untar template.bz2 ..."
    tar -xjf ../template.bz2  -C ../ 1>/dev/null && rm ../template.bz2
    tar -xjf ../template2.bz2  -C /home/work/search/view-ui 1>/dev/null && rm ../template2.bz2
else
    echo "=== no template.bz2 , go on..."
fi
exit 0
