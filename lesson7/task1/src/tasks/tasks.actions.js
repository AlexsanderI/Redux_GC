import { tasksListSelector } from './tasks.selectors';
import * as tasksGateway from './TasksGateway';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecived = tasksList => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };
  return action;
};

export const getTaskList = () => {
  const thunkAction = function (dispatch) {
    tasksGateway.fetchTaskList().then(tasksList => dispatch(tasksListRecived(tasksList)));
  };
  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find(tasks => tasks.id === taskId);

    const updatedTask = {
      ...task,
      done: !task.done,
    };

    tasksGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const createTask = text => {
  const thunkAction = function (dispatch) {
    const taskDate = {
      id: Math.random(),
      text,
      done: false,
      create: new Date().toISOString(),
    };

    tasksGateway.createTask(taskDate).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};
