import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/HealthRecordForm.css'

const HealthRecordForm = ({ onSave }) => {
  const [formState, setFormState] = useState({
    date: '',
    temperature: '',
    tempUnit: 'Celsius', // For switching between Celsius and Fahrenheit
    bloodPressureSystolic: '',
    bloodPressureDiastolic: '',
    heartRate: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //new record data
    const newRecord = {
      id: Date.now(), 
      date: formState.date,
      temperature: `${formState.temperature} °${formState.tempUnit === 'Celsius' ? 'C' : 'F'}`,
      bloodPressure: `${formState.bloodPressureSystolic}/${formState.bloodPressureDiastolic}`,
      heartRate: formState.heartRate,
    };
    
    onSave(newRecord);

    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Add New Health Record</h2>
      <form onSubmit={handleSubmit}>
        <label>Date</label>
        <input
          type="date"
          value={formState.date}
          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
          required
        />

        <label>Body Temperature</label>
        <input
          type="number"
          value={formState.temperature}
          onChange={(e) => setFormState({ ...formState, temperature: e.target.value })}
          required
        />
        <select
          value={formState.tempUnit}
          onChange={(e) => setFormState({ ...formState, tempUnit: e.target.value })}
        >
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>

        <label>Blood Pressure (Systolic/Diastolic)</label>
        <input
          type="number"
          placeholder="Systolic"
          value={formState.bloodPressureSystolic}
          onChange={(e) => setFormState({ ...formState, bloodPressureSystolic: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Diastolic"
          value={formState.bloodPressureDiastolic}
          onChange={(e) => setFormState({ ...formState, bloodPressureDiastolic: e.target.value })}
          required
        />

        <label>Heart Rate (bpm)</label>
        <input
          type="number"
          value={formState.heartRate}
          onChange={(e) => setFormState({ ...formState, heartRate: e.target.value })}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HealthRecordForm;




