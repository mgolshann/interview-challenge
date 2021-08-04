import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import { connect } from 'react-redux';
import { selectedCountry, deleteCharacterSearch, fillBackUp } from '../../redux/actions/dataActions';

function SearchBar({ data, selectedCountry, fillBackUp, deleteCharacterSearch }) {

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")

  const handleFilter = (event) => {
    const searchWord = event.target.value

    setWordEntered(searchWord)
    const newFilter = data.countries.filter(country => {
      return country.name.toLowerCase().includes(searchWord.toLowerCase())
    });

    if (searchWord === "") {
      setFilteredData([])
      selectedCountry([])
    } else {
      setFilteredData(newFilter)
      selectedCountry(newFilter)

    }
  };

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
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.name} </p>
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
  fillBackUp,
  deleteCharacterSearch
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
