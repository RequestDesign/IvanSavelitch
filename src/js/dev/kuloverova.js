
import '../page/main'
import '../page/production'
import '../page/history'

// import popup from '../utils/popup';
// import form from '../utils/form';
import 'inputmask';
export const modules = {}; 
document.addEventListener('DOMContentLoaded', () => {
    // try {
    //     popup();
    //   } catch {}
    //   try {
    //     form();
    //   } catch {}
      try {
        phoneMask();
      } catch {}
    })

    function phoneMask() {
        const mask = new Inputmask('+7 (999) 999 99 99');
        mask.mask($('.phone-mask'));
      }
// gsap.utils.toArray('.item').forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     onEnter: function () {
//       elem.classList.add('active');
//       // slideIn(elem);
//       gsap.to(window, { duration: 2, scrollTo: `#${elem.id}`});
//     },

//     onEnterBack: function () {
//       elem.classList.add('active');
//     },
//     onLeave: function () {
//       elem.classList.remove('active');
//     },
//     onLeaveBack: function () {
//       elem.classList.remove('active');
//     }
//   });

//   // function slideIn(elem) {
//   //   gsap.to(elem, {
//   //     // y: '150%',
//   //     // scrollTo: {offsetY: 50},
//   //     // scale: 1,
//   //     // duration: 1.5,
//   //     // stagger: 1.5,
//   //     // overwrite: 'none',
//   //     // delay: 0
//   //   });
//   // }
// });
