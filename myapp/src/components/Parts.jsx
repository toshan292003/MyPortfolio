import {React,useState} from "react";
import "./parts.css";
export default function Part(props){

    const [Opacity,setOpacity] = useState("0%");
    const [Move,setMove] = useState("translateY(0px)");
    const [color,setcolor] = useState("grayscale()");
    const [bright,setbright] = useState("70%");

    const handleMouseEnter = () => {
        setOpacity("100%");
        setMove("translateY(0px)");
        setcolor("none");
        setbright("50%");
    };
    
    const handleMouseLeave = () => {
        setOpacity("0%");
        setMove("translateY(25px)")
        setcolor("grayscale()");
        setbright("70%");
    };

    return(
        <>
            <div className="part">
                <a href={props.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <section>
                        <div style={{
                            opacity:bright
                        }}></div>
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