import { Link } from "react-router-dom";

const Login = () => {
    return (
        <form action="" className="Form Form--access">
            <h1 className="Form__title">Por favor Registrate</h1>
            <input className="Form__input Form__input--access" type="text" placeholder="Correo" />
            <input className="Form__input Form__input--access" type="password" placeholder="Contraseña" />
            <button className="Button--access">Ingresa</button>
            <p className="Form__message">¿Aun no tienes una cuenta? <Link to={"/login"} className="Form__redirect">Registrate</Link></p>
        </form>
     );
}
 
export default Login;