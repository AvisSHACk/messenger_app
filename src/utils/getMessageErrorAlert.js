const getMessageErrorAlert = (error) => {
    let mensaje = '';
    switch (error) {
        case 'auth/wrong-password':
            mensaje = 'La contraseña es erronea, intentalo nuevamente'
            break;
        case 'auth/user-not-found':
            mensaje = 'El correo no existe'
            break;
        case 'auth/invalid-email':
            mensaje = 'El correo es invalido'
            break;
        case 'auth/weak-password':
            mensaje = 'La contraseña debe contener al menos 6 caracteres'
            break;
        case 'auth/email-already-in-use':
            mensaje = 'El email ingresado ya esta registrado, prueba con otro'
            break;
        default:
            mensaje = "Hubo un error al conectar con el servidor, intentelo denuevo o intentelo mas tarde"
            break;
    }

    return mensaje;
}
 
export default getMessageErrorAlert;