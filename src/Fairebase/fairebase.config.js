// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsAfvDl1F9n8-iFZrcDV98qEAn4_KsEfU",
  authDomain: "dragon-news-react-e0991.firebaseapp.com",
  projectId: "dragon-news-react-e0991",
  storageBucket: "dragon-news-react-e0991.appspot.com",
  messagingSenderId: "1075125305769",
  appId: "1:1075125305769:web:c332348472da73d4ad84b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;