import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Group from '../assets/images/Group.svg';
import TaskList from './TaskList';

class TaskGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired
  }

  constructor() {
    super();

    this.state = {
      showTaskList: false
    };
  }

  onGroupClick = () => {
    // Toggle the value to show or hide the list
    this.setState({ showTaskList: !this.state.showTaskList });
  }

  render() {
    const completedCount = this.props.tasks.reduce((total, task) => {
      return (task.completedAt !== null) ? total + 1: total;
    }, 0);

    let taskList = "";
    if (this.state.showTaskList) {
      taskList = <TaskList tasks={ this.props.tasks } />;
    }

    return (
      <section className="task-group">
        <section className="task-group-overview" onClick={ this.onGroupClick }>
          <img src={ Group }/>
          { this.props.name }
          <p className="background">
            { completedCount } OF { this.props.tasks.length }
          </p>
        </section>
        { taskList }
      </section>
    );
  }
}

export default TaskGroup;
