$(function(){
	var options={
		'speed':500,
		'initTop':250,
		'alwaysTop':false,
		'default_x':'#contents'
	}
	$('#floatdiv').Floater(options);

	var menu=$('.menuWrap>ul>li');
	var contents=$('#contents>div');
	var btn=$('#floatdiv ul li');
	var $html=$('html');
	var $body=$('body');


	btn.eq(0).click(function(){
		$('html, body').animate({scrollTop:$('#main').offset().top},800);
	});
	$('#btn02').click(function(){
		$('html, body').animate({scrollTop:$('#profile').offset().top},800);
	});
	$('#btn03').click(function(){
		$('html, body').animate({scrollTop:$('#webstd').offset().top},800);
	});
	$('#btn04').click(function(){
		$('html, body').animate({scrollTop:$('#jquery').offset().top},800);
	});
	$('#btn05').click(function(){
		$('html, body').animate({scrollTop:$('#response').offset().top},800);
	});
	$('#btn06').click(function(){
		$('html, body').animate({scrollTop:$('#bstrap').offset().top},800);
	});
	$('#btn07').click(function(){
		$('html, body').animate({scrollTop:$('#mobile').offset().top},800);
	});
	$('#btn08').click(function(){
		$('html, body').animate({scrollTop:$('#design').offset().top},800);
	});
	
	
	
	menu.click(function(event){
		event.preventDefault();
		var tg=$(this);
		var i=tg.index();
		var section=contents.eq(i);
		var tt=section.offset().top;
		$('html, body').stop().animate({scrollTop:tt});
	});
	
	
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		contents.each(function(){
			var tg=$(this);
			var i=tg.index();
			if(tg.offset().top<=sct){
				menu.removeClass('on');
				menu.eq(i).addClass('on');
				btn.removeClass('active');
				btn.eq(i).addClass('active');
			}
		});
	});
	
	
	
	
	
	
	
	
	
	
	
});