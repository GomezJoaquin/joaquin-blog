<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <!-- Encabezado -->
    <header class="bg-white dark:bg-gray-900 py-6 shadow-md">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 class="text-3xl font-semibold">
          Joaquín Gómez Alonso
        </h1>
        <nav class="flex space-x-4">
          <NuxtLink to="/blog" class="text-base hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            Blog
          </NuxtLink>
          <NuxtLink to="/contact" class="text-base hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            Contacto
          </NuxtLink>
        </nav>
      </div>
    </header>
    <!-- Contenido principal -->
    <main class="max-w-5xl mx-auto py-16 px-6">
      <section class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">¿Quién soy?</h2>
        <p class="text-base leading-relaxed">
          Soy un constructor, construir es mi esencia. Académicamente, soy Tecnólogo en Informática y en el ámbito laboral soy un programador dedicado a DevOps. Codifico pipelines para automatizar despliegues en Kubernetes y AWS.
        </p>
      </section>

      <section class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">¿Qué estoy haciendo ahora?</h2>
        <ul class="list-disc pl-8 space-y-3">
          <li class="text-gray-600 text-lg">Desplegando un proyecto para una mutualista médica mediante el AWS Cloud Development Kit (CDK).</li>
          <li class="text-gray-600 text-lg">Estudiando para dar el examen de AWS Cloud Practitioner, también tengo el objetivo de dar los exámenes de Azure Fundamentals y CKA de Kubernetes en este mismo año.</li>
          <li class="text-gray-600 text-lg">Pasando tiempo de calidad junto a mi pareja, viajando y conociendo lugares en Montevideo.</li>
          <li class="text-gray-600 text-lg">Alimentándome sano y entrenando en el gimnasio 5 veces a la semana, los martes juego al fútbol en un torneo empresarial.</li>
        </ul>
      </section>

      <section class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">🌐 Blog</h2>
        <p class="text-base leading-relaxed">
          Descubre más sobre mis intereses en <NuxtLink to="/blog" class="text-blue-600 hover:underline">mi blog</NuxtLink>. Comparto reflexiones, guías y experiencias sobre tecnología y desarrollo.
        </p>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-900 py-6 mt-auto">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <p class="text-sm">
          &copy; 2024 Joaquín Gómez Alonso
        </p>
        <div class="flex items-center space-x-4">
          <!-- Github -->
          <a href="https://github.com/GomezJoaquin" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512" class="h-5 w-5">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </a>
          <!-- Linkedin -->
          <a href="https://linkedin.com/in/joaquingomezalonso" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" class="h-5 w-5">
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  font-family: 'Inter', sans-serif;
}

header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

main {
  min-height: calc(100vh - 100px); /* Ajusta la altura para el header y footer */
  padding-bottom: 2rem; /* Espacio extra después del contenido */
}

footer {
  background-color: #374151;
  margin-top: 4rem; /* Espacio adicional encima de footer */
}

.inline-block {
  display: inline-block;
}

.align-middle {
  vertical-align: middle;
}

.h-5 {
  height: 1.25rem;
}

.w-5 {
  width: 1.25rem;
}

ul {
  padding-left: 1rem; /* Espacio para la lista con discos */
}

ul li::before {
  content: "\2022"; /* Agrega el disco manualmente */
  color: var(--text-gray-800);
  display: inline-block; 
  width: 1em; /* Espacio antes de los ítems de la lista */
  margin-left: -1em; /* Alinea los discos con el contenido */
}

p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}

.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}

.feather:hover {
  top: -3px;
}

.preferred .feather {
  border-color: var(--color-primary);
  top: -3px;
}

.selected .feather {
  color: var(--color-primary);
}

</style>