import { orderBy } from "firebase/firestore";
import { auth, createUserWithEmailAndPassword } from "./auth";
import {db, doc, setDoc, onSnapshot, collection, updateDoc,
    query, 
    where,
    getDocs,
    addDoc,
    serverTimestamp } from "./firestore";
import { storage, getDownloadURL, ref, uploadBytes } from "./storage";

const createUser = async (name, email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    
    await setDoc(doc(db, `users/${user.user.uid}`), {
        name: name,
        email: email,
        photo: user.user.uid
    });
    
}


const getUserLogged = async (user, changeUserCurrent) => {

    const onSuscribe = onSnapshot(doc(db, `users/${user.uid}`), ( snapashot ) => {
        changeUserCurrent(snapashot.data());
    })

    return onSuscribe;

}

// const getUserLoggedd = async (user) => {

//     const userRef = doc(db, `users/${user.uid}`);
//     const userCollection = await getDoc(userRef);

//     return userCollection.data();

// }

const getUrlProfile = async (routePhoto) => {
    // const refPhoto = ref(storage, routePhoto);

    try {
        const refPhoto = ref(storage, routePhoto);
        const urlPhoto = await getDownloadURL(refPhoto);
        return urlPhoto;
    } catch (error) {
        const refPhoto = ref(storage, 'guest.png');
        const urlPhoto = await getDownloadURL(refPhoto);
        return urlPhoto;
    }
}

const getChats = (setChats, email, setLoading) => {
    const q = query(collection(db, "chats"), where("emails", "array-contains", email));
    const onSuscribe = onSnapshot(q, ( snapashot ) => {
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

const uploadPhoto = async (refPhoto, imageData) => {
    const photoRef = ref(storage, `${refPhoto}`);
    const res = await uploadBytes(photoRef, imageData);

    return res;
}

const uploadPhotoDoc = async (res, id) => {
    await updateDoc(doc(db, `users/${id}`), {
        photo: res.metadata.fullPath
    }).then(() => {
        console.log('Se actualizo la foto de perfil');
    })
}

export {
    createUser, 
    getUrlProfile, 
    getUserLogged, 
    getChats, 
    getUser, 
    addChat,
    addMessage,
    getMessages,
    uploadPhoto,
    uploadPhotoDoc
    // getUserLoggedd
};