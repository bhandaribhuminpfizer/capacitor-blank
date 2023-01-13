!function(){"use strict";function e(e,t,o){return(t=r(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,r(n.key),n)}}function r(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function o(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function p(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(I){p=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var i=t&&t.prototype instanceof f?t:f,a=Object.create(i.prototype),s=new L(o||[]);return n(a,"_invoke",{value:k(e,r,s)}),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(I){return{type:"throw",arg:I}}}e.wrap=l;var d={};function f(){}function h(){}function v(){}var g={};p(g,a,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(D([])));y&&y!==t&&r.call(y,a)&&(g=y);var b=v.prototype=f.prototype=Object.create(g);function w(e){["next","throw","return"].forEach(function(t){p(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){function o(n,i,a,s){var c=u(e[n],e,i);if("throw"!==c.type){var p=c.arg,l=p.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then(function(e){o("next",e,a,s)},function(e){o("throw",e,a,s)}):t.resolve(l).then(function(e){p.value=e,a(p)},function(e){return o("throw",e,a,s)})}s(c.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t(function(t,n){o(e,r,t,n)})}return i=i?i.then(n,n):n()}})}function k(e,t,r){var o="suspendedStart";return function(n,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw i;return S()}for(r.method=n,r.arg=i;;){var a=r.delegate;if(a){var s=P(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=u(e,t,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}function P(e,t){var r=t.method,o=e.iterator[r];if(void 0===o)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,P(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var n=u(o,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function D(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,n=function t(){for(;++o<e.length;)if(r.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=p(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,p(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(x.prototype),p(x.prototype,s,function(){return this}),e.AsyncIterator=x,e.async=function(t,r,o,n,i){void 0===i&&(i=Promise);var a=new x(l(t,r,o,n),i);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},w(b),p(b,c,"Generator"),p(b,a,function(){return this}),p(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=D,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(r,o){return a.type="throw",a.arg=e,t.next=r,o&&(t.method="next",t.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;E(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:D(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}(self.webpackChunktabs=self.webpackChunktabs||[]).push([[3527],{3527:function(r,n,i){i.r(n),i.d(n,{ion_popover:function(){return C}});var a=i(8239),s=i(1027),c=i(2684),p=i(67),l=i(1572),u=i(3504),d=i(2187),f=i(8868),h=i(2971);i(7857);var v=function(e,t,r){var o=t.getBoundingClientRect(),n=o.height,i=o.width;return"cover"===e&&r&&(i=r.getBoundingClientRect().width),{contentWidth:i,contentHeight:n}},g=function(e,t){return t&&"ION-ITEM"===t.tagName?e.findIndex(function(e){return e===t}):-1},m=function(e){var t=(0,l.g)(e).querySelector("button");t&&(0,l.r)(function(){return t.focus()})},y=function(e,t,r,o,n,i,a,s,c,p,l){var u,d={top:0,left:0,width:0,height:0};if("event"===i){if(!l)return c;d={top:l.clientY,left:l.clientX,width:1,height:1}}else{var f=l,h=p||(null===(u=null==f?void 0:f.detail)||void 0===u?void 0:u.ionShadowTarget)||(null==f?void 0:f.target);if(!h)return c;var v=h.getBoundingClientRect();d={top:v.top,left:v.left,width:v.width,height:v.height}}var g=P(a,d,t,r,o,n,e),m=T(s,a,d,t,r),y=g.top+m.top,w=g.left+m.left,x=k(a,o,n,y,w,t,r,e),E=x.arrowTop,L=x.arrowLeft,D=b(a,s,e);return{top:y,left:w,referenceCoordinates:d,arrowTop:E,arrowLeft:L,originX:D.originX,originY:D.originY}},b=function(e,t,r){switch(e){case"top":return{originX:w(t),originY:"bottom"};case"bottom":return{originX:w(t),originY:"top"};case"left":return{originX:"right",originY:x(t)};case"right":return{originX:"left",originY:x(t)};case"start":return{originX:r?"left":"right",originY:x(t)};case"end":return{originX:r?"right":"left",originY:x(t)}}},w=function(e){switch(e){case"start":return"left";case"center":return"center";case"end":return"right"}},x=function(e){switch(e){case"start":return"top";case"center":return"center";case"end":return"bottom"}},k=function(e,t,r,o,n,i,a,s){var c={arrowTop:o+a/2-t/2,arrowLeft:n+i-t/2},p={arrowTop:o+a/2-t/2,arrowLeft:n-1.5*t};switch(e){case"top":return{arrowTop:o+a,arrowLeft:n+i/2-t/2};case"bottom":return{arrowTop:o-r,arrowLeft:n+i/2-t/2};case"left":return c;case"right":return p;case"start":return s?p:c;case"end":return s?c:p;default:return{arrowTop:0,arrowLeft:0}}},P=function(e,t,r,o,n,i,a){var s={top:t.top,left:t.left-r-n},c={top:t.top,left:t.left+t.width+n};switch(e){case"top":return{top:t.top-o-i,left:t.left};case"right":return c;case"bottom":return{top:t.top+t.height+i,left:t.left};case"left":return s;case"start":return a?c:s;case"end":return a?s:c}},T=function(e,t,r,o,n){switch(e){case"center":return L(t,r,o,n);case"end":return E(t,r,o,n);default:return{top:0,left:0}}},E=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o-t.height),left:0};default:return{top:0,left:-(r-t.width)}}},L=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o/2-t.height/2),left:0};default:return{top:0,left:-(r/2-t.width/2)}}},D=function(e,t,r,o,n,i,a,s,c,p,l,u){var d,f=arguments.length>12&&void 0!==arguments[12]?arguments[12]:0,h=arguments.length>13&&void 0!==arguments[13]?arguments[13]:0,v=arguments.length>14&&void 0!==arguments[14]?arguments[14]:0,g=f,m=h,y=r,b=t,w=p,x=l,k=!1,P=!1,T=u?u.top+u.height:i/2-s/2,E=u?u.height:0,L=!1;return y<o+c?(y=o,k=!0,w="left"):a+o+y+c>n&&(P=!0,y=n-a-o,w="right"),T+E+s>i&&("top"===e||"bottom"===e)&&(T-s>0?(g=(b=Math.max(12,T-s-E-(v-1)))+s,x="bottom",L=!0):d=o),{top:b,left:y,bottom:d,originX:w,originY:x,checkSafeAreaLeft:k,checkSafeAreaRight:P,arrowTop:g,arrowLeft:m,addPopoverBottomClass:L}},S=function(e,t){var r,o=t.event,n=t.size,i=t.trigger,a=t.reference,s=t.side,c=t.align,p=e.ownerDocument,u="rtl"===p.dir,d=p.defaultView.innerWidth,f=p.defaultView.innerHeight,g=(0,l.g)(e),m=g.querySelector(".popover-content"),b=g.querySelector(".popover-arrow"),w=i||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),x=v(n,m,w),k=x.contentWidth,P=x.contentHeight,T=function(e){if(!e)return{arrowWidth:0,arrowHeight:0};var t=e.getBoundingClientRect();return{arrowWidth:t.width,arrowHeight:t.height}}(b),E=T.arrowWidth,L=T.arrowHeight,S=y(u,k,P,E,L,a,s,c,{top:f/2-P/2,left:d/2-k/2,originX:u?"right":"left",originY:"top"},i,o),I="cover"===n?0:5,O="cover"===n?0:25,A=D(s,S.top,S.left,I,d,f,k,P,O,S.originX,S.originY,S.referenceCoordinates,S.arrowTop,S.arrowLeft,L),C=A.originX,N=A.originY,j=A.top,W=A.left,q=A.bottom,Y=A.checkSafeAreaLeft,X=A.checkSafeAreaRight,z=A.arrowTop,_=A.arrowLeft,B=A.addPopoverBottomClass,F=(0,h.c)(),H=(0,h.c)(),V=(0,h.c)();return H.addElement(g.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),V.addElement(g.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),F.easing("ease").duration(100).beforeAddWrite(function(){"cover"===n&&e.style.setProperty("--width","".concat(k,"px")),B&&e.classList.add("popover-bottom"),void 0!==q&&m.style.setProperty("bottom","".concat(q,"px"));var t="".concat(W,"px");Y&&(t="".concat(W,"px + var(--ion-safe-area-left, 0)")),X&&(t="".concat(W,"px - var(--ion-safe-area-right, 0)")),m.style.setProperty("top","calc(".concat(j,"px + var(--offset-y, 0))")),m.style.setProperty("left","calc(".concat(t," + var(--offset-x, 0))")),m.style.setProperty("transform-origin","".concat(N," ").concat(C)),null!==b&&(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;return!(!r&&!o||"top"!==e&&"bottom"!==e&&t)}(s,S.top!==j||S.left!==W,o,i)?(b.style.setProperty("top","calc(".concat(z,"px + var(--offset-y, 0))")),b.style.setProperty("left","calc(".concat(_,"px + var(--offset-x, 0))"))):b.style.setProperty("display","none"))}).addAnimation([H,V])},I=function(e){var t=(0,l.g)(e),r=t.querySelector(".popover-content"),o=t.querySelector(".popover-arrow"),n=(0,h.c)(),i=(0,h.c)(),a=(0,h.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),o&&(o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("display"))}).duration(300).addAnimation([i,a])},O=function(e,t){var r,o=t.event,n=t.size,i=t.trigger,a=t.reference,s=t.side,c=t.align,p=e.ownerDocument,u="rtl"===p.dir,d=p.defaultView.innerWidth,f=p.defaultView.innerHeight,g=(0,l.g)(e),m=g.querySelector(".popover-content"),b=i||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),w=v(n,m,b),x=w.contentWidth,k=w.contentHeight,P=y(u,x,k,0,0,a,s,c,{top:f/2-k/2,left:d/2-x/2,originX:u?"right":"left",originY:"top"},i,o),T="cover"===n?0:12,E=D(s,P.top,P.left,T,d,f,x,k,0,P.originX,P.originY,P.referenceCoordinates),L=E.originX,S=E.originY,I=E.top,O=E.left,A=E.bottom,C=(0,h.c)(),N=(0,h.c)(),j=(0,h.c)(),W=(0,h.c)(),q=(0,h.c)();return N.addElement(g.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),j.addElement(g.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),W.addElement(m).beforeStyles({top:"calc(".concat(I,"px + var(--offset-y, 0px))"),left:"calc(".concat(O,"px + var(--offset-x, 0px))"),"transform-origin":"".concat(S," ").concat(L)}).beforeAddWrite(function(){void 0!==A&&m.style.setProperty("bottom","".concat(A,"px"))}).fromTo("transform","scale(0.8)","scale(1)"),q.addElement(g.querySelector(".popover-viewport")).fromTo("opacity",.01,1),C.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(function(){"cover"===n&&e.style.setProperty("--width","".concat(x,"px")),"bottom"===S&&e.classList.add("popover-bottom")}).addAnimation([N,j,W,q])},A=function(e){var t=(0,l.g)(e),r=t.querySelector(".popover-content"),o=(0,h.c)(),n=(0,h.c)(),i=(0,h.c)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.easing("ease").afterAddWrite(function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")}).duration(150).addAnimation([n,i])},C=function(){function r(e){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(0,s.r)(this,e),this.didPresent=(0,s.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,s.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,s.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,s.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,s.e)(this,"didPresent",7),this.willPresentShorthand=(0,s.e)(this,"willPresent",7),this.willDismissShorthand=(0,s.e)(this,"willDismiss",7),this.didDismissShorthand=(0,s.e)(this,"didDismiss",7),this.ionMount=(0,s.e)(this,"ionMount",7),this.parentPopover=null,this.popoverIndex=j++,this.coreDelegate=(0,p.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.keepContentsMounted=!1,this.onBackdropTap=function(){t.dismiss(void 0,u.B)},this.onLifecycle=function(e){var r=t.usersElement,o=N[e.type];if(r&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(n)}},this.configureTriggerInteraction=function(){var e=t.trigger,r=t.triggerAction,n=t.el,i=t.destroyTriggerInteraction;i&&i();var s=t.triggerEl=void 0!==e?document.getElementById(e):null;!s||(t.destroyTriggerInteraction=function(e,t,r){var n,i=[];switch(t){case"hover":var s;i=[{eventName:"mouseenter",callback:(n=(0,a.Z)(o().mark(function e(t){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),s&&clearTimeout(s),s=setTimeout(function(){(0,l.r)(function(){r.presentFromTrigger(t),s=void 0})},100);case 1:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)})},{eventName:"mouseleave",callback:function(e){s&&clearTimeout(s);var t=e.relatedTarget;!t||t.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,!0)}}];break;case"context-menu":i=[{eventName:"contextmenu",callback:function(e){e.preventDefault(),r.presentFromTrigger(e)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,!0)}}];break;default:i=[{eventName:"click",callback:function(e){return r.presentFromTrigger(e)}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,!0)}}]}return i.forEach(function(t){var r=t.eventName,o=t.callback;return e.addEventListener(r,o)}),e.setAttribute("data-ion-popover-trigger","true"),function(){i.forEach(function(t){var r=t.eventName,o=t.callback;return e.removeEventListener(r,o)}),e.removeAttribute("data-ion-popover-trigger")}}(s,r,n))},this.configureKeyboardInteraction=function(){var e=t.destroyKeyboardInteraction,r=t.el;e&&e(),t.destroyKeyboardInteraction=function(e){var t,r=(t=(0,a.Z)(o().mark(function t(r){var n,i,a,s,c,p,l,u,d;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=document.activeElement,a=[],"ION-POPOVER"!==(s=null===(n=r.target)||void 0===n?void 0:n.tagName)&&"ION-ITEM"!==s){t.next=31;break}try{a=Array.from(e.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(o){}t.t0=r.key,t.next="ArrowLeft"===t.t0?8:"ArrowDown"===t.t0?14:"ArrowUp"===t.t0?18:"Home"===t.t0?22:"End"===t.t0?26:"ArrowRight"===t.t0||" "===t.t0||"Enter"===t.t0?30:31;break;case 8:return t.next=10,e.getParentPopover();case 10:if(t.t1=t.sent,!t.t1){t.next=13;break}e.dismiss(void 0,void 0,!1);case 13:return t.abrupt("break",31);case 14:return r.preventDefault(),c=function(e,t){return e[g(e,t)+1]}(a,i),void 0!==c&&m(c),t.abrupt("break",31);case 18:return r.preventDefault(),p=function(e,t){return e[g(e,t)-1]}(a,i),void 0!==p&&m(p),t.abrupt("break",31);case 22:return r.preventDefault(),void 0!==(l=a[0])&&m(l),t.abrupt("break",31);case 26:return r.preventDefault(),void 0!==(u=a[a.length-1])&&m(u),t.abrupt("break",31);case 30:i&&function(e){return e.hasAttribute("data-ion-popover-trigger")}(i)&&(d=new CustomEvent("ionPopoverActivateTrigger"),i.dispatchEvent(d));case 31:case"end":return t.stop()}},t)})),function(e){return t.apply(this,arguments)});return e.addEventListener("keydown",r),function(){return e.removeEventListener("keydown",r)}}(r)},this.configureDismissInteraction=function(){var e=t.destroyDismissInteraction,r=t.parentPopover,o=t.triggerAction,n=t.triggerEl,i=t.el;!r||!n||(e&&e(),t.destroyDismissInteraction=function(e,t,r,o){var n=[],i=(0,l.g)(o).querySelector(".popover-content");return(n="hover"===t?[{eventName:"mouseenter",callback:function(t){document.elementFromPoint(t.clientX,t.clientY)!==e&&r.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:function(t){t.target.closest("[data-ion-popover-trigger]")!==e?r.dismiss(void 0,void 0,!1):t.stopPropagation()}}]).forEach(function(e){var t=e.eventName,r=e.callback;return i.addEventListener(t,r)}),function(){n.forEach(function(e){var t=e.eventName,r=e.callback;return i.removeEventListener(t,r)})}}(n,o,i,r))}}var n,i,h;return n=r,i=[{key:"onTriggerChange",value:function(){this.configureTriggerInteraction()}},{key:"onIsOpenChange",value:function(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}},{key:"connectedCallback",value:function(){var e=this.configureTriggerInteraction,t=this.el;(0,u.e)(t),e()}},{key:"disconnectedCallback",value:function(){var e=this.destroyTriggerInteraction;e&&e()}},{key:"componentWillLoad",value:function(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-popover-".concat(this.popoverIndex),this.parentPopover=this.el.closest("ion-popover:not(#".concat(this.popoverId,")")),void 0===this.alignment&&(this.alignment="ios"===(0,c.b)(this)?"center":"start")}},{key:"componentDidLoad",value:function(){var e=this,t=this.parentPopover;!0===this.isOpen&&(0,l.r)(function(){return e.present()}),t&&(0,l.a)(t,"ionPopoverWillDismiss",function(){e.dismiss(void 0,void 0,!1)})}},{key:"presentFromTrigger",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return(0,a.Z)(o().mark(function n(){return o().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return r.focusDescendantOnPresent=t,o.next=3,r.present(e);case 3:r.focusDescendantOnPresent=!1;case 4:case"end":return o.stop()}},n)}))()}},{key:"getDelegate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};var t=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:t,delegate:this.workingDelegate=t?this.delegate||this.coreDelegate:this.delegate}}},{key:"present",value:function(e){var t=this;return(0,a.Z)(o().mark(function r(){var n,i,s,c;return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.presented){r.next=2;break}return r.abrupt("return");case 2:if(r.t0=void 0!==t.currentTransition,!r.t0){r.next=6;break}return r.next=6,t.currentTransition;case 6:return n=Object.assign(Object.assign({},t.componentProps),{popover:t.el}),i=t.getDelegate(!0),s=i.inline,c=i.delegate,r.next=9,(0,p.a)(c,t.el,t.component,["popover-viewport"],n,s);case 9:return t.usersElement=r.sent,r.next=12,(0,f.e)(t.usersElement);case 12:return t.keyboardEvents||t.configureKeyboardInteraction(),t.configureDismissInteraction(),t.ionMount.emit(),r.abrupt("return",new Promise(function(r){(0,l.r)(function(){(0,l.r)((0,a.Z)(o().mark(function n(){return o().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t.currentTransition=(0,u.d)(t,"popoverEnter",S,O,{event:e||t.event,size:t.size,trigger:t.triggerEl,reference:t.reference,side:t.side,align:t.alignment}),o.next=3,t.currentTransition;case 3:t.currentTransition=void 0,t.focusDescendantOnPresent&&(0,u.j)(t.el,t.el),r();case 6:case"end":return o.stop()}},n)})))})}));case 16:case"end":return r.stop()}},r)}))()}},{key:"dismiss",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this;return(0,a.Z)(o().mark(function i(){var a,s,c,l,d;return o().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(o.t0=void 0!==n.currentTransition,!o.t0){o.next=4;break}return o.next=4,n.currentTransition;case 4:return a=n.destroyKeyboardInteraction,s=n.destroyDismissInteraction,r&&n.parentPopover&&n.parentPopover.dismiss(e,t,r),n.currentTransition=(0,u.f)(n,e,t,"popoverLeave",I,A,n.event),o.next=8,n.currentTransition;case 8:if(!(c=o.sent)){o.next=14;break}return a&&(a(),n.destroyKeyboardInteraction=void 0),s&&(s(),n.destroyDismissInteraction=void 0),l=n.getDelegate(),d=l.delegate,o.next=14,(0,p.d)(d,n.usersElement);case 14:return o.abrupt("return",(n.currentTransition=void 0,c));case 15:case"end":return o.stop()}},i)}))()}},{key:"getParentPopover",value:function(){var e=this;return(0,a.Z)(o().mark(function t(){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.parentPopover);case 1:case"end":return t.stop()}},t)}))()}},{key:"onDidDismiss",value:function(){return(0,u.g)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,u.g)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var t,r=this,o=(0,c.b)(this),n=this.onLifecycle,i=this.popoverId,a=this.parentPopover,p=this.dismissOnSelect,l=this.side,u=this.arrow,f=this.htmlAttributes,h=(0,c.a)("desktop"),v=u&&!a;return(0,s.h)(s.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},f,{style:{zIndex:"".concat(2e4+this.overlayIndex)},id:i,class:Object.assign(Object.assign({},(0,d.g)(this.cssClass)),(t={},e(t,o,!0),e(t,"popover-translucent",this.translucent),e(t,"overlay-hidden",!0),e(t,"popover-desktop",h),e(t,"popover-side-".concat(l),!0),e(t,"popover-nested",!!a),t)),onIonPopoverDidPresent:n,onIonPopoverWillPresent:n,onIonPopoverWillDismiss:n,onIonPopoverDidDismiss:n,onIonBackdropTap:this.onBackdropTap}),!a&&(0,s.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,s.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:p?function(){return r.dismiss()}:void 0},v&&(0,s.h)("div",{class:"popover-arrow",part:"arrow"}),(0,s.h)("div",{class:"popover-content",part:"content"},(0,s.h)("slot",null))))}},{key:"el",get:function(){return(0,s.i)(this)}}],h=[{key:"watchers",get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}}],i&&t(n.prototype,i),h&&t(n,h),Object.defineProperty(n,"prototype",{writable:!1}),r}(),N={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},j=0;C.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}},2187:function(t,r,n){n.d(r,{c:function(){return c},g:function(){return p},h:function(){return s},o:function(){return u}});var i,a=n(8239),s=function(e,t){return null!==t.closest(e)},c=function(t,r){return"string"==typeof t&&t.length>0?Object.assign(e({"ion-color":!0},"ion-color-".concat(t),!0),r):r},p=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e}):[]}(e).forEach(function(e){return t[e]=!0}),t},l=/^[a-z][a-z0-9+\-.]*:/,u=(i=(0,a.Z)(o().mark(function e(t,r,n,i){var a;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||l.test(t)){e.next=4;break}if(!(a=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=r&&r.preventDefault(),a.push(t,n,i)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}},e)})),function(e,t,r,o){return i.apply(this,arguments)})}}])}();