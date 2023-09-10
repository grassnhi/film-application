import React, { Component } from 'react'

class EventBind1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    }

    clickHandler(){
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click 1</button>
      </div>
    )
  }
}

export default EventBind1
