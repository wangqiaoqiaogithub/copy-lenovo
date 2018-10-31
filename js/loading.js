;(function(){
	var lazyload = {
		load:function(){ 
			$(window).on('scroll',function () {//当页面滚动的时候绑定事件
		        $('.container img').each(function () {//遍历所有的img标签
		            if (checkShow($(this)) && !isLoaded($(this)) ){
		                // 需要写一个checkShow函数来判断当前img是否已经出现在了视野中
		                //还需要写一个isLoaded函数判断当前img是否已经被加载过了
		                loadImg($(this));//符合上述条件之后，再写一个加载函数加载当前img
		            }
		        })
	    	})
		    function checkShow($img) { // 传入一个img的jq对象
		        var scrollTop = $(window).scrollTop();  //即页面向上滚动的距离
		        var windowHeight = $(window).height(); // 浏览器自身的高度
		        var offsetTop = $img.offset().top;  //目标标签img相对于document顶部的位置
		        var sand0 =  offsetTop-scrollTop*0.9;
		        if (sand0 < windowHeight && sand0 > 0) { //在2个临界状态之间的就为出现在视野中的
		            return true;
		        }
		        return false;
		    }
		    function isLoaded ($img) {
		        return $img.attr('data-src') === $img.attr('src'); //如果data-src和src相等那么就是已经加载过了
		    }
		    function loadImg ($img) {
		        $img.attr('src',$img.attr('data-src')); // 加载就是把自定义属性中存放的真实的src地址赋给src属性
	    	}
		}
	}
	lazyload.load();
})(jQuery,window)