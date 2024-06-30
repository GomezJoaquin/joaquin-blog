exports.ids = [11,5];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=24a7debb
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    staticClass: "NuxtLogo",
    attrs: {
      "width": "80",
      "height": "40",
      "viewBox": "0 0 452 342",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z\" fill=\"#00C58E\"></path> <path d=\"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z\" fill=\"#108775\"></path> <path d=\"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z\" fill=\"#2F495E\"></path>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=24a7debb

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Logo.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "66b9e7de"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/author/_author.vue?vue&type=template&id=06512e40
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  }, [_vm._ssrNode("<div class=\"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left\"><img" + _vm._ssrAttr("src", _vm.articles[0].author.img) + _vm._ssrAttr("alt", _vm.articles[0].author.name) + " class=\"absolute h-full w-full object-cover\"></div> <div class=\"overlay\"></div> "), _vm._ssrNode("<div class=\"absolute top-32 left-32 text-white\">", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_c('Logo')], 1), _vm._ssrNode(" <div class=\"mt-16 -mb-3 flex flex-col uppercase text-sm\"><h1 class=\"text-4xl font-bold\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.articles[0].author.name) + "\n      ") + "</h1> <p class=\"mb-4\">" + _vm._ssrEscape(_vm._s(_vm.articles[0].author.bio)) + "</p></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll\">", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "hover:underline"
  }, [_vm._v("Back to All Articles")])]), _vm._ssrNode(" <h3 class=\"mb-4 font-bold text-4xl\">" + _vm._ssrEscape("\n      Here are a list of articles by " + _vm._s(_vm.articles[0].author.name) + ":\n    ") + "</h3> "), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.articles, function (article) {
    return _vm._ssrNode("<li class=\"w-full px-2 xs:mb-6 md:mb-12 article-card\">", "</li>", [_c('NuxtLink', {
      staticClass: "flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",
      attrs: {
        "to": {
          name: 'blog-slug',
          params: {
            slug: article.slug
          }
        }
      }
    }, [article.img ? _c('img', {
      staticClass: "h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",
      attrs: {
        "src": article.img,
        "alt": article.alt
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
    }, [_c('h2', {
      staticClass: "font-bold"
    }, [_vm._v(_vm._s(article.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(article.description))]), _vm._v(" "), _c('p', {
      staticClass: "font-bold text-gray-600 text-sm"
    }, [_vm._v("\n              " + _vm._s(_vm.formatDate(article.updatedAt)) + "\n            ")])])])], 1);
  }), 0)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/author/_author.vue?vue&type=template&id=06512e40

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/author/_author.vue?vue&type=script&lang=js
/* harmony default export */ var _authorvue_type_script_lang_js = ({
  async asyncData({
    $content,
    params
  }) {
    const articles = await $content('articles').where({
      'author.name': {
        $regex: [params.author, 'i']
      }
    }).without('body').sortBy('createdAt', 'asc').fetch();
    return {
      articles
    };
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('en', options);
    }
  }
});
// CONCATENATED MODULE: ./pages/blog/author/_author.vue?vue&type=script&lang=js
 /* harmony default export */ var author_authorvue_type_script_lang_js = (_authorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/author/_author.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  author_authorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "706d88bc"
  
)

/* harmony default export */ var _author = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=_author.js.map