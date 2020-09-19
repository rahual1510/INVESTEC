import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';


import One from './Screens/One.js';
import Two from './Screens/Two.js';
import Third from './Screens/Third.js';



export class AppRouter extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene
                        key="tabbar"
                        tabs={true}
                        legacy={true}
                        swipeEnabled={false}
                        animationEnabled={true}
                        tabBarPosition='top'
                        hideNavBar>
                        <Scene key="One" component={One} title="One" hideNavBar initial />
                        <Scene key="Two" component={Two} title="Two" hideNavBar />
                        <Scene key="Third" component={Third} title="Third" hideNavBar />
                    </Scene>

                </Stack>
            </Router>
        )
    }
}

export default AppRouter;

