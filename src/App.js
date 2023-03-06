import React, {useEffect, useState} from "react";
import "./App.css";
import User from "./User";
import usersJson from "./users.json";

const URL = "https://randomuser.me/api/";

const App = () => {
    const [users, setUsers] = useState([])
    const [gender, setGender] = useState(null);
    const [resultsNumber, setResultsNumber] = useState(10);

    useEffect(() => {
        fetch(`${URL}?results=${resultsNumber}&gender=${gender}`)
            .then(response => response.json())
            .then(({results}) => {
                setUsers(results)
            })
        ;

    }, [gender, resultsNumber])


    return (
        <div className="App">
            <h1>
                <a href="/instructions.html"> instructions </a>
            </h1>
            <div>
                <button onClick={() => setGender(null) }>Show All</button>
                <button onClick={() => setGender("male") }>Show Only Man</button>
                <button onClick={() => setGender("female") }>Show Only Female</button>
                &nbsp;
                <span>Results:</span>
                <select onChange={(e) => setResultsNumber(e.target.value)} defaultValue="10">
                    <option value="1">1</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>

                </select>
            </div>
            <div>
                <h3>Results</h3>

            </div>
            <div className="user-list">
                {
                    users.map(user => {
                        return <User key={user.login.uuid} user={user}/>
                    })
                }
            </div>
        </div>
    );
};

export default App;
