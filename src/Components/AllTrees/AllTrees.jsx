import react, {useState, useEffect} from 'react'
import axios from 'axios'

const AllTrees = (props) => {

    const [trees, setTrees] = useState([])

    const getAllTrees = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/trees/all/')
        console.log(response.data)
        setTrees(response.data)
    }

    useEffect(()=>{
        getAllTrees();
    }, ([]))

    return (
        <div>
            <h2>This is ALL of the trees</h2>
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
export default AllTrees