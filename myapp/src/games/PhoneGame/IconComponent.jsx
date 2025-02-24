import React, { useEffect } from "react";

export default function IconComponent({
    image,
    selected
}){
    return(
        <>
            <div className={`iconbox ${selected? "brighten" : ""}`}>
                <img src={image} alt="error"/>
            </div>
        </>
    )
}