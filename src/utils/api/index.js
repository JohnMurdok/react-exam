import axios from 'axios';

// CONSTANTS
const apiUrl = 'http://localhost:3001';

class API {
    call(method, url, params, options) {
        return axios[method](`${apiUrl}${url}`, params).catch(this.onError.bind(this));
    }

    get(route, params = {}, options = {}) {
        return this.call('get', route, params, options);
    }

    create(route, params, options) {
        return this.call('post', route, params, options);
    }

    delete(route, params, options) {
        return this.call('delete', route, params, options);
    }

    update(route, params, options) {
        return this.call('put', route, params, options);
    }

    onError(err) {
        //use an error logger or else
        return Promise.reject(err);
    }
}

API.INSTANCE = new API();
export default API.INSTANCE;
