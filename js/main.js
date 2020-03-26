/*document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn=document.querySelector('.modal__close');
  
  const switchModal = () =>{
      modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element =>{
      element.addEventListener('click', switchModal);
  });
  
  closeBtn.addEventListener('click', switchModal);
  
  document.addEventListener("click", e=>{
      if(e.target==modal){
          modal.classList.remove("modal--visible");
      }
  })
  document.addEventListener("keyup",e =>{
      const key = e.keyCode ;
      if(key===27){
          document.querySelector(".modal").classList.remove("modal--visible");
      }
  })
})*/
$(document).ready(function() {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn  = $('.modal__close'),
        successForm = $('.form__success'),
        modalDialog = $(".modal__dialog"),
        successClose = $('.success__modal__close');
    successClose.on('click', function(){
        successForm.removeClass('form__success--visible');
    })
    modalBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    })
    closeBtn.on('click', function(){
        modal.removeClass('modal--visible');
    })
    $(document).keyup(function(event) {
      if (event.which == "27") {
        $(".modal").removeClass("modal--visible");
      }
    });
    //закрыть на esc
    $(document).on("click", function(event) {
      if (event.target == ".modal") {
        modal.removeClass("modal--visible");
      }
    });
    modal.on("click", function(e) {
      if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0) {
        modal.toggleClass("modal--visible");
      }
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut();
        }
        });
         
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
        });
    var mySwiper = new Swiper ('.swiper-container-1', {
            loop: true,
            pagination: {
                el: '.swiper-pagination-1',
                type: 'bullets',
              },
            navigation: {
                nextEl: '.swiper-button-next-1',
                prevEl: '.swiper-button-prev-1',
              },
        })
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    })
    var next_1 = $('.swiper-button-next-1');
    var prev_1 = $('.swiper-button-prev-1');
    var bullets_1 = $('.swiper-pagination-1');

    next_1.css('left', prev_1.width() + 10 + bullets_1.width() + 10)
    bullets_1.css('left',prev_1.width() + 10)

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    
 
    
    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left',prev.width() + 10)
    var steps = new Swiper(".steps__swiper-container", {
      // Optional parameters
      loop: true,
  
      pagination: {
        el: ".steps__swiper-pagination",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".steps__swiper-button-next",
        prevEl: ".steps__swiper-button-prev"
      }
    });
    var next = $(".steps__swiper-button-next");
    var prev = $(".steps__swiper-button-prev");
    var bullets = $(".steps__swiper-pagination");
  
    next.css("left", prev.width() + 10 + bullets.width() + 10);
    bullets.css("left", prev.width() + 10);
  
    $(".left-item").on("click", function() {
      $(".left-item").removeClass("active");
      $(this).addClass("active");
      const e = $(this).data("index");
      steps[0].slideTo(e);
      steps[1].slideTo(e);
      steps.on("slideChange", function() {
        const e = steps[0].activeIndex - 1;
        if (e === 6) {
          e = 0;
        }
        $(".left-item").removeClass("active");
        $(".left-item")
          .eq(e)
          .addClass("active");
      });
    });
  
    steps[0].on("slideChange", function() {
      let e = steps[0].activeIndex - 1;
      if (e === 6) {
        e = 0;
      }
      $(".left-item").removeClass("active");
      $(".left-item")
        .eq(e)
        .addClass("active");
    });
    new WOW().init()

    $('.modal__form').validate({
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }
            else{  
                error.insertAfter($(element));
            }
        },
        errorElement: "div",
        errorClass:"invalid",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required:true,
                minlength:17
            },
            // правило-обьект(блок)
            userEmail: {
              required: true,
              email: true
            },
            modalPolicyCheckbox: "required"
          },
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя должно быть не короче двух букв",
                maxlength: "Имя должно содержать не более 15 букв"
            },
            userPhone: {
                required:"Заполните поле",
                minlength:"Введите корректный номер телефона"
            },
            userEmail: {
              required: "Обязательно укажите email",
              email: "Введите корректный email"
            },
            modalPolicyCheckbox : {
                required: "Обязательное поле"
            }
          },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function () {
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    successForm.toggleClass('form__success--visible');
                },
            })
        }
    });
    
    $('.control__form').validate({
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }
            else{  
                error.insertAfter($(element));
            }
        },
        errorElement: "div",
        errorClass:"invalid",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required:true,
                minlength:17
            },
            // правило-обьект(блок)
            userEmail: {
              required: true,
              email: true
            },
            controlPolicyCheckbox: "required"
          },
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя должно быть не короче двух букв",
                maxlength: "Имя должно содержать не более 15 букв"
            },
            userPhone: {
                required:"Заполните поле",
                minlength:"Введите корректный номер телефона"
            },
            userEmail: {
              required: "Обязательно укажите email",
              email: "Введите корректный email"
            },
            controlPolicyCheckbox: {
                required: "Обязательное поле"
            }
          },
          submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "control-send.php",
                data: $(form).serialize(),
                success: function () {
                    alert('Форма отправлена.Мы свяжемся с вами через 10 минут.');
                    $(form)[0].reset();
                },
            })
        }
    });
    $('.footer__form').validate({
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }
            else{  
                error.insertAfter($(element));
            }
        },
        errorElement: "div",
        errorClass:"invalid",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required:true,
                minlength:17
            },
            userQuestion:{
                required: true,
                minlength: 5
            },
            footerPolicyCheckbox: {
                required: true
            }
          },
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя должно быть не короче двух букв",
                maxlength: "Имя должно содержать не более 15 букв"
            },
            userPhone: {
                required:"Заполните поле",
                minlength:"Введите корректный номер телефона"
            },
            userQuestion:{
                required: "Заполните поле",
                minlength: "Введите корректный вопрос"
            },
            footerPolicyCheckbox : {
                required: "Обязательное поле"
            }
          },
          submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "footer-send.php",
                data: $(form).serialize(),
                success: function () {
                    alert('Форма отправлена.Мы свяжемся с вами через 10 минут.');
                    $(form)[0].reset();
                },
            })
        }
    });
    $('[type=tel]').mask('+7(000) 000-00-00',{placeholder: "+7(___) ___-__-__"});
var spinner = $('.ymap-container').children('.loader');
var check_if_load = false;
var myMapTemp, myPlacemarkTemp;

function init () {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [55.730138, 37.594238], // координаты центра на карте
      zoom: 7, // коэффициент приближения карты
      controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    var myPlacemarkTemp = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [55.730138, 37.594238] // координаты, где будет размещаться флажок на карте
      }
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
    
    myMapTemp.behaviors.disable('scrollZoom');
    
    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);
  
    // Решение по callback-у для определния полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }
  
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}

function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");

  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом "ymap-container"
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
    
      // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
    
    // Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');

    // Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором "map-yandex"
           ymaps.load(init);
        });                
      }
    }
  );  
}

$(function() {

  //Запускаем основную функцию
  ymap();
})
})

