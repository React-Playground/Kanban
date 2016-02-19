import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';
import 'babel-polyfill';
import update from 'react-addons-update';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-type': 'application/json',
  Authorization: 'NEW_APP'
};

export default class KanbanBoardContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch(API_URL+'/cards', {headers: API_HEADERS})
    .then(response => response.json())
    .then(responseData => {
      this.setState({cards: responseData});
    })
    .catch(error => console.log(error));
  }

  addTask(cardId, taskName) {

  }

  deleteTask(cardId, taskId, taskIndex) {
    let cardIndex = this.state.cards.findIndex(card => card.id == cardId);

    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {$splice: [[taskIndex, 1]]}
      }
    });

    this.setState({cards:nextState});

    // fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
    //   method: 'delete',
    //   headers: API_HEADERS
    // });

    console.log(cardId, taskId, taskIndex);
  }

  toggleTask(cardId, taskId, taskIndex) {

  }


  render() {
    return (
      <KanbanBoard
        cards={this.state.cards}
        taskCallbacks={{
        toggle: this.toggleTask.bind(this),
        delete: this.deleteTask.bind(this),
        add: this.addTask.bind(this)
        }}
        />
    );
  }
}
