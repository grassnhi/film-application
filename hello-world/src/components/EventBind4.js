import React, { Component } from 'react'

class EventBind4 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hiii'
      }

    }

    clickHandler = () => {
        this.setState({
            message: 'Byeee'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click 4</button>
      </div>
    )
  }
}

export default EventBind4
