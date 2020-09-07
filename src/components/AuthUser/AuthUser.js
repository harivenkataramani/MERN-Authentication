import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';

import { withStyles } from "@material-ui/core/styles";

// import classes from './authUser.css';

const styles = theme => ({
    root: {
        minWidth: "400px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",

    }
});

class AuthUser extends Component {
    constructor() {
        super()
        this.state = {

        }
    }



    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>

                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <form noValidate autoComplete="off">
                            <h1 style={{ textAlign: 'center' }}>Login</h1>
                            <Grid
                                container
                                direction="column"
                                justify="space-around"
                                alignItems="center"
                                spacing={8}>
                                <Grid item xs={8} sm={8} md={8} >
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-amount">Email ID</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            // value={values.amount}
                                            // onChange={handleChange('amount')}
                                            startAdornment={<InputAdornment position="start"><MailOutlineIcon /></InputAdornment>}
                                            labelWidth={60}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                justify="space-around"
                                alignItems="center"
                                spacing={8}>
                                <Grid item xs={8} sm={8} md={8} >
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            // value={values.amount}
                                            // onChange={handleChange('amount')}
                                            startAdornment={<InputAdornment position="start"><LockIcon /></InputAdornment>}
                                            labelWidth={70}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                justify="space-between"
                                alignItems="center"
                                spacing={8}>
                                <Grid item xs={12} sm={6} md={4} >
                                    <Button variant="contained" color="primary" size="medium" >
                                        LOGIN
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(AuthUser)