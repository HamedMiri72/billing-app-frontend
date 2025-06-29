
import { createContext } from "react";
import {getAllCategories} from "../service/CategoryService";
import {useState, useEffect} from 'react';



export const AppContext = createContext();


export const AppContextProvider = (props) => {

    const [categories, setCategories] = useState([]);


    useEffect( () => {

        async function loadData() {

            const response = await getAllCategories();
            setCategories(response.data);
        }
        loadData();
    }, []);


    const contextValue = {

        categories,
        setCategories,

    }

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
}