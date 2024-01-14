import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5Ra3p6rxK719QIOuO5Twf4ugsiL9nHDo",
  authDomain: "tweetx-assignment.firebaseapp.com",
  projectId: "tweetx-assignment",
  storageBucket: "tweetx-assignment.appspot.com",
  messagingSenderId: "256149075832",
  appId: "1:256149075832:web:57e22e383607b29829fa8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
