(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ad14b14"],{"0614":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[t.headerHide?t._e():s("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[s("v-toolbar-title",{staticClass:"headline"},[t._v(" "+t._s(t.title)+" ")]),s("v-spacer"),t._t("widget-header-action",[s("v-btn",{attrs:{icon:""}},[s("v-icon",[t._v(t._s(t.icon))])],1)])],2),t.headerHide?t._e():s("v-divider"),t.paddingHide?t._t("widget-content"):s("v-card-text",[t._t("widget-content")],2)],2)},a=[],i={name:"AppWidget",props:{title:{type:String,default:""},icon:{type:String,default:"mdi-dots-vertical"},headerHide:Boolean,paddingHide:Boolean},data:function(){return{}}},o=i,n=s("2877"),l=s("6544"),c=s.n(l),d=s("40dc"),u=s("8336"),p=s("b0af"),h=s("99d9"),v=s("ce7e"),m=s("132d"),b=s("2fa4"),f=s("2a7f"),_=Object(n["a"])(o,r,a,!1,null,null,null);e["a"]=_.exports;c()(_,{VAppBar:d["a"],VBtn:u["a"],VCard:p["a"],VCardText:h["b"],VDivider:v["a"],VIcon:m["a"],VSpacer:b["a"],VToolbarTitle:f["b"]})},"0798":function(t,e,s){"use strict";s("0c18");var r=s("10d2"),a=s("afdd"),i=s("9d26"),o=s("f2e7"),n=s("7560"),l=s("f40d"),c=s("58df"),d=s("d9bd");e["a"]=Object(c["a"])(r["a"],o["a"],l["a"]).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(i["a"],{props:{color:t}},"$cancel")])},__cachedIcon(){return this.computedIcon?this.$createElement(i["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...r["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||n["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0903":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"container--fluid grid-list-md"},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12"}},[s("v-alert",{attrs:{value:!0,color:"info",outlined:"",dense:""}},[t._v(" "+t._s(t.$t("components.baseOnL18n"))+" "),s("a",{staticClass:"link-type",attrs:{href:"//github.com/kazupon/vue-i18n"}},[t._v("vue-i18n")])])],1),s("v-col",{attrs:{md:"4","offset-md":"4",sm:"8","offset-sm":"2",cols:"12"}},[s("app-widget",{staticClass:"text-center",attrs:{title:t.$t("ui.switch"),icon:"mdi-translate","padding-hide":""}},[s("div",{attrs:{slot:"widget-content"},slot:"widget-content"},t._l(t.locales,(function(e){return s("v-list",{key:e.abbr},[s("v-list-item",{attrs:{ripple:"ripple",target:e.target},on:{click:function(s){return t.setLocale(e.locale)}}},[s("v-list-item-action",[e.locale===t.locale?s("v-icon",{attrs:{color:"success"}},[t._v(" mdi-radiobox-marked ")]):s("v-icon",[t._v(" mdi-radiobox-blank ")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.title))])],1),s("v-list-item-avatar",[t._v(t._s(e.abbr))])],1)],1)})),1)])],1)],1),s("v-row",{attrs:{align:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"8","offset-sm":"2"}},[s("v-btn",{staticClass:"mx-2"},[t._v(" "+t._s(t.$t("ui.default"))+" ")]),s("v-btn",{staticClass:"mx-2",attrs:{color:"primary"}},[t._v(" "+t._s(t.$t("ui.primary"))+" ")]),s("v-btn",{staticClass:"mx-2",attrs:{color:"secondary"}},[t._v(" "+t._s(t.$t("ui.secondary"))+" ")]),s("v-btn",{staticClass:"mx-2",attrs:{color:"success"}},[t._v(" "+t._s(t.$t("ui.success"))+" ")]),s("v-btn",{staticClass:"mx-2",attrs:{color:"error"}},[t._v(" "+t._s(t.$t("ui.error"))+" ")]),s("v-btn",{staticClass:"mx-2",attrs:{color:"warning"}},[t._v(" "+t._s(t.$t("ui.warning"))+" ")]),s("v-btn",{staticClass:"mx-2",attrs:{color:"info"}},[t._v(" "+t._s(t.$t("ui.info"))+" ")])],1),s("v-col",{staticClass:"text-center d-md-flex",attrs:{cols:"12",sm:"8","offset-sm":"2"}},[s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{counter:10,label:t.$t("ui.firstName")}})],1),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{counter:10,label:t.$t("ui.lastName")}})],1),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:t.$t("ui.email")}})],1)],1),s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"8","offset-sm":"2"}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"items",fn:function(e){return[s("td",[t._v(t._s(e.item.name))]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(e.item.calories)+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(e.item.fat)+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(e.item.carbs)+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(e.item.protein)+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(e.item.iron)+" ")])]}}])})],1)],1)],1)},a=[],i=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("96cf"),s("1da1")),o=s("ade3"),n=s("2f62"),l=s("fe07"),c=[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],d=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}],u=s("0614");function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var v={name:"I18n",components:{AppWidget:u["a"]},data:function(){return{locales:l["b"],headers:c,desserts:d}},computed:h({},Object(n["b"])(["locale"])),methods:{setLocale:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("SetLocale",{locale:e});case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},m=v,b=s("2877"),f=s("6544"),_=s.n(f),g=s("0798"),C=s("8336"),x=s("62ad"),y=s("a523"),$=s("8fea"),w=s("132d"),O=s("8860"),B=s("da13"),V=s("1800"),j=s("8270"),k=s("5d23"),I=s("0fd9"),S=s("8654"),L=Object(b["a"])(m,r,a,!1,null,null,null);e["default"]=L.exports;_()(L,{VAlert:g["a"],VBtn:C["a"],VCol:x["a"],VContainer:y["a"],VDataTable:$["a"],VIcon:w["a"],VList:O["a"],VListItem:B["a"],VListItemAction:V["a"],VListItemAvatar:j["a"],VListItemContent:k["b"],VListItemTitle:k["d"],VRow:I["a"],VTextField:S["a"]})},"0c18":function(t,e,s){},f40d:function(t,e,s){"use strict";var r=s("2b0e");e["a"]=r["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);
//# sourceMappingURL=chunk-9ad14b14.fb4c04c6.js.map