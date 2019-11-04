!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).GSTC=e()}(this,(function(){"use strict";
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const t=new WeakMap,e=e=>(...n)=>{const s=e(...n);return t.set(s,!0),s},n=e=>"function"==typeof e&&t.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,n=null,s=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,s),e=n}},o=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},r={},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${c}`),u="$lit$";class h{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:c,values:{length:h}}=t;for(;a<h;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)p(e[t].name,u)&&s++;for(;s-- >0;){const e=c[a],n=g.exec(e)[2],s=n.toLowerCase()+u,i=t.getAttribute(s);t.removeAttribute(s);const o=i.split(d);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(l)>=0){const s=t.parentNode,i=e.split(d),o=i.length-1;for(let e=0;e<o;e++){let n,o=i[e];if(""===o)n=m();else{const t=g.exec(o);null!==t&&p(t[2],u)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-u.length)+t[3]),n=document.createTextNode(o)}s.insertBefore(n,t),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(m(),t),n.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===l){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(m(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(n.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(l,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const p=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},f=t=>-1!==t.index,m=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class v{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,l=i.nextNode();for(;r<n.length;)if(o=n[r],f(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const b=` ${l} `;class y{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],i=t.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===t.indexOf("--\x3e",i+1);const o=g.exec(t);e+=null===o?t+(n?b:c):t.substr(0,o.index)+o[1]+o[2]+u+o[3]+l}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class w extends y{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),i(e,n.firstChild),t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const _=t=>null===t||!("object"==typeof t||"function"==typeof t),$=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(_(t)||!$(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r||_(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=r,t(this)}this.value!==r&&this.committer.commit()}}class M{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}const t=this.__pendingValue;t!==r&&(_(t)?t!==this.value&&this.__commitText(t):t instanceof y?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):$(t)?this.__commitIterable(t):t===a?(this.value=a,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const n=new v(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)void 0===(n=e[s])&&(n=new M(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r}}class T extends x{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends C{}let O=!1;try{const t={get capture(){return O=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class I{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(O?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const D=new class{handleAttributeExpressions(t,e,n,s){const i=e[0];if("."===i){return new T(t,e.slice(1),n).parts}return"@"===i?[new I(t,e.slice(1),s.eventContext)]:"?"===i?[new P(t,e.slice(1),n)]:new x(t,e,n).parts}handleTextExpression(t){return new M(t)}};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */function E(t){let e=L.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},L.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(l);return void 0===(n=e.keyString.get(s))&&(n=new h(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const L=new Map,S=new WeakMap,k=(t,e,n)=>{let s=S.get(e);void 0===s&&(o(e,e.firstChild),S.set(e,s=new M(Object.assign({templateFactory:E},n))),s.appendInto(e)),s.setValue(t),s.commit()};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const R=(t,...e)=>new y(t,e,"html",D),V=(t,...e)=>new w(t,e,"svg",D);
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
var j=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),e={},s("next"),s("throw"),s("return"),e[Symbol.asyncIterator]=function(){return this},e);function s(n){e[n]=t[n]&&function(e){return new Promise((function(s,i){(function(t,e,n,s){Promise.resolve(s).then((function(e){t({value:e,done:n})}),e)})(s,i,(e=t[n](e)).done,e.value)}))}}};const H=e((t,e)=>async n=>{var s,i;if(!(n instanceof M))throw new Error("asyncAppend can only be used in text bindings");if(t===n.value)return;let o;n.value=t;let r=0;try{for(var a,l=j(t);!(a=await l.next()).done;){let s=a.value;if(n.value!==t)break;0===r&&n.clear(),void 0!==e&&(s=e(s,r));let i=n.startNode;void 0!==o&&(i=m(),o.endNode=i,n.endNode.parentNode.insertBefore(i,n.endNode)),(o=new M(n.options)).insertAfterNode(i),o.setValue(s),o.commit(),r++}}catch(t){s={error:t}}finally{try{a&&!a.done&&(i=l.return)&&await i.call(l)}finally{if(s)throw s.error}}});
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */var W=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),e={},s("next"),s("throw"),s("return"),e[Symbol.asyncIterator]=function(){return this},e);function s(n){e[n]=t[n]&&function(e){return new Promise((function(s,i){(function(t,e,n,s){Promise.resolve(s).then((function(e){t({value:e,done:n})}),e)})(s,i,(e=t[n](e)).done,e.value)}))}}};const Y=e((t,e)=>async n=>{var s,i;if(!(n instanceof M))throw new Error("asyncReplace can only be used in text bindings");if(t===n.value)return;const o=new M(n.options);n.value=t;let r=0;try{for(var a,l=W(t);!(a=await l.next()).done;){let s=a.value;if(n.value!==t)break;0===r&&(n.clear(),o.appendIntoPart(n)),void 0!==e&&(s=e(s,r)),o.setValue(s),o.commit(),r++}}catch(t){s={error:t}}finally{try{a&&!a.done&&(i=l.return)&&await i.call(l)}finally{if(s)throw s.error}}}),z=new WeakMap,B=e(t=>e=>{if(!(e instanceof M))throw new Error("cache can only be used in text bindings");let n=z.get(e);void 0===n&&(n=new WeakMap,z.set(e,n));const s=e.value;if(s instanceof v){if(t instanceof y&&s.template===e.options.templateFactory(t))return void e.setValue(t);{let t=n.get(s.template);void 0===t&&(t={instance:s,nodes:document.createDocumentFragment()},n.set(s.template,t)),i(t.nodes,e.startNode.nextSibling,e.endNode)}}if(t instanceof y){const s=e.options.templateFactory(t),i=n.get(s);void 0!==i&&(e.setValue(i.nodes),e.commit(),e.value=i.instance)}e.setValue(t)}),G=new WeakMap,F=e(t=>e=>{if(!(e instanceof C)||e instanceof A||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:n}=e,{element:s}=n;G.has(e)||(s.className=n.strings.join(" "));const{classList:i}=s,o=G.get(e);for(const e in o)e in t||i.remove(e);for(const e in t){const n=t[e];if(!o||n!==o[e]){i[n?"add":"remove"](e)}}G.set(e,t)}),U=new WeakMap,J=e((t,e)=>n=>{const s=U.get(n);if(Array.isArray(t)){if(Array.isArray(s)&&s.length===t.length&&t.every((t,e)=>t===s[e]))return}else if(s===t&&(void 0!==t||U.has(n)))return;n.setValue(e()),U.set(n,Array.isArray(t)?Array.from(t):t)}),q=e(t=>e=>{if(void 0===t&&e instanceof C){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)}),Z=(t,e)=>{const n=t.startNode.parentNode,s=void 0===e?t.endNode:e.startNode,i=n.insertBefore(m(),s);n.insertBefore(m(),s);const o=new M(t.options);return o.insertAfterNode(i),o},X=(t,e)=>(t.setValue(e),t.commit(),t),K=(t,e,n)=>{const s=t.startNode.parentNode,o=n?n.startNode:t.endNode,r=e.endNode.nextSibling;r!==o&&i(s,e.startNode,r,o)},Q=t=>{o(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},tt=(t,e,n)=>{const s=new Map;for(let i=e;i<=n;i++)s.set(t[i],i);return s},et=new WeakMap,nt=new WeakMap,st=e((t,e,n)=>{let s;return void 0===n?n=e:void 0!==e&&(s=e),e=>{if(!(e instanceof M))throw new Error("repeat can only be used in text bindings");const i=et.get(e)||[],o=nt.get(e)||[],r=[],a=[],l=[];let c,d,u=0;for(const e of t)l[u]=s?s(e,u):u,a[u]=n(e,u),u++;let h=0,p=i.length-1,f=0,m=a.length-1;for(;h<=p&&f<=m;)if(null===i[h])h++;else if(null===i[p])p--;else if(o[h]===l[f])r[f]=X(i[h],a[f]),h++,f++;else if(o[p]===l[m])r[m]=X(i[p],a[m]),p--,m--;else if(o[h]===l[m])r[m]=X(i[h],a[m]),K(e,i[h],r[m+1]),h++,m--;else if(o[p]===l[f])r[f]=X(i[p],a[f]),K(e,i[p],i[h]),p--,f++;else if(void 0===c&&(c=tt(l,f,m),d=tt(o,h,p)),c.has(o[h]))if(c.has(o[p])){const t=d.get(l[f]),n=void 0!==t?i[t]:null;if(null===n){const t=Z(e,i[h]);X(t,a[f]),r[f]=t}else r[f]=X(n,a[f]),K(e,n,i[h]),i[t]=null;f++}else Q(i[p]),p--;else Q(i[h]),h++;for(;f<=m;){const t=Z(e,r[m+1]);X(t,a[f]),r[f++]=t}for(;h<=p;){const t=i[h++];null!==t&&Q(t)}et.set(e,r),nt.set(e,l)}}),it=new WeakMap,ot=e(t=>e=>{if(!(e instanceof C)||e instanceof A||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:n}=e,{style:s}=n.element;it.has(e)||(s.cssText=n.strings.join(" "));const i=it.get(e);for(const e in i)e in t||(-1===e.indexOf("-")?s[e]=null:s.removeProperty(e));for(const e in t)-1===e.indexOf("-")?s[e]=t[e]:s.setProperty(e,t[e]);it.set(e,t)}),rt=new WeakMap,at=e(t=>e=>{if(!(e instanceof M))throw new Error("unsafeHTML can only be used in text bindings");const n=rt.get(e);if(void 0!==n&&_(t)&&t===n.value&&e.value===n.fragment)return;const s=document.createElement("template");s.innerHTML=t;const i=document.importNode(s.content,!0);e.setValue(i),rt.set(e,{value:t,fragment:i})}),lt=new WeakMap,ct=e((...t)=>e=>{let n=lt.get(e);void 0===n&&(n={lastRenderedIndex:2147483647,values:[]},lt.set(e,n));const s=n.values;let i=s.length;n.values=t;for(let o=0;o<t.length&&!(o>n.lastRenderedIndex);o++){const r=t[o];if(_(r)||"function"!=typeof r.then){e.setValue(r),n.lastRenderedIndex=o;break}o<i&&r===s[o]||(n.lastRenderedIndex=2147483647,i=0,Promise.resolve(r).then(t=>{const s=n.values.indexOf(r);s>-1&&s<n.lastRenderedIndex&&(n.lastRenderedIndex=s,e.setValue(t),e.commit())}))}});
/**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */function dt(t){return t&&"object"==typeof t&&!Array.isArray(t)}function ut(t){if(void 0!==t.actions){const e=t.actions.map(t=>{const e=Object.assign({},t),n=Object.assign({},e.props);return delete n.state,delete n.api,delete e.element,e.props=n,e});t.actions=e}return function t(e,...n){const s=n.shift();if(dt(e)&&dt(s))for(const n in s)if(dt(s[n]))void 0===e[n]&&(e[n]={}),e[n]=t(e[n],s[n]);else if(Array.isArray(s[n])){e[n]=[];for(let i of s[n])dt(i)?e[n].push(t({},i)):e[n].push(i)}else e[n]=s[n];return n.length?t(e,...n):e}({},t)}function ht(t,n){let s=0;const i={};let o,r,a=[],l=0;const c=Promise.resolve();function d(t){return e((function(e,n){return function(s){const i=s.committer.element;for(const s of e)if("function"==typeof s){const e=a.find(e=>e.instance===t&&e.componentAction.create===s&&e.element===i);if(e)e.props=n;else{void 0!==i.__vido__&&delete i.__vido__;const e={create:s,update(){},destroy(){}};a.push({instance:t,componentAction:e,element:i,props:n})}}}}))}const u={debug:!1,state:t,api:n,html:R,svg:V,directive:e,asyncAppend:H,asyncReplace:Y,cache:B,classMap:F,guard:J,ifDefined:q,repeat:st,styleMap:ot,unsafeHTML:at,until:ct,lastProps:{},actions(t,e){},onDestroy(){},onChange(t){},reuseComponents(t,e,n,s){const i=[];if(t.length<e.length){let o=e.length-t.length;for(;o;){const r=e[e.length-o],a=u.createComponent(s,n(r));t.push(a),i.push(a.instance),o--}}else if(t.length>e.length){let n=t.length-e.length;for(;n;){const e=t.length-n;i.push(t[e].instance),t[e].destroy(),n--}t.length=e.length}let o=0;for(const s of t){const t=e[o];i.includes(s.instance)||s.change(n(t)),o++}return t},createComponent(t,e){const n=t.name+":"+s++;let o;let r=[];let l=[];o=Object.assign(Object.assign({},u),{update:function(){u.updateTemplate(o)},onDestroy:function(t){r.push(t)},onChange:function(t){l.push(t)},instance:n,actions:d(n),lastProps:e});const c=function(t,e,n){return{instance:t,vidoInstance:e,props:n,destroy:()=>(e.debug&&(console.groupCollapsed(`destroying component ${t}`),console.log(ut({components:Object.keys(i),actions:a})),console.trace(),console.groupEnd()),u.destroyComponent(t,e)),update:()=>(e.debug&&(console.groupCollapsed(`updating component ${t}`),console.log(ut({components:Object.keys(i),actions:a})),console.trace(),console.groupEnd()),u.updateTemplate(e)),change(s){e.debug&&(console.groupCollapsed(`changing component ${t}`),console.log(ut({props:n,_props:s,components:Object.keys(i),actions:a})),console.trace(),console.groupEnd()),i[t].change(s,e)},html:(n={})=>i[t].update(n,e)}}(n,o,e),h=t(o,e),p={instance:n,vidoInstance:o,lastProps:e,destroy(){o.debug&&(console.groupCollapsed(`component destroy method fired ${n}`),console.log(ut({props:e,components:Object.keys(i),destroyable:r,actions:a})),console.trace(),console.groupEnd());for(const t of r)t();l=[],r=[]},update:t=>(o.debug&&(console.groupCollapsed(`component update method fired ${n}`),console.log(ut({components:Object.keys(i),actions:a})),console.trace(),console.groupEnd()),h(t)),change(t){e=t,o.debug&&(console.groupCollapsed(`component change method fired ${n}`),console.log(ut({props:e,components:Object.keys(i),onChangeFunctions:l,changedProps:t,actions:a})),console.trace(),console.groupEnd());for(const e of l)e(t)}};return i[n]=p,i[n].change(e),o.debug&&(console.groupCollapsed(`component created ${n}`),console.log(ut({props:e,components:Object.keys(i),actions:a})),console.trace(),console.groupEnd()),c},destroyComponent(t,e){e.debug&&(console.groupCollapsed(`destroying component ${t}...`),console.log(ut({components:Object.keys(i),actions:a})),console.trace(),console.groupEnd()),a=a.filter(e=>(e.instance===t&&"function"==typeof e.componentAction.destroy&&e.componentAction.destroy(e.element,e.props),e.instance!==t)),i[t].destroy(),delete i[t],e.debug&&(console.groupCollapsed(`component destroyed ${t}`),console.log(ut({components:Object.keys(i),actions:a})),console.trace(),console.groupEnd())},updateTemplate(t){const e=++l,n=this;c.then((function(){e===l&&(n.render(),l=0,t.debug&&(console.groupCollapsed("templates updated"),console.trace(),console.groupEnd()))}))},createApp(t,e){r=e;const n=this.createComponent(t);return o=n.instance,this.render(),n},executeActions(){for(const t of a)if(void 0===t.element.__vido__){if("function"==typeof t.componentAction.create){const e=t.componentAction.create(t.element,t.props);u.debug&&(console.groupCollapsed(`create action executed ${t.instance}`),console.log(ut({components:Object.keys(i),action:t,actions:a})),console.trace(),console.groupEnd()),void 0!==e&&("function"==typeof e.update&&(t.componentAction.update=e.update),"function"==typeof e.destroy&&(t.componentAction.destroy=e.destroy))}}else"function"==typeof t.componentAction.update&&(t.componentAction.update(t.element,t.props),u.debug&&(console.groupCollapsed(`update action executed ${t.instance}`),console.log(ut({components:Object.keys(i),action:t,actions:a})),console.trace(),console.groupEnd()));for(const t of a)t.element.__vido__={instance:t.instance,props:t.props}},render(){k(i[o].update(),r),u.executeActions()}};return u}var pt=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,s){return t[0]===e&&(n=s,!0)})),n}return(function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),s=this.__entries__[n];return s&&s[1]},e.prototype.set=function(e,n){var s=t(this.__entries__,e);~s?this.__entries__[s][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,s=t(n,e);~s&&n.splice(s,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,s=this.__entries__;n<s.length;n++){var i=s[n];t.call(e,i[1],i[0])}},e}())}(),ft="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,mt="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),gt="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(mt):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},vt=2;var bt=20,yt=["top","right","bottom","left","width","height","size","weight"],wt="undefined"!=typeof MutationObserver,_t=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,s=!1,i=0;function o(){n&&(n=!1,t()),s&&a()}function r(){gt(o)}function a(){var t=Date.now();if(n){if(t-i<vt)return;s=!0}else n=!0,s=!1,setTimeout(r,e);i=t}return a}(this.refresh.bind(this),bt)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){ft&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),wt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){ft&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;yt.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),$t=function(t,e){for(var n=0,s=Object.keys(e);n<s.length;n++){var i=s[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},xt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||mt},Ct=It(0,0,0,0);function Mt(t){return parseFloat(t)||0}function Pt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+Mt(t["border-"+n+"-width"])}),0)}function Tt(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return Ct;var s=xt(t).getComputedStyle(t),i=function(t){for(var e={},n=0,s=["top","right","bottom","left"];n<s.length;n++){var i=s[n],o=t["padding-"+i];e[i]=Mt(o)}return e}(s),o=i.left+i.right,r=i.top+i.bottom,a=Mt(s.width),l=Mt(s.height);if("border-box"===s.boxSizing&&(Math.round(a+o)!==e&&(a-=Pt(s,"left","right")+o),Math.round(l+r)!==n&&(l-=Pt(s,"top","bottom")+r)),!function(t){return t===xt(t).document.documentElement}(t)){var c=Math.round(a+o)-e,d=Math.round(l+r)-n;1!==Math.abs(c)&&(a-=c),1!==Math.abs(d)&&(l-=d)}return It(i.left,i.top,a,l)}var At="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof xt(t).SVGGraphicsElement}:function(t){return t instanceof xt(t).SVGElement&&"function"==typeof t.getBBox};function Ot(t){return ft?At(t)?function(t){var e=t.getBBox();return It(0,0,e.width,e.height)}(t):Tt(t):Ct}function It(t,e,n,s){return{x:t,y:e,width:n,height:s}}var Nt=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=It(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=Ot(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Dt=function(t,e){var n,s,i,o,r,a,l,c=(s=(n=e).x,i=n.y,o=n.width,r=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(a.prototype),$t(l,{x:s,y:i,width:o,height:r,top:i,right:s+o,bottom:r+i,left:s}),l);$t(this,{target:t,contentRect:c})},Et=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new pt,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof xt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Nt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof xt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new Dt(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),Lt="undefined"!=typeof WeakMap?new WeakMap:new pt,St=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=_t.getInstance(),s=new Et(e,n,this);Lt.set(this,s)};["observe","unobserve","disconnect"].forEach((function(t){St.prototype[t]=function(){var e;return(e=Lt.get(this))[t].apply(e,arguments)}}));var kt=void 0!==mt.ResizeObserver?mt.ResizeObserver:St;
/**
     * Main component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Rt(t){const{api:e,state:n,onDestroy:s,actions:i,update:o,createComponent:r,html:a}=t,l=e.name;let c,d;s(n.subscribe("config.components.List",t=>c=t)),s(n.subscribe("config.components.Chart",t=>d=t));const u=r(c);s(u.destroy);const h=r(d);let p;s(h.destroy),s(n.subscribe("config.plugins",t=>{if(void 0!==t&&Array.isArray(t))for(const s of t)s(n,e)})),s(n.subscribe("config.wrappers.Main",t=>p=t));const f=e.getActions("");let m,g,v,b,y,w,_=0,$=!1;s(n.subscribe("config.classNames",t=>{const s=n.get("config");m=e.getClass(l,{config:s}),$&&(m+=` ${l}__list-column-header-resizer--active`),g=e.getClass("vertical-scroll",{config:s}),o()})),s(n.subscribeAll(["config.height","config.headerHeight","_internal.scrollBarHeight"],()=>{const t=n.get("config"),e=n.get("_internal.scrollBarHeight"),s=t.height-t.headerHeight-e;n.update("_internal.height",s),v=`--height: ${t.height}px`,b=`height: ${s}px; width: ${e}px; margin-top: ${t.headerHeight}px;`,o()})),s(n.subscribe("_internal.list.columns.resizer.active",t=>{$=t,m=e.getClass(e.name),$&&(m+=` ${e.name}__list-column-header-resizer--active`),o()})),s(n.subscribeAll(["config.list.rows;","config.chart.items;","config.list.rows.*.parentId","config.chart.items.*.rowId"],(t,s)=>{if(n.get("_internal.flatTreeMap").length&&"subscribe"===s.type)return;const i=n.get("config.list.rows"),r=[];for(const t in i)r.push(i[t]);e.fillEmptyRowValues(r);const a=n.get("config.chart.items"),l=[];for(const t in a)l.push(a[t]);const c=e.makeTreeMap(r,l);n.update("_internal.treeMap",c),n.update("_internal.flatTreeMapById",e.getFlatTreeMapById(c)),n.update("_internal.flatTreeMap",e.flattenTreeMap(c)),o()},{bulk:!0})),s(n.subscribeAll(["config.list.rows.*.expanded","_internal.treeMap;"],t=>{const s=n.get("config.list.rows"),i=e.getRowsFromIds(e.getRowsWithParentsExpanded(n.get("_internal.flatTreeMap"),n.get("_internal.flatTreeMapById"),s),s);_=e.getRowsHeight(i),n.update("_internal.list.rowsHeight",_),n.update("_internal.list.rowsWithParentsExpanded",i),o()},{bulk:!0})),s(n.subscribeAll(["_internal.list.rowsWithParentsExpanded","config.scroll.top"],()=>{const{visibleRows:t,compensation:s}=e.getVisibleRowsAndCompensation(n.get("_internal.list.rowsWithParentsExpanded")),i=n.get("_internal.list.visibleRows");let r=!0;n.update("config.scroll.compensation",-s),t.length&&(r=t.some((t,e)=>void 0===i[e]||t.id!==i[e].id)),r&&n.update("_internal.list.visibleRows",t),o()}));let x=0;function C(t,n,s){const i=[];let o=n.leftGlobal;const r=n.rightGlobal,a=n.timePerPixel;let l=o-e.time.date(o).startOf(t),c=l/a,d=0,u=0;for(;o<r;){const n={sub:l,subPx:c,leftGlobal:o,rightGlobal:e.time.date(o).endOf(t).valueOf(),width:0,leftPx:0,rightPx:0};n.width=(n.rightGlobal-n.leftGlobal+l)/a,u=n.width>u?n.width:u,n.leftPx=d,d+=n.width,n.rightPx=d,i.push(n),o=n.rightGlobal+1,l=0,c=0}n.maxWidth[t]=u,n.dates[t]=i}s(n.subscribe("_internal.list.visibleRows;",()=>{const t=n.get("config.scroll.top");y=`height: ${_}px; width: 1px`,x!==t&&w&&(x=t,w.scrollTop=t),o()})),s(n.subscribeAll(["config.chart.time","_internal.dimensions.width","config.scroll.left","_internal.scrollBarHeight","_internal.list.width","_internal.chart.dimensions"],(function(){const t=n.get("_internal.chart.dimensions.width");let s=e.mergeDeep({},n.get("config.chart.time"));(s=e.time.recalculateFromTo(s)).period;const i=.01*s.zoom;let r=n.get("config.scroll.left");if(s.timePerPixel=i+Math.pow(2,s.zoom),s.totalViewDurationMs=e.time.date(s.to).diff(s.from,"milliseconds"),s.totalViewDurationPx=s.totalViewDurationMs/s.timePerPixel,r>s.totalViewDurationPx&&(r=s.totalViewDurationPx-t),s.leftGlobal=r*s.timePerPixel+s.from,s.rightGlobal=s.leftGlobal+t*s.timePerPixel,s.leftInner=s.leftGlobal-s.from,s.rightInner=s.rightGlobal-s.from,s.leftPx=s.leftInner/s.timePerPixel,s.rightPx=s.rightInner/s.timePerPixel,Math.round(s.rightGlobal/s.timePerPixel)>Math.round(s.to/s.timePerPixel)){const t=(s.rightGlobal-s.to)/(s.rightGlobal-s.from);s.timePerPixel=s.timePerPixel-s.timePerPixel*t,s.leftGlobal=r*s.timePerPixel+s.from,s.rightGlobal=s.to,s.rightInner=s.rightGlobal-s.from,s.totalViewDurationMs=s.to-s.from,s.totalViewDurationPx=s.totalViewDurationMs/s.timePerPixel,s.rightInner=s.rightGlobal-s.from,s.rightPx=s.rightInner/s.timePerPixel,s.leftPx=s.leftInner/s.timePerPixel}C("day",s),C("month",s),n.update("_internal.chart.time",s),o()}))),n.update("_internal.scrollBarHeight",e.getScrollBarHeight());let M=0;const P={handleEvent(t){const e=t.target.scrollTop;M!==e&&n.update("config.scroll",t=>{t.top=e,M=t.top;const s=n.get("_internal.elements.verticalScrollInner");if(s){const e=s.clientHeight;t.percent.top=t.top/e}return t},{only:["top","percent.top"]})},passive:!0};function T(t){t.stopPropagation(),t.preventDefault()}const A={width:0,height:0};let O;function I(t){w=t,n.update("_internal.elements.verticalScroll",t)}function N(t){n.update("_internal.elements.verticalScrollInner",t)}return f.push(t=>{(O=new kt((e,s)=>{const i=t.clientWidth,o=t.clientHeight;A.width===i&&A.height===o||(A.width=i,A.height=o,n.update("_internal.dimensions",A))})).observe(t),n.update("_internal.elements.main",t)}),s(()=>{O.disconnect()}),e=>p(a`
        <div
          class=${m}
          style=${v}
          @scroll=${T}
          @wheel=${T}
          data-actions=${i(f)}
        >
          ${u.html()}${h.html()}
          <div
            class=${g}
            style=${b}
            @scroll=${P}
            data-action=${i([I])}
          >
            <div style=${y} data-actions=${i([N])} />
          </div>
        </div>
      `,{props:{},vido:t,templateProps:e})}
/**
     * List component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Vt(t){const{api:e,state:n,onDestroy:s,actions:i,update:o,reuseComponents:r,html:a}=t,l=e.getActions("list");let c,d,u,h,p;s(n.subscribe("config.wrappers.List",t=>c=t)),s(n.subscribe("config.components.ListColumn",t=>d=t)),s(n.subscribe("config.list",()=>{h=n.get("config.list"),p=h.columns.percent,o()})),s(n.subscribe("config.classNames",()=>{u=e.getClass("list",{list:h}),o()}));let f=[];s(n.subscribe("config.list.columns.data;",t=>{r(f,Object.values(t),t=>({columnId:t.id}),d),o()})),s(()=>{f.forEach(t=>t.destroy())});let m="";s(n.subscribe("config.height",t=>{m=`height: ${t}px`,o()}));const g={handleEvent(t){if(t.stopPropagation(),t.preventDefault(),"scroll"===t.type)n.update("config.scroll.top",t.target.scrollTop);else{const s=e.normalizeMouseWheelEvent(t);n.update("config.scroll.top",t=>e.limitScroll("top",t+=s.y*n.get("config.scroll.yMultiplier")))}},passive:!1,capture:!0};let v;function b(t){v||(v=t.clientWidth,0===p&&(v=0),n.update("_internal.list.width",v),n.update("_internal.elements.list",t))}return l.push(t=>(n.update("_internal.elements.list",t),b(t),{update:b})),e=>c(h.columns.percent>0?a`
            <div
              class=${u}
              data-actions=${i(l)}
              style=${m}
              @scroll=${g}
              @wheel=${g}
            >
              ${f.map(t=>t.html())}
            </div>
          `:null,{vido:t,props:{},templateProps:e})}
/**
     * ListColumn component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function jt(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,createComponent:a,reuseComponents:l,html:c}=t;let d,u,h;i(s.subscribe("config.wrappers.ListColumn",t=>d=t)),i(s.subscribe("config.components.ListColumnRow",t=>u=t)),i(s.subscribe("config.components.ListColumnHeader",t=>h=t));let p,f=`config.list.columns.data.${e.columnId}`;i(s.subscribe(f,t=>{p=t,r()}));const m=n.getActions("list-column"),g=n.getActions("list-column-rows");let v,b,y,w,_,$;i(s.subscribe("config.classNames",t=>{v=n.getClass("list-column",{column:p}),b=n.getClass("list-column-rows",{column:p}),r()}));let x=[];i(s.subscribe("_internal.list.visibleRows;",t=>{l(x,t,t=>({columnId:e.columnId,rowId:t.id}),u),r()})),i(()=>{x.forEach(t=>t.destroy())}),i(s.subscribeAll(["config.list.columns.percent","config.list.columns.resizer.width",`config.list.columns.data.${p.id}.width`,"_internal.height","config.scroll.compensation"],t=>{const e=s.get("config.list"),n=s.get("config.scroll.compensation");y=e.columns.data[p.id].width*e.columns.percent*.01,w=`width: ${y+e.columns.resizer.width}px`,_=`height: ${s.get("_internal.height")}px;`,$=`margin-top:${n}px;`},{bulk:!0}));const C=a(h,{columnId:e.columnId});return i(C.destroy),i=>d(c`
        <div
          class=${v}
          data-actions=${o(m,{column:p,state:s,api:n})}
          style=${w}
        >
          ${C.html()}
          <div class=${b} style=${_} data-actions=${o(g,{api:n,state:s})}>
            <div class=${b+"--scroll-compensation"} style=${$}>
              ${x.map(t=>t.html())}
            </div>
          </div>
        </div>
      `,{vido:t,props:e,templateProps:i})}
/**
     * ListColumnHeader component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Ht(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,createComponent:a,html:l}=t;let c;i(s.subscribe("config.wrappers.ListColumnHeader",t=>c=t));const d=n.getActions("list-column-header");let u;i(s.subscribe("config.components.ListColumnHeaderResizer",t=>u=t));const h=a(u,{columnId:e.columnId});let p;i(h.destroy),i(s.subscribe("config.components.ListExpander",t=>p=t));const f=a(p,{});let m,g,v,b;return i(f.destroy),i(s.subscribe(`config.list.columns.data.${e.columnId}`,t=>{m=t,r()})),i(s.subscribeAll(["config.classNames","config.headerHeight"],()=>{const t=s.get("config");g=n.getClass("list-column-header",{column:m}),v=n.getClass("list-column-header-content",{column:m}),b=`--height: ${t.headerHeight}px;height:${t.headerHeight}px;`,r()})),i=>c(l`
        <div class=${g} style=${b} data-actions=${o(d,{column:m,api:n,state:s})}>
          ${"boolean"==typeof m.expander&&m.expander?l`
      <div class=${v}>
        ${f.html()}${h.html(m)}
      </div>
    `:l`
      <div class=${v}>
        ${h.html(m)}
      </div>
    `}
        </div>
      `,{vido:t,props:e,templateProps:i})}
/**
     * ListColumnHeaderResizer component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Wt(t,e){const{api:n,state:s,onDestroy:i,update:o,html:r,actions:a}=t,l="list-column-header-resizer",c=n.getActions(l);let d,u,h,p,f,m,g,v,b;i(s.subscribe("config.wrappers.ListColumnHeaderResizer",t=>d=t)),i(s.subscribe(`config.list.columns.data.${e.columnId}`,t=>{u=t,o()}));let y=!1;i(s.subscribe("config.classNames",t=>{h=n.getClass(l,{column:u}),p=n.getClass(l+"-container",{column:u}),f=n.getClass(l+"-dots",{column:u}),m=n.getClass(l+"-dots-dot",{column:u}),g=n.getClass(l+"-line",{column:u}),o()})),i(s.subscribeAll([`config.list.columns.data.${u.id}.width`,"config.list.columns.percent","config.list.columns.resizer.width","config.list.columns.resizer.inRealTime"],(t,e)=>{const n=s.get("config.list");v=u.width*n.columns.percent*.01,b=`width: ${n.columns.resizer.width}px`,y=n.columns.resizer.inRealTime,o()}));let w=[1,2,3,4,5,6,7,8];i(s.subscribe("config.list.columns.resizer.dots",t=>{w=[];for(let e=0;e<t;e++)w.push(e);o()}));let _=!1,$=v;const x=`config.list.columns.data.${u.id}.width`;function C(t){_=!0,s.update("_internal.list.columns.resizer.active",!0)}function M(t){if(_){let e=s.get("config.list.columns.minWidth");"number"==typeof u.minWidth&&(e=u.minWidth),($+=t.movementX)<e&&($=e),y&&s.update(x,$)}}function P(t){_&&(s.update("_internal.list.columns.resizer.active",!1),s.update(x,$),_=!1)}return document.body.addEventListener("mousemove",M),i(()=>document.body.removeEventListener("mousemove",M)),document.body.addEventListener("mouseup",P),i(()=>document.body.removeEventListener("mouseup",P)),i=>d(r`
        <div class=${h} data-actions=${a(c,{column:u,api:n,state:s})}>
          <div class=${p}>
            ${u.header.html?r`
                  ${u.header.html}
                `:u.header.content}
          </div>
          <div class=${f} style=${"--"+b} @mousedown=${C}>
            ${w.map(t=>r`
                  <div class=${m} />
                `)}
          </div>
        </div>
      `,{vido:t,props:e,templateProps:i})}
/**
     * ListColumnRow component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Yt(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,html:a,createComponent:l,onChange:c}=t;let d,u;i(s.subscribe("config.wrappers.ListColumnRow",t=>d=t)),i(s.subscribe("config.components.ListExpander",t=>u=t));let h,p,f,m,g=`_internal.flatTreeMapById.${e.rowId}`,v=s.get(g),b=`config.list.columns.data.${e.columnId}`,y=s.get(b);c(({rowId:t,columnId:e})=>{p&&p(),f&&f(),g=`_internal.flatTreeMapById.${t}`,b=`config.list.columns.data.${e}`,p=s.subscribe(g,t=>{h=`--height: ${(v=t).height}px;`;for(let t of v._internal.parents){const e=s.get(`_internal.flatTreeMapById.${t}`);"object"==typeof e.style&&"Object"===e.style.constructor.name&&"string"==typeof e.style.children&&(h+=e.style.children)}"object"==typeof v.style&&"Object"===v.style.constructor.name&&"string"==typeof v.style.current&&(h+=v.style.current),r()}),m&&m.destroy(),m=l(u,{row:v}),f=s.subscribe(b,t=>{y=t,r()})}),i(()=>{m&&m.destroy(),f(),p()});const w=n.getActions("list-column-row");let _;return i(s.subscribe("config.classNames",t=>{_=n.getClass("list-column-row"),r()})),i=>d(a`
        <div
          class=${_}
          style=${h}
          data-actions=${o(w,{column:y,row:v,api:n,state:s})}
        >
          ${"boolean"==typeof y.expander&&y.expander?m.html():""}
          ${"string"==typeof y.html?"function"==typeof y.data?a`
        ${y.data(v)}
      `:a`
      ${v[y.data]}
    `:"function"==typeof y.data?y.data(v):v[y.data]}
        </div>
      `,{vido:t,props:e,templateProps:i})}
/**
     * ListExpander component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function zt(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,html:a,createComponent:l}=t,c=n.getActions("list-expander");let d,u,h,p,f,m=[];i(s.subscribe("config.components.ListToggle",t=>f=t));const g=l(f,e.row?{row:e.row}:{});let v;return i(g.destroy),i(s.subscribe("config.wrappers.ListExpander",t=>v=t)),i(s.subscribe("config.classNames",t=>{e.row?(d=n.getClass("list-expander",{row:e.row}),p=n.getClass("list-expander-padding",{row:e.row})):(d=n.getClass("list-expander"),p=n.getClass("list-expander-padding")),r()})),i(s.subscribeAll(["config.list.expander.padding"],t=>{u=t,r()})),e.row?i(s.subscribe(`_internal.list.rows.${e.row.id}.parentId`,t=>{h="width:"+e.row._internal.parents.length*u+"px",m=e.row._internal.children,r()})):(h="width:0px",m=[]),i=>v(a`
        <div class=${d} data-action=${o(c,{row:e.row,api:n,state:s})}>
          <div class=${p} style=${h}></div>
          ${m.length||!e.row?g.html():""}
        </div>
      `,{vido:t,props:e,templateProps:i})}
/**
     * ListToggle component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Bt(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,html:a,unsafeHTML:l}=t,c="list-expander-toggle";let d;i(s.subscribe("config.wrappers.ListToggle",t=>d=t));const u=n.getActions(c);let h,p,f,m,g,v,b=!1;function y(){b=!b,e.row?s.update(`config.list.rows.${e.row.id}.expanded`,b):s.update("config.list.rows",t=>{for(const e in t)t[e].expanded=b;return t},{only:["*.expanded"]})}return i(s.subscribe("config.classNames",t=>{e.row?(h=n.getClass(c,{row:e.row}),f=n.getClass(c+"-open",{row:e.row}),m=n.getClass(c+"-closed",{row:e.row})):(h=n.getClass(c),f=n.getClass(c+"-open"),m=n.getClass(c+"-closed")),r()})),i(s.subscribeAll(["config.list.expander.size","config.list.expander.icons"],()=>{const t=s.get("config.list.expander");p=`--size: ${t.size}px`,g=t.icons.open,v=t.icons.closed,r()})),e.row?i(s.subscribe(`config.list.rows.${e.row.id}.expanded`,t=>{b=t,r()})):i(s.subscribe("config.list.rows.*.expanded",t=>{for(const e of t)if(e.value){b=!0;break}r()},{bulk:!0})),i=>d(a`
        <div
          class=${h}
          data-actions=${o(u,{row:e.row,api:n,state:s})}
          style=${p}
          @click=${y}
        >
          ${b?a`
                <div class=${f}>
                  ${l(g)}
                </div>
              `:a`
                <div class=${m}>
                  ${l(v)}
                </div>
              `}
        </div>
      `,{vido:t,props:e,templateProps:i})}
/**
     * Chart component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Gt(t){const{api:e,state:n,onDestroy:s,actions:i,update:o,html:r,createComponent:a}=t,l=n.get("config.components.ChartCalendar"),c=n.get("config.components.ChartTimeline");let d;s(n.subscribe("config.wrappers.Chart",t=>d=t));const u=a(l);s(u.destroy);const h=a(c);s(h.destroy);let p,f,m,g,v="",b="",y=e.getActions("chart");s(n.subscribe("config.classNames",t=>{p=e.getClass("chart"),f=e.getClass("horizontal-scroll"),m=e.getClass("horizontal-scroll-inner"),o()})),s(n.subscribe("config.scroll.left",t=>{g&&g.scrollLeft!==t&&(g.scrollLeft=t),o()})),s(n.subscribeAll(["_internal.chart.dimensions.width","_internal.chart.time.totalViewDurationPx"],(function(t,e){v=`width: ${n.get("_internal.chart.dimensions.width")}px`,b=`width: ${n.get("_internal.chart.time.totalViewDurationPx")}px; height:1px`,o()})));const w={handleEvent(t){let s,i;if("scroll"===t.type)n.update("config.scroll.left",t.target.scrollLeft),s=t.target.scrollLeft;else{const o=e.normalizeMouseWheelEvent(t),r=n.get("config.scroll.xMultiplier"),a=n.get("config.scroll.yMultiplier");t.shiftKey&&o.y?n.update("config.scroll.left",t=>s=e.limitScroll("left",t+=o.y*r)):o.x?n.update("config.scroll.left",t=>s=e.limitScroll("left",t+=o.x*r)):n.update("config.scroll.top",t=>i=e.limitScroll("top",t+=o.y*a))}const o=n.get("_internal.elements.chart"),r=n.get("_internal.elements.horizontalScrollInner");if(o){const t=n.get("config.scroll.left");let e=0;t&&(e=Math.round(t/(r.clientWidth-o.clientWidth)*100))>100&&(e=100),n.update("config.scroll.percent.left",e)}},passive:!0};function _(t){g=t,n.update("_internal.elements.horizontalScroll",t)}function $(t){n.update("_internal.elements.horizontalScrollInner",t)}y.push(t=>{n.update("_internal.elements.chart",t)});let x,C=0;return y.push(t=>{(x=new kt((e,s)=>{const i=t.clientWidth,o=t.clientHeight,r=i-n.get("_internal.scrollBarHeight");C!==i&&(C=i,n.update("_internal.chart.dimensions",{width:i,innerWidth:r,height:o}))})).observe(t),n.update("_internal.elements.main",t)}),s(()=>{x.disconnect()}),s=>d(r`
        <div class=${p} data-actions=${i(y,{api:e,state:n})} @wheel=${w}>
          ${u.html()}${h.html()}
          <div class=${f} style=${v} data-actions=${i([_])} @scroll=${w}>
            <div class=${m} style=${b} data-actions=${i([$])} />
          </div>
        </div>
      `,{vido:t,props:{},templateProps:s})}
/**
     * ChartCalendar component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Ft(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,reuseComponents:a,html:l,repeat:c}=t,d=n.getActions("chart-calendar"),u=s.get("config.components.ChartCalendarDate");let h,p;i(s.subscribe("config.wrappers.ChartCalendar",t=>h=t)),i(s.subscribe("config.classNames",t=>{p=n.getClass("chart-calendar"),r()}));let f,m,g="";i(s.subscribe("config.headerHeight",t=>{g=`height: ${f=t}px;--calendar-height: ${f}px`,r()})),i(s.subscribe("config.chart.time.period",t=>m=t));let v=[],b=[];return i(s.subscribe("_internal.chart.time.dates",t=>{const e=n.time.date().format("YYYY-MM-DD");"object"==typeof t.day&&Array.isArray(t.day)&&t.day.length&&a(v,t.day,t=>({period:"day",date:t,currentDate:e}),u),"object"==typeof t.month&&Array.isArray(t.month)&&t.month.length&&a(b,t.month,t=>({period:"month",date:t,currentDate:e}),u),r()})),i(()=>{v.forEach(t=>t.destroy())}),d.push(t=>{s.update("_internal.elements.calendar",t)}),n=>h(l`
        <div class=${p} data-actions=${o(d)} style=${g}>
          <div class=${p+"-dates "+p+"-dates--months"}>${b.map(t=>t.html())}</div>
          <div class=${p+"-dates "+p+"-dates--days"}>${v.map(t=>t.html())}</div>
          </div>
        </div>
      `,{props:e,vido:t,templateProps:n})}
/**
     * ChartCalendarDate component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Ut(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,onChange:a,html:l}=t,c=n.getActions("chart-calendar-date");let d;i(s.subscribe("config.wrappers.ChartCalendarDate",t=>d=t));let u,h,p,f,m=n.getClass("chart-calendar-date",e),g="";function v(){u=s.get("_internal.chart.time"),p=`width: ${e.date.width}px; margin-left:-${e.date.subPx}px;`;const t=n.time.date(e.date.leftGlobal);g=t.format("YYYY-MM-DD")===e.currentDate?" current":t.subtract(1,"days").format("YYYY-MM-DD")===e.currentDate?" next":t.add(1,"days").format("YYYY-MM-DD")===e.currentDate?" previous":"";const i=u.maxWidth[e.period];switch(e.period){case"year":h=l`
          <div class=${m+"-content "+m+"-content--year"+g}>${t.format("YYYY")}</div>
        `,i<=100&&(h=l`
            <div class=${m+"-content "+m+"-content--year"+g}>${t.format("YY")}</div>
          `);break;case"month":h=l`
          <div
            class=${m+"-content "+m+"-content--month"+g}
            style="margin-left:${e.date.subPx+8}px;"
          >
            ${t.format("MMMM YYYY")}
          </div>
        `,i<=100&&(h=l`
            <div class=${m+"-content "+m+"-content--month"+g}>
              ${t.format("MMM'YY")}
            </div>
          `);break;case"day":h=l`
          <div class=${m+"-content "+m+"-content--day"+g}>${t.format("DD")}</div>
          <div class=${m+"-content "+m+"-content--day-word"+g}>
            ${t.format("dddd")}
          </div>
        `,i<=40?h=l`
            <div class=${m+"-content "+m+"-content--day"+g}>
              <div class=${m+"-content "+m+"-content--day-small"+g}>
                ${t.format("DD")} ${t.format("ddd")}
              </div>
            </div>
          `:i<=50?h=l`
            <div class=${m+"-content "+m+"-content--day"+g}>${t.format("DD")}</div>
            <div class=${m+"-content "+m+"-content--day-word"+g}>
              ${t.format("dd")}
            </div>
          `:i<=90&&(h=l`
            <div class=${m+"-content "+m+"-content--day"+g}>${t.format("DD")}</div>
            <div class=${m+"-content "+m+"-content--day-word"+g}>
              ${t.format("ddd")}
            </div>
          `)}r()}return g=n.time.date(e.date.leftGlobal).format("YYYY-MM-DD")===e.currentDate?" current":"",a(t=>{e=t,f&&f(),f=s.subscribeAll(["_internal.chart.time","config.chart.calendar.vertical.smallFormat"],v,{bulk:!0})}),i(()=>{f()}),i=>d(l`
        <div
          class=${m+" "+m+"--"+e.period+g}
          style=${p}
          data-actions=${o(c,{date:e.date,period:e.period,api:n,state:s})}
        >
          ${h}
        </div>
      `,{props:e,vido:t,templateProps:i})}
/**
     * ChartTimeline component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Jt(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,html:a,createComponent:l}=t,c=n.getActions("chart-timeline");let d;i(s.subscribe("config.wrappers.ChartTimeline",t=>d=t));const u=s.get("config.components.ChartTimelineGrid"),h=s.get("config.components.ChartTimelineItems"),p=l(u);i(p.destroy);const f=l(h);let m,g;i(f.destroy),i(s.subscribe("config.classNames",()=>{m=n.getClass("chart-timeline"),g=n.getClass("chart-timeline-inner"),r()}));let v="",b="";return i(s.subscribeAll(["_internal.height","_internal.list.rowsHeight","config.scroll.compensation"],()=>{v=`height: ${s.get("_internal.height")}px`;const t=s.get("config.scroll.compensation");b=`height: ${s.get("_internal.list.rowsHeight")}px; margin-top:${t}px;`,r()})),c.push(t=>{s.update("_internal.elements.gantt",t)}),s=>d(a`
        <div class=${m} style=${v} data-actions=${o(c)} @wheel=${n.onScroll}>
          <div class=${g} style=${b}>
            ${p.html()}${f.html()}
          </div>
        </div>
      `,{props:e,vido:t,templateProps:s})}
/**
     * ChartTimelineGrid component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function qt(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,html:a,reuseComponents:l}=t,c=n.getActions("chart-timeline-grid");let d;i(s.subscribe("config.wrappers.ChartTimelineGrid",t=>d=t));const u=s.get("config.components.ChartTimelineGridRow");let h,p,f,m;i(s.subscribe("config.classNames",()=>{h=n.getClass("chart-timeline-grid"),r()})),i(s.subscribe("_internal.height",t=>{f=`height: ${p=t}px`,r()})),i(s.subscribe("config.chart.time.period",t=>m=t));let g=[];return i(s.subscribeAll(["_internal.list.visibleRows;",`_internal.chart.time.dates.${m};`],(function(){const t=s.get("_internal.list.visibleRows"),e=s.get(`_internal.chart.time.dates.${m}`);if(!e||0===e.length)return;let n=0;const i=[];for(const s of t){const t=[];for(const i of e)t.push({time:i,row:s,top:n});i.push({row:s,blocks:t,top:n}),n+=s.height}l(g,i,t=>t,u),r()}),{bulk:!0})),c.push(t=>{s.update("_internal.elements.grid",t)}),i(()=>{g.forEach(t=>t.destroy())}),i=>d(a`
        <div class=${h} data-actions=${o(c,{api:n,state:s})} style=${f}>
          ${g.map(t=>t.html())}
        </div>
      `,{props:e,vido:t,templateProps:i})}
/**
     * ChartTimelineGridRow component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Zt(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,html:a,reuseComponents:l,onChange:c}=t;let d;i(s.subscribe("config.wrappers.ChartTimelineGridRow",t=>{d=t,r()}));const u=s.get("config.components.ChartTimelineGridRowBlock"),h=n.getActions("chart-timeline-grid-row");let p,f=n.getClass("chart-timeline-grid-row"),m=[];return c(t=>{l(m,(e=t).blocks,t=>t,u),p=`height: ${e.row.height}px;`,r()}),i(()=>{m.forEach(t=>t.destroy())}),i=>d(a`
        <div
          class=${f}
          data-actions=${o(h,{row:e.row,blocks:e.blocks,top:e.top,api:n,state:s})}
          style=${p}
        >
          ${m.map(t=>t.html())}
        </div>
      `,{vido:t,props:e,templateProps:i})}
/**
     * ChartTimelineGridRowBlock component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Xt(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,html:a,onChange:l}=t,c="chart-timeline-grid-row-block",d=n.getActions(c);let u;i(s.subscribe("config.wrappers.ChartTimelineGridRowBlock",t=>{u=t,r()}));const h=n.time.date().startOf("day").valueOf();let p;function f(t){p=n.getClass(c),t.leftGlobal===h&&(p+=" current")}f(e.time);let m=`width: ${e.time.width}px;height: 100%;margin-left:-${e.time.subPx}px;`;return l(t=>{f((e=t).time),m=`width: ${e.time.width}px; height: 100%; margin-left:-${e.time.subPx}px; `;const n=s.get("config.list.rows");for(const t of e.row._internal.parents){const e=n[t];"object"==typeof e.style&&"object"==typeof e.style.gridBlock&&"string"==typeof e.style.gridBlock.children&&(m+=e.style.gridBlock.children)}"object"==typeof e.row.style&&"object"==typeof e.row.style.gridBlock&&"string"==typeof e.row.style.gridBlock.current&&(m+=e.row.style.gridBlock.current),r()}),()=>u(a`
        <div class=${p} data-actions=${o(d,Object.assign(Object.assign({},e),{api:n,state:s}))} style=${m} />
      `,{props:e,vido:t,templateProps:e})}
/**
     * ChartTimelineItems component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Kt(t){const{api:e,state:n,onDestroy:s,actions:i,update:o,html:r,reuseComponents:a}=t,l=e.getActions("chart-timeline-items");let c;s(n.subscribe("config.wrappers.ChartTimelineItems",t=>c=t));const d=n.get("config.components.ChartTimelineItemsRow");let u;s(n.subscribe("config.classNames",()=>{u=e.getClass("chart-timeline-items"),o()}));let h=[];s(n.subscribeAll(["_internal.list.visibleRows","config.chart.items","config.list.rows"],()=>{const t=n.get("_internal.list.visibleRows");h=a(h,t,t=>({row:t}),d),o()},{bulk:!0}));let p="top:0px;";return s(n.subscribe("config.scroll.compensation",t=>{p=`top: ${t}px;`})),s(()=>{h.forEach(t=>t.destroy())}),s=>c(r`
        <div class=${u} style=${p} data-actions=${i(l,{api:e,state:n})}>
          ${h.map(t=>t.html())}
        </div>
      `,{props:{},vido:t,templateProps:s})}
/**
     * ChartTimelineItemsRow component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function Qt(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,html:a,onChange:l,reuseComponents:c}=t;let d;i(s.subscribe("config.wrappers.ChartTimelineItemsRow",t=>d=t));const u=s.get("config.components.ChartTimelineItemsRowItem");let h,p,f,m,g=`_internal.flatTreeMapById.${e.row.id}._internal.items`,v=[];function b(){const t=s.get("_internal.chart");f=`width:${t.dimensions.width}px;height:${e.row.height}px;--row-height:${e.row.height}px;`,m=`width: ${t.time.totalViewDurationPx}px;height: 100%;`}l(t=>{!function(t){g=`_internal.flatTreeMapById.${t.id}._internal.items`,"function"==typeof h&&h(),"function"==typeof p&&p(),h=s.subscribe("_internal.chart",(t,e)=>{b(),r()}),p=s.subscribe(g,e=>{v=c(v,e,e=>({row:t,item:e}),u),b(),r()})}((e=t).row)}),i(()=>{p(),h(),v.forEach(t=>t.destroy())});const y=n.getActions("chart-timeline-items-row");let w,_;return i(s.subscribe("config.classNames",()=>{w=n.getClass("chart-timeline-items-row",e),_=n.getClass("chart-timeline-items-row-inner",e),r()})),n=>d(a`
        <div class=${w} data-actions=${o(y)} style=${f}>
          <div class=${_} style=${m}>
            ${v.map(t=>t.html())}
          </div>
        </div>
      `,{props:e,vido:t,templateProps:n})}
/**
     * ChartTimelineItemsRowItem component
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
     * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
     */function te(t,e){const{api:n,state:s,onDestroy:i,actions:o,update:r,html:a,onChange:l}=t;let c;i(s.subscribe("config.wrappers.ChartTimelineItemsRowItem",t=>c=t));let d,u,h=0,p=0;function f(){u="";let t=s.get("_internal.chart.time");h=(e.item.time.start-t.leftGlobal)/t.timePerPixel,p=(e.item.time.end-e.item.time.start)/t.timePerPixel,p-=s.get("config.chart.spacing"),d=`left:${h}px; width:${p}px; `,"object"==typeof e.item.style&&"Object"===e.item.style.constructor.name&&"string"==typeof e.item.style.current&&(u+=e.item.style.current),r()}l(t=>{e=t,f()});const m="chart-timeline-items-row-item",g=n.getActions(m);let v,b,y;return i(s.subscribe("config.classNames",()=>{v=n.getClass(m,e),b=n.getClass(m+"-content",e),y=n.getClass(m+"-content-label",e),r()})),i(s.subscribe("_internal.chart.time",t=>{f()})),i=>c(a`
        <div
          class=${v}
          data-actions=${o(g,{item:e.item,row:e.row,left:h,width:p,api:n,state:s})}
          style=${d}
        >
          <div class=${b} style=${u}>
            <div class=${y}>${e.item.label}</div>
          </div>
        </div>
      `,{vido:t,props:e,templateProps:i})}
/**
     * Gantt-Schedule-Timeline-Calendar
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0
     */const ee=["","list","list-column","list-column-header","list-expander","list-expander-toggle","list-column-header-resizer","list-column-row","chart","chart-calendar","chart-calendar-date","chart-timeline","chart-timeline-grid","chart-timeline-grid-row","chart-timeline-grid-row-block","chart-timeline-items","chart-timeline-items-row","chart-timeline-items-row-item"];function ne(){return{height:740,headerHeight:86,components:{Main:Rt,List:Vt,ListColumn:jt,ListColumnHeader:Ht,ListColumnHeaderResizer:Wt,ListColumnRow:Yt,ListExpander:zt,ListToggle:Bt,Chart:Gt,ChartCalendar:Ft,ChartCalendarDate:Ut,ChartTimeline:Jt,ChartTimelineGrid:qt,ChartTimelineGridRow:Zt,ChartTimelineGridRowBlock:Xt,ChartTimelineItems:Kt,ChartTimelineItemsRow:Qt,ChartTimelineItemsRowItem:te},wrappers:{Main:t=>t,List:t=>t,ListColumn:t=>t,ListColumnHeader:t=>t,ListColumnHeaderResizer:t=>t,ListColumnRow:t=>t,ListExpander:t=>t,ListToggle:t=>t,Chart:t=>t,ChartCalendar:t=>t,ChartCalendarDate:t=>t,ChartTimeline:t=>t,ChartTimelineGrid:t=>t,ChartTimelineGridRow:t=>t,ChartTimelineGridRowBlock:t=>t,ChartTimelineItems:t=>t,ChartTimelineItemsRow:t=>t,ChartTimelineItemsRowItem:t=>t},list:{rows:{},rowHeight:40,columns:{percent:100,resizer:{width:10,inRealTime:!0,dots:6},minWidth:50,data:{}},expander:{padding:20,size:20,icons:{open:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>',closed:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>'}}},scroll:{top:0,left:0,xMultiplier:1.5,yMultiplier:1,percent:{top:0,left:0}},chart:{time:{from:0,to:0,zoom:21,period:"day",dates:{},maxWidth:{}},calendar:{vertical:{smallFormat:"YYYY-MM-DD"}},grid:{},items:{}},classNames:{},actions:function(){const t={};return ee.forEach(e=>t[e]=[]),t}(),locale:{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:t=>{const e=["th","st","nd","rd"],n=t%100;return`[${t}${e[(n-20)%10]||e[n]||e[0]}]`}}}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var se=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){t.exports=function(){var t="millisecond",e="second",n="minute",s="hour",i="day",o="week",r="month",a="quarter",l="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},h={s:u,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+u(s,2,"0")+":"+u(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),s=t.clone().add(n,r),i=e-s<0,o=t.clone().add(n+(i?-1:1),r);return Number(-(n+(e-s)/(i?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:r,y:l,w:o,d:i,h:s,m:n,s:e,ms:t,Q:a}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",m={};m[f]=p;var g=function(t){return t instanceof w},v=function(t,e,n){var s;if(!t)return f;if("string"==typeof t)m[t]&&(s=t),e&&(m[t]=e,s=t);else{var i=t.name;m[i]=t,s=i}return n||(f=s),s},b=function(t,e,n){if(g(t))return t.clone();var s=e?"string"==typeof e?{format:e,pl:n}:e:{};return s.date=t,new w(s)},y=h;y.l=v,y.i=g,y.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u})};var w=function(){function u(t){this.$L=this.$L||v(t.locale,null,!0),this.parse(t)}var h=u.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(c);if(s)return n?new Date(Date.UTC(s[1],s[2]-1,s[3]||1,s[4]||0,s[5]||0,s[6]||0,s[7]||0)):new Date(s[1],s[2]-1,s[3]||1,s[4]||0,s[5]||0,s[6]||0,s[7]||0)}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return b(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<b(t)},h.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},h.year=function(t){return this.$g(t,"$y",l)},h.month=function(t){return this.$g(t,"$M",r)},h.day=function(t){return this.$g(t,"$W",i)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",s)},h.minute=function(t){return this.$g(t,"$m",n)},h.second=function(t){return this.$g(t,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,a){var c=this,d=!!y.u(a)||a,u=y.p(t),h=function(t,e){var n=y.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return d?n:n.endOf(i)},p=function(t,e){return y.w(c.toDate()[t].apply(c.toDate(),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},f=this.$W,m=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case l:return d?h(1,0):h(31,11);case r:return d?h(1,m):h(0,m+1);case o:var b=this.$locale().weekStart||0,w=(f<b?f+7:f)-b;return h(d?g-w:g+(6-w),m);case i:case"date":return p(v+"Hours",0);case s:return p(v+"Minutes",1);case n:return p(v+"Seconds",2);case e:return p(v+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(o,a){var c,d=y.p(o),u="set"+(this.$u?"UTC":""),h=(c={},c[i]=u+"Date",c.date=u+"Date",c[r]=u+"Month",c[l]=u+"FullYear",c[s]=u+"Hours",c[n]=u+"Minutes",c[e]=u+"Seconds",c[t]=u+"Milliseconds",c)[d],p=d===i?this.$D+(a-this.$W):a;if(d===r||d===l){var f=this.clone().set("date",1);f.$d[h](p),f.init(),this.$d=f.set("date",Math.min(this.$D,f.daysInMonth())).toDate()}else h&&this.$d[h](p);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[y.p(t)]()},h.add=function(t,a){var c,d=this;t=Number(t);var u=y.p(a),h=function(e){var n=b(d);return y.w(n.date(n.date()+Math.round(e*t)),d)};if(u===r)return this.set(r,this.$M+t);if(u===l)return this.set(l,this.$y+t);if(u===i)return h(1);if(u===o)return h(7);var p=(c={},c[n]=6e4,c[s]=36e5,c[e]=1e3,c)[u]||1,f=this.valueOf()+t*p;return y.w(f,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),i=this.$locale(),o=this.$H,r=this.$m,a=this.$M,l=i.weekdays,c=i.months,u=function(t,s,i,o){return t&&(t[s]||t(e,n))||i[s].substr(0,o)},h=function(t){return y.s(o%12||12,t,"0")},p=i.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:y.s(a+1,2,"0"),MMM:u(i.monthsShort,a,c,3),MMMM:c[a]||c(this,n),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,l,2),ddd:u(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:y.s(o,2,"0"),h:h(1),hh:h(2),a:p(o,r,!0),A:p(o,r,!1),m:String(r),mm:y.s(r,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:s};return n.replace(d,(function(t,e){return e||f[t]||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,d){var u,h=y.p(c),p=b(t),f=6e4*(p.utcOffset()-this.utcOffset()),m=this-p,g=y.m(this,p);return g=(u={},u[l]=g/12,u[r]=g,u[a]=g/3,u[o]=(m-f)/6048e5,u[i]=(m-f)/864e5,u[s]=m/36e5,u[n]=m/6e4,u[e]=m/1e3,u)[h]||m,d?g:y.a(g)},h.daysInMonth=function(){return this.endOf(r).$D},h.$locale=function(){return m[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=v(t,e,!0),n},h.clone=function(){return y.w(this.toDate(),this)},h.toDate=function(){return new Date(this.$d)},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},u}();return b.prototype=w.prototype,b.extend=function(t,e){return t(e,w,b),b},b.locale=v,b.isDayjs=g,b.unix=function(t){return b(1e3*t)},b.en=m[f],b.Ls=m,b}()}));
/**
     * Gantt-Schedule-Timeline-Calendar
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0
     */function ie(t,e){const n=t.get("config.locale");return se.locale(n,null,!0),{date:t=>t?se(t).locale(n.name):se().locale(n.name),recalculateFromTo(e){0!==(e={...e}).from&&(e.from=this.date(e.from).startOf("day").valueOf()),0!==e.to&&(e.to=this.date(e.to).endOf("day").valueOf());let n=Number.MAX_SAFE_INTEGER,s=0;const i=t.get("config.chart.items");if(0===Object.keys(i).length)return e;if(0===e.from||0===e.to){for(let t in i){const e=i[t];n>e.time.start&&(n=e.time.start),s<e.time.end&&(s=e.time.end)}0===e.from&&(e.from=this.date(n).startOf("day").valueOf()),0===e.to&&(e.to=this.date(s).endOf("day").valueOf())}return e}}}class oe{constructor(t,e="*"){this.wchar=e,this.pattern=t,this.segments=[],this.starCount=0,this.minLength=0,this.maxLength=0,this.segStartIndex=0;for(let n=0,s=t.length;n<s;n+=1){const s=t[n];s===e&&(this.starCount+=1,n>this.segStartIndex&&this.segments.push(t.substring(this.segStartIndex,n)),this.segments.push(s),this.segStartIndex=n+1)}this.segStartIndex<t.length&&this.segments.push(t.substring(this.segStartIndex)),this.starCount?(this.minLength=t.length-this.starCount,this.maxLength=1/0):this.maxLength=this.minLength=t.length}match(t){if(this.pattern===this.wchar)return!0;if(0===this.segments.length)return this.pattern===t;const{length:e}=t;if(e<this.minLength||e>this.maxLength)return!1;let n=this.segments.length-1,s=t.length-1,i=!1;for(;;){const e=this.segments[n];if(n-=1,e===this.wchar)i=!0;else{const n=s+1-e.length,o=t.lastIndexOf(e,n);if(-1===o||o>n)return!1;if(i)s=o-1,i=!1;else{if(o!==n)return!1;s-=e.length}}if(0>n)break}return!0}}class re{constructor(t,e,n){this.obj=t,this.delimeter=e,this.wildcard=n}simpleMatch(t,e){if(t===e)return!0;if(t===this.wildcard)return!0;const n=t.indexOf(this.wildcard);if(n>-1){const s=t.substr(n+1);if(0===n||e.substring(0,n)===t.substring(0,n)){const t=s.length;return!(t>0)||e.substr(-t)===s}}return!1}match(t,e){return t===e||t===this.wildcard||e===this.wildcard||this.simpleMatch(t,e)||new oe(t).match(e)}handleArray(t,e,n,s,i={}){let o=t.indexOf(this.delimeter,n),r=!1;-1===o&&(r=!0,o=t.length);const a=t.substring(n,o);let l=0;for(const n of e){const e=l.toString(),c=""===s?e:s+this.delimeter+l;(a===this.wildcard||a===e||this.simpleMatch(a,e))&&(r?i[c]=n:this.goFurther(t,n,o+1,c,i)),l++}return i}handleObject(t,e,n,s,i={}){let o=t.indexOf(this.delimeter,n),r=!1;-1===o&&(r=!0,o=t.length);const a=t.substring(n,o);for(let n in e){n=n.toString();const l=""===s?n:s+this.delimeter+n;(a===this.wildcard||a===n||this.simpleMatch(a,n))&&(r?i[l]=e[n]:this.goFurther(t,e[n],o+1,l,i))}return i}goFurther(t,e,n,s,i={}){return Array.isArray(e)?this.handleArray(t,e,n,s,i):this.handleObject(t,e,n,s,i)}get(t){return this.goFurther(t,this.obj,0,"")}}class ae{static get(t,e,n=null){if(null===n&&(n=t.slice()),0===n.length||void 0===e)return e;const s=n.shift();return e.hasOwnProperty(s)?0===n.length?e[s]:ae.get(t,e[s],n):void 0}static set(t,e,n,s=null){if(null===s&&(s=t.slice()),0===s.length){for(const t in n)delete n[t];for(const t in e)n[t]=e[t];return}const i=s.shift();0!==s.length?(n.hasOwnProperty(i)||(n[i]={}),ae.set(t,e,n[i],s)):n[i]=e}}const le={delimeter:".",notRecursive:";",param:":",wildcard:"*",log:function(t,e){console.debug(t,e)}},ce={bulk:!1,debug:!1,source:"",data:void 0},de={only:[],source:"",debug:!1,data:void 0};class ue{constructor(t={},e=le){this.listeners={},this.data=t,this.options=Object.assign(Object.assign({},le),e),this.id=0,this.pathGet=ae.get,this.pathSet=ae.set,this.scan=new re(this.data,this.options.delimeter,this.options.wildcard)}getListeners(){return this.listeners}destroy(){this.data=void 0,this.listeners={}}match(t,e){return t===e||(t===this.options.wildcard||e===this.options.wildcard||this.scan.match(t,e))}cutPath(t,e){return this.split(this.cleanNotRecursivePath(t)).slice(0,this.split(this.cleanNotRecursivePath(e)).length).join(this.options.delimeter)}trimPath(t){return this.cleanNotRecursivePath(t).replace(new RegExp(`^\\${this.options.delimeter}{1}`),"")}split(t){return""===t?[]:t.split(this.options.delimeter)}isWildcard(t){return t.includes(this.options.wildcard)}isNotRecursive(t){return t.endsWith(this.options.notRecursive)}cleanNotRecursivePath(t){return this.isNotRecursive(t)?t.slice(0,-this.options.notRecursive.length):t}hasParams(t){return t.includes(this.options.param)}getParamsInfo(t){let e={replaced:"",original:t,params:{}},n=0,s=[];for(const i of this.split(t)){e.params[n]={original:i,replaced:"",name:""};const t=new RegExp(`\\${this.options.param}([^\\${this.options.delimeter}\\${this.options.param}]+)`,"g");let o=t.exec(i);o?(e.params[n].name=o[1],t.lastIndex=0,e.params[n].replaced=i.replace(t,this.options.wildcard),s.push(e.params[n].replaced),n++):(delete e.params[n],s.push(i),n++)}return e.replaced=s.join(this.options.delimeter),e}getParams(t,e){if(!t)return;const n=this.split(e),s={};for(const e in t.params){s[t.params[e].name]=n[e]}return s}subscribeAll(t,e,n=ce){let s=[];for(const i of t)s.push(this.subscribe(i,e,n));return()=>{for(const t of s)t();s=[]}}getCleanListenersCollection(t={}){return Object.assign({listeners:{},isRecursive:!1,isWildcard:!1,hasParams:!1,match:void 0,paramsInfo:void 0,path:void 0,count:0},t)}getCleanListener(t,e=ce){return{fn:t,options:Object.assign(Object.assign({},ce),e)}}getListenerCollectionMatch(t,e,n){return t=this.cleanNotRecursivePath(t),s=>(e&&(s=this.cutPath(s,t)),!(!n||!this.match(t,s))||t===s)}getListenersCollection(t,e){if(void 0!==this.listeners[t]){let n=this.listeners[t];return this.id++,n.listeners[this.id]=e,n}let n={isRecursive:!0,isWildcard:!1,hasParams:!1,paramsInfo:void 0,originalPath:t,path:t};this.hasParams(n.path)&&(n.paramsInfo=this.getParamsInfo(n.path),n.path=n.paramsInfo.replaced,n.hasParams=!0),n.isWildcard=this.isWildcard(n.path),this.isNotRecursive(n.path)&&(n.isRecursive=!1);let s=this.listeners[n.path]=this.getCleanListenersCollection(Object.assign(Object.assign({},n),{match:this.getListenerCollectionMatch(n.path,n.isRecursive,n.isWildcard)}));return this.id++,s.listeners[this.id]=e,s}subscribe(t,e,n=ce,s="subscribe"){let i=this.getCleanListener(e,n);const o=this.getListenersCollection(t,i);if(o.count++,t=o.path,o.isWildcard){const r=this.scan.get(this.cleanNotRecursivePath(t));if(n.bulk){const a=[];for(const t in r)a.push({path:t,params:this.getParams(o.paramsInfo,t),value:r[t]});e(a,{type:s,listener:i,listenersCollection:o,path:{listener:t,update:void 0,resolved:void 0},options:n,params:void 0})}else for(const a in r)e(r[a],{type:s,listener:i,listenersCollection:o,path:{listener:t,update:void 0,resolved:this.cleanNotRecursivePath(a)},params:this.getParams(o.paramsInfo,a),options:n})}else e(this.pathGet(this.split(this.cleanNotRecursivePath(t)),this.data),{type:s,listener:i,listenersCollection:o,path:{listener:t,update:void 0,resolved:this.cleanNotRecursivePath(t)},params:this.getParams(o.paramsInfo,t),options:n});return this.debugSubscribe(i,o,t),this.unsubscribe(t,this.id)}unsubscribe(t,e){const n=this.listeners,s=n[t];return function(){delete s.listeners[e],s.count--,0===s.count&&delete n[t]}}same(t,e){return(["number","string","undefined","boolean"].includes(typeof t)||null===t)&&e===t}notifyListeners(t,e=[],n=!0){const s=[];for(const i in t){let{single:o,bulk:r}=t[i];for(const t of o){if(e.includes(t))continue;const i=this.debugTime(t);t.listener.fn(t.value(),t.eventInfo),n&&s.push(t),this.debugListener(i,t)}for(const t of r){if(e.includes(t))continue;const i=this.debugTime(t),o=t.value.map(t=>Object.assign(Object.assign({},t),{value:t.value()}));t.listener.fn(o,t.eventInfo),n&&s.push(t),this.debugListener(i,t)}}return s}getSubscribedListeners(t,e,n,s="update",i=null){n=Object.assign(Object.assign({},de),n);const o={};for(let r in this.listeners){const a=this.listeners[r];if(o[r]={single:[],bulk:[],bulkData:[]},a.match(t)){const l=a.paramsInfo?this.getParams(a.paramsInfo,t):void 0,c=a.isRecursive||a.isWildcard?()=>this.get(this.cutPath(t,r)):()=>e,d=[{value:c,path:t,params:l}];for(const e in a.listeners){const u=a.listeners[e];u.options.bulk?o[r].bulk.push({listener:u,listenersCollection:a,eventInfo:{type:s,listener:u,path:{listener:r,update:i||t,resolved:void 0},params:l,options:n},value:d}):o[r].single.push({listener:u,listenersCollection:a,eventInfo:{type:s,listener:u,path:{listener:r,update:i||t,resolved:this.cleanNotRecursivePath(t)},params:l,options:n},value:c})}}}return o}notifySubscribedListeners(t,e,n,s="update",i=null){return this.notifyListeners(this.getSubscribedListeners(t,e,n,s,i))}getNestedListeners(t,e,n,s="update",i=null){const o={};for(let r in this.listeners){o[r]={single:[],bulk:[]};const a=this.listeners[r],l=this.cutPath(r,t);if(this.match(l,t)){const c=this.trimPath(r.substr(l.length)),d=new re(e,this.options.delimeter,this.options.wildcard).get(c),u=a.paramsInfo?this.getParams(a.paramsInfo,t):void 0,h=[],p={};for(const e in d){const l=()=>d[e],c=[t,e].join(this.options.delimeter);for(const e in a.listeners){const d=a.listeners[e],f={type:s,listener:d,listenersCollection:a,path:{listener:r,update:i||t,resolved:this.cleanNotRecursivePath(c)},params:u,options:n};d.options.bulk?(h.push({value:l,path:c,params:u}),p[e]=d):o[r].single.push({listener:d,listenersCollection:a,eventInfo:f,value:l})}}for(const e in p){const i=p[e],l={type:s,listener:i,listenersCollection:a,path:{listener:r,update:t,resolved:void 0},options:n,params:u};o[r].bulk.push({listener:i,listenersCollection:a,eventInfo:l,value:h})}}}return o}notifyNestedListeners(t,e,n,s="update",i,o=null){return this.notifyListeners(this.getNestedListeners(t,e,n,s,o),i,!1)}getNotifyOnlyListeners(t,e,n,s="update",i=null){const o={};if("object"!=typeof n.only||!Array.isArray(n.only)||void 0===n.only[0]||!this.canBeNested(e))return o;for(const r of n.only){const a=new re(e,this.options.delimeter,this.options.wildcard).get(r);o[r]={bulk:[],single:[]};for(const e in a){const l=t+this.options.delimeter+e;for(const c in this.listeners){const d=this.listeners[c],u=d.paramsInfo?this.getParams(d.paramsInfo,l):void 0;if(this.match(c,l)){const h=()=>a[e],p=[{value:h,path:l,params:u}];for(const e in d.listeners){const a=d.listeners[e],f={type:s,listener:a,listenersCollection:d,path:{listener:c,update:i||t,resolved:this.cleanNotRecursivePath(l)},params:u,options:n};a.options.bulk?o[r].bulk.some(t=>t.listener===a)||o[r].bulk.push({listener:a,listenersCollection:d,eventInfo:f,value:p}):o[r].single.push({listener:a,listenersCollection:d,eventInfo:f,value:h})}}}}}return o}notifyOnly(t,e,n,s="update",i=null){return void 0!==this.notifyListeners(this.getNotifyOnlyListeners(t,e,n,s,i))[0]}canBeNested(t){return"object"==typeof t&&null!==t}getUpdateValues(t,e,n){"object"==typeof t&&null!==t&&(t=Array.isArray(t)?t.slice():Object.assign({},t));let s=n;return"function"==typeof n&&(s=n(this.pathGet(e,this.data))),{newValue:s,oldValue:t}}wildcardUpdate(t,e,n=de){n=Object.assign(Object.assign({},de),n);const s=this.scan.get(t),i={};for(const t in s){const n=this.split(t),{oldValue:o,newValue:r}=this.getUpdateValues(s[t],n,e);this.same(r,o)||(i[t]=r)}const o=[];for(const e in i){const s=i[e];n.only.length?o.push(this.getNotifyOnlyListeners(e,s,n,"update",t)):(o.push(this.getSubscribedListeners(e,s,n,"update",t)),this.canBeNested(s)&&o.push(this.getNestedListeners(e,s,n,"update",t))),n.debug&&this.options.log("Wildcard update",{path:e,newValue:s}),this.pathSet(this.split(e),s,this.data)}let r=[];for(const t of o)r=[...r,...this.notifyListeners(t,r)]}update(t,e,n=de){if(this.isWildcard(t))return this.wildcardUpdate(t,e,n);const s=this.split(t),{oldValue:i,newValue:o}=this.getUpdateValues(this.pathGet(s,this.data),s,e);if(n.debug&&this.options.log(`Updating ${t} ${n.source?`from ${n.source}`:""}`,i,o),this.same(o,i))return o;if(this.pathSet(s,o,this.data),n=Object.assign(Object.assign({},de),n),this.notifyOnly(t,o,n))return o;const r=this.notifySubscribedListeners(t,o,n);return this.canBeNested(o)&&this.notifyNestedListeners(t,o,n,"update",r),o}get(t){return void 0===t||""===t?this.data:this.pathGet(this.split(t),this.data)}debugSubscribe(t,e,n){t.options.debug&&this.options.log("listener subscribed",n,t,e)}debugListener(t,e){(e.eventInfo.options.debug||e.listener.options.debug)&&this.options.log("Listener fired",{time:Date.now()-t,info:e})}debugTime(t){return t.listener.options.debug||t.eventInfo.options.debug?Date.now():0}}
/**
     * Api functions
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0
     */const he="gantt-schedule-timeline-calendar";function pe(t){return t&&"object"==typeof t&&!Array.isArray(t)}function fe(t,...e){const n=e.shift();if(pe(t)&&pe(n))for(const e in n)if(pe(n[e]))void 0===t[e]&&(t[e]={}),t[e]=fe(t[e],n[e]);else if(Array.isArray(n[e])){t[e]=[];for(let s of n[e])pe(s)?t[e].push(fe({},s)):t[e].push(s)}else t[e]=n[e];return e.length?fe(t,...e):t}
/**
     * Gantt-Schedule-Timeline-Calendar
     *
     * @copyright Rafal Pospiech <https://neuronet.io>
     * @author    Rafal Pospiech <neuronet.io@gmail.com>
     * @package   gantt-schedule-timeline-calendar
     * @license   GPL-3.0
     */
const me=t=>{const e=t.state,n=function(t){let e=t.get(),n=[];const s={name:he,debug:!1,log(...t){this.debug&&console.log.call(console,...t)},mergeDeep:fe,getComponentData(t,e){const n={};return n.componentName=t,n.className=this.getClass(t,e),n.action=this.getAction(t),n},getClass(t){let e=`${he}__${t}`;return t===this.name&&(e=this.name),e},allActions:[],getActions(e){this.allActions.includes(e)||this.allActions.push(e);let n=t.get("config.actions."+e);return void 0===n&&(n=[]),n},isItemInViewport:(t,e,n)=>t.time.start>=e&&t.time.start<n||t.time.end>=e&&t.time.end<n,fillEmptyRowValues(t){let n=0;for(const s in t){const i=t[s];i._internal={parents:[],children:[],items:[]},"number"!=typeof i.height&&(i.height=e.config.list.rowHeight),"boolean"!=typeof i.expanded&&(i.expanded=!1),i.top=n,n+=i.height}return t},generateParents(t,e="parentId"){const n={};for(const s of t){const t=void 0!==s[e]?s[e]:"";void 0===n[t]&&(n[t]={}),n[t][s.id]=s}return n},fastTree(t,e,n=[]){const s=t[e.id];if(e._internal.parents=n,void 0===s)return e._internal.children=[],e;""!==e.id&&(n=[...n,e.id]),e._internal.children=Object.values(s);for(const e in s){const i=s[e];this.fastTree(t,i,n)}return e},makeTreeMap(t,e){const n=this.generateParents(e,"rowId");for(const e of t)e._internal.items=void 0!==n[e.id]?Object.values(n[e.id]):[];const s=this.generateParents(t);return this.fastTree(s,{id:"",_internal:{children:[],parents:[],items:[]}})},getFlatTreeMapById(t,e={}){for(const n of t._internal.children)e[n.id]=n,this.getFlatTreeMapById(n,e);return e},flattenTreeMap(t,e=[]){for(const n of t._internal.children)e.push(n.id),this.flattenTreeMap(n,e);return e},getRowsFromMap:(t,e)=>t.map(t=>e[t.id]),getRowsFromIds(t,e){const n=[];for(const s of t)n.push(e[s]);return n},getRowsWithParentsExpanded(t,e,n){const s=[];t:for(const i of t){for(const t of e[i]._internal.parents){if(!n[t].expanded)continue t}s.push(i)}return s},getRowsHeight(t){let e=0;for(let n of t)e+=n.height;return e},getVisibleRowsAndCompensation(e){const n=[];let s=0,i=0;const o=t.get("config.scroll.top"),r=t.get("_internal.height");let a=0,l=0;for(const t of e)if(a=o+r,s+t.height>o&&s<a&&(t.top=i,l=t.top+o-s,i+=t.height,n.push(t)),(s+=t.height)>=a)break;return{visibleRows:n,compensation:l}},normalizeMouseWheelEvent(t){let e=t.deltaX||0,n=t.deltaY||0,s=t.deltaZ||0;const i=t.deltaMode,o=parseInt(getComputedStyle(t.target).getPropertyValue("line-height"));let r=1;switch(i){case 1:r=o;break;case 2:r=window.height}return{x:e*=r,y:n*=r,z:s*=r,event:t}},limitScroll(e,n){if("top"===e){const e=t.get("_internal.list.rowsHeight")-t.get("_internal.height");return n<0?n=0:n>e&&(n=e),n}{const e=t.get("_internal.chart.time.totalViewDurationPx")-t.get("_internal.chart.dimensions.width");return n<0?n=0:n>e&&(n=e),n}},time:ie(t),getScrollBarHeight(){const t=document.createElement("div");t.style.visibility="hidden",t.style.height="100px",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);var e=t.offsetHeight;t.style.overflow="scroll";var n=document.createElement("div");n.style.height="100%",t.appendChild(n);var s=n.offsetHeight;return t.parentNode.removeChild(t),e-s+1},destroy(){e=void 0;for(const t of n)t();n=[],s.debug&&delete window.state}};return s.debug&&(window.state=t,window.api=s),s}(e),s={components:{Main:Rt},scrollBarHeight:17,height:0,treeMap:{},flatTreeMap:[],flatTreeMapById:{},list:{expandedHeight:0,visibleRows:[],rows:{},width:0},dimensions:{width:0,height:0},chart:{dimensions:{width:0,innerWidth:0},visibleItems:[],time:{dates:{},timePerPixel:0,firstTaskTime:0,lastTaskTime:0,totalViewDurationMs:0,totalViewDurationPx:0,leftGlobal:0,rightGlobal:0,leftPx:0,rightPx:0,leftInner:0,rightInner:0,maxWidth:{}}},elements:{}};return"boolean"==typeof t.debug&&t.debug&&(window.state=e),e.update("",t=>({config:t.config,_internal:s})),{state:e,app:ht(e,n).createApp(Rt,t.element)}};return me.api={name:he,stateFromConfig:function(t){const e=ne(),n=function(t,e){const n=fe({},e.actions),s=fe({},t.actions);let i=[...Object.keys(n),...Object.keys(s)];i=i.filter(t=>i.includes(t));const o={};for(const t of i)o[t]=[],void 0!==n[t]&&Array.isArray(n[t])&&(o[t]=[...n[t]]),void 0!==s[t]&&Array.isArray(s[t])&&(o[t]=[...o[t],...s[t]]);return delete t.actions,delete e.actions,o}(t,e),s={config:fe({},e,t)};return s.config.actions=n,new ue(s,{delimeter:"."})},mergeDeep:fe,date:t=>t?se(t):se(),dayjs:se},me}));
//# sourceMappingURL=index.umd.js.map
