import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBiMyefTWhEQMREZgHuENSDUiUeMJzm0v0",
  authDomain: "netflix-clone-7982f.firebaseapp.com",
  projectId: "netflix-clone-7982f",
  storageBucket: "netflix-clone-7982f.appspot.com",
  messagingSenderId: "321293302397",
  appId: "1:321293302397:web:03d307210301ce97308f14"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()

export {auth}
export default db

