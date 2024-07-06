<template>
    <h1>This page is forced with light mode</h1>
  </template>
  
  <script>
  // For Nuxt Bridge
  export default {
    colorMode: 'light',
  }
  // For Nuxt 3
  definePageMeta({
    colorMode: 'light',
  })
  </script>
  