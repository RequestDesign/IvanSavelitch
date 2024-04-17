import 'inputmask';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

window.$ = window.jQuery = require('jquery');

import { rem } from '../utils/constants';
export const modules = {};

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  if (document.querySelector('.main-home')) {
    animateHeader();
    mainHeroSwiper();
    mainHeroAnim();
    aboutOurfarmFavorite() 
    latestNewsSwiper() 
    if (window.innerWidth > 767) {
      let executedFunctions = {};

      new fullpage('#fullpage', {
        scrollingSpeed: 1500,
        scrollOverflow: false,
        fitToSection: false,
        // afterLoad
        // onLeave
        onLeave: function (origin, destination, direction, trigger) {
          if (
            !executedFunctions[destination.anchor] &&
            destination.anchor == 'catalog-block' &&
            direction == 'down'
          ) {
            catalogBannerAnimation(duration);
            executedFunctions[destination.anchor] = true;
          }
          if (
            !executedFunctions[destination.anchor] &&
            destination.anchor == 'love' &&
            direction == 'down'
          ) {
            loveAnimation(duration);
            executedFunctions[destination.anchor] = true;
          }

          if (
            !executedFunctions[destination.anchor] &&
            destination.anchor == 'about-our-farm' &&
            direction == 'down'
          ) {
            aboutOurFarmAnim(duration);
            executedFunctions[destination.anchor] = true;
          }
          if (
            !executedFunctions[destination.anchor] &&
            destination.anchor == 'latest-news' &&
            direction == 'down'
          ) {
            latestNewsAnim(duration);
            executedFunctions[destination.anchor] = true;
          }
          if (
            !executedFunctions[destination.anchor] &&
            destination.anchor == 'footer' &&
            direction == 'down'
          ) {
            animateFooter(duration);
            executedFunctions[destination.anchor] = true;
          }
        }
      });
    } else {
      gsap.to(window, { duration: 0.5, scrollTo: '.header' });
      setTimeout(() => {
        aboutOurFarmAnimMob(duration);
        latestNewsAnimMob(duration);
        animateFooterMob(duration);
      }, 150);
    }
  }
});

let duration = 2.5;

function animateHeader() {
  let header = document.querySelector('.header');
  const nav = header.querySelector('.header__nav');
  const btnBox = header.querySelector('.header__btn-box');
  const logo = header.querySelector('.header__logo');

  const tl = gsap.timeline();

  let duration = 3;

  if (header.classList.contains('header--anim')) {
    nav.style.opacity = 0;
    btnBox.style.opacity = 0;
    logo.style.opacity = 0;
    tl.from(nav, {
      duration: duration,
      ease: 'power2.inOut',
      keyframes: {
        '0%': { y: '-100', opacity: 0 },
        '50%': { y: '5', opacity: 1 },
        '100%': { y: '0' }
      }
    })
      .from(
        btnBox,
        {
          duration: duration,
          ease: 'power2.inOut',
          keyframes: {
            '0%': { y: '-100', opacity: 0 },
            '50%': { y: '5', opacity: 1 },
            '100%': { y: '0' }
          }
        },
        `-=${duration}`
      )
      .from(
        logo,
        {
          duration: duration,
          ease: 'power2.inOut',
          keyframes: {
            '0%': { y: '-100', opacity: 0 },
            '50%': { y: '5', opacity: 1 },
            '100%': { y: '0' }
          }
        },
        `-=${duration}`
      );
  } else if (header.classList.contains('header--main')) {
    nav.style.opacity = 0;
    btnBox.style.opacity = 0;
    tl.from(nav, {
      duration: duration,
      ease: 'power2.inOut',
      keyframes: {
        '0%': { y: '-100', opacity: 0 },
        '50%': { y: '5', opacity: 1 },
        '100%': { y: '0' }
      }
    }).from(
      btnBox,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '-100', opacity: 0 },
          '50%': { y: '5', opacity: 1 },
          '100%': { y: '0' }
        }
      },
      `-=${duration}`
    );
  }
}

