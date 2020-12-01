(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b8b241c"],{"0798":function(t,e,n){"use strict";n("0c18");var o=n("10d2"),i=n("afdd"),r=n("9d26"),s=n("f2e7"),a=n("7560"),l=n("f40d"),c=n("58df"),d=n("d9bd");e["a"]=Object(c["a"])(o["a"],s["a"],l["a"]).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(i["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(r["a"],{props:{color:t}},"$cancel")])},__cachedIcon(){return this.computedIcon?this.$createElement(r["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...o["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||a["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,n){},"871b":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"container--fluid grid-list-md"},[n("v-row",[n("v-col",{staticClass:"flex-grow-1",attrs:{cols:"12"}},[n("v-alert",{attrs:{value:!0,color:"info",outlined:"",dense:""}},[t._v(" "+t._s(t.$t("components.tinymceTips"))+" "),n("a",{attrs:{target:"_blank",href:"https://www.tiny.cloud/docs/"}},[t._v(" "+t._s(t.$t("components.documentation"))+" ")])])],1),n("v-col",{staticClass:"flex-grow-1",attrs:{cols:"12"}},[n("tinymce",{attrs:{init:t.options},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("v-col",{staticClass:"flex-grow-1",attrs:{cols:"12"}},[n("div",{staticClass:"editor-content"},[t._v(" "+t._s(t.content)+" ")])])],1)],1)},i=[],r=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),s=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],a=function(t){return-1!==s.indexOf(t)},l=function(t,e,n){Object.keys(e).filter(a).forEach((function(o){var i=e[o];"function"===typeof i&&("onInit"===o?i(t,n):n.on(o.substring(2),(function(t){return i(t,n)})))}))},c=function(t,e){var n,o=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(o)?o.join(" "):o;t.$watch("value",(function(t,o){e&&"string"===typeof t&&t!==n&&t!==o&&(e.setContent(t),n=t)})),e.on(i||"change keyup undo redo",(function(){n=e.getContent(),t.$emit("input",n)}))},d=function(t,e,n){var o=e.$props.value?e.$props.value:"",i=e.$props.initialValue?e.$props.initialValue:"";n.setContent(o||i),e.$listeners.input&&c(e,n),l(t,e.$listeners,n)},u=0,p=function(t){var e=Date.now(),n=Math.floor(1e9*Math.random());return u++,t+"_"+n+u+String(e)},h=function(t){return null!==t&&"textarea"===t.tagName.toLowerCase()},m=function(t){return"undefined"===typeof t||""===t?[]:Array.isArray(t)?t:t.split(" ")},f=function(t,e){return m(t).concat(m(e))},g=function(t,e,n,o){var i=e.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=t,i.addEventListener("load",o),i.src=n,e.head&&e.head.appendChild(i)},b=function(){return{listeners:[],scriptId:p("tiny-script"),scriptLoaded:!1}},v=function(t,e,n,o){t.scriptLoaded?o():(t.listeners.push(o),e.getElementById(t.scriptId)||g(t.scriptId,e,n,(function(){t.listeners.forEach((function(t){return t()})),t.scriptLoaded=!0})))},y=n("c4a9"),_={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean},w=function(){return w=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},w.apply(this,arguments)},C=b(),$=function(t,e,n){return t(n||"div",{attrs:{id:e}})},O=function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})},k=function(t){return function(){var e=w({},t.$props.init,{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:f(t.$props.init&&t.$props.init.plugins,t.$props.plugins),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return d(n,t,e)})),t.$props.init&&"function"===typeof t.$props.init.setup&&t.$props.init.setup(e)}});h(t.element)&&(t.element.style.visibility=""),Object(y["a"])().init(e)}},j={props:_,created:function(){this.elementId=this.$props.id||p("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(y["a"])())k(this)();else if(this.element&&this.element.ownerDocument){var t=this.element.ownerDocument,e=this.$props.cloudChannel?this.$props.cloudChannel:"5",n=this.$props.apiKey?this.$props.apiKey:"no-api-key";v(C,t,"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+e+"/tinymce.min.js",k(this))}},beforeDestroy:function(){null!==Object(y["a"])()&&Object(y["a"])().remove(this.editor)},render:function(t){return this.inlineEditor?$(t,this.elementId,this.$props.tagName):O(t,this.elementId)}},S=j,E=n("2f62"),B=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],x=B,D=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],P=D;function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M={name:"TinymceDemo",components:{Tinymce:S},data:function(){return{content:'<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1>\n        <p style="text-align: center; font-size: 15px;">\n        <img\n          title="TinyMCE Logo"\n          src="//www.tinymce.com/images/glyph-tinymce@2x.png"\n          alt="TinyMCE Logo"\n          width="110"\n          height="97"\n        />\n        <ul>\n          <li>Our\n            <a href="//www.tinymce.com/docs/">documentation</a>\n            is a great resource for learning how to configure TinyMCE.</li>\n          <li>Have a specific question? Visit the\n            <a href="https://community.tinymce.com/forum/">Community Forum</a>.\n          </li>\n          <li>We also offer enterprise grade support as part of\n            <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.\n          </li>\n        </ul>',options:{height:400,language:this.language,language_url:"https://cdn.jsdelivr.net/npm/tinymce-lang/langs/ru.js",body_class:"panel-body",object_resizing:!1,menubar:"file edit insert view format table",toolbar:P,plugins:x,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0}}},computed:I({},Object(E["b"])(["language"]))},T=M,L=n("2877"),V=n("6544"),R=n.n(V),U=n("0798"),K=n("62ad"),z=n("a523"),F=n("0fd9"),N=Object(L["a"])(T,o,i,!1,null,null,null);e["default"]=N.exports;R()(N,{VAlert:U["a"],VCol:K["a"],VContainer:z["a"],VRow:F["a"]})},afdd:function(t,e,n){"use strict";var o=n("8336");e["a"]=o["a"]},c4a9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var o=function(){return"undefined"!==typeof window?window:t},i=function(){var t=o();return t&&t.tinymce?t.tinymce:null}}).call(this,n("c8ba"))},f40d:function(t,e,n){"use strict";var o=n("2b0e");e["a"]=o["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);
//# sourceMappingURL=chunk-8b8b241c.3cc3724e.js.map