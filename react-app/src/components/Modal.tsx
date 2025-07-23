import '../css/Modal.css'


type ModalProps = {
  closeModal: (open: boolean) => void;
  alienImage:string;
};

const Modal = ({closeModal,alienImage}: ModalProps) => {

    return(
        <div className="modal-overlay">
    <div className="modal-content">
      <button className="modal-close" onClick={() => closeModal(false)} aria-label="Close modal"/>
      <img src={alienImage} className="modal-img" alt="Alien Race Result"/>
    </div>
  </div>
    )
}

export default Modal;