// ----------------mainHero-----------------------------
// ----------------mainHero-----------------------------
// ----------------mainHero-----------------------------

function mainHeroSwiper() {
  const favoriteBtns = document.querySelectorAll('.main-hero__favorites-swiper-slide-btn');
  favoriteBtns.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  let speed = 1000;

  const swiperThumb = new Swiper('.main-hero__thumb-swiper ', {
    slidesPerView: 3,
    allowTouchMove: false,
    speed: speed,
    spaceBetween: rem(1.6),
    loop: true,
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperFavorite = new Swiper('.main-hero__favorites-swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperStat = new Swiper('.main-hero__stat-swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperLink = new Swiper('.main-hero__link-swiper ', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperWeight = new Swiper('.main-hero__weight-swiper ', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperTitle = new Swiper('.main-hero__title-swiper ', {
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: rem(1),
    speed: speed,
    loop: true,
    direction: 'vertical',

    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const imgBoxs = document.querySelectorAll('.main-hero__center-swiper-slide-img-box');

  setTimeout(() => {
    imgBoxs.forEach((item) => {
      item.style.transition = 'opacity 0.7s, scale 1s'; // Исправлена опечатка и изменено на 'transform'
    });
  }, 0);

  const swiperCenter = new Swiper('.main-hero__center-swiper ', {
    allowTouchMove: false,
    speed: speed,
    loop: true,
    spaceBetween: rem(2),
    slidesPerView: 1,
    centeredSlides: false,
    breakpoints: {
      768: {
        spaceBetween: rem(48),
        slidesPerView: 2.75,
        centeredSlides: true
      }
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const prevButton = document.querySelector('.main-hero__swiper-btn--prev');
  const nextButton = document.querySelector('.main-hero__swiper-btn--next');
  let isTransitioning = false;
  let activeSlide;
  let prevSlide;
  let nextSlide;

  nextButton.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      activeSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-active .main-hero__center-swiper-slide-img-box'
      );
      prevSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-prev .main-hero__center-swiper-slide-img-box'
      );
      activeSlide.style.transformOrigin = 'left bottom';
      prevSlide.style.transformOrigin = 'center center';

      setTimeout(() => {
        isTransitioning = false;
      }, 1000); // Задержка в 1000 миллисекунд (1 секунда)
    }
  });
  prevButton.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      activeSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-active .main-hero__center-swiper-slide-img-box'
      );
      nextSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-next .main-hero__center-swiper-slide-img-box'
      );

      activeSlide.style.transformOrigin = 'center center';
      nextSlide.style.transformOrigin = 'left bottom';
      setTimeout(() => {
        isTransitioning = false;
      }, 1000); // Задержка в 1000 миллисекунд (1 секунда)
    }
  });
}

