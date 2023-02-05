import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "./firebaseConfig";

const db = getFirestore(app);

export {
    db,
    doc, 
    setDoc,
    getDoc
}