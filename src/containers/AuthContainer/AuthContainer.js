import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import AuthUserComponent from '../../components/AuthUser/AuthUser'

class AuthContainer extends Component {
    constructor() {
        super()
        this.state = {

        }
    }



    render() {
        return (
            <React.Fragment>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={6} md={4}>
                        <AuthUserComponent />
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default AuthContainer;