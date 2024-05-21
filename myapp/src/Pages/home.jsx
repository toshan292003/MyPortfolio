//importing basic react requirements and libraries
import React, { useState, useEffect, useRef } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

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
import Footer from "./footer";

import DSA from "../Images/Icons/data.png";
import Graphic from "../Images/Icons/editorial.png";
import Dev from "../Images/Icons/coding.png";
import Motion from "../Images/Icons/lightning.png";
import Design from "../Images/Icons/webpage.png";

import SmartHome from "../Images/Projects/SmartHome.png";
import Water from "../Images/Projects/Water Purity Tracker.png"


import "./locomotive.css";
import LocomotiveScroll from 'locomotive-scroll';


export default function Home() {
    const [OffsetY, setOffsetY] = useState(0);

    const scrollRef = useRef(null);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        const scrollInstance = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 0.6
        });
        return () => {
            scrollInstance.destroy();
        };

    }, []);




    //function for download option in home page seciton 1
    const RESUME_PDF_FILE = "http://localhost:3000/Resume.pdf";
    const downloadFile = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };
    //typewriter effect in home page section 1
    const [typeEffect] = useTypewriter({
        words: ['Full Stack Developer', 'Programmer', 'UI/UX Designer', 'Graphic Designer', 'Music Enthusiast', 'VFX Enthusiast', 'Student'],
        loop: {},
        typeSpeed: 50,
        deleteSpeed: 50
    })

    const projects = [
        {
            name: "JMV Impex", Image: "https://cdn.pixabay.com/photo/2024/04/22/18/53/ai-generated-8713376_1280.jpg",
            Project: {
                desc: "JMV Impex, a leading mechanical engineering and parts production company, commissioned a full-fledged Landing Page to showcase their capabilities. The visually stunning and user-friendly website, meticulously designed, offers a comprehensive understanding of JMV Impex's expertise, products, and services. With dynamic elements, interactive features, and high-quality visuals, the website brings the company's offerings to life, serving as a powerful marketing tool and solidifying their online presence in the industry.",
                duration: "3 May - 13 Jun 2023",
                Links: ["https://jmvimpex.in/", "https://www.figma.com/design/VEAYVe2AMoDEC8l2s4gEuE/JMV-Impex-UI-Design?node-id=8-25&t=GixhHkfeXkFMPLtL-0"],
                Learnings: ["Effective team and client communication strategies.", "Understanding the basic workflow of website development projects."]
            }
        },
        {
            name: "Smart House", Image: SmartHome,
            Project: {
                desc: "This award-winning UI/UX design revolutionizes home automation through an intuitive smartphone app. Users can effortlessly monitor and control all home appliances, turning them on/off remotely. The real-time status updates allow seamless tracking of each device's condition. This innovative solution streamlines home management, making it convenient and user-friendly.",
                duration: "29 Apr - 29 Apr 2023",
                awards: ["Secured First Place in UI/UX Competition conducted by YentechMania 2024 at Yenepoya IT, Moodibidri"],
                Links: ["https://www.figma.com/design/7g2D7hnOL459uUy86Y0yW5/Untitled?t=tlhoQg5rRcl07l2G-0"],
                Learnings: ["The competition honed my problem-solving skills, enabling me to approach challenges with a fresh perspective."]
            }
        },
        {name:"Water Purity Tracker", Image:Water,
        Project : {
            desc:"Water Purity Tracker is a comprehensive application that monitors the purity levels of water bodies by analyzing various parameters against standard values. Users can input parametric details, and the app classifies water bodies as pure or contaminated. It displays the top 6 purest water bodies recorded in the database, provides detailed parametric information for each water body, and offers filtering options by location and parameters.",
            duration : "02 Mar - 15 Mar 2023",
            Links : ["https://github.com/toshan292003/DBMS-project-5thSem"],
            Learnings : ["Developed APIs for dynamic content rendering on the website","Integrated MySQL database for efficient data storage and retrieval","Implemented SQL queries for filtering, sorting, and manipulating data","Learned to handle and process data from user inputs and database queries"]
        }    
        }
    ]

    return (
        <>
            <div className="home" data-scroll-container ref={scrollRef}>
                <section className="home-part1">
                    <div className="homebackimage">
                        <img src={homebackimage} alt="" data-scroll data-scroll-speed="-3" />
                    </div>
                    <div className="circle">
                    </div>
                    <div>
                        <h2>Hello I'm <b>TOSHAN S MAINDAN</b></h2>
                        <span>{typeEffect}<Cursor cursorStyle='|' /></span>
                        <button onClick={() => downloadFile(RESUME_PDF_FILE)}>Download Resume</button>
                    </div>
                    <img src={HomePage} id="masterimg" alt="" data-scroll data-scroll-speed="-1" />
                </section>



                <section className="home-part2">
                    <div className="gradient1"></div>
                    <div className="gradient2"></div>
                    <CoolHeading title="about me" subtitle="who am i"></CoolHeading>
                    <p>
                        <section>
                            <img src={About} alt="" data-scroll data-scroll-speed="-1" />
                            <img src={AboutBg} alt="" />
                            <h1>Something About Me</h1>
                            <p>Hi! I'm Toshan, A passionate front-end developer with expertise in CSS, React.js, MERN stack,
                                C++ and DSA. Currently exploring 3D web development using Three.js to create visually
                                immersive websites. Mixing it up with video editing in After Effects, 3D modeling in Blender
                                trying to recreate cinematic shots. Hobbies include video gaming and learning to play the
                                electric guitar. Committed to writing clean, optimized code while introducing innovative ideas.
                                Aiming to contribute my skills for developing stunning projects.</p>
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
                    <img data-scroll data-scroll-speed="-8" src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
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
                        <div>
                            <img src={Design} alt="" />
                            <h1>UI/UX Design</h1>
                            <p>Crafting visually appealing and user-friendly website designs.</p>
                        </div>
                        <div>
                            <img src={Dev} alt="" />
                            <h1>Web Development</h1>
                            <p>Building dynamic and responsive web applications.</p>
                        </div>
                        <div>
                            <img src={DSA} alt="" />
                            <h1>Competitive Coding</h1>
                            <p>Mastering algorithms and DSA for efficient problem-solving.</p>
                        </div>
                        <div>
                            <img src={Graphic} alt="" />
                            <h1>Graphic Design</h1>
                            <p>Creating compelling visual designs for branding and marketing.</p>
                        </div>
                        <div>
                            <img src={Motion} alt="" />
                            <h1>Motion Graphics</h1>
                            <p>Animating captivating motion graphics for engaging storytelling.</p>
                        </div>
                    </section>
                </section>

                <section className="home-part6">
                    <img data-scroll data-scroll-speed="-10" src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div>
                        <h1>1000+</h1>
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

                <div className="home-part7">
                    <CoolHeading title="My Portfolio" subtitle="my projects"></CoolHeading>
                    <div>
                        {
                            projects.map((i) => (
                                <Model Image={i.Image} name={i.name} Link={i.Link} project={i.Project}></Model>
                            ))
                        }
                    </div>
                    <button><a href="./portfolio">Browse Portfolio</a></button>
                </div>

                <Footer></Footer>
            </div>
        </>
    )
}