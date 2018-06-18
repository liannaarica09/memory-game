import React, { Component } from "react";
import doctors from "./doctors.json";
import Header from "./Header";
import Card from "./Card";
import CardContainer from "./CardContainer";


class App extends Component {
    state = {
        doctors,
        score: 0,
        topScore: 0,
        clicked: []
    }


    handleClick = (id) => {
        if (this.state.clicked.indexOf(id) > -1) {
            if (this.state.topScore < this.state.score) {
                this.setState({ topScore: this.state.score });
            }
            this.setState({ score: 0 });
            this.setState({ clicked: [] });
            console.log("already clicked");
        } else {
            this.setState({ score: this.state.score + 1 });
            this.setState({ clicked: [...this.state.clicked, id] });
        }

        this.state.doctors.sort(() => Math.random() - 0.5);
    }

    render() {
        return (
            <div>
                <Header score={this.state.score} topScore={this.state.topScore} />
                <CardContainer >
                    {doctors.map(doctor => (
                        <Card
                            key={doctor.id}
                            id={doctor.id}
                            alt={doctor.name}
                            src={doctor.src}
                            handleClick={this.handleClick}
                        />
                    ))}
                </CardContainer>
            </div>
        )
    }
}

export default App;