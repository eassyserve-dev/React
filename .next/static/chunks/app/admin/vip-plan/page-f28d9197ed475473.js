(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4270],{66852:function(e,a,t){Promise.resolve().then(t.bind(t,63566))},99397:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});let r=(0,t(79205).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},15868:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});let r=(0,t(79205).Z)("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]])},18930:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});let r=(0,t(79205).Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},63566:function(e,a,t){"use strict";t.r(a);var r=t(57437),s=t(2265),l=t(71594),n=t(24525),i=t(12381),d=t(79820),o=t(33804),c=t(15868),u=t(18930),f=t(99397),m=t(92451),x=t(10407),p=t(96950),h=t(27648),g=t(89818),y=t(23340);a.default=()=>{let[e,a]=(0,s.useState)([]),[t,j]=(0,s.useState)({pageIndex:0,pageSize:5}),[N,v]=(0,s.useState)(0),[b,w]=(0,s.useState)(0),{toast:P}=(0,y.pm)(),R=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;try{let{data:r,totalPages:s,totalItems:l}=await (0,p.yC)(e,t);a(r),v(s),w(l),j(a=>({...a,pageIndex:e-1}))}catch(e){P({variant:"error",title:"Error",description:"Failed to fetch VIP plans."})}};(0,s.useEffect)(()=>{R(t.pageIndex+1,t.pageSize)},[t.pageIndex,t.pageSize]);let C=async e=>{try{await (0,p.uE)(e.id),P({title:"Success",description:'VIP Plan "'.concat(e.plan_name,'" deleted successfully'),variant:"success"}),R(t.pageIndex+1,t.pageSize)}catch(e){P({title:"Error",description:"Failed to delete VIP Plan: ".concat(e),variant:"destructive"})}},D=[{accessorKey:"id",header:"ID"},{accessorKey:"plan_name",header:"Plan Name"},{accessorKey:"price",header:"Price",cell:e=>{let{getValue:a}=e;return"$".concat(a())}},{accessorKey:"discount_price",header:"Discount",cell:e=>{let{getValue:a}=e;return"$".concat(a())}},{accessorKey:"validity_period",header:"Validity (days)",cell:e=>{let{getValue:a}=e;return"".concat(a()," days")}},{accessorKey:"status",header:"Status",cell:e=>(0,r.jsx)("span",{className:"px-2 py-1 rounded-full text-xs font-medium ".concat(e.getValue()?"bg-green-100 text-green-600":"bg-red-100 text-red-600"),children:e.getValue()?"Active":"Inactive"})},{id:"actions",header:"Actions",cell:e=>{let{row:a}=e;return(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(i.z,{variant:"ghost",size:"icon",children:(0,r.jsx)(h.default,{href:"/admin/vip-plans/edit/".concat(a.original.id),passHref:!0,children:(0,r.jsx)(c.Z,{className:"w-4 h-4 text-blue-600"})})}),(0,r.jsxs)(g.aR,{children:[(0,r.jsx)(g.vW,{asChild:!0,children:(0,r.jsx)(i.z,{variant:"ghost",size:"icon",children:(0,r.jsx)(u.Z,{className:"w-4 h-4 text-red-600"})})}),(0,r.jsxs)(g._T,{children:[(0,r.jsxs)(g.fY,{children:[(0,r.jsx)("h2",{className:"text-xl font-bold",children:"Confirm Delete"}),(0,r.jsxs)("p",{children:["Are you sure you want to delete VIP Plan: ",a.original.plan_name,"?"]})]}),(0,r.jsxs)(g.xo,{children:[(0,r.jsx)(i.z,{variant:"secondary",onClick:()=>C(a.original),children:"Yes, Delete"}),(0,r.jsx)(i.z,{variant:"outline",children:"Cancel"})]})]})]})]})}}],k=(0,l.b7)({data:e,columns:D,state:{pagination:t},pageCount:N,onPaginationChange:j,getCoreRowModel:(0,n.sC)(),manualPagination:!0});return(0,r.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8",children:(0,r.jsxs)("div",{className:"max-w-12xl mx-auto space-y-6",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"VIP Plan List"}),(0,r.jsx)(i.z,{asChild:!0,variant:"default",className:"flex items-center space-x-2",children:(0,r.jsxs)(h.default,{href:"/admin/vip-plans/add",children:[(0,r.jsx)(f.Z,{className:"w-4 h-4 mr-1"}),(0,r.jsx)("span",{children:"Add VIP Plan"})]})})]}),(0,r.jsxs)(d.Zb,{className:"border-none shadow-xl bg-white/80 backdrop-blur",children:[(0,r.jsx)(d.Ol,{className:"border-b border-gray-100 pb-4",children:(0,r.jsx)(d.ll,{className:"text-xl text-gray-800",children:"VIP Plans"})}),(0,r.jsx)(d.aY,{className:"overflow-x-auto",children:(0,r.jsxs)(o.iA,{children:[(0,r.jsx)(o.xD,{children:k.getHeaderGroups().map(e=>(0,r.jsx)(o.SC,{children:e.headers.map(e=>(0,r.jsx)(o.ss,{className:"text-left",children:e.isPlaceholder?null:(0,l.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(o.RM,{children:k.getRowModel().rows.length?k.getRowModel().rows.map(e=>(0,r.jsx)(o.SC,{children:e.getVisibleCells().map(e=>(0,r.jsx)(o.pj,{children:(0,l.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(o.SC,{children:(0,r.jsx)(o.pj,{colSpan:D.length,className:"h-24 text-center",children:"No VIP plans found."})})})]})}),(0,r.jsxs)("div",{className:"flex justify-between items-center p-4",children:[(0,r.jsxs)(i.z,{variant:"outline",onClick:()=>k.previousPage(),disabled:!k.getCanPreviousPage(),className:"flex items-center",children:[(0,r.jsx)(m.Z,{className:"w-4 h-4 mr-2"}),"Previous"]}),(0,r.jsxs)("span",{className:"text-gray-600",children:["Page ",t.pageIndex+1," of ",N]}),(0,r.jsxs)(i.z,{variant:"outline",onClick:()=>k.nextPage(),disabled:!k.getCanNextPage(),className:"flex items-center",children:["Next",(0,r.jsx)(x.Z,{className:"w-4 h-4 ml-2"})]})]})]})]})})}},89818:function(e,a,t){"use strict";t.d(a,{aR:function(){return S},_T:function(){return M},xo:function(){return Z},fY:function(){return T},vW:function(){return V}});var r=t(57437),s=t(2265),l=t(73966),n=t(98575),i=t(49027),d=t(6741),o=t(37053),c="AlertDialog",[u,f]=(0,l.b)(c,[i.p8]),m=(0,i.p8)(),x=e=>{let{__scopeAlertDialog:a,...t}=e,s=m(a);return(0,r.jsx)(i.fC,{...s,...t,modal:!0})};x.displayName=c;var p=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,l=m(t);return(0,r.jsx)(i.xz,{...l,...s,ref:a})});p.displayName="AlertDialogTrigger";var h=e=>{let{__scopeAlertDialog:a,...t}=e,s=m(a);return(0,r.jsx)(i.h_,{...s,...t})};h.displayName="AlertDialogPortal";var g=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,l=m(t);return(0,r.jsx)(i.aV,{...l,...s,ref:a})});g.displayName="AlertDialogOverlay";var y="AlertDialogContent",[j,N]=u(y),v=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,children:l,...c}=e,u=m(t),f=s.useRef(null),x=(0,n.e)(a,f),p=s.useRef(null);return(0,r.jsx)(i.jm,{contentName:y,titleName:b,docsSlug:"alert-dialog",children:(0,r.jsx)(j,{scope:t,cancelRef:p,children:(0,r.jsxs)(i.VY,{role:"alertdialog",...u,...c,ref:x,onOpenAutoFocus:(0,d.M)(c.onOpenAutoFocus,e=>{var a;e.preventDefault(),null===(a=p.current)||void 0===a||a.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,r.jsx)(o.A4,{children:l}),(0,r.jsx)(A,{contentRef:f})]})})})});v.displayName=y;var b="AlertDialogTitle",w=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,l=m(t);return(0,r.jsx)(i.Dx,{...l,...s,ref:a})});w.displayName=b;var P="AlertDialogDescription",R=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,l=m(t);return(0,r.jsx)(i.dk,{...l,...s,ref:a})});R.displayName=P;var C=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,l=m(t);return(0,r.jsx)(i.x8,{...l,...s,ref:a})});C.displayName="AlertDialogAction";var D="AlertDialogCancel",k=s.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...s}=e,{cancelRef:l}=N(D,t),d=m(t),o=(0,n.e)(a,l);return(0,r.jsx)(i.x8,{...d,...s,ref:o})});k.displayName=D;var A=e=>{let{contentRef:a}=e,t="`".concat(y,"` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the `").concat(y,"` by passing a `").concat(P,"` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an `id` and passing the same value to the `aria-describedby` prop in `").concat(y,"`. If the description is confusing or duplicative for sighted users, you can use the `@radix-ui/react-visually-hidden` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog");return s.useEffect(()=>{var e;document.getElementById(null===(e=a.current)||void 0===e?void 0:e.getAttribute("aria-describedby"))||console.warn(t)},[t,a]),null},z=t(93448),I=t(12381);let S=x,V=p,_=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(g,{className:(0,z.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s,ref:a})});_.displayName=g.displayName;let M=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsxs)(h,{children:[(0,r.jsx)(_,{}),(0,r.jsx)(v,{ref:a,className:(0,z.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...s})]})});M.displayName=v.displayName;let T=e=>{let{className:a,...t}=e;return(0,r.jsx)("div",{className:(0,z.cn)("flex flex-col space-y-2 text-center sm:text-left",a),...t})};T.displayName="AlertDialogHeader";let Z=e=>{let{className:a,...t}=e;return(0,r.jsx)("div",{className:(0,z.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...t})};Z.displayName="AlertDialogFooter",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(w,{ref:a,className:(0,z.cn)("text-lg font-semibold",t),...s})}).displayName=w.displayName,s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(R,{ref:a,className:(0,z.cn)("text-sm text-muted-foreground",t),...s})}).displayName=R.displayName,s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(C,{ref:a,className:(0,z.cn)((0,I.d)(),t),...s})}).displayName=C.displayName,s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(k,{ref:a,className:(0,z.cn)((0,I.d)({variant:"outline"}),"mt-2 sm:mt-0",t),...s})}).displayName=k.displayName},33804:function(e,a,t){"use strict";t.d(a,{RM:function(){return d},SC:function(){return o},iA:function(){return n},pj:function(){return u},ss:function(){return c},xD:function(){return i}});var r=t(57437),s=t(2265),l=t(93448);let n=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:a,className:(0,l.cn)("w-full caption-bottom text-sm",t),...s})})});n.displayName="Table";let i=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("thead",{ref:a,className:(0,l.cn)("[&_tr]:border-b",t),...s})});i.displayName="TableHeader";let d=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("tbody",{ref:a,className:(0,l.cn)("[&_tr:last-child]:border-0",t),...s})});d.displayName="TableBody",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("tfoot",{ref:a,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s})}).displayName="TableFooter";let o=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("tr",{ref:a,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});o.displayName="TableRow";let c=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("th",{ref:a,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s})});c.displayName="TableHead";let u=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("td",{ref:a,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});u.displayName="TableCell",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("caption",{ref:a,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",t),...s})}).displayName="TableCaption"}},function(e){e.O(0,[8218,73,2496,7514,2972,9712,9027,6714,2971,2117,1744],function(){return e(e.s=66852)}),_N_E=e.O()}]);