import React, { Component } from 'react'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    render() {
        return (
            <div>
                Home Page
                <br></br>
                <button onClick={() => this.getData()}>Call Rest API</button>
                <br></br>
                <ul>
                    {this.state.items.map((itm, index) => {
                        return <li id={itm.id}>{itm.name} (username is: {itm.username})</li>
                    })}
                </ul>
            </div>
        )
    }

    getData() {
        fetch("http://jsonplaceholder.typicode.com/users", {
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    items: response
                });
                console.log(this.state.items);
            })
            .catch(err => {
                this.setState({
                    error: err
                });
                console.log(this.state.error);
            });
    }

    postData() {
        fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                name: this.state.name,
                notes: this.state.notes
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export default Home
