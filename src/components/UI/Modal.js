import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = ({ onClick }) => (
  <div className={classes.backdrop} onClick={onClick}></div>
);

const ModalOverlay = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
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