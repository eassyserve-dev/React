(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3657],{51817:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(79205).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},83229:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(79205).Z)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},30166:function(e,t,n){"use strict";n.d(t,{default:function(){return u.a}});var r=n(55775),u=n.n(r)},99376:function(e,t,n){"use strict";var r=n(35475);n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},55775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(47043);n(57437),n(2265);let u=r._(n(15602));function o(e,t){var n;let r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let o={...r,...t};return(0,u.default)({...o,modules:null==(n=o.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},81523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return u}});let r=n(18993);function u(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},15602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=n(57437),u=n(2265),o=n(81523),a=n(70049);function i(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},s=function(e){let t={...l,...e},n=(0,u.lazy)(()=>t.loader().then(i)),s=t.loading;function d(e){let i=s?(0,r.jsx)(s,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(a.PreloadCss,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(u.Suspense,{fallback:i,children:l})}return d.displayName="LoadableComponent",d}},70049:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return o}});let r=n(57437),u=n(20544);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,u.getExpectedRequestStore)("next/dynamic css"),o=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,r.jsx)(r.Fragment,{children:o.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},98527:function(){},9270:function(e,t,n){"use strict";n.d(t,{fC:function(){return P},z$:function(){return M}});var r=n(2265),u=n(98575),o=n(73966),a=n(6741),i=n(80886),l=n(6718),s=n(90420),d=n(71599),c=n(66840),f=n(57437),p="Checkbox",[m,y]=(0,o.b)(p),[v,b]=m(p),h=r.forwardRef((e,t)=>{let{__scopeCheckbox:n,name:o,checked:l,defaultChecked:s,required:d,disabled:p,value:m="on",onCheckedChange:y,form:b,...h}=e,[k,j]=r.useState(null),P=(0,u.e)(t,e=>j(e)),M=r.useRef(!1),N=!k||b||!!k.closest("form"),[O=!1,E]=(0,i.T)({prop:l,defaultProp:s,onChange:y}),R=r.useRef(O);return r.useEffect(()=>{let e=null==k?void 0:k.form;if(e){let t=()=>E(R.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[k,E]),(0,f.jsxs)(v,{scope:n,state:O,disabled:p,children:[(0,f.jsx)(c.WV.button,{type:"button",role:"checkbox","aria-checked":g(O)?"mixed":O,"aria-required":d,"data-state":x(O),"data-disabled":p?"":void 0,disabled:p,value:m,...h,ref:P,onKeyDown:(0,a.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,a.M)(e.onClick,e=>{E(e=>!!g(e)||!e),N&&(M.current=e.isPropagationStopped(),M.current||e.stopPropagation())})}),N&&(0,f.jsx)(w,{control:k,bubbles:!M.current,name:o,value:m,checked:O,required:d,disabled:p,form:b,style:{transform:"translateX(-100%)"},defaultChecked:!g(s)&&s})]})});h.displayName=p;var k="CheckboxIndicator",j=r.forwardRef((e,t)=>{let{__scopeCheckbox:n,forceMount:r,...u}=e,o=b(k,n);return(0,f.jsx)(d.z,{present:r||g(o.state)||!0===o.state,children:(0,f.jsx)(c.WV.span,{"data-state":x(o.state),"data-disabled":o.disabled?"":void 0,...u,ref:t,style:{pointerEvents:"none",...e.style}})})});j.displayName=k;var w=e=>{let{control:t,checked:n,bubbles:u=!0,defaultChecked:o,...a}=e,i=r.useRef(null),d=(0,l.D)(n),c=(0,s.t)(t);r.useEffect(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(d!==n&&t){let r=new Event("click",{bubbles:u});e.indeterminate=g(n),t.call(e,!g(n)&&n),e.dispatchEvent(r)}},[d,n,u]);let p=r.useRef(!g(n)&&n);return(0,f.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:null!=o?o:p.current,...a,tabIndex:-1,ref:i,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function g(e){return"indeterminate"===e}function x(e){return g(e)?"indeterminate":e?"checked":"unchecked"}var P=h,M=j},71599:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(2265),u=n(98575),o=n(61188),a=e=>{var t,n;let a,l;let{present:s,children:d}=e,c=function(e){var t,n;let[u,a]=r.useState(),l=r.useRef({}),s=r.useRef(e),d=r.useRef("none"),[c,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=i(l.current);d.current="mounted"===c?e:"none"},[c]),(0,o.b)(()=>{let t=l.current,n=s.current;if(n!==e){let r=d.current,u=i(t);e?f("MOUNT"):"none"===u||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==u?f("ANIMATION_OUT"):f("UNMOUNT"),s.current=e}},[e,f]),(0,o.b)(()=>{if(u){var e;let t;let n=null!==(e=u.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=i(l.current).includes(e.animationName);if(e.target===u&&r&&(f("ANIMATION_END"),!s.current)){let e=u.style.animationFillMode;u.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===u.style.animationFillMode&&(u.style.animationFillMode=e)})}},o=e=>{e.target===u&&(d.current=i(l.current))};return u.addEventListener("animationstart",o),u.addEventListener("animationcancel",r),u.addEventListener("animationend",r),()=>{n.clearTimeout(t),u.removeEventListener("animationstart",o),u.removeEventListener("animationcancel",r),u.removeEventListener("animationend",r)}}f("ANIMATION_END")},[u,f]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),a(e)},[])}}(s),f="function"==typeof d?d({present:c.isPresent}):r.Children.only(d),p=(0,u.e)(c.ref,(a=null===(t=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in a&&a.isReactWarning?f.ref:(a=null===(n=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in a&&a.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof d||c.isPresent?r.cloneElement(f,{ref:p}):null};function i(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},50721:function(e,t,n){"use strict";n.d(t,{bU:function(){return x},fC:function(){return g}});var r=n(2265),u=n(6741),o=n(98575),a=n(73966),i=n(80886),l=n(6718),s=n(90420),d=n(66840),c=n(57437),f="Switch",[p,m]=(0,a.b)(f),[y,v]=p(f),b=r.forwardRef((e,t)=>{let{__scopeSwitch:n,name:a,checked:l,defaultChecked:s,required:f,disabled:p,value:m="on",onCheckedChange:v,form:b,...h}=e,[k,g]=r.useState(null),x=(0,o.e)(t,e=>g(e)),P=r.useRef(!1),M=!k||b||!!k.closest("form"),[N=!1,O]=(0,i.T)({prop:l,defaultProp:s,onChange:v});return(0,c.jsxs)(y,{scope:n,checked:N,disabled:p,children:[(0,c.jsx)(d.WV.button,{type:"button",role:"switch","aria-checked":N,"aria-required":f,"data-state":w(N),"data-disabled":p?"":void 0,disabled:p,value:m,...h,ref:x,onClick:(0,u.M)(e.onClick,e=>{O(e=>!e),M&&(P.current=e.isPropagationStopped(),P.current||e.stopPropagation())})}),M&&(0,c.jsx)(j,{control:k,bubbles:!P.current,name:a,value:m,checked:N,required:f,disabled:p,form:b,style:{transform:"translateX(-100%)"}})]})});b.displayName=f;var h="SwitchThumb",k=r.forwardRef((e,t)=>{let{__scopeSwitch:n,...r}=e,u=v(h,n);return(0,c.jsx)(d.WV.span,{"data-state":w(u.checked),"data-disabled":u.disabled?"":void 0,...r,ref:t})});k.displayName=h;var j=e=>{let{control:t,checked:n,bubbles:u=!0,...o}=e,a=r.useRef(null),i=(0,l.D)(n),d=(0,s.t)(t);return r.useEffect(()=>{let e=a.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(i!==n&&t){let r=new Event("click",{bubbles:u});t.call(e,n),e.dispatchEvent(r)}},[i,n,u]),(0,c.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...o,tabIndex:-1,ref:a,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function w(e){return e?"checked":"unchecked"}var g=b,x=k}}]);