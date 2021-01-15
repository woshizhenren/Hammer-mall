$(function() {
	var arrcol = ['<img src="./img/详情1.webp" >', '<img src="./img/详情2.webp" >', '<img src="./img/详情3.webp" >']
	var arrbig = ["./img/详情1.webp", "./img/详情2.webp", "./img/详情3.webp"]
	var arrjg = ['￥4499.00', '￥4799.00', '￥5299.00', '￥6499.00']
	var arrfq = [4499, 4799, 5299, 6499]
	// 颜色选择
	$(".rgt_3").find("div").click(function(e) {
		var e = e || window.event;
		var a = $(this).index() - 1
		$(".rgt_3").find("div").css({
			border: "",
			fontWeight: "500"
		})
		$(e.target).css({
			border: "1px solid #5079D9",
			fontWeight: "600"
		})
		$("#main_div_lef").html(arrcol[a])
		$(`<div class="samllbox"></div>`).appendTo('#main_div_lef')
		$('#oImg').remove()
		$(`<img src="${arrbig[a]}" id="oImg">`).appendTo(".bigbox")
		$('#footer_sp3').text($(this).text())
	})
	// 容量选择
	$("#rgt_ul1").find("li").click(function(e) {
		var e = e || window.event;
		var a = $(this).index()
		$("#rgt_ul1").find("li").css({
			border: "",
			fontWeight: "500"
		})
		$(e.target).css({
			border: "1px solid #5079D9",
			fontWeight: "600"
		})
		$('.footer_sp2').text(arrjg[a])
		$('.rgt_d1').text(arrjg[a])
		$('#footer_sp4').text($(this).text())
		$('#spanx1').text(' 每月低至￥' + parseInt(arrfq[a] / 6) + '.00元')
		$('#spanx2').text(' 每月低至￥' + parseInt(arrfq[a] / 3) + '.00元')
	})
	// 保修服务
	var num = 0;
	$("#rgt_ul2").find("li").click(function(e) {
		var e = e || window.event;
		if (num == 0) {
			$("#rgt_ul1").find("li").css({
				border: "",
				fontWeight: "500"
			})
			$(this).css({
				border: "1px solid #5079D9",
				fontWeight: "600"
			})
			$(this).find('h1').css({
				fontWeight: "600"
			})
			num = 1;
		} else {
			$(this).css({
				border: "",
				fontWeight: "500"
			})
			$(this).find('h1').css({
				fontWeight: "400"
			})
			num = 0;
		}

	})
	//商品推荐
	for (var i = 0; i < arrsp.length; i++) {
		$(
			`<a href="#"><div>
							<img src="${arrsp[i].oimg}">
							<span class="sp1">${arrsp[i].oh3}</span>
							<span class="sp2">${arrsp[i].oh5}</span>
							<span class="sp3">${arrsp[i].Price}<span class="sp4">${arrsp[i].Price1}</span></span>
							<span class="sp5">
								<button type="button" class="but1">查看详情</button>
								<button type="button" class="but2">加入购物车</button>
							</span>
						</div></a>`
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

	// 底下那个滑动距离变为固定定位
	$(window).scroll(function() {
		if ($(window).scrollTop() > 15202) {
			$('.footer').css({
				position: 'relative',
				button: '341px'
			})
		} else {
			$('.footer').css({
				position: 'fixed',
				button: '0'
			})
		}

	})
	// 上面那个滑动距离变为固定定位
	$(window).scroll(function() {
		if ($(window).scrollTop() > 80) {
			$('.toper').css({
				display: 'block'
			})
		} else {
			$('.toper').css({
				display: 'none'
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
	//返回顶部
	$("#fhdb").click(function() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	})
	
	//放大镜
		$("#main_div_lef").hover(function(){
			$('.bigbox').css({display:'block'})
			$('.samllbox').css({display:'block'})
		},function(){
			$('.bigbox').css({display:'none'})
			$('.samllbox').css({display:'none'})
		})
		$("#main_div_lef").mousemove(function(e){
			var oTop = e.clientY - 200
			var oLeft = e.clientX - 250
			$('.samllbox').css({top:oTop + 'px',left:oLeft + 'px'})
			$('#oImg').css({top:-2*oTop + 'px',left:-oLeft * 2 + 'px'})
			if(oLeft < 0){
				$('.samllbox').css({left: 0})
			}
			if(oLeft > 400){
				$('.samllbox').css({left: '400px'})
			}
			if(oTop < 0){
				$('.samllbox').css({top:0})
			}
			if(oTop > 300){
				$('.samllbox').css({top: '300px'})
			}
		})
	
})
