import React, { Component } from 'react';
import './App.css';
import TaskGroup from './components/TaskGroup';

class App extends Component {
  constructor() {
    super();

    this.COMPLETE = "completed";
    this.INCOMPLETE = "incomplete";
    this.LOCKED = "locked";

    this.state = {
      taskData: [
        {
          id: 1,
          group: "Purchases",
          task: "Go to the bank",
          dependencyIds: [],
          completedAt: null,
        },
        {
          id: 2,
          group: "Purchases",
          task: "Buy hammer",
          dependencyIds: [1],
          completedAt: null,
        },
        {
          id: 3,
          group: "Purchases",
          task: "Buy wood",
          dependencyIds: [1],
          completedAt: null,
        },
        {
          id: 4,
          group: "Purchases",
          task: "Buy nails",
          dependencyIds: [1],
          completedAt: null,
        },
        {
          id: 5,
          group: "Purchases",
          task: "Buy paint",
          dependencyIds: [1],
          completedAt: null,
        },
        {
          id: 6,
          group: "Build Airplane",
          task: "Hammer nails into wood",
          dependencyIds: [2, 3, 4],
          completedAt: null,
        },
        {
          id: 7,
          group: "Build Airplane",
          task: "Paint wings",
          dependencyIds: [5, 6],
          completedAt: null,
        },
        {
          id: 8,
          group: "Build Airplane",
          task: "Have a snack",
          dependencyIds: [11],
          completedAt: null,
        }
      ]
    }
  }

  groupedTasks = () => {
    const groups = this.state.taskData.reduce((result, task) => {
      if (result[task.group]) {
        result[task.group].push(task);
      } else {
        result[task.group] = [task];
      }
      return result;
    }, {});

    return groups;
  }

  getStatus = (taskId) => {
    const task = this.state.taskData.find((task) => { return task.id === taskId });
    if (!task) {
      console.warn(`Task ID ${taskId} not loaded.`);
    } else {
      for (let id of task.dependencyIds) {
        if (this.getStatus(id) === this.INCOMPLETE) {
          return this.LOCKED;
        }
      }
      // All dependencies are complete or non-existent
      return (task.completedAt !== null) ? this.COMPLETE : this.INCOMPLETE;
    }
  }

  taskCompleted = (taskId) => {
    let updatedData = this.state.taskData;
    let task = updatedData.find((task) => { return task.id === taskId });

    // Toggle completion
    task.completedAt = (task.completedAt != null) ? null : new Date();

    this.setState({ taskData: updatedData });
  }

  render() {
    const groupedTasks = this.groupedTasks();

    const groups = Object.keys(groupedTasks).map((groupName, index) => {
      return <TaskGroup key={ index } name={ groupName } tasks={ groupedTasks[groupName] }
        statusCallback={ this.getStatus }
        completedCallback={ this.taskCompleted }/>
    });

    return (
      <div className="app">
        <header>
          Things To Do
        </header>
        { groups }
      </div>
    );
  }
}

export default App;
