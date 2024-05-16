import {React , useState } from "react";
import HomeModel from "./HomeModel";
import CoolCard from "./CoolCard";

export default function Model(props){

    const [showModel,setshowModel] = useState(false);
    const {project} = props;

    return(
        <>
            <div onClick={()=>setshowModel(true)}>
                <CoolCard Image={props.Image} name={props.name}></CoolCard>
            </div>
            {showModel && <HomeModel Display={props.Image} name={props.name} project={project} onClose={()=>setshowModel(false)}></HomeModel>}
        </>
    )
}