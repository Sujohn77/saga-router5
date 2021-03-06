(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~polyfillIntlRelativeTime"],{

/***/ "./node_modules/@formatjs/intl-relativetimeformat/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@formatjs/intl-relativetimeformat/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var intl_utils_1 = __webpack_require__(/*! @formatjs/intl-utils */ "./node_modules/@formatjs/intl-utils/lib/index.js");
/**
 * https://tc39.es/proposal-intl-relative-time/#sec-singularrelativetimeunit
 * @param unit
 */
function singularRelativeTimeUnit(unit) {
    intl_utils_1.invariant(typeof unit === 'string', "unit must be a string, instead got " + typeof unit, TypeError);
    if (unit === 'seconds')
        return 'second';
    if (unit === 'minutes')
        return 'minute';
    if (unit === 'hours')
        return 'hour';
    if (unit === 'days')
        return 'day';
    if (unit === 'weeks')
        return 'week';
    if (unit === 'months')
        return 'month';
    if (unit === 'quarters')
        return 'quarter';
    if (unit === 'years')
        return 'year';
    if (unit !== 'second' &&
        unit !== 'minute' &&
        unit !== 'hour' &&
        unit !== 'day' &&
        unit !== 'week' &&
        unit !== 'month' &&
        unit !== 'quarter' &&
        unit !== 'year') {
        throw new RangeError("Invalid unit " + unit);
    }
    return unit;
}
var NUMBERING_SYSTEM_REGEX = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i;
/**
 * https://tc39.es/proposal-intl-relative-time/#sec-makepartslist
 * @param pattern
 * @param unit
 * @param parts
 */
function makePartsList(pattern, unit, parts) {
    var patternParts = intl_utils_1.partitionPattern(pattern);
    var result = [];
    for (var _i = 0, patternParts_1 = patternParts; _i < patternParts_1.length; _i++) {
        var patternPart = patternParts_1[_i];
        if (intl_utils_1.isLiteralPart(patternPart)) {
            result.push({
                type: 'literal',
                value: patternPart.value,
            });
        }
        else {
            intl_utils_1.invariant(patternPart.type === '0', "Malformed pattern " + pattern);
            for (var _a = 0, parts_1 = parts; _a < parts_1.length; _a++) {
                var part = parts_1[_a];
                result.push({
                    type: part.type,
                    value: part.value,
                    unit: unit,
                });
            }
        }
    }
    return result;
}
function objectIs(x, y) {
    if (Object.is) {
        return Object.is(x, y);
    }
    // SameValue algorithm
    if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
    }
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
}
function toString(arg) {
    return arg + '';
}
/**
 * PartitionRelativeTimePattern
 * @param rtf
 * @param value
 * @param unit
 */
