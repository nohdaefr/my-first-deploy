// components/HabitList.js
import React from 'react';
import HabitItem from './HabitItem';

function HabitList({ habits, toggleCompletion }) {
  return (
    <div>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  );
}

export default HabitList;
