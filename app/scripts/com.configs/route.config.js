/**
 * Created by Hass on 16/4/25.
 *
 * @name routeConfig
 *
 * @description 路由配置
 *
 * @app hassApp
 */

'use strict';

(function () {

    var routeConfig = function ($stateProvider, $urlRouterProvider,$locationProvider) {
      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
      });

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/com.wb.common.content/content.html',
          controller: 'contentCtrl',
          controllerAs:'content'
        });
    };

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];

    angular.module('routeConfig', [])
      .config(routeConfig);

})();
