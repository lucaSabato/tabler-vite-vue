# Tabler w/ Vite w/ Vue

A very crude and experimental npm metapackage to use Tabler and the Bootstrap Javascript Plugins in a Vite/Vue3 context. Tabler Javascript does not works with Vue3.

Include [Tabler](https://tabler.io)'s source Sass and individual [Bootstrap](https://getbootstrap.com) JavaScript plugins with [Vue](https://vuejs.org) and [Vite](https://vitejs.dev/).

## Edit in browser

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/lucaSabato/tabler-vite-vue/?file=index.html)

## How to see the demo

```sh
git clone https://github.com/lucaSabato/tabler-vite-vue.git
npm i
npm start
```
## How to use

Prerequisite

```sh
npm i -D sass
```
Install the package in your project

```sh
npm i -D sass
npm i tabler-vite-vue
```
Import the core file into your main.js file

```js
import 'tabler-vite-vue/dist/core.js'
```

or


```js
import 'tabler-vite-vue'
```

