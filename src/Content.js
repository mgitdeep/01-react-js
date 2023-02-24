import React, { useState } from 'react'

const Content = () => {
    const [ name, setName ] = useState('Dave');
  
    const handleNameChange = () => {
        const names = [ "Dave", "Ram", "Bob" ];
        const int = Math.floor(Math.random() * 3);
    
        setName(names[int]);
    }

    const handleClick = () => {
      console.log('You clicked it!')
    }

    const handleClick2 = (name) => {
      console.log(`${name} has clicked!`)
    }

    const handleClick3 = (e) => {
      console.log(e.target.innerText)
    }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <br />
        <button onClick={handleNameChange}>Change Name</button>
        <br />
        <button onClick={() => {handleClick2('Mondeep')}}>Click It</button>
        <br />
        <button onClick={(e) => {handleClick3(e)}}>Click It</button>
    </main>
  )
}

export default Content