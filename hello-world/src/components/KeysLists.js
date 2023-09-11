import React from 'react'
import Person from './Person'

function NameList() {
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
    const personList = persons.map(person => <Person key={person.name} person = {person} />)
    
  return (
    <div>
      {

        personList
      }
    </div>
  )
}

export default NameList
