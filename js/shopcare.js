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
	//商品推荐
	for (var i = 0; i < arrsp.length; i++) {
		$(
			`<div><a href="#">
							<img src="${arrsp[i].oimg}">
							<span class="sp1">${arrsp[i].oh3}</span>
							<span class="sp2">${arrsp[i].oh5}</span>
							<span class="sp3">${arrsp[i].Price}<span class="sp4">${arrsp[i].Price1}</span></span>
							</a>
							<span class="sp5">
								<button type="button" class="but1">查看详情</button>
								<button type="button" class="but2">加入购物车</button>
							</span>
						</div>`
		).appendTo(".tjsp")
	}
	//划过加购物车按钮
	$(".tjsp").find('div').hover(function() {
		$(this).find('.sp3').css({
			display: "none"
		})
		$(this).find('.sp5').css({
			display: "block"
		})
	}, function() {
		$(this).find('.sp3').css({
			display: "block"
		})
		$(this).find('.sp5').css({
			display: "none"
		})
	})

	qb()
	//选择
	var obj = {};
	var num = 0;
	var ld = false;
	var str = Number($('.zjg').text().substring(0));
	var q = 0

	function qb() {
		$(".xz").click(function() {
			console.log($(".xz").length)
			var a = $(this).parent().parent().index()
			var num1 = 0;
			num++;
			if (!obj[$(this).parent().index()]) {
				obj[$(this).parent().index()] = 1;
			} else {
				obj[$(this).parent().index()]++;
			}
			if (obj[$(this).parent().index()] % 2 != 0) {
				$(this).css({
					color: ' #5079D9'
				})
				$('.zjg').text(Number($(this).parent().find('.xiaoji').text().substring(1)) + str)
				ld = true
				str = Number($('.zjg').text().substring(0));
			} else {
				$(this).css({
					color: ' rgb(200,200,200)'
				})
				ld = false
				$('.zjg').text(str - Number($(this).parent().find('.xiaoji').text().substring(1)))
				str = Number($('.zjg').text().substring(0));
			}
			var b = Object.values(obj)
			for (var i = 0; i < b.length; i++) {
				num1 += b[i];
			}
			//全选择后 全选变色
			if (num >= $(".xz").length && ld && num1 % $(".xz").length == 0) {
				$('.xzq').css({
					color: ' #5079D9'
				})
				q = 1
			} else {
				$('.xzq').css({
					color: 'rgb(200,200,200)'
				})
				q = 0
			}
			jj()
			str = Number($('.zjg').text().substring(0))
		})
		//全选
		$('.xzq').click(function() {
			a = $(".shangp").find('.xiaoji').text().split('￥')
			var b = 0;
			a.forEach(function(item, index, arr) {
				b = b + Number(item)
			})
			if (q == 0) {
				$(this).css({
					color: ' #5079D9'
				})
				$(this).parent().prev().find('.xz').css({
					color: ' #5079D9'
				})
				//总价格
				$(".zjg").text(b)
				q = 1
				for (var i = 0; i <= $(this).parent().prev().find('.xz').length; i++) {
					obj[i] = 1;
				}
			} else {
				$(this).parent().prev().find('.xz').css({
					color: ' rgb(200,200,200)'
				})
				$(this).css({
					color: ' rgb(200,200,200)'
				})
				$(".zjg").text('0')
				q = 0
				for (var i = 0; i <= $(this).parent().prev().find('.xz').length; i++) {
					obj[i] = 0;
				}
			}
			jj()
			str = Number($('.zjg').text().substring(0))
		})

		//加减
		$('.jian').click(function() {
			var n = $(this).next().text();
			str = Number($('.zjg').text().substring(0));
			var a = $(this).parent().parent().index()
			if ($(this).next().text() > 1) {
				$(this).css({
					cursor: 'pointer'
				})
				$(this).next().text($(this).next().text() - 1)
				$(this).parent().next().text('￥' + $(this).next().text() * $(this).parent().prev().text().substring(1))
			} else {
				$(this).css({
					cursor: 'default'
				})
			}

			if (obj[a] % 2 == 1 && n > 1) {
				$('.zjg').text(str - $(this).parent().prev().text().substring(1))
			}
			str = Number($('.zjg').text().substring(0))
		})
		$('.jia').click(function() {
			str = Number($('.zjg').text().substring(0));
			var a = Number($(this).prev().text())
			var b = $(this).parent().parent().index()
			$(this).prev().text(a + 1)
			$(this).parent().next().text('￥' + $(this).prev().text() * $(this).parent().prev().text().substring(1))

			if (obj[b] % 2 == 1 || q == 1) {
				$('.zjg').text(Number(str) + Number($(this).parent().prev().text().substring(1)))
			}
			str = Number($('.zjg').text().substring(0));
		})

		// 删除
		$('.sc').click(function() {
			$(".mbfk").css({
				display: 'block'
			})
			var a = $(this)
			$("#tk_but1").click(function() {
				$(".mbfk").css({
					display: 'none'
				})
			})
			$("#tk_but2").click(function() {
				$(".mbfk").css({
					display: 'none'
				})
				a.parent().remove()
			})
		})
	}



	//加入购物车
	$(".but2").click(function() {
		$('.xz').off()
		$('.xzq').off()
		$(".jia").off()
		$('.jian').off()
		// $(".sc")..off()
		var a = $(this).parent().parent().index()
		$(
			`<div class="shangp">
							<div class="xz"><i class="fa fa-check-square"></i></div>
							<img src="${arrsp[a].oimg}" >
							<div class="spm">
								<span class="spm_sp1">${arrsp[a].oh3}</span>
								<span class="spm_sp2">${arrsp[a].oh5}</span>
							</div>
							<div class="danjia">${arrsp[a].Price}</div>
							<div class="shuliang">
								<div class="jian"><button type="button">-</button></div>
								<div class="num">1</div>
								<div class="jia"><button type="button">+</button></div>
							</div>
							<div class="xiaoji">${arrsp[a].Price}</div>
							<div class="sc"><i class="fa fa-times-circle"></i></div>
						</div>`
		).appendTo(".shop_bot")
		qb()
	})

	//选中了几件的方法
	function jj() {
		var num2 = Object.values(obj)
		var num3 = 0;
		for (var i = 0; i < num2.length; i++) {
			if (num2[i] % 2 != 0) {
				num3++;
			}
		}
		if (q == 1) {
			$(".xzjj").text($(".xz").length)
		} else {
			$(".xzjj").text(num3)
		}
	}
	//总价

})
