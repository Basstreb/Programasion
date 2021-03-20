import React, { useCallback, useMemo, useReducer, useRef, useState } from 'react'
import useCharacters from '../hooks/useCharacters';
import Card from './Card';
import Search from './Search';

const initialState = {
    favorites: []
}

//CONSTANTE QUE GUARDA LA PAGINA DE LA API PARA EL CUSTOM HOOK
const API = 'https://rickandmortyapi.com/api/character/';

//REDUCER AQUI ES DONDE GUARDAMOS LA ACCION
const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state;
    }
}

const Characters = () => {

    //ESTE STATE SE USABA CON EL VIEJO useEFFECT
    // const [characters, setCharacters] = useState([]);
    //ESTE ES EL REDUCER QUE HARA QUE GUARDEMOS DATOS
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    //ESTO YA NO LO USAREMOS PORQUE HEMOS CREADO UN HOOK CUSTOM
    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character/')
    //         .then(response => response.json())
    //         .then(data => setCharacters(data.results))
    // }, []);

    //ASI USAMOS EL CUSTOM HOOK PASANDO LA PAGINA DE LA API
    const characters = useCharacters(API);

    //ESTO HACE EL LLAMADO PARA GUARDAR LAS CARDS EN FAVORITOS
    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    //FUNCION QUE MANEJA LA BUSQUEDA
    // const handleSearch = () => {
    //     //obtendremos el valor del target que en este caso es un input
    //     //con el ref del input hacemos referencia a que el setSearch de abajo use ese input y no otro
    //     setSearch(searchInput.current.value)

    // }

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, []);

    //Constante para filtrar usuarios, pero no estamos usando useMemo, este ejemplo es valido pero vamos a mejorarlo
    // const filteredUsers = characters.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })

    //Esto es lo mismo que arriba pero carga menos el programa, esta funcion escucha sobre
    //character o sobre search recordando el resultado anterior
    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }), [characters, search]
    )

    return (
        <div className="container">
            <h1>Favorites</h1>
            <div className="Characters row mt-3">
                {favorites.favorites.map(favorite => (
                    <div key={favorite.id}>
                        <Card character={favorite} />
                    </div>
                ))}
            </div>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            <h1>Characters</h1>
            <div className="Characters row mt-3">
                {filteredUsers.map(character => (
                    <div className="item" key={character.id}>
                        <Card character={character} />
                        <button className="btn btn-outline-primary" type="button" onClick={() => handleClick(character)}>Agregar a Favoritos</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters
