/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_addDots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addDots */ \"./modules/addDots.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/maskPhone */ \"./modules/maskPhone.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_1__.accordeon)();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)();\n(0,_modules_addDots__WEBPACK_IMPORTED_MODULE_3__.addDots)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.slider)();\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_5__.carousel)();\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_7__.maskPhone)(\"tel-mask\");\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__.sendForm)({ formId: [\"form-callback\"] });\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordeon\": () => (/* binding */ accordeon)\n/* harmony export */ });\nconst accordeon = () => {\n  const elements = document.querySelectorAll(\".accordeon .element\");\n  const content = document.querySelectorAll(\".accordeon .element-content\");\n\n  elements.forEach((item, index) => {\n    const title = item.querySelector(\".title\");\n\n    title.addEventListener(\"click\", () => {\n      if (content[index].classList.contains(\"open\")) {\n        content[index].style.display = \"none\";\n      } else {\n        content[index].style.display = \"block\";\n      }\n      content[index].classList.toggle(\"open\");\n      item.classList.toggle(\"active\");\n\n      elements.forEach((item2, index2) => {\n        if (index != index2) {\n          item2.classList.remove(\"active\");\n          content[index2].style.display = \"none\";\n          content[index2].classList.remove(\"open\");\n        }\n      });\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/addDots.js":
/*!****************************!*\
  !*** ./modules/addDots.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDots\": () => (/* binding */ addDots)\n/* harmony export */ });\nconst addDots = function () {\n  const slides = document.querySelectorAll(\".top-slider .item\");\n  const slickDots = document.querySelector(\".slick-dots\");\n\n  slides.forEach(() => {\n    const dot = document.createElement(\"li\");\n    dot.classList.add(\"dot\");\n    slickDots.appendChild(dot);\n  });\n  [...document.querySelectorAll(\".dot\")][0].classList.toggle(\"slick-active\");\n};\n\n\n\n//# sourceURL=webpack:///./modules/addDots.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": () => (/* binding */ carousel)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nconst carousel = function () {\n  const swiper = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".swiper\", {\n    slidesPerView: 1,\n    spaceBetween: 30,\n    slidesPerGroup: 3,\n    modules: [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],\n    breakpoints: {\n      768: {\n        slidesPerView: 2,\n      },\n      1024: {\n        slidesPerView: 3,\n      },\n    },\n    loop: true,\n    loopFillGroupWithBlank: true,\n\n    navigation: {\n      nextEl: \".arrow-right\",\n      prevEl: \".arrow-left\",\n    },\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\n  let start = performance.now(); // точка старта анимации\n\n  requestAnimationFrame(function animate(time) {\n    // timeFraction изменяется от 0 до 1\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    // вычисление текущего состояния анимации\n    let progress = timing(timeFraction);\n\n    draw(progress); // отрисовать её\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/maskPhone.js":
/*!******************************!*\
  !*** ./modules/maskPhone.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maskPhone\": () => (/* binding */ maskPhone)\n/* harmony export */ });\nconst maskPhone = (selector, masked = \"+7 (___) ___-__-__\") => {\n  const elems = document.getElementById(selector);\n\n  function mask(event) {\n    const keyCode = event.keyCode;\n    const template = masked,\n      def = template.replace(/\\D/g, \"\"),\n      val = this.value.replace(/\\D/g, \"\");\n    let i = 0,\n      newValue = template.replace(/[_\\d]/g, function (a) {\n        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n      });\n    i = newValue.indexOf(\"_\");\n    if (i != -1) {\n      newValue = newValue.slice(0, i);\n    }\n    let reg = template\n      .substr(0, this.value.length)\n      .replace(/_+/g, function (a) {\n        return \"\\\\d{1,\" + a.length + \"}\";\n      })\n      .replace(/[+()]/g, \"\\\\$&\");\n    reg = new RegExp(\"^\" + reg + \"$\");\n    if (\n      !reg.test(this.value) ||\n      this.value.length < 5 ||\n      (keyCode > 47 && keyCode < 58)\n    ) {\n      this.value = newValue;\n    }\n    if (event.type == \"blur\" && this.value.length < 5) {\n      this.value = \"\";\n    }\n  }\n\n  elems.addEventListener(\"input\", mask);\n  elems.addEventListener(\"focus\", mask);\n  elems.addEventListener(\"blur\", mask);\n};\n\n\n\n//# sourceURL=webpack:///./modules/maskPhone.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst modal = () => {\n  const btn = document.querySelector(\".callback-btn.fancyboxModal.hidden-xs\");\n  const modalCallback = document.querySelector(\".modal-callback\");\n  const modalOverlay = document.querySelector(\".modal-overlay\");\n  const btnServices = document.querySelector(\".button-services\");\n  const row = document.querySelector(\".services-elements .row\");\n\n  const modalOpen = function () {\n    modalCallback.style.display = \"block\";\n    modalOverlay.style.display = \"block\";\n    let width = document.documentElement.clientWidth;\n    if (width > 768) {\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n        duration: 600,\n        timing(timeFraction) {\n          return Math.pow(timeFraction, 1);\n        },\n        draw(progress) {\n          modalCallback.style.left = progress * 50 + \"%\";\n        },\n      });\n    } else {\n      modalCallback.style.left = \"50%\";\n    }\n  };\n\n  document.body.addEventListener(\"click\", (e) => {\n    if (\n      e.target.classList.contains(\"modal-overlay\") ||\n      e.target.getAttribute(\"alt\") == \"modal-close\"\n    ) {\n      modalOverlay.style.display = \"none\";\n      modalCallback.style.display = \"none\";\n    }\n  });\n\n  btn.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    modalOpen();\n  });\n  btnServices.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    modalOpen();\n  });\n  row.addEventListener(\"click\", (e) => {\n    if (e.target.matches(\".img-wrapper\")) {\n      modalOpen();\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\nconst scroll = () => {\n  const links = document.querySelectorAll(\".top-menu a\");\n  const up = document.querySelector(\".up\");\n  const logo = document.querySelector(\".logo\");\n\n  links.forEach((element) => {\n    element.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n\n      const id = element.getAttribute(\"href\").substring(1);\n      const section = document.getElementById(id);\n\n      section.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"start\",\n      });\n    });\n  });\n\n  const showUp = function () {\n    const block = document.getElementById(\"services\");\n    const contentHeight = document.documentElement.scrollTop;\n    const pageBegin = block.getBoundingClientRect().top;\n\n    if (Math.abs(pageBegin) <= contentHeight) {\n      up.style.display = \"block\";\n    } else {\n      up.style.display = \"none\";\n    }\n  };\n\n  up.addEventListener(\"click\", () => window.scroll(0, 0));\n  window.addEventListener(\"scroll\", showUp);\n  logo.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    window.scroll(0, 0);\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\nconst sendForm = ({ formId }) => {\n  const form = document.getElementById(formId);\n  const statusBlock = document.createElement(\"div\");\n  statusBlock.className = \"hm\";\n  const errorText = \"Ошибка...\";\n  const successText = \"Спасибо! Наш менеджер с Вами свяжется!\";\n  const errText = \"Попробуйте еще раз!\";\n\n  const fio = document.querySelectorAll(\".modal-callback .form-control\")[0];\n  const tel = document.querySelectorAll(\".modal-callback .form-control\")[1];\n\n  fio.addEventListener(\"input\", (e) => {\n    e.target.value = e.target.value.replace(/[^а-яА-Я]/, \"\");\n  });\n  tel.addEventListener(\"input\", (e) => {\n    e.target.value = e.target.value.replace(/[^\\d,+]/, \"\");\n  });\n\n  const sendData = (data) => {\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n      method: \"POST\",\n      body: JSON.stringify(data),\n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n    }).then((res) => res.json());\n  };\n\n  const submitForm = () => {\n    const formElements = form.querySelectorAll(\".form-control\");\n    const formData = new FormData(form);\n    const formBody = {};\n\n    const load = function () {\n      form.append(statusBlock);\n      let skCircle = document.createElement(\"div\");\n      skCircle.className = \"sk-circle-bounce\";\n      statusBlock.append(skCircle);\n      for (let i = 1; i < 12; i++) {\n        let skChild = document.createElement(\"div\");\n        skChild.className = \"sk-child sk-circle-\" + [i] + \"\";\n        skCircle.append(skChild);\n      }\n    };\n\n    formData.forEach((val, key) => {\n      formBody[key] = val;\n    });\n\n    const validate = () => {\n      let success = true;\n\n      if (formBody[\"fio\"].length < 2) {\n        success = false;\n      }\n      if (formBody[\"tel\"].length < 18 || formBody[\"tel\"].length > 18) {\n        success = false;\n      }\n\n      return success;\n    };\n\n    if (validate(formElements)) {\n      load();\n      sendData(formBody)\n        .then((data) => {\n          statusBlock.textContent = successText;\n          formElements.forEach((input) => {\n            input.value = \"\";\n          });\n        })\n        .catch((error) => {\n          statusBlock.textContent = errorText;\n        });\n    } else {\n      alert(\"Данные не валидны!\");\n      form.append(statusBlock);\n      statusBlock.textContent = errText;\n\n      const input = document.querySelectorAll(\".form-control\");\n      const hm = document.querySelector(\".hm\");\n      input.forEach(function (item) {\n        item.onfocus = function () {\n          if (hm) {\n            hm.innerHTML = \"\";\n            hm.remove();\n          }\n        };\n      });\n    }\n  };\n  try {\n    if (!form) {\n      throw new Error(\"Верните форму на место\");\n    }\n    form.addEventListener(\"submit\", (event) => {\n      event.preventDefault();\n\n      submitForm();\n    });\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = () => {\n  const topSlider = document.querySelector(\".top-slider\");\n  const slides = document.querySelectorAll(\".top-slider .item\");\n  const tables = document.querySelectorAll(\".table\");\n  const dots = document.querySelectorAll(\".dot\");\n\n  let currentSlide = 0;\n  let interval;\n\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass);\n  };\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass);\n  };\n\n  const autoSlide = () => {\n    prevSlide(slides, currentSlide, \"active\");\n    prevSlide(tables, currentSlide, \"active\");\n    prevSlide(dots, currentSlide, \"slick-active\");\n\n    currentSlide++;\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n    nextSlide(slides, currentSlide, \"active\");\n    nextSlide(tables, currentSlide, \"active\");\n    nextSlide(dots, currentSlide, \"slick-active\");\n  };\n\n  const startSlide = () => {\n    interval = setInterval(autoSlide, 3000);\n  };\n\n  const stopSlide = () => {\n    clearInterval(interval);\n  };\n\n  topSlider.addEventListener(\"click\", (e) => {\n    prevSlide(slides, currentSlide, \"active\");\n    prevSlide(tables, currentSlide, \"active\");\n    prevSlide(dots, currentSlide, \"slick-active\");\n\n    if (e.target.classList.contains(\"dot\")) {\n      dots.forEach((dot, index) => {\n        if (e.target === dot) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    nextSlide(slides, currentSlide, \"active\");\n    nextSlide(tables, currentSlide, \"active\");\n    nextSlide(dots, currentSlide, \"slick-active\");\n  });\n\n  topSlider.addEventListener(\n    \"mouseenter\",\n    (e) => {\n      if (e.target.matches(\".dot\")) {\n        stopSlide();\n      }\n    },\n    true\n  );\n\n  topSlider.addEventListener(\n    \"mouseleave\",\n    (e) => {\n      if (e.target.matches(\".dot\")) {\n        startSlide();\n      }\n    },\n    true\n  );\n\n  startSlide();\n};\n\n\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;