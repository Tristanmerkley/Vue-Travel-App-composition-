import{r,o as a,c as u,a as e,t as c,b as l,w as i,u as _,d as m}from"./index-0cf353d5.js";const d=e("button",null,"Invoices",-1),k={__name:"Protected",setup(p){const o=r(window.user),t=_(),n=()=>{window.user=null,t.push({name:"home"})};return(h,w)=>{const s=m("router-link");return a(),u("div",null,[e("h1",null,"Greetings, "+c(o.value),1),e("button",{onClick:n},"Logout"),l(s,{to:{name:"invoices"}},{default:i(()=>[d]),_:1})])}}};export{k as default};
