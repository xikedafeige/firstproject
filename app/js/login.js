require(["config"],function(){
	require(["jquery","tools","header","footer","template","jqcookie"],function($,tools,header,footer,template,jqcookie){
		new Promise(function(resolve,reject){
			//实现header的样式不同，在url后面加上选择器
			$("header").load("/html/component/header.html",function(){
				//document.getElementsByTagName("header")[0].innerHTML = data;
				resolve();
				header.state();
			});
		}).then(function(){
			$(".button").click(function(e){
				//构建对象存储value值
				e = e || event;
				var data = {
					tel: $("#tel").val(),
					psd: $("#psd").val()
				};
				//console.log(data.tel);
				//发送ajax请求
				$.ajax({
					url:"http://localhost/firstevent/api/login.php",
					method:"POST",
					dataType:"json",
					data:data,
					success:function(res){
						console.log(res);
						if(res.code === 1){
							alert("登录成功"); 
							$.cookie("tel",data.tel,{
								path:"/"
							})
							location.href = "http://localhost:11111/index.html";
						}else{
							alert("手机号或者密码错误");
						}
					}
				})
			//阻止默认事件
				e.preventDefault();
				return false;
			})
		})
	})
})