import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import './style/Card.css'

const Card = ({ character }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="col mt-3">
            <div className={theme ? 'card Font__Light' : 'card Font__Dark'} style={{ width: "18rem" }}>
                <img className="card-img-top" src={character.image} alt={character.name} />
                <div className={theme ? 'card-body  Font__Light' : ' card-body Font__Dark'}>
                    <h5 className="card-title">{character.name}</h5>
                    <div>
                        <div><b>Status: </b>{character.status}</div>
                        <div><b>Gender: </b>{character.gender}</div>
                        <div><b>Species: </b>{character.species}</div>
                        <div><b>Location: </b>{character.origin.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
