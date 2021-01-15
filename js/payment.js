$(function() {
	//提交订单栏
	$(window).scroll(function() {
		if ($(window).scrollTop() > 805) {
			$(".footprev").css({
				position: "relative"
			})
		} else {
			$(".footprev").css({
				position: "fixed"
			})
		}
	})
	//新地址$(".xdz")
	$(".xdz").click(function() {
		$(".mbfk").css({
			display: 'block'
		})
	})
	$("#tk_but1").click(function() {
		$(".mbfk").css({
			display: 'none'
		})
	})
	$("#tk_but2").click(function() {

		var a = $("#in1").val()
		var b = $("#in2").val()
		var c = $("#in3").val()
		var d = $("#in4").val()
		var e = $("#in5").val()
		var f = $("#in6").val()
		$(
			`<div class="tjd">
						<span class="tjd_sp1">${a}</span>
						<span>${b}</span>
						<span>${c}<span>${d}</span><span>${e}</span></span>
						<span>${f}</span>
						<button type="button" id = "buttn1">删除</button>
					</div>`
		).prependTo("#but")
		$(".mbfk").css({
			display: 'none'
		})
		$(".tjd").mouseover(function() {
			$("#buttn1").css({
				display: "block"
			})
		})
		$(".tjd").mouseout(function() {
			$("#buttn1").css({
				display: "none"
			})
		})
		$("#buttn1").click(function() {
			$(this).parent().remove()
		})
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
