import React, { useEffect, useState } from 'react';
import YourBotArmy from './YourBotArmy';
import BotDetails from './BotDetails';

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [selectBotArmy, setSelectBotArmy] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  const handleDelete = (id) => {
    const botToDelete = bots.find(bot => bot.id === id);
    const confirmed = window.confirm(`Are you sure you want to remove ${botToDelete.name} PERMANENTLY?`);
    if (!confirmed) return;
    fetch(`http://localhost:3000/bots/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => setBots(prevBots => prevBots.filter(bot => bot.id !== id)));
  };

  const handleAddToArmy = (bot) => {
    if (yourBots.find(b => b.id === bot.id)) {
      alert('The bot has already been added to your army');
      return;
    }
    setYourBots(prevBots => [...prevBots, bot]);
  };

  const handleRemoveFromArmy = (id) => {
    setYourBots(prevBots => prevBots.filter(bot => bot.id !== id));
  };

  const handleBotDetails = (bot) => {
    setSelectedBot(bot);
  };

  const handleBack = () => {
    setSelectedBot(null);
  };

  const handleArmyBack = () => {
    setSelectBotArmy(false);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredBots = selectedCategory
    ? bots.filter(bot => bot.bot_class === selectedCategory)
    : bots;

  return (
    <>
      {selectBotArmy ? (
        <YourBotArmy bots={yourBots} handleRemove={handleRemoveFromArmy} handleArmyBack={handleArmyBack} />
      ) : selectedBot ? (
        <BotDetails bot={selectedBot} handleBack={handleBack} setSelectBotArmy={handleArmyBack} handleAddToArmy={handleAddToArmy} />
      ) : (
        <div>
          <h2>Bot Collection</h2>
          <button id="view-army" className='add' onClick={() => setSelectBotArmy(true)}>View Your Bot Army</button>

          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value=''>All</option>
            <option value='Support'>Support</option>
            <option value='Assault'>Assault</option>
            <option value='Medic'>Medic</option>
            <option value='Captain'>Captain</option>
            <option value='Defender'>Defender</option>
            <option value='Witch'>Witch</option>
          </select>
          <section id="showcontent">
            {filteredBots.map(bot => (
              <div key={bot.id} id="content">
                <button id="remove" onClick={() => handleDelete(bot.id)}>✖</button>
                <h4>{bot.name}</h4>
                <img src={bot.avatar_url} alt={`${bot.name}'s avatar`} />
                <h5>It is a {bot.bot_class} bot</h5>
                <h6>
                  <span><strong id='green'>❤</strong> {bot.health} health</span>{' '}
                  <span><strong id='blue'>🛡</strong> {bot.armor} armor</span>{' '}
                  <span><strong id='yellow'>⚔</strong> {bot.damage} damage/sec</span>
                </h6>
                <button className="add" onClick={() => handleAddToArmy(bot)}>Add to Army</button>
                <button id="details" className='add' onClick={() => handleBotDetails(bot)}>See Details</button>
              </div>
            ))}
          </section>
        </div>
      )}
    </>
  );
}

export default BotCollection;

