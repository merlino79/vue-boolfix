(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4171:function(t,e,r){"use strict";r("f213")},"4b59":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header",{on:{startSearch:t.startSearch}}),0===t.results.movie.length&&0===t.results.tv.length?r("h3",[t._v(" nessun risultato trovato ")]):t._e(),t.results.movie.length>0?r("Main",{attrs:{type:"movie",list:t.results.movie}}):t._e(),t.results.tv.length>0?r("Main",{attrs:{type:"tv",list:t.results.tv}}):t._e()],1)},i=[],s=r("bc3a"),o=r.n(s),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"container d-flex pt-4"},[r("div",{staticClass:"flex-grow-1  "},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.textToSearch,expression:"textToSearch",modifiers:{trim:!0}}],staticClass:"form-control ",attrs:{placeholder:"search....",type:"text"},domProps:{value:t.textToSearch},on:{input:function(e){e.target.composing||(t.textToSearch=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",[r("button",{staticClass:"btn btn-primary ms-3",on:{click:function(e){return t.sendEmit("movie")}}},[t._v("cerca film")])]),r("div",[r("button",{staticClass:"btn btn-primary ms-3",on:{click:function(e){return t.sendEmit("tv")}}},[t._v("cerca serie")])]),r("div",[r("button",{staticClass:"btn btn-primary ms-3",on:{click:function(e){return t.sendEmit("all")}}},[t._v("cerca tutto")])])])])},l=[],u={name:"Header",data:function(){return{textToSearch:""}},methods:{sendEmit:function(t){this.$emit("startSearch",{text:this.textToSearch,type:t})}}},p=u,f=(r("4171"),r("2877")),d=Object(f["a"])(p,c,l,!1,null,"0084c2ca",null),v=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"container"},[r("h1",[t._v(" "+t._s(t.titles[t.type])+" ")]),t._l(t.list,(function(t){return r("Card",{key:t.id,attrs:{card:t}})}))],2)},m=[],b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flip-card"},[r("div",{staticClass:"flip-card-inner"},[r("div",{staticClass:"flip-card-front"},[r("img",{staticStyle:{width:"300px",height:"300px"},attrs:{src:"img_avatar.png",alt:"Avatar"}})]),r("div",{staticClass:"flip-card-back"},[r("h1",[t._v("John Doe")]),r("p",[t._v("Architect & Engineer")]),r("p",[t._v("We love that guy")])])])])])}],y={name:"Card",data:function(){return{flags:["it","en"]}},props:{card:Object}},_=y,x=(r("f7ab"),Object(f["a"])(_,b,g,!1,null,"82a63f44",null)),S=x.exports,O={name:"Main",components:{Card:S},props:{type:String,list:Array},data:function(){return{titles:{movie:"film trovati",tv:"serie tv trovate"}}}},j=O,w=Object(f["a"])(j,h,m,!1,null,"70c44244",null),C=w.exports,P={name:"App",components:{Header:v,Main:C},data:function(){return{apiUrl:"https://api.themoviedb.org/3/search/",apiKey:"1b3eb153fce73eb6b953f7d515b2dc1d",results:{movie:[],tv:[]}}},methods:{startSearch:function(t){this.resetResults(),"all"===t.type?(this.getAPI(t.text,"movie"),this.getAPI(t.text,"tv")):this.getAPI(t.text,t.type)},resetResults:function(){this.results.movie=[],this.results.tv=[]},getAPI:function(t,e){var r=this;""!==t&&o.a.get(this.apiUrl+e,{params:{api_key:this.apiKey,query:t,language:"it-IT"}}).then((function(t){r.results[e]=t.data.results})).catch((function(t){console.log(t)}))}},created:function(){var t=this,e="movie";o.a.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:this.apiKey,language:"it-IT"}}).then((function(r){t.results[e]=r.data.results})).catch((function(t){console.log(t)}))}},T=P,k=(r("5c0b"),Object(f["a"])(T,a,i,!1,null,null,null)),E=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},f213:function(t,e,r){},f7ab:function(t,e,r){"use strict";r("4b59")}});
//# sourceMappingURL=app.6c569d6e.js.map