import React, { Component } from 'react';
import './item-list.css';

class ItemList extends Component {
  render() {
    return (
      <ul className='item-list list-group'>
        <li className='list-group-item'>
          Luke Ska
        </li>
        <li className='list-group-item'>
          Duke Ska
        </li>
        <li className='list-group-item'>
          Cocke Ska
        </li>
      </ul>
    )
  }
}

export default ItemList;