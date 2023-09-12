import React from 'react'

function KeyAnti() {
    const names = ['Nhi', 'Nho', 'nhor', 'Nhi'] // same key => NO!!

    //const nameList = names.map(name => <h2>{name}</h2>)
    // const nameList = names.map(name => <h2 key={name}>{name}</h2>)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    
  return (
    <div>{nameList}</div>
  )
}

export default KeyAnti
