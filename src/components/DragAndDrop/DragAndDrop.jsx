import { useState } from "react";
import "./DragAndDrop.scss"

export default function DragAndDrop(){

    const [button1, setButton1] =useState("")
    const [button2, setButton2] =useState("")
    const [button3, setButton3] =useState("")

    function handleClick1(){
        if(button1 === ""){
            console.log("clicked")
            setButton1("--none")
            handleClick4()
        }else{
            setButton1("")
        }

        
    }

    function handleClick2(){
        if(button1 === ""){
            console.log("clicked")
            setButton2("--none")
            handleClick5()
        }else{
            setButton2("")
        }
    }

    function handleClick3(){
        if(button1 === ""){
            console.log("clicked")
            setButton3("--none")
            handleClick6()
        }else{
            setButton3("")
        }
    }

    const [button4, setButton4] =useState("1")
    const [button5, setButton5] =useState("2")
    const [button6, setButton6] =useState("3")

    function handleClick4(){
        if(button5 === "2"){
            setButton5("Everday")
        }else{
            setButton5("2")
        }

        
    }

    function handleClick5(){
        if(button4 === "1"){
            setButton4("Travel")
        }else{
            setButton4("1")
        }
    }

    function handleClick6(){
        if(button6 === "3"){
            setButton6("eStore")
        }else{
            setButton6("3")
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
                    <button className="feature__left-box__button" >{button4}</button>
                    <button className="feature__left-box__button" >{button5}</button>
                    <button className="feature__left-box__button" >{button6}</button>
                </div>
            </div>
        </section>
    )
}