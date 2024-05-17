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
import Progress from "../components/Progress";
import CoolCard from "../components/CoolCard";
import Model from "../components/Model";

import DSA from "../Images/Icons/data.png";
import Graphic from "../Images/Icons/editorial.png";
import Dev from "../Images/Icons/coding.png";
import Motion from "../Images/Icons/lightning.png";
import Design from "../Images/Icons/webpage.png";

export default function Home() {
    const [OffsetY,setOffsetY] = useState(0);

    const handleScroll = ()=>{
        setOffsetY(window.pageYOffset);
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll);
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
        words : ['Full Stack Developer','UI/UX Designer','Graphic Designer','Student'],
        loop:{},
        typeSpeed : 50,
        deleteSpeed: 50
    })

    const projects=[
        {name:"Project 1", Image:"https://i.pinimg.com/564x/6e/ca/15/6eca15a37c66d0e2cdc52ae0ef4eecc2.jpg",
        Project : {
            desc:"This is a project sample description",
            duration : "Sample Duration", 
            awards : ["This is a sample awards section."],
            Links : [   "https://github.com/toshan292003","https://leetcode.com/problemset/"],
            Learnings : ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?"]
        }
        },
        {name:"Project 2", Image:"https://i.pinimg.com/564x/25/56/21/2556210e95b6e5d8debf48ce58678b07.jpg",
        Project : {
            desc:"This is a project sample description 2",
            duration : "Sample Duration 2",
            awards : ["Award 1"],
            Links : ["https://github.com/toshan292003","https://leetcode.com/problemset/"],
            Learnings : ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?"]
            }
        },
        {name:"Project 3", Image:"https://i.pinimg.com/564x/ad/c1/8f/adc18f7eb9df78a4ffa2f2441ae69b2d.jpg",
        Project : {
            desc:"This is a project sample description 3",
            duration : "Sample Duration 3",
            awards : ["Award 2"],
            Learnings : ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?"]
        }    
        },
        {name:"Project 4", Image:"https://i.pinimg.com/236x/e3/75/48/e37548de31d5fe127f3028039efcd46d.jpg",
        Project : {
            desc:"This is a project sample description 4",
            duration : "Sample Duration 4",
            awards : ["Award 3", " Award 3"],
            Learnings : ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?"]
        }
        },
        {name:"Project 5", Image:"https://i.pinimg.com/564x/1d/f1/98/1df1981458a824231ccca9289daff828.jpg",
        Project : {
            desc:"This is a project sample description 5",
            duration : "Sample Duration 5",
            Learnings : ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?"]
            }
        },
        {name:"Project 6", Image:"https://i.pinimg.com/564x/d7/a7/4e/d7a74e857301f436f7d9bbb183952a68.jpg",
        Project : {
            desc:"This is a project sample description 6",
            duration : "Sample Duration 6",
            Learnings : ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?"]
            }
        }
    ]

    return (
        <>
            <div className="home">
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
                    <img src={HomePage} id="masterimg" alt="" />
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
                    <CoolHeading title="what i bring to the table" subtitle="my skillset"></CoolHeading>
                    <section>
                        <div className="card">
                            <img src={DSA} alt="" />
                            <h1>DSA Expertise</h1>
                            <p>Mastering algorithms and data structures for efficient problem-solving.</p>
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

                <section className="home-5">
                    <CoolHeading title="My Recent Projects" subtitle="my works"></CoolHeading>
                    <div>
                        {
                            projects.map((i)=>(
                                <Model Image={i.Image} name={i.name} Link={i.Link} project={i.Project}></Model>
                            ))
                        }
                    </div>
                    <button><a href="">Browse Portfolio</a></button>
                </section>
                
                <Progress percentage="90" title="C++"></Progress>

            </div>
        </>
    )
}