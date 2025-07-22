import { useState } from 'react'
import '../css/Modal.css'

import avianCorrect from '../assets/Avian correct.png'
import avianWrong from '../assets/Avian wrong.png'
import greyAlienCorrect from '../assets/Grey-alien correct.png'
import greyAlienWrong from '../assets/Grey-alien wrong.png'
import martianCorrect from '../assets/Martian correct.png'
import martianWrong from '../assets/Martian wrong.png'
import reptilianCorrect from '../assets/Reptilian correct.png'
import reptilianWrong from '../assets/Reptilian wrong.png'
import xenomorphCorrect from '../assets/Xenomorph correct.png'
import xenomorphWrong from '../assets/Xenomorph wrong.png'


const Modal = () => {

    const [modal,setModal] = useState(false);

    const removeModal = () => {
        setModal(!modal)
    }
    const correctImages = [avianCorrect,greyAlienCorrect,martianCorrect,reptilianCorrect,xenomorphCorrect]
    const wrongImages = [avianWrong,greyAlienWrong,martianWrong,reptilianWrong,xenomorphWrong]

    return(
        <div className="modal-overlay">
    <div className="modal-content">
      <button className="modal-close" onClick={removeModal} aria-label="Close modal"/>
      <img src={avianCorrect} className="modal-img" alt="Alien Race Result"/>
    </div>
  </div>
    )
}

export default Modal;