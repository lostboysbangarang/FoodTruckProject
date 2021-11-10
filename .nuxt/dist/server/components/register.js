exports.ids = [5];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3dda4c1e", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_7199c18e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_7199c18e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_7199c18e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_7199c18e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_7199c18e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".error_message[data-v-7199c18e]{text-align:center;color:red;font-weight:700;margin:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/register.vue?vue&type=template&id=7199c18e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\" data-v-7199c18e>","</div>",[_vm._ssrNode("<div class=\"column\" data-v-7199c18e>","</div>",[_vm._ssrNode("<div class=\"error_message\" data-v-7199c18e>"+_vm._ssrEscape(_vm._s(_vm.error_message))+"</div> "),_vm._ssrNode("<div class=\"card\" data-v-7199c18e>","</div>",[_vm._ssrNode("<header class=\"header\" data-v-7199c18e>Sign-Up</header> "),_vm._ssrNode("<div class=\"body\" data-v-7199c18e>","</div>",[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('form',{attrs:{"disabled":_vm.loading},on:{"submit":function($event){$event.preventDefault();return _vm.submitForm.apply(null, arguments)}}},[_c('ValidationProvider',{attrs:{"name":"form.userName","rules":"required|min:3|max:35|alphaNum"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group",attrs:{"label":"Username:","label-for":"userName"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.userName),expression:"form.userName"}],attrs:{"id":"userName","required":"","Placeholder":"Your User Name"},domProps:{"value":(_vm.form.userName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "userName", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input-invalid-message"},[_vm._v(" "+_vm._s(errors[0])+" ")])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"form.email","rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group",attrs:{"label":"Email:","label-for":"email"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.email),expression:"form.email"}],attrs:{"id":"email","required":"","type":"email","Placeholder":"Your Email","rules":"A valid email is required"},domProps:{"value":(_vm.form.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "email", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input-invalid-message"},[_vm._v(" "+_vm._s(errors[0])+" ")])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"form.password1","rules":"required|min:6|max:35"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group",attrs:{"label":"Password:","label-for":"password1"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.password1),expression:"form.password1"}],attrs:{"id":"password1","type":"password","required":"","Placeholder":"Password","rules":"A valid password is required"},domProps:{"value":(_vm.form.password1)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "password1", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input-invalid-message"},[_vm._v(" "+_vm._s(errors[0])+" ")])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"form.password2","rules":"required|min:6|max:35"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group",attrs:{"label":"Confirm Password:","label-for":"password2"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.password2),expression:"form.password2"}],attrs:{"id":"password2","type":"password","required":"","Placeholder":"Confirm Password","rules":"A valid password is required"},domProps:{"value":(_vm.form.password2)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "password2", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input-invalid-message"},[_vm._v(" "+_vm._s(errors[0])+" ")])])]}}],null,true)}),_vm._v(" "),_c('button',{staticClass:"button",attrs:{"disabled":invalid || _vm.loading}},[_vm._v("Submit")])],1)]}}])})],1)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/register.vue?vue&type=template&id=7199c18e&scoped=true&

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/register.vue?vue&type=script&lang=js&
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

/* harmony default export */ var registervue_type_script_lang_js_ = ({
  name: 'RegisterForm',
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },

  data() {
    return {
      error_message: '',
      form: {
        userName: '',
        email: '',
        password: ''
      },
      loading: false,
      success: null,
      errored: null
    };
  },

  methods: {
    async submitForm(event) {
      this.loading = true;

      try {
        await this.$axios // todo: display errors in page rather than as alerts. alerts suck.
        .post('/api/register', this.form).then(response => {
          this.success = true;
          this.errored = false;
          this.userName = response.data.username;
          console.log(response.data);
        }).catch(error => {
          this.errored = true;
          this.error_message = error.response.data.error;
        }).finally(() => {
          this.loading = false;
        });
        const successfull = await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        });

        if (this.success && successfull) {
          console.log(this.userName);
          await this.$auth.setUser(this.form.userName);
          this.$auth.$state.loggedIn = this.success;
        } // this.$router.push('/')

      } catch (e) {
        this.error = e;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/register.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7199c18e",
  "34972d2c"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=register.js.map