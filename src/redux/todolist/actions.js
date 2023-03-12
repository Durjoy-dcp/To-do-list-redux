import {
  ADDED,
  TOGGLED,
  COLORSELECTED,
  DELETED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
} from "./actionTypes";
export const added = (todoText) => {
  return {
    type: ADDED,
    playload: todoText,
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    playload: todoId,
  };
};
export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    playload: {
      todoId: todoId,
      color: color,
    },
  };
};
export const deleted = (todoId) => {
  return {
    type: DELETED,
    playload: todoId,
  };
};
export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
