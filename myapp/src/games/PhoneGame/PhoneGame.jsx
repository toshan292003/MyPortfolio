import React, { useEffect, useState } from "react";

import { images } from "./Images"
import "./PhoneGame.css"
import IconComponent from "./IconComponent";

export default function PhoneGame() {
    const apps = [{
        image: images.Appstore,
        challenges: ["Appstoresomething1", "Appstoresomething2", "Appstoresomething3", "Appstoresomething4", "Appstoresomething5", "Appstoresomething6"]
    }, {
        image: images.Calculator,
        challenges: ["Calculatorsomething1", "Calculatorsomething2", "Calculatorsomething3", "Calculatorsomething4", "Calculatorsomething5", "Calculatorsomething6"]
    }, {
        image: images.calender,
        challenges: ["calendersomething1", "calendersomething2", "calendersomething3", "calendersomething4", "calendersomething5", "calendersomething6"]
    }, {
        image: images.Camera,
        challenges: ["Camerasomething1", "Camerasomething2", "Camerasomething3", "Camerasomething4", "Camerasomething5", "Camerasomething6"]
    }, {
        image: images.Clock,
        challenges: ["Clocksomething1", "Clocksomething2", "Clocksomething3", "Clocksomething4", "Clocksomething5", "Clocksomething6"]
    }, {
        image: images.Facetime,
        challenges: ["Facetimesomething1", "Facetimesomething2", "Facetimesomething3", "Facetimesomething4", "Facetimesomething5", "Facetimesomething6"]

    }, {
        image: images.Files,
        challenges: ["Filessomething1", "Filessomething2", "Filessomething3", "Filessomething4", "Filessomething5", "Filessomething6"]

    }, {
        image: images.GarageBand,
        challenges: ["GarageBandsomething1", "GarageBandsomething2", "GarageBandsomething3", "GarageBandsomething4", "GarageBandsomething5", "GarageBandsomething6"]

    }, {
        image: images.IMaps,
        challenges: ["GarageBandsomething1", "GarageBandsomething2", "GarageBandsomething3", "GarageBandsomething4", "GarageBandsomething5", "GarageBandsomething6"]

    }, {
        image: images.Instagram,
        challenges: ["Instagramsomething1", "Instagramsomething2", "Instagramsomething3", "Instagramsomething4", "Instagramsomething5", "Instagramsomething6"]

    }, {
        image: images.Lists,
        challenges: ["Listssomething1", "Listssomething2", "Listssomething3", "Listssomething4", "Listssomething5", "Listssomething6"]

    }, {
        image: images.Mail,
        challenges: ["Mailsomething1", "Mailsomething2", "Mailsomething3", "Mailsomething4", "Mailsomething5", "Mailsomething6"]

    }, {
        image: images.Messages,
        challenges: ["Messagessomething1", "Messagessomething2", "Messagessomething3", "Messagessomething4", "Messagessomething5", "Messagessomething6"]

    }, {
        image: images.Music,
        challenges: ["Musicsomething1", "Musicsomething2", "Musicsomething3", "Musicsomething4", "Musicsomething5", "Musicsomething6"]

    }, {
        image: images.Notes,
        challenges: ["Notessomething1", "Notessomething2", "Notessomething3", "Notessomething4", "Notessomething5", "Notessomething6"]

    }, {
        image: images.Phone,
        challenges: ["Phonesomething1", "Phonesomething2", "Phonesomething3", "Phonesomething4", "Phonesomething5", "Phonesomething6"]

    }, {
        image: images.Photos,
        challenges: ["Photossomething1", "Photossomething2", "Photossomething3", "Photossomething4", "Photossomething5", "Photossomething6"]

    }, {
        image: images.Safari,
        challenges: ["Safarisomething1", "Safarisomething2", "Safarisomething3", "Safarisomething4", "Safarisomething5", "Safarisomething6"]

    }, {
        image: images.Settings,
        challenges: ["Settingssomething1", "Settingssomething2", "Settingssomething3", "Settingssomething4", "Settingssomething5", "Settingssomething6"]
    }, {
        image: images.Threads,
        challenges: ["Threadssomething1", "Threadssomething2", "Threadssomething3", "Threadssomething4", "Threadssomething5", "Threadssomething6"]

    }, {
        image: images.Twitter,
        challenges: ["Twittersomething1", "Twittersomething2", "Twittersomething3", "Twittersomething4", "Twittersomething5", "Twittersomething6"]

    }, {
        image: images.Watsapp,
        challenges: ["Watsappsomething1", "Watsappsomething2", "Watsappsomething3", "Watsappsomething4", "Watsappsomething5", "Watsappsomething6"]

    }, {
        image: images.Weather,
        challenges: ["Weathersomething1", "Weathersomething2", "Weathersomething3", "Weathersomething4", "Weathersomething5", "Weathersomething6"]

    }, {
        image: images.X,
        challenges: ["Xsomething1", "Xsomething2", "Xsomething3", "Xsomething4", "Xsomething5", "Xsomething6"]

    }, {
        image: images.Youtube,
        challenges: ["Youtubesomething1", "Youtubesomething2", "Youtubesomething3", "Youtubesomething4", "Youtubesomething5", "Youtubesomething6"]

    }];

    const [highlightedindex, setHighlightedindex] = useState(null);
    const [selectedindex, setSelectedindex] = useState(null);
    const [selectedChallenge, setSelectedChallenge] = useState(null);
    const StartGame = () => {
        let count = 0;
        const delays = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 400, 400, 400, 600, 1000, 1400, 2000]; // Progressive delays

        const updateSelection = () => {
            if (count < delays.length) {
                let a = Math.floor(Math.random() * apps.length)
                console.log("Highlighted random index : ",a)
                setHighlightedindex(a);
                if (count === delays.length - 1) {
                    console.log("Final Selected challenge topic : ",a);
                    setSelectedindex(a)
                    let b = apps[a].challenges[Math.floor(Math.random() * apps[a].challenges.length)]
                    setSelectedChallenge(b)
                    console.log("Final Selected challenge index : ",b);
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
            <button onClick={StartGame}>Browse All Projects</button>
            {
                selectedindex !== null ?
                <>
                    <p>{selectedChallenge}</p>
                </>:null
            }
        </>
    )
}