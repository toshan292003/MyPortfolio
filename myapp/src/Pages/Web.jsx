import React from "react";
import Footer from "./footer";
import CoolHeading from "../components/CoolHeading";
import Model from "../components/Model";

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