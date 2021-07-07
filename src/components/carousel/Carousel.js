import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 500,

    },

    gridRoot: {
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.4)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',


    },
    paper: {

        backgroundColor: 'transparent',
        height: '100%',
        boxShadow: 'none',
    },
    paper2: {
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.4)',
            'box-shadow': '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',

        },
        '&:hover .MuiAvatar-root': {
            backgroundColor: 'rgb(255, 87, 34, 1)',
            color: 'rgb(255, 255, 255, 1)',
        }
    },
    buttonNavigation: {
        width: '100%',
        height: '100%',

    },
    buttonIcon: {
        background: 'red',
    },
    orange: {

        color: 'rgb(255, 255, 255, 0.2)',
        backgroundColor: 'rgb(255, 87, 34, 0.2)',
    },


}));


const images = [
    "static/image1.jpg",
    "static/image2.jpg",
    "static/image3.jpg",
    "static/image4.jpg"
];

function Carousel() {
    const classes = useStyles();
   
    const [carouselImage, setCarouselImage] = useState({
        id: 0,
        image: images[0]
    })



    const beforeClick = async (e, operation = 0) => {
        console.log(e);
        let idp = carouselImage.id
        console.log("images.length " + images.length + " operation " + operation + " idp " + idp);


        if (operation !== 0) {
            carouselImage.id === 0 ? idp = images.length - 1 : idp = carouselImage.id - 1
        } else {
            carouselImage.id + 1 === images.length ? idp = 0 : idp = carouselImage.id + 1
        }
        const img = new Image()
        img.src = await images[idp]
        console.log(idp);

        setCarouselImage({
            id: idp,
            // image: images[idp]
            image: img.src
        })
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={0} className={classes.gridRoot}
                style={{ backgroundImage: `url(${carouselImage.image})`, transitionDelay: '1s', }}
            >
                <Grid
                    item xs={1}
                    container
                    // direction="row"
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={`${classes.paper} ${classes.paper2}`}
                >
                    <Paper className={classes.paper}>
                        <IconButton
                            aria-label="previous"
                            component="span"
                            className={classes.buttonNavigation}
                            onClick={(e) => beforeClick(e, 1)}
                        >
                            <Avatar className={classes.orange}>   <NavigateBeforeIcon /></Avatar>
                        </IconButton></Paper>

                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}> </Paper>
                </Grid>
                <Grid item xs={1}
                    container
                    //  direction="row"
                    justify="center"
                    alignItems="center"
                    className={`${classes.paper} ${classes.paper2}`}
                >
                    <Paper className={classes.paper}>
                        <IconButton
                            aria-label="next"
                            component="span"
                            onClick={(e) => beforeClick(e, 0)}
                            className={classes.buttonNavigation}>
                            <Avatar className={classes.orange}>   <NavigateNextIcon /></Avatar>
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Carousel
