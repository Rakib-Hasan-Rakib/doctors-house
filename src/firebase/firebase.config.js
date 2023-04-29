// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnr1xmlp1BIggIAbW5dvAIWhNszWHmrtU",
    authDomain: "doctors-house-da472.firebaseapp.com",
    projectId: "doctors-house-da472",
    storageBucket: "doctors-house-da472.appspot.com",
    messagingSenderId: "636000164790",
    appId: "1:636000164790:web:31ee8bafe59e11a698bf17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app