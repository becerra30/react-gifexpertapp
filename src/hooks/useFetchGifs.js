import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = ( category ) => {
    
    // Inicializacion de data
    const [state, setstate] = useState({
        data: [],
        loanding: true
    });


    // Se hace efecto para que se dispare cuando cambia Categoria 
    useEffect( () => {

        getGifs( category )             // Hace la peticion Htttp

            .then( imgs => {            // Se obtienen Imagenes

                // console.log (imgs);

                setstate({              // Se llama al setState con la info cambiada
                    data: imgs,         // y el setState renderiza el componente
                    loanding: false
                });
            });

    }, [ category ])


    return state; //{data:{}, loanding: true }

}
