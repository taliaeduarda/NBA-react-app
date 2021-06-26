import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Home from './Components/Home/Home'
import Layout from './Hoc/Layout/Layout'

class Routes extends Component {
    render() {
        return (
            // high order components = header e footer
            <Layout>
             <Switch>
                <Route path='/' exact component={Home}/>
             </Switch>
            </Layout>
        )
    }
}

export default Routes;