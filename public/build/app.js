"use strict";
(self["webpackChunksae5012_dragons"] = self["webpackChunksae5012_dragons"] || []).push([["app"],{

/***/ "./assets/app.js"
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/HomePage */ "./assets/pages/HomePage.jsx");
/* harmony import */ var _pages_ForumPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ForumPage */ "./assets/pages/ForumPage.jsx");
/* harmony import */ var _pages_ArticlePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/ArticlePage */ "./assets/pages/ArticlePage.jsx");
/* harmony import */ var _pages_StatsPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/StatsPage */ "./assets/pages/StatsPage.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Navbar */ "./assets/components/Navbar.jsx");
/* harmony import */ var _pages_RegisterPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/RegisterPage */ "./assets/pages/RegisterPage.jsx");
/* harmony import */ var _pages_LoginPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/LoginPage */ "./assets/pages/LoginPage.jsx");
/* harmony import */ var _pages_AdminDashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/AdminDashboard */ "./assets/pages/AdminDashboard.jsx");




// Import des styles


// Import des pages








// NOUVEAU : Import de la page Dashboard Admin

console.log("🐲 Démarrage de l'application DragonCMS...");
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "min-h-screen flex flex-col font-sans text-viking-parchment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full h-32 md:h-48 overflow-hidden border-b-4 border-viking-gold relative shadow-2xl bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/banniere.png",
    alt: "Banni\xE8re Dragons",
    className: "w-full h-full object-cover object-center opacity-80 hover:opacity-100 transition duration-700"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-viking-dark to-transparent opacity-60"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto py-10 px-4 flex-grow relative z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_HomePage__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/forum",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_ForumPage__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/forum/article/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_ArticlePage__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/statistique",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_StatsPage__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_RegisterPage__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_LoginPage__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/admin",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_AdminDashboard__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "bg-viking-rock border-t border-viking-gold/30 py-6 mt-10 text-center text-viking-light font-dragon text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 L'Acad\xE9mie de Berk - Archives Draconiques"))));
};
var rootElement = document.getElementById('react-root');
if (rootElement) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);
  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));
  console.log("✅ React injecté avec succès !");
} else {
  console.error("❌ Impossible de trouver l'élément #react-root");
}

/***/ },

/***/ "./assets/components/ArticleForm.jsx"
/*!*******************************************!*\
  !*** ./assets/components/ArticleForm.jsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _CsvChart__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./CsvChart */ "./assets/components/CsvChart.jsx");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }








































function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

// 👇 1. IMPORT DU GRAPHIQUE (Indispensable)

