import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "./../firebase/auth";

const Login = () => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history("/")
            })
            .catch((error) => {
                
        });
    }
    return (
        <form action="" className="Form--access" onSubmit={handleSubmit}>
            <h1 className="Form__title">Por favor Inicia sesion</h1>
            <input 
                className="Form__input Form__input--access" 
                type="text"
                value={email}
                onChange={(e) => changeEmail(e.target.value)}
                placeholder="Correo" 
            />
            <input 
                className="Form__input Form__input--access" 
                type="password" 
                value={password}
                onChange={(e) => changePassword(e.target.value)}
                placeholder="Contraseña" 
            />
            <button className="Button--access">Ingresa</button>
            <p className="Form__message">¿Aun no tienes una cuenta? <Link to={"/register"} className="Form__redirect">Registrate</Link></p>
        </form>
     );
}
 
export default Login;