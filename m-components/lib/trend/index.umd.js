(function(d,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(d=typeof globalThis<"u"?globalThis:d||self,t(d.index={},d.Vue))})(this,function(d,t){"use strict";function C(e){for(var o=-1,n=e==null?0:e.length,r={};++o<n;){var c=e[o];r[c[0]]=c[1]}return r}var g;const S=typeof window<"u",x=e=>typeof e=="number";S&&((g=window==null?void 0:window.navigator)==null?void 0:g.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent),process.env.NODE_ENV!=="production"&&Object.freeze({}),process.env.NODE_ENV!=="production"&&Object.freeze([]);const B=Object.prototype.hasOwnProperty,w=(e,o)=>B.call(e,o),$=e=>typeof e=="string",h=e=>e!==null&&typeof e=="object",j=e=>e===void 0;class k extends Error{constructor(o){super(o),this.name="ElementPlusError"}}function z(e,o){if(process.env.NODE_ENV!=="production"){const n=$(e)?new k(`[${e}] ${o}`):e;console.warn(n)}}const A="utils/dom/style";function T(e,o="px"){if(!e)return"";if($(e))return e;if(x(e))return`${e}${o}`;z(A,"binding value must be a string or number")}const E="__epPropKey",I=e=>e,D=e=>h(e)&&!!e[E],U=(e,o)=>{if(!h(e)||D(e))return e;const{values:n,required:r,default:c,type:i,validator:_}=e,y={type:i,required:!!r,validator:n||_?m=>{let u=!1,p=[];if(n&&(p=Array.from(n),w(e,"default")&&p.push(c),u||(u=p.includes(m))),_&&(u||(u=_(m))),!u&&p.length>0){const P=[...new Set(p)].map(V=>JSON.stringify(V)).join(", ");t.warn(`Invalid prop: validation failed${o?` for prop "${o}"`:""}. Expected one of [${P}], got value ${JSON.stringify(m)}.`)}return u}:void 0,[E]:!0};return w(e,"default")&&(y.default=c),y},q=e=>C(Object.entries(e).map(([o,n])=>[o,U(n,o)])),K=(e,o)=>{if(e.install=n=>{for(const r of[e,...Object.values(o!=null?o:{})])n.component(r.name,r)},o)for(const[n,r]of Object.entries(o))e[n]=r;return e},v=Symbol(),b=t.ref();function J(e,o=void 0){const n=t.getCurrentInstance()?t.inject(v,b):b;return e?t.computed(()=>{var r,c;return(c=(r=n.value)==null?void 0:r[e])!=null?c:o}):n}const M="el",G="is-",f=(e,o,n,r,c)=>{let i=`${e}-${o}`;return n&&(i+=`-${n}`),r&&(i+=`__${r}`),c&&(i+=`--${c}`),i},W=e=>{const o=J("namespace"),n=t.computed(()=>o.value||M);return{namespace:n,b:(s="")=>f(t.unref(n),e,s,"",""),e:s=>s?f(t.unref(n),e,"",s,""):"",m:s=>s?f(t.unref(n),e,"","",s):"",be:(s,l)=>s&&l?f(t.unref(n),e,s,l,""):"",em:(s,l)=>s&&l?f(t.unref(n),e,"",s,l):"",bm:(s,l)=>s&&l?f(t.unref(n),e,s,"",l):"",bem:(s,l,a)=>s&&l&&a?f(t.unref(n),e,s,l,a):"",is:(s,...l)=>{const a=l.length>=1?l[0]:!0;return s&&a?`${G}${s}`:""},cssVar:s=>{const l={};for(const a in s)l[`--${n.value}-${a}`]=s[a];return l},cssVarName:s=>`--${n.value}-${s}`,cssVarBlock:s=>{const l={};for(const a in s)l[`--${n.value}-${e}-${a}`]=s[a];return l},cssVarBlockName:s=>`--${n.value}-${e}-${s}`}};var F=(e,o)=>{const n=e.__vccOpts||e;for(const[r,c]of o)n[r]=c;return n};const H=q({size:{type:I([Number,String])},color:{type:String}}),L={name:"ElIcon",inheritAttrs:!1},Q=t.defineComponent({...L,props:H,setup(e){const o=e,n=W("icon"),r=t.computed(()=>!o.size&&!o.color?{}:{fontSize:j(o.size)?void 0:T(o.size),"--color":o.color});return(c,i)=>(t.openBlock(),t.createElementBlock("i",t.mergeProps({class:t.unref(n).b(),style:t.unref(r)},c.$attrs),[t.renderSlot(c.$slots,"default")],16))}});var R=F(Q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const N=K(R),X={class:"trend"},Y={class:"text"},Z={key:1},ee={class:"icon"},te=t.defineComponent({__name:"index",props:{type:{type:String,default:"up"},text:{type:String,default:"text"},upColor:{type:String,default:"#f5222d"},downColor:{type:String,default:"#52c41a"}},setup(e){const o=t.useSlots();return console.log(o),(n,r)=>{const c=t.resolveComponent("ArrowUp"),i=t.resolveComponent("ArrowDown");return t.openBlock(),t.createElementBlock("div",X,[t.createElementVNode("div",Y,[t.unref(o).text?t.renderSlot(n.$slots,"text",{key:0},void 0,!0):(t.openBlock(),t.createElementBlock("div",Z,t.toDisplayString(e.text),1))]),t.createElementVNode("div",ee,[e.type==="up"?(t.openBlock(),t.createBlock(t.unref(N),{key:0,style:t.normalizeStyle({color:e.upColor})},{default:t.withCtx(()=>[t.createVNode(c)]),_:1},8,["style"])):(t.openBlock(),t.createBlock(t.unref(N),{key:1,style:t.normalizeStyle({color:e.downColor})},{default:t.withCtx(()=>[t.createVNode(i)]),_:1},8,["style"]))])])}}}),se="",O=((e,o)=>{const n=e.__vccOpts||e;for(const[r,c]of o)n[r]=c;return n})(te,[["__scopeId","data-v-cc0f8158"]]),ne={install(e){e.component("Trend",O)}};d.Trend=O,d.default=ne,Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
