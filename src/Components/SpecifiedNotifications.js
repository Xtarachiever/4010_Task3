import React from 'react'
import { Component } from 'react'

class specifiedNotifications extends Component {
    constructor(props){
        super(props);
        this.state={
            notifications:0
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <p>Notifications Form</p>
                    <input type="text" placeholder="Name"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default specifiedNotifications;
