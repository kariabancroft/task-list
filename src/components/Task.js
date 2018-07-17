import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Incomplete from '../assets/images/Incomplete.svg';

class Task extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired
  }

  statusIcon = () => {
    return <img src={ Incomplete }/>;
  }

  render() {
    return (
      <section className="task">
        { this.props.status }
        { this.statusIcon() }
        { this.props.data.task }
      </section>
    );
  }
}

export default Task;
