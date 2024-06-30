exports.ids = [6];
exports.modules = {

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/PrevNext.vue?vue&type=template&id=817790ac
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flex justify-between"
  }, [_vm.prev ? _c('NuxtLink', {
    staticClass: "text-primary font-bold hover:underline",
    attrs: {
      "to": {
        name: 'blog-slug',
        params: {
          slug: _vm.prev.slug
        }
      }
    }
  }, [_vm._v("\n    " + _vm._s(_vm.prev.title) + "\n  ")]) : _c('span', [_vm._v(" ")]), _vm._ssrNode(" "), _vm.next ? _c('NuxtLink', {
    staticClass: "font-bold hover:underline",
    attrs: {
      "to": {
        name: 'blog-slug',
        params: {
          slug: _vm.next.slug
        }
      }
    }
  }, [_vm._v("\n    " + _vm._s(_vm.next.title) + "\n  ")]) : _c('span', [_vm._v(" ")])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/PrevNext.vue?vue&type=template&id=817790ac

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/PrevNext.vue?vue&type=script&lang=js
/* harmony default export */ var PrevNextvue_type_script_lang_js = ({
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
});
// CONCATENATED MODULE: ./components/global/PrevNext.vue?vue&type=script&lang=js
 /* harmony default export */ var global_PrevNextvue_type_script_lang_js = (PrevNextvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/global/PrevNext.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  global_PrevNextvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "61c8be8f"
  
)

/* harmony default export */ var PrevNext = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=prev-next.js.map