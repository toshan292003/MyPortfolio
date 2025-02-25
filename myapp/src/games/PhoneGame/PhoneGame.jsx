import React, { useEffect, useState } from "react";
import { images } from "./Images"
import "./PhoneGame.css"
import IconComponent from "./IconComponent";

export default function PhoneGame() {
    const apps = [{
        image: images.Camera,
        challenges: ["Photo Bomb someone who is taking pictures.", "Take a picture of you mewing and post it on IG.", "Record yourself dancing to a song selected by your opponents and post it on IG.", "Recreate a trending reel on IG.", "Camerasomething5", "Camerasomething6"]
    }, {
        image: images.Clock,
        challenges: ["Show us your Alarm schedule"]
    }, {
        image: images.Facetime,
        challenges: ["Who was the last person you facetimed?","Whats your current ringtone?"]

    }, {
        image: images.Instagram,
        challenges: ["Show us your most recent chat with your crush on IG", "What was the last conversation you had with your spouce/gf on IG", "Show us yout IG feed", "Show us your Instagram saved posts", "Take a video of you twerking and post it on an IG story", "Who's on the top #1 in your IG share list?","Show your archived posts","Show your archived stories.","Show your's crush's instagram page.","Recreate a trending reel and post it."]

    }, {
        image: images.Mail,
        challenges: ["What was the last mail you received?", "Send a mail to your manager saying that you are getting married.", "Send a mail to ", "How many mail ID's do you have?", "Mailsomething5", "Mailsomething6"]

    }, {
        image: images.Messages,
        challenges: ["What was the last message you received on Messages by a Human.", "Messagessomething2", "Messagessomething3", "Messagessomething4", "Messagessomething5", "Messagessomething6"]

    }, {
        image: images.Music,
        challenges: ["Show your previous year wrapped on Spotify", "What's your favourite music artist?", "What's your favourite song?", "You have to sing a song which will be picked by your opponents.", "Sing your favourite song.", "What was the first song you ever heard when you started listening to music.","What's that one artist who is really famous and hyped up, but you feel is overrated?"]

    }, {
        image: images.Notes,
        challenges: ["What's in your bucket list?","Show what's in your notes app."]

    }, {
        image: images.Phone,
        challenges: ["What did you save your crush/gf's number as?", "Show the contact photo you have set for your crush/gf's number", "When was the last time you called your crush/gf.", "Which was the most recent call you had?", "Call your and tell them you still like them.", "Call your crush and tell them you like them.","What's your current ringtone?","Set your ringtone to any chinese ringtone for a week.","What was your most favourite ringtone?"]

    }, {
        image: images.Photos,
        challenges: ["Show a picture of your last vacation", "Show a picture of your crush/gf", "Show a picture of you with your gf/crush", "Let your opponents post a random picture from your gallery on IG.", "Show your hidden pictures folder", "Show your favourites folder.","Show your most recently deleted picture.","Show a childhood picture of you."]

    }, {
        image: images.Watsapp,
        challenges: ["What's your last conversation with your gf", "What was your last conversation with your crush", "Send a message saying that you have a gf in your family group", "What's your watsapp chat wallpaper?", "What's the name of the most controvertial Boys group that you are a part of", "Do you have a work related unofficial watsapp group?"]

    }, {
        image: images.Youtube,
        challenges: ["Show your watch later playlist.", "What was the last thing you searched on youtube.", "Did you ever try to search for exclusive videos on youtube?", "Show your youtube feed.", "What's your most favourite documentary video.", "What's your most favourite live performance?","What's your most favourite youtube video.","Who is your favourite youtuber?"]

    }];

    const [highlightedindex, setHighlightedindex] = useState(null);
    const [selectedindex, setSelectedindex] = useState(null);
    const [selectedChallenge, setSelectedChallenge] = useState(null);
    const StartGame = () => {
        let count = 0;
        setSelectedindex(null)
        const delays = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 400, 400, 400, 600, 1000, 1400, 2000]; // Progressive delays
        const updateSelection = () => {
            if (count < delays.length) {
                let a = Math.floor(Math.random() * apps.length)
                console.log("Highlighted random index : ",a)
                setHighlightedindex(a);
                if (count === delays.length - 1) {
                    setSelectedindex(a)
                    let b = apps[a].challenges[Math.floor(Math.random() * apps[a].challenges.length)]
                    setSelectedChallenge(b)
                    const audio = new Audio("/sounds/TINGSOUNDEFFECT.mp3")
                    audio.volume = 0.2
                    audio.play()
                    setTimeout(() => {}, 1000);
                }
                const audio = new Audio("/sounds/TINGSOUNDEFFECT.mp3")
                audio.volume = 0.2
                audio.play()
                setTimeout(updateSelection, delays[count]); // Set next timeout dynamically
                count++;
            }
        };
        updateSelection(); // Start the recursive timeout loop
    };
    return (
        <>
            <section className="phonegame-container">
                <h1>Phone Game</h1>
                <div className="icons-container">
                    {
                        apps.map((img, index) => (
                            <IconComponent
                            image={img.image}
                            highlight={highlightedindex === index}
                            select={selectedindex === index}
                            challenges={img.challenges}
                            />
                        ))
                    }
                </div>
                <button onClick={StartGame}>Start Game</button>
                <div className={`challenge-display-container ${selectedindex !== null ? "--active" : ""}`}>
                    <div>
                        <button onClick={()=>{setSelectedindex(null)}}>&#x274c;</button>
                        {
                            selectedindex?
                            <img src={apps[selectedindex].image}/>
                            :null
                        }
                        <p>{selectedChallenge}</p>
                    </div>
                </div>
            </section>
        </>
    )
}