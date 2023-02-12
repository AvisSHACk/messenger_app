import { AiOutlineArrowLeft } from 'react-icons/ai';
const SideProfile = ({active, changeSideProfileActive}) => {
    return ( 
        <div className={active ? "SideProfile active" : "SideProfile"}>
            <AiOutlineArrowLeft onClick={() => changeSideProfileActive(false)} className='SideProfile__return Button--noBackground'/>
            <div className="SideProfile__profile">
                <img src="https://picsum.photos/50" alt="" />
                <button>Editar Perfil</button>
            </div>
        </div>
     );
}
 
export default SideProfile;