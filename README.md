# {{name}}e module

wise 下的顶部提示模块

## 快速开始

### 安装依赖

```bash
npm install --registry=http://registry.npm.baidu-int.com
```

## dev.config 文件

在工程根目录新建 `dev.config.js` 文件，内容如下（把机器名换成你的测试机/调研机）：

```javascript
module.exports = {
    receiver: 'http://xxx.baidu.com:8210'
};
```

### 编译部署

* `npm run lint`: 检查代码风格
* `npm run test`: 执行单元测试
* `npm run coveralls`: 产出测试覆盖率报告
* `npm run build`: 编译并将编译后的代码生成至dist目录下
* `npm run deploy`: 将dist目录下的文件部署到测试机，依赖测试机的 receiver 文件，以及本地dev.config.js配置
* `npm run watch`: 实时编译部署开发环境代码，依赖测试机的 receiver 文件，以及本地dev.config.js配置 `dev.config.js`。参考：<http://agroup.baidu.com/wise-survive/md/article/977636>

### 预编译
预编译文件路径：/home/work/odp/tmp/odp/smarty/modules/{{name}}/
预编译部署路径：/home/work/odp/
