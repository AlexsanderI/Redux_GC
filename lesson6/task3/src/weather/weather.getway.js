const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

// eslint-disable-next-line import/prefer-default-export
export const getUserData = () =>
  fetch(`${baseUrl}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
