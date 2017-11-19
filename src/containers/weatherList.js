import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

    // find the coord object and execute lon & lat methods on it
    // same as:
    // const lon = cityData.city.coord.lon
    // const lat = cityData.city.coord.lat
    const { lon, lat } = cityData.city.coord

    return(
      <tr key={name}>
        <td> <GoogleMap lon={lon} lat={lat}/> </td>
        <td> <Chart data={temps} color='orange' units='K' /> </td>
        <td> <Chart data={pressures} color='green' units='hPa' /> </td>
        <td> <Chart data={humidities} color='black' units='%' /> </td>
      </tr>
    )
  }

  render() {
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Tempreture (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {/*for each object in the array call renderWeather function*/}
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) { //(state) const weather = state.weather === ({weather})
  return { weather } // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList)
