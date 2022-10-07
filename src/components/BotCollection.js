import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, botArmy, setBotArmy, setBotData}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {/* Collection of all bots */}


        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} botArmy={botArmy} setBotArmy={setBotArmy} setBotData={setBotData}/>

        ))}
      </div>
    </div>
  );
}

export default BotCollection;