import React, { useState, useEffect } from "react";

import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [botDetails, setBotDetails] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((details) => setBotDetails(details));
  }, []);
  //console.log(botData)

  return (
    <div>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} setBotDetails={setBotDetails}/>
      <BotCollection botArmy={botArmy} setBotArmy={setBotArmy} bots={botDetails} setBotData={setBotDetails} />
    </div>
  );
}

export default BotsPage;
