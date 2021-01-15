window.onload = function() {
	/* 自动登录按钮 */
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
	hs('#spb1').onclick = function() {
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
	$("#ul2").click(function(e) {
		var e = e || window.event;
		var str = e.target.innerText
		hs(".spz")[0].innerText = str
	})
	for (var i = 0; i < arrgj.length; i++) {
		$(`
					<li>${arrgj[i].name}</li>
					`).appendTo($("#ul2"))
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
			hs("#numbe").style.display = 'none'
		} else if (!/^1\d{10}/.test(nr)) {
			this.parentNode.style.borderColor = "brown"
			hs("#numbe").style.display = 'block'
		} else if (nr.length > 11) {
			this.parentNode.style.borderColor = "brown"
			hs("#numbe").style.display = 'block'
		} else {
			hs("#numbe").style.display = 'none'
		}
	}
	hs("#li6").onclick = function() {
		hs("#box").style.display = 'none'
		hs("#box1").style.display = 'block'
	}
	hs("#li7").onclick = function() {
		hs("#box").style.display = 'block'
		hs("#box1").style.display = 'none'
	}

}
