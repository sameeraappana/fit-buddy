import React from 'react';
import './css/GoalDisplay.css'

const GoalDisplay = ({ goal, goals }) => {
  return (
    <div>
      <h2>Yearly Goal: {goal} miles</h2>
      <p>Monthly Goal: {goals.monthlyGoal.toFixed(2)} miles</p>
      <p>Weekly Goal: {goals.weeklyGoal.toFixed(2)} miles</p>
    </div>
  );
};

export default GoalDisplay;