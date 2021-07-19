jQuery(document).ready(function ($) {
  const swiper = new Swiper(".header__swiper", {
    slidesPerView: 1,
    // direction: "vertical",
    spaceBetween: 30,
    // effect: "fade",
    pagination: {
      el: ".header .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".header__navigation .swiper-button-next",
      prevEl: ".header__navigation .swiper-button-prev",
    },
  });


  const versionSliders = new Swiper('.version__slider', {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: ".version .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    },
    on: {
      init: function () {
      },
      resize: function () {
      }
    }
  });


  const MediaSwiper = new Swiper('.media-center__swiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: ".media-center__swiper .swiper-button-next",
      prevEl: ".media-center__swiper .swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    },
    on: {
      init: function () {
      },
      resize: function () {
      }
    }
  })

  const MediaSwiperVideo = new Swiper('.media-center__swiper__video', {
    slidesPerView: 5,
    spaceBetween: 10,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".media-center__swiper__video .swiper-button-next",
      prevEl: ".media-center__swiper__video .swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    },
    on: {
      init: function () {
      },
      resize: function () {
      }
    }
  });


  const sliderSelectors = ['.partners__swiper', '.partners-2__swiper', '.sponsor__swiper', '.sponsor-2__swiper']

  sliderSelectors.forEach(selector => {
    const slide = new Swiper(selector, {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: selector + "__controls .swiper-button-next",
        prevEl: selector + "__controls .swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 991px
        991: {
          slidesPerView: 3,
          spaceBetween: 20
        },
      },
      on: {
        init: function () {
        },
        resize: function () {
        }
      }
    })
  })

  // REMOVE SPINNER
  setTimeout(() => {
    $('.loader').fadeOut('slow');
  }, 1000)


  // SEARCH FUNCTIONALITY
  $('#openSearchBtn').on('click', () => {
    $('.header__nav__search__form').addClass('header__nav__search__form--active');
    // $('body').addClass('backdrop');
  })


  $(document).on("click", function (event) {
    const ignore = ['.header__nav__search', '#openSearchBtn', '#openSearchBtnWithMobile'];
    // var $trigger = $(".header__nav__search");
    // var $trigger2 = $("#openSearchBtn");
    // var $trigger3 = $('#openSearchBtnWithMobile')

    if ($(event.target).closest(ignore.join(',')).length === 0) {
      $('.header__nav__search').hide();
      $('body').removeClass('backdrop');
    }
  });

  $('#openSearchBtnWithMobile').on('click', (event) => {
    topFunction();
    event.preventDefault();
    $('.header__nav__search').show().css('bottom', '-85px')
    $('body').addClass('backdrop');
  })

  // $('#closeSearchBtn').on('click', () => {
  //   $('.header__nav__search').toggle();
  //   $('body').removeClass('backdrop');
  // })

  const topButton = document.getElementById("gotToTopButton");
  const headerNav = document.querySelector(".header__mobile-nav");
  topButton.addEventListener('click', topFunction)

  window.onscroll = function () { scrollFunction(topButton, headerNav) };

  mobileNavMenuRender();


  let isAdvancedSearchOpened = false;
  $('#advancedSearch').on('click', (e) => {
    e.preventDefault();
    isAdvancedSearchOpened = !isAdvancedSearchOpened;


    if (isAdvancedSearchOpened) {
      e.target.innerHTML = '- بحث عادي';
      $('#advancedSearchContainer').fadeIn('slow');
    } else {
      e.target.innerHTML = '+ بحث متقدم';
      $('#advancedSearchContainer').fadeOut('slow');
    }
  })


  /***********************************/
  $('#FAQAccordion').collapse({
    toggle: false
  })

  $('#FAQAccordion').on('hidden.bs.collapse', function (event) {
    console.log(event)
  })

});


function changeEventContainerPosition(){
  var element_position = $('#footer').offset().top;
  var screen_height = $(window).height();
  var activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
  var activation_point = element_position - (screen_height * activation_offset);
  var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer
  var y_scroll_pos = window.pageYOffset;

  var element_in_view = y_scroll_pos > activation_point;
  var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

  if(element_in_view || has_reached_bottom_of_page) {
      //Do something
      $('.event-details__container').css('bottom', '450px')
  }
}

function scrollFunction(topButton, headerNav) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
    headerNav.style.top = '0px';
  } else {
    topButton.style.display = "none";
    // headerNav.style.top = '60px';
  }

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    $('.event-details__container').css('bottom', '50px');
    changeEventContainerPosition()
  }else {
    $('.event-details__container').css('bottom', '-250px')
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mobileNavMenuRender() {
  const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
  const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		رجوع
	</a>
</li>`

  navExpand.forEach(item => {
    item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
    item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
    item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
  })


  // ---------------------------------------
  // not-so-important stuff starts here

  const openMenuBtn = document.getElementById('openMenu');
  const closeMenuBtn = document.getElementById('closeMenu');

  openMenuBtn.addEventListener('click', function () {
    $('.header__mobile').fadeIn('slow')
  })

  closeMenuBtn.addEventListener('click', function () {
    $('.header__mobile').fadeOut('slow')
  })
}


