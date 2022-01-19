import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { useParams } from 'react-router'
import Loading from '../../components/Loading';
import instance from '../../service/instance'
import {toast} from 'react-toastify' 

import './Filme.css'


export default function Filme() {

    const {id} = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        instance.get(`/r-api/?api=filmes/${id}`)
        .then((response) => {
            const data = response.data;

            data.length === 0? history.replace('/'): 

            setFilme(data);
            setLoading(false);
            
        }).catch((error) => {
            console.log(error);
        })

        return () => {
            console.log("Componente desmontado");
        }
    }, [id, history]) 

    function salvarFilme() {

        const listFilmes = JSON.parse(localStorage.getItem('favoritos')) || [];

        const hasFilm = listFilmes.some((savedFilm) => savedFilm.id === filme.id)

        if(hasFilm) {
            toast.info(`${filme.nome} já está na sua lista de favoritos`);
            return;
        }
        
        listFilmes.push(filme);
        localStorage.setItem('favoritos', JSON.stringify(listFilmes));
        toast.success(`${filme.nome} foi adicionado à sua lista de favoritos`);

    }

    
    if(loading) {
        return (
            <div className='filme'>
                <Loading></Loading>
            </div>
        )
    }else{
        return (
            <div className='filme'>
                <div className="container">
                    <h1>{filme.nome}</h1>
                    <img src={filme.foto} alt={filme.nome} />
                    <h3>Sinopse</h3>
                    {filme.sinopse}

                    <div className='areaButton'>
                        <button onClick={() => {salvarFilme()}} >Salvar</button>
                        <button >
                            <a target='blank' href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`} >
                                Trailer
                            </a>
                        </button>

                    </div>
                </div>
            </div>
        )
    }
    
}
