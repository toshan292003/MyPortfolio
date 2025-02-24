import React, { useState } from "react";

import {Appstore,Calculator,calender,Camera,Clock,Facetime,Files,GarageBand,health,IMaps,Instagram,Lists,Mail,Messages,Music,Notes,Phone,Photos,Safari,Settings,Threads,Twitter,Watsapp,Weather,X,Youtube} from "./Images"
import "./PhoneGame.css"
import IconComponent from "./IconComponent";

export default function PhoneGame(){
    const images = [Appstore,Calculator,calender,Camera,Clock,Facetime,Files,GarageBand,health,IMaps,Instagram,Lists,Mail,Messages,Music,Notes,Phone,Photos,Safari,Settings,Threads,Twitter,Watsapp,Weather,X,Youtube];
    
    const [selectedindex,setSelectedindex] = useState(null);
    const StartGame = () => {
        let count = 0;
        const delays = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 400, 400, 400, 600, 1000, 1400,2000]; // Progressive delays
    
        const updateSelection = () => {
            if (count < delays.length) {
                setSelectedindex(Math.floor(Math.random() * images.length));
                const audio = new Audio("/sounds/TINGSOUNDEFFECT.mp3")
                audio.volume = 0.2
                audio.play()
                setTimeout(updateSelection, delays[count]); // Set next timeout dynamically
                count++;
            }
        };
    
        updateSelection(); // Start the recursive timeout loop
    };
    
    return(
        <>
            Hello
            <div className="icons-container">
            {
                images.map((img,index)=>(
                    <IconComponent image={img} selected={selectedindex === index}/>
                ))
            }
            </div>
            <button onClick={StartGame}>Browse All Projects</button>
        </>
    )
}