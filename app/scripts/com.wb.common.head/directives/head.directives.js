/**
 *
 * @name header
 * @description 头部directive
 *
 * @app headApp
 *
 * Created by Hass on 16/4/26.
 */

'use strict';

(function(){

    var headNavCtrl = function () {

    };

    headNavCtrl.$inject = [];

    var header = function(){
      return {
        restrict:'A',
        templateUrl:'views/com.wb.common.head/head.html',
        controller:headNavCtrl,
        controllerAs:'headNav'
      }
    };

    header.$inject = [];

    angular.module('headerDirective',[])
      .directive('header',header)
      .controller('headNavCtrl',headNavCtrl);
})();
