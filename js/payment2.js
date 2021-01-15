$(function() {
	// 个人中心划过出现
	$(".head_perCen").hover(function() {
		$(".head_percent").css('display', 'block')
	}, function() {
		$(".head_percent").fadeOut(1000,function(){})
	})
	$(".head_percent").hover(function() {
		$(".head_percent").stop().css('display', 'block')
	}, function() {
		$(".head_percent").fadeOut(1000,function(){})
	})
	//点击
	$("#xsyi").click(function() {
		$(this).css({
			background: 'white'
		})
		$("#xser").css({
			background: 'rgb(230,230,230)'
		})
		$("#xszf2").css({
			display: 'none'
		})
		$("#xszf1").css({
			display: 'block'
		})
		$("#fkq").css({
			opacity: '0.7',
			cursor: 'default'
		})
	})
	$("#xser").click(function() {
		$(oimg1).css({
			display: 'none'
		})
		$(oimg1).css({
			display: 'none'
		})
		$(this).css({
			background: 'white'
		})
		$("#xsyi").css({
			background: 'rgb(230,230,230)'
		})
		$("#xszf2").css({
			display: 'block'
		})
		$("#xszf1").css({
			display: 'none'
		})
		$("#fkq").css({
			opacity: '1',
			cursor: 'pointer'
		})
	})
	$(".zfb").click(function() {
		$(oimg2).css({
			display: 'none'
		})
		$(oimg1).css({
			display: 'block'
		})
		$(".wx").css({
			border: '1px solid rgb(200,200,200)'
		})
		$(this).css({
			border: '1px solid #5079D9'
		})

	})
	$(".wx").click(function() {
		$(oimg2).css({
			display: 'block'
		})
		$(oimg1).css({
			display: 'none'
		})
		$(".zfb").css({
			border: '1px solid rgb(200,200,200)'
		})
		$(this).css({
			border: '1px solid #5079D9'
		})
	})

})
