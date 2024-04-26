<template>
  <div class="font-sans antialiased text-gray-900 leading-relaxed">
    <!-- Contenedor principal centrado y margen automático -->
    <main class="mt-16 mb-8 mx-auto max-w-4xl px-8">
      <!-- Título y saludo simple -->
      <h1 class="text-5xl font-bold mb-4">Joaquín Gómez Alonso</h1>
      
      <!-- Descripción corta y actualizada -->
      <p class="mb-4 text-xl">DevOps | Código | Reflexiones</p>

      <!-- Sección actual 'Ahora' con lista de viñetas -->
      <section class="my-8">
        <h2 class="text-3xl font-semibold mb-4">En este momento</h2>
        <ul class="list-none space-y-2">
          <li>- Implementando proyectos con las tecnologías más recientes de DevOps.</li>
          <li>- Compartiendo mi camino y aprendizajes en mi blog personal.</li>
          <li>- Equilibrando vida y código, con el mate siempre a mi lado.</li>
        </ul>

        <!-- Incluye una invitación a tu blog -->
        <p class="mt-6">
          Descubre más y únete a la conversación en
          <NuxtLink to="/blog" class="text-blue-600 hover:underline">mi blog</NuxtLink>.
        </p>
      </section>

      <!-- Información de contacto rápida -->
      <section class="my-8">
        <h2 class="text-3xl font-semibold mb-4">Mantengámonos en contacto</h2>
        <a href="mailto:gggomezjjoaquin@gmail.com" class="text-blue-600 hover:underline">gggomezjjoaquin@gmail.com</a>
      </section>
    </main>

    <!-- Espacio opcional para el pie de página si es necesario -->
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
export default {
  // No se requiere script específico para esta página
};
</script>

<style>
.main {
  min-height: calc(100vh - 100px); /* Ajusta la altura para el header y footer si existen */
}
</style>