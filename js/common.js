$(function(){
	var timer7= setTimeout(function() {
        $(".loading").fadeOut();
    }, 2000)
	//这是联想的列表切换程序
	var nub = 0,
		$imgcount = $(".c2bnav li").children().length,
		$$li = $(".c2bnav li");
	$$li.hide();
	$(".c2bnav li").eq(0).show();
	//小点程序开始运行
	$(".c2trnav>li").click(function(){
		var me=$(this),
			thisindex = me.index();
		$(".c2bnav li").fadeOut();
		$(".c2bnav li").eq(nub).fadeIn();
		nub=thisindex;
		$(".c2trnav li").eq(nub).addClass("active1").siblings().removeClass("active1");	
	})
	//第一轮播的左右键
	$(".banner-box").hover(function(){
		$(".banner-button a").fadeIn();
	},function(){
		$(".banner-button a").fadeOut();
	});
	//以上为联想列表切换程序
	//这是第世界因你部分
	var $banner = $(".center3bb");
	var $li = $(".center3bb").children();
	var $imgcount = $li.length;
	var iwidth = $li.outerWidth(true);
	$banner.append($li.clone());//让banner-box追加它所有子集也就是li并克隆
	$banner.prepend($li.clone());
	var ric = $banner.children().length;//之后重新获取一下banner-box的个数
	$banner.css({width:ric*iwidth,left:-iwidth});
	function pp(){//声明一个变量为pp
		$banner.animate({left:"-="+iwidth},'easeInOutCubic',function(){//给banner-box一个动画的左边距等于负的li的宽度加1
			nub++;//下标的+1
			if(nub===$imgcount){//来一个条件判断条件为声明的下标绝对等于s也就是ul下的li的所有自己的个数
				$banner.css({left:-iwidth})//添加ulcss样式左边距为负的li的宽度
				nub=0;//之后当回来的时候下标为0对应的图片是第一个
			}
			// $(".arrow>li").eq(m).addClass("active").siblings().removeClass("active");//每个小点也就是ul下的li的下标为m的添加active的类名样式同时他的兄弟级移除类名active的类名样式
		});
		
	};
	function qq(){
		$banner.animate({left:"+="+iwidth},'easeInOutCubic',function(){//给banner-box一个动画的左边距等于负的li的宽度加1
			nub--;//下标的+1
			if(nub===-1){//来一个条件判断条件为声明的下标绝对等于s也就是ul下的li的所有自己的个数
				$banner.css({left:-iwidth*$imgcount})//添加ulcss样式左边距为负的li的宽度
				nub=$imgcount-1;//之后当回来的时候下标为0对应的图片是第一个
			}
			// $(".arrow>li").eq(m).addClass("active").siblings().removeClass("active");//每个小点也就是ul下的li的下标为m的添加active的类名样式同时他的兄弟级移除类名active的类名样式
		});
	}
	//声明一个变量为timer的定时器也就是无限循环pp这个函数并延迟时间二秒
	var timer1 = setInterval(pp,2000);
	$(".right").click(function(){
		clearInterval(timer1);
		pp();
	})
	$(".left").click(function(){
		clearInterval(timer1);
		qq();
	})
	// $(".left").click(function(){
	// 	clearInterval(timer);
	// 	qq()
	// })
	//以上为世界因你部分
	var $dscrolltop = $(window).scrollTop();
	$(window).scroll(function(){
		if($(window).scrollTop()>=100){
			$(".text").css({"position":"fixed"})
			$(".text").css({"background":"#fff"})
			$(".tl-nav>li>a").css({"color":"#000"})
			$(".text").css({"transform":"translateY(-100%)"})
			$(".shopcartpic").css({"background-position":"-110px -76px"})
		}else if($(window).scrollTop()<=50){
			$(".text").css({"position":"absolute"})
			$(".text").css({"background":"rgba(0,0,0,.005)"})
			$(".tl-nav>li>a").css({"color":"#fff"})
			$(".text").css({"transform":"translateY(-5%)"})
			$(".shopcartpic").css({"background-position":"-71px -76px"})
		}
		if($(window).scrollTop()>400){
			$(".text").css({"transform":"translateY(0%)"})
			$(".shopcartpic").css({"background-position":"-110px -76px"})
		}
	})
	//以上是监听滚动的导航部分
	var num = 0,
		imgcount = $(".banner").children().length,
		$li = $(".banner li");
	$li.hide();
	$(".banner li").eq(num).show();
	function left(){
		$(".banner li").eq(num).stop(true).fadeOut();
		num++;
		if (num==imgcount) {
			num=0;
		}
		$(".banner li").eq(num).stop(true).fadeIn();
	}
	function right(){
		$(".banner li").eq(num).stop(true).fadeOut();
		num--;
		if (num==-1) {
			num=imgcount-1;
		}
		$(".banner li").eq(num).stop(true).fadeIn();
	}
	$(".bb-left a").click(function(){
		left();
		clearInterval(timer);
	})
	$(".bb-right a").click(function(){
		right();
		clearInterval(timer);
	})
	var timer = setInterval(left,2000);
	$(".banner li").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(left,2000);
	})
	var bssilder = $(".bserversilder");
	var bssilderli = bssilder.children();
	var bss = 0;
	var bslength = $(".bserversilder").children().length;
	function bssildertimer(){
		bssilderli.eq(num).animate({width:700});
		bssilderli.css({opacity:".6"});
		bss++;
		if(bssilderli.css({opacity:".6"})){
			bssilderli.eq(num).css({opacity:"1"});
		}
		bssilderli.css({width:"100"})
	}
	var timer4 = setInterval(bssildertimer,1000);
	$(".center4bottom").hover(function(){
		clearTimeout(timer4);
	},function(){
		timer4 = setInterval(bssildertimer,2000);
	})
	//这是点击文字是跳转到相应的
	function webhref(){
		var sm = 0;
		$(".tl-nav>li").click(function(){
			var tnid = parseInt($(this)[0].id);
			var c5height = $(".center5").height();
			var tlnavindex = $(this).index();
			$(this).addClass("tlactive").siblings().removeClass("tlactive");
			switch (tnid){
	            case 0: x = c5height*0; break;
	            case 1: x = c5height*0.7; break;
	            case 2: x = c5height*1.3; break;
	            case 3: x = c5height*2.7; break;
	            case 4: x = c5height*3.5; break;
	            case 5: x = c5height*4.3; break;
	            case 6: x = c5height*5.3; break;
	            default: x = c5height*0;
		    }
		    $("body,html").animate({scrollTop:x});
		})
	}
	webhref();	
});