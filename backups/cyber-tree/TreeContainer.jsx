import React from 'react'
import './TreeContainer.css'

const TreeContainer = ({ placedOrnaments, onTreeClick, onRemove }) => {
  return (
    <div className="tree-wrapper" onClick={onTreeClick}>
      <img src="/assets/tree.png" alt="Christmas Tree" className="tree-image" />
      
      {placedOrnaments.map((ornament) => (
        <div 
          key={ornament.id} 
          className={`placed-ornament ${ornament.type}`}
          style={{ 
            left: `${ornament.x}%`, 
            top: `${ornament.y}%` 
          }}
          onClick={(e) => {
            e.stopPropagation()
            onRemove(ornament.id)
          }}
        >
          <img 
            src={`/assets/${ornament.type}.png`} 
            alt={ornament.type} 
          />
        </div>
      ))}
    </div>
  )
}

export default TreeContainer
