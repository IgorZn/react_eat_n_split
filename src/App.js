import './App.css';
import ListFriends from "./components/ListFriends";
import FormAddFriend from "./components/FormAddFriend";
import BtnSelect from "./components/BtnSelect";

import { fakeFriends } from './fakeFriends'
import {useState} from "react";
import FormSplitBill from "./components/FormSplitBill";


function App() {
    const [friends, setFriends] = useState(fakeFriends);
    const [addFriend, setAddFriend] = useState(true)
    const [selectFriend, setSelectFriend] = useState(null);
    const handleAddFriend = () => {
        setAddFriend(c => !c)
    }

    return (
        <div className="app">
            <div className="sidebar">
                <ListFriends
                    friends={friends}
                    onSelection={setSelectFriend}
                    setShowAddFriend={setAddFriend}
                    selectedName={selectFriend}/>
                {addFriend ? "" : <FormAddFriend setFriend={setFriends} setClose={setAddFriend}/>}
                <BtnSelect onClick={handleAddFriend}>
                    {addFriend ? "Add friend" : "Close"}
                </BtnSelect>
            </div>
            {selectFriend && <FormSplitBill fiendName={selectFriend} setFriend={setFriends}/>}

        </div>
    )
}

export default App;