function mainHeroAnim() {
  const section = document.querySelector('.main-hero'),
    title = document.querySelector('.main-hero__title'),
    link = document.querySelector('.main-hero__link-swiper-box'),
    favorite = document.querySelector('.main-hero__favorites-swiper-box'),
    center = document.querySelector(
      '.main-hero__center-swiper-slide.swiper-slide-active .main-hero__center-swiper-slide-img-box img'
    ),
    thumbActive = document.querySelector(
      '.main-hero__thumb-swiper-slide .main-hero__thumb-swiper-slide-inner'
    ),
    thumbNext = document.querySelector(
      '.main-hero__thumb-swiper-slide.swiper-slide-next .main-hero__thumb-swiper-slide-inner'
    ),
    thumbNextNext = document.querySelector(
      '.main-hero__thumb-swiper-slide.swiper-slide-next + .swiper-slide .main-hero__thumb-swiper-slide-inner'
    ),
    titleBox = document.querySelector('.main-hero__title-swiper-wrapper-box'),
    swiperBtnBox = document.querySelector('.main-hero__swiper-btn-box'),
    bg = document.querySelector('.main-hero__bg');

  let duration = 3;
  const tl = gsap.timeline();

  tl.from(title, {
    duration: duration,
    ease: 'power2.inOut',
    keyframes: {
      '0%': { scale: '0', opacity: 0 },
      '50%': { scale: '1.05', opacity: 1 },
      '100%': { scale: '1' }
    }
  })
    .from(
      bg,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '-200', y: '400', opacity: 0 },
          '50%': { x: '40', y: '40', opacity: 1 },
          '100%': { x: '0', y: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      link,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { scale: '0', y: '150', opacity: 0 },
          '50%': { scale: '1.05', y: '-5', opacity: 1 },
          '100%': { scale: '1', y: 0 }
        }
      },
      `-=${duration}`
    )
    .from(
      favorite,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '+=400', opacity: 0 },
          '50%': { x: '-5', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      titleBox,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '-=400', opacity: 0 },
          '50%': { x: '+5', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      swiperBtnBox,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '-=400', opacity: 0 },
          '50%': { x: '+5', opacity: 1 },
          '100%': { x: 0 }
        }
      },
      `-=${duration}`
    )
    .from(
      center,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { scale: '0', y: '+=150', x: '+=80', opacity: 0 },
          '50%': { scale: '1.015 ', y: 0, x: 0, opacity: 1 },
          '100%': { scale: '1', y: 0, x: 0 }
        }
      },
      `-=${duration}`
    )
    .from(
      thumbActive,
      {
        duration: 2.8,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '+=150', x: '+=50', opacity: 0 },
          '50%': { y: '-15', x: '0', opacity: 1 },
          '100%': { y: '0', x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      thumbNext,
      {
        duration: 2.9,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '+=150', x: '+=50', opacity: 0 },
          '50%': { y: '-15', x: '0', opacity: 1 },
          '100%': { y: '0', x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      thumbNextNext,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '+=150', x: '+=50', opacity: 0 },
          '50%': { y: '-15', x: '0', opacity: 1 },
          '100%': { y: '0', x: '0' }
        }
      },
      `-=${duration}`
    );
}

// ----------------catalogBannerAnimation-----------------------------
// ----------------catalogBannerAnimation-----------------------------
// ----------------catalogBannerAnimation-----------------------------

