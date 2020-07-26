import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBXhOg9CvKkuUyuzVyK9qbww73Gsgn4Dnk",
    authDomain: "webview-infa.firebaseapp.com",
    databaseURL: "https://webview-infa.firebaseio.com",
    projectId: "webview-infa",
    storageBucket: "webview-infa.appspot.com",
    messagingSenderId: "669698331528",
    appId: "1:669698331528:web:7db734a6ba6077014ba03d",
    measurementId: "G-RG1KLNKP0Z"
};
firebase.initializeApp(config);
export default firebase;