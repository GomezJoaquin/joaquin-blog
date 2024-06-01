(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{324:function(t,e,n){"use strict";n.r(e);n(33),n(51),n(26);var r=n(10),l=(n(50),{data:function(){return{navOpen:!1}},methods:{toggleNav:function(){this.navOpen=!this.navOpen}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").only(["title","description","img","slug","author"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.next=6,n("tags").only(["name","slug"]).fetch();case 6:return l=e.sent,e.abrupt("return",{articles:r,tags:l});case 8:case"end":return e.stop()}}),e)})))()}}),o=n(49),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen bg-gray-100"},[e("header",{staticClass:"py-6 bg-white fixed w-full top-0 left-0 right-0 z-30 shadow-md"},[e("div",{staticClass:"container mx-auto px-6 md:px-12 flex items-center justify-between"},[e("NuxtLink",{staticClass:"text-3xl lg:text-4xl font-light text-gray-900 hover:text-gray-700 transition-colors duration-300",attrs:{to:"/"}},[t._v("\n        Joaquín Gómez Alonso\n      ")]),t._v(" "),e("button",{staticClass:"text-gray-900 lg:hidden",on:{click:t.toggleNav}},[e("svg",{staticClass:"h-8 w-8",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{class:{hidden:t.navOpen,block:!t.navOpen},attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"}}),e("path",{class:{block:t.navOpen,hidden:!t.navOpen},attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-4 6h4"}})])]),t._v(" "),e("nav",{staticClass:"lg:flex lg:items-center absolute lg:relative lg:z-auto lg:shadow-none left-0 right-0 bg-white shadow-md lg:bg-transparent lg:space-x-6 p-6 lg:p-0",class:{flex:t.navOpen,hidden:!t.navOpen}},[e("NuxtLink",{staticClass:"block py-2 text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300 lg:bg-transparent",attrs:{to:"/contact"}},[t._v("\n          Contact\n        ")])],1)],1)]),t._v(" "),e("main",{staticClass:"pt-24 pb-8 px-6 md:px-12 bg-gray-100"},[e("section",{staticClass:"max-w-6xl mx-auto text-center py-12"},[e("h1",{staticClass:"text-5xl font-light text-gray-900 mb-10"},[t._v("\n          Todos los artículos\n        ")]),t._v(" "),e("p",{staticClass:"text-lg text-gray-600 mb-12"},[t._v("\n          Explora una colección de artículos sobre desarrollo y diseño.\n        ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap justify-center -mx-4"},t._l(t.articles,(function(article){return e("div",{key:article.slug,staticClass:"p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"},[e("NuxtLink",{staticClass:"block shadow-md hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg overflow-hidden",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[article.img?e("img",{staticClass:"w-full h-48 object-cover",attrs:{src:article.img,alt:article.title}}):t._e(),t._v(" "),e("div",{staticClass:"p-6"},[e("h2",{staticClass:"text-xl font-semibold text-gray-800 mb-3"},[t._v(t._s(article.title))]),t._v(" "),e("p",{staticClass:"text-gray-700"},[t._v(t._s(article.description))])])])],1)})),0)]),t._v(" "),e("section",{staticClass:"max-w-6xl mx-auto text-center py-12"},[e("h2",{staticClass:"text-4xl font-light text-gray-900 uppercase mb-10"},[t._v("\n          Temas de interés\n        ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap justify-center -mx-4"},t._l(t.tags,(function(n){return e("div",{key:n.slug,staticClass:"p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"},[e("NuxtLink",{staticClass:"block shadow-md hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg",attrs:{to:"/blog/tag/".concat(n.slug)}},[e("div",{staticClass:"p-6"},[e("p",{staticClass:"text-lg font-semibold text-gray-800"},[t._v(t._s(n.name))])])])],1)})),0)])]),t._v(" "),e("footer",{staticClass:"text-center py-4 mt-8 bg-gray-200"},[e("p",{staticClass:"text-gray-600 text-sm"},[t._v("\n      © "+t._s((new Date).getFullYear())+" Joaquín Gómez Alonso.\n    ")]),t._v(" "),e("div",{staticClass:"flex justify-center mt-2"},[e("NuxtLink",{staticClass:"text-gray-600 hover:text-gray-800 font-medium mx-2 text-sm",attrs:{to:"/"}},[t._v("\n        Inicio\n      ")]),t._v(" "),e("span",{staticClass:"text-gray-600"},[t._v("|")]),t._v(" "),e("NuxtLink",{staticClass:"text-gray-600 hover:text-gray-800 font-medium mx-2 text-sm",attrs:{to:"/about"}},[t._v("\n        Acerca de mí\n      ")]),t._v(" "),e("span",{staticClass:"text-gray-600"},[t._v("|")]),t._v(" "),e("NuxtLink",{staticClass:"text-gray-600 hover:text-gray-800 font-medium mx-2 text-sm",attrs:{to:"/contact"}},[t._v("\n        Contacto\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);