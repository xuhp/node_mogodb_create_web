var express = require('express'); // 引入express模块
var port = process.env.PORT || 3000; // 设置端口号，默认值为3000
var app = express();

app.set('views', './views'); //设置视图根目录
app.set('view engine', 'jade'); //设置默认的模板引擎
app.listen(port); //监听端口

console.log('imooc started on port '+port);

//添加路由
// index page
app.get('/',function(req, res){
	res.render('index',{
		title:'imooc 首页'
	})
})

// detail page
app.get('/movie/:id',function(req, res){
	res.render('detail',{
		title:'imooc 详情页'
	})
})

// admin page
app.get('/admin/movie',function(req, res){
	res.render('admin',{
		title:'imooc 后台录入页'
	})
})

// list page
app.get('/admin/list',function(req, res){
	res.render('list',{
		title:'imooc 列表页'
	})
})