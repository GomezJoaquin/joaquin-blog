<template>
  <div class="contact-container">
    <h1 class="title">Contáctame</h1>
    <p class="description">
      Si tienes preguntas o deseas conectarte, no dudes en contactarme a través de los siguientes medios:
    </p>
    <ul class="contact-list">
      <li>
        <a href="mailto:ggomezjjoaquin@gmail.com">ggomezjjoaquin@gmail.com</a>
      </li>
      <li>
        <a href="https://linkedin.com/in/joaquingomezalonso" target="_blank" rel="noopener noreferrer">Perfil de LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/GomezJoaquin" target="_blank" rel="noopener noreferrer">Perfil de GitHub</a>
      </li>
      <li>
        <a href="https://instagram.com/tuinstagram" target="_blank" rel="noopener noreferrer">Perfil de Instagram</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Página de Contacto',
    };
  },
}
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 80px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
}

.title {
  font-size: 24px;
  margin-bottom: 30px;
}

.description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-list li {
  margin-bottom: 10px;
}

.contact-list a {
  color: #0073e6;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.contact-list a:hover {
  text-decoration: underline;
  color: #0056b3;
}
</style>