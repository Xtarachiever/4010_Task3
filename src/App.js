import React,{ Component } from 'react';
import './App.css';
import Notifications from './Components/Notifications';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
// import Moment from 'react-moment';
import Home from './Components/Home';
import {sample} from './sample';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import Pagination from './Components/Pagination';
import { Link } from 'react-router-dom';
import people from './images/people.png'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      modalOpen:false,
      samples:sample,
      pageNumber:3,
      currentPage:1,
      notifications:0
    }
    this.toggleModal=this.toggleModal.bind(this)
  }
  app(sample){
    const time=sample.Date
      const getCurrentTime=new Date().getTime();
      const getSampleTime=new Date(time).getTime();
      // console.log(getSampleTime)
      const hours=((getCurrentTime-getSampleTime)/3600000);
      if(hours>=24){
        return (Math.ceil(hours/24)+ 'days ago')
      }
      else{
        return (Math.ceil(hours)+'hours ago')
      }
  }
  toggleModal=()=>{
    this.setState({
      modalOpen:!this.state.modalOpen
    })
    this.setState({
      notifications:0
    })
  }
  render(){
    const indexOfLastPage=(this.state.pageNumber)*(this.state.currentPage);
    const indexOfFirstPage=indexOfLastPage-(this.state.pageNumber);
    const currentSample=(this.state.samples).slice(indexOfFirstPage,indexOfLastPage)
    const{samples}=this.state
    return (
      <div>
        <Router>
          <div className="App">
            <Home toggleModal={this.toggleModal} counter={(e)=>this.onSubmit(e)}/>
            <Switch>
              <Route exact path="/full/notifications" component={()=><Notifications notifications={this.state.samples}/>}/>
            </Switch>
          </div>
          <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
            Notifications
            </ModalHeader>
            <ModalBody className="modal-body">
            <div className="container">
              {
                (samples.length===0)?
                (<p>No Notifications</p>):
                (
                  currentSample.map(sample=>{
                    return(
                        <div className="modal-sample">
                          <div className="img_side">
                            <img src={people}/>
                            <p>{sample.Announcements}</p>
                          </div>
                            <p>{this.app(sample)}</p>
                        </div>   
                    )
                })
                )
              }
            </div>
            <Link to="/full/notifications"><Pagination  onClick={this.toggleModal}/></Link>
            </ModalBody>
          </Modal>
        </Router>
      </div>
    );
  }
}

export default App;
