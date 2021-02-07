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
    return (
        <div>
            <h2 >CocktailList component</h2>
        </div>
    )
}

export default CocktailList
