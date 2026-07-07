import React from "react";
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {
    const { store } = useGlobalReducer();
    const { theId } = useParams();

    // Busca el elemento en cualquiera de las listas que tenemos
    const person = store.people?.find(item => item.uid === theId);
    const planet = store.planets?.find(item => item.uid === theId);
    
    const item = person || planet;

    return (
        <div className="container mt-5 text-center">
            {item ? (
                <>
                    <h1 className="display-4 text-danger mb-4">{item.name}</h1>
                    <img 
                        src="https://preview.redd.it/what-does-star-wars-mean-to-you-v0-trjrcz5h4e0d1.jpeg?width=640&crop=smart&auto=webp&s=71c2a87cfb4450fecdedaee00372db3384264de2"
                        alt={item.name}
                        style={{ height: "350px", objectFit: "cover", borderRadius: "10px" }}
                    />
                    <p className="mt-4 lead">
                        Aquí van los detalles descriptivos de {item.name}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum rerum aspernatur illum cupiditate neque perferendis eaque nostrum adipisci, repudiandae ut iste! Quae, neque quo maiores deserunt in alias? Inventore!
                    </p>
                </>
            ) : (
                <h2 className="mt-5 text-muted">Cargando datos del imperio...</h2>
            )}
            
            <hr className="my-4" />
            
            <Link to="/">
                <button className="btn btn-primary btn-lg">Back home</button>
            </Link>
        </div>
    );
};