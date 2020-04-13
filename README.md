# vue-add-event-listener

A plugin call removeEventListener automatically when a VueInstance has been destroyed.

## Getting Started

You can install vue-add-event-listener using npm or by downloading the minified build on GitHub.

```bash
npm install vue-add-event-listener
```

Then import the plugin in your application entry point (typically main.js if you used vue-cli to scaffold your project) and tell Vue to use it. 

```js
import Vue from 'vue'
import App from './App.vue'
import VueAddEventListener from 'vue-add-event-listener'
 
Vue.use(VueAddEventListener)
 
new Vue({
  render: h => h(App)
}).$mount('#app')
```

In component, you can use `this.$listen` instead of `addEventListener`. You don't need to call `removeEventListner`, when a instance has been destroyed.

```js
export default {
  mounted () {
    this.$listen(window, 'resize', () => {
        console.log('resized!')
    })
  },
}
```