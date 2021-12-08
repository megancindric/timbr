import React from 'react';

const LandingPage = (props) => {


    return (
        <div>
            <h2>Hello there, {(props.currentUser ? `${props.currentUser.first_name} ${props.currentUser.last_name}` : "guest user")}</h2>
            <h4>Welcome to Timbr | Tree-Hugging, Arboriculture, and all things tree-related</h4>
        </div>
    )

}
export default LandingPage