(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{36034:function(e,s,r){Promise.resolve().then(r.bind(r,40091))},40091:function(e,s,r){"use strict";r.r(s);var t=r(57437),a=r(2265),i=r(40279),l=r(12381),n=r(79820),c=r(68245),d=r(23340),o=r(51817),u=r(83229),m=r(96950);s.default=()=>{let[e,s]=(0,a.useState)(""),[r,f]=(0,a.useState)({}),[x,h]=(0,a.useState)(new Set),[p,b]=(0,a.useState)(!1),{toast:g}=(0,d.pm)();(0,a.useEffect)(()=>{v()},[]);let v=async()=>{try{let e=(await (0,m.Lv)()).reduce((e,s)=>{let r=s.permission_name||"Ungrouped";return e[r]||(e[r]=[]),e[r].push(s),e},{});f(e)}catch(e){console.error("Error fetching permissions:",e),g({variant:"destructive",title:"Error",description:"Failed to load permissions."})}},j=e=>{h(s=>{let r=new Set(s);return r.has(e)?r.delete(e):r.add(e),r})},N=async r=>{if(r.preventDefault(),!e||0===x.size){g({variant:"destructive",title:"Validation Error",description:"Role name and at least one permission are required."});return}b(!0);try{let r={role_name:e,active:!0,permissions:Array.from(x).map(e=>({id:e}))};await (0,m.fA)(r),g({variant:"success",title:"Success",description:"Role created successfully."}),s(""),h(new Set)}catch(e){console.error("Error creating role:",e),g({variant:"destructive",title:"Error",description:"Failed to create role."})}finally{b(!1)}};return(0,t.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8",children:(0,t.jsxs)("div",{className:"max-w-6xl mx-auto space-y-6",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Add Role"}),(0,t.jsxs)(n.Zb,{className:"border-none shadow-xl bg-white/80 backdrop-blur",children:[(0,t.jsx)(n.Ol,{children:(0,t.jsx)(n.ll,{className:"text-xl",children:"Create New Role"})}),(0,t.jsx)(n.aY,{children:(0,t.jsxs)("form",{onSubmit:N,className:"space-y-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Role Name"}),(0,t.jsx)(i.I,{value:e,onChange:e=>s(e.target.value),placeholder:"Enter role name",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Permissions"}),Object.entries(r).map(e=>{let[s,r]=e;return(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h3",{className:"text-md font-semibold mb-2",children:s}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:r.map(e=>{var s;return(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)(c.X,{id:e.id,checked:x.has(null!==(s=e.id)&&void 0!==s?s:""),onCheckedChange:()=>{var s;return j(null!==(s=e.id)&&void 0!==s?s:"")}}),(0,t.jsx)("label",{htmlFor:e.id,className:"text-sm text-gray-700",children:e.route})]},e.id)})})]},s)})]}),(0,t.jsx)(l.z,{type:"submit",className:"w-full",disabled:p,children:p?(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)(o.Z,{className:"w-4 h-4 animate-spin"}),(0,t.jsx)("span",{children:"Saving..."})]}):(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)(u.Z,{className:"w-4 h-4"}),(0,t.jsx)("span",{children:"Create Role"})]})})]})})]})]})})}},68245:function(e,s,r){"use strict";r.d(s,{X:function(){return c}});var t=r(57437),a=r(2265),i=r(9270),l=r(30401),n=r(93448);let c=a.forwardRef((e,s)=>{let{className:r,...a}=e;return(0,t.jsx)(i.fC,{ref:s,className:(0,n.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...a,children:(0,t.jsx)(i.z$,{className:(0,n.cn)("flex items-center justify-center text-current"),children:(0,t.jsx)(l.Z,{className:"h-4 w-4"})})})});c.displayName=i.fC.displayName},40279:function(e,s,r){"use strict";r.d(s,{I:function(){return l}});var t=r(57437),a=r(2265),i=r(93448);let l=a.forwardRef((e,s)=>{let{className:r,type:a,...l}=e;return(0,t.jsx)("input",{type:a,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:s,...l})});l.displayName="Input"}},function(e){e.O(0,[8218,73,2496,502,6714,2971,2117,1744],function(){return e(e.s=36034)}),_N_E=e.O()}]);