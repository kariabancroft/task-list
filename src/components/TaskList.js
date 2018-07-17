import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired
  }

  render() {
    const tasks = this.props.tasks.map((task,index) => {
      return <Task data={ task } key={ index } />;
    });

    return (
      <section className="task-group-list">
        { tasks }
      </section>
    );
  }
}

export default TaskList;
