import React from 'react';
import {Image} from "react-bootstrap";
import BtnSelect from "./BtnSelect";

function Friend({friend, onSelection, selectedFriend, setShowAddFriend}) {
    const isSelected = selectedFriend?.id === friend.id
    const handleGetSelectedName = () => {
        onSelection((current) => (
            current?.id === friend.id ? null : friend
        ))
        setShowAddFriend(true)
    }
    return (
        <>
            <li key={friend.id} className={isSelected ? "selected" : ""}>
                <h3>{friend.name}</h3>
                <Image src={friend.image} alt={friend.name}/>

                {friend.balance < 0 && (
                    <p className="red">
                        You owe {friend.name} {Math.abs(friend.balance)} €
                    </p>
                )}

                {friend.balance > 0 && (
                    <p className="green">
                        {friend.name} owe {Math.abs(friend.balance)} €
                    </p>
                )}

                {friend.balance === 0 && (
                    <p>
                        You and {friend.name} <strong>{Math.abs(friend.balance)}</strong> are even
                    </p>
                )}

                <BtnSelect onClick={handleGetSelectedName}>{isSelected ? "Close" : "Select"}</BtnSelect>
            </li>
        </>
    );
}

export default Friend;