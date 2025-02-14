import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { addHabit, updateHabit} from './redux/actionFunctions';
import { useLocation, useNavigate } from 'react-router-dom';
import './csschart.css';

const Habitform = () => {

  const [habitName, setHabitName] = useState('');
  const [habitGoal, setHabitGoal] = useState('');
  const [habitDescription, sethabitDesc] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.habit) {
      const { habit } = location.state;
      setHabitName(habit.name);
      setHabitGoal(habit.goal);
      sethabitDesc(habit.description);
    }
  }, [location]);

  
  const handleAddHabit = (e) => {
    e.preventDefault();

    if (location.state && location.state.habit) {
      const updatedHabit = {
        id: location.state.habit.id,
        name: habitName,
        goal: habitGoal,
        progress: location.state.habit.progress,
        description: habitDescription,
      };
      dispatch(updateHabit(updatedHabit));
    } else {
      const id = Date.now();
      dispatch(addHabit({ id, name: habitName, goal: habitGoal, progress: 0, description: habitDescription }));
    }
    setHabitName('');
    setHabitGoal('');
    sethabitDesc('');
    navigate('/habits', { replace: true });
  };

  const checkHabits = (e) => {
    e.preventDefault();
    navigate('/habits');
  };


  return (
    <div>
    
      <form onSubmit={(e) => handleAddHabit(e)} >

      <h2>Enter a habit :</h2>

        <input type="text" value={habitName} onChange={(e) => setHabitName(e.target.value)} placeholder="Habit Name" required/>

        <input type="number" value={habitGoal} onChange={(e) => setHabitGoal(e.target.value)} placeholder="Goal" required/>

        <input type="text" value={habitDescription} onChange={(e) => sethabitDesc(e.target.value)} placeholder="Habit description" required/>

        <input data-testid={'Add'} type="submit" value={location.state ? 'change habit' : 'Add Habit'} className="submit" />
      </form>
      
      <button  onClick={(e) => checkHabits(e)} className='checkhabits'>Check Habits</button>
    </div>
  );
};

export default Habitform;
