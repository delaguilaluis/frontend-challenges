(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{7095:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var o=r(431),n=r(6750),a=r(6006),i=r(9791),l=r(7562),s=r(5457),d=r(8006),u=r(5991),v=r(8539),c=r(3809);function p(e){return(0,c.Z)("MuiCard",e)}(0,v.Z)("MuiCard",["root"]);var m=r(9268);let f=["className","raised"],h=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},p,t)},Z=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),g=a.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCard"}),{className:a,raised:l=!1}=r,s=(0,n.Z)(r,f),u=(0,o.Z)({},r,{raised:l}),v=h(u);return(0,m.jsx)(Z,(0,o.Z)({className:(0,i.Z)(v.root,a),elevation:l?8:void 0,ref:t,ownerState:u},s))});var x=g},8235:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var o=r(431),n=r(6750),a=r(6006),i=r(9791),l=r(7562),s=r(5457),d=r(8006),u=r(8539),v=r(3809);function c(e){return(0,v.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var p=r(9268);let m=["className","component"],f=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},c,t)},h=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Z=a.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:a,component:l="div"}=r,s=(0,n.Z)(r,m),u=(0,o.Z)({},r,{component:l}),v=f(u);return(0,p.jsx)(h,(0,o.Z)({as:l,className:(0,i.Z)(v.root,a),ownerState:u,ref:t},s))});var g=Z},5991:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var o=r(6750),n=r(431),a=r(6006),i=r(9791),l=r(7562),s=r(3343),d=r(5457),u=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),v=r(8006),c=r(8539),p=r(3809);function m(e){return(0,p.Z)("MuiPaper",e)}(0,c.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=r(9268);let h=["className","component","elevation","square","variant"],Z=e=>{let{square:t,elevation:r,variant:o,classes:n}=e,a={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${r}`]};return(0,l.Z)(a,m,n)},g=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return(0,n.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,n.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",u(t.elevation))}, ${(0,s.Fq)("#fff",u(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))}),x=a.forwardRef(function(e,t){let r=(0,v.Z)({props:e,name:"MuiPaper"}),{className:a,component:l="div",elevation:s=1,square:d=!1,variant:u="elevation"}=r,c=(0,o.Z)(r,h),p=(0,n.Z)({},r,{component:l,elevation:s,square:d,variant:u}),m=Z(p);return(0,f.jsx)(g,(0,n.Z)({as:l,ownerState:p,className:(0,i.Z)(m.root,a),ref:t},c))});var y=x},4240:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var o=r(6750),n=r(431),a=r(6006),i=r(9791),l=r(6601),s=r(7562),d=r(5457),u=r(8006),v=r(8473),c=r(8539),p=r(3809);function m(e){return(0,p.Z)("MuiTypography",e)}(0,c.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=r(9268);let h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Z=e=>{let{align:t,gutterBottom:r,noWrap:o,paragraph:n,variant:a,classes:i}=e,l={root:["root",a,"inherit"!==e.align&&`align${(0,v.Z)(t)}`,r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,m,i)},g=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,v.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=e=>y[e]||e,M=a.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiTypography"}),a=b(r.color),s=(0,l.Z)((0,n.Z)({},r,{color:a})),{align:d="inherit",className:v,component:c,gutterBottom:p=!1,noWrap:m=!1,paragraph:y=!1,variant:M="body1",variantMapping:C=x}=s,R=(0,o.Z)(s,h),w=(0,n.Z)({},s,{align:d,color:a,className:v,component:c,gutterBottom:p,noWrap:m,paragraph:y,variant:M,variantMapping:C}),P=c||(y?"p":C[M]||x[M])||"span",j=Z(w);return(0,f.jsx)(g,(0,n.Z)({as:P,ref:t,ownerState:w,className:(0,i.Z)(j.root,v)},R))});var C=M},6601:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var o=r(431),n=r(6750),a=r(5135),i=r(2272);let l=["sx"],s=e=>{var t,r;let o={systemProps:{},otherProps:{}},n=null!=(t=null==e?void 0:null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach(t=>{n[t]?o.systemProps[t]=e[t]:o.otherProps[t]=e[t]}),o};function d(e){let t;let{sx:r}=e,i=(0,n.Z)(e,l),{systemProps:d,otherProps:u}=s(i);return t=Array.isArray(r)?[d,...r]:"function"==typeof r?(...e)=>{let t=r(...e);return(0,a.P)(t)?(0,o.Z)({},d,t):d}:(0,o.Z)({},d,r),(0,o.Z)({},u,{sx:t})}},2407:function(e,t,r){Promise.resolve().then(r.bind(r,3256))},3256:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return $}});var o=r(9268),n=r(6006),a=r(7807),i=r(4240),l=r(431),s=r(6750),d=r(9791),u=r(4323),v=r(1579),c=r(6601),p=r(5887);let m=["className","component"];var f=r(7327),h=r(2516),Z=r(6356);let g=(0,h.Z)(),x=function(e={}){let{themeId:t,defaultTheme:r,defaultClassName:a="MuiBox-root",generateClassName:i}=e,f=(0,u.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(v.Z),h=n.forwardRef(function(e,n){let u=(0,p.Z)(r),v=(0,c.Z)(e),{className:h,component:Z="div"}=v,g=(0,s.Z)(v,m);return(0,o.jsx)(f,(0,l.Z)({as:Z,ref:n,className:(0,d.Z)(h,i?i(a):a),theme:t&&u[t]||u},g))});return h}({themeId:Z.Z,defaultTheme:g,defaultClassName:"MuiBox-root",generateClassName:f.Z.generate});var y=r(7095),b=r(8235),M=r(7562),C=r(8006),R=r(5457),w=r(8539),P=r(3809);function j(e){return(0,P.Z)("MuiCardMedia",e)}(0,w.Z)("MuiCardMedia",["root","media","img"]);let k=["children","className","component","image","src","style"],N=e=>{let{classes:t,isMediaComponent:r,isImageComponent:o}=e;return(0,M.Z)({root:["root",r&&"media",o&&"img"]},j,t)},S=(0,R.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{isMediaComponent:o,isImageComponent:n}=r;return[t.root,o&&t.media,n&&t.img]}})(({ownerState:e})=>(0,l.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),B=["video","audio","picture","iframe","img"],W=["picture","img"],I=n.forwardRef(function(e,t){let r=(0,C.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:a,component:i="div",image:u,src:v,style:c}=r,p=(0,s.Z)(r,k),m=-1!==B.indexOf(i),f=!m&&u?(0,l.Z)({backgroundImage:`url("${u}")`},c):c,h=(0,l.Z)({},r,{component:i,isMediaComponent:m,isImageComponent:-1!==W.indexOf(i)}),Z=N(h);return(0,o.jsx)(S,(0,l.Z)({className:(0,d.Z)(Z.root,a),as:i,role:!m&&u?"img":void 0,ref:t,style:f,ownerState:h,src:m?u||v:void 0},p,{children:n}))});function $(){return(0,o.jsx)(a.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"},maxWidth:"lg",children:(0,o.jsx)(x,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,o.jsx)(y.Z,{sx:{minWidth:275,maxWidth:375,borderRadius:3,mb:2},children:(0,o.jsxs)(b.Z,{children:[(0,o.jsx)(I,{sx:{borderRadius:3},component:"img",image:"image-qr-code.png",alt:"QR code to frontendMentor.io"}),(0,o.jsx)(i.Z,{sx:{my:3,paddingX:2,fontSize:24,fontWeight:700},variant:"h1",component:"h1",align:"center",children:"Improve your front-end skills by building projects"}),(0,o.jsx)(i.Z,{sx:{mb:1.5,paddingX:4,fontSize:15,fontWeight:400,lineHeight:1},color:"text.secondary",align:"center",children:"Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"})]})})})})}}},function(e){e.O(0,[369,253,769,744],function(){return e(e.s=2407)}),_N_E=e.O()}]);