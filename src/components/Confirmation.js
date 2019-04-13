import React, {Component} from 'react'
import Tick from '@material-ui/icons/Check'
import Fab from "@material-ui/core/es/Fab/Fab";
import Button from "@material-ui/core/es/Button/Button";
import Typography from "@material-ui/core/es/Typography/Typography";
import firebase from '../firebase'
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import CalIcon from '@material-ui/icons/CalendarToday'
import FullSchedule from "./FullSchedule";
import Collapse from "@material-ui/core/es/Collapse/Collapse";


class Confirmation extends Component {

    state = {
        smsReminderShown: false,
        overflowOpenTime: false,
    }

    sendUserToDatabase() {
        //Get user
        const uid = firebase.auth().currentUser.uid;
        const atm = new Date();
        const phone = prompt("What's your number?");
        atm.setHours(atm.getHours() + 4);
        console.log(atm);
        console.log(atm.getTime());
        console.log(phone);

        firebase.database().ref("/sms").child(uid).set({when: atm.getTime(), read: "4", phone}).then(() => {
            console.log("Done")
            ToastsStore.success("We will notify you before your parking ends")
            this.setState({smsReminderShown: true})
        })
    }

    render() {

        return (
            <div style={{backgroundColor: "#ededed", paddingTop: "5%", paddingBottom: "5%"}}>

                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_LEFT}/>

                <Fab size="small" style={{backgroundColor: "green", color: "white"}} aria-label="Add">
                    <Tick/>
                </Fab>

                <br/><br/>


                <Typography variant={"h4"}>4 hours</Typography>
                <br/>
                <Typography variant={"h6"}>Sunday, between 8am - 10pm</Typography>
                <br/>

                <Button style={{display: this.state.smsReminderShown ? "none" : ""}} onClick={() => {

                    this.sendUserToDatabase()
                }} variant="outlined" color="primary">
                    Get SMS Reminder
                </Button>

                <br/><br/>
                <div style={{alignItems: "middle", textAlign: "center"}}>
                    <Button onClick={() => {
                        this.setState({overflowOpenTime: !this.state.overflowOpenTime})
                    }} variant={"outlined"} color={"primary"} size="small">
                        <CalIcon/>
                        {this.state.overflowOpenTime ? "Hide" : "Show"} full schedule
                    </Button>

                    <br/><br/>

                    <Collapse in={this.state.overflowOpenTime} timeout="auto" unmountOnExit>
                         <FullSchedule/>
                    </Collapse>


                </div>


            </div>
        )
    }
}

export default Confirmation;



