import React from 'react';
import Friend from "./Friend";

function ListFriends({friends, onSelection, selectedName, setShowAddFriend}) {
    return (
        <div>
            <ul>
                {friends.map(friend => (
                    <Friend
                        friend={friend}
                        key={Math.random()}
                        onSelection={onSelection}
                        setShowAddFriend={setShowAddFriend}
                        selectedFriend={selectedName}/>
                ))}
            </ul>
        </div>
    );
}

export default ListFriends;