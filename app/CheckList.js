import React, { Component, PropTypes } from 'react';

export default class CheckList extends Component {
  static propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
  };
  checkInputKeyPress(evt, two, three, four) {
    if(evt.key === 'Enter') {
      this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
      evt.target.value = '';
    }
  }

  render() {
    let tasks = this.props.tasks.map((task, taskIndex) => {
      console.log(task);
      return (
        <li className="checklist_task" key={task.id}>
          <input
            type="checkbox"
            defaultChecked={ task.done }
            onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)}
          />
        { task.name }
        <a
          href='#'
          className="checklist_task--remove"
          onClick={this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)}
        />
      </li>
      );
  });

  return (
    <div >
      <ul className="checklist"> { tasks } </ul>
      <input
        type="text"
        className="checklist--add-task"
        placeholder="Type then hit enter to add task"
        onKeyPress={this.checkInputKeyPress.bind(this)}
      />
    </div>
  );
}
}
