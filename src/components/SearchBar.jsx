import React, { useState, useEffect } from "react";
import { BASE_URL } from "../config/api";

function SearchBar () {
    const [searchTerm, setSearchTerm] = useState ([]);
    const [results, setResults] = useState ([]);

    useEffect (() => {
        if(searchTerm === ""){
            setResults([]);
            return;
        }

        fetch(`${BASE_URL}/products?search=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
            console.log("API Response", data);
            setResults(data);
        });

    }, [searchTerm])



    return (
        <div>
            <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
            />

            <ul>
                {results.map((i) =>(
                    <li key={i.id}>{i.name}</li>
                ))}

            </ul>
            

        </div>
    )
}

export default SearchBar;