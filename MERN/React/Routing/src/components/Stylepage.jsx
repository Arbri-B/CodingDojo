import React from "react";
import { useParams } from "react-router-dom";

const StyledPage = () => {
    const {color, backgroundColor } = useParams();

    const style = {
        color: color || "black",
        backgroundColor: backgroundColor || "white",
    };

    return <h1 style={style}>The word is : Hello</h1>;
};

export default StyledPage;