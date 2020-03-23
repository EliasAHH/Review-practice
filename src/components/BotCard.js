import React from "react";

const BotCard = ({ bot }) => {

    // If this is confusing you can take it out, it's just for design to tell it if the robot is support/attack/defense.
    let botType;

    switch (bot.bot_class) {
        case "Assault":
            botType = <i className="icon military" />;
            break;
        case "Defender":
            botType = <i className="icon shield" />;
            break;
        case "Support":
            botType = <i className="icon ambulance" />;
            break;
        default:
            botType = <div />;
    }

    return (
        <div className="ui column">
            <div className="ui card">
                <div className="image">
                    <img alt="oh no!" src={bot.avatar_url} />
                </div>
                <div className="content">
                    <div className="header">
                        {bot.name} {botType}
                    </div>

                    <div className="meta text-wrap">
                        <small>{bot.catchphrase}</small>
                    </div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat" />
                        {bot.health}
                    </span>

                    <span>
                        <i className="icon lightning" />
                        {bot.damage}
                    </span>
                    <span>
                        <i className="icon shield" />
                        {bot.armor}
                    </span>
                </div>
            </div>
        </div>
    );

};

export default BotCard;