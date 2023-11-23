import React, {useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import BtnSelect from "./BtnSelect";

function FormAddFriend({setFriend, setClose}) {
    const [friendName, setFriendName] = useState(null);
    const [friendAva, setFriendAva] = useState('https://i.pravatar.cc/48');

    const handleFriendName = (e) => {
        setFriendName(e.target.value)
    }

    const handleFriendAvaUrl = (e) => {
        const url = e.target.value
        const regex = /http:\/\/[A-Z]/g
        if(url.match(regex)) setFriendAva(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = Date.now()
        const newFriend = {
            id,
            name: friendName,
            image: friendAva + '?u=' + id,
            balance: 0
        }
        setFriend(friends => [...friends, newFriend])

        // Clean up
        setFriendAva(null)
        setFriendName(null)
        setClose(c => !c)
    }

    return (
        <>
            <Row>
                <Form className={"form-add-friend"} onSubmit={handleSubmit}>
                    <Form.Group className="">
                        <Row>
                            <Col className={""}>
                                <Form.Label>🧑‍Friend name</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control onChange={handleFriendName} type="text" placeholder="Name of your friend"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label onChange={handleFriendAvaUrl}>🖼️URL</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="URL"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"d-flex justify-content-end col-12"}>
                                <BtnSelect>Add</BtnSelect>
                            </Col>
                        </Row>
                    </Form.Group>

                </Form>
            </Row>

        </>
    );
}

export default FormAddFriend;