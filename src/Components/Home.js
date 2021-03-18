import React, { Component } from 'react'
import Interface from '../images/interface.png';
import people from '../images/people.png';
import social from '../images/social.png';
import gear from '../images/gear.png';
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
                    <h5 className="col-sm-2 col-2" >Notifications</h5>
                    <div className="sections col-sm-7 col-7 col-xl-5 ml-auto">
                      <div className="person" onClick={this.props.toggleModal}>
                        <img src={people} alt="people.png"/>
                        <sup>{notifications}</sup>
                      </div>
                      <div className="text d-sm-flex">
                        <span style={{fontWeight:'700'}}>Marina</span>
                        <span>Super Administrator</span>
                      </div>
                      <div className="social_img d-md-none d-block">
                        <img src={gear} alt="gear"/>
                      </div>
                      <div className="social d-none d-md-flex">
                        <img src={social} alt="social"/>
                        <span>Account Settings</span>
                      </div>
                      <div  className="interface">
                        <img src={Interface} alt="Interface"/>
                      </div>
                    </div>
                  </div>
                  <SpecifiedNotifications onSubmit={(e)=>this.onSubmit(e)}/>
            </div>
        )
    }
}

export default Home;
