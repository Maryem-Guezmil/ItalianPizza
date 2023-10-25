import React from 'react'
import Pizza from "../components/Pizza";
import { getAllPizzas } from '../actions/pizzaActions'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading';
import Error from '../components/Error';
import { setSearchTerm } from '../actions/searchActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Homescreen() {
  const dispatch = useDispatch()
  //useseelctor used to get the data from the reducers
  const pizzasstate = useSelector(state => state.getAllPizzasReducer)
  const { pizzas, error, loading } = pizzasstate
  // const searchTerm = useSelector((state) => state.searchReducer.searchTerm);
  //new 
  //new state variable to store the search term.
  const [search, setSearch] = useState('');
  //Use the search term to filter the list of pizzas.
  const filteredPizzas = pizzas.filter((pizza) => pizza.name.toLowerCase().includes(search.toLowerCase()));
  //Dispatch the setSearchTerm action with the search term whenever the input field value changes
  useEffect(() => {
    dispatch(getAllPizzas());
    dispatch(setSearchTerm(search));
  }, [dispatch, search]);
  return (
    //Add a new input field to the component's render method, where users can enter the search term.
    //Use the search term to filter the list of pizzas.



    <div className="container">
      <div className="row">
        <div className="col-md-3 searchBar">
          <h2>- Our Menu -</h2>
          <input class="search-bar form-control rounded" type="text" value={search}
            placeholder="Search a specific pizza .."
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => setSearch(e.target.value)} />
        
        </div></div>
      <div className="row justify-content-center"  >
        {loading ? (
          <Loading />
        ) : error ? (<Error error='Something went wrong' />
        ) : (
          filteredPizzas && filteredPizzas.length > 0 && filteredPizzas.map(pizza => {
            return (
              <div className="col-md-3 m-3" key={pizza.id}  >
                  <Pizza pizza={pizza} />
              </div>)
          })
        )}

      </div>
    </div>
  )
}

export default Homescreen