import React, { useState, useEffect, useCallback } from "react";
import { BASE_URL } from "../config/api";
import debounce from "../utils/debounce";

function SearchBar () {
    const [searchTerm, setSearchTerm] = useState ([]);
    const [results, setResults] = useState ([]);

    function fetchData(term) {
            fetch(`${BASE_URL}/products?search=${searchTerm}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("API Response", data);
                setResults(data);
            });
    }

    const debouncedFetch = useCallback(
        debounce(fetchData, 3000),
        []
    );

    useEffect (() => {
        if(searchTerm === ""){
            setResults([]);
            return;
        }

        debouncedFetch(searchTerm)
    }, [searchTerm, debouncedFetch])

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