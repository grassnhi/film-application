import React, { Component} from 'react'

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        return (
        // <h1>
        //     This is Class Component with {this.props.name} aka {this.props.heroName} 
        // </h1>
        <h1>
            This is Class Component with {name} aka {heroName} 
        </h1>
        )    
    }
}

export default Welcome;