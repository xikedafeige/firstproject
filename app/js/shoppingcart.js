require(["config"],function(){
	require(["jquery","header","footer","template","jqcookie"],function($,header,footer,template,jqcookie){
		new Promise(function(resolve,reject){
			//实现header的样式不同，在url后面加上选择器
			$("header").load("/html/component/header.html",function(){
				resolve();
				header.state();
			});
			$("footer").load("/html/component/footer.html",function(){
	
			});
		}).then(function(){
			//取cookie状态
				var str = $.cookie("cart");
			//将字符串转换为json
				var json = JSON.parse(str);
				console.log(json);
				console.log(json[0]);
				var html = template("temp",{products:json});
				//console.log(html);
				$(".cart-body").html(html);
				//购物车删除功能
				$(".cart-remove").click(function(){
					$(".cart-product").remove();
				})
				//购物车数量变化
				/*var add = $(".mid").val();
				$(".lt").click(function(){
					add++;
					$(".mid").val() = add;
				})
				var sub = $(".mid").val()
				$(".rl").click(function(){
					sub--;
				})
				//购物车结算功*/能
				/*$("cal").click(function(){
					$
				})*/
		})
	})
})
