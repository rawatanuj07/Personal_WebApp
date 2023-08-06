/**
* Template Name: Append
* Updated: Jun 20 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";



  // const animationData = 'assets/hphk.json'; // Path to your Lottie JSON file
      
  //     // Load the Lottie animation for the preloader
  //     const animation = lottie.loadAnimation({
  //       container: document.querySelector('#lottie-container'),
  //       renderer: 'svg',
  //       loop: true,
  //       autoplay: true,
  //       path: animationData
  //     });

  //     // Listen for the whole page to be fully loaded
  //     window.addEventListener('load', () => {
  //       // Remove the preloader and reveal the main content
  //       const preloader = document.querySelector('#lottie-container');
  //       const mainContent = document.querySelector('#main-content');

  //       if (preloader) {
  //         preloader.remove();
  //       }

  //       if (mainContent) {
  //         mainContent.style.display = 'block';
  //       }
  //     });






  /**
   * Scroll top button
   */

 

  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Preloader
   */
  // const preloader = document.querySelector('#preloader');
  // if (preloader) {
  //   window.addEventListener('load', () => {
  //     preloader.remove();
  //   });
  // }
// script.js

// Select the preloader container element
// const preloader = document.querySelector('#lottie-container');

// // Load and display the Lottie animation
// const animationData = 'assets/hphk.json'; // Path to your Lottie JSON file

// // Load the animation
// const animation = lottie.loadAnimation({
//   container: preloader, // Use the preloader container
//   renderer: 'svg', // Use 'svg' renderer for browser compatibility
//   loop: true,
//   autoplay: true,
//   path: animationData // Path to your Lottie JSON file
// });

// // Listen for the Lottie animation load event
// animation.addEventListener('DOMloaded', () => {
//   // Once the animation is loaded, remove the preloader
//   preloader.remove();
// });


  

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');

  function toggleScrolled() {
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Scroll up sticky header to headers with .scroll-up-sticky class
   */
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    if (!selectHeader.classList.contains('scroll-up-sticky')) return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = `-${header.offsetHeight + 50}px`;
    } else if (scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = "0";
    } else {
      selectHeader.style.removeProperty('top');
      selectHeader.style.removeProperty('position');
    }
    lastScrollTop = scrollTop;
  });

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);



  //   on('click', '.mobile-nav-toggle', function(e) {
  //   select('body').classList.toggle('mobile-nav-active')
  //   this.classList.toggle('bi-list')
  //   this.classList.toggle('bi-x')
  // })

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  // document.querySelectorAll('.navmenu .has-dropdown i').forEach(navmenu => {
  //   navmenu.addEventListener('click', function(e) {
  //     if (document.querySelector('.mobile-nav-active')) {
  //       e.preventDefault();
  //       this.parentNode.classList.toggle('active');
  //       this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
  //       e.stopImmediatePropagation();
  //     }
  //   });
  // });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });


   /**
   * Hero type effect
   */

   const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

   const typed = select('.typed')
   if (typed) {
     let typed_strings = typed.getAttribute('data-typed-items')
     typed_strings = typed_strings.split(',')
     new Typed('.typed', {
       strings: typed_strings,
       loop: true,
       typeSpeed: 100,
       backSpeed: 50,
       backDelay: 2000
     });
   }



    // document.addEventListener('DOMContentLoaded', function() {
    //   const typed = document.querySelector('.typed');
    //   if (typed) {
    //     let typed_strings = typed.getAttribute('data-typed-items');
    //     typed_strings = typed_strings.split(',');
    //     new Typed('.typed', {
    //       strings: typed_strings,
    //       loop: true,
    //       typeSpeed: 100,
    //       backSpeed: 50,
    //       backDelay: 2000
    //     });
    //   }
    // });


  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  function initIsotopeLayout() {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });

    });
  }
  window.addEventListener('load', initIsotopeLayout);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function(swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

});