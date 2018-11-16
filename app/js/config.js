require.config({
	//配置文件，将baseUrl作为项目的根目录
	baseUrl:"/",
	//配置每个模块的短名称,不需要后缀
	paths: {
		"header": "module/header",
		"footer": "module/footer",
		"jquery": "libs/jquery/jquery-1.11.3",
		"bootstrap": "libs/bootstrap/js/bootstrap",
		"tools": "libs/tools",
		"template": "libs/template-web",
		"drag" : "module/drag",
		"shuffling": "module/shuffling",
		"migrate": "libs/jquery-migrate-1.2.1.min",
		/*"idcode" : "/libs/jquery.idcode",*/
		"fdj" : "/module/fdj",
		"jqcookie" : "libs/jquery.cookie"
	},
	//垫片,bootstrap基于数组
	shim:{
		"bootstrap":{
			deps:["jquery"]
		}
		/*"idcode":{
			deps:["jquery"]
		}*/
		/*"jqcookie":{
			deps:["jquery"]
		}*/
	}
})
