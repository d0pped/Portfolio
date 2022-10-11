$(function(){
	/* 글자쓰는 플러그인 */
	$('.ptitle').typed({
		stringsElement: '#typed-strings',
		typeSpeed:150,
		backDelay:200,
		loop:true,
		showCursor:false
	});
	
	/* 프로파일 롤링 1*/
	var work=$('.work>li');
	var currentWork=0;
	
	setInterval(function(){
		var prevW=work.eq(currentWork);
		movework(prevW, 0, '-100%');
		currentWork++;
		if(currentWork==work.size()){currentWork=0;}
		var nextW=work.eq(currentWork);
		movework(nextW, '100%', 0);
	},3000);
	
	function movework(tg, start, end){
		tg.css('top', start).stop().animate({top:end},500);
	}
	
	/* 프로파일 롤링 2*/
	var company=$('.company li');
	var currentComp=0;
	
	setInterval(function(){
		var prevC=company.eq(currentComp);
		movecompany(prevC,0,'-100%');
		currentComp++;
		if(currentComp==company.size()){currentComp=0;}
		var nextC=company.eq(currentComp);
		movecompany(nextC,'100%',0);
	},3500);
	
	function movecompany(tg,start,end){
		tg.css('top',start).stop().animate({top:end},500);		
	}
	
	/* webstd */
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var webstd=$('#webstd').offset();
		
		if(sct>webstd.top-150){
			$('.webstd_cont .webstd_left').stop().animate({left: '10px'},1000);
			$('.webstd_cont .webstd_right').stop().animate({right: '10px'},1000);
		}else{
			$('.webstd_cont .webstd_left').stop().animate({left: '-600px'},1000);
			$('.webstd_cont .webstd_right').stop().animate({right: '-600px'},1000);
		}
	});
	
	
	$('.hidden').hover(function(){
		var ah=$(this).innerHeight();
		var img=$(this).find('img');
		var imgh=img.innerHeight();
		
		img.stop().animate({top:ah-imgh},3000);
	},function(){
		var img=$(this).find('img');
		img.stop().animate({top:0},3000);
	});
	
	/* jquery */
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var jquery=$('#jquery').offset();
		if(sct>jquery.top-150){
			$('.jquery_text_one').fadeIn(1000);
			$('.jquery_text_two').slideDown(1000);
		}
	});
	
	$('.hidden02').hover(function(){
		var ah=$(this).parent().innerHeight();
		var img=$(this).find('img');
		var imgh=img.innerHeight();
		
		img.stop().animate({top:ah-imgh},6000);
	},function(){
		var img=$(this).find('img');
		img.stop().animate({top:0},6000);
	});
	
	/* response */
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var response=$('#response').offset();
		
		if(sct>response.top-150){
			$('.response_cont .response_left').stop().animate({left: '10px'},1000);
			$('.response_cont .response_right').stop().animate({right: '10px'},1000);
		}else{
			$('.response_cont .response_left').stop().animate({left: '-600px'},1000);
			$('.response_cont .response_right').stop().animate({right: '-600px'},1000);
		}
	});
	
	/* 디자인 */
	var menu=$('.tab_content ul li');
	menu.find('.hover').hide();
	menu.hover(function(){
		var tg=$(this);
		var ti=tg.find('.hover');
		
		ti.fadeIn(300);
	},function(){
		var tg=$(this);
		var ti=tg.find('.hover');
		
		ti.fadeOut(300);
	});
	
});

















