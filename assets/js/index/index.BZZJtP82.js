import{d as X,c as d,m as v,p as I,am as V,ad as k,al as r,N as B,an as L,ao as $,j as z,a2 as lt,aq as D,ak as T,as as _,av as il,i as Se,b1 as K,X as Z,g as Me,aG as dt,S as G,w as q,aw as Ce,aA as ct,a9 as rl,n as U,at as ie,au as Re,ar as F,r as E,o as Be,a7 as Q,b7 as Te,L as ul,aa as oe,bj as Ve,aN as dl,bk as cl,Q as pl,a5 as fl,aO as vl,ac as pt,aB as A,bd as ml,F as nt,aM as st,aD as at,aC as ae,bl,ap as Ee,bm as hl}from"../.pnpm/.pnpm.DHp8PurU.js";import{u as gl,c as yl,E as Sl}from"./index.DFpfT7MK.js";import{E as Cl}from"./index.DrGQjhiy.js";import{m as ft,ac as Ol,b as vt,c as wl,s as mt,e as x,E as ke,_ as re,w as bt,G as ht,V as j,j as Il,bh as Vl,y as El,q as Tl,x as kl,bi as $l,bj as Ml,b7 as ge,bk as ot,B as Rl,i as Bl,n as Dl,U as Y,bl as Ll,C as gt,o as Nl,d as ye,a as it,bm as zl,p as Fl,bn as Wl,k as yt}from"../index-Q7BLmLDN.js";import{e as Pl}from"../strings/strings.Bp-R2x50.js";const P=new Map;if(ft){let e;document.addEventListener("mousedown",a=>e=a),document.addEventListener("mouseup",a=>{if(e){for(const s of P.values())for(const{documentHandler:g}of s)g(a,e);e=void 0}})}function rt(e,a){let s=[];return Array.isArray(a.arg)?s=a.arg:Ol(a.arg)&&s.push(a.arg),function(g,i){const y=a.instance.popperRef,l=g.target,f=i==null?void 0:i.target,o=!a||!a.instance,b=!l||!f,h=e.contains(l)||e.contains(f),C=e===l,O=s.length&&s.some(m=>m==null?void 0:m.contains(l))||s.length&&s.includes(f),c=y&&(y.contains(l)||y.contains(f));o||b||h||C||O||c||a.value(g,i)}}const Kl={beforeMount(e,a){P.has(e)||P.set(e,[]),P.get(e).push({documentHandler:rt(e,a),bindingFn:a.value})},updated(e,a){P.has(e)||P.set(e,[]);const s=P.get(e),g=s.findIndex(y=>y.bindingFn===a.oldValue),i={documentHandler:rt(e,a),bindingFn:a.value};g>=0?s.splice(g,1,i):s.push(i)},unmounted(e){P.delete(e)}},$e=vt({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:wl},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Hl={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},Al=X({name:"ElTag"}),Ul=X({...Al,props:$e,emits:Hl,setup(e,{emit:a}){const s=e,g=mt(),i=x("tag"),y=d(()=>{const{type:o,hit:b,effect:h,closable:C,round:O}=s;return[i.b(),i.is("closable",C),i.m(o||"primary"),i.m(g.value),i.m(h),i.is("hit",b),i.is("round",O)]}),l=o=>{a("close",o)},f=o=>{a("click",o)};return(o,b)=>o.disableTransitions?(v(),I("span",{key:0,class:r(B(y)),style:_({backgroundColor:o.color}),onClick:f},[V("span",{class:r(B(i).e("content"))},[k(o.$slots,"default")],2),o.closable?(v(),L(B(ke),{key:0,class:r(B(i).e("close")),onClick:D(l,["stop"])},{default:$(()=>[z(B(lt))]),_:1},8,["class","onClick"])):T("v-if",!0)],6)):(v(),L(il,{key:1,name:`${B(i).namespace.value}-zoom-in-center`,appear:""},{default:$(()=>[V("span",{class:r(B(y)),style:_({backgroundColor:o.color}),onClick:f},[V("span",{class:r(B(i).e("content"))},[k(o.$slots,"default")],2),o.closable?(v(),L(B(ke),{key:0,class:r(B(i).e("close")),onClick:D(l,["stop"])},{default:$(()=>[z(B(lt))]),_:1},8,["class","onClick"])):T("v-if",!0)],6)]),_:3},8,["name"]))}});var jl=re(Ul,[["__file","tag.vue"]]);const Gl=bt(jl),St=Symbol("ElSelectGroup"),Oe=Symbol("ElSelect");function ql(e,a){const s=Se(Oe),g=Se(St,{disabled:!1}),i=d(()=>h(K(s.props.modelValue),e.value)),y=d(()=>{var c;if(s.props.multiple){const m=K((c=s.props.modelValue)!=null?c:[]);return!i.value&&m.length>=s.props.multipleLimit&&s.props.multipleLimit>0}else return!1}),l=d(()=>e.label||(Z(e.value)?"":e.value)),f=d(()=>e.value||e.label||""),o=d(()=>e.disabled||a.groupDisabled||y.value),b=Me(),h=(c=[],m)=>{if(Z(e.value)){const p=s.props.valueKey;return c&&c.some(M=>dt(G(M,p))===G(m,p))}else return c&&c.includes(m)},C=()=>{!e.disabled&&!g.disabled&&(s.states.hoveringIndex=s.optionsArray.indexOf(b.proxy))},O=c=>{const m=new RegExp(Pl(c),"i");a.visible=m.test(l.value)||e.created};return q(()=>l.value,()=>{!e.created&&!s.props.remote&&s.setSelected()}),q(()=>e.value,(c,m)=>{const{remote:p,valueKey:M}=s.props;if(c!==m&&(s.onOptionDestroy(m,b.proxy),s.onOptionCreate(b.proxy)),!e.created&&!p){if(M&&Z(c)&&Z(m)&&c[M]===m[M])return;s.setSelected()}}),q(()=>g.disabled,()=>{a.groupDisabled=g.disabled},{immediate:!0}),{select:s,currentLabel:l,currentValue:f,itemSelected:i,isDisabled:o,hoverItem:C,updateOption:O}}const Ql=X({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const a=x("select"),s=ht(),g=d(()=>[a.be("dropdown","item"),a.is("disabled",B(f)),a.is("selected",B(l)),a.is("hovering",B(O))]),i=Ce({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:y,itemSelected:l,isDisabled:f,select:o,hoverItem:b,updateOption:h}=ql(e,i),{visible:C,hover:O}=ct(i),c=Me().proxy;o.onOptionCreate(c),rl(()=>{const p=c.value,{selected:M}=o.states,ue=(o.props.multiple?M:[M]).some(de=>de.value===c.value);U(()=>{o.states.cachedOptions.get(p)===c&&!ue&&o.states.cachedOptions.delete(p)}),o.onOptionDestroy(p,c)});function m(){f.value||o.handleOptionSelect(c)}return{ns:a,id:s,containerKls:g,currentLabel:y,itemSelected:l,isDisabled:f,select:o,hoverItem:b,updateOption:h,visible:C,hover:O,selectOptionClick:m,states:i}}});function Xl(e,a,s,g,i,y){return ie((v(),I("li",{id:e.id,class:r(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:e.hoverItem,onClick:D(e.selectOptionClick,["stop"])},[k(e.$slots,"default",{},()=>[V("span",null,F(e.currentLabel),1)])],42,["id","aria-disabled","aria-selected","onMouseenter","onClick"])),[[Re,e.visible]])}var De=re(Ql,[["render",Xl],["__file","option.vue"]]);const Jl=X({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Se(Oe),a=x("select"),s=d(()=>e.props.popperClass),g=d(()=>e.props.multiple),i=d(()=>e.props.fitInputWidth),y=E("");function l(){var f;y.value=`${(f=e.selectRef)==null?void 0:f.offsetWidth}px`}return Be(()=>{l(),j(e.selectRef,l)}),{ns:a,minWidth:y,popperClass:s,isMultiple:g,isFitInputWidth:i}}});function Yl(e,a,s,g,i,y){return v(),I("div",{class:r([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:_({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(v(),I("div",{key:0,class:r(e.ns.be("dropdown","header"))},[k(e.$slots,"header")],2)):T("v-if",!0),k(e.$slots,"default"),e.$slots.footer?(v(),I("div",{key:1,class:r(e.ns.be("dropdown","footer"))},[k(e.$slots,"footer")],2)):T("v-if",!0)],6)}var Zl=re(Jl,[["render",Yl],["__file","select-dropdown.vue"]]);const _l=11,xl=(e,a)=>{const{t:s}=Il(),g=ht(),i=x("select"),y=x("input"),l=Ce({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),f=E(null),o=E(null),b=E(null),h=E(null),C=E(null),O=E(null),c=E(null),m=E(null),p=E(null),M=E(null),ee=E(null),ue=E(null),{isComposing:de,handleCompositionStart:Ot,handleCompositionUpdate:wt,handleCompositionEnd:It}=Vl({afterComposition:t=>Qe(t)}),{wrapperRef:Le,isFocused:Ne,handleBlur:Vt}=El(C,{afterFocus(){e.automaticDropdown&&!w.value&&(w.value=!0,l.menuVisibleOnFocus=!0)},beforeBlur(t){var n,u;return((n=b.value)==null?void 0:n.isFocusInsideContent(t))||((u=h.value)==null?void 0:u.isFocusInsideContent(t))},afterBlur(){w.value=!1,l.menuVisibleOnFocus=!1}}),w=E(!1),te=E(),{form:ze,formItem:le}=Tl(),{inputId:Et}=kl(e,{formItemContext:le}),{valueOnClear:Tt,isEmptyValue:kt}=$l(e),ce=d(()=>e.disabled||(ze==null?void 0:ze.disabled)),we=d(()=>Q(e.modelValue)?e.modelValue.length>0:!kt(e.modelValue)),$t=d(()=>e.clearable&&!ce.value&&l.inputHovering&&we.value),Fe=d(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Mt=d(()=>i.is("reverse",Fe.value&&w.value)),We=d(()=>(le==null?void 0:le.validateState)||""),Rt=d(()=>Ml[We.value]),Bt=d(()=>e.remote?300:0),Pe=d(()=>e.loading?e.loadingText||s("el.select.loading"):e.remote&&!l.inputValue&&l.options.size===0?!1:e.filterable&&l.inputValue&&l.options.size>0&&pe.value===0?e.noMatchText||s("el.select.noMatch"):l.options.size===0?e.noDataText||s("el.select.noData"):null),pe=d(()=>R.value.filter(t=>t.visible).length),R=d(()=>{const t=Array.from(l.options.values()),n=[];return l.optionValues.forEach(u=>{const S=t.findIndex(W=>W.value===u);S>-1&&n.push(t[S])}),n.length>=t.length?n:t}),Dt=d(()=>Array.from(l.cachedOptions.values())),Lt=d(()=>{const t=R.value.filter(n=>!n.created).some(n=>n.currentLabel===l.inputValue);return e.filterable&&e.allowCreate&&l.inputValue!==""&&!t}),Ke=()=>{e.filterable&&oe(e.filterMethod)||e.filterable&&e.remote&&oe(e.remoteMethod)||R.value.forEach(t=>{var n;(n=t.updateOption)==null||n.call(t,l.inputValue)})},He=mt(),Nt=d(()=>["small"].includes(He.value)?"small":"default"),zt=d({get(){return w.value&&Pe.value!==!1},set(t){w.value=t}}),Ft=d(()=>{if(e.multiple&&!ge(e.modelValue))return K(e.modelValue).length===0&&!l.inputValue;const t=Q(e.modelValue)?e.modelValue[0]:e.modelValue;return e.filterable||ge(t)?!l.inputValue:!0}),Wt=d(()=>{var t;const n=(t=e.placeholder)!=null?t:s("el.select.placeholder");return e.multiple||!we.value?n:l.selectedLabel}),Pt=d(()=>ot?null:"mouseenter");q(()=>e.modelValue,(t,n)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(l.inputValue="",fe("")),ve(),!Te(t,n)&&e.validateEvent&&(le==null||le.validate("change").catch(u=>Rl()))},{flush:"post",deep:!0}),q(()=>w.value,t=>{t?fe(l.inputValue):(l.inputValue="",l.previousQuery=null,l.isBeforeHide=!0),a("visible-change",t)}),q(()=>l.options.entries(),()=>{var t;if(!ft)return;const n=((t=f.value)==null?void 0:t.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!ge(e.modelValue)||!Array.from(n).includes(document.activeElement))&&ve(),e.defaultFirstOption&&(e.filterable||e.remote)&&pe.value&&Ae()},{flush:"post"}),q(()=>l.hoveringIndex,t=>{Bl(t)&&t>-1?te.value=R.value[t]||{}:te.value={},R.value.forEach(n=>{n.hover=te.value===n})}),ul(()=>{l.isBeforeHide||Ke()});const fe=t=>{l.previousQuery===t||de.value||(l.previousQuery=t,e.filterable&&oe(e.filterMethod)?e.filterMethod(t):e.filterable&&e.remote&&oe(e.remoteMethod)&&e.remoteMethod(t),e.defaultFirstOption&&(e.filterable||e.remote)&&pe.value?U(Ae):U(Kt))},Ae=()=>{const t=R.value.filter(S=>S.visible&&!S.disabled&&!S.states.groupDisabled),n=t.find(S=>S.created),u=t[0];l.hoveringIndex=Ze(R.value,n||u)},ve=()=>{if(e.multiple)l.selectedLabel="";else{const n=Q(e.modelValue)?e.modelValue[0]:e.modelValue,u=Ue(n);l.selectedLabel=u.currentLabel,l.selected=u;return}const t=[];ge(e.modelValue)||K(e.modelValue).forEach(n=>{t.push(Ue(n))}),l.selected=t},Ue=t=>{let n;const u=Ve(t).toLowerCase()==="object",S=Ve(t).toLowerCase()==="null",W=Ve(t).toLowerCase()==="undefined";for(let H=l.cachedOptions.size-1;H>=0;H--){const N=Dt.value[H];if(u?G(N.value,e.valueKey)===G(t,e.valueKey):N.value===t){n={value:t,currentLabel:N.currentLabel,get isDisabled(){return N.isDisabled}};break}}if(n)return n;const J=u?t.label:!S&&!W?t:"";return{value:t,currentLabel:J}},Kt=()=>{e.multiple?l.hoveringIndex=R.value.findIndex(t=>l.selected.some(n=>se(n)===se(t))):l.hoveringIndex=R.value.findIndex(t=>se(t)===se(l.selected))},Ht=()=>{l.selectionWidth=o.value.getBoundingClientRect().width},je=()=>{l.calculatorWidth=O.value.getBoundingClientRect().width},At=()=>{l.collapseItemWidth=ee.value.getBoundingClientRect().width},Ie=()=>{var t,n;(n=(t=b.value)==null?void 0:t.updatePopper)==null||n.call(t)},Ge=()=>{var t,n;(n=(t=h.value)==null?void 0:t.updatePopper)==null||n.call(t)},qe=()=>{l.inputValue.length>0&&!w.value&&(w.value=!0),fe(l.inputValue)},Qe=t=>{if(l.inputValue=t.target.value,e.remote)Xe();else return qe()},Xe=dl(()=>{qe()},Bt.value),ne=t=>{Te(e.modelValue,t)||a(gt,t)},Ut=t=>cl(t,n=>!l.disabledOptions.has(n)),jt=t=>{if(e.multiple&&t.code!==Dl.delete&&t.target.value.length<=0){const n=K(e.modelValue).slice(),u=Ut(n);if(u<0)return;const S=n[u];n.splice(u,1),a(Y,n),ne(n),a("remove-tag",S)}},Gt=(t,n)=>{const u=l.selected.indexOf(n);if(u>-1&&!ce.value){const S=K(e.modelValue).slice();S.splice(u,1),a(Y,S),ne(S),a("remove-tag",n.value)}t.stopPropagation(),be()},Je=t=>{t.stopPropagation();const n=e.multiple?[]:Tt.value;if(e.multiple)for(const u of l.selected)u.isDisabled&&n.push(u.value);a(Y,n),ne(n),l.hoveringIndex=-1,w.value=!1,a("clear"),be()},Ye=t=>{var n;if(e.multiple){const u=K((n=e.modelValue)!=null?n:[]).slice(),S=Ze(u,t.value);S>-1?u.splice(S,1):(e.multipleLimit<=0||u.length<e.multipleLimit)&&u.push(t.value),a(Y,u),ne(u),t.created&&fe(""),e.filterable&&!e.reserveKeyword&&(l.inputValue="")}else a(Y,t.value),ne(t.value),w.value=!1;be(),!w.value&&U(()=>{me(t)})},Ze=(t=[],n)=>{if(!Z(n))return t.indexOf(n);const u=e.valueKey;let S=-1;return t.some((W,J)=>dt(G(W,u))===G(n,u)?(S=J,!0):!1),S},me=t=>{var n,u,S,W,J;const he=Q(t)?t[0]:t;let H=null;if(he!=null&&he.value){const N=R.value.filter(tt=>tt.value===he.value);N.length>0&&(H=N[0].$el)}if(b.value&&H){const N=(W=(S=(u=(n=b.value)==null?void 0:n.popperRef)==null?void 0:u.contentRef)==null?void 0:S.querySelector)==null?void 0:W.call(S,`.${i.be("dropdown","wrap")}`);N&&Ll(N,H)}(J=ue.value)==null||J.handleScroll()},qt=t=>{l.options.set(t.value,t),l.cachedOptions.set(t.value,t),t.disabled&&l.disabledOptions.set(t.value,t)},Qt=(t,n)=>{l.options.get(t)===n&&l.options.delete(t)},Xt=d(()=>{var t,n;return(n=(t=b.value)==null?void 0:t.popperRef)==null?void 0:n.contentRef}),Jt=()=>{l.isBeforeHide=!1,U(()=>me(l.selected))},be=()=>{var t;(t=C.value)==null||t.focus()},Yt=()=>{_e()},Zt=t=>{Je(t)},_e=t=>{if(w.value=!1,Ne.value){const n=new FocusEvent("focus",t);U(()=>Vt(n))}},_t=()=>{l.inputValue.length>0?l.inputValue="":w.value=!1},xe=()=>{ce.value||(ot&&(l.inputHovering=!0),l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:w.value=!w.value)},xt=()=>{w.value?R.value[l.hoveringIndex]&&Ye(R.value[l.hoveringIndex]):xe()},se=t=>Z(t.value)?G(t.value,e.valueKey):t.value,el=d(()=>R.value.filter(t=>t.visible).every(t=>t.disabled)),tl=d(()=>e.multiple?e.collapseTags?l.selected.slice(0,e.maxCollapseTags):l.selected:[]),ll=d(()=>e.multiple?e.collapseTags?l.selected.slice(e.maxCollapseTags):[]:[]),et=t=>{if(!w.value){w.value=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0||de.value)&&!el.value){t==="next"?(l.hoveringIndex++,l.hoveringIndex===l.options.size&&(l.hoveringIndex=0)):t==="prev"&&(l.hoveringIndex--,l.hoveringIndex<0&&(l.hoveringIndex=l.options.size-1));const n=R.value[l.hoveringIndex];(n.disabled===!0||n.states.groupDisabled===!0||!n.visible)&&et(t),U(()=>me(te.value))}},nl=()=>{if(!o.value)return 0;const t=window.getComputedStyle(o.value);return Number.parseFloat(t.gap||"6px")},sl=d(()=>{const t=nl();return{maxWidth:`${ee.value&&e.maxCollapseTags===1?l.selectionWidth-l.collapseItemWidth-t:l.selectionWidth}px`}}),al=d(()=>({maxWidth:`${l.selectionWidth}px`})),ol=d(()=>({width:`${Math.max(l.calculatorWidth,_l)}px`}));return j(o,Ht),j(O,je),j(p,Ie),j(Le,Ie),j(M,Ge),j(ee,At),Be(()=>{ve()}),{inputId:Et,contentId:g,nsSelect:i,nsInput:y,states:l,isFocused:Ne,expanded:w,optionsArray:R,hoverOption:te,selectSize:He,filteredOptionsCount:pe,resetCalculatorWidth:je,updateTooltip:Ie,updateTagTooltip:Ge,debouncedOnInputChange:Xe,onInput:Qe,deletePrevTag:jt,deleteTag:Gt,deleteSelected:Je,handleOptionSelect:Ye,scrollToOption:me,hasModelValue:we,shouldShowPlaceholder:Ft,currentPlaceholder:Wt,mouseEnterEventName:Pt,showClose:$t,iconComponent:Fe,iconReverse:Mt,validateState:We,validateIcon:Rt,showNewOption:Lt,updateOptions:Ke,collapseTagSize:Nt,setSelected:ve,selectDisabled:ce,emptyText:Pe,handleCompositionStart:Ot,handleCompositionUpdate:wt,handleCompositionEnd:It,onOptionCreate:qt,onOptionDestroy:Qt,handleMenuEnter:Jt,focus:be,blur:Yt,handleClearClick:Zt,handleClickOutside:_e,handleEsc:_t,toggleMenu:xe,selectOption:xt,getValueKey:se,navigateOptions:et,dropdownMenuVisible:zt,showTagList:tl,collapseTagList:ll,tagStyle:sl,collapseTagStyle:al,inputStyle:ol,popperRef:Xt,inputRef:C,tooltipRef:b,tagTooltipRef:h,calculatorRef:O,prefixRef:c,suffixRef:m,selectRef:f,wrapperRef:Le,selectionRef:o,scrollbarRef:ue,menuRef:p,tagMenuRef:M,collapseItemRef:ee}};var en=X({name:"ElOptions",setup(e,{slots:a}){const s=Se(Oe);let g=[];return()=>{var i,y;const l=(i=a.default)==null?void 0:i.call(a),f=[];function o(b){Q(b)&&b.forEach(h=>{var C,O,c,m;const p=(C=(h==null?void 0:h.type)||{})==null?void 0:C.name;p==="ElOptionGroup"?o(!pl(h.children)&&!Q(h.children)&&oe((O=h.children)==null?void 0:O.default)?(c=h.children)==null?void 0:c.default():h.children):p==="ElOption"?f.push((m=h.props)==null?void 0:m.value):Q(h.children)&&o(h.children)})}return l.length&&o((y=l[0])==null?void 0:y.children),Te(f,g)||(g=f,s&&(s.states.optionValues=f)),l}}});const tn=vt({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:Nl,effect:{type:ye(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:ye(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:gl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:it,default:fl},fitInputWidth:Boolean,suffixIcon:{type:it,default:vl},tagType:{...$e.type,default:"info"},tagEffect:{...$e.effect,default:"light"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:ye(String),values:yl,default:"bottom-start"},fallbackPlacements:{type:ye(Array),default:["bottom-start","top-start","right","left"]},...zl,...Fl(["ariaLabel"])}),ut="ElSelect",ln=X({name:ut,componentName:ut,components:{ElSelectMenu:Zl,ElOption:De,ElOptions:en,ElTag:Gl,ElScrollbar:Cl,ElTooltip:Sl,ElIcon:ke},directives:{ClickOutside:Kl},props:tn,emits:[Y,gt,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:a}){const s=xl(e,a);return pt(Oe,Ce({props:e,states:s.states,optionsArray:s.optionsArray,handleOptionSelect:s.handleOptionSelect,onOptionCreate:s.onOptionCreate,onOptionDestroy:s.onOptionDestroy,selectRef:s.selectRef,setSelected:s.setSelected})),{...s}}});function nn(e,a,s,g,i,y){const l=A("el-tag"),f=A("el-tooltip"),o=A("el-icon"),b=A("el-option"),h=A("el-options"),C=A("el-scrollbar"),O=A("el-select-menu"),c=ml("click-outside");return ie((v(),I("div",{ref:"selectRef",class:r([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),[hl(e.mouseEnterEventName)]:m=>e.states.inputHovering=!0,onMouseleave:m=>e.states.inputHovering=!1},[z(f,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:m=>e.states.isBeforeHide=!1},{default:$(()=>{var m;return[V("div",{ref:"wrapperRef",class:r([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)]),onClick:D(e.toggleMenu,["prevent","stop"])},[e.$slots.prefix?(v(),I("div",{key:0,ref:"prefixRef",class:r(e.nsSelect.e("prefix"))},[k(e.$slots,"prefix")],2)):T("v-if",!0),V("div",{ref:"selectionRef",class:r([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?k(e.$slots,"tag",{key:0},()=>[(v(!0),I(nt,null,st(e.showTagList,p=>(v(),I("div",{key:e.getValueKey(p),class:r(e.nsSelect.e("selected-item"))},[z(l,{closable:!e.selectDisabled&&!p.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:_(e.tagStyle),onClose:M=>e.deleteTag(M,p)},{default:$(()=>[V("span",{class:r(e.nsSelect.e("tags-text"))},[k(e.$slots,"label",{label:p.currentLabel,value:p.value},()=>[at(F(p.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(v(),L(f,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:$(()=>[V("div",{ref:"collapseItemRef",class:r(e.nsSelect.e("selected-item"))},[z(l,{closable:!1,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:_(e.collapseTagStyle)},{default:$(()=>[V("span",{class:r(e.nsSelect.e("tags-text"))}," + "+F(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","effect","style"])],2)]),content:$(()=>[V("div",{ref:"tagMenuRef",class:r(e.nsSelect.e("selection"))},[(v(!0),I(nt,null,st(e.collapseTagList,p=>(v(),I("div",{key:e.getValueKey(p),class:r(e.nsSelect.e("selected-item"))},[z(l,{class:"in-tooltip",closable:!e.selectDisabled&&!p.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",onClose:M=>e.deleteTag(M,p)},{default:$(()=>[V("span",{class:r(e.nsSelect.e("tags-text"))},[k(e.$slots,"label",{label:p.currentLabel,value:p.value},()=>[at(F(p.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","onClose"])],2))),128))],2)]),_:3},8,["disabled","effect","teleported"])):T("v-if",!0)]):T("v-if",!0),e.selectDisabled?T("v-if",!0):(v(),I("div",{key:1,class:r([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[ie(V("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":p=>e.states.inputValue=p,type:"text",name:e.name,class:r([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:_(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((m=e.hoverOption)==null?void 0:m.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onKeydown:[ae(D(p=>e.navigateOptions("next"),["stop","prevent"]),["down"]),ae(D(p=>e.navigateOptions("prev"),["stop","prevent"]),["up"]),ae(D(e.handleEsc,["stop","prevent"]),["esc"]),ae(D(e.selectOption,["stop","prevent"]),["enter"]),ae(D(e.deletePrevTag,["stop"]),["delete"])],onCompositionstart:e.handleCompositionStart,onCompositionupdate:e.handleCompositionUpdate,onCompositionend:e.handleCompositionEnd,onInput:e.onInput,onClick:D(e.toggleMenu,["stop"])},null,46,["id","onUpdate:modelValue","name","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label","onKeydown","onCompositionstart","onCompositionupdate","onCompositionend","onInput","onClick"]),[[bl,e.states.inputValue]]),e.filterable?(v(),I("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:r(e.nsSelect.e("input-calculator")),textContent:F(e.states.inputValue)},null,10,["textContent"])):T("v-if",!0)],2)),e.shouldShowPlaceholder?(v(),I("div",{key:2,class:r([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[e.hasModelValue?k(e.$slots,"label",{key:0,label:e.currentPlaceholder,value:e.modelValue},()=>[V("span",null,F(e.currentPlaceholder),1)]):(v(),I("span",{key:1},F(e.currentPlaceholder),1))],2)):T("v-if",!0)],2),V("div",{ref:"suffixRef",class:r(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(v(),L(o,{key:0,class:r([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:$(()=>[(v(),L(Ee(e.iconComponent)))]),_:1},8,["class"])):T("v-if",!0),e.showClose&&e.clearIcon?(v(),L(o,{key:1,class:r([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:$(()=>[(v(),L(Ee(e.clearIcon)))]),_:1},8,["class","onClick"])):T("v-if",!0),e.validateState&&e.validateIcon?(v(),L(o,{key:2,class:r([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:$(()=>[(v(),L(Ee(e.validateIcon)))]),_:1},8,["class"])):T("v-if",!0)],2)],10,["onClick"])]}),content:$(()=>[z(O,{ref:"menuRef"},{default:$(()=>[e.$slots.header?(v(),I("div",{key:0,class:r(e.nsSelect.be("dropdown","header")),onClick:D(()=>{},["stop"])},[k(e.$slots,"header")],10,["onClick"])):T("v-if",!0),ie(z(C,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:r([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:$(()=>[e.showNewOption?(v(),L(b,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):T("v-if",!0),z(h,null,{default:$(()=>[k(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Re,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(v(),I("div",{key:1,class:r(e.nsSelect.be("dropdown","loading"))},[k(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(v(),I("div",{key:2,class:r(e.nsSelect.be("dropdown","empty"))},[k(e.$slots,"empty",{},()=>[V("span",null,F(e.emptyText),1)])],2)):T("v-if",!0),e.$slots.footer?(v(),I("div",{key:3,class:r(e.nsSelect.be("dropdown","footer")),onClick:D(()=>{},["stop"])},[k(e.$slots,"footer")],10,["onClick"])):T("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow","onHide"])],16,["onMouseleave"])),[[c,e.handleClickOutside,e.popperRef]])}var sn=re(ln,[["render",nn],["__file","select.vue"]]);const an=X({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const a=x("select"),s=E(null),g=Me(),i=E([]);pt(St,Ce({...ct(e)}));const y=d(()=>i.value.some(b=>b.visible===!0)),l=b=>{var h,C;return((h=b.type)==null?void 0:h.name)==="ElOption"&&!!((C=b.component)!=null&&C.proxy)},f=b=>{const h=K(b),C=[];return h.forEach(O=>{var c,m;l(O)?C.push(O.component.proxy):(c=O.children)!=null&&c.length?C.push(...f(O.children)):(m=O.component)!=null&&m.subTree&&C.push(...f(O.component.subTree))}),C},o=()=>{i.value=f(g.subTree)};return Be(()=>{o()}),Wl(s,o,{attributes:!0,subtree:!0,childList:!0}),{groupRef:s,visible:y,ns:a}}});function on(e,a,s,g,i,y){return ie((v(),I("ul",{ref:"groupRef",class:r(e.ns.be("group","wrap"))},[V("li",{class:r(e.ns.be("group","title"))},F(e.label),3),V("li",null,[V("ul",{class:r(e.ns.b("group"))},[k(e.$slots,"default")],2)])],2)),[[Re,e.visible]])}var Ct=re(an,[["render",on],["__file","option-group.vue"]]);const fn=bt(sn,{Option:De,OptionGroup:Ct}),vn=yt(De);yt(Ct);export{Kl as C,fn as E,vn as a,Gl as b};
