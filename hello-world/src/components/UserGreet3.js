import React, { Component } from 'react'

class UserGreet3 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
    let message
    if(this.state.isLoggedIn) {
        message = <div>Welcome hihihi</div>
    } else {
        message = <div>Welcome huhuhu</div>
    }
    
    return <div>{message}</div>
    }
}

export default UserGreet3
