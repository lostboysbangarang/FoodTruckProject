exports.ids = [9,1,4];
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
  "254ac15a"
  
)

/* harmony default export */ var nav = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f7ca36fdd3280b230ad8f1cf004e8e52.svg";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1fe2503d", content, true, context)
};

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_style_index_0_id_6430d9b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_style_index_0_id_6430d9b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_style_index_0_id_6430d9b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_style_index_0_id_6430d9b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_style_index_0_id_6430d9b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(62);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main[data-v-6430d9b9]{position:absolute}.main a[data-v-6430d9b9]{text-decoration:none}.main a[data-v-6430d9b9]:link,.main a[data-v-6430d9b9]:visited{color:inherit}.main .container[data-v-6430d9b9]{height:calc(100vh - 60px);width:100vw;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-position:50%;position:absolute;z-index:1}.main .welcome[data-v-6430d9b9]{position:absolute;margin-left:20vw;border-radius:32px;z-index:2;background-color:rgba(104,176,171,.7);width:60vw;height:60vh;margin-top:calc(20vh - 60px);display:flex;flex-direction:column;align-self:center;align-items:center;justify-content:center}@media screen and (max-width:1100px){.main .welcome[data-v-6430d9b9]{width:80vw;margin-left:10vw;margin-top:calc(20vh - 60px);height:60vh}}.main .welcome .wrapper[data-v-6430d9b9]{width:80%;height:80%;align-self:center;align-items:center;justify-content:center}.main .welcome .wrapper .logo[data-v-6430d9b9]{width:100%;height:80%;display:flex;justify-content:center;border:5px #000;border-bottom:5px solid #000;margin:0}.main .welcome .wrapper .logo img[data-v-6430d9b9]{width:auto;height:100%}.main .welcome .wrapper .userIntro[data-v-6430d9b9]{text-align:center}.main .welcome .wrapper .userIntro#after[data-v-6430d9b9]{margin-top:8%}.main .welcome .wrapper .userIntro#after .links[data-v-6430d9b9]{color:#c8d5b9}.main .welcome .wrapper .buttons[data-v-6430d9b9]{width:90%;display:flex;justify-content:space-between;list-style:none}@media(max-width:1200px){.main .welcome .wrapper .buttons[data-v-6430d9b9]{margin-top:8%}}.main .welcome .wrapper .buttons li[data-v-6430d9b9]{padding:12px 20px;outline:2px solid #4a7c59;cursor:pointer;position:relative;background-color:transparent;z-index:1;color:#68b0ab}.main .welcome .wrapper .buttons li[data-v-6430d9b9]:after{content:\"\";background-color:#faf3dd;width:100%;z-index:-1;position:absolute;height:100%;top:4px;left:4px;transition:.2s}.main .welcome .wrapper .buttons li[data-v-6430d9b9]:hover:after{top:0;left:0}.main .welcome .wrapper .buttons li .button[data-v-6430d9b9]{font-size:20px}.main .welcome#mobile[data-v-6430d9b9]{margin-top:calc(20vh - 60px);width:90vw;height:60vh;margin-left:5vw}.main .welcome#mobile .wrapper[data-v-6430d9b9]{position:relative}.main .welcome#mobile .wrapper .logo[data-v-6430d9b9]{position:relative;top:-10%}.main .welcome#mobile .wrapper h1[data-v-6430d9b9]{font-size:24px}.main .welcome#mobile .wrapper .userIntro[data-v-6430d9b9]{margin-top:-16%}.main .welcome#mobile .wrapper .userIntro#after[data-v-6430d9b9]{margin-top:-8%}.main .welcome#mobile .wrapper .buttons li[data-v-6430d9b9]{padding:4px 12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/background.93d9556.jpg";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f4a9ac98", content, true, context)
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/body.vue?vue&type=template&id=6430d9b9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ClientOnly',[_c('div',{staticClass:"main"},[_c('div',{staticClass:"container"}),_vm._v(" "),(!_vm.mobile)?_c('div',{staticClass:"welcome"},[_c('div',{staticClass:"wrapper"},[_c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":__webpack_require__(45),"alt":""}})]),_vm._v(" "),(_vm.$auth.$state.loggedIn)?_c('div',{staticClass:"userIntro"},[_c('h1',[_vm._v("Welcome "+_vm._s(_vm.$auth.$state.user)+"! So glad you're hungry!")])]):_c('div',{staticClass:"userIntro",attrs:{"id":"after"}},[_c('h1',[_vm._v("\n\t\t\t\t\t\tPlease "),_c('nuxt-link',{staticClass:"links",attrs:{"to":"/login"}},[_vm._v("Login")]),_vm._v(" or\n\t\t\t\t\t\t"),_c('nuxt-link',{staticClass:"links",attrs:{"to":"/register"}},[_vm._v("Register")]),_vm._v(" to use this site!\n\t\t\t\t\t")],1),_vm._v(" "),_c('h3',[_vm._v("Don't forget to turn off AdBlock!")])]),_vm._v(" "),(_vm.$auth.$state.loggedIn)?_c('ul',{staticClass:"buttons"},[_c('li',[_c('nuxt-link',{staticClass:"button",attrs:{"to":"/trucks"}},[_vm._v("Trucks Near Me")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{staticClass:"button",attrs:{"to":"/saved"}},[_vm._v("Saved Trucks")])],1)]):_vm._e()])]):_c('div',{staticClass:"welcome",attrs:{"id":"mobile"}},[_c('div',{staticClass:"wrapper"},[_c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":__webpack_require__(45),"alt":""}})]),_vm._v(" "),(_vm.$auth.$state.loggedIn)?_c('div',{staticClass:"userIntro"},[_c('h1',[_vm._v("Welcome "+_vm._s(_vm.loggedInUser.username)+"! So glad you're hungry!")])]):_c('div',{staticClass:"userIntro",attrs:{"id":"after"}},[_c('h1',[_vm._v("\n\t\t\t\t\t\tPlease "),_c('nuxt-link',{staticClass:"links",attrs:{"to":"/login"}},[_vm._v("Login")]),_vm._v(" or\n\t\t\t\t\t\t"),_c('nuxt-link',{staticClass:"links",attrs:{"to":"/register"}},[_vm._v("Register")]),_vm._v(" to use this site!\n\t\t\t\t\t")],1),_vm._v(" "),_c('h3',[_vm._v("Don't forget to turn off AdBlock!")])]),_vm._v(" "),(_vm.$auth.$state.loggedIn)?_c('ul',{staticClass:"buttons"},[_c('li',[_c('nuxt-link',{staticClass:"button",attrs:{"to":"/trucks"}},[_vm._v("Trucks Near Me")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{staticClass:"button",attrs:{"to":"/saved"}},[_vm._v("Saved Trucks")])],1)]):_vm._e()])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/body.vue?vue&type=template&id=6430d9b9&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/body.vue?vue&type=script&lang=js&
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
 // import authjs from 'auth-next';

/* harmony default export */ var bodyvue_type_script_lang_js_ = ({
  name: 'MainBody',

  asyncData() {},

  data() {
    return {
      mobile: false
    };
  },

  fetch() {},

  computed: { ...Object(external_vuex_["mapState"])('yelp', ['ipInfo', 'yelpTrucks']),
    ...Object(external_vuex_["mapGetters"])('yelp', ['getIpInfo', 'getTrucks', 'getSaved']),

    ipInformation() {
      return this.$store.state.yelp.ipInfo;
    }

  },

  async beforeCreate() {
    if (true) return;
    console.log(`\n\n\n\t\t\tbeforeCreate()\n\n`);
    await this.$store.commit('yelp/setIP'); // .then(() =>{
    // 	this.$store.commit()
    // })

    console.log(`\nIP Information\n`, this.getIpInfo);
  },

  created() {},

  beforeMount() {},

  mounted() {
    this.screenSize();
  },

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},

  methods: {
    setIP() {
      this.$store.commit('yelp/setIP');
      console.log(`\t\tstore file IP Info\n\n`, this.$store);
    },

    screenSize() {
      if (false) {}
    },

    autho() {
      console.log(this.$store.state.yelp.yelpTrucks);
    }

  }
});
// CONCATENATED MODULE: ./components/body.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bodyvue_type_script_lang_js_ = (bodyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/body.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_bodyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6430d9b9",
  "ad693dbc"
  
)

/* harmony default export */ var body = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_scopped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_scopped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_scopped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_scopped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_scopped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=4c016600&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nav'),_vm._ssrNode(" "),_c('Body')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=4c016600&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  methods: {
    successi() {
      console.log(this.$auth);
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "49ea9d98"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Nav: __webpack_require__(40).default,Body: __webpack_require__(69).default})


/***/ })

};;
//# sourceMappingURL=index.js.map