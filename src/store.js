// Code bloc vide en JavaScript
import { createStore } from 'redux';

// state
const initialState = {
  employees: [],
};

// actions creators
export const addEmployee = (employee) => ({
  type: 'addEmployee ',
  employee,
});

// reducer
function reducer(state = initialState, action = null) {
  switch (action.type) {
    case 'addEmployee ':
      return {
        ...state,
        employees: [...state.employees, action.employee],
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);
