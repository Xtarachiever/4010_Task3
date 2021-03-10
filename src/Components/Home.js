import React, { Component } from 'react'
import Interface from '../images/interface.png';
import people from '../images/people.png';
import social from '../images/social.png';
import {Input,Col} from 'reactstrap';
import SpecifiedNotifications from './SpecifiedNotifications';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
          notifications:0
        }
    }
    onSubmit(e){
      e.preventDefault();
      this.setState({
        notifications:this.state.notifications+1
      })
    }
    render(){
      const {notifications}=this.state
      const {counter}=this.props
        return (
            <div className="container">
                <div className="row header d-flex">
                    <h5 className="col-md-2">Notifications</h5>
                    <div className="col-md-6">
                      <Col className="search">
                          <i className="fa fa-search"></i><Input type="text" name="names" id="names" placeholder="Search for students"/>
                      </Col>
                    </div>
                    <div className="sections col-md-4">
                      <div className="person" onClick={this.props.toggleModal}>
                        <img src={people} alt="people.png"/>
                        <sup>{notifications}</sup>
                      </div>
                      <div className="text">
                        <span style={{fontWeight:'700'}}>Marina</span>
                        <span>Super Administrator</span>
                      </div>
                      <div className="social">
                        <img src={social} alt="social"/>
                        <span>Account Settings</span>
                      </div>
                      <img src={Interface} alt="Interface" className="interface"/>
                    </div>
                  </div>
                  <SpecifiedNotifications onSubmit={(e)=>this.onSubmit(e)}/>
            </div>
        )
    }
}

export default Home;
