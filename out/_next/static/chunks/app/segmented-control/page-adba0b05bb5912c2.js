(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[296],{4240:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var a=r(6750),o=r(431),i=r(6006),n=r(9791),l=r(6601),s=r(7562),d=r(5457),p=r(8006),c=r(8473),u=r(8539),g=r(3809);function m(e){return(0,g.Z)("MuiTypography",e)}(0,u.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=r(9268);let v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=e=>{let{align:t,gutterBottom:r,noWrap:a,paragraph:o,variant:i,classes:n}=e,l={root:["root",i,"inherit"!==e.align&&`align${(0,c.Z)(t)}`,r&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,m,n)},b=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,c.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=e=>Z[e]||e,$=i.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiTypography"}),i=x(r.color),s=(0,l.Z)((0,o.Z)({},r,{color:i})),{align:d="inherit",className:c,component:u,gutterBottom:g=!1,noWrap:m=!1,paragraph:Z=!1,variant:$="body1",variantMapping:C=y}=s,R=(0,a.Z)(s,v),w=(0,o.Z)({},s,{align:d,color:i,className:c,component:u,gutterBottom:g,noWrap:m,paragraph:Z,variant:$,variantMapping:C}),M=u||(Z?"p":C[$]||y[$])||"span",O=f(w);return(0,h.jsx)(b,(0,o.Z)({as:M,ref:t,ownerState:w,className:(0,n.Z)(O.root,c)},R))});var C=$},8562:function(e,t,r){Promise.resolve().then(r.bind(r,4503))},4503:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Q}});var a=r(9268),o=r(7807),i=r(4240),n=r(3451),l=r(9352),s=r(6750),d=r(431),p=r(6006),c=r.t(p,2),u=r(9791),g=r(7562),m=r(3343),h=r(5457),v=r(8006),f=r(2879),b=r(4858),y=r(6837),Z=r(4414),x=r(8539);let $=(0,x.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),C=(0,x.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),R=(0,x.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var w=r(3809);function M(e){return(0,w.Z)("MuiMenuItem",e)}let O=(0,x.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),T=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],B=e=>{let{disabled:t,dense:r,divider:a,disableGutters:o,selected:i,classes:n}=e,l=(0,g.Z)({root:["root",r&&"dense",t&&"disabled",!o&&"gutters",a&&"divider",i&&"selected"]},M,n);return(0,d.Z)({},n,l)},k=(0,h.ZP)(b.Z,{shouldForwardProp:e=>(0,h.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})(({theme:e,ownerState:t})=>(0,d.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${O.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,m.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${O.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,m.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${O.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,m.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,m.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${O.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${O.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${$.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${$.inset}`]:{marginLeft:52},[`& .${R.root}`]:{marginTop:0,marginBottom:0},[`& .${R.inset}`]:{paddingLeft:36},[`& .${C.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,d.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${C.root} svg`]:{fontSize:"1.25rem"}}))),S=p.forwardRef(function(e,t){let r;let o=(0,v.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:i=!1,component:n="li",dense:l=!1,divider:c=!1,disableGutters:g=!1,focusVisibleClassName:m,role:h="menuitem",tabIndex:b,className:x}=o,$=(0,s.Z)(o,T),C=p.useContext(f.Z),R=p.useMemo(()=>({dense:l||C.dense||!1,disableGutters:g}),[C.dense,l,g]),w=p.useRef(null);(0,y.Z)(()=>{i&&w.current&&w.current.focus()},[i]);let M=(0,d.Z)({},o,{dense:R.dense,divider:c,disableGutters:g}),O=B(o),S=(0,Z.Z)(w,t);return o.disabled||(r=void 0!==b?b:-1),(0,a.jsx)(f.Z.Provider,{value:R,children:(0,a.jsx)(k,(0,d.Z)({ref:S,role:h,tabIndex:r,component:n,focusVisibleClassName:(0,u.Z)(O.focusVisible,m),className:(0,u.Z)(O.root,x)},$,{ownerState:M,classes:O}))})});r(9814);var z=r(8473);function L(e){return(0,w.Z)("MuiToggleButtonGroup",e)}let j=(0,x.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),W=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],I=e=>{let{classes:t,orientation:r,fullWidth:a,disabled:o}=e,i={root:["root","vertical"===r&&"vertical",a&&"fullWidth"],grouped:["grouped",`grouped${(0,z.Z)(r)}`,o&&"disabled"]};return(0,g.Z)(i,L,t)},N=(0,h.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{[`& .${j.grouped}`]:t.grouped},{[`& .${j.grouped}`]:t[`grouped${(0,z.Z)(r.orientation)}`]},t.root,"vertical"===r.orientation&&t.vertical,r.fullWidth&&t.fullWidth]}})(({ownerState:e,theme:t})=>(0,d.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"vertical"===e.orientation&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${j.grouped}`]:(0,d.Z)({},"horizontal"===e.orientation?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${j.selected} + .${j.grouped}.${j.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${j.selected} + .${j.grouped}.${j.selected}`]:{borderTop:0,marginTop:0}})})),F=p.forwardRef(function(e,t){let r=(0,v.Z)({props:e,name:"MuiToggleButtonGroup"}),{children:o,className:i,color:n="standard",disabled:l=!1,exclusive:c=!1,fullWidth:g=!1,onChange:m,orientation:h="horizontal",size:f="medium",value:b}=r,y=(0,s.Z)(r,W),Z=(0,d.Z)({},r,{disabled:l,fullWidth:g,orientation:h,size:f}),x=I(Z),$=(e,t)=>{let r;if(!m)return;let a=b&&b.indexOf(t);b&&a>=0?(r=b.slice()).splice(a,1):r=b?b.concat(t):[t],m(e,r)},C=(e,t)=>{m&&m(e,b===t?null:t)};return(0,a.jsx)(N,(0,d.Z)({role:"group",className:(0,u.Z)(x.root,i),ref:t,ownerState:Z},y,{children:p.Children.map(o,e=>{var t;return p.isValidElement(e)?p.cloneElement(e,{className:(0,u.Z)(x.grouped,e.props.className),onChange:c?C:$,selected:void 0===e.props.selected?(t=e.props.value,void 0!==b&&void 0!==t&&(Array.isArray(b)?b.indexOf(t)>=0:t===b)):e.props.selected,size:e.props.size||f,fullWidth:g,color:e.props.color||n,disabled:e.props.disabled||l}):null})}))});function P(e){return(0,w.Z)("MuiToggleButton",e)}let V=(0,x.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),q=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],G=e=>{let{classes:t,fullWidth:r,selected:a,disabled:o,size:i,color:n}=e,l={root:["root",a&&"selected",o&&"disabled",r&&"fullWidth",`size${(0,z.Z)(i)}`,n]};return(0,g.Z)(l,P,t)},A=(0,h.ZP)(b.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`size${(0,z.Z)(r.size)}`]]}})(({theme:e,ownerState:t})=>{let r,a="standard"===t.color?e.palette.text.primary:e.palette[t.color].main;return e.vars&&(a="standard"===t.color?e.vars.palette.text.primary:e.vars.palette[t.color].main,r="standard"===t.color?e.vars.palette.text.primaryChannel:e.vars.palette[t.color].mainChannel),(0,d.Z)({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},t.fullWidth&&{width:"100%"},{[`&.${V.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,m.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${V.selected}`]:{color:a,backgroundColor:e.vars?`rgba(${r} / ${e.vars.palette.action.selectedOpacity})`:(0,m.Fq)(a,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${r} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,m.Fq)(a,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${r} / ${e.vars.palette.action.selectedOpacity})`:(0,m.Fq)(a,e.palette.action.selectedOpacity)}}}},"small"===t.size&&{padding:7,fontSize:e.typography.pxToRem(13)},"large"===t.size&&{padding:15,fontSize:e.typography.pxToRem(15)})}),D=p.forwardRef(function(e,t){let r=(0,v.Z)({props:e,name:"MuiToggleButton"}),{children:o,className:i,color:n="standard",disabled:l=!1,disableFocusRipple:p=!1,fullWidth:c=!1,onChange:g,onClick:m,selected:h,size:f="medium",value:b}=r,y=(0,s.Z)(r,q),Z=(0,d.Z)({},r,{color:n,disabled:l,disableFocusRipple:p,fullWidth:c,size:f}),x=G(Z);return(0,a.jsx)(A,(0,d.Z)({className:(0,u.Z)(x.root,i),disabled:l,focusRipple:!p,ref:t,onClick:e=>{m&&(m(e,b),e.defaultPrevented)||!g||g(e,b)},onChange:g,value:b,ownerState:Z,"aria-pressed":h},y,{children:o}))});var E=r(5396),_=r(3005);function H(e,t,r,a,o){let[i,n]=p.useState(()=>o&&r?r(e).matches:a?a(e).matches:t);return(0,y.Z)(()=>{let t=!0;if(!r)return;let a=r(e),o=()=>{t&&n(a.matches)};return o(),a.addListener(o),()=>{t=!1,a.removeListener(o)}},[e,r]),i}let U=c.useSyncExternalStore;function J(e,t,r,a,o){let i=p.useCallback(()=>t,[t]),n=p.useMemo(()=>{if(o&&r)return()=>r(e).matches;if(null!==a){let{matches:t}=a(e);return()=>t}return i},[i,e,a,o,r]),[l,s]=p.useMemo(()=>{if(null===r)return[i,()=>()=>{}];let t=r(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[i,r,e]),d=U(s,l,n);return d}function Q(){let[e,t]=(0,p.useState)("price"),r=function(e,t={}){let r=(0,E.Z)(),a="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:o=!1,matchMedia:i=a?window.matchMedia:null,ssrMatchMedia:n=null,noSsr:l=!1}=(0,_.Z)({name:"MuiUseMediaQuery",props:t,theme:r}),s="function"==typeof e?e(r):e;s=s.replace(/^@media( ?)/m,"");let d=(void 0!==U?J:H)(s,o,i,n,l);return d}("(max-width:600px)");return(0,a.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"},maxWidth:"lg",children:[(0,a.jsx)(i.Z,{variant:"h2",sx:{fontSize:20,textAlign:"center",marginBottom:3},children:"This UI changes depending on the screen size"}),r&&(0,a.jsx)(n.Z,{fullWidth:!0,children:(0,a.jsxs)(l.Z,{value:e,onChange:function(e){t(e.target.value)},sx:{backgroundColor:"white"},children:[(0,a.jsx)(S,{value:"price",children:"Sort by price"}),(0,a.jsx)(S,{value:"name",children:"Sort by name"}),(0,a.jsx)(S,{value:"relevance",children:"Sort by relevance"})]})}),!r&&(0,a.jsxs)(F,{exclusive:!0,color:"primary",value:e,onChange:function(e,r){t(r)},"aria-label":"Platform",sx:{backgroundColor:"white"},children:[(0,a.jsx)(D,{value:"price",children:"Sort by price"}),(0,a.jsx)(D,{value:"name",children:"Sort by name"}),(0,a.jsx)(D,{value:"relevance",children:"Sort by relevance"})]})]})}}},function(e){e.O(0,[794,4,253,769,744],function(){return e(e.s=8562)}),_N_E=e.O()}]);