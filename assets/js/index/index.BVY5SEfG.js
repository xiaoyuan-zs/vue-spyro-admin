import{p as J,a3 as d,r as f,s as E,al as V,aa as k,ak as u,F as D,am as L,an as $,ap as N,Y as et,aq as B,ai as T,as as x,av as al,a5 as he,R as Y,J as ke,v as ut,N as G,I as Q,bb as ye,ax as Se,aC as dt,a4 as il,q as j,at as ie,au as $e,ar as z,A as I,K as Re,a7 as Z,a1 as W,D as rl,bp as Ee,aO as ul,bq as dl,L as cl,$ as pl,aP as fl,a9 as ct,aD as U,bh as vl,aj as tt,aK as lt,aF as nt,aE as ae,br as ml,ao as Ie,bs as bl,bn as gl}from"../.pnpm/.pnpm.CNWdlwhF.js";import{p as pt,am as hl,c as ft,d as yl,x as vt,u as _,j as Ve,k as re,w as mt,J as bt,X as q,bh as Sl,n as Cl,A as Ol,v as wl,z as El,bi as Il,bj as Vl,bk as st,F as Tl,ae as kl,i as $l,U as K,G as Rl,bl as Ml,C as gt,q as Dl,f as ge,e as ot,bm as Bl,r as Ll,D as Fl,bn as Nl,o as ht}from"../index-z4oZt0PI.js";import{u as zl,b as Wl,E as Pl}from"./index.Cl3gLZpv.js";import{E as Kl}from"./index.Cw13HvQA.js";import{e as Al}from"../strings/strings.BKv9SlKM.js";const A=new Map;let at;pt&&(document.addEventListener("mousedown",e=>at=e),document.addEventListener("mouseup",e=>{for(const n of A.values())for(const{documentHandler:o}of n)o(e,at)}));function it(e,n){let o=[];return Array.isArray(n.arg)?o=n.arg:hl(n.arg)&&o.push(n.arg),function(y,i){const v=n.instance.popperRef,l=y.target,c=i==null?void 0:i.target,r=!n||!n.instance,g=!l||!c,m=e.contains(l)||e.contains(c),S=e===l,C=o.length&&o.some(b=>b==null?void 0:b.contains(l))||o.length&&o.includes(c),p=v&&(v.contains(l)||v.contains(c));r||g||m||S||C||p||n.value(y,i)}}const Hl={beforeMount(e,n){A.has(e)||A.set(e,[]),A.get(e).push({documentHandler:it(e,n),bindingFn:n.value})},updated(e,n){A.has(e)||A.set(e,[]);const o=A.get(e),y=o.findIndex(v=>v.bindingFn===n.oldValue),i={documentHandler:it(e,n),bindingFn:n.value};y>=0?o.splice(y,1,i):o.push(i)},unmounted(e){A.delete(e)}},Te=ft({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:yl},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Ul={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},jl=J({name:"ElTag"}),ql=J({...jl,props:Te,emits:Ul,setup(e,{emit:n}){const o=e,y=vt(),i=_("tag"),v=d(()=>{const{type:r,hit:g,effect:m,closable:S,round:C}=o;return[i.b(),i.is("closable",S),i.m(r||"primary"),i.m(y.value),i.m(m),i.is("hit",g),i.is("round",C)]}),l=r=>{n("close",r)},c=r=>{n("click",r)};return(r,g)=>r.disableTransitions?(f(),E("span",{key:0,class:u(D(v)),style:x({backgroundColor:r.color}),onClick:c},[V("span",{class:u(D(i).e("content"))},[k(r.$slots,"default")],2),r.closable?(f(),L(D(Ve),{key:0,class:u(D(i).e("close")),onClick:B(l,["stop"])},{default:$(()=>[N(D(et))]),_:1},8,["class","onClick"])):T("v-if",!0)],6)):(f(),L(al,{key:1,name:`${D(i).namespace.value}-zoom-in-center`,appear:""},{default:$(()=>[V("span",{class:u(D(v)),style:x({backgroundColor:r.color}),onClick:c},[V("span",{class:u(D(i).e("content"))},[k(r.$slots,"default")],2),r.closable?(f(),L(D(Ve),{key:0,class:u(D(i).e("close")),onClick:B(l,["stop"])},{default:$(()=>[N(D(et))]),_:1},8,["class","onClick"])):T("v-if",!0)],6)]),_:3},8,["name"]))}});var Gl=re(ql,[["__file","tag.vue"]]);const Ql=mt(Gl),yt=Symbol("ElSelectGroup"),Ce=Symbol("ElSelect");function Jl(e,n){const o=he(Ce),y=he(yt,{disabled:!1}),i=d(()=>o.props.multiple?m(o.props.modelValue,e.value):m([o.props.modelValue],e.value)),v=d(()=>{if(o.props.multiple){const p=o.props.modelValue||[];return!i.value&&p.length>=o.props.multipleLimit&&o.props.multipleLimit>0}else return!1}),l=d(()=>e.label||(Y(e.value)?"":e.value)),c=d(()=>e.value||e.label||""),r=d(()=>e.disabled||n.groupDisabled||v.value),g=ke(),m=(p=[],b)=>{if(Y(e.value)){const a=o.props.valueKey;return p&&p.some(R=>ut(G(R,a))===G(b,a))}else return p&&p.includes(b)},S=()=>{!e.disabled&&!y.disabled&&(o.states.hoveringIndex=o.optionsArray.indexOf(g.proxy))},C=p=>{const b=new RegExp(Al(p),"i");n.visible=b.test(l.value)||e.created};return Q(()=>l.value,()=>{!e.created&&!o.props.remote&&o.setSelected()}),Q(()=>e.value,(p,b)=>{const{remote:a,valueKey:R}=o.props;if(ye(p,b)||(o.onOptionDestroy(b,g.proxy),o.onOptionCreate(g.proxy)),!e.created&&!a){if(R&&Y(p)&&Y(b)&&p[R]===b[R])return;o.setSelected()}}),Q(()=>y.disabled,()=>{n.groupDisabled=y.disabled},{immediate:!0}),{select:o,currentLabel:l,currentValue:c,itemSelected:i,isDisabled:r,hoverItem:S,updateOption:C}}const Xl=J({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const n=_("select"),o=bt(),y=d(()=>[n.be("dropdown","item"),n.is("disabled",D(c)),n.is("selected",D(l)),n.is("hovering",D(C))]),i=Se({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:v,itemSelected:l,isDisabled:c,select:r,hoverItem:g,updateOption:m}=Jl(e,i),{visible:S,hover:C}=dt(i),p=ke().proxy;r.onOptionCreate(p),il(()=>{const a=p.value,{selected:R}=r.states,ue=(r.props.multiple?R:[R]).some(de=>de.value===p.value);j(()=>{r.states.cachedOptions.get(a)===p&&!ue&&r.states.cachedOptions.delete(a)}),r.onOptionDestroy(a,p)});function b(){e.disabled!==!0&&i.groupDisabled!==!0&&r.handleOptionSelect(p)}return{ns:n,id:o,containerKls:y,currentLabel:v,itemSelected:l,isDisabled:c,select:r,hoverItem:g,updateOption:m,visible:S,hover:C,selectOptionClick:b,states:i}}}),Yl=["id","aria-disabled","aria-selected"];function Zl(e,n,o,y,i,v){return ie((f(),E("li",{id:e.id,class:u(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:n[0]||(n[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:n[1]||(n[1]=B((...l)=>e.selectOptionClick&&e.selectOptionClick(...l),["stop"]))},[k(e.$slots,"default",{},()=>[V("span",null,z(e.currentLabel),1)])],42,Yl)),[[$e,e.visible]])}var Me=re(Xl,[["render",Zl],["__file","option.vue"]]);const xl=J({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=he(Ce),n=_("select"),o=d(()=>e.props.popperClass),y=d(()=>e.props.multiple),i=d(()=>e.props.fitInputWidth),v=I("");function l(){var c;v.value=`${(c=e.selectRef)==null?void 0:c.offsetWidth}px`}return Re(()=>{l(),q(e.selectRef,l)}),{ns:n,minWidth:v,popperClass:o,isMultiple:y,isFitInputWidth:i}}});function _l(e,n,o,y,i,v){return f(),E("div",{class:u([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:x({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(f(),E("div",{key:0,class:u(e.ns.be("dropdown","header"))},[k(e.$slots,"header")],2)):T("v-if",!0),k(e.$slots,"default"),e.$slots.footer?(f(),E("div",{key:1,class:u(e.ns.be("dropdown","footer"))},[k(e.$slots,"footer")],2)):T("v-if",!0)],6)}var en=re(xl,[["render",_l],["__file","select-dropdown.vue"]]);function tn(e){const n=I(!1);return{handleCompositionStart:()=>{n.value=!0},handleCompositionUpdate:v=>{const l=v.target.value,c=l[l.length-1]||"";n.value=!Sl(c)},handleCompositionEnd:v=>{n.value&&(n.value=!1,Z(e)&&e(v))}}}const ln=11,nn=(e,n)=>{const{t:o}=Cl(),y=bt(),i=_("select"),v=_("input"),l=Se({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),c=I(null),r=I(null),g=I(null),m=I(null),S=I(null),C=I(null),p=I(null),b=I(null),a=I(null),R=I(null),ee=I(null),ue=I(null),{wrapperRef:de,isFocused:De,handleFocus:Ct,handleBlur:Be}=Ol(S,{afterFocus(){e.automaticDropdown&&!w.value&&(w.value=!0,l.menuVisibleOnFocus=!0)},beforeBlur(t){var s,h;return((s=g.value)==null?void 0:s.isFocusInsideContent(t))||((h=m.value)==null?void 0:h.isFocusInsideContent(t))},afterBlur(){w.value=!1,l.menuVisibleOnFocus=!1}}),w=I(!1),te=I(),{form:Le,formItem:le}=wl(),{inputId:Ot}=El(e,{formItemContext:le}),{valueOnClear:wt,isEmptyValue:Et}=Il(e),ce=d(()=>e.disabled||(Le==null?void 0:Le.disabled)),Oe=d(()=>e.multiple?W(e.modelValue)&&e.modelValue.length>0:!Et(e.modelValue)),It=d(()=>e.clearable&&!ce.value&&l.inputHovering&&Oe.value),Fe=d(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Vt=d(()=>i.is("reverse",Fe.value&&w.value)),Ne=d(()=>(le==null?void 0:le.validateState)||""),Tt=d(()=>Vl[Ne.value]),kt=d(()=>e.remote?300:0),ze=d(()=>e.loading?e.loadingText||o("el.select.loading"):e.remote&&!l.inputValue&&l.options.size===0?!1:e.filterable&&l.inputValue&&l.options.size>0&&ne.value===0?e.noMatchText||o("el.select.noMatch"):l.options.size===0?e.noDataText||o("el.select.noData"):null),ne=d(()=>M.value.filter(t=>t.visible).length),M=d(()=>{const t=Array.from(l.options.values()),s=[];return l.optionValues.forEach(h=>{const O=t.findIndex(P=>P.value===h);O>-1&&s.push(t[O])}),s.length>=t.length?s:t}),$t=d(()=>Array.from(l.cachedOptions.values())),Rt=d(()=>{const t=M.value.filter(s=>!s.created).some(s=>s.currentLabel===l.inputValue);return e.filterable&&e.allowCreate&&l.inputValue!==""&&!t}),We=()=>{e.filterable&&Z(e.filterMethod)||e.filterable&&e.remote&&Z(e.remoteMethod)||M.value.forEach(t=>{var s;(s=t.updateOption)==null||s.call(t,l.inputValue)})},Pe=vt(),Mt=d(()=>["small"].includes(Pe.value)?"small":"default"),Dt=d({get(){return w.value&&ze.value!==!1},set(t){w.value=t}}),Bt=d(()=>W(e.modelValue)?e.modelValue.length===0&&!l.inputValue:e.filterable?!l.inputValue:!0),Lt=d(()=>{var t;const s=(t=e.placeholder)!=null?t:o("el.select.placeholder");return e.multiple||!Oe.value?s:l.selectedLabel}),Ft=d(()=>st?null:"mouseenter");Q(()=>e.modelValue,(t,s)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(l.inputValue="",pe("")),fe(),!ye(t,s)&&e.validateEvent&&(le==null||le.validate("change").catch(h=>Tl()))},{flush:"post",deep:!0}),Q(()=>w.value,t=>{t?pe(l.inputValue):(l.inputValue="",l.previousQuery=null,l.isBeforeHide=!0),n("visible-change",t)}),Q(()=>l.options.entries(),()=>{var t;if(!pt)return;const s=((t=c.value)==null?void 0:t.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!kl(e.modelValue)||!Array.from(s).includes(document.activeElement))&&fe(),e.defaultFirstOption&&(e.filterable||e.remote)&&ne.value&&Ke()},{flush:"post"}),Q(()=>l.hoveringIndex,t=>{$l(t)&&t>-1?te.value=M.value[t]||{}:te.value={},M.value.forEach(s=>{s.hover=te.value===s})}),rl(()=>{l.isBeforeHide||We()});const pe=t=>{l.previousQuery!==t&&(l.previousQuery=t,e.filterable&&Z(e.filterMethod)?e.filterMethod(t):e.filterable&&e.remote&&Z(e.remoteMethod)&&e.remoteMethod(t),e.defaultFirstOption&&(e.filterable||e.remote)&&ne.value?j(Ke):j(Nt))},Ke=()=>{const t=M.value.filter(O=>O.visible&&!O.disabled&&!O.states.groupDisabled),s=t.find(O=>O.created),h=t[0];l.hoveringIndex=Xe(M.value,s||h)},fe=()=>{if(e.multiple)l.selectedLabel="";else{const s=Ae(e.modelValue);l.selectedLabel=s.currentLabel,l.selected=s;return}const t=[];W(e.modelValue)&&e.modelValue.forEach(s=>{t.push(Ae(s))}),l.selected=t},Ae=t=>{let s;const h=Ee(t).toLowerCase()==="object",O=Ee(t).toLowerCase()==="null",P=Ee(t).toLowerCase()==="undefined";for(let H=l.cachedOptions.size-1;H>=0;H--){const F=$t.value[H];if(h?G(F.value,e.valueKey)===G(t,e.valueKey):F.value===t){s={value:t,currentLabel:F.currentLabel,get isDisabled(){return F.isDisabled}};break}}if(s)return s;const X=h?t.label:!O&&!P?t:"";return{value:t,currentLabel:X}},Nt=()=>{e.multiple?l.hoveringIndex=M.value.findIndex(t=>l.selected.some(s=>oe(s)===oe(t))):l.hoveringIndex=M.value.findIndex(t=>oe(t)===oe(l.selected))},zt=()=>{l.selectionWidth=r.value.getBoundingClientRect().width},He=()=>{l.calculatorWidth=C.value.getBoundingClientRect().width},Wt=()=>{l.collapseItemWidth=ee.value.getBoundingClientRect().width},we=()=>{var t,s;(s=(t=g.value)==null?void 0:t.updatePopper)==null||s.call(t)},Ue=()=>{var t,s;(s=(t=m.value)==null?void 0:t.updatePopper)==null||s.call(t)},je=()=>{l.inputValue.length>0&&!w.value&&(w.value=!0),pe(l.inputValue)},qe=t=>{if(l.inputValue=t.target.value,e.remote)Ge();else return je()},Ge=ul(()=>{je()},kt.value),se=t=>{ye(e.modelValue,t)||n(gt,t)},Pt=t=>dl(t,s=>!l.disabledOptions.has(s)),Kt=t=>{if(e.multiple&&t.code!==Rl.delete&&t.target.value.length<=0){const s=e.modelValue.slice(),h=Pt(s);if(h<0)return;const O=s[h];s.splice(h,1),n(K,s),se(s),n("remove-tag",O)}},At=(t,s)=>{const h=l.selected.indexOf(s);if(h>-1&&!ce.value){const O=e.modelValue.slice();O.splice(h,1),n(K,O),se(O),n("remove-tag",s.value)}t.stopPropagation(),me()},Qe=t=>{t.stopPropagation();const s=e.multiple?[]:wt.value;if(e.multiple)for(const h of l.selected)h.isDisabled&&s.push(h.value);n(K,s),se(s),l.hoveringIndex=-1,w.value=!1,n("clear"),me()},Je=t=>{if(e.multiple){const s=(e.modelValue||[]).slice(),h=Xe(s,t.value);h>-1?s.splice(h,1):(e.multipleLimit<=0||s.length<e.multipleLimit)&&s.push(t.value),n(K,s),se(s),t.created&&pe(""),e.filterable&&!e.reserveKeyword&&(l.inputValue="")}else n(K,t.value),se(t.value),w.value=!1;me(),!w.value&&j(()=>{ve(t)})},Xe=(t=[],s)=>{if(!Y(s))return t.indexOf(s);const h=e.valueKey;let O=-1;return t.some((P,X)=>ut(G(P,h))===G(s,h)?(O=X,!0):!1),O},ve=t=>{var s,h,O,P,X;const be=W(t)?t[0]:t;let H=null;if(be!=null&&be.value){const F=M.value.filter(_e=>_e.value===be.value);F.length>0&&(H=F[0].$el)}if(g.value&&H){const F=(P=(O=(h=(s=g.value)==null?void 0:s.popperRef)==null?void 0:h.contentRef)==null?void 0:O.querySelector)==null?void 0:P.call(O,`.${i.be("dropdown","wrap")}`);F&&Ml(F,H)}(X=ue.value)==null||X.handleScroll()},Ht=t=>{l.options.set(t.value,t),l.cachedOptions.set(t.value,t),t.disabled&&l.disabledOptions.set(t.value,t)},Ut=(t,s)=>{l.options.get(t)===s&&l.options.delete(t)},{handleCompositionStart:jt,handleCompositionUpdate:qt,handleCompositionEnd:Gt}=tn(t=>qe(t)),Qt=d(()=>{var t,s;return(s=(t=g.value)==null?void 0:t.popperRef)==null?void 0:s.contentRef}),Jt=()=>{l.isBeforeHide=!1,j(()=>ve(l.selected))},me=()=>{var t;(t=S.value)==null||t.focus()},Xt=()=>{Ye()},Yt=t=>{Qe(t)},Ye=t=>{if(w.value=!1,De.value){const s=new FocusEvent("focus",t);j(()=>Be(s))}},Zt=()=>{l.inputValue.length>0?l.inputValue="":w.value=!1},Ze=()=>{ce.value||(st&&(l.inputHovering=!0),l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:w.value=!w.value)},xt=()=>{w.value?M.value[l.hoveringIndex]&&Je(M.value[l.hoveringIndex]):Ze()},oe=t=>Y(t.value)?G(t.value,e.valueKey):t.value,_t=d(()=>M.value.filter(t=>t.visible).every(t=>t.disabled)),el=d(()=>e.multiple?e.collapseTags?l.selected.slice(0,e.maxCollapseTags):l.selected:[]),tl=d(()=>e.multiple?e.collapseTags?l.selected.slice(e.maxCollapseTags):[]:[]),xe=t=>{if(!w.value){w.value=!0;return}if(!(l.options.size===0||ne.value===0)&&!_t.value){t==="next"?(l.hoveringIndex++,l.hoveringIndex===l.options.size&&(l.hoveringIndex=0)):t==="prev"&&(l.hoveringIndex--,l.hoveringIndex<0&&(l.hoveringIndex=l.options.size-1));const s=M.value[l.hoveringIndex];(s.disabled===!0||s.states.groupDisabled===!0||!s.visible)&&xe(t),j(()=>ve(te.value))}},ll=()=>{if(!r.value)return 0;const t=window.getComputedStyle(r.value);return Number.parseFloat(t.gap||"6px")},nl=d(()=>{const t=ll();return{maxWidth:`${ee.value&&e.maxCollapseTags===1?l.selectionWidth-l.collapseItemWidth-t:l.selectionWidth}px`}}),sl=d(()=>({maxWidth:`${l.selectionWidth}px`})),ol=d(()=>({width:`${Math.max(l.calculatorWidth,ln)}px`}));return e.multiple&&!W(e.modelValue)&&n(K,[]),!e.multiple&&W(e.modelValue)&&n(K,""),q(r,zt),q(C,He),q(a,we),q(de,we),q(R,Ue),q(ee,Wt),Re(()=>{fe()}),{inputId:Ot,contentId:y,nsSelect:i,nsInput:v,states:l,isFocused:De,expanded:w,optionsArray:M,hoverOption:te,selectSize:Pe,filteredOptionsCount:ne,resetCalculatorWidth:He,updateTooltip:we,updateTagTooltip:Ue,debouncedOnInputChange:Ge,onInput:qe,deletePrevTag:Kt,deleteTag:At,deleteSelected:Qe,handleOptionSelect:Je,scrollToOption:ve,hasModelValue:Oe,shouldShowPlaceholder:Bt,currentPlaceholder:Lt,mouseEnterEventName:Ft,showClose:It,iconComponent:Fe,iconReverse:Vt,validateState:Ne,validateIcon:Tt,showNewOption:Rt,updateOptions:We,collapseTagSize:Mt,setSelected:fe,selectDisabled:ce,emptyText:ze,handleCompositionStart:jt,handleCompositionUpdate:qt,handleCompositionEnd:Gt,onOptionCreate:Ht,onOptionDestroy:Ut,handleMenuEnter:Jt,handleFocus:Ct,focus:me,blur:Xt,handleBlur:Be,handleClearClick:Yt,handleClickOutside:Ye,handleEsc:Zt,toggleMenu:Ze,selectOption:xt,getValueKey:oe,navigateOptions:xe,dropdownMenuVisible:Dt,showTagList:el,collapseTagList:tl,tagStyle:nl,collapseTagStyle:sl,inputStyle:ol,popperRef:Qt,inputRef:S,tooltipRef:g,tagTooltipRef:m,calculatorRef:C,prefixRef:p,suffixRef:b,selectRef:c,wrapperRef:de,selectionRef:r,scrollbarRef:ue,menuRef:a,tagMenuRef:R,collapseItemRef:ee}};var sn=J({name:"ElOptions",setup(e,{slots:n}){const o=he(Ce);let y=[];return()=>{var i,v;const l=(i=n.default)==null?void 0:i.call(n),c=[];function r(g){W(g)&&g.forEach(m=>{var S,C,p,b;const a=(S=(m==null?void 0:m.type)||{})==null?void 0:S.name;a==="ElOptionGroup"?r(!cl(m.children)&&!W(m.children)&&Z((C=m.children)==null?void 0:C.default)?(p=m.children)==null?void 0:p.default():m.children):a==="ElOption"?c.push((b=m.props)==null?void 0:b.value):W(m.children)&&r(m.children)})}return l.length&&r((v=l[0])==null?void 0:v.children),ye(c,y)||(y=c,o&&(o.states.optionValues=c)),l}}});const on=ft({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:Dl,effect:{type:ge(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:ge(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:zl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:ot,default:pl},fitInputWidth:Boolean,suffixIcon:{type:ot,default:fl},tagType:{...Te.type,default:"info"},tagEffect:{...Te.effect,default:"light"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:ge(String),values:Wl,default:"bottom-start"},fallbackPlacements:{type:ge(Array),default:["bottom-start","top-start","right","left"]},...Bl,...Ll(["ariaLabel"])}),rt="ElSelect",an=J({name:rt,componentName:rt,components:{ElInput:Fl,ElSelectMenu:en,ElOption:Me,ElOptions:sn,ElTag:Ql,ElScrollbar:Kl,ElTooltip:Pl,ElIcon:Ve},directives:{ClickOutside:Hl},props:on,emits:[K,gt,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:n}){const o=nn(e,n);return ct(Ce,Se({props:e,states:o.states,optionsArray:o.optionsArray,handleOptionSelect:o.handleOptionSelect,onOptionCreate:o.onOptionCreate,onOptionDestroy:o.onOptionDestroy,selectRef:o.selectRef,setSelected:o.setSelected})),{...o}}}),rn=["id","name","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],un=["textContent"],dn={key:1};function cn(e,n,o,y,i,v){const l=U("el-tag"),c=U("el-tooltip"),r=U("el-icon"),g=U("el-option"),m=U("el-options"),S=U("el-scrollbar"),C=U("el-select-menu"),p=vl("click-outside");return ie((f(),E("div",{ref:"selectRef",class:u([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),[bl(e.mouseEnterEventName)]:n[16]||(n[16]=b=>e.states.inputHovering=!0),onMouseleave:n[17]||(n[17]=b=>e.states.inputHovering=!1),onClick:n[18]||(n[18]=B((...b)=>e.toggleMenu&&e.toggleMenu(...b),["prevent","stop"]))},[N(c,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:n[15]||(n[15]=b=>e.states.isBeforeHide=!1)},{default:$(()=>{var b;return[V("div",{ref:"wrapperRef",class:u([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(f(),E("div",{key:0,ref:"prefixRef",class:u(e.nsSelect.e("prefix"))},[k(e.$slots,"prefix")],2)):T("v-if",!0),V("div",{ref:"selectionRef",class:u([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?k(e.$slots,"tag",{key:0},()=>[(f(!0),E(tt,null,lt(e.showTagList,a=>(f(),E("div",{key:e.getValueKey(a),class:u(e.nsSelect.e("selected-item"))},[N(l,{closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:x(e.tagStyle),onClose:R=>e.deleteTag(R,a)},{default:$(()=>[V("span",{class:u(e.nsSelect.e("tags-text"))},[k(e.$slots,"label",{label:a.currentLabel,value:a.value},()=>[nt(z(a.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(f(),L(c,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:$(()=>[V("div",{ref:"collapseItemRef",class:u(e.nsSelect.e("selected-item"))},[N(l,{closable:!1,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:x(e.collapseTagStyle)},{default:$(()=>[V("span",{class:u(e.nsSelect.e("tags-text"))}," + "+z(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","effect","style"])],2)]),content:$(()=>[V("div",{ref:"tagMenuRef",class:u(e.nsSelect.e("selection"))},[(f(!0),E(tt,null,lt(e.collapseTagList,a=>(f(),E("div",{key:e.getValueKey(a),class:u(e.nsSelect.e("selected-item"))},[N(l,{class:"in-tooltip",closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",onClose:R=>e.deleteTag(R,a)},{default:$(()=>[V("span",{class:u(e.nsSelect.e("tags-text"))},[k(e.$slots,"label",{label:a.currentLabel,value:a.value},()=>[nt(z(a.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","onClose"])],2))),128))],2)]),_:3},8,["disabled","effect","teleported"])):T("v-if",!0)]):T("v-if",!0),e.selectDisabled?T("v-if",!0):(f(),E("div",{key:1,class:u([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[ie(V("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":n[0]||(n[0]=a=>e.states.inputValue=a),type:"text",name:e.name,class:u([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:x(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((b=e.hoverOption)==null?void 0:b.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:n[1]||(n[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:n[2]||(n[2]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onKeydown:[n[3]||(n[3]=ae(B(a=>e.navigateOptions("next"),["stop","prevent"]),["down"])),n[4]||(n[4]=ae(B(a=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),n[5]||(n[5]=ae(B((...a)=>e.handleEsc&&e.handleEsc(...a),["stop","prevent"]),["esc"])),n[6]||(n[6]=ae(B((...a)=>e.selectOption&&e.selectOption(...a),["stop","prevent"]),["enter"])),n[7]||(n[7]=ae(B((...a)=>e.deletePrevTag&&e.deletePrevTag(...a),["stop"]),["delete"]))],onCompositionstart:n[8]||(n[8]=(...a)=>e.handleCompositionStart&&e.handleCompositionStart(...a)),onCompositionupdate:n[9]||(n[9]=(...a)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...a)),onCompositionend:n[10]||(n[10]=(...a)=>e.handleCompositionEnd&&e.handleCompositionEnd(...a)),onInput:n[11]||(n[11]=(...a)=>e.onInput&&e.onInput(...a)),onClick:n[12]||(n[12]=B((...a)=>e.toggleMenu&&e.toggleMenu(...a),["stop"]))},null,46,rn),[[ml,e.states.inputValue]]),e.filterable?(f(),E("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:u(e.nsSelect.e("input-calculator")),textContent:z(e.states.inputValue)},null,10,un)):T("v-if",!0)],2)),e.shouldShowPlaceholder?(f(),E("div",{key:2,class:u([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[e.hasModelValue?k(e.$slots,"label",{key:0,label:e.currentPlaceholder,value:e.modelValue},()=>[V("span",null,z(e.currentPlaceholder),1)]):(f(),E("span",dn,z(e.currentPlaceholder),1))],2)):T("v-if",!0)],2),V("div",{ref:"suffixRef",class:u(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(f(),L(r,{key:0,class:u([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:$(()=>[(f(),L(Ie(e.iconComponent)))]),_:1},8,["class"])):T("v-if",!0),e.showClose&&e.clearIcon?(f(),L(r,{key:1,class:u([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:$(()=>[(f(),L(Ie(e.clearIcon)))]),_:1},8,["class","onClick"])):T("v-if",!0),e.validateState&&e.validateIcon?(f(),L(r,{key:2,class:u([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:$(()=>[(f(),L(Ie(e.validateIcon)))]),_:1},8,["class"])):T("v-if",!0)],2)],2)]}),content:$(()=>[N(C,{ref:"menuRef"},{default:$(()=>[e.$slots.header?(f(),E("div",{key:0,class:u(e.nsSelect.be("dropdown","header")),onClick:n[13]||(n[13]=B(()=>{},["stop"]))},[k(e.$slots,"header")],2)):T("v-if",!0),ie(N(S,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:u([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:$(()=>[e.showNewOption?(f(),L(g,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):T("v-if",!0),N(m,null,{default:$(()=>[k(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[$e,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(f(),E("div",{key:1,class:u(e.nsSelect.be("dropdown","loading"))},[k(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(f(),E("div",{key:2,class:u(e.nsSelect.be("dropdown","empty"))},[k(e.$slots,"empty",{},()=>[V("span",null,z(e.emptyText),1)])],2)):T("v-if",!0),e.$slots.footer?(f(),E("div",{key:3,class:u(e.nsSelect.be("dropdown","footer")),onClick:n[14]||(n[14]=B(()=>{},["stop"]))},[k(e.$slots,"footer")],2)):T("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],16)),[[p,e.handleClickOutside,e.popperRef]])}var pn=re(an,[["render",cn],["__file","select.vue"]]);const fn=J({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const n=_("select"),o=I(null),y=ke(),i=I([]);ct(yt,Se({...dt(e)}));const v=d(()=>i.value.some(g=>g.visible===!0)),l=g=>{var m,S;return((m=g.type)==null?void 0:m.name)==="ElOption"&&!!((S=g.component)!=null&&S.proxy)},c=g=>{const m=gl(g),S=[];return m.forEach(C=>{var p,b;l(C)?S.push(C.component.proxy):(p=C.children)!=null&&p.length?S.push(...c(C.children)):(b=C.component)!=null&&b.subTree&&S.push(...c(C.component.subTree))}),S},r=()=>{i.value=c(y.subTree)};return Re(()=>{r()}),Nl(o,r,{attributes:!0,subtree:!0,childList:!0}),{groupRef:o,visible:v,ns:n}}});function vn(e,n,o,y,i,v){return ie((f(),E("ul",{ref:"groupRef",class:u(e.ns.be("group","wrap"))},[V("li",{class:u(e.ns.be("group","title"))},z(e.label),3),V("li",null,[V("ul",{class:u(e.ns.b("group"))},[k(e.$slots,"default")],2)])],2)),[[$e,e.visible]])}var St=re(fn,[["render",vn],["__file","option-group.vue"]]);const Sn=mt(pn,{Option:Me,OptionGroup:St}),Cn=ht(Me);ht(St);export{Hl as C,Sn as E,Cn as a,Ql as b};
