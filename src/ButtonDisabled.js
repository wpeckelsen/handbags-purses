import React from 'react';

function ButtonDisabled({description}) {
    return (

        <button type="button" onClick={ ()=> console.log({description})} disabled={true}>
            {description}
        </button>

    );
}
export default ButtonDisabled;