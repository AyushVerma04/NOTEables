import React, { useState } from 'react';
import './Reach.css';

const Reach = () => {
  // Dropdown options
  const years = [
    { value: '1', label: '1' },
    { value: '2', label: '2' }
  ];

  const branches = [
    { value: 'CSE', label: 'CSE' },
    { value: 'AI', label: 'AI' }
  ];

  // Define subjects for each branch and year
  const subjects = {
    CSE: {
      1: [
        { value: 'EM1', label: 'Engineering Mathematics 1' },
        { value: 'EP', label: 'Engineering Physics' },
        { value: 'DT1', label: 'Design Thinking 1' },
        { value: 'CAD', label: 'CAD and Digital Marketing'},
        { value: 'EM2', label: 'Engineering Mathematics 2' },
        { value: 'BEEE', label: 'Basic Electrical and Electronics Engineering ' },
        { value: 'German', label: 'German' },
        { value: 'French', label: 'French' },
        { value: 'Japanese', label: 'Japanese' },
      ],
      2: [
        { value: 'EM3', label: 'Engineering Mathematics 3' },
        { value: 'DIS', label: 'Discrete Structures' },
        { value: 'AICE', label: 'AI and Cyber Ethics' },
        { value: 'DLIoT', label: 'Digital Logistics and Internet of Things' },
        { value: 'DSA', label: 'Data Structures and Algorithms' },
        { value: 'COA', label: 'Computer Organization and Architecture' },
      ]
    },
    AI: {
      1: [
        { value: 'EM1', label: 'Engineering Mathematics 1' },
        { value: 'EP', label: 'Engineering Physics' },
        { value: 'DT1', label: 'Design Thinking 1' },
        { value: 'CAD', label: 'CAD and Digital Marketing'},
        { value: 'EM2', label: 'Engineering Mathematics 2' },
        { value: 'BEEE', label: 'Basic Electrical and Electronics Engineering ' },
        { value: 'German', label: 'German' },
        { value: 'French', label: 'French' },
        { value: 'Japanese', label: 'Japanese' },
      ],
      2: [
        { value: 'SP', label: 'Statistics and Probability' },
        { value: 'DS', label: 'Discrete Structures' },
        { value: 'AI-ML', label: 'Artificial Intelligence and Machine Learning' },
        { value: 'DSA-I', label: 'Data Structures and Algorithm-I' },
        { value: 'LD-CA', label: 'Logic Design and Computer Architecture' },
        { value: 'ES', label: 'Environmental Science' }
       ]
    }
  };

  // State variables for each dropdown
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [subject, setSubject] = useState('');
  const [unit, setUnit] = useState('');

  const handleSearch = () => {
    console.log("Search initiated with:");
    console.log("Year:", year);
    console.log("Branch:", branch);
    console.log("Subject:", subject);
    console.log("Unit:", unit);
  };

  return (
    <div className="container1">
      <div className="box1">
        <h1>Search your notes here</h1>
        {/* Year Dropdown */}
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          {years.map((yr) => (
            <option key={yr.value} value={yr.value}>
              {yr.label}
            </option>
          ))}
        </select>

        {/* Branch Dropdown (enabled only if a year is selected) */}
        <select
          value={branch}
          onChange={(e) => {
            setBranch(e.target.value);
            setSubject(''); // Reset subject when branch changes
          }}
          disabled={!year} // Disable if no year is selected
        >
          <option value="">Select Branch</option>
          {branches.map((br) => (
            <option key={br.value} value={br.value}>
              {br.label}
            </option>
          ))}
        </select>

        {/* Subject Dropdown (enabled only if a branch and year are selected) */}
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={!branch || !year} // Disable if no branch or year is selected
        >
          <option value="">Select Subject</option>
          {branch && year && subjects[branch] && subjects[branch][year] ? (
            subjects[branch][year].map((subj) => (
              <option key={subj.value} value={subj.value}>
                {subj.label}
              </option>
            ))
          ) : (
            <option value="">No subjects available</option>
          )}
        </select>

        {/* Unit Dropdown (enabled only if a subject is selected) */}
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          disabled={!subject} // Disable if no subject is selected
        >
          <option value="">Select Unit</option>
          <option value="U1">1</option>
          <option value="U2">2</option>
          <option value="U3">3</option>
          <option value="U4">4</option>
          <option value="U5">5</option>
        </select>

        <button className='btn1' onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Reach;
