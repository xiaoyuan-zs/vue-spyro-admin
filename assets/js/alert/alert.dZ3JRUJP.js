import{d as g,al as N,r as D,k as p,o as a,ar as l,as as d,ax as I,aq as k,ap as o,R as e,at as V,ao as n,a as i,ah as b,aH as h,av as f,F as $,p as A,ay as z,az as F}from"../.pnpm/.pnpm.BjW_VwSY.js";import{b as M,b9 as P,a8 as w,e as q,E as C,_ as H,ba as O,w as R}from"../index-BbRlUtng.js";const _=["light","dark"],j=M({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:P(w),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:_,default:"light"}}),G={close:r=>r instanceof MouseEvent},J=g({name:"ElAlert"}),K=g({...J,props:j,emits:G,setup(r,{emit:E}){const c=r,{Close:S}=O,u=N(),t=q("alert"),m=D(!0),y=p(()=>w[c.type]),B=p(()=>[t.e("icon"),{[t.is("big")]:!!c.description||!!u.default}]),T=p(()=>({"with-description":c.description||u.default})),v=s=>{m.value=!1,E("close",s)};return(s,Q)=>(a(),l(F,{name:e(t).b("fade"),persisted:""},{default:d(()=>[I(k("div",{class:o([e(t).b(),e(t).m(s.type),e(t).is("center",s.center),e(t).is(s.effect)]),role:"alert"},[s.showIcon&&e(y)?(a(),l(e(C),{key:0,class:o(e(B))},{default:d(()=>[(a(),l(V(e(y))))]),_:1},8,["class"])):n("v-if",!0),k("div",{class:o(e(t).e("content"))},[s.title||s.$slots.title?(a(),i("span",{key:0,class:o([e(t).e("title"),e(T)])},[b(s.$slots,"title",{},()=>[h(f(s.title),1)])],2)):n("v-if",!0),s.$slots.default||s.description?(a(),i("p",{key:1,class:o(e(t).e("description"))},[b(s.$slots,"default",{},()=>[h(f(s.description),1)])],2)):n("v-if",!0),s.closable?(a(),i($,{key:2},[s.closeText?(a(),i("div",{key:0,class:o([e(t).e("close-btn"),e(t).is("customed")]),onClick:v},f(s.closeText),3)):(a(),l(e(C),{key:1,class:o(e(t).e("close-btn")),onClick:v},{default:d(()=>[A(e(S))]),_:1},8,["class"]))],64)):n("v-if",!0)],2)],2),[[z,m.value]])]),_:3},8,["name"]))}});var L=H(K,[["__file","alert.vue"]]);const X=R(L);export{X as E};