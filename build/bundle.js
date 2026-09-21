/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js"
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js"
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ },

/***/ "./js/main.js"
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) { n[e] = r[e]; } return n; }
var header = document.querySelector('.site-header');
var navLinks = _toConsumableArray(document.querySelectorAll('.nav__link'));
var navTargets = navLinks.map(function (link) {
  return {
    link: link,
    target: document.querySelector(link.getAttribute('href'))
  };
}).filter(function (_ref) {
  var target = _ref.target;
  return target;
});
var SCROLLED_THRESHOLD = 24;
var ACTIVE_LINE_OFFSET = 30;
function getActiveLink() {
  var scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (scrolledToBottom) {
    return navTargets[navTargets.length - 1].link;
  }

  // The active item is the last menu section whose top has passed the bottom edge of the navbar.
  // Sections that are not in the menu keep the previous item highlighted.
  var activeLine = header.offsetHeight + ACTIVE_LINE_OFFSET;
  var active = navTargets[0];
  navTargets.forEach(function (item) {
    if (item.target.getBoundingClientRect().top <= activeLine) {
      active = item;
    }
  });
  return active.link;
}
function updateScrollState() {
  document.body.classList.toggle('scrolled', window.scrollY > SCROLLED_THRESHOLD);
  var activeLink = getActiveLink();
  navLinks.forEach(function (link) {
    link.classList.toggle('is-active', link === activeLink);
  });
}
window.addEventListener('scroll', updateScrollState, {
  passive: true
});
window.addEventListener('load', updateScrollState);
window.addEventListener('resize', updateScrollState);
var carouselTrack = document.querySelector('.carousel__track');
var slides = _toConsumableArray(document.querySelectorAll('.slide'));
var prevButton = document.querySelector('.carousel__arrow--prev');
var nextButton = document.querySelector('.carousel__arrow--next');
var currentSlideIndex = 0;
function renderSlide(index) {
  if (!carouselTrack) return;
  carouselTrack.dataset.slide = index;
  slides.forEach(function (slide, slideIndex) {
    slide.classList.toggle('is-active', slideIndex === index);
  });
}
if (prevButton && nextButton && slides.length) {
  prevButton.addEventListener('click', function () {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    renderSlide(currentSlideIndex);
  });
  nextButton.addEventListener('click', function () {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    renderSlide(currentSlideIndex);
  });
  setInterval(function () {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    renderSlide(currentSlideIndex);
  }, 5000);
}
var modalButtons = document.querySelectorAll('[data-modal-target]');
var modals = _toConsumableArray(document.querySelectorAll('.modal'));
function openModal(targetId) {
  var modal = document.getElementById(targetId);
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}
function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}
modalButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var targetId = button.getAttribute('data-modal-target');
    openModal(targetId);
  });
});
modals.forEach(function (modal) {
  var closeTriggers = modal.querySelectorAll('[data-close-modal]');
  closeTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      return closeModal(modal);
    });
  });
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal(modal);
    }
  });
});
var sessionForm = document.getElementById('focus-form');
var sessionLog = document.getElementById('session-log');
var statsMap = {
  hours: document.querySelector('[data-stat-card="hours"]'),
  streak: document.querySelector('[data-stat-card="streak"]'),
  tasks: document.querySelector('[data-stat-card="tasks"]'),
  stress: document.querySelector('[data-stat-card="stress"]'),
  focusScore: document.querySelector('[data-stat="focusScore"]'),
  hoursLogged: document.querySelector('[data-stat="hours"]'),
  streakValue: document.querySelector('[data-stat="streak"]'),
  modeLabel: document.querySelector('[data-stat="modeLabel"]')
};
var storageKey = 'focusflow-sessions';
var BASELINE = {
  hours: 24,
  streak: 12,
  tasks: 41,
  stress: 34,
  score: 88
};
var MAX_STREAK = 30;
var MAX_STRESS_DROP = 92;
function getSavedSessions() {
  try {
    var saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}
function persistSessions(sessions) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(sessions));
  } catch (error) {
    // Storage can be unavailable (private mode, quota); the dashboard still updates for this visit.
  }
}
function formatTimeLabel() {
  var now = new Date();
  return now.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit'
  });
}
function formatHours(hours) {
  return Number.isInteger(hours) ? "".concat(hours) : hours.toFixed(1);
}
function calculateFocusScore(minutes, energy, distractions) {
  var weightedScore = minutes * 0.9 + Number(energy) * 7 - Number(distractions) * 6;
  return Math.max(40, Math.min(99, Math.round(weightedScore)));
}
function setText(element, value) {
  if (element) element.textContent = value;
}
function updateStats() {
  var sessions = getSavedSessions();
  var totalMinutes = sessions.reduce(function (total, session) {
    return total + Number(session.minutes || 0);
  }, 0);
  var hours = formatHours(BASELINE.hours + totalMinutes / 60);
  var streak = Math.min(BASELINE.streak + sessions.length, MAX_STREAK);
  var stressDrop = Math.min(BASELINE.stress + sessions.length * 3, MAX_STRESS_DROP);
  var latestSession = sessions[0];
  setText(statsMap.hours, hours);
  setText(statsMap.streak, "".concat(streak, " days"));
  setText(statsMap.tasks, "".concat(BASELINE.tasks + sessions.length));
  setText(statsMap.stress, "".concat(stressDrop, "%"));
  setText(statsMap.focusScore, "".concat(latestSession ? latestSession.score : BASELINE.score));
  setText(statsMap.hoursLogged, hours);
  setText(statsMap.streakValue, "".concat(streak, "d"));
  setText(statsMap.modeLabel, latestSession ? latestSession.mode : 'Deep work');
}
function createSessionItem(title, detail) {
  var item = document.createElement('li');
  var strong = document.createElement('strong');
  var small = document.createElement('small');
  strong.textContent = title;
  small.textContent = detail;
  item.append(strong, small);
  return item;
}
function renderSessionLog() {
  var sessions = getSavedSessions();
  if (!sessionLog) return;
  if (!sessions.length) {
    sessionLog.replaceChildren(createSessionItem('No sessions logged yet.', 'Start with a focus sprint to update your dashboard.'));
    return;
  }
  sessionLog.replaceChildren.apply(sessionLog, _toConsumableArray(sessions.slice(0, 5).map(function (session) {
    return createSessionItem("".concat(session.mode, " \xB7 ").concat(session.minutes, " min"), "".concat(session.note || 'Session completed', " \xB7 ").concat(session.time));
  })));
}
function saveSession(event) {
  event.preventDefault();
  if (!sessionForm) return;
  var formData = new FormData(sessionForm);
  var mode = formData.get('mode');
  var minutes = Number(formData.get('minutes'));
  var energy = Number(formData.get('energy'));
  var distractions = Number(formData.get('distractions'));
  var note = formData.get('note') || 'Session completed';
  var score = calculateFocusScore(minutes, energy, distractions);
  var session = {
    mode: mode,
    minutes: minutes,
    energy: energy,
    distractions: distractions,
    score: score,
    note: note,
    time: formatTimeLabel()
  };
  var sessions = [session].concat(_toConsumableArray(getSavedSessions())).slice(0, 8);
  persistSessions(sessions);
  updateStats();
  renderSessionLog();
  sessionForm.reset();
  var minutesInput = sessionForm.querySelector('input[name="minutes"]');
  if (minutesInput) minutesInput.value = 25;
  var energyInput = sessionForm.querySelector('select[name="energy"]');
  if (energyInput) energyInput.value = '6';
  var distractionInput = sessionForm.querySelector('input[name="distractions"]');
  if (distractionInput) distractionInput.value = 2;
}
if (sessionForm) {
  sessionForm.addEventListener('submit', saveSession);
}
updateStats();
renderSessionLog();
updateScrollState();
renderSlide(currentSlideIndex);

