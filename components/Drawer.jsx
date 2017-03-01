import React from "react";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import MenuItem from "material-ui/MenuItem";

export default class DrawerOpenRightExample extends React.Component{
    constructor(props){
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render(){
        return(
            <div>
                <RaisedButton
                    label="SlideMenu"
                    onTouchTap={this.handleToggle}
                    backgroundColor="#9C37B0"
                />
                <Drawer width={200} openSecondary={true} open={this.state.open}>
                    <AppBar title="AppBar" />
                    <MenuItem>Menu1</MenuItem>
                    <MenuItem>Menu2</MenuItem>
                    <MenuItem>Menu3</MenuItem>
                </Drawer>
            </div>
        );
    }
}
