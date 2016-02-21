import React, { Component } from 'react';
import { render } from 'react-dom';
import KanbanBoardContainer from './KanbanBoardContainer';

let cardList = [
  {
    id: 1,
    title: 'Read the Book',
    description: 'Read the whole book',
    status: 'in-progress',
    color: '#BD8D31',
    tasks: []
  },
  {
    id: 2,
    title: 'Write some code',
    description: 'Code along with samples in the book',
    status: 'todo',
    color: '#3A7E28',
    tasks: [
      {
        id: 1,
        name: 'Kanban Example',
        done: false
      },
      {
        id: 2,
        name: 'Conctact List People',
        done: false
      },
      {
        id: 3,
        name: 'Eventify',
        done: true
      }
    ]
  }
];

render(<KanbanBoardContainer />, document.getElementById('root'));
