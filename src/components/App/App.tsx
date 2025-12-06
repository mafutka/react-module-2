import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebsrOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleSearch = async (searchTopic: string) => {
    const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${searchTopic}`);
    console.log(response.data);

  }
  


  return <>
  <button onClick={openSidebar}>Open sidebar</button>
  {isSidebsrOpen && <Sidebar onClose={closeSidebar}/>}

  <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>

     <SearchForm onSearch = {handleSearch}/>
      <Button />
  </>
}