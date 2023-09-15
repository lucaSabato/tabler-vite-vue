# Tabler w/ Vite w/ Vue

A very crude and experimental npm metapackage to use Tabler and the Bootstrap Javascript Plugins in a Vite/Vue3 context. Tabler Javascript does not works with Vue3.

Include [Tabler](https://tabler.io)'s source Sass and individual [Bootstrap](https://getbootstrap.com) JavaScript plugins with [Vue](https://vuejs.org) and [Vite](https://vitejs.dev/).

## Edit in browser

[![Open with Codesandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/lucaSabato/tabler-vite-vue/tree/main)

!!This package required Node v18 and it is not yet supported in StackBlitz as the default nove is v16.20.0

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/lucaSabato/tabler-vite-vue/?file=index.html)


## How to see the demo

```sh
git clone https://github.com/lucaSabato/tabler-vite-vue.git
npm i
npm start
```
open `http://localhost:8080` in your browser

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
// main.js
import 'tabler-vite-vue/dist/core.js'
```

or


```js
// main.js
import 'tabler-vite-vue'
```

