import React from 'react'

function Dashboard(props) {
    let userProfile = props.userProfile;
    return (
        <div>
            <h1>Dashboard Page</h1>
            hello {userProfile.name}
            <br></br>
            <button onClick={() => clickMe(userProfile.name)}>Click Me</button>
        </div>
    )
}

function clickMe(name) {
    alert(name);
    console.log(name);
}

export default Dashboard

