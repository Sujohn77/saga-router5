(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locale-plural-2"],{

/***/ "./develop/modules/localizator/localeData/intl-pluralrules/fr.js":
/*!***********************************************************************!*\
  !*** ./develop/modules/localizator/localeData/intl-pluralrules/fr.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({
    "locale": "fr",
    "categories": {
      "cardinal": ["one", "other"],
      "ordinal": ["one", "other"]
    },
    "fn": function fn(n, ord) {
      if (ord) return n == 1 ? 'one' : 'other';
      return n >= 0 && n < 2 ? 'one' : 'other';
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=locale-plural-2.bundle.js.map