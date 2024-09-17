import React,{useState} from 'react';
import HealthRecordList from './HealthRecordList';
import { useNavigate } from 'react-router-dom';
import './styles/Dashboard.css'

const Dashboard = ({ records, onDelete }) => {
  const [searchDate, setSearchDate] = useState('');
  const [filterTemp, setFilterTemp] = useState('');
  const [filterBP, setFilterBP] = useState('');
  const [filterHR, setFilterHR] = useState('');
  const [filteredRecords, setFilteredRecords] = useState(records);
  const navigate = useNavigate();

  const handleSearch = () => {
    const newFilteredRecords = records.filter(record => {
      const matchesDate = searchDate ? record.date === searchDate : true;
      const matchesTemp = filterTemp ? record.temperature.toString().includes(filterTemp) : true;
      const matchesBP = filterBP ? record.bloodPressure.toString().includes(filterBP) : true;
      const matchesHR = filterHR ? record.heartRate.toString().includes(filterHR) : true;
      return matchesDate && matchesTemp && matchesBP && matchesHR;
    });
    setFilteredRecords(newFilteredRecords);
  };  

  const handleDelete = (id) => {
    // Call the onDelete function to update the state
    onDelete(id);
  };
  
  return (
    <div className="dashboard">
      <h1>Health Metrics Dashboard</h1>
      <div className="filter-container">
        <label>
          Search by Date:
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            placeholder="Search by date"
          />
        </label>
        <label>
          Filter by Temperature:
          <input
            type="text"
            value={filterTemp}
            onChange={(e) => setFilterTemp(e.target.value)}
            placeholder="Filter by temperature"
          />
        </label>
        <label>
          Filter by Blood Pressure:
          <input
            type="text"
            value={filterBP}
            onChange={(e) => setFilterBP(e.target.value)}
            placeholder="Filter by blood pressure"
          />
        </label>
        <label>
          Filter by Heart Rate:
          <input
            type="text"
            value={filterHR}
            onChange={(e) => setFilterHR(e.target.value)}
            placeholder="Filter by heart rate"
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      <button onClick={() => navigate('/add')}>Add New Record</button>  {/* Button to add new record */}
      <button onClick={() => navigate('/history')}>View History</button>
      <HealthRecordList records={filteredRecords} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;


