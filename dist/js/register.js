"use strict";require(["config"],function(){require(["jquery"],function(n){new Promise(function(t,e){n("header").load("/html/component/header.html",function(){t(),header.state()})}).then(function(){n(".button").click(function(t){t=t||event;var e={tel:n("#telephone").val(),psd:n("#psd").val()};if(!/^1\d{10}$/.test(e.tel))return alert("请输入正确的手机号码"),!1;return/^.{6,}$/.test(e.psd)?(n.ajax({url:"http://localhost/firstevent/api/register.php",method:"POST",dataType:"json",data:e,success:function(t){console.log(t),1===t.code?(alert("注册成功"),location.href="http://localhost:11111/html/login.html"):alert("注册失败")}}),t.preventDefault()):alert("请输入正确的密码"),!1})}).then(function(){})})});