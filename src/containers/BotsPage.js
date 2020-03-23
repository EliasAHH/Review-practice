import React, { Component } from "react";
import BotCollection from './BotCollection';


class BotsPage extends Component {
    // container that holds all of our bots
    state = {
        bots: []
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch = () => {
        fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
            .then(res => res.json())
            .then(data => this.setState({ bots: data }))
    }


    render() {
        return (
            < div >
                <BotCollection
                    bots={this.state.bots}
                />
            </div >
        );
    }

}

export default BotsPage;