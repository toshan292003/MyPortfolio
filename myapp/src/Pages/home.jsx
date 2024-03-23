import React from "react";
import './home.css';
import {useTypewriter,Cursor} from 'react-simple-typewriter';

export default function Home() {

    const [typeEffect] = useTypewriter({
        words : ['Full Stack Developer','UI/UX Designer','Graphic Designer','Student'],
        loop:{},
        typeSpeed : 100,
        deleteSpeed: 50
    })

    return (
        <>
            <div className="home">
                <section className="home-part1">
                    <div className="circle">

                    </div>
                    <div>
                        <h2>Hello I'm <b>TOSHAN S MAINDAN</b></h2>
                        <span>{typeEffect}</span>
                        <span>
                            <Cursor cursorStyle='|'/>
                        </span>
                    </div>
                </section>
                <section className="home-part2">

                </section>
            </div>
        </>
    )
}