$(document).ready(function(){
	var city1 = $('.popup__cities .popup__city:nth-child(1)').text();
	var city2 = $('.popup__cities .popup__city:nth-child(2)').text();
	var city3 = $('.popup__cities .popup__city:nth-child(3)').text();
	var city4 = $('.popup__cities .popup__city:nth-child(4)').text();
	var city5 = $('.popup__cities .popup__city:nth-child(5)').text();
	var city6 = $('.popup__cities .popup__city:nth-child(6)').text();
	var city7 = $('.popup__cities .popup__city:nth-child(7)').text();
	var city8 = $('.popup__cities .popup__city:nth-child(8)').text();
	$('.popup__cities .popup__city:nth-child(1)').on('click', function(){
		$('.geolocation__text').text(city1);
	});
	$('.popup__cities .popup__city:nth-child(2)').on('click', function(){
		$('.geolocation__text').text(city2);
	});
	$('.popup__cities .popup__city:nth-child(3)').on('click', function(){
		$('.geolocation__text').text(city3);
	});
	$('.popup__cities .popup__city:nth-child(4)').on('click', function(){
		$('.geolocation__text').text(city4);
	});
	$('.popup__cities .popup__city:nth-child(5)').on('click', function(){
		$('.geolocation__text').text(city5);
	});
	$('.popup__cities .popup__city:nth-child(6)').on('click', function(){
		$('.geolocation__text').text(city6);
	});
	$('.popup__cities .popup__city:nth-child(7)').on('click', function(){
		$('.geolocation__text').text(city7);
	});
	$('.popup__cities .popup__city:nth-child(8)').on('click', function(){
		$('.geolocation__text').text(city8);
	});
	// header
	$('.header__cart').on('mouseenter', function(){
		$(this).addClass('active');
		$('.cart-view').addClass('active');
		$('.cart-view').on('mouseenter', function(){
			$('.cart-view').addClass('active');
			$('.header__cart').addClass('active');
		});
		$('.header__cart').on('mouseleave', function(){
			$(this).removeClass('active');
			$('.cart-view').removeClass('active');
			$('.cart-view').on('mouseleave', function(){
				$('.cart-view').removeClass('active');
				$('.header__cart').removeClass('active');
			});
		});
	});
	$('.header__notifications').on('mouseenter', function(){
		$(this).addClass('active');
		$('.notifications-view').addClass('active');
		$('.notifications-view').on('mouseenter', function(){
			$('.notifications-view').addClass('active');
			$('.header__notifications').addClass('active');
		});
		$('.header__notifications').on('mouseleave', function(){
			$(this).removeClass('active');
			$('.notifications-view').removeClass('active');
			$('.notifications-view').on('mouseleave', function(){
				$('.notifications-view').removeClass('active');
				$('.header__notifications').removeClass('active');
			});
		});
	});
	$('.header__message').on('mouseenter', function(){
		$(this).addClass('active');
		$('.message-view').addClass('active');
		$('.message-view').on('mouseenter', function(){
			$('.message-view').addClass('active');
			$('.header__message').addClass('active');
		});
		$('.header__message').on('mouseleave', function(){
			$(this).removeClass('active');
			$('.message-view').removeClass('active');
			$('.message-view').on('mouseleave', function(){
				$('.message-view').removeClass('active');
				$('.header__message').removeClass('active');
			});
		});
	});
	$('.header__user').on('mouseenter', function(){
		$(this).addClass('active');
		$('.user-view').addClass('active');
		$('.user-view').on('mouseenter', function(){
			$('.user-view').addClass('active');
			$('.header__user').addClass('active');
		});
		$('.header__user').on('mouseleave', function(){
			$(this).removeClass('active');
			$('.user-view').removeClass('active');
			$('.user-view').on('mouseleave', function(){
				$('.user-view').removeClass('active');
				$('.header__user').removeClass('active');
			});
		});
	});
	$('.header__premium').on('click', function(){
		$(this).toggleClass('active')
	});
	var masterClass = $('.master-class')
	var headerCatalog = $('.header__catalog-1')
	masterClass.on('mouseenter', function(){
		headerCatalog.addClass('header__catalog-1_active');
		$('.header__catalog').addClass('header__catalog_active');
		$('.master-class').addClass('active');
		if(window.matchMedia('(max-width: 1440px)').matches) {
			$('.header__catalog-1 .catalog__item:last-child a').html('Ещё')
		}
		if(window.matchMedia('(max-width: 1280px)').matches) {
			$('.header__catalog-1 .catalog__item:last-child').css('display', 'none')
		}
		if(window.matchMedia('(max-width: 1152px)').matches) {
			$('.header__catalog-1 .catalog__item:nth-child(6) a').html('Ещё')
		}
		headerCatalog.on('mouseenter', function(){
			headerCatalog.addClass('header__catalog-1_active');
			$('.header__catalog').addClass('header__catalog_active');
			$('.master-class').addClass('active');
			if(window.matchMedia('(max-width: 1440px)').matches) {
				$('.header__catalog-1 .catalog__item:last-child a').html('Ещё')
			}
			if(window.matchMedia('(max-width: 1280px)').matches) {
				$('.header__catalog-1 .catalog__item:last-child').css('display', 'none')
			}
			if(window.matchMedia('(max-width: 1152px)').matches) {
				$('.header__catalog-1 .catalog__item:nth-child(6) a').html('Ещё')
			}
		});
		headerCatalog.on('mouseleave', function(){
			headerCatalog.removeClass('header__catalog-1_active');
			$('.header__catalog').removeClass('header__catalog_active');
			$('.master-class').removeClass('active');
		});
		masterClass.on('mouseleave', function(){
			headerCatalog.removeClass('header__catalog-1_active');
			$('.header__catalog').removeClass('header__catalog_active');
			$('.master-class').removeClass('active');
		});
	});
	$('.header__languages').on('click', function(){
		$(this).toggleClass('active');
		$('.language__item_1').on('click', function(){
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		});
		$('.language__item_2').on('click', function(){
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		});
	});
	$('.sign-in__message').addClass('sign-in__message_active');
	$('body').on('click', function(){
		$('.sign-in__message').removeClass('sign-in__message_active');
	});
	$('.header__geolocation').on('click', function(){
		$('.popup-background, .geolocation__popup').addClass('active');
		$('html').addClass('lock');
		$('.popup-background').on('click', function(){
			$('.popup-background, .geolocation__popup').removeClass('active');
			$('html').removeClass('lock');
		});
		$('.popup__city').on('click', function(){
			$('.popup-background, .geolocation__popup').removeClass('active');
			$('html').removeClass('lock');
			var geolocationText = $('.geolocation__text');
			if (geolocationText.text() == ('Выбрать')){
				geolocationText.removeClass('active');
			} else{
				geolocationText.addClass('active');
			}
		});
		$('.popup__button').on('click', function(){
			$('.popup-background, .geolocation__popup').removeClass('active');
			$('html').removeClass('lock');
		});
	});
	$('.catalog_mobile__status').on('click', function(){
		$('.popup-background, .settings__popup').addClass('active');
		$('.popup-background').on('click', function(){
			$('.popup-background, .settings__popup').removeClass('active');
		});
		$('.popup__button').on('click', function(){
			$('.popup-background, .settings__popup').removeClass('active');
		});
	});
	$('.info__name').on('click', function(){
		$('.popup-background, .popup_1').addClass('active');
		$('html').addClass('lock');
		$('.popup-background').on('click', function(){
			$('.popup-background, .popup_1').removeClass('active');
			$('html').removeClass('lock');
		});
		$('.popup__button').on('click', function(){
			$('.popup-background, .popup_1').removeClass('active');
			$('html').removeClass('lock');
		});
	});
	$('.setting__button').on('click', function(){
		var catalogStatusCountry = $('.setting__country').val();
		var catalogStatusLanguage = $('.setting__language').val();
		var catalogStatusCurrency = $('.setting__currency').val();
		$('.catalog-status__country').html(catalogStatusCountry);
		$('.catalog-status__language').html(catalogStatusLanguage);
		$('.catalog-status__currency').html(catalogStatusCurrency);
	});
	if(window.matchMedia('(max-width: 1501px)').matches){
		$('.header-small__catalog-1 .catalog__item:nth-child(5) a').text('Ещё');
		$('.header-small__catalog-1 .catalog__item:nth-child(6)').addClass('hidden');
		$('.header-small__catalog-1').addClass('small-catalog-media_1')
	}
	if(window.matchMedia('(max-width: 1440px)').matches){
		$('.header-small__catalog .catalog__item:nth-child(6) a').text('Текстиль');
	}
	if(window.matchMedia('(max-width: 1357px)').matches){
		$('.header-small__catalog-1 .catalog__item:nth-child(4) a').text('Ещё');
		$('.header-small__catalog-1 .catalog__item:nth-child(5)').addClass('hidden');
		$('.header-small__catalog-1').addClass('small-catalog-media_2')
	}
	if(window.matchMedia('(max-width: 1098px)').matches){
		$('.header-small__catalog-1 .catalog__item:nth-child(3) a').text('Ещё');
		$('.header-small__catalog-1 .catalog__item:nth-child(4)').addClass('hidden');
		$('.header-small__catalog-1').addClass('small-catalog-media_3')
	}
	// confirmation
	$('.confirmation__terms-item').on('click', function(){
		$(this).children('.confirmation__terms-subtitle').children('.bottom-arrow').toggleClass('bottom-arrow_active');
		$(this).siblings().children('.confirmation__terms-subtitle').children('.bottom-arrow').removeClass('bottom-arrow_active');
		$(this).children('.confirmation__terms-text').slideToggle(300);
		$(this).siblings().children('.confirmation__terms-text').slideUp(300);
	});
	if(window.matchMedia('(min-width: 769px)').matches){
		$('.header__confirmation').addClass('active')
	}
	// / header

	// form warning
	$('.info__form').on('submit', function(e){
		if( ! this.checkValidity()){
			e.preventDefault();
			$(this).addClass('invalid');
			$('.info__form input[type="submit"]').addClass('invalid-btn');
		}
	});	
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
	var review1 = $('.reviews_1__item_1 .reviews_1__text');
	if (review1.height() >= 60) {
		review1.addClass('active');
	}
	$('.reviews_1__item_1 .reviews_1__more').on('click', function(){
		$(this).addClass('hidden');
		review1.removeClass('active');
	});
	var review2 = $('.reviews_1__item_2 .reviews_1__text');
	if (review2.height() >= 60) {
		review2.addClass('active');
	}
	$('.reviews_1__item_2 .reviews_1__more').on('click', function(){
		$(this).addClass('hidden');
		review2.removeClass('active');
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
		$(this).siblings('.product__variation-1').html('Вариация:<div class="select"><select class="variation" name="variation"><option value="0" selected disabled>Выберите</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option></select><svg class="select-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M2.17422 0C1.31987 0 0.858958 1.00212 1.41496 1.65079L5.24074 6.1142C5.63984 6.57981 6.36016 6.57981 6.75926 6.1142L10.585 1.65079C11.141 1.00212 10.6801 0 9.82578 0H2.17422Z"></path></svg></div>');
		$(this).siblings('.product__variation-1').children('.select').children('.variation').val(variationDone);
		$(this).siblings('.product__variation-2').html('Вариация:<div class="select"><select class="variation1" name="variation"><option value="0" selected disabled>Выберите</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select><svg class="select-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M2.17422 0C1.31987 0 0.858958 1.00212 1.41496 1.65079L5.24074 6.1142C5.63984 6.57981 6.36016 6.57981 6.75926 6.1142L10.585 1.65079C11.141 1.00212 10.6801 0 9.82578 0H2.17422Z"></path></svg></div>');
		$(this).siblings('.product__variation-2').children('.select').children('.variation1').val(variationDone1);
		$(this).siblings('.product__change-done').addClass('product__change-done_active');
		$(this).addClass('product__change_active');
	});
	$('.catalog__clothes').on('mouseenter', function(){
		$('.category__clothes').addClass('category_visible');
		$('.category__clothes').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog__baby-clothes').on('mouseenter', function(){
		$('.category__baby-clothes').addClass('category_visible');
		$('.category__baby-clothes').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog__shoes').on('mouseenter', function(){
		$('.category__shoes').addClass('category_visible');
		$('.category__shoes').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog__accessories').on('mouseenter', function(){
		$('.category__accessories').addClass('category_visible');
		$('.category__accessories').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog__ornamentation').on('mouseenter', function(){
		$('.category__ornamentation').addClass('category_visible');
		$('.category__ornamentation').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog__toys').on('mouseenter', function(){
		$('.category__toys').addClass('category_visible');
		$('.category__toys').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog__wedding').on('mouseenter', function(){
		$('.category__wedding').addClass('category_visible');
		$('.category__wedding').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog__home-interior').on('mouseenter', function(){
		$('.category__home-interior').addClass('category_visible');
		$('.category__home-interior').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog__pets').on('mouseenter', function(){
		$('.category__pets').addClass('category_visible');
		$('.category__pets').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog__presents').on('mouseenter', function(){
		$('.category__presents').addClass('category_visible');
		$('.category__presents').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog__master-class').on('mouseenter', function(){
		$('.category__master-class').addClass('category_visible');
		$('.category__master-class').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog__order').on('mouseenter', function(){
		$('.category__order').addClass('category_visible');
		$('.category__order').siblings().removeClass('category_visible');
		$(this).addClass('category__name_active');
		$(this).siblings().removeClass('category__name_active');
	});
	$('.catalog-btn, .header__burger_mobile').on('click', function(){
		$('html').toggleClass('lock');
		$('.header__catalog-menu-wrapper').toggleClass('header__catalog-menu-wrapper_active');
		$('.catalog__button').toggleClass('active');
		$('.header__burger_mobile').toggleClass('active');
	});
	// mobile catalog
	$('.catalog_mobile__clothes').on('click', function(){
		$('.catalog_mobile-open').addClass('active');
		$('.mobile-open__clothes').addClass('active').siblings().removeClass('active');
	});
	$('.catalog_mobile__shoes').on('click', function(){
		$('.catalog_mobile-open').addClass('active');
		$('.mobile-open__shoes').addClass('active').siblings().removeClass('active');
	});
	$('.catalog_mobile__accesories').on('click', function(){
		$('.catalog_mobile-open').addClass('active');
		$('.mobile-open__accesories').addClass('active').siblings().removeClass('active');
	});
	$('.catalog_mobile__baby-clothes').on('click', function(){
		$('.catalog_mobile-open').addClass('active');
		$('.mobile-open__baby-clothes').addClass('active').siblings().removeClass('active');
	});
	$('.catalog_mobile__toys').on('click', function(){
		$('.catalog_mobile-open').addClass('active');
		$('.mobile-open__toys').addClass('active').siblings().removeClass('active');
	});
	$('.catalog_mobile__wedding').on('click', function(){
		$('.catalog_mobile-open').addClass('active');
		$('.mobile-open__wedding').addClass('active').siblings().removeClass('active');
	});
	$('.catalog_mobile__home-interior').on('click', function(){
		$('.catalog_mobile-open').addClass('active');
		$('.mobile-open__home-interior').addClass('active').siblings().removeClass('active');
	});
	$('.catalog_mobile__pets').on('click', function(){
		$('.catalog_mobile-open').addClass('active');
		$('.mobile-open__pets').addClass('active').siblings().removeClass('active');
	});
	$('.catalog_mobile__gift').on('click', function(){
		$('.catalog_mobile-open').addClass('active');
		$('.mobile-open__gift').addClass('active').siblings().removeClass('active');
	});
	$('.catalog_mobile-open__header').on('click', function(){
		$('.catalog_mobile-open').removeClass('active');
	});
	$('.header__search_1').on('click', function(){
		$('.header_mobile__search').addClass('active');
		$('.search_mobile__back').on('click', function(){
			$('.header_mobile__search').removeClass('active');
		});
	});
	$('.header_mobile__form input').on('focus', function(){
		$('.header_mobile__form').addClass('active');
		$(this).on('focusout', function(){
			$('.header_mobile__form').removeClass('active');
		});
	});
	// characteristic
	$('.characteristic__content').slideUp(0);
	$('.characteristic__row').on('click', function(){
		$(this).siblings('.characteristic__content').slideToggle(500);
		$(this).parent().siblings().children('.characteristic__content').slideUp(500);
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active');
	});
	$('.reviews_1__content').slideUp(0);
	$('.reviews_1__row').on('click', function(){
		$(this).siblings('.reviews_1__content').slideToggle(500);
		$(this).parent().toggleClass('active');
	});
	var description = $('.description__text');
	if (description.height() >= 120) {
		description.addClass('active');
	}
	$('.description__more').on('click', function(){
		$(this).addClass('hidden');
		description.addClass('active');
	});
	// footer
	$('.footer_mobile__content').slideUp(0);
	$('.footer_mobile__name-wrapper').on('click', function(){
		$(this).siblings('.footer_mobile__content').slideToggle(500);
		$(this).parent().siblings().children('.footer_mobile__content').slideUp(500);
	});
	$('.input-remove_1').on('click', function(){
		$('.header_mobile__input').val('');
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
			$(this).children('input[type="submit"]').addClass('invalid-btn');
			if($('.decor-order__city').val()){
				$('.delivery-info__form input[type="submit"]').removeClass('invalid-btn');
			}
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
	$(document).on("scroll", function(){
		if($(document).scrollTop()>0){
			$('header').removeClass("header_large").addClass("header_small");
			$('.sign-in__message').removeClass('sign-in__message_active');
			$('.header__languages').removeClass('active');
		} else{
			$('header').removeClass("header_small").addClass("header_large");
		}
	});
});
// slider
$('.catalog__slider').slick({
	infinite: true,
	arrows: false,
	dots: true,
	slidesToShow:1,
	speed:350
});
$('.like__slider').slick({
	infinite: true,
	arrows: true,
	dots: false,
	slidesToShow:5,
	speed:350,
	responsive: [
		{
			breakpoint: 1152,
			settings: {
				slidesToShow:4
			}
		},
		{
			breakpoint: 1153,
			settings: {
				slidesToShow:4
			}
		},
		{
			breakpoint: 901,
			settings: {
				slidesToShow:3
			}
		},
		{
			breakpoint: 651,
			settings: {
				slidesToShow:2
			}
		}
	]
});
$('.slider__big').slick({
	infinite: true,
	arrows: true,
	dots: false,
	slidesToShow: 1,
	speed:350
});
$('.slider_1__mini-slider').slick({
	infinite: false,
	arrows: true,
	dots: false,
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 321,
			settings: {
				slidesToShow:4
			}
		}
	]
});
$('.slider_1__image').slick({
	infinite: false,
	arrows: false,
	dots: false,
	slidesToShow: 1
});