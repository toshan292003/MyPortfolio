import {React , useEffect , useState } from "react";
import "./homemodel.css";
import Progress from "./Progress";

export default function HomeModel(props){
    const {project} = props;
    const [awards,setawards] = useState(false);
    useEffect(() => {
        
        let n = project.awards.length;
        if(n>0){
            setawards(true);
        }
      }, []);

    return(
        <>
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
                    <span>Duration {project.duration}</span>
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
                    <div>
                        <h3>Project Links : </h3>
                        {project.Links.map((name,link)=>(
                            <a href={link}>{name}</a>
                        ))}
                        <a href="">Website</a>
                    </div>
                    <div>
                        <h3>Key Learnings : </h3>
                        <ol>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, aliquid.</li>
                        </ol>
                    </div>
                </section>
                </div>
            </div>
        </div>
        </>
    )
}