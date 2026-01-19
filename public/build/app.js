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
    }).then(function (data) {
      if (data) setMusicLibrary(data);
    })["catch"](function (err) {
      return console.error("Erreur musique", err);
    });

    // 2. Datasets (CSV) - 👇 C'EST ICI QU'IL FAUT CHANGER !
    // Avant c'était : fetch('/api/datasets/list')
    // Maintenant c'est :
    fetch('/api/list-datasets').then(function (res) {
      if (!res.ok) throw new Error("Erreur API Dataset");
      return res.json();
    }).then(function (data) {
      console.log("Données reçues pour le graphique :", data); // 👀 Regarde ta console F12

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
          className: "bg-black/40 border border-stone-700 p-6 rounded-lg my-8 shadow-inner shadow-inner"
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
    fetch("/api/comments?article=".concat(articleId)).then(function (res) {
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
/* harmony import */ var _components_DesignerSpace__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../components/DesignerSpace */ "./assets/components/DesignerSpace.jsx");
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
    className: "text-red-500 p-10 text-center font-dragon"
  }, error);
  if (!data) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "text-yellow-500 p-10 font-dragon animate-pulse text-center"
  }, "Appel au Grand Conseil...");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "max-w-6xl mx-auto p-6 text-white min-h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("h1", {
    className: "text-5xl font-dragon text-stone-200 mb-10 border-b border-yellow-700/30 pb-4 uppercase tracking-tighter"
  }, "Palais d'Administration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "flex flex-wrap gap-2 mb-8 border-b border-stone-800 pb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    onClick: function onClick() {
      return setActiveTab('stats');
    },
    className: "px-6 py-2 text-xs font-black uppercase transition-all ".concat(activeTab === 'stats' ? 'bg-yellow-600 text-black scale-105' : 'bg-stone-900 text-stone-500 hover:bg-stone-800')
  }, "Vue d'ensemble"), isFullAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    onClick: function onClick() {
      return setActiveTab('users');
    },
    className: "px-6 py-2 text-xs font-black uppercase transition-all ".concat(activeTab === 'users' ? 'bg-yellow-600 text-black scale-105' : 'bg-stone-900 text-stone-500 hover:bg-stone-800')
  }, "Population"), isEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    onClick: function onClick() {
      return setActiveTab('articles');
    },
    className: "px-6 py-2 text-xs font-black uppercase transition-all ".concat(activeTab === 'articles' ? 'bg-yellow-600 text-black scale-105' : 'bg-stone-900 text-stone-500 hover:bg-stone-800')
  }, "Chroniques"), isProvider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    onClick: function onClick() {
      return setActiveTab('data');
    },
    className: "px-6 py-2 text-xs font-black uppercase transition-all ".concat(activeTab === 'data' ? 'bg-yellow-600 text-black scale-105' : 'bg-stone-900 text-stone-500 hover:bg-stone-800')
  }, "Donn\xE9es (CSV)"), isDesigner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
    onClick: function onClick() {
      return setActiveTab('design');
    },
    className: "px-6 py-2 text-xs font-black uppercase transition-all ".concat(activeTab === 'design' ? 'bg-yellow-600 text-black scale-105' : 'bg-stone-900 text-stone-500 hover:bg-stone-800')
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
    placeholder: "Chercher un guerrier dans la brume...",
    className: "bg-black/60 border border-yellow-900/30 p-4 rounded text-sm w-full outline-none focus:border-yellow-600 transition-colors",
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "grid gap-3"
  }, (_data$allUsers = data.allUsers) === null || _data$allUsers === void 0 ? void 0 : _data$allUsers.filter(function (u) {
    return u.pseudo.toLowerCase().includes(searchTerm.toLowerCase());
  }).map(function (u) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      key: u.id,
      className: "flex justify-between items-center p-4 bg-stone-900/40 border border-stone-800 rounded hover:border-stone-700 transition-all"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
      className: "font-bold text-stone-200"
    }, u.pseudo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
      className: "text-[10px] text-stone-500 uppercase tracking-tighter"
    }, u.roles.join(' • '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("button", {
      onClick: function onClick() {
        return handlePromote(u.id);
      },
      className: "text-[10px] border border-yellow-700/40 px-4 py-2 hover:bg-yellow-600 hover:text-black transition-all font-black uppercase"
    }, "Changer Rang"));
  }))), activeTab === 'articles' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "grid gap-3 animate-in fade-in duration-500"
  }, (_data$managementArtic = data.managementArticles) === null || _data$managementArtic === void 0 ? void 0 : _data$managementArtic.map(function (art) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
      key: art.id,
      className: "p-5 bg-stone-900/80 border border-stone-800 flex justify-between items-center rounded"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("span", {
      className: "text-lg font-semibold text-stone-200"
    }, art.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("p", {
      className: "text-xs text-stone-500 italic mt-1 font-serif"
    }, "dict\xE9 par ", art.author)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("span", {
      className: "text-stone-600 text-xs font-mono bg-black/30 px-2 py-1 rounded"
    }, art.createdAt));
  })), activeTab === 'data' && isProvider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "animate-in zoom-in-95 duration-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_components_DataProviderSpace__WEBPACK_IMPORTED_MODULE_44__["default"], {
    datasets: data.datasets
  })), activeTab === 'design' && isDesigner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement("div", {
    className: "animate-in fade-in duration-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_42___default().createElement(_components_DesignerSpace__WEBPACK_IMPORTED_MODULE_45__["default"], null))));
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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)('newest'),
    _useState8 = _slicedToArray(_useState7, 2),
    sortOrder = _useState8[0],
    setSortOrder = _useState8[1];

  // Gestion de la navigation interne
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)('list'),
    _useState0 = _slicedToArray(_useState9, 2),
    view = _useState0[0],
    setView = _useState0[1]; // 'list', 'create', 'edit'
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    selectedId = _useState10[0],
    setSelectedId = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_32__.useEffect)(function () {
    // 1. Récupération et décodage du Token
    var token = localStorage.getItem('token');
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
            url = '/api/articles'; // Logique de tri API Platform
            _t = sortOrder;
            _context.n = _t === 'best_rating' ? 2 : _t === 'worst_rating' ? 3 : _t === 'oldest' ? 4 : _t === 'newest' ? 5 : 5;
            break;
          case 2:
            url += '?order[averageRating]=desc';
            return _context.a(3, 6);
          case 3:
            url += '?order[averageRating]=asc';
            return _context.a(3, 6);
          case 4:
            url += '?order[createdAt]=asc';
            return _context.a(3, 6);
          case 5:
            url += '?order[createdAt]=desc';
            return _context.a(3, 6);
          case 6:
            _context.n = 7;
            return fetch(url, {
              headers: {
                'Accept': 'application/ld+json'
              }
            });
          case 7:
            res = _context.v;
            _context.n = 8;
            return res.json();
          case 8:
            data = _context.v;
            setArticles(data['hydra:member'] || data['member'] || []);
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
    setView('list');
    setSelectedId(null);
    fetchArticles();
  };

  // 🛡️ --- NOUVELLE LOGIQUE DES RÔLES (GUESTS/USERS/AUTEURS/EDITEURS) --- 🛡️
  var userRoles = (user === null || user === void 0 ? void 0 : user.roles) || [];

  // 1. Ceux qui peuvent TOUT modifier (Éditeur, Admin, Designer, Fournisseur)
  var superEditors = ['ROLE_EDITEUR', 'ROLE_ADMIN', 'ROLE_DESIGNER', 'ROLE_FOURNISSEUR'];
  var isSuperEditor = superEditors.some(function (r) {
    return userRoles.includes(r);
  });

  // 2. Est-ce un auteur ?
  var isAuthor = userRoles.includes('ROLE_AUTEUR');

  // 3. Qui peut créer ? (Auteurs + Super Editeurs)
  // Note : ROLE_USER (Abonné) n'est PAS inclus ici, il ne voit pas le bouton.
  var canCreate = isSuperEditor || isAuthor;
  if (loading && view === 'list') {
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
  }, "Le savoir du village de Berk, grav\xE9 pour l'\xE9ternit\xE9.")), view === 'list' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
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
      return setView('create');
    },
    className: "bg-viking-gold text-black px-8 py-3 font-black hover:bg-yellow-500 transition shadow-[0_0_20px_rgba(212,175,55,0.2)] uppercase text-xs tracking-widest"
  }, "+ Graver un r\xE9cit"))), view === 'create' || view === 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "animate-in fade-in slide-in-from-bottom-4 duration-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    onClick: function onClick() {
      setView('list');
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
    var cleanId = (article.id || article['@id']).toString().split('/').pop();

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
        setView('edit');
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
    }, "Par ", ((_article$author2 = article.author) === null || _article$author2 === void 0 ? void 0 : _article$author2.pseudo) || ((_article$author3 = article.author) === null || _article$author3 === void 0 ? void 0 : _article$author3.username) || "Guerrier de l'ombre")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Link, {
      to: "/article/".concat(cleanId),
      className: "text-viking-fire font-black text-[10px] uppercase tracking-widest hover:text-viking-gold transition-colors flex items-center gap-2"
    }, "Consulter le parchemin ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-three_drei_core_Center_js-node_modules_react-three_drei_core_Gltf_-3f0419"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OEIsU0FBUyxFQUFDO0VBQTZFLGdCQUN4RjlCLDJEQUFBO0lBQUs4QixTQUFTLEVBQUM7RUFBaUQsQ0FBTSxDQUFDLGVBQ3ZFOUIsMkRBQUE7SUFBSThCLFNBQVMsRUFBQztFQUFzQyxHQUFDLGdCQUFrQixDQUFDLGVBQ3hFOUIsMkRBQUE7SUFBSzhCLFNBQVMsRUFBQztFQUFtQyxHQUM3Q3dsQixjQUFjLGdCQUFHdG5CLDJEQUFBLENBQUNrbkIsc0RBQVE7SUFBQ21CLE9BQU8sRUFBQTdTLGFBQUEsQ0FBQUEsYUFBQSxLQUFNNlMsT0FBTztNQUFFTyxNQUFNLEVBQUMsQ0FBQztJQUFDLEVBQUU7SUFBQ3JuQixJQUFJLEVBQUUrbEI7RUFBZSxDQUFFLENBQUMsZ0JBQUd0bkIsMkRBQUE7SUFBRzhCLFNBQVMsRUFBQztFQUFtQixHQUFDLGVBQWdCLENBQ3pJLENBQ0osQ0FBQyxlQUVOOUIsMkRBQUE7SUFBSzhCLFNBQVMsRUFBQztFQUEyRixnQkFDdEc5QiwyREFBQTtJQUFLOEIsU0FBUyxFQUFDO0VBQWlELENBQU0sQ0FBQyxlQUN2RTlCLDJEQUFBO0lBQUk4QixTQUFTLEVBQUM7RUFBc0MsR0FBQyxnQ0FBK0IsQ0FBQyxlQUNyRjlCLDJEQUFBO0lBQUs4QixTQUFTLEVBQUM7RUFBZSxHQUN6QjBsQixZQUFZLGdCQUFHeG5CLDJEQUFBLENBQUM0UyxrREFBSTtJQUFDeVYsT0FBTyxFQUFFQSxPQUFRO0lBQUM5bUIsSUFBSSxFQUFFaW1CO0VBQWEsQ0FBRSxDQUFDLGdCQUFHeG5CLDJEQUFBO0lBQUc4QixTQUFTLEVBQUM7RUFBbUIsR0FBQyxlQUFnQixDQUNqSCxDQUNKLENBQ0osQ0FDSixDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlckIsU0FBUyxFOzs7Ozs7Ozs7OztBQ3pIeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0FydGljbGVGb3JtLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9BcnRpY2xlU2hvdy5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29tbWVudFNlY3Rpb24uanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0NzdkNoYXJ0LmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9EYXRhUHJvdmlkZXJTcGFjZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVzaWduZXJTcGFjZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9OaWdodEZ1cnkuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL1N0YXJSYXRpbmcuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL1Zpa2luZ1BsYXllci5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0FkbWluRGFzaGJvYXJkLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvQXJ0aWNsZVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Gb3J1bVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Ib21lUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0xvZ2luUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL1JlZ2lzdGVyUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL1N0YXRzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy8gSW1wb3J0IGRlcyBzdHlsZXNcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuXHJcbi8vIEltcG9ydCBkZXMgcGFnZXNcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vcGFnZXMvSG9tZVBhZ2UnO1xyXG5pbXBvcnQgRm9ydW1QYWdlIGZyb20gJy4vcGFnZXMvRm9ydW1QYWdlJztcclxuaW1wb3J0IEFydGljbGVQYWdlIGZyb20gJy4vcGFnZXMvQXJ0aWNsZVBhZ2UnO1xyXG5pbXBvcnQgU3RhdHNQYWdlIGZyb20gJy4vcGFnZXMvU3RhdHNQYWdlJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IFJlZ2lzdGVyUGFnZSBmcm9tICcuL3BhZ2VzL1JlZ2lzdGVyUGFnZSc7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSAnLi9wYWdlcy9Mb2dpblBhZ2UnO1xyXG5pbXBvcnQgQXJ0aWNsZVNob3cgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGVTaG93JztcclxuXHJcbi8vIEltcG9ydCBkZSBsYSBwYWdlIERhc2hib2FyZCBBZG1pblxyXG5pbXBvcnQgQWRtaW5EYXNoYm9hcmQgZnJvbSAnLi9wYWdlcy9BZG1pbkRhc2hib2FyZCc7XHJcblxyXG5jb25zb2xlLmxvZyhcIvCfkLIgRMOpbWFycmFnZSBkZSBsJ2FwcGxpY2F0aW9uIERyYWdvbkNNUy4uLlwiKTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gLS0tIFNZU1TDiE1FIERFIENIQVJHRU1FTlQgRFUgREVTSUdOIChWRVJTSU9OIFNJTEVOQ0lFVVNFKSAtLS1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJy9kZXNpZ25fY29uZmlnLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBTaSBsZSBmaWNoaWVyIG4nZXhpc3RlIHBhcywgb24gcmVudm9pZSBudWxsIHNhbnMgZmFpcmUgZCdlcnJldXJcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbiBuJ2FwcGxpcXVlIGxhIGNvdWxldXIgcXVlIHNpIGxlIGZpY2hpZXIgYSDDqXTDqSB0cm91dsOpIGV0IGNvbnRpZW50IGxhIGRvbm7DqWVcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEucHJpbWFyeUNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZpa2luZy1vcmFuZ2UnLCBkYXRhLnByaW1hcnlDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46oIERlc2lnbiBjaGFyZ8OpIGRlcHVpcyBsYSBmb3JnZSA6XCIsIGRhdGEucHJpbWFyeUNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEVuIGNhcyBkJ2VycmV1ciByw6lzZWF1LCBvbiBuZSBsb2cgcGx1cyBkJ2VycmV1ciByb3VnZVxyXG4gICAgICAgICAgICAgICAgLy8gTGUgdmlsbGFnZSB1dGlsaXNlIHNpbXBsZW1lbnQgbGVzIGNvdWxldXJzIGR1IENTUyBwYXIgZMOpZmF1dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTsgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBmb250LXNhbnMgdGV4dC12aWtpbmctcGFyY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogQkFOTknDiFJFICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0zMiBtZDpoLTQ4IG92ZXJmbG93LWhpZGRlbiBib3JkZXItYi00IGJvcmRlci12aWtpbmctZ29sZCByZWxhdGl2ZSBzaGFkb3ctMnhsIGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9iYW5uaWVyZS5wbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFubmnDqHJlIERyYWdvbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tdmlraW5nLWRhcmsgdG8tdHJhbnNwYXJlbnQgb3BhY2l0eS02MFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktMTAgcHgtNCBmbGV4LWdyb3cgcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ydW1cIiBlbGVtZW50PXs8Rm9ydW1QYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcnRpY2xlLzppZFwiIGVsZW1lbnQ9ezxBcnRpY2xlU2hvdyAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc3RhdGlzdGlxdWVcIiBlbGVtZW50PXs8U3RhdHNQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGVsZW1lbnQ9ezxSZWdpc3RlclBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiBlbGVtZW50PXs8QWRtaW5EYXNoYm9hcmQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIGJvcmRlci10IGJvcmRlci12aWtpbmctZ29sZC8zMCBweS02IG10LTEwIHRleHQtY2VudGVyIHRleHQtdmlraW5nLWxpZ2h0IGZvbnQtZHJhZ29uIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD7CqSBMJ0FjYWTDqW1pZSBkZSBCZXJrIC0gQXJjaGl2ZXMgRHJhY29uaXF1ZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LXJvb3QnKTtcclxuaWYgKHJvb3RFbGVtZW50KSB7XHJcbiAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChyb290RWxlbWVudCk7XHJcbiAgICByb290LnJlbmRlcig8QXBwIC8+KTtcclxuICAgIGNvbnNvbGUubG9nKFwi4pyFIFJlYWN0IGluamVjdMOpIGF2ZWMgc3VjY8OocyAhXCIpO1xyXG59IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBJbXBvc3NpYmxlIGRlIHRyb3V2ZXIgbCfDqWzDqW1lbnQgI3JlYWN0LXJvb3RcIik7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8g8J+RhyAxLiBJTVBPUlQgRFUgR1JBUEhJUVVFIChJbmRpc3BlbnNhYmxlKVxyXG5pbXBvcnQgQ3N2Q2hhcnQgZnJvbSAnLi9Dc3ZDaGFydCc7IFxyXG5cclxuY29uc3QgQXJ0aWNsZUZvcm0gPSAoeyBpZCA9IG51bGwsIG9uU3VjY2VzcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtibG9jcywgc2V0QmxvY3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXNhdGlvbiBhdmVjIGRlcyB0YWJsZWF1eCB2aWRlcyBwb3VyIMOpdml0ZXIgbGVzIGNyYXNoc1xyXG4gICAgY29uc3QgW211c2ljTGlicmFyeSwgc2V0TXVzaWNMaWJyYXJ5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkYXRhc2V0TGlicmFyeSwgc2V0RGF0YXNldExpYnJhcnldID0gdXNlU3RhdGUoW10pOyBcclxuXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gLS0tIENIQVJHRU1FTlQgREVTIERPTk7DiUVTIC0tLVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyAxLiBNdXNpcXVlc1xyXG4gICAgICAgIGZldGNoKCcvYXBpL211c2ljL2xpc3QnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLm9rID8gcmVzLmpzb24oKSA6IFtdKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSBzZXRNdXNpY0xpYnJhcnkoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcIkVycmV1ciBtdXNpcXVlXCIsIGVycikpO1xyXG5cclxuICAgICAgICAvLyAyLiBEYXRhc2V0cyAoQ1NWKSAtIPCfkYcgQydFU1QgSUNJIFFVJ0lMIEZBVVQgQ0hBTkdFUiAhXHJcbiAgICAgICAgLy8gQXZhbnQgYyfDqXRhaXQgOiBmZXRjaCgnL2FwaS9kYXRhc2V0cy9saXN0JylcclxuICAgICAgICAvLyBNYWludGVuYW50IGMnZXN0IDpcclxuICAgICAgICBmZXRjaCgnL2FwaS9saXN0LWRhdGFzZXRzJykgXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRXJyZXVyIEFQSSBEYXRhc2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb25uw6llcyByZcOndWVzIHBvdXIgbGUgZ3JhcGhpcXVlIDpcIiwgZGF0YSk7IC8vIPCfkYAgUmVnYXJkZSB0YSBjb25zb2xlIEYxMlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhc2V0TGlicmFyeShbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkltcG9zc2libGUgZGUgY2hhcmdlciBsZXMgZGF0YXNldHNcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KFtdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gLS0tIEdFU1RJT04gREVTIEJMT0NTIC0tLVxyXG4gICAgY29uc3QgYWRkQmxvYyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICAgc2V0QmxvY3MoWy4uLmJsb2NzLCB7IFxyXG4gICAgICAgICAgICB0eXBlLCBcclxuICAgICAgICAgICAgY29udGVudDogJycsIFxyXG4gICAgICAgICAgICBtZWRpYVVybDogJycsIFxyXG4gICAgICAgICAgICB2aXpUeXBlOiAnYmFyJywgXHJcbiAgICAgICAgICAgIGZpbGU6IG51bGwsICAgXHJcbiAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVCbG9jID0gKGluZGV4VG9SZW1vdmUpID0+IHtcclxuICAgICAgICBzZXRCbG9jcyhibG9jcy5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gaW5kZXhUb1JlbW92ZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVCbG9jID0gKGluZGV4LCBmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdCbG9jcyA9IFsuLi5ibG9jc107XHJcbiAgICAgICAgbmV3QmxvY3NbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xyXG4gICAgICAgIHNldEJsb2NzKG5ld0Jsb2NzKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChpbmRleCwgZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVCbG9jKGluZGV4LCAnZmlsZScsIGZpbGUpO1xyXG4gICAgICAgICAgICBpZiAoZmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVCbG9jKGluZGV4LCAnbWVkaWFVcmwnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIFNPVU1JU1NJT04gLS0tXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGl0bGUnLCB0aXRsZSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdW1tYXJ5Jywgc3VtbWFyeSk7XHJcblxyXG4gICAgICAgIGJsb2NzLmZvckVhY2goKGJsb2MsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW3R5cGVdYCwgYmxvYy50eXBlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bcG9zaXRpb25dYCwgaW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChbJ2gyJywgJ3BhcmFncmFwaCddLmluY2x1ZGVzKGJsb2MudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW2NvbnRlbnRdYCwgYmxvYy5jb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGJsb2MudHlwZSA9PT0gJ2ltYWdlJyAmJiBibG9jLmZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW2ltYWdlRmlsZV1gLCBibG9jLmZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnc3RhdHMnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVt2aXpUeXBlXWAsIGJsb2Mudml6VHlwZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVtjc3ZQYXRoXWAsIGJsb2MubWVkaWFVcmwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnbXVzaWMnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVttdXNpY0ZpbGVOYW1lXWAsIGJsb2MubWVkaWFVcmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY3VzdG9tL2FydGljbGVzL2NyZWF0ZScsIHsgXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVm90cmUgcsOpY2l0IGEgw6l0w6kgZ3JhdsOpIGF2ZWMgc3VjY8OocyAhXCIpO1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKCk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBcIiArIChlcnJvckRhdGEubWVzc2FnZSB8fCBcIlByb2Jsw6htZSBzZXJ2ZXVyXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydChcIkVycmV1ciBzZXJ2ZXVyIGNyaXRpcXVlLlwiKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIHAtOCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctMnhsIG1heC13LTR4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTggdGV4dC1jZW50ZXIgdXBwZXJjYXNlXCI+Tm91dmVsbGUgQ2hyb25pcXVlPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHRleHQtd2hpdGUgcC00IHRleHQtMnhsIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGRcIiBwbGFjZWhvbGRlcj1cIlRpdHJlLi4uXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtzdW1tYXJ5fSBvbkNoYW5nZT17KGUpID0+IHNldFN1bW1hcnkoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgdGV4dC1zdG9uZS0zMDAgcC00IGgtMjQgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZFwiIHBsYWNlaG9sZGVyPVwiUsOpc3Vtw6kuLi5cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IG1iLThcIj5cclxuICAgICAgICAgICAgICAgIHtibG9jcy5tYXAoKGJsb2MsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jsb2MuaWR9IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMC81MCBwLTYgYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWdvbGQgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlQmxvYyhpbmRleCl9IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC1yZWQtNTAwIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFuc2l0aW9uXCI+U3VwcHJpbWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIG1iLTQgdHJhY2tpbmctd2lkZXN0XCI+QmxvYyB7aW5kZXggKyAxfSA6IHtibG9jLnR5cGV9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEgyICYgUGFyYWdyYXBoICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAnaDInICYmIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtibG9jLmNvbnRlbnR9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ2NvbnRlbnQnLCBlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC13aGl0ZSBmb250LWJvbGRcIiBwbGFjZWhvbGRlcj1cIlNvdXMtdGl0cmUuLi5cIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ3BhcmFncmFwaCcgJiYgPHRleHRhcmVhIHZhbHVlPXtibG9jLmNvbnRlbnR9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ2NvbnRlbnQnLCBlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC1zdG9uZS0zMDAgaC0zMlwiIHBsYWNlaG9sZGVyPVwiVGV4dGUuLi5cIiAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJbWFnZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ2ltYWdlJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGVDaGFuZ2UoaW5kZXgsIGUpfSBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCB0ZXh0LXNtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5tZWRpYVVybCAmJiA8aW1nIHNyYz17YmxvYy5tZWRpYVVybH0gYWx0PVwiUHJldmlld1wiIGNsYXNzTmFtZT1cIm10LTQgbWF4LWgtNDAgYm9yZGVyIGJvcmRlci1zdG9uZS02MDBcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIPCfkYcgTEUgQkxPQyBHUkFQSElRVUUgQ09SUklHw4kgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdzdGF0cycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIG1iLTEgYmxvY2sgdXBwZXJjYXNlIGZvbnQtYm9sZFwiPkRvbm7DqWVzIChDU1YpPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnbWVkaWFVcmwnLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jLm1lZGlhVXJsIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIENob2lzaXIgdW4gamV1IGRlIGRvbm7DqWVzIC0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIPCfkYcgU8OJQ1VSSVTDiSBNQVhJTUFMRSBJQ0kgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoZGF0YXNldExpYnJhcnkpICYmIGRhdGFzZXRMaWJyYXJ5Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRMaWJyYXJ5Lm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkLmlkfSB2YWx1ZT17ZC5zb3VyY2V9PntkLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5BdWN1bmUgZG9ubsOpZSBkaXNwb25pYmxlIChvdSBjaGFyZ2VtZW50Li4uKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdGV4dC14cyBtYi0xIGJsb2NrIHVwcGVyY2FzZSBmb250LWJvbGRcIj5UeXBlIGRlIEdyYXBoaXF1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7WydiYXInLCAnbGluZScsICdwaWUnXS5tYXAodHlwZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ3ZpelR5cGUnLCB0eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMiB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgYm9yZGVyIHRyYW5zaXRpb24gJHtibG9jLnZpelR5cGUgPT09IHR5cGUgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBib3JkZXItdmlraW5nLWdvbGQnIDogJ2JnLWJsYWNrIHRleHQtc3RvbmUtNTAwIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6dGV4dC13aGl0ZSd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcsOpdmlzdWFsaXNhdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzIwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLVsyMDBweF0gcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5tZWRpYVVybCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDc3ZDaGFydCBjc3ZVcmw9e2Jsb2MubWVkaWFVcmx9IHZpelR5cGU9e2Jsb2Mudml6VHlwZSB8fCAnYmFyJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNjAwIHRleHQteHMgaXRhbGljXCI+U8OpbGVjdGlvbm5leiB1biBmaWNoaWVyLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTXVzaXF1ZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ211c2ljJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ21lZGlhVXJsJywgZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0zIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0gQ2hvaXNpciB1bmUgbcOpbG9kaWUgLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bXVzaWNMaWJyYXJ5ICYmIE9iamVjdC5lbnRyaWVzKG11c2ljTGlicmFyeSkubWFwKChbZm9sZGVyLCBmaWxlc10pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGdyb3VwIGtleT17Zm9sZGVyfSBsYWJlbD17Zm9sZGVyLnRvVXBwZXJDYXNlKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoZmlsZXMpICYmIGZpbGVzLm1hcChmaWxlID0+IDxvcHRpb24ga2V5PXtmaWxlfSB2YWx1ZT17YCR7Zm9sZGVyfS8ke2ZpbGV9YH0+e2ZpbGV9PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBqdXN0aWZ5LWNlbnRlciBtYi0xMCBwYi0xMCBib3JkZXItYiBib3JkZXItc3RvbmUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIlRpdHJlIEgyXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnaDInKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiUGFyYWdyYXBoZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ3BhcmFncmFwaCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJJbWFnZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ2ltYWdlJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIkdyYXBoaXF1ZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ3N0YXRzJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIk11c2lxdWVcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdtdXNpYycpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtsb2FkaW5nfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJsYWNrIHVwcGVyY2FzZSBweS00IGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctWzBfMF8yMHB4X3JnYmEoMjEyLDE3NSw1NSwwLjQpXSBkaXNhYmxlZDpvcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICdHcmF2dXJlIGVuIGNvdXJzLi4uJyA6ICdQdWJsaWVyIGxhIENocm9uaXF1ZSd9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBUb29sQnRuID0gKHsgbGFiZWwsIG9uQ2xpY2sgfSkgPT4gKFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTMwMCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICsge2xhYmVsfVxyXG4gICAgPC9idXR0b24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlRm9ybTsiLCIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyB1c2VQYXJhbXMsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG4vLyBpbXBvcnQgQ3N2Q2hhcnQgZnJvbSBcIi4vQ3N2Q2hhcnRcIjtcclxuLy8gaW1wb3J0IFZpa2luZ1BsYXllciBmcm9tIFwiLi9WaWtpbmdQbGF5ZXJcIjsgLy8g8J+RiCBJbXBvcnQgZHUgbm91dmVhdSBwbGF5ZXJcclxuLy8gaW1wb3J0IENvbW1lbnRTZWN0aW9uIGZyb20gXCIuL0NvbW1lbnRTZWN0aW9uXCI7XHJcbi8vIGltcG9ydCBTdGFyUmF0aW5nIGZyb20gXCIuL1N0YXJSYXRpbmdcIjtcclxuXHJcbi8vIGNvbnN0IEFydGljbGVTaG93ID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbi8vICAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuLy8gICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgICAgLy8gMS4gVsOpcmlmIFRva2VuIHBvdXIgbCdpbnRlcmZhY2UgKFVzZXIgU3RhdGUpXHJcbi8vICAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuLy8gICAgICAgICBpZiAodG9rZW4pIHtcclxuLy8gICAgICAgICAgICAgdHJ5IHsgc2V0VXNlcihqd3REZWNvZGUodG9rZW4pKTsgfSBjYXRjaCAoZSkge31cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC8vIDIuIFByw6lwYXJhdGlvbiBkZXMgRW4tdMOqdGVzIChIRUFERVJTKVxyXG4vLyAgICAgICAgIC8vIE9uIHByw6lwYXJlIGxlIGJhZGdlIHBvdXIgZW50cmVyIGRhbnMgbGUgZG9uam9uXHJcbi8vICAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuLy8gICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJ1xyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICAgICAgaWYgKHRva2VuKSB7XHJcbi8vICAgICAgICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLy8gMy4gRmV0Y2ggQXJ0aWNsZSBBVkVDIGxlcyBoZWFkZXJzXHJcbi8vICAgICAgICAgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkgLy8g8J+RiCBBSk9VVCBJQ0lcclxuLy8gICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gKHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChcIkFjY8OocyByZWZ1c8OpIG91IGludHJvdXZhYmxlXCIpKSlcclxuLy8gICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHNldEFydGljbGUoZGF0YSk7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuLy8gICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgIH0sIFtpZF0pO1xyXG5cclxuLy8gICAgIGlmIChsb2FkaW5nKVxyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZ29sZCBwLTEwIGFuaW1hdGUtcHVsc2VcIj5cclxuLy8gICAgICAgICAgICAgICAgIEludm9jYXRpb24gZHUgcsOpY2l0Li4uXHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICBpZiAoIWFydGljbGUpXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXJlZC01MDAgcC0xMFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgUGFyY2hlbWluIGludHJvdXZhYmxlLlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG5cclxuLy8gICAgIC8vIPCflI4gT04gQ0hFUkNIRSBMQSBNVVNJUVVFIElDSVxyXG4vLyAgICAgY29uc3QgbXVzaWNCbG9jID0gYXJ0aWNsZS5ibG9jcz8uZmluZCgoYikgPT4gYi50eXBlID09PSBcIm11c2ljXCIpO1xyXG4vLyAgICAgLy8gT24gbmV0dG9pZSBsZSBjaGVtaW4gKHBhcmZvaXMgaWwgYSAvdXBsb2Fkcy8uLi4sIHBhcmZvaXMgbm9uKVxyXG4vLyAgICAgY29uc3QgbXVzaWNTcmMgPSBtdXNpY0Jsb2MgPyBgL211c2lxdWUvJHttdXNpY0Jsb2MuY29udGVudH1gIDogbnVsbDtcclxuXHJcbi8vICAgICAvLyBPbiBwcsOpcGFyZSBsZXMgYXV0cmVzIGJsb2NzIChzYW5zIGxhIG11c2lxdWUgcG91ciDDqXZpdGVyIGxlcyBkb3VibG9ucylcclxuLy8gICAgIGNvbnN0IGNvbnRlbnRCbG9jcyA9XHJcbi8vICAgICAgICAgYXJ0aWNsZS5ibG9jc1xyXG4vLyAgICAgICAgICAgICA/LmZpbHRlcigoYikgPT4gYi50eXBlICE9PSBcIm11c2ljXCIpXHJcbi8vICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbikgfHwgW107XHJcblxyXG4vLyAgICAgY29uc3QgaGFuZGxlUmF0ZSA9IGFzeW5jIChzY29yZSkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuLy8gICAgICAgICBpZiAoIXRva2VuKSByZXR1cm4gYWxlcnQoXCJJbCBmYXV0IMOqdHJlIGNvbm5lY3TDqSBwb3VyIG5vdGVyICFcIik7XHJcblxyXG4vLyAgICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9yYXRpbmdzXCIsIHtcclxuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzY29yZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICBhcnRpY2xlOiBgL2FwaS9hcnRpY2xlcy8ke2lkfWAsXHJcbi8vICAgICAgICAgICAgICAgICB9KSxcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuLy8gICAgICAgICAgICAgICAgIGFsZXJ0KFwiVm90cmUgbm90ZSBhIMOpdMOpIGdyYXbDqWUgIVwiKTtcclxuLy8gICAgICAgICAgICAgICAgIC8vIE9wdGlvbm5lbCA6IFJlY2hhcmdlciBsJ2FydGljbGUgcG91ciB2b2lyIGxhIG5vdXZlbGxlIG1veWVubmVcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcC04IG1pbi1oLXNjcmVlbiBiZy1zdG9uZS05MDAgYm9yZGVyLXggYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctMnhsXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxMaW5rXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdG89XCIvZm9ydW1cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgbWItOCBpbmxpbmUtYmxvY2sgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCJcclxuLy8gICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICDihpAgUmV0b3VyIGF1IEhhbGxcclxuLy8gICAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTQgbWItNlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVJZD17aWR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSYXRpbmc9e2FydGljbGUuYXZlcmFnZVJhdGluZ31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRlPXtoYW5kbGVSYXRlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDAgdGV4dC1zbVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBNb3llbm5lIDoge2FydGljbGUuYXZlcmFnZVJhdGluZyB8fCBcIjBcIn0vNVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgdGV4dC1jZW50ZXIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBkcm9wLXNoYWRvdy1sZ1wiPlxyXG4vLyAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbi8vICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMC81MCBwLTggYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWdvbGQgbWItOCBpdGFsaWMgdGV4dC1zdG9uZS0zMDAgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgc2hhZG93LWlubmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgICAgICAgIHsvKiDwn461IExFIFBMQVlFUiBFU1QgSUNJIChKdXN0ZSBzb3VzIGxlIHLDqXN1bcOpKSAqL31cclxuLy8gICAgICAgICAgICAge211c2ljU3JjICYmIChcclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTIgYW5pbWF0ZS1mYWRlLWluLXVwXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFZpa2luZ1BsYXllciBzcmM9e211c2ljU3JjfSBhdXRvUGxheT17dHJ1ZX0gLz5cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICApfVxyXG5cclxuLy8gICAgICAgICAgICAgey8qIExlIHJlc3RlIGR1IGNvbnRlbnUgKi99XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xMlwiPlxyXG4vLyAgICAgICAgICAgICAgICAge2NvbnRlbnRCbG9jcy5tYXAoKGJsb2MpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGJsb2MudHlwZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaDJcIjpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTcwMCBwYi0yIG10LThcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MuY29udGVudH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwYXJhZ3JhcGhcIjpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTMwMCBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1sZyB3aGl0ZXNwYWNlLXByZS1saW5lIHRleHQtanVzdGlmeVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5jb250ZW50fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2VcIjpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LThcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtibG9jLmNvbnRlbnR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJbGx1c3RyYXRpb25cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtaC1bNTAwcHhdIGJvcmRlci00IGJvcmRlci1zdG9uZS04MDAgc2hhZG93LVswXzBfMTVweF9yZ2JhKDAsMCwwLDAuNSldIHJvdW5kZWRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdGF0c1wiOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidml6XCI6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGJsb2MuY29udGVudFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYmxvYy5jb250ZW50LnNwbGl0KFwiOjpcIilcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtdO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC02IHJvdW5kZWQtbGcgbXktOFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWJvbGQgdGV4dC1zbSB1cHBlcmNhc2UgbWItNCB0cmFja2luZy13aWRlc3QgdGV4dC1jZW50ZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCfk4ogRG9ubsOpZXMgZHUgQ2xhblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOTZcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDc3ZDaGFydFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzdlVybD17cGFydHNbMV19XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdml6VHlwZT17cGFydHNbMF0gfHwgXCJiYXJcIn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgcHQtMTAgYm9yZGVyLXQgYm9yZGVyLXN0b25lLTgwMCB0ZXh0LWNlbnRlciB0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5cclxuLy8gICAgICAgICAgICAgICAgIEdyYXbDqSBwYXIge2FydGljbGUuYXV0aG9yPy5wc2V1ZG8gfHwgXCJVbiBpbmNvbm51XCJ9IOKAontcIiBcIn1cclxuLy8gICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShhcnRpY2xlLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8Q29tbWVudFNlY3Rpb24gYXJ0aWNsZUlkPXtpZH0gLz5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBBcnRpY2xlU2hvdztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBDc3ZDaGFydCBmcm9tIFwiLi9Dc3ZDaGFydFwiO1xyXG5pbXBvcnQgVmlraW5nUGxheWVyIGZyb20gXCIuL1Zpa2luZ1BsYXllclwiO1xyXG5pbXBvcnQgQ29tbWVudFNlY3Rpb24gZnJvbSBcIi4vQ29tbWVudFNlY3Rpb25cIjtcclxuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSBcIi4vU3RhclJhdGluZ1wiO1xyXG5cclxuY29uc3QgQXJ0aWNsZVNob3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IChyZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QoXCJFcnJldXJcIikpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb25uw6llcyByZcOndWVzIDpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZylcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWdvbGQgcC0xMCBhbmltYXRlLXB1bHNlXCI+XHJcbiAgICAgICAgICAgICAgICBJbnZvY2F0aW9uIGR1IHLDqWNpdC4uLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgaWYgKCFhcnRpY2xlKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1yZWQtNTAwIHAtMTBcIj5cclxuICAgICAgICAgICAgICAgIFBhcmNoZW1pbiBpbnRyb3V2YWJsZS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAvLyAtLS0gTE9HSVFVRSBEJ0VYVFJBQ1RJT04gLS0tXHJcbiAgICBsZXQgY3VzdG9tU3R5bGVzID0ge307XHJcbiAgICBjb25zdCByYXdDb25maWcgPSBhcnRpY2xlLmRlc2lnbkNvbmZpZztcclxuXHJcbiAgICBpZiAocmF3Q29uZmlnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY3VzdG9tU3R5bGVzID1cclxuICAgICAgICAgICAgICAgIHR5cGVvZiByYXdDb25maWcgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA/IEpTT04ucGFyc2UocmF3Q29uZmlnKVxyXG4gICAgICAgICAgICAgICAgICAgIDogcmF3Q29uZmlnO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBkZSBkw6ljb2RhZ2UgZGVzIHN0eWxlc1wiLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIETDiUZJTklUSU9OIERFUyBDT1VMRVVSUyAtLS1cclxuICAgIC8vIE9uIHV0aWxpc2UgbGVzIHZhbGV1cnMgZGUgbGEgQkRELCBzaW5vbiBibGFuYyBwYXIgZMOpZmF1dCAoc2VyYSBnw6lyw6kgcGFyIGxhIGNsYXNzZSBDU1MpXHJcbiAgICBjb25zdCBmaW5hbFRpdGxlQ29sb3IgPSBjdXN0b21TdHlsZXMudGl0bGVDb2xvciB8fCBcIiNmZmZmZmZcIjtcclxuICAgIGNvbnN0IGZpbmFsQ29udGVudEJnID0gY3VzdG9tU3R5bGVzLmNvbnRlbnRCZyB8fCBcInJnYmEoNDEsIDM3LCAzNiwgMC41KVwiO1xyXG5cclxuICAgIGNvbnN0IG11c2ljQmxvYyA9IGFydGljbGUuYmxvY3M/LmZpbmQoKGIpID0+IGIudHlwZSA9PT0gXCJtdXNpY1wiKTtcclxuICAgIGNvbnN0IG11c2ljU3JjID0gbXVzaWNCbG9jID8gYC9tdXNpcXVlLyR7bXVzaWNCbG9jLmNvbnRlbnR9YCA6IG51bGw7XHJcblxyXG4gICAgY29uc3QgY29udGVudEJsb2NzID0gYXJ0aWNsZS5ibG9jc1xyXG4gICAgICAgID8gWy4uLmFydGljbGUuYmxvY3NdXHJcbiAgICAgICAgICAgICAgLmZpbHRlcigoYikgPT4gYi50eXBlICE9PSBcIm11c2ljXCIpXHJcbiAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKVxyXG4gICAgICAgIDogW107XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlUmF0ZSA9IGFzeW5jIChzY29yZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBpZiAoIXRva2VuKSByZXR1cm4gYWxlcnQoXCJJbCBmYXV0IMOqdHJlIGNvbm5lY3TDqSBwb3VyIG5vdGVyICFcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9yYXRpbmdzXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzY29yZSxcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlOiBgL2FwaS9hcnRpY2xlcy8ke2lkfWAsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVm90cmUgbm90ZSBhIMOpdMOpIGdyYXbDqWUgIVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbm5lbCA6IFJlY2hhcmdlciBsJ2FydGljbGUgcG91ciB2b2lyIGxhIG5vdXZlbGxlIG1veWVubmVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcC04IG1pbi1oLXNjcmVlbiBiZy1zdG9uZS05MDAgYm9yZGVyLXggYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvZm9ydW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgbWItOCBpbmxpbmUtYmxvY2sgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDihpAgUmV0b3VyIGF1IEhhbGxcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTQgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVJZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSYXRpbmc9e2FydGljbGUuYXZlcmFnZVJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRlPXtoYW5kbGVSYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDAgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNb3llbm5lIDoge2FydGljbGUuYXZlcmFnZVJhdGluZyB8fCBcIjBcIn0vNVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBUSVRSRSA6IFV0aWxpc2F0aW9uIGRlIGxhIHZhcmlhYmxlIENTUyBsb2NhbGUgcG91ciBwYXNzZXIgb3V0cmUgbGUgaDEgZ2xvYmFsIGR1IEFwcC5jc3MgKi99XHJcbiAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXCItLWFydGljbGUtdGl0bGUtY29sb3JcIjogZmluYWxUaXRsZUNvbG9yIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlLWR5bmFtaWMtdGl0bGUgdGV4dC01eGwgZm9udC1kcmFnb24gbWItNiB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGRyb3Atc2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgey8qIFLDiVNVTcOJIDogRm9uZCBkeW5hbWlxdWUgYXBwbGlxdcOpIGVuIHN0eWxlIGlubGluZSAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBmaW5hbENvbnRlbnRCZyB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC04IGJvcmRlci1sLTQgYm9yZGVyLXZpa2luZy1nb2xkIG1iLTggaXRhbGljIHRleHQtc3RvbmUtMzAwIHRleHQtbGcgbGVhZGluZy1yZWxheGVkIHNoYWRvdy1pbm5lciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHttdXNpY1NyYyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpa2luZ1BsYXllciBzcmM9e211c2ljU3JjfSBhdXRvUGxheT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEyXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudEJsb2NzLm1hcCgoYmxvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYmxvYy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBib3JkZXItYiBib3JkZXItc3RvbmUtNzAwIHBiLTIgbXQtOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicGFyYWdyYXBoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvYy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS0zMDAgbGVhZGluZy1yZWxheGVkIHRleHQtbGcgd2hpdGVzcGFjZS1wcmUtbGluZSB0ZXh0LWp1c3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jsb2MuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtibG9jLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJbGx1c3RyYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtaC1bNTAwcHhdIGJvcmRlci00IGJvcmRlci1zdG9uZS04MDAgc2hhZG93LXhsIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0YXRzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2aXpcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gYmxvYy5jb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBibG9jLmNvbnRlbnQuc3BsaXQoXCI6OlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtibG9jLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBwLTYgcm91bmRlZC1sZyBteS04IHNoYWRvdy1pbm5lciBzaGFkb3ctaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgZm9udC1ib2xkIHRleHQtc20gdXBwZXJjYXNlIG1iLTQgdHJhY2tpbmctd2lkZXN0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDwn5OKIERvbm7DqWVzIGR1IENsYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTk2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3N2Q2hhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3ZVcmw9e3BhcnRzWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpelR5cGU9e3BhcnRzWzBdIHx8IFwiYmFyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwIHB0LTEwIGJvcmRlci10IGJvcmRlci1zdG9uZS04MDAgdGV4dC1jZW50ZXIgdGV4dC1zdG9uZS01MDAgdGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBHcmF2w6kgcGFyIHthcnRpY2xlLmF1dGhvcj8ucHNldWRvIHx8IFwiVW4gw6ljbGFpcmV1clwifSDigKJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUoYXJ0aWNsZS5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxDb21tZW50U2VjdGlvbiBhcnRpY2xlSWQ9e2lkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVTaG93O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gU291cy1jb21wb3NhbnQgcG91ciBVTiBjb21tZW50YWlyZSAocsOpY3Vyc2lmKVxyXG5jb25zdCBDb21tZW50SXRlbSA9ICh7IGNvbW1lbnQsIG9uVm90ZSwgb25SZXBseSwgYXJ0aWNsZUlkLCBjYW5JbnRlcmFjdCB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd1JlcGx5Rm9ybSwgc2V0U2hvd1JlcGx5Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVwbHlDb250ZW50LCBzZXRSZXBseUNvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVwbHlTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBvblJlcGx5KHJlcGx5Q29udGVudCwgY29tbWVudC5pZCk7IC8vIE9uIHLDqXBvbmQgw6AgQ0UgY29tbWVudGFpcmUgKHBhcmVudClcclxuICAgICAgICBzZXRSZXBseUNvbnRlbnQoXCJcIik7XHJcbiAgICAgICAgc2V0U2hvd1JlcGx5Rm9ybShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItbC0yIGJvcmRlci1zdG9uZS03MDAgcGwtNCBtdC00IG1iLTJcIj5cclxuICAgICAgICAgICAgey8qIEVOLVTDilRFIDogQXV0ZXVyICsgU2NvcmUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LXN0b25lLTQwMCBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC12aWtpbmctZ29sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21tZW50LmF1dGhvcj8ucHNldWRvIHx8IFwiVmlraW5nIEFub255bWVcIn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuKAoiB7Y29tbWVudC5zY29yZX0gcG9pbnRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAg4oCiIHtuZXcgRGF0ZShjb21tZW50LmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIENPTlRFTlUgKi99XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtMjAwIHRleHQtc20gbWItMlwiPntjb21tZW50LmNvbnRlbnR9PC9wPlxyXG5cclxuICAgICAgICAgICAgey8qIPCflJIgQUNUSU9OUyA6IFZvdGUgJiBSw6lwb25kcmUgKFZpc2libGVzIHNldWxlbWVudCBzaSBjb25uZWN0w6kpICovfVxyXG4gICAgICAgICAgICB7Y2FuSW50ZXJhY3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zdG9uZS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlKGNvbW1lbnQuaWQsIFwidXBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyZWVuLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWsiBVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Wb3RlKGNvbW1lbnQuaWQsIFwiZG93blwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcmVkLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWvCBEb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1JlcGx5Rm9ybSghc2hvd1JlcGx5Rm9ybSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUsOpcG9uZHJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBGT1JNVUxBSVJFIERFIFLDiVBPTlNFIChDYWNow6kgcGFyIGTDqWZhdXQpICovfVxyXG4gICAgICAgICAgICB7c2hvd1JlcGx5Rm9ybSAmJiBjYW5JbnRlcmFjdCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlUmVwbHlTdWJtaXR9IGNsYXNzTmFtZT1cIm10LTIgZmxleCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZXBseUNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVwbHlDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0yIHRleHQtd2hpdGUgdGV4dC14cyB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIHLDqXBvbnNlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXN0b25lLTcwMCB0ZXh0LXdoaXRlIHB4LTMgdGV4dC14cyB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW52b3llclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIFLDiUNVUlNJVklUw4kgOiBBZmZpY2hlciBsZXMgZW5mYW50cyAocsOpcG9uc2VzKSAqL31cclxuICAgICAgICAgICAge2NvbW1lbnQucmVwbGllcyAmJiBjb21tZW50LnJlcGxpZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5yZXBsaWVzLm1hcCgocmVwbHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlcGx5LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17cmVwbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZvdGU9e29uVm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVwbHk9e29uUmVwbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlSWQ9e2FydGljbGVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkludGVyYWN0PXtjYW5JbnRlcmFjdH0gLy8g8J+RiCBPbiB0cmFuc21ldCBsYSBwZXJtaXNzaW9uIGF1eCBlbmZhbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG4vLyBDb21wb3NhbnQgUHJpbmNpcGFsXHJcbmNvbnN0IENvbW1lbnRTZWN0aW9uID0gKHsgYXJ0aWNsZUlkIH0pID0+IHtcclxuICAgIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25ld0NvbW1lbnQsIHNldE5ld0NvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIC8vIPCflJIgw4l0YXQgcG91ciBzYXZvaXIgc2kgbCd1dGlsaXNhdGV1ciBlc3QgY29ubmVjdMOpXHJcbiAgICBjb25zdCBbY2FuSW50ZXJhY3QsIHNldENhbkludGVyYWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyBWw6lyaWZpY2F0aW9uIGRlIGxhIGNvbm5leGlvbiBhdSBjaGFyZ2VtZW50XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBzZXRDYW5JbnRlcmFjdCghIXRva2VuKTsgLy8gU2kgdG9rZW4gZXhpc3RlID0+IHRydWUsIHNpbm9uID0+IGZhbHNlXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gQ2hhcmdlciBsZXMgY29tbWVudGFpcmVzXHJcbiAgICBjb25zdCBmZXRjaENvbW1lbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAvYXBpL2NvbW1lbnRzP2FydGljbGU9JHthcnRpY2xlSWR9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIDEuIE9uIHLDqWN1cMOocmUgbGEgbGlzdGUgcGV1IGltcG9ydGUgbGUgbm9tIGRlIGxhIGNsw6lcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRzRGF0YSA9IGRhdGFbXCJoeWRyYTptZW1iZXJcIl0gfHwgZGF0YVtcIm1lbWJlclwiXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gMi4gT24gZmlsdHJlIGxlcyByYWNpbmVzIChjZXV4IHF1aSBuJ29udCBwYXMgZGUgcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdENvbW1lbnRzID0gY29tbWVudHNEYXRhLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAoYykgPT4gIWMucGFyZW50IHx8IGMucGFyZW50ID09PSB1bmRlZmluZWQgfHwgYy5wYXJlbnQgPT09IG51bGxcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMy4gT24gbWV0IMOgIGpvdXIgbCfDqXRhdFxyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHMocm9vdENvbW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ29tbWVudHMoKTtcclxuICAgIH0sIFthcnRpY2xlSWRdKTtcclxuXHJcbiAgICAvLyBQb3N0ZXIgdW4gY29tbWVudGFpcmVcclxuICAgIGNvbnN0IGhhbmRsZVBvc3QgPSBhc3luYyAoY29udGVudCwgcGFyZW50SWQgPSBudWxsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVm91cyBkZXZleiDDqnRyZSBjb25uZWN0w6kgcG91ciBncmF2ZXIgdW4gbWVzc2FnZSAhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICBhcnRpY2xlOiBgL2FwaS9hcnRpY2xlcy8ke2FydGljbGVJZH1gLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudElkID8gYC9hcGkvY29tbWVudHMvJHtwYXJlbnRJZH1gIDogbnVsbCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvY29tbWVudHNcIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIGZldGNoQ29tbWVudHMoKTsgLy8gUmVjaGFyZ2VyIGxhIGxpc3RlXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudElkKSBzZXROZXdDb21tZW50KFwiXCIpOyAvLyBWaWRlciBsZSBjaGFtcCBwcmluY2lwYWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBWb3RlclxyXG4gICAgY29uc3QgaGFuZGxlVm90ZSA9IGFzeW5jIChjb21tZW50SWQsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBpZiAoIXRva2VuKSByZXR1cm4gYWxlcnQoXCJTZXVscyBsZXMgZ3VlcnJpZXJzIGNvbm5lY3TDqXMgcGV1dmVudCB2b3RlciAhXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChgL2FwaS9jdXN0b20vY29tbWVudHMvJHtjb21tZW50SWR9L3ZvdGUvJHtkaXJlY3Rpb259YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe30pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBwdC04IGJvcmRlci10IGJvcmRlci1zdG9uZS04MDBcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNiB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgIENvbnNlaWwgZGUgR3VlcnJlICh7Y29tbWVudHMubGVuZ3RofSBhdmlzKVxyXG4gICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgey8qIPCflJIgRm9ybXVsYWlyZSBQcmluY2lwYWwgOiBBZmZpY2jDqSBzZXVsZW1lbnQgc2kgY29ubmVjdMOpICovfVxyXG4gICAgICAgICAgICB7Y2FuSW50ZXJhY3QgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggZmxleCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDb21tZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHRleHQtc3RvbmUtMzAwIHAtMyBoLTIwIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhaXNzZXogdm90cmUgbWFycXVlIHN1ciBjZSByw6ljaXQuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQb3N0KG5ld0NvbW1lbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBweC02IHVwcGVyY2FzZSBob3ZlcjpiZy13aGl0ZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdyYXZlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggcC00IGJvcmRlciBib3JkZXItc3RvbmUtODAwIGJnLXN0b25lLTkwMC81MCB0ZXh0LWNlbnRlciBpdGFsaWMgdGV4dC1zdG9uZS01MDAgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlam9pZ25leiBsZSBjbGFuIChjb25uZWN0ZXotdm91cykgcG91ciBwYXJ0aWNpcGVyIGF1IGNvbnNlaWwgZGUgZ3VlcnJlIGV0IHZvdGVyLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogTGlzdGUgZGVzIGNvbW1lbnRhaXJlcyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb21tZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtjb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblZvdGU9e2hhbmRsZVZvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVwbHk9e2hhbmRsZVBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVJZD17YXJ0aWNsZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5JbnRlcmFjdD17Y2FuSW50ZXJhY3R9IC8vIPCfkYggT24gcGFzc2UgbCdpbmZvIFwiY29ubmVjdMOpXCIgYXV4IGl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50U2VjdGlvbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcclxuaW1wb3J0IHsgXHJcbiAgQmFyQ2hhcnQsIEJhciwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBMZWdlbmQsIFJlc3BvbnNpdmVDb250YWluZXIsXHJcbiAgTGluZUNoYXJ0LCBMaW5lLCBQaWVDaGFydCwgUGllLCBDZWxsIFxyXG59IGZyb20gJ3JlY2hhcnRzJztcclxuXHJcbmNvbnN0IENPTE9SUyA9IFsnI2Q0YWYzNycsICcjYjkxYzFjJywgJyMxYzE5MTcnLCAnIzU3NTM0ZScsICcjYThhMjllJ107IC8vIENvdWxldXJzIFZpa2luZyAoT3IsIFJvdWdlLCBOb2lyLi4uKVxyXG5cclxuY29uc3QgQ3N2Q2hhcnQgPSAoeyBjc3ZVcmwsIHZpelR5cGUgPSAnYmFyJyB9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWNzdlVybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIC8vIDEuIE9uIHZhIGNoZXJjaGVyIGxlIGZpY2hpZXIgQ1NWIHZpYSBzb24gVVJMXHJcbiAgICAgICAgZmV0Y2goY3N2VXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJJbXBvc3NpYmxlIGRlIGxpcmUgbGUgcGFyY2hlbWluIGRlIGRvbm7DqWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oY3N2VGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAyLiBPbiBsZSB0cmFuc2Zvcm1lIGVuIEpTT04gdXRpbGlzYWJsZVxyXG4gICAgICAgICAgICAgICAgUGFwYS5wYXJzZShjc3ZUZXh0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB0cnVlLCAvLyBMYSBwcmVtacOocmUgbGlnbmUgY29udGllbnQgbGVzIHRpdHJlc1xyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNUeXBpbmc6IHRydWUsIC8vIENvbnZlcnRpdCBsZXMgXCIxMFwiIGVuIG5vbWJyZXMgMTBcclxuICAgICAgICAgICAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXN1bHRzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKFwiTGUgZmljaGllciBlc3QgaWxsaXNpYmxlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW2NzdlVybF0pO1xyXG5cclxuICAgIGlmICghY3N2VXJsKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgaXRhbGljIHRleHQteHNcIj5BdWN1bmUgZG9ubsOpZSBzw6lsZWN0aW9ubsOpZS48L3A+O1xyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGFuaW1hdGUtcHVsc2UgdGV4dC14c1wiPkTDqWNoaWZmcmFnZSBkZXMgcnVuZXMuLi48L3A+O1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQteHNcIj5FcnJldXIgOiB7ZXJyb3J9PC9wPjtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHRleHQteHNcIj5MZSBmaWNoaWVyIGVzdCB2aWRlLjwvcD47XHJcblxyXG4gICAgLy8gT24gZGV2aW5lIGxlcyBjbMOpcyAoWCA9IHByZW1pw6hyZSBjb2xvbm5lLCBZID0gZGV1eGnDqG1lIGNvbG9ubmUpXHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XHJcbiAgICBjb25zdCB4S2V5ID0ga2V5c1swXTsgLy8gRXg6IFwiQW5uw6llXCIgb3UgXCJEcmFnb25cIlxyXG4gICAgY29uc3QgeUtleSA9IGtleXNbMV07IC8vIEV4OiBcIlBvcHVsYXRpb25cIiBvdSBcIlZpdGVzc2VcIlxyXG5cclxuICAgIGNvbnN0IHJlbmRlckNoYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAodml6VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmVDaGFydCBkYXRhPXtkYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgc3Ryb2tlPVwiIzQ0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PXt4S2V5fSBzdHJva2U9XCIjZDRhZjM3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFlBeGlzIHN0cm9rZT1cIiNkNGFmMzdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50U3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFjMTkxNycsIGJvcmRlckNvbG9yOiAnI2Q0YWYzNycsIGNvbG9yOiAnI2ZmZicgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZ2VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PXt5S2V5fSBzdHJva2U9XCIjZDRhZjM3XCIgc3Ryb2tlV2lkdGg9ezN9IGRvdD17eyByOiA2IH19IGFjdGl2ZURvdD17eyByOiA4IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlICdwaWUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UGllQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeT1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbExpbmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eyh7IG5hbWUsIHBlcmNlbnQgfSkgPT4gYCR7bmFtZX0gJHsocGVyY2VudCAqIDEwMCkudG9GaXhlZCgwKX0lYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyUmFkaXVzPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODg4NGQ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFLZXk9e3lLZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lS2V5PXt4S2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsIGtleT17YGNlbGwtJHtpbmRleH1gfSBmaWxsPXtDT0xPUlNbaW5kZXggJSBDT0xPUlMubGVuZ3RoXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BpZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxYzE5MTcnLCBib3JkZXJDb2xvcjogJyNkNGFmMzcnLCBjb2xvcjogJyNmZmYnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QaWVDaGFydD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jhcic6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXtkYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgc3Ryb2tlPVwiIzQ0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PXt4S2V5fSBzdHJva2U9XCIjZDRhZjM3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFlBeGlzIHN0cm9rZT1cIiNkNGFmMzdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjdXJzb3I9e3tmaWxsOiAnIzMzMyd9fSBjb250ZW50U3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFjMTkxNycsIGJvcmRlckNvbG9yOiAnI2Q0YWYzNycsIGNvbG9yOiAnI2ZmZicgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZ2VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9e3lLZXl9IGZpbGw9XCIjZDRhZjM3XCIgcmFkaXVzPXtbNCwgNCwgMCwgMF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYXJDaGFydD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02NCB3LWZ1bGwgbXQtNCBiZy1ibGFjay80MCBwLTQgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyQ2hhcnQoKX1cclxuICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENzdkNoYXJ0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcclxuXHJcbmNvbnN0IERhdGFQcm92aWRlclNwYWNlID0gKHsgZGF0YXNldHMgfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaGVhZGVycywgc2V0SGVhZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY29sdW1uTWFwcGluZywgc2V0Q29sdW1uTWFwcGluZ10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZGF0YXNldE5hbWUsIHNldERhdGFzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNldEZpbGUoc2VsZWN0ZWRGaWxlKTtcclxuICAgICAgICBzZXREYXRhc2V0TmFtZShzZWxlY3RlZEZpbGUubmFtZS5yZXBsYWNlKCcuY3N2JywgJycpKTtcclxuXHJcbiAgICAgICAgUGFwYS5wYXJzZShzZWxlY3RlZEZpbGUsIHtcclxuICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcclxuICAgICAgICAgICAgcHJldmlldzogNSxcclxuICAgICAgICAgICAgY29tcGxldGU6IChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xzID0gT2JqZWN0LmtleXMocmVzdWx0cy5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXJzKGNvbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByZXZpZXcocmVzdWx0cy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsTWFwcGluZyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHMuZm9yRWFjaChoID0+IGluaXRpYWxNYXBwaW5nW2hdID0gJ2NhdGVnb3JpY2FsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29sdW1uTWFwcGluZyhpbml0aWFsTWFwcGluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlVHlwZSA9IChoZWFkZXIpID0+IHtcclxuICAgICAgICBzZXRDb2x1bW5NYXBwaW5nKHByZXYgPT4gKHtcclxuICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgW2hlYWRlcl06IHByZXZbaGVhZGVyXSA9PT0gJ2NhdGVnb3JpY2FsJyA/ICdudW1lcmljYWwnIDogJ2NhdGVnb3JpY2FsJ1xyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgICAgIC8vIFByw6lwYXJhdGlvbiBkdSBwYXlsb2FkIGNvbmZvcm1lIMOgIEFQSSBQbGF0Zm9ybVxyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGFzZXROYW1lLFxyXG4gICAgICAgICAgICBzb3VyY2U6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbk1hcHBpbmcsXHJcbiAgICAgICAgICAgICAgICB1cGxvYWRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICByb3dDb3VudDogcHJldmlldy5sZW5ndGggLy8gSW5mb3JtYXRpb24gdXRpbGUgcG91ciB0b24gYWZmaWNoYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2RhdGFzZXRzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGNydWNpYWwgaWNpIHBvdXIgw6l2aXRlciBsJ2VycmV1ciA0MTVcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQYXJjaGVtaW4gZGUgZG9ubsOpZXMgZW5yZWdpc3Ryw6kgZGFucyBsYSBiaWJsaW90aMOocXVlIGQnT2RpbiAhXCIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSw6lwb25zZSBkdSBzZXJ2ZXVyIDpcIiwgZXJyb3JEYXRhKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIDogTGUgU2NyaWJlIHJlZnVzZSBsZSBmb3JtYXQgZHUgZmljaGllci5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIHLDqXNlYXVcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgYW5pbWF0ZS1mYWRlSW5cIj5cclxuICAgICAgICAgICAgey8qIEZvcm11bGFpcmUgZCdpbXBvcnRhdGlvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBwLTYgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCByb3VuZGVkLWxnIHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgZm9udC1kcmFnb24gdGV4dC14bCBtYi00IHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5Ob3V2ZWxsZSBBcmNoaXZlIGRlIERvbm7DqWVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zdG9uZS01MDAgdGV4dC1bMTBweF0gdXBwZXJjYXNlIGZvbnQtYmxhY2sgbWItMlwiPkZpY2hpZXIgQ1NWIHVuaXF1ZW1lbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIi5jc3ZcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCB0ZXh0LXNtIHRleHQtc3RvbmUtNDAwIGZpbGU6bXItNCBmaWxlOnB5LTIgZmlsZTpweC00IGZpbGU6cm91bmRlZCBmaWxlOmJvcmRlci0wIGZpbGU6dGV4dC14cyBmaWxlOmZvbnQtYmxhY2sgZmlsZTp1cHBlcmNhc2UgZmlsZTpiZy12aWtpbmctZ29sZCBmaWxlOnRleHQtYmxhY2sgaG92ZXI6ZmlsZTpiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpbGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LWF1dG8gcHQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9IGRpc2FibGVkPXtpc1VwbG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWZpcmUgdGV4dC13aGl0ZSBweS0zIHB4LTggZm9udC1ibGFjayB1cHBlcmNhc2UgdGV4dC14cyBzaGFkb3ctbGcgaG92ZXI6c2NhbGUtMTA1IGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOmdyYXlzY2FsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzVXBsb2FkaW5nID8gJ0dyYXZ1cmUuLi4nIDogJ1NjZWxsZXIgbFxcJ0FyY2hpdmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQXBlcsOndSBUZWNobmlxdWUgKi99XHJcbiAgICAgICAgICAgIHtwcmV2aWV3Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAvODAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8xMCByb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgcC0zIGJvcmRlci1iIGJvcmRlci13aGl0ZS81XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRleHQtdmlraW5nLWdvbGQvNTBcIj5BbmFseXNlIGRlIGxhIHN0cnVjdHVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBib3JkZXItY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctYmxhY2svNjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcnMubWFwKGggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aH0gY2xhc3NOYW1lPVwicC00IGJvcmRlci1yIGJvcmRlci13aGl0ZS81IG1pbi13LVsxNTBweF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0zIHRydW5jYXRlXCI+e2h9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlVHlwZShoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1bOXB4XSBweC0zIHB5LTEgcm91bmRlZC1mdWxsIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXIgdHJhbnNpdGlvbi1jb2xvcnMgJHtjb2x1bW5NYXBwaW5nW2hdID09PSAnbnVtZXJpY2FsJyA/ICdiZy1ibHVlLTYwMC8yMCB0ZXh0LWJsdWUtNDAwIGJvcmRlciBib3JkZXItYmx1ZS01MDAvMzAnIDogJ2JnLWVtZXJhbGQtNjAwLzIwIHRleHQtZW1lcmFsZC00MDAgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTUwMC8zMCd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5NYXBwaW5nW2hdID09PSAnbnVtZXJpY2FsJyA/ICfwn5SiIE51bcOpcmlxdWUnIDogJ/CflKQgQ2F0w6lnb3JpZWwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXZpZXcubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcnMubWFwKGggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2h9IGNsYXNzTmFtZT1cInAtNCB0ZXh0LVsxMXB4XSB0ZXh0LXN0b25lLTQwMCBib3JkZXItciBib3JkZXItd2hpdGUvNSBpdGFsaWNcIj57cm93W2hdfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBBcmNoaXZlcyBleGlzdGFudGVzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZC80MCBmb250LWRyYWdvbiB0ZXh0LXNtIG1iLTYgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMjAgcGItMlwiPlJlZ2lzdHJlcyBkw6lqw6AgcHLDqXNlbnRzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhc2V0cz8ubGVuZ3RoID4gMCA/IGRhdGFzZXRzLm1hcChkcyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkcy5pZH0gY2xhc3NOYW1lPVwicC00IGJnLWJsYWNrLzIwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZC80MCB0cmFuc2l0aW9uLWFsbCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9udC1ib2xkIHRleHQtc20gZ3JvdXAtaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9yc1wiPntkcy5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1zdG9uZS02MDAgdXBwZXJjYXNlIGZvbnQtYm9sZCBpdGFsaWNcIj57ZHMuc291cmNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGJnLXN0b25lLTgwMCBweC0yIHB5LTAuNSByb3VuZGVkIHRleHQtc3RvbmUtNDAwXCI+e2RzLnJvd3NDb3VudH0gbGlnbmVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgcHktMTAgdGV4dC1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItc3RvbmUtODAwIHRleHQtc3RvbmUtNjAwIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuZSBkb25uw6llIG4nYSDDqXTDqSBncmF2w6llIHBvdXIgbGUgbW9tZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlclNwYWNlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRGVzaWduZXJTcGFjZSA9ICgpID0+IHtcclxuICAgIC8vIC0tLSDDiVRBVFMgLS0tXHJcbiAgICBjb25zdCBWSUtJTkdfT1JBTkdFX0RFRkFVTFQgPSAnI2U2N2UyMic7IFxyXG4gICAgXHJcbiAgICBjb25zdCBbZ2xvYmFsQ29sb3IsIHNldEdsb2JhbENvbG9yXSA9IHVzZVN0YXRlKFZJS0lOR19PUkFOR0VfREVGQVVMVCk7XHJcbiAgICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEFydGljbGVJZCwgc2V0U2VsZWN0ZWRBcnRpY2xlSWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2FydGljbGVTdHlsZXMsIHNldEFydGljbGVTdHlsZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRpdGxlQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICBjb250ZW50Qmc6ICcjMWMxOTE3J1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbaXNTYXZpbmcsIHNldElzU2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyAtLS0gQ0hBUkdFTUVOVCBJTklUSUFMIC0tLVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaEFydGljbGVzKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXHJcbiAgICAgICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCctLXZpa2luZy1vcmFuZ2UnKS50cmltKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb2xvciAmJiBjdXJyZW50Q29sb3Iuc3RhcnRzV2l0aCgnIycpKSB7XHJcbiAgICAgICAgICAgIHNldEdsb2JhbENvbG9yKGN1cnJlbnRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoQXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hcnRpY2xlcycpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGRhdGFbJ2h5ZHJhOm1lbWJlciddIHx8IGRhdGEubWVtYmVyIHx8IChBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtdKTtcclxuICAgICAgICAgICAgc2V0QXJ0aWNsZXMoaXRlbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgY2hhcmdlbWVudCBhcnRpY2xlczpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIEFDVElPTlMgRk9SR0UgR0xPQkFMRSAtLS1cclxuICAgIGNvbnN0IGhhbmRsZUdsb2JhbENvbG9yUHJldmlldyA9IChuZXdDb2xvcikgPT4ge1xyXG4gICAgICAgIHNldEdsb2JhbENvbG9yKG5ld0NvbG9yKTtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmlraW5nLW9yYW5nZScsIG5ld0NvbG9yKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRHbG9iYWxDb2xvciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oXCJWb3VsZXotdm91cyB2cmFpbWVudCByZXN0YXVyZXIgbGVzIGNvdWxldXJzIGQnb3JpZ2luZSBkdSB2aWxsYWdlID9cIikpIHtcclxuICAgICAgICAgICAgc2V0SXNTYXZpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVHbG9iYWxDb2xvclByZXZpZXcoVklLSU5HX09SQU5HRV9ERUZBVUxUKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYWRtaW4vcmVzZXQtZ2xvYmFsLWRlc2lnbicsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIGFsZXJ0KFwi8J+UpSBMZXMgY291bGV1cnMgZCdvcmlnaW5lIG9udCDDqXTDqSByZXN0YXVyw6llcyAhXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgcmVzZXQ6XCIsIGVycik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1NhdmluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNhdmVHbG9iYWxTdHlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc1NhdmluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2FkbWluL3NhdmUtZ2xvYmFsLWRlc2lnbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWFpbkNvbG9yOiBnbG9iYWxDb2xvciB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSBhbGVydChcIuKalO+4jyBMZSB0aMOobWUgZHUgdmlsbGFnZSBhIMOpdMOpIGdyYXbDqSBkYW5zIGxhIHBpZXJyZSAhXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChcIkVycmV1ciBkZSBjb25uZXhpb24gw6AgbGEgZm9yZ2UuXCIpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzU2F2aW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLSBBQ1RJT05TIENIUk9OSVFVRVMgLS0tXHJcbiAgICBjb25zdCBoYW5kbGVBcnRpY2xlU2VsZWN0ID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFNlbGVjdGVkQXJ0aWNsZUlkKGlkKTtcclxuICAgICAgICBjb25zdCBhcnRpY2xlID0gYXJ0aWNsZXMuZmluZChhID0+IFN0cmluZyhhLmlkKSA9PT0gU3RyaW5nKGlkKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGFydGljbGUgJiYgYXJ0aWNsZS5kZXNpZ25Db25maWcpIHtcclxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gdHlwZW9mIGFydGljbGUuZGVzaWduQ29uZmlnID09PSAnc3RyaW5nJyBcclxuICAgICAgICAgICAgICAgID8gSlNPTi5wYXJzZShhcnRpY2xlLmRlc2lnbkNvbmZpZykgXHJcbiAgICAgICAgICAgICAgICA6IGFydGljbGUuZGVzaWduQ29uZmlnO1xyXG4gICAgICAgICAgICBzZXRBcnRpY2xlU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlQ29sb3I6IGNvbmZpZy50aXRsZUNvbG9yIHx8ICcjZmZmZmZmJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRCZzogY29uZmlnLmNvbnRlbnRCZyB8fCAnIzFjMTkxNydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0QXJ0aWNsZVN0eWxlcyh7IHRpdGxlQ29sb3I6ICcjZmZmZmZmJywgY29udGVudEJnOiAnIzFjMTkxNycgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTYXZlQXJ0aWNsZVN0eWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRBcnRpY2xlSWQpIHJldHVybjtcclxuICAgICAgICBzZXRJc1NhdmluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2FkbWluL2FydGljbGUvJHtzZWxlY3RlZEFydGljbGVJZH0vc3R5bGVgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQ29sb3I6IGFydGljbGVTdHlsZXMudGl0bGVDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEJnOiBhcnRpY2xlU3R5bGVzLmNvbnRlbnRCZ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi4pyoIExlIHN0eWxlIGRlIGNldHRlIGNocm9uaXF1ZSBhIMOpdMOpIHNhdXZlZ2FyZMOpICFcIik7XHJcbiAgICAgICAgICAgICAgICBmZXRjaEFydGljbGVzKCk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIHLDqXNlYXUuXCIpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzU2F2aW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEwIHAtNiBtYXgtdy01eGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICB7LyogMS4gU0VDVElPTiBGT1JHRSBHTE9CQUxFICovfVxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8yMCBwLTYgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5Gb3JnZSBHbG9iYWxlIChTaXRlKTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldEdsb2JhbENvbG9yfSBkaXNhYmxlZD17aXNTYXZpbmd9IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGJnLXN0b25lLTgwMCBob3ZlcjpiZy1zdG9uZS03MDAgdGV4dC1zdG9uZS00MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTEgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgdXBwZXJjYXNlIGZvbnQtYm9sZCB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFLDqWluaXRpYWxpc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNiBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDAgZm9udC1ib2xkIHVwcGVyY2FzZVwiPkNvdWxldXIgUHJpbmNpcGFsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiB2YWx1ZT17Z2xvYmFsQ29sb3J9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlR2xvYmFsQ29sb3JQcmV2aWV3KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy0yMCBoLTIwIGN1cnNvci1wb2ludGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlci0yIGJvcmRlci1zdG9uZS03MDAgcm91bmRlZC1sZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgYmctYmxhY2svNDAgcC02IHJvdW5kZWQgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGdsb2JhbENvbG9yIH19IGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGRyb3Atc2hhZG93LWxnIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSSURFUlMgT0YgQkVSS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZUdsb2JhbFN0eWxlfSBkaXNhYmxlZD17aXNTYXZpbmd9IGNsYXNzTmFtZT1cInctZnVsbCBweS0zIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ib2xkIHVwcGVyY2FzZSByb3VuZGVkIGhvdmVyOmJyaWdodG5lc3MtMTEwIHRyYW5zaXRpb24tYWxsIGRpc2FibGVkOm9wYWNpdHktNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXNTYXZpbmcgPyBcIkdyYXZ1cmUuLi5cIiA6IFwiVmFsaWRlciBwb3VyIHRvdXQgbGUgdmlsbGFnZVwifVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIHsvKiAyLiBTRUNUSU9OIFNUWUxFIERFUyBDSFJPTklRVUVTIChDT1JSSUfDiUUgUE9VUiBMJ0FQRVLDh1UpICovfVxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAgYm9yZGVyIGJvcmRlci1ibHVlLTUwMC8yMCBwLTYgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtZHJhZ29uIHRleHQtYmx1ZS00MDAgbWItNiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+U3R5bGUgZGVzIENocm9uaXF1ZXMgKEFydGljbGVzKTwvaDI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTBweF0gZm9udC1ib2xkIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSBtYi0yXCI+Q2hvaXNpciB1biByw6ljaXQgw6AgbW9kaWZpZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRBcnRpY2xlSWR9IG9uQ2hhbmdlPXtoYW5kbGVBcnRpY2xlU2VsZWN0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc3RvbmUtODAwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHRleHQtd2hpdGUgcC0zIHJvdW5kZWQgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBTw6lsZWN0aW9ubmVyIHVuIEFydGljbGUgLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZXMubWFwKGFydCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXthcnQuaWR9IHZhbHVlPXthcnQuaWR9PnthcnQudGl0bGV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtODAwIHAtMyByb3VuZGVkIGJvcmRlciBib3JkZXItc3RvbmUtNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgbWItMlwiPkNvdWxldXIgVGl0cmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiB2YWx1ZT17YXJ0aWNsZVN0eWxlcy50aXRsZUNvbG9yfSBvbkNoYW5nZT17KGUpID0+IHNldEFydGljbGVTdHlsZXMocHJldiA9PiAoeyAuLi5wcmV2LCB0aXRsZUNvbG9yOiBlLnRhcmdldC52YWx1ZSB9KSl9IGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIGJnLXRyYW5zcGFyZW50IGN1cnNvci1wb2ludGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS04MDAgcC0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1zdG9uZS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTBweF0gZm9udC1ib2xkIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSBtYi0yXCI+Rm9uZCBDb250ZW51PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgdmFsdWU9e2FydGljbGVTdHlsZXMuY29udGVudEJnfSBvbkNoYW5nZT17KGUpID0+IHNldEFydGljbGVTdHlsZXMocHJldiA9PiAoeyAuLi5wcmV2LCBjb250ZW50Qmc6IGUudGFyZ2V0LnZhbHVlIH0pKX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgYmctdHJhbnNwYXJlbnQgY3Vyc29yLXBvaW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogQVBFUsOHVSBDT1JSSUfDiSA6IFV0aWxpc2UgbGEgY2xhc3NlIGV0IGxhIHZhcmlhYmxlIENTUyBkZSBBcHAuY3NzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTUwIHAtNiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbWluLWgtWzE4MHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBcIi0tYXJ0aWNsZS10aXRsZS1jb2xvclwiOiBhcnRpY2xlU3R5bGVzLnRpdGxlQ29sb3IgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlLWR5bmFtaWMtdGl0bGUgdGV4dC0zeGwgZm9udC1kcmFnb24gbWItNCB1cHBlcmNhc2UgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRBcnRpY2xlSWQgPyBhcnRpY2xlcy5maW5kKGEgPT4gU3RyaW5nKGEuaWQpID09PSBTdHJpbmcoc2VsZWN0ZWRBcnRpY2xlSWQpKT8udGl0bGUgOiBcIlRpdHJlIGRlIGwnQXJ0aWNsZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBhcnRpY2xlU3R5bGVzLmNvbnRlbnRCZyB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCByb3VuZGVkIHRleHQtc3RvbmUtNDAwIHRleHQtc20gaXRhbGljIHRyYW5zaXRpb24tYWxsIGJvcmRlciBib3JkZXItd2hpdGUvNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGUgZHJhZ29uIHN1cnZvbGEgbGVzIGZhbGFpc2VzIGRlIEJlcmsuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZUFydGljbGVTdHlsZX0gZGlzYWJsZWQ9e2lzU2F2aW5nIHx8ICFzZWxlY3RlZEFydGljbGVJZH0gY2xhc3NOYW1lPVwidy1mdWxsIG10LTggcHktNCBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2Ugcm91bmRlZCB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzU2F2aW5nID8gJ0dyYXZ1cmUgZW4gY291cnMuLi4nIDogJ0VucmVnaXN0cmVyIGxlIHN0eWxlIGR1IHLDqWNpdCd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2lnbmVyU3BhY2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSAnand0LWRlY29kZSc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgbGV0IHVzZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIE9uIGTDqWNvZGUgbGUgdG9rZW4gcG91ciBjb25uYcOudHJlIGwndXRpbGlzYXRldXIgZXQgc2VzIHLDtGxlc1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXNlciA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVG9rZW4gaW52YWxpZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFbDqXJpZmljYXRpb24gZGVzIGRyb2l0cyBwb3VyIGxlIERhc2hib2FyZFxyXG4gICAgY29uc3QgY2FuU2VlRGFzaGJvYXJkID0gdXNlcj8ucm9sZXM/LmluY2x1ZGVzKCdST0xFX0VESVRFVVInKSB8fCB1c2VyPy5yb2xlcz8uaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgYm9yZGVyLWItMiBib3JkZXItdmlraW5nLWdvbGQvNTAgcC00IHN0aWNreSB0b3AtMCB6LTUwIHNoYWRvdy1sZyBiYWNrZHJvcC1ibHVyLW1kIGJnLW9wYWNpdHktOTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZHJvcC1zaGFkb3ctbWQgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdXBwZXJjYXNlXCI+UmlkZXJzIG9mIEJlcms8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgdGV4dC1sZyBmb250LWRyYWdvbiB0cmFja2luZy13aWRlIHRleHQtdmlraW5nLWxpZ2h0IHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPkFjY3VlaWw8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5Gb3J1bTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMSUVOIERBU0hCT0FSRCA6IFZpc2libGUgdW5pcXVlbWVudCBwb3VyIMOJZGl0ZXVyL0FkbWluICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuU2VlRGFzaGJvYXJkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZG1pblwiIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC81MCBweC0yIHB5LTAuNSBob3ZlcjpiZy12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zZWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IGJvcmRlci1sIGJvcmRlci1zdG9uZS03MDAgcGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXRva2VuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlciBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmV4aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwiYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBweC00IHB5LTEuNSB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlam9pbmRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSBmb250LWJsYWNrIGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcj8ucHNldWRvIHx8IFwiR3VlcnJpZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXZpa2luZy1maXJlIHVwcGVyY2FzZSBmb250LWJsYWNrIGJvcmRlciBib3JkZXItdmlraW5nLWZpcmUvMzAgcHgtMiBweS0xIGhvdmVyOmJnLXZpa2luZy1maXJlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWl0dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUsIHVzZVRocmVlIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcclxuaW1wb3J0IHsgdXNlR0xURiwgdXNlQW5pbWF0aW9ucywgQ2VudGVyLCBIdG1sLCB1c2VUZXh0dXJlLCBTdGFycyB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJztcclxuXHJcbmNvbnN0IE1PREVMX1BBVEggPSAnL21vZGVscy9uaWdodF9mdXJ5LmdsYic7XHJcbmNvbnN0IFRFWFRVUkVfUEFUSCA9ICcvdGV4dHVyZXMvbmlnaHRfZnVyeV9za2luLndlYnAnO1xyXG5jb25zdCBBTklNQVRJT05fTkFNRSA9ICdOaWdodEZ1cnlfYXJtYXR1cmVBY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gRHJhZ29uTW9kZWwoeyB2aXRlc3NlUm90YXRpb24sIHZpdGVzc2VBbmltYXRpb24sIGZhY3RldXJUYWlsbGUsIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCB7IHNjZW5lLCBhbmltYXRpb25zIH0gPSB1c2VHTFRGKE1PREVMX1BBVEgpO1xyXG4gIGNvbnN0IHRleHR1cmUgPSB1c2VUZXh0dXJlKFRFWFRVUkVfUEFUSCk7XHJcbiAgY29uc3QgeyB2aWV3cG9ydCB9ID0gdXNlVGhyZWUoKTsgXHJcbiAgXHJcbiAgLy8gQ2FsY3VsIGRlIGJhc2UgcmVzcG9uc2l2ZVxyXG4gIGNvbnN0IGJhc2VTY2FsZSA9IHZpZXdwb3J0LndpZHRoIDwgNSA/IDAuNSA6IDAuODsgXHJcbiAgLy8g8J+TjyBDQUxDVUwgRklOQUwgOiBUYWlsbGUgZGUgYmFzZSB4IExlIGN1cnNldXIgZGUgbCd1dGlsaXNhdGV1clxyXG4gIGNvbnN0IGZpbmFsU2NhbGUgPSBiYXNlU2NhbGUgKiBmYWN0ZXVyVGFpbGxlO1xyXG5cclxuICB0ZXh0dXJlLmZsaXBZID0gZmFsc2U7XHJcbiAgdGV4dHVyZS5jb2xvclNwYWNlID0gJ3NyZ2InO1xyXG5cclxuICBjb25zdCBncm91cCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHsgYWN0aW9ucyB9ID0gdXNlQW5pbWF0aW9ucyhhbmltYXRpb25zLCBncm91cCk7XHJcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjZW5lLnRyYXZlcnNlKChjaGlsZCkgPT4ge1xyXG4gICAgICBpZiAoY2hpbGQuaXNNZXNoKSB7XHJcbiAgICAgICAgY2hpbGQubWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcclxuICAgICAgICBjaGlsZC5tYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtzY2VuZSwgdGV4dHVyZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGlvbnMgJiYgYWN0aW9uc1tBTklNQVRJT05fTkFNRV0pIHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXTtcclxuICAgICAgICBhY3Rpb24ucmVzZXQoKS5mYWRlSW4oMC41KS5wbGF5KCk7XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFthY3Rpb25zXSk7XHJcblxyXG4gIC8vIE1pc2Ugw6Agam91ciB2aXRlc3NlIGFuaW1hdGlvblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9ucyAmJiBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXSkge1xyXG4gICAgICAgIGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdLnRpbWVTY2FsZSA9IHZpdGVzc2VBbmltYXRpb247XHJcbiAgICB9XHJcbiAgfSwgW3ZpdGVzc2VBbmltYXRpb24sIGFjdGlvbnNdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQW5pbWF0aW9uID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXTtcclxuICAgIGlmICghYWN0aW9uKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGlzUGxheWluZykge1xyXG4gICAgICAgIGFjdGlvbi5wYXVzZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhY3Rpb24ucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgYWN0aW9uLnBsYXkoKTsgXHJcbiAgICB9XHJcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRnJhbWUoKCkgPT4ge1xyXG4gICAgaWYoZ3JvdXAuY3VycmVudCkgZ3JvdXAuY3VycmVudC5yb3RhdGlvbi55ICs9IHZpdGVzc2VSb3RhdGlvbjtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxwcmltaXRpdmUgXHJcbiAgICAgIHJlZj17Z3JvdXB9IFxyXG4gICAgICBvYmplY3Q9e3NjZW5lfSBcclxuICAgICAgb25DbGljaz17dG9nZ2xlQW5pbWF0aW9ufVxyXG4gICAgICBvblBvaW50ZXJPdmVyPXsoKSA9PiBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ31cclxuICAgICAgb25Qb2ludGVyT3V0PXsoKSA9PiBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdhdXRvJ31cclxuICAgICAgXHJcbiAgICAgIHNjYWxlPXtmaW5hbFNjYWxlfSAvLyDwn5GIIE9uIGFwcGxpcXVlIGxhIHRhaWxsZSBkeW5hbWlxdWUgaWNpXHJcbiAgICAgIFxyXG4gICAgICBwb3NpdGlvbj17WzAsIDAuNSwgMF19IFxyXG4gICAgICB7Li4ucHJvcHN9IFxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBOaWdodEZ1cnlTY2VuZSA9ICgpID0+IHtcclxuICAvLyDwn46b77iPIMOJVEFUUyBEVSBUQUJMRUFVIERFIEJPUkRcclxuICBjb25zdCBbcm90U3BlZWQsIHNldFJvdFNwZWVkXSA9IHVzZVN0YXRlKDAuMDAxKTtcclxuICBjb25zdCBbYW5pbVNwZWVkLCBzZXRBbmltU3BlZWRdID0gdXNlU3RhdGUoMi41KTtcclxuICBjb25zdCBbc2l6ZUZhY3Rvciwgc2V0U2l6ZUZhY3Rvcl0gPSB1c2VTdGF0ZSgxKTsgLy8gMSA9IHRhaWxsZSBub3JtYWxlICgxMDAlKVxyXG5cclxuICAvLyBGb25jdGlvbiBwb3VyIHRvdXQgcmVtZXR0cmUgw6AgesOpcm9cclxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgIHNldFJvdFNwZWVkKDAuMDAxKTtcclxuICAgIHNldEFuaW1TcGVlZCgyLjUpO1xyXG4gICAgc2V0U2l6ZUZhY3RvcigxKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJlbGF0aXZlXCI+XHJcbiAgICAgIFxyXG4gICAgICA8Q2FudmFzIHNoYWRvd3MgY2FtZXJhPXt7IHBvc2l0aW9uOiBbMCwgMiwgMTBdLCBmb3Y6IDQ1IH19PlxyXG4gICAgICAgIDxjb2xvciBhdHRhY2g9XCJiYWNrZ3JvdW5kXCIgYXJncz17WycjMDUwNTEwJ119IC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFN0YXJzIHJhZGl1cz17MTAwfSBkZXB0aD17NTB9IGNvdW50PXs1MDAwfSBmYWN0b3I9ezR9IHNhdHVyYXRpb249ezB9IGZhZGUgc3BlZWQ9ezF9IC8+XHJcblxyXG4gICAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXszfSAvPlxyXG4gICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IHBvc2l0aW9uPXtbMTAsIDEwLCA1XX0gaW50ZW5zaXR5PXs0fSAvPlxyXG4gICAgICAgIDxzcG90TGlnaHQgcG9zaXRpb249e1stNSwgNSwgMTBdfSBpbnRlbnNpdHk9ezV9IGNvbG9yPVwiI2E4NTVmN1wiIC8+XHJcbiAgICAgICAgPHNwb3RMaWdodCBwb3NpdGlvbj17WzAsIDUsIC0xMF19IGludGVuc2l0eT17NX0gY29sb3I9XCIjZmZmZmZmXCIgLz5cclxuXHJcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8SHRtbCBjZW50ZXI+PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+SW52b2NhdGlvbi4uLjwvZGl2PjwvSHRtbD59PlxyXG4gICAgICAgICAgPENlbnRlciB0b3A+XHJcbiAgICAgICAgICAgIDxEcmFnb25Nb2RlbCBcclxuICAgICAgICAgICAgICAgIHZpdGVzc2VSb3RhdGlvbj17cm90U3BlZWR9IFxyXG4gICAgICAgICAgICAgICAgdml0ZXNzZUFuaW1hdGlvbj17YW5pbVNwZWVkfVxyXG4gICAgICAgICAgICAgICAgZmFjdGV1clRhaWxsZT17c2l6ZUZhY3Rvcn0gLy8g8J+RiCBPbiBlbnZvaWUgbGEgdGFpbGxlXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NlbnRlcj5cclxuICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICA8L0NhbnZhcz5cclxuXHJcbiAgICAgIHsvKiDwn46b77iPIFVJIFBBTk5FQVUgREUgQ09OVFLDlExFICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgYmctYmxhY2svNzAgYmFja2Ryb3AtYmx1ci1tZCBwLTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzMwIHRleHQtd2hpdGUgdy02NCBzaGFkb3ctMnhsIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLWJsYWNrLzgwXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmx1ZS0zMDAgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzEwIHBiLTJcIj5cclxuICAgICAgICAgICAgQ09OVFLDlExFUyBEVSBEUkFHT05cclxuICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICB7LyogMS4gVGFpbGxlIChab29tKSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlRhaWxsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwXCI+eHtzaXplRmFjdG9yLnRvRml4ZWQoMSl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgXHJcbiAgICAgICAgICAgICAgICBtaW49XCIwLjFcIiBcclxuICAgICAgICAgICAgICAgIG1heD1cIjNcIiBcclxuICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjFcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzaXplRmFjdG9yfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTaXplRmFjdG9yKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtZ3JlZW4tNTAwIGN1cnNvci1wb2ludGVyIGgtMiBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGFwcGVhcmFuY2Utbm9uZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiAyLiBSb3RhdGlvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlJvdGF0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPntyb3RTcGVlZC50b0ZpeGVkKDMpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIFxyXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiIFxyXG4gICAgICAgICAgICAgICAgbWF4PVwiMC4wNVwiIFxyXG4gICAgICAgICAgICAgICAgc3RlcD1cIjAuMDAxXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cm90U3BlZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvdFNwZWVkKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXIgaC0yIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgYXBwZWFyYW5jZS1ub25lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIDMuIFZpdGVzc2UgQW5pbWF0aW9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QW5pbWF0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUtNDAwXCI+eHthbmltU3BlZWQudG9GaXhlZCgxKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIiBcclxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBcclxuICAgICAgICAgICAgICAgIG1heD1cIjVcIiBcclxuICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjFcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthbmltU3BlZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuaW1TcGVlZChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYWNjZW50LXB1cnBsZS01MDAgY3Vyc29yLXBvaW50ZXIgaC0yIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgYXBwZWFyYW5jZS1ub25lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG10LTQgYmctd2hpdGUvMTAgaG92ZXI6YmctcmVkLTUwMC81MCBweS0xIHJvdW5kZWQgdGV4dC14cyB0cmFuc2l0aW9uLWNvbG9ycyBib3JkZXIgYm9yZGVyLXdoaXRlLzEwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFLDqWluaXRpYWxpc2VyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG51c2VHTFRGLnByZWxvYWQoTU9ERUxfUEFUSCk7XHJcbnVzZVRleHR1cmUucHJlbG9hZChURVhUVVJFX1BBVEgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmlnaHRGdXJ5U2NlbmU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3RhclJhdGluZyA9ICh7IGFydGljbGVJZCwgY3VycmVudFJhdGluZywgb25SYXRlIH0pID0+IHtcclxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoY3VycmVudFJhdGluZyB8fCAwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSYXRpbmcgPSAoc2NvcmUpID0+IHtcclxuICAgICAgICBzZXRSYXRpbmcoc2NvcmUpO1xyXG4gICAgICAgIG9uUmF0ZShzY29yZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XHJcbiAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKChzdGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtMnhsIHRyYW5zaXRpb24tY29sb3JzICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXIgPD0gKGhvdmVyIHx8IHJhdGluZykgPyBcInRleHQtdmlraW5nLWdvbGRcIiA6IFwidGV4dC1zdG9uZS02MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJhdGluZyhzdGFyKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHN0YXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIocmF0aW5nKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDimIVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFyUmF0aW5nOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBWaWtpbmdQbGF5ZXIgPSAoeyBzcmMsIGF1dG9QbGF5ID0gZmFsc2UgfSkgPT4ge1xyXG4gICAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGltZSwgc2V0Q3VycmVudFRpbWVdID0gdXNlU3RhdGUoXCIwOjAwXCIpO1xyXG4gICAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZShcIjA6MDBcIik7XHJcbiAgICBjb25zdCBbaXNCbG9ja2VkLCBzZXRJc0Jsb2NrZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBOb3V2ZWF1IHN0YXRlIHBvdXIgZMOpdGVjdGVyIGxlIGJsb2NhZ2VcclxuXHJcbiAgICAvLyBHZXN0aW9uIGRlIGwnQXV0b3BsYXlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dG9QbGF5ICYmIGF1ZGlvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGxheVByb21pc2UgPSBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgaWYgKHBsYXlQcm9taXNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHBsYXlQcm9taXNlXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWNjw6hzIDogTGUgbmF2aWdhdGV1ciBhIGF1dG9yaXPDqSBsJ2F1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNCbG9ja2VkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIMOJY2hlYyA6IExlIG5hdmlnYXRldXIgYSBibG9xdcOpIGwnYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRvcGxheSBibG9xdcOpIChpbnRlcmFjdGlvbiByZXF1aXNlKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNCbG9ja2VkKHRydWUpOyAvLyBPbiBzaWduYWxlIHF1J2lsIGZhdXQgdW5lIGFjdGlvbiBtYW51ZWxsZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F1dG9QbGF5LCBzcmNdKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgICAgICBzZXRJc0Jsb2NrZWQoZmFsc2UpOyAvLyBTaSBsJ3V0aWxpc2F0ZXVyIGNsaXF1ZSwgbGUgYmxvY2FnZSBzYXV0ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRpbWVVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWU7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0b3RhbCkge1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzcygoY3VycmVudCAvIHRvdGFsKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUaW1lKGZvcm1hdFRpbWUoY3VycmVudCkpO1xyXG4gICAgICAgICAgICBzZXREdXJhdGlvbihmb3JtYXRUaW1lKHRvdGFsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWVrID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IGUudGFyZ2V0LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrWCA9IGUubmF0aXZlRXZlbnQub2Zmc2V0WDtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGF1ZGlvUmVmLmN1cnJlbnQuZHVyYXRpb247XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAoY2xpY2tYIC8gd2lkdGgpICogZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmb3JtYXRUaW1lID0gKHRpbWUpID0+IHtcclxuICAgICAgICBpZiAoIXRpbWUgfHwgaXNOYU4odGltZSkpIHJldHVybiBcIjA6MDBcIjtcclxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgICAgICAgY29uc3Qgc2VjID0gTWF0aC5mbG9vcih0aW1lICUgNjApO1xyXG4gICAgICAgIHJldHVybiBgJHttaW59OiR7c2VjIDwgMTAgPyAnMCcgKyBzZWMgOiBzZWN9YDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gVmlzdWFsaXNldXIgYW5pbcOpXHJcbiAgICBjb25zdCBiYXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMzAgfSkubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAga2V5PXtpfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xIG14LVsxcHhdIHJvdW5kZWQtdCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtpc1BsYXlpbmcgPyAnYmctdmlraW5nLWdvbGQgYW5pbWF0ZS1iYXInIDogJ2JnLXN0b25lLTcwMCBoLTEnfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IGAke01hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjR9c2AsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGlzUGxheWluZyA/ICcxMDAlJyA6ICcxMCUnIFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsIG14LWF1dG8gbXktOCBiZy1ibGFjay84MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHJvdW5kZWQtbGcgcC02IHNoYWRvdy1bMF8wXzMwcHhfcmdiYSgwLDAsMCwwLjgpXSBiYWNrZHJvcC1ibHVyLXNtIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIE1lc3NhZ2Ugc2kgYmxvcXXDqSAqL31cclxuICAgICAgICAgICAge2lzQmxvY2tlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svODAgei0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMTIsMTc1LDU1LDAuNildXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIPCflIogQWN0aXZlciBsJ0FtYmlhbmNlIFNvbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8YXVkaW8gXHJcbiAgICAgICAgICAgICAgICByZWY9e2F1ZGlvUmVmfSBcclxuICAgICAgICAgICAgICAgIHNyYz17c3JjfSBcclxuICAgICAgICAgICAgICAgIG9uVGltZVVwZGF0ZT17aGFuZGxlVGltZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uRW5kZWQ9eygpID0+IHNldElzUGxheWluZyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBvbkxvYWRlZE1ldGFkYXRhPXsoZSkgPT4gc2V0RHVyYXRpb24oZm9ybWF0VGltZShlLnRhcmdldC5kdXJhdGlvbikpfSAvLyBDaGFyZ2UgbGEgZHVyw6llIGTDqHMgbGUgZMOpYnV0XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC02IHJlbGF0aXZlIHotMTBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBCb3V0b24gUGxheS9QYXVzZSAqL31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTE0IGgtMTQgZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke2lzUGxheWluZyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIHNoYWRvdy1bMF8wXzE1cHhfcmdiYSgyMTIsMTc1LDU1LDAuNSldJyA6ICd0ZXh0LXZpa2luZy1nb2xkIGhvdmVyOmJnLXZpa2luZy1nb2xkLzIwJ31gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1BsYXlpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy02IGgtNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk02IDE5aDRWNUg2djE0em04LTE0djE0aDRWNWgtNHpcIi8+PC9zdmc+IFxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy02IGgtNiB0cmFuc2xhdGUteC0wLjVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOCA1djE0bDExLTd6XCIvPjwvc3ZnPiBcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEluZm8gJiBWaXN1YWxpc2V1ciAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtWzEwcHhdIHRleHQtdmlraW5nLWdvbGQgZm9udC1tb25vIG1iLTIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBvcGFjaXR5LTgwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjdXJyZW50VGltZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpc1BsYXlpbmcgPyBcIkxlY3R1cmUuLi5cIiA6IFwiUGF1c2VcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBab25lIFZpc3VhbGlzZXVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMCBmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBtYi0zIG92ZXJmbG93LWhpZGRlbiBvcGFjaXR5LTgwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtiYXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogQmFycmUgZGUgcHJvZ3Jlc3Npb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xLjUgYmctc3RvbmUtODAwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZSBncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLXZpa2luZy1nb2xkIHJvdW5kZWQtZnVsbCByZWxhdGl2ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAgZWFzZS1saW5lYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdy0zIGgtMyBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHNoYWRvdyBzY2FsZS0wIGdyb3VwLWhvdmVyOnNjYWxlLTEwMCB0cmFuc2l0aW9uLWFsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWtpbmdQbGF5ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgRGF0YVByb3ZpZGVyU3BhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRhUHJvdmlkZXJTcGFjZSc7XHJcbmltcG9ydCBEZXNpZ25lclNwYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvRGVzaWduZXJTcGFjZSc7XHJcblxyXG5jb25zdCBBZG1pbkRhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnc3RhdHMnKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gbnVsbDtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjdXJyZW50VXNlciA9IHRva2VuID8gand0RGVjb2RlKHRva2VuKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBkZSBkw6ljb2RhZ2UgZHUgdG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRMOpZmluaXRpb24gZGVzIGFjY8OocyBzZWxvbiBsZXMgcsO0bGVzXHJcbiAgICBjb25zdCByb2xlcyA9IGN1cnJlbnRVc2VyPy5yb2xlcyB8fCBbXTtcclxuICAgIGNvbnN0IGlzRnVsbEFkbWluID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcclxuICAgIGNvbnN0IGlzUHJvdmlkZXIgPSByb2xlcy5pbmNsdWRlcygnUk9MRV9GT1VSTklTU0VVUicpIHx8IGlzRnVsbEFkbWluO1xyXG4gICAgY29uc3QgaXNEZXNpZ25lciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0RFU0lHTkVSJykgfHwgaXNGdWxsQWRtaW47XHJcbiAgICBjb25zdCBpc0VkaXRvciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0VESVRFVVInKSB8fCBpc0Z1bGxBZG1pbjtcclxuXHJcbiAgICBjb25zdCBsb2FkU3RhdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvYWRtaW4vc3RhdHMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiQWNjw6hzIHJlZnVzw6kgcGFyIGxlIEdyYW5kIENvbnNlaWxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oanNvbiA9PiBzZXREYXRhKGpzb24pKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gc2V0RXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2FkU3RhdHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcm9tb3RlID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvYWRtaW4vdXNlci8ke3VzZXJJZH0vcHJvbW90ZWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBhbGxVc2VyczogZGF0YS5hbGxVc2Vycy5tYXAodSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdS5pZCA9PT0gdXNlcklkID8geyAuLi51LCByb2xlczogdXBkYXRlZERhdGEubmV3Um9sZXMgfSA6IHVcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikgeyBcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgbG9ycyBkdSBjaGFuZ2VtZW50IGRlIHJhbmdcIik7IFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgcC0xMCB0ZXh0LWNlbnRlciBmb250LWRyYWdvblwiPntlcnJvcn08L2Rpdj47XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBwLTEwIGZvbnQtZHJhZ29uIGFuaW1hdGUtcHVsc2UgdGV4dC1jZW50ZXJcIj5BcHBlbCBhdSBHcmFuZCBDb25zZWlsLi4uPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBwLTYgdGV4dC13aGl0ZSBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtc3RvbmUtMjAwIG1iLTEwIGJvcmRlci1iIGJvcmRlci15ZWxsb3ctNzAwLzMwIHBiLTQgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj5cclxuICAgICAgICAgICAgICAgIFBhbGFpcyBkJ0FkbWluaXN0cmF0aW9uXHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBwYXIgT25nbGV0cyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBtYi04IGJvcmRlci1iIGJvcmRlci1zdG9uZS04MDAgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3N0YXRzJyl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTYgcHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24tYWxsICR7YWN0aXZlVGFiID09PSAnc3RhdHMnID8gJ2JnLXllbGxvdy02MDAgdGV4dC1ibGFjayBzY2FsZS0xMDUnIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCBob3ZlcjpiZy1zdG9uZS04MDAnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIFZ1ZSBkJ2Vuc2VtYmxlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2lzRnVsbEFkbWluICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigndXNlcnMnKX0gY2xhc3NOYW1lPXtgcHgtNiBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbi1hbGwgJHthY3RpdmVUYWIgPT09ICd1c2VycycgPyAnYmcteWVsbG93LTYwMCB0ZXh0LWJsYWNrIHNjYWxlLTEwNScgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGhvdmVyOmJnLXN0b25lLTgwMCd9YH0+UG9wdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2lzRWRpdG9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignYXJ0aWNsZXMnKX0gY2xhc3NOYW1lPXtgcHgtNiBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbi1hbGwgJHthY3RpdmVUYWIgPT09ICdhcnRpY2xlcycgPyAnYmcteWVsbG93LTYwMCB0ZXh0LWJsYWNrIHNjYWxlLTEwNScgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGhvdmVyOmJnLXN0b25lLTgwMCd9YH0+Q2hyb25pcXVlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNQcm92aWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2RhdGEnKX0gY2xhc3NOYW1lPXtgcHgtNiBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbi1hbGwgJHthY3RpdmVUYWIgPT09ICdkYXRhJyA/ICdiZy15ZWxsb3ctNjAwIHRleHQtYmxhY2sgc2NhbGUtMTA1JyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgaG92ZXI6Ymctc3RvbmUtODAwJ31gfT5Eb25uw6llcyAoQ1NWKTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNEZXNpZ25lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2Rlc2lnbicpfSBjbGFzc05hbWU9e2BweC02IHB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uLWFsbCAke2FjdGl2ZVRhYiA9PT0gJ2Rlc2lnbicgPyAnYmcteWVsbG93LTYwMCB0ZXh0LWJsYWNrIHNjYWxlLTEwNScgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGhvdmVyOmJnLXN0b25lLTgwMCd9YH0+QXBwYXJlbmNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDT05URU5VIERZTkFNSVFVRSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1bNTAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgU1RBVFMgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnc3RhdHMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTYgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXItbC00IGJvcmRlci15ZWxsb3ctNjAwIHAtOCBzaGFkb3ctMnhsIHJvdW5kZWQtci1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXN0XCI+R3VlcnJpZXJzIGRlIEJlcms8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gbXQtMiB0ZXh0LXdoaXRlXCI+e2RhdGEudXNlcnNDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXItbC00IGJvcmRlci1vcmFuZ2UtNzAwIHAtOCBzaGFkb3ctMnhsIHJvdW5kZWQtci1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXN0XCI+Q2hyb25pcXVlcyDDqWNyaXRlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiBtdC0yIHRleHQtd2hpdGVcIj57ZGF0YS5hcnRpY2xlc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgVVNFUlMgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAndXNlcnMnICYmIGlzRnVsbEFkbWluICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBhbmltYXRlLWluIHNsaWRlLWluLWZyb20tYm90dG9tLTQgZHVyYXRpb24tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNoZXJjaGVyIHVuIGd1ZXJyaWVyIGRhbnMgbGEgYnJ1bWUuLi5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXIteWVsbG93LTkwMC8zMCBwLTQgcm91bmRlZCB0ZXh0LXNtIHctZnVsbCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXllbGxvdy02MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5hbGxVc2Vycz8uZmlsdGVyKHUgPT4gdS5wc2V1ZG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpKS5tYXAodSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3UuaWR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTQgYmctc3RvbmUtOTAwLzQwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIHJvdW5kZWQgaG92ZXI6Ym9yZGVyLXN0b25lLTcwMCB0cmFuc2l0aW9uLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc3RvbmUtMjAwXCI+e3UucHNldWRvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyXCI+e3Uucm9sZXMuam9pbignIOKAoiAnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb21vdGUodS5pZCl9IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGJvcmRlciBib3JkZXIteWVsbG93LTcwMC80MCBweC00IHB5LTIgaG92ZXI6YmcteWVsbG93LTYwMCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tYWxsIGZvbnQtYmxhY2sgdXBwZXJjYXNlXCI+Q2hhbmdlciBSYW5nPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgQVJUSUNMRVMgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnYXJ0aWNsZXMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXM/Lm1hcChhcnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FydC5pZH0gY2xhc3NOYW1lPVwicC01IGJnLXN0b25lLTkwMC84MCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXN0b25lLTIwMFwiPnthcnQudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNTAwIGl0YWxpYyBtdC0xIGZvbnQtc2VyaWZcIj5kaWN0w6kgcGFyIHthcnQuYXV0aG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ibGFjay8zMCBweC0yIHB5LTEgcm91bmRlZFwiPnthcnQuY3JlYXRlZEF0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9OR0xFVCBEQVRBICovfVxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2RhdGEnICYmIGlzUHJvdmlkZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbiB6b29tLWluLTk1IGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVByb3ZpZGVyU3BhY2UgZGF0YXNldHM9e2RhdGEuZGF0YXNldHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgREVTSUdOIChUT04gTk9VVkVMIEVTUEFDRSkgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnZGVzaWduJyAmJiBpc0Rlc2lnbmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gZmFkZS1pbiBkdXJhdGlvbi03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlc2lnbmVyU3BhY2UgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluRGFzaGJvYXJkOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IEFydGljbGVQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7IGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyB9IH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LTJ4bCBweS0yMCBhbmltYXRlLXB1bHNlXCI+UmVjaGVyY2hlIGRhbnMgbGVzIGFyY2hpdmVzLi4uPC9kaXY+O1xyXG4gICAgaWYgKCFhcnRpY2xlKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1maXJlIHRleHQteGwgcHktMTBcIj5BcnRpY2xlIGludHJvdXZhYmxlIGRhbnMgbGVzIGFyY2hpdmVzLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gYW5pbWF0ZS1mYWRlLWluXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctbGlnaHQgaG92ZXI6dGV4dC13aGl0ZSBtYi02IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0cmFuc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7ihpA8L3NwYW4+IFJldG91ciBhdSBmb3J1bVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIHsvKiBEw6ljb3JhdGlvbiBjb2luICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctMjAgaC0yMCBiZy12aWtpbmctZ29sZCBvcGFjaXR5LTEwIHJvdW5kZWQtYmwtZnVsbFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXNtIHRleHQtc3RvbmUtNTAwIG1iLTggYm9yZGVyLWIgYm9yZGVyLXN0b25lLTcwMCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdmlraW5nLXJlZCBweC0yIHB5LTEgcm91bmRlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyY2hpdmVcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q3LDqcOpIGxlIHtuZXcgRGF0ZShhcnRpY2xlLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgZm9udC1zZXJpZiB3aGl0ZXNwYWNlLXByZS1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUuc3VtbWFyeX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTm90ZTogTGVzIGJsb2NzIGV0IGNvbW1lbnRhaXJlcyBuw6ljZXNzaXRlbnQgdW5lIGxvZ2lxdWUgcGx1cyBwb3Vzc8OpZSDDoCBpbXBsw6ltZW50ZXIgcGx1cyB0YXJkICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IEFydGljbGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm0nO1xyXG5cclxuY29uc3QgRm9ydW1QYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgXHJcbiAgICAvLyDDiXRhdCBwb3VyIGxlIHRyaVxyXG4gICAgY29uc3QgW3NvcnRPcmRlciwgc2V0U29ydE9yZGVyXSA9IHVzZVN0YXRlKCduZXdlc3QnKTtcclxuXHJcbiAgICAvLyBHZXN0aW9uIGRlIGxhIG5hdmlnYXRpb24gaW50ZXJuZVxyXG4gICAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoJ2xpc3QnKTsgLy8gJ2xpc3QnLCAnY3JlYXRlJywgJ2VkaXQnXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIDEuIFLDqWN1cMOpcmF0aW9uIGV0IGTDqWNvZGFnZSBkdSBUb2tlblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRyeSB7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkd1ZXJyaWVyIGNvbm5lY3TDqSA6XCIsIGRlY29kZWQpOyAvLyBEw6ljb21tZW50ZXIgc2kgYmVzb2luXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRlY29kZWQpOyBcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkJhZGdlIChUb2tlbikgaW52YWxpZGUgb3UgZXhwaXLDqVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMZSBjaGFyZ2VtZW50IHNlIGZhaXQgdmlhIGxlIHVzZUVmZmVjdCBkdSBzb3J0T3JkZXIgY2ktZGVzc291c1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIFJlY2hhcmdlciBxdWFuZCBsZSB0cmkgY2hhbmdlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQXJ0aWNsZXMoKTtcclxuICAgIH0sIFtzb3J0T3JkZXJdKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEFydGljbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHVybCA9ICcvYXBpL2FydGljbGVzJztcclxuICAgICAgICAgICAgLy8gTG9naXF1ZSBkZSB0cmkgQVBJIFBsYXRmb3JtXHJcbiAgICAgICAgICAgIHN3aXRjaCAoc29ydE9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdiZXN0X3JhdGluZyc6IHVybCArPSAnP29yZGVyW2F2ZXJhZ2VSYXRpbmddPWRlc2MnOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3dvcnN0X3JhdGluZyc6IHVybCArPSAnP29yZGVyW2F2ZXJhZ2VSYXRpbmddPWFzYyc7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnb2xkZXN0JzogdXJsICs9ICc/b3JkZXJbY3JlYXRlZEF0XT1hc2MnOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25ld2VzdCc6IGRlZmF1bHQ6IHVybCArPSAnP29yZGVyW2NyZWF0ZWRBdF09ZGVzYyc7IGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbicgfSBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRBcnRpY2xlcyhkYXRhWydoeWRyYTptZW1iZXInXSB8fCBkYXRhWydtZW1iZXInXSB8fCBbXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgZGUgbGlhaXNvbiBhdmVjIGxlIEdyYW5kIENvbnNlaWxcIiwgZXJyKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93LmNvbmZpcm0oXCJWb3VsZXotdm91cyB2cmFpbWVudCBlZmZhY2VyIGNlIHLDqWNpdCBkZSBsYSBwaWVycmUgP1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIFN1cHByZXNzaW9uIGxvY2FsZSBpbW3DqWRpYXRlIHBvdXIgbCdpbnRlcmZhY2VcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGVzKGFydGljbGVzLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhSWQgPSAoYS5pZCB8fCBhWydAaWQnXSkudG9TdHJpbmcoKS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhSWQgIT09IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkxlcyBkcmFnb25zIHByb3TDqGdlbnQgY2UgcGFyY2hlbWluIChFcnJldXIgZGUgcGVybWlzc2lvbnMpLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChcIkxlIHNlcnZldXIgZXN0IGluam9pZ25hYmxlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlldygnbGlzdCcpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpOyBcclxuICAgIH07XHJcblxyXG4gICAgLy8g8J+boe+4jyAtLS0gTk9VVkVMTEUgTE9HSVFVRSBERVMgUsOUTEVTIChHVUVTVFMvVVNFUlMvQVVURVVSUy9FRElURVVSUykgLS0tIPCfm6HvuI9cclxuICAgIGNvbnN0IHVzZXJSb2xlcyA9IHVzZXI/LnJvbGVzIHx8IFtdO1xyXG5cclxuICAgIC8vIDEuIENldXggcXVpIHBldXZlbnQgVE9VVCBtb2RpZmllciAow4lkaXRldXIsIEFkbWluLCBEZXNpZ25lciwgRm91cm5pc3NldXIpXHJcbiAgICBjb25zdCBzdXBlckVkaXRvcnMgPSBbJ1JPTEVfRURJVEVVUicsICdST0xFX0FETUlOJywgJ1JPTEVfREVTSUdORVInLCAnUk9MRV9GT1VSTklTU0VVUiddO1xyXG4gICAgY29uc3QgaXNTdXBlckVkaXRvciA9IHN1cGVyRWRpdG9ycy5zb21lKHIgPT4gdXNlclJvbGVzLmluY2x1ZGVzKHIpKTtcclxuXHJcbiAgICAvLyAyLiBFc3QtY2UgdW4gYXV0ZXVyID9cclxuICAgIGNvbnN0IGlzQXV0aG9yID0gdXNlclJvbGVzLmluY2x1ZGVzKCdST0xFX0FVVEVVUicpO1xyXG5cclxuICAgIC8vIDMuIFF1aSBwZXV0IGNyw6llciA/IChBdXRldXJzICsgU3VwZXIgRWRpdGV1cnMpXHJcbiAgICAvLyBOb3RlIDogUk9MRV9VU0VSIChBYm9ubsOpKSBuJ2VzdCBQQVMgaW5jbHVzIGljaSwgaWwgbmUgdm9pdCBwYXMgbGUgYm91dG9uLlxyXG4gICAgY29uc3QgY2FuQ3JlYXRlID0gaXNTdXBlckVkaXRvciB8fCBpc0F1dGhvcjtcclxuXHJcblxyXG4gICAgaWYgKGxvYWRpbmcgJiYgdmlldyA9PT0gJ2xpc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS00MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYm9yZGVyLTQgYm9yZGVyLXZpa2luZy1nb2xkIGJvcmRlci10LXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW4gbWItNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LXhsIGFuaW1hdGUtcHVsc2UgdXBwZXJjYXNlXCI+T3V2ZXJ0dXJlIGRlcyBwYXJjaGVtaW5zLi4uPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBweC00IHBiLTIwXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogLS0tIEhFQURFUiAtLS0gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIG1iLTEyIGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8yMCBwYi04IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj5DaHJvbmlxdWVzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBpdGFsaWMgdGV4dC1zbSBtdC0yXCI+TGUgc2F2b2lyIGR1IHZpbGxhZ2UgZGUgQmVyaywgZ3JhdsOpIHBvdXIgbCfDqXRlcm5pdMOpLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7dmlldyA9PT0gJ2xpc3QnICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTRUxFQ1RFVVIgREUgVFJJICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NvcnRPcmRlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNvcnRPcmRlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzUwIHRleHQtdmlraW5nLWdvbGQgcHktMyBweC00IHJvdW5kZWQgY3Vyc29yLXBvaW50ZXIgdXBwZXJjYXNlIHRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIGhvdmVyOmJnLXN0b25lLTkwMCB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5ld2VzdFwiPvCfk4UgUGx1cyBSw6ljZW50czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9sZGVzdFwiPvCfk5wgUGx1cyBBbmNpZW5zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmVzdF9yYXRpbmdcIj7wn4yfIE1pZXV4IE5vdMOpczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndvcnN0X3JhdGluZ1wiPvCfkoAgTW9pbnMgTm90w6lzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIPCflJIgQk9VVE9OIENSw4lFUiA6IENhY2jDqSBwb3VyIGxlcyBzaW1wbGVzIGFib25uw6lzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuQ3JlYXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlldygnY3JlYXRlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBweC04IHB5LTMgZm9udC1ibGFjayBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LVswXzBfMjBweF9yZ2JhKDIxMiwxNzUsNTUsMC4yKV0gdXBwZXJjYXNlIHRleHQteHMgdHJhY2tpbmctd2lkZXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIEdyYXZlciB1biByw6ljaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogLS0tIFZVRVMgRk9STVVMQUlSRVMgLS0tICovfVxyXG4gICAgICAgICAgICB7KHZpZXcgPT09ICdjcmVhdGUnIHx8IHZpZXcgPT09ICdlZGl0JykgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbS00IGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0VmlldygnbGlzdCcpOyBzZXRTZWxlY3RlZElkKG51bGwpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi04IHRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbiB1cHBlcmNhc2UgdGV4dC1bMTBweF0gZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDihpAgUmV0b3VyIGF1IG11ciBkZXMgbMOpZ2VuZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVGb3JtIGlkPXtzZWxlY3RlZElkfSBvblN1Y2Nlc3M9e2hhbmRsZVN1Y2Nlc3N9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIC8qIC0tLSBWVUUgTElTVEUgREVTIEFSVElDTEVTIC0tLSAqL1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGVzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMjAgdGV4dC1zdG9uZS02MDAgaXRhbGljXCI+TGUgc2lsZW5jZSByw6hnbmUgc3VyIGxlIG11ci4uLiBBdWN1bmUgY2hyb25pcXVlIG4nYSDDqXTDqSB0cm91dsOpZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbklkID0gKGFydGljbGUuaWQgfHwgYXJ0aWNsZVsnQGlkJ10pLnRvU3RyaW5nKCkuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g8J+boe+4jyBQRVJNSVNTSU9OUyBQQVIgQVJUSUNMRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSmUgc3VpcyBwcm9wcmnDqXRhaXJlIFNJIG1vbiBJRCA9IElEIGRlIGwnYXV0ZXVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc093bmVyID0gdXNlcj8uaWQgPT09IGFydGljbGUuYXV0aG9yPy5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBKJ2FpIGxlIGRyb2l0IGRlIG1vZGlmaWVyIFNJIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIEplIHN1aXMgdW4gU3VwZXIgRWRpdGV1ciAocGV1IGltcG9ydGUgbCdhdXRldXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAyLiBPVSBBTE9SUyBqZSBzdWlzIEF1dGV1ciBFVCBjJ2VzdCBNT04gYXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuRWRpdFRoaXMgPSBpc1N1cGVyRWRpdG9yIHx8IChpc0F1dGhvciAmJiBpc093bmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17Y2xlYW5JZH0gY2xhc3NOYW1lPVwiZ3JvdXAgYmctc3RvbmUtOTAwLzQwIGJvcmRlci1sLTQgYm9yZGVyLXN0b25lLTgwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHAtOCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBCYWRnZSBOb3RlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmF2ZXJhZ2VSYXRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy01MDAgdGV4dC1zbSBmb250LWJvbGQgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwLzMwIHB4LTIgcHktMC41IHJvdW5kZWQgYmcteWVsbG93LTUwMC8xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4piFIHthcnRpY2xlLmF2ZXJhZ2VSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDwn5SSIEJPVVRPTlMgRCdBQ1RJT04gUFJPVMOJR8OJUyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5FZGl0VGhpcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIG9wYWNpdHktNDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkSWQoY2xlYW5JZCk7IHNldFZpZXcoJ2VkaXQnKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdXBwZXJjYXNlIGZvbnQtYmxhY2sgYmctc3RvbmUtODAwIHRleHQtc3RvbmUtNDAwIHB4LTMgcHktMSBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZCB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoY2xlYW5JZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIGJnLXJlZC05MDAvMTAgdGV4dC1yZWQtNTAwLzcwIHB4LTMgcHktMSBib3JkZXIgYm9yZGVyLXJlZC05MDAvMzAgaG92ZXI6YmctcmVkLTkwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdXBwcmltZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwIGZvbnQtc2VyaWYgaXRhbGljIHRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTggbWF4LXctM3hsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInthcnRpY2xlLnN1bW1hcnl9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHQtNiBib3JkZXItdCBib3JkZXItc3RvbmUtODAwLzUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYgaC1bMXB4XSBiZy12aWtpbmctZ29sZC80MFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXIge2FydGljbGUuYXV0aG9yPy5wc2V1ZG8gfHwgYXJ0aWNsZS5hdXRob3I/LnVzZXJuYW1lIHx8IFwiR3VlcnJpZXIgZGUgbCdvbWJyZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvYXJ0aWNsZS8ke2NsZWFuSWR9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZmlyZSBmb250LWJsYWNrIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VsdGVyIGxlIHBhcmNoZW1pbiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+4oaSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3J1bVBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE5pZ2h0RnVyeVNjZW5lIGZyb20gXCIuLi9jb21wb25lbnRzL05pZ2h0RnVyeVwiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTYgYW5pbWF0ZS1mYWRlLWluLXVwXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBtZDp0ZXh0LTh4bCBmb250LWRyYWdvbiB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tdmlraW5nLWdvbGQgdmlhLXllbGxvdy01MDAgdG8tdmlraW5nLWdvbGQgbWItOCBkcm9wLXNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgQmllbnZlbnVlIGRhbnMgbCdBbnRyZVxyXG4gICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI0IGgtMSBiZy12aWtpbmctcmVkIG14LWF1dG8gbWItOCByb3VuZGVkLWZ1bGwgc2hhZG93LVswXzBfMTBweF8jZGMyNjI2XVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC12aWtpbmctbGlnaHQgbWItMTIgbWF4LXctM3hsIG14LWF1dG8gZm9udC1zZXJpZiBpdGFsaWMgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgICAgICBcIsOHYSwgYydlc3QgQmV1cmsuIMOAIGRvdXplIGpvdXJzIGF1IG5vcmQgZHUgRMOpc2VzcG9pciwgZXRcclxuICAgICAgICAgICAgICAgIHF1ZWxxdWVzIGRlZ3LDqXMgYXUgc3VkIGQndW4gRnJvaWQtZGUtY2FuYXJkLiBBbmNyw6kgc29saWRlbWVudFxyXG4gICAgICAgICAgICAgICAgc3VyIGxlIE3DqXJpZGllbiBkZSBsYSBNaXPDqHJlLiBNb24gdmlsbGFnZS4uLiBFbiB1biBtb3QsIGJhbGFpc2UuXHJcbiAgICAgICAgICAgICAgICBFdCBzZXB0IGfDqW7DqXJhdGlvbnMgeSBvbnQgZMOpasOgIHZ1IGxlIGpvdXIsIHBvdXJ0YW50LCB0b3V0ZXMgbGVzXHJcbiAgICAgICAgICAgICAgICBtYWlzb25zIHNvbnQgbmV1dmVzLiBCZXVyayA6IHNhIHDDqmNoZSwgc2EgY2hhc3NlLCBldCBzZXNcclxuICAgICAgICAgICAgICAgIG1lcnZlaWxsZXV4IGNvdWNoZXJzIGRlIHNvbGVpbC4gTGEgc2V1bGUgZmF1c3NlIG5vdGUgYydlc3QgbGVzXHJcbiAgICAgICAgICAgICAgICBiZXN0aW9sZXMuIEFpbGxldXJzLCBsZXMgZ2VucyBvbnQgZGVzIHNvdXJpcyBvdSBkZXMgbW91c3RpcXVlcy5cclxuICAgICAgICAgICAgICAgIE5vdXMgb24gYSBkZXMuLi4gZHJhZ29ucy5cIlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtODAwIHJvdW5kZWQtMnhsIGJvcmRlci00IGJvcmRlci1zdG9uZS03MDAgc2hhZG93LTJ4bCBvdmVyZmxvdy1oaWRkZW4gbWItMTJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiDwn5GHIEMnZXN0IGljaSBxdWUgbGEgbWFnaWUgb3DDqHJlLiBMYSBoYXV0ZXVyIChoLVs2MDBweF0pIGVzdCBDUlVDSUFMRSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNjAwcHhdIHctZnVsbCByZWxhdGl2ZSBiZy1ibGFjayByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOaWdodEZ1cnlTY2VuZSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IGxlZnQtMCB3LWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNDAwIHBvaW50ZXItZXZlbnRzLW5vbmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGlxdWV6IHN1ciBsZSBkcmFnb25cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9mb3J1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgcHgtOCBweS00IGJnLXZpa2luZy1yZWQgaG92ZXI6YmctcmVkLTkwMCBib3JkZXItMiBib3JkZXItdmlraW5nLWdvbGQgdGV4dC13aGl0ZSBmb250LWRyYWdvbiB0ZXh0LXhsIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1bMF8wXzE1cHhfcmdiYSgyMjAsMzgsMzgsMC41KV1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTBcIj5BY2PDqWRlciBhdSBGb3J1bTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgaC1mdWxsIHctZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlLzIwIHRvLXRyYW5zcGFyZW50IC10cmFuc2xhdGUteC1mdWxsIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LWZ1bGwgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNzAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9zdGF0aXN0aXF1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtOCBweS00IGJnLXZpa2luZy1yb2NrIGhvdmVyOmJnLXN0b25lLTcwMCBib3JkZXItMiBib3JkZXItc3RvbmUtNTAwIHRleHQtdmlraW5nLWxpZ2h0IGhvdmVyOnRleHQtd2hpdGUgZm9udC1kcmFnb24gdGV4dC14bCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVm9pciBsZXMgU3RhdHNcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IExvZ2luUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRFcnJvcignJyk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9naW5fY2hlY2snLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsIC8vIEVudm9pIGRlIGxhIGNsw6kgXCJlbWFpbFwiIGF0dGVuZHVlIHBhciBTeW1mb255XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkIFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vayAmJiBkYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9ja2FnZSBkdSB0b2tlbiBKV1RcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJlY3Rpb24gdmVycyBsZSBmb3J1bVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2ZvcnVtJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKCdJZGVudGlmaWFudHMgaW5jb3JyZWN0cy4gTGVzIGRyYWdvbnMgbmUgdm91cyByZWNvbm5haXNzZW50IHBhcy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcignRXJyZXVyIGRlIGNvbm5leGlvbiBhdSBzZXJ2ZXVyLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctdmlraW5nLXJvY2sgcC0xMCBib3JkZXItMiBib3JkZXItdmlraW5nLWdvbGQgc2hhZG93LTJ4bCBtdC0xMFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi04IHRleHQtY2VudGVyIHVwcGVyY2FzZVwiPkNvbm5leGlvbjwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcmVkIHRleHQtc20gbWItNCBpdGFsaWMgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+e2Vycm9yfTwvcD59XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG1iLTIgdGV4dC12aWtpbmctcGFyY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIGR1IEd1ZXJyaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXhlbXBsZUBiZXJrLmZyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNb3QgZGUgcGFzc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBwLTMgdGV4dC13aGl0ZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJsYWNrIHB5LTQgdXBwZXJjYXNlIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJlbmRyZSBzb24gZW52b2xcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IFJlZ2lzdGVyUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGxhaW5QYXNzd29yZDogJycsXHJcbiAgICAgICAgcm9sZTogJ1JPTEVfVVNFUidcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RXJyb3IoJycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcmVnaXN0ZXInLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWRpcmlnZSB2ZXJzIGwnYWNjdWVpbCBvdSBsZSBsb2dpbiBhcHLDqHMgc3VjY8Ooc1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGUoJy8nKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiRXJyZXVyIGxvcnMgZGUgbCdpbnNjcmlwdGlvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcihcIkltcG9zc2libGUgZGUgY29udGFjdGVyIGxlIEdyYW5kIFNjcmliZSAoRXJyZXVyIHLDqXNlYXUpXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctdmlraW5nLXJvY2svOTAgcC04IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgYmFja2Ryb3AtYmx1ci1zbVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi04IHRleHQtY2VudGVyIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgIFJlam9pbmRyZSBsYSBHdWlsZGVcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC05MDAvNDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTIwMCBwLTMgcm91bmRlZCBtYi02IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE5PTSBEJ1VUSUxJU0FURVVSICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPk5vbSBkZSBjb2RlIChQc2V1ZG8pPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IEtyb2ttb3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogRU1BSUwgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+RW1haWwgZGUgY29udGFjdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ2aWtpbmdAYmVyay5mclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyByb3VuZGVkIHRleHQtdmlraW5nLXBhcmNobWVudCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBSw5RMRSAoRMOpasOgIGZvbmN0aW9ubmVsKSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5SYW5nIGF1IHNlaW4gZGUgbGEgR3VpbGRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5yb2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgcm9sZTogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX1VTRVJcIj5BYm9ubsOpIChMZWN0ZXVyKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9BVVRFVVJcIj5BdXRldXIgKE5hcnJhdGV1cik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfRURJVEVVUlwiPsOJZGl0ZXVyIChHYXJkaWVuKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9ERVNJR05FUlwiPkRlc2lnbmV1ciAoQXJ0aXNhbik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfRk9VUk5JU1NFVVJcIj5Gb3Vybmlzc2V1ciBkZSBkb25uw6llcyAoU2NyaWJlKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1PVCBERSBQQVNTRSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Nb3QgZGUgcGFzc2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wbGFpblBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgcGxhaW5QYXNzd29yZDogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy12aWtpbmctZ29sZCB0ZXh0LXZpa2luZy1kYXJrIGZvbnQtZXh0cmFib2xkIHB5LTQgcm91bmRlZCBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHNoYWRvdy1sZyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbXQtNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgR3JhdmVyIG1vbiBub21cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENoYXJ0IGFzIENoYXJ0SlMsIENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kLCBBcmNFbGVtZW50LCBQb2ludEVsZW1lbnQsIExpbmVFbGVtZW50LFxyXG59IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IHsgQmFyLCBEb3VnaG51dCwgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kLCBBcmNFbGVtZW50LCBQb2ludEVsZW1lbnQsIExpbmVFbGVtZW50KTtcclxuXHJcbmNvbnN0IFN0YXRzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbYm94T2ZmaWNlRGF0YSwgc2V0Qm94T2ZmaWNlRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcG9wdWxhdGlvbkRhdGEsIHNldFBvcHVsYXRpb25EYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0aW1lbGluZURhdGEsIHNldFRpbWVsaW5lRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgbG9hZENTViA9ICh1cmwsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKHIgPT4gci5vayA/IHIudGV4dCgpIDogbnVsbClcclxuICAgICAgLnRoZW4odHh0ID0+IHtcclxuICAgICAgICBpZighdHh0KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSB0eHQudHJpbSgpLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICBpZiAobGluZXMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBsaW5lc1swXS5zcGxpdCgnOycpLm1hcChoID0+IGgudHJpbSgpKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gbGluZXMuc2xpY2UoMSkubWFwKGwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWxzID0gbC5zcGxpdCgnOycpLm1hcCh2ID0+IHYudHJpbSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+ICh7Li4uYWNjLCBbaF06IHZhbHNbaV19KSwge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCkgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9ib3hfb2ZmaWNlLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldEJveE9mZmljZURhdGEoe1xyXG4gICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydGaWxtJ10pLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdNJCcsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnQm94IE9mZmljZSAoTWlsbGlvbnMgJCknXSkpLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyM3ZjFkMWQnLCAnI2RjMjYyNicsICcjZDk3NzA2J10sXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyMyOTI1MjQnLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgICAgICB9XVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2JlcmtfcG9wdWxhdGlvbi5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBzZXRQb3B1bGF0aW9uRGF0YSh7XHJcbiAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0dyb3VwZSddKSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydQb3B1bGF0aW9uJ10pKSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjZDk3NzA2JywgJyM3ZjFkMWQnLCAnIzU3NTM0ZScsICcjYThhMjllJ10sXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyMxYzE5MTcnLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgICAgICB9XVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2RyYWdvbnNfdGltZWxpbmUuY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRUaW1lbGluZURhdGEoe1xyXG4gICAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0FubsOpZSddKSxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ0VzcMOoY2VzJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ0VzcMOoY2VzIFJlY2Vuc8OpZXMnXSkpLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNkOTc3MDYnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIxNywgMTE5LCA2LCAwLjIpJyxcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgdGVuc2lvbjogMC4zLFxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgcGx1Z2luczogeyBsZWdlbmQ6IHsgbGFiZWxzOiB7IGNvbG9yOiAnI2U3ZTVlNCcsIGZvbnQ6IHsgZmFtaWx5OiAnc2VyaWYnIH0gfSB9IH0sXHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgeTogeyB0aWNrczogeyBjb2xvcjogJyNhOGEyOWUnIH0sIGdyaWQ6IHsgY29sb3I6ICcjNDQ0MDNjJyB9IH0sXHJcbiAgICAgIHg6IHsgdGlja3M6IHsgY29sb3I6ICcjYThhMjllJyB9LCBncmlkOiB7IGNvbG9yOiAnIzQ0NDAzYycgfSB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gYW5pbWF0ZS1mYWRlLWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi00IGRyb3Atc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgICBMJ09ic2VydmF0b2lyZSBkZSBCZXJrXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWxpZ2h0IHRleHQtbGcgaXRhbGljIGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8zMCBpbmxpbmUtYmxvY2sgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgUmVjZW5zZW1lbnQgb2ZmaWNpZWwgZGUgbCdhcmNoaXBlbFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtNiByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtMSBiZy12aWtpbmctZ29sZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZHJhZ29uIHRleHQtd2hpdGUgbWItNlwiPlRyw6lzb3IgZGUgR3VlcnJlPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02NCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtib3hPZmZpY2VEYXRhID8gPEJhciBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXtib3hPZmZpY2VEYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+Q2hhcmdlbWVudC4uLjwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtNiByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtMSBiZy12aWtpbmctZ29sZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZHJhZ29uIHRleHQtd2hpdGUgbWItNlwiPkNsYW5zICYgVHJpYnVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02NCByZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3BvcHVsYXRpb25EYXRhID8gPERvdWdobnV0IG9wdGlvbnM9e3suLi5vcHRpb25zLCBzY2FsZXM6e319fSBkYXRhPXtwb3B1bGF0aW9uRGF0YX0gLz4gOiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPkNoYXJnZW1lbnQuLi48L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgbWQ6Y29sLXNwYW4tMiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtMSBiZy12aWtpbmctZ29sZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZHJhZ29uIHRleHQtd2hpdGUgbWItNlwiPkNocm9ub2xvZ2llIGRlcyBEw6ljb3V2ZXJ0ZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTgwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpbWVsaW5lRGF0YSA/IDxMaW5lIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e3RpbWVsaW5lRGF0YX0gLz4gOiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPkNoYXJnZW1lbnQuLi48L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXRzUGFnZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSb290IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiSG9tZVBhZ2UiLCJGb3J1bVBhZ2UiLCJBcnRpY2xlUGFnZSIsIlN0YXRzUGFnZSIsIk5hdmJhciIsIlJlZ2lzdGVyUGFnZSIsIkxvZ2luUGFnZSIsIkFydGljbGVTaG93IiwiQWRtaW5EYXNoYm9hcmQiLCJjb25zb2xlIiwibG9nIiwiQXBwIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJkYXRhIiwicHJpbWFyeUNvbG9yIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInBhdGgiLCJlbGVtZW50Iiwicm9vdEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJlcnJvciIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiQXJyYXkiLCJmcm9tIiwiaXNBcnJheSIsIl9hcnJheUxpa2VUb0FycmF5IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlc3QiLCJuZXh0IiwicHVzaCIsInVzZVN0YXRlIiwiQ3N2Q2hhcnQiLCJBcnRpY2xlRm9ybSIsIl9yZWYiLCJfcmVmJGlkIiwiaWQiLCJvblN1Y2Nlc3MiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwidGl0bGUiLCJzZXRUaXRsZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImJsb2NzIiwic2V0QmxvY3MiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm11c2ljTGlicmFyeSIsInNldE11c2ljTGlicmFyeSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiZGF0YXNldExpYnJhcnkiLCJzZXREYXRhc2V0TGlicmFyeSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzIiwiZXJyIiwiRXJyb3IiLCJhZGRCbG9jIiwidHlwZSIsImNvbmNhdCIsImNvbnRlbnQiLCJtZWRpYVVybCIsInZpelR5cGUiLCJmaWxlIiwiRGF0ZSIsIm5vdyIsInJlbW92ZUJsb2MiLCJpbmRleFRvUmVtb3ZlIiwiZmlsdGVyIiwiXyIsImluZGV4IiwidXBkYXRlQmxvYyIsImZpZWxkIiwibmV3QmxvY3MiLCJoYW5kbGVGaWxlQ2hhbmdlIiwidGFyZ2V0IiwiZmlsZXMiLCJzdGFydHNXaXRoIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlU3VibWl0IiwiX3JlZjIiLCJfY2FsbGVlIiwiZm9ybURhdGEiLCJ0b2tlbiIsImVycm9yRGF0YSIsIl90IiwiX2NvbnRleHQiLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZm9yRWFjaCIsImJsb2MiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImFsZXJ0IiwibWVzc2FnZSIsIl94Iiwib25TdWJtaXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJtYXAiLCJrZXkiLCJvbkNsaWNrIiwiYWNjZXB0Iiwic291cmNlIiwiZGlzYWJsZWQiLCJjc3ZVcmwiLCJlbnRyaWVzIiwiX3JlZjMiLCJfcmVmNCIsImZvbGRlciIsImxhYmVsIiwidG9VcHBlckNhc2UiLCJUb29sQnRuIiwiX3JlZjUiLCJ1c2VQYXJhbXMiLCJMaW5rIiwiVmlraW5nUGxheWVyIiwiQ29tbWVudFNlY3Rpb24iLCJTdGFyUmF0aW5nIiwiX2FydGljbGUkYmxvY3MiLCJfYXJ0aWNsZSRhdXRob3IiLCJfdXNlUGFyYW1zIiwiYXJ0aWNsZSIsInNldEFydGljbGUiLCJyZWplY3QiLCJjdXN0b21TdHlsZXMiLCJyYXdDb25maWciLCJkZXNpZ25Db25maWciLCJKU09OIiwicGFyc2UiLCJmaW5hbFRpdGxlQ29sb3IiLCJ0aXRsZUNvbG9yIiwiZmluYWxDb250ZW50QmciLCJjb250ZW50QmciLCJtdXNpY0Jsb2MiLCJmaW5kIiwiYiIsIm11c2ljU3JjIiwiY29udGVudEJsb2NzIiwic29ydCIsInBvc2l0aW9uIiwiaGFuZGxlUmF0ZSIsInNjb3JlIiwiQXV0aG9yaXphdGlvbiIsInN0cmluZ2lmeSIsInRvIiwiYXJ0aWNsZUlkIiwiY3VycmVudFJhdGluZyIsImF2ZXJhZ2VSYXRpbmciLCJvblJhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhdXRvUGxheSIsInBhcnRzIiwic3BsaXQiLCJhdXRob3IiLCJwc2V1ZG8iLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJDb21tZW50SXRlbSIsIl9jb21tZW50JGF1dGhvciIsImNvbW1lbnQiLCJvblZvdGUiLCJvblJlcGx5IiwiY2FuSW50ZXJhY3QiLCJzaG93UmVwbHlGb3JtIiwic2V0U2hvd1JlcGx5Rm9ybSIsInJlcGx5Q29udGVudCIsInNldFJlcGx5Q29udGVudCIsImhhbmRsZVJlcGx5U3VibWl0IiwicmVwbGllcyIsInJlcGx5IiwiX0NvbW1lbnRJdGVtIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsIm5ld0NvbW1lbnQiLCJzZXROZXdDb21tZW50Iiwic2V0Q2FuSW50ZXJhY3QiLCJmZXRjaENvbW1lbnRzIiwiY29tbWVudHNEYXRhIiwicm9vdENvbW1lbnRzIiwicGFyZW50IiwidW5kZWZpbmVkIiwiaGFuZGxlUG9zdCIsInBhcmVudElkIiwiX2FyZ3MiLCJoYW5kbGVWb3RlIiwiX2NhbGxlZTIiLCJjb21tZW50SWQiLCJkaXJlY3Rpb24iLCJfdDIiLCJfY29udGV4dDIiLCJfeDIiLCJfeDMiLCJQYXBhIiwiQmFyQ2hhcnQiLCJCYXIiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJMZWdlbmQiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiTGluZUNoYXJ0IiwiTGluZSIsIlBpZUNoYXJ0IiwiUGllIiwiQ2VsbCIsIkNPTE9SUyIsIl9yZWYkdml6VHlwZSIsInNldERhdGEiLCJzZXRFcnJvciIsInRleHQiLCJjc3ZUZXh0IiwiaGVhZGVyIiwiZHluYW1pY1R5cGluZyIsInNraXBFbXB0eUxpbmVzIiwiY29tcGxldGUiLCJyZXN1bHRzIiwia2V5cyIsInhLZXkiLCJ5S2V5IiwicmVuZGVyQ2hhcnQiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2UiLCJkYXRhS2V5IiwiY29udGVudFN0eWxlIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsInN0cm9rZVdpZHRoIiwiZG90IiwiYWN0aXZlRG90IiwiY3giLCJjeSIsImxhYmVsTGluZSIsInBlcmNlbnQiLCJ0b0ZpeGVkIiwib3V0ZXJSYWRpdXMiLCJmaWxsIiwibmFtZUtleSIsImVudHJ5IiwiY3Vyc29yIiwicmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJEYXRhUHJvdmlkZXJTcGFjZSIsImRhdGFzZXRzIiwic2V0RmlsZSIsInByZXZpZXciLCJzZXRQcmV2aWV3Iiwic2V0SGVhZGVycyIsImNvbHVtbk1hcHBpbmciLCJzZXRDb2x1bW5NYXBwaW5nIiwiZGF0YXNldE5hbWUiLCJzZXREYXRhc2V0TmFtZSIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJzZWxlY3RlZEZpbGUiLCJyZXBsYWNlIiwiY29scyIsImluaXRpYWxNYXBwaW5nIiwiaCIsInRvZ2dsZVR5cGUiLCJwcmV2IiwiaGFuZGxlVXBsb2FkIiwicGF5bG9hZCIsIm1ldGFkYXRhIiwiY29sdW1ucyIsInVwbG9hZGVkQXQiLCJ0b0lTT1N0cmluZyIsInJvd0NvdW50Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyb3ciLCJkcyIsInJvd3NDb3VudCIsIkRlc2lnbmVyU3BhY2UiLCJfYXJ0aWNsZXMkZmluZCIsIlZJS0lOR19PUkFOR0VfREVGQVVMVCIsImdsb2JhbENvbG9yIiwic2V0R2xvYmFsQ29sb3IiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwic2VsZWN0ZWRBcnRpY2xlSWQiLCJzZXRTZWxlY3RlZEFydGljbGVJZCIsImFydGljbGVTdHlsZXMiLCJzZXRBcnRpY2xlU3R5bGVzIiwiaXNTYXZpbmciLCJzZXRJc1NhdmluZyIsImZldGNoQXJ0aWNsZXMiLCJjdXJyZW50Q29sb3IiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRyaW0iLCJpdGVtcyIsIm1lbWJlciIsImhhbmRsZUdsb2JhbENvbG9yUHJldmlldyIsIm5ld0NvbG9yIiwicmVzZXRHbG9iYWxDb2xvciIsImNvbmZpcm0iLCJoYW5kbGVTYXZlR2xvYmFsU3R5bGUiLCJfY2FsbGVlMyIsIl90MyIsIl9jb250ZXh0MyIsIm1haW5Db2xvciIsImhhbmRsZUFydGljbGVTZWxlY3QiLCJjb25maWciLCJoYW5kbGVTYXZlQXJ0aWNsZVN0eWxlIiwiX2NhbGxlZTQiLCJfdDQiLCJfY29udGV4dDQiLCJhcnQiLCJ1c2VOYXZpZ2F0ZSIsImp3dERlY29kZSIsIl91c2VyIiwiX3VzZXIyIiwiX3VzZXIzIiwibmF2aWdhdGUiLCJ1c2VyIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImNhblNlZURhc2hib2FyZCIsInJvbGVzIiwiRnJhZ21lbnQiLCJ1c2VSZWYiLCJTdXNwZW5zZSIsIkNhbnZhcyIsInVzZUZyYW1lIiwidXNlVGhyZWUiLCJ1c2VHTFRGIiwidXNlQW5pbWF0aW9ucyIsIkNlbnRlciIsIkh0bWwiLCJ1c2VUZXh0dXJlIiwiU3RhcnMiLCJNT0RFTF9QQVRIIiwiVEVYVFVSRV9QQVRIIiwiQU5JTUFUSU9OX05BTUUiLCJEcmFnb25Nb2RlbCIsInZpdGVzc2VSb3RhdGlvbiIsInZpdGVzc2VBbmltYXRpb24iLCJmYWN0ZXVyVGFpbGxlIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJfdXNlR0xURiIsInNjZW5lIiwiYW5pbWF0aW9ucyIsInRleHR1cmUiLCJfdXNlVGhyZWUiLCJ2aWV3cG9ydCIsImJhc2VTY2FsZSIsImZpbmFsU2NhbGUiLCJmbGlwWSIsImNvbG9yU3BhY2UiLCJncm91cCIsIl91c2VBbmltYXRpb25zIiwiYWN0aW9ucyIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInRyYXZlcnNlIiwiY2hpbGQiLCJpc01lc2giLCJtYXRlcmlhbCIsIm5lZWRzVXBkYXRlIiwiYWN0aW9uIiwicmVzZXQiLCJmYWRlSW4iLCJwbGF5IiwidGltZVNjYWxlIiwidG9nZ2xlQW5pbWF0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwicGF1c2VkIiwiY3VycmVudCIsInJvdGF0aW9uIiwiX2V4dGVuZHMiLCJyZWYiLCJvYmplY3QiLCJvblBvaW50ZXJPdmVyIiwib25Qb2ludGVyT3V0Iiwic2NhbGUiLCJOaWdodEZ1cnlTY2VuZSIsInJvdFNwZWVkIiwic2V0Um90U3BlZWQiLCJhbmltU3BlZWQiLCJzZXRBbmltU3BlZWQiLCJzaXplRmFjdG9yIiwic2V0U2l6ZUZhY3RvciIsImhhbmRsZVJlc2V0Iiwic2hhZG93cyIsImNhbWVyYSIsImZvdiIsImF0dGFjaCIsImFyZ3MiLCJkZXB0aCIsImNvdW50IiwiZmFjdG9yIiwic2F0dXJhdGlvbiIsImZhZGUiLCJzcGVlZCIsImludGVuc2l0eSIsImZhbGxiYWNrIiwiY2VudGVyIiwidG9wIiwibWluIiwibWF4Iiwic3RlcCIsInBhcnNlRmxvYXQiLCJwcmVsb2FkIiwiaG92ZXIiLCJzZXRIb3ZlciIsInJhdGluZyIsInNldFJhdGluZyIsImhhbmRsZVJhdGluZyIsInN0YXIiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJfcmVmJGF1dG9QbGF5IiwiYXVkaW9SZWYiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiY3VycmVudFRpbWUiLCJzZXRDdXJyZW50VGltZSIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJpc0Jsb2NrZWQiLCJzZXRJc0Jsb2NrZWQiLCJwbGF5UHJvbWlzZSIsInRvZ2dsZVBsYXkiLCJwYXVzZSIsImhhbmRsZVRpbWVVcGRhdGUiLCJ0b3RhbCIsImZvcm1hdFRpbWUiLCJoYW5kbGVTZWVrIiwiY2xpZW50V2lkdGgiLCJjbGlja1giLCJuYXRpdmVFdmVudCIsIm9mZnNldFgiLCJ0aW1lIiwiaXNOYU4iLCJNYXRoIiwiZmxvb3IiLCJzZWMiLCJiYXJzIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJyYW5kb20iLCJvblRpbWVVcGRhdGUiLCJvbkVuZGVkIiwib25Mb2FkZWRNZXRhZGF0YSIsInZpZXdCb3giLCJfY3VycmVudFVzZXIiLCJfZGF0YSRhbGxVc2VycyIsIl9kYXRhJG1hbmFnZW1lbnRBcnRpYyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiY3VycmVudFVzZXIiLCJpc0Z1bGxBZG1pbiIsImlzUHJvdmlkZXIiLCJpc0Rlc2lnbmVyIiwiaXNFZGl0b3IiLCJsb2FkU3RhdHMiLCJoYW5kbGVQcm9tb3RlIiwidXNlcklkIiwidXBkYXRlZERhdGEiLCJhbGxVc2VycyIsIm5ld1JvbGVzIiwidXNlcnNDb3VudCIsImFydGljbGVzQ291bnQiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJtYW5hZ2VtZW50QXJ0aWNsZXMiLCJzZXRVc2VyIiwic29ydE9yZGVyIiwic2V0U29ydE9yZGVyIiwidmlldyIsInNldFZpZXciLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsImRlY29kZWQiLCJ1cmwiLCJoYW5kbGVEZWxldGUiLCJhSWQiLCJwb3AiLCJoYW5kbGVTdWNjZXNzIiwidXNlclJvbGVzIiwic3VwZXJFZGl0b3JzIiwiaXNTdXBlckVkaXRvciIsInNvbWUiLCJpc0F1dGhvciIsImNhbkNyZWF0ZSIsIl9hcnRpY2xlJGF1dGhvcjIiLCJfYXJ0aWNsZSRhdXRob3IzIiwiY2xlYW5JZCIsImlzT3duZXIiLCJjYW5FZGl0VGhpcyIsInVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZXRJdGVtIiwiaHJlZiIsInBsYWluUGFzc3dvcmQiLCJyb2xlIiwic2V0Rm9ybURhdGEiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJCYXJFbGVtZW50IiwiVGl0bGUiLCJBcmNFbGVtZW50IiwiUG9pbnRFbGVtZW50IiwiTGluZUVsZW1lbnQiLCJEb3VnaG51dCIsInJlZ2lzdGVyIiwiYm94T2ZmaWNlRGF0YSIsInNldEJveE9mZmljZURhdGEiLCJwb3B1bGF0aW9uRGF0YSIsInNldFBvcHVsYXRpb25EYXRhIiwidGltZWxpbmVEYXRhIiwic2V0VGltZWxpbmVEYXRhIiwibG9hZENTViIsImNhbGxiYWNrIiwidHh0IiwibGluZXMiLCJ2YWxzIiwicmVkdWNlIiwiYWNjIiwibGFiZWxzIiwiYm9yZGVyV2lkdGgiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInRlbnNpb24iLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJwbHVnaW5zIiwibGVnZW5kIiwiZm9udCIsImZhbWlseSIsInNjYWxlcyIsInRpY2tzIiwiZ3JpZCIsIngiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==