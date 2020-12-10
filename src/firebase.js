import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyC5K8-V8CUS9z7Lkunv6Lgj-aAM2r_PLng",
    authDomain: "rishkify.firebaseapp.com",
    projectId: "rishkify",
    storageBucket: "rishkify.appspot.com",
    messagingSenderId: "898081040874",
    appId: "1:898081040874:web:643997227cbbd3d3366a93",
    measurementId: "G-EPC6PD7DBL" 
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider()
export {auth,provider};
export default db;
 