import React from 'react';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-review">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview ">
      {items.map((item) => {
        const { id, name, imageUrl } = item;
        return <div key={item.id}>{name}</div>;
      })}
    </div>
  </div>
);

export default CollectionPreview;
