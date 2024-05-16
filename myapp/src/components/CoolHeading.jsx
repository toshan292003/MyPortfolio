import React,{useEffect} from "react";
import './coolheading.css';

export default function CoolHeading(props) {
    
    return (
        <>
            <div className="coolheading">
                <span>{props.subtitle}</span>
                <h1>{props.title}</h1>
            </div>
        </>
    )
}