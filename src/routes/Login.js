import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/elements/Alerta";
import getMessageErrorAlert from "../utils/getMessageErrorAlert";
import { auth, signInWithEmailAndPassword } from "./../firebase/auth";

const Login = () => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [alerta, setAlerta] = useState({});
    const [estadoAlerta, setEstadoAlerta] = useState(false);

    const history = useNavigate();
    
    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            history("/")
        })
        .catch((e) => {
            setLoading(false);
            setEstadoAlerta(true);

            setAlerta({
                tipo: "error",
                mensaje: getMessageErrorAlert(e.code)
            })

        });
    }
    return (
        <form action="" className="Form--access" onSubmit={handleSubmit}>
            <h1 className="Form__title">Por favor Inicia sesion</h1>
            <input 
                className="Form__input Form__input--access" 
                type="email"
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

            <button className="Button--access">
                {loading ? <div className="loader"></div> : 'Iniciar sesion'}
                
            </button>
            <p className="Form__message">¿Aun no tienes una cuenta? <Link to={"/register"} className="Form__redirect">Registrate</Link></p>
            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje} 
                estadoAlerta={estadoAlerta}
                setEstadoAlerta={setEstadoAlerta}
            />
        </form>
     );
}
 
export default Login;