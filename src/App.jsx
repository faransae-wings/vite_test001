import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const person = {
  firstname: 'John', lastname: 'Johnson', email: 'j.johnson@mail.com'
}

function Hello(props) {
  const isLoggedin = props.isLoggedin;
  if (!isLoggedin) {
    return (
      <h1>Logout</h1>
    )
  }

  return <h1>Hello {props.user}</h1>
}


function App() {
 
  const { firstname, lastname, email } = person;

  return (
    <>
      <h1>Hello World</h1>
      <h2>this is my first React component</h2>
      <p>
        Person: {firstname}, lastname: {lastname}
      </p>
      <Hello user='John' isLoggedin={false} />
    </>
  )
}

export default App
