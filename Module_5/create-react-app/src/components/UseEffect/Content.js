import React, { useState, useEffect } from "react";
function Content() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    useEffect(() => {
        console.log('exec callback');
        fetch('https://reqres.in/api/users')
            .then(async (res) => {
                let result = await res.json();
                setUsers(result.data)
            })

        // cleanup function
        return () => {
            // console.log('unmouted');
        }
    }, [email, name])
    console.log(email);
    return (
        <div>
            <input type="text" onInput={(e) => setEmail(e.target.value)} />
            <br/>
            <input type="text" onInput={(e) => setName(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Avatar</th>
                        <th>Fullname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td><img src={user.avatar} alt=""/></td>
                                <td>{user.first_name} {user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Content;