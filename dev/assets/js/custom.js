const toggler = document.querySelector(".navbar-toggler");
const collaps = document.querySelector(".navbar-collapse");

window.addEventListener("resize", function () {
  if (window.innerWidth > 992) {
    if (collaps.classList.contains("show")) {
      collaps.classList.remove("show");
    }

    toggler.setAttribute("aria-expanded", "false");
    toggler.classList.add("collapsed");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 575) {
    addClasses();
  } else {
    removeClasses();
  }
});

function addClasses() {
  let ulElements = document.getElementsByTagName("ul");
  for (let i = 0; i < ulElements.length; i++) {
    ulElements[i].classList.add("dropdown-menu");
    let liElements = ulElements[i].getElementsByTagName("li");
    for (let j = 0; j < liElements.length; j++) {
      liElements[j].classList.add("dropdown-item");
    }
  }
}

function removeClasses() {
  let ulElements = document.getElementsByTagName("ul");
  for (let i = 0; i < ulElements.length; i++) {
    ulElements[i].classList.remove("dropdown-menu");
    let liElements = ulElements[i].getElementsByTagName("li");
    for (let j = 0; j < liElements.length; j++) {
      liElements[j].classList.remove("dropdown-item");
    }
  }
}

(function ($) {
  let $navbar = $("#header-navbar");
  let $btnBack2Top = $("#back2top");

  /* кнопка возврата в начало страницы */
  const back2TopOffset = 700;
  const back2TopAnimationDuration = 200;
  const back2TopAnimationFunction = "swing";
  const back2Top = (pos) =>
    pos >= back2TopOffset
      ? $btnBack2Top.fadeIn(500)
      : $btnBack2Top.fadeOut(500);

  $btnBack2Top.on("click", () => {
    $("html").animate(
      {
        scrollTop: 0,
      },
      back2TopAnimationDuration,
      back2TopAnimationFunction
    );
    return false;
  });
  /* кнопка возврата в начало страницы */

  /* добавление класса-модификатора в меню на скрол */
  const headerClassOnScroll = "header-navbar--scrolled";
  const headerScrollTrigger = 100;

  $(window).on("scroll", () => {
    $(window).scrollTop() > headerScrollTrigger
      ? $navbar.addClass(headerClassOnScroll)
      : $navbar.removeClass(headerClassOnScroll);
    back2Top($(window).scrollTop());
  });
  /* добавление класса-модификатора в меню на скрол */

  /* подключение и настройка внутристраничной навигации */
  $navbar.onePageNav({
    currentClass: "active",
    scrollSpeed: 150,
    easing: "swing",
    filter: ":not(.navbar-brand)",
  });
  /* подключение и настройка внутристраничной навигации */

  /* подключение и настрока плагина анимации */
  AOS.init({
    disable: "mobile",
    duration: 600,
    easing: "ease-in-sine",
  });
  /* подключение и настрока плагина анимации */
})(jQuery);
