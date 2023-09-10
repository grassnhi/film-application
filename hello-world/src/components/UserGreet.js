import React, { Component } from 'react'

class UserGreet extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {

    return this.state.isLoggedIn && <div>Welcome :3</div>
    
    // if(this.state.isLoggedIn) {
    //     return (
    //         <div>
    //           <div>Welcome hihi</div>
    //         </div>
    //       )
    // } else {
    //     return (
    //         <div>
    //           <div>Welcome huhu</div>
    //         </div>
    //       )
    // }

//     let message
//     if(this.state.isLoggedIn) {
//         message = <div>Welcome hihihi</div>
//     } else {
//         message = <div>Welcome huhuhu</div>
//     }
    
//     return <div>{message}</div>

    // return(
    //     this.state.isLoggedIn ? 
    //     (<div>Welcome hi</div>) :
    //     (<div>Welcome hu</div>)
    // )
    }
}

export default UserGreet
