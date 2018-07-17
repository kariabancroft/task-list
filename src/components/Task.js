import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired
  }

  constructor() {
    super();

    this.images = {
      completed: require('../assets/images/Completed.svg'),
      incomplete: require('../assets/images/Incomplete.svg'),
      locked: require('../assets/images/Locked.svg')
    };
  }

  render() {
    return (
      <section className="task">
        <img src={ this.images[this.props.status] }/>
        { this.props.data.task }
      </section>
    );
  }
}

export default Task;
