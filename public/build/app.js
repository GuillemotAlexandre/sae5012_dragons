"use strict";
(self["webpackChunksae5012_dragons"] = self["webpackChunksae5012_dragons"] || []).push([["app"],{

/***/ "./assets/app.js"
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/HomePage */ "./assets/pages/HomePage.jsx");
/* harmony import */ var _pages_ForumPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/ForumPage */ "./assets/pages/ForumPage.jsx");
/* harmony import */ var _pages_ArticlePage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/ArticlePage */ "./assets/pages/ArticlePage.jsx");
/* harmony import */ var _pages_StatsPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/StatsPage */ "./assets/pages/StatsPage.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Navbar */ "./assets/components/Navbar.jsx");
/* harmony import */ var _pages_RegisterPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/RegisterPage */ "./assets/pages/RegisterPage.jsx");
/* harmony import */ var _pages_LoginPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/LoginPage */ "./assets/pages/LoginPage.jsx");
/* harmony import */ var _components_ArticleShow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ArticleShow */ "./assets/components/ArticleShow.jsx");
/* harmony import */ var _pages_AdminDashboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/AdminDashboard */ "./assets/pages/AdminDashboard.jsx");




 // Ajout de useEffect



// Import des styles


// Import des pages









// NOUVEAU : Import de la page Dashboard Admin

console.log("🐲 Démarrage de l'application DragonCMS...");
var App = function App() {
  // --- SYSTÈME DE CHARGEMENT DU DESIGN ---
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    // On va chercher le fichier JSON généré par ton PHP
    fetch('/design_config.json').then(function (response) {
      if (!response.ok) throw new Error("Pas de config trouvée");
      return response.json();
    }).then(function (data) {
      if (data.primaryColor) {
        // On applique la couleur sauvegardée à la variable CSS
        document.documentElement.style.setProperty('--viking-orange', data.primaryColor);
        console.log("🎨 Design chargé depuis la forge :", data.primaryColor);
      }
    })["catch"](function () {
      console.log("ℹ️ Utilisation des couleurs par défaut du village.");
    });
  }, []); // S'exécute une seule fois au chargement
  // ---------------------------------------

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "min-h-screen flex flex-col font-sans text-viking-parchment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "w-full h-32 md:h-48 overflow-hidden border-b-4 border-viking-gold relative shadow-2xl bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", {
    src: "/images/banniere.png",
    alt: "Banni\xE8re Dragons",
    className: "w-full h-full object-cover object-center opacity-80 hover:opacity-100 transition duration-700"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-viking-dark to-transparent opacity-60"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "container mx-auto py-10 px-4 flex-grow relative z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_pages_HomePage__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/forum",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_pages_ForumPage__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/forum/article/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ArticleShow__WEBPACK_IMPORTED_MODULE_16__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/statistique",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_pages_StatsPage__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_pages_RegisterPage__WEBPACK_IMPORTED_MODULE_14__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_pages_LoginPage__WEBPACK_IMPORTED_MODULE_15__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/admin",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_pages_AdminDashboard__WEBPACK_IMPORTED_MODULE_17__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("footer", {
    className: "bg-viking-rock border-t border-viking-gold/30 py-6 mt-10 text-center text-viking-light font-dragon text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, "\xA9 L'Acad\xE9mie de Berk - Archives Draconiques"))));
};
var rootElement = document.getElementById('react-root');
if (rootElement) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_5__.createRoot)(rootElement);
  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(App, null));
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
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_23__);
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



























function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



 // 👈 Import du nouveau player

