var Cf=Object.defineProperty,kf=Object.defineProperties;var Df=Object.getOwnPropertyDescriptors;var hc=Object.getOwnPropertySymbols,Vf=Object.getPrototypeOf,Nf=Object.prototype.hasOwnProperty,xf=Object.prototype.propertyIsEnumerable,Of=Reflect.get;var As=(n,e,t)=>e in n?Cf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,yt=(n,e)=>{for(var t in e||(e={}))Nf.call(e,t)&&As(n,t,e[t]);if(hc)for(var t of hc(e))xf.call(e,t)&&As(n,t,e[t]);return n},Qr=(n,e)=>kf(n,Df(e));var Mf=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Zn=(n,e,t)=>As(n,typeof e!="symbol"?e+"":e,t);var jt=(n,e,t)=>Of(Vf(n),t,e);var m=(n,e,t)=>new Promise((r,i)=>{var s=u=>{try{c(t.next(u))}catch(d){i(d)}},a=u=>{try{c(t.throw(u))}catch(d){i(d)}},c=u=>u.done?r(u.value):Promise.resolve(u.value).then(s,a);c((t=t.apply(n,e)).next())});import{t as M,j as N,S as Lf,E as Ff,C as Uf,a as $f}from"./booking-core.Bk0AHeOI.js";import{a as Jl,f as jf,_ as go,d as ee,r as J,R as Bf,o as qf}from"./vendor.DC4dHUn3.js";var ME=Mf(Ye=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Xl,dc=Jl;Xl=dc.createRoot,dc.hydrateRoot;const zf=jf`
  /* Reset styles */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base styles */
  :root {
    font-family: 'Poppins', system-ui, -apple-system, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html, body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    min-height: 100vh;
  }

  body {
    background-color: #ffffff;
    color: #000000;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.2;
  }

  /* Portal styles */
  .booking-widget-portal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Interactive elements */
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    &:focus-visible {
      outline: 2px solid #F5BBC9;
      outline-offset: 2px;
    }
  }

  /* Utility classes */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;var fc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Hf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},eu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,p=s>>2,v=(s&3)<<4|c>>4;let E=(c&15)<<2|d>>6,R=d&63;u||(R=64,a||(E=64)),r.push(t[p],t[v],t[E],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Zl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Hf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||v==null)throw new Wf;const E=s<<2|c>>4;if(r.push(E),d!==64){const R=c<<4&240|d>>2;if(r.push(R),v!==64){const D=d<<6&192|v;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gf=function(n){const e=Zl(n);return eu.encodeByteArray(e,!0)},fi=function(n){return Gf(n).replace(/\./g,"")},tu=function(n){try{return eu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=()=>Kf().__FIREBASE_DEFAULTS__,Yf=()=>{if(typeof process=="undefined"||typeof fc=="undefined")return;const n=fc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jf=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&tu(n[1]);return e&&JSON.parse(e)},xi=()=>{try{return Qf()||Yf()||Jf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nu=n=>{var e,t;return(t=(e=xi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xf=n=>{const e=nu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ru=()=>{var n;return(n=xi())===null||n===void 0?void 0:n.config},iu=n=>{var e;return(e=xi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fi(JSON.stringify(t)),fi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function np(){var n;const e=(n=xi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function rp(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function su(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ip(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sp(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function op(){return!np()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ou(){try{return typeof indexedDB=="object"}catch(n){return!1}}function au(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function ap(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="FirebaseError";class Ge extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=cp,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}}class Zt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?lp(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Ge(i,c,r)}}function lp(n,e){return n.replace(up,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const up=/\{\$([^}]+)}/g;function hp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(pc(s)&&pc(a)){if(!dr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function pc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dp(n,e){const t=new fp(n,e);return t.subscribe.bind(t)}class fp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");pp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=bs),i.error===void 0&&(i.error=bs),i.complete===void 0&&(i.complete=bs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(a){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=1e3,mp=2,_p=4*60*60*1e3,yp=.5;function gc(n,e=gp,t=mp){const r=e*Math.pow(t,n),i=Math.round(yp*r*(Math.random()-.5)*2);return Math.min(_p,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n){return n&&n._delegate?n._delegate:n}class He{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Zf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ip(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return m(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tp(n){return n===Bt?void 0:n}function Ip(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const wp={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Ap=G.INFO,bp={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Sp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=bp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oi{constructor(e){this.name=e,this._logLevel=Ap,this._logHandler=Sp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Rp=(n,e)=>e.some(t=>n instanceof t);let mc,_c;function Pp(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cp(){return _c||(_c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cu=new WeakMap,js=new WeakMap,lu=new WeakMap,Ss=new WeakMap,mo=new WeakMap;function kp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(bt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&cu.set(t,n)}).catch(()=>{}),mo.set(e,n),e}function Dp(n){if(js.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});js.set(n,e)}let Bs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return js.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Vp(n){Bs=n(Bs)}function Np(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Rs(this),e,...t);return lu.set(r,e.sort?e.sort():[e]),bt(r)}:Cp().includes(n)?function(...e){return n.apply(Rs(this),e),bt(cu.get(this))}:function(...e){return bt(n.apply(Rs(this),e))}}function xp(n){return typeof n=="function"?Np(n):(n instanceof IDBTransaction&&Dp(n),Rp(n,Pp())?new Proxy(n,Bs):n)}function bt(n){if(n instanceof IDBRequest)return kp(n);if(Ss.has(n))return Ss.get(n);const e=xp(n);return e!==n&&(Ss.set(n,e),mo.set(e,n)),e}const Rs=n=>mo.get(n);function uu(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=bt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(bt(a.result),u.oldVersion,u.newVersion,bt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Op=["get","getKey","getAll","getAllKeys","count"],Mp=["put","add","delete","clear"],Ps=new Map;function yc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ps.get(e))return Ps.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Mp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Op.includes(t)))return;const s=function(a,...c){return m(this,null,function*(){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(yield Promise.all([d[t](...c),i&&u.done]))[0]})};return Ps.set(e,s),s}Vp(n=>Qr(yt({},n),{get:(e,t,r)=>yc(e,t)||n.get(e,t,r),has:(e,t)=>!!yc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Fp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qs="@firebase/app",vc="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Oi("@firebase/app"),Up="@firebase/app-compat",$p="@firebase/analytics-compat",jp="@firebase/analytics",Bp="@firebase/app-check-compat",qp="@firebase/app-check",zp="@firebase/auth",Hp="@firebase/auth-compat",Wp="@firebase/database",Gp="@firebase/data-connect",Kp="@firebase/database-compat",Qp="@firebase/functions",Yp="@firebase/functions-compat",Jp="@firebase/installations",Xp="@firebase/installations-compat",Zp="@firebase/messaging",eg="@firebase/messaging-compat",tg="@firebase/performance",ng="@firebase/performance-compat",rg="@firebase/remote-config",ig="@firebase/remote-config-compat",sg="@firebase/storage",og="@firebase/storage-compat",ag="@firebase/firestore",cg="@firebase/vertexai",lg="@firebase/firestore-compat",ug="firebase",hg="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="[DEFAULT]",dg={[qs]:"fire-core",[Up]:"fire-core-compat",[jp]:"fire-analytics",[$p]:"fire-analytics-compat",[qp]:"fire-app-check",[Bp]:"fire-app-check-compat",[zp]:"fire-auth",[Hp]:"fire-auth-compat",[Wp]:"fire-rtdb",[Gp]:"fire-data-connect",[Kp]:"fire-rtdb-compat",[Qp]:"fire-fn",[Yp]:"fire-fn-compat",[Jp]:"fire-iid",[Xp]:"fire-iid-compat",[Zp]:"fire-fcm",[eg]:"fire-fcm-compat",[tg]:"fire-perf",[ng]:"fire-perf-compat",[rg]:"fire-rc",[ig]:"fire-rc-compat",[sg]:"fire-gcs",[og]:"fire-gcs-compat",[ag]:"fire-fst",[lg]:"fire-fst-compat",[cg]:"fire-vertex","fire-js":"fire-js",[ug]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Map,fg=new Map,Hs=new Map;function Tc(n,e){try{n.container.addComponent(e)}catch(t){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function tt(n){const e=n.name;if(Hs.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;Hs.set(e,n);for(const t of pi.values())Tc(t,n);for(const t of fg.values())Tc(t,n);return!0}function en(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new Zt("app","Firebase",pg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=hg;function hu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(t||(t=ru()),!t)throw St.create("no-options");const s=pi.get(i);if(s){if(dr(t,s.options)&&dr(r,s.config))return s;throw St.create("duplicate-app",{appName:i})}const a=new Ep(i);for(const u of Hs.values())a.addComponent(u);const c=new gg(t,r,a);return pi.set(i,c),c}function _o(n=zs){const e=pi.get(n);if(!e&&n===zs&&ru())return hu();if(!e)throw St.create("no-app",{appName:n});return e}function Be(n,e,t){var r;let i=(r=dg[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(c.join(" "));return}tt(new He(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="firebase-heartbeat-database",_g=1,fr="firebase-heartbeat-store";let Cs=null;function du(){return Cs||(Cs=uu(mg,_g,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fr)}catch(t){console.warn(t)}}}}).catch(n=>{throw St.create("idb-open",{originalErrorMessage:n.message})})),Cs}function yg(n){return m(this,null,function*(){try{const t=(yield du()).transaction(fr),r=yield t.objectStore(fr).get(fu(n));return yield t.done,r}catch(e){if(e instanceof Ge)ut.warn(e.message);else{const t=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ut.warn(t.message)}}})}function Ic(n,e){return m(this,null,function*(){try{const r=(yield du()).transaction(fr,"readwrite");yield r.objectStore(fr).put(e,fu(n)),yield r.done}catch(t){if(t instanceof Ge)ut.warn(t.message);else{const r=St.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ut.warn(r.message)}}})}function fu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=1024,Tg=30;class Ig{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return m(this,null,function*(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ec();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Tg){const a=Ag(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ut.warn(r)}})}getHeartbeatsHeader(){return m(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ec(),{heartbeatsToSend:r,unsentEntries:i}=Eg(this._heartbeatsCache.heartbeats),s=fi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ut.warn(t),""}})}}function Ec(){return new Date().toISOString().substring(0,10)}function Eg(n,e=vg){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),wc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),wc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class wg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return m(this,null,function*(){return ou()?au().then(()=>!0).catch(()=>!1):!1})}read(){return m(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield yg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return m(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Ic(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return m(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Ic(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return})}}function wc(n){return fi(JSON.stringify({version:2,heartbeats:n})).length}function Ag(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(n){tt(new He("platform-logger",e=>new Lp(e),"PRIVATE")),tt(new He("heartbeat",e=>new Ig(e),"PRIVATE")),Be(qs,vc,n),Be(qs,vc,"esm2017"),Be("fire-js","")}bg("");var Ac=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rt,pu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function y(){}y.prototype=g.prototype,w.D=g.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(I,T,A){for(var _=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)_[_e-2]=arguments[_e];return g.prototype[T].apply(I,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,y){y||(y=0);var I=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)I[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;16>T;++T)I[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=w.g[0],y=w.g[1],T=w.g[2];var A=w.g[3],_=g+(A^y&(T^A))+I[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+I[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+I[2]+606105819&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+I[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(A^y&(T^A))+I[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+I[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+I[6]+2821735955&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+I[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(A^y&(T^A))+I[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+I[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+I[10]+4294925233&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+I[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(A^y&(T^A))+I[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+I[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+I[14]+2792965006&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+I[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(T^A&(y^T))+I[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+I[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+I[11]+643717713&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+I[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^A&(y^T))+I[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+I[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+I[15]+3634488961&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+I[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^A&(y^T))+I[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+I[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+I[3]+4107603335&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+I[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^A&(y^T))+I[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+I[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+I[7]+1735328473&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+I[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(y^T^A)+I[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+I[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+I[11]+1839030562&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+I[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^A)+I[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+I[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+I[7]+4139469664&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+I[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^A)+I[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+I[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+I[3]+3572445317&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+I[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^A)+I[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+I[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+I[15]+530742520&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+I[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(T^(y|~A))+I[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+I[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+I[14]+2878612391&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+I[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~A))+I[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+I[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+I[10]+4293915773&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+I[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~A))+I[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+I[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+I[6]+2734768916&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+I[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~A))+I[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+I[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+I[2]+718787259&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var y=g-this.blockSize,I=this.B,T=this.h,A=0;A<g;){if(T==0)for(;A<=y;)i(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<g;)if(I[T++]=w.charCodeAt(A++),T==this.blockSize){i(this,I),T=0;break}}else for(;A<g;)if(I[T++]=w[A++],T==this.blockSize){i(this,I),T=0;break}}this.h=T,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var y=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=y&255,y/=256;for(this.u(w),w=Array(16),g=y=0;4>g;++g)for(var I=0;32>I;I+=8)w[y++]=this.g[g]>>>I&255;return w};function s(w,g){var y=c;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=g(w)}function a(w,g){this.h=g;for(var y=[],I=!0,T=w.length-1;0<=T;T--){var A=w[T]|0;I&&A==g||(y[T]=A,I=!1)}this.g=y}var c={};function u(w){return-128<=w&&128>w?s(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return v;if(0>w)return P(d(-w));for(var g=[],y=1,I=0;w>=y;I++)g[I]=w/y|0,y*=4294967296;return new a(g,0)}function p(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return P(p(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),I=v,T=0;T<w.length;T+=8){var A=Math.min(8,w.length-T),_=parseInt(w.substring(T,T+A),g);8>A?(A=d(Math.pow(g,A)),I=I.j(A).add(d(_))):(I=I.j(y),I=I.add(d(_)))}return I}var v=u(0),E=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-P(this).m();for(var w=0,g=1,y=0;y<this.g.length;y++){var I=this.i(y);w+=(0<=I?I:4294967296+I)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D(this))return"0";if(x(this))return"-"+P(this).toString(w);for(var g=d(Math.pow(w,6)),y=this,I="";;){var T=ie(y,g).g;y=F(y,T.j(g));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=T,D(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function D(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function x(w){return w.h==-1}n.l=function(w){return w=F(this,w),x(w)?-1:D(w)?0:1};function P(w){for(var g=w.g.length,y=[],I=0;I<g;I++)y[I]=~w.g[I];return new a(y,~w.h).add(E)}n.abs=function(){return x(this)?P(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],I=0,T=0;T<=g;T++){var A=I+(this.i(T)&65535)+(w.i(T)&65535),_=(A>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);I=_>>>16,A&=65535,_&=65535,y[T]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function F(w,g){return w.add(P(g))}n.j=function(w){if(D(this)||D(w))return v;if(x(this))return x(w)?P(this).j(P(w)):P(P(this).j(w));if(x(w))return P(this.j(P(w)));if(0>this.l(R)&&0>w.l(R))return d(this.m()*w.m());for(var g=this.g.length+w.g.length,y=[],I=0;I<2*g;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var T=0;T<w.g.length;T++){var A=this.i(I)>>>16,_=this.i(I)&65535,_e=w.i(T)>>>16,Me=w.i(T)&65535;y[2*I+2*T]+=_*Me,H(y,2*I+2*T),y[2*I+2*T+1]+=A*Me,H(y,2*I+2*T+1),y[2*I+2*T+1]+=_*_e,H(y,2*I+2*T+1),y[2*I+2*T+2]+=A*_e,H(y,2*I+2*T+2)}for(I=0;I<g;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=g;I<2*g;I++)y[I]=0;return new a(y,0)};function H(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function W(w,g){this.g=w,this.h=g}function ie(w,g){if(D(g))throw Error("division by zero");if(D(w))return new W(v,v);if(x(w))return g=ie(P(w),g),new W(P(g.g),P(g.h));if(x(g))return g=ie(w,P(g)),new W(P(g.g),g.h);if(30<w.g.length){if(x(w)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var y=E,I=g;0>=I.l(w);)y=we(y),I=we(I);var T=ne(y,1),A=ne(I,1);for(I=ne(I,2),y=ne(y,2);!D(I);){var _=A.add(I);0>=_.l(w)&&(T=T.add(y),A=_),I=ne(I,1),y=ne(y,1)}return g=F(w,T.j(g)),new W(T,g)}for(T=v;0<=w.l(g);){for(y=Math.max(1,Math.floor(w.m()/g.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=d(y),_=A.j(g);x(_)||0<_.l(w);)y-=I,A=d(y),_=A.j(g);D(A)&&(A=E),T=T.add(A),w=F(w,_)}return new W(T,w)}n.A=function(w){return ie(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],I=0;I<g;I++)y[I]=this.i(I)&w.i(I);return new a(y,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],I=0;I<g;I++)y[I]=this.i(I)|w.i(I);return new a(y,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],I=0;I<g;I++)y[I]=this.i(I)^w.i(I);return new a(y,this.h^w.h)};function we(w){for(var g=w.g.length+1,y=[],I=0;I<g;I++)y[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(y,w.h)}function ne(w,g){var y=g>>5;g%=32;for(var I=w.g.length-y,T=[],A=0;A<I;A++)T[A]=0<g?w.i(A+y)>>>g|w.i(A+y+1)<<32-g:w.i(A+y);return new a(T,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Rt=a}).apply(typeof Ac!="undefined"?Ac:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Yr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gu,er,mu,ri,Ws,_u,yu,vu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yr=="object"&&Yr];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,l){if(l)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var b=o[f];if(!(b in h))break e;h=h[b]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var h=0,f=!1,b={next:function(){if(!f&&h<o.length){var S=h++;return{value:l(S,o[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,h){return o.call.apply(o.bind,arguments)}function v(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,f),o.apply(l,b)}}return function(){return o.apply(l,arguments)}}function E(o,l,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,E.apply(null,arguments)}function R(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function D(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,b,S){for(var V=Array(arguments.length-2),re=2;re<arguments.length;re++)V[re-2]=arguments[re];return l.prototype[b].apply(f,V)}}function x(o){const l=o.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function P(o,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const b=o.length||0,S=f.length||0;o.length=b+S;for(let V=0;V<S;V++)o[b+V]=f[V]}else o.push(f)}}class F{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function H(o){return/^[\s\xa0]*$/.test(o)}function W(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function ie(o){return ie[" "](o),o}ie[" "]=function(){};var we=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function ne(o,l,h){for(const f in o)l.call(h,o[f],f,o)}function w(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function g(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,l){let h,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(h in f)o[h]=f[h];for(let S=0;S<y.length;S++)h=y[S],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function T(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function A(o){c.setTimeout(()=>{throw o},0)}function _(){var o=ye;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class _e{constructor(){this.h=this.g=null}add(l,h){const f=Me.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Me=new F(()=>new $,o=>o.reset());class ${constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let te,le=!1,ye=new _e,Ot=()=>{const o=c.Promise.resolve(void 0);te=()=>{o.then(Mt)}};var Mt=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){A(h)}var l=Me;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}le=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Qd=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch(h){}return o}();function Un(o,l){if(ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(we){e:{try{ie(l.nodeName);var b=!0;break e}catch(S){}b=!1}b||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Yd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Un.aa.h.call(this)}}D(Un,ge);var Yd={2:"touch",3:"pen",4:"mouse"};Un.prototype.h=function(){Un.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var kr="closure_listenable_"+(1e6*Math.random()|0),Jd=0;function Xd(o,l,h,f,b){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=b,this.key=++Jd,this.da=this.fa=!1}function Dr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Vr(o){this.src=o,this.g={},this.h=0}Vr.prototype.add=function(o,l,h,f,b){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var V=ns(o,l,f,b);return-1<V?(l=o[V],h||(l.fa=!1)):(l=new Xd(l,this.src,S,!!f,b),l.fa=h,o.push(l)),l};function ts(o,l){var h=l.type;if(h in o.g){var f=o.g[h],b=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=b)&&Array.prototype.splice.call(f,b,1),S&&(Dr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ns(o,l,h,f){for(var b=0;b<o.length;++b){var S=o[b];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==f)return b}return-1}var rs="closure_lm_"+(1e6*Math.random()|0),is={};function da(o,l,h,f,b){if(Array.isArray(l)){for(var S=0;S<l.length;S++)da(o,l[S],h,f,b);return null}return h=ga(h),o&&o[kr]?o.K(l,h,d(f)?!!f.capture:!1,b):Zd(o,l,h,!1,f,b)}function Zd(o,l,h,f,b,S){if(!l)throw Error("Invalid event type");var V=d(b)?!!b.capture:!!b,re=os(o);if(re||(o[rs]=re=new Vr(o)),h=re.add(l,h,f,V,S),h.proxy)return h;if(f=ef(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Qd||(b=V),b===void 0&&(b=!1),o.addEventListener(l.toString(),f,b);else if(o.attachEvent)o.attachEvent(pa(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ef(){function o(h){return l.call(o.src,o.listener,h)}const l=tf;return o}function fa(o,l,h,f,b){if(Array.isArray(l))for(var S=0;S<l.length;S++)fa(o,l[S],h,f,b);else f=d(f)?!!f.capture:!!f,h=ga(h),o&&o[kr]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],h=ns(S,h,f,b),-1<h&&(Dr(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=os(o))&&(l=o.g[l.toString()],o=-1,l&&(o=ns(l,h,f,b)),(h=-1<o?l[o]:null)&&ss(h))}function ss(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[kr])ts(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(pa(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=os(l))?(ts(h,o),h.h==0&&(h.src=null,l[rs]=null)):Dr(o)}}}function pa(o){return o in is?is[o]:is[o]="on"+o}function tf(o,l){if(o.da)o=!0;else{l=new Un(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&ss(o),o=h.call(f,l)}return o}function os(o){return o=o[rs],o instanceof Vr?o:null}var as="__closure_events_fn_"+(1e9*Math.random()>>>0);function ga(o){return typeof o=="function"?o:(o[as]||(o[as]=function(l){return o.handleEvent(l)}),o[as])}function Ae(){Le.call(this),this.i=new Vr(this),this.M=this,this.F=null}D(Ae,Le),Ae.prototype[kr]=!0,Ae.prototype.removeEventListener=function(o,l,h,f){fa(this,o,l,h,f)};function De(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new ge(l,o);else if(l instanceof ge)l.target=l.target||o;else{var b=l;l=new ge(f,o),I(l,b)}if(b=!0,h)for(var S=h.length-1;0<=S;S--){var V=l.g=h[S];b=Nr(V,f,!0,l)&&b}if(V=l.g=o,b=Nr(V,f,!0,l)&&b,b=Nr(V,f,!1,l)&&b,h)for(S=0;S<h.length;S++)V=l.g=h[S],b=Nr(V,f,!1,l)&&b}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)Dr(h[f]);delete o.g[l],o.h--}}this.F=null},Ae.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},Ae.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function Nr(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,S=0;S<l.length;++S){var V=l[S];if(V&&!V.da&&V.capture==h){var re=V.listener,ve=V.ha||V.src;V.fa&&ts(o.i,V),b=re.call(ve,f)!==!1&&b}}return b&&!f.defaultPrevented}function ma(o,l,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function _a(o){o.g=ma(()=>{o.g=null,o.i&&(o.i=!1,_a(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class nf extends Le{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:_a(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $n(o){Le.call(this),this.h=o,this.g={}}D($n,Le);var ya=[];function va(o){ne(o.g,function(l,h){this.g.hasOwnProperty(h)&&ss(l)},o),o.g={}}$n.prototype.N=function(){$n.aa.N.call(this),va(this)},$n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cs=c.JSON.stringify,rf=c.JSON.parse,sf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ls(){}ls.prototype.h=null;function Ta(o){return o.h||(o.h=o.i())}function Ia(){}var jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){ge.call(this,"d")}D(us,ge);function hs(){ge.call(this,"c")}D(hs,ge);var Lt={},Ea=null;function xr(){return Ea=Ea||new Ae}Lt.La="serverreachability";function wa(o){ge.call(this,Lt.La,o)}D(wa,ge);function Bn(o){const l=xr();De(l,new wa(l))}Lt.STAT_EVENT="statevent";function Aa(o,l){ge.call(this,Lt.STAT_EVENT,o),this.stat=l}D(Aa,ge);function Ve(o){const l=xr();De(l,new Aa(l,o))}Lt.Ma="timingevent";function ba(o,l){ge.call(this,Lt.Ma,o),this.size=l}D(ba,ge);function qn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function zn(){this.g=!0}zn.prototype.xa=function(){this.g=!1};function of(o,l,h,f,b,S){o.info(function(){if(o.g)if(S)for(var V="",re=S.split("&"),ve=0;ve<re.length;ve++){var X=re[ve].split("=");if(1<X.length){var be=X[0];X=X[1];var Se=be.split("_");V=2<=Se.length&&Se[1]=="type"?V+(be+"="+X+"&"):V+(be+"=redacted&")}}else V=null;else V=S;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+l+`
`+h+`
`+V})}function af(o,l,h,f,b,S,V){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+l+`
`+h+`
`+S+" "+V})}function on(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+lf(o,h)+(f?" "+f:"")})}function cf(o,l){o.info(function(){return"TIMEOUT: "+l})}zn.prototype.info=function(){};function lf(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var b=f[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var V=1;V<b.length;V++)b[V]=""}}}}return cs(h)}catch(re){return l}}var Or={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ds;function Mr(){}D(Mr,ls),Mr.prototype.g=function(){return new XMLHttpRequest},Mr.prototype.i=function(){return{}},ds=new Mr;function gt(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new $n(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ra}function Ra(){this.i=null,this.g="",this.h=!1}var Pa={},fs={};function ps(o,l,h){o.L=1,o.v=$r(rt(l)),o.m=h,o.P=!0,Ca(o,null)}function Ca(o,l){o.F=Date.now(),Lr(o),o.A=rt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),qa(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Ra,o.g=ac(o.j,h?l:null,!o.m),0<o.O&&(o.M=new nf(E(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(ya[0]=b.toString()),b=ya);for(var S=0;S<b.length;S++){var V=da(h,b[S],f||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Bn(),of(o.i,o.u,o.A,o.l,o.R,o.m)}gt.prototype.ca=function(o){o=o.target;const l=this.M;l&&it(o)==3?l.j():this.Y(o)},gt.prototype.Y=function(o){try{if(o==this.g)e:{const Se=it(this.g);var l=this.g.Ba();const ln=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||Ya(this.g)))){this.J||Se!=4||l==7||(l==8||0>=ln?Bn(3):Bn(2)),gs(this);var h=this.g.Z();this.X=h;t:if(ka(this)){var f=Ya(this.g);o="";var b=f.length,S=it(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ft(this),Hn(this);var V="";break t}this.h.i=new c.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(S&&l==b-1)});f.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,af(this.i,this.u,this.A,this.l,this.R,Se,h),this.o){if(this.T&&!this.K){t:{if(this.g){var re,ve=this.g;if((re=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(re)){var X=re;break t}}X=null}if(h=X)on(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ms(this,h);else{this.o=!1,this.s=3,Ve(12),Ft(this),Hn(this);break e}}if(this.P){h=!0;let qe;for(;!this.J&&this.C<V.length;)if(qe=uf(this,V),qe==fs){Se==4&&(this.s=4,Ve(14),h=!1),on(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Pa){this.s=4,Ve(15),on(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else on(this.i,this.l,qe,null),ms(this,qe);if(ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||V.length!=0||this.h.h||(this.s=1,Ve(16),h=!1),this.o=this.o&&h,!h)on(this.i,this.l,V,"[Invalid Chunked Response]"),Ft(this),Hn(this);else if(0<V.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Es(be),be.M=!0,Ve(11))}}else on(this.i,this.l,V,null),ms(this,V);Se==4&&Ft(this),this.o&&!this.J&&(Se==4?rc(this.j,this):(this.o=!1,Lr(this)))}else Rf(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),Ft(this),Hn(this)}}}catch(Se){}finally{}};function ka(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function uf(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?fs:(h=Number(l.substring(h,f)),isNaN(h)?Pa:(f+=1,f+h>l.length?fs:(l=l.slice(f,f+h),o.C=f+h,l)))}gt.prototype.cancel=function(){this.J=!0,Ft(this)};function Lr(o){o.S=Date.now()+o.I,Da(o,o.I)}function Da(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=qn(E(o.ba,o),l)}function gs(o){o.B&&(c.clearTimeout(o.B),o.B=null)}gt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(cf(this.i,this.A),this.L!=2&&(Bn(),Ve(17)),Ft(this),this.s=2,Hn(this)):Da(this,this.S-o)};function Hn(o){o.j.G==0||o.J||rc(o.j,o)}function Ft(o){gs(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,va(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function ms(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||_s(h.h,o))){if(!o.K&&_s(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch(X){f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Wr(h),zr(h);else break e;Is(h),Ve(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=qn(E(h.Za,h),6e3));if(1>=xa(h.h)&&h.ca){try{h.ca()}catch(X){}h.ca=void 0}}else $t(h,11)}else if((o.K||h.g==o)&&Wr(h),!H(l))for(b=h.Da.g.parse(l),l=0;l<b.length;l++){let X=b[l];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const be=X[3];be!=null&&(h.la=be,h.j.info("VER="+h.la));const Se=X[4];Se!=null&&(h.Aa=Se,h.j.info("SVER="+h.Aa));const ln=X[5];ln!=null&&typeof ln=="number"&&0<ln&&(f=1.5*ln,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const qe=o.g;if(qe){const Kr=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kr){var S=f.h;S.g||Kr.indexOf("spdy")==-1&&Kr.indexOf("quic")==-1&&Kr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ys(S,S.h),S.h=null))}if(f.D){const ws=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;ws&&(f.ya=ws,se(f.I,f.D,ws))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var V=o;if(f.qa=oc(f,f.J?f.ia:null,f.W),V.K){Oa(f.h,V);var re=V,ve=f.L;ve&&(re.I=ve),re.B&&(gs(re),Lr(re)),f.g=V}else tc(f);0<h.i.length&&Hr(h)}else X[0]!="stop"&&X[0]!="close"||$t(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?$t(h,7):Ts(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}Bn(4)}catch(X){}}var hf=class{constructor(o,l){this.g=o,this.map=l}};function Va(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Na(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function xa(o){return o.h?1:o.g?o.g.size:0}function _s(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ys(o,l){o.g?o.g.add(l):o.h=l}function Oa(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Va.prototype.cancel=function(){if(this.i=Ma(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ma(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return x(o.i)}function df(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map!="undefined"&&o instanceof Map||typeof Set!="undefined"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function ff(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map!="undefined"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set!="undefined"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const f in o)l[h++]=f;return l}}}function La(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=ff(o),f=df(o),b=f.length,S=0;S<b;S++)l.call(void 0,f[S],h&&h[S],o)}var Fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pf(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),b=null;if(0<=f){var S=o[h].substring(0,f);b=o[h].substring(f+1)}else S=o[h];l(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ut(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ut){this.h=o.h,Fr(this,o.j),this.o=o.o,this.g=o.g,Ur(this,o.s),this.l=o.l;var l=o.i,h=new Kn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Ua(this,h),this.m=o.m}else o&&(l=String(o).match(Fa))?(this.h=!1,Fr(this,l[1]||"",!0),this.o=Wn(l[2]||""),this.g=Wn(l[3]||"",!0),Ur(this,l[4]),this.l=Wn(l[5]||"",!0),Ua(this,l[6]||"",!0),this.m=Wn(l[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}Ut.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Gn(l,$a,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Gn(l,$a,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Gn(h,h.charAt(0)=="/"?_f:mf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Gn(h,vf)),o.join("")};function rt(o){return new Ut(o)}function Fr(o,l,h){o.j=h?Wn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Ur(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Ua(o,l,h){l instanceof Kn?(o.i=l,Tf(o.i,o.h)):(h||(l=Gn(l,yf)),o.i=new Kn(l,o.h))}function se(o,l,h){o.i.set(l,h)}function $r(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Wn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Gn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,gf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var $a=/[#\/\?@]/g,mf=/[#\?:]/g,_f=/[#\?]/g,yf=/[#\?@]/g,vf=/#/g;function Kn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function mt(o){o.g||(o.g=new Map,o.h=0,o.i&&pf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Kn.prototype,n.add=function(o,l){mt(this),this.i=null,o=an(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function ja(o,l){mt(o),l=an(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Ba(o,l){return mt(o),l=an(o,l),o.g.has(l)}n.forEach=function(o,l){mt(this),this.g.forEach(function(h,f){h.forEach(function(b){o.call(l,b,f,this)},this)},this)},n.na=function(){mt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const b=o[f];for(let S=0;S<b.length;S++)h.push(l[f])}return h},n.V=function(o){mt(this);let l=[];if(typeof o=="string")Ba(this,o)&&(l=l.concat(this.g.get(an(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return mt(this),this.i=null,o=an(this,o),Ba(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function qa(o,l,h){ja(o,l),0<h.length&&(o.i=null,o.g.set(an(o,l),x(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const S=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var b=S;V[f]!==""&&(b+="="+encodeURIComponent(String(V[f]))),o.push(b)}}return this.i=o.join("&")};function an(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Tf(o,l){l&&!o.j&&(mt(o),o.i=null,o.g.forEach(function(h,f){var b=f.toLowerCase();f!=b&&(ja(this,f),qa(this,b,h))},o)),o.j=l}function If(o,l){const h=new zn;if(c.Image){const f=new Image;f.onload=R(_t,h,"TestLoadImage: loaded",!0,l,f),f.onerror=R(_t,h,"TestLoadImage: error",!1,l,f),f.onabort=R(_t,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(_t,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function Ef(o,l){const h=new zn,f=new AbortController,b=setTimeout(()=>{f.abort(),_t(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(S=>{clearTimeout(b),S.ok?_t(h,"TestPingServer: ok",!0,l):_t(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),_t(h,"TestPingServer: error",!1,l)})}function _t(o,l,h,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(h)}catch(S){}}function wf(){this.g=new sf}function Af(o,l,h){const f=h||"";try{La(o,function(b,S){let V=b;d(b)&&(V=cs(b)),l.push(f+S+"="+encodeURIComponent(V))})}catch(b){throw l.push(f+"type="+encodeURIComponent("_badmap")),b}}function jr(o){this.l=o.Ub||null,this.j=o.eb||!1}D(jr,ls),jr.prototype.g=function(){return new Br(this.l,this.j)},jr.prototype.i=function(o){return function(){return o}}({});function Br(o,l){Ae.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Br,Ae),n=Br.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Yn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream!="undefined"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;za(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function za(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Qn(this):Yn(this),this.readyState==3&&za(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Qn(this))},n.Qa=function(o){this.g&&(this.response=o,Qn(this))},n.ga=function(){this.g&&Qn(this)};function Qn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Yn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Yn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ha(o){let l="";return ne(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function vs(o,l,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Ha(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):se(o,l,h))}function ce(o){Ae.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(ce,Ae);var bf=/^https?$/i,Sf=["POST","PUT"];n=ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ds.g(),this.v=this.o?Ta(this.o):Ta(ds),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){Wa(this,S);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)h.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Sf,l,void 0))||f||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,V]of h)this.g.setRequestHeader(S,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qa(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Wa(this,S)}};function Wa(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Ga(o),qr(o)}function Ga(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,De(this,"complete"),De(this,"abort"),qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qr(this,!0)),ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ka(this):this.bb())},n.bb=function(){Ka(this)};function Ka(o){if(o.h&&typeof a!="undefined"&&(!o.v[1]||it(o)!=4||o.Z()!=2)){if(o.u&&it(o)==4)ma(o.Ea,0,o);else if(De(o,"readystatechange"),it(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var f;if(f=V===0){var b=String(o.D).match(Fa)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),f=!bf.test(b?b.toLowerCase():"")}h=f}if(h)De(o,"complete"),De(o,"success");else{o.m=6;try{var S=2<it(o)?o.g.statusText:""}catch(re){S=""}o.l=S+" ["+o.Z()+"]",Ga(o)}}finally{qr(o)}}}}function qr(o,l){if(o.g){Qa(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||De(o,"ready");try{h.onreadystatechange=f}catch(b){}}}function Qa(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function it(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<it(this)?this.g.status:-1}catch(o){return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(o){return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),rf(l)}};function Ya(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch(l){return null}}function Rf(o){const l={};o=(o.g&&2<=it(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(H(o[f]))continue;var h=T(o[f]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[b]||[];l[b]=S,S.push(h)}w(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Ja(o){this.Aa=0,this.i=[],this.j=new zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,o),this.cb=Jn("retryDelaySeedMs",1e4,o),this.Wa=Jn("forwardChannelMaxRetries",2,o),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Va(o&&o.concurrentRequestLimit),this.Da=new wf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ja.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,f){Ve(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=oc(this,null,this.W),Hr(this)};function Ts(o){if(Xa(o),o.G==3){var l=o.U++,h=rt(o.I);if(se(h,"SID",o.K),se(h,"RID",l),se(h,"TYPE","terminate"),Xn(o,h),l=new gt(o,o.j,l),l.L=2,l.v=$r(rt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch(f){}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=ac(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Lr(l)}sc(o)}function zr(o){o.g&&(Es(o),o.g.cancel(),o.g=null)}function Xa(o){zr(o),o.u&&(c.clearTimeout(o.u),o.u=null),Wr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Hr(o){if(!Na(o.h)&&!o.s){o.s=!0;var l=o.Ga;te||Ot(),le||(te(),le=!0),ye.add(l,o),o.B=0}}function Pf(o,l){return xa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=qn(E(o.Ga,o,l),ic(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new gt(this,this.j,o);let S=this.o;if(this.S&&(S?(S=g(S),I(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=ec(this,b,l),h=rt(this.I),se(h,"RID",o),se(h,"CVER",22),this.D&&se(h,"X-HTTP-Session-Id",this.D),Xn(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(Ha(S)))+"&"+l:this.m&&vs(h,this.m,S)),ys(this.h,b),this.Ua&&se(h,"TYPE","init"),this.P?(se(h,"$req",l),se(h,"SID","null"),b.T=!0,ps(b,h,null)):ps(b,h,l),this.G=2}}else this.G==3&&(o?Za(this,o):this.i.length==0||Na(this.h)||Za(this))};function Za(o,l){var h;l?h=l.l:h=o.U++;const f=rt(o.I);se(f,"SID",o.K),se(f,"RID",h),se(f,"AID",o.T),Xn(o,f),o.m&&o.o&&vs(f,o.m,o.o),h=new gt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=ec(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ys(o.h,h),ps(h,f,l)}function Xn(o,l){o.H&&ne(o.H,function(h,f){se(l,f,h)}),o.l&&La({},function(h,f){se(l,f,h)})}function ec(o,l,h){h=Math.min(o.i.length,h);var f=o.l?E(o.l.Na,o.l,o):null;e:{var b=o.i;let S=-1;for(;;){const V=["count="+h];S==-1?0<h?(S=b[0].g,V.push("ofs="+S)):S=0:V.push("ofs="+S);let re=!0;for(let ve=0;ve<h;ve++){let X=b[ve].g;const be=b[ve].map;if(X-=S,0>X)S=Math.max(0,b[ve].g-100),re=!1;else try{Af(be,V,"req"+X+"_")}catch(Se){f&&f(be)}}if(re){f=V.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,f}function tc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;te||Ot(),le||(te(),le=!0),ye.add(l,o),o.v=0}}function Is(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=qn(E(o.Fa,o),ic(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,nc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=qn(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),zr(this),nc(this))};function Es(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function nc(o){o.g=new gt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=rt(o.qa);se(l,"RID","rpc"),se(l,"SID",o.K),se(l,"AID",o.T),se(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(l,"TO",o.ja),se(l,"TYPE","xmlhttp"),Xn(o,l),o.m&&o.o&&vs(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=$r(rt(l)),h.m=null,h.P=!0,Ca(h,o)}n.Za=function(){this.C!=null&&(this.C=null,zr(this),Is(this),Ve(19))};function Wr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function rc(o,l){var h=null;if(o.g==l){Wr(o),Es(o),o.g=null;var f=2}else if(_s(o.h,l))h=l.D,Oa(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var b=o.B;f=xr(),De(f,new ba(f,h)),Hr(o)}else tc(o);else if(b=l.s,b==3||b==0&&0<l.X||!(f==1&&Pf(o,l)||f==2&&Is(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),b){case 1:$t(o,5);break;case 4:$t(o,10);break;case 3:$t(o,6);break;default:$t(o,2)}}}function ic(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function $t(o,l){if(o.j.info("Error code "+l),l==2){var h=E(o.fb,o),f=o.Xa;const b=!f;f=new Ut(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fr(f,"https"),$r(f),b?If(f.toString(),h):Ef(f.toString(),h)}else Ve(2);o.G=0,o.l&&o.l.sa(l),sc(o),Xa(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function sc(o){if(o.G=0,o.ka=[],o.l){const l=Ma(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function oc(o,l,h){var f=h instanceof Ut?rt(h):new Ut(h);if(f.g!="")l&&(f.g=l+"."+f.g),Ur(f,f.s);else{var b=c.location;f=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var S=new Ut(null);f&&Fr(S,f),l&&(S.g=l),b&&Ur(S,b),h&&(S.l=h),f=S}return h=o.D,l=o.ya,h&&l&&se(f,h,l),se(f,"VER",o.la),Xn(o,f),f}function ac(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ce(new jr({eb:h})):new ce(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function cc(){}n=cc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gr(){}Gr.prototype.g=function(o,l){return new Fe(o,l)};function Fe(o,l){Ae.call(this),this.g=new Ja(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!H(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!H(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new cn(this)}D(Fe,Ae),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){Ts(this.g)},Fe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=cs(o),o=h);l.i.push(new hf(l.Ya++,o)),l.G==3&&Hr(l)},Fe.prototype.N=function(){this.g.l=null,delete this.j,Ts(this.g),delete this.g,Fe.aa.N.call(this)};function lc(o){us.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}D(lc,us);function uc(){hs.call(this),this.status=1}D(uc,hs);function cn(o){this.g=o}D(cn,cc),cn.prototype.ua=function(){De(this.g,"a")},cn.prototype.ta=function(o){De(this.g,new lc(o))},cn.prototype.sa=function(o){De(this.g,new uc)},cn.prototype.ra=function(){De(this.g,"b")},Gr.prototype.createWebChannel=Gr.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,vu=function(){return new Gr},yu=function(){return xr()},_u=Lt,Ws={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Or.NO_ERROR=0,Or.TIMEOUT=8,Or.HTTP_ERROR=6,ri=Or,Sa.COMPLETE="complete",mu=Sa,Ia.EventType=jn,jn.OPEN="a",jn.CLOSE="b",jn.ERROR="c",jn.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,er=Ia,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,gu=ce}).apply(typeof Yr!="undefined"?Yr:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const bc="@firebase/firestore",Sc="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Oi("@firebase/firestore");function hn(){return Kt.logLevel}function O(n,...e){if(Kt.logLevel<=G.DEBUG){const t=e.map(yo);Kt.debug(`Firestore (${Nn}): ${n}`,...t)}}function ht(n,...e){if(Kt.logLevel<=G.ERROR){const t=e.map(yo);Kt.error(`Firestore (${Nn}): ${n}`,...t)}}function wn(n,...e){if(Kt.logLevel<=G.WARN){const t=e.map(yo);Kt.warn(`Firestore (${Nn}): ${n}`,...t)}}function yo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch(e){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n="Unexpected state"){const e=`FIRESTORE (${Nn}) INTERNAL ASSERTION FAILED: `+n;throw ht(e),new Error(e)}function Z(n,e){n||j()}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Ge{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pe.UNAUTHENTICATED))}shutdown(){}}class Rg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Pg{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ct,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(()=>m(this,null,function*(){yield u.promise,yield i(this.currentUser)}))},c=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ct)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new Tu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new Pe(e)}}class Cg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class kg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Cg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dg{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Qe(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0);const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Rc(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string"),this.R=t.token,new Rc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Vg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function An(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=-62135596800,Cc=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Cc);return new he(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pc)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cc}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Pc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new he(0,0))}static max(){return new q(new he(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="__name__";class Ke{constructor(e,t,r){t===void 0?t=0:t>e.length&&j(),r===void 0?r=e.length-t:r>e.length-t&&j(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ke.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ke?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Ke.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Ke.isNumericId(e),i=Ke.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ke.extractNumericId(e).compare(Ke.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rt.fromString(e.substring(4,e.length-2))}}class oe extends Ke{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const Ng=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends Ke{construct(e,t,r){return new Ie(e,t,r)}static isValidIdentifier(e){return Ng.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kc}static keyField(){return new Ie([kc])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new L(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new L(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(oe.fromString(e))}static fromName(e){return new U(oe.fromString(e).popFirst(5))}static empty(){return new U(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new oe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=-1;function xg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new Ct(i,U.empty(),e)}function Og(n){return new Ct(n.readTime,n.key,pr)}class Ct{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ct(q.min(),U.empty(),pr)}static max(){return new Ct(q.max(),U.empty(),pr)}}function Mg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(n){return m(this,null,function*(){if(n.code!==k.FAILED_PRECONDITION||n.message!==Lg)throw n;O("LocalStore","Unexpectedly lost primary lease")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(i=>i?C.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new C((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new C((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Ug(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function On(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Mi.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=-1;function Li(n){return n==null}function gi(n){return n===0&&1/n==-1/0}function $g(n){return typeof n=="number"&&Number.isInteger(n)&&!gi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="";function jg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Dc(e)),e=Bg(n.get(t),e);return Dc(e)}function Bg(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Eu:t+="";break;default:t+=s}}return t}function Dc(n){return n+Eu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function tn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function wu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jr(this.root,e,this.comparator,!0)}}class Jr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:Te.RED,this.left=i!=null?i:Te.EMPTY,this.right=s!=null?s:Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Te(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nc(this.data.getIterator())}getIteratorFrom(e){return new Nc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class Nc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new ze([])}unionWith(e){let t=new pe(Ie.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return An(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new Au("Invalid base64 string: "+s):s}}(e);return new Ee(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const qg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(n){if(Z(!!n),typeof n=="string"){let e=0;const t=qg.exec(n);if(Z(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dt(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="server_timestamp",Su="__type__",Ru="__previous_value__",Pu="__local_write_time__";function To(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Su])===null||t===void 0?void 0:t.stringValue)===bu}function Fi(n){const e=n.mapValue.fields[Ru];return To(e)?Fi(e):e}function gr(n){const e=kt(n.mapValue.fields[Pu].timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t,r,i,s,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}const mi="(default)";class mr{constructor(e,t){this.projectId=e,this.database=t||mi}static empty(){return new mr("","")}get isDefaultDatabase(){return this.database===mi}isEqual(e){return e instanceof mr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="__type__",Hg="__max__",Xr={mapValue:{}},ku="__vector__",_i="value";function Vt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?To(n)?4:Gg(n)?9007199254740991:Wg(n)?10:11:j()}function nt(n,e){if(n===e)return!0;const t=Vt(n);if(t!==Vt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gr(n).isEqual(gr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=kt(i.timestampValue),c=kt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Dt(i.bytesValue).isEqual(Dt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ue(i.geoPointValue.latitude)===ue(s.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ue(i.integerValue)===ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ue(i.doubleValue),c=ue(s.doubleValue);return a===c?gi(a)===gi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return An(n.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Vc(a)!==Vc(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!nt(a[u],c[u])))return!1;return!0}(n,e);default:return j()}}function _r(n,e){return(n.values||[]).find(t=>nt(t,e))!==void 0}function bn(n,e){if(n===e)return 0;const t=Vt(n),r=Vt(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=ue(s.integerValue||s.doubleValue),u=ue(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return xc(n.timestampValue,e.timestampValue);case 4:return xc(gr(n),gr(e));case 5:return Q(n.stringValue,e.stringValue);case 6:return function(s,a){const c=Dt(s),u=Dt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const p=Q(c[d],u[d]);if(p!==0)return p}return Q(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=Q(ue(s.latitude),ue(a.latitude));return c!==0?c:Q(ue(s.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Oc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,u,d,p;const v=s.fields||{},E=a.fields||{},R=(c=v[_i])===null||c===void 0?void 0:c.arrayValue,D=(u=E[_i])===null||u===void 0?void 0:u.arrayValue,x=Q(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return x!==0?x:Oc(R,D)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Xr.mapValue&&a===Xr.mapValue)return 0;if(s===Xr.mapValue)return 1;if(a===Xr.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let v=0;v<u.length&&v<p.length;++v){const E=Q(u[v],p[v]);if(E!==0)return E;const R=bn(c[u[v]],d[p[v]]);if(R!==0)return R}return Q(u.length,p.length)}(n.mapValue,e.mapValue);default:throw j()}}function xc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=kt(n),r=kt(e),i=Q(t.seconds,r.seconds);return i!==0?i:Q(t.nanos,r.nanos)}function Oc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=bn(t[i],r[i]);if(s)return s}return Q(t.length,r.length)}function Sn(n){return Gs(n)}function Gs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=kt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Dt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Gs(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Gs(t.fields[a])}`;return i+"}"}(n.mapValue):j()}function ii(n){switch(Vt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fi(n);return e?16+ii(e):16;case 5:return 2*n.stringValue.length;case 6:return Dt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ii(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return tn(r.fields,(s,a)=>{i+=s.length+ii(a)}),i}(n.mapValue);default:throw j()}}function Mc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ks(n){return!!n&&"integerValue"in n}function Io(n){return!!n&&"arrayValue"in n}function Lc(n){return!!n&&"nullValue"in n}function Fc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function si(n){return!!n&&"mapValue"in n}function Wg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cu])===null||t===void 0?void 0:t.stringValue)===ku}function sr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=sr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=sr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Gg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Hg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!si(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sr(t)}setAll(e){let t=Ie.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=sr(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());si(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];si(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){tn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new je(sr(this.value))}}function Du(n){const e=[];return tn(n.fields,(t,r)=>{const i=new Ie([t]);if(si(r)){const s=Du(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ce(e,0,q.min(),q.min(),q.min(),je.empty(),0)}static newFoundDocument(e,t,r,i){return new Ce(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new Ce(e,2,t,q.min(),q.min(),je.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,q.min(),q.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.position=e,this.inclusive=t}}function Uc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=bn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $c(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!nt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{}class fe extends Vu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Yg(e,t,r):t==="array-contains"?new Zg(e,r):t==="in"?new em(e,r):t==="not-in"?new tm(e,r):t==="array-contains-any"?new nm(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Jg(e,r):new Xg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(bn(t,this.value)):t!==null&&Vt(this.value)===Vt(t)&&this.matchesComparison(bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends Vu{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new We(e,t)}matches(e){return Nu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Nu(n){return n.op==="and"}function xu(n){return Qg(n)&&Nu(n)}function Qg(n){for(const e of n.filters)if(e instanceof We)return!1;return!0}function Qs(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+Sn(n.value);if(xu(n))return n.filters.map(e=>Qs(e)).join(",");{const e=n.filters.map(t=>Qs(t)).join(",");return`${n.op}(${e})`}}function Ou(n,e){return n instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.field.isEqual(i.field)&&nt(r.value,i.value)}(n,e):n instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Ou(a,i.filters[c]),!0):!1}(n,e):void j()}function Mu(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${Sn(t.value)}`}(n):n instanceof We?function(t){return t.op.toString()+" {"+t.getFilters().map(Mu).join(" ,")+"}"}(n):"Filter"}class Yg extends fe{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Jg extends fe{constructor(e,t){super(e,"in",t),this.keys=Lu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Xg extends fe{constructor(e,t){super(e,"not-in",t),this.keys=Lu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Lu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class Zg extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Io(t)&&_r(t.arrayValue,this.value)}}class em extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_r(this.value.arrayValue,t)}}class tm extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!_r(this.value.arrayValue,t)}}class nm extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Io(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>_r(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.le=null}}function jc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new rm(n,e,t,r,i,s,a)}function Eo(n){const e=z(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Qs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Li(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Sn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Sn(r)).join(",")),e.le=t}return e.le}function wo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Kg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ou(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$c(n.startAt,e.startAt)&&$c(n.endAt,e.endAt)}function Ys(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function im(n,e,t,r,i,s,a,c){return new Er(n,e,t,r,i,s,a,c)}function Ao(n){return new Er(n)}function Bc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fu(n){return n.collectionGroup!==null}function or(n){const e=z(n);if(e.he===null){e.he=[];const t=new Set;for(const s of e.explicitOrderBy)e.he.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pe(Ie.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.he.push(new vi(s,r))}),t.has(Ie.keyField().canonicalString())||e.he.push(new vi(Ie.keyField(),r))}return e.he}function Je(n){const e=z(n);return e.Pe||(e.Pe=sm(e,or(n))),e.Pe}function sm(n,e){if(n.limitType==="F")return jc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new vi(i.field,s)});const t=n.endAt?new yi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new yi(n.startAt.position,n.startAt.inclusive):null;return jc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Js(n,e){const t=n.filters.concat([e]);return new Er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Xs(n,e,t){return new Er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ui(n,e){return wo(Je(n),Je(e))&&n.limitType===e.limitType}function Uu(n){return`${Eo(Je(n))}|lt:${n.limitType}`}function dn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Mu(i)).join(", ")}]`),Li(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Sn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Sn(i)).join(",")),`Target(${r})`}(Je(n))}; limitType=${n.limitType})`}function $i(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):U.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of or(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,u){const d=Uc(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,or(r),i)||r.endAt&&!function(a,c,u){const d=Uc(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,or(r),i))}(n,e)}function om(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $u(n){return(e,t)=>{let r=!1;for(const i of or(n)){const s=am(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function am(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(s,a,c){const u=a.data.field(s),d=c.data.field(s);return u!==null&&d!==null?bn(u,d):j()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){tn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return wu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=new ae(U.comparator);function dt(){return cm}const ju=new ae(U.comparator);function tr(...n){let e=ju;for(const t of n)e=e.insert(t.key,t);return e}function Bu(n){let e=ju;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function zt(){return ar()}function qu(){return ar()}function ar(){return new nn(n=>n.toString(),(n,e)=>n.isEqual(e))}const lm=new ae(U.comparator),um=new pe(U.comparator);function K(...n){let e=um;for(const t of n)e=e.add(t);return e}const hm=new pe(Q);function dm(){return hm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gi(e)?"-0":e}}function zu(n){return{integerValue:""+n}}function fm(n,e){return $g(e)?zu(e):bo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this._=void 0}}function pm(n,e,t){return n instanceof Ti?function(i,s){const a={fields:{[Su]:{stringValue:bu},[Pu]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&To(s)&&(s=Fi(s)),s&&(a.fields[Ru]=s),{mapValue:a}}(t,e):n instanceof yr?Wu(n,e):n instanceof vr?Gu(n,e):function(i,s){const a=Hu(i,s),c=qc(a)+qc(i.Ie);return Ks(a)&&Ks(i.Ie)?zu(c):bo(i.serializer,c)}(n,e)}function gm(n,e,t){return n instanceof yr?Wu(n,e):n instanceof vr?Gu(n,e):t}function Hu(n,e){return n instanceof Ii?function(r){return Ks(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ti extends ji{}class yr extends ji{constructor(e){super(),this.elements=e}}function Wu(n,e){const t=Ku(e);for(const r of n.elements)t.some(i=>nt(i,r))||t.push(r);return{arrayValue:{values:t}}}class vr extends ji{constructor(e){super(),this.elements=e}}function Gu(n,e){let t=Ku(e);for(const r of n.elements)t=t.filter(i=>!nt(i,r));return{arrayValue:{values:t}}}class Ii extends ji{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function qc(n){return ue(n.integerValue||n.doubleValue)}function Ku(n){return Io(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mm(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof yr&&i instanceof yr||r instanceof vr&&i instanceof vr?An(r.elements,i.elements,nt):r instanceof Ii&&i instanceof Ii?nt(r.Ie,i.Ie):r instanceof Ti&&i instanceof Ti}(n.transform,e.transform)}class _m{constructor(e,t){this.version=e,this.transformResults=t}}class lt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lt}static exists(e){return new lt(void 0,e)}static updateTime(e){return new lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bi{}function Qu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ju(n.key,lt.none()):new wr(n.key,n.data,lt.none());{const t=n.data,r=je.empty();let i=new pe(Ie.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new rn(n.key,r,new ze(i.toArray()),lt.none())}}function ym(n,e,t){n instanceof wr?function(i,s,a){const c=i.value.clone(),u=Hc(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof rn?function(i,s,a){if(!oi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=Hc(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Yu(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function cr(n,e,t,r){return n instanceof wr?function(s,a,c,u){if(!oi(s.precondition,a))return c;const d=s.value.clone(),p=Wc(s.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof rn?function(s,a,c,u){if(!oi(s.precondition,a))return c;const d=Wc(s.fieldTransforms,u,a),p=a.data;return p.setAll(Yu(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(s,a,c){return oi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function vm(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Hu(r.transform,i||null);s!=null&&(t===null&&(t=je.empty()),t.set(r.field,s))}return t||null}function zc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&An(r,i,(s,a)=>mm(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wr extends Bi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rn extends Bi{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Yu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Hc(n,e,t){const r=new Map;Z(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,gm(a,c,t[i]))}return r}function Wc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,pm(s,a,e))}return r}class Ju extends Bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tm extends Bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ym(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=cr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=cr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=qu();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const u=Qu(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&An(this.mutations,e.mutations,(t,r)=>zc(t,r))&&An(this.baseMutations,e.baseMutations,(t,r)=>zc(t,r))}}class So{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Z(e.mutations.length===r.length);let i=function(){return lm}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new So(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,Y;function Am(n){switch(n){case k.OK:return j();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return j()}}function Xu(n){if(n===void 0)return ht("GRPC error has no .code"),k.UNKNOWN;switch(n){case de.OK:return k.OK;case de.CANCELLED:return k.CANCELLED;case de.UNKNOWN:return k.UNKNOWN;case de.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case de.INTERNAL:return k.INTERNAL;case de.UNAVAILABLE:return k.UNAVAILABLE;case de.UNAUTHENTICATED:return k.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case de.NOT_FOUND:return k.NOT_FOUND;case de.ALREADY_EXISTS:return k.ALREADY_EXISTS;case de.PERMISSION_DENIED:return k.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case de.ABORTED:return k.ABORTED;case de.OUT_OF_RANGE:return k.OUT_OF_RANGE;case de.UNIMPLEMENTED:return k.UNIMPLEMENTED;case de.DATA_LOSS:return k.DATA_LOSS;default:return j()}}(Y=de||(de={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Rt([4294967295,4294967295],0);function Gc(n){const e=bm().encode(n),t=new pu;return t.update(e),new Uint8Array(t.digest())}function Kc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Rt([t,r],0),new Rt([i,s],0)]}class Ro{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new nr(`Invalid padding: ${t}`);if(r<0)throw new nr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new nr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new nr(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Rt.fromNumber(this.Ee)}Ae(e,t,r){let i=e.add(t.multiply(Rt.fromNumber(r)));return i.compare(Sm)===1&&(i=new Rt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Gc(e),[r,i]=Kc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ae(r,i,s);if(!this.Re(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Ro(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ee===0)return;const t=Gc(e),[r,i]=Kc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ae(r,i,s);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ar.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qi(q.min(),i,new ae(Q),dt(),K())}}class Ar{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ar(r,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,r,i){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=i}}class Zu{constructor(e,t){this.targetId=e,this.ge=t}}class eh{constructor(e,t,r=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Qc{constructor(){this.pe=0,this.ye=Yc(),this.we=Ee.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=K(),t=K(),r=K();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:j()}}),new Ar(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=Yc()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Z(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Rm{constructor(e){this.ke=e,this.qe=new Map,this.Qe=dt(),this.$e=Zr(),this.Ke=Zr(),this.Ue=new ae(Q)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:j()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,r=e.ge.count,i=this.Xe(t);if(i){const s=i.target;if(Ys(s))if(r===0){const a=new U(s.path);this.ze(t,a,Ce.newNoDocument(a,q.min()))}else Z(r===1);else{const a=this.et(t);if(a!==r){const c=this.tt(e),u=c?this.nt(c,e,a):1;if(u!==0){this.Ye(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,d)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=Dt(r).toUint8Array()}catch(u){if(u instanceof Au)return wn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ro(a,i,s)}catch(u){return wn(u instanceof nr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ee===0?null:c}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.ze(t,s,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((s,a)=>{const c=this.Xe(a);if(c){if(s.current&&Ys(c.target)){const u=new U(c.target.path);this._t(u).has(a)||this.ut(a,u)||this.ze(a,u,Ce.newNoDocument(u,e))}s.ve&&(t.set(a,s.Fe()),s.Me())}});let r=K();this.Ke.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Xe(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.Qe.forEach((s,a)=>a.setReadTime(e));const i=new qi(e,t,this.Ue,this.Qe,r);return this.Qe=dt(),this.$e=Zr(),this.Ke=Zr(),this.Ue=new ae(Q),i}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Qc,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new pe(Q),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new pe(Q),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Qc),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Zr(){return new ae(U.comparator)}function Yc(){return new ae(U.comparator)}const Pm={asc:"ASCENDING",desc:"DESCENDING"},Cm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},km={and:"AND",or:"OR"};class Dm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zs(n,e){return n.useProto3Json||Li(e)?e:{value:e}}function Ei(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function th(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Vm(n,e){return Ei(n,e.toTimestamp())}function Xe(n){return Z(!!n),q.fromTimestamp(function(t){const r=kt(t);return new he(r.seconds,r.nanos)}(n))}function Po(n,e){return eo(n,e).canonicalString()}function eo(n,e){const t=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function nh(n){const e=oe.fromString(n);return Z(ah(e)),e}function to(n,e){return Po(n.databaseId,e.path)}function ks(n,e){const t=nh(e);if(t.get(1)!==n.databaseId.projectId)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(ih(t))}function rh(n,e){return Po(n.databaseId,e)}function Nm(n){const e=nh(n);return e.length===4?oe.emptyPath():ih(e)}function no(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ih(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Jc(n,e,t){return{name:to(n,e),fields:t.value.mapValue.fields}}function xm(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(Z(p===void 0||typeof p=="string"),Ee.fromBase64String(p||"")):(Z(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ee.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?k.UNKNOWN:Xu(d.code);return new L(p,d.message||"")}(a);t=new eh(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ks(n,r.document.name),s=Xe(r.document.updateTime),a=r.document.createTime?Xe(r.document.createTime):q.min(),c=new je({mapValue:{fields:r.document.fields}}),u=Ce.newFoundDocument(i,s,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new ai(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ks(n,r.document),s=r.readTime?Xe(r.readTime):q.min(),a=Ce.newNoDocument(i,s),c=r.removedTargetIds||[];t=new ai([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ks(n,r.document),s=r.removedTargetIds||[];t=new ai([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new wm(i,s),c=r.targetId;t=new Zu(c,a)}}return t}function Om(n,e){let t;if(e instanceof wr)t={update:Jc(n,e.key,e.value)};else if(e instanceof Ju)t={delete:to(n,e.key)};else if(e instanceof rn)t={update:Jc(n,e.key,e.data),updateMask:zm(e.fieldMask)};else{if(!(e instanceof Tm))return j();t={verify:to(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof Ti)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ii)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw j()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Vm(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:j()}(n,e.precondition)),t}function Mm(n,e){return n&&n.length>0?(Z(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Xe(i.updateTime):Xe(s);return a.isEqual(q.min())&&(a=Xe(s)),new _m(a,i.transformResults||[])}(t,e))):[]}function Lm(n,e){return{documents:[rh(n,e.path)]}}function Fm(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=rh(n,i);const s=function(d){if(d.length!==0)return oh(We.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:fn(E.field),direction:jm(E.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Zs(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ht:t,parent:i}}function Um(n){let e=Nm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Z(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(v){const E=sh(v);return E instanceof We&&xu(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(v){return v.map(E=>function(D){return new vi(pn(D.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(v){let E;return E=typeof v=="object"?v.value:v,Li(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(v){const E=!!v.before,R=v.values||[];return new yi(R,E)}(t.startAt));let d=null;return t.endAt&&(d=function(v){const E=!v.before,R=v.values||[];return new yi(R,E)}(t.endAt)),im(e,i,a,s,c,"F",u,d)}function $m(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=pn(t.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pn(t.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=pn(t.unaryFilter.field);return fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=pn(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(n):n.fieldFilter!==void 0?function(t){return fe.create(pn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return We.create(t.compositeFilter.filters.map(r=>sh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j()}}(t.compositeFilter.op))}(n):j()}function jm(n){return Pm[n]}function Bm(n){return Cm[n]}function qm(n){return km[n]}function fn(n){return{fieldPath:n.canonicalString()}}function pn(n){return Ie.fromServerFormat(n.fieldPath)}function oh(n){return n instanceof fe?function(t){if(t.op==="=="){if(Fc(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NAN"}};if(Lc(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fc(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NOT_NAN"}};if(Lc(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(t.field),op:Bm(t.op),value:t.value}}}(n):n instanceof We?function(t){const r=t.getFilters().map(i=>oh(i));return r.length===1?r[0]:{compositeFilter:{op:qm(t.op),filters:r}}}(n):j()}function zm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ah(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,r,i,s=q.min(),a=q.min(),c=Ee.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new At(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.Tt=e}}function Wm(n){const e=Um({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.Tn=new Km}addToCollectionParentIndex(e,t){return this.Tn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Ct.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Ct.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Km{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new pe(oe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ch=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(ch,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Rn(0)}static Un(){return new Rn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="LruGarbageCollector",Qm=1048576;function el([n,e],[t,r]){const i=Q(n,t);return i===0?Q(e,r):i}class Ym{constructor(e){this.Hn=e,this.buffer=new pe(el),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();el(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Jm{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){O(Zc,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>m(this,null,function*(){this.Xn=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){On(t)?O(Zc,"Ignoring IndexedDB error during garbage collection: ",t):yield xn(t)}yield this.er(3e5)}))}}class Xm{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Mi.ae);const r=new Ym(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Xc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xc):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,s,a,c,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,a=Date.now(),this.nthSequenceNumber(e,i))).next(v=>(r=v,c=Date.now(),this.removeTargets(e,r,t))).next(v=>(s=v,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(d=Date.now(),hn()<=G.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${v} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:v})))}}function Zm(n,e){return new Xm(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.changes=new nn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&cr(r.mutation,i,ze.empty(),he.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,t,r=K()){const i=zt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=tr();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,K()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=dt();const a=ar(),c=function(){return ar()}();return t.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof rn)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),cr(p.mutation,d,p.mutation.getFieldMask(),he.now())):a.set(d.key,ze.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var v;return c.set(d,new t_(p,(v=a.get(d))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ar();let i=new ae((a,c)=>a-c),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||ze.empty();p=c.applyToLocalView(d,p),r.set(u,p);const v=(i.get(c.batchId)||K()).add(u);i=i.insert(c.batchId,v)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,p=u.value,v=qu();p.forEach(E=>{if(!s.has(E)){const R=Qu(t.get(E),r.get(E));R!==null&&v.set(E,R),s=s.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,v))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):C.resolve(zt());let c=pr,u=s;return a.next(d=>C.forEach(d,(p,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),s.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{u=u.insert(p,E)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,K())).next(p=>({batchId:c,changes:Bu(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let i=tr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=tr();return this.indexManager.getCollectionParents(e,s).next(c=>C.forEach(c,u=>{const d=function(v,E){return new Er(E,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((v,E)=>{a=a.insert(v,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ce.newInvalidDocument(p)))});let c=tr();return a.forEach((u,d)=>{const p=s.get(u);p!==void 0&&cr(p.mutation,d,ze.empty(),he.now()),$i(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return C.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Xe(i.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:Wm(i.bundledQuery),readTime:Xe(i.readTime)}}(t)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.overlays=new ae(U.comparator),this.Rr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=zt();return C.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Et(e,t,s)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const i=zt(),s=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ae((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=zt(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=zt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return C.resolve(c)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Em(t,r));let s=this.Rr.get(t);s===void 0&&(s=K(),this.Rr.set(t,s)),this.Rr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.Vr=new pe(me.mr),this.gr=new pe(me.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new me(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new me(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new U(new oe([])),r=new me(t,e),i=new me(t,e+1),s=[];return this.gr.forEachInRange([r,i],a=>{this.wr(a),s.push(a.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new U(new oe([])),r=new me(t,e),i=new me(t,e+1);let s=K();return this.gr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new me(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class me{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return U.comparator(e.key,t.key)||Q(e.Cr,t.Cr)}static pr(e,t){return Q(e.Cr,t.Cr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new pe(me.mr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Im(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.Mr=this.Mr.add(new me(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?vo:this.Fr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new me(t,0),i=new me(t,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],a=>{const c=this.Or(a.Cr);s.push(c)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(Q);return t.forEach(i=>{const s=new me(i,0),a=new me(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,a],c=>{r=r.add(c.Cr)})}),C.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const a=new me(new U(s),0);let c=new pe(Q);return this.Mr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.Cr)),!0)},a),C.resolve(this.Br(c))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Z(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return C.forEach(t.mutations,i=>{const s=new me(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new me(t,0),i=this.Mr.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.kr=e,this.docs=function(){return new ae(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=dt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ce.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=dt();const a=t.path,c=new U(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Mg(Og(p),r)<=0||(i.has(p.key)||$i(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,t,r,i){j()}qr(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new c_(this)}getSize(e){return C.resolve(this.size)}}class c_ extends e_{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.persistence=e,this.Qr=new nn(t=>Eo(t),wo),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Co,this.targetCount=0,this.Ur=Rn.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),C.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Rn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.zn(t),C.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Qr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.Kr.Sr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Mi(0),this.zr=!1,this.zr=!0,this.jr=new s_,this.referenceDelegate=e(this),this.Hr=new l_(this),this.indexManager=new Gm,this.remoteDocumentCache=function(i){return new a_(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Hm(t),this.Yr=new r_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new i_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new o_(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const i=new u_(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,t){return C.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class u_ extends Fg{constructor(e){super(),this.currentSequenceNumber=e}}class ko{constructor(e){this.persistence=e,this.ti=new Co,this.ni=null}static ri(e){return new ko(e)}get ii(){if(this.ni)return this.ni;throw j()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),C.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.ii,r=>{const i=U.fromPath(r);return this.si(e,i).next(s=>{s||t.removeEntry(i,q.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return C.or([()=>C.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class wi{constructor(e,t){this.persistence=e,this.oi=new nn(r=>jg(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Zm(this,t)}static ri(e,t){return new wi(e,t)}Zr(){}Xr(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return C.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?C.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,a=>this.ar(e,a,t).next(c=>{c||(r++,s.removeEntry(a,q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),C.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ii(e.data.value)),t}ar(e,t,r){return C.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=K(),i=K();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Do(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return op()?8:Ug(ke())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.rs(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ss(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new h_;return this._s(e,t,a).next(c=>{if(s.result=c,this.Xi)return this.us(e,t,a,c.size)})}).next(()=>s.result)}us(e,t,r,i){return r.documentReadCount<this.es?(hn()<=G.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",dn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),C.resolve()):(hn()<=G.DEBUG&&O("QueryEngine","Query:",dn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(hn()<=G.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",dn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Je(t))):C.resolve())}rs(e,t){if(Bc(t))return C.resolve(null);let r=Je(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Xs(t,null,"F"),r=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=K(...s);return this.ns.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.cs(t,c);return this.ls(t,d,a,u.readTime)?this.rs(e,Xs(t,null,"F")):this.hs(e,d,t,u)}))})))}ss(e,t,r,i){return Bc(t)||i.isEqual(q.min())?C.resolve(null):this.ns.getDocuments(e,r).next(s=>{const a=this.cs(t,s);return this.ls(t,a,r,i)?C.resolve(null):(hn()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),dn(t)),this.hs(e,a,t,xg(i,pr)).next(c=>c))})}cs(e,t){let r=new pe($u(e));return t.forEach((i,s)=>{$i(e,s)&&(r=r.add(s))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,t,r){return hn()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",dn(t)),this.ns.getDocumentsMatchingQuery(e,t,Ct.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="LocalStore",f_=3e8;class p_{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new ae(Q),this.Is=new nn(s=>Eo(s),wo),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n_(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function g_(n,e,t,r){return new p_(n,e,t,r)}function uh(n,e){return m(this,null,function*(){const t=z(n);return yield t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let u=K();for(const d of i){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){c.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:c}))})})})}function m_(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ds.newChangeBuffer({trackRemovals:!0});return function(c,u,d,p){const v=d.batch,E=v.keys();let R=C.resolve();return E.forEach(D=>{R=R.next(()=>p.getEntry(u,D)).next(x=>{const P=d.docVersions.get(D);Z(P!==null),x.version.compareTo(P)<0&&(v.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),p.addEntry(x)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(u,v))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=K();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function hh(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function __(n,e){const t=z(n),r=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const c=[];e.targetChanges.forEach((p,v)=>{const E=i.get(v);if(!E)return;c.push(t.Hr.removeMatchingKeys(s,p.removedDocuments,v).next(()=>t.Hr.addMatchingKeys(s,p.addedDocuments,v)));let R=E.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(v)!==null?R=R.withResumeToken(Ee.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(v,R),function(x,P,F){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=f_?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(E,R,p)&&c.push(t.Hr.updateTargetData(s,R))});let u=dt(),d=K();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(y_(s,a,e.documentUpdates).next(p=>{u=p.Vs,d=p.fs})),!r.isEqual(q.min())){const p=t.Hr.getLastRemoteSnapshotVersion(s).next(v=>t.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return C.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.Ts=i,s))}function y_(n,e,t){let r=K(),i=K();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=dt();return t.forEach((c,u)=>{const d=s.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):O(Vo,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Vs:a,fs:i}})}function v_(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=vo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function T_(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Hr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):t.Hr.allocateTargetId(r).next(a=>(i=new At(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}function ro(n,e,t){return m(this,null,function*(){const r=z(n),i=r.Ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||(yield r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!On(a))throw a;O(Vo,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)})}function tl(n,e,t){const r=z(n);let i=q.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const v=z(u),E=v.Is.get(p);return E!==void 0?C.resolve(v.Ts.get(E)):v.Hr.getTargetData(d,p)}(r,a,Je(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?i:q.min(),t?s:K())).next(c=>(I_(r,om(e),c),{documents:c,gs:s})))}function I_(n,e,t){let r=n.Es.get(e)||q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Es.set(e,r)}class nl{constructor(){this.activeTargetIds=dm()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E_{constructor(){this.ho=new nl,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new nl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="ConnectivityMonitor";class il{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){O(rl,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){O(rl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei=null;function io(){return ei===null?ei=function(){return 268435456+Math.round(2147483648*Math.random())}():ei++,"0x"+ei.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="RestConnection",A_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class b_{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===mi?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(e,t,r,i,s){const a=io(),c=this.bo(e,t.toUriEncodedString());O(Ds,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,i,s),this.vo(e,c,u,r).then(d=>(O(Ds,`Received RPC '${e}' ${a}: `,d),d),d=>{throw wn(Ds,`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",r),d})}Co(e,t,r,i,s,a){return this.So(e,t,r,i,s)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}bo(e,t){const r=A_[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class R_ extends b_{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const s=io();return new Promise((a,c)=>{const u=new gu;u.setWithCredentials(!0),u.listenOnce(mu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ri.NO_ERROR:const p=u.getResponseJson();O(Re,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case ri.TIMEOUT:O(Re,`RPC '${e}' ${s} timed out`),c(new L(k.DEADLINE_EXCEEDED,"Request time out"));break;case ri.HTTP_ERROR:const v=u.getStatus();if(O(Re,`RPC '${e}' ${s} failed with status:`,v,"response text:",u.getResponseText()),v>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E==null?void 0:E.error;if(R&&R.status&&R.message){const D=function(P){const F=P.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(F)>=0?F:k.UNKNOWN}(R.status);c(new L(D,R.message))}else c(new L(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new L(k.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{O(Re,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);O(Re,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,r,15)})}Wo(e,t,r){const i=io(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=vu(),c=yu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=s.join("");O(Re,`Creating RPC '${e}' stream ${i}: ${p}`,u);const v=a.createWebChannel(p,u);let E=!1,R=!1;const D=new S_({Fo:P=>{R?O(Re,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(E||(O(Re,`Opening RPC '${e}' stream ${i} transport.`),v.open(),E=!0),O(Re,`RPC '${e}' stream ${i} sending:`,P),v.send(P))},Mo:()=>v.close()}),x=(P,F,H)=>{P.listen(F,W=>{try{H(W)}catch(ie){setTimeout(()=>{throw ie},0)}})};return x(v,er.EventType.OPEN,()=>{R||(O(Re,`RPC '${e}' stream ${i} transport opened.`),D.Qo())}),x(v,er.EventType.CLOSE,()=>{R||(R=!0,O(Re,`RPC '${e}' stream ${i} transport closed`),D.Ko())}),x(v,er.EventType.ERROR,P=>{R||(R=!0,wn(Re,`RPC '${e}' stream ${i} transport errored:`,P),D.Ko(new L(k.UNAVAILABLE,"The operation could not be completed")))}),x(v,er.EventType.MESSAGE,P=>{var F;if(!R){const H=P.data[0];Z(!!H);const W=H,ie=(W==null?void 0:W.error)||((F=W[0])===null||F===void 0?void 0:F.error);if(ie){O(Re,`RPC '${e}' stream ${i} received error:`,ie);const we=ie.status;let ne=function(y){const I=de[y];if(I!==void 0)return Xu(I)}(we),w=ie.message;ne===void 0&&(ne=k.INTERNAL,w="Unknown error status: "+we+" with message "+ie.message),R=!0,D.Ko(new L(ne,w)),v.close()}else O(Re,`RPC '${e}' stream ${i} received:`,H),D.Uo(H)}}),x(c,_u.STAT_EVENT,P=>{P.stat===Ws.PROXY?O(Re,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Ws.NOPROXY&&O(Re,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function Vs(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n){return new Dm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="PersistentStream";class fh{constructor(e,t,r,i,s,a,c,u){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new dh(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}stop(){return m(this,null,function*(){this.u_()&&(yield this.close(0))})}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}T_(){return m(this,null,function*(){if(this.c_())return this.close(0)})}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}close(e,t){return m(this,null,function*(){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(ht(t.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.Lo(t)})}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new L(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(()=>m(this,null,function*(){this.state=0,this.start()}))}m_(e){return O(sl,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(O(sl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class P_ extends fh{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=xm(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Xe(a.readTime):q.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=no(this.serializer),t.addTarget=function(s,a){let c;const u=a.target;if(c=Ys(u)?{documents:Lm(s,u)}:{query:Fm(s,u).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=th(s,a.resumeToken);const d=Zs(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=Ei(s,a.snapshotVersion.toTimestamp());const d=Zs(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=$m(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=no(this.serializer),t.removeTarget=e,this.I_(t)}}class C_ extends fh{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Z(!!e.streamToken),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=Mm(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=no(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Om(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{}class D_ extends k_{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.So(e,eo(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(k.UNKNOWN,s.toString())})}Co(e,t,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(e,eo(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(k.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class V_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ht(t),this.N_=!1):O("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="RemoteStore";class N_{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(a=>{r.enqueueAndForget(()=>m(this,null,function*(){sn(this)&&(O(Qt,"Restarting streams for network reachability change."),yield function(u){return m(this,null,function*(){const d=z(u);d.W_.add(4),yield br(d),d.j_.set("Unknown"),d.W_.delete(4),yield Hi(d)})}(this))}))}),this.j_=new V_(r,i)}}function Hi(n){return m(this,null,function*(){if(sn(n))for(const e of n.G_)yield e(!0)})}function br(n){return m(this,null,function*(){for(const e of n.G_)yield e(!1)})}function ph(n,e){const t=z(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),Mo(t)?Oo(t):Mn(t).c_()&&xo(t,e))}function No(n,e){const t=z(n),r=Mn(t);t.U_.delete(e),r.c_()&&gh(t,e),t.U_.size===0&&(r.c_()?r.P_():sn(t)&&t.j_.set("Unknown"))}function xo(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mn(n).y_(e)}function gh(n,e){n.H_.Ne(e),Mn(n).w_(e)}function Oo(n){n.H_=new Rm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Mn(n).start(),n.j_.B_()}function Mo(n){return sn(n)&&!Mn(n).u_()&&n.U_.size>0}function sn(n){return z(n).W_.size===0}function mh(n){n.H_=void 0}function x_(n){return m(this,null,function*(){n.j_.set("Online")})}function O_(n){return m(this,null,function*(){n.U_.forEach((e,t)=>{xo(n,e)})})}function M_(n,e){return m(this,null,function*(){mh(n),Mo(n)?(n.j_.q_(e),Oo(n)):n.j_.set("Unknown")})}function L_(n,e,t){return m(this,null,function*(){if(n.j_.set("Online"),e instanceof eh&&e.state===2&&e.cause)try{yield function(i,s){return m(this,null,function*(){const a=s.cause;for(const c of s.targetIds)i.U_.has(c)&&(yield i.remoteSyncer.rejectListen(c,a),i.U_.delete(c),i.H_.removeTarget(c))})}(n,e)}catch(r){O(Qt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),yield Ai(n,r)}else if(e instanceof ai?n.H_.We(e):e instanceof Zu?n.H_.Ze(e):n.H_.je(e),!t.isEqual(q.min()))try{const r=yield hh(n.localStore);t.compareTo(r)>=0&&(yield function(s,a){const c=s.H_.ot(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.U_.get(d);p&&s.U_.set(d,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const p=s.U_.get(u);if(!p)return;s.U_.set(u,p.withResumeToken(Ee.EMPTY_BYTE_STRING,p.snapshotVersion)),gh(s,u);const v=new At(p.target,u,d,p.sequenceNumber);xo(s,v)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t))}catch(r){O(Qt,"Failed to raise snapshot:",r),yield Ai(n,r)}})}function Ai(n,e,t){return m(this,null,function*(){if(!On(e))throw e;n.W_.add(1),yield br(n),n.j_.set("Offline"),t||(t=()=>hh(n.localStore)),n.asyncQueue.enqueueRetryable(()=>m(this,null,function*(){O(Qt,"Retrying IndexedDB access"),yield t(),n.W_.delete(1),yield Hi(n)}))})}function _h(n,e){return e().catch(t=>Ai(n,t,e))}function Wi(n){return m(this,null,function*(){const e=z(n),t=Nt(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:vo;for(;F_(e);)try{const i=yield v_(e.localStore,r);if(i===null){e.K_.length===0&&t.P_();break}r=i.batchId,U_(e,i)}catch(i){yield Ai(e,i)}yh(e)&&vh(e)})}function F_(n){return sn(n)&&n.K_.length<10}function U_(n,e){n.K_.push(e);const t=Nt(n);t.c_()&&t.S_&&t.b_(e.mutations)}function yh(n){return sn(n)&&!Nt(n).u_()&&n.K_.length>0}function vh(n){Nt(n).start()}function $_(n){return m(this,null,function*(){Nt(n).C_()})}function j_(n){return m(this,null,function*(){const e=Nt(n);for(const t of n.K_)e.b_(t.mutations)})}function B_(n,e,t){return m(this,null,function*(){const r=n.K_.shift(),i=So.from(r,e,t);yield _h(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),yield Wi(n)})}function q_(n,e){return m(this,null,function*(){e&&Nt(n).S_&&(yield function(r,i){return m(this,null,function*(){if(function(a){return Am(a)&&a!==k.ABORTED}(i.code)){const s=r.K_.shift();Nt(r).h_(),yield _h(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),yield Wi(r)}})}(n,e)),yh(n)&&vh(n)})}function ol(n,e){return m(this,null,function*(){const t=z(n);t.asyncQueue.verifyOperationInProgress(),O(Qt,"RemoteStore received new credentials");const r=sn(t);t.W_.add(3),yield br(t),r&&t.j_.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),yield Hi(t)})}function z_(n,e){return m(this,null,function*(){const t=z(n);e?(t.W_.delete(2),yield Hi(t)):e||(t.W_.add(2),yield br(t),t.j_.set("Unknown"))})}function Mn(n){return n.J_||(n.J_=function(t,r,i){const s=z(t);return s.M_(),new P_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:x_.bind(null,n),No:O_.bind(null,n),Lo:M_.bind(null,n),p_:L_.bind(null,n)}),n.G_.push(e=>m(this,null,function*(){e?(n.J_.h_(),Mo(n)?Oo(n):n.j_.set("Unknown")):(yield n.J_.stop(),mh(n))}))),n.J_}function Nt(n){return n.Y_||(n.Y_=function(t,r,i){const s=z(t);return s.M_(),new C_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:$_.bind(null,n),Lo:q_.bind(null,n),D_:j_.bind(null,n),v_:B_.bind(null,n)}),n.G_.push(e=>m(this,null,function*(){e?(n.Y_.h_(),yield Wi(n)):(yield n.Y_.stop(),n.K_.length>0&&(O(Qt,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))}))),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new Lo(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(n,e){if(ht("AsyncQueue",`${e}: ${n}`),On(n))return new L(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{static emptySet(e){return new _n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=tr(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new _n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.Z_=new ae(U.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):j():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Pn{constructor(e,t,r,i,s,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Pn(e,t,_n.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ui(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class W_{constructor(){this.queries=cl(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=z(t),s=i.queries;i.queries=cl(),s.forEach((a,c)=>{for(const u of c.ta)u.onError(r)})})(this,new L(k.ABORTED,"Firestore shutting down"))}}function cl(){return new nn(n=>Uu(n),Ui)}function Th(n,e){return m(this,null,function*(){const t=z(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new H_,r=e.ra()?0:1);try{switch(r){case 0:s.ea=yield t.onListen(i,!0);break;case 1:s.ea=yield t.onListen(i,!1);break;case 2:yield t.onFirstRemoteStoreListen(i)}}catch(a){const c=Fo(a,`Initialization of query '${dn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.ta.push(e),e.sa(t.onlineState),s.ea&&e.oa(s.ea)&&Uo(t)})}function Ih(n,e){return m(this,null,function*(){const t=z(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.ta.indexOf(e);a>=0&&(s.ta.splice(a,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}})}function G_(n,e){const t=z(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.ta)c.oa(i)&&(r=!0);a.ea=i}}r&&Uo(t)}function K_(n,e,t){const r=z(n),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(t);r.queries.delete(e)}function Uo(n){n.ia.forEach(e=>{e.next()})}var so,ll;(ll=so||(so={}))._a="default",ll.Cache="cache";class Eh{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Pn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==so.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this.key=e}}class Ah{constructor(e){this.key=e}}class Q_{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=K(),this.mutatedKeys=K(),this.ya=$u(e),this.wa=new _n(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new al,i=t?t.wa:this.wa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,v)=>{const E=i.get(p),R=$i(this.query,v)?v:null,D=!!E&&this.mutatedKeys.has(E.key),x=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;E&&R?E.data.isEqual(R.data)?D!==x&&(r.track({type:3,doc:R}),P=!0):this.va(E,R)||(r.track({type:2,doc:R}),P=!0,(u&&this.ya(R,u)>0||d&&this.ya(R,d)<0)&&(c=!0)):!E&&R?(r.track({type:0,doc:R}),P=!0):E&&!R&&(r.track({type:1,doc:E}),P=!0,(u||d)&&(c=!0)),P&&(R?(a=a.add(R),s=x?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{wa:a,Da:r,ls:c,mutatedKeys:s}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((p,v)=>function(R,D){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return x(R)-x(D)}(p.type,v.type)||this.ya(p.doc,v.doc)),this.Ca(r),i=i!=null&&i;const c=t&&!i?this.Fa():[],u=this.pa.size===0&&this.current&&!i?1:0,d=u!==this.ga;return this.ga=u,a.length!==0||d?{snapshot:new Pn(this.query,e.wa,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new al,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=K(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new Ah(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new wh(r))}),t}Oa(e){this.fa=e.gs,this.pa=K();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Pn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const $o="SyncEngine";class Y_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class J_{constructor(e){this.key=e,this.Ba=!1}}class X_{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new nn(c=>Uu(c),Ui),this.qa=new Map,this.Qa=new Set,this.$a=new ae(U.comparator),this.Ka=new Map,this.Ua=new Co,this.Wa={},this.Ga=new Map,this.za=Rn.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}function Z_(n,e,t=!0){return m(this,null,function*(){const r=kh(n);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=yield bh(r,e,t,!0),i})}function ey(n,e){return m(this,null,function*(){const t=kh(n);yield bh(t,e,!0,!1)})}function bh(n,e,t,r){return m(this,null,function*(){const i=yield T_(n.localStore,Je(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=yield ty(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&ph(n.remoteStore,i),c})}function ty(n,e,t,r,i){return m(this,null,function*(){n.Ha=(v,E,R)=>function(x,P,F,H){return m(this,null,function*(){let W=P.view.ba(F);W.ls&&(W=yield tl(x.localStore,P.query,!1).then(({documents:w})=>P.view.ba(w,W)));const ie=H&&H.targetChanges.get(P.targetId),we=H&&H.targetMismatches.get(P.targetId)!=null,ne=P.view.applyChanges(W,x.isPrimaryClient,ie,we);return hl(x,P.targetId,ne.Ma),ne.snapshot})}(n,v,E,R);const s=yield tl(n.localStore,e,!0),a=new Q_(e,s.gs),c=a.ba(s.documents),u=Ar.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,u);hl(n,t,d.Ma);const p=new Y_(e,t,a);return n.ka.set(e,p),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),d.snapshot})}function ny(n,e,t){return m(this,null,function*(){const r=z(n),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(a=>!Ui(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||(yield ro(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&No(r.remoteStore,i.targetId),oo(r,i.targetId)}).catch(xn))):(oo(r,i.targetId),yield ro(r.localStore,i.targetId,!0))})}function ry(n,e){return m(this,null,function*(){const t=z(n),r=t.ka.get(e),i=t.qa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),No(t.remoteStore,r.targetId))})}function iy(n,e,t){return m(this,null,function*(){const r=hy(n);try{const i=yield function(a,c){const u=z(a),d=he.now(),p=c.reduce((R,D)=>R.add(D.key),K());let v,E;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let D=dt(),x=K();return u.ds.getEntries(R,p).next(P=>{D=P,D.forEach((F,H)=>{H.isValidDocument()||(x=x.add(F))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,D)).next(P=>{v=P;const F=[];for(const H of c){const W=vm(H,v.get(H.key).overlayedDocument);W!=null&&F.push(new rn(H.key,W,Du(W.value.mapValue),lt.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,F,c)}).next(P=>{E=P;const F=P.applyToLocalDocumentSet(v,x);return u.documentOverlayCache.saveOverlays(R,P.batchId,F)})}).then(()=>({batchId:E.batchId,changes:Bu(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let d=a.Wa[a.currentUser.toKey()];d||(d=new ae(Q)),d=d.insert(c,u),a.Wa[a.currentUser.toKey()]=d}(r,i.batchId,t),yield Sr(r,i.changes),yield Wi(r.remoteStore)}catch(i){const s=Fo(i,"Failed to persist write");t.reject(s)}})}function Sh(n,e){return m(this,null,function*(){const t=z(n);try{const r=yield __(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ka.get(s);a&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ba=!0:i.modifiedDocuments.size>0?Z(a.Ba):i.removedDocuments.size>0&&(Z(a.Ba),a.Ba=!1))}),yield Sr(t,r,e)}catch(r){yield xn(r)}})}function ul(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((s,a)=>{const c=a.view.sa(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=z(a);u.onlineState=c;let d=!1;u.queries.forEach((p,v)=>{for(const E of v.ta)E.sa(c)&&(d=!0)}),d&&Uo(u)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}function sy(n,e,t){return m(this,null,function*(){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ka.get(e),s=i&&i.key;if(s){let a=new ae(U.comparator);a=a.insert(s,Ce.newNoDocument(s,q.min()));const c=K().add(s),u=new qi(q.min(),new Map,new ae(Q),a,c);yield Sh(r,u),r.$a=r.$a.remove(s),r.Ka.delete(e),jo(r)}else yield ro(r.localStore,e,!1).then(()=>oo(r,e,t)).catch(xn)})}function oy(n,e){return m(this,null,function*(){const t=z(n),r=e.batch.batchId;try{const i=yield m_(t.localStore,e);Ph(t,r,null),Rh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),yield Sr(t,i)}catch(i){yield xn(i)}})}function ay(n,e,t){return m(this,null,function*(){const r=z(n);try{const i=yield function(a,c){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,c).next(v=>(Z(v!==null),p=v.keys(),u.mutationQueue.removeMutationBatch(d,v))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);Ph(r,e,t),Rh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),yield Sr(r,i)}catch(i){yield xn(i)}})}function Rh(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Ph(n,e,t){const r=z(n);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function oo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.br(e).forEach(r=>{n.Ua.containsKey(r)||Ch(n,r)})}function Ch(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(No(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),jo(n))}function hl(n,e,t){for(const r of t)r instanceof wh?(n.Ua.addReference(r.key,e),cy(n,r)):r instanceof Ah?(O($o,"Document no longer in limbo: "+r.key),n.Ua.removeReference(r.key,e),n.Ua.containsKey(r.key)||Ch(n,r.key)):j()}function cy(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(O($o,"New document in limbo: "+t),n.Qa.add(r),jo(n))}function jo(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new U(oe.fromString(e)),r=n.za.next();n.Ka.set(r,new J_(t)),n.$a=n.$a.insert(t,r),ph(n.remoteStore,new At(Je(Ao(t.path)),r,"TargetPurposeLimboResolution",Mi.ae))}}function Sr(n,e,t){return m(this,null,function*(){const r=z(n),i=[],s=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,u)=>{a.push(r.Ha(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const v=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,v?"current":"not-current")}if(d){i.push(d);const v=Do.Yi(u.targetId,d);s.push(v)}}))}),yield Promise.all(a),r.La.p_(i),yield function(u,d){return m(this,null,function*(){const p=z(u);try{yield p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>C.forEach(d,E=>C.forEach(E.Hi,R=>p.persistence.referenceDelegate.addReference(v,E.targetId,R)).next(()=>C.forEach(E.Ji,R=>p.persistence.referenceDelegate.removeReference(v,E.targetId,R)))))}catch(v){if(!On(v))throw v;O(Vo,"Failed to update sequence numbers: "+v)}for(const v of d){const E=v.targetId;if(!v.fromCache){const R=p.Ts.get(E),D=R.snapshotVersion,x=R.withLastLimboFreeSnapshotVersion(D);p.Ts=p.Ts.insert(E,x)}}})}(r.localStore,s))})}function ly(n,e){return m(this,null,function*(){const t=z(n);if(!t.currentUser.isEqual(e)){O($o,"User change. New user:",e.toKey());const r=yield uh(t.localStore,e);t.currentUser=e,function(s,a){s.Ga.forEach(c=>{c.forEach(u=>{u.reject(new L(k.CANCELLED,a))})}),s.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),yield Sr(t,r.Rs)}})}function uy(n,e){const t=z(n),r=t.Ka.get(e);if(r&&r.Ba)return K().add(r.key);{let i=K();const s=t.qa.get(e);if(!s)return i;for(const a of s){const c=t.ka.get(a);i=i.unionWith(c.view.Sa)}return i}}function kh(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sy.bind(null,e),e.La.p_=G_.bind(null,e.eventManager),e.La.Ja=K_.bind(null,e.eventManager),e}function hy(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ay.bind(null,e),e}class bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return m(this,null,function*(){this.serializer=zi(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),yield this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)})}tu(e,t){return null}nu(e,t){return null}eu(e){return g_(this.persistence,new d_,e.initialUser,this.serializer)}Xa(e){return new lh(ko.ri,this.serializer)}Za(e){return new E_}terminate(){return m(this,null,function*(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}bi.provider={build:()=>new bi};class dy extends bi{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Z(this.persistence.referenceDelegate instanceof wi);const r=this.persistence.referenceDelegate.garbageCollector;return new Jm(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new lh(r=>wi.ri(r,t),this.serializer)}}class ao{initialize(e,t){return m(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ul(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ly.bind(null,this.syncEngine),yield z_(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return function(){return new W_}()}createDatastore(e){const t=zi(e.databaseInfo.databaseId),r=function(s){return new R_(s)}(e.databaseInfo);return function(s,a,c,u){return new D_(s,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new N_(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ul(this.syncEngine,t,0),function(){return il.D()?new il:new w_}())}createSyncEngine(e,t){return function(i,s,a,c,u,d,p){const v=new X_(i,s,a,c,u,d);return p&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return m(this,null,function*(){var e,t;yield function(i){return m(this,null,function*(){const s=z(i);O(Qt,"RemoteStore shutting down."),s.W_.add(5),yield br(s),s.z_.shutdown(),s.j_.set("Unknown")})}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()})}}ao.provider={build:()=>new ao};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):ht("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="FirestoreClient";class fy{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=Iu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,a=>m(this,null,function*(){O(xt,"Received user=",a.uid),yield this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,a=>(O(xt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>m(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fo(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}function Ns(n,e){return m(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),O(xt,"Initializing OfflineComponentProvider");const t=n.configuration;yield e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(i=>m(this,null,function*(){r.isEqual(i)||(yield uh(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e})}function dl(n,e){return m(this,null,function*(){n.asyncQueue.verifyOperationInProgress();const t=yield py(n);O(xt,"Initializing OnlineComponentProvider"),yield e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ol(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ol(e.remoteStore,i)),n._onlineComponents=e})}function py(n){return m(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(xt,"Using user provided OfflineComponentProvider");try{yield Ns(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;wn("Error using user provided cache. Falling back to memory cache: "+t),yield Ns(n,new bi)}}else O(xt,"Using default OfflineComponentProvider"),yield Ns(n,new dy(void 0));return n._offlineComponents})}function Vh(n){return m(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(xt,"Using user provided OnlineComponentProvider"),yield dl(n,n._uninitializedComponentsProvider._online)):(O(xt,"Using default OnlineComponentProvider"),yield dl(n,new ao))),n._onlineComponents})}function gy(n){return Vh(n).then(e=>e.syncEngine)}function Nh(n){return m(this,null,function*(){const e=yield Vh(n),t=e.eventManager;return t.onListen=Z_.bind(null,e.syncEngine),t.onUnlisten=ny.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ey.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ry.bind(null,e.syncEngine),t})}function my(n,e,t={}){const r=new ct;return n.asyncQueue.enqueueAndForget(()=>m(this,null,function*(){return function(s,a,c,u,d){const p=new Dh({next:E=>{p.su(),a.enqueueAndForget(()=>Ih(s,v));const R=E.docs.has(c);!R&&E.fromCache?d.reject(new L(k.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&E.fromCache&&u&&u.source==="server"?d.reject(new L(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),v=new Eh(Ao(c.path),p,{includeMetadataChanges:!0,Ta:!0});return Th(s,v)}(yield Nh(n),n.asyncQueue,e,t,r)})),r.promise}function _y(n,e,t={}){const r=new ct;return n.asyncQueue.enqueueAndForget(()=>m(this,null,function*(){return function(s,a,c,u,d){const p=new Dh({next:E=>{p.su(),a.enqueueAndForget(()=>Ih(s,v)),E.fromCache&&u.source==="server"?d.reject(new L(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),v=new Eh(c,p,{includeMetadataChanges:!0,Ta:!0});return Th(s,v)}(yield Nh(n),n.asyncQueue,e,t,r)})),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n,e,t){if(!t)throw new L(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yy(n,e,t,r){if(e===!0&&r===!0)throw new L(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pl(n){if(!U.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gl(n){if(U.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j()}function Cn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gi(n);throw new L(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="firestore.googleapis.com",ml=!0;class _l{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mh,this.ssl=ml}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ml;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ch;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Qm)throw new L(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ki{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _l({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _l(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sg;switch(r.type){case"firstParty":return new kg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return m(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fl.get(t);r&&(O("ComponentProvider","Removing Datastore"),fl.delete(t),r.terminate())}(this),Promise.resolve()}}function vy(n,e,t,r={}){var i;const s=(n=Cn(n,Ki))._getSettings(),a=`${e}:${t}`;if(s.host!==Mh&&s.host!==a&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Pe.MOCK_USER;else{c=ep(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new L(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Pe(d)}n._authCredentials=new Rg(new Tu(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ln(this.firestore,e,this._query)}}class Ue{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}}class Pt extends Ln{constructor(e,t,r){super(e,t,Ao(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new U(e))}withConverter(e){return new Pt(this.firestore,e,this._path)}}function gn(n,e,...t){if(n=Oe(n),Oh("collection","path",e),n instanceof Ki){const r=oe.fromString(e,...t);return gl(r),new Pt(n,null,r)}{if(!(n instanceof Ue||n instanceof Pt))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return gl(r),new Pt(n.firestore,null,r)}}function Lh(n,e,...t){if(n=Oe(n),arguments.length===1&&(e=Iu.newId()),Oh("doc","path",e),n instanceof Ki){const r=oe.fromString(e,...t);return pl(r),new Ue(n,null,new U(r))}{if(!(n instanceof Ue||n instanceof Pt))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return pl(r),new Ue(n.firestore,n instanceof Pt?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="AsyncQueue";class vl{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new dh(this,"async_queue_retry"),this.Su=()=>{const r=Vs();r&&O(yl,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Vs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Vs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ct;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}Cu(){return m(this,null,function*(){if(this.Vu.length!==0){try{yield this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!On(e))throw e;O(yl,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}})}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw ht("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=Lo.createAndSchedule(this,e,t,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&j()}verifyOperationInProgress(){}Mu(){return m(this,null,function*(){let e;do e=this.bu,yield e;while(e!==this.bu)})}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Qi extends Ki{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new vl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return m(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vl(e),this._firestoreClient=void 0,yield e}})}}function Ty(n,e){const t=typeof n=="object"?n:_o(),r=typeof n=="string"?n:mi,i=en(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Xf("firestore");s&&vy(i,...s)}return i}function Bo(n){if(n._terminated)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Iy(n),n._firestoreClient}function Iy(n){var e,t,r;const i=n._freezeSettings(),s=function(c,u,d,p){return new zg(c,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,xh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new fy(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(Ee.fromBase64String(e))}catch(t){throw new L(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kn(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=/^__.*__$/;class wy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new rn(e,this.data,this.fieldMask,t,this.fieldTransforms):new wr(e,this.data,t,this.fieldTransforms)}}function Uh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Wo{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Wo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Si(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Uh(this.Lu)&&Ey.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Ay{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||zi(e)}ju(e,t,r,i=!1){return new Wo({Lu:e,methodName:t,zu:r,path:Ie.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $h(n){const e=n._freezeSettings(),t=zi(n._databaseId);return new Ay(n._databaseId,!!e.ignoreUndefinedProperties,t)}function by(n,e,t,r,i,s={}){const a=n.ju(s.merge||s.mergeFields?2:0,e,t,i);qh("Data must be an object, but it was:",a,r);const c=jh(r,a);let u,d;if(s.merge)u=new ze(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const v of s.mergeFields){const E=Ry(e,v,t);if(!a.contains(E))throw new L(k.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Cy(p,E)||p.push(E)}u=new ze(p),d=a.fieldTransforms.filter(v=>u.covers(v.field))}else u=null,d=a.fieldTransforms;return new wy(new je(c),u,d)}function Sy(n,e,t,r=!1){return Go(t,n.ju(r?4:3,e))}function Go(n,e){if(Bh(n=Oe(n)))return qh("Unsupported field value:",e,n),jh(n,e);if(n instanceof Fh)return function(r,i){if(!Uh(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let u=Go(c,i.Uu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=he.fromDate(r);return{timestampValue:Ei(i.serializer,s)}}if(r instanceof he){const s=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ei(i.serializer,s)}}if(r instanceof zo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kn)return{bytesValue:th(i.serializer,r._byteString)};if(r instanceof Ue){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Po(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ho)return function(a,c){return{mapValue:{fields:{[Cu]:{stringValue:ku},[_i]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return bo(c.serializer,d)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${Gi(r)}`)}(n,e)}function jh(n,e){const t={};return wu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tn(n,(r,i)=>{const s=Go(i,e.qu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Bh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof zo||n instanceof kn||n instanceof Ue||n instanceof Fh||n instanceof Ho)}function qh(n,e,t){if(!Bh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Gi(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Ry(n,e,t){if((e=Oe(e))instanceof qo)return e._internalPath;if(typeof e=="string")return zh(n,e);throw Si("Field path arguments must be of type string or ",n,!1,void 0,t)}const Py=new RegExp("[~\\*/\\[\\]]");function zh(n,e,t){if(e.search(Py)>=0)throw Si(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qo(...e.split("."))._internalPath}catch(r){throw Si(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Si(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new L(k.INVALID_ARGUMENT,c+n+u)}function Cy(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ky(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ko("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ky extends Hh{data(){return super.data()}}function Ko(n,e){return typeof e=="string"?zh(n,e):e instanceof qo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qo{}class Vy extends Qo{}function co(n,e,...t){let r=[];e instanceof Qo&&r.push(e),r=r.concat(t),function(s){const a=s.filter(u=>u instanceof Yo).length,c=s.filter(u=>u instanceof Yi).length;if(a>1||a>0&&c>0)throw new L(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Yi extends Vy{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Yi(e,t,r)}_apply(e){const t=this._parse(e);return Wh(e._query,t),new Ln(e.firestore,e.converter,Js(e._query,t))}_parse(e){const t=$h(e.firestore);return function(s,a,c,u,d,p,v){let E;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new L(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Il(v,p);const D=[];for(const x of v)D.push(Tl(u,s,x));E={arrayValue:{values:D}}}else E=Tl(u,s,v)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Il(v,p),E=Sy(c,a,v,p==="in"||p==="not-in");return fe.create(d,p,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function yn(n,e,t){const r=e,i=Ko("where",n);return Yi._create(i,r,t)}class Yo extends Qo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:We.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const c=s.getFlattenedFilters();for(const u of c)Wh(a,u),a=Js(a,u)}(e._query,t),new Ln(e.firestore,e.converter,Js(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Tl(n,e,t){if(typeof(t=Oe(t))=="string"){if(t==="")throw new L(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fu(e)&&t.indexOf("/")!==-1)throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(oe.fromString(t));if(!U.isDocumentKey(r))throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mc(n,new U(r))}if(t instanceof Ue)return Mc(n,t._key);throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gi(t)}.`)}function Il(n,e){if(!Array.isArray(n)||n.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wh(n,e){const t=function(i,s){for(const a of i)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ny{convertValue(e,t="none"){switch(Vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return tn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[_i].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ue(a.doubleValue));return new Ho(s)}convertGeoPoint(e){return new zo(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){const t=kt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);Z(ah(r));const i=new mr(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(t)||ht(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gh extends Hh{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ci(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ko("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ci extends Gh{data(e={}){return super.data(e)}}class Oy{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new rr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ci(this._firestore,this._userDataWriter,r.key,r,new rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new ci(i._firestore,i._userDataWriter,c.doc.key,c.doc,new rr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new ci(i._firestore,i._userDataWriter,c.doc.key,c.doc,new rr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:My(c.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function My(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(n){n=Cn(n,Ue);const e=Cn(n.firestore,Qi);return my(Bo(e),n._key).then(t=>$y(e,n,t))}class Kh extends Ny{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}function ir(n){n=Cn(n,Ln);const e=Cn(n.firestore,Qi),t=Bo(e),r=new Kh(e);return Dy(n._query),_y(t,n._query).then(i=>new Oy(e,r,n,i))}function Fy(n,e){const t=Cn(n.firestore,Qi),r=Lh(n),i=xy(n.converter,e);return Uy(t,[by($h(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,lt.exists(!1))]).then(()=>r)}function Uy(n,e){return function(r,i){const s=new ct;return r.asyncQueue.enqueueAndForget(()=>m(this,null,function*(){return iy(yield gy(r),i,s)})),s.promise}(Bo(n),e)}function $y(n,e,t){const r=t.docs.get(e._key),i=new Kh(n);return new Gh(n,i,e._key,r,new rr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Nn=i})(Vn),tt(new He("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new Qi(new Pg(r.getProvider("auth-internal")),new Dg(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mr(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Be(bc,Sc,e),Be(bc,Sc,"esm2017")})();var jy="firebase",By="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be(jy,By,"app");function Qh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qy=Qh,Yh=new Zt("auth","Firebase",Qh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new Oi("@firebase/auth");function zy(n,...e){Ri.logLevel<=G.WARN&&Ri.warn(`Auth (${Vn}): ${n}`,...e)}function li(n,...e){Ri.logLevel<=G.ERROR&&Ri.error(`Auth (${Vn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n,...e){throw Jo(n,...e)}function Ze(n,...e){return Jo(n,...e)}function Jh(n,e,t){const r=Object.assign(Object.assign({},qy()),{[e]:t});return new Zt("auth","Firebase",r).create(e,{appName:n.name})}function Wt(n){return Jh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Yh.create(n,...e)}function B(n,e,...t){if(!n)throw Jo(e,...t)}function st(n){const e="INTERNAL ASSERTION FAILED: "+n;throw li(e),new Error(e)}function pt(n,e){n||st(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Hy(){return El()==="http:"||El()==="https:"}function El(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hy()||su()||"connection"in navigator)?navigator.onLine:!0}function Gy(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.shortDelay=e,this.longDelay=t,pt(t>e,"Short delay should be less than long delay!"),this.isMobile=tp()||ip()}get(){return Wy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n,e){pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=new Rr(3e4,6e4);function Zo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}function Fn(s,a,c,u){return m(this,arguments,function*(n,e,t,r,i={}){return Zh(n,i,()=>m(this,null,function*(){let d={},p={};r&&(e==="GET"?p=r:d={body:JSON.stringify(r)});const v=Ir(Object.assign({key:n.config.apiKey},p)).slice(1),E=yield n._getAdditionalHeaders();E["Content-Type"]="application/json",n.languageCode&&(E["X-Firebase-Locale"]=n.languageCode);const R=Object.assign({method:e,headers:E},d);return rp()||(R.referrerPolicy="no-referrer"),Xh.fetch()(ed(n,n.config.apiHost,t,v),R)}))})}function Zh(n,e,t){return m(this,null,function*(){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ky),e);try{const i=new Jy(n),s=yield Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=yield s.json();if("needConfirmation"in a)throw ti(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ti(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ti(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ti(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Jh(n,p,d);ft(n,p)}}catch(i){if(i instanceof Ge)throw i;ft(n,"network-request-failed",{message:String(i)})}})}function Yy(s,a,c,u){return m(this,arguments,function*(n,e,t,r,i={}){const d=yield Fn(n,e,t,r,i);return"mfaPendingCredential"in d&&ft(n,"multi-factor-auth-required",{_serverResponse:d}),d})}function ed(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Xo(n.config,i):`${n.config.apiScheme}://${i}`}class Jy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ze(this.auth,"network-request-failed")),Qy.get())})}}function ti(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ze(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(n,e){return m(this,null,function*(){return Fn(n,"POST","/v1/accounts:delete",e)})}function td(n,e){return m(this,null,function*(){return Fn(n,"POST","/v1/accounts:lookup",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function Zy(n,e=!1){return m(this,null,function*(){const t=Oe(n),r=yield t.getIdToken(e),i=ea(r);B(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:lr(xs(i.auth_time)),issuedAtTime:lr(xs(i.iat)),expirationTime:lr(xs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}})}function xs(n){return Number(n)*1e3}function ea(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return li("JWT malformed, contained fewer than 3 sections"),null;try{const i=tu(t);return i?JSON.parse(i):(li("Failed to decode base64 JWT payload"),null)}catch(i){return li("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wl(n){const e=ea(n);return B(e,"internal-error"),B(typeof e.exp!="undefined","internal-error"),B(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n,e,t=!1){return m(this,null,function*(){if(t)return e;try{return yield e}catch(r){throw r instanceof Ge&&ev(r)&&n.auth.currentUser===n&&(yield n.auth.signOut()),r}})}function ev({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>m(this,null,function*(){yield this.iteration()}),t)}iteration(){return m(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n){return m(this,null,function*(){var e;const t=n.auth,r=yield n.getIdToken(),i=yield Tr(n,td(t,{idToken:r}));B(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nd(s.providerUserInfo):[],c=rv(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),p=u?d:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new uo(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,v)})}function nv(n){return m(this,null,function*(){const e=Oe(n);yield Pi(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function rv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nd(n){return n.map(e=>{var{providerId:t}=e,r=go(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n,e){return m(this,null,function*(){const t=yield Zh(n,{},()=>m(this,null,function*(){const r=Ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=ed(n,i,"/v1/token",`key=${s}`),c=yield n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Xh.fetch()(a,{method:"POST",headers:c,body:r})}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function sv(n,e){return m(this,null,function*(){return Fn(n,"POST","/v2/accounts:revokeToken",Zo(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken!="undefined","internal-error"),B(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):wl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=wl(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return m(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return m(this,null,function*(){const{accessToken:r,refreshToken:i,expiresIn:s}=yield iv(e,t);this.updateTokensAndExpiration(r,i,Number(s))})}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new vn;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,e){B(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class ot{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=go(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new uo(s.createdAt||void 0,s.lastLoginAt||void 0)}getIdToken(e){return m(this,null,function*(){const t=yield Tr(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return Zy(this,e)}reload(){return nv(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return m(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(yield Pi(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return m(this,null,function*(){if(Qe(this.auth.app))return Promise.reject(Wt(this.auth));const e=yield this.getIdToken();return yield Tr(this,Xy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,u,d,p;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,D=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,F=(d=t.createdAt)!==null&&d!==void 0?d:void 0,H=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:W,emailVerified:ie,isAnonymous:we,providerData:ne,stsTokenManager:w}=t;B(W&&w,e,"internal-error");const g=vn.fromJSON(this.name,w);B(typeof W=="string",e,"internal-error"),vt(v,e.name),vt(E,e.name),B(typeof ie=="boolean",e,"internal-error"),B(typeof we=="boolean",e,"internal-error"),vt(R,e.name),vt(D,e.name),vt(x,e.name),vt(P,e.name),vt(F,e.name),vt(H,e.name);const y=new ot({uid:W,auth:e,email:E,emailVerified:ie,displayName:v,isAnonymous:we,photoURL:D,phoneNumber:R,tenantId:x,stsTokenManager:g,createdAt:F,lastLoginAt:H});return ne&&Array.isArray(ne)&&(y.providerData=ne.map(I=>Object.assign({},I))),P&&(y._redirectEventId=P),y}static _fromIdTokenResponse(e,t,r=!1){return m(this,null,function*(){const i=new vn;i.updateFromServerResponse(t);const s=new ot({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return yield Pi(s),s})}static _fromGetAccountInfoResponse(e,t,r){return m(this,null,function*(){const i=t.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?nd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new vn;c.updateFromIdToken(r);const u=new ot({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new uo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Map;function at(n){pt(n instanceof Function,"Expected a class definition");let e=Al.get(n);return e?(pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Al.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return m(this,null,function*(){return!0})}_set(e,t){return m(this,null,function*(){this.storage[e]=t})}_get(e){return m(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return m(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}rd.type="NONE";const bl=rd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n,e,t){return`firebase:${n}:${e}:${t}`}class Tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ui(this.userKey,i.apiKey,s),this.fullPersistenceKey=ui("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return m(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);return e?ot._fromJSON(this.auth,e):null})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return m(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,r="authUser"){return m(this,null,function*(){if(!t.length)return new Tn(at(bl),e,r);const i=(yield Promise.all(t.map(d=>m(this,null,function*(){if(yield d._isAvailable())return d})))).filter(d=>d);let s=i[0]||at(bl);const a=ui(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=yield d._get(a);if(p){const v=ot._fromJSON(e,p);d!==s&&(c=v),s=d;break}}catch(p){}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Tn(s,e,r):(s=u[0],c&&(yield s._set(a,c.toJSON())),yield Promise.all(t.map(d=>m(this,null,function*(){if(d!==s)try{yield d._remove(a)}catch(p){}}))),new Tn(s,e,r))})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ad(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(id(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ld(e))return"Blackberry";if(ud(e))return"Webos";if(sd(e))return"Safari";if((e.includes("chrome/")||od(e))&&!e.includes("edge/"))return"Chrome";if(cd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function id(n=ke()){return/firefox\//i.test(n)}function sd(n=ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function od(n=ke()){return/crios\//i.test(n)}function ad(n=ke()){return/iemobile/i.test(n)}function cd(n=ke()){return/android/i.test(n)}function ld(n=ke()){return/blackberry/i.test(n)}function ud(n=ke()){return/webos/i.test(n)}function ta(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ov(n=ke()){var e;return ta(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function av(){return sp()&&document.documentMode===10}function hd(n=ke()){return ta(n)||cd(n)||ud(n)||ld(n)||/windows phone/i.test(n)||ad(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n,e=[]){let t;switch(n){case"Browser":t=Sl(ke());break;case"Worker":t=`${Sl(ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const u=e(s);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}runMiddleware(e){return m(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)yield r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t){return m(this,arguments,function*(n,e={}){return Fn(n,"GET","/v2/passwordPolicy",Zo(n,e))})}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=6;class hv{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:uv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rl(this),this.idTokenSubscription=new Rl(this),this.beforeStateQueue=new cv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(()=>m(this,null,function*(){var r,i;if(!this._deleted&&(this.persistenceManager=yield Tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(s){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return m(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return m(this,null,function*(){try{const t=yield td(this,{idToken:e}),r=yield ot._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return m(this,null,function*(){var t;if(Qe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=yield this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=yield this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{yield this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)})}tryRedirectSignIn(e){return m(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return m(this,null,function*(){try{yield Pi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=Gy()}_delete(){return m(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return m(this,null,function*(){if(Qe(this.app))return Promise.reject(Wt(this));const t=e?Oe(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return m(this,null,function*(){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>m(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return m(this,null,function*(){return Qe(this.app)?Promise.reject(Wt(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return Qe(this.app)?Promise.reject(Wt(this)):this.queue(()=>m(this,null,function*(){yield this.assertedPersistence.setPersistence(at(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return m(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return m(this,null,function*(){const e=yield lv(this),t=new hv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}revokeAccessToken(e){return m(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),yield sv(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}_setRedirectUser(e,t){return m(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return m(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=yield Tn.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return m(this,null,function*(){var t,r;return this._isInitialized&&(yield this.queue(()=>m(this,null,function*(){}))),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return m(this,null,function*(){if(e===this.currentUser)return this.queue(()=>m(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}directlySetCurrentUser(e){return m(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return m(this,null,function*(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=yield(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader();r&&(t["X-Firebase-Client"]=r);const i=yield this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t})}_getAppCheckToken(){return m(this,null,function*(){var e;if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=yield(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken();return t!=null&&t.error&&zy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token})}}function na(n){return Oe(n)}class Rl{constructor(e){this.auth=e,this.observer=null,this.addObserver=dp(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra={loadJS(){return m(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fv(n){ra=n}function pv(n){return ra.loadJS(n)}function gv(){return ra.gapiScript}function mv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(n,e){const t=en(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(dr(s,e!=null?e:{}))return i;ft(i,"already-initialized")}return t.initialize({options:e})}function yv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(at);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vv(n,e,t){const r=na(n);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=fd(e),{host:a,port:c}=Tv(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Iv()}function fd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Tv(n){const e=fd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Pl(a)}}}function Pl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Iv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(n,e){return m(this,null,function*(){return Yy(n,"POST","/v1/accounts:signInWithIdp",Zo(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="http://localhost";class Yt extends pd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=go(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Yt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return In(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,In(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,In(e,t)}buildRequest(){const e={requestUri:Ev,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ir(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends gd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Pr{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch(t){return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return It.credential(t,r)}catch(i){return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Pr{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch(t){return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Pr{constructor(){super("twitter.com")}static credential(e,t){return Yt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return wt.credential(t,r)}catch(i){return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,r,i=!1){return m(this,null,function*(){const s=yield ot._fromIdTokenResponse(e,r,i),a=Cl(r);return new Dn({user:s,providerId:a,_tokenResponse:r,operationType:t})})}static _forOperation(e,t,r){return m(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const i=Cl(r);return new Dn({user:e,providerId:i,_tokenResponse:r,operationType:t})})}}function Cl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Ge{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ci.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ci(e,t,r,i)}}function md(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ci._fromErrorAndOperation(n,s,e,r):s})}function wv(n,e,t=!1){return m(this,null,function*(){const r=yield Tr(n,e._linkToIdToken(n.auth,yield n.getIdToken()),t);return Dn._forOperation(n,"link",r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n,e,t=!1){return m(this,null,function*(){const{auth:r}=n;if(Qe(r.app))return Promise.reject(Wt(r));const i="reauthenticate";try{const s=yield Tr(n,md(r,i,e,n),t);B(s.idToken,r,"internal-error");const a=ea(s.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(n.uid===c,r,"user-mismatch"),Dn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(n,e,t=!1){return m(this,null,function*(){if(Qe(n.app))return Promise.reject(Wt(n));const r="signIn",i=yield md(n,r,e),s=yield Dn._fromIdTokenResponse(n,r,i);return t||(yield n._updateCurrentUser(s.user)),s})}function Sv(n,e,t,r){return Oe(n).onIdTokenChanged(e,t,r)}function Rv(n,e,t){return Oe(n).beforeAuthStateChanged(e,t)}const ki="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ki,"1"),this.storage.removeItem(ki),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=1e3,Cv=10;class En extends _d{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);av()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Cv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Pv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,t){return m(this,null,function*(){yield jt(En.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)})}_get(e){return m(this,null,function*(){const t=yield jt(En.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t})}_remove(e){return m(this,null,function*(){yield jt(En.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}En.type="LOCAL";const kv=En;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends _d{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yd.type="SESSION";const vd=yd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n){return Promise.all(n.map(e=>m(this,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ji(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return m(this,null,function*(){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(d=>m(this,null,function*(){return d(t.origin,s)})),u=yield Dv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ji.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,r=50){return m(this,null,function*(){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{const d=ia("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(v){const E=v;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(E.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function Nv(n){et().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){return typeof et().WorkerGlobalScope!="undefined"&&typeof et().importScripts=="function"}function xv(){return m(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(n){return null}})}function Ov(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Mv(){return Td()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="firebaseLocalStorageDb",Lv=1,Di="firebaseLocalStorage",Ed="fbase_key";class Cr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xi(n,e){return n.transaction([Di],e?"readwrite":"readonly").objectStore(Di)}function Fv(){const n=indexedDB.deleteDatabase(Id);return new Cr(n).toPromise()}function ho(){const n=indexedDB.open(Id,Lv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Di,{keyPath:Ed})}catch(i){t(i)}}),n.addEventListener("success",()=>m(this,null,function*(){const r=n.result;r.objectStoreNames.contains(Di)?e(r):(r.close(),yield Fv(),e(yield ho()))}))})}function kl(n,e,t){return m(this,null,function*(){const r=Xi(n,!0).put({[Ed]:e,value:t});return new Cr(r).toPromise()})}function Uv(n,e){return m(this,null,function*(){const t=Xi(n,!1).get(e),r=yield new Cr(t).toPromise();return r===void 0?null:r.value})}function Dl(n,e){const t=Xi(n,!0).delete(e);return new Cr(t).toPromise()}const $v=800,jv=3;class wd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return m(this,null,function*(){return this.db?this.db:(this.db=yield ho(),this.db)})}_withRetries(e){return m(this,null,function*(){let t=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(t++>jv)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return m(this,null,function*(){return Td()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return m(this,null,function*(){this.receiver=Ji._getInstance(Mv()),this.receiver._subscribe("keyChanged",(e,t)=>m(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>m(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return m(this,null,function*(){var e,t;if(this.activeServiceWorker=yield xv(),!this.activeServiceWorker)return;this.sender=new Vv(this.activeServiceWorker);const r=yield this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return m(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||Ov()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return m(this,null,function*(){try{if(!indexedDB)return!1;const e=yield ho();return yield kl(e,ki,"1"),yield Dl(e,ki),!0}catch(e){}return!1})}_withPendingWrite(e){return m(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return m(this,null,function*(){return this._withPendingWrite(()=>m(this,null,function*(){return yield this._withRetries(r=>kl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return m(this,null,function*(){const t=yield this._withRetries(r=>Uv(r,e));return this.localCache[e]=t,t})}_remove(e){return m(this,null,function*(){return this._withPendingWrite(()=>m(this,null,function*(){return yield this._withRetries(t=>Dl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return m(this,null,function*(){const e=yield this._withRetries(i=>{const s=Xi(i,!1).getAll();return new Cr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t})}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>m(this,null,function*(){return this._poll()}),$v)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wd.type="LOCAL";const Bv=wd;new Rr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(n,e){return e?at(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends pd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,t){return In(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zv(n){return bv(n.auth,new sa(n),n.bypassAuthState)}function Hv(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Av(t,new sa(n),n.bypassAuthState)}function Wv(n){return m(this,null,function*(){const{auth:e,user:t}=n;return B(t,e,"internal-error"),wv(t,new sa(n),n.bypassAuthState)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((e,t)=>m(this,null,function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}onAuthEvent(e){return m(this,null,function*(){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(c)(u))}catch(d){this.reject(d)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zv;case"linkViaPopup":case"linkViaRedirect":return Wv;case"reauthViaPopup":case"reauthViaRedirect":return Hv;default:ft(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=new Rr(2e3,1e4);class mn extends Ad{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}executeNotNull(){return m(this,null,function*(){const e=yield this.execute();return B(e,this.auth,"internal-error"),e})}onExecution(){return m(this,null,function*(){pt(this.filter.length===1,"Popup operations only handle one event");const e=ia();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gv.get())};e()}}mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="pendingRedirect",hi=new Map;class ur extends Ad{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}execute(){return m(this,null,function*(){let e=hi.get(this.auth._key());if(!e){try{const r=(yield Qv(this.resolver,this.auth))?yield jt(ur.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}hi.set(this.auth._key(),e)}return this.bypassAuthState||hi.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return m(this,null,function*(){if(e.type==="signInViaRedirect")return jt(ur.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,jt(ur.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return m(this,null,function*(){})}cleanUp(){}}function Qv(n,e){return m(this,null,function*(){const t=Xv(e),r=Jv(n);if(!(yield r._isAvailable()))return!1;const i=(yield r._get(t))==="true";return yield r._remove(t),i})}function Yv(n,e){hi.set(n._key(),e)}function Jv(n){return at(n._redirectPersistence)}function Xv(n){return ui(Kv,n.config.apiKey,n.name)}function Zv(n,e,t=!1){return m(this,null,function*(){if(Qe(n.app))return Promise.reject(Wt(n));const r=na(n),i=qv(r,e),a=yield new ur(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,yield r._persistUserIfCurrent(a.user),yield r._setRedirectUser(null,e)),a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=10*60*1e3;class tT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!bd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ze(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vl(e))}saveEventToCache(e){this.cachedEventUids.add(Vl(e)),this.lastProcessedEventTime=Date.now()}}function Vl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){return m(this,arguments,function*(n,e={}){return Fn(n,"GET","/v1/projects",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sT=/^https?/;function oT(n){return m(this,null,function*(){if(n.config.emulator)return;const{authorizedDomains:e}=yield rT(n);for(const t of e)try{if(aT(t))return}catch(r){}ft(n,"unauthorized-domain")})}function aT(n){const e=lo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!sT.test(t))return!1;if(iT.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=new Rr(3e4,6e4);function Nl(){const n=et().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lT(n){return new Promise((e,t)=>{var r,i,s;function a(){Nl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nl(),t(Ze(n,"network-request-failed"))},timeout:cT.get()})}if(!((i=(r=et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=et().gapi)===null||s===void 0)&&s.load)a();else{const c=mv("iframefcb");return et()[c]=()=>{gapi.load?a():t(Ze(n,"network-request-failed"))},pv(`${gv()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw di=null,e})}let di=null;function uT(n){return di=di||lT(n),di}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=new Rr(5e3,15e3),dT="__/auth/iframe",fT="emulator/auth/iframe",pT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mT(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xo(e,fT):`https://${n.config.authDomain}/${dT}`,r={apiKey:e.apiKey,appName:n.name,v:Vn},i=gT.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ir(r).slice(1)}`}function _T(n){return m(this,null,function*(){const e=yield uT(n),t=et().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:mT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pT,dontclear:!0},r=>new Promise((i,s)=>m(this,null,function*(){yield r.restyle({setHideOnLeave:!1});const a=Ze(n,"network-request-failed"),c=et().setTimeout(()=>{s(a)},hT.get());function u(){et().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(a)})})))})}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vT=500,TT=600,IT="_blank",ET="http://localhost";class xl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function wT(n,e,t,r=vT,i=TT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},yT),{width:r.toString(),height:i.toString(),top:s,left:a}),d=ke().toLowerCase();t&&(c=od(d)?IT:t),id(d)&&(e=e||ET,u.scrollbars="yes");const p=Object.entries(u).reduce((E,[R,D])=>`${E}${R}=${D},`,"");if(ov(d)&&c!=="_self")return AT(e||"",c),new xl(null);const v=window.open(e||"",c,p);B(v,n,"popup-blocked");try{v.focus()}catch(E){}return new xl(v)}function AT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="__/auth/handler",ST="emulator/auth/handler",RT=encodeURIComponent("fac");function Ol(n,e,t,r,i,s){return m(this,null,function*(){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vn,eventId:i};if(e instanceof gd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",hp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,v]of Object.entries({}))a[p]=v}if(e instanceof Pr){const p=e.getScopes().filter(v=>v!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=yield n._getAppCheckToken(),d=u?`#${RT}=${encodeURIComponent(u)}`:"";return`${PT(n)}?${Ir(c).slice(1)}${d}`})}function PT({config:n}){return n.emulator?Xo(n,ST):`https://${n.authDomain}/${bT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="webStorageSupport";class CT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vd,this._completeRedirectFn=Zv,this._overrideRedirectResult=Yv}_openPopup(e,t,r,i){return m(this,null,function*(){var s;pt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=yield Ol(e,t,r,lo(),i);return wT(e,a,ia())})}_openRedirect(e,t,r,i){return m(this,null,function*(){yield this._originValidation(e);const s=yield Ol(e,t,r,lo(),i);return Nv(s),new Promise(()=>{})})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(pt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}initAndGetManager(e){return m(this,null,function*(){const t=yield _T(e),r=new tT(e);return t.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r})}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Os,{type:Os},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Os];a!==void 0&&t(!!a),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=oT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hd()||sd()||ta()}}const kT=CT;var Ml="@firebase/auth",Ll="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}getToken(e){return m(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NT(n){tt(new He("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dd(n)},d=new dv(r,i,s,u);return yv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),tt(new He("auth-internal",e=>{const t=na(e.getProvider("auth").getImmediate());return(r=>new DT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(Ml,Ll,VT(n)),Be(Ml,Ll,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=5*60,OT=iu("authIdTokenMaxAge")||xT;let Fl=null;const MT=n=>e=>m(Ye,null,function*(){const t=e&&(yield e.getIdTokenResult()),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>OT)return;const i=t==null?void 0:t.token;Fl!==i&&(Fl=i,yield fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});function LT(n=_o()){const e=en(n,"auth");if(e.isInitialized())return e.getImmediate();const t=_v(n,{popupRedirectResolver:kT,persistence:[Bv,kv,vd]}),r=iu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=MT(s.toString());Rv(t,a,()=>a(t.currentUser)),Sv(t,c=>a(c))}}const i=nu("auth");return i&&vv(t,`http://${i}`),t}function FT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}fv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ze("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",FT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NT("Browser");const Sd="@firebase/installations",oa="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=1e4,Pd=`w:${oa}`,Cd="FIS_v2",UT="https://firebaseinstallations.googleapis.com/v1",$T=60*60*1e3,jT="installations",BT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Jt=new Zt(jT,BT,qT);function kd(n){return n instanceof Ge&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd({projectId:n}){return`${UT}/projects/${n}/installations`}function Vd(n){return{token:n.token,requestStatus:2,expiresIn:HT(n.expiresIn),creationTime:Date.now()}}function Nd(n,e){return m(this,null,function*(){const r=(yield e.json()).error;return Jt.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})}function xd({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function zT(n,{refreshToken:e}){const t=xd(n);return t.append("Authorization",WT(e)),t}function Od(n){return m(this,null,function*(){const e=yield n();return e.status>=500&&e.status<600?n():e})}function HT(n){return Number(n.replace("s","000"))}function WT(n){return`${Cd} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(r,i){return m(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Dd(n),a=xd(n),c=e.getImmediate({optional:!0});if(c){const v=yield c.getHeartbeatsHeader();v&&a.append("x-firebase-client",v)}const u={fid:t,authVersion:Cd,appId:n.appId,sdkVersion:Pd},d={method:"POST",headers:a,body:JSON.stringify(u)},p=yield Od(()=>fetch(s,d));if(p.ok){const v=yield p.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:Vd(v.authToken)}}else throw yield Nd("Create Installation",p)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=/^[cdef][\w-]{21}$/,fo="";function YT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=JT(n);return QT.test(t)?t:fo}catch(n){return fo}}function JT(n){return KT(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=new Map;function Fd(n,e){const t=Zi(n);Ud(t,e),XT(t,e)}function Ud(n,e){const t=Ld.get(n);if(t)for(const r of t)r(e)}function XT(n,e){const t=ZT();t&&t.postMessage({key:n,fid:e}),eI()}let Ht=null;function ZT(){return!Ht&&"BroadcastChannel"in self&&(Ht=new BroadcastChannel("[Firebase] FID Change"),Ht.onmessage=n=>{Ud(n.data.key,n.data.fid)}),Ht}function eI(){Ld.size===0&&Ht&&(Ht.close(),Ht=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="firebase-installations-database",nI=1,Xt="firebase-installations-store";let Ms=null;function aa(){return Ms||(Ms=uu(tI,nI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Xt)}}})),Ms}function Vi(n,e){return m(this,null,function*(){const t=Zi(n),i=(yield aa()).transaction(Xt,"readwrite"),s=i.objectStore(Xt),a=yield s.get(t);return yield s.put(e,t),yield i.done,(!a||a.fid!==e.fid)&&Fd(n,e.fid),e})}function $d(n){return m(this,null,function*(){const e=Zi(n),r=(yield aa()).transaction(Xt,"readwrite");yield r.objectStore(Xt).delete(e),yield r.done})}function es(n,e){return m(this,null,function*(){const t=Zi(n),i=(yield aa()).transaction(Xt,"readwrite"),s=i.objectStore(Xt),a=yield s.get(t),c=e(a);return c===void 0?yield s.delete(t):yield s.put(c,t),yield i.done,c&&(!a||a.fid!==c.fid)&&Fd(n,c.fid),c})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n){return m(this,null,function*(){let e;const t=yield es(n.appConfig,r=>{const i=rI(r),s=iI(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===fo?{installationEntry:yield e}:{installationEntry:t,registrationPromise:e}})}function rI(n){const e=n||{fid:YT(),registrationStatus:0};return jd(e)}function iI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Jt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=sI(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:oI(n)}:{installationEntry:e}}function sI(n,e){return m(this,null,function*(){try{const t=yield GT(n,e);return Vi(n.appConfig,t)}catch(t){throw kd(t)&&t.customData.serverCode===409?yield $d(n.appConfig):yield Vi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}})}function oI(n){return m(this,null,function*(){let e=yield Ul(n.appConfig);for(;e.registrationStatus===1;)yield Md(100),e=yield Ul(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=yield ca(n);return r||t}return e})}function Ul(n){return es(n,e=>{if(!e)throw Jt.create("installation-not-found");return jd(e)})}function jd(n){return aI(n)?{fid:n.fid,registrationStatus:0}:n}function aI(n){return n.registrationStatus===1&&n.registrationTime+Rd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(r,i){return m(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},t){const s=lI(n,t),a=zT(n,t),c=e.getImmediate({optional:!0});if(c){const v=yield c.getHeartbeatsHeader();v&&a.append("x-firebase-client",v)}const u={installation:{sdkVersion:Pd,appId:n.appId}},d={method:"POST",headers:a,body:JSON.stringify(u)},p=yield Od(()=>fetch(s,d));if(p.ok){const v=yield p.json();return Vd(v)}else throw yield Nd("Generate Auth Token",p)})}function lI(n,{fid:e}){return`${Dd(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n,e=!1){return m(this,null,function*(){let t;const r=yield es(n.appConfig,s=>{if(!Bd(s))throw Jt.create("not-registered");const a=s.authToken;if(!e&&dI(a))return s;if(a.requestStatus===1)return t=uI(n,e),s;{if(!navigator.onLine)throw Jt.create("app-offline");const c=pI(s);return t=hI(n,c),c}});return t?yield t:r.authToken})}function uI(n,e){return m(this,null,function*(){let t=yield $l(n.appConfig);for(;t.authToken.requestStatus===1;)yield Md(100),t=yield $l(n.appConfig);const r=t.authToken;return r.requestStatus===0?la(n,e):r})}function $l(n){return es(n,e=>{if(!Bd(e))throw Jt.create("not-registered");const t=e.authToken;return gI(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function hI(n,e){return m(this,null,function*(){try{const t=yield cI(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return yield Vi(n.appConfig,r),t}catch(t){if(kd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))yield $d(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});yield Vi(n.appConfig,r)}throw t}})}function Bd(n){return n!==void 0&&n.registrationStatus===2}function dI(n){return n.requestStatus===2&&!fI(n)}function fI(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+$T}function pI(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function gI(n){return n.requestStatus===1&&n.requestTime+Rd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n){return m(this,null,function*(){const e=n,{installationEntry:t,registrationPromise:r}=yield ca(e);return r?r.catch(console.error):la(e).catch(console.error),t.fid})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(n,e=!1){return m(this,null,function*(){const t=n;return yield yI(t),(yield la(t,e)).token})}function yI(n){return m(this,null,function*(){const{registrationPromise:e}=yield ca(n);e&&(yield e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(n){if(!n||!n.options)throw Ls("App Configuration");if(!n.name)throw Ls("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ls(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ls(n){return Jt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="installations",TI="installations-internal",II=n=>{const e=n.getProvider("app").getImmediate(),t=vI(e),r=en(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},EI=n=>{const e=n.getProvider("app").getImmediate(),t=en(e,qd).getImmediate();return{getId:()=>mI(t),getToken:i=>_I(t,i)}};function wI(){tt(new He(qd,II,"PUBLIC")),tt(new He(TI,EI,"PRIVATE"))}wI();Be(Sd,oa);Be(Sd,oa,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="analytics",AI="firebase_id",bI="origin",SI=60*1e3,RI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ua="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new Oi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$e=new Zt("analytics","Analytics",PI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(n){if(!n.startsWith(ua)){const e=$e.create("invalid-gtag-resource",{gtagURL:n});return xe.warn(e.message),""}return n}function zd(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function kI(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function DI(n,e){const t=kI("firebase-js-sdk-policy",{createScriptURL:CI}),r=document.createElement("script"),i=`${ua}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function VI(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}function NI(n,e,t,r,i,s){return m(this,null,function*(){const a=r[i];try{if(a)yield e[a];else{const u=(yield zd(t)).find(d=>d.measurementId===i);u&&(yield e[u.appId])}}catch(c){xe.error(c)}n("config",i,s)})}function xI(n,e,t,r,i){return m(this,null,function*(){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=yield zd(t);for(const u of a){const d=c.find(v=>v.measurementId===u),p=d&&e[d.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),yield Promise.all(s),n("event",r,i||{})}catch(s){xe.error(s)}})}function OI(n,e,t,r){function i(s,...a){return m(this,null,function*(){try{if(s==="event"){const[c,u]=a;yield xI(n,e,t,c,u)}else if(s==="config"){const[c,u]=a;yield NI(n,e,t,r,c,u)}else if(s==="consent"){const[c,u]=a;n("consent",c,u)}else if(s==="get"){const[c,u,d]=a;n("get",c,u,d)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){xe.error(c)}})}return i}function MI(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=OI(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function LI(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ua)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=30,UI=1e3;class $I{constructor(e={},t=UI){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Hd=new $I;function jI(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}function BI(n){return m(this,null,function*(){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:jI(r)},s=RI.replace("{app-id}",t),a=yield fetch(s,i);if(a.status!==200&&a.status!==304){let c="";try{const u=yield a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch(u){}throw $e.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()})}function qI(r){return m(this,arguments,function*(n,e=Hd,t){const{appId:i,apiKey:s,measurementId:a}=n.options;if(!i)throw $e.create("no-app-id");if(!s){if(a)return{measurementId:a,appId:i};throw $e.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new WI;return setTimeout(()=>m(this,null,function*(){u.abort()}),SI),Wd({appId:i,apiKey:s,measurementId:a},c,u,e)})}function Wd(s,a,c){return m(this,arguments,function*(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Hd){var u;const{appId:d,measurementId:p}=n;try{yield zI(r,e)}catch(v){if(p)return xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${v==null?void 0:v.message}]`),{appId:d,measurementId:p};throw v}try{const v=yield BI(n);return i.deleteThrottleMetadata(d),v}catch(v){const E=v;if(!HI(E)){if(i.deleteThrottleMetadata(d),p)return xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${E==null?void 0:E.message}]`),{appId:d,measurementId:p};throw v}const R=Number((u=E==null?void 0:E.customData)===null||u===void 0?void 0:u.httpStatus)===503?gc(t,i.intervalMillis,FI):gc(t,i.intervalMillis),D={throttleEndTimeMillis:Date.now()+R,backoffCount:t+1};return i.setThrottleMetadata(d,D),xe.debug(`Calling attemptFetch again in ${R} millis`),Wd(n,D,r,i)}})}function zI(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r($e.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HI(n){if(!(n instanceof Ge)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class WI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}function GI(n,e,t,r,i){return m(this,null,function*(){if(i&&i.global){n("event",t,r);return}else{const s=yield e,a=Object.assign(Object.assign({},r),{send_to:s});n("event",t,a)}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(){return m(this,null,function*(){if(ou())try{yield au()}catch(n){return xe.warn($e.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return xe.warn($e.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0})}function QI(n,e,t,r,i,s,a){return m(this,null,function*(){var c;const u=qI(n);u.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&xe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>xe.error(R)),e.push(u);const d=KI().then(R=>{if(R)return r.getId()}),[p,v]=yield Promise.all([u,d]);LI(s)||DI(s,p.measurementId),i("js",new Date);const E=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return E[bI]="firebase",E.update=!0,v!=null&&(E[AI]=v),i("config",p.measurementId,E),p.measurementId})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.app=e}_delete(){return delete hr[this.app.options.appId],Promise.resolve()}}let hr={},jl=[];const Bl={};let Fs="dataLayer",JI="gtag",ql,Gd,zl=!1;function XI(){const n=[];if(su()&&n.push("This is a browser extension environment."),ap()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=$e.create("invalid-analytics-context",{errorInfo:e});xe.warn(t.message)}}function ZI(n,e,t){XI();const r=n.options.appId;if(!r)throw $e.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $e.create("no-api-key");if(hr[r]!=null)throw $e.create("already-exists",{id:r});if(!zl){VI(Fs);const{wrappedGtag:s,gtagCore:a}=MI(hr,jl,Bl,Fs,JI);Gd=s,ql=a,zl=!0}return hr[r]=QI(n,jl,Bl,e,ql,Fs,t),new YI(n)}function eE(n=_o()){n=Oe(n);const e=en(n,Ni);return e.isInitialized()?e.getImmediate():tE(n)}function tE(n,e={}){const t=en(n,Ni);if(t.isInitialized()){const i=t.getImmediate();if(dr(e,t.getOptions()))return i;throw $e.create("already-initialized")}return t.initialize({options:e})}function nE(n,e,t,r){n=Oe(n),GI(Gd,hr[n.app.options.appId],e,t,r).catch(i=>xe.error(i))}const Hl="@firebase/analytics",Wl="0.10.11";function rE(){tt(new He(Ni,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ZI(r,i,t)},"PUBLIC")),tt(new He("analytics-internal",n,"PRIVATE")),Be(Hl,Wl),Be(Hl,Wl,"esm2017");function n(e){try{const t=e.getProvider(Ni).getImmediate();return{logEvent:(r,i,s)=>nE(t,r,i,s)}}catch(t){throw $e.create("interop-component-reg-failed",{reason:t})}}}rE();const iE={apiKey:"AIzaSyAPvgVEb4mQT_ztsZG7MVQ8tgj1VOlA4iU",authDomain:"widget-v2-2dee9.firebaseapp.com",projectId:"widget-v2-2dee9",storageBucket:"widget-v2-2dee9.firebasestorage.app",messagingSenderId:"634987876869",appId:"1:634987876869:web:59ce3fa9e7e5819350826c",measurementId:"G-1B6B44V6FR"},ha=hu(iE),qt=Ty(ha);LT(ha);typeof window!="undefined"&&eE(ha);const sE=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];class po{static getScheduleForDate(e,t){return m(this,null,function*(){const r=e.schedule,i=this.findException(e,t);if(i)return i.type==="holiday"?{isWorking:!1,timeSlots:[]}:{isWorking:!0,timeSlots:i.timeSlots};const s=sE[t.getDay()];if(!r.weeklySchedule||!r.weeklySchedule[s])return{isWorking:!1,timeSlots:[]};const a=r.weeklySchedule[s];if(!a.isWorking)return a;const c=this.formatDate(t),u=gn(qt,"bookings"),d=co(u,yn("employeeId","==",e.id),yn("date","==",c),yn("status","in",["pending","confirmed"])),v=(yield ir(d)).docs.map(R=>R.data()),E=a.timeSlots.filter(R=>{const D=this.timeToMinutes(R.start),x=this.timeToMinutes(R.end);return!v.some(P=>{const F=this.timeToMinutes(P.timeSlot.start),H=F+P.totalDuration;return!(x<=F||D>=H)})});return{isWorking:a.isWorking,timeSlots:E}})}static isAvailableOnDate(e,t){if(!e.active)return!1;const r=this.getScheduleForDate(e,t);return r?r.isWorking&&r.timeSlots.length>0:!1}static findException(e,t){const r=e.schedule;return r.exceptions&&r.exceptions.find(i=>{const s=new Date(i.startDate),a=new Date(i.endDate),c=new Date(t);return c.setHours(0,0,0,0),c>=s&&c<=a})||null}static formatDate(e){return e.toISOString().split("T")[0]}static timeToMinutes(e){const[t,r]=e.split(":").map(Number);return t*60+r}static getNextAvailableDate(e,t){let i=new Date(t);for(let s=0;s<60;s++){if(this.isAvailableOnDate(e,i))return i;i.setDate(i.getDate()+1)}return null}static shouldDisableDate(e,t){if(!e)return!1;const r=new Date;return r.setHours(0,0,0,0),t<r?!0:!this.isAvailableOnDate(e,t)}}class Gt{static preloadAvailability(e,t,r=3){return m(this,null,function*(){if(this.isPreloading)return this.preloadPromise;this.isPreloading=!0,this.preloadPromise=this.doPreload(e,t,r),yield this.preloadPromise,this.isPreloading=!1})}static doPreload(e,t,r){return m(this,null,function*(){var a;const i=new Date(t);i.setMonth(i.getMonth()+r);const s=new Date(t);for(s.setHours(0,0,0,0),this.cache[e.id]||(this.cache[e.id]={});s<=i;){const c=s.toISOString().split("T")[0];if(this.cache[e.id][c]===void 0){const u=yield po.getScheduleForDate(e,new Date(s));this.cache[e.id][c]=(u==null?void 0:u.isWorking)&&((a=u==null?void 0:u.timeSlots.length)!=null?a:0)>0}s.setDate(s.getDate()+1)}})}static isDateAvailable(e,t){const r=t.toISOString().split("T")[0];return!this.cache[e]||this.cache[e][r]===void 0?null:this.cache[e][r]}static clearCache(){this.cache={}}}Zn(Gt,"cache",{}),Zn(Gt,"isPreloading",!1),Zn(Gt,"preloadPromise",null);const oE=ee.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
`,aE=ee.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`,cE=ee.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid ${M.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,lE=ee.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,uE=ee.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Gl=ee.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  padding: 4px 8px;
  color: ${M.colors.text};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    color: ${M.colors.primary};
  }
`,hE=ee.span`
  font-size: ${M.typography.title.size};
  font-weight: ${M.typography.title.weight};
  color: ${M.colors.title};
  min-width: 180px;
  text-align: center;
`,dE=ee.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: ${M.colors.border};
  border: 2px solid ${M.colors.containerBorder};
  border-radius: ${M.borderRadius.default};
  overflow: hidden;
`,fE=ee.div`
  background-color: white;
  padding: 12px 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${M.colors.text};
`,Kl=ee.button`
  background-color: white;
  border: none;
  padding: 12px 8px;
  text-align: center;
  cursor: pointer;
  position: relative;
  color: ${n=>n.$isDisabled?"#ccc":M.colors.text};
  font-weight: ${n=>n.$isToday||n.$isSelected?"600":"normal"};
  
  ${n=>n.$isToday&&`
    &:after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${M.colors.button};
    }
  `}
  
  ${n=>!n.$isDisabled&&`
    &:hover {
      background-color: #f5f5f5;
    }
  `}
  
  ${n=>n.$isSelected&&`
    background-color: ${M.colors.button} !important;
    color: white;
  `}
  
  ${n=>n.$isDisabled&&`
    cursor: not-allowed;
  `}
`,pE=ee.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`,gE=ee.button`
  padding: 12px;
  border: 2px solid ${n=>n.$isSelected?M.colors.button:M.colors.containerBorder};
  border-radius: ${M.borderRadius.default};
  background-color: ${n=>n.$isSelected?M.colors.button:"white"};
  color: ${n=>n.$isSelected?"white":M.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${M.colors.button};
    background-color: ${n=>n.$isSelected?M.colors.button:"#f5f5f5"};
  }
`,mE=({selectedEmployee:n,selectedServices:e,onDateTimeSelect:t,isLoading:r=!1})=>{const[i,s]=J.useState(null),[a,c]=J.useState(null),[u,d]=J.useState([]),[p,v]=J.useState(new Set);J.useEffect(()=>{if(n){const T=po.getNextAvailableDate(n,new Date);T&&s(T)}},[n]);const[E,R]=J.useState(new Date),D=new Date,x=new Date(D.getFullYear(),D.getMonth(),D.getDate()),P=new Date(E.getFullYear(),E.getMonth()+1,0).getDate();let F=new Date(E.getFullYear(),E.getMonth(),1).getDay();F=F===0?6:F-1;const H=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],W=()=>{const T=new Date(E);T.setMonth(T.getMonth()-1);const A=new Date(T.getFullYear(),T.getMonth(),1),_=new Date(D.getFullYear(),D.getMonth(),1);A>=_&&R(T)},ie=()=>{const T=new Date(E);T.setMonth(T.getMonth()+1),R(T)},we=()=>m(Ye,null,function*(){if(!i||!n)return[];const T=yield po.getScheduleForDate(n,i);if(!T||!T.isWorking||!T.timeSlots.length)return[];const A=[],_=new Date,_e=i.getDate()===_.getDate()&&i.getMonth()===_.getMonth()&&i.getFullYear()===_.getFullYear();for(const Me of T.timeSlots){const[$,te]=Me.start.split(":").map(Number),[le,ye]=Me.end.split(":").map(Number);if(_e){const Le=_.getHours(),ge=_.getMinutes();if($<Le||$===Le&&te<=ge)continue}A.push(Me.start);let Ot=$,Mt=te+15;for(;Ot<le||Ot===le&&Mt<ye;){const Le=`${Ot.toString().padStart(2,"0")}:${Mt.toString().padStart(2,"0")}`;A.push(Le),Mt+=15,Mt>=60&&(Ot+=1,Mt=0)}}return A.sort()}),[ne,w]=J.useState([]);J.useEffect(()=>{m(Ye,null,function*(){const A=yield we();w(A)})},[i,n]);const g=T=>{const A=new Date(E.getFullYear(),E.getMonth(),T);s(A),c(null),t(A,null)},y=T=>{c(T),t(i,T)},I=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];return N.jsxs(oE,{children:[r&&N.jsx(aE,{children:N.jsx(cE,{})}),N.jsx(lE,{children:N.jsxs(uE,{children:[N.jsx(Gl,{onClick:W,disabled:E.getMonth()===D.getMonth()&&E.getFullYear()===D.getFullYear(),children:"‹"}),N.jsxs(hE,{children:[H[E.getMonth()]," ",E.getFullYear()]}),N.jsx(Gl,{onClick:ie,children:"›"})]})}),N.jsxs(dE,{children:[I.map(T=>N.jsx(fE,{children:T},T)),Array.from({length:F}).map((T,A)=>N.jsx(Kl,{disabled:!0,$isDisabled:!0},`empty-${A}`)),Array.from({length:P}).map((T,A)=>{const _=A+1,_e=new Date(E.getFullYear(),E.getMonth(),_),Me=_===D.getDate()&&E.getMonth()===D.getMonth()&&E.getFullYear()===D.getFullYear(),$=(i==null?void 0:i.getDate())===_&&(i==null?void 0:i.getMonth())===E.getMonth()&&(i==null?void 0:i.getFullYear())===E.getFullYear(),te=_e<x;_e.toISOString().split("T")[0];const le=n?Gt.isDateAvailable(n.id,_e):null,ye=te||!n||le===!1;return N.jsx(Kl,{onClick:()=>!ye&&g(_),$isToday:Me,$isSelected:$,$isDisabled:ye,disabled:ye,children:_},_)})]}),i&&ne.length>0&&N.jsx(pE,{children:ne.map(T=>N.jsx(gE,{onClick:()=>y(T),$isSelected:a===T,children:T},T))}),i&&ne.length===0&&N.jsx("div",{style:{color:M.colors.text,textAlign:"center",padding:"16px"},children:"No hay horarios disponibles para esta fecha."})]})},_E=({selectedEmployee:n,selectedServices:e,onValidityChange:t,onDateSelect:r,onTimeSelect:i,isLoadingAvailability:s=!1})=>{const a=(c,u)=>{const d=c!==null&&u!==null;if(t(d),d&&c&&u){const p=c.toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric"});r(p),i(u)}};return N.jsx(mE,{onDateTimeSelect:a,selectedEmployee:n,selectedServices:e,isLoading:s})};class Kd{getServiceCategories(){return m(this,null,function*(){const e=gn(qt,"serviceCategories");return(yield ir(e)).docs.map(r=>yt({id:r.id},r.data()))})}getServices(e){return m(this,null,function*(){const t=gn(qt,"services"),r=e?co(t,yn("categoryId","==",e)):t;return(yield ir(r)).docs.map(s=>yt({id:s.id},s.data()))})}getEmployees(e){return m(this,null,function*(){const t=gn(qt,"employees"),i=(yield ir(t)).docs.map(s=>yt({id:s.id},s.data()));return e?i.filter(s=>s.services.includes(e)):i})}getAvailability(e){return m(this,null,function*(){const t=yield Ly(Lh(qt,"employees",e.employeeId));if(!t.exists())return[];const r=t.data(),i=new Date(e.date).getDay().toString(),s=r.schedule[i];if(!s)return[];const a=gn(qt,"bookings"),c=co(a,yn("employeeId","==",e.employeeId),yn("date","==",e.date)),d=(yield ir(c)).docs.map(F=>F.data().time),p=[],[v,E]=s.start.split(":").map(Number),[R,D]=s.end.split(":").map(Number);let x=v,P=E;for(;x<R||x===R&&P<D;){const F=`${x.toString().padStart(2,"0")}:${P.toString().padStart(2,"0")}`;d.includes(F)||p.push(F),P+=30,P>=60&&(x+=1,P=0)}return p})}calculateEndTime(e,t){const[r,i]=e.split(":").map(Number),s=r*60+i+t,a=Math.floor(s/60),c=s%60;return`${a.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`}createBooking(e){return m(this,null,function*(){const t=e.services.reduce((u,d)=>u+d.duration,0),r=e.services.reduce((u,d)=>u+d.price,0),i=this.calculateEndTime(e.time,t),a={services:e.services.map(u=>({id:u.id,name:u.name,duration:u.duration,price:u.price})),employeeId:e.employeeId,employeeName:e.employeeName,clientInfo:e.clientInfo,date:e.date,timeSlot:{start:e.time,end:i},totalDuration:t,totalPrice:r,status:"pending",createdAt:he.now(),updatedAt:he.now()},c=yield Fy(gn(qt,"bookings"),a);return yt({id:c.id},a)})}}const yE=ee.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 16px;
  overscroll-behavior: none;
  touch-action: none;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 480px) {
    padding: 0;
    align-items: flex-start;
  }
`,vE=ee.div.attrs({id:"popup-content"})`
  background: white;
  padding: 32px;
  border: 2px solid ${M.colors.containerBorder};
  border-radius: ${M.borderRadius.default};
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0);
  will-change: transform;

  @media (max-width: 768px) {
    padding: 24px;
    width: 95%;
    max-height: 95vh;
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
    border: none;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
  }
`,TE=ee.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  
  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;
    font-size: 20px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  align-items: center;
  justify-content: center;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`,IE=ee.h2`
  margin-bottom: 24px;
  color: ${M.colors.title};
  font-size: ${M.typography.title.size};
  font-weight: ${M.typography.title.weight};
  text-transform: ${M.typography.title.transform};
  font-family: ${M.typography.fontFamily};
`,Us=ee.button`
  background-color: ${M.colors.button};
  color: ${M.colors.buttonText};
  padding: 16px 32px;
  border: none;
  border-radius: ${M.borderRadius.button};
  font-size: ${M.typography.button.size};
  font-weight: ${M.typography.button.weight};
  text-transform: ${M.typography.button.transform};
  font-family: ${M.typography.fontFamily};
  width: 100%;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,EE=ee.div.attrs({id:"content-scroll"})`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;
  margin-right: -8px;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    
    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`,wE=({onClose:n,initialCategories:e,initialEmployees:t})=>{const[r,i]=J.useState(!1);J.useEffect(()=>{m(Ye,null,function*(){const te=new Date,le=t.filter(ye=>ye.active);for(const ye of le)yield Gt.preloadAvailability(ye,te)})},[t]);const[s,a]=J.useState([]),[c,u]=J.useState(null);J.useEffect(()=>{if(window.innerWidth<=480){const $=window.scrollY;return document.documentElement.style.setProperty("overflow","hidden","important"),document.body.style.setProperty("overflow","hidden","important"),document.body.style.setProperty("position","fixed","important"),document.body.style.setProperty("top",`-${$}px`,"important"),document.body.style.setProperty("width","100%","important"),document.body.style.setProperty("touch-action","none","important"),()=>{document.documentElement.style.removeProperty("overflow"),document.body.style.removeProperty("overflow"),document.body.style.removeProperty("position"),document.body.style.removeProperty("top"),document.body.style.removeProperty("width"),document.body.style.removeProperty("touch-action"),window.scrollTo(0,$)}}},[]);const[d,p]=J.useState(!1),[v,E]=J.useState(!1),[R,D]=J.useState(null),x=J.useRef(null),[P,F]=J.useState("services"),[H,W]=J.useState(""),[ie,we]=J.useState(""),[ne,w]=J.useState("");J.useEffect(()=>{const $=te=>{te.key==="Escape"&&n()};return document.addEventListener("keydown",$),()=>document.removeEventListener("keydown",$)},[n]),J.useEffect(()=>{const $=document.getElementById("content-scroll");$&&($.scrollTop=0)},[P]),J.useEffect(()=>{if(!r||!c)return;m(Ye,null,function*(){try{yield Gt.preloadAvailability(c,new Date)}finally{i(!1)}})},[c,r]);const g=$=>{a($)},y=new Kd,I=[...e].sort(($,te)=>$.order===void 0?1:te.order===void 0?-1:$.order-te.order).map($=>Qr(yt({},$),{services:$.services?[...$.services].sort((te,le)=>te.order===void 0?1:le.order===void 0?-1:te.order-le.order):[]})),[T]=J.useState(I),[A]=J.useState(t),_=()=>m(Ye,null,function*(){if(P==="services"){if(s.length===0)return;const te=A.filter(le=>le.active&&s.every(ye=>le.services.includes(ye.id)));console.log("Available employees:",te),te.length===1?(u(te[0]),F("datetime")):te.length>1?F("employee"):F("datetime")}else P==="employee"&&c?F("datetime"):P==="datetime"&&d&&F("client-info");const $=document.getElementById("popup-content");$&&setTimeout(()=>$.scrollTo({top:0,behavior:"smooth"}),100)}),_e=()=>{P==="client-info"?F("datetime"):P==="datetime"?A.filter(le=>le.active&&s.every(ye=>le.services.includes(ye.id))).length<=1?F("services"):F("employee"):P==="employee"&&F("services");const $=document.getElementById("popup-content");$&&setTimeout(()=>$.scrollTo({top:0,behavior:"smooth"}),100)},Me=()=>m(Ye,null,function*(){if(s.length!==0&&!(P==="client-info"&&(!x.current||(x.current(!0),!v)))&&v&&R&&s.length>0)try{const $=yield y.createBooking({services:s,employeeId:(c==null?void 0:c.id)||"",employeeName:(c==null?void 0:c.name)||"No asignado",clientInfo:R,date:H,time:ie});w($.id),console.log("Booking created:",$),F("confirmation")}catch($){console.error("Error creating booking:",$)}});return Jl.createPortal(N.jsx(yE,{onClick:$=>{$.target===$.currentTarget&&n()},children:N.jsxs(vE,{onClick:$=>$.stopPropagation(),children:[N.jsx(TE,{onClick:n,children:"×"}),N.jsxs(IE,{children:[P==="services"&&"Selecciona los Servicios",P==="employee"&&"Elige tu Profesional",P==="datetime"&&"Selecciona Fecha y Hora",P==="client-info"&&"Tus Datos",P==="confirmation"&&"¡Reserva Confirmada!"]}),N.jsxs(EE,{children:[P==="services"&&N.jsx(Lf,{categories:T,onServiceSelect:g,selectedServices:s}),P==="employee"&&N.jsx(Ff,{employees:A,selectedServices:s,selectedEmployee:c,onEmployeeSelect:u}),P==="datetime"&&N.jsxs(N.Fragment,{children:[c?N.jsxs("div",{style:{marginBottom:"24px"},children:[N.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:M.typography.title.size,fontWeight:M.typography.title.weight,color:M.colors.text},children:c.name}),N.jsx("p",{style:{margin:0,fontSize:M.typography.text.size,color:M.colors.text,opacity:.8},children:c.role})]}):N.jsx("div",{style:{marginBottom:"24px",padding:"12px",backgroundColor:"#fff3cd",border:"1px solid #ffeeba",borderRadius:"4px",color:"#856404"},children:N.jsx("p",{style:{margin:0},children:"No hay profesionales disponibles en este momento para los servicios seleccionados. Se te asignará un profesional después de la reserva."})}),N.jsx(_E,{onValidityChange:p,onDateSelect:W,onTimeSelect:we,selectedEmployee:c,selectedServices:s,isLoadingAvailability:r})]}),P==="client-info"&&N.jsx(Uf,{onFormValidityChange:($,te)=>{E($),te&&D(te)},onValidateRef:$=>{x.current=$}}),P==="confirmation"&&R&&N.jsx($f,{bookingNumber:ne,selectedServices:s,clientInfo:R,appointmentTime:ie,appointmentDate:H})]}),P!=="confirmation"&&N.jsxs("div",{style:{display:"flex",gap:"16px",marginTop:"24px"},children:[P!=="services"&&N.jsx(Us,{onClick:_e,style:{flex:1,backgroundColor:"#f5f5f5",color:"black"},children:"Volver"}),P==="client-info"?N.jsx(Us,{onClick:()=>{Me().catch($=>{console.error("Error in booking:",$)})},style:{flex:1},children:"Reservar Ahora"}):N.jsx(Us,{disabled:P==="services"&&s.length===0||P==="employee"&&!c||P==="datetime"&&!d,onClick:_,style:{flex:1},children:"Siguiente"})]})]})}),document.body)},AE=ee.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: ${M.typography.fontFamily};
`,$s=ee.section`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 2px solid ${M.colors.border};
  border-radius: ${M.borderRadius.default};
  background: white;
`,ni=ee.h2`
  font-size: ${M.typography.title.size};
  font-weight: ${M.typography.title.weight};
  margin-bottom: 1.5rem;
  color: ${M.colors.title};
  border-bottom: 2px solid ${M.colors.border};
  padding-bottom: 0.5rem;
  text-transform: ${M.typography.title.transform};
`,bE=ee.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,SE=ee.button`
  background-color: ${M.colors.button};
  color: ${M.colors.buttonText};
  padding: 12px 24px;
  border: none;
  border-radius: ${M.borderRadius.button};
  font-size: ${M.typography.button.size};
  font-weight: ${M.typography.button.weight};
  cursor: pointer;
  text-transform: ${M.typography.button.transform};
`,RE=ee.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  font-family: ${M.typography.fontFamily};
`,un=ee.div`
  width: 100px;
  height: 100px;
  background-color: ${n=>n.$color};
  border-radius: ${M.borderRadius.default};
  border: 1px solid ${M.colors.border};
  position: relative;
  
  &:after {
    content: '${n=>n.$name}';
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: ${M.typography.text.size};
    color: ${M.colors.text};
    text-transform: ${M.typography.text.transform};
  }
`,PE=()=>{const[n,e]=J.useState(!1),[t,r]=J.useState([]),[i,s]=J.useState([]),[a,c]=J.useState(!0),u=new Kd;return J.useEffect(()=>{m(Ye,null,function*(){try{const v=(yield u.getServiceCategories()).filter(P=>P.active),E=yield Promise.all(v.map(P=>m(Ye,null,function*(){const H=(yield u.getServices(P.id)).filter(W=>W.active);return Qr(yt({},P),{services:H})})));r(E);const D=(yield u.getEmployees()).filter(P=>P.active);s(D),console.log("Preloading availability data for employees...");const x=new Date;yield Promise.all(D.map(P=>Gt.preloadAvailability(P,x))),console.log("Finished preloading availability data")}catch(p){console.error("Error loading initial data:",p)}finally{c(!1)}})},[]),N.jsxs(AE,{children:[N.jsx(ni,{children:"Booking Widget Development"}),N.jsxs($s,{children:[N.jsx(ni,{children:"Color Palette"}),N.jsxs(RE,{children:[N.jsx(un,{$color:M.colors.border,$name:"Border Color"}),N.jsx(un,{$color:M.colors.title,$name:"Title Color"}),N.jsx(un,{$color:M.colors.text,$name:"Text Color"}),N.jsx(un,{$color:M.colors.button,$name:"Button Color"}),N.jsx(un,{$color:M.colors.buttonText,$name:"Button Text"}),N.jsx(un,{$color:M.colors.icon,$name:"Icon Color"})]})]}),N.jsxs($s,{children:[N.jsx(ni,{children:"Widget Demo"}),N.jsx(bE,{children:N.jsxs("div",{children:[N.jsx("h3",{children:"Book a Service"}),N.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Click the button below to open the booking widget"}),N.jsx(SE,{onClick:()=>e(!0),disabled:a,style:{opacity:a?.7:1},children:a?"Loading...":"Book Now"})]})}),n&&N.jsx(wE,{onClose:()=>e(!1),initialCategories:t,initialEmployees:i})]}),N.jsxs($s,{children:[N.jsx(ni,{children:"Development Notes"}),N.jsxs("ul",{style:{lineHeight:"1.6",color:"#666"},children:[N.jsx("li",{children:"The widget uses a modern, clean design with a pink color scheme"}),N.jsx("li",{children:"Services are organized by categories (e.g., Waxing, Manicure, Pedicure)"}),N.jsx("li",{children:"Each service shows its name, duration, and price"}),N.jsx("li",{children:"The interface is responsive and works on all screen sizes"}),N.jsx("li",{children:"Press ESC or click outside to close the popup"})]})]})]})},CE=ee.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px;
  color: #000000;
`,kE=ee.h1`
  font-size: 24px;
  color: #000000;
  margin-bottom: 20px;
  border-bottom: 2px solid #F5BBC9;
  padding-bottom: 10px;
`,DE=ee.div`
  background-color: #F5BBC9;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  color: #000000;
`;function VE(){return N.jsxs(N.Fragment,{children:[N.jsx(zf,{}),N.jsxs(CE,{children:[N.jsx(kE,{children:"Booking Widget Development"}),N.jsxs(DE,{children:["If you can see this box with pink background, styled-components is working!",N.jsx("br",{}),N.jsx("strong",{children:"Test message - deployed at 13:53 on Feb 23"})]}),N.jsx(PE,{})]})]})}const NE=ee.div`
  padding: 20px;
  margin: 20px;
  border: 2px solid #ff4444;
  background-color: #fff;
  border-radius: 4px;
`,xE=ee.pre`
  margin-top: 10px;
  padding: 10px;
  background-color: #f8f8f8;
  overflow-x: auto;
`;class OE extends J.Component{constructor(){super(...arguments);Zn(this,"state",{hasError:!1,error:null,errorInfo:null})}static getDerivedStateFromError(t){return{hasError:!0,error:t,errorInfo:null}}componentDidCatch(t,r){console.error("Uncaught error:",t,r),this.setState({error:t,errorInfo:r})}render(){return this.state.hasError?N.jsxs(NE,{children:[N.jsx("h2",{children:"Something went wrong 🔧"}),N.jsxs(xE,{children:[this.state.error&&this.state.error.toString(),this.state.errorInfo&&this.state.errorInfo.componentStack]})]}):this.props.children}}console.log("Starting application initialization...");var Yl;console.log("React version:",(Yl=Bf)==null?void 0:Yl.version);console.log("Environment:","production");function Ql(){console.log("Looking for root element...");const n=document.getElementById("root");if(!n)throw new Error("Root element not found! This is a critical error.");for(console.log("Root element found, clearing any existing content...");n.firstChild;)n.removeChild(n.firstChild);console.log("Creating React root...");const e=Xl(n);console.log("Rendering React application..."),e.render(N.jsx(J.StrictMode,{children:N.jsx(OE,{children:N.jsx(qf,{theme:M,children:N.jsx(VE,{})})})})),console.log("Initial render completed.")}document.readyState==="loading"?(console.log("Document still loading, waiting for DOMContentLoaded..."),document.addEventListener("DOMContentLoaded",()=>{console.log("DOMContentLoaded fired, initializing app..."),Ql()})):(console.log("Document already loaded, initializing app immediately..."),Ql());window.addEventListener("error",n=>{console.error("Uncaught error:",n.error)});window.addEventListener("unhandledrejection",n=>{console.error("Unhandled promise rejection:",n.reason)})});export default ME();
