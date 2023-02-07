import { auth, createUserWithEmailAndPassword } from "./auth";
import {db, doc, setDoc, getDoc, onSnapshot, collection,
    query, 
    where,
    getDocs,
    addDoc } from "./firestore";
import { storage, getDownloadURL, ref } from "./storage";

const createUser = async (name, email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    
    await setDoc(doc(db, `users/${user.user.uid}`), {
        name: name,
        email: email,
        photo: await getUrlProfile('guest.png')
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
            return {...chat.data(), id: chat.id};
        }));
    })

    return onSuscribe;
}

const getUser = async (email) => {
    // let user = "";
    const q = query(collection(db, `users`),  where("email", "==", `${email}`));
    const userCollection = await getDocs(q);
    // userCollection.forEach((doc) => {
    //     user = doc.data();
    // });

    // return user;
    return userCollection.docs.map((user) => {
        return user.data();
    });
}

const addChat = async (usersNames, userEmails, usersPhoto) => {
    await addDoc(collection(db, `chats`), {

        names: usersNames,
        emails: userEmails,
        photos: usersPhoto

    });
}

export {createUser, getUrlProfile, getUserLogged, getChats, getUser, addChat};