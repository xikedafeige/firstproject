define(["jquery"],function($){
	/*$().fdj();*/
	$.fn.extend({
		fdj:function(obj){
			
			var sbox = $("."+obj.sbox);
			var fdj = $("."+obj.fdj);
			var biggest = $("."+obj.biggest);
			var bImg = $("."+obj.bImg);

			$(sbox).mousemove(function(e){
				//算出移动这个元素离父级的top值和left值
				var _top = e.pageY - $(sbox).offset().top - $(fdj).height()/2;
				var _left = e.pageX - $(sbox).offset().left - $(fdj).width()/2;
				//console.log(_top,_left);
				
				//判断移动元素的边界
				if(_left < 0) _left = 0;
				if(_top < 0) _top = 0;
				if(_left > $(sbox).width() - $(fdj).width()) _left = $(sbox).width() - $(fdj).width();
				if(_top > $(sbox).height() - $(fdj).height()) _top = $(sbox).height() - $(fdj).height();
				
				$(biggest).css({"display":"block"});
				$(fdj).css({"left":_left,"top":_top,"display":"block"});
				
				//小div移动 大图片也要跟着等比例的移动
				$(bImg).css({"left":-4*_left});
				$(bImg).css({"top":-4*_top});
			})
			$(sbox).mouseleave(function(){
				//鼠标离开的时候隐藏大div和移动的那个元素
				$(fdj).css({"display":"none"});
				$(biggest).css({"display":"none"});
			})
		}
	})
})