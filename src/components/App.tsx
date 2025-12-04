import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    console.log('hello');
    
    async function fetchData() {
      await axios
  .get(`https://swapi.info/api/people/${count}`)
  .then((response) => setPerson(response.data));
  }
  fetchData();
  }, [count]);

  

    console.log('bye-bye');
  


  return <>
  <h2>The count is {count}</h2>
    <button onClick ={() => setCount(count + 1)}>Nex person</button>
    <pre>{JSON.stringify(person, null, 2)}</pre>
  </>
}