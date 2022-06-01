import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>
};

const ModalOverlay = ({ children }) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
};

const portalElement = document.getElementById('overlays');

const Modal = ({ onClick, children }) => {
  return <>
    {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
  </>
};

export default Modal;