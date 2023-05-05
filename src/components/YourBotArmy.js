function YourBotArmy( {bots, handleRemove , handleArmyBack} ){
  
    return(
        <>
            <h2>My Bot Army</h2>
            <button className='add' id="back" onClick={handleArmyBack}>◀ Back</button>
            <section id="mybots">
                {bots.map((bot) => (
                <div key={bot.id} id="content" className="content">
                    <h4>{bot.name}</h4>
                    <img src={bot.avatar_url} alt={`${bot.name}'s avatar`} />
                    <h5>It is a {bot.bot_class} bot</h5>
                    <h6>
                    <span><strong id='green'>❤</strong> {bot.health} health</span>{' '}
                    <span><strong id='blue'>🛡</strong> {bot.armor} armor</span>{' '}
                    <span><strong id='yellow'>⚔</strong> {bot.damage} damage/sec</span>
                    </h6>
                    <button className="add" id="rem" onClick={() => handleRemove(bot.id)}>Remove from your Army</button>
                </div>
                ))}
            </section>
        </>
    )
}

export default YourBotArmy