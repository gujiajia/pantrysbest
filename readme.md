# 安装插件
* cnpm init
* cnpm install bootstrap@3.3.5 --save
* cnpm install @types/jquery --save
* cnpm install jquery --save
* cnpm install font-awesome --save
# 引用
[样式重置 搜索 yui css reset](http://yuilibrary.com/yui/docs/cssreset/)
```html
<head>
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
<!--样式重置 -->
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">
</head>

<body>
<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
```
# angular
## ng-include和ui-bootstrap用法(uib-dropdown)
### 命令行
头文件提示
* cnpm install angular --save
* cnpm install @types/angular --save (需要重新加载窗口 )
新建 tsconfig.json 文件 设置头文件提示目录
```json
{
    "compilerOptions": {
        "target": "es5",
        "typeRoots": [
            "node_modules/@types"
        ]
    }
}
```
ui-bootstrap
* cnpm install angular-ui-bootstrap --save

index.html 引用
```html
<script src="node_modules/angular/angular.min.js"></script>

<script src="node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js"></script>
<script src="node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js"></script>
<script src="node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css"></script>
```
# 产品组跳转到产品详情
## 配置路由 [](http://www.runoob.com/angularjs/angularjs-routing.html)
### 命令行
* cnpm install angular-route --save
index.html 引用
```html
<script src="node_modules/angular/angular.min.js"></script>
<script src="node_modules/angular-route/angular-route.min.js"></script>
```