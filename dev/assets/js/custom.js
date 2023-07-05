$(document).ready(function () {
	let $navbar = $("#header-navbar");
	let $btnBack2Top = $("#back2top");
	let $navbarLink = $(".nav-link");

	/* кнопка возврата в начало страницы */
	const back2TopOffset = 700;
	const back2TopAnimationDuration = 500;
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
		const scrollTop = $(window).scrollTop();
		$(window).scrollTop() > headerScrollTrigger
			? $navbar.addClass(headerClassOnScroll)
			: $navbar.removeClass(headerClassOnScroll);
		back2Top(scrollTop);

		// Додавання/видалення класу "active" для навігаційних посилань при прокрутці між секціями
		$navbarLink.each(function () {
			const sectionId = $(this).attr("href");
			if (sectionId !== "#" && $(sectionId).length > 0) {
				const sectionOffset = $(sectionId).offset().top;
				const sectionHeight = $(sectionId).outerHeight();

				if (
					scrollTop >= sectionOffset - headerScrollTrigger &&
					scrollTop < sectionOffset + sectionHeight
				) {
					$(this).addClass("active");
				} else {
					$(this).removeClass("active");
				}
			}
		});
	});
	/* добавление класса-модификатора в меню на скрол */

	/* закрытие меню при клике */
	let windowWidth = $(window).width();
	let $navbarToggler = $(".navbar-toggler");
	let $headerNavbarCollapse = $("#header-navbar-collapse");

	$(window).on("resize", () => (windowWidth = $(window).width()));

	$navbarLink.on("click", function () {
		// Додавання класу "active" для навігаційного посилання при кліку
		$navbarLink.removeClass("active");
		$(this).addClass("active");

		if (windowWidth < 992) {
			$navbarToggler.addClass("collapsed");
			$headerNavbarCollapse.removeClass("show");
		}
	});
	/* закрытие меню при клике */

	AOS.init({
		disable: "mobile",
		duration: 600,
		easing: "ease-in-sine",
	});
});
