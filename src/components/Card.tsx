import { BtnSistem } from "./Button"
import './Card.css'

export const CardTwitter = ()=>{
    return(
        <div className="card-twitter">
            <img src="https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4870.jpg" alt="imagen de perfil de usuario" />
            <span>Francisco Armando Hernandez Fernandez</span>
            <BtnSistem/>
        </div>
    )
}