import { getFirestore, doc, setDoc, getDoc, onSnapshot, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { app } from "./firebaseConfig";

const db = getFirestore(app);

export {
    db,
    doc, 
    setDoc,
    getDoc,
    onSnapshot,
    collection,
    query, 
    where,
    getDocs,
    addDoc
}