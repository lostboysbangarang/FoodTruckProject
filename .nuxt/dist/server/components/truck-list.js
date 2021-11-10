exports.ids = [7];
exports.modules = {

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/truckList.vue?vue&type=template&id=27d79de7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"truck"},[_vm._ssrNode((_vm._ssrList((_vm.yelpResults),function(trucks,index){return ("<div"+(_vm._ssrAttr("id",index))+" class=\"trucks\"><div class=\"name\">"+_vm._ssrEscape(_vm._s(trucks.name))+"</div> <div class=\"image\"><img"+(_vm._ssrAttr("src",trucks.image_url))+" alt></div> <div class=\"open\">"+((!trucks.is_closed)?("<div>\n                      Open Now!\n                  </div>"):("<div>\n                      Closed Unfortunately!\n                  </div>"))+"</div> <div class=\"contact\"><div><span>"+_vm._ssrEscape(_vm._s(trucks.display_phone))+"</span></div> <div><span>"+_vm._ssrEscape(_vm._s(trucks.location.address1))+"<br>"+_vm._ssrEscape(_vm._s(trucks.location.city)+" "+_vm._s(trucks.location.state))+"</span><br><a"+(_vm._ssrAttr("href",trucks.url))+" class=\"webbie\"><span>Check out their site!</span></a></div></div> <label class=\"like\"><input type=\"checkbox\"> <div class=\"hearth\"></div></label></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/truckList.vue?vue&type=template&id=27d79de7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/truckList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import TruckCard from '@/components/'
/* harmony default export */ var truckListvue_type_script_lang_js_ = ({
  name: 'TruckList' // components: {
  //     TruckCard
  // }

});
// CONCATENATED MODULE: ./components/truckList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_truckListvue_type_script_lang_js_ = (truckListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/truckList.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_truckListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "786259e6"
  
)

/* harmony default export */ var truckList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=truck-list.js.map