import React, {useState} from 'react'
import axios from 'axios'

const Register = (props) => {

        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const [firstName, setFirstName] = useState("")
        const [lastName, setLastName] = useState("")
        const [middleName, setMiddleName] = useState("")
        const [email, setEmail] = useState("")

        const handleSubmit = async (e) => {
            e.preventDefault()
            let user = {
                "username": username,
                "password": password,
                "first_name": firstName,
                "last_name": lastName,
                "middle_name": middleName,
                "email": email
            }

            let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', user);
            console.log(response.data)
            //Registration does not automatically log in user - will either need to manually or connect here via. props
//            localStorage.setItem('token', response.data.access)
        }

        return(
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
                <label>Password</label>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
                <label>First Name</label>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)}/>
                <label>Middle Name</label>
                <input type="text" onChange={(e)=>setMiddleName(e.target.value)}/>
                <label>Last Name</label>
                <input type="text" onChange={(e)=>setLastName(e.target.value)}/>
                <label>Email Address</label>
                <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
                <button type="submit">Log In!</button>
            </form>
        )
}

export default Register