import React, { Component } from 'react'

class EventBind3 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hiii'
      }

      this.clickHandler = this.clickHandler.bind(this)
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
        <button onClick={this.clickHandler}>Click 3</button>
      </div>
    )
  }
}

export default EventBind3
