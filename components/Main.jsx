import AppBar from "./AppBarSample.jsx";
import React from "react";
import Slider from "./SliderSample.jsx"
import Circul from "./circle.jsx"
import SlideMenu from "./Drawer.jsx";

class Main extends React.Component {
    render(){
        return(
            <div>
                <SlideMenu />
                <AppBar />
                <Slider />
                <Circul />
            </div>
        );
    }
}

export default Main;
