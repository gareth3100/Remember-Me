import {LOGOUT_USER} from '../../../constants/actionTypes';

export default () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};