import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useAuth } from '../context/authContext';
import { getUrlProfile, updateProfile, uploadPhoto, uploadPhotoDoc, updateEmailFirebase } from '../firebase/firebaseFunctions';
import { useEffect, useRef, useState } from 'react';
import Alerta from './elements/Alerta';
const SideProfile = ({active, changeSideProfileActive}) => {

    // const [loadingPhoto, setLoadingPhoto] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alerta, setAlerta] = useState({});
    const [estadoAlerta, setEstadoAlerta] = useState(false);

    const {user, 
        userCollection
        } = useAuth();

    const [name, changeName] = useState('')
    const [email, changeEmail] = useState('')

    const photoImage = useRef();
    const imgPreview = useRef();
    
    useEffect(() => {
        if(userCollection) {
            changeName(userCollection.name);
            changeEmail(userCollection.email);
        }
    }, [userCollection])

    const changeClickPhoto = () => {
        photoImage.current.click();
    }

    const updateProfileEvent = async (e) => {
        e.preventDefault();
        setLoading(true)
        setEstadoAlerta(true);
        setAlerta({
            tipo: "exito",
            mensaje: 'Actualizando perfil'
        })

        await updateProfile(user, name, email);
        updateEmailFirebase(user, email);
        setLoading(false);
        setEstadoAlerta(false);
        setAlerta({
            tipo: "exito",
            mensaje: 'Perfil Actualizado'
        })
    }
    
    const changePhotoProfile = (e) => {
        // setLoadingPhoto(true);
        setEstadoAlerta(true);
        setAlerta({
            tipo: "exito",
            mensaje: 'Cambiando foto de perfil....'
        })
        const files = e.target.files;
        const fileReader = new FileReader();

        if(fileReader && files && files.length > 0){
            fileReader.readAsArrayBuffer(files[0]);

            /*Para mostrar vista previa*/
            const objectURL = URL.createObjectURL(files[0]);
            imgPreview.current.src = objectURL;
            /*Para mostrar vista previa*/

            fileReader.onload = async () => {
                const imageData = fileReader.result;
                const res = await uploadPhoto(user.uid, imageData);

                if(res) {
                    let photoUrl = await getUrlProfile(res.metadata.fullPath);
                    uploadPhotoDoc(photoUrl, user.uid);
                    // setLoadingPhoto(false);
                    setEstadoAlerta(true);
                    setAlerta({
                        tipo: "exito",
                        mensaje: 'Foto de perfil actualizada'
                    })
                }

            }
        }

        

    }

    console.log(estadoAlerta);
    return ( 
        <div className={active ? "SideProfile active" : "SideProfile"}>
            <AiOutlineArrowLeft onClick={() => changeSideProfileActive(false)} className='SideProfile__return Button--noBackground'/>
            <div className="SideProfile__profile">
                {/* <img src={userCollection && userPhotoUrl} alt="" onClick={changeClickPhoto}/> */}
                {false ? 
                    <div className="SideProfile__containerLoader">
                        <div className="loader"></div> 
                    </div>
                : 
                    <img ref={imgPreview} src={userCollection?.photo} alt="" onClick={changeClickPhoto}/>
                }
                
                <input ref={photoImage} type="file" className='SideProfile__filebutton' onChange={changePhotoProfile} />
                <form action="" className='Form Form--sideProfile'>
                    <input type="text" className="Form__input" id="name" name='name' value={name} onChange={(e) => changeName(e.target.value)}/>
                    <input type="text" className="Form__input" id="email" name='email' value={email} onChange={(e) => changeEmail(e.target.value)}/>
                    <button onClick={updateProfileEvent} className='SideProfile__buttonChange'>
                        {loading ? <div className="loader"></div> : 'Editar Perfil'}
                    </button>
                </form>
                <Alerta 
                    tipo={alerta.tipo}
                    mensaje={alerta.mensaje} 
                    estadoAlerta={estadoAlerta}
                    setEstadoAlerta={setEstadoAlerta}
                />
            </div>
        </div>
     );
}
 
export default SideProfile;