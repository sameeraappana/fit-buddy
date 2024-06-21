import React, { useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalDisplay from './components/GoalDisplay';
import RunMap from './components/RunMap';
import ProgressForm from './components/ProgressForm';
import './components/css/App.css';

const App = () => {
  const [goal, setGoal] = useState(0);
  const [distanceCovered, setDistanceCovered] = useState(0);
  const calculateGoals = (totalGoal) => {
    const monthlyGoal = totalGoal / 12;
    const weeklyGoal = totalGoal / 52;
    return { monthlyGoal, weeklyGoal };
  };

  const goals = calculateGoals(goal);

  const handleProgressUpdate = (distance) => {
    setDistanceCovered(distanceCovered + distance);
  };

  return (
    <div className="App">
      <GoalForm setGoal={setGoal} />
      {goal > 0 && (
        <>
          <GoalDisplay goal={goal} goals={goals} />
          <ProgressForm onProgressUpdate={handleProgressUpdate} />
          <RunMap distanceCovered={distanceCovered} yearlyGoal={goal} />
        </>
      )}
    </div>
  );
};

export default App;
