import React from "react";
import Slider from "material-ui/Slider";

const SliderExample = () => (
    <div className="slider">
        <Slider className="test"/>
        <Slider className="test" defaultValue={0.5} />
        <Slider className="test" defaultValue={1} />
    </div>
);

export default SliderExample;
