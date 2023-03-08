import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useAuth } from '../context/authContext';
import { getUrlProfile, uploadPhoto, uploadPhotoDoc } from '../firebase/firebaseFunctions';
import { useEffect, useRef, useState } from 'react';
import { db, doc, updateDoc } from '../firebase/firestore';
const SideProfile = ({active, changeSideProfileActive}) => {

    
    const {user, 
        userCollection
        } = useAuth();

    const [name, changeName] = useState('')

    const photoImage = useRef();
    
    useEffect(() => {
        if(userCollection) {
            changeName(userCollection.name);
        }
    }, [userCollection])

    const changeClickPhoto = () => {
        photoImage.current.click();
    }

    const changeUseDoc = async (e) => {
        e.preventDefault();
        console.log(name);
        const userRef = doc(db, `users/${user.uid}`);
        await updateDoc(userRef, {
            name: name
        });
    }
    
    const changePhotoProfile = (e) => {

        const files = e.target.files;
        const fileReader = new FileReader();

        if(fileReader && files && files.length > 0){
            fileReader.readAsArrayBuffer(files[0]);

            fileReader.onload = async () => {
                const imageData = fileReader.result;
                const res = await uploadPhoto(user.uid, imageData);

                if(res) {
                    let photoUrl = await getUrlProfile(res.metadata.fullPath);
                    uploadPhotoDoc(photoUrl, user.uid);
                }

            }
        }

    }
    return ( 
        <div className={active ? "SideProfile active" : "SideProfile"}>
            <AiOutlineArrowLeft onClick={() => changeSideProfileActive(false)} className='SideProfile__return Button--noBackground'/>
            <div className="SideProfile__profile">
                {/* <img src={userCollection && userPhotoUrl} alt="" onClick={changeClickPhoto}/> */}
                <img src={userCollection?.photo} alt="" onClick={changeClickPhoto}/>
                <input ref={photoImage} type="file" className='SideProfile__filebutton' onChange={changePhotoProfile} />
                <form action="" className='Form Form--sideProfile'>
                    <input type="text" className="Form__input" id="name" name='name' value={name} onChange={(e) => changeName(e.target.value)}/>
                    <button onClick={changeUseDoc} className='SideProfile__buttonChange'>Editar Perfil</button>
                </form>
            </div>
        </div>
     );
}
 
export default SideProfile;