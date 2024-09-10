import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  // REUSING SAME ANIMATION
  // const hiddenAnimationState = { opacity: 0, x: 150 }

  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
          hide: { opacity: 0, y: 30 },
        }}
        initial="hidden"
        animate="visible"
        exit="hide"
        // initial={{ opacity: 0, x: -150 }}
        // animate={{ opacity: 1, x: 0 }}
        // exit={{ opacity: 0, x: 150 }}
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
