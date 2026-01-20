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
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/events-776716bd.esm.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/web/Html.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/Gltf.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/Texture.js");
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
  var _useThree = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_28__.D)(),
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
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_28__.F)(function () {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-three_drei_core_Center_js-node_modules_react-three_drei_core_Gltf_-fc88a0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEIsMkRBQUE7TUFBSWtCLFNBQVMsRUFBQztJQUF5RCxHQUFDLGdCQUFrQixDQUFDLGVBQzNGbEIsMkRBQUE7TUFBS2tCLFNBQVMsRUFBQztJQUEyQyxHQUNyRDZsQixjQUFjLGdCQUFHL21CLDJEQUFBLENBQUMybUIsc0RBQVE7TUFBQ29CLE9BQU8sRUFBQXpSLGFBQUEsQ0FBQUEsYUFBQSxLQUFNeVIsT0FBTztRQUFFTyxNQUFNLEVBQUMsQ0FBQztNQUFDLEVBQUU7TUFBQzNmLElBQUksRUFBRW9lO0lBQWUsQ0FBRSxDQUFDLGdCQUFHL21CLDJEQUFBO01BQUdrQixTQUFTLEVBQUM7SUFBeUMsR0FBQyx5QkFBMEIsQ0FDekssQ0FDSixDQUFDLGVBRU5sQiwyREFBQTtNQUFLa0IsU0FBUyxFQUFDO0lBQWtHLGdCQUM3R2xCLDJEQUFBO01BQUtrQixTQUFTLEVBQUM7SUFBaUQsQ0FBTSxDQUFDLGVBQ3ZFbEIsMkRBQUE7TUFBSWtCLFNBQVMsRUFBQztJQUF5RCxHQUFDLGdDQUErQixDQUFDLGVBRXhHbEIsMkRBQUE7TUFBS2tCLFNBQVMsRUFBQztJQUF1QixHQUNqQytsQixZQUFZLGdCQUFHam5CLDJEQUFBLENBQUM2UyxrREFBSTtNQUFDa1YsT0FBTyxFQUFFQSxPQUFRO01BQUNwZixJQUFJLEVBQUVzZTtJQUFhLENBQUUsQ0FBQyxnQkFBR2puQiwyREFBQTtNQUFHa0IsU0FBUyxFQUFDO0lBQXlDLEdBQUMsdUJBQXdCLENBQy9JLENBQ0osQ0FDSixDQUNKO0VBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVWLFNBQVMsRTs7Ozs7Ozs7Ozs7QUMvSHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9BcnRpY2xlRm9ybS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvQXJ0aWNsZVNob3cuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnRTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9Dc3ZDaGFydC5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvRGF0YVByb3ZpZGVyU3BhY2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvTmlnaHRGdXJ5LmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9TdGFyUmF0aW5nLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9WaWtpbmdQbGF5ZXIuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9BZG1pbkRhc2hib2FyZC5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0FydGljbGVQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvRm9ydW1QYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvSG9tZVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Mb2dpblBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9SZWdpc3RlclBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9TdGF0c1BhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vIEltcG9ydCBkZXMgc3R5bGVzXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBJbXBvcnQgZGVzIHBhZ2VzXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3BhZ2VzL0hvbWVQYWdlJztcclxuaW1wb3J0IEZvcnVtUGFnZSBmcm9tICcuL3BhZ2VzL0ZvcnVtUGFnZSc7XHJcbmltcG9ydCBBcnRpY2xlUGFnZSBmcm9tICcuL3BhZ2VzL0FydGljbGVQYWdlJztcclxuaW1wb3J0IFN0YXRzUGFnZSBmcm9tICcuL3BhZ2VzL1N0YXRzUGFnZSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBSZWdpc3RlclBhZ2UgZnJvbSAnLi9wYWdlcy9SZWdpc3RlclBhZ2UnO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJy4vcGFnZXMvTG9naW5QYWdlJztcclxuaW1wb3J0IEFydGljbGVTaG93IGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlU2hvdyc7XHJcblxyXG4vLyBOT1VWRUFVIDogSW1wb3J0IGRlIGxhIHBhZ2UgRGFzaGJvYXJkIEFkbWluXHJcbmltcG9ydCBBZG1pbkRhc2hib2FyZCBmcm9tICcuL3BhZ2VzL0FkbWluRGFzaGJvYXJkJztcclxuXHJcbmNvbnNvbGUubG9nKFwi8J+QsiBEw6ltYXJyYWdlIGRlIGwnYXBwbGljYXRpb24gRHJhZ29uQ01TLi4uXCIpO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBmb250LXNhbnMgdGV4dC12aWtpbmctcGFyY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogQkFOTknDiFJFICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0zMiBtZDpoLTQ4IG92ZXJmbG93LWhpZGRlbiBib3JkZXItYi00IGJvcmRlci12aWtpbmctZ29sZCByZWxhdGl2ZSBzaGFkb3ctMnhsIGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9iYW5uaWVyZS5wbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFubmnDqHJlIERyYWdvbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tdmlraW5nLWRhcmsgdG8tdHJhbnNwYXJlbnQgb3BhY2l0eS02MFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktMTAgcHgtNCBmbGV4LWdyb3cgcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ydW1cIiBlbGVtZW50PXs8Rm9ydW1QYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFJvdXRlIHBhdGg9XCIvZm9ydW0vYXJ0aWNsZS86aWRcIiBlbGVtZW50PXs8QXJ0aWNsZVBhZ2UgLz59IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcnRpY2xlLzppZFwiIGVsZW1lbnQ9ezxBcnRpY2xlU2hvdyAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc3RhdGlzdGlxdWVcIiBlbGVtZW50PXs8U3RhdHNQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGVsZW1lbnQ9ezxSZWdpc3RlclBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBOT1VWRUxMRSBST1VURSA6IFNhbGxlIGR1IENvbnNlaWwgKEFkbWluKSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiBlbGVtZW50PXs8QWRtaW5EYXNoYm9hcmQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIGJvcmRlci10IGJvcmRlci12aWtpbmctZ29sZC8zMCBweS02IG10LTEwIHRleHQtY2VudGVyIHRleHQtdmlraW5nLWxpZ2h0IGZvbnQtZHJhZ29uIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD7CqSBMJ0FjYWTDqW1pZSBkZSBCZXJrIC0gQXJjaGl2ZXMgRHJhY29uaXF1ZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LXJvb3QnKTtcclxuaWYgKHJvb3RFbGVtZW50KSB7XHJcbiAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChyb290RWxlbWVudCk7XHJcbiAgICByb290LnJlbmRlcig8QXBwIC8+KTtcclxuICAgIGNvbnNvbGUubG9nKFwi4pyFIFJlYWN0IGluamVjdMOpIGF2ZWMgc3VjY8OocyAhXCIpO1xyXG59IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBJbXBvc3NpYmxlIGRlIHRyb3V2ZXIgbCfDqWzDqW1lbnQgI3JlYWN0LXJvb3RcIik7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8g8J+RhyAxLiBJTVBPUlQgRFUgR1JBUEhJUVVFIChJbmRpc3BlbnNhYmxlKVxyXG5pbXBvcnQgQ3N2Q2hhcnQgZnJvbSAnLi9Dc3ZDaGFydCc7IFxyXG5cclxuY29uc3QgQXJ0aWNsZUZvcm0gPSAoeyBpZCA9IG51bGwsIG9uU3VjY2VzcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtibG9jcywgc2V0QmxvY3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXNhdGlvbiBhdmVjIGRlcyB0YWJsZWF1eCB2aWRlcyBwb3VyIMOpdml0ZXIgbGVzIGNyYXNoc1xyXG4gICAgY29uc3QgW211c2ljTGlicmFyeSwgc2V0TXVzaWNMaWJyYXJ5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkYXRhc2V0TGlicmFyeSwgc2V0RGF0YXNldExpYnJhcnldID0gdXNlU3RhdGUoW10pOyBcclxuXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gLS0tIDEuIENIQVJHRU1FTlQgREVTIERPTk7DiUVTIERFIEwnQVJUSUNMRSAoU0kgTU9ESUZJQ0FUSU9OKSAtLS1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUoZGF0YS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VtbWFyeShkYXRhLnN1bW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIGZvcm1hdGUgbGVzIGJsb2NzIHJlw6d1cyBkZSBsJ0FQSSBwb3VyIHF1J2lscyBtYXJjaGVudCBkYW5zIGxlIGZvcm11bGFpcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRCbG9jcyA9IChkYXRhLmJsb2NzIHx8IFtdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdml6VHlwZSA9ICdiYXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBiLmNvbnRlbnQgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpIGMnZXN0IHVuIGdyYXBoaXF1ZSwgb24gc8OpcGFyZSBsZSB0eXBlIGV0IGwnVVJMIChmb3JtYXQgXCJ0eXBlOjp1cmxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiLnR5cGUgPT09ICdzdGF0cycgfHwgYi50eXBlID09PSAndml6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gY29udGVudC5zcGxpdCgnOjonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXpUeXBlID0gcGFydHNbMF0gfHwgJ2Jhcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IHBhcnRzWzFdIHx8ICcnOyAvLyBMJ1VSTCBkdSBDU1YgZGV2aWVudCBsZSBjb250ZW50L21lZGlhVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYi5pZCwgLy8gT24gZ2FyZGUgbCdJRCBwb3VyIHNhdm9pciBxdWUgY2UgYmxvYyBleGlzdGUgZMOpasOgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogYi50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsIC8vIFRleHRlIG91IFVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhVXJsOiBjb250ZW50LCAvLyBQb3VyIHByw6l2aXN1YWxpc2VyIGltYWdlcy9zb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdml6VHlwZTogdml6VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXRCbG9jcyhmb3JtYXR0ZWRCbG9jcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBjaGFyZ2VtZW50IGFydGljbGVcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIC8vIC0tLSBDSEFSR0VNRU5UIERFUyBMSUJSQUlSSUVTIChNdXNpcXVlIC8gRGF0YXNldHMpIC0tLVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyAxLiBNdXNpcXVlc1xyXG4gICAgICAgIGZldGNoKCcvYXBpL211c2ljL2xpc3QnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLm9rID8gcmVzLmpzb24oKSA6IFtdKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSBzZXRNdXNpY0xpYnJhcnkoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcIkVycmV1ciBtdXNpcXVlXCIsIGVycikpO1xyXG5cclxuICAgICAgICAvLyAyLiBEYXRhc2V0c1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2xpc3QtZGF0YXNldHMnKSBcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgQVBJIERhdGFzZXRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhc2V0TGlicmFyeShbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkltcG9zc2libGUgZGUgY2hhcmdlciBsZXMgZGF0YXNldHNcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KFtdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gLS0tIEdFU1RJT04gREVTIEJMT0NTIC0tLVxyXG4gICAgY29uc3QgYWRkQmxvYyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICAgc2V0QmxvY3MoWy4uLmJsb2NzLCB7IFxyXG4gICAgICAgICAgICB0eXBlLCBcclxuICAgICAgICAgICAgY29udGVudDogJycsIFxyXG4gICAgICAgICAgICBtZWRpYVVybDogJycsIFxyXG4gICAgICAgICAgICB2aXpUeXBlOiAnYmFyJywgXHJcbiAgICAgICAgICAgIGZpbGU6IG51bGwsICAgXHJcbiAgICAgICAgICAgIC8vIFBhcyBkJ0lEIGljaSwgYydlc3QgdW4gbm91dmVhdSBibG9jXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVCbG9jID0gKGluZGV4VG9SZW1vdmUpID0+IHtcclxuICAgICAgICBzZXRCbG9jcyhibG9jcy5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gaW5kZXhUb1JlbW92ZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVCbG9jID0gKGluZGV4LCBmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdCbG9jcyA9IFsuLi5ibG9jc107XHJcbiAgICAgICAgbmV3QmxvY3NbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xyXG4gICAgICAgIHNldEJsb2NzKG5ld0Jsb2NzKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChpbmRleCwgZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVCbG9jKGluZGV4LCAnZmlsZScsIGZpbGUpO1xyXG4gICAgICAgICAgICBpZiAoZmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVCbG9jKGluZGV4LCAnbWVkaWFVcmwnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIFNPVU1JU1NJT04gKEhZQlJJREUgOiBQT1NUIG91IFBBVENIKSAtLS1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDwn5OdIE1PREUgw4lESVRJT04gKFBBVENIIEpTT04pXHJcbiAgICAgICAgICAgICAgICAvLyBBdHRlbnRpb24gOiBMJ3VwbG9hZCBkZSBub3V2ZWF1eCBmaWNoaWVycyBpbWFnZSBuJ2VzdCBwYXMgZ8OpcsOpIGljaSBwb3VyIHNpbXBsaWZpZXIuXHJcbiAgICAgICAgICAgICAgICAvLyBPbiBtZXQgw6Agam91ciB0ZXh0ZXMsIHRpdHJlcywgY2hvaXggbXVzaXF1ZS9zdGF0cy5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnRpY2xlRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NzOiBibG9jcy5tYXAoKGJsb2MsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5hbENvbnRlbnQgPSBibG9jLmNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbiByZWNvbnN0cnVpdCBsZSBmb3JtYXQgc3DDqWNpYWwgcG91ciBsZXMgc3RhdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2MudHlwZSA9PT0gJ3N0YXRzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2kgbCd1dGlsaXNhdGV1ciBhIGNoYW5nw6kgbCdVUkwgdmlhIGxlIHNlbGVjdCwgYydlc3QgZGFucyBibG9jLm1lZGlhVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbENvbnRlbnQgPSBgJHtibG9jLnZpelR5cGV9Ojoke2Jsb2MubWVkaWFVcmx9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChibG9jLnR5cGUgPT09ICdtdXNpYycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQ29udGVudCA9IGJsb2MubWVkaWFVcmw7IC8vIExlIG5vbSBkdSBmaWNoaWVyIGNob2lzaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJsb2MudHlwZSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2kgcGFzIGRlIG5vdXZlYXUgZmljaGllciwgb24gZ2FyZGUgbCdhbmNpZW5uZSBVUkxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQ29udGVudCA9IGJsb2MubWVkaWFVcmw7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdHJ1Y3R1cmUgZCd1biBibG9jIHBvdXIgbCdBUElcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY1BheWxvYWQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBibG9jLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaW5kZXggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZmluYWxDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaSBsZSBibG9jIGF2YWl0IGTDqWrDoCB1biBJRCwgb24gbCdlbnZvaWUgcG91ciBsZSBtZXR0cmUgw6Agam91ciAoYXUgbGlldSBkZSBsZSByZWNyw6llcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2MuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NQYXlsb2FkWydAaWQnXSA9IGAvYXBpL2Jsb2NzLyR7YmxvYy5pZH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmxvY1BheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vbWVyZ2UtcGF0Y2granNvbicgLy8gU3RhbmRhcmQgQVBJIFBsYXRmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhcnRpY2xlRGF0YSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTGUgcsOpY2l0IGEgw6l0w6kgcsOpw6ljcml0IGF2ZWMgc3VjY8OocyAhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSBtb2RpZmljYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g4pyoIE1PREUgQ1LDiUFUSU9OIChQT1NUIEZvcm1EYXRhKVxyXG4gICAgICAgICAgICAgICAgLy8gQydlc3QgdG9uIGNvZGUgZCdvcmlnaW5lIHF1aSBnw6hyZSBiaWVuIGwndXBsb2FkIGluaXRpYWxcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdW1tYXJ5Jywgc3VtbWFyeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYmxvY3MuZm9yRWFjaCgoYmxvYywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVt0eXBlXWAsIGJsb2MudHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bcG9zaXRpb25dYCwgaW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnaDInLCAncGFyYWdyYXBoJ10uaW5jbHVkZXMoYmxvYy50eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVtjb250ZW50XWAsIGJsb2MuY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9jLnR5cGUgPT09ICdpbWFnZScgJiYgYmxvYy5maWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW2ltYWdlRmlsZV1gLCBibG9jLmZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2MudHlwZSA9PT0gJ3N0YXRzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVt2aXpUeXBlXWAsIGJsb2Mudml6VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW2NzdlBhdGhdYCwgYmxvYy5tZWRpYVVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnbXVzaWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW211c2ljRmlsZU5hbWVdYCwgYmxvYy5tZWRpYVVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jdXN0b20vYXJ0aWNsZXMvY3JlYXRlJywgeyBcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAgfSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJWb3RyZSByw6ljaXQgYSDDqXTDqSBncmF2w6kgYXZlYyBzdWNjw6hzICFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKCk7IFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBcIiArIChlcnJvckRhdGEubWVzc2FnZSB8fCBcIlByb2Jsw6htZSBzZXJ2ZXVyXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZS5cIik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcC00IHN1ciBtb2JpbGUsIG1heC13LTR4bCBwb3VyIGxpbWl0ZXIgc3VyIGRlc2t0b3BcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgcC00IG1kOnAtOCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctMnhsIG1heC13LTR4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IFRhaWxsZSB0aXRyZSAqL31cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNiBtZDptYi04IHRleHQtY2VudGVyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAge2lkID8gJ01vZGlmaWVyIGxhIENocm9uaXF1ZScgOiAnTm91dmVsbGUgQ2hyb25pcXVlJ31cclxuICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogcC0zIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgdGV4dC13aGl0ZSBwLTMgbWQ6cC00IHRleHQteGwgbWQ6dGV4dC0yeGwgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZFwiIHBsYWNlaG9sZGVyPVwiVGl0cmUuLi5cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3N1bW1hcnl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VtbWFyeShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCB0ZXh0LXN0b25lLTMwMCBwLTMgbWQ6cC00IGgtMjQgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZFwiIHBsYWNlaG9sZGVyPVwiUsOpc3Vtw6kuLi5cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IG1iLThcIj5cclxuICAgICAgICAgICAgICAgIHtibG9jcy5tYXAoKGJsb2MsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBwLTQgc3VyIG1vYmlsZVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtibG9jLmlkIHx8IGluZGV4fSBjbGFzc05hbWU9XCJiZy1zdG9uZS04MDAvNTAgcC00IG1kOnAtNiBib3JkZXItbC00IGJvcmRlci12aWtpbmctZ29sZCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVCbG9jKGluZGV4KX0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXJlZC01MDAgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYW5zaXRpb24gcC0yXCI+U3VwcHJpbWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIG1iLTQgdHJhY2tpbmctd2lkZXN0XCI+QmxvYyB7aW5kZXggKyAxfSA6IHtibG9jLnR5cGV9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEgyICYgUGFyYWdyYXBoICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAnaDInICYmIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtibG9jLmNvbnRlbnR9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ2NvbnRlbnQnLCBlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC13aGl0ZSBmb250LWJvbGRcIiBwbGFjZWhvbGRlcj1cIlNvdXMtdGl0cmUuLi5cIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ3BhcmFncmFwaCcgJiYgPHRleHRhcmVhIHZhbHVlPXtibG9jLmNvbnRlbnR9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ2NvbnRlbnQnLCBlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC1zdG9uZS0zMDAgaC0zMlwiIHBsYWNlaG9sZGVyPVwiVGV4dGUuLi5cIiAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJbWFnZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ2ltYWdlJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaWQgJiYgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRmlsZUNoYW5nZShpbmRleCwgZSl9IGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwIHRleHQtc20gdy1mdWxsXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MubWVkaWFVcmwgJiYgPGltZyBzcmM9e2Jsb2MubWVkaWFVcmx9IGFsdD1cIlByZXZpZXdcIiBjbGFzc05hbWU9XCJtdC00IG1heC1oLTQwIGJvcmRlciBib3JkZXItc3RvbmUtNjAwXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdGF0cyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ3N0YXRzJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IGdyaWQtY29scy0xIHN1ciBtb2JpbGUgcG91ciBlbXBpbGVyIGNvbnRyw7RsZXMgZXQgZ3JhcGhpcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHRleHQteHMgbWItMSBibG9jayB1cHBlcmNhc2UgZm9udC1ib2xkXCI+RG9ubsOpZXMgKENTVik8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICdtZWRpYVVybCcsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2MubWVkaWFVcmwgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0gQ2hvaXNpciB1biBqZXUgZGUgZG9ubsOpZXMgLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShkYXRhc2V0TGlicmFyeSkgJiYgZGF0YXNldExpYnJhcnkubWFwKGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZC5pZH0gdmFsdWU9e2Quc291cmNlfT57ZC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHRleHQteHMgbWItMSBibG9jayB1cHBlcmNhc2UgZm9udC1ib2xkXCI+VHlwZSBkZSBHcmFwaGlxdWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1snYmFyJywgJ2xpbmUnLCAncGllJ10ubWFwKHR5cGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICd2aXpUeXBlJywgdHlwZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTIgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIGJvcmRlciB0cmFuc2l0aW9uIGZsZXgtMSBtZDpmbGV4LW5vbmUgJHtibG9jLnZpelR5cGUgPT09IHR5cGUgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBib3JkZXItdmlraW5nLWdvbGQnIDogJ2JnLWJsYWNrIHRleHQtc3RvbmUtNTAwIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6dGV4dC13aGl0ZSd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svMjAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtWzIwMHB4XSByb3VuZGVkIHAtMiBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MubWVkaWFVcmwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgbWluLWgtWzIwMHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3N2Q2hhcnQgY3N2VXJsPXtibG9jLm1lZGlhVXJsfSB2aXpUeXBlPXtibG9jLnZpelR5cGUgfHwgJ2Jhcid9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNjAwIHRleHQteHMgaXRhbGljXCI+U8OpbGVjdGlvbm5leiB1biBmaWNoaWVyLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTXVzaXF1ZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ211c2ljJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ21lZGlhVXJsJywgZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0zIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jLm1lZGlhVXJsIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIENob2lzaXIgdW5lIG3DqWxvZGllIC0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge211c2ljTGlicmFyeSAmJiBPYmplY3QuZW50cmllcyhtdXNpY0xpYnJhcnkpLm1hcCgoW2ZvbGRlciwgZmlsZXNdKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRncm91cCBrZXk9e2ZvbGRlcn0gbGFiZWw9e2ZvbGRlci50b1VwcGVyQ2FzZSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KGZpbGVzKSAmJiBmaWxlcy5tYXAoZmlsZSA9PiA8b3B0aW9uIGtleT17ZmlsZX0gdmFsdWU9e2Ake2ZvbGRlcn0vJHtmaWxlfWB9PntmaWxlfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0Z3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IEJhcnJlIGQnb3V0aWxzIHJlc3BvbnNpdmUgYXZlYyBmbGV4LXdyYXAgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTIganVzdGlmeS1jZW50ZXIgbWItMTAgcGItMTAgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJUaXRyZSBIMlwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ2gyJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIlBhcmFncmFwaGVcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdwYXJhZ3JhcGgnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiSW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdpbWFnZScpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJHcmFwaGlxdWVcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdzdGF0cycpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJNdXNpcXVlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnbXVzaWMnKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17bG9hZGluZ30gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayB1cHBlcmNhc2UgcHktNCBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LVswXzBfMjBweF9yZ2JhKDIxMiwxNzUsNTUsMC40KV0gZGlzYWJsZWQ6b3BhY2l0eS01MCB0ZXh0LXNtIG1kOnRleHQtYmFzZSB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKGlkID8gJ1LDqcOpY3JpdHVyZS4uLicgOiAnR3JhdnVyZSBlbiBjb3Vycy4uLicpIDogKGlkID8gJ01ldHRyZSDDoCBqb3VyIGxlIFLDqWNpdCcgOiAnUHVibGllciBsYSBDaHJvbmlxdWUnKX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIE1PRElGIDogQm91dG9uIHJlc3BvbnNpdmUgKGZsZXgtZ3JvdylcclxuY29uc3QgVG9vbEJ0biA9ICh7IGxhYmVsLCBvbkNsaWNrIH0pID0+IChcclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT1cInB4LTQgcHktMyBtZDpweS0yIGJnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTMwMCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciBmbGV4LWdyb3cgbWQ6ZmxleC1ncm93LTAgcm91bmRlZFwiPlxyXG4gICAgICAgICsge2xhYmVsfVxyXG4gICAgPC9idXR0b24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlRm9ybTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQ3N2Q2hhcnQgZnJvbSBcIi4vQ3N2Q2hhcnRcIjtcclxuaW1wb3J0IFZpa2luZ1BsYXllciBmcm9tIFwiLi9WaWtpbmdQbGF5ZXJcIjtcclxuaW1wb3J0IENvbW1lbnRTZWN0aW9uIGZyb20gXCIuL0NvbW1lbnRTZWN0aW9uXCI7XHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gXCIuL1N0YXJSYXRpbmdcIjtcclxuXHJcbmNvbnN0IEFydGljbGVTaG93ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiAocmVzLm9rID8gcmVzLmpzb24oKSA6IFByb21pc2UucmVqZWN0KFwiRXJyZXVyXCIpKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9ubsOpZXMgcmXDp3VlcyA6XCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1nb2xkIHAtMTAgYW5pbWF0ZS1wdWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgSW52b2NhdGlvbiBkdSByw6ljaXQuLi5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIGlmICghYXJ0aWNsZSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcmVkLTUwMCBwLTEwXCI+XHJcbiAgICAgICAgICAgICAgICBQYXJjaGVtaW4gaW50cm91dmFibGUuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgLy8gLS0tIExPR0lRVUUgRCdFWFRSQUNUSU9OIC0tLVxyXG4gICAgbGV0IGN1c3RvbVN0eWxlcyA9IHt9O1xyXG4gICAgY29uc3QgcmF3Q29uZmlnID0gYXJ0aWNsZS5kZXNpZ25Db25maWc7XHJcblxyXG4gICAgaWYgKHJhd0NvbmZpZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGN1c3RvbVN0eWxlcyA9XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgcmF3Q29uZmlnID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBKU09OLnBhcnNlKHJhd0NvbmZpZylcclxuICAgICAgICAgICAgICAgICAgICA6IHJhd0NvbmZpZztcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgZGUgZMOpY29kYWdlIGRlcyBzdHlsZXNcIiwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBEw4lGSU5JVElPTiBERVMgQ09VTEVVUlMgLS0tXHJcbiAgICAvLyBPbiB1dGlsaXNlIGxlcyB2YWxldXJzIGRlIGxhIEJERCwgc2lub24gYmxhbmMgcGFyIGTDqWZhdXQgKHNlcmEgZ8OpcsOpIHBhciBsYSBjbGFzc2UgQ1NTKVxyXG4gICAgY29uc3QgZmluYWxUaXRsZUNvbG9yID0gY3VzdG9tU3R5bGVzLnRpdGxlQ29sb3IgfHwgXCIjZmZmZmZmXCI7XHJcbiAgICBjb25zdCBmaW5hbENvbnRlbnRCZyA9IGN1c3RvbVN0eWxlcy5jb250ZW50QmcgfHwgXCJyZ2JhKDQxLCAzNywgMzYsIDAuNSlcIjtcclxuXHJcbiAgICBjb25zdCBtdXNpY0Jsb2MgPSBhcnRpY2xlLmJsb2NzPy5maW5kKChiKSA9PiBiLnR5cGUgPT09IFwibXVzaWNcIik7XHJcbiAgICBjb25zdCBtdXNpY1NyYyA9IG11c2ljQmxvYyA/IGAvbXVzaXF1ZS8ke211c2ljQmxvYy5jb250ZW50fWAgOiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRCbG9jcyA9IGFydGljbGUuYmxvY3NcclxuICAgICAgICA/IFsuLi5hcnRpY2xlLmJsb2NzXVxyXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGIpID0+IGIudHlwZSAhPT0gXCJtdXNpY1wiKVxyXG4gICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbilcclxuICAgICAgICA6IFtdO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVJhdGUgPSBhc3luYyAoc2NvcmUpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgaWYgKCF0b2tlbikgcmV0dXJuIGFsZXJ0KFwiSWwgZmF1dCDDqnRyZSBjb25uZWN0w6kgcG91ciBub3RlciAhXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcmF0aW5nc1wiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZTogYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlZvdHJlIG5vdGUgYSDDqXTDqSBncmF2w6llICFcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBPcHRpb25uZWwgOiBSZWNoYXJnZXIgbCdhcnRpY2xlIHBvdXIgdm9pciBsYSBub3V2ZWxsZSBtb3llbm5lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHAtNCBzdXIgbW9iaWxlLCBwLTggc3VyIGRlc2t0b3BcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHAtNCBtZDpwLTggbWluLWgtc2NyZWVuIGJnLXN0b25lLTkwMCBtZDpib3JkZXIteCBib3JkZXItc3RvbmUtODAwIHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiBFTi1Uw4pURSA6IEJvdXRvbiBSZXRvdXIgZXQgTm90YXRpb24gKi99XHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IGZsZXgtY29sLXJldmVyc2Ugc3VyIG1vYmlsZSBwb3VyIG1ldHRyZSBsZSByZXRvdXIgZW4gYmFzIG91IGZsZXgtY29sIGNsYXNzaXF1ZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtZDppdGVtcy1jZW50ZXIgbWItNiBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9mb3J1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC12aWtpbmctZ29sZCBpbmxpbmUtYmxvY2sgdGV4dC14cyBtZDp0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3Qgb3JkZXItMiBtZDpvcmRlci0xXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDihpAgUmV0b3VyIGF1IEhhbGxcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGUgcG91ciBjZW50cmVyIGxhIG5vdGF0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtZDpqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTQgdy1mdWxsIG1kOnctYXV0byBvcmRlci0xIG1kOm9yZGVyLTIgYmctc3RvbmUtODAwLzUwIHAtMyByb3VuZGVkIG1kOmJnLXRyYW5zcGFyZW50IG1kOnAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVJZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSYXRpbmc9e2FydGljbGUuYXZlcmFnZVJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRlPXtoYW5kbGVSYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDAgdGV4dC14cyBtZDp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1veWVubmUgOiB7YXJ0aWNsZS5hdmVyYWdlUmF0aW5nIHx8IFwiMFwifS81XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFRJVFJFICovfVxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwiLS1hcnRpY2xlLXRpdGxlLWNvbG9yXCI6IGZpbmFsVGl0bGVDb2xvciB9fVxyXG4gICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB0ZXh0LTN4bCBtb2JpbGUsIGJyZWFrLXdvcmRzIHBvdXIgw6l2aXRlciBkw6lib3JkZW1lbnRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtZHluYW1pYy10aXRsZSB0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWRyYWdvbiBtYi02IHRleHQtY2VudGVyIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZHJvcC1zaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGJyZWFrLXdvcmRzIGxlYWRpbmctdGlnaHRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSw4lTVU3DiSAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBmaW5hbENvbnRlbnRCZyB9fVxyXG4gICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBwLTUgc3VyIG1vYmlsZSwgdGV4dC1iYXNlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTUgbWQ6cC04IGJvcmRlci1sLTQgYm9yZGVyLXZpa2luZy1nb2xkIG1iLTggaXRhbGljIHRleHQtc3RvbmUtMzAwIHRleHQtYmFzZSBtZDp0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBzaGFkb3ctaW5uZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIHRleHQtanVzdGlmeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlLnN1bW1hcnl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge211c2ljU3JjICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VmlraW5nUGxheWVyIHNyYz17bXVzaWNTcmN9IGF1dG9QbGF5PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktOCBtZDpzcGFjZS15LTEyXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudEJsb2NzLm1hcCgoYmxvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYmxvYy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHRleHQtMnhsIG1vYmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBib3JkZXItYiBib3JkZXItc3RvbmUtNzAwIHBiLTIgbXQtOCBicmVhay13b3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicGFyYWdyYXBoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB0ZXh0LWJhc2UgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtMzAwIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyB3aGl0ZXNwYWNlLXByZS1saW5lIHRleHQtanVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Jsb2MuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIklsbHVzdHJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IG1heC13LWZ1bGwgcG91ciBuZSBwYXMgZMOpcGFzc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LWZ1bGwgbWQ6bWF4LWgtWzUwMHB4XSBib3JkZXItNCBib3JkZXItc3RvbmUtODAwIHNoYWRvdy14bCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdGF0c1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidml6XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGJsb2MuY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYmxvYy5jb250ZW50LnNwbGl0KFwiOjpcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC00IG1kOnAtNiByb3VuZGVkLWxnIG15LTggc2hhZG93LWlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtYm9sZCB0ZXh0LXhzIG1kOnRleHQtc20gdXBwZXJjYXNlIG1iLTQgdHJhY2tpbmctd2lkZXN0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDwn5OKIERvbm7DqWVzIGR1IENsYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogaC02NCBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgbWQ6aC05NiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENzdkNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3N2VXJsPXtwYXJ0c1sxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXpUeXBlPXtwYXJ0c1swXSB8fCBcImJhclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBtZDptdC0yMCBwdC04IG1kOnB0LTEwIGJvcmRlci10IGJvcmRlci1zdG9uZS04MDAgdGV4dC1jZW50ZXIgdGV4dC1zdG9uZS01MDAgdGV4dC1bMTBweF0gbWQ6dGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBHcmF2w6kgcGFyIHthcnRpY2xlLmF1dGhvcj8ucHNldWRvIHx8IFwiVW4gw6ljbGFpcmV1clwifSDigKJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUoYXJ0aWNsZS5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxDb21tZW50U2VjdGlvbiBhcnRpY2xlSWQ9e2lkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlU2hvdztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFNvdXMtY29tcG9zYW50IHBvdXIgVU4gY29tbWVudGFpcmUgKHLDqWN1cnNpZilcclxuY29uc3QgQ29tbWVudEl0ZW0gPSAoeyBjb21tZW50LCBvblZvdGUsIG9uUmVwbHksIGFydGljbGVJZCwgY2FuSW50ZXJhY3QgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dSZXBseUZvcm0sIHNldFNob3dSZXBseUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlcGx5Q29udGVudCwgc2V0UmVwbHlDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlcGx5U3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb25SZXBseShyZXBseUNvbnRlbnQsIGNvbW1lbnQuaWQpO1xyXG4gICAgICAgIHNldFJlcGx5Q29udGVudChcIlwiKTtcclxuICAgICAgICBzZXRTaG93UmVwbHlGb3JtKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHBsLTIgb3UgcGwtNCBzZWxvbiBsJ8OpY3JhbiBwb3VyIGdhZ25lciBkZSBsYSBwbGFjZSBlbiBwcm9mb25kZXVyXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItbC0yIGJvcmRlci1zdG9uZS03MDAgcGwtMyBtZDpwbC00IG10LTQgbWItMlwiPlxyXG4gICAgICAgICAgICB7LyogRU4tVMOKVEUgOiBBdXRldXIgKyBTY29yZSAqL31cclxuICAgICAgICAgICAgey8qIE1PRElGIDogZmxleC13cmFwIHBvdXIgcXVlIMOnYSBwYXNzZSDDoCBsYSBsaWduZSBzdXIgdHLDqHMgcGV0aXQgw6ljcmFuICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LVsxMHB4XSBtZDp0ZXh0LXhzIHRleHQtc3RvbmUtNDAwIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXZpa2luZy1nb2xkIHRleHQtc20gbWQ6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQuYXV0aG9yPy5wc2V1ZG8gfHwgXCJWaWtpbmcgQW5vbnltZVwifVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+4oCiIHtjb21tZW50LnNjb3JlfSBwb2ludHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICDigKIge25ldyBEYXRlKGNvbW1lbnQuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQ09OVEVOVSAqL31cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS0yMDAgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgbWItMiBicmVhay13b3Jkc1wiPlxyXG4gICAgICAgICAgICAgICAge2NvbW1lbnQuY29udGVudH1cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgey8qIPCflJIgQUNUSU9OUyA6IFZvdGUgJiBSw6lwb25kcmUgKi99XHJcbiAgICAgICAgICAgIHtjYW5JbnRlcmFjdCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHRleHQtWzEwcHhdIG1kOnRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXN0b25lLTUwMCBzZWxlY3Qtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBtZDpnYXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGUoY29tbWVudC5pZCwgXCJ1cFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JlZW4tNTAwIHAtMSBtZDpwLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDilrIgVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZShjb21tZW50LmlkLCBcImRvd25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXJlZC01MDAgcC0xIG1kOnAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWvCBEb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1JlcGx5Rm9ybSghc2hvd1JlcGx5Rm9ybSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtd2hpdGUgcC0xIG1kOnAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSw6lwb25kcmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIEZPUk1VTEFJUkUgREUgUsOJUE9OU0UgKi99XHJcbiAgICAgICAgICAgIHtzaG93UmVwbHlGb3JtICYmIGNhbkludGVyYWN0ICYmIChcclxuICAgICAgICAgICAgICAgIC8vIE1PRElGIDogZmxleC1jb2wgc3VyIG1vYmlsZSBwb3VyIGJvdXRvbiBsYXJnZVxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlUmVwbHlTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC0yXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVwbHlDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlcGx5Q29udGVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMiB0ZXh0LXdoaXRlIHRleHQtc20gdy1mdWxsIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIHLDqXBvbnNlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXN0b25lLTcwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiBtZDpweS0wIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCBob3ZlcjpiZy1zdG9uZS02MDAgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbnZveWVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogUsOJQ1VSU0lWSVTDiSAqL31cclxuICAgICAgICAgICAge2NvbW1lbnQucmVwbGllcyAmJiBjb21tZW50LnJlcGxpZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5yZXBsaWVzLm1hcCgocmVwbHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlcGx5LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17cmVwbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZvdGU9e29uVm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVwbHk9e29uUmVwbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlSWQ9e2FydGljbGVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkludGVyYWN0PXtjYW5JbnRlcmFjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIENvbXBvc2FudCBQcmluY2lwYWxcclxuY29uc3QgQ29tbWVudFNlY3Rpb24gPSAoeyBhcnRpY2xlSWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbmV3Q29tbWVudCwgc2V0TmV3Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NhbkludGVyYWN0LCBzZXRDYW5JbnRlcmFjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgc2V0Q2FuSW50ZXJhY3QoISF0b2tlbik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hDb21tZW50cyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaChgL2FwaS9jb21tZW50cz9hcnRpY2xlPSR7YXJ0aWNsZUlkfSZwYXJlbnRbZXhpc3RzXT1mYWxzZWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50c0RhdGEgPVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbXCJoeWRyYTptZW1iZXJcIl0gfHwgZGF0YVtcIm1lbWJlclwiXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvb3RDb21tZW50cyA9IGNvbW1lbnRzRGF0YS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFjLnBhcmVudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjLnBhcmVudCA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMucGFyZW50ID09PSBudWxsLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzKHJvb3RDb21tZW50cyk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICB9LCBbYXJ0aWNsZUlkXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUG9zdCA9IGFzeW5jIChjb250ZW50LCBwYXJlbnRJZCA9IG51bGwpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcblxyXG4gICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJWb3VzIGRldmV6IMOqdHJlIGNvbm5lY3TDqSBwb3VyIGdyYXZlciB1biBtZXNzYWdlICFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgIGFydGljbGU6IGAvYXBpL2FydGljbGVzLyR7YXJ0aWNsZUlkfWAsXHJcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50SWQgPyBgL2FwaS9jb21tZW50cy8ke3BhcmVudElkfWAgOiBudWxsLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9jb21tZW50c1wiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hDb21tZW50cygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRJZCkgc2V0TmV3Q29tbWVudChcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVWb3RlID0gYXN5bmMgKGNvbW1lbnRJZCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGlmICghdG9rZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlNldWxzIGxlcyBndWVycmllcnMgY29ubmVjdMOpcyBwZXV2ZW50IHZvdGVyICFcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKGAvYXBpL2N1c3RvbS9jb21tZW50cy8ke2NvbW1lbnRJZH0vdm90ZS8ke2RpcmVjdGlvbn1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZldGNoQ29tbWVudHMoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMTIgcHQtNiBtZDpwdC04IGJvcmRlci10IGJvcmRlci1zdG9uZS04MDBcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi00IG1kOm1iLTYgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICBDb25zZWlsIGRlIEd1ZXJyZSAoe2NvbW1lbnRzLmxlbmd0aH0gYXZpcylcclxuICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgIHsvKiDwn5SSIEZvcm11bGFpcmUgUHJpbmNpcGFsICovfVxyXG4gICAgICAgICAgICB7Y2FuSW50ZXJhY3QgPyAoXHJcbiAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IGZsZXgtY29sIHN1ciBtb2JpbGUgcG91ciBxdWUgbGUgYm91dG9uIHByZW5uZSB0b3V0ZSBsYSBsYXJnZXVyXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDb21tZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHRleHQtc3RvbmUtMzAwIHAtMyBoLTI0IG1kOmgtMjAgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSByZXNpemUtbm9uZSBtZDpyZXNpemUteVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFpc3NleiB2b3RyZSBtYXJxdWUgc3VyIGNlIHLDqWNpdC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBvc3QobmV3Q29tbWVudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJvbGQgcHgtNiBweS0zIG1kOnB5LTAgdXBwZXJjYXNlIGhvdmVyOmJnLXdoaXRlIHRyYW5zaXRpb24gdy1mdWxsIG1kOnctYXV0byBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdyYXZlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggcC00IGJvcmRlciBib3JkZXItc3RvbmUtODAwIGJnLXN0b25lLTkwMC81MCB0ZXh0LWNlbnRlciBpdGFsaWMgdGV4dC1zdG9uZS01MDAgdGV4dC14cyBtZDp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVqb2lnbmV6IGxlIGNsYW4gKGNvbm5lY3Rlei12b3VzKSBwb3VyIHBhcnRpY2lwZXIgYXVcclxuICAgICAgICAgICAgICAgICAgICBjb25zZWlsIGRlIGd1ZXJyZSBldCB2b3Rlci5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIExpc3RlIGRlcyBjb21tZW50YWlyZXMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IG1kOnNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVm90ZT17aGFuZGxlVm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXBseT17aGFuZGxlUG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZUlkPXthcnRpY2xlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbkludGVyYWN0PXtjYW5JbnRlcmFjdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRTZWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcclxuaW1wb3J0IHsgXHJcbiAgQmFyQ2hhcnQsIEJhciwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBMZWdlbmQsIFJlc3BvbnNpdmVDb250YWluZXIsXHJcbiAgTGluZUNoYXJ0LCBMaW5lLCBQaWVDaGFydCwgUGllLCBDZWxsIFxyXG59IGZyb20gJ3JlY2hhcnRzJztcclxuXHJcbmNvbnN0IENPTE9SUyA9IFsnI2Q0YWYzNycsICcjYjkxYzFjJywgJyMxYzE5MTcnLCAnIzU3NTM0ZScsICcjYThhMjllJ107IC8vIENvdWxldXJzIFZpa2luZ1xyXG5cclxuY29uc3QgQ3N2Q2hhcnQgPSAoeyBjc3ZVcmwsIHZpelR5cGUgPSAnYmFyJyB9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWNzdlVybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGZldGNoKGNzdlVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiSW1wb3NzaWJsZSBkZSBsaXJlIGxlIHBhcmNoZW1pbiBkZSBkb25uw6llc1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGNzdlRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgUGFwYS5wYXJzZShjc3ZUZXh0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNUeXBpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2tpcEVtcHR5TGluZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzdWx0cy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihcIkxlIGZpY2hpZXIgZXN0IGlsbGlzaWJsZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtjc3ZVcmxdKTtcclxuXHJcbiAgICBpZiAoIWNzdlVybCkgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGl0YWxpYyB0ZXh0LXhzIHRleHQtY2VudGVyIHAtNFwiPkF1Y3VuZSBkb25uw6llIHPDqWxlY3Rpb25uw6llLjwvcD47XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsXCI+PHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBhbmltYXRlLXB1bHNlIHRleHQteHNcIj5Ew6ljaGlmZnJhZ2UgZGVzIHJ1bmVzLi4uPC9wPjwvZGl2PjtcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXhzIHRleHQtY2VudGVyIHAtNFwiPkVycmV1ciA6IHtlcnJvcn08L3A+O1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdGV4dC14cyB0ZXh0LWNlbnRlciBwLTRcIj5MZSBmaWNoaWVyIGVzdCB2aWRlLjwvcD47XHJcblxyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGFbMF0pO1xyXG4gICAgY29uc3QgeEtleSA9IGtleXNbMF07XHJcbiAgICBjb25zdCB5S2V5ID0ga2V5c1sxXTtcclxuXHJcbiAgICAvLyBNT0RJRiA6IFN0eWxlIGNvbW11biBwb3VyIGxlcyBheGVzIChwb2xpY2UgcGx1cyBwZXRpdGUpXHJcbiAgICBjb25zdCBheGlzU3R5bGUgPSB7IGZvbnRTaXplOiAnMTBweCcsIGZpbGw6ICcjYThhMjllJyB9O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckNoYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAodml6VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmVDaGFydCBkYXRhPXtkYXRhfSBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMjAsIGxlZnQ6IDAsIGJvdHRvbTogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgc3Ryb2tlPVwiIzQ0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PXt4S2V5fSBzdHJva2U9XCIjZDRhZjM3XCIgdGljaz17YXhpc1N0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WUF4aXMgc3Ryb2tlPVwiI2Q0YWYzN1wiIHRpY2s9e2F4aXNTdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxYzE5MTcnLCBib3JkZXJDb2xvcjogJyNkNGFmMzcnLCBjb2xvcjogJyNmZmYnLCBmb250U2l6ZTogJzEycHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWdlbmQgd3JhcHBlclN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIHBhZGRpbmdUb3A6ICcxMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PXt5S2V5fSBzdHJva2U9XCIjZDRhZjM3XCIgc3Ryb2tlV2lkdGg9ezN9IGRvdD17eyByOiA0IH19IGFjdGl2ZURvdD17eyByOiA2IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlICdwaWUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UGllQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeT1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbExpbmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBMYWJlbCBzaW1wbGlmacOpIHBvdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17KHsgcGVyY2VudCB9KSA9PiBgJHsocGVyY2VudCAqIDEwMCkudG9GaXhlZCgwKX0lYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyUmFkaXVzPVwiNzAlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzg4ODRkOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PXt5S2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUtleT17eEtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChlbnRyeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCBrZXk9e2BjZWxsLSR7aW5kZXh9YH0gZmlsbD17Q09MT1JTW2luZGV4ICUgQ09MT1JTLmxlbmd0aF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QaWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnRTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWMxOTE3JywgYm9yZGVyQ29sb3I6ICcjZDRhZjM3JywgY29sb3I6ICcjZmZmJywgZm9udFNpemU6ICcxMnB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVnZW5kIHdyYXBwZXJTdHlsZT17eyBmb250U2l6ZTogJzEwcHgnIH19IGxheW91dD1cImhvcml6b250YWxcIiB2ZXJ0aWNhbEFsaWduPVwiYm90dG9tXCIgYWxpZ249XCJjZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGllQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlICdiYXInOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8QmFyQ2hhcnQgZGF0YT17ZGF0YX0gbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDIwLCBsZWZ0OiAwLCBib3R0b206IDUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiM0NDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT17eEtleX0gc3Ryb2tlPVwiI2Q0YWYzN1wiIHRpY2s9e2F4aXNTdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFlBeGlzIHN0cm9rZT1cIiNkNGFmMzdcIiB0aWNrPXtheGlzU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGN1cnNvcj17e2ZpbGw6ICcjMzMzJ319IGNvbnRlbnRTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWMxOTE3JywgYm9yZGVyQ29sb3I6ICcjZDRhZjM3JywgY29sb3I6ICcjZmZmJywgZm9udFNpemU6ICcxMnB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVnZW5kIHdyYXBwZXJTdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBwYWRkaW5nVG9wOiAnMTBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhciBkYXRhS2V5PXt5S2V5fSBmaWxsPVwiI2Q0YWYzN1wiIHJhZGl1cz17WzQsIDQsIDAsIDBdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IGgtZnVsbCBldCB3LWZ1bGwgcG91ciBwcmVuZHJlIHRvdXQgbCdlc3BhY2UgZGlzcG9uaWJsZSBkdSBwYXJlbnRcclxuICAgICAgICAvLyBMZSBwYWRkaW5nIGVzdCBnw6lyw6kgcGFyIGxlIHBhcmVudCAoQXJ0aWNsZUZvcm0vU2hvdylcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgbWluLWgtWzI1MHB4XVwiPlxyXG4gICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyQ2hhcnQoKX1cclxuICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENzdkNoYXJ0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcclxuXHJcbmNvbnN0IERhdGFQcm92aWRlclNwYWNlID0gKHsgZGF0YXNldHMgfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaGVhZGVycywgc2V0SGVhZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY29sdW1uTWFwcGluZywgc2V0Q29sdW1uTWFwcGluZ10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZGF0YXNldE5hbWUsIHNldERhdGFzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNldEZpbGUoc2VsZWN0ZWRGaWxlKTtcclxuICAgICAgICBzZXREYXRhc2V0TmFtZShzZWxlY3RlZEZpbGUubmFtZS5yZXBsYWNlKCcuY3N2JywgJycpKTtcclxuXHJcbiAgICAgICAgUGFwYS5wYXJzZShzZWxlY3RlZEZpbGUsIHtcclxuICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcclxuICAgICAgICAgICAgcHJldmlldzogNSxcclxuICAgICAgICAgICAgY29tcGxldGU6IChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xzID0gT2JqZWN0LmtleXMocmVzdWx0cy5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXJzKGNvbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByZXZpZXcocmVzdWx0cy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsTWFwcGluZyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHMuZm9yRWFjaChoID0+IGluaXRpYWxNYXBwaW5nW2hdID0gJ2NhdGVnb3JpY2FsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29sdW1uTWFwcGluZyhpbml0aWFsTWFwcGluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlVHlwZSA9IChoZWFkZXIpID0+IHtcclxuICAgICAgICBzZXRDb2x1bW5NYXBwaW5nKHByZXYgPT4gKHtcclxuICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgW2hlYWRlcl06IHByZXZbaGVhZGVyXSA9PT0gJ2NhdGVnb3JpY2FsJyA/ICdudW1lcmljYWwnIDogJ2NhdGVnb3JpY2FsJ1xyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGFzZXROYW1lLFxyXG4gICAgICAgICAgICBzb3VyY2U6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbk1hcHBpbmcsXHJcbiAgICAgICAgICAgICAgICB1cGxvYWRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICByb3dDb3VudDogcHJldmlldy5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZGF0YXNldHMnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vbGQranNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlBhcmNoZW1pbiBkZSBkb25uw6llcyBlbnJlZ2lzdHLDqSBkYW5zIGxhIGJpYmxpb3Row6hxdWUgZCdPZGluICFcIik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlLDqXBvbnNlIGR1IHNlcnZldXIgOlwiLCBlcnJvckRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBMZSBTY3JpYmUgcmVmdXNlIGxlIGZvcm1hdCBkdSBmaWNoaWVyLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgcsOpc2VhdVwiLCBlcnJvcik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHNwYWNlLXktNCBzdXIgbW9iaWxlIHBvdXIgY29tcGFjdGVyXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWQ6c3BhY2UteS02IGFuaW1hdGUtZmFkZUluXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogRm9ybXVsYWlyZSBkJ2ltcG9ydGF0aW9uICovfVxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBwLTQgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBwLTQgbWQ6cC02IGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQtbGcgbWQ6dGV4dC14bCBtYi00IHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTm91dmVsbGUgQXJjaGl2ZSBkZSBEb25uw6llc1xyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC00IG1kOmdhcC02IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXN0b25lLTUwMCB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ibGFjayBtYi0yXCI+RmljaGllciBDU1YgdW5pcXVlbWVudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiLmNzdlwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHRleHQtc20gdGV4dC1zdG9uZS00MDAgZmlsZTptci00IGZpbGU6cHktMiBmaWxlOnB4LTQgZmlsZTpyb3VuZGVkIGZpbGU6Ym9yZGVyLTAgZmlsZTp0ZXh0LXhzIGZpbGU6Zm9udC1ibGFjayBmaWxlOnVwcGVyY2FzZSBmaWxlOmJnLXZpa2luZy1nb2xkIGZpbGU6dGV4dC1ibGFjayBob3ZlcjpmaWxlOmJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmlsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctYXV0byBwdC0yIG1kOnB0LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXBsb2FkfSBkaXNhYmxlZD17aXNVcGxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctYXV0byBiZy12aWtpbmctZmlyZSB0ZXh0LXdoaXRlIHB5LTMgcHgtOCBmb250LWJsYWNrIHVwcGVyY2FzZSB0ZXh0LXhzIHNoYWRvdy1sZyBob3ZlcjpzY2FsZS0xMDUgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Z3JheXNjYWxlIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1VwbG9hZGluZyA/ICdHcmF2dXJlLi4uJyA6ICdTY2VsbGVyIGxcXCdBcmNoaXZlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIEFwZXLDp3UgVGVjaG5pcXVlICovfVxyXG4gICAgICAgICAgICB7cHJldmlldy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwLzgwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMTAgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzQwIHAtMyBib3JkZXItYiBib3JkZXItd2hpdGUvNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LWJsYWNrIHVwcGVyY2FzZSB0ZXh0LXZpa2luZy1nb2xkLzUwXCI+QW5hbHlzZSBkZSBsYSBzdHJ1Y3R1cmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIExlIHNjcm9sbCBob3Jpem9udGFsIGVzdCBnw6lyw6kgaWNpIHBhciBvdmVyZmxvdy14LWF1dG8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxlZnQgYm9yZGVyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWJsYWNrLzYwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzLm1hcChoID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogbWluLXcgcG91ciBmb3JjZXIgbGEgbGFyZ2V1ciBldCBhY3RpdmVyIGxlIHNjcm9sbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aH0gY2xhc3NOYW1lPVwicC0zIG1kOnAtNCBib3JkZXItciBib3JkZXItd2hpdGUvNSBtaW4tdy1bMTQwcHhdIGFsaWduLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcGFyY2htZW50IHRleHQteHMgZm9udC1ib2xkIG1iLTIgdHJ1bmNhdGVcIiB0aXRsZT17aH0+e2h9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlVHlwZShoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1bOXB4XSB3LWZ1bGwgcHgtMiBweS0xIHJvdW5kZWQtZnVsbCBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyIHRyYW5zaXRpb24tY29sb3JzIGJvcmRlciAke2NvbHVtbk1hcHBpbmdbaF0gPT09ICdudW1lcmljYWwnID8gJ2JnLWJsdWUtNjAwLzIwIHRleHQtYmx1ZS00MDAgYm9yZGVyLWJsdWUtNTAwLzMwJyA6ICdiZy1lbWVyYWxkLTYwMC8yMCB0ZXh0LWVtZXJhbGQtNDAwIGJvcmRlci1lbWVyYWxkLTUwMC8zMCd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5NYXBwaW5nW2hdID09PSAnbnVtZXJpY2FsJyA/ICfwn5SiIE51bcOpcmlxdWUnIDogJ/CflKQgQ2F0w6lnb3JpZWwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXZpZXcubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcnMubWFwKGggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogd2hpdGVzcGFjZS1ub3dyYXAgcG91ciDDqXZpdGVyIGxlcyByZXRvdXJzIMOgIGxhIGxpZ25lIG1vY2hlcyBkYW5zIGxlcyBjZWxsdWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2h9IGNsYXNzTmFtZT1cInAtMyBtZDpwLTQgdGV4dC1bMTBweF0gbWQ6dGV4dC1bMTFweF0gdGV4dC1zdG9uZS00MDAgYm9yZGVyLXIgYm9yZGVyLXdoaXRlLzUgaXRhbGljIHdoaXRlc3BhY2Utbm93cmFwIG1heC13LVsyMDBweF0gb3ZlcmZsb3ctaGlkZGVuIHRleHQtZWxsaXBzaXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvd1toXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogQXJjaGl2ZXMgZXhpc3RhbnRlcyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZC80MCBmb250LWRyYWdvbiB0ZXh0LXNtIG1iLTQgbWQ6bWItNiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8yMCBwYi0yXCI+UmVnaXN0cmVzIGTDqWrDoCBwcsOpc2VudHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBncmlkIHJlc3BvbnNpdmUgMSAtPiAyIC0+IDMgY29sb25uZXMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTMgbWQ6Z2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YXNldHM/Lmxlbmd0aCA+IDAgPyBkYXRhc2V0cy5tYXAoZHMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZHMuaWR9IGNsYXNzTmFtZT1cInAtNCBiZy1ibGFjay8yMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQvNDAgdHJhbnNpdGlvbi1hbGwgZ3JvdXAgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9udC1ib2xkIHRleHQtc20gZ3JvdXAtaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9ycyB0cnVuY2F0ZVwiIHRpdGxlPXtkcy5uYW1lfT57ZHMubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1zdG9uZS02MDAgdXBwZXJjYXNlIGZvbnQtYm9sZCBpdGFsaWMgdHJ1bmNhdGUgbWF4LXctWzYwJV1cIiB0aXRsZT17ZHMuc291cmNlfT57ZHMuc291cmNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGJnLXN0b25lLTgwMCBweC0yIHB5LTAuNSByb3VuZGVkIHRleHQtc3RvbmUtNDAwIHdoaXRlc3BhY2Utbm93cmFwXCI+e2RzLnJvd3NDb3VudH0gbGlnbmVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgcHktMTAgdGV4dC1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItc3RvbmUtODAwIHRleHQtc3RvbmUtNjAwIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYmxhY2sgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW5lIGRvbm7DqWUgbidhIMOpdMOpIGdyYXbDqWUgcG91ciBsZSBtb21lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3ZpZGVyU3BhY2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tICdqd3QtZGVjb2RlJztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBsZXQgdXNlciA9IG51bGw7XHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXNlciA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVG9rZW4gaW52YWxpZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7XHJcbiAgICAgICAgc2V0SXNNZW51T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNhblNlZURhc2hib2FyZCA9IHVzZXI/LnJvbGVzPy5pbmNsdWRlcygnUk9MRV9FRElURVVSJykgfHwgdXNlcj8ucm9sZXM/LmluY2x1ZGVzKCdST0xFX0FETUlOJyk7XHJcbiAgICBjb25zdCBjbG9zZU1lbnUgPSAoKSA9PiBzZXRJc01lbnVPcGVuKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIExhIGJhcnJlIGRlIG5hdmlnYXRpb24gcHJpbmNpcGFsZSAobGUgYmFuZGVhdSBkdSBoYXV0KVxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgYm9yZGVyLWItMiBib3JkZXItdmlraW5nLWdvbGQvNTAgcC00IHN0aWNreSB0b3AtMCB6LTUwIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTE9HTyAoWi01MCBwb3VyIHJlc3RlciBhdS1kZXNzdXMgZHUgbWVudSBwbGVpbiDDqWNyYW4pICovfVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBkcm9wLXNoYWRvdy1tZCBncm91cCB6LTUwIHJlbGF0aXZlXCIgb25DbGljaz17Y2xvc2VNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTR4bCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdXBwZXJjYXNlXCI+UmlkZXJzIG9mIEJlcms8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBCT1VUT04gQlVSR0VSIChaLTUwIHBvdXIgcmVzdGVyIGNsaXF1YWJsZSkgKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiB0ZXh0LXZpa2luZy1nb2xkIHotNTAgZm9jdXM6b3V0bGluZS1ub25lIHJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVPcGVuKCFpc01lbnVPcGVuKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXNNZW51T3BlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+4pyVPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPuKYsDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1FTlUgUFJJTkNJUEFMIC8gTU9CSUxFIE9WRVJMQVkgXHJcbiAgICAgICAgICAgICAgICAgICAgLSBmaXhlZCBpbnNldC0wIDogUHJlbmQgVE9VVCBsJ8OpY3JhblxyXG4gICAgICAgICAgICAgICAgICAgIC0gYmctc3RvbmUtOTAwIDogRm9uZCBOT0lSL0dSSVMgT1BBUVVFIChQYXMgZGUgdHJhbnNwYXJlbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgIC0gei00MCA6IEp1c3RlIHNvdXMgbGUgbG9nbyBldCBsZSBidXJnZXJcclxuICAgICAgICAgICAgICAgICAgICAtIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIDogQ2VudHJlIGxlIGNvbnRlbnUgdmVydGljYWxlbWVudCBzdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWQgaW5zZXQtMCB6LTQwIGJnLXN0b25lLTkwMCBcclxuICAgICAgICAgICAgICAgICAgICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtOCBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcclxuICAgICAgICAgICAgICAgICAgICAke2lzTWVudU9wZW4gPyAndHJhbnNsYXRlLXgtMCcgOiAndHJhbnNsYXRlLXgtZnVsbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbWQ6c3RhdGljIG1kOnRyYW5zZm9ybS1ub25lIG1kOmJnLXRyYW5zcGFyZW50IG1kOmZsZXgtcm93IG1kOmp1c3RpZnktZW5kIG1kOmgtYXV0byBtZDpwLTBcclxuICAgICAgICAgICAgICAgIGB9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBMSUVOUyBERSBOQVZJR0FUSU9OICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBzcGFjZS15LTggbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtNiB0ZXh0LTN4bCBtZDp0ZXh0LWxnIGZvbnQtZHJhZ29uIHRyYWNraW5nLXdpZGUgdGV4dC12aWtpbmctbGlnaHQgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCIgb25DbGljaz17Y2xvc2VNZW51fT5BY2N1ZWlsPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9mb3J1bVwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCIgb25DbGljaz17Y2xvc2VNZW51fT5Gb3J1bTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5TZWVEYXNoYm9hcmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCIgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzUwIHB4LTQgcHktMiBtZDpweC0yIG1kOnB5LTAuNSBob3ZlcjpiZy12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiIG9uQ2xpY2s9e2Nsb3NlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnNlaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBTRUNUSU9OIFVUSUxJU0FURVVSIChDb25uZXhpb24gLyBEw6ljb25uZXhpb24pICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTYgbWQ6Z2FwLTQgbWQ6Ym9yZGVyLWwgYm9yZGVyLXN0b25lLTcwMCBtZDpwbC02IG10LTggbWQ6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXRva2VuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtc20gZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlciBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb25cIiBvbkNsaWNrPXtjbG9zZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZXhpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIHB4LTggcHktMyBtZDpweC00IG1kOnB5LTEuNSB0ZXh0LXhsIG1kOnRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctbGdcIiBvbkNsaWNrPXtjbG9zZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWpvaW5kcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTQgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LVsxMHB4XSB0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgZm9udC1ibGFjayBpdGFsaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXI/LnBzZXVkbyB8fCBcIkd1ZXJyaWVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LVsxMHB4XSB0ZXh0LXZpa2luZy1maXJlIHVwcGVyY2FzZSBmb250LWJsYWNrIGJvcmRlciBib3JkZXItdmlraW5nLWZpcmUvMzAgcHgtNiBweS0yIG1kOnB4LTMgbWQ6cHktMSBob3ZlcjpiZy12aWtpbmctZmlyZSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVpdHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYW52YXMsIHVzZUZyYW1lLCB1c2VUaHJlZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcic7XHJcbmltcG9ydCB7IHVzZUdMVEYsIHVzZUFuaW1hdGlvbnMsIENlbnRlciwgSHRtbCwgdXNlVGV4dHVyZSwgU3RhcnMgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XHJcblxyXG5jb25zdCBNT0RFTF9QQVRIID0gJy9tb2RlbHMvbmlnaHRfZnVyeS5nbGInO1xyXG5jb25zdCBURVhUVVJFX1BBVEggPSAnL3RleHR1cmVzL25pZ2h0X2Z1cnlfc2tpbi53ZWJwJztcclxuY29uc3QgQU5JTUFUSU9OX05BTUUgPSAnTmlnaHRGdXJ5X2FybWF0dXJlQWN0aW9uJztcclxuXHJcbmZ1bmN0aW9uIERyYWdvbk1vZGVsKHsgdml0ZXNzZVJvdGF0aW9uLCB2aXRlc3NlQW5pbWF0aW9uLCBmYWN0ZXVyVGFpbGxlLCAuLi5wcm9wcyB9KSB7XHJcbiAgY29uc3QgeyBzY2VuZSwgYW5pbWF0aW9ucyB9ID0gdXNlR0xURihNT0RFTF9QQVRIKTtcclxuICBjb25zdCB0ZXh0dXJlID0gdXNlVGV4dHVyZShURVhUVVJFX1BBVEgpO1xyXG4gIGNvbnN0IHsgdmlld3BvcnQgfSA9IHVzZVRocmVlKCk7IFxyXG4gIFxyXG4gIC8vIENhbGN1bCBkZSBiYXNlIHJlc3BvbnNpdmVcclxuICBjb25zdCBiYXNlU2NhbGUgPSB2aWV3cG9ydC53aWR0aCA8IDUgPyAwLjM1IDogMC44OyBcclxuICBjb25zdCBmaW5hbFNjYWxlID0gYmFzZVNjYWxlICogZmFjdGV1clRhaWxsZTtcclxuXHJcbiAgdGV4dHVyZS5mbGlwWSA9IGZhbHNlO1xyXG4gIHRleHR1cmUuY29sb3JTcGFjZSA9ICdzcmdiJztcclxuXHJcbiAgY29uc3QgZ3JvdXAgPSB1c2VSZWYoKTtcclxuICBjb25zdCB7IGFjdGlvbnMgfSA9IHVzZUFuaW1hdGlvbnMoYW5pbWF0aW9ucywgZ3JvdXApO1xyXG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzY2VuZS50cmF2ZXJzZSgoY2hpbGQpID0+IHtcclxuICAgICAgaWYgKGNoaWxkLmlzTWVzaCkge1xyXG4gICAgICAgIGNoaWxkLm1hdGVyaWFsLm1hcCA9IHRleHR1cmU7XHJcbiAgICAgICAgY2hpbGQubWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbc2NlbmUsIHRleHR1cmVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3Rpb25zICYmIGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1tBTklNQVRJT05fTkFNRV07XHJcbiAgICAgICAgYWN0aW9uLnJlc2V0KCkuZmFkZUluKDAuNSkucGxheSgpO1xyXG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbYWN0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGlvbnMgJiYgYWN0aW9uc1tBTklNQVRJT05fTkFNRV0pIHtcclxuICAgICAgICBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXS50aW1lU2NhbGUgPSB2aXRlc3NlQW5pbWF0aW9uO1xyXG4gICAgfVxyXG4gIH0sIFt2aXRlc3NlQW5pbWF0aW9uLCBhY3Rpb25zXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUFuaW1hdGlvbiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1tBTklNQVRJT05fTkFNRV07XHJcbiAgICBpZiAoIWFjdGlvbikgcmV0dXJuO1xyXG5cclxuICAgIGlmIChpc1BsYXlpbmcpIHtcclxuICAgICAgICBhY3Rpb24ucGF1c2VkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWN0aW9uLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGlvbi5wbGF5KCk7IFxyXG4gICAgfVxyXG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG4gIH07XHJcblxyXG4gIHVzZUZyYW1lKCgpID0+IHtcclxuICAgIGlmKGdyb3VwLmN1cnJlbnQpIGdyb3VwLmN1cnJlbnQucm90YXRpb24ueSArPSB2aXRlc3NlUm90YXRpb247XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8cHJpbWl0aXZlIFxyXG4gICAgICByZWY9e2dyb3VwfSBcclxuICAgICAgb2JqZWN0PXtzY2VuZX0gXHJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFuaW1hdGlvbn1cclxuICAgICAgb25Qb2ludGVyT3Zlcj17KCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcid9XHJcbiAgICAgIG9uUG9pbnRlck91dD17KCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnYXV0byd9XHJcbiAgICAgIHNjYWxlPXtmaW5hbFNjYWxlfSBcclxuICAgICAgcG9zaXRpb249e1swLCAtMSwgMF19IFxyXG4gICAgICB7Li4ucHJvcHN9IFxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBOaWdodEZ1cnlTY2VuZSA9ICgpID0+IHtcclxuICBjb25zdCBbcm90U3BlZWQsIHNldFJvdFNwZWVkXSA9IHVzZVN0YXRlKDAuMDAxKTtcclxuICBjb25zdCBbYW5pbVNwZWVkLCBzZXRBbmltU3BlZWRdID0gdXNlU3RhdGUoMi41KTtcclxuICBjb25zdCBbc2l6ZUZhY3Rvciwgc2V0U2l6ZUZhY3Rvcl0gPSB1c2VTdGF0ZSgxKTsgXHJcbiAgY29uc3QgW2NvbnRyb2xzVmlzaWJsZSwgc2V0Q29udHJvbHNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRSb3RTcGVlZCgwLjAwMSk7XHJcbiAgICBzZXRBbmltU3BlZWQoMi41KTtcclxuICAgIHNldFNpemVGYWN0b3IoMSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gYmctWyMwNTA1MTBdXCI+XHJcbiAgICAgIFxyXG4gICAgICA8Q2FudmFzIHNoYWRvd3MgY2FtZXJhPXt7IHBvc2l0aW9uOiBbMCwgMiwgMTBdLCBmb3Y6IDQ1IH19PlxyXG4gICAgICAgIDxjb2xvciBhdHRhY2g9XCJiYWNrZ3JvdW5kXCIgYXJncz17WycjMDUwNTEwJ119IC8+XHJcbiAgICAgICAgPFN0YXJzIHJhZGl1cz17MTAwfSBkZXB0aD17NTB9IGNvdW50PXs1MDAwfSBmYWN0b3I9ezR9IHNhdHVyYXRpb249ezB9IGZhZGUgc3BlZWQ9ezF9IC8+XHJcbiAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezN9IC8+XHJcbiAgICAgICAgPGRpcmVjdGlvbmFsTGlnaHQgcG9zaXRpb249e1sxMCwgMTAsIDVdfSBpbnRlbnNpdHk9ezR9IC8+XHJcbiAgICAgICAgPHNwb3RMaWdodCBwb3NpdGlvbj17Wy01LCA1LCAxMF19IGludGVuc2l0eT17NX0gY29sb3I9XCIjYTg1NWY3XCIgLz5cclxuICAgICAgICA8c3BvdExpZ2h0IHBvc2l0aW9uPXtbMCwgNSwgLTEwXX0gaW50ZW5zaXR5PXs1fSBjb2xvcj1cIiNmZmZmZmZcIiAvPlxyXG5cclxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxIdG1sIGNlbnRlcj48ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14cyBhbmltYXRlLXB1bHNlXCI+SW52b2NhdGlvbi4uLjwvZGl2PjwvSHRtbD59PlxyXG4gICAgICAgICAgPENlbnRlciB0b3A+XHJcbiAgICAgICAgICAgIDxEcmFnb25Nb2RlbCBcclxuICAgICAgICAgICAgICAgIHZpdGVzc2VSb3RhdGlvbj17cm90U3BlZWR9IFxyXG4gICAgICAgICAgICAgICAgdml0ZXNzZUFuaW1hdGlvbj17YW5pbVNwZWVkfVxyXG4gICAgICAgICAgICAgICAgZmFjdGV1clRhaWxsZT17c2l6ZUZhY3Rvcn0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NlbnRlcj5cclxuICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICA8L0NhbnZhcz5cclxuXHJcbiAgICAgIHsvKiDwn46b77iPIEJPVVRPTiBUT0dHTEUgKE1vYmlsZSB1bmlxdWVtZW50KSAqL31cclxuICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb250cm9sc1Zpc2libGUoIWNvbnRyb2xzVmlzaWJsZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB6LTIwIGJnLWJsYWNrLzYwIGJhY2tkcm9wLWJsdXIgdGV4dC12aWtpbmctZ29sZCBwLTMgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgbWQ6aGlkZGVuIHNoYWRvdy1sZyBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbnRyb2xzVmlzaWJsZSA/ICfinJUnIDogJ+Kame+4jyd9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgey8qIPCfjpvvuI8gVUkgUEFOTkVBVSBERSBDT05UUsOUTEUgKi99XHJcbiAgICAgIHsvKiBNT0RJRiBFUkdPTk9NSVFVRSA6IFxyXG4gICAgICAgICAgLSBNb2JpbGUgOiBcImJvdHRvbS0wIHctZnVsbCByb3VuZGVkLXQtMnhsXCIgKGdsaXNzZSBkdSBiYXMpXHJcbiAgICAgICAgICAtIERlc2t0b3AgOiBcInRvcC00IHJpZ2h0LTQgdy02NCByb3VuZGVkLXhsXCIgKGZsb3R0ZSBlbiBoYXV0IMOgIGRyb2l0ZSlcclxuICAgICAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgYWJzb2x1dGUgei0xMCBiZy1ibGFjay84MCBiYWNrZHJvcC1ibHVyLW1kIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ibHVlLTUwMC8zMCBzaGFkb3ctMnhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIFN0eWxlcyBNb2JpbGUgKEJvdHRvbSBTaGVldCkgKi9cclxuICAgICAgICBib3R0b20tMCBsZWZ0LTAgdy1mdWxsIHJvdW5kZWQtdC0yeGwgcC02IHBiLThcclxuICAgICAgICAke2NvbnRyb2xzVmlzaWJsZSA/ICd0cmFuc2xhdGUteS0wIG9wYWNpdHktMTAwJyA6ICd0cmFuc2xhdGUteS1mdWxsIG9wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lJ31cclxuXHJcbiAgICAgICAgLyogU3R5bGVzIERlc2t0b3AgKEZsb2F0aW5nIEJveCkgKi9cclxuICAgICAgICBtZDpib3R0b20tYXV0byBtZDpsZWZ0LWF1dG8gbWQ6dG9wLTQgbWQ6cmlnaHQtNCBtZDp3LTY0IG1kOnJvdW5kZWQteGwgbWQ6cC00IG1kOnBiLTRcclxuICAgICAgICBtZDp0cmFuc2xhdGUteS0wIG1kOm9wYWNpdHktMTAwIG1kOnBvaW50ZXItZXZlbnRzLWF1dG9cclxuICAgICAgYH0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNCBib3JkZXItYiBib3JkZXItd2hpdGUvMTAgcGItMlwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTMwMCBmb250LWJvbGQgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICAgICAgICAgIFBhcmFtw6h0cmVzXHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIHsvKiBCb3V0b24gcmVzZXQgZGlzY3JldCAqL31cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS00MDAgaG92ZXI6dGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkIHVuZGVybGluZSBkZWNvcmF0aW9uLWRvdHRlZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFJlc2V0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogQ09OVFJPTEVTIENPTVBBQ1RTICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIHsvKiAxLiBUYWlsbGUgKi99XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgbWItMSB0ZXh0LXN0b25lLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlRhaWxsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMCBmb250LW1vbm9cIj54e3NpemVGYWN0b3IudG9GaXhlZCgxKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIiBtaW49XCIwLjFcIiBtYXg9XCIzXCIgc3RlcD1cIjAuMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzaXplRmFjdG9yfSBvbkNoYW5nZT17KGUpID0+IHNldFNpemVGYWN0b3IocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEuNSBiZy1zdG9uZS03MDAgcm91bmRlZC1sZyBhcHBlYXJhbmNlLW5vbmUgY3Vyc29yLXBvaW50ZXIgYWNjZW50LWdyZWVuLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiAyLiBSb3RhdGlvbiAqL31cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0xIHRleHQtc3RvbmUtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Vml0ZXNzZSBSb3RhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIGZvbnQtbW9ub1wiPnsocm90U3BlZWQgKiAxMDAwKS50b0ZpeGVkKDApfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIwLjA1XCIgc3RlcD1cIjAuMDAxXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JvdFNwZWVkfSBvbkNoYW5nZT17KGUpID0+IHNldFJvdFNwZWVkKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLjUgYmctc3RvbmUtNzAwIHJvdW5kZWQtbGcgYXBwZWFyYW5jZS1ub25lIGN1cnNvci1wb2ludGVyIGFjY2VudC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiAzLiBBbmltYXRpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgbWItMSB0ZXh0LXN0b25lLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlZpdGVzc2UgQW5pbWF0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTQwMCBmb250LW1vbm9cIj54e2FuaW1TcGVlZC50b0ZpeGVkKDEpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCI1XCIgc3RlcD1cIjAuMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbmltU3BlZWR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5pbVNwZWVkKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLjUgYmctc3RvbmUtNzAwIHJvdW5kZWQtbGcgYXBwZWFyYW5jZS1ub25lIGN1cnNvci1wb2ludGVyIGFjY2VudC1wdXJwbGUtNTAwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxudXNlR0xURi5wcmVsb2FkKE1PREVMX1BBVEgpO1xyXG51c2VUZXh0dXJlLnByZWxvYWQoVEVYVFVSRV9QQVRIKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5pZ2h0RnVyeVNjZW5lOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFN0YXJSYXRpbmcgPSAoeyBhcnRpY2xlSWQsIGN1cnJlbnRSYXRpbmcsIG9uUmF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IHVzZVN0YXRlKGN1cnJlbnRSYXRpbmcgfHwgMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmF0aW5nID0gKHNjb3JlKSA9PiB7XHJcbiAgICAgICAgc2V0UmF0aW5nKHNjb3JlKTtcclxuICAgICAgICBvblJhdGUoc2NvcmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMVwiPlxyXG4gICAgICAgICAgICB7WzEsIDIsIDMsIDQsIDVdLm1hcCgoc3RhcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17c3Rhcn1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHRleHQtM3hsIHN1ciBtb2JpbGUgcG91ciBmYWNpbGl0ZXIgbGUgY2xpYywgbWQ6dGV4dC0yeGwgc3VyIGRlc2t0b3BcclxuICAgICAgICAgICAgICAgICAgICAvLyBBam91dCBkZSBhY3RpdmU6c2NhbGUtMTI1IHBvdXIgdW4gZWZmZXQgXCJwb3BcIiBhdSB0b3VjaGVyXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC0zeGwgbWQ6dGV4dC0yeGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBhY3RpdmU6c2NhbGUtMTI1ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXIgPD0gKGhvdmVyIHx8IHJhdGluZykgPyBcInRleHQtdmlraW5nLWdvbGQgZHJvcC1zaGFkb3ctbWRcIiA6IFwidGV4dC1zdG9uZS02MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJhdGluZyhzdGFyKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHN0YXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIocmF0aW5nKX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17YERvbm5lciAke3N0YXJ9IMOpdG9pbGUocylgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOKYhVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJSYXRpbmc7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFZpa2luZ1BsYXllciA9ICh7IHNyYywgYXV0b1BsYXkgPSBmYWxzZSB9KSA9PiB7XHJcbiAgICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRUaW1lLCBzZXRDdXJyZW50VGltZV0gPSB1c2VTdGF0ZShcIjA6MDBcIik7XHJcbiAgICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKFwiMDowMFwiKTtcclxuICAgIGNvbnN0IFtpc0Jsb2NrZWQsIHNldElzQmxvY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIE5vdXZlYXUgc3RhdGUgcG91ciBkw6l0ZWN0ZXIgbGUgYmxvY2FnZVxyXG5cclxuICAgIC8vIEdlc3Rpb24gZGUgbCdBdXRvcGxheVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYXV0b1BsYXkgJiYgYXVkaW9SZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5UHJvbWlzZSA9IGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgICAgICBpZiAocGxheVByb21pc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcGxheVByb21pc2VcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1Y2PDqHMgOiBMZSBuYXZpZ2F0ZXVyIGEgYXV0b3Jpc8OpIGwnYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0Jsb2NrZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gw4ljaGVjIDogTGUgbmF2aWdhdGV1ciBhIGJsb3F1w6kgbCdhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dG9wbGF5IGJsb3F1w6kgKGludGVyYWN0aW9uIHJlcXVpc2UpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0Jsb2NrZWQodHJ1ZSk7IC8vIE9uIHNpZ25hbGUgcXUnaWwgZmF1dCB1bmUgYWN0aW9uIG1hbnVlbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbYXV0b1BsYXksIHNyY10pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzUGxheWluZykge1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgIHNldElzQmxvY2tlZChmYWxzZSk7IC8vIFNpIGwndXRpbGlzYXRldXIgY2xpcXVlLCBsZSBibG9jYWdlIHNhdXRlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGltZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZTtcclxuICAgICAgICBjb25zdCB0b3RhbCA9IGF1ZGlvUmVmLmN1cnJlbnQuZHVyYXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRvdGFsKSB7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzKChjdXJyZW50IC8gdG90YWwpICogMTAwKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFRpbWUoZm9ybWF0VGltZShjdXJyZW50KSk7XHJcbiAgICAgICAgICAgIHNldER1cmF0aW9uKGZvcm1hdFRpbWUodG90YWwpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlZWsgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gZS50YXJnZXQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY29uc3QgY2xpY2tYID0gZS5uYXRpdmVFdmVudC5vZmZzZXRYO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gYXVkaW9SZWYuY3VycmVudC5kdXJhdGlvbjtcclxuICAgICAgICBpZiAoZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IChjbGlja1ggLyB3aWR0aCkgKiBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZSkgPT4ge1xyXG4gICAgICAgIGlmICghdGltZSB8fCBpc05hTih0aW1lKSkgcmV0dXJuIFwiMDowMFwiO1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcclxuICAgICAgICBjb25zdCBzZWMgPSBNYXRoLmZsb29yKHRpbWUgJSA2MCk7XHJcbiAgICAgICAgcmV0dXJuIGAke21pbn06JHtzZWMgPCAxMCA/ICcwJyArIHNlYyA6IHNlY31gO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBWaXN1YWxpc2V1ciBhbmltw6lcclxuICAgIGNvbnN0IGJhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAzMCB9KS5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEgbXgtWzFweF0gcm91bmRlZC10IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke2lzUGxheWluZyA/ICdiZy12aWtpbmctZ29sZCBhbmltYXRlLWJhcicgOiAnYmctc3RvbmUtNzAwIGgtMSd9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogYCR7TWF0aC5yYW5kb20oKSAqIDAuNSArIDAuNH1zYCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaXNQbGF5aW5nID8gJzEwMCUnIDogJzEwJScgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IG15LTQgc3VyIG1vYmlsZSwgbXktOCBzdXIgZGVza3RvcCwgcC00IHN1ciBtb2JpbGUsIHAtNiBzdXIgZGVza3RvcFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTJ4bCBteC1hdXRvIG15LTQgbWQ6bXktOCBiZy1ibGFjay84MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHJvdW5kZWQtbGcgcC00IG1kOnAtNiBzaGFkb3ctWzBfMF8zMHB4X3JnYmEoMCwwLDAsMC44KV0gYmFja2Ryb3AtYmx1ci1zbSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiBNZXNzYWdlIHNpIGJsb3F1w6kgKi99XHJcbiAgICAgICAgICAgIHtpc0Jsb2NrZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrLzgwIHotMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYW5pbWF0ZS1mYWRlLWluIHAtNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdGV4dC14cyBzdXIgbW9iaWxlLCB0ZXh0LWJhc2Ugc3VyIGRlc2t0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIG1kOnB4LTYgbWQ6cHktMyBiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gc2hhZG93LVswXzBfMjBweF9yZ2JhKDIxMiwxNzUsNTUsMC42KV0gdGV4dC14cyBtZDp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIPCflIogQWN0aXZlciBsJ0FtYmlhbmNlIFNvbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8YXVkaW8gXHJcbiAgICAgICAgICAgICAgICByZWY9e2F1ZGlvUmVmfSBcclxuICAgICAgICAgICAgICAgIHNyYz17c3JjfSBcclxuICAgICAgICAgICAgICAgIG9uVGltZVVwZGF0ZT17aGFuZGxlVGltZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uRW5kZWQ9eygpID0+IHNldElzUGxheWluZyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBvbkxvYWRlZE1ldGFkYXRhPXsoZSkgPT4gc2V0RHVyYXRpb24oZm9ybWF0VGltZShlLnRhcmdldC5kdXJhdGlvbikpfSAvLyBDaGFyZ2UgbGEgZHVyw6llIGTDqHMgbGUgZMOpYnV0XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBnYXAtNCBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IG1kOmdhcC02IHJlbGF0aXZlIHotMTBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBCb3V0b24gUGxheS9QYXVzZSAqL31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHctMTIgaC0xMiBzdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMiBoLTEyIG1kOnctMTQgbWQ6aC0xNCBmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7aXNQbGF5aW5nID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgc2hhZG93LVswXzBfMTVweF9yZ2JhKDIxMiwxNzUsNTUsMC41KV0nIDogJ3RleHQtdmlraW5nLWdvbGQgaG92ZXI6YmctdmlraW5nLWdvbGQvMjAnfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzUGxheWluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01IG1kOnctNiBtZDpoLTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNiAxOWg0VjVINnYxNHptOC0xNHYxNGg0VjVoLTR6XCIvPjwvc3ZnPiBcclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy02IG1kOmgtNiB0cmFuc2xhdGUteC0wLjVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOCA1djE0bDExLTd6XCIvPjwvc3ZnPiBcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEluZm8gJiBWaXN1YWxpc2V1ciAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB0ZXh0LVs5cHhdIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LVs5cHhdIG1kOnRleHQtWzEwcHhdIHRleHQtdmlraW5nLWdvbGQgZm9udC1tb25vIG1iLTIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBvcGFjaXR5LTgwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjdXJyZW50VGltZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmVcIj57aXNQbGF5aW5nID8gXCJMZWN0dXJlLi4uXCIgOiBcIlBhdXNlXCJ9PC9zcGFuPiB7LyogTWFzcXXDqSBzdXIgdHLDqHMgcGV0aXQgw6ljcmFuICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZHVyYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogWm9uZSBWaXN1YWxpc2V1ciAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBoLTggc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOCBtZDpoLTEwIGZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIG1iLTMgb3ZlcmZsb3ctaGlkZGVuIG9wYWNpdHktODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JhcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBCYXJyZSBkZSBwcm9ncmVzc2lvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEuNSBiZy1zdG9uZS04MDAgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIHJlbGF0aXZlIGdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2Vla31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgYmctdmlraW5nLWdvbGQgcm91bmRlZC1mdWxsIHJlbGF0aXZlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMCBlYXNlLWxpbmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTMgaC0zIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgc2hhZG93IHNjYWxlLTAgZ3JvdXAtaG92ZXI6c2NhbGUtMTAwIHRyYW5zaXRpb24tYWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpa2luZ1BsYXllcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSAnand0LWRlY29kZSc7XHJcbmltcG9ydCBEYXRhUHJvdmlkZXJTcGFjZSBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFQcm92aWRlclNwYWNlJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgQXJ0aWNsZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlRm9ybSc7XHJcblxyXG5jb25zdCBBZG1pbkRhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnc3RhdHMnKTtcclxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gbnVsbDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY3VycmVudFVzZXIgPSB0b2tlbiA/IGp3dERlY29kZSh0b2tlbikgOiBudWxsO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgZGUgZMOpY29kYWdlIGR1IHRva2VuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvbGVzID0gY3VycmVudFVzZXI/LnJvbGVzIHx8IFtdO1xyXG4gICAgY29uc3QgaXNGdWxsQWRtaW4gPSByb2xlcy5pbmNsdWRlcygnUk9MRV9BRE1JTicpO1xyXG4gICAgY29uc3QgaXNQcm92aWRlciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0ZPVVJOSVNTRVVSJykgfHwgaXNGdWxsQWRtaW47XHJcbiAgICBjb25zdCBpc0Rlc2lnbmVyID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfREVTSUdORVInKSB8fCBpc0Z1bGxBZG1pbjtcclxuICAgIGNvbnN0IGlzRWRpdG9yID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfRURJVEVVUicpIHx8IGlzRnVsbEFkbWluO1xyXG5cclxuICAgIGNvbnN0IGxvYWRTdGF0cyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaCgnL2FwaS9hZG1pbi9zdGF0cycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJBY2PDqHMgcmVmdXPDqSBwYXIgbGUgR3JhbmQgQ29uc2VpbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihqc29uID0+IHNldERhdGEoanNvbikpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBzZXRFcnJvcihlcnIubWVzc2FnZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRTdGF0cygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUFydGljbGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKFwiw4p0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgYnLDu2xlciBjZSBwYXJjaGVtaW4gZMOpZmluaXRpdmVtZW50ID9cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHByZXYgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZW1lbnRBcnRpY2xlczogcHJldi5tYW5hZ2VtZW50QXJ0aWNsZXMuZmlsdGVyKGFydCA9PiBhcnQuaWQgIT09IGlkKVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBJbXBvc3NpYmxlIGRlIHN1cHByaW1lciAoRHJvaXRzIGluc3VmZmlzYW50cyA/KVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIHNlcnZldXIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRWRpdFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdGluZ0lkKG51bGwpO1xyXG4gICAgICAgIGxvYWRTdGF0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByb21vdGUgPSBhc3luYyAodXNlcklkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9hZG1pbi91c2VyLyR7dXNlcklkfS9wcm9tb3RlYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFVzZXJzOiBkYXRhLmFsbFVzZXJzLm1hcCh1ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1LmlkID09PSB1c2VySWQgPyB7IC4uLnUsIHJvbGVzOiB1cGRhdGVkRGF0YS5uZXdSb2xlcyB9IDogdVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7IGFsZXJ0KFwiRXJyZXVyIGxvcnMgZHUgY2hhbmdlbWVudCBkZSByYW5nXCIpOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZmlyZSBwLTEwIHRleHQtY2VudGVyIGZvbnQtZHJhZ29uXCI+e2Vycm9yfTwvZGl2PjtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBwLTEwIGZvbnQtZHJhZ29uIGFuaW1hdGUtcHVsc2UgdGV4dC1jZW50ZXJcIj5BcHBlbCBhdSBHcmFuZCBDb25zZWlsLi4uPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gTU9ESUYgOiBwLTQgc3VyIG1vYmlsZSwgcC02IHN1ciBkZXNrdG9wXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBwLTQgbWQ6cC02IHRleHQtd2hpdGUgcGItMjBcIj5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogVGFpbGxlIGR1IHRpdHJlIHLDqWR1aXRlIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgbWItNiBtZDptYi0xMCBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMzAgcGItNCB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICBQYWxhaXMgZCdBZG1pbmlzdHJhdGlvblxyXG4gICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgey8qIE5hdmlnYXRpb24gcGFyIE9uZ2xldHMgcmVzcG9uc2l2ZSAqL31cclxuICAgICAgICAgICAgey8qIE1PRElGIDogZmxleC13cmFwIHBlcm1ldCBhdXggYm91dG9ucyBkZSBwYXNzZXIgw6AgbGEgbGlnbmUgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBtYi04IGJvcmRlci1iIGJvcmRlci1zdG9uZS04MDAgcGItNCBqdXN0aWZ5LWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignc3RhdHMnKX0gY2xhc3NOYW1lPXtgZmxleC1ncm93IG1kOmZsZXgtZ3Jvdy0wIHB4LTQgcHktMyBtZDpweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbiByb3VuZGVkIG1kOnJvdW5kZWQtbm9uZSAke2FjdGl2ZVRhYiA9PT0gJ3N0YXRzJyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrJyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAnfWB9PlZ1ZSBkJ2Vuc2VtYmxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtpc0Z1bGxBZG1pbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3VzZXJzJyl9IGNsYXNzTmFtZT17YGZsZXgtZ3JvdyBtZDpmbGV4LWdyb3ctMCBweC00IHB5LTMgbWQ6cHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24gcm91bmRlZCBtZDpyb3VuZGVkLW5vbmUgJHthY3RpdmVUYWIgPT09ICd1c2VycycgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjaycgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGJvcmRlciBib3JkZXItc3RvbmUtODAwJ31gfT5Qb3B1bGF0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7aXNFZGl0b3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdhcnRpY2xlcycpfSBjbGFzc05hbWU9e2BmbGV4LWdyb3cgbWQ6ZmxleC1ncm93LTAgcHgtNCBweS0zIG1kOnB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uIHJvdW5kZWQgbWQ6cm91bmRlZC1ub25lICR7YWN0aXZlVGFiID09PSAnYXJ0aWNsZXMnID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2snIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCd9YH0+Q2hyb25pcXVlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNQcm92aWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2RhdGEnKX0gY2xhc3NOYW1lPXtgZmxleC1ncm93IG1kOmZsZXgtZ3Jvdy0wIHB4LTQgcHktMyBtZDpweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbiByb3VuZGVkIG1kOnJvdW5kZWQtbm9uZSAke2FjdGl2ZVRhYiA9PT0gJ2RhdGEnID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2snIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCd9YH0+RG9ubsOpZXMgKENTVik8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2lzRGVzaWduZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdkZXNpZ24nKX0gY2xhc3NOYW1lPXtgZmxleC1ncm93IG1kOmZsZXgtZ3Jvdy0wIHB4LTQgcHktMyBtZDpweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbiByb3VuZGVkIG1kOnJvdW5kZWQtbm9uZSAke2FjdGl2ZVRhYiA9PT0gJ2Rlc2lnbicgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjaycgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGJvcmRlciBib3JkZXItc3RvbmUtODAwJ31gfT5BcHBhcmVuY2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIENPTlRFTlUgRFlOQU1JUVVFICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLVs0MDBweF1cIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3N0YXRzJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC02IGFuaW1hdGUtZmFkZUluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIGJvcmRlci1sLTQgYm9yZGVyLXZpa2luZy1nb2xkIHAtNiBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgdGV4dC14cyBmb250LWJsYWNrXCI+SGFiaXRhbnRzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtZHJhZ29uIG10LTIgdGV4dC13aGl0ZVwiPntkYXRhLnVzZXJzQ291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWZpcmUgcC02IHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2tcIj5BcnRpY2xlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWRyYWdvbiBtdC0yIHRleHQtd2hpdGVcIj57ZGF0YS5hcnRpY2xlc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICd1c2VycycgJiYgaXNGdWxsQWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IGFuaW1hdGUtZmFkZUluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNoZXJjaGVyIHVuIGd1ZXJyaWVyLi4uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzIwIHAtMyByb3VuZGVkIHRleHQtc20gdy1mdWxsIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuYWxsVXNlcnM/LmZpbHRlcih1ID0+IHUucHNldWRvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSkubWFwKHUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBmbGV4LWNvbCBzdXIgbW9iaWxlIHBvdXIgZW1waWxlciBwc2V1ZG8gZXQgYm91dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dS5pZH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIHAtNCBiZy1zdG9uZS05MDAvNTAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC12aWtpbmctcGFyY2htZW50IHRleHQtbGdcIj57dS5wc2V1ZG99PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXN0b25lLTUwMCBtdC0xXCI+e3Uucm9sZXMuam9pbignIHwgJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUHJvbW90ZSh1LmlkKX0gY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byB0ZXh0LXhzIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvNDAgcHgtNCBweS0yIGhvdmVyOmJnLXZpa2luZy1nb2xkIGhvdmVyOnRleHQtYmxhY2sgdHJhbnNpdGlvbiB1cHBlcmNhc2UgZm9udC1ibGFjayByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYW5nZXIgUmFuZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnYXJ0aWNsZXMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtZmFkZUluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWRpdGluZ0lkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgcC00IGJvcmRlciBib3JkZXItdmlraW5nLWdvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC13aGl0ZSB1cHBlcmNhc2UgdGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuKGkDwvc3Bhbj4gQW5udWxlciBsYSBtb2RpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUZvcm0gaWQ9e2VkaXRpbmdJZH0gb25TdWNjZXNzPXtoYW5kbGVFZGl0U3VjY2Vzc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFuYWdlbWVudEFydGljbGVzPy5tYXAoYXJ0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBmbGV4LWNvbCBzdXIgbW9iaWxlIHBvdXIgZW1waWxlciB0aXRyZSBldCBib3V0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthcnQuaWR9IGNsYXNzTmFtZT1cInAtNCBiZy1zdG9uZS05MDAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIGhvdmVyOmJvcmRlci1zdG9uZS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgZ3JvdXAgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2FydGljbGUvJHthcnQuaWR9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZ3JvdXAtaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LWxnIGJsb2NrIHRydW5jYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdGV4dC14cyBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhciA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMFwiPnthcnQuYXV0aG9yfTwvc3Bhbj4g4oCiIHtuZXcgRGF0ZShhcnQuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB3LWZ1bGwgc3VyIG1vYmlsZSwgYm91dG9ucyBlbiBwbGVpbmUgbGFyZ2V1ciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdy1mdWxsIHNtOnctYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdJZChhcnQuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgc206ZmxleC1ub25lIHB4LTMgcHktMyBzbTpweS0yIGJnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTMwMCBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB0cmFuc2l0aW9uIHRleHQtY2VudGVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQXJ0aWNsZShhcnQuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgc206ZmxleC1ub25lIHB4LTMgcHktMyBzbTpweS0yIGJnLXJlZC05MDAvMjAgdGV4dC1yZWQtNTAwIGJvcmRlciBib3JkZXItcmVkLTkwMC81MCBob3ZlcjpiZy1yZWQtOTAwIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1bMTBweF0gdXBwZXJjYXNlIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgdHJhbnNpdGlvbiB0ZXh0LWNlbnRlciByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1cHByaW1lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoIWRhdGEubWFuYWdlbWVudEFydGljbGVzIHx8IGRhdGEubWFuYWdlbWVudEFydGljbGVzLmxlbmd0aCA9PT0gMCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBpdGFsaWMgdGV4dC1jZW50ZXIgcHktMTBcIj5BdWN1bmUgY2hyb25pcXVlIMOgIGfDqXJlci48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnZGF0YScgJiYgaXNQcm92aWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGFQcm92aWRlclNwYWNlIGRhdGFzZXRzPXtkYXRhLmRhdGFzZXRzfSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnZGVzaWduJyAmJiBpc0Rlc2lnbmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgdGV4dC1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItc3RvbmUtODAwIHRleHQtc3RvbmUtNjAwIHVwcGVyY2FzZSBmb250LWJsYWNrIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRm9yZ2UgZGUgRGVzaWduIChFbiBjb25zdHJ1Y3Rpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkRhc2hib2FyZDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBBcnRpY2xlUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YCwgeyBoZWFkZXJzOiB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbicgfSB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWdvbGQgZm9udC1kcmFnb24gdGV4dC14bCBtZDp0ZXh0LTJ4bCBweS0yMCBhbmltYXRlLXB1bHNlIHB4LTRcIj5SZWNoZXJjaGUgZGFucyBsZXMgYXJjaGl2ZXMuLi48L2Rpdj47XHJcbiAgICBpZiAoIWFydGljbGUpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWZpcmUgdGV4dC1sZyBtZDp0ZXh0LXhsIHB5LTEwIHB4LTRcIj5BcnRpY2xlIGludHJvdXZhYmxlIGRhbnMgbGVzIGFyY2hpdmVzLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcHgtNCBwb3VyIGxlcyBtYXJnZXMgbGF0w6lyYWxlcyBzdXIgbW9iaWxlXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW4gcHgtNCBwYi0xMlwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNiBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbiB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+4oaQPC9zcGFuPiBSZXRvdXIgYXUgZm9ydW1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIE1PRElGIDogcC01IHN1ciBtb2JpbGUsIHAtOCBzdXIgZGVza3RvcCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTUgbWQ6cC04IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogRMOpY29yYXRpb24gY29pbiA6IHBsdXMgcGV0aXRlIHN1ciBtb2JpbGUgKHctMTIpICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctMTIgaC0xMiBtZDp3LTIwIG1kOmgtMjAgYmctdmlraW5nLWdvbGQgb3BhY2l0eS0xMCByb3VuZGVkLWJsLWZ1bGxcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB0ZXh0LTN4bCBzdXIgbW9iaWxlLCBicmVhay13b3JkcyBwb3VyIMOpdml0ZXIgbGVzIGTDqWJvcmRlbWVudHMgKi99XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi00IGxlYWRpbmctdGlnaHQgYnJlYWstd29yZHMgcmVsYXRpdmUgei0xMCBwci04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LXdyYXAgcG91ciBxdWUgw6dhIHBhc3NlIMOgIGxhIGxpZ25lIHN1ciBsZXMgdHLDqHMgcGV0aXRzIMOpY3JhbnMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXhzIG1kOnRleHQtc20gdGV4dC1zdG9uZS01MDAgbWItNiBtZDptYi04IGJvcmRlci1iIGJvcmRlci1zdG9uZS03MDAgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXZpa2luZy1yZWQgcHgtMiBweS0xIHJvdW5kZWQgdGV4dC13aGl0ZSBmb250LWJvbGQgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC81MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcmNoaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkNyw6nDqSBsZSB7bmV3IERhdGUoYXJ0aWNsZS5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtYmFzZSAoMTZweCkgc3VyIG1vYmlsZSwgdGV4dC1sZyAoMThweCkgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgZm9udC1zZXJpZiB3aGl0ZXNwYWNlLXByZS1saW5lIHRleHQtanVzdGlmeSBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBOb3RlOiBMZXMgYmxvY3MgZXQgY29tbWVudGFpcmVzIG7DqWNlc3NpdGVudCB1bmUgbG9naXF1ZSBwbHVzIHBvdXNzw6llIMOgIGltcGzDqW1lbnRlciBwbHVzIHRhcmQgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5pbXBvcnQgQXJ0aWNsZUZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm1cIjtcclxuXHJcbmNvbnN0IEZvcnVtUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvLyDDiXRhdCBwb3VyIGxlIHRyaVxyXG4gICAgY29uc3QgW3NvcnRPcmRlciwgc2V0U29ydE9yZGVyXSA9IHVzZVN0YXRlKFwibmV3ZXN0XCIpO1xyXG5cclxuICAgIC8vIEdlc3Rpb24gZGUgbGEgbmF2aWdhdGlvbiBpbnRlcm5lXHJcbiAgICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShcImxpc3RcIik7IC8vICdsaXN0JywgJ2NyZWF0ZScsICdlZGl0J1xyXG4gICAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyAxLiBSw6ljdXDDqXJhdGlvbiBldCBkw6ljb2RhZ2UgZHUgVG9rZW5cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIoZGVjb2RlZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYWRnZSAoVG9rZW4pIGludmFsaWRlIG91IGV4cGlyw6lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gUmVjaGFyZ2VyIHF1YW5kIGxlIHRyaSBjaGFuZ2VcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpO1xyXG4gICAgfSwgW3NvcnRPcmRlcl0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoQXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gXCIvYXBpL2FydGljbGVzXCI7XHJcbiAgICAgICAgICAgIC8vIExvZ2lxdWUgZGUgdHJpIEFQSSBQbGF0Zm9ybVxyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvcnRPcmRlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJlc3RfcmF0aW5nXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IFwiP29yZGVyW2F2ZXJhZ2VSYXRpbmddPWRlc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ3b3JzdF9yYXRpbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gXCI/b3JkZXJbYXZlcmFnZVJhdGluZ109YXNjXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib2xkZXN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IFwiP29yZGVyW2NyZWF0ZWRBdF09YXNjXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmV3ZXN0XCI6XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBcIj9vcmRlcltjcmVhdGVkQXRdPWRlc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEFjY2VwdDogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRBcnRpY2xlcyhkYXRhW1wiaHlkcmE6bWVtYmVyXCJdIHx8IGRhdGFbXCJtZW1iZXJcIl0gfHwgW10pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGRlIGxpYWlzb24gYXZlYyBsZSBHcmFuZCBDb25zZWlsXCIsIGVycik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICF3aW5kb3cuY29uZmlybShcclxuICAgICAgICAgICAgICAgIFwiVm91bGV6LXZvdXMgdnJhaW1lbnQgZWZmYWNlciBjZSByw6ljaXQgZGUgbGEgcGllcnJlID9cIixcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKX1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlcyhcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5maWx0ZXIoKGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUlkID0gKGEuaWQgfHwgYVtcIkBpZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhSWQgIT09IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMZXMgZHJhZ29ucyBwcm90w6hnZW50IGNlIHBhcmNoZW1pbiAoRXJyZXVyIGRlIHBlcm1pc3Npb25zKS5cIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJMZSBzZXJ2ZXVyIGVzdCBpbmpvaWduYWJsZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpZXcoXCJsaXN0XCIpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDwn5uh77iPIC0tLSBMT0dJUVVFIERFUyBSw5RMRVMgLS0tXHJcbiAgICBjb25zdCB1c2VyUm9sZXMgPSB1c2VyPy5yb2xlcyB8fCBbXTtcclxuICAgIGNvbnN0IHN1cGVyRWRpdG9ycyA9IFtcclxuICAgICAgICBcIlJPTEVfRURJVEVVUlwiLFxyXG4gICAgICAgIFwiUk9MRV9BRE1JTlwiLFxyXG4gICAgICAgIFwiUk9MRV9ERVNJR05FUlwiLFxyXG4gICAgICAgIFwiUk9MRV9GT1VSTklTU0VVUlwiLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGlzU3VwZXJFZGl0b3IgPSBzdXBlckVkaXRvcnMuc29tZSgocikgPT4gdXNlclJvbGVzLmluY2x1ZGVzKHIpKTtcclxuICAgIGNvbnN0IGlzQXV0aG9yID0gdXNlclJvbGVzLmluY2x1ZGVzKFwiUk9MRV9BVVRFVVJcIik7XHJcbiAgICBjb25zdCBjYW5DcmVhdGUgPSBpc1N1cGVyRWRpdG9yIHx8IGlzQXV0aG9yO1xyXG5cclxuICAgIGlmIChsb2FkaW5nICYmIHZpZXcgPT09IFwibGlzdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS00MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYm9yZGVyLTQgYm9yZGVyLXZpa2luZy1nb2xkIGJvcmRlci10LXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW4gbWItNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LXhsIGFuaW1hdGUtcHVsc2UgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgT3V2ZXJ0dXJlIGRlcyBwYXJjaGVtaW5zLi4uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHB4LTQgcG91ciBsZXMgbWFyZ2VzIG1vYmlsZXNcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgcGItMjBcIj5cclxuICAgICAgICAgICAgey8qIC0tLSBIRUFERVIgLS0tICovfVxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LWNvbCBwb3VyIGVtcGlsZXIgdGl0cmUgZXQgZmlsdHJlcyBzdXIgbW9iaWxlLCBpdGVtcy1zdGFydCBwYXIgZMOpZmF1dCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtZDppdGVtcy1lbmQgbWItOCBtZDptYi0xMiBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMjAgcGItOCBnYXAtNiBtZDpnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBUYWlsbGUgdGl0cmUgYWRhcHTDqWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNnhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLXBhcmNobWVudCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaHJvbmlxdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBpdGFsaWMgdGV4dC1zbSBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExlIHNhdm9pciBkdSB2aWxsYWdlIGRlIEJlcmssIGdyYXbDqSBwb3VyIGwnw6l0ZXJuaXTDqS5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7dmlldyA9PT0gXCJsaXN0XCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGUgcG91ciBxdWUgbGVzIGZpbHRyZXMgcHJlbm5lbnQgdG91dGUgbGEgbGFyZ2V1clxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTQgdy1mdWxsIG1kOnctYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU0VMRUNURVVSIERFIFRSSSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb3J0T3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNvcnRPcmRlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvNTAgdGV4dC12aWtpbmctZ29sZCBweS0zIHB4LTQgcm91bmRlZCBjdXJzb3ItcG9pbnRlciB1cHBlcmNhc2UgdGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgaG92ZXI6Ymctc3RvbmUtOTAwIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV3ZXN0XCI+8J+ThSBQbHVzIFLDqWNlbnRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib2xkZXN0XCI+8J+TnCBQbHVzIEFuY2llbnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiZXN0X3JhdGluZ1wiPvCfjJ8gTWlldXggTm90w6lzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid29yc3RfcmF0aW5nXCI+8J+SgCBNb2lucyBOb3TDqXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog8J+UkiBCT1VUT04gQ1LDiUVSICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuQ3JlYXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJjcmVhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHctZnVsbCBzdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byBiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIHB4LTggcHktMyBmb250LWJsYWNrIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctWzBfMF8yMHB4X3JnYmEoMjEyLDE3NSw1NSwwLjIpXSB1cHBlcmNhc2UgdGV4dC14cyB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgR3JhdmVyIHVuIHLDqWNpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiAtLS0gVlVFUyBGT1JNVUxBSVJFUyAtLS0gKi99XHJcbiAgICAgICAgICAgIHt2aWV3ID09PSBcImNyZWF0ZVwiIHx8IHZpZXcgPT09IFwiZWRpdFwiID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20tNCBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJsaXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb24gdXBwZXJjYXNlIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oaQIFJldG91ciBhdSBtdXIgZGVzIGzDqWdlbmRlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlRm9ybSBpZD17c2VsZWN0ZWRJZH0gb25TdWNjZXNzPXtoYW5kbGVTdWNjZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAvKiAtLS0gVlVFIExJU1RFIERFUyBBUlRJQ0xFUyAtLS0gKi9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTIwIHRleHQtc3RvbmUtNjAwIGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgc2lsZW5jZSByw6hnbmUgc3VyIGxlIG11ci4uLiBBdWN1bmUgY2hyb25pcXVlIG4nYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgw6l0w6kgdHJvdXbDqWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuSWQgPSAoYXJ0aWNsZS5pZCB8fCBhcnRpY2xlW1wiQGlkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiL1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT3duZXIgPSB1c2VyPy5pZCA9PT0gYXJ0aWNsZS5hdXRob3I/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuRWRpdFRoaXMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU3VwZXJFZGl0b3IgfHwgKGlzQXV0aG9yICYmIGlzT3duZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjbGVhbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHAtNSBzdXIgbW9iaWxlLCBwLTggc3VyIGRlc2t0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgYmctc3RvbmUtOTAwLzQwIGJvcmRlci1sLTQgYm9yZGVyLXN0b25lLTgwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHAtNSBtZDpwLTggcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogZmxleC1jb2wgc3VyIG1vYmlsZSBwb3VyIHRpdHJlIGV0IGJvdXRvbnMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgbWItNCBnYXAtNCBtZDpnYXAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IFRhaWxsZSB0aXRyZSBhZGFwdMOpZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgdXBwZXJjYXNlIGxlYWRpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hdmVyYWdlUmF0aW5nICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIHRleHQteHMgbWQ6dGV4dC1zbSBmb250LWJvbGQgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwLzMwIHB4LTIgcHktMC41IHJvdW5kZWQgYmcteWVsbG93LTUwMC8xMCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4piFIHthcnRpY2xlLmF2ZXJhZ2VSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIPCflJIgQk9VVE9OUyBEJ0FDVElPTiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5FZGl0VGhpcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBvcGFjaXR5LTEwMCBzdXIgbW9iaWxlIChjYXIgcGFzIGRlIGhvdmVyKSwgbWQ6b3BhY2l0eS00MCBzdXIgb3JkaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBvcGFjaXR5LTEwMCBtZDpvcGFjaXR5LTQwIG1kOmdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSB3LWZ1bGwgbWQ6dy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZElkKGNsZWFuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJlZGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogZmxleC0xIHN1ciBtb2JpbGUgcG91ciBkZXMgYm91dG9ucyBsYXJnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBtZDpmbGV4LW5vbmUgdGV4dC1jZW50ZXIgdGV4dC1bOXB4XSB1cHBlcmNhc2UgZm9udC1ibGFjayBiZy1zdG9uZS04MDAgdGV4dC1zdG9uZS00MDAgcHgtMyBweS0yIG1kOnB5LTEgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZShjbGVhbklkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIG1kOmZsZXgtbm9uZSB0ZXh0LWNlbnRlciB0ZXh0LVs5cHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIGJnLXJlZC05MDAvMTAgdGV4dC1yZWQtNTAwLzcwIHB4LTMgcHktMiBtZDpweS0xIGJvcmRlciBib3JkZXItcmVkLTkwMC8zMCBob3ZlcjpiZy1yZWQtOTAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1cHByaW1lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC1iYXNlIHN1ciBtb2JpbGUsIHRleHQtbGcgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwIGZvbnQtc2VyaWYgaXRhbGljIHRleHQtYmFzZSBtZDp0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi02IG1kOm1iLTggbWF4LXctM3hsIHRleHQtanVzdGlmeSBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwie2FydGljbGUuc3VtbWFyeX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LWNvbCBzdXIgbW9iaWxlIHBvdXIgbGUgZm9vdGVyIGRlIGNhcnRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBwdC02IGJvcmRlci10IGJvcmRlci1zdG9uZS04MDAvNTAgZ2FwLTQgc206Z2FwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNiBoLVsxcHhdIGJnLXZpa2luZy1nb2xkLzQwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBmb250LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuYXV0aG9yPy5wc2V1ZG8gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuYXV0aG9yPy51c2VybmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHdWVycmllciBkZSBsJ29tYnJlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2FydGljbGUvJHtjbGVhbklkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZmlyZSBmb250LWJsYWNrIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBzZWxmLWVuZCBzbTpzZWxmLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN1bHRlciBsZSBwYXJjaGVtaW57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPuKGkjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ydW1QYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmlnaHRGdXJ5U2NlbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmlnaHRGdXJ5XCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gQUpPVVQgOiBweC00IHBvdXIgw6l2aXRlciBxdWUgbGUgY29udGVudSB0b3VjaGUgbGVzIGJvcmRzIHN1ciBtb2JpbGVcclxuICAgICAgICAvLyBNT0RJRiA6IHB5LTggc3VyIG1vYmlsZSwgcHktMTYgc3VyIG9yZGluYXRldXJcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTggbWQ6cHktMTYgcHgtNCBhbmltYXRlLWZhZGUtaW4tdXBcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IFRhaWxsZSBkdSB0ZXh0ZSBwcm9ncmVzc2l2ZSAoNHhsIC0+IDZ4bCAtPiA4eGwpICovfVxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgc206dGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1kcmFnb24gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXZpa2luZy1nb2xkIHZpYS15ZWxsb3ctNTAwIHRvLXZpa2luZy1nb2xkIG1iLTYgbWQ6bWItOCBkcm9wLXNoYWRvdy1zbSBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICBCaWVudmVudWUgZGFucyBsJ0FudHJlXHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgbWQ6dy0yNCBoLTEgYmctdmlraW5nLXJlZCBteC1hdXRvIG1iLTYgbWQ6bWItOCByb3VuZGVkLWZ1bGwgc2hhZG93LVswXzBfMTBweF8jZGMyNjI2XVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogVGFpbGxlIGR1IHRleHRlIHBsdXMgbGlzaWJsZSBzdXIgbW9iaWxlICh0ZXh0LWJhc2UgLT4gdGV4dC0yeGwpICovfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyBtZDp0ZXh0LTJ4bCB0ZXh0LXZpa2luZy1saWdodCBtYi04IG1kOm1iLTEyIG1heC13LTN4bCBteC1hdXRvIGZvbnQtc2VyaWYgaXRhbGljIGxlYWRpbmctcmVsYXhlZCBweC0yXCI+XHJcbiAgICAgICAgICAgICAgICBcIsOHYSwgYydlc3QgQmV1cmsuIMOAIGRvdXplIGpvdXJzIGF1IG5vcmQgZHUgRMOpc2VzcG9pciwgZXRcclxuICAgICAgICAgICAgICAgIHF1ZWxxdWVzIGRlZ3LDqXMgYXUgc3VkIGQndW4gRnJvaWQtZGUtY2FuYXJkLiBBbmNyw6kgc29saWRlbWVudFxyXG4gICAgICAgICAgICAgICAgc3VyIGxlIE3DqXJpZGllbiBkZSBsYSBNaXPDqHJlLiBNb24gdmlsbGFnZS4uLiBFbiB1biBtb3QsIGJhbGFpc2UuXHJcbiAgICAgICAgICAgICAgICBFdCBzZXB0IGfDqW7DqXJhdGlvbnMgeSBvbnQgZMOpasOgIHZ1IGxlIGpvdXIsIHBvdXJ0YW50LCB0b3V0ZXMgbGVzXHJcbiAgICAgICAgICAgICAgICBtYWlzb25zIHNvbnQgbmV1dmVzLiBCZXVyayA6IHNhIHDDqmNoZSwgc2EgY2hhc3NlLCBldCBzZXNcclxuICAgICAgICAgICAgICAgIG1lcnZlaWxsZXV4IGNvdWNoZXJzIGRlIHNvbGVpbC4gTGEgc2V1bGUgZmF1c3NlIG5vdGUgYydlc3QgbGVzXHJcbiAgICAgICAgICAgICAgICBiZXN0aW9sZXMuIEFpbGxldXJzLCBsZXMgZ2VucyBvbnQgZGVzIHNvdXJpcyBvdSBkZXMgbW91c3RpcXVlcy5cclxuICAgICAgICAgICAgICAgIE5vdXMgb24gYSBkZXMuLi4gZHJhZ29ucy5cIlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMCByb3VuZGVkLTJ4bCBib3JkZXItNCBib3JkZXItc3RvbmUtNzAwIHNoYWRvdy0yeGwgb3ZlcmZsb3ctaGlkZGVuIG1iLTggbWQ6bWItMTJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IEhhdXRldXIgYWRhcHRhdGl2ZSAhIFxyXG4gICAgICAgICAgICAgICAgICAgIDMwMHB4IHN1ciBtb2JpbGUgKGgtWzMwMHB4XSlcclxuICAgICAgICAgICAgICAgICAgICA0MDBweCBzdXIgdGFibGV0dGUgKHNtOmgtWzQwMHB4XSlcclxuICAgICAgICAgICAgICAgICAgICA2MDBweCBzdXIgb3JkaW5hdGV1ciAobGc6aC1bNjAwcHhdKSBcclxuICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVszMDBweF0gc206aC1bNDAwcHhdIGxnOmgtWzYwMHB4XSB3LWZ1bGwgcmVsYXRpdmUgYmctYmxhY2sgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmlnaHRGdXJ5U2NlbmUgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTAgdy1mdWxsIHRleHQtY2VudGVyIHRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LWdyYXktNDAwIHBvaW50ZXItZXZlbnRzLW5vbmUgei0xMCBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsaXF1ZXogc3VyIGxlIGRyYWdvbiAob3UgdG91Y2hlei1sZSlcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IGZsZXgtY29sIHBvdXIgZW1waWxlciBsZXMgYm91dG9ucyBzdXIgbW9iaWxlLCBmbGV4LXJvdyBzdXIgb3JkaSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGdhcC00IG1kOmdhcC02IHctZnVsbCBtYXgtdy1tZCBtZDptYXgtdy1ub25lIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvZm9ydW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGUgcG91ciBmYWNpbGl0ZXIgbGUgY2xpYywgdy1hdXRvIHN1ciBvcmRpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgdy1mdWxsIG1kOnctYXV0byBweC04IHB5LTQgYmctdmlraW5nLXJlZCBob3ZlcjpiZy1yZWQtOTAwIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCB0ZXh0LXdoaXRlIGZvbnQtZHJhZ29uIHRleHQtbGcgbWQ6dGV4dC14bCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMjIwLDM4LDM4LDAuNSldIGFjdGl2ZTpzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiPkFjY8OpZGVyIGF1IEZvcnVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUvMjAgdG8tdHJhbnNwYXJlbnQgLXRyYW5zbGF0ZS14LWZ1bGwgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi03MDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL3N0YXRpc3RpcXVlXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHctZnVsbCBzdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctYXV0byBweC04IHB5LTQgYmctdmlraW5nLXJvY2sgaG92ZXI6Ymctc3RvbmUtNzAwIGJvcmRlci0yIGJvcmRlci1zdG9uZS01MDAgdGV4dC12aWtpbmctbGlnaHQgaG92ZXI6dGV4dC13aGl0ZSBmb250LWRyYWdvbiB0ZXh0LWxnIG1kOnRleHQteGwgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBWb2lyIGxlcyBTdGF0c1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RXJyb3IoJycpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luX2NoZWNrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLCBcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQgXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rICYmIGRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2ZvcnVtJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKCdJZGVudGlmaWFudHMgaW5jb3JyZWN0cy4gTGVzIGRyYWdvbnMgbmUgdm91cyByZWNvbm5haXNzZW50IHBhcy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcignRXJyZXVyIGRlIGNvbm5leGlvbiBhdSBzZXJ2ZXVyLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHB4LTQgcG91ciDDqXZpdGVyIHF1ZSDDp2EgdG91Y2hlIGxlcyBib3JkcyBzdXIgbW9iaWxlXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBwLTYgZXQgbXQtNCBzdXIgbW9iaWxlLCBwLTEwIGV0IG10LTEwIHN1ciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctdmlraW5nLXJvY2sgcC02IG1kOnAtMTAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgbXQtNCBtZDptdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC0yeGwgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgbWQ6bWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5Db25uZXhpb248L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcmVkIHRleHQtc20gbWItNCBpdGFsaWMgdGV4dC1jZW50ZXIgZm9udC1ib2xkIGFuaW1hdGUtcHVsc2VcIj57ZXJyb3J9PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBzcGFjZS15LTQgc3VyIG1vYmlsZSAocGx1cyBjb21wYWN0KSAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMiB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIGR1IEd1ZXJyaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtYmFzZSBwb3VyIMOpdml0ZXIgbGUgem9vbSBpT1MgYXV0b21hdGlxdWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtMyBtZDpwLTQgdGV4dC1iYXNlIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4ZW1wbGVAYmVyay5mclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG1iLTIgdGV4dC12aWtpbmctcGFyY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3QgZGUgcGFzc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIG1kOnAtNCB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBweS0zIHN1ciBtb2JpbGUgcG91ciBnYWduZXIgZGUgbGEgcGxhY2UsIHB5LTQgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayBweS0zIG1kOnB5LTQgdXBwZXJjYXNlIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1IHRleHQtc20gbWQ6dGV4dC1iYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmVuZHJlIHNvbiBlbnZvbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwbGFpblBhc3N3b3JkOiAnJyxcclxuICAgICAgICByb2xlOiAnUk9MRV9VU0VSJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRFcnJvcignJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9yZWdpc3RlcicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZGlyaWdlIHZlcnMgbCdhY2N1ZWlsIG91IGxlIGxvZ2luIGFwcsOocyBzdWNjw6hzXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgnLycpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJFcnJldXIgbG9ycyBkZSBsJ2luc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwiSW1wb3NzaWJsZSBkZSBjb250YWN0ZXIgbGUgR3JhbmQgU2NyaWJlIChFcnJldXIgcsOpc2VhdSlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcHgtNCBwb3VyIMOpdml0ZXIgcXVlIGxhIGNhcnRlIHRvdWNoZSBsZXMgYm9yZHMgc3VyIG1vYmlsZVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCB3LWZ1bGwgcGItMTBcIj5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogcC02IGV0IG10LTQgc3VyIG1vYmlsZSwgcC04IGV0IG10LTEwIHN1ciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctdmlraW5nLXJvY2svOTAgcC02IG1kOnAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCBzaGFkb3ctMnhsIGJhY2tkcm9wLWJsdXItc20gbXQtNCBtZDptdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC0yeGwgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgbWQ6bWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVqb2luZHJlIGxhIEd1aWxkZVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC05MDAvNDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTIwMCBwLTMgcm91bmRlZCBtYi02IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBzcGFjZS15LTQgc3VyIG1vYmlsZSBwb3VyIGNvbXBhY3RlciAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTk9NIEQnVVRJTElTQVRFVVIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Ob20gZGUgY29kZSAoUHNldWRvKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtYmFzZSBldCBwLTMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBLcm9rbW91XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRU1BSUwgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5FbWFpbCBkZSBjb250YWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZpa2luZ0BiZXJrLmZyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUsOUTEUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5SYW5nIGF1IHNlaW4gZGUgbGEgR3VpbGRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogcC0zIGV0IHRleHQtYmFzZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCByb2xlOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9VU0VSXCI+QWJvbm7DqSAoTGVjdGV1cik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0FVVEVVUlwiPkF1dGV1ciAoTmFycmF0ZXVyKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfRURJVEVVUlwiPsOJZGl0ZXVyIChHYXJkaWVuKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfREVTSUdORVJcIj5EZXNpZ25ldXIgKEFydGlzYW4pPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9GT1VSTklTU0VVUlwiPkZvdXJuaXNzZXVyIGRlIGRvbm7DqWVzIChTY3JpYmUpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9BRE1JTlwiPkFkbWluaXN0cmF0ZXVyIChDaGVmIGRlIGxhIEd1aWxkZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNT1QgREUgUEFTU0UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Nb3QgZGUgcGFzc2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wbGFpblBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHBsYWluUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogcHktMyBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtdmlraW5nLWRhcmsgZm9udC1leHRyYWJvbGQgcHktMyBtZDpweS00IHJvdW5kZWQgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBzaGFkb3ctbGcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG10LTQgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR3JhdmVyIG1vbiBub21cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENoYXJ0IGFzIENoYXJ0SlMsIENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kLCBBcmNFbGVtZW50LCBQb2ludEVsZW1lbnQsIExpbmVFbGVtZW50LFxyXG59IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IHsgQmFyLCBEb3VnaG51dCwgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kLCBBcmNFbGVtZW50LCBQb2ludEVsZW1lbnQsIExpbmVFbGVtZW50KTtcclxuXHJcbmNvbnN0IFN0YXRzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbYm94T2ZmaWNlRGF0YSwgc2V0Qm94T2ZmaWNlRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcG9wdWxhdGlvbkRhdGEsIHNldFBvcHVsYXRpb25EYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0aW1lbGluZURhdGEsIHNldFRpbWVsaW5lRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgbG9hZENTViA9ICh1cmwsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKHIgPT4gci5vayA/IHIudGV4dCgpIDogbnVsbClcclxuICAgICAgLnRoZW4odHh0ID0+IHtcclxuICAgICAgICBpZighdHh0KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSB0eHQudHJpbSgpLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICBpZiAobGluZXMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBsaW5lc1swXS5zcGxpdCgnOycpLm1hcChoID0+IGgudHJpbSgpKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gbGluZXMuc2xpY2UoMSkubWFwKGwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWxzID0gbC5zcGxpdCgnOycpLm1hcCh2ID0+IHYudHJpbSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+ICh7Li4uYWNjLCBbaF06IHZhbHNbaV19KSwge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCkgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9ib3hfb2ZmaWNlLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldEJveE9mZmljZURhdGEoe1xyXG4gICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydGaWxtJ10pLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdNJCcsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnQm94IE9mZmljZSAoTWlsbGlvbnMgJCknXSkpLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyM3ZjFkMWQnLCAnI2RjMjYyNicsICcjZDk3NzA2J10sXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyMyOTI1MjQnLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgICAgICB9XVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2JlcmtfcG9wdWxhdGlvbi5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBzZXRQb3B1bGF0aW9uRGF0YSh7XHJcbiAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0dyb3VwZSddKSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydQb3B1bGF0aW9uJ10pKSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjZDk3NzA2JywgJyM3ZjFkMWQnLCAnIzU3NTM0ZScsICcjYThhMjllJ10sXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyMxYzE5MTcnLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgICAgICB9XVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2RyYWdvbnNfdGltZWxpbmUuY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRUaW1lbGluZURhdGEoe1xyXG4gICAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0FubsOpZSddKSxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ0VzcMOoY2VzJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ0VzcMOoY2VzIFJlY2Vuc8OpZXMnXSkpLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNkOTc3MDYnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIxNywgMTE5LCA2LCAwLjIpJyxcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgdGVuc2lvbjogMC4zLFxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgcGx1Z2luczogeyBsZWdlbmQ6IHsgbGFiZWxzOiB7IGNvbG9yOiAnI2U3ZTVlNCcsIGZvbnQ6IHsgZmFtaWx5OiAnc2VyaWYnIH0gfSB9IH0sXHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgeTogeyB0aWNrczogeyBjb2xvcjogJyNhOGEyOWUnIH0sIGdyaWQ6IHsgY29sb3I6ICcjNDQ0MDNjJyB9IH0sXHJcbiAgICAgIHg6IHsgdGlja3M6IHsgY29sb3I6ICcjYThhMjllJyB9LCBncmlkOiB7IGNvbG9yOiAnIzQ0NDAzYycgfSB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIE1PRElGIDogcHgtNCBzdXIgbW9iaWxlLCBwYi0xMiBwb3VyIGxlIHNjcm9sbFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW4gcHgtNCBwYi0xMlwiPlxyXG4gICAgICAgIHsvKiBNT0RJRiA6IG1iLTggc3VyIG1vYmlsZSwgbWItMTIgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi04IG1kOm1iLTEyXCI+XHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtM3hsIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgZHJvcC1zaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgIEwnT2JzZXJ2YXRvaXJlIGRlIEJlcmtcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBtZDp0ZXh0LWxnIGl0YWxpYyBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMzAgaW5saW5lLWJsb2NrIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIFJlY2Vuc2VtZW50IG9mZmljaWVsIGRlIGwnYXJjaGlwZWxcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTYgbWQ6Z2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTQgbWQ6cC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB0ZXh0LXhsIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNlwiPlRyw6lzb3IgZGUgR3VlcnJlPC9oMz5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IGgtNTYgc3VyIG1vYmlsZSwgaC02NCBzdXIgZGVza3RvcCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC01NiBtZDpoLTY0IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveE9mZmljZURhdGEgPyA8QmFyIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2JveE9mZmljZURhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTAgdGV4dC1zdG9uZS01MDAgaXRhbGljXCI+Q2hhcmdlbWVudCBkZXMgZG9ubsOpZXMuLi48L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTQgbWQ6cC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNlwiPkNsYW5zICYgVHJpYnVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC01NiBtZDpoLTY0IHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9wdWxhdGlvbkRhdGEgPyA8RG91Z2hudXQgb3B0aW9ucz17ey4uLm9wdGlvbnMsIHNjYWxlczp7fX19IGRhdGE9e3BvcHVsYXRpb25EYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwIHRleHQtc3RvbmUtNTAwIGl0YWxpY1wiPkNoYXJnZW1lbnQgZGVzIGNsYW5zLi4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC00IG1kOnAtNiByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCBtZDpjb2wtc3Bhbi0yIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNlwiPkNocm9ub2xvZ2llIGRlcyBEw6ljb3V2ZXJ0ZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogaC02NCBzdXIgbW9iaWxlLCBoLTgwIHN1ciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IG1kOmgtODAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGltZWxpbmVEYXRhID8gPExpbmUgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17dGltZWxpbmVEYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwIHRleHQtc3RvbmUtNTAwIGl0YWxpY1wiPkFuYWx5c2UgdGVtcG9yZWxsZS4uLjwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHNQYWdlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lUGFnZSIsIkZvcnVtUGFnZSIsIkFydGljbGVQYWdlIiwiU3RhdHNQYWdlIiwiTmF2YmFyIiwiUmVnaXN0ZXJQYWdlIiwiTG9naW5QYWdlIiwiQXJ0aWNsZVNob3ciLCJBZG1pbkRhc2hib2FyZCIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwicGF0aCIsImVsZW1lbnQiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiZXJyb3IiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGVzdCIsIm5leHQiLCJwdXNoIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDc3ZDaGFydCIsIkFydGljbGVGb3JtIiwiX3JlZiIsIl9yZWYkaWQiLCJpZCIsIm9uU3VjY2VzcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJ0aXRsZSIsInNldFRpdGxlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiYmxvY3MiLCJzZXRCbG9jcyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibXVzaWNMaWJyYXJ5Iiwic2V0TXVzaWNMaWJyYXJ5IiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJkYXRhc2V0TGlicmFyeSIsInNldERhdGFzZXRMaWJyYXJ5IiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaCIsImNvbmNhdCIsInJlcyIsImpzb24iLCJkYXRhIiwiZm9ybWF0dGVkQmxvY3MiLCJzb3J0IiwiYiIsInBvc2l0aW9uIiwibWFwIiwidml6VHlwZSIsImNvbnRlbnQiLCJ0eXBlIiwicGFydHMiLCJzcGxpdCIsIm1lZGlhVXJsIiwiZmlsZSIsImVyciIsIm9rIiwiRXJyb3IiLCJhZGRCbG9jIiwicmVtb3ZlQmxvYyIsImluZGV4VG9SZW1vdmUiLCJmaWx0ZXIiLCJfIiwiaW5kZXgiLCJ1cGRhdGVCbG9jIiwiZmllbGQiLCJuZXdCbG9jcyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJ0YXJnZXQiLCJmaWxlcyIsInN0YXJ0c1dpdGgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVTdWJtaXQiLCJfcmVmMiIsIl9jYWxsZWUiLCJ0b2tlbiIsImFydGljbGVEYXRhIiwicmVzcG9uc2UiLCJmb3JtRGF0YSIsIl9yZXNwb25zZSIsImVycm9yRGF0YSIsIl90IiwiX2NvbnRleHQiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJibG9jIiwiZmluYWxDb250ZW50IiwiYmxvY1BheWxvYWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbGVydCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZm9yRWFjaCIsImluY2x1ZGVzIiwibWVzc2FnZSIsIl94Iiwib25TdWJtaXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJrZXkiLCJvbkNsaWNrIiwiYWNjZXB0Iiwic291cmNlIiwiY3N2VXJsIiwiZW50cmllcyIsIl9yZWYzIiwiX3JlZjQiLCJmb2xkZXIiLCJsYWJlbCIsInRvVXBwZXJDYXNlIiwiVG9vbEJ0biIsImRpc2FibGVkIiwiX3JlZjUiLCJ1c2VQYXJhbXMiLCJMaW5rIiwiVmlraW5nUGxheWVyIiwiQ29tbWVudFNlY3Rpb24iLCJTdGFyUmF0aW5nIiwiX2FydGljbGUkYmxvY3MiLCJfYXJ0aWNsZSRhdXRob3IiLCJfdXNlUGFyYW1zIiwiYXJ0aWNsZSIsInNldEFydGljbGUiLCJyZWplY3QiLCJjdXN0b21TdHlsZXMiLCJyYXdDb25maWciLCJkZXNpZ25Db25maWciLCJwYXJzZSIsImZpbmFsVGl0bGVDb2xvciIsInRpdGxlQ29sb3IiLCJmaW5hbENvbnRlbnRCZyIsImNvbnRlbnRCZyIsIm11c2ljQmxvYyIsImZpbmQiLCJtdXNpY1NyYyIsImNvbnRlbnRCbG9jcyIsImhhbmRsZVJhdGUiLCJzY29yZSIsIkF1dGhvcml6YXRpb24iLCJ0byIsImFydGljbGVJZCIsImN1cnJlbnRSYXRpbmciLCJhdmVyYWdlUmF0aW5nIiwib25SYXRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhdXRvUGxheSIsImF1dGhvciIsInBzZXVkbyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJDb21tZW50SXRlbSIsIl9jb21tZW50JGF1dGhvciIsImNvbW1lbnQiLCJvblZvdGUiLCJvblJlcGx5IiwiY2FuSW50ZXJhY3QiLCJzaG93UmVwbHlGb3JtIiwic2V0U2hvd1JlcGx5Rm9ybSIsInJlcGx5Q29udGVudCIsInNldFJlcGx5Q29udGVudCIsImhhbmRsZVJlcGx5U3VibWl0IiwicmVwbGllcyIsInJlcGx5IiwiX0NvbW1lbnRJdGVtIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsIm5ld0NvbW1lbnQiLCJzZXROZXdDb21tZW50Iiwic2V0Q2FuSW50ZXJhY3QiLCJmZXRjaENvbW1lbnRzIiwiY29tbWVudHNEYXRhIiwicm9vdENvbW1lbnRzIiwicGFyZW50IiwidW5kZWZpbmVkIiwiaGFuZGxlUG9zdCIsInBhcmVudElkIiwiX2FyZ3MiLCJoYW5kbGVWb3RlIiwiX2NhbGxlZTIiLCJjb21tZW50SWQiLCJkaXJlY3Rpb24iLCJfdDIiLCJfY29udGV4dDIiLCJfeDIiLCJfeDMiLCJQYXBhIiwiQmFyQ2hhcnQiLCJCYXIiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJMZWdlbmQiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiTGluZUNoYXJ0IiwiTGluZSIsIlBpZUNoYXJ0IiwiUGllIiwiQ2VsbCIsIkNPTE9SUyIsIl9yZWYkdml6VHlwZSIsInNldERhdGEiLCJzZXRFcnJvciIsInRleHQiLCJjc3ZUZXh0IiwiaGVhZGVyIiwiZHluYW1pY1R5cGluZyIsInNraXBFbXB0eUxpbmVzIiwiY29tcGxldGUiLCJyZXN1bHRzIiwia2V5cyIsInhLZXkiLCJ5S2V5IiwiYXhpc1N0eWxlIiwiZm9udFNpemUiLCJmaWxsIiwicmVuZGVyQ2hhcnQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2UiLCJkYXRhS2V5IiwidGljayIsImNvbnRlbnRTdHlsZSIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJ3cmFwcGVyU3R5bGUiLCJwYWRkaW5nVG9wIiwic3Ryb2tlV2lkdGgiLCJkb3QiLCJhY3RpdmVEb3QiLCJjeCIsImN5IiwibGFiZWxMaW5lIiwicGVyY2VudCIsInRvRml4ZWQiLCJvdXRlclJhZGl1cyIsIm5hbWVLZXkiLCJlbnRyeSIsImxheW91dCIsInZlcnRpY2FsQWxpZ24iLCJhbGlnbiIsImN1cnNvciIsInJhZGl1cyIsIndpZHRoIiwiaGVpZ2h0Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiRGF0YVByb3ZpZGVyU3BhY2UiLCJkYXRhc2V0cyIsInNldEZpbGUiLCJwcmV2aWV3Iiwic2V0UHJldmlldyIsInNldEhlYWRlcnMiLCJjb2x1bW5NYXBwaW5nIiwic2V0Q29sdW1uTWFwcGluZyIsImRhdGFzZXROYW1lIiwic2V0RGF0YXNldE5hbWUiLCJpc1VwbG9hZGluZyIsInNldElzVXBsb2FkaW5nIiwic2VsZWN0ZWRGaWxlIiwicmVwbGFjZSIsImNvbHMiLCJpbml0aWFsTWFwcGluZyIsImgiLCJ0b2dnbGVUeXBlIiwicHJldiIsImhhbmRsZVVwbG9hZCIsInBheWxvYWQiLCJtZXRhZGF0YSIsImNvbHVtbnMiLCJ1cGxvYWRlZEF0IiwidG9JU09TdHJpbmciLCJyb3dDb3VudCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwicm93IiwiZHMiLCJyb3dzQ291bnQiLCJ1c2VOYXZpZ2F0ZSIsImp3dERlY29kZSIsIl91c2VyIiwiX3VzZXIyIiwiX3VzZXIzIiwibmF2aWdhdGUiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsInVzZXIiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiY2FuU2VlRGFzaGJvYXJkIiwicm9sZXMiLCJjbG9zZU1lbnUiLCJGcmFnbWVudCIsInVzZVJlZiIsIlN1c3BlbnNlIiwiQ2FudmFzIiwidXNlRnJhbWUiLCJ1c2VUaHJlZSIsInVzZUdMVEYiLCJ1c2VBbmltYXRpb25zIiwiQ2VudGVyIiwiSHRtbCIsInVzZVRleHR1cmUiLCJTdGFycyIsIk1PREVMX1BBVEgiLCJURVhUVVJFX1BBVEgiLCJBTklNQVRJT05fTkFNRSIsIkRyYWdvbk1vZGVsIiwidml0ZXNzZVJvdGF0aW9uIiwidml0ZXNzZUFuaW1hdGlvbiIsImZhY3RldXJUYWlsbGUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl91c2VHTFRGIiwic2NlbmUiLCJhbmltYXRpb25zIiwidGV4dHVyZSIsIl91c2VUaHJlZSIsInZpZXdwb3J0IiwiYmFzZVNjYWxlIiwiZmluYWxTY2FsZSIsImZsaXBZIiwiY29sb3JTcGFjZSIsImdyb3VwIiwiX3VzZUFuaW1hdGlvbnMiLCJhY3Rpb25zIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwidHJhdmVyc2UiLCJjaGlsZCIsImlzTWVzaCIsIm1hdGVyaWFsIiwibmVlZHNVcGRhdGUiLCJhY3Rpb24iLCJyZXNldCIsImZhZGVJbiIsInBsYXkiLCJ0aW1lU2NhbGUiLCJ0b2dnbGVBbmltYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJwYXVzZWQiLCJjdXJyZW50Iiwicm90YXRpb24iLCJfZXh0ZW5kcyIsInJlZiIsIm9iamVjdCIsIm9uUG9pbnRlck92ZXIiLCJvblBvaW50ZXJPdXQiLCJzY2FsZSIsIk5pZ2h0RnVyeVNjZW5lIiwicm90U3BlZWQiLCJzZXRSb3RTcGVlZCIsImFuaW1TcGVlZCIsInNldEFuaW1TcGVlZCIsInNpemVGYWN0b3IiLCJzZXRTaXplRmFjdG9yIiwiY29udHJvbHNWaXNpYmxlIiwic2V0Q29udHJvbHNWaXNpYmxlIiwiaGFuZGxlUmVzZXQiLCJzaGFkb3dzIiwiY2FtZXJhIiwiZm92IiwiYXR0YWNoIiwiYXJncyIsImRlcHRoIiwiY291bnQiLCJmYWN0b3IiLCJzYXR1cmF0aW9uIiwiZmFkZSIsInNwZWVkIiwiaW50ZW5zaXR5IiwiZmFsbGJhY2siLCJjZW50ZXIiLCJtaW4iLCJtYXgiLCJzdGVwIiwicGFyc2VGbG9hdCIsInByZWxvYWQiLCJob3ZlciIsInNldEhvdmVyIiwicmF0aW5nIiwic2V0UmF0aW5nIiwiaGFuZGxlUmF0aW5nIiwic3RhciIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIl9yZWYkYXV0b1BsYXkiLCJhdWRpb1JlZiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImlzQmxvY2tlZCIsInNldElzQmxvY2tlZCIsInBsYXlQcm9taXNlIiwidG9nZ2xlUGxheSIsInBhdXNlIiwiaGFuZGxlVGltZVVwZGF0ZSIsInRvdGFsIiwiZm9ybWF0VGltZSIsImhhbmRsZVNlZWsiLCJjbGllbnRXaWR0aCIsImNsaWNrWCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WCIsInRpbWUiLCJpc05hTiIsIk1hdGgiLCJmbG9vciIsInNlYyIsImJhcnMiLCJhbmltYXRpb25EdXJhdGlvbiIsInJhbmRvbSIsIm9uVGltZVVwZGF0ZSIsIm9uRW5kZWQiLCJvbkxvYWRlZE1ldGFkYXRhIiwidmlld0JveCIsIl9jdXJyZW50VXNlciIsIl9kYXRhJGFsbFVzZXJzIiwiX2RhdGEkbWFuYWdlbWVudEFydGljIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJjdXJyZW50VXNlciIsImlzRnVsbEFkbWluIiwiaXNQcm92aWRlciIsImlzRGVzaWduZXIiLCJpc0VkaXRvciIsImxvYWRTdGF0cyIsImhhbmRsZURlbGV0ZUFydGljbGUiLCJjb25maXJtIiwibWFuYWdlbWVudEFydGljbGVzIiwiYXJ0IiwiaGFuZGxlRWRpdFN1Y2Nlc3MiLCJoYW5kbGVQcm9tb3RlIiwidXNlcklkIiwidXBkYXRlZERhdGEiLCJhbGxVc2VycyIsIm5ld1JvbGVzIiwidXNlcnNDb3VudCIsImFydGljbGVzQ291bnQiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwic2V0VXNlciIsInNvcnRPcmRlciIsInNldFNvcnRPcmRlciIsInZpZXciLCJzZXRWaWV3Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJkZWNvZGVkIiwiZmV0Y2hBcnRpY2xlcyIsInVybCIsIkFjY2VwdCIsImhhbmRsZURlbGV0ZSIsIl90MyIsImFJZCIsInBvcCIsImhhbmRsZVN1Y2Nlc3MiLCJ1c2VyUm9sZXMiLCJzdXBlckVkaXRvcnMiLCJpc1N1cGVyRWRpdG9yIiwic29tZSIsImlzQXV0aG9yIiwiY2FuQ3JlYXRlIiwiX2FydGljbGUkYXV0aG9yMiIsIl9hcnRpY2xlJGF1dGhvcjMiLCJjbGVhbklkIiwiaXNPd25lciIsImNhbkVkaXRUaGlzIiwidXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNldEl0ZW0iLCJocmVmIiwicGxhaW5QYXNzd29yZCIsInJvbGUiLCJzZXRGb3JtRGF0YSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIkFyY0VsZW1lbnQiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkRvdWdobnV0IiwicmVnaXN0ZXIiLCJib3hPZmZpY2VEYXRhIiwic2V0Qm94T2ZmaWNlRGF0YSIsInBvcHVsYXRpb25EYXRhIiwic2V0UG9wdWxhdGlvbkRhdGEiLCJ0aW1lbGluZURhdGEiLCJzZXRUaW1lbGluZURhdGEiLCJsb2FkQ1NWIiwiY2FsbGJhY2siLCJ0eHQiLCJsaW5lcyIsInRyaW0iLCJ2YWxzIiwicmVkdWNlIiwiYWNjIiwibGFiZWxzIiwiYm9yZGVyV2lkdGgiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInRlbnNpb24iLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJwbHVnaW5zIiwibGVnZW5kIiwiZm9udCIsImZhbWlseSIsInNjYWxlcyIsInRpY2tzIiwiZ3JpZCIsIngiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==