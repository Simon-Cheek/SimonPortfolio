import{j as o,a as e,r as f,F as v,c as a,B as k,b as l}from"./index-D4WvN2Fu.js";import{e as L,S as h,P as y,d as w,H as T}from"./Separator-BpxQjtFl.js";const z=(t,i)=>{if(t.title&&t.title.toLowerCase().includes(i.toLowerCase()))return!0;if(t.sideText&&t.sideText.length>0){for(const r of t.sideText)if(r.toLowerCase().includes(i.toLowerCase()))return!0}if(t.searchTerms&&t.searchTerms.length>0){for(const r of t.searchTerms)if(r.toLowerCase().includes(i.toLowerCase()))return!0}return!1};var j={name:"1576cpi",styles:"margin-top:0.25em;padding:0.2em 0.75em;border-radius:12px"},_={name:"1rawn5e",styles:"font-size:0.8em"},F={name:"1up2eq1",styles:"display:flex;justify-content:space-between;@media (max-width: 767px){flex-direction:column;margin-bottom:1em;}"};function g({title:t,desc:i,sideText:r,inviteLink:n,buttonText:c}){const d=a("background-color:",l.brown00,";display:flex;flex-direction:column;padding:1em;border-radius:12px;box-shadow:2.5px 2.5px 4px rgba(0, 0, 0, 0.15);margin:1em 0;width:100%;@media (max-width: 767px){}",""),p=a("color:",l.brown09,";font-weight:600;font-size:1.2em;",""),m=a("font-size:0.85em;display:block;margin-right:1.5em;margin-top:-0.6em;",!n&&"max-width: 80%;","@media (max-width: 767px){margin-bottom:0.5em;transform:translateY(0);}",""),x=a("white-space:nowrap;color:",l.blue09,";margin-bottom:2px;text-align:right;@media (max-width: 767px){text-align:left;}",""),s=F,S=a("display:flex;justify-content:space-between;align-items:end;",r&&r.length>2&&i.length>350&&"margin-top: -0.5em;","@media (max-width: 767px){transform:translateY(0);flex-direction:column;align-items:start;}",""),b=_,C=j;return o("div",{css:d,children:[o("div",{css:s,children:[e(T,{customCSS:p,children:t}),e("div",{style:{paddingTop:"4px"},children:r&&r.map(u=>e(w,{customCSS:x,children:u},u))})]}),o("div",{css:S,children:[e(y,{weight:"semibold",customCSS:m,children:i}),n&&e("a",{href:n,children:e(k,{shade:"dark",color:"blue",customCSS:C,customTextCSS:b,children:e("span",{style:{whiteSpace:"nowrap"},children:c})})})]})]})}var H={name:"1vcob1d",styles:"display:flex;justify-content:center;align-items:center"};function B({config:t,buttonText:i}){const r=H,n=a("border-radius:8px;padding:6px;border:1px solid ",l.gray09,";width:300px;background-color:",l.white,";",""),c=a("display:flex;flex-direction:column;align-items:center;height:600px;overflow-y:scroll;padding:1.5em;box-shadow:0 0 5px 3px rgba(0, 0, 0, 0.15);width:90%;max-width:1200px;border-radius:20px;background-color:",l.white,";",""),[d,p]=f.useState(""),m=f.useMemo(()=>t.filter(s=>d?z(s,d):!0),[t,d]);return o(v,{children:[o("div",{css:r,children:[e(y,{children:"Search"}),e(h,{size:"xs",direction:"vertical"}),e("input",{onChange:s=>{p(s.target.value)},value:d||"",css:n})]}),e(h,{size:"lg"}),o("div",{css:c,children:[e(w,{children:"Scroll to see more"}),e(h,{size:"xs"}),m.length>0?m.map(s=>e(g,{title:s.title,desc:s.desc,sideText:s.sideText,inviteLink:s.inviteLink,buttonText:i},s.title)):e(g,{desc:"Nothing matches your search!"})]})]})}var P={name:"oyhiik",styles:"display:flex;flex-direction:column;align-items:center;padding:2em 0"};function E({config:t,header:i,buttonText:r}){const n=a("color:",l.blue08,";font-style:italic;font-weight:600;font-size:1.75em;","");return o("div",{css:P,children:[e(L,{customCSS:n,children:i}),e(h,{size:"lg"}),e(B,{config:t,buttonText:r})]})}export{E as F};