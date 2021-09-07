import{B as e,H as l,G as t,r as o,a,f as c,w as u,D as d,F as s,o as i,i as m,t as n,e as r,b,c as h,X as f}from"./vendor.ba7e37c4.js";import{C as k}from"./index.1f76a966.js";import{C as p}from"./index.9162c183.js";import{V as x}from"./index.4d75283b.js";import{C as _}from"./index.6a51aab8.js";import{C as V}from"./index.d6d78035.js";import{a as C}from"./use-translate.ed5e29f0.js";import{u as g}from"./use-refs.3302cfeb.js";import"./with-install.9958dc40.js";import"./use-expose.ecdf2fa3.js";import"./useChildren.6233e7a6.js";import"./index.5d553880.js";import"./Checker.45819098.js";import"./unit.2a41fb1b.js";import"./index.667f321a.js";import"./useParent.7ddf7229.js";import"./constant.4d85ecb9.js";import"./use-route.59eae6fc.js";import"./index.e2ba8582.js";const j=["src"],v={class:"demo-checkbox-buttons"};var z=e({setup(e){const z=C({"zh-CN":{checkbox:"复选框",customIcon:"自定义图标",customIconSize:"自定义大小",customColor:"自定义颜色",customShape:"自定义形状",title3:"复选框组",title4:"限制最大可选数",title5:"搭配单元格组件使用",toggleAll:"全选与反选",checkAll:"全选",inverse:"反选",horizontal:"水平排列",disableLabel:"禁用文本点击"},"en-US":{checkbox:"Checkbox",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",customColor:"Custom Color",customShape:"Custom Shape",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell",toggleAll:"Toggle All",checkAll:"Check All",inverse:"Inverse",horizontal:"Horizontal",disableLabel:"Disable label click"}}),I=l({checkbox1:!0,checkbox2:!0,checkbox3:!0,checkboxShape:!0,checkboxLabel:!0,checboxIcon:!0,list:["a","b"],result:["a","b"],result2:[],result3:[],checkAllResult:[],horizontalResult:[]}),S=t(),[A,U]=g(),y=()=>{var e;null==(e=S.value)||e.toggleAll(!0)},L=()=>{var e;null==(e=S.value)||e.toggleAll()};return(e,l)=>{const t=o("demo-block");return i(),a(s,null,[c(t,{title:d(z)("basicUsage")},{default:u((()=>[c(d(k),{modelValue:d(I).checkbox1,"onUpdate:modelValue":l[0]||(l[0]=e=>d(I).checkbox1=e)},{default:u((()=>[m(n(d(z)("checkbox")),1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),c(t,{title:d(z)("disabled")},{default:u((()=>[c(d(k),{"model-value":!1,disabled:""},{default:u((()=>[m(n(d(z)("checkbox")),1)])),_:1}),c(d(k),{"model-value":!0,disabled:""},{default:u((()=>[m(n(d(z)("checkbox")),1)])),_:1})])),_:1},8,["title"]),c(t,{title:d(z)("customShape")},{default:u((()=>[c(d(k),{modelValue:d(I).checkboxShape,"onUpdate:modelValue":l[1]||(l[1]=e=>d(I).checkboxShape=e),shape:"square"},{default:u((()=>[m(n(d(z)("customShape")),1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),c(t,{title:d(z)("customColor")},{default:u((()=>[c(d(k),{modelValue:d(I).checkbox2,"onUpdate:modelValue":l[2]||(l[2]=e=>d(I).checkbox2=e),"checked-color":"#ee0a24"},{default:u((()=>[m(n(d(z)("customColor")),1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),c(t,{title:d(z)("customIconSize")},{default:u((()=>[c(d(k),{modelValue:d(I).checboxIcon,"onUpdate:modelValue":l[3]||(l[3]=e=>d(I).checboxIcon=e),"icon-size":"24px"},{default:u((()=>[m(n(d(z)("customIconSize")),1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),c(t,{title:d(z)("customIcon")},{default:u((()=>[c(d(k),{modelValue:d(I).checkbox3,"onUpdate:modelValue":l[4]||(l[4]=e=>d(I).checkbox3=e)},{icon:u((({checked:e})=>[r("img",{src:e?"https://img.yzcdn.cn/vant/user-active.png":"https://img.yzcdn.cn/vant/user-inactive.png"},null,8,j)])),default:u((()=>[m(n(d(z)("customIcon"))+" ",1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),c(t,{title:d(z)("disableLabel")},{default:u((()=>[c(d(k),{modelValue:d(I).checkboxLabel,"onUpdate:modelValue":l[5]||(l[5]=e=>d(I).checkboxLabel=e),"label-disabled":""},{default:u((()=>[m(n(d(z)("checkbox")),1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),c(t,{title:d(z)("title3")},{default:u((()=>[c(d(p),{modelValue:d(I).result,"onUpdate:modelValue":l[6]||(l[6]=e=>d(I).result=e)},{default:u((()=>[c(d(k),{name:"a"},{default:u((()=>[m(n(d(z)("checkbox"))+" a",1)])),_:1}),c(d(k),{name:"b"},{default:u((()=>[m(n(d(z)("checkbox"))+" b",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),c(t,{title:d(z)("horizontal")},{default:u((()=>[c(d(p),{modelValue:d(I).horizontalResult,"onUpdate:modelValue":l[7]||(l[7]=e=>d(I).horizontalResult=e),direction:"horizontal"},{default:u((()=>[c(d(k),{name:"a"},{default:u((()=>[m(n(d(z)("checkbox"))+" a",1)])),_:1}),c(d(k),{name:"b"},{default:u((()=>[m(n(d(z)("checkbox"))+" b",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),c(t,{title:d(z)("title4")},{default:u((()=>[c(d(p),{modelValue:d(I).result2,"onUpdate:modelValue":l[8]||(l[8]=e=>d(I).result2=e),max:2},{default:u((()=>[c(d(k),{name:"a"},{default:u((()=>[m(n(d(z)("checkbox"))+" a",1)])),_:1}),c(d(k),{name:"b"},{default:u((()=>[m(n(d(z)("checkbox"))+" b",1)])),_:1}),c(d(k),{name:"c"},{default:u((()=>[m(n(d(z)("checkbox"))+" c",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),c(t,{title:d(z)("toggleAll")},{default:u((()=>[c(d(p),{modelValue:d(I).checkAllResult,"onUpdate:modelValue":l[9]||(l[9]=e=>d(I).checkAllResult=e),ref:(e,l)=>{l.group=e,S.value=e}},{default:u((()=>[c(d(k),{name:"a"},{default:u((()=>[m(n(d(z)("checkbox"))+" a",1)])),_:1}),c(d(k),{name:"b"},{default:u((()=>[m(n(d(z)("checkbox"))+" b",1)])),_:1}),c(d(k),{name:"c"},{default:u((()=>[m(n(d(z)("checkbox"))+" c",1)])),_:1})])),_:1},8,["modelValue"]),r("div",v,[c(d(x),{type:"primary",onClick:y},{default:u((()=>[m(n(d(z)("checkAll")),1)])),_:1}),c(d(x),{type:"primary",onClick:L},{default:u((()=>[m(n(d(z)("inverse")),1)])),_:1})])])),_:1},8,["title"]),c(t,{title:d(z)("title5")},{default:u((()=>[c(d(p),{modelValue:d(I).result3,"onUpdate:modelValue":l[11]||(l[11]=e=>d(I).result3=e)},{default:u((()=>[c(d(_),null,{default:u((()=>[(i(!0),a(s,null,b(d(I).list,((e,t)=>(i(),h(d(V),{clickable:"",key:t,title:`${d(z)("checkbox")} ${e}`,onClick:e=>(e=>{A.value[e].toggle()})(t)},{"right-icon":u((()=>[c(d(k),{ref:d(U)(t),name:e,onClick:l[10]||(l[10]=f((()=>{}),["stop"]))},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"])],64)}}});export{z as default};