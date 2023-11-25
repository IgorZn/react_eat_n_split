import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import BtnSelect from "./BtnSelect";

function FormSplitBill({fiendName}) {
    const placeholder = fiendName.name + "' expense"
    return (
        <>

            <Form className={"form-split-bill"}>
                <h2 className={""}>Split a bill with - {fiendName.name}</h2>
                <Form.Group className="" controlId="formBill">
                    <Row className={""}>
                        <Col><Form.Label className={""}>Bill value</Form.Label></Col>
                        <Col><Form.Control
                            type="text"
                            placeholder="Bill value"
                            onClick={(e) => e.target.placeholder = ""}
                            onBlur={(e) => e.target.placeholder = "Bill value"}
                        /></Col>
                    </Row>
                </Form.Group>
                <Form.Group className="" controlId="formExpense">
                    <Row className={""}>
                        <Col><Form.Label>Your expense</Form.Label></Col>
                        <Col><Form.Control
                            type="text"
                            placeholder="Your expense"
                            onClick={(e) => e.target.placeholder = ""}
                            onBlur={(e) => e.target.placeholder = "Your expense"}
                        /></Col>
                    </Row>
                </Form.Group>
                <fieldset disabled>
                    <Form.Group className="" controlId="xExpense">
                        <Row className={""}>
                            <Col><Form.Label>{fiendName.name}' expense</Form.Label></Col>
                            <Col><Form.Control type="text" placeholder={placeholder}/></Col>
                        </Row>
                    </Form.Group>
                </fieldset>
                <Form.Group className="" controlId="xExpense">
                    <Row className={""}>
                        <Col><Form.Label>Who is paying the bill</Form.Label></Col>
                        <Col>
                            <Form.Select >
                                <option value="user">You</option>
                                <option value="friend">{fiendName.name}</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className={""}>
                        <Col className={"d-flex flex-column align-items-end justify-content-end"}>
                            <BtnSelect>Split bill</BtnSelect>
                        </Col>

                    </Row>

                </Form.Group>


            </Form>
        </>
    );
}

export default FormSplitBill;