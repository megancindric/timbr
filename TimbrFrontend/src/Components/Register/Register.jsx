import React, {useState} from 'react'
import axios from 'axios'

const Register = (props) => {

        const [newUser, setNewUser] = useState({username: "", password: "", first_name:"", middle_name:"", last_name: "", email: "", })

        //Overwrite single newUser object at event.target.name property
        const handleChange = (event) => {
            setNewUser(oldUser => ({
                ...oldUser,
                [event.target.name]: event.target.value
            }));
        }

        const handleSubmit = async (e) => {
            e.preventDefault()
            props.registerUser(newUser)
            //Registration does not automatically log in user - will either need to manually or connect here via. props
//            localStorage.setItem('token', response.data.access)
        }

        return(
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" onChange={handleChange}/>
                <label>Password</label>
                <input type="text" onChange={handleChange}/>
                <label>First Name</label>
                <input type="text" onChange={handleChange}/>
                <label>Middle Name</label>
                <input type="text" onChange={handleChange}/>
                <label>Last Name</label>
                <input type="text" onChange={handleChange}/>
                <label>Email Address</label>
                <input type="text" onChange={handleChange}/>
                <button type="submit">Log In!</button>
            </form>
        )
}

export default Register