(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,6],{302:function(e,t,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(89).default)("1fbc6794",content,!0,{sourceMap:!1})},304:function(e,t,r){"use strict";r(302)},305:function(e,t,r){var o=r(88)(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Shrikhand&display=swap);"]),o.push([e.i,'#logo[data-v-280fb756]{font-family:"Shrikhand",cursive;font-size:32px;color:#f5f5f5}.container[data-v-280fb756]{display:flex;justify-content:space-around;width:100vw;background-color:#8fc0a9}.container a[data-v-280fb756]{text-decoration:none}.container a[data-v-280fb756]:link,.container a[data-v-280fb756]:visited{color:inherit}.container header[data-v-280fb756]{align-items:center;max-width:1600px;width:80%;height:60px}.container header[data-v-280fb756],.container header ul[data-v-280fb756]{justify-content:space-between;display:flex}.container header ul[data-v-280fb756]{width:15%;min-width:220px;list-style:none}.container header ul li[data-v-280fb756]{padding:4px 10px;outline:2px solid #4a7c59;cursor:pointer;position:relative;background-color:transparent;z-index:1;color:#68b0ab}.container header ul li[data-v-280fb756]:after{content:"";background-color:#faf3dd;width:100%;z-index:-1;position:absolute;height:100%;top:4px;left:4px;transition:.2s}.container header ul li[data-v-280fb756]:hover:after{top:0;left:0}.container header ul.mobile[data-v-280fb756]{flex-direction:column;min-width:60px}',""]),e.exports=o},306:function(e,t,r){"use strict";r.r(t);r(30),r(25),r(35),r(8),r(52),r(29),r(53);var o=r(9),n=r(15),l=(r(45),r(72));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={name:"NavCard",data:function(){return{successi:this.$auth.$state.loggedIn,mobile:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.c)("auth",["loggedIn","user"])),mounted:function(){this.screenSize()},methods:{logout:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$auth.logout();case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()},screenSize:function(){window.innerWidth<1200&&(this.mobile=!0)}}},f=c,m=(r(304),r(58)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("header",[r("nuxt-link",{attrs:{id:"logo",to:"/"}},[e._v("FoodTrucks")]),e._v(" "),r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),r("ClientOnly",[e.$auth.$state.loggedIn?e._e():r("li",[r("nuxt-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e._v(" "),e.$auth.$state.loggedIn?r("li",{on:{click:e.logout}},[e._v("Logout")]):e._e(),e._v(" "),e.$auth.$state.loggedIn?r("li",[r("div",[e._v(e._s(e.$auth.$state.user))])]):e._e()])],1)],1)])}),[],!1,null,"280fb756",null);t.default=component.exports},308:function(e,t,r){var content=r(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(89).default)("3dda4c1e",content,!0,{sourceMap:!1})},319:function(e,t,r){"use strict";r(308)},320:function(e,t,r){var o=r(88)(!1);o.push([e.i,".error_message[data-v-7199c18e]{text-align:center;color:red;font-weight:700;margin:10px}",""]),e.exports=o},335:function(e,t,r){"use strict";r.r(t);var o=r(9),n=(r(45),r(8),r(66)),l={name:"RegisterForm",components:{ValidationObserver:n.a,ValidationProvider:n.b},data:function(){return{error_message:"",form:{userName:"",email:"",password:""},loading:!1,success:null,errored:null}},methods:{submitForm:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$axios.post("/api/register",t.form).then((function(e){t.success=!0,t.errored=!1,t.userName=e.data.username,console.log(e.data)})).catch((function(e){t.errored=!0,t.error_message=e.response.data.error})).finally((function(){t.loading=!1}));case 4:return e.next=6,t.$auth.loginWith("local",{data:{email:t.form.email,password:t.form.password}});case 6:if(r=e.sent,!t.success||!r){e.next=12;break}return console.log(t.userName),e.next=11,t.$auth.setUser(t.form.userName);case 11:t.$auth.$state.loggedIn=t.success;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),t.error=e.t0;case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))()}}},d=(r(319),r(58)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"column"},[r("div",{staticClass:"error_message"},[e._v(e._s(e.error_message))]),e._v(" "),r("div",{staticClass:"card"},[r("header",{staticClass:"header"},[e._v("Sign-Up")]),e._v(" "),r("div",{staticClass:"body"},[r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.invalid;return[r("form",{attrs:{disabled:e.loading},on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[r("ValidationProvider",{attrs:{name:"form.userName",rules:"required|min:3|max:35|alphaNum"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("div",{staticClass:"form-group",attrs:{label:"Username:","label-for":"userName"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.userName,expression:"form.userName"}],attrs:{id:"userName",required:"",Placeholder:"Your User Name"},domProps:{value:e.form.userName},on:{input:function(t){t.target.composing||e.$set(e.form,"userName",t.target.value)}}}),e._v(" "),r("span",{staticClass:"input-invalid-message"},[e._v(" "+e._s(o[0])+" ")])])]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"form.email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("div",{staticClass:"form-group",attrs:{label:"Email:","label-for":"email"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{id:"email",required:"",type:"email",Placeholder:"Your Email",rules:"A valid email is required"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),r("span",{staticClass:"input-invalid-message"},[e._v(" "+e._s(o[0])+" ")])])]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"form.password1",rules:"required|min:6|max:35"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("div",{staticClass:"form-group",attrs:{label:"Password:","label-for":"password1"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password1,expression:"form.password1"}],attrs:{id:"password1",type:"password",required:"",Placeholder:"Password",rules:"A valid password is required"},domProps:{value:e.form.password1},on:{input:function(t){t.target.composing||e.$set(e.form,"password1",t.target.value)}}}),e._v(" "),r("span",{staticClass:"input-invalid-message"},[e._v(" "+e._s(o[0])+" ")])])]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"form.password2",rules:"required|min:6|max:35"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("div",{staticClass:"form-group",attrs:{label:"Confirm Password:","label-for":"password2"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password2,expression:"form.password2"}],attrs:{id:"password2",type:"password",required:"",Placeholder:"Confirm Password",rules:"A valid password is required"},domProps:{value:e.form.password2},on:{input:function(t){t.target.composing||e.$set(e.form,"password2",t.target.value)}}}),e._v(" "),r("span",{staticClass:"input-invalid-message"},[e._v(" "+e._s(o[0])+" ")])])]}}],null,!0)}),e._v(" "),r("button",{staticClass:"button",attrs:{disabled:o||e.loading}},[e._v("Submit")])],1)]}}])})],1)])])])])}),[],!1,null,"7199c18e",null);t.default=component.exports},344:function(e,t,r){"use strict";r.r(t);var o={name:"RegisterPage"},n=r(58),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("Nav"),e._v(" "),r("Register")],1)}),[],!1,null,"a1d5ab86",null);t.default=component.exports;installComponents(component,{Nav:r(306).default,Register:r(335).default})}}]);