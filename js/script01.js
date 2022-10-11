$(function () {
	$(".ptitle").typed({
		strings: ['<span class="txt1">안녕하세요</span>', '<span class="txt2">신입퍼블리셔입니다</span>'],
		typeSpeed: 150,
		backDelay: 200,
		loop: true,
		showCursor: true,
	});

	$(window).scroll(function () {
		var sct = $(window).scrollTop();
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
				section: $("#response").offset().top,
				left: $(".response_cont .response_left"),
				right: $(".response_cont .response_right"),
			},
		];

		if (sct > sections[0].section - 150) {
			sections[0].left.stop().animate({ left: "10px" }, 1000);
			sections[0].right.stop().animate({ right: "10px" }, 1000);
		} else {
			sections[0].left.stop().animate({ left: "-600px" }, 1000);
			sections[0].right.stop().animate({ right: "-600px" }, 1000);
		}

		if (sct > sections[1].section - 150) {
			sections[1].one.fadeIn(1000);
			sections[1].two.slideDown(1000);
		}

		if (sct > sections[2].section - 150) {
			sections[2].left.stop().animate({ left: "10px" }, 1000);
			sections[2].right.stop().animate({ right: "10px" }, 1000);
		} else {
			sections[2].left.stop().animate({ left: "-600px" }, 1000);
			sections[2].right.stop().animate({ right: "-600px" }, 1000);
		}
	});

	$(".hidden").hover(
		function () {
			var ah = $(this).innerHeight();
			var img = $(this).find("img");
			var imgh = img.innerHeight();
			img.stop().animate({ top: ah - imgh }, 3000);
		},
		function () {
			var img = $(this).find("img");
			img.stop().animate({ top: 0 }, 3000);
		},
	);

	$(".hidden02").hover(
		function () {
			var ah = $(this).parent().innerHeight();
			var img = $(this).find("img");
			var imgh = img.innerHeight();

			img.stop().animate({ top: ah - imgh }, 6000);
		},
		function () {
			var img = $(this).find("img");
			img.stop().animate({ top: 0 }, 6000);
		},
	);

	/* 디자인 */
	var menu = $(".tab_content ul li");
	menu.find(".hover").hide();
	menu.hover(
		function () {
			var tg = $(this);
			var ti = tg.find(".hover");
			ti.fadeIn(300);
		},
		function () {
			var tg = $(this);
			var ti = tg.find(".hover");
			ti.fadeOut(300);
		},
	);
});
