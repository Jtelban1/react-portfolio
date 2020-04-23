import React from "react";
import Card from "../components/Card";
import img1 from "../img/Coffee-Club.png";
import img2 from "../img/Hows-it-growing.png";
import img3 from "../img/John-Fitness-Tracker.png";
import img4 from "../img/match-mood.png";
import img5 from "../img/Note-Taker.png";
import img6 from "../img/profile-picture.jpg";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    gh: "https://github.com/Jtelban1/coffee-club.git",
                    title: "Coffee Club",
                    deployed: "https://fathomless-gorge-36996.herokuapp.com/",
                    photo: img1,
                },
                {
                    gh: "https://bfeliz.github.io/match-my-mood/",
                    title: "Match My Mood",
                    deployed: "https://bfeliz.github.io/match-my-mood/",
                    photo: img4,
                },
                {
                    gh: "https://github.com/Jtelban1/note-taker",
                    title: "Note Taker",
                    deployed: "https://boiling-peak-46769.herokuapp.com/",
                    photo: img5,
                },
                {
                    gh: "https://github.com/Jtelban1/plant-power",
                    title: "Hows it Growing?",
                    deployed: "https://hows-itgrowing.herokuapp.com/",
                    photo: img2,
                },
                {
                    gh: "https://github.com/Jtelban1/workout-tracker.git",
                    title: "Work our Tracker",
                    deployed: "johns-fitness-tracker.herokuapp.com",
                    photo: img3,
                },
                {
                    gh: "https://github.com/Jtelban1/react-portfolio",
                    title: "John Telban's Portfolio",
                    deployed: "uknown",
                    photo: img6,
                },
            ],
        };
    }

    render() {
        return (
            <div className="bg-white border rounded my-16  shadow">
                <article className="flex flex-wrap">
                    {this.state.cards.map((card) => (
                        <Card
                            GithubLink={card.gh}
                            DeployedLink={card.deployed}
                            Png={card.photo}
                            Title={card.title}
                        />
                    ))}
                </article>
            </div>
        );
    }
}

export default Projects;
