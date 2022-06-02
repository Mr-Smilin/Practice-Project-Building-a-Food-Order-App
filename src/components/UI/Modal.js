import ReactDOM from 'react-dom';

const Backdrop = ({ onClick }) => (
  <div className='backdrop' onClick={onClick}></div>
);

const ModalOverlay = ({ children }) => (
  <div className='modal-root'>
    <div className='modal__content'>{children}</div>
  </div>
);

const portalElement = document.getElementById('overlays');

const Modal = ({ onClick, children }) => (
  <>
    {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
  </>
);

export default Modal;