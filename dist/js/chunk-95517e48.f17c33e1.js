(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95517e48"],{"4bd4":function(t,e,a){"use strict";var i=a("58df"),s=a("7e2b"),r=a("3206");e["a"]=Object(i["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"9c34":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"container--fluid fill-height primary"},[a("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4",lg:"4"}},[a("v-card",{staticClass:"elevation-5 pa-3"},[a("v-card-text",[a("div",{staticClass:"layout column align-center black pb-4"},[a("img",{attrs:{src:"img/icons/pg-logo.jpg",alt:"PG Logo",width:"160",height:"146"}}),a("h1",{staticClass:"text-center mt-1 white--text"},[t._v("PG Sales System")])]),a("v-form",{staticClass:"mt-4"},[a("v-text-field",{attrs:{"append-icon":"mdi-account",name:"username",label:t.$t("login.username"),required:"",autocomplete:"username"},model:{value:t.model.username,callback:function(e){t.$set(t.model,"username",e)},expression:"model.username"}}),a("v-text-field",{attrs:{"append-icon":"mdi-account",name:"email",label:t.$t("login.email"),type:"email",required:"",autocomplete:"username"},model:{value:t.model.email,callback:function(e){t.$set(t.model,"email",e)},expression:"model.email"}}),a("v-text-field",{attrs:{"append-icon":"mdi-lock",name:"password",label:t.$t("login.password"),type:"password",required:"",autocomplete:"new-password"},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}}),a("v-text-field",{attrs:{"append-icon":"mdi-lock",name:"confirm",label:t.$t("login.confirm"),type:"password",required:"",autocomplete:"new-password"},model:{value:t.model.confirm,callback:function(e){t.$set(t.model,"confirm",e)},expression:"model.confirm"}})],1)],1),a("v-card-actions",[a("localization"),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"blue"}},[t._v(" mdi-facebook ")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"red"}},[t._v(" mdi-google ")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"light-blue"}},[t._v(" mdi-twitter ")])],1),a("v-spacer"),a("v-btn",{attrs:{color:"primary",outlined:"",to:"/singin"}},[t._v(" "+t._s(t.$t("login.singIn"))+" ")]),a("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.signup}},[t._v(" "+t._s(t.$t("login.singUp"))+" ")])],1)],1)],1)],1)],1)},s=[],r=(a("96cf"),a("1da1")),o=a("a65d"),n={name:"SingUp",components:{Localization:o["a"]},data:function(){return{loading:!1,model:{}}},methods:{signup:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$store.dispatch("SignUp",this.model);case 3:e=t.sent,this.loading=!1,console.log("result",e),e&&this.$router.push("/dashboard");case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},l=n,d=a("2877"),c=a("6544"),u=a.n(c),m=a("8336"),h=a("b0af"),p=a("99d9"),v=a("62ad"),g=a("a523"),f=a("4bd4"),w=a("132d"),b=a("0fd9"),_=a("2fa4"),$=a("8654"),V=Object(d["a"])(l,i,s,!1,null,null,null);e["default"]=V.exports;u()(V,{VBtn:m["a"],VCard:h["a"],VCardActions:p["a"],VCardText:p["b"],VCol:v["a"],VContainer:g["a"],VForm:f["a"],VIcon:w["a"],VRow:b["a"],VSpacer:_["a"],VTextField:$["a"]})}}]);
//# sourceMappingURL=chunk-95517e48.f17c33e1.js.map