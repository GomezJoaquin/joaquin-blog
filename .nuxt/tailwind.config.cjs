// generated by the @nuxtjs/tailwindcss <https://github.com/nuxt-modules/tailwindcss> module at 5/24/2024, 8:08:14 PM
const configMerger = require("/home/joaquin/code/joaquin-blog/node_modules/@nuxtjs/tailwindcss/dist/runtime/merger.mjs");

const inlineConfig = {"content":[],"theme":{"extend":{}},"plugins":[]};

const config = [
require("./../tailwind.config.js")
].reduce((prev, curr) => configMerger(curr, prev), configMerger(inlineConfig, { content: ["/home/joaquin/code/joaquin-blog/components/**/*.{vue,js,mjs}","components/**/*.{vue,js,mjs}","/home/joaquin/code/joaquin-blog/layouts/**/*.{vue,js,mjs}","/home/joaquin/code/joaquin-blog/pages/**/*.{vue,js,mjs}","/home/joaquin/code/joaquin-blog/composables/**/*.{js,ts,mjs}","/home/joaquin/code/joaquin-blog/utils/**/*.{js,ts,mjs}","/home/joaquin/code/joaquin-blog/{A,a}pp.{vue,js,mjs}","/home/joaquin/code/joaquin-blog/{E,e}rror.{vue,js,mjs}","/home/joaquin/code/joaquin-blog/app.config.{js,ts,mjs}"] }));

module.exports = config
