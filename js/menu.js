$(function(){
	var options={
		'speed':500,
		'initTop':250,
		'alwaysTop':false,
		'default_x':'#contents'
	}
	
	$('#floatdiv').Floater(options);
	
	$('#btn01').click(function(){
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
	
	
	var menu=$('.menuWrap>ul>li');
	var contents=$('#contents>div');
	var btn=$('#floatdiv ul li');
	
	menu.click(function(event){
		event.preventDefault();	// a태그의 중복 링크이벤트 방지
		var tg=$(this);	//클릭한요소
		var i=tg.index();	//변수 i에 tg의 인덱스 취득
		var section=contents.eq(i); // section 에 #contents>div 중 tg 된 요소의 인덱스 넣음 
		var tt=section.offset().top;	//tg 된 요소의 탑값취득
		$('html, body').stop().animate({scrollTop:tt}); //html, body 에 scrollTop 함수 실행 : 타겟요소의 탑값만큼
	});
	
	
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		contents.each(function(){
			var tg=$(this);
			var i=tg.index();
			console.log(tg.offset().top , sct)
			if(tg.offset().top<=sct){	//#contents>div 요소 중 선택된 것의 Y좌표가 스크롤 탑값 보다 작거나 같은경우
			//각 섹션의 top 값보다 작은경우 즉 스크롤이 섹션보다 위에 있을경우 => 스크롤이 해당 섹션에 진입했을때
				menu.removeClass('on');
				menu.eq(i).addClass('on');
				btn.removeClass('active');
				btn.eq(i).addClass('active');
			}
		});
	});
	
	
	
	
	
	
	
	
	
	
	
});