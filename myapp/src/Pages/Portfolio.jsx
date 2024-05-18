import {React , useState} from "react";
import CoolHeading from "../components/CoolHeading"
import "./portfolio.css";
import Part from "../components/Parts";

export default function Portfolio(){

    return (
        <>
        <div className="portfolio">
            <Part title="Web Development" image=""></Part>
            <Part title="Designing" image="https://cdn.pixabay.com/photo/2024/04/06/05/30/ai-generated-8678698_1280.jpg"></Part>
            <Part title="Cinematography" image="https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Part>
        </div>
        </>
    )
}