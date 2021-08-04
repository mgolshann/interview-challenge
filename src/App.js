import { useEffect, useState } from 'react';
import { Card, CardContent, MenuItem, Select } from '@material-ui/core';
import './App.css';

import InfoBox from './components/info/InfoBox';
import Map from './components/map/Map';
import Table from './components/table/Table';
import SearchBar from './components/search/SearchBar';

import { connect } from 'react-redux';
import { getCountryList } from './redux/actions/dataActions';
import MyChart from './components/chart2/MyChart';

const App = ({ data }) => {


  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 36, lng: 65 });
  const [mapZoom, setMapZoom] = useState(3);
  const [casesType, setCasesType] = useState("cases");


  useEffect(() => { getCountryList() }, []);


  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>World's Population</h1>
          <SearchBar />
        </div>

        <div className="app__stats">
          {/* <InfoBox
            onClick={(e) => setCasesType('cases')}
            title="Coronavirus Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)} /> */}

        </div>

        <Map
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />

      </div>

      <Card className="app__right">
        <CardContent>
          <h3>count : {data.count}</h3>
          <Table />
          <h3>WorldWide New Cases</h3>
          <MyChart />
        </CardContent>
      </Card>

    </div>
  );
}

const mapStateToProps = state => {
  return { data: state.data }
}

export default connect(mapStateToProps, getCountryList)(App)