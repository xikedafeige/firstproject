require(["config"],function(){
	require(["jquery","tools","header","footer","shuffling","template","jqcookie"],function($,tools,header,footer,shuffling,template,jqcookie){
		new Promise(function(resolve,reject){
			//实现header的样式不同，在url后面加上选择器
			$("header").load("/html/component/header.html",function(){
				resolve();
			});
			$("#banner").load("/html/shuffling.html",function(){
				$("#banner").shuffling({
					goPrev:"left",
					goNext: "right"
				})
			});
			$("footer").load("/html/component/footer.html",function(){
				
			});
		}).then(function(){
			//调用下拉菜单方法
			header.init();
			//调用吸顶方法
			header.nav();
			//调用取cookie的方法
			header.state();
			//console.log(header.nav());
		}).then(function(){
			//图片的阴影效果
		}).then(function(){
			//主页详情页
			$.ajax({
				url:"http://localhost/firstevent/api/list.php",
				method:"POST",
				dataType:"json",
				success: function(res){
				//console.log(res);
					if(res.code === 1){
						var str = template("right-template",{products: res.secondlist});
						//console.log(str);
						$(".lists").html(str);
						//console.log($("lists").html(str));
					}
				}
			})
		})
	})
})