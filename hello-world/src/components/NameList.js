import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Nhi', 'Hien', 'Minh']
    const persons = [
        {
            id: 1,
            name: 'Nhi',
            age: 20,
            skill: 'React' 
        },
        {
            id: 2,
            name: 'Hien',
            age: 16,
            skill: 'Maths'
        },
        {
            id: 3,
            name: 'Minh',
            age: 13,
            skill: 'Game'
        }
    ]
    // const personList = persons.map(person => <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>)
    const personList = persons.map(person => <Person person = {person} />)
    
    // const nameList = names.map(name => <h2>{name}</h2>)
  return (
    <div>
      {
        // // names.map(name => <h2>{name}</h2>)
        // nameList
        personList
      }
    </div>
  )
}

export default NameList
