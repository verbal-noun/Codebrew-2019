import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

import InfoIcon from '@material-ui/icons/Info';
import SimpleCard from "./SimpleCard";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

function getRandomDistance() {
    const BLOCK = 50;
    const factor = Math.floor(Math.random() * 20);
    const out =  BLOCK * factor;
    return out >= 50 ? out : getRandomDistance();
}

/**
 *
 * @returns {number}
 */
function getRandomCost() {
    const BLOCK = 1;
    const factor = Math.floor(Math.random() * 13);
    const out = BLOCK * factor;
    return out >= 1 ? out : getRandomCost();
}

const tileData = [
    {
        provider: "Wilson Parking",
        cost: getRandomCost(),
        distance: getRandomDistance()
    },
    {
        provider: "Secure Parking",
        cost: getRandomCost(),
        distance: getRandomDistance()
    },
    {
        provider: "Secure Parking",
        cost: getRandomCost(),
        distance: getRandomDistance()
    },
    {
        provider: "Ezy Park",
        cost: getRandomCost(),
        distance: getRandomDistance()
    }
];

tileData.sort((a, b) => a.cost - b.cost);


function ParkingSuggestions(props) {
    const {classes} = props;


    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map((tile, index) => {
                    const {provider, cost, distance} = tile;
                    console.log(provider, cost, distance);
                    return (
                        <SimpleCard key={provider + "" + index} provider={provider} cost={cost} distance={distance}/>
                    )
                })}
            </GridList>
        </div>
    );
}

ParkingSuggestions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParkingSuggestions);