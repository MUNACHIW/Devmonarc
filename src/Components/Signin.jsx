// src/components/LoginForm.js

import React, { useState } from "react";
import axios from 'axios';

function Signin() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                'https://backendportfolio-0tqd.onrender.com/api/adminsignin',
                { name, password },
                {
                    headers: {
                        'Content-Type': 'application/json', // Set the content type
                        // Add any other headers you need (e.g., authorization token)
                    },
                }
            );
            if (response.status === 200) {
                // Redirect to /post if authorized
                window.location.href = '/post';
            } else {
                console.log('Unauthorized:', response.data.message);
            }
        } catch (error) {
            console.error('Error indicating server or client failure:', error);
        }
    };

    return (
        <div className="formholder">
            <h1>Admin Signin</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Signin;
