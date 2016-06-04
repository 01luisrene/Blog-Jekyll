define(['jquery', 'methods'],function($, methods){
	methods.userAgentInit();
	methods.loading();
	methods.displayMenu();
	methods.closeMenu();
	methods.ghostHunter();
	methods.politicaCookies();
	methods.botonUp();
	methods.imprimirCurriculum();
	methods.disqus(window.location.href, window.location.href, $('.post-title').text());
	methods.cookieNewsletter();
});