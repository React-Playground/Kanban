import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CheckList from './CheckList';

export default class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    };
  }
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
  };

  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails})
  }

  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card_details">
          {this.props.description}
          <CheckList
            cardId={this.props.id}
            tasks={this.props.tasks}
            taskCallbacks={ this.props.taskCallbacks }
          />
        </div>
      )
    }

    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };

    return (
      <div className="card">
        <div style={sideColor} />
        <div
          className={this.state.showDetails ? "card_title card_title--is-open" : "card_title"}
          onClick={this.toggleDetails.bind(this)}
        >
          { this.props.title }
        </div>
        <ReactCSSTransitionGroup
          transitionName="toggle"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
        {cardDetails}
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}
