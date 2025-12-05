import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button";
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

  const handleSearch = async (searchTopic: string) => {
    const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${searchTopic}`);

    console.log(response.data);
    
    

  }
  


  return <>

  <h2>The count is {count}</h2>
    <button onClick ={() => setCount(count + 1)}>Nex person</button>
    <pre>{JSON.stringify(person, null, 2)}</pre>

     <SearchForm onSearch = {handleSearch}/>
      <Button />
  </>
}