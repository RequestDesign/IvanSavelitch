import './index.scss';

import './scss/libs/fullpage.css';
// import './js/libs/fullpage.js';

!(function (n, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((n = 'undefined' != typeof globalThis ? globalThis : n || self).fullpage = t());
})(this, function () {
  'use strict';
  var n, t, e, i;
  Array.prototype.find ||
    Object.defineProperty(Array.prototype, 'find', {
      value: function (n) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var t = Object(this),
          e = t.length >>> 0;
        if ('function' != typeof n) throw new TypeError('predicate must be a function');
        for (var i = arguments[1], o = 0; o < e; ) {
          var r = t[o];
          if (n.call(i, r, o, t)) return r;
          o++;
        }
      }
    }),
    Array.from ||
      (Array.from =
        ((n = Object.prototype.toString),
        (t = function (t) {
          return 'function' == typeof t || '[object Function]' === n.call(t);
        }),
        (e = Math.pow(2, 53) - 1),
        (i = function (n) {
          var t = (function (n) {
            var t = Number(n);
            return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t;
          })(n);
          return Math.min(Math.max(t, 0), e);
        }),
        function (n) {
          var e = this,
            o = Object(n);
          if (null == n)
            throw new TypeError('Array.from requires an array-like object - not null or undefined');
          var r,
            a = arguments.length > 1 ? arguments[1] : void 0;
          if (void 0 !== a) {
            if (!t(a))
              throw new TypeError('Array.from: when provided, the second argument must be a function');
            arguments.length > 2 && (r = arguments[2]);
          }
          for (var u, l = i(o.length), c = t(e) ? Object(new e(l)) : new Array(l), f = 0; f < l; )
            (u = o[f]), (c[f] = a ? (void 0 === r ? a(u, f) : a.call(r, u, f)) : u), (f += 1);
          return (c.length = l), c;
        }));
  var o = window,
    r = document,
    a =
      navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
      ) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document),
    u = /(Mac|iPhone|iPod|iPad)/i.test(o.navigator.userAgent),
    l = 'ontouchstart' in o || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
    c = !!window.MSInputMethodContext && !!document.documentMode,
    f = { test: {}, shared: {} },
    s = [
      'parallax',
      'scrollOverflowReset',
      'dragAndMove',
      'offsetSections',
      'fadingEffect',
      'responsiveSlides',
      'continuousHorizontal',
      'interlockedSlides',
      'scrollHorizontally',
      'resetSliders',
      'cards',
      'dropEffect',
      'waterEffect'
    ];
  function v(n, t) {
    o.console && o.console[n] && o.console[n]('fullPage: ' + t);
  }
  function d(n) {
    return 'none' !== o.getComputedStyle(n).display;
  }
  function h(n) {
    return Array.from(n).filter(function (n) {
      return d(n);
    });
  }
  function p(n, t) {
    return (t = arguments.length > 1 ? t : document) ? t.querySelectorAll(n) : null;
  }
  function g(n) {
    n = n || {};
    for (var t = 1, e = arguments.length; t < e; ++t) {
      var i = arguments[t];
      if (i)
        for (var o in i)
          i.hasOwnProperty(o) &&
            '__proto__' != o &&
            'constructor' != o &&
            ('[object Object]' !== Object.prototype.toString.call(i[o])
              ? (n[o] = i[o])
              : (n[o] = g(n[o], i[o])));
    }
    return n;
  }
  function m(n, t) {
    return null != n && n.classList.contains(t);
  }
  function w() {
    return 'innerHeight' in o ? o.innerHeight : r.documentElement.offsetHeight;
  }
  function b() {
    return o.innerWidth;
  }
  function y(n, t) {
    var e;
    for (e in ((n = x(n)), t))
      if (t.hasOwnProperty(e) && null !== e) for (var i = 0; i < n.length; i++) n[i].style[e] = t[e];
    return n;
  }
  function S(n) {
    return n.previousElementSibling;
  }
  function T(n) {
    return n.nextElementSibling;
  }
  function M(n) {
    return n[n.length - 1];
  }
  function A(n, t) {
    n = O(n) ? n[0] : n;
    for (var e = null != t ? p(t, n.parentNode) : n.parentNode.childNodes, i = 0, o = 0; o < e.length; o++) {
      if (e[o] == n) return i;
      1 == e[o].nodeType && i++;
    }
    return -1;
  }
  function x(n) {
    return O(n) ? n : [n];
  }
  function k(n) {
    n = x(n);
    for (var t = 0; t < n.length; t++) n[t].style.display = 'none';
    return n;
  }
  function j(n) {
    n = x(n);
    for (var t = 0; t < n.length; t++) n[t].style.display = 'block';
    return n;
  }
  function O(n) {
    return (
      '[object Array]' === Object.prototype.toString.call(n) ||
      '[object NodeList]' === Object.prototype.toString.call(n)
    );
  }
  function L(n, t) {
    n = x(n);
    for (var e = 0; e < n.length; e++) n[e].classList.add(t);
    return n;
  }
  function D(n, t) {
    n = x(n);
    for (var e = t.split(' '), i = 0; i < e.length; i++) {
      t = e[i];
      for (var o = 0; o < n.length; o++) n[o].classList.remove(t);
    }
    return n;
  }
  function E(n, t) {
    t.appendChild(n);
  }
  function R(n, t, e) {
    var i;
    t = t || r.createElement('div');
    for (var o = 0; o < n.length; o++) {
      var a = n[o];
      ((e && !o) || !e) && ((i = t.cloneNode(!0)), a.parentNode.insertBefore(i, a)), i.appendChild(a);
    }
    return n;
  }
  function P(n, t) {
    R(n, t, !0);
  }
  function F(n, t) {
    for (n.appendChild(t); n.firstChild !== t; ) t.appendChild(n.firstChild);
  }
  function z(n) {
    for (var t = r.createDocumentFragment(); n.firstChild; ) t.appendChild(n.firstChild);
    n.parentNode.replaceChild(t, n);
  }
  function C(n, t) {
    return n && 1 === n.nodeType ? (Q(n, t) ? n : C(n.parentNode, t)) : null;
  }
  function I(n, t) {
    B(n, n.nextSibling, t);
  }
  function N(n, t) {
    B(n, n, t);
  }
  function B(n, t, e) {
    O(e) || ('string' == typeof e && (e = J(e)), (e = [e]));
    for (var i = 0; i < e.length; i++) n.parentNode.insertBefore(e[i], t);
  }
  function H() {
    var n = r.documentElement;
    return (o.pageYOffset || n.scrollTop) - (n.clientTop || 0);
  }
  function W(n) {
    return Array.prototype.filter.call(n.parentNode.children, function (t) {
      return t !== n;
    });
  }
  function V(n) {
    n.preventDefault();
  }
  function U(n, t) {
    return n.getAttribute(t);
  }
  function _(n, t, e) {
    r.addEventListener(n, t, 'undefined' === e ? null : e);
  }
  function K(n, t, e) {
    o.addEventListener(n, t, 'undefined' === e ? null : e);
  }
  function q(n, t, e) {
    r.removeEventListener(n, t, 'undefined' === e ? null : e);
  }
  function G(n, t, e) {
    o.removeEventListener(n, t, 'undefined' === e ? null : e);
  }
  function Y(n) {
    if ('function' == typeof n) return !0;
    var t = Object.prototype.toString.call(n);
    return '[object Function]' === t || '[object GeneratorFunction]' === t;
  }
  function $(n, t, e) {
    var i;
    (e = void 0 === e ? {} : e),
      'function' == typeof o.CustomEvent
        ? (i = new CustomEvent(t, { detail: e }))
        : (i = r.createEvent('CustomEvent')).initCustomEvent(t, !0, !0, e),
      n.dispatchEvent(i);
  }
  function Q(n, t) {
    return (
      n.matches ||
      n.t ||
      n.msMatchesSelector ||
      n.mozMatchesSelector ||
      n.webkitMatchesSelector ||
      n.oMatchesSelector
    ).call(n, t);
  }
  function X(n, t) {
    if ('boolean' == typeof t) for (var e = 0; e < n.length; e++) n[e].style.display = t ? 'block' : 'none';
    return n;
  }
  function J(n) {
    var t = r.createElement('div');
    return (t.innerHTML = n.trim()), t.firstChild;
  }
  function Z(n) {
    n = x(n);
    for (var t = 0; t < n.length; t++) {
      var e = n[t];
      e && e.parentElement && e.parentNode.removeChild(e);
    }
  }
  function nn(n, t, e) {
    for (var i = n[e], o = []; i; ) (Q(i, t) || null == t) && o.push(i), (i = i[e]);
    return o;
  }
  function tn(n, t) {
    return nn(n, t, 'nextElementSibling');
  }
  function en(n, t) {
    return nn(n, t, 'previousElementSibling');
  }
  function on(n) {
    return Object.keys(n).map(function (t) {
      return n[t];
    });
  }
  function rn(n) {
    return n[n.length - 1];
  }
  function an(n, t) {
    for (var e = 0, i = n.slice(Math.max(n.length - t, 1)), o = 0; o < i.length; o++) e += i[o];
    return Math.ceil(e / t);
  }
  function un(n, t) {
    n.setAttribute(t, U(n, 'data-' + t)), n.removeAttribute('data-' + t);
  }
  function ln(n, t) {
    var e = [n];
    do {
      (n = n.parentNode), e.push(n);
    } while (!Q(n, t));
    return e;
  }
  function cn() {
    var n = r.activeElement;
    return (
      Q(n, 'textarea') ||
      Q(n, 'input') ||
      Q(n, 'select') ||
      'true' == U(n, 'contentEditable') ||
      '' == U(n, 'contentEditable')
    );
  }
  o.NodeList &&
    !NodeList.prototype.forEach &&
    (NodeList.prototype.forEach = function (n, t) {
      t = t || window;
      for (var e = 0; e < this.length; e++) n.call(t, this[e], e, this);
    }),
    'function' != typeof Object.assign &&
      Object.defineProperty(Object, 'assign', {
        value: function (n, t) {
          if (null == n) throw new TypeError('Cannot convert undefined or null to object');
          for (var e = Object(n), i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            if (null != o) for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
          }
          return e;
        },
        writable: !0,
        i: !0
      }),
    String.prototype.padStart ||
      (String.prototype.padStart = function (n, t) {
        return (
          (n >>= 0),
          (t = String(void 0 !== t ? t : ' ')),
          this.length > n
            ? String(this)
            : ((n -= this.length) > t.length &&
                (t += Array.apply(null, Array(n))
                  .map(function () {
                    return t;
                  })
                  .join('')),
              t.slice(0, n) + String(this))
        );
      }),
    (window.fp_utils = {
      $: p,
      deepExtend: g,
      hasClass: m,
      getWindowHeight: w,
      css: y,
      prev: S,
      next: T,
      last: M,
      index: A,
      getList: x,
      hide: k,
      show: j,
      isArrayOrList: O,
      addClass: L,
      removeClass: D,
      appendTo: E,
      wrap: R,
      wrapAll: P,
      unwrap: z,
      closest: C,
      after: I,
      before: N,
      insertBefore: B,
      getScrollTop: H,
      siblings: W,
      preventDefault: V,
      isFunction: Y,
      trigger: $,
      matches: Q,
      toggle: X,
      createElementFromHTML: J,
      remove: Z,
      untilAll: nn,
      nextAll: tn,
      prevAll: en,
      showError: v
    });
  var fn = Object.freeze({
    __proto__: null,
    showError: v,
    isVisible: d,
    o: h,
    $: p,
    deepExtend: g,
    hasClass: m,
    getWindowHeight: w,
    u: b,
    css: y,
    prev: S,
    next: T,
    last: M,
    index: A,
    getList: x,
    hide: k,
    show: j,
    isArrayOrList: O,
    addClass: L,
    removeClass: D,
    appendTo: E,
    wrap: R,
    wrapAll: P,
    l: F,
    unwrap: z,
    closest: C,
    after: I,
    before: N,
    insertBefore: B,
    getScrollTop: H,
    siblings: W,
    preventDefault: V,
    v: U,
    h: _,
    p: K,
    g: q,
    S: G,
    isFunction: Y,
    trigger: $,
    matches: Q,
    toggle: X,
    createElementFromHTML: J,
    remove: Z,
    untilAll: nn,
    nextAll: tn,
    prevAll: en,
    toArray: on,
    T: rn,
    M: an,
    A: un,
    j: ln,
    O: cn
  });
  function sn(n) {
    return (
      (sn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (n) {
              return typeof n;
            }
          : function (n) {
              return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype
                ? 'symbol'
                : typeof n;
            }),
      sn(n)
    );
  }
  var vn = {
      L: {},
      D: function (n, t) {
        var e = this;
        return (
          'object' !== sn(this.L[n]) && (this.L[n] = []),
          this.L[n].push(t),
          function () {
            return e.removeListener(n, t);
          }
        );
      },
      removeListener: function (n, t) {
        if ('object' === sn(this.L[n])) {
          var e = this.L[n].indexOf(t);
          e > -1 && this.L[n].splice(e, 1);
        }
      },
      R: function (n) {
        for (var t = this, e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
          i[o - 1] = arguments[o];
        'object' === sn(this.L[n]) &&
          this.L[n].forEach(function (n) {
            return n.apply(t, i);
          });
      },
      once: function (n, t) {
        var e = this,
          i = this.D(n, function () {
            i();
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            t.apply(e, o);
          });
      }
    },
    dn = {
      P: 0,
      F: 0,
      slides: [],
      C: [],
      I: null,
      N: null,
      B: !1,
      H: !1,
      W: !1,
      V: !1,
      U: !1,
      _: void 0,
      K: void 0,
      q: !1,
      G: !0,
      Y: 'none',
      X: 'none',
      J: !1,
      Z: !1,
      nn: !0,
      tn: 0,
      en: w(),
      on: !1,
      rn: {},
      scrollY: 0,
      scrollX: 0
    };
  function hn(n) {
    Object.assign(dn, n);
  }
  function pn() {
    return dn;
  }
  o.state = dn;
  var gn = 'onAfterRenderNoAnchor',
    mn = 'onClickOrTouch',
    wn = 'moveSlideLeft',
    bn = 'moveSlideRight',
    yn = 'onInitialise',
    Sn = 'bindEvents',
    Tn = 'onDestroy',
    Mn = 'contentChanged',
    An = 'onScrollOverflowScrolled',
    xn = 'onScrollPageAndSlide',
    kn = 'onKeyDown',
    jn = 'onMenuClick',
    On = 'scrollPage',
    Ln = 'landscapeScroll',
    Dn = 'scrollBeyondFullpage',
    En = 'onPerformMovement',
    Rn = 'onSlideLeave',
    Pn = 'onLeave',
    Fn = 'afterSectionLoads',
    zn = 'afterSlideLoads';
  function Cn(n) {
    vn.R(mn, { e: n, target: n.target });
  }
  function In() {
    ['click', 'touchstart'].forEach(function (n) {
      q(n, Cn);
    });
  }
  function Nn() {
    hn({ nn: !0 });
  }
  vn.D(Sn, function () {
    ['click', 'touchstart'].forEach(function (n) {
      _(n, Cn);
    }),
      K('focus', Nn),
      vn.D(Tn, In);
  });
  var Bn = 'fullpage-wrapper',
    Hn = '.' + Bn,
    Wn = 'fp-responsive',
    Vn = 'fp-notransition',
    Un = 'fp-destroyed',
    _n = 'fp-enabled',
    Kn = 'active',
    qn = '.active',
    Gn = 'fp-completely',
    Yn = 'fp-section',
    $n = '.' + Yn,
    Qn = '.fp-tableCell',
    Xn = '#fp-nav',
    Jn = 'fp-slide',
    Zn = '.' + Jn,
    nt = '.fp-slide.active',
    tt = 'fp-slides',
    et = '.fp-slides',
    it = 'fp-slidesContainer',
    ot = '.' + it,
    rt = 'fp-table',
    at = 'fp-overflow',
    ut = '.' + at,
    lt = 'fp-is-overflow',
    ct = '.fp-slidesNav',
    ft = '.fp-slidesNav a',
    st = 'fp-controlArrow',
    vt = '.' + st,
    dt = 'fp-prev',
    ht = '.fp-controlArrow.fp-prev',
    pt = '.fp-controlArrow.fp-next',
    gt = {
      menu: !1,
      anchors: [],
      lockAnchors: !1,
      navigation: !1,
      navigationPosition: 'right',
      navigationTooltips: [],
      showActiveTooltip: !1,
      slidesNavigation: !1,
      slidesNavPosition: 'bottom',
      scrollBar: !1,
      hybrid: !1,
      licenseKey: '',
      credits: { enabled: !0, label: 'Made with fullPage.js', position: 'right' },
      css3: !0,
      scrollingSpeed: 700,
      autoScrolling: !0,
      fitToSection: !0,
      an: 600,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: !1,
      loopTop: !1,
      loopHorizontal: !0,
      continuousVertical: !1,
      continuousHorizontal: !1,
      scrollHorizontally: !1,
      interlockedSlides: !1,
      dragAndMove: !1,
      offsetSections: !1,
      resetSliders: !1,
      fadingEffect: !1,
      normalScrollElements: null,
      scrollOverflow: !0,
      scrollOverflowReset: !1,
      touchSensitivity: 5,
      touchWrapper: null,
      bigSectionsDestination: null,
      keyboardScrolling: !0,
      animateAnchor: !0,
      recordHistory: !0,
      allowCorrectDirection: !1,
      scrollOverflowMacStyle: !0,
      controlArrows: !0,
      controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'],
      controlArrowColor: '#fff',
      verticalCentered: !0,
      sectionsColor: [],
      paddingTop: 0,
      paddingBottom: 0,
      fixedElements: null,
      responsive: 0,
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: !1,
      parallax: !1,
      parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
      cards: !1,
      cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 },
      sectionSelector: '.section',
      slideSelector: '.slide',
      afterLoad: null,
      beforeLeave: null,
      onLeave: null,
      afterRender: null,
      afterResize: null,
      afterReBuild: null,
      afterSlideLoad: null,
      onSlideLeave: null,
      afterResponsive: null,
      onScrollOverflow: null,
      lazyLoading: !0,
      observer: !0,
      un: !0
    },
    mt = null,
    wt = !1,
    bt = g({}, gt),
    yt = null;
  function St(n) {
    return mt;
  }
  function Tt() {
    return yt || gt;
  }
  function Mt() {
    return bt;
  }
  function At(n, t, e) {
    (yt[n] = t), 'internal' !== e && (bt[n] = t);
  }
  function xt() {
    if (!Tt().anchors.length) {
      var n = p(Tt().sectionSelector.split(',').join('[data-anchor],') + '[data-anchor]', mt);
      n.length &&
        n.length === p(Tt().sectionSelector, mt).length &&
        ((wt = !0),
        n.forEach(function (n) {
          Tt().anchors.push(U(n, 'data-anchor').toString());
        }));
    }
    if (!Tt().navigationTooltips.length) {
      var t = p(Tt().sectionSelector.split(',').join('[data-tooltip],') + '[data-tooltip]', mt);
      t.length &&
        t.forEach(function (n) {
          Tt().navigationTooltips.push(U(n, 'data-tooltip').toString());
        });
    }
  }
  var kt = function (n) {
      (this.anchor = n.anchor),
        (this.item = n.item),
        (this.index = n.index()),
        (this.isLast = this.index === n.item.parentElement.querySelectorAll(n.selector).length - 1),
        (this.isFirst = !this.index),
        (this.isActive = n.isActive);
    },
    jt = function (n, t) {
      (this.parent = this.parent || null),
        (this.selector = t),
        (this.anchor = U(n, 'data-anchor') || Tt().anchors[A(n, Tt().sectionSelector)]),
        (this.item = n),
        (this.isVisible = d(n)),
        (this.isActive = m(n, Kn)),
        (this.ln = m(n, at) || null != p(ut, n)[0]),
        (this.cn = t === Tt().sectionSelector),
        (this.sn = C(n, ot) || C(n, Hn)),
        (this.index = function () {
          return this.siblings().indexOf(this);
        });
    };
  function Ot(n) {
    return n.map(function (n) {
      return n.item;
    });
  }
  function Lt(n, t) {
    return n.find(function (n) {
      return n.item === t;
    });
  }
  (jt.prototype.siblings = function () {
    return this.cn ? (this.isVisible ? dn.C : dn.vn) : this.parent ? this.parent.slides : 0;
  }),
    (jt.prototype.prev = function () {
      var n = this.siblings(),
        t = (this.cn ? n.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
      return t >= 0 ? n[t] : null;
    }),
    (jt.prototype.next = function () {
      var n = this.siblings(),
        t = (this.cn ? n.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
      return t < n.length ? n[t] : null;
    }),
    (jt.prototype.prevPanel = function () {
      return this.prev() || (this.parent ? this.parent.prev() : null);
    }),
    (jt.prototype.nextPanel = function () {
      return this.next() || (this.parent ? this.parent.next() : null);
    }),
    (jt.prototype.dn = function () {
      return this.cn ? dn.C : dn.hn;
    });
  var Dt,
    Et = function (n) {
      kt.call(this, n);
    },
    Rt = function (n) {
      kt.call(this, n);
    };
  function Pt(n) {
    var t = p(nt, n);
    return t.length && (n = t[0]), n;
  }
  function Ft(n) {
    return n ? (n.activeSlide ? n.activeSlide : n) : null;
  }
  function zt(n) {
    var t,
      e,
      i = Tt();
    return (
      i.autoScrolling && !i.scrollBar ? ((t = -n), (e = p(Hn)[0])) : ((t = n), (e = window)),
      { options: t, element: e }
    );
  }
  function Ct(n, t) {
    !Tt().autoScrolling || Tt().scrollBar || (n.self != window && m(n, tt))
      ? n.self != window && m(n, tt)
        ? (n.scrollLeft = t)
        : n.scrollTo(0, t)
      : (n.style.top = t + 'px');
  }
  function It(n) {
    var t = 'transform ' + Tt().scrollingSpeed + 'ms ' + Tt().easingcss3;
    return D(n, Vn), y(n, { '-webkit-transition': t, transition: t });
  }
  function Nt(n, t) {
    var e = n.index(),
      i = A(t, $n);
    return e == i ? 'none' : e > i ? 'up' : 'down';
  }
  function Bt(n) {
    return L(n, Vn);
  }
  function Ht(n) {
    return { '-webkit-transform': n, '-moz-transform': n, '-ms-transform': n, transform: n };
  }
  function Wt(n, t) {
    t ? It(St()) : Bt(St()),
      clearTimeout(Dt),
      y(St(), Ht(n)),
      (f.test.pn = n),
      (Dt = setTimeout(function () {
        D(St(), Vn);
      }, 10));
  }
  function Vt(n) {
    var t = Math.round(n);
    if (Tt().css3 && Tt().autoScrolling && !Tt().scrollBar) Wt('translate3d(0px, -' + t + 'px, 0px)', !1);
    else if (Tt().autoScrolling && !Tt().scrollBar) y(St(), { top: -t + 'px' }), (f.test.top = -t + 'px');
    else {
      var e = zt(t);
      Ct(e.element, e.options);
    }
  }
  function Ut(n, t) {
    At('scrollingSpeed', n, t);
  }
  f.setScrollingSpeed = Ut;
  var _t,
    Kt = null,
    qt = null,
    Gt = null;
  function Yt(n, t, e, i) {
    var r,
      a = (function (n) {
        return n.self != o && m(n, tt)
          ? n.scrollLeft
          : !Tt().autoScrolling || Tt().scrollBar
          ? H()
          : n.offsetTop;
      })(n),
      u = t - a,
      l = !1,
      c = dn.q;
    hn({ q: !0 }),
      _t && window.cancelAnimationFrame(_t),
      (_t = function (f) {
        r || (r = f);
        var s = Math.floor(f - r);
        if (dn.q) {
          var v = t;
          e && (v = o.fp_easings[Tt().easing](s, a, u, e)),
            s <= e && Ct(n, v),
            s < e ? window.requestAnimationFrame(_t) : void 0 === i || l || (i(), hn({ q: !1 }), (l = !0));
        } else l || c || (i(), hn({ q: !1 }), (l = !0));
      }),
      window.requestAnimationFrame(_t);
  }
  function $t(n) {
    return n && !n.item ? new Et(new ni(n)) : n ? new Et(n) : null;
  }
  function Qt(n) {
    return n ? new Rt(n) : null;
  }
  function Xt(n, t) {
    var e = (function (n, t) {
      var e = {
        afterRender: function () {
          return { section: $t(pn().I), gn: Qt(pn().I.activeSlide) };
        },
        onLeave: function () {
          return {
            origin: $t(t.items.origin),
            destination: $t(t.items.destination),
            direction: t.direction,
            trigger: pn().N
          };
        },
        afterLoad: function () {
          return e.onLeave();
        },
        afterSlideLoad: function () {
          return {
            section: $t(t.items.section),
            origin: $t(t.items.origin),
            destination: $t(t.items.destination),
            direction: t.direction,
            trigger: pn().N
          };
        },
        onSlideLeave: function () {
          return e.afterSlideLoad();
        },
        beforeLeave: function () {
          return e.onLeave();
        },
        onScrollOverflow: function () {
          return {
            section: $t(pn().I),
            gn: Qt(pn().I.activeSlide),
            position: t.position,
            direction: t.direction
          };
        }
      };
      return e[n]();
    })(n, t);
    return $(St(), n, e), !1 !== Tt()[n].apply(e[Object.keys(e)[0]], on(e));
  }
  function Jt(n) {
    var t = Pt(n);
    p('video, audio', t).forEach(function (n) {
      n.hasAttribute('data-autoplay') && 'function' == typeof n.play && n.play();
    }),
      p('iframe[src*="youtube.com/embed/"]', t).forEach(function (n) {
        n.hasAttribute('data-autoplay') && Zt(n),
          (n.onload = function () {
            n.hasAttribute('data-autoplay') && Zt(n);
          });
      });
  }
  function Zt(n) {
    n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  }
  function ne(n) {
    var t = Pt(n);
    p('video, audio', t).forEach(function (n) {
      n.hasAttribute('data-keepplaying') || 'function' != typeof n.pause || n.pause();
    }),
      p('iframe[src*="youtube.com/embed/"]', t).forEach(function (n) {
        /youtube\.com\/embed\//.test(U(n, 'src')) &&
          !n.hasAttribute('data-keepplaying') &&
          n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      });
  }
  function te(n) {
    Tt().lazyLoading &&
      p(
        'img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]',
        Pt(n)
      ).forEach(function (n) {
        if (
          (['src', 'srcset'].forEach(function (t) {
            var e = U(n, 'data-' + t);
            null != e && e && (un(n, t), n.addEventListener('load', function () {}));
          }),
          Q(n, 'source'))
        ) {
          var t = C(n, 'video, audio');
          t && (t.load(), (t.onloadeddata = function () {}));
        }
      });
  }
  function ee() {
    var n = pn().I.item,
      t = pn().I.activeSlide,
      e = ie(n),
      i = String(e);
    t && (i = i + '-' + ie(t.item)), (i = i.replace('/', '-').replace('#', ''));
    var o = new RegExp('\\b\\s?fp-viewing-[^\\s]+\\b', 'g');
    (Kt.className = Kt.className.replace(o, '')), L(Kt, 'fp-viewing-' + i);
  }
  function ie(n) {
    if (!n) return null;
    var t = U(n, 'data-anchor'),
      e = A(n);
    return null == t && (t = e), t;
  }
  function oe(n, t, e) {
    var i = '';
    Tt().anchors.length &&
      !Tt().lockAnchors &&
      (n
        ? (null != e && (i = e), null == t && (t = n), hn({ K: t }), re(i + '/' + t))
        : null != n
        ? (hn({ K: t }), re(e))
        : re(e)),
      ee();
  }
  function re(n) {
    if (Tt().recordHistory) location.hash = n;
    else if (a || l) o.history.replaceState(void 0, void 0, '#' + n);
    else {
      var t = o.location.href.split('#')[0];
      o.location.replace(t + '#' + n);
    }
  }
  function ae(n, t, e) {
    var i = 'Section' === t ? Tt().anchors[n] : U(e, 'data-anchor');
    return encodeURI(Tt().navigationTooltips[n] || i || t + ' ' + (n + 1));
  }
  function ue(n) {
    n.cancelable && V(n), hn({ N: 'horizontalNav' });
    var t = C(this, $n),
      e = p(et, C(this, $n))[0],
      i = Lt(pn().C, t).slides[A(C(this, 'li'))];
    vn.R(Ln, { slides: e, destination: i.item });
  }
  var le = {};
  function ce(n, t, e) {
    'all' !== t
      ? (le[e][t] = n)
      : Object.keys(le[e]).forEach(function (t) {
          le[e][t] = n;
        });
  }
  function fe() {
    return le;
  }
  function se() {
    var n = C(this, $n);
    m(this, dt)
      ? fe().m.left && (hn({ N: 'slideArrow' }), vn.R(wn, { section: n }))
      : fe().m.right && (hn({ N: 'slideArrow' }), vn.R(bn, { section: n }));
  }
  function ve(n, t) {
    At('recordHistory', n, t);
  }
  function de(n, t) {
    n || Vt(0), At('autoScrolling', n, t);
    var e = pn().I.item;
    if (Tt().autoScrolling && !Tt().scrollBar)
      y(Gt, { overflow: 'hidden', height: '100%' }),
        D(Kt, 'fp-scrollable'),
        ve(Mt().recordHistory, 'internal'),
        y(St(), { '-ms-touch-action': 'none', 'touch-action': 'none' }),
        null != e && Vt(e.offsetTop);
    else if (
      (y(Gt, { overflow: 'visible', height: 'initial' }),
      L(Kt, 'fp-scrollable'),
      ve(!!Tt().autoScrolling && Mt().recordHistory, 'internal'),
      y(St(), { '-ms-touch-action': '', 'touch-action': '' }),
      null != e)
    ) {
      var i = zt(e.offsetTop);
      i.element.scrollTo(0, i.options);
    }
  }
  function he() {
    var n = p('.fp-auto-height')[0] || (Pe() && p('.fp-auto-height-responsive')[0]);
    Tt().lazyLoading &&
      n &&
      p('.fp-section:not(.active)').forEach(function (n) {
        var t, e, i, o, r;
        (e = (t = n.getBoundingClientRect()).top),
          (i = t.bottom),
          (o = e + 2 < dn.en && e > 0),
          (r = i > 2 && i < dn.en),
          (o || r) && te(n);
      });
  }
  function pe() {
    $(S(this), 'click');
  }
  function ge() {
    Z(p(Xn));
    var n = r.createElement('div');
    n.setAttribute('id', 'fp-nav');
    var t = r.createElement('ul');
    n.appendChild(t), E(n, Kt);
    var e = p(Xn)[0];
    L(e, 'fp-' + Tt().navigationPosition), Tt().showActiveTooltip && L(e, 'fp-show-active');
    for (var i = '', o = 0; o < pn().C.length; o++) {
      var a = pn().C[o],
        u = '';
      Tt().anchors.length && (u = a.anchor),
        (i +=
          '<li><a href="#' +
          encodeURI(u) +
          '"><span class="fp-sr-only">' +
          ae(a.index(), 'Section') +
          '</span><span></span></a>');
      var l = Tt().navigationTooltips[a.index()];
      void 0 !== l &&
        '' !== l &&
        (i += '<div class="fp-tooltip fp-' + Tt().navigationPosition + '">' + l + '</div>'),
        (i += '</li>');
    }
    p('ul', e)[0].innerHTML = i;
    var c = p('li', p(Xn)[0])[pn().I.index()];
    L(p('a', c), Kn);
  }
  function me(n) {
    n.preventDefault && V(n), hn({ N: 'verticalNav' });
    var t = A(C(this, '#fp-nav li'));
    vn.R(On, { destination: pn().C[t] });
  }
  function we(n, t) {
    var e;
    (e = n),
      Tt().menu &&
        Tt().menu.length &&
        p(Tt().menu).forEach(function (n) {
          null != n && (D(p(qn, n), Kn), L(p('[data-menuanchor="' + e + '"]', n), Kn));
        }),
      (function (n, t) {
        var e = p(Xn)[0];
        Tt().navigation &&
          null != e &&
          'none' !== e.style.display &&
          (D(p(qn, e), Kn), L(n ? p('a[href="#' + n + '"]', e) : p('a', p('li', e)[t]), Kn));
      })(n, t);
  }
  (le.m = { up: !0, down: !0, left: !0, right: !0 }),
    (le.k = g({}, le.m)),
    vn.D(mn, function (n) {
      var t = n.target;
      (Q(t, vt) || C(t, vt)) && se.call(t, n);
    }),
    (f.setRecordHistory = ve),
    (f.setAutoScrolling = de),
    (f.test.setAutoScrolling = de),
    new Date().getTime();
  var be,
    ye,
    Se,
    Te,
    Me,
    Ae,
    xe =
      ((ye = !0),
      (Se = new Date().getTime()),
      (Te = !o.fullpage_api),
      function (n, t) {
        var e = new Date().getTime(),
          i = 'wheel' === n ? Tt().scrollingSpeed : 100;
        return (
          (ye = Te || e - Se >= i), (Te = !o.fullpage_api), ye && ((be = t()), (Se = e)), void 0 === be || be
        );
      });
  function ke(n, t) {
    if (Y(Tt().beforeLeave))
      return xe(pn().N, function () {
        return Xt(n, t);
      });
  }
  function je(n, t, e) {
    var i = n.item;
    if (null != i) {
      var o,
        r,
        a = (function (n) {
          var t = n.offsetHeight,
            e = n.offsetTop,
            i = e,
            o = e > dn.tn,
            r = i - w() + t,
            a = Tt().bigSectionsDestination;
          return (
            t > w() ? ((o || a) && 'bottom' !== a) || (i = r) : (o || (dn.V && null == T(n))) && (i = r),
            hn({ tn: i }),
            i
          );
        })(i),
        u = {
          element: i,
          callback: t,
          isMovementUp: e,
          dtop: a,
          yMovement: Nt(pn().I, i),
          anchorLink: n.anchor,
          sectionIndex: n.index(),
          activeSlide: n.activeSlide ? n.activeSlide.item : null,
          leavingSection: pn().I.index() + 1,
          localIsResizing: dn.V,
          items: { origin: pn().I, destination: n },
          direction: null
        };
      if (!((pn().I.item == i && !dn.V) || (Tt().scrollBar && H() === u.dtop && !m(i, 'fp-auto-height')))) {
        if (
          (null != u.activeSlide && ((o = U(u.activeSlide, 'data-anchor')), (r = A(u.activeSlide, null))),
          !u.localIsResizing)
        ) {
          var l = u.yMovement;
          if (
            (void 0 !== e && (l = e ? 'up' : 'down'),
            (u.direction = l),
            Y(Tt().beforeLeave) && !1 === ke('beforeLeave', u))
          )
            return;
          if (Y(Tt().onLeave) && !Xt('onLeave', u)) return;
        }
        Tt().autoScrolling &&
          Tt().continuousVertical &&
          void 0 !== u.isMovementUp &&
          ((!u.isMovementUp && 'up' == u.yMovement) || (u.isMovementUp && 'down' == u.yMovement)) &&
          (u = (function (n) {
            hn({ on: !0 });
            var t = pn().I.item;
            return (
              n.isMovementUp ? N(t, tn(t, $n)) : I(t, en(t, $n).reverse()),
              Vt(pn().I.item.offsetTop),
              (function () {
                for (var n = p(nt), t = 0; t < n.length; t++) Ge(n[t], 'internal');
              })(),
              (n.mn = t),
              (n.dtop = n.element.offsetTop),
              (n.yMovement = Nt(pn().I, n.element)),
              n
            );
          })(u)),
          u.localIsResizing || ne(pn().I.item),
          L(i, Kn),
          D(W(i), Kn),
          Qe(),
          te(i),
          hn({ G: f.test.wn }),
          oe(r, o, u.anchorLink),
          vn.R(Pn, u),
          (function (n) {
            var t = Tt().scrollingSpeed < 700,
              e = t ? 700 : Tt().scrollingSpeed;
            if (
              (hn({ Y: 'none', scrollY: Math.round(n.dtop) }),
              vn.R(En),
              Tt().css3 && Tt().autoScrolling && !Tt().scrollBar)
            )
              Wt('translate3d(0px, -' + Math.round(n.dtop) + 'px, 0px)', !0),
                Tt().scrollingSpeed
                  ? (clearTimeout(Me),
                    (Me = setTimeout(function () {
                      Oe(n), hn({ G: !t || f.test.wn });
                    }, Tt().scrollingSpeed)))
                  : Oe(n);
            else {
              var i = zt(n.dtop);
              (f.test.top = -n.dtop + 'px'),
                clearTimeout(Me),
                Yt(i.element, i.options, Tt().scrollingSpeed, function () {
                  Tt().scrollBar
                    ? (Me = setTimeout(function () {
                        Oe(n);
                      }, 30))
                    : (Oe(n), hn({ G: !t || f.test.wn }));
                });
            }
            t &&
              (clearTimeout(Ae),
              (Ae = setTimeout(function () {
                hn({ G: !0 });
              }, e)));
          })(u),
          hn({ _: u.anchorLink }),
          we(u.anchorLink, u.sectionIndex);
      }
    }
  }
  function Oe(n) {
    hn({ B: !1 }),
      (function (n) {
        null != n.mn &&
          (n.isMovementUp ? N(p($n)[0], n.mn) : I(p($n)[pn().C.length - 1], n.mn),
          Vt(pn().I.item.offsetTop),
          (function () {
            for (var n = p(nt), t = 0; t < n.length; t++) Ge(n[t], 'internal');
          })(),
          hn({ on: !1 }));
      })(n),
      Y(Tt().afterLoad) && !n.localIsResizing && Xt('afterLoad', n),
      Qe(),
      n.localIsResizing || Jt(n.element),
      L(n.element, Gn),
      D(W(n.element), Gn),
      he(),
      hn({ G: !0 }),
      vn.R(Fn, n),
      Y(n.callback) && n.callback();
  }
  function Le(n, t) {
    At('fitToSection', n, t);
  }
  function De() {
    dn.G && (hn({ V: !0 }), je(dn.I), hn({ V: !1 }));
  }
  function Ee() {
    var n = Tt().responsive || Tt().responsiveWidth,
      t = Tt().responsiveHeight,
      e = n && o.innerWidth < n,
      i = t && o.innerHeight < t;
    n && t ? Re(e || i) : n ? Re(e) : t && Re(i);
  }
  function Re(n) {
    var t = Pe();
    n
      ? t ||
        (de(!1, 'internal'),
        Le(!1, 'internal'),
        k(p(Xn)),
        L(Kt, Wn),
        Y(Tt().afterResponsive) && Tt().afterResponsive.call(St(), n))
      : t &&
        (de(Mt().autoScrolling, 'internal'),
        Le(Mt().autoScrolling, 'internal'),
        j(p(Xn)),
        D(Kt, Wn),
        Y(Tt().afterResponsive) && Tt().afterResponsive.call(St(), n));
  }
  function Pe() {
    return m(Kt, Wn);
  }
  function Fe(n) {
    Tt().verticalCentered &&
      ((!Tt().scrollOverflow && Ve.bn(n.item)) || Ve.yn(n) || m(n.item, rt) || L(n.item, rt));
  }
  (f.moveTo = moveTo),
    (f.getScrollY = function () {
      return dn.scrollY;
    }),
    vn.D(Tn, function () {
      clearTimeout(Me), clearTimeout(Ae);
    }),
    (f.setFitToSection = Le),
    (f.fitToSection = De),
    (f.setResponsive = Re);
  var ze,
    Ce = null;
  function Ie(n) {
    var t = n.item,
      e = n.Sn.length,
      i = n.index();
    !pn().I && n.isVisible && (L(t, Kn), Qe(), (Ce = pn().I.item)),
      Tt().paddingTop && y(t, { 'padding-top': Tt().paddingTop }),
      Tt().paddingBottom && y(t, { 'padding-bottom': Tt().paddingBottom }),
      void 0 !== Tt().sectionsColor[i] && y(t, { 'background-color': Tt().sectionsColor[i] }),
      void 0 !== Tt().anchors[i] && t.setAttribute('data-anchor', n.anchor),
      e || Fe(n);
  }
  function Ne() {
    Tt().scrollOverflow && !Tt().scrollBar && (Ve.Tn(), Ve.Mn());
  }
  function Be() {
    vn.removeListener(gn, Ne), q('keyup', Ve.An);
  }
  (f.getActiveSection = function () {
    return pn().I;
  }),
    vn.D(Sn, function () {
      vn.D(gn, Ne),
        vn.D(Pn, Ve.onLeave),
        vn.D(Rn, Ve.onLeave),
        vn.D(zn, Ve.afterLoad),
        vn.D(Fn, Ve.afterLoad),
        vn.D(Tn, Be),
        _('keyup', Ve.An);
    });
  var He,
    We,
    Ve = {
      xn: null,
      kn: !0,
      jn: !0,
      On: null,
      Ln: null,
      Dn: function (n) {
        if (!dn.G) return V(n), !1;
      },
      En: function (n) {
        if (!cn() && Tt().keyboardScrolling && [38, 33, 32, 40, 34, 36, 35].indexOf(n.keyCode) > -1 && !Ve.jn)
          return V(n), !1;
      },
      An: function () {
        Ve.kn = dn.G;
      },
      onLeave: function () {
        clearTimeout(ze), (Ve.jn = !1);
      },
      afterLoad: function () {
        (Ve.jn = !1),
          clearTimeout(ze),
          (ze = setTimeout(function () {
            Ve.kn = dn.G;
          }, 200));
      },
      Rn: function () {
        r.activeElement === this.xn && (this.xn.blur(), (Ve.jn = !1));
      },
      Mn: function () {
        if (Tt().scrollOverflow && Ve.kn) {
          Ve.Rn();
          var n = Ve.Pn(pn().I.item);
          !n ||
            a ||
            l ||
            ((this.xn = n),
            requestAnimationFrame(function () {
              n.focus(), (Ve.jn = !0);
            })),
            (Ve.kn = !1);
        }
      },
      Tn: function () {
        Tt().scrollOverflowMacStyle && !u && L(Kt, 'fp-scroll-mac'),
          pn().hn.forEach(function (n) {
            if (!((n.slides && n.slides.length) || (m(n.item, 'fp-auto-height-responsive') && Pe()))) {
              var t,
                e = Pt(n.item),
                i = Ve.bn(n.item),
                o = (t = n).cn ? t : t.parent;
              if (c) {
                var r = i ? 'addClass' : 'removeClass';
                fn[r](o.item, lt), fn[r](n.item, lt);
              } else L(o.item, lt), L(n.item, lt);
              n.ln || (Ve.Fn(e), Ve.zn(e)), (n.ln = !0);
            }
          });
      },
      zn: function (n) {
        Ve.Pn(n).addEventListener('scroll', Ve.Cn),
          n.addEventListener('wheel', Ve.Dn, { passive: !1 }),
          n.addEventListener('keydown', Ve.En, { passive: !1 });
      },
      Fn: function (n) {
        var t = document.createElement('div');
        (t.className = at), F(n, t), t.setAttribute('tabindex', '-1');
      },
      In: function (n) {
        var t = p(ut, n)[0];
        t && (z(t), n.removeAttribute('tabindex'));
      },
      Pn: function (n) {
        var t = Pt(n);
        return p(ut, t)[0] || t;
      },
      ln: function (n) {
        return m(n, at) || null != p(ut, n)[0];
      },
      yn: function (n) {
        return n.cn && n.activeSlide ? n.activeSlide.ln : n.ln;
      },
      bn: function (n) {
        return Ve.Pn(n).scrollHeight > o.innerHeight;
      },
      isScrolled: function (n, t) {
        if (!dn.G) return !1;
        if (Tt().scrollBar) return !0;
        var e = Ve.Pn(t);
        if (!Tt().scrollOverflow || !m(e, at) || m(t, 'fp-noscroll') || m(Pt(t), 'fp-noscroll')) return !0;
        var i = c ? 1 : 0,
          o = e.scrollTop,
          r = 'up' === n && o <= 0,
          a = 'down' === n && e.scrollHeight <= Math.ceil(e.offsetHeight + o) + i,
          u = r || a;
        return u || (this.On = new Date().getTime()), u;
      },
      Nn: function () {
        this.Ln = new Date().getTime();
        var n = this.Ln - Ve.On,
          t = (a || l) && dn.J,
          e = dn.Z && n > 600;
        return (t && n > 400) || e;
      },
      Cn:
        ((He = 0),
        function (n) {
          var t = n.target.scrollTop,
            e = 'none' !== dn.Y ? dn.Y : He < t ? 'down' : 'up';
          (He = t),
            Y(Tt().onScrollOverflow) && Xt('onScrollOverflow', { position: t, direction: e }),
            m(n.target, at) &&
              dn.G &&
              Ve.isScrolled(e, n.target) &&
              Ve.Nn() &&
              Ve.bn(pn().I.item) &&
              vn.R(An, { direction: e });
        })
    };
  function Ue() {
    clearTimeout(We), hn({ W: !1 });
  }
  function _e(n, t, e) {
    var i,
      o,
      r = C(n, $n),
      a = pn().C.filter(function (n) {
        return n.item == r;
      })[0],
      u = a.slides.filter(function (n) {
        return n.item == t;
      })[0],
      l = {
        slides: n,
        destiny: t,
        direction: e,
        destinyPos: { left: t.offsetLeft },
        slideIndex: u.index(),
        section: r,
        sectionIndex: a.index(),
        anchorLink: a.anchor,
        slidesNav: p(ct, r)[0],
        slideAnchor: u.anchor,
        prevSlide: a.activeSlide.item,
        prevSlideIndex: a.activeSlide.index(),
        items: { section: a, origin: a.activeSlide, destination: u },
        localIsResizing: dn.V
      };
    (l.Bn = ((i = l.prevSlideIndex), (o = l.slideIndex), i == o ? 'none' : i > o ? 'left' : 'right')),
      (l.direction = l.direction ? l.direction : l.Bn),
      l.localIsResizing || hn({ G: !1 }),
      Tt().onSlideLeave &&
      !l.localIsResizing &&
      'none' !== l.Bn &&
      Y(Tt().onSlideLeave) &&
      !1 === Xt('onSlideLeave', l)
        ? hn({ W: !1 })
        : (L(t, Kn),
          D(W(t), Kn),
          Qe(),
          l.localIsResizing || (ne(l.prevSlide), te(t)),
          (function (n) {
            !Tt().loopHorizontal &&
              Tt().controlArrows &&
              (X(p(ht, n.section), 0 !== n.slideIndex), X(p(pt, n.section), null != T(n.destiny)));
          })(l),
          a.isActive && !l.localIsResizing && oe(l.slideIndex, l.slideAnchor, l.anchorLink),
          vn.R(Rn, l),
          (function (n, t, e) {
            var i,
              o,
              r = t.destinyPos;
            if (
              ((i = t.slidesNav),
              (o = t.slideIndex),
              Tt().slidesNavigation && null != i && (D(p(qn, i), Kn), L(p('a', p('li', i)[o]), Kn)),
              hn({ scrollX: Math.round(r.left) }),
              Tt().css3)
            ) {
              var a = 'translate3d(-' + Math.round(r.left) + 'px, 0px, 0px)';
              (f.test.Hn[t.sectionIndex] = a),
                y(It(p(ot, n)), Ht(a)),
                clearTimeout(We),
                (We = setTimeout(function () {
                  qe(t);
                }, Tt().scrollingSpeed));
            } else
              (f.test.left[t.sectionIndex] = Math.round(r.left)),
                Yt(n, Math.round(r.left), Tt().scrollingSpeed, function () {
                  qe(t);
                });
          })(n, l));
  }
  function Ke() {
    clearTimeout(We);
  }
  function qe(n) {
    n.localIsResizing ||
      (Y(Tt().afterSlideLoad) && Xt('afterSlideLoad', n), hn({ G: !0 }), Jt(n.destiny), vn.R(zn, n)),
      hn({ W: !1 });
  }
  function Ge(n, t) {
    Ut(0, 'internal'),
      void 0 !== t && hn({ V: !0 }),
      _e(C(n, et), n),
      void 0 !== t && hn({ V: !1 }),
      Ut(Mt().scrollingSpeed, 'internal');
  }
  (f.landscapeScroll = _e),
    vn.D(Sn, function () {
      vn.D(En, Ue);
    });
  var Ye = null,
    $e = null;
  function Qe() {
    (dn.I = null),
      dn.C.map(function (n) {
        var t = m(n.item, Kn);
        (n.isActive = t),
          (n.ln = Ve.ln(n.item)),
          t && (dn.I = n),
          n.slides.length &&
            ((n.activeSlide = null),
            n.slides.map(function (t) {
              var e = m(t.item, Kn);
              (t.ln = Ve.ln(n.item)), (t.isActive = e), e && (n.activeSlide = t);
            }));
      }),
      (function () {
        var n = dn.I,
          t = !!dn.I && dn.I.slides.length,
          e = dn.I ? dn.I.activeSlide : null;
        if (!n && dn.C.length && !pn().B && Ye) {
          var i = Ze(Ye, dn.C);
          i && ((dn.I = i), (dn.I.isActive = !0), L(dn.I.item, Kn)), dn.I && Vt(dn.I.item.offsetTop);
        }
        if (t && !e && $e) {
          var o = Ze($e, dn.I.slides);
          o && ((dn.I.activeSlide = o), (dn.I.activeSlide.isActive = !0), L(dn.I.activeSlide.item, Kn)),
            dn.I.activeSlide && Ge(dn.I.activeSlide.item, 'internal');
        }
      })();
  }
  function Xe() {
    var n = p(Tt().sectionSelector, St()),
      t = h(n),
      e = Array.from(n).map(function (n) {
        return new ni(n);
      }),
      i = e.filter(function (n) {
        return n.isVisible;
      }),
      o = i.reduce(function (n, t) {
        return n.concat(t.slides);
      }, []);
    (Ye = Je(dn.I)),
      ($e = Je(dn.I ? dn.I.activeSlide : null)),
      (dn.P = t.length),
      (dn.F = i.reduce(function (n, t) {
        return n + t.slides.length;
      }, 0)),
      (dn.C = i),
      (dn.vn = e),
      (dn.slides = o),
      (dn.hn = dn.C.concat(dn.slides));
  }
  function Je(n) {
    if (!n) return null;
    var t = n ? n.item : null,
      e = n.cn ? dn.vn : dn.I.Wn;
    if (t) {
      var i = Lt(e, t);
      return i ? i.index() : null;
    }
    return null;
  }
  function Ze(n, t) {
    var e,
      i = n - 1,
      o = n;
    do {
      if ((e = t[i] || t[o])) break;
      (i -= 1), (o += 1);
    } while (i >= 0 || o < t.length);
    return e;
  }
  var ni = function (n) {
    var t = this;
    [].push.call(arguments, Tt().sectionSelector),
      jt.apply(this, arguments),
      (this.Sn = p(Tt().slideSelector, n)),
      (this.Wn = Array.from(this.Sn).map(function (n) {
        return new ei(n, t);
      })),
      (this.slides = this.Wn.filter(function (n) {
        return n.isVisible;
      })),
      (this.activeSlide = this.slides.length
        ? this.slides.filter(function (n) {
            return n.isActive;
          })[0] || this.slides[0]
        : null);
  };
  (ni.prototype = jt.prototype), (ni.prototype.constructor = ni);
  var ti,
    ei = function (n, t) {
      (this.parent = t), jt.call(this, n, Tt().slideSelector);
    };
  function ii() {
    L(p(Tt().sectionSelector, St()), Yn), L(p(Tt().slideSelector, St()), Jn);
  }
  function oi(n) {
    var t = n.slides.length,
      e = n.Sn,
      i = n.slides,
      o = 100 * t,
      a = 100 / t;
    if (!p(et, n.item)[0]) {
      var u = r.createElement('div');
      (u.className = tt), P(e, u);
      var l = r.createElement('div');
      (l.className = it), P(e, l);
    }
    y(p(ot, n.item), { width: o + '%' }),
      t > 1 &&
        (Tt().controlArrows &&
          (function (n) {
            var t = n.item,
              e = [J(Tt().controlArrowsHTML[0]), J(Tt().controlArrowsHTML[1])];
            I(p(et, t)[0], e),
              L(e, st),
              L(e[0], dt),
              L(e[1], 'fp-next'),
              '#fff' !== Tt().controlArrowColor &&
                (y(p(pt, t), {
                  'border-color': 'transparent transparent transparent ' + Tt().controlArrowColor
                }),
                y(p(ht, t), {
                  'border-color': 'transparent ' + Tt().controlArrowColor + ' transparent transparent'
                })),
              Tt().loopHorizontal || k(p(ht, t));
          })(n),
        Tt().slidesNavigation &&
          (function (n) {
            var t = n.item,
              e = n.slides.length;
            E(J('<div class="fp-slidesNav"><ul></ul></div>'), t);
            var i = p(ct, t)[0];
            L(i, 'fp-' + Tt().slidesNavPosition);
            for (var o = 0; o < e; o++)
              E(
                J(
                  '<li><a href="#"><span class="fp-sr-only">' +
                    ae(o, 'Slide', p(Zn, t)[o]) +
                    '</span><span></span></a></li>'
                ),
                p('ul', i)[0]
              );
            y(i, { 'margin-left': '-' + i.innerWidth / 2 + 'px' });
            var r = n.activeSlide ? n.activeSlide.index() : 0;
            L(p('a', p('li', i)[r]), Kn);
          })(n)),
      i.forEach(function (n) {
        y(n.item, { width: a + '%' }), Tt().verticalCentered && Fe(n);
      });
    var c = n.activeSlide || null;
    null != c && dn.I && (0 !== dn.I.index() || (0 === dn.I.index() && 0 !== c.index()))
      ? Ge(c.item, 'internal')
      : L(e[0], Kn);
  }
  (ei.prototype = jt.prototype), (ei.prototype.constructor = ni);
  var ri = { attributes: !1, subtree: !0, childList: !0, characterData: !0 };
  function ai() {
    return h(p(Tt().slideSelector, St())).length !== pn().F;
  }
  function ui(n) {
    var t = ai();
    (ai() || h(p(Tt().sectionSelector, St())).length !== pn().P) &&
      !dn.on &&
      (Tt().observer && ti && ti.disconnect(),
      Xe(),
      Qe(),
      (Tt().anchors = []),
      Z(p(Xn)),
      ii(),
      xt(),
      Tt().navigation && ge(),
      t && (Z(p(ct)), Z(p(vt))),
      pn().C.forEach(function (n) {
        n.slides.length ? t && oi(n) : Ie(n);
      })),
      Tt().observer && ti && p(Hn)[0] && ti.observe(p(Hn)[0], ri);
  }
  vn.D(Sn, function () {
    var n, t, e;
    Tt().observer &&
      'MutationObserver' in window &&
      p(Hn)[0] &&
      ((n = p(Hn)[0]), (t = ri), (e = new MutationObserver(ui)).observe(n, t), (ti = e)),
      vn.D(Mn, ui);
  }),
    (f.render = ui);
  var li = (function () {
    var n = !1;
    try {
      var t = Object.defineProperty({}, 'passive', {
        get: function () {
          n = !0;
        }
      });
      K('testPassive', null, t), G('testPassive', null, t);
    } catch (n) {}
    return function () {
      return n;
    };
  })();
  function ci() {
    return !!li() && { passive: !1 };
  }
  var fi,
    si,
    vi,
    di,
    hi =
      ((vi = new Date().getTime()),
      (di = []),
      {
        Vn: function (n) {
          var t = (n = n || o.event).wheelDelta || -n.deltaY || -n.detail,
            e = Math.max(-1, Math.min(1, t)),
            i = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX;
          fi =
            Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) || Math.abs(n.deltaX) < Math.abs(n.deltaY) || !i;
          var r = new Date().getTime();
          (si = e < 0 ? 'down' : 'up'), di.length > 149 && di.shift(), di.push(Math.abs(t));
          var a = r - vi;
          (vi = r), a > 200 && (di = []);
        },
        Un: function () {
          var n = an(di, 10) >= an(di, 70);
          return !!di.length && n && fi;
        },
        _n: function () {
          return si;
        }
      });
  function pi() {
    var n = Tt().css3 ? H() + w() : rn(pn().C).item.offsetTop + rn(pn().C).item.offsetHeight,
      t = zt(n);
    (f.test.top = -n + 'px'),
      hn({ G: !1 }),
      Yt(t.element, t.options, Tt().scrollingSpeed, function () {
        setTimeout(function () {
          hn({ B: !0 }), hn({ G: !0 });
        }, 30);
      });
  }
  function gi() {
    St().getBoundingClientRect().bottom >= 0 && mi();
  }
  function mi() {
    var n = zt(rn(pn().C).item.offsetTop);
    hn({ G: !1 }),
      Yt(n.element, n.options, Tt().scrollingSpeed, function () {
        hn({ G: !0 }), hn({ B: !1 }), hn({ Kn: !1 });
      });
  }
  var wi,
    bi,
    yi,
    Si =
      ((wi = !1),
      (bi = {}),
      (yi = {}),
      function (n, t, e) {
        switch (n) {
          case 'set':
            (bi[t] = new Date().getTime()), (yi[t] = e);
            break;
          case 'isNewKeyframe':
            var i = new Date().getTime();
            wi = i - bi[t] > yi[t];
        }
        return wi;
      });
  function Ti() {
    var n = pn().I.next();
    n || (!Tt().loopBottom && !Tt().continuousVertical) || (n = pn().C[0]),
      null != n
        ? je(n, null, !1)
        : St().scrollHeight < Kt.scrollHeight && Tt().scrollBar && Tt().un && vn.R(Dn);
  }
  function Mi() {
    var n = pn().I.prev();
    n || (!Tt().loopTop && !Tt().continuousVertical) || (n = rn(pn().C)), null != n && je(n, null, !0);
  }
  (f.moveSectionDown = Ti), (f.moveSectionUp = Mi);
  var Ai = 0;
  function xi(n) {
    Tt().autoScrolling &&
      (dn.G && (n.pageY < Ai && fe().m.up ? Mi() : n.pageY > Ai && fe().m.down && Ti()), (Ai = n.pageY));
  }
  function ki(n) {
    if (fe().m[n]) {
      var t = 'down' === n ? Ti : Mi;
      Tt().scrollOverflow && Ve.yn(pn().I) ? Ve.isScrolled(n, pn().I.item) && Ve.Nn() && t() : t();
    }
  }
  var ji,
    Oi,
    Li,
    Di,
    Ei = 0,
    Ri = 0,
    Pi = 0,
    Fi = 0,
    zi = (o.PointerEvent && (Di = { down: 'pointerdown', move: 'pointermove' }), Di),
    Ci = {
      qn: 'ontouchmove' in window ? 'touchmove' : zi ? zi.move : null,
      Gn: 'ontouchstart' in window ? 'touchstart' : zi ? zi.down : null
    };
  function Ii(n) {
    var t = C(n.target, $n) || pn().I.item,
      e = Ve.yn(pn().I);
    if (Ni(n)) {
      hn({ J: !0, Z: !1 }), Tt().autoScrolling && ((e && !dn.G) || Tt().scrollBar) && V(n);
      var i = Wi(n);
      (Pi = i.y), (Fi = i.x);
      var r = Math.abs(Ei - Pi) > (o.innerHeight / 100) * Tt().touchSensitivity,
        a = Math.abs(Ri - Fi) > (b() / 100) * Tt().touchSensitivity,
        u = p(et, t).length && Math.abs(Ri - Fi) > Math.abs(Ei - Pi),
        l = Ei > Pi ? 'down' : 'up';
      hn({ Y: u ? (Ri > Fi ? 'right' : 'left') : l }),
        u
          ? !dn.W &&
            a &&
            (Ri > Fi ? fe().m.right && vn.R(bn, { section: t }) : fe().m.left && vn.R(wn, { section: t }))
          : Tt().autoScrolling && dn.G && r && ki(l);
    }
  }
  function Ni(n) {
    return void 0 === n.pointerType || 'mouse' != n.pointerType;
  }
  function Bi(n) {
    if ((Tt().fitToSection && hn({ q: !1 }), Ni(n))) {
      var t = Wi(n);
      (Ei = t.y), (Ri = t.x);
    }
    K('touchend', Hi);
  }
  function Hi() {
    G('touchend', Hi), hn({ J: !1 });
  }
  function Wi(n) {
    var t = {};
    return (
      (t.y = void 0 !== n.pageY && (n.pageY || n.pageX) ? n.pageY : n.touches[0].pageY),
      (t.x = void 0 !== n.pageX && (n.pageY || n.pageX) ? n.pageX : n.touches[0].pageX),
      l &&
        Ni(n) &&
        Tt().scrollBar &&
        void 0 !== n.touches &&
        ((t.y = n.touches[0].pageY), (t.x = n.touches[0].pageX)),
      t
    );
  }
  function Vi(n) {
    Tt().autoScrolling && Ni(n) && fe().m.up && (dn.G || V(n));
  }
  function Ui(n, t) {
    var e = null == t ? pn().I.item : t,
      i = Lt(dn.C, e),
      o = p(et, e)[0];
    if (!(null == o || dn.W || i.slides.length < 2)) {
      var r = i.activeSlide,
        a = 'left' === n ? r.prev() : r.next();
      if (!a) {
        if (!Tt().loopHorizontal) return;
        a = 'left' === n ? rn(i.slides) : i.slides[0];
      }
      hn({ W: !f.test.wn }), _e(o, a.item, n);
    }
  }
  function _i(n) {
    Ui('left', n);
  }
  function Ki(n) {
    Ui('right', n);
  }
  function qi(n) {
    var t = pn().C.filter(function (t) {
      return t.anchor === n;
    })[0];
    if (!t) {
      var e = void 0 !== n ? n - 1 : 0;
      t = pn().C[e];
    }
    return t;
  }
  function Gi(n) {
    null != n && _e(C(n, et), n);
  }
  function Yi(n, t) {
    var e = qi(n);
    if (null != e) {
      var i = (function (n, t) {
        var e = t.slides.filter(function (t) {
          return t.anchor === n;
        })[0];
        return null == e && ((n = void 0 !== n ? n : 0), (e = t.slides[n])), e ? e.item : null;
      })(t, e);
      (e.anchor && e.anchor === dn._) || m(e.item, Kn)
        ? Gi(i)
        : je(e, function () {
            Gi(i);
          });
    }
  }
  function $i(n, t) {
    var e = qi(n);
    void 0 !== t ? Yi(n, t) : null != e && je(e);
  }
  function Qi() {
    clearTimeout(Oi), q('keydown', Xi), q('keyup', Ji);
  }
  function Xi(n) {
    clearTimeout(Oi);
    var t = n.keyCode,
      e = [37, 39].indexOf(t) > -1,
      i = Tt().autoScrolling || Tt().fitToSection || e;
    9 === t
      ? (function (n) {
          var t = n.shiftKey,
            e = r.activeElement,
            i = io(Pt(pn().I.item));
          function o(n) {
            return V(n), i[0] ? i[0].focus() : null;
          }
          if (dn.G) {
            if (
              !(function (n) {
                var t = io(r),
                  e = t.indexOf(r.activeElement),
                  i = t[n.shiftKey ? e - 1 : e + 1],
                  o = C(i, Zn),
                  a = C(i, $n);
                return !o && !a;
              })(n)
            ) {
              e ? null == C(e, '.fp-section.active,.fp-section.active .fp-slide.active') && (e = o(n)) : o(n);
              var a = e == i[0],
                u = e == i[i.length - 1],
                l = t && a;
              if (l || (!t && u)) {
                V(n);
                var c = (function (n) {
                    var t,
                      e = n ? 'prevPanel' : 'nextPanel',
                      i = [],
                      o = Ft((dn.I && dn.I.activeSlide ? dn.I.activeSlide : dn.I)[e]());
                    do {
                      (i = io(o.item)).length && (t = { Yn: o, $n: i[n ? i.length - 1 : 0] }),
                        (o = Ft(o[e]()));
                    } while (o && 0 === i.length);
                    return t;
                  })(l),
                  f = c ? c.Yn : null;
                if (f) {
                  var s = f.cn ? f : f.parent;
                  vn.R(xn, { Qn: s.index() + 1, slideAnchor: f.cn ? 0 : f.index() }), (Li = c.$n), V(n);
                }
              }
            }
          } else V(n);
        })(n)
      : !cn() &&
        Tt().keyboardScrolling &&
        i &&
        ((ji = n.ctrlKey),
        (Oi = setTimeout(function () {
          !(function (n) {
            var t = n.shiftKey,
              e = r.activeElement,
              i = Q(e, 'video') || Q(e, 'audio'),
              o = Ve.isScrolled('up', pn().I.item),
              a = Ve.isScrolled('down', pn().I.item),
              u = [37, 39].indexOf(n.keyCode) > -1;
            if (
              ((function (n) {
                (function (n) {
                  return [40, 38, 32, 33, 34].indexOf(n.keyCode) > -1 && !dn.B;
                })(n) &&
                  !C(n.target, ut) &&
                  n.preventDefault();
              })(n),
              dn.G || u)
            )
              switch ((hn({ N: 'keydown' }), n.keyCode)) {
                case 38:
                case 33:
                  fe().k.up && o ? (dn.B ? vn.R(kn, { e: n }) : Mi()) : Ve.Mn();
                  break;
                case 32:
                  if (t && fe().k.up && !i && o) {
                    Mi();
                    break;
                  }
                case 40:
                case 34:
                  if (fe().k.down && a) {
                    if (dn.B) return;
                    (32 === n.keyCode && i) || Ti();
                  } else Ve.Mn();
                  break;
                case 36:
                  fe().k.up && $i(1);
                  break;
                case 35:
                  fe().k.down && $i(pn().C.length);
                  break;
                case 37:
                  fe().k.left && _i();
                  break;
                case 39:
                  fe().k.right && Ki();
              }
          })(n);
        }, 0)));
  }
  function Ji(n) {
    dn.nn && (ji = n.ctrlKey);
  }
  function Zi() {
    hn({ nn: !1 }), (ji = !1);
  }
  function no(n) {
    eo();
  }
  function to(n) {
    (C(Li, Zn) && !C(Li, nt)) || eo();
  }
  function eo() {
    Li && (Li.focus(), (Li = null));
  }
  function io(n) {
    return [].slice
      .call(
        p(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], summary:not([disabled]), [contenteditable]',
          n
        )
      )
      .filter(function (n) {
        return '-1' !== U(n, 'tabindex') && null !== n.offsetParent;
      });
  }
  (f.moveSlideLeft = _i),
    (f.moveSlideRight = Ki),
    (f.moveTo = $i),
    vn.D(Sn, function () {
      K('blur', Zi), _('keydown', Xi), _('keyup', Ji), vn.D(Tn, Qi), vn.D(zn, no), vn.D(Fn, to);
    });
  var oo = new Date().getTime(),
    ro = [];
  function ao(n) {
    n
      ? ((function () {
          var n,
            t = '';
          o.addEventListener ? (n = 'addEventListener') : ((n = 'attachEvent'), (t = 'on'));
          var e =
              'onwheel' in r.createElement('div')
                ? 'wheel'
                : void 0 !== r.onmousewheel
                ? 'mousewheel'
                : 'DOMMouseScroll',
            i = ci();
          'DOMMouseScroll' == e ? r[n](t + 'MozMousePixelScroll', uo, i) : r[n](t + e, uo, i);
        })(),
        St().addEventListener('mousedown', lo),
        St().addEventListener('mouseup', co))
      : (r.addEventListener
          ? (q('mousewheel', uo, !1), q('wheel', uo, !1), q('MozMousePixelScroll', uo, !1))
          : r.detachEvent('onmousewheel', uo),
        St().removeEventListener('mousedown', lo),
        St().removeEventListener('mouseup', co));
  }
  function uo(n) {
    var t = new Date().getTime(),
      e = m(p('.fp-completely')[0], 'fp-normal-scroll'),
      i = (function (n, t) {
        new Date().getTime();
        var e = pn().B && n.getBoundingClientRect().bottom >= 0 && 'up' === hi._n(),
          i = pn().Kn;
        if (i) return V(t), !1;
        if (pn().B) {
          if (e) {
            var o;
            if (!(i || (Si('isNewKeyframe', 'beyondFullpage') && hi.Un())))
              return (
                (o = zt(rn(pn().C).item.offsetTop + rn(pn().C).item.offsetHeight)).element.scrollTo(
                  0,
                  o.options
                ),
                hn({ Kn: !1 }),
                V(t),
                !1
              );
            if (hi.Un()) return (e = !1), hn({ Kn: !0 }), hn({ N: 'wheel' }), mi(), V(t), !1;
          } else Si('set', 'beyondFullpage', 1e3);
          if (!i && !e) return !0;
        }
      })(St(), n);
    if ((dn.Z || hn({ J: !1, Z: !0, Y: 'none' }), !fe().m.down && !fe().m.up)) return V(n), !1;
    if (i) return !0;
    if (!1 === i) return V(n), !1;
    if (Tt().autoScrolling && !ji && !e) {
      var r = (n = n || o.event).wheelDelta || -n.deltaY || -n.detail,
        a = Math.max(-1, Math.min(1, r)),
        u = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
        l = Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) || Math.abs(n.deltaX) < Math.abs(n.deltaY) || !u,
        c = a < 0 ? 'down' : a > 0 ? 'up' : 'none';
      ro.length > 149 && ro.shift(), ro.push(Math.abs(r)), Tt().scrollBar && V(n);
      var f = t - oo;
      return (
        (oo = t),
        f > 200 && (ro = []),
        hn({ X: c }),
        dn.G && an(ro, 10) >= an(ro, 70) && l && (hn({ N: 'wheel' }), ki(a < 0 ? 'down' : 'up')),
        !1
      );
    }
    Tt().fitToSection && hn({ q: !1 });
  }
  function lo(n) {
    var t;
    2 == n.which && ((t = n.pageY), (Ai = t), St().addEventListener('mousemove', xi));
  }
  function co(n) {
    2 == n.which && St().removeEventListener('mousemove', xi);
  }
  function fo(n) {
    n
      ? (ao(!0),
        (function () {
          if (Ci.qn && (a || l)) {
            Tt().autoScrolling &&
              (Kt.removeEventListener(Ci.qn, Vi, { passive: !1 }),
              Kt.addEventListener(Ci.qn, Vi, { passive: !1 }));
            var n = Tt().touchWrapper;
            n.removeEventListener(Ci.Gn, Bi),
              n.removeEventListener(Ci.qn, Ii, { passive: !1 }),
              n.addEventListener(Ci.Gn, Bi),
              n.addEventListener(Ci.qn, Ii, { passive: !1 });
          }
        })())
      : (ao(!1),
        (function () {
          if (Ci.qn && (a || l)) {
            Tt().autoScrolling &&
              (Kt.removeEventListener(Ci.qn, Ii, { passive: !1 }),
              Kt.removeEventListener(Ci.qn, Vi, { passive: !1 }));
            var n = Tt().touchWrapper;
            n.removeEventListener(Ci.Gn, Bi), n.removeEventListener(Ci.qn, Ii, { passive: !1 });
          }
        })());
  }
  f.setMouseWheelScrolling = ao;
  var so = !0;
  function vo() {
    ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function (n) {
      q(n, po, !0);
    });
  }
  function ho(n, t) {
    (document['fp_' + n] = t), _(n, po, !0);
  }
  function po(n) {
    var t = n.type,
      e = !1,
      i = 'mouseleave' === t ? n.toElement || n.relatedTarget : n.target;
    i != document && i
      ? ('touchend' === t &&
          ((so = !1),
          setTimeout(function () {
            so = !0;
          }, 800)),
        ('mouseenter' !== t || so) &&
          (Tt()
            .normalScrollElements.split(',')
            .forEach(function (n) {
              if (!e) {
                var t = Q(i, n),
                  o = C(i, n);
                (t || o) && (f.shared.Xn || fo(!1), (f.shared.Xn = !0), (e = !0));
              }
            }),
          !e && f.shared.Xn && (fo(!0), (f.shared.Xn = !1))))
      : fo(!0);
  }
  function go(n, t) {
    Ut(0, 'internal'), $i(n, t), Ut(Mt().scrollingSpeed, 'internal');
  }
  vn.D(Sn, function () {
    Tt().normalScrollElements &&
      (['mouseenter', 'touchstart'].forEach(function (n) {
        ho(n, !1);
      }),
      ['mouseleave', 'touchend'].forEach(function (n) {
        ho(n, !0);
      })),
      vn.D(Tn, vo);
  }),
    (f.silentMoveTo = go);
  var mo,
    wo,
    bo = w(),
    yo = b(),
    So = !1;
  function To() {
    clearTimeout(mo), clearTimeout(wo), G('resize', Mo);
  }
  function Mo() {
    So || (((Tt().autoScrolling && !Tt().scrollBar) || !Tt().fitToSection) && xo(w())),
      (function () {
        if (a)
          for (var n = 0; n < 4; n++)
            wo = setTimeout(function () {
              window.requestAnimationFrame(function () {
                Tt().autoScrolling && !Tt().scrollBar && (hn({ V: !0 }), go(dn.I.index() + 1), hn({ V: !1 }));
              });
            }, 200 * n);
      })(),
      (So = !0),
      clearTimeout(mo),
      (mo = setTimeout(function () {
        !(function () {
          if (
            (hn({ V: !0 }),
            xo(''),
            Tt().autoScrolling ||
              dn.B ||
              (function () {
                if (!Tt().autoScrolling || Tt().scrollBar) {
                  var n = 0.01 * o.innerHeight;
                  r.documentElement.style.setProperty('--vh', ''.concat(n, 'px'));
                }
              })(),
            vn.R(Mn),
            Qe(),
            Ee(),
            a)
          ) {
            var n = r.activeElement;
            if (!Q(n, 'textarea') && !Q(n, 'input') && !Q(n, 'select')) {
              var t = w();
              Math.abs(t - bo) > (20 * Math.max(bo, t)) / 100 && (Ao(!0), (bo = t));
            }
          } else (e = w()), (i = b()), (dn.en === e && yo === i) || (hn({ en: e }), (yo = i), Ao(!0));
          var e, i;
          hn({ V: !1 });
        })(),
          (So = !1);
      }, 400));
  }
  function Ao(n) {
    if (!m(St(), Un)) {
      hn({ V: !0, en: w(), Jn: b() });
      for (var t = pn().C, e = 0; e < t.length; ++e) {
        var i = t[e],
          r = p(et, i.item)[0];
        i.slides.length > 1 && _e(r, i.activeSlide.item);
      }
      Tt().scrollOverflow && Ve.Tn();
      var a = pn().I.index();
      dn.B || (a && go(a + 1)),
        hn({ V: !1 }),
        Y(Tt().afterResize) && n && Tt().afterResize.call(St(), o.innerWidth, o.innerHeight),
        Y(Tt().afterReBuild) && !n && Tt().afterReBuild.call(St()),
        $(St(), 'afterRebuild');
    }
  }
  function xo(n) {
    var t = '' === n ? '' : n + 'px';
    pn().C.forEach(function (n) {
      y(n.item, { height: t });
    });
  }
  function ko() {
    var n,
      t,
      e = o.location.hash;
    if (e.length) {
      var i = e.replace('#', '').split('/'),
        r = e.indexOf('#/') > -1;
      n = r ? '/' + i[1] : decodeURIComponent(i[0]);
      var a = r ? i[2] : i[1];
      a && a.length && (t = decodeURIComponent(a));
    }
    return { section: n, gn: t };
  }
  function jo() {
    G('hashchange', Oo);
  }
  function Oo() {
    if (!dn.U && !Tt().lockAnchors) {
      var n = ko(),
        t = n.section,
        e = n.gn,
        i = void 0 === dn._,
        o = void 0 === dn._ && void 0 === e && !dn.W;
      t &&
        t.length &&
        ((t && t !== dn._ && !i) || o || (!dn.W && dn.K != e)) &&
        vn.R(xn, { Qn: t, slideAnchor: e });
    }
  }
  function Lo(n) {
    var t = n.target;
    C(t, Tt().menu + ' [data-menuanchor]') && Do.call(t, n);
  }
  function Do(n) {
    hn({ N: 'menu' }),
      !p(Tt().menu)[0] ||
        (!Tt().lockAnchors && Tt().anchors.length) ||
        (V(n), vn.R(jn, { anchor: U(this, 'data-menuanchor') }));
  }
  function Eo(n) {
    var t = n.target;
    t && C(t, '#fp-nav a')
      ? me.call(t, n.e)
      : Q(t, '.fp-tooltip')
      ? pe.call(t)
      : (Q(t, ft) || null != C(t, ft)) && ue.call(t, n.e);
  }
  (f.reBuild = Ao),
    vn.D(Sn, function () {
      Mo(), K('resize', Mo), vn.D(Tn, To);
    }),
    (f.setLockAnchors = function (n) {
      Tt().lockAnchors = n;
    }),
    vn.D(Sn, function () {
      K('hashchange', Oo), vn.D(Tn, jo);
    }),
    vn.D(Sn, function () {
      _('wheel', hi.Vn, ci()), vn.D(Dn, pi), vn.D(kn, gi);
    }),
    vn.D(Sn, function () {
      vn.D(mn, Lo);
    }),
    vn.D(Sn, function () {
      vn.D(mn, Eo);
    });
  var Ro,
    Po,
    Fo = 0;
  function zo(n) {
    var t, e, i, o, r;
    if (!dn.V && pn().I && (rn(pn().C), !pn().B && !pn().Kn && (!Tt().autoScrolling || Tt().scrollBar))) {
      var a = H(),
        u = (function (n) {
          var t = n > Fo ? 'down' : 'up';
          return (Fo = n), hn({ tn: n }), t;
        })(a),
        l = 0,
        c = a + w() / 2,
        f = Kt.scrollHeight - w() === a,
        s = pn().C;
      if ((hn({ scrollY: a }), f)) l = s.length - 1;
      else if (a) for (var v = 0; v < s.length; ++v) s[v].item.offsetTop <= c && (l = v);
      else l = 0;
      if (
        ((i = u),
        (o = pn().I.item.offsetTop),
        (r = o + w()),
        ('up' == i ? r >= H() + w() : o <= H()) &&
          (m(pn().I.item, Gn) || (L(pn().I.item, Gn), D(W(pn().I.item), Gn))),
        (e = (t = s[l]).item),
        !t.isActive)
      ) {
        hn({ U: !0 });
        var d,
          h,
          p = pn().I.item,
          g = pn().I.index() + 1,
          b = Nt(pn().I, e),
          y = t.anchor,
          S = t.index() + 1,
          T = t.activeSlide,
          M = {
            I: p,
            sectionIndex: S - 1,
            anchorLink: y,
            element: e,
            leavingSection: g,
            direction: b,
            items: { origin: pn().I, destination: t }
          };
        T && ((h = T.anchor), (d = T.index())),
          dn.G &&
            (L(e, Kn),
            D(W(e), Kn),
            Y(Tt().beforeLeave) && ke('beforeLeave', M),
            Y(Tt().onLeave) && Xt('onLeave', M),
            Y(Tt().afterLoad) && Xt('afterLoad', M),
            ne(p),
            te(e),
            Jt(e),
            we(y, S - 1),
            Tt().anchors.length && hn({ _: y }),
            Qe(),
            oe(d, h, y)),
          clearTimeout(Ro),
          (Ro = setTimeout(function () {
            hn({ U: !1 });
          }, 100));
      }
      Tt().fitToSection &&
        dn.G &&
        (clearTimeout(Po),
        (Po = setTimeout(function () {
          dn.C.filter(function (n) {
            var t = n.item.getBoundingClientRect();
            return Math.round(t.bottom) === Math.round(w()) || 0 === Math.round(t.top);
          }).length || De();
        }, Tt().an)));
    }
  }
  function Co(n, t) {
    void 0 !== t
      ? (t = t.replace(/ /g, '').split(',')).forEach(function (t) {
          ce(n, t, 'k');
        })
      : (ce(n, 'all', 'k'), (Tt().keyboardScrolling = n));
  }
  function Io(n) {
    var t = n.index();
    void 0 !== Tt().anchors[t] && n.isActive && we(Tt().anchors[t], t),
      Tt().menu &&
        Tt().css3 &&
        null != C(p(Tt().menu)[0], Hn) &&
        p(Tt().menu).forEach(function (n) {
          Kt.appendChild(n);
        });
  }
  function No() {
    var n,
      t,
      e = pn().I,
      i = pn().I.item;
    L(i, Gn),
      te(i),
      he(),
      Jt(i),
      (t = qi((n = ko()).section)),
      (n.section && t && (void 0 === t || t.index() !== A(Ce))) ||
        !Y(Tt().afterLoad) ||
        Xt('afterLoad', {
          I: i,
          element: i,
          direction: null,
          anchorLink: e.anchor,
          sectionIndex: e.index(),
          items: { origin: pn().I, destination: pn().I }
        }),
      Y(Tt().afterRender) && Xt('afterRender');
  }
  function Bo(n, t) {
    void 0 !== t
      ? (t = t.replace(/ /g, '').split(',')).forEach(function (t) {
          ce(n, t, 'm');
        })
      : ce(n, 'all', 'm');
  }
  function Ho() {
    var n = ko(),
      t = n.section,
      e = n.gn;
    t ? (Tt().animateAnchor ? Yi(t, e) : go(t, e)) : vn.R(gn, null);
  }
  function Wo() {
    Xe(),
      Qe(),
      (Tt().scrollBar = Tt().scrollBar || Tt().hybrid),
      xt(),
      (function () {
        y(ln(St(), 'body'), { height: '100%', position: 'relative' }),
          L(St(), Bn),
          L(qt, _n),
          hn({ en: w() }),
          D(St(), Un),
          ii();
        for (var n = pn().vn, t = 0; t < n.length; t++) {
          var e = n[t],
            i = e.Sn,
            o = U(e.item, 'style');
          o && e.item.setAttribute('data-fp-styles', o), Ie(e), Io(e), i.length > 0 && oi(e);
        }
        Tt().fixedElements &&
          Tt().css3 &&
          p(Tt().fixedElements).forEach(function (n) {
            Kt.appendChild(n);
          }),
          Tt().navigation && ge(),
          p('iframe[src*="youtube.com/embed/"]', St()).forEach(function (n) {
            var t, e;
            (e = U((t = n), 'src')), t.setAttribute('src', e + (/\?/.test(e) ? '&' : '?') + 'enablejsapi=1');
          }),
          Tt().scrollOverflow && Ve.Tn();
      })(),
      Bo(!0),
      fo(!0),
      de(Tt().autoScrolling, 'internal'),
      Ee(),
      ee(),
      'complete' === r.readyState && Ho(),
      K('load', Ho),
      No(),
      Xe(),
      Qe();
  }
  function Vo() {
    var n = Tt().licenseKey;
    '' === Tt().licenseKey.trim()
      ? (v('error', 'Fullpage.js requires a `licenseKey` option. Read about it on the following URL:'),
        v('error', 'https://github.com/alvarotrigo/fullPage.js#options'))
      : (Tt() && dn.Zn) || r.domain.indexOf('alvarotrigo.com') > -1
      ? n && n.length
      : (v('error', 'Incorrect `licenseKey`. Get one for fullPage.js version 4 here:'),
        v('error', 'https://alvarotrigo.com/fullPage/pricing')),
      m(qt, _n)
        ? v('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!')
        : (Tt().continuousVertical &&
            (Tt().loopTop || Tt().loopBottom) &&
            ((Tt().continuousVertical = !1),
            v(
              'warn',
              'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled'
            )),
          !Tt().scrollOverflow ||
            (!Tt().scrollBar && Tt().autoScrolling) ||
            v(
              'warn',
              'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox'
            ),
          !Tt().continuousVertical ||
            (!Tt().scrollBar && Tt().autoScrolling) ||
            ((Tt().continuousVertical = !1),
            v(
              'warn',
              'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled'
            )),
          s.forEach(function (n) {
            Tt()[n] &&
              v(
                'warn',
                'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: ' +
                  n
              );
          }),
          Tt().anchors.forEach(function (n) {
            var t = [].slice.call(p('[name]')).filter(function (t) {
                return U(t, 'name') && U(t, 'name').toLowerCase() == n.toLowerCase();
              }),
              e = [].slice.call(p('[id]')).filter(function (t) {
                return U(t, 'id') && U(t, 'id').toLowerCase() == n.toLowerCase();
              });
            if (e.length || t.length) {
              v(
                'error',
                'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).'
              );
              var i = e.length ? 'id' : 'name';
              (e.length || t.length) &&
                v('error', '"' + n + '" is is being used by another element `' + i + '` property');
            }
          }));
  }
  function Uo(n, t) {
    var e;
    if (((Kt = p('body')[0]), (qt = p('html')[0]), (Gt = p('html, body')), !m(qt, _n)))
      return (
        'touchWrapper',
        (e = 'string' == typeof n ? p(n)[0] : n),
        (gt.touchWrapper = e),
        (function (n) {
          (yt = g({}, gt, n)), (bt = Object.assign({}, yt));
        })(t),
        (function (n) {
          mt = n;
        })('string' == typeof n ? p(n)[0] : n),
        vn.R(yn),
        Vo(),
        (f.getFullpageData = function () {
          return { options: Tt() };
        }),
        (f.version = '4.0.22'),
        (f.test = Object.assign(f.test, {
          top: '0px',
          pn: 'translate3d(0px, 0px, 0px)',
          Hn: (function () {
            for (var n = [], t = 0; t < p(Tt().sectionSelector, St()).length; t++)
              n.push('translate3d(0px, 0px, 0px)');
            return n;
          })(),
          left: (function () {
            for (var n = [], t = 0; t < p(Tt().sectionSelector, St()).length; t++) n.push(0);
            return n;
          })(),
          options: Tt(),
          setAutoScrolling: null
        })),
        (f.shared = Object.assign(f.shared, { nt: null, Xn: !1 })),
        (o.fullpage_api = f),
        St() && (vn.R('beforeInit'), Wo(), vn.R(Sn)),
        o.fullpage_api
      );
    Vo();
  }
  return (
    vn.D(Tn, function () {
      clearTimeout(Ro), clearTimeout(Po);
    }),
    vn.D(Sn, function () {
      K('scroll', zo),
        r.body.addEventListener('scroll', zo),
        vn.D(xn, function (n) {
          Yi(n.Qn, n.slideAnchor);
        }),
        vn.D(jn, function (n) {
          $i(n.anchor, void 0);
        }),
        vn.D(An, function (n) {
          ('down' === n.direction ? Ti : Mi)();
        }),
        vn.D(On, function (n) {
          je(n.destination);
        });
    }),
    vn.D(Tn, function () {
      G('scroll', zo);
    }),
    (f.getActiveSlide = function () {
      return Qt(pn().I.activeSlide);
    }),
    (f.getScrollX = function () {
      return dn.scrollX;
    }),
    vn.D(Sn, function () {
      vn.D(Tn, Ke),
        vn.D(Ln, function (n) {
          _e(n.slides, n.destination);
        }),
        vn.D(bn, function (n) {
          Ki(n.section);
        }),
        vn.D(wn, function (n) {
          _i(n.section);
        });
    }),
    vn.D(Sn, function () {
      var n = Tt().credits.position || 'right',
        t = ['left', 'right'].indexOf(n) > -1 ? ''.concat(n, ': 0;') : '',
        e = '\n        <div class="fp-watermark" style="'
          .concat(
            t,
            '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    '
          )
          .concat(Tt().credits.label || 'Made with fullPage.js', '\n            </a>\n        </div>\n    '),
        i = rn(dn.C),
        o = !dn.Zn || Tt().credits.enabled;
      i && i.item && o && i.item.insertAdjacentHTML('beforeend', e);
    }),
    (function () {
      vn.D(yn, function () {
        var t, u, l;
        hn({
          Zn:
            (Tt().licenseKey,
            (t = Tt().licenseKey),
            (u = (function (t) {
              var e = parseInt('514').toString(16);
              if (!t || t.length < 29 || 4 === t.split(n[0]).length) return null;
              var i = ['Each', 'for'][o()]().join(''),
                u = t[['split']]('-'),
                l = [];
              u[i](function (n, t) {
                if (t < 4) {
                  var i = (function (n) {
                    var t = n[n.length - 1],
                      e = ['NaN', 'is'][o()]().join('');
                    return window[e](t)
                      ? r(t)
                      : (function (n) {
                          return n - Kn.length;
                        })(t);
                  })(n);
                  l.push(i);
                  var a = r(n[i]);
                  if (1 === t) {
                    var u = ['pa', 'dS', 't', 'art'].join('');
                    a = a.toString()[u](2, '0');
                  }
                  (e += a), (0 !== t && 1 !== t) || (e += '-');
                }
              });
              var c = 0,
                f = '';
              return (
                t.split('-').forEach(function (n, t) {
                  if (t < 4) {
                    for (var e = 0, i = 0; i < 4; i++)
                      i !== l[t] && ((e += Math.abs(r(n[i]))), isNaN(n[i]) || c++);
                    var o = a(e);
                    f += o;
                  }
                }),
                (f += a(c)),
                { tt: new Date(e + 'T00:00'), et: e.split('-')[2] === 8 * (Kn.length - 2) + '', it: f }
              );
            })(t)),
            (l = (function (n) {
              var t = i[o()]().join('');
              return n && 0 === t.indexOf(n) && n.length === t.length;
            })(t)),
            ((u || l) && ((u && e <= u.tt && u.it === t.split(n[0])[4]) || l || u.et)) || !1)
        });
      });
      var n = ['-'],
        t = '2024-0-31'.split('-'),
        e = new Date(t[0], t[1], t[2]),
        i = ['se', 'licen', '-', 'v3', 'l', 'gp'];
      function o() {
        return [['re', 'verse'].join('')][''.length];
      }
      function r(n) {
        return n ? (isNaN(n) ? n.charCodeAt(0) - 72 : n) : '';
      }
      function a(n) {
        var t = 72 + n;
        return t > 90 && t < 97 && (t += 15), String.fromCharCode(t).toUpperCase();
      }
    })(),
    (f.setKeyboardScrolling = Co),
    (f.shared.nt = No),
    (f.setAllowScrolling = Bo),
    (f.destroy = function (n) {
      de(!1, 'internal'),
        Bo(!0),
        fo(!1),
        Co(!1),
        L(St(), Un),
        vn.R(Tn),
        n &&
          (Vt(0),
          p('img[data-src], source[data-src], audio[data-src], iframe[data-src]', St()).forEach(function (n) {
            un(n, 'src');
          }),
          p('img[data-srcset]').forEach(function (n) {
            un(n, 'srcset');
          }),
          Z(p('#fp-nav, .fp-slidesNav, .fp-controlArrow')),
          y(Ot(pn().C), { height: '', 'background-color': '', padding: '' }),
          y(Ot(pn().slides), { width: '' }),
          y(St(), { height: '', position: '', '-ms-touch-action': '', 'touch-action': '' }),
          y(Gt, { overflow: '', height: '' }),
          D(qt, _n),
          D(Kt, Wn + ' fp-scrollable'),
          Kt.className.split(/\s+/).forEach(function (n) {
            0 === n.indexOf('fp-viewing') && D(Kt, n);
          }),
          Ot(pn().hn).forEach(function (n) {
            Tt().scrollOverflow && Ve.In(n), D(n, 'fp-table active fp-completely ' + lt);
            var t = U(n, 'data-fp-styles');
            t && n.setAttribute('style', t), m(n, Yn) && !wt && n.removeAttribute('data-anchor');
          }),
          Bt(St()),
          [Qn, ot, et].forEach(function (n) {
            p(n, St()).forEach(function (n) {
              z(n);
            });
          }),
          y(St(), { '-webkit-transition': 'none', transition: 'none' }),
          D(St(), Bn),
          o.scrollTo(0, 0),
          [Yn, Jn, it].forEach(function (n) {
            D(p('.' + n), n);
          }));
    }),
    (o.fp_easings = g(o.fp_easings, {
      easeInOutCubic: function (n, t, e, i) {
        return (n /= i / 2) < 1 ? (e / 2) * n * n * n + t : (e / 2) * ((n -= 2) * n * n + 2) + t;
      }
    })),
    o.jQuery &&
      (function (n, t) {
        n && t
          ? (n.fn.fullpage = function (e) {
              (e = n.extend({}, e, { $: n })),
                new t(this[0], e),
                Object.keys(f).forEach(function (n) {
                  Tt().$.fn.fullpage[n] = f[n];
                });
            })
          : v('error', 'jQuery is required to use the jQuery fullpage adapter!');
      })(o.jQuery, Uo),
    Uo
  );
});

import './js/dev/kuloverova.js';
import './js/dev/lgleb.js';
import './js/dev/monsters.js';
