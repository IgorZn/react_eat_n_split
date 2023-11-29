import React, {useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import BtnSelect from "./BtnSelect";

function FormSplitBill({fiendName, setFriend}) {
    const [bill, setBill] = useState(null);
    const [paidByUser, setPaidByUser] = useState(null);
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const handleBill = (e) => {
        e.preventDefault()
        setBill(+e.target.value)
    }

    const handlePaidByUser = (e) => {
        e.preventDefault()
        const value = +e.target.value
        value > bill ? setPaidByUser(c => c) : setPaidByUser(value)

    }

    const handleWhoIsPaying = (e) => {
        e.preventDefault()
        setWhoIsPaying(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!bill || !paidByUser) return
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(whoIsPaying === e.target.value ? whoIsPaying : -paidByUser)
        const value = whoIsPaying === e.target.value ? whoIsPaying : -paidByUser
        setFriend((friends) =>
            friends.map((friend) => {
                if (friend.id === fiendName.id) return {...friend, balance: friend.balance + value}
                return friend
            }))
    }

    const placeholder = bill ? bill - paidByUser : fiendName.name + "' expense"

    return (
        <>

            <Form className={"form-split-bill"} onSubmit={handleSubmit} onChange={handleChange}>
                <h2 className={""}>Split a bill with - {fiendName.name}</h2>
                <Form.Group className="" controlId="formBill">
                    <Row className={""}>
                        <Col><Form.Label className={""}>Total bill value</Form.Label></Col>
                        <Col><Form.Control
                            type="text"
                            placeholder="Bill value"
                            value={bill}
                            onChange={handleBill}
                            onClick={(e) => e.target.placeholder = ""}
                            onBlur={(e) => e.target.placeholder = "Bill value"}
                        /></Col>
                    </Row>
                </Form.Group>
                <Form.Group className="" controlId="formExpense">
                    <Row className={""}>
                        <Col><Form.Label>Your part</Form.Label></Col>
                        <Col><Form.Control
                            type="text"
                            placeholder="Your part"
                            value={paidByUser}
                            onChange={handlePaidByUser}
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
                            <Form.Select
                                value={whoIsPaying}
                                onChange={handleWhoIsPaying}>
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