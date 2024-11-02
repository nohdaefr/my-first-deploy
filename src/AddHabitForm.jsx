// components/AddHabitForm.js
import React, { useState } from 'react';

function AddHabitForm({ addHabit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addHabit(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New Habit"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default AddHabitForm;
