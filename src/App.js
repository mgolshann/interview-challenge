import { useState } from 'react';
import { Card, CardContent, MenuItem } from '@material-ui/core';
import './App.css';

// Components
import Map from './components/map/Map';
import Table from './components/table/Table';
import BarChart from './components/chart/BarChart';
import SearchBar from './components/search/SearchBar';

// Redux
import { connect } from 'react-redux';
import { getCountryList } from './redux/actions/dataActions';


const App = ({ data }) => {

  const [mapCenter, setMapCenter] = useState({ lat: 36, lng: 65 });
  const [mapZoom, setMapZoom] = useState(3);


  return (
    <div className="app">
      <div className="app__left">

        <div className="app__header">
          <h1>World's Population</h1>
          <SearchBar />
        </div>

        <Map center={mapCenter} zoom={mapZoom} />

        <Card className="cardBar">
          <CardContent style={{ width: '100vh' }}>
            <BarChart />
          </CardContent>
        </Card>

      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Count : {data.count}</h3>
          <Table />
        </CardContent>
      </Card>

    </div>
  );
}

const mapStateToProps = state => {
  return { data: state.data }
}

export default connect(mapStateToProps, getCountryList)(App)