import{ax as m,x as o,ap as l,aj as i,aF as d,a2 as h}from"../.pnpm/.pnpm.CNWdlwhF.js";import{s as V}from"../use/use.vltj-xWI.js";import{_ as k}from"../Icon.vue_vue_type_script_lang/Icon.vue_vue_type_script_lang.DVsbjDod.js";import{D as u,E as r}from"../index-z4oZt0PI.js";import{E as g,a as y}from"../index/index.BVY5SEfG.js";import"../index/index.Cl3gLZpv.js";import"../index/index.Cw13HvQA.js";import"../strings/strings.BKv9SlKM.js";function E(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!h(t)}const v=()=>{const t=m([{dictLabel:"男",dictValue:"male"},{dictLabel:"女",dictValue:"female"}]),s=[{userId:"123456",username:"admin",nickname:"admin",sex:"male",phone:"(726) 939-7839 x022",email:"Maida6@hotmail.com",edit:!1},{userId:"a0bdf4cc-0441-4908-88b4-6ab391375d80",username:"Litzy.Rath48",nickname:"Dewey Carroll",sex:"male",phone:"689.716.7451 x200",email:"Katarina.Klocko78@gmail.com",edit:!1,single:!1},{userId:"6eb627ff-c4a3-454d-b0f5-5ff2f10c8ab8",username:"Tressa.Morissette49",nickname:"Terrance Torp",sex:"male",phone:"1-535-860-7469",email:"Andreanne.McLaughlin4@hotmail.com",edit:!1}],p=m({data:o.clone(s,!0),columns:[{type:"index",label:"序号",width:"55"},{prop:"username",label:"用户名",overflowConfig:{initiate:!0},renderer:({row:e})=>l(i,null,[e.edit?l(u,{modelValue:e.username,"onUpdate:modelValue":a=>e.username=a},null):l("span",null,[e.username])])},{prop:"nickname",label:"昵称",renderer:({row:e})=>l("span",{class:"flex items-center w-full"},[l("span",{class:"flex-1 mr-1"},[e.edit||e.single?l(u,{modelValue:e.nickname,"onUpdate:modelValue":a=>e.nickname=a},null):l("span",null,[e.nickname])]),l("span",{onClick:()=>x(e)},[l(k,{class:"cursor-pointer hover:text-primary",name:"ep:edit",size:16},null)])])},{prop:"sex",label:"性别",renderer:({row:e})=>{let a;return l(i,null,[e.edit?l(g,{modelValue:e.sex,"onUpdate:modelValue":n=>e.sex=n},E(a=t.map(n=>l(y,{key:n.dictValue,label:n.dictLabel,value:n.dictValue},null)))?a:{default:()=>[a]}):l("span",null,[V(t,e.sex)])])}},{prop:"phone",label:"手机号",renderer:({row:e})=>l(i,null,[e.edit?l(u,{modelValue:e.phone,"onUpdate:modelValue":a=>e.phone=a},null):l("span",null,[e.phone])])},{prop:"email",label:"邮箱",renderer:({row:e})=>l(i,null,[e.edit?l(u,{modelValue:e.email,"onUpdate:modelValue":a=>e.email=a},null):l("span",null,[e.email])])},{prop:"operation",label:"操作",renderer:({row:e})=>l(i,null,[e.edit?l(i,null,[l(r,{type:"primary",link:!0,onClick:()=>c(e)},{default:()=>[d("保存")]}),l(r,{type:"primary",link:!0,onClick:()=>f(e)},{default:()=>[d("取消")]})]):l(r,{type:"primary",link:!0,onClick:()=>b(e)},{default:()=>[d("修改")]})])}]}),c=e=>{const a=s.findIndex(n=>n.userId===e.userId);a>-1&&(s[a]=Object.assign(s[a],o.clone(e,!0))),e.edit=!1},f=e=>{const a=s.find(n=>n.userId===e.userId);a&&(e=Object.assign(e,a)),e.edit=!1},b=e=>{e.edit=!0},x=e=>{e.single=!e.single};return{columnProp:p}};export{v as useSingleEdit};
