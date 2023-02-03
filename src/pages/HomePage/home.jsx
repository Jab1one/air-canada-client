import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import MainNav from "../../components/MainNav/MainNav";
import Modal from 'react-modal';
import React from 'react';
import "./home.scss";
import navigation from "../../assets/images/Drop Down Menu Home.png"

  

Modal.setAppElement('#root');

export default function HomePage(){


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


    return(
        <>
        <Header />
        <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="delete-modal"
      >
      <img src={navigation} alt="" />
      </Modal>
        </div>
        <MainNav 
        openModal={openModal}
        />
        <Body />
        <Footer />
        </>
    )
}