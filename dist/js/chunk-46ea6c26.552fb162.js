(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46ea6c26"],{"053c":function(t,e,i){"use strict";i.r(e);var s,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"container--fluid grid-list-md"},[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8"}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("产品列表")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),1==t.user.roleId?i("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),s),[t._v(" 新增产品 ")])]}}],null,!1,3357145338),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-divider"),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-file-input",{attrs:{"show-size":"","truncate-length":"15","prepend-icon":"","prepend-inner-icon":"mdi-camera",label:"Image"},model:{value:t.editedItem.file,callback:function(e){t.$set(t.editedItem,"file",e)},expression:"editedItem.file"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Title"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Price (￥)"},model:{value:t.editedItem.price,callback:function(e){t.$set(t.editedItem,"price",e)},expression:"editedItem.price"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Description"},model:{value:t.editedItem.desc,callback:function(e){t.$set(t.editedItem,"desc",e)},expression:"editedItem.desc"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-textarea",{attrs:{label:"Body"},model:{value:t.editedItem.body,callback:function(e){t.$set(t.editedItem,"body",e)},expression:"editedItem.body"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.editProduct(t.editedItem)}}},[t._v(" Save ")])],1)],1)],1):t._e(),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("你确定要删除这个条目吗?")]),i("v-card-text",[t._v("请注意：我们并不会真正删除，只是对用户隐藏此条目。")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),i("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.image",fn:function(e){var s=e.item;return[i("v-avatar",{staticClass:"blue",attrs:{size:"36"}},[s.image?i("img",{attrs:{src:s.image}}):i("span",{staticClass:"white--text"},[t._v("PGT")])])]}},{key:"item.active",fn:function(e){var s=e.item;return[s.active?i("v-icon",{attrs:{small:""}},[t._v(" mdi-check ")]):i("v-icon",{attrs:{small:""}},[t._v(" mdi-close ")])]}},1==t.user.roleId?{key:"item.actions",fn:function(e){var s=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(s)}}},[t._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(s)}}},[t._v(" mdi-delete ")])]}}:null,{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"}},[t._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)},a=[],o=(i("a4d3"),i("4de4"),i("4160"),i("c975"),i("cca6"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("96cf"),i("1da1")),r=i("ade3"),l=i("2f62");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u=[{text:"ID",value:"id"},{text:"Image",value:"image"},{text:"Title",align:"start",sortable:!1,value:"title"},{text:"Name",value:"name",sortable:!1},{text:"Price (￥)",value:"price"},{text:"Desc",value:"desc",sortable:!1},{text:"Active",value:"active",align:"center",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],h=(s={components:{},computed:{},data:function(){return{headers:u,desserts:[],dialog:!1,dialogDelete:!1,editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}}},Object(r["a"])(s,"computed",d({},Object(l["d"])(["user"]),{formTitle:function(){return-1===this.editedIndex?"新增产品":"编辑产品"}})),Object(r["a"])(s,"watch",{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}}),Object(r["a"])(s,"mounted",(function(){this.getProductList()})),Object(r["a"])(s,"methods",{editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){var t={id:this.editedItem.id,active:!1};this.editProduct(t),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.addProduct(this.editedItem),this.close()},getProductList:function(){var t=this;this.$http.get("/products").then((function(e){200==e.status&&(t.desserts=e.result)}))},addProduct:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.file){t.next=4;break}return t.next=3,api.upload(e.file);case 3:e.image=t.sent;case 4:this.$http.post("/products/add",e).then((function(t){200==t.status&&i.desserts.push(t.result)}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),editProduct:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.file){t.next=4;break}return t.next=3,api.upload(e.file);case 3:e.image=t.sent;case 4:this.$http.post("/products/edit",e).then((function(t){200==t.status&&(i.dialog=!1,i.getProductList())}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}),s),p=h,f=i("2877"),v=i("6544"),m=i.n(v),g=i("8212"),b=i("8336"),y=i("b0af"),x=i("99d9"),w=i("62ad"),I=i("a523"),k=i("8fea"),O=i("169a"),$=i("ce7e"),S=(i("5803"),i("2677")),C=i("cc20"),j=i("80d2"),V=i("d9bd"),_=S["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:()=>[],validator:t=>"object"===typeof t||Array.isArray(t)}},computed:{classes(){return{...S["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce((t,e)=>t+e.size,0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(j["u"])(e,1024===this.base))},internalArrayValue(){return Array.isArray(this.internalValue)?this.internalValue:Object(j["F"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},isMultiple(){return this.$attrs.hasOwnProperty("multiple")},text(){return this.isDirty?this.internalArrayValue.map(t=>{const e=this.truncateText(t.name);return this.showSize?`${e} (${Object(j["u"])(t.size,1024===this.base)})`:e}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&Object(V["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.isMultiple?t:t?[t]:[];Object(j["j"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((t,e)=>this.$createElement(C["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t])):[]},genInput(){const t=S["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))}):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection},on:{click:()=>this.$refs.input.click()}},t)},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}}),A=i("132d"),D=i("0fd9"),T=i("2fa4"),z=i("8654"),P=(i("1681"),i("58df"));const B=Object(P["a"])(z["a"]);var E=B.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...z["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"},genInput(){const t=z["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){z["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),N=i("71d9"),F=i("2a7f"),H=Object(f["a"])(p,n,a,!1,null,"3c82fbf9",null);e["default"]=H.exports;m()(H,{VAvatar:g["a"],VBtn:b["a"],VCard:y["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:w["a"],VContainer:I["a"],VDataTable:k["a"],VDialog:O["a"],VDivider:$["a"],VFileInput:_,VIcon:A["a"],VRow:D["a"],VSpacer:T["a"],VTextField:z["a"],VTextarea:E,VToolbar:N["a"],VToolbarTitle:F["b"]})},1681:function(t,e,i){},"169a":function(t,e,i){"use strict";i("368e");var s=i("480e"),n=i("4ad4"),a=i("b848"),o=i("75eb"),r=i("e707"),l=i("e4d3"),c=i("21be"),d=i("f2e7"),u=i("a293"),h=i("58df"),p=i("d9bd"),f=i("80d2");const v=Object(h["a"])(n["a"],a["a"],o["a"],r["a"],l["a"],c["a"],d["a"]);e["a"]=v.extend({name:"v-dialog",directives:{ClickOutside:u["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(p["d"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===f["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}}},render(t){const e=[],i={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:t=>{t.stopPropagation()}},style:{}};this.fullscreen||(i.style={maxWidth:"none"===this.maxWidth?void 0:Object(f["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(f["g"])(this.width)}),e.push(this.genActivator());let n=t("div",i,this.showLazyContent(this.getContentSlot()));return this.transition&&(n=t("transition",{props:{name:this.transition,origin:this.origin}},[n])),e.push(t("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(s["a"],{props:{root:!0,light:this.light,dark:this.dark}},[n])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},e)}})},2677:function(t,e,i){"use strict";var s=i("8654");e["a"]=s["a"]},"368e":function(t,e,i){},5803:function(t,e,i){},"60da":function(t,e,i){"use strict";var s=i("83ab"),n=i("d039"),a=i("df75"),o=i("7418"),r=i("d1e7"),l=i("7b0b"),c=i("44ad"),d=Object.assign,u=Object.defineProperty;t.exports=!d||n((function(){if(s&&1!==d({b:1},d(u({},"a",{enumerable:!0,get:function(){u(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach((function(t){e[t]=t})),7!=d({},t)[i]||a(d({},e)).join("")!=n}))?function(t,e){var i=l(t),n=arguments.length,d=1,u=o.f,h=r.f;while(n>d){var p,f=c(arguments[d++]),v=u?a(f).concat(u(f)):a(f),m=v.length,g=0;while(m>g)p=v[g++],s&&!h.call(f,p)||(i[p]=f[p])}return i}:d},c975:function(t,e,i){"use strict";var s=i("23e7"),n=i("4d64").indexOf,a=i("a640"),o=i("ae40"),r=[].indexOf,l=!!r&&1/[1].indexOf(1,-0)<0,c=a("indexOf"),d=o("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:l||!c||!d},{indexOf:function(t){return l?r.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},cca6:function(t,e,i){var s=i("23e7"),n=i("60da");s({target:"Object",stat:!0,forced:Object.assign!==n},{assign:n})}}]);
//# sourceMappingURL=chunk-46ea6c26.552fb162.js.map