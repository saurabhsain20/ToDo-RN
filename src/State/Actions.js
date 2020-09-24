import {ActionTypes} from './ActionTypes';

export const createTodoRequest = (data) => {
  return {type: ActionTypes.CREATE_TODO_REQUEST, payload: data};
};

export const getTodoRequest = (data) => {
  return {type: ActionTypes.GET_TODO_REQUEST};
};

export const deleteTodoRequest = (data) => {
  return {type: ActionTypes.DELETE_TODO_REQUEST, payload: data};
};

export const completeTodoRequest = (data) => {
  return {type: ActionTypes.COMPLETE_TODO_REQUEST, payload: data};
};
