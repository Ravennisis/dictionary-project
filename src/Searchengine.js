import React, {useState} from "react";

import "./Searchengine.css"

export default function Searchengine(){
    let [keyword, setKeyword] = useState("");
    
    function search (event){
    event.preventDefault();
    alert (`Searching for definition of ${keyword}`);}

function handleKeywordChange (event) {
    setKeyword(event.target.value);
}

    return (
    <div className="Searchengine">  
    <form onSubmit={search}>
        <input type="Search" onChange={handleKeywordChange}/>
    </form>
    </div>
    );
}
