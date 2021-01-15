window.onload = function() {
	/* 同意按钮 */
	var num = 0;
	hs('#spb').onclick = function() {
		if (num == 0) {
			this.style.backgroundPosition = 'top';
			num = 1;
		} else {
			this.style.backgroundPosition = 'bottom';
			num = 0;
		}
	}
	/* 选择国家 */
	var num1 = 0;
	window.onclick = function(e) {
		var e = e || window.event;
		if (e.target.id == 'spz' && num1 == 0) {
			hs("#xlgz").style.display = 'block';
			num1 = 1;
		} else {
			hs("#xlgz").style.display = 'none';
			num1 = 0;
		}
	}
	$("#ul1").click(function(e) {
		$("#ul1").find('li').css({
			color: "rgb(150,150,150)",
			background: 'white',
			fontWeight: ""
		})
		var e = e || window.event;
		var str = e.target.innerText
		hs("#spz").innerText = str
		e.target.style.color = 'rgb(100,100,100)'
		e.target.style.fontWeight = '600'
		e.target.style.background = 'rgb(250,250,250)'
	})

	for (var i = 0; i < arrgj.length; i++) {
		$(`
					<li>${arrgj[i].name}</li>
					`).appendTo($("#ul1"))
	}


	/* 获取焦点边框变色 */
	for (var i = 0; i < hs("input").length; i++) {

		hs("input")[i].onfocus = function() {
			this.parentNode.style.borderColor = "#5079D9"
		}
		hs("input")[i].onblur = function() {
			this.parentNode.style.borderColor = ""
		}
	}
	/* 确认手机号 */
	hs("#in1").onblur = function() {
		this.parentNode.style.borderColor = ""
		var nr = hs("#in1").value;
		if (nr == '') {
			this.parentNode.style.borderColor = ""
			hs("#numbe1").style.display = 'none'
			hs('#yzm').style.cursor = 'default'
		} else if (!/^1\d{10}/.test(nr)) {
			this.parentNode.style.borderColor = "brown"
			hs("#numbe1").style.display = 'block'
			hs('#yzm').style.cursor = 'default'
			hs('#yzm').style.background = ''
		} else if (nr.length > 11) {
			this.parentNode.style.borderColor = "brown"
			hs("#numbe1").style.display = 'block'
			hs('#yzm').style.cursor = 'default'
			hs('#yzm').style.background = ''
		} else {
			hs("#numbe1").style.display = 'none'
			hs('#yzm').style.cursor = 'pointer'
			hs('#yzm').style.background = 'rgb(230,230,230)'
		}
	}
	/* 密码 */
	hs("#in3").onblur = function() {
		this.parentNode.style.borderColor = ""
		var nr = hs("#in3").value;
		if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(nr)) {
			hs("#numbe2").style.display = 'none'
		} else if (nr == '') {
			this.parentNode.style.borderColor = ""
			hs("#numbe2").style.display = 'none'
		} else {
			hs("#numbe2").style.display = 'block'
			this.parentNode.style.borderColor = "brown"
		}
	}
	hs("#in4").onblur = function() {
		this.parentNode.style.borderColor = ""
		var nr = hs("#in3").value;
		var nr1 = hs("#in4").value;
		if (nr != nr1) {
			hs("#numbe3").style.display = 'block'
			this.parentNode.style.borderColor = "brown"
		} else {
			hs("#numbe3").style.display = 'none'
		}
	}
	// 登录按钮
	// $('#dl')

}
