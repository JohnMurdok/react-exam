import API from '../../utils/api';

/**
 * Build object model on fetch
 * @param {*} ModelClass 
 * @param {*} response 
 */
const onGetReceived = (ModelClass, response) => {
    const data = response.data ? response.data : [];
    return data.map((item) => new ModelClass(item));
};

/**
 * Build object model on put/post
 * @param {*} ModelClass 
 * @param {*} response 
 */
const onPostReceived = (ModelClass, response) => {
    const data = response.data ? response.data : {};
    return new ModelClass(data);
};

/**
 * Core model class
 */
class Model {
    constructor(data = {}) {
        Object.keys(data).forEach((key) => {
            this[key] = data[key];
        });
    }

    /**
     * STATIC METHODS
     */

    static findAll() {
        const ModelClass = this;
        return API.get(this.prototype.route).then(onGetReceived.bind(this, ModelClass));
    }

    static findOne(params) {
        const ModelClass = this;
        return API.get(this.prototype.route, {params}).then(onGetReceived.bind(this, ModelClass));
    }

    static create(data) {
        const ModelClass = this;
        return API.create(this.prototype.route, data).then(onPostReceived.bind(this, ModelClass));
    }

    static update(data) {
        const ModelClass = this;
        return API.update(`${this.prototype.route}/${data.id}`, data).then(onPostReceived.bind(this, ModelClass));
    }

    static delete(data) {
        return API.delete(`${this.prototype.route}/${data.id}`);
    }

    /**
     * OBJECT METHODS
     */
    save() {
        if(!this.id) {
            return this.constructor.create(this);
        }
        return this.constructor.update(this);
    }

    delete() {
        return this.constructor.delete(this);
    }
    
}

export default Model;