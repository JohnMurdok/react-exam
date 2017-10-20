import Model from '../../models/jedi';
import constants from '../../constants/jedi';
import actions from '../index';

// Override basic actions with constants and model
export const findAll = actions.findAll.bind(this, Model, constants);
export const findOne = actions.findOne.bind(this, Model, constants);
export const save = (data) => actions.save(constants, data);
export const remove = (data) => actions.remove(constants, data);

export default {
    findAll,
    findOne,
    save,
    remove,
};