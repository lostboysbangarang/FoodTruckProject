(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{302:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("1fbc6794",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";n(302)},305:function(t,e,n){var o=n(88)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Shrikhand&display=swap);"]),o.push([t.i,'#logo[data-v-280fb756]{font-family:"Shrikhand",cursive;font-size:32px;color:#f5f5f5}.container[data-v-280fb756]{display:flex;justify-content:space-around;width:100vw;background-color:#8fc0a9}.container a[data-v-280fb756]{text-decoration:none}.container a[data-v-280fb756]:link,.container a[data-v-280fb756]:visited{color:inherit}.container header[data-v-280fb756]{align-items:center;max-width:1600px;width:80%;height:60px}.container header[data-v-280fb756],.container header ul[data-v-280fb756]{justify-content:space-between;display:flex}.container header ul[data-v-280fb756]{width:15%;min-width:220px;list-style:none}.container header ul li[data-v-280fb756]{padding:4px 10px;outline:2px solid #4a7c59;cursor:pointer;position:relative;background-color:transparent;z-index:1;color:#68b0ab}.container header ul li[data-v-280fb756]:after{content:"";background-color:#faf3dd;width:100%;z-index:-1;position:absolute;height:100%;top:4px;left:4px;transition:.2s}.container header ul li[data-v-280fb756]:hover:after{top:0;left:0}.container header ul.mobile[data-v-280fb756]{flex-direction:column;min-width:60px}',""]),t.exports=o},306:function(t,e,n){"use strict";n.r(e);n(30),n(25),n(35),n(8),n(52),n(29),n(53);var o=n(9),r=n(15),c=(n(45),n(72));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"NavCard",data:function(){return{successi:this.$auth.$state.loggedIn,mobile:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("auth",["loggedIn","user"])),mounted:function(){this.screenSize()},methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/login");case 3:case"end":return e.stop()}}),e)})))()},screenSize:function(){window.innerWidth<1200&&(this.mobile=!0)}}},f=d,h=(n(304),n(58)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("header",[n("nuxt-link",{attrs:{id:"logo",to:"/"}},[t._v("FoodTrucks")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("ClientOnly",[t.$auth.$state.loggedIn?t._e():n("li",[n("nuxt-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t.$auth.$state.loggedIn?n("li",{on:{click:t.logout}},[t._v("Logout")]):t._e(),t._v(" "),t.$auth.$state.loggedIn?n("li",[n("div",[t._v(t._s(t.$auth.$state.user))])]):t._e()])],1)],1)])}),[],!1,null,"280fb756",null);e.default=component.exports}}]);