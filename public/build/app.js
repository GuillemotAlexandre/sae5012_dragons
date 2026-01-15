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
    path: "/forum/article/:id",
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
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _CsvChart__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./CsvChart */ "./assets/components/CsvChart.jsx");
/* harmony import */ var _VikingPlayer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./VikingPlayer */ "./assets/components/VikingPlayer.jsx");
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
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_29__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    article = _useState2[0],
    setArticle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_27__.useEffect)(function () {
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
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "text-center text-viking-gold p-10 animate-pulse"
  }, "Invocation du r\xE9cit...");
  if (!article) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "text-center text-red-500 p-10"
  }, "Parchemin introuvable.");

  // --- LOGIQUE D'EXTRACTION ---
  var customStyles = {};
  var rawConfig = article.designConfig;
  if (rawConfig) {
    try {
      customStyles = typeof rawConfig === 'string' ? JSON.parse(rawConfig) : rawConfig;
    } catch (e) {
      console.error("Erreur de décodage des styles", e);
    }
  }

  // --- DÉFINITION DES COULEURS ---
  // On utilise les valeurs de la BDD, sinon blanc par défaut (sera géré par la classe CSS)
  var finalTitleColor = customStyles.titleColor || '#ffffff';
  var finalContentBg = customStyles.contentBg || 'rgba(41, 37, 36, 0.5)';
  var musicBloc = (_article$blocs = article.blocs) === null || _article$blocs === void 0 ? void 0 : _article$blocs.find(function (b) {
    return b.type === 'music';
  });
  var musicSrc = musicBloc ? "/musique/".concat(musicBloc.content) : null;
  var contentBlocs = article.blocs ? _toConsumableArray(article.blocs).filter(function (b) {
    return b.type !== 'music';
  }).sort(function (a, b) {
    return a.position - b.position;
  }) : [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "max-w-4xl mx-auto p-8 min-h-screen bg-stone-900 border-x border-stone-800 shadow-2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Link, {
    to: "/forum",
    className: "text-stone-500 hover:text-viking-gold mb-8 inline-block text-sm uppercase tracking-widest transition-colors"
  }, "\u2190 Retour au Hall"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("h1", {
    style: {
      "--article-title-color": finalTitleColor
    },
    className: "article-dynamic-title text-5xl font-dragon mb-6 text-center uppercase tracking-widest drop-shadow-lg transition-all duration-500"
  }, article.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    style: {
      backgroundColor: finalContentBg
    },
    className: "p-8 border-l-4 border-viking-gold mb-8 italic text-stone-300 text-lg leading-relaxed shadow-inner transition-all duration-500"
  }, article.summary), musicSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "mb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_VikingPlayer__WEBPACK_IMPORTED_MODULE_31__["default"], {
    src: musicSrc,
    autoPlay: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "space-y-12"
  }, contentBlocs.map(function (bloc) {
    switch (bloc.type) {
      case 'h2':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("h2", {
          key: bloc.id,
          className: "text-3xl font-bold text-white border-b border-stone-700 pb-2 mt-8"
        }, bloc.content);
      case 'paragraph':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("p", {
          key: bloc.id,
          className: "text-stone-300 leading-relaxed text-lg whitespace-pre-line text-justify"
        }, bloc.content);
      case 'image':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("figure", {
          key: bloc.id,
          className: "text-center my-8"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("img", {
          src: bloc.content,
          alt: "Illustration",
          className: "mx-auto max-h-[500px] border-4 border-stone-800 shadow-xl rounded"
        }));
      case 'stats':
      case 'viz':
        var parts = bloc.content ? bloc.content.split('::') : [];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
          key: bloc.id,
          className: "bg-black/40 border border-stone-700 p-6 rounded-lg my-8 shadow-inner"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("h3", {
          className: "text-viking-gold font-bold text-sm uppercase mb-4 tracking-widest text-center"
        }, "\uD83D\uDCCA Donn\xE9es du Clan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
          className: "h-96"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_CsvChart__WEBPACK_IMPORTED_MODULE_30__["default"], {
          csvUrl: parts[1],
          vizType: parts[0] || 'bar'
        })));
      default:
        return null;
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "mt-20 pt-10 border-t border-stone-800 text-center text-stone-500 text-xs uppercase tracking-widest"
  }, "Grav\xE9 par ", ((_article$author = article.author) === null || _article$author === void 0 ? void 0 : _article$author.pseudo) || "Un éclaireur", " \u2022 ", new Date(article.createdAt).toLocaleDateString()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleShow);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-three_drei_core_Center_js-node_modules_react-three_drei_core_Gltf_-b7de55"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUN6SSxDQUNKLENBQUMsZUFFTjlCLDJEQUFBO0lBQUs4QixTQUFTLEVBQUM7RUFBMkYsZ0JBQ3RHOUIsMkRBQUE7SUFBSzhCLFNBQVMsRUFBQztFQUFpRCxDQUFNLENBQUMsZUFDdkU5QiwyREFBQTtJQUFJOEIsU0FBUyxFQUFDO0VBQXNDLEdBQUMsZ0NBQStCLENBQUMsZUFDckY5QiwyREFBQTtJQUFLOEIsU0FBUyxFQUFDO0VBQWUsR0FDekJtaUIsWUFBWSxnQkFBR2prQiwyREFBQSxDQUFDK1Asa0RBQUk7SUFBQ2dWLE9BQU8sRUFBRUEsT0FBUTtJQUFDeGpCLElBQUksRUFBRTBpQjtFQUFhLENBQUUsQ0FBQyxnQkFBR2prQiwyREFBQTtJQUFHOEIsU0FBUyxFQUFDO0VBQW1CLEdBQUMsZUFBZ0IsQ0FDakgsQ0FDSixDQUNKLENBQ0osQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZXJCLFNBQVMsRTs7Ozs7Ozs7Ozs7QUN6SHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9BcnRpY2xlRm9ybS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvQXJ0aWNsZVNob3cuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0NzdkNoYXJ0LmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9EYXRhUHJvdmlkZXJTcGFjZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVzaWduZXJTcGFjZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9OaWdodEZ1cnkuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL1Zpa2luZ1BsYXllci5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0FkbWluRGFzaGJvYXJkLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvQXJ0aWNsZVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Gb3J1bVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Ib21lUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0xvZ2luUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL1JlZ2lzdGVyUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL1N0YXRzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy8gSW1wb3J0IGRlcyBzdHlsZXNcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuXHJcbi8vIEltcG9ydCBkZXMgcGFnZXNcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vcGFnZXMvSG9tZVBhZ2UnO1xyXG5pbXBvcnQgRm9ydW1QYWdlIGZyb20gJy4vcGFnZXMvRm9ydW1QYWdlJztcclxuaW1wb3J0IEFydGljbGVQYWdlIGZyb20gJy4vcGFnZXMvQXJ0aWNsZVBhZ2UnO1xyXG5pbXBvcnQgU3RhdHNQYWdlIGZyb20gJy4vcGFnZXMvU3RhdHNQYWdlJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IFJlZ2lzdGVyUGFnZSBmcm9tICcuL3BhZ2VzL1JlZ2lzdGVyUGFnZSc7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSAnLi9wYWdlcy9Mb2dpblBhZ2UnO1xyXG5pbXBvcnQgQXJ0aWNsZVNob3cgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGVTaG93JztcclxuXHJcbi8vIEltcG9ydCBkZSBsYSBwYWdlIERhc2hib2FyZCBBZG1pblxyXG5pbXBvcnQgQWRtaW5EYXNoYm9hcmQgZnJvbSAnLi9wYWdlcy9BZG1pbkRhc2hib2FyZCc7XHJcblxyXG5jb25zb2xlLmxvZyhcIvCfkLIgRMOpbWFycmFnZSBkZSBsJ2FwcGxpY2F0aW9uIERyYWdvbkNNUy4uLlwiKTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gLS0tIFNZU1TDiE1FIERFIENIQVJHRU1FTlQgRFUgREVTSUdOIChWRVJTSU9OIFNJTEVOQ0lFVVNFKSAtLS1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJy9kZXNpZ25fY29uZmlnLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBTaSBsZSBmaWNoaWVyIG4nZXhpc3RlIHBhcywgb24gcmVudm9pZSBudWxsIHNhbnMgZmFpcmUgZCdlcnJldXJcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbiBuJ2FwcGxpcXVlIGxhIGNvdWxldXIgcXVlIHNpIGxlIGZpY2hpZXIgYSDDqXTDqSB0cm91dsOpIGV0IGNvbnRpZW50IGxhIGRvbm7DqWVcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEucHJpbWFyeUNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZpa2luZy1vcmFuZ2UnLCBkYXRhLnByaW1hcnlDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46oIERlc2lnbiBjaGFyZ8OpIGRlcHVpcyBsYSBmb3JnZSA6XCIsIGRhdGEucHJpbWFyeUNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEVuIGNhcyBkJ2VycmV1ciByw6lzZWF1LCBvbiBuZSBsb2cgcGx1cyBkJ2VycmV1ciByb3VnZVxyXG4gICAgICAgICAgICAgICAgLy8gTGUgdmlsbGFnZSB1dGlsaXNlIHNpbXBsZW1lbnQgbGVzIGNvdWxldXJzIGR1IENTUyBwYXIgZMOpZmF1dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTsgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBmb250LXNhbnMgdGV4dC12aWtpbmctcGFyY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogQkFOTknDiFJFICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0zMiBtZDpoLTQ4IG92ZXJmbG93LWhpZGRlbiBib3JkZXItYi00IGJvcmRlci12aWtpbmctZ29sZCByZWxhdGl2ZSBzaGFkb3ctMnhsIGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9iYW5uaWVyZS5wbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFubmnDqHJlIERyYWdvbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tdmlraW5nLWRhcmsgdG8tdHJhbnNwYXJlbnQgb3BhY2l0eS02MFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktMTAgcHgtNCBmbGV4LWdyb3cgcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ydW1cIiBlbGVtZW50PXs8Rm9ydW1QYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9mb3J1bS9hcnRpY2xlLzppZFwiIGVsZW1lbnQ9ezxBcnRpY2xlU2hvdyAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc3RhdGlzdGlxdWVcIiBlbGVtZW50PXs8U3RhdHNQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGVsZW1lbnQ9ezxSZWdpc3RlclBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiBlbGVtZW50PXs8QWRtaW5EYXNoYm9hcmQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIGJvcmRlci10IGJvcmRlci12aWtpbmctZ29sZC8zMCBweS02IG10LTEwIHRleHQtY2VudGVyIHRleHQtdmlraW5nLWxpZ2h0IGZvbnQtZHJhZ29uIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD7CqSBMJ0FjYWTDqW1pZSBkZSBCZXJrIC0gQXJjaGl2ZXMgRHJhY29uaXF1ZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LXJvb3QnKTtcclxuaWYgKHJvb3RFbGVtZW50KSB7XHJcbiAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChyb290RWxlbWVudCk7XHJcbiAgICByb290LnJlbmRlcig8QXBwIC8+KTtcclxuICAgIGNvbnNvbGUubG9nKFwi4pyFIFJlYWN0IGluamVjdMOpIGF2ZWMgc3VjY8OocyAhXCIpO1xyXG59IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBJbXBvc3NpYmxlIGRlIHRyb3V2ZXIgbCfDqWzDqW1lbnQgI3JlYWN0LXJvb3RcIik7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8g8J+RhyAxLiBJTVBPUlQgRFUgR1JBUEhJUVVFIChJbmRpc3BlbnNhYmxlKVxyXG5pbXBvcnQgQ3N2Q2hhcnQgZnJvbSAnLi9Dc3ZDaGFydCc7IFxyXG5cclxuY29uc3QgQXJ0aWNsZUZvcm0gPSAoeyBpZCA9IG51bGwsIG9uU3VjY2VzcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtibG9jcywgc2V0QmxvY3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXNhdGlvbiBhdmVjIGRlcyB0YWJsZWF1eCB2aWRlcyBwb3VyIMOpdml0ZXIgbGVzIGNyYXNoc1xyXG4gICAgY29uc3QgW211c2ljTGlicmFyeSwgc2V0TXVzaWNMaWJyYXJ5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkYXRhc2V0TGlicmFyeSwgc2V0RGF0YXNldExpYnJhcnldID0gdXNlU3RhdGUoW10pOyBcclxuXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gLS0tIENIQVJHRU1FTlQgREVTIERPTk7DiUVTIC0tLVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyAxLiBNdXNpcXVlc1xyXG4gICAgICAgIGZldGNoKCcvYXBpL211c2ljL2xpc3QnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLm9rID8gcmVzLmpzb24oKSA6IFtdKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSBzZXRNdXNpY0xpYnJhcnkoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcIkVycmV1ciBtdXNpcXVlXCIsIGVycikpO1xyXG5cclxuICAgICAgICAvLyAyLiBEYXRhc2V0cyAoQ1NWKSAtIPCfkYcgQydFU1QgSUNJIFFVJ0lMIEZBVVQgQ0hBTkdFUiAhXHJcbiAgICAgICAgLy8gQXZhbnQgYyfDqXRhaXQgOiBmZXRjaCgnL2FwaS9kYXRhc2V0cy9saXN0JylcclxuICAgICAgICAvLyBNYWludGVuYW50IGMnZXN0IDpcclxuICAgICAgICBmZXRjaCgnL2FwaS9saXN0LWRhdGFzZXRzJykgXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRXJyZXVyIEFQSSBEYXRhc2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb25uw6llcyByZcOndWVzIHBvdXIgbGUgZ3JhcGhpcXVlIDpcIiwgZGF0YSk7IC8vIPCfkYAgUmVnYXJkZSB0YSBjb25zb2xlIEYxMlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhc2V0TGlicmFyeShbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkltcG9zc2libGUgZGUgY2hhcmdlciBsZXMgZGF0YXNldHNcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGFzZXRMaWJyYXJ5KFtdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gLS0tIEdFU1RJT04gREVTIEJMT0NTIC0tLVxyXG4gICAgY29uc3QgYWRkQmxvYyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICAgc2V0QmxvY3MoWy4uLmJsb2NzLCB7IFxyXG4gICAgICAgICAgICB0eXBlLCBcclxuICAgICAgICAgICAgY29udGVudDogJycsIFxyXG4gICAgICAgICAgICBtZWRpYVVybDogJycsIFxyXG4gICAgICAgICAgICB2aXpUeXBlOiAnYmFyJywgXHJcbiAgICAgICAgICAgIGZpbGU6IG51bGwsICAgXHJcbiAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVCbG9jID0gKGluZGV4VG9SZW1vdmUpID0+IHtcclxuICAgICAgICBzZXRCbG9jcyhibG9jcy5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gaW5kZXhUb1JlbW92ZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVCbG9jID0gKGluZGV4LCBmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdCbG9jcyA9IFsuLi5ibG9jc107XHJcbiAgICAgICAgbmV3QmxvY3NbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xyXG4gICAgICAgIHNldEJsb2NzKG5ld0Jsb2NzKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChpbmRleCwgZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVCbG9jKGluZGV4LCAnZmlsZScsIGZpbGUpO1xyXG4gICAgICAgICAgICBpZiAoZmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVCbG9jKGluZGV4LCAnbWVkaWFVcmwnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIFNPVU1JU1NJT04gLS0tXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGl0bGUnLCB0aXRsZSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdW1tYXJ5Jywgc3VtbWFyeSk7XHJcblxyXG4gICAgICAgIGJsb2NzLmZvckVhY2goKGJsb2MsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW3R5cGVdYCwgYmxvYy50eXBlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bcG9zaXRpb25dYCwgaW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChbJ2gyJywgJ3BhcmFncmFwaCddLmluY2x1ZGVzKGJsb2MudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW2NvbnRlbnRdYCwgYmxvYy5jb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGJsb2MudHlwZSA9PT0gJ2ltYWdlJyAmJiBibG9jLmZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW2ltYWdlRmlsZV1gLCBibG9jLmZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnc3RhdHMnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVt2aXpUeXBlXWAsIGJsb2Mudml6VHlwZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVtjc3ZQYXRoXWAsIGJsb2MubWVkaWFVcmwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmxvYy50eXBlID09PSAnbXVzaWMnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVttdXNpY0ZpbGVOYW1lXWAsIGJsb2MubWVkaWFVcmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY3VzdG9tL2FydGljbGVzL2NyZWF0ZScsIHsgXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVm90cmUgcsOpY2l0IGEgw6l0w6kgZ3JhdsOpIGF2ZWMgc3VjY8OocyAhXCIpO1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKCk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBcIiArIChlcnJvckRhdGEubWVzc2FnZSB8fCBcIlByb2Jsw6htZSBzZXJ2ZXVyXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydChcIkVycmV1ciBzZXJ2ZXVyIGNyaXRpcXVlLlwiKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIHAtOCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctMnhsIG1heC13LTR4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTggdGV4dC1jZW50ZXIgdXBwZXJjYXNlXCI+Tm91dmVsbGUgQ2hyb25pcXVlPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHRleHQtd2hpdGUgcC00IHRleHQtMnhsIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGRcIiBwbGFjZWhvbGRlcj1cIlRpdHJlLi4uXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtzdW1tYXJ5fSBvbkNoYW5nZT17KGUpID0+IHNldFN1bW1hcnkoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgdGV4dC1zdG9uZS0zMDAgcC00IGgtMjQgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZFwiIHBsYWNlaG9sZGVyPVwiUsOpc3Vtw6kuLi5cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IG1iLThcIj5cclxuICAgICAgICAgICAgICAgIHtibG9jcy5tYXAoKGJsb2MsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jsb2MuaWR9IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMC81MCBwLTYgYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWdvbGQgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlQmxvYyhpbmRleCl9IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC1yZWQtNTAwIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFuc2l0aW9uXCI+U3VwcHJpbWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIG1iLTQgdHJhY2tpbmctd2lkZXN0XCI+QmxvYyB7aW5kZXggKyAxfSA6IHtibG9jLnR5cGV9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEgyICYgUGFyYWdyYXBoICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAnaDInICYmIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtibG9jLmNvbnRlbnR9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ2NvbnRlbnQnLCBlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC13aGl0ZSBmb250LWJvbGRcIiBwbGFjZWhvbGRlcj1cIlNvdXMtdGl0cmUuLi5cIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ3BhcmFncmFwaCcgJiYgPHRleHRhcmVhIHZhbHVlPXtibG9jLmNvbnRlbnR9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ2NvbnRlbnQnLCBlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC1zdG9uZS0zMDAgaC0zMlwiIHBsYWNlaG9sZGVyPVwiVGV4dGUuLi5cIiAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJbWFnZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ2ltYWdlJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGVDaGFuZ2UoaW5kZXgsIGUpfSBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCB0ZXh0LXNtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5tZWRpYVVybCAmJiA8aW1nIHNyYz17YmxvYy5tZWRpYVVybH0gYWx0PVwiUHJldmlld1wiIGNsYXNzTmFtZT1cIm10LTQgbWF4LWgtNDAgYm9yZGVyIGJvcmRlci1zdG9uZS02MDBcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIPCfkYcgTEUgQkxPQyBHUkFQSElRVUUgQ09SUklHw4kgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdzdGF0cycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzIG1iLTEgYmxvY2sgdXBwZXJjYXNlIGZvbnQtYm9sZFwiPkRvbm7DqWVzIChDU1YpPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jKGluZGV4LCAnbWVkaWFVcmwnLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jLm1lZGlhVXJsIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIENob2lzaXIgdW4gamV1IGRlIGRvbm7DqWVzIC0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIPCfkYcgU8OJQ1VSSVTDiSBNQVhJTUFMRSBJQ0kgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoZGF0YXNldExpYnJhcnkpICYmIGRhdGFzZXRMaWJyYXJ5Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRMaWJyYXJ5Lm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkLmlkfSB2YWx1ZT17ZC5zb3VyY2V9PntkLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5BdWN1bmUgZG9ubsOpZSBkaXNwb25pYmxlIChvdSBjaGFyZ2VtZW50Li4uKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdGV4dC14cyBtYi0xIGJsb2NrIHVwcGVyY2FzZSBmb250LWJvbGRcIj5UeXBlIGRlIEdyYXBoaXF1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7WydiYXInLCAnbGluZScsICdwaWUnXS5tYXAodHlwZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ3ZpelR5cGUnLCB0eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMiB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgYm9yZGVyIHRyYW5zaXRpb24gJHtibG9jLnZpelR5cGUgPT09IHR5cGUgPyAnYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBib3JkZXItdmlraW5nLWdvbGQnIDogJ2JnLWJsYWNrIHRleHQtc3RvbmUtNTAwIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6dGV4dC13aGl0ZSd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcsOpdmlzdWFsaXNhdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzIwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLVsyMDBweF0gcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy5tZWRpYVVybCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDc3ZDaGFydCBjc3ZVcmw9e2Jsb2MubWVkaWFVcmx9IHZpelR5cGU9e2Jsb2Mudml6VHlwZSB8fCAnYmFyJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNjAwIHRleHQteHMgaXRhbGljXCI+U8OpbGVjdGlvbm5leiB1biBmaWNoaWVyLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTXVzaXF1ZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ211c2ljJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ21lZGlhVXJsJywgZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0zIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0gQ2hvaXNpciB1bmUgbcOpbG9kaWUgLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bXVzaWNMaWJyYXJ5ICYmIE9iamVjdC5lbnRyaWVzKG11c2ljTGlicmFyeSkubWFwKChbZm9sZGVyLCBmaWxlc10pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGdyb3VwIGtleT17Zm9sZGVyfSBsYWJlbD17Zm9sZGVyLnRvVXBwZXJDYXNlKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoZmlsZXMpICYmIGZpbGVzLm1hcChmaWxlID0+IDxvcHRpb24ga2V5PXtmaWxlfSB2YWx1ZT17YCR7Zm9sZGVyfS8ke2ZpbGV9YH0+e2ZpbGV9PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBqdXN0aWZ5LWNlbnRlciBtYi0xMCBwYi0xMCBib3JkZXItYiBib3JkZXItc3RvbmUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIlRpdHJlIEgyXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnaDInKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiUGFyYWdyYXBoZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ3BhcmFncmFwaCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJJbWFnZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ2ltYWdlJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIkdyYXBoaXF1ZVwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ3N0YXRzJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIk11c2lxdWVcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdtdXNpYycpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtsb2FkaW5nfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJsYWNrIHVwcGVyY2FzZSBweS00IGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctWzBfMF8yMHB4X3JnYmEoMjEyLDE3NSw1NSwwLjQpXSBkaXNhYmxlZDpvcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICdHcmF2dXJlIGVuIGNvdXJzLi4uJyA6ICdQdWJsaWVyIGxhIENocm9uaXF1ZSd9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBUb29sQnRuID0gKHsgbGFiZWwsIG9uQ2xpY2sgfSkgPT4gKFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTMwMCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICsge2xhYmVsfVxyXG4gICAgPC9idXR0b24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlRm9ybTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBDc3ZDaGFydCBmcm9tICcuL0NzdkNoYXJ0JztcclxuaW1wb3J0IFZpa2luZ1BsYXllciBmcm9tICcuL1Zpa2luZ1BsYXllcic7XHJcblxyXG5jb25zdCBBcnRpY2xlU2hvdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChcIkVycmV1clwiKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb25uw6llcyByZcOndWVzIDpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlKGRhdGEpOyBcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpOyBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpOyBcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZ29sZCBwLTEwIGFuaW1hdGUtcHVsc2VcIj5JbnZvY2F0aW9uIGR1IHLDqWNpdC4uLjwvZGl2PjtcclxuICAgIGlmICghYXJ0aWNsZSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1yZWQtNTAwIHAtMTBcIj5QYXJjaGVtaW4gaW50cm91dmFibGUuPC9kaXY+O1xyXG5cclxuICAgIC8vIC0tLSBMT0dJUVVFIEQnRVhUUkFDVElPTiAtLS1cclxuICAgIGxldCBjdXN0b21TdHlsZXMgPSB7fTtcclxuICAgIGNvbnN0IHJhd0NvbmZpZyA9IGFydGljbGUuZGVzaWduQ29uZmlnO1xyXG5cclxuICAgIGlmIChyYXdDb25maWcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjdXN0b21TdHlsZXMgPSB0eXBlb2YgcmF3Q29uZmlnID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UocmF3Q29uZmlnKSA6IHJhd0NvbmZpZztcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgZGUgZMOpY29kYWdlIGRlcyBzdHlsZXNcIiwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBEw4lGSU5JVElPTiBERVMgQ09VTEVVUlMgLS0tXHJcbiAgICAvLyBPbiB1dGlsaXNlIGxlcyB2YWxldXJzIGRlIGxhIEJERCwgc2lub24gYmxhbmMgcGFyIGTDqWZhdXQgKHNlcmEgZ8OpcsOpIHBhciBsYSBjbGFzc2UgQ1NTKVxyXG4gICAgY29uc3QgZmluYWxUaXRsZUNvbG9yID0gY3VzdG9tU3R5bGVzLnRpdGxlQ29sb3IgfHwgJyNmZmZmZmYnO1xyXG4gICAgY29uc3QgZmluYWxDb250ZW50QmcgPSBjdXN0b21TdHlsZXMuY29udGVudEJnIHx8ICdyZ2JhKDQxLCAzNywgMzYsIDAuNSknO1xyXG5cclxuICAgIGNvbnN0IG11c2ljQmxvYyA9IGFydGljbGUuYmxvY3M/LmZpbmQoYiA9PiBiLnR5cGUgPT09ICdtdXNpYycpO1xyXG4gICAgY29uc3QgbXVzaWNTcmMgPSBtdXNpY0Jsb2MgPyBgL211c2lxdWUvJHttdXNpY0Jsb2MuY29udGVudH1gIDogbnVsbDtcclxuICAgIFxyXG4gICAgY29uc3QgY29udGVudEJsb2NzID0gYXJ0aWNsZS5ibG9jcyBcclxuICAgICAgICA/IFsuLi5hcnRpY2xlLmJsb2NzXS5maWx0ZXIoYiA9PiBiLnR5cGUgIT09ICdtdXNpYycpLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKSBcclxuICAgICAgICA6IFtdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTggbWluLWgtc2NyZWVuIGJnLXN0b25lLTkwMCBib3JkZXIteCBib3JkZXItc3RvbmUtODAwIHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIG1iLTggaW5saW5lLWJsb2NrIHRleHQtc20gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAg4oaQIFJldG91ciBhdSBIYWxsXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBUSVRSRSA6IFV0aWxpc2F0aW9uIGRlIGxhIHZhcmlhYmxlIENTUyBsb2NhbGUgcG91ciBwYXNzZXIgb3V0cmUgbGUgaDEgZ2xvYmFsIGR1IEFwcC5jc3MgKi99XHJcbiAgICAgICAgICAgIDxoMSBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwiLS1hcnRpY2xlLXRpdGxlLWNvbG9yXCI6IGZpbmFsVGl0bGVDb2xvciB9fSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtZHluYW1pYy10aXRsZSB0ZXh0LTV4bCBmb250LWRyYWdvbiBtYi02IHRleHQtY2VudGVyIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZHJvcC1zaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogUsOJU1VNw4kgOiBGb25kIGR5bmFtaXF1ZSBhcHBsaXF1w6kgZW4gc3R5bGUgaW5saW5lICovfVxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBmaW5hbENvbnRlbnRCZyB9fSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtOCBib3JkZXItbC00IGJvcmRlci12aWtpbmctZ29sZCBtYi04IGl0YWxpYyB0ZXh0LXN0b25lLTMwMCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBzaGFkb3ctaW5uZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2FydGljbGUuc3VtbWFyeX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7bXVzaWNTcmMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWtpbmdQbGF5ZXIgc3JjPXttdXNpY1NyY30gYXV0b1BsYXk9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xMlwiPlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnRCbG9jcy5tYXAoKGJsb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGJsb2MudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdoMic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGgyIGtleT17YmxvYy5pZH0gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTcwMCBwYi0yIG10LThcIj57YmxvYy5jb250ZW50fTwvaDI+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwYXJhZ3JhcGgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17YmxvYy5pZH0gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS0zMDAgbGVhZGluZy1yZWxheGVkIHRleHQtbGcgd2hpdGVzcGFjZS1wcmUtbGluZSB0ZXh0LWp1c3RpZnlcIj57YmxvYy5jb250ZW50fTwvcD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBrZXk9e2Jsb2MuaWR9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jsb2MuY29udGVudH0gYWx0PVwiSWxsdXN0cmF0aW9uXCIgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtaC1bNTAwcHhdIGJvcmRlci00IGJvcmRlci1zdG9uZS04MDAgc2hhZG93LXhsIHJvdW5kZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RhdHMnOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndml6JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gYmxvYy5jb250ZW50ID8gYmxvYy5jb250ZW50LnNwbGl0KCc6OicpIDogW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtibG9jLmlkfSBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBwLTYgcm91bmRlZC1sZyBteS04IHNoYWRvdy1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWJvbGQgdGV4dC1zbSB1cHBlcmNhc2UgbWItNCB0cmFja2luZy13aWRlc3QgdGV4dC1jZW50ZXJcIj7wn5OKIERvbm7DqWVzIGR1IENsYW48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDc3ZDaGFydCBjc3ZVcmw9e3BhcnRzWzFdfSB2aXpUeXBlPXtwYXJ0c1swXSB8fCAnYmFyJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwIHB0LTEwIGJvcmRlci10IGJvcmRlci1zdG9uZS04MDAgdGV4dC1jZW50ZXIgdGV4dC1zdG9uZS01MDAgdGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBHcmF2w6kgcGFyIHthcnRpY2xlLmF1dGhvcj8ucHNldWRvIHx8IFwiVW4gw6ljbGFpcmV1clwifSDigKIge25ldyBEYXRlKGFydGljbGUuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVNob3c7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSc7XHJcbmltcG9ydCB7IFxyXG4gIEJhckNoYXJ0LCBCYXIsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgTGVnZW5kLCBSZXNwb25zaXZlQ29udGFpbmVyLFxyXG4gIExpbmVDaGFydCwgTGluZSwgUGllQ2hhcnQsIFBpZSwgQ2VsbCBcclxufSBmcm9tICdyZWNoYXJ0cyc7XHJcblxyXG5jb25zdCBDT0xPUlMgPSBbJyNkNGFmMzcnLCAnI2I5MWMxYycsICcjMWMxOTE3JywgJyM1NzUzNGUnLCAnI2E4YTI5ZSddOyAvLyBDb3VsZXVycyBWaWtpbmcgKE9yLCBSb3VnZSwgTm9pci4uLilcclxuXHJcbmNvbnN0IENzdkNoYXJ0ID0gKHsgY3N2VXJsLCB2aXpUeXBlID0gJ2JhcicgfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjc3ZVcmwpIHJldHVybjtcclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAvLyAxLiBPbiB2YSBjaGVyY2hlciBsZSBmaWNoaWVyIENTViB2aWEgc29uIFVSTFxyXG4gICAgICAgIGZldGNoKGNzdlVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiSW1wb3NzaWJsZSBkZSBsaXJlIGxlIHBhcmNoZW1pbiBkZSBkb25uw6llc1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGNzdlRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gMi4gT24gbGUgdHJhbnNmb3JtZSBlbiBKU09OIHV0aWxpc2FibGVcclxuICAgICAgICAgICAgICAgIFBhcGEucGFyc2UoY3N2VGV4dCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSwgLy8gTGEgcHJlbWnDqHJlIGxpZ25lIGNvbnRpZW50IGxlcyB0aXRyZXNcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljVHlwaW5nOiB0cnVlLCAvLyBDb252ZXJ0aXQgbGVzIFwiMTBcIiBlbiBub21icmVzIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgc2tpcEVtcHR5TGluZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzdWx0cy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihcIkxlIGZpY2hpZXIgZXN0IGlsbGlzaWJsZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtjc3ZVcmxdKTtcclxuXHJcbiAgICBpZiAoIWNzdlVybCkgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGl0YWxpYyB0ZXh0LXhzXCI+QXVjdW5lIGRvbm7DqWUgc8OpbGVjdGlvbm7DqWUuPC9wPjtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBhbmltYXRlLXB1bHNlIHRleHQteHNcIj5Ew6ljaGlmZnJhZ2UgZGVzIHJ1bmVzLi4uPC9wPjtcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXhzXCI+RXJyZXVyIDoge2Vycm9yfTwvcD47XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCB0ZXh0LXhzXCI+TGUgZmljaGllciBlc3QgdmlkZS48L3A+O1xyXG5cclxuICAgIC8vIE9uIGRldmluZSBsZXMgY2zDqXMgKFggPSBwcmVtacOocmUgY29sb25uZSwgWSA9IGRldXhpw6htZSBjb2xvbm5lKVxyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGFbMF0pO1xyXG4gICAgY29uc3QgeEtleSA9IGtleXNbMF07IC8vIEV4OiBcIkFubsOpZVwiIG91IFwiRHJhZ29uXCJcclxuICAgIGNvbnN0IHlLZXkgPSBrZXlzWzFdOyAvLyBFeDogXCJQb3B1bGF0aW9uXCIgb3UgXCJWaXRlc3NlXCJcclxuXHJcbiAgICBjb25zdCByZW5kZXJDaGFydCA9ICgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHZpelR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGluZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17ZGF0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiM0NDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT17eEtleX0gc3Ryb2tlPVwiI2Q0YWYzN1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxZQXhpcyBzdHJva2U9XCIjZDRhZjM3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxYzE5MTcnLCBib3JkZXJDb2xvcjogJyNkNGFmMzcnLCBjb2xvcjogJyNmZmYnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWdlbmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT17eUtleX0gc3Ryb2tlPVwiI2Q0YWYzN1wiIHN0cm9rZVdpZHRoPXszfSBkb3Q9e3sgcjogNiB9fSBhY3RpdmVEb3Q9e3sgcjogOCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluZUNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSAncGllJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBpZUNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGllXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3g9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3k9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxMaW5lPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsoeyBuYW1lLCBwZXJjZW50IH0pID0+IGAke25hbWV9ICR7KHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMCl9JWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlclJhZGl1cz17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzg4ODRkOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PXt5S2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUtleT17eEtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChlbnRyeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCBrZXk9e2BjZWxsLSR7aW5kZXh9YH0gZmlsbD17Q09MT1JTW2luZGV4ICUgQ09MT1JTLmxlbmd0aF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QaWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnRTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWMxOTE3JywgYm9yZGVyQ29sb3I6ICcjZDRhZjM3JywgY29sb3I6ICcjZmZmJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGllQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlICdiYXInOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8QmFyQ2hhcnQgZGF0YT17ZGF0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiM0NDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT17eEtleX0gc3Ryb2tlPVwiI2Q0YWYzN1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxZQXhpcyBzdHJva2U9XCIjZDRhZjM3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY3Vyc29yPXt7ZmlsbDogJyMzMzMnfX0gY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxYzE5MTcnLCBib3JkZXJDb2xvcjogJyNkNGFmMzcnLCBjb2xvcjogJyNmZmYnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWdlbmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhciBkYXRhS2V5PXt5S2V5fSBmaWxsPVwiI2Q0YWYzN1wiIHJhZGl1cz17WzQsIDQsIDAsIDBdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgdy1mdWxsIG10LTQgYmctYmxhY2svNDAgcC00IGJvcmRlciBib3JkZXItc3RvbmUtODAwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckNoYXJ0KCl9XHJcbiAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDc3ZDaGFydDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSc7XHJcblxyXG5jb25zdCBEYXRhUHJvdmlkZXJTcGFjZSA9ICh7IGRhdGFzZXRzIH0pID0+IHtcclxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2hlYWRlcnMsIHNldEhlYWRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvbHVtbk1hcHBpbmcsIHNldENvbHVtbk1hcHBpbmddID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2RhdGFzZXROYW1lLCBzZXREYXRhc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkRmlsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZXRGaWxlKHNlbGVjdGVkRmlsZSk7XHJcbiAgICAgICAgc2V0RGF0YXNldE5hbWUoc2VsZWN0ZWRGaWxlLm5hbWUucmVwbGFjZSgnLmNzdicsICcnKSk7XHJcblxyXG4gICAgICAgIFBhcGEucGFyc2Uoc2VsZWN0ZWRGaWxlLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgc2tpcEVtcHR5TGluZXM6IHRydWUsXHJcbiAgICAgICAgICAgIHByZXZpZXc6IDUsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29scyA9IE9iamVjdC5rZXlzKHJlc3VsdHMuZGF0YVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVycyhjb2xzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcmV2aWV3KHJlc3VsdHMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbE1hcHBpbmcgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xzLmZvckVhY2goaCA9PiBpbml0aWFsTWFwcGluZ1toXSA9ICdjYXRlZ29yaWNhbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbHVtbk1hcHBpbmcoaW5pdGlhbE1hcHBpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVR5cGUgPSAoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgc2V0Q29sdW1uTWFwcGluZyhwcmV2ID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgIFtoZWFkZXJdOiBwcmV2W2hlYWRlcl0gPT09ICdjYXRlZ29yaWNhbCcgPyAnbnVtZXJpY2FsJyA6ICdjYXRlZ29yaWNhbCdcclxuICAgICAgICB9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgICAgICAvLyBQcsOpcGFyYXRpb24gZHUgcGF5bG9hZCBjb25mb3JtZSDDoCBBUEkgUGxhdGZvcm1cclxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBkYXRhc2V0TmFtZSxcclxuICAgICAgICAgICAgc291cmNlOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5NYXBwaW5nLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcm93Q291bnQ6IHByZXZpZXcubGVuZ3RoIC8vIEluZm9ybWF0aW9uIHV0aWxlIHBvdXIgdG9uIGFmZmljaGFnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9kYXRhc2V0cycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBjcnVjaWFsIGljaSBwb3VyIMOpdml0ZXIgbCdlcnJldXIgNDE1XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGFyY2hlbWluIGRlIGRvbm7DqWVzIGVucmVnaXN0csOpIGRhbnMgbGEgYmlibGlvdGjDqHF1ZSBkJ09kaW4gIVwiKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUsOpcG9uc2UgZHUgc2VydmV1ciA6XCIsIGVycm9yRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycmV1ciA6IExlIFNjcmliZSByZWZ1c2UgbGUgZm9ybWF0IGR1IGZpY2hpZXIuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciByw6lzZWF1XCIsIGVycm9yKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGFuaW1hdGUtZmFkZUluXCI+XHJcbiAgICAgICAgICAgIHsvKiBGb3JtdWxhaXJlIGQnaW1wb3J0YXRpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgcC02IGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQteGwgbWItNCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+Tm91dmVsbGUgQXJjaGl2ZSBkZSBEb25uw6llczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc3RvbmUtNTAwIHRleHQtWzEwcHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIG1iLTJcIj5GaWNoaWVyIENTViB1bmlxdWVtZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIuY3N2XCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgdGV4dC1zbSB0ZXh0LXN0b25lLTQwMCBmaWxlOm1yLTQgZmlsZTpweS0yIGZpbGU6cHgtNCBmaWxlOnJvdW5kZWQgZmlsZTpib3JkZXItMCBmaWxlOnRleHQteHMgZmlsZTpmb250LWJsYWNrIGZpbGU6dXBwZXJjYXNlIGZpbGU6YmctdmlraW5nLWdvbGQgZmlsZTp0ZXh0LWJsYWNrIGhvdmVyOmZpbGU6Ymctd2hpdGUgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1hdXRvIHB0LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXBsb2FkfSBkaXNhYmxlZD17aXNVcGxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1maXJlIHRleHQtd2hpdGUgcHktMyBweC04IGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRleHQteHMgc2hhZG93LWxnIGhvdmVyOnNjYWxlLTEwNSBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6b3BhY2l0eS01MCBkaXNhYmxlZDpncmF5c2NhbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1VwbG9hZGluZyA/ICdHcmF2dXJlLi4uJyA6ICdTY2VsbGVyIGxcXCdBcmNoaXZlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIEFwZXLDp3UgVGVjaG5pcXVlICovfVxyXG4gICAgICAgICAgICB7cHJldmlldy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwLzgwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMTAgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzQwIHAtMyBib3JkZXItYiBib3JkZXItd2hpdGUvNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LWJsYWNrIHVwcGVyY2FzZSB0ZXh0LXZpa2luZy1nb2xkLzUwXCI+QW5hbHlzZSBkZSBsYSBzdHJ1Y3R1cmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxlZnQgYm9yZGVyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWJsYWNrLzYwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzLm1hcChoID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2h9IGNsYXNzTmFtZT1cInAtNCBib3JkZXItciBib3JkZXItd2hpdGUvNSBtaW4tdy1bMTUwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdGV4dC14cyBmb250LWJvbGQgbWItMyB0cnVuY2F0ZVwiPntofTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVR5cGUoaCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtWzlweF0gcHgtMyBweS0xIHJvdW5kZWQtZnVsbCBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyIHRyYW5zaXRpb24tY29sb3JzICR7Y29sdW1uTWFwcGluZ1toXSA9PT0gJ251bWVyaWNhbCcgPyAnYmctYmx1ZS02MDAvMjAgdGV4dC1ibHVlLTQwMCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzMwJyA6ICdiZy1lbWVyYWxkLTYwMC8yMCB0ZXh0LWVtZXJhbGQtNDAwIGJvcmRlciBib3JkZXItZW1lcmFsZC01MDAvMzAnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uTWFwcGluZ1toXSA9PT0gJ251bWVyaWNhbCcgPyAn8J+UoiBOdW3DqXJpcXVlJyA6ICfwn5SkIENhdMOpZ29yaWVsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmV2aWV3Lm1hcCgocm93LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci13aGl0ZS81IGhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzLm1hcChoID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtofSBjbGFzc05hbWU9XCJwLTQgdGV4dC1bMTFweF0gdGV4dC1zdG9uZS00MDAgYm9yZGVyLXIgYm9yZGVyLXdoaXRlLzUgaXRhbGljXCI+e3Jvd1toXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogQXJjaGl2ZXMgZXhpc3RhbnRlcyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQvNDAgZm9udC1kcmFnb24gdGV4dC1zbSBtYi02IHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgYm9yZGVyLWIgYm9yZGVyLXZpa2luZy1nb2xkLzIwIHBiLTJcIj5SZWdpc3RyZXMgZMOpasOgIHByw6lzZW50czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YXNldHM/Lmxlbmd0aCA+IDAgPyBkYXRhc2V0cy5tYXAoZHMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZHMuaWR9IGNsYXNzTmFtZT1cInAtNCBiZy1ibGFjay8yMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQvNDAgdHJhbnNpdGlvbi1hbGwgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcGFyY2htZW50IGZvbnQtYm9sZCB0ZXh0LXNtIGdyb3VwLWhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1jb2xvcnNcIj57ZHMubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtc3RvbmUtNjAwIHVwcGVyY2FzZSBmb250LWJvbGQgaXRhbGljXCI+e2RzLnNvdXJjZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSBiZy1zdG9uZS04MDAgcHgtMiBweS0wLjUgcm91bmRlZCB0ZXh0LXN0b25lLTQwMFwiPntkcy5yb3dzQ291bnR9IGxpZ25lczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi1mdWxsIHB5LTEwIHRleHQtY2VudGVyIGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLXN0b25lLTgwMCB0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWN1bmUgZG9ubsOpZSBuJ2Egw6l0w6kgZ3JhdsOpZSBwb3VyIGxlIG1vbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXJTcGFjZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERlc2lnbmVyU3BhY2UgPSAoKSA9PiB7XHJcbiAgICAvLyAtLS0gw4lUQVRTIC0tLVxyXG4gICAgY29uc3QgVklLSU5HX09SQU5HRV9ERUZBVUxUID0gJyNlNjdlMjInOyBcclxuICAgIFxyXG4gICAgY29uc3QgW2dsb2JhbENvbG9yLCBzZXRHbG9iYWxDb2xvcl0gPSB1c2VTdGF0ZShWSUtJTkdfT1JBTkdFX0RFRkFVTFQpO1xyXG4gICAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRBcnRpY2xlSWQsIHNldFNlbGVjdGVkQXJ0aWNsZUlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFthcnRpY2xlU3R5bGVzLCBzZXRBcnRpY2xlU3R5bGVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0aXRsZUNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgY29udGVudEJnOiAnIzFjMTkxNydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2lzU2F2aW5nLCBzZXRJc1NhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gLS0tIENIQVJHRU1FTlQgSU5JVElBTCAtLS1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS12aWtpbmctb3JhbmdlJykudHJpbSgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50Q29sb3IgJiYgY3VycmVudENvbG9yLnN0YXJ0c1dpdGgoJyMnKSkge1xyXG4gICAgICAgICAgICBzZXRHbG9iYWxDb2xvcihjdXJyZW50Q29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEFydGljbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYXJ0aWNsZXMnKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBkYXRhWydoeWRyYTptZW1iZXInXSB8fCBkYXRhLm1lbWJlciB8fCAoQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbXSk7XHJcbiAgICAgICAgICAgIHNldEFydGljbGVzKGl0ZW1zKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGNoYXJnZW1lbnQgYXJ0aWNsZXM6XCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLSBBQ1RJT05TIEZPUkdFIEdMT0JBTEUgLS0tXHJcbiAgICBjb25zdCBoYW5kbGVHbG9iYWxDb2xvclByZXZpZXcgPSAobmV3Q29sb3IpID0+IHtcclxuICAgICAgICBzZXRHbG9iYWxDb2xvcihuZXdDb2xvcik7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZpa2luZy1vcmFuZ2UnLCBuZXdDb2xvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0R2xvYmFsQ29sb3IgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKFwiVm91bGV6LXZvdXMgdnJhaW1lbnQgcmVzdGF1cmVyIGxlcyBjb3VsZXVycyBkJ29yaWdpbmUgZHUgdmlsbGFnZSA/XCIpKSB7XHJcbiAgICAgICAgICAgIHNldElzU2F2aW5nKHRydWUpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlR2xvYmFsQ29sb3JQcmV2aWV3KFZJS0lOR19PUkFOR0VfREVGQVVMVCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2FkbWluL3Jlc2V0LWdsb2JhbC1kZXNpZ24nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSBhbGVydChcIvCflKUgTGVzIGNvdWxldXJzIGQnb3JpZ2luZSBvbnQgw6l0w6kgcmVzdGF1csOpZXMgIVwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIHJlc2V0OlwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTYXZpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTYXZlR2xvYmFsU3R5bGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNTYXZpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hZG1pbi9zYXZlLWdsb2JhbC1kZXNpZ24nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1haW5Db2xvcjogZ2xvYmFsQ29sb3IgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykgYWxlcnQoXCLimpTvuI8gTGUgdGjDqG1lIGR1IHZpbGxhZ2UgYSDDqXTDqSBncmF2w6kgZGFucyBsYSBwaWVycmUgIVwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgZGUgY29ubmV4aW9uIMOgIGxhIGZvcmdlLlwiKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRJc1NhdmluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyAtLS0gQUNUSU9OUyBDSFJPTklRVUVTIC0tLVxyXG4gICAgY29uc3QgaGFuZGxlQXJ0aWNsZVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRTZWxlY3RlZEFydGljbGVJZChpZCk7XHJcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGFydGljbGVzLmZpbmQoYSA9PiBTdHJpbmcoYS5pZCkgPT09IFN0cmluZyhpZCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhcnRpY2xlICYmIGFydGljbGUuZGVzaWduQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHR5cGVvZiBhcnRpY2xlLmRlc2lnbkNvbmZpZyA9PT0gJ3N0cmluZycgXHJcbiAgICAgICAgICAgICAgICA/IEpTT04ucGFyc2UoYXJ0aWNsZS5kZXNpZ25Db25maWcpIFxyXG4gICAgICAgICAgICAgICAgOiBhcnRpY2xlLmRlc2lnbkNvbmZpZztcclxuICAgICAgICAgICAgc2V0QXJ0aWNsZVN0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZUNvbG9yOiBjb25maWcudGl0bGVDb2xvciB8fCAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50Qmc6IGNvbmZpZy5jb250ZW50QmcgfHwgJyMxYzE5MTcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEFydGljbGVTdHlsZXMoeyB0aXRsZUNvbG9yOiAnI2ZmZmZmZicsIGNvbnRlbnRCZzogJyMxYzE5MTcnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2F2ZUFydGljbGVTdHlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkQXJ0aWNsZUlkKSByZXR1cm47XHJcbiAgICAgICAgc2V0SXNTYXZpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9hZG1pbi9hcnRpY2xlLyR7c2VsZWN0ZWRBcnRpY2xlSWR9L3N0eWxlYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbkNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUNvbG9yOiBhcnRpY2xlU3R5bGVzLnRpdGxlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRCZzogYXJ0aWNsZVN0eWxlcy5jb250ZW50QmdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIuKcqCBMZSBzdHlsZSBkZSBjZXR0ZSBjaHJvbmlxdWUgYSDDqXTDqSBzYXV2ZWdhcmTDqSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hBcnRpY2xlcygpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChcIkVycmV1ciByw6lzZWF1LlwiKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRJc1NhdmluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xMCBwLTYgbWF4LXctNXhsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgey8qIDEuIFNFQ1RJT04gRk9SR0UgR0xPQkFMRSAqL31cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMjAgcC02IHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+Rm9yZ2UgR2xvYmFsZSAoU2l0ZSk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXRHbG9iYWxDb2xvcn0gZGlzYWJsZWQ9e2lzU2F2aW5nfSBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBiZy1zdG9uZS04MDAgaG92ZXI6Ymctc3RvbmUtNzAwIHRleHQtc3RvbmUtNDAwIGhvdmVyOnRleHQtd2hpdGUgcHgtMyBweS0xIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHVwcGVyY2FzZSBmb250LWJvbGQgdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6b3BhY2l0eS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSw6lpbml0aWFsaXNlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTYgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5Db3VsZXVyIFByaW5jaXBhbGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgdmFsdWU9e2dsb2JhbENvbG9yfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUdsb2JhbENvbG9yUHJldmlldyhlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctMjAgaC0yMCBjdXJzb3ItcG9pbnRlciBiZy10cmFuc3BhcmVudCBib3JkZXItMiBib3JkZXItc3RvbmUtNzAwIHJvdW5kZWQtbGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGJnLWJsYWNrLzQwIHAtNiByb3VuZGVkIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBnbG9iYWxDb2xvciB9fSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBkcm9wLXNoYWRvdy1sZyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUklERVJTIE9GIEJFUktcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmVHbG9iYWxTdHlsZX0gZGlzYWJsZWQ9e2lzU2F2aW5nfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMyBiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCB1cHBlcmNhc2Ugcm91bmRlZCBob3ZlcjpicmlnaHRuZXNzLTExMCB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzU2F2aW5nID8gXCJHcmF2dXJlLi4uXCIgOiBcIlZhbGlkZXIgcG91ciB0b3V0IGxlIHZpbGxhZ2VcIn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICB7LyogMi4gU0VDVElPTiBTVFlMRSBERVMgQ0hST05JUVVFUyAoQ09SUklHw4lFIFBPVVIgTCdBUEVSw4dVKSAqL31cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIGJvcmRlciBib3JkZXItYmx1ZS01MDAvMjAgcC02IHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWRyYWdvbiB0ZXh0LWJsdWUtNDAwIG1iLTYgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlN0eWxlIGRlcyBDaHJvbmlxdWVzIChBcnRpY2xlcyk8L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgbWItMlwiPkNob2lzaXIgdW4gcsOpY2l0IMOgIG1vZGlmaWVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkQXJ0aWNsZUlkfSBvbkNoYW5nZT17aGFuZGxlQXJ0aWNsZVNlbGVjdH0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXN0b25lLTgwMCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCB0ZXh0LXdoaXRlIHAtMyByb3VuZGVkIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0gU8OpbGVjdGlvbm5lciB1biBBcnRpY2xlIC0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGVzLm1hcChhcnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YXJ0LmlkfSB2YWx1ZT17YXJ0LmlkfT57YXJ0LnRpdGxlfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMCBwLTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LVsxMHB4XSBmb250LWJvbGQgdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIG1iLTJcIj5Db3VsZXVyIFRpdHJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgdmFsdWU9e2FydGljbGVTdHlsZXMudGl0bGVDb2xvcn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRBcnRpY2xlU3R5bGVzKHByZXYgPT4gKHsgLi4ucHJldiwgdGl0bGVDb2xvcjogZS50YXJnZXQudmFsdWUgfSkpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBiZy10cmFuc3BhcmVudCBjdXJzb3ItcG9pbnRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtODAwIHAtMyByb3VuZGVkIGJvcmRlciBib3JkZXItc3RvbmUtNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgbWItMlwiPkZvbmQgQ29udGVudTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIHZhbHVlPXthcnRpY2xlU3R5bGVzLmNvbnRlbnRCZ30gb25DaGFuZ2U9eyhlKSA9PiBzZXRBcnRpY2xlU3R5bGVzKHByZXYgPT4gKHsgLi4ucHJldiwgY29udGVudEJnOiBlLnRhcmdldC52YWx1ZSB9KSl9IGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIGJnLXRyYW5zcGFyZW50IGN1cnNvci1wb2ludGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEFQRVLDh1UgQ09SUklHw4kgOiBVdGlsaXNlIGxhIGNsYXNzZSBldCBsYSB2YXJpYWJsZSBDU1MgZGUgQXBwLmNzcyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTk1MCBwLTYgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG1pbi1oLVsxODBweF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXCItLWFydGljbGUtdGl0bGUtY29sb3JcIjogYXJ0aWNsZVN0eWxlcy50aXRsZUNvbG9yIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1keW5hbWljLXRpdGxlIHRleHQtM3hsIGZvbnQtZHJhZ29uIG1iLTQgdXBwZXJjYXNlIHRyYW5zaXRpb24tY29sb3JzIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQXJ0aWNsZUlkID8gYXJ0aWNsZXMuZmluZChhID0+IFN0cmluZyhhLmlkKSA9PT0gU3RyaW5nKHNlbGVjdGVkQXJ0aWNsZUlkKSk/LnRpdGxlIDogXCJUaXRyZSBkZSBsJ0FydGljbGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYXJ0aWNsZVN0eWxlcy5jb250ZW50QmcgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTQgcm91bmRlZCB0ZXh0LXN0b25lLTQwMCB0ZXh0LXNtIGl0YWxpYyB0cmFuc2l0aW9uLWFsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxlIGRyYWdvbiBzdXJ2b2xhIGxlcyBmYWxhaXNlcyBkZSBCZXJrLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmVBcnRpY2xlU3R5bGV9IGRpc2FibGVkPXtpc1NhdmluZyB8fCAhc2VsZWN0ZWRBcnRpY2xlSWR9IGNsYXNzTmFtZT1cInctZnVsbCBtdC04IHB5LTQgYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlIHJvdW5kZWQgdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6b3BhY2l0eS0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1NhdmluZyA/ICdHcmF2dXJlIGVuIGNvdXJzLi4uJyA6ICdFbnJlZ2lzdHJlciBsZSBzdHlsZSBkdSByw6ljaXQnfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNpZ25lclNwYWNlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGxldCB1c2VyID0gbnVsbDtcclxuXHJcbiAgICAvLyBPbiBkw6ljb2RlIGxlIHRva2VuIHBvdXIgY29ubmHDrnRyZSBsJ3V0aWxpc2F0ZXVyIGV0IHNlcyByw7RsZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSBqd3REZWNvZGUodG9rZW4pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRva2VuIGludmFsaWRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgbmF2aWdhdGUoJy9sb2dpbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBWw6lyaWZpY2F0aW9uIGRlcyBkcm9pdHMgcG91ciBsZSBEYXNoYm9hcmRcclxuICAgIGNvbnN0IGNhblNlZURhc2hib2FyZCA9IHVzZXI/LnJvbGVzPy5pbmNsdWRlcygnUk9MRV9FRElURVVSJykgfHwgdXNlcj8ucm9sZXM/LmluY2x1ZGVzKCdST0xFX0FETUlOJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIGJvcmRlci1iLTIgYm9yZGVyLXZpa2luZy1nb2xkLzUwIHAtNCBzdGlja3kgdG9wLTAgei01MCBzaGFkb3ctbGcgYmFja2Ryb3AtYmx1ci1tZCBiZy1vcGFjaXR5LTk1XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGRyb3Atc2hhZG93LW1kIGdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtIHVwcGVyY2FzZVwiPlJpZGVycyBvZiBCZXJrPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC02IHRleHQtbGcgZm9udC1kcmFnb24gdHJhY2tpbmctd2lkZSB0ZXh0LXZpa2luZy1saWdodCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5BY2N1ZWlsPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9mb3J1bVwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+Rm9ydW08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTElFTiBEQVNIQk9BUkQgOiBWaXNpYmxlIHVuaXF1ZW1lbnQgcG91ciDDiWRpdGV1ci9BZG1pbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhblNlZURhc2hib2FyZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWRtaW5cIiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvNTAgcHgtMiBweS0wLjUgaG92ZXI6YmctdmlraW5nLWdvbGQgaG92ZXI6dGV4dC1ibGFjayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc2VpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBib3JkZXItbCBib3JkZXItc3RvbmUtNzAwIHBsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyF0b2tlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXIgaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5leGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT1cImJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgcHgtNCBweS0xLjUgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWpvaW5kcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgZm9udC1ibGFjayBpdGFsaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXI/LnBzZXVkbyB8fCBcIkd1ZXJyaWVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC12aWtpbmctZmlyZSB1cHBlcmNhc2UgZm9udC1ibGFjayBib3JkZXIgYm9yZGVyLXZpa2luZy1maXJlLzMwIHB4LTIgcHktMSBob3ZlcjpiZy12aWtpbmctZmlyZSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVpdHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYW52YXMsIHVzZUZyYW1lLCB1c2VUaHJlZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcic7XHJcbmltcG9ydCB7IHVzZUdMVEYsIHVzZUFuaW1hdGlvbnMsIENlbnRlciwgSHRtbCwgdXNlVGV4dHVyZSwgU3RhcnMgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XHJcblxyXG5jb25zdCBNT0RFTF9QQVRIID0gJy9tb2RlbHMvbmlnaHRfZnVyeS5nbGInO1xyXG5jb25zdCBURVhUVVJFX1BBVEggPSAnL3RleHR1cmVzL25pZ2h0X2Z1cnlfc2tpbi53ZWJwJztcclxuY29uc3QgQU5JTUFUSU9OX05BTUUgPSAnTmlnaHRGdXJ5X2FybWF0dXJlQWN0aW9uJztcclxuXHJcbmZ1bmN0aW9uIERyYWdvbk1vZGVsKHsgdml0ZXNzZVJvdGF0aW9uLCB2aXRlc3NlQW5pbWF0aW9uLCBmYWN0ZXVyVGFpbGxlLCAuLi5wcm9wcyB9KSB7XHJcbiAgY29uc3QgeyBzY2VuZSwgYW5pbWF0aW9ucyB9ID0gdXNlR0xURihNT0RFTF9QQVRIKTtcclxuICBjb25zdCB0ZXh0dXJlID0gdXNlVGV4dHVyZShURVhUVVJFX1BBVEgpO1xyXG4gIGNvbnN0IHsgdmlld3BvcnQgfSA9IHVzZVRocmVlKCk7IFxyXG4gIFxyXG4gIC8vIENhbGN1bCBkZSBiYXNlIHJlc3BvbnNpdmVcclxuICBjb25zdCBiYXNlU2NhbGUgPSB2aWV3cG9ydC53aWR0aCA8IDUgPyAwLjUgOiAwLjg7IFxyXG4gIC8vIPCfk48gQ0FMQ1VMIEZJTkFMIDogVGFpbGxlIGRlIGJhc2UgeCBMZSBjdXJzZXVyIGRlIGwndXRpbGlzYXRldXJcclxuICBjb25zdCBmaW5hbFNjYWxlID0gYmFzZVNjYWxlICogZmFjdGV1clRhaWxsZTtcclxuXHJcbiAgdGV4dHVyZS5mbGlwWSA9IGZhbHNlO1xyXG4gIHRleHR1cmUuY29sb3JTcGFjZSA9ICdzcmdiJztcclxuXHJcbiAgY29uc3QgZ3JvdXAgPSB1c2VSZWYoKTtcclxuICBjb25zdCB7IGFjdGlvbnMgfSA9IHVzZUFuaW1hdGlvbnMoYW5pbWF0aW9ucywgZ3JvdXApO1xyXG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzY2VuZS50cmF2ZXJzZSgoY2hpbGQpID0+IHtcclxuICAgICAgaWYgKGNoaWxkLmlzTWVzaCkge1xyXG4gICAgICAgIGNoaWxkLm1hdGVyaWFsLm1hcCA9IHRleHR1cmU7XHJcbiAgICAgICAgY2hpbGQubWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbc2NlbmUsIHRleHR1cmVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3Rpb25zICYmIGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1tBTklNQVRJT05fTkFNRV07XHJcbiAgICAgICAgYWN0aW9uLnJlc2V0KCkuZmFkZUluKDAuNSkucGxheSgpO1xyXG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbYWN0aW9uc10pO1xyXG5cclxuICAvLyBNaXNlIMOgIGpvdXIgdml0ZXNzZSBhbmltYXRpb25cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGlvbnMgJiYgYWN0aW9uc1tBTklNQVRJT05fTkFNRV0pIHtcclxuICAgICAgICBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXS50aW1lU2NhbGUgPSB2aXRlc3NlQW5pbWF0aW9uO1xyXG4gICAgfVxyXG4gIH0sIFt2aXRlc3NlQW5pbWF0aW9uLCBhY3Rpb25zXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUFuaW1hdGlvbiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1tBTklNQVRJT05fTkFNRV07XHJcbiAgICBpZiAoIWFjdGlvbikgcmV0dXJuO1xyXG5cclxuICAgIGlmIChpc1BsYXlpbmcpIHtcclxuICAgICAgICBhY3Rpb24ucGF1c2VkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWN0aW9uLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGlvbi5wbGF5KCk7IFxyXG4gICAgfVxyXG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG4gIH07XHJcblxyXG4gIHVzZUZyYW1lKCgpID0+IHtcclxuICAgIGlmKGdyb3VwLmN1cnJlbnQpIGdyb3VwLmN1cnJlbnQucm90YXRpb24ueSArPSB2aXRlc3NlUm90YXRpb247XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8cHJpbWl0aXZlIFxyXG4gICAgICByZWY9e2dyb3VwfSBcclxuICAgICAgb2JqZWN0PXtzY2VuZX0gXHJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFuaW1hdGlvbn1cclxuICAgICAgb25Qb2ludGVyT3Zlcj17KCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcid9XHJcbiAgICAgIG9uUG9pbnRlck91dD17KCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnYXV0byd9XHJcbiAgICAgIFxyXG4gICAgICBzY2FsZT17ZmluYWxTY2FsZX0gLy8g8J+RiCBPbiBhcHBsaXF1ZSBsYSB0YWlsbGUgZHluYW1pcXVlIGljaVxyXG4gICAgICBcclxuICAgICAgcG9zaXRpb249e1swLCAwLjUsIDBdfSBcclxuICAgICAgey4uLnByb3BzfSBcclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTmlnaHRGdXJ5U2NlbmUgPSAoKSA9PiB7XHJcbiAgLy8g8J+Om++4jyDDiVRBVFMgRFUgVEFCTEVBVSBERSBCT1JEXHJcbiAgY29uc3QgW3JvdFNwZWVkLCBzZXRSb3RTcGVlZF0gPSB1c2VTdGF0ZSgwLjAwMSk7XHJcbiAgY29uc3QgW2FuaW1TcGVlZCwgc2V0QW5pbVNwZWVkXSA9IHVzZVN0YXRlKDIuNSk7XHJcbiAgY29uc3QgW3NpemVGYWN0b3IsIHNldFNpemVGYWN0b3JdID0gdXNlU3RhdGUoMSk7IC8vIDEgPSB0YWlsbGUgbm9ybWFsZSAoMTAwJSlcclxuXHJcbiAgLy8gRm9uY3Rpb24gcG91ciB0b3V0IHJlbWV0dHJlIMOgIHrDqXJvXHJcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRSb3RTcGVlZCgwLjAwMSk7XHJcbiAgICBzZXRBbmltU3BlZWQoMi41KTtcclxuICAgIHNldFNpemVGYWN0b3IoMSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByZWxhdGl2ZVwiPlxyXG4gICAgICBcclxuICAgICAgPENhbnZhcyBzaGFkb3dzIGNhbWVyYT17eyBwb3NpdGlvbjogWzAsIDIsIDEwXSwgZm92OiA0NSB9fT5cclxuICAgICAgICA8Y29sb3IgYXR0YWNoPVwiYmFja2dyb3VuZFwiIGFyZ3M9e1snIzA1MDUxMCddfSAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTdGFycyByYWRpdXM9ezEwMH0gZGVwdGg9ezUwfSBjb3VudD17NTAwMH0gZmFjdG9yPXs0fSBzYXR1cmF0aW9uPXswfSBmYWRlIHNwZWVkPXsxfSAvPlxyXG5cclxuICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17M30gLz5cclxuICAgICAgICA8ZGlyZWN0aW9uYWxMaWdodCBwb3NpdGlvbj17WzEwLCAxMCwgNV19IGludGVuc2l0eT17NH0gLz5cclxuICAgICAgICA8c3BvdExpZ2h0IHBvc2l0aW9uPXtbLTUsIDUsIDEwXX0gaW50ZW5zaXR5PXs1fSBjb2xvcj1cIiNhODU1ZjdcIiAvPlxyXG4gICAgICAgIDxzcG90TGlnaHQgcG9zaXRpb249e1swLCA1LCAtMTBdfSBpbnRlbnNpdHk9ezV9IGNvbG9yPVwiI2ZmZmZmZlwiIC8+XHJcblxyXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PEh0bWwgY2VudGVyPjxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkludm9jYXRpb24uLi48L2Rpdj48L0h0bWw+fT5cclxuICAgICAgICAgIDxDZW50ZXIgdG9wPlxyXG4gICAgICAgICAgICA8RHJhZ29uTW9kZWwgXHJcbiAgICAgICAgICAgICAgICB2aXRlc3NlUm90YXRpb249e3JvdFNwZWVkfSBcclxuICAgICAgICAgICAgICAgIHZpdGVzc2VBbmltYXRpb249e2FuaW1TcGVlZH1cclxuICAgICAgICAgICAgICAgIGZhY3RldXJUYWlsbGU9e3NpemVGYWN0b3J9IC8vIPCfkYggT24gZW52b2llIGxhIHRhaWxsZVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DZW50ZXI+XHJcbiAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgPC9DYW52YXM+XHJcblxyXG4gICAgICB7Lyog8J+Om++4jyBVSSBQQU5ORUFVIERFIENPTlRSw5RMRSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IGJnLWJsYWNrLzcwIGJhY2tkcm9wLWJsdXItbWQgcC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1ibHVlLTUwMC8zMCB0ZXh0LXdoaXRlIHctNjQgc2hhZG93LTJ4bCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy1ibGFjay84MFwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtMzAwIGZvbnQtYm9sZCBtYi00IHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMCBwYi0yXCI+XHJcbiAgICAgICAgICAgIENPTlRSw5RMRVMgRFUgRFJBR09OXHJcbiAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgey8qIDEuIFRhaWxsZSAoWm9vbSkgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5UYWlsbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMFwiPnh7c2l6ZUZhY3Rvci50b0ZpeGVkKDEpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIFxyXG4gICAgICAgICAgICAgICAgbWluPVwiMC4xXCIgXHJcbiAgICAgICAgICAgICAgICBtYXg9XCIzXCIgXHJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4xXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2l6ZUZhY3Rvcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2l6ZUZhY3RvcihwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYWNjZW50LWdyZWVuLTUwMCBjdXJzb3ItcG9pbnRlciBoLTIgYmctZ3JheS03MDAgcm91bmRlZC1sZyBhcHBlYXJhbmNlLW5vbmVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogMi4gUm90YXRpb24gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Sb3RhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj57cm90U3BlZWQudG9GaXhlZCgzKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIiBcclxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBcclxuICAgICAgICAgICAgICAgIG1heD1cIjAuMDVcIiBcclxuICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAwMVwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JvdFNwZWVkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSb3RTcGVlZChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYWNjZW50LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyIGgtMiBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGFwcGVhcmFuY2Utbm9uZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiAzLiBWaXRlc3NlIEFuaW1hdGlvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkFuaW1hdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTQwMFwiPnh7YW5pbVNwZWVkLnRvRml4ZWQoMSl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgXHJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCIgXHJcbiAgICAgICAgICAgICAgICBtYXg9XCI1XCIgXHJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4xXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YW5pbVNwZWVkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmltU3BlZWQocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGFjY2VudC1wdXJwbGUtNTAwIGN1cnNvci1wb2ludGVyIGgtMiBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGFwcGVhcmFuY2Utbm9uZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC00IGJnLXdoaXRlLzEwIGhvdmVyOmJnLXJlZC01MDAvNTAgcHktMSByb3VuZGVkIHRleHQteHMgdHJhbnNpdGlvbi1jb2xvcnMgYm9yZGVyIGJvcmRlci13aGl0ZS8xMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBSw6lpbml0aWFsaXNlclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxudXNlR0xURi5wcmVsb2FkKE1PREVMX1BBVEgpO1xyXG51c2VUZXh0dXJlLnByZWxvYWQoVEVYVFVSRV9QQVRIKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5pZ2h0RnVyeVNjZW5lOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBWaWtpbmdQbGF5ZXIgPSAoeyBzcmMsIGF1dG9QbGF5ID0gZmFsc2UgfSkgPT4ge1xyXG4gICAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGltZSwgc2V0Q3VycmVudFRpbWVdID0gdXNlU3RhdGUoXCIwOjAwXCIpO1xyXG4gICAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZShcIjA6MDBcIik7XHJcbiAgICBjb25zdCBbaXNCbG9ja2VkLCBzZXRJc0Jsb2NrZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBOb3V2ZWF1IHN0YXRlIHBvdXIgZMOpdGVjdGVyIGxlIGJsb2NhZ2VcclxuXHJcbiAgICAvLyBHZXN0aW9uIGRlIGwnQXV0b3BsYXlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dG9QbGF5ICYmIGF1ZGlvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGxheVByb21pc2UgPSBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgaWYgKHBsYXlQcm9taXNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHBsYXlQcm9taXNlXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWNjw6hzIDogTGUgbmF2aWdhdGV1ciBhIGF1dG9yaXPDqSBsJ2F1dG9wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNCbG9ja2VkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIMOJY2hlYyA6IExlIG5hdmlnYXRldXIgYSBibG9xdcOpIGwnYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRvcGxheSBibG9xdcOpIChpbnRlcmFjdGlvbiByZXF1aXNlKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNCbG9ja2VkKHRydWUpOyAvLyBPbiBzaWduYWxlIHF1J2lsIGZhdXQgdW5lIGFjdGlvbiBtYW51ZWxsZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F1dG9QbGF5LCBzcmNdKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgICAgICBzZXRJc0Jsb2NrZWQoZmFsc2UpOyAvLyBTaSBsJ3V0aWxpc2F0ZXVyIGNsaXF1ZSwgbGUgYmxvY2FnZSBzYXV0ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRpbWVVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWU7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0b3RhbCkge1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzcygoY3VycmVudCAvIHRvdGFsKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUaW1lKGZvcm1hdFRpbWUoY3VycmVudCkpO1xyXG4gICAgICAgICAgICBzZXREdXJhdGlvbihmb3JtYXRUaW1lKHRvdGFsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWVrID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IGUudGFyZ2V0LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrWCA9IGUubmF0aXZlRXZlbnQub2Zmc2V0WDtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGF1ZGlvUmVmLmN1cnJlbnQuZHVyYXRpb247XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAoY2xpY2tYIC8gd2lkdGgpICogZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmb3JtYXRUaW1lID0gKHRpbWUpID0+IHtcclxuICAgICAgICBpZiAoIXRpbWUgfHwgaXNOYU4odGltZSkpIHJldHVybiBcIjA6MDBcIjtcclxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgICAgICAgY29uc3Qgc2VjID0gTWF0aC5mbG9vcih0aW1lICUgNjApO1xyXG4gICAgICAgIHJldHVybiBgJHttaW59OiR7c2VjIDwgMTAgPyAnMCcgKyBzZWMgOiBzZWN9YDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gVmlzdWFsaXNldXIgYW5pbcOpXHJcbiAgICBjb25zdCBiYXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMzAgfSkubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAga2V5PXtpfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xIG14LVsxcHhdIHJvdW5kZWQtdCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtpc1BsYXlpbmcgPyAnYmctdmlraW5nLWdvbGQgYW5pbWF0ZS1iYXInIDogJ2JnLXN0b25lLTcwMCBoLTEnfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IGAke01hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjR9c2AsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGlzUGxheWluZyA/ICcxMDAlJyA6ICcxMCUnIFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctMnhsIG14LWF1dG8gbXktOCBiZy1ibGFjay84MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHJvdW5kZWQtbGcgcC02IHNoYWRvdy1bMF8wXzMwcHhfcmdiYSgwLDAsMCwwLjgpXSBiYWNrZHJvcC1ibHVyLXNtIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIE1lc3NhZ2Ugc2kgYmxvcXXDqSAqL31cclxuICAgICAgICAgICAge2lzQmxvY2tlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svODAgei0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMTIsMTc1LDU1LDAuNildXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIPCflIogQWN0aXZlciBsJ0FtYmlhbmNlIFNvbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8YXVkaW8gXHJcbiAgICAgICAgICAgICAgICByZWY9e2F1ZGlvUmVmfSBcclxuICAgICAgICAgICAgICAgIHNyYz17c3JjfSBcclxuICAgICAgICAgICAgICAgIG9uVGltZVVwZGF0ZT17aGFuZGxlVGltZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uRW5kZWQ9eygpID0+IHNldElzUGxheWluZyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBvbkxvYWRlZE1ldGFkYXRhPXsoZSkgPT4gc2V0RHVyYXRpb24oZm9ybWF0VGltZShlLnRhcmdldC5kdXJhdGlvbikpfSAvLyBDaGFyZ2UgbGEgZHVyw6llIGTDqHMgbGUgZMOpYnV0XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC02IHJlbGF0aXZlIHotMTBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBCb3V0b24gUGxheS9QYXVzZSAqL31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTE0IGgtMTQgZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke2lzUGxheWluZyA/ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIHNoYWRvdy1bMF8wXzE1cHhfcmdiYSgyMTIsMTc1LDU1LDAuNSldJyA6ICd0ZXh0LXZpa2luZy1nb2xkIGhvdmVyOmJnLXZpa2luZy1nb2xkLzIwJ31gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1BsYXlpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy02IGgtNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk02IDE5aDRWNUg2djE0em04LTE0djE0aDRWNWgtNHpcIi8+PC9zdmc+IFxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy02IGgtNiB0cmFuc2xhdGUteC0wLjVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOCA1djE0bDExLTd6XCIvPjwvc3ZnPiBcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEluZm8gJiBWaXN1YWxpc2V1ciAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtWzEwcHhdIHRleHQtdmlraW5nLWdvbGQgZm9udC1tb25vIG1iLTIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBvcGFjaXR5LTgwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjdXJyZW50VGltZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpc1BsYXlpbmcgPyBcIkxlY3R1cmUuLi5cIiA6IFwiUGF1c2VcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBab25lIFZpc3VhbGlzZXVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMCBmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBtYi0zIG92ZXJmbG93LWhpZGRlbiBvcGFjaXR5LTgwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtiYXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogQmFycmUgZGUgcHJvZ3Jlc3Npb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xLjUgYmctc3RvbmUtODAwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZSBncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLXZpa2luZy1nb2xkIHJvdW5kZWQtZnVsbCByZWxhdGl2ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAgZWFzZS1saW5lYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdy0zIGgtMyBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHNoYWRvdyBzY2FsZS0wIGdyb3VwLWhvdmVyOnNjYWxlLTEwMCB0cmFuc2l0aW9uLWFsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWtpbmdQbGF5ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgRGF0YVByb3ZpZGVyU3BhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRhUHJvdmlkZXJTcGFjZSc7XHJcbmltcG9ydCBEZXNpZ25lclNwYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvRGVzaWduZXJTcGFjZSc7XHJcblxyXG5jb25zdCBBZG1pbkRhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnc3RhdHMnKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gbnVsbDtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjdXJyZW50VXNlciA9IHRva2VuID8gand0RGVjb2RlKHRva2VuKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBkZSBkw6ljb2RhZ2UgZHUgdG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRMOpZmluaXRpb24gZGVzIGFjY8OocyBzZWxvbiBsZXMgcsO0bGVzXHJcbiAgICBjb25zdCByb2xlcyA9IGN1cnJlbnRVc2VyPy5yb2xlcyB8fCBbXTtcclxuICAgIGNvbnN0IGlzRnVsbEFkbWluID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcclxuICAgIGNvbnN0IGlzUHJvdmlkZXIgPSByb2xlcy5pbmNsdWRlcygnUk9MRV9GT1VSTklTU0VVUicpIHx8IGlzRnVsbEFkbWluO1xyXG4gICAgY29uc3QgaXNEZXNpZ25lciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0RFU0lHTkVSJykgfHwgaXNGdWxsQWRtaW47XHJcbiAgICBjb25zdCBpc0VkaXRvciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0VESVRFVVInKSB8fCBpc0Z1bGxBZG1pbjtcclxuXHJcbiAgICBjb25zdCBsb2FkU3RhdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvYWRtaW4vc3RhdHMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiQWNjw6hzIHJlZnVzw6kgcGFyIGxlIEdyYW5kIENvbnNlaWxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oanNvbiA9PiBzZXREYXRhKGpzb24pKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gc2V0RXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2FkU3RhdHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcm9tb3RlID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvYWRtaW4vdXNlci8ke3VzZXJJZH0vcHJvbW90ZWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBhbGxVc2VyczogZGF0YS5hbGxVc2Vycy5tYXAodSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdS5pZCA9PT0gdXNlcklkID8geyAuLi51LCByb2xlczogdXBkYXRlZERhdGEubmV3Um9sZXMgfSA6IHVcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikgeyBcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgbG9ycyBkdSBjaGFuZ2VtZW50IGRlIHJhbmdcIik7IFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgcC0xMCB0ZXh0LWNlbnRlciBmb250LWRyYWdvblwiPntlcnJvcn08L2Rpdj47XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBwLTEwIGZvbnQtZHJhZ29uIGFuaW1hdGUtcHVsc2UgdGV4dC1jZW50ZXJcIj5BcHBlbCBhdSBHcmFuZCBDb25zZWlsLi4uPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBwLTYgdGV4dC13aGl0ZSBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtc3RvbmUtMjAwIG1iLTEwIGJvcmRlci1iIGJvcmRlci15ZWxsb3ctNzAwLzMwIHBiLTQgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj5cclxuICAgICAgICAgICAgICAgIFBhbGFpcyBkJ0FkbWluaXN0cmF0aW9uXHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBwYXIgT25nbGV0cyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBtYi04IGJvcmRlci1iIGJvcmRlci1zdG9uZS04MDAgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3N0YXRzJyl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTYgcHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24tYWxsICR7YWN0aXZlVGFiID09PSAnc3RhdHMnID8gJ2JnLXllbGxvdy02MDAgdGV4dC1ibGFjayBzY2FsZS0xMDUnIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCBob3ZlcjpiZy1zdG9uZS04MDAnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIFZ1ZSBkJ2Vuc2VtYmxlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2lzRnVsbEFkbWluICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigndXNlcnMnKX0gY2xhc3NOYW1lPXtgcHgtNiBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbi1hbGwgJHthY3RpdmVUYWIgPT09ICd1c2VycycgPyAnYmcteWVsbG93LTYwMCB0ZXh0LWJsYWNrIHNjYWxlLTEwNScgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGhvdmVyOmJnLXN0b25lLTgwMCd9YH0+UG9wdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2lzRWRpdG9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignYXJ0aWNsZXMnKX0gY2xhc3NOYW1lPXtgcHgtNiBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbi1hbGwgJHthY3RpdmVUYWIgPT09ICdhcnRpY2xlcycgPyAnYmcteWVsbG93LTYwMCB0ZXh0LWJsYWNrIHNjYWxlLTEwNScgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGhvdmVyOmJnLXN0b25lLTgwMCd9YH0+Q2hyb25pcXVlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNQcm92aWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2RhdGEnKX0gY2xhc3NOYW1lPXtgcHgtNiBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbi1hbGwgJHthY3RpdmVUYWIgPT09ICdkYXRhJyA/ICdiZy15ZWxsb3ctNjAwIHRleHQtYmxhY2sgc2NhbGUtMTA1JyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgaG92ZXI6Ymctc3RvbmUtODAwJ31gfT5Eb25uw6llcyAoQ1NWKTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNEZXNpZ25lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2Rlc2lnbicpfSBjbGFzc05hbWU9e2BweC02IHB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uLWFsbCAke2FjdGl2ZVRhYiA9PT0gJ2Rlc2lnbicgPyAnYmcteWVsbG93LTYwMCB0ZXh0LWJsYWNrIHNjYWxlLTEwNScgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGhvdmVyOmJnLXN0b25lLTgwMCd9YH0+QXBwYXJlbmNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDT05URU5VIERZTkFNSVFVRSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1bNTAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgU1RBVFMgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnc3RhdHMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTYgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXItbC00IGJvcmRlci15ZWxsb3ctNjAwIHAtOCBzaGFkb3ctMnhsIHJvdW5kZWQtci1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXN0XCI+R3VlcnJpZXJzIGRlIEJlcms8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gbXQtMiB0ZXh0LXdoaXRlXCI+e2RhdGEudXNlcnNDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXItbC00IGJvcmRlci1vcmFuZ2UtNzAwIHAtOCBzaGFkb3ctMnhsIHJvdW5kZWQtci1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXN0XCI+Q2hyb25pcXVlcyDDqWNyaXRlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiBtdC0yIHRleHQtd2hpdGVcIj57ZGF0YS5hcnRpY2xlc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgVVNFUlMgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAndXNlcnMnICYmIGlzRnVsbEFkbWluICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBhbmltYXRlLWluIHNsaWRlLWluLWZyb20tYm90dG9tLTQgZHVyYXRpb24tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNoZXJjaGVyIHVuIGd1ZXJyaWVyIGRhbnMgbGEgYnJ1bWUuLi5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXIteWVsbG93LTkwMC8zMCBwLTQgcm91bmRlZCB0ZXh0LXNtIHctZnVsbCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXllbGxvdy02MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5hbGxVc2Vycz8uZmlsdGVyKHUgPT4gdS5wc2V1ZG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpKS5tYXAodSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3UuaWR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTQgYmctc3RvbmUtOTAwLzQwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIHJvdW5kZWQgaG92ZXI6Ym9yZGVyLXN0b25lLTcwMCB0cmFuc2l0aW9uLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc3RvbmUtMjAwXCI+e3UucHNldWRvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyXCI+e3Uucm9sZXMuam9pbignIOKAoiAnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb21vdGUodS5pZCl9IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGJvcmRlciBib3JkZXIteWVsbG93LTcwMC80MCBweC00IHB5LTIgaG92ZXI6YmcteWVsbG93LTYwMCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tYWxsIGZvbnQtYmxhY2sgdXBwZXJjYXNlXCI+Q2hhbmdlciBSYW5nPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgQVJUSUNMRVMgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnYXJ0aWNsZXMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXM/Lm1hcChhcnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FydC5pZH0gY2xhc3NOYW1lPVwicC01IGJnLXN0b25lLTkwMC84MCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXN0b25lLTIwMFwiPnthcnQudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNTAwIGl0YWxpYyBtdC0xIGZvbnQtc2VyaWZcIj5kaWN0w6kgcGFyIHthcnQuYXV0aG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ibGFjay8zMCBweC0yIHB5LTEgcm91bmRlZFwiPnthcnQuY3JlYXRlZEF0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9OR0xFVCBEQVRBICovfVxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2RhdGEnICYmIGlzUHJvdmlkZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbiB6b29tLWluLTk1IGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVByb3ZpZGVyU3BhY2UgZGF0YXNldHM9e2RhdGEuZGF0YXNldHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgREVTSUdOIChUT04gTk9VVkVMIEVTUEFDRSkgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnZGVzaWduJyAmJiBpc0Rlc2lnbmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gZmFkZS1pbiBkdXJhdGlvbi03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlc2lnbmVyU3BhY2UgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluRGFzaGJvYXJkOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IEFydGljbGVQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7IGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyB9IH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LTJ4bCBweS0yMCBhbmltYXRlLXB1bHNlXCI+UmVjaGVyY2hlIGRhbnMgbGVzIGFyY2hpdmVzLi4uPC9kaXY+O1xyXG4gICAgaWYgKCFhcnRpY2xlKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1maXJlIHRleHQteGwgcHktMTBcIj5BcnRpY2xlIGludHJvdXZhYmxlIGRhbnMgbGVzIGFyY2hpdmVzLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gYW5pbWF0ZS1mYWRlLWluXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctbGlnaHQgaG92ZXI6dGV4dC13aGl0ZSBtYi02IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0cmFuc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7ihpA8L3NwYW4+IFJldG91ciBhdSBmb3J1bVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIHsvKiBEw6ljb3JhdGlvbiBjb2luICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctMjAgaC0yMCBiZy12aWtpbmctZ29sZCBvcGFjaXR5LTEwIHJvdW5kZWQtYmwtZnVsbFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXNtIHRleHQtc3RvbmUtNTAwIG1iLTggYm9yZGVyLWIgYm9yZGVyLXN0b25lLTcwMCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdmlraW5nLXJlZCBweC0yIHB5LTEgcm91bmRlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyY2hpdmVcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q3LDqcOpIGxlIHtuZXcgRGF0ZShhcnRpY2xlLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgZm9udC1zZXJpZiB3aGl0ZXNwYWNlLXByZS1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUuc3VtbWFyeX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTm90ZTogTGVzIGJsb2NzIGV0IGNvbW1lbnRhaXJlcyBuw6ljZXNzaXRlbnQgdW5lIGxvZ2lxdWUgcGx1cyBwb3Vzc8OpZSDDoCBpbXBsw6ltZW50ZXIgcGx1cyB0YXJkICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IEFydGljbGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm0nO1xyXG5cclxuY29uc3QgRm9ydW1QYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgXHJcbiAgICAvLyBHZXN0aW9uIGRlIGxhIG5hdmlnYXRpb24gaW50ZXJuZVxyXG4gICAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoJ2xpc3QnKTsgLy8gJ2xpc3QnLCAnY3JlYXRlJywgJ2VkaXQnXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIDEuIFLDqWN1cMOpcmF0aW9uIGV0IGTDqWNvZGFnZSBkdSBUb2tlblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRyeSB7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkd1ZXJyaWVyIGNvbm5lY3TDqSA6XCIsIGRlY29kZWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcihkZWNvZGVkKTsgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYWRnZSAoVG9rZW4pIGludmFsaWRlIG91IGV4cGlyw6lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gMi4gQ2hhcmdlbWVudCBkZXMgY2hyb25pcXVlc1xyXG4gICAgICAgIGZldGNoQXJ0aWNsZXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEFydGljbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvYXJ0aWNsZXMnLCB7IFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nIH0gXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0QXJ0aWNsZXMoZGF0YVsnaHlkcmE6bWVtYmVyJ10gfHwgZGF0YVsnbWVtYmVyJ10gfHwgW10pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGRlIGxpYWlzb24gYXZlYyBsZSBHcmFuZCBDb25zZWlsXCIsIGVycik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKFwiVm91bGV6LXZvdXMgdnJhaW1lbnQgZWZmYWNlciBjZSByw6ljaXQgZGUgbGEgcGllcnJlID9cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwcmVzc2lvbiBsb2NhbGUgaW1tw6lkaWF0ZSBwb3VyIGwnaW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlcyhhcnRpY2xlcy5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYUlkID0gKGEuaWQgfHwgYVsnQGlkJ10pLnRvU3RyaW5nKCkuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUlkICE9PSBpZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJMZXMgZHJhZ29ucyBwcm90w6hnZW50IGNlIHBhcmNoZW1pbiAoRXJyZXVyIGRlIHBlcm1pc3Npb25zKS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJMZSBzZXJ2ZXVyIGVzdCBpbmpvaWduYWJsZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpZXcoJ2xpc3QnKTtcclxuICAgICAgICBzZXRTZWxlY3RlZElkKG51bGwpO1xyXG4gICAgICAgIGZldGNoQXJ0aWNsZXMoKTsgXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLSBMT0dJUVVFIERFUyBSw5RMRVMgLS0tXHJcbiAgICBjb25zdCBoYXNSb2xlID0gKHJvbGUpID0+IHVzZXI/LnJvbGVzPy5pbmNsdWRlcyhyb2xlKTtcclxuICAgIFxyXG4gICAgLy8gQXV0b3Jpc2UgbGEgY3LDqWF0aW9uIHBvdXIgQWRtaW4sIEF1dGV1ciBFVCDDiWRpdGV1clxyXG4gICAgY29uc3QgY2FuQ3JlYXRlID0gaGFzUm9sZSgnUk9MRV9BRE1JTicpIHx8IGhhc1JvbGUoJ1JPTEVfQVVURVVSJykgfHwgaGFzUm9sZSgnUk9MRV9FRElURVVSJyk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcgJiYgdmlldyA9PT0gJ2xpc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS00MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYm9yZGVyLTQgYm9yZGVyLXZpa2luZy1nb2xkIGJvcmRlci10LXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW4gbWItNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LXhsIGFuaW1hdGUtcHVsc2UgdXBwZXJjYXNlXCI+T3V2ZXJ0dXJlIGRlcyBwYXJjaGVtaW5zLi4uPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBweC00IHBiLTIwXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogLS0tIEhFQURFUiAtLS0gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIG1iLTEyIGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8yMCBwYi04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj5DaHJvbmlxdWVzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBpdGFsaWMgdGV4dC1zbSBtdC0yXCI+TGUgc2F2b2lyIGR1IHZpbGxhZ2UgZGUgQmVyaywgZ3JhdsOpIHBvdXIgbCfDqXRlcm5pdMOpLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7dmlldyA9PT0gJ2xpc3QnICYmIGNhbkNyZWF0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlldygnY3JlYXRlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgcHgtOCBweS0zIGZvbnQtYmxhY2sgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMTIsMTc1LDU1LDAuMildIHVwcGVyY2FzZSB0ZXh0LXhzIHRyYWNraW5nLXdpZGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIEdyYXZlciB1biByw6ljaXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIC0tLSBWVUVTIEZPUk1VTEFJUkVTIC0tLSAqL31cclxuICAgICAgICAgICAgeyh2aWV3ID09PSAnY3JlYXRlJyB8fCB2aWV3ID09PSAnZWRpdCcpID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20tNCBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFZpZXcoJ2xpc3QnKTsgc2V0U2VsZWN0ZWRJZChudWxsKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb24gdXBwZXJjYXNlIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oaQIFJldG91ciBhdSBtdXIgZGVzIGzDqWdlbmRlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlRm9ybSBpZD17c2VsZWN0ZWRJZH0gb25TdWNjZXNzPXtoYW5kbGVTdWNjZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAvKiAtLS0gVlVFIExJU1RFIERFUyBBUlRJQ0xFUyAtLS0gKi9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTIwIHRleHQtc3RvbmUtNjAwIGl0YWxpY1wiPkxlIHNpbGVuY2UgcsOoZ25lIHN1ciBsZSBtdXIuLi4gQXVjdW5lIGNocm9uaXF1ZSBuJ2Egw6l0w6kgdHJvdXbDqWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5JZCA9IChhcnRpY2xlLmlkIHx8IGFydGljbGVbJ0BpZCddKS50b1N0cmluZygpLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFbDqXJpZmljYXRpb24gZGUgcHJvcHJpw6l0w6kgKEwnYXV0ZXVyIGR1IHBvc3QgT1UgdW4gcsO0bGUgZGUgbW9kw6lyYXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc093bmVyID0gdXNlcj8uaWQgPT09IGFydGljbGUuYXV0aG9yPy5pZCB8fCBoYXNSb2xlKCdST0xFX0FETUlOJykgfHwgaGFzUm9sZSgnUk9MRV9FRElURVVSJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBrZXk9e2NsZWFuSWR9IGNsYXNzTmFtZT1cImdyb3VwIGJnLXN0b25lLTkwMC80MCBib3JkZXItbC00IGJvcmRlci1zdG9uZS04MDAgaG92ZXI6Ym9yZGVyLXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBwLTggcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzT3duZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBvcGFjaXR5LTQwIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRTZWxlY3RlZElkKGNsZWFuSWQpOyBzZXRWaWV3KCdlZGl0Jyk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIGJnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTQwMCBweC0zIHB5LTEgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGNsZWFuSWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB1cHBlcmNhc2UgZm9udC1ibGFjayBiZy1yZWQtOTAwLzEwIHRleHQtcmVkLTUwMC83MCBweC0zIHB5LTEgYm9yZGVyIGJvcmRlci1yZWQtOTAwLzMwIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VwcHJpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCBmb250LXNlcmlmIGl0YWxpYyB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi04IG1heC13LTN4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ7YXJ0aWNsZS5zdW1tYXJ5fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB0LTYgYm9yZGVyLXQgYm9yZGVyLXN0b25lLTgwMC81MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtWzFweF0gYmctdmlraW5nLWdvbGQvNDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZvbnQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFyIHthcnRpY2xlLmF1dGhvcj8ucHNldWRvIHx8IGFydGljbGUuYXV0aG9yPy51c2VybmFtZSB8fCBcIkd1ZXJyaWVyIGRlIGwnb21icmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2ZvcnVtL2FydGljbGUvJHtjbGVhbklkfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWZpcmUgZm9udC1ibGFjayB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN1bHRlciBsZSBwYXJjaGVtaW4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPuKGkjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ydW1QYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOaWdodEZ1cnlTY2VuZSBmcm9tIFwiLi4vY29tcG9uZW50cy9OaWdodEZ1cnlcIjtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTE2IGFuaW1hdGUtZmFkZS1pbi11cFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1kcmFnb24gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXZpa2luZy1nb2xkIHZpYS15ZWxsb3ctNTAwIHRvLXZpa2luZy1nb2xkIG1iLTggZHJvcC1zaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBkYW5zIGwnQW50cmVcclxuICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTEgYmctdmlraW5nLXJlZCBteC1hdXRvIG1iLTggcm91bmRlZC1mdWxsIHNoYWRvdy1bMF8wXzEwcHhfI2RjMjYyNl1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtdmlraW5nLWxpZ2h0IG1iLTEyIG1heC13LTN4bCBteC1hdXRvIGZvbnQtc2VyaWYgaXRhbGljIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgICAgICAgXCLDh2EsIGMnZXN0IEJldXJrLiDDgCBkb3V6ZSBqb3VycyBhdSBub3JkIGR1IETDqXNlc3BvaXIsIGV0XHJcbiAgICAgICAgICAgICAgICBxdWVscXVlcyBkZWdyw6lzIGF1IHN1ZCBkJ3VuIEZyb2lkLWRlLWNhbmFyZC4gQW5jcsOpIHNvbGlkZW1lbnRcclxuICAgICAgICAgICAgICAgIHN1ciBsZSBNw6lyaWRpZW4gZGUgbGEgTWlzw6hyZS4gTW9uIHZpbGxhZ2UuLi4gRW4gdW4gbW90LCBiYWxhaXNlLlxyXG4gICAgICAgICAgICAgICAgRXQgc2VwdCBnw6luw6lyYXRpb25zIHkgb250IGTDqWrDoCB2dSBsZSBqb3VyLCBwb3VydGFudCwgdG91dGVzIGxlc1xyXG4gICAgICAgICAgICAgICAgbWFpc29ucyBzb250IG5ldXZlcy4gQmV1cmsgOiBzYSBww6pjaGUsIHNhIGNoYXNzZSwgZXQgc2VzXHJcbiAgICAgICAgICAgICAgICBtZXJ2ZWlsbGV1eCBjb3VjaGVycyBkZSBzb2xlaWwuIExhIHNldWxlIGZhdXNzZSBub3RlIGMnZXN0IGxlc1xyXG4gICAgICAgICAgICAgICAgYmVzdGlvbGVzLiBBaWxsZXVycywgbGVzIGdlbnMgb250IGRlcyBzb3VyaXMgb3UgZGVzIG1vdXN0aXF1ZXMuXHJcbiAgICAgICAgICAgICAgICBOb3VzIG9uIGEgZGVzLi4uIGRyYWdvbnMuXCJcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMCByb3VuZGVkLTJ4bCBib3JkZXItNCBib3JkZXItc3RvbmUtNzAwIHNoYWRvdy0yeGwgb3ZlcmZsb3ctaGlkZGVuIG1iLTEyXCI+XHJcbiAgICAgICAgICAgICAgICB7Lyog8J+RhyBDJ2VzdCBpY2kgcXVlIGxhIG1hZ2llIG9ww6hyZS4gTGEgaGF1dGV1ciAoaC1bNjAwcHhdKSBlc3QgQ1JVQ0lBTEUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzYwMHB4XSB3LWZ1bGwgcmVsYXRpdmUgYmctYmxhY2sgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmlnaHRGdXJ5U2NlbmUgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTAgdy1mdWxsIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTQwMCBwb2ludGVyLWV2ZW50cy1ub25lIHotMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpcXVleiBzdXIgbGUgZHJhZ29uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvZm9ydW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHB4LTggcHktNCBiZy12aWtpbmctcmVkIGhvdmVyOmJnLXJlZC05MDAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHRleHQtd2hpdGUgZm9udC1kcmFnb24gdGV4dC14bCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMjIwLDM4LDM4LDAuNSldXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+QWNjw6lkZXIgYXUgRm9ydW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZS8yMCB0by10cmFuc3BhcmVudCAtdHJhbnNsYXRlLXgtZnVsbCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC1mdWxsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvc3RhdGlzdGlxdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTggcHktNCBiZy12aWtpbmctcm9jayBob3ZlcjpiZy1zdG9uZS03MDAgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTUwMCB0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIGZvbnQtZHJhZ29uIHRleHQteGwgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFZvaXIgbGVzIFN0YXRzXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RXJyb3IoJycpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luX2NoZWNrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLCAvLyBFbnZvaSBkZSBsYSBjbMOpIFwiZW1haWxcIiBhdHRlbmR1ZSBwYXIgU3ltZm9ueVxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCBcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2sgJiYgZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvY2thZ2UgZHUgdG9rZW4gSldUXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0aW9uIHZlcnMgbGUgZm9ydW1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9mb3J1bSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcignSWRlbnRpZmlhbnRzIGluY29ycmVjdHMuIExlcyBkcmFnb25zIG5lIHZvdXMgcmVjb25uYWlzc2VudCBwYXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ0VycmV1ciBkZSBjb25uZXhpb24gYXUgc2VydmV1ci4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXZpa2luZy1yb2NrIHAtMTAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgbXQtMTBcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5Db25uZXhpb248L2gyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXJlZCB0ZXh0LXNtIG1iLTQgaXRhbGljIHRleHQtY2VudGVyIGZvbnQtYm9sZFwiPntlcnJvcn08L3A+fVxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBkdSBHdWVycmllclxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4ZW1wbGVAYmVyay5mclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMiB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTW90IGRlIHBhc3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayBweS00IHVwcGVyY2FzZSBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LWxnIGFjdGl2ZTpzY2FsZS05NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZW5kcmUgc29uIGVudm9sXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBSZWdpc3RlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBsYWluUGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHJvbGU6ICdST0xFX1VTRVInXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEVycm9yKCcnKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3JlZ2lzdGVyJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJpZ2UgdmVycyBsJ2FjY3VlaWwgb3UgbGUgbG9naW4gYXByw6hzIHN1Y2PDqHNcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvJyk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIkVycmV1ciBsb3JzIGRlIGwnaW5zY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJJbXBvc3NpYmxlIGRlIGNvbnRhY3RlciBsZSBHcmFuZCBTY3JpYmUgKEVycmV1ciByw6lzZWF1KVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXZpa2luZy1yb2NrLzkwIHAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCBzaGFkb3ctMnhsIGJhY2tkcm9wLWJsdXItc21cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBSZWpvaW5kcmUgbGEgR3VpbGRlXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtOTAwLzQwIGJvcmRlciBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC0yMDAgcC0zIHJvdW5kZWQgbWItNiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBOT00gRCdVVElMSVNBVEVVUiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Ob20gZGUgY29kZSAoUHNldWRvKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBLcm9rbW91XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEVNQUlMICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPkVtYWlsIGRlIGNvbnRhY3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidmlraW5nQGJlcmsuZnJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogUsOUTEUgKETDqWrDoCBmb25jdGlvbm5lbCkgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+UmFuZyBhdSBzZWluIGRlIGxhIEd1aWxkZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHJvbGU6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9VU0VSXCI+QWJvbm7DqSAoTGVjdGV1cik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfQVVURVVSXCI+QXV0ZXVyIChOYXJyYXRldXIpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0VESVRFVVJcIj7DiWRpdGV1ciAoR2FyZGllbik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfREVTSUdORVJcIj5EZXNpZ25ldXIgKEFydGlzYW4pPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0ZPVVJOSVNTRVVSXCI+Rm91cm5pc3NldXIgZGUgZG9ubsOpZXMgKFNjcmliZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfQURNSU5cIj5BZG1pbmlzdHJhdGV1ciAoQ2hlZiBkZSBsYSBHdWlsZGUpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTU9UIERFIFBBU1NFICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPk1vdCBkZSBwYXNzZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLigKLigKLigKLigKLigKLigKLigKLigKJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBsYWluUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBwbGFpblBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtdmlraW5nLWRhcmsgZm9udC1leHRyYWJvbGQgcHktNCByb3VuZGVkIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgc2hhZG93LWxnIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtdC00XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBHcmF2ZXIgbW9uIG5vbVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcnQgYXMgQ2hhcnRKUywgQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEFyY0VsZW1lbnQsIFBvaW50RWxlbWVudCwgTGluZUVsZW1lbnQsXHJcbn0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBCYXIsIERvdWdobnV0LCBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEFyY0VsZW1lbnQsIFBvaW50RWxlbWVudCwgTGluZUVsZW1lbnQpO1xyXG5cclxuY29uc3QgU3RhdHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtib3hPZmZpY2VEYXRhLCBzZXRCb3hPZmZpY2VEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwb3B1bGF0aW9uRGF0YSwgc2V0UG9wdWxhdGlvbkRhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RpbWVsaW5lRGF0YSwgc2V0VGltZWxpbmVEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBsb2FkQ1NWID0gKHVybCwgY2FsbGJhY2spID0+IHtcclxuICAgIGZldGNoKHVybClcclxuICAgICAgLnRoZW4ociA9PiByLm9rID8gci50ZXh0KCkgOiBudWxsKVxyXG4gICAgICAudGhlbih0eHQgPT4ge1xyXG4gICAgICAgIGlmKCF0eHQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IHR4dC50cmltKCkuc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggPCAyKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IGxpbmVzWzBdLnNwbGl0KCc7JykubWFwKGggPT4gaC50cmltKCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBsaW5lcy5zbGljZSgxKS5tYXAobCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBsLnNwbGl0KCc7JykubWFwKHYgPT4gdi50cmltKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4gKHsuLi5hY2MsIFtoXTogdmFsc1tpXX0pLCB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRDU1YoJy9kYXRhL3N0YXRzL2JveF9vZmZpY2UuY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgc2V0Qm94T2ZmaWNlRGF0YSh7XHJcbiAgICAgICAgbGFiZWxzOiBkYXRhLm1hcChpID0+IGlbJ0ZpbG0nXSksXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICBsYWJlbDogJ00kJyxcclxuICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydCb3ggT2ZmaWNlIChNaWxsaW9ucyAkKSddKSksXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsnIzdmMWQxZCcsICcjZGMyNjI2JywgJyNkOTc3MDYnXSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzI5MjUyNCcsXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvYmVya19wb3B1bGF0aW9uLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldFBvcHVsYXRpb25EYXRhKHtcclxuICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnR3JvdXBlJ10pLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ1BvcHVsYXRpb24nXSkpLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyNkOTc3MDYnLCAnIzdmMWQxZCcsICcjNTc1MzRlJywgJyNhOGEyOWUnXSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzFjMTkxNycsXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvZHJhZ29uc190aW1lbGluZS5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVsaW5lRGF0YSh7XHJcbiAgICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnQW5uw6llJ10pLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnRXNww6hjZXMnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnRXNww6hjZXMgUmVjZW5zw6llcyddKSksXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2Q5NzcwNicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjE3LCAxMTksIDYsIDAuMiknLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICB0ZW5zaW9uOiAwLjMsXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICBwbHVnaW5zOiB7IGxlZ2VuZDogeyBsYWJlbHM6IHsgY29sb3I6ICcjZTdlNWU0JywgZm9udDogeyBmYW1pbHk6ICdzZXJpZicgfSB9IH0gfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB5OiB7IHRpY2tzOiB7IGNvbG9yOiAnI2E4YTI5ZScgfSwgZ3JpZDogeyBjb2xvcjogJyM0NDQwM2MnIH0gfSxcclxuICAgICAgeDogeyB0aWNrczogeyBjb2xvcjogJyNhOGEyOWUnIH0sIGdyaWQ6IHsgY29sb3I6ICcjNDQ0MDNjJyB9IH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgZHJvcC1zaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgIEwnT2JzZXJ2YXRvaXJlIGRlIEJlcmtcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctbGlnaHQgdGV4dC1sZyBpdGFsaWMgYm9yZGVyLWIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIGlubGluZS1ibG9jayBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICBSZWNlbnNlbWVudCBvZmZpY2llbCBkZSBsJ2FyY2hpcGVsXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1kcmFnb24gdGV4dC13aGl0ZSBtYi02XCI+VHLDqXNvciBkZSBHdWVycmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveE9mZmljZURhdGEgPyA8QmFyIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2JveE9mZmljZURhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5DaGFyZ2VtZW50Li4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1kcmFnb24gdGV4dC13aGl0ZSBtYi02XCI+Q2xhbnMgJiBUcmlidXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9wdWxhdGlvbkRhdGEgPyA8RG91Z2hudXQgb3B0aW9ucz17ey4uLm9wdGlvbnMsIHNjYWxlczp7fX19IGRhdGE9e3BvcHVsYXRpb25EYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+Q2hhcmdlbWVudC4uLjwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtNiByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCBtZDpjb2wtc3Bhbi0yIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC0xIGJnLXZpa2luZy1nb2xkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1kcmFnb24gdGV4dC13aGl0ZSBtYi02XCI+Q2hyb25vbG9naWUgZGVzIETDqWNvdXZlcnRlczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtODAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGltZWxpbmVEYXRhID8gPExpbmUgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17dGltZWxpbmVEYXRhfSAvPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+Q2hhcmdlbWVudC4uLjwvcD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHNQYWdlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lUGFnZSIsIkZvcnVtUGFnZSIsIkFydGljbGVQYWdlIiwiU3RhdHNQYWdlIiwiTmF2YmFyIiwiUmVnaXN0ZXJQYWdlIiwiTG9naW5QYWdlIiwiQXJ0aWNsZVNob3ciLCJBZG1pbkRhc2hib2FyZCIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImRhdGEiLCJwcmltYXJ5Q29sb3IiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwicGF0aCIsImVsZW1lbnQiLCJyb290RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsImVycm9yIiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGVzdCIsIm5leHQiLCJwdXNoIiwidXNlU3RhdGUiLCJDc3ZDaGFydCIsIkFydGljbGVGb3JtIiwiX3JlZiIsIl9yZWYkaWQiLCJpZCIsIm9uU3VjY2VzcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJ0aXRsZSIsInNldFRpdGxlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiYmxvY3MiLCJzZXRCbG9jcyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibXVzaWNMaWJyYXJ5Iiwic2V0TXVzaWNMaWJyYXJ5IiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJkYXRhc2V0TGlicmFyeSIsInNldERhdGFzZXRMaWJyYXJ5IiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXMiLCJlcnIiLCJFcnJvciIsImFkZEJsb2MiLCJ0eXBlIiwiY29uY2F0IiwiY29udGVudCIsIm1lZGlhVXJsIiwidml6VHlwZSIsImZpbGUiLCJEYXRlIiwibm93IiwicmVtb3ZlQmxvYyIsImluZGV4VG9SZW1vdmUiLCJmaWx0ZXIiLCJfIiwiaW5kZXgiLCJ1cGRhdGVCbG9jIiwiZmllbGQiLCJuZXdCbG9jcyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJ0YXJnZXQiLCJmaWxlcyIsInN0YXJ0c1dpdGgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVTdWJtaXQiLCJfcmVmMiIsIl9jYWxsZWUiLCJmb3JtRGF0YSIsInRva2VuIiwiZXJyb3JEYXRhIiwiX3QiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmb3JFYWNoIiwiYmxvYyIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiYWxlcnQiLCJtZXNzYWdlIiwiX3giLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm1hcCIsImtleSIsIm9uQ2xpY2siLCJhY2NlcHQiLCJzb3VyY2UiLCJkaXNhYmxlZCIsImNzdlVybCIsImVudHJpZXMiLCJfcmVmMyIsIl9yZWY0IiwiZm9sZGVyIiwibGFiZWwiLCJ0b1VwcGVyQ2FzZSIsIlRvb2xCdG4iLCJfcmVmNSIsInVzZVBhcmFtcyIsIkxpbmsiLCJWaWtpbmdQbGF5ZXIiLCJfYXJ0aWNsZSRibG9jcyIsIl9hcnRpY2xlJGF1dGhvciIsIl91c2VQYXJhbXMiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsInJlamVjdCIsImN1c3RvbVN0eWxlcyIsInJhd0NvbmZpZyIsImRlc2lnbkNvbmZpZyIsIkpTT04iLCJwYXJzZSIsImZpbmFsVGl0bGVDb2xvciIsInRpdGxlQ29sb3IiLCJmaW5hbENvbnRlbnRCZyIsImNvbnRlbnRCZyIsIm11c2ljQmxvYyIsImZpbmQiLCJiIiwibXVzaWNTcmMiLCJjb250ZW50QmxvY3MiLCJzb3J0IiwicG9zaXRpb24iLCJ0byIsImJhY2tncm91bmRDb2xvciIsImF1dG9QbGF5IiwicGFydHMiLCJzcGxpdCIsImF1dGhvciIsInBzZXVkbyIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIlBhcGEiLCJCYXJDaGFydCIsIkJhciIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJMaW5lQ2hhcnQiLCJMaW5lIiwiUGllQ2hhcnQiLCJQaWUiLCJDZWxsIiwiQ09MT1JTIiwiX3JlZiR2aXpUeXBlIiwic2V0RGF0YSIsInNldEVycm9yIiwidGV4dCIsImNzdlRleHQiLCJoZWFkZXIiLCJkeW5hbWljVHlwaW5nIiwic2tpcEVtcHR5TGluZXMiLCJjb21wbGV0ZSIsInJlc3VsdHMiLCJrZXlzIiwieEtleSIsInlLZXkiLCJyZW5kZXJDaGFydCIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZSIsImRhdGFLZXkiLCJjb250ZW50U3R5bGUiLCJib3JkZXJDb2xvciIsImNvbG9yIiwic3Ryb2tlV2lkdGgiLCJkb3QiLCJhY3RpdmVEb3QiLCJjeCIsImN5IiwibGFiZWxMaW5lIiwicGVyY2VudCIsInRvRml4ZWQiLCJvdXRlclJhZGl1cyIsImZpbGwiLCJuYW1lS2V5IiwiZW50cnkiLCJjdXJzb3IiLCJyYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIkRhdGFQcm92aWRlclNwYWNlIiwiZGF0YXNldHMiLCJzZXRGaWxlIiwicHJldmlldyIsInNldFByZXZpZXciLCJzZXRIZWFkZXJzIiwiY29sdW1uTWFwcGluZyIsInNldENvbHVtbk1hcHBpbmciLCJkYXRhc2V0TmFtZSIsInNldERhdGFzZXROYW1lIiwiaXNVcGxvYWRpbmciLCJzZXRJc1VwbG9hZGluZyIsInNlbGVjdGVkRmlsZSIsInJlcGxhY2UiLCJjb2xzIiwiaW5pdGlhbE1hcHBpbmciLCJoIiwidG9nZ2xlVHlwZSIsInByZXYiLCJoYW5kbGVVcGxvYWQiLCJwYXlsb2FkIiwibWV0YWRhdGEiLCJjb2x1bW5zIiwidXBsb2FkZWRBdCIsInRvSVNPU3RyaW5nIiwicm93Q291bnQiLCJzdHJpbmdpZnkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInJvdyIsImRzIiwicm93c0NvdW50IiwiRGVzaWduZXJTcGFjZSIsIl9hcnRpY2xlcyRmaW5kIiwiVklLSU5HX09SQU5HRV9ERUZBVUxUIiwiZ2xvYmFsQ29sb3IiLCJzZXRHbG9iYWxDb2xvciIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJzZWxlY3RlZEFydGljbGVJZCIsInNldFNlbGVjdGVkQXJ0aWNsZUlkIiwiYXJ0aWNsZVN0eWxlcyIsInNldEFydGljbGVTdHlsZXMiLCJpc1NhdmluZyIsInNldElzU2F2aW5nIiwiZmV0Y2hBcnRpY2xlcyIsImN1cnJlbnRDb2xvciIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidHJpbSIsIml0ZW1zIiwibWVtYmVyIiwiaGFuZGxlR2xvYmFsQ29sb3JQcmV2aWV3IiwibmV3Q29sb3IiLCJyZXNldEdsb2JhbENvbG9yIiwiX2NhbGxlZTIiLCJfdDIiLCJfY29udGV4dDIiLCJjb25maXJtIiwiaGFuZGxlU2F2ZUdsb2JhbFN0eWxlIiwiX2NhbGxlZTMiLCJfdDMiLCJfY29udGV4dDMiLCJtYWluQ29sb3IiLCJoYW5kbGVBcnRpY2xlU2VsZWN0IiwiY29uZmlnIiwiaGFuZGxlU2F2ZUFydGljbGVTdHlsZSIsIl9jYWxsZWU0IiwiX3Q0IiwiX2NvbnRleHQ0IiwiYXJ0IiwidXNlTmF2aWdhdGUiLCJqd3REZWNvZGUiLCJfdXNlciIsIl91c2VyMiIsIl91c2VyMyIsIm5hdmlnYXRlIiwidXNlciIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJjYW5TZWVEYXNoYm9hcmQiLCJyb2xlcyIsIkZyYWdtZW50IiwidXNlUmVmIiwiU3VzcGVuc2UiLCJDYW52YXMiLCJ1c2VGcmFtZSIsInVzZVRocmVlIiwidXNlR0xURiIsInVzZUFuaW1hdGlvbnMiLCJDZW50ZXIiLCJIdG1sIiwidXNlVGV4dHVyZSIsIlN0YXJzIiwiTU9ERUxfUEFUSCIsIlRFWFRVUkVfUEFUSCIsIkFOSU1BVElPTl9OQU1FIiwiRHJhZ29uTW9kZWwiLCJ2aXRlc3NlUm90YXRpb24iLCJ2aXRlc3NlQW5pbWF0aW9uIiwiZmFjdGV1clRhaWxsZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiX3VzZUdMVEYiLCJzY2VuZSIsImFuaW1hdGlvbnMiLCJ0ZXh0dXJlIiwiX3VzZVRocmVlIiwidmlld3BvcnQiLCJiYXNlU2NhbGUiLCJmaW5hbFNjYWxlIiwiZmxpcFkiLCJjb2xvclNwYWNlIiwiZ3JvdXAiLCJfdXNlQW5pbWF0aW9ucyIsImFjdGlvbnMiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJ0cmF2ZXJzZSIsImNoaWxkIiwiaXNNZXNoIiwibWF0ZXJpYWwiLCJuZWVkc1VwZGF0ZSIsImFjdGlvbiIsInJlc2V0IiwiZmFkZUluIiwicGxheSIsInRpbWVTY2FsZSIsInRvZ2dsZUFuaW1hdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsInBhdXNlZCIsImN1cnJlbnQiLCJyb3RhdGlvbiIsIl9leHRlbmRzIiwicmVmIiwib2JqZWN0Iiwib25Qb2ludGVyT3ZlciIsIm9uUG9pbnRlck91dCIsInNjYWxlIiwiTmlnaHRGdXJ5U2NlbmUiLCJyb3RTcGVlZCIsInNldFJvdFNwZWVkIiwiYW5pbVNwZWVkIiwic2V0QW5pbVNwZWVkIiwic2l6ZUZhY3RvciIsInNldFNpemVGYWN0b3IiLCJoYW5kbGVSZXNldCIsInNoYWRvd3MiLCJjYW1lcmEiLCJmb3YiLCJhdHRhY2giLCJhcmdzIiwiZGVwdGgiLCJjb3VudCIsImZhY3RvciIsInNhdHVyYXRpb24iLCJmYWRlIiwic3BlZWQiLCJpbnRlbnNpdHkiLCJmYWxsYmFjayIsImNlbnRlciIsInRvcCIsIm1pbiIsIm1heCIsInN0ZXAiLCJwYXJzZUZsb2F0IiwicHJlbG9hZCIsIl9yZWYkYXV0b1BsYXkiLCJhdWRpb1JlZiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImlzQmxvY2tlZCIsInNldElzQmxvY2tlZCIsInBsYXlQcm9taXNlIiwidW5kZWZpbmVkIiwidG9nZ2xlUGxheSIsInBhdXNlIiwiaGFuZGxlVGltZVVwZGF0ZSIsInRvdGFsIiwiZm9ybWF0VGltZSIsImhhbmRsZVNlZWsiLCJjbGllbnRXaWR0aCIsImNsaWNrWCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WCIsInRpbWUiLCJpc05hTiIsIk1hdGgiLCJmbG9vciIsInNlYyIsImJhcnMiLCJhbmltYXRpb25EdXJhdGlvbiIsInJhbmRvbSIsIm9uVGltZVVwZGF0ZSIsIm9uRW5kZWQiLCJvbkxvYWRlZE1ldGFkYXRhIiwidmlld0JveCIsIl9jdXJyZW50VXNlciIsIl9kYXRhJGFsbFVzZXJzIiwiX2RhdGEkbWFuYWdlbWVudEFydGljIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJjdXJyZW50VXNlciIsImlzRnVsbEFkbWluIiwiaXNQcm92aWRlciIsImlzRGVzaWduZXIiLCJpc0VkaXRvciIsImxvYWRTdGF0cyIsImhhbmRsZVByb21vdGUiLCJ1c2VySWQiLCJ1cGRhdGVkRGF0YSIsImFsbFVzZXJzIiwibmV3Um9sZXMiLCJ1c2Vyc0NvdW50IiwiYXJ0aWNsZXNDb3VudCIsInRvTG93ZXJDYXNlIiwiam9pbiIsIm1hbmFnZW1lbnRBcnRpY2xlcyIsInNldFVzZXIiLCJ2aWV3Iiwic2V0VmlldyIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwiZGVjb2RlZCIsImhhbmRsZURlbGV0ZSIsImFJZCIsInBvcCIsImhhbmRsZVN1Y2Nlc3MiLCJoYXNSb2xlIiwicm9sZSIsIl91c2VyJHJvbGVzIiwiY2FuQ3JlYXRlIiwiX2FydGljbGUkYXV0aG9yMiIsIl9hcnRpY2xlJGF1dGhvcjMiLCJjbGVhbklkIiwiaXNPd25lciIsInVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZXRJdGVtIiwiaHJlZiIsInBsYWluUGFzc3dvcmQiLCJzZXRGb3JtRGF0YSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIkFyY0VsZW1lbnQiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkRvdWdobnV0IiwicmVnaXN0ZXIiLCJib3hPZmZpY2VEYXRhIiwic2V0Qm94T2ZmaWNlRGF0YSIsInBvcHVsYXRpb25EYXRhIiwic2V0UG9wdWxhdGlvbkRhdGEiLCJ0aW1lbGluZURhdGEiLCJzZXRUaW1lbGluZURhdGEiLCJsb2FkQ1NWIiwidXJsIiwiY2FsbGJhY2siLCJ0eHQiLCJsaW5lcyIsInZhbHMiLCJyZWR1Y2UiLCJhY2MiLCJsYWJlbHMiLCJib3JkZXJXaWR0aCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwidGVuc2lvbiIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInBsdWdpbnMiLCJsZWdlbmQiLCJmb250IiwiZmFtaWx5Iiwic2NhbGVzIiwidGlja3MiLCJncmlkIiwieCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9