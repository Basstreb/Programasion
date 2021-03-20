import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

const Header = (
    //{ darkMode, setDarkMode }
) => {

    const { theme, setTheme } = useContext(ThemeContext);

    const handleClick = () => {
        // setDarkMode(!darkMode);
        setTheme(!theme)
    }

    return (
        <header className="Header pt-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>ReactHooks</h2>
                    </div>
                    <div className="col">
                        <button type="button"
                            onClick={handleClick}
                            className={theme ? 'btn btn-dark' : 'btn btn-light'}>
                            {theme ? 'Dark Mode' : 'Light Mode'}
                        </button>
                    </div>
                    {/* <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button> 
            AMBAS SON VALIDAS PERO AL DECLARAR LA FUNCION SE PUEDE CONTROLAR MEJOR*/}
                </div>
            </div>
        </header>
    )
}

export default Header
