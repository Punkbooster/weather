import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }

    // this line will make sure this context of the onInputChange is the same
    // as in our component (so we have this.setState function)

    // in other words bind onInputChange to the context of this & replace existing function
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    // in this case value of this is not going to be and react component this
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault()

    // we need to go and fetch weather data
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Get a five day forecast in Your favourite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

// on a place of null argument usualy passed a state
// but in this case we don't need it
export default connect(null, mapDispatchToProps)(SearchBar)
