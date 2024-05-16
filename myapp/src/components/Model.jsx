import {React , useState } from "react";
import HomeModel from "./HomeModel";
import CoolCard from "./CoolCard";

export default function Model(props){

    const [showModel,setshowModel] = useState(false);

    return(
        <>
            <div onClick={()=>setshowModel(true)}>
                <CoolCard Image="https://i.pinimg.com/564x/6e/ca/15/6eca15a37c66d0e2cdc52ae0ef4eecc2.jpg" name="Project 1"></CoolCard>
            </div>
            {showModel && <HomeModel Display={props.img} onClose={()=>setshowModel(false)}></HomeModel>}
        </>
    )
}