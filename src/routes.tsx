import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Landing from './Pages/Landing'
import Posts from './Pages/Posts'
import Post from './Pages/Post';
const Routes = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/Posts' exact component={Posts}/>
            <Route path='/Posts/:id' component={Post} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;