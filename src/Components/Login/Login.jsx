import react, {useState} from 'react'
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

        const handleReset = (e) => {
            console.log("user logged out!");
            localStorage.setItem('token', null);
            props.setCurrentUserId(null)
            document.getElementById("registrationForm").reset();
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
            <button onClick={handleReset}>Log Out</button>

            </div>
           
            
        )
}

export default Login