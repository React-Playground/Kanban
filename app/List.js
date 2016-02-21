import React, { Component, PropTypes } from 'react';
import Card from './Card'
import { DropTarget } from 'react-dnd';
import constants from './Constants';

const listTargetSpec = {
  hover(props, monitor) {
    console.log(props);
    const draggedId = monitor.getItem().id;
    console.log(draggedId);
    props.cardCallbacks.updateStatus(draggedId, props.id)
  }
};

let collect = (connect, monitror) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class List extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
    cardCallbacks: PropTypes.object

  };
  render() {
    const { connectDropTarget } = this.props;
    var cards = this.props.cards.map(card => {
      return <Card
        key={ card.id }
        id={ card.id }
        title={ card.title }
        description={ card.description }
        color={card.color}
        tasks={ card.tasks }
        taskCallbacks={ this.props.taskCallbacks }
        cardCallbacks={ this.props.cardCallbacks }
        {...card}
      />
      })

      return connectDropTarget(
        <div className="list">
          <h1>{ this.props.title } </h1>
          { cards }
        </div>
      );
  }
}

export default DropTarget(constants.CARD, listTargetSpec, collect)(List);
