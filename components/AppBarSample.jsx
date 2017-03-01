import React from "react";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton"
import MoreVerIcon from "material-ui/svg-icons/navigation/more-vert";
import NavigationClose from "material-ui/svg-icons/navigation/close";

const Logged = () => (
    <IconMenu
        iconButtonElement = {
            <IconButton><MoreVerIcon /></IconButton>       
        }
        targetOrigin={{horizontal:"left", vertical:"top"}}
        anchorOrigin={{horizontal:"left", vertical:"top"}}
    >
        <MenuItem primaryText="test" />
        <MenuItem primaryText="test1" />
        <MenuItem primaryText="test2" />
    </IconMenu>
);

const AppBarSample = () => (
    <AppBar
        title="test"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={<Logged />}
    />
);

export default AppBarSample;
