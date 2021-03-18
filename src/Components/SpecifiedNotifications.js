import React from 'react'
import { Component } from 'react'
import { Col } from 'reactstrap';

class specifiedNotifications extends Component {
    constructor(props){
        super(props);
        this.state={
            notifications:0
        }
    }
    render(){
        return (
            <div className="container specific">
                <form onSubmit={this.props.onSubmit}>
                    <p>Notifications Form</p>
                    <div className="row">
                        <Col className="col-sm-10 col-12 mb-3 mb-sm-0">
                            <input type="text" placeholder="Name" className="form-control"/>
                        </Col>
                        <div className="col-12 col-sm-2">
                            <button type="submit" className="btn-lg">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default specifiedNotifications;
