const URL = 'https://hn.algolia.com/api/v1';

export const getData = (query, hitsPerPage, page) =>
  fetch(
    `${URL}/search?query=${query}&hitsPerPage=${hitsPerPage}&page=${page}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw new Error('Cant load the items');
  });
