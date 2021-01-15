$(function() {
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
	//添加商品
	for (var i = 0; i < arrsp.length; i++) {
		$(
			`<a href="details.html"><div class="main_fk_sp">
						<img src="${arrsp[i].oimg}" >
						<span class="main_sp1">${arrsp[i].oh3}</span>
						<span class="main_sp2">${arrsp[i].oh5}</span>
						<span class="main_sp3">${arrsp[i].Price}<span class="main_sp4">${arrsp[i].Price1}</span></span>
					</div></a>`
		).appendTo("#main_fk")
	}
	for (var i = 2; i < arrsp1.length; i++) {
		$(
			`<a href="details.html"><div class="main_fk_sp">
						<img src="${arrsp1[i].oimg}" >
						<span class="main_sp1">${arrsp1[i].oh3}</span>
						<span class="main_sp2">${arrsp1[i].oh5}</span>
						<span class="main_sp3">${arrsp1[i].Price}</span>
					</div></a>`
		).appendTo("#main_fk")
	}
	for (var i = 2; i < arrsp2.length; i++) {
		$(
			`<a href="details.html"><div class="main_fk_sp">
						<img src="${arrsp2[i].oimg}" >
						<span class="main_sp1">${arrsp2[i].oh3}</span>
						<span class="main_sp2">${arrsp2[i].oh5}</span>
						<span class="main_sp3">${arrsp2[i].Price}</span>
					</div></a>`
		).appendTo("#main_fk")
	}
	for (var i = 2; i < arrsp3.length; i++) {
		$(
			`<a href="details.html"><div class="main_fk_sp">
						<img src="${arrsp3[i].oimg}" >
						<span class="main_sp1">${arrsp3[i].oh3}</span>
						<span class="main_sp2">${arrsp3[i].oh5}</span>
						<span class="main_sp3">${arrsp3[i].Price}</span>
					</div></a>`
		).appendTo("#main_fk")
	}
	for (var i = 2; i < arrsp4.length; i++) {
		$(
			`<a href="details.html"><div class="main_fk_sp">
						<img src="${arrsp4[i].oimg}" >
						<span class="main_sp1">${arrsp4[i].oh3}</span>
						<span class="main_sp2">${arrsp4[i].oh5}</span>
						<span class="main_sp3">${arrsp4[i].Price}</span>
					</div></a>`
		).appendTo("#main_fk")
	}
	for (var i = 2; i < arrsp5.length; i++) {
		$(
			`<a href="details.html"><div class="main_fk_sp">
						<img src="${arrsp3[i].oimg}" >
						<span class="main_sp1">${arrsp5[i].oh3}</span>
						<span class="main_sp2">${arrsp5[i].oh5}</span>
						<span class="main_sp3">${arrsp5[i].Price}</span>
					</div></a>`
		).appendTo("#main_fk")
	}
	for (var i = 2; i < arrsp6.length; i++) {
		$(
			`<a href="details.html"><div class="main_fk_sp">
						<img src="${arrsp6[i].oimg}" >
						<span class="main_sp1">${arrsp6[i].oh3}</span>
						<span class="main_sp2">${arrsp6[i].oh5}</span>
						<span class="main_sp3">${arrsp6[i].Price}</span>
					</div></a>`
		).appendTo("#main_fk")
	}
	for (var i = 4; i < arrsp7.length; i++) {
		$(
			`<a href="details.html"><div class="main_fk_sp">
						<img src="${arrsp3[i].oimg}" >
						<span class="main_sp1">${arrsp7[i].oh3}</span>
						<span class="main_sp2">${arrsp7[i].oh5}</span>
						<span class="main_sp3">${arrsp7[i].Price}</span>
					</div></a>`
		).appendTo("#main_fk")
	}
	//点击变色
	$(".main_fk_head").on('click', 'span', function() {
		console.log($(".main_fk_head").find('span'))
		console.log($(this))
		$(".main_fk_head").find('span').css({
			color: "rgb(150,150,150)"
		})
		$(this).css({
			color: "#5079D9"
		})
	})
})
