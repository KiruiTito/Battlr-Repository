import React from 'react';

function BotDetails({ bot, handleBack , handleAddToArmy}) {
  return (
    <>
    <button className='add' id="back" onClick={handleBack}>◀ Back</button>
    <img id='image' src={bot.avatar_url} alt={`${bot.name}'s avatar`} />
    <div id="bot-details">
         <h1><span id='small'>Hello , I'm</span> {bot.name}</h1>
        <h5>I'm a  {bot.bot_class} bot</h5>
            <span> <strong id='green'>❤</strong> {bot.health} health</span>
            <span> <strong id='blue'>🛡</strong> {bot.armor} armor</span>
             <span> <strong id='yellow'>⚔</strong> {bot.damage} damage/sec</span>
        <h3>Catchphrase : {bot.catchphrase}</h3>
        <button className="add" id='btnstyle' onClick={(bot) => handleAddToArmy(bot)}>Add to Army</button>
    </div>
    </>
  );
}

export default BotDetails;