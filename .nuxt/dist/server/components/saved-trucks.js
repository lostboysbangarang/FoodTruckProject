exports.ids = [6];
exports.modules = {

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("55c64b95", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_savedTrucks_vue_vue_type_style_index_0_id_156ae80a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_savedTrucks_vue_vue_type_style_index_0_id_156ae80a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_savedTrucks_vue_vue_type_style_index_0_id_156ae80a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_savedTrucks_vue_vue_type_style_index_0_id_156ae80a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_savedTrucks_vue_vue_type_style_index_0_id_156ae80a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes like-data-v-156ae80a{0%{background-position-x:0}to{background-position-x:-3540px}}@keyframes like-data-v-156ae80a{0%{background-position-x:0}to{background-position-x:-3540px}}@media(hover:hover){.like[data-v-156ae80a]:hover{background-color:rgba(225,37,94,.08235)}.like:hover .hearth[data-v-156ae80a]{background-position-x:-3660px}}.locationbar[data-v-156ae80a]{height:60px;width:100vw;background-color:#8fc0a9;z-index:10;display:flex;justify-content:center}.locationbar_wrapper[data-v-156ae80a]{top:-12%;height:100%;width:20%;min-width:200px;background-color:#b583a6;border-radius:30px;align-items:center;justify-content:space-between}.locationbar_wrapper[data-v-156ae80a],.locationbar_wrapper_icon[data-v-156ae80a]{position:relative;display:flex;flex-direction:row}.locationbar_wrapper_icon[data-v-156ae80a]{left:4%;height:80%;justify-content:space-around;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.locationbar_wrapper_location[data-v-156ae80a]{position:relative;right:8%;font-size:2vw}@media(max-width:1200px){.locationbar_wrapper_location[data-v-156ae80a]{font-size:24px}}.truck[data-v-156ae80a]{width:90vw;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:flex;margin-left:5vw;margin-top:60px;flex-wrap:wrap;justify-content:space-around}.trucks[data-v-156ae80a]{display:flex;flex-direction:column;align-items:center;position:relative;width:30%;min-width:360px;height:560px;border-radius:30px;background-color:rgba(104,176,171,.9);margin-bottom:6%}.trucks .name[data-v-156ae80a]{font-family:\"Shrikhand\",\"cursive\";font-size:24px;margin-top:6%;text-align:center}.trucks .image[data-v-156ae80a]{width:90%;height:50%}.trucks .image img[data-v-156ae80a]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block;margin-left:auto;margin-right:auto}.trucks .open[data-v-156ae80a]{font-family:\"Shrikhand\",\"cursive\";font-size:24px;margin-top:6%}.trucks .contact[data-v-156ae80a]{margin-top:4%;font-size:22px;text-align:center}.trucks .contact div a[data-v-156ae80a]{color:#b583a6;font-weight:700;text-decoration:none}.trucks .contact div a[data-v-156ae80a]:link,.trucks .contact div a[data-v-156ae80a]:visited{color:#b583a6}.trucks input[data-v-156ae80a]{display:none}.trucks .like[data-v-156ae80a]{position:absolute;bottom:0;right:0;display:block;width:60px;height:60px;cursor:pointer;border-radius:999px;overflow:visible;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent}.trucks .hearth[data-v-156ae80a]{background-image:url(https://assets.codepen.io/23500/Hashflag-AppleEvent.svg);background-size:3720px 60px;background-repeat:no-repeat;background-position-x:-3600px;background-position-y:1.2px;width:60px;height:60px}.trucks input:checked+.hearth[data-v-156ae80a]{-webkit-animation:like-data-v-156ae80a 1s steps(59);animation:like-data-v-156ae80a 1s steps(59);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/savedTrucks.vue?vue&type=template&id=156ae80a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"truck"},[_vm._ssrNode((_vm._ssrList((_vm.list),function(trucks,index){return ("<div"+(_vm._ssrAttr("id",index))+" class=\"trucks\" data-v-156ae80a><div class=\"name\" data-v-156ae80a>"+_vm._ssrEscape(_vm._s(trucks && trucks.name))+"</div> <div class=\"image\" data-v-156ae80a><img"+(_vm._ssrAttr("src",trucks && trucks.image_url))+(_vm._ssrAttr("alt",trucks && trucks.alias))+" data-v-156ae80a></div> <div class=\"open\" data-v-156ae80a>"+((trucks && !trucks.is_closed)?("<div data-v-156ae80a>\n                    Open Now!\n                </div>"):("<div data-v-156ae80a>\n                    Closed Unfortunately!\n                </div>"))+"</div> <div class=\"contact\" data-v-156ae80a><div data-v-156ae80a>"+_vm._ssrEscape(_vm._s(trucks && trucks.display_phone))+"</div> <div data-v-156ae80a>"+_vm._ssrEscape(_vm._s(trucks && trucks.location && trucks.location.display_address[0]))+"<br data-v-156ae80a>"+_vm._ssrEscape(_vm._s(trucks && trucks.location && trucks.location.display_address[1]))+((trucks && trucks.location && trucks.location.display_address[2])?("<span data-v-156ae80a>"+_vm._ssrEscape(" "+_vm._s(trucks && trucks.location && trucks.location.display_address[2]))+"</span>"):"<!---->")+" <br data-v-156ae80a><a"+(_vm._ssrAttr("href",trucks && trucks.url))+" data-v-156ae80a>Check out their site!</a></div></div> "+((trucks && trucks.booleen)?("<label id=\"left\" class=\"like\" data-v-156ae80a><input"+(_vm._ssrAttr("id",index+'checkbox'))+" type=\"checkbox\""+(_vm._ssrAttr("disabled",trucks && !trucks.booleen))+(_vm._ssrAttr("checked",trucks && trucks.booleen))+" data-v-156ae80a> <div class=\"hearth\" data-v-156ae80a></div></label>"):(trucks && !trucks.booleen)?("<label id=\"right\" class=\"like\" data-v-156ae80a><input"+(_vm._ssrAttr("id",index+'checkbox'))+" type=\"checkbox\""+(_vm._ssrAttr("disabled",trucks && !trucks.booleen))+(_vm._ssrAttr("checked",trucks && trucks.booleen))+" data-v-156ae80a> <div class=\"hearth\" data-v-156ae80a></div></label>"):"<!---->")+"</div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/savedTrucks.vue?vue&type=template&id=156ae80a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/savedTrucks.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import axios from 'axios';
// import savedJPG from '~/assets/saved.jpg';

/* harmony default export */ var savedTrucksvue_type_script_lang_js_ = ({
  name: 'SavedTrucksCard',

  asyncData() {},

  data() {
    return {// list: this.getSaved
    };
  },

  fetch() {},

  computed: { ...Object(external_vuex_["mapGetters"])('yelp', ['getIpInfo', 'getTrucks', 'getSaved', 'getLocal']),

    list() {
      return this.getSaved;
    }

  },

  async beforeCreate() {
    if (true) return;
    console.log(`\n\n\n\t\t\tbeforeCreate()\n\n`, this.getSaved);
    await this.$store.dispatch('yelp/getJSONTrucks', localStorage.getItem('savedTrucks'));
    console.log(`\n\n\n\t\t\tAfter beforeCreate()\n\n`, this.getSaved);
  },

  created() {},

  beforeMount() {},

  mounted() {
    console.log(`HELP`, this.list);
  },

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {// forEach()
  },

  methods: {
    saved(index) {
      console.log("Remove");
      this.$store.commit('yelp/removeBooleen', {
        index
      });
      document.getElementById(`${index}checkbox`).disabled = true;
      delete this.list[index];
      this.$store.dispatch('yelp/updateJSON', {
        objI: 'savedTrucks',
        objII: this.getSaved
      });
      console.log(this.getLocal);
      localStorage.removeItem('savedTrucks');
      const setSaved = JSON.parse(JSON.stringify(this.getLocal));
      localStorage.setItem('savedTrucks', JSON.stringify(setSaved));
      console.log(JSON.parse(localStorage.getItem('savedTrucks')));
      this.$store.dispatch('yelp/maybeThis');
    }

  }
});
// CONCATENATED MODULE: ./components/savedTrucks.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_savedTrucksvue_type_script_lang_js_ = (savedTrucksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/savedTrucks.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_savedTrucksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "156ae80a",
  "083c5264"
  
)

/* harmony default export */ var savedTrucks = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=saved-trucks.js.map