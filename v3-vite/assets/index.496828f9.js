import{C as e}from"./index.d6d78035.js";import{S as l}from"./index.d6c8154b.js";import{a as t}from"./use-translate.ed5e29f0.js";import{T as a}from"./function-call.2531544a.js";import{B as o,G as u,r as n,c as i,w as d,o as m,f as r,D as s}from"./vendor.ba7e37c4.js";import"./with-install.9958dc40.js";import"./use-route.59eae6fc.js";import"./index.667f321a.js";import"./unit.2a41fb1b.js";import"./event.7d40caae.js";import"./interceptor.29d0b3cc.js";import"./number.b01aa591.js";import"./index.5d553880.js";import"./mount-component.858fa0c4.js";import"./use-expose.ecdf2fa3.js";import"./index.03bd3dc3.js";import"./use-touch.3bbb1d83.js";import"./index.6ba73617.js";import"./utils.83cd68fa.js";import"./index.a4c0d7b1.js";import"./use-lazy-render.924a5154.js";import"./on-popup-reopen.fc1de525.js";import"./index.30afc43b.js";import"./index.e2ba8582.js";var p=o({setup(o){const p=t({"zh-CN":{step:"步长设置",range:"限制输入范围",integer:"限制输入整数",roundTheme:"圆角风格",customSize:"自定义大小",beforeChange:"异步变更",disableInput:"禁用输入框",decimalLength:"固定小数位数"},"en-US":{step:"Step",range:"Range",integer:"Integer",roundTheme:"Round Theme",customSize:"Custom Size",beforeChange:"Before Change",disableInput:"Disable Input",decimalLength:"Decimal Length"}}),c=u(1),v=u(1),b=u(1),V=u(1),f=u(1),j=u(1),g=u(1),h=u(1),x=u(1),U=u(1),_=()=>(a.loading({forbidClick:!0}),new Promise((e=>{setTimeout((()=>{a.clear(),e(!0)}),500)})));return(t,a)=>{const o=n("demo-block");return m(),i(o,{card:""},{default:d((()=>[r(s(e),{center:"",title:s(p)("basicUsage")},{value:d((()=>[r(s(l),{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e)},null,8,["modelValue"])])),_:1},8,["title"]),r(s(e),{center:"",title:s(p)("step")},{value:d((()=>[r(s(l),{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=e=>v.value=e),step:"2"},null,8,["modelValue"])])),_:1},8,["title"]),r(s(e),{center:"",title:s(p)("range")},{value:d((()=>[r(s(l),{modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=e=>b.value=e),min:5,max:8},null,8,["modelValue"])])),_:1},8,["title"]),r(s(e),{center:"",title:s(p)("integer")},{value:d((()=>[r(s(l),{modelValue:V.value,"onUpdate:modelValue":a[3]||(a[3]=e=>V.value=e),integer:""},null,8,["modelValue"])])),_:1},8,["title"]),r(s(e),{center:"",title:s(p)("disabled")},{value:d((()=>[r(s(l),{modelValue:f.value,"onUpdate:modelValue":a[4]||(a[4]=e=>f.value=e),disabled:""},null,8,["modelValue"])])),_:1},8,["title"]),r(s(e),{center:"",title:s(p)("disableInput")},{value:d((()=>[r(s(l),{modelValue:U.value,"onUpdate:modelValue":a[5]||(a[5]=e=>U.value=e),"disable-input":""},null,8,["modelValue"])])),_:1},8,["title"]),r(s(e),{center:"",title:s(p)("decimalLength")},{value:d((()=>[r(s(l),{modelValue:h.value,"onUpdate:modelValue":a[6]||(a[6]=e=>h.value=e),"decimal-length":1,step:"0.2"},null,8,["modelValue"])])),_:1},8,["title"]),r(s(e),{center:"",title:s(p)("customSize")},{value:d((()=>[r(s(l),{modelValue:g.value,"onUpdate:modelValue":a[7]||(a[7]=e=>g.value=e),"button-size":"32px","input-width":"40px"},null,8,["modelValue"])])),_:1},8,["title"]),r(s(e),{center:"",title:s(p)("beforeChange")},{value:d((()=>[r(s(l),{modelValue:j.value,"onUpdate:modelValue":a[8]||(a[8]=e=>j.value=e),"before-change":_},null,8,["modelValue"])])),_:1},8,["title"]),r(s(e),{center:"",title:s(p)("roundTheme")},{value:d((()=>[r(s(l),{modelValue:x.value,"onUpdate:modelValue":a[9]||(a[9]=e=>x.value=e),theme:"round","button-size":"22","disable-input":""},null,8,["modelValue"])])),_:1},8,["title"])])),_:1})}}});export{p as default};