(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{326:function(t,e,r){"use strict";r.r(e);r(33),r(51),r(26);var n=r(20),c=r(25),l=r(109),o=r(10),d=(r(50),r(92),r(41),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,article,d,x,m,v,f,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,r("articles",o.slug).fetch();case 3:return article=e.sent,e.next=6,r("tags").only(["name","slug"]).where({name:{$containsAny:article.tags}}).fetch();case 6:return d=e.sent,x=Object.assign.apply(Object,[{}].concat(Object(l.a)(d.map((function(s){return Object(c.a)({},s.name,s)}))))),e.next=10,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 10:return m=e.sent,v=Object(n.a)(m,2),f=v[0],y=v[1],e.abrupt("return",{article:article,tags:x,prev:f,next:y});case 15:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("es",{year:"numeric",month:"long",day:"numeric"})}}}),x=r(49),component=Object(x.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"},[e("div",{staticClass:"container mx-auto px-4 py-8"},[e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"w-full lg:w-3/4"},[e("h1",{staticClass:"text-3xl lg:text-4xl font-bold mb-4"},[t._v(t._s(t.article.title))]),t._v(" "),e("div",{staticClass:"flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400"},[e("p",[t._v(t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),e("span",{staticClass:"mx-2"},[t._v("•")]),t._v(" "),t._l(t.article.tags,(function(r,n){return e("span",{key:n,staticClass:"px-3 py-1 mr-2 mb-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs"},[e("router-link",{attrs:{to:"/blog/tag/".concat(t.tags[r].slug)}},[t._v(t._s(t.tags[r].name))])],1)}))],2),t._v(" "),e("p",{staticClass:"text-base mb-4"},[t._v(t._s(t.article.description))]),t._v(" "),e("p",{staticClass:"text-xs text-gray-500 dark:text-gray-400 mb-4"},[t._v("Última actualización: "+t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),e("nav",{staticClass:"mb-6"},[e("ul",t._l(t.article.toc,(function(link){return e("li",{key:link.id,class:{"font-semibold":2===link.depth}},[e("router-link",{staticClass:"hover:underline text-gray-700 dark:text-gray-300 py-2",class:{"ml-2 pb-2":3===link.depth},attrs:{to:"#".concat(link.id)}},[t._v(t._s(link.text))])],1)})),0)])])]),t._v(" "),e("div",{staticClass:"flex justify-center mt-8"},[e("div",{staticClass:"w-full lg:w-3/4"},[e("div",{staticClass:"prose dark:prose-dark mb-8"},[e("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),e("router-link",{staticClass:"text-blue-600 dark:text-blue-400 font-bold hover:underline",attrs:{to:"/blog"}},[t._v("← Volver a todos los artículos")])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);