(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8962],{67090:function(e,t,r){Promise.resolve().then(r.bind(r,77696))},51817:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});let n=(0,r(79205).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},83229:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});let n=(0,r(79205).Z)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},77696:function(e,t,r){"use strict";r.r(t);var n=r(57437),s=r(2265),a=r(40279),i=r(94589),l=r(12381),c=r(79820),u=r(23340),o=r(51817),d=r(83229),f=r(96950);t.default=()=>{let[e,t]=(0,s.useState)(""),[r,m]=(0,s.useState)(""),[p,h]=(0,s.useState)(""),[x,v]=(0,s.useState)(""),[b,g]=(0,s.useState)(!0),[y,j]=(0,s.useState)([]),[N,w]=(0,s.useState)(!1),{toast:k}=(0,u.pm)();(0,s.useEffect)(()=>{(async()=>{try{let e=await (0,f._X)();j(e)}catch(e){k({variant:"error",title:"Error",description:e.message||"Failed to fetch roles."})}})()},[]);let S=async n=>{if(n.preventDefault(),w(!0),!e||!r||!p||!x){k({variant:"error",title:"Validation Error",description:"All fields are required."}),w(!1);return}try{await (0,f.uV)({full_name:e,email:r,password:p,role_id:x,is_active:b}),k({variant:"success",title:"Success",description:"Admin created successfully."}),t(""),m(""),h(""),v(""),g(!0)}catch(e){k({variant:"error",title:"Error",description:e.message||"Failed to create admin."})}finally{w(!1)}};return(0,n.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8",children:(0,n.jsxs)("div",{className:"max-w-4xl mx-auto space-y-6",children:[(0,n.jsxs)("div",{className:"text-left space-y-2",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Admin Management"}),(0,n.jsx)("p",{className:"text-gray-500",children:"Create a new admin"})]}),(0,n.jsxs)(c.Zb,{className:"border-none shadow-xl bg-white/80 backdrop-blur",children:[(0,n.jsxs)(c.Ol,{className:"border-b border-gray-100 pb-6",children:[(0,n.jsx)(c.ll,{className:"text-xl text-gray-800",children:"New Admin"}),(0,n.jsx)(c.SZ,{className:"text-gray-500",children:"Fill in the details below to add a new admin user."})]}),(0,n.jsx)(c.aY,{className:"pt-6",children:(0,n.jsxs)("form",{onSubmit:S,className:"space-y-6",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Full Name"}),(0,n.jsx)(a.I,{value:e,onChange:e=>t(e.target.value),placeholder:"Enter full name",required:!0})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Email"}),(0,n.jsx)(a.I,{value:r,onChange:e=>m(e.target.value),placeholder:"Enter email",required:!0})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Password"}),(0,n.jsx)(a.I,{type:"password",value:p,onChange:e=>h(e.target.value),placeholder:"Enter password",required:!0})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Role"}),(0,n.jsxs)("select",{className:"w-full border-gray-300 rounded-md h-11",value:x,onChange:e=>v(e.target.value),required:!0,children:[(0,n.jsx)("option",{value:"",children:"Select a role"}),y.map(e=>(0,n.jsx)("option",{value:e.id,children:e.role_name},e.id))]})]}),(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(i.r,{checked:b,onCheckedChange:g}),(0,n.jsx)("span",{className:"text-sm text-gray-700",children:"Active"})]}),(0,n.jsx)("div",{className:"pt-4",children:(0,n.jsx)(l.z,{className:"w-full h-11",disabled:N,type:"submit",children:N?(0,n.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,n.jsx)(o.Z,{className:"w-4 h-4 animate-spin"}),(0,n.jsx)("span",{children:"Saving..."})]}):(0,n.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,n.jsx)(d.Z,{className:"w-4 h-4"}),(0,n.jsx)("span",{children:"Save Admin"})]})})})]})})]})]})})}},40279:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(57437),s=r(2265),a=r(93448);let i=s.forwardRef((e,t)=>{let{className:r,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},94589:function(e,t,r){"use strict";r.d(t,{r:function(){return l}});var n=r(57437),s=r(2265),a=r(50721),i=r(93448);let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.fC,{className:(0,i.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",r),...s,ref:t,children:(0,n.jsx)(a.bU,{className:(0,i.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});l.displayName=a.fC.displayName},6741:function(e,t,r){"use strict";function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}r.d(t,{M:function(){return n}})},73966:function(e,t,r){"use strict";r.d(t,{b:function(){return i},k:function(){return a}});var n=r(2265),s=r(57437);function a(e,t){let r=n.createContext(t),a=e=>{let{children:t,...a}=e,i=n.useMemo(()=>a,Object.values(a));return(0,s.jsx)(r.Provider,{value:i,children:t})};return a.displayName=e+"Provider",[a,function(s){let a=n.useContext(r);if(a)return a;if(void 0!==t)return t;throw Error(`\`${s}\` must be used within \`${e}\``)}]}function i(e,t=[]){let r=[],a=()=>{let t=r.map(e=>n.createContext(e));return function(r){let s=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:s}}),[r,s])}};return a.scopeName=e,[function(t,a){let i=n.createContext(a),l=r.length;r=[...r,a];let c=t=>{let{scope:r,children:a,...c}=t,u=r?.[e]?.[l]||i,o=n.useMemo(()=>c,Object.values(c));return(0,s.jsx)(u.Provider,{value:o,children:a})};return c.displayName=t+"Provider",[c,function(r,s){let c=s?.[e]?.[l]||i,u=n.useContext(c);if(u)return u;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let s=r.reduce((t,{useScope:r,scopeName:n})=>{let s=r(e)[`__scope${n}`];return{...t,...s}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return r.scopeName=t.scopeName,r}(a,...t)]}},66840:function(e,t,r){"use strict";r.d(t,{WV:function(){return l},jH:function(){return c}});var n=r(2265),s=r(54887),a=r(37053),i=r(57437),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...s}=e,l=n?a.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(l,{...s,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function c(e,t){e&&s.flushSync(()=>e.dispatchEvent(t))}},50721:function(e,t,r){"use strict";r.d(t,{bU:function(){return w},fC:function(){return N}});var n=r(2265),s=r(6741),a=r(98575),i=r(73966),l=r(80886),c=r(6718),u=r(90420),o=r(66840),d=r(57437),f="Switch",[m,p]=(0,i.b)(f),[h,x]=m(f),v=n.forwardRef((e,t)=>{let{__scopeSwitch:r,name:i,checked:c,defaultChecked:u,required:f,disabled:m,value:p="on",onCheckedChange:x,form:v,...b}=e,[g,N]=n.useState(null),w=(0,a.e)(t,e=>N(e)),k=n.useRef(!1),S=!g||v||!!g.closest("form"),[C=!1,E]=(0,l.T)({prop:c,defaultProp:u,onChange:x});return(0,d.jsxs)(h,{scope:r,checked:C,disabled:m,children:[(0,d.jsx)(o.WV.button,{type:"button",role:"switch","aria-checked":C,"aria-required":f,"data-state":j(C),"data-disabled":m?"":void 0,disabled:m,value:p,...b,ref:w,onClick:(0,s.M)(e.onClick,e=>{E(e=>!e),S&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})}),S&&(0,d.jsx)(y,{control:g,bubbles:!k.current,name:i,value:p,checked:C,required:f,disabled:m,form:v,style:{transform:"translateX(-100%)"}})]})});v.displayName=f;var b="SwitchThumb",g=n.forwardRef((e,t)=>{let{__scopeSwitch:r,...n}=e,s=x(b,r);return(0,d.jsx)(o.WV.span,{"data-state":j(s.checked),"data-disabled":s.disabled?"":void 0,...n,ref:t})});g.displayName=b;var y=e=>{let{control:t,checked:r,bubbles:s=!0,...a}=e,i=n.useRef(null),l=(0,c.D)(r),o=(0,u.t)(t);return n.useEffect(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(l!==r&&t){let n=new Event("click",{bubbles:s});t.call(e,r),e.dispatchEvent(n)}},[l,r,s]),(0,d.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...a,tabIndex:-1,ref:i,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function j(e){return e?"checked":"unchecked"}var N=v,w=g},26606:function(e,t,r){"use strict";r.d(t,{W:function(){return s}});var n=r(2265);function s(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},80886:function(e,t,r){"use strict";r.d(t,{T:function(){return a}});var n=r(2265),s=r(26606);function a({prop:e,defaultProp:t,onChange:r=()=>{}}){let[a,i]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[a]=r,i=n.useRef(a),l=(0,s.W)(t);return n.useEffect(()=>{i.current!==a&&(l(a),i.current=a)},[a,i,l]),r}({defaultProp:t,onChange:r}),l=void 0!==e,c=l?e:a,u=(0,s.W)(r);return[c,n.useCallback(t=>{if(l){let r="function"==typeof t?t(e):t;r!==e&&u(r)}else i(t)},[l,e,i,u])]}},61188:function(e,t,r){"use strict";r.d(t,{b:function(){return s}});var n=r(2265),s=globalThis?.document?n.useLayoutEffect:()=>{}},6718:function(e,t,r){"use strict";r.d(t,{D:function(){return s}});var n=r(2265);function s(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},90420:function(e,t,r){"use strict";r.d(t,{t:function(){return a}});var n=r(2265),s=r(61188);function a(e){let[t,r]=n.useState(void 0);return(0,s.b)(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,s;if(!Array.isArray(t)||!t.length)return;let a=t[0];if("borderBoxSize"in a){let e=a.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,s=t.blockSize}else n=e.offsetWidth,s=e.offsetHeight;r({width:n,height:s})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}}},function(e){e.O(0,[8218,73,2496,6714,2971,2117,1744],function(){return e(e.s=67090)}),_N_E=e.O()}]);