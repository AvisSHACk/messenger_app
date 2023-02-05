import { auth, createUserWithEmailAndPassword } from "./auth";
import {db, doc, setDoc, getDoc } from "./firestore";
import { storage, getDownloadURL, ref } from "./storage";

const createUser = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    
    await setDoc(doc(db, `users/${user.user.uid}`), {
        name: "Ada",
        email: "Lovelace",
        photo: 'guest.png'
    });
    
}

const getUserLogged = async (user, changeUserCurrent) => {

    const userRef = doc(db, `users/${user.uid}`);
    const userCollection = await getDoc(userRef);
    changeUserCurrent(userCollection.data());

}

// const getUserLogged = async (user) => {

//     const userRef = doc(db, `users/${user.uid}`);
//     const userCollection = await getDoc(userRef);

//     return userCollection.data();

// }

const getUrlProfile = async (routePhoto) => {
    const refPhoto = ref(storage, routePhoto);
    const urlPhoto = await getDownloadURL(refPhoto);
    return urlPhoto;
}

export {createUser, getUrlProfile, getUserLogged};