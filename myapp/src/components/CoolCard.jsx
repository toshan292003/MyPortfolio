import React, {useState} from "react";
import "./coolcard.css";

export default function CoolCard(props) {

    const [Opacity,setOpacity] = useState("0%");
    const [Move,setMove] = useState("translateY(0px)");

    const handleMouseEnter = () => {
        setOpacity("100%");
        console.log(Opacity);
        setMove("translateY(0px)")
    };
    
    const handleMouseLeave = () => {
        setOpacity("0%");
        setMove("translateY(50px)")
        console.log(Opacity);
    };

    return (
        <>
            <section className="coolcard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-aos="fade-up">
                <h1 
                style={{
                    opacity:Opacity,
                    transform:Move
                }}
                >{props.name}</h1>
                <div style={{opacity:Opacity}}></div>
                <img src={props.Image} alt="" />
            </section>
        </>
    )
}