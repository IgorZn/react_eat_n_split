import './App.css';
import {Col, Row} from "react-bootstrap";
import ListFriends from "./components/ListFriends";
import FormAddFriend from "./components/FormAddFriend";
import BtnSelect from "./components/BtnSelect";

import { fakeFriends } from './fakeFriends'
import {useState} from "react";
import FormSplitBill from "./components/FormSplitBill";

function App() {
    const [friends, setFriends] = useState(fakeFriends);
    const [addFriend, setAddFriend] = useState(true)
    const handleAddFriend = () => {
        setAddFriend(c => !c)

    }


    return (
        <div className="app">
            <div className="sidebar">
                <ListFriends friends={friends}/>
                {addFriend ? "" : <FormAddFriend setFriend={setFriends} setClose={setAddFriend}/>}
                <BtnSelect handle={handleAddFriend}>
                    {addFriend ? "Add friend" : "Close"}
                </BtnSelect>
            </div>
            <FormSplitBill/>
        </div>
    )
}

export default App;
