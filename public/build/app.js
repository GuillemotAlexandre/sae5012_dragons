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
/* harmony import */ var _components_ArticleShow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ArticleShow */ "./assets/components/ArticleShow.jsx");
/* harmony import */ var _pages_AdminDashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/AdminDashboard */ "./assets/pages/AdminDashboard.jsx");




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
    path: "/article/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ArticleShow__WEBPACK_IMPORTED_MODULE_12__["default"], null)
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
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_AdminDashboard__WEBPACK_IMPORTED_MODULE_13__["default"], null)
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
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _CsvChart__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./CsvChart */ "./assets/components/CsvChart.jsx");
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    summary = _useState4[0],
    setSummary = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    blocs = _useState6[0],
    setBlocs = _useState6[1];

  // Initialisation avec des tableaux vides pour éviter les crashs
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    musicLibrary = _useState8[0],
    setMusicLibrary = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    datasetLibrary = _useState0[0],
    setDatasetLibrary = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];

  // --- 1. CHARGEMENT DES DONNÉES DE L'ARTICLE (SI MODIFICATION) ---
  (0,react__WEBPACK_IMPORTED_MODULE_42__.useEffect)(function () {
    if (id) {
      setLoading(true);
      fetch("/api/articles/".concat(id)).then(function (res) {
        return res.json();
      }).then(function (data) {
        setTitle(data.title);
        setSummary(data.summary);

        // On formate les blocs reçus de l'API pour qu'ils marchent dans le formulaire
        var formattedBlocs = (data.blocs || []).sort(function (a, b) {
          return a.position - b.position;
        }).map(function (b) {
          var vizType = 'bar';
          var content = b.content || '';

          // Si c'est un graphique, on sépare le type et l'URL (format "type::url")
          if (b.type === 'stats' || b.type === 'viz') {
            var parts = content.split('::');
            vizType = parts[0] || 'bar';
            content = parts[1] || ''; // L'URL du CSV devient le content/mediaUrl
          }
          return {
            id: b.id,
            // On garde l'ID pour savoir que ce bloc existe déjà
            type: b.type,
            content: content,
            // Texte ou URL
            mediaUrl: content,
            // Pour prévisualiser images/sons
            vizType: vizType,
            file: null
          };
        });
        setBlocs(formattedBlocs);
        setLoading(false);
      })["catch"](function (err) {
        console.error("Erreur chargement article", err);
        setLoading(false);
      });
    }
  }, [id]);

  // --- CHARGEMENT DES LIBRAIRIES (Musique / Datasets) ---
  (0,react__WEBPACK_IMPORTED_MODULE_42__.useEffect)(function () {
    // 1. Musiques
    fetch('/api/music/list').then(function (res) {
      return res.ok ? res.json() : [];
    }).then(function (data) {
      if (data) setMusicLibrary(data);
    })["catch"](function (err) {
      return console.error("Erreur musique", err);
    });

    // 2. Datasets
    fetch('/api/list-datasets').then(function (res) {
      if (!res.ok) throw new Error("Erreur API Dataset");
      return res.json();
    }).then(function (data) {
      if (Array.isArray(data)) {
        setDatasetLibrary(data);
      } else {
        setDatasetLibrary([]);
      }
    })["catch"](function (err) {
      console.error("Impossible de charger les datasets", err);
      setDatasetLibrary([]);
    });
  }, []);

  // --- GESTION DES BLOCS ---
  var addBloc = function addBloc(type) {
    setBlocs([].concat(_toConsumableArray(blocs), [{
      type: type,
      content: '',
      mediaUrl: '',
      vizType: 'bar',
      file: null
      // Pas d'ID ici, c'est un nouveau bloc
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

  // --- SOUMISSION (HYBRIDE : POST ou PATCH) ---
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var token, articleData, response, formData, _response, errorData, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();
            setLoading(true);
            token = localStorage.getItem('token');
            _context.p = 1;
            if (!id) {
              _context.n = 5;
              break;
            }
            // 📝 MODE ÉDITION (PATCH JSON)
            // Attention : L'upload de nouveaux fichiers image n'est pas géré ici pour simplifier.
            // On met à jour textes, titres, choix musique/stats.
            articleData = {
              title: title,
              summary: summary,
              blocs: blocs.map(function (bloc, index) {
                var finalContent = bloc.content;

                // On reconstruit le format spécial pour les stats
                if (bloc.type === 'stats') {
                  // Si l'utilisateur a changé l'URL via le select, c'est dans bloc.mediaUrl
                  finalContent = "".concat(bloc.vizType, "::").concat(bloc.mediaUrl);
                } else if (bloc.type === 'music') {
                  finalContent = bloc.mediaUrl; // Le nom du fichier choisi
                } else if (bloc.type === 'image') {
                  // Si pas de nouveau fichier, on garde l'ancienne URL
                  finalContent = bloc.mediaUrl;
                }

                // Structure d'un bloc pour l'API
                var blocPayload = {
                  type: bloc.type,
                  position: index + 1,
                  content: finalContent
                };

                // Si le bloc avait déjà un ID, on l'envoie pour le mettre à jour (au lieu de le recréer)
                if (bloc.id) {
                  blocPayload['@id'] = "/api/blocs/".concat(bloc.id);
                }
                return blocPayload;
              })
            };
            _context.n = 2;
            return fetch("/api/articles/".concat(id), {
              method: 'PATCH',
              headers: {
                'Authorization': "Bearer ".concat(token),
                'Content-Type': 'application/merge-patch+json' // Standard API Platform
              },
              body: JSON.stringify(articleData)
            });
          case 2:
            response = _context.v;
            if (!response.ok) {
              _context.n = 3;
              break;
            }
            alert("Le récit a été réécrit avec succès !");
            onSuccess();
            _context.n = 4;
            break;
          case 3:
            throw new Error("Erreur lors de la modification");
          case 4:
            _context.n = 9;
            break;
          case 5:
            // ✨ MODE CRÉATION (POST FormData)
            // C'est ton code d'origine qui gère bien l'upload initial
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
            _context.n = 6;
            return fetch('/api/custom/articles/create', {
              method: 'POST',
              headers: {
                'Authorization': "Bearer ".concat(token)
              },
              body: formData
            });
          case 6:
            _response = _context.v;
            if (!_response.ok) {
              _context.n = 7;
              break;
            }
            alert("Votre récit a été gravé avec succès !");
            onSuccess();
            _context.n = 9;
            break;
          case 7:
            _context.n = 8;
            return _response.json();
          case 8:
            errorData = _context.v;
            alert("Erreur : " + (errorData.message || "Problème serveur"));
          case 9:
            _context.n = 11;
            break;
          case 10:
            _context.p = 10;
            _t = _context.v;
            console.error(_t);
            alert("Une erreur est survenue.");
          case 11:
            _context.p = 11;
            setLoading(false);
            return _context.f(11);
          case 12:
            return _context.a(2);
        }
      }, _callee, null, [[1, 10, 11, 12]]);
    }));
    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return (
    /*#__PURE__*/
    // MODIF : p-4 sur mobile, max-w-4xl pour limiter sur desktop
    react__WEBPACK_IMPORTED_MODULE_42___default().createElement("form", {
      onSubmit: handleSubmit,
      className: "bg-stone-900 p-4 md:p-8 border border-stone-800 shadow-2xl max-w-4xl mx-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("h2", {
      className: "text-2xl md:text-3xl font-dragon text-viking-gold mb-6 md:mb-8 text-center uppercase"
    }, id ? 'Modifier la Chronique' : 'Nouvelle Chronique'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("input", {
      type: "text",
      value: title,
      onChange: function onChange(e) {
        return setTitle(e.target.value);
      },
      className: "w-full bg-black/50 border border-stone-700 text-white p-3 md:p-4 text-xl md:text-2xl outline-none focus:border-viking-gold",
      placeholder: "Titre...",
      required: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("textarea", {
      value: summary,
      onChange: function onChange(e) {
        return setSummary(e.target.value);
      },
      className: "w-full bg-black/50 border border-stone-700 text-stone-300 p-3 md:p-4 h-24 outline-none focus:border-viking-gold",
      placeholder: "R\xE9sum\xE9...",
      required: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "space-y-6 mb-8"
    }, blocs.map(function (bloc, index) {
      return (
        /*#__PURE__*/
        // MODIF : p-4 sur mobile
        react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
          key: bloc.id || index,
          className: "bg-stone-800/50 p-4 md:p-6 border-l-4 border-viking-gold relative"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
          type: "button",
          onClick: function onClick() {
            return removeBloc(index);
          },
          className: "absolute top-2 right-2 text-stone-500 hover:text-red-500 text-xs font-bold uppercase transition p-2"
        }, "Supprimer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
          className: "text-viking-gold text-xs uppercase font-bold mb-4 tracking-widest"
        }, "Bloc ", index + 1, " : ", bloc.type), bloc.type === 'h2' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("input", {
          type: "text",
          value: bloc.content,
          onChange: function onChange(e) {
            return updateBloc(index, 'content', e.target.value);
          },
          className: "w-full bg-black border border-stone-600 p-3 text-white font-bold",
          placeholder: "Sous-titre..."
        }), bloc.type === 'paragraph' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("textarea", {
          value: bloc.content,
          onChange: function onChange(e) {
            return updateBloc(index, 'content', e.target.value);
          },
          className: "w-full bg-black border border-stone-600 p-3 text-stone-300 h-32",
          placeholder: "Texte..."
        }), bloc.type === 'image' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", null, !id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("input", {
          type: "file",
          accept: "image/*",
          onChange: function onChange(e) {
            return handleFileChange(index, e);
          },
          className: "text-stone-400 text-sm w-full"
        }), bloc.mediaUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("img", {
          src: bloc.mediaUrl,
          alt: "Preview",
          className: "mt-4 max-h-40 border border-stone-600"
        })), bloc.type === 'stats' &&
        /*#__PURE__*/
        // MODIF : grid-cols-1 sur mobile pour empiler contrôles et graphique
        react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
          className: "space-y-4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("label", {
          className: "text-stone-500 text-xs mb-1 block uppercase font-bold"
        }, "Donn\xE9es (CSV)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("select", {
          onChange: function onChange(e) {
            return updateBloc(index, 'mediaUrl', e.target.value);
          },
          className: "w-full bg-black border border-stone-600 p-3 text-white focus:border-viking-gold outline-none",
          value: bloc.mediaUrl || ""
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("option", {
          value: ""
        }, "-- Choisir un jeu de donn\xE9es --"), Array.isArray(datasetLibrary) && datasetLibrary.map(function (d) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("option", {
            key: d.id,
            value: d.source
          }, d.name);
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("label", {
          className: "text-stone-500 text-xs mb-1 block uppercase font-bold"
        }, "Type de Graphique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
          className: "flex gap-2"
        }, ['bar', 'line', 'pie'].map(function (type) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
            key: type,
            type: "button",
            onClick: function onClick() {
              return updateBloc(index, 'vizType', type);
            },
            className: "px-3 py-2 text-xs font-bold uppercase border transition flex-1 md:flex-none ".concat(bloc.vizType === type ? 'bg-viking-gold text-black border-viking-gold' : 'bg-black text-stone-500 border-stone-700 hover:text-white')
          }, type);
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
          className: "bg-black/20 border border-stone-800 flex items-center justify-center min-h-[200px] rounded p-2 overflow-hidden"
        }, bloc.mediaUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
          className: "w-full h-full min-h-[200px]"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_CsvChart__WEBPACK_IMPORTED_MODULE_43__["default"], {
          csvUrl: bloc.mediaUrl,
          vizType: bloc.vizType || 'bar'
        })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
          className: "text-stone-600 text-xs italic"
        }, "S\xE9lectionnez un fichier..."))), bloc.type === 'music' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("select", {
          onChange: function onChange(e) {
            return updateBloc(index, 'mediaUrl', e.target.value);
          },
          className: "w-full bg-black border border-stone-600 p-3 text-white",
          value: bloc.mediaUrl || ""
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("option", {
          value: ""
        }, "-- Choisir une m\xE9lodie --"), musicLibrary && Object.entries(musicLibrary).map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            folder = _ref4[0],
            files = _ref4[1];
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("optgroup", {
            key: folder,
            label: folder.toUpperCase()
          }, Array.isArray(files) && files.map(function (file) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("option", {
              key: file,
              value: "".concat(folder, "/").concat(file)
            }, file);
          }));
        })))
      );
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "flex flex-wrap gap-2 justify-center mb-10 pb-10 border-b border-stone-800"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(ToolBtn, {
      label: "Titre H2",
      onClick: function onClick() {
        return addBloc('h2');
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(ToolBtn, {
      label: "Paragraphe",
      onClick: function onClick() {
        return addBloc('paragraph');
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(ToolBtn, {
      label: "Image",
      onClick: function onClick() {
        return addBloc('image');
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(ToolBtn, {
      label: "Graphique",
      onClick: function onClick() {
        return addBloc('stats');
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(ToolBtn, {
      label: "Musique",
      onClick: function onClick() {
        return addBloc('music');
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      type: "submit",
      disabled: loading,
      className: "w-full bg-viking-gold text-black font-black uppercase py-4 hover:bg-yellow-500 transition shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-50 text-sm md:text-base tracking-widest"
    }, loading ? id ? 'Réécriture...' : 'Gravure en cours...' : id ? 'Mettre à jour le Récit' : 'Publier la Chronique'))
  );
};

// MODIF : Bouton responsive (flex-grow)
var ToolBtn = function ToolBtn(_ref5) {
  var label = _ref5.label,
    onClick = _ref5.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    type: "button",
    onClick: onClick,
    className: "px-4 py-3 md:py-2 bg-stone-800 text-stone-300 border border-stone-700 hover:border-viking-gold hover:text-white transition text-xs uppercase font-bold tracking-wider flex-grow md:flex-grow-0 rounded"
  }, "+ ", label);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleForm);

/***/ },

/***/ "./assets/components/ArticleShow.jsx"
/*!*******************************************!*\
  !*** ./assets/components/ArticleShow.jsx ***!
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
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__);
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
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _CsvChart__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./CsvChart */ "./assets/components/CsvChart.jsx");
/* harmony import */ var _VikingPlayer__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./VikingPlayer */ "./assets/components/VikingPlayer.jsx");
/* harmony import */ var _CommentSection__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./CommentSection */ "./assets/components/CommentSection.jsx");
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./StarRating */ "./assets/components/StarRating.jsx");
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
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import CsvChart from "./CsvChart";
// import VikingPlayer from "./VikingPlayer"; // 👈 Import du nouveau player
// import CommentSection from "./CommentSection";
// import StarRating from "./StarRating";

// const ArticleShow = () => {
//     const { id } = useParams();
//     const [article, setArticle] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // 1. Vérif Token pour l'interface (User State)
//         const token = localStorage.getItem('token');
//         if (token) {
//             try { setUser(jwtDecode(token)); } catch (e) {}
//         }

//         // 2. Préparation des En-têtes (HEADERS)
//         // On prépare le badge pour entrer dans le donjon
//         const headers = {
//             'Accept': 'application/ld+json'
//         };
//         if (token) {
//             headers['Authorization'] = `Bearer ${token}`;
//         }

//         // 3. Fetch Article AVEC les headers
//         fetch(`/api/articles/${id}`, { headers: headers }) // 👈 AJOUT ICI
//             .then((res) => (res.ok ? res.json() : Promise.reject("Accès refusé ou introuvable")))
//             .then((data) => {
//                 setArticle(data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.error(err);
//                 setLoading(false);
//             });
//     }, [id]);

//     if (loading)
//         return (
//             <div className="text-center text-viking-gold p-10 animate-pulse">
//                 Invocation du récit...
//             </div>
//         );
//     if (!article)
//         return (
//             <div className="text-center text-red-500 p-10">
//                 Parchemin introuvable.
//             </div>
//         );

//     // 🔎 ON CHERCHE LA MUSIQUE ICI
//     const musicBloc = article.blocs?.find((b) => b.type === "music");
//     // On nettoie le chemin (parfois il a /uploads/..., parfois non)
//     const musicSrc = musicBloc ? `/musique/${musicBloc.content}` : null;

//     // On prépare les autres blocs (sans la musique pour éviter les doublons)
//     const contentBlocs =
//         article.blocs
//             ?.filter((b) => b.type !== "music")
//             .sort((a, b) => a.position - b.position) || [];

//     const handleRate = async (score) => {
//         const token = localStorage.getItem("token");
//         if (!token) return alert("Il faut être connecté pour noter !");

//         try {
//             const res = await fetch("/api/ratings", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/ld+json",
//                     Authorization: `Bearer ${token}`,
//                 },
//                 body: JSON.stringify({
//                     value: score,
//                     article: `/api/articles/${id}`,
//                 }),
//             });
//             if (res.ok) {
//                 alert("Votre note a été gravée !");
//                 // Optionnel : Recharger l'article pour voir la nouvelle moyenne
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-8 min-h-screen bg-stone-900 border-x border-stone-800 shadow-2xl">
//             <div className="flex justify-between items-center mb-6">
//                 <Link
//                     to="/forum"
//                     className="text-stone-500 hover:text-viking-gold mb-8 inline-block text-sm uppercase tracking-widest"
//                 >
//                     ← Retour au Hall
//                 </Link>
//                 <div className="flex justify-center items-center gap-4 mb-6">
//                     <StarRating
//                         articleId={id}
//                         currentRating={article.averageRating}
//                         onRate={handleRate}
//                     />
//                     <span className="text-stone-400 text-sm">
//                         Moyenne : {article.averageRating || "0"}/5
//                     </span>
//                 </div>
//             </div>

//             <h1 className="text-5xl font-dragon text-viking-gold mb-6 text-center uppercase tracking-widest drop-shadow-lg">
//                 {article.title}
//             </h1>

//             <div className="bg-stone-800/50 p-8 border-l-4 border-viking-gold mb-8 italic text-stone-300 text-lg leading-relaxed shadow-inner">
//                 {article.summary}
//             </div>

//             {/* 🎵 LE PLAYER EST ICI (Juste sous le résumé) */}
//             {musicSrc && (
//                 <div className="mb-12 animate-fade-in-up">
//                     <VikingPlayer src={musicSrc} autoPlay={true} />
//                 </div>
//             )}

//             {/* Le reste du contenu */}
//             <div className="space-y-12">
//                 {contentBlocs.map((bloc) => {
//                     switch (bloc.type) {
//                         case "h2":
//                             return (
//                                 <h2
//                                     key={bloc.id}
//                                     className="text-3xl font-bold text-white border-b border-stone-700 pb-2 mt-8"
//                                 >
//                                     {bloc.content}
//                                 </h2>
//                             );

//                         case "paragraph":
//                             return (
//                                 <p
//                                     key={bloc.id}
//                                     className="text-stone-300 leading-relaxed text-lg whitespace-pre-line text-justify"
//                                 >
//                                     {bloc.content}
//                                 </p>
//                             );

//                         case "image":
//                             return (
//                                 <figure
//                                     key={bloc.id}
//                                     className="text-center my-8"
//                                 >
//                                     <img
//                                         src={bloc.content}
//                                         alt="Illustration"
//                                         className="mx-auto max-h-[500px] border-4 border-stone-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded"
//                                     />
//                                 </figure>
//                             );

//                         case "stats":
//                         case "viz":
//                             const parts = bloc.content
//                                 ? bloc.content.split("::")
//                                 : [];
//                             return (
//                                 <div
//                                     key={bloc.id}
//                                     className="bg-black/40 border border-stone-700 p-6 rounded-lg my-8"
//                                 >
//                                     <h3 className="text-viking-gold font-bold text-sm uppercase mb-4 tracking-widest text-center">
//                                         📊 Données du Clan
//                                     </h3>
//                                     <div className="h-96">
//                                         <CsvChart
//                                             csvUrl={parts[1]}
//                                             vizType={parts[0] || "bar"}
//                                         />
//                                     </div>
//                                 </div>
//                             );
//                         default:
//                             return null;
//                     }
//                 })}
//             </div>

//             <div className="mt-20 pt-10 border-t border-stone-800 text-center text-stone-600 text-xs uppercase tracking-widest">
//                 Gravé par {article.author?.pseudo || "Un inconnu"} •{" "}
//                 {new Date(article.createdAt).toLocaleDateString()}
//             </div>
//             <CommentSection articleId={id} />
//         </div>
//     );
// };

// export default ArticleShow;







var ArticleShow = function ArticleShow() {
  var _article$blocs, _article$author;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_36__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_34__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    article = _useState2[0],
    setArticle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_34__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_34__.useEffect)(function () {
    fetch("/api/articles/".concat(id)).then(function (res) {
      return res.ok ? res.json() : Promise.reject("Erreur");
    }).then(function (data) {
      console.log("Données reçues :", data);
      setArticle(data);
      setLoading(false);
    })["catch"](function (err) {
      console.error(err);
      setLoading(false);
    });
  }, [id]);
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
    className: "text-center text-viking-gold p-10 animate-pulse"
  }, "Invocation du r\xE9cit...");
  if (!article) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
    className: "text-center text-red-500 p-10"
  }, "Parchemin introuvable.");

  // --- LOGIQUE D'EXTRACTION ---
  var customStyles = {};
  var rawConfig = article.designConfig;
  if (rawConfig) {
    try {
      customStyles = typeof rawConfig === "string" ? JSON.parse(rawConfig) : rawConfig;
    } catch (e) {
      console.error("Erreur de décodage des styles", e);
    }
  }

  // --- DÉFINITION DES COULEURS ---
  // On utilise les valeurs de la BDD, sinon blanc par défaut (sera géré par la classe CSS)
  var finalTitleColor = customStyles.titleColor || "#ffffff";
  var finalContentBg = customStyles.contentBg || "rgba(41, 37, 36, 0.5)";
  var musicBloc = (_article$blocs = article.blocs) === null || _article$blocs === void 0 ? void 0 : _article$blocs.find(function (b) {
    return b.type === "music";
  });
  var musicSrc = musicBloc ? "/musique/".concat(musicBloc.content) : null;
  var contentBlocs = article.blocs ? _toConsumableArray(article.blocs).filter(function (b) {
    return b.type !== "music";
  }).sort(function (a, b) {
    return a.position - b.position;
  }) : [];
  var handleRate = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(score) {
      var token, res, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            token = localStorage.getItem("token");
            if (token) {
              _context.n = 1;
              break;
            }
            return _context.a(2, alert("Il faut être connecté pour noter !"));
          case 1:
            _context.p = 1;
            _context.n = 2;
            return fetch("/api/ratings", {
              method: "POST",
              headers: {
                "Content-Type": "application/ld+json",
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                value: score,
                article: "/api/articles/".concat(id)
              })
            });
          case 2:
            res = _context.v;
            if (res.ok) {
              alert("Votre note a été gravée !");
              // Optionnel : Recharger l'article pour voir la nouvelle moyenne
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error(_t);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function handleRate(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return (
    /*#__PURE__*/
    // MODIF : p-4 sur mobile, p-8 sur desktop
    react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
      className: "max-w-4xl mx-auto p-4 md:p-8 min-h-screen bg-stone-900 md:border-x border-stone-800 shadow-2xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
      className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Link, {
      to: "/forum",
      className: "text-stone-500 hover:text-viking-gold inline-block text-xs md:text-sm uppercase tracking-widest order-2 md:order-1"
    }, "\u2190 Retour au Hall"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
      className: "flex justify-between md:justify-center items-center gap-4 w-full md:w-auto order-1 md:order-2 bg-stone-800/50 p-3 rounded md:bg-transparent md:p-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement(_StarRating__WEBPACK_IMPORTED_MODULE_40__["default"], {
      articleId: id,
      currentRating: article.averageRating,
      onRate: handleRate
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("span", {
      className: "text-stone-400 text-xs md:text-sm"
    }, "Moyenne : ", article.averageRating || "0", "/5"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("h1", {
      style: {
        "--article-title-color": finalTitleColor
      }
      // MODIF : text-3xl mobile, break-words pour éviter débordement
      ,
      className: "article-dynamic-title text-3xl md:text-5xl font-dragon mb-6 text-center uppercase tracking-widest drop-shadow-lg transition-all duration-500 break-words leading-tight"
    }, article.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
      style: {
        backgroundColor: finalContentBg
      }
      // MODIF : p-5 sur mobile, text-base
      ,
      className: "p-5 md:p-8 border-l-4 border-viking-gold mb-8 italic text-stone-300 text-base md:text-lg leading-relaxed shadow-inner transition-all duration-500 text-justify"
    }, article.summary), musicSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
      className: "mb-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement(_VikingPlayer__WEBPACK_IMPORTED_MODULE_38__["default"], {
      src: musicSrc,
      autoPlay: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
      className: "space-y-8 md:space-y-12"
    }, contentBlocs.map(function (bloc) {
      switch (bloc.type) {
        case "h2":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("h2", {
            key: bloc.id
            // MODIF : text-2xl mobile
            ,
            className: "text-2xl md:text-3xl font-bold text-white border-b border-stone-700 pb-2 mt-8 break-words"
          }, bloc.content);
        case "paragraph":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("p", {
            key: bloc.id
            // MODIF : text-base mobile
            ,
            className: "text-stone-300 leading-relaxed text-base md:text-lg whitespace-pre-line text-justify"
          }, bloc.content);
        case "image":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("figure", {
            key: bloc.id,
            className: "text-center my-8"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("img", {
            src: bloc.content,
            alt: "Illustration"
            // MODIF : max-w-full pour ne pas dépasser
            ,
            className: "mx-auto max-w-full md:max-h-[500px] border-4 border-stone-800 shadow-xl rounded"
          }));
        case "stats":
        case "viz":
          var parts = bloc.content ? bloc.content.split("::") : [];
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
            key: bloc.id,
            className: "bg-black/40 border border-stone-700 p-4 md:p-6 rounded-lg my-8 shadow-inner"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("h3", {
            className: "text-viking-gold font-bold text-xs md:text-sm uppercase mb-4 tracking-widest text-center"
          }, "\uD83D\uDCCA Donn\xE9es du Clan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
            className: "h-64 md:h-96 relative"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement(_CsvChart__WEBPACK_IMPORTED_MODULE_37__["default"], {
            csvUrl: parts[1],
            vizType: parts[0] || "bar"
          })));
        default:
          return null;
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
      className: "mt-12 md:mt-20 pt-8 md:pt-10 border-t border-stone-800 text-center text-stone-500 text-[10px] md:text-xs uppercase tracking-widest"
    }, "Grav\xE9 par ", ((_article$author = article.author) === null || _article$author === void 0 ? void 0 : _article$author.pseudo) || "Un éclaireur", " \u2022", " ", new Date(article.createdAt).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement(_CommentSection__WEBPACK_IMPORTED_MODULE_39__["default"], {
      articleId: id
    }))
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleShow);

/***/ },

/***/ "./assets/components/CommentSection.jsx"
/*!**********************************************!*\
  !*** ./assets/components/CommentSection.jsx ***!
  \**********************************************/
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_32__);
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


// Sous-composant pour UN commentaire (récursif)
var _CommentItem = function CommentItem(_ref) {
  var _comment$author;
  var comment = _ref.comment,
    onVote = _ref.onVote,
    onReply = _ref.onReply,
    articleId = _ref.articleId,
    canInteract = _ref.canInteract;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showReplyForm = _useState2[0],
    setShowReplyForm = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    replyContent = _useState4[0],
    setReplyContent = _useState4[1];
  var handleReplySubmit = function handleReplySubmit(e) {
    e.preventDefault();
    onReply(replyContent, comment.id);
    setReplyContent("");
    setShowReplyForm(false);
  };
  return (
    /*#__PURE__*/
    // MODIF : pl-2 ou pl-4 selon l'écran pour gagner de la place en profondeur
    react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "border-l-2 border-stone-700 pl-3 md:pl-4 mt-4 mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "flex flex-wrap items-center gap-2 text-[10px] md:text-xs text-stone-400 mb-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
      className: "font-bold text-viking-gold text-sm md:text-base"
    }, ((_comment$author = comment.author) === null || _comment$author === void 0 ? void 0 : _comment$author.pseudo) || "Viking Anonyme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", null, "\u2022 ", comment.score, " points"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", null, "\u2022 ", new Date(comment.createdAt).toLocaleDateString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", {
      className: "text-stone-200 text-sm md:text-base mb-2 break-words"
    }, comment.content), canInteract && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase text-stone-500 select-none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "flex gap-3 md:gap-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
      onClick: function onClick() {
        return onVote(comment.id, "up");
      },
      className: "hover:text-green-500 p-1 md:p-0"
    }, "\u25B2 Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
      onClick: function onClick() {
        return onVote(comment.id, "down");
      },
      className: "hover:text-red-500 p-1 md:p-0"
    }, "\u25BC Down")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
      onClick: function onClick() {
        return setShowReplyForm(!showReplyForm);
      },
      className: "hover:text-white p-1 md:p-0"
    }, "R\xE9pondre")), showReplyForm && canInteract &&
    /*#__PURE__*/
    // MODIF : flex-col sur mobile pour bouton large
    react__WEBPACK_IMPORTED_MODULE_32___default().createElement("form", {
      onSubmit: handleReplySubmit,
      className: "mt-2 flex flex-col md:flex-row gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("input", {
      type: "text",
      value: replyContent,
      onChange: function onChange(e) {
        return setReplyContent(e.target.value);
      },
      className: "bg-black border border-stone-600 p-2 text-white text-sm w-full outline-none focus:border-viking-gold",
      placeholder: "Votre r\xE9ponse...",
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
      type: "submit",
      className: "bg-stone-700 text-white px-4 py-2 md:py-0 text-xs uppercase font-bold hover:bg-stone-600 transition"
    }, "Envoyer")), comment.replies && comment.replies.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "mt-2"
    }, comment.replies.map(function (reply) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_CommentItem, {
        key: reply.id,
        comment: reply,
        onVote: onVote,
        onReply: onReply,
        articleId: articleId,
        canInteract: canInteract
      });
    })))
  );
};

