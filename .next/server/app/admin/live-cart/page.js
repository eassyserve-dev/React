(()=>{var e={};e.id=8658,e.ids=[8658],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},27790:e=>{"use strict";e.exports=require("assert")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},28889:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d}),t(51059),t(59964),t(35213),t(90996);var r=t(30170),s=t(45002),i=t(83876),l=t.n(i),n=t(66299),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);t.d(a,o);let d=["",{children:["admin",{children:["live-cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,51059)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\live-cart\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,59964)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,35213)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,90996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\live-cart\\page.tsx"],p="/admin/live-cart/page",m={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/admin/live-cart/page",pathname:"/admin/live-cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},72592:(e,a,t)=>{Promise.resolve().then(t.bind(t,21986))},94002:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});let r=(0,t(26323).Z)("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]])},33841:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});let r=(0,t(26323).Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},21986:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>y});var r=t(97247),s=t(28964),i=t(64865),l=t(61099),n=t(28852),o=t(55757),d=t(69065),c=t(94002),p=t(33841),m=t(30938),u=t(67636),x=t(95714),f=t(79906),h=t(66014),g=t(49835);let y=()=>{let[e,a]=(0,s.useState)([]),[t,y]=(0,s.useState)({pageIndex:0,pageSize:5}),[v,j]=(0,s.useState)(0),[b,w]=(0,s.useState)(0),{toast:N}=(0,g.pm)(),C=async(e=1,t=5)=>{try{let{data:r,meta:s}=await (0,x.l2)(e,t);a(r),j(s.totalPages),w(s.totalItems),y(a=>({...a,pageIndex:e-1}))}catch(e){console.error("Error fetching carts:",e)}};(0,s.useEffect)(()=>{C(t.pageIndex+1,t.pageSize)},[t.pageIndex,t.pageSize]);let P=async e=>{try{await (0,x.al)(e.id),N({title:"Success",description:`Cart ID "${e.id}" deleted successfully.`,variant:"success"}),C(t.pageIndex+1,t.pageSize)}catch(e){N({title:"Error",description:`Failed to delete cart: ${e}`,variant:"destructive"})}},R=[{accessorKey:"id",header:"ID"},{accessorKey:"user.first_name",header:"User Name",cell:({row:e})=>{let a=e.original.user;return a?`${a.first_name||""} ${a.last_name||""}`.trim():"N/A"}},{accessorKey:"provider.first_name",header:"Provider Name",cell:({row:e})=>{let a=e.original.provider;return a?`${a.first_name||""} ${a.last_name||""}`.trim():"N/A"}},{accessorKey:"type",header:"Type"},{accessorKey:"service_type",header:"Service Type"},{accessorKey:"quantity",header:"Quantity",cell:({row:e})=>e.original.quantity||"N/A"},{accessorKey:"total_price",header:"Total Price",cell:({row:e})=>void 0!==e.original.total_price?`$${e.original.total_price}`:"N/A"},{id:"actions",header:"Actions",cell:({row:e})=>(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[r.jsx(n.z,{variant:"ghost",size:"icon",children:r.jsx(f.default,{href:`/admin/carts/edit/${e.original.id}`,passHref:!0,children:r.jsx(c.Z,{className:"w-4 h-4 text-blue-600"})})}),(0,r.jsxs)(h.aR,{children:[r.jsx(h.vW,{asChild:!0,children:r.jsx(n.z,{variant:"ghost",size:"icon",children:r.jsx(p.Z,{className:"w-4 h-4 text-red-600"})})}),(0,r.jsxs)(h._T,{children:[(0,r.jsxs)(h.fY,{children:[r.jsx("h2",{className:"text-xl font-bold",children:"Confirm Delete"}),(0,r.jsxs)("p",{children:["Are you sure you want to delete cart ID: ",e.original.id,"?"]})]}),(0,r.jsxs)(h.xo,{children:[r.jsx(n.z,{variant:"secondary",onClick:()=>P(e.original),children:"Yes, Delete"}),r.jsx(n.z,{variant:"outline",children:"Cancel"})]})]})]})]})}],_=(0,i.b7)({data:e,columns:R,state:{pagination:t},pageCount:v,onPaginationChange:y,getCoreRowModel:(0,l.sC)(),manualPagination:!0});return r.jsx("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8",children:(0,r.jsxs)("div",{className:"max-w-12xl mx-auto space-y-6",children:[r.jsx("div",{className:"flex items-center justify-between",children:r.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Cart List"})}),(0,r.jsxs)(o.Zb,{className:"border-none shadow-xl bg-white/80 backdrop-blur",children:[r.jsx(o.Ol,{className:"border-b border-gray-100 pb-4",children:r.jsx(o.ll,{className:"text-xl text-gray-800",children:"Carts"})}),r.jsx(o.aY,{className:"overflow-x-auto",children:(0,r.jsxs)(d.iA,{children:[r.jsx(d.xD,{children:_.getHeaderGroups().map(e=>r.jsx(d.SC,{children:e.headers.map(e=>r.jsx(d.ss,{className:"text-left",children:e.isPlaceholder?null:(0,i.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),r.jsx(d.RM,{children:_.getRowModel().rows.length?_.getRowModel().rows.map(e=>r.jsx(d.SC,{children:e.getVisibleCells().map(e=>r.jsx(d.pj,{children:(0,i.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):r.jsx(d.SC,{children:r.jsx(d.pj,{colSpan:R.length,className:"h-24 text-center",children:"No carts found."})})})]})}),(0,r.jsxs)("div",{className:"flex justify-between items-center p-4",children:[(0,r.jsxs)(n.z,{variant:"outline",onClick:()=>_.previousPage(),disabled:!_.getCanPreviousPage(),className:"flex items-center",children:[r.jsx(m.Z,{className:"w-4 h-4 mr-2"}),"Previous"]}),(0,r.jsxs)("span",{className:"text-gray-600",children:["Page ",t.pageIndex+1," of ",v]}),(0,r.jsxs)(n.z,{variant:"outline",onClick:()=>_.nextPage(),disabled:!_.getCanNextPage(),className:"flex items-center",children:["Next",r.jsx(u.Z,{className:"w-4 h-4 ml-2"})]})]})]})]})})}},66014:(e,a,t)=>{"use strict";t.d(a,{aR:()=>z,_T:()=>M,xo:()=>$,fY:()=>I,vW:()=>S});var r=t(97247),s=t(28964),i=t(20732),l=t(93191),n=t(50400),o=t(70319),d=t(69008),c="AlertDialog",[p,m]=(0,i.b)(c,[n.p8]),u=(0,n.p8)(),x=e=>{let{__scopeAlertDialog:a,...t}=e,s=u(a);return(0,r.jsx)(n.fC,{...s,...t,modal:!0})};x.displayName=c;var f=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,i=u(t);return(0,r.jsx)(n.xz,{...i,...s,ref:a})});f.displayName="AlertDialogTrigger";var h=e=>{let{__scopeAlertDialog:a,...t}=e,s=u(a);return(0,r.jsx)(n.h_,{...s,...t})};h.displayName="AlertDialogPortal";var g=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,i=u(t);return(0,r.jsx)(n.aV,{...i,...s,ref:a})});g.displayName="AlertDialogOverlay";var y="AlertDialogContent",[v,j]=p(y),b=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,children:i,...c}=e,p=u(t),m=s.useRef(null),x=(0,l.e)(a,m),f=s.useRef(null);return(0,r.jsx)(n.jm,{contentName:y,titleName:w,docsSlug:"alert-dialog",children:(0,r.jsx)(v,{scope:t,cancelRef:f,children:(0,r.jsxs)(n.VY,{role:"alertdialog",...p,...c,ref:x,onOpenAutoFocus:(0,o.M)(c.onOpenAutoFocus,e=>{e.preventDefault(),f.current?.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,r.jsx)(d.A4,{children:i}),(0,r.jsx)(D,{contentRef:m})]})})})});b.displayName=y;var w="AlertDialogTitle",N=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,i=u(t);return(0,r.jsx)(n.Dx,{...i,...s,ref:a})});N.displayName=w;var C="AlertDialogDescription",P=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,i=u(t);return(0,r.jsx)(n.dk,{...i,...s,ref:a})});P.displayName=C;var R=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,i=u(t);return(0,r.jsx)(n.x8,{...i,...s,ref:a})});R.displayName="AlertDialogAction";var _="AlertDialogCancel",A=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,{cancelRef:i}=j(_,t),o=u(t),d=(0,l.e)(a,i);return(0,r.jsx)(n.x8,{...o,...s,ref:d})});A.displayName=_;var D=({contentRef:e})=>{let a=`\`${y}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${y}\` by passing a \`${C}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${y}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return s.useEffect(()=>{document.getElementById(e.current?.getAttribute("aria-describedby"))||console.warn(a)},[a,e]),null},q=t(40677),k=t(28852);let z=x,S=f,T=s.forwardRef(({className:e,...a},t)=>r.jsx(g,{className:(0,q.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a,ref:t}));T.displayName=g.displayName;let M=s.forwardRef(({className:e,...a},t)=>(0,r.jsxs)(h,{children:[r.jsx(T,{}),r.jsx(b,{ref:t,className:(0,q.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a})]}));M.displayName=b.displayName;let I=({className:e,...a})=>r.jsx("div",{className:(0,q.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...a});I.displayName="AlertDialogHeader";let $=({className:e,...a})=>r.jsx("div",{className:(0,q.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});$.displayName="AlertDialogFooter",s.forwardRef(({className:e,...a},t)=>r.jsx(N,{ref:t,className:(0,q.cn)("text-lg font-semibold",e),...a})).displayName=N.displayName,s.forwardRef(({className:e,...a},t)=>r.jsx(P,{ref:t,className:(0,q.cn)("text-sm text-muted-foreground",e),...a})).displayName=P.displayName,s.forwardRef(({className:e,...a},t)=>r.jsx(R,{ref:t,className:(0,q.cn)((0,k.d)(),e),...a})).displayName=R.displayName,s.forwardRef(({className:e,...a},t)=>r.jsx(A,{ref:t,className:(0,q.cn)((0,k.d)({variant:"outline"}),"mt-2 sm:mt-0",e),...a})).displayName=A.displayName},69065:(e,a,t)=>{"use strict";t.d(a,{RM:()=>o,SC:()=>d,iA:()=>l,pj:()=>p,ss:()=>c,xD:()=>n});var r=t(97247),s=t(28964),i=t(40677);let l=s.forwardRef(({className:e,...a},t)=>r.jsx("div",{className:"relative w-full overflow-auto",children:r.jsx("table",{ref:t,className:(0,i.cn)("w-full caption-bottom text-sm",e),...a})}));l.displayName="Table";let n=s.forwardRef(({className:e,...a},t)=>r.jsx("thead",{ref:t,className:(0,i.cn)("[&_tr]:border-b",e),...a}));n.displayName="TableHeader";let o=s.forwardRef(({className:e,...a},t)=>r.jsx("tbody",{ref:t,className:(0,i.cn)("[&_tr:last-child]:border-0",e),...a}));o.displayName="TableBody",s.forwardRef(({className:e,...a},t)=>r.jsx("tfoot",{ref:t,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...a})).displayName="TableFooter";let d=s.forwardRef(({className:e,...a},t)=>r.jsx("tr",{ref:t,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...a}));d.displayName="TableRow";let c=s.forwardRef(({className:e,...a},t)=>r.jsx("th",{ref:t,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...a}));c.displayName="TableHead";let p=s.forwardRef(({className:e,...a},t)=>r.jsx("td",{ref:t,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...a}));p.displayName="TableCell",s.forwardRef(({className:e,...a},t)=>r.jsx("caption",{ref:t,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",e),...a})).displayName="TableCaption"},51059:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>r});let r=(0,t(45347).createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\app\admin\live-cart\page.tsx#default`)}};var a=require("../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[9379,4591,4564,4080,3145,1515,8291,9847,1676],()=>t(28889));module.exports=r})();