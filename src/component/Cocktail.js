import React from 'react'
import {Link} from 'react-router-dom'
const  Cocktail = ({image, id, name, info, glass}) => {
    return (
        <article className="cocktail">
           <div className = " image-container">
               <img src={image} alt={name}/>
               <div className="cocktail-footer">
                   <h3>{name}</h3>
                   <h3>{glass}</h3>
               </div>
           </div>
        </article>
    )
}

export default Cocktail
