$(document).ready(function(){
//--------------------------------------------------------------------------------------
//                      Прелоадер
//--------------------------------------------------------------------------------------
	$(window).on('load',function(){
		$('#preloader').css('opacity','0');
		setTimeout(function() {
			$('#preloader').remove();
			console.log("%c%s","color: red;text-align: center;font: bolder 20px sans-serif;","Закройте эту страницу немедленно");
		},500);
	});
//--------------------------------------------------------------------------------------
//                       Плавный Скролл
//--------------------------------------------------------------------------------------                      
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 500 мс
		$('#content').animate({scrollTop: top}, 500);
	});	
//--------------------------------------------------------------------------------------
//                      Меню на мобилке
//--------------------------------------------------------------------------------------
	var a = 1;
	$('#mob_menu').on('click',function(){
		a++;
		if(a>2){
			a=1;
		}
		if(a==2){
			$('#mm_img').html('<img src="img/menu_of.png">');
			$('#menu').css('height','310px');
		}else{
			$('#mm_img').html('<img src="img/menu_on.png">');
			$('#menu').css('height','55px');
		}		
	});
//--------------------------------------------------------------------------------------
//					Раскадровка - выделение фона про выборе пункта меню
//--------------------------------------------------------------------------------------
	$('#gallery').on('click',function(){
		$('#slider').addClass('ux');
		setTimeout(function(){
			$('#slider').removeClass('ux');	
		},1500);	
	});	
	$('#site').on('click',function(){
		$('.leftmenu,.rightmenu').addClass('ux');
		setTimeout(function(){
			$('.leftmenu,.rightmenu').removeClass('ux');	
		},1500);	
	});	
	$('#servic').on('click',function(){
		$('#sites').addClass('ux');
		$('#head_sites').addClass('ux');
		setTimeout(function(){
			$('#sites').removeClass('ux');	
			$('#head_sites').removeClass('ux');	
		},1500);	
	});	
	$('#contact').on('click',function(){
		$('#footer').addClass('ux');
		setTimeout(function(){
			$('#footer').removeClass('ux');	
		},1500);	
	});	
	$('#buy').on('click',function(){
		$('#order').addClass('ux');
		setTimeout(function(){
			$('#order').removeClass('ux');	
		},1500);	
	});
//--------------------------------------------------------------------------------------
//								Сброс всех услуг 
//--------------------------------------------------------------------------------------	
	$('#reset_service').on('click',function(){
		$('.con_form label .checks').removeClass('checkeds');
		$('.con_form label').css('background-color','transparent');
		$('.input_comment').remove();
		$('#preview_head').css('display','none');
		$('#calc_number').html(0);
	});	
//--------------------------------------------------------------------------------------
//							Вывод цены Услуг при выборе услуги
//--------------------------------------------------------------------------------------
	function checkFun(x,y) {
		$('#num'+x).on('change',function(){
			var twoclass = 'num'+x,
				twotext = $('.site_input',this).val();
			if ($('.site_input',this).prop('checked')) {
				$('#input_comment').append('<p class="input_comment '+twoclass+'">'+twotext+'</p>');
				$(this).css('background-color','orange');
				$('.checks',this).addClass('checkeds');
				$('#calc_number').html(parseInt($('#calc_number').text())+parseInt(y));	
			}else{			
				$('#calc_number').html(parseInt($('#calc_number').text())-parseInt(y));				
				$('.'+twoclass).remove();
				$(this).css('background-color','transparent');
				$('.checks',this).removeClass('checkeds');
			}
			if (parseInt($('#calc_number').text())!=0) {
				$('#preview_head').css('display','block');	
			}else{
				$('#preview_head').css('display','none');	
			}
		});
	}
	for (var i = 1; i <= 56; i++) {
		var f = [0,50000,45000,55000,35000,40000,70000,90000,30000,20000,25000,15000,32000,44000,12000,17000,10000,100000,105000,65000,75000,80000,85000,60000,88000,95000,100000,88000,87000,89000,86000,84000,110000,63000,68000,64000,67000,72000,71000,76000,81000,34000,28000,38000,36000,32000,26000,48000,59000,19000,230000,240000,290000,320000,250000,260000,680000];
		checkFun(i,f[i]);
	}
//--------------------------------------------------------------------------------------
//                    Эффект волны при нажатии
//--------------------------------------------------------------------------------------
	var buttons = document.getElementsByClassName('butt'),
		forEach = Array.prototype.forEach;
	forEach.call(buttons, function(b){
		b.addEventListener('mousedown', addElement);
	});
	function addElement(e){
		var addDiv = document.createElement('div'),
			mValue = Math.max(this.clientWidth, this.clientHeight),
			rect   = this.getBoundingClientRect(),
			sDiv   = addDiv.style,
			px	   = 'px';
		sDiv.width = sDiv.height = mValue + px;
		sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
		sDiv.top  = e.clientY - rect.top - (mValue / 2) + px;
		addDiv.classList.add('pulse');
		this.appendChild(addDiv);
	}
//--------------------------------------------------------------------------------------
//                   	Размер экрана
//--------------------------------------------------------------------------------------	
	document.body.addEventListener('load',height,true);
	window.addEventListener('resize',height,true);
	function height(){
		var screen_h = $(window).height(),
			screen_w = $(window).width(),
			height = parseInt(screen_h)-65;
		if (parseInt($(window).width())<=480) {
			$('#content').css('height','auto');
		}else{			
			$('#content').css('height',height+'px');
		}
	}
//--------------------------------------------------------------------------------------
//                   	Куки
//--------------------------------------------------------------------------------------	

});

