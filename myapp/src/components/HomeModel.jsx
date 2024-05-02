import React from "react";
import "./homemodel.css";
import Progress from "./Progress";

export default function HomeModel(props){
    return(
        <>
            <div className="homemodel">
                <button onClick={props.onClose}>&#10010;</button>
                <div className="imagebox">
                    <img src={props.Display} alt="" />
                </div>
                <h1>PROJECT NAME</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolore deserunt assumenda cumque eum nemo illum similique exercitationem nostrum! Vero deleniti placeat sequi, sapiente sit quidem eveniet qui sed eos!</p>
                <section>
                    <span>Duration : 10 Mar - 12 Mar 2023</span>
                    <div>
                        <h3>Awards and Recognition : </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tenetur.</p>
                    </div>
                    <div>
                        <h3>Project Links : </h3>
                        <a href="">Github</a>
                        <a href="">Website</a>
                    </div>
                    <div>
                        <h3>Key Learnings : </h3>
                        <ol>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, aliquid.</li>
                        </ol>
                    </div>
                    <div>
                        <h3>Technologies Used : </h3>
                        <Progress percentage="25" title="jh"></Progress>
                    </div>
                </section>
            </div>
        </>
    )
}