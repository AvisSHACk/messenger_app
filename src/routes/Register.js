import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/elements/Alerta";
import {createUser} from "../firebase/firebaseFunctions";
import getMessageErrorAlert from "../utils/getMessageErrorAlert";

const Register = () => {
    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [alerta, setAlerta] = useState({});
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const history = useNavigate();

    const handleSingup = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            await createUser(name, email, password);
            history("/");
        } catch (e) {
            setLoading(false);
            setEstadoAlerta(true);
            setAlerta({
                tipo: "error",
                mensaje: getMessageErrorAlert(e.code)
            })
        }
    }

    return ( 
        <form action="" className="Form--access" onSubmit={handleSingup}>
            <h1 className="Form__title">Por favor Registrate</h1>
            <input 
                className='Form__input--access'
                type="text"
                value={name}
                onChange={(e) => changeName(e.target.value)}
                placeholder="Nombre" 
            />

            <input 
                className='Form__input--access'
                type="email"
                value={email}
                onChange={(e) => changeEmail(e.target.value)}
                placeholder="Correo" 
            />
            <input 
                className='Form__input--access'
                type="password" 
                value={password}
                onChange={(e) => changePassword(e.target.value)}
                placeholder="Contraseña" 
            />
            <button className="Button--access">
                {loading ? <div className="loader"></div> : 'Registrate'}
                
            </button>
            <p className="Form__message">¿Ya tienes una cuenta? <Link to={"/login"} className="Form__redirect">Inicia sesion</Link></p>
            <Alerta 
                tipo={alerta.tipo}
                mensaje={alerta.mensaje} 
                estadoAlerta={estadoAlerta}
                setEstadoAlerta={setEstadoAlerta}
            />
        </form>
     );
}
 
export default Register;