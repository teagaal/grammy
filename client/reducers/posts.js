// We create a reducer for each piece of state and we pass it the action and a copy of the current state

export function posts(state = [], action) {
  console.log(state, action);
  return state;
};