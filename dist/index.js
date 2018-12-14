'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function Loading() {
  return React__default.createElement("svg", {
    className: "refresh-icon",
    width: "12",
    height: "12",
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 0 0",
    to: "360 0 0",
    dur: "1s",
    repeatCount: "indefinite"
  }), React__default.createElement("path", {
    fill: "#333",
    d: "M960 447.008q-11.008-152.992-120-261.504t-260.992-120.512q-16-0.992-27.488 9.504t-11.488 26.496q0 14.016 9.504 24.512t23.488 11.488q55.008 4 107.008 26.016 60.992 26.016 108.992 73.504t74.016 109.504q22.016 51.008 26.016 106.016 0.992 14.016 11.488 23.488t24.512 9.504q15.008 0 26.016-11.008 11.008-12 8.992-27.008z"
  }));
}

function CloseButton() {
  return React__default.createElement("svg", {
    className: "close-btn",
    width: "16",
    height: "16",
    viewBox: "0 0 2048 2048",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    fill: "#333",
    d: "M606.831242 520.060515c0.001007-2.168803-0.104715-4.337605-0.299041-6.499359l368.741734-375.125303c27.44532-27.916536 27.44532-73.131134 0-101.072842-13.711584-13.920007-31.683244-20.917768-49.661953-20.917768-17.974681 0-35.94332 6.997761-49.66598 20.917768L518.067411 401.478167 154.187862 37.503972c-14.052914-14.013646-32.449474-21.05873-50.856103-21.05873-18.403608 0-36.810237 7.045084-50.849055 21.05873-28.106835 28.124958-28.106835 73.649673 0 101.759529L433.187086 520.033329 52.481698 900.822288c-28.106835 28.106835-28.106835 73.624502 0 101.713213 28.092738 28.11791 73.609399 28.11791 101.705158 0l367.220351-367.274722 354.538797 360.676689c27.437265 27.930632 71.889661 27.930632 99.327933 0 27.44532-27.90546 27.44532-73.120059 0-101.036594L606.831242 520.060515z"
  }));
}

