import React, { Component } from 'react'

export class About extends Component {
    render() {
        let userProfile = this.props.userProfile;
        return (
            <div>
                About Page
                <button onClick={() => this.clickMe1(userProfile.name)}>Click Me1</button>
            </div>
        )
    }

    clickMe1(name) {
        console.log(name);
    }
}

export default About
