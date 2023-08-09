(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{1771:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var a=r(431),n=r(6750),o=r(6006),i=r(9791),l=r(4323),s=r(1579),u=r(6601),v=r(5887),d=r(9268);let p=["className","component"];var c=r(7327),h=r(2516),f=r(6356);let m=(0,h.Z)(),g=function(e={}){let{themeId:t,defaultTheme:r,defaultClassName:c="MuiBox-root",generateClassName:h}=e,f=(0,l.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.Z),m=o.forwardRef(function(e,o){let l=(0,v.Z)(r),s=(0,u.Z)(e),{className:m,component:g="div"}=s,Z=(0,n.Z)(s,p);return(0,d.jsx)(f,(0,a.Z)({as:g,ref:o,className:(0,i.Z)(m,h?h(c):c),theme:t&&l[t]||l},Z))});return m}({themeId:f.Z,defaultTheme:m,defaultClassName:"MuiBox-root",generateClassName:c.Z.generate});var Z=g},7095:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var a=r(431),n=r(6750),o=r(6006),i=r(9791),l=r(7562),s=r(5457),u=r(8006),v=r(5991),d=r(8539),p=r(3809);function c(e){return(0,p.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var h=r(9268);let f=["className","raised"],m=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},c,t)},g=(0,s.ZP)(v.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=o.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=r,s=(0,n.Z)(r,f),v=(0,a.Z)({},r,{raised:l}),d=m(v);return(0,h.jsx)(g,(0,a.Z)({className:(0,i.Z)(d.root,o),elevation:l?8:void 0,ref:t,ownerState:v},s))});var x=Z},5991:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var a=r(6750),n=r(431),o=r(6006),i=r(9791),l=r(7562),s=r(3343),u=r(5457),v=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),d=r(8006),p=r(8539),c=r(3809);function h(e){return(0,c.Z)("MuiPaper",e)}(0,p.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=r(9268);let m=["className","component","elevation","square","variant"],g=e=>{let{square:t,elevation:r,variant:a,classes:n}=e,o={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${r}`]};return(0,l.Z)(o,h,n)},Z=(0,u.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return(0,n.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,n.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",v(t.elevation))}, ${(0,s.Fq)("#fff",v(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))}),x=o.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiPaper"}),{className:o,component:l="div",elevation:s=1,square:u=!1,variant:v="elevation"}=r,p=(0,a.Z)(r,m),c=(0,n.Z)({},r,{component:l,elevation:s,square:u,variant:v}),h=g(c);return(0,f.jsx)(Z,(0,n.Z)({as:l,ownerState:c,className:(0,i.Z)(h.root,o),ref:t},p))});var y=x},4240:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var a=r(6750),n=r(431),o=r(6006),i=r(9791),l=r(6601),s=r(7562),u=r(5457),v=r(8006),d=r(8473),p=r(8539),c=r(3809);function h(e){return(0,c.Z)("MuiTypography",e)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=r(9268);let m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=e=>{let{align:t,gutterBottom:r,noWrap:a,paragraph:n,variant:o,classes:i}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,r&&"gutterBottom",a&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,h,i)},Z=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,d.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=e=>y[e]||e,w=o.forwardRef(function(e,t){let r=(0,v.Z)({props:e,name:"MuiTypography"}),o=b(r.color),s=(0,l.Z)((0,n.Z)({},r,{color:o})),{align:u="inherit",className:d,component:p,gutterBottom:c=!1,noWrap:h=!1,paragraph:y=!1,variant:w="body1",variantMapping:M=x}=s,N=(0,a.Z)(s,m),R=(0,n.Z)({},s,{align:u,color:o,className:d,component:p,gutterBottom:c,noWrap:h,paragraph:y,variant:w,variantMapping:M}),B=p||(y?"p":M[w]||x[w])||"span",C=g(R);return(0,f.jsx)(Z,(0,n.Z)({as:B,ref:t,ownerState:R,className:(0,i.Z)(C.root,d)},N))});var M=w},6038:function(e,t,r){Promise.resolve().then(r.bind(r,4062))},4062:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var a=r(9268),n=r(7807),o=r(1771),i=r(4240),l=r(7095),s=r(6006);function u(){let[e,t]=(0,s.useState)(3),r=(0,s.useRef)(null);function u(e){e.forEach(e=>{e.isIntersecting&&t(e=>e+1)})}return(0,s.useEffect)(()=>{let e=new IntersectionObserver(u,{root:null,threshold:[.5]});return r.current&&e.observe(r.current),()=>e.disconnect()},[e]),(0,a.jsx)(n.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"},maxWidth:"lg",className:"pt-20 lg:pt-5",children:(0,a.jsxs)(o.Z,{className:"lg:ml-72",children:[(0,a.jsx)(i.Z,{variant:"h1",textAlign:"center",sx:{fontSize:24,mb:3},children:"Keep scrolling down..."}),Array.from({length:e}).map((e,t)=>(0,a.jsx)(l.Z,{sx:{minWidth:375,minHeight:400,marginBottom:2},ref:r},t))]})})}}},function(e){e.O(0,[794,253,769,744],function(){return e(e.s=6038)}),_N_E=e.O()}]);