var ArticleForm = function ArticleForm(_ref) {
  var _ref$id = _ref.id,
    id = _ref$id === void 0 ? null : _ref$id,
    onSuccess = _ref.onSuccess;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    summary = _useState4[0],
    setSummary = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    blocs = _useState6[0],
    setBlocs = _useState6[1];

  // Initialisation avec des tableaux vides pour éviter les crashs
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    musicLibrary = _useState8[0],
    setMusicLibrary = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    datasetLibrary = _useState0[0],
    setDatasetLibrary = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];

  // --- CHARGEMENT DES DONNÉES ---
  (0,react__WEBPACK_IMPORTED_MODULE_40__.useEffect)(function () {
    // 1. Musiques
    fetch('/api/music/list').then(function (res) {
      return res.ok ? res.json() : [];
    }) // Si erreur, on renvoie tableau vide
    .then(function (data) {
      // On s'assure que c'est bien un objet/tableau avant de set
      if (data) setMusicLibrary(data);
    })["catch"](function (err) {
      return console.error("Erreur musique (ignorée)", err);
    });

    // 2. Datasets (CSV)
    fetch('/api/datasets/list').then(function (res) {
      if (!res.ok) throw new Error("Erreur API Dataset");
      return res.json();
    }).then(function (data) {
      // 👇 SÉCURITÉ : On ne met à jour que si c'est bien un tableau
      if (Array.isArray(data)) {
        setDatasetLibrary(data);
      } else {
        console.error("Format dataset invalide reçue du back:", data);
        setDatasetLibrary([]);
      }
    })["catch"](function (err) {
      console.error("Impossible de charger les datasets", err);
      setDatasetLibrary([]); // En cas d'erreur, tableau vide = pas de crash
    });
  }, []);

  // --- GESTION DES BLOCS ---
  var addBloc = function addBloc(type) {
    setBlocs([].concat(_toConsumableArray(blocs), [{
      type: type,
      content: '',
      mediaUrl: '',
      vizType: 'bar',
      file: null,
      id: Date.now()
    }]));
  };
  var removeBloc = function removeBloc(indexToRemove) {
    setBlocs(blocs.filter(function (_, index) {
      return index !== indexToRemove;
    }));
  };
  var updateBloc = function updateBloc(index, field, value) {
    var newBlocs = _toConsumableArray(blocs);
    newBlocs[index][field] = value;
    setBlocs(newBlocs);
  };
  var handleFileChange = function handleFileChange(index, e) {
    var file = e.target.files[0];
    if (file) {
      updateBloc(index, 'file', file);
      if (file.type.startsWith('image/')) {
        updateBloc(index, 'mediaUrl', URL.createObjectURL(file));
      }
    }
  };

  // --- SOUMISSION ---
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var formData, token, response, errorData, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();
            setLoading(true);
            formData = new FormData();
            formData.append('title', title);
            formData.append('summary', summary);
            blocs.forEach(function (bloc, index) {
              formData.append("blocs[".concat(index, "][type]"), bloc.type);
              formData.append("blocs[".concat(index, "][position]"), index + 1);
              if (['h2', 'paragraph'].includes(bloc.type)) {
                formData.append("blocs[".concat(index, "][content]"), bloc.content);
              }
              if (bloc.type === 'image' && bloc.file) {
                formData.append("blocs[".concat(index, "][imageFile]"), bloc.file);
              }
              if (bloc.type === 'stats') {
                formData.append("blocs[".concat(index, "][vizType]"), bloc.vizType);
                formData.append("blocs[".concat(index, "][csvPath]"), bloc.mediaUrl);
              }
              if (bloc.type === 'music') {
                formData.append("blocs[".concat(index, "][musicFileName]"), bloc.mediaUrl);
              }
            });
            _context.p = 1;
            token = localStorage.getItem('token');
            _context.n = 2;
            return fetch('/api/custom/articles/create', {
              method: 'POST',
              headers: {
                'Authorization': "Bearer ".concat(token)
              },
              body: formData
            });
          case 2:
            response = _context.v;
            if (!response.ok) {
              _context.n = 3;
              break;
            }
            alert("Votre récit a été gravé avec succès !");
            onSuccess();
            _context.n = 5;
            break;
          case 3:
            _context.n = 4;
            return response.json();
          case 4:
            errorData = _context.v;
            alert("Erreur : " + (errorData.message || "Problème serveur"));
          case 5:
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            console.error(_t);
            alert("Erreur serveur critique.");
          case 7:
            _context.p = 7;
            setLoading(false);
            return _context.f(7);
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[1, 6, 7, 8]]);
    }));
    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("form", {
    onSubmit: handleSubmit,
    className: "bg-stone-900 p-8 border border-stone-800 shadow-2xl max-w-4xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("h2", {
    className: "text-3xl font-dragon text-viking-gold mb-8 text-center uppercase"
  }, "Nouvelle Chronique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("input", {
    type: "text",
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    className: "w-full bg-black/50 border border-stone-700 text-white p-4 text-2xl outline-none focus:border-viking-gold",
    placeholder: "Titre...",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("textarea", {
    value: summary,
    onChange: function onChange(e) {
      return setSummary(e.target.value);
    },
    className: "w-full bg-black/50 border border-stone-700 text-stone-300 p-4 h-24 outline-none focus:border-viking-gold",
    placeholder: "R\xE9sum\xE9...",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "space-y-6 mb-8"
  }, blocs.map(function (bloc, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
      key: bloc.id,
      className: "bg-stone-800/50 p-6 border-l-4 border-viking-gold relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("button", {
      type: "button",
      onClick: function onClick() {
        return removeBloc(index);
      },
      className: "absolute top-2 right-2 text-stone-500 hover:text-red-500 text-xs font-bold uppercase transition"
    }, "Supprimer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("p", {
      className: "text-viking-gold text-xs uppercase font-bold mb-4 tracking-widest"
    }, "Bloc ", index + 1, " : ", bloc.type), bloc.type === 'h2' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("input", {
      type: "text",
      value: bloc.content,
      onChange: function onChange(e) {
        return updateBloc(index, 'content', e.target.value);
      },
      className: "w-full bg-black border border-stone-600 p-3 text-white font-bold",
      placeholder: "Sous-titre..."
    }), bloc.type === 'paragraph' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("textarea", {
      value: bloc.content,
      onChange: function onChange(e) {
        return updateBloc(index, 'content', e.target.value);
      },
      className: "w-full bg-black border border-stone-600 p-3 text-stone-300 h-32",
      placeholder: "Texte..."
    }), bloc.type === 'image' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("input", {
      type: "file",
      accept: "image/*",
      onChange: function onChange(e) {
        return handleFileChange(index, e);
      },
      className: "text-stone-400 text-sm"
    }), bloc.mediaUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("img", {
      src: bloc.mediaUrl,
      alt: "Preview",
      className: "mt-4 max-h-40 border border-stone-600"
    })), bloc.type === 'stats' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
      className: "text-stone-500 text-xs mb-1 block uppercase font-bold"
    }, "Donn\xE9es (CSV)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("select", {
      onChange: function onChange(e) {
        return updateBloc(index, 'mediaUrl', e.target.value);
      },
      className: "w-full bg-black border border-stone-600 p-3 text-white focus:border-viking-gold outline-none",
      value: bloc.mediaUrl || ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
      value: ""
    }, "-- Choisir un jeu de donn\xE9es --"), Array.isArray(datasetLibrary) && datasetLibrary.length > 0 ? datasetLibrary.map(function (d) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
        key: d.id,
        value: d.source
      }, d.name);
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
      disabled: true
    }, "Aucune donn\xE9e disponible (ou chargement...)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("label", {
      className: "text-stone-500 text-xs mb-1 block uppercase font-bold"
    }, "Type de Graphique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
      className: "flex gap-2"
    }, ['bar', 'line', 'pie'].map(function (type) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("button", {
        key: type,
        type: "button",
        onClick: function onClick() {
          return updateBloc(index, 'vizType', type);
        },
        className: "px-3 py-2 text-xs font-bold uppercase border transition ".concat(bloc.vizType === type ? 'bg-viking-gold text-black border-viking-gold' : 'bg-black text-stone-500 border-stone-700 hover:text-white')
      }, type);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
      className: "bg-black/20 border border-stone-800 flex items-center justify-center min-h-[200px] rounded"
    }, bloc.mediaUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_CsvChart__WEBPACK_IMPORTED_MODULE_41__["default"], {
      csvUrl: bloc.mediaUrl,
      vizType: bloc.vizType || 'bar'
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("p", {
      className: "text-stone-600 text-xs italic"
    }, "S\xE9lectionnez un fichier..."))), bloc.type === 'music' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("select", {
      onChange: function onChange(e) {
        return updateBloc(index, 'mediaUrl', e.target.value);
      },
      className: "w-full bg-black border border-stone-600 p-3 text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
      value: ""
    }, "-- Choisir une m\xE9lodie --"), musicLibrary && Object.entries(musicLibrary).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        folder = _ref4[0],
        files = _ref4[1];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("optgroup", {
        key: folder,
        label: folder.toUpperCase()
      }, Array.isArray(files) && files.map(function (file) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("option", {
          key: file,
          value: "".concat(folder, "/").concat(file)
        }, file);
      }));
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "flex flex-wrap gap-2 justify-center mb-10 pb-10 border-b border-stone-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(ToolBtn, {
    label: "Titre H2",
    onClick: function onClick() {
      return addBloc('h2');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(ToolBtn, {
    label: "Paragraphe",
    onClick: function onClick() {
      return addBloc('paragraph');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(ToolBtn, {
    label: "Image",
    onClick: function onClick() {
      return addBloc('image');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(ToolBtn, {
    label: "Graphique",
    onClick: function onClick() {
      return addBloc('stats');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(ToolBtn, {
    label: "Musique",
    onClick: function onClick() {
      return addBloc('music');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("button", {
    type: "submit",
    disabled: loading,
    className: "w-full bg-viking-gold text-black font-black uppercase py-4 hover:bg-yellow-500 transition shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-50"
  }, loading ? 'Gravure en cours...' : 'Publier la Chronique'));
};
var ToolBtn = function ToolBtn(_ref5) {
  var label = _ref5.label,
    onClick = _ref5.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("button", {
    type: "button",
    onClick: onClick,
    className: "px-4 py-2 bg-stone-800 text-stone-300 border border-stone-700 hover:border-viking-gold hover:text-white transition text-xs uppercase font-bold tracking-wider"
  }, "+ ", label);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleForm);

/***/ },

/***/ "./assets/components/CsvChart.jsx"
/*!****************************************!*\
  !*** ./assets/components/CsvChart.jsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Legend.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Tooltip.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/ResponsiveContainer.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Cell.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/polar/Pie.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/CartesianGrid.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Line.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Bar.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/LineChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/BarChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/PieChart.js");

























function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var COLORS = ['#d4af37', '#b91c1c', '#1c1917', '#57534e', '#a8a29e']; // Couleurs Viking (Or, Rouge, Noir...)

var CsvChart = function CsvChart(_ref) {
  var csvUrl = _ref.csvUrl,
    _ref$vizType = _ref.vizType,
    vizType = _ref$vizType === void 0 ? 'bar' : _ref$vizType;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_25__.useEffect)(function () {
    if (!csvUrl) return;
    setLoading(true);
    // 1. On va chercher le fichier CSV via son URL
    fetch(csvUrl).then(function (response) {
      if (!response.ok) throw new Error("Impossible de lire le parchemin de données");
      return response.text();
    }).then(function (csvText) {
      // 2. On le transforme en JSON utilisable
      papaparse__WEBPACK_IMPORTED_MODULE_26___default().parse(csvText, {
        header: true,
        // La première ligne contient les titres
        dynamicTyping: true,
        // Convertit les "10" en nombres 10
        skipEmptyLines: true,
        complete: function complete(results) {
          setData(results.data);
          setLoading(false);
        },
        error: function error(err) {
          setError("Le fichier est illisible.");
          setLoading(false);
        }
      });
    })["catch"](function (err) {
      setError(err.message);
      setLoading(false);
    });
  }, [csvUrl]);
  if (!csvUrl) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("p", {
    className: "text-stone-500 italic text-xs"
  }, "Aucune donn\xE9e s\xE9lectionn\xE9e.");
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("p", {
    className: "text-viking-gold animate-pulse text-xs"
  }, "D\xE9chiffrage des runes...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("p", {
    className: "text-red-500 text-xs"
  }, "Erreur : ", error);
  if (data.length === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("p", {
    className: "text-stone-500 text-xs"
  }, "Le fichier est vide.");

  // On devine les clés (X = première colonne, Y = deuxième colonne)
  var keys = Object.keys(data[0]);
  var xKey = keys[0]; // Ex: "Année" ou "Dragon"
  var yKey = keys[1]; // Ex: "Population" ou "Vitesse"

  var renderChart = function renderChart() {
    switch (vizType) {
      case 'line':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_37__.LineChart, {
          data: data
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_32__.CartesianGrid, {
          strokeDasharray: "3 3",
          stroke: "#444"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_35__.XAxis, {
          dataKey: xKey,
          stroke: "#d4af37"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_36__.YAxis, {
          stroke: "#d4af37"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_28__.Tooltip, {
          contentStyle: {
            backgroundColor: '#1c1917',
            borderColor: '#d4af37',
            color: '#fff'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_27__.Legend, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_33__.Line, {
          type: "monotone",
          dataKey: yKey,
          stroke: "#d4af37",
          strokeWidth: 3,
          dot: {
            r: 6
          },
          activeDot: {
            r: 8
          }
        }));
      case 'pie':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_39__.PieChart, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_31__.Pie, {
          data: data,
          cx: "50%",
          cy: "50%",
          labelLine: false,
          label: function label(_ref2) {
            var name = _ref2.name,
              percent = _ref2.percent;
            return "".concat(name, " ").concat((percent * 100).toFixed(0), "%");
          },
          outerRadius: 80,
          fill: "#8884d8",
          dataKey: yKey,
          nameKey: xKey
        }, data.map(function (entry, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_30__.Cell, {
            key: "cell-".concat(index),
            fill: COLORS[index % COLORS.length]
          });
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_28__.Tooltip, {
          contentStyle: {
            backgroundColor: '#1c1917',
            borderColor: '#d4af37',
            color: '#fff'
          }
        }));
      case 'bar':
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_38__.BarChart, {
          data: data
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_32__.CartesianGrid, {
          strokeDasharray: "3 3",
          stroke: "#444"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_35__.XAxis, {
          dataKey: xKey,
          stroke: "#d4af37"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_36__.YAxis, {
          stroke: "#d4af37"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_28__.Tooltip, {
          cursor: {
            fill: '#333'
          },
          contentStyle: {
            backgroundColor: '#1c1917',
            borderColor: '#d4af37',
            color: '#fff'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_27__.Legend, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_34__.Bar, {
          dataKey: yKey,
          fill: "#d4af37",
          radius: [4, 4, 0, 0]
        }));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "h-64 w-full mt-4 bg-black/40 p-4 border border-stone-800 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_29__.ResponsiveContainer, {
    width: "100%",
    height: "100%"
  }, renderChart()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CsvChart);

/***/ },

/***/ "./assets/components/DataProviderSpace.jsx"
/*!*************************************************!*\
  !*** ./assets/components/DataProviderSpace.jsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_44__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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


var DataProviderSpace = function DataProviderSpace(_ref) {
  var datasets = _ref.datasets;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_43__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    file = _useState2[0],
    setFile = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_43__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    preview = _useState4[0],
    setPreview = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_43__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    headers = _useState6[0],
    setHeaders = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_43__.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    columnMapping = _useState8[0],
    setColumnMapping = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_43__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    datasetName = _useState0[0],
    setDatasetName = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_43__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isUploading = _useState10[0],
    setIsUploading = _useState10[1];
  var handleFileChange = function handleFileChange(e) {
    var selectedFile = e.target.files[0];
    if (!selectedFile) return;
    setFile(selectedFile);
    setDatasetName(selectedFile.name.replace('.csv', ''));
    papaparse__WEBPACK_IMPORTED_MODULE_44___default().parse(selectedFile, {
      header: true,
      skipEmptyLines: true,
      preview: 5,
      complete: function complete(results) {
        if (results.data.length > 0) {
          var cols = Object.keys(results.data[0]);
          setHeaders(cols);
          setPreview(results.data);
          var initialMapping = {};
          cols.forEach(function (h) {
            return initialMapping[h] = 'categorical';
          });
          setColumnMapping(initialMapping);
        }
      }
    });
  };
  var toggleType = function toggleType(header) {
    setColumnMapping(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, header, prev[header] === 'categorical' ? 'numerical' : 'categorical'));
    });
  };
  var handleUpload = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var token, payload, response, errorData, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setIsUploading(true);
            token = localStorage.getItem('token'); // Préparation du payload conforme à API Platform
            payload = {
              name: datasetName,
              source: file.name,
              metadata: {
                columns: columnMapping,
                uploadedAt: new Date().toISOString(),
                rowCount: preview.length // Information utile pour ton affichage
              }
            };
            _context.p = 1;
            _context.n = 2;
            return fetch('/api/datasets', {
              method: 'POST',
              headers: {
                'Authorization': "Bearer ".concat(token),
                // Changement crucial ici pour éviter l'erreur 415
                'Content-Type': 'application/ld+json',
                'Accept': 'application/ld+json'
              },
              body: JSON.stringify(payload)
            });
          case 2:
            response = _context.v;
            if (!response.ok) {
              _context.n = 3;
              break;
            }
            alert("Parchemin de données enregistré dans la bibliothèque d'Odin !");
            window.location.reload();
            _context.n = 5;
            break;
          case 3:
            _context.n = 4;
            return response.json();
          case 4:
            errorData = _context.v;
            console.error("Réponse du serveur :", errorData);
            alert("Erreur : Le Scribe refuse le format du fichier.");
          case 5:
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            console.error("Erreur réseau", _t);
          case 7:
            _context.p = 7;
            setIsUploading(false);
            return _context.f(7);
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[1, 6, 7, 8]]);
    }));
    return function handleUpload() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
    className: "space-y-6 animate-fadeIn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
    className: "bg-black/40 p-6 border border-viking-gold/30 rounded-lg shadow-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("h3", {
    className: "text-viking-gold font-dragon text-xl mb-4 uppercase tracking-widest"
  }, "Nouvelle Archive de Donn\xE9es"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
    className: "flex flex-col md:flex-row gap-6 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("label", {
    className: "block text-stone-500 text-[10px] uppercase font-black mb-2"
  }, "Fichier CSV uniquement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("input", {
    type: "file",
    accept: ".csv",
    onChange: handleFileChange,
    className: "block w-full text-sm text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-black file:uppercase file:bg-viking-gold file:text-black hover:file:bg-white transition-all cursor-pointer"
  })), file && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
    className: "w-full md:w-auto pt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("button", {
    onClick: handleUpload,
    disabled: isUploading,
    className: "w-full bg-viking-fire text-white py-3 px-8 font-black uppercase text-xs shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
  }, isUploading ? 'Gravure...' : 'Sceller l\'Archive')))), preview.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
    className: "bg-stone-900/80 border border-viking-gold/10 rounded overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
    className: "bg-black/40 p-3 border-b border-white/5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("span", {
    className: "text-[10px] font-black uppercase text-viking-gold/50"
  }, "Analyse de la structure")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("table", {
    className: "w-full text-left border-collapse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("tr", {
    className: "bg-black/60"
  }, headers.map(function (h) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("th", {
      key: h,
      className: "p-4 border-r border-white/5 min-w-[150px]"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
      className: "text-viking-parchment text-xs font-bold mb-3 truncate"
    }, h), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("button", {
      onClick: function onClick() {
        return toggleType(h);
      },
      className: "text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-tighter transition-colors ".concat(columnMapping[h] === 'numerical' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30')
    }, columnMapping[h] === 'numerical' ? '🔢 Numérique' : '🔤 Catégoriel'));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("tbody", null, preview.map(function (row, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("tr", {
      key: i,
      className: "border-t border-white/5 hover:bg-white/5 transition-colors"
    }, headers.map(function (h) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("td", {
        key: h,
        className: "p-4 text-[11px] text-stone-400 border-r border-white/5 italic"
      }, row[h]);
    }));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
    className: "mt-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("h3", {
    className: "text-viking-gold/40 font-dragon text-sm mb-6 uppercase tracking-widest border-b border-viking-gold/20 pb-2"
  }, "Registres d\xE9j\xE0 pr\xE9sents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
  }, (datasets === null || datasets === void 0 ? void 0 : datasets.length) > 0 ? datasets.map(function (ds) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
      key: ds.id,
      className: "p-4 bg-black/20 border border-stone-800 hover:border-viking-gold/40 transition-all group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
      className: "text-viking-parchment font-bold text-sm group-hover:text-viking-gold transition-colors"
    }, ds.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
      className: "flex justify-between items-center mt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("span", {
      className: "text-[9px] text-stone-600 uppercase font-bold italic"
    }, ds.source), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("span", {
      className: "text-[9px] bg-stone-800 px-2 py-0.5 rounded text-stone-400"
    }, ds.rowsCount, " lignes")));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
    className: "col-span-full py-10 text-center border-2 border-dashed border-stone-800 text-stone-600 text-xs uppercase font-black"
  }, "Aucune donn\xE9e n'a \xE9t\xE9 grav\xE9e pour le moment."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataProviderSpace);

/***/ },

/***/ "./assets/components/Navbar.jsx"
/*!**************************************!*\
  !*** ./assets/components/Navbar.jsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/esm/index.js");





var Navbar = function Navbar() {
  var _user, _user2, _user3;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var token = localStorage.getItem('token');
  var user = null;

  // On décode le token pour connaître l'utilisateur et ses rôles
  if (token) {
    try {
      user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__.jwtDecode)(token);
    } catch (e) {
      console.error("Token invalide");
    }
  }
  var handleLogout = function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Vérification des droits pour le Dashboard
  var canSeeDashboard = ((_user = user) === null || _user === void 0 || (_user = _user.roles) === null || _user === void 0 ? void 0 : _user.includes('ROLE_EDITEUR')) || ((_user2 = user) === null || _user2 === void 0 || (_user2 = _user2.roles) === null || _user2 === void 0 ? void 0 : _user2.includes('ROLE_ADMIN'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("nav", {
    className: "bg-viking-rock border-b-2 border-viking-gold/50 p-4 sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-95"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "container mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/",
    className: "text-3xl font-dragon text-viking-gold hover:text-white transition flex items-center gap-2 drop-shadow-md group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "text-4xl group-hover:scale-110 transition-transform uppercase"
  }, "Riders of Berk")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "flex items-center gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", {
    className: "flex space-x-6 text-lg font-dragon tracking-wide text-viking-light uppercase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/",
    className: "hover:text-viking-gold transition-all duration-300"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/forum",
    className: "hover:text-viking-gold transition-all duration-300"
  }, "Forum")), canSeeDashboard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/admin",
    className: "text-viking-gold border border-viking-gold/50 px-2 py-0.5 hover:bg-viking-gold hover:text-black transition-all duration-300"
  }, "Conseil"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "flex items-center gap-4 border-l border-stone-700 pl-6"
  }, !token ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/login",
    className: "text-sm font-black uppercase tracking-tighter hover:text-viking-gold transition"
  }, "Connexion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/register",
    className: "bg-viking-gold text-black px-4 py-1.5 text-xs font-black uppercase tracking-widest hover:bg-yellow-500 transition shadow-lg"
  }, "Rejoindre")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "text-[10px] text-stone-500 uppercase font-black italic"
  }, ((_user3 = user) === null || _user3 === void 0 ? void 0 : _user3.pseudo) || "Guerrier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleLogout,
    className: "text-[10px] text-viking-fire uppercase font-black border border-viking-fire/30 px-2 py-1 hover:bg-viking-fire hover:text-white transition"
  }, "Quitter"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ },

/***/ "./assets/components/NightFury.jsx"
/*!*****************************************!*\
  !*** ./assets/components/NightFury.jsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/index-8afac004.esm.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/web/Html.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/useGLTF.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/useTexture.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/useAnimations.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/Center.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/Stars.js");




















var _excluded = ["vitesseRotation", "vitesseAnimation", "facteurTaille"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }



var MODEL_PATH = '/models/night_fury.glb';
var TEXTURE_PATH = '/textures/night_fury_skin.webp';
var ANIMATION_NAME = 'NightFury_armatureAction';
function DragonModel(_ref) {
  var vitesseRotation = _ref.vitesseRotation,
    vitesseAnimation = _ref.vitesseAnimation,
    facteurTaille = _ref.facteurTaille,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useGLTF = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_30__.useGLTF)(MODEL_PATH),
    scene = _useGLTF.scene,
    animations = _useGLTF.animations;
  var texture = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_31__.useTexture)(TEXTURE_PATH);
  var _useThree = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_28__.A)(),
    viewport = _useThree.viewport;

  // Calcul de base responsive
  var baseScale = viewport.width < 5 ? 0.5 : 0.8;
  // 📏 CALCUL FINAL : Taille de base x Le curseur de l'utilisateur
  var finalScale = baseScale * facteurTaille;
  texture.flipY = false;
  texture.colorSpace = 'srgb';
  var group = (0,react__WEBPACK_IMPORTED_MODULE_26__.useRef)();
  var _useAnimations = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_32__.useAnimations)(animations, group),
    actions = _useAnimations.actions;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPlaying = _useState2[0],
    setIsPlaying = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(function () {
    scene.traverse(function (child) {
      if (child.isMesh) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);
  (0,react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(function () {
    if (actions && actions[ANIMATION_NAME]) {
      var action = actions[ANIMATION_NAME];
      action.reset().fadeIn(0.5).play();
      setIsPlaying(true);
    }
  }, [actions]);

  // Mise à jour vitesse animation
  (0,react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(function () {
    if (actions && actions[ANIMATION_NAME]) {
      actions[ANIMATION_NAME].timeScale = vitesseAnimation;
    }
  }, [vitesseAnimation, actions]);
  var toggleAnimation = function toggleAnimation(e) {
    e.stopPropagation();
    var action = actions[ANIMATION_NAME];
    if (!action) return;
    if (isPlaying) {
      action.paused = true;
    } else {
      action.paused = false;
      action.play();
    }
    setIsPlaying(!isPlaying);
  };
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_28__.C)(function () {
    if (group.current) group.current.rotation.y += vitesseRotation;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("primitive", _extends({
    ref: group,
    object: scene,
    onClick: toggleAnimation,
    onPointerOver: function onPointerOver() {
      return document.body.style.cursor = 'pointer';
    },
    onPointerOut: function onPointerOut() {
      return document.body.style.cursor = 'auto';
    },
    scale: finalScale // 👈 On applique la taille dynamique ici
    ,

    position: [0, 0.5, 0]
  }, props));
}
var NightFuryScene = function NightFuryScene() {
  // 🎛️ ÉTATS DU TABLEAU DE BORD
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(0.001),
    _useState4 = _slicedToArray(_useState3, 2),
    rotSpeed = _useState4[0],
    setRotSpeed = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(2.5),
    _useState6 = _slicedToArray(_useState5, 2),
    animSpeed = _useState6[0],
    setAnimSpeed = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    sizeFactor = _useState8[0],
    setSizeFactor = _useState8[1]; // 1 = taille normale (100%)

  // Fonction pour tout remettre à zéro
  var handleReset = function handleReset() {
    setRotSpeed(0.001);
    setAnimSpeed(2.5);
    setSizeFactor(1);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "h-full w-full relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_27__.Canvas, {
    shadows: true,
    camera: {
      position: [0, 2, 10],
      fov: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("color", {
    attach: "background",
    args: ['#050510']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_34__.Stars, {
    radius: 100,
    depth: 50,
    count: 5000,
    factor: 4,
    saturation: 0,
    fade: true,
    speed: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("ambientLight", {
    intensity: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("directionalLight", {
    position: [10, 10, 5],
    intensity: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("spotLight", {
    position: [-5, 5, 10],
    intensity: 5,
    color: "#a855f7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("spotLight", {
    position: [0, 5, -10],
    intensity: 5,
    color: "#ffffff"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(react__WEBPACK_IMPORTED_MODULE_26__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_29__.Html, {
      center: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
      className: "text-white"
    }, "Invocation..."))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_33__.Center, {
    top: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(DragonModel, {
    vitesseRotation: rotSpeed,
    vitesseAnimation: animSpeed,
    facteurTaille: sizeFactor // 👈 On envoie la taille
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "absolute top-4 right-4 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-blue-500/30 text-white w-64 shadow-2xl transition-all hover:bg-black/80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("h3", {
    className: "text-blue-300 font-bold mb-4 text-center border-b border-white/10 pb-2"
  }, "CONTR\xD4LES DU DRAGON"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "flex justify-between text-xs mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", null, "Taille"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
    className: "text-green-400"
  }, "x", sizeFactor.toFixed(1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
    type: "range",
    min: "0.1",
    max: "3",
    step: "0.1",
    value: sizeFactor,
    onChange: function onChange(e) {
      return setSizeFactor(parseFloat(e.target.value));
    },
    className: "w-full accent-green-500 cursor-pointer h-2 bg-gray-700 rounded-lg appearance-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "flex justify-between text-xs mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", null, "Rotation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
    className: "text-blue-400"
  }, rotSpeed.toFixed(3))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
    type: "range",
    min: "0",
    max: "0.05",
    step: "0.001",
    value: rotSpeed,
    onChange: function onChange(e) {
      return setRotSpeed(parseFloat(e.target.value));
    },
    className: "w-full accent-blue-500 cursor-pointer h-2 bg-gray-700 rounded-lg appearance-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "flex justify-between text-xs mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", null, "Animation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
    className: "text-purple-400"
  }, "x", animSpeed.toFixed(1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
    type: "range",
    min: "0",
    max: "5",
    step: "0.1",
    value: animSpeed,
    onChange: function onChange(e) {
      return setAnimSpeed(parseFloat(e.target.value));
    },
    className: "w-full accent-purple-500 cursor-pointer h-2 bg-gray-700 rounded-lg appearance-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    onClick: handleReset,
    className: "w-full mt-4 bg-white/10 hover:bg-red-500/50 py-1 rounded text-xs transition-colors border border-white/10"
  }, "R\xE9initialiser")));
};
_react_three_drei__WEBPACK_IMPORTED_MODULE_30__.useGLTF.preload(MODEL_PATH);
_react_three_drei__WEBPACK_IMPORTED_MODULE_31__.useTexture.preload(TEXTURE_PATH);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NightFuryScene);

/***/ },

/***/ "./assets/pages/AdminDashboard.jsx"
/*!*****************************************!*\
  !*** ./assets/pages/AdminDashboard.jsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/esm/index.js");
/* harmony import */ var _components_DataProviderSpace__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../components/DataProviderSpace */ "./assets/components/DataProviderSpace.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










































function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


 // On l'importera juste après

var AdminDashboard = function AdminDashboard() {
  var _currentUser, _data$allUsers, _data$managementArtic;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    searchTerm = _useState6[0],
    setSearchTerm = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)('stats'),
    _useState8 = _slicedToArray(_useState7, 2),
    activeTab = _useState8[0],
    setActiveTab = _useState8[1]; // Système d'onglets

  var token = localStorage.getItem('token');
  var currentUser = null;
  try {
    currentUser = token ? (0,jwt_decode__WEBPACK_IMPORTED_MODULE_43__.jwtDecode)(token) : null;
  } catch (e) {
    console.error("Erreur de décodage du token");
  }

  // Définition des accès selon les rôles
  var roles = ((_currentUser = currentUser) === null || _currentUser === void 0 ? void 0 : _currentUser.roles) || [];
  var isFullAdmin = roles.includes('ROLE_ADMIN');
  var isProvider = roles.includes('ROLE_FOURNISSEUR') || isFullAdmin;
  var isDesigner = roles.includes('ROLE_DESIGNER') || isFullAdmin;
  var isEditor = roles.includes('ROLE_EDITEUR') || isFullAdmin;
  var loadStats = function loadStats() {
    fetch('/api/admin/stats', {
      headers: {
        'Authorization': "Bearer ".concat(token),
        'Accept': 'application/json'
      }
    }).then(function (res) {
      if (!res.ok) throw new Error("Accès refusé par le Grand Conseil");
      return res.json();
    }).then(function (json) {
      return setData(json);
    })["catch"](function (err) {
      return setError(err.message);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_42__.useEffect)(function () {
    loadStats();
  }, []);
  var handlePromote = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(userId) {
      var response, updatedData, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return fetch("/api/admin/user/".concat(userId, "/promote"), {
              method: 'PATCH',
              headers: {
                'Authorization': "Bearer ".concat(token)
              }
            });
          case 1:
            response = _context.v;
            if (!response.ok) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return response.json();
          case 2:
            updatedData = _context.v;
            setData(_objectSpread(_objectSpread({}, data), {}, {
              allUsers: data.allUsers.map(function (u) {
                return u.id === userId ? _objectSpread(_objectSpread({}, u), {}, {
                  roles: updatedData.newRoles
                }) : u;
              })
            }));
          case 3:
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            alert("Erreur lors du changement de rang");
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[0, 4]]);
    }));
    return function handlePromote(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "text-viking-fire p-10 text-center font-dragon"
  }, error);
  if (!data) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "text-viking-gold p-10 font-dragon animate-pulse text-center"
  }, "Appel au Grand Conseil...");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "max-w-6xl mx-auto p-6 text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("h1", {
    className: "text-5xl font-dragon text-viking-parchment mb-10 border-b border-viking-gold/30 pb-4 uppercase"
  }, "Palais d'Administration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "flex flex-wrap gap-2 mb-8 border-b border-stone-800 pb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    onClick: function onClick() {
      return setActiveTab('stats');
    },
    className: "px-4 py-2 text-xs font-black uppercase transition ".concat(activeTab === 'stats' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500')
  }, "Vue d'ensemble"), isFullAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    onClick: function onClick() {
      return setActiveTab('users');
    },
    className: "px-4 py-2 text-xs font-black uppercase transition ".concat(activeTab === 'users' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500')
  }, "Population"), isEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    onClick: function onClick() {
      return setActiveTab('articles');
    },
    className: "px-4 py-2 text-xs font-black uppercase transition ".concat(activeTab === 'articles' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500')
  }, "Chroniques"), isProvider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    onClick: function onClick() {
      return setActiveTab('data');
    },
    className: "px-4 py-2 text-xs font-black uppercase transition ".concat(activeTab === 'data' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500')
  }, "Donn\xE9es (CSV)"), isDesigner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    onClick: function onClick() {
      return setActiveTab('design');
    },
    className: "px-4 py-2 text-xs font-black uppercase transition ".concat(activeTab === 'design' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500')
  }, "Apparence")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "min-h-[400px]"
  }, activeTab === 'stats' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "bg-stone-900 border-l-4 border-viking-gold p-6 shadow-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("h2", {
    className: "text-stone-500 uppercase text-xs font-black"
  }, "Habitants"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
    className: "text-4xl font-dragon mt-2 text-white"
  }, data.usersCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "bg-stone-900 border-l-4 border-viking-fire p-6 shadow-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("h2", {
    className: "text-stone-500 uppercase text-xs font-black"
  }, "Articles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
    className: "text-4xl font-dragon mt-2 text-white"
  }, data.articlesCount))), activeTab === 'users' && isFullAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "space-y-4 animate-fadeIn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("input", {
    type: "text",
    placeholder: "Chercher un guerrier...",
    className: "bg-black/40 border border-viking-gold/20 p-2 rounded text-sm w-full outline-none",
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    }
  }), (_data$allUsers = data.allUsers) === null || _data$allUsers === void 0 ? void 0 : _data$allUsers.filter(function (u) {
    return u.pseudo.toLowerCase().includes(searchTerm.toLowerCase());
  }).map(function (u) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      key: u.id,
      className: "flex justify-between items-center p-3 bg-stone-900/50 border border-stone-800"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
      className: "font-bold text-viking-parchment"
    }, u.pseudo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
      className: "text-[10px] text-stone-500"
    }, u.roles.join(' | '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      onClick: function onClick() {
        return handlePromote(u.id);
      },
      className: "text-[10px] border border-viking-gold/40 px-3 py-1 hover:bg-viking-gold hover:text-black transition uppercase font-black"
    }, "Changer Rang"));
  })), activeTab === 'articles' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "grid gap-2 animate-fadeIn"
  }, (_data$managementArtic = data.managementArticles) === null || _data$managementArtic === void 0 ? void 0 : _data$managementArtic.map(function (art) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      key: art.id,
      className: "p-4 bg-stone-900 border border-stone-800 flex justify-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("span", null, art.title, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("small", {
      className: "text-stone-500 ml-2"
    }, "par ", art.author)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("span", {
      className: "text-stone-600 text-xs"
    }, art.createdAt));
  })), activeTab === 'data' && isProvider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_components_DataProviderSpace__WEBPACK_IMPORTED_MODULE_44__["default"], {
    datasets: data.datasets
  }), activeTab === 'design' && isDesigner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "p-10 text-center border-2 border-dashed border-stone-800 text-stone-600 uppercase font-black text-sm"
  }, "Forge de Design (En construction)")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminDashboard);

