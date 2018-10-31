window.onload = function(){
	var jibrower = document.getElementById("jibrower");
	var DEFAULT_VERSION = 8.0;//声明一个数字作为对应ie的版本号  
	var ua = navigator.userAgent.toLowerCase();//检测当前为什么浏览器  
	var isIE = ua.indexOf("msie")>-1;  
	var safariVersion;//定义一个空对象用来  
	if(isIE){  
	safariVersion =  ua.match(/msie ([\d.]+)/)[1];  
	}  
	if(safariVersion <= DEFAULT_VERSION ){  
	  alert('系统检测到您正在使用ie8以下内核的浏览器，不能实现完美体验，请更换或升级浏览器访问！');
	  jibrower.style.display="block";
	};
}