import React, {useState, useContext, useEffect} from 'react'
import {useCallBack} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [loading, setLoading ] = useState(true)
    const [ searchTerm, setSearchTerm ] = useState('a')
    const [cocktails, setCocktails ] = useState([])

    const fetchDrink = async () =>{
        try{

        }catch(error){
            console.log(error);
        }
    }
    return(
        <AppContext.Provider
        value = {{
            loading,
            searchTerm,
            cocktails,
            setSearchTerm,
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export{ AppContext, AppProvider}