import './App.css';
import {Col, Row} from "react-bootstrap";
import ListFriends from "./components/ListFriends";
import FormAddFriend from "./components/FormAddFriend";
import BtnSelect from "./components/BtnSelect";

import { friends } from './fakeFriends'
import {useState} from "react";
import FormSplitBill from "./components/FormSplitBill";

function App() {
    const [addFriend, setAddFriend] = useState(true)
    const handleAddFriend = () => {
        setAddFriend(c => c = null)

    }


    return (
        <div className="app">
            <div className="sidebar">
                <ListFriends friends={friends}/>
                {addFriend ?? <FormAddFriend/>}
                <BtnSelect handle={handleAddFriend}>Add friend</BtnSelect>
            </div>
            <FormSplitBill/>
        </div>
    )
}

export default App;
