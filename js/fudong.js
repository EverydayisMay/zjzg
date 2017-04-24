$(function(){
//微博微信
	$(".wei").mouseover(function(){
		$(this).find("a").addClass("on").siblings().find("a").removeClass("on");
		$(this).find(".wei_cont").show().siblings().find(".wei_cont").hide();
	})
	$(".wei").mouseleave(function(){
		$(".wei a").removeClass("on");
		$(".wei_cont").hide();
	})

//课程安排
$('.course table tr:even').addClass('on');
//分校地址
	$('.thi dt').first().addClass('up');
	$('.thi dt').first().next("dd").show();
	$('.thi dl').on('hover','dt',function(){
		$(this).addClass('up').siblings('dt').removeClass('up');
		$(this).next('dd').stop(false,true).fadeIn(400).siblings('dd').stop(false,true).hide();
		
	})
})
//客服咨询弹窗代码
var msg='1shaspassed!';		
$(document).ready(function(){
	var cs = $('.cs');
	var cs_close = $('.cs_close');
	function oShow(){
		cs.parent('.cs_box').show();
		cs.addClass('csAnimateIn');
	}
	cs_close.click(function(){
		cs.removeClass('csAnimateIn').parent('.cs_box').hide();
	});
	setTimeout(oShow,5000) //延迟时间设置，单位为ms  1s=1000ms 此为5s;
})