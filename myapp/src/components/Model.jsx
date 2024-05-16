import {React , useState } from "react";
import HomeModel from "./HomeModel";
import CoolCard from "./CoolCard";

export default function Model(props){

    const [showModel,setshowModel] = useState(false);

    return(
        <>
            <div onClick={()=>setshowModel(true)}>
                <CoolCard Image={props.Image} name={props.name}></CoolCard>
            </div>
            {showModel && <HomeModel Display={props.img} onClose={()=>setshowModel(false)}></HomeModel>}
        </>
    )
}