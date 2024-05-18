//importing basic react requirements and libraries
import React, { useState ,useEffect, useRef } from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter';

//importing components and pages
import HomePage from './HomePagePortrait.png';
import About from './AboutPage.png';
import AboutBg from '../Images/1x/HomeBackgroundArtboard 1 copy.png';
import './home.css';
import CoolHeading from "../components/CoolHeading";
import homebackimage from '../Images/1x/HomeBackgroundArtboard\ 1.png';
import Progress from "../components/Progress";
import CoolCard from "../components/CoolCard";
import Model from "../components/Model";

import DSA from "../Images/Icons/data.png";
import Graphic from "../Images/Icons/editorial.png";
import Dev from "../Images/Icons/coding.png";
import Motion from "../Images/Icons/lightning.png";
import Design from "../Images/Icons/webpage.png";

import "./locomotive.css";
import LocomotiveScroll from 'locomotive-scroll';


export default function Home() {
    const [OffsetY,setOffsetY] = useState(0);


    const scrollRef = useRef(null);

    const handleScroll = ()=>{
        setOffsetY(window.pageYOffset);
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        const scrollInstance = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 0.75
          });

        return () => {
      scrollInstance.destroy();
    };
    }, []);


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
        words : ['Full Stack Developer','Programmer','Music Enthusiast','VFX Enthusiast','UI/UX Designer','Graphic Designer','Student'],
        loop:{},
        typeSpeed : 50,
        deleteSpeed: 50
    })

    

    return (
        <>
            <div className="home" data-scroll-container ref={scrollRef}>
                <section className="home-part1">
                    <div className="homebackimage">
                        <img src={homebackimage} alt="" />
                    </div>
                    <div className="circle">
                    </div>
                    <div>
                        <h2>Hello I'm <b>TOSHAN S MAINDAN</b></h2>
                        <span>{typeEffect}<Cursor cursorStyle='|'/></span>
                        <button onClick={() => downloadFile(RESUME_PDF_FILE)}>Download Resume</button>
                    </div>
                    <img src={HomePage} id="masterimg" alt="" data-scroll data-scroll-speed="-1"/>
                </section>



                <section className="home-part2">
                    <div className="gradient1"></div>
                    <div className="gradient2"></div>
                    <CoolHeading title="about me" subtitle="who am i"></CoolHeading>
                    <p>
                        <section>
                            <img src={About} alt="" data-scroll data-scroll-speed="-1"/>
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

                <section className="quote" data-scroll-container ref={scrollRef}>
                    <img data-scroll data-scroll-speed="-2" src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div>
                        <h1>❜❜</h1>
                        <p>We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.</p>
                        <span>Stephen Hawking</span>
                    </div>
                </section>  

                <section className="home-part3">
                    <CoolHeading title="My education" subtitle="Learning journey"></CoolHeading>
                    <section>
                        <div className="line" data-aos="zoom"></div>
                        <div className="education">
                            <h3></h3>
                            <span>2019</span>
                            <div>
                                <h1>High School Graduate</h1>
                                <h2>Sharada Vidyalaya Mangalore</h2>
                                <p>Cherished an enriching learning experience at "Sharada Vidyalaya", nurturing academic excellence and personal growth.</p>
                            </div>
                        </div>
                        <div className="education">
                            <div>
                                <h1>Pre University Graduate</h1>
                                <h2>Sharada PU College Mangalore</h2>
                                <p>Pursued pre-university education at "Sharada PU College", nurturing a passion for computer science and honing problem-solving skills through engaging curriculum.</p>
                            </div>
                            <span>2021</span>
                            <h3></h3>
                        </div>
                        <div className="education">
                            <h3></h3>
                            <span>2025</span>
                            <div>
                                <h1>Bachelor Of Engineering</h1>
                                <h2>Sahyadri Management</h2>
                                <p>Earned engineering degree from "Sahyadri College of Engineering and Management", mastering advanced programming concepts and developing expertise in software development.</p>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="home-part4">
                    <CoolHeading title="what I do" subtitle="my skillset"></CoolHeading>
                    <section>
                        <div className="card">
                            <img src={DSA} alt="" />
                            <h1>DSA Expertise</h1>
                            <p>Mastering algorithms and DSA for efficient problem-solving.</p>
                        </div>
                        <div className="card">
                            <img src={Design} alt=""/>
                            <h1>Web Design</h1>
                            <p>Crafting visually appealing and user-friendly website designs.</p>
                        </div>
                        <div className="card">
                            <img src={Dev} alt="" />
                            <h1>Web Development</h1>
                            <p>Building dynamic and responsive web applications.</p>
                        </div>
                        <div className="card">
                            <img src={Graphic} alt="" />
                            <h1>Graphic Design</h1>
                            <p>Creating compelling visual designs for branding and marketing.</p>
                        </div>
                        <div className="card">
                            <img src={Motion} alt="" />
                            <h1>Motion Graphics</h1>
                            <p>Animating captivating motion graphics for engaging storytelling.</p>
                        </div>
                    </section>
                </section>

                <section className="home-part6">
                    <img data-scroll data-scroll-speed="-2" src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div>
                        <h1>500+</h1>
                        <span>Hours of Work</span>
                    </div>
                    <div>
                        <h1>5</h1>
                        <span>Projects Done</span>
                    </div>
                    <div>
                        <h1>2</h1>
                        <span>Satisfied Clients</span>
                    </div>
                </section>
                
            </div>
        </>
    )
}