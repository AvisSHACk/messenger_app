import { orderBy } from "firebase/firestore";
import { auth, createUserWithEmailAndPassword } from "./auth";
import {db, doc, setDoc, onSnapshot, collection,
    query, 
    where,
    getDocs,
    addDoc,
    serverTimestamp } from "./firestore";
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

    const onSuscribe = onSnapshot(doc(db, `users/${user.uid}`), ( snapashot ) => {
        changeUserCurrent(snapashot.data());
    })

    return onSuscribe;

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

const getChats = (setChats, setLoading) => {
    const onSuscribe = onSnapshot(collection(db, 'chats'), ( snapashot ) => {
        setChats(snapashot.docs.map((chat) => {
            return {...chat.data(), id: chat.id};
        }));
        setLoading(false);
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

const addMessage = async (id, message, email, photo) => {
    await addDoc(collection(db, `chats/${id}/mensajes`), {

        name: 'nombre',
        email: email,
        message: message,
        photos: photo,
        timeStamp: serverTimestamp()

    });
}

const getMessages = (id, setMessages, setLoading) => {
    setLoading(true);
    const onSuscribe = onSnapshot(query(collection(db, `chats/${id}/mensajes`), orderBy("timeStamp")), 
    (snapshot) => {
        setMessages(snapshot.docs.map((chat) => {
            return {...chat.data(), id: chat.id};
        }));
        setLoading(false);
    });


    return onSuscribe;
}

export {
    createUser, 
    getUrlProfile, 
    getUserLogged, 
    getChats, 
    getUser, 
    addChat,
    addMessage,
    getMessages
};