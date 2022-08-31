const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

// export const fetchTaskList = () =>
//   fetch(baseUrl).then(res => {
//     if (!res.ok) {
//       throw new Error('Failed to fetch tasks list');
//     }
//     return res.json();
//   });

export const fetchTaskList = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
