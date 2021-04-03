(function () {
  // 打字機
  var typed = new Typed("#typed", {
    strings: ["Welcome my resume.", "I want to be a Frontend.", "I am a persistent person."],
    startDelay: 300,
    backSpeed: 30,
    backDelay: 500,
    typeSpeed: 50,
    loop: true
  });
  // 幻燈片
  var swiper = new Swiper(".swiper-container", {
    speed: 600, loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
})();