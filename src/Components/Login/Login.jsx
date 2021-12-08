import React, {useState} from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const Login = (props) => {

        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")

        const handleSubmit = async (e) => {
            e.preventDefault()
            let user = {
                "username": username,
                "password": password
            }

            let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', user);
            console.log(response.data)
            localStorage.setItem('token', response.data.access)
            const currentUserId = jwtDecode(response.data.access).user_id
            props.setCurrentUserId(currentUserId)
        }



        return(
            <div>
               <form onSubmit={handleSubmit} id="registrationForm">
                <label>Username</label>
                <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
                <label>Password</label>
                <input type="text" onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit">Log In!</button>
            </form>  

            </div>
           
            
        )
}

export default Login