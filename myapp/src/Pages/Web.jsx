import React from "react";
import Footer from "./footer";
import CoolHeading from "../components/CoolHeading";
import Model from "../components/Model";
import Navbar from "./navbar";
import SmartHome from "../Images/Projects/SmartHome.png";
import AmbulanceR from "../Images/Projects/AmbulanceR.png";
import Water from "../Images/Projects/Water Purity Tracker.png";
import ReachInbox from "../Images/Projects/reachinbox.png";

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
        {name:"ReachInbox", Image:ReachInbox,
        Project : {
            desc:"I developed an email dashboard using React.js as part of an assignment for the recruitment process at ReachInbox. The project features an intuitive interface for managing emails, with functionalities such as inbox organization, email categorization, and quick actions like replying, deleting, and archiving. Its responsive design and efficient state management ensure a smooth user experience.",
            awards : ["I was selected for a job at ReachInbox after successfully completing their recruitment assignment."],
            Links : ["https://toshan-reachinbox-assignment.vercel.app/"],
            Learnings : ["Gained hands-on experience with API integration.","Improved skills in connecting front-end components to back-end services.","Enhanced understanding of efficient data flow management."]
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
        {name:"AmbulanceR", Image:AmbulanceR,
        Project : {
            desc:"AmbulanceR is an innovative system that streamlines medical emergencies. With just a click, it alerts the nearest hospital, dispatches an ambulance, and notifies the victim's loved ones via SMS. Additionally, it offers a convenient booking feature for medical assistance at future events or performances, ensuring comprehensive healthcare accessibility.",
            duration : "20 Feb - 11 Mar 2023",
            awards : ["AmbulanceR selected for prestigious Project Expo at Sahyadri College of Engineering and Management."],
            Links : ["https://github.com/toshan292003/mini-project"],
            Learnings : ["Established database connections with MongoDB using Node.js","Implemented Create, Read, Update, and Delete operations efficiently"]
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

    return(
        <>
            <Navbar></Navbar>
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