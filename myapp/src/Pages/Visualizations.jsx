import React from "react";
import Footer from "./footer";
import CoolHeading from "../components/CoolHeading";
import Model from "../components/Model";
import Navbar from "./navbar";

export default function Visualizations(){

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

    return(
        <>
            <Navbar></Navbar>
            <div className="home-part7">
                <CoolHeading title="Games and Visualizations" subtitle="my projects"></CoolHeading>
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