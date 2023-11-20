import React from 'react';
import {Image} from "react-bootstrap";

function Friend({friend}) {
    return (
        <>
            <li key={friend.id}>
                <h3>{friend.name}</h3>
                <Image src={friend.image} alt={friend.name}/>

                {friend.balance < 0 && (
                    <p className="red">
                        You owe {friend.name} {Math.abs(friend.balance)} €
                    </p>
                )}

                {friend.balance > 0 && (
                    <p className="green">
                        {friend.name} owe  {Math.abs(friend.balance)} €
                    </p>
                )}

                {friend.balance === 0 && (
                    <p>
                        You and {friend.name} {Math.abs(friend.balance)} are even
                    </p>
                )}

                <button className={"button"}>Select</button>
            </li>
        </>
    );
}

export default Friend;