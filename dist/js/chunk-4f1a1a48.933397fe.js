(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f1a1a48"],{"0798":function(e,l,o){"use strict";o("0c18");var d=o("10d2"),r=o("afdd"),i=o("9d26"),t=o("f2e7"),a=o("7560"),v=o("f40d"),c=o("58df"),s=o("d9bd");l["a"]=Object(c["a"])(d["a"],t["a"],v["a"]).extend({name:"v-alert",props:{border:{type:String,validator(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let e={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible(){if(!this.dismissible)return null;const e=this.iconColor;return this.$createElement(r["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(i["a"],{props:{color:e}},"$cancel")])},__cachedIcon(){return this.computedIcon?this.$createElement(i["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const e={...d["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(e[`v-alert--border-${this.border}`]=!0),e},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||a["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(s["a"])("outline","outlined",this)},methods:{genWrapper(){const e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],l={staticClass:"v-alert__wrapper"};return this.$createElement("div",l,e)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let e={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const l=this.hasText?this.setTextColor:this.setBackgroundColor;e=l(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(e){const l=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[l]):l}})},"0c18":function(e,l,o){},"343a":function(e,l,o){"use strict";var d=o("986d"),r=o.n(d);r.a},"4f78":function(e,l,o){"use strict";o.r(l);var d=function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("v-container",{staticClass:"container--fluid grid-list-md"},[o("v-row",[o("v-col",{staticClass:"flex-grow-1",attrs:{cols:"12"}},[o("v-alert",{attrs:{value:!0,color:"info",outlined:"",dense:""}},[e._v(" "+e._s(e.$t("components.backToTop"))+" ")])],1),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"placeholder-container"},[o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")]),o("div",[e._v("placeholder")])])])],1)],1)},r=[],i={name:"BackToTopDemo",data:function(){return{}}},t=i,a=(o("343a"),o("2877")),v=o("6544"),c=o.n(v),s=o("0798"),h=o("62ad"),n=o("a523"),p=o("0fd9"),_=Object(a["a"])(t,d,r,!1,null,"f8683f46",null);l["default"]=_.exports;c()(_,{VAlert:s["a"],VCol:h["a"],VContainer:n["a"],VRow:p["a"]})},"986d":function(e,l,o){},afdd:function(e,l,o){"use strict";var d=o("8336");l["a"]=d["a"]},f40d:function(e,l,o){"use strict";var d=o("2b0e");l["a"]=d["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);
//# sourceMappingURL=chunk-4f1a1a48.933397fe.js.map