function catalogBannerAnimation(duration) {
  const block = document.querySelector('.catalog-block'),
    title = block.querySelector('.catalog-block__title'),
    tagsContainer = block.querySelector('.catalog-block__tags'),
    tags = tagsContainer.querySelectorAll('.catalog-block__tag'),
    slides = block.querySelectorAll('.catalog-block__slide'),
    ease = 'power2.in';

  const timeline = gsap.timeline();

  timeline
    .from(title, {
      duration,
      ease,
      x: -500,
      keyframes: {
        '0%': { x: -500, opacity: 0 },
        '40%': { x: 25, opacity: 1 },
        '100%': { x: 0 }
      }
    })
    .from(
      slides[0],
      {
        duration,
        ease,
        y: 500,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          '40%': { y: -25, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      0
    )
    .from(
      slides[1],
      {
        duration,
        ease,
        y: 500,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          '40%': { y: -30, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      '<'
    )
    .from(
      slides[2],
      {
        duration,
        ease,
        y: 500,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          '40%': { y: -35, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      '<'
    )
    .from(
      slides[3],
      {
        duration,
        ease,
        y: 500,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          '40%': { y: -40, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      '<'
    )
    .from(
      tags[0],
      {
        duration,
        ease,
        x: -200,
        y: -500,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { x: -200, y: -500, opacity: 0, rotateZ: 0 },
          '40%': { x: 10, y: 15, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 }
        }
      },
      0
    )
    .from(
      tags[1],
      {
        duration,
        ease,
        x: -200,
        y: -500,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { x: -100, y: -500, opacity: 0, rotateZ: 0 },
          '40%': { x: 5, y: 15, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[2],
      {
        duration,
        ease,
        y: -500,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { y: -500, opacity: 0, rotateZ: 0 },
          '40%': { y: 10, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 },
          '100%': { y: 0, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[3],
      {
        duration,
        ease,
        y: -200,
        x: -400,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { x: -400, y: -200, opacity: 0, rotateZ: 0 },
          '40%': { x: 15, y: 5, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[4],
      {
        duration,
        ease,
        y: -400,
        x: -200,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { x: -200, y: -400, opacity: 0, rotateZ: 0 },
          '40%': { x: 10, y: 5, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[5],
      {
        duration,
        ease,
        y: -400,
        x: -100,
        opacity: 0,
        rotateZ: 0,
        keyframes: {
          '0%': { x: -100, y: -400, opacity: 0, rotateZ: 0 },
          '40%': { x: 0, y: 10, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 }
        }
      },
      '<'
    );
}
/*const catalogBannerAnimation = () => {
    const block = document.querySelector('.catalog-block'),
      title = block.querySelector('.catalog-block__title'),
      tagsContainer = block.querySelector('.catalog-block__tags'),
      tags = tagsContainer.querySelectorAll('.catalog-block__tag'),
      slides = block.querySelectorAll('.catalog-block__slide'),
      duration = 3,
      ease = 'power2.in';
  
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: 'top center'
      }
    });
  
    scrollToBlock(block, '#catalog-block', duration);
  
    timeline
      .from(title, {
        duration,
        ease,
        x: -500,
        keyframes: {
          '0%': { x: -500, opacity: 0 },
          '40%': { x: 25, opacity: 1 },
          '100%': { x: 0 }
        }
      })
      .from(
        slides[0],
        {
          duration,
          ease,
          y: 500,
          keyframes: {
            '0%': { y: 500, opacity: 0 },
            '40%': { y: -25, opacity: 1 },
            '100%': { y: 0 }
          }
        },
        0
      )
      .from(
        slides[1],
        {
          duration,
          ease,
          y: 500,
          keyframes: {
            '0%': { y: 500, opacity: 0 },
            '40%': { y: -30, opacity: 1 },
            '100%': { y: 0 }
          }
        },
        '<'
      )
      .from(
        slides[2],
        {
          duration,
          ease,
          y: 500,
          keyframes: {
            '0%': { y: 500, opacity: 0 },
            '40%': { y: -35, opacity: 1 },
            '100%': { y: 0 }
          }
        },
        '<'
      )
      .from(
        slides[3],
        {
          duration,
          ease,
          y: 500,
          keyframes: {
            '0%': { y: 500, opacity: 0 },
            '40%': { y: -40, opacity: 1 },
            '100%': { y: 0 }
          }
        },
        '<'
      )
      .from(
        tags[0],
        {
          duration,
          ease,
          x: -200,
          y: -500,
          opacity: 0,
          rotateZ: 0,
          keyframes: {
            '0%': { x: -200, y: -500, opacity: 0, rotateZ: 0 },
            '40%': { x: 10, y: 15, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 },
            '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 }
          }
        },
        0
      )
      .from(
        tags[1],
        {
          duration,
          ease,
          x: -200,
          y: -500,
          opacity: 0,
          rotateZ: 0,
          keyframes: {
            '0%': { x: -100, y: -500, opacity: 0, rotateZ: 0 },
            '40%': { x: 5, y: 15, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 },
            '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 }
          }
        },
        '<'
      )
      .from(
        tags[2],
        {
          duration,
          ease,
          y: -500,
          opacity: 0,
          rotateZ: 0,
          keyframes: {
            '0%': { y: -500, opacity: 0, rotateZ: 0 },
            '40%': { y: 10, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 },
            '100%': { y: 0, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 }
          }
        },
        '<'
      )
      .from(
        tags[3],
        {
          duration,
          ease,
          y: -200,
          x: -400,
          opacity: 0,
          rotateZ: 0,
          keyframes: {
            '0%': { x: -400, y: -200, opacity: 0, rotateZ: 0 },
            '40%': { x: 15, y: 5, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 },
            '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 }
          }
        },
        '<'
      )
      .from(
        tags[4],
        {
          duration,
          ease,
          y: -400,
          x: -200,
          opacity: 0,
          rotateZ: 0,
          keyframes: {
            '0%': { x: -200, y: -400, opacity: 0, rotateZ: 0 },
            '40%': { x: 10, y: 5, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 },
            '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 }
          }
        },
        '<'
      )
      .from(
        tags[5],
        {
          duration,
          ease,
          y: -400,
          x: -100,
          opacity: 0,
          rotateZ: 0,
          keyframes: {
            '0%': { x: -100, y: -400, opacity: 0, rotateZ: 0 },
            '40%': { x: 0, y: 10, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 },
            '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 }
          }
        },
        '<'
      );
  };*/

// ----------------loveAnimation-----------------------------
// ----------------loveAnimation-----------------------------
// ----------------loveAnimation-----------------------------

function loveAnimation(duration) {
  const block = document.querySelector('.love'),
    titleLeft = block.querySelector('.love__title-left'),
    titleRight = block.querySelector('.love__title-right'),
    heart = block.querySelector('.love__heart'),
    mainSlide = block.querySelector('.love__swiper-slide:first-child'),
    slideBackground = block.querySelector('.love__swiper-background'),
    sliderNavigation = block.querySelector('.love__swiper-navigation'),
    tags = block.querySelectorAll('.love__tag'),
    bottomLeft = block.querySelector('.love__bottom-text:first-child'),
    bottomMiddle = block.querySelector('.love__bottom-swiper'),
    bottomRight = block.querySelector('.love__bottom-text:last-child');

  const timeline = gsap.timeline();

  timeline
    .from(titleLeft, {
      x: -1700,
      duration,
      keyframes: {
        '0%': { x: -700 },
        '40%': { x: 25 },
        '100%': { x: 0 }
      }
    })
    .from(
      titleRight,
      {
        x: 1000,
        duration,
        keyframes: {
          '0%': { x: 1000 },
          '40%': { x: -25 },
          '100%': { x: 0 }
        }
      },
      0
    )
    .from(
      heart,
      {
        y: -300,
        opacity: 0,
        scale: 2,
        duration,
        keyframes: {
          '0%': { y: -300, opacity: 0, scale: 2.5 },
          '40%': { y: 25, opacity: 1, scale: 1 },
          '100%': { y: 0, opacity: 1, scale: 1 }
        }
      },
      0
    )
    .from(
      mainSlide,
      {
        y: 100,
        duration,
        keyframes: {
          0: { y: 100 },
          '40%': { y: -15, scale: 1.1 },
          '100%': { y: 0, scale: 1 }
        }
      },
      0
    )
    .from(
      slideBackground,
      {
        y: 100,
        scale: 0.5,
        duration,
        keyframes: {
          '0%': { y: 100, scale: 0.5 },
          '40%': { y: -15, scale: 1 },
          '100%': { y: 0, scale: 1 }
        }
      },
      0
    )
    .from(
      sliderNavigation,
      {
        x: -500,
        duration,
        keyframes: {
          '0%': { x: 500 },
          '40%': { x: -25 },
          '100%': { x: 0 }
        }
      },
      0
    )
    .from(
      tags[0],
      {
        y: -500,
        opacity: 0,
        rotateZ: -31,
        duration,
        keyframes: {
          '0%': { y: -500, opacity: 0, rotateZ: -31 },
          '40%': { y: 10, opacity: 1, rotateZ: 1 },
          '100%': { y: 0, opacity: 1, rotateZ: -1 }
        }
      },
      0
    )
    .from(
      tags[1],
      {
        y: -470,
        opacity: 0,
        rotateZ: -31,
        duration,
        keyframes: {
          '0%': { y: -470, opacity: 0, rotateZ: -31 },
          '40%': { y: 10, opacity: 1, rotateZ: 12 },
          '100%': { y: 0, opacity: 1, rotateZ: 9 }
        }
      },
      0
    )
    .from(
      tags[2],
      {
        y: -440,
        opacity: 0,
        rotateZ: -31,
        duration,
        keyframes: {
          '0%': { y: -440, opacity: 0, rotateZ: -31 },
          '40%': { y: 10, opacity: 1, rotateZ: -8 },
          '100%': { y: 0, opacity: 1, rotateZ: -8 }
        }
      },
      0
    )
    .from(
      bottomLeft,
      {
        y: 100,
        x: -50,
        opacity: 0,
        duration,
        keyframes: {
          '0%': { y: 100, x: -50, opacity: 0 },
          '40%': { y: -10, x: 15, opacity: 1 },
          '100%': { y: 0, x: 0, opacity: 1 }
        }
      },
      0
    )
    .from(
      bottomMiddle,
      {
        y: 100,
        opacity: 0,
        duration,
        keyframes: {
          '0%': { y: 100, opacity: 0 },
          '40%': { y: -10, opacity: 1 },
          '100%': { y: 0, opacity: 1 }
        }
      },
      0
    )
    .from(
      bottomRight,
      {
        y: 100,
        x: 50,
        opacity: 0,
        duration,
        keyframes: {
          '0%': { y: 100, x: 50, opacity: 0 },
          '40%': { y: -10, x: -15, opacity: 1 },
          '100%': { y: 0, x: 0, opacity: 1 }
        }
      },
      0
    );
}

// ----------------aboutOurFarm-----------------------------
// ----------------aboutOurFarm-----------------------------
// ----------------aboutOurFarm-----------------------------

function aboutOurfarmFavorite() {
    const favoriteBtns = document.querySelector('.about-our-farm__content-favorite-btn');
    favoriteBtns.addEventListener('click', () => {
      favoriteBtns.classList.toggle('active');
    });
}

function aboutOurFarmAnim(duration) {
  const title = document.querySelector('.about-our-farm__title'),
    leavesLeft = document.querySelector('.about-our-farm__title-img-box--left'),
    leavesRight = document.querySelector('.about-our-farm__title-img-box--right'),
    list = document.querySelector('.about-our-farm__standard-list'),
    info = document.querySelector('.about-our-farm__content-info-box'),
    num = document.querySelector('.about-our-farm__content-num-box'),
    fav = document.querySelector('.about-our-farm__content-favorite-box'),
    img = document.querySelector('.about-our-farm__img-box'),
    link = document.querySelector('.about-our-farm__link'),
    section = document.querySelector('#about-our-farm');

  gsap
    .timeline()
    .from(title, {
      duration: duration,
      ease: 'power2.inOut',
      keyframes: {
        '0%': { x: '-100', y: '200', opacity: 0 },
        '50%': { x: '0', y: '-15', opacity: 1 },
        '100%': { y: '0', x: '0' }
      }
    })
    .from(
      img,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '150', y: '100', scale: 0.5, opacity: 0 },
          '50%': { y: '0', x: '0', scale: 1.05, opacity: 1 },
          '100%': { y: '0', x: '0', scale: 1 }
        }
      },
      `-=${duration}`
    )
    .from(
      link,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '80', scale: 0.8, opacity: 0 },
          '50%': { x: '0', scale: 1.05, opacity: 1 },
          '100%': { x: '0', scale: 1 }
        }
      },
      `-=${duration}`
    )
    .from(
      list,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '-20', y: '60', opacity: 0 },
          '50%': { x: '15', y: '-6', opacity: 1 },
          '100%': { y: '0', x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      leavesLeft,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '-400', opacity: 0 },
          '50%': { x: '15', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      leavesRight,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '400', opacity: 0 },
          '50%': { x: '15', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      info,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '-300', scale: 0.8, opacity: 0 },
          '50%': { x: '15', scale: 1.05, opacity: 1 },
          '100%': { x: '0', scale: 1 }
        }
      },
      `-=${duration}`
    )
    .from(
      num,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '300', y: '100', scale: 0.8, opacity: 0 },
          '50%': { x: '0', y: '0', scale: 1.05, opacity: 1 },
          '100%': { x: '0', y: '0', scale: 1 }
        }
      },
      `-=${duration}`
    )
    .from(
      fav,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '300', scale: 0.8, opacity: 0 },
          '50%': { x: '15', scale: 1.05, opacity: 1 },
          '100%': { scale: 1, x: '0' }
        }
      },
      `-=${duration}`
    );


}

