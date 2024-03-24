//importing basic react requirements and libraries
import React, { useState ,useEffect } from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter';

//importing components and pages
import HomePage from './HomePagePortrait.png';
import About from './AboutPage.png';
import AboutBg from '../Images/1x/HomeBackgroundArtboard 1 copy.png';
import './home.css';
import CoolHeading from "../components/CoolHeading";
import homebackimage from '../Images/1x/HomeBackgroundArtboard\ 1.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    const [OffsetY,setOffsetY] = useState(0);

    const handleScroll = ()=>{
        setOffsetY(window.pageYOffset);
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll);
    }, []);

    useEffect(()=>{
        AOS.init({duration: 1000});
    });

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
                    <div className="homebackimage">
                        <img src={homebackimage} style={{transform:`translateY(${OffsetY*-0.25}px)`}} alt="" />
                    </div>
                    <div className="circle">
                    </div>
                    <div data-aos="fade-up">
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
                            <h1 data-aos = "fade-up">Something About Me</h1>
                            <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ab reiciendis sit reprehenderit ea soluta illo quae obcaecati quaerat, expedita enim nisi temporibus cum officiis quam error sed eligendi necessitatibus voluptatum ipsam corporis. Aperiam dicta vitae eum. Dolorum nisi inventore ut tempora beatae totam aspernatur, error fugit quisquam soluta quod!</p>
                            <div data-aos="fade-up">
                                <ul data-aos="fade-up">
                                    <li data-aos="fade-up">
                                        <h3>Name</h3>
                                        <span>Toshan S Maindan</span>
                                    </li>
                                    <li data-aos="fade-up">
                                        <h3>Email</h3>
                                        <span>toshanyt@gmail.com</span>
                                    </li>
                                    <li data-aos="fade-up">
                                        <h3>Phone</h3>
                                        <span>+91 8549039062</span>
                                    </li>
                                </ul>
                                <ul data-aos="fade-up">
                                    <li data-aos="fade-up">
                                        <h3>Adress</h3>
                                        <span>Mangalore</span>
                                    </li>
                                    <li data-aos="fade-up">
                                        <h3>DOB</h3>
                                        <span>02 Sept 2003</span>
                                    </li>
                                    <li data-aos="fade-up">
                                        <h3>Occupation</h3>
                                        <span>Student</span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </p>
                </section>



                <section className="home-part3">
                    <CoolHeading title="My education" subtitle="Learning journey"></CoolHeading>
                    <section>
                        <div className="line" data-aos="zoom"></div>
                        <div className="education" data-aos="fade-up">
                            <h3></h3>
                            <span>2019</span>
                            <div>
                                <h1 data-aos="fade-up">High School Graduate</h1>
                                <h2 data-aos="fade-up">Sharada Vidyalaya Mangalore</h2>
                                <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex soluta laboriosam ea adipisci minus officia vitae quis quae maiores unde.</p>
                            </div>
                        </div>
                        <div className="education" data-aos="fade-up">
                            <div>
                                <h1 data-aos="fade-up">Pre University Graduate</h1>
                                <h2 data-aos="fade-up">Sharada PU College Mangalore</h2>
                                <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex soluta laboriosam ea adipisci minus officia vitae quis quae maiores unde.</p>
                            </div>
                            <span>2021</span>
                            <h3></h3>
                        </div>
                        <div className="education" data-aos="fade-up">
                            <h3></h3>
                            <span>2025</span>
                            <div>
                                <h1 data-aos="fade-up">Bachelor Of Engineering</h1>
                                <h2 data-aos="fade-up">Sahyadri Management</h2>
                                <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex soluta laboriosam ea adipisci minus officia vitae quis quae maiores unde.</p>
                            </div>
                        </div>
                    </section>
                </section>



                <section className="home-part4">
                    <CoolHeading title="what i bring to the table" subtitle="my skillset"></CoolHeading>
                </section>
            </div>
        </>
    )
}