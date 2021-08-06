import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { showDataOnMap } from '../../util';


import { connect } from 'react-redux';
import { selectedCountry, deleteCharacterSearch, fillBackUp } from '../../redux/actions/dataActions';

function SearchBar({ data, selectedCountry, fillBackUp, deleteCharacterSearch }) {

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")
  const [state, setState] = React.useState({ counter: 0 });


  const handleButton = (e) => {
    console.log(e)
    showDataOnMap(data.countries, "cases")
  }

  const handleFilter = (event) => {
    let newFilter = []
    const searchWord = event.target.value
    setWordEntered(searchWord)

    if (searchWord === "") {
      setFilteredData([])
      fillBackUp()
    } else {
      if (searchWord.length > state.counter) {
        newFilter = data.countries.filter(country => {
          return country.name.toLowerCase().includes(searchWord.toLowerCase())
        });
        setFilteredData(newFilter)
        setState({ ...state, counter: state.counter + 1 })
        selectedCountry(newFilter)
      } else {
        newFilter = data.backup.filter(country => {
          return country.name.toLowerCase().includes(searchWord.toLowerCase())
        });
        setFilteredData(newFilter)
        setState({ ...state, counter: state.counter - 1 })
        deleteCharacterSearch(newFilter)
      }
    }
  }

  const clearInput = () => {
    setFilteredData([])
    fillBackUp()
    setWordEntered("")
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter a name"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a onClick={handleButton} key={value.name}  
              className="dataItem" href={value.link} target="_blank" style={{ cursor: 'pointer' }}>
                <p>{value.name}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({ data: state.data })
const mapDispatchToProps = {
  selectedCountry,
  deleteCharacterSearch,
  fillBackUp
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
