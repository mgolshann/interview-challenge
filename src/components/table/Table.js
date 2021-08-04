import React from 'react';
import './Table.css';
import { connect } from 'react-redux';

function Table(props) {
    console.log(">>>>>>1", props)
    return (
        <div className="table">
            {!props.countries ? (
                <div>Loading...</div>
            ) : (
                props.countries.map(({ name, population }) => (
                    <tr key={name}>
                        <td>{name}</td>
                        <td><strong>{population}</strong></td>
                    </tr>
                )
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    console.log(">>>>>>2",state)
    return { countries: state.data }
}
export default connect(mapStateToProps, null)(Table)
