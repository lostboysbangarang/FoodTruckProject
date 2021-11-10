exports.ids = [10,3,4];
exports.modules = {

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1fbc6794", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_280fb756_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_280fb756_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_280fb756_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_280fb756_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_280fb756_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Shrikhand&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#logo[data-v-280fb756]{font-family:\"Shrikhand\",cursive;font-size:32px;color:#f5f5f5}.container[data-v-280fb756]{display:flex;justify-content:space-around;width:100vw;background-color:#8fc0a9}.container a[data-v-280fb756]{text-decoration:none}.container a[data-v-280fb756]:link,.container a[data-v-280fb756]:visited{color:inherit}.container header[data-v-280fb756]{align-items:center;max-width:1600px;width:80%;height:60px}.container header[data-v-280fb756],.container header ul[data-v-280fb756]{justify-content:space-between;display:flex}.container header ul[data-v-280fb756]{width:15%;min-width:220px;list-style:none}.container header ul li[data-v-280fb756]{padding:4px 10px;outline:2px solid #4a7c59;cursor:pointer;position:relative;background-color:transparent;z-index:1;color:#68b0ab}.container header ul li[data-v-280fb756]:after{content:\"\";background-color:#faf3dd;width:100%;z-index:-1;position:absolute;height:100%;top:4px;left:4px;transition:.2s}.container header ul li[data-v-280fb756]:hover:after{top:0;left:0}.container header ul.mobile[data-v-280fb756]{flex-direction:column;min-width:60px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/nav.vue?vue&type=template&id=280fb756&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<header data-v-280fb756>","</header>",[_c('nuxt-link',{attrs:{"id":"logo","to":"/"}},[_vm._v("FoodTrucks")]),_vm._ssrNode(" "),_vm._ssrNode("<ul data-v-280fb756>","</ul>",[_vm._ssrNode("<li data-v-280fb756>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_c('ClientOnly',[(!_vm.$auth.$state.loggedIn)?_c('li',[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Login")])],1):_vm._e(),_vm._v(" "),(_vm.$auth.$state.loggedIn)?_c('li',{on:{"click":_vm.logout}},[_vm._v("Logout")]):_vm._e(),_vm._v(" "),(_vm.$auth.$state.loggedIn)?_c('li',[_c('div',[_vm._v(_vm._s(_vm.$auth.$state.user))])]):_vm._e()])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/nav.vue?vue&type=template&id=280fb756&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/nav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var navvue_type_script_lang_js_ = ({
  name: 'NavCard',

  data() {
    return {
      successi: this.$auth.$state.loggedIn,
      mobile: false // subject: this.$auth.$state.user.

    };
  },

  computed: { ...Object(external_vuex_["mapState"])('auth', ['loggedIn', 'user'])
  },

  mounted() {
    this.screenSize();
  },

  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push('/login');
    },

    screenSize() {
      if (false) {}
    }

  }
});
// CONCATENATED MODULE: ./components/nav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_navvue_type_script_lang_js_ = (navvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/nav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_navvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "280fb756",
  "b6fa21a8"
  
)

