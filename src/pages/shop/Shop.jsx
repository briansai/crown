import React, { Component } from 'react';
import CollectionPreview from '../../components/collection/preview/CollectionPreview';
import { SHOP_DATA } from '../../constants/shop';

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => {
          const { id, title, items } = collection;
          return <CollectionPreview key={id} title={title} items={items} />;
        })}
      </div>
    );
  }
}
