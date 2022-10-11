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
		event.preventDefault();	// a�±��� �ߺ� ��ũ�̺�Ʈ ����
		var tg=$(this);	//Ŭ���ѿ��
		var i=tg.index();	//���� i�� tg�� �ε��� ���
		var section=contents.eq(i); // section �� #contents>div �� tg �� ����� �ε��� ���� 
		var tt=section.offset().top;	//tg �� ����� ž�����
		$('html, body').stop().animate({scrollTop:tt}); //html, body �� scrollTop �Լ� ���� : Ÿ�ٿ���� ž����ŭ
	});
	
	
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		contents.each(function(){
			var tg=$(this);
			var i=tg.index();
			console.log(tg.offset().top , sct)
			if(tg.offset().top<=sct){	//#contents>div ��� �� ���õ� ���� Y��ǥ�� ��ũ�� ž�� ���� �۰ų� �������
			//�� ������ top ������ ������� �� ��ũ���� ���Ǻ��� ���� ������� => ��ũ���� �ش� ���ǿ� ����������
				menu.removeClass('on');
				menu.eq(i).addClass('on');
				btn.removeClass('active');
				btn.eq(i).addClass('active');
			}
		});
	});
	
	
	
	
	
	
	
	
	
	
	
});