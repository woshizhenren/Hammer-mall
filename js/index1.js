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

	//会员专区
	$('.rotation_img').find('div').click(function() {
		location.assign('./vip.html')
	})


	//服务划过变色
	$('#commode').find('div').hover(function() {
		$(this).css('background', 'rgb(240,240,240)')
	}, function() {
		$(this).css('background', '')
	})

	// console.log($(".rotation_img div").length)
	/* 轮播 */
	var showNum = 1;
	var timer;
	timer = setInterval(showLb, 3000)

	function showLb() {
		$(".rotation_img div").stop().animate({
			opacity: 0
		}, 1000)
		$(".rotation_img div").eq(showNum).stop().animate({
			opacity: 1
		}, 1000);
		$(".rotation_ul1 li").css('background', '#666666')
		$(".rotation_ul1 li").eq(showNum).css('background', 'white');
		showNum++;
		if (showNum == $(".rotation_img div").length) {
			showNum = 0;
		}
	}
	$(".rotation_ul1").on("click", 'li', function() {
		clearInterval(timer)
		$(".rotation_ul1 li").css('background', '#666666')
		$(this).css('background', 'white')
		$(".rotation_img div").stop().animate({
			opacity: 0
		}, 1000)
		$(".rotation_img div").eq($(this).index()).stop().animate({
			opacity: 1
		}, 1000);
		showNum = $(this).index() + 1
		if (showNum == $(".rotation_img div").length) {
			showNum = 0
		}
		timer = setInterval(showLb, 3000)
	})
	// 给floor2加入div
	for (var i = 0; i < arrsp.length; i++) {
		$(
			`
		<a href="details.html"><div>
			<img src="${arrsp[i].oimg}" ><br>
			<h3>${arrsp[i].oh3}</h3><br>
			<h5>${arrsp[i].oh5}</h5><br>
			<span>${arrsp[i].Price}</span>
		</div></a>
		`
		).appendTo($('.fk'));
	}

	/* floor2 点击滑动 */
	var oBut1 = $("#but1").css('opacity')
	if (oBut1 == 0.4) {
		$("#but2").css('cursor', 'pointer')
		$("#but2").click(function() {
			$(".fk").stop().animate({
				left: '-1220px'
			}, 'linear')
			$("#but2").css({
				opacity: 0.4,
				cursor: 'default'
			})
			$("#but1").css({
				opacity: 1,
				cursor: 'pointer'
			})

			$("#but1").click(function() {
				$(".fk").stop().animate({
					left: '0'
				}, 'linear')
				$("#but1").css({
					opacity: 0.4,
					cursor: 'default'
				})
				$("#but2").css({
					opacity: 1,
					cursor: 'pointer'
				})

			})
		})
	}

	// main中的内容
	for (var i = 0; i < arrs.length; i++) {
		var a = arrs[i]
		$(
			`
			<div class="main_head">
				<h4>${(a[0].head)}</h4>
			</div>
			<div class="main_ctr">
				<div class="divyi">
					<a href="">
					<img src="${(a[1].oimg)}" >
					</a>
				</div>
				<div>
					<a href="details.html">
					<img src="${(a[2].oimg)}" ><br>
					<h3>${(a[2].oh3)}</h3><br>
					<h5>${(a[2].oh5)}</h5><br>
					<span>${(a[2].Price)}</span>
					</a>
				</div>
				<div>
					<a href="details.html">
					<img src="${(a[3].oimg)}" ><br>
					<h3>${(a[3].oh3)}</h3><br>
					<h5>${(a[3].oh5)}</h5><br>
					<span>${(a[3].Price)}</span>
					</a>
				</div>
			</div>
			<div class="main_btn">
				<div style="border-radius: 0 0 0 10px;">
					<a href="details.html">
					<img src="${(a[4].oimg)}" ><br>
					<h3>${(a[4].oh3)}</h3><br>
					<h5>${(a[4].oh5)}</h5><br>
					<span>${(a[4].Price)}</span>
					</a>
				</div>
				<div>
					<a href="details.html">
					<img src="${(a[5].oimg)}" ><br>
					<h3>${(a[5].oh3)}</h3><br>
					<h5>${(a[5].oh5)}</h5><br>
					<span>${(a[5].Price)}</span>
					</a>
				</div>
				<div>
					<a href="details.html">
					<img src="${(a[6].oimg)}" ><br>
					<h3>${(a[6].oh3)}</h3><br>
					<h5>${(a[6].oh5)}</h5><br>
					<span>${(a[6].Price)}</span>
					</a>
				</div>
				<div style="border-radius: 0 0 10px 0;">
					<a href="details.html">
					<img src="${(a[7].oimg)}" ><br>
					<h3>${(a[7].oh3)}</h3><br>
					<h5>${(a[7].oh5)}</h5><br>
					<span>${(a[7].Price)}</span>
					</a>
				</div>
			</div>
			`
		).appendTo($(".main_floor" + (i + 3)))
	}
	// 给floor14加入div
	for (var i = 0; i < arrlt.length; i++) {
		$(
			`
		<div>
			<a href="#">
			<img src="${arrlt[i].oimg}" >
			<h3>${arrlt[i].oh3}</h3>
			<p>${arrlt[i].op}</p>
			<span> 阅读全文 > </span>
			</a>
		</div>
		`
		).appendTo($('#main_btn'));
	}
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

})
