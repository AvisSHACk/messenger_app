import { auth, createUserWithEmailAndPassword } from "./auth";
import {db, doc, setDoc, getDoc, onSnapshot, collection } from "./firestore";
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

const getChats = (setChats) => {
    const onSuscribe = onSnapshot(collection(db, 'chats'), ( snapashot ) => {
        setChats(snapashot.docs.map((chat) => {
            return {...chat.data(), id: chat};
        }));
    })

    return onSuscribe;
}

export {createUser, getUrlProfile, getUserLogged, getChats};