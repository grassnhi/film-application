import React, { Component } from 'react'
import ChildCom2 from './ChildCom2'

class ParentCom1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        <ChildCom2 greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentCom1
