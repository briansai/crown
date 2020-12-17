import React, { Component } from 'react';
import MenuItem from '../menu/MenuItem';
import { sections } from '../../constants/sections';
import './Directory.scss';

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, size, id }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
