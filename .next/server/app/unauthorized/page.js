(()=>{var e={};e.id=847,e.ids=[847],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},36653:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l}),r(69003),r(35213),r(90996);var s=r(30170),a=r(45002),n=r(83876),o=r.n(n),i=r(66299),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(t,d);let l=["",{children:["unauthorized",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,69003)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\unauthorized\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,35213)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,90996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\unauthorized\\page.tsx"],u="/unauthorized/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/unauthorized/page",pathname:"/unauthorized",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},9537:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,63642,23)),Promise.resolve().then(r.t.bind(r,87586,23)),Promise.resolve().then(r.t.bind(r,47838,23)),Promise.resolve().then(r.t.bind(r,58057,23)),Promise.resolve().then(r.t.bind(r,77741,23)),Promise.resolve().then(r.t.bind(r,13118,23))},34529:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,34080,23))},63845:(e,t,r)=>{Promise.resolve().then(r.bind(r,46322)),Promise.resolve().then(r.bind(r,80582))},46322:(e,t,r)=>{"use strict";r.d(t,{FN:()=>m,Mi:()=>x,ToastProvider:()=>l,_i:()=>c,lj:()=>f,sA:()=>p});var s=r(97247),a=r(28964),n=r(84710),o=r(77247),i=r(37013),d=r(40677);let l=n.zt,c=a.forwardRef(({className:e,...t},r)=>s.jsx(n.l_,{ref:r,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));c.displayName=n.l_.displayName;let u=(0,o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground",error:"top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-600	 text-white",success:"top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-lime-600 text-white"}},defaultVariants:{variant:"default"}}),m=a.forwardRef(({className:e,variant:t,...r},a)=>s.jsx(n.fC,{ref:a,className:(0,d.cn)(u({variant:t}),e),...r}));m.displayName=n.fC.displayName,a.forwardRef(({className:e,...t},r)=>s.jsx(n.aU,{ref:r,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=n.aU.displayName;let p=a.forwardRef(({className:e,...t},r)=>s.jsx(n.x8,{ref:r,className:(0,d.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:s.jsx(i.Z,{className:"h-4 w-4"})}));p.displayName=n.x8.displayName;let x=a.forwardRef(({className:e,...t},r)=>s.jsx(n.Dx,{ref:r,className:(0,d.cn)("text-sm font-semibold",e),...t}));x.displayName=n.Dx.displayName;let f=a.forwardRef(({className:e,...t},r)=>s.jsx(n.dk,{ref:r,className:(0,d.cn)("text-sm opacity-90",e),...t}));f.displayName=n.dk.displayName},80582:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>o});var s=r(97247),a=r(49835),n=r(46322);function o(){let{toasts:e}=(0,a.pm)();return(0,s.jsxs)(n.ToastProvider,{children:[e.map(function({id:e,title:t,description:r,action:a,...o}){return(0,s.jsxs)(n.FN,{...o,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[t&&s.jsx(n.Mi,{children:t}),r&&s.jsx(n.lj,{children:r})]}),a,s.jsx(n.sA,{})]},e)}),s.jsx(n._i,{})]})}},49835:(e,t,r)=>{"use strict";r.d(t,{pm:()=>m});var s=r(28964);let a=0,n=new Map,o=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?o(r):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};default:return e}},d=[],l={toasts:[]};function c(e){l=i(l,e),d.forEach(e=>{e(l)})}function u({...e}){let t=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function m(){let[e,t]=s.useState(l);return s.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},40677:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(61929),a=r(35770);function n(...e){return(0,a.m6)((0,s.W)(e))}},65949:(e,t,r)=>{"use strict";let{createProxy:s}=r(45347);e.exports=s("C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\node_modules\\next\\dist\\client\\link.js")},35213:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>l});var s=r(72051),a=r(37233),n=r.n(a);r(26269);var o=r(45347);let i=(0,o.createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\components\ui\toast.tsx#ToastProvider`);(0,o.createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\components\ui\toast.tsx#ToastViewport`),(0,o.createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\components\ui\toast.tsx#Toast`),(0,o.createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\components\ui\toast.tsx#ToastTitle`),(0,o.createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\components\ui\toast.tsx#ToastDescription`),(0,o.createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\components\ui\toast.tsx#ToastClose`),(0,o.createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\components\ui\toast.tsx#ToastAction`);let d=(0,o.createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\components\ui\toaster.tsx#Toaster`);r(5023);let l={title:"Eassylife admin",description:""};function c({children:e}){return s.jsx("html",{lang:"en",children:s.jsx(i,{children:(0,s.jsxs)("body",{className:`${n().className} min-h-screen`,children:[e,s.jsx(d,{})]})})})}},69003:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(72051),a=r(26269),n=r(65949),o=r.n(n);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=(...e)=>e.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,a.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:n="",children:o,iconNode:i,...c},u)=>(0,a.createElement)("svg",{ref:u,...l,width:t,height:t,stroke:e,strokeWidth:s?24*Number(r)/Number(t):r,className:d("lucide",n),...c},[...i.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(o)?o:[o]])),u=((e,t)=>{let r=(0,a.forwardRef)(({className:r,...s},n)=>(0,a.createElement)(c,{ref:n,iconNode:t,className:d(`lucide-${i(e)}`,r),...s}));return r.displayName=`${e}`,r})("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);function m(){return s.jsx("div",{className:"flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"mx-auto max-w-md text-center",children:[s.jsx(u,{className:"mx-auto size-12 text-primary"}),s.jsx("h1",{className:"mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl",children:"Unauthorized Access"}),s.jsx("p",{className:"mt-4 text-muted-foreground",children:"You do not have permission to view the requested content. Please contact the site administrator if you believe this is an error."}),s.jsx("div",{className:"mt-6",children:s.jsx(o(),{href:"dashboard",className:"inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",prefetch:!1,children:"Go to Homepage"})})]})})}},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(54564);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[9379,4591,4564,4080],()=>r(36653));module.exports=s})();