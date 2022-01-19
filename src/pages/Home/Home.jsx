import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import instance from '../../service/instance'

import './Home.css'

export default function Home() {

    const [filmes, setFilmes] = useState([]);
    const [onLoading, setOnLoading] = useState(true);

    useEffect(()=> {
        instance.get('/r-api/?api=filmes')
        .then((response) => {
            setFilmes(response.data);
            setOnLoading(false);
        
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    if(onLoading){
        return(
            
            <div className='container' >
                <Loading></Loading>
            </div>
            
        )
    }else{
        return (
            <div className='container' >
                <div className='lista-filmes' >
                    {
                        filmes.map((filme) => {
                            return(
                                <article key={filme.id} >
                                    <strong>{filme.nome}</strong>
                                    <img src={filme.foto} alt={filme.nome}/>
                                    <Link to={`/filme/${filme.id}`} >Ver Mais</Link>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
