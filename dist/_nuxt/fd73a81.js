(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{300:function(t,e,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("66257bf0",content,!0,{sourceMap:!1})},306:function(t,e,r){"use strict";r(300)},307:function(t,e,r){var n=r(70)((function(i){return i[1]}));n.push([t.i,".group:hover .translate-x-[\\-2px][data-v-0350a212]{transform:translateX(-2px)}",""]),n.locals={},t.exports=n},326:function(t,e,r){"use strict";r.r(e);r(33),r(51),r(26);var n=r(20),o=r(10),l=(r(50),r(17),r(29),r(30),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c,d,x,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,Promise.all([r("tags").where({slug:{$contains:o.tag}}).limit(1).fetch(),r("articles").where({tags:{$contains:o.tag}}).sortBy("createdAt","asc").fetch()]);case 3:return l=e.sent,c=Object(n.a)(l,2),d=c[0],x=c[1],m=d.length>0?d[0]:{},e.abrupt("return",{articles:x,tag:m});case 9:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"})},timeSince:function(t){}}}),c=(r(306),r(49)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col min-h-screen w-full bg-white dark:bg-gray-900"},[e("div",{staticClass:"flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 py-12 text-center"},[e("NuxtLink",{staticClass:"flex items-center text-gray-800 dark:text-gray-100 mb-8 hover:text-blue-600 dark:hover:text-blue-400 hover:underline",attrs:{to:"/"}},[e("svg",{staticClass:"mr-2 group-hover:translate-x-[-2px] transition-transform",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"24"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})]),t._v("\n      Regresar a todos los artículos\n    ")]),t._v(" "),e("h1",{staticClass:"text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6"},[t._v("\n      "+t._s(t.tag.name)+"\n    ")]),t._v(" "),e("p",{staticClass:"text-lg text-gray-700 dark:text-gray-300 mb-8"},[t._v(t._s(t.tag.description))]),t._v(" "),e("nuxt-content",{staticClass:"prose dark:prose-dark mx-auto mb-12",attrs:{document:t.tag}}),t._v(" "),e("h2",{staticClass:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10"},[t._v("\n      Artículos sobre "+t._s(t.tag.name)+"\n    ")]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"},t._l(t.articles,(function(article){return e("div",{key:article.slug,staticClass:"group relative"},[e("NuxtLink",{staticClass:"block transition-shadow duration-200 ease-in-out shadow-md hover:shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800",attrs:{to:{name:"blog-slug",params:{slug:article.slug}},"aria-label":"Leer más sobre "+article.title}},[e("div",{staticClass:"flex flex-col md:flex-row"},[article.img?e("img",{staticClass:"h-48 md:h-auto md:w-48 object-cover",attrs:{src:article.img,alt:article.title}}):t._e(),t._v(" "),e("div",{staticClass:"p-6"},[e("h3",{staticClass:"font-semibold text-xl text-gray-800 dark:text-gray-100 mb-2"},[t._v("\n                "+t._s(article.title)+"\n              ")]),t._v(" "),e("p",{staticClass:"text-gray-600 dark:text-gray-400 mb-4"},[t._v("\n                "+t._s(article.description)+"\n              ")]),t._v(" "),e("p",{staticClass:"font-medium text-gray-500 dark:text-gray-400 text-sm"},[t._v("\n                "+t._s(t.formatDate(article.updatedAt))+"\n              ")])])])])],1)})),0)],1)])}),[],!1,null,"0350a212",null);e.default=component.exports}}]);