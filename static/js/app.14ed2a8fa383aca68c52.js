webpackJsonp([1],{"/ISw":function(t,a){},"1NXM":function(t,a){},"7kyT":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("header",{staticClass:"header"},[a("h1",{staticClass:"header__tit"},[this._v("農村地方美食小吃特色料理")])])}]};var i=e("VU/8")({name:"Header"},s,!1,function(t){e("Z7+0")},null,null).exports,c=e("lHA8"),r=e.n(c),l=e("Gu7T"),o=e.n(l),M={name:"SnacksCard",props:{cardData:{type:Object,require:!0},mode:{type:String,default:"ListMode",require:!1}}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card",class:{"card-cover":"CardMode"===t.mode}},[e("div",{staticClass:"card__cntr"},[e("h3",{staticClass:"card__tit"},[t._v(t._s(t.cardData.Name))]),t._v(" "),e("div",{staticClass:"card__info"},[e("p",{staticClass:"card__tag"},[t._v(t._s(t.cardData.City))]),t._v(" "),e("p",{staticClass:"card__town"},[e("strong",[t._v(t._s(t.cardData.Town))])])]),t._v(" "),e("p",{staticClass:"card__desc"},[t._v(t._s(t.cardData.HostWords))])]),t._v(" "),e("figure",{staticClass:"card__inner"},[e("img",{staticClass:"card__img",attrs:{src:t.cardData.PicURL,alt:t.cardData.Name}})])])},staticRenderFns:[]};var u=e("VU/8")(M,d,!1,function(t){e("1NXM")},"data-v-392abc5c",null).exports,_={name:"SnacksTable",props:{cardDataList:{type:Array,require:!0},page:{type:Number,default:1}},methods:{countIndex:function(t){return(this.page-1)*this.$Global.NUM_PER_PAGE+(t+1)}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"SnacksTable"},[t._m(0),t._v(" "),e("tbody",{staticClass:"SnacksTable__body"},t._l(t.cardDataList,function(a,n){return e("tr",{key:n,staticClass:"SnacksTable__tr",class:{"SnacksTable__tr--cancel":n%2}},[e("td",{staticClass:"SnacksTable__td text-cancel text-right"},[t._v(t._s(t.countIndex(n)))]),t._v(" "),e("td",{staticClass:"SnacksTable__td text-cancel",attrs:{title:a.City}},[t._v(t._s(a.City))]),t._v(" "),e("td",{staticClass:"SnacksTable__td text-cancel",attrs:{title:a.Town}},[t._v(t._s(a.Town))]),t._v(" "),e("td",{staticClass:"SnacksTable__td",attrs:{title:a.Name}},[t._v(t._s(a.Name))]),t._v(" "),e("td",{staticClass:"SnacksTable__td",attrs:{title:a.Address}},[t._v(t._s(a.Address))])])}),0)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"SnacksTable__head"},[e("tr",{staticClass:"SnacksTable__tr"},[e("th",{staticClass:"SnacksTable__th SnacksTable__num text-cancel"},[t._v("編號")]),t._v(" "),e("th",{staticClass:"SnacksTable__th SnacksTable__city text-cancel"},[t._v("行政區域")]),t._v(" "),e("th",{staticClass:"SnacksTable__th SnacksTable__town text-cancel"},[t._v("鄉鎮區")]),t._v(" "),e("th",{staticClass:"SnacksTable__th SnacksTable__name text-cancel"},[t._v("商家")]),t._v(" "),e("th",{staticClass:"SnacksTable__th SnacksTable__address text-cancel"},[t._v("地址")])])])}]};var T=e("VU/8")(_,g,!1,function(t){e("krme")},"data-v-cf7fd428",null).exports,I={name:"Pagnation",props:["value","listDataLength"],computed:{total:function(){return Math.ceil(this.listDataLength/this.$Global.NUM_PER_PAGE)}},methods:{changePage:function(t){this.$emit("input",t)}}},N={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pagnation"},[e("p",{staticClass:"pagnation__tit"},[t._v("\n    美食頁次 "+t._s(t.value)+" / "+t._s(t.total)+"\n  ")]),t._v(" "),e("div",{staticClass:"pagnation__page"},t._l(t.total,function(a,n){return e("button",{key:n,staticClass:"pagnation__btn",class:{"pagnation__btn--active":a===t.value},attrs:{value:a,type:"button"},on:{click:function(e){return t.changePage(a)}}},[t._v(t._s(a))])}),0)])},staticRenderFns:[]};var m=e("VU/8")(I,N,!1,function(t){e("O4AP")},"data-v-4f843c10",null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"loading"},[a("p",{staticClass:"loading__desc"},[this._v("資料下載中...請稍後！")])])}]};var h=e("VU/8")({name:"Loading"},C,!1,function(t){e("VjeR")},"data-v-604e3f18",null).exports,y={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("select",{staticClass:"SnacksFilter",attrs:{id:t.selectId,name:t.selectId},domProps:{value:t.value},on:{input:function(a){return t.$emit("input",a.target.value)},change:function(a){return t.$emit("select")}}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v(t._s(t.headline))]),t._v(" "),t._l(t.listData,function(a,n){return e("option",{key:n,domProps:{value:a}},[t._v(t._s(a))])})],2)},staticRenderFns:[]};var f=e("VU/8")({name:"SnacksFilter",props:["value","listData","headline","selectId"]},y,!1,function(t){e("7kyT")},null,null).exports,D=e("yepU"),v=e.n(D),A=e("aCEj"),j=e.n(A),p=e("dfjj"),L=e.n(p),w={name:"SnacksMode",data:function(){return{nowMode:"ListMode",modeList:[{id:"ListMode",imgUrl:v.a},{id:"TableMode",imgUrl:j.a},{id:"CardMode",imgUrl:L.a}]}},methods:{clickModehandler:function(t){this.nowMode=t,this.$bus.$emit("changeMode",t)}}},x={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mode"},[e("p",{staticClass:"mode__tit"},[t._v("檢視模式：")]),t._v(" "),e("div",{staticClass:"mode__cntr"},t._l(t.modeList,function(a,n){return e("button",{key:n,staticClass:"mode__btn",class:{"mode__btn--active":a.id===t.nowMode},attrs:{id:a.id,type:"button"},on:{click:function(e){return t.clickModehandler(a.id)}}},[e("img",{staticClass:"mode__icon",attrs:{src:a.imgUrl,alt:a.id}})])}),0)])},staticRenderFns:[]};var S={name:"SnacksList",data:function(){return{mode:"ListMode",isLoading:!1,cardData:[],city:"",town:"",nowPage:1}},created:function(){var t=this;this.getData(),this.$bus.$on("changeMode",function(a){t.mode=a})},methods:{getData:function(){var t=this;this.isLoading=!0,document.body.style.overflow="hidden",fetch("/snacks-vue/static/data/data.json").then(function(t){return t.json()}).then(function(a){t.isLoading=!1,document.body.style.overflow="",t.cardData=a})},getPerPageData:function(t,a){for(var e=[],n=t;n<a&&this.filterData[n];n+=1)e.push(this.filterData[n]);return e},resetPage:function(){this.nowPage=1},resetTown:function(){this.town=""},resetHandler:function(){this.resetPage(),this.resetTown()}},computed:{getSnacksModeClass:function(){switch(this.mode){case"ListMode":return"snacks-list";case"CardMode":return"snacks-card";case"TableMode":return"snacks-table";default:return""}},cityData:function(){return[].concat(o()(new r.a(this.cardData.map(function(t){return t.City}))))},townData:function(){var t=this;return[].concat(o()(new r.a(this.cardData.filter(function(a){return a.City===t.city}).map(function(t){return t.Town}))))},filterCity:function(){var t=this;return this.cardData.filter(function(a){return a.City===t.city})},filterTown:function(){var t=this;return this.filterCity.filter(function(a){return a.Town===t.town})},filterData:function(){return this.city?this.town?this.filterTown:this.filterCity:this.cardData},firstIndexPerPage:function(){return(this.nowPage-1)*this.$Global.NUM_PER_PAGE},lastIndexPerPage:function(){return this.firstIndexPerPage+this.$Global.NUM_PER_PAGE},perPageData:function(){return this.getPerPageData(this.firstIndexPerPage,this.lastIndexPerPage)}},components:{SnacksCard:u,SnacksTable:T,Pagnation:m,Loading:h,SnacksFilter:f,SnacksMode:e("VU/8")(w,x,!1,function(t){e("vfom")},null,null).exports}},b={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"snacks",class:t.getSnacksModeClass},[e("div",{staticClass:"snacks__console"},[e("div",{staticClass:"snacks__filter"},[e("SnacksFilter",{staticClass:"snacks__select",attrs:{"list-data":t.cityData,headline:"請選擇行政區域...","select-id":"FilterCity"},on:{select:t.resetHandler},model:{value:t.city,callback:function(a){t.city=a},expression:"city"}}),t._v(" "),e("SnacksFilter",{staticClass:"snacks__select",attrs:{"list-data":t.townData,headline:"請選擇鄉鎮區...","select-id":"FilterTown"},on:{select:t.resetPage},model:{value:t.town,callback:function(a){t.town=a},expression:"town"}})],1),t._v(" "),e("SnacksMode",{staticClass:"snacks__mode"})],1),t._v(" "),e("div",{staticClass:"snacks__cntr"},["ListMode"===t.mode||"CardMode"===t.mode?e("ul",{staticClass:"snacks__ls"},t._l(t.perPageData,function(a,n){return e("li",{key:n,staticClass:"snacks__li"},[e("SnacksCard",{attrs:{mode:t.mode,"card-data":a}})],1)}),0):"TableMode"===t.mode?e("div",{staticClass:"snacks__table"},[e("SnacksTable",{attrs:{"card-data-list":t.perPageData,page:t.nowPage}})],1):t._e()]),t._v(" "),e("Pagnation",{staticClass:"snacks__pagnation",attrs:{"list-data-length":t.filterData.length},model:{value:t.nowPage,callback:function(a){t.nowPage=a},expression:"nowPage"}}),t._v(" "),t.isLoading?e("Loading"):t._e()],1)},staticRenderFns:[]};var E={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ad"},t._l(t.adData,function(a,n){return e("a",{key:n,staticClass:"ad__link",class:{"ad__link--sticky":n===t.adData.length-1},attrs:{href:"#"}},[e("figure",{staticClass:"ad__inner"},[e("img",{staticClass:"ad__img",attrs:{src:a.imgUrl,alt:a.name}})])])}),0)},staticRenderFns:[]};var k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__cntr container mx-auto"},[a("p",{staticClass:"footer__tit"},[a("strong",[this._v("CMoney 全曜財經資訊")])]),this._v(" "),a("p",{staticClass:"footer__desc"},[this._v("資料來源："),a("span",{staticClass:"footer__src"},[this._v("政府資料開放平台")])])])])}]};var z={name:"App",components:{Header:i,SnacksList:e("VU/8")(S,b,!1,function(t){e("fN3C")},null,null).exports,Ad:e("VU/8")({name:"Ad",data:function(){return{adData:[{name:"adv1",imgUrl:"/snacks-vue/static/images/adv1.png"},{name:"adv2",imgUrl:"/snacks-vue/static/images/adv2.png"},{name:"adv3",imgUrl:"/snacks-vue/static/images/adv3.png"}]}}},E,!1,function(t){e("fxxD")},null,null).exports,Footer:e("VU/8")(null,k,!1,function(t){e("WqdZ")},null,null).exports}},U={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),this._v(" "),a("main",{staticClass:"main container mx-auto"},[a("div",{staticClass:"main__cntr"},[a("SnacksList")],1),this._v(" "),a("aside",{staticClass:"aside"},[a("Ad")],1)]),this._v(" "),a("Footer")],1)},staticRenderFns:[]};var Y=e("VU/8")(z,U,!1,function(t){e("/ISw")},null,null).exports,Z={NUM_PER_PAGE:10},P=e("VU/8")(Z,null,!1,null,null,null).exports;n.a.prototype.$Global=P;var G=new n.a({});Object.defineProperty(n.a.prototype,"$bus",{get:function(){return this.$root.bus}}),n.a.config.productionTip=!1,new n.a({el:"#app",data:function(){return{bus:G}},components:{App:Y},template:"<App/>"})},O4AP:function(t,a){},VjeR:function(t,a){},WqdZ:function(t,a){},"Z7+0":function(t,a){},aCEj:function(t,a){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJhbGlnbi1qdXN0aWZ5IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYWxpZ24tanVzdGlmeSBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQzMiA0MTZIMTZhMTYgMTYgMCAwIDAtMTYgMTZ2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNDE2YTE2IDE2IDAgMCAwIDE2LTE2di0zMmExNiAxNiAwIDAgMC0xNi0xNnptMC0xMjhIMTZhMTYgMTYgMCAwIDAtMTYgMTZ2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNDE2YTE2IDE2IDAgMCAwIDE2LTE2di0zMmExNiAxNiAwIDAgMC0xNi0xNnptMC0xMjhIMTZhMTYgMTYgMCAwIDAtMTYgMTZ2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNDE2YTE2IDE2IDAgMCAwIDE2LTE2di0zMmExNiAxNiAwIDAgMC0xNi0xNnptMC0xMjhIMTZBMTYgMTYgMCAwIDAgMCA0OHYzMmExNiAxNiAwIDAgMCAxNiAxNmg0MTZhMTYgMTYgMCAwIDAgMTYtMTZWNDhhMTYgMTYgMCAwIDAtMTYtMTZ6Ij48L3BhdGg+PC9zdmc+"},dfjj:function(t,a){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ0aC1sYXJnZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXRoLWxhcmdlIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjk2IDMyaDE5MmMxMy4yNTUgMCAyNCAxMC43NDUgMjQgMjR2MTYwYzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNEgyOTZjLTEzLjI1NSAwLTI0LTEwLjc0NS0yNC0yNFY1NmMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjR6bS04MCAwSDI0QzEwLjc0NSAzMiAwIDQyLjc0NSAwIDU2djE2MGMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRoMTkyYzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNFY1NmMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjR6TTAgMjk2djE2MGMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRoMTkyYzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNFYyOTZjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDI0Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR6bTI5NiAxODRoMTkyYzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNFYyOTZjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDI5NmMtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0djE2MGMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjR6Ij48L3BhdGg+PC9zdmc+"},fN3C:function(t,a){},fxxD:function(t,a){},krme:function(t,a){},vfom:function(t,a){},yepU:function(t,a){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ0aC1saXN0IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtdGgtbGlzdCBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE0OS4zMzMgMjE2djgwYzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNEgyNGMtMTMuMjU1IDAtMjQtMTAuNzQ1LTI0LTI0di04MGMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjRoMTAxLjMzM2MxMy4yNTUgMCAyNCAxMC43NDUgMjQgMjR6TTAgMzc2djgwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxMDEuMzMzYzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNHYtODBjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDI0Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR6TTEyNS4zMzMgMzJIMjRDMTAuNzQ1IDMyIDAgNDIuNzQ1IDAgNTZ2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDEwMS4zMzNjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0VjU2YzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNHptODAgNDQ4SDQ4OGMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgyMDUuMzMzYy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0em0tMjQtNDI0djgwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNEg0ODhjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0VjU2YzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgyMDUuMzMzYy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR6bTI0IDI2NEg0ODhjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0di04MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRIMjA1LjMzM2MtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0djgwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNHoiPjwvcGF0aD48L3N2Zz4="}},["NHnr"]);
//# sourceMappingURL=app.14ed2a8fa383aca68c52.js.map