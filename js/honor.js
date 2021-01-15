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
	//加图
	for (var i = 0; i < arrhon.length; i++) {
		$(
			`<li>
					<img src="${arrhon[i].oimg}" id = 'pic1'>
					<span id="switch_sp1">${arrhon[i].osp1}</span>
					<span id="switch_sp2">${arrhon[i].osp2}</span>
					<img src="img/timed.png" id="dian">
					<span id="switch_sp3">${arrhon[i].osp3}</span>
					<a href="details.html"><span id="switch_sp4">现在购买</span></a>
				</li>`
		).appendTo('#switch_ul')
	}
	//点击滑动
	$("#switch_ul").on('click', 'li', function() {
		var index = $(this).index()
		var num = index * -416
		$("#switch_ul").animate({
			left: num + 'px'
		}, 300, 'linear')
	})
})
