import React from "react";
import { keyframes } from "styled-components";

// This component displays a flexbox layout with different flex properties.

export const Box = () => {
    const container = {
        display: "flex",
        flexFlow: "row wrap"
    };
    const item = {
      color: "dark",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    
    const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }`;
    
    const grow = {
        ...item,
        flexGrow: 4,
        backgroundColor: "red",
    };
    
    const shrink = {
        ...item,
        flexShrink: 2,
        backgroundColor: "green",
    };
    
    
    
    return <div style={container}>
        <div style={item}>Apple</div>
        <div style={grow}>Orange</div>
        <div style={shrink}>Lemon</div>
        <div style={item}>Tomato</div>
        <div style={item}>Banana</div>
    </div>
};