/***/ },

/***/ "./assets/pages/ArticlePage.jsx"
/*!**************************************!*\
  !*** ./assets/pages/ArticlePage.jsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");



















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var ArticlePage = function ArticlePage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useParams)(),
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
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "text-center text-viking-gold font-dragon text-2xl py-20 animate-pulse"
  }, "Recherche dans les archives...");
  if (!article) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "text-center text-viking-fire text-xl py-10"
  }, "Article introuvable dans les archives.");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "max-w-4xl mx-auto animate-fade-in"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
    to: "/forum",
    className: "text-viking-light hover:text-white mb-6 inline-flex items-center gap-2 transition"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", null, "\u2190"), " Retour au forum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "bg-viking-rock p-8 rounded-lg border-2 border-stone-600 shadow-2xl relative overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "absolute top-0 right-0 w-20 h-20 bg-viking-gold opacity-10 rounded-bl-full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("h1", {
    className: "text-4xl md:text-5xl font-dragon text-viking-gold mb-4 leading-tight"
  }, article.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "flex items-center gap-3 text-sm text-stone-500 mb-8 border-b border-stone-700 pb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", {
    className: "bg-viking-red px-2 py-1 rounded text-white font-bold border border-viking-gold/50"
  }, "Archive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", null, "Cr\xE9\xE9 le ", new Date(article.createdAt).toLocaleDateString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "text-viking-parchment text-lg leading-relaxed font-serif whitespace-pre-line"
  }, article.summary)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlePage);

/***/ },

/***/ "./assets/pages/ForumPage.jsx"
/*!************************************!*\
  !*** ./assets/pages/ForumPage.jsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/esm/index.js");
/* harmony import */ var _components_ArticleForm__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../components/ArticleForm */ "./assets/components/ArticleForm.jsx");
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




var ForumPage = function ForumPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    articles = _useState2[0],
    setArticles = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    user = _useState6[0],
    setUser = _useState6[1];

  // Gestion de la navigation interne
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)('list'),
    _useState8 = _slicedToArray(_useState7, 2),
    view = _useState8[0],
    setView = _useState8[1]; // 'list', 'create', 'edit'
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedId = _useState0[0],
    setSelectedId = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_31__.useEffect)(function () {
    // 1. Récupération et décodage du Token
    var token = localStorage.getItem('token');
    if (token) {
      try {
        var decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_33__.jwtDecode)(token);
        console.log("Guerrier connecté :", decoded);
        setUser(decoded);
      } catch (e) {
        console.error("Badge (Token) invalide ou expiré");
      }
    }
    // 2. Chargement des chroniques
    fetchArticles();
  }, []);
  var fetchArticles = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var res, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return fetch('/api/articles', {
              headers: {
                'Accept': 'application/ld+json'
              }
            });
          case 2:
            res = _context.v;
            _context.n = 3;
            return res.json();
          case 3:
            data = _context.v;
            setArticles(data['hydra:member'] || data['member'] || []);
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error("Erreur de liaison avec le Grand Conseil", _t);
          case 5:
            _context.p = 5;
            setLoading(false);
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1, 4, 5, 6]]);
    }));
    return function fetchArticles() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id) {
      var res, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (window.confirm("Voulez-vous vraiment effacer ce récit de la pierre ?")) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return fetch("/api/articles/".concat(id), {
              method: 'DELETE',
              headers: {
                'Authorization': "Bearer ".concat(localStorage.getItem('token'))
              }
            });
          case 2:
            res = _context2.v;
            if (res.ok) {
              // Suppression locale immédiate pour l'interface
              setArticles(articles.filter(function (a) {
                var aId = (a.id || a['@id']).toString().split('/').pop();
                return aId !== id.toString();
              }));
            } else {
              alert("Les dragons protègent ce parchemin (Erreur de permissions).");
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            alert("Le serveur est injoignable.");
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function handleDelete(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSuccess = function handleSuccess() {
    setView('list');
    setSelectedId(null);
    fetchArticles();
  };

  // --- LOGIQUE DES RÔLES ---
  var hasRole = function hasRole(role) {
    var _user$roles;
    return user === null || user === void 0 || (_user$roles = user.roles) === null || _user$roles === void 0 ? void 0 : _user$roles.includes(role);
  };

  // Autorise la création pour Admin, Auteur ET Éditeur
  var canCreate = hasRole('ROLE_ADMIN') || hasRole('ROLE_AUTEUR') || hasRole('ROLE_EDITEUR');
  if (loading && view === 'list') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
      className: "flex flex-col items-center justify-center py-40"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
      className: "w-12 h-12 border-4 border-viking-gold border-t-transparent rounded-full animate-spin mb-4"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
      className: "text-viking-gold font-dragon text-xl animate-pulse uppercase"
    }, "Ouverture des parchemins..."));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "max-w-6xl mx-auto px-4 pb-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "flex justify-between items-end mb-12 border-b border-viking-gold/20 pb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("h1", {
    className: "text-6xl font-dragon text-viking-parchment uppercase tracking-tighter"
  }, "Chroniques"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    className: "text-stone-500 italic text-sm mt-2"
  }, "Le savoir du village de Berk, grav\xE9 pour l'\xE9ternit\xE9.")), view === 'list' && canCreate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
    onClick: function onClick() {
      return setView('create');
    },
    className: "bg-viking-gold text-black px-8 py-3 font-black hover:bg-yellow-500 transition shadow-[0_0_20px_rgba(212,175,55,0.2)] uppercase text-xs tracking-widest"
  }, "+ Graver un r\xE9cit")), view === 'create' || view === 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "animate-in fade-in slide-in-from-bottom-4 duration-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
    onClick: function onClick() {
      setView('list');
      setSelectedId(null);
    },
    className: "mb-8 text-stone-500 hover:text-viking-gold flex items-center gap-2 transition uppercase text-[10px] font-bold tracking-widest"
  }, "\u2190 Retour au mur des l\xE9gendes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_components_ArticleForm__WEBPACK_IMPORTED_MODULE_34__["default"], {
    id: selectedId,
    onSuccess: handleSuccess
  })) :
  /*#__PURE__*/
  /* --- VUE LISTE DES ARTICLES --- */
  react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "grid gap-6"
  }, articles.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    className: "text-center py-20 text-stone-600 italic"
  }, "Le silence r\xE8gne sur le mur... Aucune chronique n'a \xE9t\xE9 trouv\xE9e.") : articles.map(function (article) {
    var _article$author, _article$author2, _article$author3;
    var cleanId = (article.id || article['@id']).toString().split('/').pop();

    // Vérification de propriété (L'auteur du post OU un rôle de modération)
    var isOwner = (user === null || user === void 0 ? void 0 : user.id) === ((_article$author = article.author) === null || _article$author === void 0 ? void 0 : _article$author.id) || hasRole('ROLE_ADMIN') || hasRole('ROLE_EDITEUR');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("article", {
      key: cleanId,
      className: "group bg-stone-900/40 border-l-4 border-stone-800 hover:border-viking-gold transition-all duration-300 p-8 relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
      className: "flex justify-between items-start mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("h2", {
      className: "text-3xl font-dragon text-viking-gold group-hover:text-white transition-colors uppercase"
    }, article.title), isOwner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
      className: "flex gap-2 opacity-40 group-hover:opacity-100 transition-opacity"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
      onClick: function onClick() {
        setSelectedId(cleanId);
        setView('edit');
      },
      className: "text-[9px] uppercase font-black bg-stone-800 text-stone-400 px-3 py-1 border border-stone-700 hover:text-white hover:border-viking-gold transition"
    }, "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
      onClick: function onClick() {
        return handleDelete(cleanId);
      },
      className: "text-[9px] uppercase font-black bg-red-900/10 text-red-500/70 px-3 py-1 border border-red-900/30 hover:bg-red-900 hover:text-white transition"
    }, "Supprimer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
      className: "text-stone-400 font-serif italic text-lg leading-relaxed mb-8 max-w-3xl"
    }, "\"", article.summary, "\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
      className: "flex justify-between items-center pt-6 border-t border-stone-800/50"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
      className: "w-6 h-[1px] bg-viking-gold/40"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("span", {
      className: "text-[10px] text-stone-500 uppercase tracking-widest font-black"
    }, "Par ", ((_article$author2 = article.author) === null || _article$author2 === void 0 ? void 0 : _article$author2.pseudo) || ((_article$author3 = article.author) === null || _article$author3 === void 0 ? void 0 : _article$author3.username) || "Guerrier de l'ombre")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Link, {
      to: "/forum/article/".concat(cleanId),
      className: "text-viking-fire font-black text-[10px] uppercase tracking-widest hover:text-viking-gold transition-colors flex items-center gap-2"
    }, "Consulter le parchemin ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("span", {
      className: "text-lg"
    }, "\u2192"))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForumPage);

/***/ },

/***/ "./assets/pages/HomePage.jsx"
/*!***********************************!*\
  !*** ./assets/pages/HomePage.jsx ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_NightFury__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NightFury */ "./assets/components/NightFury.jsx");



var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center py-16 animate-fade-in-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-6xl md:text-8xl font-dragon text-transparent bg-clip-text bg-gradient-to-r from-viking-gold via-yellow-500 to-viking-gold mb-8 drop-shadow-sm"
  }, "Bienvenue dans l'Antre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-24 h-1 bg-viking-red mx-auto mb-8 rounded-full shadow-[0_0_10px_#dc2626]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-2xl text-viking-light mb-12 max-w-3xl mx-auto font-serif italic leading-relaxed"
  }, "\"\xC7a, c'est Beurk. \xC0 douze jours au nord du D\xE9sespoir, et quelques degr\xE9s au sud d'un Froid-de-canard. Ancr\xE9 solidement sur le M\xE9ridien de la Mis\xE8re. Mon village... En un mot, balaise. Et sept g\xE9n\xE9rations y ont d\xE9j\xE0 vu le jour, pourtant, toutes les maisons sont neuves. Beurk : sa p\xEAche, sa chasse, et ses merveilleux couchers de soleil. La seule fausse note c'est les bestioles. Ailleurs, les gens ont des souris ou des moustiques. Nous on a des... dragons.\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-stone-800 rounded-2xl border-4 border-stone-700 shadow-2xl overflow-hidden mb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-[600px] w-full relative bg-black rounded-xl overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NightFury__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute bottom-4 left-0 w-full text-center text-sm text-gray-400 pointer-events-none z-10"
  }, "Cliquez sur le dragon"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col md:flex-row justify-center gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/forum",
    className: "group relative px-8 py-4 bg-viking-red hover:bg-red-900 border-2 border-viking-gold text-white font-dragon text-xl rounded-lg overflow-hidden transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative z-10"
  }, "Acc\xE9der au Forum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/statistique",
    className: "px-8 py-4 bg-viking-rock hover:bg-stone-700 border-2 border-stone-500 text-viking-light hover:text-white font-dragon text-xl rounded-lg transition-all shadow-lg"
  }, "Voir les Stats")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ },

/***/ "./assets/pages/LoginPage.jsx"
/*!************************************!*\
  !*** ./assets/pages/LoginPage.jsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
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


var LoginPage = function LoginPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useNavigate)();
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
            return fetch('/api/login_check', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email,
                // Envoi de la clé "email" attendue par Symfony
                password: password
              })
            });
          case 2:
            response = _context.v;
            _context.n = 3;
            return response.json();
          case 3:
            data = _context.v;
            if (response.ok && data.token) {
              // Stockage du token JWT
              localStorage.setItem('token', data.token);
              // Redirection vers le forum
              window.location.href = '/forum';
            } else {
              setError('Identifiants incorrects. Les dragons ne vous reconnaissent pas.');
            }
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            setError('Erreur de connexion au serveur.');
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 4]]);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "max-w-md mx-auto bg-viking-rock p-10 border-2 border-viking-gold shadow-2xl mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("h2", {
    className: "text-3xl font-dragon text-viking-gold mb-8 text-center uppercase"
  }, "Connexion"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("p", {
    className: "text-viking-red text-sm mb-4 italic text-center font-bold"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("label", {
    className: "block text-xs font-black uppercase tracking-widest mb-2 text-viking-parchment"
  }, "Email du Guerrier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
    type: "email",
    className: "w-full bg-black/50 border border-stone-700 p-3 text-white focus:border-viking-gold outline-none transition-all",
    placeholder: "exemple@berk.fr",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("label", {
    className: "block text-xs font-black uppercase tracking-widest mb-2 text-viking-parchment"
  }, "Mot de passe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
    type: "password",
    className: "w-full bg-black/50 border border-stone-700 p-3 text-white focus:border-viking-gold outline-none transition-all",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    type: "submit",
    className: "w-full bg-viking-gold text-black font-black py-4 uppercase hover:bg-yellow-500 transition shadow-lg active:scale-95"
  }, "Prendre son envol")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

/***/ },

/***/ "./assets/pages/RegisterPage.jsx"
/*!***************************************!*\
  !*** ./assets/pages/RegisterPage.jsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "max-w-md mx-auto bg-viking-rock/90 p-8 rounded-lg border-2 border-viking-gold shadow-2xl backdrop-blur-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("h2", {
    className: "text-3xl font-dragon text-viking-gold mb-8 text-center uppercase tracking-widest"
  }, "Rejoindre la Guilde"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "bg-red-900/40 border border-red-500 text-red-200 p-3 rounded mb-6 text-sm"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("label", {
    className: "block text-viking-light text-sm font-bold mb-2"
  }, "Nom de code (Pseudo)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("input", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("label", {
    className: "block text-viking-light text-sm font-bold mb-2"
  }, "Email de contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("input", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("label", {
    className: "block text-viking-light text-sm font-bold mb-2"
  }, "Rang au sein de la Guilde"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("select", {
    className: "w-full bg-black/50 border border-viking-gold/30 p-3 rounded text-viking-parchment focus:border-viking-gold outline-none cursor-pointer",
    value: formData.role,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        role: e.target.value
      }));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("option", {
    value: "ROLE_USER"
  }, "Abonn\xE9 (Lecteur)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("option", {
    value: "ROLE_AUTEUR"
  }, "Auteur (Narrateur)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("option", {
    value: "ROLE_EDITEUR"
  }, "\xC9diteur (Gardien)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("option", {
    value: "ROLE_DESIGNER"
  }, "Designeur (Artisan)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("option", {
    value: "ROLE_FOURNISSEUR"
  }, "Fournisseur de donn\xE9es (Scribe)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("option", {
    value: "ROLE_ADMIN"
  }, "Administrateur (Chef de la Guilde)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("label", {
    className: "block text-viking-light text-sm font-bold mb-2"
  }, "Mot de passe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("input", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("button", {
    type: "submit",
    className: "w-full bg-viking-gold text-viking-dark font-extrabold py-4 rounded hover:bg-yellow-500 transition duration-300 shadow-lg uppercase tracking-wider mt-4"
  }, "Graver mon nom")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterPage);

/***/ },

