import React from 'react';
import VolumenIcon from '../../icons/components/volume';
import './volume.css'

function Volume(props) {
  return (
    <button
      className="Volume"
    >
      <VolumenIcon
        color="white"
        size={25}
        onClick={props.handleClick}
      />
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
          value={props.value}
        />
      </div>
    </button>
  )
}

export default Volume;