import React from 'react'

const Hello = () => {
    // return (
    //     <div className = 'dummyClass'>
    //         <h1>Hello, JSX</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummy class'},
        React.createElement('h1', null, 'Hello this is not JSX'))
}

export default Hello;