function Browser() {
  return React__default.createElement("svg", {
    width: "480",
    height: "50",
    viewBox: "0 0 800 75",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("defs", null, React__default.createElement("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "linearGradient-1"
  }, React__default.createElement("stop", {
    stopColor: "#F2F2F2",
    offset: "0%"
  }), React__default.createElement("stop", {
    stopColor: "#F2F2F2",
    offset: "100%"
  }))), React__default.createElement("g", {
    id: "Page-the-first",
    fill: "none",
    fillRule: "evenodd"
  }, React__default.createElement("g", {
    id: "Chrome",
    transform: "translate(0 -3)"
  }, React__default.createElement("g", {
    transform: "translate(0 3)",
    id: "Group"
  }, React__default.createElement("g", {
    id: "Header"
  }, React__default.createElement("path", {
    d: "M0.5,37.5 L799.5,37.5 L799.5,4.00021828 C799.5,2.06722166 797.932997,0.500218283 796,0.500218283 L4,0.500218283 C2.06700338,0.500218283 0.5,2.06722166 0.5,4.00021828 L0.5,37.5 Z",
    id: "Window-header",
    stroke: "#CACACA",
    fill: "#DEDEDE"
  }), React__default.createElement("circle", {
    id: "Enlarge",
    stroke: "#1CAC2B",
    fill: "#2ACB42",
    cx: "59",
    cy: "20",
    r: "5.5"
  }), React__default.createElement("circle", {
    id: "Minimize",
    stroke: "#DFA022",
    fill: "#FEBF2F",
    cx: "39",
    cy: "20",
    r: "5.5"
  }), React__default.createElement("circle", {
    id: "Close",
    stroke: "#E14640",
    fill: "#FE6159",
    cx: "19",
    cy: "20",
    r: "5.5"
  })), React__default.createElement("g", {
    id: "Tab-bar",
    transform: "translate(0 9)"
  }, React__default.createElement("path", {
    d: "M0.5,28.5 L0.5,65.5 L799.5,65.5 L799.5,28.5 L285.962518,28.5 L272.656645,0.5 L86.5929525,0.5 L73.2870791,28.5 L0.5,28.5 Z",
    id: "Tab",
    stroke: "#9C9C9C",
    fill: "url(#linearGradient-1)"
  }), React__default.createElement("path", {
    d: "M96,33.5 C94.6192881,33.5 93.5,34.6192881 93.5,36 L93.5,58 C93.5,59.3807119 94.6192881,60.5 96,60.5 L761,60.5 C762.380712,60.5 763.5,59.3807119 763.5,58 L763.5,36 C763.5,34.6192881 762.380712,33.5 761,33.5 L96,33.5 Z",
    id: "URL-Bar",
    stroke: "#B7B7B7",
    fill: "#FFF"
  }), React__default.createElement("g", {
    id: "More",
    transform: "translate(780 41)",
    fill: "#5A5A5A"
  }, React__default.createElement("circle", {
    id: "Oval",
    cx: "1",
    cy: "1",
    r: "1"
  }), React__default.createElement("circle", {
    id: "Oval",
    cx: "1",
    cy: "6",
    r: "1"
  }), React__default.createElement("circle", {
    id: "Oval",
    cx: "1",
    cy: "11",
    r: "1"
  })), React__default.createElement("polygon", {
    id: "Back",
    fill: "#6D6D6D",
    fillRule: "nonzero",
    points: "26 46.125 15.35125 46.125 20.2425 41.23375 19 40 12 47 19 54 20.23375 52.76625 15.35125 47.875 26 47.875"
  }), React__default.createElement("polygon", {
    id: "Forward",
    fill: "#6D6D6D",
    fillRule: "nonzero",
    opacity: "0.2",
    transform: "rotate(-180 47 47)",
    points: "54 46.125 43.35125 46.125 48.2425 41.23375 47 40 40 47 47 54 48.23375 52.76625 43.35125 47.875 54 47.875"
  }), React__default.createElement("path", {
    d: "M79.942464,42.05625 C78.6729206,40.7875 76.9305816,40 74.9956223,40 C71.1257036,40 68,43.1325 68,47 C68,50.8675 71.1257036,54 74.9956223,54 C78.2614134,54 80.9843652,51.76875 81.7636023,48.75 L79.942464,48.75 C79.2245153,50.78875 77.2808005,52.25 74.9956223,52.25 C72.097561,52.25 69.742339,49.89625 69.742339,47 C69.742339,44.10375 72.097561,41.75 74.9956223,41.75 C76.4490306,41.75 77.7448405,42.35375 78.6904315,43.3075 L75.8711695,46.125 L82,46.125 L82,40 L79.942464,42.05625 Z",
    id: "Reload-icon",
    fill: "#6D6D6D",
    fillRule: "nonzero"
  }))))));
}

function EmptyFavicon() {
  return React__default.createElement("svg", {
    className: "empty-favicon",
    width: "12",
    height: "12",
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    fill: "#333",
    d: "M678.4 55.466667l-64 0L221.866667 55.466667c-46.933333 0-85.333333 38.4-85.333333 85.333333l0 750.933333c0 46.933333 38.4 85.333333 85.333333 85.333333l584.533333 0c46.933333 0 85.333333-38.4 85.333333-85.333333L891.733333 324.266667l0-42.666667L678.4 55.466667zM844.8 887.466667c0 21.333333-17.066667 42.666667-42.666667 42.666667L221.866667 930.133333c-21.333333 0-42.666667-17.066667-42.666667-42.666667L179.2 136.533333c0-21.333333 17.066667-42.666667 42.666667-42.666667L597.333333 93.866667l0 209.066667c0 21.333333 17.066667 42.666667 42.666667 42.666667l209.066667 0L849.066667 887.466667zM635.733333 302.933333 635.733333 93.866667l21.333333 0 187.733333 209.066667L635.733333 302.933333z"
  }));
}

