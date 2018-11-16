require(["config"],function(){
	require(["jquery","tools","header","footer","template","jqcookie","fdj"],function($,tools,header,footer,template,jqcookie,fdj){
		new Promise(function(resolve,reject){
			//实现header的样式不同，在url后面加上选择器
			$("header").load("/html/component/header.html",function(){
				resolve();
			});
			$("footer").load("/html/component/footer.html",function(){
	
			});
		}).then(function(){
			header.init();
			header.state();
		}).then(function(){
			//委派给lists，给li绑定监听事件
			//切割当前li的id
			//$(".lists").on("click","li",function(){
				//切割字符串
				//console.log($(this).parent());
				var str = location.search.slice(1);
				//console.log(str);
				var arr = str.split("="); 
				//console.log(arr);
				var obj = {};
				obj[arr[0]] = arr[1];
				//console.log(obj);
			//})				
			$.ajax({
				url:"http://localhost/firstevent/api/detail.php",
				method:"GET",
				dataType:"json",
				data:obj,
				success: function(res){
					console.log(res);
					if(res.code === 1){
						//详情页渲染
						var str = template("rtemplate",{products: res.detail});
						//console.log(str);
						$(".wrap").html(str);
						//console.log($("lists").html(str));
						
						//选项卡切换
						$(".small li").click(function(){
							$(this).addClass("bc").siblings().removeClass("bc");
							$(".sbox img").eq($(this).index()).show().siblings().hide();
							$(".biggest img").eq($(this).index()).show().siblings().hide();
						})	
						
						//颜色切换
						$(".pc span").click(function(){
							//console.log($(this).addClass("cc").siblings());
							$(this).addClass("p1").siblings().removeClass("p1");
						})
						//放大镜
						$(".sbox").fdj({
							sbox:"sbox",
							fdj:"fdj",
							biggest:"biggest",
							bImg:"bImg"
						})
					}


				
				//点击购物车，存cookie
				var arr=[];
				var cart = $.cookie("cart");
				if(cart){
					arr = JSON.parse(cart);
				}
				//console.log($(".expireshop"));
				for(var i = 0 ; i <  $(".expireshop").length;i++){
					console.log($(".expireshop").length);
					//给addMe绑定点击事件
					$(".expireshop").click(function(){	
						for(var j = 0 ;j < arr.length ; j++){
							if(arr[j].id === res.detail.id){
								arr[j].number++;
								break;
							}
						}
						if(j === arr.length){
							var obj={
								id: res.detail.id,
								title: res.detail.title,
								introduce:res.detail.introduce,
								img:res.detail.img1,
								num:res.detail.num,
								number:1
							};
							console.log(obj);
							arr.push(obj);
						}
						//json格式转换为字符串,然后存放到cookie中
						var str=JSON.stringify(arr);
						$.cookie("cart",str,{
							path:"/",
							expires:7
						});

					})
				}
				















					
				}
			})
		}).then(function(){
			
		})
	})
})