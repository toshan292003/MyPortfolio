import {React,useState} from "react";
import "./parts.css";
export default function Part(props){

    const [Opacity,setOpacity] = useState("0%");
    const [Move,setMove] = useState("translateY(0px)");
    const [color,setcolor] = useState("grayscale()");

    const handleMouseEnter = () => {
        setOpacity("100%");
        setMove("translateY(0px)");
        setcolor("none");
    };
    
    const handleMouseLeave = () => {
        setOpacity("0%");
        setMove("translateY(25px)")
        setcolor("grayscale()");
    };

    return(
        <>
            <div className="part">
                <a href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <section>
                        <img src={props.image} alt="" style={{
                            filter:color
                    }}/>
                        <h1 style={{
                        opacity:Opacity,
                        transform:Move
                    }}>{props.title}</h1>
                    </section>
                </a>
            </div>
        </>
    )
}