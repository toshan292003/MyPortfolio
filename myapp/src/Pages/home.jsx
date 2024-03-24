//importing basic react requirements and libraries
import React from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter';


//importing components and pages
import HomePage from './HomePagePortrait.png';
import About from './AboutPage.png';
import AboutBg from '../Images/1x/HomeBackgroundArtboard 1 copy.png';
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
                    <p>
                        <section>
                            <img src={About} alt="" />
                            <img src={AboutBg} alt="" />
                            <h1>Something About Me</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ab reiciendis sit reprehenderit ea soluta illo quae obcaecati quaerat, expedita enim nisi temporibus cum officiis quam error sed eligendi necessitatibus voluptatum ipsam corporis. Aperiam dicta vitae eum. Dolorum nisi inventore ut tempora beatae totam aspernatur, error fugit quisquam soluta quod!</p>
                            <div>
                                <ul>
                                    <li>
                                        <h3>Name</h3>
                                        <span>Toshan S Maindan</span>
                                    </li>
                                    <li>
                                        <h3>Email</h3>
                                        <span>toshanyt@gmail.com</span>
                                    </li>
                                    <li>
                                        <h3>Phone</h3>
                                        <span>+91 8549039062</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h3>Adress</h3>
                                        <span>Mangalore</span>
                                    </li>
                                    <li>
                                        <h3>DOB</h3>
                                        <span>02 Sept 2003</span>
                                    </li>
                                    <li>
                                        <h3>Occupation</h3>
                                        <span>Student</span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </p>
                </section>



                <section className="home-part3">
                    <CoolHeading title="what i bring to the table" subtitle="my skillset"></CoolHeading>
                </section>
            </div>
        </>
    )
}