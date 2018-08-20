import React from 'react';
import { Route, Switch} from "react-router-dom";

//import App from "./App";
import Resources from './containers/Resources';
import Topics from './containers/Topics';
import TopicEdit from './containers/TopicEdit';
import Edit from './containers/Edit';
import TopicCreate from './containers/TopicCreate';
import ResourcesCreate from './containers/ResourcesCreate';

export default () => {
    return (
            <Switch>
                <Route exact path="/" component={Topics}/>
                <Route path="/edit/:topicId" component={Edit}/>
                <Route exact path="/create" component={TopicCreate}/>
                

                <Route exact path="/topics/:topicId" component={Resources}/> 
                <Route path="/topics/:topicId/create" component={ResourcesCreate}/>   
                
            </Switch>
    )
}

