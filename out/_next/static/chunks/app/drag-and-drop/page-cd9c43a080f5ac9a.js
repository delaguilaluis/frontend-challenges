(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[231],{7095:function(e,t,o){"use strict";o.d(t,{Z:function(){return b}});var a=o(431),r=o(6750),n=o(6006),i=o(9791),l=o(7562),v=o(5457),s=o(8006),u=o(5991),d=o(8539),c=o(3809);function f(e){return(0,c.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var p=o(9268);let Z=["className","raised"],m=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},f,t)},g=(0,v.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),h=n.forwardRef(function(e,t){let o=(0,s.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=o,v=(0,r.Z)(o,Z),u=(0,a.Z)({},o,{raised:l}),d=m(u);return(0,p.jsx)(g,(0,a.Z)({className:(0,i.Z)(d.root,n),elevation:l?8:void 0,ref:t,ownerState:u},v))});var b=h},5991:function(e,t,o){"use strict";o.d(t,{Z:function(){return x}});var a=o(6750),r=o(431),n=o(6006),i=o(9791),l=o(7562),v=o(3343),s=o(5457),u=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),d=o(8006),c=o(8539),f=o(3809);function p(e){return(0,f.Z)("MuiPaper",e)}(0,c.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var Z=o(9268);let m=["className","component","elevation","square","variant"],g=e=>{let{square:t,elevation:o,variant:a,classes:r}=e,n={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${o}`]};return(0,l.Z)(n,p,r)},h=(0,s.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,"elevation"===o.variant&&t[`elevation${o.elevation}`]]}})(({theme:e,ownerState:t})=>{var o;return(0,r.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,v.Fq)("#fff",u(t.elevation))}, ${(0,v.Fq)("#fff",u(t.elevation))})`},e.vars&&{backgroundImage:null==(o=e.vars.overlays)?void 0:o[t.elevation]}))}),b=n.forwardRef(function(e,t){let o=(0,d.Z)({props:e,name:"MuiPaper"}),{className:n,component:l="div",elevation:v=1,square:s=!1,variant:u="elevation"}=o,c=(0,a.Z)(o,m),f=(0,r.Z)({},o,{component:l,elevation:v,square:s,variant:u}),p=g(f);return(0,Z.jsx)(h,(0,r.Z)({as:l,ownerState:f,className:(0,i.Z)(p.root,n),ref:t},c))});var x=b},4188:function(e,t,o){Promise.resolve().then(o.bind(o,1952))},1952:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return v}});var a=o(9268),r=o(7807),n=o(1771),i=o(7095),l=o(6006);function v(){let[e,t]=(0,l.useState)(0),[o,v]=(0,l.useState)(0),s={paddingX:4,paddingY:8,margin:"auto",cursor:"move"},u=!e&&!o;return u||(s.position="absolute",s.top=o,s.left=e),(0,a.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",overflow:"scroll",height:"100vh"},onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),t(e.clientX),v(e.clientY)},children:(0,a.jsx)(n.Z,{className:"lg:ml-72 my-auto",children:(0,a.jsx)(i.Z,{draggable:!0,sx:s,children:"Drag-and-drop me"})})})}}},function(e){e.O(0,[586,253,769,744],function(){return e(e.s=4188)}),_N_E=e.O()}]);