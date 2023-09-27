import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgUvqPeTE_Fv39OJNedvXEjQj4Ymyy9l4",
  authDomain: "authproj-9229b.firebaseapp.com",
  projectId: "authproj-9229b",
  storageBucket: "authproj-9229b.appspot.com",
  messagingSenderId: "646073108314",
  appId: "1:646073108314:web:7204a6869cc91bace59563",
  measurementId: "G-J2MJW67QXM"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const app = createApp(App)

app.use(router)

app.mount('#app')
