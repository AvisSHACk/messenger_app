import { useEffect } from "react";

const Alerta = ({tipo, mensaje, estadoAlerta, setEstadoAlerta}) => {
    useEffect(() => {

            let tiempo;
            if(estadoAlerta === true) {
                tiempo = setTimeout(() => {
                    setEstadoAlerta(false)
                }, 4000)


            }

            return (() => clearTimeout(tiempo))

    }, [estadoAlerta, setEstadoAlerta])
    return (
        <>
            {estadoAlerta &&
                <div className='Alerta'>
                    <p className={`${tipo}`}>{mensaje}</p>
                </div>
            }
        
        </>
     );
}
 
export default Alerta;