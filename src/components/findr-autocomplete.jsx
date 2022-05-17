import { AutoComplete } from 'primereact/autocomplete';
import { useEffect, useState } from 'react';
import axios from "axios";
import { AutoCompleteService } from './findr-autocomplete-service';

function FindrAutocomplete() {
    const [countries, setCountries] = useState([]);
    const [selectedSugestion, setselectedSugestion] = useState([]);
    const [filteredSugestion, setFilteredSugestion] = useState([]);

    useEffect(() =>{
        const loadCountries = async () =>{
            const res = await axios.get("https://restcountries.com/v3.1/all");
            setCountries(res.data);
        }
        loadCountries();
    }, []); 

    console.log(countries);

    const searchOption = (e) => {
        let query = e.query;
        let filteredSugestion = [];

        for(let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filteredSugestion.push(country);
            }
        }
        setFilteredSugestion(filteredSugestion);
    }

    return (
    <>
    <div>
        <AutoComplete placeholder='Digite aqui o que procura...' 
        suggestions = {countries}
        completeMethod = {searchOption}
        onChange = {(e)=> searchOption(e.value)}/>
        </div>
    </>  
    );

}

export default FindrAutocomplete;