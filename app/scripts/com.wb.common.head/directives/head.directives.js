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
        var _self = this;

        /**
         *  头部右边导航栏的显示或隐藏变化
         * @param e
         */
        _self.menuToggle = function(e){
            e.stopPropagation();
            _self.isHeadShow = (_self.isHeadShow) ? false : true;
        }
    };

    headNavCtrl.$inject = [];

    var header = function(){
        return {
          restrict:'A',
          templateUrl:'views/com.wb.common.head/head.html',
          controller:headNavCtrl,
          controllerAs:'head'
        }
    };

    header.$inject = [];

    angular.module('headerDirective',[])
      .directive('header',header)
      .controller('headNavCtrl',headNavCtrl);
})();
