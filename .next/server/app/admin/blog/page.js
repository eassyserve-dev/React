(()=>{var e={};e.id=4063,e.ids=[4063],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},27790:e=>{"use strict";e.exports=require("assert")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},5683:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>c,routeModule:()=>p,tree:()=>d}),t(37675),t(59964),t(35213),t(90996);var s=t(30170),r=t(45002),l=t(83876),i=t.n(l),n=t(66299),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);t.d(a,o);let d=["",{children:["admin",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,37675)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\blog\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,59964)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,35213)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,90996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\blog\\page.tsx"],x="/admin/blog/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/admin/blog/page",pathname:"/admin/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},92684:(e,a,t)=>{Promise.resolve().then(t.bind(t,77567))},99219:(e,a,t)=>{"use strict";t.d(a,{Z:()=>s});let s=(0,t(26323).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},94002:(e,a,t)=>{"use strict";t.d(a,{Z:()=>s});let s=(0,t(26323).Z)("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]])},33841:(e,a,t)=>{"use strict";t.d(a,{Z:()=>s});let s=(0,t(26323).Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},77567:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>b});var s=t(97247),r=t(28964),l=t(64865),i=t(61099),n=t(28852),o=t(55757),d=t(69065),c=t(94002),x=t(33841),u=t(99219),p=t(30938),m=t(67636),f=t(95714),h=t(79906),g=t(66014),y=t(49835);let b=()=>{let[e,a]=(0,r.useState)([]),[t,b]=(0,r.useState)({pageIndex:0,pageSize:5}),[v,j]=(0,r.useState)(0),{toast:w}=(0,y.pm)(),N=async(e=1,t=5)=>{try{let{data:s,meta:r}=await (0,f.bb)(e,t);a(s),j(r.totalPages),b(a=>({...a,pageIndex:e-1}))}catch(e){console.error("Error fetching blogs:",e)}};(0,r.useEffect)(()=>{N(t.pageIndex+1,t.pageSize)},[t.pageIndex,t.pageSize]);let P=async e=>{try{await (0,f.X4)(e.id),w({title:"Success",description:`Blog "${e.title}" deleted successfully`,variant:"success"}),N(t.pageIndex+1,t.pageSize)}catch(e){w({title:"Error",description:`Failed to delete blog: ${e}`,variant:"destructive"})}},C=[{accessorKey:"id",header:"ID"},{accessorKey:"title",header:"Title"},{accessorKey:"slug",header:"Slug"},{accessorKey:"is_active",header:"Status",cell:e=>s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${e.getValue()?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:e.getValue()?"Active":"Inactive"})},{id:"actions",header:"Actions",cell:({row:e})=>(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[s.jsx(n.z,{variant:"ghost",size:"icon",children:s.jsx(h.default,{href:`/admin/blogs/edit/${e.original.id}`,passHref:!0,children:s.jsx(c.Z,{className:"w-4 h-4 text-blue-600"})})}),(0,s.jsxs)(g.aR,{children:[s.jsx(g.vW,{asChild:!0,children:s.jsx(n.z,{variant:"ghost",size:"icon",children:s.jsx(x.Z,{className:"w-4 h-4 text-red-600"})})}),(0,s.jsxs)(g._T,{children:[(0,s.jsxs)(g.fY,{children:[s.jsx("h2",{className:"text-xl font-bold",children:"Confirm Delete"}),(0,s.jsxs)("p",{children:["Are you sure you want to delete blog: ",e.original.title,"?"]})]}),(0,s.jsxs)(g.xo,{children:[s.jsx(n.z,{variant:"secondary",onClick:()=>P(e.original),children:"Yes, Delete"}),s.jsx(n.z,{variant:"outline",children:"Cancel"})]})]})]})]})}],R=(0,l.b7)({data:e,columns:C,state:{pagination:t},pageCount:v,onPaginationChange:b,getCoreRowModel:(0,i.sC)(),manualPagination:!0});return s.jsx("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8",children:(0,s.jsxs)("div",{className:"max-w-12xl mx-auto space-y-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Blog List"}),s.jsx(n.z,{asChild:!0,variant:"default",className:"flex items-center space-x-2",children:(0,s.jsxs)(h.default,{href:"/admin/blogs/add",children:[s.jsx(u.Z,{className:"w-4 h-4 mr-1"}),s.jsx("span",{children:"Add Blog"})]})})]}),(0,s.jsxs)(o.Zb,{className:"border-none shadow-xl bg-white/80 backdrop-blur",children:[s.jsx(o.Ol,{className:"border-b border-gray-100 pb-4",children:s.jsx(o.ll,{className:"text-xl text-gray-800",children:"Blogs"})}),s.jsx(o.aY,{className:"overflow-x-auto",children:(0,s.jsxs)(d.iA,{children:[s.jsx(d.xD,{children:R.getHeaderGroups().map(e=>s.jsx(d.SC,{children:e.headers.map(e=>s.jsx(d.ss,{className:"text-left",children:e.isPlaceholder?null:(0,l.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),s.jsx(d.RM,{children:R.getRowModel().rows.length?R.getRowModel().rows.map(e=>s.jsx(d.SC,{children:e.getVisibleCells().map(e=>s.jsx(d.pj,{children:(0,l.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):s.jsx(d.SC,{children:s.jsx(d.pj,{colSpan:C.length,className:"h-24 text-center",children:"No blogs found."})})})]})}),(0,s.jsxs)("div",{className:"flex justify-between items-center p-4",children:[(0,s.jsxs)(n.z,{variant:"outline",onClick:()=>R.previousPage(),disabled:!R.getCanPreviousPage(),className:"flex items-center",children:[s.jsx(p.Z,{className:"w-4 h-4 mr-2"}),"Previous"]}),(0,s.jsxs)("span",{className:"text-gray-600",children:["Page ",t.pageIndex+1," of ",v]}),(0,s.jsxs)(n.z,{variant:"outline",onClick:()=>R.nextPage(),disabled:!R.getCanNextPage(),className:"flex items-center",children:["Next",s.jsx(m.Z,{className:"w-4 h-4 ml-2"})]})]})]})]})})}},66014:(e,a,t)=>{"use strict";t.d(a,{aR:()=>z,_T:()=>T,xo:()=>I,fY:()=>Z,vW:()=>S});var s=t(97247),r=t(28964),l=t(20732),i=t(93191),n=t(50400),o=t(70319),d=t(69008),c="AlertDialog",[x,u]=(0,l.b)(c,[n.p8]),p=(0,n.p8)(),m=e=>{let{__scopeAlertDialog:a,...t}=e,r=p(a);return(0,s.jsx)(n.fC,{...r,...t,modal:!0})};m.displayName=c;var f=r.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...r}=e,l=p(t);return(0,s.jsx)(n.xz,{...l,...r,ref:a})});f.displayName="AlertDialogTrigger";var h=e=>{let{__scopeAlertDialog:a,...t}=e,r=p(a);return(0,s.jsx)(n.h_,{...r,...t})};h.displayName="AlertDialogPortal";var g=r.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...r}=e,l=p(t);return(0,s.jsx)(n.aV,{...l,...r,ref:a})});g.displayName="AlertDialogOverlay";var y="AlertDialogContent",[b,v]=x(y),j=r.forwardRef((e,a)=>{let{__scopeAlertDialog:t,children:l,...c}=e,x=p(t),u=r.useRef(null),m=(0,i.e)(a,u),f=r.useRef(null);return(0,s.jsx)(n.jm,{contentName:y,titleName:w,docsSlug:"alert-dialog",children:(0,s.jsx)(b,{scope:t,cancelRef:f,children:(0,s.jsxs)(n.VY,{role:"alertdialog",...x,...c,ref:m,onOpenAutoFocus:(0,o.M)(c.onOpenAutoFocus,e=>{e.preventDefault(),f.current?.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,s.jsx)(d.A4,{children:l}),(0,s.jsx)(k,{contentRef:u})]})})})});j.displayName=y;var w="AlertDialogTitle",N=r.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...r}=e,l=p(t);return(0,s.jsx)(n.Dx,{...l,...r,ref:a})});N.displayName=w;var P="AlertDialogDescription",C=r.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...r}=e,l=p(t);return(0,s.jsx)(n.dk,{...l,...r,ref:a})});C.displayName=P;var R=r.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...r}=e,l=p(t);return(0,s.jsx)(n.x8,{...l,...r,ref:a})});R.displayName="AlertDialogAction";var A="AlertDialogCancel",D=r.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...r}=e,{cancelRef:l}=v(A,t),o=p(t),d=(0,i.e)(a,l);return(0,s.jsx)(n.x8,{...o,...r,ref:d})});D.displayName=A;var k=({contentRef:e})=>{let a=`\`${y}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${y}\` by passing a \`${P}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${y}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return r.useEffect(()=>{document.getElementById(e.current?.getAttribute("aria-describedby"))||console.warn(a)},[a,e]),null},q=t(40677),_=t(28852);let z=m,S=f,M=r.forwardRef(({className:e,...a},t)=>s.jsx(g,{className:(0,q.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a,ref:t}));M.displayName=g.displayName;let T=r.forwardRef(({className:e,...a},t)=>(0,s.jsxs)(h,{children:[s.jsx(M,{}),s.jsx(j,{ref:t,className:(0,q.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a})]}));T.displayName=j.displayName;let Z=({className:e,...a})=>s.jsx("div",{className:(0,q.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...a});Z.displayName="AlertDialogHeader";let I=({className:e,...a})=>s.jsx("div",{className:(0,q.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});I.displayName="AlertDialogFooter",r.forwardRef(({className:e,...a},t)=>s.jsx(N,{ref:t,className:(0,q.cn)("text-lg font-semibold",e),...a})).displayName=N.displayName,r.forwardRef(({className:e,...a},t)=>s.jsx(C,{ref:t,className:(0,q.cn)("text-sm text-muted-foreground",e),...a})).displayName=C.displayName,r.forwardRef(({className:e,...a},t)=>s.jsx(R,{ref:t,className:(0,q.cn)((0,_.d)(),e),...a})).displayName=R.displayName,r.forwardRef(({className:e,...a},t)=>s.jsx(D,{ref:t,className:(0,q.cn)((0,_.d)({variant:"outline"}),"mt-2 sm:mt-0",e),...a})).displayName=D.displayName},69065:(e,a,t)=>{"use strict";t.d(a,{RM:()=>o,SC:()=>d,iA:()=>i,pj:()=>x,ss:()=>c,xD:()=>n});var s=t(97247),r=t(28964),l=t(40677);let i=r.forwardRef(({className:e,...a},t)=>s.jsx("div",{className:"relative w-full overflow-auto",children:s.jsx("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",e),...a})}));i.displayName="Table";let n=r.forwardRef(({className:e,...a},t)=>s.jsx("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",e),...a}));n.displayName="TableHeader";let o=r.forwardRef(({className:e,...a},t)=>s.jsx("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",e),...a}));o.displayName="TableBody",r.forwardRef(({className:e,...a},t)=>s.jsx("tfoot",{ref:t,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...a})).displayName="TableFooter";let d=r.forwardRef(({className:e,...a},t)=>s.jsx("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...a}));d.displayName="TableRow";let c=r.forwardRef(({className:e,...a},t)=>s.jsx("th",{ref:t,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...a}));c.displayName="TableHead";let x=r.forwardRef(({className:e,...a},t)=>s.jsx("td",{ref:t,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...a}));x.displayName="TableCell",r.forwardRef(({className:e,...a},t)=>s.jsx("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",e),...a})).displayName="TableCaption"},37675:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});let s=(0,t(45347).createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\app\admin\blog\page.tsx#default`)}};var a=require("../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),s=a.X(0,[9379,4591,4564,4080,3145,1515,8291,9847,1676],()=>t(5683));module.exports=s})();