// Composant Principal
var CommentSection = function CommentSection(_ref2) {
  var articleId = _ref2.articleId;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    comments = _useState6[0],
    setComments = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    newComment = _useState8[0],
    setNewComment = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(true),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    canInteract = _useState10[0],
    setCanInteract = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_32__.useEffect)(function () {
    var token = localStorage.getItem("token");
    setCanInteract(!!token);
  }, []);
  var fetchComments = function fetchComments() {
    fetch("/api/comments?article=".concat(articleId, "&parent[exists]=false")).then(function (res) {
      return res.json();
    }).then(function (data) {
      var commentsData = data["hydra:member"] || data["member"] || [];
      var rootComments = commentsData.filter(function (c) {
        return !c.parent || c.parent === undefined || c.parent === null;
      });
      setComments(rootComments);
      setLoading(false);
    })["catch"](function (err) {
      console.error(err);
      setLoading(false);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_32__.useEffect)(function () {
    fetchComments();
  }, [articleId]);
  var handlePost = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(content) {
      var parentId,
        token,
        body,
        res,
        _args = arguments,
        _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            parentId = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            token = localStorage.getItem("token");
            if (token) {
              _context.n = 1;
              break;
            }
            alert("Vous devez être connecté pour graver un message !");
            return _context.a(2);
          case 1:
            body = {
              content: content,
              article: "/api/articles/".concat(articleId),
              parent: parentId ? "/api/comments/".concat(parentId) : null
            };
            _context.p = 2;
            _context.n = 3;
            return fetch("/api/comments", {
              method: "POST",
              headers: {
                "Content-Type": "application/ld+json",
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(body)
            });
          case 3:
            res = _context.v;
            if (res.ok) {
              fetchComments();
              if (!parentId) setNewComment("");
            }
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error(_t);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4]]);
    }));
    return function handlePost(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleVote = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(commentId, direction) {
      var token, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            token = localStorage.getItem("token");
            if (token) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, alert("Seuls les guerriers connectés peuvent voter !"));
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return fetch("/api/custom/comments/".concat(commentId, "/vote/").concat(direction), {
              method: "POST",
              headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json"
              },
              body: JSON.stringify({})
            });
          case 2:
            fetchComments();
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error(_t2);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function handleVote(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "mt-8 md:mt-12 pt-6 md:pt-8 border-t border-stone-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("h3", {
    className: "text-xl md:text-2xl font-dragon text-viking-gold mb-4 md:mb-6 uppercase"
  }, "Conseil de Guerre (", comments.length, " avis)"), canInteract ?
  /*#__PURE__*/
  // MODIF : flex-col sur mobile pour que le bouton prenne toute la largeur
  react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "mb-8 flex flex-col md:flex-row gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("textarea", {
    value: newComment,
    onChange: function onChange(e) {
      return setNewComment(e.target.value);
    },
    className: "w-full bg-black/50 border border-stone-700 text-stone-300 p-3 h-24 md:h-20 focus:border-viking-gold outline-none resize-none md:resize-y",
    placeholder: "Laissez votre marque sur ce r\xE9cit..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    onClick: function onClick() {
      return handlePost(newComment);
    }
    // MODIF : w-full sur mobile
    ,
    className: "bg-viking-gold text-black font-bold px-6 py-3 md:py-0 uppercase hover:bg-white transition w-full md:w-auto shadow-lg active:scale-95"
  }, "Graver")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "mb-8 p-4 border border-stone-800 bg-stone-900/50 text-center italic text-stone-500 text-xs md:text-sm"
  }, "Rejoignez le clan (connectez-vous) pour participer au conseil de guerre et voter."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "space-y-4 md:space-y-6"
  }, comments.map(function (comment) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_CommentItem, {
      key: comment.id,
      comment: comment,
      onVote: handleVote,
      onReply: handlePost,
      articleId: articleId,
      canInteract: canInteract
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentSection);

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
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Legend.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Tooltip.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/ResponsiveContainer.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Cell.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/polar/Pie.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/CartesianGrid.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Line.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Bar.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/LineChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/BarChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/PieChart.js");
























function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var COLORS = ['#d4af37', '#b91c1c', '#1c1917', '#57534e', '#a8a29e']; // Couleurs Viking

var CsvChart = function CsvChart(_ref) {
  var csvUrl = _ref.csvUrl,
    _ref$vizType = _ref.vizType,
    vizType = _ref$vizType === void 0 ? 'bar' : _ref$vizType;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    if (!csvUrl) return;
    setLoading(true);
    fetch(csvUrl).then(function (response) {
      if (!response.ok) throw new Error("Impossible de lire le parchemin de données");
      return response.text();
    }).then(function (csvText) {
      papaparse__WEBPACK_IMPORTED_MODULE_25___default().parse(csvText, {
        header: true,
        dynamicTyping: true,
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
  if (!csvUrl) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
    className: "text-stone-500 italic text-xs text-center p-4"
  }, "Aucune donn\xE9e s\xE9lectionn\xE9e.");
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex justify-center items-center h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
    className: "text-viking-gold animate-pulse text-xs"
  }, "D\xE9chiffrage des runes..."));
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
    className: "text-red-500 text-xs text-center p-4"
  }, "Erreur : ", error);
  if (data.length === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
    className: "text-stone-500 text-xs text-center p-4"
  }, "Le fichier est vide.");
  var keys = Object.keys(data[0]);
  var xKey = keys[0];
  var yKey = keys[1];

  // MODIF : Style commun pour les axes (police plus petite)
  var axisStyle = {
    fontSize: '10px',
    fill: '#a8a29e'
  };
  var renderChart = function renderChart() {
    switch (vizType) {
      case 'line':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_36__.LineChart, {
          data: data,
          margin: {
            top: 5,
            right: 20,
            left: 0,
            bottom: 5
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_31__.CartesianGrid, {
          strokeDasharray: "3 3",
          stroke: "#444"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_34__.XAxis, {
          dataKey: xKey,
          stroke: "#d4af37",
          tick: axisStyle
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_35__.YAxis, {
          stroke: "#d4af37",
          tick: axisStyle
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_27__.Tooltip, {
          contentStyle: {
            backgroundColor: '#1c1917',
            borderColor: '#d4af37',
            color: '#fff',
            fontSize: '12px'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_26__.Legend, {
          wrapperStyle: {
            fontSize: '12px',
            paddingTop: '10px'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_32__.Line, {
          type: "monotone",
          dataKey: yKey,
          stroke: "#d4af37",
          strokeWidth: 3,
          dot: {
            r: 4
          },
          activeDot: {
            r: 6
          }
        }));
      case 'pie':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_38__.PieChart, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_30__.Pie, {
          data: data,
          cx: "50%",
          cy: "50%",
          labelLine: false
          // MODIF : Label simplifié pour mobile
          ,
          label: function label(_ref2) {
            var percent = _ref2.percent;
            return "".concat((percent * 100).toFixed(0), "%");
          },
          outerRadius: "70%",
          fill: "#8884d8",
          dataKey: yKey,
          nameKey: xKey
        }, data.map(function (entry, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_29__.Cell, {
            key: "cell-".concat(index),
            fill: COLORS[index % COLORS.length]
          });
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_27__.Tooltip, {
          contentStyle: {
            backgroundColor: '#1c1917',
            borderColor: '#d4af37',
            color: '#fff',
            fontSize: '12px'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_26__.Legend, {
          wrapperStyle: {
            fontSize: '10px'
          },
          layout: "horizontal",
          verticalAlign: "bottom",
          align: "center"
        }));
      case 'bar':
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_37__.BarChart, {
          data: data,
          margin: {
            top: 5,
            right: 20,
            left: 0,
            bottom: 5
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_31__.CartesianGrid, {
          strokeDasharray: "3 3",
          stroke: "#444"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_34__.XAxis, {
          dataKey: xKey,
          stroke: "#d4af37",
          tick: axisStyle
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_35__.YAxis, {
          stroke: "#d4af37",
          tick: axisStyle
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_27__.Tooltip, {
          cursor: {
            fill: '#333'
          },
          contentStyle: {
            backgroundColor: '#1c1917',
            borderColor: '#d4af37',
            color: '#fff',
            fontSize: '12px'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_26__.Legend, {
          wrapperStyle: {
            fontSize: '12px',
            paddingTop: '10px'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_33__.Bar, {
          dataKey: yKey,
          fill: "#d4af37",
          radius: [4, 4, 0, 0]
        }));
    }
  };
  return (
    /*#__PURE__*/
    // MODIF : h-full et w-full pour prendre tout l'espace disponible du parent
    // Le padding est géré par le parent (ArticleForm/Show)
    react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "w-full h-full min-h-[250px]"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_28__.ResponsiveContainer, {
      width: "100%",
      height: "100%"
    }, renderChart()))
  );
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
            token = localStorage.getItem('token');
            payload = {
              name: datasetName,
              source: file.name,
              metadata: {
                columns: columnMapping,
                uploadedAt: new Date().toISOString(),
                rowCount: preview.length
              }
            };
            _context.p = 1;
            _context.n = 2;
            return fetch('/api/datasets', {
              method: 'POST',
              headers: {
                'Authorization': "Bearer ".concat(token),
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
  return (
    /*#__PURE__*/
    // MODIF : space-y-4 sur mobile pour compacter
    react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
      className: "space-y-4 md:space-y-6 animate-fadeIn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
      className: "bg-black/40 p-4 md:p-6 border border-viking-gold/30 rounded-lg shadow-xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("h3", {
      className: "text-viking-gold font-dragon text-lg md:text-xl mb-4 uppercase tracking-widest text-center md:text-left"
    }, "Nouvelle Archive de Donn\xE9es"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
      className: "flex flex-col md:flex-row gap-4 md:gap-6 items-center"
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
      className: "w-full md:w-auto pt-2 md:pt-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("button", {
      onClick: handleUpload,
      disabled: isUploading,
      className: "w-full md:w-auto bg-viking-fire text-white py-3 px-8 font-black uppercase text-xs shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale rounded"
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
      return (
        /*#__PURE__*/
        // MODIF : min-w pour forcer la largeur et activer le scroll
        react__WEBPACK_IMPORTED_MODULE_43___default().createElement("th", {
          key: h,
          className: "p-3 md:p-4 border-r border-white/5 min-w-[140px] align-top"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
          className: "text-viking-parchment text-xs font-bold mb-2 truncate",
          title: h
        }, h), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("button", {
          onClick: function onClick() {
            return toggleType(h);
          },
          className: "text-[9px] w-full px-2 py-1 rounded-full font-black uppercase tracking-tighter transition-colors border ".concat(columnMapping[h] === 'numerical' ? 'bg-blue-600/20 text-blue-400 border-blue-500/30' : 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30')
        }, columnMapping[h] === 'numerical' ? '🔢 Numérique' : '🔤 Catégoriel'))
      );
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("tbody", null, preview.map(function (row, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("tr", {
        key: i,
        className: "border-t border-white/5 hover:bg-white/5 transition-colors"
      }, headers.map(function (h) {
        return (
          /*#__PURE__*/
          // MODIF : whitespace-nowrap pour éviter les retours à la ligne moches dans les cellules
          react__WEBPACK_IMPORTED_MODULE_43___default().createElement("td", {
            key: h,
            className: "p-3 md:p-4 text-[10px] md:text-[11px] text-stone-400 border-r border-white/5 italic whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis"
          }, row[h])
        );
      }));
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
      className: "mt-8 md:mt-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("h3", {
      className: "text-viking-gold/40 font-dragon text-sm mb-4 md:mb-6 uppercase tracking-widest border-b border-viking-gold/20 pb-2"
    }, "Registres d\xE9j\xE0 pr\xE9sents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
    }, (datasets === null || datasets === void 0 ? void 0 : datasets.length) > 0 ? datasets.map(function (ds) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
        key: ds.id,
        className: "p-4 bg-black/20 border border-stone-800 hover:border-viking-gold/40 transition-all group rounded"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
        className: "text-viking-parchment font-bold text-sm group-hover:text-viking-gold transition-colors truncate",
        title: ds.name
      }, ds.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
        className: "flex justify-between items-center mt-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("span", {
        className: "text-[9px] text-stone-600 uppercase font-bold italic truncate max-w-[60%]",
        title: ds.source
      }, ds.source), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("span", {
        className: "text-[9px] bg-stone-800 px-2 py-0.5 rounded text-stone-400 whitespace-nowrap"
      }, ds.rowsCount, " lignes")));
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_43___default().createElement("div", {
      className: "col-span-full py-10 text-center border-2 border-dashed border-stone-800 text-stone-600 text-xs uppercase font-black rounded"
    }, "Aucune donn\xE9e n'a \xE9t\xE9 grav\xE9e pour le moment."))))
  );
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/esm/index.js");




















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var Navbar = function Navbar() {
  var _user, _user2, _user3;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useNavigate)();
  var token = localStorage.getItem('token');
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var user = null;
  if (token) {
    try {
      user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_23__.jwtDecode)(token);
    } catch (e) {
      console.error("Token invalide");
    }
  }
  var handleLogout = function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
    setIsMenuOpen(false);
  };
  var canSeeDashboard = ((_user = user) === null || _user === void 0 || (_user = _user.roles) === null || _user === void 0 ? void 0 : _user.includes('ROLE_EDITEUR')) || ((_user2 = user) === null || _user2 === void 0 || (_user2 = _user2.roles) === null || _user2 === void 0 ? void 0 : _user2.includes('ROLE_ADMIN'));
  var closeMenu = function closeMenu() {
    return setIsMenuOpen(false);
  };
  return (
    /*#__PURE__*/
    // La barre de navigation principale (le bandeau du haut)
    react__WEBPACK_IMPORTED_MODULE_20___default().createElement("nav", {
      className: "bg-viking-rock border-b-2 border-viking-gold/50 p-4 sticky top-0 z-50 shadow-lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "container mx-auto flex justify-between items-center relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Link, {
      to: "/",
      className: "text-xl md:text-3xl font-dragon text-viking-gold hover:text-white transition flex items-center gap-2 drop-shadow-md group z-50 relative",
      onClick: closeMenu
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", {
      className: "text-2xl md:text-4xl group-hover:scale-110 transition-transform uppercase"
    }, "Riders of Berk")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
      className: "md:hidden text-viking-gold z-50 focus:outline-none relative",
      onClick: function onClick() {
        return setIsMenuOpen(!isMenuOpen);
      }
    }, isMenuOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", {
      className: "text-3xl font-bold"
    }, "\u2715") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", {
      className: "text-3xl font-bold"
    }, "\u2630")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "\n                    fixed inset-0 z-40 bg-stone-900 \n                    flex flex-col justify-center items-center gap-8 \n                    transition-transform duration-300 ease-in-out\n                    ".concat(isMenuOpen ? 'translate-x-0' : 'translate-x-full', "\n                    \n                    md:static md:transform-none md:bg-transparent md:flex-row md:justify-end md:h-auto md:p-0\n                ")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("ul", {
      className: "flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-6 text-3xl md:text-lg font-dragon tracking-wide text-viking-light uppercase"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Link, {
      to: "/",
      className: "hover:text-viking-gold transition-all duration-300",
      onClick: closeMenu
    }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Link, {
      to: "/forum",
      className: "hover:text-viking-gold transition-all duration-300",
      onClick: closeMenu
    }, "Forum")), canSeeDashboard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Link, {
      to: "/admin",
      className: "text-viking-gold border border-viking-gold/50 px-4 py-2 md:px-2 md:py-0.5 hover:bg-viking-gold hover:text-black transition-all duration-300",
      onClick: closeMenu
    }, "Conseil"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "flex flex-col md:flex-row items-center gap-6 md:gap-4 md:border-l border-stone-700 md:pl-6 mt-8 md:mt-0"
    }, !token ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement((react__WEBPACK_IMPORTED_MODULE_20___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Link, {
      to: "/login",
      className: "text-2xl md:text-sm font-black uppercase tracking-tighter hover:text-viking-gold transition",
      onClick: closeMenu
    }, "Connexion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Link, {
      to: "/register",
      className: "bg-viking-gold text-black px-8 py-3 md:px-4 md:py-1.5 text-xl md:text-xs font-black uppercase tracking-widest hover:bg-yellow-500 transition shadow-lg",
      onClick: closeMenu
    }, "Rejoindre")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", {
      className: "text-xl md:text-[10px] text-stone-500 uppercase font-black italic"
    }, ((_user3 = user) === null || _user3 === void 0 ? void 0 : _user3.pseudo) || "Guerrier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
      onClick: handleLogout,
      className: "text-lg md:text-[10px] text-viking-fire uppercase font-black border border-viking-fire/30 px-6 py-2 md:px-3 md:py-1 hover:bg-viking-fire hover:text-white transition"
    }, "Quitter"))))))
  );
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
  var baseScale = viewport.width < 5 ? 0.35 : 0.8;
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
    scale: finalScale,
    position: [0, -1, 0]
  }, props));
}
var NightFuryScene = function NightFuryScene() {
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
    setSizeFactor = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    controlsVisible = _useState0[0],
    setControlsVisible = _useState0[1];
  var handleReset = function handleReset() {
    setRotSpeed(0.001);
    setAnimSpeed(2.5);
    setSizeFactor(1);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "h-full w-full relative overflow-hidden bg-[#050510]"
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
      className: "text-white text-xs animate-pulse"
    }, "Invocation..."))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_33__.Center, {
    top: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(DragonModel, {
    vitesseRotation: rotSpeed,
    vitesseAnimation: animSpeed,
    facteurTaille: sizeFactor
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    onClick: function onClick() {
      return setControlsVisible(!controlsVisible);
    },
    className: "absolute top-4 right-4 z-20 bg-black/60 backdrop-blur text-viking-gold p-3 rounded-full border border-viking-gold/30 md:hidden shadow-lg active:scale-95 transition-transform"
  }, controlsVisible ? '✕' : '⚙️'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "\n        absolute z-10 bg-black/80 backdrop-blur-md text-white border border-blue-500/30 shadow-2xl transition-all duration-300 ease-in-out\n        \n        /* Styles Mobile (Bottom Sheet) */\n        bottom-0 left-0 w-full rounded-t-2xl p-6 pb-8\n        ".concat(controlsVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none', "\n\n        /* Styles Desktop (Floating Box) */\n        md:bottom-auto md:left-auto md:top-4 md:right-4 md:w-64 md:rounded-xl md:p-4 md:pb-4\n        md:translate-y-0 md:opacity-100 md:pointer-events-auto\n      ")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "flex justify-between items-center mb-4 border-b border-white/10 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("h3", {
    className: "text-blue-300 font-bold text-sm uppercase tracking-wider"
  }, "Param\xE8tres"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    onClick: handleReset,
    className: "text-[10px] text-stone-400 hover:text-white uppercase font-bold underline decoration-dotted"
  }, "Reset")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "flex justify-between text-xs mb-1 text-stone-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", null, "Taille"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
    className: "text-green-400 font-mono"
  }, "x", sizeFactor.toFixed(1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
    type: "range",
    min: "0.1",
    max: "3",
    step: "0.1",
    value: sizeFactor,
    onChange: function onChange(e) {
      return setSizeFactor(parseFloat(e.target.value));
    },
    className: "w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-green-500"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "flex justify-between text-xs mb-1 text-stone-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", null, "Vitesse Rotation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
    className: "text-blue-400 font-mono"
  }, (rotSpeed * 1000).toFixed(0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
    type: "range",
    min: "0",
    max: "0.05",
    step: "0.001",
    value: rotSpeed,
    onChange: function onChange(e) {
      return setRotSpeed(parseFloat(e.target.value));
    },
    className: "w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "flex justify-between text-xs mb-1 text-stone-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", null, "Vitesse Animation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
    className: "text-purple-400 font-mono"
  }, "x", animSpeed.toFixed(1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
    type: "range",
    min: "0",
    max: "5",
    step: "0.1",
    value: animSpeed,
    onChange: function onChange(e) {
      return setAnimSpeed(parseFloat(e.target.value));
    },
    className: "w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
  })))));
};
_react_three_drei__WEBPACK_IMPORTED_MODULE_30__.useGLTF.preload(MODEL_PATH);
_react_three_drei__WEBPACK_IMPORTED_MODULE_31__.useTexture.preload(TEXTURE_PATH);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NightFuryScene);

/***/ },

/***/ "./assets/components/StarRating.jsx"
/*!******************************************!*\
  !*** ./assets/components/StarRating.jsx ***!
  \******************************************/
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



















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var StarRating = function StarRating(_ref) {
  var articleId = _ref.articleId,
    currentRating = _ref.currentRating,
    onRate = _ref.onRate;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(currentRating || 0),
    _useState4 = _slicedToArray(_useState3, 2),
    rating = _useState4[0],
    setRating = _useState4[1];
  var handleRating = function handleRating(score) {
    setRating(score);
    onRate(score);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "flex gap-1"
  }, [1, 2, 3, 4, 5].map(function (star) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("button", {
      key: star,
      type: "button"
      // MODIF : text-3xl sur mobile pour faciliter le clic, md:text-2xl sur desktop
      // Ajout de active:scale-125 pour un effet "pop" au toucher
      ,
      className: "text-3xl md:text-2xl transition-all duration-200 focus:outline-none active:scale-125 ".concat(star <= (hover || rating) ? "text-viking-gold drop-shadow-md" : "text-stone-600"),
      onClick: function onClick() {
        return handleRating(star);
      },
      onMouseEnter: function onMouseEnter() {
        return setHover(star);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(rating);
      },
      title: "Donner ".concat(star, " \xE9toile(s)")
    }, "\u2605");
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);

/***/ },

