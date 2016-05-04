'use strict';

/**
 * @ngdoc overview
 * @name workspaceApp
 * @description
 * # workspaceApp
 *
 * Main module of the application.
 */

(function(){
	angular
		.module('hassApp', [
			'ngAnimate',
			'ngAria',
			'ngCookies',
			'ngMessages',
			'ngResource',
			'ngSanitize',
			'ngTouch',
			'ui.router',
			//config
			'configApp',
			//content
			'contentApp',
			//NAV
			'headApp'
		]);
})();
