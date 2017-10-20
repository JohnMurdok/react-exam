/**
 * Created by thomashourlier on 2/26/17.
 */

import { combineReducers } from 'redux';
import jedi from './reducers/jedi';
import sith from './reducers/sith';

export default combineReducers({
  jedi,
  sith,
});
