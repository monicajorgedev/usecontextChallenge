import {useTheme} from '../themes/ThemeContext'

const Button = () => {
    const {theme, changeTheme} = useTheme();
    
    return (
        <>
        <button onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
            Cambiar a modo: {theme === 'light' ? 'dark' : 'light'}
        </button>
        </>
    )
}

export default Button