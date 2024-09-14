import {React , useState} from "react";
import "./portfolio.css";
import Part from "../components/Parts";

export default function Portfolio(){

    return (
        <>
        <div className="portfolio">
            <Part link="./portfolio/web" title="Web Development" image="https://images.unsplash.com/photo-1600304594526-5f75d3ca8f3d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Part>
            <Part link="./portfolio/designing"  title="Designing" image="https://cdn.pixabay.com/photo/2024/04/06/05/30/ai-generated-8678698_1280.jpg"></Part>
            <Part link="./portfolio/games"  title="Games & Visualizations" image="https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Part>
        </div>
        </>
    )
}