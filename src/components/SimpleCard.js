import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from "@material-ui/core/es/Chip/Chip";
import Avatar from "@material-ui/core/es/Avatar/Avatar";

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};


const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

const imageLogos = ["data:image/png;base64,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",
    "https://prod-rainesquare.charterhallweb.com/images/librariesprovider4/logos/wp-logo.png?sfvrsn=4733629b_0",
    // "https://parkingmgt.com/wp-content/uploads/2017/08/PMC-Logo-21-2.png",
    // "data:image/jpeg;base64,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evVnz4Iy6+SPfgXa2rZA1wrYg+GLDygg5yAQce76yyOLvHXptXPBY56ddJerYttpDAVLhjWxHpzVABTj0IwJTOW8z3XxhpEa0keUEyvazUM4gZhJAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEDXd/yj8jJju5t2lV9Hq712XQpVZWpateYuvPgJTzdgwx2mm1PjtMx/wC7Zov8FYrLSH0+r4eVNQ9tj6puc+CPPyjzL0HsAIq5+J+MmYmL7pGoj3RExNNXncz7JPTjSazdqdUjDBpes8xAbqyMMg9QQVYEfGVzzVrNJj1dxyWtGSJ9EVbdqeIdg1FD2BLcua2U8oevndUB9/slW+WfWW6jHeto6x6qpt5tLVnuk903m7Q31BeUoF57vUitSqHGO2C/MT7kI9ZVXHFomZ/RbbLNZiI/V50OlGi3q5gy+C9YKdR5WLOzr37ZPMP3jJtO6RGuu3MREXtO+kwj6twu0m26AoQyrTm1B1JrFaZwB6j2voR6zvliZvM/o5jJNYrEfqlNVuuh0G46cBlFTI6hhjlUDwyuSOir6Z7dRK64rWrbottlpW1evRw7PptTsdzm63Tfdu6nrznCqq5JOB5V7DOT2lmS9ckRyxO/srxUmkzzTEwmuG1ZdlryCM8xwQQcMzEdD1HQ9pRlnd5X4Y1SEnK1pAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEDBGRA4adm2yh8rTUpIIyEUdD3HadTe095cRjrHXT3pdq2/R281dVaNjGVUA4+YETe1u8lcda9oarNi2mxyTRSSSSSUU5J+keZf3R5VPZ7s2fbLa1VqaiEyFBRSFB93TpJjJaO0pnFSfRnT7Tt2lJ5Ka15hg8qKMg+hwOokTe095Ix1jtDSOH9mH93p/9a/6SfNv7o8qns3abadv0lvNXTWjYxlUUHB+IEib2nvKYx1r2hijaNu07kpTUpIIJCKMg9wekTe0+pGOsejzRsm1ae3mSipWHYhFBH8Okmcl56bRGKkeiQnCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgf/Z"

];

function SimpleCard(props) {
    const {classes} = props;

    //Parking info
    const {provider, cost, distance} = props;
    let {chips} = props;

    if (chips == null) {
        chips = ["Easy Access", "Overnight", "Card Accepted", "Tight Space", "Almost Empty"]
    }

    const imageUrl = imageLogos.random();

    chips = [chips.random()];


    return (
        <Card className={classes.card} style={{margin: "2%"}}>
            <CardActionArea style={{padding: "5%"}}>
                <CardMedia
                    component={"img"}
                    style={{width: "100%", maxHeight: 150}}
                    className={classes.media}
                    image={imageUrl}
                    title={provider}
                />
                <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
                        {distance ? distance : "100"}m away
                    </Typography>
                    <Typography component="h4" variant={"h4"}>
                        ${cost ? cost : "3"}
                        <br/>
                    </Typography>


                </CardContent>
                <CardActions>
                    {
                        chips.map((item, index) => {
                            return <Chip key={item + index + ""} label={item}/>
                        })
                    }
                    {/*<Button size="small">Learn More</Button>*/}
                </CardActions>
            </CardActionArea>
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);