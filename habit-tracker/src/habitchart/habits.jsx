import { useDispatch, useSelector } from "react-redux";
import { removeHabit, updateProgress } from "./redux/actionFunctions";
import { useNavigate } from "react-router-dom";
export default function Habits(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const habits = useSelector((state) => state.habits);

    const handleRemoveHabit = (id) => {
        dispatch(removeHabit(id));
      };
    
      const handleUpdateProgress = (id, newProgress) => {
        dispatch(updateProgress(id, newProgress));
      };
      
      const handleEditHabit = (habit) => {
        navigate('/habitform', { state: { habit } });
      };

    return(
        <div className="container">
          <div className="habitsFirstDiv">
            <p>Your Habits Are On track.</p>
            <p>increase progress or remove the whole habit.</p>
          </div>
          <div data-testid='habit' className="habitsContainer">
                  {habits.map((habit) => (
                      <div key={habit.id} className="habit">
                        <h3>{habit.name}</h3>
                        <p>Goal: {habit.goal}</p>
                        <p>Progress: {habit.progress}%</p>
                        <p>Description : {habit.description}</p>

                        <button onClick={() => handleUpdateProgress(habit.id, habit.progress)} className="increase">
                          Increase Progress
                        </button>

                        {habit.progress >= habit.goal ?
                          <div className='completedorNot'>
                            <img src="done.png"/>
                            <p style={{ color: '#32CD32' }}>completed</p>
                          </div> :
                          <div className='completedorNot'>
                            <img src="notcomplete.png"/>
                            <p style={{ color: 'black' }}>on track</p>
                          </div>}
          
                        <button onClick={() => handleRemoveHabit(habit.id)} className="removehabit">Remove Habit</button>
                        <button onClick={() => handleEditHabit(habit)} className="updatehabit">Update habit</button>
                      </div>
                  ))}
          </div>
        </div>
    )
}