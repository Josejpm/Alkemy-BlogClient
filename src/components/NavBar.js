import React from 'react';
import {Link} from 'react-router-dom'


export const NavBar = () => {
    return (
        <nav className="navbar bg-primary justify-content-between">
            <div>
                <h1> 
                    <Link to={'/dashboard'} className="text-light" > Alkemy Blog </Link> 
                </h1>
            </div>
            <Link to={'/new-post'}
                className="btn btn-success d-block d-md-inline-block">Agregar Producto &#43;
            </Link>
        </nav>
    )
}
