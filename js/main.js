$(document).ready(function() {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn  = $('.modal__close');
    modalBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    })
    closeBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    })
    $(document).keyup(function(event) {
        if (event.which == "27") {
          $(".modal").removeClass("modal--visible");
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
    
    new WOW().init()

    $('.modal__form').validate({
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
            userEmail: {
              required: "Обязательно укажите email",
              email: "Введите корректный email"
            }
          }
    });
    
    $('.control__form').validate({
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
            userEmail: {
              required: "Обязательно укажите email",
              email: "Введите корректный email"
            }
          }
    });
    $('.footer__form').validate({
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
            }
          }
    });

    $('[type=tel]').mask('+7(000) 000-00-00',{placeholder: "+7(___) ___-__-__"});
});
/*
document.addEventListener("DOMContentLoaded", function(event) { 
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
});*/
