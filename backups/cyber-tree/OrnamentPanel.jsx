import React from 'react'
import './OrnamentPanel.css'

const OrnamentPanel = ({ selectedType, setSelectedType }) => {
  const ornaments = [
    { id: 'star', name: 'Cyber Star', icon: '/assets/star.png', category: 'Classic' },
    { id: 'red_ball', name: 'Core Red', icon: '/assets/red_ball.png', category: 'Classic' },
    { id: 'gold_ball', name: 'Amber Mod', icon: '/assets/gold_ball.png', category: 'Classic' },
    { id: 'doge', name: 'Cyber Doge', icon: '/assets/doge.png', category: 'Meme' },
    { id: 'pepe', name: 'Holo Pepe', icon: '/assets/pepe.png', category: 'Meme' },
    { id: 'diamond_hands', name: 'Diamond Pulse', icon: '/assets/diamond_hands.png', category: 'Meme' },
  ]

  return (
    <aside className="ornament-panel glass-panel">
      <h3>Ornaments</h3>
      <div className="ornament-grid">
        {ornaments.map((ornament) => (
          <div 
            key={ornament.id} 
            className={`ornament-item ${selectedType === ornament.id ? 'selected' : ''}`}
            onClick={() => setSelectedType(ornament.id)}
          >
            <img src={ornament.icon} alt={ornament.name} />
            <span>{ornament.name}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default OrnamentPanel
