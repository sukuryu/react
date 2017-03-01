import React from "react";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import MenuItem from "material-ui/MenuItem";
import ArrowDropLeft from "material-ui/svg-icons/navigation-arrow-drop-right";
import Divider from "material-ui/Divider";
import SelectField from "material-ui/SelectField";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import {List, ListItem} from "material-ui/List";

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
                    <MenuItem
                        primaryText="left slide"
                        rightIcon={<ArrowDropLeft />}
                        menuItems={[
                            <MenuItem primaryText="sub title" onTouchTap={this.handleToggle}/>,  
                            <Divider />,
                            <ListItem
                                primaryText="Inbox"
                                primaryTogglesNestedList={true}
                                nestedItems={[
                                   <ListItem
                                        key={1}
                                        primaryText="sub"
                                    />,
                                    <ListItem
                                        key={2}
                                        primaryText="sub2"
                                    />
                                ]}
                            
                            />
                        ]}
                        />
                    <MenuItem>Menu2</MenuItem>
                    <MenuItem>Menu3</MenuItem>
                    <MenuItem
                        style={{
                            backgroundColor:"red"
                        }}
                        onTouchTap={this.handleToggle }
                    >Close</MenuItem>
                </Drawer>
            </div>
        );
    }
}
