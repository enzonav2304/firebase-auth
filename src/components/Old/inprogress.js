import db from "../../firestore";



  methods: {
    registerUser () {
      firebase.auth().createUserWithEmailAndPassword(this.userData.email, this.userData.password)
      .then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: this.userData.username
        })
        .then(() => {
          db.collection('users').add({
            firstname: this.userData.firstname,
            lastname: this.userData.lastname,
            username: this.userData.username,
            email: this.userData.email,
          })
          .then(() => {
            this.$router.replace('home')
          }).catch(err => {
            this.errorMessage = err.message
          })
        }).catch(err => {
          this.errorMessage = err.message
        })
      }).catch(err => {
        this.errorMessage = err.message
      })



   methods: {
      registerUser () {
        firebase.auth().createUserWithEmailAndPassword(this.userData.email, this.userData.password)
        .then(() => {
          db.collection('users').add({
            firstname: this.userData.firstname,
            lastname: this.userData.lastname,
            username: this.userData.username,
            email: this.userData.email,
          }).then(() => {
            this.$router.replace('home')
          }).catch(err => {
            this.errorMessage = err.message
          })
          .catch(err => {
            this.errorMessage = err.message
          })
        }).catch(err => {
          this.errorMessage = err.message
        })
      }
    }


import Component from './components/Component.vue'
import TestComponent from './components/TestComponent.vue'
const Router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/test1', component: Component },
    { path: '/test2', component: TestComponent }
  ]
})

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/é', component: Unicode }
  ]
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
  router,
  template: `
    <div id="app">
      <h1>Basic</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
        <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
          <a>/bar</a>
        </router-link>
        <li><router-link to="/é">/é</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
