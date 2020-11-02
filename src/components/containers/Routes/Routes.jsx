import React from 'react'
import { Router } from '@reach/router'
import SignUp from '../../SignUp/SignUp'


const Routes = () => {

    return (
        <Router>
            <SignUp path="/SignUp" />
        </Router>
    )
}

export default Routes