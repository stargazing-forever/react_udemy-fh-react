import React from 'react'
import NavBar from '../components/ui/NavBar'

import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import MarvelScreen from '../components/marvel/MarvelScreen'
import HeroScreen from '../components/heroes/HeroScreen'
import DcScreen from '../components/dc/DcScreen'
import SearchScreen from '../components/search/SearchScreen'

const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className='container mt-2'>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/search" component={SearchScreen}></Route>
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
