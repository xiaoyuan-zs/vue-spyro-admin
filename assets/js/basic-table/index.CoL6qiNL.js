import{A as a,a8 as r,a$ as T}from"../index-Q7BLmLDN.js";import{v as V}from"../loading/loading.D3Mdbvfg.js";import{_ as $}from"../SoCard/SoCard.Do6_FRc5.js";import{_ as D}from"../SoTable.vue_vue_type_script_setup_true_lang/SoTable.vue_vue_type_script_setup_true_lang.gnz8sQKQ.js";import{E as R}from"../alert/alert.D1AmuuoG.js";import{d as S,aw as p,j as t,aD as o,F as B,r as _,o as F,m as b,an as y,ao as l,at as A,N as n,ar as N}from"../.pnpm/.pnpm.DHp8PurU.js";import"../card/card.D5mDEdeb.js";import"../_plugin-vue_export-helper/_plugin-vue_export-helper.DlAUqK2U.js";import"../popover/popover.C6pNu94V.js";import"../index/index.DFpfT7MK.js";import"../dropdown-item/dropdown-item.Cc10IXc_.js";import"../index/index.DrGQjhiy.js";/* empty css                             */import"../index/index.BZZJtP82.js";import"../strings/strings.Bp-R2x50.js";import"../col/col.BeJWHG_v.js";import"../index/index.CGnfXhdt.js";import"../index/index.badlUIKg.js";import"../checkbox/checkbox.B_B4M5Fr.js";import"../use/use.vltj-xWI.js";const ne=S({name:"BasicTable",__name:"index",setup(M){const g=p([{dictLabel:"男",dictValue:"male"},{dictLabel:"女",dictValue:"female"}]),k=p([{dictLabel:"正常",dictValue:0},{dictLabel:"禁用",dictValue:1}]),C=p([{type:"selection",width:"55"},{type:"index",label:"序号",width:"55"},{prop:"username",label:"用户名",overflowConfig:{initiate:!0}},{prop:"nickname",label:"昵称",renderer:({row:e})=>t(a,{type:"primary",link:!0,onClick:()=>u("内容")},{default:()=>[e.nickname]}),headerRenderer:()=>t(a,{type:"primary",onClick:()=>u("表头")},{default:()=>[o("昵称")]})},{prop:"sex",label:"性别",dictConfig:{options:()=>g}},{prop:"phone",label:"手机号"},{prop:"email",label:"邮箱"},{prop:"status",label:"状态",tagConfig:{initiate:!0},dictConfig:{options:()=>k}},{prop:"operation",label:"操作",renderer:()=>t(B,null,[t(a,{type:"primary",link:!0,onClick:h},{default:()=>[o("修改")]}),t(a,{type:"primary",link:!0,onClick:v},{default:()=>[o("删除")]})])}]),c=_([]),m=e=>{r.success(`我是作用域插槽渲染的${e}`)},u=e=>{r.success(`我是TSX渲染的${e}`)},h=()=>{r.success("仅供预览展示")},v=()=>{r.success("仅供预览展示")},s=_(!1),d=async()=>{s.value=!0;const e=await T();c.value=e.data,s.value=!1};return F(()=>{d()}),(e,i)=>{const x=R,w=D,L=$,E=V;return b(),y(L,{title:"基础表格示例",class:"h-full"},{default:l(()=>[t(x,{closable:!1,title:"基于el-table表格的二次封装",type:"info",description:"采用h函数或tsx语法对列渲染进行封装，兼容el-table全部属性及API，并进行了一定自定义拓展，具有完整类型提示， 列配置可选择插槽方式或tsx渲染，高度灵活，表格都默认设置rowKey，优化表格渲染。"}),A((b(),y(w,{ref:"soTableRef",height:"100%","column-list":n(C),"table-data":n(c),"table-tool":!1,onRefresh:d},{usernameHeader:l(()=>[t(n(a),{type:"primary",onClick:i[0]||(i[0]=f=>m("表头"))},{default:l(()=>[o("用户名")]),_:1})]),username:l(({row:f})=>[t(n(a),{type:"primary",link:"",onClick:i[1]||(i[1]=O=>m("内容"))},{default:l(()=>[o(N(f.username),1)]),_:2},1024)]),_:1},8,["column-list","table-data"])),[[E,n(s)]])]),_:1})}}});export{ne as default};
