import { ref, storage, uploadBytes  } from './../firebase/storage';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import useGetUserLogged from '../hooks/useGetUserLogged';
import { useAuth } from '../context/authContext';
import { db, doc, updateDoc } from '../firebase/firestore';
import { getUrlProfile } from '../firebase/firebaseFunctions';
import { useRef } from 'react';
const SideProfile = ({active, changeSideProfileActive}) => {
    const userCurrent = useGetUserLogged();
    const {user} = useAuth();

    const photoImage = useRef();

    const changeClickPhoto = () => {
        photoImage.current.click();
    }

    const changePhotoProfile = (e) => {

        const files = e.target.files;
        const fileReader = new FileReader();

        if(fileReader && files && files.length > 0){
            fileReader.readAsArrayBuffer(files[0]);

            fileReader.onload = async () => {
                const imageData = fileReader.result;

                const photoRef = ref(storage, `${user.uid}`);

                const res = await uploadBytes(photoRef, imageData);

                if(res) {
                    const urlPhoto = await getUrlProfile(res.metadata.fullPath);
                    await updateDoc(doc(db, `users/${user.uid}`), {
                        photo: urlPhoto
                    }).then(() => {
                        console.log('Se actualizo la foto de perfil');
                    })
                }
            }
        }

    }
    return ( 
        <div className={active ? "SideProfile active" : "SideProfile"}>
            <AiOutlineArrowLeft onClick={() => changeSideProfileActive(false)} className='SideProfile__return Button--noBackground'/>
            <div className="SideProfile__profile">
                <img src={userCurrent && userCurrent.photo} alt="" />
                <button onClick={changeClickPhoto} className='SideProfile__buttonChange'>Editar Perfil</button>
                <input ref={photoImage} type="file" className='SideProfile__filebutton' onChange={changePhotoProfile} />
            </div>
        </div>
     );
}
 
export default SideProfile;