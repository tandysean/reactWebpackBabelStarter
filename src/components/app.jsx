import React, {useState} from 'react'
import {getUsers} from '../common/usersAPI'

function App() {
  const [state, setState] = useState("CLICK ME");

  return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

export default App