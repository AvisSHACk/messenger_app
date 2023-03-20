import { app } from "./firebaseConfig";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateEmail } from "firebase/auth";
const auth = getAuth(app);

export {
    auth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateEmail
}