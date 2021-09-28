import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/portfolioModal.scss";

Modal.setAppElement("#root");

const PortfolioModal = ({ image }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="porfolio_grid__item">
      <img src={image} alt="" onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="portfolio_modal"
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default PortfolioModal;
