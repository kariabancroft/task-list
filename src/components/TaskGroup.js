import React, { Component } from 'react';

class TaskGroup extends Component {
  render() {
    return (
      <section className="task-group">
        { this.props.name }
      </section>
    );
  }
}

export default TaskGroup;
