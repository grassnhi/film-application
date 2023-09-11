import React, { Component } from 'react'

class UserGreet2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
    return(
        this.state.isLoggedIn ? 
        (<div>Welcome hi</div>) :
        (<div>Welcome hu</div>)
    )
    }
}

export default UserGreet2
