/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.37.0.
 * Original file: /npm/simplebar-core@1.3.0/dist/index.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import e from"lodash/debounce.js";import t from"lodash/throttle.js";var i=function(){return i=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},i.apply(this,arguments)};function s(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:window}function l(e){return e&&e.ownerDocument?e.ownerDocument:document}var r=function(e){return Array.prototype.reduce.call(e,(function(e,t){var i=t.name.match(/data-simplebar-(.+)/);if(i){var s=i[1].replace(/\W+(.)/g,(function(e,t){return t.toUpperCase()}));switch(t.value){case"true":e[s]=!0;break;case"false":e[s]=!1;break;case void 0:e[s]=!0;break;default:e[s]=t.value}}return e}),{})};function o(e,t){var i;e&&(i=e.classList).add.apply(i,t.split(" "))}function n(e,t){e&&t.split(" ").forEach((function(t){e.classList.remove(t)}))}function a(e){return".".concat(e.split(" ").join("."))}var c=!("undefined"==typeof window||!window.document||!window.document.createElement),h=Object.freeze({__proto__:null,addClasses:o,canUseDOM:c,classNamesToQuery:a,getElementDocument:l,getElementWindow:s,getOptions:r,removeClasses:n}),d=null,u=null;function p(){if(null===d){if("undefined"==typeof document)return d=0;var e=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),e.appendChild(t);var i=t.getBoundingClientRect().right;e.removeChild(t),d=i}return d}c&&window.addEventListener("resize",(function(){u!==window.devicePixelRatio&&(u=window.devicePixelRatio,d=null)}));var v=s,f=l,g=r,b=o,x=n,m=a,y=function(){function s(l,r){void 0===r&&(r={});var o=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.isDragging=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var e=v(o.el);o.scrollXTicking||(e.requestAnimationFrame(o.scrollX),o.scrollXTicking=!0),o.scrollYTicking||(e.requestAnimationFrame(o.scrollY),o.scrollYTicking=!0),o.isScrolling||(o.isScrolling=!0,b(o.el,o.classNames.scrolling)),o.showScrollbar("x"),o.showScrollbar("y"),o.onStopScrolling()},this.scrollX=function(){o.axis.x.isOverflowing&&o.positionScrollbar("x"),o.scrollXTicking=!1},this.scrollY=function(){o.axis.y.isOverflowing&&o.positionScrollbar("y"),o.scrollYTicking=!1},this._onStopScrolling=function(){x(o.el,o.classNames.scrolling),o.options.autoHide&&(o.hideScrollbar("x"),o.hideScrollbar("y")),o.isScrolling=!1},this.onMouseEnter=function(){o.isMouseEntering||(b(o.el,o.classNames.mouseEntered),o.showScrollbar("x"),o.showScrollbar("y"),o.isMouseEntering=!0),o.onMouseEntered()},this._onMouseEntered=function(){x(o.el,o.classNames.mouseEntered),o.options.autoHide&&(o.hideScrollbar("x"),o.hideScrollbar("y")),o.isMouseEntering=!1},this._onMouseMove=function(e){o.mouseX=e.clientX,o.mouseY=e.clientY,(o.axis.x.isOverflowing||o.axis.x.forceVisible)&&o.onMouseMoveForAxis("x"),(o.axis.y.isOverflowing||o.axis.y.forceVisible)&&o.onMouseMoveForAxis("y")},this.onMouseLeave=function(){o.onMouseMove.cancel(),(o.axis.x.isOverflowing||o.axis.x.forceVisible)&&o.onMouseLeaveForAxis("x"),(o.axis.y.isOverflowing||o.axis.y.forceVisible)&&o.onMouseLeaveForAxis("y"),o.mouseX=-1,o.mouseY=-1},this._onWindowResize=function(){o.scrollbarWidth=o.getScrollbarWidth(),o.hideNativeScrollbar()},this.onPointerEvent=function(e){var t,i;o.axis.x.track.el&&o.axis.y.track.el&&o.axis.x.scrollbar.el&&o.axis.y.scrollbar.el&&(o.axis.x.track.rect=o.axis.x.track.el.getBoundingClientRect(),o.axis.y.track.rect=o.axis.y.track.el.getBoundingClientRect(),(o.axis.x.isOverflowing||o.axis.x.forceVisible)&&(t=o.isWithinBounds(o.axis.x.track.rect)),(o.axis.y.isOverflowing||o.axis.y.forceVisible)&&(i=o.isWithinBounds(o.axis.y.track.rect)),(t||i)&&(e.stopPropagation(),"pointerdown"===e.type&&"touch"!==e.pointerType&&(t&&(o.axis.x.scrollbar.rect=o.axis.x.scrollbar.el.getBoundingClientRect(),o.isWithinBounds(o.axis.x.scrollbar.rect)?o.onDragStart(e,"x"):o.onTrackClick(e,"x")),i&&(o.axis.y.scrollbar.rect=o.axis.y.scrollbar.el.getBoundingClientRect(),o.isWithinBounds(o.axis.y.scrollbar.rect)?o.onDragStart(e,"y"):o.onTrackClick(e,"y")))))},this.drag=function(e){var t,i,l,r,n,a,c,h,d,u,p;if(o.draggedAxis&&o.contentWrapperEl){var v=o.axis[o.draggedAxis].track,f=null!==(i=null===(t=v.rect)||void 0===t?void 0:t[o.axis[o.draggedAxis].sizeAttr])&&void 0!==i?i:0,g=o.axis[o.draggedAxis].scrollbar,b=null!==(r=null===(l=o.contentWrapperEl)||void 0===l?void 0:l[o.axis[o.draggedAxis].scrollSizeAttr])&&void 0!==r?r:0,x=parseInt(null!==(a=null===(n=o.elStyles)||void 0===n?void 0:n[o.axis[o.draggedAxis].sizeAttr])&&void 0!==a?a:"0px",10);e.preventDefault(),e.stopPropagation();var m=("y"===o.draggedAxis?e.pageY:e.pageX)-(null!==(h=null===(c=v.rect)||void 0===c?void 0:c[o.axis[o.draggedAxis].offsetAttr])&&void 0!==h?h:0)-o.axis[o.draggedAxis].dragOffset,y=(m="x"===o.draggedAxis&&o.isRtl?(null!==(u=null===(d=v.rect)||void 0===d?void 0:d[o.axis[o.draggedAxis].sizeAttr])&&void 0!==u?u:0)-g.size-m:m)/(f-g.size)*(b-x);"x"===o.draggedAxis&&o.isRtl&&(y=(null===(p=s.getRtlHelpers())||void 0===p?void 0:p.isScrollingToNegative)?-y:y),o.contentWrapperEl[o.axis[o.draggedAxis].scrollOffsetAttr]=y}},this.onEndDrag=function(e){o.isDragging=!1;var t=f(o.el),i=v(o.el);e.preventDefault(),e.stopPropagation(),x(o.el,o.classNames.dragging),o.onStopScrolling(),t.removeEventListener("mousemove",o.drag,!0),t.removeEventListener("mouseup",o.onEndDrag,!0),o.removePreventClickId=i.setTimeout((function(){t.removeEventListener("click",o.preventClick,!0),t.removeEventListener("dblclick",o.preventClick,!0),o.removePreventClickId=null}))},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=l,this.options=i(i({},s.defaultOptions),r),this.classNames=i(i({},s.defaultOptions.classNames),r.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},"object"!=typeof this.el||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=t(this._onMouseMove,64),this.onWindowResize=e(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=e(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=e(this._onMouseEntered,this.stopScrollDelay),this.init()}return s.getRtlHelpers=function(){if(s.rtlHelpers)return s.rtlHelpers;var e=document.createElement("div");e.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var t=e.firstElementChild,i=null==t?void 0:t.firstElementChild;if(!i)return null;document.body.appendChild(t),t.scrollLeft=0;var l=s.getOffset(t),r=s.getOffset(i);t.scrollLeft=-999;var o=s.getOffset(i);return document.body.removeChild(t),s.rtlHelpers={isScrollOriginAtZero:l.left!==r.left,isScrollingToNegative:r.left!==o.left},s.rtlHelpers},s.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:p()}catch(e){return p()}},s.getOffset=function(e){var t=e.getBoundingClientRect(),i=f(e),s=v(e);return{top:t.top+(s.pageYOffset||i.documentElement.scrollTop),left:t.left+(s.pageXOffset||i.documentElement.scrollLeft)}},s.prototype.init=function(){c&&(this.initDOM(),this.rtlHelpers=s.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},s.prototype.initDOM=function(){var e,t;this.wrapperEl=this.el.querySelector(m(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(m(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(m(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(m(this.classNames.offset)),this.maskEl=this.el.querySelector(m(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,m(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(m(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(m(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(m(this.classNames.track)).concat(m(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(m(this.classNames.track)).concat(m(this.classNames.vertical))),this.axis.x.scrollbar.el=(null===(e=this.axis.x.track.el)||void 0===e?void 0:e.querySelector(m(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=(null===(t=this.axis.y.track.el)||void 0===t?void 0:t.querySelector(m(this.classNames.scrollbar)))||null,this.options.autoHide||(b(this.axis.x.scrollbar.el,this.classNames.visible),b(this.axis.y.scrollbar.el,this.classNames.visible))},s.prototype.initListeners=function(){var e,t=this,i=v(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),null===(e=this.contentWrapperEl)||void 0===e||e.addEventListener("scroll",this.onScroll),i.addEventListener("resize",this.onWindowResize),this.contentEl){if(window.ResizeObserver){var s=!1,l=i.ResizeObserver||ResizeObserver;this.resizeObserver=new l((function(){s&&i.requestAnimationFrame((function(){t.recalculate()}))})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),i.requestAnimationFrame((function(){s=!0}))}this.mutationObserver=new i.MutationObserver((function(){i.requestAnimationFrame((function(){t.recalculate()}))})),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},s.prototype.recalculate=function(){if(this.heightAutoObserverEl&&this.contentEl&&this.contentWrapperEl&&this.wrapperEl&&this.placeholderEl){var e=v(this.el);this.elStyles=e.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var t=this.contentEl.offsetWidth,i=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||t>0,l=this.contentWrapperEl.offsetWidth,r=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var n=this.contentEl.scrollHeight,a=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=i?"auto":"100%",this.placeholderEl.style.width=s?"".concat(t||a,"px"):"auto",this.placeholderEl.style.height="".concat(n,"px");var c=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=0!==t&&a>t,this.axis.y.isOverflowing=n>c,this.axis.x.isOverflowing="hidden"!==r&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==o&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,d=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&a>l-d,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&n>c-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},s.prototype.getScrollbarSize=function(e){var t,i;if(void 0===e&&(e="y"),!this.axis[e].isOverflowing||!this.contentEl)return 0;var s,l=this.contentEl[this.axis[e].scrollSizeAttr],r=null!==(i=null===(t=this.axis[e].track.el)||void 0===t?void 0:t[this.axis[e].offsetSizeAttr])&&void 0!==i?i:0,o=r/l;return s=Math.max(~~(o*r),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(s=Math.min(s,this.options.scrollbarMaxSize)),s},s.prototype.positionScrollbar=function(e){var t,i,l;void 0===e&&(e="y");var r=this.axis[e].scrollbar;if(this.axis[e].isOverflowing&&this.contentWrapperEl&&r.el&&this.elStyles){var o=this.contentWrapperEl[this.axis[e].scrollSizeAttr],n=(null===(t=this.axis[e].track.el)||void 0===t?void 0:t[this.axis[e].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[e].sizeAttr],10),c=this.contentWrapperEl[this.axis[e].scrollOffsetAttr];c="x"===e&&this.isRtl&&(null===(i=s.getRtlHelpers())||void 0===i?void 0:i.isScrollOriginAtZero)?-c:c,"x"===e&&this.isRtl&&(c=(null===(l=s.getRtlHelpers())||void 0===l?void 0:l.isScrollingToNegative)?c:-c);var h=c/(o-a),d=~~((n-r.size)*h);d="x"===e&&this.isRtl?-d+(n-r.size):d,r.el.style.transform="x"===e?"translate3d(".concat(d,"px, 0, 0)"):"translate3d(0, ".concat(d,"px, 0)")}},s.prototype.toggleTrackVisibility=function(e){void 0===e&&(e="y");var t=this.axis[e].track.el,i=this.axis[e].scrollbar.el;t&&i&&this.contentWrapperEl&&(this.axis[e].isOverflowing||this.axis[e].forceVisible?(t.style.visibility="visible",this.contentWrapperEl.style[this.axis[e].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(e))):(t.style.visibility="hidden",this.contentWrapperEl.style[this.axis[e].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(e))),this.axis[e].isOverflowing?i.style.display="block":i.style.display="none")},s.prototype.showScrollbar=function(e){void 0===e&&(e="y"),this.axis[e].isOverflowing&&!this.axis[e].scrollbar.isVisible&&(b(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!0)},s.prototype.hideScrollbar=function(e){void 0===e&&(e="y"),this.isDragging||this.axis[e].isOverflowing&&this.axis[e].scrollbar.isVisible&&(x(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!1)},s.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},s.prototype.onMouseMoveForAxis=function(e){void 0===e&&(e="y");var t=this.axis[e];t.track.el&&t.scrollbar.el&&(t.track.rect=t.track.el.getBoundingClientRect(),t.scrollbar.rect=t.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(t.track.rect)?(this.showScrollbar(e),b(t.track.el,this.classNames.hover),this.isWithinBounds(t.scrollbar.rect)?b(t.scrollbar.el,this.classNames.hover):x(t.scrollbar.el,this.classNames.hover)):(x(t.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)))},s.prototype.onMouseLeaveForAxis=function(e){void 0===e&&(e="y"),x(this.axis[e].track.el,this.classNames.hover),x(this.axis[e].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)},s.prototype.onDragStart=function(e,t){var i;void 0===t&&(t="y"),this.isDragging=!0;var s=f(this.el),l=v(this.el),r=this.axis[t].scrollbar,o="y"===t?e.pageY:e.pageX;this.axis[t].dragOffset=o-((null===(i=r.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])||0),this.draggedAxis=t,b(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(l.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},s.prototype.onTrackClick=function(e,t){var i,s,l,r,o=this;void 0===t&&(t="y");var n=this.axis[t];if(this.options.clickOnTrack&&n.scrollbar.el&&this.contentWrapperEl){e.preventDefault();var a=v(this.el);this.axis[t].scrollbar.rect=n.scrollbar.el.getBoundingClientRect();var c=null!==(s=null===(i=this.axis[t].scrollbar.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])&&void 0!==s?s:0,h=parseInt(null!==(r=null===(l=this.elStyles)||void 0===l?void 0:l[this.axis[t].sizeAttr])&&void 0!==r?r:"0px",10),d=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],u=("y"===t?this.mouseY-c:this.mouseX-c)<0?-1:1,p=-1===u?d-h:d+h,f=function(){o.contentWrapperEl&&(-1===u?d>p&&(d-=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=d,a.requestAnimationFrame(f)):d<p&&(d+=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=d,a.requestAnimationFrame(f)))};f()}},s.prototype.getContentElement=function(){return this.contentEl},s.prototype.getScrollElement=function(){return this.contentWrapperEl},s.prototype.removeListeners=function(){var e=v(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},s.prototype.unMount=function(){this.removeListeners()},s.prototype.isWithinBounds=function(e){return this.mouseX>=e.left&&this.mouseX<=e.left+e.width&&this.mouseY>=e.top&&this.mouseY<=e.top+e.height},s.prototype.findChild=function(e,t){var i=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return Array.prototype.filter.call(e.children,(function(e){return i.call(e,t)}))[0]},s.rtlHelpers=null,s.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",tabIndex:0,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},s.getOptions=g,s.helpers=h,s}();export{y as default};
