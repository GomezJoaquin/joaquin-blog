// generated by the @nuxtjs/tailwindcss <https://github.com/nuxt-modules/tailwindcss> module at 6/22/2024, 3:52:27 PM
const configMerger = require("/home/joaquin/Sources/joaquin-blog/node_modules/@nuxtjs/tailwindcss/dist/runtime/merger.mjs");

const inlineConfig = {"content":[],"theme":{"extend":{}},"plugins":[]};

const config = [
require("./../tailwind.config.js")
].reduce((prev, curr) => configMerger(curr, prev), configMerger(inlineConfig, { content: ["/home/joaquin/Sources/joaquin-blog/components/**/*.{vue,js,mjs}","components/**/*.{vue,js,mjs}","/home/joaquin/Sources/joaquin-blog/layouts/**/*.{vue,js,mjs}","/home/joaquin/Sources/joaquin-blog/pages/**/*.{vue,js,mjs}","/home/joaquin/Sources/joaquin-blog/composables/**/*.{js,ts,mjs}","/home/joaquin/Sources/joaquin-blog/utils/**/*.{js,ts,mjs}","/home/joaquin/Sources/joaquin-blog/{A,a}pp.{vue,js,mjs}","/home/joaquin/Sources/joaquin-blog/{E,e}rror.{vue,js,mjs}","/home/joaquin/Sources/joaquin-blog/app.config.{js,ts,mjs}"] }));

module.exports = config
