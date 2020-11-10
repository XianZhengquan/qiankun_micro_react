import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import ILayout from 'Layout';

import Home from 'views/home';
import About from 'views/about';

const Router: React.FC = () => {

    return (
        <HashRouter>
            <Switch>
                <ILayout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </Switch>
                </ILayout>
            </Switch>
        </HashRouter>
    );
};

export default Router;
