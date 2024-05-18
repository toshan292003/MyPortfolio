import React from "react";
import Footer from "./footer";
import CoolHeading from "../components/CoolHeading";
import Model from "../components/Model";

import SmartHome from "../Images/Projects/SmartHome.png";

export default function Web(){

    const projects=[
        {name:"JMV Impex", Image:"https://cdn.pixabay.com/photo/2024/04/22/18/53/ai-generated-8713376_1280.jpg",
        Project : {
            desc:"JMV Impex, a leading mechanical engineering and parts production company, commissioned a full-fledged Landing Page to showcase their capabilities. The visually stunning and user-friendly website, meticulously designed, offers a comprehensive understanding of JMV Impex's expertise, products, and services. With dynamic elements, interactive features, and high-quality visuals, the website brings the company's offerings to life, serving as a powerful marketing tool and solidifying their online presence in the industry.",
            duration : "3 May - 13 Jun 2023",
            Links : [   "https://jmvimpex.in/","https://www.figma.com/design/VEAYVe2AMoDEC8l2s4gEuE/JMV-Impex-UI-Design?node-id=8-25&t=GixhHkfeXkFMPLtL-0"],
            Learnings : ["Effective team and client communication strategies.","Understanding the basic workflow of website development projects."]
        }
        },
        {name:"Smart House", Image:SmartHome,
        Project : {
            desc:"This award-winning UI/UX design revolutionizes home automation through an intuitive smartphone app. Users can effortlessly monitor and control all home appliances, turning them on/off remotely. The real-time status updates allow seamless tracking of each device's condition. This innovative solution streamlines home management, making it convenient and user-friendly.",
            duration : "29 Apr - 29 Apr 2023",
            awards : ["Secured First Place in UI/UX Competition conducted by YentechMania 2024 at Yenepoya IT, Moodibidri"],
            Links : ["https://www.figma.com/design/7g2D7hnOL459uUy86Y0yW5/Untitled?t=tlhoQg5rRcl07l2G-0"],
            Learnings : ["The competition honed my problem-solving skills, enabling me to approach challenges with a fresh perspective."]
            }
        },
        {name:"Project 3", Image:"https://i.pinimg.com/564x/ad/c1/8f/adc18f7eb9df78a4ffa2f2441ae69b2d.jpg",
        Project : {
            desc:"This is a project sample description 3",
            duration : "Sample Duration 3",
            awards : ["Award 2"],
            Learnings : ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente?"]
        }    
        }
    ]

    return(
        <>
            <div className="home-part7">
                <CoolHeading title="Web Development" subtitle="my projects"></CoolHeading>
                <div>
                    {
                        projects.map((i)=>(
                            <Model Image={i.Image} name={i.name} Link={i.Link} project={i.Project}></Model>
                        ))
                    }
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}