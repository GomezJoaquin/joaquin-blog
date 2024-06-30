exports.ids = [2];
exports.modules = {

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Author.vue?vue&type=template&id=7001725a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full px-2 xs:mb-6 md:mb-12 article-card"
  }, [_c('NuxtLink', {
    staticClass: "flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",
    attrs: {
      "to": `/blog/author/${_vm.author.name}`
    }
  }, [_vm.author.img ? _c('img', {
    staticClass: "h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",
    attrs: {
      "src": _vm.author.img
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col m-4"
  }, [_c('h4', {
    staticClass: "font-semibold"
  }, [_vm._v("Author")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.author.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.author.bio))])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Author.vue?vue&type=template&id=7001725a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Author.vue?vue&type=script&lang=js
/* harmony default export */ var Authorvue_type_script_lang_js = ({
  props: {
    author: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Author.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Authorvue_type_script_lang_js = (Authorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Author.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Authorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "45ef0e04"
  
)

/* harmony default export */ var Author = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=author.js.map