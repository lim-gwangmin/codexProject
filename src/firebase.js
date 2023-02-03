import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtvbqA28mbqZYZqINF6KUOhcrJfa3INUU",
  authDomain: "codex-project-b4939.firebaseapp.com",
  projectId: "codex-project-b4939",
  storageBucket: "codex-project-b4939.appspot.com",
  messagingSenderId: "558480223114",
  appId: "1:558480223114:web:05d36364cbf0f8284c3673",
  measurementId: "G-X1PJ1T37DE"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { app, analytics }