function aboutOurFarmAnimMob(duration) {
  const title = document.querySelector('.about-our-farm__title'),
    leavesLeft = document.querySelector('.about-our-farm__title-img-box--left'),
    leavesRight = document.querySelector('.about-our-farm__title-img-box--right'),
    list = document.querySelector('.about-our-farm__standard-list'),
    info = document.querySelector('.about-our-farm__content-info-box'),
    num = document.querySelector('.about-our-farm__content-num-box'),
    fav = document.querySelector('.about-our-farm__content-favorite-box'),
    img = document.querySelector('.about-our-farm__img-box'),
    link = document.querySelector('.about-our-farm__link'),
    section = document.querySelector('.about-our-farm');

  let first = true;

  function handleFirstScroll() {
    if (first) {
      gsap.to(window, {
        duration: duration,
        scrollTo: section
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top center'
          }
        })
        .from(title, {
          duration: duration,
          ease: 'power2.inOut',
          keyframes: {
            '0%': { x: '-100', y: '200', opacity: 0 },
            '90%': { x: '0', y: '-15', opacity: 1 },
            '100%': { y: '0', x: '0' }
          }
        })
        .from(
          img,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '150', y: '100', scale: 0.5, opacity: 0 },
              '90%': { y: '0', x: '0', scale: 1.05, opacity: 1 },
              '100%': { y: '0', x: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          link,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '80', scale: 0.8, opacity: 0 },
              '90%': { x: '0', scale: 1.05, opacity: 1 },
              '100%': { x: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          list,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '-20', y: '60', opacity: 0 },
              '90%': { x: '15', y: '-6', opacity: 1 },
              '100%': { y: '0', x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          leavesLeft,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '-400', opacity: 0 },
              '90%': { x: '15', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          leavesRight,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '400', opacity: 0 },
              '90%': { x: '15', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          info,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '-300', scale: 0.8, opacity: 0 },
              '90%': { x: '15', scale: 1.05, opacity: 1 },
              '100%': { x: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          num,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '300', y: '100', scale: 0.8, opacity: 0 },
              '90%': { x: '0', y: '0', scale: 1.05, opacity: 1 },
              '100%': { x: '0', y: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          fav,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '300', scale: 0.8, opacity: 0 },
              '90%': { x: '15', scale: 1.05, opacity: 1 },
              '100%': { scale: 1, x: '0' }
            }
          },
          `-=${duration}`
        );
      first = false;
    }
  }

  ScrollTrigger.matchMedia({
    '(prefers-reduced-motion: no-preference)': function () {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 90%',
        toggleActions: 'play pause resume reverse',
        onEnter: () => handleFirstScroll()
      });
    }
  });
}

