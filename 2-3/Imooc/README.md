###伪造模板数据跑通前后端交互流程

- 利用 jade 模板的继承和提取公共模块调用的功能对目录结构进行优化调整
- 在 layout.jade 中编写html框架代码
- 编写 head.jade 和 header.jade 模块代码
- 编写 index.jade 页面
- 在入口文件 app.js 中添加伪造数据
- 引入path并设置express静态资源的引用路径
- 修改视图根目录
- 查看效果
- 跑通其他页面前后端交互流程

> 知识点补充：[ path 模块](http://nodejs.cn/api/path "path模块相关知识")

详情请参考：[项目前后端流程打通](https://github.com/xuhp/node_mogodb_create_web/wiki/2.-%E9%A1%B9%E7%9B%AE%E5%89%8D%E5%90%8E%E7%AB%AF%E6%B5%81%E7%A8%8B%E6%89%93%E9%80%9A "前后端请求和返回数据")