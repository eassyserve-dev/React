(()=>{var e={};e.id=6200,e.ids=[6200],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},27790:e=>{"use strict";e.exports=require("assert")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},9227:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>o,routeModule:()=>u,tree:()=>d}),t(83097),t(59964),t(35213),t(90996);var a=t(30170),l=t(45002),i=t(83876),r=t.n(i),n=t(66299),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);t.d(s,c);let d=["",{children:["admin",{children:["category",{children:["edit",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,83097)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\category\\edit\\[id]\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,59964)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,35213)),"C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,90996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["C:\\laragon\\www\\innovins\\easyserve-new\\next-shadcn-admin-dashboard\\src\\app\\admin\\category\\edit\\[id]\\page.tsx"],x="/admin/category/edit/[id]/page",m={require:t,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/admin/category/edit/[id]/page",pathname:"/admin/category/edit/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},89980:(e,s,t)=>{Promise.resolve().then(t.bind(t,36687))},36687:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>I});var a=t(97247),l=t(28964),i=t(2761),r=t(34178),n=t(55757),c=t(85426),d=t(28852),o=t(58760),x=t(33264),m=t(76688),u=t(70405),h=t(33841),p=t(99219),g=t(11049),j=t(9527),v=t(99890),y=t(999),f=t(8749),b=t(7663),N=t(95714),w=t(13808),S=t(49835);t(24221);let C=(0,i.default)(async()=>{},{loadableGenerated:{modules:["app\\admin\\category\\edit\\[id]\\page.tsx -> react-quill"]},ssr:!1}),k={toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]]},I=()=>{let e=(0,r.useRouter)(),s=(0,r.usePathname)(),t=s?.split("/").pop(),[i,I]=(0,l.useState)(!1),[_,P]=(0,l.useState)(null),[E,q]=(0,l.useState)(null),[Z,A]=(0,l.useState)(""),[G,U]=(0,l.useState)([]),[z,T]=(0,l.useState)(""),[R,D]=(0,l.useState)("specific"),[L,$]=(0,l.useState)("google"),[O,Q]=(0,l.useState)(""),[B,V]=(0,l.useState)(!0),[M,F]=(0,l.useState)(""),[H,X]=(0,l.useState)(""),[Y,J]=(0,l.useState)(null),[K,W]=(0,l.useState)(null),[ee,es]=(0,l.useState)(null),[et,ea]=(0,l.useState)(""),[el,ei]=(0,l.useState)([]),[er,en]=(0,l.useState)([]),[ec,ed]=(0,l.useState)([]),[eo,ex]=(0,l.useState)(!1),[em,eu]=(0,l.useState)(""),[eh,ep]=(0,l.useState)(""),[eg,ej]=(0,l.useState)([]),[ev,ey]=(0,l.useState)([]),[ef,eb]=(0,l.useState)([]),[eN,ew]=(0,l.useState)(!1),{toast:eS}=(0,S.pm)();(0,l.useEffect)(()=>{t&&eC(t)},[t]),(0,l.useEffect)(()=>{(async()=>{try{let e=await (0,N.G0)();ei(e)}catch(e){eS({variant:"error",title:"Error",description:"Failed to load tax rates."})}})()},[]);let eC=async e=>{try{let s=await (0,N.il)(e);if(F(s.name||""),A(s.optional_heading||""),V(s.active||!0),U(s.locations||[]),en(s.attributes||[]),ed(s.serviceDetails||[]),X(s.service_time||""),J(s.sgst_tax||null),W(s.cgst_tax||null),es(s.igst_tax??null),console.log("categoryData.igst_tax",s.igst_tax),ea(s.sac_code||""),eu(s.exclude_heading||""),ep(s.exclude_description||""),s.excludeItems){let e=s.excludeItems.map(e=>e.item);ej(e||[])}else ej([]);if(ex((s.excludeItems?.length||0)>0),s.excludedImages){let e=s.excludedImages.map(e=>({image:e.image_path}));ey(e?e.map(e=>e.image):[])}else ey([]);console.log(s.excludedImages,"categoryData.excludeImages"),eb(s.includeItems||[]),ew((s.includeItems?.length||0)>0),"string"==typeof s.image&&s.image?P(`${s.image}`):P(null),$(s.location_method||"excel"),D(s.location_type||"specific")}catch(e){eS({title:"Error",description:`Failed to fetch category: ${e}`,variant:"destructive"})}},ek=e=>{en(s=>s.filter((s,t)=>t!==e))},eI=(e,s,t)=>{let a=[...er];a[e]={...a[e],[s]:t},en(a)},e_=e=>{let s=[...er];s[e].options.push({id:Date.now(),value:""}),en(s)},eP=(e,s,t)=>{let a=[...er];a[e].options[s]={...a[e].options[s],value:t},en(a)},eE=(e,s)=>{let t=[...er];t[e].options=t[e].options.filter((e,t)=>t!==s),en(t)},eq=(e,s,t)=>{ed(a=>{let l=[...a];return l[e][s]!==t&&(l[e]={...l[e],[s]:t}),l})},eZ=e=>{ed(s=>s.filter((s,t)=>t!==e))},eA=(e,s)=>{let t=[...eg];t[e]=s,ej(t)},eG=e=>{ej(s=>s.filter((s,t)=>t!==e))},eU=e=>{if(console.log("files",e),e){let s=Array.from(e);ey(e=>[...e,...s])}},ez=e=>{ey(s=>s.filter((s,t)=>t!==e))},eT=(e,s,t)=>{let a=[...ef];a[e]={...a[e],[s]:t},eb(a)},eR=e=>{eb(s=>s.filter((s,t)=>t!==e))},eD=async s=>{s.preventDefault(),I(!0);let a=eg.map(e=>({item:e})),l=ev.map(e=>({image_path:e}));try{await (0,N.yr)(t,{name:M,image:E,optional_heading:Z,locations:G,exclude_heading:em,exclude_description:eh,location_type:R,service_time:H,active:B,attributes:er,serviceDetails:ec,location_method:L,igst_tax:ee,sgst_tax:Y,cgst_tax:K,sac_code:et,excludeItems:a,includeItems:ef,excludedImages:l}),eS({variant:"success",title:"Success.",description:"Category updated successfully"}),e.push("/admin/category")}catch(e){eS({variant:"error",title:"Error.",description:`${e}`})}finally{I(!1)}};return a.jsx("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8",children:(0,a.jsxs)("div",{className:"max-w-12xl mx-auto space-y-6",children:[(0,a.jsxs)("div",{className:"text-left space-y-2",children:[a.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Edit Category"}),a.jsx("p",{className:"text-gray-500",children:"Update category details"})]}),(0,a.jsxs)(n.Zb,{className:"border-none shadow-xl bg-white/80 backdrop-blur",children:[a.jsx(n.Ol,{className:"border-b border-gray-100 pb-6",children:(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[a.jsx("div",{className:"h-8 w-1 bg-blue-600 rounded-full"}),(0,a.jsxs)("div",{children:[a.jsx(n.ll,{className:"text-xl text-gray-800",children:"Edit Category"}),a.jsx(n.SZ,{className:"text-gray-500",children:"Update the details below to modify the category"})]})]})}),a.jsx(n.aY,{className:"pt-6",children:(0,a.jsxs)("form",{onSubmit:eD,className:"space-y-6",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:[a.jsx(m.Z,{className:"w-4 h-4 text-blue-500"}),a.jsx("span",{children:"Category Name"})]}),a.jsx(c.I,{placeholder:"Enter category name",value:M,onChange:e=>F(e.target.value),className:"h-11",required:!0})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:[a.jsx(m.Z,{className:"w-4 h-4 text-blue-500"}),a.jsx("span",{children:"Optional heading"})]}),a.jsx(c.I,{placeholder:"Eg:- No of AC. service",value:Z,onChange:e=>A(e.target.value),className:"h-11",required:!0})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:[a.jsx(m.Z,{className:"w-4 h-4 text-blue-500"}),a.jsx("span",{children:"Service time"})]}),a.jsx(c.I,{placeholder:"Eg:- 30 mint",value:H,onChange:e=>X(e.target.value),className:"h-11",required:!0})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:[a.jsx(u.Z,{className:"w-4 h-4 text-blue-500"}),a.jsx("span",{children:"Category Image"})]}),a.jsx(c.I,{type:"file",accept:"image/*",onChange:e=>{let s=e.target.files?.[0];s&&(q(s),P(URL.createObjectURL(s)))},className:"h-11"}),_&&a.jsx("div",{className:"mt-2",children:a.jsx("img",{src:_,alt:"Category Preview",className:"h-32 w-32 object-cover rounded-md"})})]}),(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:a.jsx("span",{children:"IGST (%)"})}),(0,a.jsxs)(o.Ph,{value:null!==ee?ee.toString():"",onValueChange:e=>es(parseInt(e)),children:[a.jsx(o.i4,{className:"bg-white border-gray-200",children:a.jsx(o.ki,{placeholder:"Select IGST"})}),a.jsx(o.Bw,{children:el.map(e=>(0,a.jsxs)(o.Ql,{value:e.IGST.toString(),children:[e.IGST,"%"]},`igst-${e.id}`))})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:a.jsx("span",{children:"SGST (%)"})}),(0,a.jsxs)(o.Ph,{value:Y?.toString()||"",onValueChange:e=>J(parseInt(e)),children:[a.jsx(o.i4,{className:"bg-white border-gray-200",children:a.jsx(o.ki,{placeholder:"Select SGST"})}),a.jsx(o.Bw,{children:el.map(e=>(0,a.jsxs)(o.Ql,{value:e.SGST.toString(),children:[e.SGST,"%"]},`sgst-${e.id}`))})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:a.jsx("span",{children:"CGST (%)"})}),(0,a.jsxs)(o.Ph,{value:K?.toString()||"",onValueChange:e=>W(parseInt(e)),children:[a.jsx(o.i4,{className:"bg-white border-gray-200",children:a.jsx(o.ki,{placeholder:"Select CGST"})}),a.jsx(o.Bw,{children:el.map(e=>(0,a.jsxs)(o.Ql,{value:e.CGST.toString(),children:[e.CGST,"%"]},`cgst-${e.id}`))})]})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:a.jsx("span",{children:"SAC Code"})}),a.jsx(c.I,{type:"text",placeholder:"Enter SAC Code",value:et,onChange:e=>ea(e.target.value),className:"h-11"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:a.jsx("span",{children:"Category Status"})}),(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[a.jsx("span",{className:"text-sm text-gray-600",children:"Inactive"}),a.jsx(x.r,{checked:B,onCheckedChange:V,className:"data-[state=checked]:bg-blue-500"}),a.jsx("span",{className:"text-sm text-gray-600",children:"Active"})]})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-lg font-semibold",children:"Attributes"}),er.map((e,s)=>(0,a.jsxs)("div",{className:"space-y-2 border p-4 rounded-md bg-gray-50",children:[a.jsx(c.I,{placeholder:"Attribute Name",value:e.name,onChange:e=>eI(s,"name",e.target.value),className:"h-10"}),(0,a.jsxs)(o.Ph,{value:e.type,onValueChange:e=>eI(s,"type",e),children:[a.jsx(o.i4,{className:"bg-white border-gray-200",children:a.jsx(o.ki,{placeholder:"Select Type"})}),(0,a.jsxs)(o.Bw,{children:[a.jsx(o.Ql,{value:"list",children:"List"}),a.jsx(o.Ql,{value:"dropdown",children:"Dropdown"}),a.jsx(o.Ql,{value:"search",children:"Search"})]})]}),"list"===e.type&&(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("h4",{className:"text-sm font-medium",children:"Options"}),e.options.map((e,t)=>(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[a.jsx(c.I,{placeholder:`Option ${t+1}`,value:e.value||"",onChange:e=>eP(s,t,e.target.value),className:"h-10 flex-1"}),a.jsx(d.z,{type:"button",variant:"ghost",className:"p-2 text-red-500",onClick:()=>eE(s,t),children:a.jsx(h.Z,{className:"w-4 h-4"})})]},t)),(0,a.jsxs)(d.z,{type:"button",variant:"outline",className:"mt-2 flex items-center",onClick:()=>e_(s),children:[a.jsx(p.Z,{className:"w-4 h-4 mr-2"}),"Add Option"]})]}),(0,a.jsxs)(d.z,{type:"button",variant:"ghost",className:"mt-4 flex items-center text-red-500",onClick:()=>ek(s),children:[a.jsx(h.Z,{className:"w-4 h-4 mr-2"}),"Remove Attribute"]})]},s)),(0,a.jsxs)(d.z,{type:"button",variant:"outline",onClick:()=>{en(e=>[...e,{name:"",type:"list",options:[{id:Date.now(),value:""}]}])},children:[a.jsx(p.Z,{className:"w-4 h-4 mr-2"}),"Add Attribute"]})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-lg font-medium",children:"Service Details"}),ec.map((e,s)=>(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx(c.I,{placeholder:"Service Title",value:e.title,onChange:e=>eq(s,"title",e.target.value)}),a.jsx(C,{value:e.description,onChange:e=>eq(s,"description",e),modules:k}),(0,a.jsxs)(d.z,{type:"button",variant:"ghost",className:"mt-4 flex items-center text-red-500",onClick:()=>eZ(s),children:[a.jsx(h.Z,{className:"w-4 h-4 mr-2"}),"Remove Service Detail"]})]},s)),a.jsx(d.z,{type:"button",onClick:()=>{ed(e=>[...e,{title:"",description:""}])},children:"Add Service Detail"})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[a.jsx(d.z,{type:"button",onClick:()=>ex(!eo),className:"mb-4",children:eo?"Hide Exclude Section":"Show Exclude Section"}),eo&&(0,a.jsxs)("div",{className:"space-y-6 border p-4 rounded-md bg-gray-50",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("label",{className:"text-sm font-medium",children:"Exclude Heading"}),a.jsx(c.I,{placeholder:"Enter heading",value:em,onChange:e=>eu(e.target.value)})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("label",{className:"text-sm font-medium",children:"Exclude Description"}),a.jsx(c.I,{placeholder:"Enter description",value:eh,onChange:e=>ep(e.target.value)})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("label",{className:"text-sm font-medium",children:"Upload Images"}),a.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:e=>eU(e.target.files)}),a.jsx("div",{className:"flex flex-wrap gap-4 mt-4",children:ev.map((e,s)=>(0,a.jsxs)("div",{className:"relative",children:[a.jsx("img",{src:e instanceof File?URL.createObjectURL(e):e,alt:`Exclude Image ${s+1}`,className:"w-24 h-24 object-cover rounded-md"}),a.jsx("button",{type:"button",className:"absolute top-1 right-1 bg-white rounded-full p-1 text-red-500",onClick:()=>ez(s),children:a.jsx(h.Z,{className:"w-4 h-4"})})]},s))})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-lg font-semibold",children:"Exclude Items"}),eg.map((e,s)=>(0,a.jsxs)("div",{className:"flex items-center space-x-3 bg-gray-100 p-2 rounded-md",children:[a.jsx(c.I,{placeholder:`Item ${s+1}`,value:e,onChange:e=>eA(s,e.target.value),className:"h-10 flex-1"}),a.jsx(d.z,{type:"button",variant:"ghost",className:"p-2 text-red-500",onClick:()=>eG(s),children:a.jsx(h.Z,{className:"w-4 h-4"})})]},s)),(0,a.jsxs)(d.z,{type:"button",variant:"outline",className:"flex items-center",onClick:()=>{ej(e=>[...e,""])},children:[a.jsx(p.Z,{className:"w-4 h-4 mr-2"}),"Add Exclude Item"]})]})]})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[a.jsx(d.z,{type:"button",onClick:()=>ew(e=>!e),className:"mb-4",children:eo?"Hide Include Section":"Show Include Section"}),eN&&(0,a.jsxs)("div",{className:"space-y-4 border p-4 rounded-md bg-gray-50",children:[a.jsx("h3",{className:"text-lg font-semibold",children:"Include Items"}),ef.map((e,s)=>(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx(c.I,{placeholder:"Title",value:e.title,onChange:e=>eT(s,"title",e.target.value),className:"h-10"}),a.jsx(c.I,{placeholder:"Description",value:e.description,onChange:e=>eT(s,"description",e.target.value),className:"h-10"}),a.jsx(d.z,{type:"button",variant:"ghost",className:"p-2 text-red-500",onClick:()=>eR(s),children:a.jsx(h.Z,{className:"w-4 h-4"})})]},s)),(0,a.jsxs)(d.z,{type:"button",onClick:()=>{eb(e=>[...e,{title:"",description:""}])},variant:"outline",className:"mt-2 flex items-center",children:[a.jsx(p.Z,{className:"w-4 h-4 mr-2"}),"Add More"]})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:[a.jsx(g.Z,{className:"w-4 h-4 text-blue-500"}),a.jsx("span",{children:"Location Type"})]}),(0,a.jsxs)(o.Ph,{value:R,onValueChange:e=>D(e),children:[a.jsx(o.i4,{className:"bg-white border-gray-200",children:a.jsx(o.ki,{placeholder:"Select location type"})}),(0,a.jsxs)(o.Bw,{children:[a.jsx(o.Ql,{value:"penindia",children:"Penindia"}),a.jsx(o.Ql,{value:"specific",children:"Specific"})]})]})]}),"specific"===R&&(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:[a.jsx(j.Z,{className:"w-4 h-4 text-blue-500"}),a.jsx("span",{children:"Location Method"})]}),(0,a.jsxs)(o.Ph,{value:L,onValueChange:e=>$(e),children:[a.jsx(o.i4,{className:"bg-white border-gray-200",children:a.jsx(o.ki,{placeholder:"Select method"})}),(0,a.jsxs)(o.Bw,{children:[a.jsx(o.Ql,{value:"google",children:"Google Places"}),a.jsx(o.Ql,{value:"excel",children:"Excel Import"})]})]})]}),"specific"===R&&"google"===L&&(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:[a.jsx(j.Z,{className:"w-4 h-4 text-blue-500"}),a.jsx("span",{children:"Google Places Search"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[a.jsx(c.I,{id:"location-input",value:z,onChange:e=>T(e.target.value),placeholder:"Search for a location",className:"h-11"}),a.jsx(d.z,{type:"button",onClick:e=>{if(e.preventDefault(),z){let e={country:"Unknown",state:"Unknown",city:z,postal_code:null,latitude:null,longitude:null,source_type:"manual"};U(s=>[...s,e]),T("")}},children:"Add"})]})]}),a.jsx("div",{className:"space-y-1",children:G.map((e,s)=>(0,a.jsxs)("div",{className:"flex items-center justify-between p-2 bg-gray-100 rounded-md",children:[a.jsx("span",{className:"text-sm text-gray-700",children:`${e.city}, ${e.state}, ${e.country}`}),a.jsx(d.z,{type:"button",variant:"ghost",onClick:()=>U(G.filter((e,t)=>t!==s)),children:"Remove"})]},s))})]}),"specific"===R&&"excel"===L&&(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:[a.jsx(v.Z,{className:"w-4 h-4 text-blue-500"}),a.jsx("span",{children:"Import from Excel"})]}),a.jsx(c.I,{type:"file",accept:".xls, .xlsx, .csv",onChange:e=>{let s=e.target.files?.[0];if(s){let e=new FileReader;e.onload=e=>{let s=e.target?.result,t=w.ij(s,{type:"binary"}),a=t.SheetNames[0],l=t.Sheets[a],i=w.P6.sheet_to_json(l,{header:1}).slice(1).map(e=>({country:e[0]||"Unknown",state:e[1]||"Unknown",city:e[2]||"Unknown",postal_code:e[3]||null,latitude:e[4]||null,longitude:e[5]||null,source_type:"sheet"}));U(e=>[...e,...i])},e.readAsBinaryString(s)}},className:"h-11"})]}),(0,a.jsxs)(d.z,{type:"button",variant:"outline",onClick:()=>{let e=new Blob([`Country,State,City,Postal Code,Latitude,Longitude
"USA","California","Los Angeles","90001",34.052235,-118.243683`],{type:"text/csv"}),s=URL.createObjectURL(e),t=document.createElement("a");t.href=s,t.download="Sample_Locations.csv",t.click(),URL.revokeObjectURL(s)},children:[a.jsx(y.Z,{className:"w-4 h-4 mr-2"}),"Download Sample Excel"]})]}),a.jsx(d.z,{className:"w-100 flex-1 h-11 bg-primary",disabled:i,type:"submit",children:i?(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[a.jsx(f.Z,{className:"w-4 h-4 animate-spin"}),a.jsx("span",{children:"Updating..."})]}):(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[a.jsx(b.Z,{className:"w-4 h-4"}),a.jsx("span",{children:"Update Category"})]})})]})})]})]})})}},85426:(e,s,t)=>{"use strict";t.d(s,{I:()=>r});var a=t(97247),l=t(28964),i=t(40677);let r=l.forwardRef(({className:e,type:s,...t},l)=>a.jsx("input",{type:s,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:l,...t}));r.displayName="Input"},33264:(e,s,t)=>{"use strict";t.d(s,{r:()=>n});var a=t(97247),l=t(28964),i=t(39609),r=t(40677);let n=l.forwardRef(({className:e,...s},t)=>a.jsx(i.fC,{className:(0,r.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...s,ref:t,children:a.jsx(i.bU,{className:(0,r.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));n.displayName=i.fC.displayName},83097:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});let a=(0,t(45347).createProxy)(String.raw`C:\laragon\www\innovins\easyserve-new\next-shadcn-admin-dashboard\src\app\admin\category\edit\[id]\page.tsx#default`)}};var s=require("../../../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[9379,4591,4564,4080,3145,1515,7176,9847,1676],()=>t(9227));module.exports=a})();