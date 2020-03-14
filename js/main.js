/*
document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn=document.querySelector('.modal__close');
    
    const switchModal = () =>{
        modal.classList.toggle('modal--visible');
    }
    /*
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
});
*/
$(document).ready(function() {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn  = $('.modal__close'),
        closeByTouch = $('.modal__dialog');
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
});