import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    return (
      <section className="task">
        { this.props.data.task }
      </section>
    );
  }
}

export default Task;
