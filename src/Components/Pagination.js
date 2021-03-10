import React from 'react';
import { Component } from 'react';


class Pagination extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <p onClick={this.props.onClick}>View all Notifications</p>
        )
    }
}
export default Pagination;