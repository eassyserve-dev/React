(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{83805:function(e,s,a){Promise.resolve().then(a.bind(a,52022))},53113:function(e,s,a){"use strict";a.d(s,{Z:function(){return t}});let t=(0,a(79205).Z)("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]])},99397:function(e,s,a){"use strict";a.d(s,{Z:function(){return t}});let t=(0,a(79205).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},18930:function(e,s,a){"use strict";a.d(s,{Z:function(){return t}});let t=(0,a(79205).Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},99376:function(e,s,a){"use strict";var t=a(35475);a.o(t,"useParams")&&a.d(s,{useParams:function(){return t.useParams}}),a.o(t,"usePathname")&&a.d(s,{usePathname:function(){return t.usePathname}}),a.o(t,"useRouter")&&a.d(s,{useRouter:function(){return t.useRouter}})},52022:function(e,s,a){"use strict";a.r(s);var t=a(57437),l=a(2265),c=a(30166),i=a(99376),n=a(79820),r=a(40279),d=a(12381),o=a(15291),m=a(94589),x=a(75277),h=a(76357),u=a(53113),p=a(18930),g=a(99397),j=a(51817),v=a(83229),y=a(96950),N=a(23340);a(98527);let b=(0,c.default)(()=>Promise.all([a.e(3070),a.e(1652),a.e(5600)]).then(a.t.bind(a,5600,23)),{loadableGenerated:{webpack:()=>[5600]},ssr:!1}),f={toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]]};s.default=()=>{(0,i.useRouter)();let e=(0,i.usePathname)(),s=null==e?void 0:e.split("/").pop(),[a,c]=(0,l.useState)(!1),[S,w]=(0,l.useState)(null),[C,k]=(0,l.useState)(null),[I,_]=(0,l.useState)([]),[E,Z]=(0,l.useState)(""),[P,T]=(0,l.useState)(!0),[z,A]=(0,l.useState)(""),[G,D]=(0,l.useState)(null),[R,U]=(0,l.useState)(null),[M,O]=(0,l.useState)(null),[Q,V]=(0,l.useState)(""),[L,B]=(0,l.useState)([]),[F,H]=(0,l.useState)(""),[q,K]=(0,l.useState)(""),{toast:W}=(0,N.pm)(),[Y,$]=(0,l.useState)(""),[J,X]=(0,l.useState)([]),[ee,es]=(0,l.useState)([]),[ea,et]=(0,l.useState)(!1),[el,ec]=(0,l.useState)(""),[ei,en]=(0,l.useState)(""),[er,ed]=(0,l.useState)([]),[eo,em]=(0,l.useState)([]),[ex,eh]=(0,l.useState)([]),[eu,ep]=(0,l.useState)(!1),[eg,ej]=(0,l.useState)("");(0,l.useEffect)(()=>{ev(),s&&ey(s)},[s,E]),(0,l.useEffect)(()=>{(async()=>{try{let e=await (0,y.G0)();B(e)}catch(e){W({variant:"error",title:"Error",description:"Failed to load tax rates."})}})()},[]);let ev=async()=>{try{let e=await (0,y.eq)();_(e)}catch(e){W({variant:"error",title:"Error",description:"Failed to load categories."})}},ey=async e=>{try{var s,a,t;let l=await (0,y.$x)(e);if(void 0!==l.category_id&&null!==l.category_id&&Z(l.category_id.toString()),A(l.name||""),T(l.active||!0),D(l.sgst_tax||null),U(l.cgst_tax||null),O(null!==(t=l.igst_tax)&&void 0!==t?t:null),V(l.sac_code||""),H(l.meta_description||""),K(l.meta_keyword||""),$(l.optional_heading||""),X(l.attributes||[]),es(l.serviceDetails||[]),ej(l.service_time||""),ec(l.exclude_heading||""),en(l.exclude_description||""),l.excludeItems){let e=l.excludeItems.map(e=>e.item);ed(e||[])}else ed([]);if(et(((null===(s=l.excludeItems)||void 0===s?void 0:s.length)||0)>0),l.excludedImages){let e=l.excludedImages.map(e=>({image:e.image_path}));em(e?e.map(e=>e.image):[])}else em([]);console.log(l.excludedImages,"categoryData.excludeImages"),eh(l.includeItems||[]),ep(((null===(a=l.includeItems)||void 0===a?void 0:a.length)||0)>0),"string"==typeof l.image&&l.image?w("".concat(l.image)):w(null)}catch(e){W({title:"Error",description:"Failed to fetch subcategory: ".concat(e),variant:"destructive"})}},eN=e=>{X(s=>s.filter((s,a)=>a!==e))},eb=(e,s,a)=>{let t=[...J];t[e]={...t[e],[s]:a},X(t)},ef=e=>{let s=[...J];s[e].options.push({id:Date.now(),value:""}),X(s)},eS=(e,s,a)=>{let t=[...J];t[e].options[s]={...t[e].options[s],value:a},X(t)},ew=(e,s)=>{let a=[...J];a[e].options=a[e].options.filter((e,a)=>a!==s),X(a)},eC=(e,s,a)=>{es(t=>{let l=[...t];return l[e][s]!==a&&(l[e]={...l[e],[s]:a}),l})},ek=e=>{es(s=>s.filter((s,a)=>a!==e))},eI=(e,s)=>{let a=[...er];a[e]=s,ed(a)},e_=e=>{ed(s=>s.filter((s,a)=>a!==e))},eE=e=>{if(console.log("files",e),e){let s=Array.from(e);em(e=>[...e,...s])}},eZ=e=>{em(s=>s.filter((s,a)=>a!==e))},eP=(e,s,a)=>{let t=[...ex];t[e]={...t[e],[s]:a},eh(t)},eT=e=>{eh(s=>s.filter((s,a)=>a!==e))},ez=async e=>{e.preventDefault(),c(!0);let a=er.map(e=>({item:e})),t=eo.map(e=>({image_path:e})),l={name:z,image:C,category_id:parseInt(E),optional_heading:Y,exclude_heading:el,exclude_description:ei,service_time:eg,active:P,attributes:J,serviceDetails:ee,excludeItems:a,includeItems:ex,excludedImages:t,igst_tax:M,sgst_tax:G,cgst_tax:R,sac_code:Q,meta_description:F,meta_keyword:q};try{await (0,y.A4)(s,l),W({variant:"success",title:"Success",description:"Subcategory updated successfully"})}catch(e){W({variant:"error",title:"Error",description:"".concat(e)})}finally{c(!1)}};return(0,t.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8",children:(0,t.jsxs)("div",{className:"max-w-12xl mx-auto space-y-6",children:[(0,t.jsxs)("div",{className:"text-left space-y-2",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Edit Subcategory"}),(0,t.jsx)("p",{className:"text-gray-500",children:"Update subcategory details"})]}),(0,t.jsxs)(n.Zb,{className:"border-none shadow-xl bg-white/80 backdrop-blur",children:[(0,t.jsx)(n.Ol,{className:"border-b border-gray-100 pb-6",children:(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)("div",{className:"h-8 w-1 bg-blue-600 rounded-full"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.ll,{className:"text-xl text-gray-800",children:"Edit Subcategory"}),(0,t.jsx)(n.SZ,{className:"text-gray-500",children:"Update the details below to modify the subcategory"})]})]})}),(0,t.jsx)(n.aY,{className:"pt-6",children:(0,t.jsxs)("form",{onSubmit:ez,className:"space-y-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:[(0,t.jsx)(x.Z,{className:"w-4 h-4 text-blue-500"}),(0,t.jsx)("span",{children:"Subcategory Name"})]}),(0,t.jsx)(r.I,{placeholder:"Enter subcategory name",value:z,onChange:e=>A(e.target.value),className:"h-11",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:[(0,t.jsx)(h.Z,{className:"w-4 h-4 text-blue-500"}),(0,t.jsx)("span",{children:"Select Category"})]}),(0,t.jsxs)(o.Ph,{value:E,onValueChange:e=>Z(e),children:[(0,t.jsx)(o.i4,{className:"bg-white border-gray-200",children:(0,t.jsx)(o.ki,{placeholder:"Select a category"})}),(0,t.jsx)(o.Bw,{children:I.map(e=>{var s;return(0,t.jsx)(o.Ql,{value:(null===(s=e.id)||void 0===s?void 0:s.toString())||"",children:e.name},e.id)})})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:[(0,t.jsx)(u.Z,{className:"w-4 h-4 text-blue-500"}),(0,t.jsx)("span",{children:"Subcategory Image"})]}),(0,t.jsx)(r.I,{type:"file",accept:"image/*",onChange:e=>{var s;let a=null===(s=e.target.files)||void 0===s?void 0:s[0];a&&(k(a),w(URL.createObjectURL(a)))},className:"h-11"}),S&&(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)("img",{src:S,alt:"Subcategory Preview",className:"h-32 w-32 object-cover rounded-md"})})]}),(0,t.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:(0,t.jsx)("span",{children:"IGST (%)"})}),(0,t.jsxs)(o.Ph,{value:null!==M?M.toString():"",onValueChange:e=>O(parseInt(e)),children:[(0,t.jsx)(o.i4,{className:"bg-white border-gray-200",children:(0,t.jsx)(o.ki,{placeholder:"Select IGST"})}),(0,t.jsx)(o.Bw,{children:L.map(e=>(0,t.jsxs)(o.Ql,{value:e.IGST.toString(),children:[e.IGST,"%"]},"igst-".concat(e.id)))})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:(0,t.jsx)("span",{children:"SGST (%)"})}),(0,t.jsxs)(o.Ph,{value:(null==G?void 0:G.toString())||"",onValueChange:e=>D(parseInt(e)),children:[(0,t.jsx)(o.i4,{className:"bg-white border-gray-200",children:(0,t.jsx)(o.ki,{placeholder:"Select SGST"})}),(0,t.jsx)(o.Bw,{children:L.map(e=>(0,t.jsxs)(o.Ql,{value:e.SGST.toString(),children:[e.SGST,"%"]},"sgst-".concat(e.id)))})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:(0,t.jsx)("span",{children:"CGST (%)"})}),(0,t.jsxs)(o.Ph,{value:(null==R?void 0:R.toString())||"",onValueChange:e=>U(parseInt(e)),children:[(0,t.jsx)(o.i4,{className:"bg-white border-gray-200",children:(0,t.jsx)(o.ki,{placeholder:"Select CGST"})}),(0,t.jsx)(o.Bw,{children:L.map(e=>(0,t.jsxs)(o.Ql,{value:e.CGST.toString(),children:[e.CGST,"%"]},"cgst-".concat(e.id)))})]})]})]}),"              ",(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:(0,t.jsx)("span",{children:"SAC Code"})}),(0,t.jsx)(r.I,{type:"text",placeholder:"Enter SAC code",value:Q,onChange:e=>V(e.target.value),className:"h-11"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:(0,t.jsx)("span",{children:"Meta Description"})}),(0,t.jsx)(r.I,{type:"text",placeholder:"Enter meta description",value:F,onChange:e=>H(e.target.value),className:"h-11"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:(0,t.jsx)("span",{children:"Meta Keyword"})}),(0,t.jsx)(r.I,{type:"text",placeholder:"Enter meta keyword",value:q,onChange:e=>K(e.target.value),className:"h-11"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700",children:(0,t.jsx)("span",{children:"Subcategory Status"})}),(0,t.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,t.jsx)("span",{className:"text-sm text-gray-600",children:"Inactive"}),(0,t.jsx)(m.r,{checked:P,onCheckedChange:T,className:"data-[state=checked]:bg-blue-500"}),(0,t.jsx)("span",{className:"text-sm text-gray-600",children:"Active"})]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold",children:"Attributes"}),J.map((e,s)=>(0,t.jsxs)("div",{className:"space-y-2 border p-4 rounded-md bg-gray-50",children:[(0,t.jsx)(r.I,{placeholder:"Attribute Name",value:e.name,onChange:e=>eb(s,"name",e.target.value),className:"h-10"}),(0,t.jsxs)(o.Ph,{value:e.type,onValueChange:e=>eb(s,"type",e),children:[(0,t.jsx)(o.i4,{className:"bg-white border-gray-200",children:(0,t.jsx)(o.ki,{placeholder:"Select Type"})}),(0,t.jsxs)(o.Bw,{children:[(0,t.jsx)(o.Ql,{value:"list",children:"List"}),(0,t.jsx)(o.Ql,{value:"dropdown",children:"Dropdown"}),(0,t.jsx)(o.Ql,{value:"search",children:"Search"})]})]}),"list"===e.type&&(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h4",{className:"text-sm font-medium",children:"Options"}),e.options.map((e,a)=>(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)(r.I,{placeholder:"Option ".concat(a+1),value:e.value.toString()||"",onChange:e=>eS(s,a,e.target.value),className:"h-10 flex-1"}),(0,t.jsx)(d.z,{type:"button",variant:"ghost",className:"p-2 text-red-500",onClick:()=>ew(s,a),children:(0,t.jsx)(p.Z,{className:"w-4 h-4"})})]},a)),(0,t.jsxs)(d.z,{type:"button",variant:"outline",className:"mt-2 flex items-center",onClick:()=>ef(s),children:[(0,t.jsx)(g.Z,{className:"w-4 h-4 mr-2"}),"Add Option"]})]}),(0,t.jsxs)(d.z,{type:"button",variant:"ghost",className:"mt-4 flex items-center text-red-500",onClick:()=>eN(s),children:[(0,t.jsx)(p.Z,{className:"w-4 h-4 mr-2"}),"Remove Attribute"]})]},s)),(0,t.jsxs)(d.z,{type:"button",variant:"outline",onClick:()=>{X(e=>[...e,{name:"",type:"list",options:[{id:Date.now(),value:""}]}])},children:[(0,t.jsx)(g.Z,{className:"w-4 h-4 mr-2"}),"Add Attribute"]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h3",{className:"text-lg font-medium",children:"Service Details"}),ee.map((e,s)=>(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(r.I,{placeholder:"Service Title",value:e.title,onChange:e=>eC(s,"title",e.target.value)}),(0,t.jsx)(b,{value:e.description,onChange:e=>eC(s,"description",e),modules:f}),(0,t.jsxs)(d.z,{type:"button",variant:"ghost",className:"mt-4 flex items-center text-red-500",onClick:()=>ek(s),children:[(0,t.jsx)(p.Z,{className:"w-4 h-4 mr-2"}),"Remove Service Detail"]})]},s)),(0,t.jsx)(d.z,{type:"button",onClick:()=>{es(e=>[...e,{title:"",description:""}])},children:"Add Service Detail"})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(d.z,{type:"button",onClick:()=>et(!ea),className:"mb-4",children:ea?"Hide Exclude Section":"Show Exclude Section"}),ea&&(0,t.jsxs)("div",{className:"space-y-6 border p-4 rounded-md bg-gray-50",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-sm font-medium",children:"Exclude Heading"}),(0,t.jsx)(r.I,{placeholder:"Enter heading",value:el,onChange:e=>ec(e.target.value)})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-sm font-medium",children:"Exclude Description"}),(0,t.jsx)(r.I,{placeholder:"Enter description",value:ei,onChange:e=>en(e.target.value)})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-sm font-medium",children:"Upload Images"}),(0,t.jsx)("input",{type:"file",accept:"image/*",multiple:!0,onChange:e=>eE(e.target.files)}),(0,t.jsx)("div",{className:"flex flex-wrap gap-4 mt-4",children:eo.map((e,s)=>(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("img",{src:e instanceof File?URL.createObjectURL(e):e,alt:"Exclude Image ".concat(s+1),className:"w-24 h-24 object-cover rounded-md"}),(0,t.jsx)("button",{type:"button",className:"absolute top-1 right-1 bg-white rounded-full p-1 text-red-500",onClick:()=>eZ(s),children:(0,t.jsx)(p.Z,{className:"w-4 h-4"})})]},s))})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold",children:"Exclude Items"}),er.map((e,s)=>(0,t.jsxs)("div",{className:"flex items-center space-x-3 bg-gray-100 p-2 rounded-md",children:[(0,t.jsx)(r.I,{placeholder:"Item ".concat(s+1),value:e,onChange:e=>eI(s,e.target.value),className:"h-10 flex-1"}),(0,t.jsx)(d.z,{type:"button",variant:"ghost",className:"p-2 text-red-500",onClick:()=>e_(s),children:(0,t.jsx)(p.Z,{className:"w-4 h-4"})})]},s)),(0,t.jsxs)(d.z,{type:"button",variant:"outline",className:"flex items-center",onClick:()=>{ed(e=>[...e,""])},children:[(0,t.jsx)(g.Z,{className:"w-4 h-4 mr-2"}),"Add Exclude Item"]})]})]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(d.z,{type:"button",onClick:()=>ep(e=>!e),className:"mb-4",children:ea?"Hide Include Section":"Show Include Section"}),eu&&(0,t.jsxs)("div",{className:"space-y-4 border p-4 rounded-md bg-gray-50",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold",children:"Include Items"}),ex.map((e,s)=>(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(r.I,{placeholder:"Title",value:e.title,onChange:e=>eP(s,"title",e.target.value),className:"h-10"}),(0,t.jsx)(r.I,{placeholder:"Description",value:e.description,onChange:e=>eP(s,"description",e.target.value),className:"h-10"}),(0,t.jsx)(d.z,{type:"button",variant:"ghost",className:"p-2 text-red-500",onClick:()=>eT(s),children:(0,t.jsx)(p.Z,{className:"w-4 h-4"})})]},s)),(0,t.jsxs)(d.z,{type:"button",onClick:()=>{eh(e=>[...e,{title:"",description:""}])},variant:"outline",className:"mt-2 flex items-center",children:[(0,t.jsx)(g.Z,{className:"w-4 h-4 mr-2"}),"Add More"]})]})]})]})}),(0,t.jsx)(n.eW,{className:"border-t border-gray-100 mt-6",children:(0,t.jsx)("div",{className:"flex space-x-3 pt-6",children:(0,t.jsx)(d.z,{className:"w-100 flex-1 h-11 bg-primary",disabled:a,onClick:ez,children:a?(0,t.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,t.jsx)(j.Z,{className:"w-4 h-4 animate-spin"}),(0,t.jsx)("span",{children:"Updating..."})]}):(0,t.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,t.jsx)(v.Z,{className:"w-4 h-4"}),(0,t.jsx)("span",{children:"Update Subcategory"})]})})})})]})]})})}}},function(e){e.O(0,[6458,8218,73,2496,7514,3175,7218,6714,5315,2971,2117,1744],function(){return e(e.s=83805)}),_N_E=e.O()}]);