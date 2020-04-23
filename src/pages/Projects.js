import React from "react";
import Card from "../components/Card";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {gh: 'link.me', title: 'Project #1', deployed: 'link2.html', photo: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'},
                {gh: 'link.me', title: 'Project #1', deployed: 'link2.html', photo: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'},
                {gh: 'link.me', title: 'Project #1', deployed: 'link2.html', photo: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'},
                {gh: 'link.me', title: 'Project #1', deployed: 'link2.html', photo: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'},
                {gh: 'link.me', title: 'Project #1', deployed: 'link2.html', photo: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'},
                {gh: 'link.me', title: 'Project #1', deployed: 'link2.html', photo: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'}
            ]
        }
    }

    render() {

        return (
            <div className="bg-white border rounded my-16  shadow">
                <article className="flex flex-wrap">
                    {this.state.cards.map(card => (
                        <Card GithubLink={card.gh} DeployedLink={card.deployed} Png={card.photo} Title={card.title}/>))}
                </article>
            </div>
        )
    }
}

export default Projects;