import * as type from './actions';
import produce from 'immer';

const initialState = {
  habits: JSON.parse(localStorage.getItem('habits')) || [
    { id: 1, name: 'Exercise', progress: 3, goal: 7 },
    { id: 2, name: 'Read', progress: 5, goal: 7 },
    { id: 3, name: 'Meditate', progress: 2, goal: 10 },
  ]
};


const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_HABIT:
      const newHabitsAdd = [
        ...state.habits,
        action.payload
      ];
      localStorage.setItem('habits', JSON.stringify(newHabitsAdd));
      return {
        ...state,
        habits: newHabitsAdd
      };

    case type.REMOVE_HABIT:
      const remainingHabits = state.habits.filter((habit) => habit.id !== action.payload);
      localStorage.setItem('habits', JSON.stringify(remainingHabits));
      return {
        ...state,
        habits: remainingHabits
      };

    case type.UPDATE_PROGRESS:
      const updatedHabits = state.habits.map((habit) => habit.id === action.payload.id
          ? {
              ...habit,
              progress: action.payload.progress + 5,
            }
          : habit
      );
      
      localStorage.setItem('habits', JSON.stringify(updatedHabits));
      return {
        ...state,
        habits: updatedHabits,
      };

      case type.UPDATE_HABIT:
        return produce(state, draft => {
          const habitIndex = draft.habits.findIndex(habit => habit.id === action.payload.id);
          
          if (habitIndex !== -1) {
            draft.habits[habitIndex] = {
              ...draft.habits[habitIndex],
              name: action.payload.name,
              goal: action.payload.goal,
              description: action.payload.description,
            };
            localStorage.setItem('habits', JSON.stringify(draft.habits));
          }
        });


    default:
      return state;
  }
};

export default habitReducer;
