import React, { useContext, createContext } from "react";
import styles from "./Modal.module.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ModalContext = createContext();

const Modal = ({ children, isOpen, onClose }) => {
  return (
    isOpen && (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
          <motion.div className={styles.container}>
            <ModalContext.Provider
              value={{ onClose }}
              whileInView={{ x: 0 }}
              initial={{ x: -100 }}
              exit={{ x: -100 }}
              transition={{ duration: 1 }}
            >
              {children}
            </ModalContext.Provider>
          </motion.div>
        </div>
      </div>
    )
  );
};

const ModalHeader = ({ children }) => {
  const { onClose } = useContext(ModalContext);
  return (
    <div className={styles.body}>
      <button type="button" className={styles.closebtn} onClick={onClose}>
        X
      </button>
      <div className={styles.bodycontent}>{children}</div>
    </div>
  );
};
const ModalBody = ({ children }) => {
  return <div className={styles.slideshow}>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
