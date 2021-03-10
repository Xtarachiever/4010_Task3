import React,{ Component } from 'react';
import {sample} from '../sample';
import Interface from '../images/50288f2aa1f853fbf243b7cf2d1ce073@2x.png'

class Notifications extends Component{
    constructor(props){
        super(props);
        this.state={
            dates:'',
            samples:sample,
            day:'',
            yesterday:'',
            nextDay:''
        }
    }
    componentDidMount(){
        // const currentDate=new Date().toLocaleDateString();
        // const currentDay=new Date().getDay();
        // console.log(currentDate)
        // const eachSample=sample.map(sample=>sample.Date);
        // for(let i of eachSample){
        //     const eachSampleDay=new Date(i).getDay();
        //     console.log(eachSampleDay)
        //     if(currentDate===i){
        //         this.setState({
        //             day:'Today'
        //         })
        //     }
        //     else if((currentDay-1)===eachSampleDay){
        //         this.setState({
        //             yesterday:'Yesterday'
        //         })
        //         console.log('yesterday')
        //     }
        //     else{
        //         this.setState({
        //             nextDay:i
        //         })
        //     }
        // }
        const{samples}=this.state
        const uniqueSample=samples.map(each=>each.Date)
        const uniques=Array.from(new Set(uniqueSample))
        // console.log(uniques)
    }
    // filter(samples){

    //     console.log(sampleDates)
    // }

    all(samples){
        this.state.samples.sort(function(a,b){
            return new Date(b.Date) - new Date(a.Date)
        })
        const currentDate=new Date();
        const currentDayNo=new Date().getDay();
        const currentDateDay=currentDate.getDate().toString();
        const currentDateMonth=(currentDate.getMonth()+1).toString();
        const currentDateYear=currentDate.getFullYear().toString();
        const eachSample=samples.Date;

        const convertDay=new Date(samples.Date).getDay();
        const sampleDate=eachSample.split('/');
        let [sampleMonth,sampleDay,sampleYear]=sampleDate
            if(currentDateDay===sampleDay &&  currentDateMonth===sampleMonth && currentDateYear===sampleYear){
               return 'Today';
            }
            else if(currentDateMonth===sampleMonth && currentDateYear===sampleYear && convertDay===(currentDayNo-1)){
                return 'Yesterday';
            }
            else{
                return eachSample;
            }
    }
    
    render(){
        const eachSample=this.state.samples.map(sample=>sample.Date)
        const todaysPosts=this.state.samples.filter(sample=>this.all(sample)==='Today')
        const yesterdayPosts=this.state.samples.filter(sample=>this.all(sample)==='Yesterday')
        const otherPosts=this.state.samples.filter(sample=>this.all(sample)=== sample.Date)
        // console.log(otherPosts)
        return(
            <div className="container notifications">
                {
                    sample.map(sample=>{
                        return(
                            <div className="announce">
                                <p className='days'>{this.all(sample)}</p>
                                <div className="row eachAnnouncements">
                                    <img src={Interface} className="sampleImages"/>
                                    <h6 className="col-sm-2">{sample.Time}</h6>
                                    <p className="col-sm-8">{sample.Announcements}</p>
                                </div>
                            </div>
                        )
                        
                    })
                }
            </div>
        )
    }
}
export default Notifications;