function Favicon() {
  return React__default.createElement("svg", {
    className: "favicon",
    width: "12",
    height: "12",
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    fill: "#f40",
    d: "M535.428571 573.714286l152-285.142857h-64L533.714286 466.857143q-13.714286 27.428571-25.142857 52.571428l-24-52.571428-88.571429-178.285714H327.428571l150.285715 281.714285v185.142857h57.714285v-181.714285z m415.428572-336v548.571428q0 68-48.285714 116.285715T786.285714 950.857143H237.714286q-68 0-116.285715-48.285714T73.142857 786.285714V237.714286q0-68 48.285714-116.285715T237.714286 73.142857h548.571428q68 0 116.285715 48.285714T950.857143 237.714286z"
  }));
}

function ImageHolder() {
  return React__default.createElement("svg", {
    className: "icon",
    width: "48",
    height: "48",
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    fill: "#ddd",
    d: "M138.7 139.1c-41.2 0-74.7 34.8-74.7 77.8v591.2c0 42.9 33.4 77.8 74.7 77.8h746.8c41.2 0 74.7-34.8 74.7-77.8V216.9c0-43-33.4-77.8-74.7-77.8H138.7z m663.6 518.4l-66.8 69.6c-1.4-1.6-2.4-3.4-3.9-4.9L470.3 502c-18.5-19.4-43.9-30.4-70.5-30.4s-52 11-70.5 30.4L113.8 622.8v-354c0-43 33.4-77.8 74.7-77.8h647.2c41.2 0 74.7 34.8 74.7 77.8v366c-37.2-15.7-80.1-6.7-108.1 22.7zM611.7 484c0 50.1 39 90.8 87.1 90.8 48.1 0 87.1-40.6 87.1-90.7s-39-90.8-87.1-90.8c-48.1-0.1-87.1 40.6-87.1 90.7z"
  }));
}

