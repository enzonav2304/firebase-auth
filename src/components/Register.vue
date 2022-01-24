<template>
  <div class="sub-container">
    <div class="login bg-white rounded-lg flex flex-col w-full shadow-md">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Register</h1>
      <p class="leading-relaxed mb-5 text-gray-600">Fill fields below to register</p>
      <div class="relative mb-4">
        <label for="firstname" class="leading-7 text-sm text-gray-600">Firstname</label>
        <input 
          type="text"           
          name="firstname" 
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          v-model="userData.firstname"
        >
      </div>
      <div class="relative mb-4">
        <label for="lastname" class="leading-7 text-sm text-gray-600">Lastname</label>
        <input 
          type="text" 
          name="lastname" 
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          v-model="userData.lastname"
        >
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Username</label>
        <input 
          type="text"          
          name="username" 
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          v-model="userData.username"
        >
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          v-model="userData.email"
        >
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
        <input 
          type="password"           
          name="email" 
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          v-model="userData.password"
        >
      </div>
      <button 
        @click="registerUser()"
        class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >Register</button>
      <p class="text-xs text-gray-500 mt-3">Laoreet magna curae; maecenas magnis et sed.</p>
    </div>
  </div>  
</template>

<script>
import firebase from 'firebase/compat/app'
import db from '../firestore'

export default {
  name: 'Register',
  data () {
    return {
      userData: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
      },
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    registerUser () {
      firebase.auth().createUserWithEmailAndPassword(this.userData.email, this.userData.password)
        .then(() => {
          db.collection('users').add({
            firstname: this.userData.firstname,
            lastname: this.userData.lastname,
            username: this.userData.username,
            email: this.userData.email
          })
          .then(() => {
            this.$router.push('/home')
          })
          .catch(err => {
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
}
</script>
<style ></style>
