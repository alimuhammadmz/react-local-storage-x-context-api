import {useContext, createContext} from 'react'

export const DataContext = createContext();

export const DataContextProvider = DataContext.Provider;

export function useData(){
    return useContext(DataContext);
}

export default DataContext