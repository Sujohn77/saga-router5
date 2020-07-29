(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locale-plural-4"],{

/***/ "./develop/modules/localizator/localeData/intl-pluralrules/pt.js":
/*!***********************************************************************!*\
  !*** ./develop/modules/localizator/localeData/intl-pluralrules/pt.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({
    "locale": "pt",
    "categories": {
      "cardinal": ["one", "other"],
      "ordinal": ["other"]
    },
    "fn": function fn(n, ord) {
      var s = String(n).split('.'),
          i = s[0];
      if (ord) return 'other';
      return i == 0 || i == 1 ? 'one' : 'other';
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=locale-plural-4.bundle.js.map