const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const JSONPlaceholderAPI = {
  getPhotos(callback, { limit = 9, page = 1, sort = 'title', order = true } = {}) {
    const orderS = order ? 'asc' : 'desc';
    return this.get('photos', callback, {
      params: {
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: orderS
      }
    });
  },

  get(url, callback, options = {}) {
    let fullUrl = new URL(url, BASE_URL);
    const params = new URLSearchParams();
    if (options.params) {
      Object.entries(options.params).forEach(([key, value]) => params.append(key, value));
    }
    fullUrl += `?${params.toString()}`;

    fetch(fullUrl, options)
      .then(response => response.json())
      .then(callback)
      .catch(() => callback(null));
  }
};

export default JSONPlaceholderAPI;
