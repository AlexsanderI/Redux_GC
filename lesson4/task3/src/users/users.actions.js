export const NEXT_PAGE = 'USERLIST/NEXT_PAGE';
export const PREV_PAGE = 'USERLIST/PREV_PAGE';

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = item => ({
  type: PREV_PAGE,
  payload: item,
});
