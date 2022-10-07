import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
function BotsPage() {
    setYourBots([...yourBots,bot]);
  }

  function removeFromBot(bot) {
    setYourBots(yourBots.filter(bots=>bots!==bot))
  } 
  function deleteBot(bot) {
    const updateYourBots = yourBots.filter((b) => b.id !== bot.id);
    const updateBots = bots.filter((b) => b.id !== bot.id);

    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setYourBots(updateYourBots)
      setBots(updateBots)})
  }

  return (
    <div>
      <YourBotArmy
      bots={bots}
      yourBots={yourBots}
      setYourBots={setYourBots}
      removeFromBot={removeFromBot}
      deleteBot={deleteBot}
      />

     <BotCollection 
      bots ={bots}
      addBotToArmy={addBotToArmy}
      setBots={setBots}
      deleteBot={deleteBot}
      />
    </div>
  )
}


export default BotsPage;
