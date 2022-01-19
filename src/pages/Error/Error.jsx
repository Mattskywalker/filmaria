import React from 'react'
import { Link } from 'react-router-dom'

import './Error.css'

export default function Error() {
    return (
        <div id='error'>
            <h1>404</h1>
            <h2>Pagina não encontrada</h2>
            <Link to="/" >Ver filmes</Link>
        </div>
    )
}