/* harmony default export */ var nav = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("42dd9d1e", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(50);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(51);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(52);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".form-wrap,.loginBody{background-color:#f5f5f5}.form-wrap{overflow:hidden;display:flex;height:calc(100vh - 60px);justify-content:center;align-self:center;align-items:center;margin:0 auto;width:100%}.form-wrap a{text-decoration:none;color:#4a7c59}.form-wrap .register{margin-bottom:32px}.form-wrap .register .nuxt-link{color:#000}.form-wrap form{padding:0 10px;position:relative;display:flex;z-index:3;flex-direction:column;justify-content:center;align-items:center;flex:1}@media(min-width:1100px){.form-wrap form{padding:0 50px}}.form-wrap form h2{text-align:center;font-size:32px;color:#68b0ab;margin-bottom:40px}@media(min-width:1100px){.form-wrap form h2{font-size:40px}}.form-wrap form .inputs{width:100%;max-width:350px}.form-wrap form .inputs .input{position:relative;display:flex;justify-content:center;align-items:center;margin-bottom:8px}.form-wrap form .inputs .input input{width:100%;border:none;background-color:#faf3dd;padding:4px 4px 4px 30px;height:50px;background-repeat:no-repeat;background-position:8px;background-size:12px auto}.form-wrap form .inputs .input input:focus{outline:none}.form-wrap form .inputs .input input:active{background-color:#faf3dd}.form-wrap form .inputs .input input#email{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.form-wrap form .inputs .input input#password{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.form-wrap form .inputs .input input:-webkit-autofill,.form-wrap form .inputs .input input:-webkit-autofill:active,.form-wrap form .inputs .input input:-webkit-autofill:focus,.form-wrap form .inputs .input input:-webkit-autofill:hover{box-shadow:inset 0 0 0 30px #faf3dd!important}.form-wrap form .inputs .input .icon{width:12px;height:auto;position:absolute;left:6px}.form-wrap .angle{display:none;position:absolute;background-color:#f5f5f5;transform:rotate(9deg);z-index:-1;width:360px;right:-30%;height:110vh}@media(min-width:900px){.form-wrap .angle{display:inline;display:initial}}.form-wrap .background{display:none;flex:2;background-size:cover;background-position:50%;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");width:100%;height:100%}@media(min-width:900px){.form-wrap .background{display:inline;display:initial}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7237e68b9cc61c6a0be3cccbb522e4c6.svg";

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "124293b14a79265320b229766d70f70d.svg";

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loginRegister.9c92d37.jpg";

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/login.vue?vue&type=template&id=dac26ee4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-wrap"},[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('form',{attrs:{"disabled":_vm.loading},on:{"submit":function($event){$event.preventDefault();return _vm.submissive.apply(null, arguments)}}},[_c('p',{staticClass:"register"},[_vm._v("\n\t\t\t\tDon't have an account? Register now:\n\t\t\t\t"),_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Register")])],1),_vm._v(" "),_c('h2',[_vm._v("Login to FoodTrucks")]),_vm._v(" "),_c('div',{staticClass:"inputs"},[_c('div',{staticClass:"input"},[_c('ValidationProvider',{attrs:{"name":"email","rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.email),expression:"form.email"}],attrs:{"id":"email","type":"email","placeholder":"Your Login Email"},domProps:{"value":(_vm.form.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "email", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input-invalid-message"},[_vm._v(_vm._s(errors[0]))])]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"input"},[_c('ValidationProvider',{attrs:{"name":"password","rules":"required|min:6|max:35"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.password),expression:"form.password"}],attrs:{"id":"password","type":"password","placeholder":"Your Login Password"},domProps:{"value":(_vm.form.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "password", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input-invalid-message"},[_vm._v(_vm._s(errors[0]))])]}}],null,true)})],1)]),_vm._v(" "),_c('button',{staticClass:"button",attrs:{"disabled":invalid || _vm.loading}},[_vm._v("Login")]),_vm._v(" "),_c('div',{staticClass:"angle"})])]}}])}),_vm._ssrNode(" <div class=\"background\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/login.vue?vue&type=template&id=dac26ee4&

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'LoginForm',
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },

  data() {
    return {
      error_message: null,
      form: {
        email: '',
        password: '',
        username: ''
      },
      loading: false,
      success: null,
      errored: null
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['isAuthenticated', 'loggedInUser'])
  },

  mounted() {
    document.body.className = "loginBody";
  },

  methods: {
    async submissive(event) {
      /*
      try {
      	this.loading = true
      		await this.$axios
      		.post('api/login', this.form)
      		.then((response) => {
      			console.log(response.data)
      				this.success = response.data.boo
      			this.username =
      				response.data.username
      			this.errored = false
      				console.log(
      				`\nSUCCESS:\t`,
      				this.success
      			)
      		})
      		.catch((error) => {
      			this.errored = true
      			this.error_message =
      				error.response.data
      		})
      		.finally(this.loading === false)
      	console.log(
      		`Authorized to be Seccsi\n`,
      		this.$auth
      	)
      } catch (e) {
      	console.log(`\nERROR ERROR WE GON DIE\n`, e)
      	this.error = e.response.data.message
      }
      */
      // try {
      await this.$auth.loginWith('cookie', {
        data: {
          email: this.form.email,
          password: this.form.password
        }
      }).then(() => {
        // todo: Send them to the logged in page
        this.$router.push('/');
        console.log('logged in', arguments);
      }).catch(error => {
        // todo: Tell the user they did bad
        console.log('login error', error);
      });
      /*
      if (this.success && seccsi) {
      	await this.$auth.setUser(this.username)
      	this.$auth.$state.loggedIn = this.success
      }
      */

      /*
      } catch (e) {
      	console.log(`\nERROR ERROR WE GON DIE\n`, e)
      	this.error = e.response.data.message
      }
      */
    },

    async seccsi() {
      try {
        await external_axios_default.a.get('api/me', this.form).then(response => {
          this.$auth.setUser(response.data);
        });
      } catch (e) {
        console.log(`\nERROR ERROR WE GON DIE\n`, e);
        this.error = e.response.data.message;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5feb2a32"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=c63d4ec2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nav'),_vm._ssrNode(" "),_c('Login')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=c63d4ec2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'RegisterForm' // beforeCreate: {
  //     function() {
  //         document.body.className = "loginPage";
  //     }
  // }

});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f8580b68"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Nav: __webpack_require__(40).default,Login: __webpack_require__(65).default})


/***/ })

};;
//# sourceMappingURL=login.js.map