import React from 'react'

const ShareCard = ({ rating, ornamentsCount }) => {
  return (
    <div className="share-card glass-panel">
      <h3>My Degen Tree 2025</h3>
      <div className="rating-badge">
        <span className="label">Rating:</span>
        <span className="value">{rating}</span>
      </div>
      <p>{ornamentsCount} decorations placed.</p>
      <div className="branding">
        degentree.io
      </div>
    </div>
  )
}

export default ShareCard
