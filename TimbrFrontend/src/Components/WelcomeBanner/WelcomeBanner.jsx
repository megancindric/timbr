
const WelcomeBanner = (props) => {


    return (
        <div>
            <h2>Hello there, {(props.currentUser ? `${props.currentUser.first_name} ${props.currentUser.last_name}` : "guest user")}</h2>
        </div>
    )

}
export default WelcomeBanner