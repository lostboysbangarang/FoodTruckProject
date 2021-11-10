exports.ids = [3];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=login.js.map