<template>
  <div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
    <div class="container mx-auto p-6 md:p-12 lg:p-20">
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-8 md:p-12 lg:p-16 max-w-2xl mx-auto">
        <div class="mb-6">
          <button
            @click="goBack"
            class="flex items-center text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" class="mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Regresar
          </button>
        </div>
        
        <h1 class="text-4xl font-semibold mb-8 text-center">Contáctame</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 text-center mb-10">
          Si tienes preguntas o deseas conversar, no dudes en contactarme a través de los siguientes medios:
        </p>
        
        <ul class="space-y-4">
          <li>
            <a href="mailto:ggomezjjoaquin@gmail.com" class="text-lg text-blue-600 dark:text-blue-400 hover:underline">ggomezjjoaquin@gmail.com</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/joaquingomezalonso" target="_blank" rel="noopener noreferrer" class="text-lg text-blue-600 dark:text-blue-400 hover:underline">Perfil de LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/GomezJoaquin" target="_blank" rel="noopener noreferrer" class="text-lg text-blue-600 dark:text-blue-400 hover:underline">Perfil de GitHub</a>
          </li>
          <li>
            <a href="https://instagram.com/joaquingomez_070" target="_blank" rel="noopener noreferrer" class="text-lg text-blue-600 dark:text-blue-400 hover:underline">Perfil de Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>