import React from "react";

function CountryList(){
    const countries = [
        {id: 1, country: "USA", capital: "Washington D.C."},
        {id: 2, country: "Canada", capital: "Ottawa"},
        {id: 3, country: "France", capital: "Paris"},
        {id: 4, country: "Germany", capital: "Berlin"},
        {id: 5, country: "Italy", capital: "Rome"},
        {id: 6, country: "Japan", capital: "Tokyo"},
        {id: 7, country: "Australia", capital: "Canberra"},
        {id: 8, country: "Brazil", capital: "Brasília"},
        {id: 9, country: "India", capital: "New Delhi"},
        {id: 10, country: "United Kingdom", capital: "London"}
    ];

    return(
        <div>
            <h2>List of Countries and Capitals</h2>

            {/* {countries.map( (i) => (
                <li>
                    {i.country} - {i.capital}
                </li>
            ))} */}

<table>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Capital</th>
                </tr>
            </thead>
            <tbody>
                {countries.map((i) => (
                    <tr key={i.id}>
                        <td>{i.country}</td>
                        <td>{i.capital}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default CountryList;