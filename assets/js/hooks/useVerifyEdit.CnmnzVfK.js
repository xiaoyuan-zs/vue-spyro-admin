import{ax as c,ap as a,aF as u,aj as s,x as V,K as h,a2 as x}from"../.pnpm/.pnpm.CNWdlwhF.js";import{D as i,E as b}from"../index-z4oZt0PI.js";import{E as p}from"../index/index.eYyC-X9y.js";import{E as y,a as E}from"../index/index.BVY5SEfG.js";import"../index/index.Cl3gLZpv.js";import"../index/index.Cw13HvQA.js";import"../strings/strings.BKv9SlKM.js";function k(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!x(o)}const C=()=>{const o=c([{dictLabel:"男",dictValue:"male"},{dictLabel:"女",dictValue:"female"}]),f={username:"",nickname:"",sex:"male",phone:"",email:""},n=c({columns:[{type:"index",label:"序号",width:"55"},{prop:"username",label:"用户名",overflowConfig:{initiate:!0},headerRenderer:({column:e})=>a(s,null,[a("span",{class:"text-red"},[u("*")]),a("span",null,[e.label])]),renderer:({row:e,$index:r,column:t})=>a(p,{prop:`data[${r}][${t.property}]`,rules:[{required:!0,message:"请输入用户名",trigger:"blur"}]},{default:()=>[a(i,{modelValue:e.username,"onUpdate:modelValue":l=>e.username=l},null)]})},{prop:"nickname",label:"昵称",headerRenderer:({column:e})=>a(s,null,[a("span",{class:"text-red"},[u("*")]),a("span",null,[e.label])]),renderer:({row:e,$index:r,column:t})=>a(p,{prop:`data[${r}][${t.property}]`,rules:[{required:!0,message:"请输入昵称",trigger:"blur"}]},{default:()=>[a(i,{modelValue:e.nickname,"onUpdate:modelValue":l=>e.nickname=l},null)]})},{prop:"sex",label:"性别",headerRenderer:({column:e})=>a(s,null,[a("span",{class:"text-red"},[u("*")]),a("span",null,[e.label])]),renderer:({row:e,$index:r,column:t})=>{let l;return a(p,{prop:`data[${r}][${t.property}]`,rules:[{required:!0,message:"请选择性别",trigger:"change"}]},{default:()=>[a(y,{modelValue:e.sex,"onUpdate:modelValue":d=>e.sex=d,clearable:!0},k(l=o.map(d=>a(E,{key:d.dictValue,label:d.dictLabel,value:d.dictValue},null)))?l:{default:()=>[l]})]})}},{prop:"phone",label:"手机号",headerRenderer:({column:e})=>a(s,null,[a("span",{class:"text-red"},[u("*")]),a("span",null,[e.label])]),renderer:({row:e,$index:r,column:t})=>a(p,{prop:`data[${r}][${t.property}]`,rules:[{required:!0,message:"请输入手机号",trigger:"blur"}]},{default:()=>[a(i,{modelValue:e.phone,"onUpdate:modelValue":l=>e.phone=l},null)]})},{prop:"email",label:"邮箱",renderer:({row:e,$index:r,column:t})=>a(p,{prop:`data[${r}][${t.property}]`,rules:[{required:!1,message:"请输入邮箱",trigger:"blur"}]},{default:()=>[a(i,{modelValue:e.email,"onUpdate:modelValue":l=>e.email=l},null)]})},{prop:"operation",label:"操作",renderer:({$index:e})=>a("span",null,[n.data.length-1===e||n.data.length===1?a(b,{type:"primary",link:!0,onClick:()=>m()},{default:()=>[u("新增")]}):void 0,n.data.length>1?a(b,{type:"primary",link:!0,onClick:()=>g(e)},{default:()=>[u("删除")]}):void 0])}],data:[]}),m=()=>{const e=V.clone(f,!0);n.data.push(e)},g=e=>{n.data.splice(e,1)};return h(()=>{m()}),{columnProp:n}};export{C as useVerifyEdit};
