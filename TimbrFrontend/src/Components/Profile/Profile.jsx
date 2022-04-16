import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Profile = (props) => {


    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {props.currentUser.first_name}'s Profile
                </Card.Title>
                <Card.Text>
                    <ListGroup>
                        <ListGroup.Item>First Name: {props.currentUser.first_name}</ListGroup.Item>
                        <ListGroup.Item>Middle Name: {props.currentUser.middle_name}</ListGroup.Item>
                        <ListGroup.Item>Last Name: {props.currentUser.last_name}</ListGroup.Item>
                        <ListGroup.Item>Email: {props.currentUser.email}</ListGroup.Item>
                        <ListGroup.Item>Username: {props.currentUser.username}</ListGroup.Item>
                        <ListGroup.Item>UserID: {props.currentUser.id}</ListGroup.Item>
                    </ListGroup>

                </Card.Text>
            </Card.Body>

        </Card>
    )

}
export default Profile