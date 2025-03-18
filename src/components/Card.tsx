import { BtnSistem } from "./Button"
import './Card.css'

export const CardTwitter = ({ user, name, avatar, follow} : {user : string, name: string, avatar: string, follow: boolean})=>{
    return(
        <div className="card-twitter">
            <img src={avatar} alt={`imagen de perfil de usuario ${user}`} />
            <div className="user-identy">
                <span className="name-long">{name}</span>
                <span className="name-short">{user}</span>
            </div>
            <BtnSistem estatus={follow}/>
        </div>
    )
}