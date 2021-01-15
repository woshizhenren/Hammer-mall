$(function() {
	// 服务划过变色
	$('#commode').find('div').hover(function() {
		$(this).css('background', 'rgb(240,240,240)')
	}, function() {
		$(this).css('background', '')
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

	$("#main_ul").click(function(e) {
		var e = e || window.event
		var num = $(e.target).index()
		$("#main_ul").find("li").css({
			background: "white",
			opacity: "0.7",
			color: "black"
		});
		$(e.target).css({
			background: "#5079D9",
			color: "white",
			opacity: "0.7"
		});
		$(".rgt").css('display', "none")
		$(".rgt")[num].style.display = "block"
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
	//新地址$(".xdz")
	$("#shdz").click(function() {
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
			`
				<div class="xia">
						<span>${a}</span>
						<span style="margin-right: 100px;">${c} ${d} ${e} ${f}</span>
						<span style="margin-right: 100px;">${b}</span>
						<span class="shsp" style="cursor: pointer;"><i class="fa fa-close"></i></span>
				</div>`
		).appendTo(".dzxx")
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
	})


	// 删除收货地址
	$(".dzxx").on("click", '.shsp', function(e) {
		var a = $(this).parent().index()
		$(".dzxx").find('div')[a].remove()
	})
	//修改账户资料
	//昵称
	$('#li_rgt1').click(function(){
		$("#mb1").css({display:'block'})
	})
	$('.buts1').click(function(){
		$("#mb1").css({display:'none'})
	})
	$(".buts2").click(function(){
		var str = $("#in7").val()
		$('#nc').text(str)
		$(".mbfk1").css({display:'none'})
	})
	//电话
	$('#li_rgt2').click(function(){
		$("#mb3").css({display:'block'})
	})
	$('.buts3').click(function(){
		$("#mb3").css({display:'none'})
	})
	$(".buts4").click(function(){
		var str = $("#in8").val()
		var str1 = str.substring(0,3)
		var str2 = str.substring(7)
		$('#photonum').text(str1 + '****' + str2)
		$("#mb3").css({display:'none'})
	})
	
})
