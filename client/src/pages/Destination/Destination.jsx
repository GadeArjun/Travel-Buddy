import React, { useState , useEffect,useContext } from "react";
import "./Destination.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import PredefinePlaces from "../../components/PredefinePlaces/PredefinePlaces";
import DataContext from "../../context/DataContext";

const Destination = () => {
  const [query, setQuery] = useState("");
  const {setSearchQuery} = useContext(DataContext)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <div className="destination-page">
        <div className="hero-section">
          <h1 className="hero-title">Find Your Next Adventure!</h1>
          <SearchBar setSearchQuery={setSearchQuery} setQuery={setQuery} query={query} />
        </div>
      </div>
      <PredefinePlaces searchQuery={query} />
    </div>
  );
};

export default Destination;
