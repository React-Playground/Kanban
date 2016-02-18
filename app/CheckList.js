import React, { Component, PropTypes } from 'react';

export default class CheckList extends Component {
  static propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    let tasks = this.props.tasks.map(task => {
      return (
        <li className="checklist_task" key={task.id}>
        <input type="checkbox" defaultChecked={ task.done } />
        { task.name }
        <a href='#' className="checklist_task--remove" />
      </li>
      );
  });

  return (
    <div >
      <ul className="checklist"> { tasks } </ul>
      <input
        type="text"
        className="checklist--add-task"
        placeholder="Type then hit enter to add task" />

    </div>
  );
}
}
