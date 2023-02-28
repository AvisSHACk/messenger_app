import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useAuth } from '../context/authContext';
import { getUrlProfile, uploadPhoto, uploadPhotoDoc } from '../firebase/firebaseFunctions';
import { useRef } from 'react';
const SideProfile = ({active, changeSideProfileActive}) => {
    const {user, 
        userCollection, 
        userPhotoUrl, 
        changeUserPhotoUrl} = useAuth();

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
                const res = await uploadPhoto(user.uid, imageData);

                if(res) {
                    uploadPhotoDoc(res, user.uid);
                    changeUserPhotoUrl(await getUrlProfile(res.metadata.fullPath));
                }

            }
        }

    }
    return ( 
        <div className={active ? "SideProfile active" : "SideProfile"}>
            <AiOutlineArrowLeft onClick={() => changeSideProfileActive(false)} className='SideProfile__return Button--noBackground'/>
            <div className="SideProfile__profile">
                <img src={userCollection && userPhotoUrl} alt="" />
                <button onClick={changeClickPhoto} className='SideProfile__buttonChange'>Editar Perfil</button>
                <input ref={photoImage} type="file" className='SideProfile__filebutton' onChange={changePhotoProfile} />
            </div>
        </div>
     );
}
 
export default SideProfile;