var ArticleShow = function ArticleShow() {
  var _article$blocs, _article$blocs2, _article$author;
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

  // 🔎 ON CHERCHE LA MUSIQUE ICI
  var musicBloc = (_article$blocs = article.blocs) === null || _article$blocs === void 0 ? void 0 : _article$blocs.find(function (b) {
    return b.type === 'music';
  });
  // On nettoie le chemin (parfois il a /uploads/..., parfois non)
  var musicSrc = musicBloc ? "/musique/".concat(musicBloc.content) : null;

  // On prépare les autres blocs (sans la musique pour éviter les doublons)
  var contentBlocs = ((_article$blocs2 = article.blocs) === null || _article$blocs2 === void 0 ? void 0 : _article$blocs2.filter(function (b) {
    return b.type !== 'music';
  }).sort(function (a, b) {
    return a.position - b.position;
  })) || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "max-w-4xl mx-auto p-8 min-h-screen bg-stone-900 border-x border-stone-800 shadow-2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Link, {
    to: "/forum",
    className: "text-stone-500 hover:text-viking-gold mb-8 inline-block text-sm uppercase tracking-widest"
  }, "\u2190 Retour au Hall"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("h1", {
    className: "text-5xl font-dragon text-viking-gold mb-6 text-center uppercase tracking-widest drop-shadow-lg"
  }, article.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "bg-stone-800/50 p-8 border-l-4 border-viking-gold mb-8 italic text-stone-300 text-lg leading-relaxed shadow-inner"
  }, article.summary), musicSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "mb-12 animate-fade-in-up"
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
          className: "mx-auto max-h-[500px] border-4 border-stone-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded"
        }));
      case 'stats':
      case 'viz':
        var parts = bloc.content ? bloc.content.split('::') : [];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
          key: bloc.id,
          className: "bg-black/40 border border-stone-700 p-6 rounded-lg my-8"
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
    className: "mt-20 pt-10 border-t border-stone-800 text-center text-stone-600 text-xs uppercase tracking-widest"
  }, "Grav\xE9 par ", ((_article$author = article.author) === null || _article$author === void 0 ? void 0 : _article$author.pseudo) || "Un inconnu", " \u2022 ", new Date(article.createdAt).toLocaleDateString()));
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

























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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          data: data
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          strokeDasharray: "3 3",
          stroke: "#444"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          dataKey: xKey,
          stroke: "#d4af37"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          stroke: "#d4af37"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          contentStyle: {
            backgroundColor: '#1c1917',
            borderColor: '#d4af37',
            color: '#fff'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            key: "cell-".concat(index),
            fill: COLORS[index % COLORS.length]
          });
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          contentStyle: {
            backgroundColor: '#1c1917',
            borderColor: '#d4af37',
            color: '#fff'
          }
        }));
      case 'bar':
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          data: data
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          strokeDasharray: "3 3",
          stroke: "#444"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          dataKey: xKey,
          stroke: "#d4af37"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          stroke: "#d4af37"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          cursor: {
            fill: '#333'
          },
          contentStyle: {
            backgroundColor: '#1c1917',
            borderColor: '#d4af37',
            color: '#fff'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          dataKey: yKey,
          fill: "#d4af37",
          radius: [4, 4, 0, 0]
        }));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "h-64 w-full mt-4 bg-black/40 p-4 border border-stone-800 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
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
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_27__);
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)('#e67e22'),
    _useState2 = _slicedToArray(_useState, 2),
    color = _useState2[0],
    setColor = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isSaving = _useState4[0],
    setIsSaving = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_27__.useEffect)(function () {
    var currentColor = getComputedStyle(document.documentElement).getPropertyValue('--viking-orange').trim();
    if (currentColor) {
      setColor(currentColor);
    }
  }, []);
  var handleColorChange = function handleColorChange(e) {
    var newColor = e.target.value;
    setColor(newColor);
    document.documentElement.style.setProperty('--viking-orange', newColor);
  };
  var handleValidate = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var token, response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setIsSaving(true);
            token = localStorage.getItem('token');
            _context.p = 1;
            _context.n = 2;
            return fetch('/api/admin/save-design', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(token)
              },
              body: JSON.stringify({
                color: color
              })
            });
          case 2:
            response = _context.v;
            if (response.ok) {
              alert("⚒️ Succès : Le village a adopté vos nouvelles couleurs !");
            } else {
              alert("⚠️ Erreur : Le Grand Conseil a refusé la modification.");
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error("Erreur lors de la sauvegarde:", _t);
            alert("❌ La forge est éteinte. Vérifiez votre connexion au serveur.");
          case 4:
            _context.p = 4;
            setIsSaving(false);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3, 4, 5]]);
    }));
    return function handleValidate() {
      return _ref.apply(this, arguments);
    };
  }();

  // --- NOUVELLE FONCTION DE RÉINITIALISATION ---
  var handleReset = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var token, response, defaultColor, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (window.confirm("Voulez-vous vraiment restaurer la couleur d'origine ?")) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            token = localStorage.getItem('token');
            _context2.p = 2;
            _context2.n = 3;
            return fetch('/api/admin/reset-design', {
              method: 'POST',
              headers: {
                'Authorization': "Bearer ".concat(token)
              }
            });
          case 3:
            response = _context2.v;
            if (response.ok) {
              defaultColor = '#e67e22'; // Orange original de Berk
              setColor(defaultColor);
              document.documentElement.style.setProperty('--viking-orange', defaultColor);
              alert("⚒️ Les archives ont été restaurées : retour à l'orange ancestral !");
            }
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.error("Erreur reset:", _t2);
            alert("❌ Impossible de réinitialiser les couleurs.");
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4]]);
    }));
    return function handleReset() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "bg-stone-900 border border-viking-gold/20 p-8 shadow-2xl rounded-lg animate-in fade-in duration-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("h2", {
    className: "text-2xl font-dragon text-viking-gold mb-6 uppercase tracking-widest"
  }, "Forge de l'Apparence"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "flex flex-col md:flex-row items-center gap-8 mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "flex flex-col items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    className: "text-[10px] uppercase text-stone-500 font-black"
  }, "Teinte du Titre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "color",
    value: color,
    onChange: handleColorChange,
    className: "w-24 h-24 cursor-pointer bg-transparent border-2 border-stone-700 rounded-xl hover:scale-105 transition-transform"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "flex-1 bg-black/40 p-8 rounded border border-stone-800 w-full text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("p", {
    className: "text-[10px] text-stone-600 uppercase mb-4 tracking-widest"
  }, "Rendu en direct"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("p", {
    style: {
      color: color
    },
    className: "text-5xl font-dragon uppercase tracking-widest transition-colors duration-300"
  }, "Riders of Berk"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("button", {
    onClick: handleValidate,
    disabled: isSaving,
    className: "w-full py-4 font-black uppercase tracking-[0.3em] transition-all rounded shadow-lg ".concat(isSaving ? 'bg-stone-800 text-stone-600 cursor-not-allowed' : 'bg-viking-gold text-black hover:bg-yellow-500 active:scale-95 shadow-yellow-900/20')
  }, isSaving ? 'Gravure en cours...' : 'Valider les changements'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("button", {
    onClick: handleReset,
    className: "w-full py-2 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors"
  }, "R\xE9initialiser la couleur par d\xE9faut")));
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/fiber'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/drei'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




















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
  var _useGLTF = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/drei'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(MODEL_PATH),
    scene = _useGLTF.scene,
    animations = _useGLTF.animations;
  var texture = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/drei'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(TEXTURE_PATH);
  var _useThree = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/fiber'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    viewport = _useThree.viewport;

  // Calcul de base responsive
  var baseScale = viewport.width < 5 ? 0.5 : 0.8;
  // 📏 CALCUL FINAL : Taille de base x Le curseur de l'utilisateur
  var finalScale = baseScale * facteurTaille;
  texture.flipY = false;
  texture.colorSpace = 'srgb';
  var group = (0,react__WEBPACK_IMPORTED_MODULE_26__.useRef)();
  var _useAnimations = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/drei'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(animations, group),
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
  Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/fiber'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/fiber'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    shadows: true,
    camera: {
      position: [0, 2, 10],
      fov: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("color", {
    attach: "background",
    args: ['#050510']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/drei'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
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
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/drei'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      center: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
      className: "text-white"
    }, "Invocation..."))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/drei'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/drei'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).preload(MODEL_PATH);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@react-three/drei'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).preload(TEXTURE_PATH);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_papaparse_papaparse_min_js-node_modules_react-dom_client_js-node_modules-59110d"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDekh4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm0uanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0FydGljbGVTaG93LmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9Dc3ZDaGFydC5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvRGF0YVByb3ZpZGVyU3BhY2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0Rlc2lnbmVyU3BhY2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvTmlnaHRGdXJ5LmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9WaWtpbmdQbGF5ZXIuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9BZG1pbkRhc2hib2FyZC5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0FydGljbGVQYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvRm9ydW1QYWdlLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvSG9tZVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Mb2dpblBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9SZWdpc3RlclBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9TdGF0c1BhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7IC8vIEFqb3V0IGRlIHVzZUVmZmVjdFxyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vIEltcG9ydCBkZXMgc3R5bGVzXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBJbXBvcnQgZGVzIHBhZ2VzXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3BhZ2VzL0hvbWVQYWdlJztcclxuaW1wb3J0IEZvcnVtUGFnZSBmcm9tICcuL3BhZ2VzL0ZvcnVtUGFnZSc7XHJcbmltcG9ydCBBcnRpY2xlUGFnZSBmcm9tICcuL3BhZ2VzL0FydGljbGVQYWdlJztcclxuaW1wb3J0IFN0YXRzUGFnZSBmcm9tICcuL3BhZ2VzL1N0YXRzUGFnZSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBSZWdpc3RlclBhZ2UgZnJvbSAnLi9wYWdlcy9SZWdpc3RlclBhZ2UnO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJy4vcGFnZXMvTG9naW5QYWdlJztcclxuaW1wb3J0IEFydGljbGVTaG93IGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlU2hvdyc7XHJcblxyXG4vLyBOT1VWRUFVIDogSW1wb3J0IGRlIGxhIHBhZ2UgRGFzaGJvYXJkIEFkbWluXHJcbmltcG9ydCBBZG1pbkRhc2hib2FyZCBmcm9tICcuL3BhZ2VzL0FkbWluRGFzaGJvYXJkJztcclxuXHJcbmNvbnNvbGUubG9nKFwi8J+QsiBEw6ltYXJyYWdlIGRlIGwnYXBwbGljYXRpb24gRHJhZ29uQ01TLi4uXCIpO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICAvLyAtLS0gU1lTVMOITUUgREUgQ0hBUkdFTUVOVCBEVSBERVNJR04gLS0tXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIE9uIHZhIGNoZXJjaGVyIGxlIGZpY2hpZXIgSlNPTiBnw6luw6lyw6kgcGFyIHRvbiBQSFBcclxuICAgICAgICBmZXRjaCgnL2Rlc2lnbl9jb25maWcuanNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIlBhcyBkZSBjb25maWcgdHJvdXbDqWVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnByaW1hcnlDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIGFwcGxpcXVlIGxhIGNvdWxldXIgc2F1dmVnYXJkw6llIMOgIGxhIHZhcmlhYmxlIENTU1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aWtpbmctb3JhbmdlJywgZGF0YS5wcmltYXJ5Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OqCBEZXNpZ24gY2hhcmfDqSBkZXB1aXMgbGEgZm9yZ2UgOlwiLCBkYXRhLnByaW1hcnlDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKEue+4jyBVdGlsaXNhdGlvbiBkZXMgY291bGV1cnMgcGFyIGTDqWZhdXQgZHUgdmlsbGFnZS5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pOyAvLyBTJ2V4w6ljdXRlIHVuZSBzZXVsZSBmb2lzIGF1IGNoYXJnZW1lbnRcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgZm9udC1zYW5zIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIEJBTk5Jw4hSRSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgbWQ6aC00OCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWItNCBib3JkZXItdmlraW5nLWdvbGQgcmVsYXRpdmUgc2hhZG93LTJ4bCBiZy1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvYmFubmllcmUucG5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkJhbm5pw6hyZSBEcmFnb25zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXZpa2luZy1kYXJrIHRvLXRyYW5zcGFyZW50IG9wYWNpdHktNjBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LTEwIHB4LTQgZmxleC1ncm93IHJlbGF0aXZlIHotMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZVBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2ZvcnVtXCIgZWxlbWVudD17PEZvcnVtUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxSb3V0ZSBwYXRoPVwiL2ZvcnVtL2FydGljbGUvOmlkXCIgZWxlbWVudD17PEFydGljbGVQYWdlIC8+fSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ydW0vYXJ0aWNsZS86aWRcIiBlbGVtZW50PXs8QXJ0aWNsZVNob3cgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3N0YXRpc3RpcXVlXCIgZWxlbWVudD17PFN0YXRzUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBlbGVtZW50PXs8UmVnaXN0ZXJQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpblBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTk9VVkVMTEUgUk9VVEUgOiBTYWxsZSBkdSBDb25zZWlsIChBZG1pbikgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FkbWluXCIgZWxlbWVudD17PEFkbWluRGFzaGJvYXJkIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBib3JkZXItdCBib3JkZXItdmlraW5nLWdvbGQvMzAgcHktNiBtdC0xMCB0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1saWdodCBmb250LWRyYWdvbiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+wqkgTCdBY2Fkw6ltaWUgZGUgQmVyayAtIEFyY2hpdmVzIERyYWNvbmlxdWVzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1yb290Jyk7XHJcbmlmIChyb290RWxlbWVudCkge1xyXG4gICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3Qocm9vdEVsZW1lbnQpO1xyXG4gICAgcm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiAgICBjb25zb2xlLmxvZyhcIuKchSBSZWFjdCBpbmplY3TDqSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxufSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgSW1wb3NzaWJsZSBkZSB0cm91dmVyIGwnw6lsw6ltZW50ICNyZWFjdC1yb290XCIpO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbi8vIPCfkYcgMS4gSU1QT1JUIERVIEdSQVBISVFVRSAoSW5kaXNwZW5zYWJsZSlcclxuaW1wb3J0IENzdkNoYXJ0IGZyb20gJy4vQ3N2Q2hhcnQnOyBcclxuXHJcbmNvbnN0IEFydGljbGVGb3JtID0gKHsgaWQgPSBudWxsLCBvblN1Y2Nlc3MgfSkgPT4ge1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc3VtbWFyeSwgc2V0U3VtbWFyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYmxvY3MsIHNldEJsb2NzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgLy8gSW5pdGlhbGlzYXRpb24gYXZlYyBkZXMgdGFibGVhdXggdmlkZXMgcG91ciDDqXZpdGVyIGxlcyBjcmFzaHNcclxuICAgIGNvbnN0IFttdXNpY0xpYnJhcnksIHNldE11c2ljTGlicmFyeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGF0YXNldExpYnJhcnksIHNldERhdGFzZXRMaWJyYXJ5XSA9IHVzZVN0YXRlKFtdKTsgXHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8vIC0tLSBDSEFSR0VNRU5UIERFUyBET05Ow4lFUyAtLS1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gMS4gTXVzaXF1ZXNcclxuICAgICAgICBmZXRjaCgnL2FwaS9tdXNpYy9saXN0JylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5vayA/IHJlcy5qc29uKCkgOiBbXSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkgc2V0TXVzaWNMaWJyYXJ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbXVzaXF1ZVwiLCBlcnIpKTtcclxuXHJcbiAgICAgICAgLy8gMi4gRGF0YXNldHMgKENTVikgLSDwn5GHIEMnRVNUIElDSSBRVSdJTCBGQVVUIENIQU5HRVIgIVxyXG4gICAgICAgIC8vIEF2YW50IGMnw6l0YWl0IDogZmV0Y2goJy9hcGkvZGF0YXNldHMvbGlzdCcpXHJcbiAgICAgICAgLy8gTWFpbnRlbmFudCBjJ2VzdCA6XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvbGlzdC1kYXRhc2V0cycpIFxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBBUEkgRGF0YXNldFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9ubsOpZXMgcmXDp3VlcyBwb3VyIGxlIGdyYXBoaXF1ZSA6XCIsIGRhdGEpOyAvLyDwn5GAIFJlZ2FyZGUgdGEgY29uc29sZSBGMTJcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhc2V0TGlicmFyeShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YXNldExpYnJhcnkoW10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbXBvc3NpYmxlIGRlIGNoYXJnZXIgbGVzIGRhdGFzZXRzXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhc2V0TGlicmFyeShbXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIC0tLSBHRVNUSU9OIERFUyBCTE9DUyAtLS1cclxuICAgIGNvbnN0IGFkZEJsb2MgPSAodHlwZSkgPT4ge1xyXG4gICAgICAgIHNldEJsb2NzKFsuLi5ibG9jcywgeyBcclxuICAgICAgICAgICAgdHlwZSwgXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLCBcclxuICAgICAgICAgICAgbWVkaWFVcmw6ICcnLCBcclxuICAgICAgICAgICAgdml6VHlwZTogJ2JhcicsIFxyXG4gICAgICAgICAgICBmaWxlOiBudWxsLCAgIFxyXG4gICAgICAgICAgICBpZDogRGF0ZS5ub3coKVxyXG4gICAgICAgIH1dKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQmxvYyA9IChpbmRleFRvUmVtb3ZlKSA9PiB7XHJcbiAgICAgICAgc2V0QmxvY3MoYmxvY3MuZmlsdGVyKChfLCBpbmRleCkgPT4gaW5kZXggIT09IGluZGV4VG9SZW1vdmUpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQmxvYyA9IChpbmRleCwgZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3QmxvY3MgPSBbLi4uYmxvY3NdO1xyXG4gICAgICAgIG5ld0Jsb2NzW2luZGV4XVtmaWVsZF0gPSB2YWx1ZTtcclxuICAgICAgICBzZXRCbG9jcyhuZXdCbG9jcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoaW5kZXgsIGUpID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgdXBkYXRlQmxvYyhpbmRleCwgJ2ZpbGUnLCBmaWxlKTtcclxuICAgICAgICAgICAgaWYgKGZpbGUudHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKSkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQmxvYyhpbmRleCwgJ21lZGlhVXJsJywgVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLSBTT1VNSVNTSU9OIC0tLVxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdGl0bGUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc3VtbWFyeScsIHN1bW1hcnkpO1xyXG5cclxuICAgICAgICBibG9jcy5mb3JFYWNoKChibG9jLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVt0eXBlXWAsIGJsb2MudHlwZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgYmxvY3NbJHtpbmRleH1dW3Bvc2l0aW9uXWAsIGluZGV4ICsgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoWydoMicsICdwYXJhZ3JhcGgnXS5pbmNsdWRlcyhibG9jLnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVtjb250ZW50XWAsIGJsb2MuY29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChibG9jLnR5cGUgPT09ICdpbWFnZScgJiYgYmxvYy5maWxlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGJsb2NzWyR7aW5kZXh9XVtpbWFnZUZpbGVdYCwgYmxvYy5maWxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJsb2MudHlwZSA9PT0gJ3N0YXRzJykge1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bdml6VHlwZV1gLCBibG9jLnZpelR5cGUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bY3N2UGF0aF1gLCBibG9jLm1lZGlhVXJsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJsb2MudHlwZSA9PT0gJ211c2ljJykge1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBibG9jc1ske2luZGV4fV1bbXVzaWNGaWxlTmFtZV1gLCBibG9jLm1lZGlhVXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2N1c3RvbS9hcnRpY2xlcy9jcmVhdGUnLCB7IFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlZvdHJlIHLDqWNpdCBhIMOpdMOpIGdyYXbDqSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxuICAgICAgICAgICAgICAgIG9uU3VjY2VzcygpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIDogXCIgKyAoZXJyb3JEYXRhLm1lc3NhZ2UgfHwgXCJQcm9ibMOobWUgc2VydmV1clwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgc2VydmV1ciBjcml0aXF1ZS5cIik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBwLTggYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgc2hhZG93LTJ4bCBtYXgtdy00eGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi04IHRleHQtY2VudGVyIHVwcGVyY2FzZVwiPk5vdXZlbGxlIENocm9uaXF1ZTwvaDI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCB0ZXh0LXdoaXRlIHAtNCB0ZXh0LTJ4bCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkXCIgcGxhY2Vob2xkZXI9XCJUaXRyZS4uLlwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17c3VtbWFyeX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRTdW1tYXJ5KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHRleHQtc3RvbmUtMzAwIHAtNCBoLTI0IG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGRcIiBwbGFjZWhvbGRlcj1cIlLDqXN1bcOpLi4uXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICB7YmxvY3MubWFwKChibG9jLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtibG9jLmlkfSBjbGFzc05hbWU9XCJiZy1zdG9uZS04MDAvNTAgcC02IGJvcmRlci1sLTQgYm9yZGVyLXZpa2luZy1nb2xkIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUJsb2MoaW5kZXgpfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIHRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtcmVkLTUwMCB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhbnNpdGlvblwiPlN1cHByaW1lcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCBtYi00IHRyYWNraW5nLXdpZGVzdFwiPkJsb2Mge2luZGV4ICsgMX0gOiB7YmxvYy50eXBlfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIMiAmIFBhcmFncmFwaCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MudHlwZSA9PT0gJ2gyJyAmJiA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17YmxvYy5jb250ZW50fSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICdjb250ZW50JywgZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0zIHRleHQtd2hpdGUgZm9udC1ib2xkXCIgcGxhY2Vob2xkZXI9XCJTb3VzLXRpdHJlLi4uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdwYXJhZ3JhcGgnICYmIDx0ZXh0YXJlYSB2YWx1ZT17YmxvYy5jb250ZW50fSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICdjb250ZW50JywgZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zdG9uZS02MDAgcC0zIHRleHQtc3RvbmUtMzAwIGgtMzJcIiBwbGFjZWhvbGRlcj1cIlRleHRlLi4uXCIgLz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogSW1hZ2UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdpbWFnZScgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlQ2hhbmdlKGluZGV4LCBlKX0gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDAgdGV4dC1zbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MubWVkaWFVcmwgJiYgPGltZyBzcmM9e2Jsb2MubWVkaWFVcmx9IGFsdD1cIlByZXZpZXdcIiBjbGFzc05hbWU9XCJtdC00IG1heC1oLTQwIGJvcmRlciBib3JkZXItc3RvbmUtNjAwXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDwn5GHIExFIEJMT0MgR1JBUEhJUVVFIENPUlJJR8OJICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvYy50eXBlID09PSAnc3RhdHMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdGV4dC14cyBtYi0xIGJsb2NrIHVwcGVyY2FzZSBmb250LWJvbGRcIj5Eb25uw6llcyAoQ1NWKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvYyhpbmRleCwgJ21lZGlhVXJsJywgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBib3JkZXIgYm9yZGVyLXN0b25lLTYwMCBwLTMgdGV4dC13aGl0ZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmxvYy5tZWRpYVVybCB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBDaG9pc2lyIHVuIGpldSBkZSBkb25uw6llcyAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDwn5GHIFPDiUNVUklUw4kgTUFYSU1BTEUgSUNJICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KGRhdGFzZXRMaWJyYXJ5KSAmJiBkYXRhc2V0TGlicmFyeS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0TGlicmFyeS5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZC5pZH0gdmFsdWU9e2Quc291cmNlfT57ZC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+QXVjdW5lIGRvbm7DqWUgZGlzcG9uaWJsZSAob3UgY2hhcmdlbWVudC4uLik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHRleHQteHMgbWItMSBibG9jayB1cHBlcmNhc2UgZm9udC1ib2xkXCI+VHlwZSBkZSBHcmFwaGlxdWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1snYmFyJywgJ2xpbmUnLCAncGllJ10ubWFwKHR5cGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICd2aXpUeXBlJywgdHlwZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTIgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIGJvcmRlciB0cmFuc2l0aW9uICR7YmxvYy52aXpUeXBlID09PSB0eXBlID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgYm9yZGVyLXZpa2luZy1nb2xkJyA6ICdiZy1ibGFjayB0ZXh0LXN0b25lLTUwMCBib3JkZXItc3RvbmUtNzAwIGhvdmVyOnRleHQtd2hpdGUnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHLDqXZpc3VhbGlzYXRpb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay8yMCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1bMjAwcHhdIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2MubWVkaWFVcmwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3N2Q2hhcnQgY3N2VXJsPXtibG9jLm1lZGlhVXJsfSB2aXpUeXBlPXtibG9jLnZpelR5cGUgfHwgJ2Jhcid9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIGl0YWxpY1wiPlPDqWxlY3Rpb25uZXogdW4gZmljaGllci4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE11c2lxdWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jLnR5cGUgPT09ICdtdXNpYycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUJsb2MoaW5kZXgsICdtZWRpYVVybCcsIGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIGJvcmRlciBib3JkZXItc3RvbmUtNjAwIHAtMyB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIENob2lzaXIgdW5lIG3DqWxvZGllIC0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge211c2ljTGlicmFyeSAmJiBPYmplY3QuZW50cmllcyhtdXNpY0xpYnJhcnkpLm1hcCgoW2ZvbGRlciwgZmlsZXNdKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRncm91cCBrZXk9e2ZvbGRlcn0gbGFiZWw9e2ZvbGRlci50b1VwcGVyQ2FzZSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KGZpbGVzKSAmJiBmaWxlcy5tYXAoZmlsZSA9PiA8b3B0aW9uIGtleT17ZmlsZX0gdmFsdWU9e2Ake2ZvbGRlcn0vJHtmaWxlfWB9PntmaWxlfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0Z3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTIganVzdGlmeS1jZW50ZXIgbWItMTAgcGItMTAgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJUaXRyZSBIMlwiIG9uQ2xpY2s9eygpID0+IGFkZEJsb2MoJ2gyJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbEJ0biBsYWJlbD1cIlBhcmFncmFwaGVcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdwYXJhZ3JhcGgnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxUb29sQnRuIGxhYmVsPVwiSW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdpbWFnZScpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJHcmFwaGlxdWVcIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jKCdzdGF0cycpfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xCdG4gbGFiZWw9XCJNdXNpcXVlXCIgb25DbGljaz17KCkgPT4gYWRkQmxvYygnbXVzaWMnKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17bG9hZGluZ30gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayB1cHBlcmNhc2UgcHktNCBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LVswXzBfMjBweF9yZ2JhKDIxMiwxNzUsNTUsMC40KV0gZGlzYWJsZWQ6b3BhY2l0eS01MFwiPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAnR3JhdnVyZSBlbiBjb3Vycy4uLicgOiAnUHVibGllciBsYSBDaHJvbmlxdWUnfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgVG9vbEJ0biA9ICh7IGxhYmVsLCBvbkNsaWNrIH0pID0+IChcclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1zdG9uZS04MDAgdGV4dC1zdG9uZS0zMDAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6Ym9yZGVyLXZpa2luZy1nb2xkIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGQgdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICArIHtsYWJlbH1cclxuICAgIDwvYnV0dG9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUZvcm07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgQ3N2Q2hhcnQgZnJvbSAnLi9Dc3ZDaGFydCc7XHJcbmltcG9ydCBWaWtpbmdQbGF5ZXIgZnJvbSAnLi9WaWtpbmdQbGF5ZXInOyAvLyDwn5GIIEltcG9ydCBkdSBub3V2ZWF1IHBsYXllclxyXG5cclxuY29uc3QgQXJ0aWNsZVNob3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QoXCJFcnJldXJcIikpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4geyBzZXRBcnRpY2xlKGRhdGEpOyBzZXRMb2FkaW5nKGZhbHNlKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgc2V0TG9hZGluZyhmYWxzZSk7IH0pO1xyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWdvbGQgcC0xMCBhbmltYXRlLXB1bHNlXCI+SW52b2NhdGlvbiBkdSByw6ljaXQuLi48L2Rpdj47XHJcbiAgICBpZiAoIWFydGljbGUpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcmVkLTUwMCBwLTEwXCI+UGFyY2hlbWluIGludHJvdXZhYmxlLjwvZGl2PjtcclxuXHJcbiAgICAvLyDwn5SOIE9OIENIRVJDSEUgTEEgTVVTSVFVRSBJQ0lcclxuICAgIGNvbnN0IG11c2ljQmxvYyA9IGFydGljbGUuYmxvY3M/LmZpbmQoYiA9PiBiLnR5cGUgPT09ICdtdXNpYycpO1xyXG4gICAgLy8gT24gbmV0dG9pZSBsZSBjaGVtaW4gKHBhcmZvaXMgaWwgYSAvdXBsb2Fkcy8uLi4sIHBhcmZvaXMgbm9uKVxyXG4gICAgY29uc3QgbXVzaWNTcmMgPSBtdXNpY0Jsb2MgPyBgL211c2lxdWUvJHttdXNpY0Jsb2MuY29udGVudH1gIDogbnVsbDtcclxuXHJcbiAgICAvLyBPbiBwcsOpcGFyZSBsZXMgYXV0cmVzIGJsb2NzIChzYW5zIGxhIG11c2lxdWUgcG91ciDDqXZpdGVyIGxlcyBkb3VibG9ucylcclxuICAgIGNvbnN0IGNvbnRlbnRCbG9jcyA9IGFydGljbGUuYmxvY3M/LmZpbHRlcihiID0+IGIudHlwZSAhPT0gJ211c2ljJykuc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pIHx8IFtdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTggbWluLWgtc2NyZWVuIGJnLXN0b25lLTkwMCBib3JkZXIteCBib3JkZXItc3RvbmUtODAwIHNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIG1iLTggaW5saW5lLWJsb2NrIHRleHQtc20gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPuKGkCBSZXRvdXIgYXUgSGFsbDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgdGV4dC1jZW50ZXIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBkcm9wLXNoYWRvdy1sZ1wiPnthcnRpY2xlLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTgwMC81MCBwLTggYm9yZGVyLWwtNCBib3JkZXItdmlraW5nLWdvbGQgbWItOCBpdGFsaWMgdGV4dC1zdG9uZS0zMDAgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgc2hhZG93LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiDwn461IExFIFBMQVlFUiBFU1QgSUNJIChKdXN0ZSBzb3VzIGxlIHLDqXN1bcOpKSAqL31cclxuICAgICAgICAgICAge211c2ljU3JjICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTIgYW5pbWF0ZS1mYWRlLWluLXVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpa2luZ1BsYXllciBzcmM9e211c2ljU3JjfSBhdXRvUGxheT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIExlIHJlc3RlIGR1IGNvbnRlbnUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xMlwiPlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnRCbG9jcy5tYXAoKGJsb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGJsb2MudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdoMic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGgyIGtleT17YmxvYy5pZH0gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTcwMCBwYi0yIG10LThcIj57YmxvYy5jb250ZW50fTwvaDI+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncGFyYWdyYXBoJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2Jsb2MuaWR9IGNsYXNzTmFtZT1cInRleHQtc3RvbmUtMzAwIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWxnIHdoaXRlc3BhY2UtcHJlLWxpbmUgdGV4dC1qdXN0aWZ5XCI+e2Jsb2MuY29udGVudH08L3A+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGtleT17YmxvYy5pZH0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmxvYy5jb250ZW50fSBhbHQ9XCJJbGx1c3RyYXRpb25cIiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC1oLVs1MDBweF0gYm9yZGVyLTQgYm9yZGVyLXN0b25lLTgwMCBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMCwwLDAsMC41KV0gcm91bmRlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RhdHMnOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndml6JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gYmxvYy5jb250ZW50ID8gYmxvYy5jb250ZW50LnNwbGl0KCc6OicpIDogW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtibG9jLmlkfSBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBwLTYgcm91bmRlZC1sZyBteS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtYm9sZCB0ZXh0LXNtIHVwcGVyY2FzZSBtYi00IHRyYWNraW5nLXdpZGVzdCB0ZXh0LWNlbnRlclwiPvCfk4ogRG9ubsOpZXMgZHUgQ2xhbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC05NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENzdkNoYXJ0IGNzdlVybD17cGFydHNbMV19IHZpelR5cGU9e3BhcnRzWzBdIHx8ICdiYXInfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgcHQtMTAgYm9yZGVyLXQgYm9yZGVyLXN0b25lLTgwMCB0ZXh0LWNlbnRlciB0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgIEdyYXbDqSBwYXIge2FydGljbGUuYXV0aG9yPy5wc2V1ZG8gfHwgXCJVbiBpbmNvbm51XCJ9IOKAoiB7bmV3IERhdGUoYXJ0aWNsZS5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlU2hvdzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcclxuaW1wb3J0IHsgXHJcbiAgQmFyQ2hhcnQsIEJhciwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBMZWdlbmQsIFJlc3BvbnNpdmVDb250YWluZXIsXHJcbiAgTGluZUNoYXJ0LCBMaW5lLCBQaWVDaGFydCwgUGllLCBDZWxsIFxyXG59IGZyb20gJ3JlY2hhcnRzJztcclxuXHJcbmNvbnN0IENPTE9SUyA9IFsnI2Q0YWYzNycsICcjYjkxYzFjJywgJyMxYzE5MTcnLCAnIzU3NTM0ZScsICcjYThhMjllJ107IC8vIENvdWxldXJzIFZpa2luZyAoT3IsIFJvdWdlLCBOb2lyLi4uKVxyXG5cclxuY29uc3QgQ3N2Q2hhcnQgPSAoeyBjc3ZVcmwsIHZpelR5cGUgPSAnYmFyJyB9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWNzdlVybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIC8vIDEuIE9uIHZhIGNoZXJjaGVyIGxlIGZpY2hpZXIgQ1NWIHZpYSBzb24gVVJMXHJcbiAgICAgICAgZmV0Y2goY3N2VXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJJbXBvc3NpYmxlIGRlIGxpcmUgbGUgcGFyY2hlbWluIGRlIGRvbm7DqWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oY3N2VGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAyLiBPbiBsZSB0cmFuc2Zvcm1lIGVuIEpTT04gdXRpbGlzYWJsZVxyXG4gICAgICAgICAgICAgICAgUGFwYS5wYXJzZShjc3ZUZXh0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB0cnVlLCAvLyBMYSBwcmVtacOocmUgbGlnbmUgY29udGllbnQgbGVzIHRpdHJlc1xyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNUeXBpbmc6IHRydWUsIC8vIENvbnZlcnRpdCBsZXMgXCIxMFwiIGVuIG5vbWJyZXMgMTBcclxuICAgICAgICAgICAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXN1bHRzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKFwiTGUgZmljaGllciBlc3QgaWxsaXNpYmxlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW2NzdlVybF0pO1xyXG5cclxuICAgIGlmICghY3N2VXJsKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgaXRhbGljIHRleHQteHNcIj5BdWN1bmUgZG9ubsOpZSBzw6lsZWN0aW9ubsOpZS48L3A+O1xyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGFuaW1hdGUtcHVsc2UgdGV4dC14c1wiPkTDqWNoaWZmcmFnZSBkZXMgcnVuZXMuLi48L3A+O1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQteHNcIj5FcnJldXIgOiB7ZXJyb3J9PC9wPjtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHRleHQteHNcIj5MZSBmaWNoaWVyIGVzdCB2aWRlLjwvcD47XHJcblxyXG4gICAgLy8gT24gZGV2aW5lIGxlcyBjbMOpcyAoWCA9IHByZW1pw6hyZSBjb2xvbm5lLCBZID0gZGV1eGnDqG1lIGNvbG9ubmUpXHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XHJcbiAgICBjb25zdCB4S2V5ID0ga2V5c1swXTsgLy8gRXg6IFwiQW5uw6llXCIgb3UgXCJEcmFnb25cIlxyXG4gICAgY29uc3QgeUtleSA9IGtleXNbMV07IC8vIEV4OiBcIlBvcHVsYXRpb25cIiBvdSBcIlZpdGVzc2VcIlxyXG5cclxuICAgIGNvbnN0IHJlbmRlckNoYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAodml6VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmVDaGFydCBkYXRhPXtkYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgc3Ryb2tlPVwiIzQ0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PXt4S2V5fSBzdHJva2U9XCIjZDRhZjM3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFlBeGlzIHN0cm9rZT1cIiNkNGFmMzdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50U3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFjMTkxNycsIGJvcmRlckNvbG9yOiAnI2Q0YWYzNycsIGNvbG9yOiAnI2ZmZicgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZ2VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PXt5S2V5fSBzdHJva2U9XCIjZDRhZjM3XCIgc3Ryb2tlV2lkdGg9ezN9IGRvdD17eyByOiA2IH19IGFjdGl2ZURvdD17eyByOiA4IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlICdwaWUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UGllQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeT1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbExpbmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eyh7IG5hbWUsIHBlcmNlbnQgfSkgPT4gYCR7bmFtZX0gJHsocGVyY2VudCAqIDEwMCkudG9GaXhlZCgwKX0lYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyUmFkaXVzPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODg4NGQ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFLZXk9e3lLZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lS2V5PXt4S2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsIGtleT17YGNlbGwtJHtpbmRleH1gfSBmaWxsPXtDT0xPUlNbaW5kZXggJSBDT0xPUlMubGVuZ3RoXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BpZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxYzE5MTcnLCBib3JkZXJDb2xvcjogJyNkNGFmMzcnLCBjb2xvcjogJyNmZmYnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QaWVDaGFydD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jhcic6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXtkYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgc3Ryb2tlPVwiIzQ0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PXt4S2V5fSBzdHJva2U9XCIjZDRhZjM3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFlBeGlzIHN0cm9rZT1cIiNkNGFmMzdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjdXJzb3I9e3tmaWxsOiAnIzMzMyd9fSBjb250ZW50U3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFjMTkxNycsIGJvcmRlckNvbG9yOiAnI2Q0YWYzNycsIGNvbG9yOiAnI2ZmZicgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZ2VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9e3lLZXl9IGZpbGw9XCIjZDRhZjM3XCIgcmFkaXVzPXtbNCwgNCwgMCwgMF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYXJDaGFydD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02NCB3LWZ1bGwgbXQtNCBiZy1ibGFjay80MCBwLTQgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyQ2hhcnQoKX1cclxuICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENzdkNoYXJ0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcclxuXHJcbmNvbnN0IERhdGFQcm92aWRlclNwYWNlID0gKHsgZGF0YXNldHMgfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaGVhZGVycywgc2V0SGVhZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY29sdW1uTWFwcGluZywgc2V0Q29sdW1uTWFwcGluZ10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZGF0YXNldE5hbWUsIHNldERhdGFzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNldEZpbGUoc2VsZWN0ZWRGaWxlKTtcclxuICAgICAgICBzZXREYXRhc2V0TmFtZShzZWxlY3RlZEZpbGUubmFtZS5yZXBsYWNlKCcuY3N2JywgJycpKTtcclxuXHJcbiAgICAgICAgUGFwYS5wYXJzZShzZWxlY3RlZEZpbGUsIHtcclxuICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcclxuICAgICAgICAgICAgcHJldmlldzogNSxcclxuICAgICAgICAgICAgY29tcGxldGU6IChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xzID0gT2JqZWN0LmtleXMocmVzdWx0cy5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXJzKGNvbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByZXZpZXcocmVzdWx0cy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsTWFwcGluZyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHMuZm9yRWFjaChoID0+IGluaXRpYWxNYXBwaW5nW2hdID0gJ2NhdGVnb3JpY2FsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29sdW1uTWFwcGluZyhpbml0aWFsTWFwcGluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlVHlwZSA9IChoZWFkZXIpID0+IHtcclxuICAgICAgICBzZXRDb2x1bW5NYXBwaW5nKHByZXYgPT4gKHtcclxuICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgW2hlYWRlcl06IHByZXZbaGVhZGVyXSA9PT0gJ2NhdGVnb3JpY2FsJyA/ICdudW1lcmljYWwnIDogJ2NhdGVnb3JpY2FsJ1xyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgICAgIC8vIFByw6lwYXJhdGlvbiBkdSBwYXlsb2FkIGNvbmZvcm1lIMOgIEFQSSBQbGF0Zm9ybVxyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGFzZXROYW1lLFxyXG4gICAgICAgICAgICBzb3VyY2U6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbk1hcHBpbmcsXHJcbiAgICAgICAgICAgICAgICB1cGxvYWRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICByb3dDb3VudDogcHJldmlldy5sZW5ndGggLy8gSW5mb3JtYXRpb24gdXRpbGUgcG91ciB0b24gYWZmaWNoYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2RhdGFzZXRzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGNydWNpYWwgaWNpIHBvdXIgw6l2aXRlciBsJ2VycmV1ciA0MTVcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQYXJjaGVtaW4gZGUgZG9ubsOpZXMgZW5yZWdpc3Ryw6kgZGFucyBsYSBiaWJsaW90aMOocXVlIGQnT2RpbiAhXCIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSw6lwb25zZSBkdSBzZXJ2ZXVyIDpcIiwgZXJyb3JEYXRhKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIDogTGUgU2NyaWJlIHJlZnVzZSBsZSBmb3JtYXQgZHUgZmljaGllci5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIHLDqXNlYXVcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgYW5pbWF0ZS1mYWRlSW5cIj5cclxuICAgICAgICAgICAgey8qIEZvcm11bGFpcmUgZCdpbXBvcnRhdGlvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBwLTYgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCByb3VuZGVkLWxnIHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgZm9udC1kcmFnb24gdGV4dC14bCBtYi00IHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5Ob3V2ZWxsZSBBcmNoaXZlIGRlIERvbm7DqWVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zdG9uZS01MDAgdGV4dC1bMTBweF0gdXBwZXJjYXNlIGZvbnQtYmxhY2sgbWItMlwiPkZpY2hpZXIgQ1NWIHVuaXF1ZW1lbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIi5jc3ZcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCB0ZXh0LXNtIHRleHQtc3RvbmUtNDAwIGZpbGU6bXItNCBmaWxlOnB5LTIgZmlsZTpweC00IGZpbGU6cm91bmRlZCBmaWxlOmJvcmRlci0wIGZpbGU6dGV4dC14cyBmaWxlOmZvbnQtYmxhY2sgZmlsZTp1cHBlcmNhc2UgZmlsZTpiZy12aWtpbmctZ29sZCBmaWxlOnRleHQtYmxhY2sgaG92ZXI6ZmlsZTpiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpbGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LWF1dG8gcHQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9IGRpc2FibGVkPXtpc1VwbG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWZpcmUgdGV4dC13aGl0ZSBweS0zIHB4LTggZm9udC1ibGFjayB1cHBlcmNhc2UgdGV4dC14cyBzaGFkb3ctbGcgaG92ZXI6c2NhbGUtMTA1IGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOmdyYXlzY2FsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzVXBsb2FkaW5nID8gJ0dyYXZ1cmUuLi4nIDogJ1NjZWxsZXIgbFxcJ0FyY2hpdmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQXBlcsOndSBUZWNobmlxdWUgKi99XHJcbiAgICAgICAgICAgIHtwcmV2aWV3Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAvODAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8xMCByb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgcC0zIGJvcmRlci1iIGJvcmRlci13aGl0ZS81XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRleHQtdmlraW5nLWdvbGQvNTBcIj5BbmFseXNlIGRlIGxhIHN0cnVjdHVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBib3JkZXItY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctYmxhY2svNjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcnMubWFwKGggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aH0gY2xhc3NOYW1lPVwicC00IGJvcmRlci1yIGJvcmRlci13aGl0ZS81IG1pbi13LVsxNTBweF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0zIHRydW5jYXRlXCI+e2h9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlVHlwZShoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1bOXB4XSBweC0zIHB5LTEgcm91bmRlZC1mdWxsIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXIgdHJhbnNpdGlvbi1jb2xvcnMgJHtjb2x1bW5NYXBwaW5nW2hdID09PSAnbnVtZXJpY2FsJyA/ICdiZy1ibHVlLTYwMC8yMCB0ZXh0LWJsdWUtNDAwIGJvcmRlciBib3JkZXItYmx1ZS01MDAvMzAnIDogJ2JnLWVtZXJhbGQtNjAwLzIwIHRleHQtZW1lcmFsZC00MDAgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTUwMC8zMCd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5NYXBwaW5nW2hdID09PSAnbnVtZXJpY2FsJyA/ICfwn5SiIE51bcOpcmlxdWUnIDogJ/CflKQgQ2F0w6lnb3JpZWwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXZpZXcubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcnMubWFwKGggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2h9IGNsYXNzTmFtZT1cInAtNCB0ZXh0LVsxMXB4XSB0ZXh0LXN0b25lLTQwMCBib3JkZXItciBib3JkZXItd2hpdGUvNSBpdGFsaWNcIj57cm93W2hdfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBBcmNoaXZlcyBleGlzdGFudGVzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZC80MCBmb250LWRyYWdvbiB0ZXh0LXNtIG1iLTYgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMjAgcGItMlwiPlJlZ2lzdHJlcyBkw6lqw6AgcHLDqXNlbnRzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhc2V0cz8ubGVuZ3RoID4gMCA/IGRhdGFzZXRzLm1hcChkcyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkcy5pZH0gY2xhc3NOYW1lPVwicC00IGJnLWJsYWNrLzIwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZC80MCB0cmFuc2l0aW9uLWFsbCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9udC1ib2xkIHRleHQtc20gZ3JvdXAtaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9yc1wiPntkcy5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1zdG9uZS02MDAgdXBwZXJjYXNlIGZvbnQtYm9sZCBpdGFsaWNcIj57ZHMuc291cmNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGJnLXN0b25lLTgwMCBweC0yIHB5LTAuNSByb3VuZGVkIHRleHQtc3RvbmUtNDAwXCI+e2RzLnJvd3NDb3VudH0gbGlnbmVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgcHktMTAgdGV4dC1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItc3RvbmUtODAwIHRleHQtc3RvbmUtNjAwIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuZSBkb25uw6llIG4nYSDDqXTDqSBncmF2w6llIHBvdXIgbGUgbW9tZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlclNwYWNlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRGVzaWduZXJTcGFjZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoJyNlNjdlMjInKTtcclxuICAgIGNvbnN0IFtpc1NhdmluZywgc2V0SXNTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXHJcbiAgICAgICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCctLXZpa2luZy1vcmFuZ2UnKS50cmltKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb2xvcikge1xyXG4gICAgICAgICAgICBzZXRDb2xvcihjdXJyZW50Q29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb2xvckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3Q29sb3IgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRDb2xvcihuZXdDb2xvcik7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZpa2luZy1vcmFuZ2UnLCBuZXdDb2xvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVZhbGlkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzU2F2aW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYWRtaW4vc2F2ZS1kZXNpZ24nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbG9yOiBjb2xvciB9KVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLimpLvuI8gU3VjY8OocyA6IExlIHZpbGxhZ2UgYSBhZG9wdMOpIHZvcyBub3V2ZWxsZXMgY291bGV1cnMgIVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi4pqg77iPIEVycmV1ciA6IExlIEdyYW5kIENvbnNlaWwgYSByZWZ1c8OpIGxhIG1vZGlmaWNhdGlvbi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgc2F1dmVnYXJkZTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydChcIuKdjCBMYSBmb3JnZSBlc3Qgw6l0ZWludGUuIFbDqXJpZmlleiB2b3RyZSBjb25uZXhpb24gYXUgc2VydmV1ci5cIik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNTYXZpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIE5PVVZFTExFIEZPTkNUSU9OIERFIFLDiUlOSVRJQUxJU0FUSU9OIC0tLVxyXG4gICAgY29uc3QgaGFuZGxlUmVzZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShcIlZvdWxlei12b3VzIHZyYWltZW50IHJlc3RhdXJlciBsYSBjb3VsZXVyIGQnb3JpZ2luZSA/XCIpKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2FkbWluL3Jlc2V0LWRlc2lnbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9ICcjZTY3ZTIyJzsgLy8gT3JhbmdlIG9yaWdpbmFsIGRlIEJlcmtcclxuICAgICAgICAgICAgICAgIHNldENvbG9yKGRlZmF1bHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmlraW5nLW9yYW5nZScsIGRlZmF1bHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIuKaku+4jyBMZXMgYXJjaGl2ZXMgb250IMOpdMOpIHJlc3RhdXLDqWVzIDogcmV0b3VyIMOgIGwnb3JhbmdlIGFuY2VzdHJhbCAhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciByZXNldDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydChcIuKdjCBJbXBvc3NpYmxlIGRlIHLDqWluaXRpYWxpc2VyIGxlcyBjb3VsZXVycy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMjAgcC04IHNoYWRvdy0yeGwgcm91bmRlZC1sZyBhbmltYXRlLWluIGZhZGUtaW4gZHVyYXRpb24tNTAwXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgRm9yZ2UgZGUgbCdBcHBhcmVuY2VcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTggbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdGV4dC1zdG9uZS01MDAgZm9udC1ibGFja1wiPlRlaW50ZSBkdSBUaXRyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvbG9yQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgY3Vyc29yLXBvaW50ZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTcwMCByb3VuZGVkLXhsIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGJnLWJsYWNrLzQwIHAtOCByb3VuZGVkIGJvcmRlciBib3JkZXItc3RvbmUtODAwIHctZnVsbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNjAwIHVwcGVyY2FzZSBtYi00IHRyYWNraW5nLXdpZGVzdFwiPlJlbmR1IGVuIGRpcmVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogY29sb3IgfX0gY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmlkZXJzIG9mIEJlcmtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVmFsaWRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU2F2aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBweS00IGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdHJhbnNpdGlvbi1hbGwgcm91bmRlZCBzaGFkb3ctbGcgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTYXZpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTYwMCBjdXJzb3Itbm90LWFsbG93ZWQnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGhvdmVyOmJnLXllbGxvdy01MDAgYWN0aXZlOnNjYWxlLTk1IHNoYWRvdy15ZWxsb3ctOTAwLzIwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1NhdmluZyA/ICdHcmF2dXJlIGVuIGNvdXJzLi4uJyA6ICdWYWxpZGVyIGxlcyBjaGFuZ2VtZW50cyd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQk9VVE9OIERFIFLDiUlOSVRJQUxJU0FUSU9OICovfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtcmVkLTUwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUsOpaW5pdGlhbGlzZXIgbGEgY291bGV1ciBwYXIgZMOpZmF1dFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2lnbmVyU3BhY2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSAnand0LWRlY29kZSc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgbGV0IHVzZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIE9uIGTDqWNvZGUgbGUgdG9rZW4gcG91ciBjb25uYcOudHJlIGwndXRpbGlzYXRldXIgZXQgc2VzIHLDtGxlc1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXNlciA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVG9rZW4gaW52YWxpZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFbDqXJpZmljYXRpb24gZGVzIGRyb2l0cyBwb3VyIGxlIERhc2hib2FyZFxyXG4gICAgY29uc3QgY2FuU2VlRGFzaGJvYXJkID0gdXNlcj8ucm9sZXM/LmluY2x1ZGVzKCdST0xFX0VESVRFVVInKSB8fCB1c2VyPy5yb2xlcz8uaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgYm9yZGVyLWItMiBib3JkZXItdmlraW5nLWdvbGQvNTAgcC00IHN0aWNreSB0b3AtMCB6LTUwIHNoYWRvdy1sZyBiYWNrZHJvcC1ibHVyLW1kIGJnLW9wYWNpdHktOTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZHJvcC1zaGFkb3ctbWQgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdXBwZXJjYXNlXCI+UmlkZXJzIG9mIEJlcms8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgdGV4dC1sZyBmb250LWRyYWdvbiB0cmFja2luZy13aWRlIHRleHQtdmlraW5nLWxpZ2h0IHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPkFjY3VlaWw8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5Gb3J1bTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMSUVOIERBU0hCT0FSRCA6IFZpc2libGUgdW5pcXVlbWVudCBwb3VyIMOJZGl0ZXVyL0FkbWluICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuU2VlRGFzaGJvYXJkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZG1pblwiIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC81MCBweC0yIHB5LTAuNSBob3ZlcjpiZy12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zZWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IGJvcmRlci1sIGJvcmRlci1zdG9uZS03MDAgcGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXRva2VuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlciBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmV4aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwiYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBweC00IHB5LTEuNSB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlam9pbmRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSBmb250LWJsYWNrIGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcj8ucHNldWRvIHx8IFwiR3VlcnJpZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXZpa2luZy1maXJlIHVwcGVyY2FzZSBmb250LWJsYWNrIGJvcmRlciBib3JkZXItdmlraW5nLWZpcmUvMzAgcHgtMiBweS0xIGhvdmVyOmJnLXZpa2luZy1maXJlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWl0dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUsIHVzZVRocmVlIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcclxuaW1wb3J0IHsgdXNlR0xURiwgdXNlQW5pbWF0aW9ucywgQ2VudGVyLCBIdG1sLCB1c2VUZXh0dXJlLCBTdGFycyB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJztcclxuXHJcbmNvbnN0IE1PREVMX1BBVEggPSAnL21vZGVscy9uaWdodF9mdXJ5LmdsYic7XHJcbmNvbnN0IFRFWFRVUkVfUEFUSCA9ICcvdGV4dHVyZXMvbmlnaHRfZnVyeV9za2luLndlYnAnO1xyXG5jb25zdCBBTklNQVRJT05fTkFNRSA9ICdOaWdodEZ1cnlfYXJtYXR1cmVBY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gRHJhZ29uTW9kZWwoeyB2aXRlc3NlUm90YXRpb24sIHZpdGVzc2VBbmltYXRpb24sIGZhY3RldXJUYWlsbGUsIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCB7IHNjZW5lLCBhbmltYXRpb25zIH0gPSB1c2VHTFRGKE1PREVMX1BBVEgpO1xyXG4gIGNvbnN0IHRleHR1cmUgPSB1c2VUZXh0dXJlKFRFWFRVUkVfUEFUSCk7XHJcbiAgY29uc3QgeyB2aWV3cG9ydCB9ID0gdXNlVGhyZWUoKTsgXHJcbiAgXHJcbiAgLy8gQ2FsY3VsIGRlIGJhc2UgcmVzcG9uc2l2ZVxyXG4gIGNvbnN0IGJhc2VTY2FsZSA9IHZpZXdwb3J0LndpZHRoIDwgNSA/IDAuNSA6IDAuODsgXHJcbiAgLy8g8J+TjyBDQUxDVUwgRklOQUwgOiBUYWlsbGUgZGUgYmFzZSB4IExlIGN1cnNldXIgZGUgbCd1dGlsaXNhdGV1clxyXG4gIGNvbnN0IGZpbmFsU2NhbGUgPSBiYXNlU2NhbGUgKiBmYWN0ZXVyVGFpbGxlO1xyXG5cclxuICB0ZXh0dXJlLmZsaXBZID0gZmFsc2U7XHJcbiAgdGV4dHVyZS5jb2xvclNwYWNlID0gJ3NyZ2InO1xyXG5cclxuICBjb25zdCBncm91cCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHsgYWN0aW9ucyB9ID0gdXNlQW5pbWF0aW9ucyhhbmltYXRpb25zLCBncm91cCk7XHJcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjZW5lLnRyYXZlcnNlKChjaGlsZCkgPT4ge1xyXG4gICAgICBpZiAoY2hpbGQuaXNNZXNoKSB7XHJcbiAgICAgICAgY2hpbGQubWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcclxuICAgICAgICBjaGlsZC5tYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtzY2VuZSwgdGV4dHVyZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGlvbnMgJiYgYWN0aW9uc1tBTklNQVRJT05fTkFNRV0pIHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXTtcclxuICAgICAgICBhY3Rpb24ucmVzZXQoKS5mYWRlSW4oMC41KS5wbGF5KCk7XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFthY3Rpb25zXSk7XHJcblxyXG4gIC8vIE1pc2Ugw6Agam91ciB2aXRlc3NlIGFuaW1hdGlvblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9ucyAmJiBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXSkge1xyXG4gICAgICAgIGFjdGlvbnNbQU5JTUFUSU9OX05BTUVdLnRpbWVTY2FsZSA9IHZpdGVzc2VBbmltYXRpb247XHJcbiAgICB9XHJcbiAgfSwgW3ZpdGVzc2VBbmltYXRpb24sIGFjdGlvbnNdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQW5pbWF0aW9uID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW0FOSU1BVElPTl9OQU1FXTtcclxuICAgIGlmICghYWN0aW9uKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGlzUGxheWluZykge1xyXG4gICAgICAgIGFjdGlvbi5wYXVzZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhY3Rpb24ucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgYWN0aW9uLnBsYXkoKTsgXHJcbiAgICB9XHJcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRnJhbWUoKCkgPT4ge1xyXG4gICAgaWYoZ3JvdXAuY3VycmVudCkgZ3JvdXAuY3VycmVudC5yb3RhdGlvbi55ICs9IHZpdGVzc2VSb3RhdGlvbjtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxwcmltaXRpdmUgXHJcbiAgICAgIHJlZj17Z3JvdXB9IFxyXG4gICAgICBvYmplY3Q9e3NjZW5lfSBcclxuICAgICAgb25DbGljaz17dG9nZ2xlQW5pbWF0aW9ufVxyXG4gICAgICBvblBvaW50ZXJPdmVyPXsoKSA9PiBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ31cclxuICAgICAgb25Qb2ludGVyT3V0PXsoKSA9PiBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdhdXRvJ31cclxuICAgICAgXHJcbiAgICAgIHNjYWxlPXtmaW5hbFNjYWxlfSAvLyDwn5GIIE9uIGFwcGxpcXVlIGxhIHRhaWxsZSBkeW5hbWlxdWUgaWNpXHJcbiAgICAgIFxyXG4gICAgICBwb3NpdGlvbj17WzAsIDAuNSwgMF19IFxyXG4gICAgICB7Li4ucHJvcHN9IFxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBOaWdodEZ1cnlTY2VuZSA9ICgpID0+IHtcclxuICAvLyDwn46b77iPIMOJVEFUUyBEVSBUQUJMRUFVIERFIEJPUkRcclxuICBjb25zdCBbcm90U3BlZWQsIHNldFJvdFNwZWVkXSA9IHVzZVN0YXRlKDAuMDAxKTtcclxuICBjb25zdCBbYW5pbVNwZWVkLCBzZXRBbmltU3BlZWRdID0gdXNlU3RhdGUoMi41KTtcclxuICBjb25zdCBbc2l6ZUZhY3Rvciwgc2V0U2l6ZUZhY3Rvcl0gPSB1c2VTdGF0ZSgxKTsgLy8gMSA9IHRhaWxsZSBub3JtYWxlICgxMDAlKVxyXG5cclxuICAvLyBGb25jdGlvbiBwb3VyIHRvdXQgcmVtZXR0cmUgw6AgesOpcm9cclxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgIHNldFJvdFNwZWVkKDAuMDAxKTtcclxuICAgIHNldEFuaW1TcGVlZCgyLjUpO1xyXG4gICAgc2V0U2l6ZUZhY3RvcigxKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJlbGF0aXZlXCI+XHJcbiAgICAgIFxyXG4gICAgICA8Q2FudmFzIHNoYWRvd3MgY2FtZXJhPXt7IHBvc2l0aW9uOiBbMCwgMiwgMTBdLCBmb3Y6IDQ1IH19PlxyXG4gICAgICAgIDxjb2xvciBhdHRhY2g9XCJiYWNrZ3JvdW5kXCIgYXJncz17WycjMDUwNTEwJ119IC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFN0YXJzIHJhZGl1cz17MTAwfSBkZXB0aD17NTB9IGNvdW50PXs1MDAwfSBmYWN0b3I9ezR9IHNhdHVyYXRpb249ezB9IGZhZGUgc3BlZWQ9ezF9IC8+XHJcblxyXG4gICAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXszfSAvPlxyXG4gICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IHBvc2l0aW9uPXtbMTAsIDEwLCA1XX0gaW50ZW5zaXR5PXs0fSAvPlxyXG4gICAgICAgIDxzcG90TGlnaHQgcG9zaXRpb249e1stNSwgNSwgMTBdfSBpbnRlbnNpdHk9ezV9IGNvbG9yPVwiI2E4NTVmN1wiIC8+XHJcbiAgICAgICAgPHNwb3RMaWdodCBwb3NpdGlvbj17WzAsIDUsIC0xMF19IGludGVuc2l0eT17NX0gY29sb3I9XCIjZmZmZmZmXCIgLz5cclxuXHJcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8SHRtbCBjZW50ZXI+PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+SW52b2NhdGlvbi4uLjwvZGl2PjwvSHRtbD59PlxyXG4gICAgICAgICAgPENlbnRlciB0b3A+XHJcbiAgICAgICAgICAgIDxEcmFnb25Nb2RlbCBcclxuICAgICAgICAgICAgICAgIHZpdGVzc2VSb3RhdGlvbj17cm90U3BlZWR9IFxyXG4gICAgICAgICAgICAgICAgdml0ZXNzZUFuaW1hdGlvbj17YW5pbVNwZWVkfVxyXG4gICAgICAgICAgICAgICAgZmFjdGV1clRhaWxsZT17c2l6ZUZhY3Rvcn0gLy8g8J+RiCBPbiBlbnZvaWUgbGEgdGFpbGxlXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NlbnRlcj5cclxuICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICA8L0NhbnZhcz5cclxuXHJcbiAgICAgIHsvKiDwn46b77iPIFVJIFBBTk5FQVUgREUgQ09OVFLDlExFICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgYmctYmxhY2svNzAgYmFja2Ryb3AtYmx1ci1tZCBwLTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwLzMwIHRleHQtd2hpdGUgdy02NCBzaGFkb3ctMnhsIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLWJsYWNrLzgwXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmx1ZS0zMDAgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzEwIHBiLTJcIj5cclxuICAgICAgICAgICAgQ09OVFLDlExFUyBEVSBEUkFHT05cclxuICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICB7LyogMS4gVGFpbGxlIChab29tKSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlRhaWxsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwXCI+eHtzaXplRmFjdG9yLnRvRml4ZWQoMSl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgXHJcbiAgICAgICAgICAgICAgICBtaW49XCIwLjFcIiBcclxuICAgICAgICAgICAgICAgIG1heD1cIjNcIiBcclxuICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjFcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzaXplRmFjdG9yfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTaXplRmFjdG9yKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtZ3JlZW4tNTAwIGN1cnNvci1wb2ludGVyIGgtMiBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGFwcGVhcmFuY2Utbm9uZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiAyLiBSb3RhdGlvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlJvdGF0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPntyb3RTcGVlZC50b0ZpeGVkKDMpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIFxyXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiIFxyXG4gICAgICAgICAgICAgICAgbWF4PVwiMC4wNVwiIFxyXG4gICAgICAgICAgICAgICAgc3RlcD1cIjAuMDAxXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cm90U3BlZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvdFNwZWVkKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtYmx1ZS01MDAgY3Vyc29yLXBvaW50ZXIgaC0yIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgYXBwZWFyYW5jZS1ub25lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIDMuIFZpdGVzc2UgQW5pbWF0aW9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QW5pbWF0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUtNDAwXCI+eHthbmltU3BlZWQudG9GaXhlZCgxKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIiBcclxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBcclxuICAgICAgICAgICAgICAgIG1heD1cIjVcIiBcclxuICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjFcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthbmltU3BlZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuaW1TcGVlZChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYWNjZW50LXB1cnBsZS01MDAgY3Vyc29yLXBvaW50ZXIgaC0yIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgYXBwZWFyYW5jZS1ub25lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG10LTQgYmctd2hpdGUvMTAgaG92ZXI6YmctcmVkLTUwMC81MCBweS0xIHJvdW5kZWQgdGV4dC14cyB0cmFuc2l0aW9uLWNvbG9ycyBib3JkZXIgYm9yZGVyLXdoaXRlLzEwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFLDqWluaXRpYWxpc2VyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG51c2VHTFRGLnByZWxvYWQoTU9ERUxfUEFUSCk7XHJcbnVzZVRleHR1cmUucHJlbG9hZChURVhUVVJFX1BBVEgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmlnaHRGdXJ5U2NlbmU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFZpa2luZ1BsYXllciA9ICh7IHNyYywgYXV0b1BsYXkgPSBmYWxzZSB9KSA9PiB7XHJcbiAgICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRUaW1lLCBzZXRDdXJyZW50VGltZV0gPSB1c2VTdGF0ZShcIjA6MDBcIik7XHJcbiAgICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKFwiMDowMFwiKTtcclxuICAgIGNvbnN0IFtpc0Jsb2NrZWQsIHNldElzQmxvY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIE5vdXZlYXUgc3RhdGUgcG91ciBkw6l0ZWN0ZXIgbGUgYmxvY2FnZVxyXG5cclxuICAgIC8vIEdlc3Rpb24gZGUgbCdBdXRvcGxheVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYXV0b1BsYXkgJiYgYXVkaW9SZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5UHJvbWlzZSA9IGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgICAgICBpZiAocGxheVByb21pc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcGxheVByb21pc2VcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1Y2PDqHMgOiBMZSBuYXZpZ2F0ZXVyIGEgYXV0b3Jpc8OpIGwnYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0Jsb2NrZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gw4ljaGVjIDogTGUgbmF2aWdhdGV1ciBhIGJsb3F1w6kgbCdhdXRvcGxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dG9wbGF5IGJsb3F1w6kgKGludGVyYWN0aW9uIHJlcXVpc2UpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0Jsb2NrZWQodHJ1ZSk7IC8vIE9uIHNpZ25hbGUgcXUnaWwgZmF1dCB1bmUgYWN0aW9uIG1hbnVlbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbYXV0b1BsYXksIHNyY10pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzUGxheWluZykge1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgIHNldElzQmxvY2tlZChmYWxzZSk7IC8vIFNpIGwndXRpbGlzYXRldXIgY2xpcXVlLCBsZSBibG9jYWdlIHNhdXRlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGltZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZTtcclxuICAgICAgICBjb25zdCB0b3RhbCA9IGF1ZGlvUmVmLmN1cnJlbnQuZHVyYXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRvdGFsKSB7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzKChjdXJyZW50IC8gdG90YWwpICogMTAwKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFRpbWUoZm9ybWF0VGltZShjdXJyZW50KSk7XHJcbiAgICAgICAgICAgIHNldER1cmF0aW9uKGZvcm1hdFRpbWUodG90YWwpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlZWsgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gZS50YXJnZXQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY29uc3QgY2xpY2tYID0gZS5uYXRpdmVFdmVudC5vZmZzZXRYO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gYXVkaW9SZWYuY3VycmVudC5kdXJhdGlvbjtcclxuICAgICAgICBpZiAoZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IChjbGlja1ggLyB3aWR0aCkgKiBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZSkgPT4ge1xyXG4gICAgICAgIGlmICghdGltZSB8fCBpc05hTih0aW1lKSkgcmV0dXJuIFwiMDowMFwiO1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcclxuICAgICAgICBjb25zdCBzZWMgPSBNYXRoLmZsb29yKHRpbWUgJSA2MCk7XHJcbiAgICAgICAgcmV0dXJuIGAke21pbn06JHtzZWMgPCAxMCA/ICcwJyArIHNlYyA6IHNlY31gO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBWaXN1YWxpc2V1ciBhbmltw6lcclxuICAgIGNvbnN0IGJhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAzMCB9KS5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEgbXgtWzFweF0gcm91bmRlZC10IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke2lzUGxheWluZyA/ICdiZy12aWtpbmctZ29sZCBhbmltYXRlLWJhcicgOiAnYmctc3RvbmUtNzAwIGgtMSd9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogYCR7TWF0aC5yYW5kb20oKSAqIDAuNSArIDAuNH1zYCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaXNQbGF5aW5nID8gJzEwMCUnIDogJzEwJScgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGwgbXgtYXV0byBteS04IGJnLWJsYWNrLzgwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcm91bmRlZC1sZyBwLTYgc2hhZG93LVswXzBfMzBweF9yZ2JhKDAsMCwwLDAuOCldIGJhY2tkcm9wLWJsdXItc20gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogTWVzc2FnZSBzaSBibG9xdcOpICovfVxyXG4gICAgICAgICAgICB7aXNCbG9ja2VkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ibGFjay84MCB6LTIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGFuaW1hdGUtZmFkZS1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyBiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gc2hhZG93LVswXzBfMjBweF9yZ2JhKDIxMiwxNzUsNTUsMC42KV1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg8J+UiiBBY3RpdmVyIGwnQW1iaWFuY2UgU29ub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxhdWRpbyBcclxuICAgICAgICAgICAgICAgIHJlZj17YXVkaW9SZWZ9IFxyXG4gICAgICAgICAgICAgICAgc3JjPXtzcmN9IFxyXG4gICAgICAgICAgICAgICAgb25UaW1lVXBkYXRlPXtoYW5kbGVUaW1lVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25FbmRlZD17KCkgPT4gc2V0SXNQbGF5aW5nKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uTG9hZGVkTWV0YWRhdGE9eyhlKSA9PiBzZXREdXJhdGlvbihmb3JtYXRUaW1lKGUudGFyZ2V0LmR1cmF0aW9uKSl9IC8vIENoYXJnZSBsYSBkdXLDqWUgZMOocyBsZSBkw6lidXRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIEJvdXRvbiBQbGF5L1BhdXNlICovfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTQgaC0xNCBmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7aXNQbGF5aW5nID8gJ2JnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgc2hhZG93LVswXzBfMTVweF9yZ2JhKDIxMiwxNzUsNTUsMC41KV0nIDogJ3RleHQtdmlraW5nLWdvbGQgaG92ZXI6YmctdmlraW5nLWdvbGQvMjAnfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzUGxheWluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTYgaC02XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00elwiLz48L3N2Zz4gXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTYgaC02IHRyYW5zbGF0ZS14LTAuNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04IDV2MTRsMTEtN3pcIi8+PC9zdmc+IFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogSW5mbyAmIFZpc3VhbGlzZXVyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1bMTBweF0gdGV4dC12aWtpbmctZ29sZCBmb250LW1vbm8gbWItMiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG9wYWNpdHktODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2N1cnJlbnRUaW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2lzUGxheWluZyA/IFwiTGVjdHVyZS4uLlwiIDogXCJQYXVzZVwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2R1cmF0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFpvbmUgVmlzdWFsaXNldXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwIGZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIG1iLTMgb3ZlcmZsb3ctaGlkZGVuIG9wYWNpdHktODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JhcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBCYXJyZSBkZSBwcm9ncmVzc2lvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEuNSBiZy1zdG9uZS04MDAgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIHJlbGF0aXZlIGdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2Vla31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgYmctdmlraW5nLWdvbGQgcm91bmRlZC1mdWxsIHJlbGF0aXZlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMCBlYXNlLWxpbmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTMgaC0zIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgc2hhZG93IHNjYWxlLTAgZ3JvdXAtaG92ZXI6c2NhbGUtMTAwIHRyYW5zaXRpb24tYWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpa2luZ1BsYXllcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSAnand0LWRlY29kZSc7XHJcbmltcG9ydCBEYXRhUHJvdmlkZXJTcGFjZSBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFQcm92aWRlclNwYWNlJztcclxuaW1wb3J0IERlc2lnbmVyU3BhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9EZXNpZ25lclNwYWNlJztcclxuXHJcbmNvbnN0IEFkbWluRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCdzdGF0cycpO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBudWxsO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyID0gdG9rZW4gPyBqd3REZWNvZGUodG9rZW4pIDogbnVsbDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGRlIGTDqWNvZGFnZSBkdSB0b2tlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEw6lmaW5pdGlvbiBkZXMgYWNjw6hzIHNlbG9uIGxlcyByw7RsZXNcclxuICAgIGNvbnN0IHJvbGVzID0gY3VycmVudFVzZXI/LnJvbGVzIHx8IFtdO1xyXG4gICAgY29uc3QgaXNGdWxsQWRtaW4gPSByb2xlcy5pbmNsdWRlcygnUk9MRV9BRE1JTicpO1xyXG4gICAgY29uc3QgaXNQcm92aWRlciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0ZPVVJOSVNTRVVSJykgfHwgaXNGdWxsQWRtaW47XHJcbiAgICBjb25zdCBpc0Rlc2lnbmVyID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfREVTSUdORVInKSB8fCBpc0Z1bGxBZG1pbjtcclxuICAgIGNvbnN0IGlzRWRpdG9yID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfRURJVEVVUicpIHx8IGlzRnVsbEFkbWluO1xyXG5cclxuICAgIGNvbnN0IGxvYWRTdGF0cyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaCgnL2FwaS9hZG1pbi9zdGF0cycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJBY2PDqHMgcmVmdXPDqSBwYXIgbGUgR3JhbmQgQ29uc2VpbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihqc29uID0+IHNldERhdGEoanNvbikpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBzZXRFcnJvcihlcnIubWVzc2FnZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRTdGF0cygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByb21vdGUgPSBhc3luYyAodXNlcklkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9hZG1pbi91c2VyLyR7dXNlcklkfS9wcm9tb3RlYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFVzZXJzOiBkYXRhLmFsbFVzZXJzLm1hcCh1ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1LmlkID09PSB1c2VySWQgPyB7IC4uLnUsIHJvbGVzOiB1cGRhdGVkRGF0YS5uZXdSb2xlcyB9IDogdVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7IFxyXG4gICAgICAgICAgICBhbGVydChcIkVycmV1ciBsb3JzIGR1IGNoYW5nZW1lbnQgZGUgcmFuZ1wiKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBwLTEwIHRleHQtY2VudGVyIGZvbnQtZHJhZ29uXCI+e2Vycm9yfTwvZGl2PjtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIHAtMTAgZm9udC1kcmFnb24gYW5pbWF0ZS1wdWxzZSB0ZXh0LWNlbnRlclwiPkFwcGVsIGF1IEdyYW5kIENvbnNlaWwuLi48L2Rpdj47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHAtNiB0ZXh0LXdoaXRlIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gdGV4dC1zdG9uZS0yMDAgbWItMTAgYm9yZGVyLWIgYm9yZGVyLXllbGxvdy03MDAvMzAgcGItNCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlclwiPlxyXG4gICAgICAgICAgICAgICAgUGFsYWlzIGQnQWRtaW5pc3RyYXRpb25cclxuICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIHBhciBPbmdsZXRzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIG1iLTggYm9yZGVyLWIgYm9yZGVyLXN0b25lLTgwMCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignc3RhdHMnKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNiBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbi1hbGwgJHthY3RpdmVUYWIgPT09ICdzdGF0cycgPyAnYmcteWVsbG93LTYwMCB0ZXh0LWJsYWNrIHNjYWxlLTEwNScgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGhvdmVyOmJnLXN0b25lLTgwMCd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgVnVlIGQnZW5zZW1ibGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7aXNGdWxsQWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCd1c2VycycpfSBjbGFzc05hbWU9e2BweC02IHB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uLWFsbCAke2FjdGl2ZVRhYiA9PT0gJ3VzZXJzJyA/ICdiZy15ZWxsb3ctNjAwIHRleHQtYmxhY2sgc2NhbGUtMTA1JyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgaG92ZXI6Ymctc3RvbmUtODAwJ31gfT5Qb3B1bGF0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7aXNFZGl0b3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdhcnRpY2xlcycpfSBjbGFzc05hbWU9e2BweC02IHB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uLWFsbCAke2FjdGl2ZVRhYiA9PT0gJ2FydGljbGVzJyA/ICdiZy15ZWxsb3ctNjAwIHRleHQtYmxhY2sgc2NhbGUtMTA1JyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgaG92ZXI6Ymctc3RvbmUtODAwJ31gfT5DaHJvbmlxdWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtpc1Byb3ZpZGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignZGF0YScpfSBjbGFzc05hbWU9e2BweC02IHB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uLWFsbCAke2FjdGl2ZVRhYiA9PT0gJ2RhdGEnID8gJ2JnLXllbGxvdy02MDAgdGV4dC1ibGFjayBzY2FsZS0xMDUnIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCBob3ZlcjpiZy1zdG9uZS04MDAnfWB9PkRvbm7DqWVzIChDU1YpPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtpc0Rlc2lnbmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignZGVzaWduJyl9IGNsYXNzTmFtZT17YHB4LTYgcHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24tYWxsICR7YWN0aXZlVGFiID09PSAnZGVzaWduJyA/ICdiZy15ZWxsb3ctNjAwIHRleHQtYmxhY2sgc2NhbGUtMTA1JyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgaG92ZXI6Ymctc3RvbmUtODAwJ31gfT5BcHBhcmVuY2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIENPTlRFTlUgRFlOQU1JUVVFICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLVs1MDBweF1cIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIE9OR0xFVCBTVEFUUyAqL31cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdzdGF0cycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNiBhbmltYXRlLWluIGZhZGUtaW4gZHVyYXRpb24tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIGJvcmRlci1sLTQgYm9yZGVyLXllbGxvdy02MDAgcC04IHNoYWRvdy0yeGwgcm91bmRlZC1yLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRleHQteHMgZm9udC1ibGFjayB0cmFja2luZy13aWRlc3RcIj5HdWVycmllcnMgZGUgQmVyazwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiBtdC0yIHRleHQtd2hpdGVcIj57ZGF0YS51c2Vyc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIGJvcmRlci1sLTQgYm9yZGVyLW9yYW5nZS03MDAgcC04IHNoYWRvdy0yeGwgcm91bmRlZC1yLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRleHQteHMgZm9udC1ibGFjayB0cmFja2luZy13aWRlc3RcIj5DaHJvbmlxdWVzIMOpY3JpdGVzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIG10LTIgdGV4dC13aGl0ZVwiPntkYXRhLmFydGljbGVzQ291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9OR0xFVCBVU0VSUyAqL31cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICd1c2VycycgJiYgaXNGdWxsQWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IGFuaW1hdGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20tNCBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hlcmNoZXIgdW4gZ3VlcnJpZXIgZGFucyBsYSBicnVtZS4uLlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2svNjAgYm9yZGVyIGJvcmRlci15ZWxsb3ctOTAwLzMwIHAtNCByb3VuZGVkIHRleHQtc20gdy1mdWxsIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXIteWVsbG93LTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmFsbFVzZXJzPy5maWx0ZXIodSA9PiB1LnBzZXVkby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkpLm1hcCh1ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dS5pZH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtNCBiZy1zdG9uZS05MDAvNDAgYm9yZGVyIGJvcmRlci1zdG9uZS04MDAgcm91bmRlZCBob3Zlcjpib3JkZXItc3RvbmUtNzAwIHRyYW5zaXRpb24tYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zdG9uZS0yMDBcIj57dS5wc2V1ZG99PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj57dS5yb2xlcy5qb2luKCcg4oCiICcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUHJvbW90ZSh1LmlkKX0gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gYm9yZGVyIGJvcmRlci15ZWxsb3ctNzAwLzQwIHB4LTQgcHktMiBob3ZlcjpiZy15ZWxsb3ctNjAwIGhvdmVyOnRleHQtYmxhY2sgdHJhbnNpdGlvbi1hbGwgZm9udC1ibGFjayB1cHBlcmNhc2VcIj5DaGFuZ2VyIFJhbmc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9OR0xFVCBBUlRJQ0xFUyAqL31cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdhcnRpY2xlcycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMyBhbmltYXRlLWluIGZhZGUtaW4gZHVyYXRpb24tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hbmFnZW1lbnRBcnRpY2xlcz8ubWFwKGFydCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXJ0LmlkfSBjbGFzc05hbWU9XCJwLTUgYmctc3RvbmUtOTAwLzgwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtc3RvbmUtMjAwXCI+e2FydC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdG9uZS01MDAgaXRhbGljIG10LTEgZm9udC1zZXJpZlwiPmRpY3TDqSBwYXIge2FydC5hdXRob3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNjAwIHRleHQteHMgZm9udC1tb25vIGJnLWJsYWNrLzMwIHB4LTIgcHktMSByb3VuZGVkXCI+e2FydC5jcmVhdGVkQXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogT05HTEVUIERBVEEgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnZGF0YScgJiYgaXNQcm92aWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluIHpvb20taW4tOTUgZHVyYXRpb24tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhUHJvdmlkZXJTcGFjZSBkYXRhc2V0cz17ZGF0YS5kYXRhc2V0c30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9OR0xFVCBERVNJR04gKFRPTiBOT1VWRUwgRVNQQUNFKSAqL31cclxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdkZXNpZ24nICYmIGlzRGVzaWduZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVzaWduZXJTcGFjZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5EYXNoYm9hcmQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgQXJ0aWNsZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHsgaGVhZGVyczogeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nIH0gfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQtMnhsIHB5LTIwIGFuaW1hdGUtcHVsc2VcIj5SZWNoZXJjaGUgZGFucyBsZXMgYXJjaGl2ZXMuLi48L2Rpdj47XHJcbiAgICBpZiAoIWFydGljbGUpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdmlraW5nLWZpcmUgdGV4dC14bCBweS0xMFwiPkFydGljbGUgaW50cm91dmFibGUgZGFucyBsZXMgYXJjaGl2ZXMuPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBhbmltYXRlLWZhZGUtaW5cIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZm9ydW1cIiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIG1iLTYgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuKGkDwvc3Bhbj4gUmV0b3VyIGF1IGZvcnVtXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC04IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgey8qIETDqWNvcmF0aW9uIGNvaW4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy0yMCBoLTIwIGJnLXZpa2luZy1nb2xkIG9wYWNpdHktMTAgcm91bmRlZC1ibC1mdWxsXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNCBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtc20gdGV4dC1zdG9uZS01MDAgbWItOCBib3JkZXItYiBib3JkZXItc3RvbmUtNzAwIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy12aWtpbmctcmVkIHB4LTIgcHktMSByb3VuZGVkIHRleHQtd2hpdGUgZm9udC1ib2xkIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJjaGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DcsOpw6kgbGUge25ldyBEYXRlKGFydGljbGUuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBmb250LXNlcmlmIHdoaXRlc3BhY2UtcHJlLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBOb3RlOiBMZXMgYmxvY3MgZXQgY29tbWVudGFpcmVzIG7DqWNlc3NpdGVudCB1bmUgbG9naXF1ZSBwbHVzIHBvdXNzw6llIMOgIGltcGzDqW1lbnRlciBwbHVzIHRhcmQgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgQXJ0aWNsZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlRm9ybSc7XHJcblxyXG5jb25zdCBGb3J1bVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBcclxuICAgIC8vIEdlc3Rpb24gZGUgbGEgbmF2aWdhdGlvbiBpbnRlcm5lXHJcbiAgICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgnbGlzdCcpOyAvLyAnbGlzdCcsICdjcmVhdGUnLCAnZWRpdCdcclxuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gMS4gUsOpY3Vww6lyYXRpb24gZXQgZMOpY29kYWdlIGR1IFRva2VuXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdHJ5IHsgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR3VlcnJpZXIgY29ubmVjdMOpIDpcIiwgZGVjb2RlZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRlY29kZWQpOyBcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkJhZGdlIChUb2tlbikgaW52YWxpZGUgb3UgZXhwaXLDqVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAyLiBDaGFyZ2VtZW50IGRlcyBjaHJvbmlxdWVzXHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoQXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9hcnRpY2xlcycsIHsgXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbicgfSBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRBcnRpY2xlcyhkYXRhWydoeWRyYTptZW1iZXInXSB8fCBkYXRhWydtZW1iZXInXSB8fCBbXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgZGUgbGlhaXNvbiBhdmVjIGxlIEdyYW5kIENvbnNlaWxcIiwgZXJyKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93LmNvbmZpcm0oXCJWb3VsZXotdm91cyB2cmFpbWVudCBlZmZhY2VyIGNlIHLDqWNpdCBkZSBsYSBwaWVycmUgP1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9hcnRpY2xlcy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIFN1cHByZXNzaW9uIGxvY2FsZSBpbW3DqWRpYXRlIHBvdXIgbCdpbnRlcmZhY2VcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGVzKGFydGljbGVzLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhSWQgPSAoYS5pZCB8fCBhWydAaWQnXSkudG9TdHJpbmcoKS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhSWQgIT09IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkxlcyBkcmFnb25zIHByb3TDqGdlbnQgY2UgcGFyY2hlbWluIChFcnJldXIgZGUgcGVybWlzc2lvbnMpLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChcIkxlIHNlcnZldXIgZXN0IGluam9pZ25hYmxlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlldygnbGlzdCcpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XHJcbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpOyBcclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIExPR0lRVUUgREVTIFLDlExFUyAtLS1cclxuICAgIGNvbnN0IGhhc1JvbGUgPSAocm9sZSkgPT4gdXNlcj8ucm9sZXM/LmluY2x1ZGVzKHJvbGUpO1xyXG4gICAgXHJcbiAgICAvLyBBdXRvcmlzZSBsYSBjcsOpYXRpb24gcG91ciBBZG1pbiwgQXV0ZXVyIEVUIMOJZGl0ZXVyXHJcbiAgICBjb25zdCBjYW5DcmVhdGUgPSBoYXNSb2xlKCdST0xFX0FETUlOJykgfHwgaGFzUm9sZSgnUk9MRV9BVVRFVVInKSB8fCBoYXNSb2xlKCdST0xFX0VESVRFVVInKTtcclxuXHJcbiAgICBpZiAobG9hZGluZyAmJiB2aWV3ID09PSAnbGlzdCcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTQwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiBib3JkZXItNCBib3JkZXItdmlraW5nLWdvbGQgYm9yZGVyLXQtdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIGFuaW1hdGUtc3BpbiBtYi00XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1nb2xkIGZvbnQtZHJhZ29uIHRleHQteGwgYW5pbWF0ZS1wdWxzZSB1cHBlcmNhc2VcIj5PdXZlcnR1cmUgZGVzIHBhcmNoZW1pbnMuLi48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgcGItMjBcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiAtLS0gSEVBREVSIC0tLSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmQgbWItMTIgYm9yZGVyLWIgYm9yZGVyLXZpa2luZy1nb2xkLzIwIHBiLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLXBhcmNobWVudCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlclwiPkNocm9uaXF1ZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIGl0YWxpYyB0ZXh0LXNtIG10LTJcIj5MZSBzYXZvaXIgZHUgdmlsbGFnZSBkZSBCZXJrLCBncmF2w6kgcG91ciBsJ8OpdGVybml0w6kuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHt2aWV3ID09PSAnbGlzdCcgJiYgY2FuQ3JlYXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaWV3KCdjcmVhdGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBweC04IHB5LTMgZm9udC1ibGFjayBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LVswXzBfMjBweF9yZ2JhKDIxMiwxNzUsNTUsMC4yKV0gdXBwZXJjYXNlIHRleHQteHMgdHJhY2tpbmctd2lkZXN0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgR3JhdmVyIHVuIHLDqWNpdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogLS0tIFZVRVMgRk9STVVMQUlSRVMgLS0tICovfVxyXG4gICAgICAgICAgICB7KHZpZXcgPT09ICdjcmVhdGUnIHx8IHZpZXcgPT09ICdlZGl0JykgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbS00IGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0VmlldygnbGlzdCcpOyBzZXRTZWxlY3RlZElkKG51bGwpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi04IHRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtdmlraW5nLWdvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbiB1cHBlcmNhc2UgdGV4dC1bMTBweF0gZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDihpAgUmV0b3VyIGF1IG11ciBkZXMgbMOpZ2VuZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVGb3JtIGlkPXtzZWxlY3RlZElkfSBvblN1Y2Nlc3M9e2hhbmRsZVN1Y2Nlc3N9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIC8qIC0tLSBWVUUgTElTVEUgREVTIEFSVElDTEVTIC0tLSAqL1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGVzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMjAgdGV4dC1zdG9uZS02MDAgaXRhbGljXCI+TGUgc2lsZW5jZSByw6hnbmUgc3VyIGxlIG11ci4uLiBBdWN1bmUgY2hyb25pcXVlIG4nYSDDqXTDqSB0cm91dsOpZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbklkID0gKGFydGljbGUuaWQgfHwgYXJ0aWNsZVsnQGlkJ10pLnRvU3RyaW5nKCkuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVsOpcmlmaWNhdGlvbiBkZSBwcm9wcmnDqXTDqSAoTCdhdXRldXIgZHUgcG9zdCBPVSB1biByw7RsZSBkZSBtb2TDqXJhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT3duZXIgPSB1c2VyPy5pZCA9PT0gYXJ0aWNsZS5hdXRob3I/LmlkIHx8IGhhc1JvbGUoJ1JPTEVfQURNSU4nKSB8fCBoYXNSb2xlKCdST0xFX0VESVRFVVInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17Y2xlYW5JZH0gY2xhc3NOYW1lPVwiZ3JvdXAgYmctc3RvbmUtOTAwLzQwIGJvcmRlci1sLTQgYm9yZGVyLXN0b25lLTgwMCBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHAtOCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNPd25lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIG9wYWNpdHktNDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkSWQoY2xlYW5JZCk7IHNldFZpZXcoJ2VkaXQnKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdXBwZXJjYXNlIGZvbnQtYmxhY2sgYmctc3RvbmUtODAwIHRleHQtc3RvbmUtNDAwIHB4LTMgcHktMSBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZCB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoY2xlYW5JZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIGJnLXJlZC05MDAvMTAgdGV4dC1yZWQtNTAwLzcwIHB4LTMgcHktMSBib3JkZXIgYm9yZGVyLXJlZC05MDAvMzAgaG92ZXI6YmctcmVkLTkwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdXBwcmltZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNDAwIGZvbnQtc2VyaWYgaXRhbGljIHRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTggbWF4LXctM3hsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInthcnRpY2xlLnN1bW1hcnl9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHQtNiBib3JkZXItdCBib3JkZXItc3RvbmUtODAwLzUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYgaC1bMXB4XSBiZy12aWtpbmctZ29sZC80MFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXIge2FydGljbGUuYXV0aG9yPy5wc2V1ZG8gfHwgYXJ0aWNsZS5hdXRob3I/LnVzZXJuYW1lIHx8IFwiR3VlcnJpZXIgZGUgbCdvbWJyZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvZm9ydW0vYXJ0aWNsZS8ke2NsZWFuSWR9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZmlyZSBmb250LWJsYWNrIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VsdGVyIGxlIHBhcmNoZW1pbiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+4oaSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3J1bVBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE5pZ2h0RnVyeVNjZW5lIGZyb20gXCIuLi9jb21wb25lbnRzL05pZ2h0RnVyeVwiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTYgYW5pbWF0ZS1mYWRlLWluLXVwXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBtZDp0ZXh0LTh4bCBmb250LWRyYWdvbiB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tdmlraW5nLWdvbGQgdmlhLXllbGxvdy01MDAgdG8tdmlraW5nLWdvbGQgbWItOCBkcm9wLXNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgQmllbnZlbnVlIGRhbnMgbCdBbnRyZVxyXG4gICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI0IGgtMSBiZy12aWtpbmctcmVkIG14LWF1dG8gbWItOCByb3VuZGVkLWZ1bGwgc2hhZG93LVswXzBfMTBweF8jZGMyNjI2XVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC12aWtpbmctbGlnaHQgbWItMTIgbWF4LXctM3hsIG14LWF1dG8gZm9udC1zZXJpZiBpdGFsaWMgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgICAgICBcIsOHYSwgYydlc3QgQmV1cmsuIMOAIGRvdXplIGpvdXJzIGF1IG5vcmQgZHUgRMOpc2VzcG9pciwgZXRcclxuICAgICAgICAgICAgICAgIHF1ZWxxdWVzIGRlZ3LDqXMgYXUgc3VkIGQndW4gRnJvaWQtZGUtY2FuYXJkLiBBbmNyw6kgc29saWRlbWVudFxyXG4gICAgICAgICAgICAgICAgc3VyIGxlIE3DqXJpZGllbiBkZSBsYSBNaXPDqHJlLiBNb24gdmlsbGFnZS4uLiBFbiB1biBtb3QsIGJhbGFpc2UuXHJcbiAgICAgICAgICAgICAgICBFdCBzZXB0IGfDqW7DqXJhdGlvbnMgeSBvbnQgZMOpasOgIHZ1IGxlIGpvdXIsIHBvdXJ0YW50LCB0b3V0ZXMgbGVzXHJcbiAgICAgICAgICAgICAgICBtYWlzb25zIHNvbnQgbmV1dmVzLiBCZXVyayA6IHNhIHDDqmNoZSwgc2EgY2hhc3NlLCBldCBzZXNcclxuICAgICAgICAgICAgICAgIG1lcnZlaWxsZXV4IGNvdWNoZXJzIGRlIHNvbGVpbC4gTGEgc2V1bGUgZmF1c3NlIG5vdGUgYydlc3QgbGVzXHJcbiAgICAgICAgICAgICAgICBiZXN0aW9sZXMuIEFpbGxldXJzLCBsZXMgZ2VucyBvbnQgZGVzIHNvdXJpcyBvdSBkZXMgbW91c3RpcXVlcy5cclxuICAgICAgICAgICAgICAgIE5vdXMgb24gYSBkZXMuLi4gZHJhZ29ucy5cIlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtODAwIHJvdW5kZWQtMnhsIGJvcmRlci00IGJvcmRlci1zdG9uZS03MDAgc2hhZG93LTJ4bCBvdmVyZmxvdy1oaWRkZW4gbWItMTJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiDwn5GHIEMnZXN0IGljaSBxdWUgbGEgbWFnaWUgb3DDqHJlLiBMYSBoYXV0ZXVyIChoLVs2MDBweF0pIGVzdCBDUlVDSUFMRSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNjAwcHhdIHctZnVsbCByZWxhdGl2ZSBiZy1ibGFjayByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOaWdodEZ1cnlTY2VuZSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IGxlZnQtMCB3LWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNDAwIHBvaW50ZXItZXZlbnRzLW5vbmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGlxdWV6IHN1ciBsZSBkcmFnb25cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9mb3J1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgcHgtOCBweS00IGJnLXZpa2luZy1yZWQgaG92ZXI6YmctcmVkLTkwMCBib3JkZXItMiBib3JkZXItdmlraW5nLWdvbGQgdGV4dC13aGl0ZSBmb250LWRyYWdvbiB0ZXh0LXhsIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1bMF8wXzE1cHhfcmdiYSgyMjAsMzgsMzgsMC41KV1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTBcIj5BY2PDqWRlciBhdSBGb3J1bTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgaC1mdWxsIHctZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlLzIwIHRvLXRyYW5zcGFyZW50IC10cmFuc2xhdGUteC1mdWxsIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LWZ1bGwgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNzAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9zdGF0aXN0aXF1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtOCBweS00IGJnLXZpa2luZy1yb2NrIGhvdmVyOmJnLXN0b25lLTcwMCBib3JkZXItMiBib3JkZXItc3RvbmUtNTAwIHRleHQtdmlraW5nLWxpZ2h0IGhvdmVyOnRleHQtd2hpdGUgZm9udC1kcmFnb24gdGV4dC14bCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVm9pciBsZXMgU3RhdHNcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IExvZ2luUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRFcnJvcignJyk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9naW5fY2hlY2snLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsIC8vIEVudm9pIGRlIGxhIGNsw6kgXCJlbWFpbFwiIGF0dGVuZHVlIHBhciBTeW1mb255XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkIFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vayAmJiBkYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9ja2FnZSBkdSB0b2tlbiBKV1RcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJlY3Rpb24gdmVycyBsZSBmb3J1bVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2ZvcnVtJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKCdJZGVudGlmaWFudHMgaW5jb3JyZWN0cy4gTGVzIGRyYWdvbnMgbmUgdm91cyByZWNvbm5haXNzZW50IHBhcy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcignRXJyZXVyIGRlIGNvbm5leGlvbiBhdSBzZXJ2ZXVyLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctdmlraW5nLXJvY2sgcC0xMCBib3JkZXItMiBib3JkZXItdmlraW5nLWdvbGQgc2hhZG93LTJ4bCBtdC0xMFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi04IHRleHQtY2VudGVyIHVwcGVyY2FzZVwiPkNvbm5leGlvbjwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctcmVkIHRleHQtc20gbWItNCBpdGFsaWMgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+e2Vycm9yfTwvcD59XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG1iLTIgdGV4dC12aWtpbmctcGFyY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIGR1IEd1ZXJyaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXhlbXBsZUBiZXJrLmZyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNb3QgZGUgcGFzc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXN0b25lLTcwMCBwLTMgdGV4dC13aGl0ZSBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJsYWNrIHB5LTQgdXBwZXJjYXNlIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBzaGFkb3ctbGcgYWN0aXZlOnNjYWxlLTk1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJlbmRyZSBzb24gZW52b2xcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IFJlZ2lzdGVyUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGxhaW5QYXNzd29yZDogJycsXHJcbiAgICAgICAgcm9sZTogJ1JPTEVfVVNFUidcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RXJyb3IoJycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcmVnaXN0ZXInLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWRpcmlnZSB2ZXJzIGwnYWNjdWVpbCBvdSBsZSBsb2dpbiBhcHLDqHMgc3VjY8Ooc1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGUoJy8nKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiRXJyZXVyIGxvcnMgZGUgbCdpbnNjcmlwdGlvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcihcIkltcG9zc2libGUgZGUgY29udGFjdGVyIGxlIEdyYW5kIFNjcmliZSAoRXJyZXVyIHLDqXNlYXUpXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctdmlraW5nLXJvY2svOTAgcC04IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgYmFja2Ryb3AtYmx1ci1zbVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBtYi04IHRleHQtY2VudGVyIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgIFJlam9pbmRyZSBsYSBHdWlsZGVcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC05MDAvNDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTIwMCBwLTMgcm91bmRlZCBtYi02IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE5PTSBEJ1VUSUxJU0FURVVSICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPk5vbSBkZSBjb2RlIChQc2V1ZG8pPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IEtyb2ttb3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogRU1BSUwgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+RW1haWwgZGUgY29udGFjdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ2aWtpbmdAYmVyay5mclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyByb3VuZGVkIHRleHQtdmlraW5nLXBhcmNobWVudCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBSw5RMRSAoRMOpasOgIGZvbmN0aW9ubmVsKSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5SYW5nIGF1IHNlaW4gZGUgbGEgR3VpbGRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5yb2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgcm9sZTogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX1VTRVJcIj5BYm9ubsOpIChMZWN0ZXVyKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9BVVRFVVJcIj5BdXRldXIgKE5hcnJhdGV1cik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfRURJVEVVUlwiPsOJZGl0ZXVyIChHYXJkaWVuKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9ERVNJR05FUlwiPkRlc2lnbmV1ciAoQXJ0aXNhbik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfRk9VUk5JU1NFVVJcIj5Gb3Vybmlzc2V1ciBkZSBkb25uw6llcyAoU2NyaWJlKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9BRE1JTlwiPkFkbWluaXN0cmF0ZXVyIChDaGVmIGRlIGxhIEd1aWxkZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNT1QgREUgUEFTU0UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+TW90IGRlIHBhc3NlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyByb3VuZGVkIHRleHQtdmlraW5nLXBhcmNobWVudCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGxhaW5QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHBsYWluUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC12aWtpbmctZGFyayBmb250LWV4dHJhYm9sZCBweS00IHJvdW5kZWQgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBzaGFkb3ctbGcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG10LTRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEdyYXZlciBtb24gbm9tXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCwgQXJjRWxlbWVudCwgUG9pbnRFbGVtZW50LCBMaW5lRWxlbWVudCxcclxufSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IEJhciwgRG91Z2hudXQsIExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCwgQXJjRWxlbWVudCwgUG9pbnRFbGVtZW50LCBMaW5lRWxlbWVudCk7XHJcblxyXG5jb25zdCBTdGF0c1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2JveE9mZmljZURhdGEsIHNldEJveE9mZmljZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BvcHVsYXRpb25EYXRhLCBzZXRQb3B1bGF0aW9uRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGltZWxpbmVEYXRhLCBzZXRUaW1lbGluZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGxvYWRDU1YgPSAodXJsLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihyID0+IHIub2sgPyByLnRleHQoKSA6IG51bGwpXHJcbiAgICAgIC50aGVuKHR4dCA9PiB7XHJcbiAgICAgICAgaWYoIXR4dCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gdHh0LnRyaW0oKS5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbGluZXNbMF0uc3BsaXQoJzsnKS5tYXAoaCA9PiBoLnRyaW0oKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGxpbmVzLnNsaWNlKDEpLm1hcChsID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFscyA9IGwuc3BsaXQoJzsnKS5tYXAodiA9PiB2LnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiAoey4uLmFjYywgW2hdOiB2YWxzW2ldfSksIHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGgpIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvYm94X29mZmljZS5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBzZXRCb3hPZmZpY2VEYXRhKHtcclxuICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnRmlsbSddKSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGxhYmVsOiAnTSQnLFxyXG4gICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ0JveCBPZmZpY2UgKE1pbGxpb25zICQpJ10pKSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjN2YxZDFkJywgJyNkYzI2MjYnLCAnI2Q5NzcwNiddLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjkyNTI0JyxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICAgICAgfV1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9iZXJrX3BvcHVsYXRpb24uY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgc2V0UG9wdWxhdGlvbkRhdGEoe1xyXG4gICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydHcm91cGUnXSksXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnUG9wdWxhdGlvbiddKSksXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsnI2Q5NzcwNicsICcjN2YxZDFkJywgJyM1NzUzNGUnLCAnI2E4YTI5ZSddLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMWMxOTE3JyxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICAgICAgfV1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9kcmFnb25zX3RpbWVsaW5lLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZWxpbmVEYXRhKHtcclxuICAgICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydBbm7DqWUnXSksXHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdFc3DDqGNlcycsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydFc3DDqGNlcyBSZWNlbnPDqWVzJ10pKSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZDk3NzA2JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyMTcsIDExOSwgNiwgMC4yKScsXHJcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHRlbnNpb246IDAuMyxcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgIHBsdWdpbnM6IHsgbGVnZW5kOiB7IGxhYmVsczogeyBjb2xvcjogJyNlN2U1ZTQnLCBmb250OiB7IGZhbWlseTogJ3NlcmlmJyB9IH0gfSB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHk6IHsgdGlja3M6IHsgY29sb3I6ICcjYThhMjllJyB9LCBncmlkOiB7IGNvbG9yOiAnIzQ0NDAzYycgfSB9LFxyXG4gICAgICB4OiB7IHRpY2tzOiB7IGNvbG9yOiAnI2E4YTI5ZScgfSwgZ3JpZDogeyBjb2xvcjogJyM0NDQwM2MnIH0gfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIGFuaW1hdGUtZmFkZS1pblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNCBkcm9wLXNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgTCdPYnNlcnZhdG9pcmUgZGUgQmVya1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCB0ZXh0LWxnIGl0YWxpYyBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMzAgaW5saW5lLWJsb2NrIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIFJlY2Vuc2VtZW50IG9mZmljaWVsIGRlIGwnYXJjaGlwZWxcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5UcsOpc29yIGRlIEd1ZXJyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Ym94T2ZmaWNlRGF0YSA/IDxCYXIgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17Ym94T2ZmaWNlRGF0YX0gLz4gOiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPkNoYXJnZW1lbnQuLi48L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5DbGFucyAmIFRyaWJ1czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3B1bGF0aW9uRGF0YSA/IDxEb3VnaG51dCBvcHRpb25zPXt7Li4ub3B0aW9ucywgc2NhbGVzOnt9fX0gZGF0YT17cG9wdWxhdGlvbkRhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5DaGFyZ2VtZW50Li4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIG1kOmNvbC1zcGFuLTIgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5DaHJvbm9sb2dpZSBkZXMgRMOpY291dmVydGVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04MCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lbGluZURhdGEgPyA8TGluZSBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXt0aW1lbGluZURhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5DaGFyZ2VtZW50Li4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0c1BhZ2U7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiY3JlYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhvbWVQYWdlIiwiRm9ydW1QYWdlIiwiQXJ0aWNsZVBhZ2UiLCJTdGF0c1BhZ2UiLCJOYXZiYXIiLCJSZWdpc3RlclBhZ2UiLCJMb2dpblBhZ2UiLCJBcnRpY2xlU2hvdyIsIkFkbWluRGFzaGJvYXJkIiwiY29uc29sZSIsImxvZyIsIkFwcCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwicHJpbWFyeUNvbG9yIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInBhdGgiLCJlbGVtZW50Iiwicm9vdEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJlcnJvciIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiQXJyYXkiLCJmcm9tIiwiaXNBcnJheSIsIl9hcnJheUxpa2VUb0FycmF5IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlc3QiLCJuZXh0IiwicHVzaCIsInVzZVN0YXRlIiwiQ3N2Q2hhcnQiLCJBcnRpY2xlRm9ybSIsIl9yZWYiLCJfcmVmJGlkIiwiaWQiLCJvblN1Y2Nlc3MiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwidGl0bGUiLCJzZXRUaXRsZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImJsb2NzIiwic2V0QmxvY3MiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm11c2ljTGlicmFyeSIsInNldE11c2ljTGlicmFyeSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiZGF0YXNldExpYnJhcnkiLCJzZXREYXRhc2V0TGlicmFyeSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzIiwiZXJyIiwiYWRkQmxvYyIsInR5cGUiLCJjb25jYXQiLCJjb250ZW50IiwibWVkaWFVcmwiLCJ2aXpUeXBlIiwiZmlsZSIsIkRhdGUiLCJub3ciLCJyZW1vdmVCbG9jIiwiaW5kZXhUb1JlbW92ZSIsImZpbHRlciIsIl8iLCJpbmRleCIsInVwZGF0ZUJsb2MiLCJmaWVsZCIsIm5ld0Jsb2NzIiwiaGFuZGxlRmlsZUNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwic3RhcnRzV2l0aCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZVN1Ym1pdCIsIl9yZWYyIiwiX2NhbGxlZSIsImZvcm1EYXRhIiwidG9rZW4iLCJlcnJvckRhdGEiLCJfdCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZvckVhY2giLCJibG9jIiwiaW5jbHVkZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJhbGVydCIsIm1lc3NhZ2UiLCJfeCIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwibWFwIiwia2V5Iiwib25DbGljayIsImFjY2VwdCIsInNvdXJjZSIsImRpc2FibGVkIiwiY3N2VXJsIiwiZW50cmllcyIsIl9yZWYzIiwiX3JlZjQiLCJmb2xkZXIiLCJsYWJlbCIsInRvVXBwZXJDYXNlIiwiVG9vbEJ0biIsIl9yZWY1IiwidXNlUGFyYW1zIiwiTGluayIsIlZpa2luZ1BsYXllciIsIl9hcnRpY2xlJGJsb2NzIiwiX2FydGljbGUkYmxvY3MyIiwiX2FydGljbGUkYXV0aG9yIiwiX3VzZVBhcmFtcyIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwicmVqZWN0IiwibXVzaWNCbG9jIiwiZmluZCIsImIiLCJtdXNpY1NyYyIsImNvbnRlbnRCbG9jcyIsInNvcnQiLCJwb3NpdGlvbiIsInRvIiwiYXV0b1BsYXkiLCJwYXJ0cyIsInNwbGl0IiwiYXV0aG9yIiwicHNldWRvIiwiY3JlYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiUGFwYSIsIkJhckNoYXJ0IiwiQmFyIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiTGVnZW5kIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkxpbmVDaGFydCIsIkxpbmUiLCJQaWVDaGFydCIsIlBpZSIsIkNlbGwiLCJDT0xPUlMiLCJfcmVmJHZpelR5cGUiLCJzZXREYXRhIiwic2V0RXJyb3IiLCJ0ZXh0IiwiY3N2VGV4dCIsInBhcnNlIiwiaGVhZGVyIiwiZHluYW1pY1R5cGluZyIsInNraXBFbXB0eUxpbmVzIiwiY29tcGxldGUiLCJyZXN1bHRzIiwia2V5cyIsInhLZXkiLCJ5S2V5IiwicmVuZGVyQ2hhcnQiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2UiLCJkYXRhS2V5IiwiY29udGVudFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsInN0cm9rZVdpZHRoIiwiZG90IiwiYWN0aXZlRG90IiwiY3giLCJjeSIsImxhYmVsTGluZSIsInBlcmNlbnQiLCJ0b0ZpeGVkIiwib3V0ZXJSYWRpdXMiLCJmaWxsIiwibmFtZUtleSIsImVudHJ5IiwiY3Vyc29yIiwicmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJEYXRhUHJvdmlkZXJTcGFjZSIsImRhdGFzZXRzIiwic2V0RmlsZSIsInByZXZpZXciLCJzZXRQcmV2aWV3Iiwic2V0SGVhZGVycyIsImNvbHVtbk1hcHBpbmciLCJzZXRDb2x1bW5NYXBwaW5nIiwiZGF0YXNldE5hbWUiLCJzZXREYXRhc2V0TmFtZSIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJzZWxlY3RlZEZpbGUiLCJyZXBsYWNlIiwiY29scyIsImluaXRpYWxNYXBwaW5nIiwiaCIsInRvZ2dsZVR5cGUiLCJwcmV2IiwiaGFuZGxlVXBsb2FkIiwicGF5bG9hZCIsIm1ldGFkYXRhIiwiY29sdW1ucyIsInVwbG9hZGVkQXQiLCJ0b0lTT1N0cmluZyIsInJvd0NvdW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwicm93IiwiZHMiLCJyb3dzQ291bnQiLCJEZXNpZ25lclNwYWNlIiwic2V0Q29sb3IiLCJpc1NhdmluZyIsInNldElzU2F2aW5nIiwiY3VycmVudENvbG9yIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0cmltIiwiaGFuZGxlQ29sb3JDaGFuZ2UiLCJuZXdDb2xvciIsImhhbmRsZVZhbGlkYXRlIiwiaGFuZGxlUmVzZXQiLCJfY2FsbGVlMiIsImRlZmF1bHRDb2xvciIsIl90MiIsIl9jb250ZXh0MiIsImNvbmZpcm0iLCJ1c2VOYXZpZ2F0ZSIsImp3dERlY29kZSIsIl91c2VyIiwiX3VzZXIyIiwiX3VzZXIzIiwibmF2aWdhdGUiLCJ1c2VyIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImNhblNlZURhc2hib2FyZCIsInJvbGVzIiwiRnJhZ21lbnQiLCJ1c2VSZWYiLCJTdXNwZW5zZSIsIkNhbnZhcyIsInVzZUZyYW1lIiwidXNlVGhyZWUiLCJ1c2VHTFRGIiwidXNlQW5pbWF0aW9ucyIsIkNlbnRlciIsIkh0bWwiLCJ1c2VUZXh0dXJlIiwiU3RhcnMiLCJNT0RFTF9QQVRIIiwiVEVYVFVSRV9QQVRIIiwiQU5JTUFUSU9OX05BTUUiLCJEcmFnb25Nb2RlbCIsInZpdGVzc2VSb3RhdGlvbiIsInZpdGVzc2VBbmltYXRpb24iLCJmYWN0ZXVyVGFpbGxlIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJfdXNlR0xURiIsInNjZW5lIiwiYW5pbWF0aW9ucyIsInRleHR1cmUiLCJfdXNlVGhyZWUiLCJ2aWV3cG9ydCIsImJhc2VTY2FsZSIsImZpbmFsU2NhbGUiLCJmbGlwWSIsImNvbG9yU3BhY2UiLCJncm91cCIsIl91c2VBbmltYXRpb25zIiwiYWN0aW9ucyIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInRyYXZlcnNlIiwiY2hpbGQiLCJpc01lc2giLCJtYXRlcmlhbCIsIm5lZWRzVXBkYXRlIiwiYWN0aW9uIiwicmVzZXQiLCJmYWRlSW4iLCJwbGF5IiwidGltZVNjYWxlIiwidG9nZ2xlQW5pbWF0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwicGF1c2VkIiwiY3VycmVudCIsInJvdGF0aW9uIiwiX2V4dGVuZHMiLCJyZWYiLCJvYmplY3QiLCJvblBvaW50ZXJPdmVyIiwib25Qb2ludGVyT3V0Iiwic2NhbGUiLCJOaWdodEZ1cnlTY2VuZSIsInJvdFNwZWVkIiwic2V0Um90U3BlZWQiLCJhbmltU3BlZWQiLCJzZXRBbmltU3BlZWQiLCJzaXplRmFjdG9yIiwic2V0U2l6ZUZhY3RvciIsInNoYWRvd3MiLCJjYW1lcmEiLCJmb3YiLCJhdHRhY2giLCJhcmdzIiwiZGVwdGgiLCJjb3VudCIsImZhY3RvciIsInNhdHVyYXRpb24iLCJmYWRlIiwic3BlZWQiLCJpbnRlbnNpdHkiLCJmYWxsYmFjayIsImNlbnRlciIsInRvcCIsIm1pbiIsIm1heCIsInN0ZXAiLCJwYXJzZUZsb2F0IiwicHJlbG9hZCIsIl9yZWYkYXV0b1BsYXkiLCJhdWRpb1JlZiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImlzQmxvY2tlZCIsInNldElzQmxvY2tlZCIsInBsYXlQcm9taXNlIiwidW5kZWZpbmVkIiwidG9nZ2xlUGxheSIsInBhdXNlIiwiaGFuZGxlVGltZVVwZGF0ZSIsInRvdGFsIiwiZm9ybWF0VGltZSIsImhhbmRsZVNlZWsiLCJjbGllbnRXaWR0aCIsImNsaWNrWCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WCIsInRpbWUiLCJpc05hTiIsIk1hdGgiLCJmbG9vciIsInNlYyIsImJhcnMiLCJhbmltYXRpb25EdXJhdGlvbiIsInJhbmRvbSIsIm9uVGltZVVwZGF0ZSIsIm9uRW5kZWQiLCJvbkxvYWRlZE1ldGFkYXRhIiwidmlld0JveCIsIl9jdXJyZW50VXNlciIsIl9kYXRhJGFsbFVzZXJzIiwiX2RhdGEkbWFuYWdlbWVudEFydGljIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJjdXJyZW50VXNlciIsImlzRnVsbEFkbWluIiwiaXNQcm92aWRlciIsImlzRGVzaWduZXIiLCJpc0VkaXRvciIsImxvYWRTdGF0cyIsImhhbmRsZVByb21vdGUiLCJ1c2VySWQiLCJ1cGRhdGVkRGF0YSIsImFsbFVzZXJzIiwibmV3Um9sZXMiLCJ1c2Vyc0NvdW50IiwiYXJ0aWNsZXNDb3VudCIsInRvTG93ZXJDYXNlIiwiam9pbiIsIm1hbmFnZW1lbnRBcnRpY2xlcyIsImFydCIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJzZXRVc2VyIiwidmlldyIsInNldFZpZXciLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsImRlY29kZWQiLCJmZXRjaEFydGljbGVzIiwiaGFuZGxlRGVsZXRlIiwiYUlkIiwicG9wIiwiaGFuZGxlU3VjY2VzcyIsImhhc1JvbGUiLCJyb2xlIiwiX3VzZXIkcm9sZXMiLCJjYW5DcmVhdGUiLCJfYXJ0aWNsZSRhdXRob3IyIiwiX2FydGljbGUkYXV0aG9yMyIsImNsZWFuSWQiLCJpc093bmVyIiwidXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNldEl0ZW0iLCJocmVmIiwicGxhaW5QYXNzd29yZCIsInNldEZvcm1EYXRhIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIlRpdGxlIiwiQXJjRWxlbWVudCIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiRG91Z2hudXQiLCJyZWdpc3RlciIsImJveE9mZmljZURhdGEiLCJzZXRCb3hPZmZpY2VEYXRhIiwicG9wdWxhdGlvbkRhdGEiLCJzZXRQb3B1bGF0aW9uRGF0YSIsInRpbWVsaW5lRGF0YSIsInNldFRpbWVsaW5lRGF0YSIsImxvYWRDU1YiLCJ1cmwiLCJjYWxsYmFjayIsInR4dCIsImxpbmVzIiwidmFscyIsInJlZHVjZSIsImFjYyIsImxhYmVscyIsImJvcmRlcldpZHRoIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJ0ZW5zaW9uIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicGx1Z2lucyIsImxlZ2VuZCIsImZvbnQiLCJmYW1pbHkiLCJzY2FsZXMiLCJ0aWNrcyIsImdyaWQiLCJ4Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=