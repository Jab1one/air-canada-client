import { useState } from "react";
import "./DragAndDrop.scss"

export default function DragAndDrop(){

    const [button1, setButton1] =useState("")
    const [button2, setButton2] =useState("")
    const [button3, setButton3] =useState("")
    function handleClick1(){
        if(button1 === ""){
            setButton1("--none")
        }else{
            setButton1("")
        }

        
    }

    function handleClick2(){
        if(button1 === ""){
            setButton2("--none")
        }else{
            setButton2("")
        }
    }

    function handleClick3(){
        if(button1 === ""){
            setButton3("--none")
        }else{
            setButton3("")
        }
    }

    return(
        <section className="drag-and-drop">
            <p className="drag-and-drop__text">You can rearrange your display in the order you want to see them most. Please list them in order from most wanted to least needed.</p>
            <div className="feature">
                <div className="feature__left-box">
                    <button className={`feature__left-box__button${button1}`} onClick={handleClick1}>Everyday</button>
                    <button className={`feature__left-box__button${button2}`} onClick={handleClick2}>Travel</button>
                    <button className={`feature__left-box__button${button3}`} onClick={handleClick3}>eStore</button>
                </div>
                <div className="feature__arrow">
                </div>
                <div className="feature__right-box">
                    <button className="feature__left-box__button" onClick={handleClick1}>1</button>
                    <button className="feature__left-box__button" onClick={handleClick2}>2</button>
                    <button className="feature__left-box__button" onClick={handleClick3}>3</button>
                </div>
            </div>
        </section>
    )
}