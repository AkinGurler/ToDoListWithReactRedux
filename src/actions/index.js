export const ADD = "ADD";
export const DEL = "DEL";
export const TOGGLE = "TOGGLE";

export const addToDo = (text) => {
  return {
    type: ADD,
    payload: text
  };
};

export const toggleToDo = (id) => {
  return {
    type: TOGGLE,
    payload: id
  };
};

export const delToDo = () => {
  return {
    type: DEL
  };
};
