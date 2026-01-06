"use strict";
(self["webpackChunksae5012_dragons"] = self["webpackChunksae5012_dragons"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WWGJGFF6.mjs");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/HomePage */ "./assets/pages/HomePage.jsx");
/* harmony import */ var _pages_ForumPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/ForumPage */ "./assets/pages/ForumPage.jsx");
/* harmony import */ var _pages_ArticlePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ArticlePage */ "./assets/pages/ArticlePage.jsx");
/* harmony import */ var _pages_StatsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/StatsPage */ "./assets/pages/StatsPage.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Navbar */ "./assets/components/Navbar.jsx");
/* harmony import */ var _pages_RegisterPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/RegisterPage */ "./assets/pages/RegisterPage.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// Import des styles


// Import des pages







console.log("🐲 Démarrage de l'application DragonCMS...");
var App = function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "min-h-screen flex flex-col font-sans text-viking-parchment",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "w-full h-32 md:h-48 overflow-hidden border-b-4 border-viking-gold relative shadow-2xl bg-black",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
          src: "/images/banniere.png",
          alt: "Banni\xE8re Dragons",
          className: "w-full h-full object-cover object-center opacity-80 hover:opacity-100 transition duration-700"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "absolute inset-0 bg-gradient-to-t from-viking-dark to-transparent opacity-60"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "container mx-auto py-10 px-4 flex-grow relative z-10",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
            path: "/",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_HomePage__WEBPACK_IMPORTED_MODULE_4__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
            path: "/forum",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_ForumPage__WEBPACK_IMPORTED_MODULE_5__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
            path: "/forum/article/:id",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_ArticlePage__WEBPACK_IMPORTED_MODULE_6__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
            path: "/statistique",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_StatsPage__WEBPACK_IMPORTED_MODULE_7__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
            path: "/register",
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_RegisterPage__WEBPACK_IMPORTED_MODULE_9__["default"], {})
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("footer", {
        className: "bg-viking-rock border-t border-viking-gold/30 py-6 mt-10 text-center text-viking-light font-dragon text-sm",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          children: "\xA9 L'Acad\xE9mie de Berk - Archives Draconiques"
        })
      })]
    })
  });
};
var rootElement = document.getElementById('react-root');
if (rootElement) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(App, {}));
  console.log("✅ React injecté avec succès !");
} else {
  console.error("❌ Impossible de trouver l'élément #react-root");
}

/***/ }),

/***/ "./assets/components/Navbar.jsx":
/*!**************************************!*\
  !*** ./assets/components/Navbar.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WWGJGFF6.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Navbar = function Navbar() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
    className: "bg-viking-rock border-b-2 border-viking-gold/50 p-4 sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-95",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container mx-auto flex flex-col md:flex-row justify-between items-center gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "/",
        className: "text-3xl font-dragon text-viking-gold hover:text-white transition flex items-center gap-2 drop-shadow-md group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-4xl group-hover:scale-110 transition-transform",
          children: "Riders of Burk"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
        className: "flex space-x-8 text-lg font-dragon tracking-wide text-viking-light",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
            to: "/",
            className: "hover:text-viking-gold hover:border-b border-viking-fire pb-1 transition-all duration-300",
            children: "Accueil"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
            to: "/statistique",
            className: "hover:text-viking-gold hover:border-b border-viking-fire pb-1 transition-all duration-300",
            children: "Statistiques"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
            to: "/forum",
            className: "hover:text-viking-gold hover:border-b border-viking-fire pb-1 transition-all duration-300",
            children: "Forum"
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./assets/pages/ArticlePage.jsx":
/*!**************************************!*\
  !*** ./assets/pages/ArticlePage.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WWGJGFF6.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var ArticlePage = function ArticlePage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    article = _useState2[0],
    setArticle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    fetch("/api/articles/".concat(id), {
      headers: {
        'Accept': 'application/ld+json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setArticle(data);
      setLoading(false);
    })["catch"](function (err) {
      return setLoading(false);
    });
  }, [id]);
  if (loading) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
    className: "text-center text-viking-gold font-dragon text-2xl py-20 animate-pulse",
    children: "Recherche dans les archives..."
  });
  if (!article) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
    className: "text-center text-viking-fire text-xl py-10",
    children: "Article introuvable dans les archives."
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
    className: "max-w-4xl mx-auto animate-fade-in",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
      to: "/forum",
      className: "text-viking-light hover:text-white mb-6 inline-flex items-center gap-2 transition",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
        children: "\u2190"
      }), " Retour au forum"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      className: "bg-viking-rock p-8 rounded-lg border-2 border-stone-600 shadow-2xl relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "absolute top-0 right-0 w-20 h-20 bg-viking-gold opacity-10 rounded-bl-full"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("h1", {
        className: "text-4xl md:text-5xl font-dragon text-viking-gold mb-4 leading-tight",
        children: article.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: "flex items-center gap-3 text-sm text-stone-500 mb-8 border-b border-stone-700 pb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
          className: "bg-viking-red px-2 py-1 rounded text-white font-bold border border-viking-gold/50",
          children: "Archive"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
          children: ["Cr\xE9\xE9 le ", new Date(article.createdAt).toLocaleDateString()]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "text-viking-parchment text-lg leading-relaxed font-serif whitespace-pre-line",
        children: article.summary
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlePage);

/***/ }),

/***/ "./assets/pages/ForumPage.jsx":
/*!************************************!*\
  !*** ./assets/pages/ForumPage.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WWGJGFF6.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var ForumPage = function ForumPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    articles = _useState2[0],
    setArticles = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(function () {
    fetch('/api/articles', {
      headers: {
        'Accept': 'application/ld+json'
      }
    }).then(function (res) {
      if (!res.ok) throw new Error('Erreur réseau');
      return res.json();
    }).then(function (data) {
      setArticles(data['hydra:member'] || []);
      setLoading(false);
    })["catch"](function (err) {
      console.error("Erreur API:", err);
      setError("Impossible d'accéder aux archives.");
      setLoading(false);
    });
  }, []);
  if (loading) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
    className: "text-center text-viking-gold font-dragon text-3xl py-20 animate-pulse",
    children: "D\xE9roulement des parchemins..."
  });
  if (error) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
    className: "text-center text-viking-fire font-bold py-10 text-xl border border-viking-red bg-viking-red/10 rounded",
    children: error
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
      className: "flex items-center justify-between mb-8 border-b border-viking-gold/30 pb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("h1", {
        className: "text-4xl font-dragon text-viking-parchment",
        children: "Chroniques des Chasseurs"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("span", {
        className: "bg-viking-red px-3 py-1 rounded text-white font-bold text-sm border border-viking-gold shadow-md",
        children: [articles.length, " R\xE9cits"]
      })]
    }), articles.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
      className: "text-center py-10 bg-viking-rock/50 rounded-lg border border-dashed border-viking-light",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("p", {
        className: "text-viking-light italic text-lg",
        children: "Les archives sont vides pour le moment."
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
      className: "grid gap-6",
      children: articles.map(function (article) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
          className: "group bg-viking-rock p-6 rounded-sm border border-stone-600 border-l-4 border-l-viking-gold hover:border-l-viking-fire hover:bg-stone-800 transition duration-300 shadow-lg relative overflow-hidden",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("h2", {
            className: "text-2xl font-dragon text-viking-gold mb-2 group-hover:text-white transition",
            children: article.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("p", {
            className: "text-viking-light mb-6 line-clamp-2 font-serif leading-relaxed",
            children: article.summary
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
            className: "flex justify-between items-end mt-4 pt-4 border-t border-stone-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("span", {
              className: "text-xs text-stone-500 uppercase tracking-widest font-bold",
              children: new Date(article.createdAt).toLocaleDateString()
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Link, {
              to: "/forum/article/".concat(article.id),
              className: "text-viking-fire hover:text-viking-gold font-bold uppercase text-sm tracking-wider flex items-center gap-1 transition",
              children: ["Lire le parchemin ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("span", {
                children: "\u2192"
              })]
            })]
          })]
        }, article.id);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForumPage);

/***/ }),

/***/ "./assets/pages/HomePage.jsx":
/*!***********************************!*\
  !*** ./assets/pages/HomePage.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WWGJGFF6.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var HomePage = function HomePage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "text-center py-16 animate-fade-in-up",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      className: "text-6xl md:text-8xl font-dragon text-transparent bg-clip-text bg-gradient-to-r from-viking-gold via-yellow-500 to-viking-gold mb-8 drop-shadow-sm",
      children: "Bienvenue dans l'Antre"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "w-24 h-1 bg-viking-red mx-auto mb-8 rounded-full shadow-[0_0_10px_#dc2626]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "text-2xl text-viking-light mb-12 max-w-3xl mx-auto font-serif italic leading-relaxed",
      children: "\"L\xE0 o\xF9 les cartes s'arr\xEAtent, l'aventure commence. Explorez les l\xE9gendes, partagez vos d\xE9couvertes et analysez les donn\xE9es de l'archipel de Berk.\""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-col md:flex-row justify-center gap-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "/forum",
        className: "group relative px-8 py-4 bg-viking-red hover:bg-red-900 border-2 border-viking-gold text-white font-dragon text-xl rounded-lg overflow-hidden transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "relative z-10",
          children: "Acc\xE9der au Forum"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "/statistique",
        className: "px-8 py-4 bg-viking-rock hover:bg-stone-700 border-2 border-stone-500 text-viking-light hover:text-white font-dragon text-xl rounded-lg transition-all shadow-lg",
        children: "Voir les Stats"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./assets/pages/RegisterPage.jsx":
/*!***************************************!*\
  !*** ./assets/pages/RegisterPage.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-WWGJGFF6.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }







































function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var RegisterPage = function RegisterPage() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_39__.useState)({
      username: '',
      email: '',
      plainPassword: '',
      role: 'ROLE_USER'
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_39__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var response, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();
            setError('');
            _context.p = 1;
            _context.n = 2;
            return fetch('/api/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
          case 2:
            response = _context.v;
            if (!response.ok) {
              _context.n = 3;
              break;
            }
            // Redirige vers l'accueil ou le login après succès
            navigate('/');
            _context.n = 5;
            break;
          case 3:
            _context.n = 4;
            return response.json();
          case 4:
            data = _context.v;
            setError(data.message || "Erreur lors de l'inscription");
          case 5:
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            setError("Impossible de contacter le Grand Scribe (Erreur réseau)");
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[1, 6]]);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
    className: "max-w-md mx-auto bg-viking-rock/90 p-8 rounded-lg border-2 border-viking-gold shadow-2xl backdrop-blur-sm",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("h2", {
      className: "text-3xl font-dragon text-viking-gold mb-8 text-center uppercase tracking-widest",
      children: "Rejoindre la Guilde"
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("div", {
      className: "bg-red-900/40 border border-red-500 text-red-200 p-3 rounded mb-6 text-sm",
      children: error
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("form", {
      onSubmit: handleSubmit,
      className: "space-y-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("label", {
          className: "block text-viking-light text-sm font-bold mb-2",
          children: "Nom de code (Pseudo)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("input", {
          type: "text",
          placeholder: "Ex: Krokmou",
          className: "w-full bg-black/50 border border-viking-gold/30 p-3 rounded text-viking-parchment focus:border-viking-gold outline-none transition",
          value: formData.username,
          onChange: function onChange(e) {
            return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
              username: e.target.value
            }));
          },
          required: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("label", {
          className: "block text-viking-light text-sm font-bold mb-2",
          children: "Email de contact"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("input", {
          type: "email",
          placeholder: "viking@berk.fr",
          className: "w-full bg-black/50 border border-viking-gold/30 p-3 rounded text-viking-parchment focus:border-viking-gold outline-none transition",
          value: formData.email,
          onChange: function onChange(e) {
            return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
              email: e.target.value
            }));
          },
          required: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("label", {
          className: "block text-viking-light text-sm font-bold mb-2",
          children: "Rang au sein de la Guilde"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("select", {
          className: "w-full bg-black/50 border border-viking-gold/30 p-3 rounded text-viking-parchment focus:border-viking-gold outline-none cursor-pointer",
          value: formData.role,
          onChange: function onChange(e) {
            return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
              role: e.target.value
            }));
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("option", {
            value: "ROLE_USER",
            children: "Abonn\xE9 (Lecteur)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("option", {
            value: "ROLE_AUTEUR",
            children: "Auteur (Narrateur)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("option", {
            value: "ROLE_EDITEUR",
            children: "\xC9diteur (Gardien)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("option", {
            value: "ROLE_DESIGNER",
            children: "Designeur (Artisan)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("option", {
            value: "ROLE_FOURNISSEUR",
            children: "Fournisseur de donn\xE9es (Scribe)"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("label", {
          className: "block text-viking-light text-sm font-bold mb-2",
          children: "Mot de passe"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("input", {
          type: "password",
          placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
          className: "w-full bg-black/50 border border-viking-gold/30 p-3 rounded text-viking-parchment focus:border-viking-gold outline-none transition",
          value: formData.plainPassword,
          onChange: function onChange(e) {
            return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
              plainPassword: e.target.value
            }));
          },
          required: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_41__.jsx)("button", {
        type: "submit",
        className: "w-full bg-viking-gold text-viking-dark font-extrabold py-4 rounded hover:bg-yellow-500 transition duration-300 shadow-lg uppercase tracking-wider mt-4",
        children: "Graver mon nom"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterPage);

/***/ }),

