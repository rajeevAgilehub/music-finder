import React from 'react';

export default function index(props) {
    let { item } = {...props};
    return (
        <div className="song-card">
          <div className="song-info">
            <div className="song-img">
              <img src={item.artworkUrl100} alt={item.trackName.substring(0,7).concat('...')}/>
            </div>
            <div className="song-detail">
              <div className="song-title">{item.trackName}</div>
              <div className="more-link"><a href="#/">More</a></div>
            </div>
          </div>
        </div>
    )
}
