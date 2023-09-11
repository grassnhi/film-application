import React, { Component } from 'react'

class UserGreet1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
    
    if(this.state.isLoggedIn) {
        return (
            <div>
              <div>Welcome hihi</div>
            </div>
          )
    } else {
        return (
            <div>
              <div>Welcome huhu</div>
            </div>
          )
    }
  }
}

export default UserGreet1
