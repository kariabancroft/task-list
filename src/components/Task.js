import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired,
    completedCallback: PropTypes.func.isRequired
  }

  constructor() {
    super();

    this.images = {
      completed: require('../assets/images/Completed.svg'),
      incomplete: require('../assets/images/Incomplete.svg'),
      locked: require('../assets/images/Locked.svg')
    };
  }

  clickTask = (event, id) => {
    if (this.props.status !== "locked") {
      this.props.completedCallback(id);
    }
  }

  render() {
    return (
      <section className={ "task task-" + this.props.status }
        onClick={(e) => { this.clickTask(e, this.props.data.id) }}>
        <img src={ this.images[this.props.status] } alt={ this.props.status }/>
        { this.props.data.task }
      </section>
    );
  }
}

export default Task;
