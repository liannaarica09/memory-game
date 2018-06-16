import React, { Component } from "react";
import doctors from "./doctors.json";
import Header from "./Header";
import Card from "./Card";
import CardContainer from "./CardContainer";

class App extends Component {

    render() {
        return (
            <main>
                <Header />
                <CardContainer >
                    {doctors.map(doctor => (
                        <Card
                            key={doctor.id}
                            alt={doctor.name}
                            src={doctor.src}
                        />
                    ))}
                </CardContainer>
            </main>
        )
    }
}

export default App;