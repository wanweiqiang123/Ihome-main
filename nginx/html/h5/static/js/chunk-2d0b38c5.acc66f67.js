(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b38c5"],{"299a":function(e,a,n){"use strict";n.r(a);var t=n("7a23"),r=Object(t["C"])("data-v-72840cd3");Object(t["q"])("data-v-72840cd3");var d=Object(t["d"])("h3",null,"银联支付",-1),u={id:"submit",method:"post",action:"http://test.gnetpg.com:8089/GneteMerchantAPI/api/PayV36"};Object(t["o"])();var p=r((function(e,a,n,r,p,c){return Object(t["n"])(),Object(t["c"])("div",null,[d,Object(t["d"])("button",{onClick:a[1]||(a[1]=function(a){return e.gotoPay()})},"前往支付"),Object(t["d"])("form",u,[Object(t["B"])(Object(t["d"])("input",{type:"hidden",name:"MerId","onUpdate:modelValue":a[2]||(a[2]=function(a){return e.payParam.MerId=a})},null,512),[[t["y"],e.payParam.MerId]]),Object(t["B"])(Object(t["d"])("input",{type:"hidden",name:"OrderNo","onUpdate:modelValue":a[3]||(a[3]=function(a){return e.payParam.OrderNo=a})},null,512),[[t["y"],e.payParam.OrderNo]]),Object(t["B"])(Object(t["d"])("input",{type:"hidden",name:"OrderAmount","onUpdate:modelValue":a[4]||(a[4]=function(a){return e.payParam.OrderAmount=a})},null,512),[[t["y"],e.payParam.OrderAmount]]),Object(t["B"])(Object(t["d"])("input",{type:"hidden",name:"CurrCode","onUpdate:modelValue":a[5]||(a[5]=function(a){return e.payParam.CurrCode=a})},null,512),[[t["y"],e.payParam.CurrCode]]),Object(t["B"])(Object(t["d"])("input",{type:"hidden",name:"OrderType","onUpdate:modelValue":a[6]||(a[6]=function(a){return e.payParam.OrderType=a})},null,512),[[t["y"],e.payParam.OrderType]]),Object(t["B"])(Object(t["d"])("input",{type:"hidden",name:"CallBackUrl","onUpdate:modelValue":a[7]||(a[7]=function(a){return e.payParam.CallBackUrl=a})},null,512),[[t["y"],e.payParam.CallBackUrl]]),Object(t["B"])(Object(t["d"])("input",{type:"hidden",name:"BankCode","onUpdate:modelValue":a[8]||(a[8]=function(a){return e.payParam.BankCode=a})},null,512),[[t["y"],e.payParam.BankCode]]),Object(t["B"])(Object(t["d"])("input",{type:"hidden",name:"LangType","onUpdate:modelValue":a[9]||(a[9]=function(a){return e.payParam.LangType=a})},null,512),[[t["y"],e.payParam.LangType]]),Object(t["B"])(Object(t["d"])("input",{type:"hidden",name:"BuzType","onUpdate:modelValue":a[10]||(a[10]=function(a){return e.payParam.BuzType=a})},null,512),[[t["y"],e.payParam.BuzType]]),Object(t["B"])(Object(t["d"])("input",{type:"hidden",name:"Reserved01","onUpdate:modelValue":a[11]||(a[11]=function(a){return e.payParam.Reserved01=a})},null,512),[[t["y"],e.payParam.Reserved01]]),Object(t["B"])(Object(t["d"])("input",{type:"hidden",name:"Reserved02","onUpdate:modelValue":a[12]||(a[12]=function(a){return e.payParam.Reserved02=a})},null,512),[[t["y"],e.payParam.Reserved02]]),Object(t["B"])(Object(t["d"])("input",{id:"SignMsg",type:"hidden",name:"SignMsg","onUpdate:modelValue":a[13]||(a[13]=function(a){return e.payParam.SignMsg=a})},null,512),[[t["y"],e.payParam.SignMsg]])])])})),c=n("5530"),o=n("c873"),i=Object(t["e"])({name:"Alipay",setup:function(){var e=Object(t["r"])({payParam:{}}),a=Object(t["f"])(),n=a.ctx,r=function(){Object(t["i"])((function(){document.getElementById("submit").submit()}))},d=function(){o["a"].post("/sales-api/finance/payment/getUnionPayParameter",{id:n.$router.currentRoute.value.query.id}).then((function(a){e.payParam=Object(c["a"])({},a.data),r()}))};return Object(t["l"])((function(){d()})),Object(c["a"])(Object(c["a"])({},Object(t["w"])(e)),{},{getPayInfo:d,gotoPay:r})}});i.render=p,i.__scopeId="data-v-72840cd3";a["default"]=i}}]);
//# sourceMappingURL=chunk-2d0b38c5.acc66f67.js.map