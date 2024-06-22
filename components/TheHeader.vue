<template>
  <header class="bg-gray-800 py-6 px-4 shadow-md">
    <div class="container mx-auto flex items-center justify-between">
      <div>
        <NuxtLink to="/" class="text-4xl font-semibold text-white tracking-tight hover:text-gray-300 transition-colors duration-300">
          Joaquín Gómez Alonso
        </NuxtLink>
        <p class="text-xl text-gray-400 mt-1">DevOps | Código | Reflexiones</p>
      </div>
      <!-- Aquí irían otros elementos del header como enlaces de navegación o botones -->
      <!-- Si el diseño no requiere un input de búsqueda, lo hemos omitido -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
  // Aquí puedes añadir lógica de tu componente si es necesario
}
</script>

<style>
/* Tus estilos personalizados para TheHeader si necesitas alguno fuera de Tailwind */
</style>