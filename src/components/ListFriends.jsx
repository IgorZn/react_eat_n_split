import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import Friend from "./Friend";

function ListFriends({friends}) {
    return (
        <div>
            <ul>
                {friends.map(friend => (
                    <Friend friend={friend} key={Math.random()}/>
                ))}
            </ul>
        </div>
    );
}

export default ListFriends;