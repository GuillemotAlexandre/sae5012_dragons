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

var ArticleForm = function ArticleForm(_ref) {
  var id = _ref.id,
    onSuccess = _ref.onSuccess;
  var isEditMode = Boolean(id);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_39__.useState)({
      title: '',
      summary: '',
      content: '' // Assure-toi que ce champ existe dans ton entité Article.php
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_39__.useEffect)(function () {
    if (isEditMode) {
      fetch("/api/articles/".concat(id), {
        headers: {
          'Accept': 'application/ld+json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        return setFormData({
          title: data.title || '',
          summary: data.summary || '',
          content: data.content || ''
        });
      });
    }
  }, [id, isEditMode]);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var method, url, response, errorData, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();

            // IMPORTANT : Pour API Platform, le format par défaut est JSON-LD
            // En cas de modification (PUT/PATCH), on utilise souvent PATCH pour éviter les erreurs 415
            method = isEditMode ? 'PATCH' : 'POST';
            url = isEditMode ? "/api/articles/".concat(id) : '/api/articles';
            _context.p = 1;
            _context.n = 2;
            return fetch(url, {
              method: method,
              headers: {
                // Correction de l'erreur 415 : on précise le format LD+JSON
                'Content-Type': isEditMode ? 'application/merge-patch+json' : 'application/ld+json',
                'Authorization': "Bearer ".concat(localStorage.getItem('token')),
                'Accept': 'application/ld+json'
              },
              body: JSON.stringify(formData)
            });
          case 2:
            response = _context.v;
            if (!response.ok) {
              _context.n = 3;
              break;
            }
            onSuccess();
            _context.n = 5;
            break;
          case 3:
            _context.n = 4;
            return response.json();
          case 4:
            errorData = _context.v;
            console.error("Détail de l'erreur serveur :", errorData);
            alert("Le Grand Conseil refuse ce parchemin. Vérifiez le format des données.");
          case 5:
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            console.error("Erreur réseau :", _t);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[1, 6]]);
    }));
    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", {
    className: "max-w-2xl mx-auto p-8 bg-stone-900 border-2 border-viking-gold shadow-2xl rounded-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("h2", {
    className: "text-3xl font-dragon text-viking-gold mb-6 uppercase tracking-tighter"
  }, isEditMode ? "Modifier le parchemin" : "Graver un nouveau récit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("label", {
    className: "block text-stone-400 mb-2 font-bold uppercase text-[10px] tracking-widest"
  }, "Titre de la l\xE9gende"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("input", {
    type: "text",
    className: "w-full bg-black/40 border border-stone-700 p-3 text-white focus:border-viking-gold outline-none transition",
    value: formData.title,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        title: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("label", {
    className: "block text-stone-400 mb-2 font-bold uppercase text-[10px] tracking-widest"
  }, "R\xE9sum\xE9 (Appara\xEEt sur le mur)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("textarea", {
    className: "w-full bg-black/40 border border-stone-700 p-3 text-white focus:border-viking-gold outline-none h-24",
    value: formData.summary,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        summary: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("label", {
    className: "block text-stone-400 mb-2 font-bold uppercase text-[10px] tracking-widest"
  }, "D\xE9tails de l'aventure"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("textarea", {
    className: "w-full bg-black/40 border border-stone-700 p-3 text-white focus:border-viking-gold outline-none h-48",
    value: formData.content,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        content: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("button", {
    type: "submit",
    className: "w-full bg-viking-gold text-black font-black py-4 uppercase tracking-widest hover:bg-yellow-500 transition shadow-lg"
  }, isEditMode ? "Mettre à jour" : "Sceller le récit")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleForm);

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/index-8afac004.esm.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/web/Html.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/useGLTF.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/useTexture.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/useAnimations.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/Center.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/Stars.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }























function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

 // 👈 Ajoute useThree
// import { useGLTF, useAnimations, Center, Html, useTexture } from '@react-three/drei';

var MODEL_PATH = '/models/night_fury.glb';
var TEXTURE_PATH = '/textures/night_fury_skin.webp';
var ANIMATION_NAME = 'NightFury_armatureAction';
function DragonModel(props) {
  var _useGLTF = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_27__.useGLTF)(MODEL_PATH),
    scene = _useGLTF.scene,
    animations = _useGLTF.animations;
  var texture = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_28__.useTexture)(TEXTURE_PATH);

  // Pour rendre le dragon responsive (Calcul automatique)
  var _useThree = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_25__.A)(),
    viewport = _useThree.viewport;

  // 🧠 LE CALCUL INTELLIGENT :
  // Si l'écran est petit (mobile), on réduit l'échelle.
  // viewport.width est la largeur de la scène en unités 3D.
  var echelleResponsive = viewport.width < 5 ? 0.5 : 0.8;
  texture.flipY = false;
  texture.colorSpace = 'srgb';
  var group = (0,react__WEBPACK_IMPORTED_MODULE_23__.useRef)();
  var _useAnimations = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_29__.useAnimations)(animations, group),
    actions = _useAnimations.actions;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPlaying = _useState2[0],
    setIsPlaying = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(function () {
    scene.traverse(function (child) {
      if (child.isMesh) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);
  (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(function () {
    if (actions && actions[ANIMATION_NAME]) {
      var action = actions[ANIMATION_NAME];
      action.reset().fadeIn(0.5).play();
      action.timeScale = 2.5;
      setIsPlaying(true);
    }
  }, [actions]);
  var toggleAnimation = function toggleAnimation(e) {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
    var action = actions[ANIMATION_NAME];
    if (!action) return;
    if (isPlaying) action.fadeOut(0.5);else {
      action.reset().fadeIn(0.5).play();
      action.timeScale = 1.5;
    }
    setIsPlaying(!isPlaying);
  };
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_25__.C)(function () {
    if (group.current) group.current.rotation.y += 0.005;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("primitive", _extends({
    ref: group,
    object: scene,
    onClick: toggleAnimation,
    onPointerOver: function onPointerOver() {
      return document.body.style.cursor = 'pointer';
    },
    onPointerOut: function onPointerOut() {
      return document.body.style.cursor = 'auto';
    }

    // 👇 On applique l'échelle calculée ici
    ,
    scale: echelleResponsive

    // 👇 On force X à 0 pour le centrage horizontal absolu
    // [X=0, Y=-1 (pour baisser un peu), Z=0]
    ,
    position: [0, 0.5, 0]
  }, props));
}
var NightFuryScene = function NightFuryScene() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "h-full w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_24__.Canvas, {
    shadows: true,
    camera: {
      position: [0, 2, 10],
      fov: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("color", {
    attach: "background",
    args: ['#050510']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_31__.Stars, {
    radius: 100 // Rayon de la sphère d'étoiles
    ,
    depth: 50 // Profondeur perçue
    ,
    count: 5000 // Nombre d'étoiles
    ,
    factor: 4 // Taille des étoiles
    ,
    saturation: 0 // 0 = blanc, 1 = coloré
    ,
    fade: true // Les étoiles disparaissent aux bords (effet réaliste)
    ,
    speed: 1 // Vitesse de scintillement
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("ambientLight", {
    intensity: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("directionalLight", {
    position: [10, 10, 5],
    intensity: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("spotLight", {
    position: [-5, 5, 10],
    intensity: 5,
    color: "#a855f7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("spotLight", {
    position: [0, 5, -10],
    intensity: 5,
    color: "#ffffff"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(react__WEBPACK_IMPORTED_MODULE_23__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_26__.Html, {
      center: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
      className: "text-white animate-pulse"
    }, "Invocation..."))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_30__.Center, {
    top: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(DragonModel, {
    scale: 1.25
  })))));
};
_react_three_drei__WEBPACK_IMPORTED_MODULE_27__.useGLTF.preload(MODEL_PATH);
_react_three_drei__WEBPACK_IMPORTED_MODULE_28__.useTexture.preload(TEXTURE_PATH);
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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19__);
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
























function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var AdminDashboard = function AdminDashboard() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    // Appel à l'API avec le token JWT stocké
    fetch('/api/admin/stats', {
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('token')),
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
  }, []);
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "text-viking-fire p-10 text-center font-dragon"
  }, error);
  if (!data) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "text-viking-gold p-10 font-dragon animate-pulse text-center"
  }, "Appel au Grand Conseil...");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "max-w-6xl mx-auto p-6 text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h1", {
    className: "text-5xl font-dragon text-viking-parchment mb-10 border-b border-viking-gold/30 pb-4 uppercase"
  }, "Salle de Commandement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "bg-stone-900 border-l-4 border-viking-gold p-6 shadow-xl transform hover:scale-105 transition"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h2", {
    className: "text-stone-500 uppercase text-xs font-black tracking-widest"
  }, "Guerriers au village"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
    className: "text-4xl font-dragon mt-2 text-white"
  }, data.usersCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "bg-stone-900 border-l-4 border-viking-fire p-6 shadow-xl transform hover:scale-105 transition"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h2", {
    className: "text-stone-500 uppercase text-xs font-black tracking-widest"
  }, "Chroniques grav\xE9es"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
    className: "text-4xl font-dragon mt-2 text-white"
  }, data.articlesCount))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "bg-stone-900/50 p-6 rounded border border-stone-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h3", {
    className: "text-viking-gold font-dragon text-xl mb-6 uppercase tracking-wider"
  }, "Derniers arrivants"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "space-y-3"
  }, data.recentUsers.map(function (u, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      key: i,
      className: "flex justify-between items-center p-4 bg-black/20 border border-stone-800 hover:border-viking-gold/40 transition"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "flex flex-col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
      className: "font-bold text-viking-parchment"
    }, u.pseudo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
      className: "text-stone-500 text-xs"
    }, u.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
      className: "text-[10px] bg-stone-800 px-3 py-1 rounded text-stone-400 uppercase font-black"
    }, u.roles.includes('ROLE_EDITEUR') ? 'Officier' : 'Guerrier'));
  }))));
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
  }, "Fournisseur de donn\xE9es (Scribe)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement("label", {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-three_drei_core_Center_js-node_modules_react-three_drei_core_Stars-4b007d"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNvQjtBQUNrQjs7QUFFaEU7QUFDMEI7O0FBRTFCO0FBQ3dDO0FBQ0U7QUFDSTtBQUNKO0FBQ0Q7QUFDTztBQUNOOztBQUUxQztBQUNvRDtBQUVwRGEsT0FBTyxDQUFDQyxHQUFHLENBQUMsNENBQTRDLENBQUM7QUFFekQsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUNJZiwwREFBQSxDQUFDRSwyREFBYSxxQkFDVkYsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUE0RCxnQkFFdkVqQiwwREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQWdHLGdCQUMzR2pCLDBEQUFBO0lBQ0lrQixHQUFHLEVBQUMsc0JBQXNCO0lBQzFCQyxHQUFHLEVBQUMscUJBQWtCO0lBQ3RCRixTQUFTLEVBQUM7RUFBK0YsQ0FDNUcsQ0FBQyxlQUNGakIsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUE4RSxDQUFNLENBQ2xHLENBQUMsZUFFTmpCLDBEQUFBLENBQUNTLDBEQUFNLE1BQUUsQ0FBQyxlQUVWVCwwREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQXNELGdCQUNqRWpCLDBEQUFBLENBQUNHLG9EQUFNLHFCQUNISCwwREFBQSxDQUFDSSxtREFBSztJQUFDZ0IsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFckIsMERBQUEsQ0FBQ0ssdURBQVEsTUFBRTtFQUFFLENBQUUsQ0FBQyxlQUN6Q0wsMERBQUEsQ0FBQ0ksbURBQUs7SUFBQ2dCLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNNLHdEQUFTLE1BQUU7RUFBRSxDQUFFLENBQUMsZUFDL0NOLDBEQUFBLENBQUNJLG1EQUFLO0lBQUNnQixJQUFJLEVBQUMsb0JBQW9CO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNPLDBEQUFXLE1BQUU7RUFBRSxDQUFFLENBQUMsZUFDN0RQLDBEQUFBLENBQUNJLG1EQUFLO0lBQUNnQixJQUFJLEVBQUMsY0FBYztJQUFDQyxPQUFPLGVBQUVyQiwwREFBQSxDQUFDUSx3REFBUyxNQUFFO0VBQUUsQ0FBRSxDQUFDLGVBQ3JEUiwwREFBQSxDQUFDSSxtREFBSztJQUFDZ0IsSUFBSSxFQUFDLFdBQVc7SUFBQ0MsT0FBTyxlQUFFckIsMERBQUEsQ0FBQ1UsNERBQVksTUFBRTtFQUFFLENBQUUsQ0FBQyxlQUNyRFYsMERBQUEsQ0FBQ0ksbURBQUs7SUFBQ2dCLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNXLHlEQUFTLE1BQUU7RUFBRSxDQUFFLENBQUMsZUFHL0NYLDBEQUFBLENBQUNJLG1EQUFLO0lBQUNnQixJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUVyQiwwREFBQSxDQUFDWSw4REFBYyxNQUFFO0VBQUUsQ0FBRSxDQUMvQyxDQUNQLENBQUMsZUFFTlosMERBQUE7SUFBUWlCLFNBQVMsRUFBQztFQUE0RyxnQkFDMUhqQiwwREFBQSxZQUFHLG1EQUE4QyxDQUM3QyxDQUNQLENBQ00sQ0FBQztBQUV4QixDQUFDO0FBRUQsSUFBTXNCLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0FBQ3pELElBQUlGLFdBQVcsRUFBRTtFQUNiLElBQU1HLElBQUksR0FBR3hCLDREQUFVLENBQUNxQixXQUFXLENBQUM7RUFDcENHLElBQUksQ0FBQ0MsTUFBTSxjQUFDMUIsMERBQUEsQ0FBQ2UsR0FBRyxNQUFFLENBQUMsQ0FBQztFQUNwQkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsK0JBQStCLENBQUM7QUFDaEQsQ0FBQyxNQUFNO0VBQ0hELE9BQU8sQ0FBQ2MsS0FBSyxDQUFDLCtDQUErQyxDQUFDO0FBQ2xFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJDakVBLHVLQUFBQyxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssV0FBQSw4QkFBQUMsRUFBQU4sQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBQyxDQUFBLEdBQUFMLENBQUEsSUFBQUEsQ0FBQSxDQUFBTSxTQUFBLFlBQUFDLFNBQUEsR0FBQVAsQ0FBQSxHQUFBTyxTQUFBLEVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsQ0FBQUMsU0FBQSxVQUFBSyxtQkFBQSxDQUFBSCxDQUFBLHVCQUFBVixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBSSxDQUFBLE1BQUFDLENBQUEsR0FBQVgsQ0FBQSxRQUFBWSxDQUFBLE9BQUFDLENBQUEsS0FBQUYsQ0FBQSxLQUFBYixDQUFBLEtBQUFnQixDQUFBLEVBQUFwQixDQUFBLEVBQUFxQixDQUFBLEVBQUFDLENBQUEsRUFBQU4sQ0FBQSxFQUFBTSxDQUFBLENBQUFDLElBQUEsQ0FBQXZCLENBQUEsTUFBQXNCLENBQUEsV0FBQUEsRUFBQXJCLENBQUEsRUFBQUMsQ0FBQSxXQUFBTSxDQUFBLEdBQUFQLENBQUEsRUFBQVEsQ0FBQSxNQUFBRyxDQUFBLEdBQUFaLENBQUEsRUFBQW1CLENBQUEsQ0FBQWYsQ0FBQSxHQUFBRixDQUFBLEVBQUFtQixDQUFBLGdCQUFBQyxFQUFBcEIsQ0FBQSxFQUFBRSxDQUFBLFNBQUFLLENBQUEsR0FBQVAsQ0FBQSxFQUFBVSxDQUFBLEdBQUFSLENBQUEsRUFBQUgsQ0FBQSxPQUFBaUIsQ0FBQSxJQUFBRixDQUFBLEtBQUFWLENBQUEsSUFBQUwsQ0FBQSxHQUFBZ0IsQ0FBQSxDQUFBTyxNQUFBLEVBQUF2QixDQUFBLFVBQUFLLENBQUEsRUFBQUUsQ0FBQSxHQUFBUyxDQUFBLENBQUFoQixDQUFBLEdBQUFxQixDQUFBLEdBQUFILENBQUEsQ0FBQUYsQ0FBQSxFQUFBUSxDQUFBLEdBQUFqQixDQUFBLEtBQUFOLENBQUEsUUFBQUksQ0FBQSxHQUFBbUIsQ0FBQSxLQUFBckIsQ0FBQSxNQUFBUSxDQUFBLEdBQUFKLENBQUEsRUFBQUMsQ0FBQSxHQUFBRCxDQUFBLFlBQUFDLENBQUEsV0FBQUQsQ0FBQSxNQUFBQSxDQUFBLE1BQUFSLENBQUEsSUFBQVEsQ0FBQSxPQUFBYyxDQUFBLE1BQUFoQixDQUFBLEdBQUFKLENBQUEsUUFBQW9CLENBQUEsR0FBQWQsQ0FBQSxRQUFBQyxDQUFBLE1BQUFVLENBQUEsQ0FBQUMsQ0FBQSxHQUFBaEIsQ0FBQSxFQUFBZSxDQUFBLENBQUFmLENBQUEsR0FBQUksQ0FBQSxPQUFBYyxDQUFBLEdBQUFHLENBQUEsS0FBQW5CLENBQUEsR0FBQUosQ0FBQSxRQUFBTSxDQUFBLE1BQUFKLENBQUEsSUFBQUEsQ0FBQSxHQUFBcUIsQ0FBQSxNQUFBakIsQ0FBQSxNQUFBTixDQUFBLEVBQUFNLENBQUEsTUFBQUosQ0FBQSxFQUFBZSxDQUFBLENBQUFmLENBQUEsR0FBQXFCLENBQUEsRUFBQWhCLENBQUEsY0FBQUgsQ0FBQSxJQUFBSixDQUFBLGFBQUFtQixDQUFBLFFBQUFILENBQUEsT0FBQWQsQ0FBQSxxQkFBQUUsQ0FBQSxFQUFBVyxDQUFBLEVBQUFRLENBQUEsUUFBQVQsQ0FBQSxZQUFBVSxTQUFBLHVDQUFBUixDQUFBLFVBQUFELENBQUEsSUFBQUssQ0FBQSxDQUFBTCxDQUFBLEVBQUFRLENBQUEsR0FBQWhCLENBQUEsR0FBQVEsQ0FBQSxFQUFBTCxDQUFBLEdBQUFhLENBQUEsR0FBQXhCLENBQUEsR0FBQVEsQ0FBQSxPQUFBVCxDQUFBLEdBQUFZLENBQUEsTUFBQU0sQ0FBQSxLQUFBVixDQUFBLEtBQUFDLENBQUEsR0FBQUEsQ0FBQSxRQUFBQSxDQUFBLFNBQUFVLENBQUEsQ0FBQWYsQ0FBQSxRQUFBa0IsQ0FBQSxDQUFBYixDQUFBLEVBQUFHLENBQUEsS0FBQU8sQ0FBQSxDQUFBZixDQUFBLEdBQUFRLENBQUEsR0FBQU8sQ0FBQSxDQUFBQyxDQUFBLEdBQUFSLENBQUEsYUFBQUksQ0FBQSxNQUFBUixDQUFBLFFBQUFDLENBQUEsS0FBQUgsQ0FBQSxZQUFBTCxDQUFBLEdBQUFPLENBQUEsQ0FBQUYsQ0FBQSxXQUFBTCxDQUFBLEdBQUFBLENBQUEsQ0FBQTBCLElBQUEsQ0FBQW5CLENBQUEsRUFBQUksQ0FBQSxVQUFBYyxTQUFBLDJDQUFBekIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLEdBQUFYLENBQUEsQ0FBQTRCLEtBQUEsRUFBQXBCLENBQUEsU0FBQUEsQ0FBQSxvQkFBQUEsQ0FBQSxLQUFBUixDQUFBLEdBQUFPLENBQUEsZUFBQVAsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBbkIsQ0FBQSxHQUFBQyxDQUFBLFNBQUFHLENBQUEsR0FBQWMsU0FBQSx1Q0FBQXBCLENBQUEsZ0JBQUFHLENBQUEsT0FBQUQsQ0FBQSxHQUFBUixDQUFBLGNBQUFDLENBQUEsSUFBQWlCLENBQUEsR0FBQUMsQ0FBQSxDQUFBZixDQUFBLFFBQUFRLENBQUEsR0FBQVYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSxFQUFBZSxDQUFBLE9BQUFFLENBQUEsa0JBQUFwQixDQUFBLElBQUFPLENBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLE1BQUFHLENBQUEsR0FBQVgsQ0FBQSxjQUFBZSxDQUFBLG1CQUFBYSxLQUFBLEVBQUE1QixDQUFBLEVBQUEyQixJQUFBLEVBQUFWLENBQUEsU0FBQWhCLENBQUEsRUFBQUksQ0FBQSxFQUFBRSxDQUFBLFFBQUFJLENBQUEsUUFBQVMsQ0FBQSxnQkFBQVYsVUFBQSxjQUFBbUIsa0JBQUEsY0FBQUMsMkJBQUEsS0FBQTlCLENBQUEsR0FBQVksTUFBQSxDQUFBbUIsY0FBQSxNQUFBdkIsQ0FBQSxNQUFBTCxDQUFBLElBQUFILENBQUEsQ0FBQUEsQ0FBQSxJQUFBRyxDQUFBLFNBQUFXLG1CQUFBLENBQUFkLENBQUEsT0FBQUcsQ0FBQSxpQ0FBQUgsQ0FBQSxHQUFBVyxDQUFBLEdBQUFtQiwwQkFBQSxDQUFBckIsU0FBQSxHQUFBQyxTQUFBLENBQUFELFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsWUFBQU8sRUFBQWhCLENBQUEsV0FBQWEsTUFBQSxDQUFBb0IsY0FBQSxHQUFBcEIsTUFBQSxDQUFBb0IsY0FBQSxDQUFBakMsQ0FBQSxFQUFBK0IsMEJBQUEsS0FBQS9CLENBQUEsQ0FBQWtDLFNBQUEsR0FBQUgsMEJBQUEsRUFBQWhCLG1CQUFBLENBQUFmLENBQUEsRUFBQU0sQ0FBQSx5QkFBQU4sQ0FBQSxDQUFBVSxTQUFBLEdBQUFHLE1BQUEsQ0FBQUMsTUFBQSxDQUFBRixDQUFBLEdBQUFaLENBQUEsV0FBQThCLGlCQUFBLENBQUFwQixTQUFBLEdBQUFxQiwwQkFBQSxFQUFBaEIsbUJBQUEsQ0FBQUgsQ0FBQSxpQkFBQW1CLDBCQUFBLEdBQUFoQixtQkFBQSxDQUFBZ0IsMEJBQUEsaUJBQUFELGlCQUFBLEdBQUFBLGlCQUFBLENBQUFLLFdBQUEsd0JBQUFwQixtQkFBQSxDQUFBZ0IsMEJBQUEsRUFBQXpCLENBQUEsd0JBQUFTLG1CQUFBLENBQUFILENBQUEsR0FBQUcsbUJBQUEsQ0FBQUgsQ0FBQSxFQUFBTixDQUFBLGdCQUFBUyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFSLENBQUEsaUNBQUFXLG1CQUFBLENBQUFILENBQUEsOERBQUF3QixZQUFBLFlBQUFBLGFBQUEsYUFBQUMsQ0FBQSxFQUFBN0IsQ0FBQSxFQUFBOEIsQ0FBQSxFQUFBdEIsQ0FBQTtBQUFBLFNBQUFELG9CQUFBZixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBSCxDQUFBLFFBQUFPLENBQUEsR0FBQUssTUFBQSxDQUFBMEIsY0FBQSxRQUFBL0IsQ0FBQSx1QkFBQVIsQ0FBQSxJQUFBUSxDQUFBLFFBQUFPLG1CQUFBLFlBQUF5QixtQkFBQXhDLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUEsYUFBQUssRUFBQUosQ0FBQSxFQUFBRSxDQUFBLElBQUFXLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxZQUFBRixDQUFBLGdCQUFBeUMsT0FBQSxDQUFBdkMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFKLENBQUEsU0FBQUUsQ0FBQSxHQUFBTSxDQUFBLEdBQUFBLENBQUEsQ0FBQVIsQ0FBQSxFQUFBRSxDQUFBLElBQUEyQixLQUFBLEVBQUF6QixDQUFBLEVBQUFzQyxVQUFBLEdBQUF6QyxDQUFBLEVBQUEwQyxZQUFBLEdBQUExQyxDQUFBLEVBQUEyQyxRQUFBLEdBQUEzQyxDQUFBLE1BQUFELENBQUEsQ0FBQUUsQ0FBQSxJQUFBRSxDQUFBLElBQUFFLENBQUEsYUFBQUEsQ0FBQSxjQUFBQSxDQUFBLG1CQUFBUyxtQkFBQSxDQUFBZixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBSCxDQUFBO0FBQUEsU0FBQTRDLG1CQUFBekMsQ0FBQSxFQUFBSCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSSxDQUFBLEVBQUFlLENBQUEsRUFBQVosQ0FBQSxjQUFBRCxDQUFBLEdBQUFKLENBQUEsQ0FBQWlCLENBQUEsRUFBQVosQ0FBQSxHQUFBRyxDQUFBLEdBQUFKLENBQUEsQ0FBQXFCLEtBQUEsV0FBQXpCLENBQUEsZ0JBQUFKLENBQUEsQ0FBQUksQ0FBQSxLQUFBSSxDQUFBLENBQUFvQixJQUFBLEdBQUEzQixDQUFBLENBQUFXLENBQUEsSUFBQWtDLE9BQUEsQ0FBQUMsT0FBQSxDQUFBbkMsQ0FBQSxFQUFBb0MsSUFBQSxDQUFBOUMsQ0FBQSxFQUFBSSxDQUFBO0FBQUEsU0FBQTJDLGtCQUFBN0MsQ0FBQSw2QkFBQUgsQ0FBQSxTQUFBRCxDQUFBLEdBQUFrRCxTQUFBLGFBQUFKLE9BQUEsV0FBQTVDLENBQUEsRUFBQUksQ0FBQSxRQUFBZSxDQUFBLEdBQUFqQixDQUFBLENBQUErQyxLQUFBLENBQUFsRCxDQUFBLEVBQUFELENBQUEsWUFBQW9ELE1BQUFoRCxDQUFBLElBQUF5QyxrQkFBQSxDQUFBeEIsQ0FBQSxFQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLEVBQUE4QyxLQUFBLEVBQUFDLE1BQUEsVUFBQWpELENBQUEsY0FBQWlELE9BQUFqRCxDQUFBLElBQUF5QyxrQkFBQSxDQUFBeEIsQ0FBQSxFQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLEVBQUE4QyxLQUFBLEVBQUFDLE1BQUEsV0FBQWpELENBQUEsS0FBQWdELEtBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFBRSxlQUFBcEQsQ0FBQSxFQUFBRixDQUFBLFdBQUF1RCxlQUFBLENBQUFyRCxDQUFBLEtBQUFzRCxxQkFBQSxDQUFBdEQsQ0FBQSxFQUFBRixDQUFBLEtBQUF5RCwyQkFBQSxDQUFBdkQsQ0FBQSxFQUFBRixDQUFBLEtBQUEwRCxnQkFBQTtBQUFBLFNBQUFBLGlCQUFBLGNBQUFoQyxTQUFBO0FBQUEsU0FBQStCLDRCQUFBdkQsQ0FBQSxFQUFBbUIsQ0FBQSxRQUFBbkIsQ0FBQSwyQkFBQUEsQ0FBQSxTQUFBeUQsaUJBQUEsQ0FBQXpELENBQUEsRUFBQW1CLENBQUEsT0FBQXBCLENBQUEsTUFBQTJELFFBQUEsQ0FBQWpDLElBQUEsQ0FBQXpCLENBQUEsRUFBQTJELEtBQUEsNkJBQUE1RCxDQUFBLElBQUFDLENBQUEsQ0FBQTRELFdBQUEsS0FBQTdELENBQUEsR0FBQUMsQ0FBQSxDQUFBNEQsV0FBQSxDQUFBQyxJQUFBLGFBQUE5RCxDQUFBLGNBQUFBLENBQUEsR0FBQStELEtBQUEsQ0FBQUMsSUFBQSxDQUFBL0QsQ0FBQSxvQkFBQUQsQ0FBQSwrQ0FBQWlFLElBQUEsQ0FBQWpFLENBQUEsSUFBQTBELGlCQUFBLENBQUF6RCxDQUFBLEVBQUFtQixDQUFBO0FBQUEsU0FBQXNDLGtCQUFBekQsQ0FBQSxFQUFBbUIsQ0FBQSxhQUFBQSxDQUFBLElBQUFBLENBQUEsR0FBQW5CLENBQUEsQ0FBQXNCLE1BQUEsTUFBQUgsQ0FBQSxHQUFBbkIsQ0FBQSxDQUFBc0IsTUFBQSxZQUFBeEIsQ0FBQSxNQUFBSSxDQUFBLEdBQUE0RCxLQUFBLENBQUEzQyxDQUFBLEdBQUFyQixDQUFBLEdBQUFxQixDQUFBLEVBQUFyQixDQUFBLElBQUFJLENBQUEsQ0FBQUosQ0FBQSxJQUFBRSxDQUFBLENBQUFGLENBQUEsVUFBQUksQ0FBQTtBQUFBLFNBQUFvRCxzQkFBQXRELENBQUEsRUFBQXVCLENBQUEsUUFBQXhCLENBQUEsV0FBQUMsQ0FBQSxnQ0FBQUMsTUFBQSxJQUFBRCxDQUFBLENBQUFDLE1BQUEsQ0FBQUUsUUFBQSxLQUFBSCxDQUFBLDRCQUFBRCxDQUFBLFFBQUFELENBQUEsRUFBQUksQ0FBQSxFQUFBSSxDQUFBLEVBQUFJLENBQUEsRUFBQVMsQ0FBQSxPQUFBTCxDQUFBLE9BQUFWLENBQUEsaUJBQUFFLENBQUEsSUFBQVAsQ0FBQSxHQUFBQSxDQUFBLENBQUEwQixJQUFBLENBQUF6QixDQUFBLEdBQUFpRSxJQUFBLFFBQUExQyxDQUFBLFFBQUFaLE1BQUEsQ0FBQVosQ0FBQSxNQUFBQSxDQUFBLFVBQUFlLENBQUEsdUJBQUFBLENBQUEsSUFBQWhCLENBQUEsR0FBQVEsQ0FBQSxDQUFBbUIsSUFBQSxDQUFBMUIsQ0FBQSxHQUFBMkIsSUFBQSxNQUFBUCxDQUFBLENBQUErQyxJQUFBLENBQUFwRSxDQUFBLENBQUE2QixLQUFBLEdBQUFSLENBQUEsQ0FBQUcsTUFBQSxLQUFBQyxDQUFBLEdBQUFULENBQUEsaUJBQUFkLENBQUEsSUFBQUksQ0FBQSxPQUFBRixDQUFBLEdBQUFGLENBQUEseUJBQUFjLENBQUEsWUFBQWYsQ0FBQSxlQUFBVyxDQUFBLEdBQUFYLENBQUEsY0FBQVksTUFBQSxDQUFBRCxDQUFBLE1BQUFBLENBQUEsMkJBQUFOLENBQUEsUUFBQUYsQ0FBQSxhQUFBaUIsQ0FBQTtBQUFBLFNBQUFrQyxnQkFBQXJELENBQUEsUUFBQThELEtBQUEsQ0FBQUssT0FBQSxDQUFBbkUsQ0FBQSxVQUFBQSxDQUFBO0FBRG1EO0FBRW5ELElBQU1zRSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQUMsSUFBQSxFQUEwQjtFQUFBLElBQXBCQyxFQUFFLEdBQUFELElBQUEsQ0FBRkMsRUFBRTtJQUFFQyxTQUFTLEdBQUFGLElBQUEsQ0FBVEUsU0FBUztFQUNoQyxJQUFNQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQ0gsRUFBRSxDQUFDO0VBRTlCLElBQUFJLFNBQUEsR0FBZ0NSLGdEQUFRLENBQUM7TUFDckNTLEtBQUssRUFBRSxFQUFFO01BQ1RDLE9BQU8sRUFBRSxFQUFFO01BQ1hDLE9BQU8sRUFBRSxFQUFFLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBQUFDLFVBQUEsR0FBQTVCLGNBQUEsQ0FBQXdCLFNBQUE7SUFKS0ssUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTtFQU01QlgsaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSUssVUFBVSxFQUFFO01BQ1pTLEtBQUssa0JBQUFDLE1BQUEsQ0FBa0JaLEVBQUUsR0FBSTtRQUN6QmEsT0FBTyxFQUFFO1VBQUUsUUFBUSxFQUFFO1FBQXNCO01BQy9DLENBQUMsQ0FBQyxDQUNEdkMsSUFBSSxDQUFDLFVBQUF3QyxHQUFHO1FBQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQztNQUFBLEVBQUMsQ0FDdkJ6QyxJQUFJLENBQUMsVUFBQTBDLElBQUk7UUFBQSxPQUFJTixXQUFXLENBQUM7VUFDdEJMLEtBQUssRUFBRVcsSUFBSSxDQUFDWCxLQUFLLElBQUksRUFBRTtVQUN2QkMsT0FBTyxFQUFFVSxJQUFJLENBQUNWLE9BQU8sSUFBSSxFQUFFO1VBQzNCQyxPQUFPLEVBQUVTLElBQUksQ0FBQ1QsT0FBTyxJQUFJO1FBQzdCLENBQUMsQ0FBQztNQUFBLEVBQUM7SUFDUDtFQUNKLENBQUMsRUFBRSxDQUFDUCxFQUFFLEVBQUVFLFVBQVUsQ0FBQyxDQUFDO0VBRXBCLElBQU1lLFlBQVk7SUFBQSxJQUFBQyxLQUFBLEdBQUEzQyxpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBRyxTQUFBdUQsUUFBTzdGLENBQUM7TUFBQSxJQUFBOEYsTUFBQSxFQUFBQyxHQUFBLEVBQUFDLFFBQUEsRUFBQUMsU0FBQSxFQUFBQyxFQUFBO01BQUEsT0FBQTlELFlBQUEsR0FBQUMsQ0FBQSxXQUFBOEQsUUFBQTtRQUFBLGtCQUFBQSxRQUFBLENBQUFsRixDQUFBLEdBQUFrRixRQUFBLENBQUEvRixDQUFBO1VBQUE7WUFDekJKLENBQUMsQ0FBQ29HLGNBQWMsQ0FBQyxDQUFDOztZQUVsQjtZQUNBO1lBQ01OLE1BQU0sR0FBR2xCLFVBQVUsR0FBRyxPQUFPLEdBQUcsTUFBTTtZQUN0Q21CLEdBQUcsR0FBR25CLFVBQVUsb0JBQUFVLE1BQUEsQ0FBb0JaLEVBQUUsSUFBSyxlQUFlO1lBQUF5QixRQUFBLENBQUFsRixDQUFBO1lBQUFrRixRQUFBLENBQUEvRixDQUFBO1lBQUEsT0FHckNpRixLQUFLLENBQUNVLEdBQUcsRUFBRTtjQUM5QkQsTUFBTSxFQUFFQSxNQUFNO2NBQ2RQLE9BQU8sRUFBRTtnQkFDTDtnQkFDQSxjQUFjLEVBQUVYLFVBQVUsR0FBRyw4QkFBOEIsR0FBRyxxQkFBcUI7Z0JBQ25GLGVBQWUsWUFBQVUsTUFBQSxDQUFZZSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBRTtnQkFDMUQsUUFBUSxFQUFFO2NBQ2QsQ0FBQztjQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDdEIsUUFBUTtZQUNqQyxDQUFDLENBQUM7VUFBQTtZQVRJYSxRQUFRLEdBQUFHLFFBQUEsQ0FBQS9FLENBQUE7WUFBQSxLQVdWNEUsUUFBUSxDQUFDVSxFQUFFO2NBQUFQLFFBQUEsQ0FBQS9GLENBQUE7Y0FBQTtZQUFBO1lBQ1h1RSxTQUFTLENBQUMsQ0FBQztZQUFDd0IsUUFBQSxDQUFBL0YsQ0FBQTtZQUFBO1VBQUE7WUFBQStGLFFBQUEsQ0FBQS9GLENBQUE7WUFBQSxPQUdZNEYsUUFBUSxDQUFDUCxJQUFJLENBQUMsQ0FBQztVQUFBO1lBQWpDUSxTQUFTLEdBQUFFLFFBQUEsQ0FBQS9FLENBQUE7WUFDZm5DLE9BQU8sQ0FBQ2MsS0FBSyxDQUFDLDhCQUE4QixFQUFFa0csU0FBUyxDQUFDO1lBQ3hEVSxLQUFLLENBQUMsdUVBQXVFLENBQUM7VUFBQztZQUFBUixRQUFBLENBQUEvRixDQUFBO1lBQUE7VUFBQTtZQUFBK0YsUUFBQSxDQUFBbEYsQ0FBQTtZQUFBaUYsRUFBQSxHQUFBQyxRQUFBLENBQUEvRSxDQUFBO1lBR25GbkMsT0FBTyxDQUFDYyxLQUFLLENBQUMsaUJBQWlCLEVBQUFtRyxFQUFLLENBQUM7VUFBQztZQUFBLE9BQUFDLFFBQUEsQ0FBQTlFLENBQUE7UUFBQTtNQUFBLEdBQUF3RSxPQUFBO0lBQUEsQ0FFN0M7SUFBQSxnQkEvQktGLFlBQVlBLENBQUFpQixFQUFBO01BQUEsT0FBQWhCLEtBQUEsQ0FBQXpDLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0ErQmpCO0VBRUQsb0JBQ0k5RSwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQXNGLGdCQUNqR2pCLDJEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBdUUsR0FDaEZ1RixVQUFVLEdBQUcsdUJBQXVCLEdBQUcseUJBQ3hDLENBQUMsZUFFTHhHLDJEQUFBO0lBQU15SSxRQUFRLEVBQUVsQixZQUFhO0lBQUN0RyxTQUFTLEVBQUM7RUFBVyxnQkFDL0NqQiwyREFBQSwyQkFDSUEsMkRBQUE7SUFBT2lCLFNBQVMsRUFBQztFQUEyRSxHQUFDLHdCQUEwQixDQUFDLGVBQ3hIakIsMkRBQUE7SUFDSTBJLElBQUksRUFBQyxNQUFNO0lBQ1h6SCxTQUFTLEVBQUMsNEdBQTRHO0lBQ3RId0MsS0FBSyxFQUFFc0QsUUFBUSxDQUFDSixLQUFNO0lBQ3RCZ0MsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvRyxDQUFDO01BQUEsT0FBS29GLFdBQVcsQ0FBQTRCLGFBQUEsQ0FBQUEsYUFBQSxLQUFLN0IsUUFBUTtRQUFFSixLQUFLLEVBQUUvRSxDQUFDLENBQUNpSCxNQUFNLENBQUNwRjtNQUFLLEVBQUMsQ0FBQztJQUFBLENBQUM7SUFDbkVxRixRQUFRO0VBQUEsQ0FDWCxDQUNBLENBQUMsZUFFTjlJLDJEQUFBLDJCQUNJQSwyREFBQTtJQUFPaUIsU0FBUyxFQUFDO0VBQTJFLEdBQUMsdUNBQW1DLENBQUMsZUFDaklqQiwyREFBQTtJQUNJaUIsU0FBUyxFQUFDLHNHQUFzRztJQUNoSHdDLEtBQUssRUFBRXNELFFBQVEsQ0FBQ0gsT0FBUTtJQUN4QitCLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL0csQ0FBQztNQUFBLE9BQUtvRixXQUFXLENBQUE0QixhQUFBLENBQUFBLGFBQUEsS0FBSzdCLFFBQVE7UUFBRUgsT0FBTyxFQUFFaEYsQ0FBQyxDQUFDaUgsTUFBTSxDQUFDcEY7TUFBSyxFQUFDLENBQUM7SUFBQSxDQUFDO0lBQ3JFcUYsUUFBUTtFQUFBLENBQ1gsQ0FDQSxDQUFDLGVBRU45SSwyREFBQSwyQkFDSUEsMkRBQUE7SUFBT2lCLFNBQVMsRUFBQztFQUEyRSxHQUFDLDBCQUE0QixDQUFDLGVBQzFIakIsMkRBQUE7SUFDSWlCLFNBQVMsRUFBQyxzR0FBc0c7SUFDaEh3QyxLQUFLLEVBQUVzRCxRQUFRLENBQUNGLE9BQVE7SUFDeEI4QixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9HLENBQUM7TUFBQSxPQUFLb0YsV0FBVyxDQUFBNEIsYUFBQSxDQUFBQSxhQUFBLEtBQUs3QixRQUFRO1FBQUVGLE9BQU8sRUFBRWpGLENBQUMsQ0FBQ2lILE1BQU0sQ0FBQ3BGO01BQUssRUFBQyxDQUFDO0lBQUEsQ0FBQztJQUNyRXFGLFFBQVE7RUFBQSxDQUNYLENBQ0EsQ0FBQyxlQUVOOUksMkRBQUE7SUFBUTBJLElBQUksRUFBQyxRQUFRO0lBQUN6SCxTQUFTLEVBQUM7RUFBcUgsR0FDaEp1RixVQUFVLEdBQUcsZUFBZSxHQUFHLGtCQUM1QixDQUNOLENBQ0wsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUosV0FBVyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQzJCO0FBQ2Q7QUFFdkMsSUFBTTNGLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFBLEVBQVM7RUFBQSxJQUFBeUksS0FBQSxFQUFBQyxNQUFBLEVBQUFDLE1BQUE7RUFDakIsSUFBTUMsUUFBUSxHQUFHTCw2REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBTU0sS0FBSyxHQUFHckIsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0VBQzNDLElBQUlxQixJQUFJLEdBQUcsSUFBSTs7RUFFZjtFQUNBLElBQUlELEtBQUssRUFBRTtJQUNQLElBQUk7TUFDQUMsSUFBSSxHQUFHTixxREFBUyxDQUFDSyxLQUFLLENBQUM7SUFDM0IsQ0FBQyxDQUFDLE9BQU8xSCxDQUFDLEVBQUU7TUFDUmYsT0FBTyxDQUFDYyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7SUFDbkM7RUFDSjtFQUVBLElBQU02SCxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3ZCdkIsWUFBWSxDQUFDd0IsVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUNoQ0osUUFBUSxDQUFDLFFBQVEsQ0FBQztFQUN0QixDQUFDOztFQUVEO0VBQ0EsSUFBTUssZUFBZSxHQUFHLEVBQUFSLEtBQUEsR0FBQUssSUFBSSxjQUFBTCxLQUFBLGdCQUFBQSxLQUFBLEdBQUpBLEtBQUEsQ0FBTVMsS0FBSyxjQUFBVCxLQUFBLHVCQUFYQSxLQUFBLENBQWFVLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBQVQsTUFBQSxHQUFJSSxJQUFJLGNBQUFKLE1BQUEsZ0JBQUFBLE1BQUEsR0FBSkEsTUFBQSxDQUFNUSxLQUFLLGNBQUFSLE1BQUEsdUJBQVhBLE1BQUEsQ0FBYVMsUUFBUSxDQUFDLFlBQVksQ0FBQztFQUVwRyxvQkFDSTVKLDBEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBZ0gsZ0JBQzNIakIsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFnRixnQkFFM0ZqQiwwREFBQSxDQUFDK0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFDLEdBQUc7SUFBQzVJLFNBQVMsRUFBQztFQUFnSCxnQkFDbklqQiwwREFBQTtJQUFNaUIsU0FBUyxFQUFDO0VBQStELEdBQUMsZ0JBQW9CLENBQ2xHLENBQUMsZUFFUGpCLDBEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBeUIsZ0JBQ3BDakIsMERBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUE4RSxnQkFDeEZqQiwwREFBQSwwQkFDSUEsMERBQUEsQ0FBQytJLGtEQUFJO0lBQUNjLEVBQUUsRUFBQyxHQUFHO0lBQUM1SSxTQUFTLEVBQUM7RUFBb0QsR0FBQyxTQUFhLENBQ3pGLENBQUMsZUFDTGpCLDBEQUFBLDBCQUNJQSwwREFBQSxDQUFDK0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFDLFFBQVE7SUFBQzVJLFNBQVMsRUFBQztFQUFvRCxHQUFDLE9BQVcsQ0FDNUYsQ0FBQyxFQUdKeUksZUFBZSxpQkFDWjFKLDBEQUFBLDBCQUNJQSwwREFBQSxDQUFDK0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFDLFFBQVE7SUFBQzVJLFNBQVMsRUFBQztFQUE2SCxHQUFDLFNBRXBKLENBQ04sQ0FFUixDQUFDLGVBRUxqQiwwREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQXdELEdBQ2xFLENBQUNxSSxLQUFLLGdCQUNIdEosMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUMrSSxrREFBSTtJQUFDYyxFQUFFLEVBQUMsUUFBUTtJQUFDNUksU0FBUyxFQUFDO0VBQWlGLEdBQUMsV0FFeEcsQ0FBQyxlQUNQakIsMERBQUEsQ0FBQytJLGtEQUFJO0lBQUNjLEVBQUUsRUFBQyxXQUFXO0lBQUM1SSxTQUFTLEVBQUM7RUFBNkgsR0FBQyxXQUV2SixDQUNSLENBQUMsZ0JBRUhqQiwwREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQXlCLGdCQUNwQ2pCLDBEQUFBO0lBQU1pQixTQUFTLEVBQUM7RUFBd0QsR0FDbkUsRUFBQW1JLE1BQUEsR0FBQUcsSUFBSSxjQUFBSCxNQUFBLHVCQUFKQSxNQUFBLENBQU1XLE1BQU0sS0FBSSxVQUNmLENBQUMsZUFDUC9KLDBEQUFBO0lBQ0lnSyxPQUFPLEVBQUVSLFlBQWE7SUFDdEJ2SSxTQUFTLEVBQUM7RUFBMkksR0FDeEosU0FFTyxDQUNQLENBRVIsQ0FDSixDQUNKLENBQ0osQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVIsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZnRDtBQUNMLENBQUM7QUFDakU7QUFDNEY7QUFFNUYsSUFBTW1LLFVBQVUsR0FBRyx3QkFBd0I7QUFDM0MsSUFBTUMsWUFBWSxHQUFHLGdDQUFnQztBQUNyRCxJQUFNQyxjQUFjLEdBQUcsMEJBQTBCO0FBRWpELFNBQVNDLFdBQVdBLENBQUNDLEtBQUssRUFBRTtFQUMxQixJQUFBQyxRQUFBLEdBQThCWCwyREFBTyxDQUFDTSxVQUFVLENBQUM7SUFBekNNLEtBQUssR0FBQUQsUUFBQSxDQUFMQyxLQUFLO0lBQUVDLFVBQVUsR0FBQUYsUUFBQSxDQUFWRSxVQUFVO0VBQ3pCLElBQU1DLE9BQU8sR0FBR1YsOERBQVUsQ0FBQ0csWUFBWSxDQUFDOztFQUV4QztFQUNBLElBQUFRLFNBQUEsR0FBcUJoQixzREFBUSxDQUFDLENBQUM7SUFBdkJpQixRQUFRLEdBQUFELFNBQUEsQ0FBUkMsUUFBUTs7RUFFaEI7RUFDQTtFQUNBO0VBQ0EsSUFBTUMsaUJBQWlCLEdBQUdELFFBQVEsQ0FBQ0UsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRztFQUV4REosT0FBTyxDQUFDSyxLQUFLLEdBQUcsS0FBSztFQUNyQkwsT0FBTyxDQUFDTSxVQUFVLEdBQUcsTUFBTTtFQUUzQixJQUFNQyxLQUFLLEdBQUcxQiw4Q0FBTSxDQUFDLENBQUM7RUFDdEIsSUFBQTJCLGNBQUEsR0FBb0JyQixpRUFBYSxDQUFDWSxVQUFVLEVBQUVRLEtBQUssQ0FBQztJQUE1Q0UsT0FBTyxHQUFBRCxjQUFBLENBQVBDLE9BQU87RUFDZixJQUFBbkYsU0FBQSxHQUFrQ1IsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVksVUFBQSxHQUFBNUIsY0FBQSxDQUFBd0IsU0FBQTtJQUExQ29GLFNBQVMsR0FBQWhGLFVBQUE7SUFBRWlGLFlBQVksR0FBQWpGLFVBQUE7RUFFOUJYLGlEQUFTLENBQUMsWUFBTTtJQUNkK0UsS0FBSyxDQUFDYyxRQUFRLENBQUMsVUFBQ0MsS0FBSyxFQUFLO01BQ3hCLElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxFQUFFO1FBQ2hCRCxLQUFLLENBQUNFLFFBQVEsQ0FBQ0MsR0FBRyxHQUFHaEIsT0FBTztRQUM1QmEsS0FBSyxDQUFDRSxRQUFRLENBQUNFLFdBQVcsR0FBRyxJQUFJO01BQ25DO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLENBQUNuQixLQUFLLEVBQUVFLE9BQU8sQ0FBQyxDQUFDO0VBRXBCakYsaURBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSTBGLE9BQU8sSUFBSUEsT0FBTyxDQUFDZixjQUFjLENBQUMsRUFBRTtNQUNwQyxJQUFNd0IsTUFBTSxHQUFHVCxPQUFPLENBQUNmLGNBQWMsQ0FBQztNQUN0Q3dCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQztNQUNqQ0gsTUFBTSxDQUFDSSxTQUFTLEdBQUcsR0FBRztNQUN0QlgsWUFBWSxDQUFDLElBQUksQ0FBQztJQUN0QjtFQUNGLENBQUMsRUFBRSxDQUFDRixPQUFPLENBQUMsQ0FBQztFQUViLElBQU1jLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSS9LLENBQUMsRUFBSztJQUM3QkEsQ0FBQyxDQUFDZ0wsZUFBZSxDQUFDLENBQUM7SUFDbkJyTCxRQUFRLENBQUM0RyxJQUFJLENBQUMwRSxLQUFLLENBQUNDLE1BQU0sR0FBRyxTQUFTO0lBQ3RDLElBQU1SLE1BQU0sR0FBR1QsT0FBTyxDQUFDZixjQUFjLENBQUM7SUFDdEMsSUFBSSxDQUFDd0IsTUFBTSxFQUFFO0lBQ2IsSUFBSVIsU0FBUyxFQUFFUSxNQUFNLENBQUNTLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUM5QjtNQUFFVCxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7TUFBRUgsTUFBTSxDQUFDSSxTQUFTLEdBQUcsR0FBRztJQUFFO0lBQ2xFWCxZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO0VBQzFCLENBQUM7RUFFRDFCLHNEQUFRLENBQUMsWUFBTTtJQUNiLElBQUd1QixLQUFLLENBQUNxQixPQUFPLEVBQUVyQixLQUFLLENBQUNxQixPQUFPLENBQUNDLFFBQVEsQ0FBQ25LLENBQUMsSUFBSSxLQUFLO0VBQ3JELENBQUMsQ0FBQztFQUVGLG9CQUNFOUMsMkRBQUEsY0FBQWtOLFFBQUE7SUFDRUMsR0FBRyxFQUFFeEIsS0FBTTtJQUNYeUIsTUFBTSxFQUFFbEMsS0FBTTtJQUNkbEIsT0FBTyxFQUFFMkMsZUFBZ0I7SUFDekJVLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFBO01BQUEsT0FBUTlMLFFBQVEsQ0FBQzRHLElBQUksQ0FBQzBFLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLFNBQVM7SUFBQSxDQUFDO0lBQzVEUSxZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBQTtNQUFBLE9BQVEvTCxRQUFRLENBQUM0RyxJQUFJLENBQUMwRSxLQUFLLENBQUNDLE1BQU0sR0FBRyxNQUFNO0lBQUE7O0lBRXZEO0lBQUE7SUFDQVMsS0FBSyxFQUFFaEM7O0lBRVA7SUFDQTtJQUFBO0lBQ0FpQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7RUFBRSxHQUVsQnhDLEtBQUssQ0FDVixDQUFDO0FBRU47QUFFQSxJQUFNeUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQVM7RUFDM0Isb0JBQ0V6TiwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQWUsZ0JBQzVCakIsMkRBQUEsQ0FBQ21LLHVEQUFNO0lBQUN1RCxPQUFPO0lBQUNDLE1BQU0sRUFBRTtNQUFFSCxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUFFSSxHQUFHLEVBQUU7SUFBRztFQUFFLGdCQUl4RDVOLDJEQUFBO0lBQU82TixNQUFNLEVBQUMsWUFBWTtJQUFDQyxJQUFJLEVBQUUsQ0FBQyxTQUFTO0VBQUUsQ0FBRSxDQUFDLGVBR2hEOU4sMkRBQUEsQ0FBQzJLLHFEQUFLO0lBQ0pvRCxNQUFNLEVBQUUsR0FBSSxDQUFDO0lBQUE7SUFDYkMsS0FBSyxFQUFFLEVBQUcsQ0FBRztJQUFBO0lBQ2JDLEtBQUssRUFBRSxJQUFLLENBQUM7SUFBQTtJQUNiQyxNQUFNLEVBQUUsQ0FBRSxDQUFHO0lBQUE7SUFDYkMsVUFBVSxFQUFFLENBQUUsQ0FBQztJQUFBO0lBQ2ZDLElBQUksT0FBUztJQUFBO0lBQ2JDLEtBQUssRUFBRSxDQUFFLENBQUk7RUFBQSxDQUNkLENBQUMsZUFHRnJPLDJEQUFBO0lBQWNzTyxTQUFTLEVBQUU7RUFBRSxDQUFFLENBQUMsZUFDOUJ0TywyREFBQTtJQUFrQndOLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFFO0lBQUNjLFNBQVMsRUFBRTtFQUFFLENBQUUsQ0FBQyxlQUN6RHRPLDJEQUFBO0lBQVd3TixRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFFO0lBQUNjLFNBQVMsRUFBRSxDQUFFO0lBQUNDLEtBQUssRUFBQztFQUFTLENBQUUsQ0FBQyxlQUNsRXZPLDJEQUFBO0lBQVd3TixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFO0lBQUNjLFNBQVMsRUFBRSxDQUFFO0lBQUNDLEtBQUssRUFBQztFQUFTLENBQUUsQ0FBQyxlQUVsRXZPLDJEQUFBLENBQUNrSyw0Q0FBUTtJQUFDc0UsUUFBUSxlQUFFeE8sMkRBQUEsQ0FBQ3lLLG9EQUFJO01BQUNnRSxNQUFNO0lBQUEsZ0JBQUN6TywyREFBQTtNQUFLaUIsU0FBUyxFQUFDO0lBQTBCLEdBQUMsZUFBa0IsQ0FBTztFQUFFLGdCQUNwR2pCLDJEQUFBLENBQUN3SyxzREFBTTtJQUFDa0UsR0FBRztFQUFBLGdCQUNUMU8sMkRBQUEsQ0FBQytLLFdBQVc7SUFBQ3dDLEtBQUssRUFBRTtFQUFLLENBQUUsQ0FDckIsQ0FDQSxDQUNKLENBQ0wsQ0FBQztBQUVWLENBQUM7QUFFRGpELHVEQUFPLENBQUNxRSxPQUFPLENBQUMvRCxVQUFVLENBQUM7QUFDM0JGLDBEQUFVLENBQUNpRSxPQUFPLENBQUM5RCxZQUFZLENBQUM7QUFFaEMsaUVBQWU0QyxjQUFjLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SHNCO0FBRW5ELElBQU03TSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUEsRUFBUztFQUN6QixJQUFBOEYsU0FBQSxHQUF3QlIsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQVksVUFBQSxHQUFBNUIsY0FBQSxDQUFBd0IsU0FBQTtJQUEvQlksSUFBSSxHQUFBUixVQUFBO0lBQUU4SCxPQUFPLEdBQUE5SCxVQUFBO0VBQ3BCLElBQUErSCxVQUFBLEdBQTBCM0ksZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTRJLFVBQUEsR0FBQTVKLGNBQUEsQ0FBQTJKLFVBQUE7SUFBakNsTixLQUFLLEdBQUFtTixVQUFBO0lBQUVDLFFBQVEsR0FBQUQsVUFBQTtFQUV0QjNJLGlEQUFTLENBQUMsWUFBTTtJQUNaO0lBQ0FjLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtNQUN0QkUsT0FBTyxFQUFFO1FBQ0wsZUFBZSxZQUFBRCxNQUFBLENBQVllLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFFO1FBQzFELFFBQVEsRUFBRTtNQUNkO0lBQ0osQ0FBQyxDQUFDLENBQ0R0RCxJQUFJLENBQUMsVUFBQXdDLEdBQUcsRUFBSTtNQUNULElBQUksQ0FBQ0EsR0FBRyxDQUFDa0IsRUFBRSxFQUFFLE1BQU0sSUFBSTBHLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQztNQUNqRSxPQUFPNUgsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FDRHpDLElBQUksQ0FBQyxVQUFBeUMsSUFBSTtNQUFBLE9BQUl1SCxPQUFPLENBQUN2SCxJQUFJLENBQUM7SUFBQSxFQUFDLFNBQ3RCLENBQUMsVUFBQTRILEdBQUc7TUFBQSxPQUFJRixRQUFRLENBQUNFLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDO0lBQUEsRUFBQztFQUN4QyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBSXZOLEtBQUssRUFBRSxvQkFBTzNCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBK0MsR0FBRVUsS0FBVyxDQUFDO0VBQzlGLElBQUksQ0FBQzJGLElBQUksRUFBRSxvQkFBT3RILDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBNkQsR0FBQywyQkFBOEIsQ0FBQztFQUU5SCxvQkFDSWpCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBa0MsZ0JBQzdDakIsMkRBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUFnRyxHQUFDLHVCQUUzRyxDQUFDLGVBR0xqQiwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQTZDLGdCQUN4RGpCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBK0YsZ0JBQzFHakIsMkRBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUE2RCxHQUFDLHNCQUF3QixDQUFDLGVBQ3JHakIsMkRBQUE7SUFBR2lCLFNBQVMsRUFBQztFQUFzQyxHQUFFcUcsSUFBSSxDQUFDNkgsVUFBYyxDQUN2RSxDQUFDLGVBQ05uUCwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQStGLGdCQUMxR2pCLDJEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBNkQsR0FBQyx1QkFBc0IsQ0FBQyxlQUNuR2pCLDJEQUFBO0lBQUdpQixTQUFTLEVBQUM7RUFBc0MsR0FBRXFHLElBQUksQ0FBQzhILGFBQWlCLENBQzFFLENBQ0osQ0FBQyxlQUdOcFAsMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFxRCxnQkFDaEVqQiwyREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQW9FLEdBQUMsb0JBQXNCLENBQUMsZUFDMUdqQiwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQVcsR0FDckJxRyxJQUFJLENBQUMrSCxXQUFXLENBQUNqRCxHQUFHLENBQUMsVUFBQzVKLENBQUMsRUFBRUosQ0FBQztJQUFBLG9CQUN2QnBDLDJEQUFBO01BQUtzUCxHQUFHLEVBQUVsTixDQUFFO01BQUNuQixTQUFTLEVBQUM7SUFBa0gsZ0JBQ3JJakIsMkRBQUE7TUFBS2lCLFNBQVMsRUFBQztJQUFlLGdCQUMxQmpCLDJEQUFBO01BQU1pQixTQUFTLEVBQUM7SUFBaUMsR0FBRXVCLENBQUMsQ0FBQ3VILE1BQWEsQ0FBQyxlQUNuRS9KLDJEQUFBO01BQU1pQixTQUFTLEVBQUM7SUFBd0IsR0FBRXVCLENBQUMsQ0FBQytNLEtBQVksQ0FDdkQsQ0FBQyxlQUNOdlAsMkRBQUE7TUFBTWlCLFNBQVMsRUFBQztJQUFnRixHQUMzRnVCLENBQUMsQ0FBQ21ILEtBQUssQ0FBQ0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxVQUMvQyxDQUNMLENBQUM7RUFBQSxDQUNULENBQ0EsQ0FDSixDQUNKLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVoSixjQUFjLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFc0I7QUFDQTtBQUVuRCxJQUFNTCxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3RCLElBQUFrUCxVQUFBLEdBQWVELDREQUFTLENBQUMsQ0FBQztJQUFsQmxKLEVBQUUsR0FBQW1KLFVBQUEsQ0FBRm5KLEVBQUU7RUFDVixJQUFBSSxTQUFBLEdBQThCUixnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBWSxVQUFBLEdBQUE1QixjQUFBLENBQUF3QixTQUFBO0lBQXJDZ0osT0FBTyxHQUFBNUksVUFBQTtJQUFFNkksVUFBVSxHQUFBN0ksVUFBQTtFQUMxQixJQUFBK0gsVUFBQSxHQUE4QjNJLGdEQUFRLENBQUMsSUFBSSxDQUFDO0lBQUE0SSxVQUFBLEdBQUE1SixjQUFBLENBQUEySixVQUFBO0lBQXJDZSxPQUFPLEdBQUFkLFVBQUE7SUFBRWUsVUFBVSxHQUFBZixVQUFBO0VBRTFCM0ksaURBQVMsQ0FBQyxZQUFNO0lBQ1pjLEtBQUssa0JBQUFDLE1BQUEsQ0FBa0JaLEVBQUUsR0FBSTtNQUFFYSxPQUFPLEVBQUU7UUFBRSxRQUFRLEVBQUU7TUFBc0I7SUFBRSxDQUFDLENBQUMsQ0FDekV2QyxJQUFJLENBQUMsVUFBQXdDLEdBQUc7TUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQUEsRUFBQyxDQUN2QnpDLElBQUksQ0FBQyxVQUFBMEMsSUFBSSxFQUFJO01BQ1ZxSSxVQUFVLENBQUNySSxJQUFJLENBQUM7TUFDaEJ1SSxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQVosR0FBRztNQUFBLE9BQUlZLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFBQSxFQUFDO0VBQ3hDLENBQUMsRUFBRSxDQUFDdkosRUFBRSxDQUFDLENBQUM7RUFFUixJQUFJc0osT0FBTyxFQUFFLG9CQUFPNVAsMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUF1RSxHQUFDLGdDQUFtQyxDQUFDO0VBQy9JLElBQUksQ0FBQ3lPLE9BQU8sRUFBRSxvQkFBTzFQLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBNEMsR0FBQyx3Q0FBMkMsQ0FBQztFQUU3SCxvQkFDSWpCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBbUMsZ0JBQzlDakIsMkRBQUEsQ0FBQytJLG1EQUFJO0lBQUNjLEVBQUUsRUFBQyxRQUFRO0lBQUM1SSxTQUFTLEVBQUM7RUFBbUYsZ0JBQzNHakIsMkRBQUEsZUFBTSxRQUFPLENBQUMsb0JBQ1osQ0FBQyxlQUVQQSwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQTZGLGdCQUV4R2pCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBNEUsQ0FBTSxDQUFDLGVBRWxHakIsMkRBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUFzRSxHQUMvRXlPLE9BQU8sQ0FBQy9JLEtBQ1QsQ0FBQyxlQUVMM0csMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFvRixnQkFDL0ZqQiwyREFBQTtJQUFNaUIsU0FBUyxFQUFDO0VBQW1GLEdBQUMsU0FFOUYsQ0FBQyxlQUNQakIsMkRBQUEsZUFBTSxnQkFBUSxFQUFDLElBQUk4UCxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ssU0FBUyxDQUFDLENBQUNDLGtCQUFrQixDQUFDLENBQVEsQ0FDckUsQ0FBQyxlQUVOaFEsMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUE4RSxHQUN4RnlPLE9BQU8sQ0FBQzlJLE9BQ1IsQ0FHSixDQUNKLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVyRyxXQUFXLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkNuRDFCLHVLQUFBcUIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLFdBQUEsOEJBQUFDLEVBQUFOLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUMsQ0FBQSxHQUFBTCxDQUFBLElBQUFBLENBQUEsQ0FBQU0sU0FBQSxZQUFBQyxTQUFBLEdBQUFQLENBQUEsR0FBQU8sU0FBQSxFQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLENBQUFDLFNBQUEsVUFBQUssbUJBQUEsQ0FBQUgsQ0FBQSx1QkFBQVYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUksQ0FBQSxNQUFBQyxDQUFBLEdBQUFYLENBQUEsUUFBQVksQ0FBQSxPQUFBQyxDQUFBLEtBQUFGLENBQUEsS0FBQWIsQ0FBQSxLQUFBZ0IsQ0FBQSxFQUFBcEIsQ0FBQSxFQUFBcUIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFOLENBQUEsRUFBQU0sQ0FBQSxDQUFBQyxJQUFBLENBQUF2QixDQUFBLE1BQUFzQixDQUFBLFdBQUFBLEVBQUFyQixDQUFBLEVBQUFDLENBQUEsV0FBQU0sQ0FBQSxHQUFBUCxDQUFBLEVBQUFRLENBQUEsTUFBQUcsQ0FBQSxHQUFBWixDQUFBLEVBQUFtQixDQUFBLENBQUFmLENBQUEsR0FBQUYsQ0FBQSxFQUFBbUIsQ0FBQSxnQkFBQUMsRUFBQXBCLENBQUEsRUFBQUUsQ0FBQSxTQUFBSyxDQUFBLEdBQUFQLENBQUEsRUFBQVUsQ0FBQSxHQUFBUixDQUFBLEVBQUFILENBQUEsT0FBQWlCLENBQUEsSUFBQUYsQ0FBQSxLQUFBVixDQUFBLElBQUFMLENBQUEsR0FBQWdCLENBQUEsQ0FBQU8sTUFBQSxFQUFBdkIsQ0FBQSxVQUFBSyxDQUFBLEVBQUFFLENBQUEsR0FBQVMsQ0FBQSxDQUFBaEIsQ0FBQSxHQUFBcUIsQ0FBQSxHQUFBSCxDQUFBLENBQUFGLENBQUEsRUFBQVEsQ0FBQSxHQUFBakIsQ0FBQSxLQUFBTixDQUFBLFFBQUFJLENBQUEsR0FBQW1CLENBQUEsS0FBQXJCLENBQUEsTUFBQVEsQ0FBQSxHQUFBSixDQUFBLEVBQUFDLENBQUEsR0FBQUQsQ0FBQSxZQUFBQyxDQUFBLFdBQUFELENBQUEsTUFBQUEsQ0FBQSxNQUFBUixDQUFBLElBQUFRLENBQUEsT0FBQWMsQ0FBQSxNQUFBaEIsQ0FBQSxHQUFBSixDQUFBLFFBQUFvQixDQUFBLEdBQUFkLENBQUEsUUFBQUMsQ0FBQSxNQUFBVSxDQUFBLENBQUFDLENBQUEsR0FBQWhCLENBQUEsRUFBQWUsQ0FBQSxDQUFBZixDQUFBLEdBQUFJLENBQUEsT0FBQWMsQ0FBQSxHQUFBRyxDQUFBLEtBQUFuQixDQUFBLEdBQUFKLENBQUEsUUFBQU0sQ0FBQSxNQUFBSixDQUFBLElBQUFBLENBQUEsR0FBQXFCLENBQUEsTUFBQWpCLENBQUEsTUFBQU4sQ0FBQSxFQUFBTSxDQUFBLE1BQUFKLENBQUEsRUFBQWUsQ0FBQSxDQUFBZixDQUFBLEdBQUFxQixDQUFBLEVBQUFoQixDQUFBLGNBQUFILENBQUEsSUFBQUosQ0FBQSxhQUFBbUIsQ0FBQSxRQUFBSCxDQUFBLE9BQUFkLENBQUEscUJBQUFFLENBQUEsRUFBQVcsQ0FBQSxFQUFBUSxDQUFBLFFBQUFULENBQUEsWUFBQVUsU0FBQSx1Q0FBQVIsQ0FBQSxVQUFBRCxDQUFBLElBQUFLLENBQUEsQ0FBQUwsQ0FBQSxFQUFBUSxDQUFBLEdBQUFoQixDQUFBLEdBQUFRLENBQUEsRUFBQUwsQ0FBQSxHQUFBYSxDQUFBLEdBQUF4QixDQUFBLEdBQUFRLENBQUEsT0FBQVQsQ0FBQSxHQUFBWSxDQUFBLE1BQUFNLENBQUEsS0FBQVYsQ0FBQSxLQUFBQyxDQUFBLEdBQUFBLENBQUEsUUFBQUEsQ0FBQSxTQUFBVSxDQUFBLENBQUFmLENBQUEsUUFBQWtCLENBQUEsQ0FBQWIsQ0FBQSxFQUFBRyxDQUFBLEtBQUFPLENBQUEsQ0FBQWYsQ0FBQSxHQUFBUSxDQUFBLEdBQUFPLENBQUEsQ0FBQUMsQ0FBQSxHQUFBUixDQUFBLGFBQUFJLENBQUEsTUFBQVIsQ0FBQSxRQUFBQyxDQUFBLEtBQUFILENBQUEsWUFBQUwsQ0FBQSxHQUFBTyxDQUFBLENBQUFGLENBQUEsV0FBQUwsQ0FBQSxHQUFBQSxDQUFBLENBQUEwQixJQUFBLENBQUFuQixDQUFBLEVBQUFJLENBQUEsVUFBQWMsU0FBQSwyQ0FBQXpCLENBQUEsQ0FBQTJCLElBQUEsU0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxHQUFBWCxDQUFBLENBQUE0QixLQUFBLEVBQUFwQixDQUFBLFNBQUFBLENBQUEsb0JBQUFBLENBQUEsS0FBQVIsQ0FBQSxHQUFBTyxDQUFBLGVBQUFQLENBQUEsQ0FBQTBCLElBQUEsQ0FBQW5CLENBQUEsR0FBQUMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFjLFNBQUEsdUNBQUFwQixDQUFBLGdCQUFBRyxDQUFBLE9BQUFELENBQUEsR0FBQVIsQ0FBQSxjQUFBQyxDQUFBLElBQUFpQixDQUFBLEdBQUFDLENBQUEsQ0FBQWYsQ0FBQSxRQUFBUSxDQUFBLEdBQUFWLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsRUFBQWUsQ0FBQSxPQUFBRSxDQUFBLGtCQUFBcEIsQ0FBQSxJQUFBTyxDQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxNQUFBRyxDQUFBLEdBQUFYLENBQUEsY0FBQWUsQ0FBQSxtQkFBQWEsS0FBQSxFQUFBNUIsQ0FBQSxFQUFBMkIsSUFBQSxFQUFBVixDQUFBLFNBQUFoQixDQUFBLEVBQUFJLENBQUEsRUFBQUUsQ0FBQSxRQUFBSSxDQUFBLFFBQUFTLENBQUEsZ0JBQUFWLFVBQUEsY0FBQW1CLGtCQUFBLGNBQUFDLDJCQUFBLEtBQUE5QixDQUFBLEdBQUFZLE1BQUEsQ0FBQW1CLGNBQUEsTUFBQXZCLENBQUEsTUFBQUwsQ0FBQSxJQUFBSCxDQUFBLENBQUFBLENBQUEsSUFBQUcsQ0FBQSxTQUFBVyxtQkFBQSxDQUFBZCxDQUFBLE9BQUFHLENBQUEsaUNBQUFILENBQUEsR0FBQVcsQ0FBQSxHQUFBbUIsMEJBQUEsQ0FBQXJCLFNBQUEsR0FBQUMsU0FBQSxDQUFBRCxTQUFBLEdBQUFHLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLFlBQUFPLEVBQUFoQixDQUFBLFdBQUFhLE1BQUEsQ0FBQW9CLGNBQUEsR0FBQXBCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQWpDLENBQUEsRUFBQStCLDBCQUFBLEtBQUEvQixDQUFBLENBQUFrQyxTQUFBLEdBQUFILDBCQUFBLEVBQUFoQixtQkFBQSxDQUFBZixDQUFBLEVBQUFNLENBQUEseUJBQUFOLENBQUEsQ0FBQVUsU0FBQSxHQUFBRyxNQUFBLENBQUFDLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBWixDQUFBLFdBQUE4QixpQkFBQSxDQUFBcEIsU0FBQSxHQUFBcUIsMEJBQUEsRUFBQWhCLG1CQUFBLENBQUFILENBQUEsaUJBQUFtQiwwQkFBQSxHQUFBaEIsbUJBQUEsQ0FBQWdCLDBCQUFBLGlCQUFBRCxpQkFBQSxHQUFBQSxpQkFBQSxDQUFBSyxXQUFBLHdCQUFBcEIsbUJBQUEsQ0FBQWdCLDBCQUFBLEVBQUF6QixDQUFBLHdCQUFBUyxtQkFBQSxDQUFBSCxDQUFBLEdBQUFHLG1CQUFBLENBQUFILENBQUEsRUFBQU4sQ0FBQSxnQkFBQVMsbUJBQUEsQ0FBQUgsQ0FBQSxFQUFBUixDQUFBLGlDQUFBVyxtQkFBQSxDQUFBSCxDQUFBLDhEQUFBd0IsWUFBQSxZQUFBQSxhQUFBLGFBQUFDLENBQUEsRUFBQTdCLENBQUEsRUFBQThCLENBQUEsRUFBQXRCLENBQUE7QUFBQSxTQUFBRCxvQkFBQWYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQSxRQUFBTyxDQUFBLEdBQUFLLE1BQUEsQ0FBQTBCLGNBQUEsUUFBQS9CLENBQUEsdUJBQUFSLENBQUEsSUFBQVEsQ0FBQSxRQUFBTyxtQkFBQSxZQUFBeUIsbUJBQUF4QyxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBSCxDQUFBLGFBQUFLLEVBQUFKLENBQUEsRUFBQUUsQ0FBQSxJQUFBVyxtQkFBQSxDQUFBZixDQUFBLEVBQUFFLENBQUEsWUFBQUYsQ0FBQSxnQkFBQXlDLE9BQUEsQ0FBQXZDLENBQUEsRUFBQUUsQ0FBQSxFQUFBSixDQUFBLFNBQUFFLENBQUEsR0FBQU0sQ0FBQSxHQUFBQSxDQUFBLENBQUFSLENBQUEsRUFBQUUsQ0FBQSxJQUFBMkIsS0FBQSxFQUFBekIsQ0FBQSxFQUFBc0MsVUFBQSxHQUFBekMsQ0FBQSxFQUFBMEMsWUFBQSxHQUFBMUMsQ0FBQSxFQUFBMkMsUUFBQSxHQUFBM0MsQ0FBQSxNQUFBRCxDQUFBLENBQUFFLENBQUEsSUFBQUUsQ0FBQSxJQUFBRSxDQUFBLGFBQUFBLENBQUEsY0FBQUEsQ0FBQSxtQkFBQVMsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBQTRDLG1CQUFBekMsQ0FBQSxFQUFBSCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSSxDQUFBLEVBQUFlLENBQUEsRUFBQVosQ0FBQSxjQUFBRCxDQUFBLEdBQUFKLENBQUEsQ0FBQWlCLENBQUEsRUFBQVosQ0FBQSxHQUFBRyxDQUFBLEdBQUFKLENBQUEsQ0FBQXFCLEtBQUEsV0FBQXpCLENBQUEsZ0JBQUFKLENBQUEsQ0FBQUksQ0FBQSxLQUFBSSxDQUFBLENBQUFvQixJQUFBLEdBQUEzQixDQUFBLENBQUFXLENBQUEsSUFBQWtDLE9BQUEsQ0FBQUMsT0FBQSxDQUFBbkMsQ0FBQSxFQUFBb0MsSUFBQSxDQUFBOUMsQ0FBQSxFQUFBSSxDQUFBO0FBQUEsU0FBQTJDLGtCQUFBN0MsQ0FBQSw2QkFBQUgsQ0FBQSxTQUFBRCxDQUFBLEdBQUFrRCxTQUFBLGFBQUFKLE9BQUEsV0FBQTVDLENBQUEsRUFBQUksQ0FBQSxRQUFBZSxDQUFBLEdBQUFqQixDQUFBLENBQUErQyxLQUFBLENBQUFsRCxDQUFBLEVBQUFELENBQUEsWUFBQW9ELE1BQUFoRCxDQUFBLElBQUF5QyxrQkFBQSxDQUFBeEIsQ0FBQSxFQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLEVBQUE4QyxLQUFBLEVBQUFDLE1BQUEsVUFBQWpELENBQUEsY0FBQWlELE9BQUFqRCxDQUFBLElBQUF5QyxrQkFBQSxDQUFBeEIsQ0FBQSxFQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLEVBQUE4QyxLQUFBLEVBQUFDLE1BQUEsV0FBQWpELENBQUEsS0FBQWdELEtBQUE7QUFBQSxTQUFBRSxlQUFBcEQsQ0FBQSxFQUFBRixDQUFBLFdBQUF1RCxlQUFBLENBQUFyRCxDQUFBLEtBQUFzRCxxQkFBQSxDQUFBdEQsQ0FBQSxFQUFBRixDQUFBLEtBQUF5RCwyQkFBQSxDQUFBdkQsQ0FBQSxFQUFBRixDQUFBLEtBQUEwRCxnQkFBQTtBQUFBLFNBQUFBLGlCQUFBLGNBQUFoQyxTQUFBO0FBQUEsU0FBQStCLDRCQUFBdkQsQ0FBQSxFQUFBbUIsQ0FBQSxRQUFBbkIsQ0FBQSwyQkFBQUEsQ0FBQSxTQUFBeUQsaUJBQUEsQ0FBQXpELENBQUEsRUFBQW1CLENBQUEsT0FBQXBCLENBQUEsTUFBQTJELFFBQUEsQ0FBQWpDLElBQUEsQ0FBQXpCLENBQUEsRUFBQTJELEtBQUEsNkJBQUE1RCxDQUFBLElBQUFDLENBQUEsQ0FBQTRELFdBQUEsS0FBQTdELENBQUEsR0FBQUMsQ0FBQSxDQUFBNEQsV0FBQSxDQUFBQyxJQUFBLGFBQUE5RCxDQUFBLGNBQUFBLENBQUEsR0FBQStELEtBQUEsQ0FBQUMsSUFBQSxDQUFBL0QsQ0FBQSxvQkFBQUQsQ0FBQSwrQ0FBQWlFLElBQUEsQ0FBQWpFLENBQUEsSUFBQTBELGlCQUFBLENBQUF6RCxDQUFBLEVBQUFtQixDQUFBO0FBQUEsU0FBQXNDLGtCQUFBekQsQ0FBQSxFQUFBbUIsQ0FBQSxhQUFBQSxDQUFBLElBQUFBLENBQUEsR0FBQW5CLENBQUEsQ0FBQXNCLE1BQUEsTUFBQUgsQ0FBQSxHQUFBbkIsQ0FBQSxDQUFBc0IsTUFBQSxZQUFBeEIsQ0FBQSxNQUFBSSxDQUFBLEdBQUE0RCxLQUFBLENBQUEzQyxDQUFBLEdBQUFyQixDQUFBLEdBQUFxQixDQUFBLEVBQUFyQixDQUFBLElBQUFJLENBQUEsQ0FBQUosQ0FBQSxJQUFBRSxDQUFBLENBQUFGLENBQUEsVUFBQUksQ0FBQTtBQUFBLFNBQUFvRCxzQkFBQXRELENBQUEsRUFBQXVCLENBQUEsUUFBQXhCLENBQUEsV0FBQUMsQ0FBQSxnQ0FBQUMsTUFBQSxJQUFBRCxDQUFBLENBQUFDLE1BQUEsQ0FBQUUsUUFBQSxLQUFBSCxDQUFBLDRCQUFBRCxDQUFBLFFBQUFELENBQUEsRUFBQUksQ0FBQSxFQUFBSSxDQUFBLEVBQUFJLENBQUEsRUFBQVMsQ0FBQSxPQUFBTCxDQUFBLE9BQUFWLENBQUEsaUJBQUFFLENBQUEsSUFBQVAsQ0FBQSxHQUFBQSxDQUFBLENBQUEwQixJQUFBLENBQUF6QixDQUFBLEdBQUFpRSxJQUFBLFFBQUExQyxDQUFBLFFBQUFaLE1BQUEsQ0FBQVosQ0FBQSxNQUFBQSxDQUFBLFVBQUFlLENBQUEsdUJBQUFBLENBQUEsSUFBQWhCLENBQUEsR0FBQVEsQ0FBQSxDQUFBbUIsSUFBQSxDQUFBMUIsQ0FBQSxHQUFBMkIsSUFBQSxNQUFBUCxDQUFBLENBQUErQyxJQUFBLENBQUFwRSxDQUFBLENBQUE2QixLQUFBLEdBQUFSLENBQUEsQ0FBQUcsTUFBQSxLQUFBQyxDQUFBLEdBQUFULENBQUEsaUJBQUFkLENBQUEsSUFBQUksQ0FBQSxPQUFBRixDQUFBLEdBQUFGLENBQUEseUJBQUFjLENBQUEsWUFBQWYsQ0FBQSxlQUFBVyxDQUFBLEdBQUFYLENBQUEsY0FBQVksTUFBQSxDQUFBRCxDQUFBLE1BQUFBLENBQUEsMkJBQUFOLENBQUEsUUFBQUYsQ0FBQSxhQUFBaUIsQ0FBQTtBQUFBLFNBQUFrQyxnQkFBQXJELENBQUEsUUFBQThELEtBQUEsQ0FBQUssT0FBQSxDQUFBbkUsQ0FBQSxVQUFBQSxDQUFBO0FBRG1EO0FBQ1g7QUFDRDtBQUNhO0FBRXBELElBQU14QixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQ3BCLElBQUFvRyxTQUFBLEdBQWdDUixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBWSxVQUFBLEdBQUE1QixjQUFBLENBQUF3QixTQUFBO0lBQXJDdUosUUFBUSxHQUFBbkosVUFBQTtJQUFFb0osV0FBVyxHQUFBcEosVUFBQTtFQUM1QixJQUFBK0gsVUFBQSxHQUE4QjNJLGdEQUFRLENBQUMsSUFBSSxDQUFDO0lBQUE0SSxVQUFBLEdBQUE1SixjQUFBLENBQUEySixVQUFBO0lBQXJDZSxPQUFPLEdBQUFkLFVBQUE7SUFBRWUsVUFBVSxHQUFBZixVQUFBO0VBQzFCLElBQUFxQixVQUFBLEdBQXdCakssZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWtLLFVBQUEsR0FBQWxMLGNBQUEsQ0FBQWlMLFVBQUE7SUFBL0I1RyxJQUFJLEdBQUE2RyxVQUFBO0lBQUVDLE9BQU8sR0FBQUQsVUFBQTs7RUFFcEI7RUFDQSxJQUFBRSxVQUFBLEdBQXdCcEssZ0RBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQXFLLFVBQUEsR0FBQXJMLGNBQUEsQ0FBQW9MLFVBQUE7SUFBakNFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUEsSUFBcUIsQ0FBQztFQUMxQyxJQUFBRyxVQUFBLEdBQW9DeEssZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQXlLLFVBQUEsR0FBQXpMLGNBQUEsQ0FBQXdMLFVBQUE7SUFBM0NFLFVBQVUsR0FBQUQsVUFBQTtJQUFFRSxhQUFhLEdBQUFGLFVBQUE7RUFFaEN4SyxpREFBUyxDQUFDLFlBQU07SUFDWjtJQUNBLElBQU1tRCxLQUFLLEdBQUdyQixZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDM0MsSUFBSW9CLEtBQUssRUFBRTtNQUNQLElBQUk7UUFDQSxJQUFNd0gsT0FBTyxHQUFHN0gsc0RBQVMsQ0FBQ0ssS0FBSyxDQUFDO1FBQ2hDekksT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLEVBQUVnUSxPQUFPLENBQUM7UUFDM0NULE9BQU8sQ0FBQ1MsT0FBTyxDQUFDO01BQ3BCLENBQUMsQ0FBQyxPQUFPbFAsQ0FBQyxFQUFFO1FBQ1JmLE9BQU8sQ0FBQ2MsS0FBSyxDQUFDLGtDQUFrQyxDQUFDO01BQ3JEO0lBQ0o7SUFDQTtJQUNBb1AsYUFBYSxDQUFDLENBQUM7RUFDbkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1BLGFBQWE7SUFBQSxJQUFBMUssSUFBQSxHQUFBeEIsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQXVELFFBQUE7TUFBQSxJQUFBTCxHQUFBLEVBQUFFLElBQUEsRUFBQVEsRUFBQTtNQUFBLE9BQUE5RCxZQUFBLEdBQUFDLENBQUEsV0FBQThELFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBbEYsQ0FBQSxHQUFBa0YsUUFBQSxDQUFBL0YsQ0FBQTtVQUFBO1lBQ2xCNk4sVUFBVSxDQUFDLElBQUksQ0FBQztZQUFDOUgsUUFBQSxDQUFBbEYsQ0FBQTtZQUFBa0YsUUFBQSxDQUFBL0YsQ0FBQTtZQUFBLE9BRUtpRixLQUFLLENBQUMsZUFBZSxFQUFFO2NBQ3JDRSxPQUFPLEVBQUU7Z0JBQUUsUUFBUSxFQUFFO2NBQXNCO1lBQy9DLENBQUMsQ0FBQztVQUFBO1lBRklDLEdBQUcsR0FBQVcsUUFBQSxDQUFBL0UsQ0FBQTtZQUFBK0UsUUFBQSxDQUFBL0YsQ0FBQTtZQUFBLE9BR1VvRixHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDO1VBQUE7WUFBdkJDLElBQUksR0FBQVMsUUFBQSxDQUFBL0UsQ0FBQTtZQUNWa04sV0FBVyxDQUFDNUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJQSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQUNTLFFBQUEsQ0FBQS9GLENBQUE7WUFBQTtVQUFBO1lBQUErRixRQUFBLENBQUFsRixDQUFBO1lBQUFpRixFQUFBLEdBQUFDLFFBQUEsQ0FBQS9FLENBQUE7WUFFMURuQyxPQUFPLENBQUNjLEtBQUssQ0FBQyx5Q0FBeUMsRUFBQW1HLEVBQUssQ0FBQztVQUFDO1lBQUFDLFFBQUEsQ0FBQWxGLENBQUE7WUFFOURnTixVQUFVLENBQUMsS0FBSyxDQUFDO1lBQUMsT0FBQTlILFFBQUEsQ0FBQW5GLENBQUE7VUFBQTtZQUFBLE9BQUFtRixRQUFBLENBQUE5RSxDQUFBO1FBQUE7TUFBQSxHQUFBd0UsT0FBQTtJQUFBLENBRXpCO0lBQUEsZ0JBYktzSixhQUFhQSxDQUFBO01BQUEsT0FBQTFLLElBQUEsQ0FBQXRCLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0FhbEI7RUFFRCxJQUFNa00sWUFBWTtJQUFBLElBQUF4SixLQUFBLEdBQUEzQyxpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBRyxTQUFBK00sU0FBTzNLLEVBQUU7TUFBQSxJQUFBYyxHQUFBLEVBQUE4SixHQUFBO01BQUEsT0FBQWxOLFlBQUEsR0FBQUMsQ0FBQSxXQUFBa04sU0FBQTtRQUFBLGtCQUFBQSxTQUFBLENBQUF0TyxDQUFBLEdBQUFzTyxTQUFBLENBQUFuUCxDQUFBO1VBQUE7WUFBQSxJQUNyQm9QLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLHNEQUFzRCxDQUFDO2NBQUFGLFNBQUEsQ0FBQW5QLENBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQW1QLFNBQUEsQ0FBQWxPLENBQUE7VUFBQTtZQUFBa08sU0FBQSxDQUFBdE8sQ0FBQTtZQUFBc08sU0FBQSxDQUFBblAsQ0FBQTtZQUFBLE9BR3JEaUYsS0FBSyxrQkFBQUMsTUFBQSxDQUFrQlosRUFBRSxHQUFJO2NBQzNDb0IsTUFBTSxFQUFFLFFBQVE7Y0FDaEJQLE9BQU8sRUFBRTtnQkFDTCxlQUFlLFlBQUFELE1BQUEsQ0FBWWUsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO2NBQzVEO1lBQ0osQ0FBQyxDQUFDO1VBQUE7WUFMSWQsR0FBRyxHQUFBK0osU0FBQSxDQUFBbk8sQ0FBQTtZQU9ULElBQUlvRSxHQUFHLENBQUNrQixFQUFFLEVBQUU7Y0FDUjtjQUNBNEgsV0FBVyxDQUFDRCxRQUFRLENBQUNxQixNQUFNLENBQUMsVUFBQXJPLENBQUMsRUFBSTtnQkFDN0IsSUFBTXNPLEdBQUcsR0FBRyxDQUFDdE8sQ0FBQyxDQUFDcUQsRUFBRSxJQUFJckQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFdUMsUUFBUSxDQUFDLENBQUMsQ0FBQ2dNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7Z0JBQzFELE9BQU9GLEdBQUcsS0FBS2pMLEVBQUUsQ0FBQ2QsUUFBUSxDQUFDLENBQUM7Y0FDaEMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLE1BQU07Y0FDSCtDLEtBQUssQ0FBQyw2REFBNkQsQ0FBQztZQUN4RTtZQUFDNEksU0FBQSxDQUFBblAsQ0FBQTtZQUFBO1VBQUE7WUFBQW1QLFNBQUEsQ0FBQXRPLENBQUE7WUFBQXFPLEdBQUEsR0FBQUMsU0FBQSxDQUFBbk8sQ0FBQTtZQUVEdUYsS0FBSyxDQUFDLDZCQUE2QixDQUFDO1VBQUM7WUFBQSxPQUFBNEksU0FBQSxDQUFBbE8sQ0FBQTtRQUFBO01BQUEsR0FBQWdPLFFBQUE7SUFBQSxDQUU1QztJQUFBLGdCQXZCS0QsWUFBWUEsQ0FBQXhJLEVBQUE7TUFBQSxPQUFBaEIsS0FBQSxDQUFBekMsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQXVCakI7RUFFRCxJQUFNNE0sYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJqQixPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2ZJLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDbkJFLGFBQWEsQ0FBQyxDQUFDO0VBQ25CLENBQUM7O0VBRUQ7RUFDQSxJQUFNWSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsSUFBSTtJQUFBLElBQUFDLFdBQUE7SUFBQSxPQUFLdEksSUFBSSxhQUFKQSxJQUFJLGdCQUFBc0ksV0FBQSxHQUFKdEksSUFBSSxDQUFFSSxLQUFLLGNBQUFrSSxXQUFBLHVCQUFYQSxXQUFBLENBQWFqSSxRQUFRLENBQUNnSSxJQUFJLENBQUM7RUFBQTs7RUFFckQ7RUFDQSxJQUFNRSxTQUFTLEdBQUdILE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJQSxPQUFPLENBQUMsY0FBYyxDQUFDO0VBRTVGLElBQUkvQixPQUFPLElBQUlZLElBQUksS0FBSyxNQUFNLEVBQUU7SUFDNUIsb0JBQ0l4USwyREFBQTtNQUFLaUIsU0FBUyxFQUFDO0lBQWlELGdCQUM1RGpCLDJEQUFBO01BQUtpQixTQUFTLEVBQUM7SUFBMkYsQ0FBTSxDQUFDLGVBQ2pIakIsMkRBQUE7TUFBR2lCLFNBQVMsRUFBQztJQUE4RCxHQUFDLDZCQUE4QixDQUN6RyxDQUFDO0VBRWQ7RUFFQSxvQkFDSWpCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBOEIsZ0JBR3pDakIsMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUEwRSxnQkFDckZqQiwyREFBQSwyQkFDSUEsMkRBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUF1RSxHQUFDLFlBQWMsQ0FBQyxlQUNyR2pCLDJEQUFBO0lBQUdpQixTQUFTLEVBQUM7RUFBb0MsR0FBQywrREFBdUQsQ0FDeEcsQ0FBQyxFQUVMdVAsSUFBSSxLQUFLLE1BQU0sSUFBSXNCLFNBQVMsaUJBQ3pCOVIsMkRBQUE7SUFDSWdLLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO01BQUEsT0FBUXlHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFBQSxDQUFDO0lBQ2pDeFAsU0FBUyxFQUFDO0VBQXdKLEdBQ3JLLHNCQUVPLENBRVgsQ0FBQyxFQUdKdVAsSUFBSSxLQUFLLFFBQVEsSUFBSUEsSUFBSSxLQUFLLE1BQU0sZ0JBQ2xDeFEsMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUF3RCxnQkFDbkVqQiwyREFBQTtJQUNJZ0ssT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUEsRUFBUTtNQUFFeUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztNQUFFSSxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQUUsQ0FBRTtJQUN6RDVQLFNBQVMsRUFBQztFQUErSCxHQUM1SSxzQ0FFTyxDQUFDLGVBQ1RqQiwyREFBQSxDQUFDb0csZ0VBQVc7SUFBQ0UsRUFBRSxFQUFFc0ssVUFBVztJQUFDckssU0FBUyxFQUFFbUw7RUFBYyxDQUFFLENBQ3ZELENBQUM7RUFBQTtFQUVOO0VBQ0ExUiwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQVksR0FDdEJnUCxRQUFRLENBQUM3TSxNQUFNLEtBQUssQ0FBQyxnQkFDbEJwRCwyREFBQTtJQUFHaUIsU0FBUyxFQUFDO0VBQXlDLEdBQUMsOEVBQW1FLENBQUMsR0FFM0hnUCxRQUFRLENBQUM3RCxHQUFHLENBQUMsVUFBQ3NELE9BQU8sRUFBSztJQUFBLElBQUFxQyxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBO0lBQ3RCLElBQU1DLE9BQU8sR0FBRyxDQUFDeEMsT0FBTyxDQUFDcEosRUFBRSxJQUFJb0osT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFbEssUUFBUSxDQUFDLENBQUMsQ0FBQ2dNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7O0lBRTFFO0lBQ0EsSUFBTVUsT0FBTyxHQUFHLENBQUE1SSxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRWpELEVBQUUsUUFBQXlMLGVBQUEsR0FBS3JDLE9BQU8sQ0FBQzBDLE1BQU0sY0FBQUwsZUFBQSx1QkFBZEEsZUFBQSxDQUFnQnpMLEVBQUUsS0FBSXFMLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSUEsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUVuRyxvQkFDSTNSLDJEQUFBO01BQVNzUCxHQUFHLEVBQUU0QyxPQUFRO01BQUNqUixTQUFTLEVBQUM7SUFBcUgsZ0JBQ2xKakIsMkRBQUE7TUFBS2lCLFNBQVMsRUFBQztJQUF1QyxnQkFDbERqQiwyREFBQTtNQUFJaUIsU0FBUyxFQUFDO0lBQTBGLEdBQ25HeU8sT0FBTyxDQUFDL0ksS0FDVCxDQUFDLEVBRUp3TCxPQUFPLGlCQUNKblMsMkRBQUE7TUFBS2lCLFNBQVMsRUFBQztJQUFrRSxnQkFDN0VqQiwyREFBQTtNQUNJZ0ssT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUEsRUFBUTtRQUFFNkcsYUFBYSxDQUFDcUIsT0FBTyxDQUFDO1FBQUV6QixPQUFPLENBQUMsTUFBTSxDQUFDO01BQUUsQ0FBRTtNQUM1RHhQLFNBQVMsRUFBQztJQUFvSixHQUNqSyxVQUVPLENBQUMsZUFDVGpCLDJEQUFBO01BQ0lnSyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVFnSCxZQUFZLENBQUNrQixPQUFPLENBQUM7TUFBQSxDQUFDO01BQ3JDalIsU0FBUyxFQUFDO0lBQStJLEdBQzVKLFdBRU8sQ0FDUCxDQUVSLENBQUMsZUFFTmpCLDJEQUFBO01BQUdpQixTQUFTLEVBQUM7SUFBeUUsR0FBQyxJQUNsRixFQUFDeU8sT0FBTyxDQUFDOUksT0FBTyxFQUFDLElBQ25CLENBQUMsZUFFSjVHLDJEQUFBO01BQUtpQixTQUFTLEVBQUM7SUFBcUUsZ0JBQ2hGakIsMkRBQUE7TUFBS2lCLFNBQVMsRUFBQztJQUF5QixnQkFDcENqQiwyREFBQTtNQUFLaUIsU0FBUyxFQUFDO0lBQStCLENBQU0sQ0FBQyxlQUNyRGpCLDJEQUFBO01BQU1pQixTQUFTLEVBQUM7SUFBaUUsR0FBQyxNQUMxRSxFQUFDLEVBQUErUSxnQkFBQSxHQUFBdEMsT0FBTyxDQUFDMEMsTUFBTSxjQUFBSixnQkFBQSx1QkFBZEEsZ0JBQUEsQ0FBZ0JqSSxNQUFNLE9BQUFrSSxnQkFBQSxHQUFJdkMsT0FBTyxDQUFDMEMsTUFBTSxjQUFBSCxnQkFBQSx1QkFBZEEsZ0JBQUEsQ0FBZ0JJLFFBQVEsS0FBSSxxQkFDekQsQ0FDTCxDQUFDLGVBQ05yUywyREFBQSxDQUFDK0ksbURBQUk7TUFDRGMsRUFBRSxvQkFBQTNDLE1BQUEsQ0FBb0JnTCxPQUFPLENBQUc7TUFDaENqUixTQUFTLEVBQUM7SUFBb0ksR0FDakoseUJBQzBCLGVBQUFqQiwyREFBQTtNQUFNaUIsU0FBUyxFQUFDO0lBQVMsR0FBQyxRQUFPLENBQ3RELENBQ0wsQ0FDQSxDQUFDO0VBRWxCLENBQUMsQ0FFSixDQUVSLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVYLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0xFO0FBQ2M7QUFDYTtBQUVyRCxJQUFNRCxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQ25CLG9CQUNJTCwwREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQXNDLGdCQUNqRGpCLDBEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBb0osR0FBQyx3QkFFL0osQ0FBQyxlQUVMakIsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUE0RSxDQUFNLENBQUMsZUFFbEdqQiwwREFBQTtJQUFHaUIsU0FBUyxFQUFDO0VBQXNGLEdBQUMsa2ZBU2pHLENBQUMsZUFFSmpCLDBEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBcUYsZ0JBRWhHakIsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUErRCxnQkFDMUVqQiwwREFBQSxDQUFDeU4sNkRBQWMsTUFBRSxDQUFDLGVBRWxCek4sMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUE0RixHQUFDLHVCQUV2RyxDQUNKLENBQ0osQ0FBQyxlQUVOakIsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFnRCxnQkFDM0RqQiwwREFBQSxDQUFDK0ksa0RBQUk7SUFDRGMsRUFBRSxFQUFDLFFBQVE7SUFDWDVJLFNBQVMsRUFBQztFQUFvTSxnQkFFOU1qQiwwREFBQTtJQUFNaUIsU0FBUyxFQUFDO0VBQWUsR0FBQyxxQkFBc0IsQ0FBQyxlQUN2RGpCLDBEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBK0ssQ0FBTSxDQUNsTSxDQUFDLGVBRVBqQiwwREFBQSxDQUFDK0ksa0RBQUk7SUFDRGMsRUFBRSxFQUFDLGNBQWM7SUFDakI1SSxTQUFTLEVBQUM7RUFBa0ssR0FDL0ssZ0JBRUssQ0FDTCxDQUNKLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVaLFFBQVEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQ3REdkIsdUtBQUF1QixDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssV0FBQSw4QkFBQUMsRUFBQU4sQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBQyxDQUFBLEdBQUFMLENBQUEsSUFBQUEsQ0FBQSxDQUFBTSxTQUFBLFlBQUFDLFNBQUEsR0FBQVAsQ0FBQSxHQUFBTyxTQUFBLEVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsQ0FBQUMsU0FBQSxVQUFBSyxtQkFBQSxDQUFBSCxDQUFBLHVCQUFBVixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBSSxDQUFBLE1BQUFDLENBQUEsR0FBQVgsQ0FBQSxRQUFBWSxDQUFBLE9BQUFDLENBQUEsS0FBQUYsQ0FBQSxLQUFBYixDQUFBLEtBQUFnQixDQUFBLEVBQUFwQixDQUFBLEVBQUFxQixDQUFBLEVBQUFDLENBQUEsRUFBQU4sQ0FBQSxFQUFBTSxDQUFBLENBQUFDLElBQUEsQ0FBQXZCLENBQUEsTUFBQXNCLENBQUEsV0FBQUEsRUFBQXJCLENBQUEsRUFBQUMsQ0FBQSxXQUFBTSxDQUFBLEdBQUFQLENBQUEsRUFBQVEsQ0FBQSxNQUFBRyxDQUFBLEdBQUFaLENBQUEsRUFBQW1CLENBQUEsQ0FBQWYsQ0FBQSxHQUFBRixDQUFBLEVBQUFtQixDQUFBLGdCQUFBQyxFQUFBcEIsQ0FBQSxFQUFBRSxDQUFBLFNBQUFLLENBQUEsR0FBQVAsQ0FBQSxFQUFBVSxDQUFBLEdBQUFSLENBQUEsRUFBQUgsQ0FBQSxPQUFBaUIsQ0FBQSxJQUFBRixDQUFBLEtBQUFWLENBQUEsSUFBQUwsQ0FBQSxHQUFBZ0IsQ0FBQSxDQUFBTyxNQUFBLEVBQUF2QixDQUFBLFVBQUFLLENBQUEsRUFBQUUsQ0FBQSxHQUFBUyxDQUFBLENBQUFoQixDQUFBLEdBQUFxQixDQUFBLEdBQUFILENBQUEsQ0FBQUYsQ0FBQSxFQUFBUSxDQUFBLEdBQUFqQixDQUFBLEtBQUFOLENBQUEsUUFBQUksQ0FBQSxHQUFBbUIsQ0FBQSxLQUFBckIsQ0FBQSxNQUFBUSxDQUFBLEdBQUFKLENBQUEsRUFBQUMsQ0FBQSxHQUFBRCxDQUFBLFlBQUFDLENBQUEsV0FBQUQsQ0FBQSxNQUFBQSxDQUFBLE1BQUFSLENBQUEsSUFBQVEsQ0FBQSxPQUFBYyxDQUFBLE1BQUFoQixDQUFBLEdBQUFKLENBQUEsUUFBQW9CLENBQUEsR0FBQWQsQ0FBQSxRQUFBQyxDQUFBLE1BQUFVLENBQUEsQ0FBQUMsQ0FBQSxHQUFBaEIsQ0FBQSxFQUFBZSxDQUFBLENBQUFmLENBQUEsR0FBQUksQ0FBQSxPQUFBYyxDQUFBLEdBQUFHLENBQUEsS0FBQW5CLENBQUEsR0FBQUosQ0FBQSxRQUFBTSxDQUFBLE1BQUFKLENBQUEsSUFBQUEsQ0FBQSxHQUFBcUIsQ0FBQSxNQUFBakIsQ0FBQSxNQUFBTixDQUFBLEVBQUFNLENBQUEsTUFBQUosQ0FBQSxFQUFBZSxDQUFBLENBQUFmLENBQUEsR0FBQXFCLENBQUEsRUFBQWhCLENBQUEsY0FBQUgsQ0FBQSxJQUFBSixDQUFBLGFBQUFtQixDQUFBLFFBQUFILENBQUEsT0FBQWQsQ0FBQSxxQkFBQUUsQ0FBQSxFQUFBVyxDQUFBLEVBQUFRLENBQUEsUUFBQVQsQ0FBQSxZQUFBVSxTQUFBLHVDQUFBUixDQUFBLFVBQUFELENBQUEsSUFBQUssQ0FBQSxDQUFBTCxDQUFBLEVBQUFRLENBQUEsR0FBQWhCLENBQUEsR0FBQVEsQ0FBQSxFQUFBTCxDQUFBLEdBQUFhLENBQUEsR0FBQXhCLENBQUEsR0FBQVEsQ0FBQSxPQUFBVCxDQUFBLEdBQUFZLENBQUEsTUFBQU0sQ0FBQSxLQUFBVixDQUFBLEtBQUFDLENBQUEsR0FBQUEsQ0FBQSxRQUFBQSxDQUFBLFNBQUFVLENBQUEsQ0FBQWYsQ0FBQSxRQUFBa0IsQ0FBQSxDQUFBYixDQUFBLEVBQUFHLENBQUEsS0FBQU8sQ0FBQSxDQUFBZixDQUFBLEdBQUFRLENBQUEsR0FBQU8sQ0FBQSxDQUFBQyxDQUFBLEdBQUFSLENBQUEsYUFBQUksQ0FBQSxNQUFBUixDQUFBLFFBQUFDLENBQUEsS0FBQUgsQ0FBQSxZQUFBTCxDQUFBLEdBQUFPLENBQUEsQ0FBQUYsQ0FBQSxXQUFBTCxDQUFBLEdBQUFBLENBQUEsQ0FBQTBCLElBQUEsQ0FBQW5CLENBQUEsRUFBQUksQ0FBQSxVQUFBYyxTQUFBLDJDQUFBekIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLEdBQUFYLENBQUEsQ0FBQTRCLEtBQUEsRUFBQXBCLENBQUEsU0FBQUEsQ0FBQSxvQkFBQUEsQ0FBQSxLQUFBUixDQUFBLEdBQUFPLENBQUEsZUFBQVAsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBbkIsQ0FBQSxHQUFBQyxDQUFBLFNBQUFHLENBQUEsR0FBQWMsU0FBQSx1Q0FBQXBCLENBQUEsZ0JBQUFHLENBQUEsT0FBQUQsQ0FBQSxHQUFBUixDQUFBLGNBQUFDLENBQUEsSUFBQWlCLENBQUEsR0FBQUMsQ0FBQSxDQUFBZixDQUFBLFFBQUFRLENBQUEsR0FBQVYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSxFQUFBZSxDQUFBLE9BQUFFLENBQUEsa0JBQUFwQixDQUFBLElBQUFPLENBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLE1BQUFHLENBQUEsR0FBQVgsQ0FBQSxjQUFBZSxDQUFBLG1CQUFBYSxLQUFBLEVBQUE1QixDQUFBLEVBQUEyQixJQUFBLEVBQUFWLENBQUEsU0FBQWhCLENBQUEsRUFBQUksQ0FBQSxFQUFBRSxDQUFBLFFBQUFJLENBQUEsUUFBQVMsQ0FBQSxnQkFBQVYsVUFBQSxjQUFBbUIsa0JBQUEsY0FBQUMsMkJBQUEsS0FBQTlCLENBQUEsR0FBQVksTUFBQSxDQUFBbUIsY0FBQSxNQUFBdkIsQ0FBQSxNQUFBTCxDQUFBLElBQUFILENBQUEsQ0FBQUEsQ0FBQSxJQUFBRyxDQUFBLFNBQUFXLG1CQUFBLENBQUFkLENBQUEsT0FBQUcsQ0FBQSxpQ0FBQUgsQ0FBQSxHQUFBVyxDQUFBLEdBQUFtQiwwQkFBQSxDQUFBckIsU0FBQSxHQUFBQyxTQUFBLENBQUFELFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsWUFBQU8sRUFBQWhCLENBQUEsV0FBQWEsTUFBQSxDQUFBb0IsY0FBQSxHQUFBcEIsTUFBQSxDQUFBb0IsY0FBQSxDQUFBakMsQ0FBQSxFQUFBK0IsMEJBQUEsS0FBQS9CLENBQUEsQ0FBQWtDLFNBQUEsR0FBQUgsMEJBQUEsRUFBQWhCLG1CQUFBLENBQUFmLENBQUEsRUFBQU0sQ0FBQSx5QkFBQU4sQ0FBQSxDQUFBVSxTQUFBLEdBQUFHLE1BQUEsQ0FBQUMsTUFBQSxDQUFBRixDQUFBLEdBQUFaLENBQUEsV0FBQThCLGlCQUFBLENBQUFwQixTQUFBLEdBQUFxQiwwQkFBQSxFQUFBaEIsbUJBQUEsQ0FBQUgsQ0FBQSxpQkFBQW1CLDBCQUFBLEdBQUFoQixtQkFBQSxDQUFBZ0IsMEJBQUEsaUJBQUFELGlCQUFBLEdBQUFBLGlCQUFBLENBQUFLLFdBQUEsd0JBQUFwQixtQkFBQSxDQUFBZ0IsMEJBQUEsRUFBQXpCLENBQUEsd0JBQUFTLG1CQUFBLENBQUFILENBQUEsR0FBQUcsbUJBQUEsQ0FBQUgsQ0FBQSxFQUFBTixDQUFBLGdCQUFBUyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFSLENBQUEsaUNBQUFXLG1CQUFBLENBQUFILENBQUEsOERBQUF3QixZQUFBLFlBQUFBLGFBQUEsYUFBQUMsQ0FBQSxFQUFBN0IsQ0FBQSxFQUFBOEIsQ0FBQSxFQUFBdEIsQ0FBQTtBQUFBLFNBQUFELG9CQUFBZixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBSCxDQUFBLFFBQUFPLENBQUEsR0FBQUssTUFBQSxDQUFBMEIsY0FBQSxRQUFBL0IsQ0FBQSx1QkFBQVIsQ0FBQSxJQUFBUSxDQUFBLFFBQUFPLG1CQUFBLFlBQUF5QixtQkFBQXhDLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUEsYUFBQUssRUFBQUosQ0FBQSxFQUFBRSxDQUFBLElBQUFXLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxZQUFBRixDQUFBLGdCQUFBeUMsT0FBQSxDQUFBdkMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFKLENBQUEsU0FBQUUsQ0FBQSxHQUFBTSxDQUFBLEdBQUFBLENBQUEsQ0FBQVIsQ0FBQSxFQUFBRSxDQUFBLElBQUEyQixLQUFBLEVBQUF6QixDQUFBLEVBQUFzQyxVQUFBLEdBQUF6QyxDQUFBLEVBQUEwQyxZQUFBLEdBQUExQyxDQUFBLEVBQUEyQyxRQUFBLEdBQUEzQyxDQUFBLE1BQUFELENBQUEsQ0FBQUUsQ0FBQSxJQUFBRSxDQUFBLElBQUFFLENBQUEsYUFBQUEsQ0FBQSxjQUFBQSxDQUFBLG1CQUFBUyxtQkFBQSxDQUFBZixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBSCxDQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUE0QyxtQkFBQXpDLENBQUEsRUFBQUgsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUksQ0FBQSxFQUFBZSxDQUFBLEVBQUFaLENBQUEsY0FBQUQsQ0FBQSxHQUFBSixDQUFBLENBQUFpQixDQUFBLEVBQUFaLENBQUEsR0FBQUcsQ0FBQSxHQUFBSixDQUFBLENBQUFxQixLQUFBLFdBQUF6QixDQUFBLGdCQUFBSixDQUFBLENBQUFJLENBQUEsS0FBQUksQ0FBQSxDQUFBb0IsSUFBQSxHQUFBM0IsQ0FBQSxDQUFBVyxDQUFBLElBQUFrQyxPQUFBLENBQUFDLE9BQUEsQ0FBQW5DLENBQUEsRUFBQW9DLElBQUEsQ0FBQTlDLENBQUEsRUFBQUksQ0FBQTtBQUFBLFNBQUEyQyxrQkFBQTdDLENBQUEsNkJBQUFILENBQUEsU0FBQUQsQ0FBQSxHQUFBa0QsU0FBQSxhQUFBSixPQUFBLFdBQUE1QyxDQUFBLEVBQUFJLENBQUEsUUFBQWUsQ0FBQSxHQUFBakIsQ0FBQSxDQUFBK0MsS0FBQSxDQUFBbEQsQ0FBQSxFQUFBRCxDQUFBLFlBQUFvRCxNQUFBaEQsQ0FBQSxJQUFBeUMsa0JBQUEsQ0FBQXhCLENBQUEsRUFBQW5CLENBQUEsRUFBQUksQ0FBQSxFQUFBOEMsS0FBQSxFQUFBQyxNQUFBLFVBQUFqRCxDQUFBLGNBQUFpRCxPQUFBakQsQ0FBQSxJQUFBeUMsa0JBQUEsQ0FBQXhCLENBQUEsRUFBQW5CLENBQUEsRUFBQUksQ0FBQSxFQUFBOEMsS0FBQSxFQUFBQyxNQUFBLFdBQUFqRCxDQUFBLEtBQUFnRCxLQUFBO0FBQUEsU0FBQUUsZUFBQXBELENBQUEsRUFBQUYsQ0FBQSxXQUFBdUQsZUFBQSxDQUFBckQsQ0FBQSxLQUFBc0QscUJBQUEsQ0FBQXRELENBQUEsRUFBQUYsQ0FBQSxLQUFBeUQsMkJBQUEsQ0FBQXZELENBQUEsRUFBQUYsQ0FBQSxLQUFBMEQsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBaEMsU0FBQTtBQUFBLFNBQUErQiw0QkFBQXZELENBQUEsRUFBQW1CLENBQUEsUUFBQW5CLENBQUEsMkJBQUFBLENBQUEsU0FBQXlELGlCQUFBLENBQUF6RCxDQUFBLEVBQUFtQixDQUFBLE9BQUFwQixDQUFBLE1BQUEyRCxRQUFBLENBQUFqQyxJQUFBLENBQUF6QixDQUFBLEVBQUEyRCxLQUFBLDZCQUFBNUQsQ0FBQSxJQUFBQyxDQUFBLENBQUE0RCxXQUFBLEtBQUE3RCxDQUFBLEdBQUFDLENBQUEsQ0FBQTRELFdBQUEsQ0FBQUMsSUFBQSxhQUFBOUQsQ0FBQSxjQUFBQSxDQUFBLEdBQUErRCxLQUFBLENBQUFDLElBQUEsQ0FBQS9ELENBQUEsb0JBQUFELENBQUEsK0NBQUFpRSxJQUFBLENBQUFqRSxDQUFBLElBQUEwRCxpQkFBQSxDQUFBekQsQ0FBQSxFQUFBbUIsQ0FBQTtBQUFBLFNBQUFzQyxrQkFBQXpELENBQUEsRUFBQW1CLENBQUEsYUFBQUEsQ0FBQSxJQUFBQSxDQUFBLEdBQUFuQixDQUFBLENBQUFzQixNQUFBLE1BQUFILENBQUEsR0FBQW5CLENBQUEsQ0FBQXNCLE1BQUEsWUFBQXhCLENBQUEsTUFBQUksQ0FBQSxHQUFBNEQsS0FBQSxDQUFBM0MsQ0FBQSxHQUFBckIsQ0FBQSxHQUFBcUIsQ0FBQSxFQUFBckIsQ0FBQSxJQUFBSSxDQUFBLENBQUFKLENBQUEsSUFBQUUsQ0FBQSxDQUFBRixDQUFBLFVBQUFJLENBQUE7QUFBQSxTQUFBb0Qsc0JBQUF0RCxDQUFBLEVBQUF1QixDQUFBLFFBQUF4QixDQUFBLFdBQUFDLENBQUEsZ0NBQUFDLE1BQUEsSUFBQUQsQ0FBQSxDQUFBQyxNQUFBLENBQUFFLFFBQUEsS0FBQUgsQ0FBQSw0QkFBQUQsQ0FBQSxRQUFBRCxDQUFBLEVBQUFJLENBQUEsRUFBQUksQ0FBQSxFQUFBSSxDQUFBLEVBQUFTLENBQUEsT0FBQUwsQ0FBQSxPQUFBVixDQUFBLGlCQUFBRSxDQUFBLElBQUFQLENBQUEsR0FBQUEsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBekIsQ0FBQSxHQUFBaUUsSUFBQSxRQUFBMUMsQ0FBQSxRQUFBWixNQUFBLENBQUFaLENBQUEsTUFBQUEsQ0FBQSxVQUFBZSxDQUFBLHVCQUFBQSxDQUFBLElBQUFoQixDQUFBLEdBQUFRLENBQUEsQ0FBQW1CLElBQUEsQ0FBQTFCLENBQUEsR0FBQTJCLElBQUEsTUFBQVAsQ0FBQSxDQUFBK0MsSUFBQSxDQUFBcEUsQ0FBQSxDQUFBNkIsS0FBQSxHQUFBUixDQUFBLENBQUFHLE1BQUEsS0FBQUMsQ0FBQSxHQUFBVCxDQUFBLGlCQUFBZCxDQUFBLElBQUFJLENBQUEsT0FBQUYsQ0FBQSxHQUFBRixDQUFBLHlCQUFBYyxDQUFBLFlBQUFmLENBQUEsZUFBQVcsQ0FBQSxHQUFBWCxDQUFBLGNBQUFZLE1BQUEsQ0FBQUQsQ0FBQSxNQUFBQSxDQUFBLDJCQUFBTixDQUFBLFFBQUFGLENBQUEsYUFBQWlCLENBQUE7QUFBQSxTQUFBa0MsZ0JBQUFyRCxDQUFBLFFBQUE4RCxLQUFBLENBQUFLLE9BQUEsQ0FBQW5FLENBQUEsVUFBQUEsQ0FBQTtBQUR3QztBQUNPO0FBRS9DLElBQU1uQixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQ3BCLElBQUErRixTQUFBLEdBQTBCUixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBWSxVQUFBLEdBQUE1QixjQUFBLENBQUF3QixTQUFBO0lBQS9CNkksS0FBSyxHQUFBekksVUFBQTtJQUFFd0wsUUFBUSxHQUFBeEwsVUFBQTtFQUN0QixJQUFBK0gsVUFBQSxHQUFnQzNJLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE0SSxVQUFBLEdBQUE1SixjQUFBLENBQUEySixVQUFBO0lBQXJDMEQsUUFBUSxHQUFBekQsVUFBQTtJQUFFMEQsV0FBVyxHQUFBMUQsVUFBQTtFQUM1QixJQUFBcUIsVUFBQSxHQUEwQmpLLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFrSyxVQUFBLEdBQUFsTCxjQUFBLENBQUFpTCxVQUFBO0lBQS9CeE8sS0FBSyxHQUFBeU8sVUFBQTtJQUFFckIsUUFBUSxHQUFBcUIsVUFBQTtFQUN0QixJQUFNL0csUUFBUSxHQUFHTCw4REFBVyxDQUFDLENBQUM7RUFFOUIsSUFBTXpCLFlBQVk7SUFBQSxJQUFBbEIsSUFBQSxHQUFBeEIsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUcsU0FBQXVELFFBQU83RixDQUFDO01BQUEsSUFBQWdHLFFBQUEsRUFBQU4sSUFBQSxFQUFBUSxFQUFBO01BQUEsT0FBQTlELFlBQUEsR0FBQUMsQ0FBQSxXQUFBOEQsUUFBQTtRQUFBLGtCQUFBQSxRQUFBLENBQUFsRixDQUFBLEdBQUFrRixRQUFBLENBQUEvRixDQUFBO1VBQUE7WUFDekJKLENBQUMsQ0FBQ29HLGNBQWMsQ0FBQyxDQUFDO1lBQ2xCK0csUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUFDaEgsUUFBQSxDQUFBbEYsQ0FBQTtZQUFBa0YsUUFBQSxDQUFBL0YsQ0FBQTtZQUFBLE9BR2NpRixLQUFLLENBQUMsa0JBQWtCLEVBQUU7Y0FDN0NTLE1BQU0sRUFBRSxNQUFNO2NBQ2RQLE9BQU8sRUFBRTtnQkFBRSxjQUFjLEVBQUU7Y0FBbUIsQ0FBQztjQUMvQ2dCLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7Z0JBQ2pCa0gsS0FBSyxFQUFFQSxLQUFLO2dCQUFFO2dCQUNkZ0QsUUFBUSxFQUFFQTtjQUNkLENBQUM7WUFDTCxDQUFDLENBQUM7VUFBQTtZQVBJM0ssUUFBUSxHQUFBRyxRQUFBLENBQUEvRSxDQUFBO1lBQUErRSxRQUFBLENBQUEvRixDQUFBO1lBQUEsT0FTSzRGLFFBQVEsQ0FBQ1AsSUFBSSxDQUFDLENBQUM7VUFBQTtZQUE1QkMsSUFBSSxHQUFBUyxRQUFBLENBQUEvRSxDQUFBO1lBRVYsSUFBSTRFLFFBQVEsQ0FBQ1UsRUFBRSxJQUFJaEIsSUFBSSxDQUFDZ0MsS0FBSyxFQUFFO2NBQzNCO2NBQ0FyQixZQUFZLENBQUN3SyxPQUFPLENBQUMsT0FBTyxFQUFFbkwsSUFBSSxDQUFDZ0MsS0FBSyxDQUFDO2NBQ3pDO2NBQ0E4SCxNQUFNLENBQUNzQixRQUFRLENBQUNDLElBQUksR0FBRyxRQUFRO1lBQ25DLENBQUMsTUFBTTtjQUNINUQsUUFBUSxDQUFDLGlFQUFpRSxDQUFDO1lBQy9FO1lBQUNoSCxRQUFBLENBQUEvRixDQUFBO1lBQUE7VUFBQTtZQUFBK0YsUUFBQSxDQUFBbEYsQ0FBQTtZQUFBaUYsRUFBQSxHQUFBQyxRQUFBLENBQUEvRSxDQUFBO1lBRUQrTCxRQUFRLENBQUMsaUNBQWlDLENBQUM7VUFBQztZQUFBLE9BQUFoSCxRQUFBLENBQUE5RSxDQUFBO1FBQUE7TUFBQSxHQUFBd0UsT0FBQTtJQUFBLENBRW5EO0lBQUEsZ0JBM0JLRixZQUFZQSxDQUFBaUIsRUFBQTtNQUFBLE9BQUFuQyxJQUFBLENBQUF0QixLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBMkJqQjtFQUVELG9CQUNJOUUsMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFtRixnQkFDOUZqQiwyREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQWtFLEdBQUMsV0FBYSxDQUFDLEVBRTlGVSxLQUFLLGlCQUFJM0IsMkRBQUE7SUFBR2lCLFNBQVMsRUFBQztFQUEyRCxHQUFFVSxLQUFTLENBQUMsZUFFOUYzQiwyREFBQTtJQUFNeUksUUFBUSxFQUFFbEIsWUFBYTtJQUFDdEcsU0FBUyxFQUFDO0VBQVcsZ0JBQy9DakIsMkRBQUEsMkJBQ0lBLDJEQUFBO0lBQU9pQixTQUFTLEVBQUM7RUFBK0UsR0FBQyxtQkFFMUYsQ0FBQyxlQUNSakIsMkRBQUE7SUFDSTBJLElBQUksRUFBQyxPQUFPO0lBQ1p6SCxTQUFTLEVBQUMsZ0hBQWdIO0lBQzFIMlIsV0FBVyxFQUFDLGlCQUFpQjtJQUM3Qm5QLEtBQUssRUFBRThMLEtBQU07SUFDYjVHLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL0csQ0FBQztNQUFBLE9BQUswUSxRQUFRLENBQUMxUSxDQUFDLENBQUNpSCxNQUFNLENBQUNwRixLQUFLLENBQUM7SUFBQSxDQUFDO0lBQzFDcUYsUUFBUTtFQUFBLENBQ1gsQ0FDQSxDQUFDLGVBQ045SSwyREFBQSwyQkFDSUEsMkRBQUE7SUFBT2lCLFNBQVMsRUFBQztFQUErRSxHQUFDLGNBRTFGLENBQUMsZUFDUmpCLDJEQUFBO0lBQ0kwSSxJQUFJLEVBQUMsVUFBVTtJQUNmekgsU0FBUyxFQUFDLGdIQUFnSDtJQUMxSHdDLEtBQUssRUFBRThPLFFBQVM7SUFDaEI1SixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9HLENBQUM7TUFBQSxPQUFLNFEsV0FBVyxDQUFDNVEsQ0FBQyxDQUFDaUgsTUFBTSxDQUFDcEYsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUM3Q3FGLFFBQVE7RUFBQSxDQUNYLENBQ0EsQ0FBQyxlQUNOOUksMkRBQUE7SUFBUTBJLElBQUksRUFBQyxRQUFRO0lBQUN6SCxTQUFTLEVBQUM7RUFBcUgsR0FBQyxtQkFFOUksQ0FDTixDQUNMLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVOLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJDN0V4Qix1S0FBQWlCLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEsR0FBQVIsQ0FBQSxFQUFBSCxDQUFBLE9BQUFpQixDQUFBLElBQUFGLENBQUEsS0FBQVYsQ0FBQSxJQUFBTCxDQUFBLEdBQUFnQixDQUFBLENBQUFPLE1BQUEsRUFBQXZCLENBQUEsVUFBQUssQ0FBQSxFQUFBRSxDQUFBLEdBQUFTLENBQUEsQ0FBQWhCLENBQUEsR0FBQXFCLENBQUEsR0FBQUgsQ0FBQSxDQUFBRixDQUFBLEVBQUFRLENBQUEsR0FBQWpCLENBQUEsS0FBQU4sQ0FBQSxRQUFBSSxDQUFBLEdBQUFtQixDQUFBLEtBQUFyQixDQUFBLE1BQUFRLENBQUEsR0FBQUosQ0FBQSxFQUFBQyxDQUFBLEdBQUFELENBQUEsWUFBQUMsQ0FBQSxXQUFBRCxDQUFBLE1BQUFBLENBQUEsTUFBQVIsQ0FBQSxJQUFBUSxDQUFBLE9BQUFjLENBQUEsTUFBQWhCLENBQUEsR0FBQUosQ0FBQSxRQUFBb0IsQ0FBQSxHQUFBZCxDQUFBLFFBQUFDLENBQUEsTUFBQVUsQ0FBQSxDQUFBQyxDQUFBLEdBQUFoQixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBSSxDQUFBLE9BQUFjLENBQUEsR0FBQUcsQ0FBQSxLQUFBbkIsQ0FBQSxHQUFBSixDQUFBLFFBQUFNLENBQUEsTUFBQUosQ0FBQSxJQUFBQSxDQUFBLEdBQUFxQixDQUFBLE1BQUFqQixDQUFBLE1BQUFOLENBQUEsRUFBQU0sQ0FBQSxNQUFBSixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBcUIsQ0FBQSxFQUFBaEIsQ0FBQSxjQUFBSCxDQUFBLElBQUFKLENBQUEsYUFBQW1CLENBQUEsUUFBQUgsQ0FBQSxPQUFBZCxDQUFBLHFCQUFBRSxDQUFBLEVBQUFXLENBQUEsRUFBQVEsQ0FBQSxRQUFBVCxDQUFBLFlBQUFVLFNBQUEsdUNBQUFSLENBQUEsVUFBQUQsQ0FBQSxJQUFBSyxDQUFBLENBQUFMLENBQUEsRUFBQVEsQ0FBQSxHQUFBaEIsQ0FBQSxHQUFBUSxDQUFBLEVBQUFMLENBQUEsR0FBQWEsQ0FBQSxHQUFBeEIsQ0FBQSxHQUFBUSxDQUFBLE9BQUFULENBQUEsR0FBQVksQ0FBQSxNQUFBTSxDQUFBLEtBQUFWLENBQUEsS0FBQUMsQ0FBQSxHQUFBQSxDQUFBLFFBQUFBLENBQUEsU0FBQVUsQ0FBQSxDQUFBZixDQUFBLFFBQUFrQixDQUFBLENBQUFiLENBQUEsRUFBQUcsQ0FBQSxLQUFBTyxDQUFBLENBQUFmLENBQUEsR0FBQVEsQ0FBQSxHQUFBTyxDQUFBLENBQUFDLENBQUEsR0FBQVIsQ0FBQSxhQUFBSSxDQUFBLE1BQUFSLENBQUEsUUFBQUMsQ0FBQSxLQUFBSCxDQUFBLFlBQUFMLENBQUEsR0FBQU8sQ0FBQSxDQUFBRixDQUFBLFdBQUFMLENBQUEsR0FBQUEsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLFVBQUFjLFNBQUEsMkNBQUF6QixDQUFBLENBQUEyQixJQUFBLFNBQUEzQixDQUFBLEVBQUFXLENBQUEsR0FBQVgsQ0FBQSxDQUFBNEIsS0FBQSxFQUFBcEIsQ0FBQSxTQUFBQSxDQUFBLG9CQUFBQSxDQUFBLEtBQUFSLENBQUEsR0FBQU8sQ0FBQSxlQUFBUCxDQUFBLENBQUEwQixJQUFBLENBQUFuQixDQUFBLEdBQUFDLENBQUEsU0FBQUcsQ0FBQSxHQUFBYyxTQUFBLHVDQUFBcEIsQ0FBQSxnQkFBQUcsQ0FBQSxPQUFBRCxDQUFBLEdBQUFSLENBQUEsY0FBQUMsQ0FBQSxJQUFBaUIsQ0FBQSxHQUFBQyxDQUFBLENBQUFmLENBQUEsUUFBQVEsQ0FBQSxHQUFBVixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLEVBQUFlLENBQUEsT0FBQUUsQ0FBQSxrQkFBQXBCLENBQUEsSUFBQU8sQ0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsTUFBQUcsQ0FBQSxHQUFBWCxDQUFBLGNBQUFlLENBQUEsbUJBQUFhLEtBQUEsRUFBQTVCLENBQUEsRUFBQTJCLElBQUEsRUFBQVYsQ0FBQSxTQUFBaEIsQ0FBQSxFQUFBSSxDQUFBLEVBQUFFLENBQUEsUUFBQUksQ0FBQSxRQUFBUyxDQUFBLGdCQUFBVixVQUFBLGNBQUFtQixrQkFBQSxjQUFBQywyQkFBQSxLQUFBOUIsQ0FBQSxHQUFBWSxNQUFBLENBQUFtQixjQUFBLE1BQUF2QixDQUFBLE1BQUFMLENBQUEsSUFBQUgsQ0FBQSxDQUFBQSxDQUFBLElBQUFHLENBQUEsU0FBQVcsbUJBQUEsQ0FBQWQsQ0FBQSxPQUFBRyxDQUFBLGlDQUFBSCxDQUFBLEdBQUFXLENBQUEsR0FBQW1CLDBCQUFBLENBQUFyQixTQUFBLEdBQUFDLFNBQUEsQ0FBQUQsU0FBQSxHQUFBRyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxZQUFBTyxFQUFBaEIsQ0FBQSxXQUFBYSxNQUFBLENBQUFvQixjQUFBLEdBQUFwQixNQUFBLENBQUFvQixjQUFBLENBQUFqQyxDQUFBLEVBQUErQiwwQkFBQSxLQUFBL0IsQ0FBQSxDQUFBa0MsU0FBQSxHQUFBSCwwQkFBQSxFQUFBaEIsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBTSxDQUFBLHlCQUFBTixDQUFBLENBQUFVLFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFGLENBQUEsR0FBQVosQ0FBQSxXQUFBOEIsaUJBQUEsQ0FBQXBCLFNBQUEsR0FBQXFCLDBCQUFBLEVBQUFoQixtQkFBQSxDQUFBSCxDQUFBLGlCQUFBbUIsMEJBQUEsR0FBQWhCLG1CQUFBLENBQUFnQiwwQkFBQSxpQkFBQUQsaUJBQUEsR0FBQUEsaUJBQUEsQ0FBQUssV0FBQSx3QkFBQXBCLG1CQUFBLENBQUFnQiwwQkFBQSxFQUFBekIsQ0FBQSx3QkFBQVMsbUJBQUEsQ0FBQUgsQ0FBQSxHQUFBRyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFOLENBQUEsZ0JBQUFTLG1CQUFBLENBQUFILENBQUEsRUFBQVIsQ0FBQSxpQ0FBQVcsbUJBQUEsQ0FBQUgsQ0FBQSw4REFBQXdCLFlBQUEsWUFBQUEsYUFBQSxhQUFBQyxDQUFBLEVBQUE3QixDQUFBLEVBQUE4QixDQUFBLEVBQUF0QixDQUFBO0FBQUEsU0FBQUQsb0JBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUEsUUFBQU8sQ0FBQSxHQUFBSyxNQUFBLENBQUEwQixjQUFBLFFBQUEvQixDQUFBLHVCQUFBUixDQUFBLElBQUFRLENBQUEsUUFBQU8sbUJBQUEsWUFBQXlCLG1CQUFBeEMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQSxhQUFBSyxFQUFBSixDQUFBLEVBQUFFLENBQUEsSUFBQVcsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBRSxDQUFBLFlBQUFGLENBQUEsZ0JBQUF5QyxPQUFBLENBQUF2QyxDQUFBLEVBQUFFLENBQUEsRUFBQUosQ0FBQSxTQUFBRSxDQUFBLEdBQUFNLENBQUEsR0FBQUEsQ0FBQSxDQUFBUixDQUFBLEVBQUFFLENBQUEsSUFBQTJCLEtBQUEsRUFBQXpCLENBQUEsRUFBQXNDLFVBQUEsR0FBQXpDLENBQUEsRUFBQTBDLFlBQUEsR0FBQTFDLENBQUEsRUFBQTJDLFFBQUEsR0FBQTNDLENBQUEsTUFBQUQsQ0FBQSxDQUFBRSxDQUFBLElBQUFFLENBQUEsSUFBQUUsQ0FBQSxhQUFBQSxDQUFBLGNBQUFBLENBQUEsbUJBQUFTLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFBNEMsbUJBQUF6QyxDQUFBLEVBQUFILENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFJLENBQUEsRUFBQWUsQ0FBQSxFQUFBWixDQUFBLGNBQUFELENBQUEsR0FBQUosQ0FBQSxDQUFBaUIsQ0FBQSxFQUFBWixDQUFBLEdBQUFHLENBQUEsR0FBQUosQ0FBQSxDQUFBcUIsS0FBQSxXQUFBekIsQ0FBQSxnQkFBQUosQ0FBQSxDQUFBSSxDQUFBLEtBQUFJLENBQUEsQ0FBQW9CLElBQUEsR0FBQTNCLENBQUEsQ0FBQVcsQ0FBQSxJQUFBa0MsT0FBQSxDQUFBQyxPQUFBLENBQUFuQyxDQUFBLEVBQUFvQyxJQUFBLENBQUE5QyxDQUFBLEVBQUFJLENBQUE7QUFBQSxTQUFBMkMsa0JBQUE3QyxDQUFBLDZCQUFBSCxDQUFBLFNBQUFELENBQUEsR0FBQWtELFNBQUEsYUFBQUosT0FBQSxXQUFBNUMsQ0FBQSxFQUFBSSxDQUFBLFFBQUFlLENBQUEsR0FBQWpCLENBQUEsQ0FBQStDLEtBQUEsQ0FBQWxELENBQUEsRUFBQUQsQ0FBQSxZQUFBb0QsTUFBQWhELENBQUEsSUFBQXlDLGtCQUFBLENBQUF4QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQThDLEtBQUEsRUFBQUMsTUFBQSxVQUFBakQsQ0FBQSxjQUFBaUQsT0FBQWpELENBQUEsSUFBQXlDLGtCQUFBLENBQUF4QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQThDLEtBQUEsRUFBQUMsTUFBQSxXQUFBakQsQ0FBQSxLQUFBZ0QsS0FBQTtBQUFBLFNBQUFFLGVBQUFwRCxDQUFBLEVBQUFGLENBQUEsV0FBQXVELGVBQUEsQ0FBQXJELENBQUEsS0FBQXNELHFCQUFBLENBQUF0RCxDQUFBLEVBQUFGLENBQUEsS0FBQXlELDJCQUFBLENBQUF2RCxDQUFBLEVBQUFGLENBQUEsS0FBQTBELGdCQUFBO0FBQUEsU0FBQUEsaUJBQUEsY0FBQWhDLFNBQUE7QUFBQSxTQUFBK0IsNEJBQUF2RCxDQUFBLEVBQUFtQixDQUFBLFFBQUFuQixDQUFBLDJCQUFBQSxDQUFBLFNBQUF5RCxpQkFBQSxDQUFBekQsQ0FBQSxFQUFBbUIsQ0FBQSxPQUFBcEIsQ0FBQSxNQUFBMkQsUUFBQSxDQUFBakMsSUFBQSxDQUFBekIsQ0FBQSxFQUFBMkQsS0FBQSw2QkFBQTVELENBQUEsSUFBQUMsQ0FBQSxDQUFBNEQsV0FBQSxLQUFBN0QsQ0FBQSxHQUFBQyxDQUFBLENBQUE0RCxXQUFBLENBQUFDLElBQUEsYUFBQTlELENBQUEsY0FBQUEsQ0FBQSxHQUFBK0QsS0FBQSxDQUFBQyxJQUFBLENBQUEvRCxDQUFBLG9CQUFBRCxDQUFBLCtDQUFBaUUsSUFBQSxDQUFBakUsQ0FBQSxJQUFBMEQsaUJBQUEsQ0FBQXpELENBQUEsRUFBQW1CLENBQUE7QUFBQSxTQUFBc0Msa0JBQUF6RCxDQUFBLEVBQUFtQixDQUFBLGFBQUFBLENBQUEsSUFBQUEsQ0FBQSxHQUFBbkIsQ0FBQSxDQUFBc0IsTUFBQSxNQUFBSCxDQUFBLEdBQUFuQixDQUFBLENBQUFzQixNQUFBLFlBQUF4QixDQUFBLE1BQUFJLENBQUEsR0FBQTRELEtBQUEsQ0FBQTNDLENBQUEsR0FBQXJCLENBQUEsR0FBQXFCLENBQUEsRUFBQXJCLENBQUEsSUFBQUksQ0FBQSxDQUFBSixDQUFBLElBQUFFLENBQUEsQ0FBQUYsQ0FBQSxVQUFBSSxDQUFBO0FBQUEsU0FBQW9ELHNCQUFBdEQsQ0FBQSxFQUFBdUIsQ0FBQSxRQUFBeEIsQ0FBQSxXQUFBQyxDQUFBLGdDQUFBQyxNQUFBLElBQUFELENBQUEsQ0FBQUMsTUFBQSxDQUFBRSxRQUFBLEtBQUFILENBQUEsNEJBQUFELENBQUEsUUFBQUQsQ0FBQSxFQUFBSSxDQUFBLEVBQUFJLENBQUEsRUFBQUksQ0FBQSxFQUFBUyxDQUFBLE9BQUFMLENBQUEsT0FBQVYsQ0FBQSxpQkFBQUUsQ0FBQSxJQUFBUCxDQUFBLEdBQUFBLENBQUEsQ0FBQTBCLElBQUEsQ0FBQXpCLENBQUEsR0FBQWlFLElBQUEsUUFBQTFDLENBQUEsUUFBQVosTUFBQSxDQUFBWixDQUFBLE1BQUFBLENBQUEsVUFBQWUsQ0FBQSx1QkFBQUEsQ0FBQSxJQUFBaEIsQ0FBQSxHQUFBUSxDQUFBLENBQUFtQixJQUFBLENBQUExQixDQUFBLEdBQUEyQixJQUFBLE1BQUFQLENBQUEsQ0FBQStDLElBQUEsQ0FBQXBFLENBQUEsQ0FBQTZCLEtBQUEsR0FBQVIsQ0FBQSxDQUFBRyxNQUFBLEtBQUFDLENBQUEsR0FBQVQsQ0FBQSxpQkFBQWQsQ0FBQSxJQUFBSSxDQUFBLE9BQUFGLENBQUEsR0FBQUYsQ0FBQSx5QkFBQWMsQ0FBQSxZQUFBZixDQUFBLGVBQUFXLENBQUEsR0FBQVgsQ0FBQSxjQUFBWSxNQUFBLENBQUFELENBQUEsTUFBQUEsQ0FBQSwyQkFBQU4sQ0FBQSxRQUFBRixDQUFBLGFBQUFpQixDQUFBO0FBQUEsU0FBQWtDLGdCQUFBckQsQ0FBQSxRQUFBOEQsS0FBQSxDQUFBSyxPQUFBLENBQUFuRSxDQUFBLFVBQUFBLENBQUE7QUFEd0M7QUFDTztBQUUvQyxJQUFNcEIsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUN2QixJQUFNMkksUUFBUSxHQUFHTCw4REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBQXRDLFNBQUEsR0FBZ0NSLGdEQUFRLENBQUM7TUFDckNtTSxRQUFRLEVBQUUsRUFBRTtNQUNaOUMsS0FBSyxFQUFFLEVBQUU7TUFDVHNELGFBQWEsRUFBRSxFQUFFO01BQ2pCakIsSUFBSSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBQUE5SyxVQUFBLEdBQUE1QixjQUFBLENBQUF3QixTQUFBO0lBTEtLLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFNNUIsSUFBQStILFVBQUEsR0FBMEIzSSxnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBNEksVUFBQSxHQUFBNUosY0FBQSxDQUFBMkosVUFBQTtJQUEvQmxOLEtBQUssR0FBQW1OLFVBQUE7SUFBRUMsUUFBUSxHQUFBRCxVQUFBO0VBRXRCLElBQU12SCxZQUFZO0lBQUEsSUFBQWxCLElBQUEsR0FBQXhCLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFHLFNBQUF1RCxRQUFPN0YsQ0FBQztNQUFBLElBQUFnRyxRQUFBLEVBQUFOLElBQUEsRUFBQVEsRUFBQTtNQUFBLE9BQUE5RCxZQUFBLEdBQUFDLENBQUEsV0FBQThELFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBbEYsQ0FBQSxHQUFBa0YsUUFBQSxDQUFBL0YsQ0FBQTtVQUFBO1lBQ3pCSixDQUFDLENBQUNvRyxjQUFjLENBQUMsQ0FBQztZQUNsQitHLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFBQ2hILFFBQUEsQ0FBQWxGLENBQUE7WUFBQWtGLFFBQUEsQ0FBQS9GLENBQUE7WUFBQSxPQUdjaUYsS0FBSyxDQUFDLGVBQWUsRUFBRTtjQUMxQ1MsTUFBTSxFQUFFLE1BQU07Y0FDZFAsT0FBTyxFQUFFO2dCQUFFLGNBQWMsRUFBRTtjQUFtQixDQUFDO2NBQy9DZ0IsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3RCLFFBQVE7WUFDakMsQ0FBQyxDQUFDO1VBQUE7WUFKSWEsUUFBUSxHQUFBRyxRQUFBLENBQUEvRSxDQUFBO1lBQUEsS0FNVjRFLFFBQVEsQ0FBQ1UsRUFBRTtjQUFBUCxRQUFBLENBQUEvRixDQUFBO2NBQUE7WUFBQTtZQUNYO1lBQ0FxSCxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQUN0QixRQUFBLENBQUEvRixDQUFBO1lBQUE7VUFBQTtZQUFBK0YsUUFBQSxDQUFBL0YsQ0FBQTtZQUFBLE9BRUs0RixRQUFRLENBQUNQLElBQUksQ0FBQyxDQUFDO1VBQUE7WUFBNUJDLElBQUksR0FBQVMsUUFBQSxDQUFBL0UsQ0FBQTtZQUNWK0wsUUFBUSxDQUFDekgsSUFBSSxDQUFDNEgsT0FBTyxJQUFJLDhCQUE4QixDQUFDO1VBQUM7WUFBQW5ILFFBQUEsQ0FBQS9GLENBQUE7WUFBQTtVQUFBO1lBQUErRixRQUFBLENBQUFsRixDQUFBO1lBQUFpRixFQUFBLEdBQUFDLFFBQUEsQ0FBQS9FLENBQUE7WUFHN0QrTCxRQUFRLENBQUMseURBQXlELENBQUM7VUFBQztZQUFBLE9BQUFoSCxRQUFBLENBQUE5RSxDQUFBO1FBQUE7TUFBQSxHQUFBd0UsT0FBQTtJQUFBLENBRTNFO0lBQUEsZ0JBckJLRixZQUFZQSxDQUFBaUIsRUFBQTtNQUFBLE9BQUFuQyxJQUFBLENBQUF0QixLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBcUJqQjtFQUVELG9CQUNJOUUsMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUEyRyxnQkFDdEhqQiwyREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQWtGLEdBQUMscUJBRTdGLENBQUMsRUFFSlUsS0FBSyxpQkFDRjNCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBMkUsR0FDckZVLEtBQ0EsQ0FDUixlQUVEM0IsMkRBQUE7SUFBTXlJLFFBQVEsRUFBRWxCLFlBQWE7SUFBQ3RHLFNBQVMsRUFBQztFQUFXLGdCQUUvQ2pCLDJEQUFBLDJCQUNJQSwyREFBQTtJQUFPaUIsU0FBUyxFQUFDO0VBQWdELEdBQUMsc0JBQTJCLENBQUMsZUFDOUZqQiwyREFBQTtJQUNJMEksSUFBSSxFQUFDLE1BQU07SUFDWGtLLFdBQVcsRUFBQyxhQUFhO0lBQ3pCM1IsU0FBUyxFQUFDLG9JQUFvSTtJQUM5SXdDLEtBQUssRUFBRXNELFFBQVEsQ0FBQ3NMLFFBQVM7SUFDekIxSixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBRy9HLENBQUM7TUFBQSxPQUFLb0YsV0FBVyxDQUFBNEIsYUFBQSxDQUFBQSxhQUFBLEtBQUs3QixRQUFRO1FBQUVzTCxRQUFRLEVBQUV6USxDQUFDLENBQUNpSCxNQUFNLENBQUNwRjtNQUFLLEVBQUMsQ0FBQztJQUFBLENBQUM7SUFDdEVxRixRQUFRO0VBQUEsQ0FDWCxDQUNBLENBQUMsZUFHTjlJLDJEQUFBLDJCQUNJQSwyREFBQTtJQUFPaUIsU0FBUyxFQUFDO0VBQWdELEdBQUMsa0JBQXVCLENBQUMsZUFDMUZqQiwyREFBQTtJQUNJMEksSUFBSSxFQUFDLE9BQU87SUFDWmtLLFdBQVcsRUFBQyxnQkFBZ0I7SUFDNUIzUixTQUFTLEVBQUMsb0lBQW9JO0lBQzlJd0MsS0FBSyxFQUFFc0QsUUFBUSxDQUFDd0ksS0FBTTtJQUN0QjVHLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL0csQ0FBQztNQUFBLE9BQUtvRixXQUFXLENBQUE0QixhQUFBLENBQUFBLGFBQUEsS0FBSzdCLFFBQVE7UUFBRXdJLEtBQUssRUFBRTNOLENBQUMsQ0FBQ2lILE1BQU0sQ0FBQ3BGO01BQUssRUFBQyxDQUFDO0lBQUEsQ0FBQztJQUNuRXFGLFFBQVE7RUFBQSxDQUNYLENBQ0EsQ0FBQyxlQUdOOUksMkRBQUEsMkJBQ0lBLDJEQUFBO0lBQU9pQixTQUFTLEVBQUM7RUFBZ0QsR0FBQywyQkFBZ0MsQ0FBQyxlQUNuR2pCLDJEQUFBO0lBQ0lpQixTQUFTLEVBQUMsd0lBQXdJO0lBQ2xKd0MsS0FBSyxFQUFFc0QsUUFBUSxDQUFDNkssSUFBSztJQUNyQmpKLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHL0csQ0FBQztNQUFBLE9BQUtvRixXQUFXLENBQUE0QixhQUFBLENBQUFBLGFBQUEsS0FBSzdCLFFBQVE7UUFBRTZLLElBQUksRUFBRWhRLENBQUMsQ0FBQ2lILE1BQU0sQ0FBQ3BGO01BQUssRUFBQyxDQUFDO0lBQUE7RUFBQyxnQkFFbEV6RCwyREFBQTtJQUFReUQsS0FBSyxFQUFDO0VBQVcsR0FBQyxxQkFBd0IsQ0FBQyxlQUNuRHpELDJEQUFBO0lBQVF5RCxLQUFLLEVBQUM7RUFBYSxHQUFDLG9CQUEwQixDQUFDLGVBQ3ZEekQsMkRBQUE7SUFBUXlELEtBQUssRUFBQztFQUFjLEdBQUMsc0JBQXlCLENBQUMsZUFDdkR6RCwyREFBQTtJQUFReUQsS0FBSyxFQUFDO0VBQWUsR0FBQyxxQkFBMkIsQ0FBQyxlQUMxRHpELDJEQUFBO0lBQVF5RCxLQUFLLEVBQUM7RUFBa0IsR0FBQyxvQ0FBdUMsQ0FDcEUsQ0FDUCxDQUFDLGVBR056RCwyREFBQSwyQkFDSUEsMkRBQUE7SUFBT2lCLFNBQVMsRUFBQztFQUFnRCxHQUFDLGNBQW1CLENBQUMsZUFDdEZqQiwyREFBQTtJQUNJMEksSUFBSSxFQUFDLFVBQVU7SUFDZmtLLFdBQVcsRUFBQyxrREFBVTtJQUN0QjNSLFNBQVMsRUFBQyxvSUFBb0k7SUFDOUl3QyxLQUFLLEVBQUVzRCxRQUFRLENBQUM4TCxhQUFjO0lBQzlCbEssUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUcvRyxDQUFDO01BQUEsT0FBS29GLFdBQVcsQ0FBQTRCLGFBQUEsQ0FBQUEsYUFBQSxLQUFLN0IsUUFBUTtRQUFFOEwsYUFBYSxFQUFFalIsQ0FBQyxDQUFDaUgsTUFBTSxDQUFDcEY7TUFBSyxFQUFDLENBQUM7SUFBQSxDQUFDO0lBQzNFcUYsUUFBUTtFQUFBLENBQ1gsQ0FDQSxDQUFDLGVBRU45SSwyREFBQTtJQUNJMEksSUFBSSxFQUFDLFFBQVE7SUFDYnpILFNBQVMsRUFBQztFQUF3SixHQUNySyxnQkFFTyxDQUNOLENBQ0wsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVAsWUFBWSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSHdCO0FBR2pDO0FBQ29DO0FBRXREcVMsNENBQU8sQ0FBQ2EsUUFBUSxDQUFDWixvREFBYSxFQUFFQyxrREFBVyxFQUFFQyxpREFBVSxFQUFFQyw0Q0FBSyxFQUFFQyw4Q0FBTyxFQUFFQyw2Q0FBTSxFQUFFQyxpREFBVSxFQUFFQyxtREFBWSxFQUFFQyxrREFBVyxDQUFDO0FBRXZILElBQU1oVCxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQ3RCLElBQUFrRyxTQUFBLEdBQTBDUixnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBWSxVQUFBLEdBQUE1QixjQUFBLENBQUF3QixTQUFBO0lBQWpEbU4sYUFBYSxHQUFBL00sVUFBQTtJQUFFZ04sZ0JBQWdCLEdBQUFoTixVQUFBO0VBQ3RDLElBQUErSCxVQUFBLEdBQTRDM0ksZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTRJLFVBQUEsR0FBQTVKLGNBQUEsQ0FBQTJKLFVBQUE7SUFBbkRrRixjQUFjLEdBQUFqRixVQUFBO0lBQUVrRixpQkFBaUIsR0FBQWxGLFVBQUE7RUFDeEMsSUFBQXFCLFVBQUEsR0FBd0NqSyxnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBa0ssVUFBQSxHQUFBbEwsY0FBQSxDQUFBaUwsVUFBQTtJQUEvQzhELFlBQVksR0FBQTdELFVBQUE7SUFBRThELGVBQWUsR0FBQTlELFVBQUE7RUFFcEMsSUFBTStELE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJeE0sR0FBRyxFQUFFeU0sUUFBUSxFQUFLO0lBQ2pDbk4sS0FBSyxDQUFDVSxHQUFHLENBQUMsQ0FDUC9DLElBQUksQ0FBQyxVQUFBOUMsQ0FBQztNQUFBLE9BQUlBLENBQUMsQ0FBQ3dHLEVBQUUsR0FBR3hHLENBQUMsQ0FBQ3VTLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSTtJQUFBLEVBQUMsQ0FDakN6UCxJQUFJLENBQUMsVUFBQTBQLEdBQUcsRUFBSTtNQUNYLElBQUcsQ0FBQ0EsR0FBRyxFQUFFO01BQ1QsSUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDO01BQ3BDLElBQUkrQyxLQUFLLENBQUNuUixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3RCLElBQU0rRCxPQUFPLEdBQUdvTixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMvQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNwRixHQUFHLENBQUMsVUFBQXFJLENBQUM7UUFBQSxPQUFJQSxDQUFDLENBQUNELElBQUksQ0FBQyxDQUFDO01BQUEsRUFBQztNQUN0RCxJQUFNbE4sSUFBSSxHQUFHaU4sS0FBSyxDQUFDOU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDMkcsR0FBRyxDQUFDLFVBQUEvSSxDQUFDLEVBQUk7UUFDakMsSUFBTXFSLElBQUksR0FBR3JSLENBQUMsQ0FBQ21PLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ3BGLEdBQUcsQ0FBQyxVQUFBcEosQ0FBQztVQUFBLE9BQUlBLENBQUMsQ0FBQ3dSLElBQUksQ0FBQyxDQUFDO1FBQUEsRUFBQztRQUM1QyxPQUFPck4sT0FBTyxDQUFDd04sTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUgsQ0FBQyxFQUFFclMsQ0FBQztVQUFBLE9BQUF3RyxhQUFBLENBQUFBLGFBQUEsS0FBVWdNLEdBQUcsT0FBQUMsZUFBQSxLQUFHSixDQUFDLEVBQUdDLElBQUksQ0FBQ3RTLENBQUMsQ0FBQztRQUFBLENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUN0RSxDQUFDLENBQUM7TUFDRixJQUFJa0YsSUFBSSxDQUFDbEUsTUFBTSxFQUFFZ1IsUUFBUSxDQUFDOU0sSUFBSSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQTFGLENBQUM7TUFBQSxPQUFJZixPQUFPLENBQUNjLEtBQUssQ0FBQ0MsQ0FBQyxDQUFDO0lBQUEsRUFBQztFQUNqQyxDQUFDO0VBRUR1RSxpREFBUyxDQUFDLFlBQU07SUFDZGdPLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxVQUFDN00sSUFBSSxFQUFLO01BQzlDd00sZ0JBQWdCLENBQUM7UUFDZmdCLE1BQU0sRUFBRXhOLElBQUksQ0FBQzhFLEdBQUcsQ0FBQyxVQUFBaEssQ0FBQztVQUFBLE9BQUlBLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFBQSxFQUFDO1FBQ2hDMlMsUUFBUSxFQUFFLENBQUM7VUFDVEMsS0FBSyxFQUFFLElBQUk7VUFDWDFOLElBQUksRUFBRUEsSUFBSSxDQUFDOEUsR0FBRyxDQUFDLFVBQUFoSyxDQUFDO1lBQUEsT0FBSTZTLFVBQVUsQ0FBQzdTLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1VBQUEsRUFBQztVQUM3RDhTLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO1VBQ2xEQyxXQUFXLEVBQUUsU0FBUztVQUN0QkMsV0FBVyxFQUFFO1FBQ2YsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGakIsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLFVBQUM3TSxJQUFJLEVBQUs7TUFDbkQwTSxpQkFBaUIsQ0FBQztRQUNoQmMsTUFBTSxFQUFFeE4sSUFBSSxDQUFDOEUsR0FBRyxDQUFDLFVBQUFoSyxDQUFDO1VBQUEsT0FBSUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUFBLEVBQUM7UUFDbEMyUyxRQUFRLEVBQUUsQ0FBQztVQUNUek4sSUFBSSxFQUFFQSxJQUFJLENBQUM4RSxHQUFHLENBQUMsVUFBQWhLLENBQUM7WUFBQSxPQUFJNlMsVUFBVSxDQUFDN1MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1VBQUEsRUFBQztVQUNoRDhTLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztVQUM3REMsV0FBVyxFQUFFLFNBQVM7VUFDdEJDLFdBQVcsRUFBRTtRQUNmLENBQUM7TUFDSCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRmpCLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBRSxVQUFDN00sSUFBSSxFQUFLO01BQ2xENE0sZUFBZSxDQUFDO1FBQ2RZLE1BQU0sRUFBRXhOLElBQUksQ0FBQzhFLEdBQUcsQ0FBQyxVQUFBaEssQ0FBQztVQUFBLE9BQUlBLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFBQSxFQUFDO1FBQ2pDMlMsUUFBUSxFQUFFLENBQUM7VUFDVEMsS0FBSyxFQUFFLFNBQVM7VUFDaEIxTixJQUFJLEVBQUVBLElBQUksQ0FBQzhFLEdBQUcsQ0FBQyxVQUFBaEssQ0FBQztZQUFBLE9BQUk2UyxVQUFVLENBQUM3UyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztVQUFBLEVBQUM7VUFDdkQrUyxXQUFXLEVBQUUsU0FBUztVQUN0QkQsZUFBZSxFQUFFLHdCQUF3QjtVQUN6Q0csb0JBQW9CLEVBQUUsTUFBTTtVQUM1QkMsT0FBTyxFQUFFO1FBQ1gsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNQyxPQUFPLEdBQUc7SUFDZEMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLG1CQUFtQixFQUFFLEtBQUs7SUFDMUJDLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUU7UUFBRWIsTUFBTSxFQUFFO1VBQUV2RyxLQUFLLEVBQUUsU0FBUztVQUFFcUgsSUFBSSxFQUFFO1lBQUVDLE1BQU0sRUFBRTtVQUFRO1FBQUU7TUFBRTtJQUFFLENBQUM7SUFDaEZDLE1BQU0sRUFBRTtNQUNOaFQsQ0FBQyxFQUFFO1FBQUVpVCxLQUFLLEVBQUU7VUFBRXhILEtBQUssRUFBRTtRQUFVLENBQUM7UUFBRXlILElBQUksRUFBRTtVQUFFekgsS0FBSyxFQUFFO1FBQVU7TUFBRSxDQUFDO01BQzlEMEgsQ0FBQyxFQUFFO1FBQUVGLEtBQUssRUFBRTtVQUFFeEgsS0FBSyxFQUFFO1FBQVUsQ0FBQztRQUFFeUgsSUFBSSxFQUFFO1VBQUV6SCxLQUFLLEVBQUU7UUFBVTtNQUFFO0lBQy9EO0VBQ0YsQ0FBQztFQUVELG9CQUNFdk8sMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFtQyxnQkFDOUNqQiwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQW1CLGdCQUM5QmpCLDJEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBMkQsR0FBQyx3QkFFdEUsQ0FBQyxlQUNMakIsMkRBQUE7SUFBR2lCLFNBQVMsRUFBQztFQUFtRixHQUFDLG9DQUU5RixDQUNGLENBQUMsZUFFTmpCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBdUMsZ0JBQ2xEakIsMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUE2RSxnQkFDeEZqQiwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQWlELENBQU0sQ0FBQyxlQUN2RWpCLDJEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBc0MsR0FBQyxxQkFBb0IsQ0FBQyxlQUMxRWpCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBZSxHQUN6QjRTLGFBQWEsZ0JBQUc3VCwyREFBQSxDQUFDeVQsaURBQUc7SUFBQzhCLE9BQU8sRUFBRUEsT0FBUTtJQUFDak8sSUFBSSxFQUFFdU07RUFBYyxDQUFFLENBQUMsZ0JBQUc3VCwyREFBQTtJQUFHaUIsU0FBUyxFQUFDO0VBQW1CLEdBQUMsZUFBZ0IsQ0FDbEgsQ0FDSixDQUFDLGVBRU5qQiwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQTZFLGdCQUN4RmpCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBaUQsQ0FBTSxDQUFDLGVBQ3ZFakIsMkRBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUFzQyxHQUFDLGdCQUFrQixDQUFDLGVBQ3hFakIsMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFtQyxHQUM3QzhTLGNBQWMsZ0JBQUcvVCwyREFBQSxDQUFDMFQsc0RBQVE7SUFBQzZCLE9BQU8sRUFBQTNNLGFBQUEsQ0FBQUEsYUFBQSxLQUFNMk0sT0FBTztNQUFFTyxNQUFNLEVBQUMsQ0FBQztJQUFDLEVBQUU7SUFBQ3hPLElBQUksRUFBRXlNO0VBQWUsQ0FBRSxDQUFDLGdCQUFHL1QsMkRBQUE7SUFBR2lCLFNBQVMsRUFBQztFQUFtQixHQUFDLGVBQWdCLENBQ3pJLENBQ0osQ0FBQyxlQUVOakIsMkRBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUEyRixnQkFDdEdqQiwyREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQWlELENBQU0sQ0FBQyxlQUN2RWpCLDJEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBc0MsR0FBQyxnQ0FBK0IsQ0FBQyxlQUNyRmpCLDJEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBZSxHQUN6QmdULFlBQVksZ0JBQUdqVSwyREFBQSxDQUFDMlQsa0RBQUk7SUFBQzRCLE9BQU8sRUFBRUEsT0FBUTtJQUFDak8sSUFBSSxFQUFFMk07RUFBYSxDQUFFLENBQUMsZ0JBQUdqVSwyREFBQTtJQUFHaUIsU0FBUyxFQUFDO0VBQW1CLEdBQUMsZUFBZ0IsQ0FDakgsQ0FDSixDQUNKLENBQ0osQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZVQsU0FBUyxFOzs7Ozs7Ozs7OztBQ3pIeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0FydGljbGVGb3JtLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL05pZ2h0RnVyeS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0FkbWluRGFzaGJvYXJkLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvQXJ0aWNsZVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Gb3J1bVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Ib21lUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0xvZ2luUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL1JlZ2lzdGVyUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL1N0YXRzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy8gSW1wb3J0IGRlcyBzdHlsZXNcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuXHJcbi8vIEltcG9ydCBkZXMgcGFnZXNcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vcGFnZXMvSG9tZVBhZ2UnO1xyXG5pbXBvcnQgRm9ydW1QYWdlIGZyb20gJy4vcGFnZXMvRm9ydW1QYWdlJztcclxuaW1wb3J0IEFydGljbGVQYWdlIGZyb20gJy4vcGFnZXMvQXJ0aWNsZVBhZ2UnO1xyXG5pbXBvcnQgU3RhdHNQYWdlIGZyb20gJy4vcGFnZXMvU3RhdHNQYWdlJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IFJlZ2lzdGVyUGFnZSBmcm9tICcuL3BhZ2VzL1JlZ2lzdGVyUGFnZSc7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSAnLi9wYWdlcy9Mb2dpblBhZ2UnO1xyXG5cclxuLy8gTk9VVkVBVSA6IEltcG9ydCBkZSBsYSBwYWdlIERhc2hib2FyZCBBZG1pblxyXG5pbXBvcnQgQWRtaW5EYXNoYm9hcmQgZnJvbSAnLi9wYWdlcy9BZG1pbkRhc2hib2FyZCc7XHJcblxyXG5jb25zb2xlLmxvZyhcIvCfkLIgRMOpbWFycmFnZSBkZSBsJ2FwcGxpY2F0aW9uIERyYWdvbkNNUy4uLlwiKTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgZm9udC1zYW5zIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIEJBTk5Jw4hSRSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgbWQ6aC00OCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWItNCBib3JkZXItdmlraW5nLWdvbGQgcmVsYXRpdmUgc2hhZG93LTJ4bCBiZy1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvYmFubmllcmUucG5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkJhbm5pw6hyZSBEcmFnb25zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXZpa2luZy1kYXJrIHRvLXRyYW5zcGFyZW50IG9wYWNpdHktNjBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LTEwIHB4LTQgZmxleC1ncm93IHJlbGF0aXZlIHotMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZVBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2ZvcnVtXCIgZWxlbWVudD17PEZvcnVtUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ydW0vYXJ0aWNsZS86aWRcIiBlbGVtZW50PXs8QXJ0aWNsZVBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3N0YXRpc3RpcXVlXCIgZWxlbWVudD17PFN0YXRzUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBlbGVtZW50PXs8UmVnaXN0ZXJQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpblBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTk9VVkVMTEUgUk9VVEUgOiBTYWxsZSBkdSBDb25zZWlsIChBZG1pbikgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FkbWluXCIgZWxlbWVudD17PEFkbWluRGFzaGJvYXJkIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBib3JkZXItdCBib3JkZXItdmlraW5nLWdvbGQvMzAgcHktNiBtdC0xMCB0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1saWdodCBmb250LWRyYWdvbiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+wqkgTCdBY2Fkw6ltaWUgZGUgQmVyayAtIEFyY2hpdmVzIERyYWNvbmlxdWVzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1yb290Jyk7XHJcbmlmIChyb290RWxlbWVudCkge1xyXG4gICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3Qocm9vdEVsZW1lbnQpO1xyXG4gICAgcm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiAgICBjb25zb2xlLmxvZyhcIuKchSBSZWFjdCBpbmplY3TDqSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxufSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgSW1wb3NzaWJsZSBkZSB0cm91dmVyIGwnw6lsw6ltZW50ICNyZWFjdC1yb290XCIpO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBcnRpY2xlRm9ybSA9ICh7IGlkLCBvblN1Y2Nlc3MgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNFZGl0TW9kZSA9IEJvb2xlYW4oaWQpO1xyXG5cclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBzdW1tYXJ5OiAnJyxcclxuICAgICAgICBjb250ZW50OiAnJyAvLyBBc3N1cmUtdG9pIHF1ZSBjZSBjaGFtcCBleGlzdGUgZGFucyB0b24gZW50aXTDqSBBcnRpY2xlLnBocFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNFZGl0TW9kZSkge1xyXG4gICAgICAgICAgICBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHsgXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbicgfSBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBzdW1tYXJ5OiBkYXRhLnN1bW1hcnkgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQgfHwgJydcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZCwgaXNFZGl0TW9kZV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElNUE9SVEFOVCA6IFBvdXIgQVBJIFBsYXRmb3JtLCBsZSBmb3JtYXQgcGFyIGTDqWZhdXQgZXN0IEpTT04tTERcclxuICAgICAgICAvLyBFbiBjYXMgZGUgbW9kaWZpY2F0aW9uIChQVVQvUEFUQ0gpLCBvbiB1dGlsaXNlIHNvdXZlbnQgUEFUQ0ggcG91ciDDqXZpdGVyIGxlcyBlcnJldXJzIDQxNVxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGlzRWRpdE1vZGUgPyAnUEFUQ0gnIDogJ1BPU1QnO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGlzRWRpdE1vZGUgPyBgL2FwaS9hcnRpY2xlcy8ke2lkfWAgOiAnL2FwaS9hcnRpY2xlcyc7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb3JyZWN0aW9uIGRlIGwnZXJyZXVyIDQxNSA6IG9uIHByw6ljaXNlIGxlIGZvcm1hdCBMRCtKU09OXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGlzRWRpdE1vZGUgPyAnYXBwbGljYXRpb24vbWVyZ2UtcGF0Y2granNvbicgOiAnYXBwbGljYXRpb24vbGQranNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTaSDDp2Egw6ljaG91ZSBlbmNvcmUsIG9uIHJlZ2FyZGUgbGUgZMOpdGFpbCBkYW5zIGxhIGNvbnNvbGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEw6l0YWlsIGRlIGwnZXJyZXVyIHNlcnZldXIgOlwiLCBlcnJvckRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJMZSBHcmFuZCBDb25zZWlsIHJlZnVzZSBjZSBwYXJjaGVtaW4uIFbDqXJpZmlleiBsZSBmb3JtYXQgZGVzIGRvbm7DqWVzLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIHLDqXNlYXUgOlwiLCBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvIHAtOCBiZy1zdG9uZS05MDAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgcm91bmRlZC1zbVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi02IHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7aXNFZGl0TW9kZSA/IFwiTW9kaWZpZXIgbGUgcGFyY2hlbWluXCIgOiBcIkdyYXZlciB1biBub3V2ZWF1IHLDqWNpdFwifVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXN0b25lLTQwMCBtYi0yIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1bMTBweF0gdHJhY2tpbmctd2lkZXN0XCI+VGl0cmUgZGUgbGEgbMOpZ2VuZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzQwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHRpdGxlOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zdG9uZS00MDAgbWItMiBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtWzEwcHhdIHRyYWNraW5nLXdpZGVzdFwiPlLDqXN1bcOpIChBcHBhcmHDrnQgc3VyIGxlIG11cik8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzQwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgaC0yNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgc3VtbWFyeTogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zdG9uZS00MDAgbWItMiBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtWzEwcHhdIHRyYWNraW5nLXdpZGVzdFwiPkTDqXRhaWxzIGRlIGwnYXZlbnR1cmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzQwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgaC00OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgY29udGVudDogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayBweS00IHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0VkaXRNb2RlID8gXCJNZXR0cmUgw6Agam91clwiIDogXCJTY2VsbGVyIGxlIHLDqWNpdFwifVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlRm9ybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tICdqd3QtZGVjb2RlJztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgdXNlciA9IG51bGw7XHJcblxyXG4gICAgLy8gT24gZMOpY29kZSBsZSB0b2tlbiBwb3VyIGNvbm5hw650cmUgbCd1dGlsaXNhdGV1ciBldCBzZXMgcsO0bGVzXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB1c2VyID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb2tlbiBpbnZhbGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIG5hdmlnYXRlKCcvbG9naW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gVsOpcmlmaWNhdGlvbiBkZXMgZHJvaXRzIHBvdXIgbGUgRGFzaGJvYXJkXHJcbiAgICBjb25zdCBjYW5TZWVEYXNoYm9hcmQgPSB1c2VyPy5yb2xlcz8uaW5jbHVkZXMoJ1JPTEVfRURJVEVVUicpIHx8IHVzZXI/LnJvbGVzPy5pbmNsdWRlcygnUk9MRV9BRE1JTicpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBib3JkZXItYi0yIGJvcmRlci12aWtpbmctZ29sZC81MCBwLTQgc3RpY2t5IHRvcC0wIHotNTAgc2hhZG93LWxnIGJhY2tkcm9wLWJsdXItbWQgYmctb3BhY2l0eS05NVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBkcm9wLXNoYWRvdy1tZCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB1cHBlcmNhc2VcIj5SaWRlcnMgb2YgQmVyazwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiB0ZXh0LWxnIGZvbnQtZHJhZ29uIHRyYWNraW5nLXdpZGUgdGV4dC12aWtpbmctbGlnaHQgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+QWNjdWVpbDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPkZvcnVtPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIExJRU4gREFTSEJPQVJEIDogVmlzaWJsZSB1bmlxdWVtZW50IHBvdXIgw4lkaXRldXIvQWRtaW4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5TZWVEYXNoYm9hcmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCIgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzUwIHB4LTIgcHktMC41IGhvdmVyOmJnLXZpa2luZy1nb2xkIGhvdmVyOnRleHQtYmxhY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnNlaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgYm9yZGVyLWwgYm9yZGVyLXN0b25lLTcwMCBwbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshdG9rZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZXhpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIHB4LTQgcHktMS41IHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVqb2luZHJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIGZvbnQtYmxhY2sgaXRhbGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyPy5wc2V1ZG8gfHwgXCJHdWVycmllclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtdmlraW5nLWZpcmUgdXBwZXJjYXNlIGZvbnQtYmxhY2sgYm9yZGVyIGJvcmRlci12aWtpbmctZmlyZS8zMCBweC0yIHB5LTEgaG92ZXI6YmctdmlraW5nLWZpcmUgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1aXR0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FudmFzLCB1c2VGcmFtZSwgdXNlVGhyZWUgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInOyAvLyDwn5GIIEFqb3V0ZSB1c2VUaHJlZVxyXG4vLyBpbXBvcnQgeyB1c2VHTFRGLCB1c2VBbmltYXRpb25zLCBDZW50ZXIsIEh0bWwsIHVzZVRleHR1cmUgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XHJcbmltcG9ydCB7IHVzZUdMVEYsIHVzZUFuaW1hdGlvbnMsIENlbnRlciwgSHRtbCwgdXNlVGV4dHVyZSwgU3RhcnMgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XHJcblxyXG5jb25zdCBNT0RFTF9QQVRIID0gJy9tb2RlbHMvbmlnaHRfZnVyeS5nbGInO1xyXG5jb25zdCBURVhUVVJFX1BBVEggPSAnL3RleHR1cmVzL25pZ2h0X2Z1cnlfc2tpbi53ZWJwJztcclxuY29uc3QgQU5JTUFUSU9OX05BTUUgPSAnTmlnaHRGdXJ5X2FybWF0dXJlQWN0aW9uJztcclxuXHJcbmZ1bmN0aW9uIERyYWdvbk1vZGVsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBzY2VuZSwgYW5pbWF0aW9ucyB9ID0gdXNlR0xURihNT0RFTF9QQVRIKTtcclxuICBjb25zdCB0ZXh0dXJlID0gdXNlVGV4dHVyZShURVhUVVJFX1BBVEgpO1xyXG4gIFxyXG4gIC8vIFBvdXIgcmVuZHJlIGxlIGRyYWdvbiByZXNwb25zaXZlIChDYWxjdWwgYXV0b21hdGlxdWUpXHJcbiAgY29uc3QgeyB2aWV3cG9ydCB9ID0gdXNlVGhyZWUoKTsgXHJcbiAgXHJcbiAgLy8g8J+noCBMRSBDQUxDVUwgSU5URUxMSUdFTlQgOlxyXG4gIC8vIFNpIGwnw6ljcmFuIGVzdCBwZXRpdCAobW9iaWxlKSwgb24gcsOpZHVpdCBsJ8OpY2hlbGxlLlxyXG4gIC8vIHZpZXdwb3J0LndpZHRoIGVzdCBsYSBsYXJnZXVyIGRlIGxhIHNjw6huZSBlbiB1bml0w6lzIDNELlxyXG4gIGNvbnN0IGVjaGVsbGVSZXNwb25zaXZlID0gdmlld3BvcnQud2lkdGggPCA1ID8gMC41IDogMC44OyBcclxuXHJcbiAgdGV4dHVyZS5mbGlwWSA9IGZhbHNlO1xyXG4gIHRleHR1cmUuY29sb3JTcGFjZSA9ICdzcmdiJztcclxuXHJcbiAgY29uc3QgZ3JvdXAgPSB1c2VSZWYoKTtcclxuICBjb25zdCB7IGFjdGlvbnMgfSA9IHVzZUFuaW1hdGlvbnMoYW5pbWF0aW9ucywgZ3JvdXApO1xyXG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzY2VuZS50cmF2ZXJzZSgoY2hpbGQpID0+IHtcclxuICAgICAgaWYgKGNoaWxkLmlzTWVzaCkge1xyXG4gICAgICAgIGNoaWxkLm1hdGVyaWFsLm1hcCA9IHRleHR1cmU7XHJcbiAgICAgICAgY2hpbGQubWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbc2NlbmUsIHRleHR1cmVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3Rpb25zICYmIGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1tBTklNQVRJT05fTkFNRV07XHJcbiAgICAgICAgYWN0aW9uLnJlc2V0KCkuZmFkZUluKDAuNSkucGxheSgpO1xyXG4gICAgICAgIGFjdGlvbi50aW1lU2NhbGUgPSAyLjU7XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFthY3Rpb25zXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUFuaW1hdGlvbiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7IFxyXG4gICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1tBTklNQVRJT05fTkFNRV07XHJcbiAgICBpZiAoIWFjdGlvbikgcmV0dXJuO1xyXG4gICAgaWYgKGlzUGxheWluZykgYWN0aW9uLmZhZGVPdXQoMC41KTtcclxuICAgIGVsc2UgeyBhY3Rpb24ucmVzZXQoKS5mYWRlSW4oMC41KS5wbGF5KCk7IGFjdGlvbi50aW1lU2NhbGUgPSAxLjU7IH1cclxuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICB9O1xyXG5cclxuICB1c2VGcmFtZSgoKSA9PiB7XHJcbiAgICBpZihncm91cC5jdXJyZW50KSBncm91cC5jdXJyZW50LnJvdGF0aW9uLnkgKz0gMC4wMDU7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8cHJpbWl0aXZlIFxyXG4gICAgICByZWY9e2dyb3VwfSBcclxuICAgICAgb2JqZWN0PXtzY2VuZX0gXHJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFuaW1hdGlvbn1cclxuICAgICAgb25Qb2ludGVyT3Zlcj17KCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcid9XHJcbiAgICAgIG9uUG9pbnRlck91dD17KCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnYXV0byd9XHJcbiAgICAgIFxyXG4gICAgICAvLyDwn5GHIE9uIGFwcGxpcXVlIGwnw6ljaGVsbGUgY2FsY3Vsw6llIGljaVxyXG4gICAgICBzY2FsZT17ZWNoZWxsZVJlc3BvbnNpdmV9IFxyXG4gICAgICBcclxuICAgICAgLy8g8J+RhyBPbiBmb3JjZSBYIMOgIDAgcG91ciBsZSBjZW50cmFnZSBob3Jpem9udGFsIGFic29sdVxyXG4gICAgICAvLyBbWD0wLCBZPS0xIChwb3VyIGJhaXNzZXIgdW4gcGV1KSwgWj0wXVxyXG4gICAgICBwb3NpdGlvbj17WzAsIDAuNSwgMF19IFxyXG4gICAgICBcclxuICAgICAgey4uLnByb3BzfSBcclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTmlnaHRGdXJ5U2NlbmUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbFwiPlxyXG4gICAgICA8Q2FudmFzIHNoYWRvd3MgY2FtZXJhPXt7IHBvc2l0aW9uOiBbMCwgMiwgMTBdLCBmb3Y6IDQ1IH19PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiDwn4yRIDEuIEZPTkQgREUgTlVJVCBQUk9GT05ERSAqL31cclxuICAgICAgICB7LyogT24gcmVtcGxhY2UgbGUgZ3JpcyBwYXIgdW4gYmxldSBudWl0IHRyw6hzIHNvbWJyZSAqL31cclxuICAgICAgICA8Y29sb3IgYXR0YWNoPVwiYmFja2dyb3VuZFwiIGFyZ3M9e1snIzA1MDUxMCddfSAvPlxyXG5cclxuICAgICAgICB7Lyog4pyoIDIuIENJRUwgw4lUT0lMw4kgKi99XHJcbiAgICAgICAgPFN0YXJzIFxyXG4gICAgICAgICAgcmFkaXVzPXsxMDB9IC8vIFJheW9uIGRlIGxhIHNwaMOocmUgZCfDqXRvaWxlc1xyXG4gICAgICAgICAgZGVwdGg9ezUwfSAgIC8vIFByb2ZvbmRldXIgcGVyw6d1ZVxyXG4gICAgICAgICAgY291bnQ9ezUwMDB9IC8vIE5vbWJyZSBkJ8OpdG9pbGVzXHJcbiAgICAgICAgICBmYWN0b3I9ezR9ICAgLy8gVGFpbGxlIGRlcyDDqXRvaWxlc1xyXG4gICAgICAgICAgc2F0dXJhdGlvbj17MH0gLy8gMCA9IGJsYW5jLCAxID0gY29sb3LDqVxyXG4gICAgICAgICAgZmFkZSAgICAgICAgIC8vIExlcyDDqXRvaWxlcyBkaXNwYXJhaXNzZW50IGF1eCBib3JkcyAoZWZmZXQgcsOpYWxpc3RlKVxyXG4gICAgICAgICAgc3BlZWQ9ezF9ICAgIC8vIFZpdGVzc2UgZGUgc2NpbnRpbGxlbWVudFxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHsvKiBMdW1pw6hyZXMgKG9uIGdhcmRlIHRlcyByw6lnbGFnZXMgYm9vc3TDqXMpICovfVxyXG4gICAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXszfSAvPlxyXG4gICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IHBvc2l0aW9uPXtbMTAsIDEwLCA1XX0gaW50ZW5zaXR5PXs0fSAvPlxyXG4gICAgICAgIDxzcG90TGlnaHQgcG9zaXRpb249e1stNSwgNSwgMTBdfSBpbnRlbnNpdHk9ezV9IGNvbG9yPVwiI2E4NTVmN1wiIC8+XHJcbiAgICAgICAgPHNwb3RMaWdodCBwb3NpdGlvbj17WzAsIDUsIC0xMF19IGludGVuc2l0eT17NX0gY29sb3I9XCIjZmZmZmZmXCIgLz5cclxuXHJcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8SHRtbCBjZW50ZXI+PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGFuaW1hdGUtcHVsc2VcIj5JbnZvY2F0aW9uLi4uPC9kaXY+PC9IdG1sPn0+XHJcbiAgICAgICAgICA8Q2VudGVyIHRvcD5cclxuICAgICAgICAgICAgPERyYWdvbk1vZGVsIHNjYWxlPXsxLjI1fSAvPlxyXG4gICAgICAgICAgPC9DZW50ZXI+XHJcbiAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgPC9DYW52YXM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxudXNlR0xURi5wcmVsb2FkKE1PREVMX1BBVEgpO1xyXG51c2VUZXh0dXJlLnByZWxvYWQoVEVYVFVSRV9QQVRIKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5pZ2h0RnVyeVNjZW5lOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQWRtaW5EYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBBcHBlbCDDoCBsJ0FQSSBhdmVjIGxlIHRva2VuIEpXVCBzdG9ja8OpXHJcbiAgICAgICAgZmV0Y2goJy9hcGkvYWRtaW4vc3RhdHMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiQWNjw6hzIHJlZnVzw6kgcGFyIGxlIEdyYW5kIENvbnNlaWxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oanNvbiA9PiBzZXREYXRhKGpzb24pKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gc2V0RXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWZpcmUgcC0xMCB0ZXh0LWNlbnRlciBmb250LWRyYWdvblwiPntlcnJvcn08L2Rpdj47XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgcC0xMCBmb250LWRyYWdvbiBhbmltYXRlLXB1bHNlIHRleHQtY2VudGVyXCI+QXBwZWwgYXUgR3JhbmQgQ29uc2VpbC4uLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcC02IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLXBhcmNobWVudCBtYi0xMCBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMzAgcGItNCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgIFNhbGxlIGRlIENvbW1hbmRlbWVudFxyXG4gICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgey8qIENhcnRlcyBkZSBTdGF0aXN0aXF1ZXMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNiBtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWdvbGQgcC02IHNoYWRvdy14bCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRleHQteHMgZm9udC1ibGFjayB0cmFja2luZy13aWRlc3RcIj5HdWVycmllcnMgYXUgdmlsbGFnZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1kcmFnb24gbXQtMiB0ZXh0LXdoaXRlXCI+e2RhdGEudXNlcnNDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIGJvcmRlci1sLTQgYm9yZGVyLXZpa2luZy1maXJlIHAtNiBzaGFkb3cteGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXN0XCI+Q2hyb25pcXVlcyBncmF2w6llczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1kcmFnb24gbXQtMiB0ZXh0LXdoaXRlXCI+e2RhdGEuYXJ0aWNsZXNDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogTGlzdGUgZGVzIE1lbWJyZXMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwLzUwIHAtNiByb3VuZGVkIGJvcmRlciBib3JkZXItc3RvbmUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LXhsIG1iLTYgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+RGVybmllcnMgYXJyaXZhbnRzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEucmVjZW50VXNlcnMubWFwKCh1LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC00IGJnLWJsYWNrLzIwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZC80MCB0cmFuc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC12aWtpbmctcGFyY2htZW50XCI+e3UucHNldWRvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzXCI+e3UuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBiZy1zdG9uZS04MDAgcHgtMyBweS0xIHJvdW5kZWQgdGV4dC1zdG9uZS00MDAgdXBwZXJjYXNlIGZvbnQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dS5yb2xlcy5pbmNsdWRlcygnUk9MRV9FRElURVVSJykgPyAnT2ZmaWNpZXInIDogJ0d1ZXJyaWVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5EYXNoYm9hcmQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgQXJ0aWNsZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHsgaGVhZGVyczogeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nIH0gfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQtMnhsIHB5LTIwIGFuaW1hdGUtcHVsc2VcIj5SZWNoZXJjaGUgZGFucyBsZXMgYXJjaGl2ZXMuLi48L2Rpdj47XHJcbiAgICBpZiAoIWFydGljbGUpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWZpcmUgdGV4dC14bCBweS0xMFwiPkFydGljbGUgaW50cm91dmFibGUgZGFucyBsZXMgYXJjaGl2ZXMuPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIG1iLTYgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuKGkDwvc3Bhbj4gUmV0b3VyIGF1IGZvcnVtXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC04IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgey8qIETDqWNvcmF0aW9uIGNvaW4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy0yMCBoLTIwIGJnLXZpa2luZy1nb2xkIG9wYWNpdHktMTAgcm91bmRlZC1ibC1mdWxsXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNCBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtc20gdGV4dC1zdG9uZS01MDAgbWItOCBib3JkZXItYiBib3JkZXItc3RvbmUtNzAwIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy12aWtpbmctcmVkIHB4LTIgcHktMSByb3VuZGVkIHRleHQtd2hpdGUgZm9udC1ib2xkIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJjaGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DcsOpw6kgbGUge25ldyBEYXRlKGFydGljbGUuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBmb250LXNlcmlmIHdoaXRlc3BhY2UtcHJlLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBOb3RlOiBMZXMgYmxvY3MgZXQgY29tbWVudGFpcmVzIG7DqWNlc3NpdGVudCB1bmUgbG9naXF1ZSBwbHVzIHBvdXNzw6llIMOgIGltcGzDqW1lbnRlciBwbHVzIHRhcmQgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgQXJ0aWNsZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlRm9ybSc7XHJcblxyXG5jb25zdCBGb3J1bVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBcclxuICAgIC8vIEdlc3Rpb24gZGUgbGEgbmF2aWdhdGlvbiBpbnRlcm5lXHJcbiAgICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgnbGlzdCcpOyAvLyAnbGlzdCcsICdjcmVhdGUnLCAnZWRpdCdcclxuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gMS4gUsOpY3Vww6lyYXRpb24gZXQgZMOpY29kYWdlIGR1IFRva2VuXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdHJ5IHsgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR3VlcnJpZXIgY29ubmVjdMOpIDpcIiwgZGVjb2RlZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRlY29kZWQpOyBcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkJhZGdlIChUb2tlbikgaW52YWxpZGUgb3UgZXhwaXLDqVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAyLiBDaGFyZ2VtZW50IGRlcyBjaHJvbmlxdWVzXHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoQXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9hcnRpY2xlcycsIHsgXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbicgfSBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRBcnRpY2xlcyhkYXRhWydoeWRyYTptZW1iZXInXSB8fCBkYXRhWydtZW1iZXInXSB8fCBbXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgZGUgbGlhaXNvbiBhdmVjIGxlIEdyYW5kIENvbnNlaWxcIiwgZXJyKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93LmNvbmZpcm0oXCJWb3VsZXotdm91cyB2cmFpbWVudCBlZmZhY2VyIGNlIHLDqWNpdCBkZSBsYSBwaWVycmUgP1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIFN1cHByZXNzaW9uIGxvY2FsZSBpbW3DqWRpYXRlIHBvdXIgbCdpbnRlcmZhY2VcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGVzKGFydGljbGVzLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhSWQgPSAoYS5pZCB8fCBhWydAaWQnXSkudG9TdHJpbmcoKS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhSWQgIT09IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkxlcyBkcmFnb25zIHByb3TDqGdlbnQgY2UgcGFyY2hlbWluIChFcnJldXIgZGUgcGVybWlzc2lvbnMpLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChcIkxlIHNlcnZldXIgZXN0IGluam9pZ25hYmxlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlldygnbGlzdCcpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpOyBcclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIExPR0lRVUUgREVTIFLDlExFUyAtLS1cclxuICAgIGNvbnN0IGhhc1JvbGUgPSAocm9sZSkgPT4gdXNlcj8ucm9sZXM/LmluY2x1ZGVzKHJvbGUpO1xyXG4gICAgXHJcbiAgICAvLyBBdXRvcmlzZSBsYSBjcsOpYXRpb24gcG91ciBBZG1pbiwgQXV0ZXVyIEVUIMOJZGl0ZXVyXHJcbiAgICBjb25zdCBjYW5DcmVhdGUgPSBoYXNSb2xlKCdST0xFX0FETUlOJykgfHwgaGFzUm9sZSgnUk9MRV9BVVRFVVInKSB8fCBoYXNSb2xlKCdST0xFX0VESVRFVVInKTtcclxuXHJcbiAgICBpZiAobG9hZGluZyAmJiB2aWV3ID09PSAnbGlzdCcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTQwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiBib3JkZXItNCBib3JkZXItdmlraW5nLWdvbGQgYm9yZGVyLXQtdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIGFuaW1hdGUtc3BpbiBtYi00XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQteGwgYW5pbWF0ZS1wdWxzZSB1cHBlcmNhc2VcIj5PdXZlcnR1cmUgZGVzIHBhcmNoZW1pbnMuLi48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgcGItMjBcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiAtLS0gSEVBREVSIC0tLSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmQgbWItMTIgYm9yZGVyLWIgYm9yZGVyLXZpa2luZy1nb2xkLzIwIHBiLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLXBhcmNobWVudCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlclwiPkNocm9uaXF1ZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGl0YWxpYyB0ZXh0LXNtIG10LTJcIj5MZSBzYXZvaXIgZHUgdmlsbGFnZSBkZSBCZXJrLCBncmF2w6kgcG91ciBsJ8OpdGVybml0w6kuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHt2aWV3ID09PSAnbGlzdCcgJiYgY2FuQ3JlYXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaWV3KCdjcmVhdGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBweC04IHB5LTMgZm9udC1ibGFjayBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LVswXzBfMjBweF9yZ2JhKDIxMiwxNzUsNTUsMC4yKV0gdXBwZXJjYXNlIHRleHQteHMgdHJhY2tpbmctd2lkZXN0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgR3JhdmVyIHVuIHLDqWNpdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogLS0tIFZVRVMgRk9STVVMQUlSRVMgLS0tICovfVxyXG4gICAgICAgICAgICB7KHZpZXcgPT09ICdjcmVhdGUnIHx8IHZpZXcgPT09ICdlZGl0JykgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbS00IGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0VmlldygnbGlzdCcpOyBzZXRTZWxlY3RlZElkKG51bGwpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi04IHRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbiB1cHBlcmNhc2UgdGV4dC1bMTBweF0gZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDihpAgUmV0b3VyIGF1IG11ciBkZXMgbMOpZ2VuZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVGb3JtIGlkPXtzZWxlY3RlZElkfSBvblN1Y2Nlc3M9e2hhbmRsZVN1Y2Nlc3N9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIC8qIC0tLSBWVUUgTElTVEUgREVTIEFSVElDTEVTIC0tLSAqL1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGVzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMjAgdGV4dC1zdG9uZS02MDAgaXRhbGljXCI+TGUgc2lsZW5jZSByw6hnbmUgc3VyIGxlIG11ci4uLiBBdWN1bmUgY2hyb25pcXVlIG4nYSDDqXTDqSB0cm91dsOpZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbklkID0gKGFydGljbGUuaWQgfHwgYXJ0aWNsZVsnQGlkJ10pLnRvU3RyaW5nKCkuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVsOpcmlmaWNhdGlvbiBkZSBwcm9wcmnDqXTDqSAoTCdhdXRldXIgZHUgcG9zdCBPVSB1biByw7RsZSBkZSBtb2TDqXJhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT3duZXIgPSB1c2VyPy5pZCA9PT0gYXJ0aWNsZS5hdXRob3I/LmlkIHx8IGhhc1JvbGUoJ1JPTEVfQURNSU4nKSB8fCBoYXNSb2xlKCdST0xFX0VESVRFVVInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17Y2xlYW5JZH0gY2xhc3NOYW1lPVwiZ3JvdXAgYmctc3RvbmUtOTAwLzQwIGJvcmRlci1sLTQgYm9yZGVyLXN0b25lLTgwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHAtOCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNPd25lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIG9wYWNpdHktNDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkSWQoY2xlYW5JZCk7IHNldFZpZXcoJ2VkaXQnKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdXBwZXJjYXNlIGZvbnQtYmxhY2sgYmctc3RvbmUtODAwIHRleHQtc3RvbmUtNDAwIHB4LTMgcHktMSBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZCB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoY2xlYW5JZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIGJnLXJlZC05MDAvMTAgdGV4dC1yZWQtNTAwLzcwIHB4LTMgcHktMSBib3JkZXIgYm9yZGVyLXJlZC05MDAvMzAgaG92ZXI6YmctcmVkLTkwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdXBwcmltZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwIGZvbnQtc2VyaWYgaXRhbGljIHRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTggbWF4LXctM3hsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInthcnRpY2xlLnN1bW1hcnl9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHQtNiBib3JkZXItdCBib3JkZXItc3RvbmUtODAwLzUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYgaC1bMXB4XSBiZy12aWtpbmctZ29sZC80MFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXIge2FydGljbGUuYXV0aG9yPy5wc2V1ZG8gfHwgYXJ0aWNsZS5hdXRob3I/LnVzZXJuYW1lIHx8IFwiR3VlcnJpZXIgZGUgbCdvbWJyZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvZm9ydW0vYXJ0aWNsZS8ke2NsZWFuSWR9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZmlyZSBmb250LWJsYWNrIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VsdGVyIGxlIHBhcmNoZW1pbiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+4oaSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3J1bVBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE5pZ2h0RnVyeVNjZW5lIGZyb20gXCIuLi9jb21wb25lbnRzL05pZ2h0RnVyeVwiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTYgYW5pbWF0ZS1mYWRlLWluLXVwXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBtZDp0ZXh0LTh4bCBmb250LWRyYWdvbiB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tdmlraW5nLWdvbGQgdmlhLXllbGxvdy01MDAgdG8tdmlraW5nLWdvbGQgbWItOCBkcm9wLXNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgQmllbnZlbnVlIGRhbnMgbCdBbnRyZVxyXG4gICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI0IGgtMSBiZy12aWtpbmctcmVkIG14LWF1dG8gbWItOCByb3VuZGVkLWZ1bGwgc2hhZG93LVswXzBfMTBweF8jZGMyNjI2XVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC12aWtpbmctbGlnaHQgbWItMTIgbWF4LXctM3hsIG14LWF1dG8gZm9udC1zZXJpZiBpdGFsaWMgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgICAgICBcIsOHYSwgYydlc3QgQmV1cmsuIMOAIGRvdXplIGpvdXJzIGF1IG5vcmQgZHUgRMOpc2VzcG9pciwgZXRcclxuICAgICAgICAgICAgICAgIHF1ZWxxdWVzIGRlZ3LDqXMgYXUgc3VkIGQndW4gRnJvaWQtZGUtY2FuYXJkLiBBbmNyw6kgc29saWRlbWVudFxyXG4gICAgICAgICAgICAgICAgc3VyIGxlIE3DqXJpZGllbiBkZSBsYSBNaXPDqHJlLiBNb24gdmlsbGFnZS4uLiBFbiB1biBtb3QsIGJhbGFpc2UuXHJcbiAgICAgICAgICAgICAgICBFdCBzZXB0IGfDqW7DqXJhdGlvbnMgeSBvbnQgZMOpasOgIHZ1IGxlIGpvdXIsIHBvdXJ0YW50LCB0b3V0ZXMgbGVzXHJcbiAgICAgICAgICAgICAgICBtYWlzb25zIHNvbnQgbmV1dmVzLiBCZXVyayA6IHNhIHDDqmNoZSwgc2EgY2hhc3NlLCBldCBzZXNcclxuICAgICAgICAgICAgICAgIG1lcnZlaWxsZXV4IGNvdWNoZXJzIGRlIHNvbGVpbC4gTGEgc2V1bGUgZmF1c3NlIG5vdGUgYydlc3QgbGVzXHJcbiAgICAgICAgICAgICAgICBiZXN0aW9sZXMuIEFpbGxldXJzLCBsZXMgZ2VucyBvbnQgZGVzIHNvdXJpcyBvdSBkZXMgbW91c3RpcXVlcy5cclxuICAgICAgICAgICAgICAgIE5vdXMgb24gYSBkZXMuLi4gZHJhZ29ucy5cIlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMCByb3VuZGVkLTJ4bCBib3JkZXItNCBib3JkZXItc3RvbmUtNzAwIHNoYWRvdy0yeGwgb3ZlcmZsb3ctaGlkZGVuIG1iLTEyXCI+XHJcbiAgICAgICAgICAgICAgICB7Lyog8J+RhyBDJ2VzdCBpY2kgcXVlIGxhIG1hZ2llIG9ww6hyZS4gTGEgaGF1dGV1ciAoaC1bNjAwcHhdKSBlc3QgQ1JVQ0lBTEUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzYwMHB4XSB3LWZ1bGwgcmVsYXRpdmUgYmctYmxhY2sgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmlnaHRGdXJ5U2NlbmUgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTAgdy1mdWxsIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTQwMCBwb2ludGVyLWV2ZW50cy1ub25lIHotMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpcXVleiBzdXIgbGUgZHJhZ29uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvZm9ydW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHB4LTggcHktNCBiZy12aWtpbmctcmVkIGhvdmVyOmJnLXJlZC05MDAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHRleHQtd2hpdGUgZm9udC1kcmFnb24gdGV4dC14bCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMjIwLDM4LDM4LDAuNSldXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+QWNjw6lkZXIgYXUgRm9ydW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZS8yMCB0by10cmFuc3BhcmVudCAtdHJhbnNsYXRlLXgtZnVsbCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC1mdWxsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvc3RhdGlzdGlxdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTggcHktNCBiZy12aWtpbmctcm9jayBob3ZlcjpiZy1zdG9uZS03MDAgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTUwMCB0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIGZvbnQtZHJhZ29uIHRleHQteGwgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFZvaXIgbGVzIFN0YXRzXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RXJyb3IoJycpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luX2NoZWNrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLCAvLyBFbnZvaSBkZSBsYSBjbMOpIFwiZW1haWxcIiBhdHRlbmR1ZSBwYXIgU3ltZm9ueVxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCBcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2sgJiYgZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvY2thZ2UgZHUgdG9rZW4gSldUXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0aW9uIHZlcnMgbGUgZm9ydW1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9mb3J1bSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcignSWRlbnRpZmlhbnRzIGluY29ycmVjdHMuIExlcyBkcmFnb25zIG5lIHZvdXMgcmVjb25uYWlzc2VudCBwYXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ0VycmV1ciBkZSBjb25uZXhpb24gYXUgc2VydmV1ci4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXZpa2luZy1yb2NrIHAtMTAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgbXQtMTBcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5Db25uZXhpb248L2gyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXJlZCB0ZXh0LXNtIG1iLTQgaXRhbGljIHRleHQtY2VudGVyIGZvbnQtYm9sZFwiPntlcnJvcn08L3A+fVxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBkdSBHdWVycmllclxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4ZW1wbGVAYmVyay5mclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMiB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTW90IGRlIHBhc3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayBweS00IHVwcGVyY2FzZSBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LWxnIGFjdGl2ZTpzY2FsZS05NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZW5kcmUgc29uIGVudm9sXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBSZWdpc3RlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBsYWluUGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHJvbGU6ICdST0xFX1VTRVInXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEVycm9yKCcnKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3JlZ2lzdGVyJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJpZ2UgdmVycyBsJ2FjY3VlaWwgb3UgbGUgbG9naW4gYXByw6hzIHN1Y2PDqHNcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvJyk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIkVycmV1ciBsb3JzIGRlIGwnaW5zY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJJbXBvc3NpYmxlIGRlIGNvbnRhY3RlciBsZSBHcmFuZCBTY3JpYmUgKEVycmV1ciByw6lzZWF1KVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXZpa2luZy1yb2NrLzkwIHAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCBzaGFkb3ctMnhsIGJhY2tkcm9wLWJsdXItc21cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBSZWpvaW5kcmUgbGEgR3VpbGRlXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtOTAwLzQwIGJvcmRlciBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC0yMDAgcC0zIHJvdW5kZWQgbWItNiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBOT00gRCdVVElMSVNBVEVVUiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Ob20gZGUgY29kZSAoUHNldWRvKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBLcm9rbW91XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEVNQUlMICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPkVtYWlsIGRlIGNvbnRhY3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidmlraW5nQGJlcmsuZnJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogUsOUTEUgKETDqWrDoCBmb25jdGlvbm5lbCkgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+UmFuZyBhdSBzZWluIGRlIGxhIEd1aWxkZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHJvbGU6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9VU0VSXCI+QWJvbm7DqSAoTGVjdGV1cik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfQVVURVVSXCI+QXV0ZXVyIChOYXJyYXRldXIpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0VESVRFVVJcIj7DiWRpdGV1ciAoR2FyZGllbik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfREVTSUdORVJcIj5EZXNpZ25ldXIgKEFydGlzYW4pPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0ZPVVJOSVNTRVVSXCI+Rm91cm5pc3NldXIgZGUgZG9ubsOpZXMgKFNjcmliZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNT1QgREUgUEFTU0UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+TW90IGRlIHBhc3NlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyByb3VuZGVkIHRleHQtdmlraW5nLXBhcmNobWVudCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGxhaW5QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHBsYWluUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC12aWtpbmctZGFyayBmb250LWV4dHJhYm9sZCBweS00IHJvdW5kZWQgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBzaGFkb3ctbGcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG10LTRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEdyYXZlciBtb24gbm9tXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCwgQXJjRWxlbWVudCwgUG9pbnRFbGVtZW50LCBMaW5lRWxlbWVudCxcclxufSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IEJhciwgRG91Z2hudXQsIExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCwgQXJjRWxlbWVudCwgUG9pbnRFbGVtZW50LCBMaW5lRWxlbWVudCk7XHJcblxyXG5jb25zdCBTdGF0c1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2JveE9mZmljZURhdGEsIHNldEJveE9mZmljZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BvcHVsYXRpb25EYXRhLCBzZXRQb3B1bGF0aW9uRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGltZWxpbmVEYXRhLCBzZXRUaW1lbGluZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGxvYWRDU1YgPSAodXJsLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihyID0+IHIub2sgPyByLnRleHQoKSA6IG51bGwpXHJcbiAgICAgIC50aGVuKHR4dCA9PiB7XHJcbiAgICAgICAgaWYoIXR4dCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gdHh0LnRyaW0oKS5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbGluZXNbMF0uc3BsaXQoJzsnKS5tYXAoaCA9PiBoLnRyaW0oKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGxpbmVzLnNsaWNlKDEpLm1hcChsID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFscyA9IGwuc3BsaXQoJzsnKS5tYXAodiA9PiB2LnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiAoey4uLmFjYywgW2hdOiB2YWxzW2ldfSksIHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGgpIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvYm94X29mZmljZS5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBzZXRCb3hPZmZpY2VEYXRhKHtcclxuICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnRmlsbSddKSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGxhYmVsOiAnTSQnLFxyXG4gICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ0JveCBPZmZpY2UgKE1pbGxpb25zICQpJ10pKSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjN2YxZDFkJywgJyNkYzI2MjYnLCAnI2Q5NzcwNiddLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjkyNTI0JyxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICAgICAgfV1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9iZXJrX3BvcHVsYXRpb24uY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgc2V0UG9wdWxhdGlvbkRhdGEoe1xyXG4gICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydHcm91cGUnXSksXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnUG9wdWxhdGlvbiddKSksXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsnI2Q5NzcwNicsICcjN2YxZDFkJywgJyM1NzUzNGUnLCAnI2E4YTI5ZSddLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMWMxOTE3JyxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICAgICAgfV1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9kcmFnb25zX3RpbWVsaW5lLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZWxpbmVEYXRhKHtcclxuICAgICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydBbm7DqWUnXSksXHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdFc3DDqGNlcycsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydFc3DDqGNlcyBSZWNlbnPDqWVzJ10pKSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZDk3NzA2JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyMTcsIDExOSwgNiwgMC4yKScsXHJcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHRlbnNpb246IDAuMyxcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgIHBsdWdpbnM6IHsgbGVnZW5kOiB7IGxhYmVsczogeyBjb2xvcjogJyNlN2U1ZTQnLCBmb250OiB7IGZhbWlseTogJ3NlcmlmJyB9IH0gfSB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHk6IHsgdGlja3M6IHsgY29sb3I6ICcjYThhMjllJyB9LCBncmlkOiB7IGNvbG9yOiAnIzQ0NDAzYycgfSB9LFxyXG4gICAgICB4OiB7IHRpY2tzOiB7IGNvbG9yOiAnI2E4YTI5ZScgfSwgZ3JpZDogeyBjb2xvcjogJyM0NDQwM2MnIH0gfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIGFuaW1hdGUtZmFkZS1pblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNCBkcm9wLXNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgTCdPYnNlcnZhdG9pcmUgZGUgQmVya1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCB0ZXh0LWxnIGl0YWxpYyBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMzAgaW5saW5lLWJsb2NrIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIFJlY2Vuc2VtZW50IG9mZmljaWVsIGRlIGwnYXJjaGlwZWxcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5UcsOpc29yIGRlIEd1ZXJyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Ym94T2ZmaWNlRGF0YSA/IDxCYXIgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17Ym94T2ZmaWNlRGF0YX0gLz4gOiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPkNoYXJnZW1lbnQuLi48L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5DbGFucyAmIFRyaWJ1czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3B1bGF0aW9uRGF0YSA/IDxEb3VnaG51dCBvcHRpb25zPXt7Li4ub3B0aW9ucywgc2NhbGVzOnt9fX0gZGF0YT17cG9wdWxhdGlvbkRhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5DaGFyZ2VtZW50Li4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIG1kOmNvbC1zcGFuLTIgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5DaHJvbm9sb2dpZSBkZXMgRMOpY291dmVydGVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04MCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lbGluZURhdGEgPyA8TGluZSBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXt0aW1lbGluZURhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5DaGFyZ2VtZW50Li4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0c1BhZ2U7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhvbWVQYWdlIiwiRm9ydW1QYWdlIiwiQXJ0aWNsZVBhZ2UiLCJTdGF0c1BhZ2UiLCJOYXZiYXIiLCJSZWdpc3RlclBhZ2UiLCJMb2dpblBhZ2UiLCJBZG1pbkRhc2hib2FyZCIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwicGF0aCIsImVsZW1lbnQiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiZXJyb3IiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJuZXh0IiwicHVzaCIsImlzQXJyYXkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFydGljbGVGb3JtIiwiX3JlZiIsImlkIiwib25TdWNjZXNzIiwiaXNFZGl0TW9kZSIsIkJvb2xlYW4iLCJfdXNlU3RhdGUiLCJ0aXRsZSIsInN1bW1hcnkiLCJjb250ZW50IiwiX3VzZVN0YXRlMiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJmZXRjaCIsImNvbmNhdCIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwiZGF0YSIsImhhbmRsZVN1Ym1pdCIsIl9yZWYyIiwiX2NhbGxlZSIsIm1ldGhvZCIsInVybCIsInJlc3BvbnNlIiwiZXJyb3JEYXRhIiwiX3QiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJhbGVydCIsIl94Iiwib25TdWJtaXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJqd3REZWNvZGUiLCJfdXNlciIsIl91c2VyMiIsIl91c2VyMyIsIm5hdmlnYXRlIiwidG9rZW4iLCJ1c2VyIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImNhblNlZURhc2hib2FyZCIsInJvbGVzIiwiaW5jbHVkZXMiLCJ0byIsIkZyYWdtZW50IiwicHNldWRvIiwib25DbGljayIsInVzZVJlZiIsIlN1c3BlbnNlIiwiQ2FudmFzIiwidXNlRnJhbWUiLCJ1c2VUaHJlZSIsInVzZUdMVEYiLCJ1c2VBbmltYXRpb25zIiwiQ2VudGVyIiwiSHRtbCIsInVzZVRleHR1cmUiLCJTdGFycyIsIk1PREVMX1BBVEgiLCJURVhUVVJFX1BBVEgiLCJBTklNQVRJT05fTkFNRSIsIkRyYWdvbk1vZGVsIiwicHJvcHMiLCJfdXNlR0xURiIsInNjZW5lIiwiYW5pbWF0aW9ucyIsInRleHR1cmUiLCJfdXNlVGhyZWUiLCJ2aWV3cG9ydCIsImVjaGVsbGVSZXNwb25zaXZlIiwid2lkdGgiLCJmbGlwWSIsImNvbG9yU3BhY2UiLCJncm91cCIsIl91c2VBbmltYXRpb25zIiwiYWN0aW9ucyIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInRyYXZlcnNlIiwiY2hpbGQiLCJpc01lc2giLCJtYXRlcmlhbCIsIm1hcCIsIm5lZWRzVXBkYXRlIiwiYWN0aW9uIiwicmVzZXQiLCJmYWRlSW4iLCJwbGF5IiwidGltZVNjYWxlIiwidG9nZ2xlQW5pbWF0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwic3R5bGUiLCJjdXJzb3IiLCJmYWRlT3V0IiwiY3VycmVudCIsInJvdGF0aW9uIiwiX2V4dGVuZHMiLCJyZWYiLCJvYmplY3QiLCJvblBvaW50ZXJPdmVyIiwib25Qb2ludGVyT3V0Iiwic2NhbGUiLCJwb3NpdGlvbiIsIk5pZ2h0RnVyeVNjZW5lIiwic2hhZG93cyIsImNhbWVyYSIsImZvdiIsImF0dGFjaCIsImFyZ3MiLCJyYWRpdXMiLCJkZXB0aCIsImNvdW50IiwiZmFjdG9yIiwic2F0dXJhdGlvbiIsImZhZGUiLCJzcGVlZCIsImludGVuc2l0eSIsImNvbG9yIiwiZmFsbGJhY2siLCJjZW50ZXIiLCJ0b3AiLCJwcmVsb2FkIiwic2V0RGF0YSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2V0RXJyb3IiLCJFcnJvciIsImVyciIsIm1lc3NhZ2UiLCJ1c2Vyc0NvdW50IiwiYXJ0aWNsZXNDb3VudCIsInJlY2VudFVzZXJzIiwia2V5IiwiZW1haWwiLCJ1c2VQYXJhbXMiLCJfdXNlUGFyYW1zIiwiYXJ0aWNsZSIsInNldEFydGljbGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJzZXRVc2VyIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJ2aWV3Iiwic2V0VmlldyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJkZWNvZGVkIiwiZmV0Y2hBcnRpY2xlcyIsImhhbmRsZURlbGV0ZSIsIl9jYWxsZWUyIiwiX3QyIiwiX2NvbnRleHQyIiwid2luZG93IiwiY29uZmlybSIsImZpbHRlciIsImFJZCIsInNwbGl0IiwicG9wIiwiaGFuZGxlU3VjY2VzcyIsImhhc1JvbGUiLCJyb2xlIiwiX3VzZXIkcm9sZXMiLCJjYW5DcmVhdGUiLCJfYXJ0aWNsZSRhdXRob3IiLCJfYXJ0aWNsZSRhdXRob3IyIiwiX2FydGljbGUkYXV0aG9yMyIsImNsZWFuSWQiLCJpc093bmVyIiwiYXV0aG9yIiwidXNlcm5hbWUiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZXRJdGVtIiwibG9jYXRpb24iLCJocmVmIiwicGxhY2Vob2xkZXIiLCJwbGFpblBhc3N3b3JkIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIkFyY0VsZW1lbnQiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkJhciIsIkRvdWdobnV0IiwiTGluZSIsInJlZ2lzdGVyIiwiYm94T2ZmaWNlRGF0YSIsInNldEJveE9mZmljZURhdGEiLCJwb3B1bGF0aW9uRGF0YSIsInNldFBvcHVsYXRpb25EYXRhIiwidGltZWxpbmVEYXRhIiwic2V0VGltZWxpbmVEYXRhIiwibG9hZENTViIsImNhbGxiYWNrIiwidGV4dCIsInR4dCIsImxpbmVzIiwidHJpbSIsImgiLCJ2YWxzIiwicmVkdWNlIiwiYWNjIiwiX2RlZmluZVByb3BlcnR5IiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsInBhcnNlRmxvYXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJ0ZW5zaW9uIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicGx1Z2lucyIsImxlZ2VuZCIsImZvbnQiLCJmYW1pbHkiLCJzY2FsZXMiLCJ0aWNrcyIsImdyaWQiLCJ4Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=