import React, { Component } from 'react';
import MenuItem from '../menu/MenuItem';
import { SECTIONS } from '../../constants/sections';
import './Directory.scss';

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
