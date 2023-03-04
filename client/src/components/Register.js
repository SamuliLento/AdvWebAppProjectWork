import { useState } from "react";

function Register ({jwt}) {

    const [userData, setUserData] = useState ({});

    const submit = (e) => {
        e.preventDefault();
        
        fetch("/api/users/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData),
            mode: "cors"
        })
            .then(response => response.json());
    }

    const handleChange = (e) => {
        setUserData({...userData, [e.target.id]: e.target.value});
    }

    return (
        <div>
            <h2>Register</h2>
            {!jwt && 
                <form onSubmit={submit} onChange={handleChange}>
                    <input id="username" type="string" placeholder="username"></input>
                    <input id="password" type="password" placeholder="password"></input>
                    <input id="submit" type="submit"></input>
                </form>
            }
            {jwt &&
                <p>You are already logged in</p>
            }
        </div>
    )
}

export default Register;
