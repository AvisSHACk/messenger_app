import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {createUser} from "../firebase/firebaseFunctions";

const Register = () => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const history = useNavigate();

    const handleSingup = async (e) => {
        e.preventDefault(); 
        await createUser(email, password);
        history("/");
    }

    return ( 
        <form action="" className="Form--access" onSubmit={handleSingup}>
            <h1 className="Form__title">Por favor Registrate</h1>
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
            <button className="Button--access">Ingresa</button>
            <p className="Form__message">¿Ya tienes una cuenta? <Link to={"/login"} className="Form__redirect">Inicia sesion</Link></p>
        </form>
     );
}
 
export default Register;