import{u as T,Z as V}from"../index-Q7BLmLDN.js";/* empty css                             */import{E as C}from"../card/card.D5mDEdeb.js";import{E as k,a as B}from"../col/col.BeJWHG_v.js";import{_ as z}from"../avatar/avatar.ByDte0c4.js";import{w as L,a9 as I,az as M,bp as O,r as S,bq as A,d as D,o as F,N as v,m as h,p as b,j as t,ao as s,am as e,F as g,aM as y,br as G,bs as J,aD as R,ar as n,al as P}from"../.pnpm/.pnpm.DHp8PurU.js";import{u as U}from"../index/index.badlUIKg.js";import{s as q}from"../use/use.vltj-xWI.js";import{E as H}from"../index/index.DrGQjhiy.js";import{_ as Z}from"../_plugin-vue_export-helper/_plugin-vue_export-helper.DlAUqK2U.js";const $=(r,d)=>{let a=null;const p=()=>{const i=T().colorMode;a=M(O(r,i)),_(d)},_=i=>{a&&a.setOption({...i,backgroundColor:"transparent"})},x=U(()=>{a&&a.resize({animation:{duration:300}})},200);return p(),L(d,i=>{_(i)},{deep:!0}),L(()=>T().colorMode,()=>{a&&(a.dispose(),p())}),window.addEventListener("resize",x),I(()=>{a&&(window.removeEventListener("resize",x),a.dispose())}),{myChart:a}},K=()=>{const r=S(),d=S({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!0,axisLine:{show:!1},axisTick:{show:!1},data:["2017","2018","2019","2020","2021","2022","2023"]}],yAxis:[{type:"value"}],series:[{name:"总内容量",type:"line",smooth:!0,symbol:"circle",showSymbol:!0,symbolSize:5,label:{show:!0},itemStyle:{color:"rgba(0,144,255, 0.8)"},lineStyle:{color:"rgba(54,206,158, 0.8)"},areaStyle:{color:new A(0,0,0,1,[{offset:0,color:"rgba(173,235,216, 0.8)"},{offset:1,color:"rgba(198,230,255, 0.6)"}],!1),shadowColor:"rgba(198,230,255, 0.5)",shadowBlur:10},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]}]});return{barEcharts:r,barOptions:d}},c=r=>(G("data-v-e1daa37f"),r=r(),J(),r),Q={class:"pb-4"},W=c(()=>e("div",{class:"flex items-center h-full"},[e("img",{src:z,class:"w-20 rounded-full p-3",alt:"avatar"}),e("div",{class:"flex-col justify-around"},[e("h3",{class:"font-bold text-lg"},"Admin, 欢迎你!"),e("span",{class:"text-gray text-sm"},"一天写点，天天写点，不知道写了个啥，今天在下雪，天气很冷!")])],-1)),X=c(()=>e("div",{class:"h-full flex-center justify-around py-4"},[e("div",{class:"flex-col-center"},[e("span",{class:"text-zinc-500"},"项目数"),e("span",{class:"text-6 font-medium"},"16")]),e("div",{class:"flex-col-center"},[e("span",{class:"text-zinc-500"},"待办任务"),e("span",{class:"text-6 font-medium"},[R(" 10/ "),e("span",{class:"text-zinc-500"},"24")])]),e("div",{class:"flex-col-center"},[e("span",{class:"text-zinc-500"},"项目访问"),e("span",{class:"text-6 font-medium"},"2,222")])],-1)),Y=c(()=>e("div",{class:"flex justify-between relative"},[e("h3",{class:"font-semibold text-base antialiased title-before"},"项目")],-1)),ee={class:"grid gap-8 py-4 lg:h-66 <lg:grid-cols-2 <sm:grid-cols-1 <md:grid-cols-2 grid-cols-3"},te={class:"flex items-center"},se={class:"pl-4 font-700"},ae={class:"text-gray py-2 <sm:truncate line-clamp-2"},oe={class:"flex justify-between"},le={class:"text-neutral-500"},ce={class:"text-neutral-400"},re=c(()=>e("div",{class:"flex justify-between relative"},[e("h3",{class:"font-semibold text-base antialiased title-before"},"快捷操作")],-1)),ie=c(()=>e("div",{class:"w-full h-66"},null,-1)),ne=c(()=>e("div",{class:"flex justify-between relative"},[e("h3",{class:"font-semibold text-base antialiased title-before"},"内容数据")],-1)),de=c(()=>e("div",{class:"flex justify-between relative"},[e("h3",{class:"font-semibold text-base antialiased title-before"},"动态")],-1)),ue={class:"w-full h-50 py-4"},fe=c(()=>e("img",{src:z,class:"w-15 rounded-full p-3",alt:"avatar"},null,-1)),pe=c(()=>e("div",{class:"flex-col h-full"},[e("span",{class:"font-500 subpixel-antialiased truncate <sm:w-75"}," 林冬冬 在 特怪小分队 新建项目 xxxxxxxxxxxxxxxxxxxxxxxxxx "),e("span",{class:"text-neutral-400"},"2 分钟前")],-1)),xe=[fe,pe],me=c(()=>e("div",{class:"flex justify-between relative"},[e("h3",{class:"font-semibold text-base antialiased title-before"},"消息提醒")],-1)),_e={class:"w-full h-36 py-4"},he={class:"font-500 subpixel-antialiased truncate flex-1 px-4 <sm:w-75"},be={class:"text-neutral-400 flex-none"},ve=D({name:"Home"}),ge=D({...ve,setup(r){const d=[{icon:"logos:github-icon",projectName:"Github",projectDesc:"是一个面向开源及私有软件项目的托管平台。",author:"开源",createTime:"2021-07-04"},{icon:"logos:vue",projectName:"Vue",projectDesc:"渐进式 JavaScript 框架",author:"尤大大",createTime:"2021-07-04"},{icon:"logos:react",projectName:"React",projectDesc:"用于构建用户界面的 JavaScript 库",author:"技术大牛",createTime:"2020-08-13"},{icon:"logos:javascript",projectName:"JavaScript",projectDesc:"路是走出来的，而不是空想出来的",author:"技术大牛",createTime:"2020-08-13"},{icon:"logos:element",projectName:"ElemenPlus",projectDesc:"一个Vue3的UI框架",author:"技术大牛",createTime:"2020-08-13"},{icon:"logos:vitejs",projectName:"Vite",projectDesc:"下一代的前端工具链",author:"尤大大",createTime:"2020-08-13"}],a=(w,j)=>{var o;return(o=w.find(u=>u.dictValue==j))==null?void 0:o.color},p=[{dictLabel:"消息",dictValue:"01",color:"text-emerald-500"},{dictLabel:"公告",dictValue:"02",color:"text-orange-500"},{dictLabel:"通知",dictValue:"03",color:"text-blue-500"},{dictLabel:"活动",dictValue:"04",color:"text-indigo-500"}],_=[{type:"01",desc:"xxx即将于2023年12月25日入职, 请提前准备相关流程",createTime:"2023-12-20"},{type:"02",desc:"xxx即将于2023年12月25日入职, 请提前准备相关流程",createTime:"2023-12-20"},{type:"03",desc:"xxx即将于2023年12月25日入职, 请提前准备相关流程",createTime:"2023-12-20"},{type:"04",desc:"xxx即将于2023年12月25日入职, 请提前准备相关流程",createTime:"2023-12-20"}],{barEcharts:x,barOptions:i}=K();return F(()=>{$(v(x),v(i))}),(w,j)=>{const o=k,u=B,f=C,N=V,E=H;return h(),b("div",Q,[t(f,{shadow:"hover"},{default:s(()=>[t(u,{gutter:10},{default:s(()=>[t(o,{xs:24,sm:24,md:16},{default:s(()=>[W]),_:1}),t(o,{xs:24,sm:24,md:8},{default:s(()=>[X]),_:1})]),_:1})]),_:1}),t(u,{gutter:16},{default:s(()=>[t(o,{xs:24,lg:16,class:"mt-4"},{default:s(()=>[t(f,{shadow:"hover"},{default:s(()=>[Y,e("div",ee,[(h(),b(g,null,y(d,(l,m)=>e("div",{key:m},[e("div",te,[t(N,{name:l.icon,size:30,color:"var(--el-color-primary)"},null,8,["name"]),e("span",se,n(l.projectName),1)]),e("p",ae,n(l.projectDesc),1),e("div",oe,[e("span",le,n(l.author),1),e("span",ce,n(l.createTime),1)])])),64))])]),_:1})]),_:1}),t(o,{xs:24,lg:8,class:"mt-4"},{default:s(()=>[t(f,{shadow:"hover"},{default:s(()=>[re,ie]),_:1})]),_:1})]),_:1}),t(u,{gutter:16},{default:s(()=>[t(o,{xs:24,lg:16,class:"mt-4"},{default:s(()=>[t(f,{shadow:"hover"},{default:s(()=>[ne,e("div",{ref_key:"barEcharts",ref:x,class:"w-full h-106.5"},null,512)]),_:1})]),_:1}),t(o,{xs:24,lg:8,class:"mt-4"},{default:s(()=>[t(u,null,{default:s(()=>[t(o,null,{default:s(()=>[t(f,{shadow:"hover"},{default:s(()=>[de,e("div",ue,[t(E,null,{default:s(()=>[(h(),b(g,null,y(10,(l,m)=>e("div",{key:m,class:"flex w-full items-center"},xe)),64))]),_:1})])]),_:1})]),_:1}),t(o,{class:"mt-4"},{default:s(()=>[t(f,{shadow:"hover"},{default:s(()=>[me,e("div",_e,[t(E,null,{default:s(()=>[(h(),b(g,null,y(_,(l,m)=>e("div",{key:m,class:"flex w-full p-3 flex-nowrap items-center"},[e("span",{class:P([a(p,l.type),"flex-none"])},n(v(q)(p,l.type)),3),e("span",he,n(l.desc),1),e("span",be,n(l.createTime),1)])),64))]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}}),Ve=Z(ge,[["__scopeId","data-v-e1daa37f"]]);export{Ve as default};
