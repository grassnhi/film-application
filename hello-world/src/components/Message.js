import React, { Component} from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome to my state'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you <3'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Subcribe</button>
            </div>
            
        )
    }
}

export default Message;