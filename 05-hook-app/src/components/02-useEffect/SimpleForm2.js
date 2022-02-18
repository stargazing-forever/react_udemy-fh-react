import React, { useEffect, useState } from 'react'
//import { Message } from './Message';
import { Message2 } from './Message2';

export const SimpleForm2 = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        //console.log('hey!');
    }, []);

    useEffect( () => {
        //console.log('formState cambió!!');
    }, [formState]);

    useEffect( () => {
        //console.log('email cambió!!');
    }, [email]);

    const handleInputChange = ( {target} ) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="your name"
                    autoComplete="off"
                    value={ name }
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    name="email"
                    className="form-control"
                    placeholder="your email"
                    autoComplete="off"
                    value={ email }
                    onChange={handleInputChange}
                />
            </div>

            {/* NUEVOS CAMBIOS */}
            {/* {
                ( name === '123') && <Message />
            } */}
            {
                ( name === '123') && <Message2 />
            }
        </>
    )
}
