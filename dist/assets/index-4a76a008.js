(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ts(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Q={},Bt=[],Pe=()=>{},Ac=()=>!1,Oc=/^on[^a-z]/,yr=t=>Oc.test(t),Rs=t=>t.startsWith("onUpdate:"),ie=Object.assign,Cs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kc=Object.prototype.hasOwnProperty,V=(t,e)=>kc.call(t,e),B=Array.isArray,pn=t=>Er(t)==="[object Map]",Nc=t=>Er(t)==="[object Set]",$=t=>typeof t=="function",oe=t=>typeof t=="string",Ss=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",So=t=>Z(t)&&$(t.then)&&$(t.catch),Dc=Object.prototype.toString,Er=t=>Dc.call(t),Mc=t=>Er(t).slice(8,-1),Lc=t=>Er(t)==="[object Object]",Ps=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Jn=Ts(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),br=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xc=/-(\w)/g,Kt=br(t=>t.replace(xc,(e,n)=>n?n.toUpperCase():"")),Uc=/\B([A-Z])/g,Qt=br(t=>t.replace(Uc,"-$1").toLowerCase()),Po=br(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lr=br(t=>t?`on${Po(t)}`:""),bn=(t,e)=>!Object.is(t,e),Yn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ir=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Zr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let oi;const es=()=>oi||(oi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function As(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=oe(r)?Hc(r):As(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(oe(t))return t;if(Z(t))return t}}const Fc=/;(?![^(]*\))/g,Bc=/:([^]+)/,$c=/\/\*[^]*?\*\//g;function Hc(t){const e={};return t.replace($c,"").split(Fc).forEach(n=>{if(n){const r=n.split(Bc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Os(t){let e="";if(oe(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Os(t[n]);r&&(e+=r+" ")}else if(Z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vc=Ts(jc);function Ao(t){return!!t||t===""}let we;class Wc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!e&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=we;try{return we=this,e()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Kc(t,e=we){e&&e.active&&e.effects.push(t)}function zc(){return we}const ks=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Oo=t=>(t.w&dt)>0,ko=t=>(t.n&dt)>0,qc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=dt},Gc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Oo(s)&&!ko(s)?s.delete(t):e[n++]=s,s.w&=~dt,s.n&=~dt}e.length=n}},ts=new WeakMap;let an=0,dt=1;const ns=30;let Ie;const It=Symbol(""),rs=Symbol("");class Ns{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Kc(this,r)}run(){if(!this.active)return this.fn();let e=Ie,n=ct;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ie,Ie=this,ct=!0,dt=1<<++an,an<=ns?qc(this):ai(this),this.fn()}finally{an<=ns&&Gc(this),dt=1<<--an,Ie=this.parent,ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ie===this?this.deferStop=!0:this.active&&(ai(this),this.onStop&&this.onStop(),this.active=!1)}}function ai(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ct=!0;const No=[];function Zt(){No.push(ct),ct=!1}function en(){const t=No.pop();ct=t===void 0?!0:t}function ge(t,e,n){if(ct&&Ie){let r=ts.get(t);r||ts.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ks()),Do(s)}}function Do(t,e){let n=!1;an<=ns?ko(t)||(t.n|=dt,n=!Oo(t)):n=!t.has(Ie),n&&(t.add(Ie),Ie.deps.push(t))}function qe(t,e,n,r,s,i){const o=ts.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&B(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":B(t)?Ps(n)&&c.push(o.get("length")):(c.push(o.get(It)),pn(t)&&c.push(o.get(rs)));break;case"delete":B(t)||(c.push(o.get(It)),pn(t)&&c.push(o.get(rs)));break;case"set":pn(t)&&c.push(o.get(It));break}if(c.length===1)c[0]&&ss(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);ss(ks(a))}}function ss(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&ci(r);for(const r of n)r.computed||ci(r)}function ci(t,e){(t!==Ie||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Jc=Ts("__proto__,__v_isRef,__isVue"),Mo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ss)),Yc=Ds(),Xc=Ds(!1,!0),Qc=Ds(!0),li=Zc();function Zc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(W)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zt();const r=W(this)[e].apply(this,n);return en(),r}}),t}function el(t){const e=W(this);return ge(e,"has",t),e.hasOwnProperty(t)}function Ds(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?ml:Bo:e?Fo:Uo).get(r))return r;const o=B(r);if(!t){if(o&&V(li,s))return Reflect.get(li,s,i);if(s==="hasOwnProperty")return el}const c=Reflect.get(r,s,i);return(Ss(s)?Mo.has(s):Jc(s))||(t||ge(r,"get",s),e)?c:ue(c)?o&&Ps(s)?c:c.value:Z(c)?t?Ho(c):Ir(c):c}}const tl=Lo(),nl=Lo(!0);function Lo(t=!1){return function(n,r,s,i){let o=n[r];if(zt(o)&&ue(o)&&!ue(s))return!1;if(!t&&(!or(s)&&!zt(s)&&(o=W(o),s=W(s)),!B(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const c=B(n)&&Ps(r)?Number(r)<n.length:V(n,r),a=Reflect.set(n,r,s,i);return n===W(i)&&(c?bn(s,o)&&qe(n,"set",r,s):qe(n,"add",r,s)),a}}function rl(t,e){const n=V(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&qe(t,"delete",e,void 0),r}function sl(t,e){const n=Reflect.has(t,e);return(!Ss(e)||!Mo.has(e))&&ge(t,"has",e),n}function il(t){return ge(t,"iterate",B(t)?"length":It),Reflect.ownKeys(t)}const xo={get:Yc,set:tl,deleteProperty:rl,has:sl,ownKeys:il},ol={get:Qc,set(t,e){return!0},deleteProperty(t,e){return!0}},al=ie({},xo,{get:Xc,set:nl}),Ms=t=>t,wr=t=>Reflect.getPrototypeOf(t);function Hn(t,e,n=!1,r=!1){t=t.__v_raw;const s=W(t),i=W(e);n||(e!==i&&ge(s,"get",e),ge(s,"get",i));const{has:o}=wr(s),c=r?Ms:n?Us:wn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function jn(t,e=!1){const n=this.__v_raw,r=W(n),s=W(t);return e||(t!==s&&ge(r,"has",t),ge(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Vn(t,e=!1){return t=t.__v_raw,!e&&ge(W(t),"iterate",It),Reflect.get(t,"size",t)}function ui(t){t=W(t);const e=W(this);return wr(e).has.call(e,t)||(e.add(t),qe(e,"add",t,t)),this}function fi(t,e){e=W(e);const n=W(this),{has:r,get:s}=wr(n);let i=r.call(n,t);i||(t=W(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?bn(e,o)&&qe(n,"set",t,e):qe(n,"add",t,e),this}function di(t){const e=W(this),{has:n,get:r}=wr(e);let s=n.call(e,t);s||(t=W(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&qe(e,"delete",t,void 0),i}function hi(){const t=W(this),e=t.size!==0,n=t.clear();return e&&qe(t,"clear",void 0,void 0),n}function Wn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=W(o),a=e?Ms:t?Us:wn;return!t&&ge(c,"iterate",It),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function Kn(t,e,n){return function(...r){const s=this.__v_raw,i=W(s),o=pn(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?Ms:e?Us:wn;return!e&&ge(i,"iterate",a?rs:It),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:c?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function Ze(t){return function(...e){return t==="delete"?!1:this}}function cl(){const t={get(i){return Hn(this,i)},get size(){return Vn(this)},has:jn,add:ui,set:fi,delete:di,clear:hi,forEach:Wn(!1,!1)},e={get(i){return Hn(this,i,!1,!0)},get size(){return Vn(this)},has:jn,add:ui,set:fi,delete:di,clear:hi,forEach:Wn(!1,!0)},n={get(i){return Hn(this,i,!0)},get size(){return Vn(this,!0)},has(i){return jn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Wn(!0,!1)},r={get(i){return Hn(this,i,!0,!0)},get size(){return Vn(this,!0)},has(i){return jn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Wn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Kn(i,!1,!1),n[i]=Kn(i,!0,!1),e[i]=Kn(i,!1,!0),r[i]=Kn(i,!0,!0)}),[t,n,e,r]}const[ll,ul,fl,dl]=cl();function Ls(t,e){const n=e?t?dl:fl:t?ul:ll;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,i)}const hl={get:Ls(!1,!1)},pl={get:Ls(!1,!0)},gl={get:Ls(!0,!1)},Uo=new WeakMap,Fo=new WeakMap,Bo=new WeakMap,ml=new WeakMap;function _l(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vl(t){return t.__v_skip||!Object.isExtensible(t)?0:_l(Mc(t))}function Ir(t){return zt(t)?t:xs(t,!1,xo,hl,Uo)}function $o(t){return xs(t,!1,al,pl,Fo)}function Ho(t){return xs(t,!0,ol,gl,Bo)}function xs(t,e,n,r,s){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=vl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function $t(t){return zt(t)?$t(t.__v_raw):!!(t&&t.__v_isReactive)}function zt(t){return!!(t&&t.__v_isReadonly)}function or(t){return!!(t&&t.__v_isShallow)}function jo(t){return $t(t)||zt(t)}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function Vo(t){return ir(t,"__v_skip",!0),t}const wn=t=>Z(t)?Ir(t):t,Us=t=>Z(t)?Ho(t):t;function Wo(t){ct&&Ie&&(t=W(t),Do(t.dep||(t.dep=ks())))}function Ko(t,e){t=W(t);const n=t.dep;n&&ss(n)}function ue(t){return!!(t&&t.__v_isRef===!0)}function zo(t){return qo(t,!1)}function yl(t){return qo(t,!0)}function qo(t,e){return ue(t)?t:new El(t,e)}class El{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:W(e),this._value=n?e:wn(e)}get value(){return Wo(this),this._value}set value(e){const n=this.__v_isShallow||or(e)||zt(e);e=n?e:W(e),bn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:wn(e),Ko(this))}}function Te(t){return ue(t)?t.value:t}const bl={get:(t,e,n)=>Te(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Go(t){return $t(t)?t:new Proxy(t,bl)}class wl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ns(e,()=>{this._dirty||(this._dirty=!0,Ko(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=W(this);return Wo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Il(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Pe):(r=t.get,s=t.set),new wl(r,s,i||!s,n)}function lt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Tr(i,e,n)}return s}function Ae(t,e,n,r){if($(t)){const i=lt(t,e,n,r);return i&&So(i)&&i.catch(o=>{Tr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ae(t[i],e,n,r));return s}function Tr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){lt(a,null,10,[t,o,c]);return}}Tl(t,n,s,r)}function Tl(t,e,n,r=!0){console.error(t)}let In=!1,is=!1;const ce=[];let Fe=0;const Ht=[];let We=null,yt=0;const Jo=Promise.resolve();let Fs=null;function Yo(t){const e=Fs||Jo;return t?e.then(this?t.bind(this):t):e}function Rl(t){let e=Fe+1,n=ce.length;for(;e<n;){const r=e+n>>>1;Tn(ce[r])<t?e=r+1:n=r}return e}function Bs(t){(!ce.length||!ce.includes(t,In&&t.allowRecurse?Fe+1:Fe))&&(t.id==null?ce.push(t):ce.splice(Rl(t.id),0,t),Xo())}function Xo(){!In&&!is&&(is=!0,Fs=Jo.then(Zo))}function Cl(t){const e=ce.indexOf(t);e>Fe&&ce.splice(e,1)}function Sl(t){B(t)?Ht.push(...t):(!We||!We.includes(t,t.allowRecurse?yt+1:yt))&&Ht.push(t),Xo()}function pi(t,e=In?Fe+1:0){for(;e<ce.length;e++){const n=ce[e];n&&n.pre&&(ce.splice(e,1),e--,n())}}function Qo(t){if(Ht.length){const e=[...new Set(Ht)];if(Ht.length=0,We){We.push(...e);return}for(We=e,We.sort((n,r)=>Tn(n)-Tn(r)),yt=0;yt<We.length;yt++)We[yt]();We=null,yt=0}}const Tn=t=>t.id==null?1/0:t.id,Pl=(t,e)=>{const n=Tn(t)-Tn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zo(t){is=!1,In=!0,ce.sort(Pl);const e=Pe;try{for(Fe=0;Fe<ce.length;Fe++){const n=ce[Fe];n&&n.active!==!1&&lt(n,null,14)}}finally{Fe=0,ce.length=0,Qo(),In=!1,Fs=null,(ce.length||Ht.length)&&Zo()}}function Al(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[u]||Q;g&&(s=n.map(y=>oe(y)?y.trim():y)),h&&(s=n.map(Zr))}let c,a=r[c=Lr(e)]||r[c=Lr(Kt(e))];!a&&i&&(a=r[c=Lr(Qt(e))]),a&&Ae(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ae(l,t,6,s)}}function ea(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!$(t)){const a=l=>{const u=ea(l,e,!0);u&&(c=!0,ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(Z(t)&&r.set(t,null),null):(B(i)?i.forEach(a=>o[a]=null):ie(o,i),Z(t)&&r.set(t,o),o)}function Rr(t,e){return!t||!yr(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,Qt(e))||V(t,e))}let Ce=null,ta=null;function ar(t){const e=Ce;return Ce=t,ta=t&&t.type.__scopeId||null,e}function cn(t,e=Ce,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ti(-1);const i=ar(e);let o;try{o=t(...s)}finally{ar(i),r._d&&Ti(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:h,data:g,setupState:y,ctx:S,inheritAttrs:A}=t;let x,k;const M=ar(t);try{if(n.shapeFlag&4){const L=s||r;x=Ue(u.call(L,L,h,i,y,g,S)),k=a}else{const L=e;x=Ue(L.length>1?L(i,{attrs:a,slots:c,emit:l}):L(i,null)),k=e.props?a:Ol(a)}}catch(L){mn.length=0,Tr(L,t,1),x=se(Ct)}let j=x;if(k&&A!==!1){const L=Object.keys(k),{shapeFlag:te}=j;L.length&&te&7&&(o&&L.some(Rs)&&(k=kl(k,o)),j=qt(j,k))}return n.dirs&&(j=qt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),x=j,ar(M),x}const Ol=t=>{let e;for(const n in t)(n==="class"||n==="style"||yr(n))&&((e||(e={}))[n]=t[n]);return e},kl=(t,e)=>{const n={};for(const r in t)(!Rs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Nl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?gi(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!Rr(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?gi(r,o,l):!0:!!o;return!1}function gi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Rr(n,i))return!0}return!1}function Dl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ml=t=>t.__isSuspense;function Ll(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Sl(t)}const zn={};function Xn(t,e,n){return na(t,e,n)}function na(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){var c;const a=zc()===((c=le)==null?void 0:c.scope)?le:null;let l,u=!1,h=!1;if(ue(t)?(l=()=>t.value,u=or(t)):$t(t)?(l=()=>t,r=!0):B(t)?(h=!0,u=t.some(L=>$t(L)||or(L)),l=()=>t.map(L=>{if(ue(L))return L.value;if($t(L))return bt(L);if($(L))return lt(L,a,2)})):$(t)?e?l=()=>lt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return g&&g(),Ae(t,a,3,[y])}:l=Pe,e&&r){const L=l;l=()=>bt(L())}let g,y=L=>{g=M.onStop=()=>{lt(L,a,4)}},S;if(Cn)if(y=Pe,e?n&&Ae(e,a,3,[l(),h?[]:void 0,y]):l(),s==="sync"){const L=Su();S=L.__watcherHandles||(L.__watcherHandles=[])}else return Pe;let A=h?new Array(t.length).fill(zn):zn;const x=()=>{if(M.active)if(e){const L=M.run();(r||u||(h?L.some((te,ne)=>bn(te,A[ne])):bn(L,A)))&&(g&&g(),Ae(e,a,3,[L,A===zn?void 0:h&&A[0]===zn?[]:A,y]),A=L)}else M.run()};x.allowRecurse=!!e;let k;s==="sync"?k=x:s==="post"?k=()=>pe(x,a&&a.suspense):(x.pre=!0,a&&(x.id=a.uid),k=()=>Bs(x));const M=new Ns(l,k);e?n?x():A=M.run():s==="post"?pe(M.run.bind(M),a&&a.suspense):M.run();const j=()=>{M.stop(),a&&a.scope&&Cs(a.scope.effects,M)};return S&&S.push(j),j}function xl(t,e,n){const r=this.proxy,s=oe(t)?t.includes(".")?ra(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=le;Gt(this);const c=na(s,i.bind(r),n);return o?Gt(o):Tt(),c}function ra(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function bt(t,e){if(!Z(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))bt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)bt(t[n],e);else if(Nc(t)||pn(t))t.forEach(n=>{bt(n,e)});else if(Lc(t))for(const n in t)bt(t[n],e);return t}function Kg(t,e){const n=Ce;if(n===null)return t;const r=Ar(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,c,a,l=Q]=e[i];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&bt(c),s.push({dir:o,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l}))}return t}function mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Zt(),Ae(a,n,8,[t.el,c,t,e]),en())}}function sa(t,e){return $(t)?(()=>ie({name:t.name},e,{setup:t}))():t}const Qn=t=>!!t.type.__asyncLoader,ia=t=>t.type.__isKeepAlive;function Ul(t,e){oa(t,"a",e)}function Fl(t,e){oa(t,"da",e)}function oa(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Cr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ia(s.parent.vnode)&&Bl(r,e,n,s),s=s.parent}}function Bl(t,e,n,r){const s=Cr(e,t,r,!0);ca(()=>{Cs(r[e],s)},n)}function Cr(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zt(),Gt(n);const c=Ae(e,n,t,o);return Tt(),en(),c});return r?s.unshift(i):s.push(i),i}}const Je=t=>(e,n=le)=>(!Cn||t==="sp")&&Cr(t,(...r)=>e(...r),n),$l=Je("bm"),aa=Je("m"),Hl=Je("bu"),jl=Je("u"),Vl=Je("bum"),ca=Je("um"),Wl=Je("sp"),Kl=Je("rtg"),zl=Je("rtc");function ql(t,e=le){Cr("ec",t,e)}const Gl=Symbol.for("v-ndc"),os=t=>t?ya(t)?Ar(t)||t.proxy:os(t.parent):null,gn=ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>os(t.parent),$root:t=>os(t.root),$emit:t=>t.emit,$options:t=>$s(t),$forceUpdate:t=>t.f||(t.f=()=>Bs(t.update)),$nextTick:t=>t.n||(t.n=Yo.bind(t.proxy)),$watch:t=>xl.bind(t)}),Ur=(t,e)=>t!==Q&&!t.__isScriptSetup&&V(t,e),Jl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ur(r,e))return o[e]=1,r[e];if(s!==Q&&V(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&V(l,e))return o[e]=3,i[e];if(n!==Q&&V(n,e))return o[e]=4,n[e];as&&(o[e]=0)}}const u=gn[e];let h,g;if(u)return e==="$attrs"&&ge(t,"get",e),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Q&&V(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,V(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ur(s,e)?(s[e]=n,!0):r!==Q&&V(r,e)?(r[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&V(t,o)||Ur(e,o)||(c=i[0])&&V(c,o)||V(r,o)||V(gn,o)||V(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mi(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let as=!0;function Yl(t){const e=$s(t),n=t.proxy,r=t.ctx;as=!1,e.beforeCreate&&_i(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:y,updated:S,activated:A,deactivated:x,beforeDestroy:k,beforeUnmount:M,destroyed:j,unmounted:L,render:te,renderTracked:ne,renderTriggered:me,errorCaptured:Ee,serverPrefetch:ke,expose:ve,inheritAttrs:Xe,components:gt,directives:Ne,filters:nn}=e;if(l&&Xl(l,r,null),o)for(const J in o){const K=o[J];$(K)&&(r[J]=K.bind(n))}if(s){const J=s.call(n,n);Z(J)&&(t.data=Ir(J))}if(as=!0,i)for(const J in i){const K=i[J],je=$(K)?K.bind(n,n):$(K.get)?K.get.bind(n,n):Pe,Qe=!$(K)&&$(K.set)?K.set.bind(n):Pe,De=Re({get:je,set:Qe});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>De.value,set:he=>De.value=he})}if(c)for(const J in c)la(c[J],r,n,J);if(a){const J=$(a)?a.call(n):a;Reflect.ownKeys(J).forEach(K=>{Zn(K,J[K])})}u&&_i(u,t,"c");function re(J,K){B(K)?K.forEach(je=>J(je.bind(n))):K&&J(K.bind(n))}if(re($l,h),re(aa,g),re(Hl,y),re(jl,S),re(Ul,A),re(Fl,x),re(ql,Ee),re(zl,ne),re(Kl,me),re(Vl,M),re(ca,L),re(Wl,ke),B(ve))if(ve.length){const J=t.exposed||(t.exposed={});ve.forEach(K=>{Object.defineProperty(J,K,{get:()=>n[K],set:je=>n[K]=je})})}else t.exposed||(t.exposed={});te&&t.render===Pe&&(t.render=te),Xe!=null&&(t.inheritAttrs=Xe),gt&&(t.components=gt),Ne&&(t.directives=Ne)}function Xl(t,e,n=Pe){B(t)&&(t=cs(t));for(const r in t){const s=t[r];let i;Z(s)?"default"in s?i=Be(s.from||r,s.default,!0):i=Be(s.from||r):i=Be(s),ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function _i(t,e,n){Ae(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function la(t,e,n,r){const s=r.includes(".")?ra(n,r):()=>n[r];if(oe(t)){const i=e[t];$(i)&&Xn(s,i)}else if($(t))Xn(s,t.bind(n));else if(Z(t))if(B(t))t.forEach(i=>la(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Xn(s,i,t)}}function $s(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>cr(a,l,o,!0)),cr(a,e,o)),Z(e)&&i.set(e,a),a}function cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&cr(t,i,n,!0),s&&s.forEach(o=>cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Ql[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Ql={data:vi,props:yi,emits:yi,methods:ln,computed:ln,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:ln,directives:ln,watch:eu,provide:vi,inject:Zl};function vi(t,e){return e?t?function(){return ie($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Zl(t,e){return ln(cs(t),cs(e))}function cs(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function ln(t,e){return t?ie(Object.create(null),t,e):e}function yi(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:ie(Object.create(null),mi(t),mi(e??{})):e}function eu(t,e){if(!t)return e;if(!e)return t;const n=ie(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function ua(){return{app:null,config:{isNativeTag:Ac,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tu=0;function nu(t,e){return function(r,s=null){$(r)||(r=ie({},r)),s!=null&&!Z(s)&&(s=null);const i=ua(),o=new Set;let c=!1;const a=i.app={_uid:tu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Pu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(a,...u)):$(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,h){if(!c){const g=se(r,s);return g.appContext=i,u&&e?e(g,l):t(g,l,h),c=!0,a._container=l,l.__vue_app__=a,Ar(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){lr=a;try{return l()}finally{lr=null}}};return a}}let lr=null;function Zn(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function Be(t,e,n=!1){const r=le||Ce;if(r||lr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:lr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}function ru(t,e,n,r=!1){const s={},i={};ir(i,Pr,1),t.propsDefaults=Object.create(null),fa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$o(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function su(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=W(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(Rr(t.emitsOptions,g))continue;const y=e[g];if(a)if(V(i,g))y!==i[g]&&(i[g]=y,l=!0);else{const S=Kt(g);s[S]=ls(a,c,S,y,t,!1)}else y!==i[g]&&(i[g]=y,l=!0)}}}else{fa(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!V(e,h)&&((u=Qt(h))===h||!V(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ls(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!V(e,h))&&(delete i[h],l=!0)}l&&qe(t,"set","$attrs")}function fa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Jn(a))continue;const l=e[a];let u;s&&V(s,u=Kt(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:Rr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=W(n),l=c||Q;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ls(s,a,h,l[h],t,!V(l,h))}}return o}function ls(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=V(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&$(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(Gt(s),r=l[n]=a.call(null,e),Tt())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function da(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!$(t)){const u=h=>{a=!0;const[g,y]=da(h,e,!0);ie(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return Z(t)&&r.set(t,Bt),Bt;if(B(i))for(let u=0;u<i.length;u++){const h=Kt(i[u]);Ei(h)&&(o[h]=Q)}else if(i)for(const u in i){const h=Kt(u);if(Ei(h)){const g=i[u],y=o[h]=B(g)||$(g)?{type:g}:ie({},g);if(y){const S=Ii(Boolean,y.type),A=Ii(String,y.type);y[0]=S>-1,y[1]=A<0||S<A,(S>-1||V(y,"default"))&&c.push(h)}}}const l=[o,c];return Z(t)&&r.set(t,l),l}function Ei(t){return t[0]!=="$"}function bi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function wi(t,e){return bi(t)===bi(e)}function Ii(t,e){return B(e)?e.findIndex(n=>wi(n,t)):$(e)&&wi(e,t)?0:-1}const ha=t=>t[0]==="_"||t==="$stable",Hs=t=>B(t)?t.map(Ue):[Ue(t)],iu=(t,e,n)=>{if(e._n)return e;const r=cn((...s)=>Hs(e(...s)),n);return r._c=!1,r},pa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ha(s))continue;const i=t[s];if($(i))e[s]=iu(s,i,r);else if(i!=null){const o=Hs(i);e[s]=()=>o}}},ga=(t,e)=>{const n=Hs(e);t.slots.default=()=>n},ou=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=W(e),ir(e,"_",n)):pa(e,t.slots={})}else t.slots={},e&&ga(t,e);ir(t.slots,Pr,1)},au=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(ie(s,e),!n&&c===1&&delete s._):(i=!e.$stable,pa(e,s)),o=e}else e&&(ga(t,e),o={default:1});if(i)for(const c in s)!ha(c)&&!(c in o)&&delete s[c]};function us(t,e,n,r,s=!1){if(B(t)){t.forEach((g,y)=>us(g,e&&(B(e)?e[y]:e),n,r,s));return}if(Qn(r)&&!s)return;const i=r.shapeFlag&4?Ar(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===Q?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(oe(l)?(u[l]=null,V(h,l)&&(h[l]=null)):ue(l)&&(l.value=null)),$(a))lt(a,c,12,[o,u]);else{const g=oe(a),y=ue(a);if(g||y){const S=()=>{if(t.f){const A=g?V(h,a)?h[a]:u[a]:a.value;s?B(A)&&Cs(A,i):B(A)?A.includes(i)||A.push(i):g?(u[a]=[i],V(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else g?(u[a]=o,V(h,a)&&(h[a]=o)):y&&(a.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,pe(S,n)):S()}}}const pe=Ll;function cu(t){return lu(t)}function lu(t,e){const n=es();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:y=Pe,insertStaticContent:S}=t,A=(f,d,p,m=null,v=null,E=null,R=!1,w=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!sn(f,d)&&(m=_(f),he(f,v,E,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:P}=d;switch(b){case Sr:x(f,d,p,m);break;case Ct:k(f,d,p,m);break;case Fr:f==null&&M(d,p,m,R);break;case xe:gt(f,d,p,m,v,E,R,w,I);break;default:P&1?te(f,d,p,m,v,E,R,w,I):P&6?Ne(f,d,p,m,v,E,R,w,I):(P&64||P&128)&&b.process(f,d,p,m,v,E,R,w,I,T)}N!=null&&v&&us(N,f&&f.ref,E,d||f,!d)},x=(f,d,p,m)=>{if(f==null)r(d.el=c(d.children),p,m);else{const v=d.el=f.el;d.children!==f.children&&l(v,d.children)}},k=(f,d,p,m)=>{f==null?r(d.el=a(d.children||""),p,m):d.el=f.el},M=(f,d,p,m)=>{[f.el,f.anchor]=S(f.children,d,p,m,f.el,f.anchor)},j=({el:f,anchor:d},p,m)=>{let v;for(;f&&f!==d;)v=g(f),r(f,p,m),f=v;r(d,p,m)},L=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},te=(f,d,p,m,v,E,R,w,I)=>{R=R||d.type==="svg",f==null?ne(d,p,m,v,E,R,w,I):ke(f,d,v,E,R,w,I)},ne=(f,d,p,m,v,E,R,w)=>{let I,b;const{type:N,props:P,shapeFlag:D,transition:F,dirs:H}=f;if(I=f.el=o(f.type,E,P&&P.is,P),D&8?u(I,f.children):D&16&&Ee(f.children,I,null,m,v,E&&N!=="foreignObject",R,w),H&&mt(f,null,m,"created"),me(I,f,f.scopeId,R,m),P){for(const G in P)G!=="value"&&!Jn(G)&&i(I,G,null,P[G],E,f.children,m,v,ae);"value"in P&&i(I,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Le(b,m,f)}H&&mt(f,null,m,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&F&&!F.persisted;X&&F.beforeEnter(I),r(I,d,p),((b=P&&P.onVnodeMounted)||X||H)&&pe(()=>{b&&Le(b,m,f),X&&F.enter(I),H&&mt(f,null,m,"mounted")},v)},me=(f,d,p,m,v)=>{if(p&&y(f,p),m)for(let E=0;E<m.length;E++)y(f,m[E]);if(v){let E=v.subTree;if(d===E){const R=v.vnode;me(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},Ee=(f,d,p,m,v,E,R,w,I=0)=>{for(let b=I;b<f.length;b++){const N=f[b]=w?nt(f[b]):Ue(f[b]);A(null,N,d,p,m,v,E,R,w)}},ke=(f,d,p,m,v,E,R)=>{const w=d.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:N}=d;I|=f.patchFlag&16;const P=f.props||Q,D=d.props||Q;let F;p&&_t(p,!1),(F=D.onVnodeBeforeUpdate)&&Le(F,p,d,f),N&&mt(d,f,p,"beforeUpdate"),p&&_t(p,!0);const H=v&&d.type!=="foreignObject";if(b?ve(f.dynamicChildren,b,w,p,m,H,E):R||K(f,d,w,null,p,m,H,E,!1),I>0){if(I&16)Xe(w,d,P,D,p,m,v);else if(I&2&&P.class!==D.class&&i(w,"class",null,D.class,v),I&4&&i(w,"style",P.style,D.style,v),I&8){const X=d.dynamicProps;for(let G=0;G<X.length;G++){const ee=X[G],be=P[ee],Lt=D[ee];(Lt!==be||ee==="value")&&i(w,ee,be,Lt,v,f.children,p,m,ae)}}I&1&&f.children!==d.children&&u(w,d.children)}else!R&&b==null&&Xe(w,d,P,D,p,m,v);((F=D.onVnodeUpdated)||N)&&pe(()=>{F&&Le(F,p,d,f),N&&mt(d,f,p,"updated")},m)},ve=(f,d,p,m,v,E,R)=>{for(let w=0;w<d.length;w++){const I=f[w],b=d[w],N=I.el&&(I.type===xe||!sn(I,b)||I.shapeFlag&70)?h(I.el):p;A(I,b,N,null,m,v,E,R,!0)}},Xe=(f,d,p,m,v,E,R)=>{if(p!==m){if(p!==Q)for(const w in p)!Jn(w)&&!(w in m)&&i(f,w,p[w],null,R,d.children,v,E,ae);for(const w in m){if(Jn(w))continue;const I=m[w],b=p[w];I!==b&&w!=="value"&&i(f,w,b,I,R,d.children,v,E,ae)}"value"in m&&i(f,"value",p.value,m.value)}},gt=(f,d,p,m,v,E,R,w,I)=>{const b=d.el=f?f.el:c(""),N=d.anchor=f?f.anchor:c("");let{patchFlag:P,dynamicChildren:D,slotScopeIds:F}=d;F&&(w=w?w.concat(F):F),f==null?(r(b,p,m),r(N,p,m),Ee(d.children,p,N,v,E,R,w,I)):P>0&&P&64&&D&&f.dynamicChildren?(ve(f.dynamicChildren,D,p,v,E,R,w),(d.key!=null||v&&d===v.subTree)&&ma(f,d,!0)):K(f,d,p,N,v,E,R,w,I)},Ne=(f,d,p,m,v,E,R,w,I)=>{d.slotScopeIds=w,f==null?d.shapeFlag&512?v.ctx.activate(d,p,m,R,I):nn(d,p,m,v,E,R,I):Nt(f,d,I)},nn=(f,d,p,m,v,E,R)=>{const w=f.component=Eu(f,m,v);if(ia(f)&&(w.ctx.renderer=T),bu(w),w.asyncDep){if(v&&v.registerDep(w,re),!f.el){const I=w.subTree=se(Ct);k(null,I,d,p)}return}re(w,f,d,p,v,E,R)},Nt=(f,d,p)=>{const m=d.component=f.component;if(Nl(f,d,p))if(m.asyncDep&&!m.asyncResolved){J(m,d,p);return}else m.next=d,Cl(m.update),m.update();else d.el=f.el,m.vnode=d},re=(f,d,p,m,v,E,R)=>{const w=()=>{if(f.isMounted){let{next:N,bu:P,u:D,parent:F,vnode:H}=f,X=N,G;_t(f,!1),N?(N.el=H.el,J(f,N,R)):N=H,P&&Yn(P),(G=N.props&&N.props.onVnodeBeforeUpdate)&&Le(G,F,N,H),_t(f,!0);const ee=xr(f),be=f.subTree;f.subTree=ee,A(be,ee,h(be.el),_(be),f,v,E),N.el=ee.el,X===null&&Dl(f,ee.el),D&&pe(D,v),(G=N.props&&N.props.onVnodeUpdated)&&pe(()=>Le(G,F,N,H),v)}else{let N;const{el:P,props:D}=d,{bm:F,m:H,parent:X}=f,G=Qn(d);if(_t(f,!1),F&&Yn(F),!G&&(N=D&&D.onVnodeBeforeMount)&&Le(N,X,d),_t(f,!0),P&&z){const ee=()=>{f.subTree=xr(f),z(P,f.subTree,f,v,null)};G?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=xr(f);A(null,ee,p,m,f,v,E),d.el=ee.el}if(H&&pe(H,v),!G&&(N=D&&D.onVnodeMounted)){const ee=d;pe(()=>Le(N,X,ee),v)}(d.shapeFlag&256||X&&Qn(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&pe(f.a,v),f.isMounted=!0,d=p=m=null}},I=f.effect=new Ns(w,()=>Bs(b),f.scope),b=f.update=()=>I.run();b.id=f.uid,_t(f,!0),b()},J=(f,d,p)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,su(f,d.props,m,p),au(f,d.children,p),Zt(),pi(),en()},K=(f,d,p,m,v,E,R,w,I=!1)=>{const b=f&&f.children,N=f?f.shapeFlag:0,P=d.children,{patchFlag:D,shapeFlag:F}=d;if(D>0){if(D&128){Qe(b,P,p,m,v,E,R,w,I);return}else if(D&256){je(b,P,p,m,v,E,R,w,I);return}}F&8?(N&16&&ae(b,v,E),P!==b&&u(p,P)):N&16?F&16?Qe(b,P,p,m,v,E,R,w,I):ae(b,v,E,!0):(N&8&&u(p,""),F&16&&Ee(P,p,m,v,E,R,w,I))},je=(f,d,p,m,v,E,R,w,I)=>{f=f||Bt,d=d||Bt;const b=f.length,N=d.length,P=Math.min(b,N);let D;for(D=0;D<P;D++){const F=d[D]=I?nt(d[D]):Ue(d[D]);A(f[D],F,p,null,v,E,R,w,I)}b>N?ae(f,v,E,!0,!1,P):Ee(d,p,m,v,E,R,w,I,P)},Qe=(f,d,p,m,v,E,R,w,I)=>{let b=0;const N=d.length;let P=f.length-1,D=N-1;for(;b<=P&&b<=D;){const F=f[b],H=d[b]=I?nt(d[b]):Ue(d[b]);if(sn(F,H))A(F,H,p,null,v,E,R,w,I);else break;b++}for(;b<=P&&b<=D;){const F=f[P],H=d[D]=I?nt(d[D]):Ue(d[D]);if(sn(F,H))A(F,H,p,null,v,E,R,w,I);else break;P--,D--}if(b>P){if(b<=D){const F=D+1,H=F<N?d[F].el:m;for(;b<=D;)A(null,d[b]=I?nt(d[b]):Ue(d[b]),p,H,v,E,R,w,I),b++}}else if(b>D)for(;b<=P;)he(f[b],v,E,!0),b++;else{const F=b,H=b,X=new Map;for(b=H;b<=D;b++){const _e=d[b]=I?nt(d[b]):Ue(d[b]);_e.key!=null&&X.set(_e.key,b)}let G,ee=0;const be=D-H+1;let Lt=!1,ri=0;const rn=new Array(be);for(b=0;b<be;b++)rn[b]=0;for(b=F;b<=P;b++){const _e=f[b];if(ee>=be){he(_e,v,E,!0);continue}let Me;if(_e.key!=null)Me=X.get(_e.key);else for(G=H;G<=D;G++)if(rn[G-H]===0&&sn(_e,d[G])){Me=G;break}Me===void 0?he(_e,v,E,!0):(rn[Me-H]=b+1,Me>=ri?ri=Me:Lt=!0,A(_e,d[Me],p,null,v,E,R,w,I),ee++)}const si=Lt?uu(rn):Bt;for(G=si.length-1,b=be-1;b>=0;b--){const _e=H+b,Me=d[_e],ii=_e+1<N?d[_e+1].el:m;rn[b]===0?A(null,Me,p,ii,v,E,R,w,I):Lt&&(G<0||b!==si[G]?De(Me,p,ii,2):G--)}}},De=(f,d,p,m,v=null)=>{const{el:E,type:R,transition:w,children:I,shapeFlag:b}=f;if(b&6){De(f.component.subTree,d,p,m);return}if(b&128){f.suspense.move(d,p,m);return}if(b&64){R.move(f,d,p,T);return}if(R===xe){r(E,d,p);for(let P=0;P<I.length;P++)De(I[P],d,p,m);r(f.anchor,d,p);return}if(R===Fr){j(f,d,p);return}if(m!==2&&b&1&&w)if(m===0)w.beforeEnter(E),r(E,d,p),pe(()=>w.enter(E),v);else{const{leave:P,delayLeave:D,afterLeave:F}=w,H=()=>r(E,d,p),X=()=>{P(E,()=>{H(),F&&F()})};D?D(E,H,X):X()}else r(E,d,p)},he=(f,d,p,m=!1,v=!1)=>{const{type:E,props:R,ref:w,children:I,dynamicChildren:b,shapeFlag:N,patchFlag:P,dirs:D}=f;if(w!=null&&us(w,null,p,f,!0),N&256){d.ctx.deactivate(f);return}const F=N&1&&D,H=!Qn(f);let X;if(H&&(X=R&&R.onVnodeBeforeUnmount)&&Le(X,d,f),N&6)$n(f.component,p,m);else{if(N&128){f.suspense.unmount(p,m);return}F&&mt(f,null,d,"beforeUnmount"),N&64?f.type.remove(f,d,p,v,T,m):b&&(E!==xe||P>0&&P&64)?ae(b,d,p,!1,!0):(E===xe&&P&384||!v&&N&16)&&ae(I,d,p),m&&Dt(f)}(H&&(X=R&&R.onVnodeUnmounted)||F)&&pe(()=>{X&&Le(X,d,f),F&&mt(f,null,d,"unmounted")},p)},Dt=f=>{const{type:d,el:p,anchor:m,transition:v}=f;if(d===xe){Mt(p,m);return}if(d===Fr){L(f);return}const E=()=>{s(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:w}=v,I=()=>R(p,E);w?w(f.el,E,I):I()}else E()},Mt=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},$n=(f,d,p)=>{const{bum:m,scope:v,update:E,subTree:R,um:w}=f;m&&Yn(m),v.stop(),E&&(E.active=!1,he(R,f,d,p)),w&&pe(w,d),pe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ae=(f,d,p,m=!1,v=!1,E=0)=>{for(let R=E;R<f.length;R++)he(f[R],d,p,m,v)},_=f=>f.shapeFlag&6?_(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),C=(f,d,p)=>{f==null?d._vnode&&he(d._vnode,null,null,!0):A(d._vnode||null,f,d,null,null,null,p),pi(),Qo(),d._vnode=f},T={p:A,um:he,m:De,r:Dt,mt:nn,mc:Ee,pc:K,pbc:ve,n:_,o:t};let O,z;return e&&([O,z]=e(T)),{render:C,hydrate:O,createApp:nu(C,O)}}function _t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ma(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=nt(s[i]),c.el=o.el),n||ma(o,c)),c.type===Sr&&(c.el=o.el)}}function uu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const fu=t=>t.__isTeleport,xe=Symbol.for("v-fgt"),Sr=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),Fr=Symbol.for("v-stc"),mn=[];let Se=null;function fs(t=!1){mn.push(Se=t?null:[])}function du(){mn.pop(),Se=mn[mn.length-1]||null}let Rn=1;function Ti(t){Rn+=t}function _a(t){return t.dynamicChildren=Rn>0?Se||Bt:null,du(),Rn>0&&Se&&Se.push(t),t}function Ri(t,e,n,r,s,i){return _a(_n(t,e,n,r,s,i,!0))}function hu(t,e,n,r,s){return _a(se(t,e,n,r,s,!0))}function ds(t){return t?t.__v_isVNode===!0:!1}function sn(t,e){return t.type===e.type&&t.key===e.key}const Pr="__vInternal",va=({key:t})=>t??null,er=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||ue(t)||$(t)?{i:Ce,r:t,k:e,f:!!n}:t:null);function _n(t,e=null,n=null,r=0,s=null,i=t===xe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&va(e),ref:e&&er(e),scopeId:ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ce};return c?(js(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),Rn>0&&!o&&Se&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Se.push(a),a}const se=pu;function pu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Gl)&&(t=Ct),ds(t)){const c=qt(t,e,!0);return n&&js(c,n),Rn>0&&!i&&Se&&(c.shapeFlag&6?Se[Se.indexOf(t)]=c:Se.push(c)),c.patchFlag|=-2,c}if(Ru(t)&&(t=t.__vccOpts),e){e=gu(e);let{class:c,style:a}=e;c&&!oe(c)&&(e.class=Os(c)),Z(a)&&(jo(a)&&!B(a)&&(a=ie({},a)),e.style=As(a))}const o=oe(t)?1:Ml(t)?128:fu(t)?64:Z(t)?4:$(t)?2:0;return _n(t,e,n,r,s,o,i,!0)}function gu(t){return t?jo(t)||Pr in t?ie({},t):t:null}function qt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?_u(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&va(c),ref:e&&e.ref?n&&s?B(s)?s.concat(er(e)):[s,er(e)]:er(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qt(t.ssContent),ssFallback:t.ssFallback&&qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function un(t=" ",e=0){return se(Sr,null,t,e)}function mu(t="",e=!1){return e?(fs(),hu(Ct,null,t)):se(Ct,null,t)}function Ue(t){return t==null||typeof t=="boolean"?se(Ct):B(t)?se(xe,null,t.slice()):typeof t=="object"?nt(t):se(Sr,null,String(t))}function nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qt(t)}function js(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),js(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Pr in e)?e._ctx=Ce:s===3&&Ce&&(Ce.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ce},n=32):(e=String(e),r&64?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function _u(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Os([e.class,r.class]));else if(s==="style")e.style=As([e.style,r.style]);else if(yr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Le(t,e,n,r=null){Ae(t,e,7,[n,r])}const vu=ua();let yu=0;function Eu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||vu,i={uid:yu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:da(r,s),emitsOptions:ea(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Al.bind(null,i),t.ce&&t.ce(i),i}let le=null,Vs,xt,Ci="__VUE_INSTANCE_SETTERS__";(xt=es()[Ci])||(xt=es()[Ci]=[]),xt.push(t=>le=t),Vs=t=>{xt.length>1?xt.forEach(e=>e(t)):xt[0](t)};const Gt=t=>{Vs(t),t.scope.on()},Tt=()=>{le&&le.scope.off(),Vs(null)};function ya(t){return t.vnode.shapeFlag&4}let Cn=!1;function bu(t,e=!1){Cn=e;const{props:n,children:r}=t.vnode,s=ya(t);ru(t,n,s,e),ou(t,r);const i=s?wu(t,e):void 0;return Cn=!1,i}function wu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Vo(new Proxy(t.ctx,Jl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Tu(t):null;Gt(t),Zt();const i=lt(r,t,0,[t.props,s]);if(en(),Tt(),So(i)){if(i.then(Tt,Tt),e)return i.then(o=>{Si(t,o,e)}).catch(o=>{Tr(o,t,0)});t.asyncDep=i}else Si(t,i,e)}else Ea(t,e)}function Si(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=Go(e)),Ea(t,n)}let Pi;function Ea(t,e,n){const r=t.type;if(!t.render){if(!e&&Pi&&!r.render){const s=r.template||$s(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ie(ie({isCustomElement:i,delimiters:c},o),a);r.render=Pi(s,l)}}t.render=r.render||Pe}Gt(t),Zt(),Yl(t),en(),Tt()}function Iu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ge(t,"get","$attrs"),e[n]}}))}function Tu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Iu(t)},slots:t.slots,emit:t.emit,expose:e}}function Ar(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Go(Vo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gn)return gn[n](t)},has(e,n){return n in e||n in gn}}))}function Ru(t){return $(t)&&"__vccOpts"in t}const Re=(t,e)=>Il(t,e,Cn);function ba(t,e,n){const r=arguments.length;return r===2?Z(e)&&!B(e)?ds(e)?se(t,null,[e]):se(t,e):se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ds(n)&&(n=[n]),se(t,e,n))}const Cu=Symbol.for("v-scx"),Su=()=>Be(Cu),Pu="3.3.4",Au="http://www.w3.org/2000/svg",Et=typeof document<"u"?document:null,Ai=Et&&Et.createElement("template"),Ou={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Et.createElementNS(Au,t):Et.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Et.createTextNode(t),createComment:t=>Et.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Et.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ai.innerHTML=r?`<svg>${t}</svg>`:t;const c=Ai.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ku(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nu(t,e,n){const r=t.style,s=oe(n);if(n&&!s){if(e&&!oe(e))for(const i in e)n[i]==null&&hs(r,i,"");for(const i in n)hs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Oi=/\s*!important$/;function hs(t,e,n){if(B(n))n.forEach(r=>hs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Du(t,e);Oi.test(n)?t.setProperty(Qt(r),n.replace(Oi,""),"important"):t[r]=n}}const ki=["Webkit","Moz","ms"],Br={};function Du(t,e){const n=Br[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return Br[e]=r;r=Po(r);for(let s=0;s<ki.length;s++){const i=ki[s]+r;if(i in t)return Br[e]=i}return e}const Ni="http://www.w3.org/1999/xlink";function Mu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ni,e.slice(6,e.length)):t.setAttributeNS(Ni,e,n);else{const i=Vc(e);n==null||i&&!Ao(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Lu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ao(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ut(t,e,n,r){t.addEventListener(e,n,r)}function xu(t,e,n,r){t.removeEventListener(e,n,r)}function Uu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Fu(e);if(r){const l=i[e]=Hu(r,s);Ut(t,c,l,a)}else o&&(xu(t,c,o,a),i[e]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;function Fu(t){let e;if(Di.test(t)){e={};let r;for(;r=t.match(Di);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qt(t.slice(2)),e]}let $r=0;const Bu=Promise.resolve(),$u=()=>$r||(Bu.then(()=>$r=0),$r=Date.now());function Hu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ae(ju(r,n.value),e,5,[r])};return n.value=t,n.attached=$u(),n}function ju(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mi=/^on[a-z]/,Vu=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?ku(t,r,s):e==="style"?Nu(t,n,r):yr(e)?Rs(e)||Uu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wu(t,e,r,s))?Lu(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Mu(t,e,r,s))};function Wu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Mi.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mi.test(e)&&oe(n)?!1:e in t}const Li=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Yn(e,n):e};function Ku(t){t.target.composing=!0}function xi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zg={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Li(s);const i=r||s.props&&s.props.type==="number";Ut(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Zr(c)),t._assign(c)}),n&&Ut(t,"change",()=>{t.value=t.value.trim()}),e||(Ut(t,"compositionstart",Ku),Ut(t,"compositionend",xi),Ut(t,"change",xi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Li(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Zr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},zu=ie({patchProp:Vu},Ou);let Ui;function qu(){return Ui||(Ui=cu(zu))}const Gu=(...t)=>{const e=qu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ju(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ju(t){return oe(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ft=typeof window<"u";function Yu(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function Hr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Oe(s)?s.map(t):t(s)}return n}const vn=()=>{},Oe=Array.isArray,Xu=/\/$/,Qu=t=>t.replace(Xu,"");function jr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=nf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Zu(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Fi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ef(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Jt(e.matched[r],n.matched[s])&&wa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tf(t[n],e[n]))return!1;return!0}function tf(t,e){return Oe(t)?Bi(t,e):Oe(e)?Bi(e,t):t===e}function Bi(t,e){return Oe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function nf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Sn;(function(t){t.pop="pop",t.push="push"})(Sn||(Sn={}));var yn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yn||(yn={}));function rf(t){if(!t)if(Ft){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Qu(t)}const sf=/^[^#]+#/;function of(t,e){return t.replace(sf,"#")+e}function af(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Or=()=>({left:window.pageXOffset,top:window.pageYOffset});function cf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=af(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function $i(t,e){return(history.state?history.state.position-e:-1)+t}const ps=new Map;function lf(t,e){ps.set(t,e)}function uf(t){const e=ps.get(t);return ps.delete(t),e}let ff=()=>location.protocol+"//"+location.host;function Ia(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Fi(a,"")}return Fi(n,t)+r+s}function df(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=Ia(t,location),S=n.value,A=e.value;let x=0;if(g){if(n.value=y,e.value=g,o&&o===S){o=null;return}x=A?g.position-A.position:0}else r(y);s.forEach(k=>{k(n.value,S,{delta:x,type:Sn.pop,direction:x?x>0?yn.forward:yn.back:yn.unknown})})};function a(){o=n.value}function l(g){s.push(g);const y=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(y),y}function u(){const{history:g}=window;g.state&&g.replaceState(q({},g.state,{scroll:Or()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function Hi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Or():null}}function hf(t){const{history:e,location:n}=window,r={value:Ia(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:ff()+t+a;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(y){console.error(y),n[u?"replace":"assign"](g)}}function o(a,l){const u=q({},e.state,Hi(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=q({},s.value,e.state,{forward:a,scroll:Or()});i(u.current,u,!0);const h=q({},Hi(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function pf(t){t=rf(t);const e=hf(t),n=df(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:of.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function gf(t){return typeof t=="string"||t&&typeof t=="object"}function Ta(t){return typeof t=="string"||typeof t=="symbol"}const et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ra=Symbol("");var ji;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ji||(ji={}));function Yt(t,e){return q(new Error,{type:t,[Ra]:!0},e)}function Ve(t,e){return t instanceof Error&&Ra in t&&(e==null||!!(t.type&e))}const Vi="[^/]+?",mf={sensitive:!1,strict:!1,start:!0,end:!0},_f=/[.+*?^${}()[\]/\\]/g;function vf(t,e){const n=q({},mf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let y=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(_f,"\\$&"),y+=40;else if(g.type===1){const{value:S,repeatable:A,optional:x,regexp:k}=g;i.push({name:S,repeatable:A,optional:x});const M=k||Vi;if(M!==Vi){y+=10;try{new RegExp(`(${M})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${S}" (${M}): `+L.message)}}let j=A?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(j=x&&l.length<2?`(?:/${j})`:"/"+j),x&&(j+="?"),s+=j,y+=20,x&&(y+=-8),A&&(y+=-20),M===".*"&&(y+=-50)}u.push(y)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const y=u[g]||"",S=i[g-1];h[S.name]=y&&S.repeatable?y.split("/"):y}return h}function a(l){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const y of g)if(y.type===0)u+=y.value;else if(y.type===1){const{value:S,repeatable:A,optional:x}=y,k=S in l?l[S]:"";if(Oe(k)&&!A)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const M=Oe(k)?k.join("/"):k;if(!M)if(x)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);u+=M}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function yf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ef(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=yf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wi(r))return 1;if(Wi(s))return-1}return s.length-r.length}function Wi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bf={type:0,value:""},wf=/[a-zA-Z0-9_]/;function If(t){if(!t)return[[]];if(t==="/")return[[bf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:wf.test(a)?g():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Tf(t,e,n){const r=vf(If(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Rf(t,e){const n=[],r=new Map;e=qi({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,g){const y=!g,S=Cf(u);S.aliasOf=g&&g.record;const A=qi(e,u),x=[S];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of j)x.push(q({},S,{components:g?g.record.components:S.components,path:L,aliasOf:g?g.record:S}))}let k,M;for(const j of x){const{path:L}=j;if(h&&L[0]!=="/"){const te=h.record.path,ne=te[te.length-1]==="/"?"":"/";j.path=h.record.path+(L&&ne+L)}if(k=Tf(j,h,A),g?g.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),y&&u.name&&!zi(k)&&o(u.name)),S.children){const te=S.children;for(let ne=0;ne<te.length;ne++)i(te[ne],k,g&&g.children[ne])}g=g||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&a(k)}return M?()=>{o(M)}:vn}function o(u){if(Ta(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&Ef(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ca(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!zi(u)&&r.set(u.record.name,u)}function l(u,h){let g,y={},S,A;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw Yt(1,{location:u});A=g.record.name,y=q(Ki(h.params,g.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Ki(u.params,g.keys.map(M=>M.name))),S=g.stringify(y)}else if("path"in u)S=u.path,g=n.find(M=>M.re.test(S)),g&&(y=g.parse(S),A=g.record.name);else{if(g=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!g)throw Yt(1,{location:u,currentLocation:h});A=g.record.name,y=q({},h.params,u.params),S=g.stringify(y)}const x=[];let k=g;for(;k;)x.unshift(k.record),k=k.parent;return{name:A,path:S,params:y,matched:x,meta:Pf(x)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Ki(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Cf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Sf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Sf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function zi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Pf(t){return t.reduce((e,n)=>q(e,n.meta),{})}function qi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ca(t,e){return e.children.some(n=>n===t||Ca(t,n))}const Sa=/#/g,Af=/&/g,Of=/\//g,kf=/=/g,Nf=/\?/g,Pa=/\+/g,Df=/%5B/g,Mf=/%5D/g,Aa=/%5E/g,Lf=/%60/g,Oa=/%7B/g,xf=/%7C/g,ka=/%7D/g,Uf=/%20/g;function Ws(t){return encodeURI(""+t).replace(xf,"|").replace(Df,"[").replace(Mf,"]")}function Ff(t){return Ws(t).replace(Oa,"{").replace(ka,"}").replace(Aa,"^")}function gs(t){return Ws(t).replace(Pa,"%2B").replace(Uf,"+").replace(Sa,"%23").replace(Af,"%26").replace(Lf,"`").replace(Oa,"{").replace(ka,"}").replace(Aa,"^")}function Bf(t){return gs(t).replace(kf,"%3D")}function $f(t){return Ws(t).replace(Sa,"%23").replace(Nf,"%3F")}function Hf(t){return t==null?"":$f(t).replace(Of,"%2F")}function ur(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function jf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Pa," "),o=i.indexOf("="),c=ur(o<0?i:i.slice(0,o)),a=o<0?null:ur(i.slice(o+1));if(c in e){let l=e[c];Oe(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Gi(t){let e="";for(let n in t){const r=t[n];if(n=Bf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Oe(r)?r.map(i=>i&&gs(i)):[r&&gs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Vf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Oe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Wf=Symbol(""),Ji=Symbol(""),kr=Symbol(""),Na=Symbol(""),ms=Symbol("");function on(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(Yt(4,{from:n,to:e})):h instanceof Error?c(h):gf(h)?c(Yt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(l);t.length<3&&(u=u.then(a)),u.catch(h=>c(h))})}function Vr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Kf(c)){const l=(c.__vccOpts||c)[e];l&&s.push(rt(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Yu(l)?l.default:l;i.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&rt(g,n,r,i,o)()}))}}return s}function Kf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yi(t){const e=Be(kr),n=Be(Na),r=Re(()=>e.resolve(Te(t.to))),s=Re(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(Jt.bind(null,u));if(g>-1)return g;const y=Xi(a[l-2]);return l>1&&Xi(u)===y&&h[h.length-1].path!==y?h.findIndex(Jt.bind(null,a[l-2])):g}),i=Re(()=>s.value>-1&&Gf(n.params,r.value.params)),o=Re(()=>s.value>-1&&s.value===n.matched.length-1&&wa(n.params,r.value.params));function c(a={}){return qf(a)?e[Te(t.replace)?"replace":"push"](Te(t.to)).catch(vn):Promise.resolve()}return{route:r,href:Re(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const zf=sa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yi,setup(t,{slots:e}){const n=Ir(Yi(t)),{options:r}=Be(kr),s=Re(()=>({[Qi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ba("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),fn=zf;function qf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Gf(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Oe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Xi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qi=(t,e,n)=>t??e??n,Jf=sa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Be(ms),s=Re(()=>t.route||r.value),i=Be(Ji,0),o=Re(()=>{let l=Te(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),c=Re(()=>s.value.matched[o.value]);Zn(Ji,Re(()=>o.value+1)),Zn(Wf,c),Zn(ms,s);const a=zo();return Xn(()=>[a.value,c.value,t.name],([l,u,h],[g,y,S])=>{u&&(u.instances[h]=l,y&&y!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),l&&u&&(!y||!Jt(u,y)||!g)&&(u.enterCallbacks[h]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=c.value,g=h&&h.components[u];if(!g)return Zi(n.default,{Component:g,route:l});const y=h.props[u],S=y?y===!0?l.params:typeof y=="function"?y(l):y:null,x=ba(g,q({},S,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Zi(n.default,{Component:x,route:l})||x}}});function Zi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Da=Jf;function Yf(t){const e=Rf(t.routes,t),n=t.parseQuery||jf,r=t.stringifyQuery||Gi,s=t.history,i=on(),o=on(),c=on(),a=yl(et);let l=et;Ft&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Hr.bind(null,_=>""+_),h=Hr.bind(null,Hf),g=Hr.bind(null,ur);function y(_,C){let T,O;return Ta(_)?(T=e.getRecordMatcher(_),O=C):O=_,e.addRoute(O,T)}function S(_){const C=e.getRecordMatcher(_);C&&e.removeRoute(C)}function A(){return e.getRoutes().map(_=>_.record)}function x(_){return!!e.getRecordMatcher(_)}function k(_,C){if(C=q({},C||a.value),typeof _=="string"){const p=jr(n,_,C.path),m=e.resolve({path:p.path},C),v=s.createHref(p.fullPath);return q(p,m,{params:g(m.params),hash:ur(p.hash),redirectedFrom:void 0,href:v})}let T;if("path"in _)T=q({},_,{path:jr(n,_.path,C.path).path});else{const p=q({},_.params);for(const m in p)p[m]==null&&delete p[m];T=q({},_,{params:h(p)}),C.params=h(C.params)}const O=e.resolve(T,C),z=_.hash||"";O.params=u(g(O.params));const f=Zu(r,q({},_,{hash:Ff(z),path:O.path})),d=s.createHref(f);return q({fullPath:f,hash:z,query:r===Gi?Vf(_.query):_.query||{}},O,{redirectedFrom:void 0,href:d})}function M(_){return typeof _=="string"?jr(n,_,a.value.path):q({},_)}function j(_,C){if(l!==_)return Yt(8,{from:C,to:_})}function L(_){return me(_)}function te(_){return L(q(M(_),{replace:!0}))}function ne(_){const C=_.matched[_.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let O=typeof T=="function"?T(_):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=M(O):{path:O},O.params={}),q({query:_.query,hash:_.hash,params:"path"in O?{}:_.params},O)}}function me(_,C){const T=l=k(_),O=a.value,z=_.state,f=_.force,d=_.replace===!0,p=ne(T);if(p)return me(q(M(p),{state:typeof p=="object"?q({},z,p.state):z,force:f,replace:d}),C||T);const m=T;m.redirectedFrom=C;let v;return!f&&ef(r,O,T)&&(v=Yt(16,{to:m,from:O}),De(O,O,!0,!1)),(v?Promise.resolve(v):ve(m,O)).catch(E=>Ve(E)?Ve(E,2)?E:Qe(E):K(E,m,O)).then(E=>{if(E){if(Ve(E,2))return me(q({replace:d},M(E.to),{state:typeof E.to=="object"?q({},z,E.to.state):z,force:f}),C||m)}else E=gt(m,O,!0,d,z);return Xe(m,O,E),E})}function Ee(_,C){const T=j(_,C);return T?Promise.reject(T):Promise.resolve()}function ke(_){const C=Mt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(_):_()}function ve(_,C){let T;const[O,z,f]=Xf(_,C);T=Vr(O.reverse(),"beforeRouteLeave",_,C);for(const p of O)p.leaveGuards.forEach(m=>{T.push(rt(m,_,C))});const d=Ee.bind(null,_,C);return T.push(d),ae(T).then(()=>{T=[];for(const p of i.list())T.push(rt(p,_,C));return T.push(d),ae(T)}).then(()=>{T=Vr(z,"beforeRouteUpdate",_,C);for(const p of z)p.updateGuards.forEach(m=>{T.push(rt(m,_,C))});return T.push(d),ae(T)}).then(()=>{T=[];for(const p of f)if(p.beforeEnter)if(Oe(p.beforeEnter))for(const m of p.beforeEnter)T.push(rt(m,_,C));else T.push(rt(p.beforeEnter,_,C));return T.push(d),ae(T)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),T=Vr(f,"beforeRouteEnter",_,C),T.push(d),ae(T))).then(()=>{T=[];for(const p of o.list())T.push(rt(p,_,C));return T.push(d),ae(T)}).catch(p=>Ve(p,8)?p:Promise.reject(p))}function Xe(_,C,T){c.list().forEach(O=>ke(()=>O(_,C,T)))}function gt(_,C,T,O,z){const f=j(_,C);if(f)return f;const d=C===et,p=Ft?history.state:{};T&&(O||d?s.replace(_.fullPath,q({scroll:d&&p&&p.scroll},z)):s.push(_.fullPath,z)),a.value=_,De(_,C,T,d),Qe()}let Ne;function nn(){Ne||(Ne=s.listen((_,C,T)=>{if(!$n.listening)return;const O=k(_),z=ne(O);if(z){me(q(z,{replace:!0}),O).catch(vn);return}l=O;const f=a.value;Ft&&lf($i(f.fullPath,T.delta),Or()),ve(O,f).catch(d=>Ve(d,12)?d:Ve(d,2)?(me(d.to,O).then(p=>{Ve(p,20)&&!T.delta&&T.type===Sn.pop&&s.go(-1,!1)}).catch(vn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),K(d,O,f))).then(d=>{d=d||gt(O,f,!1),d&&(T.delta&&!Ve(d,8)?s.go(-T.delta,!1):T.type===Sn.pop&&Ve(d,20)&&s.go(-1,!1)),Xe(O,f,d)}).catch(vn)}))}let Nt=on(),re=on(),J;function K(_,C,T){Qe(_);const O=re.list();return O.length?O.forEach(z=>z(_,C,T)):console.error(_),Promise.reject(_)}function je(){return J&&a.value!==et?Promise.resolve():new Promise((_,C)=>{Nt.add([_,C])})}function Qe(_){return J||(J=!_,nn(),Nt.list().forEach(([C,T])=>_?T(_):C()),Nt.reset()),_}function De(_,C,T,O){const{scrollBehavior:z}=t;if(!Ft||!z)return Promise.resolve();const f=!T&&uf($i(_.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return Yo().then(()=>z(_,C,f)).then(d=>d&&cf(d)).catch(d=>K(d,_,C))}const he=_=>s.go(_);let Dt;const Mt=new Set,$n={currentRoute:a,listening:!0,addRoute:y,removeRoute:S,hasRoute:x,getRoutes:A,resolve:k,options:t,push:L,replace:te,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:re.add,isReady:je,install(_){const C=this;_.component("RouterLink",fn),_.component("RouterView",Da),_.config.globalProperties.$router=C,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Te(a)}),Ft&&!Dt&&a.value===et&&(Dt=!0,L(s.location).catch(z=>{}));const T={};for(const z in et)Object.defineProperty(T,z,{get:()=>a.value[z],enumerable:!0});_.provide(kr,C),_.provide(Na,$o(T)),_.provide(ms,a);const O=_.unmount;Mt.add(_),_.unmount=function(){Mt.delete(_),Mt.size<1&&(l=et,Ne&&Ne(),Ne=null,a.value=et,Dt=!1,J=!1),O()}}};function ae(_){return _.reduce((C,T)=>C.then(()=>ke(T)),Promise.resolve())}return $n}function Xf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>Jt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>Jt(l,a))||s.push(a))}return[n,r,s]}function Qf(){return Be(kr)}/**
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
 */const Ma=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},La={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,y=l&63;a||(y=64,o||(g=64)),r.push(n[u],n[h],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ma(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new ed;const g=i<<2|c>>4;if(r.push(g),l!==64){const y=c<<4&240|l>>2;if(r.push(y),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ed extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const td=function(t){const e=Ma(t);return La.encodeByteArray(e,!0)},xa=function(t){return td(t).replace(/\./g,"")},Ua=function(t){try{return La.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rd=()=>nd().__FIREBASE_DEFAULTS__,sd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},id=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ua(t[1]);return e&&JSON.parse(e)},Ks=()=>{try{return rd()||sd()||id()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},od=t=>{var e,n;return(n=(e=Ks())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fa=()=>{var t;return(t=Ks())===null||t===void 0?void 0:t.config},Ba=t=>{var e;return(e=Ks())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ad{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function ld(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ud(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fd(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dd(){try{return typeof indexedDB=="object"}catch{return!1}}function hd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const pd="FirebaseError";class ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pd,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dn.prototype.create)}}class Dn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ht(s,c,r)}}function gd(t,e){return t.replace(md,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const md=/\{\$([^}]+)}/g;function _d(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(eo(i)&&eo(o)){if(!fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function eo(t){return t!==null&&typeof t=="object"}/**
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
 */function Mn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vd(t,e){const n=new yd(t,e);return n.subscribe.bind(n)}class yd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ed(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wr),s.error===void 0&&(s.error=Wr),s.complete===void 0&&(s.complete=Wr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ed(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wr(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vt="[DEFAULT]";/**
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
 */class bd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ad;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Id(e))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vt){return this.instances.has(e)}getOptions(e=vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vt){return this.component?this.component.multipleInstances?e:vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wd(t){return t===vt?void 0:t}function Id(t){return t.instantiationMode==="EAGER"}/**
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
 */class Td{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Rd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Cd=Y.INFO,Sd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Pd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $a{constructor(e){this.name=e,this._logLevel=Cd,this._logHandler=Pd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Ad=(t,e)=>e.some(n=>t instanceof n);let to,no;function Od(){return to||(to=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kd(){return no||(no=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ha=new WeakMap,_s=new WeakMap,ja=new WeakMap,Kr=new WeakMap,zs=new WeakMap;function Nd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ut(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ha.set(n,t)}).catch(()=>{}),zs.set(e,t),e}function Dd(t){if(_s.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_s.set(t,e)}let vs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _s.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ja.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Md(t){vs=t(vs)}function Ld(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zr(this),e,...n);return ja.set(r,e.sort?e.sort():[e]),ut(r)}:kd().includes(t)?function(...e){return t.apply(zr(this),e),ut(Ha.get(this))}:function(...e){return ut(t.apply(zr(this),e))}}function xd(t){return typeof t=="function"?Ld(t):(t instanceof IDBTransaction&&Dd(t),Ad(t,Od())?new Proxy(t,vs):t)}function ut(t){if(t instanceof IDBRequest)return Nd(t);if(Kr.has(t))return Kr.get(t);const e=xd(t);return e!==t&&(Kr.set(t,e),zs.set(e,t)),e}const zr=t=>zs.get(t);function Ud(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ut(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ut(o.result),a.oldVersion,a.newVersion,ut(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Fd=["get","getKey","getAll","getAllKeys","count"],Bd=["put","add","delete","clear"],qr=new Map;function ro(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qr.get(e))return qr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Bd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fd.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return qr.set(e,i),i}Md(t=>({...t,get:(e,n,r)=>ro(e,n)||t.get(e,n,r),has:(e,n)=>!!ro(e,n)||t.has(e,n)}));/**
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
 */class $d{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ys="@firebase/app",so="0.9.19";/**
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
 */const St=new $a("@firebase/app"),jd="@firebase/app-compat",Vd="@firebase/analytics-compat",Wd="@firebase/analytics",Kd="@firebase/app-check-compat",zd="@firebase/app-check",qd="@firebase/auth",Gd="@firebase/auth-compat",Jd="@firebase/database",Yd="@firebase/database-compat",Xd="@firebase/functions",Qd="@firebase/functions-compat",Zd="@firebase/installations",eh="@firebase/installations-compat",th="@firebase/messaging",nh="@firebase/messaging-compat",rh="@firebase/performance",sh="@firebase/performance-compat",ih="@firebase/remote-config",oh="@firebase/remote-config-compat",ah="@firebase/storage",ch="@firebase/storage-compat",lh="@firebase/firestore",uh="@firebase/firestore-compat",fh="firebase",dh="10.4.0";/**
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
 */const Es="[DEFAULT]",hh={[ys]:"fire-core",[jd]:"fire-core-compat",[Wd]:"fire-analytics",[Vd]:"fire-analytics-compat",[zd]:"fire-app-check",[Kd]:"fire-app-check-compat",[qd]:"fire-auth",[Gd]:"fire-auth-compat",[Jd]:"fire-rtdb",[Yd]:"fire-rtdb-compat",[Xd]:"fire-fn",[Qd]:"fire-fn-compat",[Zd]:"fire-iid",[eh]:"fire-iid-compat",[th]:"fire-fcm",[nh]:"fire-fcm-compat",[rh]:"fire-perf",[sh]:"fire-perf-compat",[ih]:"fire-rc",[oh]:"fire-rc-compat",[ah]:"fire-gcs",[ch]:"fire-gcs-compat",[lh]:"fire-fst",[uh]:"fire-fst-compat","fire-js":"fire-js",[fh]:"fire-js-all"};/**
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
 */const dr=new Map,bs=new Map;function ph(t,e){try{t.container.addComponent(e)}catch(n){St.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pn(t){const e=t.name;if(bs.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;bs.set(e,t);for(const n of dr.values())ph(n,t);return!0}function Va(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const gh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new Dn("app","Firebase",gh);/**
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
 */class mh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Ln=dh;function Wa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Es,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ft.create("bad-app-name",{appName:String(s)});if(n||(n=Fa()),!n)throw ft.create("no-options");const i=dr.get(s);if(i){if(fr(n,i.options)&&fr(r,i.config))return i;throw ft.create("duplicate-app",{appName:s})}const o=new Td(s);for(const a of bs.values())o.addComponent(a);const c=new mh(n,r,o);return dr.set(s,c),c}function _h(t=Es){const e=dr.get(t);if(!e&&t===Es&&Fa())return Wa();if(!e)throw ft.create("no-app",{appName:t});return e}function jt(t,e,n){var r;let s=(r=hh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(c.join(" "));return}Pn(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const vh="firebase-heartbeat-database",yh=1,An="firebase-heartbeat-store";let Gr=null;function Ka(){return Gr||(Gr=Ud(vh,yh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(An)}}}).catch(t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})})),Gr}async function Eh(t){try{return await(await Ka()).transaction(An).objectStore(An).get(za(t))}catch(e){if(e instanceof ht)St.warn(e.message);else{const n=ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(n.message)}}}async function io(t,e){try{const r=(await Ka()).transaction(An,"readwrite");await r.objectStore(An).put(e,za(t)),await r.done}catch(n){if(n instanceof ht)St.warn(n.message);else{const r=ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});St.warn(r.message)}}}function za(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bh=1024,wh=30*24*60*60*1e3;class Ih{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=wh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oo(),{heartbeatsToSend:n,unsentEntries:r}=Th(this._heartbeatsCache.heartbeats),s=xa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function oo(){return new Date().toISOString().substring(0,10)}function Th(t,e=bh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ao(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ao(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dd()?hd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Eh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ao(t){return xa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ch(t){Pn(new Xt("platform-logger",e=>new $d(e),"PRIVATE")),Pn(new Xt("heartbeat",e=>new Ih(e),"PRIVATE")),jt(ys,so,t),jt(ys,so,"esm2017"),jt("fire-js","")}Ch("");function qs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function co(t){return t!==void 0&&t.enterprise!==void 0}class Sh{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function qa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ph=qa,Ga=new Dn("auth","Firebase",qa());/**
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
 */const hr=new $a("@firebase/auth");function Ah(t,...e){hr.logLevel<=Y.WARN&&hr.warn(`Auth (${Ln}): ${t}`,...e)}function tr(t,...e){hr.logLevel<=Y.ERROR&&hr.error(`Auth (${Ln}): ${t}`,...e)}/**
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
 */function ye(t,...e){throw Gs(t,...e)}function $e(t,...e){return Gs(t,...e)}function Ja(t,e,n){const r=Object.assign(Object.assign({},Ph()),{[e]:n});return new Dn("auth","Firebase",r).create(e,{appName:t.name})}function Oh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ye(t,"argument-error"),Ja(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ga.create(t,...e)}function U(t,e,...n){if(!t)throw Gs(e,...n)}function Ke(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tr(e),new Error(e)}function Ge(t,e){t||Ke(e)}/**
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
 */function ws(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kh(){return lo()==="http:"||lo()==="https:"}function lo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Nh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kh()||ld()||"connection"in navigator)?navigator.onLine:!0}function Dh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=cd()||ud()}get(){return Nh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Js(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ya{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Mh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Lh=new xn(3e4,6e4);function Ot(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kt(t,e,n,r,s={}){return Xa(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Mn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ya.fetch()(Qa(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Xa(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mh),e);try{const s=new xh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw qn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw qn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw qn(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ja(t,u,l);ye(t,u)}}catch(s){if(s instanceof ht)throw s;ye(t,"network-request-failed",{message:String(s)})}}async function Un(t,e,n,r,s={}){const i=await kt(t,e,n,r,s);return"mfaPendingCredential"in i&&ye(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Qa(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Js(t.config,s):`${t.config.apiScheme}://${s}`}class xh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($e(this.auth,"network-request-failed")),Lh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=$e(t,e,r);return s.customData._tokenResponse=n,s}async function Uh(t,e){return kt(t,"GET","/v2/recaptchaConfig",Ot(t,e))}/**
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
 */async function Fh(t,e){return kt(t,"POST","/v1/accounts:delete",e)}async function Bh(t,e){return kt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function En(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $h(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Ys(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:En(Jr(s.auth_time)),issuedAtTime:En(Jr(s.iat)),expirationTime:En(Jr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Jr(t){return Number(t)*1e3}function Ys(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ua(n);return s?JSON.parse(s):(tr("Failed to decode base64 JWT payload"),null)}catch(s){return tr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hh(t){const e=Ys(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function On(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ht&&jh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Vh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Za{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await On(t,Bh(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zh(i.providerUserInfo):[],c=Kh(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Za(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Wh(t){const e=Ye(t);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zh(t){return t.map(e=>{var{providerId:n}=e,r=qs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function qh(t,e){const n=await Xa(t,{},async()=>{const r=Mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Qa(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ya.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await qh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new kn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
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
 */function tt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Za(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await On(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $h(this,e)}reload(){return Wh(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await On(this,Fh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,x=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:L,isAnonymous:te,providerData:ne,stsTokenManager:me}=n;U(j&&me,e,"internal-error");const Ee=kn.fromJSON(this.name,me);U(typeof j=="string",e,"internal-error"),tt(h,e.name),tt(g,e.name),U(typeof L=="boolean",e,"internal-error"),U(typeof te=="boolean",e,"internal-error"),tt(y,e.name),tt(S,e.name),tt(A,e.name),tt(x,e.name),tt(k,e.name),tt(M,e.name);const ke=new Rt({uid:j,auth:e,email:g,emailVerified:L,displayName:h,isAnonymous:te,photoURL:S,phoneNumber:y,tenantId:A,stsTokenManager:Ee,createdAt:k,lastLoginAt:M});return ne&&Array.isArray(ne)&&(ke.providerData=ne.map(ve=>Object.assign({},ve))),x&&(ke._redirectEventId=x),ke}static async _fromIdTokenResponse(e,n,r=!1){const s=new kn;s.updateFromServerResponse(n);const i=new Rt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pr(i),i}}/**
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
 */const uo=new Map;function ze(t){Ge(t instanceof Function,"Expected a class definition");let e=uo.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uo.set(t,e),e)}/**
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
 */class ec{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ec.type="NONE";const fo=ec;/**
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
 */function nr(t,e,n){return`firebase:${t}:${e}:${n}`}class Vt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nr(this.userKey,s.apiKey,i),this.fullPersistenceKey=nr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vt(ze(fo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ze(fo);const o=nr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Rt._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Vt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Vt(i,e,r))}}/**
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
 */function ho(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ic(e))return"Blackberry";if(oc(e))return"Webos";if(Xs(e))return"Safari";if((e.includes("chrome/")||nc(e))&&!e.includes("edge/"))return"Chrome";if(sc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tc(t=fe()){return/firefox\//i.test(t)}function Xs(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nc(t=fe()){return/crios\//i.test(t)}function rc(t=fe()){return/iemobile/i.test(t)}function sc(t=fe()){return/android/i.test(t)}function ic(t=fe()){return/blackberry/i.test(t)}function oc(t=fe()){return/webos/i.test(t)}function Nr(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gh(t=fe()){var e;return Nr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jh(){return fd()&&document.documentMode===10}function ac(t=fe()){return Nr(t)||sc(t)||oc(t)||ic(t)||/windows phone/i.test(t)||rc(t)}function Yh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function cc(t,e=[]){let n;switch(t){case"Browser":n=ho(fe());break;case"Worker":n=`${ho(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ln}/${r}`}/**
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
 */class Xh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Qh(t,e={}){return kt(t,"GET","/v2/passwordPolicy",Ot(t,e))}/**
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
 */const Zh=6;class ep{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Zh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class tp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new po(this),this.idTokenSubscription=new po(this),this.beforeStateQueue=new Xh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ga,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qh(this),n=new ep(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Vt.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ah(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pt(t){return Ye(t)}class po{constructor(e){this.auth=e,this.observer=null,this.addObserver=vd(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function np(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=$e("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",np().appendChild(r)})}function rp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sp="https://www.google.com/recaptcha/enterprise.js?render=",ip="recaptcha-enterprise",op="NO_RECAPTCHA";class ap{constructor(e){this.type=ip,this.auth=pt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Uh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Sh(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;co(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(op)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&co(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}lc(sp+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function gr(t,e,n,r=!1){const s=new ap(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function cp(t,e){const n=Va(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fr(i,e??{}))return s;ye(s,"already-initialized")}return n.initialize({options:e})}function lp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function up(t,e,n){const r=pt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=uc(e),{host:o,port:c}=fp(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||dp()}function uc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fp(t){const e=uc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:go(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:go(o)}}}function go(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,n){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}async function hp(t,e){return kt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Yr(t,e){return Un(t,"POST","/v1/accounts:signInWithPassword",Ot(t,e))}/**
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
 */async function pp(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}async function gp(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}/**
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
 */class Nn extends Qs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Nn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Nn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await gr(e,r,"signInWithPassword");return Yr(e,s)}else return Yr(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await gr(e,r,"signInWithPassword");return Yr(e,i)}else return Promise.reject(s)});case"emailLink":return pp(e,{email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return hp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gp(e,{idToken:n,email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Wt(t,e){return Un(t,"POST","/v1/accounts:signInWithIdp",Ot(t,e))}/**
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
 */const mp="http://localhost";class Pt extends Qs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Pt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wt(e,n)}buildRequest(){const e={requestUri:mp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mn(n)}return e}}/**
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
 */function _p(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vp(t){const e=dn(hn(t)).link,n=e?dn(hn(e)).deep_link_id:null,r=dn(hn(t)).deep_link_id;return(r?dn(hn(r)).link:null)||r||n||e||t}class Zs{constructor(e){var n,r,s,i,o,c;const a=dn(hn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,h=_p((s=a.mode)!==null&&s!==void 0?s:null);U(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=vp(e);try{return new Zs(n)}catch{return null}}}/**
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
 */class tn{constructor(){this.providerId=tn.PROVIDER_ID}static credential(e,n){return Nn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zs.parseLink(n);return U(r,"argument-error"),Nn._fromEmailAndCode(e,r.code,r.tenantId)}}tn.PROVIDER_ID="password";tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ei{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fn extends ei{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class st extends Fn{constructor(){super("facebook.com")}static credential(e){return Pt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.FACEBOOK_SIGN_IN_METHOD="facebook.com";st.PROVIDER_ID="facebook.com";/**
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
 */class it extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return it.credential(n,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
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
 */class ot extends Fn{constructor(){super("github.com")}static credential(e){return Pt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com";ot.PROVIDER_ID="github.com";/**
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
 */class at extends Fn{constructor(){super("twitter.com")}static credential(e,n){return Pt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return at.credential(n,r)}catch{return null}}}at.TWITTER_SIGN_IN_METHOD="twitter.com";at.PROVIDER_ID="twitter.com";/**
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
 */async function Xr(t,e){return Un(t,"POST","/v1/accounts:signUp",Ot(t,e))}/**
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
 */class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rt._fromIdTokenResponse(e,r,s),o=mo(r);return new At({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=mo(r);return new At({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function mo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mr extends ht{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,mr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new mr(e,n,r,s)}}function fc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mr._fromErrorAndOperation(t,i,e,r):i})}async function yp(t,e,n=!1){const r=await On(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return At._forOperation(t,"link",r)}/**
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
 */async function Ep(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await On(t,fc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=Ys(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),At._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ye(r,"user-mismatch"),i}}/**
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
 */async function dc(t,e,n=!1){const r="signIn",s=await fc(t,r,e),i=await At._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function bp(t,e){return dc(pt(t),e)}/**
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
 */async function hc(t){const e=pt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qg(t,e,n){var r;const s=pt(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await gr(s,i,"signUpPassword");o=Xr(s,l)}else o=Xr(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await gr(s,i,"signUpPassword");return Xr(s,u)}throw l});const c=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&hc(t),l}),a=await At._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(a.user),a}function Gg(t,e,n){return bp(Ye(t),tn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hc(t),r})}function wp(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function Ip(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function pc(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function Tp(t){return Ye(t).signOut()}const _r="__sak";/**
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
 */class gc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_r,"1"),this.storage.removeItem(_r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Rp(){const t=fe();return Xs(t)||Nr(t)}const Cp=1e3,Sp=10;class mc extends gc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rp()&&Yh(),this.fallbackToPolling=ac(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Jh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Sp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Cp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mc.type="LOCAL";const Pp=mc;/**
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
 */class _c extends gc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_c.type="SESSION";const vc=_c;/**
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
 */function Ap(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Dr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Ap(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dr.receivers=[];/**
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
 */function ti(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Op{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=ti("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function He(){return window}function kp(t){He().location.href=t}/**
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
 */function yc(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function Np(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mp(){return yc()?self:null}/**
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
 */const Ec="firebaseLocalStorageDb",Lp=1,vr="firebaseLocalStorage",bc="fbase_key";class Bn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mr(t,e){return t.transaction([vr],e?"readwrite":"readonly").objectStore(vr)}function xp(){const t=indexedDB.deleteDatabase(Ec);return new Bn(t).toPromise()}function Is(){const t=indexedDB.open(Ec,Lp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vr,{keyPath:bc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vr)?e(r):(r.close(),await xp(),e(await Is()))})})}async function _o(t,e,n){const r=Mr(t,!0).put({[bc]:e,value:n});return new Bn(r).toPromise()}async function Up(t,e){const n=Mr(t,!1).get(e),r=await new Bn(n).toPromise();return r===void 0?null:r.value}function vo(t,e){const n=Mr(t,!0).delete(e);return new Bn(n).toPromise()}const Fp=800,Bp=3;class wc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Is(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Bp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dr._getInstance(Mp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Np(),!this.activeServiceWorker)return;this.sender=new Op(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Is();return await _o(e,_r,"1"),await vo(e,_r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_o(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Up(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Mr(s,!1).getAll();return new Bn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wc.type="LOCAL";const $p=wc;new xn(3e4,6e4);/**
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
 */function Ic(t,e){return e?ze(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ni extends Qs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hp(t){return dc(t.auth,new ni(t),t.bypassAuthState)}function jp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Ep(n,new ni(t),t.bypassAuthState)}async function Vp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),yp(n,new ni(t),t.bypassAuthState)}/**
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
 */class Tc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hp;case"linkViaPopup":case"linkViaRedirect":return Vp;case"reauthViaPopup":case"reauthViaRedirect":return jp;default:ye(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wp=new xn(2e3,1e4);async function Jg(t,e,n){const r=pt(t);Oh(t,e,ei);const s=Ic(r,n);return new wt(r,"signInViaPopup",e,s).executeNotNull()}class wt extends Tc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wp.get())};e()}}wt.currentPopupAction=null;/**
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
 */const Kp="pendingRedirect",rr=new Map;class zp extends Tc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const r=await qp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qp(t,e){const n=Yp(e),r=Jp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Gp(t,e){rr.set(t._key(),e)}function Jp(t){return ze(t._redirectPersistence)}function Yp(t){return nr(Kp,t.config.apiKey,t.name)}async function Xp(t,e,n=!1){const r=pt(t),s=Ic(r,e),o=await new zp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Qp=10*60*1e3;class Zp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($e(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qp&&this.cachedEventUids.clear(),this.cachedEventUids.has(yo(e))}saveEventToCache(e){this.cachedEventUids.add(yo(e)),this.lastProcessedEventTime=Date.now()}}function yo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rc(t);default:return!1}}/**
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
 */async function tg(t,e={}){return kt(t,"GET","/v1/projects",e)}/**
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
 */const ng=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rg=/^https?/;async function sg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tg(t);for(const n of e)try{if(ig(n))return}catch{}ye(t,"unauthorized-domain")}function ig(t){const e=ws(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rg.test(n))return!1;if(ng.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const og=new xn(3e4,6e4);function Eo(){const t=He().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ag(t){return new Promise((e,n)=>{var r,s,i;function o(){Eo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eo(),n($e(t,"network-request-failed"))},timeout:og.get()})}if(!((s=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=He().gapi)===null||i===void 0)&&i.load)o();else{const c=rp("iframefcb");return He()[c]=()=>{gapi.load?o():n($e(t,"network-request-failed"))},lc(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw sr=null,e})}let sr=null;function cg(t){return sr=sr||ag(t),sr}/**
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
 */const lg=new xn(5e3,15e3),ug="__/auth/iframe",fg="emulator/auth/iframe",dg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Js(e,fg):`https://${t.config.authDomain}/${ug}`,r={apiKey:e.apiKey,appName:t.name,v:Ln},s=hg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mn(r).slice(1)}`}async function gg(t){const e=await cg(t),n=He().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:pg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=$e(t,"network-request-failed"),c=He().setTimeout(()=>{i(o)},lg.get());function a(){He().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const mg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_g=500,vg=600,yg="_blank",Eg="http://localhost";class bo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bg(t,e,n,r=_g,s=vg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},mg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=fe().toLowerCase();n&&(c=nc(l)?yg:n),tc(l)&&(e=e||Eg,a.scrollbars="yes");const u=Object.entries(a).reduce((g,[y,S])=>`${g}${y}=${S},`,"");if(Gh(l)&&c!=="_self")return wg(e||"",c),new bo(null);const h=window.open(e||"",c,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new bo(h)}function wg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ig="__/auth/handler",Tg="emulator/auth/handler",Rg=encodeURIComponent("fac");async function wo(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ln,eventId:s};if(e instanceof ei){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_d(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Fn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${Rg}=${encodeURIComponent(a)}`:"";return`${Cg(t)}?${Mn(c).slice(1)}${l}`}function Cg({config:t}){return t.emulator?Js(t,Tg):`https://${t.authDomain}/${Ig}`}/**
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
 */const Qr="webStorageSupport";class Sg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vc,this._completeRedirectFn=Xp,this._overrideRedirectResult=Gp}async _openPopup(e,n,r,s){var i;Ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await wo(e,n,r,ws(),s);return bg(e,o,ti())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await wo(e,n,r,ws(),s);return kp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gg(e),r=new Zp(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qr,{type:Qr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qr];o!==void 0&&n(!!o),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ac()||Xs()||Nr()}}const Pg=Sg;var Io="@firebase/auth",To="1.3.0";/**
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
 */class Ag{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Og(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kg(t){Pn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cc(t)},l=new tp(r,s,i,a);return lp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pn(new Xt("auth-internal",e=>{const n=pt(e.getProvider("auth").getImmediate());return(r=>new Ag(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Io,To,Og(t)),jt(Io,To,"esm2017")}/**
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
 */const Ng=5*60,Dg=Ba("authIdTokenMaxAge")||Ng;let Ro=null;const Mg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Dg)return;const s=n==null?void 0:n.token;Ro!==s&&(Ro=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cc(t=_h()){const e=Va(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cp(t,{popupRedirectResolver:Pg,persistence:[$p,Pp,vc]}),r=Ba("authTokenSyncURL");if(r){const i=Mg(r);Ip(n,i,()=>i(n.currentUser)),wp(n,o=>i(o))}const s=od("auth");return s&&up(n,`http://${s}`),n}kg("Browser");const Lg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},xg={class:"wrapper"},Ug={__name:"App",setup(t){const e=Qf(),n=zo(!1);let r;aa(()=>{r=Cc(),pc(r,i=>{i?n.value=!0:n.value=!1})});const s=()=>{Tp(r).then(()=>{e.push("/")})};return(i,o)=>(fs(),Ri(xe,null,[_n("header",null,[_n("div",xg,[_n("nav",null,[se(Te(fn),{to:"/"},{default:cn(()=>[un("Home")]),_:1}),se(Te(fn),{to:"/feed"},{default:cn(()=>[un("Feed")]),_:1}),se(Te(fn),{to:"/register"},{default:cn(()=>[un("Register")]),_:1}),se(Te(fn),{to:"/signin"},{default:cn(()=>[un("Login")]),_:1}),n.value?(fs(),Ri("button",{key:0,onClick:s},"Log Out")):mu("",!0)])])]),se(Te(Da))],64))}},Fg=Lg(Ug,[["__scopeId","data-v-6fca785a"]]),Bg="modulepreload",$g=function(t){return"/"+t},Co={},Gn=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=$g(i),i in Co)return;Co[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Bg,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Sc=Yf({history:pf(),routes:[{path:"/",component:()=>Gn(()=>import("./Home-bbc9aa62.js"),[])},{path:"/register",component:()=>Gn(()=>import("./Register-7125c960.js"),[])},{path:"/signin",component:()=>Gn(()=>import("./Signin-330c369a.js"),[])},{path:"/feed",component:()=>Gn(()=>import("./Feed-a56f1069.js"),[]),meta:{requiresAuth:!0}}]}),Hg=()=>new Promise((t,e)=>{const n=pc(Cc(),r=>{n(),t(r)},e)});Sc.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await Hg()?n():(alert("You have no access!"),n("/")):n()});var jg="firebase",Vg="10.4.0";/**
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
 */jt(jg,Vg,"app");const Wg={apiKey:"AIzaSyAgUvqPeTE_Fv39OJNedvXEjQj4Ymyy9l4",authDomain:"authproj-9229b.firebaseapp.com",projectId:"authproj-9229b",storageBucket:"authproj-9229b.appspot.com",messagingSenderId:"646073108314",appId:"1:646073108314:web:7204a6869cc91bace59563",measurementId:"G-J2MJW67QXM"};Wa(Wg);const Pc=Gu(Fg);Pc.use(Sc);Pc.mount("#app");export{xe as F,it as G,Lg as _,un as a,_n as b,Ri as c,qg as d,Gg as e,Cc as g,fs as o,zo as r,Jg as s,Qf as u,zg as v,Kg as w};
