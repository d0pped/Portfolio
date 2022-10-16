$(function () {
	var menu = $(".menuWrap>ul>li")
	var contents = $("#contents>div")

	var $html = $("html")
	var $body = $("body")

	menu.click(function (event) {
		event.preventDefault()
		var tg = $(this)
		var i = tg.index()
		var section = contents.eq(i)
		var tt = section.offset().top
		$("html, body").stop().animate({scrollTop: tt})
	})

	$(window).scroll(function () {
		var sct = $(window).scrollTop()
		contents.each(function () {
			var tg = $(this)
			var i = tg.index()
			if (tg.offset().top <= sct) {
				menu.removeClass("on")
				menu.eq(i).addClass("on")
			}
		})
	})
})

$(function () {
	$(".ptitle").typed({
		strings: ['<span class="txt1">안녕하세요</span>', '<span class="txt2">신입퍼블리셔입니다</span>'],
		typeSpeed: 150,
		backDelay: 200,
		loop: true,
		showCursor: true,
	})

	$(window).scroll(function () {
		var sct = $(window).scrollTop()
		var sections = [
			{
				section: $("#webstd").offset().top,
				left: $(".webstd_cont .webstd_left"),
				right: $(".webstd_cont .webstd_right"),
			},
			{
				section: $("#jquery").offset().top,
				one: $(".jquery_text_one"),
				two: $(".jquery_text_two"),
			},
			{
				section: $("#mobile").offset().top,
				left: $(".mobile_cont .response_left"),
				right: $(".mobile_cont .response_right"),
			},
		]

		if (sct > sections[0].section - 150) {
			sections[0].left.stop().animate({left: "10px"}, 1000)
			sections[0].right.stop().animate({right: "10px"}, 1000)
		} else {
			sections[0].left.stop().animate({left: "-600px"}, 1000)
			sections[0].right.stop().animate({right: "-600px"}, 1000)
		}

		if (sct > sections[1].section - 150) {
			sections[1].one.fadeIn(1000)
			sections[1].two.slideDown(1000)
		}

		if (sct > sections[2].section - 150) {
			sections[2].left.stop().animate({left: "10px"}, 1000)
			sections[2].right.stop().animate({right: "10px"}, 1000)
		} else {
			sections[2].left.stop().animate({left: "-600px"}, 1000)
			sections[2].right.stop().animate({right: "-600px"}, 1000)
		}
	})

	$(".hidden").hover(
		function () {
			var ah = $(this).innerHeight()
			var img = $(this).find("img")
			var imgh = img.innerHeight()
			img.stop().animate({top: ah - imgh}, 3000)
		},
		function () {
			var img = $(this).find("img")
			img.stop().animate({top: 0}, 3000)
		}
	)

	$(".hidden02").hover(
		function () {
			var ah = $(this).parent().innerHeight()
			var img = $(this).find("img")
			var imgh = img.innerHeight()

			img.stop().animate({top: ah - imgh}, 6000)
		},
		function () {
			var img = $(this).find("img")
			img.stop().animate({top: 0}, 6000)
		}
	)
})
