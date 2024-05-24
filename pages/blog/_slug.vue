<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-center">
      <div class="lg:w-3/4">
        <h1 class="text-3xl lg:text-4xl font-bold mb-4">{{ article.title }}</h1>
        <div class="flex items-center mb-4 text-sm text-gray-500">
          <p>{{ formatDate(article.updatedAt) }}</p>
          <span class="mx-2">•</span>
        </div>
        <div class="flex flex-wrap mb-4">
          <span v-for="(tag, id) in article.tags" :key="id">
            <router-link :to="`/blog/tag/${tags[tag].slug}`" class="px-3 py-1 mr-2 mb-2 rounded-full bg-gray-200 text-gray-700 text-xs">{{ tags[tag].name }}</router-link>
          </span>
        </div>
        <p class="text-base mb-4">{{ article.description }}</p>
        <p class="text-xs text-gray-500 mb-4">Última actualización: {{ formatDate(article.updatedAt) }}</p>
        <nav class="mb-6">
          <ul>
            <li v-for="link of article.toc" :key="link.id" :class="{ 'font-semibold': link.depth === 2 }">
              <router-link :to="`#${link.id}`" class="hover:underline" :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }">{{ link.text }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <div class="lg:w-3/4">
        <div class="markdown-body">
          <nuxt-content :document="article" />
        </div>
      </div>
    </div>
    <div class="mt-8 flex justify-center">
      <div class="lg:w-3/4">
        <router-link to="/blog" class="text-blue-500 font-bold hover:underline">← Volver a todos los artículos</router-link>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.markdown-body p {
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
}

.markdown-body h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 2.25rem;
}

.markdown-body h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1.75rem;
}

.markdown-body h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;
}

.markdown-body a {
  color: #3182ce;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.markdown-body a:hover {
  color: #2457a8;
  text-decoration: underline;
}

.text-blue-500 {
  color: #3182ce;
}

.text-blue-500:hover {
  color: #2457a8;
  text-decoration: underline;
}

body {
  font-family: 'Roboto', sans-serif;
}
</style>