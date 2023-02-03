import Header from "../../components/Header/Header";
// import Modal from 'react-modal';
// import React from 'react';
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";

// Modal.setAppElement('#root');

export default function HomePage(){

//     const [modalIsOpen, setIsOpen] = React.useState(false);
// function openModal() {
//     setIsOpen(true);
//   }
// function closeModal() {
//     setIsOpen(false);
//   }

    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}