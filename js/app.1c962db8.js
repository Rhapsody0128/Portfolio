(function(t){function e(e){for(var i,c,n=e[0],r=e[1],l=e[2],d=0,u=[];d<n.length;d++)c=n[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);p&&p(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,n=1;n<s.length;n++){var r=s[n];0!==o[r]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=s[0]))}return t}var i={},o={app:0},a=[];function c(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=i,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(s,i,function(e){return t[e]}.bind(null,i));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var p=r;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"04c6":function(t,e,s){"use strict";var i=s("ddfe"),o=s.n(i);o.a},"1bf8":function(t,e,s){},"251e":function(t,e,s){"use strict";var i=s("d8b3"),o=s.n(i);o.a},2587:function(t,e,s){},"4fc1":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"view"}},[s("router-view")],1),s("div",{attrs:{id:"scroll"}})])},a=[],c={},n=c,r=(s("7faf"),s("2877")),l=Object(r["a"])(n,o,a,!1,null,null,null),p=l.exports,d=s("9483");Object(d["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var u=s("8c4f"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("span",{staticClass:"bigtitle",style:t.bigtitle,domProps:{textContent:t._s(t.title)}}),s("my-menu",{attrs:{scroll:t.scroll}}),s("section01",{attrs:{scroll:t.scroll}}),s("section02",{attrs:{scroll:t.scroll}}),s("section03",{attrs:{scroll:t.scroll}}),s("div",{staticClass:"footer",style:t.footer},[s("a",{staticClass:"text",attrs:{href:"https://github.com/Rhapsody0128"}},[t._v("GitHub")]),s("a",{staticClass:"text",attrs:{href:"https://www.cakeresume.com/s--qzuy_7x1N5rA11p9TaK3rA--/rhapsody0128"}},[t._v("CakeResume")]),s("a",{staticClass:"text copyright"},[t._v("Copyright© 2020 賴曜谷 All rights reserved")])])],1)},y=[],f={data:function(){return{scroll:0,scrollBar:{},bigtitle:{},title:"請往下滑",footer:{}}},methods:{getScroll:function(t){var e=window.scrollY;this.scroll=e/145}},watch:{scroll:function(t){t>=8&&t<10?(this.title="簡介",this.bigtitle={opacity:"100%"}):t>25&&t<28?(this.title="技能",this.bigtitle={opacity:"100%"}):t>65&&t<70?(this.title="作品集",this.bigtitle={opacity:"100%"}):t>120?(this.title="謝謝觀賞",this.bigtitle={opacity:"100%"},this.footer={opacity:"100%",height:"7%"}):(this.bigtitle={opacity:"0%"},this.footer={opacity:"0%",height:"0%"})}},mounted:function(){window.addEventListener("scroll",this.getScroll)}},g=f,b=(s("c219"),Object(r["a"])(g,h,y,!1,null,null,null)),x=b.exports;i["a"].use(u["a"]);var m=[{path:"/",name:"Home",component:x}],v=new u["a"]({routes:m}),_=v,w=s("2f62");i["a"].use(w["a"]);var k=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}}),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:t.section01,attrs:{id:"section01"}},[s("div",{style:t.floatText,attrs:{id:"floatText"}},[s("div",{staticClass:"text",style:t.text04},[t._v("但現在，似乎已經不再迷茫了。")]),s("div",{staticClass:"text",style:t.text03},[t._v("雖然偶爾還是會質疑自己，這真的是自己想要的嗎？")]),s("div",{staticClass:"text",style:t.text02},[t._v("跌跌撞撞、迷迷糊糊的踏入這個產業。")]),s("div",{staticClass:"text",style:t.text01},[t._v("曾經，我對人生非常迷惘。")])])])},j=[],F=(s("a9e3"),{data:function(){return{section01:{},floatText:{},text01:{},text02:{},text03:{},text04:{}}},props:{scroll:Number},watch:{scroll:function(t,e){t>10&&(this.section01={display:"none"}),t>8&&t<=10&&(this.section01={opacity:"0",backgroundImage:"url('./images/pic (4).jpeg')"},this.text04={opacity:"0"}),t>6&&t<=8?(this.section01={backgroundImage:"url('./images/pic (4).jpeg')"},this.text01={opacity:"0"},this.text02={opacity:"0"},this.text03={opacity:"0"},this.text04={opacity:"100%"}):t>4&&t<=6?(this.section01={backgroundImage:"url('./images/pic (3).jpeg')"},this.text01={opacity:"0"},this.text02={opacity:"0"},this.text03={opacity:"100%"},this.text04={opacity:"0"}):t>2&&t<=4?(this.section01={backgroundImage:"url('./images/pic (2).jpeg')"},this.text01={opacity:"0"},this.text02={opacity:"100%"},this.text03={opacity:"0"},this.text04={opacity:"0"}):t>=0&&t<=2&&(this.section01={backgroundImage:"url('./images/pic (1).jpeg')"},this.text01={opacity:"100%"},this.text02={opacity:"0"},this.text03={opacity:"0"},this.text04={opacity:"0"}),this.floatText={top:"".concat(49*t-330)+"%"}}}}),P=F,S=(s("64d8"),Object(r["a"])(P,C,j,!1,null,"3d60d5a3",null)),T=S.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:t.section02,attrs:{id:"section02"}},[s("div",{style:t.profile,attrs:{id:"profile"}},[s("span",{staticClass:"title",style:t.title},[t._v("關於我")]),s("span",{staticClass:"text",style:t.text01},[t._v("畢業於國立台東大學應用物理系")]),s("span",{staticClass:"text",style:t.text02},[t._v("參與網頁前端設計課程踏入這行")]),s("span",{staticClass:"text",style:t.text03},[t._v("近二年前端網頁設計開發經驗")]),s("span",{staticClass:"text",style:t.text04},[t._v("喜歡找出問題癥結點並處理")]),s("span",{staticClass:"text",style:t.text05},[t._v("也因興趣在空檔學習各種語言")]),s("span",{staticClass:"text",style:t.text06},[t._v("正在程式/網頁這條路上邁進中")])]),s("div",{style:t.skill,attrs:{id:"skill"}},[s("div",{staticClass:"block",style:t.design,attrs:{id:"design"}},[s("span",{staticClass:"title",style:t.texts[0]},[t._v("視覺設計")]),s("span",{staticClass:"text",style:t.texts[1]},[t._v("Photoshop")]),s("span",{staticClass:"text",style:t.texts[2]},[t._v("Illustrator")]),s("span",{staticClass:"text",style:t.texts[3]},[t._v("Figma")])]),s("div",{staticClass:"block",style:t.frontend,attrs:{id:"frontend"}},[s("span",{staticClass:"title",style:t.texts[4]},[t._v("前端開發")]),s("span",{staticClass:"text",style:t.texts[5]},[t._v("HTML")]),s("span",{staticClass:"text",style:t.texts[6]},[t._v("CSS")]),s("span",{staticClass:"text",style:t.texts[7]},[t._v("JavaScript")]),s("span",{staticClass:"text",style:t.texts[8]},[t._v("Sass")]),s("span",{staticClass:"text",style:t.texts[9]},[t._v("Bootstrap")]),s("span",{staticClass:"text",style:t.texts[10]},[t._v("Stylas")]),s("span",{staticClass:"text",style:t.texts[11]},[t._v("Vue.js")]),s("span",{staticClass:"text",style:t.texts[12]},[t._v("jQuery")])]),s("div",{staticClass:"block",style:t.backend,attrs:{id:"backend"}},[s("span",{staticClass:"title",style:t.texts[13]},[t._v("後端技術")]),s("span",{staticClass:"text",style:t.texts[14]},[t._v("Node.js")]),s("span",{staticClass:"text",style:t.texts[15]},[t._v("MongoDB")]),s("span",{staticClass:"text",style:t.texts[16]},[t._v("RESTful API")])]),s("div",{staticClass:"block",style:t.learning,attrs:{id:"learning"}},[s("span",{staticClass:"title",style:t.texts[17]},[t._v("自學語言")]),s("span",{staticClass:"text",style:t.texts[18]},[t._v("TypeScript")]),s("span",{staticClass:"text",style:t.texts[19]},[t._v("JAVA")]),s("span",{staticClass:"text",style:t.texts[20]},[t._v("Python")]),s("span",{staticClass:"text",style:t.texts[21]},[t._v("WordPress")])]),s("div",{staticClass:"block",style:t.block01,attrs:{id:"block01"}}),s("div",{staticClass:"block",style:t.block02,attrs:{id:"block02"}}),s("div",{staticClass:"block",style:t.block03,attrs:{id:"block03"}})])])},I=[],O=(s("99af"),{data:function(){return{section02:{},profile:{},title:{},text01:{},text02:{},text03:{},text04:{},text05:{},text06:{},skill:{},design:{},frontend:{},learning:{},backend:{},block01:{},block02:{},block03:{},texts:[]}},props:{scroll:Number},watch:{scroll:function(t){if(t-=8,t>1){if(this.section02={display:"flex"},t>2&&t<18){if(this.profile={opacity:"".concat(30*t)+"%"},this.title=t>2?{opacity:"".concat(20*t)+"%"}:{opacity:0},this.text01=t>4?{opacity:"".concat(20*t)+"%"}:{opacity:0},this.text02=t>5?{opacity:"".concat(20*t)+"%"}:{opacity:0},this.text03=t>6?{opacity:"".concat(20*t)+"%"}:{opacity:0},this.text04=t>7?{opacity:"".concat(20*t)+"%"}:{opacity:0},this.text05=t>8?{opacity:"".concat(20*t)+"%"}:{opacity:0},this.text06=t>9?{opacity:"".concat(20*t)+"%"}:{opacity:0},t>=9){var e=t-9;t>=12&&(e=3),this.profile={transform:"rotate(-".concat(2*e,"deg) scale(").concat(1-.08*e,") skew(").concat(8*e,"deg)"),boxShadow:"-0.3rem 0.3rem 0.3rem black",opacity:1}}if(t>=14&&t<18){var s=3,i=t-13;this.profile={transform:"rotate(-".concat(2*s,"deg) scale(").concat(1-.06*s,") skew(").concat(8*s,"deg)"),boxShadow:"-0.3rem 0.3rem 0.3rem black",opacity:"".concat(100-20*i,"%"),margin:"".concat(20*i,"% auto")}}}else this.profile={opacity:"0%"};if(t>=18&&t<54){var o=t-18;this.profile={display:"none"},this.skill={display:"flex"},o<=10.88&&(this.design={top:"".concat(121-10.88*o,"%"),background:"rgba(".concat(255-23*o,",0,237,0.3")},this.block01={top:"".concat(81-7.2*o,"%"),background:"rgba(0,".concat(255-23*o,",237,0.3)")},this.block02={left:"".concat(120-6*o,"%"),transform:"rotate(".concat(20*o,"deg)")},this.backend={opacity:"0"}),o>=10.88&&o<=15&&(this.design={top:"2%",background:"rgba(0,0,237,0.6)"},this.block01={top:"2%",opacity:"0"},this.block02={left:"".concat(120-6*o,"%"),transform:"rotate(".concat(20*o,"deg)")},this.frontend={left:"".concat(15*(o-11.34)-90,"%"),transform:"rotate(".concat(20*o,"deg)")},this.backend={opacity:"".concat((o-11)/3.7)},this.learning={opacity:"".concat((o-18)/3.7)}),o>=15&&(this.learning={opacity:"".concat((o-20)/3.7)},this.frontend={left:"".concat(15*(o-11.34)-90,"%"),transform:"rotate(".concat(20*o,"deg)")},this.block02={left:"".concat(120-6*o,"%"),transform:"rotate(".concat(20*o,"deg)")},this.backend={opacity:"".concat(1-.5*(o-15))},this.block03={top:"".concat(5*(o-15)-44,"% "),transform:"rotate(".concat(25*o,"deg)"),borderRadius:"".concat(3*(o-15),"%")},o>=18&&(this.frontend={left:"15%",transform:"rotate(".concat(158*-(o-18),"deg)")},this.block02={left:"15%",transform:"rotate(".concat(158*-(o-18),"deg)"),opacity:"".concat(1-.3*(o-18))}),o>=20&&(this.frontend={left:"15%",background:"rgba(255,220,50,0.5)"},this.block02={display:"none"}),o>=28.77&&(this.backend={opacity:"".concat(.8*(o-28.7)),background:"rgba(".concat(100*(o-28),",120,0,0.4)")},this.block03={top:"25% ",borderRadius:"50%",opacity:"".concat(30-o)})),this.texts[0]=o>12?{opacity:"100%"}:{opacity:0},this.texts[1]=o>14?{opacity:"100%"}:{opacity:0},this.texts[2]=o>16?{opacity:"100%"}:{opacity:0},this.texts[3]=o>18?{opacity:"100%"}:{opacity:0},this.texts[4]=o>21?{opacity:"100%"}:{opacity:0},this.texts[5]=o>23?{opacity:"100%"}:{opacity:0},this.texts[6]=o>24?{opacity:"100%"}:{opacity:0},this.texts[7]=o>25?{opacity:"100%"}:{opacity:0},this.texts[8]=o>26?{opacity:"100%"}:{opacity:0},this.texts[9]=o>27?{opacity:"100%"}:{opacity:0},this.texts[10]=o>28?{opacity:"100%"}:{opacity:0},this.texts[11]=o>29?{opacity:"100%"}:{opacity:0},this.texts[12]=o>30?{opacity:"100%"}:{opacity:0},this.texts[13]=o>31?{opacity:"100%"}:{opacity:0},this.texts[14]=o>32?{opacity:"100%"}:{opacity:0},this.texts[15]=o>33?{opacity:"100%"}:{opacity:0},this.texts[16]=o>34?{opacity:"100%"}:{opacity:0},this.texts[17]=o>20?{opacity:"100%"}:{opacity:0},this.texts[18]=o>23?{opacity:"100%"}:{opacity:0},this.texts[19]=o>26?{opacity:"100%"}:{opacity:0},this.texts[20]=o>29?{opacity:"100%"}:{opacity:0},this.texts[21]=o>32?{opacity:"100%"}:{opacity:0}}t>54&&t<60?this.section02={top:"".concat(20*-(t-54),"%"),display:"flex"}:t>60&&(this.section02={})}else this.section02={}}}}),E=O,B=(s("04c6"),Object(r["a"])(E,A,I,!1,null,"11c74fb0",null)),N=B.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:t.section03,attrs:{id:"section03"}},t._l(t.datas,(function(e,i){return s("div",{key:i,staticClass:"portfolio"},[t.toggle[i]?s("product",{staticClass:"product",style:t.getProduct(i),attrs:{data:e,index:i},on:{back:function(e){return t.back(e)}}}):t._e(),s("div",{staticClass:"card",style:[t.getCard(i),t.getCardPosition(i)],on:{click:function(e){return t.pick(i)}}},[s("span",{staticClass:"title"},[t._v(t._s(e.title))]),s("span",{staticClass:"text"},[t._v(t._s(e.description))]),s("div",{staticClass:"pic"},[s("img",{attrs:{src:e.littlePic}})])])],1)})),0)},R=[],$={data:function(){return{section03:{},datas:[{title:"Vanessa",description:"Vue.js/MongoDB/Node.js/Stylas/Bootstrap/RESTful API/RWD",src:"https://rhapsody0128.github.io/Vanessa/#/",littlePic:"./images/Vanessa.jpg"},{title:"Music Game",description:"jQuery/JavaScript",src:"https://rhapsody0128.github.io/Front_end_web_development/0407%20js_game/music_game",littlePic:"./images/music.jpg"},{title:"Card Game",description:"jQuery/JavaScript/CSS",src:"https://rhapsody0128.github.io/Front_end_web_development/0420%20jq_card_game/card_game.html",littlePic:"./images/card.jpg"},{title:"Zen Garden",description:"CSS",src:"https://rhapsody0128.github.io/Front_end_web_development/0506%20css_selector_specificity_object-fit_media_query/css_zen_garden/index.html",littlePic:"./images/zenGarden.jpg"},{title:"Just practice",description:"FB SDK/People API/Gmail API/Youtube API/Vue.js",src:"https://rhapsody0128.github.io/Just_practice/",littlePic:"./images/partice.jpg"},{title:"Meme Cat",description:"Node.js/cheerio/linebot",src:"http://line.me/ti/p/@889ieteq",littlePic:"./images/meme.jpg"},{title:"Clock",description:"jQuery/CSS/JavaScript",src:"https://rhapsody0128.github.io/Front_end_web_development/0330%20js_%20Timer/clock.html",littlePic:"./images/clock.jpg"},{title:"Backdrop",description:"CSS/Bootstrap/RWD",src:"https://rhapsody0128.github.io/Front_end_web_development/0528%20bootstrap_component_IV/Backdrop-filter.html",littlePic:"./images/backdrop.jpg"},{title:"Component",description:"CSS/Bootstrap/RWD",src:"https://rhapsody0128.github.io/Front_end_web_development/0527%20bootstrap_component_III/Component.html",littlePic:"./images/component.jpg"},{title:"Login",description:"CSS/Bootstrap/RWD",src:"https://rhapsody0128.github.io/Front_end_web_development/0521%20bootstrap_component_II/login.html",littlePic:"./images/login.jpg"},{title:"layout",description:"CSS/Bootstrap/RWD",src:"https://rhapsody0128.github.io/Front_end_web_development/0520%20bootstrap_component_I/layout.html",littlePic:"./images/layout.jpg"},{title:"AI_MazeGame",description:"Python/AI/PyGame",src:"https://www.youtube.com/",littlePic:"./images/python_mazeAI(7).gif"},{title:"NewsSpider",description:"Python/requests/BeautifulSoup",src:"https://www.youtube.com/",littlePic:"./images/python_newsSpider.gif"},{title:"DiceGame",description:"JAVA/AWT/Swing",src:"https://www.youtube.com/",littlePic:"./images/JAVA_DiceGame.gif"}],card:[],cardPosition:[],product:[],toggle:[]}},props:{scroll:Number},methods:{pick:function(t){this.toggle[t]=!0,this.card[t]={transform:"scale(5)",opacity:"0",pointerEvents:"none"},this.product[t]={opacity:"100%",pointerEvents:"auto"},this.$forceUpdate()},back:function(t){this.toggle[t]=!1,this.product[t]={},this.card[t]={},this.$forceUpdate()},getCard:function(t){return this.card[t]},getCardPosition:function(t){return this.cardPosition[t]},getProduct:function(t){return this.product[t]},cardFlow:function(t,e,s,i,o){var a=s-e;this.cardPosition[t]={left:"".concat(105-a*i,"%"),top:"".concat(o,"%")}}},watch:{scroll:function(t){t-=65,t>0?(this.section03={display:"flex"},t>6&&t<14?this.cardFlow(0,6,t,8,1):t>19?this.cardFlow(0,11,t,8,1):t<6?this.cardFlow(0,0,0,0,0):this.cardFlow(0,6,14,8,1),t>8?this.cardFlow(10,8,t,7,12.1):this.cardFlow(10,0,0,0,0),t>9?this.cardFlow(9,9,t,9,24.2):this.cardFlow(9,0,0,0,0),t>13?this.cardFlow(8,13,t,8,24.2):this.cardFlow(8,0,0,0,0),t>15&&t<23?this.cardFlow(1,15,t,8,12.1):t>28?this.cardFlow(1,20,t,8,12.1):t<15?this.cardFlow(1,0,0,0,0):this.cardFlow(1,15,23,8,12.1),t>16?this.cardFlow(7,16,t,7,1):this.cardFlow(7,0,0,0,0),t>19?this.cardFlow(6,19,t,9,24.2):this.cardFlow(6,0,0,0,0),t>23&&t<31?this.cardFlow(2,23,t,8,24.2):t>36?this.cardFlow(2,28,t,8,24.2):t<23?this.cardFlow(2,0,0,0,0):this.cardFlow(2,23,31,8,24.2),t>24?this.cardFlow(5,24,t,6,12.1):this.cardFlow(5,0,0,0,0),t>26?this.cardFlow(4,26,t,9,1):this.cardFlow(4,0,0,0,0),t>31?this.cardFlow(3,31,t,8,1):this.cardFlow(3,0,0,0,0),t>33?this.cardFlow(11,33,t,7,12.1):this.cardFlow(11,0,0,0,0),t>35?this.cardFlow(12,35,t,8,24.2):this.cardFlow(12,0,0,0,0),t>38?this.cardFlow(13,38,t,9,1):this.cardFlow(13,0,0,0,0)):this.section03={}}},mounted:function(){for(var t=0;t<this.datas.length;t++)this.card.push({}),this.product.push({})}},D=$,G=(s("d60b"),Object(r["a"])(D,J,R,!1,null,"62ff0a7d",null)),M=G.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:t.menu,attrs:{id:"menu"}},[s("div",{staticClass:"col"},[s("div",{staticClass:"title item",on:{click:function(e){return t.To("a")}}},[t._v("首頁")]),s("div",{staticClass:"title item",on:{click:function(e){return t.To("b")}}},[t._v("簡介")]),s("div",{staticClass:"title item",on:{click:function(e){return t.To("c")}}},[t._v("作品集")])])])},W=[],q={data:function(){return{menu:{}}},props:{scroll:Number},methods:{To:function(t){switch(t){case"a":window.scrollTo(0,0);break;case"b":window.scrollTo(0,1300);break;case"c":window.scrollTo(0,1e4);break}}},watch:{scroll:function(t,e){var s=this,i=t-e;i>0?(this.menu={opacity:"0"},setTimeout((function(){s.menu={pointerEvents:"none",opacity:"0"}}),1e3)):this.menu={opacity:"100%",display:"flex",pointerEvents:"auto"}}}},z=q,Q=(s("6c60"),Object(r["a"])(z,V,W,!1,null,null,null)),H=Q.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"product"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"icon",on:{click:function(e){return t.back(t.index)}}}),s("span",{staticClass:"title"},[t._v(t._s(t.data.title))]),s("span",{staticClass:"text"},[t._v(t._s(t.data.description))]),s("iframe",{staticClass:"iframe",attrs:{src:t.data.src}})])])},K=[],U={data:function(){return{}},props:{data:Object,index:Number},methods:{back:function(t){this.$emit("back",t)}}},Y=U,Z=(s("251e"),Object(r["a"])(Y,L,K,!1,null,null,null)),X=Z.exports;i["a"].component("section01",T),i["a"].component("section02",N),i["a"].component("section03",M),i["a"].component("my-menu",H),i["a"].component("product",X),i["a"].config.productionTip=!1,new i["a"]({router:_,store:k,render:function(t){return t(p)}}).$mount("#app")},"64d8":function(t,e,s){"use strict";var i=s("d5b1"),o=s.n(i);o.a},"6c60":function(t,e,s){"use strict";var i=s("2587"),o=s.n(i);o.a},"7faf":function(t,e,s){"use strict";var i=s("b8ff"),o=s.n(i);o.a},b8ff:function(t,e,s){},c219:function(t,e,s){"use strict";var i=s("4fc1"),o=s.n(i);o.a},d5b1:function(t,e,s){},d60b:function(t,e,s){"use strict";var i=s("1bf8"),o=s.n(i);o.a},d8b3:function(t,e,s){},ddfe:function(t,e,s){}});
//# sourceMappingURL=app.1c962db8.js.map