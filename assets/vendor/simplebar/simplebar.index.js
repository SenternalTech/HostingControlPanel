/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.37.0.
 * Original file: /npm/simplebar@6.3.0/dist/index.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import t from"simplebar-core";var e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},e(t,i)};var i=t.helpers,n=i.getOptions,s=i.addClasses,a=i.canUseDOM,r=function(i){function a(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=i.apply(this,t)||this;return a.instances.set(t[0],n),n}return function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}(a,i),a.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),(function(t){"init"===t.getAttribute("data-simplebar")||a.instances.has(t)||new a(t,n(t.attributes))}))},a.removeObserver=function(){var t;null===(t=a.globalObserver)||void 0===t||t.disconnect()},a.prototype.initDOM=function(){var e,i,n,a=this;if(!Array.prototype.filter.call(this.el.children,(function(t){return t.classList.contains(a.classNames.wrapper)})).length){for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),s(this.wrapperEl,this.classNames.wrapper),s(this.contentWrapperEl,this.classNames.contentWrapper),s(this.offsetEl,this.classNames.offset),s(this.maskEl,this.classNames.mask),s(this.contentEl,this.classNames.contentEl),s(this.placeholderEl,this.classNames.placeholder),s(this.heightAutoObserverWrapperEl,this.classNames.heightAutoObserverWrapperEl),s(this.heightAutoObserverEl,this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl),null===(e=this.contentWrapperEl)||void 0===e||e.setAttribute("tabindex",this.options.tabIndex.toString()),null===(i=this.contentWrapperEl)||void 0===i||i.setAttribute("role","region"),null===(n=this.contentWrapperEl)||void 0===n||n.setAttribute("aria-label",this.options.ariaLabel)}if(!this.axis.x.track.el||!this.axis.y.track.el){var r=document.createElement("div"),o=document.createElement("div");s(r,this.classNames.track),s(o,this.classNames.scrollbar),r.appendChild(o),this.axis.x.track.el=r.cloneNode(!0),s(this.axis.x.track.el,this.classNames.horizontal),this.axis.y.track.el=r.cloneNode(!0),s(this.axis.y.track.el,this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}t.prototype.initDOM.call(this),this.el.setAttribute("data-simplebar","init")},a.prototype.unMount=function(){t.prototype.unMount.call(this),a.instances.delete(this.el)},a.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(a.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},a.handleMutations=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?!a.instances.has(t)&&document.documentElement.contains(t)&&new a(t,n(t.attributes)):t.querySelectorAll("[data-simplebar]").forEach((function(t){"init"!==t.getAttribute("data-simplebar")&&!a.instances.has(t)&&document.documentElement.contains(t)&&new a(t,n(t.attributes))})))})),t.removedNodes.forEach((function(t){var e;1===t.nodeType&&("init"===t.getAttribute("data-simplebar")?!document.documentElement.contains(t)&&(null===(e=a.instances.get(t))||void 0===e||e.unMount()):Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'),(function(t){var e;!document.documentElement.contains(t)&&(null===(e=a.instances.get(t))||void 0===e||e.unMount())})))}))}))},a.instances=new WeakMap,a}(t);a&&r.initHtmlApi();export{r as default};
