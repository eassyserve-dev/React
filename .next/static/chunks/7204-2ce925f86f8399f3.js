(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7204],{51817:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(79205).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},83229:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(79205).Z)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},30166:function(e,t,n){"use strict";n.d(t,{default:function(){return u.a}});var r=n(55775),u=n.n(r)},99376:function(e,t,n){"use strict";var r=n(35475);n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},55775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(47043);n(57437),n(2265);let u=r._(n(15602));function o(e,t){var n;let r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let o={...r,...t};return(0,u.default)({...o,modules:null==(n=o.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},81523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return u}});let r=n(18993);function u(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},15602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(57437),u=n(2265),o=n(81523),i=n(70049);function s(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},a=function(e){let t={...l,...e},n=(0,u.lazy)(()=>t.loader().then(s)),a=t.loading;function c(e){let s=a?(0,r.jsx)(a,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(i.PreloadCss,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(u.Suspense,{fallback:s,children:l})}return c.displayName="LoadableComponent",c}},70049:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return o}});let r=n(57437),u=n(20544);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,u.getExpectedRequestStore)("next/dynamic css"),o=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,r.jsx)(r.Fragment,{children:o.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},98527:function(){},6741:function(e,t,n){"use strict";function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}n.d(t,{M:function(){return r}})},73966:function(e,t,n){"use strict";n.d(t,{b:function(){return i},k:function(){return o}});var r=n(2265),u=n(57437);function o(e,t){let n=r.createContext(t),o=e=>{let{children:t,...o}=e,i=r.useMemo(()=>o,Object.values(o));return(0,u.jsx)(n.Provider,{value:i,children:t})};return o.displayName=e+"Provider",[o,function(u){let o=r.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let u=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),s=n.length;n=[...n,o];let l=t=>{let{scope:n,children:o,...l}=t,a=n?.[e]?.[s]||i,c=r.useMemo(()=>l,Object.values(l));return(0,u.jsx)(a.Provider,{value:c,children:o})};return l.displayName=t+"Provider",[l,function(n,u){let l=u?.[e]?.[s]||i,a=r.useContext(l);if(a)return a;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e)[`__scope${r}`];return{...t,...u}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(o,...t)]}},66840:function(e,t,n){"use strict";n.d(t,{WV:function(){return s},jH:function(){return l}});var r=n(2265),u=n(54887),o=n(37053),i=n(57437),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...u}=e,s=r?o.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(s,{...u,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function l(e,t){e&&u.flushSync(()=>e.dispatchEvent(t))}},50721:function(e,t,n){"use strict";n.d(t,{bU:function(){return g},fC:function(){return P}});var r=n(2265),u=n(6741),o=n(98575),i=n(73966),s=n(80886),l=n(6718),a=n(90420),c=n(66840),f=n(57437),d="Switch",[p,b]=(0,i.b)(d),[h,v]=p(d),m=r.forwardRef((e,t)=>{let{__scopeSwitch:n,name:i,checked:l,defaultChecked:a,required:d,disabled:p,value:b="on",onCheckedChange:v,form:m,...y}=e,[x,P]=r.useState(null),g=(0,o.e)(t,e=>P(e)),k=r.useRef(!1),_=!x||m||!!x.closest("form"),[M=!1,C]=(0,s.T)({prop:l,defaultProp:a,onChange:v});return(0,f.jsxs)(h,{scope:n,checked:M,disabled:p,children:[(0,f.jsx)(c.WV.button,{type:"button",role:"switch","aria-checked":M,"aria-required":d,"data-state":w(M),"data-disabled":p?"":void 0,disabled:p,value:b,...y,ref:g,onClick:(0,u.M)(e.onClick,e=>{C(e=>!e),_&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})}),_&&(0,f.jsx)(j,{control:x,bubbles:!k.current,name:i,value:b,checked:M,required:d,disabled:p,form:m,style:{transform:"translateX(-100%)"}})]})});m.displayName=d;var y="SwitchThumb",x=r.forwardRef((e,t)=>{let{__scopeSwitch:n,...r}=e,u=v(y,n);return(0,f.jsx)(c.WV.span,{"data-state":w(u.checked),"data-disabled":u.disabled?"":void 0,...r,ref:t})});x.displayName=y;var j=e=>{let{control:t,checked:n,bubbles:u=!0,...o}=e,i=r.useRef(null),s=(0,l.D)(n),c=(0,a.t)(t);return r.useEffect(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(s!==n&&t){let r=new Event("click",{bubbles:u});t.call(e,n),e.dispatchEvent(r)}},[s,n,u]),(0,f.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...o,tabIndex:-1,ref:i,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function w(e){return e?"checked":"unchecked"}var P=m,g=x},26606:function(e,t,n){"use strict";n.d(t,{W:function(){return u}});var r=n(2265);function u(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},80886:function(e,t,n){"use strict";n.d(t,{T:function(){return o}});var r=n(2265),u=n(26606);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[o]=n,i=r.useRef(o),s=(0,u.W)(t);return r.useEffect(()=>{i.current!==o&&(s(o),i.current=o)},[o,i,s]),n}({defaultProp:t,onChange:n}),s=void 0!==e,l=s?e:o,a=(0,u.W)(n);return[l,r.useCallback(t=>{if(s){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else i(t)},[s,e,i,a])]}},61188:function(e,t,n){"use strict";n.d(t,{b:function(){return u}});var r=n(2265),u=globalThis?.document?r.useLayoutEffect:()=>{}},6718:function(e,t,n){"use strict";n.d(t,{D:function(){return u}});var r=n(2265);function u(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},90420:function(e,t,n){"use strict";n.d(t,{t:function(){return o}});var r=n(2265),u=n(61188);function o(e){let[t,n]=r.useState(void 0);return(0,u.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,u;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,u=t.blockSize}else r=e.offsetWidth,u=e.offsetHeight;n({width:r,height:u})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}}]);