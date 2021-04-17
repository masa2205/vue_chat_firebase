import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(firestorePlugin)

const firebaseApp = firebase.initializeApp({
  // ここにfirebaseのapi情報をコピペします。
    apiKey: "AIzaSyDTPfR0H1qd60rVJom38BzKoycBhXmFxBg",
    authDomain: "vuetify-share-house.firebaseapp.com",
    databaseURL: "https://vuetify-share-house-default-rtdb.firebaseio.com",
    projectId: "vuetify-share-house",
    storageBucket: "vuetify-share-house.appspot.com",
    messagingSenderId: "778663246711",
    appId: "1:778663246711:web:ae8920f11562e6573e3f72",
    measurementId: "G-XCGGEJ1SLR"

});

export const db = firebaseApp.firestore()