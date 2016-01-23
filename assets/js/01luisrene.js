'use strict';
var alegre = 'fa-smile-o',
	serio = 'fa-meh-o',
	triste= 'fa-frown-o',
	alto_ventana = $( window ).height();

var cerounoluisrene = (function ($) {

    var

    userAgentInit = function() {
        document.documentElement.setAttribute('data-useragent', navigator.userAgent);
    },
    // script para que el menu sea statico
    menuFixed = function(){
    	var menu = $('body.template-no-home #js-site-header');
    	//http://bigspotteddog.github.io/ScrollToFixed/
    	$('body.template-no-home #js-site-header').scrollToFixed();

    	$(window).on('scroll', function() {
	      if($(window).scrollTop() > 1) {
	        menu.addClass('menu-fixed');
	      } else {
	        menu.removeClass('menu-fixed');
	      }
  });
    },
    //altura de la web
    heightHome = function(){
    	if(alto_ventana > 150){
			$('#contenedor_front_main').css({
				height: alto_ventana - 58
			});
		}
		else
		{
			$('#contenedor_front_main').css({
				height: 92
			});
		}
		$(window).resize(function() {
			var alto_ventana = $(this).height();
			if(alto_ventana > 150){
				$('#contenedor_front_main').css({
					height: alto_ventana - 58
				});
			}
			else{
				$('#contenedor_front_main').css({
					height: 92
				});
			}
		});
    },
    estado01luisrene = function(){
    	// función para cargar estado de animo
		$('#img_estado .fa').addClass(alegre);
    },
    //script para num cel
    numerosContacto = function(){
    	//código para mis números de celulares
		var movistar = $('#movistar').text();
		$('#movistar').hover(function(){
	    	$(this).addClass('movistar');
			var replace = movistar.replace(movistar,'Movistar');
			$(this).text(replace);
	    }, function() {
	    	$(this).removeClass('movistar');
	    	var replace = movistar.replace('Movistar', movistar);
			$(this).text(replace);
	  	});
		var claro = $('#claro').text();
	  	$('#claro').hover(function(){
	    	$(this).addClass('claro');
	    	var replace = claro.replace(claro, 'Claro');
			$(this).text(replace);
	    }, function() {
	    	$(this).removeClass('claro');
	    	var replace = claro.replace('Claro', claro);
			$(this).text(replace);
	  	});
    },
    //slider
    slider01luisrene = function(){
    	var size = $('.slider').find('.s_element').size();
		$('.slider').find('.s_element').each(
			function(index, value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');

					if(index+1 < size)
					{
						$($('.slider').find('.s_element').get(index+1)).slideDown();
						$($('.slider').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider').find('.s_element').get(0)).slideDown();
						$($('.slider').find('.s_element').get(0)).addClass('s_visible');
						return false;
					}
				}
		});
    },

    // https://highlightjs.org/
    syntaxHighlighter = function () {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    },
 // anima javascripts initialization
    init = function () {
        userAgentInit();
        menuFixed();
        heightHome();
        estado01luisrene();
        numerosContacto();
        setInterval(function(){ slider01luisrene() }, 10000);
        syntaxHighlighter();
    };

    return {
        init: init
    };

})(jQuery);

(function () {
    cerounoluisrene.init();
})();