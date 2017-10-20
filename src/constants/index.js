const FETCH_ALL_FINISH = 'FETCH_ALL_FINISH';
const FETCH_ONE_FINISH = 'FETCH_ONE_FINISH';
const CREATE_FINISH = 'CREATE_FINISH';
const UPDATE_FINISH = 'UPDATE_FINISH';
const DELETE_FINISH = 'DELETE_FINISH';

const defaultConstants = {
    FETCH_ALL_FINISH,
    FETCH_ONE_FINISH,
    CREATE_FINISH,
    UPDATE_FINISH,
    DELETE_FINISH
};

// Build all constants with model
export const makeModelConstants = (prefix = '') => {
    const constants = {};
    Object.keys(defaultConstants).forEach((key) => {
        constants[key] = `${prefix.toUpperCase()}_${defaultConstants[key]}`;
    });
    return constants;
};