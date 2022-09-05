const baseUrl = 'https://62840a40a48bd3c40b6a3c4f.mockapi.io/api/v1/tasks';

export const createTask = taskDate =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskDate),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create task');
    }
  });

export const fetchTaskList = () =>
  fetch(baseUrl).then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch tasks list');
    }
    return res.json();
  });

export const updateTask = (taskId, taskTada) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskTada),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create task');
    }
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to delete task');
    }
  });
