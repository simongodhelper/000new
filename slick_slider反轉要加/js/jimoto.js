(function(){

  var windowWidth = $(window).width();
  var modalItem = '';

  var json = '/beer/beerball/asset/json/recipe.json';
  
  function displayJson() {
    $.getJSON(json, function(data){

      for(var i = 0; i < data.length; i++) {
        var order = data[i].order;
        var prefecturesJa = data[i].prefectures_ja;
        var prefecturesEn = data[i].prefectures_en;
        var caption = data[i].caption;
        var regions = data[i].regions;
        var necessary = data[i].necessary;
        var howto = data[i].howto;
        var note = '';
        if(data[i].note) {
          note = '<p class="section02__item-howto-note">' + data[i].note + '</p>';
        }
        var necessaryList = '';
        var howtoList = '';
  
        for(var j = 0; j < necessary.length; j++) {
          necessaryList += '<li class="section02__item-necessary">' + necessary[j] + '</li>';
        }
        for(var k = 0; k < howto.length; k++) {
          howtoList += '<li class="section02__item-howto">' + howto[k] + '</li>';
        }

        if(windowWidth <= 768) {
          var iconItem = '<li class="top-mv__slider-item"><picture><source media="(max-width: 767px)" srcset="/beer/beerball/asset/image/jimoto/icon/img-icon-' + prefecturesEn + '-sp.webp"><img src="/beer/beerball/asset/image/jimoto/icon/img-icon-' + prefecturesEn + '-sp.png" alt=""></picture></li>';
        if(i < 23) {
          $('.top-mv__slider-head').append(iconItem);
        } else {
          $('.top-mv__slider-foot').append(iconItem);
        }
        }
  
        var categoryItem = ''
        + '<li class="section02__item-beer">'
        + '<div class="section02__item-beer-inner">'
        + '<p class="section02__item-beer-img"><picture><source media="(max-width: 767px)" srcset="/beer/beerball/asset/image/jimoto/bnr/img-bnr-' + prefecturesEn + '.webp"><img src="/beer/beerball/asset/image/jimoto/bnr/img-bnr-' + prefecturesEn + '.jpg" alt="' + caption + '" loading="lazy"></picture></p>'
        + '<p class="section02__item-beer-txt"><span>' + prefecturesJa + '</span></p>'
        + '<dl class="section02__item-beer-detail">'
        + '<div class="section02__item-beer-group section02__item-beer-necessary">'
        + '<dt class="section02__item-beer-term">用意するもの</dt>'
        + '<dd class="section02__item-beer-menu">' 
        + '<ul class="section02__item-necessary-outer">'
        + necessaryList
        + '</ul>'
        + '</dd>'
        + '</div>'
        + '<div class="section02__item-beer-group section02__item-beer-howto">'
        + '<dt class="section02__item-beer-term">つくり方</dt>'
        + '<dd class="section02__item-beer-menu">'
        + '<ul class="section02__item-howto-outer">'
        + howtoList
        + '</ul>'
        + note
        + '</dd>'
        + '</div>'
        + '</dl>'
        + '</div>'
        + '</li>';
  
        var regionsId = '#section02__' + regions;
        $(regionsId + ' .section02__list-beer').append(categoryItem);
  
        modalItem += ''
        + '<li class="section02__remodal-item">'
        + '<div class="section02__remodal-inner">'
        + '<p class="section02__remodal-img"><picture><source media="(max-width: 767px)" srcset="/beer/beerball/asset/image/jimoto/bnr/img-bnr-' + prefecturesEn + '.webp"><img src="/beer/beerball/asset/image/jimoto/bnr/img-bnr-' + prefecturesEn + '.jpg" alt="' + caption + '" loading="lazy"></picture></p>'
        + '<dl class="section02__remodal-detail">'
        + '<div class="section02__remodal-group section02__remodal-necessary">'
        + '<dt class="section02__remodal-term">用意するもの</dt>'
        + '<dd class="section02__remodal-menu">'
        + '<ul class="section02__item-necessary-outer">'
        + necessaryList
        + '</ul>'
        + '</dd>'
        + '</div>'
        + '<div class="section02__remodal-group section02__remodal-howto">'
        + '<dt class="section02__remodal-term">つくり方</dt>'
        + '<dd class="section02__remodal-menu">'
        + '<ul class="section02__item-howto-outer">'
        + howtoList
        + '</ul>'
        + note
        + '</dd>'
        + '</div>'
        + '</dl>'
        + '</div>'
        + '</li>';

  
        var listItem = '<li class="section02__slider-item"><a href="#jimoto-bb-modal" data-slick-index="' + order + '"><picture><source media="(max-width: 767px)" srcset="/beer/beerball/asset/image/jimoto/bnr/img-bnr-' + prefecturesEn + '.webp"><img src="/beer/beerball/asset/image/jimoto/bnr/img-bnr-' + prefecturesEn + '.jpg" alt="' + caption + '"></picture></a></li>';
  
        if(i < 16) {
          $('.section02__slider--top .section02__slider-list').append(listItem);
        } else if (i < 32) {
          $('.section02__slider--middle .section02__slider-list').append(listItem);
        } else {
          $('.section02__slider--bottom .section02__slider-list').append(listItem);
        }

        var panelItem = '<li class="section01__list-panel"><picture><source media="(max-width: 767px)" srcset="/beer/beerball/asset/image/jimoto/panel/img-panel-' + prefecturesEn + '-sp.webp"><img src="/beer/beerball/asset/image/jimoto/panel/img-panel-' + prefecturesEn + '-sp.png" alt="" loading="lazy"></picture></li>';
        $('.section01__list').append(panelItem);

        var glassItem = '<li class="section03__slider-glass"><picture><source media="(max-width: 767px)" srcset="/beer/beerball/asset/image/jimoto/glass/img-glass-' + prefecturesEn + '-sp.webp"><img src="/beer/beerball/asset/image/jimoto/glass/img-glass-' + prefecturesEn + '-sp.png" alt="" loading="lazy"></picture></li>';
        $('.section03__slider').append(glassItem);
      }
      $('.section02__remodal-slider').append(modalItem);
    });
  }
  displayJson();

  function sliderIconHead() {
    $('.top-mv .top-mv__slider-head').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
      slidesToShow: 4,
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      accessibility: false
    });
  }

  function sliderIconFoot() {
    $('.top-mv .top-mv__slider-foot').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
      slidesToShow: 4,
      swipe: false,
      arrows: false,
      rtl: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      accessibility: false
    });
  }

  function sliderMiddle(e) {
    $('.section02__slider--middle .section02__slider-list').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
      slidesToShow: e,
      swipe: false,
      arrows: false,
      rtl: true,
      pauseOnFocus: false,
      pauseOnHover: false
    });
  }

  function sliderTop(e) {
    $('.section02__slider--top .section02__slider-list').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
      slidesToShow: e,
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false
    });
  }


  function sliderBottom(e) {
    $('.section02__slider--bottom .section02__slider-list').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
      slidesToShow: e,
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false
    });
  }

  function sliderPanel(e) {
    $('.section01 .section01__list').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
      slidesToShow: e,
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      accessibility: false
    });
  }

  function sliderGlass(e) {
    $('.section03 .section03__slider').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
      slidesToShow: e,
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      accessibility: false
    });
  }


  $(function () {

    $('.section02__category-tab button').on('click', function(){
      $(this).closest('.section02__category-tab').toggleClass('section02__category-tab--open');
      $(this).closest('.section02__category-tab').next().slideToggle();
    });

    var slider = $('#section02__remodal-slider');
      slider.css('opacity',0);
      slider.animate({'z-index':1},100,function(){
      slider.addClass('clicked');
      slider.slick({
      autoplay: false,
      adaptiveHeight: true,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      slidesToShow: 1
    });
    });

  });

  $(window).on('load', function(){

    $('.top-mv__slider-head,.top-mv__slider-foot,.section01__list,.section02__menu-slider,.section03__slider').show();
    if(windowWidth <= 768) {
      sliderIconHead();
      sliderIconFoot();
      sliderMiddle(3);
      sliderTop(3);
      sliderBottom(3);
      sliderPanel(10);
      sliderGlass(3);
    } else {
      sliderMiddle(4);
      sliderTop(4);
      sliderBottom(4);
      sliderPanel(36);
      sliderGlass(12);
    }
    

    $('.section02__slider-item a').on('click', function(){
      var slickIndex = $(this).data('slick-index');
      var slider = $('#section02__remodal-slider');
      if(!(slider.hasClass('clicked'))) {
        slider.css('opacity',0);
        slider.animate({'z-index':1},100,function(){
        slider.addClass('clicked');
        slider.slick({
        autoplay: false,
        adaptiveHeight: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        slidesToShow: 1
      });
        $('.section02__remodal-slider').slick('slickGoTo', slickIndex, true);
      });
      } else {
        $('.section02__remodal-slider').slick('slickGoTo', slickIndex, true);
        slider.css('opacity',0);
        slider.animate({'z-index':1},100,function(){
        slider.addClass('clicked');
        $('.section02__remodal-slider').slick('slickGoTo', slickIndex, true);
      });
      }

    });
    
  });

})();