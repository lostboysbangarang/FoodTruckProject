exports.ids = [13,4,8];
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("cf3d94cc", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/location.2f25347.jpg";

/***/ }),

/***/ 57:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512"}, attrs),
              ...rest,
            },
            children.concat([_c('defs',[_c('style',[_v('.uno{filter: invert(68%) sepia(18%) saturate(696%) hue-rotate(127deg) brightness(91%) contrast(92%);} .dos{filter: invert(39%) sepia(25%) saturate(755%) hue-rotate(307deg) brightness(93%) contrast(105%);}')])]),_c('path',{staticClass:"dos",attrs:{"d":"M224 496a16 16 0 0 0 16 16h32a15.88 15.88 0 0 0 5.71-1.07l.52-.19.1-.05a16.08 16.08 0 0 0 5-3.38A15.91 15.91 0 0 0 288 496V384h-64zM272 0h-32a16 16 0 0 0-16 16v16h64V16a16 16 0 0 0-16-16zm-48 224h64v-32h-64z"}}),_c('path',{staticClass:"uno",attrs:{"d":"M456 224H70.63A32 32 0 0 0 48 233.37L4.69 276.69a16 16 0 0 0 0 22.63L48 342.63A32 32 0 0 0 70.63 352H456a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24zm51.31-139.31L464 41.37A32 32 0 0 0 441.37 32H56a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h385.37a32 32 0 0 0 22.63-9.37l43.31-43.31a16 16 0 0 0 0-22.63z"}})])
          )
        }
      }
    

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_truckbody_vue_vue_type_style_index_0_lang_scss_scopped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_truckbody_vue_vue_type_style_index_0_lang_scss_scopped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_truckbody_vue_vue_type_style_index_0_lang_scss_scopped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_truckbody_vue_vue_type_style_index_0_lang_scss_scopped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_truckbody_vue_vue_type_style_index_0_lang_scss_scopped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(47);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes like{0%{background-position-x:0}to{background-position-x:-3540px}}@keyframes like{0%{background-position-x:0}to{background-position-x:-3540px}}@media(hover:hover){.like:hover{background-color:rgba(225,37,94,.08235)}.like:hover .hearth{background-position-x:-3660px}}.locationbar{height:60px;width:100vw;background-color:#8fc0a9;z-index:10;display:flex;justify-content:center}.locationbar_wrapper{top:-12%;height:100%;width:20%;min-width:200px;background-color:#b583a6;border-radius:30px;align-items:center;justify-content:space-between}.locationbar_wrapper,.locationbar_wrapper_icon{position:relative;display:flex;flex-direction:row}.locationbar_wrapper_icon{left:4%;height:80%;justify-content:space-around;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.locationbar_wrapper_location{position:relative;right:8%;font-size:2vw}@media(max-width:1200px){.locationbar_wrapper_location{font-size:24px}}.truck{width:90vw;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:flex;margin-left:5vw;margin-top:60px;flex-wrap:wrap;justify-content:space-around}.trucks{display:flex;flex-direction:column;align-items:center;position:relative;width:30%;min-width:360px;height:560px;border-radius:30px;background-color:rgba(104,176,171,.9);margin-bottom:6%}.trucks .name{font-family:\"Shrikhand\",\"cursive\";font-size:24px;margin-top:6%;text-align:center}.trucks .image{width:90%;height:50%}.trucks .image img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block;margin-left:auto;margin-right:auto}.trucks .open{font-family:\"Shrikhand\",\"cursive\";font-size:24px;margin-top:6%}.trucks .contact{margin-top:4%;font-size:22px;text-align:center}.trucks .contact div a{color:#b583a6;font-weight:700;text-decoration:none}.trucks .contact div a:link,.trucks .contact div a:visited{color:#b583a6}.trucks input{display:none}.trucks .like{position:absolute;bottom:0;right:0;display:block;width:60px;height:60px;cursor:pointer;border-radius:999px;overflow:visible;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent}.trucks .hearth{background-image:url(https://assets.codepen.io/23500/Hashflag-AppleEvent.svg);background-size:3720px 60px;background-repeat:no-repeat;background-position-x:-3600px;background-position-y:1.2px;width:60px;height:60px}.trucks input:checked+.hearth{-webkit-animation:like 1s steps(59);animation:like 1s steps(59);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}body{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-size:cover;background-position:50%;background-attachment:fixed;height:100vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("c8fa2daa", content, true, context)
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/truckbody.vue?vue&type=template&id=40261dc0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"locationbar\">","</div>",[_vm._ssrNode("<div class=\"locationbar_wrapper\">","</div>",[_vm._ssrNode("<div class=\"locationbar_wrapper_icon\">","</div>",[_c('Location')],1),_vm._ssrNode(" <div class=\"locationbar_wrapper_location\">"+_vm._ssrEscape("\n\t\t\t\t"+_vm._s(_vm.getIpInfo.location && _vm.getIpInfo.location.city)+"\n\t\t\t\t")+"</div>")],2)]),_vm._ssrNode(" <div class=\"truck\">"+(_vm._ssrList((_vm.getTrucks),function(trucks,index){return ("<div"+(_vm._ssrAttr("id",index))+" class=\"trucks\"><div class=\"name\">"+_vm._ssrEscape(_vm._s(trucks && trucks.name))+"</div> <div class=\"image\"><img"+(_vm._ssrAttr("src",trucks && trucks.image_url))+(_vm._ssrAttr("alt",trucks && trucks.alias))+"></div> <div class=\"open\">"+((trucks && !trucks.is_closed)?("<div>Open Now!</div>"):("<div>Closed Unfortunately!</div>"))+"</div> <div class=\"contact\"><div>"+_vm._ssrEscape(_vm._s(trucks && trucks.display_phone))+"</div> <div>"+_vm._ssrEscape("\n\t\t\t\t\t"+_vm._s(trucks && trucks.location && trucks.location.display_address[0]))+"<br>"+_vm._ssrEscape(_vm._s(trucks && trucks.location && trucks.location.display_address[1]))+((trucks && trucks.location && trucks.location.display_address[2])?("<span>"+_vm._ssrEscape("\n\t\t\t\t\t\t"+_vm._s(trucks && trucks.location && trucks.location.display_address[2]))+"</span>"):"<!---->")+" <br><a"+(_vm._ssrAttr("href",trucks && trucks.url))+">Check out their site!</a></div></div> "+((trucks && trucks.booleen)?("<label id=\"left\" class=\"like\"><input"+(_vm._ssrAttr("id",index + 'checkbox'))+" type=\"checkbox\""+(_vm._ssrAttr("disabled",trucks && trucks.booleen))+(_vm._ssrAttr("checked",trucks && trucks.booleen))+"> <div class=\"hearth\"></div></label>"):(trucks && !trucks.booleen)?("<label id=\"right\" class=\"like\"><input"+(_vm._ssrAttr("id",index + 'checkbox'))+" type=\"checkbox\""+(_vm._ssrAttr("disabled",trucks && trucks.booleen))+(_vm._ssrAttr("checked",trucks && trucks.booleen))+"> <div class=\"hearth\"></div></label>"):"<!---->")+"</div>")}))+"</div> <div class=\"background\"><div class=\"background_left\"><div class=\"background_left_angle\"></div></div> <div class=\"background_right\"></div>\n\t\t\\\n\t</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/truckbody.vue?vue&type=template&id=40261dc0&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./assets/svgs/locationIII.svg?inline
var locationIIIinline = __webpack_require__(57);
var locationIIIinline_default = /*#__PURE__*/__webpack_require__.n(locationIIIinline);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/truckbody.vue?vue&type=script&lang=js&
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


/* harmony default export */ var truckbodyvue_type_script_lang_js_ = ({
  name: 'TruckCard',
  components: {
    Location: locationIIIinline_default.a
  },

  asyncData() {},

  data() {
    return {
      yelpResults: [],
      favs: {},
      getTrucks: {},
      getIpInfo: {}
    };
  },

  fetch() {},

  computed: { ...Object(external_vuex_["mapGetters"])('yelp', [// 'getIpInfo',
      // 'getTrucks'
    ]),
    ...Object(external_vuex_["mapState"])(['yelp']) // getIpInfo: {}

  },

  async beforeCreate() {
    if (true) return;
    console.log(`\n\n\tbeforeCreate()\n\t\t\tgetJSON`);

    if (this.getIpInfo === undefined) {
      this.getIpInfo = await JSON.parse(localStorage.getItem('ipConfig'));
    } // console.log(this.getIpInfo)
    // this.$store.dispatch('yelp/getJSON', JSON.parse(localStorage.getItem('yelpArry')))
    // 	.then(() =>{
    // 		this.$store.dispatch('yelp/getIPInfo', localStorage.getItem('ipConfig'))
    // 	})
    // console.log(`\n\tFetched in beforeCreate():\t`, this.getIpInfo.location && this.getIpInfo.location.city)


    if (Object.keys(this.getTrucks).length < 30) {
      this.getTrucks = await JSON.parse(localStorage.getItem('yelpArry'));
    } // console.log(this.getTrucks)

  },

  created() {},

  beforeMount() {},

  mounted() {// console.log(this.getIpInfo)
  },

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},

  methods: {
    saved(index) {
      // this.$store.commit('yelp/addBooleen', {index})
      // console.log("querySelector:\t", document.getElementById(`${index}checkbox`));
      // document.getElementById(`${index}checkbox`).disabled = true;
      this.$store.dispatch('yelp/updateJSON', {
        objI: 'yelpArry',
        objII: this.getTrucks
      }); // const object = JSON.parse(localStorage.getItem('yelpArry'))

      this.getTrucks[index].booleen = true;
      localStorage.removeItem('yelpArry');
      localStorage.setItem('yelpArry', JSON.stringify(this.getTrucks)); // console.log(JSON.parse(localStorage.getItem('savedTrucks')))
      // const objectII = JSON.parse(localStorage.getItem('savedTrucks'))
      // const objectIII = JSON.parse(localStorage.getItem('savedTrucks'))

      const size = Object.keys(this.favs).length;
      console.log(Object.keys(this.favs));

      if (size === 0) {
        this.favs[0] = this.getTrucks[index];
      } else if (size === 1) {
        this.favs[1] = this.getTrucks[index];
        console.log(Object.keys(this.favs));
      } else {
        const size = Object.keys(this.favs).length;
        const keys = Object.keys(this.favs);

        for (let i = 0; i <= size; i++) {
          console.log(keys[i]);

          if (keys[i] === undefined) {
            this.favs[i] = this.getTrucks[index]; // if(i === (size-1))
          } // }
          // else {
          // }

        }
      }

      localStorage.removeItem('savedTrucks');
      localStorage.setItem('savedTrucks', JSON.stringify(this.favs));
    }

  }
});
// CONCATENATED MODULE: ./components/truckbody.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_truckbodyvue_type_script_lang_js_ = (truckbodyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/truckbody.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_truckbodyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ec61466c"
  
)

/* harmony default export */ var truckbody = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trucks_vue_vue_type_style_index_0_scopped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trucks_vue_vue_type_style_index_0_scopped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trucks_vue_vue_type_style_index_0_scopped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trucks_vue_vue_type_style_index_0_scopped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trucks_vue_vue_type_style_index_0_scopped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(47);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".TrucksPage{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-size:cover;background-position:50%;background-attachment:fixed;height:100vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/trucks.vue?vue&type=template&id=706afaee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nav'),_vm._ssrNode(" "),_c('Truckbody')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/trucks.vue?vue&type=template&id=706afaee&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/trucks.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var trucksvue_type_script_lang_js_ = ({
  name: 'TrucksPage' // beforeCreate: {
  //     function() {
  //         document.body.className = 'TrucksPage';
  //     }
  // }

});
// CONCATENATED MODULE: ./pages/trucks.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_trucksvue_type_script_lang_js_ = (trucksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/trucks.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_trucksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "758765be"
  
)

/* harmony default export */ var trucks = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Nav: __webpack_require__(40).default,Truckbody: __webpack_require__(68).default})


/***/ })

};;
//# sourceMappingURL=trucks.js.map