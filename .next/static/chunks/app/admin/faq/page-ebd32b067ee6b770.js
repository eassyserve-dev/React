(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7488],{32328:function(e,t,a){Promise.resolve().then(a.bind(a,77429))},99397:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});let r=(0,a(79205).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},15868:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});let r=(0,a(79205).Z)("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]])},18930:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});let r=(0,a(79205).Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},77429:function(e,t,a){"use strict";a.r(t);var r=a(57437),s=a(2265),l=a(71594),n=a(24525),i=a(12381),o=a(79820),d=a(33804),c=a(15868),u=a(18930),f=a(99397),m=a(92451),x=a(10407),p=a(96950),h=a(27648),g=a(89818),y=a(23340);t.default=()=>{let[e,t]=(0,s.useState)([]),[a,j]=(0,s.useState)({pageIndex:0,pageSize:5}),[N,v]=(0,s.useState)(0),[b,w]=(0,s.useState)(0),{toast:A}=(0,y.pm)(),R=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;try{let{data:r,meta:s}=await (0,p.vO)(e,a);t(r),v(s.totalPages),w(s.totalItems),j(t=>({...t,pageIndex:e-1}))}catch(e){console.error("Error fetching FAQs:",e)}};(0,s.useEffect)(()=>{R(a.pageIndex+1,a.pageSize)},[a.pageIndex,a.pageSize]);let C=async e=>{try{await (0,p.bf)(e.id),A({title:"Success",description:'FAQ "'.concat(e.question,'" deleted successfully.'),variant:"success"}),R(a.pageIndex+1,a.pageSize)}catch(e){A({title:"Error",description:"Failed to delete FAQ: ".concat(e),variant:"destructive"})}},D=[{accessorKey:"id",header:"ID"},{accessorKey:"question",header:"Question"},{accessorKey:"status",header:"Status",cell:e=>(0,r.jsx)("span",{className:"px-2 py-1 rounded-full text-xs font-medium ".concat("active"===e.getValue()?"bg-green-100 text-green-600":"bg-red-100 text-red-600"),children:"active"===e.getValue()?"Active":"Inactive"})},{id:"actions",header:"Actions",cell:e=>{let{row:t}=e;return(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(i.z,{variant:"ghost",size:"icon",children:(0,r.jsx)(h.default,{href:"/admin/faqs/edit/".concat(t.original.id),passHref:!0,children:(0,r.jsx)(c.Z,{className:"w-4 h-4 text-blue-600"})})}),(0,r.jsxs)(g.aR,{children:[(0,r.jsx)(g.vW,{asChild:!0,children:(0,r.jsx)(i.z,{variant:"ghost",size:"icon",children:(0,r.jsx)(u.Z,{className:"w-4 h-4 text-red-600"})})}),(0,r.jsxs)(g._T,{children:[(0,r.jsxs)(g.fY,{children:[(0,r.jsx)("h2",{className:"text-xl font-bold",children:"Confirm Delete"}),(0,r.jsxs)("p",{children:["Are you sure you want to delete FAQ: ",t.original.question,"?"]})]}),(0,r.jsxs)(g.xo,{children:[(0,r.jsx)(i.z,{variant:"secondary",onClick:()=>C(t.original),children:"Yes, Delete"}),(0,r.jsx)(i.z,{variant:"outline",children:"Cancel"})]})]})]})]})}}],k=(0,l.b7)({data:e,columns:D,state:{pagination:a},pageCount:N,onPaginationChange:j,getCoreRowModel:(0,n.sC)(),manualPagination:!0});return(0,r.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8",children:(0,r.jsxs)("div",{className:"max-w-12xl mx-auto space-y-6",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"FAQ List"}),(0,r.jsx)(i.z,{asChild:!0,variant:"default",className:"flex items-center space-x-2",children:(0,r.jsxs)(h.default,{href:"/admin/faqs/add",children:[(0,r.jsx)(f.Z,{className:"w-4 h-4 mr-1"}),(0,r.jsx)("span",{children:"Add FAQ"})]})})]}),(0,r.jsxs)(o.Zb,{className:"border-none shadow-xl bg-white/80 backdrop-blur",children:[(0,r.jsx)(o.Ol,{className:"border-b border-gray-100 pb-4",children:(0,r.jsx)(o.ll,{className:"text-xl text-gray-800",children:"FAQs"})}),(0,r.jsx)(o.aY,{className:"overflow-x-auto",children:(0,r.jsxs)(d.iA,{children:[(0,r.jsx)(d.xD,{children:k.getHeaderGroups().map(e=>(0,r.jsx)(d.SC,{children:e.headers.map(e=>(0,r.jsx)(d.ss,{className:"text-left",children:e.isPlaceholder?null:(0,l.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(d.RM,{children:k.getRowModel().rows.length?k.getRowModel().rows.map(e=>(0,r.jsx)(d.SC,{children:e.getVisibleCells().map(e=>(0,r.jsx)(d.pj,{children:(0,l.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(d.SC,{children:(0,r.jsx)(d.pj,{colSpan:D.length,className:"h-24 text-center",children:"No FAQs found."})})})]})}),(0,r.jsxs)("div",{className:"flex justify-between items-center p-4",children:[(0,r.jsxs)(i.z,{variant:"outline",onClick:()=>k.previousPage(),disabled:!k.getCanPreviousPage(),className:"flex items-center",children:[(0,r.jsx)(m.Z,{className:"w-4 h-4 mr-2"}),"Previous"]}),(0,r.jsxs)("span",{className:"text-gray-600",children:["Page ",a.pageIndex+1," of ",N]}),(0,r.jsxs)(i.z,{variant:"outline",onClick:()=>k.nextPage(),disabled:!k.getCanNextPage(),className:"flex items-center",children:["Next",(0,r.jsx)(x.Z,{className:"w-4 h-4 ml-2"})]})]})]})]})})}},89818:function(e,t,a){"use strict";a.d(t,{aR:function(){return F},_T:function(){return I},xo:function(){return _},fY:function(){return Z},vW:function(){return M}});var r=a(57437),s=a(2265),l=a(73966),n=a(98575),i=a(49027),o=a(6741),d=a(37053),c="AlertDialog",[u,f]=(0,l.b)(c,[i.p8]),m=(0,i.p8)(),x=e=>{let{__scopeAlertDialog:t,...a}=e,s=m(t);return(0,r.jsx)(i.fC,{...s,...a,modal:!0})};x.displayName=c;var p=s.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...s}=e,l=m(a);return(0,r.jsx)(i.xz,{...l,...s,ref:t})});p.displayName="AlertDialogTrigger";var h=e=>{let{__scopeAlertDialog:t,...a}=e,s=m(t);return(0,r.jsx)(i.h_,{...s,...a})};h.displayName="AlertDialogPortal";var g=s.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...s}=e,l=m(a);return(0,r.jsx)(i.aV,{...l,...s,ref:t})});g.displayName="AlertDialogOverlay";var y="AlertDialogContent",[j,N]=u(y),v=s.forwardRef((e,t)=>{let{__scopeAlertDialog:a,children:l,...c}=e,u=m(a),f=s.useRef(null),x=(0,n.e)(t,f),p=s.useRef(null);return(0,r.jsx)(i.jm,{contentName:y,titleName:b,docsSlug:"alert-dialog",children:(0,r.jsx)(j,{scope:a,cancelRef:p,children:(0,r.jsxs)(i.VY,{role:"alertdialog",...u,...c,ref:x,onOpenAutoFocus:(0,o.M)(c.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=p.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,r.jsx)(d.A4,{children:l}),(0,r.jsx)(z,{contentRef:f})]})})})});v.displayName=y;var b="AlertDialogTitle",w=s.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...s}=e,l=m(a);return(0,r.jsx)(i.Dx,{...l,...s,ref:t})});w.displayName=b;var A="AlertDialogDescription",R=s.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...s}=e,l=m(a);return(0,r.jsx)(i.dk,{...l,...s,ref:t})});R.displayName=A;var C=s.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...s}=e,l=m(a);return(0,r.jsx)(i.x8,{...l,...s,ref:t})});C.displayName="AlertDialogAction";var D="AlertDialogCancel",k=s.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...s}=e,{cancelRef:l}=N(D,a),o=m(a),d=(0,n.e)(t,l);return(0,r.jsx)(i.x8,{...o,...s,ref:d})});k.displayName=D;var z=e=>{let{contentRef:t}=e,a="`".concat(y,"` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the `").concat(y,"` by passing a `").concat(A,"` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an `id` and passing the same value to the `aria-describedby` prop in `").concat(y,"`. If the description is confusing or duplicative for sighted users, you can use the `@radix-ui/react-visually-hidden` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog");return s.useEffect(()=>{var e;document.getElementById(null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby"))||console.warn(a)},[a,t]),null},S=a(93448),P=a(12381);let F=x,M=p,T=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(g,{className:(0,S.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s,ref:t})});T.displayName=g.displayName;let I=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsxs)(h,{children:[(0,r.jsx)(T,{}),(0,r.jsx)(v,{ref:t,className:(0,S.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...s})]})});I.displayName=v.displayName;let Z=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,S.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};Z.displayName="AlertDialogHeader";let _=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,S.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};_.displayName="AlertDialogFooter",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(w,{ref:t,className:(0,S.cn)("text-lg font-semibold",a),...s})}).displayName=w.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(R,{ref:t,className:(0,S.cn)("text-sm text-muted-foreground",a),...s})}).displayName=R.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(C,{ref:t,className:(0,S.cn)((0,P.d)(),a),...s})}).displayName=C.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(k,{ref:t,className:(0,S.cn)((0,P.d)({variant:"outline"}),"mt-2 sm:mt-0",a),...s})}).displayName=k.displayName},33804:function(e,t,a){"use strict";a.d(t,{RM:function(){return o},SC:function(){return d},iA:function(){return n},pj:function(){return u},ss:function(){return c},xD:function(){return i}});var r=a(57437),s=a(2265),l=a(93448);let n=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",a),...s})})});n.displayName="Table";let i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",a),...s})});i.displayName="TableHeader";let o=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",a),...s})});o.displayName="TableBody",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...s})}).displayName="TableFooter";let d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...s})});d.displayName="TableRow";let c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("th",{ref:t,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...s})});c.displayName="TableHead";let u=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("td",{ref:t,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s})});u.displayName="TableCell",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",a),...s})}).displayName="TableCaption"}},function(e){e.O(0,[8218,73,2496,7514,2972,9712,9027,6714,2971,2117,1744],function(){return e(e.s=32328)}),_N_E=e.O()}]);