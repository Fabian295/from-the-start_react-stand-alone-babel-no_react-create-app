"use strict";

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
console.log('new live!');

// const title = "The BucketList App!";
// const subtitle = "Create Options / tasks, personal or randomly!"
// const options = ['one', 'two', 'three'];
var BucketListApp = /*#__PURE__*/function (_React$Component) {
  _inherits(BucketListApp, _React$Component);
  var _super = _createSuper(BucketListApp);
  function BucketListApp(props) {
    var _this;
    _classCallCheck(this, BucketListApp);
    _this = _super.call(this, props);
    _this.state = {
      options: props.options
    };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handleRandomSelect = _this.handleRandomSelect.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(BucketListApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleRandomSelect",
    value: function handleRandomSelect() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var randomOption = this.state.options[randomNum];
      alert(randomOption);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      // console.log(option)
      // console.log(prevState.options),
      // console.log(this.state.options),
      // console.log(option)

      if (!option) {
        return 'Enter a valid and at least one character long option!';
      } else if (this.state.options.indexOf(option) > -1) {
        // return console.log('This option already exist in the Options List!')
        console.log('This option already exist in the Options List!');
        return 'This option already exists in the Options List!';
      }
      // if(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
          // options: prevState.options + option
        };
      });
      // }
    }
  }, {
    key: "render",
    value: function render() {
      // const title = "The BucketList App!";
      var subtitle = "Create Options / tasks, personal or randomly!";
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header
      // title={title} 
      // subtitle={subtitle} 
      , null), /*#__PURE__*/React.createElement(Action, {
        handleRandomSelect: this.handleRandomSelect,
        hasOptions: this.state.options.length > 0
      }), /*#__PURE__*/React.createElement(Options
      // title="Personal List"
      , {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions
      }), /*#__PURE__*/React.createElement(Option, null), /*#__PURE__*/React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);
  return BucketListApp;
}(React.Component);
BucketListApp.defaultProps = {
  options: []
};

// class Header extends React.Component {
//   render() {
//     return (
//     <div>
// <h1>{this.props.title}</h1>
// <h3>{this.props.subtitle}</h3>
//     </div>
//     )
//   }
// }

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), !props.subtitle ? '' : /*#__PURE__*/React.createElement("h3", null, props.subtitle));
};
Header.defaultProps = {
  title: "The BucketList App!"
};
var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handleRandomSelect,
    disabled: !props.hasOptions
  }, "What Should I Do?"));
};

// class Action extends React.Component {
// handlePick() {
//   alert('handlePick')
// }
//   render() {
//     return (
//       <div>
// <button 
// onClick={this.props.handleRandomSelect}
// disabled={ !this.props.hasOptions }
// >
//   What Should I Do?
// </button>
//       </div>
//     )
//   }
// }

// class Options extends React.Component {
// constructor(props) {
//   super(props);
//   this.handleRemoveAll = this.handleRemoveAll.bind(this);
// }
// handleRemoveAll() {
//   // alert('handleRemoveAll')
//   console.log(this.props.options[1], this.props.options)
//   // this.props.options = [];
// }
//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.handleRemoveAll} >removeAll</button> */}
//         <button onClick={this.props.handleDeleteOptions} >removeAll</button>

//         <h3> Options List Component </h3>
//         <ol >
//         {this.props.options.map((option, index) => {
//           return <li key={index}>
//                     <Option key={index} optionText={option}/>
//                  </li>
//                 }) }
//         </ol>
//       </div>
//     )
//   }
// }

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>
//           { this.props.optionText }
//         </p>
//       </div>
//     )
//   }
// }

var Options = function Options(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handleDeleteOptions
  }, "Remove All"), /*#__PURE__*/React.createElement("h3", null, props.title), /*#__PURE__*/React.createElement("ol", null, props.options.map(function (option, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement(Option, {
      key: index,
      optionText: option
    }));
  })));
};
Options.defaultProps = {
  title: "Personal List"
};
var Option = function Option(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, props.optionText));
};
var AddOption = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOption, _React$Component2);
  var _super2 = _createSuper(AddOption);
  function AddOption(props) {
    var _this2;
    _classCallCheck(this, AddOption);
    _this2 = _super2.call(this, props);
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }
  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      //  {option && this.props.handleAddOption(option)}
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
      e.target.elements.option.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAddOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);
  return AddOption;
}(React.Component);
var DOMContainer = document.getElementById('app');
var root = ReactDOM.createRoot(DOMContainer);
root.render( /*#__PURE__*/React.createElement(BucketListApp, {
  options: ['Go to Japan!', 'Buy a drone and join a race-track club!']
}));
