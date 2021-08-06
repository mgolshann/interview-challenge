import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'

// Redux
import { connect } from 'react-redux';

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = ({ data }) => {
  const { countries } = data
  let nameArr = [];
  let populationArr = [];

  for (const country of countries) {
    nameArr.push(country.name);
    populationArr.push(parseInt(country.population));
  }

  return (
    <div  >
      <Bar
        data={{
          labels: nameArr,
          datasets: [
            {
              width: '500px',
              label: '',
              data: populationArr,
              backgroundColor: ['rgba(255, 99, 132, 0.2)'],
              borderWidth: 0,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

const mapStateToProps = state => ({ data: state.data })
export default connect(mapStateToProps)(BarChart);
