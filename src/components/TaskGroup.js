import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Group from '../assets/images/Group.svg';

class TaskGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired
  }

  render() {
    const completedCount = this.props.tasks.reduce((total, task) => {
      return (task.completedAt !== null) ? total + 1: total;
    }, 0);

    return (
      <section className="task-group">
        <img src={ Group }/>
        { this.props.name }
        <p className="background">
          { completedCount } OF { this.props.tasks.length }
        </p>
      </section>
    );
  }
}

export default TaskGroup;
