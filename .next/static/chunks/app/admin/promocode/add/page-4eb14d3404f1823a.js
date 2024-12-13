(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6664],{55805:function(e,t,a){Promise.resolve().then(a.bind(a,76926))},51817:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});let r=(0,a(79205).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},83229:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});let r=(0,a(79205).Z)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},76926:function(e,t,a){"use strict";a.r(t);var r=a(57437),s=a(2265),l=a(40279),n=a(15291),i=a(94589),d=a(12381),c=a(79820),o=a(51817),u=a(83229),m=a(23340),f=a(96950);t.default=()=>{let[e,t]=(0,s.useState)(""),[a,h]=(0,s.useState)(""),[x,p]=(0,s.useState)("flat"),[g,b]=(0,s.useState)(null),[j,y]=(0,s.useState)(null),[v,N]=(0,s.useState)(""),[w,k]=(0,s.useState)(""),[S,C]=(0,s.useState)("active"),[_,P]=(0,s.useState)(""),[E,R]=(0,s.useState)(null),[Z,I]=(0,s.useState)(null),[V,D]=(0,s.useState)(null),[q,Q]=(0,s.useState)([]),[z,T]=(0,s.useState)([]),[U,M]=(0,s.useState)(!1),[O,B]=(0,s.useState)(!0),[F,H]=(0,s.useState)(!1),{toast:A}=(0,m.pm)(),[G,W]=(0,s.useState)(!0);(0,s.useEffect)(()=>{let e=async()=>{try{let e=[];switch(_){case"Category":e=(await (0,f.eq)()).map(e=>({id:Number(e.id)||0,name:e.name||"Unnamed Category"}));break;case"Subcategory":e=(await (0,f.lX)()).map(e=>({id:Number(e.id)||0,name:e.name||"Unnamed Subcategory"}));break;case"Ratecard":e=(await (0,f.eJ)()).map(e=>({id:Number(e.id)||0,name:e.name||"Unnamed Ratecard"}));break;case"Package":e=(await (0,f.S$)()).map(e=>({id:Number(e.id)||0,name:e.name||"Unnamed Package"}));break;default:Q([]);return}Q(e),R(null)}catch(e){A({variant:"error",title:"Error",description:"Failed to load ".concat(_," options.")})}};_&&e()},[_,A]),(0,s.useEffect)(()=>{(async()=>{try{let e=await (0,f.qn)();T(e.map(e=>({id:e.id,name:e.first_name||"Unnamed Provider"})))}catch(e){A({variant:"error",title:"Error",description:"Failed to load providers."})}})()},[A]);let Y=async r=>{if(r.preventDefault(),!e||!g||!v||!w||!_||!E||!Z||!V){A({variant:"error",title:"Validation Error",description:"Please fill in all required fields."});return}H(!0);try{await (0,f.HH)({code:e,description:a,discount_type:x,discount_value:g,min_order_value:j,start_date:v,end_date:w,status:S,is_active:G,selection_type:_,selection_id:E,is_global:U,display_to_customer:O,provider_id:Z,image:V}),A({variant:"success",title:"Success",description:"Promocode created successfully."}),t(""),h(""),p("flat"),b(null),y(null),N(""),k(""),C("active"),W(!0),P(""),R(null),Q([]),I(null),D(null),M(!1),B(!0)}catch(e){A({variant:"error",title:"Error",description:"Failed to create promocode."})}finally{H(!1)}};return(0,r.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8",children:(0,r.jsx)("div",{className:"max-w-12xl mx-auto space-y-6",children:(0,r.jsx)(c.Zb,{className:"border-none shadow-xl bg-white/80 backdrop-blur",children:(0,r.jsxs)("form",{onSubmit:Y,className:"space-y-6",children:[(0,r.jsxs)(c.Ol,{children:[(0,r.jsx)(c.ll,{children:"Create New Promocode"}),(0,r.jsx)(c.SZ,{children:"Fill in the details below to create a new promocode"})]}),(0,r.jsxs)(c.aY,{className:"space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Code"}),(0,r.jsx)(l.I,{value:e,onChange:e=>t(e.target.value),placeholder:"Enter promocode",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Provider"}),(0,r.jsxs)(n.Ph,{value:Z||"",onValueChange:I,children:[(0,r.jsx)(n.i4,{className:"bg-white border-gray-200",children:(0,r.jsx)(n.ki,{placeholder:"Select Provider"})}),(0,r.jsx)(n.Bw,{children:z.map(e=>(0,r.jsx)(n.Ql,{value:e.id,children:e.name},e.id))})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Image"}),(0,r.jsx)(l.I,{type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files[0]&&D(e.target.files[0])},required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Active"}),(0,r.jsx)(i.r,{checked:G,onCheckedChange:W})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Description"}),(0,r.jsx)(l.I,{value:a,onChange:e=>h(e.target.value),placeholder:"Enter description (optional)"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Discount Type"}),(0,r.jsxs)(n.Ph,{value:x,onValueChange:e=>p(e),children:[(0,r.jsx)(n.i4,{className:"bg-white border-gray-200",children:(0,r.jsx)(n.ki,{placeholder:"Select Discount Type"})}),(0,r.jsxs)(n.Bw,{children:[(0,r.jsx)(n.Ql,{value:"flat",children:"Flat"}),(0,r.jsx)(n.Ql,{value:"percentage",children:"Percentage"})]})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Discount Value"}),(0,r.jsx)(l.I,{type:"number",value:null!=g?g:"",onChange:e=>b(Number(e.target.value)),placeholder:"Enter discount value",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Min Order Value"}),(0,r.jsx)(l.I,{type:"number",value:null!=j?j:"",onChange:e=>y(Number(e.target.value)),placeholder:"Enter min order value (optional)"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Start Date"}),(0,r.jsx)(l.I,{type:"date",value:v,onChange:e=>N(e.target.value),required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"End Date"}),(0,r.jsx)(l.I,{type:"date",value:w,onChange:e=>k(e.target.value),required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Selection Type"}),(0,r.jsxs)(n.Ph,{value:_,onValueChange:e=>P(e),children:[(0,r.jsx)(n.i4,{className:"bg-white border-gray-200",children:(0,r.jsx)(n.ki,{placeholder:"Select Type"})}),(0,r.jsxs)(n.Bw,{children:[(0,r.jsx)(n.Ql,{value:"Category",children:"Category"}),(0,r.jsx)(n.Ql,{value:"Subcategory",children:"Subcategory"}),(0,r.jsx)(n.Ql,{value:"Ratecard",children:"Ratecard"}),(0,r.jsx)(n.Ql,{value:"Package",children:"Package"})]})]})]}),_&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{className:"text-sm font-medium text-gray-700",children:["Select ",_]}),(0,r.jsxs)(n.Ph,{value:String(E),onValueChange:e=>R(Number(e)),children:[(0,r.jsx)(n.i4,{className:"bg-white border-gray-200",children:(0,r.jsx)(n.ki,{placeholder:"Select ".concat(_)})}),(0,r.jsx)(n.Bw,{children:q.map(e=>(0,r.jsx)(n.Ql,{value:String(e.id),children:e.name},e.id))})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Global Promocode"}),(0,r.jsx)(i.r,{checked:U,onCheckedChange:M})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Display to Customer"}),(0,r.jsx)(i.r,{checked:O,onCheckedChange:B})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Active/Inactive"}),(0,r.jsx)(i.r,{checked:"active"===S,onCheckedChange:e=>C(e?"active":"inactive")})]})]}),(0,r.jsx)(c.eW,{children:(0,r.jsxs)(d.z,{type:"submit",className:"w-full",disabled:F,children:[F?(0,r.jsx)(o.Z,{className:"w-4 h-4 animate-spin"}):(0,r.jsx)(u.Z,{className:"w-4 h-4"}),"Save Promocode"]})})]})})})})}},40279:function(e,t,a){"use strict";a.d(t,{I:function(){return n}});var r=a(57437),s=a(2265),l=a(93448);let n=s.forwardRef((e,t)=>{let{className:a,type:s,...n}=e;return(0,r.jsx)("input",{type:s,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});n.displayName="Input"},15291:function(e,t,a){"use strict";a.d(t,{Bw:function(){return x},Ph:function(){return o},Ql:function(){return p},i4:function(){return m},ki:function(){return u}});var r=a(57437),s=a(2265),l=a(93402),n=a(40875),i=a(22135),d=a(30401),c=a(93448);let o=l.fC;l.ZA;let u=l.B4,m=s.forwardRef((e,t)=>{let{className:a,children:s,...i}=e;return(0,r.jsxs)(l.xz,{ref:t,className:(0,c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...i,children:[s,(0,r.jsx)(l.JO,{asChild:!0,children:(0,r.jsx)(n.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=l.xz.displayName;let f=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.u_,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",a),...s,children:(0,r.jsx)(i.Z,{className:"h-4 w-4"})})});f.displayName=l.u_.displayName;let h=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.$G,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",a),...s,children:(0,r.jsx)(n.Z,{className:"h-4 w-4"})})});h.displayName=l.$G.displayName;let x=s.forwardRef((e,t)=>{let{className:a,children:s,position:n="popper",...i}=e;return(0,r.jsx)(l.h_,{children:(0,r.jsxs)(l.VY,{ref:t,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:n,...i,children:[(0,r.jsx)(f,{}),(0,r.jsx)(l.l_,{className:(0,c.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),(0,r.jsx)(h,{})]})})});x.displayName=l.VY.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.__,{ref:t,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",a),...s})}).displayName=l.__.displayName;let p=s.forwardRef((e,t)=>{let{className:a,children:s,...n}=e;return(0,r.jsxs)(l.ck,{ref:t,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...n,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(l.wU,{children:(0,r.jsx)(d.Z,{className:"h-4 w-4"})})}),(0,r.jsx)(l.eT,{children:s})]})});p.displayName=l.ck.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",a),...s})}).displayName=l.Z0.displayName},94589:function(e,t,a){"use strict";a.d(t,{r:function(){return i}});var r=a(57437),s=a(2265),l=a(50721),n=a(93448);let i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.fC,{className:(0,n.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",a),...s,ref:t,children:(0,r.jsx)(l.bU,{className:(0,n.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});i.displayName=l.fC.displayName},50721:function(e,t,a){"use strict";a.d(t,{bU:function(){return w},fC:function(){return N}});var r=a(2265),s=a(6741),l=a(98575),n=a(73966),i=a(80886),d=a(6718),c=a(90420),o=a(66840),u=a(57437),m="Switch",[f,h]=(0,n.b)(m),[x,p]=f(m),g=r.forwardRef((e,t)=>{let{__scopeSwitch:a,name:n,checked:d,defaultChecked:c,required:m,disabled:f,value:h="on",onCheckedChange:p,form:g,...b}=e,[j,N]=r.useState(null),w=(0,l.e)(t,e=>N(e)),k=r.useRef(!1),S=!j||g||!!j.closest("form"),[C=!1,_]=(0,i.T)({prop:d,defaultProp:c,onChange:p});return(0,u.jsxs)(x,{scope:a,checked:C,disabled:f,children:[(0,u.jsx)(o.WV.button,{type:"button",role:"switch","aria-checked":C,"aria-required":m,"data-state":v(C),"data-disabled":f?"":void 0,disabled:f,value:h,...b,ref:w,onClick:(0,s.M)(e.onClick,e=>{_(e=>!e),S&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})}),S&&(0,u.jsx)(y,{control:j,bubbles:!k.current,name:n,value:h,checked:C,required:m,disabled:f,form:g,style:{transform:"translateX(-100%)"}})]})});g.displayName=m;var b="SwitchThumb",j=r.forwardRef((e,t)=>{let{__scopeSwitch:a,...r}=e,s=p(b,a);return(0,u.jsx)(o.WV.span,{"data-state":v(s.checked),"data-disabled":s.disabled?"":void 0,...r,ref:t})});j.displayName=b;var y=e=>{let{control:t,checked:a,bubbles:s=!0,...l}=e,n=r.useRef(null),i=(0,d.D)(a),o=(0,c.t)(t);return r.useEffect(()=>{let e=n.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(i!==a&&t){let r=new Event("click",{bubbles:s});t.call(e,a),e.dispatchEvent(r)}},[i,a,s]),(0,u.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:a,...l,tabIndex:-1,ref:n,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function v(e){return e?"checked":"unchecked"}var N=g,w=j}},function(e){e.O(0,[8218,73,2496,7514,3175,7218,6714,2971,2117,1744],function(){return e(e.s=55805)}),_N_E=e.O()}]);