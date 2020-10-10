import React from 'react';

const Scroll = (props) => {
    console.log(props);
    // return props.children;

    // create a scrollable component
    return (
        <div style={{overflowY:'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;