// ----------------latestNews-----------------------------
// ----------------latestNews-----------------------------
// ----------------latestNews-----------------------------


function latestNewsSwiper() {
    const swiper = new Swiper('.latest-news__swiper', {
        allowTouchMove: true,
        speed: 1000,
        loop: true,
        spaceBetween: rem(2),
        slidesPerView: 1,
        breakpoints: {
          768: {
            spaceBetween: rem(2),
            slidesPerView: 4,
            allowTouchMove: false
          }
        },
        navigation: {
          nextEl: '.latest-news__swiper-btn--next',
          prevEl: '.latest-news__swiper-btn--prev'
        }
      });
}

function latestNewsAnim(duration) {
  const title = document.querySelector('.latest-news__title'),
    link = document.querySelector('.latest-news__link'),
    slides = document.querySelectorAll('.latest-news__swiper-slide-inner'),
    section = document.querySelector('#latest-news');

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center'
      }
    })
    .from(title, {
      duration: duration,
      ease: 'power2.inOut',
      keyframes: {
        '0%': { x: '-400', opacity: 0 },
        '50%': { x: '25', opacity: 1 },
        '100%': { x: '0' }
      }
    })
    .from(
      link,
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { x: '400', opacity: 0 },
          '50%': { x: '-25', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      slides[0],
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '400', opacity: 0 },
          '50%': { y: '-25', opacity: 1 },
          '100%': { y: '0' }
        }
      },
      `-=${duration + 0.4}`
    )
    .from(
      slides[1],
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '400', opacity: 0 },
          '50%': { y: '-25', opacity: 1 },
          '100%': { y: '0' }
        }
      },
      `-=${duration + 0.3}`
    )
    .from(
      slides[2],
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          '50%': { y: '-25', opacity: 1 },
          '100%': { y: '0' }
        }
      },
      `-=${duration + 0.2}`
    )
    .from(
      slides[3],
      {
        duration: duration,
        ease: 'power2.inOut',
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          '50%': { y: '-25', opacity: 1 },
          '100%': { y: '0' }
        }
      },
      `-=${duration}`
    );
}

