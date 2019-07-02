import Vue from 'vue'
/*eslint-disable*/
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyD-ITGNYGB4jvVY-ifq-ZgnKTSd5PAF3Nw",
      authDomain: "vue-spa-app.firebaseapp.com",
      databaseURL: "https://vue-spa-app.firebaseio.com",
      projectId: "vue-spa-app",
      storageBucket: "",
      messagingSenderId: "960616649643",
      appId: "1:960616649643:web:4ad06990bb7e982b"
    });
    fb.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch('autoLoginUser',user)
      }
    })
  }
})
