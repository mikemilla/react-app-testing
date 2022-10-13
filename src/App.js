import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [json, setJson] = useState()

  async function testAPI() {

    setIsLoading(true)

    const json = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())

    setJson(json)
    setIsLoading(false)

  }

  function buildUI() {
    if (isLoading) {
      return <>Loading...</>
    } else {
      return (
        <>
          <button onClick={() => testAPI()}>Call Random API</button>
          <p>{JSON.stringify(json)}</p>
        </>
      )
    }
  }

  return (
    <div className="App">
      {buildUI()}
    </div>
  );
}

export default App;
