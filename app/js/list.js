require(["config"],function(){
	require(["jquery","tools","header","footer","template","jqcookie"],function($,tools,header,footer,template,jqcookie){
		new Promise(function(resolve,reject){
			//实现header的样式不同，在url后面加上选择器
			$("header").load("/html/component/header.html",function(){
				resolve();
			});
			$("footer").load("/html/component/footer.html",function(){
	
			});
		}).then(function(){
			header.init();
			//header.nav();
			header.state();
		}).then(function(){
			//主页详情页
			$.ajax({
				url:"http://rap2api.taobao.org/app/mock/116501/products",
				method:"GET",
				dataType:"json",
				success: function(res){
					console.log(res);
					if(res.code === 1){
						var str = template("right-template",{products: res.products});
						//console.log(str);
						$(".phonelists").html(str);
						console.log($(".phonelists").html(str));
					}
				}
			})
		})
	})
})