(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{300:function(t,e,r){var content=r(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("74d2078f",content,!0,{sourceMap:!1})},308:function(t,e,r){"use strict";r(300)},309:function(t,e,r){var n=r(70)((function(i){return i[1]}));n.push([t.i,".prose h1{color:inherit;font-size:2.25rem;font-weight:700;margin-bottom:.5em;margin-top:0}.prose h2{font-size:1.75rem;font-weight:600}.prose h2,.prose h3{color:inherit;margin-bottom:.5em;margin-top:2em}.prose h3{font-size:1.5rem;font-weight:500}",""]),n.locals={},t.exports=n},327:function(t,e,r){"use strict";r.r(e);r(33),r(51),r(26);var n=r(20),o=r(25),c=r(109),l=r(10),d=(r(50),r(92),r(41),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,article,d,m,f,x,v,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.params,e.next=3,r("articles",l.slug).fetch();case 3:return article=e.sent,e.next=6,r("tags").only(["name","slug"]).where({name:{$containsAny:article.tags}}).fetch();case 6:return d=e.sent,m=Object.assign.apply(Object,[{}].concat(Object(c.a)(d.map((function(s){return Object(o.a)({},s.name,s)}))))),e.next=10,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(l.slug).fetch();case 10:return f=e.sent,x=Object(n.a)(f,2),v=x[0],y=x[1],e.abrupt("return",{article:article,tags:m,prev:v,next:y});case 15:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("es",{year:"numeric",month:"long",day:"numeric"})}}}),m=(r(308),r(49)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"},[e("div",{staticClass:"container mx-auto px-4 py-8"},[e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"w-full lg:w-3/4"},[e("h1",{staticClass:"text-4xl font-bold mb-6"},[t._v(t._s(t.article.title))]),t._v(" "),e("div",{staticClass:"flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400"},[e("p",[t._v(t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),e("span",{staticClass:"mx-2"},[t._v("•")]),t._v(" "),t._l(t.article.tags,(function(r,n){return e("span",{key:n,staticClass:"px-3 py-1 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs"},[e("router-link",{attrs:{to:"/blog/tag/".concat(t.tags[r].slug)}},[t._v(t._s(t.tags[r].name))])],1)}))],2),t._v(" "),e("p",{staticClass:"text-lg mb-6"},[t._v(t._s(t.article.description))]),t._v(" "),e("p",{staticClass:"text-xs text-gray-500 dark:text-gray-400 mb-4"},[t._v("Última actualización: "+t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),e("nav",{staticClass:"mb-6"},[e("ul",t._l(t.article.toc,(function(link){return e("li",{key:link.id,class:{"font-semibold":2===link.depth}},[e("router-link",{staticClass:"hover:underline text-gray-700 dark:text-gray-300 py-2",class:{"ml-4":3===link.depth},attrs:{to:"#".concat(link.id)}},[t._v(t._s(link.text))])],1)})),0)])])]),t._v(" "),e("div",{staticClass:"flex justify-center mt-8"},[e("div",{staticClass:"w-full lg:w-3/4"},[e("div",{staticClass:"prose dark:prose-dark mb-8"},[e("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),e("router-link",{staticClass:"text-blue-600 dark:text-blue-400 font-bold hover:underline",attrs:{to:"/blog"}},[t._v("← Volver a todos los artículos")])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);