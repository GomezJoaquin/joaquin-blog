<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-center">
        <div class="w-full lg:w-3/4">
          <h1 class="text-4xl font-bold mb-6">{{ article.title }}</h1>
          <div class="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
            <p>{{ formatDate(article.updatedAt) }}</p>
            <span class="mx-2">•</span>
            <span v-for="(tag, id) in article.tags" :key="id" class="px-3 py-1 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs">
              <router-link :to="`/blog/tag/${tags[tag].slug}`">{{ tags[tag].name }}</router-link>
            </span>
          </div>
          <p class="text-lg mb-6">{{ article.description }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-4">Última actualización: {{ formatDate(article.updatedAt) }}</p>
          <nav class="mb-6">
            <ul>
              <li v-for="link in article.toc" :key="link.id" :class="{ 'font-semibold': link.depth === 2 }">
                <router-link :to="`#${link.id}`" class="hover:underline text-gray-700 dark:text-gray-300 py-2" :class="{ 'ml-4': link.depth === 3 }">{{ link.text }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <div class="w-full lg:w-3/4">
          <div class="prose dark:prose-dark mb-8">
            <nuxt-content :document="article" />
          </div>
          <router-link to="/blog" class="text-blue-600 dark:text-blue-400 font-bold hover:underline">← Volver a todos los artículos</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags').only(['name', 'slug']).where({ name: { $containsAny: article.tags } }).fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles').only(['title', 'slug']).sortBy('createdAt', 'asc').surround(params.slug).fetch()
    return {
      article,
      tags,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es', options)
    }
  }
}
</script>

<style>
.prose h1 {
  color: inherit; 
  font-size: 2.25rem; 
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5em;
}
.prose h2 {
  color: inherit;
  font-size: 1.75rem; 
  font-weight: 600;
  margin-top: 2em;
  margin-bottom: 0.5em;
}
.prose h3 {
  color: inherit;
  font-size: 1.5rem; 
  font-weight: 500;
  margin-top: 2em;
  margin-bottom: 0.5em;
}
</style>
