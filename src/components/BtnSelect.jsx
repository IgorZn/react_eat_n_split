import React from 'react';

function BtnSelect({children, onClick}) {
    return (
        <button className={"button"} onClick={onClick}>{children}</button>
    );
}

export default BtnSelect;