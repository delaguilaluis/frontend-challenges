(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{4240:function(t,r,e){"use strict";e.d(r,{Z:function(){return W}});var n=e(6750),a=e(431),i=e(6006),o=e(9791),h=e(6601),l=e(7562),p=e(5457),u=e(8006),s=e(8473),g=e(8539),c=e(3809);function f(t){return(0,c.Z)("MuiTypography",t)}(0,g.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=e(9268);let y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],d=t=>{let{align:r,gutterBottom:e,noWrap:n,paragraph:a,variant:i,classes:o}=t,h={root:["root",i,"inherit"!==t.align&&`align${(0,s.Z)(r)}`,e&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,l.Z)(h,f,o)},v=(0,p.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{let{ownerState:e}=t;return[r.root,e.variant&&r[e.variant],"inherit"!==e.align&&r[`align${(0,s.Z)(e.align)}`],e.noWrap&&r.noWrap,e.gutterBottom&&r.gutterBottom,e.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>(0,a.Z)({margin:0},r.variant&&t.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=t=>b[t]||t,w=i.forwardRef(function(t,r){let e=(0,u.Z)({props:t,name:"MuiTypography"}),i=x(e.color),l=(0,h.Z)((0,a.Z)({},e,{color:i})),{align:p="inherit",className:s,component:g,gutterBottom:c=!1,noWrap:f=!1,paragraph:b=!1,variant:w="body1",variantMapping:W=Z}=l,B=(0,n.Z)(l,y),S=(0,a.Z)({},l,{align:p,color:i,className:s,component:g,gutterBottom:c,noWrap:f,paragraph:b,variant:w,variantMapping:W}),_=g||(b?"p":W[w]||Z[w])||"span",k=d(S);return(0,m.jsx)(v,(0,a.Z)({as:_,ref:r,ownerState:S,className:(0,o.Z)(k.root,s)},B))});var W=w},461:function(t,r,e){Promise.resolve().then(e.bind(e,5636))},5636:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return h}});var n=e(9268),a=e(7807),i=e(4240),o=e(6006);function h(){let t="We can help you with",[r,e]=(0,o.useState)(t),[h,l]=(0,o.useState)(0),[p,u]=(0,o.useState)(0),[s,g]=(0,o.useState)(!1),c=["design","frontend","backend","testing"];return(0,o.useEffect)(()=>{let r=setInterval(()=>{if(s){g(!1);return}let r=c[h].substring(0,p),n=p%2==0?"":"|";e("".concat(t," ").concat(r," ").concat(n)),u(p+1),p===c[h].length&&(l((h+1)%c.length),u(0),g(!0))},150);return()=>clearInterval(r)}),(0,n.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},maxWidth:"lg",children:(0,n.jsx)(i.Z,{variant:"h1",sx:{fontWeight:"bold",fontSize:36},children:r})})}}},function(t){t.O(0,[794,253,769,744],function(){return t(t.s=461)}),_N_E=t.O()}]);