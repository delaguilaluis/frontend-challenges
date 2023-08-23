(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918],{7095:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var a=r(431),o=r(6750),n=r(6006),i=r(9791),l=r(7562),s=r(5457),u=r(8006),v=r(5991),d=r(8539),p=r(3809);function h(e){return(0,p.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var c=r(9268);let g=["className","raised"],f=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},h,t)},m=(0,s.ZP)(v.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=n.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=r,s=(0,o.Z)(r,g),v=(0,a.Z)({},r,{raised:l}),d=f(v);return(0,c.jsx)(m,(0,a.Z)({className:(0,i.Z)(d.root,n),elevation:l?8:void 0,ref:t,ownerState:v},s))});var y=Z},5991:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var a=r(6750),o=r(431),n=r(6006),i=r(9791),l=r(7562),s=r(3343),u=r(5457),v=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),d=r(8006),p=r(8539),h=r(3809);function c(e){return(0,h.Z)("MuiPaper",e)}(0,p.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=r(9268);let f=["className","component","elevation","square","variant"],m=e=>{let{square:t,elevation:r,variant:a,classes:o}=e,n={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${r}`]};return(0,l.Z)(n,c,o)},Z=(0,u.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return(0,o.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,o.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",v(t.elevation))}, ${(0,s.Fq)("#fff",v(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))}),y=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiPaper"}),{className:n,component:l="div",elevation:s=1,square:u=!1,variant:v="elevation"}=r,p=(0,a.Z)(r,f),h=(0,o.Z)({},r,{component:l,elevation:s,square:u,variant:v}),c=m(h);return(0,g.jsx)(Z,(0,o.Z)({as:l,ownerState:h,className:(0,i.Z)(c.root,n),ref:t},p))});var x=y},4240:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var a=r(6750),o=r(431),n=r(6006),i=r(9791),l=r(6601),s=r(7562),u=r(5457),v=r(8006),d=r(8473),p=r(8539),h=r(3809);function c(e){return(0,h.Z)("MuiTypography",e)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(9268);let f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=e=>{let{align:t,gutterBottom:r,noWrap:a,paragraph:o,variant:n,classes:i}=e,l={root:["root",n,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,r&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,c,i)},Z=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,d.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=e=>x[e]||e,w=n.forwardRef(function(e,t){let r=(0,v.Z)({props:e,name:"MuiTypography"}),n=b(r.color),s=(0,l.Z)((0,o.Z)({},r,{color:n})),{align:u="inherit",className:d,component:p,gutterBottom:h=!1,noWrap:c=!1,paragraph:x=!1,variant:w="body1",variantMapping:M=y}=s,R=(0,a.Z)(s,f),S=(0,o.Z)({},s,{align:u,color:n,className:d,component:p,gutterBottom:h,noWrap:c,paragraph:x,variant:w,variantMapping:M}),k=p||(x?"p":M[w]||y[w])||"span",C=m(S);return(0,g.jsx)(Z,(0,o.Z)({as:k,ref:t,ownerState:S,className:(0,i.Z)(C.root,d)},R))});var M=w},6e3:function(e,t,r){Promise.resolve().then(r.bind(r,1032))},1032:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var a=r(9268),o=r(7807),n=r(1771),i=r(7095),l=r(4240),s=r(6006);function u(){let[e,t]=(0,s.useState)(0),[r,u]=(0,s.useState)(0);(0,s.useEffect)(()=>{t(window.innerWidth/2),u(window.innerHeight/2)},[]);let[v,d]=(0,s.useState)(e),[p,h]=(0,s.useState)(r),c=Math.floor((v-e)*.03),g=-1*Math.floor((p-r)*.03);return(0,a.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},onMouseMove:e=>{d(e.nativeEvent.pageX),h(e.nativeEvent.pageY)},children:(0,a.jsxs)(n.Z,{sx:{width:240,height:240,perspective:"1000px"},children:[(0,a.jsx)(i.Z,{sx:{width:"100%",height:"100%",transform:"rotateY(".concat(c,"deg) rotateX(").concat(g,"deg)")}}),(0,a.jsx)(l.Z,{variant:"h1",textAlign:"center",sx:{fontSize:24,mt:3},children:"Move the cursor around the square"})]})})}}},function(e){e.O(0,[586,253,769,744],function(){return e(e.s=6e3)}),_N_E=e.O()}]);