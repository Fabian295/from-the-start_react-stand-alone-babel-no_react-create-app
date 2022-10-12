'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
console.log('source app.js to scripts app.js');
var obj = {
  name: 'John',
  content: 'Yo World!'
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Stand alone Demo"), /*#__PURE__*/React.createElement("p", null, "You can use object values as expressions"), /*#__PURE__*/React.createElement("p", null, obj.content));
var Hello = /*#__PURE__*/function (_React$Component) {
  _inherits(Hello, _React$Component);
  var _super = _createSuper(Hello);
  function Hello() {
    _classCallCheck(this, Hello);
    return _super.apply(this, arguments);
  }
  _createClass(Hello, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.french), /*#__PURE__*/React.createElement("h3", null, this.props.english));
    }
  }]);
  return Hello;
}(React.Component);
var Nav = function Nav(_ref) {
  var routerText = _ref.routerText,
    lib = _ref.lib,
    text = _ref.text;
  //  const {Link} = React;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Link 1 "), /*#__PURE__*/React.createElement("li", null, "Link 2"), /*#__PURE__*/React.createElement("li", null, "Link 3"), /*#__PURE__*/React.createElement("p", null, routerText), /*#__PURE__*/React.createElement("p", null, lib), /*#__PURE__*/React.createElement("p", null, "Or with destructuring,", text, " ")));
};
var Checkbox = /*#__PURE__*/function (_React$Component2) {
  _inherits(Checkbox, _React$Component2);
  var _super2 = _createSuper(Checkbox);
  function Checkbox(props) {
    var _this;
    _classCallCheck(this, Checkbox);
    _this = _super2.call(this, props);
    _this.state = {
      checked: false
    };
    var msg = '';
    _this.handleChecked = _this.handleChecked.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Checkbox, [{
    key: "handleChecked",
    value: function handleChecked() {
      this.setState({
        checked: !this.state.checked
      });
      console.log(this.state.checked);
    }
  }, {
    key: "render",
    value: function render() {
      var msg = '';
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
        onChange: this.handleChecked,
        type: "checkbox"
      }), /*#__PURE__*/React.createElement("p", null, "Checkbox is ", this.msg, this.state.checked === true ? msg = 'Checked' : msg = 'NOT Checked'));
    }
  }]);
  return Checkbox;
}(React.Component);
var DOMContainer = document.getElementById('app');
var root = ReactDOM.createRoot(DOMContainer);
// root.render(template )
// root.render(<Hello french='Bonjour Tout le Monde!' english='Hello Chaps!' /> )
// root.render(<Nav text="without the props. notation" routerText="Link is part of react-router" lib="Part of react for navigation" /> )
root.render( /*#__PURE__*/React.createElement(Checkbox, null));
