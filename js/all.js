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
  // var swiper = new Swiper(".swiper-container", {
  //   speed: 600,
  //   loop: false,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev"
  //   }
  // });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 滾動效果
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  // 文章展開/收合
  var spreadBtn = document.querySelectorAll('.job-spread');
  spreadBtn.forEach(btn => btn.addEventListener('click', function (e) {
    var activeSpreadEl = e.target.tagName == 'SPAN' ? e.target.parentElement : e.target;
    var arrowEl = activeSpreadEl.childNodes[1];
    var activeDetailEl = activeSpreadEl.parentNode;//文章El
    var state = activeDetailEl.dataset.state;//狀態
    var coverEl = activeSpreadEl.previousElementSibling;//遮罩
    if (state == 'close') {
      activeSpreadEl.classList.add('job-spread-open');
      arrowEl.classList.add('arrow-open');
      activeDetailEl.classList.add('job-detail-open');
      coverEl.classList.add('job-show');
      activeDetailEl.dataset.state = 'open';
    } else {
      activeSpreadEl.classList.remove('job-spread-open');
      arrowEl.classList.remove('arrow-open');
      activeDetailEl.classList.remove('job-detail-open');
      coverEl.classList.remove('job-show');
      activeDetailEl.dataset.state = 'close';
    }
  }));
})();