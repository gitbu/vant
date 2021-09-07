import{e,t,a as d}from"./use-translate.ed5e29f0.js";import{c as a,w as s}from"./with-install.9958dc40.js";import{B as i}from"./index.4d75283b.js";import{R as l,a as o}from"./index.8f5388ef.js";import{T as r}from"./index.de7d568f.js";import{I as n}from"./index.667f321a.js";import{C as c}from"./index.d6d78035.js";import{B as m,f as u,C as b,G as p,r as f,c as j,w as x,D as g,o as T}from"./vendor.ba7e37c4.js";import{T as v}from"./function-call.2531544a.js";import"./constant.4d85ecb9.js";import"./use-route.59eae6fc.js";import"./index.e2ba8582.js";import"./unit.2a41fb1b.js";import"./useChildren.6233e7a6.js";import"./index.5d553880.js";import"./Checker.45819098.js";import"./useParent.7ddf7229.js";import"./mount-component.858fa0c4.js";import"./use-expose.ecdf2fa3.js";import"./index.03bd3dc3.js";import"./interceptor.29d0b3cc.js";import"./use-touch.3bbb1d83.js";import"./event.7d40caae.js";import"./index.6ba73617.js";import"./utils.83cd68fa.js";import"./index.a4c0d7b1.js";import"./use-lazy-render.924a5154.js";import"./on-popup-reopen.fc1de525.js";import"./index.30afc43b.js";const[h,w]=a("address-item");var S=m({name:h,props:{disabled:Boolean,switchable:Boolean,defaultTagText:String,address:{type:Object,required:!0}},emits:["edit","click","select"],setup(t,{slots:d,emit:a}){const s=()=>{t.switchable&&a("select"),a("click")},i=()=>u(n,{name:"edit",class:w("edit"),onClick:e=>{e.stopPropagation(),a("edit"),a("click")}},null),o=()=>{const{address:e,disabled:a,switchable:s}=t,i=[u("div",{class:w("name")},[`${e.name} ${e.tel}`,d.tag?d.tag(t.address):t.address.isDefault&&t.defaultTagText?u(r,{type:"danger",round:!0,class:w("tag")},{default:()=>[t.defaultTagText]}):void 0]),u("div",{class:w("address")},[e.address])];return s&&!a?u(l,{name:e.id,iconSize:18},"function"==typeof(o=i)||"[object Object]"===Object.prototype.toString.call(o)&&!b(o)?i:{default:()=>[i]}):i;var o};return()=>{var a;const{disabled:l}=t;return u("div",{class:w({disabled:l}),onClick:s},[u(c,{border:!1,valueClass:w("value")},{value:o,"right-icon":i}),null==(a=d.bottom)?void 0:a.call(d,e({},t.address,{disabled:l}))])}}});const[k,y,C]=a("address-list");const V=s(m({name:k,props:{modelValue:[Number,String],switchable:t,disabledText:String,addButtonText:String,defaultTagText:String,list:{type:Array,default:()=>[]},disabledList:{type:Array,default:()=>[]}},emits:["add","edit","select","click-item","edit-disabled","select-disabled","update:modelValue"],setup(e,{slots:t,emit:d}){const a=(a,s)=>{if(a)return a.map(((a,i)=>((a,s,i)=>u(S,{key:a.id,address:a,disabled:i,switchable:e.switchable,defaultTagText:e.defaultTagText,onEdit:()=>{d(i?"edit-disabled":"edit",a,s)},onClick:()=>d("click-item",a,s),onSelect:()=>{d(i?"select-disabled":"select",a,s),i||d("update:modelValue",a.id)}},{bottom:t["item-bottom"],tag:t.tag}))(a,i,s)))};return()=>{var s,l;const r=a(e.list),n=a(e.disabledList,!0),c=e.disabledText&&u("div",{class:y("disabled-text")},[e.disabledText]);return u("div",{class:y()},[null==(s=t.top)?void 0:s.call(t),u(o,{modelValue:e.modelValue},(m=r,"function"==typeof m||"[object Object]"===Object.prototype.toString.call(m)&&!b(m)?r:{default:()=>[r]})),c,n,null==(l=t.default)?void 0:l.call(t),u("div",{class:[y("bottom"),"van-safe-area-bottom"]},[u(i,{round:!0,block:!0,type:"danger",text:e.addButtonText||C("add"),class:y("add"),onClick:()=>d("add")},null)])]);var m}}}));var B=m({setup(e){const t=d({"zh-CN":{list:[{id:"1",name:"张三",tel:"13000000000",address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",isDefault:!0},{id:"2",name:"李四",tel:"1310000000",address:"浙江省杭州市拱墅区莫干山路 50 号"}],disabledList:[{id:"3",name:"王五",tel:"1320000000",address:"浙江省杭州市滨江区江南大道 15 号"}],add:"新增地址",edit:"编辑地址",disabledText:"以下地址超出配送范围",defaultTagText:"默认"},"en-US":{list:[{id:"1",name:"John Snow",tel:"13000000000",address:"Somewhere",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000",address:"Somewhere"}],disabledList:[{id:"3",name:"Tywin",tel:"1320000000",address:"Somewhere"}],add:"Add",edit:"Edit",disabledText:"The following address is out of range",defaultTagText:"Default"}}),a=p("1"),s=()=>{v(t("add"))},i=(e,d)=>{v(`${t("edit")}:${d}`)};return(e,d)=>{const l=f("demo-block");return T(),j(l,{title:g(t)("basicUsage")},{default:x((()=>[u(g(V),{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=e=>a.value=e),list:g(t)("list"),"disabled-list":g(t)("disabledList"),"disabled-text":g(t)("disabledText"),"default-tag-text":g(t)("defaultTagText"),onAdd:s,onEdit:i},null,8,["modelValue","list","disabled-list","disabled-text","default-tag-text"])])),_:1},8,["title"])}}});export{B as default};