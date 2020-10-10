import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='PA2'>
            <input type='search' placeholder='search robots' onChange={ searchChange }/>
        </div>
    );
}

export default SearchBox;