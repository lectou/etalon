$(document).ready(function(){

  new WOW().init();

  //Smooth Scrolling
  $("a.scrollto").click(function () {
    var elementClick = '#'+$(this).attr("href").split("#")[1]
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });

  //Animation of hamburger
  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
      }, false);
    });
  }

  //Button up
  $(window).scroll(function(){
    if($(this).scrollTop() > $(this).height()){
      $('.top').addClass('top__active');
    }else{
      $('.top').removeClass('top__active');
    }
  });

  /*
   * Article and News Widget 
   */

   bindNewsModeBtn();
   function bindNewsModeBtn() {
    // body...
    $('.get-more-news').on('click', function () {
      removeOpenedClass();
      $(this).addClass('opened');
      bindCloseOpened();
      if($(window).width() > 992){
        var conCont = $('.bottom-container');
      }else{
        var conCont = $(this).parent().parent().parent().find('.news-bottom-container');
      }
      clearAjaxData();
      conCont.append($('.tmp-ajax-data-news').html());
      $('.bottom-container .news_articles-block').addClass('col-lg-6');
      bindCloseAjaxBtn();
    });
  }

  bindArticlesModeBtn();
  function bindArticlesModeBtn() {
    $('.get-more-articles').on('click', function () {
      removeOpenedClass();
      $(this).addClass('opened');
      bindCloseOpened();
      if($(window).width() > 992){
        var conCont = $('.bottom-container');
      }else{
        var conCont = $(this).parent().parent().parent().find('.articles-bottom-container');
      }
      clearAjaxData();
      conCont.append($('.tmp-ajax-data-articles').html());
      $('.bottom-container .news_articles-block').addClass('col-lg-6');
      bindCloseAjaxBtn();
    });
  }

  bindCloseOpened();
  function bindCloseOpened() {
    $('.btn-read-more.opened').on('click', function () {
      console.log('Click to Opened');
      removeOpenedClass();
      clearAjaxData();
      bindArticlesModeBtn();
      bindNewsModeBtn();
    });
  }
  

  function removeOpenedClass() {
    $('.btn-read-more.opened').removeClass('opened');
  }

  bindCloseAjaxBtn();
  function bindCloseAjaxBtn() {
    $('.close-ajax-data').on('click', function () {
      console.log('click');
      $(this).each(function () {
        clearAjaxData();
      });
    });
  }

  function clearAjaxData() {
    $('.bottom-container, .news-bottom-container, .articles-bottom-container').html("");
  }

  /*
   * Animate ScrollTop
   */
   $('.top').click(function(){
    $('html, body').stop().animate({scrollTop:0},"slow","swing");
  });

  //Animation hamburger
  $(".hamburger").click(function(){
    $("#Hamburger-menu").slideToggle();
    $("#overlay").slideToggle();
  });

  //Activation hamburger-menu
  $('#Hamburger-menu #hamburger__sidebar li a').click(function(){
    $("#Hamburger-menu").slideUp();
    $("#overlay").slideUp();
    $('.hamburger').removeClass('is-active');
  });

  $("#overlay").on('click', function(){
    $("#Hamburger-menu").slideUp();
    $('.hamburger').removeClass('is-active');
    $(this).slideUp();
  });

  $our_production__item = $('.our_production__item')
  $our_production__item.matchHeight(
  {
    byRow: true,
    property: 'height',
      // target: null,
      remove: false
    }
    );

  $mechanism_item_h3 = $('.mechanism-item h3')
  $mechanism_item_h3.matchHeight(
  {
    byRow: true,
    property: 'height',
      // target: null,
      remove: false
    }
    );

  $effective_means_item_text = $('.block-landing-effective-means .effective-means-item .effective-means-item__text')
  $effective_means_item_text.matchHeight(
  {
    byRow: true,
    property: 'height',
      // target: null,
      remove: false
    }
    );

  $preparat_info_check = $('.block-landing-simplicity .preparat-info-block')
  $preparat_info_check.matchHeight(
  {
    byRow: true,
    property: 'height',
      // target: null,
      remove: false
    }
    );

  var articleHeads = $('.article-content h3')
  indexContainer = $('.article-index-list ul');

  articleHeads.each(function (index) {
    var thisText = $(this).text(),
    thisId = 'anch-' + (index + 1);
    $(this).attr('id', thisId);
    indexContainer.append('<li><a href="#' + thisId + '" class="scrollto">' + thisText + '</a></li>');
  });

  //Animation hamburger menu
  $(function() {
    $(".our_production__item").animated("animated fadeInUp", "fadeInUp");
    $(".news_articles-block").animated("animated fadeInUp", "fadeInUp");
    $(".feedback_doctors .feedback_doctors__item").animated("animated fadeInUp", "fadeInUp");
    $(".block-our-licenses .license-list .license-photo").animated("animated fadeInUp", "fadeInUp");
    $('.block-our-partners .partner-logo:nth-child(4n+1)').css('animation-delay', '0.3s').animated("animated fadeInLeft", "fadeInLeft");
    $('.block-our-partners .partner-logo:nth-child(4n+2)').css('animation-delay', '0.1s').animated("animated fadeInLeft", "fadeInLeft");
    $('.block-our-partners .partner-logo:nth-child(4n+3)').css('animation-delay', '0.1s').animated("animated fadeInRight", "fadeInRight");
    $('.block-our-partners .partner-logo:nth-child(4n+4)').css('animation-delay', '0.3s').animated("animated fadeInRight", "fadeInRight");
    $('.our_production .company-cooperation .preparat-info li').animated("animated fadeInRight", "fadeInRight", "fadeInRight");
    $('.contact-info-block .block-content p').animated("animated fadeInUp", "fadeInUp");
    $('.article-index-inner .article-index-title').animated('active','active');
    $('.our_production__item h3').animated('active','active');
    $('.news_articles-block h3').animated('active', 'active');
    $('.feedback_doctors .feedback_doctors__item .doctor-info__position').animated('active', 'active');
    $('.patients-results .patient-location').animated('active', 'active');
    $('.page-content h3').animated('active', 'active');
    $('.preparat-slider__item-info .preparat-info li').animated('fadeInRight', 'fadeInRight');
    $('.drug-performance .performance-points-item').animated('fadeInUp', 'fadeInUp');
    $('.main-components-points li').animated('fadeInRight', 'fadeInRight');
    $('.aplication .aplication-item').animated('fadeInUp', 'fadeInUp');
    $('.steps .steps-iteration li').animated('fadeInRight', 'fadeInRight');
    $('.mechanism .mechanism-item').animated('fadeInUp', 'fadeInUp');
    $('h3.underscore-blue').animated('active', 'active');
    $('.preparat-info li').animated('fadeInRight', 'fadeInRight');
    $('.preparat-info-list li').animated('fadeInRight', 'fadeInRight');
    $('.preparat-info-check li').animated('fadeInRight', 'fadeInRight');
  });

  //Maskedinput
  //$("#tel").mask("+7 (999) 999-99-99");

  //Validating and sending form data
  $('[data-submit]').on('click', function(){
      // e.preventDefault();
      $(this).parent('form').submit();
    })
  $.validator.addMethod(
    "regex",
    function(value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    "Please check your input."
    );
  function valEl(el){
   el.validate({
    rules:{
      tel:{
        required:true,
        regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
      },
      name:{
        required:true
      },
      email:{
        required:true,
        email:true
      }
    },
    submitHandler: function (form) {
      $('#loader').fadeIn();
      var $form = $(form);
      var $formId = $(form).attr('id'),
      f = $form[0],
      fd = new FormData(f);
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: fd,
        processData: false,
        contentType: false
      })
      .always(function (response) {
        setTimeout(function (){
          $('#loader').fadeOut();
        },1500);
        setTimeout(function (){
          $('#overlay_1').fadeIn();
        },1100);
        setTimeout(function (){
          $('#exampleModalLong').modal('hide');
          $('.consultation-modal .modal-body form label span.file_caption').html('Добавить фотографию');
          $form.trigger('reset');
        },10);
        $('#overlay_1').on('click', function(e) {
          $('#overlay_1').fadeOut();
        });
      });
    }
  })
 }
 $('.js-form').each(function() {
  valEl($(this));
});

  //Preparat slider settings
  $('.preparat-slider-sell').slick({
    infinite: true,
    arrows: false,
    dots: true,
    customPaging : function(slider, i) {
      var pager_text = $(slider.$slides[i]).find('.sell-block-title').text();
      return '<a>'+pager_text+'</a>';
    },
    appendDots: $('#sell-pager'),
    slidesToShow: 1,
    slidesToScroll: 1,
    edgeFriction: 0.0015,
    initialSlide: 0,
    draggable: true,
    scrolling: false,
    swiping: true,
    swipe: true
  });

  // On before slide change
  $('.preparat-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    setMapBlockTitle($('.slick-active h1').text())
  });

  // On slider init
  $('.preparat-slider').on('init', function(event, slick, currentSlide, nextSlide) {
    setMapBlockTitle($('.slick-active h1').text())
  });

  //Preparat slider settings
  $('.slider').slick({
    infinite: false,
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    edgeFriction: 0.0015,
    initialSlide: 0,
    draggable: true,
    scrolling: true,
    swiping: true,
    swipe: true,
    prevArrow: "<img src='img/Стрелочка влево.png' class='prev'>",
    nextArrow: "<img src='img/Стрелочка вправо.png' class='next'>",
    responsive: [
    {
     breakpoint: 1200,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 1,
     }
   },
   {
     breakpoint: 1000,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       rows:2
     }
   },
   {
     breakpoint: 768,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       rows:2
     }
   }
   ]
 });

  function setMapBlockTitle(titleText) {
    $('#name').text(titleText);
  }

  //Scrolling slider
  var elem = document.getElementById('preparat-slider');
  if(elem){
    if (elem.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", onWheel);
      } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", onWheel);
      } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
      }
    } else { // IE8-
      elem.attachEvent("onmousewheel", onWheel);
    }
  }

  super_button ();
  function super_button () {
    setInterval(function(){
      $('.super-btn .btn-body').addClass('blink_on');
      setTimeout(function(){$('.super-btn .btn-body').removeClass('blink_on')},1500);
    },2000);
    // super_button();
  }

  function onWheel(e) {
    e = e || window.event;

    // wheelDelta не дает возможность узнать количество пикселей
    var delta = e.deltaY || e.detail || e.wheelDelta;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    if (delta == -100 || delta == -110.41666412353516 || delta == -3){
      $('.preparat-slider').slick('slickPrev');
    } else if(delta == 100 || delta == 110.41666412353516 || delta == 3) {
      $('.preparat-slider').slick('slickNext');
    }
  }

  $('.recommend_img').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
        // preload: [0, 1]
      },

      callbacks: {
        beforeOpen: function() {
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },

    //   zoom: {
    //     enabled: true,
    //   duration: 300, // don't foget to change the duration also in CSS
    //   opener: function(element) {
    //     return element.find('img');
    //   }
    // },

      // delegate: 'a',

      fixedBgPos: true,
      //navigateByImgClick: true,

      //overflowY: 'auto',

      closeBtnInside: false,
      preloader: true,

      midClick: true,
      removalDelay: 300,
    });

  $('.slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
        // preload: [0, 1]
      },

      callbacks: {
        beforeOpen: function() {
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },

      // delegate: 'a',

      fixedBgPos: true,
      //navigateByImgClick: true,

      //overflowY: 'auto',

      closeBtnInside: false,
      preloader: true,

      midClick: true,
      removalDelay: 300,
    });

  $('#objects').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
        // preload: [0, 1]
      },

      callbacks: {
        beforeOpen: function() {
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },

      // delegate: 'a',

      fixedBgPos: true,
      //navigateByImgClick: true,

      //overflowY: 'auto',

      closeBtnInside: false,
      preloader: true,

      midClick: true,
      removalDelay: 300,
    });


  //Youtube video
  $(function() {
    $(".youtube").each(function() {
      // Based on the YouTube ID, we can easily find the thumbnail image
      // $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

      // Overlay the Play icon to make it look like a video player
      $(this).append($('<div/>', {'class': 'play'}));

      $(document).delegate('#'+this.id, 'click', function() {
          // Create an iFrame with autoplay set to true
          var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
          if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

          // The height and width of the iFrame should be the same as parent
          var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

          // Replace the YouTube thumbnail with YouTube HTML5 Player
          $(this).replaceWith(iframe);
        });
    });
  });

  $(document).on('click', '#sell-pager .slick-dots li', function() {
    $('#name').text($(this).text());
    $this.addClass('active');
  });

  $(document).on('click', '.main__btn', function(event) {
    event.preventDefault();
    var id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 1000);
  });

  /*--- Pharmacy ---*/
  $(document).on('click', '.pharmacy__tabs li', function() {
    var $this  = $(this),
    $index = $this.index();
    if ($this.hasClass('active')) return false;
    else {
      $('.pharmacy__tabs .active').removeClass('active');
      $this.addClass('active');
      $('.pharmacy__info > .active').stop().fadeOut(300, function() {
        $(this).removeClass('active');
        $('.pharmacy__info > li').eq($index).stop().fadeIn(300, function() {
          $(this).addClass('active');
        });
      });
    }
  });

  $(document).on('click', '.pharmacy__type a', function(event) {
    event.preventDefault();
    var $this = $(this),
    id    = $this.attr('href');
    if ($this.hasClass('active')) return false;
    else {
      $('.pharmacy__type .active').removeClass('active');
      $this.addClass('active');
      $('.visible').stop().fadeOut(300, function() {
        $(this).removeClass('visible');
        $(id).stop().fadeIn(300, function() {
          $(this).addClass('visible');
        });
      });
    }
  });

  

  function ajaxTable() {

    $.ajax({
      url: './data.json',
      dataType: "json",
      success: function (data) {
        if (data['error']) {
          alert(data['error']);
        }
        else {
          var city = $('.pharmacy__city').val();
          var $length = data[city].points.features.length,
          content = '<tr>' +
          '<th class="pharmacy__name">Название аптеки</th>' +
          '<th>Адрес</th>' +
          '<th class="pharmacy__metro">Метро</th>' +
          '<th class="pharmacy__phones">Телефон</th></tr>';
          for (var i = 0; i < $length; i++) {
            var pharmacyName = data[city].points.features[i].properties.balloonContentHeader,
            pharmacyAddress = data[city].points.features[i].properties.balloonContentBody,
            pharmacyMetro = data[city].points.features[i].properties.metro,
            pharmacyMetroColor = data[city].points.features[i].properties.metroColor,
            pharmacyPhones = data[city].points.features[i].properties.balloonContentFooter;

            if (i < 10) {
              content += '<tr>';
            }
            else {
              content += '<tr class="hidden">';
            }

            content += '<td class="pharmacy__name">' + pharmacyName + '</td>';
            content += '<td>' + pharmacyAddress + '</td>';

            if (pharmacyMetro) {
              content += '<td class="pharmacy__metro"><p><img' +
              ' src="img/' + pharmacyMetroColor + '.png" alt="">' + pharmacyMetro + '</p></td>';
            }
            else {
              content += '<td></td>';
            }

            content += '<td class="pharmacy__phones"><p>' + pharmacyPhones + '</p></td></tr>';
          }
          $('#pharmacy__table table').html(content);
        }
      }
    });
  }

  if ($('body.sell-page').length) {
    ajaxTable();
    var myMap;
    ymaps.ready(init);
  }

  function init () {

    $.ajax({
      url: './data.json',
      dataType: "json",
      success: function (data) {
        if (data['error']) {
          alert(data['error']);
        }
        else {
          var city = $('.pharmacy__city').val(),
          objectManager = new ymaps.ObjectManager({
            gridSize: 32,
            clusterize: true,
            clusterDisableClickZoom: true
          });
          myMap = new ymaps.Map('map', {
            center: data[city].center,
            zoom: 10,
          });

          objectManager.objects.options.set('preset', 'islands#greenDotIcon');
          objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
          myMap.behaviors.disable(['rightMouseButtonMagnifier', 'scrollZoom']);
          myMap.geoObjects.add(objectManager);
          objectManager.add(data[city].points);
        }
      },
    });
  }

  $(document).on('change', '.pharmacy__city', function() {
    var $val = $(this).val();
    if ($val == '') return false;
    else {
      ajaxTable();
      myMap.destroy();
      init ();
    }
  });

  $(document).on('click', '.more', function(event) {
    event.preventDefault();
    $('.pharmacy__table .hidden').each(function(index, el) {
      if (index >= 10) return false;
      else $(this).fadeIn(300, function() {
        $(this).removeClass('hidden');
      });
    });
  });

  //Upload input
  $(':file').on('change', function() {
    var file_name = this.files[0];
    console.log(file_name.name);
    $('.consultation-modal .modal-body form label span.file_caption').html(file_name.name);
    validate();
  });

  function validate(){
    if($('#orderFile')[0].files.length === 0){
      alert("Нужно добавить фотографию");
      $('#orderFile').focus();
      return false;
    }
  }

});

$(window).on('scroll', function(event) {
  var scrollValue = $(window).scrollTop();
  var ofsetTop = $('.sticky_banner').offset().top;
  var maxTop = (ofsetTop + $('.sticky_banner').outerHeight()) - $('.sidebar-banner').outerHeight();

  if (scrollValue >= ofsetTop && scrollValue < maxTop) {
    $('.sidebar-banner').removeClass('bottom-bosition').addClass('fixed-top');
  }else {
    $('.sidebar-banner').removeClass('fixed-top');
    if (scrollValue > ofsetTop) {
      $('.sidebar-banner').removeClass('fixed-top').addClass('bottom-bosition');
    }
  }

});