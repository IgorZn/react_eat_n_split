import './App.css';
import {Col, Row} from "react-bootstrap";
import ListFriends from "./components/ListFriends";

const friends = [
    {
        id: Date.now(),
        name: 'Clark',
        image: 'https://i.pravatar.cc/48?u=a042581f4e29026704d',
        balance: -1
    },
    {
        id: Date.now(),
        name: 'Sarah',
        image: 'https://i.pravatar.cc/48?u=a042581f4e29026705d',
        balance: 10
    },
    {
        id: Date.now(),
        name: 'Anthony',
        image: 'https://i.pravatar.cc/48?u=a042581f4e29026706d',
        balance: 0
    },
]

function App() {
    return (
        <div className="app">
            <div className="sidebar">
                <ListFriends friends={friends}/>
            </div>

        </div>
    )
}

export default App;
