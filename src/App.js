import logo from './logo.svg';
import './App.css';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(["USA", "UK", "IR"]);
  return (
    <div className="App">
      <div className="app__header">
        <h1>React Project</h1>
        <FormControl className="app__dropdown">
          <Select
            varient="outlined"
            value="abc"
          >
            {
              countries.map((country) => (
                <MenuItem value={country}>{country}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
