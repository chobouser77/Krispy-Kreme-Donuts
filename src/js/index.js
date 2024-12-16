$(document).ready(function (){
  if ($(window).width() <= 768) {
    var moswiper = new Swiper(".s2-br-mo", {
      slidesPerView: "auto",
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".swp1",
        clickable: true,
        type: 'bullets',
      },
    });
    var moswiper2 = new Swiper(".s3-mo-sw", {
      slidesPerView: "auto",
      spaceBetween: 30,
      centeredSlides: true,
    });
    var moswiper3 = new Swiper(".s4-mo", {
      slidesPerView: "auto",
      spaceBetween: 300,
      centeredSlides: true,
    });  
  }

  var swiper1 = new Swiper(".s5swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swp2",
      clickable: true,
      type: 'bullets',
    },
    loop: true,
  });
  function opscroll() {
    const opani = $('[data-ani="opacity"]');
    const windowHeight = window.innerHeight; // windowHeight를 정의해야 합니다.
  
    opani.each(function() {
      var rect = this.getBoundingClientRect();
  
      // 요소의 상단이 화면 중간에 도달하면 'animate' 클래스 추가
      if (rect.top <= windowHeight / 2) {
        $(this).addClass('animate');
      } else {
        $(this).removeClass('animate');
      }
    });
  }
  $(window).on('scroll', opscroll);
  $(document).ready(function() {
    opscroll();
  });  
});