// components/HabitItem.js
import React from 'react';

function HabitItem({ habit, toggleCompletion }) {
  return (
    <div>
      <h3>{habit.name} - Streak: {habit.streak} days</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {habit.progress.map((completed, idx) => (
          <button
            key={idx}
            onClick={() => toggleCompletion(habit.id, idx)}
            style={{
              backgroundColor: completed ? 'green' : 'lightgrey',
              color: 'white',
              padding: '10px',
              border: 'none',
            }}
          >
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][idx]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HabitItem;
