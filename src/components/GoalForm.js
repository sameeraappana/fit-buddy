import React, { useState } from 'react';
import './css/GoalForm.css'

const GoalForm = ({ setGoal }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const goal = parseInt(input, 10);
        if (!isNaN(goal) && goal > 0) {
            setGoal(goal);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
            I want to run
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                required 
            />
            miles this year
            </label>
            <br/>
            <br/>
            <button type="submit">Set Goal</button>
        </form>
    );
};

export default GoalForm;