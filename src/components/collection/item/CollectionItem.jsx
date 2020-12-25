import React from 'react';

import './CollectionItem.scss';

const CollectionItem = ({ name, price, imageUrl }) => {
  console.log(name, price);
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="collection-footer">
          <span className="name">{name}</span>
        </div>
        <div className="collection-footer">
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