function partitionRelativeTimePattern(internalSlotMap, rtf, value, unit) {
    intl_utils_1.invariant(typeof value === 'number', "value must be number, instead got " + typeof value, TypeError);
    intl_utils_1.invariant(typeof unit === 'string', "unit must be number, instead got " + typeof value, TypeError);
    if (isNaN(value) || value === Infinity || value === -Infinity) {
        throw new RangeError("Invalid value " + value);
    }
    var resolvedUnit = singularRelativeTimeUnit(unit);
    var fields = intl_utils_1.getInternalSlot(internalSlotMap, rtf, 'fields');
    var style = intl_utils_1.getInternalSlot(internalSlotMap, rtf, 'style');
    var entry = resolvedUnit;
    if (style === 'short') {
        entry = resolvedUnit + "-short";
    }
    else if (style === 'narrow') {
        entry = resolvedUnit + "-narrow";
    }
    if (!(entry in fields)) {
        entry = resolvedUnit;
    }
    var patterns = fields[entry];
    var numeric = intl_utils_1.getInternalSlot(internalSlotMap, rtf, 'numeric');
    if (numeric === 'auto') {
        if (toString(value) in patterns) {
            return [
                {
                    type: 'literal',
                    value: patterns[toString(value)],
                },
            ];
        }
    }
    var tl = 'future';
    if (objectIs(value, -0) || value < 0) {
        tl = 'past';
    }
    var po = patterns[tl];
    var pluralRules = intl_utils_1.getInternalSlot(internalSlotMap, rtf, 'pluralRules');
    var numberFormat = intl_utils_1.getInternalSlot(internalSlotMap, rtf, 'numberFormat');
    var fv = typeof numberFormat.formatToParts === 'function'
        ? numberFormat.formatToParts(Math.abs(value))
        : // TODO: If formatToParts is not supported, we assume the whole formatted
            // number is a part
            [
                {
                    type: 'literal',
                    value: numberFormat.format(Math.abs(value)),
                    unit: unit,
                },
            ];
    var pr = pluralRules.select(value);
    var pattern = po[pr];
    return makePartsList(pattern, resolvedUnit, fv);
}
var RelativeTimeFormat = /** @class */ (function () {
    function RelativeTimeFormat(locales, options) {
        // test262/test/intl402/RelativeTimeFormat/constructor/constructor/newtarget-undefined.js
        // Cannot use `new.target` bc of IE11 & TS transpiles it to something else
        var newTarget = this && this instanceof RelativeTimeFormat ? this.constructor : void 0;
        if (!newTarget) {
            throw new TypeError("Intl.RelativeTimeFormat must be called with 'new'");
        }
        intl_utils_1.setInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'initializedRelativeTimeFormat', true);
        var requestedLocales = Intl
            .getCanonicalLocales(locales);
        var opt = Object.create(null);
        var opts = options === undefined ? Object.create(null) : intl_utils_1.toObject(options);
        var matcher = intl_utils_1.getOption(opts, 'localeMatcher', 'string', ['best fit', 'lookup'], 'best fit');
        opt.localeMatcher = matcher;
        var numberingSystem = intl_utils_1.getOption(opts, 'numberingSystem', 'string', undefined, undefined);
        if (numberingSystem !== undefined) {
            if (!NUMBERING_SYSTEM_REGEX.test(numberingSystem)) {
                throw new RangeError("Invalid numbering system " + numberingSystem);
            }
        }
        opt.nu = numberingSystem;
        var r = intl_utils_1.createResolveLocale(RelativeTimeFormat.getDefaultLocale)(RelativeTimeFormat.availableLocales, requestedLocales, opt, RelativeTimeFormat.relevantExtensionKeys, RelativeTimeFormat.localeData);
        var locale = r.locale, nu = r.nu;
        intl_utils_1.setInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'locale', locale);
        intl_utils_1.setInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'style', intl_utils_1.getOption(opts, 'style', 'string', ['long', 'narrow', 'short'], 'long'));
        intl_utils_1.setInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'numeric', intl_utils_1.getOption(opts, 'numeric', 'string', ['always', 'auto'], 'always'));
        intl_utils_1.setInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'fields', RelativeTimeFormat.localeData[locale]);
        intl_utils_1.setInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'numberFormat', new Intl.NumberFormat(locales));
        intl_utils_1.setInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'pluralRules', new Intl.PluralRules(locales));
        intl_utils_1.setInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'numberingSystem', nu);
    }
    RelativeTimeFormat.prototype.format = function (value, unit) {
        if (typeof this !== 'object') {
            throw new TypeError('format was called on a non-object');
        }
        if (!intl_utils_1.getInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'initializedRelativeTimeFormat')) {
            throw new TypeError('format was called on a invalid context');
        }
        return partitionRelativeTimePattern(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, Number(value), toString(unit))
            .map(function (el) { return el.value; })
            .join('');
    };
    RelativeTimeFormat.prototype.formatToParts = function (value, unit) {
        if (typeof this !== 'object') {
            throw new TypeError('formatToParts was called on a non-object');
        }
        if (!intl_utils_1.getInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'initializedRelativeTimeFormat')) {
            throw new TypeError('formatToParts was called on a invalid context');
        }
        return partitionRelativeTimePattern(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, Number(value), toString(unit));
    };
    RelativeTimeFormat.prototype.resolvedOptions = function () {
        if (typeof this !== 'object') {
            throw new TypeError('resolvedOptions was called on a non-object');
        }
        if (!intl_utils_1.getInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'initializedRelativeTimeFormat')) {
            throw new TypeError('resolvedOptions was called on a invalid context');
        }
        // test262/test/intl402/RelativeTimeFormat/prototype/resolvedOptions/type.js
        return {
            locale: intl_utils_1.getInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'locale'),
            style: intl_utils_1.getInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'style'),
            numeric: intl_utils_1.getInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'numeric'),
            numberingSystem: intl_utils_1.getInternalSlot(RelativeTimeFormat.__INTERNAL_SLOT_MAP__, this, 'numberingSystem'),
        };
    };
    RelativeTimeFormat.supportedLocalesOf = function (locales, options) {
        return intl_utils_1.supportedLocales(RelativeTimeFormat.availableLocales, Intl.getCanonicalLocales(locales), options);
    };
    RelativeTimeFormat.__addLocaleData = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        var _loop_1 = function (datum) {
            var availableLocales = datum.availableLocales;
            availableLocales.forEach(function (locale) {
                try {
                    RelativeTimeFormat.localeData[locale] = intl_utils_1.unpackData(locale, datum);
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
        RelativeTimeFormat.availableLocales = Object.keys(RelativeTimeFormat.localeData);
        if (!RelativeTimeFormat.__defaultLocale) {
            RelativeTimeFormat.__defaultLocale =
                RelativeTimeFormat.availableLocales[0];
        }
    };
    RelativeTimeFormat.getDefaultLocale = function () {
        return RelativeTimeFormat.__defaultLocale;
    };
    RelativeTimeFormat.localeData = {};
    RelativeTimeFormat.availableLocales = [];
    RelativeTimeFormat.__defaultLocale = 'en';
    RelativeTimeFormat.relevantExtensionKeys = ['nu'];
    RelativeTimeFormat.polyfilled = true;
    RelativeTimeFormat.__INTERNAL_SLOT_MAP__ = new WeakMap();
    return RelativeTimeFormat;
}());
exports.default = RelativeTimeFormat;
try {
    // IE11 does not have Symbol
    if (typeof Symbol !== 'undefined') {
        Object.defineProperty(RelativeTimeFormat.prototype, Symbol.toStringTag, {
            value: 'Intl.RelativeTimeFormat',
            writable: false,
            enumerable: false,
            configurable: true,
        });
    }
    // https://github.com/tc39/test262/blob/master/test/intl402/RelativeTimeFormat/constructor/length.js
    Object.defineProperty(RelativeTimeFormat.prototype.constructor, 'length', {
        value: 0,
        writable: false,
        enumerable: false,
        configurable: true,
    });
    // https://github.com/tc39/test262/blob/master/test/intl402/RelativeTimeFormat/constructor/supportedLocalesOf/length.js
    Object.defineProperty(RelativeTimeFormat.supportedLocalesOf, 'length', {
        value: 1,
        writable: false,
        enumerable: false,
        configurable: true,
    });
}
catch (e) {
    // Meta fix so we're test262-compliant, not important
}


/***/ }),

/***/ "./node_modules/@formatjs/intl-relativetimeformat/polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/@formatjs/intl-relativetimeformat/polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(/*! ./ */ "./node_modules/@formatjs/intl-relativetimeformat/index.js");
if (!('RelativeTimeFormat' in Intl)) {
    Object.defineProperty(Intl, 'RelativeTimeFormat', {
        value: _1.default,
        writable: true,
        enumerable: false,
        configurable: true,
    });
}


/***/ })

}]);
//# sourceMappingURL=vendors~polyfillIntlRelativeTime.bundle.js.map