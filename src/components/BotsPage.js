import React, { useState, useEffect } from "react";

import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [botData, setBotData] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBotData(data));
  }, []);
  //console.log(botData)

  return (
    <div>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} setBotData={setBotData}/>
      <BotCollection botArmy={botArmy} setBotArmy={setBotArmy} bots={botData} setBotData={setBotData} />
    </div>
  );
}

export default BotsPage;
