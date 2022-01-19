import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';

import './Favoritos.css'

export default function Favoritos() {

    const [favoritos, setFavoritos] = useState([]);
    const [onLoadding, setOnLoading] = useState(true);

    useEffect(() => {
        const storageFav = JSON.parse(localStorage.getItem('favoritos')) || [];
        setFavoritos(storageFav);
        let interval = setInterval(() => {setOnLoading(false); clearInterval(interval);} , 200)// apenas para efeito de carregamento
        
        
    },[])

    function handleDelete(deleted) {
        
        const listFavoritos = favoritos.filter((filme) => filme.id !== deleted.id);
        
        localStorage.setItem('favoritos', JSON.stringify(listFavoritos));
        toast.success(`${deleted.nome} removido dos favoritos`);
        setFavoritos(listFavoritos);
        
        
    }

    if(onLoadding){
        return(
            <div id='favoritos' >
                <Loading></Loading>
            </div>
        )
    }else{
        return (
            <div id='favoritos' >
                <h1>Favoritos</h1>

                {favoritos.length === 0 && <span>Você não possui nenhum favorito :(</span>}
                <ul>
                    {favoritos.map((filme) => {
                        return(
                            <li key={filme.nome} >
                                <span>{filme.nome}</span>
    
                                <div>
                                    <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                    <button onClick={() => {handleDelete(filme)}} >Excluir</button>
                                </div>
                            </li>
    
                        )
                    })}
                </ul>
            </div>
        )
    }
}
