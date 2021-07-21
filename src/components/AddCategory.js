import React, { useState } from 'react'
import  PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [imputValue, setimputValue ] = useState('');

    const handInputChange = ( e ) => {
        setimputValue( e.target.value );
    }

    const handleSubmit = (e) => {    
        e.preventDefault();

        if ( imputValue.trim().length > 2 ) {
            setCategories( cate => [ imputValue, ...cate,] );
            setimputValue('');
        }
    
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ imputValue } 
                onChange={ handInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}