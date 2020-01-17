import { API } from '../utils/constants';
import axios from 'axios';

const RECIEVE_DATA = 'dataManager/RECIEVE_DATA';

const initialState = { toDos: [], tasks: [] };

const mapRoute = {
  toDos: 'to-dos',
  tasks: 'tasks',
};

export const getData = (name) => (dispatch) =>
  axios(API + mapRoute[name])
    .then((response) => dispatch(recieveDatas(name, response.data)))
    .catch((error) => console.log(error));

export const createData = (name, data) => (dispatch) =>
  axios({ url: API + mapRoute[name], method: 'POST', data })
    .then((response) => dispatch(getData(name)))
    .catch((error) => console.log(error));

export const recieveDatas = (dataName, data) => ({
  type: RECIEVE_DATA,
  payload: { [dataName]: data },
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECIEVE_DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
};
