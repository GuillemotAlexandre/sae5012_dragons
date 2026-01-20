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

/***/ "./assets/components/DesignerSpace.jsx"
/*!*********************************************!*\
  !*** ./assets/components/DesignerSpace.jsx ***!
  \*********************************************/
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
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
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
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_45__);
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

var DesignerSpace = function DesignerSpace() {
  var _articles$find;
  // --- ÉTATS ---
  var VIKING_ORANGE_DEFAULT = '#e67e22';
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_45__.useState)(VIKING_ORANGE_DEFAULT),
    _useState2 = _slicedToArray(_useState, 2),
    globalColor = _useState2[0],
    setGlobalColor = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_45__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    articles = _useState4[0],
    setArticles = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_45__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedArticleId = _useState6[0],
    setSelectedArticleId = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_45__.useState)({
      titleColor: '#ffffff',
      contentBg: '#1c1917'
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    articleStyles = _useState8[0],
    setArticleStyles = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_45__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isSaving = _useState0[0],
    setIsSaving = _useState0[1];

  // --- CHARGEMENT INITIAL ---
  (0,react__WEBPACK_IMPORTED_MODULE_45__.useEffect)(function () {
    fetchArticles();
    var currentColor = getComputedStyle(document.documentElement).getPropertyValue('--viking-orange').trim();
    if (currentColor && currentColor.startsWith('#')) {
      setGlobalColor(currentColor);
    }
  }, []);
  var fetchArticles = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, data, items, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return fetch('/api/articles');
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.json();
          case 2:
            data = _context.v;
            items = data['hydra:member'] || data.member || (Array.isArray(data) ? data : []);
            setArticles(items);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error("Erreur chargement articles:", _t);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }));
    return function fetchArticles() {
      return _ref.apply(this, arguments);
    };
  }();

  // --- ACTIONS FORGE GLOBALE ---
  var handleGlobalColorPreview = function handleGlobalColorPreview(newColor) {
    setGlobalColor(newColor);
    document.documentElement.style.setProperty('--viking-orange', newColor);
  };
  var resetGlobalColor = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!window.confirm("Voulez-vous vraiment restaurer les couleurs d'origine du village ?")) {
              _context2.n = 5;
              break;
            }
            setIsSaving(true);
            _context2.p = 1;
            handleGlobalColorPreview(VIKING_ORANGE_DEFAULT);
            _context2.n = 2;
            return fetch('/api/admin/reset-global-design', {
              method: 'POST',
              headers: {
                'Authorization': "Bearer ".concat(localStorage.getItem('token'))
              }
            });
          case 2:
            response = _context2.v;
            if (response.ok) alert("🔥 Les couleurs d'origine ont été restaurées !");
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error("Erreur reset:", _t2);
          case 4:
            _context2.p = 4;
            setIsSaving(false);
            return _context2.f(4);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3, 4, 5]]);
    }));
    return function resetGlobalColor() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSaveGlobalStyle = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var response, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            setIsSaving(true);
            _context3.p = 1;
            _context3.n = 2;
            return fetch('/api/admin/save-global-design', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(localStorage.getItem('token'))
              },
              body: JSON.stringify({
                mainColor: globalColor
              })
            });
          case 2:
            response = _context3.v;
            if (response.ok) alert("⚔️ Le thème du village a été gravé dans la pierre !");
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            alert("Erreur de connexion à la forge.");
          case 4:
            _context3.p = 4;
            setIsSaving(false);
            return _context3.f(4);
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3, 4, 5]]);
    }));
    return function handleSaveGlobalStyle() {
      return _ref3.apply(this, arguments);
    };
  }();

  // --- ACTIONS CHRONIQUES ---
  var handleArticleSelect = function handleArticleSelect(e) {
    var id = e.target.value;
    setSelectedArticleId(id);
    var article = articles.find(function (a) {
      return String(a.id) === String(id);
    });
    if (article && article.designConfig) {
      var config = typeof article.designConfig === 'string' ? JSON.parse(article.designConfig) : article.designConfig;
      setArticleStyles({
        titleColor: config.titleColor || '#ffffff',
        contentBg: config.contentBg || '#1c1917'
      });
    } else {
      setArticleStyles({
        titleColor: '#ffffff',
        contentBg: '#1c1917'
      });
    }
  };
  var handleSaveArticleStyle = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var response, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (selectedArticleId) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            setIsSaving(true);
            _context4.p = 2;
            _context4.n = 3;
            return fetch("/api/admin/article/".concat(selectedArticleId, "/style"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(localStorage.getItem('token'))
              },
              body: JSON.stringify({
                designConfig: {
                  titleColor: articleStyles.titleColor,
                  contentBg: articleStyles.contentBg
                }
              })
            });
          case 3:
            response = _context4.v;
            if (response.ok) {
              alert("✨ Le style de cette chronique a été sauvegardé !");
              fetchArticles();
            }
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            alert("Erreur réseau.");
          case 5:
            _context4.p = 5;
            setIsSaving(false);
            return _context4.f(5);
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4, 5, 6]]);
    }));
    return function handleSaveArticleStyle() {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    className: "space-y-10 p-6 max-w-5xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("section", {
    className: "bg-stone-900 border border-viking-gold/20 p-6 rounded-lg shadow-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    className: "flex justify-between items-center mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("h2", {
    className: "text-xl font-dragon text-viking-gold uppercase tracking-widest"
  }, "Forge Globale (Site)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("button", {
    onClick: resetGlobalColor,
    disabled: isSaving,
    className: "text-[10px] bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white px-3 py-1 border border-stone-700 uppercase font-bold transition-all disabled:opacity-50"
  }, "R\xE9initialiser")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    className: "flex flex-col md:flex-row gap-6 mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    className: "flex flex-col items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("label", {
    className: "text-[10px] text-stone-500 font-bold uppercase"
  }, "Couleur Principale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("input", {
    type: "color",
    value: globalColor,
    onChange: function onChange(e) {
      return handleGlobalColorPreview(e.target.value);
    },
    className: "w-20 h-20 cursor-pointer bg-transparent border-2 border-stone-700 rounded-lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    className: "flex-1 bg-black/40 p-6 rounded border border-stone-800 flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("span", {
    style: {
      color: globalColor
    },
    className: "text-5xl font-dragon uppercase tracking-widest transition-colors duration-300 drop-shadow-lg text-center"
  }, "RIDERS OF BERK"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("button", {
    onClick: handleSaveGlobalStyle,
    disabled: isSaving,
    className: "w-full py-3 bg-viking-gold text-black font-bold uppercase rounded hover:brightness-110 transition-all disabled:opacity-50"
  }, isSaving ? "Gravure..." : "Valider pour tout le village")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("section", {
    className: "bg-stone-900 border border-blue-500/20 p-6 rounded-lg shadow-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("h2", {
    className: "text-xl font-dragon text-blue-400 mb-6 uppercase tracking-widest"
  }, "Style des Chroniques (Articles)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("label", {
    className: "block text-[10px] font-bold text-stone-500 uppercase mb-2"
  }, "Choisir un r\xE9cit \xE0 modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("select", {
    value: selectedArticleId,
    onChange: handleArticleSelect,
    className: "w-full bg-stone-800 border border-stone-700 text-white p-3 rounded outline-none focus:border-blue-500 transition-colors"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("option", {
    value: ""
  }, "-- S\xE9lectionner un Article --"), articles.map(function (art) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("option", {
      key: art.id,
      value: art.id
    }, art.title);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    className: "bg-stone-800 p-3 rounded border border-stone-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("label", {
    className: "block text-[10px] font-bold text-stone-500 uppercase mb-2"
  }, "Couleur Titre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("input", {
    type: "color",
    value: articleStyles.titleColor,
    onChange: function onChange(e) {
      return setArticleStyles(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          titleColor: e.target.value
        });
      });
    },
    className: "w-full h-10 bg-transparent cursor-pointer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    className: "bg-stone-800 p-3 rounded border border-stone-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("label", {
    className: "block text-[10px] font-bold text-stone-500 uppercase mb-2"
  }, "Fond Contenu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("input", {
    type: "color",
    value: articleStyles.contentBg,
    onChange: function onChange(e) {
      return setArticleStyles(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          contentBg: e.target.value
        });
      });
    },
    className: "w-full h-10 bg-transparent cursor-pointer"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    className: "bg-stone-950 p-6 rounded-lg border border-stone-800 flex flex-col justify-center min-h-[180px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("h3", {
    style: {
      "--article-title-color": articleStyles.titleColor
    },
    className: "article-dynamic-title text-3xl font-dragon mb-4 uppercase transition-colors text-center"
  }, selectedArticleId ? (_articles$find = articles.find(function (a) {
    return String(a.id) === String(selectedArticleId);
  })) === null || _articles$find === void 0 ? void 0 : _articles$find.title : "Titre de l'Article"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("div", {
    style: {
      backgroundColor: articleStyles.contentBg
    },
    className: "p-4 rounded text-stone-400 text-sm italic transition-all border border-white/5"
  }, "\"Le dragon survola les falaises de Berk...\""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_45___default().createElement("button", {
    onClick: handleSaveArticleStyle,
    disabled: isSaving || !selectedArticleId,
    className: "w-full mt-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase rounded transition-all disabled:opacity-20"
  }, isSaving ? 'Gravure en cours...' : 'Enregistrer le style du récit')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignerSpace);

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
/* harmony import */ var _components_DesignerSpace__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../components/DesignerSpace */ "./assets/components/DesignerSpace.jsx");
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





 // Ensure this path is correct!

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
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
    }, "Changer Rang"));
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
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
    }, "Supprimer")));
  }), (!data.managementArticles || data.managementArticles.length === 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
    className: "text-stone-500 italic text-center py-10"
  }, "Aucune chronique \xE0 g\xE9rer."))), activeTab === 'data' && isProvider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "animate-in zoom-in-95 duration-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_components_DataProviderSpace__WEBPACK_IMPORTED_MODULE_44__["default"], {
    datasets: data.datasets
  })), activeTab === 'design' && isDesigner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "animate-in fade-in duration-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_components_DesignerSpace__WEBPACK_IMPORTED_MODULE_47__["default"], null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm0uanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0FydGljbGVTaG93LmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50U2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvQ3N2Q2hhcnQuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0RhdGFQcm92aWRlclNwYWNlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9EZXNpZ25lclNwYWNlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL05pZ2h0RnVyeS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvU3RhclJhdGluZy5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvVmlraW5nUGxheWVyLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvQWRtaW5EYXNoYm9hcmQuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9BcnRpY2xlUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0ZvcnVtUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0hvbWVQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvTG9naW5QYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvUmVnaXN0ZXJQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvU3RhdHNQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vIEltcG9ydCBkZXMgc3R5bGVzXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBJbXBvcnQgZGVzIHBhZ2VzXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3BhZ2VzL0hvbWVQYWdlJztcclxuaW1wb3J0IEZvcnVtUGFnZSBmcm9tICcuL3BhZ2VzL0ZvcnVtUGFnZSc7XHJcbmltcG9ydCBBcnRpY2xlUGFnZSBmcm9tICcuL3BhZ2VzL0FydGljbGVQYWdlJztcclxuaW1wb3J0IFN0YXRzUGFnZSBmcm9tICcuL3BhZ2VzL1N0YXRzUGFnZSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBSZWdpc3RlclBhZ2UgZnJvbSAnLi9wYWdlcy9SZWdpc3RlclBhZ2UnO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJy4vcGFnZXMvTG9naW5QYWdlJztcclxuaW1wb3J0IEFydGljbGVTaG93IGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlU2hvdyc7XHJcblxyXG4vLyBJbXBvcnQgZGUgbGEgcGFnZSBEYXNoYm9hcmQgQWRtaW5cclxuaW1wb3J0IEFkbWluRGFzaGJvYXJkIGZyb20gJy4vcGFnZXMvQWRtaW5EYXNoYm9hcmQnO1xyXG5cclxuY29uc29sZS5sb2coXCLwn5CyIETDqW1hcnJhZ2UgZGUgbCdhcHBsaWNhdGlvbiBEcmFnb25DTVMuLi5cIik7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIC0tLSBTWVNUw4hNRSBERSBDSEFSR0VNRU5UIERVIERFU0lHTiAoVkVSU0lPTiBTSUxFTkNJRVVTRSkgLS0tXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCcvZGVzaWduX2NvbmZpZy5qc29uJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU2kgbGUgZmljaGllciBuJ2V4aXN0ZSBwYXMsIG9uIHJlbnZvaWUgbnVsbCBzYW5zIGZhaXJlIGQnZXJyZXVyXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gT24gbidhcHBsaXF1ZSBsYSBjb3VsZXVyIHF1ZSBzaSBsZSBmaWNoaWVyIGEgw6l0w6kgdHJvdXbDqSBldCBjb250aWVudCBsYSBkb25uw6llXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnByaW1hcnlDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aWtpbmctb3JhbmdlJywgZGF0YS5wcmltYXJ5Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OqCBEZXNpZ24gY2hhcmfDqSBkZXB1aXMgbGEgZm9yZ2UgOlwiLCBkYXRhLnByaW1hcnlDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBFbiBjYXMgZCdlcnJldXIgcsOpc2VhdSwgb24gbmUgbG9nIHBsdXMgZCdlcnJldXIgcm91Z2VcclxuICAgICAgICAgICAgICAgIC8vIExlIHZpbGxhZ2UgdXRpbGlzZSBzaW1wbGVtZW50IGxlcyBjb3VsZXVycyBkdSBDU1MgcGFyIGTDqWZhdXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7IFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgZm9udC1zYW5zIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIEJBTk5Jw4hSRSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgbWQ6aC00OCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWItNCBib3JkZXItdmlraW5nLWdvbGQgcmVsYXRpdmUgc2hhZG93LTJ4bCBiZy1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvYmFubmllcmUucG5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkJhbm5pw6hyZSBEcmFnb25zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXZpa2luZy1kYXJrIHRvLXRyYW5zcGFyZW50IG9wYWNpdHktNjBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LTEwIHB4LTQgZmxleC1ncm93IHJlbGF0aXZlIHotMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZVBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2ZvcnVtXCIgZWxlbWVudD17PEZvcnVtUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXJ0aWNsZS86aWRcIiBlbGVtZW50PXs8QXJ0aWNsZVNob3cgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3N0YXRpc3RpcXVlXCIgZWxlbWVudD17PFN0YXRzUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBlbGVtZW50PXs8UmVnaXN0ZXJQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpblBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FkbWluXCIgZWxlbWVudD17PEFkbWluRGFzaGJvYXJkIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBib3JkZXItdCBib3JkZXItdmlraW5nLWdvbGQvMzAgcHktNiBtdC0xMCB0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1saWdodCBmb250LWRyYWdvbiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+wqkgTCdBY2Fkw6ltaWUgZGUgQmVyayAtIEFyY2hpdmVzIERyYWNvbmlxdWVzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1yb290Jyk7XHJcbmlmIChyb290RWxlbWVudCkge1xyXG4gICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3Qocm9vdEVsZW1lbnQpO1xyXG4gICAgcm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiAgICBjb25zb2xlLmxvZyhcIuKchSBSZWFjdCBpbmplY3TDqSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxufSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgSW1wb3NzaWJsZSBkZSB0cm91dmVyIGwnw6lsw6ltZW50ICNyZWFjdC1yb290XCIpO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbi8vIPCfkYcgMS4gSU1QT1JUIERVIEdSQVBISVFVRSAoSW5kaXNwZW5zYWJsZSlcclxuaW1wb3J0IENzdkNoYXJ0IGZyb20gJy4vQ3N2Q2hhcnQnOyBcclxuXHJcbmNvbnN0IEFydGljbGVGb3JtID0gKHsgaWQgPSBudWxsLCBvblN1Y2Nlc3MgfSkgPT4ge1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc3VtbWFyeSwgc2V0U3VtbWFyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYmxvY3MsIHNldEJsb2NzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgLy8gSW5pdGlhbGlzYXRpb24gYXZlYyBkZXMgdGFibGVhdXggdmlkZXMgcG91ciDDqXZpdGVyIGxlcyBjcmFzaHNcclxuICAgIGNvbnN0IFttdXNpY0xpYnJhcnksIHNldE11c2ljTGlicmFyeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGF0YXNldExpYnJhcnksIHNldERhdGFzZXRMaWJyYXJ5XSA9IHVzZVN0YXRlKFtdKTsgXHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8vIC0tLSAxLiBDSEFSR0VNRU5UIERFUyBET05Ow4lFUyBERSBMJ0FSVElDTEUgKFNJIE1PRElGSUNBVElPTikgLS0tXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKGRhdGEudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN1bW1hcnkoZGF0YS5zdW1tYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBPbiBmb3JtYXRlIGxlcyBibG9jcyByZcOndXMgZGUgbCdBUEkgcG91ciBxdSdpbHMgbWFyY2hlbnQgZGFucyBsZSBmb3JtdWxhaXJlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkQmxvY3MgPSAoZGF0YS5ibG9jcyB8fCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZpelR5cGUgPSAnYmFyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gYi5jb250ZW50IHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaSBjJ2VzdCB1biBncmFwaGlxdWUsIG9uIHPDqXBhcmUgbGUgdHlwZSBldCBsJ1VSTCAoZm9ybWF0IFwidHlwZTo6dXJsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYi50eXBlID09PSAnc3RhdHMnIHx8IGIudHlwZSA9PT0gJ3ZpeicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGNvbnRlbnQuc3BsaXQoJzo6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdml6VHlwZSA9IHBhcnRzWzBdIHx8ICdiYXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBwYXJ0c1sxXSB8fCAnJzsgLy8gTCdVUkwgZHUgQ1NWIGRldmllbnQgbGUgY29udGVudC9tZWRpYVVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGIuaWQsIC8vIE9uIGdhcmRlIGwnSUQgcG91ciBzYXZvaXIgcXVlIGNlIGJsb2MgZXhpc3RlIGTDqWrDoFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGIudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LCAvLyBUZXh0ZSBvdSBVUkxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYVVybDogY29udGVudCwgLy8gUG91ciBwcsOpdmlzdWFsaXNlciBpbWFnZXMvc29uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpelR5cGU6IHZpelR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QmxvY3MoZm9ybWF0dGVkQmxvY3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgY2hhcmdlbWVudCBhcnRpY2xlXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICAvLyAtLS0gQ0hBUkdFTUVOVCBERVMgTElCUkFJUklFUyAoTXVzaXF1ZSAvIERhdGFzZXRzKSAtLS1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gMS4gTXVzaXF1ZXNcclxuICAgICAgICBmZXRjaCgnL2FwaS9tdXNpYy9saXN0JylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5vayA/IHJlcy5qc29uKCkgOiBbXSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkgc2V0TXVzaWNMaWJyYXJ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbXVzaXF1ZVwiLCBlcnIpKTtcclxuXHJcbiAgICAgICAgLy8gMi4gRGF0YXNldHNcclxuICAgICAgICBmZXRjaCgnL2FwaS9saXN0LWRhdGFzZXRzJykgXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRXJyZXVyIEFQSSBEYXRhc2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhc2V0TGlicmFyeShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YXNldExpYnJhcnkoW10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbXBvc3NpYmxlIGRlIGNoYXJnZXIgbGVzIGRhdGFzZXRzXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhc2V0TGlicmFyeShbXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIC0tLSBHRVNUSU9OIERFUyBCTE9DUyAtLS1cclxuICAgIGNvbnN0IGFkZEJsb2MgPSAodHlwZSkgPT4ge1xyXG4gICAgICAgIHNldEJsb2NzKFsuLi5ibG9jcywgeyBcclxuICAgICAgICAgICAgdHlwZSwgXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLCBcclxuICAgICAgICAgICAgbWVkaWFVcmw6ICcnLCBcclxuICAgICAgICAgICAgdml6VHlwZTogJ2JhcicsIFxyXG4gICAgICAgICAgICBmaWxlOiBudWxsLCAgIFxyXG4gICAgICAgICAgICAvLyBQYXMgZCdJRCBpY2ksIGMnZXN0IHVuIG5vdXZlYXUgYmxvY1xyXG4gICAgICAgIH1dKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQmxvYyA9IChpbmRleFRvUmVtb3ZlKSA9PiB7XHJcbiAgICAgICAgc2V0QmxvY3MoYmxvY3MuZmlsdGVyKChfLCBpbmRleCkgPT4gaW5kZXggIT09IGluZGV4VG9SZW1vdmUpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQmxvYyA9IChpbmRleCwgZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3QmxvY3MgPSBbLi4uYmxvY3NdO1xyXG4gICAgICAgIG5ld0Jsb2NzW2luZGV4XVtmaWVsZF0gPSB2YWx1ZTtcclxuICAgICAgICBzZXRCbG9jcyhuZXdCbG9jcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoaW5kZXgsIGUpID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgdXBkYXRlQmxvYyhpbmRleCwgJ2ZpbGUnLCBmaWxlKTtcclxuICAgICAgICAgICAgaWYgKGZpbGUudHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKSkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQmxvYyhpbmRleCwgJ21lZGlhVXJsJywgVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLSBTT1VNSVNTSU9OIChIWUJSSURFIDogUE9TVCBvdSBQQVRDSCkgLS0tXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAgICAgLy8g8J+TnSBNT0RFIMOJRElUSU9OIChQQVRDSCBKU09OKVxyXG4gICAgICAgICAgICAgICAgLy8gQXR0ZW50aW9uIDogTCd1cGxvYWQgZGUgbm91dmVhdXggZmljaGllcnMgaW1hZ2Ugbidlc3QgcGFzIGfDqXLDqSBpY2kgcG91ciBzaW1wbGlmaWVyLlxyXG4gICAgICAgICAgICAgICAgLy8gT24gbWV0IMOgIGpvdXIgdGV4dGVzLCB0aXRyZXMsIGNob2l4IG11c2lxdWUvc3RhdHMuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJ0aWNsZURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyeSxcclxuICAgICAgICAgICAgICAgICAgICBibG9jczogYmxvY3MubWFwKChibG9jLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmluYWxDb250ZW50ID0gYmxvYy5jb250ZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24gcmVjb25zdHJ1aXQgbGUgZm9ybWF0IHNww6ljaWFsIHBvdXIgbGVzIHN0YXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibG9jLnR5cGUgPT09ICdzdGF0cycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpIGwndXRpbGlzYXRldXIgYSBjaGFuZ8OpIGwnVVJMIHZpYSBsZSBzZWxlY3QsIGMnZXN0IGRhbnMgYmxvYy5tZWRpYVVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxDb250ZW50ID0gYCR7YmxvYy52aXpUeXBlfTo6JHtibG9jLm1lZGlhVXJsfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvYy50eXBlID09PSAnbXVzaWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbENvbnRlbnQgPSBibG9jLm1lZGlhVXJsOyAvLyBMZSBub20gZHUgZmljaGllciBjaG9pc2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChibG9jLnR5cGUgPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpIHBhcyBkZSBub3V2ZWF1IGZpY2hpZXIsIG9uIGdhcmRlIGwnYW5jaWVubmUgVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbENvbnRlbnQgPSBibG9jLm1lZGlhVXJsOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RydWN0dXJlIGQndW4gYmxvYyBwb3VyIGwnQVBJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NQYXlsb2FkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogYmxvYy50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZpbmFsQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2kgbGUgYmxvYyBhdmFpdCBkw6lqw6AgdW4gSUQsIG9uIGwnZW52b2llIHBvdXIgbGUgbWV0dHJlIMOgIGpvdXIgKGF1IGxpZXUgZGUgbGUgcmVjcsOpZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibG9jLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jUGF5bG9hZFsnQGlkJ10gPSBgL2FwaS9ibG9jcy8ke2Jsb2MuaWR9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NQYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL21lcmdlLXBhdGNoK2pzb24nIC8vIFN0YW5kYXJkIEFQSSBQbGF0Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYXJ0aWNsZURhdGEpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkxlIHLDqWNpdCBhIMOpdMOpIHLDqcOpY3JpdCBhdmVjIHN1Y2PDqHMgIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgbW9kaWZpY2F0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOKcqCBNT0RFIENSw4lBVElPTiAoUE9TVCBGb3JtRGF0YSlcclxuICAgICAgICAgICAgICAgIC8vIEMnZXN0IHRvbiBjb2RlIGQnb3JpZ2luZSBxdWkgZ8OocmUgYmllbiBsJ3VwbG9hZCBpbml0aWFsXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0aXRsZScsIHRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc3VtbWFyeScsIHN1bW1hcnkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJsb2NzLmZvckVhY2goKGJsb2MsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bdHlwZV1gLCBibG9jLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW3Bvc2l0aW9uXWAsIGluZGV4ICsgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChbJ2gyJywgJ3BhcmFncmFwaCddLmluY2x1ZGVzKGJsb2MudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bY29udGVudF1gLCBibG9jLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnaW1hZ2UnICYmIGJsb2MuZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVtpbWFnZUZpbGVdYCwgYmxvYy5maWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9jLnR5cGUgPT09ICdzdGF0cycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bdml6VHlwZV1gLCBibG9jLnZpelR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVtjc3ZQYXRoXWAsIGJsb2MubWVkaWFVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2MudHlwZSA9PT0gJ211c2ljJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVttdXNpY0ZpbGVOYW1lXWAsIGJsb2MubWVkaWFVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY3VzdG9tL2FydGljbGVzL2NyZWF0ZScsIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVm90cmUgcsOpY2l0IGEgw6l0w6kgZ3JhdsOpIGF2ZWMgc3VjY8OocyAhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcygpOyBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIDogXCIgKyAoZXJyb3JEYXRhLm1lc3NhZ2UgfHwgXCJQcm9ibMOobWUgc2VydmV1clwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUuXCIpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHAtNCBzdXIgbW9iaWxlLCBtYXgtdy00eGwgcG91ciBsaW1pdGVyIHN1ciBkZXNrdG9wXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIHAtNCBtZDpwLTggYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgc2hhZG93LTJ4bCBtYXgtdy00eGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBUYWlsbGUgdGl0cmUgKi99XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgbWQ6bWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgIHtpZCA/ICdNb2RpZmllciBsYSBDaHJvbmlxdWUnIDogJ05vdXZlbGxlIENocm9uaXF1ZSd9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHAtMyBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHRleHQtd2hpdGUgcC0zIG1kOnAtNCB0ZXh0LXhsIG1kOnRleHQtMnhsIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGRcIiBwbGFjZWhvbGRlcj1cIlRpdHJlLi4uXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtzdW1tYXJ5fSBvbkNoYW5nZT17KGUpID0+IHNldFN1bW1hcnkoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgdGV4dC1zdG9uZS0zMDAgcC0zIG1kOnAtNCBoLTI0IG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGRcIiBwbGFjZWhvbGRlcj1cIlLDqXN1bcOpLi4uXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICB7YmxvY3MubWFwKChibG9jLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogcC00IHN1ciBtb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YmxvYy5pZCB8fCBpbmRleH0gY2xhc3NOYW1lPVwiYmctc3RvbmUtODAwLzUwIHAtNCBtZDpwLTYgYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWdvbGQgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlQmxvYyhpbmRleCl9IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC1yZWQtNTAwIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFuc2l0aW9uIHAtMlwiPlN1cHByaW1lcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCBtYi00IHRyYWNraW5nLXdpZGVzdFwiPkJsb2Mge2luZGV4ICsgMX0gOiB7YmxvYy50eXBlfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIMiAmIFBhcmFncmFwaCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ2gyJyAmJiA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17YmxvYy5jb250ZW50fSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICdjb250ZW50JywgZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0zIHRleHQtd2hpdGUgZm9udC1ib2xkXCIgcGxhY2Vob2xkZXI9XCJTb3VzLXRpdHJlLi4uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdwYXJhZ3JhcGgnICYmIDx0ZXh0YXJlYSB2YWx1ZT17YmxvYy5jb250ZW50fSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICdjb250ZW50JywgZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0zIHRleHQtc3RvbmUtMzAwIGgtMzJcIiBwbGFjZWhvbGRlcj1cIlRleHRlLi4uXCIgLz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogSW1hZ2UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdpbWFnZScgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlkICYmIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGVDaGFuZ2UoaW5kZXgsIGUpfSBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCB0ZXh0LXNtIHctZnVsbFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLm1lZGlhVXJsICYmIDxpbWcgc3JjPXtibG9jLm1lZGlhVXJsfSBhbHQ9XCJQcmV2aWV3XCIgY2xhc3NOYW1lPVwibXQtNCBtYXgtaC00MCBib3JkZXIgYm9yZGVyLXN0b25lLTYwMFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU3RhdHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdzdGF0cycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBncmlkLWNvbHMtMSBzdXIgbW9iaWxlIHBvdXIgZW1waWxlciBjb250csO0bGVzIGV0IGdyYXBoaXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIG1iLTEgYmxvY2sgdXBwZXJjYXNlIGZvbnQtYm9sZFwiPkRvbm7DqWVzIChDU1YpPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnbWVkaWFVcmwnLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jLm1lZGlhVXJsIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIENob2lzaXIgdW4gamV1IGRlIGRvbm7DqWVzIC0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoZGF0YXNldExpYnJhcnkpICYmIGRhdGFzZXRMaWJyYXJ5Lm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2QuaWR9IHZhbHVlPXtkLnNvdXJjZX0+e2QubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIG1iLTEgYmxvY2sgdXBwZXJjYXNlIGZvbnQtYm9sZFwiPlR5cGUgZGUgR3JhcGhpcXVlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbJ2JhcicsICdsaW5lJywgJ3BpZSddLm1hcCh0eXBlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAndml6VHlwZScsIHR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0yIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSBib3JkZXIgdHJhbnNpdGlvbiBmbGV4LTEgbWQ6ZmxleC1ub25lICR7YmxvYy52aXpUeXBlID09PSB0eXBlID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgYm9yZGVyLXZpa2luZy1nb2xkJyA6ICdiZy1ibGFjayB0ZXh0LXN0b25lLTUwMCBib3JkZXItc3RvbmUtNzAwIGhvdmVyOnRleHQtd2hpdGUnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzIwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLVsyMDBweF0gcm91bmRlZCBwLTIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLm1lZGlhVXJsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG1pbi1oLVsyMDBweF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENzdkNoYXJ0IGNzdlVybD17YmxvYy5tZWRpYVVybH0gdml6VHlwZT17YmxvYy52aXpUeXBlIHx8ICdiYXInfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIGl0YWxpY1wiPlPDqWxlY3Rpb25uZXogdW4gZmljaGllci4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE11c2lxdWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdtdXNpYycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICdtZWRpYVVybCcsIGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmxvYy5tZWRpYVVybCB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBDaG9pc2lyIHVuZSBtw6lsb2RpZSAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttdXNpY0xpYnJhcnkgJiYgT2JqZWN0LmVudHJpZXMobXVzaWNMaWJyYXJ5KS5tYXAoKFtmb2xkZXIsIGZpbGVzXSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0Z3JvdXAga2V5PXtmb2xkZXJ9IGxhYmVsPXtmb2xkZXIudG9VcHBlckNhc2UoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShmaWxlcykgJiYgZmlsZXMubWFwKGZpbGUgPT4gPG9wdGlvbiBrZXk9e2ZpbGV9IHZhbHVlPXtgJHtmb2xkZXJ9LyR7ZmlsZX1gfT57ZmlsZX08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBCYXJyZSBkJ291dGlscyByZXNwb25zaXZlIGF2ZWMgZmxleC13cmFwICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIGp1c3RpZnktY2VudGVyIG1iLTEwIHBiLTEwIGJvcmRlci1iIGJvcmRlci1zdG9uZS04MDBcIj5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiVGl0cmUgSDJcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdoMicpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJQYXJhZ3JhcGhlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygncGFyYWdyYXBoJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIkltYWdlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnaW1hZ2UnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiR3JhcGhpcXVlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnc3RhdHMnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiTXVzaXF1ZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ211c2ljJyl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2xvYWRpbmd9IGNsYXNzTmFtZT1cInctZnVsbCBiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHB5LTQgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMTIsMTc1LDU1LDAuNCldIGRpc2FibGVkOm9wYWNpdHktNTAgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChpZCA/ICdSw6nDqWNyaXR1cmUuLi4nIDogJ0dyYXZ1cmUgZW4gY291cnMuLi4nKSA6IChpZCA/ICdNZXR0cmUgw6Agam91ciBsZSBSw6ljaXQnIDogJ1B1YmxpZXIgbGEgQ2hyb25pcXVlJyl9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn07XHJcblxyXG4vLyBNT0RJRiA6IEJvdXRvbiByZXNwb25zaXZlIChmbGV4LWdyb3cpXHJcbmNvbnN0IFRvb2xCdG4gPSAoeyBsYWJlbCwgb25DbGljayB9KSA9PiAoXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9XCJweC00IHB5LTMgbWQ6cHktMiBiZy1zdG9uZS04MDAgdGV4dC1zdG9uZS0zMDAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6Ym9yZGVyLXZpa2luZy1nb2xkIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGQgdHJhY2tpbmctd2lkZXIgZmxleC1ncm93IG1kOmZsZXgtZ3Jvdy0wIHJvdW5kZWRcIj5cclxuICAgICAgICArIHtsYWJlbH1cclxuICAgIDwvYnV0dG9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUZvcm07IiwiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgdXNlUGFyYW1zLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuLy8gaW1wb3J0IENzdkNoYXJ0IGZyb20gXCIuL0NzdkNoYXJ0XCI7XHJcbi8vIGltcG9ydCBWaWtpbmdQbGF5ZXIgZnJvbSBcIi4vVmlraW5nUGxheWVyXCI7IC8vIPCfkYggSW1wb3J0IGR1IG5vdXZlYXUgcGxheWVyXHJcbi8vIGltcG9ydCBDb21tZW50U2VjdGlvbiBmcm9tIFwiLi9Db21tZW50U2VjdGlvblwiO1xyXG4vLyBpbXBvcnQgU3RhclJhdGluZyBmcm9tIFwiLi9TdGFyUmF0aW5nXCI7XHJcblxyXG4vLyBjb25zdCBBcnRpY2xlU2hvdyA9ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4vLyAgICAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbi8vICAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIC8vIDEuIFbDqXJpZiBUb2tlbiBwb3VyIGwnaW50ZXJmYWNlIChVc2VyIFN0YXRlKVxyXG4vLyAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbi8vICAgICAgICAgaWYgKHRva2VuKSB7XHJcbi8vICAgICAgICAgICAgIHRyeSB7IHNldFVzZXIoand0RGVjb2RlKHRva2VuKSk7IH0gY2F0Y2ggKGUpIHt9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAvLyAyLiBQcsOpcGFyYXRpb24gZGVzIEVuLXTDqnRlcyAoSEVBREVSUylcclxuLy8gICAgICAgICAvLyBPbiBwcsOpcGFyZSBsZSBiYWRnZSBwb3VyIGVudHJlciBkYW5zIGxlIGRvbmpvblxyXG4vLyAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbi8vICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbidcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgICAgIGlmICh0b2tlbikge1xyXG4vLyAgICAgICAgICAgICBoZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC8vIDMuIEZldGNoIEFydGljbGUgQVZFQyBsZXMgaGVhZGVyc1xyXG4vLyAgICAgICAgIGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pIC8vIPCfkYggQUpPVVQgSUNJXHJcbi8vICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IChyZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QoXCJBY2PDqHMgcmVmdXPDqSBvdSBpbnRyb3V2YWJsZVwiKSkpXHJcbi8vICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRBcnRpY2xlKGRhdGEpO1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICB9LCBbaWRdKTtcclxuXHJcbi8vICAgICBpZiAobG9hZGluZylcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWdvbGQgcC0xMCBhbmltYXRlLXB1bHNlXCI+XHJcbi8vICAgICAgICAgICAgICAgICBJbnZvY2F0aW9uIGR1IHLDqWNpdC4uLlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgaWYgKCFhcnRpY2xlKVxyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1yZWQtNTAwIHAtMTBcIj5cclxuLy8gICAgICAgICAgICAgICAgIFBhcmNoZW1pbiBpbnRyb3V2YWJsZS5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuXHJcbi8vICAgICAvLyDwn5SOIE9OIENIRVJDSEUgTEEgTVVTSVFVRSBJQ0lcclxuLy8gICAgIGNvbnN0IG11c2ljQmxvYyA9IGFydGljbGUuYmxvY3M/LmZpbmQoKGIpID0+IGIudHlwZSA9PT0gXCJtdXNpY1wiKTtcclxuLy8gICAgIC8vIE9uIG5ldHRvaWUgbGUgY2hlbWluIChwYXJmb2lzIGlsIGEgL3VwbG9hZHMvLi4uLCBwYXJmb2lzIG5vbilcclxuLy8gICAgIGNvbnN0IG11c2ljU3JjID0gbXVzaWNCbG9jID8gYC9tdXNpcXVlLyR7bXVzaWNCbG9jLmNvbnRlbnR9YCA6IG51bGw7XHJcblxyXG4vLyAgICAgLy8gT24gcHLDqXBhcmUgbGVzIGF1dHJlcyBibG9jcyAoc2FucyBsYSBtdXNpcXVlIHBvdXIgw6l2aXRlciBsZXMgZG91YmxvbnMpXHJcbi8vICAgICBjb25zdCBjb250ZW50QmxvY3MgPVxyXG4vLyAgICAgICAgIGFydGljbGUuYmxvY3NcclxuLy8gICAgICAgICAgICAgPy5maWx0ZXIoKGIpID0+IGIudHlwZSAhPT0gXCJtdXNpY1wiKVxyXG4vLyAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pIHx8IFtdO1xyXG5cclxuLy8gICAgIGNvbnN0IGhhbmRsZVJhdGUgPSBhc3luYyAoc2NvcmUpID0+IHtcclxuLy8gICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbi8vICAgICAgICAgaWYgKCF0b2tlbikgcmV0dXJuIGFsZXJ0KFwiSWwgZmF1dCDDqnRyZSBjb25uZWN0w6kgcG91ciBub3RlciAhXCIpO1xyXG5cclxuLy8gICAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcmF0aW5nc1wiLCB7XHJcbi8vICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4vLyAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2NvcmUsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZTogYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLFxyXG4vLyAgICAgICAgICAgICAgICAgfSksXHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbi8vICAgICAgICAgICAgICAgICBhbGVydChcIlZvdHJlIG5vdGUgYSDDqXTDqSBncmF2w6llICFcIik7XHJcbi8vICAgICAgICAgICAgICAgICAvLyBPcHRpb25uZWwgOiBSZWNoYXJnZXIgbCdhcnRpY2xlIHBvdXIgdm9pciBsYSBub3V2ZWxsZSBtb3llbm5lXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHAtOCBtaW4taC1zY3JlZW4gYmctc3RvbmUtOTAwIGJvcmRlci14IGJvcmRlci1zdG9uZS04MDAgc2hhZG93LTJ4bFwiPlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi02XCI+XHJcbi8vICAgICAgICAgICAgICAgICA8TGlua1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRvPVwiL2ZvcnVtXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIG1iLTggaW5saW5lLWJsb2NrIHRleHQtc20gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiXHJcbi8vICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAg4oaQIFJldG91ciBhdSBIYWxsXHJcbi8vICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC00IG1iLTZcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3RhclJhdGluZ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlSWQ9e2lkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmF0aW5nPXthcnRpY2xlLmF2ZXJhZ2VSYXRpbmd9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmF0ZT17aGFuZGxlUmF0ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwIHRleHQtc21cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgTW95ZW5uZSA6IHthcnRpY2xlLmF2ZXJhZ2VSYXRpbmcgfHwgXCIwXCJ9LzVcclxuLy8gICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi02IHRleHQtY2VudGVyIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZHJvcC1zaGFkb3ctbGdcIj5cclxuLy8gICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4vLyAgICAgICAgICAgICA8L2gxPlxyXG5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS04MDAvNTAgcC04IGJvcmRlci1sLTQgYm9yZGVyLXZpa2luZy1nb2xkIG1iLTggaXRhbGljIHRleHQtc3RvbmUtMzAwIHRleHQtbGcgbGVhZGluZy1yZWxheGVkIHNoYWRvdy1pbm5lclwiPlxyXG4vLyAgICAgICAgICAgICAgICAge2FydGljbGUuc3VtbWFyeX1cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICAgICAgICB7Lyog8J+OtSBMRSBQTEFZRVIgRVNUIElDSSAoSnVzdGUgc291cyBsZSByw6lzdW3DqSkgKi99XHJcbi8vICAgICAgICAgICAgIHttdXNpY1NyYyAmJiAoXHJcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEyIGFuaW1hdGUtZmFkZS1pbi11cFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxWaWtpbmdQbGF5ZXIgc3JjPXttdXNpY1NyY30gYXV0b1BsYXk9e3RydWV9IC8+XHJcbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgKX1cclxuXHJcbi8vICAgICAgICAgICAgIHsvKiBMZSByZXN0ZSBkdSBjb250ZW51ICovfVxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTJcIj5cclxuLy8gICAgICAgICAgICAgICAgIHtjb250ZW50QmxvY3MubWFwKChibG9jKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChibG9jLnR5cGUpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImgyXCI6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJvcmRlci1iIGJvcmRlci1zdG9uZS03MDAgcGItMiBtdC04XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLmNvbnRlbnR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicGFyYWdyYXBoXCI6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS0zMDAgbGVhZGluZy1yZWxheGVkIHRleHQtbGcgd2hpdGVzcGFjZS1wcmUtbGluZSB0ZXh0LWp1c3RpZnlcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MuY29udGVudH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImltYWdlXCI6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmVcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS04XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YmxvYy5jb250ZW50fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWxsdXN0cmF0aW9uXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LWgtWzUwMHB4XSBib3JkZXItNCBib3JkZXItc3RvbmUtODAwIHNoYWRvdy1bMF8wXzE1cHhfcmdiYSgwLDAsMCwwLjUpXSByb3VuZGVkXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhdHNcIjpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZpelwiOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBibG9jLmNvbnRlbnRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJsb2MuY29udGVudC5zcGxpdChcIjo6XCIpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrLzQwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtNiByb3VuZGVkLWxnIG15LThcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgZm9udC1ib2xkIHRleHQtc20gdXBwZXJjYXNlIG1iLTQgdHJhY2tpbmctd2lkZXN0IHRleHQtY2VudGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDwn5OKIERvbm7DqWVzIGR1IENsYW5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTk2XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3N2Q2hhcnRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3ZVcmw9e3BhcnRzWzFdfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpelR5cGU9e3BhcnRzWzBdIHx8IFwiYmFyXCJ9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwIHB0LTEwIGJvcmRlci10IGJvcmRlci1zdG9uZS04MDAgdGV4dC1jZW50ZXIgdGV4dC1zdG9uZS02MDAgdGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbi8vICAgICAgICAgICAgICAgICBHcmF2w6kgcGFyIHthcnRpY2xlLmF1dGhvcj8ucHNldWRvIHx8IFwiVW4gaW5jb25udVwifSDigKJ7XCIgXCJ9XHJcbi8vICAgICAgICAgICAgICAgICB7bmV3IERhdGUoYXJ0aWNsZS5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPENvbW1lbnRTZWN0aW9uIGFydGljbGVJZD17aWR9IC8+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVNob3c7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQ3N2Q2hhcnQgZnJvbSBcIi4vQ3N2Q2hhcnRcIjtcclxuaW1wb3J0IFZpa2luZ1BsYXllciBmcm9tIFwiLi9WaWtpbmdQbGF5ZXJcIjtcclxuaW1wb3J0IENvbW1lbnRTZWN0aW9uIGZyb20gXCIuL0NvbW1lbnRTZWN0aW9uXCI7XHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gXCIuL1N0YXJSYXRpbmdcIjtcclxuXHJcbmNvbnN0IEFydGljbGVTaG93ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiAocmVzLm9rID8gcmVzLmpzb24oKSA6IFByb21pc2UucmVqZWN0KFwiRXJyZXVyXCIpKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9ubsOpZXMgcmXDp3VlcyA6XCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1nb2xkIHAtMTAgYW5pbWF0ZS1wdWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgSW52b2NhdGlvbiBkdSByw6ljaXQuLi5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIGlmICghYXJ0aWNsZSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcmVkLTUwMCBwLTEwXCI+XHJcbiAgICAgICAgICAgICAgICBQYXJjaGVtaW4gaW50cm91dmFibGUuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgLy8gLS0tIExPR0lRVUUgRCdFWFRSQUNUSU9OIC0tLVxyXG4gICAgbGV0IGN1c3RvbVN0eWxlcyA9IHt9O1xyXG4gICAgY29uc3QgcmF3Q29uZmlnID0gYXJ0aWNsZS5kZXNpZ25Db25maWc7XHJcblxyXG4gICAgaWYgKHJhd0NvbmZpZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGN1c3RvbVN0eWxlcyA9XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgcmF3Q29uZmlnID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBKU09OLnBhcnNlKHJhd0NvbmZpZylcclxuICAgICAgICAgICAgICAgICAgICA6IHJhd0NvbmZpZztcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgZGUgZMOpY29kYWdlIGRlcyBzdHlsZXNcIiwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBEw4lGSU5JVElPTiBERVMgQ09VTEVVUlMgLS0tXHJcbiAgICAvLyBPbiB1dGlsaXNlIGxlcyB2YWxldXJzIGRlIGxhIEJERCwgc2lub24gYmxhbmMgcGFyIGTDqWZhdXQgKHNlcmEgZ8OpcsOpIHBhciBsYSBjbGFzc2UgQ1NTKVxyXG4gICAgY29uc3QgZmluYWxUaXRsZUNvbG9yID0gY3VzdG9tU3R5bGVzLnRpdGxlQ29sb3IgfHwgXCIjZmZmZmZmXCI7XHJcbiAgICBjb25zdCBmaW5hbENvbnRlbnRCZyA9IGN1c3RvbVN0eWxlcy5jb250ZW50QmcgfHwgXCJyZ2JhKDQxLCAzNywgMzYsIDAuNSlcIjtcclxuXHJcbiAgICBjb25zdCBtdXNpY0Jsb2MgPSBhcnRpY2xlLmJsb2NzPy5maW5kKChiKSA9PiBiLnR5cGUgPT09IFwibXVzaWNcIik7XHJcbiAgICBjb25zdCBtdXNpY1NyYyA9IG11c2ljQmxvYyA/IGAvbXVzaXF1ZS8ke211c2ljQmxvYy5jb250ZW50fWAgOiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRCbG9jcyA9IGFydGljbGUuYmxvY3NcclxuICAgICAgICA/IFsuLi5hcnRpY2xlLmJsb2NzXVxyXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGIpID0+IGIudHlwZSAhPT0gXCJtdXNpY1wiKVxyXG4gICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbilcclxuICAgICAgICA6IFtdO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVJhdGUgPSBhc3luYyAoc2NvcmUpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgaWYgKCF0b2tlbikgcmV0dXJuIGFsZXJ0KFwiSWwgZmF1dCDDqnRyZSBjb25uZWN0w6kgcG91ciBub3RlciAhXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcmF0aW5nc1wiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZTogYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlZvdHJlIG5vdGUgYSDDqXTDqSBncmF2w6llICFcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBPcHRpb25uZWwgOiBSZWNoYXJnZXIgbCdhcnRpY2xlIHBvdXIgdm9pciBsYSBub3V2ZWxsZSBtb3llbm5lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHAtNCBzdXIgbW9iaWxlLCBwLTggc3VyIGRlc2t0b3BcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHAtNCBtZDpwLTggbWluLWgtc2NyZWVuIGJnLXN0b25lLTkwMCBtZDpib3JkZXIteCBib3JkZXItc3RvbmUtODAwIHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiBFTi1Uw4pURSA6IEJvdXRvbiBSZXRvdXIgZXQgTm90YXRpb24gKi99XHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IGZsZXgtY29sLXJldmVyc2Ugc3VyIG1vYmlsZSBwb3VyIG1ldHRyZSBsZSByZXRvdXIgZW4gYmFzIG91IGZsZXgtY29sIGNsYXNzaXF1ZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtZDppdGVtcy1jZW50ZXIgbWItNiBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9mb3J1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC12aWtpbmctZ29sZCBpbmxpbmUtYmxvY2sgdGV4dC14cyBtZDp0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3Qgb3JkZXItMiBtZDpvcmRlci0xXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDihpAgUmV0b3VyIGF1IEhhbGxcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGUgcG91ciBjZW50cmVyIGxhIG5vdGF0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtZDpqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTQgdy1mdWxsIG1kOnctYXV0byBvcmRlci0xIG1kOm9yZGVyLTIgYmctc3RvbmUtODAwLzUwIHAtMyByb3VuZGVkIG1kOmJnLXRyYW5zcGFyZW50IG1kOnAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVJZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSYXRpbmc9e2FydGljbGUuYXZlcmFnZVJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRlPXtoYW5kbGVSYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDAgdGV4dC14cyBtZDp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1veWVubmUgOiB7YXJ0aWNsZS5hdmVyYWdlUmF0aW5nIHx8IFwiMFwifS81XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFRJVFJFICovfVxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwiLS1hcnRpY2xlLXRpdGxlLWNvbG9yXCI6IGZpbmFsVGl0bGVDb2xvciB9fVxyXG4gICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB0ZXh0LTN4bCBtb2JpbGUsIGJyZWFrLXdvcmRzIHBvdXIgw6l2aXRlciBkw6lib3JkZW1lbnRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtZHluYW1pYy10aXRsZSB0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWRyYWdvbiBtYi02IHRleHQtY2VudGVyIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZHJvcC1zaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGJyZWFrLXdvcmRzIGxlYWRpbmctdGlnaHRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSw4lTVU3DiSAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBmaW5hbENvbnRlbnRCZyB9fVxyXG4gICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBwLTUgc3VyIG1vYmlsZSwgdGV4dC1iYXNlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTUgbWQ6cC04IGJvcmRlci1sLTQgYm9yZGVyLXZpa2luZy1nb2xkIG1iLTggaXRhbGljIHRleHQtc3RvbmUtMzAwIHRleHQtYmFzZSBtZDp0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBzaGFkb3ctaW5uZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIHRleHQtanVzdGlmeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlLnN1bW1hcnl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge211c2ljU3JjICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VmlraW5nUGxheWVyIHNyYz17bXVzaWNTcmN9IGF1dG9QbGF5PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktOCBtZDpzcGFjZS15LTEyXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudEJsb2NzLm1hcCgoYmxvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYmxvYy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHRleHQtMnhsIG1vYmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBib3JkZXItYiBib3JkZXItc3RvbmUtNzAwIHBiLTIgbXQtOCBicmVhay13b3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicGFyYWdyYXBoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB0ZXh0LWJhc2UgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtMzAwIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyB3aGl0ZXNwYWNlLXByZS1saW5lIHRleHQtanVzdGlmeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Jsb2MuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIklsbHVzdHJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IG1heC13LWZ1bGwgcG91ciBuZSBwYXMgZMOpcGFzc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LWZ1bGwgbWQ6bWF4LWgtWzUwMHB4XSBib3JkZXItNCBib3JkZXItc3RvbmUtODAwIHNoYWRvdy14bCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdGF0c1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidml6XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGJsb2MuY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYmxvYy5jb250ZW50LnNwbGl0KFwiOjpcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC00IG1kOnAtNiByb3VuZGVkLWxnIG15LTggc2hhZG93LWlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtYm9sZCB0ZXh0LXhzIG1kOnRleHQtc20gdXBwZXJjYXNlIG1iLTQgdHJhY2tpbmctd2lkZXN0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDwn5OKIERvbm7DqWVzIGR1IENsYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogaC02NCBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgbWQ6aC05NiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENzdkNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3N2VXJsPXtwYXJ0c1sxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXpUeXBlPXtwYXJ0c1swXSB8fCBcImJhclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBtZDptdC0yMCBwdC04IG1kOnB0LTEwIGJvcmRlci10IGJvcmRlci1zdG9uZS04MDAgdGV4dC1jZW50ZXIgdGV4dC1zdG9uZS01MDAgdGV4dC1bMTBweF0gbWQ6dGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBHcmF2w6kgcGFyIHthcnRpY2xlLmF1dGhvcj8ucHNldWRvIHx8IFwiVW4gw6ljbGFpcmV1clwifSDigKJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUoYXJ0aWNsZS5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxDb21tZW50U2VjdGlvbiBhcnRpY2xlSWQ9e2lkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlU2hvdztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFNvdXMtY29tcG9zYW50IHBvdXIgVU4gY29tbWVudGFpcmUgKHLDqWN1cnNpZilcclxuY29uc3QgQ29tbWVudEl0ZW0gPSAoeyBjb21tZW50LCBvblZvdGUsIG9uUmVwbHksIGFydGljbGVJZCwgY2FuSW50ZXJhY3QgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dSZXBseUZvcm0sIHNldFNob3dSZXBseUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlcGx5Q29udGVudCwgc2V0UmVwbHlDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlcGx5U3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb25SZXBseShyZXBseUNvbnRlbnQsIGNvbW1lbnQuaWQpO1xyXG4gICAgICAgIHNldFJlcGx5Q29udGVudChcIlwiKTtcclxuICAgICAgICBzZXRTaG93UmVwbHlGb3JtKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHBsLTIgb3UgcGwtNCBzZWxvbiBsJ8OpY3JhbiBwb3VyIGdhZ25lciBkZSBsYSBwbGFjZSBlbiBwcm9mb25kZXVyXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItbC0yIGJvcmRlci1zdG9uZS03MDAgcGwtMyBtZDpwbC00IG10LTQgbWItMlwiPlxyXG4gICAgICAgICAgICB7LyogRU4tVMOKVEUgOiBBdXRldXIgKyBTY29yZSAqL31cclxuICAgICAgICAgICAgey8qIE1PRElGIDogZmxleC13cmFwIHBvdXIgcXVlIMOnYSBwYXNzZSDDoCBsYSBsaWduZSBzdXIgdHLDqHMgcGV0aXQgw6ljcmFuICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LVsxMHB4XSBtZDp0ZXh0LXhzIHRleHQtc3RvbmUtNDAwIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXZpa2luZy1nb2xkIHRleHQtc20gbWQ6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQuYXV0aG9yPy5wc2V1ZG8gfHwgXCJWaWtpbmcgQW5vbnltZVwifVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+4oCiIHtjb21tZW50LnNjb3JlfSBwb2ludHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICDigKIge25ldyBEYXRlKGNvbW1lbnQuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQ09OVEVOVSAqL31cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS0yMDAgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgbWItMiBicmVhay13b3Jkc1wiPlxyXG4gICAgICAgICAgICAgICAge2NvbW1lbnQuY29udGVudH1cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgey8qIPCflJIgQUNUSU9OUyA6IFZvdGUgJiBSw6lwb25kcmUgKi99XHJcbiAgICAgICAgICAgIHtjYW5JbnRlcmFjdCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHRleHQtWzEwcHhdIG1kOnRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXN0b25lLTUwMCBzZWxlY3Qtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBtZDpnYXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblZvdGUoY29tbWVudC5pZCwgXCJ1cFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JlZW4tNTAwIHAtMSBtZDpwLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDilrIgVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZShjb21tZW50LmlkLCBcImRvd25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXJlZC01MDAgcC0xIG1kOnAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWvCBEb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1JlcGx5Rm9ybSghc2hvd1JlcGx5Rm9ybSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtd2hpdGUgcC0xIG1kOnAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSw6lwb25kcmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIEZPUk1VTEFJUkUgREUgUsOJUE9OU0UgKi99XHJcbiAgICAgICAgICAgIHtzaG93UmVwbHlGb3JtICYmIGNhbkludGVyYWN0ICYmIChcclxuICAgICAgICAgICAgICAgIC8vIE1PRElGIDogZmxleC1jb2wgc3VyIG1vYmlsZSBwb3VyIGJvdXRvbiBsYXJnZVxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlUmVwbHlTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC0yXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVwbHlDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlcGx5Q29udGVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMiB0ZXh0LXdoaXRlIHRleHQtc20gdy1mdWxsIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIHLDqXBvbnNlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXN0b25lLTcwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiBtZDpweS0wIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCBob3ZlcjpiZy1zdG9uZS02MDAgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbnZveWVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogUsOJQ1VSU0lWSVTDiSAqL31cclxuICAgICAgICAgICAge2NvbW1lbnQucmVwbGllcyAmJiBjb21tZW50LnJlcGxpZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5yZXBsaWVzLm1hcCgocmVwbHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlcGx5LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17cmVwbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZvdGU9e29uVm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVwbHk9e29uUmVwbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlSWQ9e2FydGljbGVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkludGVyYWN0PXtjYW5JbnRlcmFjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIENvbXBvc2FudCBQcmluY2lwYWxcclxuY29uc3QgQ29tbWVudFNlY3Rpb24gPSAoeyBhcnRpY2xlSWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbmV3Q29tbWVudCwgc2V0TmV3Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NhbkludGVyYWN0LCBzZXRDYW5JbnRlcmFjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgc2V0Q2FuSW50ZXJhY3QoISF0b2tlbik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hDb21tZW50cyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaChgL2FwaS9jb21tZW50cz9hcnRpY2xlPSR7YXJ0aWNsZUlkfSZwYXJlbnRbZXhpc3RzXT1mYWxzZWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50c0RhdGEgPVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbXCJoeWRyYTptZW1iZXJcIl0gfHwgZGF0YVtcIm1lbWJlclwiXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvb3RDb21tZW50cyA9IGNvbW1lbnRzRGF0YS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKGMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFjLnBhcmVudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjLnBhcmVudCA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMucGFyZW50ID09PSBudWxsLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzKHJvb3RDb21tZW50cyk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICB9LCBbYXJ0aWNsZUlkXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUG9zdCA9IGFzeW5jIChjb250ZW50LCBwYXJlbnRJZCA9IG51bGwpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcblxyXG4gICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJWb3VzIGRldmV6IMOqdHJlIGNvbm5lY3TDqSBwb3VyIGdyYXZlciB1biBtZXNzYWdlICFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgIGFydGljbGU6IGAvYXBpL2FydGljbGVzLyR7YXJ0aWNsZUlkfWAsXHJcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50SWQgPyBgL2FwaS9jb21tZW50cy8ke3BhcmVudElkfWAgOiBudWxsLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9jb21tZW50c1wiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hDb21tZW50cygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRJZCkgc2V0TmV3Q29tbWVudChcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVWb3RlID0gYXN5bmMgKGNvbW1lbnRJZCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGlmICghdG9rZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlNldWxzIGxlcyBndWVycmllcnMgY29ubmVjdMOpcyBwZXV2ZW50IHZvdGVyICFcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKGAvYXBpL2N1c3RvbS9jb21tZW50cy8ke2NvbW1lbnRJZH0vdm90ZS8ke2RpcmVjdGlvbn1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZldGNoQ29tbWVudHMoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMTIgcHQtNiBtZDpwdC04IGJvcmRlci10IGJvcmRlci1zdG9uZS04MDBcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi00IG1kOm1iLTYgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICBDb25zZWlsIGRlIEd1ZXJyZSAoe2NvbW1lbnRzLmxlbmd0aH0gYXZpcylcclxuICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgIHsvKiDwn5SSIEZvcm11bGFpcmUgUHJpbmNpcGFsICovfVxyXG4gICAgICAgICAgICB7Y2FuSW50ZXJhY3QgPyAoXHJcbiAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IGZsZXgtY29sIHN1ciBtb2JpbGUgcG91ciBxdWUgbGUgYm91dG9uIHByZW5uZSB0b3V0ZSBsYSBsYXJnZXVyXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDb21tZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHRleHQtc3RvbmUtMzAwIHAtMyBoLTI0IG1kOmgtMjAgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSByZXNpemUtbm9uZSBtZDpyZXNpemUteVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFpc3NleiB2b3RyZSBtYXJxdWUgc3VyIGNlIHLDqWNpdC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBvc3QobmV3Q29tbWVudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJvbGQgcHgtNiBweS0zIG1kOnB5LTAgdXBwZXJjYXNlIGhvdmVyOmJnLXdoaXRlIHRyYW5zaXRpb24gdy1mdWxsIG1kOnctYXV0byBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdyYXZlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggcC00IGJvcmRlciBib3JkZXItc3RvbmUtODAwIGJnLXN0b25lLTkwMC81MCB0ZXh0LWNlbnRlciBpdGFsaWMgdGV4dC1zdG9uZS01MDAgdGV4dC14cyBtZDp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVqb2lnbmV6IGxlIGNsYW4gKGNvbm5lY3Rlei12b3VzKSBwb3VyIHBhcnRpY2lwZXIgYXVcclxuICAgICAgICAgICAgICAgICAgICBjb25zZWlsIGRlIGd1ZXJyZSBldCB2b3Rlci5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIExpc3RlIGRlcyBjb21tZW50YWlyZXMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IG1kOnNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVm90ZT17aGFuZGxlVm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXBseT17aGFuZGxlUG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZUlkPXthcnRpY2xlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbkludGVyYWN0PXtjYW5JbnRlcmFjdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRTZWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcclxuaW1wb3J0IHsgXHJcbiAgQmFyQ2hhcnQsIEJhciwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBMZWdlbmQsIFJlc3BvbnNpdmVDb250YWluZXIsXHJcbiAgTGluZUNoYXJ0LCBMaW5lLCBQaWVDaGFydCwgUGllLCBDZWxsIFxyXG59IGZyb20gJ3JlY2hhcnRzJztcclxuXHJcbmNvbnN0IENPTE9SUyA9IFsnI2Q0YWYzNycsICcjYjkxYzFjJywgJyMxYzE5MTcnLCAnIzU3NTM0ZScsICcjYThhMjllJ107IC8vIENvdWxldXJzIFZpa2luZ1xyXG5cclxuY29uc3QgQ3N2Q2hhcnQgPSAoeyBjc3ZVcmwsIHZpelR5cGUgPSAnYmFyJyB9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWNzdlVybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGZldGNoKGNzdlVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiSW1wb3NzaWJsZSBkZSBsaXJlIGxlIHBhcmNoZW1pbiBkZSBkb25uw6llc1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGNzdlRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgUGFwYS5wYXJzZShjc3ZUZXh0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNUeXBpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2tpcEVtcHR5TGluZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzdWx0cy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihcIkxlIGZpY2hpZXIgZXN0IGlsbGlzaWJsZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtjc3ZVcmxdKTtcclxuXHJcbiAgICBpZiAoIWNzdlVybCkgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGl0YWxpYyB0ZXh0LXhzIHRleHQtY2VudGVyIHAtNFwiPkF1Y3VuZSBkb25uw6llIHPDqWxlY3Rpb25uw6llLjwvcD47XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsXCI+PHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBhbmltYXRlLXB1bHNlIHRleHQteHNcIj5Ew6ljaGlmZnJhZ2UgZGVzIHJ1bmVzLi4uPC9wPjwvZGl2PjtcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXhzIHRleHQtY2VudGVyIHAtNFwiPkVycmV1ciA6IHtlcnJvcn08L3A+O1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdGV4dC14cyB0ZXh0LWNlbnRlciBwLTRcIj5MZSBmaWNoaWVyIGVzdCB2aWRlLjwvcD47XHJcblxyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGFbMF0pO1xyXG4gICAgY29uc3QgeEtleSA9IGtleXNbMF07XHJcbiAgICBjb25zdCB5S2V5ID0ga2V5c1sxXTtcclxuXHJcbiAgICAvLyBNT0RJRiA6IFN0eWxlIGNvbW11biBwb3VyIGxlcyBheGVzIChwb2xpY2UgcGx1cyBwZXRpdGUpXHJcbiAgICBjb25zdCBheGlzU3R5bGUgPSB7IGZvbnRTaXplOiAnMTBweCcsIGZpbGw6ICcjYThhMjllJyB9O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckNoYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAodml6VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmVDaGFydCBkYXRhPXtkYXRhfSBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMjAsIGxlZnQ6IDAsIGJvdHRvbTogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgc3Ryb2tlPVwiIzQ0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PXt4S2V5fSBzdHJva2U9XCIjZDRhZjM3XCIgdGljaz17YXhpc1N0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WUF4aXMgc3Ryb2tlPVwiI2Q0YWYzN1wiIHRpY2s9e2F4aXNTdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxYzE5MTcnLCBib3JkZXJDb2xvcjogJyNkNGFmMzcnLCBjb2xvcjogJyNmZmYnLCBmb250U2l6ZTogJzEycHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWdlbmQgd3JhcHBlclN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIHBhZGRpbmdUb3A6ICcxMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PXt5S2V5fSBzdHJva2U9XCIjZDRhZjM3XCIgc3Ryb2tlV2lkdGg9ezN9IGRvdD17eyByOiA0IH19IGFjdGl2ZURvdD17eyByOiA2IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlICdwaWUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UGllQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeT1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbExpbmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBMYWJlbCBzaW1wbGlmacOpIHBvdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17KHsgcGVyY2VudCB9KSA9PiBgJHsocGVyY2VudCAqIDEwMCkudG9GaXhlZCgwKX0lYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyUmFkaXVzPVwiNzAlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzg4ODRkOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PXt5S2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUtleT17eEtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChlbnRyeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCBrZXk9e2BjZWxsLSR7aW5kZXh9YH0gZmlsbD17Q09MT1JTW2luZGV4ICUgQ09MT1JTLmxlbmd0aF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QaWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnRTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWMxOTE3JywgYm9yZGVyQ29sb3I6ICcjZDRhZjM3JywgY29sb3I6ICcjZmZmJywgZm9udFNpemU6ICcxMnB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVnZW5kIHdyYXBwZXJTdHlsZT17eyBmb250U2l6ZTogJzEwcHgnIH19IGxheW91dD1cImhvcml6b250YWxcIiB2ZXJ0aWNhbEFsaWduPVwiYm90dG9tXCIgYWxpZ249XCJjZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGllQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlICdiYXInOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8QmFyQ2hhcnQgZGF0YT17ZGF0YX0gbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDIwLCBsZWZ0OiAwLCBib3R0b206IDUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiM0NDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT17eEtleX0gc3Ryb2tlPVwiI2Q0YWYzN1wiIHRpY2s9e2F4aXNTdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFlBeGlzIHN0cm9rZT1cIiNkNGFmMzdcIiB0aWNrPXtheGlzU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGN1cnNvcj17e2ZpbGw6ICcjMzMzJ319IGNvbnRlbnRTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWMxOTE3JywgYm9yZGVyQ29sb3I6ICcjZDRhZjM3JywgY29sb3I6ICcjZmZmJywgZm9udFNpemU6ICcxMnB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVnZW5kIHdyYXBwZXJTdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBwYWRkaW5nVG9wOiAnMTBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhciBkYXRhS2V5PXt5S2V5fSBmaWxsPVwiI2Q0YWYzN1wiIHJhZGl1cz17WzQsIDQsIDAsIDBdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IGgtZnVsbCBldCB3LWZ1bGwgcG91ciBwcmVuZHJlIHRvdXQgbCdlc3BhY2UgZGlzcG9uaWJsZSBkdSBwYXJlbnRcclxuICAgICAgICAvLyBMZSBwYWRkaW5nIGVzdCBnw6lyw6kgcGFyIGxlIHBhcmVudCAoQXJ0aWNsZUZvcm0vU2hvdylcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgbWluLWgtWzI1MHB4XVwiPlxyXG4gICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyQ2hhcnQoKX1cclxuICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENzdkNoYXJ0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcclxuXHJcbmNvbnN0IERhdGFQcm92aWRlclNwYWNlID0gKHsgZGF0YXNldHMgfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaGVhZGVycywgc2V0SGVhZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY29sdW1uTWFwcGluZywgc2V0Q29sdW1uTWFwcGluZ10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZGF0YXNldE5hbWUsIHNldERhdGFzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNldEZpbGUoc2VsZWN0ZWRGaWxlKTtcclxuICAgICAgICBzZXREYXRhc2V0TmFtZShzZWxlY3RlZEZpbGUubmFtZS5yZXBsYWNlKCcuY3N2JywgJycpKTtcclxuXHJcbiAgICAgICAgUGFwYS5wYXJzZShzZWxlY3RlZEZpbGUsIHtcclxuICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcclxuICAgICAgICAgICAgcHJldmlldzogNSxcclxuICAgICAgICAgICAgY29tcGxldGU6IChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xzID0gT2JqZWN0LmtleXMocmVzdWx0cy5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXJzKGNvbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByZXZpZXcocmVzdWx0cy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsTWFwcGluZyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHMuZm9yRWFjaChoID0+IGluaXRpYWxNYXBwaW5nW2hdID0gJ2NhdGVnb3JpY2FsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29sdW1uTWFwcGluZyhpbml0aWFsTWFwcGluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlVHlwZSA9IChoZWFkZXIpID0+IHtcclxuICAgICAgICBzZXRDb2x1bW5NYXBwaW5nKHByZXYgPT4gKHtcclxuICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgW2hlYWRlcl06IHByZXZbaGVhZGVyXSA9PT0gJ2NhdGVnb3JpY2FsJyA/ICdudW1lcmljYWwnIDogJ2NhdGVnb3JpY2FsJ1xyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGFzZXROYW1lLFxyXG4gICAgICAgICAgICBzb3VyY2U6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbk1hcHBpbmcsXHJcbiAgICAgICAgICAgICAgICB1cGxvYWRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICByb3dDb3VudDogcHJldmlldy5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZGF0YXNldHMnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vbGQranNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlBhcmNoZW1pbiBkZSBkb25uw6llcyBlbnJlZ2lzdHLDqSBkYW5zIGxhIGJpYmxpb3Row6hxdWUgZCdPZGluICFcIik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlLDqXBvbnNlIGR1IHNlcnZldXIgOlwiLCBlcnJvckRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBMZSBTY3JpYmUgcmVmdXNlIGxlIGZvcm1hdCBkdSBmaWNoaWVyLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgcsOpc2VhdVwiLCBlcnJvcik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHNwYWNlLXktNCBzdXIgbW9iaWxlIHBvdXIgY29tcGFjdGVyXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWQ6c3BhY2UteS02IGFuaW1hdGUtZmFkZUluXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogRm9ybXVsYWlyZSBkJ2ltcG9ydGF0aW9uICovfVxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBwLTQgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBwLTQgbWQ6cC02IGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQtbGcgbWQ6dGV4dC14bCBtYi00IHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTm91dmVsbGUgQXJjaGl2ZSBkZSBEb25uw6llc1xyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC00IG1kOmdhcC02IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXN0b25lLTUwMCB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ibGFjayBtYi0yXCI+RmljaGllciBDU1YgdW5pcXVlbWVudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiLmNzdlwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHRleHQtc20gdGV4dC1zdG9uZS00MDAgZmlsZTptci00IGZpbGU6cHktMiBmaWxlOnB4LTQgZmlsZTpyb3VuZGVkIGZpbGU6Ym9yZGVyLTAgZmlsZTp0ZXh0LXhzIGZpbGU6Zm9udC1ibGFjayBmaWxlOnVwcGVyY2FzZSBmaWxlOmJnLXZpa2luZy1nb2xkIGZpbGU6dGV4dC1ibGFjayBob3ZlcjpmaWxlOmJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmlsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctYXV0byBwdC0yIG1kOnB0LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXBsb2FkfSBkaXNhYmxlZD17aXNVcGxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctYXV0byBiZy12aWtpbmctZmlyZSB0ZXh0LXdoaXRlIHB5LTMgcHgtOCBmb250LWJsYWNrIHVwcGVyY2FzZSB0ZXh0LXhzIHNoYWRvdy1sZyBob3ZlcjpzY2FsZS0xMDUgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Z3JheXNjYWxlIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1VwbG9hZGluZyA/ICdHcmF2dXJlLi4uJyA6ICdTY2VsbGVyIGxcXCdBcmNoaXZlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIEFwZXLDp3UgVGVjaG5pcXVlICovfVxyXG4gICAgICAgICAgICB7cHJldmlldy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwLzgwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMTAgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzQwIHAtMyBib3JkZXItYiBib3JkZXItd2hpdGUvNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LWJsYWNrIHVwcGVyY2FzZSB0ZXh0LXZpa2luZy1nb2xkLzUwXCI+QW5hbHlzZSBkZSBsYSBzdHJ1Y3R1cmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIExlIHNjcm9sbCBob3Jpem9udGFsIGVzdCBnw6lyw6kgaWNpIHBhciBvdmVyZmxvdy14LWF1dG8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxlZnQgYm9yZGVyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWJsYWNrLzYwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzLm1hcChoID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogbWluLXcgcG91ciBmb3JjZXIgbGEgbGFyZ2V1ciBldCBhY3RpdmVyIGxlIHNjcm9sbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aH0gY2xhc3NOYW1lPVwicC0zIG1kOnAtNCBib3JkZXItciBib3JkZXItd2hpdGUvNSBtaW4tdy1bMTQwcHhdIGFsaWduLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcGFyY2htZW50IHRleHQteHMgZm9udC1ib2xkIG1iLTIgdHJ1bmNhdGVcIiB0aXRsZT17aH0+e2h9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlVHlwZShoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1bOXB4XSB3LWZ1bGwgcHgtMiBweS0xIHJvdW5kZWQtZnVsbCBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyIHRyYW5zaXRpb24tY29sb3JzIGJvcmRlciAke2NvbHVtbk1hcHBpbmdbaF0gPT09ICdudW1lcmljYWwnID8gJ2JnLWJsdWUtNjAwLzIwIHRleHQtYmx1ZS00MDAgYm9yZGVyLWJsdWUtNTAwLzMwJyA6ICdiZy1lbWVyYWxkLTYwMC8yMCB0ZXh0LWVtZXJhbGQtNDAwIGJvcmRlci1lbWVyYWxkLTUwMC8zMCd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5NYXBwaW5nW2hdID09PSAnbnVtZXJpY2FsJyA/ICfwn5SiIE51bcOpcmlxdWUnIDogJ/CflKQgQ2F0w6lnb3JpZWwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXZpZXcubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcnMubWFwKGggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogd2hpdGVzcGFjZS1ub3dyYXAgcG91ciDDqXZpdGVyIGxlcyByZXRvdXJzIMOgIGxhIGxpZ25lIG1vY2hlcyBkYW5zIGxlcyBjZWxsdWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2h9IGNsYXNzTmFtZT1cInAtMyBtZDpwLTQgdGV4dC1bMTBweF0gbWQ6dGV4dC1bMTFweF0gdGV4dC1zdG9uZS00MDAgYm9yZGVyLXIgYm9yZGVyLXdoaXRlLzUgaXRhbGljIHdoaXRlc3BhY2Utbm93cmFwIG1heC13LVsyMDBweF0gb3ZlcmZsb3ctaGlkZGVuIHRleHQtZWxsaXBzaXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvd1toXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogQXJjaGl2ZXMgZXhpc3RhbnRlcyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZC80MCBmb250LWRyYWdvbiB0ZXh0LXNtIG1iLTQgbWQ6bWItNiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8yMCBwYi0yXCI+UmVnaXN0cmVzIGTDqWrDoCBwcsOpc2VudHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBncmlkIHJlc3BvbnNpdmUgMSAtPiAyIC0+IDMgY29sb25uZXMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTMgbWQ6Z2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YXNldHM/Lmxlbmd0aCA+IDAgPyBkYXRhc2V0cy5tYXAoZHMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZHMuaWR9IGNsYXNzTmFtZT1cInAtNCBiZy1ibGFjay8yMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQvNDAgdHJhbnNpdGlvbi1hbGwgZ3JvdXAgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9udC1ib2xkIHRleHQtc20gZ3JvdXAtaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9ycyB0cnVuY2F0ZVwiIHRpdGxlPXtkcy5uYW1lfT57ZHMubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1zdG9uZS02MDAgdXBwZXJjYXNlIGZvbnQtYm9sZCBpdGFsaWMgdHJ1bmNhdGUgbWF4LXctWzYwJV1cIiB0aXRsZT17ZHMuc291cmNlfT57ZHMuc291cmNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGJnLXN0b25lLTgwMCBweC0yIHB5LTAuNSByb3VuZGVkIHRleHQtc3RvbmUtNDAwIHdoaXRlc3BhY2Utbm93cmFwXCI+e2RzLnJvd3NDb3VudH0gbGlnbmVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgcHktMTAgdGV4dC1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItc3RvbmUtODAwIHRleHQtc3RvbmUtNjAwIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYmxhY2sgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW5lIGRvbm7DqWUgbidhIMOpdMOpIGdyYXbDqWUgcG91ciBsZSBtb21lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3ZpZGVyU3BhY2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBEZXNpZ25lclNwYWNlID0gKCkgPT4ge1xyXG4gICAgLy8gLS0tIMOJVEFUUyAtLS1cclxuICAgIGNvbnN0IFZJS0lOR19PUkFOR0VfREVGQVVMVCA9ICcjZTY3ZTIyJzsgXHJcbiAgICBcclxuICAgIGNvbnN0IFtnbG9iYWxDb2xvciwgc2V0R2xvYmFsQ29sb3JdID0gdXNlU3RhdGUoVklLSU5HX09SQU5HRV9ERUZBVUxUKTtcclxuICAgIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQXJ0aWNsZUlkLCBzZXRTZWxlY3RlZEFydGljbGVJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYXJ0aWNsZVN0eWxlcywgc2V0QXJ0aWNsZVN0eWxlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdGl0bGVDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGNvbnRlbnRCZzogJyMxYzE5MTcnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtpc1NhdmluZywgc2V0SXNTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8vIC0tLSBDSEFSR0VNRU5UIElOSVRJQUwgLS0tXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQXJ0aWNsZXMoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcclxuICAgICAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJy0tdmlraW5nLW9yYW5nZScpLnRyaW0oKTtcclxuICAgICAgICBpZiAoY3VycmVudENvbG9yICYmIGN1cnJlbnRDb2xvci5zdGFydHNXaXRoKCcjJykpIHtcclxuICAgICAgICAgICAgc2V0R2xvYmFsQ29sb3IoY3VycmVudENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hBcnRpY2xlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2FydGljbGVzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZGF0YVsnaHlkcmE6bWVtYmVyJ10gfHwgZGF0YS5tZW1iZXIgfHwgKEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW10pO1xyXG4gICAgICAgICAgICBzZXRBcnRpY2xlcyhpdGVtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBjaGFyZ2VtZW50IGFydGljbGVzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyAtLS0gQUNUSU9OUyBGT1JHRSBHTE9CQUxFIC0tLVxyXG4gICAgY29uc3QgaGFuZGxlR2xvYmFsQ29sb3JQcmV2aWV3ID0gKG5ld0NvbG9yKSA9PiB7XHJcbiAgICAgICAgc2V0R2xvYmFsQ29sb3IobmV3Q29sb3IpO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aWtpbmctb3JhbmdlJywgbmV3Q29sb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldEdsb2JhbENvbG9yID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIlZvdWxlei12b3VzIHZyYWltZW50IHJlc3RhdXJlciBsZXMgY291bGV1cnMgZCdvcmlnaW5lIGR1IHZpbGxhZ2UgP1wiKSkge1xyXG4gICAgICAgICAgICBzZXRJc1NhdmluZyh0cnVlKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUdsb2JhbENvbG9yUHJldmlldyhWSUtJTkdfT1JBTkdFX0RFRkFVTFQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hZG1pbi9yZXNldC1nbG9iYWwtZGVzaWduJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykgYWxlcnQoXCLwn5SlIExlcyBjb3VsZXVycyBkJ29yaWdpbmUgb250IMOpdMOpIHJlc3RhdXLDqWVzICFcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciByZXNldDpcIiwgZXJyKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHNldElzU2F2aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2F2ZUdsb2JhbFN0eWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzU2F2aW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYWRtaW4vc2F2ZS1nbG9iYWwtZGVzaWduJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtYWluQ29sb3I6IGdsb2JhbENvbG9yIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIGFsZXJ0KFwi4pqU77iPIExlIHRow6htZSBkdSB2aWxsYWdlIGEgw6l0w6kgZ3JhdsOpIGRhbnMgbGEgcGllcnJlICFcIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIGRlIGNvbm5leGlvbiDDoCBsYSBmb3JnZS5cIik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNTYXZpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIEFDVElPTlMgQ0hST05JUVVFUyAtLS1cclxuICAgIGNvbnN0IGhhbmRsZUFydGljbGVTZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRBcnRpY2xlSWQoaWQpO1xyXG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBhcnRpY2xlcy5maW5kKGEgPT4gU3RyaW5nKGEuaWQpID09PSBTdHJpbmcoaWQpKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoYXJ0aWNsZSAmJiBhcnRpY2xlLmRlc2lnbkNvbmZpZykge1xyXG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB0eXBlb2YgYXJ0aWNsZS5kZXNpZ25Db25maWcgPT09ICdzdHJpbmcnIFxyXG4gICAgICAgICAgICAgICAgPyBKU09OLnBhcnNlKGFydGljbGUuZGVzaWduQ29uZmlnKSBcclxuICAgICAgICAgICAgICAgIDogYXJ0aWNsZS5kZXNpZ25Db25maWc7XHJcbiAgICAgICAgICAgIHNldEFydGljbGVTdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGVDb2xvcjogY29uZmlnLnRpdGxlQ29sb3IgfHwgJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgY29udGVudEJnOiBjb25maWcuY29udGVudEJnIHx8ICcjMWMxOTE3J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRBcnRpY2xlU3R5bGVzKHsgdGl0bGVDb2xvcjogJyNmZmZmZmYnLCBjb250ZW50Qmc6ICcjMWMxOTE3JyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNhdmVBcnRpY2xlU3R5bGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZEFydGljbGVJZCkgcmV0dXJuO1xyXG4gICAgICAgIHNldElzU2F2aW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvYWRtaW4vYXJ0aWNsZS8ke3NlbGVjdGVkQXJ0aWNsZUlkfS9zdHlsZWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25Db25maWc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVDb2xvcjogYXJ0aWNsZVN0eWxlcy50aXRsZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Qmc6IGFydGljbGVTdHlsZXMuY29udGVudEJnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLinKggTGUgc3R5bGUgZGUgY2V0dGUgY2hyb25pcXVlIGEgw6l0w6kgc2F1dmVnYXJkw6kgIVwiKTtcclxuICAgICAgICAgICAgICAgIGZldGNoQXJ0aWNsZXMoKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgcsOpc2VhdS5cIik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNTYXZpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTAgcC02IG1heC13LTV4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIHsvKiAxLiBTRUNUSU9OIEZPUkdFIEdMT0JBTEUgKi99XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzIwIHAtNiByb3VuZGVkLWxnIHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPkZvcmdlIEdsb2JhbGUgKFNpdGUpPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0R2xvYmFsQ29sb3J9IGRpc2FibGVkPXtpc1NhdmluZ30gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gYmctc3RvbmUtODAwIGhvdmVyOmJnLXN0b25lLTcwMCB0ZXh0LXN0b25lLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMSBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYW5zaXRpb24tYWxsIGRpc2FibGVkOm9wYWNpdHktNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUsOpaW5pdGlhbGlzZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC02IG1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXN0b25lLTUwMCBmb250LWJvbGQgdXBwZXJjYXNlXCI+Q291bGV1ciBQcmluY2lwYWxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIHZhbHVlPXtnbG9iYWxDb2xvcn0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVHbG9iYWxDb2xvclByZXZpZXcoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgY3Vyc29yLXBvaW50ZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTcwMCByb3VuZGVkLWxnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBiZy1ibGFjay80MCBwLTYgcm91bmRlZCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogZ2xvYmFsQ29sb3IgfX0gY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgZHJvcC1zaGFkb3ctbGcgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJJREVSUyBPRiBCRVJLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlR2xvYmFsU3R5bGV9IGRpc2FibGVkPXtpc1NhdmluZ30gY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMgYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJvbGQgdXBwZXJjYXNlIHJvdW5kZWQgaG92ZXI6YnJpZ2h0bmVzcy0xMTAgdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6b3BhY2l0eS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1NhdmluZyA/IFwiR3JhdnVyZS4uLlwiIDogXCJWYWxpZGVyIHBvdXIgdG91dCBsZSB2aWxsYWdlXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgey8qIDIuIFNFQ1RJT04gU1RZTEUgREVTIENIUk9OSVFVRVMgKENPUlJJR8OJRSBQT1VSIEwnQVBFUsOHVSkgKi99XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzIwIHAtNiByb3VuZGVkLWxnIHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1kcmFnb24gdGV4dC1ibHVlLTQwMCBtYi02IHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5TdHlsZSBkZXMgQ2hyb25pcXVlcyAoQXJ0aWNsZXMpPC9oMj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LVsxMHB4XSBmb250LWJvbGQgdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIG1iLTJcIj5DaG9pc2lyIHVuIHLDqWNpdCDDoCBtb2RpZmllcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtzZWxlY3RlZEFydGljbGVJZH0gb25DaGFuZ2U9e2hhbmRsZUFydGljbGVTZWxlY3R9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1zdG9uZS04MDAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgdGV4dC13aGl0ZSBwLTMgcm91bmRlZCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIHRyYW5zaXRpb24tY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIFPDqWxlY3Rpb25uZXIgdW4gQXJ0aWNsZSAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoYXJ0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2FydC5pZH0gdmFsdWU9e2FydC5pZH0+e2FydC50aXRsZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS04MDAgcC0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1zdG9uZS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTBweF0gZm9udC1ib2xkIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSBtYi0yXCI+Q291bGV1ciBUaXRyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIHZhbHVlPXthcnRpY2xlU3R5bGVzLnRpdGxlQ29sb3J9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXJ0aWNsZVN0eWxlcyhwcmV2ID0+ICh7IC4uLnByZXYsIHRpdGxlQ29sb3I6IGUudGFyZ2V0LnZhbHVlIH0pKX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgYmctdHJhbnNwYXJlbnQgY3Vyc29yLXBvaW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMCBwLTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LVsxMHB4XSBmb250LWJvbGQgdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIG1iLTJcIj5Gb25kIENvbnRlbnU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiB2YWx1ZT17YXJ0aWNsZVN0eWxlcy5jb250ZW50Qmd9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXJ0aWNsZVN0eWxlcyhwcmV2ID0+ICh7IC4uLnByZXYsIGNvbnRlbnRCZzogZS50YXJnZXQudmFsdWUgfSkpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBiZy10cmFuc3BhcmVudCBjdXJzb3ItcG9pbnRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBUEVSw4dVIENPUlJJR8OJIDogVXRpbGlzZSBsYSBjbGFzc2UgZXQgbGEgdmFyaWFibGUgQ1NTIGRlIEFwcC5jc3MgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05NTAgcC02IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtaW4taC1bMTgwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwiLS1hcnRpY2xlLXRpdGxlLWNvbG9yXCI6IGFydGljbGVTdHlsZXMudGl0bGVDb2xvciB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtZHluYW1pYy10aXRsZSB0ZXh0LTN4bCBmb250LWRyYWdvbiBtYi00IHVwcGVyY2FzZSB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEFydGljbGVJZCA/IGFydGljbGVzLmZpbmQoYSA9PiBTdHJpbmcoYS5pZCkgPT09IFN0cmluZyhzZWxlY3RlZEFydGljbGVJZCkpPy50aXRsZSA6IFwiVGl0cmUgZGUgbCdBcnRpY2xlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGFydGljbGVTdHlsZXMuY29udGVudEJnIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQgdGV4dC1zdG9uZS00MDAgdGV4dC1zbSBpdGFsaWMgdHJhbnNpdGlvbi1hbGwgYm9yZGVyIGJvcmRlci13aGl0ZS81XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMZSBkcmFnb24gc3Vydm9sYSBsZXMgZmFsYWlzZXMgZGUgQmVyay4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlQXJ0aWNsZVN0eWxlfSBkaXNhYmxlZD17aXNTYXZpbmcgfHwgIXNlbGVjdGVkQXJ0aWNsZUlkfSBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtOCBweS00IGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZSByb3VuZGVkIHRyYW5zaXRpb24tYWxsIGRpc2FibGVkOm9wYWNpdHktMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXNTYXZpbmcgPyAnR3JhdnVyZSBlbiBjb3Vycy4uLicgOiAnRW5yZWdpc3RyZXIgbGUgc3R5bGUgZHUgcsOpY2l0J31cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzaWduZXJTcGFjZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCB1c2VyID0gbnVsbDtcclxuXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB1c2VyID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb2tlbiBpbnZhbGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIG5hdmlnYXRlKCcvbG9naW4nKTtcclxuICAgICAgICBzZXRJc01lbnVPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FuU2VlRGFzaGJvYXJkID0gdXNlcj8ucm9sZXM/LmluY2x1ZGVzKCdST0xFX0VESVRFVVInKSB8fCB1c2VyPy5yb2xlcz8uaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcclxuICAgIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHNldElzTWVudU9wZW4oZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gTGEgYmFycmUgZGUgbmF2aWdhdGlvbiBwcmluY2lwYWxlIChsZSBiYW5kZWF1IGR1IGhhdXQpXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBib3JkZXItYi0yIGJvcmRlci12aWtpbmctZ29sZC81MCBwLTQgc3RpY2t5IHRvcC0wIHotNTAgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBMT0dPIChaLTUwIHBvdXIgcmVzdGVyIGF1LWRlc3N1cyBkdSBtZW51IHBsZWluIMOpY3JhbikgKi99XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGRyb3Atc2hhZG93LW1kIGdyb3VwIHotNTAgcmVsYXRpdmVcIiBvbkNsaWNrPXtjbG9zZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtNHhsIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB1cHBlcmNhc2VcIj5SaWRlcnMgb2YgQmVyazwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEJPVVRPTiBCVVJHRVIgKFotNTAgcG91ciByZXN0ZXIgY2xpcXVhYmxlKSAqL31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHRleHQtdmlraW5nLWdvbGQgei01MCBmb2N1czpvdXRsaW5lLW5vbmUgcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc01lbnVPcGVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj7inJU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+4piwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTUVOVSBQUklOQ0lQQUwgLyBNT0JJTEUgT1ZFUkxBWSBcclxuICAgICAgICAgICAgICAgICAgICAtIGZpeGVkIGluc2V0LTAgOiBQcmVuZCBUT1VUIGwnw6ljcmFuXHJcbiAgICAgICAgICAgICAgICAgICAgLSBiZy1zdG9uZS05MDAgOiBGb25kIE5PSVIvR1JJUyBPUEFRVUUgKFBhcyBkZSB0cmFuc3BhcmVuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLSB6LTQwIDogSnVzdGUgc291cyBsZSBsb2dvIGV0IGxlIGJ1cmdlclxyXG4gICAgICAgICAgICAgICAgICAgIC0gZmxleC1jb2wganVzdGlmeS1jZW50ZXIgOiBDZW50cmUgbGUgY29udGVudSB2ZXJ0aWNhbGVtZW50IHN1ciBtb2JpbGVcclxuICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICBmaXhlZCBpbnNldC0wIHotNDAgYmctc3RvbmUtOTAwIFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC04IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFxyXG4gICAgICAgICAgICAgICAgICAgICR7aXNNZW51T3BlbiA/ICd0cmFuc2xhdGUteC0wJyA6ICd0cmFuc2xhdGUteC1mdWxsJ31cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBtZDpzdGF0aWMgbWQ6dHJhbnNmb3JtLW5vbmUgbWQ6YmctdHJhbnNwYXJlbnQgbWQ6ZmxleC1yb3cgbWQ6anVzdGlmeS1lbmQgbWQ6aC1hdXRvIG1kOnAtMFxyXG4gICAgICAgICAgICAgICAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIExJRU5TIERFIE5BVklHQVRJT04gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIHNwYWNlLXktOCBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC02IHRleHQtM3hsIG1kOnRleHQtbGcgZm9udC1kcmFnb24gdHJhY2tpbmctd2lkZSB0ZXh0LXZpa2luZy1saWdodCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIiBvbkNsaWNrPXtjbG9zZU1lbnV9PkFjY3VlaWw8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIiBvbkNsaWNrPXtjbG9zZU1lbnV9PkZvcnVtPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhblNlZURhc2hib2FyZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWRtaW5cIiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvNTAgcHgtNCBweS0yIG1kOnB4LTIgbWQ6cHktMC41IGhvdmVyOmJnLXZpa2luZy1nb2xkIGhvdmVyOnRleHQtYmxhY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCIgb25DbGljaz17Y2xvc2VNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc2VpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFNFQ1RJT04gVVRJTElTQVRFVVIgKENvbm5leGlvbiAvIETDqWNvbm5leGlvbikgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtNiBtZDpnYXAtNCBtZDpib3JkZXItbCBib3JkZXItc3RvbmUtNzAwIG1kOnBsLTYgbXQtOCBtZDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshdG9rZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC1zbSBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvblwiIG9uQ2xpY2s9e2Nsb3NlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5leGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT1cImJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgcHgtOCBweS0zIG1kOnB4LTQgbWQ6cHktMS41IHRleHQteGwgbWQ6dGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1sZ1wiIG9uQ2xpY2s9e2Nsb3NlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlam9pbmRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSBmb250LWJsYWNrIGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcj8ucHNldWRvIHx8IFwiR3VlcnJpZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQtWzEwcHhdIHRleHQtdmlraW5nLWZpcmUgdXBwZXJjYXNlIGZvbnQtYmxhY2sgYm9yZGVyIGJvcmRlci12aWtpbmctZmlyZS8zMCBweC02IHB5LTIgbWQ6cHgtMyBtZDpweS0xIGhvdmVyOmJnLXZpa2luZy1maXJlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWl0dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUsIHVzZVRocmVlIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcclxuaW1wb3J0IHsgdXNlR0xURiwgdXNlQW5pbWF0aW9ucywgQ2VudGVyLCBIdG1sLCB1c2VUZXh0dXJlLCBTdGFycyB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJztcclxuXHJcbmNvbnN0IE1PREVMX1BBVEggPSAnL21vZGVscy9uaWdodF9mdXJ5LmdsYic7XHJcbmNvbnN0IFRFWFRVUkVfUEFUSCA9ICcvdGV4dHVyZXMvbmlnaHRfZnVyeV9za2luLndlYnAnO1xyXG5jb25zdCBBTklNQVRJT05fTkFNRSA9ICdOaWdodEZ1cnlfYXJtYXR1cmVBY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gRHJhZ29uTW9kZWwoeyB2aXRlc3NlUm90YXRpb24sIHZpdGVzc2VBbmltYXRpb24sIGZhY3RldXJUYWlsbGUsIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCB7IHNjZW5lLCBhbmltYXRpb25zIH0gPSB1c2VHTFRGKE1PREVMX1BBVEgpO1xyXG4gIGNvbnN0IHRleHR1cmUgPSB1c2VUZXh0dXJlKFRFWFRVUkVfUEFUSCk7XHJcbiAgY29uc3QgeyB2aWV3cG9ydCB9ID0gdXNlVGhyZWUoKTsgXHJcbiAgXHJcbiAgLy8gQ2FsY3VsIGRlIGJhc2UgcmVzcG9uc2l2ZVxyXG4gIGNvbnN0IGJhc2VTY2FsZSA9IHZpZXdwb3J0LndpZHRoIDwgNSA/IDAuMzUgOiAwLjg7IFxyXG4gIGNvbnN0IGZpbmFsU2NhbGUgPSBiYXNlU2NhbGUgKiBmYWN0ZXVyVGFpbGxlO1xyXG5cclxuICB0ZXh0dXJlLmZsaXBZID0gZmFsc2U7XHJcbiAgdGV4dHVyZS5jb2xvclNwYWNlID0gJ3NyZ2InO1xyXG5cclxuICBjb25zdCBncm91cCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHsgYWN0aW9ucyB9ID0gdXNlQW5pbWF0aW9ucyhhbmltYXRpb25zLCBncm91cCk7XHJcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjZW5lLnRyYXZlcnNlKChjaGlsZCkgPT4ge1xyXG4gICAgICBpZiAoY2hpbGQuaXNNZXNoKSB7XHJcbiAgICAgICAgY2hpbGQubWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcclxuICAgICAgICBjaGlsZC5tYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtzY2VuZSwgdGV4dHVyZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGlvbnMgJiYgYWN0aW9uc1tBTklNQVRJT05fTkFNRV0pIHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXTtcclxuICAgICAgICBhY3Rpb24ucmVzZXQoKS5mYWRlSW4oMC41KS5wbGF5KCk7XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFthY3Rpb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9ucyAmJiBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXSkge1xyXG4gICAgICAgIGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdLnRpbWVTY2FsZSA9IHZpdGVzc2VBbmltYXRpb247XHJcbiAgICB9XHJcbiAgfSwgW3ZpdGVzc2VBbmltYXRpb24sIGFjdGlvbnNdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQW5pbWF0aW9uID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXTtcclxuICAgIGlmICghYWN0aW9uKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGlzUGxheWluZykge1xyXG4gICAgICAgIGFjdGlvbi5wYXVzZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhY3Rpb24ucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgYWN0aW9uLnBsYXkoKTsgXHJcbiAgICB9XHJcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRnJhbWUoKCkgPT4ge1xyXG4gICAgaWYoZ3JvdXAuY3VycmVudCkgZ3JvdXAuY3VycmVudC5yb3RhdGlvbi55ICs9IHZpdGVzc2VSb3RhdGlvbjtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxwcmltaXRpdmUgXHJcbiAgICAgIHJlZj17Z3JvdXB9IFxyXG4gICAgICBvYmplY3Q9e3NjZW5lfSBcclxuICAgICAgb25DbGljaz17dG9nZ2xlQW5pbWF0aW9ufVxyXG4gICAgICBvblBvaW50ZXJPdmVyPXsoKSA9PiBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ31cclxuICAgICAgb25Qb2ludGVyT3V0PXsoKSA9PiBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdhdXRvJ31cclxuICAgICAgc2NhbGU9e2ZpbmFsU2NhbGV9IFxyXG4gICAgICBwb3NpdGlvbj17WzAsIC0xLCAwXX0gXHJcbiAgICAgIHsuLi5wcm9wc30gXHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IE5pZ2h0RnVyeVNjZW5lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyb3RTcGVlZCwgc2V0Um90U3BlZWRdID0gdXNlU3RhdGUoMC4wMDEpO1xyXG4gIGNvbnN0IFthbmltU3BlZWQsIHNldEFuaW1TcGVlZF0gPSB1c2VTdGF0ZSgyLjUpO1xyXG4gIGNvbnN0IFtzaXplRmFjdG9yLCBzZXRTaXplRmFjdG9yXSA9IHVzZVN0YXRlKDEpOyBcclxuICBjb25zdCBbY29udHJvbHNWaXNpYmxlLCBzZXRDb250cm9sc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgIHNldFJvdFNwZWVkKDAuMDAxKTtcclxuICAgIHNldEFuaW1TcGVlZCgyLjUpO1xyXG4gICAgc2V0U2l6ZUZhY3RvcigxKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBiZy1bIzA1MDUxMF1cIj5cclxuICAgICAgXHJcbiAgICAgIDxDYW52YXMgc2hhZG93cyBjYW1lcmE9e3sgcG9zaXRpb246IFswLCAyLCAxMF0sIGZvdjogNDUgfX0+XHJcbiAgICAgICAgPGNvbG9yIGF0dGFjaD1cImJhY2tncm91bmRcIiBhcmdzPXtbJyMwNTA1MTAnXX0gLz5cclxuICAgICAgICA8U3RhcnMgcmFkaXVzPXsxMDB9IGRlcHRoPXs1MH0gY291bnQ9ezUwMDB9IGZhY3Rvcj17NH0gc2F0dXJhdGlvbj17MH0gZmFkZSBzcGVlZD17MX0gLz5cclxuICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17M30gLz5cclxuICAgICAgICA8ZGlyZWN0aW9uYWxMaWdodCBwb3NpdGlvbj17WzEwLCAxMCwgNV19IGludGVuc2l0eT17NH0gLz5cclxuICAgICAgICA8c3BvdExpZ2h0IHBvc2l0aW9uPXtbLTUsIDUsIDEwXX0gaW50ZW5zaXR5PXs1fSBjb2xvcj1cIiNhODU1ZjdcIiAvPlxyXG4gICAgICAgIDxzcG90TGlnaHQgcG9zaXRpb249e1swLCA1LCAtMTBdfSBpbnRlbnNpdHk9ezV9IGNvbG9yPVwiI2ZmZmZmZlwiIC8+XHJcblxyXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PEh0bWwgY2VudGVyPjxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhzIGFuaW1hdGUtcHVsc2VcIj5JbnZvY2F0aW9uLi4uPC9kaXY+PC9IdG1sPn0+XHJcbiAgICAgICAgICA8Q2VudGVyIHRvcD5cclxuICAgICAgICAgICAgPERyYWdvbk1vZGVsIFxyXG4gICAgICAgICAgICAgICAgdml0ZXNzZVJvdGF0aW9uPXtyb3RTcGVlZH0gXHJcbiAgICAgICAgICAgICAgICB2aXRlc3NlQW5pbWF0aW9uPXthbmltU3BlZWR9XHJcbiAgICAgICAgICAgICAgICBmYWN0ZXVyVGFpbGxlPXtzaXplRmFjdG9yfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ2VudGVyPlxyXG4gICAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICAgIDwvQ2FudmFzPlxyXG5cclxuICAgICAgey8qIPCfjpvvuI8gQk9VVE9OIFRPR0dMRSAoTW9iaWxlIHVuaXF1ZW1lbnQpICovfVxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbnRyb2xzVmlzaWJsZSghY29udHJvbHNWaXNpYmxlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IHotMjAgYmctYmxhY2svNjAgYmFja2Ryb3AtYmx1ciB0ZXh0LXZpa2luZy1nb2xkIHAtMyByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBtZDpoaWRkZW4gc2hhZG93LWxnIGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiXHJcbiAgICAgID5cclxuICAgICAgICB7Y29udHJvbHNWaXNpYmxlID8gJ+KclScgOiAn4pqZ77iPJ31cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICB7Lyog8J+Om++4jyBVSSBQQU5ORUFVIERFIENPTlRSw5RMRSAqL31cclxuICAgICAgey8qIE1PRElGIEVSR09OT01JUVVFIDogXHJcbiAgICAgICAgICAtIE1vYmlsZSA6IFwiYm90dG9tLTAgdy1mdWxsIHJvdW5kZWQtdC0yeGxcIiAoZ2xpc3NlIGR1IGJhcylcclxuICAgICAgICAgIC0gRGVza3RvcCA6IFwidG9wLTQgcmlnaHQtNCB3LTY0IHJvdW5kZWQteGxcIiAoZmxvdHRlIGVuIGhhdXQgw6AgZHJvaXRlKVxyXG4gICAgICAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICBhYnNvbHV0ZSB6LTEwIGJnLWJsYWNrLzgwIGJhY2tkcm9wLWJsdXItbWQgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzMwIHNoYWRvdy0yeGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogU3R5bGVzIE1vYmlsZSAoQm90dG9tIFNoZWV0KSAqL1xyXG4gICAgICAgIGJvdHRvbS0wIGxlZnQtMCB3LWZ1bGwgcm91bmRlZC10LTJ4bCBwLTYgcGItOFxyXG4gICAgICAgICR7Y29udHJvbHNWaXNpYmxlID8gJ3RyYW5zbGF0ZS15LTAgb3BhY2l0eS0xMDAnIDogJ3RyYW5zbGF0ZS15LWZ1bGwgb3BhY2l0eS0wIHBvaW50ZXItZXZlbnRzLW5vbmUnfVxyXG5cclxuICAgICAgICAvKiBTdHlsZXMgRGVza3RvcCAoRmxvYXRpbmcgQm94KSAqL1xyXG4gICAgICAgIG1kOmJvdHRvbS1hdXRvIG1kOmxlZnQtYXV0byBtZDp0b3AtNCBtZDpyaWdodC00IG1kOnctNjQgbWQ6cm91bmRlZC14bCBtZDpwLTQgbWQ6cGItNFxyXG4gICAgICAgIG1kOnRyYW5zbGF0ZS15LTAgbWQ6b3BhY2l0eS0xMDAgbWQ6cG9pbnRlci1ldmVudHMtYXV0b1xyXG4gICAgICBgfT5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi00IGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMCBwYi0yXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtMzAwIGZvbnQtYm9sZCB0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgUGFyYW3DqHRyZXNcclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgey8qIEJvdXRvbiByZXNldCBkaXNjcmV0ICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZXR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXN0b25lLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHVwcGVyY2FzZSBmb250LWJvbGQgdW5kZXJsaW5lIGRlY29yYXRpb24tZG90dGVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBDT05UUk9MRVMgQ09NUEFDVFMgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgey8qIDEuIFRhaWxsZSAqL31cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0xIHRleHQtc3RvbmUtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGFpbGxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwIGZvbnQtbW9ub1wiPnh7c2l6ZUZhY3Rvci50b0ZpeGVkKDEpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjAuMVwiIG1heD1cIjNcIiBzdGVwPVwiMC4xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NpemVGYWN0b3J9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2l6ZUZhY3RvcihwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMS41IGJnLXN0b25lLTcwMCByb3VuZGVkLWxnIGFwcGVhcmFuY2Utbm9uZSBjdXJzb3ItcG9pbnRlciBhY2NlbnQtZ3JlZW4tNTAwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDIuIFJvdGF0aW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTEgdGV4dC1zdG9uZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5WaXRlc3NlIFJvdGF0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDAgZm9udC1tb25vXCI+eyhyb3RTcGVlZCAqIDEwMDApLnRvRml4ZWQoMCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjAuMDVcIiBzdGVwPVwiMC4wMDFcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm90U3BlZWR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Um90U3BlZWQocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEuNSBiZy1zdG9uZS03MDAgcm91bmRlZC1sZyBhcHBlYXJhbmNlLW5vbmUgY3Vyc29yLXBvaW50ZXIgYWNjZW50LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDMuIEFuaW1hdGlvbiAqL31cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0xIHRleHQtc3RvbmUtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Vml0ZXNzZSBBbmltYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUtNDAwIGZvbnQtbW9ub1wiPnh7YW5pbVNwZWVkLnRvRml4ZWQoMSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjVcIiBzdGVwPVwiMC4xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FuaW1TcGVlZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmltU3BlZWQocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEuNSBiZy1zdG9uZS03MDAgcm91bmRlZC1sZyBhcHBlYXJhbmNlLW5vbmUgY3Vyc29yLXBvaW50ZXIgYWNjZW50LXB1cnBsZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG51c2VHTFRGLnByZWxvYWQoTU9ERUxfUEFUSCk7XHJcbnVzZVRleHR1cmUucHJlbG9hZChURVhUVVJFX1BBVEgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmlnaHRGdXJ5U2NlbmU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3RhclJhdGluZyA9ICh7IGFydGljbGVJZCwgY3VycmVudFJhdGluZywgb25SYXRlIH0pID0+IHtcclxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoY3VycmVudFJhdGluZyB8fCAwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSYXRpbmcgPSAoc2NvcmUpID0+IHtcclxuICAgICAgICBzZXRSYXRpbmcoc2NvcmUpO1xyXG4gICAgICAgIG9uUmF0ZShzY29yZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XHJcbiAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKChzdGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdGV4dC0zeGwgc3VyIG1vYmlsZSBwb3VyIGZhY2lsaXRlciBsZSBjbGljLCBtZDp0ZXh0LTJ4bCBzdXIgZGVza3RvcFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFqb3V0IGRlIGFjdGl2ZTpzY2FsZS0xMjUgcG91ciB1biBlZmZldCBcInBvcFwiIGF1IHRvdWNoZXJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTN4bCBtZDp0ZXh0LTJ4bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGFjdGl2ZTpzY2FsZS0xMjUgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhciA8PSAoaG92ZXIgfHwgcmF0aW5nKSA/IFwidGV4dC12aWtpbmctZ29sZCBkcm9wLXNoYWRvdy1tZFwiIDogXCJ0ZXh0LXN0b25lLTYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmF0aW5nKHN0YXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXIoc3Rhcil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihyYXRpbmcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgRG9ubmVyICR7c3Rhcn0gw6l0b2lsZShzKWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg4piFXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhclJhdGluZzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVmlraW5nUGxheWVyID0gKHsgc3JjLCBhdXRvUGxheSA9IGZhbHNlIH0pID0+IHtcclxuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlKFwiMDowMFwiKTtcclxuICAgIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoXCIwOjAwXCIpO1xyXG4gICAgY29uc3QgW2lzQmxvY2tlZCwgc2V0SXNCbG9ja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gTm91dmVhdSBzdGF0ZSBwb3VyIGTDqXRlY3RlciBsZSBibG9jYWdlXHJcblxyXG4gICAgLy8gR2VzdGlvbiBkZSBsJ0F1dG9wbGF5XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhdXRvUGxheSAmJiBhdWRpb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXlQcm9taXNlID0gYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgIGlmIChwbGF5UHJvbWlzZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5UHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VjY8OocyA6IExlIG5hdmlnYXRldXIgYSBhdXRvcmlzw6kgbCdhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzQmxvY2tlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDDiWNoZWMgOiBMZSBuYXZpZ2F0ZXVyIGEgYmxvcXXDqSBsJ2F1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0b3BsYXkgYmxvcXXDqSAoaW50ZXJhY3Rpb24gcmVxdWlzZSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzUGxheWluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzQmxvY2tlZCh0cnVlKTsgLy8gT24gc2lnbmFsZSBxdSdpbCBmYXV0IHVuZSBhY3Rpb24gbWFudWVsbGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFthdXRvUGxheSwgc3JjXSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlUGxheSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgc2V0SXNCbG9ja2VkKGZhbHNlKTsgLy8gU2kgbCd1dGlsaXNhdGV1ciBjbGlxdWUsIGxlIGJsb2NhZ2Ugc2F1dGVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUaW1lVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gYXVkaW9SZWYuY3VycmVudC5kdXJhdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodG90YWwpIHtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3MoKGN1cnJlbnQgLyB0b3RhbCkgKiAxMDApO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGltZShmb3JtYXRUaW1lKGN1cnJlbnQpKTtcclxuICAgICAgICAgICAgc2V0RHVyYXRpb24oZm9ybWF0VGltZSh0b3RhbCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VlayA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBlLnRhcmdldC5jbGllbnRXaWR0aDtcclxuICAgICAgICBjb25zdCBjbGlja1ggPSBlLm5hdGl2ZUV2ZW50Lm9mZnNldFg7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uO1xyXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gKGNsaWNrWCAvIHdpZHRoKSAqIGR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aW1lIHx8IGlzTmFOKHRpbWUpKSByZXR1cm4gXCIwOjAwXCI7XHJcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgICAgIGNvbnN0IHNlYyA9IE1hdGguZmxvb3IodGltZSAlIDYwKTtcclxuICAgICAgICByZXR1cm4gYCR7bWlufToke3NlYyA8IDEwID8gJzAnICsgc2VjIDogc2VjfWA7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFZpc3VhbGlzZXVyIGFuaW3DqVxyXG4gICAgY29uc3QgYmFycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDMwIH0pLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGtleT17aX0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMSBteC1bMXB4XSByb3VuZGVkLXQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7aXNQbGF5aW5nID8gJ2JnLXZpa2luZy1nb2xkIGFuaW1hdGUtYmFyJyA6ICdiZy1zdG9uZS03MDAgaC0xJ31gfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBgJHtNYXRoLnJhbmRvbSgpICogMC41ICsgMC40fXNgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpc1BsYXlpbmcgPyAnMTAwJScgOiAnMTAlJyBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogbXktNCBzdXIgbW9iaWxlLCBteS04IHN1ciBkZXNrdG9wLCBwLTQgc3VyIG1vYmlsZSwgcC02IHN1ciBkZXNrdG9wXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsIG14LWF1dG8gbXktNCBtZDpteS04IGJnLWJsYWNrLzgwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcm91bmRlZC1sZyBwLTQgbWQ6cC02IHNoYWRvdy1bMF8wXzMwcHhfcmdiYSgwLDAsMCwwLjgpXSBiYWNrZHJvcC1ibHVyLXNtIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIE1lc3NhZ2Ugc2kgYmxvcXXDqSAqL31cclxuICAgICAgICAgICAge2lzQmxvY2tlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svODAgei0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBhbmltYXRlLWZhZGUtaW4gcC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiB0ZXh0LXhzIHN1ciBtb2JpbGUsIHRleHQtYmFzZSBzdXIgZGVza3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgbWQ6cHgtNiBtZDpweS0zIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBzaGFkb3ctWzBfMF8yMHB4X3JnYmEoMjEyLDE3NSw1NSwwLjYpXSB0ZXh0LXhzIG1kOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg8J+UiiBBY3RpdmVyIGwnQW1iaWFuY2UgU29ub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxhdWRpbyBcclxuICAgICAgICAgICAgICAgIHJlZj17YXVkaW9SZWZ9IFxyXG4gICAgICAgICAgICAgICAgc3JjPXtzcmN9IFxyXG4gICAgICAgICAgICAgICAgb25UaW1lVXBkYXRlPXtoYW5kbGVUaW1lVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25FbmRlZD17KCkgPT4gc2V0SXNQbGF5aW5nKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uTG9hZGVkTWV0YWRhdGE9eyhlKSA9PiBzZXREdXJhdGlvbihmb3JtYXRUaW1lKGUudGFyZ2V0LmR1cmF0aW9uKSl9IC8vIENoYXJnZSBsYSBkdXLDqWUgZMOocyBsZSBkw6lidXRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IGdhcC00IHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgbWQ6Z2FwLTYgcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIEJvdXRvbiBQbGF5L1BhdXNlICovfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy0xMiBoLTEyIHN1ciBtb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEyIGgtMTIgbWQ6dy0xNCBtZDpoLTE0IGZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtpc1BsYXlpbmcgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMjEyLDE3NSw1NSwwLjUpXScgOiAndGV4dC12aWtpbmctZ29sZCBob3ZlcjpiZy12aWtpbmctZ29sZC8yMCd9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXNQbGF5aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy02IG1kOmgtNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk02IDE5aDRWNUg2djE0em04LTE0djE0aDRWNWgtNHpcIi8+PC9zdmc+IFxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNSBtZDp3LTYgbWQ6aC02IHRyYW5zbGF0ZS14LTAuNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04IDV2MTRsMTEtN3pcIi8+PC9zdmc+IFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogSW5mbyAmIFZpc3VhbGlzZXVyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtWzlweF0gc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtWzlweF0gbWQ6dGV4dC1bMTBweF0gdGV4dC12aWtpbmctZ29sZCBmb250LW1vbm8gbWItMiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG9wYWNpdHktODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2N1cnJlbnRUaW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPntpc1BsYXlpbmcgPyBcIkxlY3R1cmUuLi5cIiA6IFwiUGF1c2VcIn08L3NwYW4+IHsvKiBNYXNxdcOpIHN1ciB0csOocyBwZXRpdCDDqWNyYW4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBab25lIFZpc3VhbGlzZXVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IGgtOCBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04IG1kOmgtMTAgZmxleCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgbWItMyBvdmVyZmxvdy1oaWRkZW4gb3BhY2l0eS04MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmFyc31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEJhcnJlIGRlIHByb2dyZXNzaW9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMS41IGJnLXN0b25lLTgwMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmUgZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBiZy12aWtpbmctZ29sZCByb3VuZGVkLWZ1bGwgcmVsYXRpdmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtbGluZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctMyBoLTMgYmctd2hpdGUgcm91bmRlZC1mdWxsIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCBzaGFkb3cgc2NhbGUtMCBncm91cC1ob3ZlcjpzY2FsZS0xMDAgdHJhbnNpdGlvbi1hbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlraW5nUGxheWVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IERhdGFQcm92aWRlclNwYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvRGF0YVByb3ZpZGVyU3BhY2UnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcnRpY2xlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVGb3JtJztcclxuaW1wb3J0IERlc2lnbmVyU3BhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9EZXNpZ25lclNwYWNlJzsgLy8gRW5zdXJlIHRoaXMgcGF0aCBpcyBjb3JyZWN0IVxyXG5cclxuY29uc3QgQWRtaW5EYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJ3N0YXRzJyk7XHJcbiAgICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGxldCBjdXJyZW50VXNlciA9IG51bGw7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY3VycmVudFVzZXIgPSB0b2tlbiA/IGp3dERlY29kZSh0b2tlbikgOiBudWxsO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgZGUgZMOpY29kYWdlIGR1IHRva2VuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvbGVzID0gY3VycmVudFVzZXI/LnJvbGVzIHx8IFtdO1xyXG4gICAgY29uc3QgaXNGdWxsQWRtaW4gPSByb2xlcy5pbmNsdWRlcygnUk9MRV9BRE1JTicpO1xyXG4gICAgY29uc3QgaXNQcm92aWRlciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0ZPVVJOSVNTRVVSJykgfHwgaXNGdWxsQWRtaW47XHJcbiAgICBjb25zdCBpc0Rlc2lnbmVyID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfREVTSUdORVInKSB8fCBpc0Z1bGxBZG1pbjtcclxuICAgIGNvbnN0IGlzRWRpdG9yID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfRURJVEVVUicpIHx8IGlzRnVsbEFkbWluO1xyXG5cclxuICAgIGNvbnN0IGxvYWRTdGF0cyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaCgnL2FwaS9hZG1pbi9zdGF0cycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJBY2PDqHMgcmVmdXPDqSBwYXIgbGUgR3JhbmQgQ29uc2VpbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihqc29uID0+IHNldERhdGEoanNvbikpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBzZXRFcnJvcihlcnIubWVzc2FnZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRTdGF0cygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUFydGljbGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKFwiw4p0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgYnLDu2xlciBjZSBwYXJjaGVtaW4gZMOpZmluaXRpdmVtZW50ID9cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHByZXYgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZW1lbnRBcnRpY2xlczogcHJldi5tYW5hZ2VtZW50QXJ0aWNsZXMuZmlsdGVyKGFydCA9PiBhcnQuaWQgIT09IGlkKVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBJbXBvc3NpYmxlIGRlIHN1cHByaW1lciAoRHJvaXRzIGluc3VmZmlzYW50cyA/KVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIHNlcnZldXIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRWRpdFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdGluZ0lkKG51bGwpO1xyXG4gICAgICAgIGxvYWRTdGF0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByb21vdGUgPSBhc3luYyAodXNlcklkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9hZG1pbi91c2VyLyR7dXNlcklkfS9wcm9tb3RlYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFVzZXJzOiBkYXRhLmFsbFVzZXJzLm1hcCh1ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1LmlkID09PSB1c2VySWQgPyB7IC4uLnUsIHJvbGVzOiB1cGRhdGVkRGF0YS5uZXdSb2xlcyB9IDogdVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7IFxyXG4gICAgICAgICAgICBhbGVydChcIkVycmV1ciBsb3JzIGR1IGNoYW5nZW1lbnQgZGUgcmFuZ1wiKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBwLTEwIHRleHQtY2VudGVyIGZvbnQtZHJhZ29uXCI+e2Vycm9yfTwvZGl2PjtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIHAtMTAgZm9udC1kcmFnb24gYW5pbWF0ZS1wdWxzZSB0ZXh0LWNlbnRlclwiPkFwcGVsIGF1IEdyYW5kIENvbnNlaWwuLi48L2Rpdj47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHAtNCBtZDpwLTYgdGV4dC13aGl0ZSBwYi0yMFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctcGFyY2htZW50IG1iLTYgbWQ6bWItMTAgYm9yZGVyLWIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHBiLTQgdXBwZXJjYXNlIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgUGFsYWlzIGQnQWRtaW5pc3RyYXRpb25cclxuICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIHBhciBPbmdsZXRzIHJlc3BvbnNpdmUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTIgbWItOCBib3JkZXItYiBib3JkZXItc3RvbmUtODAwIHBiLTQganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3N0YXRzJyl9IGNsYXNzTmFtZT17YGZsZXgtZ3JvdyBtZDpmbGV4LWdyb3ctMCBweC00IHB5LTMgbWQ6cHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24gcm91bmRlZCBtZDpyb3VuZGVkLW5vbmUgJHthY3RpdmVUYWIgPT09ICdzdGF0cycgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjaycgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGJvcmRlciBib3JkZXItc3RvbmUtODAwJ31gfT5WdWUgZCdlbnNlbWJsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7aXNGdWxsQWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCd1c2VycycpfSBjbGFzc05hbWU9e2BmbGV4LWdyb3cgbWQ6ZmxleC1ncm93LTAgcHgtNCBweS0zIG1kOnB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uIHJvdW5kZWQgbWQ6cm91bmRlZC1ub25lICR7YWN0aXZlVGFiID09PSAndXNlcnMnID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2snIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCd9YH0+UG9wdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2lzRWRpdG9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignYXJ0aWNsZXMnKX0gY2xhc3NOYW1lPXtgZmxleC1ncm93IG1kOmZsZXgtZ3Jvdy0wIHB4LTQgcHktMyBtZDpweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbiByb3VuZGVkIG1kOnJvdW5kZWQtbm9uZSAke2FjdGl2ZVRhYiA9PT0gJ2FydGljbGVzJyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrJyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAnfWB9PkNocm9uaXF1ZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2lzUHJvdmlkZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdkYXRhJyl9IGNsYXNzTmFtZT17YGZsZXgtZ3JvdyBtZDpmbGV4LWdyb3ctMCBweC00IHB5LTMgbWQ6cHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24gcm91bmRlZCBtZDpyb3VuZGVkLW5vbmUgJHthY3RpdmVUYWIgPT09ICdkYXRhJyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrJyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAnfWB9PkRvbm7DqWVzIChDU1YpPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtpc0Rlc2lnbmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignZGVzaWduJyl9IGNsYXNzTmFtZT17YGZsZXgtZ3JvdyBtZDpmbGV4LWdyb3ctMCBweC00IHB5LTMgbWQ6cHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24gcm91bmRlZCBtZDpyb3VuZGVkLW5vbmUgJHthY3RpdmVUYWIgPT09ICdkZXNpZ24nID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2snIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCd9YH0+QXBwYXJlbmNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDT05URU5VIERZTkFNSVFVRSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1bNTAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgU1RBVFMgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnc3RhdHMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTYgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXItbC00IGJvcmRlci15ZWxsb3ctNjAwIHAtOCBzaGFkb3ctMnhsIHJvdW5kZWQtci1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXN0XCI+R3VlcnJpZXJzIGRlIEJlcms8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gbXQtMiB0ZXh0LXdoaXRlXCI+e2RhdGEudXNlcnNDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXItbC00IGJvcmRlci1vcmFuZ2UtNzAwIHAtOCBzaGFkb3ctMnhsIHJvdW5kZWQtci1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXN0XCI+Q2hyb25pcXVlcyDDqWNyaXRlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiBtdC0yIHRleHQtd2hpdGVcIj57ZGF0YS5hcnRpY2xlc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgVVNFUlMgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAndXNlcnMnICYmIGlzRnVsbEFkbWluICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBhbmltYXRlLWluIHNsaWRlLWluLWZyb20tYm90dG9tLTQgZHVyYXRpb24tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNoZXJjaGVyIHVuIGd1ZXJyaWVyLi4uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzIwIHAtMyByb3VuZGVkIHRleHQtc20gdy1mdWxsIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuYWxsVXNlcnM/LmZpbHRlcih1ID0+IHUucHNldWRvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSkubWFwKHUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3UuaWR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBwLTQgYmctc3RvbmUtOTAwLzUwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LWxnXCI+e3UucHNldWRvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDAgbXQtMVwiPnt1LnJvbGVzLmpvaW4oJyB8ICcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb21vdGUodS5pZCl9IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gdGV4dC14cyBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzQwIHB4LTQgcHktMiBob3ZlcjpiZy12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24gdXBwZXJjYXNlIGZvbnQtYmxhY2sgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2VyIFJhbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9OR0xFVCBBUlRJQ0xFUyAqL31cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdhcnRpY2xlcycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1mYWRlSW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlZGl0aW5nSWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBwLTQgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdJZChudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oaQPC9zcGFuPiBBbm51bGVyIGxhIG1vZGlmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlRm9ybSBpZD17ZWRpdGluZ0lkfSBvblN1Y2Nlc3M9e2hhbmRsZUVkaXRTdWNjZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXM/Lm1hcChhcnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXJ0LmlkfSBjbGFzc05hbWU9XCJwLTQgYmctc3RvbmUtOTAwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBob3Zlcjpib3JkZXItc3RvbmUtNjAwIHRyYW5zaXRpb24tY29sb3JzIGdyb3VwIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9hcnRpY2xlLyR7YXJ0LmlkfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC12aWtpbmctcGFyY2htZW50IGdyb3VwLWhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1sZyBibG9jayB0cnVuY2F0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHRleHQteHMgbXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXIgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDBcIj57YXJ0LmF1dGhvcn08L3NwYW4+IOKAoiB7bmV3IERhdGUoYXJ0LmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB3LWZ1bGwgc206dy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0lkKGFydC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBzbTpmbGV4LW5vbmUgcHgtMyBweS0zIHNtOnB5LTIgYmctc3RvbmUtODAwIHRleHQtc3RvbmUtMzAwIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtWzEwcHhdIHVwcGVyY2FzZSBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHRyYW5zaXRpb24gdGV4dC1jZW50ZXIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RpZmllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVBcnRpY2xlKGFydC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBzbTpmbGV4LW5vbmUgcHgtMyBweS0zIHNtOnB5LTIgYmctcmVkLTkwMC8yMCB0ZXh0LXJlZC01MDAgYm9yZGVyIGJvcmRlci1yZWQtOTAwLzUwIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB0cmFuc2l0aW9uIHRleHQtY2VudGVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VwcHJpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyghZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXMgfHwgZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXMubGVuZ3RoID09PSAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGl0YWxpYyB0ZXh0LWNlbnRlciBweS0xMFwiPkF1Y3VuZSBjaHJvbmlxdWUgw6AgZ8OpcmVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgREFUQSAqL31cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdkYXRhJyAmJiBpc1Byb3ZpZGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gem9vbS1pbi05NSBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFQcm92aWRlclNwYWNlIGRhdGFzZXRzPXtkYXRhLmRhdGFzZXRzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogT05HTEVUIERFU0lHTiAqL31cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdkZXNpZ24nICYmIGlzRGVzaWduZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVzaWduZXJTcGFjZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkRhc2hib2FyZDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBBcnRpY2xlUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YCwgeyBoZWFkZXJzOiB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbicgfSB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWdvbGQgZm9udC1kcmFnb24gdGV4dC14bCBtZDp0ZXh0LTJ4bCBweS0yMCBhbmltYXRlLXB1bHNlIHB4LTRcIj5SZWNoZXJjaGUgZGFucyBsZXMgYXJjaGl2ZXMuLi48L2Rpdj47XHJcbiAgICBpZiAoIWFydGljbGUpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWZpcmUgdGV4dC1sZyBtZDp0ZXh0LXhsIHB5LTEwIHB4LTRcIj5BcnRpY2xlIGludHJvdXZhYmxlIGRhbnMgbGVzIGFyY2hpdmVzLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcHgtNCBwb3VyIGxlcyBtYXJnZXMgbGF0w6lyYWxlcyBzdXIgbW9iaWxlXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW4gcHgtNCBwYi0xMlwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNiBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbiB0ZXh0LXNtIG1kOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+4oaQPC9zcGFuPiBSZXRvdXIgYXUgZm9ydW1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIE1PRElGIDogcC01IHN1ciBtb2JpbGUsIHAtOCBzdXIgZGVza3RvcCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTUgbWQ6cC04IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogRMOpY29yYXRpb24gY29pbiA6IHBsdXMgcGV0aXRlIHN1ciBtb2JpbGUgKHctMTIpICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctMTIgaC0xMiBtZDp3LTIwIG1kOmgtMjAgYmctdmlraW5nLWdvbGQgb3BhY2l0eS0xMCByb3VuZGVkLWJsLWZ1bGxcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB0ZXh0LTN4bCBzdXIgbW9iaWxlLCBicmVhay13b3JkcyBwb3VyIMOpdml0ZXIgbGVzIGTDqWJvcmRlbWVudHMgKi99XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi00IGxlYWRpbmctdGlnaHQgYnJlYWstd29yZHMgcmVsYXRpdmUgei0xMCBwci04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LXdyYXAgcG91ciBxdWUgw6dhIHBhc3NlIMOgIGxhIGxpZ25lIHN1ciBsZXMgdHLDqHMgcGV0aXRzIMOpY3JhbnMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXhzIG1kOnRleHQtc20gdGV4dC1zdG9uZS01MDAgbWItNiBtZDptYi04IGJvcmRlci1iIGJvcmRlci1zdG9uZS03MDAgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXZpa2luZy1yZWQgcHgtMiBweS0xIHJvdW5kZWQgdGV4dC13aGl0ZSBmb250LWJvbGQgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC81MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcmNoaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkNyw6nDqSBsZSB7bmV3IERhdGUoYXJ0aWNsZS5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtYmFzZSAoMTZweCkgc3VyIG1vYmlsZSwgdGV4dC1sZyAoMThweCkgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgZm9udC1zZXJpZiB3aGl0ZXNwYWNlLXByZS1saW5lIHRleHQtanVzdGlmeSBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBOb3RlOiBMZXMgYmxvY3MgZXQgY29tbWVudGFpcmVzIG7DqWNlc3NpdGVudCB1bmUgbG9naXF1ZSBwbHVzIHBvdXNzw6llIMOgIGltcGzDqW1lbnRlciBwbHVzIHRhcmQgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5pbXBvcnQgQXJ0aWNsZUZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm1cIjtcclxuXHJcbmNvbnN0IEZvcnVtUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvLyDDiXRhdCBwb3VyIGxlIHRyaVxyXG4gICAgY29uc3QgW3NvcnRPcmRlciwgc2V0U29ydE9yZGVyXSA9IHVzZVN0YXRlKFwibmV3ZXN0XCIpO1xyXG5cclxuICAgIC8vIEdlc3Rpb24gZGUgbGEgbmF2aWdhdGlvbiBpbnRlcm5lXHJcbiAgICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShcImxpc3RcIik7IC8vICdsaXN0JywgJ2NyZWF0ZScsICdlZGl0J1xyXG4gICAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyAxLiBSw6ljdXDDqXJhdGlvbiBldCBkw6ljb2RhZ2UgZHUgVG9rZW5cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIoZGVjb2RlZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYWRnZSAoVG9rZW4pIGludmFsaWRlIG91IGV4cGlyw6lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gUmVjaGFyZ2VyIHF1YW5kIGxlIHRyaSBjaGFuZ2VcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpO1xyXG4gICAgfSwgW3NvcnRPcmRlcl0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoQXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gXCIvYXBpL2FydGljbGVzXCI7XHJcbiAgICAgICAgICAgIC8vIExvZ2lxdWUgZGUgdHJpIEFQSSBQbGF0Zm9ybVxyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvcnRPcmRlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJlc3RfcmF0aW5nXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IFwiP29yZGVyW2F2ZXJhZ2VSYXRpbmddPWRlc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ3b3JzdF9yYXRpbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gXCI/b3JkZXJbYXZlcmFnZVJhdGluZ109YXNjXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib2xkZXN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IFwiP29yZGVyW2NyZWF0ZWRBdF09YXNjXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmV3ZXN0XCI6XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBcIj9vcmRlcltjcmVhdGVkQXRdPWRlc2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEFjY2VwdDogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRBcnRpY2xlcyhkYXRhW1wiaHlkcmE6bWVtYmVyXCJdIHx8IGRhdGFbXCJtZW1iZXJcIl0gfHwgW10pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGRlIGxpYWlzb24gYXZlYyBsZSBHcmFuZCBDb25zZWlsXCIsIGVycik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICF3aW5kb3cuY29uZmlybShcclxuICAgICAgICAgICAgICAgIFwiVm91bGV6LXZvdXMgdnJhaW1lbnQgZWZmYWNlciBjZSByw6ljaXQgZGUgbGEgcGllcnJlID9cIixcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKX1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlcyhcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5maWx0ZXIoKGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUlkID0gKGEuaWQgfHwgYVtcIkBpZFwiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhSWQgIT09IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMZXMgZHJhZ29ucyBwcm90w6hnZW50IGNlIHBhcmNoZW1pbiAoRXJyZXVyIGRlIHBlcm1pc3Npb25zKS5cIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJMZSBzZXJ2ZXVyIGVzdCBpbmpvaWduYWJsZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpZXcoXCJsaXN0XCIpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDwn5uh77iPIC0tLSBMT0dJUVVFIERFUyBSw5RMRVMgLS0tXHJcbiAgICBjb25zdCB1c2VyUm9sZXMgPSB1c2VyPy5yb2xlcyB8fCBbXTtcclxuICAgIGNvbnN0IHN1cGVyRWRpdG9ycyA9IFtcclxuICAgICAgICBcIlJPTEVfRURJVEVVUlwiLFxyXG4gICAgICAgIFwiUk9MRV9BRE1JTlwiLFxyXG4gICAgICAgIFwiUk9MRV9ERVNJR05FUlwiLFxyXG4gICAgICAgIFwiUk9MRV9GT1VSTklTU0VVUlwiLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGlzU3VwZXJFZGl0b3IgPSBzdXBlckVkaXRvcnMuc29tZSgocikgPT4gdXNlclJvbGVzLmluY2x1ZGVzKHIpKTtcclxuICAgIGNvbnN0IGlzQXV0aG9yID0gdXNlclJvbGVzLmluY2x1ZGVzKFwiUk9MRV9BVVRFVVJcIik7XHJcbiAgICBjb25zdCBjYW5DcmVhdGUgPSBpc1N1cGVyRWRpdG9yIHx8IGlzQXV0aG9yO1xyXG5cclxuICAgIGlmIChsb2FkaW5nICYmIHZpZXcgPT09IFwibGlzdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS00MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYm9yZGVyLTQgYm9yZGVyLXZpa2luZy1nb2xkIGJvcmRlci10LXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW4gbWItNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LXhsIGFuaW1hdGUtcHVsc2UgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgT3V2ZXJ0dXJlIGRlcyBwYXJjaGVtaW5zLi4uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHB4LTQgcG91ciBsZXMgbWFyZ2VzIG1vYmlsZXNcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgcGItMjBcIj5cclxuICAgICAgICAgICAgey8qIC0tLSBIRUFERVIgLS0tICovfVxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LWNvbCBwb3VyIGVtcGlsZXIgdGl0cmUgZXQgZmlsdHJlcyBzdXIgbW9iaWxlLCBpdGVtcy1zdGFydCBwYXIgZMOpZmF1dCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtZDppdGVtcy1lbmQgbWItOCBtZDptYi0xMiBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMjAgcGItOCBnYXAtNiBtZDpnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBUYWlsbGUgdGl0cmUgYWRhcHTDqWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNnhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLXBhcmNobWVudCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaHJvbmlxdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBpdGFsaWMgdGV4dC1zbSBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExlIHNhdm9pciBkdSB2aWxsYWdlIGRlIEJlcmssIGdyYXbDqSBwb3VyIGwnw6l0ZXJuaXTDqS5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7dmlldyA9PT0gXCJsaXN0XCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGUgcG91ciBxdWUgbGVzIGZpbHRyZXMgcHJlbm5lbnQgdG91dGUgbGEgbGFyZ2V1clxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTQgdy1mdWxsIG1kOnctYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU0VMRUNURVVSIERFIFRSSSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb3J0T3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNvcnRPcmRlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvNTAgdGV4dC12aWtpbmctZ29sZCBweS0zIHB4LTQgcm91bmRlZCBjdXJzb3ItcG9pbnRlciB1cHBlcmNhc2UgdGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgaG92ZXI6Ymctc3RvbmUtOTAwIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV3ZXN0XCI+8J+ThSBQbHVzIFLDqWNlbnRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib2xkZXN0XCI+8J+TnCBQbHVzIEFuY2llbnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiZXN0X3JhdGluZ1wiPvCfjJ8gTWlldXggTm90w6lzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid29yc3RfcmF0aW5nXCI+8J+SgCBNb2lucyBOb3TDqXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog8J+UkiBCT1VUT04gQ1LDiUVSICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuQ3JlYXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJjcmVhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHctZnVsbCBzdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byBiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIHB4LTggcHktMyBmb250LWJsYWNrIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctWzBfMF8yMHB4X3JnYmEoMjEyLDE3NSw1NSwwLjIpXSB1cHBlcmNhc2UgdGV4dC14cyB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgR3JhdmVyIHVuIHLDqWNpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiAtLS0gVlVFUyBGT1JNVUxBSVJFUyAtLS0gKi99XHJcbiAgICAgICAgICAgIHt2aWV3ID09PSBcImNyZWF0ZVwiIHx8IHZpZXcgPT09IFwiZWRpdFwiID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20tNCBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJsaXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb24gdXBwZXJjYXNlIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oaQIFJldG91ciBhdSBtdXIgZGVzIGzDqWdlbmRlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlRm9ybSBpZD17c2VsZWN0ZWRJZH0gb25TdWNjZXNzPXtoYW5kbGVTdWNjZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAvKiAtLS0gVlVFIExJU1RFIERFUyBBUlRJQ0xFUyAtLS0gKi9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTIwIHRleHQtc3RvbmUtNjAwIGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgc2lsZW5jZSByw6hnbmUgc3VyIGxlIG11ci4uLiBBdWN1bmUgY2hyb25pcXVlIG4nYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgw6l0w6kgdHJvdXbDqWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuSWQgPSAoYXJ0aWNsZS5pZCB8fCBhcnRpY2xlW1wiQGlkXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiL1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT3duZXIgPSB1c2VyPy5pZCA9PT0gYXJ0aWNsZS5hdXRob3I/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuRWRpdFRoaXMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU3VwZXJFZGl0b3IgfHwgKGlzQXV0aG9yICYmIGlzT3duZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjbGVhbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHAtNSBzdXIgbW9iaWxlLCBwLTggc3VyIGRlc2t0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgYmctc3RvbmUtOTAwLzQwIGJvcmRlci1sLTQgYm9yZGVyLXN0b25lLTgwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHAtNSBtZDpwLTggcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogZmxleC1jb2wgc3VyIG1vYmlsZSBwb3VyIHRpdHJlIGV0IGJvdXRvbnMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgbWItNCBnYXAtNCBtZDpnYXAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IFRhaWxsZSB0aXRyZSBhZGFwdMOpZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgdXBwZXJjYXNlIGxlYWRpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hdmVyYWdlUmF0aW5nICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIHRleHQteHMgbWQ6dGV4dC1zbSBmb250LWJvbGQgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwLzMwIHB4LTIgcHktMC41IHJvdW5kZWQgYmcteWVsbG93LTUwMC8xMCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4piFIHthcnRpY2xlLmF2ZXJhZ2VSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIPCflJIgQk9VVE9OUyBEJ0FDVElPTiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5FZGl0VGhpcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9ESUYgOiBvcGFjaXR5LTEwMCBzdXIgbW9iaWxlIChjYXIgcGFzIGRlIGhvdmVyKSwgbWQ6b3BhY2l0eS00MCBzdXIgb3JkaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBvcGFjaXR5LTEwMCBtZDpvcGFjaXR5LTQwIG1kOmdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSB3LWZ1bGwgbWQ6dy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZElkKGNsZWFuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJlZGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogZmxleC0xIHN1ciBtb2JpbGUgcG91ciBkZXMgYm91dG9ucyBsYXJnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBtZDpmbGV4LW5vbmUgdGV4dC1jZW50ZXIgdGV4dC1bOXB4XSB1cHBlcmNhc2UgZm9udC1ibGFjayBiZy1zdG9uZS04MDAgdGV4dC1zdG9uZS00MDAgcHgtMyBweS0yIG1kOnB5LTEgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZShjbGVhbklkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIG1kOmZsZXgtbm9uZSB0ZXh0LWNlbnRlciB0ZXh0LVs5cHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIGJnLXJlZC05MDAvMTAgdGV4dC1yZWQtNTAwLzcwIHB4LTMgcHktMiBtZDpweS0xIGJvcmRlciBib3JkZXItcmVkLTkwMC8zMCBob3ZlcjpiZy1yZWQtOTAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1cHByaW1lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC1iYXNlIHN1ciBtb2JpbGUsIHRleHQtbGcgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwIGZvbnQtc2VyaWYgaXRhbGljIHRleHQtYmFzZSBtZDp0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi02IG1kOm1iLTggbWF4LXctM3hsIHRleHQtanVzdGlmeSBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwie2FydGljbGUuc3VtbWFyeX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBmbGV4LWNvbCBzdXIgbW9iaWxlIHBvdXIgbGUgZm9vdGVyIGRlIGNhcnRlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBwdC02IGJvcmRlci10IGJvcmRlci1zdG9uZS04MDAvNTAgZ2FwLTQgc206Z2FwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNiBoLVsxcHhdIGJnLXZpa2luZy1nb2xkLzQwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBmb250LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuYXV0aG9yPy5wc2V1ZG8gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuYXV0aG9yPy51c2VybmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHdWVycmllciBkZSBsJ29tYnJlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2FydGljbGUvJHtjbGVhbklkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZmlyZSBmb250LWJsYWNrIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBzZWxmLWVuZCBzbTpzZWxmLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN1bHRlciBsZSBwYXJjaGVtaW57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPuKGkjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ydW1QYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmlnaHRGdXJ5U2NlbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmlnaHRGdXJ5XCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gQUpPVVQgOiBweC00IHBvdXIgw6l2aXRlciBxdWUgbGUgY29udGVudSB0b3VjaGUgbGVzIGJvcmRzIHN1ciBtb2JpbGVcclxuICAgICAgICAvLyBNT0RJRiA6IHB5LTggc3VyIG1vYmlsZSwgcHktMTYgc3VyIG9yZGluYXRldXJcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTggbWQ6cHktMTYgcHgtNCBhbmltYXRlLWZhZGUtaW4tdXBcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IFRhaWxsZSBkdSB0ZXh0ZSBwcm9ncmVzc2l2ZSAoNHhsIC0+IDZ4bCAtPiA4eGwpICovfVxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgc206dGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1kcmFnb24gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXZpa2luZy1nb2xkIHZpYS15ZWxsb3ctNTAwIHRvLXZpa2luZy1nb2xkIG1iLTYgbWQ6bWItOCBkcm9wLXNoYWRvdy1zbSBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICBCaWVudmVudWUgZGFucyBsJ0FudHJlXHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgbWQ6dy0yNCBoLTEgYmctdmlraW5nLXJlZCBteC1hdXRvIG1iLTYgbWQ6bWItOCByb3VuZGVkLWZ1bGwgc2hhZG93LVswXzBfMTBweF8jZGMyNjI2XVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogVGFpbGxlIGR1IHRleHRlIHBsdXMgbGlzaWJsZSBzdXIgbW9iaWxlICh0ZXh0LWJhc2UgLT4gdGV4dC0yeGwpICovfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyBtZDp0ZXh0LTJ4bCB0ZXh0LXZpa2luZy1saWdodCBtYi04IG1kOm1iLTEyIG1heC13LTN4bCBteC1hdXRvIGZvbnQtc2VyaWYgaXRhbGljIGxlYWRpbmctcmVsYXhlZCBweC0yXCI+XHJcbiAgICAgICAgICAgICAgICBcIsOHYSwgYydlc3QgQmV1cmsuIMOAIGRvdXplIGpvdXJzIGF1IG5vcmQgZHUgRMOpc2VzcG9pciwgZXRcclxuICAgICAgICAgICAgICAgIHF1ZWxxdWVzIGRlZ3LDqXMgYXUgc3VkIGQndW4gRnJvaWQtZGUtY2FuYXJkLiBBbmNyw6kgc29saWRlbWVudFxyXG4gICAgICAgICAgICAgICAgc3VyIGxlIE3DqXJpZGllbiBkZSBsYSBNaXPDqHJlLiBNb24gdmlsbGFnZS4uLiBFbiB1biBtb3QsIGJhbGFpc2UuXHJcbiAgICAgICAgICAgICAgICBFdCBzZXB0IGfDqW7DqXJhdGlvbnMgeSBvbnQgZMOpasOgIHZ1IGxlIGpvdXIsIHBvdXJ0YW50LCB0b3V0ZXMgbGVzXHJcbiAgICAgICAgICAgICAgICBtYWlzb25zIHNvbnQgbmV1dmVzLiBCZXVyayA6IHNhIHDDqmNoZSwgc2EgY2hhc3NlLCBldCBzZXNcclxuICAgICAgICAgICAgICAgIG1lcnZlaWxsZXV4IGNvdWNoZXJzIGRlIHNvbGVpbC4gTGEgc2V1bGUgZmF1c3NlIG5vdGUgYydlc3QgbGVzXHJcbiAgICAgICAgICAgICAgICBiZXN0aW9sZXMuIEFpbGxldXJzLCBsZXMgZ2VucyBvbnQgZGVzIHNvdXJpcyBvdSBkZXMgbW91c3RpcXVlcy5cclxuICAgICAgICAgICAgICAgIE5vdXMgb24gYSBkZXMuLi4gZHJhZ29ucy5cIlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMCByb3VuZGVkLTJ4bCBib3JkZXItNCBib3JkZXItc3RvbmUtNzAwIHNoYWRvdy0yeGwgb3ZlcmZsb3ctaGlkZGVuIG1iLTggbWQ6bWItMTJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IEhhdXRldXIgYWRhcHRhdGl2ZSAhIFxyXG4gICAgICAgICAgICAgICAgICAgIDMwMHB4IHN1ciBtb2JpbGUgKGgtWzMwMHB4XSlcclxuICAgICAgICAgICAgICAgICAgICA0MDBweCBzdXIgdGFibGV0dGUgKHNtOmgtWzQwMHB4XSlcclxuICAgICAgICAgICAgICAgICAgICA2MDBweCBzdXIgb3JkaW5hdGV1ciAobGc6aC1bNjAwcHhdKSBcclxuICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVszMDBweF0gc206aC1bNDAwcHhdIGxnOmgtWzYwMHB4XSB3LWZ1bGwgcmVsYXRpdmUgYmctYmxhY2sgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmlnaHRGdXJ5U2NlbmUgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTAgdy1mdWxsIHRleHQtY2VudGVyIHRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LWdyYXktNDAwIHBvaW50ZXItZXZlbnRzLW5vbmUgei0xMCBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsaXF1ZXogc3VyIGxlIGRyYWdvbiAob3UgdG91Y2hlei1sZSlcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IGZsZXgtY29sIHBvdXIgZW1waWxlciBsZXMgYm91dG9ucyBzdXIgbW9iaWxlLCBmbGV4LXJvdyBzdXIgb3JkaSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGdhcC00IG1kOmdhcC02IHctZnVsbCBtYXgtdy1tZCBtZDptYXgtdy1ub25lIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvZm9ydW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1PRElGIDogdy1mdWxsIHN1ciBtb2JpbGUgcG91ciBmYWNpbGl0ZXIgbGUgY2xpYywgdy1hdXRvIHN1ciBvcmRpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgdy1mdWxsIG1kOnctYXV0byBweC04IHB5LTQgYmctdmlraW5nLXJlZCBob3ZlcjpiZy1yZWQtOTAwIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCB0ZXh0LXdoaXRlIGZvbnQtZHJhZ29uIHRleHQtbGcgbWQ6dGV4dC14bCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMjIwLDM4LDM4LDAuNSldIGFjdGl2ZTpzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiPkFjY8OpZGVyIGF1IEZvcnVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUvMjAgdG8tdHJhbnNwYXJlbnQgLXRyYW5zbGF0ZS14LWZ1bGwgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtZnVsbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi03MDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL3N0YXRpc3RpcXVlXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBNT0RJRiA6IHctZnVsbCBzdXIgbW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctYXV0byBweC04IHB5LTQgYmctdmlraW5nLXJvY2sgaG92ZXI6Ymctc3RvbmUtNzAwIGJvcmRlci0yIGJvcmRlci1zdG9uZS01MDAgdGV4dC12aWtpbmctbGlnaHQgaG92ZXI6dGV4dC13aGl0ZSBmb250LWRyYWdvbiB0ZXh0LWxnIG1kOnRleHQteGwgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBWb2lyIGxlcyBTdGF0c1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RXJyb3IoJycpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luX2NoZWNrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLCBcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQgXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rICYmIGRhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2ZvcnVtJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKCdJZGVudGlmaWFudHMgaW5jb3JyZWN0cy4gTGVzIGRyYWdvbnMgbmUgdm91cyByZWNvbm5haXNzZW50IHBhcy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcignRXJyZXVyIGRlIGNvbm5leGlvbiBhdSBzZXJ2ZXVyLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBNT0RJRiA6IHB4LTQgcG91ciDDqXZpdGVyIHF1ZSDDp2EgdG91Y2hlIGxlcyBib3JkcyBzdXIgbW9iaWxlXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICB7LyogTU9ESUYgOiBwLTYgZXQgbXQtNCBzdXIgbW9iaWxlLCBwLTEwIGV0IG10LTEwIHN1ciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctdmlraW5nLXJvY2sgcC02IG1kOnAtMTAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgbXQtNCBtZDptdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC0yeGwgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgbWQ6bWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5Db25uZXhpb248L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcmVkIHRleHQtc20gbWItNCBpdGFsaWMgdGV4dC1jZW50ZXIgZm9udC1ib2xkIGFuaW1hdGUtcHVsc2VcIj57ZXJyb3J9PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBzcGFjZS15LTQgc3VyIG1vYmlsZSAocGx1cyBjb21wYWN0KSAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMiB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIGR1IEd1ZXJyaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtYmFzZSBwb3VyIMOpdml0ZXIgbGUgem9vbSBpT1MgYXV0b21hdGlxdWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtMyBtZDpwLTQgdGV4dC1iYXNlIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4ZW1wbGVAYmVyay5mclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG1iLTIgdGV4dC12aWtpbmctcGFyY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3QgZGUgcGFzc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIG1kOnAtNCB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBweS0zIHN1ciBtb2JpbGUgcG91ciBnYWduZXIgZGUgbGEgcGxhY2UsIHB5LTQgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayBweS0zIG1kOnB5LTQgdXBwZXJjYXNlIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1IHRleHQtc20gbWQ6dGV4dC1iYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmVuZHJlIHNvbiBlbnZvbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwbGFpblBhc3N3b3JkOiAnJyxcclxuICAgICAgICByb2xlOiAnUk9MRV9VU0VSJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRFcnJvcignJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9yZWdpc3RlcicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZGlyaWdlIHZlcnMgbCdhY2N1ZWlsIG91IGxlIGxvZ2luIGFwcsOocyBzdWNjw6hzXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgnLycpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJFcnJldXIgbG9ycyBkZSBsJ2luc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwiSW1wb3NzaWJsZSBkZSBjb250YWN0ZXIgbGUgR3JhbmQgU2NyaWJlIChFcnJldXIgcsOpc2VhdSlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIE1PRElGIDogcHgtNCBwb3VyIMOpdml0ZXIgcXVlIGxhIGNhcnRlIHRvdWNoZSBsZXMgYm9yZHMgc3VyIG1vYmlsZVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCB3LWZ1bGwgcGItMTBcIj5cclxuICAgICAgICAgICAgey8qIE1PRElGIDogcC02IGV0IG10LTQgc3VyIG1vYmlsZSwgcC04IGV0IG10LTEwIHN1ciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctdmlraW5nLXJvY2svOTAgcC02IG1kOnAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCBzaGFkb3ctMnhsIGJhY2tkcm9wLWJsdXItc20gbXQtNCBtZDptdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogdGV4dC0yeGwgc3VyIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgbWQ6bWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVqb2luZHJlIGxhIEd1aWxkZVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC05MDAvNDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTIwMCBwLTMgcm91bmRlZCBtYi02IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiBzcGFjZS15LTQgc3VyIG1vYmlsZSBwb3VyIGNvbXBhY3RlciAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTk9NIEQnVVRJTElTQVRFVVIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Ob20gZGUgY29kZSAoUHNldWRvKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtYmFzZSBldCBwLTMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBLcm9rbW91XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRU1BSUwgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5FbWFpbCBkZSBjb250YWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZpa2luZ0BiZXJrLmZyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUsOUTEUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5SYW5nIGF1IHNlaW4gZGUgbGEgR3VpbGRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogcC0zIGV0IHRleHQtYmFzZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCByb2xlOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9VU0VSXCI+QWJvbm7DqSAoTGVjdGV1cik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0FVVEVVUlwiPkF1dGV1ciAoTmFycmF0ZXVyKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfRURJVEVVUlwiPsOJZGl0ZXVyIChHYXJkaWVuKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfREVTSUdORVJcIj5EZXNpZ25ldXIgKEFydGlzYW4pPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9GT1VSTklTU0VVUlwiPkZvdXJuaXNzZXVyIGRlIGRvbm7DqWVzIChTY3JpYmUpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9BRE1JTlwiPkFkbWluaXN0cmF0ZXVyIChDaGVmIGRlIGxhIEd1aWxkZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNT1QgREUgUEFTU0UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Nb3QgZGUgcGFzc2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyB0ZXh0LWJhc2Ugcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wbGFpblBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHBsYWluUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1PRElGIDogcHktMyBzdXIgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtdmlraW5nLWRhcmsgZm9udC1leHRyYWJvbGQgcHktMyBtZDpweS00IHJvdW5kZWQgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBzaGFkb3ctbGcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG10LTQgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR3JhdmVyIG1vbiBub21cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENoYXJ0IGFzIENoYXJ0SlMsIENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kLCBBcmNFbGVtZW50LCBQb2ludEVsZW1lbnQsIExpbmVFbGVtZW50LFxyXG59IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IHsgQmFyLCBEb3VnaG51dCwgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kLCBBcmNFbGVtZW50LCBQb2ludEVsZW1lbnQsIExpbmVFbGVtZW50KTtcclxuXHJcbmNvbnN0IFN0YXRzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbYm94T2ZmaWNlRGF0YSwgc2V0Qm94T2ZmaWNlRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcG9wdWxhdGlvbkRhdGEsIHNldFBvcHVsYXRpb25EYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0aW1lbGluZURhdGEsIHNldFRpbWVsaW5lRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgbG9hZENTViA9ICh1cmwsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKHIgPT4gci5vayA/IHIudGV4dCgpIDogbnVsbClcclxuICAgICAgLnRoZW4odHh0ID0+IHtcclxuICAgICAgICBpZighdHh0KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSB0eHQudHJpbSgpLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICBpZiAobGluZXMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBsaW5lc1swXS5zcGxpdCgnOycpLm1hcChoID0+IGgudHJpbSgpKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gbGluZXMuc2xpY2UoMSkubWFwKGwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWxzID0gbC5zcGxpdCgnOycpLm1hcCh2ID0+IHYudHJpbSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+ICh7Li4uYWNjLCBbaF06IHZhbHNbaV19KSwge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCkgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9ib3hfb2ZmaWNlLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldEJveE9mZmljZURhdGEoe1xyXG4gICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydGaWxtJ10pLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdNJCcsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnQm94IE9mZmljZSAoTWlsbGlvbnMgJCknXSkpLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyM3ZjFkMWQnLCAnI2RjMjYyNicsICcjZDk3NzA2J10sXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyMyOTI1MjQnLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgICAgICB9XVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2JlcmtfcG9wdWxhdGlvbi5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBzZXRQb3B1bGF0aW9uRGF0YSh7XHJcbiAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0dyb3VwZSddKSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydQb3B1bGF0aW9uJ10pKSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjZDk3NzA2JywgJyM3ZjFkMWQnLCAnIzU3NTM0ZScsICcjYThhMjllJ10sXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyMxYzE5MTcnLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgICAgICB9XVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2RyYWdvbnNfdGltZWxpbmUuY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRUaW1lbGluZURhdGEoe1xyXG4gICAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0FubsOpZSddKSxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ0VzcMOoY2VzJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ0VzcMOoY2VzIFJlY2Vuc8OpZXMnXSkpLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNkOTc3MDYnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIxNywgMTE5LCA2LCAwLjIpJyxcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgdGVuc2lvbjogMC4zLFxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgcGx1Z2luczogeyBsZWdlbmQ6IHsgbGFiZWxzOiB7IGNvbG9yOiAnI2U3ZTVlNCcsIGZvbnQ6IHsgZmFtaWx5OiAnc2VyaWYnIH0gfSB9IH0sXHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgeTogeyB0aWNrczogeyBjb2xvcjogJyNhOGEyOWUnIH0sIGdyaWQ6IHsgY29sb3I6ICcjNDQ0MDNjJyB9IH0sXHJcbiAgICAgIHg6IHsgdGlja3M6IHsgY29sb3I6ICcjYThhMjllJyB9LCBncmlkOiB7IGNvbG9yOiAnIzQ0NDAzYycgfSB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIE1PRElGIDogcHgtNCBzdXIgbW9iaWxlLCBwYi0xMiBwb3VyIGxlIHNjcm9sbFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW4gcHgtNCBwYi0xMlwiPlxyXG4gICAgICAgIHsvKiBNT0RJRiA6IG1iLTggc3VyIG1vYmlsZSwgbWItMTIgc3VyIGRlc2t0b3AgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi04IG1kOm1iLTEyXCI+XHJcbiAgICAgICAgICAgIHsvKiBNT0RJRiA6IHRleHQtM3hsIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgZHJvcC1zaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgIEwnT2JzZXJ2YXRvaXJlIGRlIEJlcmtcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBtZDp0ZXh0LWxnIGl0YWxpYyBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMzAgaW5saW5lLWJsb2NrIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIFJlY2Vuc2VtZW50IG9mZmljaWVsIGRlIGwnYXJjaGlwZWxcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTYgbWQ6Z2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTQgbWQ6cC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogTU9ESUYgOiB0ZXh0LXhsIHN1ciBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNlwiPlRyw6lzb3IgZGUgR3VlcnJlPC9oMz5cclxuICAgICAgICAgICAgICAgIHsvKiBNT0RJRiA6IGgtNTYgc3VyIG1vYmlsZSwgaC02NCBzdXIgZGVza3RvcCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC01NiBtZDpoLTY0IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveE9mZmljZURhdGEgPyA8QmFyIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2JveE9mZmljZURhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTAgdGV4dC1zdG9uZS01MDAgaXRhbGljXCI+Q2hhcmdlbWVudCBkZXMgZG9ubsOpZXMuLi48L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTQgbWQ6cC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNlwiPkNsYW5zICYgVHJpYnVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC01NiBtZDpoLTY0IHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9wdWxhdGlvbkRhdGEgPyA8RG91Z2hudXQgb3B0aW9ucz17ey4uLm9wdGlvbnMsIHNjYWxlczp7fX19IGRhdGE9e3BvcHVsYXRpb25EYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwIHRleHQtc3RvbmUtNTAwIGl0YWxpY1wiPkNoYXJnZW1lbnQgZGVzIGNsYW5zLi4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC00IG1kOnAtNiByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCBtZDpjb2wtc3Bhbi0yIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTQgbWQ6bWItNlwiPkNocm9ub2xvZ2llIGRlcyBEw6ljb3V2ZXJ0ZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgey8qIE1PRElGIDogaC02NCBzdXIgbW9iaWxlLCBoLTgwIHN1ciBkZXNrdG9wICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IG1kOmgtODAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGltZWxpbmVEYXRhID8gPExpbmUgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17dGltZWxpbmVEYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwIHRleHQtc3RvbmUtNTAwIGl0YWxpY1wiPkFuYWx5c2UgdGVtcG9yZWxsZS4uLjwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHNQYWdlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lUGFnZSIsIkZvcnVtUGFnZSIsIkFydGljbGVQYWdlIiwiU3RhdHNQYWdlIiwiTmF2YmFyIiwiUmVnaXN0ZXJQYWdlIiwiTG9naW5QYWdlIiwiQXJ0aWNsZVNob3ciLCJBZG1pbkRhc2hib2FyZCIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImRhdGEiLCJwcmltYXJ5Q29sb3IiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwicGF0aCIsImVsZW1lbnQiLCJyb290RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsImVycm9yIiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGVzdCIsIm5leHQiLCJwdXNoIiwidXNlU3RhdGUiLCJDc3ZDaGFydCIsIkFydGljbGVGb3JtIiwiX3JlZiIsIl9yZWYkaWQiLCJpZCIsIm9uU3VjY2VzcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJ0aXRsZSIsInNldFRpdGxlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiYmxvY3MiLCJzZXRCbG9jcyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibXVzaWNMaWJyYXJ5Iiwic2V0TXVzaWNMaWJyYXJ5IiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJkYXRhc2V0TGlicmFyeSIsInNldERhdGFzZXRMaWJyYXJ5IiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb25jYXQiLCJyZXMiLCJmb3JtYXR0ZWRCbG9jcyIsInNvcnQiLCJiIiwicG9zaXRpb24iLCJtYXAiLCJ2aXpUeXBlIiwiY29udGVudCIsInR5cGUiLCJwYXJ0cyIsInNwbGl0IiwibWVkaWFVcmwiLCJmaWxlIiwiZXJyIiwiRXJyb3IiLCJhZGRCbG9jIiwicmVtb3ZlQmxvYyIsImluZGV4VG9SZW1vdmUiLCJmaWx0ZXIiLCJfIiwiaW5kZXgiLCJ1cGRhdGVCbG9jIiwiZmllbGQiLCJuZXdCbG9jcyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJ0YXJnZXQiLCJmaWxlcyIsInN0YXJ0c1dpdGgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVTdWJtaXQiLCJfcmVmMiIsIl9jYWxsZWUiLCJ0b2tlbiIsImFydGljbGVEYXRhIiwiZm9ybURhdGEiLCJfcmVzcG9uc2UiLCJlcnJvckRhdGEiLCJfdCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYmxvYyIsImZpbmFsQ29udGVudCIsImJsb2NQYXlsb2FkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWxlcnQiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZvckVhY2giLCJpbmNsdWRlcyIsIm1lc3NhZ2UiLCJfeCIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwia2V5Iiwib25DbGljayIsImFjY2VwdCIsInNvdXJjZSIsImNzdlVybCIsImVudHJpZXMiLCJfcmVmMyIsIl9yZWY0IiwiZm9sZGVyIiwibGFiZWwiLCJ0b1VwcGVyQ2FzZSIsIlRvb2xCdG4iLCJkaXNhYmxlZCIsIl9yZWY1IiwidXNlUGFyYW1zIiwiTGluayIsIlZpa2luZ1BsYXllciIsIkNvbW1lbnRTZWN0aW9uIiwiU3RhclJhdGluZyIsIl9hcnRpY2xlJGJsb2NzIiwiX2FydGljbGUkYXV0aG9yIiwiX3VzZVBhcmFtcyIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwicmVqZWN0IiwiY3VzdG9tU3R5bGVzIiwicmF3Q29uZmlnIiwiZGVzaWduQ29uZmlnIiwicGFyc2UiLCJmaW5hbFRpdGxlQ29sb3IiLCJ0aXRsZUNvbG9yIiwiZmluYWxDb250ZW50QmciLCJjb250ZW50QmciLCJtdXNpY0Jsb2MiLCJmaW5kIiwibXVzaWNTcmMiLCJjb250ZW50QmxvY3MiLCJoYW5kbGVSYXRlIiwic2NvcmUiLCJBdXRob3JpemF0aW9uIiwidG8iLCJhcnRpY2xlSWQiLCJjdXJyZW50UmF0aW5nIiwiYXZlcmFnZVJhdGluZyIsIm9uUmF0ZSIsImJhY2tncm91bmRDb2xvciIsImF1dG9QbGF5IiwiYXV0aG9yIiwicHNldWRvIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIkNvbW1lbnRJdGVtIiwiX2NvbW1lbnQkYXV0aG9yIiwiY29tbWVudCIsIm9uVm90ZSIsIm9uUmVwbHkiLCJjYW5JbnRlcmFjdCIsInNob3dSZXBseUZvcm0iLCJzZXRTaG93UmVwbHlGb3JtIiwicmVwbHlDb250ZW50Iiwic2V0UmVwbHlDb250ZW50IiwiaGFuZGxlUmVwbHlTdWJtaXQiLCJyZXBsaWVzIiwicmVwbHkiLCJfQ29tbWVudEl0ZW0iLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwibmV3Q29tbWVudCIsInNldE5ld0NvbW1lbnQiLCJzZXRDYW5JbnRlcmFjdCIsImZldGNoQ29tbWVudHMiLCJjb21tZW50c0RhdGEiLCJyb290Q29tbWVudHMiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJoYW5kbGVQb3N0IiwicGFyZW50SWQiLCJfYXJncyIsImhhbmRsZVZvdGUiLCJfY2FsbGVlMiIsImNvbW1lbnRJZCIsImRpcmVjdGlvbiIsIl90MiIsIl9jb250ZXh0MiIsIl94MiIsIl94MyIsIlBhcGEiLCJCYXJDaGFydCIsIkJhciIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJMaW5lQ2hhcnQiLCJMaW5lIiwiUGllQ2hhcnQiLCJQaWUiLCJDZWxsIiwiQ09MT1JTIiwiX3JlZiR2aXpUeXBlIiwic2V0RGF0YSIsInNldEVycm9yIiwidGV4dCIsImNzdlRleHQiLCJoZWFkZXIiLCJkeW5hbWljVHlwaW5nIiwic2tpcEVtcHR5TGluZXMiLCJjb21wbGV0ZSIsInJlc3VsdHMiLCJrZXlzIiwieEtleSIsInlLZXkiLCJheGlzU3R5bGUiLCJmb250U2l6ZSIsImZpbGwiLCJyZW5kZXJDaGFydCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZSIsImRhdGFLZXkiLCJ0aWNrIiwiY29udGVudFN0eWxlIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsIndyYXBwZXJTdHlsZSIsInBhZGRpbmdUb3AiLCJzdHJva2VXaWR0aCIsImRvdCIsImFjdGl2ZURvdCIsImN4IiwiY3kiLCJsYWJlbExpbmUiLCJwZXJjZW50IiwidG9GaXhlZCIsIm91dGVyUmFkaXVzIiwibmFtZUtleSIsImVudHJ5IiwibGF5b3V0IiwidmVydGljYWxBbGlnbiIsImFsaWduIiwiY3Vyc29yIiwicmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJEYXRhUHJvdmlkZXJTcGFjZSIsImRhdGFzZXRzIiwic2V0RmlsZSIsInByZXZpZXciLCJzZXRQcmV2aWV3Iiwic2V0SGVhZGVycyIsImNvbHVtbk1hcHBpbmciLCJzZXRDb2x1bW5NYXBwaW5nIiwiZGF0YXNldE5hbWUiLCJzZXREYXRhc2V0TmFtZSIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJzZWxlY3RlZEZpbGUiLCJyZXBsYWNlIiwiY29scyIsImluaXRpYWxNYXBwaW5nIiwiaCIsInRvZ2dsZVR5cGUiLCJwcmV2IiwiaGFuZGxlVXBsb2FkIiwicGF5bG9hZCIsIm1ldGFkYXRhIiwiY29sdW1ucyIsInVwbG9hZGVkQXQiLCJ0b0lTT1N0cmluZyIsInJvd0NvdW50Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyb3ciLCJkcyIsInJvd3NDb3VudCIsIkRlc2lnbmVyU3BhY2UiLCJfYXJ0aWNsZXMkZmluZCIsIlZJS0lOR19PUkFOR0VfREVGQVVMVCIsImdsb2JhbENvbG9yIiwic2V0R2xvYmFsQ29sb3IiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwic2VsZWN0ZWRBcnRpY2xlSWQiLCJzZXRTZWxlY3RlZEFydGljbGVJZCIsImFydGljbGVTdHlsZXMiLCJzZXRBcnRpY2xlU3R5bGVzIiwiaXNTYXZpbmciLCJzZXRJc1NhdmluZyIsImZldGNoQXJ0aWNsZXMiLCJjdXJyZW50Q29sb3IiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRyaW0iLCJpdGVtcyIsIm1lbWJlciIsImhhbmRsZUdsb2JhbENvbG9yUHJldmlldyIsIm5ld0NvbG9yIiwicmVzZXRHbG9iYWxDb2xvciIsImNvbmZpcm0iLCJoYW5kbGVTYXZlR2xvYmFsU3R5bGUiLCJfY2FsbGVlMyIsIl90MyIsIl9jb250ZXh0MyIsIm1haW5Db2xvciIsImhhbmRsZUFydGljbGVTZWxlY3QiLCJjb25maWciLCJoYW5kbGVTYXZlQXJ0aWNsZVN0eWxlIiwiX2NhbGxlZTQiLCJfdDQiLCJfY29udGV4dDQiLCJhcnQiLCJ1c2VOYXZpZ2F0ZSIsImp3dERlY29kZSIsIl91c2VyIiwiX3VzZXIyIiwiX3VzZXIzIiwibmF2aWdhdGUiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsInVzZXIiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiY2FuU2VlRGFzaGJvYXJkIiwicm9sZXMiLCJjbG9zZU1lbnUiLCJGcmFnbWVudCIsInVzZVJlZiIsIlN1c3BlbnNlIiwiQ2FudmFzIiwidXNlRnJhbWUiLCJ1c2VUaHJlZSIsInVzZUdMVEYiLCJ1c2VBbmltYXRpb25zIiwiQ2VudGVyIiwiSHRtbCIsInVzZVRleHR1cmUiLCJTdGFycyIsIk1PREVMX1BBVEgiLCJURVhUVVJFX1BBVEgiLCJBTklNQVRJT05fTkFNRSIsIkRyYWdvbk1vZGVsIiwidml0ZXNzZVJvdGF0aW9uIiwidml0ZXNzZUFuaW1hdGlvbiIsImZhY3RldXJUYWlsbGUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl91c2VHTFRGIiwic2NlbmUiLCJhbmltYXRpb25zIiwidGV4dHVyZSIsIl91c2VUaHJlZSIsInZpZXdwb3J0IiwiYmFzZVNjYWxlIiwiZmluYWxTY2FsZSIsImZsaXBZIiwiY29sb3JTcGFjZSIsImdyb3VwIiwiX3VzZUFuaW1hdGlvbnMiLCJhY3Rpb25zIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwidHJhdmVyc2UiLCJjaGlsZCIsImlzTWVzaCIsIm1hdGVyaWFsIiwibmVlZHNVcGRhdGUiLCJhY3Rpb24iLCJyZXNldCIsImZhZGVJbiIsInBsYXkiLCJ0aW1lU2NhbGUiLCJ0b2dnbGVBbmltYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJwYXVzZWQiLCJjdXJyZW50Iiwicm90YXRpb24iLCJfZXh0ZW5kcyIsInJlZiIsIm9iamVjdCIsIm9uUG9pbnRlck92ZXIiLCJvblBvaW50ZXJPdXQiLCJzY2FsZSIsIk5pZ2h0RnVyeVNjZW5lIiwicm90U3BlZWQiLCJzZXRSb3RTcGVlZCIsImFuaW1TcGVlZCIsInNldEFuaW1TcGVlZCIsInNpemVGYWN0b3IiLCJzZXRTaXplRmFjdG9yIiwiY29udHJvbHNWaXNpYmxlIiwic2V0Q29udHJvbHNWaXNpYmxlIiwiaGFuZGxlUmVzZXQiLCJzaGFkb3dzIiwiY2FtZXJhIiwiZm92IiwiYXR0YWNoIiwiYXJncyIsImRlcHRoIiwiY291bnQiLCJmYWN0b3IiLCJzYXR1cmF0aW9uIiwiZmFkZSIsInNwZWVkIiwiaW50ZW5zaXR5IiwiZmFsbGJhY2siLCJjZW50ZXIiLCJtaW4iLCJtYXgiLCJzdGVwIiwicGFyc2VGbG9hdCIsInByZWxvYWQiLCJob3ZlciIsInNldEhvdmVyIiwicmF0aW5nIiwic2V0UmF0aW5nIiwiaGFuZGxlUmF0aW5nIiwic3RhciIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIl9yZWYkYXV0b1BsYXkiLCJhdWRpb1JlZiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImlzQmxvY2tlZCIsInNldElzQmxvY2tlZCIsInBsYXlQcm9taXNlIiwidG9nZ2xlUGxheSIsInBhdXNlIiwiaGFuZGxlVGltZVVwZGF0ZSIsInRvdGFsIiwiZm9ybWF0VGltZSIsImhhbmRsZVNlZWsiLCJjbGllbnRXaWR0aCIsImNsaWNrWCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WCIsInRpbWUiLCJpc05hTiIsIk1hdGgiLCJmbG9vciIsInNlYyIsImJhcnMiLCJhbmltYXRpb25EdXJhdGlvbiIsInJhbmRvbSIsIm9uVGltZVVwZGF0ZSIsIm9uRW5kZWQiLCJvbkxvYWRlZE1ldGFkYXRhIiwidmlld0JveCIsIl9jdXJyZW50VXNlciIsIl9kYXRhJGFsbFVzZXJzIiwiX2RhdGEkbWFuYWdlbWVudEFydGljIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJjdXJyZW50VXNlciIsImlzRnVsbEFkbWluIiwiaXNQcm92aWRlciIsImlzRGVzaWduZXIiLCJpc0VkaXRvciIsImxvYWRTdGF0cyIsImhhbmRsZURlbGV0ZUFydGljbGUiLCJtYW5hZ2VtZW50QXJ0aWNsZXMiLCJoYW5kbGVFZGl0U3VjY2VzcyIsImhhbmRsZVByb21vdGUiLCJ1c2VySWQiLCJ1cGRhdGVkRGF0YSIsImFsbFVzZXJzIiwibmV3Um9sZXMiLCJ1c2Vyc0NvdW50IiwiYXJ0aWNsZXNDb3VudCIsInRvTG93ZXJDYXNlIiwiam9pbiIsInNldFVzZXIiLCJzb3J0T3JkZXIiLCJzZXRTb3J0T3JkZXIiLCJ2aWV3Iiwic2V0VmlldyIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwiZGVjb2RlZCIsInVybCIsIkFjY2VwdCIsImhhbmRsZURlbGV0ZSIsImFJZCIsInBvcCIsImhhbmRsZVN1Y2Nlc3MiLCJ1c2VyUm9sZXMiLCJzdXBlckVkaXRvcnMiLCJpc1N1cGVyRWRpdG9yIiwic29tZSIsImlzQXV0aG9yIiwiY2FuQ3JlYXRlIiwiX2FydGljbGUkYXV0aG9yMiIsIl9hcnRpY2xlJGF1dGhvcjMiLCJjbGVhbklkIiwiaXNPd25lciIsImNhbkVkaXRUaGlzIiwidXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNldEl0ZW0iLCJocmVmIiwicGxhaW5QYXNzd29yZCIsInJvbGUiLCJzZXRGb3JtRGF0YSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIkFyY0VsZW1lbnQiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkRvdWdobnV0IiwicmVnaXN0ZXIiLCJib3hPZmZpY2VEYXRhIiwic2V0Qm94T2ZmaWNlRGF0YSIsInBvcHVsYXRpb25EYXRhIiwic2V0UG9wdWxhdGlvbkRhdGEiLCJ0aW1lbGluZURhdGEiLCJzZXRUaW1lbGluZURhdGEiLCJsb2FkQ1NWIiwiY2FsbGJhY2siLCJ0eHQiLCJsaW5lcyIsInZhbHMiLCJyZWR1Y2UiLCJhY2MiLCJsYWJlbHMiLCJib3JkZXJXaWR0aCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwidGVuc2lvbiIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInBsdWdpbnMiLCJsZWdlbmQiLCJmb250IiwiZmFtaWx5Iiwic2NhbGVzIiwidGlja3MiLCJncmlkIiwieCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9