/***/ "./assets/pages/StatsPage.jsx"
/*!************************************!*\
  !*** ./assets/pages/StatsPage.jsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "max-w-6xl mx-auto animate-fade-in"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "text-center mb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("h1", {
    className: "text-5xl font-dragon text-viking-gold mb-4 drop-shadow-md"
  }, "L'Observatoire de Berk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("p", {
    className: "text-viking-light text-lg italic border-b border-viking-gold/30 inline-block pb-2"
  }, "Recensement officiel de l'archipel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "bg-viking-rock p-6 rounded-lg border-2 border-stone-600 shadow-2xl relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "absolute top-0 left-0 w-full h-1 bg-viking-gold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("h3", {
    className: "text-2xl font-dragon text-white mb-6"
  }, "Tr\xE9sor de Guerre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "h-64 relative"
  }, boxOfficeData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_41__.Bar, {
    options: options,
    data: boxOfficeData
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("p", {
    className: "text-center mt-10"
  }, "Chargement..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "bg-viking-rock p-6 rounded-lg border-2 border-stone-600 shadow-2xl relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "absolute top-0 left-0 w-full h-1 bg-viking-gold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("h3", {
    className: "text-2xl font-dragon text-white mb-6"
  }, "Clans & Tribus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "h-64 relative flex justify-center"
  }, populationData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_41__.Doughnut, {
    options: _objectSpread(_objectSpread({}, options), {}, {
      scales: {}
    }),
    data: populationData
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("p", {
    className: "text-center mt-10"
  }, "Chargement..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "bg-viking-rock p-6 rounded-lg border-2 border-stone-600 shadow-2xl md:col-span-2 relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "absolute top-0 left-0 w-full h-1 bg-viking-gold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("h3", {
    className: "text-2xl font-dragon text-white mb-6"
  }, "Chronologie des D\xE9couvertes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "h-80 relative"
  }, timelineData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_41__.Line, {
    options: options,
    data: timelineData
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("p", {
    className: "text-center mt-10"
  }, "Chargement...")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatsPage);

/***/ },

