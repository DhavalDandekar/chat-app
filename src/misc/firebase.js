import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyCJpLvhE021A5_bxQjtSLfawY8a8mGj9zM',
  authDomain: 'chat-web-app-68d54.firebaseapp.com',
  projectId: 'chat-web-app-68d54',
  storageBucket: 'chat-web-app-68d54.appspot.com',
  messagingSenderId: '190894642015',
  appId: '1:190894642015:web:bb64680ef7b98167035cea',
}

const app = firebase.initializeApp(config)

export const auth = app.auth()
export const database = app.database()
export const storage = app.storage()
