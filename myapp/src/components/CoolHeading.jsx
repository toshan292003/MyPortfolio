import React,{useEffect} from "react";
import './coolheading.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CoolHeading(props) {

    useEffect(()=>{
        AOS.init({duration: 1000});
    });

    return (
        <>
            <div className="coolheading">
                <span data-aos = "fade-up">{props.subtitle}</span>
                <h1 data-aos = "fade-up">{props.title}</h1>
            </div>
        </>
    )
}