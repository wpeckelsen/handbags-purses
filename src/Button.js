import React from 'react';

function Button({description}) {
    return (

        <button type="button" onClick={ ()=> console.log({description})}>
            {description}
        </button>

    );
}



export default Button;
