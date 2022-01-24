<template>
  <div class="sub-container">
    <div class="login bg-white rounded-lg flex flex-col w-full shadow-md">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Login</h1>
      <p class="leading-relaxed mb-5 text-gray-600">Insert you credential to sing in</p>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          v-model="email"
        >
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Password</label>
        <input 
          type="password" 
          id="email" name="email" 
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          v-model="password"
        >
      </div>
      <button 
        @click="login()"
        class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >Sign in</button>
      <p class="text-xs text-gray-500 mt-3">Laoreet magna curae; maecenas magnis et sed.</p>
    </div>
  </div>    
</template>

<script>
import firebase from 'firebase/compat/app'
import db from '../firestore'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user)
          this.$router.push('/dashboard')
        })
        .catch(err => {
          this.errorMessage = err.message
        })
    }
  }
}
</script>


<style >

</style>
