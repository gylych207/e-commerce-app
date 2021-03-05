import React, { Component } from 'react';
import shopData from '../shopData';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData,
    }
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Shop;