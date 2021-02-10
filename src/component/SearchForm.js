import React from 'react'
import {useGlobalContext} from '../context'

const SearchForm = () => {
    const {setSearchTerm } = useGlobalContext()
    const searchValue = React.useRef('')
    return (
        <section className="section search">
            <form className = "search-form">
                <div className="search-control">
                    <label htmlFor="name" >
                        search your favourite cocktail
                    </label>
                    <input type='text' id='name' ref={searchValue}/>
                </div>
            </form>
        </section>
    )
}

export default SearchForm
