import React, { Component } from 'react'
import ChildCom1 from './ChildCom1'

class ParentCom2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent() {
        // alert('Hello' + this.state.parentName)
        alert(`Hello ${this.state.parentName}`)
    }
    
  render() {
    return (
      <div>
        <ChildCom1 greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentCom2
