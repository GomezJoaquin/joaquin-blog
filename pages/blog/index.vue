<template>
  <div class="m-8">
    <TheHeader />

    <h1 class="font-bold text-4xl mb-8 text-center">Artículos</h1>
    <div class="flex flex-wrap justify-center">
      <div v-for="article in articles" :key="article.slug" class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="block transition duration-300 ease-in-out transform hover:scale-105">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img v-if="article.img" :src="article.img" alt="Article image" class="w-full h-48 object-cover">
            <div class="p-4">
              <h2 class="font-bold text-lg mb-2">{{ article.title }}</h2>
              <p class="text-sm text-gray-600 mb-2">by {{ article.author.name }}</p>
              <p class="text-gray-700 text-sm">{{ article.description }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <h3 class="font-bold text-2xl uppercase mb-4 text-center">Topics</h3>
    <div class="flex flex-wrap justify-center">
      <div v-for="tag in tags" :key="tag.slug" class="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
        <NuxtLink :to="`/blog/tag/${tag.slug}`" class="block bg-white rounded-lg shadow-md py-4 transition duration-300 ease-in-out transform hover:scale-105">
          <p class="font-bold text-gray-600 uppercase tracking-wider text-sm">{{ tag.name }}</p>
        </NuxtLink>
      </div>
    </div>

    <footer class="flex justify-center border-t-2 border-gray-500 pt-4 mt-8">
      <p>
        <a href="#" class="font-bold hover:underline">Joaquín Gómez Alonso</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles').only(['title', 'description', 'img', 'slug', 'author']).sortBy('createdAt', 'desc').fetch()
    const tags = await $content('tags').only(['name', 'description', 'img', 'slug']).sortBy('createdAt', 'asc').fetch()
    return { articles, tags }
  }
}
</script>

<style scoped>
/* Estilos para la tarjeta de artículo */
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img {
  border-radius: 8px 8px 0 0;
}

/* Estilos para los enlaces de los tags */
.tag-link {
  background-color: #fff;
  border-radius: 8px;
}
</style>
