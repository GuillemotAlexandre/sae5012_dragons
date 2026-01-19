"use strict";
(self["webpackChunksae5012_dragons"] = self["webpackChunksae5012_dragons"] || []).push([["app"],{

/***/ "./assets/app.js"
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/HomePage */ "./assets/pages/HomePage.jsx");
/* harmony import */ var _pages_ForumPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/ForumPage */ "./assets/pages/ForumPage.jsx");
/* harmony import */ var _pages_ArticlePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/ArticlePage */ "./assets/pages/ArticlePage.jsx");
/* harmony import */ var _pages_StatsPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/StatsPage */ "./assets/pages/StatsPage.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Navbar */ "./assets/components/Navbar.jsx");
/* harmony import */ var _pages_RegisterPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/RegisterPage */ "./assets/pages/RegisterPage.jsx");
/* harmony import */ var _pages_LoginPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/LoginPage */ "./assets/pages/LoginPage.jsx");
/* harmony import */ var _components_ArticleShow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ArticleShow */ "./assets/components/ArticleShow.jsx");
/* harmony import */ var _pages_AdminDashboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/AdminDashboard */ "./assets/pages/AdminDashboard.jsx");






// Import des styles


// Import des pages









// Import de la page Dashboard Admin

console.log("🐲 Démarrage de l'application DragonCMS...");
var App = function App() {
  // --- SYSTÈME DE CHARGEMENT DU DESIGN (VERSION SILENCIEUSE) ---
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    fetch('/design_config.json').then(function (response) {
      // Si le fichier n'existe pas, on renvoie null sans faire d'erreur
      if (!response.ok) return null;
      return response.json();
    }).then(function (data) {
      // On n'applique la couleur que si le fichier a été trouvé et contient la donnée
      if (data && data.primaryColor) {
        document.documentElement.style.setProperty('--viking-orange', data.primaryColor);
        console.log("🎨 Design chargé depuis la forge :", data.primaryColor);
      }
    })["catch"](function () {
      // En cas d'erreur réseau, on ne log plus d'erreur rouge
      // Le village utilise simplement les couleurs du CSS par défaut
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "min-h-screen flex flex-col font-sans text-viking-parchment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "w-full h-32 md:h-48 overflow-hidden border-b-4 border-viking-gold relative shadow-2xl bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
    src: "/images/banniere.png",
    alt: "Banni\xE8re Dragons",
    className: "w-full h-full object-cover object-center opacity-80 hover:opacity-100 transition duration-700"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-viking-dark to-transparent opacity-60"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "container mx-auto py-10 px-4 flex-grow relative z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_pages_HomePage__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/forum",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_pages_ForumPage__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/article/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ArticleShow__WEBPACK_IMPORTED_MODULE_14__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/statistique",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_pages_StatsPage__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_pages_RegisterPage__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_pages_LoginPage__WEBPACK_IMPORTED_MODULE_13__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/admin",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_pages_AdminDashboard__WEBPACK_IMPORTED_MODULE_15__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("footer", {
    className: "bg-viking-rock border-t border-viking-gold/30 py-6 mt-10 text-center text-viking-light font-dragon text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "\xA9 L'Acad\xE9mie de Berk - Archives Draconiques"))));
};
var rootElement = document.getElementById('react-root');
if (rootElement) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(rootElement);
  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(App, null));
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
    className: "text-red-500 p-10 text-center font-dragon"
  }, error);
  if (!data) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "text-yellow-500 p-10 font-dragon animate-pulse text-center"
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
      className: "min-h-[500px]"
    }, activeTab === 'stats' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "bg-stone-900 border-l-4 border-yellow-600 p-8 shadow-2xl rounded-r-lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("h2", {
      className: "text-stone-500 uppercase text-xs font-black tracking-widest"
    }, "Guerriers de Berk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
      className: "text-5xl font-dragon mt-2 text-white"
    }, data.usersCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "bg-stone-900 border-l-4 border-orange-700 p-8 shadow-2xl rounded-r-lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("h2", {
      className: "text-stone-500 uppercase text-xs font-black tracking-widest"
    }, "Chroniques \xE9crites"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
      className: "text-5xl font-dragon mt-2 text-white"
    }, data.articlesCount))), activeTab === 'users' && isFullAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "space-y-4 animate-in slide-in-from-bottom-4 duration-500"
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
    }, "Aucune chronique \xE0 g\xE9rer."))), activeTab === 'data' && isProvider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "animate-in zoom-in-95 duration-500"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_components_DataProviderSpace__WEBPACK_IMPORTED_MODULE_44__["default"], {
      datasets: data.datasets
    })), activeTab === 'design' && isDesigner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      className: "animate-in fade-in duration-700"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(DesignerSpace, null))))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtJQUFlLENBQUUsQ0FBQyxnQkFBR25uQiwyREFBQTtNQUFHOEIsU0FBUyxFQUFDO0lBQXlDLEdBQUMseUJBQTBCLENBQ3pLLENBQ0osQ0FBQyxlQUVOOUIsMkRBQUE7TUFBSzhCLFNBQVMsRUFBQztJQUFrRyxnQkFDN0c5QiwyREFBQTtNQUFLOEIsU0FBUyxFQUFDO0lBQWlELENBQU0sQ0FBQyxlQUN2RTlCLDJEQUFBO01BQUk4QixTQUFTLEVBQUM7SUFBeUQsR0FBQyxnQ0FBK0IsQ0FBQyxlQUV4RzlCLDJEQUFBO01BQUs4QixTQUFTLEVBQUM7SUFBdUIsR0FDakN1bEIsWUFBWSxnQkFBR3JuQiwyREFBQSxDQUFDZ1Qsa0RBQUk7TUFBQ21WLE9BQU8sRUFBRUEsT0FBUTtNQUFDNW1CLElBQUksRUFBRThsQjtJQUFhLENBQUUsQ0FBQyxnQkFBR3JuQiwyREFBQTtNQUFHOEIsU0FBUyxFQUFDO0lBQXlDLEdBQUMsdUJBQXdCLENBQy9JLENBQ0osQ0FDSixDQUNKO0VBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVyQixTQUFTLEU7Ozs7Ozs7Ozs7O0FDL0h4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm0uanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0FydGljbGVTaG93LmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50U2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvQ3N2Q2hhcnQuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0RhdGFQcm92aWRlclNwYWNlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL05pZ2h0RnVyeS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvU3RhclJhdGluZy5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvVmlraW5nUGxheWVyLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvQWRtaW5EYXNoYm9hcmQuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9BcnRpY2xlUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0ZvcnVtUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0hvbWVQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvTG9naW5QYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvUmVnaXN0ZXJQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvU3RhdHNQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vLyBJbXBvcnQgZGVzIHN0eWxlc1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5cclxuLy8gSW1wb3J0IGRlcyBwYWdlc1xyXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9wYWdlcy9Ib21lUGFnZSc7XHJcbmltcG9ydCBGb3J1bVBhZ2UgZnJvbSAnLi9wYWdlcy9Gb3J1bVBhZ2UnO1xyXG5pbXBvcnQgQXJ0aWNsZVBhZ2UgZnJvbSAnLi9wYWdlcy9BcnRpY2xlUGFnZSc7XHJcbmltcG9ydCBTdGF0c1BhZ2UgZnJvbSAnLi9wYWdlcy9TdGF0c1BhZ2UnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgUmVnaXN0ZXJQYWdlIGZyb20gJy4vcGFnZXMvUmVnaXN0ZXJQYWdlJztcclxuaW1wb3J0IExvZ2luUGFnZSBmcm9tICcuL3BhZ2VzL0xvZ2luUGFnZSc7XHJcbmltcG9ydCBBcnRpY2xlU2hvdyBmcm9tICcuL2NvbXBvbmVudHMvQXJ0aWNsZVNob3cnO1xyXG5cclxuLy8gSW1wb3J0IGRlIGxhIHBhZ2UgRGFzaGJvYXJkIEFkbWluXHJcbmltcG9ydCBBZG1pbkRhc2hib2FyZCBmcm9tICcuL3BhZ2VzL0FkbWluRGFzaGJvYXJkJztcclxuXHJcbmNvbnNvbGUubG9nKFwi8J+QsiBEw6ltYXJyYWdlIGRlIGwnYXBwbGljYXRpb24gRHJhZ29uQ01TLi4uXCIpO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICAvLyAtLS0gU1lTVMOITUUgREUgQ0hBUkdFTUVOVCBEVSBERVNJR04gKFZFUlNJT04gU0lMRU5DSUVVU0UpIC0tLVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCgnL2Rlc2lnbl9jb25maWcuanNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFNpIGxlIGZpY2hpZXIgbidleGlzdGUgcGFzLCBvbiByZW52b2llIG51bGwgc2FucyBmYWlyZSBkJ2VycmV1clxyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIE9uIG4nYXBwbGlxdWUgbGEgY291bGV1ciBxdWUgc2kgbGUgZmljaGllciBhIMOpdMOpIHRyb3V2w6kgZXQgY29udGllbnQgbGEgZG9ubsOpZVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5wcmltYXJ5Q29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmlraW5nLW9yYW5nZScsIGRhdGEucHJpbWFyeUNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjqggRGVzaWduIGNoYXJnw6kgZGVwdWlzIGxhIGZvcmdlIDpcIiwgZGF0YS5wcmltYXJ5Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRW4gY2FzIGQnZXJyZXVyIHLDqXNlYXUsIG9uIG5lIGxvZyBwbHVzIGQnZXJyZXVyIHJvdWdlXHJcbiAgICAgICAgICAgICAgICAvLyBMZSB2aWxsYWdlIHV0aWxpc2Ugc2ltcGxlbWVudCBsZXMgY291bGV1cnMgZHUgQ1NTIHBhciBkw6lmYXV0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pOyBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGZvbnQtc2FucyB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBCQU5OScOIUkUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIG1kOmgtNDggb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1iLTQgYm9yZGVyLXZpa2luZy1nb2xkIHJlbGF0aXZlIHNoYWRvdy0yeGwgYmctYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Jhbm5pZXJlLnBuZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJCYW5uacOocmUgRHJhZ29uc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi03MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS12aWtpbmctZGFyayB0by10cmFuc3BhcmVudCBvcGFjaXR5LTYwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS0xMCBweC00IGZsZXgtZ3JvdyByZWxhdGl2ZSB6LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWVQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9mb3J1bVwiIGVsZW1lbnQ9ezxGb3J1bVBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FydGljbGUvOmlkXCIgZWxlbWVudD17PEFydGljbGVTaG93IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zdGF0aXN0aXF1ZVwiIGVsZW1lbnQ9ezxTdGF0c1BhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlZ2lzdGVyXCIgZWxlbWVudD17PFJlZ2lzdGVyUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9naW5QYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZG1pblwiIGVsZW1lbnQ9ezxBZG1pbkRhc2hib2FyZCAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgYm9yZGVyLXQgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHB5LTYgbXQtMTAgdGV4dC1jZW50ZXIgdGV4dC12aWtpbmctbGlnaHQgZm9udC1kcmFnb24gdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPsKpIEwnQWNhZMOpbWllIGRlIEJlcmsgLSBBcmNoaXZlcyBEcmFjb25pcXVlczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3Qtcm9vdCcpO1xyXG5pZiAocm9vdEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KHJvb3RFbGVtZW50KTtcclxuICAgIHJvb3QucmVuZGVyKDxBcHAgLz4pO1xyXG4gICAgY29uc29sZS5sb2coXCLinIUgUmVhY3QgaW5qZWN0w6kgYXZlYyBzdWNjw6hzICFcIik7XHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIEltcG9zc2libGUgZGUgdHJvdXZlciBsJ8OpbMOpbWVudCAjcmVhY3Qtcm9vdFwiKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyDwn5GHIDEuIElNUE9SVCBEVSBHUkFQSElRVUUgKEluZGlzcGVuc2FibGUpXHJcbmltcG9ydCBDc3ZDaGFydCBmcm9tICcuL0NzdkNoYXJ0JzsgXHJcblxyXG5jb25zdCBBcnRpY2xlRm9ybSA9ICh7IGlkID0gbnVsbCwgb25TdWNjZXNzIH0pID0+IHtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Jsb2NzLCBzZXRCbG9jc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpc2F0aW9uIGF2ZWMgZGVzIHRhYmxlYXV4IHZpZGVzIHBvdXIgw6l2aXRlciBsZXMgY3Jhc2hzXHJcbiAgICBjb25zdCBbbXVzaWNMaWJyYXJ5LCBzZXRNdXNpY0xpYnJhcnldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2RhdGFzZXRMaWJyYXJ5LCBzZXREYXRhc2V0TGlicmFyeV0gPSB1c2VTdGF0ZShbXSk7IFxyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyAtLS0gMS4gQ0hBUkdFTUVOVCBERVMgRE9OTsOJRVMgREUgTCdBUlRJQ0xFIChTSSBNT0RJRklDQVRJT04pIC0tLVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZShkYXRhLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdW1tYXJ5KGRhdGEuc3VtbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT24gZm9ybWF0ZSBsZXMgYmxvY3MgcmXDp3VzIGRlIGwnQVBJIHBvdXIgcXUnaWxzIG1hcmNoZW50IGRhbnMgbGUgZm9ybXVsYWlyZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZEJsb2NzID0gKGRhdGEuYmxvY3MgfHwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChiID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aXpUeXBlID0gJ2Jhcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGIuY29udGVudCB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2kgYydlc3QgdW4gZ3JhcGhpcXVlLCBvbiBzw6lwYXJlIGxlIHR5cGUgZXQgbCdVUkwgKGZvcm1hdCBcInR5cGU6OnVybFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIudHlwZSA9PT0gJ3N0YXRzJyB8fCBiLnR5cGUgPT09ICd2aXonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBjb250ZW50LnNwbGl0KCc6OicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpelR5cGUgPSBwYXJ0c1swXSB8fCAnYmFyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gcGFydHNbMV0gfHwgJyc7IC8vIEwnVVJMIGR1IENTViBkZXZpZW50IGxlIGNvbnRlbnQvbWVkaWFVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBiLmlkLCAvLyBPbiBnYXJkZSBsJ0lEIHBvdXIgc2F2b2lyIHF1ZSBjZSBibG9jIGV4aXN0ZSBkw6lqw6BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBiLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCwgLy8gVGV4dGUgb3UgVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFVcmw6IGNvbnRlbnQsIC8vIFBvdXIgcHLDqXZpc3VhbGlzZXIgaW1hZ2VzL3NvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXpUeXBlOiB2aXpUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEJsb2NzKGZvcm1hdHRlZEJsb2NzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGNoYXJnZW1lbnQgYXJ0aWNsZVwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgLy8gLS0tIENIQVJHRU1FTlQgREVTIExJQlJBSVJJRVMgKE11c2lxdWUgLyBEYXRhc2V0cykgLS0tXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIDEuIE11c2lxdWVzXHJcbiAgICAgICAgZmV0Y2goJy9hcGkvbXVzaWMvbGlzdCcpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMub2sgPyByZXMuanNvbigpIDogW10pXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHNldE11c2ljTGlicmFyeShkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiRXJyZXVyIG11c2lxdWVcIiwgZXJyKSk7XHJcblxyXG4gICAgICAgIC8vIDIuIERhdGFzZXRzXHJcbiAgICAgICAgZmV0Y2goJy9hcGkvbGlzdC1kYXRhc2V0cycpIFxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBBUEkgRGF0YXNldFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YXNldExpYnJhcnkoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KFtdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW1wb3NzaWJsZSBkZSBjaGFyZ2VyIGxlcyBkYXRhc2V0c1wiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YXNldExpYnJhcnkoW10pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAtLS0gR0VTVElPTiBERVMgQkxPQ1MgLS0tXHJcbiAgICBjb25zdCBhZGRCbG9jID0gKHR5cGUpID0+IHtcclxuICAgICAgICBzZXRCbG9jcyhbLi4uYmxvY3MsIHsgXHJcbiAgICAgICAgICAgIHR5cGUsIFxyXG4gICAgICAgICAgICBjb250ZW50OiAnJywgXHJcbiAgICAgICAgICAgIG1lZGlhVXJsOiAnJywgXHJcbiAgICAgICAgICAgIHZpelR5cGU6ICdiYXInLCBcclxuICAgICAgICAgICAgZmlsZTogbnVsbCwgICBcclxuICAgICAgICAgICAgLy8gUGFzIGQnSUQgaWNpLCBjJ2VzdCB1biBub3V2ZWF1IGJsb2NcclxuICAgICAgICB9XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUJsb2MgPSAoaW5kZXhUb1JlbW92ZSkgPT4ge1xyXG4gICAgICAgIHNldEJsb2NzKGJsb2NzLmZpbHRlcigoXywgaW5kZXgpID0+IGluZGV4ICE9PSBpbmRleFRvUmVtb3ZlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUJsb2MgPSAoaW5kZXgsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0Jsb2NzID0gWy4uLmJsb2NzXTtcclxuICAgICAgICBuZXdCbG9jc1tpbmRleF1bZmllbGRdID0gdmFsdWU7XHJcbiAgICAgICAgc2V0QmxvY3MobmV3QmxvY3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGluZGV4LCBlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUJsb2MoaW5kZXgsICdmaWxlJywgZmlsZSk7XHJcbiAgICAgICAgICAgIGlmIChmaWxlLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJykpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUJsb2MoaW5kZXgsICdtZWRpYVVybCcsIFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyAtLS0gU09VTUlTU0lPTiAoSFlCUklERSA6IFBPU1Qgb3UgUEFUQ0gpIC0tLVxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIPCfk50gTU9ERSDDiURJVElPTiAoUEFUQ0ggSlNPTilcclxuICAgICAgICAgICAgICAgIC8vIEF0dGVudGlvbiA6IEwndXBsb2FkIGRlIG5vdXZlYXV4IGZpY2hpZXJzIGltYWdlIG4nZXN0IHBhcyBnw6lyw6kgaWNpIHBvdXIgc2ltcGxpZmllci5cclxuICAgICAgICAgICAgICAgIC8vIE9uIG1ldCDDoCBqb3VyIHRleHRlcywgdGl0cmVzLCBjaG9peCBtdXNpcXVlL3N0YXRzLlxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFydGljbGVEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnksXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY3M6IGJsb2NzLm1hcCgoYmxvYywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmFsQ29udGVudCA9IGJsb2MuY29udGVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uIHJlY29uc3RydWl0IGxlIGZvcm1hdCBzcMOpY2lhbCBwb3VyIGxlcyBzdGF0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnc3RhdHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaSBsJ3V0aWxpc2F0ZXVyIGEgY2hhbmfDqSBsJ1VSTCB2aWEgbGUgc2VsZWN0LCBjJ2VzdCBkYW5zIGJsb2MubWVkaWFVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQ29udGVudCA9IGAke2Jsb2Mudml6VHlwZX06OiR7YmxvYy5tZWRpYVVybH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJsb2MudHlwZSA9PT0gJ211c2ljJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxDb250ZW50ID0gYmxvYy5tZWRpYVVybDsgLy8gTGUgbm9tIGR1IGZpY2hpZXIgY2hvaXNpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvYy50eXBlID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaSBwYXMgZGUgbm91dmVhdSBmaWNoaWVyLCBvbiBnYXJkZSBsJ2FuY2llbm5lIFVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxDb250ZW50ID0gYmxvYy5tZWRpYVVybDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0cnVjdHVyZSBkJ3VuIGJsb2MgcG91ciBsJ0FQSVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9jUGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGJsb2MudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBmaW5hbENvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpIGxlIGJsb2MgYXZhaXQgZMOpasOgIHVuIElELCBvbiBsJ2Vudm9pZSBwb3VyIGxlIG1ldHRyZSDDoCBqb3VyIChhdSBsaWV1IGRlIGxlIHJlY3LDqWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY1BheWxvYWRbJ0BpZCddID0gYC9hcGkvYmxvY3MvJHtibG9jLmlkfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBibG9jUGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YCwgeyBcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9tZXJnZS1wYXRjaCtqc29uJyAvLyBTdGFuZGFyZCBBUEkgUGxhdGZvcm1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFydGljbGVEYXRhKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJMZSByw6ljaXQgYSDDqXTDqSByw6nDqWNyaXQgYXZlYyBzdWNjw6hzICFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIG1vZGlmaWNhdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDinKggTU9ERSBDUsOJQVRJT04gKFBPU1QgRm9ybURhdGEpXHJcbiAgICAgICAgICAgICAgICAvLyBDJ2VzdCB0b24gY29kZSBkJ29yaWdpbmUgcXVpIGfDqHJlIGJpZW4gbCd1cGxvYWQgaW5pdGlhbFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGl0bGUnLCB0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3N1bW1hcnknLCBzdW1tYXJ5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBibG9jcy5mb3JFYWNoKChibG9jLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW3R5cGVdYCwgYmxvYy50eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVtwb3NpdGlvbl1gLCBpbmRleCArIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoWydoMicsICdwYXJhZ3JhcGgnXS5pbmNsdWRlcyhibG9jLnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW2NvbnRlbnRdYCwgYmxvYy5jb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2MudHlwZSA9PT0gJ2ltYWdlJyAmJiBibG9jLmZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1baW1hZ2VGaWxlXWAsIGJsb2MuZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnc3RhdHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW3ZpelR5cGVdYCwgYmxvYy52aXpUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bY3N2UGF0aF1gLCBibG9jLm1lZGlhVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9jLnR5cGUgPT09ICdtdXNpYycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bbXVzaWNGaWxlTmFtZV1gLCBibG9jLm1lZGlhVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2N1c3RvbS9hcnRpY2xlcy9jcmVhdGUnLCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlZvdHJlIHLDqWNpdCBhIMOpdMOpIGdyYXbDqSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoKTsgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycmV1ciA6IFwiICsgKGVycm9yRGF0YS5tZXNzYWdlIHx8IFwiUHJvYmzDqG1lIHNlcnZldXJcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlLlwiKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gTU9ESUYgOiBwLTQgc3VyIG1vYmlsZSwgbWF4LXctNHhsIHBvdXIgbGltaXRlciBzdXIgZGVza3RvcFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBwLTQgbWQ6cC04IGJvcmRlciBib3JkZXItc3RvbmUtODAwIHNoYWRvdy0yeGwgbWF4LXctNHhsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogVGFpbGxlIHRpdHJlICovfVxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi02IG1kOm1iLTggdGV4dC1jZW50ZXIgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICB7aWQgPyAnTW9kaWZpZXIgbGEgQ2hyb25pcXVlJyA6ICdOb3V2ZWxsZSBDaHJvbmlxdWUnfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBwLTMgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCB0ZXh0LXdoaXRlIHAtMyBtZDpwLTQgdGV4dC14bCBtZDp0ZXh0LTJ4bCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkXCIgcGxhY2Vob2xkZXI9XCJUaXRyZS4uLlwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17c3VtbWFyeX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRTdW1tYXJ5KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHRleHQtc3RvbmUtMzAwIHAtMyBtZDpwLTQgaC0yNCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkXCIgcGxhY2Vob2xkZXI9XCJSw6lzdW3DqS4uLlwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAge2Jsb2NzLm1hcCgoYmxvYywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHAtNCBzdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jsb2MuaWQgfHwgaW5kZXh9IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMC81MCBwLTQgbWQ6cC02IGJvcmRlci1sLTQgYm9yZGVyLXZpa2luZy1nb2xkIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUJsb2MoaW5kZXgpfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIHRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtcmVkLTUwMCB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhbnNpdGlvbiBwLTJcIj5TdXBwcmltZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGQgbWItNCB0cmFja2luZy13aWRlc3RcIj5CbG9jIHtpbmRleCArIDF9IDoge2Jsb2MudHlwZX08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogSDIgJiBQYXJhZ3JhcGggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdoMicgJiYgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Jsb2MuY29udGVudH0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnY29udGVudCcsIGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiIHBsYWNlaG9sZGVyPVwiU291cy10aXRyZS4uLlwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAncGFyYWdyYXBoJyAmJiA8dGV4dGFyZWEgdmFsdWU9e2Jsb2MuY29udGVudH0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnY29udGVudCcsIGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXN0b25lLTMwMCBoLTMyXCIgcGxhY2Vob2xkZXI9XCJUZXh0ZS4uLlwiIC8+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEltYWdlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAnaW1hZ2UnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpZCAmJiA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlQ2hhbmdlKGluZGV4LCBlKX0gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDAgdGV4dC1zbSB3LWZ1bGxcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5tZWRpYVVybCAmJiA8aW1nIHNyYz17YmxvYy5tZWRpYVVybH0gYWx0PVwiUHJldmlld1wiIGNsYXNzTmFtZT1cIm10LTQgbWF4LWgtNDAgYm9yZGVyIGJvcmRlci1zdG9uZS02MDBcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFN0YXRzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAnc3RhdHMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogZ3JpZC1jb2xzLTEgc3VyIG1vYmlsZSBwb3VyIGVtcGlsZXIgY29udHLDtGxlcyBldCBncmFwaGlxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdGV4dC14cyBtYi0xIGJsb2NrIHVwcGVyY2FzZSBmb250LWJvbGRcIj5Eb25uw6llcyAoQ1NWKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ21lZGlhVXJsJywgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC13aGl0ZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmxvYy5tZWRpYVVybCB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBDaG9pc2lyIHVuIGpldSBkZSBkb25uw6llcyAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KGRhdGFzZXRMaWJyYXJ5KSAmJiBkYXRhc2V0TGlicmFyeS5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkLmlkfSB2YWx1ZT17ZC5zb3VyY2V9PntkLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdGV4dC14cyBtYi0xIGJsb2NrIHVwcGVyY2FzZSBmb250LWJvbGRcIj5UeXBlIGRlIEdyYXBoaXF1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7WydiYXInLCAnbGluZScsICdwaWUnXS5tYXAodHlwZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ3ZpelR5cGUnLCB0eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMiB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgYm9yZGVyIHRyYW5zaXRpb24gZmxleC0xIG1kOmZsZXgtbm9uZSAke2Jsb2Mudml6VHlwZSA9PT0gdHlwZSA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGJvcmRlci12aWtpbmctZ29sZCcgOiAnYmctYmxhY2sgdGV4dC1zdG9uZS01MDAgYm9yZGVyLXN0b25lLTcwMCBob3Zlcjp0ZXh0LXdoaXRlJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay8yMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1bMjAwcHhdIHJvdW5kZWQgcC0yIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5tZWRpYVVybCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBtaW4taC1bMjAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDc3ZDaGFydCBjc3ZVcmw9e2Jsb2MubWVkaWFVcmx9IHZpelR5cGU9e2Jsb2Mudml6VHlwZSB8fCAnYmFyJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS02MDAgdGV4dC14cyBpdGFsaWNcIj5Tw6lsZWN0aW9ubmV6IHVuIGZpY2hpZXIuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNdXNpcXVlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAnbXVzaWMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnbWVkaWFVcmwnLCBlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2MubWVkaWFVcmwgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0gQ2hvaXNpciB1bmUgbcOpbG9kaWUgLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bXVzaWNMaWJyYXJ5ICYmIE9iamVjdC5lbnRyaWVzKG11c2ljTGlicmFyeSkubWFwKChbZm9sZGVyLCBmaWxlc10pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGdyb3VwIGtleT17Zm9sZGVyfSBsYWJlbD17Zm9sZGVyLnRvVXBwZXJDYXNlKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoZmlsZXMpICYmIGZpbGVzLm1hcChmaWxlID0+IDxvcHRpb24ga2V5PXtmaWxlfSB2YWx1ZT17YCR7Zm9sZGVyfS8ke2ZpbGV9YH0+e2ZpbGV9PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogQmFycmUgZCdvdXRpbHMgcmVzcG9uc2l2ZSBhdmVjIGZsZXgtd3JhcCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBqdXN0aWZ5LWNlbnRlciBtYi0xMCBwYi0xMCBib3JkZXItYiBib3JkZXItc3RvbmUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIlRpdHJlIEgyXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnaDInKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiUGFyYWdyYXBoZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ3BhcmFncmFwaCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJJbWFnZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ2ltYWdlJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIkdyYXBoaXF1ZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ3N0YXRzJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIk11c2lxdWVcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdtdXNpYycpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtsb2FkaW5nfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJsYWNrIHVwcGVyY2FzZSBweS00IGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctWzBfMF8yMHB4X3JnYmEoMjEyLDE3NSw1NSwwLjQpXSBkaXNhYmxlZDpvcGFjaXR5LTUwIHRleHQtc20gbWQ6dGV4dC1iYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoaWQgPyAnUsOpw6ljcml0dXJlLi4uJyA6ICdHcmF2dXJlIGVuIGNvdXJzLi4uJykgOiAoaWQgPyAnTWV0dHJlIMOgIGpvdXIgbGUgUsOpY2l0JyA6ICdQdWJsaWVyIGxhIENocm9uaXF1ZScpfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gTU9ESUYgOiBCb3V0b24gcmVzcG9uc2l2ZSAoZmxleC1ncm93KVxyXG5jb25zdCBUb29sQnRuID0gKHsgbGFiZWwsIG9uQ2xpY2sgfSkgPT4gKFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPVwicHgtNCBweS0zIG1kOnB5LTIgYmctc3RvbmUtODAwIHRleHQtc3RvbmUtMzAwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyIGZsZXgtZ3JvdyBtZDpmbGV4LWdyb3ctMCByb3VuZGVkXCI+XHJcbiAgICAgICAgKyB7bGFiZWx9XHJcbiAgICA8L2J1dHRvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVGb3JtOyIsIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHVzZVBhcmFtcywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbi8vIGltcG9ydCBDc3ZDaGFydCBmcm9tIFwiLi9Dc3ZDaGFydFwiO1xyXG4vLyBpbXBvcnQgVmlraW5nUGxheWVyIGZyb20gXCIuL1Zpa2luZ1BsYXllclwiOyAvLyDwn5GIIEltcG9ydCBkdSBub3V2ZWF1IHBsYXllclxyXG4vLyBpbXBvcnQgQ29tbWVudFNlY3Rpb24gZnJvbSBcIi4vQ29tbWVudFNlY3Rpb25cIjtcclxuLy8gaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSBcIi4vU3RhclJhdGluZ1wiO1xyXG5cclxuLy8gY29uc3QgQXJ0aWNsZVNob3cgPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuLy8gICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4vLyAgICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICAvLyAxLiBWw6lyaWYgVG9rZW4gcG91ciBsJ2ludGVyZmFjZSAoVXNlciBTdGF0ZSlcclxuLy8gICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4vLyAgICAgICAgIGlmICh0b2tlbikge1xyXG4vLyAgICAgICAgICAgICB0cnkgeyBzZXRVc2VyKGp3dERlY29kZSh0b2tlbikpOyB9IGNhdGNoIChlKSB7fVxyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLy8gMi4gUHLDqXBhcmF0aW9uIGRlcyBFbi10w6p0ZXMgKEhFQURFUlMpXHJcbi8vICAgICAgICAgLy8gT24gcHLDqXBhcmUgbGUgYmFkZ2UgcG91ciBlbnRyZXIgZGFucyBsZSBkb25qb25cclxuLy8gICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4vLyAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nXHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgICAgICBpZiAodG9rZW4pIHtcclxuLy8gICAgICAgICAgICAgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAvLyAzLiBGZXRjaCBBcnRpY2xlIEFWRUMgbGVzIGhlYWRlcnNcclxuLy8gICAgICAgICBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHsgaGVhZGVyczogaGVhZGVycyB9KSAvLyDwn5GIIEFKT1VUIElDSVxyXG4vLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiAocmVzLm9rID8gcmVzLmpzb24oKSA6IFByb21pc2UucmVqZWN0KFwiQWNjw6hzIHJlZnVzw6kgb3UgaW50cm91dmFibGVcIikpKVxyXG4vLyAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShkYXRhKTtcclxuLy8gICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgfSwgW2lkXSk7XHJcblxyXG4vLyAgICAgaWYgKGxvYWRpbmcpXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1nb2xkIHAtMTAgYW5pbWF0ZS1wdWxzZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgSW52b2NhdGlvbiBkdSByw6ljaXQuLi5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIGlmICghYXJ0aWNsZSlcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcmVkLTUwMCBwLTEwXCI+XHJcbi8vICAgICAgICAgICAgICAgICBQYXJjaGVtaW4gaW50cm91dmFibGUuXHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcblxyXG4vLyAgICAgLy8g8J+UjiBPTiBDSEVSQ0hFIExBIE1VU0lRVUUgSUNJXHJcbi8vICAgICBjb25zdCBtdXNpY0Jsb2MgPSBhcnRpY2xlLmJsb2NzPy5maW5kKChiKSA9PiBiLnR5cGUgPT09IFwibXVzaWNcIik7XHJcbi8vICAgICAvLyBPbiBuZXR0b2llIGxlIGNoZW1pbiAocGFyZm9pcyBpbCBhIC91cGxvYWRzLy4uLiwgcGFyZm9pcyBub24pXHJcbi8vICAgICBjb25zdCBtdXNpY1NyYyA9IG11c2ljQmxvYyA/IGAvbXVzaXF1ZS8ke211c2ljQmxvYy5jb250ZW50fWAgOiBudWxsO1xyXG5cclxuLy8gICAgIC8vIE9uIHByw6lwYXJlIGxlcyBhdXRyZXMgYmxvY3MgKHNhbnMgbGEgbXVzaXF1ZSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsb25zKVxyXG4vLyAgICAgY29uc3QgY29udGVudEJsb2NzID1cclxuLy8gICAgICAgICBhcnRpY2xlLmJsb2NzXHJcbi8vICAgICAgICAgICAgID8uZmlsdGVyKChiKSA9PiBiLnR5cGUgIT09IFwibXVzaWNcIilcclxuLy8gICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKSB8fCBbXTtcclxuXHJcbi8vICAgICBjb25zdCBoYW5kbGVSYXRlID0gYXN5bmMgKHNjb3JlKSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4vLyAgICAgICAgIGlmICghdG9rZW4pIHJldHVybiBhbGVydChcIklsIGZhdXQgw6p0cmUgY29ubmVjdMOpIHBvdXIgbm90ZXIgIVwiKTtcclxuXHJcbi8vICAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3JhdGluZ3NcIiwge1xyXG4vLyAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuLy8gICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcclxuLy8gICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNjb3JlLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGFydGljbGU6IGAvYXBpL2FydGljbGVzLyR7aWR9YCxcclxuLy8gICAgICAgICAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4vLyAgICAgICAgICAgICAgICAgYWxlcnQoXCJWb3RyZSBub3RlIGEgw6l0w6kgZ3JhdsOpZSAhXCIpO1xyXG4vLyAgICAgICAgICAgICAgICAgLy8gT3B0aW9ubmVsIDogUmVjaGFyZ2VyIGwnYXJ0aWNsZSBwb3VyIHZvaXIgbGEgbm91dmVsbGUgbW95ZW5uZVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTggbWluLWgtc2NyZWVuIGJnLXN0b25lLTkwMCBib3JkZXIteCBib3JkZXItc3RvbmUtODAwIHNoYWRvdy0yeGxcIj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPExpbmtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0bz1cIi9mb3J1bVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC12aWtpbmctZ29sZCBtYi04IGlubGluZS1ibG9jayB0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIlxyXG4vLyAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIOKGkCBSZXRvdXIgYXUgSGFsbFxyXG4vLyAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtNCBtYi02XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0YXJSYXRpbmdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZUlkPXtpZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJhdGluZz17YXJ0aWNsZS5hdmVyYWdlUmF0aW5nfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBvblJhdGU9e2hhbmRsZVJhdGV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCB0ZXh0LXNtXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIE1veWVubmUgOiB7YXJ0aWNsZS5hdmVyYWdlUmF0aW5nIHx8IFwiMFwifS81XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuLy8gICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNiB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGRyb3Atc2hhZG93LWxnXCI+XHJcbi8vICAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuLy8gICAgICAgICAgICAgPC9oMT5cclxuXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtODAwLzUwIHAtOCBib3JkZXItbC00IGJvcmRlci12aWtpbmctZ29sZCBtYi04IGl0YWxpYyB0ZXh0LXN0b25lLTMwMCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBzaGFkb3ctaW5uZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgIHthcnRpY2xlLnN1bW1hcnl9XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuLy8gICAgICAgICAgICAgey8qIPCfjrUgTEUgUExBWUVSIEVTVCBJQ0kgKEp1c3RlIHNvdXMgbGUgcsOpc3Vtw6kpICovfVxyXG4vLyAgICAgICAgICAgICB7bXVzaWNTcmMgJiYgKFxyXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMiBhbmltYXRlLWZhZGUtaW4tdXBcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8VmlraW5nUGxheWVyIHNyYz17bXVzaWNTcmN9IGF1dG9QbGF5PXt0cnVlfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICl9XHJcblxyXG4vLyAgICAgICAgICAgICB7LyogTGUgcmVzdGUgZHUgY29udGVudSAqL31cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEyXCI+XHJcbi8vICAgICAgICAgICAgICAgICB7Y29udGVudEJsb2NzLm1hcCgoYmxvYykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYmxvYy50eXBlKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoMlwiOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBib3JkZXItYiBib3JkZXItc3RvbmUtNzAwIHBiLTIgbXQtOFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5jb250ZW50fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBhcmFncmFwaFwiOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtMzAwIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWxnIHdoaXRlc3BhY2UtcHJlLWxpbmUgdGV4dC1qdXN0aWZ5XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLmNvbnRlbnR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktOFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Jsb2MuY29udGVudH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIklsbHVzdHJhdGlvblwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG1heC1oLVs1MDBweF0gYm9yZGVyLTQgYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMCwwLDAsMC41KV0gcm91bmRlZFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0YXRzXCI6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2aXpcIjpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gYmxvYy5jb250ZW50XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBibG9jLmNvbnRlbnQuc3BsaXQoXCI6OlwiKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW107XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBwLTYgcm91bmRlZC1sZyBteS04XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtYm9sZCB0ZXh0LXNtIHVwcGVyY2FzZSBtYi00IHRyYWNraW5nLXdpZGVzdCB0ZXh0LWNlbnRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+TiiBEb25uw6llcyBkdSBDbGFuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC05NlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENzdkNoYXJ0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3N2VXJsPXtwYXJ0c1sxXX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXpUeXBlPXtwYXJ0c1swXSB8fCBcImJhclwifVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMCBwdC0xMCBib3JkZXItdCBib3JkZXItc3RvbmUtODAwIHRleHQtY2VudGVyIHRleHQtc3RvbmUtNjAwIHRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgR3JhdsOpIHBhciB7YXJ0aWNsZS5hdXRob3I/LnBzZXVkbyB8fCBcIlVuIGluY29ubnVcIn0g4oCie1wiIFwifVxyXG4vLyAgICAgICAgICAgICAgICAge25ldyBEYXRlKGFydGljbGUuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxDb21tZW50U2VjdGlvbiBhcnRpY2xlSWQ9e2lkfSAvPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEFydGljbGVTaG93O1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IENzdkNoYXJ0IGZyb20gXCIuL0NzdkNoYXJ0XCI7XHJcbmltcG9ydCBWaWtpbmdQbGF5ZXIgZnJvbSBcIi4vVmlraW5nUGxheWVyXCI7XHJcbmltcG9ydCBDb21tZW50U2VjdGlvbiBmcm9tIFwiLi9Db21tZW50U2VjdGlvblwiO1xyXG5pbXBvcnQgU3RhclJhdGluZyBmcm9tIFwiLi9TdGFyUmF0aW5nXCI7XHJcblxyXG5jb25zdCBBcnRpY2xlU2hvdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gKHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChcIkVycmV1clwiKSkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbm7DqWVzIHJlw6d1ZXMgOlwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZ29sZCBwLTEwIGFuaW1hdGUtcHVsc2VcIj5cclxuICAgICAgICAgICAgICAgIEludm9jYXRpb24gZHUgcsOpY2l0Li4uXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICBpZiAoIWFydGljbGUpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXJlZC01MDAgcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgUGFyY2hlbWluIGludHJvdXZhYmxlLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgIC8vIC0tLSBMT0dJUVVFIEQnRVhUUkFDVElPTiAtLS1cclxuICAgIGxldCBjdXN0b21TdHlsZXMgPSB7fTtcclxuICAgIGNvbnN0IHJhd0NvbmZpZyA9IGFydGljbGUuZGVzaWduQ29uZmlnO1xyXG5cclxuICAgIGlmIChyYXdDb25maWcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjdXN0b21TdHlsZXMgPVxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHJhd0NvbmZpZyA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gSlNPTi5wYXJzZShyYXdDb25maWcpXHJcbiAgICAgICAgICAgICAgICAgICAgOiByYXdDb25maWc7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGRlIGTDqWNvZGFnZSBkZXMgc3R5bGVzXCIsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gRMOJRklOSVRJT04gREVTIENPVUxFVVJTIC0tLVxyXG4gICAgLy8gT24gdXRpbGlzZSBsZXMgdmFsZXVycyBkZSBsYSBCREQsIHNpbm9uIGJsYW5jIHBhciBkw6lmYXV0IChzZXJhIGfDqXLDqSBwYXIgbGEgY2xhc3NlIENTUylcclxuICAgIGNvbnN0IGZpbmFsVGl0bGVDb2xvciA9IGN1c3RvbVN0eWxlcy50aXRsZUNvbG9yIHx8IFwiI2ZmZmZmZlwiO1xyXG4gICAgY29uc3QgZmluYWxDb250ZW50QmcgPSBjdXN0b21TdHlsZXMuY29udGVudEJnIHx8IFwicmdiYSg0MSwgMzcsIDM2LCAwLjUpXCI7XHJcblxyXG4gICAgY29uc3QgbXVzaWNCbG9jID0gYXJ0aWNsZS5ibG9jcz8uZmluZCgoYikgPT4gYi50eXBlID09PSBcIm11c2ljXCIpO1xyXG4gICAgY29uc3QgbXVzaWNTcmMgPSBtdXNpY0Jsb2MgPyBgL211c2lxdWUvJHttdXNpY0Jsb2MuY29udGVudH1gIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBjb250ZW50QmxvY3MgPSBhcnRpY2xlLmJsb2NzXHJcbiAgICAgICAgPyBbLi4uYXJ0aWNsZS5ibG9jc11cclxuICAgICAgICAgICAgICAuZmlsdGVyKChiKSA9PiBiLnR5cGUgIT09IFwibXVzaWNcIilcclxuICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pXHJcbiAgICAgICAgOiBbXTtcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVSYXRlID0gYXN5bmMgKHNjb3JlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGlmICghdG9rZW4pIHJldHVybiBhbGVydChcIklsIGZhdXQgw6p0cmUgY29ubmVjdMOpIHBvdXIgbm90ZXIgIVwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3JhdGluZ3NcIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGU6IGAvYXBpL2FydGljbGVzLyR7aWR9YCxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJWb3RyZSBub3RlIGEgw6l0w6kgZ3JhdsOpZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gT3B0aW9ubmVsIDogUmVjaGFyZ2VyIGwnYXJ0aWNsZSBwb3VyIHZvaXIgbGEgbm91dmVsbGUgbW95ZW5uZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gTU9ESUYgOiBwLTQgc3VyIG1vYmlsZSwgcC04IHN1ciBkZXNrdG9wXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTQgbWQ6cC04IG1pbi1oLXNjcmVlbiBiZy1zdG9uZS05MDAgbWQ6Ym9yZGVyLXggYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogRU4tVMOKVEUgOiBCb3V0b24gUmV0b3VyIGV0IE5vdGF0aW9uICovfVxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LWNvbC1yZXZlcnNlIHN1ciBtb2JpbGUgcG91ciBtZXR0cmUgbGUgcmV0b3VyIGVuIGJhcyBvdSBmbGV4LWNvbCBjbGFzc2lxdWUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgbWQ6aXRlbXMtY2VudGVyIG1iLTYgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvZm9ydW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgaW5saW5lLWJsb2NrIHRleHQteHMgbWQ6dGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG9yZGVyLTIgbWQ6b3JkZXItMVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg4oaQIFJldG91ciBhdSBIYWxsXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHctZnVsbCBzdXIgbW9iaWxlIHBvdXIgY2VudHJlciBsYSBub3RhdGlvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWQ6anVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC00IHctZnVsbCBtZDp3LWF1dG8gb3JkZXItMSBtZDpvcmRlci0yIGJnLXN0b25lLTgwMC81MCBwLTMgcm91bmRlZCBtZDpiZy10cmFuc3BhcmVudCBtZDpwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhclJhdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlSWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmF0aW5nPXthcnRpY2xlLmF2ZXJhZ2VSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmF0ZT17aGFuZGxlUmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwIHRleHQteHMgbWQ6dGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNb3llbm5lIDoge2FydGljbGUuYXZlcmFnZVJhdGluZyB8fCBcIjBcIn0vNVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBUSVRSRSAqL31cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBcIi0tYXJ0aWNsZS10aXRsZS1jb2xvclwiOiBmaW5hbFRpdGxlQ29sb3IgfX1cclxuICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdGV4dC0zeGwgbW9iaWxlLCBicmVhay13b3JkcyBwb3VyIMOpdml0ZXIgZMOpYm9yZGVtZW50XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlLWR5bmFtaWMtdGl0bGUgdGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1kcmFnb24gbWItNiB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGRyb3Atc2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBicmVhay13b3JkcyBsZWFkaW5nLXRpZ2h0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICB7LyogUsOJU1VNw4kgKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogZmluYWxDb250ZW50QmcgfX1cclxuICAgICAgICAgICAgICAgIC8vIE1PRElGIDogcC01IHN1ciBtb2JpbGUsIHRleHQtYmFzZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC01IG1kOnAtOCBib3JkZXItbC00IGJvcmRlci12aWtpbmctZ29sZCBtYi04IGl0YWxpYyB0ZXh0LXN0b25lLTMwMCB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgc2hhZG93LWlubmVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCB0ZXh0LWp1c3RpZnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHttdXNpY1NyYyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpa2luZ1BsYXllciBzcmM9e211c2ljU3JjfSBhdXRvUGxheT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTggbWQ6c3BhY2UteS0xMlwiPlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnRCbG9jcy5tYXAoKGJsb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGJsb2MudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaDJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB0ZXh0LTJ4bCBtb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTcwMCBwYi0yIG10LTggYnJlYWstd29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBhcmFncmFwaFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdGV4dC1iYXNlIG1vYmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTMwMCBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1iYXNlIG1kOnRleHQtbGcgd2hpdGVzcGFjZS1wcmUtbGluZSB0ZXh0LWp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtibG9jLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJbGx1c3RyYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBtYXgtdy1mdWxsIHBvdXIgbmUgcGFzIGTDqXBhc3NlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1mdWxsIG1kOm1heC1oLVs1MDBweF0gYm9yZGVyLTQgYm9yZGVyLXN0b25lLTgwMCBzaGFkb3cteGwgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhdHNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZpelwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBibG9jLmNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJsb2MuY29udGVudC5zcGxpdChcIjo6XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrLzQwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtNCBtZDpwLTYgcm91bmRlZC1sZyBteS04IHNoYWRvdy1pbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWJvbGQgdGV4dC14cyBtZDp0ZXh0LXNtIHVwcGVyY2FzZSBtYi00IHRyYWNraW5nLXdpZGVzdCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+TiiBEb25uw6llcyBkdSBDbGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IGgtNjQgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IG1kOmgtOTYgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDc3ZDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzdlVybD17cGFydHNbMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdml6VHlwZT17cGFydHNbMF0gfHwgXCJiYXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgbWQ6bXQtMjAgcHQtOCBtZDpwdC0xMCBib3JkZXItdCBib3JkZXItc3RvbmUtODAwIHRleHQtY2VudGVyIHRleHQtc3RvbmUtNTAwIHRleHQtWzEwcHhdIG1kOnRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgR3JhdsOpIHBhciB7YXJ0aWNsZS5hdXRob3I/LnBzZXVkbyB8fCBcIlVuIMOpY2xhaXJldXJcIn0g4oCie1wiIFwifVxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKGFydGljbGUuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8Q29tbWVudFNlY3Rpb24gYXJ0aWNsZUlkPXtpZH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVNob3c7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTb3VzLWNvbXBvc2FudCBwb3VyIFVOIGNvbW1lbnRhaXJlIChyw6ljdXJzaWYpXHJcbmNvbnN0IENvbW1lbnRJdGVtID0gKHsgY29tbWVudCwgb25Wb3RlLCBvblJlcGx5LCBhcnRpY2xlSWQsIGNhbkludGVyYWN0IH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93UmVwbHlGb3JtLCBzZXRTaG93UmVwbHlGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXBseUNvbnRlbnQsIHNldFJlcGx5Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXBseVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG9uUmVwbHkocmVwbHlDb250ZW50LCBjb21tZW50LmlkKTtcclxuICAgICAgICBzZXRSZXBseUNvbnRlbnQoXCJcIik7XHJcbiAgICAgICAgc2V0U2hvd1JlcGx5Rm9ybShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gTU9ESUYgOiBwbC0yIG91IHBsLTQgc2Vsb24gbCfDqWNyYW4gcG91ciBnYWduZXIgZGUgbGEgcGxhY2UgZW4gcHJvZm9uZGV1clxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWwtMiBib3JkZXItc3RvbmUtNzAwIHBsLTMgbWQ6cGwtNCBtdC00IG1iLTJcIj5cclxuICAgICAgICAgICAgey8qIEVOLVTDilRFIDogQXV0ZXVyICsgU2NvcmUgKi99XHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IGZsZXgtd3JhcCBwb3VyIHF1ZSDDp2EgcGFzc2Ugw6AgbGEgbGlnbmUgc3VyIHRyw6hzIHBldGl0IMOpY3JhbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1bMTBweF0gbWQ6dGV4dC14cyB0ZXh0LXN0b25lLTQwMCBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC12aWtpbmctZ29sZCB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21tZW50LmF1dGhvcj8ucHNldWRvIHx8IFwiVmlraW5nIEFub255bWVcIn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuKAoiB7Y29tbWVudC5zY29yZX0gcG9pbnRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAg4oCiIHtuZXcgRGF0ZShjb21tZW50LmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIENPTlRFTlUgKi99XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtMjAwIHRleHQtc20gbWQ6dGV4dC1iYXNlIG1iLTIgYnJlYWstd29yZHNcIj5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50LmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIHsvKiDwn5SSIEFDVElPTlMgOiBWb3RlICYgUsOpcG9uZHJlICovfVxyXG4gICAgICAgICAgICB7Y2FuSW50ZXJhY3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LVsxMHB4XSBtZDp0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zdG9uZS01MDAgc2VsZWN0LW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgbWQ6Z2FwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlKGNvbW1lbnQuaWQsIFwidXBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyZWVuLTUwMCBwLTEgbWQ6cC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4payIFVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGUoY29tbWVudC5pZCwgXCJkb3duXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1yZWQtNTAwIHAtMSBtZDpwLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDilrwgRG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dSZXBseUZvcm0oIXNob3dSZXBseUZvcm0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXdoaXRlIHAtMSBtZDpwLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUsOpcG9uZHJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBGT1JNVUxBSVJFIERFIFLDiVBPTlNFICovfVxyXG4gICAgICAgICAgICB7c2hvd1JlcGx5Rm9ybSAmJiBjYW5JbnRlcmFjdCAmJiAoXHJcbiAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IGZsZXgtY29sIHN1ciBtb2JpbGUgcG91ciBib3V0b24gbGFyZ2VcclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVJlcGx5U3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtMlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlcGx5Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXBseUNvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTIgdGV4dC13aGl0ZSB0ZXh0LXNtIHctZnVsbCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSByw6lwb25zZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zdG9uZS03MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgbWQ6cHktMCB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGQgaG92ZXI6Ymctc3RvbmUtNjAwIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW52b3llclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIFLDiUNVUlNJVklUw4kgKi99XHJcbiAgICAgICAgICAgIHtjb21tZW50LnJlcGxpZXMgJiYgY29tbWVudC5yZXBsaWVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQucmVwbGllcy5tYXAoKHJlcGx5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZXBseS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e3JlcGx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Wb3RlPXtvblZvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlcGx5PXtvblJlcGx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZUlkPXthcnRpY2xlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5JbnRlcmFjdD17Y2FuSW50ZXJhY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG4vLyBDb21wb3NhbnQgUHJpbmNpcGFsXHJcbmNvbnN0IENvbW1lbnRTZWN0aW9uID0gKHsgYXJ0aWNsZUlkIH0pID0+IHtcclxuICAgIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25ld0NvbW1lbnQsIHNldE5ld0NvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjYW5JbnRlcmFjdCwgc2V0Q2FuSW50ZXJhY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIHNldENhbkludGVyYWN0KCEhdG9rZW4pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoQ29tbWVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC9hcGkvY29tbWVudHM/YXJ0aWNsZT0ke2FydGljbGVJZH0mcGFyZW50W2V4aXN0c109ZmFsc2VgKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWVudHNEYXRhID1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhW1wiaHlkcmE6bWVtYmVyXCJdIHx8IGRhdGFbXCJtZW1iZXJcIl0gfHwgW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb290Q29tbWVudHMgPSBjb21tZW50c0RhdGEuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIChjKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhYy5wYXJlbnQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYy5wYXJlbnQgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjLnBhcmVudCA9PT0gbnVsbCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cyhyb290Q29tbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hDb21tZW50cygpO1xyXG4gICAgfSwgW2FydGljbGVJZF0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBvc3QgPSBhc3luYyAoY29udGVudCwgcGFyZW50SWQgPSBudWxsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVm91cyBkZXZleiDDqnRyZSBjb25uZWN0w6kgcG91ciBncmF2ZXIgdW4gbWVzc2FnZSAhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICBhcnRpY2xlOiBgL2FwaS9hcnRpY2xlcy8ke2FydGljbGVJZH1gLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudElkID8gYC9hcGkvY29tbWVudHMvJHtwYXJlbnRJZH1gIDogbnVsbCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvY29tbWVudHNcIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIGZldGNoQ29tbWVudHMoKTtcclxuICAgICAgICAgICAgICAgIGlmICghcGFyZW50SWQpIHNldE5ld0NvbW1lbnQoXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVm90ZSA9IGFzeW5jIChjb21tZW50SWQsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBpZiAoIXRva2VuKVxyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJTZXVscyBsZXMgZ3VlcnJpZXJzIGNvbm5lY3TDqXMgcGV1dmVudCB2b3RlciAhXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChgL2FwaS9jdXN0b20vY29tbWVudHMvJHtjb21tZW50SWR9L3ZvdGUvJHtkaXJlY3Rpb259YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7fSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEyIHB0LTYgbWQ6cHQtOCBib3JkZXItdCBib3JkZXItc3RvbmUtODAwXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNCBtZDptYi02IHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgQ29uc2VpbCBkZSBHdWVycmUgKHtjb21tZW50cy5sZW5ndGh9IGF2aXMpXHJcbiAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICB7Lyog8J+UkiBGb3JtdWxhaXJlIFByaW5jaXBhbCAqL31cclxuICAgICAgICAgICAge2NhbkludGVyYWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBmbGV4LWNvbCBzdXIgbW9iaWxlIHBvdXIgcXVlIGxlIGJvdXRvbiBwcmVubmUgdG91dGUgbGEgbGFyZ2V1clxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCB0ZXh0LXN0b25lLTMwMCBwLTMgaC0yNCBtZDpoLTIwIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgcmVzaXplLW5vbmUgbWQ6cmVzaXplLXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhaXNzZXogdm90cmUgbWFycXVlIHN1ciBjZSByw6ljaXQuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQb3N0KG5ld0NvbW1lbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHctZnVsbCBzdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ib2xkIHB4LTYgcHktMyBtZDpweS0wIHVwcGVyY2FzZSBob3ZlcjpiZy13aGl0ZSB0cmFuc2l0aW9uIHctZnVsbCBtZDp3LWF1dG8gc2hhZG93LWxnIGFjdGl2ZTpzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHcmF2ZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IHAtNCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBiZy1zdG9uZS05MDAvNTAgdGV4dC1jZW50ZXIgaXRhbGljIHRleHQtc3RvbmUtNTAwIHRleHQteHMgbWQ6dGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlam9pZ25leiBsZSBjbGFuIChjb25uZWN0ZXotdm91cykgcG91ciBwYXJ0aWNpcGVyIGF1XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc2VpbCBkZSBndWVycmUgZXQgdm90ZXIuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBMaXN0ZSBkZXMgY29tbWVudGFpcmVzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb21tZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtjb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblZvdGU9e2hhbmRsZVZvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVwbHk9e2hhbmRsZVBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVJZD17YXJ0aWNsZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5JbnRlcmFjdD17Y2FuSW50ZXJhY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50U2VjdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSc7XHJcbmltcG9ydCB7IFxyXG4gIEJhckNoYXJ0LCBCYXIsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgTGVnZW5kLCBSZXNwb25zaXZlQ29udGFpbmVyLFxyXG4gIExpbmVDaGFydCwgTGluZSwgUGllQ2hhcnQsIFBpZSwgQ2VsbCBcclxufSBmcm9tICdyZWNoYXJ0cyc7XHJcblxyXG5jb25zdCBDT0xPUlMgPSBbJyNkNGFmMzcnLCAnI2I5MWMxYycsICcjMWMxOTE3JywgJyM1NzUzNGUnLCAnI2E4YTI5ZSddOyAvLyBDb3VsZXVycyBWaWtpbmdcclxuXHJcbmNvbnN0IENzdkNoYXJ0ID0gKHsgY3N2VXJsLCB2aXpUeXBlID0gJ2JhcicgfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjc3ZVcmwpIHJldHVybjtcclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBmZXRjaChjc3ZVcmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkltcG9zc2libGUgZGUgbGlyZSBsZSBwYXJjaGVtaW4gZGUgZG9ubsOpZXNcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihjc3ZUZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgIFBhcGEucGFyc2UoY3N2VGV4dCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljVHlwaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNraXBFbXB0eUxpbmVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3VsdHMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoXCJMZSBmaWNoaWVyIGVzdCBpbGxpc2libGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbY3N2VXJsXSk7XHJcblxyXG4gICAgaWYgKCFjc3ZVcmwpIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBpdGFsaWMgdGV4dC14cyB0ZXh0LWNlbnRlciBwLTRcIj5BdWN1bmUgZG9ubsOpZSBzw6lsZWN0aW9ubsOpZS48L3A+O1xyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbFwiPjxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgYW5pbWF0ZS1wdWxzZSB0ZXh0LXhzXCI+RMOpY2hpZmZyYWdlIGRlcyBydW5lcy4uLjwvcD48L2Rpdj47XHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyB0ZXh0LWNlbnRlciBwLTRcIj5FcnJldXIgOiB7ZXJyb3J9PC9wPjtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHRleHQteHMgdGV4dC1jZW50ZXIgcC00XCI+TGUgZmljaGllciBlc3QgdmlkZS48L3A+O1xyXG5cclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcclxuICAgIGNvbnN0IHhLZXkgPSBrZXlzWzBdO1xyXG4gICAgY29uc3QgeUtleSA9IGtleXNbMV07XHJcblxyXG4gICAgLy8gTU9ESUYgOiBTdHlsZSBjb21tdW4gcG91ciBsZXMgYXhlcyAocG9saWNlIHBsdXMgcGV0aXRlKVxyXG4gICAgY29uc3QgYXhpc1N0eWxlID0geyBmb250U2l6ZTogJzEwcHgnLCBmaWxsOiAnI2E4YTI5ZScgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJDaGFydCA9ICgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHZpelR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGluZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17ZGF0YX0gbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDIwLCBsZWZ0OiAwLCBib3R0b206IDUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiM0NDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT17eEtleX0gc3Ryb2tlPVwiI2Q0YWYzN1wiIHRpY2s9e2F4aXNTdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFlBeGlzIHN0cm9rZT1cIiNkNGFmMzdcIiB0aWNrPXtheGlzU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnRTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWMxOTE3JywgYm9yZGVyQ29sb3I6ICcjZDRhZjM3JywgY29sb3I6ICcjZmZmJywgZm9udFNpemU6ICcxMnB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVnZW5kIHdyYXBwZXJTdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBwYWRkaW5nVG9wOiAnMTBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT17eUtleX0gc3Ryb2tlPVwiI2Q0YWYzN1wiIHN0cm9rZVdpZHRoPXszfSBkb3Q9e3sgcjogNCB9fSBhY3RpdmVEb3Q9e3sgcjogNiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluZUNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSAncGllJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBpZUNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGllXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3g9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3k9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxMaW5lPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogTGFiZWwgc2ltcGxpZmnDqSBwb3VyIG1vYmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eyh7IHBlcmNlbnQgfSkgPT4gYCR7KHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMCl9JWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlclJhZGl1cz1cIjcwJVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM4ODg0ZDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT17eUtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVLZXk9e3hLZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZW50cnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGwga2V5PXtgY2VsbC0ke2luZGV4fWB9IGZpbGw9e0NPTE9SU1tpbmRleCAlIENPTE9SUy5sZW5ndGhdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGllPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50U3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFjMTkxNycsIGJvcmRlckNvbG9yOiAnI2Q0YWYzNycsIGNvbG9yOiAnI2ZmZicsIGZvbnRTaXplOiAnMTJweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZ2VuZCB3cmFwcGVyU3R5bGU9e3sgZm9udFNpemU6ICcxMHB4JyB9fSBsYXlvdXQ9XCJob3Jpem9udGFsXCIgdmVydGljYWxBbGlnbj1cImJvdHRvbVwiIGFsaWduPVwiY2VudGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BpZUNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSAnYmFyJzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhckNoYXJ0IGRhdGE9e2RhdGF9IG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAyMCwgbGVmdDogMCwgYm90dG9tOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiBzdHJva2U9XCIjNDQ0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9e3hLZXl9IHN0cm9rZT1cIiNkNGFmMzdcIiB0aWNrPXtheGlzU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxZQXhpcyBzdHJva2U9XCIjZDRhZjM3XCIgdGljaz17YXhpc1N0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjdXJzb3I9e3tmaWxsOiAnIzMzMyd9fSBjb250ZW50U3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFjMTkxNycsIGJvcmRlckNvbG9yOiAnI2Q0YWYzNycsIGNvbG9yOiAnI2ZmZicsIGZvbnRTaXplOiAnMTJweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZ2VuZCB3cmFwcGVyU3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgcGFkZGluZ1RvcDogJzEwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YUtleT17eUtleX0gZmlsbD1cIiNkNGFmMzdcIiByYWRpdXM9e1s0LCA0LCAwLCAwXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JhckNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gTU9ESUYgOiBoLWZ1bGwgZXQgdy1mdWxsIHBvdXIgcHJlbmRyZSB0b3V0IGwnZXNwYWNlIGRpc3BvbmlibGUgZHUgcGFyZW50XHJcbiAgICAgICAgLy8gTGUgcGFkZGluZyBlc3QgZ8OpcsOpIHBhciBsZSBwYXJlbnQgKEFydGljbGVGb3JtL1Nob3cpXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG1pbi1oLVsyNTBweF1cIj5cclxuICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckNoYXJ0KCl9XHJcbiAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDc3ZDaGFydDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSc7XHJcblxyXG5jb25zdCBEYXRhUHJvdmlkZXJTcGFjZSA9ICh7IGRhdGFzZXRzIH0pID0+IHtcclxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2hlYWRlcnMsIHNldEhlYWRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvbHVtbk1hcHBpbmcsIHNldENvbHVtbk1hcHBpbmddID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2RhdGFzZXROYW1lLCBzZXREYXRhc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkRmlsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZXRGaWxlKHNlbGVjdGVkRmlsZSk7XHJcbiAgICAgICAgc2V0RGF0YXNldE5hbWUoc2VsZWN0ZWRGaWxlLm5hbWUucmVwbGFjZSgnLmNzdicsICcnKSk7XHJcblxyXG4gICAgICAgIFBhcGEucGFyc2Uoc2VsZWN0ZWRGaWxlLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgc2tpcEVtcHR5TGluZXM6IHRydWUsXHJcbiAgICAgICAgICAgIHByZXZpZXc6IDUsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29scyA9IE9iamVjdC5rZXlzKHJlc3VsdHMuZGF0YVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVycyhjb2xzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcmV2aWV3KHJlc3VsdHMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbE1hcHBpbmcgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xzLmZvckVhY2goaCA9PiBpbml0aWFsTWFwcGluZ1toXSA9ICdjYXRlZ29yaWNhbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbHVtbk1hcHBpbmcoaW5pdGlhbE1hcHBpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVR5cGUgPSAoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgc2V0Q29sdW1uTWFwcGluZyhwcmV2ID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgIFtoZWFkZXJdOiBwcmV2W2hlYWRlcl0gPT09ICdjYXRlZ29yaWNhbCcgPyAnbnVtZXJpY2FsJyA6ICdjYXRlZ29yaWNhbCdcclxuICAgICAgICB9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBkYXRhc2V0TmFtZSxcclxuICAgICAgICAgICAgc291cmNlOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5NYXBwaW5nLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcm93Q291bnQ6IHByZXZpZXcubGVuZ3RoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2RhdGFzZXRzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQYXJjaGVtaW4gZGUgZG9ubsOpZXMgZW5yZWdpc3Ryw6kgZGFucyBsYSBiaWJsaW90aMOocXVlIGQnT2RpbiAhXCIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSw6lwb25zZSBkdSBzZXJ2ZXVyIDpcIiwgZXJyb3JEYXRhKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIDogTGUgU2NyaWJlIHJlZnVzZSBsZSBmb3JtYXQgZHUgZmljaGllci5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIHLDqXNlYXVcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gTU9ESUYgOiBzcGFjZS15LTQgc3VyIG1vYmlsZSBwb3VyIGNvbXBhY3RlclxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IG1kOnNwYWNlLXktNiBhbmltYXRlLWZhZGVJblwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIEZvcm11bGFpcmUgZCdpbXBvcnRhdGlvbiAqL31cclxuICAgICAgICAgICAgey8qIE1PRElGIDogcC00IHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgcC00IG1kOnAtNiBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LWxnIG1kOnRleHQteGwgbWItNCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE5vdXZlbGxlIEFyY2hpdmUgZGUgRG9ubsOpZXNcclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNCBtZDpnYXAtNiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zdG9uZS01MDAgdGV4dC1bMTBweF0gdXBwZXJjYXNlIGZvbnQtYmxhY2sgbWItMlwiPkZpY2hpZXIgQ1NWIHVuaXF1ZW1lbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIi5jc3ZcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCB0ZXh0LXNtIHRleHQtc3RvbmUtNDAwIGZpbGU6bXItNCBmaWxlOnB5LTIgZmlsZTpweC00IGZpbGU6cm91bmRlZCBmaWxlOmJvcmRlci0wIGZpbGU6dGV4dC14cyBmaWxlOmZvbnQtYmxhY2sgZmlsZTp1cHBlcmNhc2UgZmlsZTpiZy12aWtpbmctZ29sZCBmaWxlOnRleHQtYmxhY2sgaG92ZXI6ZmlsZTpiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpbGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LWF1dG8gcHQtMiBtZDpwdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0gZGlzYWJsZWQ9e2lzVXBsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LWF1dG8gYmctdmlraW5nLWZpcmUgdGV4dC13aGl0ZSBweS0zIHB4LTggZm9udC1ibGFjayB1cHBlcmNhc2UgdGV4dC14cyBzaGFkb3ctbGcgaG92ZXI6c2NhbGUtMTA1IGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOmdyYXlzY2FsZSByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNVcGxvYWRpbmcgPyAnR3JhdnVyZS4uLicgOiAnU2NlbGxlciBsXFwnQXJjaGl2ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBBcGVyw6d1IFRlY2huaXF1ZSAqL31cclxuICAgICAgICAgICAge3ByZXZpZXcubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMC84MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzEwIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBwLTMgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ibGFjayB1cHBlcmNhc2UgdGV4dC12aWtpbmctZ29sZC81MFwiPkFuYWx5c2UgZGUgbGEgc3RydWN0dXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBMZSBzY3JvbGwgaG9yaXpvbnRhbCBlc3QgZ8OpcsOpIGljaSBwYXIgb3ZlcmZsb3cteC1hdXRvICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZWZ0IGJvcmRlci1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ibGFjay82MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVycy5tYXAoaCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IG1pbi13IHBvdXIgZm9yY2VyIGxhIGxhcmdldXIgZXQgYWN0aXZlciBsZSBzY3JvbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2h9IGNsYXNzTmFtZT1cInAtMyBtZDpwLTQgYm9yZGVyLXIgYm9yZGVyLXdoaXRlLzUgbWluLXctWzE0MHB4XSBhbGlnbi10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yIHRydW5jYXRlXCIgdGl0bGU9e2h9PntofTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVR5cGUoaCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtWzlweF0gdy1mdWxsIHB4LTIgcHktMSByb3VuZGVkLWZ1bGwgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlciB0cmFuc2l0aW9uLWNvbG9ycyBib3JkZXIgJHtjb2x1bW5NYXBwaW5nW2hdID09PSAnbnVtZXJpY2FsJyA/ICdiZy1ibHVlLTYwMC8yMCB0ZXh0LWJsdWUtNDAwIGJvcmRlci1ibHVlLTUwMC8zMCcgOiAnYmctZW1lcmFsZC02MDAvMjAgdGV4dC1lbWVyYWxkLTQwMCBib3JkZXItZW1lcmFsZC01MDAvMzAnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uTWFwcGluZ1toXSA9PT0gJ251bWVyaWNhbCcgPyAn8J+UoiBOdW3DqXJpcXVlJyA6ICfwn5SkIENhdMOpZ29yaWVsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmV2aWV3Lm1hcCgocm93LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci13aGl0ZS81IGhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzLm1hcChoID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHdoaXRlc3BhY2Utbm93cmFwIHBvdXIgw6l2aXRlciBsZXMgcmV0b3VycyDDoCBsYSBsaWduZSBtb2NoZXMgZGFucyBsZXMgY2VsbHVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtofSBjbGFzc05hbWU9XCJwLTMgbWQ6cC00IHRleHQtWzEwcHhdIG1kOnRleHQtWzExcHhdIHRleHQtc3RvbmUtNDAwIGJvcmRlci1yIGJvcmRlci13aGl0ZS81IGl0YWxpYyB3aGl0ZXNwYWNlLW5vd3JhcCBtYXgtdy1bMjAwcHhdIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWVsbGlwc2lzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3dbaF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIEFyY2hpdmVzIGV4aXN0YW50ZXMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBtZDptdC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQvNDAgZm9udC1kcmFnb24gdGV4dC1zbSBtYi00IG1kOm1iLTYgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMjAgcGItMlwiPlJlZ2lzdHJlcyBkw6lqw6AgcHLDqXNlbnRzPC9oMz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogZ3JpZCByZXNwb25zaXZlIDEgLT4gMiAtPiAzIGNvbG9ubmVzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC0zIG1kOmdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGFzZXRzPy5sZW5ndGggPiAwID8gZGF0YXNldHMubWFwKGRzID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RzLmlkfSBjbGFzc05hbWU9XCJwLTQgYmctYmxhY2svMjAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgaG92ZXI6Ym9yZGVyLXZpa2luZy1nb2xkLzQwIHRyYW5zaXRpb24tYWxsIGdyb3VwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcGFyY2htZW50IGZvbnQtYm9sZCB0ZXh0LXNtIGdyb3VwLWhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1jb2xvcnMgdHJ1bmNhdGVcIiB0aXRsZT17ZHMubmFtZX0+e2RzLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtc3RvbmUtNjAwIHVwcGVyY2FzZSBmb250LWJvbGQgaXRhbGljIHRydW5jYXRlIG1heC13LVs2MCVdXCIgdGl0bGU9e2RzLnNvdXJjZX0+e2RzLnNvdXJjZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSBiZy1zdG9uZS04MDAgcHgtMiBweS0wLjUgcm91bmRlZCB0ZXh0LXN0b25lLTQwMCB3aGl0ZXNwYWNlLW5vd3JhcFwiPntkcy5yb3dzQ291bnR9IGxpZ25lczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi1mdWxsIHB5LTEwIHRleHQtY2VudGVyIGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLXN0b25lLTgwMCB0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJsYWNrIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuZSBkb25uw6llIG4nYSDDqXTDqSBncmF2w6llIHBvdXIgbGUgbW9tZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlclNwYWNlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSAnand0LWRlY29kZSc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgbGV0IHVzZXIgPSBudWxsO1xyXG5cclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSBqd3REZWNvZGUodG9rZW4pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRva2VuIGludmFsaWRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgbmF2aWdhdGUoJy9sb2dpbicpO1xyXG4gICAgICAgIHNldElzTWVudU9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjYW5TZWVEYXNoYm9hcmQgPSB1c2VyPy5yb2xlcz8uaW5jbHVkZXMoJ1JPTEVfRURJVEVVUicpIHx8IHVzZXI/LnJvbGVzPy5pbmNsdWRlcygnUk9MRV9BRE1JTicpO1xyXG4gICAgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4gc2V0SXNNZW51T3BlbihmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBMYSBiYXJyZSBkZSBuYXZpZ2F0aW9uIHByaW5jaXBhbGUgKGxlIGJhbmRlYXUgZHUgaGF1dClcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIGJvcmRlci1iLTIgYm9yZGVyLXZpa2luZy1nb2xkLzUwIHAtNCBzdGlja3kgdG9wLTAgei01MCBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIExPR08gKFotNTAgcG91ciByZXN0ZXIgYXUtZGVzc3VzIGR1IG1lbnUgcGxlaW4gw6ljcmFuKSAqL31cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZHJvcC1zaGFkb3ctbWQgZ3JvdXAgei01MCByZWxhdGl2ZVwiIG9uQ2xpY2s9e2Nsb3NlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC00eGwgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtIHVwcGVyY2FzZVwiPlJpZGVycyBvZiBCZXJrPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQk9VVE9OIEJVUkdFUiAoWi01MCBwb3VyIHJlc3RlciBjbGlxdWFibGUpICovfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZDpoaWRkZW4gdGV4dC12aWtpbmctZ29sZCB6LTUwIGZvY3VzOm91dGxpbmUtbm9uZSByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNZW51T3BlbighaXNNZW51T3Blbil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzTWVudU9wZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPuKclTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj7imLA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNRU5VIFBSSU5DSVBBTCAvIE1PQklMRSBPVkVSTEFZIFxyXG4gICAgICAgICAgICAgICAgICAgIC0gZml4ZWQgaW5zZXQtMCA6IFByZW5kIFRPVVQgbCfDqWNyYW5cclxuICAgICAgICAgICAgICAgICAgICAtIGJnLXN0b25lLTkwMCA6IEZvbmQgTk9JUi9HUklTIE9QQVFVRSAoUGFzIGRlIHRyYW5zcGFyZW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAtIHotNDAgOiBKdXN0ZSBzb3VzIGxlIGxvZ28gZXQgbGUgYnVyZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgLSBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciA6IENlbnRyZSBsZSBjb250ZW51IHZlcnRpY2FsZW1lbnQgc3VyIG1vYmlsZVxyXG4gICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkIGluc2V0LTAgei00MCBiZy1zdG9uZS05MDAgXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTggXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc01lbnVPcGVuID8gJ3RyYW5zbGF0ZS14LTAnIDogJ3RyYW5zbGF0ZS14LWZ1bGwnfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG1kOnN0YXRpYyBtZDp0cmFuc2Zvcm0tbm9uZSBtZDpiZy10cmFuc3BhcmVudCBtZDpmbGV4LXJvdyBtZDpqdXN0aWZ5LWVuZCBtZDpoLWF1dG8gbWQ6cC0wXHJcbiAgICAgICAgICAgICAgICBgfT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogTElFTlMgREUgTkFWSUdBVElPTiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgc3BhY2UteS04IG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LTYgdGV4dC0zeGwgbWQ6dGV4dC1sZyBmb250LWRyYWdvbiB0cmFja2luZy13aWRlIHRleHQtdmlraW5nLWxpZ2h0IHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiIG9uQ2xpY2s9e2Nsb3NlTWVudX0+QWNjdWVpbDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiIG9uQ2xpY2s9e2Nsb3NlTWVudX0+Rm9ydW08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuU2VlRGFzaGJvYXJkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZG1pblwiIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC81MCBweC00IHB5LTIgbWQ6cHgtMiBtZDpweS0wLjUgaG92ZXI6YmctdmlraW5nLWdvbGQgaG92ZXI6dGV4dC1ibGFjayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIiBvbkNsaWNrPXtjbG9zZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zZWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogU0VDVElPTiBVVElMSVNBVEVVUiAoQ29ubmV4aW9uIC8gRMOpY29ubmV4aW9uKSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC02IG1kOmdhcC00IG1kOmJvcmRlci1sIGJvcmRlci1zdG9uZS03MDAgbWQ6cGwtNiBtdC04IG1kOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyF0b2tlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LXNtIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXIgaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uXCIgb25DbGljaz17Y2xvc2VNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmV4aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwiYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBweC04IHB5LTMgbWQ6cHgtNCBtZDpweS0xLjUgdGV4dC14bCBtZDp0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LWxnXCIgb25DbGljaz17Y2xvc2VNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVqb2luZHJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC00IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIGZvbnQtYmxhY2sgaXRhbGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyPy5wc2V1ZG8gfHwgXCJHdWVycmllclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC1bMTBweF0gdGV4dC12aWtpbmctZmlyZSB1cHBlcmNhc2UgZm9udC1ibGFjayBib3JkZXIgYm9yZGVyLXZpa2luZy1maXJlLzMwIHB4LTYgcHktMiBtZDpweC0zIG1kOnB5LTEgaG92ZXI6YmctdmlraW5nLWZpcmUgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1aXR0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FudmFzLCB1c2VGcmFtZSwgdXNlVGhyZWUgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInO1xyXG5pbXBvcnQgeyB1c2VHTFRGLCB1c2VBbmltYXRpb25zLCBDZW50ZXIsIEh0bWwsIHVzZVRleHR1cmUsIFN0YXJzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xyXG5cclxuY29uc3QgTU9ERUxfUEFUSCA9ICcvbW9kZWxzL25pZ2h0X2Z1cnkuZ2xiJztcclxuY29uc3QgVEVYVFVSRV9QQVRIID0gJy90ZXh0dXJlcy9uaWdodF9mdXJ5X3NraW4ud2VicCc7XHJcbmNvbnN0IEFOSU1BVElPTl9OQU1FID0gJ05pZ2h0RnVyeV9hcm1hdHVyZUFjdGlvbic7XHJcblxyXG5mdW5jdGlvbiBEcmFnb25Nb2RlbCh7IHZpdGVzc2VSb3RhdGlvbiwgdml0ZXNzZUFuaW1hdGlvbiwgZmFjdGV1clRhaWxsZSwgLi4ucHJvcHMgfSkge1xyXG4gIGNvbnN0IHsgc2NlbmUsIGFuaW1hdGlvbnMgfSA9IHVzZUdMVEYoTU9ERUxfUEFUSCk7XHJcbiAgY29uc3QgdGV4dHVyZSA9IHVzZVRleHR1cmUoVEVYVFVSRV9QQVRIKTtcclxuICBjb25zdCB7IHZpZXdwb3J0IH0gPSB1c2VUaHJlZSgpOyBcclxuICBcclxuICAvLyBDYWxjdWwgZGUgYmFzZSByZXNwb25zaXZlXHJcbiAgY29uc3QgYmFzZVNjYWxlID0gdmlld3BvcnQud2lkdGggPCA1ID8gMC4zNSA6IDAuODsgXHJcbiAgY29uc3QgZmluYWxTY2FsZSA9IGJhc2VTY2FsZSAqIGZhY3RldXJUYWlsbGU7XHJcblxyXG4gIHRleHR1cmUuZmxpcFkgPSBmYWxzZTtcclxuICB0ZXh0dXJlLmNvbG9yU3BhY2UgPSAnc3JnYic7XHJcblxyXG4gIGNvbnN0IGdyb3VwID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgeyBhY3Rpb25zIH0gPSB1c2VBbmltYXRpb25zKGFuaW1hdGlvbnMsIGdyb3VwKTtcclxuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2NlbmUudHJhdmVyc2UoKGNoaWxkKSA9PiB7XHJcbiAgICAgIGlmIChjaGlsZC5pc01lc2gpIHtcclxuICAgICAgICBjaGlsZC5tYXRlcmlhbC5tYXAgPSB0ZXh0dXJlO1xyXG4gICAgICAgIGNoaWxkLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW3NjZW5lLCB0ZXh0dXJlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9ucyAmJiBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXSkge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdO1xyXG4gICAgICAgIGFjdGlvbi5yZXNldCgpLmZhZGVJbigwLjUpLnBsYXkoKTtcclxuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW2FjdGlvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3Rpb25zICYmIGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdKSB7XHJcbiAgICAgICAgYWN0aW9uc1tBTklNQVRJT05fTkFNRV0udGltZVNjYWxlID0gdml0ZXNzZUFuaW1hdGlvbjtcclxuICAgIH1cclxuICB9LCBbdml0ZXNzZUFuaW1hdGlvbiwgYWN0aW9uc10pO1xyXG5cclxuICBjb25zdCB0b2dnbGVBbmltYXRpb24gPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdO1xyXG4gICAgaWYgKCFhY3Rpb24pIHJldHVybjtcclxuXHJcbiAgICBpZiAoaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgYWN0aW9uLnBhdXNlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjdGlvbi5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICBhY3Rpb24ucGxheSgpOyBcclxuICAgIH1cclxuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICB9O1xyXG5cclxuICB1c2VGcmFtZSgoKSA9PiB7XHJcbiAgICBpZihncm91cC5jdXJyZW50KSBncm91cC5jdXJyZW50LnJvdGF0aW9uLnkgKz0gdml0ZXNzZVJvdGF0aW9uO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHByaW1pdGl2ZSBcclxuICAgICAgcmVmPXtncm91cH0gXHJcbiAgICAgIG9iamVjdD17c2NlbmV9IFxyXG4gICAgICBvbkNsaWNrPXt0b2dnbGVBbmltYXRpb259XHJcbiAgICAgIG9uUG9pbnRlck92ZXI9eygpID0+IGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInfVxyXG4gICAgICBvblBvaW50ZXJPdXQ9eygpID0+IGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ2F1dG8nfVxyXG4gICAgICBzY2FsZT17ZmluYWxTY2FsZX0gXHJcbiAgICAgIHBvc2l0aW9uPXtbMCwgLTEsIDBdfSBcclxuICAgICAgey4uLnByb3BzfSBcclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTmlnaHRGdXJ5U2NlbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3JvdFNwZWVkLCBzZXRSb3RTcGVlZF0gPSB1c2VTdGF0ZSgwLjAwMSk7XHJcbiAgY29uc3QgW2FuaW1TcGVlZCwgc2V0QW5pbVNwZWVkXSA9IHVzZVN0YXRlKDIuNSk7XHJcbiAgY29uc3QgW3NpemVGYWN0b3IsIHNldFNpemVGYWN0b3JdID0gdXNlU3RhdGUoMSk7IFxyXG4gIGNvbnN0IFtjb250cm9sc1Zpc2libGUsIHNldENvbnRyb2xzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0Um90U3BlZWQoMC4wMDEpO1xyXG4gICAgc2V0QW5pbVNwZWVkKDIuNSk7XHJcbiAgICBzZXRTaXplRmFjdG9yKDEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJnLVsjMDUwNTEwXVwiPlxyXG4gICAgICBcclxuICAgICAgPENhbnZhcyBzaGFkb3dzIGNhbWVyYT17eyBwb3NpdGlvbjogWzAsIDIsIDEwXSwgZm92OiA0NSB9fT5cclxuICAgICAgICA8Y29sb3IgYXR0YWNoPVwiYmFja2dyb3VuZFwiIGFyZ3M9e1snIzA1MDUxMCddfSAvPlxyXG4gICAgICAgIDxTdGFycyByYWRpdXM9ezEwMH0gZGVwdGg9ezUwfSBjb3VudD17NTAwMH0gZmFjdG9yPXs0fSBzYXR1cmF0aW9uPXswfSBmYWRlIHNwZWVkPXsxfSAvPlxyXG4gICAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXszfSAvPlxyXG4gICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IHBvc2l0aW9uPXtbMTAsIDEwLCA1XX0gaW50ZW5zaXR5PXs0fSAvPlxyXG4gICAgICAgIDxzcG90TGlnaHQgcG9zaXRpb249e1stNSwgNSwgMTBdfSBpbnRlbnNpdHk9ezV9IGNvbG9yPVwiI2E4NTVmN1wiIC8+XHJcbiAgICAgICAgPHNwb3RMaWdodCBwb3NpdGlvbj17WzAsIDUsIC0xMF19IGludGVuc2l0eT17NX0gY29sb3I9XCIjZmZmZmZmXCIgLz5cclxuXHJcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8SHRtbCBjZW50ZXI+PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteHMgYW5pbWF0ZS1wdWxzZVwiPkludm9jYXRpb24uLi48L2Rpdj48L0h0bWw+fT5cclxuICAgICAgICAgIDxDZW50ZXIgdG9wPlxyXG4gICAgICAgICAgICA8RHJhZ29uTW9kZWwgXHJcbiAgICAgICAgICAgICAgICB2aXRlc3NlUm90YXRpb249e3JvdFNwZWVkfSBcclxuICAgICAgICAgICAgICAgIHZpdGVzc2VBbmltYXRpb249e2FuaW1TcGVlZH1cclxuICAgICAgICAgICAgICAgIGZhY3RldXJUYWlsbGU9e3NpemVGYWN0b3J9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DZW50ZXI+XHJcbiAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgPC9DYW52YXM+XHJcblxyXG4gICAgICB7Lyog8J+Om++4jyBCT1VUT04gVE9HR0xFIChNb2JpbGUgdW5pcXVlbWVudCkgKi99XHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29udHJvbHNWaXNpYmxlKCFjb250cm9sc1Zpc2libGUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgei0yMCBiZy1ibGFjay82MCBiYWNrZHJvcC1ibHVyIHRleHQtdmlraW5nLWdvbGQgcC0zIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIG1kOmhpZGRlbiBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tdHJhbnNmb3JtXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtjb250cm9sc1Zpc2libGUgPyAn4pyVJyA6ICfimpnvuI8nfVxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHsvKiDwn46b77iPIFVJIFBBTk5FQVUgREUgQ09OVFLDlExFICovfVxyXG4gICAgICB7LyogTU9ESUYgRVJHT05PTUlRVUUgOiBcclxuICAgICAgICAgIC0gTW9iaWxlIDogXCJib3R0b20tMCB3LWZ1bGwgcm91bmRlZC10LTJ4bFwiIChnbGlzc2UgZHUgYmFzKVxyXG4gICAgICAgICAgLSBEZXNrdG9wIDogXCJ0b3AtNCByaWdodC00IHctNjQgcm91bmRlZC14bFwiIChmbG90dGUgZW4gaGF1dCDDoCBkcm9pdGUpXHJcbiAgICAgICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YFxyXG4gICAgICAgIGFic29sdXRlIHotMTAgYmctYmxhY2svODAgYmFja2Ryb3AtYmx1ci1tZCB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItYmx1ZS01MDAvMzAgc2hhZG93LTJ4bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcclxuICAgICAgICBcclxuICAgICAgICAvKiBTdHlsZXMgTW9iaWxlIChCb3R0b20gU2hlZXQpICovXHJcbiAgICAgICAgYm90dG9tLTAgbGVmdC0wIHctZnVsbCByb3VuZGVkLXQtMnhsIHAtNiBwYi04XHJcbiAgICAgICAgJHtjb250cm9sc1Zpc2libGUgPyAndHJhbnNsYXRlLXktMCBvcGFjaXR5LTEwMCcgOiAndHJhbnNsYXRlLXktZnVsbCBvcGFjaXR5LTAgcG9pbnRlci1ldmVudHMtbm9uZSd9XHJcblxyXG4gICAgICAgIC8qIFN0eWxlcyBEZXNrdG9wIChGbG9hdGluZyBCb3gpICovXHJcbiAgICAgICAgbWQ6Ym90dG9tLWF1dG8gbWQ6bGVmdC1hdXRvIG1kOnRvcC00IG1kOnJpZ2h0LTQgbWQ6dy02NCBtZDpyb3VuZGVkLXhsIG1kOnAtNCBtZDpwYi00XHJcbiAgICAgICAgbWQ6dHJhbnNsYXRlLXktMCBtZDpvcGFjaXR5LTEwMCBtZDpwb2ludGVyLWV2ZW50cy1hdXRvXHJcbiAgICAgIGB9PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTQgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzEwIHBiLTJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmx1ZS0zMDAgZm9udC1ib2xkIHRleHQtc20gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICBQYXJhbcOodHJlc1xyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICB7LyogQm91dG9uIHJlc2V0IGRpc2NyZXQgKi99XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNDAwIGhvdmVyOnRleHQtd2hpdGUgdXBwZXJjYXNlIGZvbnQtYm9sZCB1bmRlcmxpbmUgZGVjb3JhdGlvbi1kb3R0ZWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBSZXNldFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIENPTlRST0xFUyBDT01QQUNUUyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICB7LyogMS4gVGFpbGxlICovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTEgdGV4dC1zdG9uZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UYWlsbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi00MDAgZm9udC1tb25vXCI+eHtzaXplRmFjdG9yLnRvRml4ZWQoMSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgbWluPVwiMC4xXCIgbWF4PVwiM1wiIHN0ZXA9XCIwLjFcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2l6ZUZhY3Rvcn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRTaXplRmFjdG9yKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLjUgYmctc3RvbmUtNzAwIHJvdW5kZWQtbGcgYXBwZWFyYW5jZS1ub25lIGN1cnNvci1wb2ludGVyIGFjY2VudC1ncmVlbi01MDBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogMi4gUm90YXRpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgbWItMSB0ZXh0LXN0b25lLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlZpdGVzc2UgUm90YXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCBmb250LW1vbm9cIj57KHJvdFNwZWVkICogMTAwMCkudG9GaXhlZCgwKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMC4wNVwiIHN0ZXA9XCIwLjAwMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3RTcGVlZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRSb3RTcGVlZChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMS41IGJnLXN0b25lLTcwMCByb3VuZGVkLWxnIGFwcGVhcmFuY2Utbm9uZSBjdXJzb3ItcG9pbnRlciBhY2NlbnQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogMy4gQW5pbWF0aW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTEgdGV4dC1zdG9uZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5WaXRlc3NlIEFuaW1hdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS00MDAgZm9udC1tb25vXCI+eHthbmltU3BlZWQudG9GaXhlZCgxKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiNVwiIHN0ZXA9XCIwLjFcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW5pbVNwZWVkfSBvbkNoYW5nZT17KGUpID0+IHNldEFuaW1TcGVlZChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMS41IGJnLXN0b25lLTcwMCByb3VuZGVkLWxnIGFwcGVhcmFuY2Utbm9uZSBjdXJzb3ItcG9pbnRlciBhY2NlbnQtcHVycGxlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbnVzZUdMVEYucHJlbG9hZChNT0RFTF9QQVRIKTtcclxudXNlVGV4dHVyZS5wcmVsb2FkKFRFWFRVUkVfUEFUSCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOaWdodEZ1cnlTY2VuZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTdGFyUmF0aW5nID0gKHsgYXJ0aWNsZUlkLCBjdXJyZW50UmF0aW5nLCBvblJhdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyYXRpbmcsIHNldFJhdGluZ10gPSB1c2VTdGF0ZShjdXJyZW50UmF0aW5nIHx8IDApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJhdGluZyA9IChzY29yZSkgPT4ge1xyXG4gICAgICAgIHNldFJhdGluZyhzY29yZSk7XHJcbiAgICAgICAgb25SYXRlKHNjb3JlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTFcIj5cclxuICAgICAgICAgICAge1sxLCAyLCAzLCA0LCA1XS5tYXAoKHN0YXIpID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3N0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB0ZXh0LTN4bCBzdXIgbW9iaWxlIHBvdXIgZmFjaWxpdGVyIGxlIGNsaWMsIG1kOnRleHQtMnhsIHN1ciBkZXNrdG9wXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWpvdXQgZGUgYWN0aXZlOnNjYWxlLTEyNSBwb3VyIHVuIGVmZmV0IFwicG9wXCIgYXUgdG91Y2hlclxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtM3hsIG1kOnRleHQtMnhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgYWN0aXZlOnNjYWxlLTEyNSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFyIDw9IChob3ZlciB8fCByYXRpbmcpID8gXCJ0ZXh0LXZpa2luZy1nb2xkIGRyb3Atc2hhZG93LW1kXCIgOiBcInRleHQtc3RvbmUtNjAwXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSYXRpbmcoc3Rhcil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcihzdGFyKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyKHJhdGluZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2BEb25uZXIgJHtzdGFyfSDDqXRvaWxlKHMpYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDimIVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFyUmF0aW5nOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBWaWtpbmdQbGF5ZXIgPSAoeyBzcmMsIGF1dG9QbGF5ID0gZmFsc2UgfSkgPT4ge1xyXG4gICAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGltZSwgc2V0Q3VycmVudFRpbWVdID0gdXNlU3RhdGUoXCIwOjAwXCIpO1xyXG4gICAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZShcIjA6MDBcIik7XHJcbiAgICBjb25zdCBbaXNCbG9ja2VkLCBzZXRJc0Jsb2NrZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBOb3V2ZWF1IHN0YXRlIHBvdXIgZMOpdGVjdGVyIGxlIGJsb2NhZ2VcclxuXHJcbiAgICAvLyBHZXN0aW9uIGRlIGwnQXV0b3BsYXlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dG9QbGF5ICYmIGF1ZGlvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGxheVByb21pc2UgPSBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgaWYgKHBsYXlQcm9taXNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHBsYXlQcm9taXNlXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWNjw6hzIDogTGUgbmF2aWdhdGV1ciBhIGF1dG9yaXPDqSBsJ2F1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNCbG9ja2VkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIMOJY2hlYyA6IExlIG5hdmlnYXRldXIgYSBibG9xdcOpIGwnYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRvcGxheSBibG9xdcOpIChpbnRlcmFjdGlvbiByZXF1aXNlKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNCbG9ja2VkKHRydWUpOyAvLyBPbiBzaWduYWxlIHF1J2lsIGZhdXQgdW5lIGFjdGlvbiBtYW51ZWxsZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F1dG9QbGF5LCBzcmNdKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgICAgICBzZXRJc0Jsb2NrZWQoZmFsc2UpOyAvLyBTaSBsJ3V0aWxpc2F0ZXVyIGNsaXF1ZSwgbGUgYmxvY2FnZSBzYXV0ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRpbWVVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWU7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0b3RhbCkge1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzcygoY3VycmVudCAvIHRvdGFsKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUaW1lKGZvcm1hdFRpbWUoY3VycmVudCkpO1xyXG4gICAgICAgICAgICBzZXREdXJhdGlvbihmb3JtYXRUaW1lKHRvdGFsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWVrID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IGUudGFyZ2V0LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrWCA9IGUubmF0aXZlRXZlbnQub2Zmc2V0WDtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGF1ZGlvUmVmLmN1cnJlbnQuZHVyYXRpb247XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAoY2xpY2tYIC8gd2lkdGgpICogZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmb3JtYXRUaW1lID0gKHRpbWUpID0+IHtcclxuICAgICAgICBpZiAoIXRpbWUgfHwgaXNOYU4odGltZSkpIHJldHVybiBcIjA6MDBcIjtcclxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgICAgICAgY29uc3Qgc2VjID0gTWF0aC5mbG9vcih0aW1lICUgNjApO1xyXG4gICAgICAgIHJldHVybiBgJHttaW59OiR7c2VjIDwgMTAgPyAnMCcgKyBzZWMgOiBzZWN9YDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gVmlzdWFsaXNldXIgYW5pbcOpXHJcbiAgICBjb25zdCBiYXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMzAgfSkubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAga2V5PXtpfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xIG14LVsxcHhdIHJvdW5kZWQtdCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtpc1BsYXlpbmcgPyAnYmctdmlraW5nLWdvbGQgYW5pbWF0ZS1iYXInIDogJ2JnLXN0b25lLTcwMCBoLTEnfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IGAke01hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjR9c2AsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGlzUGxheWluZyA/ICcxMDAlJyA6ICcxMCUnIFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gTU9ESUYgOiBteS00IHN1ciBtb2JpbGUsIG15LTggc3VyIGRlc2t0b3AsIHAtNCBzdXIgbW9iaWxlLCBwLTYgc3VyIGRlc2t0b3BcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGwgbXgtYXV0byBteS00IG1kOm15LTggYmctYmxhY2svODAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCByb3VuZGVkLWxnIHAtNCBtZDpwLTYgc2hhZG93LVswXzBfMzBweF9yZ2JhKDAsMCwwLDAuOCldIGJhY2tkcm9wLWJsdXItc20gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogTWVzc2FnZSBzaSBibG9xdcOpICovfVxyXG4gICAgICAgICAgICB7aXNCbG9ja2VkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ibGFjay84MCB6LTIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGFuaW1hdGUtZmFkZS1pbiBwLTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHRleHQteHMgc3VyIG1vYmlsZSwgdGV4dC1iYXNlIHN1ciBkZXNrdG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBtZDpweC02IG1kOnB5LTMgYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMTIsMTc1LDU1LDAuNildIHRleHQteHMgbWQ6dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDwn5SKIEFjdGl2ZXIgbCdBbWJpYW5jZSBTb25vcmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGF1ZGlvIFxyXG4gICAgICAgICAgICAgICAgcmVmPXthdWRpb1JlZn0gXHJcbiAgICAgICAgICAgICAgICBzcmM9e3NyY30gXHJcbiAgICAgICAgICAgICAgICBvblRpbWVVcGRhdGU9e2hhbmRsZVRpbWVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkVuZGVkPXsoKSA9PiBzZXRJc1BsYXlpbmcoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgb25Mb2FkZWRNZXRhZGF0YT17KGUpID0+IHNldER1cmF0aW9uKGZvcm1hdFRpbWUoZS50YXJnZXQuZHVyYXRpb24pKX0gLy8gQ2hhcmdlIGxhIGR1csOpZSBkw6hzIGxlIGTDqWJ1dFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogZ2FwLTQgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBtZDpnYXAtNiByZWxhdGl2ZSB6LTEwXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogQm91dG9uIFBsYXkvUGF1c2UgKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB3LTEyIGgtMTIgc3VyIG1vYmlsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTIgaC0xMiBtZDp3LTE0IG1kOmgtMTQgZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke2lzUGxheWluZyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIHNoYWRvdy1bMF8wXzE1cHhfcmdiYSgyMTIsMTc1LDU1LDAuNSldJyA6ICd0ZXh0LXZpa2luZy1nb2xkIGhvdmVyOmJnLXZpa2luZy1nb2xkLzIwJ31gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1BsYXlpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNSBtZDp3LTYgbWQ6aC02XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00elwiLz48L3N2Zz4gXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01IG1kOnctNiBtZDpoLTYgdHJhbnNsYXRlLXgtMC41XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTggNXYxNGwxMS03elwiLz48L3N2Zz4gXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBJbmZvICYgVmlzdWFsaXNldXIgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC1bOXB4XSBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1bOXB4XSBtZDp0ZXh0LVsxMHB4XSB0ZXh0LXZpa2luZy1nb2xkIGZvbnQtbW9ubyBtYi0yIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3Qgb3BhY2l0eS04MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y3VycmVudFRpbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCI+e2lzUGxheWluZyA/IFwiTGVjdHVyZS4uLlwiIDogXCJQYXVzZVwifTwvc3Bhbj4gey8qIE1hc3F1w6kgc3VyIHRyw6hzIHBldGl0IMOpY3JhbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2R1cmF0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFpvbmUgVmlzdWFsaXNldXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogaC04IHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTggbWQ6aC0xMCBmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBtYi0zIG92ZXJmbG93LWhpZGRlbiBvcGFjaXR5LTgwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtiYXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogQmFycmUgZGUgcHJvZ3Jlc3Npb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xLjUgYmctc3RvbmUtODAwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZSBncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLXZpa2luZy1nb2xkIHJvdW5kZWQtZnVsbCByZWxhdGl2ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAgZWFzZS1saW5lYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdy0zIGgtMyBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHNoYWRvdyBzY2FsZS0wIGdyb3VwLWhvdmVyOnNjYWxlLTEwMCB0cmFuc2l0aW9uLWFsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWtpbmdQbGF5ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgRGF0YVByb3ZpZGVyU3BhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRhUHJvdmlkZXJTcGFjZSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFydGljbGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm0nO1xyXG5cclxuY29uc3QgQWRtaW5EYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJ3N0YXRzJyk7XHJcbiAgICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGxldCBjdXJyZW50VXNlciA9IG51bGw7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY3VycmVudFVzZXIgPSB0b2tlbiA/IGp3dERlY29kZSh0b2tlbikgOiBudWxsO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgZGUgZMOpY29kYWdlIGR1IHRva2VuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvbGVzID0gY3VycmVudFVzZXI/LnJvbGVzIHx8IFtdO1xyXG4gICAgY29uc3QgaXNGdWxsQWRtaW4gPSByb2xlcy5pbmNsdWRlcygnUk9MRV9BRE1JTicpO1xyXG4gICAgY29uc3QgaXNQcm92aWRlciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0ZPVVJOSVNTRVVSJykgfHwgaXNGdWxsQWRtaW47XHJcbiAgICBjb25zdCBpc0Rlc2lnbmVyID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfREVTSUdORVInKSB8fCBpc0Z1bGxBZG1pbjtcclxuICAgIGNvbnN0IGlzRWRpdG9yID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfRURJVEVVUicpIHx8IGlzRnVsbEFkbWluO1xyXG5cclxuICAgIGNvbnN0IGxvYWRTdGF0cyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaCgnL2FwaS9hZG1pbi9zdGF0cycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJBY2PDqHMgcmVmdXPDqSBwYXIgbGUgR3JhbmQgQ29uc2VpbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihqc29uID0+IHNldERhdGEoanNvbikpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBzZXRFcnJvcihlcnIubWVzc2FnZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRTdGF0cygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUFydGljbGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKFwiw4p0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgYnLDu2xlciBjZSBwYXJjaGVtaW4gZMOpZmluaXRpdmVtZW50ID9cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHByZXYgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZW1lbnRBcnRpY2xlczogcHJldi5tYW5hZ2VtZW50QXJ0aWNsZXMuZmlsdGVyKGFydCA9PiBhcnQuaWQgIT09IGlkKVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBJbXBvc3NpYmxlIGRlIHN1cHByaW1lciAoRHJvaXRzIGluc3VmZmlzYW50cyA/KVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIHNlcnZldXIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRWRpdFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdGluZ0lkKG51bGwpO1xyXG4gICAgICAgIGxvYWRTdGF0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByb21vdGUgPSBhc3luYyAodXNlcklkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9hZG1pbi91c2VyLyR7dXNlcklkfS9wcm9tb3RlYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFVzZXJzOiBkYXRhLmFsbFVzZXJzLm1hcCh1ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1LmlkID09PSB1c2VySWQgPyB7IC4uLnUsIHJvbGVzOiB1cGRhdGVkRGF0YS5uZXdSb2xlcyB9IDogdVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7IFxyXG4gICAgICAgICAgICBhbGVydChcIkVycmV1ciBsb3JzIGR1IGNoYW5nZW1lbnQgZGUgcmFuZ1wiKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBwLTEwIHRleHQtY2VudGVyIGZvbnQtZHJhZ29uXCI+e2Vycm9yfTwvZGl2PjtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIHAtMTAgZm9udC1kcmFnb24gYW5pbWF0ZS1wdWxzZSB0ZXh0LWNlbnRlclwiPkFwcGVsIGF1IEdyYW5kIENvbnNlaWwuLi48L2Rpdj47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHAtNCBzdXIgbW9iaWxlLCBwLTYgc3VyIGRlc2t0b3BcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHAtNCBtZDpwLTYgdGV4dC13aGl0ZSBwYi0yMFwiPlxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBUYWlsbGUgZHUgdGl0cmUgcsOpZHVpdGUgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLXBhcmNobWVudCBtYi02IG1kOm1iLTEwIGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8zMCBwYi00IHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIFBhbGFpcyBkJ0FkbWluaXN0cmF0aW9uXHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBwYXIgT25nbGV0cyByZXNwb25zaXZlICovfVxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LXdyYXAgcGVybWV0IGF1eCBib3V0b25zIGRlIHBhc3NlciDDoCBsYSBsaWduZSBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIG1iLTggYm9yZGVyLWIgYm9yZGVyLXN0b25lLTgwMCBwYi00IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdzdGF0cycpfSBjbGFzc05hbWU9e2BmbGV4LWdyb3cgbWQ6ZmxleC1ncm93LTAgcHgtNCBweS0zIG1kOnB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uIHJvdW5kZWQgbWQ6cm91bmRlZC1ub25lICR7YWN0aXZlVGFiID09PSAnc3RhdHMnID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2snIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCd9YH0+VnVlIGQnZW5zZW1ibGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2lzRnVsbEFkbWluICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigndXNlcnMnKX0gY2xhc3NOYW1lPXtgZmxleC1ncm93IG1kOmZsZXgtZ3Jvdy0wIHB4LTQgcHktMyBtZDpweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbiByb3VuZGVkIG1kOnJvdW5kZWQtbm9uZSAke2FjdGl2ZVRhYiA9PT0gJ3VzZXJzJyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrJyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAnfWB9PlBvcHVsYXRpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtpc0VkaXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2FydGljbGVzJyl9IGNsYXNzTmFtZT17YGZsZXgtZ3JvdyBtZDpmbGV4LWdyb3ctMCBweC00IHB5LTMgbWQ6cHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24gcm91bmRlZCBtZDpyb3VuZGVkLW5vbmUgJHthY3RpdmVUYWIgPT09ICdhcnRpY2xlcycgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjaycgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGJvcmRlciBib3JkZXItc3RvbmUtODAwJ31gfT5DaHJvbmlxdWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtpc1Byb3ZpZGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignZGF0YScpfSBjbGFzc05hbWU9e2BmbGV4LWdyb3cgbWQ6ZmxleC1ncm93LTAgcHgtNCBweS0zIG1kOnB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uIHJvdW5kZWQgbWQ6cm91bmRlZC1ub25lICR7YWN0aXZlVGFiID09PSAnZGF0YScgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjaycgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGJvcmRlciBib3JkZXItc3RvbmUtODAwJ31gfT5Eb25uw6llcyAoQ1NWKTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNEZXNpZ25lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2Rlc2lnbicpfSBjbGFzc05hbWU9e2BmbGV4LWdyb3cgbWQ6ZmxleC1ncm93LTAgcHgtNCBweS0zIG1kOnB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uIHJvdW5kZWQgbWQ6cm91bmRlZC1ub25lICR7YWN0aXZlVGFiID09PSAnZGVzaWduJyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrJyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAnfWB9PkFwcGFyZW5jZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQ09OVEVOVSBEWU5BTUlRVUUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtWzUwMHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogT05HTEVUIFNUQVRTICovfVxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3N0YXRzJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC02IGFuaW1hdGUtaW4gZmFkZS1pbiBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgYm9yZGVyLWwtNCBib3JkZXIteWVsbG93LTYwMCBwLTggc2hhZG93LTJ4bCByb3VuZGVkLXItbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgdGV4dC14cyBmb250LWJsYWNrIHRyYWNraW5nLXdpZGVzdFwiPkd1ZXJyaWVycyBkZSBCZXJrPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIG10LTIgdGV4dC13aGl0ZVwiPntkYXRhLnVzZXJzQ291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgYm9yZGVyLWwtNCBib3JkZXItb3JhbmdlLTcwMCBwLTggc2hhZG93LTJ4bCByb3VuZGVkLXItbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgdGV4dC14cyBmb250LWJsYWNrIHRyYWNraW5nLXdpZGVzdFwiPkNocm9uaXF1ZXMgw6ljcml0ZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gbXQtMiB0ZXh0LXdoaXRlXCI+e2RhdGEuYXJ0aWNsZXNDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogT05HTEVUIFVTRVJTICovfVxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3VzZXJzJyAmJiBpc0Z1bGxBZG1pbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgYW5pbWF0ZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbS00IGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaGVyY2hlciB1biBndWVycmllci4uLlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8yMCBwLTMgcm91bmRlZCB0ZXh0LXNtIHctZnVsbCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmFsbFVzZXJzPy5maWx0ZXIodSA9PiB1LnBzZXVkby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkpLm1hcCh1ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogZmxleC1jb2wgc3VyIG1vYmlsZSBwb3VyIGVtcGlsZXIgcHNldWRvIGV0IGJvdXRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3UuaWR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBwLTQgYmctc3RvbmUtOTAwLzUwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LWxnXCI+e3UucHNldWRvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDAgbXQtMVwiPnt1LnJvbGVzLmpvaW4oJyB8ICcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb21vdGUodS5pZCl9IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gdGV4dC14cyBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzQwIHB4LTQgcHktMiBob3ZlcjpiZy12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24gdXBwZXJjYXNlIGZvbnQtYmxhY2sgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2VyIFJhbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9OR0xFVCBBUlRJQ0xFUyAqL31cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdhcnRpY2xlcycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1mYWRlSW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlZGl0aW5nSWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBwLTQgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdJZChudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oaQPC9zcGFuPiBBbm51bGVyIGxhIG1vZGlmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlRm9ybSBpZD17ZWRpdGluZ0lkfSBvblN1Y2Nlc3M9e2hhbmRsZUVkaXRTdWNjZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXM/Lm1hcChhcnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IGZsZXgtY29sIHN1ciBtb2JpbGUgcG91ciBlbXBpbGVyIHRpdHJlIGV0IGJvdXRvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FydC5pZH0gY2xhc3NOYW1lPVwicC00IGJnLXN0b25lLTkwMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBzbTppdGVtcy1jZW50ZXIgaG92ZXI6Ym9yZGVyLXN0b25lLTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBncm91cCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvYXJ0aWNsZS8ke2FydC5pZH1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdmlraW5nLXBhcmNobWVudCBncm91cC1ob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tY29sb3JzIHRleHQtbGcgYmxvY2sgdHJ1bmNhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFyIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwXCI+e2FydC5hdXRob3J9PC9zcGFuPiDigKIge25ldyBEYXRlKGFydC5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHctZnVsbCBzdXIgbW9iaWxlLCBib3V0b25zIGVuIHBsZWluZSBsYXJnZXVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB3LWZ1bGwgc206dy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0lkKGFydC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBzbTpmbGV4LW5vbmUgcHgtMyBweS0zIHNtOnB5LTIgYmctc3RvbmUtODAwIHRleHQtc3RvbmUtMzAwIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtWzEwcHhdIHVwcGVyY2FzZSBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHRyYW5zaXRpb24gdGV4dC1jZW50ZXIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RpZmllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVBcnRpY2xlKGFydC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBzbTpmbGV4LW5vbmUgcHgtMyBweS0zIHNtOnB5LTIgYmctcmVkLTkwMC8yMCB0ZXh0LXJlZC01MDAgYm9yZGVyIGJvcmRlci1yZWQtOTAwLzUwIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB0cmFuc2l0aW9uIHRleHQtY2VudGVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VwcHJpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyghZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXMgfHwgZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXMubGVuZ3RoID09PSAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGl0YWxpYyB0ZXh0LWNlbnRlciBweS0xMFwiPkF1Y3VuZSBjaHJvbmlxdWUgw6AgZ8OpcmVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgREFUQSAqL31cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdkYXRhJyAmJiBpc1Byb3ZpZGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gem9vbS1pbi05NSBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFQcm92aWRlclNwYWNlIGRhdGFzZXRzPXtkYXRhLmRhdGFzZXRzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogT05HTEVUIERFU0lHTiAoVE9OIE5PVVZFTCBFU1BBQ0UpICovfVxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2Rlc2lnbicgJiYgaXNEZXNpZ25lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluIGZhZGUtaW4gZHVyYXRpb24tNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNpZ25lclNwYWNlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkRhc2hib2FyZDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBBcnRpY2xlUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YCwgeyBoZWFkZXJzOiB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbicgfSB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWdvbGQgZm9udC1kcmFnb24gdGV4dC14bCBtZDp0ZXh0LTJ4bCBweS0yMCBhbmltYXRlLXB1bHNlIHB4LTRcIj5SZWNoZXJjaGUgZGFucyBsZXMgYXJjaGl2ZXMuLi48L2Rpdj47XHJcbiAgICBpZiAoIWFydGljbGUpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWZpcmUgdGV4dC1sZyBtZDp0ZXh0LXhsIHB5LTEwIHB4LTRcIj5BcnRpY2xlIGludHJvdXZhYmxlIGRhbnMgbGVzIGFyY2hpdmVzLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcHgtNCBwb3VyIGxlcyBtYXJnZXMgbGF0w6lyYWxlcyBzdXIgbW9iaWxlXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW4gcHgtNCBwYi0xMlwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNiBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbiB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+4oaQPC9zcGFuPiBSZXRvdXIgYXUgZm9ydW1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIE1PRElGIDogcC01IHN1ciBtb2JpbGUsIHAtOCBzdXIgZGVza3RvcCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTUgbWQ6cC04IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogRMOpY29yYXRpb24gY29pbiA6IHBsdXMgcGV0aXRlIHN1ciBtb2JpbGUgKHctMTIpICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctMTIgaC0xMiBtZDp3LTIwIG1kOmgtMjAgYmctdmlraW5nLWdvbGQgb3BhY2l0eS0xMCByb3VuZGVkLWJsLWZ1bGxcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB0ZXh0LTN4bCBzdXIgbW9iaWxlLCBicmVhay13b3JkcyBwb3VyIMOpdml0ZXIgbGVzIGTDqWJvcmRlbWVudHMgKi99XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi00IGxlYWRpbmctdGlnaHQgYnJlYWstd29yZHMgcmVsYXRpdmUgei0xMCBwci04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LXdyYXAgcG91ciBxdWUgw6dhIHBhc3NlIMOgIGxhIGxpZ25lIHN1ciBsZXMgdHLDqHMgcGV0aXRzIMOpY3JhbnMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXhzIG1kOnRleHQtc20gdGV4dC1zdG9uZS01MDAgbWItNiBtZDptYi04IGJvcmRlci1iIGJvcmRlci1zdG9uZS03MDAgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXZpa2luZy1yZWQgcHgtMiBweS0xIHJvdW5kZWQgdGV4dC13aGl0ZSBmb250LWJvbGQgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC81MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcmNoaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkNyw6nDqSBsZSB7bmV3IERhdGUoYXJ0aWNsZS5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtYmFzZSAoMTZweCkgc3VyIG1vYmlsZSwgdGV4dC1sZyAoMThweCkgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgZm9udC1zZXJpZiB3aGl0ZXNwYWNlLXByZS1saW5lIHRleHQtanVzdGlmeSBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBOb3RlOiBMZXMgYmxvY3MgZXQgY29tbWVudGFpcmVzIG7DqWNlc3NpdGVudCB1bmUgbG9naXF1ZSBwbHVzIHBvdXNzw6llIMOgIGltcGzDqW1lbnRlciBwbHVzIHRhcmQgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5pbXBvcnQgQXJ0aWNsZUZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm1cIjtcclxuXHJcbmNvbnN0IEZvcnVtUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvLyDDiXRhdCBwb3VyIGxlIHRyaVxyXG4gICAgY29uc3QgW3NvcnRPcmRlciwgc2V0U29ydE9yZGVyXSA9IHVzZVN0YXRlKFwibmV3ZXN0XCIpO1xyXG5cclxuICAgIC8vIEdlc3Rpb24gZGUgbGEgbmF2aWdhdGlvbiBpbnRlcm5lXHJcbiAgICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShcImxpc3RcIik7IC8vICdsaXN0JywgJ2NyZWF0ZScsICdlZGl0J1xyXG4gICAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyAxLiBSw6ljdXDDqXJhdGlvbiBldCBkw6ljb2RhZ2UgZHUgVG9rZW5cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIoZGVjb2RlZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYWRnZSAoVG9rZW4pIGludmFsaWRlIG91IGV4cGlyw6lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gUmVjaGFyZ2VyIHF1YW5kIGxlIHRyaSBjaGFuZ2VcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpO1xyXG4gICAgfSwgW3NvcnRPcmRlcl0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoQXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gXCIvYXBpL2FydGljbGVzXCI7XHJcbiAgICAgICAgICAgIC8vIExvZ2lxdWUgZGUgdHJpIEFQSSBQbGF0Zm9ybVxyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvcnRPcmRlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJlc3RfcmF0aW5nXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IFwiP29yZGVyW2F2ZXJhZ2VSYXRpbmddPWRlc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ3b3JzdF9yYXRpbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gXCI/b3JkZXJbYXZlcmFnZVJhdGluZ109YXNjXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib2xkZXN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IFwiP29yZGVyW2NyZWF0ZWRBdF09YXNjXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmV3ZXN0XCI6XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBcIj9vcmRlcltjcmVhdGVkQXRdPWRlc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEFjY2VwdDogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRBcnRpY2xlcyhkYXRhW1wiaHlkcmE6bWVtYmVyXCJdIHx8IGRhdGFbXCJtZW1iZXJcIl0gfHwgW10pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGRlIGxpYWlzb24gYXZlYyBsZSBHcmFuZCBDb25zZWlsXCIsIGVycik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICF3aW5kb3cuY29uZmlybShcclxuICAgICAgICAgICAgICAgIFwiVm91bGV6LXZvdXMgdnJhaW1lbnQgZWZmYWNlciBjZSByw6ljaXQgZGUgbGEgcGllcnJlID9cIixcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKX1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlcyhcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5maWx0ZXIoKGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUlkID0gKGEuaWQgfHwgYVtcIkBpZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhSWQgIT09IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMZXMgZHJhZ29ucyBwcm90w6hnZW50IGNlIHBhcmNoZW1pbiAoRXJyZXVyIGRlIHBlcm1pc3Npb25zKS5cIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJMZSBzZXJ2ZXVyIGVzdCBpbmpvaWduYWJsZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpZXcoXCJsaXN0XCIpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDwn5uh77iPIC0tLSBMT0dJUVVFIERFUyBSw5RMRVMgLS0tXHJcbiAgICBjb25zdCB1c2VyUm9sZXMgPSB1c2VyPy5yb2xlcyB8fCBbXTtcclxuICAgIGNvbnN0IHN1cGVyRWRpdG9ycyA9IFtcclxuICAgICAgICBcIlJPTEVfRURJVEVVUlwiLFxyXG4gICAgICAgIFwiUk9MRV9BRE1JTlwiLFxyXG4gICAgICAgIFwiUk9MRV9ERVNJR05FUlwiLFxyXG4gICAgICAgIFwiUk9MRV9GT1VSTklTU0VVUlwiLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGlzU3VwZXJFZGl0b3IgPSBzdXBlckVkaXRvcnMuc29tZSgocikgPT4gdXNlclJvbGVzLmluY2x1ZGVzKHIpKTtcclxuICAgIGNvbnN0IGlzQXV0aG9yID0gdXNlclJvbGVzLmluY2x1ZGVzKFwiUk9MRV9BVVRFVVJcIik7XHJcbiAgICBjb25zdCBjYW5DcmVhdGUgPSBpc1N1cGVyRWRpdG9yIHx8IGlzQXV0aG9yO1xyXG5cclxuICAgIGlmIChsb2FkaW5nICYmIHZpZXcgPT09IFwibGlzdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS00MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYm9yZGVyLTQgYm9yZGVyLXZpa2luZy1nb2xkIGJvcmRlci10LXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW4gbWItNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LXhsIGFuaW1hdGUtcHVsc2UgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgT3V2ZXJ0dXJlIGRlcyBwYXJjaGVtaW5zLi4uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHB4LTQgcG91ciBsZXMgbWFyZ2VzIG1vYmlsZXNcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgcGItMjBcIj5cclxuICAgICAgICAgICAgey8qIC0tLSBIRUFERVIgLS0tICovfVxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LWNvbCBwb3VyIGVtcGlsZXIgdGl0cmUgZXQgZmlsdHJlcyBzdXIgbW9iaWxlLCBpdGVtcy1zdGFydCBwYXIgZMOpZmF1dCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtZDppdGVtcy1lbmQgbWItOCBtZDptYi0xMiBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMjAgcGItOCBnYXAtNiBtZDpnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBUYWlsbGUgdGl0cmUgYWRhcHTDqWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNnhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLXBhcmNobWVudCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaHJvbmlxdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBpdGFsaWMgdGV4dC1zbSBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExlIHNhdm9pciBkdSB2aWxsYWdlIGRlIEJlcmssIGdyYXbDqSBwb3VyIGwnw6l0ZXJuaXTDqS5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7dmlldyA9PT0gXCJsaXN0XCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGUgcG91ciBxdWUgbGVzIGZpbHRyZXMgcHJlbm5lbnQgdG91dGUgbGEgbGFyZ2V1clxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTQgdy1mdWxsIG1kOnctYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU0VMRUNURVVSIERFIFRSSSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb3J0T3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNvcnRPcmRlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvNTAgdGV4dC12aWtpbmctZ29sZCBweS0zIHB4LTQgcm91bmRlZCBjdXJzb3ItcG9pbnRlciB1cHBlcmNhc2UgdGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgaG92ZXI6Ymctc3RvbmUtOTAwIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV3ZXN0XCI+8J+ThSBQbHVzIFLDqWNlbnRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib2xkZXN0XCI+8J+TnCBQbHVzIEFuY2llbnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiZXN0X3JhdGluZ1wiPvCfjJ8gTWlldXggTm90w6lzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid29yc3RfcmF0aW5nXCI+8J+SgCBNb2lucyBOb3TDqXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog8J+UkiBCT1VUT04gQ1LDiUVSICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuQ3JlYXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJjcmVhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHctZnVsbCBzdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byBiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIHB4LTggcHktMyBmb250LWJsYWNrIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctWzBfMF8yMHB4X3JnYmEoMjEyLDE3NSw1NSwwLjIpXSB1cHBlcmNhc2UgdGV4dC14cyB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgR3JhdmVyIHVuIHLDqWNpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiAtLS0gVlVFUyBGT1JNVUxBSVJFUyAtLS0gKi99XHJcbiAgICAgICAgICAgIHt2aWV3ID09PSBcImNyZWF0ZVwiIHx8IHZpZXcgPT09IFwiZWRpdFwiID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20tNCBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJsaXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb24gdXBwZXJjYXNlIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oaQIFJldG91ciBhdSBtdXIgZGVzIGzDqWdlbmRlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlRm9ybSBpZD17c2VsZWN0ZWRJZH0gb25TdWNjZXNzPXtoYW5kbGVTdWNjZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAvKiAtLS0gVlVFIExJU1RFIERFUyBBUlRJQ0xFUyAtLS0gKi9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTIwIHRleHQtc3RvbmUtNjAwIGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgc2lsZW5jZSByw6hnbmUgc3VyIGxlIG11ci4uLiBBdWN1bmUgY2hyb25pcXVlIG4nYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgw6l0w6kgdHJvdXbDqWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuSWQgPSAoYXJ0aWNsZS5pZCB8fCBhcnRpY2xlW1wiQGlkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiL1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT3duZXIgPSB1c2VyPy5pZCA9PT0gYXJ0aWNsZS5hdXRob3I/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuRWRpdFRoaXMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU3VwZXJFZGl0b3IgfHwgKGlzQXV0aG9yICYmIGlzT3duZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjbGVhbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHAtNSBzdXIgbW9iaWxlLCBwLTggc3VyIGRlc2t0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgYmctc3RvbmUtOTAwLzQwIGJvcmRlci1sLTQgYm9yZGVyLXN0b25lLTgwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHAtNSBtZDpwLTggcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogZmxleC1jb2wgc3VyIG1vYmlsZSBwb3VyIHRpdHJlIGV0IGJvdXRvbnMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgbWItNCBnYXAtNCBtZDpnYXAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IFRhaWxsZSB0aXRyZSBhZGFwdMOpZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgdXBwZXJjYXNlIGxlYWRpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hdmVyYWdlUmF0aW5nICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIHRleHQteHMgbWQ6dGV4dC1zbSBmb250LWJvbGQgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwLzMwIHB4LTIgcHktMC41IHJvdW5kZWQgYmcteWVsbG93LTUwMC8xMCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4piFIHthcnRpY2xlLmF2ZXJhZ2VSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIPCflJIgQk9VVE9OUyBEJ0FDVElPTiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5FZGl0VGhpcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBvcGFjaXR5LTEwMCBzdXIgbW9iaWxlIChjYXIgcGFzIGRlIGhvdmVyKSwgbWQ6b3BhY2l0eS00MCBzdXIgb3JkaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBvcGFjaXR5LTEwMCBtZDpvcGFjaXR5LTQwIG1kOmdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSB3LWZ1bGwgbWQ6dy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZElkKGNsZWFuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJlZGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogZmxleC0xIHN1ciBtb2JpbGUgcG91ciBkZXMgYm91dG9ucyBsYXJnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBtZDpmbGV4LW5vbmUgdGV4dC1jZW50ZXIgdGV4dC1bOXB4XSB1cHBlcmNhc2UgZm9udC1ibGFjayBiZy1zdG9uZS04MDAgdGV4dC1zdG9uZS00MDAgcHgtMyBweS0yIG1kOnB5LTEgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZShjbGVhbklkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIG1kOmZsZXgtbm9uZSB0ZXh0LWNlbnRlciB0ZXh0LVs5cHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIGJnLXJlZC05MDAvMTAgdGV4dC1yZWQtNTAwLzcwIHB4LTMgcHktMiBtZDpweS0xIGJvcmRlciBib3JkZXItcmVkLTkwMC8zMCBob3ZlcjpiZy1yZWQtOTAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1cHByaW1lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC1iYXNlIHN1ciBtb2JpbGUsIHRleHQtbGcgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwIGZvbnQtc2VyaWYgaXRhbGljIHRleHQtYmFzZSBtZDp0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi02IG1kOm1iLTggbWF4LXctM3hsIHRleHQtanVzdGlmeSBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwie2FydGljbGUuc3VtbWFyeX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LWNvbCBzdXIgbW9iaWxlIHBvdXIgbGUgZm9vdGVyIGRlIGNhcnRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBwdC02IGJvcmRlci10IGJvcmRlci1zdG9uZS04MDAvNTAgZ2FwLTQgc206Z2FwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNiBoLVsxcHhdIGJnLXZpa2luZy1nb2xkLzQwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBmb250LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuYXV0aG9yPy5wc2V1ZG8gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuYXV0aG9yPy51c2VybmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHdWVycmllciBkZSBsJ29tYnJlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2FydGljbGUvJHtjbGVhbklkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZmlyZSBmb250LWJsYWNrIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBzZWxmLWVuZCBzbTpzZWxmLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN1bHRlciBsZSBwYXJjaGVtaW57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPuKGkjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ydW1QYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmlnaHRGdXJ5U2NlbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmlnaHRGdXJ5XCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gQUpPVVQgOiBweC00IHBvdXIgw6l2aXRlciBxdWUgbGUgY29udGVudSB0b3VjaGUgbGVzIGJvcmRzIHN1ciBtb2JpbGVcclxuICAgICAgICAvLyBNT0RJRiA6IHB5LTggc3VyIG1vYmlsZSwgcHktMTYgc3VyIG9yZGluYXRldXJcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTggbWQ6cHktMTYgcHgtNCBhbmltYXRlLWZhZGUtaW4tdXBcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IFRhaWxsZSBkdSB0ZXh0ZSBwcm9ncmVzc2l2ZSAoNHhsIC0+IDZ4bCAtPiA4eGwpICovfVxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgc206dGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1kcmFnb24gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXZpa2luZy1nb2xkIHZpYS15ZWxsb3ctNTAwIHRvLXZpa2luZy1nb2xkIG1iLTYgbWQ6bWItOCBkcm9wLXNoYWRvdy1zbSBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICBCaWVudmVudWUgZGFucyBsJ0FudHJlXHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgbWQ6dy0yNCBoLTEgYmctdmlraW5nLXJlZCBteC1hdXRvIG1iLTYgbWQ6bWItOCByb3VuZGVkLWZ1bGwgc2hhZG93LVswXzBfMTBweF8jZGMyNjI2XVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogVGFpbGxlIGR1IHRleHRlIHBsdXMgbGlzaWJsZSBzdXIgbW9iaWxlICh0ZXh0LWJhc2UgLT4gdGV4dC0yeGwpICovfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyBtZDp0ZXh0LTJ4bCB0ZXh0LXZpa2luZy1saWdodCBtYi04IG1kOm1iLTEyIG1heC13LTN4bCBteC1hdXRvIGZvbnQtc2VyaWYgaXRhbGljIGxlYWRpbmctcmVsYXhlZCBweC0yXCI+XHJcbiAgICAgICAgICAgICAgICBcIsOHYSwgYydlc3QgQmV1cmsuIMOAIGRvdXplIGpvdXJzIGF1IG5vcmQgZHUgRMOpc2VzcG9pciwgZXRcclxuICAgICAgICAgICAgICAgIHF1ZWxxdWVzIGRlZ3LDqXMgYXUgc3VkIGQndW4gRnJvaWQtZGUtY2FuYXJkLiBBbmNyw6kgc29saWRlbWVudFxyXG4gICAgICAgICAgICAgICAgc3VyIGxlIE3DqXJpZGllbiBkZSBsYSBNaXPDqHJlLiBNb24gdmlsbGFnZS4uLiBFbiB1biBtb3QsIGJhbGFpc2UuXHJcbiAgICAgICAgICAgICAgICBFdCBzZXB0IGfDqW7DqXJhdGlvbnMgeSBvbnQgZMOpasOgIHZ1IGxlIGpvdXIsIHBvdXJ0YW50LCB0b3V0ZXMgbGVzXHJcbiAgICAgICAgICAgICAgICBtYWlzb25zIHNvbnQgbmV1dmVzLiBCZXVyayA6IHNhIHDDqmNoZSwgc2EgY2hhc3NlLCBldCBzZXNcclxuICAgICAgICAgICAgICAgIG1lcnZlaWxsZXV4IGNvdWNoZXJzIGRlIHNvbGVpbC4gTGEgc2V1bGUgZmF1c3NlIG5vdGUgYydlc3QgbGVzXHJcbiAgICAgICAgICAgICAgICBiZXN0aW9sZXMuIEFpbGxldXJzLCBsZXMgZ2VucyBvbnQgZGVzIHNvdXJpcyBvdSBkZXMgbW91c3RpcXVlcy5cclxuICAgICAgICAgICAgICAgIE5vdXMgb24gYSBkZXMuLi4gZHJhZ29ucy5cIlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMCByb3VuZGVkLTJ4bCBib3JkZXItNCBib3JkZXItc3RvbmUtNzAwIHNoYWRvdy0yeGwgb3ZlcmZsb3ctaGlkZGVuIG1iLTggbWQ6bWItMTJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IEhhdXRldXIgYWRhcHRhdGl2ZSAhIFxyXG4gICAgICAgICAgICAgICAgICAgIDMwMHB4IHN1ciBtb2JpbGUgKGgtWzMwMHB4XSlcclxuICAgICAgICAgICAgICAgICAgICA0MDBweCBzdXIgdGFibGV0dGUgKHNtOmgtWzQwMHB4XSlcclxuICAgICAgICAgICAgICAgICAgICA2MDBweCBzdXIgb3JkaW5hdGV1ciAobGc6aC1bNjAwcHhdKSBcclxuICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVszMDBweF0gc206aC1bNDAwcHhdIGxnOmgtWzYwMHB4XSB3LWZ1bGwgcmVsYXRpdmUgYmctYmxhY2sgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmlnaHRGdXJ5U2NlbmUgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTAgdy1mdWxsIHRleHQtY2VudGVyIHRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LWdyYXktNDAwIHBvaW50ZXItZXZlbnRzLW5vbmUgei0xMCBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsaXF1ZXogc3VyIGxlIGRyYWdvbiAob3UgdG91Y2hlei1sZSlcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IGZsZXgtY29sIHBvdXIgZW1waWxlciBsZXMgYm91dG9ucyBzdXIgbW9iaWxlLCBmbGV4LXJvdyBzdXIgb3JkaSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGdhcC00IG1kOmdhcC02IHctZnVsbCBtYXgtdy1tZCBtZDptYXgtdy1ub25lIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvZm9ydW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGUgcG91ciBmYWNpbGl0ZXIgbGUgY2xpYywgdy1hdXRvIHN1ciBvcmRpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgdy1mdWxsIG1kOnctYXV0byBweC04IHB5LTQgYmctdmlraW5nLXJlZCBob3ZlcjpiZy1yZWQtOTAwIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCB0ZXh0LXdoaXRlIGZvbnQtZHJhZ29uIHRleHQtbGcgbWQ6dGV4dC14bCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMjIwLDM4LDM4LDAuNSldIGFjdGl2ZTpzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiPkFjY8OpZGVyIGF1IEZvcnVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUvMjAgdG8tdHJhbnNwYXJlbnQgLXRyYW5zbGF0ZS14LWZ1bGwgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi03MDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL3N0YXRpc3RpcXVlXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHctZnVsbCBzdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctYXV0byBweC04IHB5LTQgYmctdmlraW5nLXJvY2sgaG92ZXI6Ymctc3RvbmUtNzAwIGJvcmRlci0yIGJvcmRlci1zdG9uZS01MDAgdGV4dC12aWtpbmctbGlnaHQgaG92ZXI6dGV4dC13aGl0ZSBmb250LWRyYWdvbiB0ZXh0LWxnIG1kOnRleHQteGwgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBWb2lyIGxlcyBTdGF0c1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RXJyb3IoJycpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luX2NoZWNrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLCBcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQgXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rICYmIGRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2ZvcnVtJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKCdJZGVudGlmaWFudHMgaW5jb3JyZWN0cy4gTGVzIGRyYWdvbnMgbmUgdm91cyByZWNvbm5haXNzZW50IHBhcy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcignRXJyZXVyIGRlIGNvbm5leGlvbiBhdSBzZXJ2ZXVyLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHB4LTQgcG91ciDDqXZpdGVyIHF1ZSDDp2EgdG91Y2hlIGxlcyBib3JkcyBzdXIgbW9iaWxlXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBwLTYgZXQgbXQtNCBzdXIgbW9iaWxlLCBwLTEwIGV0IG10LTEwIHN1ciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctdmlraW5nLXJvY2sgcC02IG1kOnAtMTAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgbXQtNCBtZDptdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC0yeGwgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgbWQ6bWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5Db25uZXhpb248L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcmVkIHRleHQtc20gbWItNCBpdGFsaWMgdGV4dC1jZW50ZXIgZm9udC1ib2xkIGFuaW1hdGUtcHVsc2VcIj57ZXJyb3J9PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBzcGFjZS15LTQgc3VyIG1vYmlsZSAocGx1cyBjb21wYWN0KSAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMiB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIGR1IEd1ZXJyaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtYmFzZSBwb3VyIMOpdml0ZXIgbGUgem9vbSBpT1MgYXV0b21hdGlxdWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtMyBtZDpwLTQgdGV4dC1iYXNlIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4ZW1wbGVAYmVyay5mclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG1iLTIgdGV4dC12aWtpbmctcGFyY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3QgZGUgcGFzc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIG1kOnAtNCB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBweS0zIHN1ciBtb2JpbGUgcG91ciBnYWduZXIgZGUgbGEgcGxhY2UsIHB5LTQgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayBweS0zIG1kOnB5LTQgdXBwZXJjYXNlIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1IHRleHQtc20gbWQ6dGV4dC1iYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmVuZHJlIHNvbiBlbnZvbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwbGFpblBhc3N3b3JkOiAnJyxcclxuICAgICAgICByb2xlOiAnUk9MRV9VU0VSJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRFcnJvcignJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9yZWdpc3RlcicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZGlyaWdlIHZlcnMgbCdhY2N1ZWlsIG91IGxlIGxvZ2luIGFwcsOocyBzdWNjw6hzXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgnLycpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJFcnJldXIgbG9ycyBkZSBsJ2luc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwiSW1wb3NzaWJsZSBkZSBjb250YWN0ZXIgbGUgR3JhbmQgU2NyaWJlIChFcnJldXIgcsOpc2VhdSlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcHgtNCBwb3VyIMOpdml0ZXIgcXVlIGxhIGNhcnRlIHRvdWNoZSBsZXMgYm9yZHMgc3VyIG1vYmlsZVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCB3LWZ1bGwgcGItMTBcIj5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogcC02IGV0IG10LTQgc3VyIG1vYmlsZSwgcC04IGV0IG10LTEwIHN1ciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctdmlraW5nLXJvY2svOTAgcC02IG1kOnAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCBzaGFkb3ctMnhsIGJhY2tkcm9wLWJsdXItc20gbXQtNCBtZDptdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC0yeGwgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgbWQ6bWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVqb2luZHJlIGxhIEd1aWxkZVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC05MDAvNDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTIwMCBwLTMgcm91bmRlZCBtYi02IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBzcGFjZS15LTQgc3VyIG1vYmlsZSBwb3VyIGNvbXBhY3RlciAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTk9NIEQnVVRJTElTQVRFVVIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Ob20gZGUgY29kZSAoUHNldWRvKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtYmFzZSBldCBwLTMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBLcm9rbW91XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRU1BSUwgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5FbWFpbCBkZSBjb250YWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZpa2luZ0BiZXJrLmZyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUsOUTEUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5SYW5nIGF1IHNlaW4gZGUgbGEgR3VpbGRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogcC0zIGV0IHRleHQtYmFzZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCByb2xlOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9VU0VSXCI+QWJvbm7DqSAoTGVjdGV1cik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0FVVEVVUlwiPkF1dGV1ciAoTmFycmF0ZXVyKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfRURJVEVVUlwiPsOJZGl0ZXVyIChHYXJkaWVuKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfREVTSUdORVJcIj5EZXNpZ25ldXIgKEFydGlzYW4pPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9GT1VSTklTU0VVUlwiPkZvdXJuaXNzZXVyIGRlIGRvbm7DqWVzIChTY3JpYmUpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9BRE1JTlwiPkFkbWluaXN0cmF0ZXVyIChDaGVmIGRlIGxhIEd1aWxkZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNT1QgREUgUEFTU0UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Nb3QgZGUgcGFzc2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wbGFpblBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHBsYWluUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogcHktMyBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtdmlraW5nLWRhcmsgZm9udC1leHRyYWJvbGQgcHktMyBtZDpweS00IHJvdW5kZWQgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBzaGFkb3ctbGcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG10LTQgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR3JhdmVyIG1vbiBub21cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENoYXJ0IGFzIENoYXJ0SlMsIENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kLCBBcmNFbGVtZW50LCBQb2ludEVsZW1lbnQsIExpbmVFbGVtZW50LFxyXG59IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IHsgQmFyLCBEb3VnaG51dCwgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kLCBBcmNFbGVtZW50LCBQb2ludEVsZW1lbnQsIExpbmVFbGVtZW50KTtcclxuXHJcbmNvbnN0IFN0YXRzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbYm94T2ZmaWNlRGF0YSwgc2V0Qm94T2ZmaWNlRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcG9wdWxhdGlvbkRhdGEsIHNldFBvcHVsYXRpb25EYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0aW1lbGluZURhdGEsIHNldFRpbWVsaW5lRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgbG9hZENTViA9ICh1cmwsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKHIgPT4gci5vayA/IHIudGV4dCgpIDogbnVsbClcclxuICAgICAgLnRoZW4odHh0ID0+IHtcclxuICAgICAgICBpZighdHh0KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSB0eHQudHJpbSgpLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICBpZiAobGluZXMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBsaW5lc1swXS5zcGxpdCgnOycpLm1hcChoID0+IGgudHJpbSgpKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gbGluZXMuc2xpY2UoMSkubWFwKGwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWxzID0gbC5zcGxpdCgnOycpLm1hcCh2ID0+IHYudHJpbSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+ICh7Li4uYWNjLCBbaF06IHZhbHNbaV19KSwge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCkgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9ib3hfb2ZmaWNlLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldEJveE9mZmljZURhdGEoe1xyXG4gICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydGaWxtJ10pLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdNJCcsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnQm94IE9mZmljZSAoTWlsbGlvbnMgJCknXSkpLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyM3ZjFkMWQnLCAnI2RjMjYyNicsICcjZDk3NzA2J10sXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyMyOTI1MjQnLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgICAgICB9XVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2JlcmtfcG9wdWxhdGlvbi5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBzZXRQb3B1bGF0aW9uRGF0YSh7XHJcbiAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0dyb3VwZSddKSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydQb3B1bGF0aW9uJ10pKSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjZDk3NzA2JywgJyM3ZjFkMWQnLCAnIzU3NTM0ZScsICcjYThhMjllJ10sXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyMxYzE5MTcnLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgICAgICB9XVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2RyYWdvbnNfdGltZWxpbmUuY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRUaW1lbGluZURhdGEoe1xyXG4gICAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0FubsOpZSddKSxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ0VzcMOoY2VzJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ0VzcMOoY2VzIFJlY2Vuc8OpZXMnXSkpLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNkOTc3MDYnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIxNywgMTE5LCA2LCAwLjIpJyxcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgdGVuc2lvbjogMC4zLFxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgcGx1Z2luczogeyBsZWdlbmQ6IHsgbGFiZWxzOiB7IGNvbG9yOiAnI2U3ZTVlNCcsIGZvbnQ6IHsgZmFtaWx5OiAnc2VyaWYnIH0gfSB9IH0sXHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgeTogeyB0aWNrczogeyBjb2xvcjogJyNhOGEyOWUnIH0sIGdyaWQ6IHsgY29sb3I6ICcjNDQ0MDNjJyB9IH0sXHJcbiAgICAgIHg6IHsgdGlja3M6IHsgY29sb3I6ICcjYThhMjllJyB9LCBncmlkOiB7IGNvbG9yOiAnIzQ0NDAzYycgfSB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIE1PRElGIDogcHgtNCBzdXIgbW9iaWxlLCBwYi0xMiBwb3VyIGxlIHNjcm9sbFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW4gcHgtNCBwYi0xMlwiPlxyXG4gICAgICAgIHsvKiBNT0RJRiA6IG1iLTggc3VyIG1vYmlsZSwgbWItMTIgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi04IG1kOm1iLTEyXCI+XHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtM3hsIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgZHJvcC1zaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgIEwnT2JzZXJ2YXRvaXJlIGRlIEJlcmtcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBtZDp0ZXh0LWxnIGl0YWxpYyBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMzAgaW5saW5lLWJsb2NrIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIFJlY2Vuc2VtZW50IG9mZmljaWVsIGRlIGwnYXJjaGlwZWxcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTYgbWQ6Z2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTQgbWQ6cC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB0ZXh0LXhsIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNlwiPlRyw6lzb3IgZGUgR3VlcnJlPC9oMz5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IGgtNTYgc3VyIG1vYmlsZSwgaC02NCBzdXIgZGVza3RvcCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC01NiBtZDpoLTY0IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveE9mZmljZURhdGEgPyA8QmFyIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2JveE9mZmljZURhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTAgdGV4dC1zdG9uZS01MDAgaXRhbGljXCI+Q2hhcmdlbWVudCBkZXMgZG9ubsOpZXMuLi48L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTQgbWQ6cC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNlwiPkNsYW5zICYgVHJpYnVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC01NiBtZDpoLTY0IHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9wdWxhdGlvbkRhdGEgPyA8RG91Z2hudXQgb3B0aW9ucz17ey4uLm9wdGlvbnMsIHNjYWxlczp7fX19IGRhdGE9e3BvcHVsYXRpb25EYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwIHRleHQtc3RvbmUtNTAwIGl0YWxpY1wiPkNoYXJnZW1lbnQgZGVzIGNsYW5zLi4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC00IG1kOnAtNiByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCBtZDpjb2wtc3Bhbi0yIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNlwiPkNocm9ub2xvZ2llIGRlcyBEw6ljb3V2ZXJ0ZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogaC02NCBzdXIgbW9iaWxlLCBoLTgwIHN1ciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IG1kOmgtODAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGltZWxpbmVEYXRhID8gPExpbmUgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17dGltZWxpbmVEYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwIHRleHQtc3RvbmUtNTAwIGl0YWxpY1wiPkFuYWx5c2UgdGVtcG9yZWxsZS4uLjwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHNQYWdlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lUGFnZSIsIkZvcnVtUGFnZSIsIkFydGljbGVQYWdlIiwiU3RhdHNQYWdlIiwiTmF2YmFyIiwiUmVnaXN0ZXJQYWdlIiwiTG9naW5QYWdlIiwiQXJ0aWNsZVNob3ciLCJBZG1pbkRhc2hib2FyZCIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImRhdGEiLCJwcmltYXJ5Q29sb3IiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwicGF0aCIsImVsZW1lbnQiLCJyb290RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsImVycm9yIiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGVzdCIsIm5leHQiLCJwdXNoIiwidXNlU3RhdGUiLCJDc3ZDaGFydCIsIkFydGljbGVGb3JtIiwiX3JlZiIsIl9yZWYkaWQiLCJpZCIsIm9uU3VjY2VzcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJ0aXRsZSIsInNldFRpdGxlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiYmxvY3MiLCJzZXRCbG9jcyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibXVzaWNMaWJyYXJ5Iiwic2V0TXVzaWNMaWJyYXJ5IiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJkYXRhc2V0TGlicmFyeSIsInNldERhdGFzZXRMaWJyYXJ5IiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb25jYXQiLCJyZXMiLCJmb3JtYXR0ZWRCbG9jcyIsInNvcnQiLCJiIiwicG9zaXRpb24iLCJtYXAiLCJ2aXpUeXBlIiwiY29udGVudCIsInR5cGUiLCJwYXJ0cyIsInNwbGl0IiwibWVkaWFVcmwiLCJmaWxlIiwiZXJyIiwiRXJyb3IiLCJhZGRCbG9jIiwicmVtb3ZlQmxvYyIsImluZGV4VG9SZW1vdmUiLCJmaWx0ZXIiLCJfIiwiaW5kZXgiLCJ1cGRhdGVCbG9jIiwiZmllbGQiLCJuZXdCbG9jcyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJ0YXJnZXQiLCJmaWxlcyIsInN0YXJ0c1dpdGgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVTdWJtaXQiLCJfcmVmMiIsIl9jYWxsZWUiLCJ0b2tlbiIsImFydGljbGVEYXRhIiwiZm9ybURhdGEiLCJfcmVzcG9uc2UiLCJlcnJvckRhdGEiLCJfdCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYmxvYyIsImZpbmFsQ29udGVudCIsImJsb2NQYXlsb2FkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWxlcnQiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZvckVhY2giLCJpbmNsdWRlcyIsIm1lc3NhZ2UiLCJfeCIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwia2V5Iiwib25DbGljayIsImFjY2VwdCIsInNvdXJjZSIsImNzdlVybCIsImVudHJpZXMiLCJfcmVmMyIsIl9yZWY0IiwiZm9sZGVyIiwibGFiZWwiLCJ0b1VwcGVyQ2FzZSIsIlRvb2xCdG4iLCJkaXNhYmxlZCIsIl9yZWY1IiwidXNlUGFyYW1zIiwiTGluayIsIlZpa2luZ1BsYXllciIsIkNvbW1lbnRTZWN0aW9uIiwiU3RhclJhdGluZyIsIl9hcnRpY2xlJGJsb2NzIiwiX2FydGljbGUkYXV0aG9yIiwiX3VzZVBhcmFtcyIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwicmVqZWN0IiwiY3VzdG9tU3R5bGVzIiwicmF3Q29uZmlnIiwiZGVzaWduQ29uZmlnIiwicGFyc2UiLCJmaW5hbFRpdGxlQ29sb3IiLCJ0aXRsZUNvbG9yIiwiZmluYWxDb250ZW50QmciLCJjb250ZW50QmciLCJtdXNpY0Jsb2MiLCJmaW5kIiwibXVzaWNTcmMiLCJjb250ZW50QmxvY3MiLCJoYW5kbGVSYXRlIiwic2NvcmUiLCJBdXRob3JpemF0aW9uIiwidG8iLCJhcnRpY2xlSWQiLCJjdXJyZW50UmF0aW5nIiwiYXZlcmFnZVJhdGluZyIsIm9uUmF0ZSIsImJhY2tncm91bmRDb2xvciIsImF1dG9QbGF5IiwiYXV0aG9yIiwicHNldWRvIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIkNvbW1lbnRJdGVtIiwiX2NvbW1lbnQkYXV0aG9yIiwiY29tbWVudCIsIm9uVm90ZSIsIm9uUmVwbHkiLCJjYW5JbnRlcmFjdCIsInNob3dSZXBseUZvcm0iLCJzZXRTaG93UmVwbHlGb3JtIiwicmVwbHlDb250ZW50Iiwic2V0UmVwbHlDb250ZW50IiwiaGFuZGxlUmVwbHlTdWJtaXQiLCJyZXBsaWVzIiwicmVwbHkiLCJfQ29tbWVudEl0ZW0iLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwibmV3Q29tbWVudCIsInNldE5ld0NvbW1lbnQiLCJzZXRDYW5JbnRlcmFjdCIsImZldGNoQ29tbWVudHMiLCJjb21tZW50c0RhdGEiLCJyb290Q29tbWVudHMiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJoYW5kbGVQb3N0IiwicGFyZW50SWQiLCJfYXJncyIsImhhbmRsZVZvdGUiLCJfY2FsbGVlMiIsImNvbW1lbnRJZCIsImRpcmVjdGlvbiIsIl90MiIsIl9jb250ZXh0MiIsIl94MiIsIl94MyIsIlBhcGEiLCJCYXJDaGFydCIsIkJhciIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJMaW5lQ2hhcnQiLCJMaW5lIiwiUGllQ2hhcnQiLCJQaWUiLCJDZWxsIiwiQ09MT1JTIiwiX3JlZiR2aXpUeXBlIiwic2V0RGF0YSIsInNldEVycm9yIiwidGV4dCIsImNzdlRleHQiLCJoZWFkZXIiLCJkeW5hbWljVHlwaW5nIiwic2tpcEVtcHR5TGluZXMiLCJjb21wbGV0ZSIsInJlc3VsdHMiLCJrZXlzIiwieEtleSIsInlLZXkiLCJheGlzU3R5bGUiLCJmb250U2l6ZSIsImZpbGwiLCJyZW5kZXJDaGFydCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZSIsImRhdGFLZXkiLCJ0aWNrIiwiY29udGVudFN0eWxlIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsIndyYXBwZXJTdHlsZSIsInBhZGRpbmdUb3AiLCJzdHJva2VXaWR0aCIsImRvdCIsImFjdGl2ZURvdCIsImN4IiwiY3kiLCJsYWJlbExpbmUiLCJwZXJjZW50IiwidG9GaXhlZCIsIm91dGVyUmFkaXVzIiwibmFtZUtleSIsImVudHJ5IiwibGF5b3V0IiwidmVydGljYWxBbGlnbiIsImFsaWduIiwiY3Vyc29yIiwicmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJEYXRhUHJvdmlkZXJTcGFjZSIsImRhdGFzZXRzIiwic2V0RmlsZSIsInByZXZpZXciLCJzZXRQcmV2aWV3Iiwic2V0SGVhZGVycyIsImNvbHVtbk1hcHBpbmciLCJzZXRDb2x1bW5NYXBwaW5nIiwiZGF0YXNldE5hbWUiLCJzZXREYXRhc2V0TmFtZSIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJzZWxlY3RlZEZpbGUiLCJyZXBsYWNlIiwiY29scyIsImluaXRpYWxNYXBwaW5nIiwiaCIsInRvZ2dsZVR5cGUiLCJwcmV2IiwiaGFuZGxlVXBsb2FkIiwicGF5bG9hZCIsIm1ldGFkYXRhIiwiY29sdW1ucyIsInVwbG9hZGVkQXQiLCJ0b0lTT1N0cmluZyIsInJvd0NvdW50Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyb3ciLCJkcyIsInJvd3NDb3VudCIsInVzZU5hdmlnYXRlIiwiand0RGVjb2RlIiwiX3VzZXIiLCJfdXNlcjIiLCJfdXNlcjMiLCJuYXZpZ2F0ZSIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwidXNlciIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJjYW5TZWVEYXNoYm9hcmQiLCJyb2xlcyIsImNsb3NlTWVudSIsIkZyYWdtZW50IiwidXNlUmVmIiwiU3VzcGVuc2UiLCJDYW52YXMiLCJ1c2VGcmFtZSIsInVzZVRocmVlIiwidXNlR0xURiIsInVzZUFuaW1hdGlvbnMiLCJDZW50ZXIiLCJIdG1sIiwidXNlVGV4dHVyZSIsIlN0YXJzIiwiTU9ERUxfUEFUSCIsIlRFWFRVUkVfUEFUSCIsIkFOSU1BVElPTl9OQU1FIiwiRHJhZ29uTW9kZWwiLCJ2aXRlc3NlUm90YXRpb24iLCJ2aXRlc3NlQW5pbWF0aW9uIiwiZmFjdGV1clRhaWxsZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiX3VzZUdMVEYiLCJzY2VuZSIsImFuaW1hdGlvbnMiLCJ0ZXh0dXJlIiwiX3VzZVRocmVlIiwidmlld3BvcnQiLCJiYXNlU2NhbGUiLCJmaW5hbFNjYWxlIiwiZmxpcFkiLCJjb2xvclNwYWNlIiwiZ3JvdXAiLCJfdXNlQW5pbWF0aW9ucyIsImFjdGlvbnMiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJ0cmF2ZXJzZSIsImNoaWxkIiwiaXNNZXNoIiwibWF0ZXJpYWwiLCJuZWVkc1VwZGF0ZSIsImFjdGlvbiIsInJlc2V0IiwiZmFkZUluIiwicGxheSIsInRpbWVTY2FsZSIsInRvZ2dsZUFuaW1hdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsInBhdXNlZCIsImN1cnJlbnQiLCJyb3RhdGlvbiIsIl9leHRlbmRzIiwicmVmIiwib2JqZWN0Iiwib25Qb2ludGVyT3ZlciIsIm9uUG9pbnRlck91dCIsInNjYWxlIiwiTmlnaHRGdXJ5U2NlbmUiLCJyb3RTcGVlZCIsInNldFJvdFNwZWVkIiwiYW5pbVNwZWVkIiwic2V0QW5pbVNwZWVkIiwic2l6ZUZhY3RvciIsInNldFNpemVGYWN0b3IiLCJjb250cm9sc1Zpc2libGUiLCJzZXRDb250cm9sc1Zpc2libGUiLCJoYW5kbGVSZXNldCIsInNoYWRvd3MiLCJjYW1lcmEiLCJmb3YiLCJhdHRhY2giLCJhcmdzIiwiZGVwdGgiLCJjb3VudCIsImZhY3RvciIsInNhdHVyYXRpb24iLCJmYWRlIiwic3BlZWQiLCJpbnRlbnNpdHkiLCJmYWxsYmFjayIsImNlbnRlciIsIm1pbiIsIm1heCIsInN0ZXAiLCJwYXJzZUZsb2F0IiwicHJlbG9hZCIsImhvdmVyIiwic2V0SG92ZXIiLCJyYXRpbmciLCJzZXRSYXRpbmciLCJoYW5kbGVSYXRpbmciLCJzdGFyIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiX3JlZiRhdXRvUGxheSIsImF1ZGlvUmVmIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiaXNCbG9ja2VkIiwic2V0SXNCbG9ja2VkIiwicGxheVByb21pc2UiLCJ0b2dnbGVQbGF5IiwicGF1c2UiLCJoYW5kbGVUaW1lVXBkYXRlIiwidG90YWwiLCJmb3JtYXRUaW1lIiwiaGFuZGxlU2VlayIsImNsaWVudFdpZHRoIiwiY2xpY2tYIiwibmF0aXZlRXZlbnQiLCJvZmZzZXRYIiwidGltZSIsImlzTmFOIiwiTWF0aCIsImZsb29yIiwic2VjIiwiYmFycyIsImFuaW1hdGlvbkR1cmF0aW9uIiwicmFuZG9tIiwib25UaW1lVXBkYXRlIiwib25FbmRlZCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJ2aWV3Qm94IiwiX2N1cnJlbnRVc2VyIiwiX2RhdGEkYWxsVXNlcnMiLCJfZGF0YSRtYW5hZ2VtZW50QXJ0aWMiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImN1cnJlbnRVc2VyIiwiaXNGdWxsQWRtaW4iLCJpc1Byb3ZpZGVyIiwiaXNEZXNpZ25lciIsImlzRWRpdG9yIiwibG9hZFN0YXRzIiwiaGFuZGxlRGVsZXRlQXJ0aWNsZSIsImNvbmZpcm0iLCJtYW5hZ2VtZW50QXJ0aWNsZXMiLCJhcnQiLCJoYW5kbGVFZGl0U3VjY2VzcyIsImhhbmRsZVByb21vdGUiLCJ1c2VySWQiLCJ1cGRhdGVkRGF0YSIsImFsbFVzZXJzIiwibmV3Um9sZXMiLCJ1c2Vyc0NvdW50IiwiYXJ0aWNsZXNDb3VudCIsInRvTG93ZXJDYXNlIiwiam9pbiIsIkRlc2lnbmVyU3BhY2UiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwic2V0VXNlciIsInNvcnRPcmRlciIsInNldFNvcnRPcmRlciIsInZpZXciLCJzZXRWaWV3Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJkZWNvZGVkIiwiZmV0Y2hBcnRpY2xlcyIsInVybCIsIkFjY2VwdCIsImhhbmRsZURlbGV0ZSIsIl90MyIsImFJZCIsInBvcCIsImhhbmRsZVN1Y2Nlc3MiLCJ1c2VyUm9sZXMiLCJzdXBlckVkaXRvcnMiLCJpc1N1cGVyRWRpdG9yIiwic29tZSIsImlzQXV0aG9yIiwiY2FuQ3JlYXRlIiwiX2FydGljbGUkYXV0aG9yMiIsIl9hcnRpY2xlJGF1dGhvcjMiLCJjbGVhbklkIiwiaXNPd25lciIsImNhbkVkaXRUaGlzIiwidXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNldEl0ZW0iLCJocmVmIiwicGxhaW5QYXNzd29yZCIsInJvbGUiLCJzZXRGb3JtRGF0YSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIkFyY0VsZW1lbnQiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkRvdWdobnV0IiwicmVnaXN0ZXIiLCJib3hPZmZpY2VEYXRhIiwic2V0Qm94T2ZmaWNlRGF0YSIsInBvcHVsYXRpb25EYXRhIiwic2V0UG9wdWxhdGlvbkRhdGEiLCJ0aW1lbGluZURhdGEiLCJzZXRUaW1lbGluZURhdGEiLCJsb2FkQ1NWIiwiY2FsbGJhY2siLCJ0eHQiLCJsaW5lcyIsInRyaW0iLCJ2YWxzIiwicmVkdWNlIiwiYWNjIiwibGFiZWxzIiwiYm9yZGVyV2lkdGgiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInRlbnNpb24iLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJwbHVnaW5zIiwibGVnZW5kIiwiZm9udCIsImZhbWlseSIsInNjYWxlcyIsInRpY2tzIiwiZ3JpZCIsIngiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==