function Image() {
  return React__default.createElement("svg", {
    className: "icon",
    width: "48",
    height: "48",
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M0 1024h1024V0H0z",
    fill: "#97DAD3"
  }), React__default.createElement("path", {
    d: "M1024 573.482667a120.277333 120.277333 0 0 0-7.594667-7.253334 122.282667 122.282667 0 0 0-11.989333-11.989333 128.042667 128.042667 0 0 0-12.032-12.032 123.136 123.136 0 0 0-12.032-12.032 122.837333 122.837333 0 0 0-11.989333-12.032 133.034667 133.034667 0 0 0-11.989334-12.032 128.384 128.384 0 0 0-12.074666-12.032 118.272 118.272 0 0 0-11.989334-12.032 133.034667 133.034667 0 0 0-11.989333-12.032 133.376 133.376 0 0 0-12.032-12.032 123.136 123.136 0 0 0-12.032-12.032 127.744 127.744 0 0 0-11.989333-12.032 133.376 133.376 0 0 0-12.032-12.032 123.136 123.136 0 0 0-12.032-12.032 127.744 127.744 0 0 0-11.989334-12.032 132.736 132.736 0 0 0-12.032-11.989333 123.136 123.136 0 0 0-12.032-12.032 122.837333 122.837333 0 0 0-11.989333-12.032 133.034667 133.034667 0 0 0-11.989333-12.032 160.768 160.768 0 0 0-12.245334-11.989334 122.837333 122.837333 0 0 0-11.989333-12.032 122.88 122.88 0 0 0-12.074667-11.989333 123.136 123.136 0 0 0-12.032-12.032 122.837333 122.837333 0 0 0-11.989333-12.032 133.034667 133.034667 0 0 0-11.989333-12.032 128.384 128.384 0 0 0-12.074667-12.032 118.272 118.272 0 0 0-11.989333-12.032 127.744 127.744 0 0 0-11.989334-12.032 128.042667 128.042667 0 0 0-12.032-12.032 123.136 123.136 0 0 0-12.032-12.032 122.837333 122.837333 0 0 0-11.989333-12.032 128.042667 128.042667 0 0 0-12.032-12.032 139.178667 139.178667 0 0 0-12.117333-11.989333 122.837333 122.837333 0 0 0-11.989334-12.032c-27.904-32-64.256-40.832-85.674666-40.832-45.397333 0-96.469333-53.589333-96.469334-53.589334-2.304 6.442667-1.92 14.634667-0.298666 22.997334-0.938667 3.413333-1.749333 6.784-2.346667 10.154666-5.461333-14.421333-8.618667-26.112-8.618667-26.112-1.493333 4.736-2.56 9.472-3.413333 14.122667a307.328 307.328 0 0 1-8.661333-26.154667c-1.450667 4.693333-2.517333 9.429333-3.413334 14.08-5.418667-14.421333-8.618667-26.112-8.618666-26.112-14.506667 46.677333 3.157333 92.074667 3.157333 92.074667l-0.725333-0.341333c-3.029333-4.821333-4.821333-8.405333-4.821334-8.405334-0.341333 1.834667-0.554667 3.541333-0.768 5.248l-0.384-0.256c-6.656-8.533333-10.922667-16.981333-10.922666-16.981333l-0.768 5.376c-6.826667-8.661333-11.221333-17.408-11.221334-17.408-6.954667 40.96 7.082667 57.984 7.082667 57.984-33.28 83.882667-10.026667 210.005333-10.026667 210.005333v-0.042666a18.517333 18.517333 0 0 1 0.085334 1.536 18.346667 18.346667 0 0 0-13.226667-2.474667 18.346667 18.346667 0 0 0-14.336 21.504l9.472 47.829333c1.365333 6.826667 6.357333 11.946667 12.586667 13.866667 1.834667 5.888 6.4 10.282667 12.032 12.032a18.048 18.048 0 0 0 7.850666 10.197333c1.066667 3.114667 2.133333 5.802667 3.285334 7.850667 8.490667 15.701333 21.632 33.536 38.357333 48.810667 3.754667 4.138667 7.765333 8.106667 12.032 12.032l1.024 1.152c-6.357333 67.754667-35.925333 96.725333-57.557333 108.885333-35.242667 2.688-88.618667 12.885333-101.802667 12.885333a99.541333 99.541333 0 0 0-99.541333 99.584V1024H1024V573.482667z",
    fill: "#95C2BD"
  }), React__default.createElement("path", {
    d: "M184.362667 1024h655.274666v-171.861333H184.362667z",
    fill: "#EDD0A8"
  }), React__default.createElement("path", {
    d: "M740.096 681.258667c-18.688 0-117.12-20.181333-132.053333-11.264-29.098667 17.322667-96.042667 74.496-96.042667 110.848 0-36.352-66.986667-93.482667-96.042667-110.848-14.933333-8.917333-113.408 11.264-132.010666 11.264a99.541333 99.541333 0 0 0-99.541334 99.584v71.296h120.021334V1024h415.146666v-171.861333h120.021334v-71.296a99.498667 99.498667 0 0 0-99.498667-99.584",
    fill: "#8BC53F"
  }), React__default.createElement("path", {
    d: "M579.413333 531.968h-134.826666c0 135.850667-82.517333 145.109333-82.517334 145.109333 0 128.682667 149.930667 107.818667 149.930667 107.818667s149.930667 20.821333 149.930667-107.818667c0 0-82.517333-9.258667-82.517334-145.109333M392.021333 446.464a18.304 18.304 0 0 1-35.84 7.125333L346.666667 405.76a18.218667 18.218667 0 0 1 14.336-21.461333 18.218667 18.218667 0 0 1 21.504 14.336l9.514666 47.829333zM629.162667 446.464a18.346667 18.346667 0 0 0 35.925333 7.125333l9.472-47.829333a18.304 18.304 0 0 0-35.882667-7.125333l-9.514666 47.829333z",
    fill: "#EDD0A8"
  }), React__default.createElement("path", {
    d: "M512 581.589333c-57.045333 0-100.608-48.085333-120.106667-84.096-19.498667-36.053333-33.024-243.242667 9.045334-300.288C442.069333 141.354667 512 147.669333 512 147.669333s69.930667-6.314667 111.104 49.536c42.069333 57.045333 28.544 264.234667 9.002667 300.288-19.541333 36.010667-63.018667 84.096-120.106667 84.096",
    fill: "#FCE5C5"
  }), React__default.createElement("path", {
    d: "M649.813333 385.237333s-32.512-95.872-39.424-133.077333c0 0-86.4 11.349333-155.776-25.856 0 0-30.933333 29.013333-51.072 36.565333 0 0-12.8 86.4-29.397333 122.368 0 0-23.253333-126.122667 10.026667-210.005333 0 0-14.037333-17.024-7.125334-58.026667 0 0 13.269333 26.496 29.653334 32.810667 0 0-17.664-45.397333-3.157334-92.074667 0 0 21.418667 79.445333 49.194667 79.445334 0 0-21.418667-40.96-13.866667-62.421334 0 0 51.072 53.589333 96.512 53.589334 45.354667 0 158.293333 39.722667 114.432 256.682666",
    fill: "#333"
  }), React__default.createElement("path", {
    d: "M632.064 497.493333c-19.498667 36.010667-25.344 84.096-120.064 84.096s-100.608-48.085333-120.106667-84.096",
    fill: "#FCE5C5"
  }));
}

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateTimer", function (stopTime) {
      requestAnimationFrame(function () {
        var newTime = performance.now() - _this.state.timeBase;

        if (stopTime > newTime) {
          _this.setState({
            time: newTime
          });

          _this.updateTimer(stopTime);
        } else {
          _this.setState({
            time: stopTime
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "playAnimation", function () {
      var _this$props = _this.props,
          load = _this$props.load,
          fp = _this$props.fp,
          fcp = _this$props.fcp,
          fmp = _this$props.fmp;
      var finalLoad = parseFloat(load) || 0;
      var finalFp = parseFloat(fp) || 0;
      var finalFcp = parseFloat(fcp) || 0;
      var finalFmp = parseFloat(fmp) || 0;

      if (_this.state.loading) {
        setTimeout(function () {
          _this.setState({
            loading: false
          });
        }, finalLoad * _this.state.slowFactor);
      }

      _this.updateTimer(Math.max(finalLoad, finalFp, finalFcp, finalFmp) * _this.state.slowFactor);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReplay", function () {
      _this.setState({
        loading: true,
        time: 0,
        timeBase: performance.now()
      }, _this.playAnimation);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSlow", function () {
      _this.setState({
        slowFactor: _this.state.slowFactor === 1 ? 2 : 1,
        time: 0,
        timeBase: performance.now(),
        loading: true
      }, _this.playAnimation);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderContentByTime", function (time) {
      var _this$props2 = _this.props,
          load = _this$props2.load,
          fp = _this$props2.fp,
          fcp = _this$props2.fcp,
          fmp = _this$props2.fmp,
          pageTitle = _this$props2.pageTitle;
      var finalLoad = parseFloat(load) || 0;
      var finalFp = parseFloat(fp) || 0;
      var finalFcp = parseFloat(fcp) || 0;
      var finalFmp = parseFloat(fmp) || 0;
      var isFp = time > finalFp && time < Math.min(finalFcp, finalFmp);
      var isFcp = time > finalFcp && time > finalFp;
      var isFmp = time >= finalFmp;

      if (isFmp) {
        return React__default.createElement("div", {
          className: "page-demo"
        }, React__default.createElement("div", {
          className: "header"
        }, React__default.createElement("span", {
          className: "page-demo-title"
        }, pageTitle || 'Demo Page')), React__default.createElement("div", {
          className: "content"
        }, React__default.createElement("ul", null, React__default.createElement("li", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."), finalFmp < finalLoad && React__default.createElement("li", null, time > finalLoad - 100 ? React__default.createElement(Image, null) : React__default.createElement(ImageHolder, null)), React__default.createElement("li", null, "Curabitur tristique eros tortor, eu dignissim enim egestas in. Cras facilisis risus accumsan venenatis vulputate."), React__default.createElement("li", null, "Vivamus quis libero ac sapien placerat viverra."))), React__default.createElement("div", {
          className: "footer"
        }, React__default.createElement("span", {
          className: "page-demo-footer"
        }, "\xA9 MyCompany 2010-2019")));
      }

      if (isFcp) {
        return React__default.createElement("div", {
          className: "page-demo"
        }, React__default.createElement("div", {
          className: "header"
        }, React__default.createElement("span", {
          className: "page-demo-title"
        }, pageTitle || 'Demo Page')), React__default.createElement("div", {
          className: "content"
        }, finalFmp > finalLoad && React__default.createElement("span", null, "loading...")), React__default.createElement("div", {
          className: "footer"
        }, React__default.createElement("span", {
          className: "page-demo-footer"
        }, "\xA9 MyCompany 2010-2019")));
      }

      if (isFp) {
        return React__default.createElement("div", {
          className: "page-demo"
        }, React__default.createElement("div", {
          className: "header"
        }), React__default.createElement("div", {
          className: "content"
        }), React__default.createElement("div", {
          className: "footer"
        }));
      }
    });

    _this.state = {
      loading: !isNaN(parseFloat(props.load)),
      time: 0,
      timeBase: performance.now(),
      slowFactor: 1
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.playAnimation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          time = _this$state.time,
          slowFactor = _this$state.slowFactor;
      var _this$props3 = this.props,
          load = _this$props3.load,
          fp = _this$props3.fp,
          fcp = _this$props3.fcp,
          fmp = _this$props3.fmp,
          pageTitle = _this$props3.pageTitle,
          pageUrl = _this$props3.pageUrl;
      var finalLoad = parseFloat(load) || 0;
      var finalFp = parseFloat(fp) || 0;
      var finalFcp = parseFloat(fcp) || 0;
      var finalFmp = parseFloat(fmp) || 0;
      var lastTime = Math.max(finalLoad, finalFp, finalFcp, finalFmp);
      var arr = [{
        key: 'First Paint',
        value: finalFp
      }, {
        key: 'First Contentful Paint',
        value: finalFcp
      }, {
        key: 'First Meaningful Paint',
        value: finalFmp
      }, {
        key: 'Page Load',
        value: finalLoad
      }].sort(function (a, b) {
        return b.value - a.value;
      });
      var finalTime = time / slowFactor;
      return React__default.createElement("div", {
        className: "paint-demo-wrapper"
      }, React__default.createElement("span", {
        className: "page-title"
      }, pageTitle || 'Demo Page'), React__default.createElement("span", {
        className: "page-url"
      }, pageUrl || 'https://www.example.com'), !loading && React__default.createElement(CloseButton, null), loading && React__default.createElement(Loading, null), loading && React__default.createElement(EmptyFavicon, null), !loading && React__default.createElement(Favicon, null), React__default.createElement(Browser, null), React__default.createElement("div", {
        className: "timer-wrapper"
      }, React__default.createElement("span", {
        className: "slow-btn",
        onClick: this.handleSlow
      }, slowFactor === 1 ? '2x slow' : 'normal'), finalTime >= lastTime && React__default.createElement("span", {
        className: "reload-btn",
        onClick: this.handleReplay
      }, "replay"), arr.map(function (item, index) {
        if (item.value <= finalTime && item.value > 0) {
          return React__default.createElement("span", {
            className: "timer-entry",
            key: index
          }, item.key, ": ", item.value.toFixed(2), "ms");
        }

        return null;
      }), React__default.createElement("span", {
        className: "timer"
      }, finalTime.toFixed(2), "ms")), this.renderContentByTime(finalTime));
    }
  }]);

  return App;
}(React.Component);

module.exports = App;
