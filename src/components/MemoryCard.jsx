import React, { Component } from 'react'

import './MemoryCard.css';
import logo from '../logo-wrench-white.png';

class Card extends Component {
  render() {
    return (
      <div className="MemoryCard">
        <img src={logo} alt="" />
      </div>
    )
  }
}

export default Card;