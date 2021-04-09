import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

import "./Searchengine.css"

export default function Searchengine(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState("");

    function handleResponse (response){
 setResults(response.data[0]);
};
    
    function search (event){
    event.preventDefault();

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse); 
}

function handleKeywordChange (event) {
    setKeyword(event.target.value);
}

    return (
    <div className="Searchengine">  
    <form onSubmit={search}>
        <input type="Search" onChange={handleKeywordChange}/>
    </form>
    <Results results={results}/>
    </div>
    );
}
