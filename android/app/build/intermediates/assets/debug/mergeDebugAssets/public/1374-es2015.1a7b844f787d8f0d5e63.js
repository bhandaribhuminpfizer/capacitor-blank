"use strict";(self.webpackChunktabs=self.webpackChunktabs||[]).push([[1374],{1374:function(e,r,n){n.r(r),n.d(r,{ion_spinner:function(){return o}});var t=n(1027),s=n(2684),i=n(2187),a=n(7577);const o=class{constructor(e){(0,t.r)(this,e),this.paused=!1}getName(){const e=this.name||s.c.get("spinner"),r=(0,s.b)(this);return e||("ios"===r?"lines":"circular")}render(){var e;const r=this,n=(0,s.b)(r),o=r.getName(),p=null!==(e=a.S[o])&&void 0!==e?e:a.S.lines,f="number"==typeof r.duration&&r.duration>10?r.duration:p.dur,u=[];if(void 0!==p.circles)for(let t=0;t<p.circles;t++)u.push(l(p,f,t,p.circles));else if(void 0!==p.lines)for(let t=0;t<p.lines;t++)u.push(c(p,f,t,p.lines));return(0,t.h)(t.H,{class:(0,i.c)(r.color,{[n]:!0,[`spinner-${o}`]:!0,"spinner-paused":r.paused||s.c.getBoolean("_testing")}),role:"progressbar",style:p.elmDuration?{animationDuration:f+"ms"}:{}},u)}},l=(e,r,n,s)=>{const i=e.fn(r,n,s);return i.style["animation-duration"]=r+"ms",(0,t.h)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},(0,t.h)("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:e.elmDuration?{animationDuration:r+"ms"}:{}}))},c=(e,r,n,s)=>{const i=e.fn(r,n,s);return i.style["animation-duration"]=r+"ms",(0,t.h)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},(0,t.h)("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};o.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},2187:function(e,r,n){n.d(r,{c:function(){return i},g:function(){return a},h:function(){return s},o:function(){return l}});var t=n(8239);const s=(e,r)=>null!==r.closest(e),i=(e,r)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},r):r,a=e=>{const r={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>r[e]=!0),r},o=/^[a-z][a-z0-9+\-.]*:/,l=function(){var e=(0,t.Z)(function*(e,r,n,t){if(null!=e&&"#"!==e[0]&&!o.test(e)){const s=document.querySelector("ion-router");if(s)return null!=r&&r.preventDefault(),s.push(e,n,t)}return!1});return function(r,n,t,s){return e.apply(this,arguments)}}()}}]);