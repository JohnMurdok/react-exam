const findAll = (Model, constants) => {
  return (dispatch) => {
    Model.findAll().then((data) => {
        dispatch({
          type: constants.FETCH_ALL_FINISH,
          payload: data,
        });
      })
  }
};

const findOne = (Model, constants, data) => {
    return (dispatch) => {
      Model.findOne({id: data.id}).then((data) => {
          dispatch({
            type: constants.FETCH_ONE_FINISH,
            payload: data,
          });
        })
    }
};

const create = (constants, modelData) => {
    return (dispatch) => {
        modelData.save().then((data) => {
          dispatch({
            type: constants.CREATE_FINISH,
            payload: data,
          });

        })
    }
};


const update = (constants, modelData) => {
    return (dispatch) => {
        modelData.save().then((data) => {
          dispatch({
            type: constants.UPDATE_FINISH,
            payload: data,
          });
        })
    }
};

const remove = (constants, modelData) => {
    return (dispatch) => {
        modelData.delete().then(() => {
          dispatch({
            type: constants.DELETE_FINISH,
            payload: modelData,
          });
        })
    }
};


export default {
    findAll,
    findOne,
    save: (constants, data) => data.id ? update(constants, data) : create(constants, data),
    remove,
};