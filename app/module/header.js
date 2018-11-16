//模块之间的引用
define(["jquery"],function($){
	//构造函数
	function Header(){

	}
	/*下拉菜单*/
	Header.prototype.init = function(){
		$(".lihover").hover(function(){
			$(".list").show();
		},function(){
			$(".list").hide();
		})
			
	
	},
	/*吸顶*/
	Header.prototype.nav = function(){
		//实现吸顶效果
		$(window).scroll(function(){
			/*console.log($(window).scrollTop());*/
			if($(window).scrollTop()> 106)
				$("#header").css({"position":"fixed","top":0});
		})
	},

	/*取cookie*/
	Header.prototype.state = function(){
		var tel = $.cookie("tel");
		//console.log(tel);
		if(tel){
			//隐藏原状态
			$(".m1").hide();
			////显现账号，退出登录按钮
			$(".m2").show().html(tel+"欢迎你");
			$(".backbtn").css({"display":"block"});
			
			$(".backbtn").click(function(){
				//删除cookie
				$.cookie(tel,'',{expires: -1});
				//删除退出登录，显现原状态*/
				$(".backbtn").hide();
				$(".m1").show();
				$(".m2").hide();
			})	
		}
	}
	return new Header();
})