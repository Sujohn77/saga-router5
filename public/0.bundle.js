(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./develop/routes/ProfilesPage/Profiles.jsx":
/*!**************************************************!*\
  !*** ./develop/routes/ProfilesPage/Profiles.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router5 */ "./node_modules/react-router5/dist/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var mapStateToProps = function mapStateToProps(state) {
  return {
    profiles: state.application.profilesPage.profiles
  };
};

var Profiles = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps), _dec(_class = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Profiles, _React$Component);

  var _super = _createSuper(Profiles);

  function Profiles() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Profiles);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Profiles, [{
    key: "render",
    value: function render() {
      var profiles = this.props.profiles;
      var profileItems = profiles && Object.values(profiles).map(function (profile, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: key
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, profile.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, profile.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, profile.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, profile.gender), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, profile.ip_address));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "profiles"
      }, profileItems);
    }
  }]);

  return Profiles;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router5__WEBPACK_IMPORTED_MODULE_6__["routeNode"])("profiles")(Profiles));

/***/ }),

/***/ "./develop/routes/ProfilesPage/actions.js":
/*!************************************************!*\
  !*** ./develop/routes/ProfilesPage/actions.js ***!
  \************************************************/
/*! exports provided: PROFILES_LOADED, PROFILES_REQUEST, loadProfiles, fetchProfiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILES_LOADED", function() { return PROFILES_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILES_REQUEST", function() { return PROFILES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfiles", function() { return loadProfiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProfiles", function() { return fetchProfiles; });
var PROFILES_LOADED = "PROFILES_LOADED";
var PROFILES_REQUEST = "PROFILES_REQUEST";
var loadProfiles = function loadProfiles(profiles) {
  return {
    type: PROFILES_LOADED,
    profiles: profiles
  };
};
var fetchProfiles = function fetchProfiles() {
  return {
    type: PROFILES_REQUEST
  };
};

/***/ }),

/***/ "./develop/routes/ProfilesPage/index.js":
/*!**********************************************!*\
  !*** ./develop/routes/ProfilesPage/index.js ***!
  \**********************************************/
/*! exports provided: reducer, saga, component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./develop/routes/ProfilesPage/reducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["profilesPage"]; });

/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sagas */ "./develop/routes/ProfilesPage/sagas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saga", function() { return _sagas__WEBPACK_IMPORTED_MODULE_1__["sagaProfilesWatcher"]; });

/* harmony import */ var _Profiles_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profiles.jsx */ "./develop/routes/ProfilesPage/Profiles.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _Profiles_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./develop/routes/ProfilesPage/reducers.js":
/*!*************************************************!*\
  !*** ./develop/routes/ProfilesPage/reducers.js ***!
  \*************************************************/
/*! exports provided: profilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profilesPage", function() { return profilesPage; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./develop/routes/ProfilesPage/actions.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}


var profilesPage = function profilesPage() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["PROFILES_LOADED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        profiles: action.profiles
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./develop/routes/ProfilesPage/sagas.js":
/*!**********************************************!*\
  !*** ./develop/routes/ProfilesPage/sagas.js ***!
  \**********************************************/
/*! exports provided: sagaProfilesWatcher, sagaWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaProfilesWatcher", function() { return sagaProfilesWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaWorker", function() { return sagaWorker; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./develop/routes/ProfilesPage/actions.js");
/* harmony import */ var has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
/* harmony import */ var has__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(has__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaProfilesWatcher),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sagaWorker);





function sagaProfilesWatcher() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaProfilesWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          debugger;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["PROFILES_REQUEST"], sagaWorker);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function sagaWorker() {
  var htmlStore, bootstrap, bootKey;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sagaWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          htmlStore = JSON.parse(document.getElementById("application-state").textContent);
          bootstrap = {
            loadProfiles: "loadProfiles"
          };
          _context2.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(bootstrap);

        case 3:
          if ((_context2.t1 = _context2.t0()).done) {
            _context2.next = 10;
            break;
          }

          bootKey = _context2.t1.value;

          if (!has__WEBPACK_IMPORTED_MODULE_3___default()(htmlStore, bootKey)) {
            _context2.next = 8;
            break;
          }

          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["loadProfiles"])(htmlStore[bootstrap.loadProfiles]));

        case 8:
          _context2.next = 3;
          break;

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map