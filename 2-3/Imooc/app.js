var express = require('express'); // 引入express模块
var path = require('path'); // 引入path模块
var port = process.env.PORT || 3000; // 设置端口号，默认值为3000
var app = express();

app.set('views', './views/pages'); //设置视图根目录
app.set('view engine', 'jade'); //设置默认的模板引擎
app.use(express.static(path.join(__dirname, 'bower_components'))) // __dirname 为当前目录
app.listen(port); //监听端口

console.log('imooc started on port '+port);

//添加路由
// index page
app.get('/',function(req, res){
	res.render('index',{
		title:'imooc 首页',
		movies:[{
			title:'名侦探狄仁杰',
			_id:1,
			poster:'http://news.xinhuanet.com/ent/2015-01/28/127431843_14224247899911n.jpg'
		},{
			title:'名侦探狄仁杰',
			_id:2,
			poster:'http://news.xinhuanet.com/ent/2015-01/28/127431843_14224247899911n.jpg'
		},{
			title:'名侦探狄仁杰',
			_id:3,
			poster:'http://news.xinhuanet.com/ent/2015-01/28/127431843_14224247899911n.jpg'
		},{
			title:'名侦探狄仁杰',
			_id:4,
			poster:'http://news.xinhuanet.com/ent/2015-01/28/127431843_14224247899911n.jpg'
		},{
			title:'名侦探狄仁杰',
			_id:5,
			poster:'http://news.xinhuanet.com/ent/2015-01/28/127431843_14224247899911n.jpg'
		},{
			title:'名侦探狄仁杰',
			_id:6,
			poster:'http://news.xinhuanet.com/ent/2015-01/28/127431843_14224247899911n.jpg'
		}]
	})
})

// detail page
app.get('/movie/:id',function(req, res){
	res.render('detail',{
		title:'imooc 详情页',
		movie:{
			doctor:'万万没想到',
			country:'中国',
			title:'名侦探狄仁杰',
			year:2014,
			poster:'http://news.xinhuanet.com/ent/2015-01/28/127431843_14224247899911n.jpg',
			language:'中文',
			flash:'http://player.youku.com/player.php/Type/Folder/Fid/23465260/Ob/1/sid/XOTM0MDg5NTcy/v.swf',
			summary:'万合天宜出品的新剧《名侦探狄仁杰》已经正式进入上线倒计时阶段，与以往的作品不同，该剧首次突破了单一播放平台的播出方式，与优酷腾讯两家互联网顶级视频播放平台联合出品，势头直指全网覆盖，如此一来《名侦探狄仁杰》便更加令人期待。'
		}
	})
})

// admin page
app.get('/admin/movie',function(req, res){
	res.render('admin',{
		title:'imooc 后台录入页',
		movie:{
			title:'',
			doctor:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	})
})

// list page
app.get('/admin/list',function(req, res){
	res.render('list',{
		title:'imooc 列表页',
		movies:[{
			_id:1,
			doctor:'万万没想到',
			country:'中国',
			title:'名侦探狄仁杰',
			year:2014,
			poster:'http://news.xinhuanet.com/ent/2015-01/28/127431843_14224247899911n.jpg',
			language:'中文',
			flash:'http://player.youku.com/player.php/Type/Folder/Fid/23465260/Ob/1/sid/XOTM0MDg5NTcy/v.swf',
			summary:'万合天宜出品的新剧《名侦探狄仁杰》已经正式进入上线倒计时阶段，与以往的作品不同，该剧首次突破了单一播放平台的播出方式，与优酷腾讯两家互联网顶级视频播放平台联合出品，势头直指全网覆盖，如此一来《名侦探狄仁杰》便更加令人期待。'
	}]
	})
})