const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const JSONPlaceholderAPI = {
  getPhotos({ limit, page, sort, order } = {}) {
    const orderS = order === 'descending' ? 'desc' : 'asc';
    return this.get('photos', {
      params: {
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: orderS
      }
    });
  },

  get(url, options = {}) {
    let fullUrl = new URL(url, BASE_URL);
    const params = new URLSearchParams();
    if (options.params) {
      Object.entries(options.params).forEach(([key, value]) => params.append(key, value));
    }
    fullUrl += `?${params.toString()}`;

    return fetch(fullUrl, options).then(response => response.json());
  }
};

export default JSONPlaceholderAPI;
