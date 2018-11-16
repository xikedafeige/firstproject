require(["config"],function(){
	require(["jquery"],function($){
		new Promise(function(resolve,reject){
			//实现header的样式不同，在url后面加上选择器
			$("header").load("/html/component/header.html",function(){
				resolve();
				header.state();
			});
		}).then(function(){
			//验证码功能
			//$.idcode.setCode();
			//var IsBy = $.idcode.validateCode();
			//$("#btn2").click(function(){
			    //var IsBy = $.idcode.validateCode();
			    /*if($("#Txtidcode").val() === null){
					alert("请输入正确的验证码");
				}*/
			//});
			//console.log($("form"));
			$(".button").click(function(e){
				//构建对象存储value值
				//console.log($("form"));
				e = e || event;
				var data={
					tel: $("#telephone").val(),
					//console.log(tel);
					psd: $("#psd").val()
				}
				//console.log(data);
				//正则判断
				var reg0 = /^1\d{10}$/;
					if(!reg0.test(data.tel)){
					alert("请输入正确的手机号码");
					return false;		
				};
				var reg1 = /^.{6,}$/;
					if(!reg1.test(data.psd)){
					alert("请输入正确的密码");
					return false;
				};
				
				//ajax请求
				$.ajax({
					url:"http://localhost/firstevent/api/register.php",
					method:"POST",
					dataType:"json",
					data:data,
					success:function(res){
						console.log(res);
						if(res.code === 1){
							alert("注册成功"); 
							location.href = "http://localhost:11111/html/login.html";
						}else{
							alert("注册失败");
						}
					}
				})
			//阻止默认事件
				e.preventDefault();
				return false;
			})
		}).then(function(){
		})
	})
})
