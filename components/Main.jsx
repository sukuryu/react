import AppBar from "./AppBarSample.jsx";
import React from "react";
import Slider from "./SliderSample.jsx"

class Main extends React.Component {
    render(){
        return(
            <div>
                <AppBar />
                <Slider />
            </div>
        );
    }
}

export default Main;
