$(function() {
	// 滚动一定高度 导航栏变为固定定位
	$(window).scroll(function() {
		if ($(window).scrollTop() > 45) {
			$('.ave').css({
				position: 'fixed',
				top: 0
			})
		} else {
			$('.ave').css({
				position: 'relative',
				top: '0',
				zIndex: 1
			})
		}

	})
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
	// 二级菜单
	$("#id1").hover(function() {
		$("#fk").stop().slideDown(400, function() {})
	}, function() {
		$("#fk").stop().slideUp(400, function() {})
	})

	$("#fk").hover(function() {
		$("#fk").stop().slideDown(400, function() {})
	}, function() {
		$("#fk").stop().slideUp(400, function() {})
	})
	$("#id1").find('li').mouseover(function() {
		var a = $("#fk").find('.id1').eq($(this).index())
		$("#fk").find('.id1').css({
			display: 'none'
		})
		a.css({
			display: "block"
		})
	})
	//服务划过变色
	$('#commode').find('div').hover(function() {
		$(this).css('background', 'rgb(240,240,240)')
	}, function() {
		$(this).css('background', '')
	})
	//加商品
	for (var i = 0; i < arrvip.length; i++) {
		$(
			`<div class="shpin"><a href="details.html">
						<img src="${arrvip[i].oimg}" >
						<span class="shpin_sp1">${arrvip[i].oh3}</span>
						<span class="shpin_sp2">${arrvip[i].oh5}</span>
						<span class="shpin_sp3">20日到手价: <span class="shpin_sp4">${arrvip[i].Price}</span> <span class="shpin_sp5">${arrvip[i].Price1}</span></span>
						<button type="button">现在购买</button>
						</a></div>`
		).appendTo('#main6_fk')
	}
	//加商品
	for (var i = 0; i < arrwy.length; i++) {
		$(
			`<div class="shpin"><a href="">
						<img src="${arrwy[i].oimg}" >
						<span class="shpin_sp1">${arrwy[i].oh3}</span>
						<span class="shpin_sp2">${arrwy[i].oh5}</span>
						<span class="shpin_sp3">20日到手价: <span class="shpin_sp4">${arrwy[i].Price}</span> <span class="shpin_sp5">${arrwy[i].Price1}</span></span>
						<button type="button">现在购买</button>
						</a></div>`
		).appendTo('#main7_fk')
	}
})
