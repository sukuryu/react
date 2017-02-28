import React from "react";
import {render} from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

import Main from "../components/Main.jsx";


const {getMuiTheme, MuiThemeProvider} = require('material-ui/styles');
const {RaisedButton, AppBar} = require('material-ui');


const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Main />
    </MuiThemeProvider>
);

render(<App/>, document.getElementById("app"));
