import React from "react";
import CircularProgress from "material-ui/CircularProgress";

const CircularProgressExample = () => (
    <div>
        <CircularProgress />
        <CircularProgress size={60} thickness={10} color="#311B92"/>
        <CircularProgress size={100} thickness={5} color="#CDDC39"/>
    </div>
);

export default CircularProgressExample;

