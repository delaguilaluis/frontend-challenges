(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{9743:function(e,n,i){Promise.resolve().then(i.bind(i,5534))},5534:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return x}});var t=i(9268),r=i(7807),a=i(7095),s=i(8235),c=i(4066),l=i(3450),o=i(7931),u=i(6006),m=i(7455),d=i(2469);function g(e){let{isBig:n,isPopping:i,...r}=e,a=(0,d.q_)({from:{opacity:1,transform:"scale(".concat(n?1.2:1,")")},to:{opacity:i?0:1,transform:"scale(".concat(n?1:1.2,")")}});return(0,t.jsx)(d.q.div,{style:a,children:(0,t.jsx)(m.Z,{...r})})}function x(){let[e,n]=(0,u.useState)(5),[i,m]=(0,u.useState)(1),[d,x]=(0,u.useState)([]);return(0,t.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"},maxWidth:"lg",children:(0,t.jsx)(a.Z,{sx:{maxWidth:392,maxHeight:400},children:(0,t.jsx)(s.Z,{children:(0,t.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,t.jsx)(c.ZP,{item:!0,xs:7,children:(0,t.jsx)(l.Z,{id:"timer-input",label:"Enter boiling timer",variant:"standard",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},onChange:e=>{n(Number.parseInt(e.target.value,10))},value:e||0})}),(0,t.jsx)(c.ZP,{item:!0,container:!0,xs:5,alignItems:"center",children:(0,t.jsx)(o.Z,{variant:"contained",onClick:function(){if(!e)return;x([...d,{id:i,remaining:e,isBig:!1}]);let n=setInterval(()=>{x(e=>e.map(e=>e.id!==i?e:{...e,remaining:e.remaining-1}).filter(e=>e.id!==i||e.remaining>=0))},1e3),t=setInterval(()=>{x(e=>e.map(e=>e.id!==i?e:{...e,isBig:!e.isBig}))},500);setTimeout(()=>{clearInterval(n),clearInterval(t)},(e+2)*1e3),m(i+1)},children:"Start boiling"})}),d.map((e,n)=>(0,t.jsx)(c.ZP,{item:!0,xs:2,children:(0,t.jsx)(g,{sx:{bgcolor:"#fd9545",fontWeight:"bold"},isBig:e.isBig,isPopping:0===e.remaining,children:0===e.remaining?"1":e.remaining.toString()})},n))]})})})})}}},function(e){e.O(0,[369,4,204,253,769,744],function(){return e(e.s=9743)}),_N_E=e.O()}]);