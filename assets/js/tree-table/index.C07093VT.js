import{s as x,E as r,a as i,b as C}from"../index-DVHZjC7u.js";import{v as y}from"../loading/loading.D3eHqn-i.js";import{_ as v}from"../SoCard/SoCard.VMYpzqIa.js";import{_ as T}from"../SoTable.vue_vue_type_script_setup_true_lang/SoTable.vue_vue_type_script_setup_true_lang.DlHUvzTa.js";import{a7 as w,ax as k,ap as e,aF as l,aj as E,aC as M,H as L,a9 as V,aa as B,an as F,at as R,C as t}from"../.pnpm/.pnpm.BC4ss2vt.js";import{u as S}from"../useTable/useTable.S5Xj5ift.js";import"../card/card.DHGfeX15.js";import"../_plugin-vue_export-helper/_plugin-vue_export-helper.DlAUqK2U.js";import"../index/index.BxkQwuov.js";import"../index/index.DkeME46C.js";import"../useIcon/useIcon.f8zxU7fS.js";import"../index/index.CnVHV5ES.js";import"../Icon.vue_vue_type_script_lang/Icon.vue_vue_type_script_lang.DhcAIbYN.js";import"../index/index.CH5tCCty.js";/* empty css                             */import"../index/index.y3gES2x2.js";import"../strings/strings.otjSNYfh.js";import"../col/col.BZfMTcsq.js";import"../checkbox/checkbox.8luEfTDM.js";import"../use/use.vltj-xWI.js";function D(){return x.request({url:"/trees",method:"get"})}const H={class:"h-full flex-col"},ae=w({name:"TreeTable",__name:"index",setup(N){const n=k([{type:"selection",label:"勾选",width:"55"},{type:"index",label:"序号",width:"55"},{prop:"uuid",label:"uuid",align:"left"},{prop:"label",label:"标签",align:"left",overflowConfig:{initiate:!0}},{prop:"sex",label:"性别"},{prop:"phone",label:"手机号"},{prop:"email",label:"邮箱"},{prop:"status",label:"状态",tagConfig:{initiate:!0},dictConfig:{options:()=>[{dictLabel:"正常",dictValue:0},{dictLabel:"禁用",dictValue:1}]}},{prop:"operation",label:"操作",renderer:()=>e(E,null,[e(r,{type:"primary",link:!0,onClick:f},{default:()=>[l("修改")]}),e(r,{type:"primary",link:!0,onClick:_},{default:()=>[l("删除")]})])}]),{tableState:s,tableMethods:p,tableMount:c}=S({fetchApi:async()=>{const{data:o,total:a=0}=await D();return{data:C(o),total:a}}}),{loading:u}=M(s),{setProps:m,refresh:d}=p,f=()=>{i.success("仅供预览展示")},_=()=>{i.success("仅供预览展示")};return L(()=>{m({rowKey:"uuid",tableTool:!1,columnList:n})}),(o,a)=>{const b=T,h=v,g=y;return V(),B("div",H,[e(h,{title:"树形表格示例",class:"flex-1"},{default:F(()=>[R(e(b,{height:"100%",onRefresh:t(d),onMount:t(c)},null,8,["onRefresh","onMount"]),[[g,t(u)]])]),_:1})])}}});export{ae as default};
