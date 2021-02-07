import React from 'react'
//component
import CocktailList from '../component/CocktailList'
import SearchForm from '../component/SearchForm'

const  Home = () => {
    return (
        <main>
            <SearchForm/>
            <CocktailList/>
        </main>
    )
}

export default Home
