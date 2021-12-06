import react, {useState, useEffect} from 'react'
import axios from 'axios'

const TreeDisplay = (props) => {

    const [trees, setTrees] = useState([])

    const getAllTrees = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/trees/all/')
        console.log(response.data)
        setTrees(response.data)
    }

    const getUserTrees = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/trees/', {headers:{Authorization: "Bearer " + localStorage.getItem('token')}})
        console.log(response.data)
        setTrees(response.data)
    }

    useEffect(()=>{
        getAllTrees();
    }, ([]))

    return (
        <div>
            <button onClick={getAllTrees}>Get All Trees</button>
            <button onClick={getUserTrees}>Get User's Trees</button>
            <ul>
                {trees.map((tree)=>{
                    return (
                    <li>{tree.common_name}  ~~~  {tree.scientific_name}</li>
                    )
                })}
            </ul>
        </div>
    )

}
export default TreeDisplay