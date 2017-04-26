import React, {Component} from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
        {this.props.title} - {this.props.description}
      </li>
    );
  }
}
