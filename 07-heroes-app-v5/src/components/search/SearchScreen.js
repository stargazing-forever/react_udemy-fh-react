import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { heroes } from '../../data/heroes'
import queryString from 'query-string'

import useForm from '../../hooks/useForm'
import HeroCard from '../heroes/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroesByName'

const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q=''} = queryString.parse(location.search);
    
    const [formValues, handleChange ] = useForm({
        searchText: q
    })

    const {searchText} = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h3>Search Screen</h3>
            <div className="row">
                <div className="col-5">
                    <h4>Search</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleChange}
                            autoComplete="off"
                            
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary m-1 btn-block"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7 animate__animated animate__fadeIn">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q==='') &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {
                        (q!=='' && heroesFiltered.length === 0) &&
                            <div className="alert alert-danger">
                                There is no a hero with {q}
                            </div>
                    }
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default SearchScreen
