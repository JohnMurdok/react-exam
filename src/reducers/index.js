
/**
 * Default reducers for all basic actions
 */
export default (constants, state = [], action) => {
  let array = [...state];
  switch (action.type) {
      case constants.FETCH_ALL_FINISH:
      return [
          ...action.payload,
          ...state,
      ];
      case constants.CREATE_FINISH:
          array.push(action.payload);
          return array;
      case constants.UPDATE_FINISH:
          array = array.map((item) => item.id === action.payload.id ? action.payload : item);
          return array;
      case constants.DELETE_FINISH:
          array = array.filter((item) => item.id !== action.payload.id);
          return array;
      default:
      return state;
  }
};
