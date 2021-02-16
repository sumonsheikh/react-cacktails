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
                const response = await fetch(`${url}${id}`)
                const data = await response.json()
                if(data.drinks){
                    const { strDrink : name, 
                        strDrinkThumb : images,
                         strCategory : category,
                        strAlcoholic : info, 
                        strGlass: glass, 
                        strInstructions: instructions,
                         strIngredient1,
                         strIngredient2,
                        strIngredient3,
                         strIngredient4,
                          strIngredient5
                    } = data.drinks[0]

                    const ingredient = [
                        strIngredient1,
                         strIngredient2,
                          strIngredient3,
                           strIngredient4,
                           strIngredient5
                    ]
                    const newCocktail ={
                        name,
                        images,
                        category,
                        info,
                        glass,
                        instructions,
                        ingredient
                    }
                    setCocktail(newCocktail)
                }else{
                    setCocktail(null)
                }
                setLoading(false)
            }catch(error){
                console.log(error);
                setLoading(false)
            }
        }
        getCocktail()
    },[id])
    if(loading){
        return <Loading/>
    }
    if(!cocktail){
        return(
         <h2 className="section-title">No Cocktail to Display</h2>
        )
    } 
    const {
        name,
        images,
        category,
        info,
        glass,
        instructions,
        ingredient
    }= cocktail
    return (
        <section className="section cocktail-section">
            <Link to='/'  className="btn btn-primary">
                back home
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
                <img src={images} alt={name}/>
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name : </span>
                        {name}
                    </p>
                    <p>
                        <span className="drink-data">category : </span>
                        {category}
                    </p>
                    <p>
                        <span className="drink-data">info : </span>
                        {info}
                    </p>
                    <p>
                        <span className="drink-data">glass : </span>
                        {glass}
                    </p>
                    <p>
                        <span className="drink-data">instructions : </span>
                        {instructions}
                    </p>
                    <p>
                        <span className="drink-data">ingredients : </span>
                      
                        {ingredient.map((item, index)=>{
                            return item? <span key={index}> {item}</span> : null
                        })}
                       
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleCocktail
