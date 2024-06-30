exports.ids = [12];
exports.modules = {

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=ffe36702
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
  }, [_vm._ssrNode("<header class=\"py-6 bg-white dark:bg-gray-900 fixed w-full top-0 left-0 right-0 z-30 shadow-md\">", "</header>", [_vm._ssrNode("<div class=\"container mx-auto px-6 md:px-12 flex items-center justify-between\">", "</div>", [_c('NuxtLink', {
    staticClass: "text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n        Joaquín Gómez Alonso\n      ")]), _vm._ssrNode(" <button class=\"text-gray-900 dark:text-gray-100 lg:hidden\"></button> "), _vm._ssrNode("<nav" + _vm._ssrClass("lg:flex lg:items-center absolute lg:relative lg:z-auto lg:shadow-none left-0 right-0 bg-white dark:bg-gray-900 shadow-md lg:shadow-none lg:bg-transparent lg:dark:bg-transparent lg:space-x-6 p-6 lg:p-0 transition duration-300", {
    'flex': _vm.navOpen,
    'hidden': !_vm.navOpen
  }) + ">", "</nav>", [_c('NuxtLink', {
    staticClass: "block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300 lg:bg-transparent",
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("\n          Contact\n        ")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<main class=\"pt-24 pb-8 px-6 md:px-12 bg-gray-50 dark:bg-gray-900\">", "</main>", [_vm._ssrNode("<section class=\"max-w-6xl mx-auto text-center py-12\">", "</section>", [_vm._ssrNode("<h1 class=\"text-5xl font-light text-gray-900 dark:text-gray-100 mb-10\">\n        Todos los artículos\n      </h1> <p class=\"text-lg text-gray-600 dark:text-gray-300 mb-12\">\n        Explora una colección de artículos sobre desarrollo y diseño.\n      </p> "), _vm._ssrNode("<div class=\"flex flex-wrap justify-center -mx-4\">", "</div>", _vm._l(_vm.articles, function (article) {
    return _vm._ssrNode("<div class=\"p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4\">", "</div>", [_c('NuxtLink', {
      staticClass: "block shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 rounded-lg overflow-hidden",
      attrs: {
        "to": {
          name: 'blog-slug',
          params: {
            slug: article.slug
          }
        }
      }
    }, [article.img ? _c('img', {
      staticClass: "w-full h-48 object-cover",
      attrs: {
        "src": article.img,
        "alt": article.title
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "p-6"
    }, [_c('h2', {
      staticClass: "text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3"
    }, [_vm._v(_vm._s(article.title))]), _vm._v(" "), _c('p', {
      staticClass: "text-gray-700 dark:text-gray-300"
    }, [_vm._v(_vm._s(article.description))])])])], 1);
  }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"max-w-6xl mx-auto text-center py-12\">", "</section>", [_vm._ssrNode("<h2 class=\"text-4xl font-light text-gray-900 dark:text-gray-100 uppercase mb-10\">\n        Temas de interés\n      </h2> "), _vm._ssrNode("<div class=\"flex flex-wrap justify-center -mx-4\">", "</div>", _vm._l(_vm.tags, function (tag) {
    return _vm._ssrNode("<div class=\"p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4\">", "</div>", [_c('NuxtLink', {
      staticClass: "block shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 rounded-lg",
      attrs: {
        "to": `/blog/tag/${tag.slug}`
      }
    }, [_c('div', {
      staticClass: "p-6"
    }, [_c('p', {
      staticClass: "text-lg font-semibold text-gray-800 dark:text-gray-100"
    }, [_vm._v(_vm._s(tag.name))])])])], 1);
  }), 0)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<footer class=\"text-center py-4 mt-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700\">", "</footer>", [_vm._ssrNode("<p class=\"text-gray-600 dark:text-gray-300 text-sm\">" + _vm._ssrEscape("\n      © " + _vm._s(new Date().getFullYear()) + " Joaquín Gómez Alonso.\n    ") + "</p> "), _vm._ssrNode("<div class=\"flex justify-center mt-2\">", "</div>", [_c('NuxtLink', {
    staticClass: "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium mx-2 text-sm",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n        Inicio\n      ")]), _vm._ssrNode(" <span class=\"text-gray-600 dark:text-gray-300\">|</span> "), _c('NuxtLink', {
    staticClass: "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium mx-2 text-sm",
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("\n        Acerca de mí\n      ")]), _vm._ssrNode(" <span class=\"text-gray-600 dark:text-gray-300\">|</span> "), _c('NuxtLink', {
    staticClass: "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium mx-2 text-sm",
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("\n        Contacto\n      ")])], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=ffe36702

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js
/* harmony default export */ var blogvue_type_script_lang_js = ({
  data() {
    return {
      navOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    }
  },
  async asyncData({
    $content
  }) {
    const articles = await $content("articles").only(["title", "description", "img", "slug", "author"]).sortBy("createdAt", "desc").fetch();
    const tags = await $content("tags").only(["name", "slug"]).fetch();
    return {
      articles,
      tags
    };
  }
});
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_blogvue_type_script_lang_js = (blogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5f386806"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map