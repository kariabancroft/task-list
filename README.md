# Task List

## Requirements
Create a grouped task list with task dependencies

1. Build a task list UI in React using included design and SVG assets
2. The top level should show a list of task groups w/ # of tasks inside
3. Clicking a group should display the list of all tasks for that group
4. Tasks remain locked until all dependent tasks are complete
5. Clicking a task should mark it as complete or incomplete, unless the task is locked
6. Dependencies that don't point to a loaded task should be ignored

## Installation
No extra or exciting packages necessary to run this application.

Upon cloning this repo, simply run `npm install`.

## Backlog
Listed below are some items that are some features that have not yet been implemented in this project.

- When a parent task is marked incomplete, traverse through the child tasks to mark them all incomplete (right now they will remain complete).
- Additional CSS
    - Left-align Group name with group completed count
    - Align task name after status icons
- Add "Show all groups" functionality to App component to expand each task group
