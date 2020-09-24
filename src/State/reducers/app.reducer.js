import {ActionTypes} from '../ActionTypes';

const initialState = {
  todoState: [],
  completedState: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_TODO_REQUEST:
      return {
        ...state,
        todoState: [...state.todoState, action.payload],
      };
    case ActionTypes.CREATE_TODO_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.DELETE_TODO_REQUEST:
      return {
        ...state,
        todoState: [
          ...state.todoState.filter(
            (elem) => elem.title !== action.payload.title,
          ),
        ],
      };
    case ActionTypes.COMPLETE_TODO_REQUEST:
      return {
        ...state,
        todoState: [
          ...state.todoState.filter(
            (elem) => elem.title !== action.payload.title,
          ),
        ],
        completedState: [...state.completedState, action.payload],
      };
    case ActionTypes.GET_TODO_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default appReducer;
