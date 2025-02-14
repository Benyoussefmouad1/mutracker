import * as type from './actions';


export const addHabit = (habit) => ({
  type: type.ADD_HABIT,
  payload: habit,
});

export const removeHabit = (id) => ({
  type: type.REMOVE_HABIT,
  payload: id,
});

export const updateProgress = (id, progress) => ({
  type: type.UPDATE_PROGRESS,
  payload: { id, progress },
});

export const updateHabit = (updatedHabit) => ({
  type: type.UPDATE_HABIT,
  payload: updatedHabit,
});