function latestNewsAnimMob(duration) {
  const title = document.querySelector('.latest-news__title'),
    link = document.querySelector('.latest-news__link'),
    slides = document.querySelectorAll('.latest-news__swiper-slide-inner'),
    section = document.querySelector('.latest-news');

  title.style.opacity = '0';
  link.style.opacity = '0';
  slides.forEach((slide) => (slide.style.opacity = '0'));

  let first = true;

  function handleFirstScroll() {
    if (first) {
      gsap.to(window, {
        duration: duration,
        scrollTo: { y: section } // Прокрутка к элементу с учетом отступа
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top center'
          }
        })
        .from(title, {
          duration: duration,
          ease: 'power2.inOut',
          keyframes: {
            '0%': { x: '-400', opacity: 0 },
            '90%': { x: '25', opacity: 1 },
            '100%': { x: '0' }
          }
        })
        .from(
          link,
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { x: '400', opacity: 0 },
              '90%': { x: '-25', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          slides[0],
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { y: '400', opacity: 0 },
              '90%': { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration + 0.4}`
        )
        .from(
          slides[1],
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { y: '400', opacity: 0 },
              '90%': { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration + 0.3}`
        )
        .from(
          slides[2],
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { y: '500', opacity: 0 },
              '90%': { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration + 0.2}`
        )
        .from(
          slides[3],
          {
            duration: duration,
            ease: 'power2.inOut',
            keyframes: {
              '0%': { y: '500', opacity: 0 },
              '90%': { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration}`
        );

      first = false;
    }
  }

  ScrollTrigger.matchMedia({
    '(prefers-reduced-motion: no-preference)': function () {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        toggleActions: 'play pause resume reverse',
        onEnter: () => handleFirstScroll()
      });
    }
  });
}

// ----------------footer-----------------------------
// ----------------footer-----------------------------
// ----------------footer-----------------------------

function animateFooter(duration) {
  const footer = document.querySelector('.footer--anim'),
    footerSvgBox = footer.querySelector('.footer__svg-box');
  gsap.timeline().from(footerSvgBox, { width: 0, duration: 1.5, ease: 'linear' });
}

function animateFooterMob(duration) {
  const footer = document.querySelector('.footer--anim'),
    footerSvgBox = footer.querySelector('.footer__svg-box');

  if (footer) {
    let first = true;
    function handleFirstScroll() {
      if (first) {
        footer.style.opacity = '1';
        gsap.to(window, { duration: duration, scrollTo: footer });
        gsap.timeline().from(footerSvgBox, { width: 0, duration: 1.5, ease: 'linear' });
      }
      first = false;
    }

    ScrollTrigger.matchMedia({
      '(prefers-reduced-motion: no-preference)': function () {
        ScrollTrigger.create({
          trigger: footer,
          start: 'top 90%',
          toggleActions: 'play pause resume reverse',
          onEnter: () => handleFirstScroll()
        });
      }
    });
  }
}