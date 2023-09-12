(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{7095:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var a=r(431),o=r(6750),n=r(6006),i=r(9791),l=r(7562),s=r(5457),v=r(8006),u=r(5991),p=r(8539),d=r(3809);function h(e){return(0,d.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var c=r(9268);let g=["className","raised"],f=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},h,t)},m=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=n.forwardRef(function(e,t){let r=(0,v.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=r,s=(0,o.Z)(r,g),u=(0,a.Z)({},r,{raised:l}),p=f(u);return(0,c.jsx)(m,(0,a.Z)({className:(0,i.Z)(p.root,n),elevation:l?8:void 0,ref:t,ownerState:u},s))});var y=Z},5991:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var a=r(6750),o=r(431),n=r(6006),i=r(9791),l=r(7562),s=r(3343),v=r(5457),u=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),p=r(8006),d=r(8539),h=r(3809);function c(e){return(0,h.Z)("MuiPaper",e)}(0,d.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=r(9268);let f=["className","component","elevation","square","variant"],m=e=>{let{square:t,elevation:r,variant:a,classes:o}=e,n={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${r}`]};return(0,l.Z)(n,c,o)},Z=(0,v.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return(0,o.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,o.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",u(t.elevation))}, ${(0,s.Fq)("#fff",u(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))}),y=n.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiPaper"}),{className:n,component:l="div",elevation:s=1,square:v=!1,variant:u="elevation"}=r,d=(0,a.Z)(r,f),h=(0,o.Z)({},r,{component:l,elevation:s,square:v,variant:u}),c=m(h);return(0,g.jsx)(Z,(0,o.Z)({as:l,ownerState:h,className:(0,i.Z)(c.root,n),ref:t},d))});var x=y},4240:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var a=r(6750),o=r(431),n=r(6006),i=r(9791),l=r(6601),s=r(7562),v=r(5457),u=r(8006),p=r(8473),d=r(8539),h=r(3809);function c(e){return(0,h.Z)("MuiTypography",e)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(9268);let f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=e=>{let{align:t,gutterBottom:r,noWrap:a,paragraph:o,variant:n,classes:i}=e,l={root:["root",n,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,r&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,c,i)},Z=(0,v.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,p.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=e=>x[e]||e,w=n.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiTypography"}),n=b(r.color),s=(0,l.Z)((0,o.Z)({},r,{color:n})),{align:v="inherit",className:p,component:d,gutterBottom:h=!1,noWrap:c=!1,paragraph:x=!1,variant:w="body1",variantMapping:M=y}=s,S=(0,a.Z)(s,f),R=(0,o.Z)({},s,{align:v,color:n,className:p,component:d,gutterBottom:h,noWrap:c,paragraph:x,variant:w,variantMapping:M}),k=d||(x?"p":M[w]||y[w])||"span",C=m(R);return(0,g.jsx)(Z,(0,o.Z)({as:k,ref:t,ownerState:R,className:(0,i.Z)(C.root,p)},S))});var M=w},3566:function(e,t,r){Promise.resolve().then(r.bind(r,299))},299:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var a=r(9268),o=r(7807),n=r(1771),i=r(7095),l=r(4240),s=r(6006);function v(){let[e,t]=(0,s.useState)(0);return(0,a.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",overflow:"scroll",height:"100vh"},onScroll:e=>t(e.currentTarget.scrollTop),children:(0,a.jsxs)(n.Z,{className:"lg:ml-72 pt-24",sx:{minHeight:"200vh"},children:[(0,a.jsx)(i.Z,{sx:{marginTop:e>256?Math.floor(e/8):32,marginBottom:2,padding:8}}),(0,a.jsx)(l.Z,{align:"center",children:"Scroll down to see the card stick."}),(0,a.jsx)(l.Z,{align:"center",sx:{fontSize:12},children:"This behavior was done with JS rather than CSS."})]})})}}},function(e){e.O(0,[586,253,769,744],function(){return e(e.s=3566)}),_N_E=e.O()}]);