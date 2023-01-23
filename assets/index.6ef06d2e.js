function Gp(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();var ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),Qp=Symbol.for("react.portal"),Jp=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),Yp=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),em=Symbol.for("react.context"),nm=Symbol.for("react.forward_ref"),tm=Symbol.for("react.suspense"),rm=Symbol.for("react.memo"),am=Symbol.for("react.lazy"),Ss=Symbol.iterator;function om(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var Zc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eu=Object.assign,nu={};function Vt(e,n,t){this.props=e,this.context=n,this.refs=nu,this.updater=t||Zc}Vt.prototype.isReactComponent={};Vt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Vt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tu(){}tu.prototype=Vt.prototype;function il(e,n,t){this.props=e,this.context=n,this.refs=nu,this.updater=t||Zc}var ll=il.prototype=new tu;ll.constructor=il;eu(ll,Vt.prototype);ll.isPureReactComponent=!0;var bs=Array.isArray,ru=Object.prototype.hasOwnProperty,sl={current:null},au={key:!0,ref:!0,__self:!0,__source:!0};function ou(e,n,t){var r,a={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)ru.call(n,r)&&!au.hasOwnProperty(r)&&(a[r]=n[r]);var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){for(var c=Array(s),f=0;f<s;f++)c[f]=arguments[f+2];a.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:Br,type:e,key:i,ref:l,props:a,_owner:sl.current}}function im(e,n){return{$$typeof:Br,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function lm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Cs=/\/+/g;function wo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?lm(""+e.key):n.toString(36)}function pa(e,n,t,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Br:case Qp:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+wo(l,0):r,bs(a)?(t="",e!=null&&(t=e.replace(Cs,"$&/")+"/"),pa(a,n,t,"",function(f){return f})):a!=null&&(cl(a)&&(a=im(a,t+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Cs,"$&/")+"/")+e)),n.push(a)),1;if(l=0,r=r===""?".":r+":",bs(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+wo(i,s);l+=pa(i,n,t,c,a)}else if(c=om(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+wo(i,s++),l+=pa(i,n,t,c,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Gr(e,n,t){if(e==null)return e;var r=[],a=0;return pa(e,r,"","",function(i){return n.call(t,i,a++)}),r}function sm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},ma={transition:null},cm={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ma,ReactCurrentOwner:sl};M.Children={map:Gr,forEach:function(e,n,t){Gr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Gr(e,function(){n++}),n},toArray:function(e){return Gr(e,function(n){return n})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Vt;M.Fragment=Jp;M.Profiler=Yp;M.PureComponent=il;M.StrictMode=Xp;M.Suspense=tm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=eu({},e.props),a=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=sl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in n)ru.call(n,c)&&!au.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&s!==void 0?s[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Br,type:e.type,key:a,ref:i,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:em,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zp,_context:e},e.Consumer=e};M.createElement=ou;M.createFactory=function(e){var n=ou.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:nm,render:e}};M.isValidElement=cl;M.lazy=function(e){return{$$typeof:am,_payload:{_status:-1,_result:e},_init:sm}};M.memo=function(e,n){return{$$typeof:rm,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=ma.transition;ma.transition={};try{e()}finally{ma.transition=n}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,n){return ke.current.useCallback(e,n)};M.useContext=function(e){return ke.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};M.useEffect=function(e,n){return ke.current.useEffect(e,n)};M.useId=function(){return ke.current.useId()};M.useImperativeHandle=function(e,n,t){return ke.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return ke.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return ke.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return ke.current.useMemo(e,n)};M.useReducer=function(e,n,t){return ke.current.useReducer(e,n,t)};M.useRef=function(e){return ke.current.useRef(e)};M.useState=function(e){return ke.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return ke.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return ke.current.useTransition()};M.version="18.2.0";(function(e){e.exports=M})(N);const Ke=Yc(N.exports),ti=Gp({__proto__:null,default:Ke},[N.exports]);var ri={},ul={exports:{}},qe={},iu={exports:{}},lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,j){var L=T.length;T.push(j);e:for(;0<L;){var H=L-1>>>1,I=T[H];if(0<a(I,j))T[H]=j,T[L]=I,L=H;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],L=T.pop();if(L!==j){T[0]=L;e:for(var H=0,I=T.length,on=I>>>1;H<on;){var te=2*(H+1)-1,ee=T[te],ie=te+1,ze=T[ie];if(0>a(ee,L))ie<I&&0>a(ze,ee)?(T[H]=ze,T[ie]=L,H=ie):(T[H]=ee,T[te]=L,H=te);else if(ie<I&&0>a(ze,L))T[H]=ze,T[ie]=L,H=ie;else break e}}return j}function a(T,j){var L=T.sortIndex-j.sortIndex;return L!==0?L:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],f=[],y=1,v=null,x=3,b=!1,C=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var j=t(f);j!==null;){if(j.callback===null)r(f);else if(j.startTime<=T)r(f),j.sortIndex=j.expirationTime,n(c,j);else break;j=t(f)}}function E(T){if(k=!1,m(T),!C)if(t(c)!==null)C=!0,mn(w);else{var j=t(f);j!==null&&Je(E,j.startTime-T)}}function w(T,j){C=!1,k&&(k=!1,g(R),R=-1),b=!0;var L=x;try{for(m(j),v=t(c);v!==null&&(!(v.expirationTime>j)||T&&!q());){var H=v.callback;if(typeof H=="function"){v.callback=null,x=v.priorityLevel;var I=H(v.expirationTime<=j);j=e.unstable_now(),typeof I=="function"?v.callback=I:v===t(c)&&r(c),m(j)}else r(c);v=t(c)}if(v!==null)var on=!0;else{var te=t(f);te!==null&&Je(E,te.startTime-j),on=!1}return on}finally{v=null,x=L,b=!1}}var S=!1,F=null,R=-1,O=5,z=-1;function q(){return!(e.unstable_now()-z<O)}function oe(){if(F!==null){var T=e.unstable_now();z=T;var j=!0;try{j=F(!0,T)}finally{j?ye():(S=!1,F=null)}}else S=!1}var ye;if(typeof p=="function")ye=function(){p(oe)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,J=Se.port2;Se.port1.onmessage=oe,ye=function(){J.postMessage(null)}}else ye=function(){_(oe,0)};function mn(T){F=T,S||(S=!0,ye())}function Je(T,j){R=_(function(){T(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){C||b||(C=!0,mn(w))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(T){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var L=x;x=j;try{return T()}finally{x=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=x;x=T;try{return j()}finally{x=L}},e.unstable_scheduleCallback=function(T,j,L){var H=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?H+L:H):L=H,T){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=L+I,T={id:y++,callback:j,priorityLevel:T,startTime:L,expirationTime:I,sortIndex:-1},L>H?(T.sortIndex=L,n(f,T),t(c)===null&&T===t(f)&&(k?(g(R),R=-1):k=!0,Je(E,L-H))):(T.sortIndex=I,n(c,T),C||b||(C=!0,mn(w))),T},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(T){var j=x;return function(){var L=x;x=j;try{return T.apply(this,arguments)}finally{x=L}}}})(lu);(function(e){e.exports=lu})(iu);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su=N.exports,Me=iu.exports;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cu=new Set,Nr={};function dt(e,n){Mt(e,n),Mt(e+"Capture",n)}function Mt(e,n){for(Nr[e]=n,e=0;e<n.length;e++)cu.add(n[e])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=Object.prototype.hasOwnProperty,um=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ks={},Fs={};function dm(e){return ai.call(Fs,e)?!0:ai.call(ks,e)?!1:um.test(e)?Fs[e]=!0:(ks[e]=!0,!1)}function pm(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mm(e,n,t,r){if(n===null||typeof n>"u"||pm(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Fe(e,n,t,r,a,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ge[n]=new Fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var dl=/[\-:]([a-z])/g;function pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(dl,pl);ge[n]=new Fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(dl,pl);ge[n]=new Fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(dl,pl);ge[n]=new Fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,n,t,r){var a=ge.hasOwnProperty(n)?ge[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(mm(n,t,a,r)&&(t=null),r||a===null?dm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Cn=su.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),Et=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),fl=Symbol.for("react.strict_mode"),oi=Symbol.for("react.profiler"),uu=Symbol.for("react.provider"),du=Symbol.for("react.context"),hl=Symbol.for("react.forward_ref"),ii=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),gl=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),pu=Symbol.for("react.offscreen"),As=Symbol.iterator;function Yt(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,So;function lr(e){if(So===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);So=n&&n[1]||""}return`
`+So+e}var bo=!1;function Co(e,n){if(!e||bo)return"";bo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var r=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){r=f}e.call(n.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var a=f.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,s=i.length-1;1<=l&&0<=s&&a[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(a[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||a[l]!==i[s]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{bo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?lr(e):""}function fm(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=Co(e.type,!1),e;case 11:return e=Co(e.type.render,!1),e;case 1:return e=Co(e.type,!0),e;default:return""}}function si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nt:return"Fragment";case Et:return"Portal";case oi:return"Profiler";case fl:return"StrictMode";case ii:return"Suspense";case li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case du:return(e.displayName||"Context")+".Consumer";case uu:return(e._context.displayName||"Context")+".Provider";case hl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gl:return n=e.displayName||null,n!==null?n:si(e.type)||"Memo";case Rn:n=e._payload,e=e._init;try{return si(e(n))}catch{}}return null}function hm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return si(n);case 8:return n===fl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gm(e){var n=mu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Jr(e){e._valueTracker||(e._valueTracker=gm(e))}function fu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=mu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ci(e,n){var t=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function Rs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Wn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function hu(e,n){n=n.checked,n!=null&&ml(e,"checked",n,!1)}function ui(e,n){hu(e,n);var t=Wn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?di(e,n.type,t):n.hasOwnProperty("defaultValue")&&di(e,n.type,Wn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ps(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function di(e,n,t){(n!=="number"||Ca(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var sr=Array.isArray;function Ot(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Wn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function pi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ts(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(sr(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Wn(t)}}function gu(e,n){var t=Wn(n.value),r=Wn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function _s(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function vu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?vu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,yu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function wr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vm=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){vm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),pr[n]=pr[e]})});function xu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||pr.hasOwnProperty(e)&&pr[e]?(""+n).trim():n+"px"}function Eu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=xu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var ym=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fi(e,n){if(n){if(ym[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function hi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gi=null;function vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vi=null,Dt=null,zt=null;function Os(e){if(e=Ur(e)){if(typeof vi!="function")throw Error(P(280));var n=e.stateNode;n&&(n=no(n),vi(e.stateNode,e.type,n))}}function Nu(e){Dt?zt?zt.push(e):zt=[e]:Dt=e}function wu(){if(Dt){var e=Dt,n=zt;if(zt=Dt=null,Os(e),n)for(e=0;e<n.length;e++)Os(n[e])}}function Su(e,n){return e(n)}function bu(){}var ko=!1;function Cu(e,n,t){if(ko)return e(n,t);ko=!0;try{return Su(e,n,t)}finally{ko=!1,(Dt!==null||zt!==null)&&(bu(),wu())}}function Sr(e,n){var t=e.stateNode;if(t===null)return null;var r=no(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var yi=!1;if(Nn)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){yi=!0}}),window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{yi=!1}function xm(e,n,t,r,a,i,l,s,c){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(y){this.onError(y)}}var mr=!1,ka=null,Fa=!1,xi=null,Em={onError:function(e){mr=!0,ka=e}};function Nm(e,n,t,r,a,i,l,s,c){mr=!1,ka=null,xm.apply(Em,arguments)}function wm(e,n,t,r,a,i,l,s,c){if(Nm.apply(this,arguments),mr){if(mr){var f=ka;mr=!1,ka=null}else throw Error(P(198));Fa||(Fa=!0,xi=f)}}function pt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ku(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ds(e){if(pt(e)!==e)throw Error(P(188))}function Sm(e){var n=e.alternate;if(!n){if(n=pt(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return Ds(a),e;if(i===r)return Ds(a),n;i=i.sibling}throw Error(P(188))}if(t.return!==r.return)t=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===t){l=!0,t=a,r=i;break}if(s===r){l=!0,r=a,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,r=a;break}if(s===r){l=!0,r=i,t=a;break}s=s.sibling}if(!l)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function Fu(e){return e=Sm(e),e!==null?Au(e):null}function Au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Au(e);if(n!==null)return n;e=e.sibling}return null}var Ru=Me.unstable_scheduleCallback,zs=Me.unstable_cancelCallback,bm=Me.unstable_shouldYield,Cm=Me.unstable_requestPaint,re=Me.unstable_now,km=Me.unstable_getCurrentPriorityLevel,yl=Me.unstable_ImmediatePriority,Pu=Me.unstable_UserBlockingPriority,Aa=Me.unstable_NormalPriority,Fm=Me.unstable_LowPriority,Tu=Me.unstable_IdlePriority,Xa=null,dn=null;function Am(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Xa,e,void 0,(e.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Tm,Rm=Math.log,Pm=Math.LN2;function Tm(e){return e>>>=0,e===0?32:31-(Rm(e)/Pm|0)|0}var Yr=64,Zr=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ra(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~a;s!==0?r=cr(s):(i&=l,i!==0&&(r=cr(i)))}else l=t&~a,l!==0?r=cr(l):i!==0&&(r=cr(i));if(r===0)return 0;if(n!==0&&n!==r&&(n&a)===0&&(a=r&-r,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-tn(n),a=1<<t,r|=e[t],n&=~a;return r}function _m(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Om(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-tn(i),s=1<<l,c=a[l];c===-1?((s&t)===0||(s&r)!==0)&&(a[l]=_m(s,n)):c<=n&&(e.expiredLanes|=s),i&=~s}}function Ei(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _u(){var e=Yr;return Yr<<=1,(Yr&4194240)===0&&(Yr=64),e}function Fo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Hr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-tn(n),e[n]=t}function Dm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-tn(t),i=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~i}}function xl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-tn(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var U=0;function Ou(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Du,El,zu,ju,Lu,Ni=!1,ea=[],Ln=null,In=null,Mn=null,br=new Map,Cr=new Map,_n=[],zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function js(e,n){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":br.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(n.pointerId)}}function er(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Ur(n),n!==null&&El(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function jm(e,n,t,r,a){switch(n){case"focusin":return Ln=er(Ln,e,n,t,r,a),!0;case"dragenter":return In=er(In,e,n,t,r,a),!0;case"mouseover":return Mn=er(Mn,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return br.set(i,er(br.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Cr.set(i,er(Cr.get(i)||null,e,n,t,r,a)),!0}return!1}function Iu(e){var n=nt(e.target);if(n!==null){var t=pt(n);if(t!==null){if(n=t.tag,n===13){if(n=ku(t),n!==null){e.blockedOn=n,Lu(e.priority,function(){zu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=wi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);gi=r,t.target.dispatchEvent(r),gi=null}else return n=Ur(t),n!==null&&El(n),e.blockedOn=t,!1;n.shift()}return!0}function Ls(e,n,t){fa(e)&&t.delete(n)}function Lm(){Ni=!1,Ln!==null&&fa(Ln)&&(Ln=null),In!==null&&fa(In)&&(In=null),Mn!==null&&fa(Mn)&&(Mn=null),br.forEach(Ls),Cr.forEach(Ls)}function nr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ni||(Ni=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Lm)))}function kr(e){function n(a){return nr(a,e)}if(0<ea.length){nr(ea[0],e);for(var t=1;t<ea.length;t++){var r=ea[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Ln!==null&&nr(Ln,e),In!==null&&nr(In,e),Mn!==null&&nr(Mn,e),br.forEach(n),Cr.forEach(n),t=0;t<_n.length;t++)r=_n[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<_n.length&&(t=_n[0],t.blockedOn===null);)Iu(t),t.blockedOn===null&&_n.shift()}var jt=Cn.ReactCurrentBatchConfig,Pa=!0;function Im(e,n,t,r){var a=U,i=jt.transition;jt.transition=null;try{U=1,Nl(e,n,t,r)}finally{U=a,jt.transition=i}}function Mm(e,n,t,r){var a=U,i=jt.transition;jt.transition=null;try{U=4,Nl(e,n,t,r)}finally{U=a,jt.transition=i}}function Nl(e,n,t,r){if(Pa){var a=wi(e,n,t,r);if(a===null)Lo(e,n,r,Ta,t),js(e,r);else if(jm(a,e,n,t,r))r.stopPropagation();else if(js(e,r),n&4&&-1<zm.indexOf(e)){for(;a!==null;){var i=Ur(a);if(i!==null&&Du(i),i=wi(e,n,t,r),i===null&&Lo(e,n,r,Ta,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else Lo(e,n,r,null,t)}}var Ta=null;function wi(e,n,t,r){if(Ta=null,e=vl(r),e=nt(e),e!==null)if(n=pt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ku(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ta=e,null}function Mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(km()){case yl:return 1;case Pu:return 4;case Aa:case Fm:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var Dn=null,wl=null,ha=null;function qu(){if(ha)return ha;var e,n=wl,t=n.length,r,a="value"in Dn?Dn.value:Dn.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===a[i-r];r++);return ha=a.slice(e,1<r?1-r:void 0)}function ga(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function na(){return!0}function Is(){return!1}function Be(e){function n(t,r,a,i,l){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?na:Is,this.isPropagationStopped=Is,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),n}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Be(Wt),$r=Z({},Wt,{view:0,detail:0}),qm=Be($r),Ao,Ro,tr,Ya=Z({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(Ao=e.screenX-tr.screenX,Ro=e.screenY-tr.screenY):Ro=Ao=0,tr=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),Ms=Be(Ya),Bm=Z({},Ya,{dataTransfer:0}),Hm=Be(Bm),$m=Z({},$r,{relatedTarget:0}),Po=Be($m),Um=Z({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Km=Be(Um),Vm=Z({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wm=Be(Vm),Gm=Z({},Wt,{data:0}),qs=Be(Gm),Qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ym(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xm[e])?!!n[e]:!1}function bl(){return Ym}var Zm=Z({},$r,{key:function(e){if(e.key){var n=Qm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ef=Be(Zm),nf=Z({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bs=Be(nf),tf=Z({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),rf=Be(tf),af=Z({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),of=Be(af),lf=Z({},Ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sf=Be(lf),cf=[9,13,27,32],Cl=Nn&&"CompositionEvent"in window,fr=null;Nn&&"documentMode"in document&&(fr=document.documentMode);var uf=Nn&&"TextEvent"in window&&!fr,Bu=Nn&&(!Cl||fr&&8<fr&&11>=fr),Hs=String.fromCharCode(32),$s=!1;function Hu(e,n){switch(e){case"keyup":return cf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $u(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wt=!1;function df(e,n){switch(e){case"compositionend":return $u(n);case"keypress":return n.which!==32?null:($s=!0,Hs);case"textInput":return e=n.data,e===Hs&&$s?null:e;default:return null}}function pf(e,n){if(wt)return e==="compositionend"||!Cl&&Hu(e,n)?(e=qu(),ha=wl=Dn=null,wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bu&&n.locale!=="ko"?null:n.data;default:return null}}var mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Us(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!mf[e.type]:n==="textarea"}function Uu(e,n,t,r){Nu(r),n=_a(n,"onChange"),0<n.length&&(t=new Sl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var hr=null,Fr=null;function ff(e){nd(e,0)}function Za(e){var n=Ct(e);if(fu(n))return e}function hf(e,n){if(e==="change")return n}var Ku=!1;if(Nn){var To;if(Nn){var _o="oninput"in document;if(!_o){var Ks=document.createElement("div");Ks.setAttribute("oninput","return;"),_o=typeof Ks.oninput=="function"}To=_o}else To=!1;Ku=To&&(!document.documentMode||9<document.documentMode)}function Vs(){hr&&(hr.detachEvent("onpropertychange",Vu),Fr=hr=null)}function Vu(e){if(e.propertyName==="value"&&Za(Fr)){var n=[];Uu(n,Fr,e,vl(e)),Cu(ff,n)}}function gf(e,n,t){e==="focusin"?(Vs(),hr=n,Fr=t,hr.attachEvent("onpropertychange",Vu)):e==="focusout"&&Vs()}function vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Za(Fr)}function yf(e,n){if(e==="click")return Za(n)}function xf(e,n){if(e==="input"||e==="change")return Za(n)}function Ef(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var an=typeof Object.is=="function"?Object.is:Ef;function Ar(e,n){if(an(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!ai.call(n,a)||!an(e[a],n[a]))return!1}return!0}function Ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gs(e,n){var t=Ws(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ws(t)}}function Wu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gu(){for(var e=window,n=Ca();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ca(e.document)}return n}function kl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Nf(e){var n=Gu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wu(t.ownerDocument.documentElement,t)){if(r!==null&&kl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Gs(t,i);var l=Gs(t,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wf=Nn&&"documentMode"in document&&11>=document.documentMode,St=null,Si=null,gr=null,bi=!1;function Qs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bi||St==null||St!==Ca(r)||(r=St,"selectionStart"in r&&kl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&Ar(gr,r)||(gr=r,r=_a(Si,"onSelect"),0<r.length&&(n=new Sl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=St)))}function ta(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var bt={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},Oo={},Qu={};Nn&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function eo(e){if(Oo[e])return Oo[e];if(!bt[e])return e;var n=bt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Qu)return Oo[e]=n[t];return e}var Ju=eo("animationend"),Xu=eo("animationiteration"),Yu=eo("animationstart"),Zu=eo("transitionend"),ed=new Map,Js="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,n){ed.set(e,n),dt(n,[e])}for(var Do=0;Do<Js.length;Do++){var zo=Js[Do],Sf=zo.toLowerCase(),bf=zo[0].toUpperCase()+zo.slice(1);Qn(Sf,"on"+bf)}Qn(Ju,"onAnimationEnd");Qn(Xu,"onAnimationIteration");Qn(Yu,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn(Zu,"onTransitionEnd");Mt("onMouseEnter",["mouseout","mouseover"]);Mt("onMouseLeave",["mouseout","mouseover"]);Mt("onPointerEnter",["pointerout","pointerover"]);Mt("onPointerLeave",["pointerout","pointerover"]);dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Xs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,wm(r,n,void 0,e),e.currentTarget=null}function nd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var s=r[l],c=s.instance,f=s.currentTarget;if(s=s.listener,c!==i&&a.isPropagationStopped())break e;Xs(a,s,f),i=c}else for(l=0;l<r.length;l++){if(s=r[l],c=s.instance,f=s.currentTarget,s=s.listener,c!==i&&a.isPropagationStopped())break e;Xs(a,s,f),i=c}}}if(Fa)throw e=xi,Fa=!1,xi=null,e}function W(e,n){var t=n[Ri];t===void 0&&(t=n[Ri]=new Set);var r=e+"__bubble";t.has(r)||(td(n,e,2,!1),t.add(r))}function jo(e,n,t){var r=0;n&&(r|=4),td(t,e,r,n)}var ra="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[ra]){e[ra]=!0,cu.forEach(function(t){t!=="selectionchange"&&(Cf.has(t)||jo(t,!1,e),jo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ra]||(n[ra]=!0,jo("selectionchange",!1,n))}}function td(e,n,t,r){switch(Mu(n)){case 1:var a=Im;break;case 4:a=Mm;break;default:a=Nl}t=a.bind(null,n,t,e),a=void 0,!yi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Lo(e,n,t,r,a){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;s!==null;){if(l=nt(s),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Cu(function(){var f=i,y=vl(t),v=[];e:{var x=ed.get(e);if(x!==void 0){var b=Sl,C=e;switch(e){case"keypress":if(ga(t)===0)break e;case"keydown":case"keyup":b=ef;break;case"focusin":C="focus",b=Po;break;case"focusout":C="blur",b=Po;break;case"beforeblur":case"afterblur":b=Po;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=rf;break;case Ju:case Xu:case Yu:b=Km;break;case Zu:b=of;break;case"scroll":b=qm;break;case"wheel":b=sf;break;case"copy":case"cut":case"paste":b=Wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Bs}var k=(n&4)!==0,_=!k&&e==="scroll",g=k?x!==null?x+"Capture":null:x;k=[];for(var p=f,m;p!==null;){m=p;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,g!==null&&(E=Sr(p,g),E!=null&&k.push(Pr(p,E,m)))),_)break;p=p.return}0<k.length&&(x=new b(x,C,null,t,y),v.push({event:x,listeners:k}))}}if((n&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",x&&t!==gi&&(C=t.relatedTarget||t.fromElement)&&(nt(C)||C[wn]))break e;if((b||x)&&(x=y.window===y?y:(x=y.ownerDocument)?x.defaultView||x.parentWindow:window,b?(C=t.relatedTarget||t.toElement,b=f,C=C?nt(C):null,C!==null&&(_=pt(C),C!==_||C.tag!==5&&C.tag!==6)&&(C=null)):(b=null,C=f),b!==C)){if(k=Ms,E="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(k=Bs,E="onPointerLeave",g="onPointerEnter",p="pointer"),_=b==null?x:Ct(b),m=C==null?x:Ct(C),x=new k(E,p+"leave",b,t,y),x.target=_,x.relatedTarget=m,E=null,nt(y)===f&&(k=new k(g,p+"enter",C,t,y),k.target=m,k.relatedTarget=_,E=k),_=E,b&&C)n:{for(k=b,g=C,p=0,m=k;m;m=vt(m))p++;for(m=0,E=g;E;E=vt(E))m++;for(;0<p-m;)k=vt(k),p--;for(;0<m-p;)g=vt(g),m--;for(;p--;){if(k===g||g!==null&&k===g.alternate)break n;k=vt(k),g=vt(g)}k=null}else k=null;b!==null&&Ys(v,x,b,k,!1),C!==null&&_!==null&&Ys(v,_,C,k,!0)}}e:{if(x=f?Ct(f):window,b=x.nodeName&&x.nodeName.toLowerCase(),b==="select"||b==="input"&&x.type==="file")var w=hf;else if(Us(x))if(Ku)w=xf;else{w=vf;var S=gf}else(b=x.nodeName)&&b.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(w=yf);if(w&&(w=w(e,f))){Uu(v,w,t,y);break e}S&&S(e,x,f),e==="focusout"&&(S=x._wrapperState)&&S.controlled&&x.type==="number"&&di(x,"number",x.value)}switch(S=f?Ct(f):window,e){case"focusin":(Us(S)||S.contentEditable==="true")&&(St=S,Si=f,gr=null);break;case"focusout":gr=Si=St=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,Qs(v,t,y);break;case"selectionchange":if(wf)break;case"keydown":case"keyup":Qs(v,t,y)}var F;if(Cl)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else wt?Hu(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Bu&&t.locale!=="ko"&&(wt||R!=="onCompositionStart"?R==="onCompositionEnd"&&wt&&(F=qu()):(Dn=y,wl="value"in Dn?Dn.value:Dn.textContent,wt=!0)),S=_a(f,R),0<S.length&&(R=new qs(R,e,null,t,y),v.push({event:R,listeners:S}),F?R.data=F:(F=$u(t),F!==null&&(R.data=F)))),(F=uf?df(e,t):pf(e,t))&&(f=_a(f,"onBeforeInput"),0<f.length&&(y=new qs("onBeforeInput","beforeinput",null,t,y),v.push({event:y,listeners:f}),y.data=F))}nd(v,n)})}function Pr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function _a(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Sr(e,t),i!=null&&r.unshift(Pr(e,i,a)),i=Sr(e,n),i!=null&&r.push(Pr(e,i,a))),e=e.return}return r}function vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ys(e,n,t,r,a){for(var i=n._reactName,l=[];t!==null&&t!==r;){var s=t,c=s.alternate,f=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&f!==null&&(s=f,a?(c=Sr(t,i),c!=null&&l.unshift(Pr(t,c,s))):a||(c=Sr(t,i),c!=null&&l.push(Pr(t,c,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var kf=/\r\n?/g,Ff=/\u0000|\uFFFD/g;function Zs(e){return(typeof e=="string"?e:""+e).replace(kf,`
`).replace(Ff,"")}function aa(e,n,t){if(n=Zs(n),Zs(e)!==n&&t)throw Error(P(425))}function Oa(){}var Ci=null,ki=null;function Fi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ai=typeof setTimeout=="function"?setTimeout:void 0,Af=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,Rf=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(Pf)}:Ai;function Pf(e){setTimeout(function(){throw e})}function Io(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),kr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);kr(n)}function qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function nc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Gt=Math.random().toString(36).slice(2),cn="__reactFiber$"+Gt,Tr="__reactProps$"+Gt,wn="__reactContainer$"+Gt,Ri="__reactEvents$"+Gt,Tf="__reactListeners$"+Gt,_f="__reactHandles$"+Gt;function nt(e){var n=e[cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[wn]||t[cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=nc(e);e!==null;){if(t=e[cn])return t;e=nc(e)}return n}e=t,t=e.parentNode}return null}function Ur(e){return e=e[cn]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ct(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function no(e){return e[Tr]||null}var Pi=[],kt=-1;function Jn(e){return{current:e}}function G(e){0>kt||(e.current=Pi[kt],Pi[kt]=null,kt--)}function V(e,n){kt++,Pi[kt]=e.current,e.current=n}var Gn={},we=Jn(Gn),_e=Jn(!1),it=Gn;function qt(e,n){var t=e.type.contextTypes;if(!t)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Oe(e){return e=e.childContextTypes,e!=null}function Da(){G(_e),G(we)}function tc(e,n,t){if(we.current!==Gn)throw Error(P(168));V(we,n),V(_e,t)}function rd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(P(108,hm(e)||"Unknown",a));return Z({},t,r)}function za(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,it=we.current,V(we,e),V(_e,_e.current),!0}function rc(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=rd(e,n,it),r.__reactInternalMemoizedMergedChildContext=e,G(_e),G(we),V(we,e)):G(_e),V(_e,t)}var hn=null,to=!1,Mo=!1;function ad(e){hn===null?hn=[e]:hn.push(e)}function Of(e){to=!0,ad(e)}function Xn(){if(!Mo&&hn!==null){Mo=!0;var e=0,n=U;try{var t=hn;for(U=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}hn=null,to=!1}catch(a){throw hn!==null&&(hn=hn.slice(e+1)),Ru(yl,Xn),a}finally{U=n,Mo=!1}}return null}var Ft=[],At=0,ja=null,La=0,He=[],$e=0,lt=null,vn=1,yn="";function Yn(e,n){Ft[At++]=La,Ft[At++]=ja,ja=e,La=n}function od(e,n,t){He[$e++]=vn,He[$e++]=yn,He[$e++]=lt,lt=e;var r=vn;e=yn;var a=32-tn(r)-1;r&=~(1<<a),t+=1;var i=32-tn(n)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,vn=1<<32-tn(n)+a|t<<a|r,yn=i+e}else vn=1<<i|t<<a|r,yn=e}function Fl(e){e.return!==null&&(Yn(e,1),od(e,1,0))}function Al(e){for(;e===ja;)ja=Ft[--At],Ft[At]=null,La=Ft[--At],Ft[At]=null;for(;e===lt;)lt=He[--$e],He[$e]=null,yn=He[--$e],He[$e]=null,vn=He[--$e],He[$e]=null}var Ie=null,Le=null,Q=!1,en=null;function id(e,n){var t=Ue(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ac(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ie=e,Le=qn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ie=e,Le=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=lt!==null?{id:vn,overflow:yn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ue(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ie=e,Le=null,!0):!1;default:return!1}}function Ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(Q){var n=Le;if(n){var t=n;if(!ac(e,n)){if(Ti(e))throw Error(P(418));n=qn(t.nextSibling);var r=Ie;n&&ac(e,n)?id(r,t):(e.flags=e.flags&-4097|2,Q=!1,Ie=e)}}else{if(Ti(e))throw Error(P(418));e.flags=e.flags&-4097|2,Q=!1,Ie=e}}}function oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function oa(e){if(e!==Ie)return!1;if(!Q)return oc(e),Q=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Fi(e.type,e.memoizedProps)),n&&(n=Le)){if(Ti(e))throw ld(),Error(P(418));for(;n;)id(e,n),n=qn(n.nextSibling)}if(oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Le=qn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Le=null}}else Le=Ie?qn(e.stateNode.nextSibling):null;return!0}function ld(){for(var e=Le;e;)e=qn(e.nextSibling)}function Bt(){Le=Ie=null,Q=!1}function Rl(e){en===null?en=[e]:en.push(e)}var Df=Cn.ReactCurrentBatchConfig;function Ye(e,n){if(e&&e.defaultProps){n=Z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Ia=Jn(null),Ma=null,Rt=null,Pl=null;function Tl(){Pl=Rt=Ma=null}function _l(e){var n=Ia.current;G(Ia),e._currentValue=n}function Oi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Lt(e,n){Ma=e,Pl=Rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Te=!0),e.firstContext=null)}function We(e){var n=e._currentValue;if(Pl!==e)if(e={context:e,memoizedValue:n,next:null},Rt===null){if(Ma===null)throw Error(P(308));Rt=e,Ma.dependencies={lanes:0,firstContext:e}}else Rt=Rt.next=e;return n}var tt=null;function Ol(e){tt===null?tt=[e]:tt.push(e)}function sd(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,Ol(n)):(t.next=a.next,a.next=t),n.interleaved=t,Sn(e,r)}function Sn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Pn=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Bn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Sn(e,t)}return a=r.interleaved,a===null?(n.next=n,Ol(r)):(n.next=a.next,a.next=n),r.interleaved=n,Sn(e,t)}function va(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,xl(e,t)}}function ic(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function qa(e,n,t,r){var a=e.updateQueue;Pn=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,f=c.next;c.next=null,l===null?i=f:l.next=f,l=c;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=f:s.next=f,y.lastBaseUpdate=c))}if(i!==null){var v=a.baseState;l=0,y=f=c=null,s=i;do{var x=s.lane,b=s.eventTime;if((r&x)===x){y!==null&&(y=y.next={eventTime:b,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,k=s;switch(x=n,b=t,k.tag){case 1:if(C=k.payload,typeof C=="function"){v=C.call(b,v,x);break e}v=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,x=typeof C=="function"?C.call(b,v,x):C,x==null)break e;v=Z({},v,x);break e;case 2:Pn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=a.effects,x===null?a.effects=[s]:x.push(s))}else b={eventTime:b,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(f=y=b,c=v):y=y.next=b,l|=x;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;x=s,s=x.next,x.next=null,a.lastBaseUpdate=x,a.shared.pending=null}}while(1);if(y===null&&(c=v),a.baseState=c,a.firstBaseUpdate=f,a.lastBaseUpdate=y,n=a.shared.interleaved,n!==null){a=n;do l|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);ct|=l,e.lanes=l,e.memoizedState=v}}function lc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(P(191,a));a.call(r)}}}var ud=new su.Component().refs;function Di(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ro={isMounted:function(e){return(e=e._reactInternals)?pt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ce(),a=$n(e),i=xn(r,a);i.payload=n,t!=null&&(i.callback=t),n=Bn(e,i,a),n!==null&&(rn(n,e,a,r),va(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ce(),a=$n(e),i=xn(r,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Bn(e,i,a),n!==null&&(rn(n,e,a,r),va(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ce(),r=$n(e),a=xn(t,r);a.tag=2,n!=null&&(a.callback=n),n=Bn(e,a,r),n!==null&&(rn(n,e,r,t),va(n,e,r))}};function sc(e,n,t,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!Ar(t,r)||!Ar(a,i):!0}function dd(e,n,t){var r=!1,a=Gn,i=n.contextType;return typeof i=="object"&&i!==null?i=We(i):(a=Oe(n)?it:we.current,r=n.contextTypes,i=(r=r!=null)?qt(e,a):Gn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ro,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function cc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ro.enqueueReplaceState(n,n.state,null)}function zi(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs=ud,Dl(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=We(i):(i=Oe(n)?it:we.current,a.context=qt(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Di(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ro.enqueueReplaceState(a,a.state,null),qa(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var a=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var s=a.refs;s===ud&&(s=a.refs={}),l===null?delete s[i]:s[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function ia(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function uc(e){var n=e._init;return n(e._payload)}function pd(e){function n(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function t(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function a(g,p){return g=Un(g,p),g.index=0,g.sibling=null,g}function i(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,m,E){return p===null||p.tag!==6?(p=Vo(m,g.mode,E),p.return=g,p):(p=a(p,m),p.return=g,p)}function c(g,p,m,E){var w=m.type;return w===Nt?y(g,p,m.props.children,E,m.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Rn&&uc(w)===p.type)?(E=a(p,m.props),E.ref=rr(g,p,m),E.return=g,E):(E=Sa(m.type,m.key,m.props,null,g.mode,E),E.ref=rr(g,p,m),E.return=g,E)}function f(g,p,m,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Wo(m,g.mode,E),p.return=g,p):(p=a(p,m.children||[]),p.return=g,p)}function y(g,p,m,E,w){return p===null||p.tag!==7?(p=ot(m,g.mode,E,w),p.return=g,p):(p=a(p,m),p.return=g,p)}function v(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Vo(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return m=Sa(p.type,p.key,p.props,null,g.mode,m),m.ref=rr(g,null,p),m.return=g,m;case Et:return p=Wo(p,g.mode,m),p.return=g,p;case Rn:var E=p._init;return v(g,E(p._payload),m)}if(sr(p)||Yt(p))return p=ot(p,g.mode,m,null),p.return=g,p;ia(g,p)}return null}function x(g,p,m,E){var w=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:s(g,p,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qr:return m.key===w?c(g,p,m,E):null;case Et:return m.key===w?f(g,p,m,E):null;case Rn:return w=m._init,x(g,p,w(m._payload),E)}if(sr(m)||Yt(m))return w!==null?null:y(g,p,m,E,null);ia(g,m)}return null}function b(g,p,m,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(m)||null,s(p,g,""+E,w);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Qr:return g=g.get(E.key===null?m:E.key)||null,c(p,g,E,w);case Et:return g=g.get(E.key===null?m:E.key)||null,f(p,g,E,w);case Rn:var S=E._init;return b(g,p,m,S(E._payload),w)}if(sr(E)||Yt(E))return g=g.get(m)||null,y(p,g,E,w,null);ia(p,E)}return null}function C(g,p,m,E){for(var w=null,S=null,F=p,R=p=0,O=null;F!==null&&R<m.length;R++){F.index>R?(O=F,F=null):O=F.sibling;var z=x(g,F,m[R],E);if(z===null){F===null&&(F=O);break}e&&F&&z.alternate===null&&n(g,F),p=i(z,p,R),S===null?w=z:S.sibling=z,S=z,F=O}if(R===m.length)return t(g,F),Q&&Yn(g,R),w;if(F===null){for(;R<m.length;R++)F=v(g,m[R],E),F!==null&&(p=i(F,p,R),S===null?w=F:S.sibling=F,S=F);return Q&&Yn(g,R),w}for(F=r(g,F);R<m.length;R++)O=b(F,g,R,m[R],E),O!==null&&(e&&O.alternate!==null&&F.delete(O.key===null?R:O.key),p=i(O,p,R),S===null?w=O:S.sibling=O,S=O);return e&&F.forEach(function(q){return n(g,q)}),Q&&Yn(g,R),w}function k(g,p,m,E){var w=Yt(m);if(typeof w!="function")throw Error(P(150));if(m=w.call(m),m==null)throw Error(P(151));for(var S=w=null,F=p,R=p=0,O=null,z=m.next();F!==null&&!z.done;R++,z=m.next()){F.index>R?(O=F,F=null):O=F.sibling;var q=x(g,F,z.value,E);if(q===null){F===null&&(F=O);break}e&&F&&q.alternate===null&&n(g,F),p=i(q,p,R),S===null?w=q:S.sibling=q,S=q,F=O}if(z.done)return t(g,F),Q&&Yn(g,R),w;if(F===null){for(;!z.done;R++,z=m.next())z=v(g,z.value,E),z!==null&&(p=i(z,p,R),S===null?w=z:S.sibling=z,S=z);return Q&&Yn(g,R),w}for(F=r(g,F);!z.done;R++,z=m.next())z=b(F,g,R,z.value,E),z!==null&&(e&&z.alternate!==null&&F.delete(z.key===null?R:z.key),p=i(z,p,R),S===null?w=z:S.sibling=z,S=z);return e&&F.forEach(function(oe){return n(g,oe)}),Q&&Yn(g,R),w}function _(g,p,m,E){if(typeof m=="object"&&m!==null&&m.type===Nt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Qr:e:{for(var w=m.key,S=p;S!==null;){if(S.key===w){if(w=m.type,w===Nt){if(S.tag===7){t(g,S.sibling),p=a(S,m.props.children),p.return=g,g=p;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Rn&&uc(w)===S.type){t(g,S.sibling),p=a(S,m.props),p.ref=rr(g,S,m),p.return=g,g=p;break e}t(g,S);break}else n(g,S);S=S.sibling}m.type===Nt?(p=ot(m.props.children,g.mode,E,m.key),p.return=g,g=p):(E=Sa(m.type,m.key,m.props,null,g.mode,E),E.ref=rr(g,p,m),E.return=g,g=E)}return l(g);case Et:e:{for(S=m.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){t(g,p.sibling),p=a(p,m.children||[]),p.return=g,g=p;break e}else{t(g,p);break}else n(g,p);p=p.sibling}p=Wo(m,g.mode,E),p.return=g,g=p}return l(g);case Rn:return S=m._init,_(g,p,S(m._payload),E)}if(sr(m))return C(g,p,m,E);if(Yt(m))return k(g,p,m,E);ia(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(t(g,p.sibling),p=a(p,m),p.return=g,g=p):(t(g,p),p=Vo(m,g.mode,E),p.return=g,g=p),l(g)):t(g,p)}return _}var Ht=pd(!0),md=pd(!1),Kr={},pn=Jn(Kr),_r=Jn(Kr),Or=Jn(Kr);function rt(e){if(e===Kr)throw Error(P(174));return e}function zl(e,n){switch(V(Or,n),V(_r,e),V(pn,Kr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:mi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=mi(n,e)}G(pn),V(pn,n)}function $t(){G(pn),G(_r),G(Or)}function fd(e){rt(Or.current);var n=rt(pn.current),t=mi(n,e.type);n!==t&&(V(_r,e),V(pn,t))}function jl(e){_r.current===e&&(G(pn),G(_r))}var X=Jn(0);function Ba(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qo=[];function Ll(){for(var e=0;e<qo.length;e++)qo[e]._workInProgressVersionPrimary=null;qo.length=0}var ya=Cn.ReactCurrentDispatcher,Bo=Cn.ReactCurrentBatchConfig,st=0,Y=null,se=null,de=null,Ha=!1,vr=!1,Dr=0,zf=0;function xe(){throw Error(P(321))}function Il(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!an(e[t],n[t]))return!1;return!0}function Ml(e,n,t,r,a,i){if(st=i,Y=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ya.current=e===null||e.memoizedState===null?Mf:qf,e=t(r,a),vr){i=0;do{if(vr=!1,Dr=0,25<=i)throw Error(P(301));i+=1,de=se=null,n.updateQueue=null,ya.current=Bf,e=t(r,a)}while(vr)}if(ya.current=$a,n=se!==null&&se.next!==null,st=0,de=se=Y=null,Ha=!1,n)throw Error(P(300));return e}function ql(){var e=Dr!==0;return Dr=0,e}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Y.memoizedState=de=e:de=de.next=e,de}function Ge(){if(se===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var n=de===null?Y.memoizedState:de.next;if(n!==null)de=n,se=e;else{if(e===null)throw Error(P(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},de===null?Y.memoizedState=de=e:de=de.next=e}return de}function zr(e,n){return typeof n=="function"?n(e):n}function Ho(e){var n=Ge(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=se,a=r.baseQueue,i=t.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=l=null,c=null,f=i;do{var y=f.lane;if((st&y)===y)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var v={lane:y,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(s=c=v,l=r):c=c.next=v,Y.lanes|=y,ct|=y}f=f.next}while(f!==null&&f!==i);c===null?l=r:c.next=s,an(r,n.memoizedState)||(Te=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do i=a.lane,Y.lanes|=i,ct|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function $o(e){var n=Ge(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);an(i,n.memoizedState)||(Te=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function hd(){}function gd(e,n){var t=Y,r=Ge(),a=n(),i=!an(r.memoizedState,a);if(i&&(r.memoizedState=a,Te=!0),r=r.queue,Bl(xd.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||de!==null&&de.memoizedState.tag&1){if(t.flags|=2048,jr(9,yd.bind(null,t,r,a,n),void 0,null),pe===null)throw Error(P(349));(st&30)!==0||vd(t,n,a)}return a}function vd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function yd(e,n,t,r){n.value=t,n.getSnapshot=r,Ed(n)&&Nd(e)}function xd(e,n,t){return t(function(){Ed(n)&&Nd(e)})}function Ed(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!an(e,t)}catch{return!0}}function Nd(e){var n=Sn(e,1);n!==null&&rn(n,e,1,-1)}function dc(e){var n=sn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},n.queue=e,e=e.dispatch=If.bind(null,Y,e),[n.memoizedState,e]}function jr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function wd(){return Ge().memoizedState}function xa(e,n,t,r){var a=sn();Y.flags|=e,a.memoizedState=jr(1|n,t,void 0,r===void 0?null:r)}function ao(e,n,t,r){var a=Ge();r=r===void 0?null:r;var i=void 0;if(se!==null){var l=se.memoizedState;if(i=l.destroy,r!==null&&Il(r,l.deps)){a.memoizedState=jr(n,t,i,r);return}}Y.flags|=e,a.memoizedState=jr(1|n,t,i,r)}function pc(e,n){return xa(8390656,8,e,n)}function Bl(e,n){return ao(2048,8,e,n)}function Sd(e,n){return ao(4,2,e,n)}function bd(e,n){return ao(4,4,e,n)}function Cd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kd(e,n,t){return t=t!=null?t.concat([e]):null,ao(4,4,Cd.bind(null,n,e),t)}function Hl(){}function Fd(e,n){var t=Ge();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Il(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ad(e,n){var t=Ge();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Il(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Rd(e,n,t){return(st&21)===0?(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=t):(an(t,n)||(t=_u(),Y.lanes|=t,ct|=t,e.baseState=!0),n)}function jf(e,n){var t=U;U=t!==0&&4>t?t:4,e(!0);var r=Bo.transition;Bo.transition={};try{e(!1),n()}finally{U=t,Bo.transition=r}}function Pd(){return Ge().memoizedState}function Lf(e,n,t){var r=$n(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Td(e))_d(n,t);else if(t=sd(e,n,t,r),t!==null){var a=Ce();rn(t,e,r,a),Od(t,n,r)}}function If(e,n,t){var r=$n(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Td(e))_d(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,s=i(l,t);if(a.hasEagerState=!0,a.eagerState=s,an(s,l)){var c=n.interleaved;c===null?(a.next=a,Ol(n)):(a.next=c.next,c.next=a),n.interleaved=a;return}}catch{}finally{}t=sd(e,n,a,r),t!==null&&(a=Ce(),rn(t,e,r,a),Od(t,n,r))}}function Td(e){var n=e.alternate;return e===Y||n!==null&&n===Y}function _d(e,n){vr=Ha=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Od(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,xl(e,t)}}var $a={readContext:We,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Mf={readContext:We,useCallback:function(e,n){return sn().memoizedState=[e,n===void 0?null:n],e},useContext:We,useEffect:pc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,xa(4194308,4,Cd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return xa(4194308,4,e,n)},useInsertionEffect:function(e,n){return xa(4,2,e,n)},useMemo:function(e,n){var t=sn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=sn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Lf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var n=sn();return e={current:e},n.memoizedState=e},useState:dc,useDebugValue:Hl,useDeferredValue:function(e){return sn().memoizedState=e},useTransition:function(){var e=dc(!1),n=e[0];return e=jf.bind(null,e[1]),sn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Y,a=sn();if(Q){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),pe===null)throw Error(P(349));(st&30)!==0||vd(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,pc(xd.bind(null,r,i,e),[e]),r.flags|=2048,jr(9,yd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=sn(),n=pe.identifierPrefix;if(Q){var t=yn,r=vn;t=(r&~(1<<32-tn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Dr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=zf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},qf={readContext:We,useCallback:Fd,useContext:We,useEffect:Bl,useImperativeHandle:kd,useInsertionEffect:Sd,useLayoutEffect:bd,useMemo:Ad,useReducer:Ho,useRef:wd,useState:function(){return Ho(zr)},useDebugValue:Hl,useDeferredValue:function(e){var n=Ge();return Rd(n,se.memoizedState,e)},useTransition:function(){var e=Ho(zr)[0],n=Ge().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:gd,useId:Pd,unstable_isNewReconciler:!1},Bf={readContext:We,useCallback:Fd,useContext:We,useEffect:Bl,useImperativeHandle:kd,useInsertionEffect:Sd,useLayoutEffect:bd,useMemo:Ad,useReducer:$o,useRef:wd,useState:function(){return $o(zr)},useDebugValue:Hl,useDeferredValue:function(e){var n=Ge();return se===null?n.memoizedState=e:Rd(n,se.memoizedState,e)},useTransition:function(){var e=$o(zr)[0],n=Ge().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:gd,useId:Pd,unstable_isNewReconciler:!1};function Ut(e,n){try{var t="",r=n;do t+=fm(r),r=r.return;while(r);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function Uo(e,n,t){return{value:e,source:null,stack:t!=null?t:null,digest:n!=null?n:null}}function ji(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Hf=typeof WeakMap=="function"?WeakMap:Map;function Dd(e,n,t){t=xn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ka||(Ka=!0,Vi=r),ji(e,n)},t}function zd(e,n,t){t=xn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){ji(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ji(e,n),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function mc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Hf;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=th.bind(null,e,n,t),n.then(e,e))}function fc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function hc(e,n,t,r,a){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=xn(-1,1),n.tag=2,Bn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var $f=Cn.ReactCurrentOwner,Te=!1;function be(e,n,t,r){n.child=e===null?md(n,null,t,r):Ht(n,e.child,t,r)}function gc(e,n,t,r,a){t=t.render;var i=n.ref;return Lt(n,a),r=Ml(e,n,t,r,i,a),t=ql(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,bn(e,n,a)):(Q&&t&&Fl(n),n.flags|=1,be(e,n,r,a),n.child)}function vc(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!Jl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,jd(e,n,i,r,a)):(e=Sa(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,(e.lanes&a)===0){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ar,t(l,r)&&e.ref===n.ref)return bn(e,n,a)}return n.flags|=1,e=Un(i,r),e.ref=n.ref,e.return=n,n.child=e}function jd(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(Ar(i,r)&&e.ref===n.ref)if(Te=!1,n.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Te=!0);else return n.lanes=e.lanes,bn(e,n,a)}return Li(e,n,t,r,a)}function Ld(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Tt,je),je|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,V(Tt,je),je|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,V(Tt,je),je|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,V(Tt,je),je|=r;return be(e,n,a,t),n.child}function Id(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Li(e,n,t,r,a){var i=Oe(t)?it:we.current;return i=qt(n,i),Lt(n,a),t=Ml(e,n,t,r,i,a),r=ql(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,bn(e,n,a)):(Q&&r&&Fl(n),n.flags|=1,be(e,n,t,a),n.child)}function yc(e,n,t,r,a){if(Oe(t)){var i=!0;za(n)}else i=!1;if(Lt(n,a),n.stateNode===null)Ea(e,n),dd(n,t,r),zi(n,t,r,a),r=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var c=l.context,f=t.contextType;typeof f=="object"&&f!==null?f=We(f):(f=Oe(t)?it:we.current,f=qt(n,f));var y=t.getDerivedStateFromProps,v=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||c!==f)&&cc(n,l,r,f),Pn=!1;var x=n.memoizedState;l.state=x,qa(n,r,l,a),c=n.memoizedState,s!==r||x!==c||_e.current||Pn?(typeof y=="function"&&(Di(n,t,y,r),c=n.memoizedState),(s=Pn||sc(n,t,s,r,x,c,f))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),l.props=r,l.state=c,l.context=f,r=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,cd(e,n),s=n.memoizedProps,f=n.type===n.elementType?s:Ye(n.type,s),l.props=f,v=n.pendingProps,x=l.context,c=t.contextType,typeof c=="object"&&c!==null?c=We(c):(c=Oe(t)?it:we.current,c=qt(n,c));var b=t.getDerivedStateFromProps;(y=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==v||x!==c)&&cc(n,l,r,c),Pn=!1,x=n.memoizedState,l.state=x,qa(n,r,l,a);var C=n.memoizedState;s!==v||x!==C||_e.current||Pn?(typeof b=="function"&&(Di(n,t,b,r),C=n.memoizedState),(f=Pn||sc(n,t,f,r,x,C,c)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,C,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,C,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=C),l.props=r,l.state=C,l.context=c,r=f):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),r=!1)}return Ii(e,n,t,r,i,a)}function Ii(e,n,t,r,a,i){Id(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return a&&rc(n,t,!1),bn(e,n,i);r=n.stateNode,$f.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Ht(n,e.child,null,i),n.child=Ht(n,null,s,i)):be(e,n,s,i),n.memoizedState=r.state,a&&rc(n,t,!0),n.child}function Md(e){var n=e.stateNode;n.pendingContext?tc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&tc(e,n.context,!1),zl(e,n.containerInfo)}function xc(e,n,t,r,a){return Bt(),Rl(a),n.flags|=256,be(e,n,t,r),n.child}var Mi={dehydrated:null,treeContext:null,retryLane:0};function qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function qd(e,n,t){var r=n.pendingProps,a=X.current,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),V(X,a&1),e===null)return _i(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=lo(l,r,0,null),e=ot(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=qi(t),n.memoizedState=Mi,e):$l(n,l));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return Uf(e,n,l,r,s,a,t);if(i){i=r.fallback,l=n.mode,a=e.child,s=a.sibling;var c={mode:"hidden",children:r.children};return(l&1)===0&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=Un(a,c),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=Un(s,i):(i=ot(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?qi(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=Mi,r}return i=e.child,e=i.sibling,r=Un(i,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function $l(e,n){return n=lo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function la(e,n,t,r){return r!==null&&Rl(r),Ht(n,e.child,null,t),e=$l(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Uf(e,n,t,r,a,i,l){if(t)return n.flags&256?(n.flags&=-257,r=Uo(Error(P(422))),la(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,a=n.mode,r=lo({mode:"visible",children:r.children},a,0,null),i=ot(i,a,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,(n.mode&1)!==0&&Ht(n,e.child,null,l),n.child.memoizedState=qi(l),n.memoizedState=Mi,i);if((n.mode&1)===0)return la(e,n,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(P(419)),r=Uo(i,r,void 0),la(e,n,l,r)}if(s=(l&e.childLanes)!==0,Te||s){if(r=pe,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Sn(e,a),rn(r,e,a,-1))}return Ql(),r=Uo(Error(P(421))),la(e,n,l,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=rh.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,Le=qn(a.nextSibling),Ie=n,Q=!0,en=null,e!==null&&(He[$e++]=vn,He[$e++]=yn,He[$e++]=lt,vn=e.id,yn=e.overflow,lt=n),n=$l(n,r.children),n.flags|=4096,n)}function Ec(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Oi(e.return,n,t)}function Ko(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function Bd(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(be(e,n,r.children,t),r=X.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,t,n);else if(e.tag===19)Ec(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(X,r),(n.mode&1)===0)n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Ba(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Ko(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Ba(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Ko(n,!0,t,null,i);break;case"together":Ko(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ea(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function bn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ct|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=Un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Kf(e,n,t){switch(n.tag){case 3:Md(n),Bt();break;case 5:fd(n);break;case 1:Oe(n.type)&&za(n);break;case 4:zl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;V(Ia,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(V(X,X.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?qd(e,n,t):(V(X,X.current&1),e=bn(e,n,t),e!==null?e.sibling:null);V(X,X.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Bd(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),V(X,X.current),r)break;return null;case 22:case 23:return n.lanes=0,Ld(e,n,t)}return bn(e,n,t)}var Hd,Bi,$d,Ud;Hd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Bi=function(){};$d=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,rt(pn.current);var i=null;switch(t){case"input":a=ci(e,a),r=ci(e,r),i=[];break;case"select":a=Z({},a,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":a=pi(e,a),r=pi(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oa)}fi(t,r);var l;t=null;for(f in a)if(!r.hasOwnProperty(f)&&a.hasOwnProperty(f)&&a[f]!=null)if(f==="style"){var s=a[f];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Nr.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var c=r[f];if(s=a!=null?a[f]:void 0,r.hasOwnProperty(f)&&c!==s&&(c!=null||s!=null))if(f==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(t||(t={}),t[l]=c[l])}else t||(i||(i=[]),i.push(f,t)),t=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&W("scroll",e),i||s===c||(i=[])):(i=i||[]).push(f,c))}t&&(i=i||[]).push("style",t);var f=i;(n.updateQueue=f)&&(n.flags|=4)}};Ud=function(e,n,t,r){t!==r&&(n.flags|=4)};function ar(e,n){if(!Q)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Vf(e,n,t){var r=n.pendingProps;switch(Al(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(n),null;case 1:return Oe(n.type)&&Da(),Ee(n),null;case 3:return r=n.stateNode,$t(),G(_e),G(we),Ll(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oa(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,en!==null&&(Qi(en),en=null))),Bi(e,n),Ee(n),null;case 5:jl(n);var a=rt(Or.current);if(t=n.type,e!==null&&n.stateNode!=null)$d(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return Ee(n),null}if(e=rt(pn.current),oa(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[cn]=n,r[Tr]=i,e=(n.mode&1)!==0,t){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(a=0;a<ur.length;a++)W(ur[a],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Rs(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":Ts(r,i),W("invalid",r)}fi(t,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&aa(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&aa(r.textContent,s,e),a=["children",""+s]):Nr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(t){case"input":Jr(r),Ps(r,i,!0);break;case"textarea":Jr(r),_s(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Oa)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[cn]=n,e[Tr]=r,Hd(e,n,!1,!1),n.stateNode=e;e:{switch(l=hi(t,r),t){case"dialog":W("cancel",e),W("close",e),a=r;break;case"iframe":case"object":case"embed":W("load",e),a=r;break;case"video":case"audio":for(a=0;a<ur.length;a++)W(ur[a],e);a=r;break;case"source":W("error",e),a=r;break;case"img":case"image":case"link":W("error",e),W("load",e),a=r;break;case"details":W("toggle",e),a=r;break;case"input":Rs(e,r),a=ci(e,r),W("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ts(e,r),a=pi(e,r),W("invalid",e);break;default:a=r}fi(t,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?Eu(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yu(e,c)):i==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&wr(e,c):typeof c=="number"&&wr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Nr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&W("scroll",e):c!=null&&ml(e,i,c,l))}switch(t){case"input":Jr(e),Ps(e,r,!1);break;case"textarea":Jr(e),_s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ot(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ot(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Oa)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ee(n),null;case 6:if(e&&n.stateNode!=null)Ud(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=rt(Or.current),rt(pn.current),oa(n)){if(r=n.stateNode,t=n.memoizedProps,r[cn]=n,(i=r.nodeValue!==t)&&(e=Ie,e!==null))switch(e.tag){case 3:aa(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&aa(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[cn]=n,n.stateNode=r}return Ee(n),null;case 13:if(G(X),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Le!==null&&(n.mode&1)!==0&&(n.flags&128)===0)ld(),Bt(),n.flags|=98560,i=!1;else if(i=oa(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[cn]=n}else Bt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ee(n),i=!1}else en!==null&&(Qi(en),en=null),i=!0;if(!i)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(X.current&1)!==0?ce===0&&(ce=3):Ql())),n.updateQueue!==null&&(n.flags|=4),Ee(n),null);case 4:return $t(),Bi(e,n),e===null&&Rr(n.stateNode.containerInfo),Ee(n),null;case 10:return _l(n.type._context),Ee(n),null;case 17:return Oe(n.type)&&Da(),Ee(n),null;case 19:if(G(X),i=n.memoizedState,i===null)return Ee(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)ar(i,!1);else{if(ce!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=Ba(e),l!==null){for(n.flags|=128,ar(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return V(X,X.current&1|2),n.child}e=e.sibling}i.tail!==null&&re()>Kt&&(n.flags|=128,r=!0,ar(i,!1),n.lanes=4194304)}else{if(!r)if(e=Ba(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ar(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Q)return Ee(n),null}else 2*re()-i.renderingStartTime>Kt&&t!==1073741824&&(n.flags|=128,r=!0,ar(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=re(),n.sibling=null,t=X.current,V(X,r?t&1|2:t&1),n):(Ee(n),null);case 22:case 23:return Gl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(je&1073741824)!==0&&(Ee(n),n.subtreeFlags&6&&(n.flags|=8192)):Ee(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function Wf(e,n){switch(Al(n),n.tag){case 1:return Oe(n.type)&&Da(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $t(),G(_e),G(we),Ll(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return jl(n),null;case 13:if(G(X),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));Bt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(X),null;case 4:return $t(),null;case 10:return _l(n.type._context),null;case 22:case 23:return Gl(),null;case 24:return null;default:return null}}var sa=!1,Ne=!1,Gf=typeof WeakSet=="function"?WeakSet:Set,D=null;function Pt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ne(e,n,r)}else t.current=null}function Hi(e,n,t){try{t()}catch(r){ne(e,n,r)}}var Nc=!1;function Qf(e,n){if(Ci=Pa,e=Gu(),kl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,c=-1,f=0,y=0,v=e,x=null;n:for(;;){for(var b;v!==t||a!==0&&v.nodeType!==3||(s=l+a),v!==i||r!==0&&v.nodeType!==3||(c=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(b=v.firstChild)!==null;)x=v,v=b;for(;;){if(v===e)break n;if(x===t&&++f===a&&(s=l),x===i&&++y===r&&(c=l),(b=v.nextSibling)!==null)break;v=x,x=v.parentNode}v=b}t=s===-1||c===-1?null:{start:s,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(ki={focusedElem:e,selectionRange:t},Pa=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var C=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,_=C.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?k:Ye(n.type,k),_);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){ne(n,n.return,E)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return C=Nc,Nc=!1,C}function yr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Hi(n,t,i)}a=a.next}while(a!==r)}}function oo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function $i(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Kd(e){var n=e.alternate;n!==null&&(e.alternate=null,Kd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[cn],delete n[Tr],delete n[Ri],delete n[Tf],delete n[_f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vd(e){return e.tag===5||e.tag===3||e.tag===4}function wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ui(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Oa));else if(r!==4&&(e=e.child,e!==null))for(Ui(e,n,t),e=e.sibling;e!==null;)Ui(e,n,t),e=e.sibling}function Ki(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ki(e,n,t),e=e.sibling;e!==null;)Ki(e,n,t),e=e.sibling}var fe=null,Ze=!1;function An(e,n,t){for(t=t.child;t!==null;)Wd(e,n,t),t=t.sibling}function Wd(e,n,t){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Xa,t)}catch{}switch(t.tag){case 5:Ne||Pt(t,n);case 6:var r=fe,a=Ze;fe=null,An(e,n,t),fe=r,Ze=a,fe!==null&&(Ze?(e=fe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):fe.removeChild(t.stateNode));break;case 18:fe!==null&&(Ze?(e=fe,t=t.stateNode,e.nodeType===8?Io(e.parentNode,t):e.nodeType===1&&Io(e,t),kr(e)):Io(fe,t.stateNode));break;case 4:r=fe,a=Ze,fe=t.stateNode.containerInfo,Ze=!0,An(e,n,t),fe=r,Ze=a;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Hi(t,n,l),a=a.next}while(a!==r)}An(e,n,t);break;case 1:if(!Ne&&(Pt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){ne(t,n,s)}An(e,n,t);break;case 21:An(e,n,t);break;case 22:t.mode&1?(Ne=(r=Ne)||t.memoizedState!==null,An(e,n,t),Ne=r):An(e,n,t);break;default:An(e,n,t)}}function Sc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Gf),n.forEach(function(r){var a=ah.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Xe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var i=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,Ze=!1;break e;case 3:fe=s.stateNode.containerInfo,Ze=!0;break e;case 4:fe=s.stateNode.containerInfo,Ze=!0;break e}s=s.return}if(fe===null)throw Error(P(160));Wd(i,l,a),fe=null,Ze=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(f){ne(a,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gd(n,e),n=n.sibling}function Gd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(n,e),ln(e),r&4){try{yr(3,e,e.return),oo(3,e)}catch(k){ne(e,e.return,k)}try{yr(5,e,e.return)}catch(k){ne(e,e.return,k)}}break;case 1:Xe(n,e),ln(e),r&512&&t!==null&&Pt(t,t.return);break;case 5:if(Xe(n,e),ln(e),r&512&&t!==null&&Pt(t,t.return),e.flags&32){var a=e.stateNode;try{wr(a,"")}catch(k){ne(e,e.return,k)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&hu(a,i),hi(s,l);var f=hi(s,i);for(l=0;l<c.length;l+=2){var y=c[l],v=c[l+1];y==="style"?Eu(a,v):y==="dangerouslySetInnerHTML"?yu(a,v):y==="children"?wr(a,v):ml(a,y,v,f)}switch(s){case"input":ui(a,i);break;case"textarea":gu(a,i);break;case"select":var x=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Ot(a,!!i.multiple,b,!1):x!==!!i.multiple&&(i.defaultValue!=null?Ot(a,!!i.multiple,i.defaultValue,!0):Ot(a,!!i.multiple,i.multiple?[]:"",!1))}a[Tr]=i}catch(k){ne(e,e.return,k)}}break;case 6:if(Xe(n,e),ln(e),r&4){if(e.stateNode===null)throw Error(P(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(k){ne(e,e.return,k)}}break;case 3:if(Xe(n,e),ln(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{kr(n.containerInfo)}catch(k){ne(e,e.return,k)}break;case 4:Xe(n,e),ln(e);break;case 13:Xe(n,e),ln(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Vl=re())),r&4&&Sc(e);break;case 22:if(y=t!==null&&t.memoizedState!==null,e.mode&1?(Ne=(f=Ne)||y,Xe(n,e),Ne=f):Xe(n,e),ln(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!y&&(e.mode&1)!==0)for(D=e,y=e.child;y!==null;){for(v=D=y;D!==null;){switch(x=D,b=x.child,x.tag){case 0:case 11:case 14:case 15:yr(4,x,x.return);break;case 1:Pt(x,x.return);var C=x.stateNode;if(typeof C.componentWillUnmount=="function"){r=x,t=x.return;try{n=r,C.props=n.memoizedProps,C.state=n.memoizedState,C.componentWillUnmount()}catch(k){ne(r,t,k)}}break;case 5:Pt(x,x.return);break;case 22:if(x.memoizedState!==null){Cc(v);continue}}b!==null?(b.return=x,D=b):Cc(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{a=v.stateNode,f?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=v.stateNode,c=v.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=xu("display",l))}catch(k){ne(e,e.return,k)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=f?"":v.memoizedProps}catch(k){ne(e,e.return,k)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Xe(n,e),ln(e),r&4&&Sc(e);break;case 21:break;default:Xe(n,e),ln(e)}}function ln(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Vd(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(wr(a,""),r.flags&=-33);var i=wc(e);Ki(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,s=wc(e);Ui(e,s,l);break;default:throw Error(P(161))}}catch(c){ne(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Jf(e,n,t){D=e,Qd(e)}function Qd(e,n,t){for(var r=(e.mode&1)!==0;D!==null;){var a=D,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||sa;if(!l){var s=a.alternate,c=s!==null&&s.memoizedState!==null||Ne;s=sa;var f=Ne;if(sa=l,(Ne=c)&&!f)for(D=a;D!==null;)l=D,c=l.child,l.tag===22&&l.memoizedState!==null?kc(a):c!==null?(c.return=l,D=c):kc(a);for(;i!==null;)D=i,Qd(i),i=i.sibling;D=a,sa=s,Ne=f}bc(e)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,D=i):bc(e)}}function bc(e){for(;D!==null;){var n=D;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ne||oo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ne)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Ye(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&lc(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}lc(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var y=f.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&kr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ne||n.flags&512&&$i(n)}catch(x){ne(n,n.return,x)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function Cc(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function kc(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{oo(4,n)}catch(c){ne(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(c){ne(n,a,c)}}var i=n.return;try{$i(n)}catch(c){ne(n,i,c)}break;case 5:var l=n.return;try{$i(n)}catch(c){ne(n,l,c)}}}catch(c){ne(n,n.return,c)}if(n===e){D=null;break}var s=n.sibling;if(s!==null){s.return=n.return,D=s;break}D=n.return}}var Xf=Math.ceil,Ua=Cn.ReactCurrentDispatcher,Ul=Cn.ReactCurrentOwner,Ve=Cn.ReactCurrentBatchConfig,B=0,pe=null,le=null,he=0,je=0,Tt=Jn(0),ce=0,Lr=null,ct=0,io=0,Kl=0,xr=null,Pe=null,Vl=0,Kt=1/0,fn=null,Ka=!1,Vi=null,Hn=null,ca=!1,zn=null,Va=0,Er=0,Wi=null,Na=-1,wa=0;function Ce(){return(B&6)!==0?re():Na!==-1?Na:Na=re()}function $n(e){return(e.mode&1)===0?1:(B&2)!==0&&he!==0?he&-he:Df.transition!==null?(wa===0&&(wa=_u()),wa):(e=U,e!==0||(e=window.event,e=e===void 0?16:Mu(e.type)),e)}function rn(e,n,t,r){if(50<Er)throw Er=0,Wi=null,Error(P(185));Hr(e,t,r),((B&2)===0||e!==pe)&&(e===pe&&((B&2)===0&&(io|=t),ce===4&&On(e,he)),De(e,r),t===1&&B===0&&(n.mode&1)===0&&(Kt=re()+500,to&&Xn()))}function De(e,n){var t=e.callbackNode;Om(e,n);var r=Ra(e,e===pe?he:0);if(r===0)t!==null&&zs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&zs(t),n===1)e.tag===0?Of(Fc.bind(null,e)):ad(Fc.bind(null,e)),Rf(function(){(B&6)===0&&Xn()}),t=null;else{switch(Ou(r)){case 1:t=yl;break;case 4:t=Pu;break;case 16:t=Aa;break;case 536870912:t=Tu;break;default:t=Aa}t=rp(t,Jd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Jd(e,n){if(Na=-1,wa=0,(B&6)!==0)throw Error(P(327));var t=e.callbackNode;if(It()&&e.callbackNode!==t)return null;var r=Ra(e,e===pe?he:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Wa(e,r);else{n=r;var a=B;B|=2;var i=Yd();(pe!==e||he!==n)&&(fn=null,Kt=re()+500,at(e,n));do try{eh();break}catch(s){Xd(e,s)}while(1);Tl(),Ua.current=i,B=a,le!==null?n=0:(pe=null,he=0,n=ce)}if(n!==0){if(n===2&&(a=Ei(e),a!==0&&(r=a,n=Gi(e,a))),n===1)throw t=Lr,at(e,0),On(e,r),De(e,re()),t;if(n===6)On(e,r);else{if(a=e.current.alternate,(r&30)===0&&!Yf(a)&&(n=Wa(e,r),n===2&&(i=Ei(e),i!==0&&(r=i,n=Gi(e,i))),n===1))throw t=Lr,at(e,0),On(e,r),De(e,re()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:Zn(e,Pe,fn);break;case 3:if(On(e,r),(r&130023424)===r&&(n=Vl+500-re(),10<n)){if(Ra(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ai(Zn.bind(null,e,Pe,fn),n);break}Zn(e,Pe,fn);break;case 4:if(On(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var l=31-tn(r);i=1<<l,l=n[l],l>a&&(a=l),r&=~i}if(r=a,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xf(r/1960))-r,10<r){e.timeoutHandle=Ai(Zn.bind(null,e,Pe,fn),r);break}Zn(e,Pe,fn);break;case 5:Zn(e,Pe,fn);break;default:throw Error(P(329))}}}return De(e,re()),e.callbackNode===t?Jd.bind(null,e):null}function Gi(e,n){var t=xr;return e.current.memoizedState.isDehydrated&&(at(e,n).flags|=256),e=Wa(e,n),e!==2&&(n=Pe,Pe=t,n!==null&&Qi(n)),e}function Qi(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function Yf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!an(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function On(e,n){for(n&=~Kl,n&=~io,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-tn(n),r=1<<t;e[t]=-1,n&=~r}}function Fc(e){if((B&6)!==0)throw Error(P(327));It();var n=Ra(e,0);if((n&1)===0)return De(e,re()),null;var t=Wa(e,n);if(e.tag!==0&&t===2){var r=Ei(e);r!==0&&(n=r,t=Gi(e,r))}if(t===1)throw t=Lr,at(e,0),On(e,n),De(e,re()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Zn(e,Pe,fn),De(e,re()),null}function Wl(e,n){var t=B;B|=1;try{return e(n)}finally{B=t,B===0&&(Kt=re()+500,to&&Xn())}}function ut(e){zn!==null&&zn.tag===0&&(B&6)===0&&It();var n=B;B|=1;var t=Ve.transition,r=U;try{if(Ve.transition=null,U=1,e)return e()}finally{U=r,Ve.transition=t,B=n,(B&6)===0&&Xn()}}function Gl(){je=Tt.current,G(Tt)}function at(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Af(t)),le!==null)for(t=le.return;t!==null;){var r=t;switch(Al(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Da();break;case 3:$t(),G(_e),G(we),Ll();break;case 5:jl(r);break;case 4:$t();break;case 13:G(X);break;case 19:G(X);break;case 10:_l(r.type._context);break;case 22:case 23:Gl()}t=t.return}if(pe=e,le=e=Un(e.current,null),he=je=n,ce=0,Lr=null,Kl=io=ct=0,Pe=xr=null,tt!==null){for(n=0;n<tt.length;n++)if(t=tt[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}t.pending=r}tt=null}return e}function Xd(e,n){do{var t=le;try{if(Tl(),ya.current=$a,Ha){for(var r=Y.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Ha=!1}if(st=0,de=se=Y=null,vr=!1,Dr=0,Ul.current=null,t===null||t.return===null){ce=1,Lr=n,le=null;break}e:{var i=e,l=t.return,s=t,c=n;if(n=he,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,y=s,v=y.tag;if((y.mode&1)===0&&(v===0||v===11||v===15)){var x=y.alternate;x?(y.updateQueue=x.updateQueue,y.memoizedState=x.memoizedState,y.lanes=x.lanes):(y.updateQueue=null,y.memoizedState=null)}var b=fc(l);if(b!==null){b.flags&=-257,hc(b,l,s,i,n),b.mode&1&&mc(i,f,n),n=b,c=f;var C=n.updateQueue;if(C===null){var k=new Set;k.add(c),n.updateQueue=k}else C.add(c);break e}else{if((n&1)===0){mc(i,f,n),Ql();break e}c=Error(P(426))}}else if(Q&&s.mode&1){var _=fc(l);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),hc(_,l,s,i,n),Rl(Ut(c,s));break e}}i=c=Ut(c,s),ce!==4&&(ce=2),xr===null?xr=[i]:xr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=Dd(i,c,n);ic(i,g);break e;case 1:s=c;var p=i.type,m=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Hn===null||!Hn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var E=zd(i,s,n);ic(i,E);break e}}i=i.return}while(i!==null)}ep(t)}catch(w){n=w,le===t&&t!==null&&(le=t=t.return);continue}break}while(1)}function Yd(){var e=Ua.current;return Ua.current=$a,e===null?$a:e}function Ql(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||(ct&268435455)===0&&(io&268435455)===0||On(pe,he)}function Wa(e,n){var t=B;B|=2;var r=Yd();(pe!==e||he!==n)&&(fn=null,at(e,n));do try{Zf();break}catch(a){Xd(e,a)}while(1);if(Tl(),B=t,Ua.current=r,le!==null)throw Error(P(261));return pe=null,he=0,ce}function Zf(){for(;le!==null;)Zd(le)}function eh(){for(;le!==null&&!bm();)Zd(le)}function Zd(e){var n=tp(e.alternate,e,je);e.memoizedProps=e.pendingProps,n===null?ep(e):le=n,Ul.current=null}function ep(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Vf(t,n,je),t!==null){le=t;return}}else{if(t=Wf(t,n),t!==null){t.flags&=32767,le=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}if(n=n.sibling,n!==null){le=n;return}le=n=e}while(n!==null);ce===0&&(ce=5)}function Zn(e,n,t){var r=U,a=Ve.transition;try{Ve.transition=null,U=1,nh(e,n,t,r)}finally{Ve.transition=a,U=r}return null}function nh(e,n,t,r){do It();while(zn!==null);if((B&6)!==0)throw Error(P(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Dm(e,i),e===pe&&(le=pe=null,he=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ca||(ca=!0,rp(Aa,function(){return It(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=Ve.transition,Ve.transition=null;var l=U;U=1;var s=B;B|=4,Ul.current=null,Qf(e,t),Gd(t,e),Nf(ki),Pa=!!Ci,ki=Ci=null,e.current=t,Jf(t),Cm(),B=s,U=l,Ve.transition=i}else e.current=t;if(ca&&(ca=!1,zn=e,Va=a),i=e.pendingLanes,i===0&&(Hn=null),Am(t.stateNode),De(e,re()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ka)throw Ka=!1,e=Vi,Vi=null,e;return(Va&1)!==0&&e.tag!==0&&It(),i=e.pendingLanes,(i&1)!==0?e===Wi?Er++:(Er=0,Wi=e):Er=0,Xn(),null}function It(){if(zn!==null){var e=Ou(Va),n=Ve.transition,t=U;try{if(Ve.transition=null,U=16>e?16:e,zn===null)var r=!1;else{if(e=zn,zn=null,Va=0,(B&6)!==0)throw Error(P(331));var a=B;for(B|=4,D=e.current;D!==null;){var i=D,l=i.child;if((D.flags&16)!==0){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var f=s[c];for(D=f;D!==null;){var y=D;switch(y.tag){case 0:case 11:case 15:yr(8,y,i)}var v=y.child;if(v!==null)v.return=y,D=v;else for(;D!==null;){y=D;var x=y.sibling,b=y.return;if(Kd(y),y===f){D=null;break}if(x!==null){x.return=b,D=x;break}D=b}}}var C=i.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var _=k.sibling;k.sibling=null,k=_}while(k!==null)}}D=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,D=l;else e:for(;D!==null;){if(i=D,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:yr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,D=g;break e}D=i.return}}var p=e.current;for(D=p;D!==null;){l=D;var m=l.child;if((l.subtreeFlags&2064)!==0&&m!==null)m.return=l,D=m;else e:for(l=p;D!==null;){if(s=D,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:oo(9,s)}}catch(w){ne(s,s.return,w)}if(s===l){D=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,D=E;break e}D=s.return}}if(B=a,Xn(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Xa,e)}catch{}r=!0}return r}finally{U=t,Ve.transition=n}}return!1}function Ac(e,n,t){n=Ut(t,n),n=Dd(e,n,1),e=Bn(e,n,1),n=Ce(),e!==null&&(Hr(e,1,n),De(e,n))}function ne(e,n,t){if(e.tag===3)Ac(e,e,t);else for(;n!==null;){if(n.tag===3){Ac(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){e=Ut(t,e),e=zd(n,e,1),n=Bn(n,e,1),e=Ce(),n!==null&&(Hr(n,1,e),De(n,e));break}}n=n.return}}function th(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ce(),e.pingedLanes|=e.suspendedLanes&t,pe===e&&(he&t)===t&&(ce===4||ce===3&&(he&130023424)===he&&500>re()-Vl?at(e,0):Kl|=t),De(e,n)}function np(e,n){n===0&&((e.mode&1)===0?n=1:(n=Zr,Zr<<=1,(Zr&130023424)===0&&(Zr=4194304)));var t=Ce();e=Sn(e,n),e!==null&&(Hr(e,n,t),De(e,t))}function rh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),np(e,t)}function ah(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),np(e,t)}var tp;tp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||_e.current)Te=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Te=!1,Kf(e,n,t);Te=(e.flags&131072)!==0}else Te=!1,Q&&(n.flags&1048576)!==0&&od(n,La,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ea(e,n),e=n.pendingProps;var a=qt(n,we.current);Lt(n,t),a=Ml(null,n,r,e,a,t);var i=ql();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Oe(r)?(i=!0,za(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Dl(n),a.updater=ro,n.stateNode=a,a._reactInternals=n,zi(n,r,e,t),n=Ii(null,n,r,!0,i,t)):(n.tag=0,Q&&i&&Fl(n),be(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ea(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=ih(r),e=Ye(r,e),a){case 0:n=Li(null,n,r,e,t);break e;case 1:n=yc(null,n,r,e,t);break e;case 11:n=gc(null,n,r,e,t);break e;case 14:n=vc(null,n,r,Ye(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ye(r,a),Li(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ye(r,a),yc(e,n,r,a,t);case 3:e:{if(Md(n),e===null)throw Error(P(387));r=n.pendingProps,i=n.memoizedState,a=i.element,cd(e,n),qa(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=Ut(Error(P(423)),n),n=xc(e,n,r,t,a);break e}else if(r!==a){a=Ut(Error(P(424)),n),n=xc(e,n,r,t,a);break e}else for(Le=qn(n.stateNode.containerInfo.firstChild),Ie=n,Q=!0,en=null,t=md(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Bt(),r===a){n=bn(e,n,t);break e}be(e,n,r,t)}n=n.child}return n;case 5:return fd(n),e===null&&_i(n),r=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,Fi(r,a)?l=null:i!==null&&Fi(r,i)&&(n.flags|=32),Id(e,n),be(e,n,l,t),n.child;case 6:return e===null&&_i(n),null;case 13:return qd(e,n,t);case 4:return zl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ht(n,null,r,t):be(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ye(r,a),gc(e,n,r,a,t);case 7:return be(e,n,n.pendingProps,t),n.child;case 8:return be(e,n,n.pendingProps.children,t),n.child;case 12:return be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,i=n.memoizedProps,l=a.value,V(Ia,r._currentValue),r._currentValue=l,i!==null)if(an(i.value,l)){if(i.children===a.children&&!_e.current){n=bn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=xn(-1,t&-t),c.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var y=f.pending;y===null?c.next=c:(c.next=y.next,y.next=c),f.pending=c}}i.lanes|=t,c=i.alternate,c!==null&&(c.lanes|=t),Oi(i.return,t,n),s.lanes|=t;break}c=c.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Oi(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}be(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Lt(n,t),a=We(a),r=r(a),n.flags|=1,be(e,n,r,t),n.child;case 14:return r=n.type,a=Ye(r,n.pendingProps),a=Ye(r.type,a),vc(e,n,r,a,t);case 15:return jd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ye(r,a),Ea(e,n),n.tag=1,Oe(r)?(e=!0,za(n)):e=!1,Lt(n,t),dd(n,r,a),zi(n,r,a,t),Ii(null,n,r,!0,e,t);case 19:return Bd(e,n,t);case 22:return Ld(e,n,t)}throw Error(P(156,n.tag))};function rp(e,n){return Ru(e,n)}function oh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,n,t,r){return new oh(e,n,t,r)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ih(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hl)return 11;if(e===gl)return 14}return 2}function Un(e,n){var t=e.alternate;return t===null?(t=Ue(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Sa(e,n,t,r,a,i){var l=2;if(r=e,typeof e=="function")Jl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Nt:return ot(t.children,a,i,n);case fl:l=8,a|=8;break;case oi:return e=Ue(12,t,n,a|2),e.elementType=oi,e.lanes=i,e;case ii:return e=Ue(13,t,n,a),e.elementType=ii,e.lanes=i,e;case li:return e=Ue(19,t,n,a),e.elementType=li,e.lanes=i,e;case pu:return lo(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uu:l=10;break e;case du:l=9;break e;case hl:l=11;break e;case gl:l=14;break e;case Rn:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=Ue(l,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function ot(e,n,t,r){return e=Ue(7,e,r,n),e.lanes=t,e}function lo(e,n,t,r){return e=Ue(22,e,r,n),e.elementType=pu,e.lanes=t,e.stateNode={isHidden:!1},e}function Vo(e,n,t){return e=Ue(6,e,null,n),e.lanes=t,e}function Wo(e,n,t){return n=Ue(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function lh(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fo(0),this.expirationTimes=Fo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fo(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Xl(e,n,t,r,a,i,l,s,c){return e=new lh(e,n,t,s,c),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ue(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(i),e}function sh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Et,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ap(e){if(!e)return Gn;e=e._reactInternals;e:{if(pt(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Oe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(Oe(t))return rd(e,t,n)}return n}function op(e,n,t,r,a,i,l,s,c){return e=Xl(t,r,!0,e,a,i,l,s,c),e.context=ap(null),t=e.current,r=Ce(),a=$n(t),i=xn(r,a),i.callback=n!=null?n:null,Bn(t,i,a),e.current.lanes=a,Hr(e,a,r),De(e,r),e}function so(e,n,t,r){var a=n.current,i=Ce(),l=$n(a);return t=ap(t),n.context===null?n.context=t:n.pendingContext=t,n=xn(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Bn(a,n,l),e!==null&&(rn(e,a,l,i),va(e,a,l)),l}function Ga(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Yl(e,n){Rc(e,n),(e=e.alternate)&&Rc(e,n)}function ch(){return null}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}co.prototype.render=Zl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));so(e,n,null,null)};co.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ut(function(){so(null,e,null,null)}),n[wn]=null}};function co(e){this._internalRoot=e}co.prototype.unstable_scheduleHydration=function(e){if(e){var n=ju();e={blockedOn:null,target:e,priority:n};for(var t=0;t<_n.length&&n!==0&&n<_n[t].priority;t++);_n.splice(t,0,e),t===0&&Iu(e)}};function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pc(){}function uh(e,n,t,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var f=Ga(l);i.call(f)}}var l=op(n,r,e,0,null,!1,!1,"",Pc);return e._reactRootContainer=l,e[wn]=l.current,Rr(e.nodeType===8?e.parentNode:e),ut(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var f=Ga(c);s.call(f)}}var c=Xl(e,0,!1,null,null,!1,!1,"",Pc);return e._reactRootContainer=c,e[wn]=c.current,Rr(e.nodeType===8?e.parentNode:e),ut(function(){so(n,c,t,r)}),c}function po(e,n,t,r,a){var i=t._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var s=a;a=function(){var c=Ga(l);s.call(c)}}so(n,l,e,a)}else l=uh(t,n,e,a,r);return Ga(l)}Du=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=cr(n.pendingLanes);t!==0&&(xl(n,t|1),De(n,re()),(B&6)===0&&(Kt=re()+500,Xn()))}break;case 13:ut(function(){var r=Sn(e,1);if(r!==null){var a=Ce();rn(r,e,1,a)}}),Yl(e,1)}};El=function(e){if(e.tag===13){var n=Sn(e,134217728);if(n!==null){var t=Ce();rn(n,e,134217728,t)}Yl(e,134217728)}};zu=function(e){if(e.tag===13){var n=$n(e),t=Sn(e,n);if(t!==null){var r=Ce();rn(t,e,n,r)}Yl(e,n)}};ju=function(){return U};Lu=function(e,n){var t=U;try{return U=e,n()}finally{U=t}};vi=function(e,n,t){switch(n){case"input":if(ui(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=no(r);if(!a)throw Error(P(90));fu(r),ui(r,a)}}}break;case"textarea":gu(e,t);break;case"select":n=t.value,n!=null&&Ot(e,!!t.multiple,n,!1)}};Su=Wl;bu=ut;var dh={usingClientEntryPoint:!1,Events:[Ur,Ct,no,Nu,wu,Wl]},or={findFiberByHostInstance:nt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ph={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fu(e),e===null?null:e.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||ch,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{Xa=ua.inject(ph),dn=ua}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dh;qe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!es(n))throw Error(P(200));return sh(e,n,null,t)};qe.createRoot=function(e,n){if(!es(e))throw Error(P(299));var t=!1,r="",a=ip;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Xl(e,1,!1,null,null,t,!1,r,a),e[wn]=n.current,Rr(e.nodeType===8?e.parentNode:e),new Zl(n)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Fu(n),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return ut(e)};qe.hydrate=function(e,n,t){if(!uo(n))throw Error(P(200));return po(null,e,n,!0,t)};qe.hydrateRoot=function(e,n,t){if(!es(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,a=!1,i="",l=ip;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=op(n,null,e,1,t!=null?t:null,a,!1,i,l),e[wn]=n.current,Rr(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new co(n)};qe.render=function(e,n,t){if(!uo(n))throw Error(P(200));return po(null,e,n,!1,t)};qe.unmountComponentAtNode=function(e){if(!uo(e))throw Error(P(40));return e._reactRootContainer?(ut(function(){po(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};qe.unstable_batchedUpdates=Wl;qe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!uo(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return po(e,n,t,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}n(),e.exports=qe})(ul);const _t=Yc(ul.exports);var Tc=ul.exports;ri.createRoot=Tc.createRoot,ri.hydrateRoot=Tc.hydrateRoot;const mh="_titulo_s9qqb_15",fh="_r2d2title_s9qqb_31",hh="_containermain_s9qqb_41",gh="_card_s9qqb_57",vh="_icons_s9qqb_93",K={titulo:mh,r2d2title:fh,containermain:hh,card:gh,icons:vh};/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ir(){return Ir=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ir.apply(this,arguments)}var jn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jn||(jn={}));const _c="popstate";function yh(e){e===void 0&&(e={});function n(r,a){let{pathname:i,search:l,hash:s}=r.location;return Ji("",{pathname:i,search:l,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Mr(a)}return Nh(n,t,null,e)}function xh(){return Math.random().toString(36).substr(2,8)}function Oc(e){return{usr:e.state,key:e.key}}function Ji(e,n,t,r){return t===void 0&&(t=null),Ir({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Qt(n):n,{state:t,key:n&&n.key||r||xh()})}function Mr(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Qt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Eh(e){let n=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",t=typeof e=="string"?e:Mr(e);return new URL(t,n)}function Nh(e,n,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,s=jn.Pop,c=null;function f(){s=jn.Pop,c&&c({action:s,location:x.location})}function y(b,C){s=jn.Push;let k=Ji(x.location,b,C);t&&t(k,b);let _=Oc(k),g=x.createHref(k);try{l.pushState(_,"",g)}catch{a.location.assign(g)}i&&c&&c({action:s,location:x.location})}function v(b,C){s=jn.Replace;let k=Ji(x.location,b,C);t&&t(k,b);let _=Oc(k),g=x.createHref(k);l.replaceState(_,"",g),i&&c&&c({action:s,location:x.location})}let x={get action(){return s},get location(){return e(a,l)},listen(b){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(_c,f),c=b,()=>{a.removeEventListener(_c,f),c=null}},createHref(b){return n(a,b)},encodeLocation(b){let C=Eh(Mr(b));return Ir({},b,{pathname:C.pathname,search:C.search,hash:C.hash})},push:y,replace:v,go(b){return l.go(b)}};return x}var Dc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dc||(Dc={}));function wh(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?Qt(n):n,a=sp(r.pathname||"/",t);if(a==null)return null;let i=lp(e);Sh(i);let l=null;for(let s=0;l==null&&s<i.length;++s)l=_h(i[s],zh(a));return l}function lp(e,n,t,r){return n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r=""),e.forEach((a,i)=>{let l={relativePath:a.path||"",caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let s=Kn([r,l.relativePath]),c=t.concat(l);a.children&&a.children.length>0&&(me(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),lp(a.children,n,c,s)),!(a.path==null&&!a.index)&&n.push({path:s,score:Ph(s,a.index),routesMeta:c})}),n}function Sh(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Th(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const bh=/^:\w+$/,Ch=3,kh=2,Fh=1,Ah=10,Rh=-2,zc=e=>e==="*";function Ph(e,n){let t=e.split("/"),r=t.length;return t.some(zc)&&(r+=Rh),n&&(r+=kh),t.filter(a=>!zc(a)).reduce((a,i)=>a+(bh.test(i)?Ch:i===""?Fh:Ah),r)}function Th(e,n){return e.length===n.length&&e.slice(0,-1).every((r,a)=>r===n[a])?e[e.length-1]-n[n.length-1]:0}function _h(e,n){let{routesMeta:t}=e,r={},a="/",i=[];for(let l=0;l<t.length;++l){let s=t[l],c=l===t.length-1,f=a==="/"?n:n.slice(a.length)||"/",y=Oh({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},f);if(!y)return null;Object.assign(r,y.params);let v=s.route;i.push({params:r,pathname:Kn([a,y.pathname]),pathnameBase:Mh(Kn([a,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(a=Kn([a,y.pathnameBase]))}return i}function Oh(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Dh(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((f,y,v)=>{if(y==="*"){let x=s[v]||"";l=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}return f[y]=jh(s[v]||"",y),f},{}),pathname:i,pathnameBase:l,pattern:e}}function Dh(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ns(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,s)=>(r.push(s),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),r]}function zh(e){try{return decodeURI(e)}catch(n){return ns(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function jh(e,n){try{return decodeURIComponent(e)}catch(t){return ns(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function sp(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function me(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ns(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Lh(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:a=""}=typeof e=="string"?Qt(e):e;return{pathname:t?t.startsWith("/")?t:Ih(t,n):n,search:qh(r),hash:Bh(a)}}function Ih(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Go(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function up(e,n,t,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Qt(e):(a=Ir({},e),me(!a.pathname||!a.pathname.includes("?"),Go("?","pathname","search",a)),me(!a.pathname||!a.pathname.includes("#"),Go("#","pathname","hash",a)),me(!a.search||!a.search.includes("#"),Go("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,s;if(r||l==null)s=t;else{let v=n.length-1;if(l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),v-=1;a.pathname=x.join("/")}s=v>=0?n[v]:"/"}let c=Lh(a,s),f=l&&l!=="/"&&l.endsWith("/"),y=(i||l===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(f||y)&&(c.pathname+="/"),c}const Kn=e=>e.join("/").replace(/\/\/+/g,"/"),Mh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Hh{constructor(n,t,r){this.status=n,this.statusText=t||"",this.data=r}}function $h(e){return e instanceof Hh}const Uh=new Set(["POST","PUT","PATCH","DELETE"]);[...Uh];var mo={exports:{}},fo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh=N.exports,Vh=Symbol.for("react.element"),Wh=Symbol.for("react.fragment"),Gh=Object.prototype.hasOwnProperty,Qh=Kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jh={key:!0,ref:!0,__self:!0,__source:!0};function dp(e,n,t){var r,a={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Gh.call(n,r)&&!Jh.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Vh,type:e,key:i,ref:l,props:a,_owner:Qh.current}}fo.Fragment=Wh;fo.jsx=dp;fo.jsxs=dp;(function(e){e.exports=fo})(mo);const ue=mo.exports.Fragment,o=mo.exports.jsx,h=mo.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xi(){return Xi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Xi.apply(this,arguments)}function Xh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}const Yh=typeof Object.is=="function"?Object.is:Xh,{useState:Zh,useEffect:e0,useLayoutEffect:n0,useDebugValue:t0}=ti;function r0(e,n,t){const r=n(),[{inst:a},i]=Zh({inst:{value:r,getSnapshot:n}});return n0(()=>{a.value=r,a.getSnapshot=n,Qo(a)&&i({inst:a})},[e,r,n]),e0(()=>(Qo(a)&&i({inst:a}),e(()=>{Qo(a)&&i({inst:a})})),[e]),t0(r),r}function Qo(e){const n=e.getSnapshot,t=e.value;try{const r=n();return!Yh(t,r)}catch{return!0}}function a0(e,n,t){return n()}const o0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",i0=!o0,l0=i0?a0:r0;"useSyncExternalStore"in ti&&(e=>e.useSyncExternalStore)(ti);const s0=N.exports.createContext(null),c0=N.exports.createContext(null),pp=N.exports.createContext(null),ts=N.exports.createContext(null),ho=N.exports.createContext(null),Jt=N.exports.createContext({outlet:null,matches:[]}),mp=N.exports.createContext(null);function u0(e,n){let{relative:t}=n===void 0?{}:n;Vr()||me(!1);let{basename:r,navigator:a}=N.exports.useContext(ts),{hash:i,pathname:l,search:s}=fp(e,{relative:t}),c=l;return r!=="/"&&(c=l==="/"?r:Kn([r,l])),a.createHref({pathname:c,search:s,hash:i})}function Vr(){return N.exports.useContext(ho)!=null}function go(){return Vr()||me(!1),N.exports.useContext(ho).location}function d0(){Vr()||me(!1);let{basename:e,navigator:n}=N.exports.useContext(ts),{matches:t}=N.exports.useContext(Jt),{pathname:r}=go(),a=JSON.stringify(cp(t).map(s=>s.pathnameBase)),i=N.exports.useRef(!1);return N.exports.useEffect(()=>{i.current=!0}),N.exports.useCallback(function(s,c){if(c===void 0&&(c={}),!i.current)return;if(typeof s=="number"){n.go(s);return}let f=up(s,JSON.parse(a),r,c.relative==="path");e!=="/"&&(f.pathname=f.pathname==="/"?e:Kn([e,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[e,n,a,r])}const p0=N.exports.createContext(null);function m0(e){let n=N.exports.useContext(Jt).outlet;return n&&o(p0.Provider,{value:e,children:n})}function fp(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=N.exports.useContext(Jt),{pathname:a}=go(),i=JSON.stringify(cp(r).map(l=>l.pathnameBase));return N.exports.useMemo(()=>up(e,JSON.parse(i),a,t==="path"),[e,i,a,t])}function f0(e,n){Vr()||me(!1);let t=N.exports.useContext(pp),{matches:r}=N.exports.useContext(Jt),a=r[r.length-1],i=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=go(),c;if(n){var f;let C=typeof n=="string"?Qt(n):n;l==="/"||((f=C.pathname)==null?void 0:f.startsWith(l))||me(!1),c=C}else c=s;let y=c.pathname||"/",v=l==="/"?y:y.slice(l.length)||"/",x=wh(e,{pathname:v}),b=y0(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},i,C.params),pathname:Kn([l,C.pathname]),pathnameBase:C.pathnameBase==="/"?l:Kn([l,C.pathnameBase])})),r,t||void 0);return n&&b?o(ho.Provider,{value:{location:Xi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:jn.Pop},children:b}):b}function h0(){let e=E0(),n=$h(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r};return h(ue,{children:[o("h2",{children:"Unhandled Thrown Error!"}),o("h3",{style:{fontStyle:"italic"},children:n}),t?o("pre",{style:a,children:t}):null,o("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),h("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",o("code",{style:i,children:"errorElement"})," props on\xA0",o("code",{style:i,children:"<Route>"})]})]})}class g0 extends N.exports.Component{constructor(n){super(n),this.state={location:n.location,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location?{error:n.error,location:n.location}:{error:n.error||t.error,location:t.location}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?o(mp.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function v0(e){let{routeContext:n,match:t,children:r}=e,a=N.exports.useContext(s0);return a&&t.route.errorElement&&(a._deepestRenderedBoundaryId=t.route.id),o(Jt.Provider,{value:n,children:r})}function y0(e,n,t){if(n===void 0&&(n=[]),e==null)if(t!=null&&t.errors)e=t.matches;else return null;let r=e,a=t==null?void 0:t.errors;if(a!=null){let i=r.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));i>=0||me(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,l,s)=>{let c=l.route.id?a==null?void 0:a[l.route.id]:null,f=t?l.route.errorElement||o(h0,{}):null,y=()=>o(v0,{match:l,routeContext:{outlet:i,matches:n.concat(r.slice(0,s+1))},children:c?f:l.route.element!==void 0?l.route.element:i});return t&&(l.route.errorElement||s===0)?o(g0,{location:t.location,component:f,error:c,children:y()}):y()},null)}var jc;(function(e){e.UseRevalidator="useRevalidator"})(jc||(jc={}));var Yi;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Yi||(Yi={}));function x0(e){let n=N.exports.useContext(pp);return n||me(!1),n}function E0(){var e;let n=N.exports.useContext(mp),t=x0(Yi.UseRouteError),r=N.exports.useContext(Jt),a=r.matches[r.matches.length-1];return n||(r||me(!1),a.route.id||me(!1),(e=t.errors)==null?void 0:e[a.route.id])}function N0(e){return m0(e.context)}function Ae(e){me(!1)}function w0(e){let{basename:n="/",children:t=null,location:r,navigationType:a=jn.Pop,navigator:i,static:l=!1}=e;Vr()&&me(!1);let s=n.replace(/^\/*/,"/"),c=N.exports.useMemo(()=>({basename:s,navigator:i,static:l}),[s,i,l]);typeof r=="string"&&(r=Qt(r));let{pathname:f="/",search:y="",hash:v="",state:x=null,key:b="default"}=r,C=N.exports.useMemo(()=>{let k=sp(f,s);return k==null?null:{pathname:k,search:y,hash:v,state:x,key:b}},[s,f,y,v,x,b]);return C==null?null:o(ts.Provider,{value:c,children:o(ho.Provider,{children:t,value:{location:C,navigationType:a}})})}function S0(e){let{children:n,location:t}=e,r=N.exports.useContext(c0),a=r&&!n?r.router.routes:Zi(n);return f0(a,t)}var Lc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Lc||(Lc={}));new Promise(()=>{});function Zi(e,n){n===void 0&&(n=[]);let t=[];return N.exports.Children.forEach(e,(r,a)=>{if(!N.exports.isValidElement(r))return;if(r.type===N.exports.Fragment){t.push.apply(t,Zi(r.props.children,n));return}r.type!==Ae&&me(!1),!r.props.index||!r.props.children||me(!1);let i=[...n,a],l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=Zi(r.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b0(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function C0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function k0(e,n){return e.button===0&&(!n||n==="_self")&&!C0(e)}const F0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function A0(e){let{basename:n,children:t,window:r}=e,a=N.exports.useRef();a.current==null&&(a.current=yh({window:r,v5Compat:!0}));let i=a.current,[l,s]=N.exports.useState({action:i.action,location:i.location});return N.exports.useLayoutEffect(()=>i.listen(s),[i]),o(w0,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:i})}const Re=N.exports.forwardRef(function(n,t){let{onClick:r,relative:a,reloadDocument:i,replace:l,state:s,target:c,to:f,preventScrollReset:y}=n,v=b0(n,F0),x=u0(f,{relative:a}),b=R0(f,{replace:l,state:s,target:c,preventScrollReset:y,relative:a});function C(k){r&&r(k),k.defaultPrevented||b(k)}return o("a",{...v,href:x,onClick:i?r:C,ref:t,target:c})});var Ic;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ic||(Ic={}));var Mc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mc||(Mc={}));function R0(e,n){let{target:t,replace:r,state:a,preventScrollReset:i,relative:l}=n===void 0?{}:n,s=d0(),c=go(),f=fp(e,{relative:l});return N.exports.useCallback(y=>{if(k0(y,t)){y.preventDefault();let v=r!==void 0?r:Mr(c)===Mr(f);s(e,{replace:v,state:a,preventScrollReset:i,relative:l})}},[c,s,f,r,a,t,e,i,l])}var hp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qc=Ke.createContext&&Ke.createContext(hp),Vn=globalThis&&globalThis.__assign||function(){return Vn=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Vn.apply(this,arguments)},P0=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};function gp(e){return e&&e.map(function(n,t){return Ke.createElement(n.tag,Vn({key:t},n.attr),gp(n.child))})}function Qe(e){return function(n){return o(T0,{...Vn({attr:Vn({},e.attr)},n),children:gp(e.child)})}}function T0(e){var n=function(t){var r=e.attr,a=e.size,i=e.title,l=P0(e,["attr","size","title"]),s=a||t.size||"1em",c;return t.className&&(c=t.className),e.className&&(c=(c?c+" ":"")+e.className),h("svg",{...Vn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:c,style:Vn(Vn({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),children:[i&&o("title",{children:i}),e.children]})};return qc!==void 0?o(qc.Consumer,{children:function(t){return n(t)}}):n(hp)}function _0(e){return Qe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function O0(e){return Qe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"}}]})(e)}function D0(e){return Qe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"}}]})(e)}function z0(e){return Qe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M0.32 15.406v5.248h8.736v1.76h6.976v-1.76h15.649v-10.495h-31.36v5.248zM9.055 15.406v3.488h-1.76v-5.216h-1.697v5.216h-3.582v-6.976h7.039v3.488zM17.779 15.412l-0.019 3.488-3.425-0.012v1.766h-3.582v-8.736h7.039l-0.012 3.494zM29.983 15.406v3.488h-1.76v-5.216h-1.76v5.248l-1.76-0.038v-5.21h-1.697v5.216h-3.519v-6.976h10.495v3.488zM14.335 15.406v1.728h1.634v-3.457h-1.634v1.728z"}}]})(e)}function j0(e){return Qe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M31.641 21.161c-0.109-0.911-0.578-1.618-1.286-2.172-0.82-0.641-1.78-0.905-2.803-0.947-0.834-0.034-1.65 0.090-2.437 0.376-0.224 0.081-0.444 0.177-0.67 0.268-0.030-0.055-0.062-0.107-0.088-0.162-0.232-0.474-0.512-0.927-0.573-1.47-0.044-0.386-0.098-0.772-0.006-1.153 0.088-0.367 0.204-0.728 0.312-1.091 0.056-0.187 0.017-0.291-0.161-0.375-0.062-0.029-0.129-0.055-0.197-0.065-0.438-0.063-0.869-0.027-1.293 0.096-0.15 0.044-0.259 0.128-0.292 0.294-0.019 0.095-0.058 0.186-0.084 0.28-0.111 0.391-0.189 0.789-0.368 1.161-0.449 0.934-0.96 1.832-1.485 2.724-0.057 0.096-0.116 0.191-0.188 0.308-0.184-0.385-0.38-0.73-0.44-1.136-0.067-0.458-0.12-0.915-0.006-1.37 0.085-0.339 0.196-0.672 0.298-1.006 0.049-0.159 0.026-0.242-0.118-0.326-0.073-0.042-0.155-0.080-0.237-0.092-0.454-0.067-0.901-0.032-1.338 0.11-0.136 0.044-0.207 0.132-0.249 0.272-0.122 0.413-0.226 0.836-0.397 1.229-0.694 1.59-1.407 3.172-2.12 4.753-0.149 0.33-0.323 0.649-0.491 0.97-0.043 0.082-0.104 0.153-0.157 0.23-0.043-0.050-0.059-0.085-0.059-0.119 0.001-0.203-0.023-0.413 0.016-0.609 0.117-0.594 0.252-1.186 0.395-1.775 0.117-0.486 0.254-0.968 0.385-1.452 0.044-0.162 0.045-0.313-0.072-0.449-0.195-0.228-0.603-0.278-0.845-0.102-0.026 0.019-0.057 0.032-0.107 0.061 0.009-0.077 0.014-0.125 0.021-0.173 0.051-0.37 0.061-0.738-0.040-1.103-0.127-0.454-0.45-0.715-0.921-0.701-0.22 0.007-0.45 0.044-0.653 0.124-0.855 0.335-1.512 0.928-2.071 1.642-0.051 0.065-0.118 0.124-0.189 0.163-0.723 0.401-1.449 0.797-2.174 1.195-0.271 0.148-0.542 0.297-0.807 0.442-0.216-0.207-0.413-0.421-0.637-0.603-0.682-0.556-1.375-1.098-2.061-1.648-0.608-0.487-1.198-0.995-1.649-1.64-0.336-0.48-0.552-1.005-0.572-1.599-0.026-0.756 0.188-1.447 0.573-2.091 0.493-0.823 1.164-1.483 1.903-2.082 0.781-0.633 1.626-1.17 2.502-1.66 1.225-0.686 2.486-1.293 3.837-1.694 1.386-0.411 2.791-0.646 4.241-0.482 0.57 0.064 1.123 0.195 1.632 0.474 0.389 0.213 0.708 0.492 0.857 0.929 0.146 0.43 0.142 0.865 0.040 1.301-0.206 0.883-0.69 1.612-1.299 2.263-0.998 1.067-2.216 1.793-3.588 2.273-0.791 0.277-1.605 0.451-2.441 0.521-0.682 0.057-1.35-0.003-1.996-0.241-0.428-0.157-0.8-0.398-1.1-0.747-0.054-0.063-0.122-0.13-0.222-0.072-0.098 0.057-0.115 0.151-0.082 0.245 0.055 0.157 0.105 0.319 0.191 0.459 0.214 0.351 0.527 0.606 0.871 0.825 0.661 0.42 1.399 0.561 2.165 0.594 1.162 0.050 2.296-0.123 3.413-0.435 1.596-0.445 2.983-1.231 4.096-2.471 0.927-1.032 1.588-2.198 1.73-3.605 0.069-0.687-0.004-1.36-0.326-1.986-0.349-0.679-0.903-1.147-1.566-1.494-0.964-0.506-2.006-0.705-3.081-0.763-0.359-0-0.718-0-1.077-0-1.303 0.063-2.562 0.337-3.786 0.782-0.926 0.337-1.835 0.717-2.717 1.157-1.921 0.96-3.71 2.108-5.179 3.699-0.732 0.793-1.352 1.663-1.708 2.693-0.104 0.302-0.168 0.622-0.243 0.934-0.006 0.026 0.023 0.051-0.041 0.077 0 0.147 0 0.293 0 0.44 0.064 0.113 0.071 0.225 0.1 0.338 0.189 0.733 0.578 1.363 1.060 1.937 0.687 0.818 1.518 1.476 2.38 2.096 0.747 0.537 1.505 1.062 2.255 1.595 0.129 0.091 0.248 0.197 0.388 0.309-0.12 0.065-0.221 0.122-0.325 0.175-0.99 0.502-1.942 1.065-2.82 1.747-0.529 0.411-1.041 0.848-1.402 1.418-0.581 0.918-0.787 1.896-0.354 2.94 0.127 0.305 0.32 0.569 0.592 0.763 0.088 0.063 0.187 0.126 0.29 0.15 0.264 0.062 0.534 0.103 0.802 0.152 0.253-0 0.505-0 0.758-0 0.839-0.075 1.602-0.362 2.291-0.838 1.078-0.744 1.804-1.741 2.117-3.022 0.227-0.93 0.236-1.862-0.031-2.788-0.025-0.086-0.056-0.17-0.089-0.253s-0.071-0.164-0.116-0.268c0.572-0.329 1.146-0.659 1.719-0.989 0.009 0.007 0.017 0.015 0.026 0.022-0.031 0.102-0.064 0.204-0.093 0.308-0.204 0.746-0.34 1.505-0.291 2.279 0.052 0.825 0.282 1.597 0.765 2.287 0.39 0.558 1.321 0.578 1.736 0.019 0.147-0.199 0.29-0.406 0.397-0.628 0.28-0.579 0.54-1.168 0.807-1.753 0.012-0.025 0.022-0.050 0.047-0.107-0.019 0.277-0.042 0.52-0.052 0.764-0.016 0.38 0.006 0.758 0.136 1.12 0.111 0.31 0.3 0.541 0.655 0.581 0.242 0.028 0.436-0.083 0.614-0.224 0.279-0.22 0.505-0.491 0.673-0.8 0.475-0.873 0.963-1.74 1.394-2.635 0.466-0.968 0.873-1.964 1.306-2.948 0.024-0.054 0.045-0.109 0.072-0.175 0.102 0.402 0.174 0.795 0.305 1.168 0.152 0.432 0.341 0.854 0.547 1.264 0.097 0.194 0.086 0.32-0.049 0.482-0.564 0.68-1.118 1.368-1.673 2.056-0.123 0.152-0.245 0.306-0.347 0.472-0.062 0.101-0.103 0.223-0.12 0.341-0.033 0.225 0.105 0.441 0.346 0.493 0.219 0.047 0.453 0.065 0.677 0.048 0.774-0.057 1.477-0.329 2.099-0.789 0.805-0.597 1.064-1.41 0.869-2.375-0.053-0.262-0.146-0.517-0.237-0.769-0.041-0.114-0.043-0.194 0.031-0.3 0.644-0.919 1.194-1.895 1.705-2.892 0.020-0.039 0.041-0.079 0.076-0.121 0.166 0.863 0.415 1.694 0.862 2.448-0.228 0.22-0.454 0.419-0.658 0.639-0.45 0.483-0.84 1.009-1.043 1.649-0.087 0.276-0.155 0.556-0.116 0.852 0.061 0.458 0.436 0.755 0.886 0.651 0.963-0.223 1.795-0.677 2.403-1.481 0.409-0.541 0.446-1.145 0.275-1.778-0.047-0.172-0.103-0.341-0.163-0.539 0.238-0.074 0.47-0.162 0.709-0.217 1.245-0.284 2.476-0.234 3.675 0.215 0.7 0.262 1.266 0.702 1.601 1.393 0.41 0.845 0.183 1.646-0.613 2.18-0.074 0.050-0.159 0.089-0.221 0.151-0.038 0.038-0.060 0.115-0.051 0.167 0.005 0.031 0.087 0.069 0.133 0.069 0.262-0.002 0.474-0.139 0.678-0.28 0.511-0.353 0.848-0.829 0.928-1.454 0.002-0.018-0.024-0.035 0.040-0.052 0-0.139 0-0.277 0-0.416-0.064-0.017-0.037-0.034-0.039-0.052zM7.286 22.851c-0.083 1.115-0.588 2.019-1.414 2.75-0.465 0.412-0.997 0.705-1.618 0.808-0.225 0.037-0.455 0.046-0.674-0.047-0.311-0.133-0.381-0.409-0.387-0.704-0.009-0.469 0.155-0.893 0.38-1.296 0.294-0.526 0.725-0.927 1.185-1.301 0.725-0.59 1.512-1.090 2.317-1.561 0.013-0.008 0.029-0.012 0.061-0.025 0.124 0.46 0.184 0.914 0.149 1.377zM13.576 18.006c-0.059 0.356-0.132 0.712-0.236 1.057-0.36 1.194-0.821 2.352-1.32 3.493-0.092 0.211-0.226 0.404-0.343 0.604-0.018 0.031-0.045 0.058-0.071 0.084-0.144 0.143-0.282 0.135-0.355-0.052-0.085-0.217-0.137-0.449-0.182-0.679-0.030-0.154-0.023-0.316-0.032-0.474 0.010-1.123 0.352-2.145 0.934-3.095 0.24-0.392 0.501-0.765 0.899-1.014 0.123-0.076 0.26-0.137 0.399-0.177 0.212-0.060 0.343 0.039 0.308 0.252zM17.867 23.473c0.514-0.6 1.027-1.199 1.542-1.801 0.064 0.669-1.072 2.004-1.542 1.801zM22.793 22.262c-0.109 0.062-0.228 0.108-0.34 0.165-0.102 0.053-0.136-0-0.139-0.088-0.002-0.060 0.007-0.122 0.023-0.18 0.208-0.735 0.591-1.361 1.162-1.871 0.008-0.008 0.021-0.011 0.040-0.021 0.271 0.758-0.042 1.592-0.747 1.995z"}}]})(e)}function L0(e){return Qe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"}}]})(e)}function I0(e){return Qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(e)}function M0(e){return Qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"}}]})(e)}function q0(e){return Qe({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"}},{tag:"path",attr:{d:"M7.5 8h3v8l-2 -1"}},{tag:"path",attr:{d:"M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"}}]})(e)}function B0(e){return Qe({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.875 7l2.008 5h-.711l-2.008-5h.711zm-5.125.594c-.276 0-.526.041-.75.125a1.542 1.542 0 0 0-.578.375c-.162.166-.287.37-.375.61a2.364 2.364 0 0 0-.133.827c0 .287.04.547.117.781.078.235.196.433.352.594.156.162.346.29.57.383.224.094.48.138.766.133a2.63 2.63 0 0 0 .992-.195l.125.484a1.998 1.998 0 0 1-.492.148 4.381 4.381 0 0 1-.75.07 2.61 2.61 0 0 1-.914-.156 2.207 2.207 0 0 1-.742-.453 1.878 1.878 0 0 1-.485-.742 3.204 3.204 0 0 1-.18-1.023c0-.365.06-.698.18-1 .12-.302.287-.563.5-.782.214-.218.471-.388.774-.507a2.69 2.69 0 0 1 1-.18c.296 0 .536.023.718.07.183.047.315.094.399.14l-.149.493a1.85 1.85 0 0 0-.406-.14 2.386 2.386 0 0 0-.539-.055zM8 8h1v1H8V8zm0 2h1v1H8v-1z"}},{tag:"path",attr:{d:"M15.5 1H.5l-.5.5v13l.5.5h15l.5-.5v-13l-.5-.5zM15 14H1V5h14v9zm0-10H1V2h14v2z"}}]})(e)}function H0(e){return Qe({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"}}]})(e)}function $0(e){return Qe({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"}}]})(e)}const U0="/help-app/assets/r2d2.04952b60.png";function K0(){return h(ue,{children:[h("h1",{className:K.titulo,children:["Skills",o(Re,{to:"/",children:o("img",{src:U0,alt:"r2d2-icon",className:K.r2d2title})})]}),h("div",{className:K.containermain,children:[o("div",{className:K.card,children:o(Re,{to:"/Menuhtml",className:K.icons,children:o(O0,{})})}),o("div",{className:K.card,children:o(Re,{to:"/Menucss",className:K.icons,children:o(D0,{})})}),o("div",{className:K.card,children:o(Re,{to:"/Menureact",className:K.icons,children:o(I0,{})})}),o("div",{className:K.card,children:o(Re,{to:"/Menujs",className:K.icons,children:o(q0,{})})}),o("div",{className:K.card,children:o(Re,{to:"/Menubootstrap",className:K.icons,children:o(L0,{})})}),o("div",{className:K.card,children:o(Re,{to:"/Menutailwind",className:K.icons,children:o(H0,{})})}),o("div",{className:K.card,children:o(Re,{to:"/Menusass",className:K.icons,children:o(j0,{})})}),o("div",{className:K.card,children:o(Re,{to:"/Menugit",className:K.icons,children:o(_0,{})})}),o("div",{className:K.card,children:o(Re,{to:"/Menunpm",className:K.icons,children:o(z0,{})})}),o("div",{className:K.card,children:o(Re,{to:"/Menuvs",className:K.icons,children:o($0,{})})}),o("div",{className:K.card,children:o(Re,{to:"/Menucmd",className:K.icons,children:o(B0,{})})}),o("div",{className:K.card,children:o(Re,{to:"/Menulink",className:K.icons,children:o(M0,{})})})]})]})}var vp={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var r=[],a=0;a<arguments.length;a++){var i=arguments[a];if(!!i){var l=typeof i;if(l==="string"||l==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=t.apply(null,i);s&&r.push(s)}}else if(l==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)n.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(vp);const ae=vp.exports,V0=["xxl","xl","lg","md","sm","xs"],W0="xs",G0=N.exports.createContext({prefixes:{},breakpoints:V0,minBreakpoint:W0});function ve(e,n){const{prefixes:t}=N.exports.useContext(G0);return e||t[n]||n}const Q0={fluid:!1},rs=N.exports.forwardRef(({bsPrefix:e,fluid:n,as:t="div",className:r,...a},i)=>{const l=ve(e,"container"),s=typeof n=="string"?`-${n}`:"-fluid";return o(t,{ref:i,...a,className:ae(r,n?`${l}${s}`:l)})});rs.displayName="Container";rs.defaultProps=Q0;const Qa=N.exports.createContext(null),as=(e,n=null)=>e!=null?String(e):n||null;function el(){return el=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},el.apply(this,arguments)}function yp(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Bc(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function J0(e){var n=X0(e,"string");return typeof n=="symbol"?n:String(n)}function X0(e,n){if(typeof e!="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Y0(e,n,t){var r=N.exports.useRef(e!==void 0),a=N.exports.useState(n),i=a[0],l=a[1],s=e!==void 0,c=r.current;return r.current=s,!s&&c&&i!==n&&l(n),[s?e:i,N.exports.useCallback(function(f){for(var y=arguments.length,v=new Array(y>1?y-1:0),x=1;x<y;x++)v[x-1]=arguments[x];t&&t.apply(void 0,[f].concat(v)),l(f)},[t])]}function os(e,n){return Object.keys(n).reduce(function(t,r){var a,i=t,l=i[Bc(r)],s=i[r],c=yp(i,[Bc(r),r].map(J0)),f=n[r],y=Y0(s,l,e[f]),v=y[0],x=y[1];return el({},c,(a={},a[r]=v,a[f]=x,a))},e)}function nl(e,n){return nl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},nl(e,n)}function Z0(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,nl(e,n)}var eg=/-(.)/g;function ng(e){return e.replace(eg,function(n,t){return t.toUpperCase()})}const tg=e=>e[0].toUpperCase()+ng(e).slice(1);function vo(e,{displayName:n=tg(e),Component:t,defaultProps:r}={}){const a=N.exports.forwardRef(({className:i,bsPrefix:l,as:s=t||"div",...c},f)=>{const y=ve(l,e);return o(s,{ref:f,className:ae(i,y),...c})});return a.defaultProps=r,a.displayName=n,a}const xp=N.exports.forwardRef(({bsPrefix:e,className:n,as:t,...r},a)=>{e=ve(e,"navbar-brand");const i=t||(r.href?"a":"span");return o(i,{...r,ref:a,className:ae(n,e)})});xp.displayName="NavbarBrand";function is(e){return e&&e.ownerDocument||document}function rg(e){var n=is(e);return n&&n.defaultView||window}function ag(e,n){return rg(e).getComputedStyle(e,n)}var og=/([A-Z])/g;function ig(e){return e.replace(og,"-$1").toLowerCase()}var lg=/^ms-/;function da(e){return ig(e).replace(lg,"-ms-")}var sg=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function cg(e){return!!(e&&sg.test(e))}function En(e,n){var t="",r="";if(typeof n=="string")return e.style.getPropertyValue(da(n))||ag(e).getPropertyValue(da(n));Object.keys(n).forEach(function(a){var i=n[a];!i&&i!==0?e.style.removeProperty(da(a)):cg(a)?r+=a+"("+i+") ":t+=da(a)+": "+i+";"}),r&&(t+="transform: "+r+";"),e.style.cssText+=";"+t}var ba={exports:{}},ug="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dg=ug,pg=dg;function Ep(){}function Np(){}Np.resetWarningCache=Ep;var mg=function(){function e(r,a,i,l,s,c){if(c!==pg){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Np,resetWarningCache:Ep};return t.PropTypes=t,t};ba.exports=mg();const Hc={disabled:!1},wp=Ke.createContext(null);var fg=function(n){return n.scrollTop},dr="unmounted",Tn="exited",nn="entering",gn="entered",qr="exiting",kn=function(e){Z0(n,e);function n(r,a){var i;i=e.call(this,r,a)||this;var l=a,s=l&&!l.isMounting?r.enter:r.appear,c;return i.appearStatus=null,r.in?s?(c=Tn,i.appearStatus=nn):c=gn:r.unmountOnExit||r.mountOnEnter?c=dr:c=Tn,i.state={status:c},i.nextCallback=null,i}n.getDerivedStateFromProps=function(a,i){var l=a.in;return l&&i.status===dr?{status:Tn}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(a){var i=null;if(a!==this.props){var l=this.state.status;this.props.in?l!==nn&&l!==gn&&(i=nn):(l===nn||l===gn)&&(i=qr)}this.updateStatus(!1,i)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var a=this.props.timeout,i,l,s;return i=l=s=a,a!=null&&typeof a!="number"&&(i=a.exit,l=a.enter,s=a.appear!==void 0?a.appear:l),{exit:i,enter:l,appear:s}},t.updateStatus=function(a,i){if(a===void 0&&(a=!1),i!==null)if(this.cancelNextCallback(),i===nn){if(this.props.unmountOnExit||this.props.mountOnEnter){var l=this.props.nodeRef?this.props.nodeRef.current:_t.findDOMNode(this);l&&fg(l)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Tn&&this.setState({status:dr})},t.performEnter=function(a){var i=this,l=this.props.enter,s=this.context?this.context.isMounting:a,c=this.props.nodeRef?[s]:[_t.findDOMNode(this),s],f=c[0],y=c[1],v=this.getTimeouts(),x=s?v.appear:v.enter;if(!a&&!l||Hc.disabled){this.safeSetState({status:gn},function(){i.props.onEntered(f)});return}this.props.onEnter(f,y),this.safeSetState({status:nn},function(){i.props.onEntering(f,y),i.onTransitionEnd(x,function(){i.safeSetState({status:gn},function(){i.props.onEntered(f,y)})})})},t.performExit=function(){var a=this,i=this.props.exit,l=this.getTimeouts(),s=this.props.nodeRef?void 0:_t.findDOMNode(this);if(!i||Hc.disabled){this.safeSetState({status:Tn},function(){a.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:qr},function(){a.props.onExiting(s),a.onTransitionEnd(l.exit,function(){a.safeSetState({status:Tn},function(){a.props.onExited(s)})})})},t.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(a,i){i=this.setNextCallback(i),this.setState(a,i)},t.setNextCallback=function(a){var i=this,l=!0;return this.nextCallback=function(s){l&&(l=!1,i.nextCallback=null,a(s))},this.nextCallback.cancel=function(){l=!1},this.nextCallback},t.onTransitionEnd=function(a,i){this.setNextCallback(i);var l=this.props.nodeRef?this.props.nodeRef.current:_t.findDOMNode(this),s=a==null&&!this.props.addEndListener;if(!l||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[l,this.nextCallback],f=c[0],y=c[1];this.props.addEndListener(f,y)}a!=null&&setTimeout(this.nextCallback,a)},t.render=function(){var a=this.state.status;if(a===dr)return null;var i=this.props,l=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=yp(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return o(wp.Provider,{value:null,children:typeof l=="function"?l(a,s):Ke.cloneElement(Ke.Children.only(l),s)})},n}(Ke.Component);kn.contextType=wp;kn.propTypes={};function yt(){}kn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:yt,onEntering:yt,onEntered:yt,onExit:yt,onExiting:yt,onExited:yt};kn.UNMOUNTED=dr;kn.EXITED=Tn;kn.ENTERING=nn;kn.ENTERED=gn;kn.EXITING=qr;const yo=!!(typeof window<"u"&&window.document&&window.document.createElement);var tl=!1,rl=!1;try{var Jo={get passive(){return tl=!0},get once(){return rl=tl=!0}};yo&&(window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,!0))}catch{}function hg(e,n,t,r){if(r&&typeof r!="boolean"&&!rl){var a=r.once,i=r.capture,l=t;!rl&&a&&(l=t.__once||function s(c){this.removeEventListener(n,s,i),t.call(this,c)},t.__once=l),e.addEventListener(n,l,tl?r:i)}e.addEventListener(n,t,r)}function gg(e,n,t,r){var a=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(n,t,a),t.__once&&e.removeEventListener(n,t.__once,a)}function Ja(e,n,t,r){return hg(e,n,t,r),function(){gg(e,n,t,r)}}function vg(e,n,t,r){if(t===void 0&&(t=!1),r===void 0&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(n,t,r),e.dispatchEvent(a)}}function yg(e){var n=En(e,"transitionDuration")||"",t=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*t}function xg(e,n,t){t===void 0&&(t=5);var r=!1,a=setTimeout(function(){r||vg(e,"transitionend",!0)},n+t),i=Ja(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(a),i()}}function Eg(e,n,t,r){t==null&&(t=yg(e)||0);var a=xg(e,t,r),i=Ja(e,"transitionend",n);return function(){a(),i()}}function $c(e,n){const t=En(e,n)||"",r=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*r}function ls(e,n){const t=$c(e,"transitionDuration"),r=$c(e,"transitionDelay"),a=Eg(e,i=>{i.target===e&&(a(),n(i))},t+r)}function ir(...e){return e.filter(n=>n!=null).reduce((n,t)=>{if(typeof t!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return n===null?t:function(...a){n.apply(this,a),t.apply(this,a)}},null)}function Sp(e){e.offsetHeight}var Uc=function(n){return!n||typeof n=="function"?n:function(t){n.current=t}};function Ng(e,n){var t=Uc(e),r=Uc(n);return function(a){t&&t(a),r&&r(a)}}function bp(e,n){return N.exports.useMemo(function(){return Ng(e,n)},[e,n])}function wg(e){return e&&"setState"in e?_t.findDOMNode(e):e!=null?e:null}const ss=Ke.forwardRef(({onEnter:e,onEntering:n,onEntered:t,onExit:r,onExiting:a,onExited:i,addEndListener:l,children:s,childRef:c,...f},y)=>{const v=N.exports.useRef(null),x=bp(v,c),b=S=>{x(wg(S))},C=S=>F=>{S&&v.current&&S(v.current,F)},k=N.exports.useCallback(C(e),[e]),_=N.exports.useCallback(C(n),[n]),g=N.exports.useCallback(C(t),[t]),p=N.exports.useCallback(C(r),[r]),m=N.exports.useCallback(C(a),[a]),E=N.exports.useCallback(C(i),[i]),w=N.exports.useCallback(C(l),[l]);return o(kn,{ref:y,...f,onEnter:k,onEntered:g,onEntering:_,onExit:p,onExited:E,onExiting:m,addEndListener:w,nodeRef:v,children:typeof s=="function"?(S,F)=>s(S,{...F,ref:b}):Ke.cloneElement(s,{ref:b})})}),Sg={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Cp(e,n){const t=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=n[t],a=Sg[e];return r+parseInt(En(n,a[0]),10)+parseInt(En(n,a[1]),10)}const bg={[Tn]:"collapse",[qr]:"collapsing",[nn]:"collapsing",[gn]:"collapse show"},Cg={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Cp},cs=Ke.forwardRef(({onEnter:e,onEntering:n,onEntered:t,onExit:r,onExiting:a,className:i,children:l,dimension:s="height",getDimensionValue:c=Cp,...f},y)=>{const v=typeof s=="function"?s():s,x=N.exports.useMemo(()=>ir(g=>{g.style[v]="0"},e),[v,e]),b=N.exports.useMemo(()=>ir(g=>{const p=`scroll${v[0].toUpperCase()}${v.slice(1)}`;g.style[v]=`${g[p]}px`},n),[v,n]),C=N.exports.useMemo(()=>ir(g=>{g.style[v]=null},t),[v,t]),k=N.exports.useMemo(()=>ir(g=>{g.style[v]=`${c(v,g)}px`,Sp(g)},r),[r,c,v]),_=N.exports.useMemo(()=>ir(g=>{g.style[v]=null},a),[v,a]);return o(ss,{ref:y,addEndListener:ls,...f,"aria-expanded":f.role?f.in:null,onEnter:x,onEntering:b,onEntered:C,onExit:k,onExiting:_,childRef:l.ref,children:(g,p)=>Ke.cloneElement(l,{...p,className:ae(i,l.props.className,bg[g],v==="width"&&"collapse-horizontal")})})});cs.defaultProps=Cg;const mt=N.exports.createContext(null);mt.displayName="NavbarContext";const kp=N.exports.forwardRef(({children:e,bsPrefix:n,...t},r)=>{n=ve(n,"navbar-collapse");const a=N.exports.useContext(mt);return o(cs,{in:!!(a&&a.expanded),...t,children:o("div",{ref:r,className:n,children:e})})});kp.displayName="NavbarCollapse";function kg(e){var n=N.exports.useRef(e);return N.exports.useEffect(function(){n.current=e},[e]),n}function un(e){var n=kg(e);return N.exports.useCallback(function(){return n.current&&n.current.apply(n,arguments)},[n])}const Fg={label:"Toggle navigation"},us=N.exports.forwardRef(({bsPrefix:e,className:n,children:t,label:r,as:a="button",onClick:i,...l},s)=>{e=ve(e,"navbar-toggler");const{onToggle:c,expanded:f}=N.exports.useContext(mt)||{},y=un(v=>{i&&i(v),c&&c()});return a==="button"&&(l.type="button"),o(a,{...l,ref:s,onClick:y,"aria-label":r,className:ae(n,e,!f&&"collapsed"),children:t||o("span",{className:`${e}-icon`})})});us.displayName="NavbarToggle";us.defaultProps=Fg;var Ag=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Rg=typeof document<"u";const Pg=Rg||Ag?N.exports.useLayoutEffect:N.exports.useEffect;var al=new WeakMap,Kc=function(n,t){if(!(!n||!t)){var r=al.get(t)||new Map;al.set(t,r);var a=r.get(n);return a||(a=t.matchMedia(n),a.refCount=0,r.set(a.media,a)),a}};function Tg(e,n){n===void 0&&(n=typeof window>"u"?void 0:window);var t=Kc(e,n),r=N.exports.useState(function(){return t?t.matches:!1}),a=r[0],i=r[1];return Pg(function(){var l=Kc(e,n);if(!l)return i(!1);var s=al.get(n),c=function(){i(l.matches)};return l.refCount++,l.addListener(c),c(),function(){l.removeListener(c),l.refCount--,l.refCount<=0&&(s==null||s.delete(l.media)),l=void 0}},[e]),a}function _g(e){var n=Object.keys(e);function t(s,c){return s===c?c:s?s+" and "+c:c}function r(s){return n[Math.min(n.indexOf(s)+1,n.length-1)]}function a(s){var c=r(s),f=e[c];return typeof f=="number"?f=f-.2+"px":f="calc("+f+" - 0.2px)","(max-width: "+f+")"}function i(s){var c=e[s];return typeof c=="number"&&(c=c+"px"),"(min-width: "+c+")"}function l(s,c,f){var y;if(typeof s=="object")y=s,f=c,c=!0;else{var v;c=c||!0,y=(v={},v[s]=c,v)}var x=N.exports.useMemo(function(){return Object.entries(y).reduce(function(b,C){var k=C[0],_=C[1];return(_==="up"||_===!0)&&(b=t(b,i(k))),(_==="down"||_===!0)&&(b=t(b,a(k))),b},"")},[JSON.stringify(y)]);return Tg(x,f)}return l}var Og=_g({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Xo(e){e===void 0&&(e=is());try{var n=e.activeElement;return!n||!n.nodeName?null:n}catch{return e.body}}function Vc(e,n){if(e.contains)return e.contains(n);if(e.compareDocumentPosition)return e===n||!!(e.compareDocumentPosition(n)&16)}function Dg(){var e=N.exports.useRef(!0),n=N.exports.useRef(function(){return e.current});return N.exports.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),n.current}function zg(e){var n=N.exports.useRef(e);return n.current=e,n}function jg(e){var n=zg(e);N.exports.useEffect(function(){return function(){return n.current()}},[])}function Lg(e){var n=N.exports.useRef(null);return N.exports.useEffect(function(){n.current=e}),n.current}const Ig="data-rr-ui-",Mg="rrUi";function xo(e){return`${Ig}${e}`}function qg(e){return`${Mg}${e}`}function Bg(e=document){const n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}const Wc=xo("modal-open");class ds{constructor({ownerDocument:n,handleContainerOverflow:t=!0,isRTL:r=!1}={}){this.handleContainerOverflow=t,this.isRTL=r,this.modals=[],this.ownerDocument=n}getScrollbarWidth(){return Bg(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(n){}removeModalAttributes(n){}setContainerStyle(n){const t={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",a=this.getElement();n.style={overflow:a.style.overflow,[r]:a.style[r]},n.scrollBarWidth&&(t[r]=`${parseInt(En(a,r)||"0",10)+n.scrollBarWidth}px`),a.setAttribute(Wc,""),En(a,t)}reset(){[...this.modals].forEach(n=>this.remove(n))}removeContainerStyle(n){const t=this.getElement();t.removeAttribute(Wc),Object.assign(t.style,n.style)}add(n){let t=this.modals.indexOf(n);return t!==-1||(t=this.modals.length,this.modals.push(n),this.setModalAttributes(n),t!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t}remove(n){const t=this.modals.indexOf(n);t!==-1&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(n))}isTopModal(n){return!!this.modals.length&&this.modals[this.modals.length-1]===n}}const Fp=N.exports.createContext(yo?window:void 0);Fp.Provider;function Ap(){return N.exports.useContext(Fp)}const Yo=(e,n)=>yo?e==null?(n||is()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function Hg(e,n){const t=Ap(),[r,a]=N.exports.useState(()=>Yo(e,t==null?void 0:t.document));if(!r){const i=Yo(e);i&&a(i)}return N.exports.useEffect(()=>{n&&r&&n(r)},[n,r]),N.exports.useEffect(()=>{const i=Yo(e);i!==r&&a(i)},[e,r]),r}const $g=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Ug(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}let Zo;function Kg(e){return Zo||(Zo=new ds({ownerDocument:e==null?void 0:e.document})),Zo}function Vg(e){const n=Ap(),t=e||Kg(n),r=N.exports.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>t.add(r.current),remove:()=>t.remove(r.current),isTopModal:()=>t.isTopModal(r.current),setDialogRef:N.exports.useCallback(a=>{r.current.dialog=a},[]),setBackdropRef:N.exports.useCallback(a=>{r.current.backdrop=a},[])})}const Rp=N.exports.forwardRef((e,n)=>{let{show:t=!1,role:r="dialog",className:a,style:i,children:l,backdrop:s=!0,keyboard:c=!0,onBackdropClick:f,onEscapeKeyDown:y,transition:v,backdropTransition:x,autoFocus:b=!0,enforceFocus:C=!0,restoreFocus:k=!0,restoreFocusOptions:_,renderDialog:g,renderBackdrop:p=$=>o("div",Object.assign({},$)),manager:m,container:E,onShow:w,onHide:S=()=>{},onExit:F,onExited:R,onExiting:O,onEnter:z,onEntering:q,onEntered:oe}=e,ye=Ug(e,$g);const Se=Hg(E),J=Vg(m),mn=Dg(),Je=Lg(t),[T,j]=N.exports.useState(!t),L=N.exports.useRef(null);N.exports.useImperativeHandle(n,()=>J,[J]),yo&&!Je&&t&&(L.current=Xo()),!v&&!t&&!T?j(!0):t&&T&&j(!1);const H=un(()=>{if(J.add(),ze.current=Ja(document,"keydown",ee),ie.current=Ja(document,"focus",()=>setTimeout(on),!0),w&&w(),b){const $=Xo(document);J.dialog&&$&&!Vc(J.dialog,$)&&(L.current=$,J.dialog.focus())}}),I=un(()=>{if(J.remove(),ze.current==null||ze.current(),ie.current==null||ie.current(),k){var $;($=L.current)==null||$.focus==null||$.focus(_),L.current=null}});N.exports.useEffect(()=>{!t||!Se||H()},[t,Se,H]),N.exports.useEffect(()=>{!T||I()},[T,I]),jg(()=>{I()});const on=un(()=>{if(!C||!mn()||!J.isTopModal())return;const $=Xo();J.dialog&&$&&!Vc(J.dialog,$)&&J.dialog.focus()}),te=un($=>{$.target===$.currentTarget&&(f==null||f($),s===!0&&S())}),ee=un($=>{c&&$.keyCode===27&&J.isTopModal()&&(y==null||y($),$.defaultPrevented||S())}),ie=N.exports.useRef(),ze=N.exports.useRef(),Xt=(...$)=>{j(!0),R==null||R(...$)},ft=v;if(!Se||!(t||ft&&!T))return null;const ht=Object.assign({role:r,ref:J.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ye,{style:i,className:a,tabIndex:-1});let Fn=g?g(ht):o("div",Object.assign({},ht,{children:N.exports.cloneElement(l,{role:"document"})}));ft&&(Fn=o(ft,{appear:!0,unmountOnExit:!0,in:!!t,onExit:F,onExiting:O,onExited:Xt,onEnter:z,onEntering:q,onEntered:oe,children:Fn}));let gt=null;if(s){const $=x;gt=p({ref:J.setBackdropRef,onClick:te}),$&&(gt=o($,{appear:!0,in:!!t,children:gt}))}return o(ue,{children:_t.createPortal(h(ue,{children:[gt,Fn]}),Se)})});Rp.displayName="Modal";const Wg=Object.assign(Rp,{Manager:ds}),Gg={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Qg={[nn]:"show",[gn]:"show"},ps=N.exports.forwardRef(({className:e,children:n,transitionClasses:t={},...r},a)=>{const i=N.exports.useCallback((l,s)=>{Sp(l),r.onEnter==null||r.onEnter(l,s)},[r]);return o(ss,{ref:a,addEndListener:ls,...r,onEnter:i,childRef:n.ref,children:(l,s)=>N.exports.cloneElement(n,{...s,className:ae("fade",e,n.props.className,Qg[l],t[l])})})});ps.defaultProps=Gg;ps.displayName="Fade";const Jg=vo("offcanvas-body"),Xg={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Yg={[nn]:"show",[gn]:"show"},ms=N.exports.forwardRef(({bsPrefix:e,className:n,children:t,...r},a)=>(e=ve(e,"offcanvas"),o(ss,{ref:a,addEndListener:ls,...r,childRef:t.ref,children:(i,l)=>N.exports.cloneElement(t,{...l,className:ae(n,t.props.className,(i===nn||i===qr)&&`${e}-toggling`,Yg[i])})})));ms.defaultProps=Xg;ms.displayName="OffcanvasToggling";const Pp=N.exports.createContext({onHide(){}}),Zg={"aria-label":ba.exports.string,onClick:ba.exports.func,variant:ba.exports.oneOf(["white"])},e1={"aria-label":"Close"},Eo=N.exports.forwardRef(({className:e,variant:n,...t},r)=>o("button",{ref:r,type:"button",className:ae("btn-close",n&&`btn-close-${n}`,e),...t}));Eo.displayName="CloseButton";Eo.propTypes=Zg;Eo.defaultProps=e1;const n1={closeLabel:"Close",closeButton:!1},Tp=N.exports.forwardRef(({closeLabel:e,closeVariant:n,closeButton:t,onHide:r,children:a,...i},l)=>{const s=N.exports.useContext(Pp),c=un(()=>{s==null||s.onHide(),r==null||r()});return h("div",{ref:l,...i,children:[a,t&&o(Eo,{"aria-label":e,variant:n,onClick:c})]})});Tp.defaultProps=n1;const t1={closeLabel:"Close",closeButton:!1},fs=N.exports.forwardRef(({bsPrefix:e,className:n,...t},r)=>(e=ve(e,"offcanvas-header"),o(Tp,{ref:r,...t,className:ae(n,e)})));fs.displayName="OffcanvasHeader";fs.defaultProps=t1;const r1=e=>N.exports.forwardRef((n,t)=>o("div",{...n,ref:t,className:ae(n.className,e)})),a1=r1("h5"),o1=vo("offcanvas-title",{Component:a1});function i1(e,n){return e.classList?!!n&&e.classList.contains(n):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")!==-1}function l1(e,n){e.classList?e.classList.add(n):i1(e,n)||(typeof e.className=="string"?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}var s1=Function.prototype.bind.call(Function.prototype.call,[].slice);function et(e,n){return s1(e.querySelectorAll(n))}function Gc(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function c1(e,n){e.classList?e.classList.remove(n):typeof e.className=="string"?e.className=Gc(e.className,n):e.setAttribute("class",Gc(e.className&&e.className.baseVal||"",n))}const xt={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class _p extends ds{adjustAndStore(n,t,r){const a=t.style[n];t.dataset[n]=a,En(t,{[n]:`${parseFloat(En(t,n))+r}px`})}restore(n,t){const r=t.dataset[n];r!==void 0&&(delete t.dataset[n],En(t,{[n]:r}))}setContainerStyle(n){super.setContainerStyle(n);const t=this.getElement();if(l1(t,"modal-open"),!n.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";et(t,xt.FIXED_CONTENT).forEach(i=>this.adjustAndStore(r,i,n.scrollBarWidth)),et(t,xt.STICKY_CONTENT).forEach(i=>this.adjustAndStore(a,i,-n.scrollBarWidth)),et(t,xt.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(a,i,n.scrollBarWidth))}removeContainerStyle(n){super.removeContainerStyle(n);const t=this.getElement();c1(t,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";et(t,xt.FIXED_CONTENT).forEach(i=>this.restore(r,i)),et(t,xt.STICKY_CONTENT).forEach(i=>this.restore(a,i)),et(t,xt.NAVBAR_TOGGLER).forEach(i=>this.restore(a,i))}}let ei;function u1(e){return ei||(ei=new _p(e)),ei}const d1={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function p1(e){return o(ms,{...e})}function m1(e){return o(ps,{...e})}const hs=N.exports.forwardRef(({bsPrefix:e,className:n,children:t,"aria-labelledby":r,placement:a,responsive:i,show:l,backdrop:s,keyboard:c,scroll:f,onEscapeKeyDown:y,onShow:v,onHide:x,container:b,autoFocus:C,enforceFocus:k,restoreFocus:_,restoreFocusOptions:g,onEntered:p,onExit:m,onExiting:E,onEnter:w,onEntering:S,onExited:F,backdropClassName:R,manager:O,renderStaticNode:z,...q},oe)=>{const ye=N.exports.useRef();e=ve(e,"offcanvas");const{onToggle:Se}=N.exports.useContext(mt)||{},[J,mn]=N.exports.useState(!1),Je=Og(i||"xs","up");N.exports.useEffect(()=>{mn(i?l&&!Je:l)},[l,i,Je]);const T=un(()=>{Se==null||Se(),x==null||x()}),j=N.exports.useMemo(()=>({onHide:T}),[T]);function L(){return O||(f?(ye.current||(ye.current=new _p({handleContainerOverflow:!1})),ye.current):u1())}const H=(ee,...ie)=>{ee&&(ee.style.visibility="visible"),w==null||w(ee,...ie)},I=(ee,...ie)=>{ee&&(ee.style.visibility=""),F==null||F(...ie)},on=N.exports.useCallback(ee=>o("div",{...ee,className:ae(`${e}-backdrop`,R)}),[R,e]),te=ee=>o("div",{...ee,...q,className:ae(n,i?`${e}-${i}`:e,`${e}-${a}`),"aria-labelledby":r,children:t});return h(ue,{children:[!J&&(i||z)&&te({}),o(Pp.Provider,{value:j,children:o(Wg,{show:J,ref:oe,backdrop:s,container:b,keyboard:c,autoFocus:C,enforceFocus:k&&!f,restoreFocus:_,restoreFocusOptions:g,onEscapeKeyDown:y,onShow:v,onHide:T,onEnter:H,onEntering:S,onEntered:p,onExit:m,onExiting:E,onExited:I,manager:L(),transition:p1,backdropTransition:m1,renderBackdrop:on,renderDialog:te})})]})});hs.displayName="Offcanvas";hs.defaultProps=d1;const f1=Object.assign(hs,{Body:Jg,Header:fs,Title:o1}),Op=N.exports.forwardRef((e,n)=>{const t=N.exports.useContext(mt);return o(f1,{ref:n,show:!!(t!=null&&t.expanded),...e,renderStaticNode:!0})});Op.displayName="NavbarOffcanvas";const h1=vo("navbar-text",{Component:"span"}),g1={expand:!0,variant:"light",collapseOnSelect:!1},gs=N.exports.forwardRef((e,n)=>{const{bsPrefix:t,expand:r,variant:a,bg:i,fixed:l,sticky:s,className:c,as:f="nav",expanded:y,onToggle:v,onSelect:x,collapseOnSelect:b,...C}=os(e,{expanded:"onToggle"}),k=ve(t,"navbar"),_=N.exports.useCallback((...m)=>{x==null||x(...m),b&&y&&(v==null||v(!1))},[x,b,y,v]);C.role===void 0&&f!=="nav"&&(C.role="navigation");let g=`${k}-expand`;typeof r=="string"&&(g=`${g}-${r}`);const p=N.exports.useMemo(()=>({onToggle:()=>v==null?void 0:v(!y),bsPrefix:k,expanded:!!y,expand:r}),[k,y,r,v]);return o(mt.Provider,{value:p,children:o(Qa.Provider,{value:_,children:o(f,{ref:n,...C,className:ae(c,k,r&&g,a&&`${k}-${a}`,i&&`bg-${i}`,s&&`sticky-${s}`,l&&`fixed-${l}`)})})})});gs.defaultProps=g1;gs.displayName="Navbar";const v1=Object.assign(gs,{Brand:xp,Collapse:kp,Offcanvas:Op,Text:h1,Toggle:us});var Qc={exports:{}},ol={exports:{}};(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;function t(r){function a(l,s,c,f,y,v){var x=f||"<<anonymous>>",b=v||c;if(s[c]==null)return l?new Error("Required "+y+" `"+b+"` was not specified "+("in `"+x+"`.")):null;for(var C=arguments.length,k=Array(C>6?C-6:0),_=6;_<C;_++)k[_-6]=arguments[_];return r.apply(void 0,[s,c,x,y,b].concat(k))}var i=a.bind(null,!1);return i.isRequired=a.bind(null,!0),i}e.exports=n.default})(ol,ol.exports);(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=i;var t=ol.exports,r=a(t);function a(l){return l&&l.__esModule?l:{default:l}}function i(){for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];function f(){for(var y=arguments.length,v=Array(y),x=0;x<y;x++)v[x]=arguments[x];var b=null;return s.forEach(function(C){if(b==null){var k=C.apply(void 0,v);k!=null&&(b=k)}}),b}return(0,r.default)(f)}e.exports=n.default})(Qc,Qc.exports);function y1(){var e=N.exports.useReducer(function(t){return!t},!1),n=e[1];return n}const vs=N.exports.createContext(null);vs.displayName="NavContext";const Dp=N.exports.createContext(null),x1=["as","disabled"];function E1(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function N1(e){return!e||e.trim()==="#"}function zp({tagName:e,disabled:n,href:t,target:r,rel:a,role:i,onClick:l,tabIndex:s=0,type:c}){e||(t!=null||r!=null||a!=null?e="a":e="button");const f={tagName:e};if(e==="button")return[{type:c||"button",disabled:n},f];const y=x=>{if((n||e==="a"&&N1(t))&&x.preventDefault(),n){x.stopPropagation();return}l==null||l(x)},v=x=>{x.key===" "&&(x.preventDefault(),y(x))};return e==="a"&&(t||(t="#"),n&&(t=void 0)),[{role:i!=null?i:"button",disabled:void 0,tabIndex:n?void 0:s,href:t,target:e==="a"?r:void 0,"aria-disabled":n||void 0,rel:e==="a"?a:void 0,onClick:y,onKeyDown:v},f]}const jp=N.exports.forwardRef((e,n)=>{let{as:t,disabled:r}=e,a=E1(e,x1);const[i,{tagName:l}]=zp(Object.assign({tagName:t,disabled:r},a));return o(l,Object.assign({},a,i,{ref:n}))});jp.displayName="Button";const w1=["as","active","eventKey"];function S1(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Lp({key:e,onClick:n,active:t,id:r,role:a,disabled:i}){const l=N.exports.useContext(Qa),s=N.exports.useContext(vs),c=N.exports.useContext(Dp);let f=t;const y={role:a};if(s){!a&&s.role==="tablist"&&(y.role="tab");const v=s.getControllerId(e!=null?e:null),x=s.getControlledId(e!=null?e:null);y[xo("event-key")]=e,y.id=v||r,f=t==null&&e!=null?s.activeKey===e:t,(f||!(c!=null&&c.unmountOnExit)&&!(c!=null&&c.mountOnEnter))&&(y["aria-controls"]=x)}return y.role==="tab"&&(y["aria-selected"]=f,f||(y.tabIndex=-1),i&&(y.tabIndex=-1,y["aria-disabled"]=!0)),y.onClick=un(v=>{i||(n==null||n(v),e!=null&&l&&!v.isPropagationStopped()&&l(e,v))}),[y,{isActive:f}]}const Ip=N.exports.forwardRef((e,n)=>{let{as:t=jp,active:r,eventKey:a}=e,i=S1(e,w1);const[l,s]=Lp(Object.assign({key:as(a,i.href),active:r},i));return l[xo("active")]=s.isActive,o(t,Object.assign({},i,l,{ref:n}))});Ip.displayName="NavItem";const b1=["as","onSelect","activeKey","role","onKeyDown"];function C1(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}const Jc=()=>{},Xc=xo("event-key"),Mp=N.exports.forwardRef((e,n)=>{let{as:t="div",onSelect:r,activeKey:a,role:i,onKeyDown:l}=e,s=C1(e,b1);const c=y1(),f=N.exports.useRef(!1),y=N.exports.useContext(Qa),v=N.exports.useContext(Dp);let x,b;v&&(i=i||"tablist",a=v.activeKey,x=v.getControlledId,b=v.getControllerId);const C=N.exports.useRef(null),k=m=>{const E=C.current;if(!E)return null;const w=et(E,`[${Xc}]:not([aria-disabled=true])`),S=E.querySelector("[aria-selected=true]");if(!S||S!==document.activeElement)return null;const F=w.indexOf(S);if(F===-1)return null;let R=F+m;return R>=w.length&&(R=0),R<0&&(R=w.length-1),w[R]},_=(m,E)=>{m!=null&&(r==null||r(m,E),y==null||y(m,E))},g=m=>{if(l==null||l(m),!v)return;let E;switch(m.key){case"ArrowLeft":case"ArrowUp":E=k(-1);break;case"ArrowRight":case"ArrowDown":E=k(1);break;default:return}!E||(m.preventDefault(),_(E.dataset[qg("EventKey")]||null,m),f.current=!0,c())};N.exports.useEffect(()=>{if(C.current&&f.current){const m=C.current.querySelector(`[${Xc}][aria-selected=true]`);m==null||m.focus()}f.current=!1});const p=bp(n,C);return o(Qa.Provider,{value:_,children:o(vs.Provider,{value:{role:i,activeKey:as(a),getControlledId:x||Jc,getControllerId:b||Jc},children:o(t,Object.assign({},s,{onKeyDown:g,ref:p,role:i}))})})});Mp.displayName="Nav";const k1=Object.assign(Mp,{Item:Ip}),qp=N.exports.createContext(null);qp.displayName="CardHeaderContext";const F1=vo("nav-item"),A1=["onKeyDown"];function R1(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function P1(e){return!e||e.trim()==="#"}const Bp=N.exports.forwardRef((e,n)=>{let{onKeyDown:t}=e,r=R1(e,A1);const[a]=zp(Object.assign({tagName:"a"},r)),i=un(l=>{a.onKeyDown(l),t==null||t(l)});return P1(r.href)||r.role==="button"?o("a",Object.assign({ref:n},r,a,{onKeyDown:i})):o("a",Object.assign({ref:n},r,{onKeyDown:t}))});Bp.displayName="Anchor";const T1={disabled:!1},ys=N.exports.forwardRef(({bsPrefix:e,className:n,as:t=Bp,active:r,eventKey:a,...i},l)=>{e=ve(e,"nav-link");const[s,c]=Lp({key:as(a,i.href),active:r,...i});return o(t,{...i,...s,ref:l,className:ae(n,e,i.disabled&&"disabled",c.isActive&&"active")})});ys.displayName="NavLink";ys.defaultProps=T1;const _1={justify:!1,fill:!1},xs=N.exports.forwardRef((e,n)=>{const{as:t="div",bsPrefix:r,variant:a,fill:i,justify:l,navbar:s,navbarScroll:c,className:f,activeKey:y,...v}=os(e,{activeKey:"onSelect"}),x=ve(r,"nav");let b,C,k=!1;const _=N.exports.useContext(mt),g=N.exports.useContext(qp);return _?(b=_.bsPrefix,k=s==null?!0:s):g&&({cardHeaderBsPrefix:C}=g),o(k1,{as:t,ref:n,activeKey:y,className:ae(f,{[x]:!k,[`${b}-nav`]:k,[`${b}-nav-scroll`]:k&&c,[`${C}-${a}`]:!!C,[`${x}-${a}`]:!!a,[`${x}-fill`]:i,[`${x}-justified`]:l}),...v})});xs.displayName="Nav";xs.defaultProps=_1;const O1=Object.assign(xs,{Item:F1,Link:ys}),D1="_MenuNav_nqi8q_5",z1="_linkinicio_nqi8q_33",j1="_r2d2_nqi8q_55",ni={MenuNav:D1,linkinicio:z1,r2d2:j1};function L1(){return o(ue,{children:o(v1,{className:ni.MenuNav,children:o(rs,{className:ni.containernav,children:o(O1,{className:"me-auto",children:o(Re,{to:"/",className:ni.linkinicio,children:"INICIO"})})})})})}function I1(){return o("span",{children:"hola"})}function M1(){return h(ue,{children:[o(L1,{}),o(K0,{}),o(N0,{}),o(I1,{})]})}function Hp(e,n){return Array.isArray(e)?e.includes(n):e===n}const Wr=N.exports.createContext({});Wr.displayName="AccordionContext";const Es=N.exports.forwardRef(({as:e="div",bsPrefix:n,className:t,children:r,eventKey:a,...i},l)=>{const{activeEventKey:s}=N.exports.useContext(Wr);return n=ve(n,"accordion-collapse"),o(cs,{ref:l,in:Hp(s,a),...i,className:ae(t,n),children:o(e,{children:N.exports.Children.only(r)})})});Es.displayName="AccordionCollapse";const No=N.exports.createContext({eventKey:""});No.displayName="AccordionItemContext";const $p=N.exports.forwardRef(({as:e="div",bsPrefix:n,className:t,...r},a)=>{n=ve(n,"accordion-body");const{eventKey:i}=N.exports.useContext(No);return o(Es,{eventKey:i,children:o(e,{ref:a,...r,className:ae(t,n)})})});$p.displayName="AccordionBody";function q1(e,n){const{activeEventKey:t,onSelect:r,alwaysOpen:a}=N.exports.useContext(Wr);return i=>{let l=e===t?null:e;a&&(Array.isArray(t)?t.includes(e)?l=t.filter(s=>s!==e):l=[...t,e]:l=[e]),r==null||r(l,i),n==null||n(i)}}const Ns=N.exports.forwardRef(({as:e="button",bsPrefix:n,className:t,onClick:r,...a},i)=>{n=ve(n,"accordion-button");const{eventKey:l}=N.exports.useContext(No),s=q1(l,r),{activeEventKey:c}=N.exports.useContext(Wr);return e==="button"&&(a.type="button"),o(e,{ref:i,onClick:s,...a,"aria-expanded":l===c,className:ae(t,n,!Hp(c,l)&&"collapsed")})});Ns.displayName="AccordionButton";const Up=N.exports.forwardRef(({as:e="h2",bsPrefix:n,className:t,children:r,onClick:a,...i},l)=>(n=ve(n,"accordion-header"),o(e,{ref:l,...i,className:ae(t,n),children:o(Ns,{onClick:a,children:r})})));Up.displayName="AccordionHeader";const Kp=N.exports.forwardRef(({as:e="div",bsPrefix:n,className:t,eventKey:r,...a},i)=>{n=ve(n,"accordion-item");const l=N.exports.useMemo(()=>({eventKey:r}),[r]);return o(No.Provider,{value:l,children:o(e,{ref:i,...a,className:ae(t,n)})})});Kp.displayName="AccordionItem";const Vp=N.exports.forwardRef((e,n)=>{const{as:t="div",activeKey:r,bsPrefix:a,className:i,onSelect:l,flush:s,alwaysOpen:c,...f}=os(e,{activeKey:"onSelect"}),y=ve(a,"accordion"),v=N.exports.useMemo(()=>({activeEventKey:r,onSelect:l,alwaysOpen:c}),[r,l,c]);return o(Wr.Provider,{value:v,children:o(t,{ref:n,...f,className:ae(i,y,s&&`${y}-flush`)})})});Vp.displayName="Accordion";const d=Object.assign(Vp,{Button:Ns,Collapse:Es,Item:Kp,Header:Up,Body:$p});var Wp={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,l={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function p(m){return m instanceof c?new c(m.type,p(m.content),m.alias):Array.isArray(m)?m.map(p):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++i}),p.__id},clone:function p(m,E){E=E||{};var w,S;switch(s.util.type(m)){case"Object":if(S=s.util.objId(m),E[S])return E[S];w={},E[S]=w;for(var F in m)m.hasOwnProperty(F)&&(w[F]=p(m[F],E));return w;case"Array":return S=s.util.objId(m),E[S]?E[S]:(w=[],E[S]=w,m.forEach(function(R,O){w[O]=p(R,E)}),w);default:return m}},getLanguage:function(p){for(;p;){var m=a.exec(p.className);if(m)return m[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,m){p.className=p.className.replace(RegExp(a,"gi"),""),p.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(w){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack)||[])[1];if(p){var m=document.getElementsByTagName("script");for(var E in m)if(m[E].src==p)return m[E]}return null}},isActive:function(p,m,E){for(var w="no-"+m;p;){var S=p.classList;if(S.contains(m))return!0;if(S.contains(w))return!1;p=p.parentElement}return!!E}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(p,m){var E=s.util.clone(s.languages[p]);for(var w in m)E[w]=m[w];return E},insertBefore:function(p,m,E,w){w=w||s.languages;var S=w[p],F={};for(var R in S)if(S.hasOwnProperty(R)){if(R==m)for(var O in E)E.hasOwnProperty(O)&&(F[O]=E[O]);E.hasOwnProperty(R)||(F[R]=S[R])}var z=w[p];return w[p]=F,s.languages.DFS(s.languages,function(q,oe){oe===z&&q!=p&&(this[q]=F)}),F},DFS:function p(m,E,w,S){S=S||{};var F=s.util.objId;for(var R in m)if(m.hasOwnProperty(R)){E.call(m,R,m[R],w||R);var O=m[R],z=s.util.type(O);z==="Object"&&!S[F(O)]?(S[F(O)]=!0,p(O,E,null,S)):z==="Array"&&!S[F(O)]&&(S[F(O)]=!0,p(O,E,R,S))}}},plugins:{},highlightAll:function(p,m){s.highlightAllUnder(document,p,m)},highlightAllUnder:function(p,m,E){var w={callback:E,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",w),w.elements=Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)),s.hooks.run("before-all-elements-highlight",w);for(var S=0,F;F=w.elements[S++];)s.highlightElement(F,m===!0,w.callback)},highlightElement:function(p,m,E){var w=s.util.getLanguage(p),S=s.languages[w];s.util.setLanguage(p,w);var F=p.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(F,w);var R=p.textContent,O={element:p,language:w,grammar:S,code:R};function z(oe){O.highlightedCode=oe,s.hooks.run("before-insert",O),O.element.innerHTML=O.highlightedCode,s.hooks.run("after-highlight",O),s.hooks.run("complete",O),E&&E.call(O.element)}if(s.hooks.run("before-sanity-check",O),F=O.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!O.code){s.hooks.run("complete",O),E&&E.call(O.element);return}if(s.hooks.run("before-highlight",O),!O.grammar){z(s.util.encode(O.code));return}if(m&&r.Worker){var q=new Worker(s.filename);q.onmessage=function(oe){z(oe.data)},q.postMessage(JSON.stringify({language:O.language,code:O.code,immediateClose:!0}))}else z(s.highlight(O.code,O.grammar,O.language))},highlight:function(p,m,E){var w={code:p,grammar:m,language:E};if(s.hooks.run("before-tokenize",w),!w.grammar)throw new Error('The language "'+w.language+'" has no grammar.');return w.tokens=s.tokenize(w.code,w.grammar),s.hooks.run("after-tokenize",w),c.stringify(s.util.encode(w.tokens),w.language)},tokenize:function(p,m){var E=m.rest;if(E){for(var w in E)m[w]=E[w];delete m.rest}var S=new v;return x(S,S.head,p),y(p,S,m,S.head,0),C(S)},hooks:{all:{},add:function(p,m){var E=s.hooks.all;E[p]=E[p]||[],E[p].push(m)},run:function(p,m){var E=s.hooks.all[p];if(!(!E||!E.length))for(var w=0,S;S=E[w++];)S(m)}},Token:c};r.Prism=s;function c(p,m,E,w){this.type=p,this.content=m,this.alias=E,this.length=(w||"").length|0}c.stringify=function p(m,E){if(typeof m=="string")return m;if(Array.isArray(m)){var w="";return m.forEach(function(z){w+=p(z,E)}),w}var S={type:m.type,content:p(m.content,E),tag:"span",classes:["token",m.type],attributes:{},language:E},F=m.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(S.classes,F):S.classes.push(F)),s.hooks.run("wrap",S);var R="";for(var O in S.attributes)R+=" "+O+'="'+(S.attributes[O]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+R+">"+S.content+"</"+S.tag+">"};function f(p,m,E,w){p.lastIndex=m;var S=p.exec(E);if(S&&w&&S[1]){var F=S[1].length;S.index+=F,S[0]=S[0].slice(F)}return S}function y(p,m,E,w,S,F){for(var R in E)if(!(!E.hasOwnProperty(R)||!E[R])){var O=E[R];O=Array.isArray(O)?O:[O];for(var z=0;z<O.length;++z){if(F&&F.cause==R+","+z)return;var q=O[z],oe=q.inside,ye=!!q.lookbehind,Se=!!q.greedy,J=q.alias;if(Se&&!q.pattern.global){var mn=q.pattern.toString().match(/[imsuy]*$/)[0];q.pattern=RegExp(q.pattern.source,mn+"g")}for(var Je=q.pattern||q,T=w.next,j=S;T!==m.tail&&!(F&&j>=F.reach);j+=T.value.length,T=T.next){var L=T.value;if(m.length>p.length)return;if(!(L instanceof c)){var H=1,I;if(Se){if(I=f(Je,j,p,ye),!I||I.index>=p.length)break;var ie=I.index,on=I.index+I[0].length,te=j;for(te+=T.value.length;ie>=te;)T=T.next,te+=T.value.length;if(te-=T.value.length,j=te,T.value instanceof c)continue;for(var ee=T;ee!==m.tail&&(te<on||typeof ee.value=="string");ee=ee.next)H++,te+=ee.value.length;H--,L=p.slice(j,te),I.index-=j}else if(I=f(Je,0,L,ye),!I)continue;var ie=I.index,ze=I[0],Xt=L.slice(0,ie),ft=L.slice(ie+ze.length),ht=j+L.length;F&&ht>F.reach&&(F.reach=ht);var Fn=T.prev;Xt&&(Fn=x(m,Fn,Xt),j+=Xt.length),b(m,Fn,H);var gt=new c(R,oe?s.tokenize(ze,oe):ze,J,ze);if(T=x(m,Fn,gt),ft&&x(m,T,ft),H>1){var $={cause:R+","+z,reach:ht};y(p,m,E,T.prev,j,$),F&&$.reach>F.reach&&(F.reach=$.reach)}}}}}}function v(){var p={value:null,prev:null,next:null},m={value:null,prev:p,next:null};p.next=m,this.head=p,this.tail=m,this.length=0}function x(p,m,E){var w=m.next,S={value:E,prev:m,next:w};return m.next=S,w.prev=S,p.length++,S}function b(p,m,E){for(var w=m.next,S=0;S<E&&w!==p.tail;S++)w=w.next;m.next=w,w.prev=m,p.length-=S}function C(p){for(var m=[],E=p.head.next;E!==p.tail;)m.push(E.value),E=E.next;return m}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(p){var m=JSON.parse(p.data),E=m.language,w=m.code,S=m.immediateClose;r.postMessage(s.highlight(w,s.languages[E],E)),S&&r.close()},!1)),s;var k=s.util.currentScript();k&&(s.filename=k.src,k.hasAttribute("data-manual")&&(s.manual=!0));function _(){s.manual||s.highlightAll()}if(!s.manual){var g=document.readyState;g==="loading"||g==="interactive"&&k&&k.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return s}(n);e.exports&&(e.exports=t),typeof ws<"u"&&(ws.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(a,i){var l={};l["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};s["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var c={};c[a]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(r,a){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"language-"+a],inside:t.languages[a]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(r){var a=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+a.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+a.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+a.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+a.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:a,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading\u2026",a=function(k,_){return"\u2716 Error "+k+" while fetching file: "+_},i="\u2716 Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",c="loading",f="loaded",y="failed",v="pre[data-src]:not(["+s+'="'+f+'"]):not(['+s+'="'+c+'"])';function x(k,_,g){var p=new XMLHttpRequest;p.open("GET",k,!0),p.onreadystatechange=function(){p.readyState==4&&(p.status<400&&p.responseText?_(p.responseText):p.status>=400?g(a(p.status,p.statusText)):g(i))},p.send(null)}function b(k){var _=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(k||"");if(_){var g=Number(_[1]),p=_[2],m=_[3];return p?m?[g,Number(m)]:[g,void 0]:[g,g]}}t.hooks.add("before-highlightall",function(k){k.selector+=", "+v}),t.hooks.add("before-sanity-check",function(k){var _=k.element;if(_.matches(v)){k.code="",_.setAttribute(s,c);var g=_.appendChild(document.createElement("CODE"));g.textContent=r;var p=_.getAttribute("data-src"),m=k.language;if(m==="none"){var E=(/\.(\w+)$/.exec(p)||[,"none"])[1];m=l[E]||E}t.util.setLanguage(g,m),t.util.setLanguage(_,m);var w=t.plugins.autoloader;w&&w.loadLanguages(m),x(p,function(S){_.setAttribute(s,f);var F=b(_.getAttribute("data-range"));if(F){var R=S.split(/\r\n?|\n/g),O=F[0],z=F[1]==null?R.length:F[1];O<0&&(O+=R.length),O=Math.max(0,Math.min(O-1,R.length)),z<0&&(z+=R.length),z=Math.max(0,Math.min(z,R.length)),S=R.slice(O,z).join(`
`),_.hasAttribute("data-start")||_.setAttribute("data-start",String(O+1))}g.textContent=S,t.highlightElement(g)},function(S){_.setAttribute(s,y),g.textContent=S})}}),t.plugins.fileHighlight={highlight:function(_){for(var g=(_||document).querySelectorAll(v),p=0,m;m=g[p++];)t.highlightElement(m)}};var C=!1;t.fileHighlight=function(){C||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),C=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Wp);const B1=Wp.exports;function A({code:e,language:n}){return N.exports.useEffect(()=>{B1.highlightAll()},[]),o("div",{className:"Code",children:o("pre",{children:o("code",{className:`language-${n}`,children:e})})})}const H1="_acordion_y5o85_9",$1="_item_y5o85_41",U1="_containercode_y5o85_49",K1="_semantic_y5o85_73",V1="_boxmodel_y5o85_81",W1="_imghtml_y5o85_89",u={acordion:H1,item:$1,containercode:U1,semantic:K1,boxmodel:V1,imghtml:W1},G1="/help-app/assets/semantichtml.9c49ba0d.png";function Q1(){const e=`<b>Texto en negrita</b>
  <i>Texto en cursiva</i>
  <s>Texto tachado</s>
  <del>Texto eliminado</del>
  <ins>Texto insertado</ins>
  <sub>Texto de sub\xEDndice</sub>
  <sup>Texto en super\xEDndice</sup>
  <small>Texto peque\xF1o</small>
  <mark>Texto marcado</mark>
  <strong>Texto importante</strong>  
  <em>Texto enfatizado</em>
  `,n=`<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>

<!-- M\xE1s conocida como lista ordenada -->
<ol>
 <li>Elemento 1</li>
 <li>Elemento 2</li>
 ...
 <li>Elemento N</li>
</ol>
  `,t=`<table></table> Comienzo y final de una tabla.
  <tr></tr> Comienzo y final de una fila.
  <td></td> Contenido de una celda
  <th>Mascota</th> Define la fila de encabezado
  `,r=`<form action="recibir.html" method="GET">
  <label for="curso">Curso: </label>
  <input id="curso" type="text" placeholder="Ingrese un curso" name="curso">
  <button type="submit">Enviar</button>
</form>
  `;return h(ue,{children:[o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"FORMATO TEXTO HTML"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:e,language:"html"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"ESTRUCTURA SEM\xC1NTICA HTML"}),o(d.Body,{className:u.acordionbody,children:o("img",{src:G1,alt:"html-semantic",className:u.semantic})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"LISTAS E INDICES"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:n,language:"html"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"TABLAS HTML"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:t,language:"html"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"FORMULARIO HTML"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:r,language:"html"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"SEO HTML"}),h(d.Body,{className:u.acordionbody,children:[o("h3",{children:"Tama\xF1o del t\xEDtulo"}),o("p",{children:"Al momento de realizar el HTML para SEO, se debe procurar que el tama\xF1o de t\xEDtulo no sea demasiado excesivo; en este sentido, 70 caracteres se considera un tama\xF1o aceptable, esto equivale a un total de 13 o 15 palabras. Por otro lado, un t\xEDtulo extremadamente corto tampoco es ideal, tampoco los duplicados y plagiados."}),o("h3",{children:"Palabras clave"}),o("p",{children:"Las palabras clave casi siempre deben estar en los encabezados de cada art\xEDculo para que puedan ser posicionados. Esto significa que deben aparecer preferiblemente al principio de las diferentes los H1, H2, H3, entre otros. Recuerda que los t\xEDtulos e im\xE1genes tambi\xE9n deben poseer las keywords o longtails que se vayan a utilizar, esto te ayudara a optimizar tu HTML para SEO."}),o("h3",{children:"Enlaces y anchor text"}),o("p",{children:"Puedes realizar tanto enlaces internos, llevando a los usuarios a link con informaci\xF3n de tu p\xE1gina que pueda ser de inter\xE9s, como externos, perteneciente a otros sitios webs. Con estos \xFAltimos, hay que tener cuidado al momento de realizar el c\xF3digo, ya que si no se especifica que se debe abrir el enlace en una pesta\xF1a distinta, se cargar\xE1 el link en tu p\xE1gina; esto significa que autom\xE1ticamente el usuario saldr\xE1 de tu dominio, perdiendo as\xED un potencial cliente. Por otro lado, hay que evitar colocar muchos enlaces salientes pues al igual que el caso anterior, el visitante puede perder el inter\xE9s en tu dominio y lo que ofreces. El n\xFAmero de links internos y externos deben ser equilibrados."}),o("h3",{children:"El uso de negritas"}),o("p",{children:"Algo que debes tener en cuenta cuando realices una optimizaci\xF3n HTML para SEO es que al crear la etiqueta que resalta las palabras en negrita, las mismas deben referirse a palabras claves o aspectos del contenido que sean extremadamente importantes para la audiencia. Sin embargo, hay que tener cuidado al aplicar este recurso pues hay quienes lo utilizan de manera excesiva, logrando que sea visualmente molesto."}),o("h3",{children:"Mapa del sitio"}),o("p",{children:"Los mapas del sitio ordenan todos los links de un dominio en una jerarqu\xEDa entendible tanto para el buscador como para el usuario. Los robots entrar\xE1n en tu home y a trav\xE9s de los diferentes mapas explorar\xE1n el sitio web, accediendo as\xED al contenido completo que se ofrece. Todo esto significa que los enlaces y sus cruces permitir\xE1n que tu web sea posicionada y visualizada."}),o("h3",{children:"Implementar un icono de p\xE1gina"}),o("p",{children:"Un icono de p\xE1gina, tambi\xE9n llamado favicon, se trata de una imagen peque\xF1a que permite a los usuarios asociar el icono a un sitio web espec\xEDfico. La mayor\xEDa de los navegadores actuales admiten este tipo de elementos, los cuales son visibles en los encabezados de las pesta\xF1as. Adem\xE1s de darle un aspecto profesional y personalidad a tu web, lo resalta en la barra de navegaci\xF3n, haciendo que se distinga de otras pesta\xF1as que el usuario tenga abiertas. El atributo type puede variar seg\xFAn sea un gif, una imagen png o jpg/jpeg. Este c\xF3digo debe estar dentro de la etiqueta head de la p\xE1gina web."}),o("h3",{children:"Jerarqu\xEDa de los encabezados"}),o("p",{children:"Realizar una optimizaci\xF3n HTML para SEO requiere que jerarquices los encabezados para que el contenido sea m\xE1s coherente y entendible para los usuarios y los buscadores. Las etiquetas que podr\xEDas utilizar van desde el H1 hasta el H6, siendo el primero el de mayor importancia. Sin embargo, solo se utilizan los H1 para los t\xEDtulos, mientras que los H2 y H3 se usan m\xE1s para los subt\xEDtulos. Las etiquetas m\xE1s importantes deben poseer la palabra clave con la que se busca el posicionar una p\xE1gina. En este sentido, los expertos recomiendan que solo haya un H1 por cada documento web. Al igual que con otros elementos de HTML para SEO, no hay que abusar de los encabezados, deben ser colocados cada pocos cientos de palabras, preferiblemente 300 o 400. El lector no se ver\xE1 abrumado por el texto, adem\xE1s de ayudar a ordenar el contenido y la informaci\xF3n que se quieren brindar."}),o("h3",{children:"Ficheros HTML y errores"}),o("p",{children:"Por otro lado, para mejorar la velocidad de carga, hay que reducir los Ficheros HTML. Esto es esencial pues es bien conocido que los usuarios se retiran r\xE1pidamente de una web que tarda m\xE1s de lo esperado en cargar, es una de las principales tasas de abandono. Realizar un buen HTML para SEO requiere que el desarrollador mitigue espacios y textos innecesarios, entre otras acciones."})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"BUENAS PR\xC1CTICAS EN HTML"}),h(d.Body,{className:u.acordionbody,children:[o("h3",{children:"Punto 1: declara el DOCTYPE"}),o("p",{children:"Con el DOCTYPE le indicamos al navegador que est\xE1ndar hemos utilizado para nuestro c\xF3digo HTML, de esa forma el navegador leer\xE1 o interpretar\xE1 m\xE1s bien nuestro documento de una forma u otra. Deber\xEDamos de utilizar siempre el DOCTYPE m\xE1s actualizado, el de HTML5. En algunos c\xF3digos antiguos vereis este DOCTYPE, el cual est\xE1 obsoleto, es de versiones antiguas de HTML"}),o("h3",{children:"Punto n\xFAmero 2: cierra las etiquetas"}),o("p",{children:"Esto es muy importante en HTML, todas las etiquetas tienen que ser cerradas, y adem\xE1s en el mismo orden que fueron abiertas. Pues no, todas no, en HTML5 tenemos excepciones, las etiquetas vac\xEDas, que son esos casos especiales en lo que no necesitan cerrarse. Como por ejemplo la etiqueta, que sirve para hacer un break de la l\xEDnea y que pase al siguiente rengl\xF3n, aqu\xED vemos un ejemplo que est\xE1 mal, y abajo como ser\xEDa correcto, sin cerrarla. Estas etiquetas que no necesitan cerrarse son estas:"}),o("img",{className:u.imghtml,src:"https://uploads-ssl.webflow.com/635a453bdfb49358830950bd/635d2e7996e6efbc885a54e7_4.JPG",alt:"etiquetas-html"}),o("h3",{children:"Punto n\xFAmero 3: escribe las etiquetas en min\xFAsculas"}),o("p",{children:"En realidad si las escribes en may\xFAsculas o min\xFAsculas no afecta al funcionamiento, funciona igual en ambos casos, pero la legibilidad es mejor en min\xFAscula, as\xED que es recomendable siempre escribir las etiquetas, los atributos y los valores en min\xFAscula."}),o("h3",{children:"Punto n\xFAmero 4: pon el atributo ALT en las im\xE1genes"}),o("p",{children:"Esto es algo que se suele pasar muy f\xE1cilmente, poner el atributo alt en las im\xE1genes, porque si bien es cierto que aparentemente no pasa nada si no lo ponemos, el ponerlo mejora mucho la accesibilidad de la web, los lectores de pantalla, por ejemplo usado para personas ciegas, leen ese atributo, y si esa imagen tiene cierta relevancia en la p\xE1gina es necesario que tenga una buena descripci\xF3n en su atributo alt."}),o("h3",{children:"Punto n\xFAmero 5: usa una indentaci\xF3n coherente"}),o("p",{children:"Esto en realidad lo deber\xEDamos de hacer en cualquier lenguaje inform\xE1tico, sin una indentaci\xF3n buena la legibilidad del c\xF3digo se vuelve muy dif\xEDcil. Para el que no lo sepa, indentar es dejar espacios al principio de la l\xEDnea para ver claramente los niveles de anidaci\xF3n del c\xF3digo, en el caso de HTML que etiqueta est\xE1 dentro de otra."}),o("img",{className:u.imghtml,src:"https://uploads-ssl.webflow.com/635a453bdfb49358830950bd/635d2e9961099e83e61d737d_7.JPG",alt:"indexacion-html"}),o("h3",{children:"Punto n\xFAmero 6: no pongas los estilos en el documento de HTML"}),o("p",{children:"Me da igual que sea un simple margin, no tienes perd\xF3n, no pongas los estilos en el html, utiliza clases de CSS y pon los estilos en un archivo CSS."}),o("p",{children:"El HTML es el contenido, y el CSS es el dise\xF1o visual, y son dos cosas que se han de mantener separadas, porque cuando lo hacemos todo junto es mucho m\xE1s dif\xEDcil de leer el c\xF3digo y cada vez se vuelve m\xE1s complicado hacer cambios, lo que hace que tu c\xF3digo no sea muy mantenible."}),o("h3",{children:"Punto n\xFAmero 7: no uses divs para todo"}),o("p",{children:"Hay programadores que tienen la costumbre de usar la etiqueta div para organizar todo el contenido de la p\xE1gina. Pero desde HTML5 tenemos las etiquetas estructurales, que nos sirven para definir cada parte de la p\xE1gina de forma m\xE1s adecuada. Usando estas etiquetas no nos hace falta ponerle clases o IDs a cada elemento para identificarlo o para ponerle un estilo CSS, y mientras menos ID y menos clases tengamos en nuestro c\xF3digo este ser\xE1 m\xE1s peque\xF1o y m\xE1s limpio."}),o("h3",{children:"Punto n\xFAmero 8: no pongas el valor de los atributos booleanos"}),o("p",{children:"En HTML existen lo que se llaman los atributos booleanos, que son aquellos que si los incluyen son true, y si no los incluyes son false. Algunos de estos atributos son checked, selected, disabled, y bueno tenemos algunos m\xE1s."}),o("p",{children:"Aqu\xED podemos ver un ejemplo donde usamos el atributo disabled, solo con ponerlo ya es suficiente, no hace falta que pongamos nada como valor de este atributo."}),o("img",{className:u.imghtml,src:"https://uploads-ssl.webflow.com/635a453bdfb49358830950bd/635d2eb441528a0eb5d8c545_10.JPG",alt:"atributos"}),o("h3",{children:"Punto n\xFAmero 9: indica la codificaci\xF3n de los caracteres"}),o("p",{children:"En el header de la p\xE1gina deber\xEDamos de incluir el meta que indica la codificaci\xF3n de los caracteres, para que el navegador sepa cu\xE1l usar y se nos vean bien todos los caracteres especiales donde se incluye la \xF1. El UTF-8 es el m\xE1s com\xFAn y extendido, si usas este ya te va bien."}),o("h3",{children:"Punto n\xFAmero 10: revisa que etiquetas existen"}),o("p",{children:"Si vas a crear y no sabes que existe una cierta etiqueta para eso, acabar\xE1s usando un div para eso, por ejemplo si quieres hacer una tabla y no sabes que la etiqueta table existe, te har\xE1s con divs, as\xED que un punto es saber qu\xE9 etiquetas existen."}),o("p",{children:"Evidentemente es dif\xEDcil saberse todas las etiquetas que existen, son muchas, pero al menos yo te recomendar\xEDa que le echases un vistazo a la lista de todas etiquetas, te las mirases por encima, veas para qu\xE9 sirven, porque aunque no las memorices, cuando llegue el d\xEDa que tengas que hacer algo concreto para lo cual exista una etiqueta, al menos te acordar\xE1s de que hab\xEDa una etiqueta para ello, y podr\xE1s ir a buscarla. Te dejar\xE9 en la descripci\xF3n un enlace donde podr\xE1s ver la lista de todas las etiquetas:"}),o("a",{href:"https://www.w3schools.com/tags/default.asp",target:"_blanck",children:"https://www.w3schools.com/tags/default.asp"})]})]})})]})}function J1(){const e=`
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>

.container-fluid para un contenedor de ancho completo, que abarque todo el ancho de la ventana gr\xE1fica
<div class="container-fluid">
  ...
</div>

  `,n=`
  <div class="grid text-center">
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  </div>

    Responsive
    Aqu\xED comenzamos con dos columnas en las ventanas m\xE1s estrechas y 
    luego crecemos a tres columnas en las ventanas medianas y superiores.

    <div class="grid text-center">
      <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
      <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
      <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    </div>
      
    `,t=`
    Texto Secundario "descolorido"
    <h3>
    Fancy display heading
    <small class="text-muted">With faded secondary text</small>
    </h3>

    Display funciona como h1 pero "mas fino"
    <h1 class="display-1">Display 1</h1>
    <h1 class="display-2">Display 2</h1>
    <h1 class="display-3">Display 3</h1>

    Cita de Texto
    <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>

    Destacar parrafos
    <p class="lead">
    This is a lead paragraph. It stands out from regular paragraphs.
    </p>

    Text transform 
    <p class="text-lowercase">Lowercased text.</p>
    <p class="text-uppercase">Uppercased text.</p>

    Font-Size
    <p class="fs-1">.fs-1 text</p>
    <p class="fs-2">.fs-2 text</p>
    <p class="fs-3">.fs-3 text</p>
    <p class="fs-4">.fs-4 text</p>
    <p class="fs-5">.fs-5 text</p>
    <p class="fs-6">.fs-6 text</p>
    
    Font weight and italics
    <p class="fw-bold">Bold text.</p>
    <p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
    <p class="fw-semibold">Semibold weight text.</p>
    <p class="fw-normal">Normal weight text.</p>
    <p class="fw-light">Light weight text.</p>
    <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
    <p class="fst-italic">Italic text.</p>
    <p class="fst-normal">Text with normal font style</p>

    Text Decoration
    <p class="text-decoration-underline">This text has a line underneath it.</p>
    <p class="text-decoration-line-through">This text has a line going through it.</p>
    <a href="#" class="text-decoration-none">This link has its text decoration removed</a>
    
      `,r=`
      Las im\xE1genes en Bootstrap se hacen responsivas con .img-fluid. 
      Esto se aplica max-width: 100%;a height: auto;la imagen 
      para que se escale con el ancho principal.
      <img src="..." class="img-fluid" alt="...">

      Miniatura de im\xE1genes
      <img src="..." class="img-thumbnail" alt="...">

      Alinear im\xE1genes
      Alinee las im\xE1genes con las clases flotantes auxiliares 
      o las clases de alineaci\xF3n de texto .
      <img src="..." class="rounded float-start" alt="...">
      <img src="..." class="rounded float-end" alt="...">
      <img src="..." class="rounded float-none" alt="...">
      <img src="..." class="rounded mx-auto d-block" alt="...">

      <div class="text-center">
      <img src="..." class="rounded" alt="...">
      </div>
    
      `,a=`
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    
      `,i=`
      .bg-primary
      .bg-secondary
      .bg-success
      .bg-danger
      .bg-warning
      .bg-info
      .bg-light
      .bg-dark
      .bg-body
      .bg-white
      .bg-transparent

      Background gradient
      .bg-primary.bg-gradient
      .bg-secondary.bg-gradient
      .bg-success.bg-gradient
      .bg-danger.bg-gradient
      .bg-warning.bg-gradient
      .bg-info.bg-gradient
      .bg-light.bg-gradient
      .bg-dark.bg-gradient

      A\xF1adir Opacidad
      <div class="bg-success p-2" style="--bs-bg-opacity: .5;">This is 50% opacity success background</div>
      <div class="bg-success p-2 text-white">This is default success background</div>
      <div class="bg-success p-2 text-white bg-opacity-75">This is 75% opacity success background</div>
      <div class="bg-success p-2 text-dark bg-opacity-50">This is 50% opacity success background</div>
      <div class="bg-success p-2 text-dark bg-opacity-25">This is 25% opacity success background</div>
      <div class="bg-success p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>
    
      `,l=`
      <div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
      <div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
      <div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
      <div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
    
      `,s=`
      <div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
      <div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
      <div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
      <div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
    
      `;return h(ue,{children:[o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"CONTAINER BOOTSTRAP"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:e,language:"html"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"CSS GRID BOOTSTRAP"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:n,language:"html"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"TIPOGRAFIA BOOTSTRAP"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:t,language:"html"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"IM\xC1GENES BOOTSTRAP"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:r,language:"html"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"TABLAS BOOTSTRAP"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:a,language:"html"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"COLORES BOOTSTRAP"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:i,language:"html"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"SOMBRAS BOOTSTRAP"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:l,language:"html"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"OVERFLOW BOOTSTRAP"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:s,language:"html"})})})]})})]})}function X1(){const e=`
  CD
  Este comando es uno de los m\xE1s usados en el S\xEDmbolo del sistema. 
  CD sirve para cambiar de directorio y para mostrar el directorio actual. 
  Si escribes CD .. (dos puntos) espec\xEDficas que quieres ir al directorio superior. 
  Para ir a una ruta exacta hay que introducir CD [/D] [unidad:][ruta].
  
  CLS
  El comando CLS (clear screen) sirve para borrar la pantalla del S\xEDmbolo del sistema.
  
  DEL
  Para eliminar uno o m\xE1s archivos hay que usar el comando DEL. Este comando cuenta 
  con varios valores muy interesantes.
  
  DATE
  Si quieres cambiar la fecha solo tienes que introducir el comando DATE y, 
  seguidamente, te pedir\xE1 el d\xEDa, mes y a\xF1o.
  
  COLOR
  Para cambiar los colores predeterminados de la consola de Windows 
  hay que usar el comando COLOR.
  \u2022	COLOR [attr]
  Attr corresponde al valor del color. Estos son los valores:
  \u2022	0 = negro
  \u2022	1 = azul
  \u2022	2 = verde
  \u2022	3 = aguamarina
  \u2022	4 = rojo
  \u2022	5 = p\xFArpura
  \u2022	6 = amarillo
  \u2022	7 = blanco
  \u2022	8 = gris
  \u2022	9 = azul claro
  \u2022	A = verde claro
  \u2022	B = aguamarina claro
  \u2022	C = rojo claro
  \u2022	D = p\xFArpura claro
  \u2022	E = amarillo claro
  \u2022	F = blanco brillante
  
  MKDIR
  Al igual que MD, con MKDIR puedes crear un directorio.
  \u2022	MKDIR [unidad:]ruta
  
  RD
  Si quieres eliminar un directorio solo tienes que usar el comando RD. 
  Sin embargo, tambi\xE9n puedes hacerlo con el RMDIR.
  \u2022	RMDIR [/S] [/Q] [unidad:]ruta
  \u2022	RD [/S] [/Q] [unidad:]ruta
  El par\xE1metro /S elimina todos los directorios y archivos del directorio, 
  adem\xE1s del mismo directorio. Si a\xF1ades /Q, entonces pide confirmaci\xF3n para quitar un \xE1rbol de directorio.
  
  MOVE
  Pasamos a un comando muy \xFAtil para el d\xEDa a d\xEDa. Si tienes que mover 
  archivos o cambiar el nombre a archivos y directorios, puedes usar MOVE.
  Para Mover uno o m\xE1s archivos:
  \u2022	MOVE [/Y | /-Y] [unidad:][ruta]nombrearchivo1[,...] destino
  Para cambiar el nombre a un directorio:
  \u2022	MOVE [/Y | /-Y] [unidad:][ruta]nombredirectorio1 nombredirectorio2
  
  RENAME
  Al igual que REN, RENAME cambiar el nombre de uno o m\xE1s archivos.
  \u2022	RENAME [unidad:][ruta]archivo1 archivo2
  
  REPLACE
  Reemplazar archivos es posible v\xEDa S\xEDmbolo del sistema mediante el 
  uso del comando REPLACE.
  \u2022	REPLACE [unidad1:][ruta1]archivo [unidad2:][ruta2] [/A] [/P] [/R]
  
  https://www.mundodeportivo.com/urbantecno/windows/todos-comandos-cmd-de-windows-lista-completa
  
  `;return o(ue,{children:o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"COMANDOS B\xC1SICOS CMD"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:e,language:"bash"})})})]})})})}const Y1="/help-app/assets/boxmodel.20119377.png";function Z1(){const e=`
  //Color del Texto
  color: #1162ac;
  color: chocolate;

  //Tipografia
  font-family: helvetica;
  font-family: charlemagne;

  //Tama\xF1o del Texto = Define el tama\xF1o del texto.
  Se puede definir con un tama\xF1o fijo (expresado en p\xEDxeles: px), o con un tama\xF1o escalable (em), 
  que indica la proporci\xF3n respecto al tama\xF1o inicial de la fuente (2em equivale al doble del tama\xF1o inicial).
  font-size: 20px;
  font-size: 2em;

  //Texto en Negrita = Normal = 400, Negrita = 700 normal 
  | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  font-weight: bold;

  //Texto a May\xFAsculas = Convierte a may\xFAsculas manteniendo un tama\xF1o inferior.
  font-variant

  //Texto con sombra = Define una sombra que afecta a un texto a trav\xE9s de 4 par\xE1metros 
  (separaci\xF3n horizontal, separaci\xF3n vertical, suavidad y color).
  El color se puede especificar con c\xF3digo hexadecimal o con el nombre del color (olive, gold, silver...)
  text-shadow: 2px 4px 6px #1162ac;

  //Alineaci\xF3n del Texto
  text-align: center;
  text-align: right;
  
  //Centrado Vertical ]= Sirve para definir la altura de la l\xEDnea donde se muestra un texto y 
  por lo tanto para centrarlo verticalmente.
  El texto s\xF3lo puede ocupar una \xFAnica l\xEDnea y debe estar contenido dentro de un <div>.
  line-height: 70px;

  //Espacio entre letras = Define el espacio entre letras.
  Un valor positivo las aleja entre ellas, mientras que un valor negativo las acerca.
  letter-spacing: 3px;
  letter-spacing: -1px;

  //Espacio entre palabras = Funciona igual que "Espacio entre Letras".
  word-spacing: 10px;
  word-spacing: -5px;

  //Color de Fondo = Define el color de fondo de una caja (o <div>)
  Se puede indicar un color hexadecimal, nombre de color o rgb+a (alpha), 
  donde el 4\xBA valor es la cantidad de transparencia (del 0 al 1).
  background-color: olive;
  background-color: rgba(12,65,32,0.5);

  `,n=`
  //Separaci\xF3n Interna = Define el espacio existente entre el contenido y el borde de la caja.
  Si se especifica un solo valor ser\xE1 utilizado para la separaci\xF3n por los 4 lados. 
  Si se especifican 4 valores ser\xE1n utilizados en orden (arriba, derecha, abajo e izquierda) y 
  se especifican 2 ser\xE1n utilizados (arriba/abajo y derecha/izquierda).

  padding: 20px;
  padding: 20px 0px 6px 40px

  //Margenes y Separaci\xF3n = Define el espacio existente entre cajas (<div>) o bien entre 
  cajas y los m\xE1rgenes de la p\xE1gina.
  Si se especifica un solo valor ser\xE1 utilizado para la separaci\xF3n por 4 lados. S
  i se especifican 4 valores ser\xE1n utilizados en orden (arriba, derecha, abajo e izquierda) y 
  se especifican 2 ser\xE1n utilizados (arriba/abajo y derecha/izquierda).
  
  #caja1{
    margin-left:35px;
    margin-bottom:20px;
  }
  #caja2{
    margin-left:40px;
  }
  
  #caja3{
    margin-left:35px;
    margin-bottom:20px;
  }


//Posicionamiento = Para ubicar un (<div>) en una coordenada concreta antes se tiene 
que definir su posicionamiento (position). Posteriormente, para indicar sus 
coordenadas se puede utilizar left o right para alinearlo horizontalmente desde la izquierda 
o derecha y/o top o bottom para alinearlo desde la parte superior o inferior.

position: relative / absolute / fixed;
left:20px;
right:20px;
top:40px;
bottom:40px;
}

//Sombras = Para definir una sombra a un (<div>) se deben indicar 4 valores. El primero 
y segundo es la separaci\xF3n horizontal y vertical de la sombra (con un n\xFAmero positivo se 
  desplaza hacia derecha/abajo y con uno negativo hacia la izquierda/arriba, mientras que 
  con "0" se sit\xFAa justo en la posici\xF3n del texto). El tercer valor hace referencia a la 
  suavidad del borde de la sombra, mientras que el \xFAltimo valor pertenece al color que 
  tendr\xE1 la sombra.

  box-shadow: 2px 7px 5px gray;
  box-shadow: 0 0 9px red;

//Alinear a la Derecha = Para poder colocar diferentes <div> alineados en la misma 
linea podemos utilizar display:inline-block o float:left o right;.
En este \xFAltimo caso, deberemos tambi\xE9n definir la anchura de cada caja.
Para evitar que el <div> que sigue en el HTML al \xFAltimo se coloque en el hueco 
vacio dejado en la l\xEDnea anterior utilizamos clear:both;.

width:230px;
float: left / right;
clear: both;

//Box-Sizing = Use la propiedad de tama\xF1o de caja para mantener el ancho a 300 px, 
sin importar la cantidad de relleno. Esto hace que el elemento mantenga su ancho; Si aumenta 
el relleno, el espacio de contenido disponible disminuir\xE1.

div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}

  `,t=`
  Longitudes Relativas
  px	P\xEDxeles (relativo al dispositivo)
  em	Relativo al tama\xF1o de la fuente del elemento ( 2em significa 2 veces el tama\xF1o de la fuente actual)
  %	Porcentaje (relativo al elemento padre)
  vh y vw	Medidas relativas de acuerdo al viewport
  1vh = 1% de la altura del viewport
  100vh = altura del viewport

  Longitudes Absolutas
  in	Pulgadas (1pulgada = 2.54 cm)
  cm	Cent\xEDmetros
  mm	Mil\xEDmetros
  pt	Puntos (1pt = 1/72 pulgadas)
  pc	Picas (1pica = 12 puntos)

  `,r=`
  @media screen and (min-width: 400px) and (max-width: 700px) {   
    body{  
    background-color:#555;  
    font-family: Times New Roman;  
    }  
    header h3{  
            text-align:center;  
        }  
     } 
    
  `,a=`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
  }
  `,i=`
  .grid {
    display: grid;
  
    grid-template-columns: 100px repeat(4, 50px) 200px;
    grid-template-rows: repeat(2, 1fr 2fr);
  
    /* Equivalente a... */
    grid-template-columns: 100px 50px 50px 50px 50px 200px;
    grid-template-rows: 1fr 2fr 1fr 2fr;
  }
  `,l=`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    background: grey;
    gap: 10px;
  }
  
  .item {
    background: blue;
    color: #fff;
    font-size: 2rem;
  }
  
  `;return h(ue,{children:[o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"TIPOGRAFIA CSS"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:e,language:"css"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"PADDING MARGIN Y POSICIONAMIENTO CSS"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:n,language:"css"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"BOX MODEL"}),o(d.Body,{className:u.acordionbody,children:o("img",{src:Y1,alt:"modelo-de-caja",className:u.boxmodel})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"UNIDADES DE MEDIDA"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:t,language:"css"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"MEDIA QUERYS"}),h(d.Body,{className:u.acordionbody,children:[o("div",{className:"App",children:o(A,{code:r,language:"css"})}),o("h3",{children:"Tama\xF1os de pantalla comunes"}),h("ul",{children:[o("li",{children:"M\xF3vil: 360 x 640"}),o("li",{children:"M\xF3vil: 375 x 667"}),o("li",{children:"M\xF3vil: 360 x 720"}),o("li",{children:"iPhone X: 375 x 812"}),o("li",{children:"Pixel 2: 411 x 731"}),o("li",{children:"Tableta: 768 x 1024"}),o("li",{children:"Un ordenador port\xE1til: 1366 x 768"}),o("li",{children:"Un ordenador port\xE1til o desktop de alta resoluci\xF3n: 1920 x 1080"})]})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"POSITION"}),h(d.Body,{className:u.acordionbody,children:[o("h5",{children:"A la propiedad position se le pueden indicar los siguientes valores:"}),h("table",{className:"table table-striped",children:[o("thead",{children:h("tr",{children:[o("th",{scope:"col",children:"Valor"}),o("th",{scope:"col",children:"Significado"})]})}),h("tbody",{children:[h("tr",{children:[o("th",{scope:"row",children:"static"}),o("td",{children:"Posicionamiento est\xE1tico. Utiliza el orden natural de los elementos HTML."})]}),h("tr",{children:[o("th",{scope:"row",children:"relative"}),o("td",{children:"Posicionamiento relativo. Los elementos se mueven ligeramente en base a su posici\xF3n est\xE1tica."})]}),h("tr",{children:[o("th",{scope:"row",children:"absolute"}),o("td",{children:"Posicionamiento absoluto. Los elementos se colocan en base al contenedor padre."})]}),h("tr",{children:[o("th",{scope:"row",children:"fixed"}),o("td",{children:"Posicionamiento fijo. Idem al absoluto, pero aunque hagamos scroll no se mueve."})]}),h("tr",{children:[o("th",{scope:"row",children:"sticky"}),o("td",{children:"Posicionamiento \xABpegado\xBB. Similar al relativo, usado para pegar men\xFAs a la parte superior."})]})]})]}),o("br",{}),o("p",{children:"Si utilizamos un modo de posicionamiento diferente al est\xE1tico (absolute, fixed, sticky o relative), podemos utilizar una serie de propiedades para modificar la posici\xF3n de un elemento. Estas propiedades son las siguientes :"}),h("table",{className:"table table-striped",children:[o("thead",{children:h("tr",{children:[o("th",{scope:"col",children:"Propiedad"}),o("th",{scope:"col",children:"Valor"}),o("th",{scope:"col",children:"Significado"})]})}),h("tbody",{children:[h("tr",{children:[o("th",{scope:"row",children:"top"}),o("td",{children:"auto|"}),o("td",{children:"Empuja el elemento una distancia desde la parte superior hacia el inferior."})]}),h("tr",{children:[o("th",{scope:"row",children:"bottom"}),o("td",{children:"auto|"}),o("td",{children:"Empuja el elemento una distancia desde la parte inferior hacia la superior."})]}),h("tr",{children:[o("th",{scope:"row",children:"left"}),o("td",{children:"auto|"}),o("td",{children:"Empuja el elemento una distancia desde la parte izquierda hacia la derecha."})]}),h("tr",{children:[o("th",{scope:"row",children:"right"}),o("td",{children:"auto|"}),o("td",{children:"Empuja el elemento una distancia desde la parte derecha hacia la izquierda."})]}),h("tr",{children:[o("th",{scope:"row",children:"z-index"}),o("td",{children:"auto|"}),o("td",{children:"Coloca un elemento en el eje de profundidad, m\xE1s cerca o m\xE1s lejos del usuario."})]})]})]})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"DISPLAY"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"La propiedad display de CSS permite modificar el comportamiento de un elemento HTML, cambi\xE1ndolo al que le indiquemos, como por ejemplo inline o block todos los elementos de una p\xE1gina web deben tener un tipo de representaci\xF3n, que es la forma en la que se va a comportar. En principio, partimos de dos tipos b\xE1sicos y fundamentales llamados inline y block."}),h("table",{className:"table table-striped",children:[o("thead",{children:h("tr",{children:[o("th",{scope:"col",children:"Valor"}),o("th",{scope:"col",children:"Denominaci\xF3n"}),o("th",{scope:"col",children:"Significado"}),o("th",{scope:"col",children:"Ejemplo"})]})}),h("tbody",{children:[h("tr",{children:[o("th",{scope:"row",children:"inline"}),o("td",{children:"Elemento en linea"}),o("td",{children:"El elemento se coloca a continuaci\xF3n del otro (en horizontal)."}),o("td",{children:'"span"'})]}),h("tr",{children:[o("th",{scope:"row",children:"block"}),o("td",{children:"Elemento en bloque"}),o("td",{children:"El elemento se coloca encima de otro (en vertical)."}),o("td",{children:'"div"'})]})]})]}),o("br",{}),h("table",{className:"table table-striped",children:[o("thead",{children:h("tr",{children:[o("th",{scope:"col",children:"Tipo de Caja"}),o("th",{scope:"col",children:"Caracteristicas"})]})}),h("tbody",{children:[h("tr",{children:[o("th",{scope:"row",children:"block"}),o("td",{children:"Se apila en vertical. Ocupa todo el ancho disponible de su etiqueta contenedora."})]}),h("tr",{children:[o("th",{scope:"row",children:"inline"}),o("td",{children:"Se coloca en horizontal. Se adapta al ancho de su contenido. Ignora width o height."})]}),h("tr",{children:[o("th",{scope:"row",children:"inline-block"}),o("td",{children:"Combinaci\xF3n de los dos anteriores. Se comporta como inline pero no ignora width o height."})]}),h("tr",{children:[o("th",{scope:"row",children:"flex"}),o("td",{children:"Utiliza el modelo de cajas flexibles de CSS. Ideal para estructuras de 1 dimensi\xF3n."})]}),h("tr",{children:[o("th",{scope:"row",children:"inline-flex"}),o("td",{children:"Versi\xF3n en l\xEDnea (ocupa s\xF3lo su contenido) del modelo de cajas flexibles de CSS."})]}),h("tr",{children:[o("th",{scope:"row",children:"grid"}),o("td",{children:"Utiliza cuadr\xEDculas o rejillas con el modelo de cajas Grid CSS."})]}),h("tr",{children:[o("th",{scope:"row",children:"inline-grid"}),o("td",{children:"La versi\xF3n en l\xEDnea (ocupa s\xF3lo su contenido) del modelo de cajas grid css."})]}),h("tr",{children:[o("th",{scope:"row",children:"list-item"}),o("td",{children:'Act\xFAa como un \xEDtem de una lista. Es el comportamiento de etiquetas como "li"'})]}),h("tr",{children:[o("th",{scope:"row",children:"table"}),o("td",{children:'Act\xFAa como una tabla. Es el comportamiento de etiquetas como "table"'})]}),h("tr",{children:[o("th",{scope:"row",children:"table-cell"}),o("td",{children:'Act\xFAa como la celda de una tabla. Es el comportamiento de etiquetas como "th" o "td"'})]}),h("tr",{children:[o("th",{scope:"row",children:"table-row"}),o("td",{children:'Act\xFAa como la fila de una tabla. Es el comportamiento de etiquetas como "tr"'})]}),h("tr",{children:[o("th",{scope:"row",children:"contents"}),o("td",{children:"Ignora la caja del elemento. \xDAtil para mantener Grid/Flex a\xFAn teniendo un wrapper intermedio."})]}),h("tr",{children:[o("th",{scope:"row",children:"none"}),o("td",{children:"Oculta el elemento visualmente, como si no existiera en el HTML."})]})]})]})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"FLEXBOX"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"En general, flex se suele utilizar para estructuras de una sola dimensi\xF3n, es decir, contenedores que s\xF3lo van en una direcci\xF3n. Sin embargo, existe una propiedad denominada flex-wrap con la que podemos especificar un comportamiento especial del contenedor."}),o("br",{}),h("table",{className:"table table-striped",children:[o("thead",{children:h("tr",{children:[o("th",{scope:"col",children:"Propiedad"}),o("th",{scope:"col",children:"Valor"}),o("th",{scope:"col",children:"Significado"})]})}),o("tbody",{children:h("tr",{children:[o("th",{scope:"row",children:"flex-wrap"}),o("td",{children:"nowrap | wrap | wrap-reverse"}),o("td",{children:"Evita o permite el desbordamiento (multilinea)."})]})})]}),o("br",{}),h("table",{className:"table table-striped",children:[o("thead",{children:h("tr",{children:[o("th",{scope:"col",children:"Valor"}),o("th",{scope:"col",children:"Descripci\xF3n"})]})}),h("tbody",{children:[h("tr",{children:[o("th",{scope:"row",children:"no-wrap"}),o("td",{children:"Los \xEDtems se ajustan para ocupar el tama\xF1o del contenedor (no permite desbordamiento en m\xFAltiples l\xEDneas)."})]}),h("tr",{children:[o("th",{scope:"row",children:"wrap"}),o("td",{children:"Establece los \xEDtems en modo multil\xEDnea (permite que se desborde el contenedor)."})]}),h("tr",{children:[o("th",{scope:"row",children:"wrap-reverse"}),o("td",{children:"Establece los \xEDtems en modo multil\xEDnea, pero en direcci\xF3n inversa."})]})]})]})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GRID"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"En Grid CSS, la forma principal de definir una cuadr\xEDcula es indicar el tama\xF1o de sus filas y sus columnas de forma expl\xEDcita. Para ello, s\xF3lo tenemos que usar las propiedades CSS grid-template-columns y grid-template-rows:"}),h("table",{className:"table table-striped",children:[o("thead",{children:h("tr",{children:[o("th",{scope:"col",children:"Propiedad"}),o("th",{scope:"col",children:"Valor"}),o("th",{scope:"col",children:"Descripci\xF3n"})]})}),h("tbody",{children:[h("tr",{children:[o("th",{scope:"row",children:"grid-template-columns"}),o("th",{children:"[col1] [col2] ..."}),o("th",{children:"Establece el  de cada columna (col 1, col 2...)."})]}),h("tr",{children:[o("th",{scope:"row",children:"grid-template-rows"}),o("th",{children:"[fila1] [fila2] ..."}),o("th",{children:"Establece el  de cada fila (fila 1, fila 2...)."})]})]})]})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"UNIDADES FR"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Este nuevo ejemplo, tambi\xE9n crea una cuadr\xEDcula de 2x2, donde el tama\xF1o de la cuadr\xEDcula se divide en:"}),h("ul",{children:[o("li",{children:"Dos columnas: Mismo tama\xF1o de ancho para cada una."}),o("li",{children:"La primera fila ocupar\xE1 el doble (2fr) que la segunda fila (1fr)."})]}),o("div",{className:"App",children:o(A,{code:a,language:"css"})}),o("h4",{children:"Filas y columnas Repetitivas"}),o("p",{children:"La expresi\xF3n a utilizar ser\xEDa la siguiente: repeat(n\xFAmero de veces, tama\xF1o):"}),o("div",{className:"App",children:o(A,{code:i,language:"css"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"FUNCI\xD3N MinMax()"}),o(d.Body,{className:u.acordionbody,children:o("p",{children:"Si establecemos un rango, por ejemplo, grid-template-column: minmax(200px, 500px), estaremos indicando que la celda de columna indicada, tendr\xE1 un tama\xF1o de 500px, salvo que redimensionemos la ventana del navegador y la hagamos m\xE1s peque\xF1a, en cuyo caso, el tama\xF1o de la celda podr\xEDa ir disminuyendo hasta 200px, medida en la cu\xE1l se quedar\xEDa como m\xEDnimo."})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"AUTO FILL / AUTO FIT"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"En la funci\xF3n repeat() es posible utilizar las palabras claves auto-fill o auto-fit para indicar al navegador que queremos que rellene o ajuste el contenedor grid con m\xFAltiples elementos hijos dependiendo del tama\xF1o del viewport (regi\xF3n visible del navegador)."}),o("p",{children:"Es decir, si utilizamos repeat(auto-fill, minmax(300px, 1fr), el navegador se va a encargar de que los elementos hijos con el tama\xF1o m\xEDnimo quepan en la primera fila, y los que no quepan, se desplacen a las siguientes filas del grid, de modo que se aproveche lo mejor posible el contenedor, y consigamos un efecto similar al que se consigue con media queries, pero de una forma m\xE1s directa y con menos c\xF3digo."}),o("div",{className:"App",children:o(A,{code:l,language:"css"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"PROPIEDADES DE ALINEACI\xD3N"}),h(d.Body,{className:u.acordionbody,children:[o("table",{className:"table table-striped",children:h("tbody",{children:[h("tr",{children:[o("th",{scope:"row",children:"justify-items"}),o("th",{children:"start | end | center | stretch"})]}),h("tr",{children:[o("th",{scope:"row",children:"align-items"}),o("th",{children:"start | end | center | stretch"})]}),h("tr",{children:[o("th",{scope:"row",children:"justify-content"}),o("th",{children:"start | end | center | stretch | space-around | space-between | space-evenly"})]}),h("tr",{children:[o("th",{scope:"row",children:"align-content"}),o("th",{children:"start | end | center | stretch | space-around | space-between | space-evenly"})]})]})}),h("ul",{children:[o("li",{children:"justify-items: Alinea los elementos (hijos) en horizontal (eje principal) dentro de cada celda."}),o("li",{children:"align-items: Alinea los elementos (hijos) en vertical (eje principal) dentro de cada celda."}),o("li",{children:"justify-content: Alinea el contenido (la cuadricula) en horizontal (eje secundario) en el contenedor padre."}),o("li",{children:"align-content: Alinea el contenido (la cuadricula) en vertical (eje secundario) en el contenedor padre."})]})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"CENTRAR IMAGEN EN DIV"}),o(d.Body,{className:u.acordionbody,children:o("p",{children:"Para centrar una imagen usando text-align: center; debes colocar el 'img' dentro del elemento de nivel de bloque como es un div. Ya que la propiedad text-align solo aplica a los elementos nivel de bloque, coloque text-align: center; encerrar dentro del elemento nivel de bloque para lograr un 'img' un centrado horizontal."})})]})})]})}function ev(){const e=`git --version
  git config --global user.name "Jonathan MirCha"
  git config --global user.email jonmircha@gmail.com
  git config --global user.ui true
  git config --global init.defaultBranch main
  git config --list
 
  # asignando visual studio code como editor de configuraci\xF3n de git
  git config --global core.editor "code --wait"
  git config --global -e
  
  # para estandarizar los saltos de l\xEDnea en windows
  git config --global core.autocrlf true
  
  # para estandarizar los saltos de l\xEDnea en linux/mac
  git config --global core.autocrlf input
  
  # ver todas las opciones de la configuraci\xF3n en la terminal
  git config -h
  
  # ver todas las opciones de la configuraci\xF3n en el navegador
  git help config
  `,n=`
  git init
  git add .
  git commit \u2013m \u201CFirst commit\u201D
  git branch \u2013M main
  git config --global init.defaultBranch main (definimos que siempre ser\xE1 
  la rama main por defecto en nuestros repositorios)
  git remote add origin git@github.com:sebaguerrero15/repo-name.git
  git push \u2013u origin main
  
  `,t=`
  git clone <https://link-con-nombre-del-repositorio>
  `,r=`
  git branch <nombre-de-la-rama>
  `,a=`
  git push <nombre-remoto> <nombre-rama>
  `,i=`
  git branch
  git branch --list
  `,l=`
  git branch -d <nombre-de-la-rama>
  `,s=`
  git checkout <nombre-de-la-rama>
  `,c=`
  git checkout -b <nombre-de-tu-rama>
  `,f=`
  git status
  `,y=`
  git add <archivo>
  `,v=`
  git add .
  `,x=`
  git commit -m "mensaje de confirmaci\xF3n"
  `,b=`
  git push <nombre-remoto> <nombre-de-tu-rama>
  `,C=`
  git push --set-upstream <nombre-remoto> <nombre-de-tu-rama>
  `,k=`
  git push -u origin <nombre-de-tu-rama>
  `,_=`
  git rm newfile.txt
  `,g=`
  git pull <nombre-remoto>
  `,p=`
  git revert 3321844
  `,m=`
  git checkout dev
  `,E=`
  git fetch
  `,w=`
  git merge <nombre-de-la-rama>
  `;return h(ue,{children:[o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GIT PRIMEROS PASOS"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:e,language:"bash"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"FLUJO B\xC1SICO A\xD1ADIR A REPO EN GITHUB"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:n,language:"bash"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"CLONAR REPO EN GITHUB"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:t,language:"bash"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GIT BRANCH"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Las ramas (branch) son altamente importantes en el mundo de Git. Usando ramas, varios desarrolladores pueden trabajar en paralelo en el mismo proyecto simult\xE1neamente. Podemos usar el comando git branch para crearlas, listarlas y eliminarlas."}),o("div",{className:"App",children:o(A,{code:r,language:"bash"})}),o("p",{children:"Este comando crear\xE1 una rama en local. Para enviar (push) la nueva rama al repositorio remoto, necesitar\xE1s usar el siguiente comando:"}),o("div",{className:"App",children:o(A,{code:a,language:"bash"})}),o("p",{children:"Visualizacion de Ramas:"}),o("div",{className:"App",children:o(A,{code:i,language:"bash"})}),o("p",{children:"Borrar una Rama:"}),o("div",{className:"App",children:o(A,{code:l,language:"bash"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GIT CHECKOUT"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Este es tambi\xE9n uno de los comandos m\xE1s utilizados en Git. Para trabajar en una rama, primero tienes que cambiarte a ella. Usaremos git checkout principalmente para cambiarte de una rama a otra. Tambi\xE9n lo podemos usar para chequear archivos y commits."}),o("div",{className:"App",children:o(A,{code:s,language:"bash"})}),o("p",{children:"Hay algunos pasos que debes seguir para cambiarte exitosamente entre ramas:"}),h("ul",{children:[o("li",{children:"\u2022 Los cambios en tu rama actual tienen que ser confirmados o almacenados en el guardado r\xE1pido (stash) antes de que cambies de rama."}),o("li",{children:"\u2022 La rama a la que te quieras cambiar debe existir en local. Hay tambi\xE9n un comando de acceso directo que te permite crear y cambiarte a esa rama al mismo tiempo:"})]}),o("div",{className:"App",children:o(A,{code:c,language:"bash"})}),o("p",{children:"Este comando crea una nueva rama en local (-b viene de rama (branch)) y te cambia a la rama que acabas de crear."})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GIT STATUS"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El comando de git status nos da toda la informaci\xF3n necesaria sobre la rama actual."}),o("div",{className:"App",children:o(A,{code:f,language:"bash"})}),o("p",{children:"Podemos encontrar informaci\xF3n como :"}),h("ul",{children:[o("li",{children:"Si la rama actual est\xE1 actualizada"}),o("li",{children:"Si hay algo para confirmar, enviar o recibir (pull)."}),o("li",{children:'Si hay archivos en preparaci\xF3n (staged), sin preparaci\xF3n(unstaged) o que no est\xE1n recibiendo seguimiento "untracked".'}),o("li",{children:"Si hay archivos creados, modificados o eliminados"})]})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GIT ADD"}),h(d.Body,{className:u.acordionbody,children:[o("h3",{children:"A\xF1adir un \xFAnico archivo:"}),o("div",{className:"App",children:o(A,{code:y,language:"bash"})}),o("h3",{children:"A\xF1adir todo de una vez:"}),o("div",{className:"App",children:o(A,{code:v,language:"bash"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GIT COMMIT"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Git commit es como establecer un punto de control en el proceso de desarrollo al cual puedes volver m\xE1s tarde si es necesario. Tambi\xE9n necesitamos escribir un mensaje corto para explicar qu\xE9 hemos desarrollado o modificado en el c\xF3digo fuente."}),o("div",{className:"App",children:o(A,{code:x,language:"bash"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GIT PUSH"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Despu\xE9s de haber confirmado tus cambios, el siguiente paso que quieres dar es enviar tus cambios al servidor remoto. Git push env\xEDa tus commits al repositorio remoto."}),o("div",{className:"App",children:o(A,{code:b,language:"bash"})}),o("p",{children:"De todas formas, si tu rama ha sido creada recientemente, puede que tengas que cargar y subir tu rama con el siguiente comando:"}),o("div",{className:"App",children:o(A,{code:C,language:"bash"})}),o("p",{children:"or :"}),o("div",{className:"App",children:o(A,{code:k,language:"bash"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"COMO ELIMINAR UN ARCHIVO DE UN REPOSITORIO EXISTENTE"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Si quiero eliminar/borrar un archivo de mi proyecto en GitHub, puedo hacerlo ejecutando el siguiente comando :"}),o("div",{className:"App",children:o(A,{code:_,language:"bash"})}),o("p",{children:'Cuando ejecuto este comando en mi terminal, a\xF1ado los cambios al staging area usando "git add ." , y despu\xE9s los confirmo y los cargo en el repositorio de GitHub.'})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GIT FETCH"}),o(d.Body,{className:u.acordionbody,children:o("p",{children:"Es el comando que dice a su local git que recupere la informaci\xF3n de metadatos m\xE1s reciente del original(pero no realiza ninguna transferencia de archivo. Es m\xE1s como simplemente verificar si hay alg\xFAn cambio disponible)."})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GIT PULL"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El comando git pull se utiliza para recibir actualizaciones del repositorio remoto. Este comando es una combinaci\xF3n del git fetch y del git merge lo cual significa que cundo usemos el git pull recogeremos actualizaciones del repositorio remoto (git fetch) e inmediatamente aplicamos estos \xFAltimos cambios en local (git merge)."}),o("div",{className:"App",children:o(A,{code:g,language:"bash"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GIT REVERT"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"A veces, necesitaremos deshacer los cambios que hemos hecho. Hay varias maneras para deshacer nuestros cambios en local y/o en remoto (dependiendo de lo que necesitemos), pero necesitaremos utilizar cuidadosamente estos comandos para evitar borrados no deseados."}),o("p",{children:"Una manera segura para deshacer nuestras commits es utilizar git revert. Para ver nuestro historial de commits, primero necesitamos utilizar el git log\u200A--\u200Aoneline:"}),o("p",{children:"Entonces, solo necesitamos especificar el c\xF3digo de comprobaci\xF3n que encontrar\xE1s junto al commit que queremos deshacer:"}),o("div",{className:"App",children:o(A,{code:p,language:"bash"})}),o("p",{children:"El comando git revert deshar\xE1 el commit que le hemos indicado, pero crear\xE1 un nuevo commit deshaciendo la anterior."}),o("p",{children:"La ventaja de utilizar git revert es que no afecta al commit hist\xF3rico. Esto significa que puedes seguir viendo todos los commits en tu hist\xF3rico, incluso los revertidos. Otra medida de seguridad es que todo sucede en local a no ser que los enviemos al repositorio remoto. Por esto es que git revert es m\xE1s seguro de usar y es la manera preferida para deshacer los commits."})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GIT MERGE"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Cuando ya hayas completado el desarrollo de tu proyecto en tu rama y todo funcione correctamente, el \xFAltimo paso es fusionar la rama con su rama padre (dev o master). Esto se hace con el comando git merge. Git merge b\xE1sicamente integra las caracter\xEDsticas de tu rama con todos los commits realizados a las ramas dev (o master). Es importante que recuerdes que tienes que estar en esa rama espec\xEDfica que quieres fusionar con tu rama de caracter\xEDsticas."}),o("p",{children:"Por ejemplo, cuando quieres fusionar tu rama de caracter\xEDsticas en la rama dev:"}),o("h5",{children:"Primero, debes cambiarte a la rama dev:"}),o("div",{className:"App",children:o(A,{code:m,language:"bash"})}),o("h5",{children:"Antes de fusionar, debes actualizar tu rama dev local:"}),o("div",{className:"App",children:o(A,{code:E,language:"bash"})}),o("h5",{children:"Por \xFAltimo, puedes fusionar tu rama de caracter\xEDsticas en la rama dev:"}),o("div",{className:"App",children:o(A,{code:w,language:"bash"})}),o("h6",{children:"Pista: Aseg\xFArate de que tu rama dev tiene la \xFAltima versi\xF3n antes de fusionar otras ramas, si no, te enfrentar\xE1s a conflictos u otros problemas no deseados."})]})]})})]})}function nv(){const e=`function Hello() {
    return "Hello"
  }
  
  console.log(Hello())
  `,n=`
  function sayHello(name) {
    return 'Hi I am ' + name
  }
  
  console.log(sayHello('Ryan'))
  console.log(sayHello('Jane'))
  console.log(sayHello('Joe'))
  `,t=`
  function add(x, y=0) {
    return x + y;
  }
  
  console.log(add(10, 20));
  console.log(add(10));
  `,r=`
  const add = (x, y) => {
    return x + y;
  }
  `,a=`
  const button = document.createElement("button");
    button.innerText = "Click me";

    button.addEventListener("click", () => alert("Clicked!"));

    document.body.append(button);
  `,i=`
const showText = () => "Hola Mundo";
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1, 2, 3];
const showFunction = () => () => 'Hola desde funcion'
const showObject = () => ({
  name: "Ryan",
});

console.log(showText());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showFunction()());
console.log(showObject());
  `,l=`
  const button = document.createElement('button')
    button.innerText = 'Click me'

    button.addEventListener('click', function () {
    alert('Clicked!')
})

document.body.append(button)
  `,s=`const user = {
    name: 'Maria',
    lastname: 'Perez',
    age: 30,
    address: {
      country: 'Colombia',
      city: 'bogota',
      street: 'Main Street #123'
    },
    friends: ['Brandon Perez', 'Elena Gomez'],
    active: true,
    sendMail: function () {
      return 'Sending email'
    }
  }
  
  console.log(user.name)
  console.log(user.age)
  console.log(user.sendMail())
  `,c=`
  const name = "laptop";
  const price = 3000;

  const newProduct = {
    name,
    price,
};

    console.log(newProduct)
  `,f=`
  const button = document.createElement("button");
      button.innerText = 'Profile'

  const isAuthorized = true;
      button.addEventListener("click", () => {
        if (isAuthorized) {
          return alert("Autorizado");
        }

      alert("No Autorizado");
      });

  `,y=`
  let color = 'white'
  let background = 'red'
  
  const button = document.createElement("button");
  button.innerText = "active";
  
  button.style = 'background: $ {background}; color: $ {color};'
  
  document.body.append(button);
  `,v=`function Casa(precio,ubicacion,recamaras,ba\xF1os){
    this.precio = precio;
    this.ubicacion = ubicacion;
    this.recamaras = recamaras;
    this.ba\xF1os = ba\xF1os;
}

const casa1 = new Casa(1000000,'Mexico Norte',5,2);
const casa2 = new Casa(2000000,'Mexico Sur',4,1);
console.log('Precio de la casa1 = $$ {casa1.precio}');
console.log('Precio de la casa2 = $$ {casa2.precio}');
  `,x=`
  function printInfo({ age }) {
    return "<h1> Hi I am " + age + "</h1>";
  }
  `,b=`
  function printInfo(user) {
    const { age } = user
    return "<h1> Hi I am " + age + "</h1>";
  }
  `,C=`const licenciatura = 'Ingeniero en Computacion';
  const semestre = 3;
  const promedio = 83; 
  
  const alumno = {licenciatura,semestre,promedio}
  
  console.log(alumno);
  `,k=`const consola = {
    fabricante:'Nintendo',
    modelo:'Nintendo Switch 1.0',
    banearConsola(){
        console.log('Escanenando Sistema...
        Hacks enconstrados...
        Lo sinto $ {this.dueno}, pero tu consola estara
        baneada por infringir los terminos y condiciones');
    },
    dueno:'Jose Luis'
}

consola.banearConsola();
  `,_=`const names = [ 'ryan', 'joe', 'bruce' ]

  const greetings = names.map(function (name) {
      return "Hola " + name
  })
  
  console.log(names)
  console.log(greetings)
  `,g=`const pelicula = {
    titulo:'Crank: Alto Voltaje',
    actores: ['Jashon Stathamn','...'],
    genero:'Accion'
}

console.log(Object.keys(pelicula));
  `,p=`
  const names = ["ryan", "joe", "bruce"];
  const newNames = ['Maria', 'Marta', 'Veronica']
  
  const allNames = [...names, ...newNames]
  
  console.log(names)
  console.log(newNames)
  console.log(allNames)
  `,m=`
  const user = {
    name: 'ryan',
    lastname: 'ray'
}

const address = {
    street: 'Main Street 123',
    city: 'London'
}

const userInfo = {
    ...user,
    address
}

console.log(userInfo)
  `,E=`const names = ["ryan", "joe", "bruce"];

  const newNames = names.filter(function (name) {
      if (name !== "joe") return name
  })
  
  console.log(names)
  console.log(newNames);
  `,w=`const names = ["ryan", "joe", "bruce"];

  const nameFound = names.find(function (name) {
    if (name === "joe") {
      return name;
    }
  });
  
  console.log(names)
  console.log(nameFound);
  `,S=`const names = ["ryan", "joe", "bruce"];
  const newNames = ["Maria", "Marta", "Veronica"];
  
  const allNames = names.concat(newNames);
  
  console.log(names);
  console.log(newNames);
  console.log(allNames);
  `,F=`
  let puntaje = 5;
  alert ( puntaje >= 6 ? 'Pasaste' : 'Fallaste' );
  `,R=`
  const person = {
    name: 'Gerardo', 
    email: 'mail@mail.com', 
    currentJob: null;
  }
  const jobTitle = person?.currentJob?.title // undefined

  `,O=`const reducido = [5,2,7,1].reduce((acumulador,elemento)=>{ return acumulador+elemento;},3);

  console.log(reducido);
  `,z=`function suma (numero){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(numero+48);
        }, 2000);
    })
}
  `,q=`async function tareaAsincrona(){
    try {
        let paso1 = await suma(3);
        console.log(paso1 + 2);
    } catch (e) {
        console.log(e);
    }
}
  `,oe=`class Animal{
    constructor(tipo,tamano,habitat){
        this.tipo = tipo
        this.tamano = tamano
        this.habitat = habitat
    }
    comer(){
        console.log('\xD1om \xF1om \xF1om')
    }
}

class Perro extends Animal{
    constructor(tipo,tamano,habitat,raza){
        super(tipo,tamano,habitat)
        this.raza = raza
    }
    ladrar(){
        console.log('GUA GUA GUA!!! Soy un $ {this.raza}'')
    }
}

let perro = new Perro('Canino','Grande','Ciudad','Chihuahua')
perro.ladrar();
  `,ye=`class Animal{
    //ALGUN CODIGO
}

class Perro extends Animal{
    constructor(tipo,tamano,habitat,raza){
        //ALGUN CODIGO
    }
    get ladrar(){
        if(this.tamano == 'Grande')
        return 'GUA GUA GUA!!! Soy un $ {this.raza} y ladro fuerte'
        else{
            return 'gua gua. Soy un $ {this.raza} y ladro bajito'
        }
    }
}

let mazapan = new Perro('Canino','Peque\xF1o','Ciudad','Chihuahua')
console.log(mazapan.ladrar);
  `,Se=`class Animal{
    //ALGUN CODIGO
}

class Perro extends Animal{
    constructor(tipo,tamano,habitat,raza){
        super(tipo,tamano,habitat)
        this.raza = raza
    }
    get ladrar(){
        if(this.tamano == 'Grande')
        return 'GUA GUA GUA!!! Soy un $ {this.raza} y ladro fuerte'
        else{
            return 'gua gua. Soy un $ {this.raza} y ladro bajito'
        }
    }

    set setearTamano(valor){
        this.tamano = valor;
    }

}
  `,J=`class Animal{
    constructor(tipo,tamano,habitat){
        //CODIGO
    }

    static dormir(){
        return 'Zzzzz.... zzz.... zz..'
    }
}
  `;return h(ue,{children:[o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"FUNCION"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Una de la sintaxis que mas se va a repetir en React es la creacion de funciones de Javascript. Asi que Debes tener muy claro que es una funcion y como crearla. Las funciones nos permiten agrupar logica bajo un nombre, y nos permiten poder reutilizarlos facilmente. Las funciones tambien pueden devolver distintos tipos de datos, como strings, numeros, booleanos, arreglos, objetos e incluso otras funciones."}),o("div",{className:"App",children:o(A,{code:e,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:" PARAMETROS FUNCIONES"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Cuando declaramos funciones muchas veces vamos a querer procesar datos, asi que para esto estan los parametros. Los parametros de la funciones solo son los nombres que le decimos que podemos esperar en la declaracion de la funcion."}),o("div",{className:"App",children:o(A,{code:n,language:"javascript"})}),h("p",{children:[o("h2",{children:"Parametros opcionales"}),"Si en una funcion esperamos valores para que funcione, ?que pasa si no nos pasan estos valores? Bueno, podemos hacer una validacion, y asignar un valor:"]}),o("div",{className:"App",children:o(A,{code:t,language:"javascript"})}),o("p",{children:"Esto es mucho mas facil de escribir, de leer, y evitamos usar una condicional extra."})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"FUNCIONES FLECHA"}),h(d.Body,{className:u.acordionbody,children:[h("p",{children:["En javascript tenemos dos tipos de funciones:",o("li",{children:"Function declaration, las que usan la palabra function"}),o("li",{children:"Arrow Functions o funciones flechas ambas son usadas en React."}),"Arrow Function en Javascript:"]}),o("div",{className:"App",children:o(A,{code:r,language:"javascript"})}),o("p",{children:"Estos Arrow functions son muy utiles para poder escribir codigo mas compacto y facil de leer."}),o("div",{className:"App",children:o(A,{code:a,language:"javascript"})}),h("p",{children:[o("h2",{children:"Arrow Functiones en una Sola Linea"}),"Es muy importante tener en claro que cuando usamos un Arrow function sin las llaves, este ya tiene un return implicito, asi que es como si la funcion retornara algo. Por ejemplo todas estas funciones retornan algo:"]}),o("div",{className:"App",children:o(A,{code:i,language:"javascript"})}),h("p",{children:["Algo interesante con la ultimas funcion showObject es que no se ha podido colocar en una sola linea. Esto es asi porque las llaves definen el cuerpo de una funcion, asi que cuando quiero decirle que retorno un objeto () =&gt "," lo que el entiende es que quiero colocar el cuerpo de la funcion. Usando los parentesis estamos declarando que el cuerpo de la funcion, sino un tipo de dato, que debe retornar."]})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"FUNCIONES AN\xD3NIMAS"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"En JavaScript muchas veces no es necesario asignar nombres a las funciones.Esto hace que no tenga que nombrar la funcion por aparte. Esto es muy util cuando ejecutamos funciones en eventos como clicks, submits, change, y otros eventos de elementos HTML."}),o("div",{className:"App",children:o(A,{code:l,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"OBJETO"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Estos pueden almacenar distintos tipos de datos como strings, numeros, booleanos, funciones, arreglos y demas."}),o("div",{className:"App",children:o(A,{code:s,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"SHORTHAND PROPERTY NAMES"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Muchas veces tambien vamos a necesitar crear objetos de Javascript, a partir de otros datos:"}),o("div",{className:"App",children:o(A,{code:c,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"OBJETO CONSTRUCTOR"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:v,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"DESTRUCTURING"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El destructuring de Javascript nos permite usar solo algunos valores de un Objeto."}),o("div",{className:"App",children:o(A,{code:x,language:"javascript"})}),o("p",{children:"Tambien puedes destructurar desde cualquier parte del codigo, en este ejemplo dentro de la funcion:"}),o("div",{className:"App",children:o(A,{code:b,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"OBJECT ENHACEMENT"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:C,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"FUNCIONES DENTRO DE UN OBJETO"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:k,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"CONDICIONALES EN FUNCIONES"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:f,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"STRING LITERALS"}),o(d.Body,{className:u.acordionbody,children:h("div",{className:"App",children:[o("p",{children:"Los String Literals sirven para a\xF1adir un propiedades dinamicas a un componente, como clases o estilos:"}),o(A,{code:y,language:"javascript"})]})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:".MAP"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:_,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"OBJECT KEY"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:g,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:".FILTER"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El metodo filter nos permite crear un nuevo array, con elementos que hayan cumplido con una condicion."}),o("div",{className:"App",children:o(A,{code:E,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:".FIND"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El metodo find nos permite buscar un elemento de un arreglo, si encuentra el elemento lo retorna, sino nos devuelve undefined."}),o("div",{className:"App",children:o(A,{code:w,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:".CONCAT"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El metodo find nos permite buscar un elemento de un arreglo, si encuentra el elemento lo retorna, sino nos devuelve undefined."}),o("div",{className:"App",children:o(A,{code:S,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"SPREAD OPERATOR"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"En la seccion anterior hemos visto que es posible combinar dos arreglos en uno solo usando contact, pero esto puede ser mucho mas facil usando el spreed operator."}),o("div",{className:"App",children:o(A,{code:p,language:"javascript"})}),h("p",{children:[o("h2",{children:"Copiar propiedades en un nuevo Objeto"}),"El spreed operator tambien funciona con objetos de Javascript:"]}),o("div",{className:"App",children:o(A,{code:m,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:".REDUCE"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:O,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"OPERADOR TERNARIO"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El operador ternario lo podemos entender como una estructura compacta para hacer condicionales. Consiste en una expresi\xF3n que se evaluar\xE1 y, dependiendo de si dicha evaluaci\xF3n fue positiva o negativa devolver\xE1 una u otra cosa."}),o("div",{className:"App",children:o(A,{code:F,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"OPTIONAL CHAINING"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Ete permiten leer el valor de una propiedad anidada sin tener que revisar si el valor previo es valido."}),o("div",{className:"App",children:o(A,{code:R,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"PROMESAS"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:z,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"ASYNC/AWAIT"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:q,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"POO"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:oe,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"GETTER"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:ye,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"SETTER"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:Se,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"STATIC"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:J,language:"javascript"})})})]})})]})}function tv(){const e=`
  npx create-react-app my-app / crear app react
  
  npm install react-bootstrap bootstrap  /instalar react bootstrap
  
  npm install react-icons \u2013save	/instalar react iconos
  
  npm install react-router-dom@6  /instalar react router v6
  
  npm install -D tailwindcss / instalar tailwind css
  
  npx tailwindcss init /iniciar tailwind
  
  npm install -g sass / instalar Sass
  
  npm install --save styled-components /instalar styled components
  
  npm install react-hook-form /  instalar react hook form 

  npm install axios / instalar axios

  npm install --save react-redux  / instalar redux

  npm install @reduxjs/toolkit / instalar reduxtoolkit
  `,n=`
  npm create vite@latest
  npm install
  npm run build  /  proyecto est\xE1tico para producci\xF3n
  npm run dev / iniciar Proyecto local.

  `;return h(ue,{children:[o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"COMANDOS NPM"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:e,language:"bash"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"CREAR PROYECTO VITE + REACT"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:n,language:"bash"})})})]})})]})}function rv(){const e=`import React, { useState } from "react";

  export default function Componente() {
    const [valor, setValor] = useState(0);
      return (
      <div>
        <span>El valor del componente es {valor}</span>
        <button onClick={() => setValor(valor + 1)}>Aumentar valor</button>
      </div>
    );
  }
  
  `,n=`
  import { useEffect, useState } from 'react'

  function Counter() {
    const [count, setCount] = useState(0)
  
    useEffect(() => {
      console.log('El contador se ha actualizado')
    }, [count])
  
    return (
      <>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
      </>
    )
  }

  Podemos usar el hook useEffect de diferentes formas, tales como:

Ejecutar c\xF3digo cuando se renderiza el componente, cuando cambian las dependencias 
del efecto o cuando se desmonta el componente.

Por eso puede ser \xFAtil para hacer llamadas a APIs, ya que sea nada 
m\xE1s montar el componente o cuando cambian las dependencias.

Realizar tracking de eventos, como Google Analytics, para saber qu\xE9 
p\xE1ginas visitan los usuarios.

Podemos validar un formulario para que cada vez que cambie el estado, 
podamos actualizar la UI y mostrar d\xF3nde est\xE1n los errores.

Podemos suscribirnos a eventos del navegador, como por ejemplo el 
evento resize para saber cuando el usuario cambia el tama\xF1o de la ventana.

  `,t=`
  import { useMemo } from 'react'

  function Counter({ count }) {
    const double = useMemo(() => count * 2, [count])
  
    return (
      <div>
        <p>Contador: {count}</p>
        <p>Doble: {double}</p>
      </div>
    )
  }

  En este caso, el componente Counter recibe una prop count que es un n\xFAmero. 
  El componente calcula el doble de ese n\xFAmero y lo muestra en pantalla.

  El hook useMemo recibe dos par\xE1metros: una funci\xF3n y un array de dependencias. 
  La funci\xF3n se ejecuta cuando el componente se renderiza por 
  primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop count.

  La ventaja es que si la prop count no cambia, se evita el c\xE1lculo del 
  doble y se devuelve el valor que ya se hab\xEDa calculado previamente.
  
  `,r=`
  import { useCallback } from 'react'

  function Counter({ count, onIncrement }) {
    const handleIncrement = useCallback(() => {
      onIncrement(count)
    }, [count, onIncrement])
  
    return (
      <div>
        <p>Contador: {count}</p>
        <button onClick={handleIncrement}>Incrementar</button>
      </div>
    )
  }

  En este caso, el componente Counter recibe una prop count que es un n\xFAmero y 
  una prop onIncrement que es una funci\xF3n que se ejecuta cuando se pulsa el bot\xF3n.

  El hook useCallback recibe dos par\xE1metros: una funci\xF3n y un array de dependencias. 
  La funci\xF3n se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop count o la prop onIncrement.

  La ventaja es que si la prop count o la prop onIncrement no cambian, se evita 
  la creaci\xF3n de una nueva funci\xF3n y se devuelve la funci\xF3n que ya se hab\xEDa calculado previamente.
  
  `,a=`
  function ReptileList() {
    const reptiles = ['alligator', 'snake', 'lizard'];
  
    return (
      <ol>
        {reptiles.map(reptile => (
          <li key={reptile}>{reptile}</li>
        ))}
      </ol>
    );
  }

  `,i=`
  function ReptileList() {
    const reptiles = ['alligator', 'snake', 'lizard'];
  
    return (
      <ol>
        {reptiles.map(reptile => (
          <li key={reptile}>{reptile}</li>
        ))}
      </ol>
    );
  }

  `,l=`
  import React from 'react';

const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }
];

function App() {
  return (
    <div>
      {people.filter(person => person.age < 60).map(filteredPerson => (
        <li>
          {filteredPerson.name}
        </li>
      ))}
    </div>
  );
}

export default App;

  `,s=`
  function ReptileList() {
    const reptiles = ['alligator', 'snake', 'lizard'];
  
    return (
      <ol>
        {reptiles.map(reptile => (
          <li key={reptile}>{reptile}</li>
        ))}
      </ol>
    );
  }

  `,c=`
  import { useState, useEffect } from 'react';

  function App() {
  
    const [articulos, setArticulos] = useState([])
    const [recuperado, setRecuperado] = useState(false)
  
  
    function mostrarTabla() {
      return (
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>C\xF3digo</th>
                <th>Descripci\xF3n</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {articulos.map(art => {
                return (
                  <tr key={art.codigo}>
                    <td>{art.codigo}</td>
                    <td>{art.descripcion}</td>
                    <td>{art.precio}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  
    useEffect(() => {
      fetch('https://scratchya.com.ar/react/datos.php')
        .then((response) => {
          return response.json()
        })
        .then((articulos) => {
          setArticulos(articulos)
          setRecuperado(true)
        })
    }, [])
  
    if (recuperado)
      return mostrarTabla()
    else
      return (<div>recuperando datos...</div>)
  }
  
  export default App

  `,f=`
  Introducci\xF3n
Con el simple prop\xF3sito de brindarte un comienzo fluido, echemos un vistazo a las
preguntas en una entrevista de trabajo m\xE1s b\xE1sicas con las que te toparas. Estas
usualmente son preguntas de definici\xF3n, comparaci\xF3n y "si/no". Su prop\xF3sito principal
es el de comprobar tus conocimientos b\xE1sicos sobre React JS.

Pregunta 1: \xBFQu\xE9 es React JS?
Esta es una pregunta que muy probablemente tengas que afrontar al inicio de tu
entrevista.
Probablemente, tu empleador tratar\xE1 de comprobar tu proceso de pensamiento. Es
bastante obvio cuando una persona est\xE1 tratando de dar su propia definici\xF3n de algo y
cuando simplemente est\xE1 recitando un texto que ha memorizado anteriormente.
De m\xE1s est\xE1 decir, que la segunda opci\xF3n no es muy conveniente. Cualquiera puede
memorizar un texto, esto no es nada impresionante. Sin embargo, si eres capaz de
explicar temas complicados de una manera completamente comprensible, \xA1Este es otro
tema! Demuestra que has dedicado el tiempo y la energ\xEDa para estudiar el tema, no solo
memorizarlo.
Entonces, volviendo a la pregunta, \xBFQue es React JS?
ReactJS, es una librer\xEDa front-end. Basada en el lenguaje JavaScript, creada por
Facebook. El prop\xF3sito principal de esta librer\xEDa, es el de brindar una interfaz de usuario
multiuso.

Pregunta 2: \xBFPor qu\xE9 deber\xEDamos utilizar ReactJS?
Como te habr\xE1s dado cuenta, esta es una pregunta de entrevista React JS basada en tu
opini\xF3n personal. Sin embargo, har\xE1s bien, con solo mencionar las mejores
caracter\xEDsticas de React. Entre ellas se incluyen, pero no se limitan a:
\uF0B7 DOM virtual en lugar de DOM real;
\uF0B7 R\xE1pido y escalable;
\uF0B7 JSX proporciona un c\xF3digo que es f\xE1cil de leer y escribir;
\uF0B7 React se puede integrar f\xE1cilmente a cualquier otra estructura del lenguaje
JavaScript;
\uF0B7 etc.

Pregunta 3: Explicar "DOM real" y "DOM virtual"
DOM, acr\xF3nimo de "Document Object Model". Los DOMs son utilizados para
comprender ciertos tipos espec\xEDficos de texto. Por ejemplo, cuando se trata del
desarrollo web o de aplicaciones, DOM es utilizado para representar los textos en
HTML.
ReactJS utiliza lo que llamamos DOM virtual. Simplemente, son una copia de los textos
HTML de React. Adem\xE1s, de ser una representaci\xF3n del DOM real.
Brindar y utilizar un "DOM virtual" en React, usualmente se convierte en una de sus
principales ventajas cuando hablamos acerca de esta librer\xEDa JavaScript. Con respecto, a
las preguntas entrevista React JS, una de las posibles ampliaciones a este tema ser\xEDa la
explicaci\xF3n del porqu\xE9 el "DOM virtual" es superior al "DOM real". Usualmente la
respuesta es verdaderamente sencilla, el DOM virtual es mucho
m\xE1s r\xE1pido y econ\xF3mico que el real.

Pregunta 4: \xBFQu\xE9 es JSX?
En una de nuestras preguntas entrevista REact JS anteriores (En este caso, Pregunta 2).
He mencionado que una de las ventajas de ReactJS, es que JSX brinda un c\xF3digo
comprensible. \xBFPero qu\xE9 pasar\xEDa si tu empleador te preguntara que es JSX?
JSX, acr\xF3nimo de JavaScript XML. React JS utiliza este archivo para hacer que el
c\xF3digo HTML sea mucho m\xE1s f\xE1cil de leer y escribir. Adem\xE1s, JSX puede impulsar el
rendimiento de tu aplicaci\xF3n y/o sitio web.

Pregunta 5: \xBFQu\xE9 son los "componentes"?
Los Componentes de ReactJS representan las funciones del lenguaje JavaScript. Estos
dividen la interfaz de usuario en partes separadas y permite que la UI ser\xE1 reutilizable
al momento que el desarrollador lo necesite.

Pregunta 6: \xBFCu\xE1les son las etapas de vida de un componente?
Aunque, podr\xEDamos determinar este tipo de preguntas entrevista ReactJS como
subjetiva, todav\xEDa existe un consenso general sobre el ciclo de vida de un componente
ReactJS.
Existen tres etapas durante dicho ciclo de vida: inicializaci\xF3n, actualizaci\xF3n de estados
y destrucci\xF3n.

Pregunta 7: \xBFExiste alguna diferencia entre un "componente" y un
"elemento"?
S\xED, Un componente de React acepta entradas y devuelve el elemento, lo cual es
simplemente una descripci\xF3n de lo que puedes ver en pantalla.
Esta se puede clasificar como una de aquellas preguntas en una entrevista de trabajo que
podr\xEDan enga\xF1arte, por lo tanto, estate atento.

Pregunta 8: \xBFLos exploradores web pueden leer JSX?
No, no pueden.
Los exploradores web est\xE1n configurados de cierta manera que solo son capaces de leer
objetos JavaScript. Aunque similares, un objeto JSX no es lo mismo a un objeto JS.
Sin embargo, puedes hacer que funcione. Simplemente lo que tendr\xE1s que hacer es
transformar el objeto JSX en uno de JavaScript. Existen varios conversores que pueden
ayudarte en esta tarea. Luego, simplemente sube el objeto al explorador, en ese
momento ser\xEDa capaz de leerlo.

Pregunta 9: \xBFCu\xE1l es la diferencia entre ReactJS y React Native?
Durante tu entrevista, seguramente te pedir\xE1n que compares React JS con otras librer\xEDas
o estructuras. En este caso, las preguntas en una entrevista de trabajo React Native son
muy populares.
Para simplificarlo, ReactJS es una librer\xEDa del lenguaje JavaScript, mientras que React
Native es una completa plataforma de m\xFAltiples caracter\xEDsticas con la que podr\xE1s crear
tu aplicaci\xF3n desde cero.

Pregunta 10: \xBFQu\xE9 es "flux"?
Aunque esto se relaciona m\xE1s con el lenguaje JavaScript, muy probablemente sea una
de las muchas preguntas entrevista React JS con las que te toparas.
Flux, te permite crear diferentes capas de informaci\xF3n (datos) dentro de tu
aplicaci\xF3n. Flux es importante porque fue dise\xF1ado por Facebook al mismo tiempo que
trabajaban con React.

Preguntas Entrevista React JS - Avanzadas
Ahora te podr\xE1s imaginar que esperar durante una entrevista, por lo tanto, pasemos a las
m\xE1s avanzadas preguntas en una entrevista de trabajo.

Pregunta 1: \xBFC\xF3mo utilizar ReactJS las "claves"?
React utiliza las claves para diferenciar entre simples elementos DOM virtuales con
aquellos que son \xFAnicos. Adem\xE1s, las claves ayudan a React a reciclar elementos DOM
existentes, para que la librer\xEDa pueda ejecutarse y renderizarse m\xE1s r\xE1pidamente.

Pregunta 2: \xBFExiste alguna diferencia entre "componente contenedor" y
"componente de presentaci\xF3n"?
Los componentes contenedores, se enfocan en proporcionar datos a la presentaci\xF3n y
otros componentes contenedores. Estos componentes son responsables de mantener el
funcionamiento de todo.
Por otro lado, los componentes de presentaci\xF3n, son responsables del aspecto visual.
Cada vez que adquieren su propio estado personal (Lo que ocurre raramente), a menudo
es una interfaz de usuario.

Pregunta 3: \xBFPara qu\xE9 se utiliza "setState"?
Cuando ordenas un comando "setState", un objeto se fusiona con el estado actual.
Luego, la interfaz de usuario es actualizada de acuerdo al nuevo estado.
Este es un gran ejemplo de aquellas preguntas entrevista React JS m\xE1s t\xE9cnicas.

Pregunta 4: \xBFQu\xE9 hace "render"?
Si hablamos acerca de un solo elemento, entonces "render()" lo devuelve. Sin embargo,
cuando tratamos con elementos m\xFAltiples, tendr\xEDan que agruparse para hacerlo.

Pregunta 5: \xBFPara qu\xE9 se utilizan los "eventos sint\xE9ticos"?
Cuando se trata de React, los eventos sint\xE9ticos, funcionaran de la misma manera que
los eventos normales de los exploradores web. La \xFAnica diferencia importante es que los
eventos sint\xE9ticos utilizan c\xF3digo que puede ser aplicado en m\xFAltiples exploradores
web, mientras que los eventos normales se enfocan en un solo explorador.

Pregunta 6: \xBFQu\xE9 es un "estado"?
Aunque no lo creas, esta es considerada una de las preguntas entrevista React JS m\xE1s
dif\xEDciles.
\xBFRecuerdas cuando hablamos acerca de los ciclos de vida de un componente? Bueno,
los estados son objetos que contienen ciertos datos dentro de ellos. El aspecto principal
a recordar aqu\xED es que los datos pueden ser alterados durante el ciclo de vida de un
componente, dependiendo de los eventos que lo influencian.

Pregunta 7: \xBFQu\xE9 son los "props"?
"Props", significa "propiedades". Los componentes principales le brindan props a los
componentes secundarios para de esta forma mantener el cuadro de la aplicaci\xF3n.

Pregunta 8: \xBFQu\xE9 son los "l\xEDmites de error"?
Los "l\xEDmites de error" son una funci\xF3n que asigna ciertos errores espec\xEDficos dentro de
los componentes secundarios, los a\xEDsla y luego intercambia el \xE1rea bloqueada con una
interfaz de usuario de respaldo. En otras palabras, los l\xEDmites de error son como un
sistema de seguridad para el desarrollador si algo no sale seg\xFAn el plan.

Pregunta 9: \xBFQu\xE9 es una "funci\xF3n de flecha"?
Dado que no hay una funci\xF3n predeterminada para vincular autom\xE1ticamente los
componentes de React, una funci\xF3n de flecha permite al desarrollador asociar contextos
de dos componentes diferentes.

Pregunta 10: \xBFQu\xE9 es React Redux?
Si tienes una aplicaci\xF3n de JavaScript, desarrollada con Flux, puedes aplicar Redux
como contenedor. En tales situaciones, Redux se convierte en un contenedor de estado
predecible.
Aunque React JS no es la \xFAnica librer\xEDa que puede utilizar Redux, aun puedes toparte
con estas preguntas entrevista React JS.
Resumen
Entonces, hemos cubierto una gran parte de las preguntas entrevista React JS que
deber\xEDas considerar para tu pr\xF3xima entrevista de trabajo. Te he brindado ejemplo de las
m\xE1s populares preguntas en una entrevista de trabajo React, adem\xE1s hablamos acerca de
los aspectos m\xE1s avanzados.
Generalmente, ser\xEDa casi imposible cubrir cada posible pregunta durante una entrevista
de trabajo. Sin embargo, si te tomas el tiempo de aprender las preguntas y respuestas de
este React tutorial, deber\xEDas estar m\xE1s que preparado. Muchas de las preguntas que
recibir\xE1s de tus empleadores, estar\xE1n relacionadas, de una forma u otra, a las brindadas
en esta gu\xEDa.

  `,y=`
  import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
const Router = () => {
  const Home = () => <h1>Home</h1>;
  const Pets = () => <h1>Pet List</h1>;
  // const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="pets" element={<Pets />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
  `,v=`
  import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
const Router = () => {
  const Home = () => <h1>Home</h1>;
  const Pets = () => <h1>Pet List</h1>;
  // const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            **<Route index element={<Home />}></Route>**
            <Route path="pets" element={<Pets />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
  `,x=`
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Layout from "./components/Layout";
  const Router = () => {
    const Home = () => <h1>Home</h1>;
    const Pets = () => <h1>Pet List</h1>;
    // const Layout = () => <h1>Layout</h1>;
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="pets" element={<Pets />}></Route>
              **<Route path="*" element={<h1>404</h1>}></Route>**
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  export default Router;
  `,b=`
  export const pets = [
    {
      id: 1,
      name: "Ally",
      image: "https://i.ibb.co/88qydfc/lilu.jpg",
      age: 2,
    },
    {
      id: 2,
      name: "Molly",
      image: "https://i.ibb.co/PcWmskm/molly.jpg",
      age: 1,
    },
    {
      id: 3,
      name: "Mayumi",
      image: "https://i.ibb.co/3pvs9XR/mayumi2.jpg",
      age: 7,
    },
    {
      id: 4,
      name: "Himeko",
      image: "https://i.ibb.co/kMfJ9Dn/himeko.jpg",
      age: 4,
    },
    {
      id: 5,
      name: "Sirius",
      image: "https://i.ibb.co/PT5Bywj/sirius.jpg",
      age: 1,
    },
    {
      id: 6,
      name: "Askan",
      image: "https://i.ibb.co/QK5tW2z/askan.jpg",
      age: 6,
    },
    {
      id: 7,
      name: "Negrito",
      image: "https://i.ibb.co/C8fjGfs/negrito.jpg",
      age: 1,
    },
  ];
  `,C=`
  //src > components > Pets.js
  import { Link } from "react-router-dom";
  import { pets } from "../data";
  const Pets = () => {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h2>Pets</h2>
          {pets.map((e) => (
            <p key={e.id}>
            <Link to={'$ {e.id} '}>{e.name}</Link>
            </p>
          ))}
        </div>
      </>
    );
  };
  export default Pets;
  `,k=`
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Layout from "./components/Layout";
  import Pets from "./components/Pets";
  const Router = () => {
    const Home = () => <h1>Home</h1>;
    // const Pets = () => <h1>Pet List</h1>;
    // const Layout = () => <h1>Layout</h1>;
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="pets" element={<Pets />}></Route>
              **<Route path="pets/:id" element={<h1>detalles</h1>}></Route>**
              <Route path="*" element={<h1>404</h1>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  export default Router;
  `,_=`
  import { useParams } from "react-router-dom";
import { pets } from "../data";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onePet = pets.find((e) => e.id === Number(id));
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>{onePet.name}</h1>
        <h2>{onePet.description}</h2>
        <img src={onePet.image} alt={onePet.name} width={100} />
      </div>
    </>
  );
};
export default Details;
  `,g=`
  import { useParams, useNavigate } from "react-router-dom";
  import { pets } from "../data";
  const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const onePet = pets.find((e) => e.id === Number(id));
    return (
      <>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1>{'Nombre: $ {onePet.name}'}</h1>
          <h2>{'Edad: $ {onePet.age}'}</h2>
          <img src={onePet.image} alt={onePet.name} width={300} />
        </div>
        <button onClick={() => navigate(-1)}>\u2190 Back</button>
      </>
    );
  };
  export default Details;
  `,p=`
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <div className="App">
      <div>
        {list.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
  `,m=`
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          url: "https://jsonplaceholder.typicode.com/posts",
        });

        setList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setList]);

  return <div className="App">...</div>;
}

export default App;
    `,E=`
REACT NATIVE CON EXPO
npm install --global expo-cli
expo init name-app
cd name-app
expo start

------------------------
rnfe (snipet para crear componentes)
-----------------------------------------
import { View, Text, FlatList, StyleSheet, TextInput, StatusBar } from "react-native";
FlatList (Recibe un arrego y permite recorrerlo de manera facil)
StyleSheet (Para estilizar)
Text (Para crear Texto)
View (Es el contenedor, similar a un div)
TextInput (Es equivalente a un input)
StatusBar (Componente para controlar la barra de estado de la aplicaci\xF3n. 
La barra de estado es la zona, generalmente en la parte superior de la pantalla, 
que muestra la hora actual, la informaci\xF3n 
de la red Wi-Fi y celular, el nivel de la bater\xEDa y/u otros \xEDconos de estado.)

showsVerticalScrollIndicator={false} (Funcion para desabilitar la barra de scroll)
onrefresh
refreshing
`,w=`
Te ayuda a manejar los datos conforme a las acciones realizadas por el usuario
---------------------------------------------------------------
Caracteristicas de redux
solo se tiene un state principal
El state cambia de acuerdo a lo que sucede en la interfaz de usuario
Solo ciertas funciones cambian el state
El usuario es que utiliza estas funciones y cambia el state
Solo se realiza un cambio a la vez
---------------------------------------------------------------
Cuando utilizar redux
Si tu aplicacion es peque\xF1a no necesitas redux, es mejor usar hooks o context
Si tu proyecto es grande y sera mantenido por varias personas, redux sera de gran ayuda
-----------------------------------------------------------------------------------------
Principios de Redux
Solo existe un store con todo el state de la aplicacion
Los componentes/vistas no modifican el state directamente
El state se modifica por medio de funciones (actions)
----------------------------------------------------------------------------------------
Terminologia de Redux
store / contiene el state 1 por aplicacion
dispatch / ejecuta una accion que actualizara el state
action / objetos js, tienen un tipo y payload(datos) 
susbscribe / similar a un event listener para el state
reducers / funciones, saben que hacer con las acciones y el payload

_______________________________________________________________________________
Redux Toolkit

import { useDispatch } from "react-redux"
useDispatch (funciones que queremos llamar para actualizar el estado)
useSelector (forma en que podemos traer los datos que esten dentro del estado)


`,S=`
Next es uns SSR (Server Side Rendering) para crear aplicaciones react
routing automatico
code spliting y laz loading a los componentes
soporte CSS(emotions o style components)
hot reload
urls limpias


crear proyecto
--------------------------------------------

npx create-next-app@latest

y

nombre del proyecto

cd "nombre del proyecto"

npm run dev

-----------------------------------------

jerarquia de archivos

pages/_document.js 
-app
index.js

enlace a normalice (https://necolas.github.io/normalize.css/8.0.1/normalize.css)
Normalize = Resetea los estilos para todoslos tipos de navegadores.

--------------------Modelo de rutas en Next-----------------
crear los componentes en la carpeta "pages" y automaticamente crea la ruta

-------------------Layout------------------
es un componente sirve para header footer barra lateral title meta ya que toma todo los valores children se
puede renderizar en todos los componentes y evita duplicar codigo

mediante props podemos pasar title y description a los componentes para que muestre en que pagina estamos y description para mejorar seo

Header y foter agrgar a cartea components y al layout para renderizar en todos los componentes

---------------------------header----------------
para subir imagenes al header importar image from /next/future/img
<Image src="img/logo.svg" width={300} height={40} alt='imagen logotipo'/>

para agregar clases a <Link>  con hook import { useRouter } from 'next/router'
 <Link className={ router.pathname === '/blog' ? styles.active : '' } href="/blog">
                  Blog
              </Link>

-------------------------------------------------------------------------------------
para las imagenes en next se pueden comprimir con formato avif y webp
agregando:
images: {
    formats: ['image/avif', ['image/webp']]
  }

en el archivo next.config.js del proyecto, por defecto convierte a avif si no es compatible 
con el navegador a webp

-------------------------CONSUMIR APIS CON NEXTJS--------------------------------
se utiliza ServerSideProps cuando la informacion cambia de forma continua 
en cada request o donde la pagina se actualiza cada poco tiempo

utiliza StaticProps cuando la infromacion no cambia en cada request:
una pagina informativa, documentacion, tramites, anuncios.

*consumiendo api con getStaticProps /getServerSideProps es la misma sintaxis

export async function getStaticProps() {
    const respuesta = await fetch('http://localhost:1337/api/guitarras?populate=imagen')
    const {data: guitarras} = await respuesta.json()

    console.log(guitarras)

    return {
      props: {
          guitarras
      }
    }
}

Para agregar imagenes via api confugurar archivo next.config.js y agregar domains: ['res.cloudinary.com']
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig


-------------------routing dinamico----------------
para el routing dinamico creamos una carpeta en pages y dentro el archivo [url].js


----------------------PAGINA 404 --------------------
crear la pagina 404.js dentro de la carpeta pages

---------------crear 2 estilos css en una clase------------
<article className={'$ {styles.post} $ {styles['mt-3']}'}>

---------------------consumir 2 apis con getstaticprops()----------------------
export async function getStaticProps() {
  const urlGuitarras = '$ {process.env.API_URL}/guitarras?populate=imagen'
  const urlPosts = '$ {process.env.API_URL}/posts?populate=imagen'

  const [ resGuitarras, resPosts] = await Promise.all([
  fetch(urlGuitarras),
  fetch(urlPosts)
  ])

  const [ {data: guitarras}, {data: posts} ] = await Promise.all([
    resGuitarras.json(),
    resPosts.json()
  ])
  return {
    props: {
        guitarras,
        posts
    }
  }
}

--------------------------------------------------------------------------
instalar emotion
npm i @emotion/styled @emotion/react @babel/core babel-plugin-emotion @emotion/babel-preset-css-prop

Crear el archivo babelrc en el directorio principal con el siguiente contenido

{

    "presets": [

        "next/babel",

        "@emotion/babel-preset-css-prop"

    ],

    "plugins": [

        [

            "@emotion"

        ]

    ]

}



Importarlo como

import styled from '@emotion/styled';



---------------------------------------------------------
Agregar Normalize mediante Cdn
https://cdnjs.com/libraries/normalize
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" 
integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+
8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
`;return h(ue,{children:[o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"HOOK USESTATE"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El hook useState es utilizado para crear variables de estado, quiere decir que su valor es din\xE1mico, que este puede cambiar en el tiempo y eso requiere una re-renderizaci\xF3n del componente donde se utiliza"}),o("div",{className:"App",children:o(A,{code:e,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"HOOK USEEFFECT"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El hook useEffect se usa para ejecutar c\xF3digo cuando se renderiza el componente o cuando cambian las dependencias del efecto."}),o("div",{className:"App",children:o(A,{code:n,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"HOOK USEMEMO"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El hook useMemo es un hook que nos permite memorizar el resultado de una funci\xF3n. Esto quiere decir que si la funci\xF3n que le pasamos como par\xE1metro no ha cambiado, no se ejecuta de nuevo y se devuelve el resultado que ya se hab\xEDa calculado."}),o("div",{className:"App",children:o(A,{code:t,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"HOOK USECALLBACK"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El hook useCallback es un hook que nos permite memorizar una funci\xF3n. Esto quiere decir que si la funci\xF3n que le pasamos como par\xE1metro no ha cambiado, no se ejecuta de nuevo y se devuelve la funci\xF3n que ya se hab\xEDa calculado."}),o("div",{className:"App",children:o(A,{code:r,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"DIFERENCIA ENTRE 'useCallback' y 'useMemo'"}),o(d.Body,{className:u.acordionbody,children:o("p",{children:"La diferencia entre useCallback y useMemo es que useCallback memoriza una funci\xF3n y useMemo memoriza el resultado de una funci\xF3n. En cualquier caso, en realidad, useCallback es una versi\xF3n especializada de useMemo. De hecho se puede simular la funcionalidad de useCallback con useMemo:"})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"RECORRER ARRAYS EN REACT"}),h(d.Body,{className:u.acordionbody,children:[h("p",{children:[o("h2",{children:"MAP"}),"El m\xE9todo map, lo utilizamos cuando queremos transformar un arreglo, pero persistiendo el arreglo original, dicho en otras palabras ejecuta una funci\xF3n dada en cada elemento del arreglo actual y crea un nuevo arreglo con el resultado de la funci\xF3n dada."]}),o("div",{className:"App",children:o(A,{code:a,language:"javascript"})}),h("p",{children:[o("h2",{children:"FILTER"}),"El m\xE9todo filter crea un nuevo arreglo con todos los elementos que cumplan la condici\xF3n dada, dicho en otras palabras, cuando iteramos un arreglo y queremos seleccionar cada el elemento que cumpla con la condici\xF3n dada."]}),o("div",{className:"App",children:o(A,{code:l,language:"javascript"})}),h("p",{children:[o("h2",{children:"FIND"}),"Como su nombre indica, busca un elemento dentro de un array y retorna el primero que cumpla con la condici\xF3n especificada en la funci\xF3n callback."]}),o("div",{className:"App",children:o(A,{code:i,language:"javascript"})}),h("p",{children:[o("h2",{children:"REDUCE"}),"El m\xE9todo reduce tambi\xE9n ejecuta una devoluci\xF3n de llamada para que elemento del arreglo, pero como su nombre lo dice reduce a un solo valor el arreglo (puede ser un objeto, string, n\xFAmero, etc.)"]}),o("div",{className:"App",children:o(A,{code:s,language:"javascript"})}),o("p",{children:o("h2",{children:"SOME"})}),o("div",{className:"App",children:o(A,{code:s,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"FETCH API"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Cuando necesitamos hacer peticiones a un servidor web podemos utilizar el API fetch de Javascript. Nos permite obtener en forma as\xEDncrona recursos de un servidor web."}),o("div",{className:"App",children:o(A,{code:c,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"PREGUNTAS SOBRE REACT JS"}),h(d.Body,{className:u.acordionbody,children:[o("div",{className:"App",children:o(A,{code:f,language:"javascript"})}),o("h5",{children:"Mas preguntas sobre React"}),o("a",{href:"https://www.reactjs.wiki/",target:"_blank",children:"https://www.reactjs.wiki/"})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"EVENTOS MAS USADOS EN REACT"}),o(d.Body,{className:u.acordionbody,children:h("p",{children:[o("h3",{children:"Escuchadores de eventos de rat\xF3n:"}),h("ul",{children:[o("li",{children:"onClick: bot\xF3n izquierdo del rat\xF3n"}),o("li",{children:"onMouseOver: pasar el rat\xF3n sobre un elemento"}),o("li",{children:"onMouseOut: sacar el rat\xF3n del elemento"})]}),o("h3",{children:"Escuchadores de eventos de teclado:"}),o("p",{children:"onKeyPress: pulsar una tecla"}),o("h3",{children:"Escuchadores de eventos sobre elementos: "}),h("ul",{children:[o("li",{children:"onFocus: poner el foco (seleccionar) en un elemento, por ejemplo un input"}),o("li",{children:"onBlur: quitar el foco de un elemento"}),o("li",{children:"onChange: al cambiar el contenido de un input, textarea o select (no es necesario quitar el foco del input para que se considere un cambio, al contrario que en el DOM)"})]}),o("h3",{children:"Escuchadores de eventos de formularios:"}),h("ul",{children:[o("li",{children:"onSubmit: pulsar el bot\xF3n submit del formulario "}),o("li",{children:"onReset: pulsar el bot\xF3n reset del formulario"})]})]})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"REACT ROUTER"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"React Router es la librer\xEDa m\xE1s popular para la gesti\xF3n de rutas en un proyecto de React, esta tiene tres componentes esenciales:"}),h("ul",{children:[o("li",{children:"'BrowserRouter' \u2192 Conecta nuestra aplicaci\xF3n a la URL del navegador, es decir mantiene la interfaz de usuario en sincron\xEDa con la URL del navegador mediante la API History de HTML5."}),o("li",{children:"'Routes' \u2192 Genera un \xE1rbol de rutas y a partir de este nos permite reemplazar la vista con el componente que coincide con la URL de nuestra barra de navegaci\xF3n y nos va a renderizar solamente dicho componente."}),o("li",{children:"'Route' \u2192 Representa una ruta en el \xE1rbol, necesita al menos las siguientes propiedades path y element, para representar una ruta."}),o("li",{children:"'Link' : Este componente recibe en su propiedad to el path de la ruta a la cual nos queremos dirigir dentro de nuestra aplicaci\xF3n. Es importante hacer uso de este, ya que adem\xE1s de permitirnos crear los enlaces de navegaci\xF3n este no recarga nuestra aplicaci\xF3n, caracter\xEDstica fundamental de una SPA."})]}),o("br",{}),o("h5",{children:"Rutas Anidadas"}),o("p",{children:"Las rutas anidadas nos permite tener persistencia de componentes es decir nosotros necesitamos que la navbar persista en todas nuestras vistas para lograr esto, la ruta que renderiza el componente Layout debe envolver a todas las rutas restantes de la siguiente manera:"}),o("div",{className:"App",children:o(A,{code:y,language:"javascript"})}),o("h5",{children:"Ruta Index"}),o("p",{children:"Podemos dirigirnos a la ruta \u201C/home\u201C y a la ruta \u201C/pets\u201D sin embargo, mientras permanecemos en la ruta ra\xEDz \u201C/\u201D Outlet no renderiza nada, podemos agregar una ruta hija que se renderice por defecto de la siguiente manera:"}),o("div",{className:"App",children:o(A,{code:v,language:"javascript"})}),o("p",{children:"De esta forma cuando estemos posicionados en la ruta \u201C/\u201D Outlet tomara el valor del element de la ruta index para renderizarlo en el componente padre."}),o("br",{}),o("h5",{children:"Ruta 404"}),o("p",{children:"Ahora imagina que nuestro usuario ingresa una URL desconocida\u2026 Lo que suceder\xE1 es que no se renderizara nada, ya que no existe ninguna ruta correspondiente, podemos configurar una ruta global que se muestre en caso de no haber coincidencias de la siguiente manera:"}),o("div",{className:"App",children:o(A,{code:x,language:"javascript"})}),o("h5",{children:"Rutas con segmentos Din\xE1micos"}),o("p",{children:"Tener un segmento din\xE1mico en nuestra ruta significa que este puede coincidir con cualquier valor en dicho segmento por ejemplo la ruta /pets/:id coincidir\xE1 con una URL como /pets/1. Pong\xE1moslo en pr\xE1ctica, ahora trabajemos en nuestro componente Pets.js, este componente renderizara una lista con los links para navegar a la vista de detalle de cada mascota, necesitaras toda la informaci\xF3n de nuestras mascotas para esto crea dentro de la carpeta src el archivo data.js:"}),o("div",{className:"App",children:o(A,{code:b,language:"javascript"})}),o("div",{className:"App",children:o(A,{code:C,language:"javascript"})}),o("p",{children:"Ahora cuando hacemos clic en el nombre de cada mascota, vemos que la URL cambia de manera din\xE1mica, cada una de estas URL mostrara datos sobre diferentes mascotas por lo que necesitamos una nueva ruta y un nuevo componente que muestre esa informaci\xF3n. Cree dentro de la carpeta components el archivo Details.js y dentro del Router.js configuremos la siguiente ruta:"}),o("div",{className:"App",children:o(A,{code:k,language:"javascript"})}),o("p",{children:"Details.js necesita dos cosas para renderizar de manera din\xE1mica el contenido de una sola mascota primero necesita conocer el valor que toma :id en la ruta actual por lo que haremos uso de useParams y despu\xE9s necesita identificar de todo el listado de mascotas la mascota actual:"}),o("div",{className:"App",children:o(A,{code:_,language:"javascript"})}),o("p",{children:"useParams - Este hook devuelve un objeto con las propiedades y el valor de los segmentos din\xE1micos de la URL."}),o("p",{children:"Finalmente, podemos hacer uso de nuestro hook useNavigate el cual nos devuelve una funci\xF3n que nos permite navegar program\xE1ticamente dentro de nuestra app:"}),o("div",{className:"App",children:o(A,{code:g,language:"javascript"})}),o("p",{children:"useNavigate al igual que el valor que le pasamos a la propiedad to del componente Link recibe la ruta que especifica a donde queremos que nuestro usuario navegue, pero tambi\xE9n puede recibir el valor delta (n\xFAmero) al que desea ir en el historial. Por ejemplo, en este caso navigate(-1) equivale a presionar el bot\xF3n Atr\xE1s. Por \xFAltimo no olvides modificar tu Router.js para que renderice en nuestra ruta \u201Cpets/:id\u201D, este componente Details.js"})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"AXIOS (Peticiones Api Rest)"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Es un cliente HTTP basado en promesas para el navegador y node.js[ref] Axios es una API HTTP de cliente basada en XMLHttpRequest, que se puede utilizar en el navegador y en un servidor con Node.js[ref]. Axios funciona de forma as\xEDncrona, permitiendo realizar llamadas API REST[ref] con retorno JSON. Adem\xE1s es uno de los clientes m\xE1s populares basado en promesas, que es simple, liviano y muy f\xE1cil de personalizar."}),o("div",{className:"App",children:o(A,{code:p,language:"javascript"})}),o("p",{children:"El mismo ejemplo, utilizando async/await :"}),o("div",{className:"App",children:o(A,{code:m,language:"javascript"})}),o("br",{}),o("h5",{children:"M\xE9todos Abreviados"}),o("p",{children:"Axios, nos proporciona un conjunto de m\xE9todos con alias, para realizar los diferentes tipos de solicitudes. Los m\xE1s populares son :"}),h("ul",{children:[o("li",{children:"axios.get(url[, config])"}),o("li",{children:"axios.post(url[, data[, config]])"})]}),o("br",{}),o("h5",{children:"Para los verbos HTTP:"}),h("ul",{children:[o("li",{children:"axios.delete(url[, config])"}),o("li",{children:"axios.put(url[, data[, config]])"}),o("li",{children:"axios.patch(url[, data[, config]])"}),o("li",{children:"axios.options(url[, config])"})]}),o("br",{}),o("h5",{children:"Otros:"}),h("ul",{children:[o("li",{children:"axios.head(url[, config]) \u2014 Obtener las cabeceras de una petici\xF3n"}),o("li",{children:"axios.all(iterable) \u2014 Hacer solicitudes simult\xE1neas"}),o("li",{children:"axios.spread \u2014 Obtener los valores separados de axios.all"})]})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"REACT NATIVE + EXPO"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:E,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"HOOK USESTATE"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El hook useState es utilizado para crear variables de estado, quiere decir que su valor es din\xE1mico, que este puede cambiar en el tiempo y eso requiere una re-renderizaci\xF3n del componente donde se utiliza"}),o("div",{className:"App",children:o(A,{code:e,language:"javascript"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"REDUX TKT"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:w,language:"javascript"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"NEXTJS 12"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:S,language:"javascript"})})})]})})]})}function av(){const e=`
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
`,n=`
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
`,t=`
// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
`,r=`
SINTAXIS SCSS
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
`,a=`
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
`,i=`
SINTAXIS SCSS
@use "sass:math";

.container {
  display: flex;
}

article[role="main"] {
  width: math.div(600px, 960px) * 100%;
}

aside[role="complementary"] {
  width: math.div(300px, 960px) * 100%;
  margin-left: auto;
}
`;return h(ue,{children:[o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"VARIABLES"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Piense en las variables como una forma de almacenar informaci\xF3n que desea reutilizar en su hoja de estilo. Puede almacenar cosas como colores, pilas de fuentes o cualquier valor de CSS que crea que querr\xE1 reutilizar. Sass usa el $ s\xEDmbolo para convertir algo en una variable. Aqu\xED hay un ejemplo:"}),o("div",{className:"App",children:o(A,{code:e,language:"css"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"VARIABLES"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Al escribir HTML , probablemente haya notado que tiene una jerarqu\xEDa visual y anidada clara. CSS , por otro lado, no lo hace."}),o("p",{children:"Sass le permitir\xE1 anidar sus selectores CSS de una manera que siga la misma jerarqu\xEDa visual de su HTML. Tenga en cuenta que las reglas demasiado anidadas dar\xE1n como resultado un CSS SOBRECUALIFICADO que podr\xEDa resultar dif\xEDcil de mantener y generalmente se considera una mala pr\xE1ctica."}),o("p",{children:"Con eso en mente, aqu\xED hay un ejemplo de algunos estilos t\xEDpicos para la navegaci\xF3n de un sitio:"}),o("div",{className:"App",children:o(A,{code:n,language:"css"})})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"MODULOS"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"No tiene que escribir todo su Sass en un solo archivo. Puedes dividirlo como quieras con la @useregla. Esta regla carga otro archivo Sass como un m\xF3dulo , lo que significa que puede hacer referencia a sus variables, combinaciones y funciones en su archivo Sass con un espacio de nombres basado en el nombre del archivo. \xA1 Usar un archivo tambi\xE9n incluir\xE1 el CSS que genera en su salida compilada!"}),o("div",{className:"App",children:o(A,{code:t,language:"css"})}),o("p",{children:"Observe que estamos usando @use 'base';en el styles.scssarchivo. Cuando usa un archivo, no necesita incluir la extensi\xF3n del archivo. Sass es inteligente y lo resolver\xE1 por ti."})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"MIXINS"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Algunas cosas en CSS son un poco tediosas de escribir, especialmente con CSS3  y los muchos prefijos de proveedores que existen. Un mixin le permite crear grupos de  declaraciones CSS que desea reutilizar en todo su sitio. Ayuda a mantener tu Sass muy SECO. Incluso puede pasar valores para que su mezcla sea m\xE1s flexible. Aqu\xED hay un ejemplo para  theme."}),o("div",{className:"App",children:o(A,{code:r,language:"css"})}),o("p",{children:"Para crear un mixin usas la @mixindirectiva y le das un nombre. Hemos nombrado nuestro mixin theme. Tambi\xE9n estamos usando la variable  $themedentro de los par\xE9ntesis para que podamos pasar themelo que queramos. Despu\xE9s de crear su mixin, puede usarlo como una declaraci\xF3n CSS  que comienza con @includeseguido del nombre del mixin."})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"INCLUDE"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"El uso @extendle permite compartir un conjunto de propiedades CSS de un selector a otro. En nuestro ejemplo, vamos a crear una serie simple de mensajes para errores, advertencias y \xE9xitos utilizando otra caracter\xEDstica que va de la mano con las clases extendidas de marcador de posici\xF3n. Una clase de marcador de posici\xF3n es un tipo especial de clase que solo se imprime cuando se extiende y puede ayudar a mantener el CSS compilado ordenado y limpio."}),o("div",{className:"App",children:o(A,{code:a,language:"css"})}),o("p",{children:"Lo que hace el c\xF3digo anterior es decirle a .message, .success, .errory .warningque se comporte como %message-shared. Eso significa que en cualquier lugar que %message-sharedaparezca, , , .messagey .successtambi\xE9n lo har\xE1. La magia sucede en el CSS generado , donde cada una de estas clases obtendr\xE1 las mismas propiedades de CSS que . Esto le ayuda a evitar tener que escribir varios nombres de clase en elementos HTML  ..error .warning%message-shared"}),o("p",{children:"Puede extender la mayor\xEDa de los selectores de CSS simples adem\xE1s de las clases de marcadores de posici\xF3n en Sass, pero usar marcadores de posici\xF3n es la forma m\xE1s f\xE1cil de asegurarse de que no est\xE1 extendiendo una clase que est\xE1 anidada en otro lugar de sus estilos, lo que puede resultar en selectores no deseados en su  CSS."}),o("p",{children:"Tenga en cuenta que el CSS NO%equal-heights se genera porque %equal-heightsnunca se extiende."})]})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"OPERADORES"}),h(d.Body,{className:u.acordionbody,children:[o("p",{children:"Hacer matem\xE1ticas en tu CSS es muy \xFAtil. Sass tiene un pu\xF1ado de operadores matem\xE1ticos est\xE1ndar como +, -, *, math.div()y %. En nuestro ejemplo, vamos a hacer algunos c\xE1lculos matem\xE1ticos simples para calcular el ancho de un article y aside."}),h("div",{className:"App",children:[o(A,{code:i,language:"css"}),o("p",{children:"Hemos creado una cuadr\xEDcula fluida muy simple, basada en 960px. Las operaciones en Sass nos permiten hacer algo como tomar valores de p\xEDxeles y convertirlos a porcentajes sin mucha molestia."})]})]})]})})]})}function ov(){const e=`<b>Texto en negrita</b>
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init
  borrar todo el conteido de global. css y agregar:
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  agregar a tailwind.config:
  content: [
      "./pages/**/*.{js, ts, jsx, tsx}",
      "./layout/**/*.{js, ts, jsx, tsx}",
      "./components/**/*.{js, ts, jsx, tsx}"
    ],

  y a las carpetas donde queremos usar estos estilos.

  https://tailwindcss.com/docs/guides/vite   (instalar vite y tailwindcss)
  `,n=`
  md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll (scroll del lado derecho)
mt-10, mr-5
text-2xl font-bold hover:cursor-pointer    flex items-center gap-2
text 4xl
w-full (toma todo el ancho disponible)
W-32
border
border-b
p-5 (padding todos lados)
px-5 (padding a los lados)
py-5 (padding arriba y abajo)
font-black
my-10
grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
h-screen (altura del area principal ocupe toda al pantalla)
h-full toda la altura disponible
text-white
text-center
text-xs
md:flex
uppercase
leading-none (sin interlineado)
h-2 (altura) /height
w-10 (ancho) /wight
shadow
space-y-5 (agrega un poco de separacion arriba y abajo)
items-center  /align center
rounded-md  /border radius
block / toma todo el ancho disponible
last-of-type:border-0
max-wd-sm
block (ocupa todo el ancho dispinible)
  `;return h(ue,{children:[o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"Instalar Tailwindcss en React / Nextjs"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:e,language:"bash"})})})]})}),o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"Clases Tailwindcss"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:n,language:"bash"})})})]})})]})}function iv(){const e=`
  Alt+ flechas 	/	Mover elemento seleccionado
  
  Alt + Z: 	/	En caso de que nuestro c\xF3digo sea m\xE1s extenso que la anchura de 
  la pantalla, este atajo nos permite romper la l\xEDnea y as\xED utiliza \xFAnicamente el ancho de nuestra pantalla.
  
  Ctrl + Shift + P:  /	Abre el desplegable de comandos.

  Gesti\xF3n de archivos con VS Code
  Para gestionar los archivos con mayor agilidad, podemos hacer uso de los siguientes atajos:

  Ctrl + O: 	/	Abre el explorador de archivos para abrir un archivo existente en el equipo.

  Ctrl + N: 	/	Crea un nuevo archivo.

  Ctrl + S: 	/	Guarda el archivo actual.

  Ctrl + Shift + S:  /	Abre el explorador de archivos para guardar el archivo actual.

  Ctrl + K + Ctrl + W: /	 Cierra todas las pesta\xF1as que est\xE9n abiertas en el editor.

  Ctrl + Shift + T:  /	Permite abrir las \xFAltimas pesta\xF1as que hemos 
  ido cerrando por orden (Para aquellos despistes que cerramos sin querer).
  
  Ctrl + 2:  /	Nos permite dividir el editor para as\xED tener varios 
  archivos abiertos y poder comparar. Se puede cambiar el 2 por otro 
  n\xFAmero el cual ser\xE1 la divisi\xF3n de pesta\xF1as.
  
  
  Atajos para buscar dentro del editor
  Si lo que se pretende es buscar c\xF3digo y reemplazarlo de forma r\xE1pida y 
  eficaz sin tener que ir uno por uno, a continuaci\xF3n te dejamos los siguientes atajos:
  
  Ctrl + F: 	/	Abre el buscador en el cual vamos a poder realizar 
  b\xFAsquedas dentro del archivo que tengamos abierto.

  Ctrl + H: 	/	Abre el mismo buscador que en el atajo anterior, 
  pero ahora tambi\xE9n tenemos otro campo donde podemos indicarle el 
  texto a sustituir. Es decir, podemos decirle que busque lo que nos interese y 
  que lo sustituya por lo que le introducimos.

  Ctrl + G: 	/	Hay ocasiones que los archivos son muy extensos y tediosos 
  de navegar por el, pero gracias a este atajo, podremos desplazarnos a la l\xEDnea que nos interese.

  Alt + Enter: 	/	En el momento se ha realizado dicha b\xFAsqueda, podemos 
  utilizar este atajo para seleccionar todos los elementos que se encuentren.

  Ctrl + D: 	/	Si seleccionamos un fragmento de c\xF3digo con las teclas 
  Ctrl o Shift + flechas izquierda/derecha, al realizar este atajo a\xF1adiremos 
  dicho c\xF3digo seleccionado al buscador.
    
  `;return o(ue,{children:o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"COMANDOS B\xC1SICOS VS CODE"}),o(d.Body,{className:u.acordionbody,children:o("div",{className:"App",children:o(A,{code:e,language:"bash"})})})]})})})}function lv(){return o(ue,{children:o(d,{className:u.acordion,children:h(d.Item,{className:u.item,eventKey:"0",children:[o(d.Header,{className:u.acordiontitle,children:"LINKS DE AYUDA PARA FRONTEND"}),o(d.Body,{className:u.acordionbody,children:h("div",{className:"App",children:[o("a",{href:"https://robohash.org/",target:"_blank",children:"https://robohash.org/"}),o("span",{children:" "}),o("span",{children:"Api Avatars de Robot"}),o("br",{}),o("a",{href:"https://cssreference.io/",target:"_blank",children:"https://cssreference.io/"}),o("span",{children:" "}),o("span",{children:"Ejemplos Css"}),o("br",{}),o("a",{href:"https://giphy.com/",target:"_blank",children:"https://giphy.com/"}),o("span",{children:" "}),o("span",{children:"Gifs"}),o("br",{}),o("a",{href:"https://colorhunt.co/",target:"_blank",children:"https://colorhunt.co/"}),o("span",{children:" "}),o("span",{children:"Combinaci\xF3n de Colores"}),o("br",{}),o("a",{href:"https://gradientbuttons.colorion.co/",target:"_blank",children:"https://gradientbuttons.colorion.co/"}),o("span",{children:" "}),o("span",{children:"Botones Colores en Degradado"}),o("br",{}),o("a",{href:"https://www.eniun.com/resumen-tabla-propiedades-css-valores/",target:"_blank",children:"https://www.eniun.com/resumen-tabla-propiedades-css-valores/"}),o("span",{children:" "}),o("span",{children:"Tabla Resumen Popiedades Css"}),o("br",{}),o("a",{href:"https://css.glass/",target:"_blank",children:"https://css.glass/"}),o("span",{children:" "}),o("span",{children:"Transparencia de Colores en Css"}),o("br",{}),o("a",{href:"https://keyframes.app/",target:"_blank",children:"https://keyframes.app/"}),o("span",{children:" "}),o("span",{children:"Animaciones/Sombras/Colores en Css"}),o("br",{}),o("a",{href:"https://csslayout.io/",target:"_blank",children:"https://csslayout.io/"}),o("span",{children:" "}),o("span",{children:"Una colecci\xF3n de dise\xF1os y patrones populares hechos con CSS"}),o("br",{}),o("a",{href:"https://designstripe.com/",target:"_blank",children:"https://designstripe.com/"}),o("span",{children:" "}),o("span",{children:"Creador de Ilustraciones Profesionales"}),o("br",{}),o("a",{href:"https://roadmap.sh/frontend",target:"_blank",children:"https://roadmap.sh/frontend"}),o("span",{children:" "}),o("span",{children:"Roadmap Frontend/React"}),o("br",{}),o("a",{href:"https://platzi.com/blog/12-api-gratis-para-desarrolladores-frontend/",target:"_blank",children:"https://platzi.com/blog/12-api-gratis-para-desarrolladores-frontend/"}),o("span",{children:" "}),o("span",{children:"APIS GRATIS"})]})})]})})})}const sv=ri.createRoot(document.getElementById("root"));sv.render(o(A0,{basename:"/help-app",children:o(S0,{children:h(Ae,{path:"/",element:o(M1,{}),children:[o(Ae,{exact:!0,path:"Menuhtml",element:o(Q1,{})}),o(Ae,{exact:!0,path:"Menubootstrap",element:o(J1,{})}),o(Ae,{exact:!0,path:"Menucmd",element:o(X1,{})}),o(Ae,{exact:!0,path:"Menucss",element:o(Z1,{})}),o(Ae,{exact:!0,path:"Menugit",element:o(ev,{})}),o(Ae,{exact:!0,path:"Menujs",element:o(nv,{})}),o(Ae,{exact:!0,path:"Menunpm",element:o(tv,{})}),o(Ae,{exact:!0,path:"Menureact",element:o(rv,{})}),o(Ae,{exact:!0,path:"Menusass",element:o(av,{})}),o(Ae,{exact:!0,path:"Menutailwind",element:o(ov,{})}),o(Ae,{exact:!0,path:"Menuvs",element:o(iv,{})}),o(Ae,{exact:!0,path:"Menulink",element:o(lv,{})})]})})}));
