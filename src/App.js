import React, { Component } from 'react';
import './App.css';
import TaskGroup from './components/TaskGroup';

class App extends Component {
  constructor() {
    super();

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

  render() {
    const groupedTasks = this.groupedTasks();

    const groups = Object.keys(groupedTasks).map((groupName, index) => {
      return <TaskGroup key={ index } name={ groupName } tasks={ groupedTasks[groupName] }/>
    });

    console.log(this.groupedTasks());
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
