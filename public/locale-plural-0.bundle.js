(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locale-plural-0"],{

/***/ "./develop/modules/localizator/localeData/intl-pluralrules/de.js":
/*!***********************************************************************!*\
  !*** ./develop/modules/localizator/localeData/intl-pluralrules/de.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({
    "locale": "de",
    "categories": {
      "cardinal": ["one", "other"],
      "ordinal": ["other"]
    },
    "fn": function fn(n, ord) {
      var s = String(n).split('.'),
          v0 = !s[1];
      if (ord) return 'other';
      return n == 1 && v0 ? 'one' : 'other';
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=locale-plural-0.bundle.js.map