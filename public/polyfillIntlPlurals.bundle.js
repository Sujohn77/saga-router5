(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["polyfillIntlPlurals"],{

/***/ "./node_modules/@formatjs/intl-pluralrules/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var intl_utils_1 = __webpack_require__(/*! @formatjs/intl-utils */ "./node_modules/@formatjs/intl-utils/lib/index.js");
function validateInstance(instance, method) {
    if (!(instance instanceof PluralRules)) {
        throw new TypeError("Method Intl.PluralRules.prototype." + method + " called on incompatible receiver " + String(instance));
    }
}
/**
 * https://tc39.es/ecma402/#sec-torawprecision
 * @param x
 * @param minPrecision
 * @param maxPrecision
 */
function toRawPrecision(x, minPrecision, maxPrecision) {
    var m = x.toPrecision(maxPrecision);
    if (~m.indexOf('.') && maxPrecision > minPrecision) {
        var cut = maxPrecision - minPrecision;
        while (cut > 0 && m[m.length - 1] === '0') {
            m = m.slice(0, m.length - 1);
            cut--;
        }
        if (m[m.length - 1] === '.') {
            return m.slice(0, m.length - 1);
        }
    }
    return m;
}
/**
 * https://tc39.es/ecma402/#sec-torawfixed
 * @param x
 * @param minInteger
 * @param minFraction
 * @param maxFraction
 */
function toRawFixed(x, minInteger, minFraction, maxFraction) {
    var cut = maxFraction - minFraction;
    var m = x.toFixed(maxFraction);
    while (cut > 0 && m[m.length - 1] === '0') {
        m = m.slice(0, m.length - 1);
        cut--;
    }
    if (m[m.length - 1] === '.') {
        m = m.slice(0, m.length - 1);
    }
    var int = m.split('.')[0].length;
    if (int < minInteger) {
        var z = '';
        for (; z.length < minInteger - int; z += '0')
            ;
        m = z + m;
    }
    return m;
}
function formatNumericToString(internalSlotMap, pl, x) {
    var minimumSignificantDigits = intl_utils_1.getInternalSlot(internalSlotMap, pl, 'minimumSignificantDigits');
    var maximumSignificantDigits = intl_utils_1.getInternalSlot(internalSlotMap, pl, 'maximumSignificantDigits');
    if (minimumSignificantDigits !== undefined &&
        maximumSignificantDigits !== undefined) {
        return toRawPrecision(x, minimumSignificantDigits, maximumSignificantDigits);
    }
    return toRawFixed(x, intl_utils_1.getInternalSlot(internalSlotMap, pl, 'minimumIntegerDigits'), intl_utils_1.getInternalSlot(internalSlotMap, pl, 'minimumFractionDigits'), intl_utils_1.getInternalSlot(internalSlotMap, pl, 'maximumFractionDigits'));
}
var PluralRules = /** @class */ (function () {
    function PluralRules(locales, options) {
        // test262/test/intl402/RelativeTimeFormat/constructor/constructor/newtarget-undefined.js
        // Cannot use `new.target` bc of IE11 & TS transpiles it to something else
        var newTarget = this && this instanceof PluralRules ? this.constructor : void 0;
        if (!newTarget) {
            throw new TypeError("Intl.PluralRules must be called with 'new'");
        }
        var requestedLocales = Intl
            .getCanonicalLocales(locales);
        var opt = Object.create(null);
        var opts = options === undefined ? Object.create(null) : intl_utils_1.toObject(options);
        intl_utils_1.setInternalSlot(PluralRules.__INTERNAL_SLOT_MAP__, this, 'initializedPluralRules', true);
        var matcher = intl_utils_1.getOption(opts, 'localeMatcher', 'string', ['best fit', 'lookup'], 'best fit');
        opt.localeMatcher = matcher;
        intl_utils_1.setInternalSlot(PluralRules.__INTERNAL_SLOT_MAP__, this, 'type', intl_utils_1.getOption(opts, 'type', 'string', ['cardinal', 'ordinal'], 'cardinal'));
        intl_utils_1.setNumberFormatDigitOptions(PluralRules.__INTERNAL_SLOT_MAP__.get(this), opts, 0, 3, 'standard');
        var r = intl_utils_1.createResolveLocale(PluralRules.getDefaultLocale)(PluralRules.availableLocales, requestedLocales, opt, PluralRules.relevantExtensionKeys, PluralRules.localeData);
        intl_utils_1.setInternalSlot(PluralRules.__INTERNAL_SLOT_MAP__, this, 'locale', r.locale);
    }
    PluralRules.prototype.resolvedOptions = function () {
        var _this = this;
        validateInstance(this, 'resolvedOptions');
        var opts = Object.create(null);
        opts.locale = intl_utils_1.getInternalSlot(PluralRules.__INTERNAL_SLOT_MAP__, this, 'locale');
        opts.type = intl_utils_1.getInternalSlot(PluralRules.__INTERNAL_SLOT_MAP__, this, 'type');
        [
            'minimumIntegerDigits',
            'minimumFractionDigits',
            'maximumFractionDigits',
            'minimumSignificantDigits',
            'maximumSignificantDigits',
        ].forEach(function (field) {
            var val = intl_utils_1.getInternalSlot(PluralRules.__INTERNAL_SLOT_MAP__, _this, field);
            if (val !== undefined) {
                opts[field] = val;
            }
        });
        opts.pluralCategories = __spreadArrays(PluralRules.localeData[opts.locale].categories[opts.type]);
        return opts;
    };
    PluralRules.prototype.select = function (val) {
        validateInstance(this, 'select');
        var locale = intl_utils_1.getInternalSlot(PluralRules.__INTERNAL_SLOT_MAP__, this, 'locale');
        var type = intl_utils_1.getInternalSlot(PluralRules.__INTERNAL_SLOT_MAP__, this, 'type');
        return PluralRules.localeData[locale].fn(formatNumericToString(PluralRules.__INTERNAL_SLOT_MAP__, this, Math.abs(Number(val))), type == 'ordinal');
    };
    PluralRules.prototype.toString = function () {
        return '[object Intl.PluralRules]';
    };
    PluralRules.supportedLocalesOf = function (locales, options) {
        return intl_utils_1.supportedLocales(PluralRules.availableLocales, Intl.getCanonicalLocales(locales), options);
    };
    PluralRules.__addLocaleData = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        var _loop_1 = function (datum) {
            var availableLocales = datum.availableLocales;
            availableLocales.forEach(function (locale) {
                try {
                    PluralRules.localeData[locale] = intl_utils_1.unpackData(locale, datum);
                }
                catch (e) {
                    if (intl_utils_1.isMissingLocaleDataError(e)) {
                        // If we just don't have data for certain locale, that's ok
                        return;
                    }
                    throw e;
                }
            });
        };
        for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
            var datum = data_1[_a];
            _loop_1(datum);
        }
        PluralRules.availableLocales = Object.keys(PluralRules.localeData);
        if (!PluralRules.__defaultLocale) {
            PluralRules.__defaultLocale = PluralRules.availableLocales[0];
        }
    };
    PluralRules.getDefaultLocale = function () {
        return PluralRules.__defaultLocale;
    };
    PluralRules.localeData = {};
    PluralRules.availableLocales = [];
    PluralRules.__defaultLocale = 'en';
    PluralRules.relevantExtensionKeys = [];
    PluralRules.polyfilled = true;
    PluralRules.__INTERNAL_SLOT_MAP__ = new WeakMap();
    return PluralRules;
}());
exports.PluralRules = PluralRules;
try {
    // IE11 does not have Symbol
    if (typeof Symbol !== 'undefined') {
        Object.defineProperty(PluralRules.prototype, Symbol.toStringTag, {
            value: 'Intl.PluralRules',
            writable: false,
            enumerable: false,
            configurable: true,
        });
    }
    // https://github.com/tc39/test262/blob/master/test/intl402/PluralRules/length.js
    Object.defineProperty(PluralRules, 'length', {
        value: 0,
        writable: false,
        enumerable: false,
        configurable: true,
    });
    // https://github.com/tc39/test262/blob/master/test/intl402/RelativeTimeFormat/constructor/length.js
    Object.defineProperty(PluralRules.prototype.constructor, 'length', {
        value: 0,
        writable: false,
        enumerable: false,
        configurable: true,
    });
    // https://github.com/tc39/test262/blob/master/test/intl402/RelativeTimeFormat/constructor/supportedLocalesOf/length.js
    Object.defineProperty(PluralRules.supportedLocalesOf, 'length', {
        value: 1,
        writable: false,
        enumerable: false,
        configurable: true,
    });
}
catch (ex) {
    // Meta fixes for test262
}


/***/ }),

/***/ "./node_modules/@formatjs/intl-pluralrules/polyfill.js":
/*!*************************************************************!*\
  !*** ./node_modules/@formatjs/intl-pluralrules/polyfill.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(/*! ./ */ "./node_modules/@formatjs/intl-pluralrules/index.js");
if (!('PluralRules' in Intl) ||
    new Intl.PluralRules('en', { minimumFractionDigits: 2 }).select(1) ===
        'one') {
    Object.defineProperty(Intl, 'PluralRules', {
        value: _1.PluralRules,
        writable: true,
        enumerable: false,
        configurable: true,
    });
}


/***/ })

}]);
//# sourceMappingURL=polyfillIntlPlurals.bundle.js.map