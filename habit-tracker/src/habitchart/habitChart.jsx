import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './csschart.css';

export default function HabitChart(){
  const habits = useSelector(state => state.habits);
  
  const habitData = habits.map(habit => ({
    name: habit.name,
    progress: habit.progress,
  }));

  console.log(habitData); 

  return (
    <div>
      <div className='habittracker'>
        <ResponsiveContainer width="87%" height={380} style={{backgroundColor : '#363636c6', padding: '20px', border : '1px solid black', borderRadius: '7px'}}>
          <LineChart data={habitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="progress" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

