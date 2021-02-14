import React from 'react'
import Loading from '../component/Loading'
import {useParams, Link} from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


const  SingleCocktail = ()=> {
    const {id } = useParams()
    const [loading, setLoading ] = React.useState(false)
    const [cocktail, setCocktail ] = React.useState(null)
    React.useEffect(()=>{
        setLoading(true);
        async function getCocktail (){
            try{
                const response = await fetch(`${url}${url}`)
                const data = await response.json();
            }catch(error){
                console.log(error);
            }
        }
    },[id])
    return (
        <div>
            <h2>{id}</h2>
        </div>
    )
}

export default SingleCocktail
