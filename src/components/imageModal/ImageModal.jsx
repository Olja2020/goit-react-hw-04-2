//import css from "./ImageModal.module.css";
// import Modal from "react-modal";
// import ReactModal from "react-modal";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
// const ImageModal = ({
//   closeModal,
//   openModal,
//   afterOpenModal,
//   modalIsOpen,
//   data: {
//     alt_description,
//     urls: { regular },
//   },
// }) => {
//   return (
//     <div className={css.container}>
//       <ReactModal>
//         <button onClick={openModal}>Open Modal</button>
//         <Modal
//           isOpen={modalIsOpen}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
//           <button onClick={closeModal}>close</button>
//           <div>
//             <img src={regular} alt={alt_description} />
//           </div>
//           <form>
//             <input />
//             <button>tab navigation</button>
//             <button>stays</button>
//             <button>inside</button>
//             <button>the modal</button>
//           </form>
//         </Modal>
//       </ReactModal>
//     </div>
//   );
// };
// //ReactDOM.render(<App />, appElement);
// export default ImageModal;
import { useEffect } from "react";
import ReactModal from "react-modal";

const ImageModal = ({
  data: {
    alt_description,
    urls: { regular },
  },

  closeModal,
}) => {
  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  return (
    <ReactModal
      isOpen={true}
      contentLabel="Image Modal"
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          width: "80%",
          height: "80%",
          margin: "auto",
          padding: "0",
        },
      }}
    >
      <img
        src={regular}
        alt={alt_description}
        style={{ width: "100%", height: "100%" }}
      />
    </ReactModal>
  );
};

export default ImageModal;
