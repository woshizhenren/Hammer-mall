$(function() {
	// 滚动一定高度 导航栏变为固定定位
	$(window).scroll(function() {
		if ($(window).scrollTop() > 45) {
			$('.xzgm').css({
				position: 'fixed',
				top: 0
			})
		} else {
			$('.xzgm').css({
				position: 'relative',
				top: '0',
				zIndex: 1
			})
		}
	})
	//点击变色
	$(".xzgms").on('click', 'span', function() {
		$(".xzgms").find('span').css({
			color: '#666',
			fontWeight: '500'
		})
		$(this).css({
			color: 'black',
			fontWeight: '600'
		})
	})
	//点击换图片
	$(".lv").click(function() {
		$("#oimg1").css({
			opacity: '1'
		})
		$("#oimg2").css({
			opacity: '0'
		})
	})
	$(".hei").click(function() {
		$("#oimg1").css({
			opacity: '0'
		})
		$("#oimg2").css({
			opacity: '1'
		})
	})
	// smsp 123
	$("#smsp1").click(function() {
		$(".main").css({
			display: 'block'
		})
		$(".main2").css({
			display: 'none'
		})
		$(".main3").css({
			display: 'none'
		})
	})
	$("#smsp2").click(function() {
		$(".main").css({
			display: 'none'
		})
		$(".main2").css({
			display: 'block'
		})
		$(".main3").css({
			display: 'none'
		})
	})
	$("#smsp3").click(function() {
		$(".main").css({
			display: 'none'
		})
		$(".main2").css({
			display: 'none'
		})
		$(".main3").css({
			display: 'block'
		})
	})
	// 个人中心划过出现
	$(".head_perCen").hover(function() {
		$(".head_percent").stop().css('display', 'block')
	}, function() {
		$(".head_percent").fadeOut(1000,function(){})
	})
	$(".head_percent").hover(function() {
		$(".head_percent").stop().css('display', 'block')
	}, function() {
		$(".head_percent").fadeOut(1000,function(){})
	})
})
