import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext";
import { getUserLogged } from "../firebase/firebaseFunctions";

const useGetUserLogged = () => {
    const [userCurrent, changeUserCurrent] = useState();
    const {user} = useAuth();

    useEffect(() => {
        
            getUserLogged(user, changeUserCurrent);
    }, [user])

    return userCurrent;
}

export default useGetUserLogged;





// import { useEffect, useState } from "react"
// import { useAuth } from "../context/authContext";
// import { db, getDoc, doc } from "../firebase/firestore";
// // import { getUserLogged } from "../firebase/firebaseFunctions";

// const useGetUserLogged = () => {
//     const [userCurrent, changeUserCurrent] = useState();
//     const {user} = useAuth();

//     const getUserLogged = async (user, changeUserCurrent) => {

//         const userRef = doc(db, `users/${user.uid}`);
//         const userCollection = await getDoc(userRef);
    
//         changeUserCurrent(userCollection.data());
    
//     }

//     useEffect(() => {
//         getUserLogged(user, changeUserCurrent);
//     }, [user])

//     return userCurrent;
// }

// export default useGetUserLogged;