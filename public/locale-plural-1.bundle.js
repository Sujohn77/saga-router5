(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locale-plural-1"],{

/***/ "./develop/modules/localizator/localeData/intl-pluralrules/en.js":
/*!***********************************************************************!*\
  !*** ./develop/modules/localizator/localeData/intl-pluralrules/en.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({
    "locale": "en",
    "categories": {
      "cardinal": ["one", "other"],
      "ordinal": ["one", "two", "few", "other"]
    },
    "fn": function fn(n, ord) {
      var s = String(n).split('.'),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);
      if (ord) return n10 == 1 && n100 != 11 ? 'one' : n10 == 2 && n100 != 12 ? 'two' : n10 == 3 && n100 != 13 ? 'few' : 'other';
      return n == 1 && v0 ? 'one' : 'other';
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=locale-plural-1.bundle.js.map