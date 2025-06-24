import React, { useState, useEffect } from "react";
import { BASE_URL } from "../config/api";

function SearchBar () {
    const [searchTerm, setSearchTerm] = useState ([]);
    const [results, setResults] = useState ([]);



    return (
        <div>
            <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            

        </div>
    )
}

export default SearchBar;