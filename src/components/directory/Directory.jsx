import React from 'react';

import MenuItem from '../menu-item/Menuitem';

import './styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.imgur.com/2nikXO1.jpg',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.imgur.com/9Ad3IzN.jpg',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.imgur.com/KsE97dL.jpg',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.imgur.com/LMFx43b.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.imgur.com/xXWmAir.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;