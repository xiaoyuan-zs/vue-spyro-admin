import{b as r,c as i,s as p,e as c,b5 as m,_ as u,w as d}from"../index-BbRlUtng.js";import{d as a,k as f,o as y,ar as _,as as x,ah as S,ap as g,R as C,aw as b,at as v}from"../.pnpm/.pnpm.BjW_VwSY.js";const w=r({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:i,default:""},truncated:Boolean,lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),z=a({name:"ElText"}),h=a({...z,props:w,setup(n){const t=n,l=p(),e=c("text"),o=f(()=>[e.b(),e.m(t.type),e.m(l.value),e.is("truncated",t.truncated),e.is("line-clamp",!m(t.lineClamp))]);return(s,B)=>(y(),_(v(s.tag),{class:g(C(o)),style:b({"-webkit-line-clamp":s.lineClamp})},{default:x(()=>[S(s.$slots,"default")]),_:3},8,["class","style"]))}});var k=u(h,[["__file","text.vue"]]);const N=d(k);export{N as E};