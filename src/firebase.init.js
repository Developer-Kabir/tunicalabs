import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAplix5UtoyBfrcIGl169VhBJTHZjgnaVQ",
  authDomain: "tunicalabs-e6dff.firebaseapp.com",
  projectId: "tunicalabs-e6dff",
  storageBucket: "tunicalabs-e6dff.appspot.com",
  messagingSenderId: "1043446588000",
  appId: "1:1043446588000:web:c37d09807d1c6a506b5905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;