import React, { Component } from 'react'

class EventBind2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Salut :3'
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
        <button onClick={() => this.clickHandler()}>Click 2</button>
      </div>
    )
  }
}

export default EventBind2
