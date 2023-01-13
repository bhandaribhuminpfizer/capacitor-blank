!function(){"use strict";function t(t,r,e){return(r=n(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function r(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(P){l=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var i=r&&r.prototype instanceof h?r:h,a=Object.create(i.prototype),s=new j(n||[]);return o(a,"_invoke",{value:k(t,e,s)}),a}function d(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var p={};function h(){}function f(){}function g(){}var m={};l(m,a,function(){return this});var b=Object.getPrototypeOf,v=b&&b(b(O([])));v&&v!==e&&n.call(v,a)&&(m=v);var x=g.prototype=h.prototype=Object.create(m);function y(t){["next","throw","return"].forEach(function(r){l(t,r,function(t){return this._invoke(r,t)})})}function w(t,r){function e(o,i,a,s){var c=d(t[o],t,i);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?r.resolve(u.__await).then(function(t){e("next",t,a,s)},function(t){e("throw",t,a,s)}):r.resolve(u).then(function(t){l.value=t,a(l)},function(t){return e("throw",t,a,s)})}s(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r(function(r,o){e(t,n,r,o)})}return i=i?i.then(o,o):o()}})}function k(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return z()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var s=E(a,e);if(s){if(s===p)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=d(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=d(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:z}}function z(){return{value:void 0,done:!0}}return f.prototype=g,o(x,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:f,configurable:!0}),f.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===f||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},y(w.prototype),l(w.prototype,s,function(){return this}),t.AsyncIterator=w,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new w(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},y(x),l(x,c,"Generator"),l(x,a,function(){return this}),l(x,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function e(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(t){var r=function(t,r){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof r?r:String(r)}(self.webpackChunktabs=self.webpackChunktabs||[]).push([[801],{881:function(n,o,i){i.r(o),i.d(o,{ion_toast:function(){return v}});var a=i(8239),s=i(1027),c=i(2684),l=i(3504),u=i(8122),d=i(2187),p=i(2971),h=i(1572);i(7857);var f=function(t,r){var e=(0,p.c)(),n=(0,p.c)(),o=(0,h.g)(t).querySelector(".toast-wrapper");switch(n.addElement(o),r){case"top":n.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":var i=Math.floor(t.clientHeight/2-o.clientHeight/2);o.style.top="".concat(i,"px"),n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return e.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)},g=function(t,r){var e=(0,p.c)(),n=(0,p.c)(),o=(0,h.g)(t).querySelector(".toast-wrapper");switch(n.addElement(o),r){case"top":n.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return e.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},m=function(t,r){var e=(0,p.c)(),n=(0,p.c)(),o=(0,h.g)(t).querySelector(".toast-wrapper");switch(n.addElement(o),r){case"top":o.style.top="calc(8px + var(--ion-safe-area-top, 0px))",n.fromTo("opacity",.01,1);break;case"middle":var i=Math.floor(t.clientHeight/2-o.clientHeight/2);o.style.top="".concat(i,"px"),n.fromTo("opacity",.01,1);break;default:o.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",n.fromTo("opacity",.01,1)}return e.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n)},b=function(t){var r=(0,p.c)(),e=(0,p.c)(),n=(0,h.g)(t).querySelector(".toast-wrapper");return e.addElement(n).fromTo("opacity",.99,0),r.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(e)},v=function(){function n(t){var r=this;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),(0,s.r)(this,t),this.didPresent=(0,s.e)(this,"ionToastDidPresent",7),this.willPresent=(0,s.e)(this,"ionToastWillPresent",7),this.willDismiss=(0,s.e)(this,"ionToastWillDismiss",7),this.didDismiss=(0,s.e)(this,"ionToastDidDismiss",7),this.presented=!1,this.duration=c.c.getNumber("toastDuration",0),this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=function(t){if((0,l.i)(t.detail.role)){var e=r.getButtons().find(function(t){return"cancel"===t.role});r.callButtonHandler(e)}}}var o,i,p;return o=n,(i=[{key:"connectedCallback",value:function(){(0,l.e)(this.el)}},{key:"present",value:function(){var t=this;return(0,a.Z)(r().mark(function e(){return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,l.d)(t,"toastEnter",f,m,t.position);case 2:t.duration>0&&(t.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},t.duration));case 3:case"end":return r.stop()}},e)}))()}},{key:"dismiss",value:function(t,r){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,l.f)(this,t,r,"toastLeave",g,b,this.position)}},{key:"onDidDismiss",value:function(){return(0,l.g)(this.el,"ionToastDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,l.g)(this.el,"ionToastWillDismiss")}},{key:"getButtons",value:function(){return this.buttons?this.buttons.map(function(t){return"string"==typeof t?{text:t}:t}):[]}},{key:"buttonClick",value:function(t){var e=this;return(0,a.Z)(r().mark(function n(){var o;return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.role,r.t0=(0,l.i)(o),r.t0){r.next=6;break}return r.next=5,e.callButtonHandler(t);case 5:r.t0=r.sent;case 6:if(!r.t0){r.next=10;break}r.t1=e.dismiss(void 0,o),r.next=11;break;case 10:r.t1=Promise.resolve();case 11:return r.abrupt("return",r.t1);case 12:case"end":return r.stop()}},n)}))()}},{key:"callButtonHandler",value:function(t){return(0,a.Z)(r().mark(function e(){return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(null==t?void 0:t.handler)){r.next=13;break}return r.prev=1,r.t0=!1,r.next=5,(0,l.s)(t.handler);case 5:if(r.t1=r.sent,r.t0!==r.t1){r.next=8;break}return r.abrupt("return",!1);case 8:r.next=13;break;case 10:r.prev=10,r.t2=r.catch(1),console.error(r.t2);case 13:return r.abrupt("return",!0);case 14:case"end":return r.stop()}},e,null,[[1,10]])}))()}},{key:"renderButtons",value:function(r,e){var n=this;if(0!==r.length){var o=(0,c.b)(this);return(0,s.h)("div",{class:t({"toast-button-group":!0},"toast-button-group-".concat(e),!0)},r.map(function(t){return(0,s.h)("button",{type:"button",class:x(t),tabIndex:0,onClick:function(){return n.buttonClick(t)},part:"button"},(0,s.h)("div",{class:"toast-button-inner"},t.icon&&(0,s.h)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-button-icon"}),t.text),"md"===o&&(0,s.h)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))}))}}},{key:"render",value:function(){var r=this.getButtons(),e=r.filter(function(t){return"start"===t.side}),n=r.filter(function(t){return"start"!==t.side}),o=(0,c.b)(this),i=t({"toast-wrapper":!0},"toast-".concat(this.position),!0);return(0,s.h)(s.H,Object.assign({"aria-live":"polite","aria-atomic":"true",role:r.length>0?"dialog":"status",tabindex:"-1"},this.htmlAttributes,{style:{zIndex:"".concat(6e4+this.overlayIndex)},class:(0,d.c)(this.color,Object.assign(Object.assign(t({},o,!0),(0,d.g)(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,s.h)("div",{class:i},(0,s.h)("div",{class:"toast-container",part:"container"},this.renderButtons(e,"start"),void 0!==this.icon&&(0,s.h)("ion-icon",{class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),(0,s.h)("div",{class:"toast-content"},void 0!==this.header&&(0,s.h)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&(0,s.h)("div",{class:"toast-message",part:"message",innerHTML:(0,u.s)(this.message)})),this.renderButtons(n,"end"))))}},{key:"el",get:function(){return(0,s.i)(this)}}])&&e(o.prototype,i),p&&e(o,p),Object.defineProperty(o,"prototype",{writable:!1}),n}(),x=function(r){var e;return Object.assign((t(e={"toast-button":!0,"toast-button-icon-only":void 0!==r.icon&&void 0===r.text},"toast-button-".concat(r.role),void 0!==r.role),t(e,"ion-focusable",!0),t(e,"ion-activatable",!0),e),(0,d.g)(r.cssClass))};v.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-icon{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-icon{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},2187:function(e,n,o){o.d(n,{c:function(){return c},g:function(){return l},h:function(){return s},o:function(){return d}});var i,a=o(8239),s=function(t,r){return null!==r.closest(t)},c=function(r,e){return"string"==typeof r&&r.length>0?Object.assign(t({"ion-color":!0},"ion-color-".concat(r),!0),e):e},l=function(t){var r={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return r[t]=!0}),r},u=/^[a-z][a-z0-9+\-.]*:/,d=(i=(0,a.Z)(r().mark(function t(e,n,o,i){var a;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||u.test(e)){t.next=4;break}if(!(a=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),a.push(e,o,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)})),function(t,r,e,n){return i.apply(this,arguments)})}}])}();