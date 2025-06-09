import { useState } from "react";
import styles from "./loveydovey.module.css"

export default function LoveryDovey(){
    const [Index,setIndex] = useState(0);
    const [Accept,setAccept] = useState(false);
    const questions = [
        "Will you be my girlfriend?",
        "I am a good guy I swear!!",
        "I will make pancakes for you :)",
        "Think about it, I am one of a kind!",
        "I'm Batman 😎"
    ]
    return(
        <>
            <div className={styles.maincontainer}>
                <div className={styles.background}></div>
                {
                    !Accept?
                    <div className={styles.box}>
                        <p>{questions[Index]}</p>
                        <div>
                            <button style={{fontSize:`${(Index * 100) + 13}px`,borderRadius:`${Index * 10 + 5}px`}} onClick={()=>{setAccept(true)}}>Yes🤗</button>
                            <button  onClick={()=>{setIndex(Index + 1)}}>No😐</button>
                        </div>
                    </div>:
                    <div className={styles.box}>
                        <span>I KNEW ITTTTTTT 🥰🥰🥰🥰🥰🥰🥰🥰</span>
                    </div>
                }
            </div>
        </>
    )
}