import { API } from '../constants';
import axios from 'axios';

const RECIEVE_TO_DO = 'to-do/RECIEVE_TO_DO';

const initialState = { toDos: [] };

export const getToDos = () => (dispatch) =>
  axios(API + 'to-dos')
    .then((response) => dispatch(recieveToDos(response.data)))
    .catch((error) => console.log(error));

export const createToDo = (data) => (dispatch) =>
  axios({ url: API + 'to-dos', method: 'POST', data })
    .then((response) => dispatch(getToDos()))
    .catch((error) => console.log(error));

export const recieveToDos = (toDos) => ({
  type: RECIEVE_TO_DO,
  payload: { toDos },
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECIEVE_TO_DO:
      return { ...state, ...payload };

    default:
      return state;
  }
};
