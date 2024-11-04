import { createContext, useContext, useState} from 'react';

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    const changeTheme = () => {
        setTheme(theme => theme === 'light' ? 'dark': 'light')
    }
    return ( 
        <ThemeContext.Provider value={{theme, changeTheme}}>
            <section className={`App ${theme}`}>
            {children}
            </section>
        </ThemeContext.Provider>
    )
    
}

export const useTheme = () => useContext(ThemeContext)