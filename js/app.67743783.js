(function(){"use strict";var e={1353:function(e,t,r){var n=r(9242),o=r(3396);function s(e,t,r,n,s,c){const a=(0,o.up)("CurrencyConverter"),i=(0,o.up)("CurrenciesCompareList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a),(0,o.Wm)(i)],64)}var c=r(6520);const a={class:"converter"},i={class:"converter__item"},l={for:"from_input"},u=["value"],p=(0,o._)("span",{class:"double-arrows"},"⇄",-1),d={class:"converter__item"},h={for:"to_input"},f=["value"];function v(e,t,r,n,s,c){const v=(0,o.up)("ISelect");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",i,[(0,o._)("label",l,[(0,o._)("input",{id:"from_input",type:"text",onInput:t[0]||(t[0]=t=>e.onChangeDebounced(t,"from")),value:e.converterData.from.value},null,40,u)]),(0,o.Wm)(v,{"options-list":e.commonCurrencySeries,"default-value":e.converterData.from.currency,onSelectedValue:t[1]||(t[1]=t=>e.selectHandler(t,"from"))},null,8,["options-list","default-value"])]),p,(0,o._)("div",d,[(0,o._)("label",h,[(0,o._)("input",{id:"to_input",type:"text",onInput:t[2]||(t[2]=t=>e.onChangeDebounced(t,"to")),value:e.converterData.to.value},null,40,f)]),(0,o.Wm)(v,{"options-list":e.commonCurrencySeries,"default-value":e.converterData.to.currency,onSelectedValue:t[3]||(t[3]=t=>e.selectHandler(t,"to"))},null,8,["options-list","default-value"])])])}var y=r(7327);const m={currencyAPIKey:"9z5TPFV6XrrZkQRozDFqwDqMjQaUAzKG"};var g=m;class C{constructor(){(0,y.Z)(this,"headers",void 0),(0,y.Z)(this,"commonSeries",["USD","EUR","UAH","FJD","BTC","ETB","EGP"]),this.headers=new Headers,this.headers.append("apikey",g.currencyAPIKey)}getSymbols(){const e={method:"GET",redirect:"follow",headers:this.headers};return fetch("https://api.apilayer.com/exchangerates_data/symbols",e)}getConvert(e,t,r){const n={method:"GET",redirect:"follow",headers:this.headers};return fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${t}&from=${e}&amount=${r}`,n)}getCurrencyCompare(e,t){const r={method:"GET",redirect:"follow",headers:this.headers};return fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${t}&base=${e}`,r)}}var b=new C,w=r(7139);const _=["tabindex"],O={key:0,class:"search-box"},S={for:"searchId"},D=["onClick"];function P(e,t,r,s,c,a){return(0,o.wg)(),(0,o.iD)("div",{class:"custom-select",tabindex:e.tabindex,onBlur:t[4]||(t[4]=t=>e.open=!1)},[(0,o._)("div",{class:(0,w.C_)(["selected",{open:e.open}]),onClick:t[0]||(t[0]=t=>e.open=!e.open),onKeydown:t[1]||(t[1]=()=>{})},(0,w.zw)(e.selected),35),(0,o._)("div",{class:(0,w.C_)(["items",{selectHide:!e.open}])},[(0,o.WI)(e.$slots,"option"),e.search?((0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("label",S,[(0,o.wy)((0,o._)("input",{id:"searchId","onUpdate:modelValue":t[2]||(t[2]=t=>e.searchValue=t),type:"text",placeholder:"Start Typing..."},null,512),[[n.nr,e.searchValue]])])])):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.filteredList,((r,n)=>((0,o.wg)(),(0,o.iD)("div",{class:"option",key:n,onClick:t=>e.onChanged(r),onKeydown:t[3]||(t[3]=()=>{})},(0,w.zw)(r),41,D)))),128))],2)],40,_)}var R=r(4815),V=function(e,t,r,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c};let I=class extends c.w3{constructor(...e){super(...e),(0,y.Z)(this,"optionsList",void 0),(0,y.Z)(this,"search",void 0),(0,y.Z)(this,"defaultValue",void 0),(0,y.Z)(this,"selected",""),(0,y.Z)(this,"searchValue",""),(0,y.Z)(this,"open",!1)}mounted(){this.selected=this.defaultValue||""}selectedValue(){return this.selected}onChanged(e){this.selected=e,this.open=!1,this.selectedValue()}get filteredList(){if(this.searchValue.trim().length>0){const e=e=>e.includes(this.searchValue.toUpperCase());return this.optionsList.filter((t=>e(t)))}return this.optionsList}};V([(0,R.fI)(Array)],I.prototype,"optionsList",void 0),V([(0,R.fI)(Boolean)],I.prototype,"search",void 0),V([(0,R.fI)({defaultValue:String,required:!1})],I.prototype,"defaultValue",void 0),V([(0,R.y1)("selected-value")],I.prototype,"selectedValue",null),I=V([(0,c.Ei)({})],I);var j=I,k=r(89);const x=(0,k.Z)(j,[["render",P]]);var Z=x;const L=function(e,t){let r;return function(...n){clearTimeout(r),r=setTimeout((()=>{e.apply(this,n)}),t)}},E=function(e){let t=e;if(Math.abs(t)<1){const e=parseInt(t.toString().split("e-")[1],10);e&&(t*=10**(e-1),t=`0.${new Array(e).join("0")}${t.toString().substring(2)}`)}else{let r=parseInt(e.toString().split("+")[1],10);r>20&&(r-=20,t/=10**r,t+=new Array(r+1).join("0"))}return t};var T=function(e,t,r,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c};let U=class extends c.w3{constructor(...e){super(...e),(0,y.Z)(this,"commonCurrencySeries",b.commonSeries),(0,y.Z)(this,"onChangeDebounced",L(this.onInputChange,400)),(0,y.Z)(this,"converterData",{from:{value:"",currency:"USD"},to:{value:"",currency:"BTC"},exchangeRate:0})}mounted(){this.setCurrencyRateByOne("from")}selectHandler(e,t){this.converterData[t].currency=e,this.setCurrencyRateByOne(t)}onInputChange(e,t){const r=e.target;this.converterData[t].value=+r.value,this.convert(t)}convert(e){const[,,,t]=this.getconverterDataValue(e),r=this.converterData[e].value;let n=0;"to"===e?n=+r*this.converterData.exchangeRate:"from"===e&&(n=+r/this.converterData.exchangeRate),(r||n)&&(this.converterData[t].value=n)}getconverterDataValue(e){const t=this.converterData[e],r=t.currency,n=t.value,[o]=Object.keys(this.converterData).filter((t=>t!==e)),s=this.converterData[o].currency;return[r,s,n,o]}setCurrencyRateByOne(e){const[t,r]=this.getconverterDataValue(e);t&&r&&b.getCurrencyCompare(t,[r]).then((e=>e.text())).then((t=>{const n=JSON.parse(t);this.converterData.exchangeRate=+E(n.rates[r]),this.convert(e)}))}};U=T([(0,c.Ei)({components:{ISelect:Z}})],U);var H=U;const K=(0,k.Z)(H,[["render",v]]);var W=K;const A={class:"compare-wrapper"},B={class:"currencies"},$={class:"currencies__compare compare"},z={class:"item__name"},q={class:"item__value"};function J(e,t,r,n,s,c){const a=(0,o.up)("ISelect"),i=(0,o.up)("Popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",A,[(0,o._)("div",B,[(0,o.Wm)(a,{"options-list":e.selectCurrenciesList,"default-value":"USD",onSelectedValue:e.selectedHandler},null,8,["options-list","onSelectedValue"]),(0,o._)("div",$,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.compareCurrenciesRates,(([e,t])=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:"compare__item item"},[(0,o._)("div",z,(0,w.zw)(e),1),(0,o._)("div",q,(0,w.zw)(t),1)])))),128))])]),(0,o._)("button",{class:"btn-common",onClick:t[0]||(t[0]=(...t)=>e.openPopup&&e.openPopup(...t))},"OPEN POPUP")]),(0,o.Wm)(i,{"is-open":e.isPopupOpen,onClose:e.closePopup},{content:(0,o.w5)((()=>[(0,o.Wm)(a,{"options-list":e.fullyCurrenciesSymbolsList,search:!0,"default-value":"",onSelectedValue:e.searchValue},null,8,["options-list","onSelectedValue"])])),actions:(0,o.w5)((()=>[(0,o._)("button",{class:"btn-common",onClick:t[1]||(t[1]=(...t)=>e.addCurrency&&e.addCurrency(...t))},"Add currency")])),_:1},8,["is-open","onClose"])],64)}const N=(0,o._)("h1",{class:"popup__title"},"Select a currency to add to the comparison list",-1),G={class:"popup__content"},F={class:"popup__actions"};function M(e,t,r,s,c,a){return e.isOpen?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"backdrop",onClick:t[2]||(t[2]=(...t)=>e.close&&e.close(...t)),onKeydown:t[3]||(t[3]=(...t)=>e.handleKeydown&&e.handleKeydown(...t))},[(0,o._)("div",{class:"popup",onClick:t[1]||(t[1]=(0,n.iM)((()=>{}),["stop"]))},[N,(0,o._)("div",G,[(0,o.WI)(e.$slots,"content")]),(0,o._)("footer",F,[(0,o.WI)(e.$slots,"actions"),(0,o._)("button",{class:"btn-common",onClick:t[0]||(t[0]=(...t)=>e.close&&e.close(...t))},"Close")])])],32)):(0,o.kq)("",!0)}var Y=function(e,t,r,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c};let Q=class extends c.w3{constructor(...e){super(...e),(0,y.Z)(this,"isOpen",void 0)}close(){return!0}handleKeydown(e){this.isOpen&&"Escape"===e.key&&this.close()}};Y([(0,R.fI)({isOpen:Boolean,required:!0})],Q.prototype,"isOpen",void 0),Y([(0,R.y1)("close")],Q.prototype,"close",null),Q=Y([(0,c.Ei)({components:{}})],Q);var X=Q;const ee=(0,k.Z)(X,[["render",M]]);var te=ee;class re{constructor(){(0,y.Z)(this,"currenciesKey","carrencyCompare")}getItem(e){return JSON.parse(localStorage.getItem(e)||"")}setItem(e,t){localStorage.setItem(e,JSON.stringify(t))}}var ne=new re,oe=function(e,t,r,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c};let se=class extends c.w3{constructor(...e){super(...e),(0,y.Z)(this,"baseCurrencySelected",void 0),(0,y.Z)(this,"isPopupOpen",!1),(0,y.Z)(this,"fullyCurrenciesSymbolsList",[]),(0,y.Z)(this,"selectCurrenciesList",["USD","EUR","UAH"]),(0,y.Z)(this,"compareCurrenciesList",["USD","EUR","UAH","BTC"]),(0,y.Z)(this,"compareCurrenciesRates",[]),(0,y.Z)(this,"selectedSearchValue",void 0)}mounted(){const e=ne.currenciesKey;try{const t=ne.getItem(e);this.compareCurrenciesList=t}catch(t){ne.setItem(e,this.compareCurrenciesList)}}selectedHandler(e){this.baseCurrencySelected=e,this.compareCurrencies()}compareCurrencies(){b.getCurrencyCompare(this.baseCurrencySelected,this.compareCurrenciesList).then((e=>e.text())).then((e=>{const t=JSON.parse(e);this.compareCurrenciesRates=Object.entries(t.rates)}))}openPopup(){this.fullyCurrenciesSymbolsList.length<1&&b.getSymbols().then((e=>e.text())).then((e=>{const t=JSON.parse(e);this.fullyCurrenciesSymbolsList=Object.keys(t.symbols)})),this.isPopupOpen=!0}closePopup(){this.isPopupOpen=!1}searchValue(e){this.selectedSearchValue=e}addCurrency(){this.selectedSearchValue&&(this.compareCurrenciesList=[...this.compareCurrenciesList,this.selectedSearchValue])}setCompareListToStorage(){console.log("Watch work");const e=ne.currenciesKey;ne.setItem(e,this.compareCurrenciesList)}};oe([(0,R.RL)("compareCurrenciesList")],se.prototype,"setCompareListToStorage",null),se=oe([(0,c.Ei)({components:{ISelect:Z,Popup:te}})],se);var ce=se;const ae=(0,k.Z)(ce,[["render",J]]);var ie=ae,le=function(e,t,r,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(s<3?o(c):s>3?o(t,r,c):o(t,r))||c);return s>3&&c&&Object.defineProperty(t,r,c),c};let ue=class extends c.w3{};ue=le([(0,c.Ei)({components:{CurrencyConverter:W,CurrenciesCompareList:ie}})],ue);var pe=ue;const de=(0,k.Z)(pe,[["render",s]]);var he=de;(0,n.ri)(he).mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,s){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var a=!0,i=0;i<n.length;i++)(!1&s||c>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(a=!1,s<c&&(c=s));if(a){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,c=n[0],a=n[1],i=n[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(i)var u=i(r)}for(t&&t(n);l<c.length;l++)s=c[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},n=self["webpackChunktest"]=self["webpackChunktest"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(1353)}));n=r.O(n)})();
//# sourceMappingURL=app.67743783.js.map