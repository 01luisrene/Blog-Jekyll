var alegre = 'fa-smile-o',
	serio = 'fa-meh-o',
	triste= 'fa-frown-o',
	alto_ventana = $( window ).height();

$(function(){
	//script para el inicio de la web
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
	//setInterval sirve para cambiar mi slider en un determinado tiempo
	setInterval(function(){ slider() }, 10000);

	// función para cargar estado de animo
	$('#img_estado .fa').addClass(alegre);

	//código para mis números de celulares
	var movistar = $('#movistar').text();
	$('#movistar').hover(function(){
    	$(this).addClass('movistar');
		replace = movistar.replace(movistar,'Movistar');
		$(this).text(replace);
    }, function() {
    	$(this).removeClass('movistar');
    	replace = movistar.replace('Movistar', movistar);
		$(this).text(replace);
  	});
	var claro = $('#claro').text();
  	$('#claro').hover(function(){
    	$(this).addClass('claro');
    	replace = claro.replace(claro, 'Claro');
		$(this).text(replace);
    }, function() {
    	$(this).removeClass('claro');
    	replace = claro.replace('Claro', claro);
		$(this).text(replace);
  	});
});


function slider()
{
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
}
