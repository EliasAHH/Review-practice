import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = ({ bots }) => {
    const renderBots = () => bots.map(bot => <BotCard key={bot.id} bot={bot} />)
    return (
        <div className="ui four column grid">
            <div className="row">
                {renderBots()}
            </div>
        </div>
    );
}



export default BotCollection;