import React, {useState, useEffect} from 'react'
import axios from 'axios'

const MyTrees = (props) => {

    const [trees, setTrees] = useState([])

    const getUserTrees = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/trees/', {headers:{Authorization: "Bearer " + localStorage.getItem('token')}})
        console.log(response.data)
        setTrees(response.data)
    }

    useEffect(()=>{
        getUserTrees();
    }, ([]))

    return (
        <div>
            {(props.currentUser) ? (<div><h2>This is {props.currentUser.first_name}'s trees</h2> 
            <ul>
                {trees.map((tree)=>{
                    return (
                    <li>{tree.common_name}  ~~~  {tree.scientific_name}</li>
                    )
                })}
            </ul></div>) : (<h4>No user signed in...</h4>)}
        </div>
    )

}
export default MyTrees