import { auth, createUserWithEmailAndPassword } from "./../firebase/firebaseConfig";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');

    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            history("/")
          })
          .catch((error) => {
            
          });
    }

    return ( 
        <form action="" className="Form Form--access" onSubmit={handleSubmit}>
            <h1 className="Form__title">Por favor Registrate</h1>
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
            <p className="Form__message">¿Ya tienes una cuenta? <Link to={"/login"} className="Form__redirect">Inicia sesion</Link></p>
        </form>
     );
}
 
export default Register;