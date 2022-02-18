import React, { useEffect, useState } from 'react'

export const Message2 = () => {

    const [coords, setcoords] = useState({x:0,y:0})
    const {x, y} = coords;
    useEffect(() => {

        const mouseMove = (e) => {
            // console.log(e);
            const coords = {
                x: e.x,
                y: e.y
            };
            setcoords(coords);

            console.log(':D');

        }
        
        window.addEventListener('mousemove', mouseMove)

        return () => {
            console.log('componente desmontado!');
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    return (
        <div>
            <h1>Eres genial!!</h1>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
