import React , {Component} from 'react'
import {HashRouter,Route,Switch,Redirect } from 'react-router-dom'
import RouteAdmin from './router-admin'
import Login from '../pages/login'
import Error from '../pages/login/error'
import Layout from '../components/Layout'

import Home  from '../pages/layout/home'
import Table  from '../pages/layout/basic/table'
import Antd  from '../pages/layout/basic/antd'


export default class Router extends Component{

    render(){

        return (

           <HashRouter>
               <RouteAdmin>
                   <Route path="/"        render={() => <Redirect to="/layout"/>}/>
                   <Route path="/login"   component={Login}/>
                   <Route path="/layout"  render={()=>
                      <Layout>
                        <Switch>  
                         <Route path="/layout/home"           component={Home} /> 
                         <Route path="/layout/basic/table"    component={Table} /> 
                         <Route path="/layout/basic/antd"  component={Antd} /> 
                         
                         <Route component={Error} /> 
                         
                        </Switch>
                      </Layout>
                   }/>
                   <Redirect from="/layout" to="/layout/home"/>
               </RouteAdmin>
           </HashRouter>
        )


    }
    


} 


