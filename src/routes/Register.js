import { Link } from "react-router-dom";

const Register = () => {
    return ( 
        <form action="" className="Form Form--access">
            <h1 className="Form__title">Por favor inicia sesión</h1>
            <input className="Form__input Form__input--access" type="text" placeholder="Correo" />
            <input className="Form__input Form__input--access" type="password" placeholder="Contraseña" />
            <button className="Button--access">Ingresa</button>
            <p className="Form__message">¿Ya tienes una cuenta? <Link to={"/login"} className="Form__redirect">Inicia sesion</Link></p>
        </form>
     );
}
 
export default Register;