/***/ "./assets/pages/StatsPage.jsx":
/*!************************************!*\
  !*** ./assets/pages/StatsPage.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







































function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




chart_js__WEBPACK_IMPORTED_MODULE_40__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_40__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_40__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_40__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_40__.Title, chart_js__WEBPACK_IMPORTED_MODULE_40__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_40__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_40__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_40__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_40__.LineElement);
var StatsPage = function StatsPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_39__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    boxOfficeData = _useState2[0],
    setBoxOfficeData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_39__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    populationData = _useState4[0],
    setPopulationData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_39__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    timelineData = _useState6[0],
    setTimelineData = _useState6[1];
  var loadCSV = function loadCSV(url, callback) {
    fetch(url).then(function (r) {
      return r.ok ? r.text() : null;
    }).then(function (txt) {
      if (!txt) return;
      var lines = txt.trim().split('\n');
      if (lines.length < 2) return;
      var headers = lines[0].split(';').map(function (h) {
        return h.trim();
      });
      var data = lines.slice(1).map(function (l) {
        var vals = l.split(';').map(function (v) {
          return v.trim();
        });
        return headers.reduce(function (acc, h, i) {
          return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, h, vals[i]));
        }, {});
      });
      if (data.length) callback(data);
    })["catch"](function (e) {
      return console.error(e);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_39__.useEffect)(function () {
    loadCSV('/data/stats/box_office.csv', function (data) {
      setBoxOfficeData({
        labels: data.map(function (i) {
          return i['Film'];
        }),
        datasets: [{
          label: 'M$',
          data: data.map(function (i) {
            return parseFloat(i['Box Office (Millions $)']);
          }),
          backgroundColor: ['#7f1d1d', '#dc2626', '#d97706'],
          borderColor: '#292524',
          borderWidth: 2
        }]
      });
    });
    loadCSV('/data/stats/berk_population.csv', function (data) {
      setPopulationData({
        labels: data.map(function (i) {
          return i['Groupe'];
        }),
        datasets: [{
          data: data.map(function (i) {
            return parseFloat(i['Population']);
          }),
          backgroundColor: ['#d97706', '#7f1d1d', '#57534e', '#a8a29e'],
          borderColor: '#1c1917',
          borderWidth: 2
        }]
      });
    });
    loadCSV('/data/stats/dragons_timeline.csv', function (data) {
      setTimelineData({
        labels: data.map(function (i) {
          return i['Année'];
        }),
        datasets: [{
          label: 'Espèces',
          data: data.map(function (i) {
            return parseFloat(i['Espèces Recensées']);
          }),
          borderColor: '#d97706',
          backgroundColor: 'rgba(217, 119, 6, 0.2)',
          pointBackgroundColor: '#fff',
          tension: 0.3
        }]
      });
    });
  }, []);
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#e7e5e4',
          font: {
            family: 'serif'
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          color: '#a8a29e'
        },
        grid: {
          color: '#44403c'
        }
      },
      x: {
        ticks: {
          color: '#a8a29e'
        },
        grid: {
          color: '#44403c'
        }
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)("div", {
    className: "max-w-6xl mx-auto animate-fade-in",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)("div", {
      className: "text-center mb-12",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("h1", {
        className: "text-5xl font-dragon text-viking-gold mb-4 drop-shadow-md",
        children: "L'Observatoire de Berk"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("p", {
        className: "text-viking-light text-lg italic border-b border-viking-gold/30 inline-block pb-2",
        children: "Recensement officiel de l'archipel"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-8",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)("div", {
        className: "bg-viking-rock p-6 rounded-lg border-2 border-stone-600 shadow-2xl relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("div", {
          className: "absolute top-0 left-0 w-full h-1 bg-viking-gold"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("h3", {
          className: "text-2xl font-dragon text-white mb-6",
          children: "Tr\xE9sor de Guerre"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("div", {
          className: "h-64 relative",
          children: boxOfficeData ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_41__.Bar, {
            options: options,
            data: boxOfficeData
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("p", {
            className: "text-center mt-10",
            children: "Chargement..."
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)("div", {
        className: "bg-viking-rock p-6 rounded-lg border-2 border-stone-600 shadow-2xl relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("div", {
          className: "absolute top-0 left-0 w-full h-1 bg-viking-gold"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("h3", {
          className: "text-2xl font-dragon text-white mb-6",
          children: "Clans & Tribus"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("div", {
          className: "h-64 relative flex justify-center",
          children: populationData ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_41__.Doughnut, {
            options: _objectSpread(_objectSpread({}, options), {}, {
              scales: {}
            }),
            data: populationData
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("p", {
            className: "text-center mt-10",
            children: "Chargement..."
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)("div", {
        className: "bg-viking-rock p-6 rounded-lg border-2 border-stone-600 shadow-2xl md:col-span-2 relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("div", {
          className: "absolute top-0 left-0 w-full h-1 bg-viking-gold"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("h3", {
          className: "text-2xl font-dragon text-white mb-6",
          children: "Chronologie des D\xE9couvertes"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("div", {
          className: "h-80 relative",
          children: timelineData ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_41__.Line, {
            options: options,
            data: timelineData
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("p", {
            className: "text-center mt-10",
            children: "Chargement..."
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatsPage);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_client_js-node_modules_core-js_modules_es_array_filter_js-node-7c3310"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDa0I7O0FBRWhFO0FBQzBCOztBQUUxQjtBQUN3QztBQUNFO0FBQ0k7QUFDSjtBQUNEO0FBQ007QUFBQTtBQUUvQ2UsT0FBTyxDQUFDQyxHQUFHLENBQUMsNENBQTRDLENBQUM7QUFFekQsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUNJTCx1REFBQSxDQUFDViwyREFBYTtJQUFBZ0IsUUFBQSxlQUNWSix3REFBQTtNQUFLSyxTQUFTLEVBQUMsNERBQTREO01BQUFELFFBQUEsZ0JBRXZFSix3REFBQTtRQUFLSyxTQUFTLEVBQUMsZ0dBQWdHO1FBQUFELFFBQUEsZ0JBQzNHTix1REFBQTtVQUNJUSxHQUFHLEVBQUMsc0JBQXNCO1VBQzFCQyxHQUFHLEVBQUMscUJBQWtCO1VBQ3RCRixTQUFTLEVBQUM7UUFBK0YsQ0FDNUcsQ0FBQyxlQUNGUCx1REFBQTtVQUFLTyxTQUFTLEVBQUM7UUFBOEUsQ0FBTSxDQUFDO01BQUEsQ0FDbkcsQ0FBQyxlQUVOUCx1REFBQSxDQUFDSCwwREFBTSxJQUFFLENBQUMsZUFFVkcsdURBQUE7UUFBS08sU0FBUyxFQUFDLHNEQUFzRDtRQUFBRCxRQUFBLGVBQ2pFSix3REFBQSxDQUFDWCxvREFBTTtVQUFBZSxRQUFBLGdCQUNITix1REFBQSxDQUFDUixtREFBSztZQUFDa0IsSUFBSSxFQUFDLEdBQUc7WUFBQ0MsT0FBTyxlQUFFWCx1REFBQSxDQUFDUCx1REFBUSxJQUFFO1VBQUUsQ0FBRSxDQUFDLGVBQ3pDTyx1REFBQSxDQUFDUixtREFBSztZQUFDa0IsSUFBSSxFQUFDLFFBQVE7WUFBQ0MsT0FBTyxlQUFFWCx1REFBQSxDQUFDTix3REFBUyxJQUFFO1VBQUUsQ0FBRSxDQUFDLGVBQy9DTSx1REFBQSxDQUFDUixtREFBSztZQUFDa0IsSUFBSSxFQUFDLG9CQUFvQjtZQUFDQyxPQUFPLGVBQUVYLHVEQUFBLENBQUNMLDBEQUFXLElBQUU7VUFBRSxDQUFFLENBQUMsZUFDN0RLLHVEQUFBLENBQUNSLG1EQUFLO1lBQUNrQixJQUFJLEVBQUMsY0FBYztZQUFDQyxPQUFPLGVBQUVYLHVEQUFBLENBQUNKLHdEQUFTLElBQUU7VUFBRSxDQUFFLENBQUMsZUFDckRJLHVEQUFBLENBQUNSLG1EQUFLO1lBQUNrQixJQUFJLEVBQUMsV0FBVztZQUFDQyxPQUFPLGVBQUVYLHVEQUFBLENBQUNGLDJEQUFZLElBQUU7VUFBRSxDQUFFLENBQUM7UUFBQSxDQUNqRDtNQUFDLENBQ1IsQ0FBQyxlQUVORSx1REFBQTtRQUFRTyxTQUFTLEVBQUMsNEdBQTRHO1FBQUFELFFBQUEsZUFDMUhOLHVEQUFBO1VBQUFNLFFBQUEsRUFBRztRQUEyQyxDQUFHO01BQUMsQ0FDOUMsQ0FBQztJQUFBLENBQ1I7RUFBQyxDQUNLLENBQUM7QUFFeEIsQ0FBQztBQUVELElBQU1NLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0FBQ3pELElBQUlGLFdBQVcsRUFBRTtFQUNiLElBQU1HLElBQUksR0FBRzFCLDREQUFVLENBQUN1QixXQUFXLENBQUM7RUFDcENHLElBQUksQ0FBQ0MsTUFBTSxjQUFDaEIsdURBQUEsQ0FBQ0ssR0FBRyxJQUFFLENBQUMsQ0FBQztFQUNwQkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsK0JBQStCLENBQUM7QUFDaEQsQ0FBQyxNQUFNO0VBQ0hELE9BQU8sQ0FBQ2MsS0FBSyxDQUFDLCtDQUErQyxDQUFDO0FBQ2xFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEMEI7QUFDYztBQUFBO0FBRXhDLElBQU1wQixNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQSxFQUFTO0VBQ2pCLG9CQUNJRyxzREFBQTtJQUFLTyxTQUFTLEVBQUMsZ0hBQWdIO0lBQUFELFFBQUEsZUFDM0hKLHVEQUFBO01BQUtLLFNBQVMsRUFBQyxnRkFBZ0Y7TUFBQUQsUUFBQSxnQkFFM0ZOLHNEQUFBLENBQUNrQixrREFBSTtRQUFDQyxFQUFFLEVBQUMsR0FBRztRQUFDWixTQUFTLEVBQUMsZ0hBQWdIO1FBQUFELFFBQUEsZUFDbklOLHNEQUFBO1VBQU1PLFNBQVMsRUFBQyxxREFBcUQ7VUFBQUQsUUFBQSxFQUFDO1FBQWMsQ0FBTTtNQUFDLENBQ3pGLENBQUMsZUFFUEosdURBQUE7UUFBSUssU0FBUyxFQUFDLG9FQUFvRTtRQUFBRCxRQUFBLGdCQUM5RU4sc0RBQUE7VUFBQU0sUUFBQSxlQUNJTixzREFBQSxDQUFDa0Isa0RBQUk7WUFBQ0MsRUFBRSxFQUFDLEdBQUc7WUFBQ1osU0FBUyxFQUFDLDJGQUEyRjtZQUFBRCxRQUFBLEVBQUM7VUFFbkgsQ0FBTTtRQUFDLENBQ1AsQ0FBQyxlQUNMTixzREFBQTtVQUFBTSxRQUFBLGVBQ0lOLHNEQUFBLENBQUNrQixrREFBSTtZQUFDQyxFQUFFLEVBQUMsY0FBYztZQUFDWixTQUFTLEVBQUMsMkZBQTJGO1lBQUFELFFBQUEsRUFBQztVQUU5SCxDQUFNO1FBQUMsQ0FDUCxDQUFDLGVBQ0xOLHNEQUFBO1VBQUFNLFFBQUEsZUFDSU4sc0RBQUEsQ0FBQ2tCLGtEQUFJO1lBQUNDLEVBQUUsRUFBQyxRQUFRO1lBQUNaLFNBQVMsRUFBQywyRkFBMkY7WUFBQUQsUUFBQSxFQUFDO1VBRXhILENBQU07UUFBQyxDQUNQLENBQUM7TUFBQSxDQUNMLENBQUM7SUFBQSxDQUNKO0VBQUMsQ0FDTCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlVCxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDOEI7QUFDQTtBQUFBO0FBRW5ELElBQU1GLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7RUFDdEIsSUFBQTRCLFVBQUEsR0FBZUQsNERBQVMsQ0FBQyxDQUFDO0lBQWxCRSxFQUFFLEdBQUFELFVBQUEsQ0FBRkMsRUFBRTtFQUNWLElBQUFDLFNBQUEsR0FBOEJMLGdEQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXJDRyxPQUFPLEdBQUFGLFVBQUE7SUFBRUcsVUFBVSxHQUFBSCxVQUFBO0VBQzFCLElBQUFJLFVBQUEsR0FBOEJWLGdEQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFXLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXJDRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBRTFCVixpREFBUyxDQUFDLFlBQU07SUFDWmEsS0FBSyxrQkFBQUMsTUFBQSxDQUFrQlgsRUFBRSxHQUFJO01BQUVZLE9BQU8sRUFBRTtRQUFFLFFBQVEsRUFBRTtNQUFzQjtJQUFFLENBQUMsQ0FBQyxDQUN6RUMsSUFBSSxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQUEsRUFBQyxDQUN2QkYsSUFBSSxDQUFDLFVBQUFHLElBQUksRUFBSTtNQUNWWCxVQUFVLENBQUNXLElBQUksQ0FBQztNQUNoQlAsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFRLEdBQUc7TUFBQSxPQUFJUixVQUFVLENBQUMsS0FBSyxDQUFDO0lBQUEsRUFBQztFQUN4QyxDQUFDLEVBQUUsQ0FBQ1QsRUFBRSxDQUFDLENBQUM7RUFFUixJQUFJUSxPQUFPLEVBQUUsb0JBQU9oQyx1REFBQTtJQUFLTyxTQUFTLEVBQUMsdUVBQXVFO0lBQUFELFFBQUEsRUFBQztFQUE4QixDQUFLLENBQUM7RUFDL0ksSUFBSSxDQUFDc0IsT0FBTyxFQUFFLG9CQUFPNUIsdURBQUE7SUFBS08sU0FBUyxFQUFDLDRDQUE0QztJQUFBRCxRQUFBLEVBQUM7RUFBc0MsQ0FBSyxDQUFDO0VBRTdILG9CQUNJSix3REFBQTtJQUFLSyxTQUFTLEVBQUMsbUNBQW1DO0lBQUFELFFBQUEsZ0JBQzlDSix3REFBQSxDQUFDZ0IsbURBQUk7TUFBQ0MsRUFBRSxFQUFDLFFBQVE7TUFBQ1osU0FBUyxFQUFDLG1GQUFtRjtNQUFBRCxRQUFBLGdCQUMzR04sdURBQUE7UUFBQU0sUUFBQSxFQUFNO01BQUMsQ0FBTSxDQUFDLG9CQUNsQjtJQUFBLENBQU0sQ0FBQyxlQUVQSix3REFBQTtNQUFLSyxTQUFTLEVBQUMsNkZBQTZGO01BQUFELFFBQUEsZ0JBRXhHTix1REFBQTtRQUFLTyxTQUFTLEVBQUM7TUFBNEUsQ0FBTSxDQUFDLGVBRWxHUCx1REFBQTtRQUFJTyxTQUFTLEVBQUMsc0VBQXNFO1FBQUFELFFBQUEsRUFDL0VzQixPQUFPLENBQUNjO01BQUssQ0FDZCxDQUFDLGVBRUx4Qyx3REFBQTtRQUFLSyxTQUFTLEVBQUMsb0ZBQW9GO1FBQUFELFFBQUEsZ0JBQy9GTix1REFBQTtVQUFNTyxTQUFTLEVBQUMsbUZBQW1GO1VBQUFELFFBQUEsRUFBQztRQUVwRyxDQUFNLENBQUMsZUFDUEosd0RBQUE7VUFBQUksUUFBQSxHQUFNLGdCQUFRLEVBQUMsSUFBSXFDLElBQUksQ0FBQ2YsT0FBTyxDQUFDZ0IsU0FBUyxDQUFDLENBQUNDLGtCQUFrQixDQUFDLENBQUM7UUFBQSxDQUFPLENBQUM7TUFBQSxDQUN0RSxDQUFDLGVBRU43Qyx1REFBQTtRQUFLTyxTQUFTLEVBQUMsOEVBQThFO1FBQUFELFFBQUEsRUFDeEZzQixPQUFPLENBQUNrQjtNQUFPLENBQ2YsQ0FBQztJQUFBLENBR0wsQ0FBQztFQUFBLENBQ0wsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZW5ELFdBQVcsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcER5QjtBQUNYO0FBQUE7QUFFeEMsSUFBTUQsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztFQUNwQixJQUFBK0IsU0FBQSxHQUFnQ0wsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQU0sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNzQixRQUFRLEdBQUFyQixVQUFBO0lBQUVzQixXQUFXLEdBQUF0QixVQUFBO0VBQzVCLElBQUFJLFVBQUEsR0FBOEJWLGdEQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFXLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXJDRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCLElBQUFrQixVQUFBLEdBQTBCN0IsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQThCLFVBQUEsR0FBQXZCLGNBQUEsQ0FBQXNCLFVBQUE7SUFBakNoQyxLQUFLLEdBQUFpQyxVQUFBO0lBQUVDLFFBQVEsR0FBQUQsVUFBQTtFQUV0QjdCLGlEQUFTLENBQUMsWUFBTTtJQUNaYSxLQUFLLENBQUMsZUFBZSxFQUFFO01BQUVFLE9BQU8sRUFBRTtRQUFFLFFBQVEsRUFBRTtNQUFzQjtJQUFFLENBQUMsQ0FBQyxDQUNuRUMsSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtNQUNULElBQUksQ0FBQ0EsR0FBRyxDQUFDYyxFQUFFLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMsZUFBZSxDQUFDO01BQzdDLE9BQU9mLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQ0RGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7TUFDVlEsV0FBVyxDQUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO01BQ3ZDUCxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQVEsR0FBRyxFQUFJO01BQ1Z0QyxPQUFPLENBQUNjLEtBQUssQ0FBQyxhQUFhLEVBQUV3QixHQUFHLENBQUM7TUFDakNVLFFBQVEsQ0FBQyxvQ0FBb0MsQ0FBQztNQUM5Q2xCLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQyxDQUFDO0VBQ1YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQUlELE9BQU8sRUFBRSxvQkFBT2hDLHVEQUFBO0lBQUtPLFNBQVMsRUFBQyx1RUFBdUU7SUFBQUQsUUFBQSxFQUFDO0VBQTZCLENBQUssQ0FBQztFQUM5SSxJQUFJVyxLQUFLLEVBQUUsb0JBQU9qQix1REFBQTtJQUFLTyxTQUFTLEVBQUMsd0dBQXdHO0lBQUFELFFBQUEsRUFBRVc7RUFBSyxDQUFNLENBQUM7RUFFdkosb0JBQ0lmLHdEQUFBO0lBQUFJLFFBQUEsZ0JBQ0lKLHdEQUFBO01BQUtLLFNBQVMsRUFBQyw0RUFBNEU7TUFBQUQsUUFBQSxnQkFDdkZOLHVEQUFBO1FBQUlPLFNBQVMsRUFBQyw0Q0FBNEM7UUFBQUQsUUFBQSxFQUFDO01BRTNELENBQUksQ0FBQyxlQUNMSix3REFBQTtRQUFNSyxTQUFTLEVBQUMsa0dBQWtHO1FBQUFELFFBQUEsR0FDN0d5QyxRQUFRLENBQUNPLE1BQU0sRUFBQyxZQUNyQjtNQUFBLENBQU0sQ0FBQztJQUFBLENBQ04sQ0FBQyxFQUVMUCxRQUFRLENBQUNPLE1BQU0sS0FBSyxDQUFDLGdCQUNsQnRELHVEQUFBO01BQUtPLFNBQVMsRUFBQyx5RkFBeUY7TUFBQUQsUUFBQSxlQUNwR04sdURBQUE7UUFBR08sU0FBUyxFQUFDLGtDQUFrQztRQUFBRCxRQUFBLEVBQUM7TUFBdUMsQ0FBRztJQUFDLENBQzFGLENBQUMsZ0JBRU5OLHVEQUFBO01BQUtPLFNBQVMsRUFBQyxZQUFZO01BQUFELFFBQUEsRUFDdEJ5QyxRQUFRLENBQUNRLEdBQUcsQ0FBQyxVQUFBM0IsT0FBTztRQUFBLG9CQUNqQjFCLHdEQUFBO1VBQXNCSyxTQUFTLEVBQUMsc01BQXNNO1VBQUFELFFBQUEsZ0JBRWxPTix1REFBQTtZQUFJTyxTQUFTLEVBQUMsOEVBQThFO1lBQUFELFFBQUEsRUFDdkZzQixPQUFPLENBQUNjO1VBQUssQ0FDZCxDQUFDLGVBRUwxQyx1REFBQTtZQUFHTyxTQUFTLEVBQUMsZ0VBQWdFO1lBQUFELFFBQUEsRUFDeEVzQixPQUFPLENBQUNrQjtVQUFPLENBQ2pCLENBQUMsZUFFSjVDLHdEQUFBO1lBQUtLLFNBQVMsRUFBQyxvRUFBb0U7WUFBQUQsUUFBQSxnQkFDL0VOLHVEQUFBO2NBQU1PLFNBQVMsRUFBQyw0REFBNEQ7Y0FBQUQsUUFBQSxFQUN2RSxJQUFJcUMsSUFBSSxDQUFDZixPQUFPLENBQUNnQixTQUFTLENBQUMsQ0FBQ0Msa0JBQWtCLENBQUM7WUFBQyxDQUMvQyxDQUFDLGVBRVAzQyx3REFBQSxDQUFDZ0IsbURBQUk7Y0FBQ0MsRUFBRSxvQkFBQWdCLE1BQUEsQ0FBb0JQLE9BQU8sQ0FBQ0osRUFBRSxDQUFHO2NBQUNqQixTQUFTLEVBQUMsdUhBQXVIO2NBQUFELFFBQUEsR0FBQyxvQkFDdEosZUFBQU4sdURBQUE7Z0JBQUFNLFFBQUEsRUFBTTtjQUFDLENBQU0sQ0FBQztZQUFBLENBQzlCLENBQUM7VUFBQSxDQUNOLENBQUM7UUFBQSxHQWxCQXNCLE9BQU8sQ0FBQ0osRUFtQmIsQ0FBQztNQUFBLENBQ1Q7SUFBQyxDQUNELENBQ1I7RUFBQSxDQUNBLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWU5QixTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFRTtBQUNjO0FBQUE7QUFFeEMsSUFBTUQsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztFQUNuQixvQkFDSVMsdURBQUE7SUFBS0ssU0FBUyxFQUFDLHNDQUFzQztJQUFBRCxRQUFBLGdCQUNqRE4sc0RBQUE7TUFBSU8sU0FBUyxFQUFDLG9KQUFvSjtNQUFBRCxRQUFBLEVBQUM7SUFFbkssQ0FBSSxDQUFDLGVBRUxOLHNEQUFBO01BQUtPLFNBQVMsRUFBQztJQUE0RSxDQUFNLENBQUMsZUFFbEdQLHNEQUFBO01BQUdPLFNBQVMsRUFBQyxzRkFBc0Y7TUFBQUQsUUFBQSxFQUFDO0lBRXBHLENBQUcsQ0FBQyxlQUVKSix1REFBQTtNQUFLSyxTQUFTLEVBQUMsZ0RBQWdEO01BQUFELFFBQUEsZ0JBQzNESix1REFBQSxDQUFDZ0Isa0RBQUk7UUFBQ0MsRUFBRSxFQUFDLFFBQVE7UUFBQ1osU0FBUyxFQUFDLG9NQUFvTTtRQUFBRCxRQUFBLGdCQUM1Tk4sc0RBQUE7VUFBTU8sU0FBUyxFQUFDLGVBQWU7VUFBQUQsUUFBQSxFQUFDO1FBQWdCLENBQU0sQ0FBQyxlQUN2RE4sc0RBQUE7VUFBS08sU0FBUyxFQUFDO1FBQStLLENBQU0sQ0FBQztNQUFBLENBQ25NLENBQUMsZUFFUFAsc0RBQUEsQ0FBQ2tCLGtEQUFJO1FBQUNDLEVBQUUsRUFBQyxjQUFjO1FBQUNaLFNBQVMsRUFBQyxrS0FBa0s7UUFBQUQsUUFBQSxFQUFDO01BRXJNLENBQU0sQ0FBQztJQUFBLENBQ04sQ0FBQztFQUFBLENBQ0wsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZWIsUUFBUSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJDN0J2Qix1S0FBQStELENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEsR0FBQVIsQ0FBQSxFQUFBSCxDQUFBLE9BQUFpQixDQUFBLElBQUFGLENBQUEsS0FBQVYsQ0FBQSxJQUFBTCxDQUFBLEdBQUFnQixDQUFBLENBQUFuQixNQUFBLEVBQUFHLENBQUEsVUFBQUssQ0FBQSxFQUFBRSxDQUFBLEdBQUFTLENBQUEsQ0FBQWhCLENBQUEsR0FBQXFCLENBQUEsR0FBQUgsQ0FBQSxDQUFBRixDQUFBLEVBQUFPLENBQUEsR0FBQWhCLENBQUEsS0FBQU4sQ0FBQSxRQUFBSSxDQUFBLEdBQUFrQixDQUFBLEtBQUFwQixDQUFBLE1BQUFRLENBQUEsR0FBQUosQ0FBQSxFQUFBQyxDQUFBLEdBQUFELENBQUEsWUFBQUMsQ0FBQSxXQUFBRCxDQUFBLE1BQUFBLENBQUEsTUFBQVIsQ0FBQSxJQUFBUSxDQUFBLE9BQUFjLENBQUEsTUFBQWhCLENBQUEsR0FBQUosQ0FBQSxRQUFBb0IsQ0FBQSxHQUFBZCxDQUFBLFFBQUFDLENBQUEsTUFBQVUsQ0FBQSxDQUFBQyxDQUFBLEdBQUFoQixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBSSxDQUFBLE9BQUFjLENBQUEsR0FBQUUsQ0FBQSxLQUFBbEIsQ0FBQSxHQUFBSixDQUFBLFFBQUFNLENBQUEsTUFBQUosQ0FBQSxJQUFBQSxDQUFBLEdBQUFvQixDQUFBLE1BQUFoQixDQUFBLE1BQUFOLENBQUEsRUFBQU0sQ0FBQSxNQUFBSixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBb0IsQ0FBQSxFQUFBZixDQUFBLGNBQUFILENBQUEsSUFBQUosQ0FBQSxhQUFBbUIsQ0FBQSxRQUFBSCxDQUFBLE9BQUFkLENBQUEscUJBQUFFLENBQUEsRUFBQVcsQ0FBQSxFQUFBTyxDQUFBLFFBQUFSLENBQUEsWUFBQVMsU0FBQSx1Q0FBQVAsQ0FBQSxVQUFBRCxDQUFBLElBQUFLLENBQUEsQ0FBQUwsQ0FBQSxFQUFBTyxDQUFBLEdBQUFmLENBQUEsR0FBQVEsQ0FBQSxFQUFBTCxDQUFBLEdBQUFZLENBQUEsR0FBQXZCLENBQUEsR0FBQVEsQ0FBQSxPQUFBVCxDQUFBLEdBQUFZLENBQUEsTUFBQU0sQ0FBQSxLQUFBVixDQUFBLEtBQUFDLENBQUEsR0FBQUEsQ0FBQSxRQUFBQSxDQUFBLFNBQUFVLENBQUEsQ0FBQWYsQ0FBQSxRQUFBa0IsQ0FBQSxDQUFBYixDQUFBLEVBQUFHLENBQUEsS0FBQU8sQ0FBQSxDQUFBZixDQUFBLEdBQUFRLENBQUEsR0FBQU8sQ0FBQSxDQUFBQyxDQUFBLEdBQUFSLENBQUEsYUFBQUksQ0FBQSxNQUFBUixDQUFBLFFBQUFDLENBQUEsS0FBQUgsQ0FBQSxZQUFBTCxDQUFBLEdBQUFPLENBQUEsQ0FBQUYsQ0FBQSxXQUFBTCxDQUFBLEdBQUFBLENBQUEsQ0FBQXlCLElBQUEsQ0FBQWxCLENBQUEsRUFBQUksQ0FBQSxVQUFBYSxTQUFBLDJDQUFBeEIsQ0FBQSxDQUFBMEIsSUFBQSxTQUFBMUIsQ0FBQSxFQUFBVyxDQUFBLEdBQUFYLENBQUEsQ0FBQTJCLEtBQUEsRUFBQW5CLENBQUEsU0FBQUEsQ0FBQSxvQkFBQUEsQ0FBQSxLQUFBUixDQUFBLEdBQUFPLENBQUEsZUFBQVAsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBbEIsQ0FBQSxHQUFBQyxDQUFBLFNBQUFHLENBQUEsR0FBQWEsU0FBQSx1Q0FBQW5CLENBQUEsZ0JBQUFHLENBQUEsT0FBQUQsQ0FBQSxHQUFBUixDQUFBLGNBQUFDLENBQUEsSUFBQWlCLENBQUEsR0FBQUMsQ0FBQSxDQUFBZixDQUFBLFFBQUFRLENBQUEsR0FBQVYsQ0FBQSxDQUFBd0IsSUFBQSxDQUFBdEIsQ0FBQSxFQUFBZSxDQUFBLE9BQUFFLENBQUEsa0JBQUFwQixDQUFBLElBQUFPLENBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLE1BQUFHLENBQUEsR0FBQVgsQ0FBQSxjQUFBZSxDQUFBLG1CQUFBWSxLQUFBLEVBQUEzQixDQUFBLEVBQUEwQixJQUFBLEVBQUFULENBQUEsU0FBQWhCLENBQUEsRUFBQUksQ0FBQSxFQUFBRSxDQUFBLFFBQUFJLENBQUEsUUFBQVMsQ0FBQSxnQkFBQVYsVUFBQSxjQUFBa0Isa0JBQUEsY0FBQUMsMkJBQUEsS0FBQTdCLENBQUEsR0FBQVksTUFBQSxDQUFBa0IsY0FBQSxNQUFBdEIsQ0FBQSxNQUFBTCxDQUFBLElBQUFILENBQUEsQ0FBQUEsQ0FBQSxJQUFBRyxDQUFBLFNBQUFXLG1CQUFBLENBQUFkLENBQUEsT0FBQUcsQ0FBQSxpQ0FBQUgsQ0FBQSxHQUFBVyxDQUFBLEdBQUFrQiwwQkFBQSxDQUFBcEIsU0FBQSxHQUFBQyxTQUFBLENBQUFELFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsWUFBQU8sRUFBQWhCLENBQUEsV0FBQWEsTUFBQSxDQUFBbUIsY0FBQSxHQUFBbkIsTUFBQSxDQUFBbUIsY0FBQSxDQUFBaEMsQ0FBQSxFQUFBOEIsMEJBQUEsS0FBQTlCLENBQUEsQ0FBQWlDLFNBQUEsR0FBQUgsMEJBQUEsRUFBQWYsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBTSxDQUFBLHlCQUFBTixDQUFBLENBQUFVLFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFGLENBQUEsR0FBQVosQ0FBQSxXQUFBNkIsaUJBQUEsQ0FBQW5CLFNBQUEsR0FBQW9CLDBCQUFBLEVBQUFmLG1CQUFBLENBQUFILENBQUEsaUJBQUFrQiwwQkFBQSxHQUFBZixtQkFBQSxDQUFBZSwwQkFBQSxpQkFBQUQsaUJBQUEsR0FBQUEsaUJBQUEsQ0FBQUssV0FBQSx3QkFBQW5CLG1CQUFBLENBQUFlLDBCQUFBLEVBQUF4QixDQUFBLHdCQUFBUyxtQkFBQSxDQUFBSCxDQUFBLEdBQUFHLG1CQUFBLENBQUFILENBQUEsRUFBQU4sQ0FBQSxnQkFBQVMsbUJBQUEsQ0FBQUgsQ0FBQSxFQUFBUixDQUFBLGlDQUFBVyxtQkFBQSxDQUFBSCxDQUFBLDhEQUFBdUIsWUFBQSxZQUFBQSxhQUFBLGFBQUFDLENBQUEsRUFBQTVCLENBQUEsRUFBQTZCLENBQUEsRUFBQXJCLENBQUE7QUFBQSxTQUFBRCxvQkFBQWYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQSxRQUFBTyxDQUFBLEdBQUFLLE1BQUEsQ0FBQXlCLGNBQUEsUUFBQTlCLENBQUEsdUJBQUFSLENBQUEsSUFBQVEsQ0FBQSxRQUFBTyxtQkFBQSxZQUFBd0IsbUJBQUF2QyxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBSCxDQUFBLGFBQUFLLEVBQUFKLENBQUEsRUFBQUUsQ0FBQSxJQUFBVyxtQkFBQSxDQUFBZixDQUFBLEVBQUFFLENBQUEsWUFBQUYsQ0FBQSxnQkFBQXdDLE9BQUEsQ0FBQXRDLENBQUEsRUFBQUUsQ0FBQSxFQUFBSixDQUFBLFNBQUFFLENBQUEsR0FBQU0sQ0FBQSxHQUFBQSxDQUFBLENBQUFSLENBQUEsRUFBQUUsQ0FBQSxJQUFBMEIsS0FBQSxFQUFBeEIsQ0FBQSxFQUFBcUMsVUFBQSxHQUFBeEMsQ0FBQSxFQUFBeUMsWUFBQSxHQUFBekMsQ0FBQSxFQUFBMEMsUUFBQSxHQUFBMUMsQ0FBQSxNQUFBRCxDQUFBLENBQUFFLENBQUEsSUFBQUUsQ0FBQSxJQUFBRSxDQUFBLGFBQUFBLENBQUEsY0FBQUEsQ0FBQSxtQkFBQVMsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUEyQyxtQkFBQXhDLENBQUEsRUFBQUgsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUksQ0FBQSxFQUFBZSxDQUFBLEVBQUFaLENBQUEsY0FBQUQsQ0FBQSxHQUFBSixDQUFBLENBQUFpQixDQUFBLEVBQUFaLENBQUEsR0FBQUcsQ0FBQSxHQUFBSixDQUFBLENBQUFvQixLQUFBLFdBQUF4QixDQUFBLGdCQUFBSixDQUFBLENBQUFJLENBQUEsS0FBQUksQ0FBQSxDQUFBbUIsSUFBQSxHQUFBMUIsQ0FBQSxDQUFBVyxDQUFBLElBQUFpQyxPQUFBLENBQUFDLE9BQUEsQ0FBQWxDLENBQUEsRUFBQS9CLElBQUEsQ0FBQXFCLENBQUEsRUFBQUksQ0FBQTtBQUFBLFNBQUF5QyxrQkFBQTNDLENBQUEsNkJBQUFILENBQUEsU0FBQUQsQ0FBQSxHQUFBZ0QsU0FBQSxhQUFBSCxPQUFBLFdBQUEzQyxDQUFBLEVBQUFJLENBQUEsUUFBQWUsQ0FBQSxHQUFBakIsQ0FBQSxDQUFBNkMsS0FBQSxDQUFBaEQsQ0FBQSxFQUFBRCxDQUFBLFlBQUFrRCxNQUFBOUMsQ0FBQSxJQUFBd0Msa0JBQUEsQ0FBQXZCLENBQUEsRUFBQW5CLENBQUEsRUFBQUksQ0FBQSxFQUFBNEMsS0FBQSxFQUFBQyxNQUFBLFVBQUEvQyxDQUFBLGNBQUErQyxPQUFBL0MsQ0FBQSxJQUFBd0Msa0JBQUEsQ0FBQXZCLENBQUEsRUFBQW5CLENBQUEsRUFBQUksQ0FBQSxFQUFBNEMsS0FBQSxFQUFBQyxNQUFBLFdBQUEvQyxDQUFBLEtBQUE4QyxLQUFBO0FBQUEsU0FBQS9FLGVBQUErQixDQUFBLEVBQUFGLENBQUEsV0FBQW9ELGVBQUEsQ0FBQWxELENBQUEsS0FBQW1ELHFCQUFBLENBQUFuRCxDQUFBLEVBQUFGLENBQUEsS0FBQXNELDJCQUFBLENBQUFwRCxDQUFBLEVBQUFGLENBQUEsS0FBQXVELGdCQUFBO0FBQUEsU0FBQUEsaUJBQUEsY0FBQTlCLFNBQUE7QUFBQSxTQUFBNkIsNEJBQUFwRCxDQUFBLEVBQUFtQixDQUFBLFFBQUFuQixDQUFBLDJCQUFBQSxDQUFBLFNBQUFzRCxpQkFBQSxDQUFBdEQsQ0FBQSxFQUFBbUIsQ0FBQSxPQUFBcEIsQ0FBQSxNQUFBd0QsUUFBQSxDQUFBL0IsSUFBQSxDQUFBeEIsQ0FBQSxFQUFBd0QsS0FBQSw2QkFBQXpELENBQUEsSUFBQUMsQ0FBQSxDQUFBeUQsV0FBQSxLQUFBMUQsQ0FBQSxHQUFBQyxDQUFBLENBQUF5RCxXQUFBLENBQUFDLElBQUEsYUFBQTNELENBQUEsY0FBQUEsQ0FBQSxHQUFBNEQsS0FBQSxDQUFBQyxJQUFBLENBQUE1RCxDQUFBLG9CQUFBRCxDQUFBLCtDQUFBOEQsSUFBQSxDQUFBOUQsQ0FBQSxJQUFBdUQsaUJBQUEsQ0FBQXRELENBQUEsRUFBQW1CLENBQUE7QUFBQSxTQUFBbUMsa0JBQUF0RCxDQUFBLEVBQUFtQixDQUFBLGFBQUFBLENBQUEsSUFBQUEsQ0FBQSxHQUFBbkIsQ0FBQSxDQUFBSixNQUFBLE1BQUF1QixDQUFBLEdBQUFuQixDQUFBLENBQUFKLE1BQUEsWUFBQUUsQ0FBQSxNQUFBSSxDQUFBLEdBQUF5RCxLQUFBLENBQUF4QyxDQUFBLEdBQUFyQixDQUFBLEdBQUFxQixDQUFBLEVBQUFyQixDQUFBLElBQUFJLENBQUEsQ0FBQUosQ0FBQSxJQUFBRSxDQUFBLENBQUFGLENBQUEsVUFBQUksQ0FBQTtBQUFBLFNBQUFpRCxzQkFBQW5ELENBQUEsRUFBQXNCLENBQUEsUUFBQXZCLENBQUEsV0FBQUMsQ0FBQSxnQ0FBQUMsTUFBQSxJQUFBRCxDQUFBLENBQUFDLE1BQUEsQ0FBQUUsUUFBQSxLQUFBSCxDQUFBLDRCQUFBRCxDQUFBLFFBQUFELENBQUEsRUFBQUksQ0FBQSxFQUFBSSxDQUFBLEVBQUFJLENBQUEsRUFBQVMsQ0FBQSxPQUFBTCxDQUFBLE9BQUFWLENBQUEsaUJBQUFFLENBQUEsSUFBQVAsQ0FBQSxHQUFBQSxDQUFBLENBQUF5QixJQUFBLENBQUF4QixDQUFBLEdBQUE4RCxJQUFBLFFBQUF4QyxDQUFBLFFBQUFYLE1BQUEsQ0FBQVosQ0FBQSxNQUFBQSxDQUFBLFVBQUFlLENBQUEsdUJBQUFBLENBQUEsSUFBQWhCLENBQUEsR0FBQVEsQ0FBQSxDQUFBa0IsSUFBQSxDQUFBekIsQ0FBQSxHQUFBMEIsSUFBQSxNQUFBTixDQUFBLENBQUE0QyxJQUFBLENBQUFqRSxDQUFBLENBQUE0QixLQUFBLEdBQUFQLENBQUEsQ0FBQXZCLE1BQUEsS0FBQTBCLENBQUEsR0FBQVIsQ0FBQSxpQkFBQWQsQ0FBQSxJQUFBSSxDQUFBLE9BQUFGLENBQUEsR0FBQUYsQ0FBQSx5QkFBQWMsQ0FBQSxZQUFBZixDQUFBLGVBQUFXLENBQUEsR0FBQVgsQ0FBQSxjQUFBWSxNQUFBLENBQUFELENBQUEsTUFBQUEsQ0FBQSwyQkFBQU4sQ0FBQSxRQUFBRixDQUFBLGFBQUFpQixDQUFBO0FBQUEsU0FBQStCLGdCQUFBbEQsQ0FBQSxRQUFBMkQsS0FBQSxDQUFBSyxPQUFBLENBQUFoRSxDQUFBLFVBQUFBLENBQUE7QUFEd0M7QUFDTztBQUFBO0FBRS9DLElBQU01RCxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0VBQ3ZCLElBQU04SCxRQUFRLEdBQUdELDhEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFBbEcsU0FBQSxHQUFnQ0wsZ0RBQVEsQ0FBQztNQUNyQ3lHLFFBQVEsRUFBRSxFQUFFO01BQ1pDLEtBQUssRUFBRSxFQUFFO01BQ1RDLGFBQWEsRUFBRSxFQUFFO01BQ2pCQyxJQUFJLEVBQUU7SUFDVixDQUFDLENBQUM7SUFBQXRHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBTEt3RyxRQUFRLEdBQUF2RyxVQUFBO0lBQUV3RyxXQUFXLEdBQUF4RyxVQUFBO0VBTTVCLElBQUFJLFVBQUEsR0FBMEJWLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFXLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQS9CYixLQUFLLEdBQUFjLFVBQUE7SUFBRW9CLFFBQVEsR0FBQXBCLFVBQUE7RUFFdEIsSUFBTW9HLFlBQVk7SUFBQSxJQUFBQyxJQUFBLEdBQUE3QixpQkFBQSxjQUFBWixZQUFBLEdBQUFFLENBQUEsQ0FBRyxTQUFBd0MsUUFBTzdFLENBQUM7TUFBQSxJQUFBOEUsUUFBQSxFQUFBOUYsSUFBQSxFQUFBK0YsRUFBQTtNQUFBLE9BQUE1QyxZQUFBLEdBQUFDLENBQUEsV0FBQTRDLFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBL0QsQ0FBQSxHQUFBK0QsUUFBQSxDQUFBNUUsQ0FBQTtVQUFBO1lBQ3pCSixDQUFDLENBQUNpRixjQUFjLENBQUMsQ0FBQztZQUNsQnRGLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFBQ3FGLFFBQUEsQ0FBQS9ELENBQUE7WUFBQStELFFBQUEsQ0FBQTVFLENBQUE7WUFBQSxPQUdjMUIsS0FBSyxDQUFDLGVBQWUsRUFBRTtjQUMxQ3dHLE1BQU0sRUFBRSxNQUFNO2NBQ2R0RyxPQUFPLEVBQUU7Z0JBQUUsY0FBYyxFQUFFO2NBQW1CLENBQUM7Y0FDL0N1RyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDWixRQUFRO1lBQ2pDLENBQUMsQ0FBQztVQUFBO1lBSklLLFFBQVEsR0FBQUUsUUFBQSxDQUFBNUQsQ0FBQTtZQUFBLEtBTVYwRCxRQUFRLENBQUNsRixFQUFFO2NBQUFvRixRQUFBLENBQUE1RSxDQUFBO2NBQUE7WUFBQTtZQUNYO1lBQ0FnRSxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQUNZLFFBQUEsQ0FBQTVFLENBQUE7WUFBQTtVQUFBO1lBQUE0RSxRQUFBLENBQUE1RSxDQUFBO1lBQUEsT0FFSzBFLFFBQVEsQ0FBQy9GLElBQUksQ0FBQyxDQUFDO1VBQUE7WUFBNUJDLElBQUksR0FBQWdHLFFBQUEsQ0FBQTVELENBQUE7WUFDVnpCLFFBQVEsQ0FBQ1gsSUFBSSxDQUFDc0csT0FBTyxJQUFJLDhCQUE4QixDQUFDO1VBQUM7WUFBQU4sUUFBQSxDQUFBNUUsQ0FBQTtZQUFBO1VBQUE7WUFBQTRFLFFBQUEsQ0FBQS9ELENBQUE7WUFBQThELEVBQUEsR0FBQUMsUUFBQSxDQUFBNUQsQ0FBQTtZQUc3RHpCLFFBQVEsQ0FBQyx5REFBeUQsQ0FBQztVQUFDO1lBQUEsT0FBQXFGLFFBQUEsQ0FBQTNELENBQUE7UUFBQTtNQUFBLEdBQUF3RCxPQUFBO0lBQUEsQ0FFM0U7SUFBQSxnQkFyQktGLFlBQVlBLENBQUFZLEVBQUE7TUFBQSxPQUFBWCxJQUFBLENBQUEzQixLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBcUJqQjtFQUVELG9CQUNJdEcsd0RBQUE7SUFBS0ssU0FBUyxFQUFDLDJHQUEyRztJQUFBRCxRQUFBLGdCQUN0SE4sdURBQUE7TUFBSU8sU0FBUyxFQUFDLGtGQUFrRjtNQUFBRCxRQUFBLEVBQUM7SUFFakcsQ0FBSSxDQUFDLEVBRUpXLEtBQUssaUJBQ0ZqQix1REFBQTtNQUFLTyxTQUFTLEVBQUMsMkVBQTJFO01BQUFELFFBQUEsRUFDckZXO0lBQUssQ0FDTCxDQUNSLGVBRURmLHdEQUFBO01BQU04SSxRQUFRLEVBQUViLFlBQWE7TUFBQzVILFNBQVMsRUFBQyxXQUFXO01BQUFELFFBQUEsZ0JBRS9DSix3REFBQTtRQUFBSSxRQUFBLGdCQUNJTix1REFBQTtVQUFPTyxTQUFTLEVBQUMsZ0RBQWdEO1VBQUFELFFBQUEsRUFBQztRQUFvQixDQUFPLENBQUMsZUFDOUZOLHVEQUFBO1VBQ0lpSixJQUFJLEVBQUMsTUFBTTtVQUNYQyxXQUFXLEVBQUMsYUFBYTtVQUN6QjNJLFNBQVMsRUFBQyxvSUFBb0k7VUFDOUk2RSxLQUFLLEVBQUU2QyxRQUFRLENBQUNKLFFBQVM7VUFDekJzQixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRzNGLENBQUM7WUFBQSxPQUFLMEUsV0FBVyxDQUFBa0IsYUFBQSxDQUFBQSxhQUFBLEtBQUtuQixRQUFRO2NBQUVKLFFBQVEsRUFBRXJFLENBQUMsQ0FBQzZGLE1BQU0sQ0FBQ2pFO1lBQUssRUFBQyxDQUFDO1VBQUEsQ0FBQztVQUN0RWtFLFFBQVE7UUFBQSxDQUNYLENBQUM7TUFBQSxDQUNELENBQUMsZUFHTnBKLHdEQUFBO1FBQUFJLFFBQUEsZ0JBQ0lOLHVEQUFBO1VBQU9PLFNBQVMsRUFBQyxnREFBZ0Q7VUFBQUQsUUFBQSxFQUFDO1FBQWdCLENBQU8sQ0FBQyxlQUMxRk4sdURBQUE7VUFDSWlKLElBQUksRUFBQyxPQUFPO1VBQ1pDLFdBQVcsRUFBQyxnQkFBZ0I7VUFDNUIzSSxTQUFTLEVBQUMsb0lBQW9JO1VBQzlJNkUsS0FBSyxFQUFFNkMsUUFBUSxDQUFDSCxLQUFNO1VBQ3RCcUIsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUczRixDQUFDO1lBQUEsT0FBSzBFLFdBQVcsQ0FBQWtCLGFBQUEsQ0FBQUEsYUFBQSxLQUFLbkIsUUFBUTtjQUFFSCxLQUFLLEVBQUV0RSxDQUFDLENBQUM2RixNQUFNLENBQUNqRTtZQUFLLEVBQUMsQ0FBQztVQUFBLENBQUM7VUFDbkVrRSxRQUFRO1FBQUEsQ0FDWCxDQUFDO01BQUEsQ0FDRCxDQUFDLGVBR05wSix3REFBQTtRQUFBSSxRQUFBLGdCQUNJTix1REFBQTtVQUFPTyxTQUFTLEVBQUMsZ0RBQWdEO1VBQUFELFFBQUEsRUFBQztRQUF5QixDQUFPLENBQUMsZUFDbkdKLHdEQUFBO1VBQ0lLLFNBQVMsRUFBQyx3SUFBd0k7VUFDbEo2RSxLQUFLLEVBQUU2QyxRQUFRLENBQUNELElBQUs7VUFDckJtQixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRzNGLENBQUM7WUFBQSxPQUFLMEUsV0FBVyxDQUFBa0IsYUFBQSxDQUFBQSxhQUFBLEtBQUtuQixRQUFRO2NBQUVELElBQUksRUFBRXhFLENBQUMsQ0FBQzZGLE1BQU0sQ0FBQ2pFO1lBQUssRUFBQyxDQUFDO1VBQUEsQ0FBQztVQUFBOUUsUUFBQSxnQkFFbEVOLHVEQUFBO1lBQVFvRixLQUFLLEVBQUMsV0FBVztZQUFBOUUsUUFBQSxFQUFDO1VBQWdCLENBQVEsQ0FBQyxlQUNuRE4sdURBQUE7WUFBUW9GLEtBQUssRUFBQyxhQUFhO1lBQUE5RSxRQUFBLEVBQUM7VUFBa0IsQ0FBUSxDQUFDLGVBQ3ZETix1REFBQTtZQUFRb0YsS0FBSyxFQUFDLGNBQWM7WUFBQTlFLFFBQUEsRUFBQztVQUFpQixDQUFRLENBQUMsZUFDdkROLHVEQUFBO1lBQVFvRixLQUFLLEVBQUMsZUFBZTtZQUFBOUUsUUFBQSxFQUFDO1VBQW1CLENBQVEsQ0FBQyxlQUMxRE4sdURBQUE7WUFBUW9GLEtBQUssRUFBQyxrQkFBa0I7WUFBQTlFLFFBQUEsRUFBQztVQUErQixDQUFRLENBQUM7UUFBQSxDQUNyRSxDQUFDO01BQUEsQ0FDUixDQUFDLGVBR05KLHdEQUFBO1FBQUFJLFFBQUEsZ0JBQ0lOLHVEQUFBO1VBQU9PLFNBQVMsRUFBQyxnREFBZ0Q7VUFBQUQsUUFBQSxFQUFDO1FBQVksQ0FBTyxDQUFDLGVBQ3RGTix1REFBQTtVQUNJaUosSUFBSSxFQUFDLFVBQVU7VUFDZkMsV0FBVyxFQUFDLGtEQUFVO1VBQ3RCM0ksU0FBUyxFQUFDLG9JQUFvSTtVQUM5STZFLEtBQUssRUFBRTZDLFFBQVEsQ0FBQ0YsYUFBYztVQUM5Qm9CLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHM0YsQ0FBQztZQUFBLE9BQUswRSxXQUFXLENBQUFrQixhQUFBLENBQUFBLGFBQUEsS0FBS25CLFFBQVE7Y0FBRUYsYUFBYSxFQUFFdkUsQ0FBQyxDQUFDNkYsTUFBTSxDQUFDakU7WUFBSyxFQUFDLENBQUM7VUFBQSxDQUFDO1VBQzNFa0UsUUFBUTtRQUFBLENBQ1gsQ0FBQztNQUFBLENBQ0QsQ0FBQyxlQUVOdEosdURBQUE7UUFDSWlKLElBQUksRUFBQyxRQUFRO1FBQ2IxSSxTQUFTLEVBQUMsd0pBQXdKO1FBQUFELFFBQUEsRUFDcks7TUFFRCxDQUFRLENBQUM7SUFBQSxDQUNQLENBQUM7RUFBQSxDQUNOLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVSLFlBQVksRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Id0I7QUFHakM7QUFDb0M7QUFBQTtBQUV0RDBKLDRDQUFPLENBQUNhLFFBQVEsQ0FBQ1osb0RBQWEsRUFBRUMsa0RBQVcsRUFBRUMsaURBQVUsRUFBRUMsNENBQUssRUFBRUMsOENBQU8sRUFBRUMsNkNBQU0sRUFBRUMsaURBQVUsRUFBRUMsbURBQVksRUFBRUMsa0RBQVcsQ0FBQztBQUV2SCxJQUFNckssU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztFQUN0QixJQUFBNkIsU0FBQSxHQUEwQ0wsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQU0sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBakQ2SSxhQUFhLEdBQUE1SSxVQUFBO0lBQUU2SSxnQkFBZ0IsR0FBQTdJLFVBQUE7RUFDdEMsSUFBQUksVUFBQSxHQUE0Q1YsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQVcsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBbkQwSSxjQUFjLEdBQUF6SSxVQUFBO0lBQUUwSSxpQkFBaUIsR0FBQTFJLFVBQUE7RUFDeEMsSUFBQWtCLFVBQUEsR0FBd0M3QixnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBOEIsVUFBQSxHQUFBdkIsY0FBQSxDQUFBc0IsVUFBQTtJQUEvQ3lILFlBQVksR0FBQXhILFVBQUE7SUFBRXlILGVBQWUsR0FBQXpILFVBQUE7RUFFcEMsSUFBTTBILE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJQyxHQUFHLEVBQUVDLFFBQVEsRUFBSztJQUNqQzVJLEtBQUssQ0FBQzJJLEdBQUcsQ0FBQyxDQUNQeEksSUFBSSxDQUFDLFVBQUFxQixDQUFDO01BQUEsT0FBSUEsQ0FBQyxDQUFDTixFQUFFLEdBQUdNLENBQUMsQ0FBQ3FILElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSTtJQUFBLEVBQUMsQ0FDakMxSSxJQUFJLENBQUMsVUFBQTJJLEdBQUcsRUFBSTtNQUNYLElBQUcsQ0FBQ0EsR0FBRyxFQUFFO01BQ1QsSUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUM7TUFDcEMsSUFBSUYsS0FBSyxDQUFDM0gsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUN0QixJQUFNbEIsT0FBTyxHQUFHNkksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM1SCxHQUFHLENBQUMsVUFBQTZILENBQUM7UUFBQSxPQUFJQSxDQUFDLENBQUNGLElBQUksQ0FBQyxDQUFDO01BQUEsRUFBQztNQUN0RCxJQUFNMUksSUFBSSxHQUFHeUksS0FBSyxDQUFDL0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDM0QsR0FBRyxDQUFDLFVBQUF5QixDQUFDLEVBQUk7UUFDakMsSUFBTXFHLElBQUksR0FBR3JHLENBQUMsQ0FBQ21HLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzVILEdBQUcsQ0FBQyxVQUFBcUIsQ0FBQztVQUFBLE9BQUlBLENBQUMsQ0FBQ3NHLElBQUksQ0FBQyxDQUFDO1FBQUEsRUFBQztRQUM1QyxPQUFPOUksT0FBTyxDQUFDa0osTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUgsQ0FBQyxFQUFFcEgsQ0FBQztVQUFBLE9BQUFvRixhQUFBLENBQUFBLGFBQUEsS0FBVW1DLEdBQUcsT0FBQUMsZUFBQSxLQUFHSixDQUFDLEVBQUdDLElBQUksQ0FBQ3JILENBQUMsQ0FBQztRQUFBLENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUN0RSxDQUFDLENBQUM7TUFDRixJQUFJeEIsSUFBSSxDQUFDYyxNQUFNLEVBQUV3SCxRQUFRLENBQUN0SSxJQUFJLENBQUM7SUFDakMsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBZ0IsQ0FBQztNQUFBLE9BQUlyRCxPQUFPLENBQUNjLEtBQUssQ0FBQ3VDLENBQUMsQ0FBQztJQUFBLEVBQUM7RUFDakMsQ0FBQztFQUVEbkMsaURBQVMsQ0FBQyxZQUFNO0lBQ2R1SixPQUFPLENBQUMsNEJBQTRCLEVBQUUsVUFBQ3BJLElBQUksRUFBSztNQUM5QytILGdCQUFnQixDQUFDO1FBQ2ZrQixNQUFNLEVBQUVqSixJQUFJLENBQUNlLEdBQUcsQ0FBQyxVQUFBUyxDQUFDO1VBQUEsT0FBSUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUFBLEVBQUM7UUFDaEMwSCxRQUFRLEVBQUUsQ0FBQztVQUNUQyxLQUFLLEVBQUUsSUFBSTtVQUNYbkosSUFBSSxFQUFFQSxJQUFJLENBQUNlLEdBQUcsQ0FBQyxVQUFBUyxDQUFDO1lBQUEsT0FBSTRILFVBQVUsQ0FBQzVILENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1VBQUEsRUFBQztVQUM3RDZILGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO1VBQ2xEQyxXQUFXLEVBQUUsU0FBUztVQUN0QkMsV0FBVyxFQUFFO1FBQ2YsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGbkIsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLFVBQUNwSSxJQUFJLEVBQUs7TUFDbkRpSSxpQkFBaUIsQ0FBQztRQUNoQmdCLE1BQU0sRUFBRWpKLElBQUksQ0FBQ2UsR0FBRyxDQUFDLFVBQUFTLENBQUM7VUFBQSxPQUFJQSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQUEsRUFBQztRQUNsQzBILFFBQVEsRUFBRSxDQUFDO1VBQ1RsSixJQUFJLEVBQUVBLElBQUksQ0FBQ2UsR0FBRyxDQUFDLFVBQUFTLENBQUM7WUFBQSxPQUFJNEgsVUFBVSxDQUFDNUgsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1VBQUEsRUFBQztVQUNoRDZILGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztVQUM3REMsV0FBVyxFQUFFLFNBQVM7VUFDdEJDLFdBQVcsRUFBRTtRQUNmLENBQUM7TUFDSCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRm5CLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBRSxVQUFDcEksSUFBSSxFQUFLO01BQ2xEbUksZUFBZSxDQUFDO1FBQ2RjLE1BQU0sRUFBRWpKLElBQUksQ0FBQ2UsR0FBRyxDQUFDLFVBQUFTLENBQUM7VUFBQSxPQUFJQSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQUEsRUFBQztRQUNqQzBILFFBQVEsRUFBRSxDQUFDO1VBQ1RDLEtBQUssRUFBRSxTQUFTO1VBQ2hCbkosSUFBSSxFQUFFQSxJQUFJLENBQUNlLEdBQUcsQ0FBQyxVQUFBUyxDQUFDO1lBQUEsT0FBSTRILFVBQVUsQ0FBQzVILENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1VBQUEsRUFBQztVQUN2RDhILFdBQVcsRUFBRSxTQUFTO1VBQ3RCRCxlQUFlLEVBQUUsd0JBQXdCO1VBQ3pDRyxvQkFBb0IsRUFBRSxNQUFNO1VBQzVCQyxPQUFPLEVBQUU7UUFDWCxDQUFDO01BQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1DLE9BQU8sR0FBRztJQUNkQyxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsbUJBQW1CLEVBQUUsS0FBSztJQUMxQkMsT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRTtRQUFFYixNQUFNLEVBQUU7VUFBRWMsS0FBSyxFQUFFLFNBQVM7VUFBRUMsSUFBSSxFQUFFO1lBQUVDLE1BQU0sRUFBRTtVQUFRO1FBQUU7TUFBRTtJQUFFLENBQUM7SUFDaEZDLE1BQU0sRUFBRTtNQUNOaEksQ0FBQyxFQUFFO1FBQUVpSSxLQUFLLEVBQUU7VUFBRUosS0FBSyxFQUFFO1FBQVUsQ0FBQztRQUFFSyxJQUFJLEVBQUU7VUFBRUwsS0FBSyxFQUFFO1FBQVU7TUFBRSxDQUFDO01BQzlETSxDQUFDLEVBQUU7UUFBRUYsS0FBSyxFQUFFO1VBQUVKLEtBQUssRUFBRTtRQUFVLENBQUM7UUFBRUssSUFBSSxFQUFFO1VBQUVMLEtBQUssRUFBRTtRQUFVO01BQUU7SUFDL0Q7RUFDRixDQUFDO0VBRUQsb0JBQ0VyTSx3REFBQTtJQUFLSyxTQUFTLEVBQUMsbUNBQW1DO0lBQUFELFFBQUEsZ0JBQzlDSix3REFBQTtNQUFLSyxTQUFTLEVBQUMsbUJBQW1CO01BQUFELFFBQUEsZ0JBQzlCTix1REFBQTtRQUFJTyxTQUFTLEVBQUMsMkRBQTJEO1FBQUFELFFBQUEsRUFBQztNQUUxRSxDQUFJLENBQUMsZUFDTE4sdURBQUE7UUFBR08sU0FBUyxFQUFDLG1GQUFtRjtRQUFBRCxRQUFBLEVBQUM7TUFFakcsQ0FBRyxDQUFDO0lBQUEsQ0FDSCxDQUFDLGVBRU5KLHdEQUFBO01BQUtLLFNBQVMsRUFBQyx1Q0FBdUM7TUFBQUQsUUFBQSxnQkFDbERKLHdEQUFBO1FBQUtLLFNBQVMsRUFBQyw2RUFBNkU7UUFBQUQsUUFBQSxnQkFDeEZOLHVEQUFBO1VBQUtPLFNBQVMsRUFBQztRQUFpRCxDQUFNLENBQUMsZUFDdkVQLHVEQUFBO1VBQUlPLFNBQVMsRUFBQyxzQ0FBc0M7VUFBQUQsUUFBQSxFQUFDO1FBQWdCLENBQUksQ0FBQyxlQUMxRU4sdURBQUE7VUFBS08sU0FBUyxFQUFDLGVBQWU7VUFBQUQsUUFBQSxFQUN6QmdLLGFBQWEsZ0JBQUd0Syx1REFBQSxDQUFDa0ssaURBQUc7WUFBQ2dDLE9BQU8sRUFBRUEsT0FBUTtZQUFDMUosSUFBSSxFQUFFOEg7VUFBYyxDQUFFLENBQUMsZ0JBQUd0Syx1REFBQTtZQUFHTyxTQUFTLEVBQUMsbUJBQW1CO1lBQUFELFFBQUEsRUFBQztVQUFhLENBQUc7UUFBQyxDQUNuSCxDQUFDO01BQUEsQ0FDTCxDQUFDLGVBRU5KLHdEQUFBO1FBQUtLLFNBQVMsRUFBQyw2RUFBNkU7UUFBQUQsUUFBQSxnQkFDeEZOLHVEQUFBO1VBQUtPLFNBQVMsRUFBQztRQUFpRCxDQUFNLENBQUMsZUFDdkVQLHVEQUFBO1VBQUlPLFNBQVMsRUFBQyxzQ0FBc0M7VUFBQUQsUUFBQSxFQUFDO1FBQWMsQ0FBSSxDQUFDLGVBQ3hFTix1REFBQTtVQUFLTyxTQUFTLEVBQUMsbUNBQW1DO1VBQUFELFFBQUEsRUFDN0NrSyxjQUFjLGdCQUFHeEssdURBQUEsQ0FBQ21LLHNEQUFRO1lBQUMrQixPQUFPLEVBQUE5QyxhQUFBLENBQUFBLGFBQUEsS0FBTThDLE9BQU87Y0FBRVEsTUFBTSxFQUFDLENBQUM7WUFBQyxFQUFFO1lBQUNsSyxJQUFJLEVBQUVnSTtVQUFlLENBQUUsQ0FBQyxnQkFBR3hLLHVEQUFBO1lBQUdPLFNBQVMsRUFBQyxtQkFBbUI7WUFBQUQsUUFBQSxFQUFDO1VBQWEsQ0FBRztRQUFDLENBQzFJLENBQUM7TUFBQSxDQUNMLENBQUMsZUFFTkosd0RBQUE7UUFBS0ssU0FBUyxFQUFDLDJGQUEyRjtRQUFBRCxRQUFBLGdCQUN0R04sdURBQUE7VUFBS08sU0FBUyxFQUFDO1FBQWlELENBQU0sQ0FBQyxlQUN2RVAsdURBQUE7VUFBSU8sU0FBUyxFQUFDLHNDQUFzQztVQUFBRCxRQUFBLEVBQUM7UUFBMkIsQ0FBSSxDQUFDLGVBQ3JGTix1REFBQTtVQUFLTyxTQUFTLEVBQUMsZUFBZTtVQUFBRCxRQUFBLEVBQ3pCb0ssWUFBWSxnQkFBRzFLLHVEQUFBLENBQUNvSyxrREFBSTtZQUFDOEIsT0FBTyxFQUFFQSxPQUFRO1lBQUMxSixJQUFJLEVBQUVrSTtVQUFhLENBQUUsQ0FBQyxnQkFBRzFLLHVEQUFBO1lBQUdPLFNBQVMsRUFBQyxtQkFBbUI7WUFBQUQsUUFBQSxFQUFDO1VBQWEsQ0FBRztRQUFDLENBQ2xILENBQUM7TUFBQSxDQUNMLENBQUM7SUFBQSxDQUNMLENBQUM7RUFBQSxDQUNMLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVWLFNBQVMsRTs7Ozs7Ozs7Ozs7QUN6SHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9BcnRpY2xlUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0ZvcnVtUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0hvbWVQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvUmVnaXN0ZXJQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvU3RhdHNQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vIEltcG9ydCBkZXMgc3R5bGVzXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBJbXBvcnQgZGVzIHBhZ2VzXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3BhZ2VzL0hvbWVQYWdlJztcclxuaW1wb3J0IEZvcnVtUGFnZSBmcm9tICcuL3BhZ2VzL0ZvcnVtUGFnZSc7XHJcbmltcG9ydCBBcnRpY2xlUGFnZSBmcm9tICcuL3BhZ2VzL0FydGljbGVQYWdlJztcclxuaW1wb3J0IFN0YXRzUGFnZSBmcm9tICcuL3BhZ2VzL1N0YXRzUGFnZSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBSZWdpc3RlclBhZ2UgZnJvbSAnLi9wYWdlcy9SZWdpc3RlclBhZ2UnXHJcblxyXG5jb25zb2xlLmxvZyhcIvCfkLIgRMOpbWFycmFnZSBkZSBsJ2FwcGxpY2F0aW9uIERyYWdvbkNNUy4uLlwiKTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgZm9udC1zYW5zIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIEJBTk5Jw4hSRSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgbWQ6aC00OCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWItNCBib3JkZXItdmlraW5nLWdvbGQgcmVsYXRpdmUgc2hhZG93LTJ4bCBiZy1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvYmFubmllcmUucG5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkJhbm5pw6hyZSBEcmFnb25zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXZpa2luZy1kYXJrIHRvLXRyYW5zcGFyZW50IG9wYWNpdHktNjBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LTEwIHB4LTQgZmxleC1ncm93IHJlbGF0aXZlIHotMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZVBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2ZvcnVtXCIgZWxlbWVudD17PEZvcnVtUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ydW0vYXJ0aWNsZS86aWRcIiBlbGVtZW50PXs8QXJ0aWNsZVBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3N0YXRpc3RpcXVlXCIgZWxlbWVudD17PFN0YXRzUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBlbGVtZW50PXs8UmVnaXN0ZXJQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBib3JkZXItdCBib3JkZXItdmlraW5nLWdvbGQvMzAgcHktNiBtdC0xMCB0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1saWdodCBmb250LWRyYWdvbiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+wqkgTCdBY2Fkw6ltaWUgZGUgQmVyayAtIEFyY2hpdmVzIERyYWNvbmlxdWVzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1yb290Jyk7XHJcbmlmIChyb290RWxlbWVudCkge1xyXG4gICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3Qocm9vdEVsZW1lbnQpO1xyXG4gICAgcm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiAgICBjb25zb2xlLmxvZyhcIuKchSBSZWFjdCBpbmplY3TDqSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxufSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgSW1wb3NzaWJsZSBkZSB0cm91dmVyIGwnw6lsw6ltZW50ICNyZWFjdC1yb290XCIpO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIGJvcmRlci1iLTIgYm9yZGVyLXZpa2luZy1nb2xkLzUwIHAtNCBzdGlja3kgdG9wLTAgei01MCBzaGFkb3ctbGcgYmFja2Ryb3AtYmx1ci1tZCBiZy1vcGFjaXR5LTk1XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGRyb3Atc2hhZG93LW1kIGdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtXCI+UmlkZXJzIG9mIEJ1cms8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtOCB0ZXh0LWxnIGZvbnQtZHJhZ29uIHRyYWNraW5nLXdpZGUgdGV4dC12aWtpbmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtdmlraW5nLWdvbGQgaG92ZXI6Ym9yZGVyLWIgYm9yZGVyLXZpa2luZy1maXJlIHBiLTEgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2N1ZWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc3RhdGlzdGlxdWVcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIGhvdmVyOmJvcmRlci1iIGJvcmRlci12aWtpbmctZmlyZSBwYi0xIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGlzdGlxdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIGhvdmVyOmJvcmRlci1iIGJvcmRlci12aWtpbmctZmlyZSBwYi0xIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9ydW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgQXJ0aWNsZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHsgaGVhZGVyczogeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nIH0gfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQtMnhsIHB5LTIwIGFuaW1hdGUtcHVsc2VcIj5SZWNoZXJjaGUgZGFucyBsZXMgYXJjaGl2ZXMuLi48L2Rpdj47XHJcbiAgICBpZiAoIWFydGljbGUpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWZpcmUgdGV4dC14bCBweS0xMFwiPkFydGljbGUgaW50cm91dmFibGUgZGFucyBsZXMgYXJjaGl2ZXMuPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIG1iLTYgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuKGkDwvc3Bhbj4gUmV0b3VyIGF1IGZvcnVtXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC04IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgey8qIETDqWNvcmF0aW9uIGNvaW4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy0yMCBoLTIwIGJnLXZpa2luZy1nb2xkIG9wYWNpdHktMTAgcm91bmRlZC1ibC1mdWxsXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNCBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtc20gdGV4dC1zdG9uZS01MDAgbWItOCBib3JkZXItYiBib3JkZXItc3RvbmUtNzAwIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy12aWtpbmctcmVkIHB4LTIgcHktMSByb3VuZGVkIHRleHQtd2hpdGUgZm9udC1ib2xkIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJjaGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DcsOpw6kgbGUge25ldyBEYXRlKGFydGljbGUuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBmb250LXNlcmlmIHdoaXRlc3BhY2UtcHJlLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBOb3RlOiBMZXMgYmxvY3MgZXQgY29tbWVudGFpcmVzIG7DqWNlc3NpdGVudCB1bmUgbG9naXF1ZSBwbHVzIHBvdXNzw6llIMOgIGltcGzDqW1lbnRlciBwbHVzIHRhcmQgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBGb3J1bVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2FydGljbGVzJywgeyBoZWFkZXJzOiB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbicgfSB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignRXJyZXVyIHLDqXNlYXUnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGVzKGRhdGFbJ2h5ZHJhOm1lbWJlciddIHx8IFtdKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgQVBJOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoXCJJbXBvc3NpYmxlIGQnYWNjw6lkZXIgYXV4IGFyY2hpdmVzLlwiKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LTN4bCBweS0yMCBhbmltYXRlLXB1bHNlXCI+RMOpcm91bGVtZW50IGRlcyBwYXJjaGVtaW5zLi4uPC9kaXY+O1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1maXJlIGZvbnQtYm9sZCBweS0xMCB0ZXh0LXhsIGJvcmRlciBib3JkZXItdmlraW5nLXJlZCBiZy12aWtpbmctcmVkLzEwIHJvdW5kZWRcIj57ZXJyb3J9PC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItOCBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMzAgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENocm9uaXF1ZXMgZGVzIENoYXNzZXVyc1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXZpa2luZy1yZWQgcHgtMyBweS0xIHJvdW5kZWQgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1zbSBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlcy5sZW5ndGh9IFLDqWNpdHNcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7YXJ0aWNsZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMCBiZy12aWtpbmctcm9jay81MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci12aWtpbmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCBpdGFsaWMgdGV4dC1sZ1wiPkxlcyBhcmNoaXZlcyBzb250IHZpZGVzIHBvdXIgbGUgbW9tZW50LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGVzLm1hcChhcnRpY2xlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FydGljbGUuaWR9IGNsYXNzTmFtZT1cImdyb3VwIGJnLXZpa2luZy1yb2NrIHAtNiByb3VuZGVkLXNtIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIGJvcmRlci1sLTQgYm9yZGVyLWwtdmlraW5nLWdvbGQgaG92ZXI6Ym9yZGVyLWwtdmlraW5nLWZpcmUgaG92ZXI6Ymctc3RvbmUtODAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHNoYWRvdy1sZyByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItMiBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWxpZ2h0IG1iLTYgbGluZS1jbGFtcC0yIGZvbnQtc2VyaWYgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuc3VtbWFyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmQgbXQtNCBwdC00IGJvcmRlci10IGJvcmRlci1zdG9uZS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShhcnRpY2xlLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2ZvcnVtL2FydGljbGUvJHthcnRpY2xlLmlkfWB9IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWZpcmUgaG92ZXI6dGV4dC12aWtpbmctZ29sZCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gdHJhY2tpbmctd2lkZXIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdHJhbnNpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaXJlIGxlIHBhcmNoZW1pbiA8c3Bhbj7ihpI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ydW1QYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTE2IGFuaW1hdGUtZmFkZS1pbi11cFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1kcmFnb24gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXZpa2luZy1nb2xkIHZpYS15ZWxsb3ctNTAwIHRvLXZpa2luZy1nb2xkIG1iLTggZHJvcC1zaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBkYW5zIGwnQW50cmVcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTEgYmctdmlraW5nLXJlZCBteC1hdXRvIG1iLTggcm91bmRlZC1mdWxsIHNoYWRvdy1bMF8wXzEwcHhfI2RjMjYyNl1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtdmlraW5nLWxpZ2h0IG1iLTEyIG1heC13LTN4bCBteC1hdXRvIGZvbnQtc2VyaWYgaXRhbGljIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgICAgICAgXCJMw6Agb8O5IGxlcyBjYXJ0ZXMgcydhcnLDqnRlbnQsIGwnYXZlbnR1cmUgY29tbWVuY2UuIEV4cGxvcmV6IGxlcyBsw6lnZW5kZXMsIHBhcnRhZ2V6IHZvcyBkw6ljb3V2ZXJ0ZXMgZXQgYW5hbHlzZXogbGVzIGRvbm7DqWVzIGRlIGwnYXJjaGlwZWwgZGUgQmVyay5cIlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgcHgtOCBweS00IGJnLXZpa2luZy1yZWQgaG92ZXI6YmctcmVkLTkwMCBib3JkZXItMiBib3JkZXItdmlraW5nLWdvbGQgdGV4dC13aGl0ZSBmb250LWRyYWdvbiB0ZXh0LXhsIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1bMF8wXzE1cHhfcmdiYSgyMjAsMzgsMzgsMC41KV1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+QWNjw6lkZXIgYXUgRm9ydW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZS8yMCB0by10cmFuc3BhcmVudCAtdHJhbnNsYXRlLXgtZnVsbCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC1mdWxsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zdGF0aXN0aXF1ZVwiIGNsYXNzTmFtZT1cInB4LTggcHktNCBiZy12aWtpbmctcm9jayBob3ZlcjpiZy1zdG9uZS03MDAgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTUwMCB0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIGZvbnQtZHJhZ29uIHRleHQteGwgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICBWb2lyIGxlcyBTdGF0c1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBSZWdpc3RlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBsYWluUGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHJvbGU6ICdST0xFX1VTRVInXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEVycm9yKCcnKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3JlZ2lzdGVyJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJpZ2UgdmVycyBsJ2FjY3VlaWwgb3UgbGUgbG9naW4gYXByw6hzIHN1Y2PDqHNcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvJyk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIkVycmV1ciBsb3JzIGRlIGwnaW5zY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJJbXBvc3NpYmxlIGRlIGNvbnRhY3RlciBsZSBHcmFuZCBTY3JpYmUgKEVycmV1ciByw6lzZWF1KVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXZpa2luZy1yb2NrLzkwIHAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCBzaGFkb3ctMnhsIGJhY2tkcm9wLWJsdXItc21cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBSZWpvaW5kcmUgbGEgR3VpbGRlXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtOTAwLzQwIGJvcmRlciBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC0yMDAgcC0zIHJvdW5kZWQgbWItNiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBOT00gRCdVVElMSVNBVEVVUiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Ob20gZGUgY29kZSAoUHNldWRvKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBLcm9rbW91XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEVNQUlMICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPkVtYWlsIGRlIGNvbnRhY3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidmlraW5nQGJlcmsuZnJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogUsOUTEUgKETDqWrDoCBmb25jdGlvbm5lbCkgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+UmFuZyBhdSBzZWluIGRlIGxhIEd1aWxkZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHJvbGU6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9VU0VSXCI+QWJvbm7DqSAoTGVjdGV1cik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfQVVURVVSXCI+QXV0ZXVyIChOYXJyYXRldXIpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0VESVRFVVJcIj7DiWRpdGV1ciAoR2FyZGllbik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfREVTSUdORVJcIj5EZXNpZ25ldXIgKEFydGlzYW4pPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0ZPVVJOSVNTRVVSXCI+Rm91cm5pc3NldXIgZGUgZG9ubsOpZXMgKFNjcmliZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNT1QgREUgUEFTU0UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+TW90IGRlIHBhc3NlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyByb3VuZGVkIHRleHQtdmlraW5nLXBhcmNobWVudCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGxhaW5QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHBsYWluUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC12aWtpbmctZGFyayBmb250LWV4dHJhYm9sZCBweS00IHJvdW5kZWQgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBzaGFkb3ctbGcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG10LTRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEdyYXZlciBtb24gbm9tXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCwgQXJjRWxlbWVudCwgUG9pbnRFbGVtZW50LCBMaW5lRWxlbWVudCxcclxufSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IEJhciwgRG91Z2hudXQsIExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCwgQXJjRWxlbWVudCwgUG9pbnRFbGVtZW50LCBMaW5lRWxlbWVudCk7XHJcblxyXG5jb25zdCBTdGF0c1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2JveE9mZmljZURhdGEsIHNldEJveE9mZmljZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BvcHVsYXRpb25EYXRhLCBzZXRQb3B1bGF0aW9uRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGltZWxpbmVEYXRhLCBzZXRUaW1lbGluZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGxvYWRDU1YgPSAodXJsLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihyID0+IHIub2sgPyByLnRleHQoKSA6IG51bGwpXHJcbiAgICAgIC50aGVuKHR4dCA9PiB7XHJcbiAgICAgICAgaWYoIXR4dCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gdHh0LnRyaW0oKS5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbGluZXNbMF0uc3BsaXQoJzsnKS5tYXAoaCA9PiBoLnRyaW0oKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGxpbmVzLnNsaWNlKDEpLm1hcChsID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFscyA9IGwuc3BsaXQoJzsnKS5tYXAodiA9PiB2LnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiAoey4uLmFjYywgW2hdOiB2YWxzW2ldfSksIHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGgpIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvYm94X29mZmljZS5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBzZXRCb3hPZmZpY2VEYXRhKHtcclxuICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnRmlsbSddKSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGxhYmVsOiAnTSQnLFxyXG4gICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ0JveCBPZmZpY2UgKE1pbGxpb25zICQpJ10pKSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjN2YxZDFkJywgJyNkYzI2MjYnLCAnI2Q5NzcwNiddLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjkyNTI0JyxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICAgICAgfV1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9iZXJrX3BvcHVsYXRpb24uY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgc2V0UG9wdWxhdGlvbkRhdGEoe1xyXG4gICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydHcm91cGUnXSksXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnUG9wdWxhdGlvbiddKSksXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsnI2Q5NzcwNicsICcjN2YxZDFkJywgJyM1NzUzNGUnLCAnI2E4YTI5ZSddLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMWMxOTE3JyxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICAgICAgfV1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9kcmFnb25zX3RpbWVsaW5lLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZWxpbmVEYXRhKHtcclxuICAgICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydBbm7DqWUnXSksXHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdFc3DDqGNlcycsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydFc3DDqGNlcyBSZWNlbnPDqWVzJ10pKSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZDk3NzA2JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyMTcsIDExOSwgNiwgMC4yKScsXHJcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHRlbnNpb246IDAuMyxcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgIHBsdWdpbnM6IHsgbGVnZW5kOiB7IGxhYmVsczogeyBjb2xvcjogJyNlN2U1ZTQnLCBmb250OiB7IGZhbWlseTogJ3NlcmlmJyB9IH0gfSB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHk6IHsgdGlja3M6IHsgY29sb3I6ICcjYThhMjllJyB9LCBncmlkOiB7IGNvbG9yOiAnIzQ0NDAzYycgfSB9LFxyXG4gICAgICB4OiB7IHRpY2tzOiB7IGNvbG9yOiAnI2E4YTI5ZScgfSwgZ3JpZDogeyBjb2xvcjogJyM0NDQwM2MnIH0gfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIGFuaW1hdGUtZmFkZS1pblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNCBkcm9wLXNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgTCdPYnNlcnZhdG9pcmUgZGUgQmVya1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCB0ZXh0LWxnIGl0YWxpYyBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMzAgaW5saW5lLWJsb2NrIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIFJlY2Vuc2VtZW50IG9mZmljaWVsIGRlIGwnYXJjaGlwZWxcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5UcsOpc29yIGRlIEd1ZXJyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Ym94T2ZmaWNlRGF0YSA/IDxCYXIgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17Ym94T2ZmaWNlRGF0YX0gLz4gOiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPkNoYXJnZW1lbnQuLi48L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5DbGFucyAmIFRyaWJ1czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3B1bGF0aW9uRGF0YSA/IDxEb3VnaG51dCBvcHRpb25zPXt7Li4ub3B0aW9ucywgc2NhbGVzOnt9fX0gZGF0YT17cG9wdWxhdGlvbkRhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5DaGFyZ2VtZW50Li4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIG1kOmNvbC1zcGFuLTIgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5DaHJvbm9sb2dpZSBkZXMgRMOpY291dmVydGVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04MCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lbGluZURhdGEgPyA8TGluZSBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXt0aW1lbGluZURhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5DaGFyZ2VtZW50Li4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0c1BhZ2U7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhvbWVQYWdlIiwiRm9ydW1QYWdlIiwiQXJ0aWNsZVBhZ2UiLCJTdGF0c1BhZ2UiLCJOYXZiYXIiLCJSZWdpc3RlclBhZ2UiLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiY29uc29sZSIsImxvZyIsIkFwcCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwicGF0aCIsImVsZW1lbnQiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiZXJyb3IiLCJMaW5rIiwidG8iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsIl91c2VQYXJhbXMiLCJpZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoIiwiY29uY2F0IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsInRpdGxlIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInN1bW1hcnkiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJzZXRFcnJvciIsIm9rIiwiRXJyb3IiLCJsZW5ndGgiLCJtYXAiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJuZXh0IiwicHVzaCIsImlzQXJyYXkiLCJ1c2VOYXZpZ2F0ZSIsIm5hdmlnYXRlIiwidXNlcm5hbWUiLCJlbWFpbCIsInBsYWluUGFzc3dvcmQiLCJyb2xlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImhhbmRsZVN1Ym1pdCIsIl9yZWYiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJfdCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJfeCIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJCYXJFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiQXJjRWxlbWVudCIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiQmFyIiwiRG91Z2hudXQiLCJMaW5lIiwicmVnaXN0ZXIiLCJib3hPZmZpY2VEYXRhIiwic2V0Qm94T2ZmaWNlRGF0YSIsInBvcHVsYXRpb25EYXRhIiwic2V0UG9wdWxhdGlvbkRhdGEiLCJ0aW1lbGluZURhdGEiLCJzZXRUaW1lbGluZURhdGEiLCJsb2FkQ1NWIiwidXJsIiwiY2FsbGJhY2siLCJ0ZXh0IiwidHh0IiwibGluZXMiLCJ0cmltIiwic3BsaXQiLCJoIiwidmFscyIsInJlZHVjZSIsImFjYyIsIl9kZWZpbmVQcm9wZXJ0eSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJwYXJzZUZsb2F0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwidGVuc2lvbiIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInBsdWdpbnMiLCJsZWdlbmQiLCJjb2xvciIsImZvbnQiLCJmYW1pbHkiLCJzY2FsZXMiLCJ0aWNrcyIsImdyaWQiLCJ4Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=