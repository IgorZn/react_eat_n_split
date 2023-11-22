import React from 'react';

function BtnSelect({children, handle}) {
    return (
        <button className={"button"} onClick={handle}>{children}</button>
    );
}

export default BtnSelect;