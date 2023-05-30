import { createContext, useContext, useState } from 'react'

interface AppContext {

}

export const AppContext = createContext({} as any)

export const AppContextProvider = ({ children }) => {
  const [selectedToken, setSelectedToken] = useState(process.env.NEXT_PUBLIC_LP1)
  const [isLoading, setIsLoading] = useState(false)



  return (
    <AppContext.Provider value={{ selectedToken, setSelectedToken, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)