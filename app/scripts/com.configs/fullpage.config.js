/**
 *
 * @name contentFullpageConfig
 *
 * @descritpion fullpage.js插件
 *
 * Created by Hass on 16/4/25.
 */

'use strict';
(function () {
    var contentFullpageConfig = function () {
      return {
        config:{
          //Navigation
          menu: '#menu',
          lockAnchors: false,
          anchors:[],
          navigation: true,
          navigationPosition: 'right',
          navigationTooltips: ['','','',''],
          navigationColor:'#fff',
          showActiveTooltip: false,
          slidesNavigation: true,
          slidesNavPosition: 'bottom',

          //Scrolling
          css3: true,
          scrollingSpeed: 800,
          autoScrolling: true,
          fitToSection: true,
          fitToSectionDelay: 1000,
          scrollBar: false,
          easing: 'easeInOutCubic',
          easingcss3: 'ease',
          loopBottom: false,
          loopTop: false,
          loopHorizontal: true,
          continuousVertical: false,
          normalScrollElements: '#element1, .element2',
          scrollOverflow: false,
          touchSensitivity: 15,
          normalScrollElementTouchThreshold: 5,

          //Accessibility
          keyboardScrolling: true,
          animateAnchor: true,
          recordHistory: true,

          //Design
          controlArrows: false,
          verticalCentered: true,
          resize : false,
          sectionsColor : [],
          paddingTop: '0',
          paddingBottom: '0',
          fixedElements: '#header, .footer',
          responsiveWidth: 0,
          responsiveHeight: 0,

          //Custom selectors
          sectionSelector: '.section',
          slideSelector: '.slide',

          //events
          onLeave: function(index, nextIndex, direction){},
          afterLoad: function(anchorLink, index){},
          afterRender: function(){},
          afterResize: function(){},
          afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
          onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        }
      };
    };

    contentFullpageConfig.$inject = [];

    angular.module('contentFullpageConfig',[])
      .factory('contentFullpageConfig',contentFullpageConfig);
})();
