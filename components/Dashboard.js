// import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Graph from './graph1';
import PieChart from './Mychart';
import Sidebar from '../components2/Siebar';
import React, { useState } from 'react';
import { Button, Table } from 'reactstrap';
import '../components/dashboard.css';
import { Modal } from 'reactstrap';






const Dashboard = () => {
  const [overviewData, setOverviewData] = useState([
    { name: 'April 2019 - March 2020', value: '$50k' },
    { name: 'April 2019', value: '$40k' },
    // ... other overview data
  ]);

  const [tasksData, setTasksData] = useState([
    { id: 1, task: 'Searching for a new Tenant', dueDate: 'Tomorrow' },
    // ... other tasks data
  ]);

  const handleNewTask = () => {
    setTasksData([
      ...tasksData,
      { id: tasksData.length + 1, task: 'New Task', dueDate: 'Not set' },
    ]);
  };

  return (
    <div className='container-fluid'>

      <div className='row mr-3 mt-2'>

        <div className='col-md-12'>
        </div>
        <div className='col-md-12 text-center'>
        </div>
      </div>
      <div>
        <h1>Real Estate Property Management Dashboard</h1>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {overviewData.map(data => (
              <tr key={data.name}>
                <td>{data.name}</td>
                <td>{data.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h2>Recent Tasks</h2>
        <Table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tasksData.map(data => (
              <tr key={data.id}>
                <td>{data.task}</td>
                <td>{data.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={handleNewTask}>Add New Task</Button>

      </div>
    </div>
  );

};
export default Dashboard;

