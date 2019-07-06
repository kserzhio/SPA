import Vue from 'vue'
/*eslint-disable*/
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'
import ByuModal from "./components/Shared/ByuModal";


Vue.use(Vuetify)
Vue.component('app-buy-modal',ByuModal)
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
      storageBucket: "vue-spa-app.appspot.com",
      messagingSenderId: "960616649643",
      appId: "1:960616649643:web:4ad06990bb7e982b"
    });
    fb.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch('autoLoginUser',user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
