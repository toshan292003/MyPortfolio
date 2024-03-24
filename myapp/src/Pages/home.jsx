//importing basic react requirements and libraries
import React from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter';


//importing components and pages
import HomePage from './HomePagePortrait.png';
import About from './AboutPage.png';
import './home.css';
import CoolHeading from "../components/CoolHeading";



export default function Home() {

    //function for download option in home page seciton 1
    const RESUME_PDF_FILE = "http://localhost:3000/Resume.pdf";
    const downloadFile = (url)=>{
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download",fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };
    //typewriter effect in home page section 1
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
                        <span>{typeEffect}<Cursor cursorStyle='|'/></span>
                        <button onClick={() => downloadFile(RESUME_PDF_FILE)}>Download Resume</button>
                    </div>
                    <img src={HomePage} alt="" />
                </section>



                <section className="home-part2">
                    <div className="gradient1"></div>
                    <div className="gradient2"></div>
                    <CoolHeading title="about me" subtitle="who am i"></CoolHeading>
                    <section>
                        <b>
                            <img src={About} alt="" />
                        </b>
                        <div>
                            
                        </div>
                    </section>
                </section>



                <section className="home-part3">
                    <CoolHeading title="what i bring to the table" subtitle="my skillset"></CoolHeading>
                </section>
            </div>
        </>
    )
}