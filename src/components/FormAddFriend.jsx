import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import BtnSelect from "./BtnSelect";

function FormAddFriend(props) {
    return (
        <>
            <Row>
                <Form className={"form-add-friend"}>
                    <Form.Group className="">
                        <Row>
                            <Col className={""}>
                                <Form.Label>🧑‍Friend name</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Name of your friend"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>🖼️URL</Form.Label>
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