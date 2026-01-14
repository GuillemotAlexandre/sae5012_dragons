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
/* harmony import */ var _pages_AdminDashboard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/AdminDashboard */ "./assets/pages/AdminDashboard.jsx");




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
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_pages_ArticlePage__WEBPACK_IMPORTED_MODULE_11__["default"], null)
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
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_pages_AdminDashboard__WEBPACK_IMPORTED_MODULE_16__["default"], null)
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


var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center py-16 animate-fade-in-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-6xl md:text-8xl font-dragon text-transparent bg-clip-text bg-gradient-to-r from-viking-gold via-yellow-500 to-viking-gold mb-8 drop-shadow-sm"
  }, "Bienvenue dans l'Antre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-24 h-1 bg-viking-red mx-auto mb-8 rounded-full shadow-[0_0_10px_#dc2626]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-2xl text-viking-light mb-12 max-w-3xl mx-auto font-serif italic leading-relaxed"
  }, "\"L\xE0 o\xF9 les cartes s'arr\xEAtent, l'aventure commence. Explorez les l\xE9gendes, partagez vos d\xE9couvertes et analysez les donn\xE9es de l'archipel de Berk.\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_papaparse_papaparse_min_js-node_modules_react-dom_client_js-node_modules-e7d27a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsYUFBQSxLQUFNeU4sT0FBTztNQUFFTyxNQUFNLEVBQUMsQ0FBQztJQUFDLEVBQUU7SUFBQzFWLElBQUksRUFBRStUO0VBQWUsQ0FBRSxDQUFDLGdCQUFHdFYsMkRBQUE7SUFBRzhCLFNBQVMsRUFBQztFQUFtQixHQUFDLGVBQWdCLENBQ3pJLENBQ0osQ0FBQyxlQUVOOUIsMkRBQUE7SUFBSzhCLFNBQVMsRUFBQztFQUEyRixnQkFDdEc5QiwyREFBQTtJQUFLOEIsU0FBUyxFQUFDO0VBQWlELENBQU0sQ0FBQyxlQUN2RTlCLDJEQUFBO0lBQUk4QixTQUFTLEVBQUM7RUFBc0MsR0FBQyxnQ0FBK0IsQ0FBQyxlQUNyRjlCLDJEQUFBO0lBQUs4QixTQUFTLEVBQUM7RUFBZSxHQUN6QjBULFlBQVksZ0JBQUd4ViwyREFBQSxDQUFDa1Ysa0RBQUk7SUFBQ3dCLE9BQU8sRUFBRUEsT0FBUTtJQUFDblYsSUFBSSxFQUFFaVU7RUFBYSxDQUFFLENBQUMsZ0JBQUd4ViwyREFBQTtJQUFHOEIsU0FBUyxFQUFDO0VBQW1CLEdBQUMsZUFBZ0IsQ0FDakgsQ0FDSixDQUNKLENBQ0osQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZXJCLFNBQVMsRTs7Ozs7Ozs7Ozs7QUN6SHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvY29tcG9uZW50cy9BcnRpY2xlRm9ybS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL2NvbXBvbmVudHMvRGF0YVByb3ZpZGVyU3BhY2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL0Rlc2lnbmVyU3BhY2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0FkbWluRGFzaGJvYXJkLmpzeCIsIndlYnBhY2s6Ly9zYWU1MDEyLWRyYWdvbnMvLi9hc3NldHMvcGFnZXMvQXJ0aWNsZVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Gb3J1bVBhZ2UuanN4Iiwid2VicGFjazovL3NhZTUwMTItZHJhZ29ucy8uL2Fzc2V0cy9wYWdlcy9Ib21lUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL0xvZ2luUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL1JlZ2lzdGVyUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3BhZ2VzL1N0YXRzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FlNTAxMi1kcmFnb25zLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7IC8vIEFqb3V0IGRlIHVzZUVmZmVjdFxyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vIEltcG9ydCBkZXMgc3R5bGVzXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBJbXBvcnQgZGVzIHBhZ2VzXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3BhZ2VzL0hvbWVQYWdlJztcclxuaW1wb3J0IEZvcnVtUGFnZSBmcm9tICcuL3BhZ2VzL0ZvcnVtUGFnZSc7XHJcbmltcG9ydCBBcnRpY2xlUGFnZSBmcm9tICcuL3BhZ2VzL0FydGljbGVQYWdlJztcclxuaW1wb3J0IFN0YXRzUGFnZSBmcm9tICcuL3BhZ2VzL1N0YXRzUGFnZSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBSZWdpc3RlclBhZ2UgZnJvbSAnLi9wYWdlcy9SZWdpc3RlclBhZ2UnO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJy4vcGFnZXMvTG9naW5QYWdlJztcclxuXHJcbi8vIE5PVVZFQVUgOiBJbXBvcnQgZGUgbGEgcGFnZSBEYXNoYm9hcmQgQWRtaW5cclxuaW1wb3J0IEFkbWluRGFzaGJvYXJkIGZyb20gJy4vcGFnZXMvQWRtaW5EYXNoYm9hcmQnO1xyXG5cclxuY29uc29sZS5sb2coXCLwn5CyIETDqW1hcnJhZ2UgZGUgbCdhcHBsaWNhdGlvbiBEcmFnb25DTVMuLi5cIik7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIC0tLSBTWVNUw4hNRSBERSBDSEFSR0VNRU5UIERVIERFU0lHTiAtLS1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gT24gdmEgY2hlcmNoZXIgbGUgZmljaGllciBKU09OIGfDqW7DqXLDqSBwYXIgdG9uIFBIUFxyXG4gICAgICAgIGZldGNoKCcvZGVzaWduX2NvbmZpZy5qc29uJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiUGFzIGRlIGNvbmZpZyB0cm91dsOpZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHJpbWFyeUNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT24gYXBwbGlxdWUgbGEgY291bGV1ciBzYXV2ZWdhcmTDqWUgw6AgbGEgdmFyaWFibGUgQ1NTXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZpa2luZy1vcmFuZ2UnLCBkYXRhLnByaW1hcnlDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46oIERlc2lnbiBjaGFyZ8OpIGRlcHVpcyBsYSBmb3JnZSA6XCIsIGRhdGEucHJpbWFyeUNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4oS577iPIFV0aWxpc2F0aW9uIGRlcyBjb3VsZXVycyBwYXIgZMOpZmF1dCBkdSB2aWxsYWdlLlwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7IC8vIFMnZXjDqWN1dGUgdW5lIHNldWxlIGZvaXMgYXUgY2hhcmdlbWVudFxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBmb250LXNhbnMgdGV4dC12aWtpbmctcGFyY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogQkFOTknDiFJFICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0zMiBtZDpoLTQ4IG92ZXJmbG93LWhpZGRlbiBib3JkZXItYi00IGJvcmRlci12aWtpbmctZ29sZCByZWxhdGl2ZSBzaGFkb3ctMnhsIGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9iYW5uaWVyZS5wbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFubmnDqHJlIERyYWdvbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tdmlraW5nLWRhcmsgdG8tdHJhbnNwYXJlbnQgb3BhY2l0eS02MFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktMTAgcHgtNCBmbGV4LWdyb3cgcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZm9ydW1cIiBlbGVtZW50PXs8Rm9ydW1QYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9mb3J1bS9hcnRpY2xlLzppZFwiIGVsZW1lbnQ9ezxBcnRpY2xlUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc3RhdGlzdGlxdWVcIiBlbGVtZW50PXs8U3RhdHNQYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGVsZW1lbnQ9ezxSZWdpc3RlclBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBOT1VWRUxMRSBST1VURSA6IFNhbGxlIGR1IENvbnNlaWwgKEFkbWluKSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiBlbGVtZW50PXs8QWRtaW5EYXNoYm9hcmQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIGJvcmRlci10IGJvcmRlci12aWtpbmctZ29sZC8zMCBweS02IG10LTEwIHRleHQtY2VudGVyIHRleHQtdmlraW5nLWxpZ2h0IGZvbnQtZHJhZ29uIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD7CqSBMJ0FjYWTDqW1pZSBkZSBCZXJrIC0gQXJjaGl2ZXMgRHJhY29uaXF1ZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LXJvb3QnKTtcclxuaWYgKHJvb3RFbGVtZW50KSB7XHJcbiAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChyb290RWxlbWVudCk7XHJcbiAgICByb290LnJlbmRlcig8QXBwIC8+KTtcclxuICAgIGNvbnNvbGUubG9nKFwi4pyFIFJlYWN0IGluamVjdMOpIGF2ZWMgc3VjY8OocyAhXCIpO1xyXG59IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBJbXBvc3NpYmxlIGRlIHRyb3V2ZXIgbCfDqWzDqW1lbnQgI3JlYWN0LXJvb3RcIik7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFydGljbGVGb3JtID0gKHsgaWQsIG9uU3VjY2VzcyB9KSA9PiB7XHJcbiAgICBjb25zdCBpc0VkaXRNb2RlID0gQm9vbGVhbihpZCk7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIHN1bW1hcnk6ICcnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICcnIC8vIEFzc3VyZS10b2kgcXVlIGNlIGNoYW1wIGV4aXN0ZSBkYW5zIHRvbiBlbnRpdMOpIEFydGljbGUucGhwXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0VkaXRNb2RlKSB7XHJcbiAgICAgICAgICAgIGZldGNoKGAvYXBpL2FydGljbGVzLyR7aWR9YCwgeyBcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyB9IFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRGb3JtRGF0YSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSB8fCAnJyxcclxuICAgICAgICAgICAgICAgIHN1bW1hcnk6IGRhdGEuc3VtbWFyeSB8fCAnJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCB8fCAnJ1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkLCBpc0VkaXRNb2RlXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSU1QT1JUQU5UIDogUG91ciBBUEkgUGxhdGZvcm0sIGxlIGZvcm1hdCBwYXIgZMOpZmF1dCBlc3QgSlNPTi1MRFxyXG4gICAgICAgIC8vIEVuIGNhcyBkZSBtb2RpZmljYXRpb24gKFBVVC9QQVRDSCksIG9uIHV0aWxpc2Ugc291dmVudCBQQVRDSCBwb3VyIMOpdml0ZXIgbGVzIGVycmV1cnMgNDE1XHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gaXNFZGl0TW9kZSA/ICdQQVRDSCcgOiAnUE9TVCc7XHJcbiAgICAgICAgY29uc3QgdXJsID0gaXNFZGl0TW9kZSA/IGAvYXBpL2FydGljbGVzLyR7aWR9YCA6ICcvYXBpL2FydGljbGVzJztcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvcnJlY3Rpb24gZGUgbCdlcnJldXIgNDE1IDogb24gcHLDqWNpc2UgbGUgZm9ybWF0IExEK0pTT05cclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogaXNFZGl0TW9kZSA/ICdhcHBsaWNhdGlvbi9tZXJnZS1wYXRjaCtqc29uJyA6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIG9uU3VjY2VzcygpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNpIMOnYSDDqWNob3VlIGVuY29yZSwgb24gcmVnYXJkZSBsZSBkw6l0YWlsIGRhbnMgbGEgY29uc29sZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkTDqXRhaWwgZGUgbCdlcnJldXIgc2VydmV1ciA6XCIsIGVycm9yRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkxlIEdyYW5kIENvbnNlaWwgcmVmdXNlIGNlIHBhcmNoZW1pbi4gVsOpcmlmaWV6IGxlIGZvcm1hdCBkZXMgZG9ubsOpZXMuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgcsOpc2VhdSA6XCIsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG8gcC04IGJnLXN0b25lLTkwMCBib3JkZXItMiBib3JkZXItdmlraW5nLWdvbGQgc2hhZG93LTJ4bCByb3VuZGVkLXNtXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtpc0VkaXRNb2RlID8gXCJNb2RpZmllciBsZSBwYXJjaGVtaW5cIiA6IFwiR3JhdmVyIHVuIG5vdXZlYXUgcsOpY2l0XCJ9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc3RvbmUtNDAwIG1iLTIgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LVsxMHB4XSB0cmFja2luZy13aWRlc3RcIj5UaXRyZSBkZSBsYSBsw6lnZW5kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNDAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXN0b25lLTQwMCBtYi0yIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1bMTBweF0gdHJhY2tpbmctd2lkZXN0XCI+UsOpc3Vtw6kgKEFwcGFyYcOudCBzdXIgbGUgbXVyKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNDAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSBoLTI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnN1bW1hcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBzdW1tYXJ5OiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXN0b25lLTQwMCBtYi0yIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1bMTBweF0gdHJhY2tpbmctd2lkZXN0XCI+RMOpdGFpbHMgZGUgbCdhdmVudHVyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNDAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSBoLTQ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBjb250ZW50OiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBmb250LWJsYWNrIHB5LTQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzRWRpdE1vZGUgPyBcIk1ldHRyZSDDoCBqb3VyXCIgOiBcIlNjZWxsZXIgbGUgcsOpY2l0XCJ9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVGb3JtOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGEgZnJvbSAncGFwYXBhcnNlJztcclxuXHJcbmNvbnN0IERhdGFQcm92aWRlclNwYWNlID0gKHsgZGF0YXNldHMgfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaGVhZGVycywgc2V0SGVhZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY29sdW1uTWFwcGluZywgc2V0Q29sdW1uTWFwcGluZ10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZGF0YXNldE5hbWUsIHNldERhdGFzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNldEZpbGUoc2VsZWN0ZWRGaWxlKTtcclxuICAgICAgICBzZXREYXRhc2V0TmFtZShzZWxlY3RlZEZpbGUubmFtZS5yZXBsYWNlKCcuY3N2JywgJycpKTtcclxuXHJcbiAgICAgICAgUGFwYS5wYXJzZShzZWxlY3RlZEZpbGUsIHtcclxuICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcclxuICAgICAgICAgICAgcHJldmlldzogNSxcclxuICAgICAgICAgICAgY29tcGxldGU6IChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xzID0gT2JqZWN0LmtleXMocmVzdWx0cy5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXJzKGNvbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByZXZpZXcocmVzdWx0cy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsTWFwcGluZyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHMuZm9yRWFjaChoID0+IGluaXRpYWxNYXBwaW5nW2hdID0gJ2NhdGVnb3JpY2FsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29sdW1uTWFwcGluZyhpbml0aWFsTWFwcGluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlVHlwZSA9IChoZWFkZXIpID0+IHtcclxuICAgICAgICBzZXRDb2x1bW5NYXBwaW5nKHByZXYgPT4gKHtcclxuICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgW2hlYWRlcl06IHByZXZbaGVhZGVyXSA9PT0gJ2NhdGVnb3JpY2FsJyA/ICdudW1lcmljYWwnIDogJ2NhdGVnb3JpY2FsJ1xyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgICAgIC8vIFByw6lwYXJhdGlvbiBkdSBwYXlsb2FkIGNvbmZvcm1lIMOgIEFQSSBQbGF0Zm9ybVxyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGFzZXROYW1lLFxyXG4gICAgICAgICAgICBzb3VyY2U6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbk1hcHBpbmcsXHJcbiAgICAgICAgICAgICAgICB1cGxvYWRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICByb3dDb3VudDogcHJldmlldy5sZW5ndGggLy8gSW5mb3JtYXRpb24gdXRpbGUgcG91ciB0b24gYWZmaWNoYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2RhdGFzZXRzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGNydWNpYWwgaWNpIHBvdXIgw6l2aXRlciBsJ2VycmV1ciA0MTVcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vbGQranNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQYXJjaGVtaW4gZGUgZG9ubsOpZXMgZW5yZWdpc3Ryw6kgZGFucyBsYSBiaWJsaW90aMOocXVlIGQnT2RpbiAhXCIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSw6lwb25zZSBkdSBzZXJ2ZXVyIDpcIiwgZXJyb3JEYXRhKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIDogTGUgU2NyaWJlIHJlZnVzZSBsZSBmb3JtYXQgZHUgZmljaGllci5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIHLDqXNlYXVcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgYW5pbWF0ZS1mYWRlSW5cIj5cclxuICAgICAgICAgICAgey8qIEZvcm11bGFpcmUgZCdpbXBvcnRhdGlvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay80MCBwLTYgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCByb3VuZGVkLWxnIHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgZm9udC1kcmFnb24gdGV4dC14bCBtYi00IHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj5Ob3V2ZWxsZSBBcmNoaXZlIGRlIERvbm7DqWVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zdG9uZS01MDAgdGV4dC1bMTBweF0gdXBwZXJjYXNlIGZvbnQtYmxhY2sgbWItMlwiPkZpY2hpZXIgQ1NWIHVuaXF1ZW1lbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIi5jc3ZcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCB0ZXh0LXNtIHRleHQtc3RvbmUtNDAwIGZpbGU6bXItNCBmaWxlOnB5LTIgZmlsZTpweC00IGZpbGU6cm91bmRlZCBmaWxlOmJvcmRlci0wIGZpbGU6dGV4dC14cyBmaWxlOmZvbnQtYmxhY2sgZmlsZTp1cHBlcmNhc2UgZmlsZTpiZy12aWtpbmctZ29sZCBmaWxlOnRleHQtYmxhY2sgaG92ZXI6ZmlsZTpiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpbGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LWF1dG8gcHQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9IGRpc2FibGVkPXtpc1VwbG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWZpcmUgdGV4dC13aGl0ZSBweS0zIHB4LTggZm9udC1ibGFjayB1cHBlcmNhc2UgdGV4dC14cyBzaGFkb3ctbGcgaG92ZXI6c2NhbGUtMTA1IGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOmdyYXlzY2FsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzVXBsb2FkaW5nID8gJ0dyYXZ1cmUuLi4nIDogJ1NjZWxsZXIgbFxcJ0FyY2hpdmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQXBlcsOndSBUZWNobmlxdWUgKi99XHJcbiAgICAgICAgICAgIHtwcmV2aWV3Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS05MDAvODAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8xMCByb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svNDAgcC0zIGJvcmRlci1iIGJvcmRlci13aGl0ZS81XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRleHQtdmlraW5nLWdvbGQvNTBcIj5BbmFseXNlIGRlIGxhIHN0cnVjdHVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBib3JkZXItY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctYmxhY2svNjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcnMubWFwKGggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aH0gY2xhc3NOYW1lPVwicC00IGJvcmRlci1yIGJvcmRlci13aGl0ZS81IG1pbi13LVsxNTBweF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXBhcmNobWVudCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0zIHRydW5jYXRlXCI+e2h9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlVHlwZShoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1bOXB4XSBweC0zIHB5LTEgcm91bmRlZC1mdWxsIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXIgdHJhbnNpdGlvbi1jb2xvcnMgJHtjb2x1bW5NYXBwaW5nW2hdID09PSAnbnVtZXJpY2FsJyA/ICdiZy1ibHVlLTYwMC8yMCB0ZXh0LWJsdWUtNDAwIGJvcmRlciBib3JkZXItYmx1ZS01MDAvMzAnIDogJ2JnLWVtZXJhbGQtNjAwLzIwIHRleHQtZW1lcmFsZC00MDAgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTUwMC8zMCd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5NYXBwaW5nW2hdID09PSAnbnVtZXJpY2FsJyA/ICfwn5SiIE51bcOpcmlxdWUnIDogJ/CflKQgQ2F0w6lnb3JpZWwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXZpZXcubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcnMubWFwKGggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2h9IGNsYXNzTmFtZT1cInAtNCB0ZXh0LVsxMXB4XSB0ZXh0LXN0b25lLTQwMCBib3JkZXItciBib3JkZXItd2hpdGUvNSBpdGFsaWNcIj57cm93W2hdfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBBcmNoaXZlcyBleGlzdGFudGVzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZC80MCBmb250LWRyYWdvbiB0ZXh0LXNtIG1iLTYgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMjAgcGItMlwiPlJlZ2lzdHJlcyBkw6lqw6AgcHLDqXNlbnRzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhc2V0cz8ubGVuZ3RoID4gMCA/IGRhdGFzZXRzLm1hcChkcyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkcy5pZH0gY2xhc3NOYW1lPVwicC00IGJnLWJsYWNrLzIwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIGhvdmVyOmJvcmRlci12aWtpbmctZ29sZC80MCB0cmFuc2l0aW9uLWFsbCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9udC1ib2xkIHRleHQtc20gZ3JvdXAtaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWNvbG9yc1wiPntkcy5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1zdG9uZS02MDAgdXBwZXJjYXNlIGZvbnQtYm9sZCBpdGFsaWNcIj57ZHMuc291cmNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGJnLXN0b25lLTgwMCBweC0yIHB5LTAuNSByb3VuZGVkIHRleHQtc3RvbmUtNDAwXCI+e2RzLnJvd3NDb3VudH0gbGlnbmVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgcHktMTAgdGV4dC1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItc3RvbmUtODAwIHRleHQtc3RvbmUtNjAwIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuZSBkb25uw6llIG4nYSDDqXTDqSBncmF2w6llIHBvdXIgbGUgbW9tZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlclNwYWNlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRGVzaWduZXJTcGFjZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoJyNlNjdlMjInKTtcclxuICAgIGNvbnN0IFtpc1NhdmluZywgc2V0SXNTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXHJcbiAgICAgICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCctLXZpa2luZy1vcmFuZ2UnKS50cmltKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb2xvcikge1xyXG4gICAgICAgICAgICBzZXRDb2xvcihjdXJyZW50Q29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb2xvckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3Q29sb3IgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRDb2xvcihuZXdDb2xvcik7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZpa2luZy1vcmFuZ2UnLCBuZXdDb2xvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVZhbGlkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzU2F2aW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYWRtaW4vc2F2ZS1kZXNpZ24nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbG9yOiBjb2xvciB9KVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLimpLvuI8gU3VjY8OocyA6IExlIHZpbGxhZ2UgYSBhZG9wdMOpIHZvcyBub3V2ZWxsZXMgY291bGV1cnMgIVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi4pqg77iPIEVycmV1ciA6IExlIEdyYW5kIENvbnNlaWwgYSByZWZ1c8OpIGxhIG1vZGlmaWNhdGlvbi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgc2F1dmVnYXJkZTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydChcIuKdjCBMYSBmb3JnZSBlc3Qgw6l0ZWludGUuIFbDqXJpZmlleiB2b3RyZSBjb25uZXhpb24gYXUgc2VydmV1ci5cIik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNTYXZpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gLS0tIE5PVVZFTExFIEZPTkNUSU9OIERFIFLDiUlOSVRJQUxJU0FUSU9OIC0tLVxyXG4gICAgY29uc3QgaGFuZGxlUmVzZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShcIlZvdWxlei12b3VzIHZyYWltZW50IHJlc3RhdXJlciBsYSBjb3VsZXVyIGQnb3JpZ2luZSA/XCIpKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2FkbWluL3Jlc2V0LWRlc2lnbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9ICcjZTY3ZTIyJzsgLy8gT3JhbmdlIG9yaWdpbmFsIGRlIEJlcmtcclxuICAgICAgICAgICAgICAgIHNldENvbG9yKGRlZmF1bHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmlraW5nLW9yYW5nZScsIGRlZmF1bHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIuKaku+4jyBMZXMgYXJjaGl2ZXMgb250IMOpdMOpIHJlc3RhdXLDqWVzIDogcmV0b3VyIMOgIGwnb3JhbmdlIGFuY2VzdHJhbCAhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciByZXNldDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydChcIuKdjCBJbXBvc3NpYmxlIGRlIHLDqWluaXRpYWxpc2VyIGxlcyBjb3VsZXVycy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtOTAwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMjAgcC04IHNoYWRvdy0yeGwgcm91bmRlZC1sZyBhbmltYXRlLWluIGZhZGUtaW4gZHVyYXRpb24tNTAwXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTYgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgRm9yZ2UgZGUgbCdBcHBhcmVuY2VcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTggbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdGV4dC1zdG9uZS01MDAgZm9udC1ibGFja1wiPlRlaW50ZSBkdSBUaXRyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvbG9yQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgY3Vyc29yLXBvaW50ZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTcwMCByb3VuZGVkLXhsIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGJnLWJsYWNrLzQwIHAtOCByb3VuZGVkIGJvcmRlciBib3JkZXItc3RvbmUtODAwIHctZnVsbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNjAwIHVwcGVyY2FzZSBtYi00IHRyYWNraW5nLXdpZGVzdFwiPlJlbmR1IGVuIGRpcmVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogY29sb3IgfX0gY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmlkZXJzIG9mIEJlcmtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVmFsaWRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU2F2aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBweS00IGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLVswLjNlbV0gdHJhbnNpdGlvbi1hbGwgcm91bmRlZCBzaGFkb3ctbGcgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTYXZpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTYwMCBjdXJzb3Itbm90LWFsbG93ZWQnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy12aWtpbmctZ29sZCB0ZXh0LWJsYWNrIGhvdmVyOmJnLXllbGxvdy01MDAgYWN0aXZlOnNjYWxlLTk1IHNoYWRvdy15ZWxsb3ctOTAwLzIwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1NhdmluZyA/ICdHcmF2dXJlIGVuIGNvdXJzLi4uJyA6ICdWYWxpZGVyIGxlcyBjaGFuZ2VtZW50cyd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQk9VVE9OIERFIFLDiUlOSVRJQUxJU0FUSU9OICovfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtcmVkLTUwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUsOpaW5pdGlhbGlzZXIgbGEgY291bGV1ciBwYXIgZMOpZmF1dFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2lnbmVyU3BhY2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSAnand0LWRlY29kZSc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgbGV0IHVzZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIE9uIGTDqWNvZGUgbGUgdG9rZW4gcG91ciBjb25uYcOudHJlIGwndXRpbGlzYXRldXIgZXQgc2VzIHLDtGxlc1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXNlciA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVG9rZW4gaW52YWxpZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFbDqXJpZmljYXRpb24gZGVzIGRyb2l0cyBwb3VyIGxlIERhc2hib2FyZFxyXG4gICAgY29uc3QgY2FuU2VlRGFzaGJvYXJkID0gdXNlcj8ucm9sZXM/LmluY2x1ZGVzKCdST0xFX0VESVRFVVInKSB8fCB1c2VyPy5yb2xlcz8uaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgYm9yZGVyLWItMiBib3JkZXItdmlraW5nLWdvbGQvNTAgcC00IHN0aWNreSB0b3AtMCB6LTUwIHNoYWRvdy1sZyBiYWNrZHJvcC1ibHVyLW1kIGJnLW9wYWNpdHktOTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZHJvcC1zaGFkb3ctbWQgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdXBwZXJjYXNlXCI+UmlkZXJzIG9mIEJlcms8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgdGV4dC1sZyBmb250LWRyYWdvbiB0cmFja2luZy13aWRlIHRleHQtdmlraW5nLWxpZ2h0IHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPkFjY3VlaWw8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC12aWtpbmctZ29sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5Gb3J1bTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMSUVOIERBU0hCT0FSRCA6IFZpc2libGUgdW5pcXVlbWVudCBwb3VyIMOJZGl0ZXVyL0FkbWluICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuU2VlRGFzaGJvYXJkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZG1pblwiIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWdvbGQgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC81MCBweC0yIHB5LTAuNSBob3ZlcjpiZy12aWtpbmctZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zZWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IGJvcmRlci1sIGJvcmRlci1zdG9uZS03MDAgcGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXRva2VuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlciBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmV4aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwiYmctdmlraW5nLWdvbGQgdGV4dC1ibGFjayBweC00IHB5LTEuNSB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlam9pbmRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSBmb250LWJsYWNrIGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcj8ucHNldWRvIHx8IFwiR3VlcnJpZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXZpa2luZy1maXJlIHVwcGVyY2FzZSBmb250LWJsYWNrIGJvcmRlciBib3JkZXItdmlraW5nLWZpcmUvMzAgcHgtMiBweS0xIGhvdmVyOmJnLXZpa2luZy1maXJlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWl0dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgRGF0YVByb3ZpZGVyU3BhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRhUHJvdmlkZXJTcGFjZSc7XHJcbmltcG9ydCBEZXNpZ25lclNwYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvRGVzaWduZXJTcGFjZSc7XHJcblxyXG5jb25zdCBBZG1pbkRhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnc3RhdHMnKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gbnVsbDtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjdXJyZW50VXNlciA9IHRva2VuID8gand0RGVjb2RlKHRva2VuKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBkZSBkw6ljb2RhZ2UgZHUgdG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRMOpZmluaXRpb24gZGVzIGFjY8OocyBzZWxvbiBsZXMgcsO0bGVzXHJcbiAgICBjb25zdCByb2xlcyA9IGN1cnJlbnRVc2VyPy5yb2xlcyB8fCBbXTtcclxuICAgIGNvbnN0IGlzRnVsbEFkbWluID0gcm9sZXMuaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcclxuICAgIGNvbnN0IGlzUHJvdmlkZXIgPSByb2xlcy5pbmNsdWRlcygnUk9MRV9GT1VSTklTU0VVUicpIHx8IGlzRnVsbEFkbWluO1xyXG4gICAgY29uc3QgaXNEZXNpZ25lciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0RFU0lHTkVSJykgfHwgaXNGdWxsQWRtaW47XHJcbiAgICBjb25zdCBpc0VkaXRvciA9IHJvbGVzLmluY2x1ZGVzKCdST0xFX0VESVRFVVInKSB8fCBpc0Z1bGxBZG1pbjtcclxuXHJcbiAgICBjb25zdCBsb2FkU3RhdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvYWRtaW4vc3RhdHMnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiQWNjw6hzIHJlZnVzw6kgcGFyIGxlIEdyYW5kIENvbnNlaWxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oanNvbiA9PiBzZXREYXRhKGpzb24pKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gc2V0RXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2FkU3RhdHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcm9tb3RlID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvYWRtaW4vdXNlci8ke3VzZXJJZH0vcHJvbW90ZWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBhbGxVc2VyczogZGF0YS5hbGxVc2Vycy5tYXAodSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdS5pZCA9PT0gdXNlcklkID8geyAuLi51LCByb2xlczogdXBkYXRlZERhdGEubmV3Um9sZXMgfSA6IHVcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikgeyBcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgbG9ycyBkdSBjaGFuZ2VtZW50IGRlIHJhbmdcIik7IFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgcC0xMCB0ZXh0LWNlbnRlciBmb250LWRyYWdvblwiPntlcnJvcn08L2Rpdj47XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBwLTEwIGZvbnQtZHJhZ29uIGFuaW1hdGUtcHVsc2UgdGV4dC1jZW50ZXJcIj5BcHBlbCBhdSBHcmFuZCBDb25zZWlsLi4uPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBwLTYgdGV4dC13aGl0ZSBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtc3RvbmUtMjAwIG1iLTEwIGJvcmRlci1iIGJvcmRlci15ZWxsb3ctNzAwLzMwIHBiLTQgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj5cclxuICAgICAgICAgICAgICAgIFBhbGFpcyBkJ0FkbWluaXN0cmF0aW9uXHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBwYXIgT25nbGV0cyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBtYi04IGJvcmRlci1iIGJvcmRlci1zdG9uZS04MDAgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3N0YXRzJyl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTYgcHktMiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYW5zaXRpb24tYWxsICR7YWN0aXZlVGFiID09PSAnc3RhdHMnID8gJ2JnLXllbGxvdy02MDAgdGV4dC1ibGFjayBzY2FsZS0xMDUnIDogJ2JnLXN0b25lLTkwMCB0ZXh0LXN0b25lLTUwMCBob3ZlcjpiZy1zdG9uZS04MDAnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIFZ1ZSBkJ2Vuc2VtYmxlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2lzRnVsbEFkbWluICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigndXNlcnMnKX0gY2xhc3NOYW1lPXtgcHgtNiBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbi1hbGwgJHthY3RpdmVUYWIgPT09ICd1c2VycycgPyAnYmcteWVsbG93LTYwMCB0ZXh0LWJsYWNrIHNjYWxlLTEwNScgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGhvdmVyOmJnLXN0b25lLTgwMCd9YH0+UG9wdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2lzRWRpdG9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignYXJ0aWNsZXMnKX0gY2xhc3NOYW1lPXtgcHgtNiBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbi1hbGwgJHthY3RpdmVUYWIgPT09ICdhcnRpY2xlcycgPyAnYmcteWVsbG93LTYwMCB0ZXh0LWJsYWNrIHNjYWxlLTEwNScgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGhvdmVyOmJnLXN0b25lLTgwMCd9YH0+Q2hyb25pcXVlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNQcm92aWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2RhdGEnKX0gY2xhc3NOYW1lPXtgcHgtNiBweS0yIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhbnNpdGlvbi1hbGwgJHthY3RpdmVUYWIgPT09ICdkYXRhJyA/ICdiZy15ZWxsb3ctNjAwIHRleHQtYmxhY2sgc2NhbGUtMTA1JyA6ICdiZy1zdG9uZS05MDAgdGV4dC1zdG9uZS01MDAgaG92ZXI6Ymctc3RvbmUtODAwJ31gfT5Eb25uw6llcyAoQ1NWKTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNEZXNpZ25lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2Rlc2lnbicpfSBjbGFzc05hbWU9e2BweC02IHB5LTIgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFuc2l0aW9uLWFsbCAke2FjdGl2ZVRhYiA9PT0gJ2Rlc2lnbicgPyAnYmcteWVsbG93LTYwMCB0ZXh0LWJsYWNrIHNjYWxlLTEwNScgOiAnYmctc3RvbmUtOTAwIHRleHQtc3RvbmUtNTAwIGhvdmVyOmJnLXN0b25lLTgwMCd9YH0+QXBwYXJlbmNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDT05URU5VIERZTkFNSVFVRSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1bNTAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgU1RBVFMgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnc3RhdHMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTYgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXItbC00IGJvcmRlci15ZWxsb3ctNjAwIHAtOCBzaGFkb3ctMnhsIHJvdW5kZWQtci1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXN0XCI+R3VlcnJpZXJzIGRlIEJlcms8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1kcmFnb24gbXQtMiB0ZXh0LXdoaXRlXCI+e2RhdGEudXNlcnNDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0b25lLTkwMCBib3JkZXItbC00IGJvcmRlci1vcmFuZ2UtNzAwIHAtOCBzaGFkb3ctMnhsIHJvdW5kZWQtci1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXN0XCI+Q2hyb25pcXVlcyDDqWNyaXRlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWRyYWdvbiBtdC0yIHRleHQtd2hpdGVcIj57ZGF0YS5hcnRpY2xlc0NvdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgVVNFUlMgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAndXNlcnMnICYmIGlzRnVsbEFkbWluICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBhbmltYXRlLWluIHNsaWRlLWluLWZyb20tYm90dG9tLTQgZHVyYXRpb24tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNoZXJjaGVyIHVuIGd1ZXJyaWVyIGRhbnMgbGEgYnJ1bWUuLi5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrLzYwIGJvcmRlciBib3JkZXIteWVsbG93LTkwMC8zMCBwLTQgcm91bmRlZCB0ZXh0LXNtIHctZnVsbCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXllbGxvdy02MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5hbGxVc2Vycz8uZmlsdGVyKHUgPT4gdS5wc2V1ZG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpKS5tYXAodSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3UuaWR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTQgYmctc3RvbmUtOTAwLzQwIGJvcmRlciBib3JkZXItc3RvbmUtODAwIHJvdW5kZWQgaG92ZXI6Ym9yZGVyLXN0b25lLTcwMCB0cmFuc2l0aW9uLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc3RvbmUtMjAwXCI+e3UucHNldWRvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3RvbmUtNTAwIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyXCI+e3Uucm9sZXMuam9pbignIOKAoiAnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb21vdGUodS5pZCl9IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGJvcmRlciBib3JkZXIteWVsbG93LTcwMC80MCBweC00IHB5LTIgaG92ZXI6YmcteWVsbG93LTYwMCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tYWxsIGZvbnQtYmxhY2sgdXBwZXJjYXNlXCI+Q2hhbmdlciBSYW5nPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgQVJUSUNMRVMgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnYXJ0aWNsZXMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYW5hZ2VtZW50QXJ0aWNsZXM/Lm1hcChhcnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FydC5pZH0gY2xhc3NOYW1lPVwicC01IGJnLXN0b25lLTkwMC84MCBib3JkZXIgYm9yZGVyLXN0b25lLTgwMCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXN0b25lLTIwMFwiPnthcnQudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNTAwIGl0YWxpYyBtdC0xIGZvbnQtc2VyaWZcIj5kaWN0w6kgcGFyIHthcnQuYXV0aG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTYwMCB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ibGFjay8zMCBweC0yIHB5LTEgcm91bmRlZFwiPnthcnQuY3JlYXRlZEF0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE9OR0xFVCBEQVRBICovfVxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2RhdGEnICYmIGlzUHJvdmlkZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbiB6b29tLWluLTk1IGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVByb3ZpZGVyU3BhY2UgZGF0YXNldHM9e2RhdGEuZGF0YXNldHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPTkdMRVQgREVTSUdOIChUT04gTk9VVkVMIEVTUEFDRSkgKi99XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnZGVzaWduJyAmJiBpc0Rlc2lnbmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gZmFkZS1pbiBkdXJhdGlvbi03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlc2lnbmVyU3BhY2UgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluRGFzaGJvYXJkOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IEFydGljbGVQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7IGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyB9IH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LTJ4bCBweS0yMCBhbmltYXRlLXB1bHNlXCI+UmVjaGVyY2hlIGRhbnMgbGVzIGFyY2hpdmVzLi4uPC9kaXY+O1xyXG4gICAgaWYgKCFhcnRpY2xlKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXZpa2luZy1maXJlIHRleHQteGwgcHktMTBcIj5BcnRpY2xlIGludHJvdXZhYmxlIGRhbnMgbGVzIGFyY2hpdmVzLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gYW5pbWF0ZS1mYWRlLWluXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctbGlnaHQgaG92ZXI6dGV4dC13aGl0ZSBtYi02IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0cmFuc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7ihpA8L3NwYW4+IFJldG91ciBhdSBmb3J1bVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpa2luZy1yb2NrIHAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zdG9uZS02MDAgc2hhZG93LTJ4bCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIHsvKiBEw6ljb3JhdGlvbiBjb2luICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctMjAgaC0yMCBiZy12aWtpbmctZ29sZCBvcGFjaXR5LTEwIHJvdW5kZWQtYmwtZnVsbFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1nb2xkIG1iLTQgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXNtIHRleHQtc3RvbmUtNTAwIG1iLTggYm9yZGVyLWIgYm9yZGVyLXN0b25lLTcwMCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdmlraW5nLXJlZCBweC0yIHB5LTEgcm91bmRlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFyY2hpdmVcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q3LDqcOpIGxlIHtuZXcgRGF0ZShhcnRpY2xlLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgZm9udC1zZXJpZiB3aGl0ZXNwYWNlLXByZS1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUuc3VtbWFyeX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTm90ZTogTGVzIGJsb2NzIGV0IGNvbW1lbnRhaXJlcyBuw6ljZXNzaXRlbnQgdW5lIGxvZ2lxdWUgcGx1cyBwb3Vzc8OpZSDDoCBpbXBsw6ltZW50ZXIgcGx1cyB0YXJkICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IEFydGljbGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm0nO1xyXG5cclxuY29uc3QgRm9ydW1QYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgXHJcbiAgICAvLyBHZXN0aW9uIGRlIGxhIG5hdmlnYXRpb24gaW50ZXJuZVxyXG4gICAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoJ2xpc3QnKTsgLy8gJ2xpc3QnLCAnY3JlYXRlJywgJ2VkaXQnXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIDEuIFLDqWN1cMOpcmF0aW9uIGV0IGTDqWNvZGFnZSBkdSBUb2tlblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRyeSB7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkd1ZXJyaWVyIGNvbm5lY3TDqSA6XCIsIGRlY29kZWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcihkZWNvZGVkKTsgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYWRnZSAoVG9rZW4pIGludmFsaWRlIG91IGV4cGlyw6lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gMi4gQ2hhcmdlbWVudCBkZXMgY2hyb25pcXVlc1xyXG4gICAgICAgIGZldGNoQXJ0aWNsZXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEFydGljbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvYXJ0aWNsZXMnLCB7IFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2xkK2pzb24nIH0gXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0QXJ0aWNsZXMoZGF0YVsnaHlkcmE6bWVtYmVyJ10gfHwgZGF0YVsnbWVtYmVyJ10gfHwgW10pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGRlIGxpYWlzb24gYXZlYyBsZSBHcmFuZCBDb25zZWlsXCIsIGVycik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKFwiVm91bGV6LXZvdXMgdnJhaW1lbnQgZWZmYWNlciBjZSByw6ljaXQgZGUgbGEgcGllcnJlID9cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYXJ0aWNsZXMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwcmVzc2lvbiBsb2NhbGUgaW1tw6lkaWF0ZSBwb3VyIGwnaW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlcyhhcnRpY2xlcy5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYUlkID0gKGEuaWQgfHwgYVsnQGlkJ10pLnRvU3RyaW5nKCkuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUlkICE9PSBpZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJMZXMgZHJhZ29ucyBwcm90w6hnZW50IGNlIHBhcmNoZW1pbiAoRXJyZXVyIGRlIHBlcm1pc3Npb25zKS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJMZSBzZXJ2ZXVyIGVzdCBpbmpvaWduYWJsZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpZXcoJ2xpc3QnKTtcclxuICAgICAgICBzZXRTZWxlY3RlZElkKG51bGwpO1xyXG4gICAgICAgIGZldGNoQXJ0aWNsZXMoKTsgXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIC0tLSBMT0dJUVVFIERFUyBSw5RMRVMgLS0tXHJcbiAgICBjb25zdCBoYXNSb2xlID0gKHJvbGUpID0+IHVzZXI/LnJvbGVzPy5pbmNsdWRlcyhyb2xlKTtcclxuICAgIFxyXG4gICAgLy8gQXV0b3Jpc2UgbGEgY3LDqWF0aW9uIHBvdXIgQWRtaW4sIEF1dGV1ciBFVCDDiWRpdGV1clxyXG4gICAgY29uc3QgY2FuQ3JlYXRlID0gaGFzUm9sZSgnUk9MRV9BRE1JTicpIHx8IGhhc1JvbGUoJ1JPTEVfQVVURVVSJykgfHwgaGFzUm9sZSgnUk9MRV9FRElURVVSJyk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcgJiYgdmlldyA9PT0gJ2xpc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS00MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYm9yZGVyLTQgYm9yZGVyLXZpa2luZy1nb2xkIGJvcmRlci10LXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW4gbWItNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC12aWtpbmctZ29sZCBmb250LWRyYWdvbiB0ZXh0LXhsIGFuaW1hdGUtcHVsc2UgdXBwZXJjYXNlXCI+T3V2ZXJ0dXJlIGRlcyBwYXJjaGVtaW5zLi4uPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBweC00IHBiLTIwXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogLS0tIEhFQURFUiAtLS0gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIG1iLTEyIGJvcmRlci1iIGJvcmRlci12aWtpbmctZ29sZC8yMCBwYi04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWRyYWdvbiB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj5DaHJvbmlxdWVzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTUwMCBpdGFsaWMgdGV4dC1zbSBtdC0yXCI+TGUgc2F2b2lyIGR1IHZpbGxhZ2UgZGUgQmVyaywgZ3JhdsOpIHBvdXIgbCfDqXRlcm5pdMOpLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7dmlldyA9PT0gJ2xpc3QnICYmIGNhbkNyZWF0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlldygnY3JlYXRlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgcHgtOCBweS0zIGZvbnQtYmxhY2sgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMTIsMTc1LDU1LDAuMildIHVwcGVyY2FzZSB0ZXh0LXhzIHRyYWNraW5nLXdpZGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIEdyYXZlciB1biByw6ljaXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIC0tLSBWVUVTIEZPUk1VTEFJUkVTIC0tLSAqL31cclxuICAgICAgICAgICAgeyh2aWV3ID09PSAnY3JlYXRlJyB8fCB2aWV3ID09PSAnZWRpdCcpID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20tNCBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFZpZXcoJ2xpc3QnKTsgc2V0U2VsZWN0ZWRJZChudWxsKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LXN0b25lLTUwMCBob3Zlcjp0ZXh0LXZpa2luZy1nb2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb24gdXBwZXJjYXNlIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oaQIFJldG91ciBhdSBtdXIgZGVzIGzDqWdlbmRlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlRm9ybSBpZD17c2VsZWN0ZWRJZH0gb25TdWNjZXNzPXtoYW5kbGVTdWNjZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAvKiAtLS0gVlVFIExJU1RFIERFUyBBUlRJQ0xFUyAtLS0gKi9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTIwIHRleHQtc3RvbmUtNjAwIGl0YWxpY1wiPkxlIHNpbGVuY2UgcsOoZ25lIHN1ciBsZSBtdXIuLi4gQXVjdW5lIGNocm9uaXF1ZSBuJ2Egw6l0w6kgdHJvdXbDqWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5JZCA9IChhcnRpY2xlLmlkIHx8IGFydGljbGVbJ0BpZCddKS50b1N0cmluZygpLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFbDqXJpZmljYXRpb24gZGUgcHJvcHJpw6l0w6kgKEwnYXV0ZXVyIGR1IHBvc3QgT1UgdW4gcsO0bGUgZGUgbW9kw6lyYXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc093bmVyID0gdXNlcj8uaWQgPT09IGFydGljbGUuYXV0aG9yPy5pZCB8fCBoYXNSb2xlKCdST0xFX0FETUlOJykgfHwgaGFzUm9sZSgnUk9MRV9FRElURVVSJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBrZXk9e2NsZWFuSWR9IGNsYXNzTmFtZT1cImdyb3VwIGJnLXN0b25lLTkwMC80MCBib3JkZXItbC00IGJvcmRlci1zdG9uZS04MDAgaG92ZXI6Ym9yZGVyLXZpa2luZy1nb2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBwLTggcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1kcmFnb24gdGV4dC12aWtpbmctZ29sZCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzT3duZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBvcGFjaXR5LTQwIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRTZWxlY3RlZElkKGNsZWFuSWQpOyBzZXRWaWV3KCdlZGl0Jyk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHVwcGVyY2FzZSBmb250LWJsYWNrIGJnLXN0b25lLTgwMCB0ZXh0LXN0b25lLTQwMCBweC0zIHB5LTEgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItdmlraW5nLWdvbGQgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGNsZWFuSWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB1cHBlcmNhc2UgZm9udC1ibGFjayBiZy1yZWQtOTAwLzEwIHRleHQtcmVkLTUwMC83MCBweC0zIHB5LTEgYm9yZGVyIGJvcmRlci1yZWQtOTAwLzMwIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VwcHJpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCBmb250LXNlcmlmIGl0YWxpYyB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi04IG1heC13LTN4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ7YXJ0aWNsZS5zdW1tYXJ5fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB0LTYgYm9yZGVyLXQgYm9yZGVyLXN0b25lLTgwMC81MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtWzFweF0gYmctdmlraW5nLWdvbGQvNDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZvbnQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFyIHthcnRpY2xlLmF1dGhvcj8ucHNldWRvIHx8IGFydGljbGUuYXV0aG9yPy51c2VybmFtZSB8fCBcIkd1ZXJyaWVyIGRlIGwnb21icmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2ZvcnVtL2FydGljbGUvJHtjbGVhbklkfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLWZpcmUgZm9udC1ibGFjayB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGhvdmVyOnRleHQtdmlraW5nLWdvbGQgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN1bHRlciBsZSBwYXJjaGVtaW4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPuKGkjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ydW1QYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTE2IGFuaW1hdGUtZmFkZS1pbi11cFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1kcmFnb24gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXZpa2luZy1nb2xkIHZpYS15ZWxsb3ctNTAwIHRvLXZpa2luZy1nb2xkIG1iLTggZHJvcC1zaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBkYW5zIGwnQW50cmVcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTEgYmctdmlraW5nLXJlZCBteC1hdXRvIG1iLTggcm91bmRlZC1mdWxsIHNoYWRvdy1bMF8wXzEwcHhfI2RjMjYyNl1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtdmlraW5nLWxpZ2h0IG1iLTEyIG1heC13LTN4bCBteC1hdXRvIGZvbnQtc2VyaWYgaXRhbGljIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgICAgICAgXCJMw6Agb8O5IGxlcyBjYXJ0ZXMgcydhcnLDqnRlbnQsIGwnYXZlbnR1cmUgY29tbWVuY2UuIEV4cGxvcmV6IGxlcyBsw6lnZW5kZXMsIHBhcnRhZ2V6IHZvcyBkw6ljb3V2ZXJ0ZXMgZXQgYW5hbHlzZXogbGVzIGRvbm7DqWVzIGRlIGwnYXJjaGlwZWwgZGUgQmVyay5cIlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZvcnVtXCIgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgcHgtOCBweS00IGJnLXZpa2luZy1yZWQgaG92ZXI6YmctcmVkLTkwMCBib3JkZXItMiBib3JkZXItdmlraW5nLWdvbGQgdGV4dC13aGl0ZSBmb250LWRyYWdvbiB0ZXh0LXhsIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1bMF8wXzE1cHhfcmdiYSgyMjAsMzgsMzgsMC41KV1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+QWNjw6lkZXIgYXUgRm9ydW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZS8yMCB0by10cmFuc3BhcmVudCAtdHJhbnNsYXRlLXgtZnVsbCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC1mdWxsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zdGF0aXN0aXF1ZVwiIGNsYXNzTmFtZT1cInB4LTggcHktNCBiZy12aWtpbmctcm9jayBob3ZlcjpiZy1zdG9uZS03MDAgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTUwMCB0ZXh0LXZpa2luZy1saWdodCBob3Zlcjp0ZXh0LXdoaXRlIGZvbnQtZHJhZ29uIHRleHQteGwgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICBWb2lyIGxlcyBTdGF0c1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RXJyb3IoJycpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luX2NoZWNrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLCAvLyBFbnZvaSBkZSBsYSBjbMOpIFwiZW1haWxcIiBhdHRlbmR1ZSBwYXIgU3ltZm9ueVxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCBcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2sgJiYgZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvY2thZ2UgZHUgdG9rZW4gSldUXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0aW9uIHZlcnMgbGUgZm9ydW1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9mb3J1bSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcignSWRlbnRpZmlhbnRzIGluY29ycmVjdHMuIExlcyBkcmFnb25zIG5lIHZvdXMgcmVjb25uYWlzc2VudCBwYXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ0VycmV1ciBkZSBjb25uZXhpb24gYXUgc2VydmV1ci4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXZpa2luZy1yb2NrIHAtMTAgYm9yZGVyLTIgYm9yZGVyLXZpa2luZy1nb2xkIHNoYWRvdy0yeGwgbXQtMTBcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5Db25uZXhpb248L2gyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtdmlraW5nLXJlZCB0ZXh0LXNtIG1iLTQgaXRhbGljIHRleHQtY2VudGVyIGZvbnQtYm9sZFwiPntlcnJvcn08L3A+fVxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBtYi0yIHRleHQtdmlraW5nLXBhcmNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBkdSBHdWVycmllclxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItc3RvbmUtNzAwIHAtMyB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4ZW1wbGVAYmVyay5mclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItMiB0ZXh0LXZpa2luZy1wYXJjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTW90IGRlIHBhc3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci1zdG9uZS03MDAgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpa2luZy1nb2xkIHRleHQtYmxhY2sgZm9udC1ibGFjayBweS00IHVwcGVyY2FzZSBob3ZlcjpiZy15ZWxsb3ctNTAwIHRyYW5zaXRpb24gc2hhZG93LWxnIGFjdGl2ZTpzY2FsZS05NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZW5kcmUgc29uIGVudm9sXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBSZWdpc3RlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBsYWluUGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHJvbGU6ICdST0xFX1VTRVInXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEVycm9yKCcnKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3JlZ2lzdGVyJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJpZ2UgdmVycyBsJ2FjY3VlaWwgb3UgbGUgbG9naW4gYXByw6hzIHN1Y2PDqHNcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvJyk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIkVycmV1ciBsb3JzIGRlIGwnaW5zY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJJbXBvc3NpYmxlIGRlIGNvbnRhY3RlciBsZSBHcmFuZCBTY3JpYmUgKEVycmV1ciByw6lzZWF1KVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXZpa2luZy1yb2NrLzkwIHAtOCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci12aWtpbmctZ29sZCBzaGFkb3ctMnhsIGJhY2tkcm9wLWJsdXItc21cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItOCB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBSZWpvaW5kcmUgbGEgR3VpbGRlXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtOTAwLzQwIGJvcmRlciBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC0yMDAgcC0zIHJvdW5kZWQgbWItNiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBOT00gRCdVVElMSVNBVEVVUiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtdmlraW5nLWxpZ2h0IHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5Ob20gZGUgY29kZSAoUHNldWRvKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBLcm9rbW91XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEVNQUlMICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC12aWtpbmctbGlnaHQgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPkVtYWlsIGRlIGNvbnRhY3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidmlraW5nQGJlcmsuZnJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci12aWtpbmctZ29sZC8zMCBwLTMgcm91bmRlZCB0ZXh0LXZpa2luZy1wYXJjaG1lbnQgZm9jdXM6Ym9yZGVyLXZpa2luZy1nb2xkIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogUsOUTEUgKETDqWrDoCBmb25jdGlvbm5lbCkgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+UmFuZyBhdSBzZWluIGRlIGxhIEd1aWxkZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItdmlraW5nLWdvbGQvMzAgcC0zIHJvdW5kZWQgdGV4dC12aWtpbmctcGFyY2htZW50IGZvY3VzOmJvcmRlci12aWtpbmctZ29sZCBvdXRsaW5lLW5vbmUgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHJvbGU6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9MRV9VU0VSXCI+QWJvbm7DqSAoTGVjdGV1cik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfQVVURVVSXCI+QXV0ZXVyIChOYXJyYXRldXIpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0VESVRFVVJcIj7DiWRpdGV1ciAoR2FyZGllbik8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPTEVfREVTSUdORVJcIj5EZXNpZ25ldXIgKEFydGlzYW4pPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST0xFX0ZPVVJOSVNTRVVSXCI+Rm91cm5pc3NldXIgZGUgZG9ubsOpZXMgKFNjcmliZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNT1QgREUgUEFTU0UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXZpa2luZy1saWdodCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+TW90IGRlIHBhc3NlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXZpa2luZy1nb2xkLzMwIHAtMyByb3VuZGVkIHRleHQtdmlraW5nLXBhcmNobWVudCBmb2N1czpib3JkZXItdmlraW5nLWdvbGQgb3V0bGluZS1ub25lIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGxhaW5QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHBsYWluUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlraW5nLWdvbGQgdGV4dC12aWtpbmctZGFyayBmb250LWV4dHJhYm9sZCBweS00IHJvdW5kZWQgaG92ZXI6YmcteWVsbG93LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBzaGFkb3ctbGcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG10LTRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEdyYXZlciBtb24gbm9tXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCwgQXJjRWxlbWVudCwgUG9pbnRFbGVtZW50LCBMaW5lRWxlbWVudCxcclxufSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IEJhciwgRG91Z2hudXQsIExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCwgQXJjRWxlbWVudCwgUG9pbnRFbGVtZW50LCBMaW5lRWxlbWVudCk7XHJcblxyXG5jb25zdCBTdGF0c1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2JveE9mZmljZURhdGEsIHNldEJveE9mZmljZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BvcHVsYXRpb25EYXRhLCBzZXRQb3B1bGF0aW9uRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGltZWxpbmVEYXRhLCBzZXRUaW1lbGluZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGxvYWRDU1YgPSAodXJsLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihyID0+IHIub2sgPyByLnRleHQoKSA6IG51bGwpXHJcbiAgICAgIC50aGVuKHR4dCA9PiB7XHJcbiAgICAgICAgaWYoIXR4dCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gdHh0LnRyaW0oKS5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbGluZXNbMF0uc3BsaXQoJzsnKS5tYXAoaCA9PiBoLnRyaW0oKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGxpbmVzLnNsaWNlKDEpLm1hcChsID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFscyA9IGwuc3BsaXQoJzsnKS5tYXAodiA9PiB2LnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiAoey4uLmFjYywgW2hdOiB2YWxzW2ldfSksIHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGgpIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZENTVignL2RhdGEvc3RhdHMvYm94X29mZmljZS5jc3YnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBzZXRCb3hPZmZpY2VEYXRhKHtcclxuICAgICAgICBsYWJlbHM6IGRhdGEubWFwKGkgPT4gaVsnRmlsbSddKSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGxhYmVsOiAnTSQnLFxyXG4gICAgICAgICAgZGF0YTogZGF0YS5tYXAoaSA9PiBwYXJzZUZsb2F0KGlbJ0JveCBPZmZpY2UgKE1pbGxpb25zICQpJ10pKSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjN2YxZDFkJywgJyNkYzI2MjYnLCAnI2Q5NzcwNiddLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjkyNTI0JyxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICAgICAgfV1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9iZXJrX3BvcHVsYXRpb24uY3N2JywgKGRhdGEpID0+IHtcclxuICAgICAgc2V0UG9wdWxhdGlvbkRhdGEoe1xyXG4gICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydHcm91cGUnXSksXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICBkYXRhOiBkYXRhLm1hcChpID0+IHBhcnNlRmxvYXQoaVsnUG9wdWxhdGlvbiddKSksXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsnI2Q5NzcwNicsICcjN2YxZDFkJywgJyM1NzUzNGUnLCAnI2E4YTI5ZSddLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMWMxOTE3JyxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICAgICAgfV1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2FkQ1NWKCcvZGF0YS9zdGF0cy9kcmFnb25zX3RpbWVsaW5lLmNzdicsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZWxpbmVEYXRhKHtcclxuICAgICAgICAgIGxhYmVsczogZGF0YS5tYXAoaSA9PiBpWydBbm7DqWUnXSksXHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdFc3DDqGNlcycsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEubWFwKGkgPT4gcGFyc2VGbG9hdChpWydFc3DDqGNlcyBSZWNlbnPDqWVzJ10pKSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZDk3NzA2JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyMTcsIDExOSwgNiwgMC4yKScsXHJcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHRlbnNpb246IDAuMyxcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgIHBsdWdpbnM6IHsgbGVnZW5kOiB7IGxhYmVsczogeyBjb2xvcjogJyNlN2U1ZTQnLCBmb250OiB7IGZhbWlseTogJ3NlcmlmJyB9IH0gfSB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHk6IHsgdGlja3M6IHsgY29sb3I6ICcjYThhMjllJyB9LCBncmlkOiB7IGNvbG9yOiAnIzQ0NDAzYycgfSB9LFxyXG4gICAgICB4OiB7IHRpY2tzOiB7IGNvbG9yOiAnI2E4YTI5ZScgfSwgZ3JpZDogeyBjb2xvcjogJyM0NDQwM2MnIH0gfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIGFuaW1hdGUtZmFkZS1pblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtZHJhZ29uIHRleHQtdmlraW5nLWdvbGQgbWItNCBkcm9wLXNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgTCdPYnNlcnZhdG9pcmUgZGUgQmVya1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXZpa2luZy1saWdodCB0ZXh0LWxnIGl0YWxpYyBib3JkZXItYiBib3JkZXItdmlraW5nLWdvbGQvMzAgaW5saW5lLWJsb2NrIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIFJlY2Vuc2VtZW50IG9mZmljaWVsIGRlIGwnYXJjaGlwZWxcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5UcsOpc29yIGRlIEd1ZXJyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Ym94T2ZmaWNlRGF0YSA/IDxCYXIgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17Ym94T2ZmaWNlRGF0YX0gLz4gOiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPkNoYXJnZW1lbnQuLi48L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aWtpbmctcm9jayBwLTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc3RvbmUtNjAwIHNoYWRvdy0yeGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5DbGFucyAmIFRyaWJ1czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3B1bGF0aW9uRGF0YSA/IDxEb3VnaG51dCBvcHRpb25zPXt7Li4ub3B0aW9ucywgc2NhbGVzOnt9fX0gZGF0YT17cG9wdWxhdGlvbkRhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5DaGFyZ2VtZW50Li4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdmlraW5nLXJvY2sgcC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTYwMCBzaGFkb3ctMnhsIG1kOmNvbC1zcGFuLTIgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLTEgYmctdmlraW5nLWdvbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWRyYWdvbiB0ZXh0LXdoaXRlIG1iLTZcIj5DaHJvbm9sb2dpZSBkZXMgRMOpY291dmVydGVzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04MCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lbGluZURhdGEgPyA8TGluZSBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXt0aW1lbGluZURhdGF9IC8+IDogPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5DaGFyZ2VtZW50Li4uPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0c1BhZ2U7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiY3JlYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkhvbWVQYWdlIiwiRm9ydW1QYWdlIiwiQXJ0aWNsZVBhZ2UiLCJTdGF0c1BhZ2UiLCJOYXZiYXIiLCJSZWdpc3RlclBhZ2UiLCJMb2dpblBhZ2UiLCJBZG1pbkRhc2hib2FyZCIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZGF0YSIsInByaW1hcnlDb2xvciIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJwYXRoIiwiZWxlbWVudCIsInJvb3RFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiZXJyb3IiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJwdXNoIiwiaXNBcnJheSIsInVzZVN0YXRlIiwiQXJ0aWNsZUZvcm0iLCJfcmVmIiwiaWQiLCJvblN1Y2Nlc3MiLCJpc0VkaXRNb2RlIiwiQm9vbGVhbiIsIl91c2VTdGF0ZSIsInRpdGxlIiwic3VtbWFyeSIsImNvbnRlbnQiLCJfdXNlU3RhdGUyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImNvbmNhdCIsImhlYWRlcnMiLCJyZXMiLCJoYW5kbGVTdWJtaXQiLCJfcmVmMiIsIl9jYWxsZWUiLCJtZXRob2QiLCJ1cmwiLCJlcnJvckRhdGEiLCJfdCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbGVydCIsIl94Iiwib25TdWJtaXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiUGFwYSIsIkRhdGFQcm92aWRlclNwYWNlIiwiZGF0YXNldHMiLCJmaWxlIiwic2V0RmlsZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicHJldmlldyIsInNldFByZXZpZXciLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInNldEhlYWRlcnMiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImNvbHVtbk1hcHBpbmciLCJzZXRDb2x1bW5NYXBwaW5nIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJkYXRhc2V0TmFtZSIsInNldERhdGFzZXROYW1lIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwiaXNVcGxvYWRpbmciLCJzZXRJc1VwbG9hZGluZyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJzZWxlY3RlZEZpbGUiLCJmaWxlcyIsInJlcGxhY2UiLCJwYXJzZSIsImhlYWRlciIsInNraXBFbXB0eUxpbmVzIiwiY29tcGxldGUiLCJyZXN1bHRzIiwiY29scyIsImluaXRpYWxNYXBwaW5nIiwiaCIsInRvZ2dsZVR5cGUiLCJwcmV2IiwiaGFuZGxlVXBsb2FkIiwidG9rZW4iLCJwYXlsb2FkIiwic291cmNlIiwibWV0YWRhdGEiLCJjb2x1bW5zIiwidXBsb2FkZWRBdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInJvd0NvdW50Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJhY2NlcHQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJtYXAiLCJrZXkiLCJyb3ciLCJkcyIsInJvd3NDb3VudCIsIkRlc2lnbmVyU3BhY2UiLCJjb2xvciIsInNldENvbG9yIiwiaXNTYXZpbmciLCJzZXRJc1NhdmluZyIsImN1cnJlbnRDb2xvciIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidHJpbSIsImhhbmRsZUNvbG9yQ2hhbmdlIiwibmV3Q29sb3IiLCJoYW5kbGVWYWxpZGF0ZSIsImhhbmRsZVJlc2V0IiwiX2NhbGxlZTIiLCJkZWZhdWx0Q29sb3IiLCJfdDIiLCJfY29udGV4dDIiLCJjb25maXJtIiwiTGluayIsInVzZU5hdmlnYXRlIiwiand0RGVjb2RlIiwiX3VzZXIiLCJfdXNlcjIiLCJfdXNlcjMiLCJuYXZpZ2F0ZSIsInVzZXIiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiY2FuU2VlRGFzaGJvYXJkIiwicm9sZXMiLCJpbmNsdWRlcyIsInRvIiwiRnJhZ21lbnQiLCJwc2V1ZG8iLCJfY3VycmVudFVzZXIiLCJfZGF0YSRhbGxVc2VycyIsIl9kYXRhJG1hbmFnZW1lbnRBcnRpYyIsInNldERhdGEiLCJzZXRFcnJvciIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiY3VycmVudFVzZXIiLCJpc0Z1bGxBZG1pbiIsImlzUHJvdmlkZXIiLCJpc0Rlc2lnbmVyIiwiaXNFZGl0b3IiLCJsb2FkU3RhdHMiLCJlcnIiLCJtZXNzYWdlIiwiaGFuZGxlUHJvbW90ZSIsInVzZXJJZCIsInVwZGF0ZWREYXRhIiwiYWxsVXNlcnMiLCJuZXdSb2xlcyIsInVzZXJzQ291bnQiLCJhcnRpY2xlc0NvdW50IiwicGxhY2Vob2xkZXIiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJtYW5hZ2VtZW50QXJ0aWNsZXMiLCJhcnQiLCJhdXRob3IiLCJjcmVhdGVkQXQiLCJ1c2VQYXJhbXMiLCJfdXNlUGFyYW1zIiwiYXJ0aWNsZSIsInNldEFydGljbGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJzZXRVc2VyIiwidmlldyIsInNldFZpZXciLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsImRlY29kZWQiLCJmZXRjaEFydGljbGVzIiwiaGFuZGxlRGVsZXRlIiwiYUlkIiwic3BsaXQiLCJwb3AiLCJoYW5kbGVTdWNjZXNzIiwiaGFzUm9sZSIsInJvbGUiLCJfdXNlciRyb2xlcyIsImNhbkNyZWF0ZSIsIl9hcnRpY2xlJGF1dGhvciIsIl9hcnRpY2xlJGF1dGhvcjIiLCJfYXJ0aWNsZSRhdXRob3IzIiwiY2xlYW5JZCIsImlzT3duZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2V0SXRlbSIsImhyZWYiLCJwbGFpblBhc3N3b3JkIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIkFyY0VsZW1lbnQiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkJhciIsIkRvdWdobnV0IiwiTGluZSIsInJlZ2lzdGVyIiwiYm94T2ZmaWNlRGF0YSIsInNldEJveE9mZmljZURhdGEiLCJwb3B1bGF0aW9uRGF0YSIsInNldFBvcHVsYXRpb25EYXRhIiwidGltZWxpbmVEYXRhIiwic2V0VGltZWxpbmVEYXRhIiwibG9hZENTViIsImNhbGxiYWNrIiwidGV4dCIsInR4dCIsImxpbmVzIiwidmFscyIsInJlZHVjZSIsImFjYyIsImxhYmVscyIsImxhYmVsIiwicGFyc2VGbG9hdCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInRlbnNpb24iLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJwbHVnaW5zIiwibGVnZW5kIiwiZm9udCIsImZhbWlseSIsInNjYWxlcyIsInRpY2tzIiwiZ3JpZCIsIngiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==