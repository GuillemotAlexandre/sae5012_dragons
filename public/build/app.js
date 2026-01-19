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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("form", {
    onSubmit: handleSubmit,
    className: "bg-stone-900 p-8 border border-stone-800 shadow-2xl max-w-4xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("h2", {
    className: "text-3xl font-dragon text-viking-gold mb-8 text-center uppercase"
  }, id ? 'Modifier la Chronique' : 'Nouvelle Chronique'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("input", {
    type: "text",
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    className: "w-full bg-black/50 border border-stone-700 text-white p-4 text-2xl outline-none focus:border-viking-gold",
    placeholder: "Titre...",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("textarea", {
    value: summary,
    onChange: function onChange(e) {
      return setSummary(e.target.value);
    },
    className: "w-full bg-black/50 border border-stone-700 text-stone-300 p-4 h-24 outline-none focus:border-viking-gold",
    placeholder: "R\xE9sum\xE9...",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "space-y-6 mb-8"
  }, blocs.map(function (bloc, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      key: bloc.id || index,
      className: "bg-stone-800/50 p-6 border-l-4 border-viking-gold relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      type: "button",
      onClick: function onClick() {
        return removeBloc(index);
      },
      className: "absolute top-2 right-2 text-stone-500 hover:text-red-500 text-xs font-bold uppercase transition"
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
      className: "text-stone-400 text-sm"
    }), bloc.mediaUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("img", {
      src: bloc.mediaUrl,
      alt: "Preview",
      className: "mt-4 max-h-40 border border-stone-600"
    })), bloc.type === 'stats' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
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
        className: "px-3 py-2 text-xs font-bold uppercase border transition ".concat(bloc.vizType === type ? 'bg-viking-gold text-black border-viking-gold' : 'bg-black text-stone-500 border-stone-700 hover:text-white')
      }, type);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "bg-black/20 border border-stone-800 flex items-center justify-center min-h-[200px] rounded"
    }, bloc.mediaUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_CsvChart__WEBPACK_IMPORTED_MODULE_43__["default"], {
      csvUrl: bloc.mediaUrl,
      vizType: bloc.vizType || 'bar'
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
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
    })));
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
    className: "w-full bg-viking-gold text-black font-black uppercase py-4 hover:bg-yellow-500 transition shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-50"
  }, loading ? id ? 'Réécriture...' : 'Gravure en cours...' : id ? 'Mettre à jour le Récit' : 'Publier la Chronique'));
};
var ToolBtn = function ToolBtn(_ref5) {
  var label = _ref5.label,
    onClick = _ref5.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    type: "button",
    onClick: onClick,
    className: "px-4 py-2 bg-stone-800 text-stone-300 border border-stone-700 hover:border-viking-gold hover:text-white transition text-xs uppercase font-bold tracking-wider"
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
    className: "max-w-4xl mx-auto p-8 min-h-screen bg-stone-900 border-x border-stone-800 shadow-2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
    className: "flex justify-between items-center mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Link, {
    to: "/forum",
    className: "text-stone-500 hover:text-viking-gold mb-8 inline-block text-sm uppercase tracking-widest"
  }, "\u2190 Retour au Hall"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
    className: "flex justify-center items-center gap-4 mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement(_StarRating__WEBPACK_IMPORTED_MODULE_40__["default"], {
    articleId: id,
    currentRating: article.averageRating,
    onRate: handleRate
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("span", {
    className: "text-stone-400 text-sm"
  }, "Moyenne : ", article.averageRating || "0", "/5"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("h1", {
    style: {
      "--article-title-color": finalTitleColor
    },
    className: "article-dynamic-title text-5xl font-dragon mb-6 text-center uppercase tracking-widest drop-shadow-lg transition-all duration-500"
  }, article.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
    style: {
      backgroundColor: finalContentBg
    },
    className: "p-8 border-l-4 border-viking-gold mb-8 italic text-stone-300 text-lg leading-relaxed shadow-inner transition-all duration-500"
  }, article.summary), musicSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
    className: "mb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement(_VikingPlayer__WEBPACK_IMPORTED_MODULE_38__["default"], {
    src: musicSrc,
    autoPlay: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
    className: "space-y-12"
  }, contentBlocs.map(function (bloc) {
    switch (bloc.type) {
      case "h2":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("h2", {
          key: bloc.id,
          className: "text-3xl font-bold text-white border-b border-stone-700 pb-2 mt-8"
        }, bloc.content);
      case "paragraph":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("p", {
          key: bloc.id,
          className: "text-stone-300 leading-relaxed text-lg whitespace-pre-line text-justify"
        }, bloc.content);
      case "image":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("figure", {
          key: bloc.id,
          className: "text-center my-8"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("img", {
          src: bloc.content,
          alt: "Illustration",
          className: "mx-auto max-h-[500px] border-4 border-stone-800 shadow-xl rounded"
        }));
      case "stats":
      case "viz":
        var parts = bloc.content ? bloc.content.split("::") : [];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
          key: bloc.id,
          className: "bg-black/40 border border-stone-700 p-6 rounded-lg my-8 shadow-inner"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("h3", {
          className: "text-viking-gold font-bold text-sm uppercase mb-4 tracking-widest text-center"
        }, "\uD83D\uDCCA Donn\xE9es du Clan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
          className: "h-96"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement(_CsvChart__WEBPACK_IMPORTED_MODULE_37__["default"], {
          csvUrl: parts[1],
          vizType: parts[0] || "bar"
        })));
      default:
        return null;
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement("div", {
    className: "mt-20 pt-10 border-t border-stone-800 text-center text-stone-500 text-xs uppercase tracking-widest"
  }, "Grav\xE9 par ", ((_article$author = article.author) === null || _article$author === void 0 ? void 0 : _article$author.pseudo) || "Un éclaireur", " \u2022", " ", new Date(article.createdAt).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_34___default().createElement(_CommentSection__WEBPACK_IMPORTED_MODULE_39__["default"], {
    articleId: id
  }));
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
    onReply(replyContent, comment.id); // On répond à CE commentaire (parent)
    setReplyContent("");
    setShowReplyForm(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "border-l-2 border-stone-700 pl-4 mt-4 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "flex items-center gap-2 text-xs text-stone-400 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
    className: "font-bold text-viking-gold"
  }, ((_comment$author = comment.author) === null || _comment$author === void 0 ? void 0 : _comment$author.pseudo) || "Viking Anonyme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", null, "\u2022 ", comment.score, " points"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", null, "\u2022 ", new Date(comment.createdAt).toLocaleDateString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", {
    className: "text-stone-200 text-sm mb-2"
  }, comment.content), canInteract && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "flex items-center gap-4 text-xs font-bold uppercase text-stone-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "flex gap-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    onClick: function onClick() {
      return onVote(comment.id, "up");
    },
    className: "hover:text-green-500"
  }, "\u25B2 Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    onClick: function onClick() {
      return onVote(comment.id, "down");
    },
    className: "hover:text-red-500"
  }, "\u25BC Down")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    onClick: function onClick() {
      return setShowReplyForm(!showReplyForm);
    },
    className: "hover:text-white"
  }, "R\xE9pondre")), showReplyForm && canInteract && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("form", {
    onSubmit: handleReplySubmit,
    className: "mt-2 flex gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("input", {
    type: "text",
    value: replyContent,
    onChange: function onChange(e) {
      return setReplyContent(e.target.value);
    },
    className: "bg-black border border-stone-600 p-2 text-white text-xs w-full",
    placeholder: "Votre r\xE9ponse...",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    type: "submit",
    className: "bg-stone-700 text-white px-3 text-xs uppercase"
  }, "Envoyer")), comment.replies && comment.replies.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "mt-2"
  }, comment.replies.map(function (reply) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_CommentItem, {
      key: reply.id,
      comment: reply,
      onVote: onVote,
      onReply: onReply,
      articleId: articleId,
      canInteract: canInteract // 👈 On transmet la permission aux enfants
    });
  })));
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
  // 🔒 État pour savoir si l'utilisateur est connecté
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    canInteract = _useState10[0],
    setCanInteract = _useState10[1];

  // Vérification de la connexion au chargement
  (0,react__WEBPACK_IMPORTED_MODULE_32__.useEffect)(function () {
    var token = localStorage.getItem("token");
    setCanInteract(!!token); // Si token existe => true, sinon => false
  }, []);

  // Charger les commentaires
  var fetchComments = function fetchComments() {
    fetch("/api/comments?article=".concat(articleId, "&parent[exists]=false")).then(function (res) {
      return res.json();
    }).then(function (data) {
      // 1. On récupère la liste peu importe le nom de la clé
      var commentsData = data["hydra:member"] || data["member"] || [];

      // 2. On filtre les racines (ceux qui n'ont pas de parent)
      var rootComments = commentsData.filter(function (c) {
        return !c.parent || c.parent === undefined || c.parent === null;
      });

      // 3. On met à jour l'état
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

  // Poster un commentaire
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
              fetchComments(); // Recharger la liste
              if (!parentId) setNewComment(""); // Vider le champ principal
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

  // Voter
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
                "Authorization": "Bearer ".concat(token),
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
    className: "mt-12 pt-8 border-t border-stone-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("h3", {
    className: "text-2xl font-dragon text-viking-gold mb-6 uppercase"
  }, "Conseil de Guerre (", comments.length, " avis)"), canInteract ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "mb-8 flex gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("textarea", {
    value: newComment,
    onChange: function onChange(e) {
      return setNewComment(e.target.value);
    },
    className: "w-full bg-black/50 border border-stone-700 text-stone-300 p-3 h-20 focus:border-viking-gold outline-none",
    placeholder: "Laissez votre marque sur ce r\xE9cit..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    onClick: function onClick() {
      return handlePost(newComment);
    },
    className: "bg-viking-gold text-black font-bold px-6 uppercase hover:bg-white transition"
  }, "Graver")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "mb-8 p-4 border border-stone-800 bg-stone-900/50 text-center italic text-stone-500 text-sm"
  }, "Rejoignez le clan (connectez-vous) pour participer au conseil de guerre et voter."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "space-y-6"
  }, comments.map(function (comment) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_CommentItem, {
      key: comment.id,
      comment: comment,
      onVote: handleVote,
      onReply: handlePost,
      articleId: articleId,
      canInteract: canInteract // 👈 On passe l'info "connecté" aux items
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
      type: "button",
      className: "text-2xl transition-colors ".concat(star <= (hover || rating) ? "text-viking-gold" : "text-stone-600"),
      onClick: function onClick() {
        return handleRating(star);
      },
      onMouseEnter: function onMouseEnter() {
        return setHover(star);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(rating);
      }
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "w-full max-w-2xl mx-auto my-8 bg-black/80 border border-viking-gold/30 rounded-lg p-6 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-sm relative overflow-hidden"
  }, isBlocked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "absolute inset-0 bg-black/80 z-20 flex items-center justify-center animate-fade-in"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    onClick: togglePlay,
    className: "px-6 py-3 bg-viking-gold text-black font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.6)]"
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
    className: "flex items-center gap-6 relative z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("button", {
    onClick: togglePlay,
    className: "w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-viking-gold transition-all duration-300 ".concat(isPlaying ? 'bg-viking-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'text-viking-gold hover:bg-viking-gold/20')
  }, isPlaying ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("svg", {
    className: "w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("path", {
    d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("svg", {
    className: "w-6 h-6 translate-x-0.5",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("path", {
    d: "M8 5v14l11-7z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "flex justify-between text-[10px] text-viking-gold font-mono mb-2 uppercase tracking-widest opacity-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", null, currentTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", null, isPlaying ? "Lecture..." : "Pause"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", null, duration)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "h-10 flex items-end justify-center mb-3 overflow-hidden opacity-80"
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
  }))))));
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
              // On met à jour l'affichage localement sans recharger toute la page
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
    setEditingId(null); // On quitte le mode édition
    loadStats(); // On recharge les données pour voir les changements (titre, etc.)
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
    className: "animate-fadeIn"
  }, editingId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "bg-stone-900 p-4 border border-viking-gold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    onClick: function onClick() {
      return setEditingId(null);
    },
    className: "mb-4 text-stone-500 hover:text-white uppercase text-xs font-bold tracking-widest"
  }, "\u2190 Annuler la modification"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_components_ArticleForm__WEBPACK_IMPORTED_MODULE_46__["default"], {
    id: editingId,
    onSuccess: handleEditSuccess
  })) :
  /*#__PURE__*/
  /* CAS 2 : LISTE DES ARTICLES */
  react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "grid gap-2"
  }, (_data$managementArtic = data.managementArticles) === null || _data$managementArtic === void 0 ? void 0 : _data$managementArtic.map(function (art) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      key: art.id,
      className: "p-4 bg-stone-900 border border-stone-800 flex justify-between items-center hover:border-stone-600 transition-colors group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_45__.Link, {
      to: "/article/".concat(art.id),
      className: "font-bold text-viking-parchment group-hover:text-viking-gold transition-colors text-lg"
    }, art.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "text-stone-500 text-xs mt-1"
    }, "Par ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("span", {
      className: "text-stone-400"
    }, art.author), " \u2022 Le ", new Date(art.createdAt).toLocaleDateString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "flex items-center gap-3 ml-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      onClick: function onClick() {
        return setEditingId(art.id);
      },
      className: "px-3 py-2 bg-stone-800 text-stone-300 border border-stone-600 hover:border-viking-gold hover:text-white text-[10px] uppercase font-bold tracking-widest transition"
    }, "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      onClick: function onClick() {
        return handleDeleteArticle(art.id);
      },
      className: "px-3 py-2 bg-red-900/20 text-red-500 border border-red-900/50 hover:bg-red-900 hover:text-white text-[10px] uppercase font-bold tracking-widest transition"
    }, "Supprimer")));
  }), (!data.managementArticles || data.managementArticles.length === 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
    className: "text-stone-500 italic text-center"
  }, "Aucune chronique \xE0 g\xE9rer."))), activeTab === 'data' && isProvider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_components_DataProviderSpace__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
        // console.log("Guerrier connecté :", decoded); // Décommenter si besoin
        setUser(decoded);
      } catch (e) {
        console.error("Badge (Token) invalide ou expiré");
      }
    }
    // Le chargement se fait via le useEffect du sortOrder ci-dessous
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
              // Suppression locale immédiate pour l'interface
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

  // 🛡️ --- NOUVELLE LOGIQUE DES RÔLES (GUESTS/USERS/AUTEURS/EDITEURS) --- 🛡️
  var userRoles = (user === null || user === void 0 ? void 0 : user.roles) || [];

  // 1. Ceux qui peuvent TOUT modifier (Éditeur, Admin, Designer, Fournisseur)
  var superEditors = ["ROLE_EDITEUR", "ROLE_ADMIN", "ROLE_DESIGNER", "ROLE_FOURNISSEUR"];
  var isSuperEditor = superEditors.some(function (r) {
    return userRoles.includes(r);
  });

  // 2. Est-ce un auteur ?
  var isAuthor = userRoles.includes("ROLE_AUTEUR");

  // 3. Qui peut créer ? (Auteurs + Super Editeurs)
  // Note : ROLE_USER (Abonné) n'est PAS inclus ici, il ne voit pas le bouton.
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "max-w-6xl mx-auto px-4 pb-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "flex flex-col md:flex-row justify-between items-end mb-12 border-b border-viking-gold/20 pb-8 gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("h1", {
    className: "text-6xl font-dragon text-viking-parchment uppercase tracking-tighter"
  }, "Chroniques"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", {
    className: "text-stone-500 italic text-sm mt-2"
  }, "Le savoir du village de Berk, grav\xE9 pour l'\xE9ternit\xE9.")), view === "list" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("select", {
    value: sortOrder,
    onChange: function onChange(e) {
      return setSortOrder(e.target.value);
    },
    className: "bg-black/50 border border-viking-gold/50 text-viking-gold py-3 px-4 rounded cursor-pointer uppercase text-xs font-bold tracking-widest focus:outline-none focus:border-viking-gold hover:bg-stone-900 transition"
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
      setSelectedId(null); // 👈 AJOUTE ÇA pour être sûr qu'on part de zéro
      setView("create");
    },
    className: "..."
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

    // 🛡️ PERMISSIONS PAR ARTICLE
    // Je suis propriétaire SI mon ID = ID de l'auteur
    var isOwner = (user === null || user === void 0 ? void 0 : user.id) === ((_article$author = article.author) === null || _article$author === void 0 ? void 0 : _article$author.id);

    // J'ai le droit de modifier SI :
    // 1. Je suis un Super Editeur (peu importe l'auteur)
    // 2. OU ALORS je suis Auteur ET c'est MON article
    var canEditThis = isSuperEditor || isAuthor && isOwner;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("article", {
      key: cleanId,
      className: "group bg-stone-900/40 border-l-4 border-stone-800 hover:border-viking-gold transition-all duration-300 p-8 relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "flex justify-between items-start mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("h2", {
      className: "text-3xl font-dragon text-viking-gold group-hover:text-white transition-colors uppercase"
    }, article.title), article.averageRating && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
      className: "text-yellow-500 text-sm font-bold border border-yellow-500/30 px-2 py-0.5 rounded bg-yellow-500/10"
    }, "\u2605 ", article.averageRating)), canEditThis && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "flex gap-2 opacity-40 group-hover:opacity-100 transition-opacity"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
      onClick: function onClick() {
        setSelectedId(cleanId);
        setView("edit");
      },
      className: "text-[9px] uppercase font-black bg-stone-800 text-stone-400 px-3 py-1 border border-stone-700 hover:text-white hover:border-viking-gold transition"
    }, "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
      onClick: function onClick() {
        return handleDelete(cleanId);
      },
      className: "text-[9px] uppercase font-black bg-red-900/10 text-red-500/70 px-3 py-1 border border-red-900/30 hover:bg-red-900 hover:text-white transition"
    }, "Supprimer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", {
      className: "text-stone-400 font-serif italic text-lg leading-relaxed mb-8 max-w-3xl"
    }, "\"", article.summary, "\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "flex justify-between items-center pt-6 border-t border-stone-800/50"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "w-6 h-[1px] bg-viking-gold/40"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
      className: "text-[10px] text-stone-500 uppercase tracking-widest font-black"
    }, "Par", " ", ((_article$author2 = article.author) === null || _article$author2 === void 0 ? void 0 : _article$author2.pseudo) || ((_article$author3 = article.author) === null || _article$author3 === void 0 ? void 0 : _article$author3.username) || "Guerrier de l'ombre")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Link, {
      to: "/article/".concat(cleanId),
      className: "text-viking-fire font-black text-[10px] uppercase tracking-widest hover:text-viking-gold transition-colors flex items-center gap-2"
    }, "Consulter le parchemin", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-three_drei_core_Center_js-node_modules_react-three_drei_core_Stars-1163f0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRW1EO0FBQ0E7QUFD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QUFFLENBQUMsZ0JBQUc5bEIsMkRBQUE7SUFBR2tCLFNBQVMsRUFBQztFQUFtQixHQUFDLGVBQWdCLENBQ3pJLENBQ0osQ0FBQyxlQUVObEIsMkRBQUE7SUFBS2tCLFNBQVMsRUFBQztFQUEyRixnQkFDdEdsQiwyREFBQTtJQUFLa0IsU0FBUyxFQUFDO0VBQWlELENBQU0sQ0FBQyxlQUN2RWxCLDJEQUFBO0lBQUlrQixTQUFTLEVBQUM7RUFBc0MsR0FBQyxnQ0FBK0IsQ0FBQyxlQUNyRmxCLDJEQUFBO0lBQUtrQixTQUFTLEVBQUM7RUFBZSxHQUN6QjhrQixZQUFZLGdCQUFHaG1CLDJEQUFBLENBQUM2UyxrREFBSTtJQUFDaVUsT0FBTyxFQUFFQSxPQUFRO0lBQUNuZSxJQUFJLEVBQUVxZDtFQUFhLENBQUUsQ0FBQyxnQkFBR2htQiwyREFBQTtJQUFHa0IsU0FBUyxFQUFDO0VBQW1CLEdBQUMsZUFBZ0IsQ0FDakgsQ0FDSixDQUNKLENBQ0osQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZVYsU0FBUyxFOzs7Ozs7Ozs7OztBQ3pIeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0FydGljbGVGb3JtLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9BcnRpY2xlU2hvdy5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29tbWVudFNlY3Rpb24uanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0NzdkNoYXJ0LmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9EYXRhUHJvdmlkZXJTcGFjZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9OaWdodEZ1cnkuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL1N0YXJSYXRpbmcuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL1Zpa2luZ1BsYXllci5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0FkbWluRGFzaGJvYXJkLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvQXJ0aWNsZVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Gb3J1bVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Ib21lUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0xvZ2luUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL1JlZ2lzdGVyUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL1N0YXRzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy8gSW1wb3J0IGRlcyBzdHlsZXNcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuXHJcbi8vIEltcG9ydCBkZXMgcGFnZXNcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vcGFnZXMvSG9tZVBhZ2UnO1xyXG5pbXBvcnQgRm9ydW1QYWdlIGZyb20gJy4vcGFnZXMvRm9ydW1QYWdlJztcclxuaW1wb3J0IEFydGljbGVQYWdlIGZyb20gJy4vcGFnZXMvQXJ0aWNsZVBhZ2UnO1xyXG5pbXBvcnQgU3RhdHNQYWdlIGZyb20gJy4vcGFnZXMvU3RhdHNQYWdlJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IFJlZ2lzdGVyUGFnZSBmcm9tICcuL3BhZ2VzL1JlZ2lzdGVyUGFnZSc7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSAnLi9wYWdlcy9Mb2dpblBhZ2UnO1xyXG5pbXBvcnQgQXJ0aWNsZVNob3cgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGVTaG93JztcclxuXHJcbi8vIE5PVVZFQVUgOiBJbXBvcnQgZGUgbGEgcGFnZSBEYXNoYm9hcmQgQWRtaW5cclxuaW1wb3J0IEFkbWluRGFzaGJvYXJkIGZyb20gJy4vcGFnZXMvQWRtaW5EYXNoYm9hcmQnO1xyXG5cclxuY29uc29sZS5sb2coXCLwn5CyIETDqW1hcnJhZ2UgZGUgbCdhcHBsaWNhdGlvbiBEcmFnb25DTVMuLi5cIik7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGZvbnQtc2FucyB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBCQU5OScOIUkUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIG1kOmgtNDggb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1iLTQgYm9yZGVyLXZpa2luZy1nb2xkIHJlbGF0aXZlIHNoYWRvdy0yeGwgYmctYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Jhbm5pZXJlLnBuZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJCYW5uacOocmUgRHJhZ29uc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi03MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS12aWtpbmctZGFyayB0by10cmFuc3BhcmVudCBvcGFjaXR5LTYwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS0xMCBweC00IGZsZXgtZ3JvdyByZWxhdGl2ZSB6LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWVQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9mb3J1bVwiIGVsZW1lbnQ9ezxGb3J1bVBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Um91dGUgcGF0aD1cIi9mb3J1bS9hcnRpY2xlLzppZFwiIGVsZW1lbnQ9ezxBcnRpY2xlUGFnZSAvPn0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FydGljbGUvOmlkXCIgZWxlbWVudD17PEFydGljbGVTaG93IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zdGF0aXN0aXF1ZVwiIGVsZW1lbnQ9ezxTdGF0c1BhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlZ2lzdGVyXCIgZWxlbWVudD17PFJlZ2lzdGVyUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9naW5QYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5PVVZFTExFIFJPVVRFIDogU2FsbGUgZHUgQ29uc2VpbCAoQWRtaW4pICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZG1pblwiIGVsZW1lbnQ9ezxBZG1pbkRhc2hib2FyZCAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgYm9yZGVyLXQgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHB5LTYgbXQtMTAgdGV4dC1jZW50ZXIgdGV4dC12aWtpbmctbGlnaHQgZm9udC1kcmFnb24gdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPsKpIEwnQWNhZMOpbWllIGRlIEJlcmsgLSBBcmNoaXZlcyBEcmFjb25pcXVlczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3Qtcm9vdCcpO1xyXG5pZiAocm9vdEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KHJvb3RFbGVtZW50KTtcclxuICAgIHJvb3QucmVuZGVyKDxBcHAgLz4pO1xyXG4gICAgY29uc29sZS5sb2coXCLinIUgUmVhY3QgaW5qZWN0w6kgYXZlYyBzdWNjw6hzICFcIik7XHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIEltcG9zc2libGUgZGUgdHJvdXZlciBsJ8OpbMOpbWVudCAjcmVhY3Qtcm9vdFwiKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyDwn5GHIDEuIElNUE9SVCBEVSBHUkFQSElRVUUgKEluZGlzcGVuc2FibGUpXHJcbmltcG9ydCBDc3ZDaGFydCBmcm9tICcuL0NzdkNoYXJ0JzsgXHJcblxyXG5jb25zdCBBcnRpY2xlRm9ybSA9ICh7IGlkID0gbnVsbCwgb25TdWNjZXNzIH0pID0+IHtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Jsb2NzLCBzZXRCbG9jc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpc2F0aW9uIGF2ZWMgZGVzIHRhYmxlYXV4IHZpZGVzIHBvdXIgw6l2aXRlciBsZXMgY3Jhc2hzXHJcbiAgICBjb25zdCBbbXVzaWNMaWJyYXJ5LCBzZXRNdXNpY0xpYnJhcnldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2RhdGFzZXRMaWJyYXJ5LCBzZXREYXRhc2V0TGlicmFyeV0gPSB1c2VTdGF0ZShbXSk7IFxyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyAtLS0gMS4gQ0hBUkdFTUVOVCBERVMgRE9OTsOJRVMgREUgTCdBUlRJQ0xFIChTSSBNT0RJRklDQVRJT04pIC0tLVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZShkYXRhLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdW1tYXJ5KGRhdGEuc3VtbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT24gZm9ybWF0ZSBsZXMgYmxvY3MgcmXDp3VzIGRlIGwnQVBJIHBvdXIgcXUnaWxzIG1hcmNoZW50IGRhbnMgbGUgZm9ybXVsYWlyZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZEJsb2NzID0gKGRhdGEuYmxvY3MgfHwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChiID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aXpUeXBlID0gJ2Jhcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGIuY29udGVudCB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2kgYydlc3QgdW4gZ3JhcGhpcXVlLCBvbiBzw6lwYXJlIGxlIHR5cGUgZXQgbCdVUkwgKGZvcm1hdCBcInR5cGU6OnVybFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIudHlwZSA9PT0gJ3N0YXRzJyB8fCBiLnR5cGUgPT09ICd2aXonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBjb250ZW50LnNwbGl0KCc6OicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpelR5cGUgPSBwYXJ0c1swXSB8fCAnYmFyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gcGFydHNbMV0gfHwgJyc7IC8vIEwnVVJMIGR1IENTViBkZXZpZW50IGxlIGNvbnRlbnQvbWVkaWFVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBiLmlkLCAvLyBPbiBnYXJkZSBsJ0lEIHBvdXIgc2F2b2lyIHF1ZSBjZSBibG9jIGV4aXN0ZSBkw6lqw6BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBiLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCwgLy8gVGV4dGUgb3UgVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFVcmw6IGNvbnRlbnQsIC8vIFBvdXIgcHLDqXZpc3VhbGlzZXIgaW1hZ2VzL3NvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXpUeXBlOiB2aXpUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEJsb2NzKGZvcm1hdHRlZEJsb2NzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGNoYXJnZW1lbnQgYXJ0aWNsZVwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgLy8gLS0tIENIQVJHRU1FTlQgREVTIExJQlJBSVJJRVMgKE11c2lxdWUgLyBEYXRhc2V0cykgLS0tXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIDEuIE11c2lxdWVzXHJcbiAgICAgICAgZmV0Y2goJy9hcGkvbXVzaWMvbGlzdCcpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMub2sgPyByZXMuanNvbigpIDogW10pXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHNldE11c2ljTGlicmFyeShkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiRXJyZXVyIG11c2lxdWVcIiwgZXJyKSk7XHJcblxyXG4gICAgICAgIC8vIDIuIERhdGFzZXRzXHJcbiAgICAgICAgZmV0Y2goJy9hcGkvbGlzdC1kYXRhc2V0cycpIFxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBBUEkgRGF0YXNldFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YXNldExpYnJhcnkoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KFtdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW1wb3NzaWJsZSBkZSBjaGFyZ2VyIGxlcyBkYXRhc2V0c1wiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YXNldExpYnJhcnkoW10pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAtLS0gR0VTVElPTiBERVMgQkxPQ1MgLS0tXHJcbiAgICBjb25zdCBhZGRCbG9jID0gKHR5cGUpID0+IHtcclxuICAgICAgICBzZXRCbG9jcyhbLi4uYmxvY3MsIHsgXHJcbiAgICAgICAgICAgIHR5cGUsIFxyXG4gICAgICAgICAgICBjb250ZW50OiAnJywgXHJcbiAgICAgICAgICAgIG1lZGlhVXJsOiAnJywgXHJcbiAgICAgICAgICAgIHZpelR5cGU6ICdiYXInLCBcclxuICAgICAgICAgICAgZmlsZTogbnVsbCwgICBcclxuICAgICAgICAgICAgLy8gUGFzIGQnSUQgaWNpLCBjJ2VzdCB1biBub3V2ZWF1IGJsb2NcclxuICAgICAgICB9XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUJsb2MgPSAoaW5kZXhUb1JlbW92ZSkgPT4ge1xyXG4gICAgICAgIHNldEJsb2NzKGJsb2NzLmZpbHRlcigoXywgaW5kZXgpID0+IGluZGV4ICE9PSBpbmRleFRvUmVtb3ZlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUJsb2MgPSAoaW5kZXgsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0Jsb2NzID0gWy4uLmJsb2NzXTtcclxuICAgICAgICBuZXdCbG9jc1tpbmRleF1bZmllbGRdID0gdmFsdWU7XHJcbiAgICAgICAgc2V0QmxvY3MobmV3QmxvY3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGluZGV4LCBlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUJsb2MoaW5kZXgsICdmaWxlJywgZmlsZSk7XHJcbiAgICAgICAgICAgIGlmIChmaWxlLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJykpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUJsb2MoaW5kZXgsICdtZWRpYVVybCcsIFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyAtLS0gU09VTUlTU0lPTiAoSFlCUklERSA6IFBPU1Qgb3UgUEFUQ0gpIC0tLVxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIPCfk50gTU9ERSDDiURJVElPTiAoUEFUQ0ggSlNPTilcclxuICAgICAgICAgICAgICAgIC8vIEF0dGVudGlvbiA6IEwndXBsb2FkIGRlIG5vdXZlYXV4IGZpY2hpZXJzIGltYWdlIG4nZXN0IHBhcyBnw6lyw6kgaWNpIHBvdXIgc2ltcGxpZmllci5cclxuICAgICAgICAgICAgICAgIC8vIE9uIG1ldCDDoCBqb3VyIHRleHRlcywgdGl0cmVzLCBjaG9peCBtdXNpcXVlL3N0YXRzLlxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFydGljbGVEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnksXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY3M6IGJsb2NzLm1hcCgoYmxvYywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmFsQ29udGVudCA9IGJsb2MuY29udGVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uIHJlY29uc3RydWl0IGxlIGZvcm1hdCBzcMOpY2lhbCBwb3VyIGxlcyBzdGF0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnc3RhdHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaSBsJ3V0aWxpc2F0ZXVyIGEgY2hhbmfDqSBsJ1VSTCB2aWEgbGUgc2VsZWN0LCBjJ2VzdCBkYW5zIGJsb2MubWVkaWFVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQ29udGVudCA9IGAke2Jsb2Mudml6VHlwZX06OiR7YmxvYy5tZWRpYVVybH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJsb2MudHlwZSA9PT0gJ211c2ljJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxDb250ZW50ID0gYmxvYy5tZWRpYVVybDsgLy8gTGUgbm9tIGR1IGZpY2hpZXIgY2hvaXNpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvYy50eXBlID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaSBwYXMgZGUgbm91dmVhdSBmaWNoaWVyLCBvbiBnYXJkZSBsJ2FuY2llbm5lIFVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxDb250ZW50ID0gYmxvYy5tZWRpYVVybDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0cnVjdHVyZSBkJ3VuIGJsb2MgcG91ciBsJ0FQSVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9jUGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGJsb2MudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBmaW5hbENvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpIGxlIGJsb2MgYXZhaXQgZMOpasOgIHVuIElELCBvbiBsJ2Vudm9pZSBwb3VyIGxlIG1ldHRyZSDDoCBqb3VyIChhdSBsaWV1IGRlIGxlIHJlY3LDqWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY1BheWxvYWRbJ0BpZCddID0gYC9hcGkvYmxvY3MvJHtibG9jLmlkfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBibG9jUGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YCwgeyBcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9tZXJnZS1wYXRjaCtqc29uJyAvLyBTdGFuZGFyZCBBUEkgUGxhdGZvcm1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFydGljbGVEYXRhKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJMZSByw6ljaXQgYSDDqXTDqSByw6nDqWNyaXQgYXZlYyBzdWNjw6hzICFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIG1vZGlmaWNhdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDinKggTU9ERSBDUsOJQVRJT04gKFBPU1QgRm9ybURhdGEpXHJcbiAgICAgICAgICAgICAgICAvLyBDJ2VzdCB0b24gY29kZSBkJ29yaWdpbmUgcXVpIGfDqHJlIGJpZW4gbCd1cGxvYWQgaW5pdGlhbFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGl0bGUnLCB0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3N1bW1hcnknLCBzdW1tYXJ5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBibG9jcy5mb3JFYWNoKChibG9jLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW3R5cGVdYCwgYmxvYy50eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVtwb3NpdGlvbl1gLCBpbmRleCArIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoWydoMicsICdwYXJhZ3JhcGgnXS5pbmNsdWRlcyhibG9jLnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW2NvbnRlbnRdYCwgYmxvYy5jb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2MudHlwZSA9PT0gJ2ltYWdlJyAmJiBibG9jLmZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1baW1hZ2VGaWxlXWAsIGJsb2MuZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnc3RhdHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW3ZpelR5cGVdYCwgYmxvYy52aXpUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bY3N2UGF0aF1gLCBibG9jLm1lZGlhVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9jLnR5cGUgPT09ICdtdXNpYycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bbXVzaWNGaWxlTmFtZV1gLCBibG9jLm1lZGlhVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2N1c3RvbS9hcnRpY2xlcy9jcmVhdGUnLCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlZvdHJlIHLDqWNpdCBhIMOpdMOpIGdyYXbDqSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoKTsgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycmV1ciA6IFwiICsgKGVycm9yRGF0YS5tZXNzYWdlIHx8IFwiUHJvYmzDqG1lIHNlcnZldXJcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlLlwiKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIHAtOCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctMnhsIG1heC13LTR4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTggdGV4dC1jZW50ZXIgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICB7aWQgPyAnTW9kaWZpZXIgbGEgQ2hyb25pcXVlJyA6ICdOb3V2ZWxsZSBDaHJvbmlxdWUnfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgdGV4dC13aGl0ZSBwLTQgdGV4dC0yeGwgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZFwiIHBsYWNlaG9sZGVyPVwiVGl0cmUuLi5cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3N1bW1hcnl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VtbWFyeShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCB0ZXh0LXN0b25lLTMwMCBwLTQgaC0yNCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkXCIgcGxhY2Vob2xkZXI9XCJSw6lzdW3DqS4uLlwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAge2Jsb2NzLm1hcCgoYmxvYywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YmxvYy5pZCB8fCBpbmRleH0gY2xhc3NOYW1lPVwiYmctc3RvbmUtODAwLzUwIHAtNiBib3JkZXItbC00IGJvcmRlci12aWtpbmctZ29sZCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVCbG9jKGluZGV4KX0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXJlZC01MDAgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYW5zaXRpb25cIj5TdXBwcmltZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGQgbWItNCB0cmFja2luZy13aWRlc3RcIj5CbG9jIHtpbmRleCArIDF9IDoge2Jsb2MudHlwZX08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogSDIgJiBQYXJhZ3JhcGggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdoMicgJiYgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Jsb2MuY29udGVudH0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnY29udGVudCcsIGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiIHBsYWNlaG9sZGVyPVwiU291cy10aXRyZS4uLlwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAncGFyYWdyYXBoJyAmJiA8dGV4dGFyZWEgdmFsdWU9e2Jsb2MuY29udGVudH0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnY29udGVudCcsIGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXN0b25lLTMwMCBoLTMyXCIgcGxhY2Vob2xkZXI9XCJUZXh0ZS4uLlwiIC8+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEltYWdlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAnaW1hZ2UnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpZCAmJiA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlQ2hhbmdlKGluZGV4LCBlKX0gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDAgdGV4dC1zbVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLm1lZGlhVXJsICYmIDxpbWcgc3JjPXtibG9jLm1lZGlhVXJsfSBhbHQ9XCJQcmV2aWV3XCIgY2xhc3NOYW1lPVwibXQtNCBtYXgtaC00MCBib3JkZXIgYm9yZGVyLXN0b25lLTYwMFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU3RhdHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdzdGF0cycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIG1iLTEgYmxvY2sgdXBwZXJjYXNlIGZvbnQtYm9sZFwiPkRvbm7DqWVzIChDU1YpPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnbWVkaWFVcmwnLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jLm1lZGlhVXJsIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIENob2lzaXIgdW4gamV1IGRlIGRvbm7DqWVzIC0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoZGF0YXNldExpYnJhcnkpICYmIGRhdGFzZXRMaWJyYXJ5Lm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2QuaWR9IHZhbHVlPXtkLnNvdXJjZX0+e2QubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIG1iLTEgYmxvY2sgdXBwZXJjYXNlIGZvbnQtYm9sZFwiPlR5cGUgZGUgR3JhcGhpcXVlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbJ2JhcicsICdsaW5lJywgJ3BpZSddLm1hcCh0eXBlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAndml6VHlwZScsIHR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0yIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSBib3JkZXIgdHJhbnNpdGlvbiAke2Jsb2Mudml6VHlwZSA9PT0gdHlwZSA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGJvcmRlci12aWtpbmctZ29sZCcgOiAnYmctYmxhY2sgdGV4dC1zdG9uZS01MDAgYm9yZGVyLXN0b25lLTcwMCBob3Zlcjp0ZXh0LXdoaXRlJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay8yMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1bMjAwcHhdIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MubWVkaWFVcmwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3N2Q2hhcnQgY3N2VXJsPXtibG9jLm1lZGlhVXJsfSB2aXpUeXBlPXtibG9jLnZpelR5cGUgfHwgJ2Jhcid9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIGl0YWxpY1wiPlPDqWxlY3Rpb25uZXogdW4gZmljaGllci4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE11c2lxdWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdtdXNpYycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICdtZWRpYVVybCcsIGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmxvYy5tZWRpYVVybCB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBDaG9pc2lyIHVuZSBtw6lsb2RpZSAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttdXNpY0xpYnJhcnkgJiYgT2JqZWN0LmVudHJpZXMobXVzaWNMaWJyYXJ5KS5tYXAoKFtmb2xkZXIsIGZpbGVzXSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0Z3JvdXAga2V5PXtmb2xkZXJ9IGxhYmVsPXtmb2xkZXIudG9VcHBlckNhc2UoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShmaWxlcykgJiYgZmlsZXMubWFwKGZpbGUgPT4gPG9wdGlvbiBrZXk9e2ZpbGV9IHZhbHVlPXtgJHtmb2xkZXJ9LyR7ZmlsZX1gfT57ZmlsZX08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIGp1c3RpZnktY2VudGVyIG1iLTEwIHBiLTEwIGJvcmRlci1iIGJvcmRlci1zdG9uZS04MDBcIj5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiVGl0cmUgSDJcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdoMicpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJQYXJhZ3JhcGhlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygncGFyYWdyYXBoJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIkltYWdlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnaW1hZ2UnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiR3JhcGhpcXVlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnc3RhdHMnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiTXVzaXF1ZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ211c2ljJyl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2xvYWRpbmd9IGNsYXNzTmFtZT1cInctZnVsbCBiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHB5LTQgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMTIsMTc1LDU1LDAuNCldIGRpc2FibGVkOm9wYWNpdHktNTBcIj5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKGlkID8gJ1LDqcOpY3JpdHVyZS4uLicgOiAnR3JhdnVyZSBlbiBjb3Vycy4uLicpIDogKGlkID8gJ01ldHRyZSDDoCBqb3VyIGxlIFLDqWNpdCcgOiAnUHVibGllciBsYSBDaHJvbmlxdWUnKX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRvb2xCdG4gPSAoeyBsYWJlbCwgb25DbGljayB9KSA9PiAoXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctc3RvbmUtODAwIHRleHQtc3RvbmUtMzAwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgKyB7bGFiZWx9XHJcbiAgICA8L2J1dHRvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVGb3JtOyIsIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHVzZVBhcmFtcywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbi8vIGltcG9ydCBDc3ZDaGFydCBmcm9tIFwiLi9Dc3ZDaGFydFwiO1xyXG4vLyBpbXBvcnQgVmlraW5nUGxheWVyIGZyb20gXCIuL1Zpa2luZ1BsYXllclwiOyAvLyDwn5GIIEltcG9ydCBkdSBub3V2ZWF1IHBsYXllclxyXG4vLyBpbXBvcnQgQ29tbWVudFNlY3Rpb24gZnJvbSBcIi4vQ29tbWVudFNlY3Rpb25cIjtcclxuLy8gaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSBcIi4vU3RhclJhdGluZ1wiO1xyXG5cclxuLy8gY29uc3QgQXJ0aWNsZVNob3cgPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuLy8gICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4vLyAgICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICAvLyAxLiBWw6lyaWYgVG9rZW4gcG91ciBsJ2ludGVyZmFjZSAoVXNlciBTdGF0ZSlcclxuLy8gICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4vLyAgICAgICAgIGlmICh0b2tlbikge1xyXG4vLyAgICAgICAgICAgICB0cnkgeyBzZXRVc2VyKGp3dERlY29kZSh0b2tlbikpOyB9IGNhdGNoIChlKSB7fVxyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLy8gMi4gUHLDqXBhcmF0aW9uIGRlcyBFbi10w6p0ZXMgKEhFQURFUlMpXHJcbi8vICAgICAgICAgLy8gT24gcHLDqXBhcmUgbGUgYmFkZ2UgcG91ciBlbnRyZXIgZGFucyBsZSBkb25qb25cclxuLy8gICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4vLyAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nXHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgICAgICBpZiAodG9rZW4pIHtcclxuLy8gICAgICAgICAgICAgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAvLyAzLiBGZXRjaCBBcnRpY2xlIEFWRUMgbGVzIGhlYWRlcnNcclxuLy8gICAgICAgICBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHsgaGVhZGVyczogaGVhZGVycyB9KSAvLyDwn5GIIEFKT1VUIElDSVxyXG4vLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiAocmVzLm9rID8gcmVzLmpzb24oKSA6IFByb21pc2UucmVqZWN0KFwiQWNjw6hzIHJlZnVzw6kgb3UgaW50cm91dmFibGVcIikpKVxyXG4vLyAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShkYXRhKTtcclxuLy8gICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgfSwgW2lkXSk7XHJcblxyXG4vLyAgICAgaWYgKGxvYWRpbmcpXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1nb2xkIHAtMTAgYW5pbWF0ZS1wdWxzZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgSW52b2NhdGlvbiBkdSByw6ljaXQuLi5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIGlmICghYXJ0aWNsZSlcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcmVkLTUwMCBwLTEwXCI+XHJcbi8vICAgICAgICAgICAgICAgICBQYXJjaGVtaW4gaW50cm91dmFibGUuXHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcblxyXG4vLyAgICAgLy8g8J+UjiBPTiBDSEVSQ0hFIExBIE1VU0lRVUUgSUNJXHJcbi8vICAgICBjb25zdCBtdXNpY0Jsb2MgPSBhcnRpY2xlLmJsb2NzPy5maW5kKChiKSA9PiBiLnR5cGUgPT09IFwibXVzaWNcIik7XHJcbi8vICAgICAvLyBPbiBuZXR0b2llIGxlIGNoZW1pbiAocGFyZm9pcyBpbCBhIC91cGxvYWRzLy4uLiwgcGFyZm9pcyBub24pXHJcbi8vICAgICBjb25zdCBtdXNpY1NyYyA9IG11c2ljQmxvYyA/IGAvbXVzaXF1ZS8ke211c2ljQmxvYy5jb250ZW50fWAgOiBudWxsO1xyXG5cclxuLy8gICAgIC8vIE9uIHByw6lwYXJlIGxlcyBhdXRyZXMgYmxvY3MgKHNhbnMgbGEgbXVzaXF1ZSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsb25zKVxyXG4vLyAgICAgY29uc3QgY29udGVudEJsb2NzID1cclxuLy8gICAgICAgICBhcnRpY2xlLmJsb2NzXHJcbi8vICAgICAgICAgICAgID8uZmlsdGVyKChiKSA9PiBiLnR5cGUgIT09IFwibXVzaWNcIilcclxuLy8gICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKSB8fCBbXTtcclxuXHJcbi8vICAgICBjb25zdCBoYW5kbGVSYXRlID0gYXN5bmMgKHNjb3JlKSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4vLyAgICAgICAgIGlmICghdG9rZW4pIHJldHVybiBhbGVydChcIklsIGZhdXQgw6p0cmUgY29ubmVjdMOpIHBvdXIgbm90ZXIgIVwiKTtcclxuXHJcbi8vICAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3JhdGluZ3NcIiwge1xyXG4vLyAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuLy8gICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcclxuLy8gICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNjb3JlLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGFydGljbGU6IGAvYXBpL2FydGljbGVzLyR7aWR9YCxcclxuLy8gICAgICAgICAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4vLyAgICAgICAgICAgICAgICAgYWxlcnQoXCJWb3RyZSBub3RlIGEgw6l0w6kgZ3JhdsOpZSAhXCIpO1xyXG4vLyAgICAgICAgICAgICAgICAgLy8gT3B0aW9ubmVsIDogUmVjaGFyZ2VyIGwnYXJ0aWNsZSBwb3VyIHZvaXIgbGEgbm91dmVsbGUgbW95ZW5uZVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTggbWluLWgtc2NyZWVuIGJnLXN0b25lLTkwMCBib3JkZXIteCBib3JkZXItc3RvbmUtODAwIHNoYWRvdy0yeGxcIj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPExpbmtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0bz1cIi9mb3J1bVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC12aWtpbmctZ29sZCBtYi04IGlubGluZS1ibG9jayB0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIlxyXG4vLyAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIOKGkCBSZXRvdXIgYXUgSGFsbFxyXG4vLyAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtNCBtYi02XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0YXJSYXRpbmdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZUlkPXtpZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJhdGluZz17YXJ0aWNsZS5hdmVyYWdlUmF0aW5nfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBvblJhdGU9e2hhbmRsZVJhdGV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCB0ZXh0LXNtXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIE1veWVubmUgOiB7YXJ0aWNsZS5hdmVyYWdlUmF0aW5nIHx8IFwiMFwifS81XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuLy8gICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNiB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGRyb3Atc2hhZG93LWxnXCI+XHJcbi8vICAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuLy8gICAgICAgICAgICAgPC9oMT5cclxuXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtODAwLzUwIHAtOCBib3JkZXItbC00IGJvcmRlci12aWtpbmctZ29sZCBtYi04IGl0YWxpYyB0ZXh0LXN0b25lLTMwMCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBzaGFkb3ctaW5uZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgIHthcnRpY2xlLnN1bW1hcnl9XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuLy8gICAgICAgICAgICAgey8qIPCfjrUgTEUgUExBWUVSIEVTVCBJQ0kgKEp1c3RlIHNvdXMgbGUgcsOpc3Vtw6kpICovfVxyXG4vLyAgICAgICAgICAgICB7bXVzaWNTcmMgJiYgKFxyXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMiBhbmltYXRlLWZhZGUtaW4tdXBcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8VmlraW5nUGxheWVyIHNyYz17bXVzaWNTcmN9IGF1dG9QbGF5PXt0cnVlfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICl9XHJcblxyXG4vLyAgICAgICAgICAgICB7LyogTGUgcmVzdGUgZHUgY29udGVudSAqL31cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEyXCI+XHJcbi8vICAgICAgICAgICAgICAgICB7Y29udGVudEJsb2NzLm1hcCgoYmxvYykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYmxvYy50eXBlKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoMlwiOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBib3JkZXItYiBib3JkZXItc3RvbmUtNzAwIHBiLTIgbXQtOFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5jb250ZW50fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBhcmFncmFwaFwiOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtMzAwIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWxnIHdoaXRlc3BhY2UtcHJlLWxpbmUgdGV4dC1qdXN0aWZ5XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLmNvbnRlbnR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktOFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Jsb2MuY29udGVudH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIklsbHVzdHJhdGlvblwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG1heC1oLVs1MDBweF0gYm9yZGVyLTQgYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMCwwLDAsMC41KV0gcm91bmRlZFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0YXRzXCI6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2aXpcIjpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gYmxvYy5jb250ZW50XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBibG9jLmNvbnRlbnQuc3BsaXQoXCI6OlwiKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW107XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBwLTYgcm91bmRlZC1sZyBteS04XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtYm9sZCB0ZXh0LXNtIHVwcGVyY2FzZSBtYi00IHRyYWNraW5nLXdpZGVzdCB0ZXh0LWNlbnRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+TiiBEb25uw6llcyBkdSBDbGFuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC05NlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENzdkNoYXJ0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3N2VXJsPXtwYXJ0c1sxXX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXpUeXBlPXtwYXJ0c1swXSB8fCBcImJhclwifVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMCBwdC0xMCBib3JkZXItdCBib3JkZXItc3RvbmUtODAwIHRleHQtY2VudGVyIHRleHQtc3RvbmUtNjAwIHRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgR3JhdsOpIHBhciB7YXJ0aWNsZS5hdXRob3I/LnBzZXVkbyB8fCBcIlVuIGluY29ubnVcIn0g4oCie1wiIFwifVxyXG4vLyAgICAgICAgICAgICAgICAge25ldyBEYXRlKGFydGljbGUuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxDb21tZW50U2VjdGlvbiBhcnRpY2xlSWQ9e2lkfSAvPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEFydGljbGVTaG93O1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IENzdkNoYXJ0IGZyb20gXCIuL0NzdkNoYXJ0XCI7XHJcbmltcG9ydCBWaWtpbmdQbGF5ZXIgZnJvbSBcIi4vVmlraW5nUGxheWVyXCI7XHJcbmltcG9ydCBDb21tZW50U2VjdGlvbiBmcm9tIFwiLi9Db21tZW50U2VjdGlvblwiO1xyXG5pbXBvcnQgU3RhclJhdGluZyBmcm9tIFwiLi9TdGFyUmF0aW5nXCI7XHJcblxyXG5jb25zdCBBcnRpY2xlU2hvdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gKHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChcIkVycmV1clwiKSkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbm7DqWVzIHJlw6d1ZXMgOlwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZ29sZCBwLTEwIGFuaW1hdGUtcHVsc2VcIj5cclxuICAgICAgICAgICAgICAgIEludm9jYXRpb24gZHUgcsOpY2l0Li4uXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICBpZiAoIWFydGljbGUpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXJlZC01MDAgcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgUGFyY2hlbWluIGludHJvdXZhYmxlLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgIC8vIC0tLSBMT0dJUVVFIEQnRVhUUkFDVElPTiAtLS1cclxuICAgIGxldCBjdXN0b21TdHlsZXMgPSB7fTtcclxuICAgIGNvbnN0IHJhd0NvbmZpZyA9IGFydGljbGUuZGVzaWduQ29uZmlnO1xyXG5cclxuICAgIGlmIChyYXdDb25maWcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjdXN0b21TdHlsZXMgPVxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHJhd0NvbmZpZyA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gSlNPTi5wYXJzZShyYXdDb25maWcpXHJcbiAgICAgICAgICAgICAgICAgICAgOiByYXdDb25maWc7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGRlIGTDqWNvZGFnZSBkZXMgc3R5bGVzXCIsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gRMOJRklOSVRJT04gREVTIENPVUxFVVJTIC0tLVxyXG4gICAgLy8gT24gdXRpbGlzZSBsZXMgdmFsZXVycyBkZSBsYSBCREQsIHNpbm9uIGJsYW5jIHBhciBkw6lmYXV0IChzZXJhIGfDqXLDqSBwYXIgbGEgY2xhc3NlIENTUylcclxuICAgIGNvbnN0IGZpbmFsVGl0bGVDb2xvciA9IGN1c3RvbVN0eWxlcy50aXRsZUNvbG9yIHx8IFwiI2ZmZmZmZlwiO1xyXG4gICAgY29uc3QgZmluYWxDb250ZW50QmcgPSBjdXN0b21TdHlsZXMuY29udGVudEJnIHx8IFwicmdiYSg0MSwgMzcsIDM2LCAwLjUpXCI7XHJcblxyXG4gICAgY29uc3QgbXVzaWNCbG9jID0gYXJ0aWNsZS5ibG9jcz8uZmluZCgoYikgPT4gYi50eXBlID09PSBcIm11c2ljXCIpO1xyXG4gICAgY29uc3QgbXVzaWNTcmMgPSBtdXNpY0Jsb2MgPyBgL211c2lxdWUvJHttdXNpY0Jsb2MuY29udGVudH1gIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBjb250ZW50QmxvY3MgPSBhcnRpY2xlLmJsb2NzXHJcbiAgICAgICAgPyBbLi4uYXJ0aWNsZS5ibG9jc11cclxuICAgICAgICAgICAgICAuZmlsdGVyKChiKSA9PiBiLnR5cGUgIT09IFwibXVzaWNcIilcclxuICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pXHJcbiAgICAgICAgOiBbXTtcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVSYXRlID0gYXN5bmMgKHNjb3JlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGlmICghdG9rZW4pIHJldHVybiBhbGVydChcIklsIGZhdXQgw6p0cmUgY29ubmVjdMOpIHBvdXIgbm90ZXIgIVwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3JhdGluZ3NcIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGU6IGAvYXBpL2FydGljbGVzLyR7aWR9YCxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJWb3RyZSBub3RlIGEgw6l0w6kgZ3JhdsOpZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gT3B0aW9ubmVsIDogUmVjaGFyZ2VyIGwnYXJ0aWNsZSBwb3VyIHZvaXIgbGEgbm91dmVsbGUgbW95ZW5uZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTggbWluLWgtc2NyZWVuIGJnLXN0b25lLTkwMCBib3JkZXIteCBib3JkZXItc3RvbmUtODAwIHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9mb3J1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC12aWtpbmctZ29sZCBtYi04IGlubGluZS1ibG9jayB0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOKGkCBSZXRvdXIgYXUgSGFsbFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtNCBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXJSYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZUlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJhdGluZz17YXJ0aWNsZS5hdmVyYWdlUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJhdGU9e2hhbmRsZVJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1veWVubmUgOiB7YXJ0aWNsZS5hdmVyYWdlUmF0aW5nIHx8IFwiMFwifS81XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFRJVFJFIDogVXRpbGlzYXRpb24gZGUgbGEgdmFyaWFibGUgQ1NTIGxvY2FsZSBwb3VyIHBhc3NlciBvdXRyZSBsZSBoMSBnbG9iYWwgZHUgQXBwLmNzcyAqL31cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBcIi0tYXJ0aWNsZS10aXRsZS1jb2xvclwiOiBmaW5hbFRpdGxlQ29sb3IgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtZHluYW1pYy10aXRsZSB0ZXh0LTV4bCBmb250LWRyYWdvbiBtYi02IHRleHQtY2VudGVyIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZHJvcC1zaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICB7LyogUsOJU1VNw4kgOiBGb25kIGR5bmFtaXF1ZSBhcHBsaXF1w6kgZW4gc3R5bGUgaW5saW5lICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGZpbmFsQ29udGVudEJnIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTggYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWdvbGQgbWItOCBpdGFsaWMgdGV4dC1zdG9uZS0zMDAgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgc2hhZG93LWlubmVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlLnN1bW1hcnl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge211c2ljU3JjICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VmlraW5nUGxheWVyIHNyYz17bXVzaWNTcmN9IGF1dG9QbGF5PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTJcIj5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50QmxvY3MubWFwKChibG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChibG9jLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImgyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJvcmRlci1iIGJvcmRlci1zdG9uZS03MDAgcGItMiBtdC04XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwYXJhZ3JhcGhcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTMwMCBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1sZyB3aGl0ZXNwYWNlLXByZS1saW5lIHRleHQtanVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Jsb2MuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIklsbHVzdHJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG1heC1oLVs1MDBweF0gYm9yZGVyLTQgYm9yZGVyLXN0b25lLTgwMCBzaGFkb3cteGwgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhdHNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZpelwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBibG9jLmNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJsb2MuY29udGVudC5zcGxpdChcIjo6XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrLzQwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtNiByb3VuZGVkLWxnIG15LTggc2hhZG93LWlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtYm9sZCB0ZXh0LXNtIHVwcGVyY2FzZSBtYi00IHRyYWNraW5nLXdpZGVzdCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+TiiBEb25uw6llcyBkdSBDbGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC05NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENzdkNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3N2VXJsPXtwYXJ0c1sxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXpUeXBlPXtwYXJ0c1swXSB8fCBcImJhclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMCBwdC0xMCBib3JkZXItdCBib3JkZXItc3RvbmUtODAwIHRleHQtY2VudGVyIHRleHQtc3RvbmUtNTAwIHRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgR3JhdsOpIHBhciB7YXJ0aWNsZS5hdXRob3I/LnBzZXVkbyB8fCBcIlVuIMOpY2xhaXJldXJcIn0g4oCie1wiIFwifVxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKGFydGljbGUuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8Q29tbWVudFNlY3Rpb24gYXJ0aWNsZUlkPXtpZH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlU2hvdztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFNvdXMtY29tcG9zYW50IHBvdXIgVU4gY29tbWVudGFpcmUgKHLDqWN1cnNpZilcclxuY29uc3QgQ29tbWVudEl0ZW0gPSAoeyBjb21tZW50LCBvblZvdGUsIG9uUmVwbHksIGFydGljbGVJZCwgY2FuSW50ZXJhY3QgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dSZXBseUZvcm0sIHNldFNob3dSZXBseUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlcGx5Q29udGVudCwgc2V0UmVwbHlDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlcGx5U3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb25SZXBseShyZXBseUNvbnRlbnQsIGNvbW1lbnQuaWQpOyAvLyBPbiByw6lwb25kIMOgIENFIGNvbW1lbnRhaXJlIChwYXJlbnQpXHJcbiAgICAgICAgc2V0UmVwbHlDb250ZW50KFwiXCIpO1xyXG4gICAgICAgIHNldFNob3dSZXBseUZvcm0oZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWwtMiBib3JkZXItc3RvbmUtNzAwIHBsLTQgbXQtNCBtYi0yXCI+XHJcbiAgICAgICAgICAgIHsvKiBFTi1Uw4pURSA6IEF1dGV1ciArIFNjb3JlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgdGV4dC1zdG9uZS00MDAgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdmlraW5nLWdvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5hdXRob3I/LnBzZXVkbyB8fCBcIlZpa2luZyBBbm9ueW1lXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7igKIge2NvbW1lbnQuc2NvcmV9IHBvaW50czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIOKAoiB7bmV3IERhdGUoY29tbWVudC5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDT05URU5VICovfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTIwMCB0ZXh0LXNtIG1iLTJcIj57Y29tbWVudC5jb250ZW50fTwvcD5cclxuXHJcbiAgICAgICAgICAgIHsvKiDwn5SSIEFDVElPTlMgOiBWb3RlICYgUsOpcG9uZHJlIChWaXNpYmxlcyBzZXVsZW1lbnQgc2kgY29ubmVjdMOpKSAqL31cclxuICAgICAgICAgICAge2NhbkludGVyYWN0ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc3RvbmUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZShjb21tZW50LmlkLCBcInVwXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmVlbi01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDilrIgVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZShjb21tZW50LmlkLCBcImRvd25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDilrwgRG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dSZXBseUZvcm0oIXNob3dSZXBseUZvcm0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFLDqXBvbmRyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogRk9STVVMQUlSRSBERSBSw4lQT05TRSAoQ2FjaMOpIHBhciBkw6lmYXV0KSAqL31cclxuICAgICAgICAgICAge3Nob3dSZXBseUZvcm0gJiYgY2FuSW50ZXJhY3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVJlcGx5U3VibWl0fSBjbGFzc05hbWU9XCJtdC0yIGZsZXggZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVwbHlDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlcGx5Q29udGVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMiB0ZXh0LXdoaXRlIHRleHQteHMgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSByw6lwb25zZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zdG9uZS03MDAgdGV4dC13aGl0ZSBweC0zIHRleHQteHMgdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudm95ZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBSw4lDVVJTSVZJVMOJIDogQWZmaWNoZXIgbGVzIGVuZmFudHMgKHLDqXBvbnNlcykgKi99XHJcbiAgICAgICAgICAgIHtjb21tZW50LnJlcGxpZXMgJiYgY29tbWVudC5yZXBsaWVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQucmVwbGllcy5tYXAoKHJlcGx5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZXBseS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e3JlcGx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Wb3RlPXtvblZvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlcGx5PXtvblJlcGx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZUlkPXthcnRpY2xlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5JbnRlcmFjdD17Y2FuSW50ZXJhY3R9IC8vIPCfkYggT24gdHJhbnNtZXQgbGEgcGVybWlzc2lvbiBhdXggZW5mYW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gQ29tcG9zYW50IFByaW5jaXBhbFxyXG5jb25zdCBDb21tZW50U2VjdGlvbiA9ICh7IGFydGljbGVJZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuZXdDb21tZW50LCBzZXROZXdDb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAvLyDwn5SSIMOJdGF0IHBvdXIgc2F2b2lyIHNpIGwndXRpbGlzYXRldXIgZXN0IGNvbm5lY3TDqVxyXG4gICAgY29uc3QgW2NhbkludGVyYWN0LCBzZXRDYW5JbnRlcmFjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWNhdGlvbiBkZSBsYSBjb25uZXhpb24gYXUgY2hhcmdlbWVudFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgc2V0Q2FuSW50ZXJhY3QoISF0b2tlbik7IC8vIFNpIHRva2VuIGV4aXN0ZSA9PiB0cnVlLCBzaW5vbiA9PiBmYWxzZVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIENoYXJnZXIgbGVzIGNvbW1lbnRhaXJlc1xyXG4gICAgY29uc3QgZmV0Y2hDb21tZW50cyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaChgL2FwaS9jb21tZW50cz9hcnRpY2xlPSR7YXJ0aWNsZUlkfSZwYXJlbnRbZXhpc3RzXT1mYWxzZWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAxLiBPbiByw6ljdXDDqHJlIGxhIGxpc3RlIHBldSBpbXBvcnRlIGxlIG5vbSBkZSBsYSBjbMOpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50c0RhdGEgPSBkYXRhW1wiaHlkcmE6bWVtYmVyXCJdIHx8IGRhdGFbXCJtZW1iZXJcIl0gfHwgW107XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIDIuIE9uIGZpbHRyZSBsZXMgcmFjaW5lcyAoY2V1eCBxdWkgbidvbnQgcGFzIGRlIHBhcmVudClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvb3RDb21tZW50cyA9IGNvbW1lbnRzRGF0YS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKGMpID0+ICFjLnBhcmVudCB8fCBjLnBhcmVudCA9PT0gdW5kZWZpbmVkIHx8IGMucGFyZW50ID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDMuIE9uIG1ldCDDoCBqb3VyIGwnw6l0YXRcclxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzKHJvb3RDb21tZW50cyk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICB9LCBbYXJ0aWNsZUlkXSk7XHJcblxyXG4gICAgLy8gUG9zdGVyIHVuIGNvbW1lbnRhaXJlXHJcbiAgICBjb25zdCBoYW5kbGVQb3N0ID0gYXN5bmMgKGNvbnRlbnQsIHBhcmVudElkID0gbnVsbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICBhbGVydChcIlZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpIHBvdXIgZ3JhdmVyIHVuIG1lc3NhZ2UgIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgYXJ0aWNsZTogYC9hcGkvYXJ0aWNsZXMvJHthcnRpY2xlSWR9YCxcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnRJZCA/IGAvYXBpL2NvbW1lbnRzLyR7cGFyZW50SWR9YCA6IG51bGwsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NvbW1lbnRzXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaENvbW1lbnRzKCk7IC8vIFJlY2hhcmdlciBsYSBsaXN0ZVxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRJZCkgc2V0TmV3Q29tbWVudChcIlwiKTsgLy8gVmlkZXIgbGUgY2hhbXAgcHJpbmNpcGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gVm90ZXJcclxuICAgIGNvbnN0IGhhbmRsZVZvdGUgPSBhc3luYyAoY29tbWVudElkLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgaWYgKCF0b2tlbikgcmV0dXJuIGFsZXJ0KFwiU2V1bHMgbGVzIGd1ZXJyaWVycyBjb25uZWN0w6lzIHBldXZlbnQgdm90ZXIgIVwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvY3VzdG9tL2NvbW1lbnRzLyR7Y29tbWVudElkfS92b3RlLyR7ZGlyZWN0aW9ufWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZmV0Y2hDb21tZW50cygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgcHQtOCBib3JkZXItdCBib3JkZXItc3RvbmUtODAwXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICBDb25zZWlsIGRlIEd1ZXJyZSAoe2NvbW1lbnRzLmxlbmd0aH0gYXZpcylcclxuICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgIHsvKiDwn5SSIEZvcm11bGFpcmUgUHJpbmNpcGFsIDogQWZmaWNow6kgc2V1bGVtZW50IHNpIGNvbm5lY3TDqSAqL31cclxuICAgICAgICAgICAge2NhbkludGVyYWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IGZsZXggZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCB0ZXh0LXN0b25lLTMwMCBwLTMgaC0yMCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWlzc2V6IHZvdHJlIG1hcnF1ZSBzdXIgY2UgcsOpY2l0Li4uXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUG9zdChuZXdDb21tZW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJvbGQgcHgtNiB1cHBlcmNhc2UgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHcmF2ZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IHAtNCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBiZy1zdG9uZS05MDAvNTAgdGV4dC1jZW50ZXIgaXRhbGljIHRleHQtc3RvbmUtNTAwIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWpvaWduZXogbGUgY2xhbiAoY29ubmVjdGV6LXZvdXMpIHBvdXIgcGFydGljaXBlciBhdSBjb25zZWlsIGRlIGd1ZXJyZSBldCB2b3Rlci5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIExpc3RlIGRlcyBjb21tZW50YWlyZXMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICB7Y29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Wb3RlPXtoYW5kbGVWb3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlcGx5PXtoYW5kbGVQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlSWQ9e2FydGljbGVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuSW50ZXJhY3Q9e2NhbkludGVyYWN0fSAvLyDwn5GIIE9uIHBhc3NlIGwnaW5mbyBcImNvbm5lY3TDqVwiIGF1eCBpdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFNlY3Rpb247IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSc7XHJcbmltcG9ydCB7IFxyXG4gIEJhckNoYXJ0LCBCYXIsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgTGVnZW5kLCBSZXNwb25zaXZlQ29udGFpbmVyLFxyXG4gIExpbmVDaGFydCwgTGluZSwgUGllQ2hhcnQsIFBpZSwgQ2VsbCBcclxufSBmcm9tICdyZWNoYXJ0cyc7XHJcblxyXG5jb25zdCBDT0xPUlMgPSBbJyNkNGFmMzcnLCAnI2I5MWMxYycsICcjMWMxOTE3JywgJyM1NzUzNGUnLCAnI2E4YTI5ZSddOyAvLyBDb3VsZXVycyBWaWtpbmcgKE9yLCBSb3VnZSwgTm9pci4uLilcclxuXHJcbmNvbnN0IENzdkNoYXJ0ID0gKHsgY3N2VXJsLCB2aXpUeXBlID0gJ2JhcicgfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjc3ZVcmwpIHJldHVybjtcclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAvLyAxLiBPbiB2YSBjaGVyY2hlciBsZSBmaWNoaWVyIENTViB2aWEgc29uIFVSTFxyXG4gICAgICAgIGZldGNoKGNzdlVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiSW1wb3NzaWJsZSBkZSBsaXJlIGxlIHBhcmNoZW1pbiBkZSBkb25uw6llc1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGNzdlRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gMi4gT24gbGUgdHJhbnNmb3JtZSBlbiBKU09OIHV0aWxpc2FibGVcclxuICAgICAgICAgICAgICAgIFBhcGEucGFyc2UoY3N2VGV4dCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSwgLy8gTGEgcHJlbWnDqHJlIGxpZ25lIGNvbnRpZW50IGxlcyB0aXRyZXNcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljVHlwaW5nOiB0cnVlLCAvLyBDb252ZXJ0aXQgbGVzIFwiMTBcIiBlbiBub21icmVzIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgc2tpcEVtcHR5TGluZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzdWx0cy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihcIkxlIGZpY2hpZXIgZXN0IGlsbGlzaWJsZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtjc3ZVcmxdKTtcclxuXHJcbiAgICBpZiAoIWNzdlVybCkgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGl0YWxpYyB0ZXh0LXhzXCI+QXVjdW5lIGRvbm7DqWUgc8OpbGVjdGlvbm7DqWUuPC9wPjtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBhbmltYXRlLXB1bHNlIHRleHQteHNcIj5Ew6ljaGlmZnJhZ2UgZGVzIHJ1bmVzLi4uPC9wPjtcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXhzXCI+RXJyZXVyIDoge2Vycm9yfTwvcD47XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzXCI+TGUgZmljaGllciBlc3QgdmlkZS48L3A+O1xyXG5cclxuICAgIC8vIE9uIGRldmluZSBsZXMgY2zDqXMgKFggPSBwcmVtacOocmUgY29sb25uZSwgWSA9IGRldXhpw6htZSBjb2xvbm5lKVxyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGFbMF0pO1xyXG4gICAgY29uc3QgeEtleSA9IGtleXNbMF07IC8vIEV4OiBcIkFubsOpZVwiIG91IFwiRHJhZ29uXCJcclxuICAgIGNvbnN0IHlLZXkgPSBrZXlzWzFdOyAvLyBFeDogXCJQb3B1bGF0aW9uXCIgb3UgXCJWaXRlc3NlXCJcclxuXHJcbiAgICBjb25zdCByZW5kZXJDaGFydCA9ICgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHZpelR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGluZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17ZGF0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiM0NDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT17eEtleX0gc3Ryb2tlPVwiI2Q0YWYzN1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxZQXhpcyBzdHJva2U9XCIjZDRhZjM3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxYzE5MTcnLCBib3JkZXJDb2xvcjogJyNkNGFmMzcnLCBjb2xvcjogJyNmZmYnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWdlbmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT17eUtleX0gc3Ryb2tlPVwiI2Q0YWYzN1wiIHN0cm9rZVdpZHRoPXszfSBkb3Q9e3sgcjogNiB9fSBhY3RpdmVEb3Q9e3sgcjogOCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluZUNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSAncGllJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBpZUNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGllXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3g9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3k9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxMaW5lPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsoeyBuYW1lLCBwZXJjZW50IH0pID0+IGAke25hbWV9ICR7KHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMCl9JWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlclJhZGl1cz17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzg4ODRkOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PXt5S2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUtleT17eEtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChlbnRyeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCBrZXk9e2BjZWxsLSR7aW5kZXh9YH0gZmlsbD17Q09MT1JTW2luZGV4ICUgQ09MT1JTLmxlbmd0aF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QaWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnRTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWMxOTE3JywgYm9yZGVyQ29sb3I6ICcjZDRhZjM3JywgY29sb3I6ICcjZmZmJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGllQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlICdiYXInOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8QmFyQ2hhcnQgZGF0YT17ZGF0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiM0NDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT17eEtleX0gc3Ryb2tlPVwiI2Q0YWYzN1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxZQXhpcyBzdHJva2U9XCIjZDRhZjM3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY3Vyc29yPXt7ZmlsbDogJyMzMzMnfX0gY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxYzE5MTcnLCBib3JkZXJDb2xvcjogJyNkNGFmMzcnLCBjb2xvcjogJyNmZmYnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWdlbmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhciBkYXRhS2V5PXt5S2V5fSBmaWxsPVwiI2Q0YWYzN1wiIHJhZGl1cz17WzQsIDQsIDAsIDBdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgdy1mdWxsIG10LTQgYmctYmxhY2svNDAgcC00IGJvcmRlciBib3JkZXItc3RvbmUtODAwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckNoYXJ0KCl9XHJcbiAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDc3ZDaGFydDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSc7XHJcblxyXG5jb25zdCBEYXRhUHJvdmlkZXJTcGFjZSA9ICh7IGRhdGFzZXRzIH0pID0+IHtcclxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2hlYWRlcnMsIHNldEhlYWRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvbHVtbk1hcHBpbmcsIHNldENvbHVtbk1hcHBpbmddID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2RhdGFzZXROYW1lLCBzZXREYXRhc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkRmlsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZXRGaWxlKHNlbGVjdGVkRmlsZSk7XHJcbiAgICAgICAgc2V0RGF0YXNldE5hbWUoc2VsZWN0ZWRGaWxlLm5hbWUucmVwbGFjZSgnLmNzdicsICcnKSk7XHJcblxyXG4gICAgICAgIFBhcGEucGFyc2Uoc2VsZWN0ZWRGaWxlLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgc2tpcEVtcHR5TGluZXM6IHRydWUsXHJcbiAgICAgICAgICAgIHByZXZpZXc6IDUsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29scyA9IE9iamVjdC5rZXlzKHJlc3VsdHMuZGF0YVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVycyhjb2xzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcmV2aWV3KHJlc3VsdHMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbE1hcHBpbmcgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xzLmZvckVhY2goaCA9PiBpbml0aWFsTWFwcGluZ1toXSA9ICdjYXRlZ29yaWNhbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbHVtbk1hcHBpbmcoaW5pdGlhbE1hcHBpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVR5cGUgPSAoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgc2V0Q29sdW1uTWFwcGluZyhwcmV2ID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgIFtoZWFkZXJdOiBwcmV2W2hlYWRlcl0gPT09ICdjYXRlZ29yaWNhbCcgPyAnbnVtZXJpY2FsJyA6ICdjYXRlZ29yaWNhbCdcclxuICAgICAgICB9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgICAgICAvLyBQcsOpcGFyYXRpb24gZHUgcGF5bG9hZCBjb25mb3JtZSDDoCBBUEkgUGxhdGZvcm1cclxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBkYXRhc2V0TmFtZSxcclxuICAgICAgICAgICAgc291cmNlOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5NYXBwaW5nLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcm93Q291bnQ6IHByZXZpZXcubGVuZ3RoIC8vIEluZm9ybWF0aW9uIHV0aWxlIHBvdXIgdG9uIGFmZmljaGFnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9kYXRhc2V0cycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBjcnVjaWFsIGljaSBwb3VyIMOpdml0ZXIgbCdlcnJldXIgNDE1XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGFyY2hlbWluIGRlIGRvbm7DqWVzIGVucmVnaXN0csOpIGRhbnMgbGEgYmlibGlvdGjDqHF1ZSBkJ09kaW4gIVwiKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUsOpcG9uc2UgZHUgc2VydmV1ciA6XCIsIGVycm9yRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycmV1ciA6IExlIFNjcmliZSByZWZ1c2UgbGUgZm9ybWF0IGR1IGZpY2hpZXIuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciByw6lzZWF1XCIsIGVycm9yKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGFuaW1hdGUtZmFkZUluXCI+XHJcbiAgICAgICAgICAgIHsvKiBGb3JtdWxhaXJlIGQnaW1wb3J0YXRpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgcC02IGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQteGwgbWItNCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+Tm91dmVsbGUgQXJjaGl2ZSBkZSBEb25uw6llczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc3RvbmUtNTAwIHRleHQtWzEwcHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIG1iLTJcIj5GaWNoaWVyIENTViB1bmlxdWVtZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIuY3N2XCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgdGV4dC1zbSB0ZXh0LXN0b25lLTQwMCBmaWxlOm1yLTQgZmlsZTpweS0yIGZpbGU6cHgtNCBmaWxlOnJvdW5kZWQgZmlsZTpib3JkZXItMCBmaWxlOnRleHQteHMgZmlsZTpmb250LWJsYWNrIGZpbGU6dXBwZXJjYXNlIGZpbGU6YmctdmlraW5nLWdvbGQgZmlsZTp0ZXh0LWJsYWNrIGhvdmVyOmZpbGU6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1hdXRvIHB0LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXBsb2FkfSBkaXNhYmxlZD17aXNVcGxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1maXJlIHRleHQtd2hpdGUgcHktMyBweC04IGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRleHQteHMgc2hhZG93LWxnIGhvdmVyOnNjYWxlLTEwNSBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6b3BhY2l0eS01MCBkaXNhYmxlZDpncmF5c2NhbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1VwbG9hZGluZyA/ICdHcmF2dXJlLi4uJyA6ICdTY2VsbGVyIGxcXCdBcmNoaXZlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIEFwZXLDp3UgVGVjaG5pcXVlICovfVxyXG4gICAgICAgICAgICB7cHJldmlldy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwLzgwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMTAgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzQwIHAtMyBib3JkZXItYiBib3JkZXItd2hpdGUvNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LWJsYWNrIHVwcGVyY2FzZSB0ZXh0LXZpa2luZy1nb2xkLzUwXCI+QW5hbHlzZSBkZSBsYSBzdHJ1Y3R1cmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxlZnQgYm9yZGVyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWJsYWNrLzYwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzLm1hcChoID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2h9IGNsYXNzTmFtZT1cInAtNCBib3JkZXItciBib3JkZXItd2hpdGUvNSBtaW4tdy1bMTUwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdGV4dC14cyBmb250LWJvbGQgbWItMyB0cnVuY2F0ZVwiPntofTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVR5cGUoaCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtWzlweF0gcHgtMyBweS0xIHJvdW5kZWQtZnVsbCBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyIHRyYW5zaXRpb24tY29sb3JzICR7Y29sdW1uTWFwcGluZ1toXSA9PT0gJ251bWVyaWNhbCcgPyAnYmctYmx1ZS02MDAvMjAgdGV4dC1ibHVlLTQwMCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzMwJyA6ICdiZy1lbWVyYWxkLTYwMC8yMCB0ZXh0LWVtZXJhbGQtNDAwIGJvcmRlciBib3JkZXItZW1lcmFsZC01MDAvMzAnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uTWFwcGluZ1toXSA9PT0gJ251bWVyaWNhbCcgPyAn8J+UoiBOdW3DqXJpcXVlJyA6ICfwn5SkIENhdMOpZ29yaWVsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmV2aWV3Lm1hcCgocm93LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci13aGl0ZS81IGhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzLm1hcChoID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtofSBjbGFzc05hbWU9XCJwLTQgdGV4dC1bMTFweF0gdGV4dC1zdG9uZS00MDAgYm9yZGVyLXIgYm9yZGVyLXdoaXRlLzUgaXRhbGljXCI+e3Jvd1toXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogQXJjaGl2ZXMgZXhpc3RhbnRlcyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQvNDAgZm9udC1kcmFnb24gdGV4dC1zbSBtYi02IHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgYm9yZGVyLWIgYm9yZGVyLXZpa2luZy1nb2xkLzIwIHBiLTJcIj5SZWdpc3RyZXMgZMOpasOgIHByw6lzZW50czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YXNldHM/Lmxlbmd0aCA+IDAgPyBkYXRhc2V0cy5tYXAoZHMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZHMuaWR9IGNsYXNzTmFtZT1cInAtNCBiZy1ibGFjay8yMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQvNDAgdHJhbnNpdGlvbi1hbGwgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcGFyY2htZW50IGZvbnQtYm9sZCB0ZXh0LXNtIGdyb3VwLWhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1jb2xvcnNcIj57ZHMubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtc3RvbmUtNjAwIHVwcGVyY2FzZSBmb250LWJvbGQgaXRhbGljXCI+e2RzLnNvdXJjZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSBiZy1zdG9uZS04MDAgcHgtMiBweS0wLjUgcm91bmRlZCB0ZXh0LXN0b25lLTQwMFwiPntkcy5yb3dzQ291bnR9IGxpZ25lczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi1mdWxsIHB5LTEwIHRleHQtY2VudGVyIGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLXN0b25lLTgwMCB0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWN1bmUgZG9ubsOpZSBuJ2Egw6l0w6kgZ3JhdsOpZSBwb3VyIGxlIG1vbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXJTcGFjZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tICdqd3QtZGVjb2RlJztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgdXNlciA9IG51bGw7XHJcblxyXG4gICAgLy8gT24gZMOpY29kZSBsZSB0b2tlbiBwb3VyIGNvbm5hw650cmUgbCd1dGlsaXNhdGV1ciBldCBzZXMgcsO0bGVzXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB1c2VyID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb2tlbiBpbnZhbGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIG5hdmlnYXRlKCcvbG9naW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gVsOpcmlmaWNhdGlvbiBkZXMgZHJvaXRzIHBvdXIgbGUgRGFzaGJvYXJkXHJcbiAgICBjb25zdCBjYW5TZWVEYXNoYm9hcmQgPSB1c2VyPy5yb2xlcz8uaW5jbHVkZXMoJ1JPTEVfRURJVEVVUicpIHx8IHVzZXI/LnJvbGVzPy5pbmNsdWRlcygnUk9MRV9BRE1JTicpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBib3JkZXItYi0yIGJvcmRlci12aWtpbmctZ29sZC81MCBwLTQgc3RpY2t5IHRvcC0wIHotNTAgc2hhZG93LWxnIGJhY2tkcm9wLWJsdXItbWQgYmctb3BhY2l0eS05NVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBkcm9wLXNoYWRvdy1tZCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB1cHBlcmNhc2VcIj5SaWRlcnMgb2YgQmVyazwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiB0ZXh0LWxnIGZvbnQtZHJhZ29uIHRyYWNraW5nLXdpZGUgdGV4dC12aWtpbmctbGlnaHQgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+QWNjdWVpbDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPkZvcnVtPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIExJRU4gREFTSEJPQVJEIDogVmlzaWJsZSB1bmlxdWVtZW50IHBvdXIgw4lkaXRldXIvQWRtaW4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5TZWVEYXNoYm9hcmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCIgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzUwIHB4LTIgcHktMC41IGhvdmVyOmJnLXZpa2luZy1nb2xkIGhvdmVyOnRleHQtYmxhY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnNlaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgYm9yZGVyLWwgYm9yZGVyLXN0b25lLTcwMCBwbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshdG9rZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZXhpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIHB4LTQgcHktMS41IHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVqb2luZHJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIGZvbnQtYmxhY2sgaXRhbGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyPy5wc2V1ZG8gfHwgXCJHdWVycmllclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtdmlraW5nLWZpcmUgdXBwZXJjYXNlIGZvbnQtYmxhY2sgYm9yZGVyIGJvcmRlci12aWtpbmctZmlyZS8zMCBweC0yIHB5LTEgaG92ZXI6YmctdmlraW5nLWZpcmUgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1aXR0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUsIHVzZVRocmVlIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCB7IHVzZUdMVEYsIHVzZUFuaW1hdGlvbnMsIENlbnRlciwgSHRtbCwgdXNlVGV4dHVyZSwgU3RhcnMgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XG5cbmNvbnN0IE1PREVMX1BBVEggPSAnL21vZGVscy9uaWdodF9mdXJ5LmdsYic7XG5jb25zdCBURVhUVVJFX1BBVEggPSAnL3RleHR1cmVzL25pZ2h0X2Z1cnlfc2tpbi53ZWJwJztcbmNvbnN0IEFOSU1BVElPTl9OQU1FID0gJ05pZ2h0RnVyeV9hcm1hdHVyZUFjdGlvbic7XG5cbmZ1bmN0aW9uIERyYWdvbk1vZGVsKHsgdml0ZXNzZVJvdGF0aW9uLCB2aXRlc3NlQW5pbWF0aW9uLCBmYWN0ZXVyVGFpbGxlLCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgc2NlbmUsIGFuaW1hdGlvbnMgfSA9IHVzZUdMVEYoTU9ERUxfUEFUSCk7XG4gIGNvbnN0IHRleHR1cmUgPSB1c2VUZXh0dXJlKFRFWFRVUkVfUEFUSCk7XG4gIGNvbnN0IHsgdmlld3BvcnQgfSA9IHVzZVRocmVlKCk7IFxuICBcbiAgLy8gQ2FsY3VsIGRlIGJhc2UgcmVzcG9uc2l2ZVxuICBjb25zdCBiYXNlU2NhbGUgPSB2aWV3cG9ydC53aWR0aCA8IDUgPyAwLjUgOiAwLjg7IFxuICAvLyDwn5OPIENBTENVTCBGSU5BTCA6IFRhaWxsZSBkZSBiYXNlIHggTGUgY3Vyc2V1ciBkZSBsJ3V0aWxpc2F0ZXVyXG4gIGNvbnN0IGZpbmFsU2NhbGUgPSBiYXNlU2NhbGUgKiBmYWN0ZXVyVGFpbGxlO1xuXG4gIHRleHR1cmUuZmxpcFkgPSBmYWxzZTtcbiAgdGV4dHVyZS5jb2xvclNwYWNlID0gJ3NyZ2InO1xuXG4gIGNvbnN0IGdyb3VwID0gdXNlUmVmKCk7XG4gIGNvbnN0IHsgYWN0aW9ucyB9ID0gdXNlQW5pbWF0aW9ucyhhbmltYXRpb25zLCBncm91cCk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzY2VuZS50cmF2ZXJzZSgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc01lc2gpIHtcbiAgICAgICAgY2hpbGQubWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcbiAgICAgICAgY2hpbGQubWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbc2NlbmUsIHRleHR1cmVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3Rpb25zICYmIGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdO1xuICAgICAgICBhY3Rpb24ucmVzZXQoKS5mYWRlSW4oMC41KS5wbGF5KCk7XG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9XG4gIH0sIFthY3Rpb25zXSk7XG5cbiAgLy8gTWlzZSDDoCBqb3VyIHZpdGVzc2UgYW5pbWF0aW9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGlvbnMgJiYgYWN0aW9uc1tBTklNQVRJT05fTkFNRV0pIHtcbiAgICAgICAgYWN0aW9uc1tBTklNQVRJT05fTkFNRV0udGltZVNjYWxlID0gdml0ZXNzZUFuaW1hdGlvbjtcbiAgICB9XG4gIH0sIFt2aXRlc3NlQW5pbWF0aW9uLCBhY3Rpb25zXSk7XG5cbiAgY29uc3QgdG9nZ2xlQW5pbWF0aW9uID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdO1xuICAgIGlmICghYWN0aW9uKSByZXR1cm47XG5cbiAgICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgICAgIGFjdGlvbi5wYXVzZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvbi5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgYWN0aW9uLnBsYXkoKTsgXG4gICAgfVxuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcbiAgfTtcblxuICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgaWYoZ3JvdXAuY3VycmVudCkgZ3JvdXAuY3VycmVudC5yb3RhdGlvbi55ICs9IHZpdGVzc2VSb3RhdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8cHJpbWl0aXZlIFxuICAgICAgcmVmPXtncm91cH0gXG4gICAgICBvYmplY3Q9e3NjZW5lfSBcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFuaW1hdGlvbn1cbiAgICAgIG9uUG9pbnRlck92ZXI9eygpID0+IGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInfVxuICAgICAgb25Qb2ludGVyT3V0PXsoKSA9PiBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdhdXRvJ31cbiAgICAgIFxuICAgICAgc2NhbGU9e2ZpbmFsU2NhbGV9IC8vIPCfkYggT24gYXBwbGlxdWUgbGEgdGFpbGxlIGR5bmFtaXF1ZSBpY2lcbiAgICAgIFxuICAgICAgcG9zaXRpb249e1swLCAwLjUsIDBdfSBcbiAgICAgIHsuLi5wcm9wc30gXG4gICAgLz5cbiAgKTtcbn1cblxuY29uc3QgTmlnaHRGdXJ5U2NlbmUgPSAoKSA9PiB7XG4gIC8vIPCfjpvvuI8gw4lUQVRTIERVIFRBQkxFQVUgREUgQk9SRFxuICBjb25zdCBbcm90U3BlZWQsIHNldFJvdFNwZWVkXSA9IHVzZVN0YXRlKDAuMDAxKTtcbiAgY29uc3QgW2FuaW1TcGVlZCwgc2V0QW5pbVNwZWVkXSA9IHVzZVN0YXRlKDIuNSk7XG4gIGNvbnN0IFtzaXplRmFjdG9yLCBzZXRTaXplRmFjdG9yXSA9IHVzZVN0YXRlKDEpOyAvLyAxID0gdGFpbGxlIG5vcm1hbGUgKDEwMCUpXG5cbiAgLy8gRm9uY3Rpb24gcG91ciB0b3V0IHJlbWV0dHJlIMOgIHrDqXJvXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldFJvdFNwZWVkKDAuMDAxKTtcbiAgICBzZXRBbmltU3BlZWQoMi41KTtcbiAgICBzZXRTaXplRmFjdG9yKDEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJlbGF0aXZlXCI+XG4gICAgICBcbiAgICAgIDxDYW52YXMgc2hhZG93cyBjYW1lcmE9e3sgcG9zaXRpb246IFswLCAyLCAxMF0sIGZvdjogNDUgfX0+XG4gICAgICAgIDxjb2xvciBhdHRhY2g9XCJiYWNrZ3JvdW5kXCIgYXJncz17WycjMDUwNTEwJ119IC8+XG4gICAgICAgIFxuICAgICAgICA8U3RhcnMgcmFkaXVzPXsxMDB9IGRlcHRoPXs1MH0gY291bnQ9ezUwMDB9IGZhY3Rvcj17NH0gc2F0dXJhdGlvbj17MH0gZmFkZSBzcGVlZD17MX0gLz5cblxuICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17M30gLz5cbiAgICAgICAgPGRpcmVjdGlvbmFsTGlnaHQgcG9zaXRpb249e1sxMCwgMTAsIDVdfSBpbnRlbnNpdHk9ezR9IC8+XG4gICAgICAgIDxzcG90TGlnaHQgcG9zaXRpb249e1stNSwgNSwgMTBdfSBpbnRlbnNpdHk9ezV9IGNvbG9yPVwiI2E4NTVmN1wiIC8+XG4gICAgICAgIDxzcG90TGlnaHQgcG9zaXRpb249e1swLCA1LCAtMTBdfSBpbnRlbnNpdHk9ezV9IGNvbG9yPVwiI2ZmZmZmZlwiIC8+XG5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8SHRtbCBjZW50ZXI+PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+SW52b2NhdGlvbi4uLjwvZGl2PjwvSHRtbD59PlxuICAgICAgICAgIDxDZW50ZXIgdG9wPlxuICAgICAgICAgICAgPERyYWdvbk1vZGVsIFxuICAgICAgICAgICAgICAgIHZpdGVzc2VSb3RhdGlvbj17cm90U3BlZWR9IFxuICAgICAgICAgICAgICAgIHZpdGVzc2VBbmltYXRpb249e2FuaW1TcGVlZH1cbiAgICAgICAgICAgICAgICBmYWN0ZXVyVGFpbGxlPXtzaXplRmFjdG9yfSAvLyDwn5GIIE9uIGVudm9pZSBsYSB0YWlsbGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICA8L0NhbnZhcz5cblxuICAgICAgey8qIPCfjpvvuI8gVUkgUEFOTkVBVSBERSBDT05UUsOUTEUgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgYmctYmxhY2svNzAgYmFja2Ryb3AtYmx1ci1tZCBwLTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzMwIHRleHQtd2hpdGUgdy02NCBzaGFkb3ctMnhsIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLWJsYWNrLzgwXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtMzAwIGZvbnQtYm9sZCBtYi00IHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMCBwYi0yXCI+XG4gICAgICAgICAgICBDT05UUsOUTEVTIERVIERSQUdPTlxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIHsvKiAxLiBUYWlsbGUgKFpvb20pICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+VGFpbGxlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwXCI+eHtzaXplRmFjdG9yLnRvRml4ZWQoMSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgXG4gICAgICAgICAgICAgICAgbWluPVwiMC4xXCIgXG4gICAgICAgICAgICAgICAgbWF4PVwiM1wiIFxuICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjFcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2l6ZUZhY3Rvcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNpemVGYWN0b3IocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtZ3JlZW4tNTAwIGN1cnNvci1wb2ludGVyIGgtMiBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGFwcGVhcmFuY2Utbm9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogMi4gUm90YXRpb24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTFcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Sb3RhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+e3JvdFNwZWVkLnRvRml4ZWQoMyl9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiIFxuICAgICAgICAgICAgICAgIG1heD1cIjAuMDVcIiBcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMDFcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17cm90U3BlZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSb3RTcGVlZChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGFjY2VudC1ibHVlLTUwMCBjdXJzb3ItcG9pbnRlciBoLTIgYmctZ3JheS03MDAgcm91bmRlZC1sZyBhcHBlYXJhbmNlLW5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDMuIFZpdGVzc2UgQW5pbWF0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+QW5pbWF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTQwMFwiPnh7YW5pbVNwZWVkLnRvRml4ZWQoMSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiIFxuICAgICAgICAgICAgICAgIG1heD1cIjVcIiBcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4xXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FuaW1TcGVlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuaW1TcGVlZChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGFjY2VudC1wdXJwbGUtNTAwIGN1cnNvci1wb2ludGVyIGgtMiBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGFwcGVhcmFuY2Utbm9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC00IGJnLXdoaXRlLzEwIGhvdmVyOmJnLXJlZC01MDAvNTAgcHktMSByb3VuZGVkIHRleHQteHMgdHJhbnNpdGlvbi1jb2xvcnMgYm9yZGVyIGJvcmRlci13aGl0ZS8xMFwiXG4gICAgICAgID5cbiAgICAgICAgICAgIFLDqWluaXRpYWxpc2VyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnVzZUdMVEYucHJlbG9hZChNT0RFTF9QQVRIKTtcbnVzZVRleHR1cmUucHJlbG9hZChURVhUVVJFX1BBVEgpO1xuXG5leHBvcnQgZGVmYXVsdCBOaWdodEZ1cnlTY2VuZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTdGFyUmF0aW5nID0gKHsgYXJ0aWNsZUlkLCBjdXJyZW50UmF0aW5nLCBvblJhdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyYXRpbmcsIHNldFJhdGluZ10gPSB1c2VTdGF0ZShjdXJyZW50UmF0aW5nIHx8IDApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJhdGluZyA9IChzY29yZSkgPT4ge1xyXG4gICAgICAgIHNldFJhdGluZyhzY29yZSk7XHJcbiAgICAgICAgb25SYXRlKHNjb3JlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTFcIj5cclxuICAgICAgICAgICAge1sxLCAyLCAzLCA0LCA1XS5tYXAoKHN0YXIpID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3N0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC0yeGwgdHJhbnNpdGlvbi1jb2xvcnMgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhciA8PSAoaG92ZXIgfHwgcmF0aW5nKSA/IFwidGV4dC12aWtpbmctZ29sZFwiIDogXCJ0ZXh0LXN0b25lLTYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmF0aW5nKHN0YXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXIoc3Rhcil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihyYXRpbmcpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOKYhVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJSYXRpbmc7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFZpa2luZ1BsYXllciA9ICh7IHNyYywgYXV0b1BsYXkgPSBmYWxzZSB9KSA9PiB7XHJcbiAgICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRUaW1lLCBzZXRDdXJyZW50VGltZV0gPSB1c2VTdGF0ZShcIjA6MDBcIik7XHJcbiAgICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKFwiMDowMFwiKTtcclxuICAgIGNvbnN0IFtpc0Jsb2NrZWQsIHNldElzQmxvY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIE5vdXZlYXUgc3RhdGUgcG91ciBkw6l0ZWN0ZXIgbGUgYmxvY2FnZVxyXG5cclxuICAgIC8vIEdlc3Rpb24gZGUgbCdBdXRvcGxheVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYXV0b1BsYXkgJiYgYXVkaW9SZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5UHJvbWlzZSA9IGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgICAgICBpZiAocGxheVByb21pc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcGxheVByb21pc2VcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1Y2PDqHMgOiBMZSBuYXZpZ2F0ZXVyIGEgYXV0b3Jpc8OpIGwnYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0Jsb2NrZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gw4ljaGVjIDogTGUgbmF2aWdhdGV1ciBhIGJsb3F1w6kgbCdhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dG9wbGF5IGJsb3F1w6kgKGludGVyYWN0aW9uIHJlcXVpc2UpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0Jsb2NrZWQodHJ1ZSk7IC8vIE9uIHNpZ25hbGUgcXUnaWwgZmF1dCB1bmUgYWN0aW9uIG1hbnVlbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbYXV0b1BsYXksIHNyY10pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzUGxheWluZykge1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgIHNldElzQmxvY2tlZChmYWxzZSk7IC8vIFNpIGwndXRpbGlzYXRldXIgY2xpcXVlLCBsZSBibG9jYWdlIHNhdXRlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGltZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZTtcclxuICAgICAgICBjb25zdCB0b3RhbCA9IGF1ZGlvUmVmLmN1cnJlbnQuZHVyYXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRvdGFsKSB7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzKChjdXJyZW50IC8gdG90YWwpICogMTAwKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFRpbWUoZm9ybWF0VGltZShjdXJyZW50KSk7XHJcbiAgICAgICAgICAgIHNldER1cmF0aW9uKGZvcm1hdFRpbWUodG90YWwpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlZWsgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gZS50YXJnZXQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY29uc3QgY2xpY2tYID0gZS5uYXRpdmVFdmVudC5vZmZzZXRYO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gYXVkaW9SZWYuY3VycmVudC5kdXJhdGlvbjtcclxuICAgICAgICBpZiAoZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IChjbGlja1ggLyB3aWR0aCkgKiBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZSkgPT4ge1xyXG4gICAgICAgIGlmICghdGltZSB8fCBpc05hTih0aW1lKSkgcmV0dXJuIFwiMDowMFwiO1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcclxuICAgICAgICBjb25zdCBzZWMgPSBNYXRoLmZsb29yKHRpbWUgJSA2MCk7XHJcbiAgICAgICAgcmV0dXJuIGAke21pbn06JHtzZWMgPCAxMCA/ICcwJyArIHNlYyA6IHNlY31gO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBWaXN1YWxpc2V1ciBhbmltw6lcclxuICAgIGNvbnN0IGJhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAzMCB9KS5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEgbXgtWzFweF0gcm91bmRlZC10IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke2lzUGxheWluZyA/ICdiZy12aWtpbmctZ29sZCBhbmltYXRlLWJhcicgOiAnYmctc3RvbmUtNzAwIGgtMSd9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogYCR7TWF0aC5yYW5kb20oKSAqIDAuNSArIDAuNH1zYCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaXNQbGF5aW5nID8gJzEwMCUnIDogJzEwJScgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGwgbXgtYXV0byBteS04IGJnLWJsYWNrLzgwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcm91bmRlZC1sZyBwLTYgc2hhZG93LVswXzBfMzBweF9yZ2JhKDAsMCwwLDAuOCldIGJhY2tkcm9wLWJsdXItc20gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogTWVzc2FnZSBzaSBibG9xdcOpICovfVxyXG4gICAgICAgICAgICB7aXNCbG9ja2VkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ibGFjay84MCB6LTIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGFuaW1hdGUtZmFkZS1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyBiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gc2hhZG93LVswXzBfMjBweF9yZ2JhKDIxMiwxNzUsNTUsMC42KV1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg8J+UiiBBY3RpdmVyIGwnQW1iaWFuY2UgU29ub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxhdWRpbyBcclxuICAgICAgICAgICAgICAgIHJlZj17YXVkaW9SZWZ9IFxyXG4gICAgICAgICAgICAgICAgc3JjPXtzcmN9IFxyXG4gICAgICAgICAgICAgICAgb25UaW1lVXBkYXRlPXtoYW5kbGVUaW1lVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25FbmRlZD17KCkgPT4gc2V0SXNQbGF5aW5nKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uTG9hZGVkTWV0YWRhdGE9eyhlKSA9PiBzZXREdXJhdGlvbihmb3JtYXRUaW1lKGUudGFyZ2V0LmR1cmF0aW9uKSl9IC8vIENoYXJnZSBsYSBkdXLDqWUgZMOocyBsZSBkw6lidXRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIEJvdXRvbiBQbGF5L1BhdXNlICovfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTQgaC0xNCBmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7aXNQbGF5aW5nID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgc2hhZG93LVswXzBfMTVweF9yZ2JhKDIxMiwxNzUsNTUsMC41KV0nIDogJ3RleHQtdmlraW5nLWdvbGQgaG92ZXI6YmctdmlraW5nLWdvbGQvMjAnfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzUGxheWluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTYgaC02XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00elwiLz48L3N2Zz4gXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTYgaC02IHRyYW5zbGF0ZS14LTAuNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04IDV2MTRsMTEtN3pcIi8+PC9zdmc+IFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogSW5mbyAmIFZpc3VhbGlzZXVyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1bMTBweF0gdGV4dC12aWtpbmctZ29sZCBmb250LW1vbm8gbWItMiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG9wYWNpdHktODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2N1cnJlbnRUaW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2lzUGxheWluZyA/IFwiTGVjdHVyZS4uLlwiIDogXCJQYXVzZVwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2R1cmF0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFpvbmUgVmlzdWFsaXNldXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwIGZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIG1iLTMgb3ZlcmZsb3ctaGlkZGVuIG9wYWNpdHktODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JhcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBCYXJyZSBkZSBwcm9ncmVzc2lvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEuNSBiZy1zdG9uZS04MDAgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIHJlbGF0aXZlIGdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2Vla31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgYmctdmlraW5nLWdvbGQgcm91bmRlZC1mdWxsIHJlbGF0aXZlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMCBlYXNlLWxpbmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTMgaC0zIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgc2hhZG93IHNjYWxlLTAgZ3JvdXAtaG92ZXI6c2NhbGUtMTAwIHRyYW5zaXRpb24tYWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpa2luZ1BsYXllcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSAnand0LWRlY29kZSc7XHJcbmltcG9ydCBEYXRhUHJvdmlkZXJTcGFjZSBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFQcm92aWRlclNwYWNlJzsgLy8gT24gbCdpbXBvcnRlcmEganVzdGUgYXByw6hzXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFydGljbGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm0nO1xyXG5cclxuY29uc3QgQWRtaW5EYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJ3N0YXRzJyk7IC8vIFN5c3TDqG1lIGQnb25nbGV0c1xyXG4gICAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjdXJyZW50VXNlciA9IHRva2VuID8gand0RGVjb2RlKHRva2VuKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBkZSBkw6ljb2RhZ2UgZHUgdG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRMOpZmluaXRpb24gZGVzIGFjY8OocyBzZWxvbiBsZXMgcsO0bGVzXHJcbiAgICBjb25zdCByb2xlcyA9IGN1cnJlbnRVc2VyPy5yb2xlcyB8fCBbXTtcclxuICAgIGNvbnN0IGlzRnVsbEFkbWluID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcclxuICAgIGNvbnN0IGlzUHJvdmlkZXIgPSByb2xlcy5pbmNsdWRlcygnUk9MRV9GT1VSTklTU0VVUicpIHx8IGlzRnVsbEFkbWluO1xyXG4gICAgY29uc3QgaXNEZXNpZ25lciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0RFU0lHTkVSJykgfHwgaXNGdWxsQWRtaW47XHJcbiAgICBjb25zdCBpc0VkaXRvciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0VESVRFVVInKSB8fCBpc0Z1bGxBZG1pbjtcclxuXHJcbiAgICBjb25zdCBsb2FkU3RhdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvYWRtaW4vc3RhdHMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiQWNjw6hzIHJlZnVzw6kgcGFyIGxlIEdyYW5kIENvbnNlaWxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oanNvbiA9PiBzZXREYXRhKGpzb24pKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gc2V0RXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2FkU3RhdHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlQXJ0aWNsZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93LmNvbmZpcm0oXCLDinRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBicsO7bGVyIGNlIHBhcmNoZW1pbiBkw6lmaW5pdGl2ZW1lbnQgP1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIE9uIG1ldCDDoCBqb3VyIGwnYWZmaWNoYWdlIGxvY2FsZW1lbnQgc2FucyByZWNoYXJnZXIgdG91dGUgbGEgcGFnZVxyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShwcmV2ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VtZW50QXJ0aWNsZXM6IHByZXYubWFuYWdlbWVudEFydGljbGVzLmZpbHRlcihhcnQgPT4gYXJ0LmlkICE9PSBpZClcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIDogSW1wb3NzaWJsZSBkZSBzdXBwcmltZXIgKERyb2l0cyBpbnN1ZmZpc2FudHMgPylcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBhbGVydChcIkVycmV1ciBzZXJ2ZXVyLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUVkaXRTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEVkaXRpbmdJZChudWxsKTsgLy8gT24gcXVpdHRlIGxlIG1vZGUgw6lkaXRpb25cclxuICAgICAgICBsb2FkU3RhdHMoKTsgLy8gT24gcmVjaGFyZ2UgbGVzIGRvbm7DqWVzIHBvdXIgdm9pciBsZXMgY2hhbmdlbWVudHMgKHRpdHJlLCBldGMuKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByb21vdGUgPSBhc3luYyAodXNlcklkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9hZG1pbi91c2VyLyR7dXNlcklkfS9wcm9tb3RlYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFVzZXJzOiBkYXRhLmFsbFVzZXJzLm1hcCh1ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1LmlkID09PSB1c2VySWQgPyB7IC4uLnUsIHJvbGVzOiB1cGRhdGVkRGF0YS5uZXdSb2xlcyB9IDogdVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7IGFsZXJ0KFwiRXJyZXVyIGxvcnMgZHUgY2hhbmdlbWVudCBkZSByYW5nXCIpOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZmlyZSBwLTEwIHRleHQtY2VudGVyIGZvbnQtZHJhZ29uXCI+e2Vycm9yfTwvZGl2PjtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBwLTEwIGZvbnQtZHJhZ29uIGFuaW1hdGUtcHVsc2UgdGV4dC1jZW50ZXJcIj5BcHBlbCBhdSBHcmFuZCBDb25zZWlsLi4uPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBwLTYgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctcGFyY2htZW50IG1iLTEwIGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8zMCBwYi00IHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgUGFsYWlzIGQnQWRtaW5pc3RyYXRpb25cclxuICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIHBhciBPbmdsZXRzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIG1iLTggYm9yZGVyLWIgYm9yZGVyLXN0b25lLTgwMCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignc3RhdHMnKX0gY2xhc3NOYW1lPXtgcHgtNCBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbiAke2FjdGl2ZVRhYiA9PT0gJ3N0YXRzJyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrJyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAnfWB9PlZ1ZSBkJ2Vuc2VtYmxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtpc0Z1bGxBZG1pbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3VzZXJzJyl9IGNsYXNzTmFtZT17YHB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24gJHthY3RpdmVUYWIgPT09ICd1c2VycycgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjaycgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwJ31gfT5Qb3B1bGF0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7aXNFZGl0b3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdhcnRpY2xlcycpfSBjbGFzc05hbWU9e2BweC00IHB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uICR7YWN0aXZlVGFiID09PSAnYXJ0aWNsZXMnID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2snIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCd9YH0+Q2hyb25pcXVlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNQcm92aWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2RhdGEnKX0gY2xhc3NOYW1lPXtgcHgtNCBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbiAke2FjdGl2ZVRhYiA9PT0gJ2RhdGEnID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2snIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCd9YH0+RG9ubsOpZXMgKENTVik8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2lzRGVzaWduZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdkZXNpZ24nKX0gY2xhc3NOYW1lPXtgcHgtNCBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbiAke2FjdGl2ZVRhYiA9PT0gJ2Rlc2lnbicgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjaycgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwJ31gfT5BcHBhcmVuY2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIENPTlRFTlUgRFlOQU1JUVVFICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLVs0MDBweF1cIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3N0YXRzJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC02IGFuaW1hdGUtZmFkZUluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIGJvcmRlci1sLTQgYm9yZGVyLXZpa2luZy1nb2xkIHAtNiBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgdGV4dC14cyBmb250LWJsYWNrXCI+SGFiaXRhbnRzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtZHJhZ29uIG10LTIgdGV4dC13aGl0ZVwiPntkYXRhLnVzZXJzQ291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWZpcmUgcC02IHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2tcIj5BcnRpY2xlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWRyYWdvbiBtdC0yIHRleHQtd2hpdGVcIj57ZGF0YS5hcnRpY2xlc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICd1c2VycycgJiYgaXNGdWxsQWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IGFuaW1hdGUtZmFkZUluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNoZXJjaGVyIHVuIGd1ZXJyaWVyLi4uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzIwIHAtMiByb3VuZGVkIHRleHQtc20gdy1mdWxsIG91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5hbGxVc2Vycz8uZmlsdGVyKHUgPT4gdS5wc2V1ZG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpKS5tYXAodSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dS5pZH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMyBiZy1zdG9uZS05MDAvNTAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC12aWtpbmctcGFyY2htZW50XCI+e3UucHNldWRvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDBcIj57dS5yb2xlcy5qb2luKCcgfCAnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9tb3RlKHUuaWQpfSBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzQwIHB4LTMgcHktMSBob3ZlcjpiZy12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24gdXBwZXJjYXNlIGZvbnQtYmxhY2tcIj5DaGFuZ2VyIFJhbmc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2FydGljbGVzJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWZhZGVJblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIENBUyAxIDogTU9ERSDDiURJVElPTiBBQ1RJRiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VkaXRpbmdJZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIHAtNCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtd2hpdGUgdXBwZXJjYXNlIHRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihpAgQW5udWxlciBsYSBtb2RpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogT24gcsOpdXRpbGlzZSB0b24gc3VwZXIgZm9ybXVsYWlyZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUZvcm0gaWQ9e2VkaXRpbmdJZH0gb25TdWNjZXNzPXtoYW5kbGVFZGl0U3VjY2Vzc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQ0FTIDIgOiBMSVNURSBERVMgQVJUSUNMRVMgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hbmFnZW1lbnRBcnRpY2xlcz8ubWFwKGFydCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthcnQuaWR9IGNsYXNzTmFtZT1cInAtNCBiZy1zdG9uZS05MDAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGhvdmVyOmJvcmRlci1zdG9uZS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvYXJ0aWNsZS8ke2FydC5pZH1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdmlraW5nLXBhcmNobWVudCBncm91cC1ob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tY29sb3JzIHRleHQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFyIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwXCI+e2FydC5hdXRob3J9PC9zcGFuPiDigKIgTGUge25ldyBEYXRlKGFydC5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDwn5GHIExFUyBOT1VWRUFVWCBCT1VUT05TIEQnQUNUSU9OICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJPVVRPTiBNT0RJRklFUiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0aW5nSWQoYXJ0LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIGJnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTMwMCBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBCT1VUT04gU1VQUFJJTUVSICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZUFydGljbGUoYXJ0LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIGJnLXJlZC05MDAvMjAgdGV4dC1yZWQtNTAwIGJvcmRlciBib3JkZXItcmVkLTkwMC81MCBob3ZlcjpiZy1yZWQtOTAwIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1bMTBweF0gdXBwZXJjYXNlIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdXBwcmltZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCFkYXRhLm1hbmFnZW1lbnRBcnRpY2xlcyB8fCBkYXRhLm1hbmFnZW1lbnRBcnRpY2xlcy5sZW5ndGggPT09IDApICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgaXRhbGljIHRleHQtY2VudGVyXCI+QXVjdW5lIGNocm9uaXF1ZSDDoCBnw6lyZXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2RhdGEnICYmIGlzUHJvdmlkZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRhUHJvdmlkZXJTcGFjZSBkYXRhc2V0cz17ZGF0YS5kYXRhc2V0c30gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2Rlc2lnbicgJiYgaXNEZXNpZ25lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIHRleHQtY2VudGVyIGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLXN0b25lLTgwMCB0ZXh0LXN0b25lLTYwMCB1cHBlcmNhc2UgZm9udC1ibGFjayB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvcmdlIGRlIERlc2lnbiAoRW4gY29uc3RydWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5EYXNoYm9hcmQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgQXJ0aWNsZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHsgaGVhZGVyczogeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nIH0gfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQtMnhsIHB5LTIwIGFuaW1hdGUtcHVsc2VcIj5SZWNoZXJjaGUgZGFucyBsZXMgYXJjaGl2ZXMuLi48L2Rpdj47XHJcbiAgICBpZiAoIWFydGljbGUpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWZpcmUgdGV4dC14bCBweS0xMFwiPkFydGljbGUgaW50cm91dmFibGUgZGFucyBsZXMgYXJjaGl2ZXMuPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIG1iLTYgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuKGkDwvc3Bhbj4gUmV0b3VyIGF1IGZvcnVtXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC04IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgey8qIETDqWNvcmF0aW9uIGNvaW4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy0yMCBoLTIwIGJnLXZpa2luZy1nb2xkIG9wYWNpdHktMTAgcm91bmRlZC1ibC1mdWxsXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNCBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtc20gdGV4dC1zdG9uZS01MDAgbWItOCBib3JkZXItYiBib3JkZXItc3RvbmUtNzAwIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy12aWtpbmctcmVkIHB4LTIgcHktMSByb3VuZGVkIHRleHQtd2hpdGUgZm9udC1ib2xkIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJjaGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DcsOpw6kgbGUge25ldyBEYXRlKGFydGljbGUuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBmb250LXNlcmlmIHdoaXRlc3BhY2UtcHJlLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBOb3RlOiBMZXMgYmxvY3MgZXQgY29tbWVudGFpcmVzIG7DqWNlc3NpdGVudCB1bmUgbG9naXF1ZSBwbHVzIHBvdXNzw6llIMOgIGltcGzDqW1lbnRlciBwbHVzIHRhcmQgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5pbXBvcnQgQXJ0aWNsZUZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm1cIjtcclxuXHJcbmNvbnN0IEZvcnVtUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvLyDDiXRhdCBwb3VyIGxlIHRyaVxyXG4gICAgY29uc3QgW3NvcnRPcmRlciwgc2V0U29ydE9yZGVyXSA9IHVzZVN0YXRlKFwibmV3ZXN0XCIpO1xyXG5cclxuICAgIC8vIEdlc3Rpb24gZGUgbGEgbmF2aWdhdGlvbiBpbnRlcm5lXHJcbiAgICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShcImxpc3RcIik7IC8vICdsaXN0JywgJ2NyZWF0ZScsICdlZGl0J1xyXG4gICAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyAxLiBSw6ljdXDDqXJhdGlvbiBldCBkw6ljb2RhZ2UgZHUgVG9rZW5cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiR3VlcnJpZXIgY29ubmVjdMOpIDpcIiwgZGVjb2RlZCk7IC8vIETDqWNvbW1lbnRlciBzaSBiZXNvaW5cclxuICAgICAgICAgICAgICAgIHNldFVzZXIoZGVjb2RlZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYWRnZSAoVG9rZW4pIGludmFsaWRlIG91IGV4cGlyw6lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTGUgY2hhcmdlbWVudCBzZSBmYWl0IHZpYSBsZSB1c2VFZmZlY3QgZHUgc29ydE9yZGVyIGNpLWRlc3NvdXNcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyBSZWNoYXJnZXIgcXVhbmQgbGUgdHJpIGNoYW5nZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaEFydGljbGVzKCk7XHJcbiAgICB9LCBbc29ydE9yZGVyXSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hBcnRpY2xlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBcIi9hcGkvYXJ0aWNsZXNcIjtcclxuICAgICAgICAgICAgLy8gTG9naXF1ZSBkZSB0cmkgQVBJIFBsYXRmb3JtXHJcbiAgICAgICAgICAgIHN3aXRjaCAoc29ydE9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmVzdF9yYXRpbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gXCI/b3JkZXJbYXZlcmFnZVJhdGluZ109ZGVzY1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndvcnN0X3JhdGluZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBcIj9vcmRlclthdmVyYWdlUmF0aW5nXT1hc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbGRlc3RcIjpcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gXCI/b3JkZXJbY3JlYXRlZEF0XT1hc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuZXdlc3RcIjpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IFwiP29yZGVyW2NyZWF0ZWRBdF09ZGVzY1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIiB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldEFydGljbGVzKGRhdGFbXCJoeWRyYTptZW1iZXJcIl0gfHwgZGF0YVtcIm1lbWJlclwiXSB8fCBbXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgZGUgbGlhaXNvbiBhdmVjIGxlIEdyYW5kIENvbnNlaWxcIiwgZXJyKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXdpbmRvdy5jb25maXJtKFxyXG4gICAgICAgICAgICAgICAgXCJWb3VsZXotdm91cyB2cmFpbWVudCBlZmZhY2VyIGNlIHLDqWNpdCBkZSBsYSBwaWVycmUgP1wiLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIFN1cHByZXNzaW9uIGxvY2FsZSBpbW3DqWRpYXRlIHBvdXIgbCdpbnRlcmZhY2VcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGVzLmZpbHRlcigoYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhSWQgPSAoYS5pZCB8fCBhW1wiQGlkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFJZCAhPT0gaWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICBcIkxlcyBkcmFnb25zIHByb3TDqGdlbnQgY2UgcGFyY2hlbWluIChFcnJldXIgZGUgcGVybWlzc2lvbnMpLlwiLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChcIkxlIHNlcnZldXIgZXN0IGluam9pZ25hYmxlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlldyhcImxpc3RcIik7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRJZChudWxsKTtcclxuICAgICAgICBmZXRjaEFydGljbGVzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIPCfm6HvuI8gLS0tIE5PVVZFTExFIExPR0lRVUUgREVTIFLDlExFUyAoR1VFU1RTL1VTRVJTL0FVVEVVUlMvRURJVEVVUlMpIC0tLSDwn5uh77iPXHJcbiAgICBjb25zdCB1c2VyUm9sZXMgPSB1c2VyPy5yb2xlcyB8fCBbXTtcclxuXHJcbiAgICAvLyAxLiBDZXV4IHF1aSBwZXV2ZW50IFRPVVQgbW9kaWZpZXIgKMOJZGl0ZXVyLCBBZG1pbiwgRGVzaWduZXIsIEZvdXJuaXNzZXVyKVxyXG4gICAgY29uc3Qgc3VwZXJFZGl0b3JzID0gW1xyXG4gICAgICAgIFwiUk9MRV9FRElURVVSXCIsXHJcbiAgICAgICAgXCJST0xFX0FETUlOXCIsXHJcbiAgICAgICAgXCJST0xFX0RFU0lHTkVSXCIsXHJcbiAgICAgICAgXCJST0xFX0ZPVVJOSVNTRVVSXCIsXHJcbiAgICBdO1xyXG4gICAgY29uc3QgaXNTdXBlckVkaXRvciA9IHN1cGVyRWRpdG9ycy5zb21lKChyKSA9PiB1c2VyUm9sZXMuaW5jbHVkZXMocikpO1xyXG5cclxuICAgIC8vIDIuIEVzdC1jZSB1biBhdXRldXIgP1xyXG4gICAgY29uc3QgaXNBdXRob3IgPSB1c2VyUm9sZXMuaW5jbHVkZXMoXCJST0xFX0FVVEVVUlwiKTtcclxuXHJcbiAgICAvLyAzLiBRdWkgcGV1dCBjcsOpZXIgPyAoQXV0ZXVycyArIFN1cGVyIEVkaXRldXJzKVxyXG4gICAgLy8gTm90ZSA6IFJPTEVfVVNFUiAoQWJvbm7DqSkgbidlc3QgUEFTIGluY2x1cyBpY2ksIGlsIG5lIHZvaXQgcGFzIGxlIGJvdXRvbi5cclxuICAgIGNvbnN0IGNhbkNyZWF0ZSA9IGlzU3VwZXJFZGl0b3IgfHwgaXNBdXRob3I7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcgJiYgdmlldyA9PT0gXCJsaXN0XCIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTQwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiBib3JkZXItNCBib3JkZXItdmlraW5nLWdvbGQgYm9yZGVyLXQtdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIGFuaW1hdGUtc3BpbiBtYi00XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQteGwgYW5pbWF0ZS1wdWxzZSB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBPdXZlcnR1cmUgZGVzIHBhcmNoZW1pbnMuLi5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBwYi0yMFwiPlxyXG4gICAgICAgICAgICB7LyogLS0tIEhFQURFUiAtLS0gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIG1iLTEyIGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8yMCBwYi04IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hyb25pcXVlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgaXRhbGljIHRleHQtc20gbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMZSBzYXZvaXIgZHUgdmlsbGFnZSBkZSBCZXJrLCBncmF2w6kgcG91ciBsJ8OpdGVybml0w6kuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3ZpZXcgPT09IFwibGlzdFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTRUxFQ1RFVVIgREUgVFJJICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c29ydE9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTb3J0T3JkZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC81MCB0ZXh0LXZpa2luZy1nb2xkIHB5LTMgcHgtNCByb3VuZGVkIGN1cnNvci1wb2ludGVyIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBob3ZlcjpiZy1zdG9uZS05MDAgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZXdlc3RcIj7wn5OFIFBsdXMgUsOpY2VudHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvbGRlc3RcIj7wn5OcIFBsdXMgQW5jaWVuczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJlc3RfcmF0aW5nXCI+8J+MnyBNaWV1eCBOb3TDqXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3b3JzdF9yYXRpbmdcIj7wn5KAIE1vaW5zIE5vdMOpczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDwn5SSIEJPVVRPTiBDUsOJRVIgOiBDYWNow6kgcG91ciBsZXMgc2ltcGxlcyBhYm9ubsOpcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhbkNyZWF0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZElkKG51bGwpOyAvLyDwn5GIIEFKT1VURSDDh0EgcG91ciDDqnRyZSBzw7tyIHF1J29uIHBhcnQgZGUgesOpcm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcImNyZWF0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBHcmF2ZXIgdW4gcsOpY2l0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIC0tLSBWVUVTIEZPUk1VTEFJUkVTIC0tLSAqL31cclxuICAgICAgICAgICAge3ZpZXcgPT09IFwiY3JlYXRlXCIgfHwgdmlldyA9PT0gXCJlZGl0XCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbS00IGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcImxpc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZElkKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi04IHRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbiB1cHBlcmNhc2UgdGV4dC1bMTBweF0gZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDihpAgUmV0b3VyIGF1IG11ciBkZXMgbMOpZ2VuZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVGb3JtIGlkPXtzZWxlY3RlZElkfSBvblN1Y2Nlc3M9e2hhbmRsZVN1Y2Nlc3N9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIC8qIC0tLSBWVUUgTElTVEUgREVTIEFSVElDTEVTIC0tLSAqL1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGVzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMjAgdGV4dC1zdG9uZS02MDAgaXRhbGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZSBzaWxlbmNlIHLDqGduZSBzdXIgbGUgbXVyLi4uIEF1Y3VuZSBjaHJvbmlxdWUgbidhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDDqXTDqSB0cm91dsOpZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5JZCA9IChhcnRpY2xlLmlkIHx8IGFydGljbGVbXCJAaWRcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIPCfm6HvuI8gUEVSTUlTU0lPTlMgUEFSIEFSVElDTEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEplIHN1aXMgcHJvcHJpw6l0YWlyZSBTSSBtb24gSUQgPSBJRCBkZSBsJ2F1dGV1clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNPd25lciA9IHVzZXI/LmlkID09PSBhcnRpY2xlLmF1dGhvcj8uaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSidhaSBsZSBkcm9pdCBkZSBtb2RpZmllciBTSSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxLiBKZSBzdWlzIHVuIFN1cGVyIEVkaXRldXIgKHBldSBpbXBvcnRlIGwnYXV0ZXVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4gT1UgQUxPUlMgamUgc3VpcyBBdXRldXIgRVQgYydlc3QgTU9OIGFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbkVkaXRUaGlzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1N1cGVyRWRpdG9yIHx8IChpc0F1dGhvciAmJiBpc093bmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2xlYW5JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgYmctc3RvbmUtOTAwLzQwIGJvcmRlci1sLTQgYm9yZGVyLXN0b25lLTgwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHAtOCByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBCYWRnZSBOb3RlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmF2ZXJhZ2VSYXRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy01MDAgdGV4dC1zbSBmb250LWJvbGQgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwLzMwIHB4LTIgcHktMC41IHJvdW5kZWQgYmcteWVsbG93LTUwMC8xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4piFIHthcnRpY2xlLmF2ZXJhZ2VSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIPCflJIgQk9VVE9OUyBEJ0FDVElPTiBQUk9Uw4lHw4lTICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbkVkaXRUaGlzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgb3BhY2l0eS00MCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoY2xlYW5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcImVkaXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB1cHBlcmNhc2UgZm9udC1ibGFjayBiZy1zdG9uZS04MDAgdGV4dC1zdG9uZS00MDAgcHgtMyBweS0xIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXZpa2luZy1nb2xkIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RpZmllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUoY2xlYW5JZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdXBwZXJjYXNlIGZvbnQtYmxhY2sgYmctcmVkLTkwMC8xMCB0ZXh0LXJlZC01MDAvNzAgcHgtMyBweS0xIGJvcmRlciBib3JkZXItcmVkLTkwMC8zMCBob3ZlcjpiZy1yZWQtOTAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1cHByaW1lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDAgZm9udC1zZXJpZiBpdGFsaWMgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgbWItOCBtYXgtdy0zeGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwie2FydGljbGUuc3VtbWFyeX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwdC02IGJvcmRlci10IGJvcmRlci1zdG9uZS04MDAvNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNiBoLVsxcHhdIGJnLXZpa2luZy1nb2xkLzQwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBmb250LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuYXV0aG9yPy5wc2V1ZG8gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuYXV0aG9yPy51c2VybmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHdWVycmllciBkZSBsJ29tYnJlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2FydGljbGUvJHtjbGVhbklkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZmlyZSBmb250LWJsYWNrIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VsdGVyIGxlIHBhcmNoZW1pbntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+4oaSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3J1bVBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOaWdodEZ1cnlTY2VuZSBmcm9tIFwiLi4vY29tcG9uZW50cy9OaWdodEZ1cnlcIjtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTE2IGFuaW1hdGUtZmFkZS1pbi11cFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1kcmFnb24gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXZpa2luZy1nb2xkIHZpYS15ZWxsb3ctNTAwIHRvLXZpa2luZy1nb2xkIG1iLTggZHJvcC1zaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBkYW5zIGwnQW50cmVcclxuICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTEgYmctdmlraW5nLXJlZCBteC1hdXRvIG1iLTggcm91bmRlZC1mdWxsIHNoYWRvdy1bMF8wXzEwcHhfI2RjMjYyNl1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtdmlraW5nLWxpZ2h0IG1iLTEyIG1heC13LTN4bCBteC1hdXRvIGZvbnQtc2VyaWYgaXRhbGljIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgICAgICAgXCLDh2EsIGMnZXN0IEJldXJrLiDDgCBkb3V6ZSBqb3VycyBhdSBub3JkIGR1IETDqXNlc3BvaXIsIGV0XHJcbiAgICAgICAgICAgICAgICBxdWVscXVlcyBkZWdyw6lzIGF1IHN1ZCBkJ3VuIEZyb2lkLWRlLWNhbmFyZC4gQW5jcsOpIHNvbGlkZW1lbnRcclxuICAgICAgICAgICAgICAgIHN1ciBsZSBNw6lyaWRpZW4gZGUgbGEgTWlzw6hyZS4gTW9uIHZpbGxhZ2UuLi4gRW4gdW4gbW90LCBiYWxhaXNlLlxyXG4gICAgICAgICAgICAgICAgRXQgc2VwdCBnw6luw6lyYXRpb25zIHkgb250IGTDqWrDoCB2dSBsZSBqb3VyLCBwb3VydGFudCwgdG91dGVzIGxlc1xyXG4gICAgICAgICAgICAgICAgbWFpc29ucyBzb250IG5ldXZlcy4gQmV1cmsgOiBzYSBww6pjaGUsIHNhIGNoYXNzZSwgZXQgc2VzXHJcbiAgICAgICAgICAgICAgICBtZXJ2ZWlsbGV1eCBjb3VjaGVycyBkZSBzb2xlaWwuIExhIHNldWxlIGZhdXNzZSBub3RlIGMnZXN0IGxlc1xyXG4gICAgICAgICAgICAgICAgYmVzdGlvbGVzLiBBaWxsZXVycywgbGVzIGdlbnMgb250IGRlcyBzb3VyaXMgb3UgZGVzIG1vdXN0aXF1ZXMuXHJcbiAgICAgICAgICAgICAgICBOb3VzIG9uIGEgZGVzLi4uIGRyYWdvbnMuXCJcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMCByb3VuZGVkLTJ4bCBib3JkZXItNCBib3JkZXItc3RvbmUtNzAwIHNoYWRvdy0yeGwgb3ZlcmZsb3ctaGlkZGVuIG1iLTEyXCI+XHJcbiAgICAgICAgICAgICAgICB7Lyog8J+RhyBDJ2VzdCBpY2kgcXVlIGxhIG1hZ2llIG9ww6hyZS4gTGEgaGF1dGV1ciAoaC1bNjAwcHhdKSBlc3QgQ1JVQ0lBTEUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzYwMHB4XSB3LWZ1bGwgcmVsYXRpdmUgYmctYmxhY2sgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmlnaHRGdXJ5U2NlbmUgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTAgdy1mdWxsIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTQwMCBwb2ludGVyLWV2ZW50cy1ub25lIHotMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpcXVleiBzdXIgbGUgZHJhZ29uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvZm9ydW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHB4LTggcHktNCBiZy12aWtpbmctcmVkIGhvdmVyOmJnLXJlZC05MDAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHRleHQtd2hpdGUgZm9udC1kcmFnb24gdGV4dC14bCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMjIwLDM4LDM4LDAuNSldXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+QWNjw6lkZXIgYXUgRm9ydW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZS8yMCB0by10cmFuc3BhcmVudCAtdHJhbnNsYXRlLXgtZnVsbCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC1mdWxsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvc3RhdGlzdGlxdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTggcHktNCBiZy12aWtpbmctcm9jayBob3ZlcjpiZy1zdG9uZS03MDAgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTUwMCB0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIGZvbnQtZHJhZ29uIHRleHQteGwgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFZvaXIgbGVzIFN0YXRzXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RXJyb3IoJycpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luX2NoZWNrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLCAvLyBFbnZvaSBkZSBsYSBjbMOpIFwiZW1haWxcIiBhdHRlbmR1ZSBwYXIgU3ltZm9ueVxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCBcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2sgJiYgZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvY2thZ2UgZHUgdG9rZW4gSldUXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0aW9uIHZlcnMgbGUgZm9ydW1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9mb3J1bSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcignSWRlbnRpZmlhbnRzIGluY29ycmVjdHMuIExlcyBkcmFnb25zIG5lIHZvdXMgcmVjb25uYWlzc2VudCBwYXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ0VycmV1ciBkZSBjb25uZXhpb24gYXUgc2VydmV1ci4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXZpa2luZy1yb2NrIHAtMTAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgbXQtMTBcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5Db25uZXhpb248L2gyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXJlZCB0ZXh0LXNtIG1iLTQgaXRhbGljIHRleHQtY2VudGVyIGZvbnQtYm9sZFwiPntlcnJvcn08L3A+fVxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBkdSBHdWVycmllclxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4ZW1wbGVAYmVyay5mclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMiB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTW90IGRlIHBhc3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayBweS00IHVwcGVyY2FzZSBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LWxnIGFjdGl2ZTpzY2FsZS05NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZW5kcmUgc29uIGVudm9sXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBSZWdpc3RlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBsYWluUGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHJvbGU6ICdST0xFX1VTRVInXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEVycm9yKCcnKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3JlZ2lzdGVyJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJpZ2UgdmVycyBsJ2FjY3VlaWwgb3UgbGUgbG9naW4gYXByw6hzIHN1Y2PDqHNcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvJyk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIkVycmV1ciBsb3JzIGRlIGwnaW5zY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJJbXBvc3NpYmxlIGRlIGNvbnRhY3RlciBsZSBHcmFuZCBTY3JpYmUgKEVycmV1ciByw6lzZWF1KVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXZpa2luZy1yb2NrLzkwIHAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCBzaGFkb3ctMnhsIGJhY2tkcm9wLWJsdXItc21cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBSZWpvaW5kcmUgbGEgR3VpbGRlXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtOTAwLzQwIGJvcmRlciBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC0yMDAgcC0zIHJvdW5kZWQgbWItNiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBOT00gRCdVVElMSVNBVEVVUiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Ob20gZGUgY29kZSAoUHNldWRvKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBLcm9rbW91XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEVNQUlMICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPkVtYWlsIGRlIGNvbnRhY3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidmlraW5nQGJlcmsuZnJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogUsOUTEUgKETDqWrDoCBmb25jdGlvbm5lbCkgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+UmFuZyBhdSBzZWluIGRlIGxhIEd1aWxkZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHJvbGU6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9VU0VSXCI+QWJvbm7DqSAoTGVjdGV1cik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfQVVURVVSXCI+QXV0ZXVyIChOYXJyYXRldXIpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0VESVRFVVJcIj7DiWRpdGV1ciAoR2FyZGllbik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfREVTSUdORVJcIj5EZXNpZ25ldXIgKEFydGlzYW4pPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0ZPVVJOSVNTRVVSXCI+Rm91cm5pc3NldXIgZGUgZG9ubsOpZXMgKFNjcmliZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfQURNSU5cIj5BZG1pbmlzdHJhdGV1ciAoQ2hlZiBkZSBsYSBHdWlsZGUpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9UIERFIFBBU1NFICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPk1vdCBkZSBwYXNzZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLigKLigKLigKLigKLigKLigKLigKLigKJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBsYWluUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBwbGFpblBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtdmlraW5nLWRhcmsgZm9udC1leHRyYWJvbGQgcHktNCByb3VuZGVkIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgc2hhZG93LWxnIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtdC00XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBHcmF2ZXIgbW9uIG5vbVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcnQgYXMgQ2hhcnRKUywgQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEFyY0VsZW1lbnQsIFBvaW50RWxlbWVudCwgTGluZUVsZW1lbnQsXHJcbn0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBCYXIsIERvdWdobnV0LCBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEFyY0VsZW1lbnQsIFBvaW50RWxlbWVudCwgTGluZUVsZW1lbnQpO1xyXG5cclxuY29uc3QgU3RhdHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtib3hPZmZpY2VEYXRhLCBzZXRCb3hPZmZpY2VEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwb3B1bGF0aW9uRGF0YSwgc2V0UG9wdWxhdGlvbkRhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RpbWVsaW5lRGF0YSwgc2V0VGltZWxpbmVEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBsb2FkQ1NWID0gKHVybCwgY2FsbGJhY2spID0+IHtcclxuICAgIGZldGNoKHVybClcclxuICAgICAgLnRoZW4ociA9PiByLm9rID8gci50ZXh0KCkgOiBudWxsKVxyXG4gICAgICAudGhlbih0eHQgPT4ge1xyXG4gICAgICAgIGlmKCF0eHQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IHR4dC50cmltKCkuc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggPCAyKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IGxpbmVzWzBdLnNwbGl0KCc7JykubWFwKGggPT4gaC50cmltKCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBsaW5lcy5zbGljZSgxKS5tYXAobCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBsLnNwbGl0KCc7JykubWFwKHYgPT4gdi50cmltKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4gKHsuLi5hY2MsIFtoXTogdmFsc1tpXX0pLCB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2JveF9vZmZpY2UuY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgc2V0Qm94T2ZmaWNlRGF0YSh7XHJcbiAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0ZpbG0nXSksXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICBsYWJlbDogJ00kJyxcclxuICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydCb3ggT2ZmaWNlIChNaWxsaW9ucyAkKSddKSksXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsnIzdmMWQxZCcsICcjZGMyNjI2JywgJyNkOTc3MDYnXSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzI5MjUyNCcsXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvYmVya19wb3B1bGF0aW9uLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldFBvcHVsYXRpb25EYXRhKHtcclxuICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnR3JvdXBlJ10pLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ1BvcHVsYXRpb24nXSkpLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyNkOTc3MDYnLCAnIzdmMWQxZCcsICcjNTc1MzRlJywgJyNhOGEyOWUnXSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzFjMTkxNycsXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvZHJhZ29uc190aW1lbGluZS5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVsaW5lRGF0YSh7XHJcbiAgICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnQW5uw6llJ10pLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnRXNww6hjZXMnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnRXNww6hjZXMgUmVjZW5zw6llcyddKSksXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2Q5NzcwNicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjE3LCAxMTksIDYsIDAuMiknLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICB0ZW5zaW9uOiAwLjMsXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICBwbHVnaW5zOiB7IGxlZ2VuZDogeyBsYWJlbHM6IHsgY29sb3I6ICcjZTdlNWU0JywgZm9udDogeyBmYW1pbHk6ICdzZXJpZicgfSB9IH0gfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB5OiB7IHRpY2tzOiB7IGNvbG9yOiAnI2E4YTI5ZScgfSwgZ3JpZDogeyBjb2xvcjogJyM0NDQwM2MnIH0gfSxcclxuICAgICAgeDogeyB0aWNrczogeyBjb2xvcjogJyNhOGEyOWUnIH0sIGdyaWQ6IHsgY29sb3I6ICcjNDQ0MDNjJyB9IH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgZHJvcC1zaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgIEwnT2JzZXJ2YXRvaXJlIGRlIEJlcmtcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctbGlnaHQgdGV4dC1sZyBpdGFsaWMgYm9yZGVyLWIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIGlubGluZS1ibG9jayBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICBSZWNlbnNlbWVudCBvZmZpY2llbCBkZSBsJ2FyY2hpcGVsXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1kcmFnb24gdGV4dC13aGl0ZSBtYi02XCI+VHLDqXNvciBkZSBHdWVycmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveE9mZmljZURhdGEgPyA8QmFyIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2JveE9mZmljZURhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5DaGFyZ2VtZW50Li4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1kcmFnb24gdGV4dC13aGl0ZSBtYi02XCI+Q2xhbnMgJiBUcmlidXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9wdWxhdGlvbkRhdGEgPyA8RG91Z2hudXQgb3B0aW9ucz17ey4uLm9wdGlvbnMsIHNjYWxlczp7fX19IGRhdGE9e3BvcHVsYXRpb25EYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+Q2hhcmdlbWVudC4uLjwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtNiByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCBtZDpjb2wtc3Bhbi0yIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1kcmFnb24gdGV4dC13aGl0ZSBtYi02XCI+Q2hyb25vbG9naWUgZGVzIETDqWNvdXZlcnRlczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtODAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGltZWxpbmVEYXRhID8gPExpbmUgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17dGltZWxpbmVEYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+Q2hhcmdlbWVudC4uLjwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHNQYWdlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lUGFnZSIsIkZvcnVtUGFnZSIsIkFydGljbGVQYWdlIiwiU3RhdHNQYWdlIiwiTmF2YmFyIiwiUmVnaXN0ZXJQYWdlIiwiTG9naW5QYWdlIiwiQXJ0aWNsZVNob3ciLCJBZG1pbkRhc2hib2FyZCIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwicGF0aCIsImVsZW1lbnQiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiZXJyb3IiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGVzdCIsIm5leHQiLCJwdXNoIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDc3ZDaGFydCIsIkFydGljbGVGb3JtIiwiX3JlZiIsIl9yZWYkaWQiLCJpZCIsIm9uU3VjY2VzcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJ0aXRsZSIsInNldFRpdGxlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiYmxvY3MiLCJzZXRCbG9jcyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibXVzaWNMaWJyYXJ5Iiwic2V0TXVzaWNMaWJyYXJ5IiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJkYXRhc2V0TGlicmFyeSIsInNldERhdGFzZXRMaWJyYXJ5IiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaCIsImNvbmNhdCIsInJlcyIsImpzb24iLCJkYXRhIiwiZm9ybWF0dGVkQmxvY3MiLCJzb3J0IiwiYiIsInBvc2l0aW9uIiwibWFwIiwidml6VHlwZSIsImNvbnRlbnQiLCJ0eXBlIiwicGFydHMiLCJzcGxpdCIsIm1lZGlhVXJsIiwiZmlsZSIsImVyciIsIm9rIiwiRXJyb3IiLCJhZGRCbG9jIiwicmVtb3ZlQmxvYyIsImluZGV4VG9SZW1vdmUiLCJmaWx0ZXIiLCJfIiwiaW5kZXgiLCJ1cGRhdGVCbG9jIiwiZmllbGQiLCJuZXdCbG9jcyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJ0YXJnZXQiLCJmaWxlcyIsInN0YXJ0c1dpdGgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVTdWJtaXQiLCJfcmVmMiIsIl9jYWxsZWUiLCJ0b2tlbiIsImFydGljbGVEYXRhIiwicmVzcG9uc2UiLCJmb3JtRGF0YSIsIl9yZXNwb25zZSIsImVycm9yRGF0YSIsIl90IiwiX2NvbnRleHQiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJibG9jIiwiZmluYWxDb250ZW50IiwiYmxvY1BheWxvYWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbGVydCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZm9yRWFjaCIsImluY2x1ZGVzIiwibWVzc2FnZSIsIl94Iiwib25TdWJtaXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJrZXkiLCJvbkNsaWNrIiwiYWNjZXB0Iiwic291cmNlIiwiY3N2VXJsIiwiZW50cmllcyIsIl9yZWYzIiwiX3JlZjQiLCJmb2xkZXIiLCJsYWJlbCIsInRvVXBwZXJDYXNlIiwiVG9vbEJ0biIsImRpc2FibGVkIiwiX3JlZjUiLCJ1c2VQYXJhbXMiLCJMaW5rIiwiVmlraW5nUGxheWVyIiwiQ29tbWVudFNlY3Rpb24iLCJTdGFyUmF0aW5nIiwiX2FydGljbGUkYmxvY3MiLCJfYXJ0aWNsZSRhdXRob3IiLCJfdXNlUGFyYW1zIiwiYXJ0aWNsZSIsInNldEFydGljbGUiLCJyZWplY3QiLCJjdXN0b21TdHlsZXMiLCJyYXdDb25maWciLCJkZXNpZ25Db25maWciLCJwYXJzZSIsImZpbmFsVGl0bGVDb2xvciIsInRpdGxlQ29sb3IiLCJmaW5hbENvbnRlbnRCZyIsImNvbnRlbnRCZyIsIm11c2ljQmxvYyIsImZpbmQiLCJtdXNpY1NyYyIsImNvbnRlbnRCbG9jcyIsImhhbmRsZVJhdGUiLCJzY29yZSIsIkF1dGhvcml6YXRpb24iLCJ0byIsImFydGljbGVJZCIsImN1cnJlbnRSYXRpbmciLCJhdmVyYWdlUmF0aW5nIiwib25SYXRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhdXRvUGxheSIsImF1dGhvciIsInBzZXVkbyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJDb21tZW50SXRlbSIsIl9jb21tZW50JGF1dGhvciIsImNvbW1lbnQiLCJvblZvdGUiLCJvblJlcGx5IiwiY2FuSW50ZXJhY3QiLCJzaG93UmVwbHlGb3JtIiwic2V0U2hvd1JlcGx5Rm9ybSIsInJlcGx5Q29udGVudCIsInNldFJlcGx5Q29udGVudCIsImhhbmRsZVJlcGx5U3VibWl0IiwicmVwbGllcyIsInJlcGx5IiwiX0NvbW1lbnRJdGVtIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsIm5ld0NvbW1lbnQiLCJzZXROZXdDb21tZW50Iiwic2V0Q2FuSW50ZXJhY3QiLCJmZXRjaENvbW1lbnRzIiwiY29tbWVudHNEYXRhIiwicm9vdENvbW1lbnRzIiwicGFyZW50IiwidW5kZWZpbmVkIiwiaGFuZGxlUG9zdCIsInBhcmVudElkIiwiX2FyZ3MiLCJoYW5kbGVWb3RlIiwiX2NhbGxlZTIiLCJjb21tZW50SWQiLCJkaXJlY3Rpb24iLCJfdDIiLCJfY29udGV4dDIiLCJfeDIiLCJfeDMiLCJQYXBhIiwiQmFyQ2hhcnQiLCJCYXIiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJMZWdlbmQiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiTGluZUNoYXJ0IiwiTGluZSIsIlBpZUNoYXJ0IiwiUGllIiwiQ2VsbCIsIkNPTE9SUyIsIl9yZWYkdml6VHlwZSIsInNldERhdGEiLCJzZXRFcnJvciIsInRleHQiLCJjc3ZUZXh0IiwiaGVhZGVyIiwiZHluYW1pY1R5cGluZyIsInNraXBFbXB0eUxpbmVzIiwiY29tcGxldGUiLCJyZXN1bHRzIiwia2V5cyIsInhLZXkiLCJ5S2V5IiwicmVuZGVyQ2hhcnQiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2UiLCJkYXRhS2V5IiwiY29udGVudFN0eWxlIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsInN0cm9rZVdpZHRoIiwiZG90IiwiYWN0aXZlRG90IiwiY3giLCJjeSIsImxhYmVsTGluZSIsInBlcmNlbnQiLCJ0b0ZpeGVkIiwib3V0ZXJSYWRpdXMiLCJmaWxsIiwibmFtZUtleSIsImVudHJ5IiwiY3Vyc29yIiwicmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJEYXRhUHJvdmlkZXJTcGFjZSIsImRhdGFzZXRzIiwic2V0RmlsZSIsInByZXZpZXciLCJzZXRQcmV2aWV3Iiwic2V0SGVhZGVycyIsImNvbHVtbk1hcHBpbmciLCJzZXRDb2x1bW5NYXBwaW5nIiwiZGF0YXNldE5hbWUiLCJzZXREYXRhc2V0TmFtZSIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJzZWxlY3RlZEZpbGUiLCJyZXBsYWNlIiwiY29scyIsImluaXRpYWxNYXBwaW5nIiwiaCIsInRvZ2dsZVR5cGUiLCJwcmV2IiwiaGFuZGxlVXBsb2FkIiwicGF5bG9hZCIsIm1ldGFkYXRhIiwiY29sdW1ucyIsInVwbG9hZGVkQXQiLCJ0b0lTT1N0cmluZyIsInJvd0NvdW50Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyb3ciLCJkcyIsInJvd3NDb3VudCIsInVzZU5hdmlnYXRlIiwiand0RGVjb2RlIiwiX3VzZXIiLCJfdXNlcjIiLCJfdXNlcjMiLCJuYXZpZ2F0ZSIsInVzZXIiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiY2FuU2VlRGFzaGJvYXJkIiwicm9sZXMiLCJGcmFnbWVudCIsInVzZVJlZiIsIlN1c3BlbnNlIiwiQ2FudmFzIiwidXNlRnJhbWUiLCJ1c2VUaHJlZSIsInVzZUdMVEYiLCJ1c2VBbmltYXRpb25zIiwiQ2VudGVyIiwiSHRtbCIsInVzZVRleHR1cmUiLCJTdGFycyIsIk1PREVMX1BBVEgiLCJURVhUVVJFX1BBVEgiLCJBTklNQVRJT05fTkFNRSIsIkRyYWdvbk1vZGVsIiwidml0ZXNzZVJvdGF0aW9uIiwidml0ZXNzZUFuaW1hdGlvbiIsImZhY3RldXJUYWlsbGUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl91c2VHTFRGIiwic2NlbmUiLCJhbmltYXRpb25zIiwidGV4dHVyZSIsIl91c2VUaHJlZSIsInZpZXdwb3J0IiwiYmFzZVNjYWxlIiwiZmluYWxTY2FsZSIsImZsaXBZIiwiY29sb3JTcGFjZSIsImdyb3VwIiwiX3VzZUFuaW1hdGlvbnMiLCJhY3Rpb25zIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwidHJhdmVyc2UiLCJjaGlsZCIsImlzTWVzaCIsIm1hdGVyaWFsIiwibmVlZHNVcGRhdGUiLCJhY3Rpb24iLCJyZXNldCIsImZhZGVJbiIsInBsYXkiLCJ0aW1lU2NhbGUiLCJ0b2dnbGVBbmltYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJwYXVzZWQiLCJjdXJyZW50Iiwicm90YXRpb24iLCJfZXh0ZW5kcyIsInJlZiIsIm9iamVjdCIsIm9uUG9pbnRlck92ZXIiLCJvblBvaW50ZXJPdXQiLCJzY2FsZSIsIk5pZ2h0RnVyeVNjZW5lIiwicm90U3BlZWQiLCJzZXRSb3RTcGVlZCIsImFuaW1TcGVlZCIsInNldEFuaW1TcGVlZCIsInNpemVGYWN0b3IiLCJzZXRTaXplRmFjdG9yIiwiaGFuZGxlUmVzZXQiLCJzaGFkb3dzIiwiY2FtZXJhIiwiZm92IiwiYXR0YWNoIiwiYXJncyIsImRlcHRoIiwiY291bnQiLCJmYWN0b3IiLCJzYXR1cmF0aW9uIiwiZmFkZSIsInNwZWVkIiwiaW50ZW5zaXR5IiwiZmFsbGJhY2siLCJjZW50ZXIiLCJ0b3AiLCJtaW4iLCJtYXgiLCJzdGVwIiwicGFyc2VGbG9hdCIsInByZWxvYWQiLCJob3ZlciIsInNldEhvdmVyIiwicmF0aW5nIiwic2V0UmF0aW5nIiwiaGFuZGxlUmF0aW5nIiwic3RhciIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIl9yZWYkYXV0b1BsYXkiLCJhdWRpb1JlZiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImlzQmxvY2tlZCIsInNldElzQmxvY2tlZCIsInBsYXlQcm9taXNlIiwidG9nZ2xlUGxheSIsInBhdXNlIiwiaGFuZGxlVGltZVVwZGF0ZSIsInRvdGFsIiwiZm9ybWF0VGltZSIsImhhbmRsZVNlZWsiLCJjbGllbnRXaWR0aCIsImNsaWNrWCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WCIsInRpbWUiLCJpc05hTiIsIk1hdGgiLCJmbG9vciIsInNlYyIsImJhcnMiLCJhbmltYXRpb25EdXJhdGlvbiIsInJhbmRvbSIsIm9uVGltZVVwZGF0ZSIsIm9uRW5kZWQiLCJvbkxvYWRlZE1ldGFkYXRhIiwidmlld0JveCIsIl9jdXJyZW50VXNlciIsIl9kYXRhJGFsbFVzZXJzIiwiX2RhdGEkbWFuYWdlbWVudEFydGljIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJjdXJyZW50VXNlciIsImlzRnVsbEFkbWluIiwiaXNQcm92aWRlciIsImlzRGVzaWduZXIiLCJpc0VkaXRvciIsImxvYWRTdGF0cyIsImhhbmRsZURlbGV0ZUFydGljbGUiLCJjb25maXJtIiwibWFuYWdlbWVudEFydGljbGVzIiwiYXJ0IiwiaGFuZGxlRWRpdFN1Y2Nlc3MiLCJoYW5kbGVQcm9tb3RlIiwidXNlcklkIiwidXBkYXRlZERhdGEiLCJhbGxVc2VycyIsIm5ld1JvbGVzIiwidXNlcnNDb3VudCIsImFydGljbGVzQ291bnQiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwic2V0VXNlciIsInNvcnRPcmRlciIsInNldFNvcnRPcmRlciIsInZpZXciLCJzZXRWaWV3Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJkZWNvZGVkIiwiZmV0Y2hBcnRpY2xlcyIsInVybCIsIkFjY2VwdCIsImhhbmRsZURlbGV0ZSIsIl90MyIsImFJZCIsInBvcCIsImhhbmRsZVN1Y2Nlc3MiLCJ1c2VyUm9sZXMiLCJzdXBlckVkaXRvcnMiLCJpc1N1cGVyRWRpdG9yIiwic29tZSIsImlzQXV0aG9yIiwiY2FuQ3JlYXRlIiwiX2FydGljbGUkYXV0aG9yMiIsIl9hcnRpY2xlJGF1dGhvcjMiLCJjbGVhbklkIiwiaXNPd25lciIsImNhbkVkaXRUaGlzIiwidXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNldEl0ZW0iLCJocmVmIiwicGxhaW5QYXNzd29yZCIsInJvbGUiLCJzZXRGb3JtRGF0YSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIkFyY0VsZW1lbnQiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkRvdWdobnV0IiwicmVnaXN0ZXIiLCJib3hPZmZpY2VEYXRhIiwic2V0Qm94T2ZmaWNlRGF0YSIsInBvcHVsYXRpb25EYXRhIiwic2V0UG9wdWxhdGlvbkRhdGEiLCJ0aW1lbGluZURhdGEiLCJzZXRUaW1lbGluZURhdGEiLCJsb2FkQ1NWIiwiY2FsbGJhY2siLCJ0eHQiLCJsaW5lcyIsInRyaW0iLCJ2YWxzIiwicmVkdWNlIiwiYWNjIiwibGFiZWxzIiwiYm9yZGVyV2lkdGgiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInRlbnNpb24iLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJwbHVnaW5zIiwibGVnZW5kIiwiZm9udCIsImZhbWlseSIsInNjYWxlcyIsInRpY2tzIiwiZ3JpZCIsIngiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==