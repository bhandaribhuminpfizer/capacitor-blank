"use strict";(self.webpackChunktabs=self.webpackChunktabs||[]).push([[1709],{1709:function(i,t,e){e.r(t),e.d(t,{ion_img:function(){return n}});var o=e(1027),r=e(2684),s=e(1572);const n=class{constructor(i){(0,o.r)(this,i),this.ionImgWillLoad=(0,o.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,o.e)(this,"ionImgDidLoad",7),this.ionError=(0,o.e)(this,"ionError",7),this.inheritedAttributes={},this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()}}srcChanged(){this.addIO()}componentWillLoad(){this.inheritedAttributes=(0,s.j)(this.el,["draggable"])}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(i=>{i[i.length-1].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){const{loadSrc:i,alt:t,onLoad:e,loadError:s,inheritedAttributes:n}=this,{draggable:d}=n;return(0,o.h)(o.H,{class:(0,r.b)(this)},(0,o.h)("img",{decoding:"async",src:i,alt:t,onLoad:e,onError:s,part:"image",draggable:h(d)}))}get el(){return(0,o.i)(this)}static get watchers(){return{src:["srcChanged"]}}},h=i=>{switch(i){case"true":return!0;case"false":return!1;default:return}};n.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);