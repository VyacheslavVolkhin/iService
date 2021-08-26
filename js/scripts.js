$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};

	//popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})
    
    //help
    $('.elm-help[title]').tooltip();
	
	//text toggle
    $('.js-text-toggle').on('click', function() {
        $(this).parents('.text-toggle-box').toggleClass('active');
        return false;
    })


    //button up scroll
    $(".js-btn-up").click(function () {
        $("html,body").animate({scrollTop: 0}, "slow");
        return false;
    })

    //btn tgl
    $('.js-btn-tgl').on('click', function () {
        $(this).toggleClass('active');
        return false;
    })
    
    
    //filter toggle
    $('.js-filter-open').on('click', function() {
        $('.wrap').addClass('filter-showed');
        return false;
    })
    $('.js-filter-close').on('click', function() {
        $('.wrap').removeClass('filter-showed');
        return false;
    })

    //main-slider-box
    $('.main-slider-box .slider').slick({
        dots: true,
        slidesToShow: 1,
        variableWidth: false,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    variableWidth: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    variableWidth: true,
                    dots: false,
                }
            },
        ]
    });

    //catalog-slider-box
    $('.catalog-slider-box:not(.slider-inner) .slider').slick({
        dots: false,
        slidesToShow: 6,
        variableWidth: false,
        prevArrow: '<span class="btn-action-ico button-nav ico-arrow ico-arrow-prev"></span>',
        nextArrow: '<span class="btn-action-ico button-nav ico-arrow ico-arrow-next"></span>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    variableWidth: true,
                    prevArrow: false,
                    nextArrow: false,
                }
            },
        ]
    });

    //catalog-slider-box
    $('.catalog-slider-box.slider-inner .slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: false,
        prevArrow: '<span class="btn-action-ico button-nav ico-arrow ico-arrow-prev"></span>',
        nextArrow: '<span class="btn-action-ico button-nav ico-arrow ico-arrow-next"></span>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    variableWidth: true,
                    prevArrow: false,
                    nextArrow: false,
                }
            },
        ]
    });

    //services-slider-box
    $('.services-slider-box .slider').slick({
        dots: false,
        slidesToShow: 6,
        variableWidth: false,
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    variableWidth: true,
                    dots: true
                }
            },
        ]
    });


    //card slider
    $('.photos-slider-box .slider-wrap .slider').slick({
        dots: false,
        slidesToShow: 1,
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                }
            },
        ]
    });
    $('.photos-slider-box .slider-preview-wrap .slider').slick({
        dots: false,
        slidesToShow: 4,
        vertical: false,
        infinite: true,
        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
    });
    $('.photos-slider-box .slider-preview-wrap .slider .item-photo').click(function () {
        let newSlide = $(this).attr('data-slide');
        $('.photos-slider-box .slider-wrap .slider').slick('slickGoTo', newSlide);
        return false;
    })
    
    
    //range slider
    $('#range-slider').slider({
        range: true,
        min: 0,
        max: 120000,
        values: [0, 70000],
        slide: function (event, ui) {
            $('#range-min').val(ui.values[0]);
            $('#range-max').val(ui.values[1]);
        }
    })
    $('#range-min').val($('#range-slider').slider('values', 0));
    $('#range-max').val($('#range-slider').slider('values', 1));
    $('#range-min').bind('focusout', function () {
        if ($(this).val() > $('#range-slider').slider('values', 1)) {
            $(this).val($('#range-slider').slider('values', 0));
        }
        $('#range-slider').slider('values', 0, $(this).val());
    })
    $('#range-max').bind('focusout', function () {
        if ($(this).val() < $('#range-slider').slider('values', 0)) {
            $(this).val($('#range-slider').slider('values', 1));
        }
        $('#range-slider').slider('values', 1, $(this).val());
    })
    $('#range-min').bind('keypress', function (e) {
        if (e.keyCode == 13) {
            if ($(this).val() > $('#range-slider').slider('values', 1)) {
                $(this).val($('#range-slider').slider('values', 0));
            }
            $('#range-slider').slider('values', 0, $(this).val());
        }
    })
    $('#range-max').bind('keypress', function (e) {
        if (e.keyCode == 13) {
            if ($(this).val() < $('#range-slider').slider('values', 0)) {
                $(this).val($('#range-slider').slider('values', 1));
            }
            $('#range-slider').slider('values', 1, $(this).val());
        }
    })
    $('#widget').draggable();
	
});