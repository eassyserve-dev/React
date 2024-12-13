(()=>{var e={};e.id=9070,e.ids=[9070],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},27790:e=>{"use strict";e.exports=require("assert")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},37631:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>o}),r(94247),r(59964),r(35213),r(90996);var s=r(30170),a=r(45002),i=r(83876),n=r.n(i),d=r(66299),l={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>d[e]);r.d(t,l);let o=["",{children:["admin",{children:["gst",{children:["edit",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,94247)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\gst\\edit\\[id]\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,59964)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,35213)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,90996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\gst\\edit\\[id]\\page.tsx"],u="/admin/gst/edit/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/admin/gst/edit/[id]/page",pathname:"/admin/gst/edit/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},61896:(e,t,r)=>{Promise.resolve().then(r.bind(r,24972))},8749:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(26323).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},7663:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(26323).Z)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},24972:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(97247),a=r(28964),i=r(34178),n=r(85426),d=r(33264),l=r(28852),o=r(55757),c=r(49835),u=r(8749),p=r(7663),m=r(95714);let x=()=>{let[e,t]=(0,a.useState)(""),[r,x]=(0,a.useState)(""),[h,f]=(0,a.useState)(""),[b,g]=(0,a.useState)(!0),[v,y]=(0,a.useState)(!1),{toast:w}=(0,c.pm)(),j=(0,i.useRouter)(),N=(0,i.usePathname)(),S=N?.split("/").pop();(0,a.useEffect)(()=>{S&&k(S)},[S]);let k=async e=>{try{let r=await (0,m.pf)(e);t(r.CGST),x(r.SGST),f(r.IGST),g(r.is_active)}catch(e){w({variant:"error",title:"Error",description:"Failed to load GST rate details."})}},G=async t=>{if(t.preventDefault(),y(!0),!e||!r||!h){w({variant:"error",title:"Validation Error",description:"All fields are required."}),y(!1);return}if(isNaN(Number(e))||isNaN(Number(r))||isNaN(Number(h))){w({variant:"error",title:"Validation Error",description:"CGST, SGST, and IGST must be valid numbers."}),y(!1);return}let s={CGST:Number(e),SGST:Number(r),IGST:Number(h),is_active:b};try{await (0,m.kQ)(S,s),w({variant:"success",title:"Success",description:"GST Rate updated successfully."}),j.push("/gst-rates")}catch(e){w({variant:"error",title:"Error",description:e.message||"Failed to update GST Rate."})}finally{y(!1)}};return s.jsx("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8",children:(0,s.jsxs)("div",{className:"max-w-12xl mx-auto space-y-6",children:[(0,s.jsxs)("div",{className:"text-left space-y-2",children:[s.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Edit GST Rate"}),s.jsx("p",{className:"text-gray-500",children:"Update GST rate details"})]}),(0,s.jsxs)(o.Zb,{className:"border-none shadow-xl bg-white/80 backdrop-blur",children:[s.jsx(o.Ol,{className:"border-b border-gray-100 pb-6",children:(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[s.jsx("div",{className:"h-8 w-1 bg-blue-600 rounded-full"}),(0,s.jsxs)("div",{children:[s.jsx(o.ll,{className:"text-xl text-gray-800",children:"Edit GST Rate"}),s.jsx(o.SZ,{className:"text-gray-500",children:"Update the details below to modify the GST rate"})]})]})}),s.jsx(o.aY,{className:"pt-6",children:(0,s.jsxs)("form",{onSubmit:G,className:"space-y-6",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium text-gray-700",children:"CGST (%)"}),s.jsx(n.I,{type:"number",value:e,onChange:e=>t(e.target.value),placeholder:"Enter CGST percentage",required:!0})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium text-gray-700",children:"SGST (%)"}),s.jsx(n.I,{type:"number",value:r,onChange:e=>x(e.target.value),placeholder:"Enter SGST percentage",required:!0})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-medium text-gray-700",children:"IGST (%)"}),s.jsx(n.I,{type:"number",value:h,onChange:e=>f(e.target.value),placeholder:"Enter IGST percentage",required:!0})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[s.jsx(d.r,{checked:b,onCheckedChange:g,className:"bg-primary"}),s.jsx("span",{className:"text-sm text-gray-700",children:"Active"})]}),s.jsx(l.z,{className:"w-full",type:"submit",disabled:v,children:v?(0,s.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[s.jsx(u.Z,{className:"w-4 h-4 animate-spin"}),s.jsx("span",{children:"Saving..."})]}):(0,s.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[s.jsx(p.Z,{className:"w-4 h-4"}),s.jsx("span",{children:"Update GST Rate"})]})})]})})]})]})})}},85426:(e,t,r)=>{"use strict";r.d(t,{I:()=>n});var s=r(97247),a=r(28964),i=r(40677);let n=a.forwardRef(({className:e,type:t,...r},a)=>s.jsx("input",{type:t,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...r}));n.displayName="Input"},33264:(e,t,r)=>{"use strict";r.d(t,{r:()=>d});var s=r(97247),a=r(28964),i=r(39609),n=r(40677);let d=a.forwardRef(({className:e,...t},r)=>s.jsx(i.fC,{className:(0,n.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...t,ref:r,children:s.jsx(i.bU,{className:(0,n.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));d.displayName=i.fC.displayName},94247:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(45347).createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\app\admin\gst\edit\[id]\page.tsx#default`)},39609:(e,t,r)=>{"use strict";r.d(t,{bU:()=>N,fC:()=>j});var s=r(28964),a=r(70319),i=r(93191),n=r(20732),d=r(28469),l=r(45298),o=r(30255),c=r(22251),u=r(97247),p="Switch",[m,x]=(0,n.b)(p),[h,f]=m(p),b=s.forwardRef((e,t)=>{let{__scopeSwitch:r,name:n,checked:l,defaultChecked:o,required:p,disabled:m,value:x="on",onCheckedChange:f,form:b,...g}=e,[v,j]=s.useState(null),N=(0,i.e)(t,e=>j(e)),S=s.useRef(!1),k=!v||b||!!v.closest("form"),[G=!1,T]=(0,d.T)({prop:l,defaultProp:o,onChange:f});return(0,u.jsxs)(h,{scope:r,checked:G,disabled:m,children:[(0,u.jsx)(c.WV.button,{type:"button",role:"switch","aria-checked":G,"aria-required":p,"data-state":w(G),"data-disabled":m?"":void 0,disabled:m,value:x,...g,ref:N,onClick:(0,a.M)(e.onClick,e=>{T(e=>!e),k&&(S.current=e.isPropagationStopped(),S.current||e.stopPropagation())})}),k&&(0,u.jsx)(y,{control:v,bubbles:!S.current,name:n,value:x,checked:G,required:p,disabled:m,form:b,style:{transform:"translateX(-100%)"}})]})});b.displayName=p;var g="SwitchThumb",v=s.forwardRef((e,t)=>{let{__scopeSwitch:r,...s}=e,a=f(g,r);return(0,u.jsx)(c.WV.span,{"data-state":w(a.checked),"data-disabled":a.disabled?"":void 0,...s,ref:t})});v.displayName=g;var y=e=>{let{control:t,checked:r,bubbles:a=!0,...i}=e,n=s.useRef(null),d=(0,l.D)(r),c=(0,o.t)(t);return s.useEffect(()=>{let e=n.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(d!==r&&t){let s=new Event("click",{bubbles:a});t.call(e,r),e.dispatchEvent(s)}},[d,r,a]),(0,u.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...i,tabIndex:-1,ref:n,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function w(e){return e?"checked":"unchecked"}var j=b,N=v}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[9379,4591,4564,4080,3145,1515,9847,1676],()=>r(37631));module.exports=s})();