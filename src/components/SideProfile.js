import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useAuth } from '../context/authContext';
import { getUrlProfile, uploadPhoto, uploadPhotoDoc } from '../firebase/firebaseFunctions';
import { useEffect, useRef, useState } from 'react';
import { db, doc, updateDoc } from '../firebase/firestore';
import { updateEmail } from '../firebase/auth';
const SideProfile = ({active, changeSideProfileActive}) => {

    const [loadingPhoto, setLoadingPhoto] = useState(false);
    const [loading, setLoading] = useState(false);

    const {user, 
        userCollection
        } = useAuth();

    const [name, changeName] = useState('')
    const [email, changeEmail] = useState('')

    const photoImage = useRef();
    
    useEffect(() => {
        if(userCollection) {
            changeName(userCollection.name);
            changeEmail(userCollection.email);
        }
    }, [userCollection])

    const changeClickPhoto = () => {
        photoImage.current.click();
    }

    const changeUseDoc = async (e) => {
        e.preventDefault();
        setLoading(true)
        const userRef = doc(db, `users/${user.uid}`);
        await updateDoc(userRef, {
            name: name,
            email: email
        });
        
        updateEmail(user, email).then(() => {
            console.log('Email Actualizado')
          }).catch((error) => {
            console.log(error)
          });

          setLoading(false);
    }
    
    const changePhotoProfile = (e) => {
        setLoadingPhoto(true);
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
                    setLoadingPhoto(false);
                }

            }
        }

    }
    return ( 
        <div className={active ? "SideProfile active" : "SideProfile"}>
            <AiOutlineArrowLeft onClick={() => changeSideProfileActive(false)} className='SideProfile__return Button--noBackground'/>
            <div className="SideProfile__profile">
                {/* <img src={userCollection && userPhotoUrl} alt="" onClick={changeClickPhoto}/> */}
                {loadingPhoto ? 
                    <div className="loader"></div> 
                : 
                    <img src={userCollection?.photo} alt="" onClick={changeClickPhoto}/>
                }
                
                <input ref={photoImage} type="file" className='SideProfile__filebutton' onChange={changePhotoProfile} />
                <form action="" className='Form Form--sideProfile'>
                    <input type="text" className="Form__input" id="name" name='name' value={name} onChange={(e) => changeName(e.target.value)}/>
                    <input type="text" className="Form__input" id="email" name='email' value={email} onChange={(e) => changeEmail(e.target.value)}/>
                    <button onClick={changeUseDoc} className='SideProfile__buttonChange'>
                        {loading ? <div className="loader"></div> : 'Editar Perfil'}
                    </button>
                </form>
            </div>
        </div>
     );
}
 
export default SideProfile;