/***/ "./assets/components/VikingPlayer.jsx"
/*!********************************************!*\
  !*** ./assets/components/VikingPlayer.jsx ***!
  \********************************************/
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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
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






















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var VikingPlayer = function VikingPlayer(_ref) {
  var src = _ref.src,
    _ref$autoPlay = _ref.autoPlay,
    autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay;
  var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_22__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPlaying = _useState2[0],
    setIsPlaying = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    progress = _useState4[0],
    setProgress = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)("0:00"),
    _useState6 = _slicedToArray(_useState5, 2),
    currentTime = _useState6[0],
    setCurrentTime = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)("0:00"),
    _useState8 = _slicedToArray(_useState7, 2),
    duration = _useState8[0],
    setDuration = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isBlocked = _useState0[0],
    setIsBlocked = _useState0[1]; // Nouveau state pour détecter le blocage

  // Gestion de l'Autoplay
  (0,react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(function () {
    if (autoPlay && audioRef.current) {
      var playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(function () {
          // Succès : Le navigateur a autorisé l'autoplay
          setIsPlaying(true);
          setIsBlocked(false);
        })["catch"](function (error) {
          // Échec : Le navigateur a bloqué l'autoplay
          console.log("Autoplay bloqué (interaction requise)");
          setIsPlaying(false);
          setIsBlocked(true); // On signale qu'il faut une action manuelle
        });
      }
    }
  }, [autoPlay, src]);
  var togglePlay = function togglePlay() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      setIsBlocked(false); // Si l'utilisateur clique, le blocage saute
    }
    setIsPlaying(!isPlaying);
  };
  var handleTimeUpdate = function handleTimeUpdate() {
    var current = audioRef.current.currentTime;
    var total = audioRef.current.duration;
    if (total) {
      setProgress(current / total * 100);
      setCurrentTime(formatTime(current));
      setDuration(formatTime(total));
    }
  };
  var handleSeek = function handleSeek(e) {
    var width = e.target.clientWidth;
    var clickX = e.nativeEvent.offsetX;
    var duration = audioRef.current.duration;
    if (duration) {
      audioRef.current.currentTime = clickX / width * duration;
    }
  };
  var formatTime = function formatTime(time) {
    if (!time || isNaN(time)) return "0:00";
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    return "".concat(min, ":").concat(sec < 10 ? '0' + sec : sec);
  };

  // Visualiseur animé
  var bars = Array.from({
    length: 30
  }).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      key: i,
      className: "w-1 mx-[1px] rounded-t transition-all duration-300 ".concat(isPlaying ? 'bg-viking-gold animate-bar' : 'bg-stone-700 h-1'),
      style: {
        animationDuration: "".concat(Math.random() * 0.5 + 0.4, "s"),
        height: isPlaying ? '100%' : '10%'
      }
    });
  });
  return (
    /*#__PURE__*/
    // MODIF : my-4 sur mobile, my-8 sur desktop, p-4 sur mobile, p-6 sur desktop
    react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "w-full max-w-2xl mx-auto my-4 md:my-8 bg-black/80 border border-viking-gold/30 rounded-lg p-4 md:p-6 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-sm relative overflow-hidden"
    }, isBlocked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "absolute inset-0 bg-black/80 z-20 flex items-center justify-center animate-fade-in p-4 text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
      onClick: togglePlay
      // MODIF : text-xs sur mobile, text-base sur desktop
      ,
      className: "px-4 py-2 md:px-6 md:py-3 bg-viking-gold text-black font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.6)] text-xs md:text-sm"
    }, "\uD83D\uDD0A Activer l'Ambiance Sonore")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("audio", {
      ref: audioRef,
      src: src,
      onTimeUpdate: handleTimeUpdate,
      onEnded: function onEnded() {
        return setIsPlaying(false);
      },
      onLoadedMetadata: function onLoadedMetadata(e) {
        return setDuration(formatTime(e.target.duration));
      } // Charge la durée dès le début
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "flex items-center gap-4 md:gap-6 relative z-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
      onClick: togglePlay
      // MODIF : w-12 h-12 sur mobile
      ,
      className: "w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-viking-gold transition-all duration-300 ".concat(isPlaying ? 'bg-viking-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'text-viking-gold hover:bg-viking-gold/20')
    }, isPlaying ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("svg", {
      className: "w-5 h-5 md:w-6 md:h-6",
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("path", {
      d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("svg", {
      className: "w-5 h-5 md:w-6 md:h-6 translate-x-0.5",
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("path", {
      d: "M8 5v14l11-7z"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "flex justify-between text-[9px] md:text-[10px] text-viking-gold font-mono mb-2 uppercase tracking-widest opacity-80"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", null, currentTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
      className: "hidden sm:inline"
    }, isPlaying ? "Lecture..." : "Pause"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", null, duration)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "h-8 md:h-10 flex items-end justify-center mb-3 overflow-hidden opacity-80"
    }, bars), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "h-1.5 bg-stone-800 rounded-full cursor-pointer relative group",
      onClick: handleSeek
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "h-full bg-viking-gold rounded-full relative transition-all duration-100 ease-linear",
      style: {
        width: "".concat(progress, "%")
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow scale-0 group-hover:scale-100 transition-all"
    }))))))
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VikingPlayer);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_ArticleForm__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../components/ArticleForm */ "./assets/components/ArticleForm.jsx");
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
    setActiveTab = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    editingId = _useState0[0],
    setEditingId = _useState0[1];
  var token = localStorage.getItem('token');
  var currentUser = null;
  try {
    currentUser = token ? (0,jwt_decode__WEBPACK_IMPORTED_MODULE_43__.jwtDecode)(token) : null;
  } catch (e) {
    console.error("Erreur de décodage du token");
  }
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
  var handleDeleteArticle = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(id) {
      var res, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (window.confirm("Êtes-vous sûr de vouloir brûler ce parchemin définitivement ?")) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.p = 1;
            _context.n = 2;
            return fetch("/api/articles/".concat(id), {
              method: 'DELETE',
              headers: {
                'Authorization': "Bearer ".concat(token)
              }
            });
          case 2:
            res = _context.v;
            if (res.ok) {
              setData(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  managementArticles: prev.managementArticles.filter(function (art) {
                    return art.id !== id;
                  })
                });
              });
            } else {
              alert("Erreur : Impossible de supprimer (Droits insuffisants ?)");
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error(_t);
            alert("Erreur serveur.");
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function handleDeleteArticle(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleEditSuccess = function handleEditSuccess() {
    setEditingId(null);
    loadStats();
  };
  var handlePromote = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(userId) {
      var response, updatedData, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return fetch("/api/admin/user/".concat(userId, "/promote"), {
              method: 'PATCH',
              headers: {
                'Authorization': "Bearer ".concat(token)
              }
            });
          case 1:
            response = _context2.v;
            if (!response.ok) {
              _context2.n = 3;
              break;
            }
            _context2.n = 2;
            return response.json();
          case 2:
            updatedData = _context2.v;
            setData(_objectSpread(_objectSpread({}, data), {}, {
              allUsers: data.allUsers.map(function (u) {
                return u.id === userId ? _objectSpread(_objectSpread({}, u), {}, {
                  roles: updatedData.newRoles
                }) : u;
              })
            }));
          case 3:
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            alert("Erreur lors du changement de rang");
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 4]]);
    }));
    return function handlePromote(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "text-viking-fire p-10 text-center font-dragon"
  }, error);
  if (!data) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "text-viking-gold p-10 font-dragon animate-pulse text-center"
  }, "Appel au Grand Conseil...");
  return (
    /*#__PURE__*/
    // MODIF : p-4 sur mobile, p-6 sur desktop
    react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "max-w-6xl mx-auto p-4 md:p-6 text-white pb-20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("h1", {
      className: "text-3xl md:text-5xl font-dragon text-viking-parchment mb-6 md:mb-10 border-b border-viking-gold/30 pb-4 uppercase text-center md:text-left"
    }, "Palais d'Administration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "flex flex-wrap gap-2 mb-8 border-b border-stone-800 pb-4 justify-center md:justify-start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      onClick: function onClick() {
        return setActiveTab('stats');
      },
      className: "flex-grow md:flex-grow-0 px-4 py-3 md:py-2 text-xs font-black uppercase transition rounded md:rounded-none ".concat(activeTab === 'stats' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500 border border-stone-800')
    }, "Vue d'ensemble"), isFullAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      onClick: function onClick() {
        return setActiveTab('users');
      },
      className: "flex-grow md:flex-grow-0 px-4 py-3 md:py-2 text-xs font-black uppercase transition rounded md:rounded-none ".concat(activeTab === 'users' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500 border border-stone-800')
    }, "Population"), isEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      onClick: function onClick() {
        return setActiveTab('articles');
      },
      className: "flex-grow md:flex-grow-0 px-4 py-3 md:py-2 text-xs font-black uppercase transition rounded md:rounded-none ".concat(activeTab === 'articles' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500 border border-stone-800')
    }, "Chroniques"), isProvider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      onClick: function onClick() {
        return setActiveTab('data');
      },
      className: "flex-grow md:flex-grow-0 px-4 py-3 md:py-2 text-xs font-black uppercase transition rounded md:rounded-none ".concat(activeTab === 'data' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500 border border-stone-800')
    }, "Donn\xE9es (CSV)"), isDesigner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      onClick: function onClick() {
        return setActiveTab('design');
      },
      className: "flex-grow md:flex-grow-0 px-4 py-3 md:py-2 text-xs font-black uppercase transition rounded md:rounded-none ".concat(activeTab === 'design' ? 'bg-viking-gold text-black' : 'bg-stone-900 text-stone-500 border border-stone-800')
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
      className: "bg-black/40 border border-viking-gold/20 p-3 rounded text-sm w-full outline-none focus:border-viking-gold",
      onChange: function onChange(e) {
        return setSearchTerm(e.target.value);
      }
    }), (_data$allUsers = data.allUsers) === null || _data$allUsers === void 0 ? void 0 : _data$allUsers.filter(function (u) {
      return u.pseudo.toLowerCase().includes(searchTerm.toLowerCase());
    }).map(function (u) {
      return (
        /*#__PURE__*/
        // MODIF : flex-col sur mobile pour empiler pseudo et bouton
        react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
          key: u.id,
          className: "flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-stone-900/50 border border-stone-800 gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
          className: "font-bold text-viking-parchment text-lg"
        }, u.pseudo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
          className: "text-[10px] text-stone-500 mt-1"
        }, u.roles.join(' | '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
          onClick: function onClick() {
            return handlePromote(u.id);
          },
          className: "w-full sm:w-auto text-xs border border-viking-gold/40 px-4 py-2 hover:bg-viking-gold hover:text-black transition uppercase font-black rounded"
        }, "Changer Rang"))
      );
    })), activeTab === 'articles' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "animate-fadeIn"
    }, editingId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "bg-stone-900 p-4 border border-viking-gold"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      onClick: function onClick() {
        return setEditingId(null);
      },
      className: "mb-4 text-stone-500 hover:text-white uppercase text-xs font-bold tracking-widest flex items-center gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("span", null, "\u2190"), " Annuler la modification"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_components_ArticleForm__WEBPACK_IMPORTED_MODULE_46__["default"], {
      id: editingId,
      onSuccess: handleEditSuccess
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "grid gap-3"
    }, (_data$managementArtic = data.managementArticles) === null || _data$managementArtic === void 0 ? void 0 : _data$managementArtic.map(function (art) {
      return (
        /*#__PURE__*/
        // MODIF : flex-col sur mobile pour empiler titre et boutons
        react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
          key: art.id,
          className: "p-4 bg-stone-900 border border-stone-800 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-stone-600 transition-colors group gap-4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
          className: "flex-1 w-full"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_45__.Link, {
          to: "/article/".concat(art.id),
          className: "font-bold text-viking-parchment group-hover:text-viking-gold transition-colors text-lg block truncate"
        }, art.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
          className: "text-stone-500 text-xs mt-1"
        }, "Par ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("span", {
          className: "text-stone-400"
        }, art.author), " \u2022 ", new Date(art.createdAt).toLocaleDateString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
          className: "flex items-center gap-3 w-full sm:w-auto"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
          onClick: function onClick() {
            return setEditingId(art.id);
          },
          className: "flex-1 sm:flex-none px-3 py-3 sm:py-2 bg-stone-800 text-stone-300 border border-stone-600 hover:border-viking-gold hover:text-white text-[10px] uppercase font-bold tracking-widest transition text-center rounded"
        }, "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
          onClick: function onClick() {
            return handleDeleteArticle(art.id);
          },
          className: "flex-1 sm:flex-none px-3 py-3 sm:py-2 bg-red-900/20 text-red-500 border border-red-900/50 hover:bg-red-900 hover:text-white text-[10px] uppercase font-bold tracking-widest transition text-center rounded"
        }, "Supprimer")))
      );
    }), (!data.managementArticles || data.managementArticles.length === 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
      className: "text-stone-500 italic text-center py-10"
    }, "Aucune chronique \xE0 g\xE9rer."))), activeTab === 'data' && isProvider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_components_DataProviderSpace__WEBPACK_IMPORTED_MODULE_44__["default"], {
      datasets: data.datasets
    }), activeTab === 'design' && isDesigner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "p-10 text-center border-2 border-dashed border-stone-800 text-stone-600 uppercase font-black text-sm"
    }, "Forge de Design (En construction)")))
  );
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
    className: "text-center text-viking-gold font-dragon text-xl md:text-2xl py-20 animate-pulse px-4"
  }, "Recherche dans les archives...");
  if (!article) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "text-center text-viking-fire text-lg md:text-xl py-10 px-4"
  }, "Article introuvable dans les archives.");
  return (
    /*#__PURE__*/
    // MODIF : px-4 pour les marges latérales sur mobile
    react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "max-w-4xl mx-auto animate-fade-in px-4 pb-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
      to: "/forum",
      className: "text-viking-light hover:text-white mb-4 md:mb-6 inline-flex items-center gap-2 transition text-sm md:text-base"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", null, "\u2190"), " Retour au forum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "bg-viking-rock p-5 md:p-8 rounded-lg border-2 border-stone-600 shadow-2xl relative overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-viking-gold opacity-10 rounded-bl-full"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("h1", {
      className: "text-3xl md:text-5xl font-dragon text-viking-gold mb-4 leading-tight break-words relative z-10 pr-8"
    }, article.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "flex flex-wrap items-center gap-3 text-xs md:text-sm text-stone-500 mb-6 md:mb-8 border-b border-stone-700 pb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", {
      className: "bg-viking-red px-2 py-1 rounded text-white font-bold border border-viking-gold/50"
    }, "Archive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", null, "Cr\xE9\xE9 le ", new Date(article.createdAt).toLocaleDateString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      className: "text-viking-parchment text-base md:text-lg leading-relaxed font-serif whitespace-pre-line text-justify md:text-left"
    }, article.summary)))
  );
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
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/esm/index.js");
/* harmony import */ var _components_ArticleForm__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../components/ArticleForm */ "./assets/components/ArticleForm.jsx");
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    articles = _useState2[0],
    setArticles = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    user = _useState6[0],
    setUser = _useState6[1];

  // État pour le tri
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)("newest"),
    _useState8 = _slicedToArray(_useState7, 2),
    sortOrder = _useState8[0],
    setSortOrder = _useState8[1];

  // Gestion de la navigation interne
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)("list"),
    _useState0 = _slicedToArray(_useState9, 2),
    view = _useState0[0],
    setView = _useState0[1]; // 'list', 'create', 'edit'
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    selectedId = _useState10[0],
    setSelectedId = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_32__.useEffect)(function () {
    // 1. Récupération et décodage du Token
    var token = localStorage.getItem("token");
    if (token) {
      try {
        var decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_34__.jwtDecode)(token);
        setUser(decoded);
      } catch (e) {
        console.error("Badge (Token) invalide ou expiré");
      }
    }
  }, []);

  // Recharger quand le tri change
  (0,react__WEBPACK_IMPORTED_MODULE_32__.useEffect)(function () {
    fetchArticles();
  }, [sortOrder]);
  var fetchArticles = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var url, res, data, _t, _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            url = "/api/articles"; // Logique de tri API Platform
            _t = sortOrder;
            _context.n = _t === "best_rating" ? 2 : _t === "worst_rating" ? 3 : _t === "oldest" ? 4 : _t === "newest" ? 5 : 5;
            break;
          case 2:
            url += "?order[averageRating]=desc";
            return _context.a(3, 6);
          case 3:
            url += "?order[averageRating]=asc";
            return _context.a(3, 6);
          case 4:
            url += "?order[createdAt]=asc";
            return _context.a(3, 6);
          case 5:
            url += "?order[createdAt]=desc";
            return _context.a(3, 6);
          case 6:
            _context.n = 7;
            return fetch(url, {
              headers: {
                Accept: "application/ld+json"
              }
            });
          case 7:
            res = _context.v;
            _context.n = 8;
            return res.json();
          case 8:
            data = _context.v;
            setArticles(data["hydra:member"] || data["member"] || []);
            _context.n = 10;
            break;
          case 9:
            _context.p = 9;
            _t2 = _context.v;
            console.error("Erreur de liaison avec le Grand Conseil", _t2);
          case 10:
            _context.p = 10;
            setLoading(false);
            return _context.f(10);
          case 11:
            return _context.a(2);
        }
      }, _callee, null, [[1, 9, 10, 11]]);
    }));
    return function fetchArticles() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id) {
      var res, _t3;
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
              method: "DELETE",
              headers: {
                Authorization: "Bearer ".concat(localStorage.getItem("token"))
              }
            });
          case 2:
            res = _context2.v;
            if (res.ok) {
              setArticles(articles.filter(function (a) {
                var aId = (a.id || a["@id"]).toString().split("/").pop();
                return aId !== id.toString();
              }));
            } else {
              alert("Les dragons protègent ce parchemin (Erreur de permissions).");
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t3 = _context2.v;
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
    setView("list");
    setSelectedId(null);
    fetchArticles();
  };

  // 🛡️ --- LOGIQUE DES RÔLES ---
  var userRoles = (user === null || user === void 0 ? void 0 : user.roles) || [];
  var superEditors = ["ROLE_EDITEUR", "ROLE_ADMIN", "ROLE_DESIGNER", "ROLE_FOURNISSEUR"];
  var isSuperEditor = superEditors.some(function (r) {
    return userRoles.includes(r);
  });
  var isAuthor = userRoles.includes("ROLE_AUTEUR");
  var canCreate = isSuperEditor || isAuthor;
  if (loading && view === "list") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "flex flex-col items-center justify-center py-40"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "w-12 h-12 border-4 border-viking-gold border-t-transparent rounded-full animate-spin mb-4"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", {
      className: "text-viking-gold font-dragon text-xl animate-pulse uppercase"
    }, "Ouverture des parchemins..."));
  }
  return (
    /*#__PURE__*/
    // MODIF : px-4 pour les marges mobiles
    react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "max-w-6xl mx-auto px-4 pb-20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b border-viking-gold/20 pb-8 gap-6 md:gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("h1", {
      className: "text-4xl md:text-6xl font-dragon text-viking-parchment uppercase tracking-tighter"
    }, "Chroniques"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", {
      className: "text-stone-500 italic text-sm mt-2"
    }, "Le savoir du village de Berk, grav\xE9 pour l'\xE9ternit\xE9.")), view === "list" &&
    /*#__PURE__*/
    // MODIF : w-full sur mobile pour que les filtres prennent toute la largeur
    react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("select", {
      value: sortOrder,
      onChange: function onChange(e) {
        return setSortOrder(e.target.value);
      },
      className: "w-full sm:w-auto bg-black/50 border border-viking-gold/50 text-viking-gold py-3 px-4 rounded cursor-pointer uppercase text-xs font-bold tracking-widest focus:outline-none focus:border-viking-gold hover:bg-stone-900 transition"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("option", {
      value: "newest"
    }, "\uD83D\uDCC5 Plus R\xE9cents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("option", {
      value: "oldest"
    }, "\uD83D\uDCDC Plus Anciens"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("option", {
      value: "best_rating"
    }, "\uD83C\uDF1F Mieux Not\xE9s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("option", {
      value: "worst_rating"
    }, "\uD83D\uDC80 Moins Not\xE9s")), canCreate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
      onClick: function onClick() {
        setSelectedId(null);
        setView("create");
      }
      // MODIF : w-full sur mobile
      ,
      className: "w-full sm:w-auto bg-viking-gold text-black px-8 py-3 font-black hover:bg-yellow-500 transition shadow-[0_0_20px_rgba(212,175,55,0.2)] uppercase text-xs tracking-widest"
    }, "+ Graver un r\xE9cit"))), view === "create" || view === "edit" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "animate-in fade-in slide-in-from-bottom-4 duration-500"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
      onClick: function onClick() {
        setView("list");
        setSelectedId(null);
      },
      className: "mb-8 text-stone-500 hover:text-viking-gold flex items-center gap-2 transition uppercase text-[10px] font-bold tracking-widest"
    }, "\u2190 Retour au mur des l\xE9gendes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_components_ArticleForm__WEBPACK_IMPORTED_MODULE_35__["default"], {
      id: selectedId,
      onSuccess: handleSuccess
    })) :
    /*#__PURE__*/
    /* --- VUE LISTE DES ARTICLES --- */
    react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "grid gap-6"
    }, articles.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", {
      className: "text-center py-20 text-stone-600 italic"
    }, "Le silence r\xE8gne sur le mur... Aucune chronique n'a \xE9t\xE9 trouv\xE9e.") : articles.map(function (article) {
      var _article$author, _article$author2, _article$author3;
      var cleanId = (article.id || article["@id"]).toString().split("/").pop();
      var isOwner = (user === null || user === void 0 ? void 0 : user.id) === ((_article$author = article.author) === null || _article$author === void 0 ? void 0 : _article$author.id);
      var canEditThis = isSuperEditor || isAuthor && isOwner;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("article", {
        key: cleanId
        // MODIF : p-5 sur mobile, p-8 sur desktop
        ,
        className: "group bg-stone-900/40 border-l-4 border-stone-800 hover:border-viking-gold transition-all duration-300 p-5 md:p-8 relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
        className: "flex flex-col md:flex-row justify-between items-start mb-4 gap-4 md:gap-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("h2", {
        className: "text-xl md:text-3xl font-dragon text-viking-gold group-hover:text-white transition-colors uppercase leading-tight"
      }, article.title), article.averageRating && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
        className: "text-yellow-500 text-xs md:text-sm font-bold border border-yellow-500/30 px-2 py-0.5 rounded bg-yellow-500/10 whitespace-nowrap"
      }, "\u2605 ", article.averageRating)), canEditThis &&
      /*#__PURE__*/
      // MODIF : opacity-100 sur mobile (car pas de hover), md:opacity-40 sur ordi
      react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
        className: "flex gap-2 opacity-100 md:opacity-40 md:group-hover:opacity-100 transition-opacity w-full md:w-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
        onClick: function onClick() {
          setSelectedId(cleanId);
          setView("edit");
        }
        // MODIF : flex-1 sur mobile pour des boutons larges
        ,
        className: "flex-1 md:flex-none text-center text-[9px] uppercase font-black bg-stone-800 text-stone-400 px-3 py-2 md:py-1 border border-stone-700 hover:text-white hover:border-viking-gold transition"
      }, "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
        onClick: function onClick() {
          return handleDelete(cleanId);
        },
        className: "flex-1 md:flex-none text-center text-[9px] uppercase font-black bg-red-900/10 text-red-500/70 px-3 py-2 md:py-1 border border-red-900/30 hover:bg-red-900 hover:text-white transition"
      }, "Supprimer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", {
        className: "text-stone-400 font-serif italic text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl text-justify md:text-left"
      }, "\"", article.summary, "\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
        className: "flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-stone-800/50 gap-4 sm:gap-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
        className: "w-6 h-[1px] bg-viking-gold/40"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
        className: "text-[10px] text-stone-500 uppercase tracking-widest font-black"
      }, "Par", " ", ((_article$author2 = article.author) === null || _article$author2 === void 0 ? void 0 : _article$author2.pseudo) || ((_article$author3 = article.author) === null || _article$author3 === void 0 ? void 0 : _article$author3.username) || "Guerrier de l'ombre")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Link, {
        to: "/article/".concat(cleanId),
        className: "text-viking-fire font-black text-[10px] uppercase tracking-widest hover:text-viking-gold transition-colors flex items-center gap-2 self-end sm:self-auto"
      }, "Consulter le parchemin", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
        className: "text-lg"
      }, "\u2192"))));
    })))
  );
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
  return (
    /*#__PURE__*/
    // AJOUT : px-4 pour éviter que le contenu touche les bords sur mobile
    // MODIF : py-8 sur mobile, py-16 sur ordinateur
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-center py-8 md:py-16 px-4 animate-fade-in-up"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "text-4xl sm:text-6xl md:text-8xl font-dragon text-transparent bg-clip-text bg-gradient-to-r from-viking-gold via-yellow-500 to-viking-gold mb-6 md:mb-8 drop-shadow-sm leading-tight"
    }, "Bienvenue dans l'Antre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-16 md:w-24 h-1 bg-viking-red mx-auto mb-6 md:mb-8 rounded-full shadow-[0_0_10px_#dc2626]"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-base sm:text-lg md:text-2xl text-viking-light mb-8 md:mb-12 max-w-3xl mx-auto font-serif italic leading-relaxed px-2"
    }, "\"\xC7a, c'est Beurk. \xC0 douze jours au nord du D\xE9sespoir, et quelques degr\xE9s au sud d'un Froid-de-canard. Ancr\xE9 solidement sur le M\xE9ridien de la Mis\xE8re. Mon village... En un mot, balaise. Et sept g\xE9n\xE9rations y ont d\xE9j\xE0 vu le jour, pourtant, toutes les maisons sont neuves. Beurk : sa p\xEAche, sa chasse, et ses merveilleux couchers de soleil. La seule fausse note c'est les bestioles. Ailleurs, les gens ont des souris ou des moustiques. Nous on a des... dragons.\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "bg-stone-800 rounded-2xl border-4 border-stone-700 shadow-2xl overflow-hidden mb-8 md:mb-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "h-[300px] sm:h-[400px] lg:h-[600px] w-full relative bg-black rounded-xl overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NightFury__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute bottom-4 left-0 w-full text-center text-xs md:text-sm text-gray-400 pointer-events-none z-10 px-4"
    }, "Cliquez sur le dragon (ou touchez-le)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full max-w-md md:max-w-none mx-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/forum"
      // MODIF : w-full sur mobile pour faciliter le clic, w-auto sur ordi
      ,
      className: "group relative w-full md:w-auto px-8 py-4 bg-viking-red hover:bg-red-900 border-2 border-viking-gold text-white font-dragon text-lg md:text-xl rounded-lg overflow-hidden transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)] active:scale-95"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "relative z-10"
    }, "Acc\xE9der au Forum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/statistique"
      // MODIF : w-full sur mobile
      ,
      className: "w-full md:w-auto px-8 py-4 bg-viking-rock hover:bg-stone-700 border-2 border-stone-500 text-viking-light hover:text-white font-dragon text-lg md:text-xl rounded-lg transition-all shadow-lg active:scale-95"
    }, "Voir les Stats")))
  );
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
              localStorage.setItem('token', data.token);
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
  return (
    /*#__PURE__*/
    // MODIF : px-4 pour éviter que ça touche les bords sur mobile
    react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
      className: "px-4 w-full"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
      className: "max-w-md mx-auto bg-viking-rock p-6 md:p-10 border-2 border-viking-gold shadow-2xl mt-4 md:mt-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("h2", {
      className: "text-2xl md:text-3xl font-dragon text-viking-gold mb-6 md:mb-8 text-center uppercase"
    }, "Connexion"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("p", {
      className: "text-viking-red text-sm mb-4 italic text-center font-bold animate-pulse"
    }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("form", {
      onSubmit: handleSubmit,
      className: "space-y-4 md:space-y-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("label", {
      className: "block text-xs font-black uppercase tracking-widest mb-2 text-viking-parchment"
    }, "Email du Guerrier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
      type: "email",
      className: "w-full bg-black/50 border border-stone-700 p-3 md:p-4 text-base text-white focus:border-viking-gold outline-none transition-all",
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
      className: "w-full bg-black/50 border border-stone-700 p-3 md:p-4 text-base text-white focus:border-viking-gold outline-none transition-all",
      value: password,
      onChange: function onChange(e) {
        return setPassword(e.target.value);
      },
      required: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
      type: "submit",
      className: "w-full bg-viking-gold text-black font-black py-3 md:py-4 uppercase hover:bg-yellow-500 transition shadow-lg active:scale-95 text-sm md:text-base tracking-widest"
    }, "Prendre son envol"))))
  );
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
  return (
    /*#__PURE__*/
    // MODIF : px-4 pour éviter que la carte touche les bords sur mobile
    react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "px-4 w-full pb-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "max-w-md mx-auto bg-viking-rock/90 p-6 md:p-8 rounded-lg border-2 border-viking-gold shadow-2xl backdrop-blur-sm mt-4 md:mt-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("h2", {
      className: "text-2xl md:text-3xl font-dragon text-viking-gold mb-6 md:mb-8 text-center uppercase tracking-widest"
    }, "Rejoindre la Guilde"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "bg-red-900/40 border border-red-500 text-red-200 p-3 rounded mb-6 text-sm"
    }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("form", {
      onSubmit: handleSubmit,
      className: "space-y-4 md:space-y-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("label", {
      className: "block text-viking-light text-sm font-bold mb-2"
    }, "Nom de code (Pseudo)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("input", {
      type: "text",
      placeholder: "Ex: Krokmou",
      className: "w-full bg-black/50 border border-viking-gold/30 p-3 text-base rounded text-viking-parchment focus:border-viking-gold outline-none transition",
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
      className: "w-full bg-black/50 border border-viking-gold/30 p-3 text-base rounded text-viking-parchment focus:border-viking-gold outline-none transition",
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
      className: "w-full bg-black/50 border border-viking-gold/30 p-3 text-base rounded text-viking-parchment focus:border-viking-gold outline-none cursor-pointer",
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
      className: "w-full bg-black/50 border border-viking-gold/30 p-3 text-base rounded text-viking-parchment focus:border-viking-gold outline-none transition",
      value: formData.plainPassword,
      onChange: function onChange(e) {
        return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          plainPassword: e.target.value
        }));
      },
      required: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("button", {
      type: "submit",
      className: "w-full bg-viking-gold text-viking-dark font-extrabold py-3 md:py-4 rounded hover:bg-yellow-500 transition duration-300 shadow-lg uppercase tracking-wider mt-4 text-sm md:text-base"
    }, "Graver mon nom"))))
  );
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
  return (
    /*#__PURE__*/
    // MODIF : px-4 sur mobile, pb-12 pour le scroll
    react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "max-w-6xl mx-auto animate-fade-in px-4 pb-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "text-center mb-8 md:mb-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("h1", {
      className: "text-3xl md:text-5xl font-dragon text-viking-gold mb-4 drop-shadow-md"
    }, "L'Observatoire de Berk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("p", {
      className: "text-viking-light text-sm md:text-lg italic border-b border-viking-gold/30 inline-block pb-2"
    }, "Recensement officiel de l'archipel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "bg-viking-rock p-4 md:p-6 rounded-lg border-2 border-stone-600 shadow-2xl relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "absolute top-0 left-0 w-full h-1 bg-viking-gold"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("h3", {
      className: "text-xl md:text-2xl font-dragon text-white mb-4 md:mb-6"
    }, "Tr\xE9sor de Guerre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "h-56 md:h-64 relative"
    }, boxOfficeData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_41__.Bar, {
      options: options,
      data: boxOfficeData
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("p", {
      className: "text-center mt-10 text-stone-500 italic"
    }, "Chargement des donn\xE9es..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "bg-viking-rock p-4 md:p-6 rounded-lg border-2 border-stone-600 shadow-2xl relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "absolute top-0 left-0 w-full h-1 bg-viking-gold"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("h3", {
      className: "text-xl md:text-2xl font-dragon text-white mb-4 md:mb-6"
    }, "Clans & Tribus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "h-56 md:h-64 relative flex justify-center"
    }, populationData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_41__.Doughnut, {
      options: _objectSpread(_objectSpread({}, options), {}, {
        scales: {}
      }),
      data: populationData
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("p", {
      className: "text-center mt-10 text-stone-500 italic"
    }, "Chargement des clans..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "bg-viking-rock p-4 md:p-6 rounded-lg border-2 border-stone-600 shadow-2xl md:col-span-2 relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "absolute top-0 left-0 w-full h-1 bg-viking-gold"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("h3", {
      className: "text-xl md:text-2xl font-dragon text-white mb-4 md:mb-6"
    }, "Chronologie des D\xE9couvertes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
      className: "h-64 md:h-80 relative"
    }, timelineData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_41__.Line, {
      options: options,
      data: timelineData
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("p", {
      className: "text-center mt-10 text-stone-500 italic"
    }, "Analyse temporelle...")))))
  );
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-three_drei_core_Center_js-node_modules_react-three_drei_core_Stars-1163f0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLE9BQUEsQ0FBQTNELENBQUEsVUFBQUEsQ0FBQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFTLEVBQUM7SUFBaUQsQ0FBTSxDQUFDLGVBQ3ZFbEIsMkRBQUE7TUFBSWtCLFNBQVMsRUFBQztJQUF5RCxHQUFDLGdCQUFrQixDQUFDLGVBQzNGbEIsMkRBQUE7TUFBS2tCLFNBQVMsRUFBQztJQUEyQyxHQUNyRDZsQixjQUFjLGdCQUFHL21CLDJEQUFBLENBQUMybUIsc0RBQVE7TUFBQ29CLE9BQU8sRUFBQXpSLGFBQUEsQ0FBQUEsYUFBQSxLQUFNeVIsT0FBTztRQUFFTyxNQUFNLEVBQUMsQ0FBQztNQUFDLEVBQUU7TUFBQzNmLElBQUksRUFBRW9lO0lBQWUsQ0FBRSxDQUFDLGdCQUFHL21CLDJEQUFBO01BQUdrQixTQUFTLEVBQUM7SUFBeUMsR0FBQyx5QkFBMEIsQ0FDekssQ0FDSixDQUFDLGVBRU5sQiwyREFBQTtNQUFLa0IsU0FBUyxFQUFDO0lBQWtHLGdCQUM3R2xCLDJEQUFBO01BQUtrQixTQUFTLEVBQUM7SUFBaUQsQ0FBTSxDQUFDLGVBQ3ZFbEIsMkRBQUE7TUFBSWtCLFNBQVMsRUFBQztJQUF5RCxHQUFDLGdDQUErQixDQUFDLGVBRXhHbEIsMkRBQUE7TUFBS2tCLFNBQVMsRUFBQztJQUF1QixHQUNqQytsQixZQUFZLGdCQUFHam5CLDJEQUFBLENBQUM2UyxrREFBSTtNQUFDa1YsT0FBTyxFQUFFQSxPQUFRO01BQUNwZixJQUFJLEVBQUVzZTtJQUFhLENBQUUsQ0FBQyxnQkFBR2puQiwyREFBQTtNQUFHa0IsU0FBUyxFQUFDO0lBQXlDLEdBQUMsdUJBQXdCLENBQy9JLENBQ0osQ0FDSixDQUNKO0VBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVWLFNBQVMsRTs7Ozs7Ozs7Ozs7QUMvSHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9BcnRpY2xlRm9ybS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvQXJ0aWNsZVNob3cuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnRTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9Dc3ZDaGFydC5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvRGF0YVByb3ZpZGVyU3BhY2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvTmlnaHRGdXJ5LmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9TdGFyUmF0aW5nLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9WaWtpbmdQbGF5ZXIuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9BZG1pbkRhc2hib2FyZC5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0FydGljbGVQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvRm9ydW1QYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvSG9tZVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Mb2dpblBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9SZWdpc3RlclBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9TdGF0c1BhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vIEltcG9ydCBkZXMgc3R5bGVzXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBJbXBvcnQgZGVzIHBhZ2VzXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3BhZ2VzL0hvbWVQYWdlJztcclxuaW1wb3J0IEZvcnVtUGFnZSBmcm9tICcuL3BhZ2VzL0ZvcnVtUGFnZSc7XHJcbmltcG9ydCBBcnRpY2xlUGFnZSBmcm9tICcuL3BhZ2VzL0FydGljbGVQYWdlJztcclxuaW1wb3J0IFN0YXRzUGFnZSBmcm9tICcuL3BhZ2VzL1N0YXRzUGFnZSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBSZWdpc3RlclBhZ2UgZnJvbSAnLi9wYWdlcy9SZWdpc3RlclBhZ2UnO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJy4vcGFnZXMvTG9naW5QYWdlJztcclxuaW1wb3J0IEFydGljbGVTaG93IGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlU2hvdyc7XHJcblxyXG4vLyBOT1VWRUFVIDogSW1wb3J0IGRlIGxhIHBhZ2UgRGFzaGJvYXJkIEFkbWluXHJcbmltcG9ydCBBZG1pbkRhc2hib2FyZCBmcm9tICcuL3BhZ2VzL0FkbWluRGFzaGJvYXJkJztcclxuXHJcbmNvbnNvbGUubG9nKFwi8J+QsiBEw6ltYXJyYWdlIGRlIGwnYXBwbGljYXRpb24gRHJhZ29uQ01TLi4uXCIpO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBmb250LXNhbnMgdGV4dC12aWtpbmctcGFyY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogQkFOTknDiFJFICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0zMiBtZDpoLTQ4IG92ZXJmbG93LWhpZGRlbiBib3JkZXItYi00IGJvcmRlci12aWtpbmctZ29sZCByZWxhdGl2ZSBzaGFkb3ctMnhsIGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9iYW5uaWVyZS5wbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFubmnDqHJlIERyYWdvbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tdmlraW5nLWRhcmsgdG8tdHJhbnNwYXJlbnQgb3BhY2l0eS02MFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktMTAgcHgtNCBmbGV4LWdyb3cgcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ydW1cIiBlbGVtZW50PXs8Rm9ydW1QYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFJvdXRlIHBhdGg9XCIvZm9ydW0vYXJ0aWNsZS86aWRcIiBlbGVtZW50PXs8QXJ0aWNsZVBhZ2UgLz59IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcnRpY2xlLzppZFwiIGVsZW1lbnQ9ezxBcnRpY2xlU2hvdyAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc3RhdGlzdGlxdWVcIiBlbGVtZW50PXs8U3RhdHNQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGVsZW1lbnQ9ezxSZWdpc3RlclBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBOT1VWRUxMRSBST1VURSA6IFNhbGxlIGR1IENvbnNlaWwgKEFkbWluKSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiBlbGVtZW50PXs8QWRtaW5EYXNoYm9hcmQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIGJvcmRlci10IGJvcmRlci12aWtpbmctZ29sZC8zMCBweS02IG10LTEwIHRleHQtY2VudGVyIHRleHQtdmlraW5nLWxpZ2h0IGZvbnQtZHJhZ29uIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD7CqSBMJ0FjYWTDqW1pZSBkZSBCZXJrIC0gQXJjaGl2ZXMgRHJhY29uaXF1ZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LXJvb3QnKTtcclxuaWYgKHJvb3RFbGVtZW50KSB7XHJcbiAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChyb290RWxlbWVudCk7XHJcbiAgICByb290LnJlbmRlcig8QXBwIC8+KTtcclxuICAgIGNvbnNvbGUubG9nKFwi4pyFIFJlYWN0IGluamVjdMOpIGF2ZWMgc3VjY8OocyAhXCIpO1xyXG59IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBJbXBvc3NpYmxlIGRlIHRyb3V2ZXIgbCfDqWzDqW1lbnQgI3JlYWN0LXJvb3RcIik7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8g8J+RhyAxLiBJTVBPUlQgRFUgR1JBUEhJUVVFIChJbmRpc3BlbnNhYmxlKVxyXG5pbXBvcnQgQ3N2Q2hhcnQgZnJvbSAnLi9Dc3ZDaGFydCc7IFxyXG5cclxuY29uc3QgQXJ0aWNsZUZvcm0gPSAoeyBpZCA9IG51bGwsIG9uU3VjY2VzcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtibG9jcywgc2V0QmxvY3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXNhdGlvbiBhdmVjIGRlcyB0YWJsZWF1eCB2aWRlcyBwb3VyIMOpdml0ZXIgbGVzIGNyYXNoc1xyXG4gICAgY29uc3QgW211c2ljTGlicmFyeSwgc2V0TXVzaWNMaWJyYXJ5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkYXRhc2V0TGlicmFyeSwgc2V0RGF0YXNldExpYnJhcnldID0gdXNlU3RhdGUoW10pOyBcclxuXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gLS0tIDEuIENIQVJHRU1FTlQgREVTIERPTk7DiUVTIERFIEwnQVJUSUNMRSAoU0kgTU9ESUZJQ0FUSU9OKSAtLS1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUoZGF0YS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VtbWFyeShkYXRhLnN1bW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIGZvcm1hdGUgbGVzIGJsb2NzIHJlw6d1cyBkZSBsJ0FQSSBwb3VyIHF1J2lscyBtYXJjaGVudCBkYW5zIGxlIGZvcm11bGFpcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRCbG9jcyA9IChkYXRhLmJsb2NzIHx8IFtdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdml6VHlwZSA9ICdiYXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBiLmNvbnRlbnQgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpIGMnZXN0IHVuIGdyYXBoaXF1ZSwgb24gc8OpcGFyZSBsZSB0eXBlIGV0IGwnVVJMIChmb3JtYXQgXCJ0eXBlOjp1cmxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiLnR5cGUgPT09ICdzdGF0cycgfHwgYi50eXBlID09PSAndml6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gY29udGVudC5zcGxpdCgnOjonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXpUeXBlID0gcGFydHNbMF0gfHwgJ2Jhcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IHBhcnRzWzFdIHx8ICcnOyAvLyBMJ1VSTCBkdSBDU1YgZGV2aWVudCBsZSBjb250ZW50L21lZGlhVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYi5pZCwgLy8gT24gZ2FyZGUgbCdJRCBwb3VyIHNhdm9pciBxdWUgY2UgYmxvYyBleGlzdGUgZMOpasOgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogYi50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsIC8vIFRleHRlIG91IFVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhVXJsOiBjb250ZW50LCAvLyBQb3VyIHByw6l2aXN1YWxpc2VyIGltYWdlcy9zb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdml6VHlwZTogdml6VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRCbG9jcyhmb3JtYXR0ZWRCbG9jcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBjaGFyZ2VtZW50IGFydGljbGVcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIC8vIC0tLSBDSEFSR0VNRU5UIERFUyBMSUJSQUlSSUVTIChNdXNpcXVlIC8gRGF0YXNldHMpIC0tLVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyAxLiBNdXNpcXVlc1xyXG4gICAgICAgIGZldGNoKCcvYXBpL211c2ljL2xpc3QnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLm9rID8gcmVzLmpzb24oKSA6IFtdKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSBzZXRNdXNpY0xpYnJhcnkoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcIkVycmV1ciBtdXNpcXVlXCIsIGVycikpO1xyXG5cclxuICAgICAgICAvLyAyLiBEYXRhc2V0c1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2xpc3QtZGF0YXNldHMnKSBcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgQVBJIERhdGFzZXRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhc2V0TGlicmFyeShbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkltcG9zc2libGUgZGUgY2hhcmdlciBsZXMgZGF0YXNldHNcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KFtdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gLS0tIEdFU1RJT04gREVTIEJMT0NTIC0tLVxyXG4gICAgY29uc3QgYWRkQmxvYyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICAgc2V0QmxvY3MoWy4uLmJsb2NzLCB7IFxyXG4gICAgICAgICAgICB0eXBlLCBcclxuICAgICAgICAgICAgY29udGVudDogJycsIFxyXG4gICAgICAgICAgICBtZWRpYVVybDogJycsIFxyXG4gICAgICAgICAgICB2aXpUeXBlOiAnYmFyJywgXHJcbiAgICAgICAgICAgIGZpbGU6IG51bGwsICAgXHJcbiAgICAgICAgICAgIC8vIFBhcyBkJ0lEIGljaSwgYydlc3QgdW4gbm91dmVhdSBibG9jXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVCbG9jID0gKGluZGV4VG9SZW1vdmUpID0+IHtcclxuICAgICAgICBzZXRCbG9jcyhibG9jcy5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gaW5kZXhUb1JlbW92ZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVCbG9jID0gKGluZGV4LCBmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdCbG9jcyA9IFsuLi5ibG9jc107XHJcbiAgICAgICAgbmV3QmxvY3NbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xyXG4gICAgICAgIHNldEJsb2NzKG5ld0Jsb2NzKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChpbmRleCwgZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVCbG9jKGluZGV4LCAnZmlsZScsIGZpbGUpO1xyXG4gICAgICAgICAgICBpZiAoZmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVCbG9jKGluZGV4LCAnbWVkaWFVcmwnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIFNPVU1JU1NJT04gKEhZQlJJREUgOiBQT1NUIG91IFBBVENIKSAtLS1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDwn5OdIE1PREUgw4lESVRJT04gKFBBVENIIEpTT04pXHJcbiAgICAgICAgICAgICAgICAvLyBBdHRlbnRpb24gOiBMJ3VwbG9hZCBkZSBub3V2ZWF1eCBmaWNoaWVycyBpbWFnZSBuJ2VzdCBwYXMgZ8OpcsOpIGljaSBwb3VyIHNpbXBsaWZpZXIuXHJcbiAgICAgICAgICAgICAgICAvLyBPbiBtZXQgw6Agam91ciB0ZXh0ZXMsIHRpdHJlcywgY2hvaXggbXVzaXF1ZS9zdGF0cy5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnRpY2xlRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NzOiBibG9jcy5tYXAoKGJsb2MsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5hbENvbnRlbnQgPSBibG9jLmNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbiByZWNvbnN0cnVpdCBsZSBmb3JtYXQgc3DDqWNpYWwgcG91ciBsZXMgc3RhdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2MudHlwZSA9PT0gJ3N0YXRzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2kgbCd1dGlsaXNhdGV1ciBhIGNoYW5nw6kgbCdVUkwgdmlhIGxlIHNlbGVjdCwgYydlc3QgZGFucyBibG9jLm1lZGlhVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbENvbnRlbnQgPSBgJHtibG9jLnZpelR5cGV9Ojoke2Jsb2MubWVkaWFVcmx9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChibG9jLnR5cGUgPT09ICdtdXNpYycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQ29udGVudCA9IGJsb2MubWVkaWFVcmw7IC8vIExlIG5vbSBkdSBmaWNoaWVyIGNob2lzaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJsb2MudHlwZSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2kgcGFzIGRlIG5vdXZlYXUgZmljaGllciwgb24gZ2FyZGUgbCdhbmNpZW5uZSBVUkxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQ29udGVudCA9IGJsb2MubWVkaWFVcmw7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdHJ1Y3R1cmUgZCd1biBibG9jIHBvdXIgbCdBUElcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY1BheWxvYWQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBibG9jLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaW5kZXggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZmluYWxDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaSBsZSBibG9jIGF2YWl0IGTDqWrDoCB1biBJRCwgb24gbCdlbnZvaWUgcG91ciBsZSBtZXR0cmUgw6Agam91ciAoYXUgbGlldSBkZSBsZSByZWNyw6llcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2MuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NQYXlsb2FkWydAaWQnXSA9IGAvYXBpL2Jsb2NzLyR7YmxvYy5pZH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmxvY1BheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vbWVyZ2UtcGF0Y2granNvbicgLy8gU3RhbmRhcmQgQVBJIFBsYXRmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhcnRpY2xlRGF0YSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTGUgcsOpY2l0IGEgw6l0w6kgcsOpw6ljcml0IGF2ZWMgc3VjY8OocyAhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSBtb2RpZmljYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g4pyoIE1PREUgQ1LDiUFUSU9OIChQT1NUIEZvcm1EYXRhKVxyXG4gICAgICAgICAgICAgICAgLy8gQydlc3QgdG9uIGNvZGUgZCdvcmlnaW5lIHF1aSBnw6hyZSBiaWVuIGwndXBsb2FkIGluaXRpYWxcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdW1tYXJ5Jywgc3VtbWFyeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYmxvY3MuZm9yRWFjaCgoYmxvYywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVt0eXBlXWAsIGJsb2MudHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bcG9zaXRpb25dYCwgaW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnaDInLCAncGFyYWdyYXBoJ10uaW5jbHVkZXMoYmxvYy50eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVtjb250ZW50XWAsIGJsb2MuY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9jLnR5cGUgPT09ICdpbWFnZScgJiYgYmxvYy5maWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW2ltYWdlRmlsZV1gLCBibG9jLmZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2MudHlwZSA9PT0gJ3N0YXRzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVt2aXpUeXBlXWAsIGJsb2Mudml6VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW2NzdlBhdGhdYCwgYmxvYy5tZWRpYVVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnbXVzaWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW211c2ljRmlsZU5hbWVdYCwgYmxvYy5tZWRpYVVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jdXN0b20vYXJ0aWNsZXMvY3JlYXRlJywgeyBcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAgfSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJWb3RyZSByw6ljaXQgYSDDqXTDqSBncmF2w6kgYXZlYyBzdWNjw6hzICFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKCk7IFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBcIiArIChlcnJvckRhdGEubWVzc2FnZSB8fCBcIlByb2Jsw6htZSBzZXJ2ZXVyXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZS5cIik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcC00IHN1ciBtb2JpbGUsIG1heC13LTR4bCBwb3VyIGxpbWl0ZXIgc3VyIGRlc2t0b3BcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgcC00IG1kOnAtOCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctMnhsIG1heC13LTR4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IFRhaWxsZSB0aXRyZSAqL31cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNiBtZDptYi04IHRleHQtY2VudGVyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAge2lkID8gJ01vZGlmaWVyIGxhIENocm9uaXF1ZScgOiAnTm91dmVsbGUgQ2hyb25pcXVlJ31cclxuICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogcC0zIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgdGV4dC13aGl0ZSBwLTMgbWQ6cC00IHRleHQteGwgbWQ6dGV4dC0yeGwgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZFwiIHBsYWNlaG9sZGVyPVwiVGl0cmUuLi5cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3N1bW1hcnl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VtbWFyeShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCB0ZXh0LXN0b25lLTMwMCBwLTMgbWQ6cC00IGgtMjQgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZFwiIHBsYWNlaG9sZGVyPVwiUsOpc3Vtw6kuLi5cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IG1iLThcIj5cclxuICAgICAgICAgICAgICAgIHtibG9jcy5tYXAoKGJsb2MsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBwLTQgc3VyIG1vYmlsZVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtibG9jLmlkIHx8IGluZGV4fSBjbGFzc05hbWU9XCJiZy1zdG9uZS04MDAvNTAgcC00IG1kOnAtNiBib3JkZXItbC00IGJvcmRlci12aWtpbmctZ29sZCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVCbG9jKGluZGV4KX0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXJlZC01MDAgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYW5zaXRpb24gcC0yXCI+U3VwcHJpbWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIG1iLTQgdHJhY2tpbmctd2lkZXN0XCI+QmxvYyB7aW5kZXggKyAxfSA6IHtibG9jLnR5cGV9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEgyICYgUGFyYWdyYXBoICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAnaDInICYmIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtibG9jLmNvbnRlbnR9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ2NvbnRlbnQnLCBlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC13aGl0ZSBmb250LWJvbGRcIiBwbGFjZWhvbGRlcj1cIlNvdXMtdGl0cmUuLi5cIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ3BhcmFncmFwaCcgJiYgPHRleHRhcmVhIHZhbHVlPXtibG9jLmNvbnRlbnR9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ2NvbnRlbnQnLCBlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC1zdG9uZS0zMDAgaC0zMlwiIHBsYWNlaG9sZGVyPVwiVGV4dGUuLi5cIiAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJbWFnZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ2ltYWdlJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaWQgJiYgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZUNoYW5nZShpbmRleCwgZSl9IGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwIHRleHQtc20gdy1mdWxsXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MubWVkaWFVcmwgJiYgPGltZyBzcmM9e2Jsb2MubWVkaWFVcmx9IGFsdD1cIlByZXZpZXdcIiBjbGFzc05hbWU9XCJtdC00IG1heC1oLTQwIGJvcmRlciBib3JkZXItc3RvbmUtNjAwXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdGF0cyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ3N0YXRzJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IGdyaWQtY29scy0xIHN1ciBtb2JpbGUgcG91ciBlbXBpbGVyIGNvbnRyw7RsZXMgZXQgZ3JhcGhpcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHRleHQteHMgbWItMSBibG9jayB1cHBlcmNhc2UgZm9udC1ib2xkXCI+RG9ubsOpZXMgKENTVik8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICdtZWRpYVVybCcsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2MubWVkaWFVcmwgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0gQ2hvaXNpciB1biBqZXUgZGUgZG9ubsOpZXMgLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShkYXRhc2V0TGlicmFyeSkgJiYgZGF0YXNldExpYnJhcnkubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZC5pZH0gdmFsdWU9e2Quc291cmNlfT57ZC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHRleHQteHMgbWItMSBibG9jayB1cHBlcmNhc2UgZm9udC1ib2xkXCI+VHlwZSBkZSBHcmFwaGlxdWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1snYmFyJywgJ2xpbmUnLCAncGllJ10ubWFwKHR5cGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICd2aXpUeXBlJywgdHlwZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTIgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIGJvcmRlciB0cmFuc2l0aW9uIGZsZXgtMSBtZDpmbGV4LW5vbmUgJHtibG9jLnZpelR5cGUgPT09IHR5cGUgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBib3JkZXItdmlraW5nLWdvbGQnIDogJ2JnLWJsYWNrIHRleHQtc3RvbmUtNTAwIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6dGV4dC13aGl0ZSd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svMjAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtWzIwMHB4XSByb3VuZGVkIHAtMiBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MubWVkaWFVcmwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgbWluLWgtWzIwMHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3N2Q2hhcnQgY3N2VXJsPXtibG9jLm1lZGlhVXJsfSB2aXpUeXBlPXtibG9jLnZpelR5cGUgfHwgJ2Jhcid9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNjAwIHRleHQteHMgaXRhbGljXCI+U8OpbGVjdGlvbm5leiB1biBmaWNoaWVyLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTXVzaXF1ZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ211c2ljJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ21lZGlhVXJsJywgZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0zIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jLm1lZGlhVXJsIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIENob2lzaXIgdW5lIG3DqWxvZGllIC0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge211c2ljTGlicmFyeSAmJiBPYmplY3QuZW50cmllcyhtdXNpY0xpYnJhcnkpLm1hcCgoW2ZvbGRlciwgZmlsZXNdKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRncm91cCBrZXk9e2ZvbGRlcn0gbGFiZWw9e2ZvbGRlci50b1VwcGVyQ2FzZSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KGZpbGVzKSAmJiBmaWxlcy5tYXAoZmlsZSA9PiA8b3B0aW9uIGtleT17ZmlsZX0gdmFsdWU9e2Ake2ZvbGRlcn0vJHtmaWxlfWB9PntmaWxlfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0Z3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IEJhcnJlIGQnb3V0aWxzIHJlc3BvbnNpdmUgYXZlYyBmbGV4LXdyYXAgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTIganVzdGlmeS1jZW50ZXIgbWItMTAgcGItMTAgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJUaXRyZSBIMlwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ2gyJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIlBhcmFncmFwaGVcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdwYXJhZ3JhcGgnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiSW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdpbWFnZScpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJHcmFwaGlxdWVcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdzdGF0cycpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJNdXNpcXVlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnbXVzaWMnKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17bG9hZGluZ30gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayB1cHBlcmNhc2UgcHktNCBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LVswXzBfMjBweF9yZ2JhKDIxMiwxNzUsNTUsMC40KV0gZGlzYWJsZWQ6b3BhY2l0eS01MCB0ZXh0LXNtIG1kOnRleHQtYmFzZSB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKGlkID8gJ1LDqcOpY3JpdHVyZS4uLicgOiAnR3JhdnVyZSBlbiBjb3Vycy4uLicpIDogKGlkID8gJ01ldHRyZSDDoCBqb3VyIGxlIFLDqWNpdCcgOiAnUHVibGllciBsYSBDaHJvbmlxdWUnKX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIE1PRElGIDogQm91dG9uIHJlc3BvbnNpdmUgKGZsZXgtZ3JvdylcclxuY29uc3QgVG9vbEJ0biA9ICh7IGxhYmVsLCBvbkNsaWNrIH0pID0+IChcclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT1cInB4LTQgcHktMyBtZDpweS0yIGJnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTMwMCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciBmbGV4LWdyb3cgbWQ6ZmxleC1ncm93LTAgcm91bmRlZFwiPlxyXG4gICAgICAgICsge2xhYmVsfVxyXG4gICAgPC9idXR0b24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlRm9ybTsiLCIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyB1c2VQYXJhbXMsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG4vLyBpbXBvcnQgQ3N2Q2hhcnQgZnJvbSBcIi4vQ3N2Q2hhcnRcIjtcclxuLy8gaW1wb3J0IFZpa2luZ1BsYXllciBmcm9tIFwiLi9WaWtpbmdQbGF5ZXJcIjsgLy8g8J+RiCBJbXBvcnQgZHUgbm91dmVhdSBwbGF5ZXJcclxuLy8gaW1wb3J0IENvbW1lbnRTZWN0aW9uIGZyb20gXCIuL0NvbW1lbnRTZWN0aW9uXCI7XHJcbi8vIGltcG9ydCBTdGFyUmF0aW5nIGZyb20gXCIuL1N0YXJSYXRpbmdcIjtcclxuXHJcbi8vIGNvbnN0IEFydGljbGVTaG93ID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbi8vICAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuLy8gICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgICAgLy8gMS4gVsOpcmlmIFRva2VuIHBvdXIgbCdpbnRlcmZhY2UgKFVzZXIgU3RhdGUpXHJcbi8vICAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuLy8gICAgICAgICBpZiAodG9rZW4pIHtcclxuLy8gICAgICAgICAgICAgdHJ5IHsgc2V0VXNlcihqd3REZWNvZGUodG9rZW4pKTsgfSBjYXRjaCAoZSkge31cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC8vIDIuIFByw6lwYXJhdGlvbiBkZXMgRW4tdMOqdGVzIChIRUFERVJTKVxyXG4vLyAgICAgICAgIC8vIE9uIHByw6lwYXJlIGxlIGJhZGdlIHBvdXIgZW50cmVyIGRhbnMgbGUgZG9uam9uXHJcbi8vICAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuLy8gICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJ1xyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICAgICAgaWYgKHRva2VuKSB7XHJcbi8vICAgICAgICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLy8gMy4gRmV0Y2ggQXJ0aWNsZSBBVkVDIGxlcyBoZWFkZXJzXHJcbi8vICAgICAgICAgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkgLy8g8J+RiCBBSk9VVCBJQ0lcclxuLy8gICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gKHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChcIkFjY8OocyByZWZ1c8OpIG91IGludHJvdXZhYmxlXCIpKSlcclxuLy8gICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHNldEFydGljbGUoZGF0YSk7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuLy8gICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgIH0sIFtpZF0pO1xyXG5cclxuLy8gICAgIGlmIChsb2FkaW5nKVxyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZ29sZCBwLTEwIGFuaW1hdGUtcHVsc2VcIj5cclxuLy8gICAgICAgICAgICAgICAgIEludm9jYXRpb24gZHUgcsOpY2l0Li4uXHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICBpZiAoIWFydGljbGUpXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXJlZC01MDAgcC0xMFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgUGFyY2hlbWluIGludHJvdXZhYmxlLlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG5cclxuLy8gICAgIC8vIPCflI4gT04gQ0hFUkNIRSBMQSBNVVNJUVVFIElDSVxyXG4vLyAgICAgY29uc3QgbXVzaWNCbG9jID0gYXJ0aWNsZS5ibG9jcz8uZmluZCgoYikgPT4gYi50eXBlID09PSBcIm11c2ljXCIpO1xyXG4vLyAgICAgLy8gT24gbmV0dG9pZSBsZSBjaGVtaW4gKHBhcmZvaXMgaWwgYSAvdXBsb2Fkcy8uLi4sIHBhcmZvaXMgbm9uKVxyXG4vLyAgICAgY29uc3QgbXVzaWNTcmMgPSBtdXNpY0Jsb2MgPyBgL211c2lxdWUvJHttdXNpY0Jsb2MuY29udGVudH1gIDogbnVsbDtcclxuXHJcbi8vICAgICAvLyBPbiBwcsOpcGFyZSBsZXMgYXV0cmVzIGJsb2NzIChzYW5zIGxhIG11c2lxdWUgcG91ciDDqXZpdGVyIGxlcyBkb3VibG9ucylcclxuLy8gICAgIGNvbnN0IGNvbnRlbnRCbG9jcyA9XHJcbi8vICAgICAgICAgYXJ0aWNsZS5ibG9jc1xyXG4vLyAgICAgICAgICAgICA/LmZpbHRlcigoYikgPT4gYi50eXBlICE9PSBcIm11c2ljXCIpXHJcbi8vICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbikgfHwgW107XHJcblxyXG4vLyAgICAgY29uc3QgaGFuZGxlUmF0ZSA9IGFzeW5jIChzY29yZSkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuLy8gICAgICAgICBpZiAoIXRva2VuKSByZXR1cm4gYWxlcnQoXCJJbCBmYXV0IMOqdHJlIGNvbm5lY3TDqSBwb3VyIG5vdGVyICFcIik7XHJcblxyXG4vLyAgICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9yYXRpbmdzXCIsIHtcclxuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzY29yZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICBhcnRpY2xlOiBgL2FwaS9hcnRpY2xlcy8ke2lkfWAsXHJcbi8vICAgICAgICAgICAgICAgICB9KSxcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuLy8gICAgICAgICAgICAgICAgIGFsZXJ0KFwiVm90cmUgbm90ZSBhIMOpdMOpIGdyYXbDqWUgIVwiKTtcclxuLy8gICAgICAgICAgICAgICAgIC8vIE9wdGlvbm5lbCA6IFJlY2hhcmdlciBsJ2FydGljbGUgcG91ciB2b2lyIGxhIG5vdXZlbGxlIG1veWVubmVcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcC04IG1pbi1oLXNjcmVlbiBiZy1zdG9uZS05MDAgYm9yZGVyLXggYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctMnhsXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxMaW5rXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdG89XCIvZm9ydW1cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgbWItOCBpbmxpbmUtYmxvY2sgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCJcclxuLy8gICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICDihpAgUmV0b3VyIGF1IEhhbGxcclxuLy8gICAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTQgbWItNlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVJZD17aWR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSYXRpbmc9e2FydGljbGUuYXZlcmFnZVJhdGluZ31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRlPXtoYW5kbGVSYXRlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDAgdGV4dC1zbVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBNb3llbm5lIDoge2FydGljbGUuYXZlcmFnZVJhdGluZyB8fCBcIjBcIn0vNVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgdGV4dC1jZW50ZXIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBkcm9wLXNoYWRvdy1sZ1wiPlxyXG4vLyAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbi8vICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMC81MCBwLTggYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWdvbGQgbWItOCBpdGFsaWMgdGV4dC1zdG9uZS0zMDAgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgc2hhZG93LWlubmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgICAgICAgIHsvKiDwn461IExFIFBMQVlFUiBFU1QgSUNJIChKdXN0ZSBzb3VzIGxlIHLDqXN1bcOpKSAqL31cclxuLy8gICAgICAgICAgICAge211c2ljU3JjICYmIChcclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTIgYW5pbWF0ZS1mYWRlLWluLXVwXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFZpa2luZ1BsYXllciBzcmM9e211c2ljU3JjfSBhdXRvUGxheT17dHJ1ZX0gLz5cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICApfVxyXG5cclxuLy8gICAgICAgICAgICAgey8qIExlIHJlc3RlIGR1IGNvbnRlbnUgKi99XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xMlwiPlxyXG4vLyAgICAgICAgICAgICAgICAge2NvbnRlbnRCbG9jcy5tYXAoKGJsb2MpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGJsb2MudHlwZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaDJcIjpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTcwMCBwYi0yIG10LThcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MuY29udGVudH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwYXJhZ3JhcGhcIjpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTMwMCBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1sZyB3aGl0ZXNwYWNlLXByZS1saW5lIHRleHQtanVzdGlmeVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5jb250ZW50fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2VcIjpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LThcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtibG9jLmNvbnRlbnR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJbGx1c3RyYXRpb25cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtaC1bNTAwcHhdIGJvcmRlci00IGJvcmRlci1zdG9uZS04MDAgc2hhZG93LVswXzBfMTVweF9yZ2JhKDAsMCwwLDAuNSldIHJvdW5kZWRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdGF0c1wiOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidml6XCI6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGJsb2MuY29udGVudFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYmxvYy5jb250ZW50LnNwbGl0KFwiOjpcIilcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtdO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC02IHJvdW5kZWQtbGcgbXktOFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWJvbGQgdGV4dC1zbSB1cHBlcmNhc2UgbWItNCB0cmFja2luZy13aWRlc3QgdGV4dC1jZW50ZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCfk4ogRG9ubsOpZXMgZHUgQ2xhblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOTZcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDc3ZDaGFydFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzdlVybD17cGFydHNbMV19XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdml6VHlwZT17cGFydHNbMF0gfHwgXCJiYXJcIn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgcHQtMTAgYm9yZGVyLXQgYm9yZGVyLXN0b25lLTgwMCB0ZXh0LWNlbnRlciB0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5cclxuLy8gICAgICAgICAgICAgICAgIEdyYXbDqSBwYXIge2FydGljbGUuYXV0aG9yPy5wc2V1ZG8gfHwgXCJVbiBpbmNvbm51XCJ9IOKAontcIiBcIn1cclxuLy8gICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShhcnRpY2xlLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8Q29tbWVudFNlY3Rpb24gYXJ0aWNsZUlkPXtpZH0gLz5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBBcnRpY2xlU2hvdztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBDc3ZDaGFydCBmcm9tIFwiLi9Dc3ZDaGFydFwiO1xyXG5pbXBvcnQgVmlraW5nUGxheWVyIGZyb20gXCIuL1Zpa2luZ1BsYXllclwiO1xyXG5pbXBvcnQgQ29tbWVudFNlY3Rpb24gZnJvbSBcIi4vQ29tbWVudFNlY3Rpb25cIjtcclxuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSBcIi4vU3RhclJhdGluZ1wiO1xyXG5cclxuY29uc3QgQXJ0aWNsZVNob3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IChyZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QoXCJFcnJldXJcIikpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb25uw6llcyByZcOndWVzIDpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZylcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWdvbGQgcC0xMCBhbmltYXRlLXB1bHNlXCI+XHJcbiAgICAgICAgICAgICAgICBJbnZvY2F0aW9uIGR1IHLDqWNpdC4uLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgaWYgKCFhcnRpY2xlKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1yZWQtNTAwIHAtMTBcIj5cclxuICAgICAgICAgICAgICAgIFBhcmNoZW1pbiBpbnRyb3V2YWJsZS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAvLyAtLS0gTE9HSVFVRSBEJ0VYVFJBQ1RJT04gLS0tXHJcbiAgICBsZXQgY3VzdG9tU3R5bGVzID0ge307XHJcbiAgICBjb25zdCByYXdDb25maWcgPSBhcnRpY2xlLmRlc2lnbkNvbmZpZztcclxuXHJcbiAgICBpZiAocmF3Q29uZmlnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY3VzdG9tU3R5bGVzID1cclxuICAgICAgICAgICAgICAgIHR5cGVvZiByYXdDb25maWcgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA/IEpTT04ucGFyc2UocmF3Q29uZmlnKVxyXG4gICAgICAgICAgICAgICAgICAgIDogcmF3Q29uZmlnO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBkZSBkw6ljb2RhZ2UgZGVzIHN0eWxlc1wiLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIETDiUZJTklUSU9OIERFUyBDT1VMRVVSUyAtLS1cclxuICAgIC8vIE9uIHV0aWxpc2UgbGVzIHZhbGV1cnMgZGUgbGEgQkRELCBzaW5vbiBibGFuYyBwYXIgZMOpZmF1dCAoc2VyYSBnw6lyw6kgcGFyIGxhIGNsYXNzZSBDU1MpXHJcbiAgICBjb25zdCBmaW5hbFRpdGxlQ29sb3IgPSBjdXN0b21TdHlsZXMudGl0bGVDb2xvciB8fCBcIiNmZmZmZmZcIjtcclxuICAgIGNvbnN0IGZpbmFsQ29udGVudEJnID0gY3VzdG9tU3R5bGVzLmNvbnRlbnRCZyB8fCBcInJnYmEoNDEsIDM3LCAzNiwgMC41KVwiO1xyXG5cclxuICAgIGNvbnN0IG11c2ljQmxvYyA9IGFydGljbGUuYmxvY3M/LmZpbmQoKGIpID0+IGIudHlwZSA9PT0gXCJtdXNpY1wiKTtcclxuICAgIGNvbnN0IG11c2ljU3JjID0gbXVzaWNCbG9jID8gYC9tdXNpcXVlLyR7bXVzaWNCbG9jLmNvbnRlbnR9YCA6IG51bGw7XHJcblxyXG4gICAgY29uc3QgY29udGVudEJsb2NzID0gYXJ0aWNsZS5ibG9jc1xyXG4gICAgICAgID8gWy4uLmFydGljbGUuYmxvY3NdXHJcbiAgICAgICAgICAgICAgLmZpbHRlcigoYikgPT4gYi50eXBlICE9PSBcIm11c2ljXCIpXHJcbiAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKVxyXG4gICAgICAgIDogW107XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlUmF0ZSA9IGFzeW5jIChzY29yZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBpZiAoIXRva2VuKSByZXR1cm4gYWxlcnQoXCJJbCBmYXV0IMOqdHJlIGNvbm5lY3TDqSBwb3VyIG5vdGVyICFcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9yYXRpbmdzXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzY29yZSxcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlOiBgL2FwaS9hcnRpY2xlcy8ke2lkfWAsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVm90cmUgbm90ZSBhIMOpdMOpIGdyYXbDqWUgIVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbm5lbCA6IFJlY2hhcmdlciBsJ2FydGljbGUgcG91ciB2b2lyIGxhIG5vdXZlbGxlIG1veWVubmVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcC00IHN1ciBtb2JpbGUsIHAtOCBzdXIgZGVza3RvcFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcC00IG1kOnAtOCBtaW4taC1zY3JlZW4gYmctc3RvbmUtOTAwIG1kOmJvcmRlci14IGJvcmRlci1zdG9uZS04MDAgc2hhZG93LTJ4bFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIEVOLVTDilRFIDogQm91dG9uIFJldG91ciBldCBOb3RhdGlvbiAqL31cclxuICAgICAgICAgICAgey8qIE1PRElGIDogZmxleC1jb2wtcmV2ZXJzZSBzdXIgbW9iaWxlIHBvdXIgbWV0dHJlIGxlIHJldG91ciBlbiBiYXMgb3UgZmxleC1jb2wgY2xhc3NpcXVlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1kOml0ZW1zLWNlbnRlciBtYi02IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL2ZvcnVtXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIGlubGluZS1ibG9jayB0ZXh0LXhzIG1kOnRleHQtc20gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBvcmRlci0yIG1kOm9yZGVyLTFcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOKGkCBSZXRvdXIgYXUgSGFsbFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB3LWZ1bGwgc3VyIG1vYmlsZSBwb3VyIGNlbnRyZXIgbGEgbm90YXRpb24gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1kOmp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtNCB3LWZ1bGwgbWQ6dy1hdXRvIG9yZGVyLTEgbWQ6b3JkZXItMiBiZy1zdG9uZS04MDAvNTAgcC0zIHJvdW5kZWQgbWQ6YmctdHJhbnNwYXJlbnQgbWQ6cC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXJSYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZUlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJhdGluZz17YXJ0aWNsZS5hdmVyYWdlUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJhdGU9e2hhbmRsZVJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCB0ZXh0LXhzIG1kOnRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTW95ZW5uZSA6IHthcnRpY2xlLmF2ZXJhZ2VSYXRpbmcgfHwgXCIwXCJ9LzVcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogVElUUkUgKi99XHJcbiAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXCItLWFydGljbGUtdGl0bGUtY29sb3JcIjogZmluYWxUaXRsZUNvbG9yIH19XHJcbiAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHRleHQtM3hsIG1vYmlsZSwgYnJlYWstd29yZHMgcG91ciDDqXZpdGVyIGTDqWJvcmRlbWVudFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1keW5hbWljLXRpdGxlIHRleHQtM3hsIG1kOnRleHQtNXhsIGZvbnQtZHJhZ29uIG1iLTYgdGV4dC1jZW50ZXIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBkcm9wLXNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgYnJlYWstd29yZHMgbGVhZGluZy10aWdodFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgey8qIFLDiVNVTcOJICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGZpbmFsQ29udGVudEJnIH19XHJcbiAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHAtNSBzdXIgbW9iaWxlLCB0ZXh0LWJhc2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNSBtZDpwLTggYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWdvbGQgbWItOCBpdGFsaWMgdGV4dC1zdG9uZS0zMDAgdGV4dC1iYXNlIG1kOnRleHQtbGcgbGVhZGluZy1yZWxheGVkIHNoYWRvdy1pbm5lciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgdGV4dC1qdXN0aWZ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2FydGljbGUuc3VtbWFyeX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7bXVzaWNTcmMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWtpbmdQbGF5ZXIgc3JjPXttdXNpY1NyY30gYXV0b1BsYXk9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS04IG1kOnNwYWNlLXktMTJcIj5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50QmxvY3MubWFwKChibG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChibG9jLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImgyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdGV4dC0yeGwgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJvcmRlci1iIGJvcmRlci1zdG9uZS03MDAgcGItMiBtdC04IGJyZWFrLXdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwYXJhZ3JhcGhcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHRleHQtYmFzZSBtb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS0zMDAgbGVhZGluZy1yZWxheGVkIHRleHQtYmFzZSBtZDp0ZXh0LWxnIHdoaXRlc3BhY2UtcHJlLWxpbmUgdGV4dC1qdXN0aWZ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImltYWdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS04XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YmxvYy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWxsdXN0cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogbWF4LXctZnVsbCBwb3VyIG5lIHBhcyBkw6lwYXNzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctZnVsbCBtZDptYXgtaC1bNTAwcHhdIGJvcmRlci00IGJvcmRlci1zdG9uZS04MDAgc2hhZG93LXhsIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0YXRzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2aXpcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gYmxvYy5jb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBibG9jLmNvbnRlbnQuc3BsaXQoXCI6OlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBwLTQgbWQ6cC02IHJvdW5kZWQtbGcgbXktOCBzaGFkb3ctaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgZm9udC1ib2xkIHRleHQteHMgbWQ6dGV4dC1zbSB1cHBlcmNhc2UgbWItNCB0cmFja2luZy13aWRlc3QgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCfk4ogRG9ubsOpZXMgZHUgQ2xhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBoLTY0IHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02NCBtZDpoLTk2IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3N2Q2hhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3ZVcmw9e3BhcnRzWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpelR5cGU9e3BhcnRzWzBdIHx8IFwiYmFyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIG1kOm10LTIwIHB0LTggbWQ6cHQtMTAgYm9yZGVyLXQgYm9yZGVyLXN0b25lLTgwMCB0ZXh0LWNlbnRlciB0ZXh0LXN0b25lLTUwMCB0ZXh0LVsxMHB4XSBtZDp0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgIEdyYXbDqSBwYXIge2FydGljbGUuYXV0aG9yPy5wc2V1ZG8gfHwgXCJVbiDDqWNsYWlyZXVyXCJ9IOKAontcIiBcIn1cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShhcnRpY2xlLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnRTZWN0aW9uIGFydGljbGVJZD17aWR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVTaG93O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gU291cy1jb21wb3NhbnQgcG91ciBVTiBjb21tZW50YWlyZSAocsOpY3Vyc2lmKVxyXG5jb25zdCBDb21tZW50SXRlbSA9ICh7IGNvbW1lbnQsIG9uVm90ZSwgb25SZXBseSwgYXJ0aWNsZUlkLCBjYW5JbnRlcmFjdCB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd1JlcGx5Rm9ybSwgc2V0U2hvd1JlcGx5Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVwbHlDb250ZW50LCBzZXRSZXBseUNvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVwbHlTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBvblJlcGx5KHJlcGx5Q29udGVudCwgY29tbWVudC5pZCk7XHJcbiAgICAgICAgc2V0UmVwbHlDb250ZW50KFwiXCIpO1xyXG4gICAgICAgIHNldFNob3dSZXBseUZvcm0oZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcGwtMiBvdSBwbC00IHNlbG9uIGwnw6ljcmFuIHBvdXIgZ2FnbmVyIGRlIGxhIHBsYWNlIGVuIHByb2ZvbmRldXJcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1sLTIgYm9yZGVyLXN0b25lLTcwMCBwbC0zIG1kOnBsLTQgbXQtNCBtYi0yXCI+XHJcbiAgICAgICAgICAgIHsvKiBFTi1Uw4pURSA6IEF1dGV1ciArIFNjb3JlICovfVxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LXdyYXAgcG91ciBxdWUgw6dhIHBhc3NlIMOgIGxhIGxpZ25lIHN1ciB0csOocyBwZXRpdCDDqWNyYW4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtWzEwcHhdIG1kOnRleHQteHMgdGV4dC1zdG9uZS00MDAgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdmlraW5nLWdvbGQgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5hdXRob3I/LnBzZXVkbyB8fCBcIlZpa2luZyBBbm9ueW1lXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7igKIge2NvbW1lbnQuc2NvcmV9IHBvaW50czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIOKAoiB7bmV3IERhdGUoY29tbWVudC5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDT05URU5VICovfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTIwMCB0ZXh0LXNtIG1kOnRleHQtYmFzZSBtYi0yIGJyZWFrLXdvcmRzXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29tbWVudC5jb250ZW50fVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICB7Lyog8J+UkiBBQ1RJT05TIDogVm90ZSAmIFLDqXBvbmRyZSAqL31cclxuICAgICAgICAgICAge2NhbkludGVyYWN0ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgdGV4dC1bMTBweF0gbWQ6dGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc3RvbmUtNTAwIHNlbGVjdC1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIG1kOmdhcC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZShjb21tZW50LmlkLCBcInVwXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmVlbi01MDAgcC0xIG1kOnAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWsiBVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlKGNvbW1lbnQuaWQsIFwiZG93blwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcmVkLTUwMCBwLTEgbWQ6cC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4pa8IERvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UmVwbHlGb3JtKCFzaG93UmVwbHlGb3JtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC13aGl0ZSBwLTEgbWQ6cC0wXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFLDqXBvbmRyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogRk9STVVMQUlSRSBERSBSw4lQT05TRSAqL31cclxuICAgICAgICAgICAge3Nob3dSZXBseUZvcm0gJiYgY2FuSW50ZXJhY3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBmbGV4LWNvbCBzdXIgbW9iaWxlIHBvdXIgYm91dG9uIGxhcmdlXHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVSZXBseVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXBseUNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVwbHlDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0yIHRleHQtd2hpdGUgdGV4dC1zbSB3LWZ1bGwgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVm90cmUgcsOpcG9uc2UuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctc3RvbmUtNzAwIHRleHQtd2hpdGUgcHgtNCBweS0yIG1kOnB5LTAgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIGhvdmVyOmJnLXN0b25lLTYwMCB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudm95ZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBSw4lDVVJTSVZJVMOJICovfVxyXG4gICAgICAgICAgICB7Y29tbWVudC5yZXBsaWVzICYmIGNvbW1lbnQucmVwbGllcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21tZW50LnJlcGxpZXMubWFwKChyZXBseSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVwbHkuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtyZXBseX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVm90ZT17b25Wb3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXBseT17b25SZXBseX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVJZD17YXJ0aWNsZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuSW50ZXJhY3Q9e2NhbkludGVyYWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gQ29tcG9zYW50IFByaW5jaXBhbFxyXG5jb25zdCBDb21tZW50U2VjdGlvbiA9ICh7IGFydGljbGVJZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuZXdDb21tZW50LCBzZXROZXdDb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY2FuSW50ZXJhY3QsIHNldENhbkludGVyYWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBzZXRDYW5JbnRlcmFjdCghIXRva2VuKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaENvbW1lbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAvYXBpL2NvbW1lbnRzP2FydGljbGU9JHthcnRpY2xlSWR9JnBhcmVudFtleGlzdHNdPWZhbHNlYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRzRGF0YSA9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtcImh5ZHJhOm1lbWJlclwiXSB8fCBkYXRhW1wibWVtYmVyXCJdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdENvbW1lbnRzID0gY29tbWVudHNEYXRhLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAoYykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIWMucGFyZW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMucGFyZW50ID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYy5wYXJlbnQgPT09IG51bGwsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHMocm9vdENvbW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ29tbWVudHMoKTtcclxuICAgIH0sIFthcnRpY2xlSWRdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQb3N0ID0gYXN5bmMgKGNvbnRlbnQsIHBhcmVudElkID0gbnVsbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICBhbGVydChcIlZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpIHBvdXIgZ3JhdmVyIHVuIG1lc3NhZ2UgIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgYXJ0aWNsZTogYC9hcGkvYXJ0aWNsZXMvJHthcnRpY2xlSWR9YCxcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnRJZCA/IGAvYXBpL2NvbW1lbnRzLyR7cGFyZW50SWR9YCA6IG51bGwsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NvbW1lbnRzXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudElkKSBzZXROZXdDb21tZW50KFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVZvdGUgPSBhc3luYyAoY29tbWVudElkLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgaWYgKCF0b2tlbilcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiU2V1bHMgbGVzIGd1ZXJyaWVycyBjb25uZWN0w6lzIHBldXZlbnQgdm90ZXIgIVwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvY3VzdG9tL2NvbW1lbnRzLyR7Y29tbWVudElkfS92b3RlLyR7ZGlyZWN0aW9ufWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe30pLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZmV0Y2hDb21tZW50cygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBtZDptdC0xMiBwdC02IG1kOnB0LTggYm9yZGVyLXQgYm9yZGVyLXN0b25lLTgwMFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgbWQ6bWItNiB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgIENvbnNlaWwgZGUgR3VlcnJlICh7Y29tbWVudHMubGVuZ3RofSBhdmlzKVxyXG4gICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgey8qIPCflJIgRm9ybXVsYWlyZSBQcmluY2lwYWwgKi99XHJcbiAgICAgICAgICAgIHtjYW5JbnRlcmFjdCA/IChcclxuICAgICAgICAgICAgICAgIC8vIE1PRElGIDogZmxleC1jb2wgc3VyIG1vYmlsZSBwb3VyIHF1ZSBsZSBib3V0b24gcHJlbm5lIHRvdXRlIGxhIGxhcmdldXJcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NvbW1lbnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgdGV4dC1zdG9uZS0zMDAgcC0zIGgtMjQgbWQ6aC0yMCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHJlc2l6ZS1ub25lIG1kOnJlc2l6ZS15XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWlzc2V6IHZvdHJlIG1hcnF1ZSBzdXIgY2UgcsOpY2l0Li4uXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUG9zdChuZXdDb21tZW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB3LWZ1bGwgc3VyIG1vYmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBweC02IHB5LTMgbWQ6cHktMCB1cHBlcmNhc2UgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbiB3LWZ1bGwgbWQ6dy1hdXRvIHNoYWRvdy1sZyBhY3RpdmU6c2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR3JhdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCBwLTQgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgYmctc3RvbmUtOTAwLzUwIHRleHQtY2VudGVyIGl0YWxpYyB0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIG1kOnRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWpvaWduZXogbGUgY2xhbiAoY29ubmVjdGV6LXZvdXMpIHBvdXIgcGFydGljaXBlciBhdVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNlaWwgZGUgZ3VlcnJlIGV0IHZvdGVyLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogTGlzdGUgZGVzIGNvbW1lbnRhaXJlcyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWQ6c3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICB7Y29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Wb3RlPXtoYW5kbGVWb3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlcGx5PXtoYW5kbGVQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlSWQ9e2FydGljbGVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuSW50ZXJhY3Q9e2NhbkludGVyYWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFNlY3Rpb247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnO1xyXG5pbXBvcnQgeyBcclxuICBCYXJDaGFydCwgQmFyLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsIFRvb2x0aXAsIExlZ2VuZCwgUmVzcG9uc2l2ZUNvbnRhaW5lcixcclxuICBMaW5lQ2hhcnQsIExpbmUsIFBpZUNoYXJ0LCBQaWUsIENlbGwgXHJcbn0gZnJvbSAncmVjaGFydHMnO1xyXG5cclxuY29uc3QgQ09MT1JTID0gWycjZDRhZjM3JywgJyNiOTFjMWMnLCAnIzFjMTkxNycsICcjNTc1MzRlJywgJyNhOGEyOWUnXTsgLy8gQ291bGV1cnMgVmlraW5nXHJcblxyXG5jb25zdCBDc3ZDaGFydCA9ICh7IGNzdlVybCwgdml6VHlwZSA9ICdiYXInIH0pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghY3N2VXJsKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgZmV0Y2goY3N2VXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJJbXBvc3NpYmxlIGRlIGxpcmUgbGUgcGFyY2hlbWluIGRlIGRvbm7DqWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oY3N2VGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBQYXBhLnBhcnNlKGNzdlRleHQsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY1R5cGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXN1bHRzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKFwiTGUgZmljaGllciBlc3QgaWxsaXNpYmxlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW2NzdlVybF0pO1xyXG5cclxuICAgIGlmICghY3N2VXJsKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgaXRhbGljIHRleHQteHMgdGV4dC1jZW50ZXIgcC00XCI+QXVjdW5lIGRvbm7DqWUgc8OpbGVjdGlvbm7DqWUuPC9wPjtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGxcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGFuaW1hdGUtcHVsc2UgdGV4dC14c1wiPkTDqWNoaWZmcmFnZSBkZXMgcnVuZXMuLi48L3A+PC9kaXY+O1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQteHMgdGV4dC1jZW50ZXIgcC00XCI+RXJyZXVyIDoge2Vycm9yfTwvcD47XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIHRleHQtY2VudGVyIHAtNFwiPkxlIGZpY2hpZXIgZXN0IHZpZGUuPC9wPjtcclxuXHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XHJcbiAgICBjb25zdCB4S2V5ID0ga2V5c1swXTtcclxuICAgIGNvbnN0IHlLZXkgPSBrZXlzWzFdO1xyXG5cclxuICAgIC8vIE1PRElGIDogU3R5bGUgY29tbXVuIHBvdXIgbGVzIGF4ZXMgKHBvbGljZSBwbHVzIHBldGl0ZSlcclxuICAgIGNvbnN0IGF4aXNTdHlsZSA9IHsgZm9udFNpemU6ICcxMHB4JywgZmlsbDogJyNhOGEyOWUnIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyQ2hhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh2aXpUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpbmUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGluZUNoYXJ0IGRhdGE9e2RhdGF9IG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAyMCwgbGVmdDogMCwgYm90dG9tOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiBzdHJva2U9XCIjNDQ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9e3hLZXl9IHN0cm9rZT1cIiNkNGFmMzdcIiB0aWNrPXtheGlzU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxZQXhpcyBzdHJva2U9XCIjZDRhZjM3XCIgdGljaz17YXhpc1N0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50U3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFjMTkxNycsIGJvcmRlckNvbG9yOiAnI2Q0YWYzNycsIGNvbG9yOiAnI2ZmZicsIGZvbnRTaXplOiAnMTJweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZ2VuZCB3cmFwcGVyU3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgcGFkZGluZ1RvcDogJzEwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9e3lLZXl9IHN0cm9rZT1cIiNkNGFmMzdcIiBzdHJva2VXaWR0aD17M30gZG90PXt7IHI6IDQgfX0gYWN0aXZlRG90PXt7IHI6IDYgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbmVDaGFydD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BpZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQaWVDaGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4PVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5PVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsTGluZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IExhYmVsIHNpbXBsaWZpw6kgcG91ciBtb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsoeyBwZXJjZW50IH0pID0+IGAkeyhwZXJjZW50ICogMTAwKS50b0ZpeGVkKDApfSVgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJSYWRpdXM9XCI3MCVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODg4NGQ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFLZXk9e3lLZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lS2V5PXt4S2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsIGtleT17YGNlbGwtJHtpbmRleH1gfSBmaWxsPXtDT0xPUlNbaW5kZXggJSBDT0xPUlMubGVuZ3RoXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BpZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxYzE5MTcnLCBib3JkZXJDb2xvcjogJyNkNGFmMzcnLCBjb2xvcjogJyNmZmYnLCBmb250U2l6ZTogJzEycHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWdlbmQgd3JhcHBlclN0eWxlPXt7IGZvbnRTaXplOiAnMTBweCcgfX0gbGF5b3V0PVwiaG9yaXpvbnRhbFwiIHZlcnRpY2FsQWxpZ249XCJib3R0b21cIiBhbGlnbj1cImNlbnRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QaWVDaGFydD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jhcic6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXtkYXRhfSBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMjAsIGxlZnQ6IDAsIGJvdHRvbTogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgc3Ryb2tlPVwiIzQ0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PXt4S2V5fSBzdHJva2U9XCIjZDRhZjM3XCIgdGljaz17YXhpc1N0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WUF4aXMgc3Ryb2tlPVwiI2Q0YWYzN1wiIHRpY2s9e2F4aXNTdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY3Vyc29yPXt7ZmlsbDogJyMzMzMnfX0gY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxYzE5MTcnLCBib3JkZXJDb2xvcjogJyNkNGFmMzcnLCBjb2xvcjogJyNmZmYnLCBmb250U2l6ZTogJzEycHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWdlbmQgd3JhcHBlclN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIHBhZGRpbmdUb3A6ICcxMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9e3lLZXl9IGZpbGw9XCIjZDRhZjM3XCIgcmFkaXVzPXtbNCwgNCwgMCwgMF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYXJDaGFydD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogaC1mdWxsIGV0IHctZnVsbCBwb3VyIHByZW5kcmUgdG91dCBsJ2VzcGFjZSBkaXNwb25pYmxlIGR1IHBhcmVudFxyXG4gICAgICAgIC8vIExlIHBhZGRpbmcgZXN0IGfDqXLDqSBwYXIgbGUgcGFyZW50IChBcnRpY2xlRm9ybS9TaG93KVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBtaW4taC1bMjUwcHhdXCI+XHJcbiAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJDaGFydCgpfVxyXG4gICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3N2Q2hhcnQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnO1xyXG5cclxuY29uc3QgRGF0YVByb3ZpZGVyU3BhY2UgPSAoeyBkYXRhc2V0cyB9KSA9PiB7XHJcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtoZWFkZXJzLCBzZXRIZWFkZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb2x1bW5NYXBwaW5nLCBzZXRDb2x1bW5NYXBwaW5nXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtkYXRhc2V0TmFtZSwgc2V0RGF0YXNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpbGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgc2V0RmlsZShzZWxlY3RlZEZpbGUpO1xyXG4gICAgICAgIHNldERhdGFzZXROYW1lKHNlbGVjdGVkRmlsZS5uYW1lLnJlcGxhY2UoJy5jc3YnLCAnJykpO1xyXG5cclxuICAgICAgICBQYXBhLnBhcnNlKHNlbGVjdGVkRmlsZSwge1xyXG4gICAgICAgICAgICBoZWFkZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHNraXBFbXB0eUxpbmVzOiB0cnVlLFxyXG4gICAgICAgICAgICBwcmV2aWV3OiA1LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHMgPSBPYmplY3Qua2V5cyhyZXN1bHRzLmRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEhlYWRlcnMoY29scyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJldmlldyhyZXN1bHRzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxNYXBwaW5nID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgY29scy5mb3JFYWNoKGggPT4gaW5pdGlhbE1hcHBpbmdbaF0gPSAnY2F0ZWdvcmljYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb2x1bW5NYXBwaW5nKGluaXRpYWxNYXBwaW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVUeXBlID0gKGhlYWRlcikgPT4ge1xyXG4gICAgICAgIHNldENvbHVtbk1hcHBpbmcocHJldiA9PiAoe1xyXG4gICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICBbaGVhZGVyXTogcHJldltoZWFkZXJdID09PSAnY2F0ZWdvcmljYWwnID8gJ251bWVyaWNhbCcgOiAnY2F0ZWdvcmljYWwnXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YXNldE5hbWUsXHJcbiAgICAgICAgICAgIHNvdXJjZTogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uczogY29sdW1uTWFwcGluZyxcclxuICAgICAgICAgICAgICAgIHVwbG9hZGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHJvd0NvdW50OiBwcmV2aWV3Lmxlbmd0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9kYXRhc2V0cycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGFyY2hlbWluIGRlIGRvbm7DqWVzIGVucmVnaXN0csOpIGRhbnMgbGEgYmlibGlvdGjDqHF1ZSBkJ09kaW4gIVwiKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUsOpcG9uc2UgZHUgc2VydmV1ciA6XCIsIGVycm9yRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycmV1ciA6IExlIFNjcmliZSByZWZ1c2UgbGUgZm9ybWF0IGR1IGZpY2hpZXIuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciByw6lzZWF1XCIsIGVycm9yKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogc3BhY2UteS00IHN1ciBtb2JpbGUgcG91ciBjb21wYWN0ZXJcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTYgYW5pbWF0ZS1mYWRlSW5cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiBGb3JtdWxhaXJlIGQnaW1wb3J0YXRpb24gKi99XHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IHAtNCBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzQwIHAtNCBtZDpwLTYgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCByb3VuZGVkLWxnIHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgZm9udC1kcmFnb24gdGV4dC1sZyBtZDp0ZXh0LXhsIG1iLTQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICBOb3V2ZWxsZSBBcmNoaXZlIGRlIERvbm7DqWVzXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTQgbWQ6Z2FwLTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc3RvbmUtNTAwIHRleHQtWzEwcHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIG1iLTJcIj5GaWNoaWVyIENTViB1bmlxdWVtZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIuY3N2XCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgdGV4dC1zbSB0ZXh0LXN0b25lLTQwMCBmaWxlOm1yLTQgZmlsZTpweS0yIGZpbGU6cHgtNCBmaWxlOnJvdW5kZWQgZmlsZTpib3JkZXItMCBmaWxlOnRleHQteHMgZmlsZTpmb250LWJsYWNrIGZpbGU6dXBwZXJjYXNlIGZpbGU6YmctdmlraW5nLWdvbGQgZmlsZTp0ZXh0LWJsYWNrIGhvdmVyOmZpbGU6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1hdXRvIHB0LTIgbWQ6cHQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9IGRpc2FibGVkPXtpc1VwbG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1hdXRvIGJnLXZpa2luZy1maXJlIHRleHQtd2hpdGUgcHktMyBweC04IGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRleHQteHMgc2hhZG93LWxnIGhvdmVyOnNjYWxlLTEwNSBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6b3BhY2l0eS01MCBkaXNhYmxlZDpncmF5c2NhbGUgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzVXBsb2FkaW5nID8gJ0dyYXZ1cmUuLi4nIDogJ1NjZWxsZXIgbFxcJ0FyY2hpdmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQXBlcsOndSBUZWNobmlxdWUgKi99XHJcbiAgICAgICAgICAgIHtwcmV2aWV3Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAvODAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8xMCByb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgcC0zIGJvcmRlci1iIGJvcmRlci13aGl0ZS81XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRleHQtdmlraW5nLWdvbGQvNTBcIj5BbmFseXNlIGRlIGxhIHN0cnVjdHVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTGUgc2Nyb2xsIGhvcml6b250YWwgZXN0IGfDqXLDqSBpY2kgcGFyIG92ZXJmbG93LXgtYXV0byAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBib3JkZXItY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctYmxhY2svNjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcnMubWFwKGggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBtaW4tdyBwb3VyIGZvcmNlciBsYSBsYXJnZXVyIGV0IGFjdGl2ZXIgbGUgc2Nyb2xsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtofSBjbGFzc05hbWU9XCJwLTMgbWQ6cC00IGJvcmRlci1yIGJvcmRlci13aGl0ZS81IG1pbi13LVsxNDBweF0gYWxpZ24tdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdGV4dC14cyBmb250LWJvbGQgbWItMiB0cnVuY2F0ZVwiIHRpdGxlPXtofT57aH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUeXBlKGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LVs5cHhdIHctZnVsbCBweC0yIHB5LTEgcm91bmRlZC1mdWxsIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXIgdHJhbnNpdGlvbi1jb2xvcnMgYm9yZGVyICR7Y29sdW1uTWFwcGluZ1toXSA9PT0gJ251bWVyaWNhbCcgPyAnYmctYmx1ZS02MDAvMjAgdGV4dC1ibHVlLTQwMCBib3JkZXItYmx1ZS01MDAvMzAnIDogJ2JnLWVtZXJhbGQtNjAwLzIwIHRleHQtZW1lcmFsZC00MDAgYm9yZGVyLWVtZXJhbGQtNTAwLzMwJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbk1hcHBpbmdbaF0gPT09ICdudW1lcmljYWwnID8gJ/CflKIgTnVtw6lyaXF1ZScgOiAn8J+UpCBDYXTDqWdvcmllbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJldmlldy5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItd2hpdGUvNSBob3ZlcjpiZy13aGl0ZS81IHRyYW5zaXRpb24tY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVycy5tYXAoaCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB3aGl0ZXNwYWNlLW5vd3JhcCBwb3VyIMOpdml0ZXIgbGVzIHJldG91cnMgw6AgbGEgbGlnbmUgbW9jaGVzIGRhbnMgbGVzIGNlbGx1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17aH0gY2xhc3NOYW1lPVwicC0zIG1kOnAtNCB0ZXh0LVsxMHB4XSBtZDp0ZXh0LVsxMXB4XSB0ZXh0LXN0b25lLTQwMCBib3JkZXItciBib3JkZXItd2hpdGUvNSBpdGFsaWMgd2hpdGVzcGFjZS1ub3dyYXAgbWF4LXctWzIwMHB4XSBvdmVyZmxvdy1oaWRkZW4gdGV4dC1lbGxpcHNpc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93W2hdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBBcmNoaXZlcyBleGlzdGFudGVzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkLzQwIGZvbnQtZHJhZ29uIHRleHQtc20gbWItNCBtZDptYi02IHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgYm9yZGVyLWIgYm9yZGVyLXZpa2luZy1nb2xkLzIwIHBiLTJcIj5SZWdpc3RyZXMgZMOpasOgIHByw6lzZW50czwvaDM+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IGdyaWQgcmVzcG9uc2l2ZSAxIC0+IDIgLT4gMyBjb2xvbm5lcyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtMyBtZDpnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhc2V0cz8ubGVuZ3RoID4gMCA/IGRhdGFzZXRzLm1hcChkcyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkcy5pZH0gY2xhc3NOYW1lPVwicC00IGJnLWJsYWNrLzIwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZC80MCB0cmFuc2l0aW9uLWFsbCBncm91cCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCBmb250LWJvbGQgdGV4dC1zbSBncm91cC1ob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tY29sb3JzIHRydW5jYXRlXCIgdGl0bGU9e2RzLm5hbWV9Pntkcy5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB0ZXh0LXN0b25lLTYwMCB1cHBlcmNhc2UgZm9udC1ib2xkIGl0YWxpYyB0cnVuY2F0ZSBtYXgtdy1bNjAlXVwiIHRpdGxlPXtkcy5zb3VyY2V9Pntkcy5zb3VyY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gYmctc3RvbmUtODAwIHB4LTIgcHktMC41IHJvdW5kZWQgdGV4dC1zdG9uZS00MDAgd2hpdGVzcGFjZS1ub3dyYXBcIj57ZHMucm93c0NvdW50fSBsaWduZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tZnVsbCBweS0xMCB0ZXh0LWNlbnRlciBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1zdG9uZS04MDAgdGV4dC1zdG9uZS02MDAgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ibGFjayByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWN1bmUgZG9ubsOpZSBuJ2Egw6l0w6kgZ3JhdsOpZSBwb3VyIGxlIG1vbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXJTcGFjZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCB1c2VyID0gbnVsbDtcclxuXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB1c2VyID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb2tlbiBpbnZhbGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIG5hdmlnYXRlKCcvbG9naW4nKTtcclxuICAgICAgICBzZXRJc01lbnVPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FuU2VlRGFzaGJvYXJkID0gdXNlcj8ucm9sZXM/LmluY2x1ZGVzKCdST0xFX0VESVRFVVInKSB8fCB1c2VyPy5yb2xlcz8uaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcclxuICAgIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHNldElzTWVudU9wZW4oZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gTGEgYmFycmUgZGUgbmF2aWdhdGlvbiBwcmluY2lwYWxlIChsZSBiYW5kZWF1IGR1IGhhdXQpXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBib3JkZXItYi0yIGJvcmRlci12aWtpbmctZ29sZC81MCBwLTQgc3RpY2t5IHRvcC0wIHotNTAgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBMT0dPIChaLTUwIHBvdXIgcmVzdGVyIGF1LWRlc3N1cyBkdSBtZW51IHBsZWluIMOpY3JhbikgKi99XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGRyb3Atc2hhZG93LW1kIGdyb3VwIHotNTAgcmVsYXRpdmVcIiBvbkNsaWNrPXtjbG9zZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtNHhsIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB1cHBlcmNhc2VcIj5SaWRlcnMgb2YgQmVyazwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEJPVVRPTiBCVVJHRVIgKFotNTAgcG91ciByZXN0ZXIgY2xpcXVhYmxlKSAqL31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHRleHQtdmlraW5nLWdvbGQgei01MCBmb2N1czpvdXRsaW5lLW5vbmUgcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc01lbnVPcGVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj7inJU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+4piwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTUVOVSBQUklOQ0lQQUwgLyBNT0JJTEUgT1ZFUkxBWSBcclxuICAgICAgICAgICAgICAgICAgICAtIGZpeGVkIGluc2V0LTAgOiBQcmVuZCBUT1VUIGwnw6ljcmFuXHJcbiAgICAgICAgICAgICAgICAgICAgLSBiZy1zdG9uZS05MDAgOiBGb25kIE5PSVIvR1JJUyBPUEFRVUUgKFBhcyBkZSB0cmFuc3BhcmVuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLSB6LTQwIDogSnVzdGUgc291cyBsZSBsb2dvIGV0IGxlIGJ1cmdlclxyXG4gICAgICAgICAgICAgICAgICAgIC0gZmxleC1jb2wganVzdGlmeS1jZW50ZXIgOiBDZW50cmUgbGUgY29udGVudSB2ZXJ0aWNhbGVtZW50IHN1ciBtb2JpbGVcclxuICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICBmaXhlZCBpbnNldC0wIHotNDAgYmctc3RvbmUtOTAwIFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC04IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFxyXG4gICAgICAgICAgICAgICAgICAgICR7aXNNZW51T3BlbiA/ICd0cmFuc2xhdGUteC0wJyA6ICd0cmFuc2xhdGUteC1mdWxsJ31cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBtZDpzdGF0aWMgbWQ6dHJhbnNmb3JtLW5vbmUgbWQ6YmctdHJhbnNwYXJlbnQgbWQ6ZmxleC1yb3cgbWQ6anVzdGlmeS1lbmQgbWQ6aC1hdXRvIG1kOnAtMFxyXG4gICAgICAgICAgICAgICAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIExJRU5TIERFIE5BVklHQVRJT04gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIHNwYWNlLXktOCBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC02IHRleHQtM3hsIG1kOnRleHQtbGcgZm9udC1kcmFnb24gdHJhY2tpbmctd2lkZSB0ZXh0LXZpa2luZy1saWdodCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIiBvbkNsaWNrPXtjbG9zZU1lbnV9PkFjY3VlaWw8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIiBvbkNsaWNrPXtjbG9zZU1lbnV9PkZvcnVtPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhblNlZURhc2hib2FyZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWRtaW5cIiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvNTAgcHgtNCBweS0yIG1kOnB4LTIgbWQ6cHktMC41IGhvdmVyOmJnLXZpa2luZy1nb2xkIGhvdmVyOnRleHQtYmxhY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCIgb25DbGljaz17Y2xvc2VNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc2VpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFNFQ1RJT04gVVRJTElTQVRFVVIgKENvbm5leGlvbiAvIETDqWNvbm5leGlvbikgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtNiBtZDpnYXAtNCBtZDpib3JkZXItbCBib3JkZXItc3RvbmUtNzAwIG1kOnBsLTYgbXQtOCBtZDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshdG9rZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC1zbSBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvblwiIG9uQ2xpY2s9e2Nsb3NlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5leGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT1cImJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgcHgtOCBweS0zIG1kOnB4LTQgbWQ6cHktMS41IHRleHQteGwgbWQ6dGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1sZ1wiIG9uQ2xpY2s9e2Nsb3NlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlam9pbmRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSBmb250LWJsYWNrIGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcj8ucHNldWRvIHx8IFwiR3VlcnJpZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQtWzEwcHhdIHRleHQtdmlraW5nLWZpcmUgdXBwZXJjYXNlIGZvbnQtYmxhY2sgYm9yZGVyIGJvcmRlci12aWtpbmctZmlyZS8zMCBweC02IHB5LTIgbWQ6cHgtMyBtZDpweS0xIGhvdmVyOmJnLXZpa2luZy1maXJlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWl0dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYW52YXMsIHVzZUZyYW1lLCB1c2VUaHJlZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcic7XG5pbXBvcnQgeyB1c2VHTFRGLCB1c2VBbmltYXRpb25zLCBDZW50ZXIsIEh0bWwsIHVzZVRleHR1cmUsIFN0YXJzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xuXG5jb25zdCBNT0RFTF9QQVRIID0gJy9tb2RlbHMvbmlnaHRfZnVyeS5nbGInO1xuY29uc3QgVEVYVFVSRV9QQVRIID0gJy90ZXh0dXJlcy9uaWdodF9mdXJ5X3NraW4ud2VicCc7XG5jb25zdCBBTklNQVRJT05fTkFNRSA9ICdOaWdodEZ1cnlfYXJtYXR1cmVBY3Rpb24nO1xuXG5mdW5jdGlvbiBEcmFnb25Nb2RlbCh7IHZpdGVzc2VSb3RhdGlvbiwgdml0ZXNzZUFuaW1hdGlvbiwgZmFjdGV1clRhaWxsZSwgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7IHNjZW5lLCBhbmltYXRpb25zIH0gPSB1c2VHTFRGKE1PREVMX1BBVEgpO1xuICBjb25zdCB0ZXh0dXJlID0gdXNlVGV4dHVyZShURVhUVVJFX1BBVEgpO1xuICBjb25zdCB7IHZpZXdwb3J0IH0gPSB1c2VUaHJlZSgpOyBcbiAgXG4gIC8vIENhbGN1bCBkZSBiYXNlIHJlc3BvbnNpdmVcbiAgY29uc3QgYmFzZVNjYWxlID0gdmlld3BvcnQud2lkdGggPCA1ID8gMC4zNSA6IDAuODsgXG4gIGNvbnN0IGZpbmFsU2NhbGUgPSBiYXNlU2NhbGUgKiBmYWN0ZXVyVGFpbGxlO1xuXG4gIHRleHR1cmUuZmxpcFkgPSBmYWxzZTtcbiAgdGV4dHVyZS5jb2xvclNwYWNlID0gJ3NyZ2InO1xuXG4gIGNvbnN0IGdyb3VwID0gdXNlUmVmKCk7XG4gIGNvbnN0IHsgYWN0aW9ucyB9ID0gdXNlQW5pbWF0aW9ucyhhbmltYXRpb25zLCBncm91cCk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzY2VuZS50cmF2ZXJzZSgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc01lc2gpIHtcbiAgICAgICAgY2hpbGQubWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcbiAgICAgICAgY2hpbGQubWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbc2NlbmUsIHRleHR1cmVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3Rpb25zICYmIGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdO1xuICAgICAgICBhY3Rpb24ucmVzZXQoKS5mYWRlSW4oMC41KS5wbGF5KCk7XG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9XG4gIH0sIFthY3Rpb25zXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aW9ucyAmJiBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXSkge1xuICAgICAgICBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXS50aW1lU2NhbGUgPSB2aXRlc3NlQW5pbWF0aW9uO1xuICAgIH1cbiAgfSwgW3ZpdGVzc2VBbmltYXRpb24sIGFjdGlvbnNdKTtcblxuICBjb25zdCB0b2dnbGVBbmltYXRpb24gPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1tBTklNQVRJT05fTkFNRV07XG4gICAgaWYgKCFhY3Rpb24pIHJldHVybjtcblxuICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgICAgYWN0aW9uLnBhdXNlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aW9uLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBhY3Rpb24ucGxheSgpOyBcbiAgICB9XG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICB9O1xuXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBpZihncm91cC5jdXJyZW50KSBncm91cC5jdXJyZW50LnJvdGF0aW9uLnkgKz0gdml0ZXNzZVJvdGF0aW9uO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxwcmltaXRpdmUgXG4gICAgICByZWY9e2dyb3VwfSBcbiAgICAgIG9iamVjdD17c2NlbmV9IFxuICAgICAgb25DbGljaz17dG9nZ2xlQW5pbWF0aW9ufVxuICAgICAgb25Qb2ludGVyT3Zlcj17KCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcid9XG4gICAgICBvblBvaW50ZXJPdXQ9eygpID0+IGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ2F1dG8nfVxuICAgICAgc2NhbGU9e2ZpbmFsU2NhbGV9IFxuICAgICAgcG9zaXRpb249e1swLCAtMSwgMF19IFxuICAgICAgey4uLnByb3BzfSBcbiAgICAvPlxuICApO1xufVxuXG5jb25zdCBOaWdodEZ1cnlTY2VuZSA9ICgpID0+IHtcbiAgY29uc3QgW3JvdFNwZWVkLCBzZXRSb3RTcGVlZF0gPSB1c2VTdGF0ZSgwLjAwMSk7XG4gIGNvbnN0IFthbmltU3BlZWQsIHNldEFuaW1TcGVlZF0gPSB1c2VTdGF0ZSgyLjUpO1xuICBjb25zdCBbc2l6ZUZhY3Rvciwgc2V0U2l6ZUZhY3Rvcl0gPSB1c2VTdGF0ZSgxKTsgXG4gIGNvbnN0IFtjb250cm9sc1Zpc2libGUsIHNldENvbnRyb2xzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0Um90U3BlZWQoMC4wMDEpO1xuICAgIHNldEFuaW1TcGVlZCgyLjUpO1xuICAgIHNldFNpemVGYWN0b3IoMSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJnLVsjMDUwNTEwXVwiPlxuICAgICAgXG4gICAgICA8Q2FudmFzIHNoYWRvd3MgY2FtZXJhPXt7IHBvc2l0aW9uOiBbMCwgMiwgMTBdLCBmb3Y6IDQ1IH19PlxuICAgICAgICA8Y29sb3IgYXR0YWNoPVwiYmFja2dyb3VuZFwiIGFyZ3M9e1snIzA1MDUxMCddfSAvPlxuICAgICAgICA8U3RhcnMgcmFkaXVzPXsxMDB9IGRlcHRoPXs1MH0gY291bnQ9ezUwMDB9IGZhY3Rvcj17NH0gc2F0dXJhdGlvbj17MH0gZmFkZSBzcGVlZD17MX0gLz5cbiAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezN9IC8+XG4gICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IHBvc2l0aW9uPXtbMTAsIDEwLCA1XX0gaW50ZW5zaXR5PXs0fSAvPlxuICAgICAgICA8c3BvdExpZ2h0IHBvc2l0aW9uPXtbLTUsIDUsIDEwXX0gaW50ZW5zaXR5PXs1fSBjb2xvcj1cIiNhODU1ZjdcIiAvPlxuICAgICAgICA8c3BvdExpZ2h0IHBvc2l0aW9uPXtbMCwgNSwgLTEwXX0gaW50ZW5zaXR5PXs1fSBjb2xvcj1cIiNmZmZmZmZcIiAvPlxuXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PEh0bWwgY2VudGVyPjxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhzIGFuaW1hdGUtcHVsc2VcIj5JbnZvY2F0aW9uLi4uPC9kaXY+PC9IdG1sPn0+XG4gICAgICAgICAgPENlbnRlciB0b3A+XG4gICAgICAgICAgICA8RHJhZ29uTW9kZWwgXG4gICAgICAgICAgICAgICAgdml0ZXNzZVJvdGF0aW9uPXtyb3RTcGVlZH0gXG4gICAgICAgICAgICAgICAgdml0ZXNzZUFuaW1hdGlvbj17YW5pbVNwZWVkfVxuICAgICAgICAgICAgICAgIGZhY3RldXJUYWlsbGU9e3NpemVGYWN0b3J9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDwvQ2FudmFzPlxuXG4gICAgICB7Lyog8J+Om++4jyBCT1VUT04gVE9HR0xFIChNb2JpbGUgdW5pcXVlbWVudCkgKi99XG4gICAgICA8YnV0dG9uIFxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb250cm9sc1Zpc2libGUoIWNvbnRyb2xzVmlzaWJsZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgei0yMCBiZy1ibGFjay82MCBiYWNrZHJvcC1ibHVyIHRleHQtdmlraW5nLWdvbGQgcC0zIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIG1kOmhpZGRlbiBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tdHJhbnNmb3JtXCJcbiAgICAgID5cbiAgICAgICAge2NvbnRyb2xzVmlzaWJsZSA/ICfinJUnIDogJ+Kame+4jyd9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgey8qIPCfjpvvuI8gVUkgUEFOTkVBVSBERSBDT05UUsOUTEUgKi99XG4gICAgICB7LyogTU9ESUYgRVJHT05PTUlRVUUgOiBcbiAgICAgICAgICAtIE1vYmlsZSA6IFwiYm90dG9tLTAgdy1mdWxsIHJvdW5kZWQtdC0yeGxcIiAoZ2xpc3NlIGR1IGJhcylcbiAgICAgICAgICAtIERlc2t0b3AgOiBcInRvcC00IHJpZ2h0LTQgdy02NCByb3VuZGVkLXhsXCIgKGZsb3R0ZSBlbiBoYXV0IMOgIGRyb2l0ZSlcbiAgICAgICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BcbiAgICAgICAgYWJzb2x1dGUgei0xMCBiZy1ibGFjay84MCBiYWNrZHJvcC1ibHVyLW1kIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ibHVlLTUwMC8zMCBzaGFkb3ctMnhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFxuICAgICAgICBcbiAgICAgICAgLyogU3R5bGVzIE1vYmlsZSAoQm90dG9tIFNoZWV0KSAqL1xuICAgICAgICBib3R0b20tMCBsZWZ0LTAgdy1mdWxsIHJvdW5kZWQtdC0yeGwgcC02IHBiLThcbiAgICAgICAgJHtjb250cm9sc1Zpc2libGUgPyAndHJhbnNsYXRlLXktMCBvcGFjaXR5LTEwMCcgOiAndHJhbnNsYXRlLXktZnVsbCBvcGFjaXR5LTAgcG9pbnRlci1ldmVudHMtbm9uZSd9XG5cbiAgICAgICAgLyogU3R5bGVzIERlc2t0b3AgKEZsb2F0aW5nIEJveCkgKi9cbiAgICAgICAgbWQ6Ym90dG9tLWF1dG8gbWQ6bGVmdC1hdXRvIG1kOnRvcC00IG1kOnJpZ2h0LTQgbWQ6dy02NCBtZDpyb3VuZGVkLXhsIG1kOnAtNCBtZDpwYi00XG4gICAgICAgIG1kOnRyYW5zbGF0ZS15LTAgbWQ6b3BhY2l0eS0xMDAgbWQ6cG9pbnRlci1ldmVudHMtYXV0b1xuICAgICAgYH0+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi00IGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMCBwYi0yXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTMwMCBmb250LWJvbGQgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgICBQYXJhbcOodHJlc1xuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIHsvKiBCb3V0b24gcmVzZXQgZGlzY3JldCAqL31cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS00MDAgaG92ZXI6dGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkIHVuZGVybGluZSBkZWNvcmF0aW9uLWRvdHRlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ09OVFJPTEVTIENPTVBBQ1RTICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgey8qIDEuIFRhaWxsZSAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTEgdGV4dC1zdG9uZS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGFpbGxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMCBmb250LW1vbm9cIj54e3NpemVGYWN0b3IudG9GaXhlZCgxKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIiBtaW49XCIwLjFcIiBtYXg9XCIzXCIgc3RlcD1cIjAuMVwiIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2l6ZUZhY3Rvcn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRTaXplRmFjdG9yKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMS41IGJnLXN0b25lLTcwMCByb3VuZGVkLWxnIGFwcGVhcmFuY2Utbm9uZSBjdXJzb3ItcG9pbnRlciBhY2NlbnQtZ3JlZW4tNTAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiAyLiBSb3RhdGlvbiAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTEgdGV4dC1zdG9uZS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Vml0ZXNzZSBSb3RhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCBmb250LW1vbm9cIj57KHJvdFNwZWVkICogMTAwMCkudG9GaXhlZCgwKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMC4wNVwiIHN0ZXA9XCIwLjAwMVwiIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm90U3BlZWR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Um90U3BlZWQocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLjUgYmctc3RvbmUtNzAwIHJvdW5kZWQtbGcgYXBwZWFyYW5jZS1ub25lIGN1cnNvci1wb2ludGVyIGFjY2VudC1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogMy4gQW5pbWF0aW9uICovfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgbWItMSB0ZXh0LXN0b25lLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5WaXRlc3NlIEFuaW1hdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUtNDAwIGZvbnQtbW9ub1wiPnh7YW5pbVNwZWVkLnRvRml4ZWQoMSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjVcIiBzdGVwPVwiMC4xXCIgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbmltU3BlZWR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5pbVNwZWVkKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMS41IGJnLXN0b25lLTcwMCByb3VuZGVkLWxnIGFwcGVhcmFuY2Utbm9uZSBjdXJzb3ItcG9pbnRlciBhY2NlbnQtcHVycGxlLTUwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG51c2VHTFRGLnByZWxvYWQoTU9ERUxfUEFUSCk7XG51c2VUZXh0dXJlLnByZWxvYWQoVEVYVFVSRV9QQVRIKTtcblxuZXhwb3J0IGRlZmF1bHQgTmlnaHRGdXJ5U2NlbmU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3RhclJhdGluZyA9ICh7IGFydGljbGVJZCwgY3VycmVudFJhdGluZywgb25SYXRlIH0pID0+IHtcclxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoY3VycmVudFJhdGluZyB8fCAwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSYXRpbmcgPSAoc2NvcmUpID0+IHtcclxuICAgICAgICBzZXRSYXRpbmcoc2NvcmUpO1xyXG4gICAgICAgIG9uUmF0ZShzY29yZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XHJcbiAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKChzdGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdGV4dC0zeGwgc3VyIG1vYmlsZSBwb3VyIGZhY2lsaXRlciBsZSBjbGljLCBtZDp0ZXh0LTJ4bCBzdXIgZGVza3RvcFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFqb3V0IGRlIGFjdGl2ZTpzY2FsZS0xMjUgcG91ciB1biBlZmZldCBcInBvcFwiIGF1IHRvdWNoZXJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTN4bCBtZDp0ZXh0LTJ4bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGFjdGl2ZTpzY2FsZS0xMjUgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhciA8PSAoaG92ZXIgfHwgcmF0aW5nKSA/IFwidGV4dC12aWtpbmctZ29sZCBkcm9wLXNoYWRvdy1tZFwiIDogXCJ0ZXh0LXN0b25lLTYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmF0aW5nKHN0YXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXIoc3Rhcil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihyYXRpbmcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgRG9ubmVyICR7c3Rhcn0gw6l0b2lsZShzKWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg4piFXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhclJhdGluZzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVmlraW5nUGxheWVyID0gKHsgc3JjLCBhdXRvUGxheSA9IGZhbHNlIH0pID0+IHtcclxuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlKFwiMDowMFwiKTtcclxuICAgIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoXCIwOjAwXCIpO1xyXG4gICAgY29uc3QgW2lzQmxvY2tlZCwgc2V0SXNCbG9ja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gTm91dmVhdSBzdGF0ZSBwb3VyIGTDqXRlY3RlciBsZSBibG9jYWdlXHJcblxyXG4gICAgLy8gR2VzdGlvbiBkZSBsJ0F1dG9wbGF5XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhdXRvUGxheSAmJiBhdWRpb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXlQcm9taXNlID0gYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgIGlmIChwbGF5UHJvbWlzZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5UHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VjY8OocyA6IExlIG5hdmlnYXRldXIgYSBhdXRvcmlzw6kgbCdhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzQmxvY2tlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDDiWNoZWMgOiBMZSBuYXZpZ2F0ZXVyIGEgYmxvcXXDqSBsJ2F1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0b3BsYXkgYmxvcXXDqSAoaW50ZXJhY3Rpb24gcmVxdWlzZSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzUGxheWluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzQmxvY2tlZCh0cnVlKTsgLy8gT24gc2lnbmFsZSBxdSdpbCBmYXV0IHVuZSBhY3Rpb24gbWFudWVsbGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFthdXRvUGxheSwgc3JjXSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlUGxheSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgc2V0SXNCbG9ja2VkKGZhbHNlKTsgLy8gU2kgbCd1dGlsaXNhdGV1ciBjbGlxdWUsIGxlIGJsb2NhZ2Ugc2F1dGVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUaW1lVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gYXVkaW9SZWYuY3VycmVudC5kdXJhdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodG90YWwpIHtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3MoKGN1cnJlbnQgLyB0b3RhbCkgKiAxMDApO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGltZShmb3JtYXRUaW1lKGN1cnJlbnQpKTtcclxuICAgICAgICAgICAgc2V0RHVyYXRpb24oZm9ybWF0VGltZSh0b3RhbCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VlayA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBlLnRhcmdldC5jbGllbnRXaWR0aDtcclxuICAgICAgICBjb25zdCBjbGlja1ggPSBlLm5hdGl2ZUV2ZW50Lm9mZnNldFg7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uO1xyXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gKGNsaWNrWCAvIHdpZHRoKSAqIGR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aW1lIHx8IGlzTmFOKHRpbWUpKSByZXR1cm4gXCIwOjAwXCI7XHJcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgICAgIGNvbnN0IHNlYyA9IE1hdGguZmxvb3IodGltZSAlIDYwKTtcclxuICAgICAgICByZXR1cm4gYCR7bWlufToke3NlYyA8IDEwID8gJzAnICsgc2VjIDogc2VjfWA7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFZpc3VhbGlzZXVyIGFuaW3DqVxyXG4gICAgY29uc3QgYmFycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDMwIH0pLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGtleT17aX0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMSBteC1bMXB4XSByb3VuZGVkLXQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7aXNQbGF5aW5nID8gJ2JnLXZpa2luZy1nb2xkIGFuaW1hdGUtYmFyJyA6ICdiZy1zdG9uZS03MDAgaC0xJ31gfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBgJHtNYXRoLnJhbmRvbSgpICogMC41ICsgMC40fXNgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpc1BsYXlpbmcgPyAnMTAwJScgOiAnMTAlJyBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogbXktNCBzdXIgbW9iaWxlLCBteS04IHN1ciBkZXNrdG9wLCBwLTQgc3VyIG1vYmlsZSwgcC02IHN1ciBkZXNrdG9wXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsIG14LWF1dG8gbXktNCBtZDpteS04IGJnLWJsYWNrLzgwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcm91bmRlZC1sZyBwLTQgbWQ6cC02IHNoYWRvdy1bMF8wXzMwcHhfcmdiYSgwLDAsMCwwLjgpXSBiYWNrZHJvcC1ibHVyLXNtIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIE1lc3NhZ2Ugc2kgYmxvcXXDqSAqL31cclxuICAgICAgICAgICAge2lzQmxvY2tlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svODAgei0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBhbmltYXRlLWZhZGUtaW4gcC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB0ZXh0LXhzIHN1ciBtb2JpbGUsIHRleHQtYmFzZSBzdXIgZGVza3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgbWQ6cHgtNiBtZDpweS0zIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBzaGFkb3ctWzBfMF8yMHB4X3JnYmEoMjEyLDE3NSw1NSwwLjYpXSB0ZXh0LXhzIG1kOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg8J+UiiBBY3RpdmVyIGwnQW1iaWFuY2UgU29ub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxhdWRpbyBcclxuICAgICAgICAgICAgICAgIHJlZj17YXVkaW9SZWZ9IFxyXG4gICAgICAgICAgICAgICAgc3JjPXtzcmN9IFxyXG4gICAgICAgICAgICAgICAgb25UaW1lVXBkYXRlPXtoYW5kbGVUaW1lVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25FbmRlZD17KCkgPT4gc2V0SXNQbGF5aW5nKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uTG9hZGVkTWV0YWRhdGE9eyhlKSA9PiBzZXREdXJhdGlvbihmb3JtYXRUaW1lKGUudGFyZ2V0LmR1cmF0aW9uKSl9IC8vIENoYXJnZSBsYSBkdXLDqWUgZMOocyBsZSBkw6lidXRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IGdhcC00IHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgbWQ6Z2FwLTYgcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIEJvdXRvbiBQbGF5L1BhdXNlICovfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy0xMiBoLTEyIHN1ciBtb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEyIGgtMTIgbWQ6dy0xNCBtZDpoLTE0IGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtpc1BsYXlpbmcgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMjEyLDE3NSw1NSwwLjUpXScgOiAndGV4dC12aWtpbmctZ29sZCBob3ZlcjpiZy12aWtpbmctZ29sZC8yMCd9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXNQbGF5aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy02IG1kOmgtNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk02IDE5aDRWNUg2djE0em04LTE0djE0aDRWNWgtNHpcIi8+PC9zdmc+IFxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNSBtZDp3LTYgbWQ6aC02IHRyYW5zbGF0ZS14LTAuNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04IDV2MTRsMTEtN3pcIi8+PC9zdmc+IFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogSW5mbyAmIFZpc3VhbGlzZXVyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtWzlweF0gc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtWzlweF0gbWQ6dGV4dC1bMTBweF0gdGV4dC12aWtpbmctZ29sZCBmb250LW1vbm8gbWItMiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG9wYWNpdHktODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2N1cnJlbnRUaW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPntpc1BsYXlpbmcgPyBcIkxlY3R1cmUuLi5cIiA6IFwiUGF1c2VcIn08L3NwYW4+IHsvKiBNYXNxdcOpIHN1ciB0csOocyBwZXRpdCDDqWNyYW4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBab25lIFZpc3VhbGlzZXVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IGgtOCBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04IG1kOmgtMTAgZmxleCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgbWItMyBvdmVyZmxvdy1oaWRkZW4gb3BhY2l0eS04MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmFyc31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEJhcnJlIGRlIHByb2dyZXNzaW9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMS41IGJnLXN0b25lLTgwMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmUgZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBiZy12aWtpbmctZ29sZCByb3VuZGVkLWZ1bGwgcmVsYXRpdmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtbGluZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctMyBoLTMgYmctd2hpdGUgcm91bmRlZC1mdWxsIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCBzaGFkb3cgc2NhbGUtMCBncm91cC1ob3ZlcjpzY2FsZS0xMDAgdHJhbnNpdGlvbi1hbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlraW5nUGxheWVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IERhdGFQcm92aWRlclNwYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvRGF0YVByb3ZpZGVyU3BhY2UnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcnRpY2xlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVGb3JtJztcclxuXHJcbmNvbnN0IEFkbWluRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCdzdGF0cycpO1xyXG4gICAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjdXJyZW50VXNlciA9IHRva2VuID8gand0RGVjb2RlKHRva2VuKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBkZSBkw6ljb2RhZ2UgZHUgdG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm9sZXMgPSBjdXJyZW50VXNlcj8ucm9sZXMgfHwgW107XHJcbiAgICBjb25zdCBpc0Z1bGxBZG1pbiA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0FETUlOJyk7XHJcbiAgICBjb25zdCBpc1Byb3ZpZGVyID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfRk9VUk5JU1NFVVInKSB8fCBpc0Z1bGxBZG1pbjtcclxuICAgIGNvbnN0IGlzRGVzaWduZXIgPSByb2xlcy5pbmNsdWRlcygnUk9MRV9ERVNJR05FUicpIHx8IGlzRnVsbEFkbWluO1xyXG4gICAgY29uc3QgaXNFZGl0b3IgPSByb2xlcy5pbmNsdWRlcygnUk9MRV9FRElURVVSJykgfHwgaXNGdWxsQWRtaW47XHJcblxyXG4gICAgY29uc3QgbG9hZFN0YXRzID0gKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2FkbWluL3N0YXRzJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihcIkFjY8OocyByZWZ1c8OpIHBhciBsZSBHcmFuZCBDb25zZWlsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGpzb24gPT4gc2V0RGF0YShqc29uKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHNldEVycm9yKGVyci5tZXNzYWdlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9hZFN0YXRzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlQXJ0aWNsZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93LmNvbmZpcm0oXCLDinRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBicsO7bGVyIGNlIHBhcmNoZW1pbiBkw6lmaW5pdGl2ZW1lbnQgP1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIHNldERhdGEocHJldiA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlbWVudEFydGljbGVzOiBwcmV2Lm1hbmFnZW1lbnRBcnRpY2xlcy5maWx0ZXIoYXJ0ID0+IGFydC5pZCAhPT0gaWQpXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycmV1ciA6IEltcG9zc2libGUgZGUgc3VwcHJpbWVyIChEcm9pdHMgaW5zdWZmaXNhbnRzID8pXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgc2VydmV1ci5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVFZGl0U3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICBzZXRFZGl0aW5nSWQobnVsbCk7XHJcbiAgICAgICAgbG9hZFN0YXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJvbW90ZSA9IGFzeW5jICh1c2VySWQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2FkbWluL3VzZXIvJHt1c2VySWR9L3Byb21vdGVgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsVXNlcnM6IGRhdGEuYWxsVXNlcnMubWFwKHUgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHUuaWQgPT09IHVzZXJJZCA/IHsgLi4udSwgcm9sZXM6IHVwZGF0ZWREYXRhLm5ld1JvbGVzIH0gOiB1XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHsgYWxlcnQoXCJFcnJldXIgbG9ycyBkdSBjaGFuZ2VtZW50IGRlIHJhbmdcIik7IH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1maXJlIHAtMTAgdGV4dC1jZW50ZXIgZm9udC1kcmFnb25cIj57ZXJyb3J9PC9kaXY+O1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIHAtMTAgZm9udC1kcmFnb24gYW5pbWF0ZS1wdWxzZSB0ZXh0LWNlbnRlclwiPkFwcGVsIGF1IEdyYW5kIENvbnNlaWwuLi48L2Rpdj47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHAtNCBzdXIgbW9iaWxlLCBwLTYgc3VyIGRlc2t0b3BcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHAtNCBtZDpwLTYgdGV4dC13aGl0ZSBwYi0yMFwiPlxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBUYWlsbGUgZHUgdGl0cmUgcsOpZHVpdGUgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLXBhcmNobWVudCBtYi02IG1kOm1iLTEwIGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8zMCBwYi00IHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIFBhbGFpcyBkJ0FkbWluaXN0cmF0aW9uXHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBwYXIgT25nbGV0cyByZXNwb25zaXZlICovfVxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LXdyYXAgcGVybWV0IGF1eCBib3V0b25zIGRlIHBhc3NlciDDoCBsYSBsaWduZSBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIG1iLTggYm9yZGVyLWIgYm9yZGVyLXN0b25lLTgwMCBwYi00IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdzdGF0cycpfSBjbGFzc05hbWU9e2BmbGV4LWdyb3cgbWQ6ZmxleC1ncm93LTAgcHgtNCBweS0zIG1kOnB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uIHJvdW5kZWQgbWQ6cm91bmRlZC1ub25lICR7YWN0aXZlVGFiID09PSAnc3RhdHMnID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2snIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCd9YH0+VnVlIGQnZW5zZW1ibGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2lzRnVsbEFkbWluICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigndXNlcnMnKX0gY2xhc3NOYW1lPXtgZmxleC1ncm93IG1kOmZsZXgtZ3Jvdy0wIHB4LTQgcHktMyBtZDpweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbiByb3VuZGVkIG1kOnJvdW5kZWQtbm9uZSAke2FjdGl2ZVRhYiA9PT0gJ3VzZXJzJyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrJyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAnfWB9PlBvcHVsYXRpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtpc0VkaXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2FydGljbGVzJyl9IGNsYXNzTmFtZT17YGZsZXgtZ3JvdyBtZDpmbGV4LWdyb3ctMCBweC00IHB5LTMgbWQ6cHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24gcm91bmRlZCBtZDpyb3VuZGVkLW5vbmUgJHthY3RpdmVUYWIgPT09ICdhcnRpY2xlcycgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjaycgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGJvcmRlciBib3JkZXItc3RvbmUtODAwJ31gfT5DaHJvbmlxdWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtpc1Byb3ZpZGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignZGF0YScpfSBjbGFzc05hbWU9e2BmbGV4LWdyb3cgbWQ6ZmxleC1ncm93LTAgcHgtNCBweS0zIG1kOnB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uIHJvdW5kZWQgbWQ6cm91bmRlZC1ub25lICR7YWN0aXZlVGFiID09PSAnZGF0YScgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjaycgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGJvcmRlciBib3JkZXItc3RvbmUtODAwJ31gfT5Eb25uw6llcyAoQ1NWKTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNEZXNpZ25lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2Rlc2lnbicpfSBjbGFzc05hbWU9e2BmbGV4LWdyb3cgbWQ6ZmxleC1ncm93LTAgcHgtNCBweS0zIG1kOnB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uIHJvdW5kZWQgbWQ6cm91bmRlZC1ub25lICR7YWN0aXZlVGFiID09PSAnZGVzaWduJyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrJyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAnfWB9PkFwcGFyZW5jZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQ09OVEVOVSBEWU5BTUlRVUUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtWzQwMHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnc3RhdHMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTYgYW5pbWF0ZS1mYWRlSW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWdvbGQgcC02IHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2tcIj5IYWJpdGFudHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1kcmFnb24gbXQtMiB0ZXh0LXdoaXRlXCI+e2RhdGEudXNlcnNDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXItbC00IGJvcmRlci12aWtpbmctZmlyZSBwLTYgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRleHQteHMgZm9udC1ibGFja1wiPkFydGljbGVzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtZHJhZ29uIG10LTIgdGV4dC13aGl0ZVwiPntkYXRhLmFydGljbGVzQ291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3VzZXJzJyAmJiBpc0Z1bGxBZG1pbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgYW5pbWF0ZS1mYWRlSW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hlcmNoZXIgdW4gZ3VlcnJpZXIuLi5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrLzQwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMjAgcC0zIHJvdW5kZWQgdGV4dC1zbSB3LWZ1bGwgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5hbGxVc2Vycz8uZmlsdGVyKHUgPT4gdS5wc2V1ZG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpKS5tYXAodSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IGZsZXgtY29sIHN1ciBtb2JpbGUgcG91ciBlbXBpbGVyIHBzZXVkbyBldCBib3V0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1LmlkfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBzbTppdGVtcy1jZW50ZXIgcC00IGJnLXN0b25lLTkwMC81MCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdGV4dC1sZ1wiPnt1LnBzZXVkb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIG10LTFcIj57dS5yb2xlcy5qb2luKCcgfCAnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9tb3RlKHUuaWQpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIHRleHQteHMgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC80MCBweC00IHB5LTIgaG92ZXI6YmctdmlraW5nLWdvbGQgaG92ZXI6dGV4dC1ibGFjayB0cmFuc2l0aW9uIHVwcGVyY2FzZSBmb250LWJsYWNrIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlciBSYW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdhcnRpY2xlcycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1mYWRlSW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlZGl0aW5nSWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBwLTQgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdJZChudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oaQPC9zcGFuPiBBbm51bGVyIGxhIG1vZGlmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlRm9ybSBpZD17ZWRpdGluZ0lkfSBvblN1Y2Nlc3M9e2hhbmRsZUVkaXRTdWNjZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXM/Lm1hcChhcnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IGZsZXgtY29sIHN1ciBtb2JpbGUgcG91ciBlbXBpbGVyIHRpdHJlIGV0IGJvdXRvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FydC5pZH0gY2xhc3NOYW1lPVwicC00IGJnLXN0b25lLTkwMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBzbTppdGVtcy1jZW50ZXIgaG92ZXI6Ym9yZGVyLXN0b25lLTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBncm91cCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvYXJ0aWNsZS8ke2FydC5pZH1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdmlraW5nLXBhcmNobWVudCBncm91cC1ob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tY29sb3JzIHRleHQtbGcgYmxvY2sgdHJ1bmNhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFyIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwXCI+e2FydC5hdXRob3J9PC9zcGFuPiDigKIge25ldyBEYXRlKGFydC5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHctZnVsbCBzdXIgbW9iaWxlLCBib3V0b25zIGVuIHBsZWluZSBsYXJnZXVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB3LWZ1bGwgc206dy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0lkKGFydC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBzbTpmbGV4LW5vbmUgcHgtMyBweS0zIHNtOnB5LTIgYmctc3RvbmUtODAwIHRleHQtc3RvbmUtMzAwIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtWzEwcHhdIHVwcGVyY2FzZSBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHRyYW5zaXRpb24gdGV4dC1jZW50ZXIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RpZmllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVBcnRpY2xlKGFydC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBzbTpmbGV4LW5vbmUgcHgtMyBweS0zIHNtOnB5LTIgYmctcmVkLTkwMC8yMCB0ZXh0LXJlZC01MDAgYm9yZGVyIGJvcmRlci1yZWQtOTAwLzUwIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB0cmFuc2l0aW9uIHRleHQtY2VudGVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VwcHJpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyghZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXMgfHwgZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXMubGVuZ3RoID09PSAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGl0YWxpYyB0ZXh0LWNlbnRlciBweS0xMFwiPkF1Y3VuZSBjaHJvbmlxdWUgw6AgZ8OpcmVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdkYXRhJyAmJiBpc1Byb3ZpZGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVByb3ZpZGVyU3BhY2UgZGF0YXNldHM9e2RhdGEuZGF0YXNldHN9IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdkZXNpZ24nICYmIGlzRGVzaWduZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMCB0ZXh0LWNlbnRlciBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1zdG9uZS04MDAgdGV4dC1zdG9uZS02MDAgdXBwZXJjYXNlIGZvbnQtYmxhY2sgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JnZSBkZSBEZXNpZ24gKEVuIGNvbnN0cnVjdGlvbilcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluRGFzaGJvYXJkOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IEFydGljbGVQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7IGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyB9IH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LXhsIG1kOnRleHQtMnhsIHB5LTIwIGFuaW1hdGUtcHVsc2UgcHgtNFwiPlJlY2hlcmNoZSBkYW5zIGxlcyBhcmNoaXZlcy4uLjwvZGl2PjtcclxuICAgIGlmICghYXJ0aWNsZSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZmlyZSB0ZXh0LWxnIG1kOnRleHQteGwgcHktMTAgcHgtNFwiPkFydGljbGUgaW50cm91dmFibGUgZGFucyBsZXMgYXJjaGl2ZXMuPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gTU9ESUYgOiBweC00IHBvdXIgbGVzIG1hcmdlcyBsYXTDqXJhbGVzIHN1ciBtb2JpbGVcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIGFuaW1hdGUtZmFkZS1pbiBweC00IHBiLTEyXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9mb3J1bVwiIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWxpZ2h0IGhvdmVyOnRleHQtd2hpdGUgbWItNCBtZDptYi02IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0cmFuc2l0aW9uIHRleHQtc20gbWQ6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7ihpA8L3NwYW4+IFJldG91ciBhdSBmb3J1bVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBwLTUgc3VyIG1vYmlsZSwgcC04IHN1ciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtNSBtZDpwLTggcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBEw6ljb3JhdGlvbiBjb2luIDogcGx1cyBwZXRpdGUgc3VyIG1vYmlsZSAody0xMikgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy0xMiBoLTEyIG1kOnctMjAgbWQ6aC0yMCBiZy12aWtpbmctZ29sZCBvcGFjaXR5LTEwIHJvdW5kZWQtYmwtZnVsbFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtM3hsIHN1ciBtb2JpbGUsIGJyZWFrLXdvcmRzIHBvdXIgw6l2aXRlciBsZXMgZMOpYm9yZGVtZW50cyAqL31cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgbGVhZGluZy10aWdodCBicmVhay13b3JkcyByZWxhdGl2ZSB6LTEwIHByLThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IGZsZXgtd3JhcCBwb3VyIHF1ZSDDp2EgcGFzc2Ugw6AgbGEgbGlnbmUgc3VyIGxlcyB0csOocyBwZXRpdHMgw6ljcmFucyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0zIHRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LXN0b25lLTUwMCBtYi02IG1kOm1iLTggYm9yZGVyLWIgYm9yZGVyLXN0b25lLTcwMCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdmlraW5nLXJlZCBweC0yIHB5LTEgcm91bmRlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyY2hpdmVcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q3LDqcOpIGxlIHtuZXcgRGF0ZShhcnRpY2xlLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC1iYXNlICgxNnB4KSBzdXIgbW9iaWxlLCB0ZXh0LWxnICgxOHB4KSBzdXIgZGVza3RvcCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcGFyY2htZW50IHRleHQtYmFzZSBtZDp0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBmb250LXNlcmlmIHdoaXRlc3BhY2UtcHJlLWxpbmUgdGV4dC1qdXN0aWZ5IG1kOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnN1bW1hcnl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIE5vdGU6IExlcyBibG9jcyBldCBjb21tZW50YWlyZXMgbsOpY2Vzc2l0ZW50IHVuZSBsb2dpcXVlIHBsdXMgcG91c3PDqWUgw6AgaW1wbMOpbWVudGVyIHBsdXMgdGFyZCAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcbmltcG9ydCBBcnRpY2xlRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcnRpY2xlRm9ybVwiO1xyXG5cclxuY29uc3QgRm9ydW1QYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIC8vIMOJdGF0IHBvdXIgbGUgdHJpXHJcbiAgICBjb25zdCBbc29ydE9yZGVyLCBzZXRTb3J0T3JkZXJdID0gdXNlU3RhdGUoXCJuZXdlc3RcIik7XHJcblxyXG4gICAgLy8gR2VzdGlvbiBkZSBsYSBuYXZpZ2F0aW9uIGludGVybmVcclxuICAgIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKFwibGlzdFwiKTsgLy8gJ2xpc3QnLCAnY3JlYXRlJywgJ2VkaXQnXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIDEuIFLDqWN1cMOpcmF0aW9uIGV0IGTDqWNvZGFnZSBkdSBUb2tlblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZWQgPSBqd3REZWNvZGUodG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcihkZWNvZGVkKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkJhZGdlIChUb2tlbikgaW52YWxpZGUgb3UgZXhwaXLDqVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyBSZWNoYXJnZXIgcXVhbmQgbGUgdHJpIGNoYW5nZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaEFydGljbGVzKCk7XHJcbiAgICB9LCBbc29ydE9yZGVyXSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hBcnRpY2xlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBcIi9hcGkvYXJ0aWNsZXNcIjtcclxuICAgICAgICAgICAgLy8gTG9naXF1ZSBkZSB0cmkgQVBJIFBsYXRmb3JtXHJcbiAgICAgICAgICAgIHN3aXRjaCAoc29ydE9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmVzdF9yYXRpbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gXCI/b3JkZXJbYXZlcmFnZVJhdGluZ109ZGVzY1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndvcnN0X3JhdGluZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBcIj9vcmRlclthdmVyYWdlUmF0aW5nXT1hc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbGRlc3RcIjpcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gXCI/b3JkZXJbY3JlYXRlZEF0XT1hc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuZXdlc3RcIjpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IFwiP29yZGVyW2NyZWF0ZWRBdF09ZGVzY1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIiB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldEFydGljbGVzKGRhdGFbXCJoeWRyYTptZW1iZXJcIl0gfHwgZGF0YVtcIm1lbWJlclwiXSB8fCBbXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgZGUgbGlhaXNvbiBhdmVjIGxlIEdyYW5kIENvbnNlaWxcIiwgZXJyKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXdpbmRvdy5jb25maXJtKFxyXG4gICAgICAgICAgICAgICAgXCJWb3VsZXotdm91cyB2cmFpbWVudCBlZmZhY2VyIGNlIHLDqWNpdCBkZSBsYSBwaWVycmUgP1wiLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGVzLmZpbHRlcigoYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhSWQgPSAoYS5pZCB8fCBhW1wiQGlkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFJZCAhPT0gaWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBcIkxlcyBkcmFnb25zIHByb3TDqGdlbnQgY2UgcGFyY2hlbWluIChFcnJldXIgZGUgcGVybWlzc2lvbnMpLlwiLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChcIkxlIHNlcnZldXIgZXN0IGluam9pZ25hYmxlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlldyhcImxpc3RcIik7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRJZChudWxsKTtcclxuICAgICAgICBmZXRjaEFydGljbGVzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIPCfm6HvuI8gLS0tIExPR0lRVUUgREVTIFLDlExFUyAtLS1cclxuICAgIGNvbnN0IHVzZXJSb2xlcyA9IHVzZXI/LnJvbGVzIHx8IFtdO1xyXG4gICAgY29uc3Qgc3VwZXJFZGl0b3JzID0gW1xyXG4gICAgICAgIFwiUk9MRV9FRElURVVSXCIsXHJcbiAgICAgICAgXCJST0xFX0FETUlOXCIsXHJcbiAgICAgICAgXCJST0xFX0RFU0lHTkVSXCIsXHJcbiAgICAgICAgXCJST0xFX0ZPVVJOSVNTRVVSXCIsXHJcbiAgICBdO1xyXG4gICAgY29uc3QgaXNTdXBlckVkaXRvciA9IHN1cGVyRWRpdG9ycy5zb21lKChyKSA9PiB1c2VyUm9sZXMuaW5jbHVkZXMocikpO1xyXG4gICAgY29uc3QgaXNBdXRob3IgPSB1c2VyUm9sZXMuaW5jbHVkZXMoXCJST0xFX0FVVEVVUlwiKTtcclxuICAgIGNvbnN0IGNhbkNyZWF0ZSA9IGlzU3VwZXJFZGl0b3IgfHwgaXNBdXRob3I7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcgJiYgdmlldyA9PT0gXCJsaXN0XCIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTQwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiBib3JkZXItNCBib3JkZXItdmlraW5nLWdvbGQgYm9yZGVyLXQtdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIGFuaW1hdGUtc3BpbiBtYi00XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQteGwgYW5pbWF0ZS1wdWxzZSB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBPdXZlcnR1cmUgZGVzIHBhcmNoZW1pbnMuLi5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcHgtNCBwb3VyIGxlcyBtYXJnZXMgbW9iaWxlc1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBwYi0yMFwiPlxyXG4gICAgICAgICAgICB7LyogLS0tIEhFQURFUiAtLS0gKi99XHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IGZsZXgtY29sIHBvdXIgZW1waWxlciB0aXRyZSBldCBmaWx0cmVzIHN1ciBtb2JpbGUsIGl0ZW1zLXN0YXJ0IHBhciBkw6lmYXV0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1kOml0ZW1zLWVuZCBtYi04IG1kOm1iLTEyIGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8yMCBwYi04IGdhcC02IG1kOmdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IFRhaWxsZSB0aXRyZSBhZGFwdMOpZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC02eGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctcGFyY2htZW50IHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENocm9uaXF1ZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGl0YWxpYyB0ZXh0LXNtIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGUgc2F2b2lyIGR1IHZpbGxhZ2UgZGUgQmVyaywgZ3JhdsOpIHBvdXIgbCfDqXRlcm5pdMOpLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHt2aWV3ID09PSBcImxpc3RcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB3LWZ1bGwgc3VyIG1vYmlsZSBwb3VyIHF1ZSBsZXMgZmlsdHJlcyBwcmVubmVudCB0b3V0ZSBsYSBsYXJnZXVyXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtNCB3LWZ1bGwgbWQ6dy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTRUxFQ1RFVVIgREUgVFJJICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB3LWZ1bGwgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NvcnRPcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U29ydE9yZGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC81MCB0ZXh0LXZpa2luZy1nb2xkIHB5LTMgcHgtNCByb3VuZGVkIGN1cnNvci1wb2ludGVyIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBob3ZlcjpiZy1zdG9uZS05MDAgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZXdlc3RcIj7wn5OFIFBsdXMgUsOpY2VudHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvbGRlc3RcIj7wn5OcIFBsdXMgQW5jaWVuczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJlc3RfcmF0aW5nXCI+8J+MnyBNaWV1eCBOb3TDqXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3b3JzdF9yYXRpbmdcIj7wn5KAIE1vaW5zIE5vdMOpczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDwn5SSIEJPVVRPTiBDUsOJRVIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5DcmVhdGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcImNyZWF0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgcHgtOCBweS0zIGZvbnQtYmxhY2sgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMTIsMTc1LDU1LDAuMildIHVwcGVyY2FzZSB0ZXh0LXhzIHRyYWNraW5nLXdpZGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBHcmF2ZXIgdW4gcsOpY2l0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIC0tLSBWVUVTIEZPUk1VTEFJUkVTIC0tLSAqL31cclxuICAgICAgICAgICAge3ZpZXcgPT09IFwiY3JlYXRlXCIgfHwgdmlldyA9PT0gXCJlZGl0XCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbS00IGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcImxpc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZElkKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi04IHRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbiB1cHBlcmNhc2UgdGV4dC1bMTBweF0gZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDihpAgUmV0b3VyIGF1IG11ciBkZXMgbMOpZ2VuZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVGb3JtIGlkPXtzZWxlY3RlZElkfSBvblN1Y2Nlc3M9e2hhbmRsZVN1Y2Nlc3N9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIC8qIC0tLSBWVUUgTElTVEUgREVTIEFSVElDTEVTIC0tLSAqL1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGVzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMjAgdGV4dC1zdG9uZS02MDAgaXRhbGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZSBzaWxlbmNlIHLDqGduZSBzdXIgbGUgbXVyLi4uIEF1Y3VuZSBjaHJvbmlxdWUgbidhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDDqXTDqSB0cm91dsOpZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5JZCA9IChhcnRpY2xlLmlkIHx8IGFydGljbGVbXCJAaWRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNPd25lciA9IHVzZXI/LmlkID09PSBhcnRpY2xlLmF1dGhvcj8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5FZGl0VGhpcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTdXBlckVkaXRvciB8fCAoaXNBdXRob3IgJiYgaXNPd25lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NsZWFuSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogcC01IHN1ciBtb2JpbGUsIHAtOCBzdXIgZGVza3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBiZy1zdG9uZS05MDAvNDAgYm9yZGVyLWwtNCBib3JkZXItc3RvbmUtODAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgcC01IG1kOnAtOCByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LWNvbCBzdXIgbW9iaWxlIHBvdXIgdGl0cmUgZXQgYm91dG9ucyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtYi00IGdhcC00IG1kOmdhcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogVGFpbGxlIHRpdHJlIGFkYXB0w6llICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyB1cHBlcmNhc2UgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmF2ZXJhZ2VSYXRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy01MDAgdGV4dC14cyBtZDp0ZXh0LXNtIGZvbnQtYm9sZCBib3JkZXIgYm9yZGVyLXllbGxvdy01MDAvMzAgcHgtMiBweS0wLjUgcm91bmRlZCBiZy15ZWxsb3ctNTAwLzEwIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDimIUge2FydGljbGUuYXZlcmFnZVJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog8J+UkiBCT1VUT05TIEQnQUNUSU9OICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbkVkaXRUaGlzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IG9wYWNpdHktMTAwIHN1ciBtb2JpbGUgKGNhciBwYXMgZGUgaG92ZXIpLCBtZDpvcGFjaXR5LTQwIHN1ciBvcmRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIG9wYWNpdHktMTAwIG1kOm9wYWNpdHktNDAgbWQ6Z3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5IHctZnVsbCBtZDp3LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoY2xlYW5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcImVkaXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBmbGV4LTEgc3VyIG1vYmlsZSBwb3VyIGRlcyBib3V0b25zIGxhcmdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIG1kOmZsZXgtbm9uZSB0ZXh0LWNlbnRlciB0ZXh0LVs5cHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIGJnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTQwMCBweC0zIHB5LTIgbWQ6cHktMSBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZCB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKGNsZWFuSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgbWQ6ZmxleC1ub25lIHRleHQtY2VudGVyIHRleHQtWzlweF0gdXBwZXJjYXNlIGZvbnQtYmxhY2sgYmctcmVkLTkwMC8xMCB0ZXh0LXJlZC01MDAvNzAgcHgtMyBweS0yIG1kOnB5LTEgYm9yZGVyIGJvcmRlci1yZWQtOTAwLzMwIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VwcHJpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB0ZXh0LWJhc2Ugc3VyIG1vYmlsZSwgdGV4dC1sZyBzdXIgZGVza3RvcCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDAgZm9udC1zZXJpZiBpdGFsaWMgdGV4dC1iYXNlIG1kOnRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTYgbWQ6bWItOCBtYXgtdy0zeGwgdGV4dC1qdXN0aWZ5IG1kOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ7YXJ0aWNsZS5zdW1tYXJ5fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IGZsZXgtY29sIHN1ciBtb2JpbGUgcG91ciBsZSBmb290ZXIgZGUgY2FydGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIHB0LTYgYm9yZGVyLXQgYm9yZGVyLXN0b25lLTgwMC81MCBnYXAtNCBzbTpnYXAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtWzFweF0gYmctdmlraW5nLWdvbGQvNDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZvbnQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFye1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hdXRob3I/LnBzZXVkbyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5hdXRob3I/LnVzZXJuYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkd1ZXJyaWVyIGRlIGwnb21icmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvYXJ0aWNsZS8ke2NsZWFuSWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1maXJlIGZvbnQtYmxhY2sgdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHNlbGYtZW5kIHNtOnNlbGYtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VsdGVyIGxlIHBhcmNoZW1pbntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+4oaSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3J1bVBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOaWdodEZ1cnlTY2VuZSBmcm9tIFwiLi4vY29tcG9uZW50cy9OaWdodEZ1cnlcIjtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBBSk9VVCA6IHB4LTQgcG91ciDDqXZpdGVyIHF1ZSBsZSBjb250ZW51IHRvdWNoZSBsZXMgYm9yZHMgc3VyIG1vYmlsZVxyXG4gICAgICAgIC8vIE1PRElGIDogcHktOCBzdXIgbW9iaWxlLCBweS0xNiBzdXIgb3JkaW5hdGV1clxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktOCBtZDpweS0xNiBweC00IGFuaW1hdGUtZmFkZS1pbi11cFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIE1PRElGIDogVGFpbGxlIGR1IHRleHRlIHByb2dyZXNzaXZlICg0eGwgLT4gNnhsIC0+IDh4bCkgKi99XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBzbTp0ZXh0LTZ4bCBtZDp0ZXh0LTh4bCBmb250LWRyYWdvbiB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tdmlraW5nLWdvbGQgdmlhLXllbGxvdy01MDAgdG8tdmlraW5nLWdvbGQgbWItNiBtZDptYi04IGRyb3Atc2hhZG93LXNtIGxlYWRpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBkYW5zIGwnQW50cmVcclxuICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBtZDp3LTI0IGgtMSBiZy12aWtpbmctcmVkIG14LWF1dG8gbWItNiBtZDptYi04IHJvdW5kZWQtZnVsbCBzaGFkb3ctWzBfMF8xMHB4XyNkYzI2MjZdXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBUYWlsbGUgZHUgdGV4dGUgcGx1cyBsaXNpYmxlIHN1ciBtb2JpbGUgKHRleHQtYmFzZSAtPiB0ZXh0LTJ4bCkgKi99XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBzbTp0ZXh0LWxnIG1kOnRleHQtMnhsIHRleHQtdmlraW5nLWxpZ2h0IG1iLTggbWQ6bWItMTIgbWF4LXctM3hsIG14LWF1dG8gZm9udC1zZXJpZiBpdGFsaWMgbGVhZGluZy1yZWxheGVkIHB4LTJcIj5cclxuICAgICAgICAgICAgICAgIFwiw4dhLCBjJ2VzdCBCZXVyay4gw4AgZG91emUgam91cnMgYXUgbm9yZCBkdSBEw6lzZXNwb2lyLCBldFxyXG4gICAgICAgICAgICAgICAgcXVlbHF1ZXMgZGVncsOpcyBhdSBzdWQgZCd1biBGcm9pZC1kZS1jYW5hcmQuIEFuY3LDqSBzb2xpZGVtZW50XHJcbiAgICAgICAgICAgICAgICBzdXIgbGUgTcOpcmlkaWVuIGRlIGxhIE1pc8OocmUuIE1vbiB2aWxsYWdlLi4uIEVuIHVuIG1vdCwgYmFsYWlzZS5cclxuICAgICAgICAgICAgICAgIEV0IHNlcHQgZ8OpbsOpcmF0aW9ucyB5IG9udCBkw6lqw6AgdnUgbGUgam91ciwgcG91cnRhbnQsIHRvdXRlcyBsZXNcclxuICAgICAgICAgICAgICAgIG1haXNvbnMgc29udCBuZXV2ZXMuIEJldXJrIDogc2EgcMOqY2hlLCBzYSBjaGFzc2UsIGV0IHNlc1xyXG4gICAgICAgICAgICAgICAgbWVydmVpbGxldXggY291Y2hlcnMgZGUgc29sZWlsLiBMYSBzZXVsZSBmYXVzc2Ugbm90ZSBjJ2VzdCBsZXNcclxuICAgICAgICAgICAgICAgIGJlc3Rpb2xlcy4gQWlsbGV1cnMsIGxlcyBnZW5zIG9udCBkZXMgc291cmlzIG91IGRlcyBtb3VzdGlxdWVzLlxyXG4gICAgICAgICAgICAgICAgTm91cyBvbiBhIGRlcy4uLiBkcmFnb25zLlwiXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtODAwIHJvdW5kZWQtMnhsIGJvcmRlci00IGJvcmRlci1zdG9uZS03MDAgc2hhZG93LTJ4bCBvdmVyZmxvdy1oaWRkZW4gbWItOCBtZDptYi0xMlwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogSGF1dGV1ciBhZGFwdGF0aXZlICEgXHJcbiAgICAgICAgICAgICAgICAgICAgMzAwcHggc3VyIG1vYmlsZSAoaC1bMzAwcHhdKVxyXG4gICAgICAgICAgICAgICAgICAgIDQwMHB4IHN1ciB0YWJsZXR0ZSAoc206aC1bNDAwcHhdKVxyXG4gICAgICAgICAgICAgICAgICAgIDYwMHB4IHN1ciBvcmRpbmF0ZXVyIChsZzpoLVs2MDBweF0pIFxyXG4gICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzMwMHB4XSBzbTpoLVs0MDBweF0gbGc6aC1bNjAwcHhdIHctZnVsbCByZWxhdGl2ZSBiZy1ibGFjayByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOaWdodEZ1cnlTY2VuZSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IGxlZnQtMCB3LWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC14cyBtZDp0ZXh0LXNtIHRleHQtZ3JheS00MDAgcG9pbnRlci1ldmVudHMtbm9uZSB6LTEwIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpcXVleiBzdXIgbGUgZHJhZ29uIChvdSB0b3VjaGV6LWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogZmxleC1jb2wgcG91ciBlbXBpbGVyIGxlcyBib3V0b25zIHN1ciBtb2JpbGUsIGZsZXgtcm93IHN1ciBvcmRpICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZ2FwLTQgbWQ6Z2FwLTYgdy1mdWxsIG1heC13LW1kIG1kOm1heC13LW5vbmUgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9mb3J1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB3LWZ1bGwgc3VyIG1vYmlsZSBwb3VyIGZhY2lsaXRlciBsZSBjbGljLCB3LWF1dG8gc3VyIG9yZGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSB3LWZ1bGwgbWQ6dy1hdXRvIHB4LTggcHktNCBiZy12aWtpbmctcmVkIGhvdmVyOmJnLXJlZC05MDAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHRleHQtd2hpdGUgZm9udC1kcmFnb24gdGV4dC1sZyBtZDp0ZXh0LXhsIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1bMF8wXzE1cHhfcmdiYSgyMjAsMzgsMzgsMC41KV0gYWN0aXZlOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+QWNjw6lkZXIgYXUgRm9ydW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZS8yMCB0by10cmFuc3BhcmVudCAtdHJhbnNsYXRlLXgtZnVsbCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC1mdWxsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvc3RhdGlzdGlxdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1hdXRvIHB4LTggcHktNCBiZy12aWtpbmctcm9jayBob3ZlcjpiZy1zdG9uZS03MDAgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTUwMCB0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIGZvbnQtZHJhZ29uIHRleHQtbGcgbWQ6dGV4dC14bCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1sZyBhY3RpdmU6c2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFZvaXIgbGVzIFN0YXRzXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IExvZ2luUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRFcnJvcignJyk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9naW5fY2hlY2snLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsIFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCBcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2sgJiYgZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZm9ydW0nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoJ0lkZW50aWZpYW50cyBpbmNvcnJlY3RzLiBMZXMgZHJhZ29ucyBuZSB2b3VzIHJlY29ubmFpc3NlbnQgcGFzLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdFcnJldXIgZGUgY29ubmV4aW9uIGF1IHNlcnZldXIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcHgtNCBwb3VyIMOpdml0ZXIgcXVlIMOnYSB0b3VjaGUgbGVzIGJvcmRzIHN1ciBtb2JpbGVcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IHAtNiBldCBtdC00IHN1ciBtb2JpbGUsIHAtMTAgZXQgbXQtMTAgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbXgtYXV0byBiZy12aWtpbmctcm9jayBwLTYgbWQ6cC0xMCBib3JkZXItMiBib3JkZXItdmlraW5nLWdvbGQgc2hhZG93LTJ4bCBtdC00IG1kOm10LTEwXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB0ZXh0LTJ4bCBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNiBtZDptYi04IHRleHQtY2VudGVyIHVwcGVyY2FzZVwiPkNvbm5leGlvbjwvaDI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1yZWQgdGV4dC1zbSBtYi00IGl0YWxpYyB0ZXh0LWNlbnRlciBmb250LWJvbGQgYW5pbWF0ZS1wdWxzZVwiPntlcnJvcn08L3A+fVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHNwYWNlLXktNCBzdXIgbW9iaWxlIChwbHVzIGNvbXBhY3QpICovfVxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00IG1kOnNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgZHUgR3VlcnJpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC1iYXNlIHBvdXIgw6l2aXRlciBsZSB6b29tIGlPUyBhdXRvbWF0aXF1ZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIG1kOnAtNCB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXhlbXBsZUBiZXJrLmZyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMiB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdCBkZSBwYXNzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBwLTMgbWQ6cC00IHRleHQtYmFzZSB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHB5LTMgc3VyIG1vYmlsZSBwb3VyIGdhZ25lciBkZSBsYSBwbGFjZSwgcHktNCBzdXIgZGVza3RvcCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJsYWNrIHB5LTMgbWQ6cHktNCB1cHBlcmNhc2UgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1sZyBhY3RpdmU6c2NhbGUtOTUgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByZW5kcmUgc29uIGVudm9sXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBSZWdpc3RlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBsYWluUGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHJvbGU6ICdST0xFX1VTRVInXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEVycm9yKCcnKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3JlZ2lzdGVyJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJpZ2UgdmVycyBsJ2FjY3VlaWwgb3UgbGUgbG9naW4gYXByw6hzIHN1Y2PDqHNcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvJyk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIkVycmV1ciBsb3JzIGRlIGwnaW5zY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJJbXBvc3NpYmxlIGRlIGNvbnRhY3RlciBsZSBHcmFuZCBTY3JpYmUgKEVycmV1ciByw6lzZWF1KVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gTU9ESUYgOiBweC00IHBvdXIgw6l2aXRlciBxdWUgbGEgY2FydGUgdG91Y2hlIGxlcyBib3JkcyBzdXIgbW9iaWxlXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHctZnVsbCBwYi0xMFwiPlxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBwLTYgZXQgbXQtNCBzdXIgbW9iaWxlLCBwLTggZXQgbXQtMTAgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbXgtYXV0byBiZy12aWtpbmctcm9jay85MCBwLTYgbWQ6cC04IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgYmFja2Ryb3AtYmx1ci1zbSBtdC00IG1kOm10LTEwXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB0ZXh0LTJ4bCBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNiBtZDptYi04IHRleHQtY2VudGVyIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWpvaW5kcmUgbGEgR3VpbGRlXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTkwMC80MCBib3JkZXIgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtMjAwIHAtMyByb3VuZGVkIG1iLTYgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHNwYWNlLXktNCBzdXIgbW9iaWxlIHBvdXIgY29tcGFjdGVyICovfVxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00IG1kOnNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBOT00gRCdVVElMSVNBVEVVUiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPk5vbSBkZSBjb2RlIChQc2V1ZG8pPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC1iYXNlIGV0IHAtMyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IEtyb2ttb3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHRleHQtYmFzZSByb3VuZGVkIHRleHQtdmlraW5nLXBhcmNobWVudCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBFTUFJTCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPkVtYWlsIGRlIGNvbnRhY3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidmlraW5nQGJlcmsuZnJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHRleHQtYmFzZSByb3VuZGVkIHRleHQtdmlraW5nLXBhcmNobWVudCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIGVtYWlsOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBSw5RMRSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPlJhbmcgYXUgc2VpbiBkZSBsYSBHdWlsZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBwLTMgZXQgdGV4dC1iYXNlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHRleHQtYmFzZSByb3VuZGVkIHRleHQtdmlraW5nLXBhcmNobWVudCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5yb2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHJvbGU6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX1VTRVJcIj5BYm9ubsOpIChMZWN0ZXVyKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfQVVURVVSXCI+QXV0ZXVyIChOYXJyYXRldXIpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9FRElURVVSXCI+w4lkaXRldXIgKEdhcmRpZW4pPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9ERVNJR05FUlwiPkRlc2lnbmV1ciAoQXJ0aXNhbik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0ZPVVJOSVNTRVVSXCI+Rm91cm5pc3NldXIgZGUgZG9ubsOpZXMgKFNjcmliZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0FETUlOXCI+QWRtaW5pc3RyYXRldXIgKENoZWYgZGUgbGEgR3VpbGRlKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1PVCBERSBQQVNTRSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPk1vdCBkZSBwYXNzZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLigKLigKLigKLigKLigKLigKLigKLigKJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHRleHQtYmFzZSByb3VuZGVkIHRleHQtdmlraW5nLXBhcmNobWVudCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBsYWluUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgcGxhaW5QYXNzd29yZDogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBweS0zIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC12aWtpbmctZGFyayBmb250LWV4dHJhYm9sZCBweS0zIG1kOnB5LTQgcm91bmRlZCBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHNoYWRvdy1sZyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbXQtNCB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHcmF2ZXIgbW9uIG5vbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcnQgYXMgQ2hhcnRKUywgQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEFyY0VsZW1lbnQsIFBvaW50RWxlbWVudCwgTGluZUVsZW1lbnQsXHJcbn0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBCYXIsIERvdWdobnV0LCBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEFyY0VsZW1lbnQsIFBvaW50RWxlbWVudCwgTGluZUVsZW1lbnQpO1xyXG5cclxuY29uc3QgU3RhdHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtib3hPZmZpY2VEYXRhLCBzZXRCb3hPZmZpY2VEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwb3B1bGF0aW9uRGF0YSwgc2V0UG9wdWxhdGlvbkRhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RpbWVsaW5lRGF0YSwgc2V0VGltZWxpbmVEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBsb2FkQ1NWID0gKHVybCwgY2FsbGJhY2spID0+IHtcclxuICAgIGZldGNoKHVybClcclxuICAgICAgLnRoZW4ociA9PiByLm9rID8gci50ZXh0KCkgOiBudWxsKVxyXG4gICAgICAudGhlbih0eHQgPT4ge1xyXG4gICAgICAgIGlmKCF0eHQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IHR4dC50cmltKCkuc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggPCAyKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IGxpbmVzWzBdLnNwbGl0KCc7JykubWFwKGggPT4gaC50cmltKCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBsaW5lcy5zbGljZSgxKS5tYXAobCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBsLnNwbGl0KCc7JykubWFwKHYgPT4gdi50cmltKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4gKHsuLi5hY2MsIFtoXTogdmFsc1tpXX0pLCB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2JveF9vZmZpY2UuY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgc2V0Qm94T2ZmaWNlRGF0YSh7XHJcbiAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0ZpbG0nXSksXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICBsYWJlbDogJ00kJyxcclxuICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydCb3ggT2ZmaWNlIChNaWxsaW9ucyAkKSddKSksXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsnIzdmMWQxZCcsICcjZGMyNjI2JywgJyNkOTc3MDYnXSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzI5MjUyNCcsXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvYmVya19wb3B1bGF0aW9uLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldFBvcHVsYXRpb25EYXRhKHtcclxuICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnR3JvdXBlJ10pLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ1BvcHVsYXRpb24nXSkpLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyNkOTc3MDYnLCAnIzdmMWQxZCcsICcjNTc1MzRlJywgJyNhOGEyOWUnXSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzFjMTkxNycsXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvZHJhZ29uc190aW1lbGluZS5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVsaW5lRGF0YSh7XHJcbiAgICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnQW5uw6llJ10pLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnRXNww6hjZXMnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnRXNww6hjZXMgUmVjZW5zw6llcyddKSksXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2Q5NzcwNicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjE3LCAxMTksIDYsIDAuMiknLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICB0ZW5zaW9uOiAwLjMsXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICBwbHVnaW5zOiB7IGxlZ2VuZDogeyBsYWJlbHM6IHsgY29sb3I6ICcjZTdlNWU0JywgZm9udDogeyBmYW1pbHk6ICdzZXJpZicgfSB9IH0gfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB5OiB7IHRpY2tzOiB7IGNvbG9yOiAnI2E4YTI5ZScgfSwgZ3JpZDogeyBjb2xvcjogJyM0NDQwM2MnIH0gfSxcclxuICAgICAgeDogeyB0aWNrczogeyBjb2xvcjogJyNhOGEyOWUnIH0sIGdyaWQ6IHsgY29sb3I6ICcjNDQ0MDNjJyB9IH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gTU9ESUYgOiBweC00IHN1ciBtb2JpbGUsIHBiLTEyIHBvdXIgbGUgc2Nyb2xsXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIGFuaW1hdGUtZmFkZS1pbiBweC00IHBiLTEyXCI+XHJcbiAgICAgICAgey8qIE1PRElGIDogbWItOCBzdXIgbW9iaWxlLCBtYi0xMiBzdXIgZGVza3RvcCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTggbWQ6bWItMTJcIj5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC0zeGwgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNCBkcm9wLXNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgTCdPYnNlcnZhdG9pcmUgZGUgQmVya1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIG1kOnRleHQtbGcgaXRhbGljIGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8zMCBpbmxpbmUtYmxvY2sgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgUmVjZW5zZW1lbnQgb2ZmaWNpZWwgZGUgbCdhcmNoaXBlbFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNiBtZDpnYXAtOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtNCBtZDpwLTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQteGwgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtZHJhZ29uIHRleHQtd2hpdGUgbWItNCBtZDptYi02XCI+VHLDqXNvciBkZSBHdWVycmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogaC01NiBzdXIgbW9iaWxlLCBoLTY0IHN1ciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTU2IG1kOmgtNjQgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Ym94T2ZmaWNlRGF0YSA/IDxCYXIgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17Ym94T2ZmaWNlRGF0YX0gLz4gOiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMCB0ZXh0LXN0b25lLTUwMCBpdGFsaWNcIj5DaGFyZ2VtZW50IGRlcyBkb25uw6llcy4uLjwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtNCBtZDpwLTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtZHJhZ29uIHRleHQtd2hpdGUgbWItNCBtZDptYi02XCI+Q2xhbnMgJiBUcmlidXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTU2IG1kOmgtNjQgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3B1bGF0aW9uRGF0YSA/IDxEb3VnaG51dCBvcHRpb25zPXt7Li4ub3B0aW9ucywgc2NhbGVzOnt9fX0gZGF0YT17cG9wdWxhdGlvbkRhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTAgdGV4dC1zdG9uZS01MDAgaXRhbGljXCI+Q2hhcmdlbWVudCBkZXMgY2xhbnMuLi48L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTQgbWQ6cC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIG1kOmNvbC1zcGFuLTIgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtZHJhZ29uIHRleHQtd2hpdGUgbWItNCBtZDptYi02XCI+Q2hyb25vbG9naWUgZGVzIETDqWNvdXZlcnRlczwvaDM+XHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBoLTY0IHN1ciBtb2JpbGUsIGgtODAgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgbWQ6aC04MCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lbGluZURhdGEgPyA8TGluZSBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXt0aW1lbGluZURhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTAgdGV4dC1zdG9uZS01MDAgaXRhbGljXCI+QW5hbHlzZSB0ZW1wb3JlbGxlLi4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0c1BhZ2U7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhvbWVQYWdlIiwiRm9ydW1QYWdlIiwiQXJ0aWNsZVBhZ2UiLCJTdGF0c1BhZ2UiLCJOYXZiYXIiLCJSZWdpc3RlclBhZ2UiLCJMb2dpblBhZ2UiLCJBcnRpY2xlU2hvdyIsIkFkbWluRGFzaGJvYXJkIiwiY29uc29sZSIsImxvZyIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJwYXRoIiwiZWxlbWVudCIsInJvb3RFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJlcnJvciIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIkFycmF5IiwiZnJvbSIsImlzQXJyYXkiLCJfYXJyYXlMaWtlVG9BcnJheSIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX25vbkl0ZXJhYmxlUmVzdCIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0ZXN0IiwibmV4dCIsInB1c2giLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNzdkNoYXJ0IiwiQXJ0aWNsZUZvcm0iLCJfcmVmIiwiX3JlZiRpZCIsImlkIiwib25TdWNjZXNzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInRpdGxlIiwic2V0VGl0bGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInN1bW1hcnkiLCJzZXRTdW1tYXJ5IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJibG9jcyIsInNldEJsb2NzIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJtdXNpY0xpYnJhcnkiLCJzZXRNdXNpY0xpYnJhcnkiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImRhdGFzZXRMaWJyYXJ5Iiwic2V0RGF0YXNldExpYnJhcnkiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoIiwiY29uY2F0IiwicmVzIiwianNvbiIsImRhdGEiLCJmb3JtYXR0ZWRCbG9jcyIsInNvcnQiLCJiIiwicG9zaXRpb24iLCJtYXAiLCJ2aXpUeXBlIiwiY29udGVudCIsInR5cGUiLCJwYXJ0cyIsInNwbGl0IiwibWVkaWFVcmwiLCJmaWxlIiwiZXJyIiwib2siLCJFcnJvciIsImFkZEJsb2MiLCJyZW1vdmVCbG9jIiwiaW5kZXhUb1JlbW92ZSIsImZpbHRlciIsIl8iLCJpbmRleCIsInVwZGF0ZUJsb2MiLCJmaWVsZCIsIm5ld0Jsb2NzIiwiaGFuZGxlRmlsZUNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwic3RhcnRzV2l0aCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZVN1Ym1pdCIsIl9yZWYyIiwiX2NhbGxlZSIsInRva2VuIiwiYXJ0aWNsZURhdGEiLCJyZXNwb25zZSIsImZvcm1EYXRhIiwiX3Jlc3BvbnNlIiwiZXJyb3JEYXRhIiwiX3QiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJsb2MiLCJmaW5hbENvbnRlbnQiLCJibG9jUGF5bG9hZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFsZXJ0IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJtZXNzYWdlIiwiX3giLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImtleSIsIm9uQ2xpY2siLCJhY2NlcHQiLCJzb3VyY2UiLCJjc3ZVcmwiLCJlbnRyaWVzIiwiX3JlZjMiLCJfcmVmNCIsImZvbGRlciIsImxhYmVsIiwidG9VcHBlckNhc2UiLCJUb29sQnRuIiwiZGlzYWJsZWQiLCJfcmVmNSIsInVzZVBhcmFtcyIsIkxpbmsiLCJWaWtpbmdQbGF5ZXIiLCJDb21tZW50U2VjdGlvbiIsIlN0YXJSYXRpbmciLCJfYXJ0aWNsZSRibG9jcyIsIl9hcnRpY2xlJGF1dGhvciIsIl91c2VQYXJhbXMiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsInJlamVjdCIsImN1c3RvbVN0eWxlcyIsInJhd0NvbmZpZyIsImRlc2lnbkNvbmZpZyIsInBhcnNlIiwiZmluYWxUaXRsZUNvbG9yIiwidGl0bGVDb2xvciIsImZpbmFsQ29udGVudEJnIiwiY29udGVudEJnIiwibXVzaWNCbG9jIiwiZmluZCIsIm11c2ljU3JjIiwiY29udGVudEJsb2NzIiwiaGFuZGxlUmF0ZSIsInNjb3JlIiwiQXV0aG9yaXphdGlvbiIsInRvIiwiYXJ0aWNsZUlkIiwiY3VycmVudFJhdGluZyIsImF2ZXJhZ2VSYXRpbmciLCJvblJhdGUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImF1dG9QbGF5IiwiYXV0aG9yIiwicHNldWRvIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIkNvbW1lbnRJdGVtIiwiX2NvbW1lbnQkYXV0aG9yIiwiY29tbWVudCIsIm9uVm90ZSIsIm9uUmVwbHkiLCJjYW5JbnRlcmFjdCIsInNob3dSZXBseUZvcm0iLCJzZXRTaG93UmVwbHlGb3JtIiwicmVwbHlDb250ZW50Iiwic2V0UmVwbHlDb250ZW50IiwiaGFuZGxlUmVwbHlTdWJtaXQiLCJyZXBsaWVzIiwicmVwbHkiLCJfQ29tbWVudEl0ZW0iLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwibmV3Q29tbWVudCIsInNldE5ld0NvbW1lbnQiLCJzZXRDYW5JbnRlcmFjdCIsImZldGNoQ29tbWVudHMiLCJjb21tZW50c0RhdGEiLCJyb290Q29tbWVudHMiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJoYW5kbGVQb3N0IiwicGFyZW50SWQiLCJfYXJncyIsImhhbmRsZVZvdGUiLCJfY2FsbGVlMiIsImNvbW1lbnRJZCIsImRpcmVjdGlvbiIsIl90MiIsIl9jb250ZXh0MiIsIl94MiIsIl94MyIsIlBhcGEiLCJCYXJDaGFydCIsIkJhciIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJMaW5lQ2hhcnQiLCJMaW5lIiwiUGllQ2hhcnQiLCJQaWUiLCJDZWxsIiwiQ09MT1JTIiwiX3JlZiR2aXpUeXBlIiwic2V0RGF0YSIsInNldEVycm9yIiwidGV4dCIsImNzdlRleHQiLCJoZWFkZXIiLCJkeW5hbWljVHlwaW5nIiwic2tpcEVtcHR5TGluZXMiLCJjb21wbGV0ZSIsInJlc3VsdHMiLCJrZXlzIiwieEtleSIsInlLZXkiLCJheGlzU3R5bGUiLCJmb250U2l6ZSIsImZpbGwiLCJyZW5kZXJDaGFydCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZSIsImRhdGFLZXkiLCJ0aWNrIiwiY29udGVudFN0eWxlIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsIndyYXBwZXJTdHlsZSIsInBhZGRpbmdUb3AiLCJzdHJva2VXaWR0aCIsImRvdCIsImFjdGl2ZURvdCIsImN4IiwiY3kiLCJsYWJlbExpbmUiLCJwZXJjZW50IiwidG9GaXhlZCIsIm91dGVyUmFkaXVzIiwibmFtZUtleSIsImVudHJ5IiwibGF5b3V0IiwidmVydGljYWxBbGlnbiIsImFsaWduIiwiY3Vyc29yIiwicmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJEYXRhUHJvdmlkZXJTcGFjZSIsImRhdGFzZXRzIiwic2V0RmlsZSIsInByZXZpZXciLCJzZXRQcmV2aWV3Iiwic2V0SGVhZGVycyIsImNvbHVtbk1hcHBpbmciLCJzZXRDb2x1bW5NYXBwaW5nIiwiZGF0YXNldE5hbWUiLCJzZXREYXRhc2V0TmFtZSIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJzZWxlY3RlZEZpbGUiLCJyZXBsYWNlIiwiY29scyIsImluaXRpYWxNYXBwaW5nIiwiaCIsInRvZ2dsZVR5cGUiLCJwcmV2IiwiaGFuZGxlVXBsb2FkIiwicGF5bG9hZCIsIm1ldGFkYXRhIiwiY29sdW1ucyIsInVwbG9hZGVkQXQiLCJ0b0lTT1N0cmluZyIsInJvd0NvdW50Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyb3ciLCJkcyIsInJvd3NDb3VudCIsInVzZU5hdmlnYXRlIiwiand0RGVjb2RlIiwiX3VzZXIiLCJfdXNlcjIiLCJfdXNlcjMiLCJuYXZpZ2F0ZSIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwidXNlciIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJjYW5TZWVEYXNoYm9hcmQiLCJyb2xlcyIsImNsb3NlTWVudSIsIkZyYWdtZW50IiwidXNlUmVmIiwiU3VzcGVuc2UiLCJDYW52YXMiLCJ1c2VGcmFtZSIsInVzZVRocmVlIiwidXNlR0xURiIsInVzZUFuaW1hdGlvbnMiLCJDZW50ZXIiLCJIdG1sIiwidXNlVGV4dHVyZSIsIlN0YXJzIiwiTU9ERUxfUEFUSCIsIlRFWFRVUkVfUEFUSCIsIkFOSU1BVElPTl9OQU1FIiwiRHJhZ29uTW9kZWwiLCJ2aXRlc3NlUm90YXRpb24iLCJ2aXRlc3NlQW5pbWF0aW9uIiwiZmFjdGV1clRhaWxsZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiX3VzZUdMVEYiLCJzY2VuZSIsImFuaW1hdGlvbnMiLCJ0ZXh0dXJlIiwiX3VzZVRocmVlIiwidmlld3BvcnQiLCJiYXNlU2NhbGUiLCJmaW5hbFNjYWxlIiwiZmxpcFkiLCJjb2xvclNwYWNlIiwiZ3JvdXAiLCJfdXNlQW5pbWF0aW9ucyIsImFjdGlvbnMiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJ0cmF2ZXJzZSIsImNoaWxkIiwiaXNNZXNoIiwibWF0ZXJpYWwiLCJuZWVkc1VwZGF0ZSIsImFjdGlvbiIsInJlc2V0IiwiZmFkZUluIiwicGxheSIsInRpbWVTY2FsZSIsInRvZ2dsZUFuaW1hdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsInBhdXNlZCIsImN1cnJlbnQiLCJyb3RhdGlvbiIsIl9leHRlbmRzIiwicmVmIiwib2JqZWN0Iiwib25Qb2ludGVyT3ZlciIsIm9uUG9pbnRlck91dCIsInNjYWxlIiwiTmlnaHRGdXJ5U2NlbmUiLCJyb3RTcGVlZCIsInNldFJvdFNwZWVkIiwiYW5pbVNwZWVkIiwic2V0QW5pbVNwZWVkIiwic2l6ZUZhY3RvciIsInNldFNpemVGYWN0b3IiLCJjb250cm9sc1Zpc2libGUiLCJzZXRDb250cm9sc1Zpc2libGUiLCJoYW5kbGVSZXNldCIsInNoYWRvd3MiLCJjYW1lcmEiLCJmb3YiLCJhdHRhY2giLCJhcmdzIiwiZGVwdGgiLCJjb3VudCIsImZhY3RvciIsInNhdHVyYXRpb24iLCJmYWRlIiwic3BlZWQiLCJpbnRlbnNpdHkiLCJmYWxsYmFjayIsImNlbnRlciIsIm1pbiIsIm1heCIsInN0ZXAiLCJwYXJzZUZsb2F0IiwicHJlbG9hZCIsImhvdmVyIiwic2V0SG92ZXIiLCJyYXRpbmciLCJzZXRSYXRpbmciLCJoYW5kbGVSYXRpbmciLCJzdGFyIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiX3JlZiRhdXRvUGxheSIsImF1ZGlvUmVmIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiaXNCbG9ja2VkIiwic2V0SXNCbG9ja2VkIiwicGxheVByb21pc2UiLCJ0b2dnbGVQbGF5IiwicGF1c2UiLCJoYW5kbGVUaW1lVXBkYXRlIiwidG90YWwiLCJmb3JtYXRUaW1lIiwiaGFuZGxlU2VlayIsImNsaWVudFdpZHRoIiwiY2xpY2tYIiwibmF0aXZlRXZlbnQiLCJvZmZzZXRYIiwidGltZSIsImlzTmFOIiwiTWF0aCIsImZsb29yIiwic2VjIiwiYmFycyIsImFuaW1hdGlvbkR1cmF0aW9uIiwicmFuZG9tIiwib25UaW1lVXBkYXRlIiwib25FbmRlZCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJ2aWV3Qm94IiwiX2N1cnJlbnRVc2VyIiwiX2RhdGEkYWxsVXNlcnMiLCJfZGF0YSRtYW5hZ2VtZW50QXJ0aWMiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImN1cnJlbnRVc2VyIiwiaXNGdWxsQWRtaW4iLCJpc1Byb3ZpZGVyIiwiaXNEZXNpZ25lciIsImlzRWRpdG9yIiwibG9hZFN0YXRzIiwiaGFuZGxlRGVsZXRlQXJ0aWNsZSIsImNvbmZpcm0iLCJtYW5hZ2VtZW50QXJ0aWNsZXMiLCJhcnQiLCJoYW5kbGVFZGl0U3VjY2VzcyIsImhhbmRsZVByb21vdGUiLCJ1c2VySWQiLCJ1cGRhdGVkRGF0YSIsImFsbFVzZXJzIiwibmV3Um9sZXMiLCJ1c2Vyc0NvdW50IiwiYXJ0aWNsZXNDb3VudCIsInRvTG93ZXJDYXNlIiwiam9pbiIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJzZXRVc2VyIiwic29ydE9yZGVyIiwic2V0U29ydE9yZGVyIiwidmlldyIsInNldFZpZXciLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsImRlY29kZWQiLCJmZXRjaEFydGljbGVzIiwidXJsIiwiQWNjZXB0IiwiaGFuZGxlRGVsZXRlIiwiX3QzIiwiYUlkIiwicG9wIiwiaGFuZGxlU3VjY2VzcyIsInVzZXJSb2xlcyIsInN1cGVyRWRpdG9ycyIsImlzU3VwZXJFZGl0b3IiLCJzb21lIiwiaXNBdXRob3IiLCJjYW5DcmVhdGUiLCJfYXJ0aWNsZSRhdXRob3IyIiwiX2FydGljbGUkYXV0aG9yMyIsImNsZWFuSWQiLCJpc093bmVyIiwiY2FuRWRpdFRoaXMiLCJ1c2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2V0SXRlbSIsImhyZWYiLCJwbGFpblBhc3N3b3JkIiwicm9sZSIsInNldEZvcm1EYXRhIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIlRpdGxlIiwiQXJjRWxlbWVudCIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiRG91Z2hudXQiLCJyZWdpc3RlciIsImJveE9mZmljZURhdGEiLCJzZXRCb3hPZmZpY2VEYXRhIiwicG9wdWxhdGlvbkRhdGEiLCJzZXRQb3B1bGF0aW9uRGF0YSIsInRpbWVsaW5lRGF0YSIsInNldFRpbWVsaW5lRGF0YSIsImxvYWRDU1YiLCJjYWxsYmFjayIsInR4dCIsImxpbmVzIiwidHJpbSIsInZhbHMiLCJyZWR1Y2UiLCJhY2MiLCJsYWJlbHMiLCJib3JkZXJXaWR0aCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwidGVuc2lvbiIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInBsdWdpbnMiLCJsZWdlbmQiLCJmb250IiwiZmFtaWx5Iiwic2NhbGVzIiwidGlja3MiLCJncmlkIiwieCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9