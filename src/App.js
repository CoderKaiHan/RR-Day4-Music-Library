import './App.css';
import { useEffect, useState, Suspense } from 'react';
import { createResource as fetchData } from './helper'
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import Spinner from './components/Spinner';

function App(){
    let [searchTerm, setSearchTerm] = useState('');
    let [message, setMessage] = useState('Search for Music!');
    let [data, setData] = useState(null);

    useEffect(() =>{
      if (searchTerm){
        setData(fetchData(searchTerm))
          // const fetchData = async () => {
          //   document.title = `${search} Music`;
          //   const response = await fetch (API_URL + search);
          //   const resData = await response.json();
          //   console.log(resData);
          //   if(resData.results.length > 0){
          //     setData(resData.results);
          //   } else {
          //     setMessage('Not Found');
          //   }
          }
          // fetchData();
      },[searchTerm]);
    
    const handleSearch = (e, term) => {
      e.preventDefault();
      setSearchTerm(term);
    }
    
    const renderGallery = () =>{
      if(data) {
        return (
          <Suspense fallback={<Spinner />}>
            <Gallery data={data}/>
          </Suspense>
        );
      }
    }

    return (
        <div>
            <SearchBar handleSearch = {handleSearch}/>
            {message}
            {renderGallery()}
        </div>
    )
}

export default App;

