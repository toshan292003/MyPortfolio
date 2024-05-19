import {React , useEffect , useState } from "react";
import "./homemodel.css";

export default function HomeModel(props){
    const {project} = props;
    const [awards,setawards] = useState(false);
    const [links,setlinks] = useState(false);
    const [learning,setlearning] = useState(false);
    useEffect(() => {
        if(project.awards != undefined){
            setawards(true);
        }
        if(project.Links != undefined){
            setlinks(true);
        }
        if(project.Learnings != undefined){
            setlearning(true);
        }
      }, []);

    return(
        <>
        <div className="Modelmain">

        <div className="modelbox">
            <button onClick={props.onClose}>&#10010;</button>
            <div className="model">
                <div className="model-item" id="model-img">
                    <img src={props.Display} alt="" />
                </div>
                <div className="model-item">
                <h1>{props.name}</h1>
                <p>{project.desc}</p>
                <section>
                    <span>Duration : &nbsp;&nbsp;{project.duration}</span>
                    {awards && 
                        <div>
                            <h3>Awards and Recognition : </h3>
                            {
                                project.awards.map((AwardName)=>(
                                    <p>{AwardName}</p>
                                ))
                            }
                        </div>
                    }
                    {links && 
                        <div>
                            <h3>Check it out here : </h3>
                            {project.Links.map((link)=>(
                                <a href={link} target="blank">{link}</a>
                            ))}
                        </div>
                    }
                    {learning &&
                        <div>
                            <h3>Key Learnings : </h3>
                            {project.Learnings.map((point)=>(
                                <p>{point}</p>
                            ))}
                        </div>
                    }
                </section>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}