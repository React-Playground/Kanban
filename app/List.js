import React, { Component, PropTypes } from 'react';
import Card from './Card'
import { DropTarget } from 'react-dnd';
import constants from './Constants';

export default class List extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
    cardCallbacks: PropTypes.object

  };
  render() {
    console.log(this.props);
    var cards = this.props.cards.map(card => {
      return <Card
        key={ card.id }
        id={ card.id }
        title={ card.title }
        description={ card.description }
        color={card.color}
        tasks={ card.tasks }
        taskCallbacks={ this.props.taskCallbacks }
      />
      })

      return (
        <div className="list">
          <h1>{ this.props.title } </h1>
          { cards }
        </div>
      );
  }
}
