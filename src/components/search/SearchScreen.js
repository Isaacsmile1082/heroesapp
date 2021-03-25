import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { heroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = ''} = queryString.parse(location.search)
    

    const [ formValues, handleInputChange, reset ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

     

     const heroesFiltered = useMemo(() => heroesByName( q ), [ q ])



    const handleSearch = (e) => {

        e.preventDefault();
        history.push(`?q=${ searchText }`)
        
    }

    
    return (
        <div>
            <h1>Search  Screen</h1>
            <hr/>

            <div className="row"> 
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input type="text"
                            placeholder="Find your heroe"
                            className="form-control"
                            onChange={ handleInputChange }
                            name="searchText"
                            value={ searchText }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>

                    </form>

                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                    { (q==='') && <div className="alert alert-info">
                        Search a Hero
                    </div>
                    }

                    {
                        heroesFiltered.map( hero =>  <HeroCard key={ hero.id } { ...hero }/>)
                    }
                </div>
            </div>
        </div>
    )
}
