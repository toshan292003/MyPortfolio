import {React} from "react";
import Footer from "./footer";
import CoolHeading from "../components/CoolHeading";
import Model from "../components/Model";
import Navbar from "./navbar";

import CAD from "../Images/Projects/CAD Workshop Challengers.png";
export default function Designing(){
    const projects=[
        {name:"CAD Worskshop Challengers", Image:CAD,
        Project : {
            desc:"Utilized graphic design skills to create visually appealing promotional materials for a CAD workshop organized by the Challengers club. Designed an eye-catching poster to market the event and a professional certificate to acknowledge participants' successful completion.",
            duration : "01 Jan - 02 Jan 2023",
            Links : ["https://www.instagram.com/p/CnCjDKMvh3O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="]
        }
        },
        {name:"Sai Palace Republic Day", Image:"https://i.pinimg.com/564x/25/56/21/2556210e95b6e5d8debf48ce58678b07.jpg",
        Project : {
            desc:"Designed a captivating poster for the restaurant Sai Palace to celebrate Republic Day. The poster artfully blended patriotic elements with the restaurant's branding, creating an eye-catching promotional material that honored the national occasion while attracting potential diners.",
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
        }
    ]

    return(
        <>
            <Navbar></Navbar>
            <div className="home-part7">
                <CoolHeading title="Graphic Designing" subtitle="my projects"></CoolHeading>
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