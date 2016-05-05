/**
 *
 * @name contentCtrl
 * @description content控制器
 * @app contentApp
 *
 * Created by Hass on 16/4/25.
 */

'use strict';

(function () {
    var contentCtrl = function ($timeout,contentFullpageConfig) {
      /**
       * fullpage.js 使用
       */
      $timeout(function(){
        $("#web_wb").fullpage(contentFullpageConfig.config)
      });
      /**
       * 动画展示
       */

    };

    contentCtrl.$inject = ['$timeout','contentFullpageConfig'];

    angular.module('contentCtrl',[])
      .controller('contentCtrl',contentCtrl);
})();
