(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1771:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(431),o=r(6750),i=r(6006),a=r(9791),u=r(4323),l=r(1579),s=r(6601),c=r(5887),d=r(9268);let h=["className","component"];var p=r(7327),f=r(2516),m=r(6356);let y=(0,f.Z)(),Z=function(e={}){let{themeId:t,defaultTheme:r,defaultClassName:p="MuiBox-root",generateClassName:f}=e,m=(0,u.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z),y=i.forwardRef(function(e,i){let u=(0,c.Z)(r),l=(0,s.Z)(e),{className:y,component:Z="div"}=l,v=(0,o.Z)(l,h);return(0,d.jsx)(m,(0,n.Z)({as:Z,ref:i,className:(0,a.Z)(y,f?f(p):p),theme:t&&u[t]||u},v))});return y}({themeId:m.Z,defaultTheme:y,defaultClassName:"MuiBox-root",generateClassName:p.Z.generate});var v=Z},4240:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(6750),o=r(431),i=r(6006),a=r(9791),u=r(6601),l=r(7562),s=r(5457),c=r(8006),d=r(8473),h=r(8539),p=r(3809);function f(e){return(0,p.Z)("MuiTypography",e)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(9268);let y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Z=e=>{let{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:i,classes:a}=e,u={root:["root",i,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,l.Z)(u,f,a)},v=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,d.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=e=>x[e]||e,w=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiTypography"}),i=b(r.color),l=(0,u.Z)((0,o.Z)({},r,{color:i})),{align:s="inherit",className:d,component:h,gutterBottom:p=!1,noWrap:f=!1,paragraph:x=!1,variant:w="body1",variantMapping:k=g}=l,C=(0,n.Z)(l,y),B=(0,o.Z)({},l,{align:s,color:i,className:d,component:h,gutterBottom:p,noWrap:f,paragraph:x,variant:w,variantMapping:k}),M=h||(x?"p":k[w]||g[w])||"span",N=Z(B);return(0,m.jsx)(v,(0,o.Z)({as:M,ref:t,ownerState:B,className:(0,a.Z)(N.root,d)},C))});var k=w},4414:function(e,t,r){"use strict";var n=r(4815);t.Z=n.Z},7088:function(e,t,r){"use strict";let n;r.d(t,{Z:function(){return d}});var o=r(6006);let i=!0,a=!1,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function s(){i=!1}function c(){"hidden"===this.visibilityState&&a&&(i=!0)}var d=function(){let e=o.useCallback(e=>{if(null!=e){var t;(t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",s,!0),t.addEventListener("pointerdown",s,!0),t.addEventListener("touchstart",s,!0),t.addEventListener("visibilitychange",c,!0)}},[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return i||function(e){let{type:t,tagName:r}=e;return"INPUT"===r&&!!u[t]&&!e.readOnly||"TEXTAREA"===r&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(a=!0,window.clearTimeout(n),n=window.setTimeout(()=>{a=!1},100),t.current=!1,!0)},ref:e}}},6601:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(431),o=r(6750),i=r(5135),a=r(2272);let u=["sx"],l=e=>{var t,r;let n={systemProps:{},otherProps:{}},o=null!=(t=null==e?void 0:null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:a.Z;return Object.keys(e).forEach(t=>{o[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]}),n};function s(e){let t;let{sx:r}=e,a=(0,o.Z)(e,u),{systemProps:s,otherProps:c}=l(a);return t=Array.isArray(r)?[s,...r]:"function"==typeof r?(...e)=>{let t=r(...e);return(0,i.P)(t)?(0,n.Z)({},s,t):s}:(0,n.Z)({},s,r),(0,n.Z)({},c,{sx:t})}},5464:function(e,t,r){"use strict";function n(e,t){"function"==typeof e?e(t):e&&(e.current=t)}r.d(t,{Z:function(){return n}})},4815:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(6006),o=r(5464);function i(...e){return n.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{(0,o.Z)(e,t)})},e)}},6273:function(e,t,r){Promise.resolve().then(r.bind(r,8613))},8613:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(9268),o=r(7807),i=r(1771),a=r(4240),u=r(6750),l=r(431),s=r(6006),c=r(9791),d=r(7562),h=r(8473),p=r(5457),f=r(8006),m=r(7088),y=r(4414),Z=r(8539),v=r(3809);function g(e){return(0,v.Z)("MuiLink",e)}let x=(0,Z.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var b=r(1258),w=r(3343);let k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=e=>k[e]||e;var B=({theme:e,ownerState:t})=>{let r=C(t.color),n=(0,b.DW)(e,`palette.${r}`,!1)||t.color,o=(0,b.DW)(e,`palette.${r}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,w.Fq)(n,.4)};let M=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],N=e=>{let{classes:t,component:r,focusVisible:n,underline:o}=e,i={root:["root",`underline${(0,h.Z)(o)}`,"button"===r&&"button",n&&"focusVisible"]};return(0,d.Z)(i,g,t)},P=(0,p.ZP)(a.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`underline${(0,h.Z)(r.underline)}`],"button"===r.component&&t.button]}})(({theme:e,ownerState:t})=>(0,l.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,l.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:B({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x.focusVisible}`]:{outline:"auto"}})),j=s.forwardRef(function(e,t){let r=(0,f.Z)({props:e,name:"MuiLink"}),{className:o,color:i="primary",component:a="a",onBlur:d,onFocus:h,TypographyClasses:p,underline:Z="always",variant:v="inherit",sx:g}=r,x=(0,u.Z)(r,M),{isFocusVisibleRef:b,onBlur:w,onFocus:C,ref:B}=(0,m.Z)(),[j,E]=s.useState(!1),A=(0,y.Z)(t,B),T=(0,l.Z)({},r,{color:i,component:a,focusVisible:j,underline:Z,variant:v}),R=N(T);return(0,n.jsx)(P,(0,l.Z)({color:i,className:(0,c.Z)(R.root,o),classes:p,component:a,onBlur:e=>{w(e),!1===b.current&&E(!1),d&&d(e)},onFocus:e=>{C(e),!0===b.current&&E(!0),h&&h(e)},ref:A,ownerState:T,variant:v,sx:[...Object.keys(k).includes(i)?[]:[{color:i}],...Array.isArray(g)?g:[g]]},x))});function E(){return(0,n.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},maxWidth:"lg",children:(0,n.jsx)(i.Z,{className:"lg:ml-72",children:(0,n.jsxs)(a.Z,{variant:"h1",sx:{fontSize:24,textAlign:"center"},children:["These are solutions to Front-end Challenges from"," ",(0,n.jsx)(j,{underline:"hover",color:"#666666",href:"https://frontendmentor.io",children:"FrontendMentor.io"})," ","and"," ",(0,n.jsx)(j,{underline:"hover",color:"#666666",href:"https://frontloops.io",children:"Frontloops.io"}),".",(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{}),"Please select one from the menu to get started."]})})})}}},function(e){e.O(0,[369,253,769,744],function(){return e(e.s=6273)}),_N_E=e.O()}]);