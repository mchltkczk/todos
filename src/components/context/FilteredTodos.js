import { useState, createContext } from 'react';

const initFilter = {
    filterTodos: 'all',
    filterByProgress: () => {},
}
export const FilteredTodosContext = createContext(initFilter);

const FilteredTodosProvider = ({children}) => {
    const [ filterTodos, setFilterTodos ] = useState('all');

    // const filterByProgress = (indicator) =>{
    //     setFilterTodos(indicator)

    // }
    const filteredTodosData = {
        filterTodos,
        setFilterTodos,
        // filterByProgresscd
    }
    return (
        <FilteredTodosContext.Provider value={filteredTodosData}>
            {children}
        </FilteredTodosContext.Provider>
    )
}

export default FilteredTodosProvider;