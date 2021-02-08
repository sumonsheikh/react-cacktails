import React from 'react'
//component
import Cocktail from './Cocktail'
import Loading from './Loading'
import {useGlobalContext} from '../context'
const  CocktailList = () => {
    const { cocktails, loading} = useGlobalContext()
    if(loading){
        return(
            <Loading/>
        )
    }
    if(cocktails.length<1){
        return (
            <section className="section-title">
                <h2>No Cocktail found your search match</h2>
            </section>
        )
    }
    return (
        <div>
            <h2 >CocktailList component</h2>
        </div>
    )
}

export default CocktailList
