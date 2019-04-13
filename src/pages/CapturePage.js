import React, {Component} from 'react'

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Appbar from "../components/Appbar";
import CameraIcon from '@material-ui/icons/Camera';

import CalIcon from '@material-ui/icons/CalendarToday'


import ImageMapper from 'react-image-mapper';

import mainImage from './phillipst-data.png'

import './video_overlay.css'

import Webcam from "react-webcam";
import ParkingSuggestions from "../components/ParkingSuggestions";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import Fab from "@material-ui/core/es/Fab/Fab";
import LinearProgress from "@material-ui/core/es/LinearProgress/LinearProgress";
import Confirmation from "../components/Confirmation";
import Divider from "@material-ui/core/es/Divider/Divider";


import {ToastsContainer, ToastsStore} from 'react-toasts';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const myImageUrl = "https://www.abc.net.au/cm/lb/10693788/data/phillipst-data.png";

const videoConstraints = {
    facingMode: "environment"
};

const AREA_IMAGE_MAP = {
    name: "my-map",
    areas: [
        {
            name: "1",
            shape: "poly",
            coords: [351, 534, 579, 523, 592, 766, 355, 765],
            preFillColor: "rgba(150,150,150,0.3)",
            fillColor: "blue"
        },
        /*{
            name: "2",
            shape: "poly",
            coords: [140, 166, 186, 116, 279, 180, 566, 60, 570, 112, 290, 265],
            preFillColor: "rgba(0,150,0,0.8)",
            fillColor: "blue"
        }*/
    ]
}


// {
//     name: "1",
//         shape
// :
//     "poly",
//         coords
// :
//     [351, 534, 579, 523, 355, 765, 592, 766],
//         preFillColor
// :
//     "green",
//         fillColor
// :
//     "blue"
// }
// ;


class CapturePage extends Component {

    state = {
        webcam: null,
        loading: false,
        photoTakenData: null,
        imageProcessed: false,
        goodResult: false
    };

    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
    }

    setRef(webcam) {
        this.setState({webcam});
    };

    capture() {
        if (this.state.webcam) {
            const imageSrc = this.state.webcam.getScreenshot();
            return imageSrc;
        }
    };

    takeAndProcessImage() {
        const image = this.capture();
        console.log(image);

        this.setState({loading: true, photoTakenData: mainImage});

        setTimeout(() => {
            this.setState({loading: false, imageProcessed: true})
        }, 2000)

    }

    render() {

        const width = "100%";
        const height = "auto";

        const wdth = window.innerWidth;

        const {loading, imageProcessed, photoTakenData} = this.state;
        let loadingComp = null;
        let afterComp = null;
        if (loading) {
            loadingComp = (
                <LinearProgress color={"secondary"}/>
            )
        }

        console.log(loading, photoTakenData);

        if (!loading && photoTakenData == null) {
            console.log("Reached here");
            afterComp = <div className="outer-container">
                <div className="inner-container">
                    <div onClick={() => {
                        this.takeAndProcessImage()
                    }} className="video-overlay">
                        <Fab color="secondary" aria-label="Add">
                            <CameraIcon/>
                        </Fab>
                    </div>
                    <Webcam audio={false} ref={this.setRef}
                            screenshotFormat="image/jpeg" className={"player"}
                            videoConstraints={videoConstraints} width={width}
                            style={{width, height}}/>
                </div>
            </div>
        } else if (photoTakenData != null && imageProcessed != null && !loading) {
            afterComp = (<div style={{textAlign: "center"}}>

                <ImageMapper lineWidth={10} strokeColor={"#2196f3"} width={wdth} imgWidth={700} src={mainImage}
                             map={AREA_IMAGE_MAP}/>



                <Confirmation/>


                <Button style={{marginTop: "2%"}} onClick={() => {
                    this.setState({photoTakenData: null, imageTaken: false})
                }} color="secondary">
                    Retake
                </Button>

                <br/>
                <Divider/>
            </div>)
        }


        return (
            <div>


                {loadingComp}

                <Grid container>

                    <Grid item xs={false} sm={2}/>
                    <Grid item xs={12} sm={8}>


                        {afterComp}


                    </Grid>

                </Grid>
                <br/><br/>

                <Grid container>
                    <Grid item xs={false} sm={2}/>
                    <Grid item xs={12} sm={8}>
                        <Typography style={{marginLeft: "3%"}} variant={"h4"}>Nearby Suggestions</Typography>
                        <br/>
                        <ParkingSuggestions/>
                    </Grid>
                </Grid>

                <br/><br/><br/><br/>

            </div>
        )
    }

}

export default withStyles(styles)(CapturePage);


