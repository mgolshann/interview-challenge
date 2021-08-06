import React from 'react';
import './Table.css';
import { prettyPrintStat } from '../../util';

// Redux
import { connect } from 'react-redux';

function Table({ data }) {
    return (
        <div className="table">
            {!data ? (<div>Loading...</div>) : (
                data.backup.map(country => (
                    <tr key={country.name}>
                        <td>{country.name}</td>
                        <td><strong>{prettyPrintStat(country.population)}</strong></td>
                    </tr>
                )
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return { data: state.data }
}
export default connect(mapStateToProps)(Table)