import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name

    return(
      <tr key={name}>
        <td>{name}</td>
      </tr>
    )
  }

  render() {
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Tempreture</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
