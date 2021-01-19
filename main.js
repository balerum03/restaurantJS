(()=>{"use strict";var e={890:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"body {\n  background-color: #5D4037;\n  color: #F57C00;\n  font-family: cursive;\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n\n.nav {\n  max-width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding-top: 3rem;\n  align-items: center;\n}\n\n#logo {\n  max-width: 5rem;\n}\n\n.mainTextDiv{\n  padding: 1rem 0 0 3rem;\n}\n\n.textIn {\n  max-width: 50%;\n  padding-top: 1rem;\n}\n\n.navItem {\n  padding: 1rem 2rem;\n  border-radius: 10%;\n}\n\n.navItem:hover {\n  background-color: #8D6E63; \n}\n",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var c=e[i],d=n.base?c[0]+n.base:c[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var u=a(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:s,updater:h(p,n),references:1}),r.push(s)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function h(e,n){var t,r,i;if(n.singleton){var o=f++;t=m||(m=d(n)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=d(n),r=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var d=c(e,n),l=0;l<t.length;l++){var s=a(t[l]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}t=d}}}},243:(e,n,t)=>{e.exports=t.p+"b246d8803fd973b4fb1b.png"}},n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(243);const n=()=>{const n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("span"),i=document.createElement("span"),o=document.createElement("span"),a=document.createTextNode("Menu"),c=document.createTextNode("Galery"),d=document.createTextNode("About us");return r.appendChild(a),i.appendChild(c),o.appendChild(d),t.appendChild((()=>{const n=document.createElement("img");return n.src=e,n.alt="logo",n.id="logo",n.onclick=()=>{window.location.reload()},n})()),n.appendChild(t),n.appendChild(r),n.appendChild(i),n.appendChild(o),r.classList.add("navItem"),i.classList.add("navItem"),o.classList.add("navItem"),t.classList.add("logoDiv"),n.classList.add("nav"),n};var r=t(379),i=t.n(r),o=t(890);i()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,(()=>{const e=document.createElement("div"),t=document.getElementById("content"),r=document.createElement("div"),i=document.createElement("h1"),o=document.createElement("p"),a=document.createElement("div");o.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",i.innerHTML="Welcome to my restaurant",a.appendChild(i),a.appendChild(o),a.classList.add("mainTextDiv"),e.appendChild(n()),t.appendChild(r),r.appendChild(e),r.appendChild(a),o.classList.add("textIn")})()})()})();