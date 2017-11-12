import React, { Component } from 'react'

export default class SeachBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }

    // this line will make sure this context of the onInputChange is the same
    // as in our component (so we have this.setState function)

    // in other words bind onInputChange to the context of this
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    // in this case value of this is not going to be and react component this
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <form className='input-group'>
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
