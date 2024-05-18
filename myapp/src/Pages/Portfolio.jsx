import {React , useState} from "react";
import CoolHeading from "../components/CoolHeading"
import "./portfolio.css";
import Part from "../components/Parts";

export default function Portfolio(){

    return (
        <>
        <div className="portfolio">
            <Part title="Web Development" image=""></Part>
            <Part title="Designing" image=""></Part>
            <Part title="Cinematography" image=""></Part>
        </div>
        </>
    )
}