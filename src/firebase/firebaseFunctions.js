import { orderBy } from "firebase/firestore";
import { auth, createUserWithEmailAndPassword, updateEmail } from "./auth";
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
        photo: await getUrlProfile('guest.png')
    });
    
}


const getUserLogged = async (user, changeUserCurrent) => {

    const onSuscribe = onSnapshot(doc(db, `users/${user.uid}`), ( snapashot ) => {
        changeUserCurrent({...snapashot.data(), id: snapashot.id});
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

const getChats = (setChats, id, setLoading) => {
    const q = query(collection(db, "chats"), where("ids", "array-contains", id));
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
        return {...user.data(), id: user.id};
    });
}

const getUserById = async (id, setContactChat) => {
    const q = doc(db, `users/${id}`);
    const onSuscribe = onSnapshot(q, ( snapashot ) => {
        setContactChat({...snapashot.data(), id: snapashot.id});
    })

    return onSuscribe;
}

const addChat = async (ids) => {
    await addDoc(collection(db, `chats`), {
        ids: ids,
    });
}

const addMessage = async (id, message, uid, photo) => {
    await addDoc(collection(db, `chats/${id}/mensajes`), {

        name: 'nombre',
        uid: uid,
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

const uploadPhotoDoc = async (photo, id) => {
    await updateDoc(doc(db, `users/${id}`), {
        photo: photo
    }).then(() => {
        console.log('Se actualizo la foto de perfil');
    })
}

const updateProfile = async (user, name, email) => {
    const userRef = doc(db, `users/${user.uid}`);
    await updateDoc(userRef, {
        name: name,
        email: email
    });
}

const updateEmailFirebase = async (user, email) => {
    updateEmail(user, email).then(() => {
      console.log('Email Actualizado')
    }).catch((error) => {
      console.log(error)
    });
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
    uploadPhotoDoc,
    getUserById,
    updateProfile,
    updateEmailFirebase
    // getUserLoggedd
};