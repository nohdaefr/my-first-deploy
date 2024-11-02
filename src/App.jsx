// App.js
import React, { useState } from 'react';
import HabitList from './HabitList';
import AddHabitForm from './AddHabitForm';
import './header1.css';

function App() {
  const [habits, setHabits] = useState([]);
  // Checking if there are saved tasks:
  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      progress: Array(7).fill(false), // Track a week's progress
      streak: 0,
    };
    setHabits([...habits, newHabit]);
  };
   // Function to calculate the streak based on progress
   const calculateStreak = (progress) => {
    let streak = 0;
    for (let i = progress.length - 1; i >= 0; i--) {
      if (progress[i]) streak++;
      else break;
    }
    return streak;
  };
  
    // Toggle daily completion for each habit
    const toggleCompletion = (habitId, dayIndex) => {
      setHabits(habits.map(habit => 
          habit.id === habitId 
              ? { 
                  ...habit, 
                  progress: habit.progress.map((completed, idx) => 
                      idx === dayIndex ? !completed : completed
                  ),
                  streak: calculateStreak(
                      habit.progress.map((completed, idx) => 
                          idx === dayIndex ? !completed : completed
                      )
                  ),
              } 
              : habit
      ));
  };
  

    return (
      <div className="header1">
        <h1>Habit Tracker</h1>
        <AddHabitForm addHabit={addHabit} />
        <HabitList habits={habits} toggleCompletion={toggleCompletion} />
      </div>
    );
  }
  
  export default App;
