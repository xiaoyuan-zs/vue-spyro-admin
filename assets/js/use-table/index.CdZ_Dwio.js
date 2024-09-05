import{B as n,a7 as m,a_ as q}from"../index-CtBAY3g9.js";import{v as G}from"../loading/loading.Dvyw2Jeu.js";import{_ as H}from"../SoTable.vue_vue_type_script_setup_true_lang/SoTable.vue_vue_type_script_setup_true_lang.CxiOlA8J.js";import{_ as J}from"../SoCard/SoCard.DwuLq4T8.js";import{E as X}from"../alert/alert.BofEq_nG.js";import{E as Q}from"../text/text.BnjpkrSM.js";import{d as M,r as f,av as u,j as t,aC as l,F as k,az as W,o as Y,G as Z,H as ee,as as x,at as te,M as a,an as i,al as E,f as oe}from"../.pnpm/.pnpm.BKF2UWsc.js";import{u as ae}from"../useTable/useTable.CUpO3Zst.js";import"../popover/popover.BrsYiy8V.js";import"../index/index.7s-RqbZ0.js";import"../dropdown-item/dropdown-item.Wc_9rObz.js";import"../index/index.CwUFHHr3.js";/* empty css                             */import"../index/index.Bjr88jGu.js";import"../strings/strings.B4pr-qrC.js";import"../col/col.uwYcD-oD.js";import"../index/index.4hwU5esE.js";import"../index/index.mVrY0ky8.js";/* empty css                                   */import"../checkbox/checkbox.CrKV_5IN.js";import"../_plugin-vue_export-helper/_plugin-vue_export-helper.DlAUqK2U.js";import"../use/use.vltj-xWI.js";import"../card/card.FD34Jv3v.js";const le={class:"h-full flex-col gap-4"},ne={class:"mt-3"},se=M({name:"UseTable"}),Le=M({...se,setup(ie){const p=f(!0),P=u([{dictLabel:"男",dictValue:"male"},{dictLabel:"女",dictValue:"female"}]),T=u([{dictLabel:"正常",dictValue:0},{dictLabel:"禁用",dictValue:1}]),z=u([{type:"selection",label:"勾选",width:"55"},{type:"expand",label:"展开",width:"55",renderer:({row:o})=>t("div",{class:"block px-2"},[t(Q,{type:"success"},{default:()=>[l("tsx渲染："),JSON.stringify(o)]})])},{type:"sortable",label:"排序",width:80},{type:"index",label:"序号",width:"55"},{prop:"username",label:"用户名",overflowConfig:{initiate:!0}},{prop:"nickname",label:"昵称"},{prop:"sex",label:"性别",dictConfig:{options:()=>P}},{prop:"phone",label:"手机号"},{prop:"email",label:"邮箱"},{prop:"status",label:"状态",tagConfig:{initiate:!0},dictConfig:{options:()=>T}},{prop:"operation",label:"操作",renderer:()=>t(k,null,[t(n,{type:"primary",link:!0,onClick:y},{default:()=>[l("修改")]}),t(n,{type:"primary",link:!0,onClick:w},{default:()=>[l("删除")]})])}]),r=u({pageNum:1,pageSize:10}),{tableState:L,tableMethods:N,tableMount:V}=ae({fetchApi:async()=>{const{data:o,total:e=0}=await q(r);return{data:o,total:e}}}),{loading:F,data:U,total:A}=W(L),{setProps:g,addColumn:b,delColumn:_,getElTableInstance:v,refresh:B}=N,y=()=>{m.success("仅供预览展示")},w=()=>{m.success("仅供预览展示")},C=o=>{g({pagination:o})},S=o=>{o?b({type:"selection",width:"55",label:"勾选"},0):_("selection")};let c=f(!1);const $=async()=>{c.value=!c.value;const o=await v();U.value.forEach(e=>{o==null||o.toggleRowExpansion(e,c.value)})},D=async()=>{const o=await v();o==null||o.toggleAllSelection()};let d=f(!0);const I=()=>{d.value=!d.value,d.value?b({prop:"operation",label:"操作",renderer:()=>t(k,null,[t(n,{type:"primary",link:!0,onClick:y},{default:()=>[l("修改")]}),t(n,{type:"primary",link:!0,onClick:w},{default:()=>[l("删除")]})])}):_("operation")},O=({newIndex:o,oldIndex:e})=>{m.success("拖拽排序成功")};return Y(()=>{g({rowKey:"userId",columnList:z})}),(o,e)=>{const R=X,h=J,K=H,j=G;return Z(),ee("div",le,[x(t(h,{title:"useTable 操作"},{default:i(()=>[E("div",null,[t(R,{closable:!1,title:"基于基础表格封装useTable函数的高级用法",type:"info",description:"采用hook函数式搭配TSX语法的方式进行使用，配置高度灵活，表格都默认设置rowKey，优化表格渲染及保证树形、展开行、拖拽的正常功能。"}),E("div",ne,[t(a(n),{onClick:e[0]||(e[0]=s=>C(!0))},{default:i(()=>[l("显示分页")]),_:1}),t(a(n),{onClick:e[1]||(e[1]=s=>C(!1))},{default:i(()=>[l("隐藏分页")]),_:1}),t(a(n),{onClick:e[2]||(e[2]=s=>S(!0))},{default:i(()=>[l("显示多选")]),_:1}),t(a(n),{onClick:e[3]||(e[3]=s=>S(!1))},{default:i(()=>[l("隐藏多选")]),_:1}),t(a(n),{onClick:$},{default:i(()=>[l("显示/隐藏展开行")]),_:1}),t(a(n),{onClick:D},{default:i(()=>[l("全选/全不选")]),_:1}),t(a(n),{onClick:I},{default:i(()=>[l("添加/删除操作列")]),_:1})])])]),_:1},512),[[te,a(p)]]),t(h,{title:"useTable 示例",class:"flex-1"},{default:i(()=>[x(t(K,{currentPage:a(r).pageNum,"onUpdate:currentPage":e[4]||(e[4]=s=>a(r).pageNum=s),pageSize:a(r).pageSize,"onUpdate:pageSize":e[5]||(e[5]=s=>a(r).pageSize=s),showSearch:a(p),"onUpdate:showSearch":e[6]||(e[6]=s=>oe(p)?p.value=s:null),pageProps:{total:a(A)},height:"100%",onRefresh:a(B),onMount:a(V),onDragSort:O},null,8,["currentPage","pageSize","showSearch","pageProps","onRefresh","onMount"]),[[j,a(F)]])]),_:1})])}}});export{Le as default};