import React, { useEffect } from "react";

export default function IconComponent({
    image,
    highlight
}){
    return(
        <>
            <div className={`iconbox ${highlight? "brighten" : ""}`}>
                <img src={image} alt="error"/>
            </div>
        </>
    )
}