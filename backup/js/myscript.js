$(document).ready(function(){
	// confirmation
	$('.confirmation__terms-item').on('click', function(){
		$(this).children('.confirmation__terms-subtitle').children('.bottom-arrow').toggleClass('bottom-arrow_active');
		$(this).siblings().children('.confirmation__terms-subtitle').children('.bottom-arrow').removeClass('bottom-arrow_active');
		$(this).children('.confirmation__terms-text').slideToggle(300);
		$(this).siblings().children('.confirmation__terms-text').slideUp(300);
	});
	// form warning
	$('.decor-order__form').on('submit', function(e){
		if( ! this.checkValidity()){
			e.preventDefault();
			$(this).addClass('invalid');
			$('.decor-order__form input[type="submit"]').addClass('invalid-btn');
		}
		if($('.decor-order__city').val()){
			$('.decor-order__form input[type="submit"]').removeClass('invalid-btn');
		}
	});
	// variation change
	$('.product__change-done').on('click', function(){
		$(this).removeClass('product__change-done_active');
		$(this).siblings('.product__change').removeClass('product__change_active');
		var variation = $(this).siblings('.product__variation-1').children('.select').children('.variation').val();
		var variation1 = $(this).siblings('.product__variation-2').children('.select').children('.variation1').val();
		$(this).siblings('.product__variation-1').html('Вариация: <span></span>');
		$(this).siblings('.product__variation-1').children('span').html(variation);
		$(this).siblings('.product__variation-2').html('Вариация: <span></span>');
		$(this).siblings('.product__variation-2').children('span').html(variation1);
	});
	$('.product__change').on('click', function(){
		var variationDone = $(this).siblings('.product__variation-1').children('span').html();
		var variationDone1 = $(this).siblings('.product__variation-2').children('span').html();
		$(this).siblings('.product__variation-1').html('Вариация:<div class="select"><select class="variation" name="variation"><option value="0" selected disabled>Выберите</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option></select></div>');
		$(this).siblings('.product__variation-1').children('.select').children('.variation').val(variationDone);
		$(this).siblings('.product__variation-2').html('Вариация:<div class="select"><select class="variation1" name="variation"><option value="0" selected disabled>Выберите</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div>');
		$(this).siblings('.product__variation-2').children('.select').children('.variation1').val(variationDone1);
		$(this).siblings('.product__change-done').addClass('product__change-done_active');
		$(this).addClass('product__change_active');
	});
	// input close
	$(".decor-order__city").on("keyup", function(){
	    if ($(".decor-order__city").val() == "") {
	        $(".input-remove").removeClass("input-remove_active");
	    } else {
	        $(".input-remove").addClass("input-remove_active");
	    }
	});
    $(".input-remove").on('click', function(){
        $(".decor-order__city").val('');
        $(".input-remove").removeClass("input-remove_active");
    });
	// modal 1
	$('.store__menu-btn').on('click',(function(){
		$('.store__modal').fadeToggle(200);
	}));
	$('.container').click(function() {
		$('.store__modal').fadeOut(200);
	});
	// modal 2
	$('.message').click(function(){
		$('.store__modal-2').fadeIn(200);
		if(window.matchMedia('(max-width: 840px)').matches){
			$('html').addClass('overflowhidden');
			$('body').addClass('overflowhidden1');
		}
	});
	$('.store__write-seller').click(function(){
		$('.store__modal-2').fadeIn(200);
		if(window.matchMedia('(max-width: 840px)').matches){
			$('html').addClass('overflowhidden');
			$('body').addClass('overflowhidden1');
		}
	});
    $(function(){
        $(".store__write-seller").bind('click', function(e){
            e.preventDefault();
            $('body,html').animate({scrollTop: 0}, 0);
        });
    });
	$('.store__modal-2-exit').click(function(){
		$('.store__modal-2').fadeOut(200);
		$('body').removeClass('overflow-hidden');
		$('body').removeClass('overflowhidden1');
	});
	// modal checkout
	$('.checkout__write-seller').click(function(){
		$('.checkout__modal-2').fadeIn(200);
		$('html').addClass('overflowhidden');
		$('body').addClass('overflowhidden1');
	});
    $('.checkout__write-seller-ico').click(function(){
		$('.checkout__modal-2').fadeIn(200);
		$('html').addClass('overflowhidden');
		$('body').addClass('overflowhidden1');
	});
    $(function(){
        $(".checkout__write-seller-ico").bind('click', function(e){
            e.preventDefault();
            $('body,html').animate({scrollTop: 0}, 0);
        });
    });
    $('.checkout__modal-2-exit').click(function(){
    	$('.checkout__modal-2').fadeOut(200);
    	$('body').removeClass('overflow-hidden');
    	$('body').removeClass('overflowhidden1');
    });
	// modal checkout
	$('.confirmation__write-seller').click(function(){
		$('.checkout__modal-2').fadeIn(200);
		$('html').addClass('overflowhidden');
		$('body').addClass('overflowhidden1');
	});
    $('.confirmation__modal-2-exit').click(function(){
    	$('.checkout__modal-2').fadeOut(200);
    	$('body').removeClass('overflow-hidden');
    	$('body').removeClass('overflowhidden1');
    });
	// modal 3
	$('.delete').click(function(){
		$('.store__modal-3').fadeIn(200);
		$('html').addClass('overflowhidden');
		$('body').addClass('overflowhidden1');
	});
	$('.store__exit').click(function(){
		$('.store__modal-3').fadeIn(200);
		$('html').addClass('overflowhidden');
		$('body').addClass('overflowhidden1');
	});
	$('.store__modal-3-exit').on('click',(function(){
		$('.store__modal-3').fadeOut(200);
		$('body').removeClass('overflow-hidden');
		$('body').removeClass('overflowhidden1');
	}));
	$('.product__plus').on('click', function(){
		var quantityValue = $(this).siblings('.product__quantity');
		var plus = $(this).siblings('.product__quantity').text();
		quantityValue.html(parseInt(plus) + parseInt(1));
	});
	$('.product__minus').on('click', function(){
		var quantityValue = $(this).siblings('.product__quantity');
		var minus = $(this).siblings('.product__quantity').text();
		quantityValue.html(parseInt(minus) - parseInt(1));
		if (quantityValue.text() < 1){
			quantityValue.html('1');
		}
	});
	$('.product-1__plus').on('click', function(){
		var quantityValue = $('.product-1__quantity');
		var plus = $('.product-1__quantity').text();
		quantityValue.html(parseInt(plus) + parseInt(1));
	});
	$('.product-1__minus').on('click', function(){
		var quantityValue = $('.product-1__quantity');
		var minus = $('.product-1__quantity').text();
		quantityValue.html(parseInt(minus) - parseInt(1));
		if (quantityValue.text() < 1){
			quantityValue.html('1');
		}
	});
	$('.product-2__plus').on('click', function(){
		var quantityValue = $('.product-2__quantity');
		var plus = $('.product-2__quantity').text();
		quantityValue.html(parseInt(plus) + parseInt(1));
	});
	$('.product-2__minus').on('click', function(){
		var quantityValue = $('.product-2__quantity');
		var minus = $('.product-2__quantity').text();
		quantityValue.html(parseInt(minus) - parseInt(1));
		if (quantityValue.text() < 1){
			quantityValue.html('1');
		}
	});
	if(window.matchMedia('(max-width: 400px)').matches){
		$('.variation option, .variation1 option').each(function () {
			var text = $(this).text();
			if (text.length > 5) {
				text = text.substring(0, 3) + '..';
				$(this).text(text);
			};
		});
	}

	// checkout mask
	$('#phone').mask("+7 (999) 999-99-99");
	$('#phone').focus(function(){
		$("#phone").attr('placeholder', '+7 (999) 999-99-99');
	});

	if($(window).width() < 441) {
	  $("#phone").attr('placeholder', 'Телефон');
	  $("#patronymic").attr('placeholder', 'Отчество');
	  $('#phone').focus(function(){
	  	$("#phone").attr('placeholder', '+7 (999) 999-99...');
	  });
	}

	$('.delivery-info__form').on('submit', function(e){
		if( ! this.checkValidity()){
			e.preventDefault();
			$(this).addClass('invalid');
			$('.delivery-info__form input[type="submit"]').addClass('invalid-btn');
		}
		if($('.decor-order__city').val()){
			$('.delivery-info__form input[type="submit"]').removeClass('invalid-btn');
		}
	});

	// decor-2
	$('.decor-2__arrow').on('click', function(){
		$('.decor-2').toggleClass('decor-2_active');
		$('.decor-2__arrow').toggleClass('decor-2__arrow_active');
		$('.decor__content').slideToggle(500)
	});
	if($(window).width() < 501) {
		$(".confirmation__name-title").html('<div class="confirmation__name-title">Подтверждение заказа</div>');
	}
});