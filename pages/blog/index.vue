<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <header class="py-6 bg-white dark:bg-gray-900 fixed w-full top-0 left-0 right-0 z-30 shadow-md">
      <div class="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <NuxtLink to="/" class="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
          Joaquín Gómez Alonso
        </NuxtLink>
        <button @click="toggleNav" class="text-gray-900 dark:text-gray-100 lg:hidden">
          <!-- SVG icon toggle -->
        </button>
        <nav :class="{'flex': navOpen, 'hidden': !navOpen}" class="lg:flex lg:items-center absolute lg:relative lg:z-auto lg:shadow-none left-0 right-0 bg-white dark:bg-gray-900 shadow-md lg:shadow-none lg:bg-transparent lg:dark:bg-transparent lg:space-x-6 p-6 lg:p-0 transition duration-300">
          <NuxtLink to="/contact" class="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300 lg:bg-transparent">
            Contact
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-24 pb-8 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
      <!-- Sección de los artículos -->
      <section class="max-w-6xl mx-auto text-center py-12">
        <h1 class="text-5xl font-light text-gray-900 dark:text-gray-100 mb-10">
          Todos los artículos
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Explora una colección de artículos sobre desarrollo y diseño.
        </p>
        <div class="flex flex-wrap justify-center -mx-4">
          <div v-for="article in articles" :key="article.slug" class="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="block shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <img v-if="article.img" :src="article.img" :alt="article.title" class="w-full h-48 object-cover"/>
              <div class="p-6">
                <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{{ article.title }}</h2>
                <p class="text-gray-700 dark:text-gray-300">{{ article.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Sección de los temas -->
      <section class="max-w-6xl mx-auto text-center py-12">
        <h2 class="text-4xl font-light text-gray-900 dark:text-gray-100 uppercase mb-10">
          Temas de interés
        </h2>
        <div class="flex flex-wrap justify-center -mx-4">
          <div v-for="tag in tags" :key="tag.slug" class="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <NuxtLink :to="`/blog/tag/${tag.slug}`" class="block shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 rounded-lg">
              <div class="p-6">
                <p class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ tag.name }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="text-center py-4 mt-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <p class="text-gray-600 dark:text-gray-300 text-sm">
        &copy; {{ new Date().getFullYear() }} Joaquín Gómez Alonso.
      </p>
      <div class="flex justify-center mt-2">
        <NuxtLink to="/" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium mx-2 text-sm">
          Inicio
        </NuxtLink>
        <span class="text-gray-600 dark:text-gray-300">|</span>
        <NuxtLink to="/about" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium mx-2 text-sm">
          Acerca de mí
        </NuxtLink>
        <span class="text-gray-600 dark:text-gray-300">|</span>
        <NuxtLink to="/contact" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium mx-2 text-sm">
          Contacto
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
  },
  async asyncData({ $content }) {
    const articles = await $content("articles").only(["title", "description", "img", "slug", "author"]).sortBy("createdAt", "desc").fetch();
    const tags = await $content("tags").only(["name", "slug"]).fetch();
    return { articles, tags };
  },
};
</script>
