import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';

const Information = () => (
    <div className="Information">
        <div className="Information-content">
            <div className="Information-head">
                <h2>Información de contacto:</h2>
            </div>
            <div className="Information-form">
                <form action="">
                    <label htmlFor="name">
                        Nombre Completo:
            <input type="text" placeholder="Nombre completo" name="name" />
                    </label>
                    <label htmlFor="email">
                        Correo Electronico:
            <input type="text" placeholder="Correo Electronico" name="email" />
                    </label>
                    <label htmlFor="adress">
                        Direccion:
            <input type="text" placeholder="Direccion" name="addres" />
                    </label>
                    <label htmlFor="apto">
                        Apto:
            <input type="text" placeholder="apto" name="apto" />
                    </label>
                    <label htmlFor="city">
                        Ciudad:
            <input type="text" placeholder="Ciudad" name="city" />
                    </label>
                    <label htmlFor="country">
                        Pais:
            <input type="text" placeholder="Pais" name="country" />
                    </label>
                    <label htmlFor="state">
                        Estado:
            <input type="text" placeholder="Estado" name="state" />
                    </label>
                    <label htmlFor="cp">
                        Codigo Postal:
            <input type="text" placeholder="Codigo postal" name="cp" />
                    </label>
                    <label htmlFor="phone">
                        Telefono:
            <input type="text" placeholder="Telefono" name="phone" />
                    </label>
                </form>
            </div>
            <div className="Information-buttons">
                <div className="Information-back"><Link to="/checkout">Regresar</Link></div>
                <div className="Information-next"><Link to="/checkout/payment">Pagar</Link></div>
            </div>
        </div>
        <div className="Information-sidebar">
            <h3>Pedido:</h3>
            <div className="Information-item">
                <div className="Information-element">
                    <h4>ITEM NAME</h4>
                    <span>$10</span>
                </div>
            </div>
        </div>
    </div>
);

export default Information;
