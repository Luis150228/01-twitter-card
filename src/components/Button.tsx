import './Button.css'
import { PendigIcon } from './icons/Pending'
import { SendIcon } from './icons/SendIcon'
export const BtnSistem = ({estatus}: {estatus: boolean})=>{
    // if (!estatus) return
    let status = 'Enviar'
     if (estatus) {
        status = 'Esperar'
     }
    return(
        <button className={`btn-follow ${estatus === true ? 'unfollow' : 'follow' }`}>
            {estatus === true ? <PendigIcon/> : <SendIcon/>}
            {status}
        </button>
    )
}