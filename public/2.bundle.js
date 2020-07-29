(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./develop/routes/UsersPage/Users.jsx":
/*!********************************************!*\
  !*** ./develop/routes/UsersPage/Users.jsx ***!
  \********************************************/
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
/* harmony import */ var redux_users_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux/users/actions */ "./develop/redux/users/actions.js");






var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.application.usersPage.users
  };
};

var Users = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, {
  loadUsers: redux_users_actions__WEBPACK_IMPORTED_MODULE_8__["loadUsers"]
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Users, _React$Component);

  var _super = _createSuper(Users);

  function Users() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Users);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Users, [{
    key: "render",
    value: function render() {
      var users = this.props.users;
      var usersItems = users && Object.values(users).map(function (user, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: key
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, user.phone));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "users"
      }, usersItems);
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router5__WEBPACK_IMPORTED_MODULE_6__["routeNode"])("users")(Users));

/***/ }),

/***/ "./develop/routes/UsersPage/actions.js":
/*!*********************************************!*\
  !*** ./develop/routes/UsersPage/actions.js ***!
  \*********************************************/
/*! exports provided: USERS_LOADED, USERS_REQUEST, loadUsers, fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_LOADED", function() { return USERS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_REQUEST", function() { return USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUsers", function() { return loadUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
var USERS_LOADED = "USERS_LOADED";
var USERS_REQUEST = "USERS_REQUEST";
var loadUsers = function loadUsers(users) {
  return {
    type: USERS_LOADED,
    users: users
  };
};
var fetchUsers = function fetchUsers() {
  return {
    type: USERS_REQUEST
  };
};

/***/ }),

/***/ "./develop/routes/UsersPage/index.js":
/*!*******************************************!*\
  !*** ./develop/routes/UsersPage/index.js ***!
  \*******************************************/
/*! exports provided: reducer, saga, component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./develop/routes/UsersPage/reducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["usersPage"]; });

/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sagas */ "./develop/routes/UsersPage/sagas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saga", function() { return _sagas__WEBPACK_IMPORTED_MODULE_1__["sagaUsersWatcher"]; });

/* harmony import */ var _Users_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users.jsx */ "./develop/routes/UsersPage/Users.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _Users_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./develop/routes/UsersPage/reducers.js":
/*!**********************************************!*\
  !*** ./develop/routes/UsersPage/reducers.js ***!
  \**********************************************/
/*! exports provided: usersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersPage", function() { return usersPage; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./develop/routes/UsersPage/actions.js");


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


var usersPage = function usersPage() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["USERS_LOADED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        users: action.users
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./develop/routes/UsersPage/sagas.js":
/*!*******************************************!*\
  !*** ./develop/routes/UsersPage/sagas.js ***!
  \*******************************************/
/*! exports provided: sagaUsersWatcher, sagaWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUsersWatcher", function() { return sagaUsersWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaWorker", function() { return sagaWorker; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./develop/routes/UsersPage/actions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);



var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(sagaUsersWatcher),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(sagaWorker);




function sagaUsersWatcher() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sagaUsersWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["USERS_REQUEST"], sagaWorker);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function sagaWorker() {
  var payload;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function sagaWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(fetchUsers);

        case 2:
          payload = _context2.sent;
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["loadUsers"])(payload));

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

var fetchUsers = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_4__["get"]("https://jsonplaceholder.typicode.com/users").then(function (data) {
              return data.data;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee);
  }));

  return function fetchUsers() {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map