/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss"
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/office-bg.jpg */ "./assets/office-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: #091321;
  color: #eaf3ff;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img,
video {
  max-width: 100%;
  display: block;
}

button,
input,
textarea,
select {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  width: 100%;
  position: relative;
  scroll-margin-top: 64px;
}

.eyebrow {
  margin: 0 0 0.75rem;
  color: #6ee7c8;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.76rem;
  font-weight: 700;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 1.04;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

p {
  color: #aac2d8;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.25s ease;
  background: rgba(9, 19, 33, 0.3);
  backdrop-filter: blur(14px);
}

body.scrolled .site-header {
  background: rgba(9, 19, 33, 0.82);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav {
  min-height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: min-height 0.25s ease;
}

body.scrolled .nav {
  min-height: 64px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  font-size: 1.1rem;
}

.brand__mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 0.7rem;
  background: linear-gradient(135deg, #6ee7c8, #5b8cff);
  color: #081421;
  font-weight: 900;
  box-shadow: 0 12px 25px rgba(94, 220, 196, 0.28);
}

.nav__links {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.nav__link {
  position: relative;
  z-index: 1;
  font-size: 1rem;
  color: #aac2d8;
  padding: 0.7rem 0.9rem;
  font-weight: 600;
  transition: color 0.2s ease, font-size 0.25s ease, padding 0.25s ease;
}
.nav__link::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 999px;
  background: linear-gradient(135deg, #6ee7c8, #5b8cff);
  box-shadow: 0 12px 20px rgba(94, 220, 196, 0.2);
  opacity: 0;
  transform: scale(0.85);
  transition: opacity 0.24s ease, transform 0.24s ease;
}
.nav__link.is-active {
  color: #06131b;
}
.nav__link.is-active::before {
  opacity: 1;
  transform: scale(1);
}

body.scrolled .nav__link {
  font-size: 0.82rem;
  padding: 0.5rem 0.9rem;
}

.hero {
  padding-top: 4rem;
  padding-bottom: 3rem;
  background: radial-gradient(circle at top left, rgba(91, 140, 255, 0.24), transparent 30%), linear-gradient(180deg, rgba(9, 19, 33, 0.7), rgba(9, 19, 33, 0.98));
}

.hero__content {
  min-height: calc(100vh - 96px);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 3rem;
}

.hero__copy {
  max-width: 560px;
}

.hero__lead {
  font-size: 1.1rem;
  max-width: 48ch;
  color: #aac2d8;
}

.cta-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0 2rem;
  flex-wrap: wrap;
}

.button {
  border: none;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: -0.02em;
  padding: 0.9rem 1.4rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button--primary {
  background: linear-gradient(135deg, #6ee7c8, #5b8cff);
  color: #04141d;
  box-shadow: 0 18px 28px rgba(94, 220, 196, 0.22);
}

.button--ghost {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #eaf3ff;
}

.hero__meta {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: #eaf3ff;
}

.hero__meta li {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-weight: 500;
  color: #aac2d8;
}

.hero__meta i {
  color: #6ee7c8;
}

.panel {
  padding: 1.3rem;
  background: rgba(9, 20, 35, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  box-shadow: 0 24px 50px rgba(8, 16, 27, 0.32);
  animation: fadeUp 0.8s ease;
}

.panel__header,
.panel__title-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.panel__title-wrap {
  gap: 0.6rem;
}

.status-dot {
  width: 0.7rem;
  height: 0.7rem;
  display: inline-block;
  border-radius: 50%;
  background: #6ee7c8;
  box-shadow: 0 0 18px rgba(110, 231, 200, 0.8);
}

.panel__tag {
  background: rgba(110, 231, 200, 0.12);
  color: #6ee7c8;
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 700;
}

.panel__stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 1.4rem 0 1.2rem;
  gap: 1rem;
}

.mini-stat {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1rem;
}

.mini-stat span {
  display: block;
  color: #aac2d8;
  font-size: 0.8rem;
}

.mini-stat strong {
  display: block;
  margin-top: 0.45rem;
  font-size: 1.7rem;
  font-weight: 800;
}

.mini-stat.accent {
  background: rgba(139, 125, 255, 0.12);
}

.panel__chart {
  height: 180px;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: end;
  gap: 0.6rem;
  padding: 1rem 0.3rem 0.5rem;
}

.panel__chart-bar {
  display: block;
  border-radius: 999px 999px 0 0;
  background: linear-gradient(180deg, #6ee7c8, #5b8cff);
  box-shadow: 0 12px 20px rgba(94, 220, 196, 0.25);
}

.panel__chart-bar--1 {
  height: 35%;
}

.panel__chart-bar--2 {
  height: 52%;
}

.panel__chart-bar--3 {
  height: 60%;
}

.panel__chart-bar--4 {
  height: 72%;
}

.panel__chart-bar--5 {
  height: 89%;
}

.panel__chart-bar--6 {
  height: 100%;
}

.panel__chart-bar--7 {
  height: 78%;
}

.panel__timeline {
  margin-top: 1rem;
  display: grid;
  gap: 0.8rem;
}

.timeline-item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 0.9rem;
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.03);
  color: #aac2d8;
  border: 1px solid transparent;
}

.timeline-item.active {
  border-color: rgba(110, 231, 200, 0.5);
  color: #eaf3ff;
  background: rgba(110, 231, 200, 0.08);
}

.timeline-item__time {
  font-weight: 700;
  color: #6ee7c8;
}

.stats-section {
  background: #0d1a2a;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
  padding: 2.5rem 0;
}

.stat-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.1rem;
  padding: 1.5rem;
}

.stat-card__icon {
  width: 2.7rem;
  height: 2.7rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background: rgba(110, 231, 200, 0.12);
  color: #6ee7c8;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.stat-card__label,
.stat-card small {
  display: block;
  color: #aac2d8;
}

.stat-card strong {
  display: block;
  margin: 0.6rem 0 0.2rem;
  font-size: clamp(1.7rem, 2vw, 2.3rem);
  line-height: 1.1;
}

.feature-section,
.result-section,
.tracker-section,
.video-section,
.connect-section {
  padding: 6rem 0;
}

.section-heading {
  max-width: 620px;
  margin: 0 auto 2.4rem;
  text-align: center;
}

.section-heading--left {
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}

.section-heading--light h2,
.section-heading--light .eyebrow {
  color: #eaf3ff;
}

.feature-grid,
.result-grid {
  display: grid;
  gap: 1.5rem;
}

.three-col {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card,
.result-card {
  background: #102132;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.35rem;
  padding: 2rem 1.5rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.feature-card:hover,
.result-card:hover {
  transform: translateY(-4px);
  border-color: rgba(110, 231, 200, 0.5);
}

.feature-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.85rem;
  background: rgba(110, 231, 200, 0.12);
  color: #6ee7c8;
  margin-bottom: 1rem;
}

.feature-card h3,
.result-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.carousel-section {
  background: linear-gradient(180deg, #0d1f2d, #081422);
  padding: 6rem 0;
}

.carousel {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.carousel__viewport {
  overflow: hidden;
}

.carousel__track {
  display: flex;
  transition: transform 0.35s ease;
}

.carousel__track[data-slide="0"] {
  transform: translateX(0%);
}

.carousel__track[data-slide="1"] {
  transform: translateX(-100%);
}

.carousel__track[data-slide="2"] {
  transform: translateX(-200%);
}

.slide {
  min-width: 100%;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
}

.slide__content {
  max-width: 540px;
  margin: 0 auto;
}

.slide__tag {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(110, 231, 200, 0.12);
  color: #6ee7c8;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.slide ul {
  margin: 1.2rem 0 0;
  padding-left: 1.2rem;
  color: #eaf3ff;
}

.carousel__arrow {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: #eaf3ff;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.carousel__arrow:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
}

.fixed-image-section {
  background-image: linear-gradient(rgba(9, 19, 33, 0.6), rgba(9, 19, 33, 0.7)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 480px;
  display: flex;
  align-items: center;
}

.fixed-image-section__content {
  max-width: 620px;
  padding: 3rem 0;
}

.result-card {
  background: rgba(17, 30, 46, 0.9);
}

.result-card__number {
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: 800;
  color: #6ee7c8;
}

.tracker-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.5rem;
  align-items: start;
}

.tracker-panel {
  background: #0f1f2d;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 24px 50px rgba(8, 16, 27, 0.32);
}

.focus-form {
  display: grid;
  gap: 1.2rem;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.focus-form label {
  display: grid;
  gap: 0.5rem;
  color: #eaf3ff;
  font-weight: 600;
}

.focus-form span {
  color: #aac2d8;
  font-size: 0.88rem;
}

.focus-form input,
.focus-form select,
.focus-form textarea {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.85rem;
  background: rgba(255, 255, 255, 0.04);
  color: #eaf3ff;
  padding: 0.9rem 1rem;
}

.focus-form textarea {
  resize: vertical;
  min-height: 90px;
}

.tracker-panel--stats {
  background: linear-gradient(180deg, rgba(17, 30, 46, 0.9), rgba(9, 19, 33, 0.95));
}

.tracker-mini-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.tracker-metric {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1rem;
}

.tracker-metric span {
  display: block;
  color: #aac2d8;
  font-size: 0.8rem;
}

.tracker-metric strong {
  display: block;
  margin-top: 0.5rem;
  font-size: 1.4rem;
  line-height: 1.1;
}

.tracker-metric.accent {
  background: rgba(110, 231, 200, 0.12);
}

.session-log-wrap {
  margin-top: 1.4rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.session-log {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.8rem;
}

.session-log li {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.9rem;
  padding: 0.9rem 1rem;
}

.session-log strong {
  display: block;
  color: #eaf3ff;
  margin-bottom: 0.2rem;
}

.session-log small {
  color: #aac2d8;
}

.video-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: center;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
}

.check-list li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #eaf3ff;
  margin-bottom: 0.75rem;
}

.check-list i {
  color: #6ee7c8;
}

.video-wrap {
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 22px 44px rgba(8, 16, 27, 0.34);
}

video {
  width: 100%;
  height: auto;
  background: #000;
}

.connect-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 2.2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  background: linear-gradient(135deg, rgba(110, 231, 200, 0.08), rgba(91, 140, 255, 0.12));
}

.site-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: #07131f;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;
}

.socials {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.socials a:hover {
  transform: translateY(-2px);
  border-color: rgba(110, 231, 200, 0.5);
}

.modal {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal.is-open {
  display: flex;
}

.modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(2, 7, 12, 0.72);
}

.modal__dialog {
  position: relative;
  width: min(90vw, 500px);
  background: #0f1d2c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  padding: 2rem 1.5rem 1.5rem;
  z-index: 1;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.36);
}

.modal__close {
  position: absolute;
  top: 0.8rem;
  right: 0.9rem;
  border: none;
  background: transparent;
  color: #eaf3ff;
  font-size: 2rem;
  cursor: pointer;
}

.modal__dialog ul,
.modal__dialog ol {
  margin: 1rem 0 0;
  padding-left: 1.25rem;
  color: #eaf3ff;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 900px) {
  .hero__content,
.video-layout,
.three-col {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero__content {
    min-height: auto;
    padding-top: 2.5rem;
    padding-bottom: 2rem;
  }

  .connect-box,
.footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media (max-width: 640px) {
  .nav {
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    padding: 0.8rem 0 1rem;
  }

  .nav__links {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .carousel {
    grid-template-columns: 1fr;
  }

  .carousel__arrow {
    display: none;
  }

  .connect-box {
    padding: 1.4rem;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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A;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AANF;;AASA;EACE,aAAA;EACA,WAAA;EACA,cAnoBK;EAooBL,gBAAA;AANF;;AASA;EACE,cAvoBW;EAwoBX,kBAAA;AANF;;AASA;;;EAGE,WAAA;EACA,2CAAA;EACA,sBAAA;EACA,qCAAA;EACA,cAnpBK;EAopBL,oBAAA;AANF;;AASA;EACE,gBAAA;EACA,gBAAA;AANF;;AASA;EACE,iFAAA;AANF;;AASA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AANF;;AASA;EACE,qCAAA;EACA,2CAAA;EACA,mBAAA;EACA,aAAA;AANF;;AASA;EACE,cAAA;EACA,cA9qBW;EA+qBX,iBAAA;AANF;;AASA;EACE,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AANF;;AASA;EACE,qCAAA;AANF;;AASA;EACE,kBAAA;EACA,mBAAA;EACA,+CAAA;AANF;;AASA;EACE,gBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,WAAA;AANF;;AASA;EACE,qCAAA;EACA,2CAAA;EACA,qBAAA;EACA,oBAAA;AANF;;AASA;EACE,cAAA;EACA,cArtBK;EAstBL,qBAAA;AANF;;AASA;EACE,cAztBW;AAmtBb;;AASA;EACE,aAAA;EACA,kCAAA;EACA,SAAA;EACA,mBAAA;AANF;;AASA;EACE,gBAAA;EACA,UAAA;EACA,kBAAA;AANF;;AASA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,cA9uBK;EA+uBL,sBAAA;AANF;;AASA;EACE,cAtvBO;AAgvBT;;AASA;EACE,qBAAA;EACA,gBAAA;EACA,2CAAA;EACA,6CAAA;AANF;;AASA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;AANF;;AASA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,oBAAA;EACA,2CAAA;EACA,qBAAA;EACA,wFAAA;AANF;;AASA;EACE,+CAAA;EACA,mBAAA;AANF;;AASA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,iBAAA;AANF;;AASA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AANF;;AASA;EAlxBE,aAAA;EACA,mBAAA;EACA,uBAAA;EAkxBA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,2CAAA;EACA,qCAAA;EACA,uDAAA;AAJF;;AAOA;EACE,2BAAA;EACA,sCAAA;AAJF;;AAOA;EACE,eAAA;EACA,QAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AAJF;;AAOA;EACE,aAAA;AAJF;;AAOA;EACE,kBAAA;EACA,QAAA;EACA,gCAAA;AAJF;;AAOA;EACE,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,2CAAA;EACA,sBAAA;EACA,2BAAA;EACA,UAAA;EACA,2CAAA;AAJF;;AAOA;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,cAn1BK;EAo1BL,eAAA;EACA,eAAA;AAJF;;AAOA;;EAEE,gBAAA;EACA,qBAAA;EACA,cA51BK;AAw1BP;;AAOA;EACE;IACE,UAAA;IACA,2BAAA;EAJF;EAMA;IACE,UAAA;IACA,wBAAA;EAJF;AACF;AAOA;EACE;;;IAGE,0BAAA;EALF;;EAQA;IACE,gDAAA;EALF;;EAQA;IACE,gBAAA;IACA,mBAAA;IACA,oBAAA;EALF;;EAQA;;IAEE,sBAAA;IACA,uBAAA;EALF;AACF;AAQA;EACE;IACE,SAAA;IACA,sBAAA;IACA,uBAAA;IACA,sBAAA;EANF;;EASA;IACE,eAAA;IACA,uBAAA;IACA,WAAA;EANF;;EASA;IACE,0BAAA;EANF;;EASA;IACE,0BAAA;EANF;;EASA;IACE,aAAA;EANF;;EASA;IACE,eAAA;EANF;AACF","sourcesContent":["$bg-dark: #091321;\n$bg-deep: #111b2d;\n$panel-dark: rgba(15, 26, 42, 0.92);\n$panel-light: #f7fbff;\n$surface-soft: #edf6ff;\n$accent: #6ee7c8;\n$accent-strong: #5b8cff;\n$purple: #8e7dff;\n$text: #eaf3ff;\n$text-muted: #aac2d8;\n$shadow: rgba(8, 16, 27, 0.32);\n$border: rgba(255, 255, 255, 0.08);\n\n$nav-height: 96px;\n$nav-height-scrolled: 64px;\n$slide-count: 3;\n\n@mixin section-spacing {\n  padding: 6rem 0;\n}\n\n@mixin flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin card-shadow {\n  box-shadow: 0 24px 50px $shadow;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Inter\", sans-serif;\n  background: $bg-dark;\n  color: $text;\n  line-height: 1.6;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nimg,\nvideo {\n  max-width: 100%;\n  display: block;\n}\n\nbutton,\ninput,\ntextarea,\nselect {\n  font: inherit;\n}\n\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.section {\n  width: 100%;\n  position: relative;\n  scroll-margin-top: $nav-height-scrolled;\n}\n\n.eyebrow {\n  margin: 0 0 0.75rem;\n  color: $accent;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n\nh1,\nh2,\nh3,\np {\n  margin-top: 0;\n}\n\nh1 {\n  font-size: clamp(2.8rem, 5vw, 5rem);\n  line-height: 1.04;\n  margin-bottom: 1rem;\n}\n\nh2 {\n  font-size: clamp(2rem, 3vw, 3rem);\n  line-height: 1.1;\n  margin-bottom: 1rem;\n}\n\np {\n  color: $text-muted;\n}\n\n.site-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  transition: all 0.25s ease;\n  background: rgba(9, 19, 33, 0.3);\n  backdrop-filter: blur(14px);\n}\n\nbody.scrolled .site-header {\n  background: rgba(9, 19, 33, 0.82);\n  border-bottom: 1px solid $border;\n}\n\n.nav {\n  min-height: $nav-height;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: min-height 0.25s ease;\n}\n\nbody.scrolled .nav {\n  min-height: $nav-height-scrolled;\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  font-size: 1.1rem;\n}\n\n.brand__mark {\n  @include flex-center;\n  width: 2.1rem;\n  height: 2.1rem;\n  border-radius: 0.7rem;\n  background: linear-gradient(135deg, $accent, $accent-strong);\n  color: #081421;\n  font-weight: 900;\n  box-shadow: 0 12px 25px rgba(94, 220, 196, 0.28);\n}\n\n.nav__links {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 1.4rem;\n  padding: 0.5rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid $border;\n}\n\n.nav__link {\n  position: relative;\n  z-index: 1;\n  font-size: 1rem;\n  color: $text-muted;\n  padding: 0.7rem 0.9rem;\n  font-weight: 600;\n  transition: color 0.2s ease, font-size 0.25s ease, padding 0.25s ease;\n\n  // Highlight pill behind the active item; fades and scales in as the reading position changes.\n  &::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    z-index: -1;\n    border-radius: 999px;\n    background: linear-gradient(135deg, $accent, $accent-strong);\n    box-shadow: 0 12px 20px rgba(94, 220, 196, 0.2);\n    opacity: 0;\n    transform: scale(0.85);\n    transition: opacity 0.24s ease, transform 0.24s ease;\n  }\n\n  &.is-active {\n    color: #06131b;\n\n    &::before {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n}\n\nbody.scrolled .nav__link {\n  font-size: 0.82rem;\n  padding: 0.5rem 0.9rem;\n}\n\n.hero {\n  padding-top: 4rem;\n  padding-bottom: 3rem;\n  background: radial-gradient(circle at top left, rgba(91, 140, 255, 0.24), transparent 30%),\n    linear-gradient(180deg, rgba(9, 19, 33, 0.7), rgba(9, 19, 33, 0.98));\n}\n\n.hero__content {\n  min-height: calc(100vh - #{$nav-height});\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  align-items: center;\n  gap: 3rem;\n}\n\n.hero__copy {\n  max-width: 560px;\n}\n\n.hero__lead {\n  font-size: 1.1rem;\n  max-width: 48ch;\n  color: $text-muted;\n}\n\n.cta-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin: 1.5rem 0 2rem;\n  flex-wrap: wrap;\n}\n\n.button {\n  border: none;\n  border-radius: 999px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  padding: 0.9rem 1.4rem;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.button:hover {\n  transform: translateY(-1px);\n}\n\n.button--primary {\n  background: linear-gradient(135deg, $accent, $accent-strong);\n  color: #04141d;\n  box-shadow: 0 18px 28px rgba(94, 220, 196, 0.22);\n}\n\n.button--ghost {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid $border;\n  color: $text;\n}\n\n.hero__meta {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  color: $text;\n}\n\n.hero__meta li {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  font-weight: 500;\n  color: $text-muted;\n}\n\n.hero__meta i {\n  color: $accent;\n}\n\n.panel {\n  padding: 1.3rem;\n  background: rgba(9, 20, 35, 0.75);\n  border: 1px solid $border;\n  border-radius: 1.5rem;\n  @include card-shadow;\n  animation: fadeUp 0.8s ease;\n}\n\n.panel__header,\n.panel__title-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.panel__title-wrap {\n  gap: 0.6rem;\n}\n\n.status-dot {\n  width: 0.7rem;\n  height: 0.7rem;\n  display: inline-block;\n  border-radius: 50%;\n  background: $accent;\n  box-shadow: 0 0 18px rgba(110, 231, 200, 0.8);\n}\n\n.panel__tag {\n  background: rgba(110, 231, 200, 0.12);\n  color: $accent;\n  border-radius: 999px;\n  padding: 0.35rem 0.7rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n\n.panel__stats {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 1.4rem 0 1.2rem;\n  gap: 1rem;\n}\n\n.mini-stat {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid $border;\n  border-radius: 1rem;\n  padding: 1rem;\n}\n\n.mini-stat span {\n  display: block;\n  color: $text-muted;\n  font-size: 0.8rem;\n}\n\n.mini-stat strong {\n  display: block;\n  margin-top: 0.45rem;\n  font-size: 1.7rem;\n  font-weight: 800;\n}\n\n.mini-stat.accent {\n  background: rgba(139, 125, 255, 0.12);\n}\n\n.panel__chart {\n  height: 180px;\n  display: grid;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  align-items: end;\n  gap: 0.6rem;\n  padding: 1rem 0.3rem 0.5rem;\n}\n\n.panel__chart-bar {\n  display: block;\n  border-radius: 999px 999px 0 0;\n  background: linear-gradient(180deg, $accent, $accent-strong);\n  box-shadow: 0 12px 20px rgba(94, 220, 196, 0.25);\n}\n\n$chart-bar-heights: 35%, 52%, 60%, 72%, 89%, 100%, 78%;\n\n@for $i from 1 through length($chart-bar-heights) {\n  .panel__chart-bar--#{$i} {\n    height: nth($chart-bar-heights, $i);\n  }\n}\n\n.panel__timeline {\n  margin-top: 1rem;\n  display: grid;\n  gap: 0.8rem;\n}\n\n.timeline-item {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.8rem 0.9rem;\n  border-radius: 0.9rem;\n  background: rgba(255, 255, 255, 0.03);\n  color: $text-muted;\n  border: 1px solid transparent;\n}\n\n.timeline-item.active {\n  border-color: rgba(110, 231, 200, 0.5);\n  color: $text;\n  background: rgba(110, 231, 200, 0.08);\n}\n\n.timeline-item__time {\n  font-weight: 700;\n  color: $accent;\n}\n\n.stats-section {\n  background: #0d1a2a;\n  border-top: 1px solid $border;\n  border-bottom: 1px solid $border;\n}\n\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1.2rem;\n  padding: 2.5rem 0;\n}\n\n.stat-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid $border;\n  border-radius: 1.1rem;\n  padding: 1.5rem;\n}\n\n.stat-card__icon {\n  width: 2.7rem;\n  height: 2.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.8rem;\n  background: rgba(110, 231, 200, 0.12);\n  color: $accent;\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n}\n\n.stat-card__label,\n.stat-card small {\n  display: block;\n  color: $text-muted;\n}\n\n.stat-card strong {\n  display: block;\n  margin: 0.6rem 0 0.2rem;\n  font-size: clamp(1.7rem, 2vw, 2.3rem);\n  line-height: 1.1;\n}\n\n.feature-section,\n.result-section,\n.tracker-section,\n.video-section,\n.connect-section {\n  @include section-spacing;\n}\n\n.section-heading {\n  max-width: 620px;\n  margin: 0 auto 2.4rem;\n  text-align: center;\n}\n\n.section-heading--left {\n  text-align: left;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.section-heading--light h2,\n.section-heading--light .eyebrow {\n  color: $text;\n}\n\n.feature-grid,\n.result-grid {\n  display: grid;\n  gap: 1.5rem;\n}\n\n.three-col {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.feature-card,\n.result-card {\n  background: #102132;\n  border: 1px solid $border;\n  border-radius: 1.35rem;\n  padding: 2rem 1.5rem;\n  transition: transform 0.2s ease, border-color 0.2s ease;\n}\n\n.feature-card:hover,\n.result-card:hover {\n  transform: translateY(-4px);\n  border-color: rgba(110, 231, 200, 0.5);\n}\n\n.feature-card__icon {\n  @include flex-center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.85rem;\n  background: rgba(110, 231, 200, 0.12);\n  color: $accent;\n  margin-bottom: 1rem;\n}\n\n.feature-card h3,\n.result-card h3 {\n  font-size: 1.3rem;\n  margin-bottom: 0.8rem;\n}\n\n.carousel-section {\n  background: linear-gradient(180deg, #0d1f2d, #081422);\n  padding: 6rem 0;\n}\n\n.carousel {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 1rem;\n  align-items: center;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.carousel__viewport {\n  overflow: hidden;\n}\n\n.carousel__track {\n  display: flex;\n  transition: transform 0.35s ease;\n}\n\n@for $i from 0 to $slide-count {\n  .carousel__track[data-slide=\"#{$i}\"] {\n    transform: translateX(#{$i * -100%});\n  }\n}\n\n.slide {\n  min-width: 100%;\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid $border;\n  border-radius: 1.5rem;\n}\n\n.slide__content {\n  max-width: 540px;\n  margin: 0 auto;\n}\n\n.slide__tag {\n  display: inline-block;\n  margin-bottom: 1rem;\n  padding: 0.5rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(110, 231, 200, 0.12);\n  color: $accent;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n\n.slide ul {\n  margin: 1.2rem 0 0;\n  padding-left: 1.2rem;\n  color: $text;\n}\n\n.carousel__arrow {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  border: 1px solid $border;\n  background: rgba(255, 255, 255, 0.04);\n  color: $text;\n  cursor: pointer;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n\n.carousel__arrow:hover {\n  background: rgba(255, 255, 255, 0.08);\n  transform: translateY(-1px);\n}\n\n.fixed-image-section {\n  background-image: linear-gradient(rgba(9, 19, 33, 0.6), rgba(9, 19, 33, 0.7)),\n    url(\"../assets/office-bg.jpg\");\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 480px;\n  display: flex;\n  align-items: center;\n}\n\n.fixed-image-section__content {\n  max-width: 620px;\n  padding: 3rem 0;\n}\n\n.result-card {\n  background: rgba(17, 30, 46, 0.9);\n}\n\n.result-card__number {\n  display: inline-block;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  color: $accent;\n}\n\n.tracker-layout {\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  gap: 1.5rem;\n  align-items: start;\n}\n\n.tracker-panel {\n  background: #0f1f2d;\n  border: 1px solid $border;\n  border-radius: 1.5rem;\n  padding: 2rem;\n  box-shadow: 0 24px 50px $shadow;\n}\n\n.focus-form {\n  display: grid;\n  gap: 1.2rem;\n}\n\n.field-row {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.focus-form label {\n  display: grid;\n  gap: 0.5rem;\n  color: $text;\n  font-weight: 600;\n}\n\n.focus-form span {\n  color: $text-muted;\n  font-size: 0.88rem;\n}\n\n.focus-form input,\n.focus-form select,\n.focus-form textarea {\n  width: 100%;\n  border: 1px solid $border;\n  border-radius: 0.85rem;\n  background: rgba(255, 255, 255, 0.04);\n  color: $text;\n  padding: 0.9rem 1rem;\n}\n\n.focus-form textarea {\n  resize: vertical;\n  min-height: 90px;\n}\n\n.tracker-panel--stats {\n  background: linear-gradient(180deg, rgba(17, 30, 46, 0.9), rgba(9, 19, 33, 0.95));\n}\n\n.tracker-mini-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.tracker-metric {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid $border;\n  border-radius: 1rem;\n  padding: 1rem;\n}\n\n.tracker-metric span {\n  display: block;\n  color: $text-muted;\n  font-size: 0.8rem;\n}\n\n.tracker-metric strong {\n  display: block;\n  margin-top: 0.5rem;\n  font-size: 1.4rem;\n  line-height: 1.1;\n}\n\n.tracker-metric.accent {\n  background: rgba(110, 231, 200, 0.12);\n}\n\n.session-log-wrap {\n  margin-top: 1.4rem;\n  padding-top: 1.2rem;\n  border-top: 1px solid $border;\n}\n\n.session-log {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 0.8rem;\n}\n\n.session-log li {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid $border;\n  border-radius: 0.9rem;\n  padding: 0.9rem 1rem;\n}\n\n.session-log strong {\n  display: block;\n  color: $text;\n  margin-bottom: 0.2rem;\n}\n\n.session-log small {\n  color: $text-muted;\n}\n\n.video-layout {\n  display: grid;\n  grid-template-columns: 0.9fr 1.1fr;\n  gap: 2rem;\n  align-items: center;\n}\n\n.check-list {\n  list-style: none;\n  padding: 0;\n  margin: 1.5rem 0 0;\n}\n\n.check-list li {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  color: $text;\n  margin-bottom: 0.75rem;\n}\n\n.check-list i {\n  color: $accent;\n}\n\n.video-wrap {\n  border-radius: 1.5rem;\n  overflow: hidden;\n  border: 1px solid $border;\n  box-shadow: 0 22px 44px rgba(8, 16, 27, 0.34);\n}\n\nvideo {\n  width: 100%;\n  height: auto;\n  background: #000;\n}\n\n.connect-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 2rem 2.2rem;\n  border: 1px solid $border;\n  border-radius: 1.5rem;\n  background: linear-gradient(135deg, rgba(110, 231, 200, 0.08), rgba(91, 140, 255, 0.12));\n}\n\n.site-footer {\n  border-top: 1px solid $border;\n  background: #07131f;\n}\n\n.footer-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.6rem 0;\n}\n\n.socials {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n}\n\n.socials a {\n  @include flex-center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  border: 1px solid $border;\n  background: rgba(255, 255, 255, 0.03);\n  transition: transform 0.2s ease, border-color 0.2s ease;\n}\n\n.socials a:hover {\n  transform: translateY(-2px);\n  border-color: rgba(110, 231, 200, 0.5);\n}\n\n.modal {\n  position: fixed;\n  inset: 0;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n\n.modal.is-open {\n  display: flex;\n}\n\n.modal__backdrop {\n  position: absolute;\n  inset: 0;\n  background: rgba(2, 7, 12, 0.72);\n}\n\n.modal__dialog {\n  position: relative;\n  width: min(90vw, 500px);\n  background: #0f1d2c;\n  border: 1px solid $border;\n  border-radius: 1.25rem;\n  padding: 2rem 1.5rem 1.5rem;\n  z-index: 1;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.36);\n}\n\n.modal__close {\n  position: absolute;\n  top: 0.8rem;\n  right: 0.9rem;\n  border: none;\n  background: transparent;\n  color: $text;\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.modal__dialog ul,\n.modal__dialog ol {\n  margin: 1rem 0 0;\n  padding-left: 1.25rem;\n  color: $text;\n}\n\n@keyframes fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@media (max-width: 900px) {\n  .hero__content,\n  .video-layout,\n  .three-col {\n    grid-template-columns: 1fr;\n  }\n\n  .stats-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .hero__content {\n    min-height: auto;\n    padding-top: 2.5rem;\n    padding-bottom: 2rem;\n  }\n\n  .connect-box,\n  .footer-inner {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n@media (max-width: 640px) {\n  .nav {\n    gap: 1rem;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0.8rem 0 1rem;\n  }\n\n  .nav__links {\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .carousel {\n    grid-template-columns: 1fr;\n  }\n\n  .carousel__arrow {\n    display: none;\n  }\n\n  .connect-box {\n    padding: 1.4rem;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./index.html"
/*!********************!*\
  !*** ./index.html ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.svg */ "./assets/favicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/video-poster.jpg */ "./assets/video-poster.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/focus-video.mp4 */ "./assets/focus-video.mp4"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <meta\n      name=\"description\"\n      content=\"FocusFlow helps you build better daily focus habits with a calm, personal productivity dashboard.\"\n    />\n    <title>FocusFlow | Personal Focus Dashboard</title>\n    <link rel=\"icon\" type=\"image/svg+xml\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link\n      rel=\"stylesheet\"\n      href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css\"\n      crossorigin=\"anonymous\"\n      referrerpolicy=\"no-referrer\"\n    />\n  </head>\n  <body>\n    <header class=\"site-header\" id=\"top\">\n      <nav class=\"nav container\" aria-label=\"Main navigation\">\n        <a class=\"brand\" href=\"#top\" aria-label=\"FocusFlow home\">\n          <span class=\"brand__mark\">F</span>\n          <span>FocusFlow</span>\n        </a>\n\n        <div class=\"nav__links\">\n          <a href=\"#top\" class=\"nav__link is-active\">Overview</a>\n          <a href=\"#features\" class=\"nav__link\">Features</a>\n          <a href=\"#modes\" class=\"nav__link\">Modes</a>\n          <a href=\"#results\" class=\"nav__link\">Results</a>\n          <a href=\"#connect\" class=\"nav__link\">Connect</a>\n        </div>\n      </nav>\n    </header>\n\n    <main>\n      <section class=\"section hero\">\n        <div class=\"container hero__content\">\n          <div class=\"hero__copy\">\n            <p class=\"eyebrow\">Personal productivity OS</p>\n            <h1>Build momentum before the day steals it.</h1>\n            <p class=\"hero__lead\">\n              FocusFlow gives you a calmer, clearer system for protecting attention,\n              building rituals, and tracking the wins that keep you moving.\n            </p>\n\n            <div class=\"cta-row\">\n              <a class=\"button button--primary\" href=\"#features\">Start your ritual</a>\n              <button class=\"button button--ghost\" type=\"button\" data-modal-target=\"modal-focus\">\n                Watch demo\n              </button>\n            </div>\n\n            <ul class=\"hero__meta\" aria-label=\"Highlights\">\n              <li><i class=\"fa-solid fa-bolt\"></i> 2.8x deeper focus</li>\n              <li><i class=\"fa-solid fa-clock\"></i> 25-minute sprints</li>\n              <li><i class=\"fa-solid fa-shield-heart\"></i> Built for clarity</li>\n            </ul>\n          </div>\n\n          <div class=\"hero__panel panel\" aria-label=\"Dashboard preview\">\n            <div class=\"panel__header\">\n              <div class=\"panel__title-wrap\">\n                <span class=\"status-dot\"></span>\n                <span>Today</span>\n              </div>\n              <span class=\"panel__tag\">Focus score</span>\n            </div>\n\n            <div class=\"panel__stats\">\n              <div class=\"mini-stat\">\n                <span>Deep work</span>\n                <strong>88%</strong>\n              </div>\n              <div class=\"mini-stat accent\">\n                <span>Energy</span>\n                <strong>High</strong>\n              </div>\n            </div>\n\n            <div class=\"panel__chart\" aria-hidden=\"true\">\n              <span class=\"panel__chart-bar panel__chart-bar--1\"></span>\n              <span class=\"panel__chart-bar panel__chart-bar--2\"></span>\n              <span class=\"panel__chart-bar panel__chart-bar--3\"></span>\n              <span class=\"panel__chart-bar panel__chart-bar--4\"></span>\n              <span class=\"panel__chart-bar panel__chart-bar--5\"></span>\n              <span class=\"panel__chart-bar panel__chart-bar--6\"></span>\n              <span class=\"panel__chart-bar panel__chart-bar--7\"></span>\n            </div>\n\n            <div class=\"panel__timeline\">\n              <div class=\"timeline-item\">\n                <span class=\"timeline-item__time\">09:00</span>\n                <span class=\"timeline-item__label\">Planning sprint</span>\n              </div>\n              <div class=\"timeline-item active\">\n                <span class=\"timeline-item__time\">11:30</span>\n                <span class=\"timeline-item__label\">Deep work block</span>\n              </div>\n              <div class=\"timeline-item\">\n                <span class=\"timeline-item__time\">15:00</span>\n                <span class=\"timeline-item__label\">Reflection</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"section stats-section\">\n        <div class=\"container stats-grid\">\n          <div class=\"stat-card\">\n            <div class=\"stat-card__icon\"><i class=\"fa-regular fa-clock\"></i></div>\n            <span class=\"stat-card__label\">Hours protected</span>\n            <strong data-stat-card=\"hours\">24</strong>\n            <small>this week</small>\n          </div>\n          <div class=\"stat-card\">\n            <div class=\"stat-card__icon\"><i class=\"fa-solid fa-fire\"></i></div>\n            <span class=\"stat-card__label\">Focus streak</span>\n            <strong data-stat-card=\"streak\">12 days</strong>\n            <small>without breaking flow</small>\n          </div>\n          <div class=\"stat-card\">\n            <div class=\"stat-card__icon\"><i class=\"fa-solid fa-check\"></i></div>\n            <span class=\"stat-card__label\">Tasks finished</span>\n            <strong data-stat-card=\"tasks\">41</strong>\n            <small>with less friction</small>\n          </div>\n          <div class=\"stat-card\">\n            <div class=\"stat-card__icon\"><i class=\"fa-solid fa-heart-pulse\"></i></div>\n            <span class=\"stat-card__label\">Stress drop</span>\n            <strong data-stat-card=\"stress\">34%</strong>\n            <small>after better planning</small>\n          </div>\n        </div>\n      </section>\n\n      <section id=\"features\" class=\"section feature-section\">\n        <div class=\"container\">\n          <div class=\"section-heading\">\n            <p class=\"eyebrow\">Why it feels different</p>\n            <h2>Focus that fits real life.</h2>\n          </div>\n\n          <div class=\"feature-grid three-col\">\n            <article class=\"feature-card\">\n              <div class=\"feature-card__icon\"><i class=\"fa-solid fa-inbox\"></i></div>\n              <h3>Clear priorities</h3>\n              <p>\n                Zero in on the work that matters most and let the rest be intentionally parked.\n              </p>\n            </article>\n\n            <article class=\"feature-card\">\n              <div class=\"feature-card__icon\"><i class=\"fa-solid fa-stopwatch\"></i></div>\n              <h3>Better sprints</h3>\n              <p>\n                Short, structured time blocks help you maintain energy without burnout.\n              </p>\n            </article>\n\n            <article class=\"feature-card\">\n              <div class=\"feature-card__icon\"><i class=\"fa-solid fa-chart-line\"></i></div>\n              <h3>Visible progress</h3>\n              <p>\n                Daily momentum is easy to see, so motivation compounds instead of fading.\n              </p>\n            </article>\n          </div>\n        </div>\n      </section>\n\n      <section id=\"modes\" class=\"section carousel-section\">\n        <div class=\"container\">\n          <div class=\"section-heading section-heading--light\">\n            <p class=\"eyebrow\">Choose your mode</p>\n            <h2>Match your energy to the moment.</h2>\n          </div>\n\n          <div class=\"carousel\" aria-label=\"Focus modes carousel\">\n            <button class=\"carousel__arrow carousel__arrow--prev\" type=\"button\" aria-label=\"Previous slide\">\n              <i class=\"fa-solid fa-chevron-left\"></i>\n            </button>\n\n            <div class=\"carousel__viewport\">\n              <div class=\"carousel__track\" data-slide=\"0\">\n                <article class=\"slide is-active\">\n                  <div class=\"slide__content\">\n                    <span class=\"slide__tag\">Deep work</span>\n                    <h3>Quiet hours for your hardest task.</h3>\n                    <p>\n                      Protect uninterrupted attention with a distraction-free block designed for meaningful output.\n                    </p>\n                    <ul>\n                      <li>25-minute sprint</li>\n                      <li>Single goal only</li>\n                      <li>Fully offline mode</li>\n                    </ul>\n                  </div>\n                </article>\n\n                <article class=\"slide\">\n                  <div class=\"slide__content\">\n                    <span class=\"slide__tag\">Daily reset</span>\n                    <h3>Reset your energy before the work piles up.</h3>\n                    <p>\n                      Use a gentle rhythm to regain clarity, reflect, and prioritize what actually matters today.\n                    </p>\n                    <ul>\n                      <li>Planning prompts</li>\n                      <li>Short check-ins</li>\n                      <li>Priority filter</li>\n                    </ul>\n                  </div>\n                </article>\n\n                <article class=\"slide\">\n                  <div class=\"slide__content\">\n                    <span class=\"slide__tag\">Recovery mode</span>\n                    <h3>Keep going without draining yourself.</h3>\n                    <p>\n                      Balance effort with rest by tracking your energy and adjusting your plan before you crash.\n                    </p>\n                    <ul>\n                      <li>Energy logging</li>\n                      <li>Recovery suggestions</li>\n                      <li>Weekly reflection</li>\n                    </ul>\n                  </div>\n                </article>\n              </div>\n            </div>\n\n            <button class=\"carousel__arrow carousel__arrow--next\" type=\"button\" aria-label=\"Next slide\">\n              <i class=\"fa-solid fa-chevron-right\"></i>\n            </button>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"section fixed-image-section\">\n        <div class=\"container fixed-image-section__content\">\n          <p class=\"eyebrow\">Morning ritual</p>\n          <h2>Protect the first 30 minutes of your day.</h2>\n          <p>\n            Turn scattered effort into a repeatable system that helps you start with calm confidence and end with momentum.\n          </p>\n          <button class=\"button button--primary\" type=\"button\" data-modal-target=\"modal-ritual\">\n            See the ritual\n          </button>\n        </div>\n      </section>\n\n      <section id=\"results\" class=\"section result-section\">\n        <div class=\"container\">\n          <div class=\"section-heading\">\n            <p class=\"eyebrow\">Real habits, real wins</p>\n            <h2>What changes when your attention gets a system.</h2>\n          </div>\n\n          <div class=\"result-grid three-col\">\n            <article class=\"result-card\">\n              <span class=\"result-card__number\">01</span>\n              <h3>Lower decision fatigue</h3>\n              <p>You stop re-deciding what matters and start executing with less friction.</p>\n            </article>\n            <article class=\"result-card\">\n              <span class=\"result-card__number\">02</span>\n              <h3>More consistent days</h3>\n              <p>A clear ritual makes it easier to stay on track even when energy is messy.</p>\n            </article>\n            <article class=\"result-card\">\n              <span class=\"result-card__number\">03</span>\n              <h3>Sharper reflection</h3>\n              <p>You notice what worked and adjust before small setbacks become habits.</p>\n            </article>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"section tracker-section\" id=\"tracker\">\n        <div class=\"container tracker-layout\">\n          <div class=\"tracker-panel\">\n            <div class=\"section-heading section-heading--left\">\n              <p class=\"eyebrow\">Log your day</p>\n              <h2>Turn attention into a measurable ritual.</h2>\n            </div>\n\n            <form id=\"focus-form\" class=\"focus-form\">\n              <div class=\"field-row\">\n                <label>\n                  <span>Focus mode</span>\n                  <select name=\"mode\" required>\n                    <option value=\"Deep work\">Deep work</option>\n                    <option value=\"Daily reset\">Daily reset</option>\n                    <option value=\"Recovery mode\">Recovery mode</option>\n                  </select>\n                </label>\n\n                <label>\n                  <span>Minutes</span>\n                  <input type=\"number\" name=\"minutes\" min=\"10\" max=\"180\" value=\"25\" required />\n                </label>\n              </div>\n\n              <div class=\"field-row\">\n                <label>\n                  <span>Energy</span>\n                  <select name=\"energy\" required>\n                    <option value=\"3\">Low</option>\n                    <option value=\"6\" selected>Medium</option>\n                    <option value=\"9\">High</option>\n                  </select>\n                </label>\n\n                <label>\n                  <span>Distractions</span>\n                  <input type=\"number\" name=\"distractions\" min=\"0\" max=\"20\" value=\"2\" required />\n                </label>\n              </div>\n\n              <label>\n                <span>What did you finish?</span>\n                <textarea name=\"note\" rows=\"3\" placeholder=\"Finished the proposal outline and sent the first draft.\"></textarea>\n              </label>\n\n              <button type=\"submit\" class=\"button button--primary\">Log focus session</button>\n            </form>\n          </div>\n\n          <div class=\"tracker-panel tracker-panel--stats\">\n            <div class=\"tracker-mini-grid\">\n              <div class=\"tracker-metric\">\n                <span>Focus score</span>\n                <strong data-stat=\"focusScore\">88</strong>\n              </div>\n              <div class=\"tracker-metric\">\n                <span>Hours logged</span>\n                <strong data-stat=\"hours\">24</strong>\n              </div>\n              <div class=\"tracker-metric\">\n                <span>Streak</span>\n                <strong data-stat=\"streak\">12d</strong>\n              </div>\n              <div class=\"tracker-metric accent\">\n                <span>Current mode</span>\n                <strong data-stat=\"modeLabel\">Deep work</strong>\n              </div>\n            </div>\n\n            <div class=\"session-log-wrap\">\n              <h3>Recent sessions</h3>\n              <ul id=\"session-log\" class=\"session-log\" aria-live=\"polite\"></ul>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"section video-section\">\n        <div class=\"container video-layout\">\n          <div class=\"video-copy\">\n            <p class=\"eyebrow\">Built for daily life</p>\n            <h2>Simple enough to use, strong enough to stick.</h2>\n            <p>\n              FocusFlow is designed to feel like a personal system, not another complicated app. A few intentional rituals create momentum that lasts.\n            </p>\n            <ul class=\"check-list\">\n              <li><i class=\"fa-solid fa-circle-check\"></i> Tracks attention without overloading you</li>\n              <li><i class=\"fa-solid fa-circle-check\"></i> Works with small, realistic routines</li>\n              <li><i class=\"fa-solid fa-circle-check\"></i> Builds better patterns over time</li>\n            </ul>\n          </div>\n\n          <div class=\"video-wrap\">\n            <video controls preload=\"metadata\" poster=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\n              <source src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" type=\"video/mp4\" />\n              Your browser does not support the video tag.\n            </video>\n          </div>\n        </div>\n      </section>\n\n      <section id=\"connect\" class=\"section connect-section\">\n        <div class=\"container connect-box\">\n          <div>\n            <p class=\"eyebrow\">Stay in flow</p>\n            <h2>Build a calmer, more intentional routine.</h2>\n          </div>\n          <button class=\"button button--primary\" type=\"button\" data-modal-target=\"modal-signup\">\n            Get the plan\n          </button>\n        </div>\n      </section>\n    </main>\n\n    <footer class=\"site-footer\">\n      <div class=\"container footer-inner\">\n        <p>© 2026 FocusFlow</p>\n        <div class=\"socials\" aria-label=\"Social media links\">\n          <a href=\"#\" aria-label=\"Instagram\"><i class=\"fa-brands fa-instagram\"></i></a>\n          <a href=\"#\" aria-label=\"X\"><i class=\"fa-brands fa-x-twitter\"></i></a>\n          <a href=\"#\" aria-label=\"LinkedIn\"><i class=\"fa-brands fa-linkedin-in\"></i></a>\n          <a href=\"#\" aria-label=\"GitHub\"><i class=\"fa-brands fa-github\"></i></a>\n        </div>\n      </div>\n    </footer>\n\n    <div class=\"modal\" id=\"modal-focus\" aria-hidden=\"true\">\n      <div class=\"modal__backdrop\" data-close-modal></div>\n      <div class=\"modal__dialog\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-focus-title\">\n        <button class=\"modal__close\" type=\"button\" aria-label=\"Close dialog\" data-close-modal>\n          &times;\n        </button>\n        <h3 id=\"modal-focus-title\">What FocusFlow measures</h3>\n        <ul>\n          <li>Deep work blocks and recovery time</li>\n          <li>Energy levels across the day</li>\n          <li>Quality of focus without distraction noise</li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"modal\" id=\"modal-ritual\" aria-hidden=\"true\">\n      <div class=\"modal__backdrop\" data-close-modal></div>\n      <div class=\"modal__dialog\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-ritual-title\">\n        <button class=\"modal__close\" type=\"button\" aria-label=\"Close dialog\" data-close-modal>\n          &times;\n        </button>\n        <h3 id=\"modal-ritual-title\">The 30-minute morning ritual</h3>\n        <ol>\n          <li>Set one priority for the day.</li>\n          <li>Block a 25-minute focus sprint.</li>\n          <li>Log your biggest win before noon.</li>\n        </ol>\n      </div>\n    </div>\n\n    <div class=\"modal\" id=\"modal-signup\" aria-hidden=\"true\">\n      <div class=\"modal__backdrop\" data-close-modal></div>\n      <div class=\"modal__dialog\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-signup-title\">\n        <button class=\"modal__close\" type=\"button\" aria-label=\"Close dialog\" data-close-modal>\n          &times;\n        </button>\n        <h3 id=\"modal-signup-title\">FocusFlow starter plan</h3>\n        <p>\n          Start with a 3-day reset: choose one goal, protect one focus block, and review your progress every evening.\n        </p>\n      </div>\n    </div>\n  </body>\n</html>\n\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./css/main.scss"
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./assets/focus-video.mp4"
/*!********************************!*\
  !*** ./assets/focus-video.mp4 ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d49e954e546982e19c85.mp4";

/***/ },

/***/ "./assets/favicon.svg"
/*!****************************!*\
  !*** ./assets/favicon.svg ***!
  \****************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNmVlN2M4Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzViOGNmZiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTYiIGZpbGw9InVybCgjZykiLz4KICA8cGF0aCBkPSJNMjIgMTZoMjR2OEgzMXY4aDEydjhIMzF2OGgtOXoiIGZpbGw9IiMwODE0MjEiLz4KPC9zdmc+Cg==";

/***/ },

/***/ "./assets/office-bg.jpg"
/*!******************************!*\
  !*** ./assets/office-bg.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fa66fc8a014016bcfe41.jpg";

/***/ },

/***/ "./assets/video-poster.jpg"
/*!*********************************!*\
  !*** ./assets/video-poster.jpg ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "51d0c5bb8b15dfa16d44.jpg";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files


// Stylesheets


// Scripts

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map