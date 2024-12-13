(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9211],{45283:function(e,s,a){Promise.resolve().then(a.bind(a,4248))},51817:function(e,s,a){"use strict";a.d(s,{Z:function(){return r}});let r=(0,a(79205).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},83229:function(e,s,a){"use strict";a.d(s,{Z:function(){return r}});let r=(0,a(79205).Z)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},4248:function(e,s,a){"use strict";a.r(s);var r=a(57437),t=a(2265),i=a(40279),l=a(12381),n=a(79820),c=a(23340),d=a(51817),o=a(83229),u=a(96950);s.default=()=>{let[e,s]=(0,t.useState)(""),[a,m]=(0,t.useState)(""),[x,f]=(0,t.useState)(!1),{toast:p}=(0,c.pm)(),h=async r=>{if(r.preventDefault(),f(!0),!e||!a){p({variant:"error",title:"Validation Error",description:"All fields are required."}),f(!1);return}try{await (0,u.J$)({permission_name:e,route:a}),p({variant:"success",title:"Success",description:"Permission created successfully."}),s(""),m("")}catch(e){p({variant:"error",title:"Error",description:e.message||"Failed to create permission."})}finally{f(!1)}};return(0,r.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8",children:(0,r.jsxs)("div",{className:"max-w-12xl mx-auto space-y-6",children:[(0,r.jsxs)("div",{className:"text-left space-y-2",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Permissions Management"}),(0,r.jsx)("p",{className:"text-gray-500",children:"Create a new permission"})]}),(0,r.jsxs)(n.Zb,{className:"border-none shadow-xl bg-white/80 backdrop-blur",children:[(0,r.jsx)(n.Ol,{className:"border-b border-gray-100 pb-6",children:(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("div",{className:"h-8 w-1 bg-blue-600 rounded-full"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(n.ll,{className:"text-xl text-gray-800",children:"New Permission"}),(0,r.jsx)(n.SZ,{className:"text-gray-500",children:"Fill in the details below to create a new permission."})]})]})}),(0,r.jsx)(n.aY,{className:"pt-6",children:(0,r.jsxs)("form",{onSubmit:h,className:"space-y-6",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Name"}),(0,r.jsx)(i.I,{value:e,onChange:e=>s(e.target.value),placeholder:"Enter permission name",required:!0})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Route"}),(0,r.jsx)(i.I,{value:a,onChange:e=>m(e.target.value),placeholder:"Enter route (e.g., /api/permissions)",required:!0})]})]})}),(0,r.jsx)(n.eW,{className:"border-t border-gray-100 mt-6",children:(0,r.jsx)("div",{className:"flex space-x-3 pt-6",children:(0,r.jsx)(l.z,{className:"w-100 flex-1 h-11 bg-primary",disabled:x,onClick:h,children:x?(0,r.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,r.jsx)(d.Z,{className:"w-4 h-4 animate-spin"}),(0,r.jsx)("span",{children:"Saving..."})]}):(0,r.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,r.jsx)(o.Z,{className:"w-4 h-4"}),(0,r.jsx)("span",{children:"Save Permission"})]})})})})]})]})})}},40279:function(e,s,a){"use strict";a.d(s,{I:function(){return l}});var r=a(57437),t=a(2265),i=a(93448);let l=t.forwardRef((e,s)=>{let{className:a,type:t,...l}=e;return(0,r.jsx)("input",{type:t,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:s,...l})});l.displayName="Input"}},function(e){e.O(0,[8218,73,2496,6714,2971,2117,1744],function(){return e(e.s=45283)}),_N_E=e.O()}]);