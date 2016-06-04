//Llamando mis librerías desde Requirejs
requirejs.config({
		appDir	:'.',
		baseUrl	: '/assets/js',
		paths:{
			jquery 						:[
													'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
													'vendor/jquery'
												],
			ghostHunter				:'vendor/jquery.ghostHunter.min',
			methods						: 'app/methods.min'
		}
});

requirejs(['app/main']);