/***/ "./assets/styles/app.css"
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-three_drei_core_Center_js-node_modules_react-three_drei_core_Stars-893f69"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7SUFBS2lCLFNBQVMsRUFBQztFQUFpRCxDQUFNLENBQUMsZUFDdkVqQiwyREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQXNDLEdBQUMsZ0JBQWtCLENBQUMsZUFDeEVqQiwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQW1DLEdBQzdDdWQsY0FBYyxnQkFBR3hlLDJEQUFBLENBQUNvZSxzREFBUTtJQUFDcUIsT0FBTyxFQUFBblAsYUFBQSxDQUFBQSxhQUFBLEtBQU1tUCxPQUFPO01BQUVPLE1BQU0sRUFBQyxDQUFDO0lBQUMsRUFBRTtJQUFDdFgsSUFBSSxFQUFFOFY7RUFBZSxDQUFFLENBQUMsZ0JBQUd4ZSwyREFBQTtJQUFHaUIsU0FBUyxFQUFDO0VBQW1CLEdBQUMsZUFBZ0IsQ0FDekksQ0FDSixDQUFDLGVBRU5qQiwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQTJGLGdCQUN0R2pCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBaUQsQ0FBTSxDQUFDLGVBQ3ZFakIsMkRBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUFzQyxHQUFDLGdDQUErQixDQUFDLGVBQ3JGakIsMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFlLEdBQ3pCeWQsWUFBWSxnQkFBRzFlLDJEQUFBLENBQUN3TixrREFBSTtJQUFDaVMsT0FBTyxFQUFFQSxPQUFRO0lBQUMvVyxJQUFJLEVBQUVnVztFQUFhLENBQUUsQ0FBQyxnQkFBRzFlLDJEQUFBO0lBQUdpQixTQUFTLEVBQUM7RUFBbUIsR0FBQyxlQUFnQixDQUNqSCxDQUNKLENBQ0osQ0FDSixDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlVCxTQUFTLEU7Ozs7Ozs7Ozs7O0FDekh4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm0uanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0NzdkNoYXJ0LmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9EYXRhUHJvdmlkZXJTcGFjZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9OaWdodEZ1cnkuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9BZG1pbkRhc2hib2FyZC5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0FydGljbGVQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvRm9ydW1QYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvSG9tZVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Mb2dpblBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9SZWdpc3RlclBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9TdGF0c1BhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vIEltcG9ydCBkZXMgc3R5bGVzXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBJbXBvcnQgZGVzIHBhZ2VzXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3BhZ2VzL0hvbWVQYWdlJztcclxuaW1wb3J0IEZvcnVtUGFnZSBmcm9tICcuL3BhZ2VzL0ZvcnVtUGFnZSc7XHJcbmltcG9ydCBBcnRpY2xlUGFnZSBmcm9tICcuL3BhZ2VzL0FydGljbGVQYWdlJztcclxuaW1wb3J0IFN0YXRzUGFnZSBmcm9tICcuL3BhZ2VzL1N0YXRzUGFnZSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBSZWdpc3RlclBhZ2UgZnJvbSAnLi9wYWdlcy9SZWdpc3RlclBhZ2UnO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJy4vcGFnZXMvTG9naW5QYWdlJztcclxuXHJcbi8vIE5PVVZFQVUgOiBJbXBvcnQgZGUgbGEgcGFnZSBEYXNoYm9hcmQgQWRtaW5cclxuaW1wb3J0IEFkbWluRGFzaGJvYXJkIGZyb20gJy4vcGFnZXMvQWRtaW5EYXNoYm9hcmQnO1xyXG5cclxuY29uc29sZS5sb2coXCLwn5CyIETDqW1hcnJhZ2UgZGUgbCdhcHBsaWNhdGlvbiBEcmFnb25DTVMuLi5cIik7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGZvbnQtc2FucyB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBCQU5OScOIUkUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIG1kOmgtNDggb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1iLTQgYm9yZGVyLXZpa2luZy1nb2xkIHJlbGF0aXZlIHNoYWRvdy0yeGwgYmctYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Jhbm5pZXJlLnBuZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJCYW5uacOocmUgRHJhZ29uc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi03MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS12aWtpbmctZGFyayB0by10cmFuc3BhcmVudCBvcGFjaXR5LTYwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS0xMCBweC00IGZsZXgtZ3JvdyByZWxhdGl2ZSB6LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWVQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9mb3J1bVwiIGVsZW1lbnQ9ezxGb3J1bVBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2ZvcnVtL2FydGljbGUvOmlkXCIgZWxlbWVudD17PEFydGljbGVQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zdGF0aXN0aXF1ZVwiIGVsZW1lbnQ9ezxTdGF0c1BhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlZ2lzdGVyXCIgZWxlbWVudD17PFJlZ2lzdGVyUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9naW5QYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5PVVZFTExFIFJPVVRFIDogU2FsbGUgZHUgQ29uc2VpbCAoQWRtaW4pICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZG1pblwiIGVsZW1lbnQ9ezxBZG1pbkRhc2hib2FyZCAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgYm9yZGVyLXQgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHB5LTYgbXQtMTAgdGV4dC1jZW50ZXIgdGV4dC12aWtpbmctbGlnaHQgZm9udC1kcmFnb24gdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPsKpIEwnQWNhZMOpbWllIGRlIEJlcmsgLSBBcmNoaXZlcyBEcmFjb25pcXVlczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3Qtcm9vdCcpO1xyXG5pZiAocm9vdEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KHJvb3RFbGVtZW50KTtcclxuICAgIHJvb3QucmVuZGVyKDxBcHAgLz4pO1xyXG4gICAgY29uc29sZS5sb2coXCLinIUgUmVhY3QgaW5qZWN0w6kgYXZlYyBzdWNjw6hzICFcIik7XHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIEltcG9zc2libGUgZGUgdHJvdXZlciBsJ8OpbMOpbWVudCAjcmVhY3Qtcm9vdFwiKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyDwn5GHIDEuIElNUE9SVCBEVSBHUkFQSElRVUUgKEluZGlzcGVuc2FibGUpXHJcbmltcG9ydCBDc3ZDaGFydCBmcm9tICcuL0NzdkNoYXJ0JzsgXHJcblxyXG5jb25zdCBBcnRpY2xlRm9ybSA9ICh7IGlkID0gbnVsbCwgb25TdWNjZXNzIH0pID0+IHtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Jsb2NzLCBzZXRCbG9jc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpc2F0aW9uIGF2ZWMgZGVzIHRhYmxlYXV4IHZpZGVzIHBvdXIgw6l2aXRlciBsZXMgY3Jhc2hzXHJcbiAgICBjb25zdCBbbXVzaWNMaWJyYXJ5LCBzZXRNdXNpY0xpYnJhcnldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2RhdGFzZXRMaWJyYXJ5LCBzZXREYXRhc2V0TGlicmFyeV0gPSB1c2VTdGF0ZShbXSk7IFxyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyAtLS0gQ0hBUkdFTUVOVCBERVMgRE9OTsOJRVMgLS0tXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIDEuIE11c2lxdWVzXHJcbiAgICAgICAgZmV0Y2goJy9hcGkvbXVzaWMvbGlzdCcpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMub2sgPyByZXMuanNvbigpIDogW10pIC8vIFNpIGVycmV1ciwgb24gcmVudm9pZSB0YWJsZWF1IHZpZGVcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbiBzJ2Fzc3VyZSBxdWUgYydlc3QgYmllbiB1biBvYmpldC90YWJsZWF1IGF2YW50IGRlIHNldFxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHNldE11c2ljTGlicmFyeShkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiRXJyZXVyIG11c2lxdWUgKGlnbm9yw6llKVwiLCBlcnIpKTtcclxuXHJcbiAgICAgICAgLy8gMi4gRGF0YXNldHMgKENTVilcclxuICAgICAgICBmZXRjaCgnL2FwaS9kYXRhc2V0cy9saXN0JylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgQVBJIERhdGFzZXRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDwn5GHIFPDiUNVUklUw4kgOiBPbiBuZSBtZXQgw6Agam91ciBxdWUgc2kgYydlc3QgYmllbiB1biB0YWJsZWF1XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRm9ybWF0IGRhdGFzZXQgaW52YWxpZGUgcmXDp3VlIGR1IGJhY2s6XCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KFtdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW1wb3NzaWJsZSBkZSBjaGFyZ2VyIGxlcyBkYXRhc2V0c1wiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YXNldExpYnJhcnkoW10pOyAvLyBFbiBjYXMgZCdlcnJldXIsIHRhYmxlYXUgdmlkZSA9IHBhcyBkZSBjcmFzaFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAtLS0gR0VTVElPTiBERVMgQkxPQ1MgLS0tXHJcbiAgICBjb25zdCBhZGRCbG9jID0gKHR5cGUpID0+IHtcclxuICAgICAgICBzZXRCbG9jcyhbLi4uYmxvY3MsIHsgXHJcbiAgICAgICAgICAgIHR5cGUsIFxyXG4gICAgICAgICAgICBjb250ZW50OiAnJywgXHJcbiAgICAgICAgICAgIG1lZGlhVXJsOiAnJywgXHJcbiAgICAgICAgICAgIHZpelR5cGU6ICdiYXInLCBcclxuICAgICAgICAgICAgZmlsZTogbnVsbCwgICBcclxuICAgICAgICAgICAgaWQ6IERhdGUubm93KClcclxuICAgICAgICB9XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUJsb2MgPSAoaW5kZXhUb1JlbW92ZSkgPT4ge1xyXG4gICAgICAgIHNldEJsb2NzKGJsb2NzLmZpbHRlcigoXywgaW5kZXgpID0+IGluZGV4ICE9PSBpbmRleFRvUmVtb3ZlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUJsb2MgPSAoaW5kZXgsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0Jsb2NzID0gWy4uLmJsb2NzXTtcclxuICAgICAgICBuZXdCbG9jc1tpbmRleF1bZmllbGRdID0gdmFsdWU7XHJcbiAgICAgICAgc2V0QmxvY3MobmV3QmxvY3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGluZGV4LCBlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUJsb2MoaW5kZXgsICdmaWxlJywgZmlsZSk7XHJcbiAgICAgICAgICAgIGlmIChmaWxlLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJykpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUJsb2MoaW5kZXgsICdtZWRpYVVybCcsIFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyAtLS0gU09VTUlTU0lPTiAtLS1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0aXRsZScsIHRpdGxlKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3N1bW1hcnknLCBzdW1tYXJ5KTtcclxuXHJcbiAgICAgICAgYmxvY3MuZm9yRWFjaCgoYmxvYywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bdHlwZV1gLCBibG9jLnR5cGUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVtwb3NpdGlvbl1gLCBpbmRleCArIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKFsnaDInLCAncGFyYWdyYXBoJ10uaW5jbHVkZXMoYmxvYy50eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bY29udGVudF1gLCBibG9jLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnaW1hZ2UnICYmIGJsb2MuZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1baW1hZ2VGaWxlXWAsIGJsb2MuZmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChibG9jLnR5cGUgPT09ICdzdGF0cycpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW3ZpelR5cGVdYCwgYmxvYy52aXpUeXBlKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW2NzdlBhdGhdYCwgYmxvYy5tZWRpYVVybCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChibG9jLnR5cGUgPT09ICdtdXNpYycpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW211c2ljRmlsZU5hbWVdYCwgYmxvYy5tZWRpYVVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jdXN0b20vYXJ0aWNsZXMvY3JlYXRlJywgeyBcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJWb3RyZSByw6ljaXQgYSDDqXTDqSBncmF2w6kgYXZlYyBzdWNjw6hzICFcIik7XHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycmV1ciA6IFwiICsgKGVycm9yRGF0YS5tZXNzYWdlIHx8IFwiUHJvYmzDqG1lIHNlcnZldXJcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIHNlcnZldXIgY3JpdGlxdWUuXCIpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgcC04IGJvcmRlciBib3JkZXItc3RvbmUtODAwIHNoYWRvdy0yeGwgbWF4LXctNHhsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5Ob3V2ZWxsZSBDaHJvbmlxdWU8L2gyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgdGV4dC13aGl0ZSBwLTQgdGV4dC0yeGwgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZFwiIHBsYWNlaG9sZGVyPVwiVGl0cmUuLi5cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3N1bW1hcnl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VtbWFyeShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCB0ZXh0LXN0b25lLTMwMCBwLTQgaC0yNCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkXCIgcGxhY2Vob2xkZXI9XCJSw6lzdW3DqS4uLlwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAge2Jsb2NzLm1hcCgoYmxvYywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YmxvYy5pZH0gY2xhc3NOYW1lPVwiYmctc3RvbmUtODAwLzUwIHAtNiBib3JkZXItbC00IGJvcmRlci12aWtpbmctZ29sZCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVCbG9jKGluZGV4KX0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXJlZC01MDAgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYW5zaXRpb25cIj5TdXBwcmltZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGQgbWItNCB0cmFja2luZy13aWRlc3RcIj5CbG9jIHtpbmRleCArIDF9IDoge2Jsb2MudHlwZX08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogSDIgJiBQYXJhZ3JhcGggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdoMicgJiYgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Jsb2MuY29udGVudH0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnY29udGVudCcsIGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiIHBsYWNlaG9sZGVyPVwiU291cy10aXRyZS4uLlwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAncGFyYWdyYXBoJyAmJiA8dGV4dGFyZWEgdmFsdWU9e2Jsb2MuY29udGVudH0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnY29udGVudCcsIGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXN0b25lLTMwMCBoLTMyXCIgcGxhY2Vob2xkZXI9XCJUZXh0ZS4uLlwiIC8+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEltYWdlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAnaW1hZ2UnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZUNoYW5nZShpbmRleCwgZSl9IGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwIHRleHQtc21cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLm1lZGlhVXJsICYmIDxpbWcgc3JjPXtibG9jLm1lZGlhVXJsfSBhbHQ9XCJQcmV2aWV3XCIgY2xhc3NOYW1lPVwibXQtNCBtYXgtaC00MCBib3JkZXIgYm9yZGVyLXN0b25lLTYwMFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog8J+RhyBMRSBCTE9DIEdSQVBISVFVRSBDT1JSSUfDiSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ3N0YXRzJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHRleHQteHMgbWItMSBibG9jayB1cHBlcmNhc2UgZm9udC1ib2xkXCI+RG9ubsOpZXMgKENTVik8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICdtZWRpYVVybCcsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2MubWVkaWFVcmwgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0gQ2hvaXNpciB1biBqZXUgZGUgZG9ubsOpZXMgLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog8J+RhyBTw4lDVVJJVMOJIE1BWElNQUxFIElDSSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShkYXRhc2V0TGlicmFyeSkgJiYgZGF0YXNldExpYnJhcnkubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldExpYnJhcnkubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2QuaWR9IHZhbHVlPXtkLnNvdXJjZX0+e2QubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPkF1Y3VuZSBkb25uw6llIGRpc3BvbmlibGUgKG91IGNoYXJnZW1lbnQuLi4pPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIG1iLTEgYmxvY2sgdXBwZXJjYXNlIGZvbnQtYm9sZFwiPlR5cGUgZGUgR3JhcGhpcXVlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbJ2JhcicsICdsaW5lJywgJ3BpZSddLm1hcCh0eXBlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAndml6VHlwZScsIHR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0yIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSBib3JkZXIgdHJhbnNpdGlvbiAke2Jsb2Mudml6VHlwZSA9PT0gdHlwZSA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGJvcmRlci12aWtpbmctZ29sZCcgOiAnYmctYmxhY2sgdGV4dC1zdG9uZS01MDAgYm9yZGVyLXN0b25lLTcwMCBob3Zlcjp0ZXh0LXdoaXRlJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByw6l2aXN1YWxpc2F0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svMjAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtWzIwMHB4XSByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLm1lZGlhVXJsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENzdkNoYXJ0IGNzdlVybD17YmxvYy5tZWRpYVVybH0gdml6VHlwZT17YmxvYy52aXpUeXBlIHx8ICdiYXInfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS02MDAgdGV4dC14cyBpdGFsaWNcIj5Tw6lsZWN0aW9ubmV6IHVuIGZpY2hpZXIuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNdXNpcXVlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAnbXVzaWMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnbWVkaWFVcmwnLCBlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBDaG9pc2lyIHVuZSBtw6lsb2RpZSAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttdXNpY0xpYnJhcnkgJiYgT2JqZWN0LmVudHJpZXMobXVzaWNMaWJyYXJ5KS5tYXAoKFtmb2xkZXIsIGZpbGVzXSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0Z3JvdXAga2V5PXtmb2xkZXJ9IGxhYmVsPXtmb2xkZXIudG9VcHBlckNhc2UoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShmaWxlcykgJiYgZmlsZXMubWFwKGZpbGUgPT4gPG9wdGlvbiBrZXk9e2ZpbGV9IHZhbHVlPXtgJHtmb2xkZXJ9LyR7ZmlsZX1gfT57ZmlsZX08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIGp1c3RpZnktY2VudGVyIG1iLTEwIHBiLTEwIGJvcmRlci1iIGJvcmRlci1zdG9uZS04MDBcIj5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiVGl0cmUgSDJcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdoMicpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJQYXJhZ3JhcGhlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygncGFyYWdyYXBoJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIkltYWdlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnaW1hZ2UnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiR3JhcGhpcXVlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnc3RhdHMnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiTXVzaXF1ZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ211c2ljJyl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2xvYWRpbmd9IGNsYXNzTmFtZT1cInctZnVsbCBiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHB5LTQgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMTIsMTc1LDU1LDAuNCldIGRpc2FibGVkOm9wYWNpdHktNTBcIj5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gJ0dyYXZ1cmUgZW4gY291cnMuLi4nIDogJ1B1YmxpZXIgbGEgQ2hyb25pcXVlJ31cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRvb2xCdG4gPSAoeyBsYWJlbCwgb25DbGljayB9KSA9PiAoXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctc3RvbmUtODAwIHRleHQtc3RvbmUtMzAwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgKyB7bGFiZWx9XHJcbiAgICA8L2J1dHRvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVGb3JtOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnO1xyXG5pbXBvcnQgeyBcclxuICBCYXJDaGFydCwgQmFyLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFRvb2x0aXAsIExlZ2VuZCwgUmVzcG9uc2l2ZUNvbnRhaW5lcixcclxuICBMaW5lQ2hhcnQsIExpbmUsIFBpZUNoYXJ0LCBQaWUsIENlbGwgXHJcbn0gZnJvbSAncmVjaGFydHMnO1xyXG5cclxuY29uc3QgQ09MT1JTID0gWycjZDRhZjM3JywgJyNiOTFjMWMnLCAnIzFjMTkxNycsICcjNTc1MzRlJywgJyNhOGEyOWUnXTsgLy8gQ291bGV1cnMgVmlraW5nIChPciwgUm91Z2UsIE5vaXIuLi4pXHJcblxyXG5jb25zdCBDc3ZDaGFydCA9ICh7IGNzdlVybCwgdml6VHlwZSA9ICdiYXInIH0pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghY3N2VXJsKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgLy8gMS4gT24gdmEgY2hlcmNoZXIgbGUgZmljaGllciBDU1YgdmlhIHNvbiBVUkxcclxuICAgICAgICBmZXRjaChjc3ZVcmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkltcG9zc2libGUgZGUgbGlyZSBsZSBwYXJjaGVtaW4gZGUgZG9ubsOpZXNcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihjc3ZUZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIDIuIE9uIGxlIHRyYW5zZm9ybWUgZW4gSlNPTiB1dGlsaXNhYmxlXHJcbiAgICAgICAgICAgICAgICBQYXBhLnBhcnNlKGNzdlRleHQsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHRydWUsIC8vIExhIHByZW1pw6hyZSBsaWduZSBjb250aWVudCBsZXMgdGl0cmVzXHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY1R5cGluZzogdHJ1ZSwgLy8gQ29udmVydGl0IGxlcyBcIjEwXCIgZW4gbm9tYnJlcyAxMFxyXG4gICAgICAgICAgICAgICAgICAgIHNraXBFbXB0eUxpbmVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3VsdHMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoXCJMZSBmaWNoaWVyIGVzdCBpbGxpc2libGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbY3N2VXJsXSk7XHJcblxyXG4gICAgaWYgKCFjc3ZVcmwpIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBpdGFsaWMgdGV4dC14c1wiPkF1Y3VuZSBkb25uw6llIHPDqWxlY3Rpb25uw6llLjwvcD47XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgYW5pbWF0ZS1wdWxzZSB0ZXh0LXhzXCI+RMOpY2hpZmZyYWdlIGRlcyBydW5lcy4uLjwvcD47XHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14c1wiPkVycmV1ciA6IHtlcnJvcn08L3A+O1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdGV4dC14c1wiPkxlIGZpY2hpZXIgZXN0IHZpZGUuPC9wPjtcclxuXHJcbiAgICAvLyBPbiBkZXZpbmUgbGVzIGNsw6lzIChYID0gcHJlbWnDqHJlIGNvbG9ubmUsIFkgPSBkZXV4acOobWUgY29sb25uZSlcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcclxuICAgIGNvbnN0IHhLZXkgPSBrZXlzWzBdOyAvLyBFeDogXCJBbm7DqWVcIiBvdSBcIkRyYWdvblwiXHJcbiAgICBjb25zdCB5S2V5ID0ga2V5c1sxXTsgLy8gRXg6IFwiUG9wdWxhdGlvblwiIG91IFwiVml0ZXNzZVwiXHJcblxyXG4gICAgY29uc3QgcmVuZGVyQ2hhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh2aXpUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpbmUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGluZUNoYXJ0IGRhdGE9e2RhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiBzdHJva2U9XCIjNDQ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9e3hLZXl9IHN0cm9rZT1cIiNkNGFmMzdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WUF4aXMgc3Ryb2tlPVwiI2Q0YWYzN1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnRTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWMxOTE3JywgYm9yZGVyQ29sb3I6ICcjZDRhZjM3JywgY29sb3I6ICcjZmZmJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVnZW5kIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9e3lLZXl9IHN0cm9rZT1cIiNkNGFmMzdcIiBzdHJva2VXaWR0aD17M30gZG90PXt7IHI6IDYgfX0gYWN0aXZlRG90PXt7IHI6IDggfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbmVDaGFydD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BpZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQaWVDaGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4PVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5PVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsTGluZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17KHsgbmFtZSwgcGVyY2VudCB9KSA9PiBgJHtuYW1lfSAkeyhwZXJjZW50ICogMTAwKS50b0ZpeGVkKDApfSVgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJSYWRpdXM9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM4ODg0ZDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT17eUtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVLZXk9e3hLZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZW50cnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGwga2V5PXtgY2VsbC0ke2luZGV4fWB9IGZpbGw9e0NPTE9SU1tpbmRleCAlIENPTE9SUy5sZW5ndGhdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGllPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50U3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFjMTkxNycsIGJvcmRlckNvbG9yOiAnI2Q0YWYzNycsIGNvbG9yOiAnI2ZmZicgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BpZUNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSAnYmFyJzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhckNoYXJ0IGRhdGE9e2RhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiBzdHJva2U9XCIjNDQ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9e3hLZXl9IHN0cm9rZT1cIiNkNGFmMzdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WUF4aXMgc3Ryb2tlPVwiI2Q0YWYzN1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGN1cnNvcj17e2ZpbGw6ICcjMzMzJ319IGNvbnRlbnRTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWMxOTE3JywgYm9yZGVyQ29sb3I6ICcjZDRhZjM3JywgY29sb3I6ICcjZmZmJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVnZW5kIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YUtleT17eUtleX0gZmlsbD1cIiNkNGFmMzdcIiByYWRpdXM9e1s0LCA0LCAwLCAwXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JhckNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IHctZnVsbCBtdC00IGJnLWJsYWNrLzQwIHAtNCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJDaGFydCgpfVxyXG4gICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3N2Q2hhcnQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnO1xyXG5cclxuY29uc3QgRGF0YVByb3ZpZGVyU3BhY2UgPSAoeyBkYXRhc2V0cyB9KSA9PiB7XHJcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtoZWFkZXJzLCBzZXRIZWFkZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb2x1bW5NYXBwaW5nLCBzZXRDb2x1bW5NYXBwaW5nXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtkYXRhc2V0TmFtZSwgc2V0RGF0YXNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpbGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgc2V0RmlsZShzZWxlY3RlZEZpbGUpO1xyXG4gICAgICAgIHNldERhdGFzZXROYW1lKHNlbGVjdGVkRmlsZS5uYW1lLnJlcGxhY2UoJy5jc3YnLCAnJykpO1xyXG5cclxuICAgICAgICBQYXBhLnBhcnNlKHNlbGVjdGVkRmlsZSwge1xyXG4gICAgICAgICAgICBoZWFkZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHNraXBFbXB0eUxpbmVzOiB0cnVlLFxyXG4gICAgICAgICAgICBwcmV2aWV3OiA1LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHMgPSBPYmplY3Qua2V5cyhyZXN1bHRzLmRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEhlYWRlcnMoY29scyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJldmlldyhyZXN1bHRzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxNYXBwaW5nID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgY29scy5mb3JFYWNoKGggPT4gaW5pdGlhbE1hcHBpbmdbaF0gPSAnY2F0ZWdvcmljYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb2x1bW5NYXBwaW5nKGluaXRpYWxNYXBwaW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVUeXBlID0gKGhlYWRlcikgPT4ge1xyXG4gICAgICAgIHNldENvbHVtbk1hcHBpbmcocHJldiA9PiAoe1xyXG4gICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICBbaGVhZGVyXTogcHJldltoZWFkZXJdID09PSAnY2F0ZWdvcmljYWwnID8gJ251bWVyaWNhbCcgOiAnY2F0ZWdvcmljYWwnXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcbiAgICAgICAgLy8gUHLDqXBhcmF0aW9uIGR1IHBheWxvYWQgY29uZm9ybWUgw6AgQVBJIFBsYXRmb3JtXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YXNldE5hbWUsXHJcbiAgICAgICAgICAgIHNvdXJjZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uczogY29sdW1uTWFwcGluZyxcclxuICAgICAgICAgICAgICAgIHVwbG9hZGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHJvd0NvdW50OiBwcmV2aWV3Lmxlbmd0aCAvLyBJbmZvcm1hdGlvbiB1dGlsZSBwb3VyIHRvbiBhZmZpY2hhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZGF0YXNldHMnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgY3J1Y2lhbCBpY2kgcG91ciDDqXZpdGVyIGwnZXJyZXVyIDQxNVxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vbGQranNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlBhcmNoZW1pbiBkZSBkb25uw6llcyBlbnJlZ2lzdHLDqSBkYW5zIGxhIGJpYmxpb3Row6hxdWUgZCdPZGluICFcIik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlLDqXBvbnNlIGR1IHNlcnZldXIgOlwiLCBlcnJvckRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBMZSBTY3JpYmUgcmVmdXNlIGxlIGZvcm1hdCBkdSBmaWNoaWVyLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgcsOpc2VhdVwiLCBlcnJvcik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBhbmltYXRlLWZhZGVJblwiPlxyXG4gICAgICAgICAgICB7LyogRm9ybXVsYWlyZSBkJ2ltcG9ydGF0aW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzQwIHAtNiBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LXhsIG1iLTQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPk5vdXZlbGxlIEFyY2hpdmUgZGUgRG9ubsOpZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC02IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXN0b25lLTUwMCB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ibGFjayBtYi0yXCI+RmljaGllciBDU1YgdW5pcXVlbWVudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiLmNzdlwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHRleHQtc20gdGV4dC1zdG9uZS00MDAgZmlsZTptci00IGZpbGU6cHktMiBmaWxlOnB4LTQgZmlsZTpyb3VuZGVkIGZpbGU6Ym9yZGVyLTAgZmlsZTp0ZXh0LXhzIGZpbGU6Zm9udC1ibGFjayBmaWxlOnVwcGVyY2FzZSBmaWxlOmJnLXZpa2luZy1nb2xkIGZpbGU6dGV4dC1ibGFjayBob3ZlcjpmaWxlOmJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmlsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctYXV0byBwdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0gZGlzYWJsZWQ9e2lzVXBsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy12aWtpbmctZmlyZSB0ZXh0LXdoaXRlIHB5LTMgcHgtOCBmb250LWJsYWNrIHVwcGVyY2FzZSB0ZXh0LXhzIHNoYWRvdy1sZyBob3ZlcjpzY2FsZS0xMDUgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Z3JheXNjYWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNVcGxvYWRpbmcgPyAnR3JhdnVyZS4uLicgOiAnU2NlbGxlciBsXFwnQXJjaGl2ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBBcGVyw6d1IFRlY2huaXF1ZSAqL31cclxuICAgICAgICAgICAge3ByZXZpZXcubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMC84MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzEwIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBwLTMgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ibGFjayB1cHBlcmNhc2UgdGV4dC12aWtpbmctZ29sZC81MFwiPkFuYWx5c2UgZGUgbGEgc3RydWN0dXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZWZ0IGJvcmRlci1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ibGFjay82MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVycy5tYXAoaCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtofSBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXIgYm9yZGVyLXdoaXRlLzUgbWluLXctWzE1MHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcGFyY2htZW50IHRleHQteHMgZm9udC1ib2xkIG1iLTMgdHJ1bmNhdGVcIj57aH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUeXBlKGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LVs5cHhdIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlciB0cmFuc2l0aW9uLWNvbG9ycyAke2NvbHVtbk1hcHBpbmdbaF0gPT09ICdudW1lcmljYWwnID8gJ2JnLWJsdWUtNjAwLzIwIHRleHQtYmx1ZS00MDAgYm9yZGVyIGJvcmRlci1ibHVlLTUwMC8zMCcgOiAnYmctZW1lcmFsZC02MDAvMjAgdGV4dC1lbWVyYWxkLTQwMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwLzMwJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbk1hcHBpbmdbaF0gPT09ICdudW1lcmljYWwnID8gJ/CflKIgTnVtw6lyaXF1ZScgOiAn8J+UpCBDYXTDqWdvcmllbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJldmlldy5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItd2hpdGUvNSBob3ZlcjpiZy13aGl0ZS81IHRyYW5zaXRpb24tY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVycy5tYXAoaCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17aH0gY2xhc3NOYW1lPVwicC00IHRleHQtWzExcHhdIHRleHQtc3RvbmUtNDAwIGJvcmRlci1yIGJvcmRlci13aGl0ZS81IGl0YWxpY1wiPntyb3dbaF19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIEFyY2hpdmVzIGV4aXN0YW50ZXMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkLzQwIGZvbnQtZHJhZ29uIHRleHQtc20gbWItNiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8yMCBwYi0yXCI+UmVnaXN0cmVzIGTDqWrDoCBwcsOpc2VudHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGFzZXRzPy5sZW5ndGggPiAwID8gZGF0YXNldHMubWFwKGRzID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RzLmlkfSBjbGFzc05hbWU9XCJwLTQgYmctYmxhY2svMjAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgaG92ZXI6Ym9yZGVyLXZpa2luZy1nb2xkLzQwIHRyYW5zaXRpb24tYWxsIGdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCBmb250LWJvbGQgdGV4dC1zbSBncm91cC1ob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tY29sb3JzXCI+e2RzLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB0ZXh0LXN0b25lLTYwMCB1cHBlcmNhc2UgZm9udC1ib2xkIGl0YWxpY1wiPntkcy5zb3VyY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gYmctc3RvbmUtODAwIHB4LTIgcHktMC41IHJvdW5kZWQgdGV4dC1zdG9uZS00MDBcIj57ZHMucm93c0NvdW50fSBsaWduZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tZnVsbCBweS0xMCB0ZXh0LWNlbnRlciBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1zdG9uZS04MDAgdGV4dC1zdG9uZS02MDAgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW5lIGRvbm7DqWUgbidhIMOpdMOpIGdyYXbDqWUgcG91ciBsZSBtb21lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3ZpZGVyU3BhY2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSAnand0LWRlY29kZSc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgbGV0IHVzZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIE9uIGTDqWNvZGUgbGUgdG9rZW4gcG91ciBjb25uYcOudHJlIGwndXRpbGlzYXRldXIgZXQgc2VzIHLDtGxlc1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXNlciA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVG9rZW4gaW52YWxpZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFbDqXJpZmljYXRpb24gZGVzIGRyb2l0cyBwb3VyIGxlIERhc2hib2FyZFxyXG4gICAgY29uc3QgY2FuU2VlRGFzaGJvYXJkID0gdXNlcj8ucm9sZXM/LmluY2x1ZGVzKCdST0xFX0VESVRFVVInKSB8fCB1c2VyPy5yb2xlcz8uaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgYm9yZGVyLWItMiBib3JkZXItdmlraW5nLWdvbGQvNTAgcC00IHN0aWNreSB0b3AtMCB6LTUwIHNoYWRvdy1sZyBiYWNrZHJvcC1ibHVyLW1kIGJnLW9wYWNpdHktOTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZHJvcC1zaGFkb3ctbWQgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdXBwZXJjYXNlXCI+UmlkZXJzIG9mIEJlcms8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgdGV4dC1sZyBmb250LWRyYWdvbiB0cmFja2luZy13aWRlIHRleHQtdmlraW5nLWxpZ2h0IHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPkFjY3VlaWw8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5Gb3J1bTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMSUVOIERBU0hCT0FSRCA6IFZpc2libGUgdW5pcXVlbWVudCBwb3VyIMOJZGl0ZXVyL0FkbWluICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuU2VlRGFzaGJvYXJkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZG1pblwiIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC81MCBweC0yIHB5LTAuNSBob3ZlcjpiZy12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zZWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IGJvcmRlci1sIGJvcmRlci1zdG9uZS03MDAgcGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXRva2VuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlciBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmV4aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwiYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBweC00IHB5LTEuNSB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlam9pbmRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSBmb250LWJsYWNrIGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcj8ucHNldWRvIHx8IFwiR3VlcnJpZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXZpa2luZy1maXJlIHVwcGVyY2FzZSBmb250LWJsYWNrIGJvcmRlciBib3JkZXItdmlraW5nLWZpcmUvMzAgcHgtMiBweS0xIGhvdmVyOmJnLXZpa2luZy1maXJlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWl0dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYW52YXMsIHVzZUZyYW1lLCB1c2VUaHJlZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcic7XG5pbXBvcnQgeyB1c2VHTFRGLCB1c2VBbmltYXRpb25zLCBDZW50ZXIsIEh0bWwsIHVzZVRleHR1cmUsIFN0YXJzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xuXG5jb25zdCBNT0RFTF9QQVRIID0gJy9tb2RlbHMvbmlnaHRfZnVyeS5nbGInO1xuY29uc3QgVEVYVFVSRV9QQVRIID0gJy90ZXh0dXJlcy9uaWdodF9mdXJ5X3NraW4ud2VicCc7XG5jb25zdCBBTklNQVRJT05fTkFNRSA9ICdOaWdodEZ1cnlfYXJtYXR1cmVBY3Rpb24nO1xuXG5mdW5jdGlvbiBEcmFnb25Nb2RlbCh7IHZpdGVzc2VSb3RhdGlvbiwgdml0ZXNzZUFuaW1hdGlvbiwgZmFjdGV1clRhaWxsZSwgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7IHNjZW5lLCBhbmltYXRpb25zIH0gPSB1c2VHTFRGKE1PREVMX1BBVEgpO1xuICBjb25zdCB0ZXh0dXJlID0gdXNlVGV4dHVyZShURVhUVVJFX1BBVEgpO1xuICBjb25zdCB7IHZpZXdwb3J0IH0gPSB1c2VUaHJlZSgpOyBcbiAgXG4gIC8vIENhbGN1bCBkZSBiYXNlIHJlc3BvbnNpdmVcbiAgY29uc3QgYmFzZVNjYWxlID0gdmlld3BvcnQud2lkdGggPCA1ID8gMC41IDogMC44OyBcbiAgLy8g8J+TjyBDQUxDVUwgRklOQUwgOiBUYWlsbGUgZGUgYmFzZSB4IExlIGN1cnNldXIgZGUgbCd1dGlsaXNhdGV1clxuICBjb25zdCBmaW5hbFNjYWxlID0gYmFzZVNjYWxlICogZmFjdGV1clRhaWxsZTtcblxuICB0ZXh0dXJlLmZsaXBZID0gZmFsc2U7XG4gIHRleHR1cmUuY29sb3JTcGFjZSA9ICdzcmdiJztcblxuICBjb25zdCBncm91cCA9IHVzZVJlZigpO1xuICBjb25zdCB7IGFjdGlvbnMgfSA9IHVzZUFuaW1hdGlvbnMoYW5pbWF0aW9ucywgZ3JvdXApO1xuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2NlbmUudHJhdmVyc2UoKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNNZXNoKSB7XG4gICAgICAgIGNoaWxkLm1hdGVyaWFsLm1hcCA9IHRleHR1cmU7XG4gICAgICAgIGNoaWxkLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW3NjZW5lLCB0ZXh0dXJlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aW9ucyAmJiBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXSkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXTtcbiAgICAgICAgYWN0aW9uLnJlc2V0KCkuZmFkZUluKDAuNSkucGxheSgpO1xuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgfVxuICB9LCBbYWN0aW9uc10pO1xuXG4gIC8vIE1pc2Ugw6Agam91ciB2aXRlc3NlIGFuaW1hdGlvblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3Rpb25zICYmIGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdKSB7XG4gICAgICAgIGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdLnRpbWVTY2FsZSA9IHZpdGVzc2VBbmltYXRpb247XG4gICAgfVxuICB9LCBbdml0ZXNzZUFuaW1hdGlvbiwgYWN0aW9uc10pO1xuXG4gIGNvbnN0IHRvZ2dsZUFuaW1hdGlvbiA9IChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXTtcbiAgICBpZiAoIWFjdGlvbikgcmV0dXJuO1xuXG4gICAgaWYgKGlzUGxheWluZykge1xuICAgICAgICBhY3Rpb24ucGF1c2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhY3Rpb24ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIGFjdGlvbi5wbGF5KCk7IFxuICAgIH1cbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG4gIH07XG5cbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIGlmKGdyb3VwLmN1cnJlbnQpIGdyb3VwLmN1cnJlbnQucm90YXRpb24ueSArPSB2aXRlc3NlUm90YXRpb247XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPHByaW1pdGl2ZSBcbiAgICAgIHJlZj17Z3JvdXB9IFxuICAgICAgb2JqZWN0PXtzY2VuZX0gXG4gICAgICBvbkNsaWNrPXt0b2dnbGVBbmltYXRpb259XG4gICAgICBvblBvaW50ZXJPdmVyPXsoKSA9PiBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ31cbiAgICAgIG9uUG9pbnRlck91dD17KCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnYXV0byd9XG4gICAgICBcbiAgICAgIHNjYWxlPXtmaW5hbFNjYWxlfSAvLyDwn5GIIE9uIGFwcGxpcXVlIGxhIHRhaWxsZSBkeW5hbWlxdWUgaWNpXG4gICAgICBcbiAgICAgIHBvc2l0aW9uPXtbMCwgMC41LCAwXX0gXG4gICAgICB7Li4ucHJvcHN9IFxuICAgIC8+XG4gICk7XG59XG5cbmNvbnN0IE5pZ2h0RnVyeVNjZW5lID0gKCkgPT4ge1xuICAvLyDwn46b77iPIMOJVEFUUyBEVSBUQUJMRUFVIERFIEJPUkRcbiAgY29uc3QgW3JvdFNwZWVkLCBzZXRSb3RTcGVlZF0gPSB1c2VTdGF0ZSgwLjAwMSk7XG4gIGNvbnN0IFthbmltU3BlZWQsIHNldEFuaW1TcGVlZF0gPSB1c2VTdGF0ZSgyLjUpO1xuICBjb25zdCBbc2l6ZUZhY3Rvciwgc2V0U2l6ZUZhY3Rvcl0gPSB1c2VTdGF0ZSgxKTsgLy8gMSA9IHRhaWxsZSBub3JtYWxlICgxMDAlKVxuXG4gIC8vIEZvbmN0aW9uIHBvdXIgdG91dCByZW1ldHRyZSDDoCB6w6lyb1xuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRSb3RTcGVlZCgwLjAwMSk7XG4gICAgc2V0QW5pbVNwZWVkKDIuNSk7XG4gICAgc2V0U2l6ZUZhY3RvcigxKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByZWxhdGl2ZVwiPlxuICAgICAgXG4gICAgICA8Q2FudmFzIHNoYWRvd3MgY2FtZXJhPXt7IHBvc2l0aW9uOiBbMCwgMiwgMTBdLCBmb3Y6IDQ1IH19PlxuICAgICAgICA8Y29sb3IgYXR0YWNoPVwiYmFja2dyb3VuZFwiIGFyZ3M9e1snIzA1MDUxMCddfSAvPlxuICAgICAgICBcbiAgICAgICAgPFN0YXJzIHJhZGl1cz17MTAwfSBkZXB0aD17NTB9IGNvdW50PXs1MDAwfSBmYWN0b3I9ezR9IHNhdHVyYXRpb249ezB9IGZhZGUgc3BlZWQ9ezF9IC8+XG5cbiAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezN9IC8+XG4gICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IHBvc2l0aW9uPXtbMTAsIDEwLCA1XX0gaW50ZW5zaXR5PXs0fSAvPlxuICAgICAgICA8c3BvdExpZ2h0IHBvc2l0aW9uPXtbLTUsIDUsIDEwXX0gaW50ZW5zaXR5PXs1fSBjb2xvcj1cIiNhODU1ZjdcIiAvPlxuICAgICAgICA8c3BvdExpZ2h0IHBvc2l0aW9uPXtbMCwgNSwgLTEwXX0gaW50ZW5zaXR5PXs1fSBjb2xvcj1cIiNmZmZmZmZcIiAvPlxuXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PEh0bWwgY2VudGVyPjxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkludm9jYXRpb24uLi48L2Rpdj48L0h0bWw+fT5cbiAgICAgICAgICA8Q2VudGVyIHRvcD5cbiAgICAgICAgICAgIDxEcmFnb25Nb2RlbCBcbiAgICAgICAgICAgICAgICB2aXRlc3NlUm90YXRpb249e3JvdFNwZWVkfSBcbiAgICAgICAgICAgICAgICB2aXRlc3NlQW5pbWF0aW9uPXthbmltU3BlZWR9XG4gICAgICAgICAgICAgICAgZmFjdGV1clRhaWxsZT17c2l6ZUZhY3Rvcn0gLy8g8J+RiCBPbiBlbnZvaWUgbGEgdGFpbGxlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgPC9DYW52YXM+XG5cbiAgICAgIHsvKiDwn46b77iPIFVJIFBBTk5FQVUgREUgQ09OVFLDlExFICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IGJnLWJsYWNrLzcwIGJhY2tkcm9wLWJsdXItbWQgcC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1ibHVlLTUwMC8zMCB0ZXh0LXdoaXRlIHctNjQgc2hhZG93LTJ4bCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy1ibGFjay84MFwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTMwMCBmb250LWJvbGQgbWItNCB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItd2hpdGUvMTAgcGItMlwiPlxuICAgICAgICAgICAgQ09OVFLDlExFUyBEVSBEUkFHT05cbiAgICAgICAgPC9oMz5cblxuICAgICAgICB7LyogMS4gVGFpbGxlIChab29tKSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgbWItMVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlRhaWxsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMFwiPnh7c2l6ZUZhY3Rvci50b0ZpeGVkKDEpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIFxuICAgICAgICAgICAgICAgIG1pbj1cIjAuMVwiIFxuICAgICAgICAgICAgICAgIG1heD1cIjNcIiBcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4xXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NpemVGYWN0b3J9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTaXplRmFjdG9yKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYWNjZW50LWdyZWVuLTUwMCBjdXJzb3ItcG9pbnRlciBoLTIgYmctZ3JheS03MDAgcm91bmRlZC1sZyBhcHBlYXJhbmNlLW5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDIuIFJvdGF0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+Um90YXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPntyb3RTcGVlZC50b0ZpeGVkKDMpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIFxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBcbiAgICAgICAgICAgICAgICBtYXg9XCIwLjA1XCIgXG4gICAgICAgICAgICAgICAgc3RlcD1cIjAuMDAxXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JvdFNwZWVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Um90U3BlZWQocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXIgaC0yIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgYXBwZWFyYW5jZS1ub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiAzLiBWaXRlc3NlIEFuaW1hdGlvbiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgbWItMVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPkFuaW1hdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS00MDBcIj54e2FuaW1TcGVlZC50b0ZpeGVkKDEpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIFxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBcbiAgICAgICAgICAgICAgICBtYXg9XCI1XCIgXG4gICAgICAgICAgICAgICAgc3RlcD1cIjAuMVwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXthbmltU3BlZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmltU3BlZWQocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtcHVycGxlLTUwMCBjdXJzb3ItcG9pbnRlciBoLTIgYmctZ3JheS03MDAgcm91bmRlZC1sZyBhcHBlYXJhbmNlLW5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNCBiZy13aGl0ZS8xMCBob3ZlcjpiZy1yZWQtNTAwLzUwIHB5LTEgcm91bmRlZCB0ZXh0LXhzIHRyYW5zaXRpb24tY29sb3JzIGJvcmRlciBib3JkZXItd2hpdGUvMTBcIlxuICAgICAgICA+XG4gICAgICAgICAgICBSw6lpbml0aWFsaXNlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG51c2VHTFRGLnByZWxvYWQoTU9ERUxfUEFUSCk7XG51c2VUZXh0dXJlLnByZWxvYWQoVEVYVFVSRV9QQVRIKTtcblxuZXhwb3J0IGRlZmF1bHQgTmlnaHRGdXJ5U2NlbmU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgRGF0YVByb3ZpZGVyU3BhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRhUHJvdmlkZXJTcGFjZSc7IC8vIE9uIGwnaW1wb3J0ZXJhIGp1c3RlIGFwcsOoc1xyXG5cclxuY29uc3QgQWRtaW5EYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJ3N0YXRzJyk7IC8vIFN5c3TDqG1lIGQnb25nbGV0c1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjdXJyZW50VXNlciA9IHRva2VuID8gand0RGVjb2RlKHRva2VuKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBkZSBkw6ljb2RhZ2UgZHUgdG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRMOpZmluaXRpb24gZGVzIGFjY8OocyBzZWxvbiBsZXMgcsO0bGVzXHJcbiAgICBjb25zdCByb2xlcyA9IGN1cnJlbnRVc2VyPy5yb2xlcyB8fCBbXTtcclxuICAgIGNvbnN0IGlzRnVsbEFkbWluID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcclxuICAgIGNvbnN0IGlzUHJvdmlkZXIgPSByb2xlcy5pbmNsdWRlcygnUk9MRV9GT1VSTklTU0VVUicpIHx8IGlzRnVsbEFkbWluO1xyXG4gICAgY29uc3QgaXNEZXNpZ25lciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0RFU0lHTkVSJykgfHwgaXNGdWxsQWRtaW47XHJcbiAgICBjb25zdCBpc0VkaXRvciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0VESVRFVVInKSB8fCBpc0Z1bGxBZG1pbjtcclxuXHJcbiAgICBjb25zdCBsb2FkU3RhdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvYWRtaW4vc3RhdHMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiQWNjw6hzIHJlZnVzw6kgcGFyIGxlIEdyYW5kIENvbnNlaWxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oanNvbiA9PiBzZXREYXRhKGpzb24pKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gc2V0RXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2FkU3RhdHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcm9tb3RlID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvYWRtaW4vdXNlci8ke3VzZXJJZH0vcHJvbW90ZWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBhbGxVc2VyczogZGF0YS5hbGxVc2Vycy5tYXAodSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdS5pZCA9PT0gdXNlcklkID8geyAuLi51LCByb2xlczogdXBkYXRlZERhdGEubmV3Um9sZXMgfSA6IHVcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikgeyBhbGVydChcIkVycmV1ciBsb3JzIGR1IGNoYW5nZW1lbnQgZGUgcmFuZ1wiKTsgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWZpcmUgcC0xMCB0ZXh0LWNlbnRlciBmb250LWRyYWdvblwiPntlcnJvcn08L2Rpdj47XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgcC0xMCBmb250LWRyYWdvbiBhbmltYXRlLXB1bHNlIHRleHQtY2VudGVyXCI+QXBwZWwgYXUgR3JhbmQgQ29uc2VpbC4uLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcC02IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLXBhcmNobWVudCBtYi0xMCBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMzAgcGItNCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgIFBhbGFpcyBkJ0FkbWluaXN0cmF0aW9uXHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBwYXIgT25nbGV0cyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBtYi04IGJvcmRlci1iIGJvcmRlci1zdG9uZS04MDAgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3N0YXRzJyl9IGNsYXNzTmFtZT17YHB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24gJHthY3RpdmVUYWIgPT09ICdzdGF0cycgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjaycgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwJ31gfT5WdWUgZCdlbnNlbWJsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7aXNGdWxsQWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCd1c2VycycpfSBjbGFzc05hbWU9e2BweC00IHB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uICR7YWN0aXZlVGFiID09PSAndXNlcnMnID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2snIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCd9YH0+UG9wdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2lzRWRpdG9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignYXJ0aWNsZXMnKX0gY2xhc3NOYW1lPXtgcHgtNCBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbiAke2FjdGl2ZVRhYiA9PT0gJ2FydGljbGVzJyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrJyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAnfWB9PkNocm9uaXF1ZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2lzUHJvdmlkZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdkYXRhJyl9IGNsYXNzTmFtZT17YHB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24gJHthY3RpdmVUYWIgPT09ICdkYXRhJyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrJyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAnfWB9PkRvbm7DqWVzIChDU1YpPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtpc0Rlc2lnbmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignZGVzaWduJyl9IGNsYXNzTmFtZT17YHB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24gJHthY3RpdmVUYWIgPT09ICdkZXNpZ24nID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2snIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCd9YH0+QXBwYXJlbmNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDT05URU5VIERZTkFNSVFVRSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1bNDAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdzdGF0cycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNiBhbmltYXRlLWZhZGVJblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXItbC00IGJvcmRlci12aWtpbmctZ29sZCBwLTYgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRleHQteHMgZm9udC1ibGFja1wiPkhhYml0YW50czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWRyYWdvbiBtdC0yIHRleHQtd2hpdGVcIj57ZGF0YS51c2Vyc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIGJvcmRlci1sLTQgYm9yZGVyLXZpa2luZy1maXJlIHAtNiBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgdGV4dC14cyBmb250LWJsYWNrXCI+QXJ0aWNsZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1kcmFnb24gbXQtMiB0ZXh0LXdoaXRlXCI+e2RhdGEuYXJ0aWNsZXNDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAndXNlcnMnICYmIGlzRnVsbEFkbWluICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBhbmltYXRlLWZhZGVJblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaGVyY2hlciB1biBndWVycmllci4uLlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8yMCBwLTIgcm91bmRlZCB0ZXh0LXNtIHctZnVsbCBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuYWxsVXNlcnM/LmZpbHRlcih1ID0+IHUucHNldWRvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSkubWFwKHUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3UuaWR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTMgYmctc3RvbmUtOTAwLzUwIGJvcmRlciBib3JkZXItc3RvbmUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdmlraW5nLXBhcmNobWVudFwiPnt1LnBzZXVkb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwXCI+e3Uucm9sZXMuam9pbignIHwgJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUHJvbW90ZSh1LmlkKX0gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC80MCBweC0zIHB5LTEgaG92ZXI6YmctdmlraW5nLWdvbGQgaG92ZXI6dGV4dC1ibGFjayB0cmFuc2l0aW9uIHVwcGVyY2FzZSBmb250LWJsYWNrXCI+Q2hhbmdlciBSYW5nPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdhcnRpY2xlcycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMiBhbmltYXRlLWZhZGVJblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXM/Lm1hcChhcnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FydC5pZH0gY2xhc3NOYW1lPVwicC00IGJnLXN0b25lLTkwMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthcnQudGl0bGV9IDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBtbC0yXCI+cGFyIHthcnQuYXV0aG9yfTwvc21hbGw+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNjAwIHRleHQteHNcIj57YXJ0LmNyZWF0ZWRBdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdkYXRhJyAmJiBpc1Byb3ZpZGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVByb3ZpZGVyU3BhY2UgZGF0YXNldHM9e2RhdGEuZGF0YXNldHN9IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdkZXNpZ24nICYmIGlzRGVzaWduZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMCB0ZXh0LWNlbnRlciBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1zdG9uZS04MDAgdGV4dC1zdG9uZS02MDAgdXBwZXJjYXNlIGZvbnQtYmxhY2sgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JnZSBkZSBEZXNpZ24gKEVuIGNvbnN0cnVjdGlvbilcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluRGFzaGJvYXJkOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IEFydGljbGVQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7IGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyB9IH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LTJ4bCBweS0yMCBhbmltYXRlLXB1bHNlXCI+UmVjaGVyY2hlIGRhbnMgbGVzIGFyY2hpdmVzLi4uPC9kaXY+O1xyXG4gICAgaWYgKCFhcnRpY2xlKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1maXJlIHRleHQteGwgcHktMTBcIj5BcnRpY2xlIGludHJvdXZhYmxlIGRhbnMgbGVzIGFyY2hpdmVzLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gYW5pbWF0ZS1mYWRlLWluXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctbGlnaHQgaG92ZXI6dGV4dC13aGl0ZSBtYi02IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0cmFuc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7ihpA8L3NwYW4+IFJldG91ciBhdSBmb3J1bVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIHsvKiBEw6ljb3JhdGlvbiBjb2luICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctMjAgaC0yMCBiZy12aWtpbmctZ29sZCBvcGFjaXR5LTEwIHJvdW5kZWQtYmwtZnVsbFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXNtIHRleHQtc3RvbmUtNTAwIG1iLTggYm9yZGVyLWIgYm9yZGVyLXN0b25lLTcwMCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdmlraW5nLXJlZCBweC0yIHB5LTEgcm91bmRlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyY2hpdmVcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q3LDqcOpIGxlIHtuZXcgRGF0ZShhcnRpY2xlLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgZm9udC1zZXJpZiB3aGl0ZXNwYWNlLXByZS1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUuc3VtbWFyeX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTm90ZTogTGVzIGJsb2NzIGV0IGNvbW1lbnRhaXJlcyBuw6ljZXNzaXRlbnQgdW5lIGxvZ2lxdWUgcGx1cyBwb3Vzc8OpZSDDoCBpbXBsw6ltZW50ZXIgcGx1cyB0YXJkICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IEFydGljbGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm0nO1xyXG5cclxuY29uc3QgRm9ydW1QYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgXHJcbiAgICAvLyBHZXN0aW9uIGRlIGxhIG5hdmlnYXRpb24gaW50ZXJuZVxyXG4gICAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoJ2xpc3QnKTsgLy8gJ2xpc3QnLCAnY3JlYXRlJywgJ2VkaXQnXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIDEuIFLDqWN1cMOpcmF0aW9uIGV0IGTDqWNvZGFnZSBkdSBUb2tlblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRyeSB7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkd1ZXJyaWVyIGNvbm5lY3TDqSA6XCIsIGRlY29kZWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcihkZWNvZGVkKTsgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYWRnZSAoVG9rZW4pIGludmFsaWRlIG91IGV4cGlyw6lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gMi4gQ2hhcmdlbWVudCBkZXMgY2hyb25pcXVlc1xyXG4gICAgICAgIGZldGNoQXJ0aWNsZXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEFydGljbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvYXJ0aWNsZXMnLCB7IFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nIH0gXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0QXJ0aWNsZXMoZGF0YVsnaHlkcmE6bWVtYmVyJ10gfHwgZGF0YVsnbWVtYmVyJ10gfHwgW10pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGRlIGxpYWlzb24gYXZlYyBsZSBHcmFuZCBDb25zZWlsXCIsIGVycik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKFwiVm91bGV6LXZvdXMgdnJhaW1lbnQgZWZmYWNlciBjZSByw6ljaXQgZGUgbGEgcGllcnJlID9cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwcmVzc2lvbiBsb2NhbGUgaW1tw6lkaWF0ZSBwb3VyIGwnaW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlcyhhcnRpY2xlcy5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYUlkID0gKGEuaWQgfHwgYVsnQGlkJ10pLnRvU3RyaW5nKCkuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUlkICE9PSBpZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJMZXMgZHJhZ29ucyBwcm90w6hnZW50IGNlIHBhcmNoZW1pbiAoRXJyZXVyIGRlIHBlcm1pc3Npb25zKS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJMZSBzZXJ2ZXVyIGVzdCBpbmpvaWduYWJsZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpZXcoJ2xpc3QnKTtcclxuICAgICAgICBzZXRTZWxlY3RlZElkKG51bGwpO1xyXG4gICAgICAgIGZldGNoQXJ0aWNsZXMoKTsgXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLSBMT0dJUVVFIERFUyBSw5RMRVMgLS0tXHJcbiAgICBjb25zdCBoYXNSb2xlID0gKHJvbGUpID0+IHVzZXI/LnJvbGVzPy5pbmNsdWRlcyhyb2xlKTtcclxuICAgIFxyXG4gICAgLy8gQXV0b3Jpc2UgbGEgY3LDqWF0aW9uIHBvdXIgQWRtaW4sIEF1dGV1ciBFVCDDiWRpdGV1clxyXG4gICAgY29uc3QgY2FuQ3JlYXRlID0gaGFzUm9sZSgnUk9MRV9BRE1JTicpIHx8IGhhc1JvbGUoJ1JPTEVfQVVURVVSJykgfHwgaGFzUm9sZSgnUk9MRV9FRElURVVSJyk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcgJiYgdmlldyA9PT0gJ2xpc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS00MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYm9yZGVyLTQgYm9yZGVyLXZpa2luZy1nb2xkIGJvcmRlci10LXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW4gbWItNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LXhsIGFuaW1hdGUtcHVsc2UgdXBwZXJjYXNlXCI+T3V2ZXJ0dXJlIGRlcyBwYXJjaGVtaW5zLi4uPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBweC00IHBiLTIwXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogLS0tIEhFQURFUiAtLS0gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIG1iLTEyIGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8yMCBwYi04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj5DaHJvbmlxdWVzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBpdGFsaWMgdGV4dC1zbSBtdC0yXCI+TGUgc2F2b2lyIGR1IHZpbGxhZ2UgZGUgQmVyaywgZ3JhdsOpIHBvdXIgbCfDqXRlcm5pdMOpLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7dmlldyA9PT0gJ2xpc3QnICYmIGNhbkNyZWF0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlldygnY3JlYXRlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgcHgtOCBweS0zIGZvbnQtYmxhY2sgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMTIsMTc1LDU1LDAuMildIHVwcGVyY2FzZSB0ZXh0LXhzIHRyYWNraW5nLXdpZGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIEdyYXZlciB1biByw6ljaXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIC0tLSBWVUVTIEZPUk1VTEFJUkVTIC0tLSAqL31cclxuICAgICAgICAgICAgeyh2aWV3ID09PSAnY3JlYXRlJyB8fCB2aWV3ID09PSAnZWRpdCcpID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20tNCBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFZpZXcoJ2xpc3QnKTsgc2V0U2VsZWN0ZWRJZChudWxsKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb24gdXBwZXJjYXNlIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oaQIFJldG91ciBhdSBtdXIgZGVzIGzDqWdlbmRlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlRm9ybSBpZD17c2VsZWN0ZWRJZH0gb25TdWNjZXNzPXtoYW5kbGVTdWNjZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAvKiAtLS0gVlVFIExJU1RFIERFUyBBUlRJQ0xFUyAtLS0gKi9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTIwIHRleHQtc3RvbmUtNjAwIGl0YWxpY1wiPkxlIHNpbGVuY2UgcsOoZ25lIHN1ciBsZSBtdXIuLi4gQXVjdW5lIGNocm9uaXF1ZSBuJ2Egw6l0w6kgdHJvdXbDqWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5JZCA9IChhcnRpY2xlLmlkIHx8IGFydGljbGVbJ0BpZCddKS50b1N0cmluZygpLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFbDqXJpZmljYXRpb24gZGUgcHJvcHJpw6l0w6kgKEwnYXV0ZXVyIGR1IHBvc3QgT1UgdW4gcsO0bGUgZGUgbW9kw6lyYXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc093bmVyID0gdXNlcj8uaWQgPT09IGFydGljbGUuYXV0aG9yPy5pZCB8fCBoYXNSb2xlKCdST0xFX0FETUlOJykgfHwgaGFzUm9sZSgnUk9MRV9FRElURVVSJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBrZXk9e2NsZWFuSWR9IGNsYXNzTmFtZT1cImdyb3VwIGJnLXN0b25lLTkwMC80MCBib3JkZXItbC00IGJvcmRlci1zdG9uZS04MDAgaG92ZXI6Ym9yZGVyLXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBwLTggcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzT3duZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBvcGFjaXR5LTQwIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRTZWxlY3RlZElkKGNsZWFuSWQpOyBzZXRWaWV3KCdlZGl0Jyk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIGJnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTQwMCBweC0zIHB5LTEgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGNsZWFuSWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB1cHBlcmNhc2UgZm9udC1ibGFjayBiZy1yZWQtOTAwLzEwIHRleHQtcmVkLTUwMC83MCBweC0zIHB5LTEgYm9yZGVyIGJvcmRlci1yZWQtOTAwLzMwIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VwcHJpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCBmb250LXNlcmlmIGl0YWxpYyB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi04IG1heC13LTN4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ7YXJ0aWNsZS5zdW1tYXJ5fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB0LTYgYm9yZGVyLXQgYm9yZGVyLXN0b25lLTgwMC81MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtWzFweF0gYmctdmlraW5nLWdvbGQvNDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZvbnQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFyIHthcnRpY2xlLmF1dGhvcj8ucHNldWRvIHx8IGFydGljbGUuYXV0aG9yPy51c2VybmFtZSB8fCBcIkd1ZXJyaWVyIGRlIGwnb21icmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2ZvcnVtL2FydGljbGUvJHtjbGVhbklkfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWZpcmUgZm9udC1ibGFjayB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN1bHRlciBsZSBwYXJjaGVtaW4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPuKGkjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ydW1QYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOaWdodEZ1cnlTY2VuZSBmcm9tIFwiLi4vY29tcG9uZW50cy9OaWdodEZ1cnlcIjtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTE2IGFuaW1hdGUtZmFkZS1pbi11cFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1kcmFnb24gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXZpa2luZy1nb2xkIHZpYS15ZWxsb3ctNTAwIHRvLXZpa2luZy1nb2xkIG1iLTggZHJvcC1zaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBkYW5zIGwnQW50cmVcclxuICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTEgYmctdmlraW5nLXJlZCBteC1hdXRvIG1iLTggcm91bmRlZC1mdWxsIHNoYWRvdy1bMF8wXzEwcHhfI2RjMjYyNl1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtdmlraW5nLWxpZ2h0IG1iLTEyIG1heC13LTN4bCBteC1hdXRvIGZvbnQtc2VyaWYgaXRhbGljIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgICAgICAgXCLDh2EsIGMnZXN0IEJldXJrLiDDgCBkb3V6ZSBqb3VycyBhdSBub3JkIGR1IETDqXNlc3BvaXIsIGV0XHJcbiAgICAgICAgICAgICAgICBxdWVscXVlcyBkZWdyw6lzIGF1IHN1ZCBkJ3VuIEZyb2lkLWRlLWNhbmFyZC4gQW5jcsOpIHNvbGlkZW1lbnRcclxuICAgICAgICAgICAgICAgIHN1ciBsZSBNw6lyaWRpZW4gZGUgbGEgTWlzw6hyZS4gTW9uIHZpbGxhZ2UuLi4gRW4gdW4gbW90LCBiYWxhaXNlLlxyXG4gICAgICAgICAgICAgICAgRXQgc2VwdCBnw6luw6lyYXRpb25zIHkgb250IGTDqWrDoCB2dSBsZSBqb3VyLCBwb3VydGFudCwgdG91dGVzIGxlc1xyXG4gICAgICAgICAgICAgICAgbWFpc29ucyBzb250IG5ldXZlcy4gQmV1cmsgOiBzYSBww6pjaGUsIHNhIGNoYXNzZSwgZXQgc2VzXHJcbiAgICAgICAgICAgICAgICBtZXJ2ZWlsbGV1eCBjb3VjaGVycyBkZSBzb2xlaWwuIExhIHNldWxlIGZhdXNzZSBub3RlIGMnZXN0IGxlc1xyXG4gICAgICAgICAgICAgICAgYmVzdGlvbGVzLiBBaWxsZXVycywgbGVzIGdlbnMgb250IGRlcyBzb3VyaXMgb3UgZGVzIG1vdXN0aXF1ZXMuXHJcbiAgICAgICAgICAgICAgICBOb3VzIG9uIGEgZGVzLi4uIGRyYWdvbnMuXCJcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMCByb3VuZGVkLTJ4bCBib3JkZXItNCBib3JkZXItc3RvbmUtNzAwIHNoYWRvdy0yeGwgb3ZlcmZsb3ctaGlkZGVuIG1iLTEyXCI+XHJcbiAgICAgICAgICAgICAgICB7Lyog8J+RhyBDJ2VzdCBpY2kgcXVlIGxhIG1hZ2llIG9ww6hyZS4gTGEgaGF1dGV1ciAoaC1bNjAwcHhdKSBlc3QgQ1JVQ0lBTEUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzYwMHB4XSB3LWZ1bGwgcmVsYXRpdmUgYmctYmxhY2sgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmlnaHRGdXJ5U2NlbmUgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTAgdy1mdWxsIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTQwMCBwb2ludGVyLWV2ZW50cy1ub25lIHotMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpcXVleiBzdXIgbGUgZHJhZ29uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvZm9ydW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHB4LTggcHktNCBiZy12aWtpbmctcmVkIGhvdmVyOmJnLXJlZC05MDAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHRleHQtd2hpdGUgZm9udC1kcmFnb24gdGV4dC14bCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMjIwLDM4LDM4LDAuNSldXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+QWNjw6lkZXIgYXUgRm9ydW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZS8yMCB0by10cmFuc3BhcmVudCAtdHJhbnNsYXRlLXgtZnVsbCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC1mdWxsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvc3RhdGlzdGlxdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTggcHktNCBiZy12aWtpbmctcm9jayBob3ZlcjpiZy1zdG9uZS03MDAgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTUwMCB0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIGZvbnQtZHJhZ29uIHRleHQteGwgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFZvaXIgbGVzIFN0YXRzXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RXJyb3IoJycpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luX2NoZWNrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLCAvLyBFbnZvaSBkZSBsYSBjbMOpIFwiZW1haWxcIiBhdHRlbmR1ZSBwYXIgU3ltZm9ueVxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCBcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2sgJiYgZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvY2thZ2UgZHUgdG9rZW4gSldUXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0aW9uIHZlcnMgbGUgZm9ydW1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9mb3J1bSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcignSWRlbnRpZmlhbnRzIGluY29ycmVjdHMuIExlcyBkcmFnb25zIG5lIHZvdXMgcmVjb25uYWlzc2VudCBwYXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ0VycmV1ciBkZSBjb25uZXhpb24gYXUgc2VydmV1ci4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXZpa2luZy1yb2NrIHAtMTAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgbXQtMTBcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5Db25uZXhpb248L2gyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXJlZCB0ZXh0LXNtIG1iLTQgaXRhbGljIHRleHQtY2VudGVyIGZvbnQtYm9sZFwiPntlcnJvcn08L3A+fVxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBkdSBHdWVycmllclxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4ZW1wbGVAYmVyay5mclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMiB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTW90IGRlIHBhc3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayBweS00IHVwcGVyY2FzZSBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LWxnIGFjdGl2ZTpzY2FsZS05NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZW5kcmUgc29uIGVudm9sXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBSZWdpc3RlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBsYWluUGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHJvbGU6ICdST0xFX1VTRVInXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEVycm9yKCcnKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3JlZ2lzdGVyJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJpZ2UgdmVycyBsJ2FjY3VlaWwgb3UgbGUgbG9naW4gYXByw6hzIHN1Y2PDqHNcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvJyk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIkVycmV1ciBsb3JzIGRlIGwnaW5zY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJJbXBvc3NpYmxlIGRlIGNvbnRhY3RlciBsZSBHcmFuZCBTY3JpYmUgKEVycmV1ciByw6lzZWF1KVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXZpa2luZy1yb2NrLzkwIHAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCBzaGFkb3ctMnhsIGJhY2tkcm9wLWJsdXItc21cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBSZWpvaW5kcmUgbGEgR3VpbGRlXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtOTAwLzQwIGJvcmRlciBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC0yMDAgcC0zIHJvdW5kZWQgbWItNiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBOT00gRCdVVElMSVNBVEVVUiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Ob20gZGUgY29kZSAoUHNldWRvKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBLcm9rbW91XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEVNQUlMICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPkVtYWlsIGRlIGNvbnRhY3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidmlraW5nQGJlcmsuZnJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogUsOUTEUgKETDqWrDoCBmb25jdGlvbm5lbCkgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+UmFuZyBhdSBzZWluIGRlIGxhIEd1aWxkZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHJvbGU6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9VU0VSXCI+QWJvbm7DqSAoTGVjdGV1cik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfQVVURVVSXCI+QXV0ZXVyIChOYXJyYXRldXIpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0VESVRFVVJcIj7DiWRpdGV1ciAoR2FyZGllbik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfREVTSUdORVJcIj5EZXNpZ25ldXIgKEFydGlzYW4pPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0ZPVVJOSVNTRVVSXCI+Rm91cm5pc3NldXIgZGUgZG9ubsOpZXMgKFNjcmliZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfQURNSU5cIj5BZG1pbmlzdHJhdGV1ciAoQ2hlZiBkZSBsYSBHdWlsZGUpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9UIERFIFBBU1NFICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPk1vdCBkZSBwYXNzZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLigKLigKLigKLigKLigKLigKLigKLigKJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBsYWluUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBwbGFpblBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtdmlraW5nLWRhcmsgZm9udC1leHRyYWJvbGQgcHktNCByb3VuZGVkIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgc2hhZG93LWxnIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtdC00XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBHcmF2ZXIgbW9uIG5vbVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcnQgYXMgQ2hhcnRKUywgQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEFyY0VsZW1lbnQsIFBvaW50RWxlbWVudCwgTGluZUVsZW1lbnQsXHJcbn0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBCYXIsIERvdWdobnV0LCBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEFyY0VsZW1lbnQsIFBvaW50RWxlbWVudCwgTGluZUVsZW1lbnQpO1xyXG5cclxuY29uc3QgU3RhdHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtib3hPZmZpY2VEYXRhLCBzZXRCb3hPZmZpY2VEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwb3B1bGF0aW9uRGF0YSwgc2V0UG9wdWxhdGlvbkRhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RpbWVsaW5lRGF0YSwgc2V0VGltZWxpbmVEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBsb2FkQ1NWID0gKHVybCwgY2FsbGJhY2spID0+IHtcclxuICAgIGZldGNoKHVybClcclxuICAgICAgLnRoZW4ociA9PiByLm9rID8gci50ZXh0KCkgOiBudWxsKVxyXG4gICAgICAudGhlbih0eHQgPT4ge1xyXG4gICAgICAgIGlmKCF0eHQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IHR4dC50cmltKCkuc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggPCAyKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IGxpbmVzWzBdLnNwbGl0KCc7JykubWFwKGggPT4gaC50cmltKCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBsaW5lcy5zbGljZSgxKS5tYXAobCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBsLnNwbGl0KCc7JykubWFwKHYgPT4gdi50cmltKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4gKHsuLi5hY2MsIFtoXTogdmFsc1tpXX0pLCB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2JveF9vZmZpY2UuY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgc2V0Qm94T2ZmaWNlRGF0YSh7XHJcbiAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0ZpbG0nXSksXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICBsYWJlbDogJ00kJyxcclxuICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydCb3ggT2ZmaWNlIChNaWxsaW9ucyAkKSddKSksXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsnIzdmMWQxZCcsICcjZGMyNjI2JywgJyNkOTc3MDYnXSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzI5MjUyNCcsXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvYmVya19wb3B1bGF0aW9uLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldFBvcHVsYXRpb25EYXRhKHtcclxuICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnR3JvdXBlJ10pLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ1BvcHVsYXRpb24nXSkpLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyNkOTc3MDYnLCAnIzdmMWQxZCcsICcjNTc1MzRlJywgJyNhOGEyOWUnXSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzFjMTkxNycsXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvZHJhZ29uc190aW1lbGluZS5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVsaW5lRGF0YSh7XHJcbiAgICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnQW5uw6llJ10pLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnRXNww6hjZXMnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnRXNww6hjZXMgUmVjZW5zw6llcyddKSksXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2Q5NzcwNicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjE3LCAxMTksIDYsIDAuMiknLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICB0ZW5zaW9uOiAwLjMsXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICBwbHVnaW5zOiB7IGxlZ2VuZDogeyBsYWJlbHM6IHsgY29sb3I6ICcjZTdlNWU0JywgZm9udDogeyBmYW1pbHk6ICdzZXJpZicgfSB9IH0gfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB5OiB7IHRpY2tzOiB7IGNvbG9yOiAnI2E4YTI5ZScgfSwgZ3JpZDogeyBjb2xvcjogJyM0NDQwM2MnIH0gfSxcclxuICAgICAgeDogeyB0aWNrczogeyBjb2xvcjogJyNhOGEyOWUnIH0sIGdyaWQ6IHsgY29sb3I6ICcjNDQ0MDNjJyB9IH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgZHJvcC1zaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgIEwnT2JzZXJ2YXRvaXJlIGRlIEJlcmtcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctbGlnaHQgdGV4dC1sZyBpdGFsaWMgYm9yZGVyLWIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIGlubGluZS1ibG9jayBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICBSZWNlbnNlbWVudCBvZmZpY2llbCBkZSBsJ2FyY2hpcGVsXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1kcmFnb24gdGV4dC13aGl0ZSBtYi02XCI+VHLDqXNvciBkZSBHdWVycmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveE9mZmljZURhdGEgPyA8QmFyIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2JveE9mZmljZURhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5DaGFyZ2VtZW50Li4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1kcmFnb24gdGV4dC13aGl0ZSBtYi02XCI+Q2xhbnMgJiBUcmlidXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9wdWxhdGlvbkRhdGEgPyA8RG91Z2hudXQgb3B0aW9ucz17ey4uLm9wdGlvbnMsIHNjYWxlczp7fX19IGRhdGE9e3BvcHVsYXRpb25EYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+Q2hhcmdlbWVudC4uLjwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtNiByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCBtZDpjb2wtc3Bhbi0yIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1kcmFnb24gdGV4dC13aGl0ZSBtYi02XCI+Q2hyb25vbG9naWUgZGVzIETDqWNvdXZlcnRlczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtODAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGltZWxpbmVEYXRhID8gPExpbmUgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17dGltZWxpbmVEYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+Q2hhcmdlbWVudC4uLjwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHNQYWdlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lUGFnZSIsIkZvcnVtUGFnZSIsIkFydGljbGVQYWdlIiwiU3RhdHNQYWdlIiwiTmF2YmFyIiwiUmVnaXN0ZXJQYWdlIiwiTG9naW5QYWdlIiwiQWRtaW5EYXNoYm9hcmQiLCJjb25zb2xlIiwibG9nIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInBhdGgiLCJlbGVtZW50Iiwicm9vdEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsImVycm9yIiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiQXJyYXkiLCJmcm9tIiwiaXNBcnJheSIsIl9hcnJheUxpa2VUb0FycmF5IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlc3QiLCJuZXh0IiwicHVzaCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ3N2Q2hhcnQiLCJBcnRpY2xlRm9ybSIsIl9yZWYiLCJfcmVmJGlkIiwiaWQiLCJvblN1Y2Nlc3MiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwidGl0bGUiLCJzZXRUaXRsZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImJsb2NzIiwic2V0QmxvY3MiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm11c2ljTGlicmFyeSIsInNldE11c2ljTGlicmFyeSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiZGF0YXNldExpYnJhcnkiLCJzZXREYXRhc2V0TGlicmFyeSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2giLCJyZXMiLCJvayIsImpzb24iLCJkYXRhIiwiZXJyIiwiRXJyb3IiLCJhZGRCbG9jIiwidHlwZSIsImNvbmNhdCIsImNvbnRlbnQiLCJtZWRpYVVybCIsInZpelR5cGUiLCJmaWxlIiwiRGF0ZSIsIm5vdyIsInJlbW92ZUJsb2MiLCJpbmRleFRvUmVtb3ZlIiwiZmlsdGVyIiwiXyIsImluZGV4IiwidXBkYXRlQmxvYyIsImZpZWxkIiwibmV3QmxvY3MiLCJoYW5kbGVGaWxlQ2hhbmdlIiwidGFyZ2V0IiwiZmlsZXMiLCJzdGFydHNXaXRoIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlU3VibWl0IiwiX3JlZjIiLCJfY2FsbGVlIiwiZm9ybURhdGEiLCJ0b2tlbiIsInJlc3BvbnNlIiwiZXJyb3JEYXRhIiwiX3QiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmb3JFYWNoIiwiYmxvYyIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiYWxlcnQiLCJtZXNzYWdlIiwiX3giLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm1hcCIsImtleSIsIm9uQ2xpY2siLCJhY2NlcHQiLCJzb3VyY2UiLCJkaXNhYmxlZCIsImNzdlVybCIsImVudHJpZXMiLCJfcmVmMyIsIl9yZWY0IiwiZm9sZGVyIiwibGFiZWwiLCJ0b1VwcGVyQ2FzZSIsIlRvb2xCdG4iLCJfcmVmNSIsIlBhcGEiLCJCYXJDaGFydCIsIkJhciIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJMaW5lQ2hhcnQiLCJMaW5lIiwiUGllQ2hhcnQiLCJQaWUiLCJDZWxsIiwiQ09MT1JTIiwiX3JlZiR2aXpUeXBlIiwic2V0RGF0YSIsInNldEVycm9yIiwidGV4dCIsImNzdlRleHQiLCJwYXJzZSIsImhlYWRlciIsImR5bmFtaWNUeXBpbmciLCJza2lwRW1wdHlMaW5lcyIsImNvbXBsZXRlIiwicmVzdWx0cyIsImtleXMiLCJ4S2V5IiwieUtleSIsInJlbmRlckNoYXJ0Iiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlIiwiZGF0YUtleSIsImNvbnRlbnRTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJzdHJva2VXaWR0aCIsImRvdCIsImFjdGl2ZURvdCIsImN4IiwiY3kiLCJsYWJlbExpbmUiLCJwZXJjZW50IiwidG9GaXhlZCIsIm91dGVyUmFkaXVzIiwiZmlsbCIsIm5hbWVLZXkiLCJlbnRyeSIsImN1cnNvciIsInJhZGl1cyIsIndpZHRoIiwiaGVpZ2h0Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiRGF0YVByb3ZpZGVyU3BhY2UiLCJkYXRhc2V0cyIsInNldEZpbGUiLCJwcmV2aWV3Iiwic2V0UHJldmlldyIsInNldEhlYWRlcnMiLCJjb2x1bW5NYXBwaW5nIiwic2V0Q29sdW1uTWFwcGluZyIsImRhdGFzZXROYW1lIiwic2V0RGF0YXNldE5hbWUiLCJpc1VwbG9hZGluZyIsInNldElzVXBsb2FkaW5nIiwic2VsZWN0ZWRGaWxlIiwicmVwbGFjZSIsImNvbHMiLCJpbml0aWFsTWFwcGluZyIsImgiLCJ0b2dnbGVUeXBlIiwicHJldiIsImhhbmRsZVVwbG9hZCIsInBheWxvYWQiLCJtZXRhZGF0YSIsImNvbHVtbnMiLCJ1cGxvYWRlZEF0IiwidG9JU09TdHJpbmciLCJyb3dDb3VudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInJvdyIsImRzIiwicm93c0NvdW50IiwiTGluayIsInVzZU5hdmlnYXRlIiwiand0RGVjb2RlIiwiX3VzZXIiLCJfdXNlcjIiLCJfdXNlcjMiLCJuYXZpZ2F0ZSIsInVzZXIiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiY2FuU2VlRGFzaGJvYXJkIiwicm9sZXMiLCJ0byIsIkZyYWdtZW50IiwicHNldWRvIiwidXNlUmVmIiwiU3VzcGVuc2UiLCJDYW52YXMiLCJ1c2VGcmFtZSIsInVzZVRocmVlIiwidXNlR0xURiIsInVzZUFuaW1hdGlvbnMiLCJDZW50ZXIiLCJIdG1sIiwidXNlVGV4dHVyZSIsIlN0YXJzIiwiTU9ERUxfUEFUSCIsIlRFWFRVUkVfUEFUSCIsIkFOSU1BVElPTl9OQU1FIiwiRHJhZ29uTW9kZWwiLCJ2aXRlc3NlUm90YXRpb24iLCJ2aXRlc3NlQW5pbWF0aW9uIiwiZmFjdGV1clRhaWxsZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiX3VzZUdMVEYiLCJzY2VuZSIsImFuaW1hdGlvbnMiLCJ0ZXh0dXJlIiwiX3VzZVRocmVlIiwidmlld3BvcnQiLCJiYXNlU2NhbGUiLCJmaW5hbFNjYWxlIiwiZmxpcFkiLCJjb2xvclNwYWNlIiwiZ3JvdXAiLCJfdXNlQW5pbWF0aW9ucyIsImFjdGlvbnMiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJ0cmF2ZXJzZSIsImNoaWxkIiwiaXNNZXNoIiwibWF0ZXJpYWwiLCJuZWVkc1VwZGF0ZSIsImFjdGlvbiIsInJlc2V0IiwiZmFkZUluIiwicGxheSIsInRpbWVTY2FsZSIsInRvZ2dsZUFuaW1hdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsInBhdXNlZCIsImN1cnJlbnQiLCJyb3RhdGlvbiIsIl9leHRlbmRzIiwicmVmIiwib2JqZWN0Iiwib25Qb2ludGVyT3ZlciIsInN0eWxlIiwib25Qb2ludGVyT3V0Iiwic2NhbGUiLCJwb3NpdGlvbiIsIk5pZ2h0RnVyeVNjZW5lIiwicm90U3BlZWQiLCJzZXRSb3RTcGVlZCIsImFuaW1TcGVlZCIsInNldEFuaW1TcGVlZCIsInNpemVGYWN0b3IiLCJzZXRTaXplRmFjdG9yIiwiaGFuZGxlUmVzZXQiLCJzaGFkb3dzIiwiY2FtZXJhIiwiZm92IiwiYXR0YWNoIiwiYXJncyIsImRlcHRoIiwiY291bnQiLCJmYWN0b3IiLCJzYXR1cmF0aW9uIiwiZmFkZSIsInNwZWVkIiwiaW50ZW5zaXR5IiwiZmFsbGJhY2siLCJjZW50ZXIiLCJ0b3AiLCJtaW4iLCJtYXgiLCJzdGVwIiwicGFyc2VGbG9hdCIsInByZWxvYWQiLCJfY3VycmVudFVzZXIiLCJfZGF0YSRhbGxVc2VycyIsIl9kYXRhJG1hbmFnZW1lbnRBcnRpYyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiY3VycmVudFVzZXIiLCJpc0Z1bGxBZG1pbiIsImlzUHJvdmlkZXIiLCJpc0Rlc2lnbmVyIiwiaXNFZGl0b3IiLCJsb2FkU3RhdHMiLCJoYW5kbGVQcm9tb3RlIiwidXNlcklkIiwidXBkYXRlZERhdGEiLCJhbGxVc2VycyIsIm5ld1JvbGVzIiwidXNlcnNDb3VudCIsImFydGljbGVzQ291bnQiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJtYW5hZ2VtZW50QXJ0aWNsZXMiLCJhcnQiLCJhdXRob3IiLCJjcmVhdGVkQXQiLCJ1c2VQYXJhbXMiLCJfdXNlUGFyYW1zIiwiYXJ0aWNsZSIsInNldEFydGljbGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwic2V0VXNlciIsInZpZXciLCJzZXRWaWV3Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJkZWNvZGVkIiwiZmV0Y2hBcnRpY2xlcyIsImhhbmRsZURlbGV0ZSIsIl9jYWxsZWUyIiwiX3QyIiwiX2NvbnRleHQyIiwiY29uZmlybSIsImFJZCIsInNwbGl0IiwicG9wIiwiaGFuZGxlU3VjY2VzcyIsImhhc1JvbGUiLCJyb2xlIiwiX3VzZXIkcm9sZXMiLCJjYW5DcmVhdGUiLCJfYXJ0aWNsZSRhdXRob3IiLCJfYXJ0aWNsZSRhdXRob3IyIiwiX2FydGljbGUkYXV0aG9yMyIsImNsZWFuSWQiLCJpc093bmVyIiwidXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNldEl0ZW0iLCJocmVmIiwicGxhaW5QYXNzd29yZCIsInNldEZvcm1EYXRhIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIlRpdGxlIiwiQXJjRWxlbWVudCIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiRG91Z2hudXQiLCJyZWdpc3RlciIsImJveE9mZmljZURhdGEiLCJzZXRCb3hPZmZpY2VEYXRhIiwicG9wdWxhdGlvbkRhdGEiLCJzZXRQb3B1bGF0aW9uRGF0YSIsInRpbWVsaW5lRGF0YSIsInNldFRpbWVsaW5lRGF0YSIsImxvYWRDU1YiLCJ1cmwiLCJjYWxsYmFjayIsInR4dCIsImxpbmVzIiwidHJpbSIsInZhbHMiLCJyZWR1Y2UiLCJhY2MiLCJsYWJlbHMiLCJib3JkZXJXaWR0aCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwidGVuc2lvbiIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInBsdWdpbnMiLCJsZWdlbmQiLCJmb250IiwiZmFtaWx5Iiwic2NhbGVzIiwidGlja3MiLCJncmlkIiwieCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9