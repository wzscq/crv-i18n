import React from 'react' 
import { createContext } from 'react'
 
export const LocalContext = createContext({})
 
export default function LocalProvider({ children, resources, locale,locales }) {
  return <LocalContext.Provider value={{resources,locale,locales}}>{children}</LocalContext.Provider>
}