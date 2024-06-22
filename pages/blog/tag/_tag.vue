<template>
  <div class="flex flex-col min-h-screen w-full bg-white dark:bg-gray-900">
    <div class="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 py-12 text-center">
      
      <!-- Back Link with Icon -->
      <NuxtLink to="/" class="flex items-center text-gray-800 dark:text-gray-100 mb-8 hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
        <svg class="mr-2 group-hover:translate-x-[-2px] transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Regresar a todos los artículos
      </NuxtLink>

      <!-- Tag Title -->
      <h1 class="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        {{ tag.name }}
      </h1>
      <!-- Tag Description -->
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">{{ tag.description }}</p>
      <!-- Tag Content -->
      <nuxt-content :document="tag" class="prose dark:prose-dark mx-auto mb-12" />
      <!-- Articles Header -->
      <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10">
        Artículos sobre {{ tag.name }}
      </h2>

      <!-- Cards Container -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Article Cards -->
        <div v-for="article in articles" :key="article.slug" class="group relative">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="block transition-shadow duration-200 ease-in-out shadow-md hover:shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800"
            :aria-label="'Leer más sobre ' + article.title"
          >
            <div class="flex flex-col md:flex-row">
              <!-- Article Image -->
              <img
                v-if="article.img"
                class="h-48 md:h-auto md:w-48 object-cover"
                :src="article.img"
                :alt="article.title"
              />
              <!-- Article Text Content -->
              <div class="p-6">
                <h3 class="font-semibold text-xl text-gray-800 dark:text-gray-100 mb-2">
                  {{ article.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  {{ article.description }}
                </p>
                <p class="font-medium text-gray-500 dark:text-gray-400 text-sm">
                  {{ formatDate(article.updatedAt) }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const [tags, articles] = await Promise.all([
      $content('tags').where({ slug: { $contains: params.tag } }).limit(1).fetch(),
      $content('articles').where({ tags: { $contains: params.tag } }).sortBy('createdAt', 'asc').fetch()
    ]);

    const tag = tags.length > 0 ? tags[0] : {};
    return { articles, tag };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es-ES', options);
    },
    // La función timeSince necesitará ser implementada
    timeSince(date) {
      // Método para calcular el tiempo relativo, como "hace 3 días"
    }
  }
}
</script>

<style scoped>
.group:hover .translate-x-[-2px] {
  transform: translateX(-2px);
}
</style>