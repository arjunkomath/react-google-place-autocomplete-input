!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.GooglePlaceSearchInput=t():e.GooglePlaceSearchInput=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){var n=null;return function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(r,o)},t)}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),i=n.n(u),l=n(8),s=n.n(l),p=n(11),f=n.n(p),y=n(12),d=n.n(y),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._getPlace=function(e){e&&n.autocompleteService.getPlacePredictions({input:e},function(e){e=e?e.map(function(e,t){return h({},e,{index:t})}):[],n.setState({placeResults:(e||[]).slice(0,n.props.numberResults)}),n.props.onChange&&n.props.onChange(e)})},n._onChange=function(e){n.setState({inputValue:e.target.value}),n._getPlace(e.target.value)},n._onClick=function(e,t){e.preventDefault(),n.setState({inputValue:e.target.innerHTML,placeResults:[]}),t&&n.props.onPlaceSelected(t)},n._removeLocation=function(e){if(n.setState({inputValue:"",placeResults:[]}),n.props.onRemove)return n.props.onRemove(e)},n._handleInputKeyDown=function(e){switch(e.key){case"Enter":e.preventDefault(),n.handleEnterKey();break;case"ArrowDown":e.preventDefault(),n.handleDownKey();break;case"ArrowUp":e.preventDefault(),n.handleUpKey()}},n.handleEnterKey=function(){var e=n.state.placeResults.find(function(e){return e.active});e&&(n.setState({inputValue:e.description,placeResults:[]}),n.props.onPlaceSelected(e))},n.handleUpKey=function(){if(0!==n.state.placeResults.length){var e=n.state.placeResults.find(function(e){return e.active});void 0===e?n.selectActiveAtIndex(n.state.placeResults.length-1):0===e.index?n.selectActiveAtIndex(n.state.placeResults.length-1):n.selectActiveAtIndex(e.index-1)}},n.handleDownKey=function(){if(0!==n.state.placeResults.length){var e=n.state.placeResults.find(function(e){return e.active});void 0===e?n.selectActiveAtIndex(0):e.index===n.state.placeResults.length-1?n.selectActiveAtIndex(0):n.selectActiveAtIndex(e.index+1)}},n.selectActiveAtIndex=function(e){n.setState({placeResults:n.state.placeResults.map(function(t,n){return n===e?h({},t,{active:!0}):h({},t,{active:!1})})})},n.renderSearchIcon=function(){return i.a.createElement("div",{className:d.a.searchIcon},i.a.createElement("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 451 451"},i.a.createElement("g",null,i.a.createElement("path",{d:"M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3 s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4 C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3 s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"}))))},n.poweredImage="https://developers.google.com/places/documentation/images/powered-by-google-on-white.png",n.state={inputValue:e.value||"",placeResults:[]},n._getPlace=c(n._getPlace,300),n}return a(t,e),m(t,[{key:"componentDidMount",value:function(){if(!window.google)throw new Error("[react-google-place-autocomplete-input]: Google Maps JavaScript API library must be loaded. See: https://developers.google.com/maps/documentation/javascript/places");if(!window.google.maps.places)throw new Error("[react-google-place-autocomplete-input]: Google Maps Places library must be loaded. Please add `libraries=places` to the src URL. See: https://developers.google.com/maps/documentation/javascript/places");this.autocompleteService=new window.google.maps.places.AutocompleteService,this.props.value&&this._getPlace(this.props.value)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:f()([d.a.searchContainer,this.props.containerClassName])},i.a.createElement("div",{className:d.a.searchInputContainer},this.renderSearchIcon(),i.a.createElement("input",{autoFocus:!0,value:this.state.inputValue,onChange:this._onChange,className:f()([d.a.searchInput,this.props.inputClassName]),onKeyDown:this._handleInputKeyDown})),i.a.createElement("div",{className:f()([d.a.poweredByGoogle,this.props.resultClassName])},i.a.createElement("img",{src:this.poweredImage})),!!this.state.placeResults.length&&i.a.createElement("div",{className:f()([d.a.autoCompleteContainer,this.props.autoCompleteContainerClassName])},this.state.placeResults.map(function(t){return i.a.createElement("div",{key:t.id,className:f()([d.a.searchResult,e.props.resultClassName,!!t.active&&d.a.activeSearchResult]),onClick:function(n){return e._onClick(n,t)},id:t.id,onMouseOver:function(){return e.selectActiveAtIndex(t.index)}},t.description)}),i.a.createElement("div",{className:f()([d.a.searchResult,d.a.removeLocation]),onClick:this._removeLocation},"Remove location")))}}]),t}(i.a.Component);v.propTypes={onChange:s.a.func.isRequired,onPlaceSelected:s.a.func.isRequired,onRemove:s.a.func,value:s.a.string.isRequired,inputClassName:s.a.oneOfType([s.a.func,s.a.string,s.a.object]),containerClassName:s.a.oneOfType([s.a.func,s.a.string,s.a.object]),autoCompleteContainerClassName:s.a.oneOfType([s.a.func,s.a.string,s.a.object]),resultClassName:s.a.oneOfType([s.a.func,s.a.string,s.a.object]),numberResults:s.a.number},v.defaultProps={numberResults:5},t.default=v},function(e,t,n){"use strict";e.exports=n(3)},function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);_(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}function o(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||T}function a(){}function c(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||T}function u(e,t,n){var r=void 0,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)D.call(t,r)&&!L.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var i=Array(u),l=0;l<u;l++)i[l]=arguments[l+2];o.children=i}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:R,type:e,key:a,ref:c,props:o,_owner:$.current}}function i(e){return"object"===(void 0===e?"undefined":v(e))&&null!==e&&e.$$typeof===R}function l(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function s(e,t,n,r){if(U.length){var o=U.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function p(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>U.length&&U.push(e)}function f(e,t,n,o){var a=void 0===e?"undefined":v(e);"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case R:case x:c=!0}}if(c)return n(o,e,""===t?"."+y(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){a=e[u];var i=t+y(a,u);c+=f(a,i,n,o)}else if(null===e||void 0===e?i=null:(i=A&&e[A]||e["@@iterator"],i="function"==typeof i?i:null),"function"==typeof i)for(e=i.call(e),u=0;!(a=e.next()).done;)a=a.value,i=t+y(a,u++),c+=f(a,i,n,o);else"object"===a&&(n=""+e,r("31","[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function y(e,t){return"object"===(void 0===e?"undefined":v(e))&&null!==e&&null!=e.key?l(e.key):t.toString(36)}function d(e,t){e.func.call(e.context,t,e.count++)}function h(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?m(e,r,n,w.thatReturnsArgument):null!=e&&(i(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n,e={$$typeof:R,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function m(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(M,"$&/")+"/"),t=s(t,a,r,o),null==e||f(e,"",h,t),p(t)}/** @license React v16.4.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=n(4),_=n(5),g=n(6),w=n(7),S="function"==typeof Symbol&&Symbol.for,R=S?Symbol.for("react.element"):60103,x=S?Symbol.for("react.portal"):60106,C=S?Symbol.for("react.fragment"):60107,O=S?Symbol.for("react.strict_mode"):60108,j=S?Symbol.for("react.profiler"):60114,P=S?Symbol.for("react.provider"):60109,k=S?Symbol.for("react.context"):60110,E=S?Symbol.for("react.async_mode"):60111,I=S?Symbol.for("react.forward_ref"):60112;S&&Symbol.for("react.timeout");var A="function"==typeof Symbol&&Symbol.iterator,T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};o.prototype.isReactComponent={},o.prototype.setState=function(e,t){"object"!==(void 0===e?"undefined":v(e))&&"function"!=typeof e&&null!=e&&r("85"),this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},a.prototype=o.prototype;var N=c.prototype=new a;N.constructor=c,b(N,o.prototype),N.isPureReactComponent=!0;var $={current:null},D=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0},M=/\/+/g,U=[],q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return m(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=s(null,null,t,n),null==e||f(e,"",d,t),p(t)},count:function(e){return null==e?0:f(e,"",w.thatReturnsNull,null)},toArray:function(e){var t=[];return m(e,t,null,w.thatReturnsArgument),t},only:function(e){return i(e)||r("143"),e}},createRef:function(){return{current:null}},Component:o,PureComponent:c,createContext:function(e,t){return void 0===t&&(t=null),e={$$typeof:k,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null},e.Provider={$$typeof:P,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:I,render:e}},Fragment:C,StrictMode:O,unstable_AsyncMode:E,unstable_Profiler:j,createElement:u,cloneElement:function(e,t,n){(null===e||void 0===e)&&r("267",e);var o=void 0,a=b({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,i=$.current),void 0!==t.key&&(c=""+t.key);var l=void 0;e.type&&e.type.defaultProps&&(l=e.type.defaultProps);for(o in t)D.call(t,o)&&!L.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1==(o=arguments.length-2))a.children=n;else if(1<o){l=Array(o);for(var s=0;s<o;s++)l[s]=arguments[s+2];a.children=l}return{$$typeof:R,type:e.type,key:c,ref:u,props:a,_owner:i}},createFactory:function(e){var t=u.bind(null,e);return t.type=e,t},isValidElement:i,version:"16.4.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:$,assign:b}},V={default:q},B=V&&q||V;e.exports=B.default?B.default:B},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,i=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var s in n)a.call(n,s)&&(i[s]=n[s]);if(o){u=o(n);for(var p=0;p<u.length;p++)c.call(n,u[p])&&(i[u[p]]=n[u[p]])}}return i}},function(e,t,n){"use strict";function r(e,t,n,r,a,c,u,i){if(o(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,a,c,u,i],p=0;l=new Error(t.replace(/%s/g,function(){return s[p++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";var r={};e.exports=r},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"function"==typeof Symbol&&Symbol.iterator,e.exports=n(9)()},function(e,t,n){"use strict";function r(){}var o=n(10);e.exports=function(){function e(e,t,n,r,a,c){if(c!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r,o,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":a(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=c.apply(null,n);o&&e.push(o)}else if("object"===r)for(var i in n)u.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var u={}.hasOwnProperty;void 0!==e&&e.exports?(c.default=c,e.exports=c):"object"===a(n(0))&&n(0)?(r=[],void 0!==(o=function(){return c}.apply(t,r))&&(e.exports=o)):window.classNames=c}()},function(e,t){e.exports={searchContainer:"styles__searchContainer___3zLYs",searchInputContainer:"styles__searchInputContainer___6qinj",searchInput:"styles__searchInput___2F18g",searchIcon:"styles__searchIcon___1bPrP",autoCompleteContainer:"styles__autoCompleteContainer___1ToUG",searchResult:"styles__searchResult___1zrM5",poweredByGoogle:"styles__poweredByGoogle___1Ba0k",removeLocation:"styles__removeLocation___1XBwy",activeSearchResult:"styles__activeSearchResult___wLtrD"}}]).default});