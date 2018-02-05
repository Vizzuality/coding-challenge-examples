export const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos';

export default {
  getPhotos: (limit = 9, page = 1, sort = 'title', order = 'asc') =>
    fetch(`${ENDPOINT}?_limit=${limit}&_page=${page}&_sort=${sort}&_order=${order}`).then(
      response => response.json()
    )
};
